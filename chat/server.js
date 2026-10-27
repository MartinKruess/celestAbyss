import { WebSocketServer, WebSocket } from 'ws';
import { authenticateChat } from './authentication.js';
import { chatStore } from './store.js';
import { chatError, parseCommand } from './protocol.js';
import { sessionEvents } from '../security/sessionEvents.js';
import { moderationService, moderationEvents } from '../moderation/service.js';

export function attachChat(server, { authenticate = authenticateChat, store = chatStore,
  events = sessionEvents, isReady = () => true, origins = '*', authTimeoutMs = 5000,
  recheckMs = 30000, heartbeatMs = 30000, sendLimit = 5, sendWindowMs = 10000,
  maxBufferedBytes = 1024 * 1024, moderation = moderationService, moderationSignals = moderationEvents,
  deliveryRetryMs = 1000, logger = console } = {}) {
  const wss = new WebSocketServer({ noServer: true, maxPayload: 16384, perMessageDeflate: false });
  const peers = new Map(), subscribers = new Set(), addresses = new Map(), sendBuckets = new Map(), reportBuckets = new Map(), attempts = new Map();
  const commands = new Set();
  let accepting = true, stopping = false, publication = Promise.resolve(), pendingPublications = 0, revocationVersion = 0;
  const fail = (peer, code, reason) => peer.ws.close(code, reason);
  const send = (peer, data) => {
    if (peer.ws.readyState !== WebSocket.OPEN) return false;
    if (peer.ws.bufferedAmount > maxBufferedBytes) { fail(peer, 1013, 'Slow client; reconnect and load history'); return false; }
    peer.ws.send(JSON.stringify({ version: 1, ...data }), error => { if (error) peer.ws.terminate(); });
    return true;
  };
  const live = (peer, message) => {
    if (!peer.subscribed || !peer.identity || peer.identity.expiresAt <= Date.now()) return;
    if (message.sequence <= peer.deliveredThrough) return;
    if (peer.syncing) {
      if (peer.buffer.some(entry => entry.id === message.id)) return;
      if (peer.buffer.length >= 100) return fail(peer, 1013, 'History synchronization overloaded');
      peer.buffer.push(message);
    } else if (send(peer, { type: 'message', message })) peer.deliveredThrough = message.sequence;
  };
  const publish = task => {
    if (pendingPublications >= 1000) throw chatError('CHAT_BUSY');
    pendingPublications++;
    const operation = publication.then(task);
    publication = operation.catch(() => {}).finally(() => pendingPublications--);
    return operation;
  };
  let deliveryFailed = false, retryRunning = false;
  const drainDeliveries = async () => {
    try {
      for (const message of await store.pendingDeliveries()) {
        for (const recipient of subscribers) live(recipient, message);
        await store.markDispatched(message.id);
      }
      if (deliveryFailed) logger.log('Chat delivery recovered; pending messages processed.');
      deliveryFailed = false;
    } catch {
      if (!deliveryFailed) logger.error('Chat delivery incomplete; durable pending messages will be retried.');
      deliveryFailed = true;
    }
  };
  const setIdentity = (peer, identity, token) => {
    if (peer.identity && (peer.identity.accountID !== identity.accountID || peer.identity.sessionID !== identity.sessionID)) throw chatError('SESSION_SWITCH_NOT_ALLOWED');
    peer.identity = identity; peer.token = token;
    clearTimeout(peer.authTimer); clearTimeout(peer.expiryTimer);
    peer.expiryTimer = setTimeout(() => fail(peer, 4001, 'Access token expired'), Math.max(1, identity.expiresAt - Date.now()));
    peer.expiryTimer.unref();
  };
  const verified = async token => {
    let version = revocationVersion;
    let identity = await authenticate(token);
    if (version !== revocationVersion) {
      version = revocationVersion; identity = await authenticate(token);
      if (version !== revocationVersion) throw chatError('AUTH_RETRY');
    }
    return identity;
  };
  const processCommand = async (peer, command) => {
    if (stopping || peer.ws.readyState !== WebSocket.OPEN) return;
    if (!isReady()) throw chatError('SERVICE_UNAVAILABLE');
    if (command.type === 'auth') {
      let identity;
      try { identity = await verified(command.token); }
      catch { send(peer, { type: 'error', requestID: command.requestID, error: 'INVALID_SESSION' }); fail(peer, 4001, 'Authentication failed'); return; }
      if (peer.ws.readyState !== WebSocket.OPEN) return;
      setIdentity(peer, identity, command.token);
      send(peer, { type: 'authenticated', requestID: command.requestID,
        accountID: identity.accountID, expiresAt: new Date(identity.expiresAt).toISOString() });
      return;
    }
    if (!peer.identity) throw chatError('AUTH_REQUIRED');
    try { await verified(peer.token); }
    catch { fail(peer, 4001, 'Session expired or revoked'); return; }
    if (peer.ws.readyState !== WebSocket.OPEN) return;
    if (command.type === 'subscribe') {
      peer.subscribed = true; subscribers.add(peer); peer.syncing = true; peer.buffer = [];
      try {
        const page = await store.history({ limit: 50 });
        if (send(peer, { type: 'subscribed', requestID: command.requestID, ...page })) {
          peer.deliveredThrough = Math.max(peer.deliveredThrough, page.highWater);
          peer.syncing = false;
          for (const message of peer.buffer) live(peer, message);
        }
      } catch (error) { peer.subscribed = false; subscribers.delete(peer); throw error; }
      finally { peer.syncing = false; peer.buffer = []; }
    } else if (command.type === 'unsubscribe') {
      peer.subscribed = false; subscribers.delete(peer);
      send(peer, { type: 'unsubscribed', requestID: command.requestID, channel: 'global' });
    } else if (command.type === 'history') {
      send(peer, { type: 'history', requestID: command.requestID, ...await store.history(command) });
    } else if (command.type === 'report') {
      const now = Date.now();
      let bucket = reportBuckets.get(peer.identity.accountID);
      if (!bucket || now >= bucket.reset) {
        if (!bucket && reportBuckets.size >= 10000) throw chatError('CHAT_BUSY');
        bucket = { count: 0, reset: now + 60000 }; reportBuckets.set(peer.identity.accountID, bucket);
      }
      if (++bucket.count > 5) throw chatError('REPORT_RATE_LIMITED');
      send(peer, { type: 'reported', requestID: command.requestID, ...await moderation.report({
        identity: peer.identity, messageID: command.messageID, reason: command.reason.trim(),
      }) });
    } else if (command.type === 'send') {
      if (!peer.subscribed) throw chatError('NOT_SUBSCRIBED');
      const key = peer.identity.accountID, now = Date.now();
      let bucket = sendBuckets.get(key);
      if (!bucket || bucket.reset <= now) {
        if (!bucket && sendBuckets.size >= 10000) throw chatError('CHAT_BUSY');
        bucket = { count: 0, reset: now + sendWindowMs }; sendBuckets.set(key, bucket);
      }
      if (++bucket.count > sendLimit) throw chatError('RATE_LIMITED');
      // Context analysis must not stall the global publication queue.
      const decision = await moderation.prepare({ identity: peer.identity, clientMessageID: command.clientMessageID, text: command.text });
      if (decision.action === 'block' || decision.action === 'hold') {
        send(peer, { type: decision.action === 'block' ? 'blocked' : 'held', requestID: command.requestID,
          clientMessageID: command.clientMessageID, caseID: decision.caseID,
          notice: decision.action === 'block' ? 'Diese Nachricht wurde gesperrt und zur Prüfung gemeldet.' : 'Diese Nachricht wird vor der Zustellung geprüft.' });
        return;
      }
      await publish(async () => {
        // Logout may have happened while this message waited in the queue.
        if (stopping || peer.ws.readyState !== WebSocket.OPEN) return;
        await verified(peer.token);
        if (peer.ws.readyState !== WebSocket.OPEN) return;
        const result = await store.append({ identity: peer.identity, clientMessageID: command.clientMessageID,
          text: decision.text, originalText: command.text,
          onStored: ({ message, session }) => moderation.published?.({ caseID: decision.caseID, message, session }) });
        // Persistence precedes both acknowledgement and distribution.
        send(peer, { type: 'sent', requestID: command.requestID, duplicate: !result.created, message: result.message });
        await drainDeliveries();
      });
    }
  };
  const onRevoked = ({ sessionID, accountID }) => {
    revocationVersion++;
    for (const peer of peers.values()) if (peer.identity &&
      (peer.identity.sessionID === sessionID || peer.identity.accountID === accountID)) fail(peer, 4001, 'Session revoked');
  };
  events.on('revoked', onRevoked);
  const onResolved = result => {
    for (const peer of peers.values()) if (peer.identity?.accountID === result.senderID) send(peer, {
      type: 'moderation-result', caseID: result.caseID, clientMessageID: result.clientMessageID, status: result.status,
    });
  };
  moderationSignals.on('resolved', onResolved);
  const rejectUpgrade = (socket, status, reason) => socket.end(`HTTP/1.1 ${status} ${reason}\r\nConnection: close\r\nContent-Length: 0\r\n\r\n`);
  const upgrade = (request, socket, head) => {
    socket.on('error', () => {});
    // No credentials in URLs. Native clients may omit Origin.
    if (request.url !== '/chat') return rejectUpgrade(socket, 404, 'Not Found');
    if (!accepting || !isReady()) return rejectUpgrade(socket, 503, 'Unavailable');
    if (request.headers.origin && origins !== '*' && !origins.includes(request.headers.origin)) return rejectUpgrade(socket, 403, 'Forbidden');
    const address = socket.remoteAddress || 'unknown';
    let bucket = attempts.get(address);
    if (!bucket || bucket.reset <= Date.now()) {
      if (!bucket && attempts.size >= 10000) return rejectUpgrade(socket, 503, 'Unavailable');
      bucket = { count: 0, reset: Date.now() + 60000 }; attempts.set(address, bucket);
    }
    if (++bucket.count > 60 || (addresses.get(address) || 0) >= 10) return rejectUpgrade(socket, 429, 'Too Many Requests');
    wss.handleUpgrade(request, socket, head, ws => wss.emit('connection', ws, address));
  };
  server.on('upgrade', upgrade);
  wss.on('error', () => {});
  wss.on('connection', (ws, address) => {
    const peer = { ws, identity: null, subscribed: false, syncing: false, buffer: [], deliveredThrough: 0, pending: 0, queue: Promise.resolve(), alive: true,
      commandCount: 0, commandReset: Date.now() + 60000 };
    peers.set(ws, peer); addresses.set(address, (addresses.get(address) || 0) + 1);
    peer.authTimer = setTimeout(() => fail(peer, 4001, 'Authentication timeout'), authTimeoutMs);
    peer.authTimer.unref();
    const recheck = async () => {
      try { if (peer.identity) await verified(peer.token); }
      catch { fail(peer, 4001, 'Session expired or revoked'); }
      if (accepting && peers.has(ws)) { peer.recheckTimer = setTimeout(recheck, recheckMs); peer.recheckTimer.unref(); }
    };
    peer.recheckTimer = setTimeout(recheck, recheckMs + Math.random() * recheckMs); peer.recheckTimer.unref();
    ws.on('error', () => {});
    ws.on('pong', () => { peer.alive = true; });
    ws.on('message', (data, binary) => {
      if (!accepting) return;
      if (Date.now() >= peer.commandReset) { peer.commandCount = 0; peer.commandReset = Date.now() + 60000; }
      if (++peer.commandCount > 60 || peer.pending >= 16) return fail(peer, 1008, 'Too many commands');
      let command;
      try { command = parseCommand(data, binary); }
      catch (error) { send(peer, { type: 'error', error: error.publicCode || 'INVALID_REQUEST' }); return; }
      peer.pending++;
      peer.queue = peer.queue.then(() => processCommand(peer, command)).catch(error => {
        send(peer, { type: 'error', requestID: command.requestID, error: error.publicCode || 'CHAT_OPERATION_FAILED' });
      }).finally(() => peer.pending--);
      const operation = peer.queue;
      commands.add(operation);
      operation.then(() => commands.delete(operation), () => commands.delete(operation));
    });
    ws.on('close', () => {
      peers.delete(ws);
      subscribers.delete(peer);
      const count = (addresses.get(address) || 1) - 1;
      if (count) addresses.set(address, count); else addresses.delete(address);
      clearTimeout(peer.authTimer); clearTimeout(peer.expiryTimer); clearTimeout(peer.recheckTimer);
    });
    send(peer, { type: 'hello', authTimeoutMs });
  });
  const heartbeat = setInterval(() => {
    for (const peer of peers.values()) {
      if (!peer.alive || !isReady()) { peer.ws.terminate(); continue; }
      peer.alive = false; if (peer.ws.readyState === WebSocket.OPEN) peer.ws.ping();
    }
    for (const map of [attempts, sendBuckets, reportBuckets]) for (const [key, value] of map) if (value.reset <= Date.now()) map.delete(key);
  }, heartbeatMs);
  heartbeat.unref();
  const deliveryRetry = setInterval(() => {
    if (!accepting || !isReady() || retryRunning) return;
    retryRunning = true;
    try {
      publish(drainDeliveries).catch(() => {}).finally(() => { retryRunning = false; });
    } catch { retryRunning = false; }
  }, deliveryRetryMs);
  deliveryRetry.unref();
  return { wss, stop: async () => {
    accepting = false; clearInterval(heartbeat); clearInterval(deliveryRetry);
    // Keep the upgrade handler in place to explicitly reject new connections.
    for (const peer of peers.values()) {
      clearTimeout(peer.authTimer); clearTimeout(peer.expiryTimer); clearTimeout(peer.recheckTimer);
    }
    // A disconnected peer can still have a moderation or persistence operation in flight.
    while (commands.size) await Promise.allSettled([...commands]);
    await publication;
    stopping = true; events.off('revoked', onRevoked); moderationSignals.off('resolved', onResolved);
    for (const peer of peers.values()) fail(peer, 1001, 'Server shutting down');
  } };
}

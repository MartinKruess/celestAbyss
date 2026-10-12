import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { harness } from './helpers/chatHarness.js';

const login = (client, token) => client.command({ type: 'auth', token });
const subscribe = client => client.command({ type: 'subscribe', channel: 'global' });
const message = (client, clientMessageID, text) => client.command({ type: 'send', channel: 'global', clientMessageID, text });

test('global chat authenticates, persists, acknowledges, distributes and deduplicates', async () => {
  const h = await harness();
  try {
    const one = await h.connect(), two = await h.connect();
    assert.equal((await subscribe(one)).error, 'AUTH_REQUIRED');
    await login(one, 'one'); await login(two, 'two');
    await subscribe(one); await subscribe(two);
    const ack = await message(one, 'm1', 'hello');
    assert.equal(ack.type, 'sent'); assert.equal(ack.message.sender.username, 'One');
    assert.equal(h.store.messages.length, 1);
    await two.next(event => event.type === 'message' && event.message.id === ack.message.id);
    const duplicate = await message(one, 'm1', 'hello'); assert.equal(duplicate.duplicate, true);
    assert.equal(h.store.messages.length, 1);
    assert.equal((await message(one, 'm1', 'different')).error, 'MESSAGE_ID_CONFLICT');
    await two.command({ type: 'unsubscribe', channel: 'global' });
    const before = two.messages.filter(event => event.type === 'message').length;
    await message(one, 'm2', 'second');
    const history = await two.command({ type: 'history', channel: 'global' });
    assert.equal(history.messages.length, 2);
    assert.equal(two.messages.filter(event => event.type === 'message').length, before);
    h.store.fail = true;
    assert.equal((await message(one, 'm3', 'not stored')).error, 'CHAT_OPERATION_FAILED');
    assert.equal(h.store.messages.length, 2);
  } finally { await h.stop(); }
});

test('subscribe buffers concurrent live delivery without gaps or duplicate snapshots', async () => {
  for (const includeInSnapshot of [false, true]) {
    const h = await harness();
    try {
      const one = await h.connect(), two = await h.connect();
      await login(one, 'one'); await login(two, 'two'); await subscribe(one);
      const original = h.store.history;
      let entered, release;
      const started = new Promise(resolve => { entered = resolve; });
      const gate = new Promise(resolve => { release = resolve; });
      h.store.history = async args => {
        const initial = await original(args); entered(); await gate;
        return includeInSnapshot ? original(args) : initial;
      };
      const subscription = subscribe(two); await started;
      await message(one, 'during', 'during snapshot'); release();
      const snapshot = await subscription;
      if (!includeInSnapshot) await two.next(event => event.type === 'message');
      const displayed = [...snapshot.messages, ...two.messages.filter(event => event.type === 'message').map(event => event.message)];
      assert.equal(displayed.length, 1); assert.equal(displayed[0].text, 'during snapshot');
    } finally { await h.stop(); }
  }
});

test('history never exposes messages outside latest 50, including old cursors', async () => {
  const h = await harness();
  try {
    for (let i = 1; i <= 75; i++) h.store.messages.push({ id: String(i), sequence: i, text: String(i), channel: 'global' });
    const client = await h.connect(); await login(client, 'one');
    const page = await subscribe(client);
    assert.equal(page.messages.length, 50); assert.equal(page.messages[0].sequence, 26); assert.equal(page.highWater, 75);
    const older = await client.command({ type: 'history', channel: 'global', before: 26 });
    assert.equal(older.messages.length, 0); assert.equal(older.hasMore, false);
    const reconnect = await client.command({ type: 'history', channel: 'global', after: 10, through: 60, limit: 20 });
    assert.equal(reconnect.messages[0].sequence, 26); assert.equal(reconnect.nextAfter, 45); assert.equal(reconnect.highWater, 60);
    assert.equal(reconnect.historyTruncated, true);
    const historical = await client.command({ type: 'history', channel: 'global', through: 25 });
    assert.deepEqual(historical.messages, []);
    h.store.messages.push({ id: '76', sequence: 76, text: '76', channel: 'global' });
    const advanced = await client.command({ type: 'history', channel: 'global', before: 27 });
    assert.deepEqual(advanced.messages, []);
  } finally { await h.stop(); }
});

test('logout closes matching socket; auth timeout and access expiry close unauthorised peers', async () => {
  const h = await harness({ authTimeoutMs: 100 });
  try {
    const one = await h.connect(); await login(one, 'one');
    const revoked = once(one.ws, 'close'); h.events.emit('revoked', { sessionID: h.identities.get('one').sessionID });
    assert.equal((await revoked)[0], 4001);
    const anonymous = await h.connect(); assert.equal((await once(anonymous.ws, 'close'))[0], 4001);
    h.identities.get('two').expiresAt = Date.now() + 150;
    const two = await h.connect(); await login(two, 'two'); assert.equal((await once(two.ws, 'close'))[0], 4001);
  } finally { await h.stop(); }
});

test('account send limit applies across connections and rejects unsubscribed sends', async () => {
  const h = await harness({ sendLimit: 1 });
  try {
    const one = await h.connect(), two = await h.connect();
    await login(one, 'one'); await login(two, 'one');
    assert.equal((await message(one, 'm0', 'no subscription')).error, 'NOT_SUBSCRIBED');
    await subscribe(one); await subscribe(two);
    assert.equal((await message(one, 'm1', 'first')).type, 'sent');
    assert.equal((await message(two, 'm2', 'second')).error, 'RATE_LIMITED');
    assert.equal(h.store.messages.length, 1);
  } finally { await h.stop(); }
});

test('malformed and oversized payloads do not crash chat server', async () => {
  const h = await harness();
  try {
    const client = await h.connect();
    client.ws.send('{'); assert.equal((await client.next(event => event.type === 'error')).error, 'INVALID_JSON');
    const closed = once(client.ws, 'close'); client.ws.send('a'.repeat(17000)); assert.equal((await closed)[0], 1009);
    const healthy = await h.connect(); assert.equal((await login(healthy, 'one')).type, 'authenticated');
  } finally { await h.stop(); }
});

test('idle sockets are closed when a session check fails; reauthentication keeps same session', async () => {
  const h = await harness({ recheckMs: 20 });
  try {
    const client = await h.connect(); await login(client, 'one'); await subscribe(client);
    const same = { ...h.identities.get('one'), expiresAt: Date.now() + 120000 };
    h.identities.set('renewed', same);
    assert.equal((await login(client, 'renewed')).type, 'authenticated');
    const closed = once(client.ws, 'close'); h.identities.delete('renewed');
    assert.equal((await closed)[0], 4001);
  } finally { await h.stop(); }
});

test('slow clients are disconnected rather than receiving unbounded buffers', async () => {
  const h = await harness({ maxBufferedBytes: 1024 });
  try {
    const client = await h.connect(); await login(client, 'one');
    const serverSocket = [...h.chat.wss.clients][0];
    Object.defineProperty(serverSocket, 'bufferedAmount', { get: () => 2048 });
    const closed = once(client.ws, 'close');
    client.ws.send(JSON.stringify({ type: 'subscribe', requestID: 'slow', channel: 'global' }));
    assert.equal((await closed)[0], 1013);
  } finally { await h.stop(); }
});

test('browser origins and unknown WebSocket paths are rejected before authentication', async () => {
  const h = await harness({ origins: ['https://game.example'] });
  try {
    await assert.rejects(h.connect('/chat', 'https://foreign.example'));
    await assert.rejects(h.connect('/playerData'));
    const client = await h.connect('/chat', 'https://game.example');
    assert.equal((await login(client, 'one')).type, 'authenticated');
  } finally { await h.stop(); }
});

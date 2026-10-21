import { createServer } from 'node:http';
import { once } from 'node:events';
import { EventEmitter } from 'node:events';
import { WebSocket } from 'ws';
import { attachChat } from '../../chat/server.js';
import { chatError } from '../../chat/protocol.js';
import { visibleHistory } from '../../chat/history.js';

export function memoryStore(initial = []) {
  const messages = [...initial];
  return {
    messages, fail: false,
    append: async function ({ identity, clientMessageID, text }) {
      if (this.fail) throw new Error('database secret');
      const existing = messages.find(message => message.sender.accountID === identity.accountID && message.clientMessageID === clientMessageID);
      if (existing) {
        if (!messages.slice(-50).includes(existing)) throw chatError('MESSAGE_OUTSIDE_HISTORY');
        if (existing.text !== text) throw chatError('MESSAGE_ID_CONFLICT');
        return { message: existing, created: false };
      }
      const message = { id: String(messages.length + 1), channel: 'global', sequence: messages.length + 1,
        sender: { accountID: identity.accountID, username: identity.username }, clientMessageID, text, sentAt: new Date().toISOString() };
      messages.push(message); return { message, created: true };
    },
    history: async (options = {}) => visibleHistory(messages.slice(-50), options, messages.at(-1)?.sequence ?? 0),
  };
}

export async function harness(options = {}) {
  const events = new EventEmitter(), store = memoryStore();
  const identities = new Map([
    ['one', { accountID: 'a'.repeat(24), sessionID: 'b'.repeat(24), username: 'One', expiresAt: Date.now() + 60000 }],
    ['two', { accountID: 'c'.repeat(24), sessionID: 'd'.repeat(24), username: 'Two', expiresAt: Date.now() + 60000 }],
  ]);
  const authenticate = async token => { if (!identities.has(token)) throw new Error('invalid'); return identities.get(token); };
  const http = createServer();
  const chat = attachChat(http, { events, store, authenticate,
    moderation: { prepare: async ({ text }) => ({ action: 'allow', text }) }, ...options });
  http.listen(0, '127.0.0.1'); await once(http, 'listening');
  const clients = [];
  const connect = async (path = '/chat', origin) => {
    const ws = new WebSocket(`ws://127.0.0.1:${http.address().port}${path}`, origin ? { origin } : undefined);
    clients.push(ws);
    const messages = [], waiters = [];
    ws.on('message', data => {
      const message = JSON.parse(data.toString()); messages.push(message);
      for (const waiter of [...waiters]) if (waiter.match(message)) { waiters.splice(waiters.indexOf(waiter), 1); clearTimeout(waiter.timer); waiter.resolve(message); }
    });
    const next = match => {
      const existing = messages.find(match); if (existing) return Promise.resolve(existing);
      return new Promise((resolve, reject) => {
        const waiter = { match, resolve };
        waiter.timer = setTimeout(() => { waiters.splice(waiters.indexOf(waiter), 1); reject(new Error('Chat response timeout')); }, 2000);
        waiters.push(waiter);
      });
    };
    ws.on('error', () => {});
    await once(ws, 'open');
    await next(message => message.type === 'hello');
    let request = 0;
    const command = async data => {
      const requestID = `r${++request}`;
      ws.send(JSON.stringify({ ...data, requestID }));
      return next(message => message.requestID === requestID);
    };
    return { ws, messages, next, command };
  };
  return { chat, http, connect, identities, events, store, stop: async () => {
    const stopping = chat.stop();
    clients.forEach(ws => ws.terminate());
    await stopping;
    await new Promise(resolve => chat.wss.close(resolve));
    await new Promise(resolve => http.close(resolve));
  } };
}

import 'dotenv/config';
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { once } from 'node:events';
import mongoose from 'mongoose';
import { WebSocket } from 'ws';
import { readRuntimeConfig } from '../config/runtime.js';
import { startBackend } from '../runtime.js';
import { UserDataModel } from '../models/userSchema.js';
import { SessionModel } from '../models/sessionSchema.js';
import { ChatMessageModel, ChatCounterModel } from '../models/chatSchema.js';
import { hashPassword } from '../security/passwords.js';
import { chatStore } from '../chat/store.js';

if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Requires celestabyss_dev');
const accounts = [], sockets = [];
let backend, stage = 'start';
async function client(url) {
  const ws = new WebSocket(url); sockets.push(ws);
  const received = [], waiters = [];
  ws.on('error', () => {});
  ws.on('message', data => {
    const message = JSON.parse(data.toString()); received.push(message);
    for (const waiter of [...waiters]) if (waiter.match(message)) {
      clearTimeout(waiter.timer); waiters.splice(waiters.indexOf(waiter), 1); waiter.resolve(message);
    }
  });
  const next = match => {
    const existing = received.find(match); if (existing) return Promise.resolve(existing);
    return new Promise((resolve, reject) => {
      const waiter = { match, resolve };
      waiter.timer = setTimeout(() => { waiters.splice(waiters.indexOf(waiter), 1); reject(new Error('Response timeout')); }, 5000);
      waiters.push(waiter);
    });
  };
  await once(ws, 'open'); await next(message => message.type === 'hello');
  let request = 0;
  return { ws, next, command: async data => {
    const requestID = `r${++request}`; ws.send(JSON.stringify({ ...data, requestID }));
    return next(message => message.requestID === requestID);
  } };
}
try {
  backend = await startBackend({ ...readRuntimeConfig(), port: 0, wsPort: 0 });
  await UserDataModel.createIndexes();
  const suffix = randomBytes(6).toString('hex'), password = randomBytes(24).toString('hex');
  for (const name of ['sender', 'receiver']) accounts.push(await UserDataModel.create({
    username: `${name}_${suffix}`, email: `${name}_${suffix}@example.invalid`, password: await hashPassword(password),
  }));
  const base = `http://127.0.0.1:${backend.http.address().port}`;
  const post = async (path, body, token) => {
    const response = await fetch(base + path, { method: 'POST', headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) }, body: JSON.stringify(body) });
    return { status: response.status, body: response.status === 204 ? null : await response.json() };
  };
  const credentials = await Promise.all(accounts.map(async account => {
    const result = await post('/user/login', { username: account.username, password });
    assert.equal(result.status, 200); return result.body;
  }));
  const url = `ws://127.0.0.1:${backend.wsHttp.address().port}/chat`;
  const one = await client(url), two = await client(url);
  stage = 'authentication';
  assert.equal((await one.command({ type: 'auth', token: credentials[0].token })).type, 'authenticated');
  assert.equal((await two.command({ type: 'auth', token: credentials[1].token })).type, 'authenticated');
  await one.command({ type: 'subscribe', channel: 'global' });
  const initial = await two.command({ type: 'subscribe', channel: 'global' });
  stage = 'persistent send';
  const payload = { type: 'send', channel: 'global', clientMessageID: `test_${suffix}`, text: 'Automated chat smoke check' };
  const sent = await one.command(payload);
  assert.equal(sent.type, 'sent');
  const stored = await ChatMessageModel.findById(sent.message.id);
  assert.ok(stored); assert.equal(String(stored.senderID), String(accounts[0]._id));
  assert.equal(stored.text, payload.text);
  await two.next(message => message.type === 'message' && message.message.id === sent.message.id);
  stage = 'deduplication';
  assert.equal((await one.command(payload)).duplicate, true);
  assert.equal(await ChatMessageModel.countDocuments({ senderID: accounts[0]._id, clientMessageID: payload.clientMessageID }), 1);
  assert.equal((await one.command({ ...payload, text: 'Conflicting reuse' })).error, 'MESSAGE_ID_CONFLICT');
  stage = 'history and unsubscribe';
  await two.command({ type: 'unsubscribe', channel: 'global' });
  const history = await two.command({ type: 'history', channel: 'global', after: initial.highWater });
  assert.ok(history.messages.some(message => message.id === sent.message.id));
  const older = await chatStore.history({ before: sent.message.sequence + 1, limit: 1 });
  assert.equal(older.messages[0].id, sent.message.id);
  stage = 'refresh and reauthenticate';
  const refreshed = await post('/user/refresh', { refreshToken: credentials[0].refreshToken });
  assert.equal(refreshed.status, 200);
  assert.equal((await one.command({ type: 'auth', token: refreshed.body.token })).type, 'authenticated');
  stage = 'logout';
  const closed = once(one.ws, 'close');
  assert.equal((await post('/user/logout', {}, refreshed.body.token)).status, 204);
  assert.equal((await closed)[0], 4001);
  stage = 'reconnect';
  two.ws.close(); await once(two.ws, 'close');
  const reconnected = await client(url);
  await reconnected.command({ type: 'auth', token: credentials[1].token });
  const snapshot = await reconnected.command({ type: 'subscribe', channel: 'global' });
  assert.ok(snapshot.messages.some(message => message.id === sent.message.id));
  stage = 'strict last-50 window';
  await mongoose.connection.transaction(async session => {
    const counter = await ChatCounterModel.findOneAndUpdate({ _id: 'global' }, { $inc: { sequence: 55 } }, { session, new: true });
    await ChatMessageModel.create(Array.from({ length: 55 }, (_, index) => ({
      channel: 'global', sequence: counter.sequence - 54 + index,
      senderID: accounts[0]._id, senderName: accounts[0].username,
      clientMessageID: `window_${suffix}_${index}`, text: 'Window boundary check', sentAt: new Date(),
    })), { session, ordered: true });
  });
  const latest = await reconnected.command({ type: 'history', channel: 'global' });
  assert.equal(latest.messages.length, 50);
  assert.equal(latest.hasMore, false);
  assert.ok(latest.messages.every(message => message.sequence > sent.message.sequence));
  const inaccessible = await reconnected.command({ type: 'history', channel: 'global', before: latest.oldestAvailableSequence });
  assert.deepEqual(inaccessible.messages, []);
  const oldSnapshot = await reconnected.command({ type: 'history', channel: 'global', through: sent.message.sequence });
  assert.deepEqual(oldSnapshot.messages, []);
  assert.ok(await ChatMessageModel.exists({ _id: sent.message.id }));
  await assert.rejects(chatStore.append({ identity: { accountID: String(accounts[0]._id), username: accounts[0].username },
    clientMessageID: payload.clientMessageID, text: payload.text }), error => error.publicCode === 'MESSAGE_OUTSIDE_HISTORY');
  console.log('PASS: only latest 50 visible; old cursors and old send retries cannot retrieve archived messages.');
  console.log('PASS: real login, WebSocket auth, persisted global message, delivery, deduplication, history, unsubscribe, refresh/re-auth, logout closure and reconnect.');
} catch {
  console.error(`Chat database check failed at stage: ${stage}. Credentials and chat contents are not logged.`);
  process.exitCode = 1;
} finally {
  sockets.forEach(socket => socket.terminate());
  try {
    for (const account of accounts) {
      await ChatMessageModel.deleteMany({ senderID: account._id });
      await SessionModel.deleteMany({ accountID: account._id });
      await UserDataModel.deleteOne({ _id: account._id });
    }
    if (accounts.length) console.log('Removed only accounts, sessions and messages created by this check.');
  } finally {
    if (backend) await backend.stop(); else await mongoose.disconnect();
  }
}

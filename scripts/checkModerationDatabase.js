import 'dotenv/config';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import { randomBytes } from 'node:crypto';
import { once } from 'node:events';
import { WebSocket } from 'ws';
import { startBackend } from '../runtime.js';
import { readRuntimeConfig } from '../config/runtime.js';
import { UserDataModel } from '../models/userSchema.js';
import { SessionModel } from '../models/sessionSchema.js';
import { sessionService } from '../security/sessions.js';
import { ModerationRuleModel } from '../models/moderationRuleSchema.js';
import { ModerationAttemptModel, ModerationCaseModel, PlayerReportModel } from '../models/moderationCaseSchema.js';
import { ChatMessageModel } from '../models/chatSchema.js';
import { moderationService } from '../moderation/service.js';
import { hashPassword } from '../security/passwords.js';

if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Requires development DB');
const suffix = randomBytes(6).toString('hex'), accounts = [], sockets = [], ruleKeys = [];
let backend, stage = 'startup';
async function client(url, token) {
  const ws = new WebSocket(url); sockets.push(ws);
  const events = [], waiters = [];
  ws.on('error', () => {});
  ws.on('message', data => {
    const event = JSON.parse(data.toString()); events.push(event);
    for (const waiter of [...waiters]) if (waiter.id === event.requestID) {
      clearTimeout(waiter.timer); waiters.splice(waiters.indexOf(waiter), 1); waiter.resolve(event);
    }
  });
  await once(ws, 'open'); let count = 0;
  const command = data => new Promise((resolve, reject) => {
    const id = `r${++count}`, waiter = { id, resolve };
    waiter.timer = setTimeout(() => reject(new Error('Response timeout')), 5000); waiters.push(waiter);
    ws.send(JSON.stringify({ ...data, requestID: id }));
  });
  assert.equal((await command({ type: 'auth', token })).type, 'authenticated');
  await command({ type: 'subscribe', channel: 'global' });
  return { command, events };
}
try {
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB_NAME });
  for (const [term, level, action] of [[`block${suffix}`, 4, 'block'], [`mask${suffix}`, 3, 'mask'], [`held${suffix}`, 2, 'review']]) {
    const key = `smoke_${term}`; ruleKeys.push(key);
    await ModerationRuleModel.create({ key, term, language: 'de', scope: 'global', level, action,
      contextRequired: action === 'review', reportAutomatically: action === 'block', reason: 'Test fixture',
      status: 'agreed', active: true, source: 'automated-test', matchType: 'word' });
  }
  await mongoose.disconnect();
  backend = await startBackend({ ...readRuntimeConfig(), port: 0, wsPort: 0 }, { chatOptions: { sendLimit: 100 } });
  for (const role of ['player', 'moderator']) accounts.push(await UserDataModel.create({
    username: `${role}_${suffix}`, email: `${role}_${suffix}@example.invalid`, password: await hashPassword(randomBytes(24).toString('hex')), role,
  }));
  const tokens = await Promise.all(accounts.map(async account => (await sessionService.start(account._id)).token));
  const base = `http://127.0.0.1:${backend.http.address().port}`;
  const api = async (path, token, body) => {
    const response = await fetch(base + path, { method: body ? 'POST' : 'GET', headers: {
      Authorization: `Bearer ${token}`, 'Content-Type': 'application/json',
    }, ...(body ? { body: JSON.stringify(body) } : {}) });
    return { status: response.status, body: await response.json() };
  };
  const connection = await client(`ws://127.0.0.1:${backend.wsHttp.address().port}/chat`, tokens[0]);
  const send = (id, text) => connection.command({ type: 'send', channel: 'global', clientMessageID: id, text });
  stage = 'mask/block';
  const masked = await send('masked', `hello mask${suffix}`); assert.equal(masked.type, 'sent'); assert.equal(masked.message.text, 'hello ***');
  const blocked = await send('blocked', `block${suffix}`); assert.equal(blocked.type, 'blocked');
  assert.equal(await ChatMessageModel.countDocuments({ senderID: accounts[0]._id, clientMessageID: 'blocked' }), 0);
  const repeated = await send('blocked', `block${suffix}`); assert.equal(repeated.caseID, blocked.caseID);
  const incident = await ModerationCaseModel.findById(blocked.caseID); assert.ok(incident.snapshot.some(entry => entry.text === `block${suffix}`));
  stage = 'held/release';
  const held = await send('held', `held${suffix}`); assert.equal(held.type, 'held');
  assert.equal(await ChatMessageModel.countDocuments({ senderID: accounts[0]._id, clientMessageID: 'held' }), 0);
  assert.equal((await api('/moderation/cases', tokens[0])).status, 403);
  assert.equal((await api('/moderation/cases', tokens[1])).status, 200);
  assert.equal((await api(`/moderation/cases/${held.caseID}/resolve`, tokens[0], { decision: 'release', note: 'Unauthorized' })).status, 403);
  const release = await api(`/moderation/cases/${held.caseID}/resolve`, tokens[1], { decision: 'release', note: 'Test release' });
  assert.equal(release.status, 200);
  assert.equal((await send('held', `held${suffix}`)).type, 'sent');
  stage = 'report grouping';
  const report = { type: 'report', channel: 'global', messageID: masked.message.id, reason: 'Test report' };
  const first = await connection.command(report), again = await connection.command(report);
  assert.equal(first.type, 'reported'); assert.equal(again.duplicate, true); assert.equal(first.caseID, again.caseID);
  assert.equal(await PlayerReportModel.countDocuments({ caseID: first.caseID }), 1);
  assert.equal((await ModerationCaseModel.findById(first.caseID)).originalText, `hello mask${suffix}`);
  stage = 'retention';
  await ChatMessageModel.updateMany({ senderID: accounts[0]._id }, { $set: { expiresAt: new Date(Date.now() - 1000) } });
  const history = await connection.command({ type: 'history', channel: 'global' });
  assert.ok(history.messages.every(message => message.sender.accountID !== String(accounts[0]._id)));
  assert.equal((await api(`/moderation/cases/${first.caseID}/legal-hold`, tokens[1], { enabled: true, note: 'Requires admin' })).status, 403);
  await UserDataModel.updateOne({ _id: accounts[1]._id }, { $set: { role: 'admin' } });
  assert.equal((await api(`/moderation/cases/${first.caseID}/legal-hold`, tokens[1], { enabled: true, note: 'Test preservation' })).status, 200);
  await ModerationCaseModel.updateOne({ _id: first.caseID }, { $set: { expiresAt: new Date(Date.now() - 1000) } });
  await moderationService.sweep(); assert.ok(await ModerationCaseModel.exists({ _id: first.caseID }));
  assert.equal((await api(`/moderation/cases/${first.caseID}/legal-hold`, tokens[1], { enabled: false, note: 'Test complete' })).status, 200);
  await moderationService.sweep(); assert.equal(await ModerationCaseModel.exists({ _id: first.caseID }), null);
  assert.equal(await PlayerReportModel.countDocuments({ caseID: first.caseID }), 0);
  console.log('PASS: mask/block/hold, idempotent cases, moderator permissions, release, grouped reports, originals private, expired history hidden, legal hold and case cleanup.');
} catch (error) { console.error(`Moderation check failed at ${stage} (${error.name}); no credentials printed.`); process.exitCode = 1; }
finally {
  sockets.forEach(socket => socket.terminate());
  try {
    for (const account of accounts) {
      const cases = await ModerationCaseModel.find({ senderID: account._id }).select('_id');
      await PlayerReportModel.deleteMany({ caseID: { $in: cases.map(entry => entry._id) } });
      await ModerationCaseModel.deleteMany({ senderID: account._id });
      await ModerationAttemptModel.deleteMany({ senderID: account._id });
      await ChatMessageModel.deleteMany({ senderID: account._id });
      await SessionModel.deleteMany({ accountID: account._id });
      await UserDataModel.deleteOne({ _id: account._id });
    }
    await ModerationRuleModel.deleteMany({ key: { $in: ruleKeys } });
  } finally { if (backend) await backend.stop(); else await mongoose.disconnect(); }
}

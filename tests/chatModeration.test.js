import test from 'node:test';
import assert from 'node:assert/strict';
import { harness } from './helpers/chatHarness.js';
import { evaluate } from '../moderation/engine.js';

const rules = [
  { key: 'block', term: 'blockword', level: 4, action: 'block', reason: 'blocked' },
  { key: 'mask', term: 'maskword', level: 3, action: 'mask', reason: 'masked' },
  { key: 'context', term: 'contextword', level: 2, action: 'review', contextRequired: true, reason: 'context' },
].map(rule => ({ ...rule, active: true, status: 'agreed', version: 1 }));
test('blocked and held messages never reach public store; masks reach ack and history', async () => {
  const h = await harness({ moderation: { prepare: async ({ text }) => ({ ...await evaluate(text, rules), caseID: 'case' }) } });
  try {
    const client = await h.connect(); await client.command({ type: 'auth', token: 'one' });
    await client.command({ type: 'subscribe', channel: 'global' });
    const send = (clientMessageID, text) => client.command({ type: 'send', channel: 'global', clientMessageID, text });
    assert.equal((await send('block', 'blockword')).type, 'blocked');
    assert.equal((await send('hold', 'contextword')).type, 'held');
    assert.equal(h.store.messages.length, 0);
    const accepted = await send('mask', 'hello maskword'); assert.equal(accepted.message.text, 'hello ***');
    const page = await client.command({ type: 'history', channel: 'global' });
    assert.equal(page.messages[0].text, 'hello ***');
  } finally { await h.stop(); }
});
test('a context check does not stall messages from other clients', async () => {
  let entered, release;
  const started = new Promise(resolve => { entered = resolve; });
  const gate = new Promise(resolve => { release = resolve; });
  const h = await harness({ moderation: { prepare: async ({ text }) => {
    if (text === 'contextword') { entered(); await gate; return { action: 'hold', caseID: 'case' }; }
    return { action: 'allow', text };
  } } });
  try {
    const one = await h.connect(), two = await h.connect();
    await one.command({ type: 'auth', token: 'one' }); await two.command({ type: 'auth', token: 'two' });
    await one.command({ type: 'subscribe', channel: 'global' }); await two.command({ type: 'subscribe', channel: 'global' });
    const held = one.command({ type: 'send', channel: 'global', clientMessageID: 'hold', text: 'contextword' });
    await started;
    const normal = await two.command({ type: 'send', channel: 'global', clientMessageID: 'normal', text: 'normal' });
    assert.equal(normal.type, 'sent'); assert.equal(h.store.messages.length, 1);
    release(); assert.equal((await held).type, 'held');
  } finally { release?.(); await h.stop(); }
});

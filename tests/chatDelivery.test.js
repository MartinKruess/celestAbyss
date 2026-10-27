import test from 'node:test';
import assert from 'node:assert/strict';
import { harness, memoryStore } from './helpers/chatHarness.js';

const logger = { log() {}, error() {} };
const join = async (h, token) => {
  const client = await h.connect();
  await client.command({ type: 'auth', token });
  const snapshot = await client.command({ type: 'subscribe', channel: 'global' });
  return { ...client, snapshot };
};
const send = (client, clientMessageID) => client.command({ type: 'send', channel: 'global', clientMessageID, text: clientMessageID });
const eventually = async condition => {
  const deadline = Date.now() + 2000;
  while (!condition()) {
    if (Date.now() >= deadline) assert.fail('Delivery retry did not complete');
    await new Promise(resolve => setTimeout(resolve, 5));
  }
};

test('moderation linkage failure cannot commit a message; same ID retry delivers it once', async () => {
  let broken = true;
  const h = await harness({ logger, moderation: {
    prepare: async ({ text }) => ({ action: 'allow', text, caseID: 'case' }),
    published: async ({ session }) => { assert.ok(session); if (broken) throw new Error('link failed'); },
  } });
  try {
    const one = await join(h, 'one'), two = await join(h, 'two');
    assert.equal((await send(one, 'atomic')).type, 'error');
    assert.equal(h.store.messages.length, 0); assert.equal(h.store.pending.size, 0);
    assert.equal(two.messages.filter(event => event.type === 'message').length, 0);
    broken = false;
    const ack = await send(one, 'atomic'); assert.equal(ack.type, 'sent');
    await two.next(event => event.type === 'message');
    assert.equal((await send(one, 'atomic')).duplicate, true);
    await two.command({ type: 'history', channel: 'global' });
    assert.equal(h.store.messages.length, 1);
    assert.equal(two.messages.filter(event => event.type === 'message').length, 1);
  } finally { await h.stop(); }
});

test('a committed message is retried without another send after delivery query failure', async () => {
  const h = await harness({ logger, deliveryRetryMs: 10 });
  try {
    const one = await join(h, 'one'), two = await join(h, 'two');
    h.store.failPending = true;
    assert.equal((await send(one, 'pending')).type, 'sent');
    assert.equal(h.store.pending.size, 1);
    assert.equal(two.messages.filter(event => event.type === 'message').length, 0);
    h.store.failPending = false;
    await two.next(event => event.type === 'message' && event.message.text === 'pending');
    await eventually(() => h.store.pending.size === 0);
  } finally { await h.stop(); }
});

test('lost dispatch acknowledgement retries in order without duplicating live events or snapshots', async () => {
  const h = await harness({ logger, deliveryRetryMs: 10 });
  try {
    const one = await join(h, 'one'), two = await join(h, 'two');
    h.store.failDispatch = true;
    await send(one, 'first'); await two.next(event => event.type === 'message');
    await send(one, 'second');
    const three = await join(h, 'two');
    assert.equal(three.snapshot.messages.length, 2);
    h.store.failDispatch = false;
    await two.next(event => event.type === 'message' && event.message.text === 'second');
    await eventually(() => h.store.pending.size === 0);
    assert.deepEqual(two.messages.filter(event => event.type === 'message').map(event => event.message.text), ['first', 'second']);
    assert.equal(three.messages.filter(event => event.type === 'message').length, 0);
  } finally { await h.stop(); }
});

test('replacement chat server recovers durable pending delivery without a sender retry', async () => {
  const store = memoryStore(); store.failPending = true;
  const first = await harness({ store, logger, deliveryRetryMs: 10 });
  try {
    const sender = await join(first, 'one');
    assert.equal((await send(sender, 'restart')).type, 'sent');
    assert.equal(store.pending.size, 1);
  } finally { await first.stop(); }
  store.failPending = false;
  const replacement = await harness({ store, logger, deliveryRetryMs: 10 });
  try {
    await eventually(() => store.pending.size === 0);
    const receiver = await join(replacement, 'two');
    assert.equal(receiver.snapshot.messages.length, 1);
    assert.equal(receiver.snapshot.messages[0].text, 'restart');
  } finally { await replacement.stop(); }
});

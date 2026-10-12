import test from 'node:test';
import assert from 'node:assert/strict';
import { parseCommand } from '../chat/protocol.js';
const parse = command => parseCommand(Buffer.from(JSON.stringify(command)));

test('chat rejects malformed input, unknown channels and the old position protocol', () => {
  assert.throws(() => parseCommand(Buffer.from('{')));
  assert.throws(() => parse([]));
  assert.throws(() => parse({ requestID: 'x', type: 'playerData', data: {} }));
  assert.throws(() => parse({ requestID: 'x', type: 'subscribe', channel: 'private' }));
  assert.throws(() => parseCommand(Buffer.from('{}'), true));
});
test('chat validates text, message IDs and bounded history cursors', () => {
  const send = { type: 'send', requestID: 'r1', channel: 'global', clientMessageID: 'm1', text: ' hello ' };
  assert.equal(parse(send).text, 'hello');
  for (const text of ['', ' ', 'a'.repeat(501), '\u0000']) assert.throws(() => parse({ ...send, text }));
  assert.equal([...parse({ ...send, text: '🙂'.repeat(500) }).text].length, 500);
  assert.throws(() => parse({ ...send, clientMessageID: { $ne: null } }));
  assert.throws(() => parse({ type: 'history', requestID: 'h', channel: 'global', limit: 51 }));
  assert.throws(() => parse({ type: 'history', requestID: 'h', channel: 'global', after: -1 }));
  assert.throws(() => parse({ type: 'history', requestID: 'h', channel: 'global', after: 1, before: 2 }));
});

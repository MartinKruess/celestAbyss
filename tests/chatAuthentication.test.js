import test from 'node:test';
import assert from 'node:assert/strict';
import { createChatAuthentication } from '../chat/authentication.js';
import { createTokenService } from '../security/tokens.js';

test('chat authentication verifies real JWT, account, ban and session', async () => {
  const tokens = createTokenService('s'.repeat(64));
  const id = 'a'.repeat(24), sid = 'b'.repeat(24);
  let account = { _id: id, username: 'Tester', isBanned: false }, active = true;
  const authenticate = createChatAuthentication({ tokens: () => tokens,
    users: { findById: () => ({ select: async () => account }) }, sessions: { active: async () => active } });
  const token = tokens.issue(id, sid);
  const identity = await authenticate(token);
  assert.equal(identity.accountID, id); assert.equal(identity.sessionID, sid); assert.equal(identity.username, 'Tester');
  await assert.rejects(authenticate('forged'));
  await assert.rejects(authenticate(tokens.issue(id)));
  await assert.rejects(authenticate(tokens.issueRefresh(id, sid, new Date(Date.now() + 60000))));
  active = false; await assert.rejects(authenticate(token));
  active = true; account.isBanned = true; await assert.rejects(authenticate(token));
  account = null; await assert.rejects(authenticate(token));
});

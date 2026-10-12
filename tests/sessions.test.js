import test from 'node:test';
import assert from 'node:assert/strict';
import { createSessionService, refreshHash } from '../security/sessions.js';
import { createTokenService } from '../security/tokens.js';
const accountID = 'a'.repeat(24), sid = 'b'.repeat(24);
function fixture() {
  const records = new Map(); const tokens = createTokenService('s'.repeat(64));
  let time = new Date(), banned = false;
  const matches = (record, query) => record && Object.entries(query).every(([key, value]) => {
    if (key === 'expiresAt') return record.expiresAt > value.$gt;
    return String(record[key]) === String(value);
  });
  const sessions = {
    create: async record => records.set(String(record._id), { revokedAt: null, ...record }),
    findOneAndUpdate: async (query, update) => { const record = records.get(query._id); if (!matches(record, query)) return null; Object.assign(record, update.$set); return record; },
    updateOne: async (query, update) => { const record = records.get(query._id); if (matches(record, query)) Object.assign(record, update.$set); },
    updateMany: async (query, update) => { for (const record of records.values()) if (matches(record, query)) Object.assign(record, update.$set); },
    exists: async query => matches(records.get(query._id), query),
  };
  const service = createSessionService({ sessions, users: { findById: () => ({ select: async () => ({ _id: accountID, isBanned: banned }) }) }, tokens: () => tokens, newID: () => sid, now: () => time });
  return { service, records, tokens, expire: () => { time = new Date(time.getTime() + 8 * 86400000); }, ban: () => { banned = true; } };
}
test('refresh rotates token and stores only hash; access and refresh are not interchangeable', async () => {
  const { service, records, tokens } = fixture();
  const first = await service.start(accountID);
  assert.equal(records.get(sid).refreshHash, refreshHash(first.refreshToken));
  assert.equal(tokens.verify(first.token).sid, sid);
  assert.throws(() => tokens.verify(first.refreshToken));
  await assert.rejects(service.refresh(first.token));
  const next = await service.refresh(first.refreshToken);
  assert.notEqual(next.refreshToken, first.refreshToken); assert.notEqual(next.token, first.token);
  assert.equal(next.refreshExpiresAt, new Date(tokens.verifyRefresh(first.refreshToken).exp * 1000).toISOString());
  await assert.rejects(service.refresh(first.refreshToken));
  assert.equal(await service.active(sid, accountID), false);
  await assert.rejects(service.refresh(next.refreshToken));
});
test('forged refresh cannot revoke a real session; concurrent reuse invalidates session', async () => {
  const { service } = fixture(); const first = await service.start(accountID);
  await assert.rejects(service.refresh('forged')); assert.ok(await service.active(sid, accountID));
  const results = await Promise.allSettled([service.refresh(first.refreshToken), service.refresh(first.refreshToken)]);
  assert.equal(results.filter(result => result.status === 'fulfilled').length, 1);
  assert.equal(await service.active(sid, accountID), false);
});
test('logout, expiry and ban block refresh and active sessions', async () => {
  for (const mode of ['logout', 'logoutAll', 'expire', 'ban']) {
    const f = fixture(); const first = await f.service.start(accountID);
    if (mode === 'logout') await f.service.logout(sid, accountID);
    if (mode === 'logoutAll') await f.service.logoutAll(accountID);
    if (mode === 'expire') f.expire();
    if (mode === 'ban') f.ban();
    await assert.rejects(f.service.refresh(first.refreshToken));
    assert.equal(await f.service.active(sid, accountID), false);
  }
});

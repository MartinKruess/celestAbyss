import test from 'node:test';
import assert from 'node:assert/strict';
import { createAccess, characterInput } from '../security/access.js';
import { createRateLimit } from '../security/rateLimit.js';
import { createTokenService } from '../security/tokens.js';
const id = 'a'.repeat(24), charID = 'b'.repeat(24);
const res = () => ({ headers: {}, set(key, value) { this.headers[key] = value; }, status(code) { this.code = code; return this; }, json(body) { this.body = body; return this; } });
test('authentication rejects absent or forged tokens and banned or deleted accounts', async () => {
  const tokens = createTokenService('s'.repeat(64));
  let account = { _id: id, isBanned: false }, queries = 0;
  let active = true;
  const access = createAccess({ tokens: () => tokens, sessions: { active: async () => active }, users: { findById: () => { queries++; return { select: async () => account }; } } });
  for (const header of ['', 'Bearer forged']) {
    const response = res(); await access.authenticate({ get: () => header }, response, () => assert.fail()); assert.equal(response.code, 401);
  }
  assert.equal(queries, 0);
  const request = { get: () => `Bearer ${tokens.issue(id, charID)}` };
  let passed = false; await access.authenticate(request, res(), () => { passed = true; }); assert.ok(passed); assert.equal(request.auth.accountID, id);
  active = false; let revokedResponse = res(); await access.authenticate(request, revokedResponse, () => assert.fail()); assert.equal(revokedResponse.code, 401);
  active = true;
  account.isBanned = true; let response = res(); await access.authenticate(request, response, () => assert.fail()); assert.equal(response.code, 403);
  account = null; response = res(); await access.authenticate(request, response, () => assert.fail()); assert.equal(response.code, 401);
});
test('ownership uses both character and authenticated account; invalid IDs never reach DB', async () => {
  let found = null, query;
  const access = createAccess({ characters: { findOne: async input => { query = input; return found; } } });
  const guard = access.ownCharacter(req => req.body.characterID);
  const request = { auth: { accountID: id }, body: { characterID: { $ne: null } } };
  let response = res(); await guard(request, response, () => assert.fail()); assert.equal(response.code, 400); assert.equal(query, undefined);
  request.body.characterID = charID; response = res(); await guard(request, response, () => assert.fail()); assert.equal(response.code, 404);
  assert.deepEqual(query, { _id: charID, accountID: id });
  found = { _id: charID }; let passed = false; await guard(request, res(), () => { passed = true; }); assert.ok(passed);
});
test('character creation strips forged account and progression', () => {
  const request = { auth: { accountID: id }, body: { accountID: charID, charName: 'Tester', class: 'Hunter', level: 999, inventory: ['forged'] } };
  characterInput(request, res(), () => {});
  assert.deepEqual(request.body, { accountID: id, charName: 'Tester', class: 'Hunter' });
});
test('rate limits isolate IPs, ignore forwarded spoofing, expire and bound storage', () => {
  let time = 0;
  const limiter = createRateLimit({ limit: 2, windowMs: 1000, maxKeys: 2, now: () => time });
  let passed = 0; const next = () => passed++;
  const request = { ip: 'one', headers: { 'x-forwarded-for': 'spoof' } };
  limiter(request, res(), next); limiter(request, res(), next);
  let response = res(); limiter(request, response, next); assert.equal(response.code, 429); assert.equal(response.headers['Retry-After'], '1');
  limiter({ ip: 'two' }, res(), next); assert.equal(passed, 3);
  response = res(); limiter({ ip: 'three' }, response, next); assert.equal(response.code, 429);
  time = 1000; limiter(request, res(), next); assert.equal(passed, 4);
});

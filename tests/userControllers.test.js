import test from 'node:test';
import assert from 'node:assert/strict';
import { createUserControllers } from '../security/userControllers.js';
const response = () => ({ code: 200, status(code) { this.code = code; return this; }, json(body) { this.body = body; return this; } });
const req = { body: { username: 'tester', email: 'test@example.com', password: 'a long password' } };
test('login rejects unknown accounts, incorrect passwords and bans; filters response', async () => {
  let user = null, valid = false;
  const api = createUserControllers({ users: { findOne: async () => user }, verify: async () => valid, sessions: { start: async () => ({ token: 'signed-token' }) } });
  let res = response(); await api.login(req, res); assert.equal(res.code, 401);
  user = { _id: '123', username: 'tester', password: 'hash', email: 'private', steamID: 'private' };
  res = response(); await api.login(req, res); assert.equal(res.code, 401);
  valid = true; user.isBanned = true;
  res = response(); await api.login(req, res); assert.equal(res.code, 403);
  user.isBanned = false; res = response(); await api.login(req, res);
  assert.equal(res.body.token, 'signed-token');
  assert.equal(res.body.userData.password, undefined);
  assert.equal(res.body.userData.email, undefined);
  assert.equal(res.body.userData.steamID, undefined);
});
test('registration saves hashed password; duplicates and internal errors are sanitized', async () => {
  let saved, failure;
  const api = createUserControllers({ users: { create: async data => { if (failure) throw failure; saved = data; } }, hash: async () => 'argon-hash' });
  let res = response(); await api.register(req, res); assert.equal(res.code, 201); assert.equal(saved.password, 'argon-hash');
  failure = { code: 11000 }; res = response(); await api.register(req, res); assert.equal(res.code, 409);
  failure = new Error('secret DB details'); res = response(); await api.register(req, res); assert.equal(res.code, 500); assert.equal(res.body.error, 'REGISTRATION_FAILED');
});

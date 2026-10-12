import test from 'node:test';
import assert from 'node:assert/strict';
import jwt from 'jsonwebtoken';
import { hashPassword, verifyPassword } from '../security/passwords.js';
import { createTokenService } from '../security/tokens.js';
const secret = 'a'.repeat(64);
test('Argon2id salts hashes and verifies only correct passwords', async () => {
  const password = 'a sufficiently long password';
  const hash = await hashPassword(password);
  assert.notEqual(hash, await hashPassword(password));
  assert.ok(await verifyPassword(hash, password));
  assert.equal(await verifyPassword(hash, 'wrong'), false);
  assert.equal(await verifyPassword('$2b$legacy', password), false);
});
test('JWT checks signature, expiration, audience and secret configuration', () => {
  const tokens = createTokenService(secret), token = tokens.issue('123');
  assert.equal(tokens.verify(token).sub, '123');
  assert.throws(() => createTokenService('short'));
  assert.throws(() => createTokenService('b'.repeat(64)).verify(token));
  assert.throws(() => tokens.verify(jwt.sign({}, secret, { issuer: 'celestabyss', audience: 'other' })));
  assert.throws(() => tokens.verify(jwt.sign({}, secret, { issuer: 'celestabyss', audience: 'celestabyss-client', expiresIn: -1 })));
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { userValidationOptions, loginValidation, userValidation } from '../validation/userValidation.js';
async function validate(rules, body) {
  const req = { body };
  await Promise.all(rules.map(rule => rule.run(req)));
  const res = { status(code) { this.code = code; return this; }, json(body) { this.body = body; } };
  let passed = false; userValidation(req, res, () => { passed = true; });
  return { passed, res };
}
test('registration rejects object inputs and never echoes passwords', async () => {
  const invalid = await validate(userValidationOptions, { username: { $ne: null }, email: 'invalid', password: 'secret' });
  assert.equal(invalid.passed, false); assert.equal(invalid.res.code, 400);
  assert.deepEqual(invalid.res.body, { error: 'INVALID_INPUT' });
  assert.ok((await validate(userValidationOptions, { username: 'tester', email: 'test@example.com', password: 'long enough password' })).passed);
});
test('login does not require email or character class', async () => {
  assert.ok((await validate(loginValidation, { username: 'tester', password: 'password' })).passed);
});

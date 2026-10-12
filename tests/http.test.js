import test from 'node:test';
import assert from 'node:assert/strict';
import { corsOptions, httpErrorHandler } from '../security/http.js';

test('CORS is open in development and requires explicit production origins', () => {
  assert.equal(corsOptions({ NODE_ENV: 'development' }).origin, '*');
  assert.throws(() => corsOptions({ NODE_ENV: 'production' }));
  assert.throws(() => corsOptions({ NODE_ENV: 'production', CORS_ORIGINS: '*' }));
  assert.deepEqual(corsOptions({ NODE_ENV: 'production', CORS_ORIGINS: 'https://example.com, https://other.example' }).origin,
    ['https://example.com', 'https://other.example']);
});
test('HTTP errors do not expose submitted data or internal details', () => {
  for (const [type, status] of [['entity.parse.failed', 400], ['entity.too.large', 413], ['unknown', 500]]) {
    const res = { status(code) { this.code = code; return this; }, json(body) { this.body = body; } };
    httpErrorHandler({ type, message: 'secret', body: 'password' }, {}, res, () => {});
    assert.equal(res.code, status);
    assert.equal(JSON.stringify(res.body).includes('secret'), false);
    assert.equal(JSON.stringify(res.body).includes('password'), false);
  }
});

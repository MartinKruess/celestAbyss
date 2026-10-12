import 'dotenv/config';
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { once } from 'node:events';
import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from '../routes/userRoutes.js';
import { authenticate } from '../security/middleware.js';
import { httpErrorHandler } from '../security/http.js';
import { UserDataModel } from '../models/userSchema.js';
import { createTokenService } from '../security/tokens.js';

// Explicit opt-in; never run as part of npm test.
if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') {
  throw new Error('This smoke check requires MONGODB_DB_NAME=celestabyss_dev.');
}
let server;
const timeout = setTimeout(() => { console.error('Database smoke check timed out.'); process.exit(1); }, 30000);
try {
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB_NAME, serverSelectionTimeoutMS: 10000,
  });
  await UserDataModel.init();
  const app = express();
  app.use(express.json({ limit: '16kb' }));
  app.use('/user', userRouter);
  app.get('/protected', authenticate, (req, res) => res.json({ accountID: req.auth.accountID }));
  app.use(httpErrorHandler);
  server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const base = `http://127.0.0.1:${server.address().port}`;
  const username = `test_${randomBytes(6).toString('hex')}`;
  const password = randomBytes(24).toString('base64url');
  const request = async (path, body, token) => {
    const response = await fetch(base + path, {
      method: body ? 'POST' : 'GET',
      headers: { ...(body ? { 'Content-Type': 'application/json' } : {}), ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
    return { status: response.status, body: response.status === 204 ? null : await response.json() };
  };
  const registration = { username, email: `${username}@example.invalid`, password };
  assert.equal((await request('/user/register', registration)).status, 201);
  const player = await UserDataModel.findOne({ username });
  assert.ok(player.password.startsWith('$argon2id$'));
  assert.notEqual(player.password, password);
  assert.equal(player.characters.length, 0);
  assert.equal((await request('/user/register', registration)).status, 409);
  assert.equal((await request('/user/login', { username, password: 'incorrect' })).status, 401);
  const login = await request('/user/login', { username, password });
  assert.equal(login.status, 200);
  assert.equal(login.body.userData.password, undefined);
  assert.equal(login.body.userData.email, undefined);
  assert.equal(createTokenService(process.env.ACCESS_TOKEN_SECRET).verify(login.body.token).sub, String(player._id));
  assert.equal((await request('/protected')).status, 401);
  assert.equal((await request('/protected', undefined, login.body.token)).status, 200);
  await UserDataModel.updateOne({ _id: player._id }, { $set: { isBanned: true } });
  try {
    assert.equal((await request('/user/login', { username, password })).status, 403);
    assert.equal((await request('/protected', undefined, login.body.token)).status, 403);
  } finally {
    await UserDataModel.updateOne({ _id: player._id }, { $set: { isBanned: false } });
  }
  const renewed = await request('/user/refresh', { refreshToken: login.body.refreshToken });
  assert.equal(renewed.status, 200);
  assert.notEqual(renewed.body.refreshToken, login.body.refreshToken);
  assert.equal((await request('/protected', undefined, renewed.body.token)).status, 200);
  assert.equal((await request('/user/refresh', { refreshToken: login.body.refreshToken })).status, 401);
  assert.equal((await request('/protected', undefined, renewed.body.token)).status, 401);
  const second = await request('/user/login', { username, password });
  assert.equal(second.status, 200);
  assert.equal((await request('/user/logout', {}, second.body.token)).status, 204);
  assert.equal((await request('/protected', undefined, second.body.token)).status, 401);
  assert.equal((await request('/user/refresh', { refreshToken: second.body.refreshToken })).status, 401);
  const third = await request('/user/login', { username, password });
  const fourth = await request('/user/login', { username, password });
  assert.equal(third.status, 200); assert.equal(fourth.status, 200);
  assert.equal((await request('/user/logout-all', {}, third.body.token)).status, 204);
  assert.equal((await request('/protected', undefined, fourth.body.token)).status, 401);
  assert.equal((await request('/user/refresh', { refreshToken: fourth.body.refreshToken })).status, 401);
  console.log('PASS: refresh rotation, replay revocation, logout and logout-all.');
  console.log('PASS: HTTP registration, duplicate account, Argon2id storage, wrong password, login, JWT, protected access and bans.');
  console.log(`Test player retained: ${username}; characters: 0. Random password is not logged or retained.`);
  console.log('Collection names:', (await mongoose.connection.db.listCollections({}, { nameOnly: true }).toArray()).map(collection => collection.name).join(', '));
} catch {
  console.error('Database smoke check failed. Credentials and response bodies are not logged.');
  process.exitCode = 1;
} finally {
  if (server) await new Promise(resolve => { server.close(resolve); server.closeAllConnections(); });
  await mongoose.disconnect();
  clearTimeout(timeout);
}

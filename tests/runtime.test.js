import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { readRuntimeConfig } from '../config/runtime.js';
import { startBackend } from '../runtime.js';
import { createWorkTracker } from '../services/pendingWork.js';

const env = { MONGODB_URI: 'mongodb://localhost:27017', ACCESS_TOKEN_SECRET: 'a'.repeat(64), PORT: '0', WS_PORT: '0' };
test('shutdown keeps DB connected until an accepted disconnected-client operation finishes',async()=>{
  const work=createWorkTracker();let finish,disconnected=false;
  const database={connection:{readyState:1},connect:async()=>{},disconnect:async()=>{disconnected=true;}};
  const backend=await startBackend(readRuntimeConfig(env),{database,work,logger:{log(){},error(){}}});
  const pending=work.run(()=>new Promise(resolve=>{finish=resolve;}));await new Promise(resolve=>setImmediate(resolve));
  const stopped=backend.stop();await new Promise(resolve=>setImmediate(resolve));
  assert.equal(backend.isReady(),false);assert.equal(disconnected,false);
  finish();await pending;await stopped;assert.equal(disconnected,true);
});
test('configuration rejects missing secrets, invalid ports and production origins', () => {
  assert.equal(readRuntimeConfig(env).dbName, 'celestabyss_dev');
  assert.throws(() => readRuntimeConfig({ ...env, ACCESS_TOKEN_SECRET: '' }));
  assert.throws(() => readRuntimeConfig({ ...env, PORT: 'NaN' }));
  assert.throws(() => readRuntimeConfig({ ...env, PORT: '65536' }));
  assert.throws(() => readRuntimeConfig({ ...env, NODE_ENV: 'production' }));
});
test('failed DB connection cleans up without opening listeners', async () => {
  let disconnected = false;
  await assert.rejects(startBackend(readRuntimeConfig(env), { database: {
    connection: { readyState: 0 }, connect: async () => { throw new Error('offline'); },
    disconnect: async () => { disconnected = true; },
  } }));
  assert.ok(disconnected);
});
test('readiness tracks DB availability; shutdown is idempotent', async () => {
  let disconnects = 0;
  const database = { connection: { readyState: 0 }, connect: async () => { database.connection.readyState = 1; }, disconnect: async () => { disconnects++; database.connection.readyState = 0; } };
  const backend = await startBackend(readRuntimeConfig(env), { database, logger: { log() {}, error() {} } });
  try {
    const url = `http://127.0.0.1:${backend.http.address().port}`;
    assert.equal((await fetch(url + '/health/live')).status, 200);
    assert.equal((await fetch(url + '/health/ready')).status, 200);
    database.connection.readyState = 0;
    assert.equal((await fetch(url + '/health/ready')).status, 503);
    assert.equal((await fetch(url + '/user/login', { method: 'POST' })).status, 503);
    assert.equal((await fetch(url + '/health/live')).status, 200);
  } finally { await Promise.all([backend.stop(), backend.stop()]); }
  assert.equal(disconnects, 1);
  assert.equal(backend.http.listening, false);
  assert.equal(backend.wsHttp.listening, false);
});
test('occupied WebSocket port closes partially started HTTP server and DB', async () => {
  const occupied = createServer(); occupied.listen(0, '127.0.0.1'); await once(occupied, 'listening');
  let disconnected = false;
  try {
    await assert.rejects(startBackend({ ...readRuntimeConfig(env), wsPort: occupied.address().port }, { database: {
      connection: { readyState: 1 }, connect: async () => {}, disconnect: async () => { disconnected = true; },
    }, logger: { log() {}, error() {} } }));
    assert.ok(disconnected);
  } finally { await new Promise(resolve => occupied.close(resolve)); }
});

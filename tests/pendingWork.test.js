import test from 'node:test';
import assert from 'node:assert/strict';
import { createWorkTracker } from '../services/pendingWork.js';
const tick=()=>new Promise(resolve=>setImmediate(resolve));
test('drain follows accepted work, including nested work started after shutdown begins',async()=>{
  const work=createWorkTracker();let first,second,done=false;
  work.run(async()=>{await new Promise(resolve=>{first=resolve;});work.run(()=>new Promise(resolve=>{second=resolve;}));});
  await tick();const draining=work.drain().then(()=>{done=true;});
  assert.equal(done,false);first();await tick();assert.equal(done,false);second();await draining;assert.equal(done,true);assert.equal(work.size,0);
});
test('failed work is removed and does not hang graceful shutdown',async()=>{
  const work=createWorkTracker();await assert.rejects(work.run(()=>{throw new Error('failed');}));await work.drain();assert.equal(work.size,0);
});

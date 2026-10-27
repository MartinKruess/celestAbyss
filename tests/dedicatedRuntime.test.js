import test from 'node:test';
import assert from 'node:assert/strict';
import { createDedicatedRuntime } from '../services/dedicatedRuntime.js';
const first='00000000-0000-4000-8000-000000000001',second='00000000-0000-4000-8000-000000000002';
function fixture() {
  let record=null,releases=0;
  const matches=filter=>record && Object.entries(filter).every(([k,v])=>record[k]===v);
  const query=()=>({session(){return this;},lean:async()=>structuredClone(record)});
  const runtime=createDedicatedRuntime({transaction:async work=>work('transaction'),
    records:{findById:query,exists:async f=>!!matches(f),
      updateOne:async(filter,update,options={})=>{if(!record && !options.upsert)return {matchedCount:0};
        if(record && !matches(filter))return {matchedCount:0};record={...record,...filter,...update.$set};return {matchedCount:1};},
      findOneAndUpdate:(filter,update)=>({lean:async()=>{if(!matches(filter))return null;Object.assign(record,update.$set);return structuredClone(record);}})},
    characters:{updateMany:async(filter,update,{session})=>{assert.equal(session,'transaction');assert.equal(filter['activePlay.serverID'],'local');assert.equal(update.$set['activePlay.closed'],true);releases++;}},
  });
  return {runtime,releases:()=>releases};
}
test('explicit process replacement releases old ownership once; delayed startup cannot replace a newer owner',async()=>{
  const f=fixture();
  await f.runtime.start({serverID:'local',instanceID:first,expectedInstanceID:''});assert.equal(f.releases(),1);
  await f.runtime.start({serverID:'local',instanceID:first,expectedInstanceID:''});assert.equal(f.releases(),1);
  await f.runtime.start({serverID:'local',instanceID:second,expectedInstanceID:first});assert.equal(f.releases(),2);
  await assert.rejects(f.runtime.start({serverID:'local',instanceID:first,expectedInstanceID:''}),/SERVER_INSTANCE_CHANGED/);
  await assert.rejects(f.runtime.assertCurrent({serverID:'local',instanceID:first}),/SERVER_INSTANCE_CHANGED/);
  await f.runtime.assertCurrent({serverID:'local',instanceID:second});
});
test('maintenance prevents admission while allowing storage probes and final saves from the current process',async()=>{
  const f=fixture(),identity={serverID:'local',instanceID:first};await f.runtime.start({...identity,expectedInstanceID:''});
  await f.runtime.admit({...identity,session:'transaction'});assert.equal((await f.runtime.probe(identity)).ready,true);
  await f.runtime.maintenance(identity);await assert.rejects(f.runtime.admit(identity),/SERVER_NOT_READY/);
  await f.runtime.assertCurrent(identity);assert.equal((await f.runtime.probe(identity)).ready,false);
});

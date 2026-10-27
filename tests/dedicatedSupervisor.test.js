import test from 'node:test';
import assert from 'node:assert/strict';
import { superviseDedicated, storageExitCode, RESTART_FOR_STORAGE, STOP_FOR_STORAGE } from '../unreal/DedicatedSupervisor.mjs';

function fixture(codes, initial={}) {
  let state={recoveryAttempted:false,blocked:false,...initial}, launches=0, registrations=0;
  const events=[];
  const options={readState:()=>structuredClone(state),writeState:value=>{state=structuredClone(value);},
    register:async()=>{registrations++;},newInstance:()=>String(registrations),log:(event,data)=>events.push({event,...data}),
    launch:async({recoveryAttempted})=>{assert.equal(recoveryAttempted,state.recoveryAttempted);return codes[launches++];}};
  return {options,events,state:()=>state,launches:()=>launches};
}
test('storage failure restarts once and persistent failure then stops with a durable guard',async()=>{
  const f=fixture([RESTART_FOR_STORAGE,RESTART_FOR_STORAGE]);
  assert.equal(await superviseDedicated(f.options),RESTART_FOR_STORAGE);assert.equal(f.launches(),2);
  assert.equal(f.state().blocked,true);assert.equal(f.state().recoveryAttempted,true);
  assert.equal(await superviseDedicated(f.options),78);assert.equal(f.launches(),2);
  assert.equal(f.events.filter(e=>e.event==='restart').length,1);
});
test('unavailable storage after restart prevents another game process from admitting players',async()=>{
  const f=fixture([RESTART_FOR_STORAGE]);let starts=0;
  f.options.register=async()=>{if(starts++)throw new Error('offline');};
  assert.equal(await superviseDedicated(f.options),78);assert.equal(f.launches(),1);assert.equal(f.state().blocked,true);
});
test('recovery budget survives normal process shutdown and later supervisor start',async()=>{
  const f=fixture([0],{recoveryAttempted:true});assert.equal(await superviseDedicated(f.options),0);
  const next=fixture([STOP_FOR_STORAGE],f.state());assert.equal(await superviseDedicated(next.options),STOP_FOR_STORAGE);
  assert.equal(next.launches(),1);assert.equal(next.state().blocked,true);
});
test('healthy normal shutdown does not restart or block the next manual start',async()=>{
  const f=fixture([0]);assert.equal(await superviseDedicated(f.options),0);assert.equal(f.launches(),1);assert.equal(f.state().blocked,false);
});
test('Windows graceful exit marker requests recovery only for its own cleanly exited process',async()=>{
  assert.equal(storageExitCode(0,'new',{instanceID:'new',code:75}),75);
  assert.equal(storageExitCode(0,'new',{instanceID:'new',code:76}),76);
  assert.equal(storageExitCode(0,'new',{instanceID:'old',code:75}),0);
  assert.equal(storageExitCode(0,'new',{instanceID:'new',code:1}),0);
  assert.equal(storageExitCode(3,'new',{instanceID:'new',code:75}),3);
  const f=fixture([storageExitCode(0,'new',{instanceID:'new',code:75}),0]);
  assert.equal(await superviseDedicated(f.options),0);assert.equal(f.launches(),2);
});

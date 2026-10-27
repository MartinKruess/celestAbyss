import test from 'node:test';
import assert from 'node:assert/strict';
import { createPlayControl } from '../services/playControl.js';
import { createBanAccount } from '../security/bans.js';
import { digest } from '../services/play.js';

const accountID='a'.repeat(24), characterID='c'.repeat(24), sessionID='b'.repeat(24), otherSession='d'.repeat(24);
const secret='x'.repeat(43), serverID='local';
const lease={characterID,playSessionId:secret};
const query = value => ({ select() { return this; }, lean: async () => structuredClone(value) });
function fixture() {
  const character={_id:characterID,accountID,activePlay:{serverID,sessionID,leaseHash:digest(secret),closed:false}};
  const account={_id:accountID,isBanned:false,banReason:''};
  let logins=[{_id:sessionID,accountID},{_id:otherSession,accountID}];
  const revoked=[],renewals=[];
  const matches=filter=>filter._id===characterID && filter['activePlay.serverID']===serverID && filter['activePlay.leaseHash']===digest(secret);
  const control=createPlayControl({
    characters:{ findOne:f=>query(matches(f)?character:null), find:f=>query(f.$or.some(matches)?[character]:[]), bulkWrite:async ops=>renewals.push(...ops) },
    users:{find:()=>query([account])}, records:{find:()=>query(logins)},
    sessions:{
      logout:async(sid,aid)=>{revoked.push({sid,aid});logins=logins.filter(s=>s._id!==sid);},
      logoutAll:async aid=>{revoked.push({aid});logins=[];},
    },
  });
  return {control,character,account,revoked,renewals,logins:()=>logins};
}

test('server logout revokes the login and refresh session without releasing unsaved character ownership',async()=>{
  const f=fixture(),input={serverID,characterID,body:{playSessionId:secret,logout:true}};
  assert.deepEqual(await f.control.leave(input),{ended:true,loggedOut:true});
  assert.deepEqual(f.revoked,[{sid:sessionID,aid:accountID}]);
  assert.deepEqual(f.logins().map(s=>s._id),[otherSession]);
  assert.equal(f.character.activePlay.closed,false);
  assert.equal((await f.control.check({serverID,leases:[lease]})).sessions[0].code,'INVALID_SESSION');
  assert.deepEqual(await f.control.leave(input),{ended:true,loggedOut:true});
});

test('character selection preserves login and pending-save ownership',async()=>{
  const f=fixture();
  assert.deepEqual(await f.control.leave({serverID,characterID,body:{playSessionId:secret,logout:false}}),{ended:true,loggedOut:false});
  assert.equal(f.revoked.length,0);
  assert.equal((await f.control.check({serverID,leases:[lease]})).sessions[0].allowed,true);
  assert.equal(f.renewals.length,1);
});

test('ban ends all login sessions and carries the reason to the game server; no lease is renewed',async()=>{
  const f=fixture();f.account.isBanned=true;f.account.banReason='Wiederholtes Cheating';
  const result=await f.control.check({serverID,leases:[lease]});
  assert.deepEqual(result.sessions,[{characterID,allowed:false,code:'ACCOUNT_BANNED',reason:'Wiederholtes Cheating'}]);
  assert.deepEqual(f.revoked,[{aid:accountID}]);assert.equal(f.logins().length,0);assert.equal(f.renewals.length,0);
});

test('foreign servers and forged leases cannot log out another account',async()=>{
  const f=fixture();
  for(const input of [{serverID:'other',characterID,body:{playSessionId:secret,logout:true}},
    {serverID,characterID,body:{playSessionId:'y'.repeat(43),logout:true}},
    {serverID,characterID,body:{playSessionId:secret,logout:true,accountID}}]) await assert.rejects(f.control.leave(input),/INVALID_/);
  assert.equal(f.revoked.length,0);
  assert.equal((await f.control.check({serverID:'other',leases:[lease]})).sessions[0].code,'PLAY_SESSION_ENDED');
  await assert.rejects(f.control.check({serverID,leases:[lease,lease]}),/INVALID_PLAY_SESSIONS/);
});

test('failed database lookup rejects the check instead of declaring players banned or logged out',async()=>{
  const control=createPlayControl({characters:{find:()=>({select:()=>({lean:async()=>{throw new Error('database unavailable');}})})}});
  await assert.rejects(control.check({serverID,leases:[lease]}),/database unavailable/);
});

test('ban commits account flag and revocation together, then notifies running sessions',async()=>{
  const steps=[],session={fixture:true};
  const ban=createBanAccount({
    transaction:async work=>{await work(session);steps.push('commit');},
    users:{updateOne:async(filter,update,options)=>{assert.deepEqual(filter,{_id:accountID});assert.deepEqual(update.$set,{isBanned:true,banReason:'Cheating'});assert.equal(options.session,session);steps.push('ban');return {matchedCount:1};}},
    sessions:{updateMany:async(filter,update,options)=>{assert.deepEqual(filter,{accountID,revokedAt:null});assert.ok(update.$set.revokedAt instanceof Date);assert.equal(options.session,session);steps.push('revoke');}},
    events:{emit:(name,event)=>{assert.equal(name,'revoked');assert.deepEqual(event,{accountID,code:'ACCOUNT_BANNED',reason:'Cheating'});steps.push('notify');}},
  });
  await ban(accountID,'Cheating');assert.deepEqual(steps,['ban','revoke','commit','notify']);
});

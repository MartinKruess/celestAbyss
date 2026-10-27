import test from 'node:test';
import assert from 'node:assert/strict';
import express from 'express';
import { once } from 'node:events';
import { createPlayService, normalizePlayState, digest } from '../services/play.js';
import { dedicatedAuthentication } from '../security/dedicated.js';
import { createPlayRouters } from '../routes/playRoutes.js';
import { defaultHudProfile, normalizeHudProfile } from '../services/hudProfile.js';
import { CharDataModel } from '../models/characterSchema.js';
import { emptyInventoryState, normalizeInventoryState } from '../services/inventoryState.js';

const accountID = 'a'.repeat(24), characterID = 'c'.repeat(24), sessionID = 'b'.repeat(24);
const key = 'only-the-fixture-knows-this-service-key';
const config = { key, serverID: 'local', address: '127.0.0.1:7777' };
const state = { position: [1, 2, 3], level: 1, experience: 5, skillpoints: 0, moral: 0 };
function fixture(loadStats = async () => ({ version: 1 }), loadSkills = async () => []) {
  let time = new Date('2026-10-25T00:00:00Z'), counter = 0, ticketDoc, active = true, banned = false;
  const doc = { _id: characterID, accountID, charName: 'Tester', class: 'Hunter', level: 1, inventory: ['unchanged'], skills: ['unchanged'], position: '0,0,0' };
  const matches = query => Object.entries(query).every(([name, expected]) => {
    if (name === '$or') return expected.some(matches);
    const value = name.split('.').reduce((o, k) => o?.[k], doc);
    if (expected && typeof expected === 'object') {
      if ('$ne' in expected) return value !== expected.$ne;
      if ('$gt' in expected) return value > expected.$gt;
      if ('$lte' in expected) return value <= expected.$lte;
    }
    return value === expected;
  });
  const chain = promise => ({ select() { return this; }, populate() { return this; }, then: (...args) => promise.then(...args) });
  const receipts = new Map();
  const service = createPlayService({ configuration: () => config, now: () => time, loadStats, loadSkills,
    runtime: { admit: async () => {} },
    transaction: async work => {
      const before=structuredClone(doc), beforeReceipts=structuredClone(receipts);
      try { return await work(null); }
      catch(error) { for(const key of Object.keys(doc)) delete doc[key];Object.assign(doc,before);receipts.clear();for(const [key,value] of beforeReceipts) receipts.set(key,value);throw error; }
    },
    receipts: {
      exists: async filter => Object.entries(filter).every(([k,v])=>receipts.get(filter._id)?.[k]===v),
      updateOne: async (filter,update) => receipts.set(filter._id,structuredClone(update.$set)),
    },
    newSecret: () => String(++counter).padStart(43, 'x'),
    tickets: {
      findOneAndUpdate: async (filter, update) => { ticketDoc = { ...filter, ...update.$set }; },
      findOneAndDelete: async filter => {
        if (!ticketDoc || ticketDoc.ticketHash !== filter.ticketHash || ticketDoc.serverID !== filter.serverID || ticketDoc.expiresAt <= time) return null;
        const found = ticketDoc; ticketDoc = null; return found;
      },
    },
    users: { findById: () => ({ select: async () => ({ _id: accountID, isBanned: banned }) }) },
    sessions: { active: async () => active },
    characters: {
      findOne: query => ({ select: () => ({ lean: async () => matches(query) ? { class: 'Hunter', level: 1 } : null }) }),
      exists: async query => matches(query),
      findOneAndUpdate: (query, update) => {
        const result = (async () => {
          if (!matches(query)) return null;
          for (const [path, value] of Object.entries(update.$set)) {
            const parts = path.split('.'); let target = doc;
            for (const part of parts.slice(0, -1)) target = target[part] ||= {};
            target[parts.at(-1)] = value;
          }
          return structuredClone(doc);
        })();
        return chain(result);
      },
    },
  });
  return { service, doc, expire: ms => { time = new Date(time.getTime() + ms); }, revoke: () => { active = false; }, ban: () => { banned = true; } };
}
const issue = f => f.service.issue({ accountID, sessionID, characterID });
const admit = async f => f.service.admit({ serverID: 'local', ticket: (await issue(f)).ticket });
const saveBody = (play, extra = {}) => ({ playSessionId: play.playSessionId, sequence: 1, saveId: 'fixture-save-0001', release: false, state, ...extra });

test('single-use ticket binds account, character, active login and intended server', async () => {
  const f = fixture(), grant = await issue(f);
  assert.equal(grant.serverAddress, '127.0.0.1:7777');
  await assert.rejects(f.service.admit({ serverID: 'other', ticket: grant.ticket }), /INVALID_PLAY_TICKET/);
  const play = await f.service.admit({ serverID: 'local', ticket: grant.ticket });
  assert.equal(play.character._id, characterID);
  assert.equal(play.character.activePlay, undefined);
  assert.equal(f.doc.activePlay.leaseHash, digest(play.playSessionId));
  await assert.rejects(f.service.admit({ serverID: 'local', ticket: grant.ticket }), /INVALID_PLAY_TICKET/);
  await assert.rejects(admit(f), /CHARACTER_IN_USE/);
});
test('expired tickets, revoked sessions, banned accounts and foreign characters cannot enter', async () => {
  for (const change of [f => f.expire(61000), f => f.revoke(), f => f.ban()]) {
    const f = fixture(), grant = await issue(f); change(f);
    await assert.rejects(f.service.admit({ serverID: 'local', ticket: grant.ticket }));
    assert.equal(f.doc.activePlay, undefined);
  }
  const f = fixture();
  await assert.rejects(f.service.issue({ accountID: 'other', sessionID, characterID }), /CHARACTER_NOT_FOUND/);
});
test('save is scoped to server and lease; scalars persist without touching inventory or skills', async () => {
  const f = fixture(), play = await admit(f), body = saveBody(play);
  await assert.rejects(f.service.save({ serverID: 'other', characterID, body }), /PLAY_SESSION/);
  await assert.rejects(f.service.save({ serverID: 'local', characterID, body: { ...body, playSessionId: 'z'.repeat(43) } }), /PLAY_SESSION/);
  assert.deepEqual(await f.service.save({ serverID: 'local', characterID, body }), { saved: true, sequence: 1, released: false });
  assert.equal(f.doc.position, '1,2,3'); assert.equal(f.doc.experience, 5);
  assert.deepEqual(f.doc.inventory, ['unchanged']); assert.deepEqual(f.doc.skills, ['unchanged']);
  assert.deepEqual(await f.service.save({ serverID: 'local', characterID, body }), { saved: true, sequence: 1, released: false });
  await assert.rejects(f.service.save({ serverID: 'local', characterID, body: { ...body, state: { ...state, experience: 999 } } }), /PLAY_SESSION/);
});
test('final save releases the character, retries are idempotent, old leases cannot overwrite a new entry', async () => {
  const f = fixture(), play = await admit(f), body = saveBody(play, { release: true });
  await f.service.save({ serverID: 'local', characterID, body });
  assert.equal((await f.service.save({ serverID: 'local', characterID, body })).released, true);
  await admit(f);
  const current = structuredClone(f.doc);
  assert.equal((await f.service.save({ serverID: 'local', characterID, body })).released,true);
  assert.deepEqual(f.doc,current,'Lost final acknowledgement must not overwrite the new owner');
  await assert.rejects(f.service.save({ serverID: 'local', characterID, body:{...body,state:{...state,experience:999}} }), /PLAY_SESSION/);
});

test('HUD toolbar settings survive autosave, final release and fresh admission', async () => {
  const f = fixture(), play = await admit(f);
  assert.deepEqual(play.character.hudProfile, defaultHudProfile());
  const hudProfile = { fastSettings: { toolbar: { mode: 3, isLocked: true } }, settings: {} };
  const body = saveBody(play, { state: { ...state, hudProfile } });
  await f.service.save({ serverID: 'local', characterID, body });
  assert.deepEqual(f.doc.hudProfile, hudProfile);
  await f.service.save({ serverID: 'local', characterID, body: { ...body, sequence: 2, saveId: 'fixture-save-0002', release: true } });
  const next = await admit(f);
  assert.deepEqual(next.character.hudProfile, hudProfile);
  // A legacy server without a profile must not erase the saved settings.
  await f.service.save({ serverID: 'local', characterID, body: saveBody(next) });
  assert.deepEqual(f.doc.hudProfile, hudProfile);
});

test('HUD profile validates modes, booleans and bounded subgroups; old characters get defaults', () => {
  const doc = new CharDataModel({ accountID, charName: 'HudFixture', class: 'Hunter', race: 'Human' });
  assert.deepEqual(normalizeHudProfile(doc.toObject().hudProfile), defaultHudProfile());
  for (let mode = 0; mode < 4; mode++) for (const isLocked of [false, true]) {
    const hudProfile = { fastSettings: { toolbar: { mode, isLocked } }, settings: {} };
    assert.deepEqual(normalizePlayState({ ...state, hudProfile }).hudProfile, hudProfile);
  }
  for (const toolbar of [{ mode: 4, isLocked: true }, { mode: -1, isLocked: true },
    { mode: 1.5, isLocked: true }, { mode: 0, isLocked: 'false' }, { mode: 0, isLocked: true, inventory: [] }]) {
    assert.throws(() => normalizePlayState({ ...state, hudProfile: { fastSettings: { toolbar }, settings: {} } }), /INVALID_HUD_PROFILE/);
  }
  for (const hudProfile of [null, [], { ...defaultHudProfile(), accountID },
    { ...defaultHudProfile(), settings: { arbitrary: true } }]) assert.throws(() => normalizeHudProfile(hudProfile));
});

test('nonstackable inventory and F-row references survive save, retry, logout and new admission', async () => {
  const f=fixture(), play=await admit(f), instanceId='a'.repeat(32);
  assert.deepEqual(play.character.inventoryState,emptyInventoryState());
  const inventoryState={capacity:64,entries:[{instanceId,definitionId:'item-x',slot:0}],toolbar:Array(10).fill('')};
  inventoryState.toolbar[0]=instanceId;
  const body=saveBody(play,{state:{...state,inventoryState}});
  await f.service.save({serverID:'local',characterID,body});
  await f.service.save({serverID:'local',characterID,body});
  assert.deepEqual(f.doc.inventoryState,inventoryState);
  await f.service.save({serverID:'local',characterID,body:{...body,sequence:2,saveId:'fixture-save-0002',release:true}});
  const next=await admit(f);
  assert.deepEqual(next.character.inventoryState,inventoryState);
  assert.equal(next.character.inventoryState.entries.length,1);
  assert.deepEqual(f.doc.inventory,['unchanged']);
  // Old clients/servers cannot erase this new state by omitting the field.
  await f.service.save({serverID:'local',characterID,body:saveBody(next)});
  assert.deepEqual(f.doc.inventoryState,inventoryState);
});

test('admission expands the old 20-slot bag without changing items or F bindings', async () => {
  const f=fixture(), instanceId='b'.repeat(32);
  f.doc.inventoryState={capacity:20,entries:[{instanceId,definitionId:'item-x',slot:19}],toolbar:Array(10).fill('')};
  f.doc.inventoryState.toolbar[1]=instanceId;
  const original=structuredClone(f.doc.inventoryState);
  const play=await admit(f);
  assert.deepEqual(play.character.inventoryState,{...original,capacity:64});
});

test('runtime inventory rejects overcapacity, stacks, duplicate instances/slots and dangling toolbar references', () => {
  const inventoryState=emptyInventoryState();
  for(let slot=0;slot<64;slot++) inventoryState.entries.push({instanceId:slot.toString(16).padStart(32,'0'),definitionId:'item-x',slot});
  assert.deepEqual(normalizeInventoryState(inventoryState),inventoryState);
  assert.deepEqual(normalizeInventoryState(new CharDataModel().toObject().inventoryState),emptyInventoryState());
  const invalid=[];
  const change=work=>{const value=structuredClone(inventoryState);work(value);invalid.push(value);};
  change(v=>v.entries.push({instanceId:'f'.repeat(32),definitionId:'item-x',slot:64}));
  change(v=>v.entries[1].instanceId=v.entries[0].instanceId);
  change(v=>v.entries[1].slot=0);
  change(v=>v.entries[0].amount=2);
  change(v=>v.entries[0].definitionId='forged-sword');
  change(v=>v.toolbar[0]='f'.repeat(32));
  change(v=>{v.toolbar[0]=v.entries[0].instanceId;v.toolbar[1]=v.entries[0].instanceId;});
  change(v=>v.toolbar.push(''));
  change(v=>v.capacity=65);
  for(const value of invalid) assert.throws(()=>normalizePlayState({...state,inventoryState:value}),/INVALID_INVENTORY_STATE/);
});
test('pending save recovers after a backend outage longer than the lease timer', async () => {
  const f = fixture(), play = await admit(f); f.expire(121000);
  const body = saveBody(play, { release: true });
  assert.equal((await f.service.save({ serverID: 'local', characterID, body })).released, true);
  assert.equal((await f.service.save({ serverID: 'local', characterID, body })).released, true);
  await admit(f);
  const current = structuredClone(f.doc);
  assert.equal((await f.service.save({ serverID: 'local', characterID, body })).released,true);
  assert.deepEqual(f.doc,current,'Lost final acknowledgement must not overwrite the new owner');
  await assert.rejects(f.service.save({ serverID: 'local', characterID, body:{...body,state:{...state,experience:999}} }), /PLAY_SESSION/);
});
test('save schema rejects forged owner, inventory, nonfinite coordinates and invalid progression', () => {
  assert.deepEqual(normalizePlayState(state), { ...state, position: '1,2,3' });
  for (const bad of [{ ...state, accountID }, { ...state, inventory: [] }, { ...state, level: 0 },
    { ...state, experience: -1 }, { ...state, position: [NaN, 0, 0] }, { ...state, position: [1e9, 0, 0] }]) assert.throws(() => normalizePlayState(bad));
});

test('failed stat profile cannot leave the character locked; successful profile is sent with admission', async () => {
  const failed = fixture(async () => { throw new Error('CLASS_STATS_NOT_CONFIGURED'); });
  await assert.rejects(admit(failed), /CLASS_STATS_NOT_CONFIGURED/);
  assert.equal(failed.doc.activePlay, undefined);
  const f = fixture(async () => ({ version: 1, classKey: 'hunter' }));
  const play = await admit(f);
  assert.equal(play.statProfile.classKey, 'hunter');
  const body = saveBody(play, { state: { ...state, currentHealth: 18.5, currentMana: 3.25 }, release: true });
  await f.service.save({ serverID: 'local', characterID, body });
  await f.service.save({ serverID: 'local', characterID, body });
  assert.equal(f.doc.currentHealth, 18.5);
  assert.equal((await admit(f)).character.currentMana, 3.25);
});
test('HTTP Dedicated routes reject player credentials, then admit/save through the real service contract', async () => {
  const f = fixture(), app = express(); app.use(express.json());
  const routers = createPlayRouters({ service: f.service, runtime: { assertCurrent: async () => {} },
    playerAuth: (req, res, next) => { req.auth = { accountID, sessionID }; next(); },
    serverAuth: dedicatedAuthentication(() => config) });
  app.use('/characters', routers.player); app.use('/dedicated', routers.dedicated);
  const server = app.listen(0, '127.0.0.1'); await once(server, 'listening');
  const url = `http://127.0.0.1:${server.address().port}`;
  const call = (path, body, credential = key, method = 'POST') => fetch(url + path, { method,
    headers: { Authorization: `Bearer ${credential}`, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  try {
    assert.equal((await call('/dedicated/admit', {}, 'player-token')).status, 401);
    const ticket = await (await call(`/characters/${characterID}/play`, {})).json();
    const response = await call('/dedicated/admit', { ticket: ticket.ticket });
    assert.equal(response.status, 200); const play = await response.json();
    const saved = await call(`/dedicated/characters/${characterID}/state`, saveBody(play, { release: true }), key, 'PATCH');
    assert.equal(saved.status, 200); assert.equal((await saved.json()).released, true);
  } finally { await new Promise(resolve => server.close(resolve)); }
});

test('skill ranks and debited points persist together; identical retry cannot debit again', async () => {
 const f=fixture(), entry=await admit(f);
 const body=saveBody(entry,{state:{...state,skillpoints:499,learnedSkills:[{number:5,level:1}]}});
 await f.service.save({serverID:'local',characterID,body});
 await f.service.save({serverID:'local',characterID,body});
 assert.equal(f.doc.skillpoints,499); assert.deepEqual(f.doc.learnedSkills,[{number:5,level:1}]);
 assert.throws(()=>normalizePlayState({...state,learnedSkills:[{number:5,level:-1}]}));
 const final={...body,sequence:2,saveId:'fixture-save-0002',release:true};
 await f.service.save({serverID:'local',characterID,body:final});
 const next=await admit(f); assert.deepEqual(next.character.learnedSkills,[{number:5,level:1}]);
 assert.equal(next.character.skillpoints,499);
});

test('learned skill toolbar bindings survive final save and admission; forged slots are rejected',async()=>{
 const f=fixture(),entry=await admit(f);
 const ranks=[{number:51,level:1}], bindings=[{bar:1,index:0,number:51}];
 const body=saveBody(entry,{release:true,state:{...state,learnedSkills:ranks,toolbarSkills:bindings}});
 await f.service.save({serverID:'local',characterID,body});
 assert.deepEqual((await admit(f)).character.toolbarSkills,bindings);
 for(const bad of [[{bar:1,index:0,number:999}],[{bar:4,index:0,number:51}],[{bar:1,index:10,number:51}],[...bindings,...bindings]])
  assert.throws(()=>normalizePlayState({...state,learnedSkills:ranks,toolbarSkills:bad}));
});

test('special toolbar rows and cleared references persist without losing learned skills or items',async()=>{
 const f=fixture(),entry=await admit(f), ranks=[{number:133,level:1},{number:150,level:1},{number:226,level:1}];
 const bindings=[{bar:2,index:0,number:133},{bar:2,index:4,number:226},{bar:3,index:0,number:150}];
 const body=saveBody(entry,{state:{...state,learnedSkills:ranks,toolbarSkills:bindings}});
 await f.service.save({serverID:'local',characterID,body}); assert.deepEqual(f.doc.toolbarSkills,bindings);
 await f.service.save({serverID:'local',characterID,body:{...body,sequence:2,saveId:'fixture-save-0002',release:true,state:{...body.state,toolbarSkills:[]}}});
 const fresh=await admit(f);assert.deepEqual(fresh.character.toolbarSkills,[]);assert.deepEqual(fresh.character.learnedSkills,ranks);
 for(const b of [{bar:2,index:5,number:133},{bar:3,index:4,number:150}]) assert.throws(()=>normalizePlayState({...state,learnedSkills:ranks,toolbarSkills:[b]}));
});


test('an expired timestamp never permits a second owner while the previous save is pending',async()=>{
  const f=fixture(),play=await admit(f);f.expire(3600000);
  await assert.rejects(admit(f),/CHARACTER_IN_USE/);
  await f.service.save({serverID:'local',characterID,body:saveBody(play,{release:true})});
  assert.ok((await admit(f)).playSessionId);
});

test('skill loading starts only after exclusive ownership and uses the exact saved character snapshot',async()=>{
  let loads=0;
  const f=fixture(async()=>({version:1}),async source=>{loads++;return structuredClone(source.learnedSkills || []);});
  const play=await admit(f);assert.equal(loads,1);
  await assert.rejects(admit(f),/CHARACTER_IN_USE/);assert.equal(loads,1,'Rejected entry cannot preload stale skills');
  const learnedSkills=[{number:5,level:3}];
  await f.service.save({serverID:'local',characterID,body:saveBody(play,{release:true,state:{...state,skillpoints:17,learnedSkills}})});
  const next=await admit(f);assert.deepEqual(next.skillCatalog,learnedSkills);
  assert.deepEqual(next.character.learnedSkills,learnedSkills);assert.equal(next.character.skillpoints,17);
});

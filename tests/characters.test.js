import test from 'node:test';
import assert from 'node:assert/strict';
import { createCharacterService } from '../services/characters.js';
import { characterRace } from '../services/characterPolicy.js';
import { classRaces } from '../services/characterPolicy.js';
import { createCharacterControllers } from '../controllers/characterController.js';
import { createApp } from '../app.js';
import { once } from 'node:events';
function fixture({ reserve = true, inventoryFailure = false, deleted = 1 } = {}) {
  const calls = []; const session = { withTransaction: async callback => { try { const result = await callback(); calls.push('commit'); return result; } catch (error) { calls.push('abort'); throw error; } }, endSession: async () => calls.push('end') };
  let id = 0;
  const service = createCharacterService({ startSession: async () => session, newID: () => `id${++id}`,
    users: { findOneAndUpdate: async (query, update, options) => { calls.push({ query, update, options }); return reserve ? {} : null; }, updateOne: async () => ({ matchedCount: 1 }) },
    characters: { create: async data => calls.push({ character: data[0] }), deleteOne: async query => { calls.push({ delete: query }); return { deletedCount: deleted }; } },
    inventories: { create: async data => { if (inventoryFailure) throw new Error('storage failure'); calls.push({ inventory: data[0] }); }, deleteMany: async () => calls.push('deleteInventory') },
    skills: { find: query => { calls.skillQuery = query; return ({ session: async () => [{ _id: 'skill1' }] }); } },
  });
  return { service, calls, session };
}
test('supported classes map to races; prototype names are rejected', () => {
  assert.equal(characterRace('Adventurer'), 'Human'); assert.equal(characterRace('Hunter'), 'Human'); assert.equal(characterRace('Healer'), 'Aurora');
  assert.throws(() => characterRace('constructor')); assert.throws(() => characterRace('unknown'));
});
test('creation links account, character, skills and empty inventory in transaction', async () => {
  const { service, calls, session } = fixture();
  assert.equal(await service.create({ accountID: 'account', charName: 'Tester', class: 'Hunter' }), 'id1');
  assert.equal(calls[0].query._id, 'account'); assert.equal(calls[0].options.session, session);
  assert.deepEqual(calls[0].query.$expr, { $lt: [{ $size: { $ifNull: ['$characters', []] } }, '$maxChars'] });
  assert.deepEqual(calls[1].character.inventory, ['id2']); assert.deepEqual(calls[1].character.skills, ['skill1']);
  assert.equal(calls[2].inventory.characterID, 'id1'); assert.deepEqual(calls[2].inventory.items, []);
  assert.deepEqual(calls.slice(-2), ['commit', 'end']);
});
test('Adventurer creation uses Human and its existing Abenteuer skill documents', async () => {
  const { service, calls } = fixture();
  await service.create({ accountID: 'account', charName: 'Wanderer', class: 'Adventurer' });
  assert.equal(calls[1].character.class, 'Adventurer');
  assert.equal(calls[1].character.race, 'Human');
  assert.deepEqual(calls.skillQuery, { charClass: 'Abenteuer' });
  assert.deepEqual(calls[1].character.skills, ['skill1']);
});

test('Ritter creation uses the Knight API key and existing skill references', async () => {
  const { service, calls } = fixture();
  await service.create({ accountID: 'account', charName: 'Rittertest', class: 'Knight' });
  assert.equal(calls[1].character.class, 'Knight');
  assert.equal(calls[1].character.race, 'Human');
  assert.deepEqual(calls.skillQuery, { charClass: 'Knight' });
  assert.deepEqual(calls[1].character.skills, ['skill1']);
});

test('limit and inventory errors abort transaction and close session', async () => {
  for (const options of [{ reserve: false }, { inventoryFailure: true }]) {
    const { service, calls } = fixture(options);
    await assert.rejects(service.create({ accountID: 'account', charName: 'Tester', class: 'Hunter' }));
    assert.deepEqual(calls.slice(-2), ['abort', 'end']);
    if (!options.reserve && !options.inventoryFailure) assert.equal(calls.length, 3);
  }
});
test('delete scopes character to account; missing character cannot delete inventory', async () => {
  let fixtureData = fixture();
  await fixtureData.service.remove({ accountID: 'owner', characterID: 'char' });
  assert.equal(fixtureData.calls[0].delete._id, 'char');
  assert.equal(fixtureData.calls[0].delete.accountID, 'owner');
  assert.deepEqual(fixtureData.calls[0].delete['activePlay.closed'],{$ne:false},'An unfinished save remains protected even after its old timestamp expires');
  fixtureData = fixture({ deleted: 0 });
  await assert.rejects(fixtureData.service.remove({ accountID: 'other', characterID: 'char' }));
  assert.equal(fixtureData.calls.includes('deleteInventory'), false);
});
test('controller ignores body account ID and sanitizes storage errors', async () => {
  let input;
  const api = createCharacterControllers({ create: async data => { input = data; throw new Error('database credentials'); } });
  const response = { status(code) { this.code = code; return this; }, json(body) { this.body = body; } };
  await api.create({ auth: { accountID: 'owner' }, body: { accountID: 'forged', charName: 'Tester', class: 'Hunter', level: 999 } }, response);
  assert.deepEqual(input, { accountID: 'owner', charName: 'Tester', class: 'Hunter' });
  assert.equal(response.code, 500); assert.equal(response.body.error, 'CHARACTER_OPERATION_FAILED');
});

test('character list selects only authenticated owner summaries without populating gameplay data', async () => {
  const calls = {};
  const rows = [{ _id: 'owned', charName: 'Tester', class: 'Hunter', race: 'Human', server: 'Asgard', level: 1 }];
  const query = {
    select(fields) { calls.fields = fields; return this; },
    sort(order) { calls.sort = order; return this; },
    lean: async () => rows,
  };
  const service = createCharacterService({ characters: { find(filter) { calls.filter = filter; return query; } } });
  const api = createCharacterControllers(service);
  const response = { json(body) { this.body = body; }, status(code) { this.code = code; return this; } };
  await api.list({ auth: { accountID: 'owner' }, query: { accountID: 'foreign' }, body: { accountID: 'forged' } }, response);
  assert.deepEqual(calls.filter, { accountID: 'owner' });
  assert.equal(calls.fields, '_id charName class race server level');
  assert.deepEqual(response.body, { characters: rows, classes: Object.keys(classRaces) });
});

test('character list returns an empty list and does not reveal storage errors', async () => {
  let failed = false;
  const api = createCharacterControllers({ list: async () => { if (failed) throw new Error('private storage details'); return []; } });
  const response = { json(body) { this.body = body; }, status(code) { this.code = code; return this; } };
  const request = { auth: { accountID: 'owner' } };
  await api.list(request, response);
  assert.deepEqual(response.body, { characters: [], classes: Object.keys(classRaces) });
  failed = true;
  await api.list(request, response);
  assert.equal(response.code, 500);
  assert.deepEqual(response.body, { error: 'CHARACTER_OPERATION_FAILED' });
});

test('character list route requires authentication before accessing storage', async () => {
  const server = createApp({ isReady: () => true }).listen(0, '127.0.0.1');
  await once(server, 'listening');
  try {
    const response = await fetch(`http://127.0.0.1:${server.address().port}/characters?accountID=forged`);
    assert.equal(response.status, 401);
    assert.deepEqual(await response.json(), { error: 'AUTH_REQUIRED' });
  } finally { await new Promise(resolve => server.close(resolve)); }
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { createCharacterService } from '../services/characters.js';
import { characterRace } from '../services/characterPolicy.js';
import { createCharacterControllers } from '../controllers/characterController.js';
function fixture({ reserve = true, inventoryFailure = false, deleted = 1 } = {}) {
  const calls = []; const session = { withTransaction: async callback => { try { const result = await callback(); calls.push('commit'); return result; } catch (error) { calls.push('abort'); throw error; } }, endSession: async () => calls.push('end') };
  let id = 0;
  const service = createCharacterService({ startSession: async () => session, newID: () => `id${++id}`,
    users: { findOneAndUpdate: async (query, update, options) => { calls.push({ query, update, options }); return reserve ? {} : null; }, updateOne: async () => ({ matchedCount: 1 }) },
    characters: { create: async data => calls.push({ character: data[0] }), deleteOne: async query => { calls.push({ delete: query }); return { deletedCount: deleted }; } },
    inventories: { create: async data => { if (inventoryFailure) throw new Error('storage failure'); calls.push({ inventory: data[0] }); }, deleteMany: async () => calls.push('deleteInventory') },
    skills: { find: () => ({ session: async () => [{ _id: 'skill1' }] }) },
  });
  return { service, calls, session };
}
test('supported classes map to races; prototype names are rejected', () => {
  assert.equal(characterRace('Hunter'), 'Human'); assert.equal(characterRace('Healer'), 'Aurora');
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
  assert.deepEqual(fixtureData.calls[0].delete, { _id: 'char', accountID: 'owner' });
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

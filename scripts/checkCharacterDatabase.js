import 'dotenv/config';
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import { once } from 'node:events';
import mongoose from 'mongoose';
import { createApp } from '../app.js';
import { UserDataModel } from '../models/userSchema.js';
import { CharDataModel } from '../models/characterSchema.js';
import { InventoryModel } from '../models/inventorySchema.js';
import { ItemModel } from '../models/itemSchema.js';
import { hashPassword } from '../security/passwords.js';
import { createCharacterService } from '../services/characters.js';
import { sessionService } from '../security/sessions.js';
import { SessionModel } from '../models/sessionSchema.js';

if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Requires celestabyss_dev');
const accounts = [];
let server;
let stage = 'connect';
try {
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB_NAME, serverSelectionTimeoutMS: 10000 });
  await Promise.all([UserDataModel.init(), CharDataModel.init(), InventoryModel.init()]);
  const suffix = randomBytes(6).toString('hex');
  const password = await hashPassword(randomBytes(24).toString('hex'));
  for (const tag of ['owner', 'other']) {
    accounts.push(await UserDataModel.create({ username: `${tag}_${suffix}`, email: `${tag}_${suffix}@example.invalid`, password, maxChars: 1 }));
  }
  const tokens = await Promise.all(accounts.map(async account => (await sessionService.start(account._id)).token));
  server = createApp({ isReady: () => mongoose.connection.readyState === 1 }).listen(0, '127.0.0.1');
  await once(server, 'listening');
  const base = `http://127.0.0.1:${server.address().port}`;
  const request = async (method, path, body, token = tokens[0]) => {
    const response = await fetch(base + path, { method, headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, ...(body ? { body: JSON.stringify(body) } : {}) });
    return { status: response.status, body: await response.json() };
  };
  stage = 'invalid class';
  assert.equal((await request('POST', '/characters', { charName: `Invalid_${suffix}`, class: 'unknown' })).status, 400);
  assert.equal(await CharDataModel.countDocuments({ accountID: String(accounts[0]._id) }), 0);
  stage = 'transaction rollback';
  const failing = createCharacterService({ inventories: { create: async () => { throw new Error('Injected failure'); } } });
  await assert.rejects(failing.create({ accountID: String(accounts[0]._id), charName: `Rollback_${suffix}`, class: 'Hunter' }));
  assert.equal((await UserDataModel.findById(accounts[0]._id)).characters.length, 0);
  assert.equal(await CharDataModel.countDocuments({ accountID: String(accounts[0]._id) }), 0);
  stage = 'concurrent creation';
  const results = await Promise.all(['First', 'Second'].map(name => request('POST', '/characters', {
    charName: `${name}_${suffix}`, class: 'Hunter', accountID: String(accounts[1]._id), level: 999,
  })));
  assert.deepEqual(results.map(result => result.status).sort(), [201, 409]);
  const created = results.find(result => result.status === 201);
  const id = created.body.characterID;
  assert.equal(created.body.userData.password, undefined);
  assert.equal(created.body.userData.email, undefined);
  const player = await UserDataModel.findById(accounts[0]._id);
  assert.equal(player.characters.length, 1);
  assert.equal(String(player.characters[0]), id);
  stage = 'retrieval and ownership';
  const read = await request('GET', `/characters/${id}`);
  assert.equal(read.status, 200);
  assert.equal(read.body.accountID, String(accounts[0]._id));
  assert.equal(read.body.level, 1);
  assert.equal(read.body.race, 'Human');
  assert.equal(read.body.server, 'Asgard');
  assert.equal(read.body.inventory.length, 1);
  assert.equal(read.body.inventory[0].characterID, id);
  assert.deepEqual(read.body.inventory[0].items, []);
  assert.ok(read.body.skills.length > 0);
  assert.ok(read.body.skills.every(skill => typeof skill.skillName_eng === 'string'));
  assert.equal((await request('GET', `/characters/${id}`, undefined, tokens[1])).status, 404);
  assert.equal((await request('DELETE', `/characters/${id}`, undefined, tokens[1])).status, 404);
  stage = 'duplicate name rollback';
  assert.equal((await request('POST', '/characters', { charName: read.body.charName, class: 'Hunter' }, tokens[1])).status, 409);
  assert.equal((await UserDataModel.findById(accounts[1]._id)).characters.length, 0);
  stage = 'item population';
  const template = await ItemModel.findOne();
  await InventoryModel.updateOne({ characterID: id }, { $push: { items: { itemID: template._id, model: 'items', amount: 1 } } });
  const withItem = await request('GET', `/characters/${id}`);
  assert.equal(withItem.status, 200);
  assert.equal(withItem.body.inventory[0].items[0].itemID.name, template.name);
  stage = 'delete';
  assert.equal((await request('DELETE', `/characters/${id}`)).status, 200);
  assert.equal(await CharDataModel.countDocuments({ _id: id }), 0);
  assert.equal(await InventoryModel.countDocuments({ characterID: id }), 0);
  assert.equal((await UserDataModel.findById(accounts[0]._id)).characters.length, 0);
  console.log('PASS: create, linked empty inventory, skills, ownership, defaults, concurrent character limit, duplicate name, transaction rollback, item population and deletion.');
} catch {
  console.error(`Character database check failed at stage: ${stage}. No credentials printed.`);
  process.exitCode = 1;
} finally {
  if (server) await new Promise(resolve => { server.close(resolve); server.closeAllConnections(); });
  // Cleanup is restricted to the exact accounts created by this check.
  for (const account of accounts) {
    const characters = await CharDataModel.find({ accountID: String(account._id) }).select('_id');
    await InventoryModel.deleteMany({ characterID: { $in: characters.map(character => character._id) } });
    await CharDataModel.deleteMany({ accountID: String(account._id) });
    await UserDataModel.deleteOne({ _id: account._id });
    await SessionModel.deleteMany({ accountID: account._id });
  }
  await mongoose.disconnect();
}

import 'dotenv/config';
import assert from 'node:assert/strict';
import { randomBytes } from 'node:crypto';
import mongoose from 'mongoose';
import { readRuntimeConfig } from '../config/runtime.js';
import { ChatMessageModel, ChatCounterModel } from '../models/chatSchema.js';
import { ModerationCaseModel } from '../models/moderationCaseSchema.js';
import { UserDataModel } from '../models/userSchema.js';
import { CharDataModel } from '../models/characterSchema.js';
import { createChatStore } from '../chat/store.js';
import { createPublicationLink } from '../moderation/publication.js';
import { ensureIdentityIndexes, inspectIdentityIndexes } from '../services/identityIndexes.js';

// All writes are confined to fresh, uniquely named fixture collections in the development DB.
if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Development database required');
const prefix = `review_chat_${randomBytes(8).toString('hex')}_`, fixtures = [];
let stage = 'connect';
function fixture(source, suffix) {
  const name = prefix + suffix;
  const model = mongoose.model(name, source.schema.clone(), name);
  fixtures.push(model); return model;
}
try {
  const config = readRuntimeConfig();
  await mongoose.connect(config.uri, { dbName: config.dbName, autoIndex: false, serverSelectionTimeoutMS: 10000 });
  const messages = fixture(ChatMessageModel, 'messages'), counters = fixture(ChatCounterModel, 'counters');
  const cases = fixture(ModerationCaseModel, 'cases'), users = fixture(UserDataModel, 'players'), characters = fixture(CharDataModel, 'characters');
  const targets = [{ model: users, fields: ['username', 'email'] }, { model: characters, fields: ['charName'] }];
  stage = 'fresh identity indexes';
  await ensureIdentityIndexes(targets);
  assert.ok((await inspectIdentityIndexes(targets)).every(entry => entry.unique && entry.duplicateGroups === 0));
  const uniqueRace = async (collection, documents) => {
    const results = await Promise.allSettled(documents.map(document => collection.insertOne(document)));
    assert.equal(results.filter(result => result.status === 'fulfilled').length, 1);
    assert.equal(results.find(result => result.status === 'rejected').reason.code, 11000);
  };
  await uniqueRace(users.collection, [{ username: 'one', email: 'same@example.invalid' }, { username: 'two', email: 'same@example.invalid' }]);
  await uniqueRace(users.collection, [{ username: 'shared', email: 'a@example.invalid' }, { username: 'shared', email: 'b@example.invalid' }]);
  await uniqueRace(characters.collection, [{ charName: 'shared' }, { charName: 'shared' }]);
  await Promise.all([messages.createIndexes(), cases.createIndexes(), counters.createCollection()]);
  await counters.create({ _id: 'global', sequence: 0 });
  const store = createChatStore({ messages, counters }), link = createPublicationLink(cases);
  const identity = { accountID: String(new mongoose.Types.ObjectId()), username: 'fixture' };
  const incident = await cases.create({ targetKey: 'attempt:fixture:first', source: 'system', senderID: identity.accountID,
    clientMessageID: 'first', originalText: 'fixture', status: 'open', expiresAt: new Date(Date.now() + 86400000) });
  const input = { identity, clientMessageID: 'first', text: 'masked fixture', originalText: 'fixture',
    onStored: args => link({ ...args, caseID: incident.id }) };
  stage = 'transaction rollback after moderation link';
  await assert.rejects(store.append({ ...input, onStored: async args => { await input.onStored(args); throw new Error('injected failure'); } }));
  assert.equal(await messages.countDocuments(), 0);
  assert.equal((await counters.findById('global')).sequence, 0);
  assert.equal((await cases.findById(incident.id)).messageID, undefined);
  stage = 'atomic commit and pending recovery';
  const accepted = await store.append(input);
  assert.equal(String((await cases.findById(incident.id)).messageID), accepted.message.id);
  assert.equal((await store.pendingDeliveries())[0].id, accepted.message.id);
  assert.equal((await store.append(input)).created, false);
  const replacement = createChatStore({ messages, counters });
  assert.equal((await replacement.pendingDeliveries()).length, 1);
  await replacement.markDispatched(accepted.message.id);
  assert.deepEqual(await replacement.pendingDeliveries(), []);
  assert.equal((await store.append(input)).created, false);
  assert.deepEqual(await store.pendingDeliveries(), []);
  stage = 'missing moderation case rejects commit';
  await assert.rejects(store.append({ identity, clientMessageID: 'missing', text: 'fixture',
    onStored: args => link({ ...args, caseID: String(new mongoose.Types.ObjectId()) }) }));
  assert.equal(await messages.countDocuments(), 1);
  stage = 'legacy retry repairs unknown delivery';
  await messages.updateOne({ _id: accepted.message.id }, { $unset: { deliveryState: 1 } });
  await store.append(input);
  assert.equal((await store.pendingDeliveries()).length, 1);
  stage = 'delivery respects last-50 window';
  await messages.insertMany(Array.from({ length: 55 }, (_, i) => ({ channel: 'global', sequence: i + 2,
    senderID: identity.accountID, senderName: identity.username, clientMessageID: `window${i}`, text: 'fixture',
    sentAt: new Date(), deliveryState: 'pending' })));
  const pending = await store.pendingDeliveries();
  assert.equal(pending.length, 50); assert.equal(pending[0].sequence, 7);
  assert.equal((await messages.findById(accepted.message.id)).deliveryState, 'expired');
  await messages.updateMany({ deliveryState: 'pending' }, { $set: { expiresAt: new Date(Date.now() - 1000) } });
  assert.deepEqual(await store.pendingDeliveries(), []);
  console.log('PASS: fresh unique indexes reject concurrent duplicates; real MongoDB transactions roll back message/counter/moderation together; durable delivery, retries, legacy repair and history bounds verified.');
} catch (error) {
  console.error(`Isolated database check failed at ${stage} (${error.name}, code ${error.code ?? 'none'}). Credentials and contents omitted.`);
  process.exitCode = 1;
} finally {
  for (const model of fixtures) {
    if (!model.collection.collectionName.startsWith(prefix)) throw new Error('Fixture cleanup target mismatch');
    try { await model.collection.drop(); } catch (error) { if (error.code !== 26) { process.exitCode = 1; console.error('Fixture cleanup failed.'); } }
  }
  await mongoose.disconnect();
}

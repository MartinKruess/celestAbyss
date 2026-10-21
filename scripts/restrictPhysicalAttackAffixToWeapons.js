import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';

try {
  assert.equal(process.env.MONGODB_DB_NAME, 'celestabyss_dev');
  const path = 'data/balancing/armor-defense-model.json';
  const original = await fs.readFile(path, 'utf8');
  const config = JSON.parse(original);
  const selection = config.bonusSlotRules.randomSelection;
  selection.pool.find(entry => entry.stat === 'physicalAttack').allowedItemCategories = ['weapons'];
  selection.eligibilityRule = 'Filter pool by item category before each draw; omitted allowedItemCategories means unrestricted. Normalize weights using only eligible entries. Physical attack is weapons-only; attributes remain unrestricted.';
  assert.equal(selection.pool.reduce((sum, entry) => sum + entry.weight, 0), 393);
  assert.equal(selection.pool.filter(entry => !entry.allowedItemCategories || entry.allowedItemCategories.includes('armor')).reduce((sum, entry) => sum + entry.weight, 0), 390);
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, {dbName:process.env.MONGODB_DB_NAME, autoIndex:false, serverSelectionTimeoutMS:10000});
  const collection = mongoose.connection.collection('equipmentRules');
  const before = await collection.findOne({_id:'armor-bonus-rules'});
  assert.ok(before?.rules);
  assert.deepEqual(before.rules, JSON.parse(original).bonusSlotRules);
  const backup = `data/balancing/history/before-weapons-only-physical-attack-affix-${Date.now()}`;
  await fs.mkdir(backup, {recursive:true});
  await fs.writeFile(`${backup}/armor-defense-model.json`, original);
  await fs.writeFile(`${backup}/database-equipment-rule.json`, JSON.stringify(before, null, 2)+'\n');
  const result = await collection.updateOne({_id:before._id, rules:before.rules}, {$set:{rules:config.bonusSlotRules}});
  assert.equal(result.matchedCount, 1);
  assert.deepEqual((await collection.findOne({_id:before._id})).rules, config.bonusSlotRules);
  await fs.writeFile(path, JSON.stringify(config, null, 2)+'\n');
  console.log('Verified local and database affix rules: direct physical attack weapons-only; eligible armor weight 390; no item bonuses rolled.');
} catch(error) {
  console.error(`Affix rule update failed (${error.name}); credentials omitted.`);
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}

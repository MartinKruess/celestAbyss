import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import { ItemModel } from '../models/itemSchema.js';

const read = async p => JSON.parse(await fs.readFile(p, 'utf8'));
const save = async (p, value) => fs.writeFile(p, JSON.stringify(value, null, 2) + '\n');
const rates = [1.77, 1.75, 1.73, 1.71, 1.69];
const curve = start => { let value = start; return [Math.round(value), ...rates.map(rate => Math.round(value *= rate))]; };
const oneAttributes = [[0,0],[1,1],[3,2],[5,3],[6,4],[8,5]];
const localOnly = process.argv.includes('--local-only');
try {
  if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw Error('Development database required');
  if (!localOnly) await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB_NAME, autoIndex: false, serverSelectionTimeoutMS: 10000 });
  const cached = localOnly ? await read('tmp/weapon-review-items.json') : null;
  const col = localOnly ? {find:query=>({toArray:async()=>cached.filter(x=>x.category==='weapon' && (typeof query.type==='string' ? x.type===query.type : query.type.$in.includes(x.type)))})} : mongoose.connection.db.collection('items');
  const before = await col.find({category:'weapon',type:{$in:['Mace','Mace2H']}}).toArray();
  assert.equal(before.length, 12);
  const swords = await col.find({category:'weapon',type:'Sword2H'}).toArray();
  assert.equal(swords.length, 6);
  const changes = [];
  for (const type of ['Mace','Mace2H']) {
    const series = before.filter(x => x.type === type).sort((a,b) => a.rang-b.rang);
    assert.deepEqual(series.map(x => x.rang), [1,2,3,4,5,6]);
    const physical = curve(type === 'Mace' ? 8 : 10);
    const magical = curve(type === 'Mace' ? 5 : 16);
    for (const [i,item] of series.entries()) {
      const [str,int] = oneAttributes[i];
      const attributes = {...item.attributes, pang:physical[i], mang:magical[i]};
      if (i) { attributes.strength = type === 'Mace' ? str : int*2; attributes.int = type === 'Mace' ? int : str*2; }
      else { delete attributes.strength; delete attributes.int; }
      if (type === 'Mace2H') attributes.speed = swords.find(x => x.rang === item.rang).attributes.speed;
      await new ItemModel({...item,attributes}).validate();
      changes.push({...item,attributes});
    }
  }
  const dir = 'data/balancing/history/before-mace-decisions-' + Date.now();
  await fs.mkdir(dir, {recursive:true});
  await save(dir+'/items.json', before);
  const paths = ['weapon-combat-value-overrides.json','weapon-attribute-rank-overrides.json','weapon-speed-overrides.json'];
  for (const path of paths) await fs.copyFile('data/balancing/'+path, dir+'/'+path);
  if (!localOnly) await mongoose.connection.transaction(async session => {
    for (const item of changes) await col.updateOne({_id:item._id}, {$set:{attributes:item.attributes}}, {session});
  });
  if (!localOnly) for (const item of changes) assert.deepEqual(await col.findOne({_id:item._id}), item);
  const [combat, ranks, speeds] = await Promise.all(paths.map(p => read('data/balancing/'+p)));
  for (const item of changes) {
    combat[item.name] = {...combat[item.name],pang:item.attributes.pang,mang:item.attributes.mang};
    ranks[item.name] = {...ranks[item.name], attributes:{...ranks[item.name].attributes}};
    delete ranks[item.name].attributes.strength; delete ranks[item.name].attributes.int;
    if (item.rang > 1) Object.assign(ranks[item.name].attributes, {strength:item.attributes.strength,int:item.attributes.int});
    if (item.type === 'Mace2H') speeds[item.name] = item.attributes.speed;
  }
  for (const [i,value] of [combat,ranks,speeds].entries()) await save('data/balancing/'+paths[i], value);
  await save('tmp/weapon-review-items.json', localOnly ? cached.map(x=>changes.find(y=>String(x._id)===String(y._id))??x) : await col.find({}).toArray());
  await save('data/balancing/mace-weapon-decisions.json', {status:localOnly?'preparedLocallyDatabasePending':'appliedAndVerified',rates,comparisonStatus:'Existing simulations retain previous equipment; rerun after class review',weapons:changes});
  console.log(localOnly ? 'Prepared and validated 12 mace weapons locally; database application pending.' : 'Verified 12 mace weapons in development database; seed overrides and weapon export updated. Simulation inputs/results unchanged.');
} catch (error) {
  console.error('Mace update failed ('+error.name+'); credentials omitted.');
  process.exitCode = 1;
} finally { await mongoose.disconnect(); }

import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {ItemModel} from '../models/itemSchema.js';
import {ArmorSetModel} from '../models/armorSetSchema.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const classKeys={Butcher:'butcher',Gladiator:'gladiator',Tank:'knight',Villain:'villian',Bloodmage:'ritualist',Healer:'healer',Lightmage:'luminet','Kräuterkundler':'herbalist',Archer:'hunter',Shamane:'shaman',Druid:'druid','Seelenjäger':'summoner',Adventure:'adventurer'};
let stage='local validation';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 const armor=await read('data/balancing/armor-parts.json');
 const parts=[...armor.parts,...armor.cloaks];assert.equal(parts.length,442);
 const records=parts.map(part=>({
  armorDefinitionId:part.id,name:`${part.name} (${part.className.split(' / ')[0]}, R${part.rank})`,name_de:part.name,
  description:part.description_de??`Rüstungsteil für ${part.className}, Rang ${part.rank}.`,
  description_de:part.description_de??`Rüstungsteil für ${part.className}, Rang ${part.rank}.`,
  category:'armor',type:part.slot,equipmentSlot:part.slot,rang:part.rank,
  allowedClassKeys:[classKeys[part.sourceClass]],armorNameStatus:part.nameStatus,
  armorDefenseStatus:part.slot==='cloak'?'pending':'assigned',
  ...(part.setId?{armorSetId:part.setId}:{}),armorBonusSlots:part.bonusSlots,armorBonusSlotLimit:part.bonusSlotLimit,
  attributes:part.slot==='cloak'?{}:{pdeff:part.raw.physicalDefense,mdeff:part.raw.magicalDefense},
  stacksize:1,sellable:false,tradable:false,
 }));
 assert.equal(new Set(records.map(r=>r.name)).size,442);
 for(const record of records){assert.ok(record.allowedClassKeys[0]);await new ItemModel(record).validate();}
 stage='database preflight';
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const items=await ItemModel.collection.find({}).toArray();
 const setsBefore=await ArmorSetModel.collection.find({}).toArray();
 const relevant=items.filter(i=>i.armorDefinitionId);
 const known=new Set(records.map(r=>r.armorDefinitionId));
 assert.ok(relevant.every(i=>known.has(i.armorDefinitionId)),'Unexpected armor definitions in database');
 for(const record of records){
  const collisions=items.filter(i=>i.name===record.name&&i.armorDefinitionId!==record.armorDefinitionId);
  assert.equal(collisions.length,0,'Name collision with unrelated item');
 }
 if(!process.argv.includes('--apply')){console.log(JSON.stringify({mode:'dryRun',items:records.length,assigned:390,pendingCloaks:52,sets:armor.armorSets.length,existingArmorItems:relevant.length}));}
 else{
  const backup=`data/balancing/history/before-armor-item-import-${Date.now()}`;await fs.mkdir(backup,{recursive:true});
  await fs.writeFile(`${backup}/database-items.json`,JSON.stringify(items,null,2)+'\n');
  await fs.writeFile(`${backup}/database-sets.json`,JSON.stringify(setsBefore,null,2)+'\n');
  stage='indexes';await ItemModel.createIndexes();await ArmorSetModel.createIndexes();
  const session=await mongoose.startSession();
  let saved;
  try{await session.withTransaction(async()=>{
   stage='item upserts';
   await ItemModel.bulkWrite(records.map(record=>({updateOne:{filter:{armorDefinitionId:record.armorDefinitionId},update:{$set:record,...(!record.armorSetId?{$unset:{armorSetId:''}}:{})},upsert:true}})),{session,ordered:true});
   saved=await ItemModel.collection.find({armorDefinitionId:{$in:[...known]}},{session}).toArray();assert.equal(saved.length,442);
   for(const record of records){
    const actual=saved.find(i=>i.armorDefinitionId===record.armorDefinitionId);assert.ok(actual);
    for(const key of Object.keys(record))assert.deepEqual(JSON.parse(JSON.stringify(actual[key])),record[key],`Item readback mismatch ${key}`);
   }
   stage='set upserts';
   const sets=armor.armorSets.map(set=>({key:set.id,name:set.name,description_de:set.description_de,classKey:classKeys[set.sourceClass],className:set.className,rank:set.rank,
    themeItem:set.themeItem,themeItemName:set.themeItemName,themeMaterial:set.themeMaterial,themeStatus:set.themeStatus,
    materialLore:set.materialLore,namingStatus:set.namingStatus,designNotes:set.designNotes,
    parts:set.partIds.map(id=>({definitionId:id,itemId:saved.find(i=>i.armorDefinitionId===id)._id})),setBonuses:set.setBonuses,setBonusStatus:set.setBonusStatus}));
   for(const set of sets)await new ArmorSetModel(set).validate();
   await ArmorSetModel.bulkWrite(sets.map(set=>({updateOne:{filter:{key:set.key},update:{$set:set},upsert:true}})),{session,ordered:true});
   const storedSets=await ArmorSetModel.collection.find({key:{$in:sets.map(s=>s.key)}},{session}).toArray();assert.equal(storedSets.length,13);
   for(const set of sets){const actual=storedSets.find(s=>s.key===set.key);for(const key of ['name','classKey','rank','parts','setBonuses','setBonusStatus'])assert.deepEqual(JSON.parse(JSON.stringify(actual[key])),JSON.parse(JSON.stringify(set[key])));}
   stage='unrelated item preservation';
   const unrelated=items.filter(i=>!i.armorDefinitionId);
   const after=await ItemModel.collection.find({_id:{$in:unrelated.map(i=>i._id)}},{session}).toArray();assert.equal(after.length,unrelated.length);
   for(const item of unrelated)assert.deepEqual(after.find(i=>String(i._id)===String(item._id)),item);
  });}finally{await session.endSession();}
  stage='manifest';
  const definitionHash=createHash('sha256').update(JSON.stringify({parts:armor.parts,cloaks:armor.cloaks,sets:armor.armorSets})).digest('hex');
  const manifest={status:'importedAndVerified',generatedAt:new Date().toISOString(),database:process.env.MONGODB_DB_NAME,backup,definitionHash,items:saved.map(i=>({definitionId:i.armorDefinitionId,databaseId:String(i._id)})),sets:13,assignedDefenseItems:390,pendingCloaks:52,unrelatedItemsUnchanged:true};
  await fs.writeFile('data/balancing/armor-database-manifest.json',JSON.stringify(manifest,null,2)+'\n');
  console.log(JSON.stringify({status:manifest.status,items:442,assigned:390,pendingCloaks:52,sets:13,unrelatedItemsUnchanged:true,backup}));
 }
}catch(error){console.error(`Armor import failed at ${stage} (${error.name}); credentials omitted.`);process.exitCode=1;}
finally{await mongoose.disconnect();}

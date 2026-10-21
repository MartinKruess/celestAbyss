import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
const eqPath='data/balancing/ranked-equipment.json',overridesPath='data/balancing/weapon-combat-value-overrides.json';
const equipment=JSON.parse(await fs.readFile(eqPath,'utf8')),overrides=JSON.parse(await fs.readFile(overridesPath,'utf8'));
const rows=equipment.weapons.filter(w=>w.name==='Crossbow').sort((a,b)=>a.rank-b.rank);
assert.equal(rows.length,6);assert.deepEqual(rows.map(w=>w.raw.find(v=>v.label==='P.Ang').value),[25,44,77,134,229,387]);
for(const w of rows)assert.equal(overrides[w.itemName].pang,w.raw.find(v=>v.label==='P.Ang').value);
if(!process.argv.includes('--apply'))console.log(JSON.stringify(rows.map(w=>({rank:w.rank,before:overrides[w.itemName].pang,after:overrides[w.itemName].pang-1}))));
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=mongoose.connection.db.collection('items'),allBefore=await col.find({category:'weapon'}).toArray(),crossbows=allBefore.filter(x=>x.type==='Crossbow').sort((a,b)=>a.rang-b.rang);
 assert.equal(crossbows.length,6);for(let i=0;i<6;i++){assert.equal(crossbows[i].attributes.pang,overrides[rows[i].itemName].pang);assert.equal(String(crossbows[i]._id),rows[i].databaseItemId);}
 const backup='data/balancing/history/before-crossbow-minus-one-'+Date.now();await fs.mkdir(backup,{recursive:true});
 await fs.writeFile(backup+'/weapons.json',JSON.stringify(allBefore,null,2)+'\n');await fs.copyFile(eqPath,backup+'/ranked-equipment.json');await fs.copyFile(overridesPath,backup+'/weapon-combat-value-overrides.json');
 for(const old of crossbows){assert.equal((await col.updateOne(old,{$set:{'attributes.pang':old.attributes.pang-1}})).matchedCount,1);}
 const after=await col.find({category:'weapon'}).toArray();assert.equal(after.length,allBefore.length);
 for(const old of allBefore){const actual=after.find(x=>String(x._id)===String(old._id)),expected={...old,attributes:{...old.attributes}};if(old.type==='Crossbow')expected.attributes.pang-=1;assert.deepEqual(JSON.parse(JSON.stringify(actual)),JSON.parse(JSON.stringify(expected)));}
 for(const w of rows){w.raw.find(v=>v.label==='P.Ang').value-=1;overrides[w.itemName].pang-=1;}
 await fs.writeFile(eqPath,JSON.stringify(equipment,null,2)+'\n');await fs.writeFile(overridesPath,JSON.stringify(overrides,null,2)+'\n');
 await fs.writeFile('tmp/weapon-review-items.json',JSON.stringify(await col.find({}).toArray(),null,2)+'\n');
 const changes=crossbows.map(x=>({id:String(x._id),name:x.name,rank:x.rang,before:x.attributes.pang,after:x.attributes.pang-1}));
 await fs.writeFile('data/balancing/crossbow-minus-one-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes,otherWeaponValuesUnchanged:true},null,2)+'\n');console.log(JSON.stringify(changes));
}catch(error){console.error('Crossbow update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}

import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const rows=await SkillDataModel.collection.find({nr:{$in:[13,40,62,109,127,128,161]}}).toArray();assert.equal(rows.length,7);const get=n=>rows.find(s=>s.nr===n);
 for(const [nr,cost]of [[13,55],[127,35],[128,5],[109,5]]){const s=get(nr);assert.deepEqual(s.resourceCosts,[{resource:'rage',reference:'maxRage',unit:'flat',scaling:{type:'fixed',base:cost}}]);}
 assert.equal(get(13).activationRequirements.minimumFraction,0.55);assert.equal(get(13).activationRequirements.ragePointsPerSuccessfulBasicAttack,undefined);
 assert.ok(!get(109).effects.some(e=>e.type==='resourceGain'&&e.resource==='rage'));
 const e=get(161);assert.equal(e.cd,70);assert.deepEqual(e.cooldownScaling,{type:'linear',base:70,perLevel:-1});assert.equal(e.durationScaling.base+9*e.durationScaling.perLevel,50);assert.equal(e.effects.find(x=>x.resource==='rage').valueScaling.values.at(-1),0.01);
 const f=get(40);assert.equal(f.skillName_de,'Erlösendes Feld');assert.equal(f.castTimeSeconds,0.4);assert.deepEqual(f.resourceCosts[0].scaling,{type:'linear',base:83,perLevel:34});
 const dot=get(62).effects.find(x=>x.type==='periodicDamage');assert.equal(dot.intervalSeconds,2);assert.equal(dot.firstTickAfterSeconds,2);assert.equal(dot.valueScaling.base,72);assert.equal(dot.valueScaling.base+4*dot.valueScaling.perLevel,186);assert.equal(dot.addsCasterMagicalAttack,false);
 const snapshot=JSON.parse(JSON.stringify(rows)).map(s=>{delete s.__v;return s;});
 await fs.writeFile('data/balancing/confirmed-recent-rules-database-verification.json',JSON.stringify({verifiedAt:new Date().toISOString(),database:process.env.MONGODB_DB_NAME,status:'All explicitly confirmed recent rules read back and verified',skills:snapshot},null,2)+'\n');
 console.log('Verified directly in MongoDB: Rage55/35/5/5 no refund; Energy-only generation, cooldown70–61 durationmax50; Redeeming Field Mana83–389 cast0.4; CycloneDoT72–186 every2s.');
}catch(e){console.error(`Recent rules verification failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}

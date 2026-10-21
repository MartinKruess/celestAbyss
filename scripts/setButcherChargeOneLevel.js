import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';

const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===12);
assert.equal(before.maxSkillLv,5);
const maximum=resolveSkillAtLevel(before,5,{classKey:'butcher'});
const skill=structuredClone(before);
skill.maxSkillLv=1;
for(const key of ['str','health','patk','mana','cd'])skill[key]=maximum[key];
for(const key of Object.keys(skill.statScaling))skill.statScaling[key]={type:'linear',base:maximum[key],perLevel:0};
skill.cooldownScaling={type:'linear',base:maximum.cd,perLevel:0};
for(const [i,cost] of skill.resourceCosts.entries())cost.scaling={type:'linear',base:maximum.resourceCosts[i].scaling.base,perLevel:0};
skill.description_de='Aktiver Eigenbuff mit einer einzigen Skillstufe. Verstärkt dich für 15 Sekunden um 25 Stärke, 240 maximale Lebenspunkte und 200 P-Angriff. Der Lebensbonus ist keine direkte Heilung. Cooldown 122 Sekunden. Feste Castzeit 0,1 Sekunden, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 102 Mana vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. Die einzige Stufe übernimmt die bisherigen Werte von Skillstufe 5 und kostet einen Skillpunkt.';
skill.description_eng='Active self buff with one learnable skill level. For 15 seconds, grants 25 Strength, 240 maximum Health and 200 physical attack. The maximum Health bonus is not direct healing. Cooldown 122 seconds. Fixed cast time 0.1 seconds, unaffected by attack or cast speed; animation duration is separate. Activation costs 102 Mana before discounts. Ongoing Mana drain is calculated separately. This single level retains the former level-five values and costs one skill point.';
delete skill.levelProgression;
skill.levelProgression=buildSkillProgression(skill);
await new SkillDataModel(skill).validate();
const actual=resolveSkillAtLevel(skill,1,{classKey:'butcher'});
for(const key of ['str','health','patk','mana','cd','dur','castTimeSeconds','resourceCosts','statScaling','timingModifiers','statBonusTargets','statBonusUnits'])assert.deepEqual(actual[key],maximum[key],key);
assert.throws(()=>resolveSkillAtLevel(skill,2,{classKey:'butcher'}),/exceeds/);
if(!process.argv.includes('--apply'))console.log('Preview verified: one Charge level retains every former maximum stat, cost and timing. No writes.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.findOne({nr:12});
 const normalized=JSON.parse(JSON.stringify(stored));delete normalized.__v;
 assert.deepEqual(normalized,before,'Live skill changed since export');
 const backup='data/balancing/history/before-butcher-charge-one-level-'+Date.now();
 await fs.mkdir(backup,{recursive:true});
 await fs.writeFile(backup+'/skill.json',JSON.stringify(stored,null,2)+'\n');
 const fields=structuredClone(skill);delete fields._id;
 const result=await col.updateOne(stored,{$set:fields});assert.equal(result.matchedCount,1);
 const readback=JSON.parse(JSON.stringify(await col.findOne({_id:stored._id})));delete readback.__v;
 assert.deepEqual(readback,skill);
 await fs.writeFile('data/balancing/butcher-charge-one-level-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:12,previousMaxLevel:5,maxSkillLevel:1,pointDelta:-4,rule:'Former level-five effects, costs and timings retained at the only learnable level.'},null,2)+'\n');
 console.log('Verified database: Charge 5 -> 1, former maximum values retained.');
}catch(error){console.error('Charge update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}

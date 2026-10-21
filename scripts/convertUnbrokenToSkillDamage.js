import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {curveValue} from '../services/skillProgression.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===177),s=structuredClone(before);
assert.deepEqual(s.charClass,['Butcher','Destroyer']);
delete s.str;delete s.statScaling.str;s.levelProgression.rules=s.levelProgression.rules.filter(r=>r.path.join('.')!=='statScaling.str');
s.effects.push({key:'unbroken-permanent-physical-skill-damage',type:'damageBonus',target:'self',appliesTo:'allSkills',unit:'flat',damageTypes:['physical'],value:3,valueScaling:{type:'linear',base:3,perLevel:3},durationSeconds:0});
const index=s.effects.length-1;s.levelProgression.rules.push({path:['effects',String(index),'valueScaling'],rule:{kind:'linear',base:3,perLevel:3},source:'storedFormula'});
s.description_de=s.description_de.replace('Dauerhafter Attributanteil: je gelernter Stufe +1,3 Stärke; auf Stufe 10 insgesamt +13 Stärke. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten.','Dauerhafter Bonus: +3 physischer Skillschaden je gelernter Stufe, auf Stufe 10 insgesamt +30. Gilt ständig für passende physische Skilltreffer, unabhängig von der letzten Kampfphase. Kein Stärkebonus, kein allgemeiner P-Angriff und kein Bonus für normale Auto-Attacks oder Begleiter.');
s.description_eng=s.description_eng.replace('Permanent attribute component: +1.3 Strength per learned level; at level 10, +13 Strength total. This component always applies independently of any triggered effects.','Permanent bonus: +3 physical skill damage per learned level, up to +30 at level 10. Always applies to matching physical skill hits, independently of the final combat phase. No Strength bonus, general physical attack bonus or normal basic attack/companion bonus.');
const changes=[{before,after:s}];
await new SkillDataModel(s).validate();
for(let level=1;level<=10;level++){const a=resolveSkillAtLevel(s,level),b=resolveSkillAtLevel(before,level);assert.equal(a.str,undefined);assert.equal(curveValue(a.effects[index].valueScaling,level),3*level);assert.deepEqual(a.effects.slice(0,index),b.effects);for(const k of ['mana','resourceCosts','dur','cd','maxSkillLv','skillpoints'])assert.deepEqual(a[k],b[k]);}
if(!process.argv.includes('--apply'))console.log('Validated permanent physical skill bonus +3/rank, +30 maximum; death phase unchanged. Dry run only.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=[];for(const {before}of changes){const live=await col.findOne({nr:before.nr}),normalized=JSON.parse(JSON.stringify(live));delete normalized.__v;assert.deepEqual(normalized,before);stored.push(live);}
 const backup='data/balancing/history/before-unbroken-passive-skill-damage-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(let i=0;i<changes.length;i++){const fields=structuredClone(changes[i].after);delete fields._id;assert.equal((await col.updateOne(stored[i],{$set:fields,$unset:{str:''}})).matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored[i]._id})));delete actual.__v;assert.deepEqual(actual,changes[i].after);}
 await fs.writeFile('data/balancing/unbroken-passive-skill-damage-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes},null,2)+'\n');console.log('Unbroken passive skill damage saved and verified.');
}catch(error){console.error('Butcher reduction failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}



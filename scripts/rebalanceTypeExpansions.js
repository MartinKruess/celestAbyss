import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';

const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const numbers=[43,44,45];
const changes=numbers.map(nr=>{
 const before=catalog.find(s=>s.nr===nr),skill=structuredClone(before);
 if(nr===43){
  for(const [key,value]of Object.entries({agi:1,dex:1,vita:0.5,wis:0.5})){
   skill[key]=value;skill.statScaling[key]={type:'linear',base:value,perLevel:value};
  }
  skill.description_de='Permanenter passiver Bonus mit zehn Stufen. Je gelernter Stufe +1 Agilität, +1 Geschick, +0,5 Vitalität und +0,5 Willenskraft. Auf Stufe 10 insgesamt +10 Agilität, +10 Geschick, +5 Vitalität und +5 Willenskraft. Kein zusätzlicher Glücksbonus. Keine Aktivierungskosten, Castzeit oder Cooldown.';
  skill.description_eng='Permanent passive with ten levels. Each learned level grants +1 Agility, +1 Dexterity, +0.5 Vitality and +0.5 Wisdom. At level 10: +10 Agility, +10 Dexterity, +5 Vitality and +5 Wisdom. No added Luck bonus, activation costs, cast time or cooldown.';
 }else{
  for(const [key,curve]of Object.entries(skill.statScaling)){
   skill[key]/=2;curve.values=curve.values.map(v=>v/2);
   if(typeof curve.base==='number')curve.base/=2;
  }
  const de=nr===44?'Intelligenz, Willenskraft und Geschick':'Stärke, Vitalität und Willenskraft';
  const en=nr===44?'Intelligence, Wisdom and Dexterity':'Strength, Vitality and Wisdom';
  skill.description_de=`Permanenter passiver Bonus mit zehn Stufen. ${de} erhalten jeweils folgende Boni auf Stufe 1 bis 10: 1 / 1,5 / 2 / 2,5 / 3 / 3,5 / 4 / 4,5 / 5 / 10. Alle bisherigen Attributboni sind auf jeder Stufe halbiert. Keine Aktivierungskosten, Castzeit oder Cooldown.`;
  skill.description_eng=`Permanent passive with ten levels. ${en} each receive the following bonuses at levels 1 through 10: 1 / 1.5 / 2 / 2.5 / 3 / 3.5 / 4 / 4.5 / 5 / 10. All previous attribute bonuses are halved at every level. No activation costs, cast time or cooldown.`;
 }
 delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
 return {before,skill};
});
for(const {before,skill}of changes){
 await new SkillDataModel(skill).validate();assert.equal(skill.maxSkillLv,10);assert.deepEqual(skill.charClass,before.charClass);
 for(let level=1;level<=10;level++){
  const r=resolveSkillAtLevel(skill,level),old=resolveSkillAtLevel(before,level);
  for(const key of Object.keys(skill.statScaling))assert.equal(r[key],skill.nr===43?level*({agi:1,dex:1,vita:0.5,wis:0.5}[key]):old[key]/2);
 }
}
if(!process.argv.includes('--apply'))console.log('Preview verified: three expansion passives, every level checked.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:numbers}}).toArray();assert.equal(stored.length,3);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-type-expansions-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(const {skill}of changes){
  const live=stored.find(s=>s.nr===skill.nr),fields=structuredClone(skill);delete fields._id;
  const result=await col.updateOne(live,{$set:fields});assert.equal(result.matchedCount,1);
  const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);
 }
 await fs.writeFile('data/balancing/type-expansions-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,pointDelta:0,skillNumbers:numbers,sensesProgression:'+1 Agility, +1 Dexterity, +0.5 Vitality, +0.5 Wisdom per learned level',bodySpiritProgression:'Existing attribute bonuses halved at every level'},null,2)+'\n');
 console.log('Verified three expansion database updates.');
}catch(error){console.error('Expansion update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}

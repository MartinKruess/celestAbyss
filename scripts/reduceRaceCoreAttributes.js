import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=[1,2,5].map(nr=>{
 const before=catalog.find(s=>s.nr===nr),skill=structuredClone(before);assert.equal(before.maxSkillLv,20);
 const perLevel=nr===1?{int:.5,wis:.5}:nr===2?{str:.5,agi:.25,dex:.25}:{vita:.5,wis:.5};
 for(const [key,value]of Object.entries(perLevel)){skill[key]=value;skill.statScaling[key]={type:'linear',base:value,perLevel:value};}
 if(nr===1){delete skill.dex;delete skill.statScaling.dex;delete skill.statBonusTargets?.dex;delete skill.statBonusUnits?.dex;
  skill.description_de='Permanenter passiver Aurora-Grundskill mit 20 Stufen. Je gelernter Stufe +0,5 Intelligenz und +0,5 Willenskraft, auf Stufe 20 jeweils +10. Kein Geschickbonus. Die direkte MP-Regeneration bleibt bei +1 je Stufe, auf Stufe 20 +20 MP je zugehörigem Regenerationstick. Kein direkter HP-Regenerationsbonus. Keine Aktivierungskosten, Castzeit oder Cooldown.';
  skill.description_eng='Permanent passive Aurora core skill with 20 levels. Each learned level grants +0.5 Intelligence and +0.5 Wisdom, reaching +10 each at level 20. No Dexterity bonus. Direct Mana regeneration remains +1 per level, reaching +20 per associated regeneration tick. No direct Health regeneration bonus. No activation costs, cast time or cooldown.';
 }else if(nr===2){
  skill.description_de='Permanenter passiver Umbra-Grundskill mit 20 Stufen. Je gelernter Stufe +0,5 Stärke, +0,25 Agilität und +0,25 Geschicklichkeit. Auf Stufe 20: +10 Stärke, +5 Agilität und +5 Geschicklichkeit. Direkte HP- und MP-Regeneration bleiben jeweils bei +0,5 je Stufe, auf Stufe 20 jeweils +10 je zugehörigem Regenerationstick. Diese Boni werden zur Grundregeneration und anderen Boni addiert. Keine Aktivierungskosten, Castzeit oder Cooldown.';
  skill.description_eng='Permanent passive Umbra core skill with 20 levels. Each learned level grants +0.5 Strength, +0.25 Agility and +0.25 Dexterity. At level 20: +10 Strength, +5 Agility and +5 Dexterity. Direct Health and Mana regeneration each remain +0.5 per level, reaching +10 each per associated regeneration tick. Additive with base regeneration and other bonuses. No activation costs, cast time or cooldown.';
 }else{
  skill.description_de='Permanenter passiver Menschen-Grundskill mit 20 Stufen. Je gelernter Stufe +0,5 Vitalität und +0,5 Willenskraft, auf Stufe 20 jeweils +10. Direkte HP- und MP-Regeneration bleiben jeweils bei +0,5 je Stufe, auf Stufe 20 jeweils +10 je zugehörigem Regenerationstick. Diese Boni werden zur Grundregeneration und anderen Boni addiert. Keine Aktivierungskosten, Castzeit oder Cooldown.';
  skill.description_eng='Permanent passive Human core skill with 20 levels. Each learned level grants +0.5 Vitality and +0.5 Wisdom, reaching +10 each at level 20. Direct Health and Mana regeneration each remain +0.5 per level, reaching +10 each per associated regeneration tick. Additive with base regeneration and other bonuses. No activation costs, cast time or cooldown.';
 }
 delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);return {before,skill};
});
for(const {before,skill}of changes){
 await new SkillDataModel(skill).validate();
 for(let level=1;level<=20;level++){
  const r=resolveSkillAtLevel(skill,level),old=resolveSkillAtLevel(before,level);
  for(const key of ['manaRegen','healthRegen','resourceCosts'])assert.deepEqual(r[key],old[key]);
  const attributes=['str','vita','int','wis','agi','dex'].reduce((n,k)=>n+(r[k]??0),0);assert.equal(attributes,level);
  if(skill.nr===1)assert.equal(r.dex,undefined);
 }
 assert.deepEqual(skill.allowedRaces,before.allowedRaces);assert.deepEqual(skill.charClass,before.charClass);
}
if(!process.argv.includes('--apply'))console.log('Preview verified: all three racial core skills grant twenty attribute points at max; regeneration, class assignments and twenty skill levels unchanged.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:[1,2,5]}}).toArray();assert.equal(stored.length,3);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-race-core-twenty-attributes-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(const {skill}of changes){const live=stored.find(s=>s.nr===skill.nr),fields=structuredClone(skill);delete fields._id;const update={$set:fields};if(skill.nr===1)update.$unset={dex:''};const result=await col.updateOne(live,update);assert.equal(result.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);}
 await fs.writeFile('data/balancing/race-core-twenty-attributes-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes:[{nr:1,int:10,wis:10,dex:0,manaRegen:20},{nr:2,str:10,agi:5,dex:5,healthRegen:10,manaRegen:10},{nr:5,vita:10,wis:10,healthRegen:10,manaRegen:10}],maxSkillLevel:20,regenerationUnchanged:true,pointDelta:0},null,2)+'\n');
 console.log('Verified three racial core skill database updates.');
}catch(error){console.error('Racial core update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}

import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {learnableSkillLevel} from '../services/skillLearningLimits.js';

const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=[135,246].map(nr=>{
 const before=catalog.find(s=>s.nr===nr),skill=structuredClone(before);
 if(nr===135){
  skill.maxSkillLv=2;
  for(const alias of ['Abenteuer','Adventure','Adventurer','Scout'])skill.learningLimits.classOverrides[alias]=2;
  skill.companionControlSettings={maximumControlledCreaturesByLevel:[1,2]};
  skill.description_de='Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen.';
  skill.description_eng='Permanent passive creature skill. The learned skill level determines the number of simultaneously controlled creatures: one at level 1, two at level 2. All other classes can learn up to level 1; only the Adventurer and its advancement can learn up to level 2 and control two creatures simultaneously. First unlock at character level 5; the character-level requirement for skill rank 2 remains pending.';
  assert.equal(learnableSkillLevel(skill,'adventurer'),2);
  for(const key of ['butcher','gladiator','knight','luminet','druid','shaman','hunter','summoner','healer','herbalist','ritualist','villian'])assert.equal(learnableSkillLevel(skill,key),1);
 }else{
  assert.equal(before.maxSkillLv,3);skill.maxSkillLv=1;
  for(const key of ['physicalAttackFractionByLevel','physicalDefenseFractionByLevel','magicalDefenseFractionByLevel'])skill.companionBondSettings[key]=[before.companionBondSettings[key].at(-1)];
  skill.description_de='Permanente Passive mit einer einzigen Skillstufe. Bei 100 % Vertrauen erhält das jeweilige Pet zusätzlich 20 % der aktuellen physischen Angriffskraft sowie jeweils 10 % der aktuellen physischen und magischen Verteidigung des Abenteurers. Der Abenteurer behält alle Werte. Die einzige Stufe übernimmt die bisherigen Maximalwerte von Stufe 3 und kostet einen Skillpunkt. Die Verwendung des Angriffsbonus durch magische Pets bleibt offen; keine automatische Umwandlung festgelegt.';
  skill.description_eng='Permanent passive with one learnable level. At 100% trust, the pet additionally gains 20% of the owner’s current physical attack and 10% of each current physical and magical defense. The owner retains all stats. The only level retains the former level-three maximum values and costs one skill point. Magical pet attack mapping remains pending.';
 }
 delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
 return {before,skill};
});
for(const {skill}of changes)await new SkillDataModel(skill).validate();
if(!process.argv.includes('--apply'))console.log('Preview validated: Adventurer Control cap two, others one; Wild Bond one level with former maximum bonuses.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:[135,246]}}).toArray();assert.equal(stored.length,2);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-adventurer-two-creatures-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(const {skill}of changes){const live=stored.find(s=>s.nr===skill.nr),fields=structuredClone(skill);delete fields._id;const r=await col.updateOne(live,{$set:fields});assert.equal(r.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);}
 await fs.writeFile('data/balancing/adventurer-two-creatures-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes:changes.map(c=>({nr:c.skill.nr,previousMax:c.before.maxSkillLv,max:c.skill.maxSkillLv})),pointDelta:-3,rule:'Control: one simultaneous creature per learned level, Adventurer cap two and other classes cap one. Wild Bond: one level retaining former level-three bonuses.'},null,2)+'\n');
 console.log('Verified Control and Wild Bond database changes; Adventurer saves three points.');
}catch(error){console.error('Adventurer update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}

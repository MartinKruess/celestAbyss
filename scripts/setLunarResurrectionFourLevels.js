import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===206);assert.equal(before.maxSkillLv,1);
const skill=structuredClone(before);skill.maxSkillLv=4;skill.health=80;skill.mana=120;
skill.statScaling={...skill.statScaling,health:{type:'table',base:80,values:[80,160,320,640]}};
skill.resurrectionSettings.restoredHealth=80;
skill.resurrectionSettings.restoredHealthScaling={type:'table',base:80,values:[80,160,320,640]};
skill.resourceCosts=[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'linear',base:120,perLevel:60}}];
skill.description_de='Belebt einen verstorbenen Verbündeten wieder. Vier Skillstufen: Das Ziel wird mit 80/160/320/640 HP wiederbelebt; das Wiederbelebungsleben verdoppelt sich je weiterer Stufe. Das vorhandene Mana des Ziels bleibt erhalten; kein zusätzlicher Mana-Wiederherstellungsbonus. Aktivierungskosten für den Heiler: 120 Mana auf Stufe 1, +60 je weiterer Stufe, also 120/180/240/300 Mana. Castzeit 1 Sekunde, Animation ungefähr 1 Sekunde. Einmalige Wiederbelebung ohne anschließende Wirkungsdauer. Cooldown unverändert 100 Sekunden auf allen Stufen.';
skill.description_eng='Resurrects a dead ally. Four skill levels restore the target with 80/160/320/640 HP, doubling per additional level. The target retains its existing Mana; no additional Mana restoration bonus. Healer activation cost is 120 Mana at level 1 plus 60 per additional level: 120/180/240/300 Mana. Cast time 1 second, animation approximately 1 second. One resurrection with no lingering effect duration. Cooldown remains 100 seconds at every level.';
delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
await new SkillDataModel(skill).validate();
for(let level=1;level<=4;level++){const r=resolveSkillAtLevel(skill,level,{classKey:'healer'});assert.equal(r.health,80*2**(level-1));assert.equal(r.resurrectionSettings.restoredHealth,r.health);assert.equal(r.mana,120+60*(level-1));assert.equal(r.cd,100);assert.equal(r.castTimeSeconds,1);assert.equal(r.dur,0);assert.equal(r.resurrectionSettings.preservesTargetMana,true);}
if(!process.argv.includes('--apply'))console.log('Preview verified: four resurrection levels, 80/160/320/640 HP, 120/180/240/300 Mana.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.findOne({nr:206});const normalized=JSON.parse(JSON.stringify(stored));delete normalized.__v;assert.deepEqual(normalized,before);
 const backup='data/balancing/history/before-lunar-four-levels-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(stored,null,2)+'\n');
 const fields=structuredClone(skill);delete fields._id;const result=await col.updateOne(stored,{$set:fields});assert.equal(result.matchedCount,1);
 const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored._id})));delete actual.__v;assert.deepEqual(actual,skill);
 await fs.writeFile('data/balancing/lunar-four-levels-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:206,previousMaxLevel:1,maxSkillLevel:4,restoredHealthByLevel:[80,160,320,640],manaByLevel:[120,180,240,300],pointDelta:3,cooldownSeconds:100,castTimeSeconds:1},null,2)+'\n');
 console.log('Verified Lunar resurrection database update.');
}catch(error){console.error('Lunar update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}

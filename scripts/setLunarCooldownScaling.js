import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===206);assert.equal(before.maxSkillLv,4);
const skill=structuredClone(before);
skill.cooldownScaling={type:'linear',base:100,perLevel:-10};
skill.description_de=skill.description_de.replace('Cooldown unverändert 100 Sekunden auf allen Stufen.','Cooldown 100 Sekunden auf Stufe 1, −10 Sekunden je weiterer Stufe: 100/90/80/70 Sekunden.');
skill.description_eng=skill.description_eng.replace('Cooldown remains 100 seconds at every level.','Cooldown starts at 100 seconds and decreases by 10 seconds per additional level: 100/90/80/70 seconds.');
assert.notEqual(skill.description_de,before.description_de);
delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
await new SkillDataModel(skill).validate();
for(let level=1;level<=4;level++){
 const current=resolveSkillAtLevel(skill,level),old=resolveSkillAtLevel(before,level);
 assert.equal(current.cd,100-10*(level-1));
 for(const key of ['health','mana','castTimeSeconds','resurrectionSettings','resourceCosts'])assert.deepEqual(current[key],old[key]);
}
if(!process.argv.includes('--apply'))console.log('Preview verified: Lunar cooldown 100/90/80/70 seconds; HP, Mana and cast time unchanged.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.findOne({nr:206});const normalized=JSON.parse(JSON.stringify(stored));delete normalized.__v;assert.deepEqual(normalized,before);
 const backup='data/balancing/history/before-lunar-cooldown-scaling-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(stored,null,2)+'\n');
 const fields=Object.fromEntries(['cooldownScaling','description_de','description_eng','levelProgression'].map(key=>[key,skill[key]]));
 const result=await col.updateOne(stored,{$set:fields});assert.equal(result.matchedCount,1);
 const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored._id})));delete actual.__v;assert.deepEqual(actual,skill);
 await fs.writeFile('data/balancing/lunar-cooldown-scaling-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:206,cooldownByLevel:[100,90,80,70],rule:'Ten seconds less cooldown per additional level; all other values preserved.'},null,2)+'\n');
 console.log('Verified Lunar cooldown database update.');
}catch(error){console.error('Lunar cooldown update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}

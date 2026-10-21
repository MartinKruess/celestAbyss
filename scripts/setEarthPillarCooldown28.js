import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
const norm=v=>JSON.parse(JSON.stringify(v));
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:258});assert.equal(before.cooldownScaling.base,38);
 const set={cd:37,cooldownScaling:{type:'linear',base:37,perLevel:-1},description_de:before.description_de.replace('38 bis 29 Sekunden','37 bis 28 Sekunden'),description_eng:before.description_eng.replace('38 seconds minus 1 per additional level to 29','37 seconds minus 1 per additional level to 28')};
 set.levelProgression=buildSkillProgression({...norm(before),...set});const skill={...norm(before),...set};await new SkillDataModel(skill).validate();
 const backup='data/balancing/history/before-earth-pillar-cooldown-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(before,null,2)+'\n');for(const path of ['data/balancing/all-class-timed-damage.json','docs/balancing/all-class-timed-damage.md'])await fs.copyFile(path,backup+'/'+path.split('/').at(-1));
 await col.updateOne({_id:before._id},{$set:set});assert.deepEqual(norm(await col.findOne({_id:before._id})),skill);
 const packagePath='data/balancing/shaman-archdruid-package.json',pkg=JSON.parse(await fs.readFile(packagePath,'utf8'));pkg.changes.find(c=>c.skill.nr===258).skill=skill;pkg.earthPillarCooldownAdjustment={backup,base:37,maximumLearned:28};await fs.writeFile(packagePath,JSON.stringify(pkg,null,2)+'\n');
 await fs.writeFile('data/balancing/earth-pillar-cooldown-decision.json',JSON.stringify({status:'appliedAndVerified',backup,before:norm(before),skill},null,2)+'\n');console.log('Earth Pillar cooldown verified: 37 seconds at level 1 to 28 at level 10. Backup '+backup);
}catch(e){console.error('Earth Pillar cooldown update failed ('+e.name+').');process.exitCode=1;}finally{await mongoose.disconnect();}

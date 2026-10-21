import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:165});
 assert(before);
 const requirements={minimumCharacterLevel:22,status:'defined',furtherSkillLevelsStatus:'pending'};
 const candidate={...before,learningRequirements:requirements};
 await new SkillDataModel(candidate).validate();
 const backup='data/balancing/history/before-aura-unlock-'+Date.now();
 await fs.mkdir(backup,{recursive:true});
 await fs.writeFile(backup+'/skill.json',JSON.stringify(before,null,2)+'\n');
 const result=await col.updateOne(before,{$set:{learningRequirements:requirements}});
 assert.equal(result.matchedCount,1);
 assert.deepEqual(await col.findOne({_id:before._id}),candidate);
 await fs.writeFile('data/balancing/aura-suppression-unlock-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:165,learningRequirements:requirements,scope:'Shared first unlock at character level 22 for Herbalist/Witcher and Luminet/Lightmage; subsequent rank unlock levels remain pending.'},null,2)+'\n');
 console.log('Verified shared Aura Suppression first unlock at character level 22.');
}catch(error){console.error('Aura unlock update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}

import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const collection=SkillDataModel.collection,before=await collection.findOne({nr:13});
 if(before.maxSkillLv!==5||before.charClass.some(c=>!['Gladiator','Berserker'].includes(c)))throw Error('Unexpected definition');
 const set={patk:900,statScaling:{...before.statScaling,patk:{type:'linear',base:900,perLevel:759}},
 description_de:before.description_de.replace(/von 900 auf Stufe 1 um 750 je weiterer Stufe auf 3900 auf Stufe 5|von 463 auf Stufe 1 auf 1299 auf Stufe 5/,'von 900 auf Stufe 1 um 759 je weiterer Stufe auf 3936 auf Stufe 5'),
 description_eng:before.description_eng.replace(/from 900 at level 1 by 750 per additional level to 3900 at level 5|from 463 at level 1 to 1299 at level 5/,'from 900 at level 1 by 759 per additional level to 3936 at level 5')};
 await new SkillDataModel({...before,...set}).validate();
 const dir='data/balancing/history/before-rage-outburst3900-'+new Date().toISOString().replaceAll(':','-');
 await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skill13-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 for(const path of ['data/balancing/all-class-timed-damage.json','data/balancing/all-class-damage-rotations.json'])await fs.copyFile(path,dir+'/'+path.split('/').at(-1));
 await collection.updateOne({nr:13},{$set:set});
 if(!isDeepStrictEqual(await collection.findOne({nr:13}),{...before,...set}))throw Error('Read-back mismatch');
 console.log('Verified Ausbruch der Wut: 900 +759 per level =3936; costs, timing and effects unchanged.');
}catch(error){console.error('Update failed: '+error.name);process.exitCode=1;}finally{await mongoose.disconnect();}

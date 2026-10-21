import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const changes={13:{extra:14},109:{extra:11},127:{extra:11},128:{extra:11,start:100},61:{extra:3},77:{extra:6}};
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:Object.keys(changes).map(Number)}}).toArray();if(before.length!==6)throw Error('Missing skill');
 const plans=before.map(s=>{const old=s.statScaling.patk,ch=changes[s.nr],c={...old,base:old.base+(ch.start??0),perLevel:old.perLevel+ch.extra};const end=old.base+old.perLevel*(s.maxSkillLv-1),next=Math.round((c.base+c.perLevel*(s.maxSkillLv-1))*1e9)/1e9;
 let de=s.description_de,en=s.description_eng;
 if(s.nr===77){de=de.replace('auf 479 auf Stufe 10','auf 533 auf Stufe 10');en=en.replace('to 479 at level 10','to 533 at level 10');}
 else{de=de.replace(`um ${old.perLevel} je weiterer`, `um ${c.perLevel} je weiterer`).replace(`auf ${end} auf`, `auf ${next} auf`);en=en.replace(`by ${old.perLevel} per additional`, `by ${c.perLevel} per additional`).replace(`to ${end} at`, `to ${next} at`);if(ch.start){de=de.replace(`beträgt ${old.base}`,`beträgt ${c.base}`);en=en.replace(`is ${old.base}`,`is ${c.base}`).replace(`of ${old.base}`,`of ${c.base}`).replace(`at ${old.base}`,`at ${c.base}`);}}
 if(de===s.description_de||en===s.description_eng)throw Error('Description mismatch');
 return {s,set:{patk:c.base,statScaling:{...s.statScaling,patk:c},description_de:de,description_eng:en}};});
 for(const p of plans)await new SkillDataModel({...p.s,...p.set}).validate();
 await fs.writeFile('data/balancing/gladiator-attack-growth-oct17-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Verified six attack curves, including +100 Rage Blade base.');
}catch(e){console.error(`Gladiator attack update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}

import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[129,209]}}).toArray();
 if(before.length!==2)throw Error('Missing skills');
 const darkness=before.find(s=>s.nr===209),corruption=before.find(s=>s.nr===129);
 const updates=[{nr:209,set:{resourceCosts:[],effectsVersion:1,effects:[{key:'darkness-soul-damage',type:'damageBonus',target:'self',appliesTo:'allSkills',damageSchool:'soul',value:12,unit:'flat',valueScaling:{type:'linear',base:12,perLevel:12},durationSeconds:0}],description_de:'Permanenter passiver Skill. Erhöht den Schaden von Seelenangriffen um 12 je gelerntem Skilllevel, auf Maximalstufe '+(darkness.maxSkillLv*12)+'. Kein prozentualer Bonus. Keine Aktivierungskosten, Castzeit oder begrenzte Dauer. Der Name ist vorläufig; eine bessere Bezeichnung wird später festgelegt. Einheitliche Seelen-Skillzuordnung und Anwendung auf Mehrfachtreffer beziehungsweise DoTs bleiben für die gemeinsame Gruppenprüfung offen.',description_eng:'Permanent passive. Grants soul attacks +12 flat damage per learned skill level, reaching '+(darkness.maxSkillLv*12)+' at maximum level. Not a percentage bonus. No activation costs, cast time or limited duration. Name is provisional. Unified soul-skill tags and application to multi-hits/DoTs remain pending.'}}, {nr:129,set:{charClass:corruption.charClass.filter(c=>!['Ritualist','Bloodmage'].includes(c))}}];
 const unset209=Object.fromEntries(['vic','int','matk','wis','str','vita','cd','dur'].filter(k=>darkness[k]!==undefined).map(k=>[k,'']));
 for(const u of updates){const candidate={...before.find(s=>s.nr===u.nr),...u.set};if(u.nr===209)for(const k of Object.keys(unset209))delete candidate[k];await new SkillDataModel(candidate).validate();}
 await fs.writeFile('data/balancing/darkness-corruption-before.json',JSON.stringify(before,null,2)+'\n');
 for(const u of updates){await SkillDataModel.collection.updateOne({nr:u.nr},{$set:u.set,...(u.nr===209&&Object.keys(unset209).length?{$unset:unset209}:{})});const after=await SkillDataModel.collection.findOne({nr:u.nr});for(const[k,v]of Object.entries(u.set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Soul attack passive updated; Eternal Corruption removed from Ritualist assignments.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}

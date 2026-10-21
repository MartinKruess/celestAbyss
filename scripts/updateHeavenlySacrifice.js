import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev') throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:207});
 if(!before) throw Error('Missing skill');
 const set={cd:99,castTimeSeconds:1.2,animationDurationSeconds:2,animationTimingStatus:'provisional',resourceCosts:[{resource:'health',reference:'maxHealth',unit:'fraction',scaling:{type:'fixed',base:0.9}},{resource:'mana',reference:'maxMana',unit:'fraction',scaling:{type:'fixed',base:0.1}}],description_de:'Opfert 90 Prozent der maximalen Lebenspunkte, um die anderen Gruppenmitglieder zu heilen. Je mehr Lebenspunkte tatsächlich geopfert werden, desto höher ist die Heilung; Umrechnungsfaktor und Verteilung sind noch festzulegen. Keine garantierte vollständige Heilung. Kostet zusätzlich 10 Prozent des Maximal-Manas; dieses Mana muss zur Aktivierung vorhanden sein. Cooldown 99 Sekunden, Castzeit 1,2 Sekunden, vorläufige Animationsdauer ungefähr 2 Sekunden, keine fortlaufende Heilwirkung festgelegt. Verhalten bei unzureichenden aktuellen Lebenspunkten ist noch zu klären. Einordnung als reiner Heiler-Skill ist vorgemerkt; bisherige Klassenzuordnungen bleiben bis zur Entscheidung erhalten.',description_eng:'Sacrifices 90 percent of maximum health to heal the other group members. Healing increases with the health actually sacrificed; conversion factor and distribution remain to be defined. Does not guarantee a full heal. Also costs 10 percent of maximum Mana, which must be available to activate the skill. Cooldown 99 seconds, cast time 1.2 seconds, provisional animation approximately 2 seconds. No ongoing healing effect defined. Behavior with insufficient current health remains unresolved. A healer-only assignment is under consideration; existing class assignments remain until decided.'};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/heavenly-sacrifice-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:207},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:207});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Heavenly Sacrifice saved and verified. Healing conversion remains pending.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}

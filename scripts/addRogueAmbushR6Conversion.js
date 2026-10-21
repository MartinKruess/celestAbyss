import 'dotenv/config';import fs from 'node:fs/promises';import mongoose from 'mongoose';import {isDeepStrictEqual} from 'node:util';import {ClassTemplateModel} from '../models/classTemplateSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 const path='data/balancing/attribute-model.json',model=JSON.parse(await fs.readFile(path,'utf8')),beforeModel=structuredClone(model);
 model.plannedSpecialAttributeUnlock={...model.plannedSpecialAttributeUnlock,classAttributes:{...model.plannedSpecialAttributeUnlock.classAttributes,villian:'ambush'},classAmountsPerPoint:{...model.plannedSpecialAttributeUnlock.classAmountsPerPoint,villian:1.8},classTargets:{luminet:'magicalAttack',ritualist:'magicalAttack',villian:'physicalAttack'},minimumComparisonRank:4,stacking:'After class-specific unlock: Faith/Victim add magical attack to Intelligence; Rogue Ambush adds physical attack to Strength. R6 comparisons assume unlock. Global pre-unlock base conversions remain unchanged.'};
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const classes=await ClassTemplateModel.find({}).lean();if(classes.length!==13)throw Error('Coverage');
 const updates=classes.map(before=>({before,statConversions:{...before.statConversions,defaults:{...before.statConversions.defaults,plannedSpecialAttributeUnlock:model.plannedSpecialAttributeUnlock}}}));
 for(const u of updates)await new ClassTemplateModel({...u.before,statConversions:u.statConversions}).validate();
 const dir='data/balancing/history/before-rogue-ambush-r6-'+new Date().toISOString().replaceAll(':','-');await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/conversions-before.json',JSON.stringify({model:beforeModel,classes},null,2)+'\n',{flag:'wx'});
 for(const file of ['data/balancing/class-comparison-level60.json','data/balancing/all-class-timed-damage.json','data/balancing/all-class-buffed-timed-damage.json'])await fs.copyFile(file,dir+'/'+file.split('/').at(-1));
 const local=JSON.parse(await fs.readFile('data/class-templates.json','utf8'));
 for(const u of updates){await ClassTemplateModel.updateOne({key:u.before.key},{$set:{statConversions:u.statConversions}},{runValidators:true});const saved=await ClassTemplateModel.findOne({key:u.before.key}).lean();if(!isDeepStrictEqual(saved.statConversions,u.statConversions))throw Error('Read-back mismatch');local.find(c=>c.key===saved.key).statConversions=saved.statConversions;}
 await fs.writeFile(path,JSON.stringify(model,null,2)+'\n');await fs.writeFile('data/class-templates.json',JSON.stringify(local,null,2)+'\n');
 const baselines=JSON.parse(await fs.readFile('data/balancing/class-baselines.json','utf8'));for(const c of baselines.classes)c.statConversions=local.find(x=>x.key===c.key).statConversions;await fs.writeFile('data/balancing/class-baselines.json',JSON.stringify(baselines,null,2)+'\n');
 console.log('Verified all 13 stored class rule sets: Rogue Ambush1.8 to P-attack after unlock; existing Faith/Victim factors unchanged.');
}catch(e){console.error('Ambush conversion update failed: '+e.name);process.exitCode=1;}finally{await mongoose.disconnect();}

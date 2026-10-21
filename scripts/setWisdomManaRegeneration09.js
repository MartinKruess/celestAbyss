import 'dotenv/config';import fs from 'node:fs/promises';import mongoose from 'mongoose';import {isDeepStrictEqual} from 'node:util';import {ClassTemplateModel} from '../models/classTemplateSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 const model=JSON.parse(await fs.readFile('data/balancing/attribute-model.json','utf8')),oldModel=structuredClone(model);
 model.conversions.find(x=>x.attribute==='wisdom'&&x.target==='manaRegen').amountPerPoint=0.9;
 model.regenerationTiming={...model.regenerationTiming,manaTickIntervalSeconds:3,healthTickIntervalStatus:'unchangedPending',simulationHealthTickIntervalSeconds:2};
 model.regenerationUnits='HP or Mana per regeneration tick; Mana tick every 3 seconds; HP interval remains unchanged (simulation: 2 seconds).';
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await ClassTemplateModel.find({}).lean();if(before.length!==13)throw Error('Coverage');
 for(const b of before){const conversions=structuredClone(b.statConversions);conversions.defaults.conversions=model.conversions;conversions.defaults.regenerationTiming=model.regenerationTiming;await new ClassTemplateModel({...b,statConversions:conversions,regeneration:{...b.regeneration,manaTickIntervalSeconds:3}}).validate();}
 await fs.writeFile('data/balancing/mana-regeneration09-every3-before.json',JSON.stringify({model:oldModel,classes:before},null,2)+'\n',{flag:'wx'});
 const local=JSON.parse(await fs.readFile('data/class-templates.json','utf8'));
 for(const b of before){const statConversions=structuredClone(b.statConversions);statConversions.defaults.conversions=model.conversions;statConversions.defaults.regenerationTiming=model.regenerationTiming;
 const regeneration={...b.regeneration,manaTickIntervalSeconds:3};
 await ClassTemplateModel.updateOne({key:b.key},{$set:{statConversions,regeneration}},{runValidators:true});
 const after=await ClassTemplateModel.findOne({key:b.key}).lean();
 if(!isDeepStrictEqual(after.statConversions,statConversions)||!isDeepStrictEqual(after.regeneration,regeneration))throw Error('Read-back mismatch');
 Object.assign(local.find(x=>x.key===b.key),{statConversions:after.statConversions,regeneration:after.regeneration});}
 await fs.writeFile('data/balancing/attribute-model.json',JSON.stringify(model,null,2)+'\n');await fs.writeFile('data/class-templates.json',JSON.stringify(local,null,2)+'\n');
 const baseline=JSON.parse(await fs.readFile('data/balancing/class-baselines.json','utf8'));for(const x of baseline.classes){const c=local.find(y=>y.key===x.key);x.statConversions=c.statConversions;if(x.regeneration)x.regeneration=c.regeneration;}
 await fs.writeFile('data/balancing/class-baselines.json',JSON.stringify(baseline,null,2)+'\n');
 console.log('Verified all 13 classes: Wisdom contributes 0.9 Mana regen/tick; Mana interval 3 seconds; HP timing unchanged.');
}catch(e){console.error('Mana regeneration update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}


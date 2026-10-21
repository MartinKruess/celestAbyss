import 'dotenv/config';import fs from 'node:fs/promises';import mongoose from 'mongoose';import {isDeepStrictEqual} from 'node:util';import {SkillDataModel} from '../models/skillSchema.js';
const settings={9:{base:210,step:34},211:{base:170,step:39},217:{stepDelta:-7},101:{stepDelta:-8},8:{base:134,step:112}};
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const c=SkillDataModel.collection,before=await c.find({nr:{$in:Object.keys(settings).map(Number)}}).toArray();if(before.length!==5)throw Error('Coverage');
 const plans=before.map(b=>{const p=settings[b.nr],resourceCosts=structuredClone(b.resourceCosts),mana=resourceCosts.find(x=>x.resource==='mana');
 if(mana.scaling.type!=='linear')throw Error('Unexpected curve');
 mana.scaling.base=p.base??mana.scaling.base;mana.scaling.perLevel=p.step??mana.scaling.perLevel+p.stepDelta;
 const curve=mana.scaling,max=Number((curve.base+(b.maxSkillLv-1)*curve.perLevel).toFixed(6));
 const de='Mana-Kosten '+curve.base+' auf Stufe 1, steigend auf '+max+' auf Stufe '+b.maxSkillLv+'.',en='Mana cost '+curve.base+' at level 1, increasing to '+max+' at level '+b.maxSkillLv+'.';
 const set={resourceCosts,description_de:b.description_de.replace(/Mana(?:-Kosten)?[^.]*\./,de),description_eng:b.description_eng.replace(/Mana(?: costs?| cost)?[^.]*\./,en)};
 if(typeof b.mana==='number')set.mana=curve.base;if(b.manaCostScaling)set.manaCostScaling=curve;
 return{b,set,max};});
 for(const p of plans)await new SkillDataModel({...p.b,...p.set}).validate();
 await fs.writeFile('data/balancing/luminet-mana-cost-reduction-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 for(const p of plans){await c.updateOne({nr:p.b.nr},{$set:p.set});if(!isDeepStrictEqual(await c.findOne({nr:p.b.nr}),{...p.b,...p.set}))throw Error('Read-back mismatch');}
 console.log(JSON.stringify(plans.map(p=>({name:p.b.skillName_de,min:p.set.resourceCosts.find(x=>x.resource==='mana').scaling.base,max:p.max}))));
}catch(e){console.error('Mana cost update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}

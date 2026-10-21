import 'dotenv/config';import mongoose from 'mongoose';import fs from 'node:fs/promises';import {isDeepStrictEqual} from 'node:util';import {SkillDataModel} from '../models/skillSchema.js';
const proposals={106:[174,60],98:[183,50],11:[65,30],69:[181,55],56:[75,32],57:[101,39],46:[57,24],210:[32,10],76:[83,30],50:[74,32],49:[31,9],232:[18,8],104:[23,5]};
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const c=SkillDataModel.collection,before=await c.find({nr:{$in:Object.keys(proposals).map(Number)}}).toArray();if(before.length!==13)throw Error('Coverage');
 const unchangedEnergy=await c.findOne({nr:36});
 const plans=before.map(b=>{const [base,perLevel]=proposals[b.nr],resourceCosts=structuredClone(b.resourceCosts),mana=resourceCosts.find(x=>x.resource==='mana');
 if(mana?.unit!=='flat'||mana.scaling.type!=='linear')throw Error('Unexpected cost');
 mana.scaling={type:'linear',base,perLevel};const max=base+(b.maxSkillLv-1)*perLevel;
 const de='Mana-Kosten '+base+' auf Stufe 1, plus '+perLevel+' je weiterer Stufe, auf Stufe '+b.maxSkillLv+' insgesamt '+max+'.';
 const en='Mana cost '+base+' at level 1, plus '+perLevel+' per additional level, reaching '+max+' at level '+b.maxSkillLv+'.';
 const dePattern=/Mana(?:-Kosten|kosten)?[^.]*\./,enPattern=/[Mm]ana(?: costs?| cost)?[^.]*\./;
 if(!dePattern.test(b.description_de)||!enPattern.test(b.description_eng))throw Error('Missing cost description');
 const set={resourceCosts,description_de:b.description_de.replace(dePattern,de),description_eng:b.description_eng.replace(enPattern,en)};
 if(typeof b.mana==='number')set.mana=base;if(b.manaCostScaling)set.manaCostScaling=mana.scaling;
 if(b.nr===104){set.description_de=set.description_de.replace('1155 Mana','1020 Mana');set.description_eng=set.description_eng.replace(/1,155 Mana|1155 Mana/g,'1020 Mana');}
 return{b,set,base,perLevel,max};});
 for(const p of plans)await new SkillDataModel({...p.b,...p.set}).validate();
 await fs.writeFile('data/balancing/mana-cost-saving-proposals-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 for(const p of plans){await c.updateOne({nr:p.b.nr},{$set:p.set});if(!isDeepStrictEqual(await c.findOne({nr:p.b.nr}),{...p.b,...p.set}))throw Error('Read-back mismatch');}
 if(!isDeepStrictEqual(await c.findOne({nr:36}),unchangedEnergy))throw Error('Energy Strike changed');
 console.log(JSON.stringify(plans.map(({b,base,perLevel,max})=>({nr:b.nr,name:b.skillName_de,base,perLevel,max}))));
}catch(e){console.error('Mana proposal update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}

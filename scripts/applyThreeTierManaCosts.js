import 'dotenv/config';import fs from 'node:fs/promises';import mongoose from 'mongoose';import {createHash} from 'node:crypto';import {isDeepStrictEqual} from 'node:util';import {SkillDataModel} from '../models/skillSchema.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 const source=await fs.readFile('data/skills.json','utf8'),catalog=JSON.parse(source),proposal=await read('data/balancing/three-tier-mana-proposal.json');
 if(createHash('sha256').update(source).digest('hex')!==proposal.sourceCatalogSHA256)throw Error('Proposal source changed');
 const curves=new Map(proposal.rows.filter(r=>r.proposedManaCurve&&r.nr!==58).map(r=>[r.nr,{curve:r.proposedManaCurve,group:r.group,factor:r.factor}]));
 const comboCurves={103:{type:'linear',base:39,perLevel:4},104:{type:'table',values:[19,24,30,35,40,46,51,56,62,67]},105:{type:'linear',base:152,perLevel:64},186:{type:'table',values:[2,7,12,17,22,28,33,38,43,48]},229:{type:'fixed',base:439}};
 for(const[nr,curve]of Object.entries(comboCurves))curves.set(Number(nr),{curve,group:'combo',factor:.4});
 if(95+15*67+408!==1508||25*48+439!==1639)throw Error('Combo budgets');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const c=SkillDataModel.collection,before=await c.find({nr:{$in:[...curves.keys()]}}).toArray();if(before.length!==curves.size)throw Error('Coverage');
 for(const b of before){const local=catalog.find(s=>s.nr===b.nr),copy=JSON.parse(JSON.stringify(b));delete copy.__v;if(!isDeepStrictEqual(local,copy))throw Error('Database source changed');}
 const dir='data/balancing/history/before-three-tier-mana-'+new Date().toISOString().replaceAll(':','-');await fs.mkdir(dir,{recursive:true});
 for(const path of ['data/skills.json','data/balancing/all-class-timed-damage.json','docs/balancing/all-class-timed-damage.md','data/balancing/all-class-damage-rotations.json','docs/balancing/all-class-damage-rotations.md'])await fs.copyFile(path,dir+'/'+path.split('/').at(-1));
 await fs.writeFile(dir+'/database-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 const plans=before.map(b=>{const {curve,group,factor}=curves.get(b.nr),resourceCosts=structuredClone(b.resourceCosts),mana=resourceCosts.find(x=>x.resource==='mana');if(mana.unit!=='flat')throw Error('Nonflat costs');if(curve.type==='table'&&curve.base===undefined)curve.base=curve.values[0];mana.scaling=curve;
  const values=Array.from({length:b.maxSkillLv},(_,i)=>curve.type==='table'?curve.values[i]:curve.base+(curve.type==='fixed'?0:i*curve.perLevel));if(values.some(x=>!Number.isInteger(x)||x<0))throw Error('Noninteger costs');
  const formula=curve.type==='linear'?`+${curve.perLevel} je weiterer Stufe`:curve.type==='fixed'?'konstant':`Stufenwerte ${values.join(', ')}`;
  const sentence=`Mana-Kosten ${values[0]} auf Stufe 1, ${formula}, maximal ${values.at(-1)} auf Stufe ${b.maxSkillLv}.`;
  let de=b.description_de,en=b.description_eng;
  if([186,229].includes(b.nr)){
   de=de.replace(/Kostet kein Mana\./,'').replace('Die Anwendung kostet kein Mana und hat eine Castzeit von 0,3 Sekunden.','Die Castzeit beträgt 0,3 Sekunden.');
   en=en.replace(/Costs no Mana\./i,'').replace(/The application costs no Mana and has a cast time of 0\.3 seconds\./i,'Cast time is 0.3 seconds.');
  }else{
   de=de.replace(/Mana(?:-Kosten|kosten)?[^.]*\./,sentence);
   en=en.replace(/[Mm]ana(?: costs?| cost)?[^.]*\./,`Mana cost ${values[0]} at level 1, maximum ${values.at(-1)} at level ${b.maxSkillLv}.`);
  }
  if([186,229].includes(b.nr)){de+=' '+sentence;en+=` Mana cost ${values[0]} at level 1, maximum ${values.at(-1)} at level ${b.maxSkillLv}.`;}
  if(b.nr===104){de=de.replace(/15 Anwendungen kosten auf Stufe 10 \d+ Mana\./,'15 Anwendungen kosten auf Stufe 10 1005 Mana.');en=en.replace(/15 applications cost[^.]*\./,'15 applications cost 1005 Mana at level 10.');}
  de+=' Aktuelle Mana-Gruppe: '+group+' ('+Math.round(factor*100)+' % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).';
  const set={resourceCosts,description_de:de,description_eng:en,manaPricing:{category:group,factor,basis:group==='combo'?'sharedComboBudget':group==='heal'?'healingPerRecipient':'skillBaseDamagePerTarget',usesCharacterAttack:false,version:1}};
  if(typeof b.mana==='number')set.mana=values[0];if(b.manaCostScaling)set.manaCostScaling=curve;
  return{b,set,values};});
 for(const p of plans)await new SkillDataModel({...p.b,...p.set}).validate();
 for(const p of plans){await c.updateOne({nr:p.b.nr},{$set:p.set});if(!isDeepStrictEqual(await c.findOne({nr:p.b.nr}),{...p.b,...p.set}))throw Error('Read-back mismatch');}
 const application={status:'applied',sourceCatalogSHA256:proposal.sourceCatalogSHA256,sourceCatalogSnapshot:dir+'/skills.json',historyDirectory:dir,appliedSkills:plans.map(p=>({nr:p.b.nr,name:p.b.skillName_de,group:p.set.manaPricing.category,values:p.values})),preservedExceptions:proposal.rows.filter(r=>!curves.has(r.nr)).map(r=>({nr:r.nr,name:r.name,reason:r.nr===58?'Percent target-HP reference unresolved; preserve whole skill':r.status})),comboAllocation:{ritualist:{shackle95:95,torment67:67,harvest408:408,total1508:1508},summoner:{mark0:0,collector48:48,finisher439:439,total1639:1639}},damageChanged:false};
 await fs.writeFile('data/balancing/three-tier-mana-application.json',JSON.stringify(application,null,2)+'\n');
 console.log(JSON.stringify({applied:plans.length,sourceCatalogSnapshot:application.sourceCatalogSnapshot,comboBudgets:[1508,1639],damageChanged:false,preservedExceptions:application.preservedExceptions.map(x=>x.nr)}));
}catch(e){console.error('Three-tier Mana application failed ('+e.name+'); credentials omitted.');if(e.name==='ValidationError')console.error(JSON.stringify(Object.values(e.errors).map(x=>({path:x.path,message:x.message}))));process.exitCode=1;}finally{await mongoose.disconnect();}

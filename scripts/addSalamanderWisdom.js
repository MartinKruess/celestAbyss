import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection;
 if(process.argv.includes('--normalize-keys')){
  const existing=await col.findOne({skillName_eng:'Wisdom of the Salamander'});assert.ok(existing);
  const effects=existing.effects.map(e=>({...e,key:`salamander-${e.type}-${e.targetSkillNumber}-${e.damageTypes?.join('-')||e.resource||'all'}`}));
  await col.updateOne({_id:existing._id},{$set:{effects}});
  const decisionPath='data/balancing/salamander-wisdom-decision.json',decision=JSON.parse(await fs.readFile(decisionPath,'utf8'));decision.skill.effects=effects;await fs.writeFile(decisionPath,JSON.stringify(decision,null,2)+'\n');
  console.log('Verified unique Salamander effect keys.');
 }else{
 assert.equal(await col.countDocuments({skillName_eng:'Wisdom of the Salamander'}),0);
 const nr=(await col.find({}).sort({nr:-1}).limit(1).next()).nr+1;
 const physical=[15,38,76,87,106],fire=[50,62,76,202];
 const effect=(targetSkillNumber,type,value,extra={})=>({key:`salamander-${type}-${targetSkillNumber}`,type,target:'self',appliesTo:'specificSkill',targetSkillNumber,value,unit:'fraction',durationSeconds:0,valueScaling:{type:'linear',base:value,perLevel:value},...extra});
 const effects=[...physical.map(n=>effect(n,'damageBonus',0.003,{damageTypes:['physical']})),...fire.flatMap(n=>[effect(n,'damageBonus',0.003,{damageTypes:['magical']}),effect(n,'resourceCostReduction',0.005,{resource:'mana'})])];
 const skill={_id:new mongoose.Types.ObjectId(),nr,skillName_de:'Weisheit des Salamanders',skillName_eng:'Wisdom of the Salamander',category:'passive',dmgType:'passive',charClass:['Shamane','High Elves'],maxSkillLv:5,maxUpgradeLv:10,currentSkillLv:0,currentUpgradeLv:0,skillpoints:1,resourceCosts:[],effectsVersion:1,effects,
 description_de:'Verbessert deinen Umgang mit körperlichen Angriffen und Feuer. Je Skillstufe steigt der physische Schaden von Beben, Erdbeben, Infernalem Kreuzschlag, Rotierschlag und Sprungschlag um 0,3 Prozent. Der magische Feuerschaden von Feuerlanze, Infernal Zyklon, Infernalem Kreuzschlag und Verbrennen steigt ebenfalls um 0,3 Prozent je Stufe; deren Mana-Kosten sinken um 0,5 Prozent je Stufe. Auf Stufe 5: +1,5 Prozent auf die jeweilige Schadenskomponente und −2,5 Prozent Mana-Kosten der vier Feuerangriffe. Schadensboni umfassen den passenden Charakterangriff. Beim Kreuzschlag werden die beiden Schadenskomponenten jeweils um 1,5 Prozent erhöht, nicht der Gesamtschaden zweimal. Vorhandene Feuer-DoTs profitieren ebenfalls; keine zusätzliche Brandchance oder neuen DoTs. Keine Wirkung auf Auto-Attacks, Cooldowns, Castzeiten oder den magischen Erdschaden von Erdbeben. Permanenter passiver Skill ohne Aktivierungskosten.',
 description_eng:'Improves physical attacks and fire magic. Each level adds 0.3 percent physical damage to Tremor, Earthquake, Infernal Cross Strike, Rotating Strike and Jump Strike. Each level adds 0.3 percent magical fire damage and reduces Mana costs by 0.5 percent for Fire Lance, Infernal Cyclone, Infernal Cross Strike and Burn. At level 5: +1.5 percent to each eligible damage component and -2.5 percent Mana cost for the four fire attacks. Includes the matching character attack. Cross Strike components are each increased once, without applying the bonus twice to the combined total. Existing fire damage over time benefits; no new burning proc or DoT. No effect on basic attacks, cooldowns, cast times or Earthquake magical earth damage. Permanent passive without activation costs.'};
 await new SkillDataModel(skill).validate();
 const dir='data/balancing/history/before-salamander-wisdom-'+Date.now();await fs.mkdir(dir,{recursive:true});
 const path='data/reports/class-skill-counts.json',report=JSON.parse(await fs.readFile(path,'utf8'));await fs.copyFile(path,dir+'/class-skill-counts.json');
 const row=report.counts.find(c=>c.name==='Schamane / Hochelfe');assert.equal(row.total,26);
 await col.insertOne(skill);assert.deepEqual(await col.findOne({nr}),skill);
 row.skillNumbers.push(nr);row.skillNumbers.sort((a,b)=>a-b);row.total++;row.passive++;report.catalogCount=await col.countDocuments({});
 report.classified.push({nr,id:String(skill._id),name:skill.skillName_de,classes:skill.charClass,category:'passive',activeDefensive:false});await fs.writeFile(path,JSON.stringify(report,null,2)+'\n');
 const prePath='data/balancing/shaman-precombat.json',pre=JSON.parse(await fs.readFile(prePath,'utf8'));await fs.copyFile(prePath,dir+'/shaman-precombat.json');for(const variant of pre.variants)variant.includedSkills.push(nr);await fs.writeFile(prePath,JSON.stringify(pre,null,2)+'\n');
 await fs.writeFile('data/balancing/salamander-wisdom-decision.json',JSON.stringify({status:'appliedAndVerified',backup:dir,skill,plannedFireSkill:'Add to explicit eligibility after its definition is agreed'},null,2)+'\n');
 console.log('Verified Wisdom of the Salamander: five levels, max1.5% physical/fire component bonus and2.5% fire Mana saving; Shaman27 skills.');
 }
}catch(error){console.error('Salamander passive update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}

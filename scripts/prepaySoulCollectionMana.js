import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {curveValue} from '../services/skillProgression.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.find({nr:{$in:[185,186,229]}}).toArray();assert.equal(before.length,3);
 const originalCollector=before.find(s=>s.nr===186),originalOpener=before.find(s=>s.nr===185);
 assert.equal(curveValue(originalCollector.resourceCosts.find(c=>c.resource==='mana').scaling,10),48);
 assert.equal(curveValue(originalOpener.resourceCosts.find(c=>c.resource==='mana').scaling,10),0);
 const source=structuredClone(originalCollector.resourceCosts.find(c=>c.resource==='mana').scaling),values=Array.from({length:10},(_,i)=>20*resolveSkillAtLevel(originalCollector,i+1).mana);
 assert.equal(values.at(-1),960);
 const changes=before.filter(s=>s.nr!==229).map(original=>{
  const skill=structuredClone({...original,_id:undefined});delete skill._id;delete skill.levelProgression;
  const opener=skill.nr===185;
  skill.resourceCosts.find(c=>c.resource==='mana').scaling=opener?{type:'table',base:values[0],values}:{type:'fixed',base:0};skill.mana=opener?values[0]:0;
  skill.manaPricing={category:'combo',factor:.4,basis:'sharedComboBudget',usesCharacterAttack:false,version:2};
  if(opener){
   skill.prepaidComboBudget={sourceSkillNumber:186,paidApplications:20,maxApplications:25,perApplicationManaScaling:source,finisherSkillNumber:229,finisherPaidSeparately:true};
   skill.description_de='Markiert einen Gegner für 5 Sekunden und eröffnet das Seelensammler-Fenster. Verursacht selbst keinen Schaden. Castzeit 0 Sekunden, vorläufige Animation 0,1 Sekunden. Bezahlt die Sammlung im Voraus: Kosten von 20 Seelensammler-Anwendungen auf der jeweiligen Stufe, Mana je Stufe '+values.join('/')+'. Während der Markierung ist Seelensammler kostenlos; maximal 25 vollständige Anwendungen sind möglich. Nicht genutzte Anwendungen werden nicht erstattet. Spektralketten bleibt ein separat bezahlter Abschluss und kann gegen dasselbe Ziel bis 1,5 Sekunden nach Markierungsende eingesetzt werden. Cooldown gleichmäßig von 90 Sekunden auf Stufe 1 bis 75 Sekunden auf Stufe 10.';
   skill.description_eng='Marks an enemy for 5 seconds and opens the Soul Collector window. Deals no damage itself. Cast time 0 seconds; provisional animation 0.1 seconds. Prepays collection at the price of 20 Soul Collector applications at the corresponding level. Mana costs by level: '+values.join('/')+'. Soul Collector is free during the mark, allowing at most 25 completed applications. Unused applications are not refunded. Spectral Chains remains a separately paid finisher usable against the same target for up to 1.5 seconds after mark expiry. Cooldown decreases evenly from 90 seconds at level 1 to 75 seconds at level 10.';
  }else{
   skill.description_de=skill.description_de.replace(/Mana-Kosten 2 auf Stufe 1,[\s\S]*$/,'Seelensammler selbst kostet kein Mana: Seelenschuss bezahlt bereits ein gemeinsames Budget für 20 Anwendungen auf der jeweiligen Stufe. Im fünfsekündigen Fenster sind weiterhin bis zu 25 Anwendungen möglich. Spektralketten wird separat bezahlt.');
   skill.description_eng=skill.description_eng.replace(/Mana cost 2 at level 1,[\s\S]*$/,'Soul Collector itself costs no Mana: Soulshot prepays a shared budget for 20 applications at the corresponding level. The five-second window still allows up to 25 applications. Spectral Chains is paid separately.');
  }
  skill.levelProgression=buildSkillProgression(skill);
  for(let level=1;level<=10;level++)assert.equal(resolveSkillAtLevel(skill,level).mana,opener?values[level-1]:0);
  return{before:original,skill};
 });
 for(const {skill}of changes)await new SkillDataModel(skill).validate();
 const backup='data/balancing/history/before-soul-collection-prepayment-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(before,null,2)+'\n');
 for(const {before:original,skill}of changes){await col.updateOne({_id:original._id},{$set:skill});const actual=await col.findOne({_id:original._id});delete actual._id;const expected={...original,...skill};delete expected._id;assert.deepEqual(actual,expected);}
 assert.deepEqual(await col.findOne({nr:229}),before.find(s=>s.nr===229));
 await fs.writeFile('data/balancing/soul-collection-prepaid-mana-decision.json',JSON.stringify({status:'appliedAndVerified',backup,changes,scope:'Opener prepays 20 collector actions at the corresponding level. Collector free, maximum 25 actions. Spectral Chains unchanged and paid separately. Runtime already prioritizes the open collection sequence independently of direct-damage rankings.'},null,2)+'\n');
 console.log('Verified Soulshot prepaid Mana '+values.join('/')+'; Soul Collector free; Spectral Chains unchanged.');
}catch(e){console.error('Prepayment update failed ('+e.name+'); credentials omitted.');if(['AssertionError','ValidationError'].includes(e.name))console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}

import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,b=await col.findOne({nr:220}),template=await col.findOne({nr:253});assert(b&&template);
 const ban=structuredClone(b);delete ban._id;const e=ban.effects.find(e=>e.controlKind==='spellSuppression');e.interruptsCurrentCast=true;e.requiresSuccessfulHit=true;
 ban.description_de=ban.description_de.replace('Verhalten bei bereits laufenden Casts wird noch geklärt.','Ein erfolgreicher Treffer bricht einen bereits laufenden Zauber des Ziels sofort ab.');
 ban.description_eng+=' A successful hit immediately interrupts any spell the target is currently casting.';
 const rose=structuredClone(template);delete rose._id;delete rose.levelProgression;rose.nr=261;rose.skillName_de='Dornige Rose';rose.skillName_eng='Thorned Rose';rose.maxSkillLv=5;
 rose.effects=[{key:'thorned-rose-ice-thorns',type:'damageBonus',target:'self',appliesTo:'specificSkill',targetSkillNumber:30,value:37,unit:'flat',durationSeconds:0,valueScaling:{type:'linear',base:37,perLevel:37},replacementSkillName_de:'Dornige Eisranken',replacementSkillName_eng:'Thorned Ice Vines'}];
 rose.description_de='Permanente passive Spezialisierung mit 5 Stufen, nur für Druide und seine Weiterentwicklung. Mit gelernter Dornige Rose wird Eisranken als Dornige Eisranken angezeigt. Jede Stufe erhöht den einmaligen Initialschaden dieses Angriffs um 37, bis zu +185 auf Stufe 5. Die Mana-Kosten des aktiven Skills bleiben unverändert; Fesselwirkung, DoT, Castzeit und Cooldown bleiben ebenfalls unverändert. Kein zusätzlicher Charakterangriffsbeitrag. Die Passive selbst hat keine Aktivierungskosten, Castzeit oder Cooldown.';
 rose.description_eng='Permanent five-level passive specialization for the Druid and its advancement. Learning Thorned Rose changes the displayed name of Ice Thorns to Thorned Ice Vines. Each level adds 37 damage to the initial hit, up to 185 at level 5. The active skill retains its Mana cost, root, damage-over-time ticks, cast time and cooldown. No additional character attack contribution. The passive has no activation cost, cast time or cooldown.';
 rose.levelProgression=buildSkillProgression(rose);await new SkillDataModel(rose).validate();await new SkillDataModel(ban).validate();
 const existing=await col.findOne({nr:261});if(existing)assert.equal(existing.skillName_de,rose.skillName_de);
 const backup='data/balancing/history/before-thorned-rose-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify([b,...(existing?[existing]:[])],null,2)+'\n');
 await col.updateOne({_id:b._id},{$set:{effects:ban.effects,description_de:ban.description_de,description_eng:ban.description_eng}});await col.updateOne({nr:261},{$set:rose},{upsert:true});
 const actual=await col.findOne({nr:261});delete actual._id;assert.deepEqual(actual,rose);const actualBan=await col.findOne({_id:b._id});delete actualBan._id;assert.deepEqual(actualBan,ban);
 await fs.writeFile('data/balancing/thorned-rose-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,rose,banEffect:e,himmelsbrecher:'unchanged at ten levels'},null,2)+'\n');console.log('Verified Thorned Rose and Magic Ban cast interruption.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');if(['AssertionError','ValidationError'].includes(e.name))console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}

import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=[12,172].map(nr=>{const before=catalog.find(s=>s.nr===nr);assert.deepEqual(before.charClass,['Butcher','Destroyer']);return {before,after:structuredClone(before)};});
const charge=changes[0].after;
charge.patk=80;charge.statScaling.patk={type:'linear',base:80,perLevel:0};charge.levelProgression.rules.find(r=>r.path.join('.')==='statScaling.patk').rule={kind:'linear',base:80,perLevel:0};
charge.description_de=charge.description_de.replace('+200 P-Angriff','+80 P-Angriff');charge.description_eng=charge.description_eng.replace('200 physical attack','80 physical attack');
const instinct=changes[1].after;
delete instinct.str;delete instinct.statScaling.str;delete instinct.statBonusTargets?.str;delete instinct.statBonusUnits?.str;instinct.levelProgression.rules=instinct.levelProgression.rules.filter(r=>r.path.join('.')!=='statScaling.str');
instinct.description_de=instinct.description_de.replace('Stärke steigt gleichmäßig von +4 auf Stufe 1 bis +10 auf Stufe 10. Zusätzlich +5 P-Angriff je Skillstufe, maximal +50.','Gewährt +5 P-Angriff je Skillstufe, maximal +50. Kein Stärkebonus.');
instinct.description_eng=instinct.description_eng.replace('Strength increases evenly from 4 at level 1 to 10 at level 10. Additionally grants 5 physical attack per level, up to 50.','Grants 5 physical attack per level, up to 50. No Strength bonus.');
for(const {before,after}of changes){await new SkillDataModel(after).validate();for(let level=1;level<=after.maxSkillLv;level++){const a=resolveSkillAtLevel(after,level),b=resolveSkillAtLevel(before,level);assert.equal(a.str,undefined);assert.equal(a.patk,after.nr===12?80:5*level);for(const k of ['mana','resourceCosts','health','dur','cd','castTimeSeconds','skillpoints','maxSkillLv'])assert.deepEqual(a[k],b[k]);}}
if(!process.argv.includes('--apply'))console.log('Validated Charge +80 physical attack and Combat Instinct without Strength at all ranks; dry run only.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=[];for(const {before}of changes){const live=await col.findOne({nr:before.nr}),normalized=JSON.parse(JSON.stringify(live));delete normalized.__v;assert.deepEqual(normalized,before);stored.push(live);}
 const backup='data/balancing/history/before-butcher-charge-instinct-reduction-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(let i=0;i<changes.length;i++){const fields=structuredClone(changes[i].after);delete fields._id;assert.equal((await col.updateOne(stored[i],{$set:fields,$unset:{str:''}})).matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored[i]._id})));delete actual.__v;assert.deepEqual(actual,changes[i].after);}
 await fs.writeFile('data/balancing/butcher-charge-instinct-reduction-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes},null,2)+'\n');console.log('Both Butcher reductions saved and verified.');
}catch(error){console.error('Butcher reduction failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}

import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=[172,173,174].map(nr=>{const before=catalog.find(s=>s.nr===nr);assert.deepEqual(before.charClass,['Butcher','Destroyer']);return {before,after:structuredClone(before)};});
for(const {before,after:s}of changes){
 const maximum=s.nr===173?20:40,perLevel=maximum/10;
 delete s.str;delete s.statScaling.str;delete s.statBonusTargets?.str;delete s.statBonusUnits?.str;
 s.levelProgression.rules=s.levelProgression.rules.filter(r=>!['statScaling.str','statScaling.patk'].includes(r.path.join('.')));
 s.patk=perLevel;s.statScaling.patk={type:'linear',base:perLevel,perLevel};s.statBonusTargets={...s.statBonusTargets,patk:'self'};s.statBonusUnits={...s.statBonusUnits,patk:'flat'};
 s.levelProgression.rules.push({path:['statScaling','patk'],rule:{kind:'linear',base:perLevel,perLevel},source:'storedFormula'});
 if(s.nr===173){
 s.description_de='Aktiver Eigenbuff des Butchers mit zehn Stufen. Gewährt je Stufe +2 P-Angriff und +2 Vitalität, maximal jeweils +20. Kein Stärkebonus. Dauer 300 Sekunden, Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50 auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten.';
 s.description_eng='Butcher active self buff with ten levels. Grants 2 physical attack and 2 Vitality per level, up to 20 each. No Strength bonus. Duration 300 seconds, cooldown 60 seconds, fixed 0.1-second cast unaffected by speed. Mana starts at 50 plus 13 per additional level, up to 167 before discounts.';
 }else{
 s.description_de=s.description_de.replace('+5 P-Angriff je Skillstufe, maximal +50','+4 P-Angriff je Skillstufe, maximal +40');
 s.description_eng=s.description_eng.replace('5 physical attack per level, up to 50','4 physical attack per level, up to 40');
 }
 await new SkillDataModel(s).validate();
 for(let level=1;level<=10;level++){const a=resolveSkillAtLevel(s,level),b=resolveSkillAtLevel(before,level);assert.equal(a.str,undefined);assert.equal(a.patk,perLevel*level);for(const k of ['vita','atkSpeed','mana','resourceCosts','dur','cd','castTimeSeconds','maxSkillLv','skillpoints'])assert.deepEqual(a[k],b[k]);}
}
if(!process.argv.includes('--apply'))console.log('Validated three exclusive Butcher buffs at all ten levels; dry run only.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=[];for(const {before}of changes){const live=await col.findOne({nr:before.nr}),normalized=JSON.parse(JSON.stringify(live));delete normalized.__v;assert.deepEqual(normalized,before);stored.push(live);}
 const backup='data/balancing/history/before-butcher-three-buff-reduction-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(let i=0;i<changes.length;i++){const fields=structuredClone(changes[i].after);delete fields._id;assert.equal((await col.updateOne(stored[i],{$set:fields,$unset:{str:''}})).matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored[i]._id})));delete actual.__v;assert.deepEqual(actual,changes[i].after);}
 await fs.writeFile('data/balancing/butcher-three-buff-reduction-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes},null,2)+'\n');console.log('Three Butcher reductions saved and verified.');
}catch(error){console.error('Butcher reduction failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}


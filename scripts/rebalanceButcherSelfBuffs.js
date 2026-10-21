import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const assignments=JSON.parse(await fs.readFile('data/reports/class-skill-counts.json','utf8')).counts;
const changes=[12,172,174].map(nr=>{const before=catalog.find(s=>s.nr===nr);assert.deepEqual([...before.charClass].sort(),['Butcher','Destroyer']);assert.deepEqual(assignments.filter(c=>c.skillNumbers.includes(nr)).map(c=>c.name),['Butcher / Destroyer']);return {before,after:structuredClone(before)};});
for(const {after:s}of changes){
 if(s.nr!==172){delete s.str;delete s.statScaling.str;delete s.statBonusTargets?.str;delete s.statBonusUnits?.str;s.levelProgression.rules=s.levelProgression.rules.filter(r=>r.path.join('.')!=='statScaling.str');}
 if(s.nr!==12){s.patk=5;s.statScaling.patk={type:'linear',base:5,perLevel:5};s.statBonusTargets={...s.statBonusTargets,patk:'self'};s.statBonusUnits={...s.statBonusUnits,patk:'flat'};s.levelProgression.rules.push({path:['statScaling','patk'],rule:{kind:'linear',base:5,perLevel:5},source:'storedFormula'});}
 if(s.nr===12){s.description_de='Aktiver Eigenbuff mit einer einzigen lernbaren Stufe. Gewährt für 15 Sekunden +240 maximale Lebenspunkte und +200 P-Angriff. Kein Stärkebonus. Der Lebensbonus ist keine direkte Heilung. Cooldown 122 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Aktivierung kostet 102 Mana vor Rabatten. Eine gelernte Stufe kostet einen Skillpunkt.';s.description_eng='Active self buff with one learnable level. Grants 240 maximum Health and 200 physical attack for 15 seconds. No Strength bonus; maximum Health is not direct healing. Cooldown 122 seconds; fixed 0.1-second cast unaffected by speed. Costs 102 Mana before discounts. One skill point for the single learned level.';}
 if(s.nr===172){s.description_de='Aktiver Eigenbuff mit zehn Stufen für 600 Sekunden. Stärke steigt gleichmäßig von +4 auf Stufe 1 bis +10 auf Stufe 10. Zusätzlich +5 P-Angriff je Skillstufe, maximal +50. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50 auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten.';s.description_eng='Active self buff with ten levels for 600 seconds. Strength increases evenly from 4 at level 1 to 10 at level 10. Additionally grants 5 physical attack per level, up to 50. Cooldown 60 seconds; fixed 0.1-second cast unaffected by speed. Mana starts at 50 plus 13 per additional level, up to 167 before discounts.';}
 if(s.nr===174){s.description_de='Aktiver Eigenbuff mit zehn Stufen für 60 Sekunden. Gewährt +5 P-Angriff je Skillstufe, maximal +50, statt des bisherigen Stärkebonus. Angriffsgeschwindigkeit steigt gleichmäßig von +5 auf +10 Rohpunkte über die bestehende Tempokurve. Cooldown 300 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50 auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten.';s.description_eng='Active self buff with ten levels for 60 seconds. Grants 5 physical attack per level, up to 50, replacing the former Strength bonus. Attack speed increases evenly from 5 to 10 raw rating points through the existing speed curve. Cooldown 300 seconds; fixed 0.1-second cast unaffected by speed. Mana starts at 50 plus 13 per additional level, up to 167 before discounts.';}
 await new SkillDataModel(s).validate();
}
for(const {before,after}of changes)for(let level=1;level<=after.maxSkillLv;level++){
 const a=resolveSkillAtLevel(after,level),b=resolveSkillAtLevel(before,level);
 for(const k of ['mana','cd','dur','castTimeSeconds','maxSkillLv','skillpoints','resourceCosts','health','atkSpeed'])assert.deepEqual(a[k],b[k]);
 if(after.nr===12){assert.equal(a.str,undefined);assert.equal(a.patk,200);}else{assert.equal(a.patk,5*level);if(after.nr===174)assert.equal(a.str,undefined);else assert.equal(a.str,b.str);}
}
if(!process.argv.includes('--apply'))console.log('Validated exclusive Butcher assignments and all rank values; dry run only.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=[];for(const {before}of changes){const live=await col.findOne({nr:before.nr}),normalized=JSON.parse(JSON.stringify(live));delete normalized.__v;assert.deepEqual(normalized,before);stored.push(live);}
 const backup='data/balancing/history/before-butcher-self-buffs-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(let i=0;i<changes.length;i++){const fields=structuredClone(changes[i].after);delete fields._id;assert.equal((await col.updateOne(stored[i],{$set:fields,$unset:changes[i].after.nr===172?{}:{str:''}})).matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored[i]._id})));delete actual.__v;assert.deepEqual(actual,changes[i].after);}
 await fs.writeFile('data/balancing/butcher-self-buff-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes},null,2)+'\n');console.log('Three exclusive Butcher self buffs saved and verified.');
}catch(error){console.error('Butcher update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}

import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {curveValue} from '../services/skillProgression.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=[172,174].map(nr=>{const before=catalog.find(s=>s.nr===nr);assert.deepEqual(before.charClass,['Butcher','Destroyer']);return {before,after:structuredClone(before)};});
const instinct=changes[0].after;
delete instinct.patk;delete instinct.statScaling.patk;delete instinct.statBonusTargets?.patk;delete instinct.statBonusUnits?.patk;
instinct.levelProgression.rules=instinct.levelProgression.rules.filter(r=>r.path.join('.')!=='statScaling.patk');
instinct.effects=[...(instinct.effects??[]),{key:'combat-instinct-physical-skill-damage',type:'damageBonus',target:'self',appliesTo:'allSkills',unit:'flat',damageTypes:['physical'],value:8,valueScaling:{type:'linear',base:8,perLevel:8},durationSeconds:600}];
const index=instinct.effects.length-1;instinct.levelProgression.rules.push({path:['effects',String(index),'valueScaling'],rule:{kind:'linear',base:8,perLevel:8},source:'storedFormula'});
instinct.effectsVersion=1;
instinct.description_de='Aktiver Eigenbuff mit zehn Stufen für 600 Sekunden. Erhöht physischen Skillschaden um 8 je Skillstufe, maximal +80. Der Bonus wird je passendem Skilltreffer mit physischem Angriffsanteil angewendet, auch bei Mehrfachtreffern. Kein allgemeiner P-Angriff, kein Bonus für normale Auto-Attacks, Begleiter oder rein feste Rest-DoTs. Kein Stärkebonus. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50 auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten.';
instinct.description_eng='Active self buff with ten levels for 600 seconds. Adds 8 physical skill damage per level, up to 80, to each matching skill hit with a physical attack component, including multi-hit attacks. Does not increase general physical attack, normal basic attacks, companions or purely fixed residual DoTs. No Strength bonus. Cooldown 60 seconds; fixed 0.1-second cast unaffected by speed. Mana starts at 50 plus 13 per additional level, up to 167 before discounts.';
const blood=changes[1].after;blood.patk=2;blood.statScaling.patk={type:'linear',base:2,perLevel:2};blood.levelProgression.rules.find(r=>r.path.join('.')==='statScaling.patk').rule={kind:'linear',base:2,perLevel:2};
blood.description_de=blood.description_de.replace('+4 P-Angriff je Skillstufe, maximal +40','+2 P-Angriff je Skillstufe, maximal +20');blood.description_eng=blood.description_eng.replace('4 physical attack per level, up to 40','2 physical attack per level, up to 20');
for(const {before,after}of changes){await new SkillDataModel(after).validate();for(let level=1;level<=10;level++){const a=resolveSkillAtLevel(after,level),b=resolveSkillAtLevel(before,level);assert.equal(a.str,undefined);if(after.nr===172){assert.equal(a.patk,undefined);assert.equal(curveValue(a.effects[index].valueScaling,level),8*level);}else assert.equal(a.patk,2*level);for(const k of ['mana','resourceCosts','atkSpeed','dur','cd','castTimeSeconds','maxSkillLv','skillpoints'])assert.deepEqual(a[k],b[k]);}}
if(!process.argv.includes('--apply'))console.log('Validated skill-only bonus and Bloodlust reduction at all ten levels; dry run only.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=[];for(const {before}of changes){const live=await col.findOne({nr:before.nr}),normalized=JSON.parse(JSON.stringify(live));delete normalized.__v;assert.deepEqual(normalized,before);stored.push(live);}
 const backup='data/balancing/history/before-butcher-skill-damage-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(let i=0;i<changes.length;i++){const fields=structuredClone(changes[i].after);delete fields._id;assert.equal((await col.updateOne(stored[i],{$set:fields,$unset:changes[i].after.nr===172?{patk:'',str:''}:{str:''}})).matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored[i]._id})));delete actual.__v;assert.deepEqual(actual,changes[i].after);}
 await fs.writeFile('data/balancing/butcher-skill-damage-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes},null,2)+'\n');console.log('Butcher skill-only bonus and Bloodlust reduction saved and verified.');
}catch(error){console.error('Butcher reduction failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}


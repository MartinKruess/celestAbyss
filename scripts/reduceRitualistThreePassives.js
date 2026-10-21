import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const changes=[120,181,214].map(nr=>{const before=catalog.find(s=>s.nr===nr);assert.deepEqual([...before.charClass].sort(),['Bloodmage','Ritualist']);return {before,after:structuredClone(before)};});
const reaper=changes[0].after;reaper.soulStorageSettings.bonusPerFullStep=1;
reaper.description_de=reaper.description_de.replace('+2 Intelligenz','+1 Intelligenz').replace('Bonus = 2 ×','Bonus = 1 ×').replace('+20 Intelligenz','+10 Intelligenz');
reaper.description_eng=reaper.description_eng.replace('+2 Intelligence','+1 Intelligence').replace('bonus = 2 ×','bonus = 1 ×').replace('+20 Intelligence','+10 Intelligence');
const arcane=changes[1].after;delete arcane.wis;delete arcane.statScaling.wis;delete arcane.statBonusUnits?.wis;delete arcane.statBonusTargets?.wis;
arcane.manaRegen=16;arcane.statScaling.manaRegen={type:'linear',base:16,perLevel:8/9};arcane.levelProgression.rules=arcane.levelProgression.rules.filter(r=>r.path.join('.')!=='statScaling.wis');arcane.levelProgression.rules.find(r=>r.path.join('.')==='statScaling.manaRegen').rule={kind:'linear',base:16,perLevel:8/9};
arcane.description_de='Permanente Passive mit zehn Stufen. Gewährt +1 Vitalität je Stufe, maximal +10. Kein Willenskraftbonus. Direkte MP-Regeneration je 3-Sekunden-Tick steigt gleichmäßig von +16 auf Stufe 1 bis +24 auf Stufe 10, also +8/9 je weiterer Stufe. Keine Victim-Voraussetzung und kein direkter M-Angriffsbonus. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer.';
arcane.description_eng='Permanent passive with ten levels. Grants 1 Vitality per level, up to 10. No Wisdom bonus. Direct Mana regeneration per 3-second tick increases evenly from 16 at level 1 to 24 at level 10, adding 8/9 per additional level. No Victim requirement or direct magical attack bonus. No activation costs, cast time, cooldown or limited duration.';
const burn=changes[2].after;burn.effects[0].value=4;burn.effects[0].valueScaling={type:'linear',base:4,perLevel:4};burn.levelProgression.rules.find(r=>r.path.join('.')==='effects.0.valueScaling').rule={kind:'linear',base:4,perLevel:4};
burn.description_de=burn.description_de.replace('um 8 magischen Angriff','um 4 magischen Angriff').replace('Angriffsbonus um 8','Angriffsbonus um 4').replace('+80 magischen Angriff','+40 magischen Angriff');
burn.description_eng=burn.description_eng.replace('by 8 magical attack','by 4 magical attack').replace('adds 8 magical attack','adds 4 magical attack').replace('+80 magical attack','+40 magical attack');
for(const {before,after}of changes){await new SkillDataModel(after).validate();assert.equal(after.maxSkillLv,before.maxSkillLv);assert.deepEqual(after.resourceCosts,before.resourceCosts);for(let level=1;level<=10;level++){const a=resolveSkillAtLevel(after,level),b=resolveSkillAtLevel(before,level);if(after.nr===120){assert.equal(a.soulStorageSettings.bonusPerFullStep,1);assert.deepEqual(a.soulStorageSettings.capacityScaling,b.soulStorageSettings.capacityScaling);}if(after.nr===181){assert.equal(a.wis,undefined);assert.equal(a.vita,b.vita);assert(Math.abs(a.manaRegen-(16+(level-1)*8/9))<1e-7);}if(after.nr===214){assert.equal(a.effects[0].valueScaling.base,4*level);assert.deepEqual(a.effects[1],b.effects[1]);}}}
if(!process.argv.includes('--apply'))console.log('Validated Reaper maximum +10 Intelligence, Arcane regeneration 16–24 without Wisdom, Burn Out +4 attack/rank and unchanged HP drain.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=[];for(const {before}of changes){const live=await col.findOne({nr:before.nr}),normalized=JSON.parse(JSON.stringify(live));delete normalized.__v;assert.deepEqual(normalized,before);stored.push(live);}
 const backup='data/balancing/history/before-ritualist-passive-reduction-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(let i=0;i<changes.length;i++){const fields=structuredClone(changes[i].after);delete fields._id;assert.equal((await col.updateOne(stored[i],{$set:fields,$unset:changes[i].after.nr===181?{wis:''}:{}})).matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored[i]._id})));delete actual.__v;assert.deepEqual(actual,changes[i].after);}
 await fs.writeFile('data/balancing/ritualist-passive-reduction-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes},null,2)+'\n');console.log('Three Ritualist passive reductions saved and verified.');
}catch(error){console.error('Butcher reduction failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}


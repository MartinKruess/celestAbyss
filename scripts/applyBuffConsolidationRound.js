import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
const removedNumbers=[79,151,155,170];
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const collection=SkillDataModel.collection,updates=[];
 for(const nr of [...removedNumbers,148,146,154,172,149]){
  const before=await collection.findOne({nr});if(!before)throw Error('Missing skill');const set={},unset={};
  if(removedNumbers.includes(nr))set.charClass=[];
  if(nr===148)set.charClass=before.charClass.filter(c=>!['Villian','Shadowwarrior'].includes(c));
  if(nr===146){set.statScaling={...before.statScaling,amb:{type:'linear',base:6,perLevel:1}};set.amb=6;
   set.description_de='Eigenbuff für 300 Sekunden. Glück startet bei 1 und steigt um 0,5 je weiterer Stufe auf 5,5 auf Stufe 10. Ambush startet bei 6 und steigt um 1 je weiterer Stufe auf 15. Übernimmt einen Teil des Ambush-Bonus aus dem beim Schurken entfernten Scharfer Instinkte; kein zusätzlicher Angriffstempobonus. Castzeit 0,4 Sekunden, Cooldown 60 Sekunden. Mana-Kosten unverändert 44 bis 147.';
   set.description_eng='Self buff for 300 seconds. Luck 1 plus 0.5 per additional level, maximum 5.5. Ambush 6 plus 1 per additional level, maximum 15 at level 10. Partly absorbs the Rogue-only removal of Sharp Instinct; no attack-speed bonus. Cast 0.4 seconds, cooldown 60 seconds, unchanged Mana 44 to 147.';}
  if(nr===154){const dodge=Array.from({length:10},(_,i)=>Math.round(10+i*10/9));const luck=structuredClone(before.statScaling.luck);luck.values[9]=5;
   set.statScaling={...before.statScaling,luck,dodge:{type:'table',values:dodge}};set.dodge=10;
   set.description_de='Eigenbuff für 600 Sekunden, vereint Auge des Falken und Sechster Sinn. Je gelerntem Skilllevel +6 P-Angriff, maximal 60. Genauigkeit 15 auf Stufe 1, +1 je weiterer Stufe, maximal 24. Glück auf Stufe 1–4 +1, auf 5–9 +2, auf 10 +5. Ausweichen als feste Punkte: '+dodge.join(', ')+', maximal 20. Sechster Sinn wird nicht zusätzlich gelernt oder gestapelt. Keine zusätzliche Resistenz gegen Erblinden. Mana unverändert 48 +16 je weiterer Stufe bis 192; Castzeit 0,3 Sekunden, Cooldown 60 Sekunden.';
   set.description_eng='Self buff for 600 seconds, merges Falcon Eye and Sixth Sense. Physical attack 6 per level, maximum 60; accuracy 15 plus 1 per additional level, maximum 24. Luck 1 at levels 1–4, 2 at 5–9, 5 at 10. Flat dodge points by level: '+dodge.join(', ')+'. Sixth Sense is no longer separately learned or stacked. No additional blindness resistance. Unchanged Mana 48 plus 16 per additional level, maximum 192; cast 0.3 seconds, cooldown 60 seconds.';}
  if(nr===172){set.str=4;set.statScaling={...before.statScaling,str:{type:'linear',base:4,perLevel:2}};
   set.description_de='Eigenbuff: Stärke 4 auf Stufe 1, je weiterer Stufe +2 bis 22 auf Stufe 10. Mana unverändert 47, je weiterer Stufe +18 bis 209. Castzeit 0,3 Sekunden, Dauer 600 Sekunden, Cooldown 60 Sekunden.';
   set.description_eng='Self buff: Strength 4 at level 1, plus 2 per additional level, maximum 22 at level 10. Unchanged Mana 47 plus 18 per additional level, maximum 209. Cast 0.3 seconds, duration 600 seconds, cooldown 60 seconds.';}
  if(nr===149){set.patk=60;set.statScaling={...before.statScaling,patk:{type:'linear',base:60,perLevel:30}};delete set.statScaling.int;unset.int='';set.dur=1200;set.durationScaling={type:'linear',base:1200,perLevel:0};
   if(before.statBonusUnits){set.statBonusUnits={...before.statBonusUnits};delete set.statBonusUnits.int;}
   if(before.statBonusTargets){set.statBonusTargets={...before.statBonusTargets};delete set.statBonusTargets.int;}
   set.description_de='Eigenbuff für Abenteurer und Schamane, Dauer 1200 Sekunden. Stärke 3 auf Stufe 1, +1 je weiterer Stufe bis 5 auf Stufe 3. P-Angriff 60 auf Stufe 1, +30 je weiterer Stufe bis 120 auf Stufe 3. Kein Intelligenzbonus mehr. Mana unverändert 250 +25 je weiterer Stufe bis 300. Cooldown 60 Sekunden, sofortige Aktivierung; Animation weiterhin vorläufig.';
   set.description_eng='Self buff for Adventurer and Shaman, duration 1200 seconds. Strength 3 plus 1 per additional level to 5 at level 3. Physical attack 60 plus 30 per additional level to 120 at level 3. No Intelligence bonus. Unchanged Mana 250 plus 25 per additional level to 300. Cooldown 60 seconds, instant activation; animation still provisional.';}
  const candidate={...before,...set};for(const key of Object.keys(unset))delete candidate[key];await new SkillDataModel(candidate).validate();updates.push({before,set,unset,candidate});
 }
 const dir='data/balancing/history/before-buff-consolidation-'+new Date().toISOString().replaceAll(':','-');await fs.mkdir(dir,{recursive:true});
 await fs.writeFile(dir+'/skills-before.json',JSON.stringify(updates.map(u=>u.before),null,2)+'\n',{flag:'wx'});
 for(const file of ['data/reports/class-skill-counts.json','data/balancing/class-comparison-level60.json','data/balancing/class-skill-points.json','data/balancing/all-class-timed-damage.json'])await fs.copyFile(file,dir+'/'+file.split('/').at(-1));
 for(const u of updates){await collection.updateOne({nr:u.before.nr},{$set:u.set,...(Object.keys(u.unset).length?{$unset:u.unset}:{})});if(!isDeepStrictEqual(await collection.findOne({nr:u.before.nr}),u.candidate))throw Error('Read-back mismatch');}
 const countsPath='data/reports/class-skill-counts.json',report=JSON.parse(await fs.readFile(countsPath,'utf8'));
 for(const c of report.counts){for(const nr of [...removedNumbers,...(c.name.startsWith('Schurke')?[148]:[])]){if(!c.skillNumbers.includes(nr))continue;const classified=report.classified.find(s=>s.nr===nr);c.skillNumbers=c.skillNumbers.filter(n=>n!==nr);c.total=c.skillNumbers.length;if(classified&&typeof c[classified.category]==='number')c[classified.category]--;if(classified?.activeDefensive)c.defensive--;}}
 for(const u of updates){const classified=report.classified.find(s=>s.nr===u.before.nr);if(classified)classified.classes=u.candidate.charClass;}
 await fs.writeFile(countsPath,JSON.stringify(report,null,2)+'\n');
 console.log('Verified buff consolidation: unassigned 79/151/155/170, Rogue removed from148, upgraded146/154, reduced172/149. Definitions and IDs preserved; Gladiator unchanged.');
 console.log(JSON.stringify(report.counts.map(c=>({class:c.name,total:c.total}))));
}catch(e){console.error('Buff consolidation failed: '+e.name);if(e.name==='ValidationError')console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}


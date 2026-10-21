import 'dotenv/config';import fs from 'node:fs/promises';import mongoose from 'mongoose';import {isDeepStrictEqual} from 'node:util';import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const collection=SkillDataModel.collection,updates=[];
 for(const nr of [159,160,163]){const before=await collection.findOne({nr});if(before.charClass.some(c=>!['Gladiator','Berserker'].includes(c)))throw Error('Unexpected shared assignment');const set={},unset={};
  if(nr===159)set.charClass=[];
  if(nr===160){set.patk=3;set.statScaling={...before.statScaling,patk:{type:'linear',base:3,perLevel:3},penetration:{type:'table',values:[0,0,0,0,10,10,10,10,10,20]}};
   set.description_de='Eigenbuff für 600 Sekunden. +3 P-Angriff je gelerntem Skilllevel, maximal +30 auf Stufe 10. Ab Stufe 5 +10 Penetration, auf Stufe 10 insgesamt +20. Penetration ist ein fester Wert, keine Prozentangabe. Mana unverändert 62 +27 je weiterer Stufe bis 305. Cooldown 60 Sekunden, Castzeit 0,2 Sekunden.';
   set.description_eng='Self buff for 600 seconds. Physical attack +3 per learned level, maximum +30 at level 10. Penetration +10 from level 5, +20 total at level 10; flat rating, not a percentage. Unchanged Mana 62 plus 27 per additional level to 305, cooldown 60 seconds, cast 0.2 seconds.';}
  if(nr===163){set.health=250;set.luck=1;set.statScaling={...before.statScaling,health:{type:'linear',base:250,perLevel:250},luck:{type:'linear',base:1,perLevel:1},critDamageBonus:{type:'table',values:[0,0,.01]}};delete set.statScaling.patk;unset.patk='';
   set.statBonusUnits={...before.statBonusUnits,luck:'flat',critDamageBonus:'fraction'};
   set.effects=structuredClone(before.effects);const mana=set.effects.find(e=>e.key==='full-potential-max-mana');mana.value=66;mana.valueScaling={type:'linear',base:66,perLevel:67};
   set.description_de='Eigenbuff mit drei Stufen; vereint Volles Potential und Kritische Schläge. Max-Leben +250/+500/+750; Glück +1/+2/+3; Max-Mana +66/+133/+200. Auf Maximalstufe zusätzlich +1 Prozentpunkt kritischer Schadensbonus (ohne weitere Boni 81 statt 80 Prozent Zusatzschaden bei kritischen Treffern). Normale Treffer erhalten diesen Bonus nicht. Kein zusätzlicher P-Angriff mehr. Kritische Schläge wird nicht zusätzlich gelernt oder gestapelt. Lebens- und Manaboni erhöhen die Maximalwerte, stellen die Ressourcen nicht sofort wieder her. Dauer 600 Sekunden, Cooldown 900 Sekunden, Castzeit 0,6 Sekunden. Aktivierungskosten unverändert 133 +62 je weiterer Stufe bis 257 Mana.';
   set.description_eng='Three-level self buff combining Full Potential and Critical Strikes. Maximum Health +250/+500/+750, Luck +1/+2/+3, maximum Mana +66/+133/+200. At maximum level adds 1 percentage point critical damage bonus (81 instead of 80 percent bonus damage without other bonuses); normal hits unaffected. No physical attack bonus. Critical Strikes is no longer separately learned or stacked. Maximum-resource bonuses do not directly restore resources. Duration 600 seconds, cooldown 900 seconds, cast 0.6 seconds. Unchanged activation cost 133 plus 62 per additional level to 257 Mana.';}
  const candidate={...before,...set};for(const key of Object.keys(unset))delete candidate[key];await new SkillDataModel(candidate).validate();updates.push({before,set,unset,candidate});
 }
 const dir='data/balancing/history/before-gladiator-critical-potential-'+new Date().toISOString().replaceAll(':','-');await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skills-before.json',JSON.stringify(updates.map(u=>u.before),null,2)+'\n',{flag:'wx'});
 for(const path of ['data/reports/class-skill-counts.json','data/balancing/all-class-timed-damage.json','data/balancing/class-comparison-level60.json'])await fs.copyFile(path,dir+'/'+path.split('/').at(-1));
 for(const u of updates){await collection.updateOne({nr:u.before.nr},{$set:u.set,...(Object.keys(u.unset).length?{$unset:u.unset}:{})});if(!isDeepStrictEqual(await collection.findOne({nr:u.before.nr}),u.candidate))throw Error('Read-back mismatch');}
 const path='data/reports/class-skill-counts.json',r=JSON.parse(await fs.readFile(path,'utf8'));
 for(const c of r.counts)if(c.skillNumbers.includes(159)){c.skillNumbers=c.skillNumbers.filter(n=>n!==159);c.total=c.skillNumbers.length;c.self--;}
 r.classified.find(s=>s.nr===159).classes=[];await fs.writeFile(path,JSON.stringify(r,null,2)+'\n');
 console.log('Verified: Critical Strikes unassigned; Full Potential maximum750 HP/200 MP/3 Luck/+0.01 critical damage, no P-attack; Energy of Courage maximum30 attack/20 penetration.');
}catch(e){console.error('Gladiator merge failed: '+e.name);if(e.name==='ValidationError')console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}

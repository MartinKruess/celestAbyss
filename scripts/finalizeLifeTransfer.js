import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:250});if(!before||before.maxSkillLv!==10)throw Error('Unexpected source state');
 const healing=Array.from({length:20},(_,i)=>40*Math.ceil((i+1)/2));
 const intervals=Array.from({length:20},(_,i)=>i===19?.3:i>=9?.4:.5);
 const set={maxSkillLv:20,castTimeSeconds:.8,animationDurationSeconds:2,animationTimingStatus:'defined',animationScalesWithAttackSpeed:false,durationScaling:{type:'table',values:intervals.map(v=>Number((4*v).toFixed(2)))},
 description_de:'Lebenstransfer: 20 Stufen, 0,8 Sekunden Castzeit. Vier unterbrechbare Heilimpulse für einen ausgewählten eigenen Begleiter. Abstand 0,5 Sekunden auf Stufe 1–9, 0,4 auf Stufe 10–19, 0,3 auf Stufe 20; erster Impuls nach einem vollständigen Intervall. Übertragung damit 2 / 1,6 / 1,2 Sekunden. Heilung je Impuls steigt in ganzen Stufenpaaren: 40 HP auf Stufe 1–2, danach alle zwei Stufen +40 bis 400 auf Stufe 19–20. Pro tatsächlich ausgeführtem Impuls werden 75 % der Heilung als eigene HP und 10 % als Mana bezahlt. Maximal viermal 300 HP und 40 Mana für viermal 400 Heilung: 1200 eigene HP +160 Mana → 1600 Pet-Heilung. Keine Kosten vor einem Impuls; Abbruch durch Bewegung/Dash stoppt alle restlichen Impulse. Darf den Anwender nicht töten. Cooldown beginnt mit dem ersten Heilimpuls: 60 Sekunden, -2 je weiterer Stufe bis 22. Abbruch vor dem ersten Impuls kostet weder Ressourcen noch Cooldown. Die Heilphase ersetzt die bisher feste Zwei-Sekunden-Animation entsprechend der Skillstufe.',
 description_eng:'20 levels, fixed 0.8-second cast, four interruptible healing pulses. Intervals 0.5s at levels 1–9, 0.4s at 10–19, 0.3s at 20; first pulse after one full interval. Healing per pulse 40 at levels 1–2, increasing by 40 every two levels to 400 at 19–20. Each completed pulse costs 75% of its healing in caster health and 10% in mana. Maximum totals: 1200 health and 160 mana for 1600 companion healing. Movement cancels remaining pulses; cannot kill caster. Cooldown starts at first pulse: 60 -2 per additional level to 22 seconds. Cancellation before first pulse is free.',
 lifeTransferSettings:{target:'selectedOwnCompanion',interruptible:true,healingProgressionStatus:'defined',impulseCountStatus:'defined',costProgressionStatus:'defined',impulseCount:4,intervalSecondsByLevel:intervals,healingPerImpulseByLevel:healing,healthCostPerImpulseByLevel:healing.map(v=>v*.75),manaCostPerImpulseByLevel:healing.map(v=>v*.1),paymentTiming:'perCompletedImpulse',cooldownStartsOn:'firstHealingImpulse',cancellationBeforeFirstImpulseIsFree:true,cannotKillCaster:true,cancelOnMovement:true}};
 const candidate={...before,...set};await new SkillDataModel(candidate).validate();
 for(let i=0;i<20;i++)for(const v of [healing[i],set.lifeTransferSettings.healthCostPerImpulseByLevel[i],set.lifeTransferSettings.manaCostPerImpulseByLevel[i]])if(!Number.isInteger(v))throw Error('Fractional resource');
 const dir='data/balancing/history/before-life-transfer20-'+new Date().toISOString().replaceAll(':','-');await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skill250-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 await col.updateOne({nr:250},{$set:set});if(!isDeepStrictEqual(await col.findOne({nr:250}),candidate))throw Error('Read-back mismatch');console.log('Verified Life Transfer20: four paid pulses, 0.8s cast, level20 interval0.3s, total1600 healing/1200HP/160MP.');
}catch(e){console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}

import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const collection=SkillDataModel.collection,before=await collection.findOne({nr:230});
 if(before.charClass.some(c=>!['Gladiator','Berserker'].includes(c)))throw Error('Unexpected shared assignment');
 const resourceCosts=structuredClone(before.resourceCosts);
 resourceCosts.find(c=>c.resource==='mana').scaling={type:'linear',base:216,perLevel:216};
 const set={skillName_de:'Blutiger Durchbruch',skillName_eng:'Bloody Breakthrough',patk:540,mana:216,
 statScaling:{...before.statScaling,patk:{type:'linear',base:540,perLevel:540}},resourceCosts,
 manaPricing:{...before.manaPricing,category:'finisher',factor:.4},
 attackExecution:{hitCount:3,damageValueScope:'perApplication',sequenceScalesSkillBaseOnly:true,hitTimingStatus:'pending',hitSequence:[
 {offsetSeconds:0,damageMultiplier:1/6,phase:'Axtwurf',targetMode:'singleEnemy',maxTargets:1},
 {offsetSeconds:1,damageMultiplier:1/3,phase:'Ansturm und Hieb',targetMode:'frontalSweep',maxTargets:5},
 {offsetSeconds:2,damageMultiplier:1/2,phase:'Abschlussschlag',targetMode:'circle',maxTargets:5,radius:3}]},
 effects:[...(before.effects??[]).filter(e=>e.type!=='resourceGain'),{key:'breakthroughRage',type:'resourceGain',resource:'rage',target:'self',value:5,unit:'flat',durationSeconds:0,gainTrigger:'ownSkillDamage',oncePerSkillApplication:true}],
 description_de:'Wirft eine Axt auf das Hauptziel, stürmt kurz hinterher und schlägt mit der zweiten Axt frontal zu. Beim Herausziehen der ersten Axt folgt ein kreisförmiger Abschlussschlag. Gesamter P-Skill-Grundschaden: 540 auf Stufe 1, +540 je weiterer Stufe, 5400 auf Stufe 10. Die drei Phasen verteilen diesen Grundschaden im Verhältnis 1:2:3 (maximal 900/1800/2700); jede Phase addiert den vollen aktuellen P-Angriff. Erzeugt einmalig 5 Wut beim ersten erfolgreichen Schadenstreffer, unabhängig von der Anzahl getroffener Gegner. Haupttreffer ein Ziel, Folgehiebe maximal fünf Gegner; Abschlussradius 3 m. Exakte Ansturmreichweite und Frontfläche noch offen. Vorläufige Trefferzeiten 0/1/2 Sekunden nach Castende; Animation 3 Sekunden. Mana 216 +216 je weiterer Stufe, maximal 2160. Castzeit 0,4 Sekunden; Cooldown unverändert 90 bis 81 Sekunden. Keine Tötung erforderlich.',
 description_eng:'Throws an axe, follows with a short rush and frontal sweep, then pulls the axe free with a circular finishing sweep. Total physical skill base damage 540 plus 540 per additional level, reaching 5400. Three phases split skill base 1:2:3; each separately adds full current physical attack. Grants 5 rage once on the first successful damaging hit, regardless of target count. Initial target single; later sweeps at most five enemies, final radius 3m. Rush distance and frontal geometry pending. Provisional impacts 0/1/2 seconds after cast completion; animation 3 seconds. Mana 216 plus 216 per additional level, maximum 2160. Cast 0.4 seconds, unchanged cooldown 90 to 81 seconds. No kill required.'};
 await new SkillDataModel({...before,...set}).validate();
 const dir='data/balancing/history/before-bloody-breakthrough-'+new Date().toISOString().replaceAll(':','-');
 await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skill230-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 for(const path of ['data/balancing/all-class-timed-damage.json','data/balancing/all-class-damage-rotations.json'])await fs.copyFile(path,dir+'/'+path.split('/').at(-1));
 await collection.updateOne({nr:230},{$set:set});
 if(!isDeepStrictEqual(await collection.findOne({nr:230}),{...before,...set}))throw Error('Read-back mismatch');
 console.log('Verified skill230: Blutiger Durchbruch, three phases, 540–5400 base, 216–2160 Mana, once-only 5 rage.');
}catch(error){console.error('Update failed: '+error.name);if(error.name==='ValidationError')console.error(error.message);process.exitCode=1;}finally{await mongoose.disconnect();}

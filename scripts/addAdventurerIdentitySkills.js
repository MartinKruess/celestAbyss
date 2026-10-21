import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
const linear=(base,perLevel)=>({type:'linear',base,perLevel});
const common={charClass:['Abenteuer'],currentSkillLv:0,currentUpgradeLv:0,maxUpgradeLv:10,skillpoints:1};
const definitions=[
 {...common,nr:246,skillName_de:'Wilde Bindung',skillName_eng:'Wild Bond',category:'passive',dmgType:'passive',maxSkillLv:3,resourceCosts:[],
 description_de:'Bei 100 % Vertrauen erhält das jeweilige Pet zusätzlich 10/15/20 % der aktuellen physischen Angriffskraft sowie 5/7,5/10 % der aktuellen physischen und magischen Verteidigung des Abenteurers. Der Abenteurer behält alle Werte. Die Verwendung des Angriffsbonus durch magische Pets bleibt offen; keine automatische Umwandlung festgelegt.',
 description_eng:'At 100% trust, the pet gains 10/15/20% of the owner’s current physical attack and 5/7.5/10% of each current defense. Owner retains all stats. Magical pet attack mapping remains pending.',
 companionBondSettings:{requiredTrustFraction:1,usesCurrentOwnerStats:true,ownerRetainsStats:true,physicalAttackFractionByLevel:[.1,.15,.2],physicalDefenseFractionByLevel:[.05,.075,.1],magicalDefenseFractionByLevel:[.05,.075,.1],magicalPetAttackMappingStatus:'pending'}},
 {...common,nr:247,skillName_de:'Beharrlichkeit',skillName_eng:'Perseverance',category:'passive',dmgType:'passive',maxSkillLv:5,activation:'automatic',resourceCosts:[],
 description_de:'Nach einem erlittenen kritischen Treffer: 25 % Chance auf 15 Sekunden Beharrlichkeit, sofern der interne Cooldown bereit ist. Je Skillstufe +10 P-Abwehr, +10 M-Abwehr und +5 Agilität; maximal +50/+50/+25. Sofortheilung 50 HP auf Stufe 1, +3 je weiterer Stufe bis 62. Interner Cooldown 48 Sekunden, je weiterer Stufe -1 bis 44. Kein permanenter Attributbonus.',
 description_eng:'Taking a critical hit has a 25% chance to trigger a 15-second buff when its internal cooldown is ready. Each level grants 10 physical defense, 10 magical defense and 5 Agility. Immediate healing 50 +3 per additional level to 62. Internal cooldown 48 -1 per additional level to 44 seconds.',
 reactiveBuffSettings:{trigger:'receivedCriticalHit',chance:.25,durationSeconds:15,internalCooldownScaling:{base:48,perLevel:-1},bonusesPerLevel:{pdef:10,mdef:10,agi:5},immediateHealingScaling:{base:50,perLevel:3}}},
 {...common,nr:248,skillName_de:'Kreuzhieb',skillName_eng:'Cross Strike',category:'active',dmgType:'physical',maxSkillLv:10,castTimeSeconds:.1,castTimeStatus:'defined',animationDurationSeconds:1.2,animationTimingStatus:'provisional',patk:135,statScaling:{patk:linear(135,112)},mana:34,
 description_de:'Zwei aufeinanderfolgende physische Hiebe. Erster Hieb: 27 Grundschaden, +56 je weiterer Stufe bis 531. Zweiter Hieb: 108 Grundschaden, +56 je weiterer Stufe bis 612. Jeder Hieb addiert den aktuellen P-Angriff. Mana für die gesamte Anwendung: 34 +28 je weiterer Stufe bis 286 (25 % des gesamten Skill-Grundschadens, gerundet). Castzeit 0,1 Sekunden, anschließende Animation vorläufig etwa 1,2 Sekunden. Cooldown und genaue Trefferzeitpunkte noch offen.',
 description_eng:'Two consecutive physical hits: first base 27 +56 per additional level to 531, second 108 +56 to 612. Each adds current physical attack. Total mana 34 +28 to 286. Cast 0.1 seconds, subsequent animation approximately 1.2 seconds. Cooldown and precise hit times pending.',
 attackExecution:{hitCount:2,damageValueScope:'perApplication',hitTimingStatus:'pending',physicalHitBaseScaling:[{base:27,perLevel:56},{base:108,perLevel:56}]},
 resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:linear(34,28)}],manaPricing:{category:'normal',factor:.25,basis:'skillBaseDamagePerTarget',usesCharacterAttack:false,version:1}}
];
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const collection=SkillDataModel.collection;
 for(const s of definitions){if(await collection.findOne({$or:[{nr:s.nr},{skillName_eng:s.skillName_eng}]}))throw Error('Skill already exists');s._id=new mongoose.Types.ObjectId();const doc=new SkillDataModel(s);await doc.validate();for(const k of Object.keys(s))if(doc.toObject()[k]===undefined)throw Error('Unmapped field '+k);}
 const path='data/reports/class-skill-counts.json',r=JSON.parse(await fs.readFile(path,'utf8')),c=r.counts.find(c=>c.name==='Abenteurer / Scout');
 if(c.total!==27)throw Error('Unexpected current count');
 const dir='data/balancing/history/before-adventurer-identity-skills-'+new Date().toISOString().replaceAll(':','-');await fs.mkdir(dir,{recursive:true});await fs.copyFile(path,dir+'/class-skill-counts-before.json');await fs.writeFile(dir+'/new-skills.json',JSON.stringify(definitions,null,2)+'\n',{flag:'wx'});
 for(const s of definitions){await collection.insertOne(s);if(!isDeepStrictEqual(await collection.findOne({nr:s.nr}),s))throw Error('Read-back mismatch');const category=s.dmgType==='passive'?'passive':'offensive';c[category]++;c.skillNumbers.push(s.nr);r.classified.push({nr:s.nr,id:s._id.toString(),name:s.skillName_de,classes:s.charClass,category,activeDefensive:false});}
 c.total=c.skillNumbers.length;r.catalogCount=await collection.countDocuments({});await fs.writeFile(path,JSON.stringify(r,null,2)+'\n');console.log('Verified three new Adventurer skills; 30 total, 14 passive, 16 active; open cooldown retained.');
}catch(e){console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}

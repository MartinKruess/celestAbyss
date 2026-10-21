import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {ClassTemplateModel} from '../models/classTemplateSchema.js';
const patches=[
{nr:5,set:{category:'Human',dmgType:'passive',resourceCosts:[],statScaling:{vita:{type:'linear',base:1,perLevel:1},wis:{type:'linear',base:1,perLevel:1}},description_de:'Erhöht dauerhaft deine Vitalität und Willenskraft jeweils um 1 je gelerntem Skilllevel, bis zu jeweils 20.',description_eng:'Permanently increases Vitality and Wisdom by 1 each per learned skill level, up to 20 each.'},unset:{cd:'',dur:''}},
{nr:6,set:{dur:20,cd:120,resourceCosts:[],durationScaling:{type:'linear',base:20,perLevel:2.5},cooldownScaling:{type:'linear',base:120,perLevel:-4.5},triggerConditionStatus:'defined',triggerCondition:{type:'ownAttack',chancePerCheck:0.05,oncePerAttackAction:true,excludeCompanionAttacks:true,requiresCooldownReady:true},description_de:'Eigene Angriffe können Adrenalin mit 5 Prozent Wahrscheinlichkeit auslösen, wenn der Skill bereit ist. Es erhöht Stärke und Intelligenz um 1 Prozent je Skillstufe, bis zu 5 Prozent. Die Dauer steigt von 20 auf 30 Sekunden und der Cooldown sinkt von 120 auf 102 Sekunden.',description_eng:'Your own attacks have a 5 percent chance to trigger Adrenaline when ready. It increases Strength and Intelligence by 1 percent per skill level, up to 5 percent. Duration increases from 20 to 30 seconds and cooldown decreases from 120 to 102 seconds.'}},
{nr:14,set:{cd:4,dur:1,cooldownScaling:{type:'table',values:[4,2]},resourceCosts:[{resource:'mana',reference:'maxMana',unit:'flat',scaling:{type:'fixed',base:0}},{resource:'stamina',reference:'maxStamina',unit:'fraction',scaling:{type:'table',base:0.15,values:[0.15,0.1]}}],description_de:'Weiche mit einer Rolle aus. Auf Skilllevel 1 verbraucht sie 15 Prozent deiner maximalen Ausdauer und hat 4 Sekunden Cooldown, auf Skilllevel 2 sind es 10 Prozent und 2 Sekunden. Die Rolle dauert vorläufig 1 Sekunde und kostet kein Mana.',description_eng:'Dodge with a roll. At skill level 1 it costs 15 percent of maximum stamina with a 4 second cooldown; at level 2 it costs 10 percent with a 2 second cooldown. The provisional roll duration is 1 second. It costs no mana.'}},
];
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Requires development database');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const before=await SkillDataModel.collection.find({nr:{$in:patches.map(p=>p.nr)}}).toArray();if(before.length!==3)throw Error('Missing skill');
for(const p of patches){const doc={...before.find(s=>s.nr===p.nr),...p.set};for(const k of Object.keys(p.unset??{}))delete doc[k];await new SkillDataModel(doc).validate();}
await fs.writeFile('data/balancing/adventurer-first-three-before.json',JSON.stringify(before,null,2)+'\n');
for(const p of patches)await SkillDataModel.collection.updateOne({_id:before.find(s=>s.nr===p.nr)._id},{$set:p.set,...(p.unset?{$unset:p.unset}:{})});
for(const p of patches){const s=await SkillDataModel.collection.findOne({nr:p.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(s[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
const classes=await ClassTemplateModel.find({}).lean();if(classes.length!==13)throw Error('Class count');
await ClassTemplateModel.updateMany({key:{$in:classes.map(c=>c.key)}},{$set:{'baseStats.maxStamina':1}},{runValidators:true});
const after=await ClassTemplateModel.find({}).lean();if(after.some(c=>c.baseStats.maxStamina!==1))throw Error('Stamina read-back');
for(const path of ['data/class-templates.json','data/balancing/class-baselines.json']){const d=JSON.parse(await fs.readFile(path,'utf8'));for(const c of Array.isArray(d)?d:d.classes)c.baseStats.maxStamina=1;await fs.writeFile(path,JSON.stringify(d,null,2)+'\n');}
console.log('Saved and verified Adaption, Adrenaline and Dodge Roll, preserving shared skill IDs. All 13 classes have maxStamina 1. No runtime execution implemented.');
}catch(e){console.error(`First skill update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}

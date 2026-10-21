import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const definitions=[
{nr:32,name:'Elementarenergie',effects:[
{key:'self-intelligence',type:'statModifier',target:'self',stat:'int',value:2,unit:'flat',durationSeconds:30},
{key:'enemy-magic-defense',type:'statModifier',target:'enemy',stat:'mdef',value:-0.1,unit:'fraction',reference:'targetStat',durationSeconds:30}],remove:['int','mdef','statBonusUnits','statBonusTargets']},
{nr:34,name:'Energieausbruch',activation:'manual',dur:15,effects:[
{key:'shield',type:'shield',target:'self',value:0.1,unit:'fraction',reference:'maxHealth',damageTypes:['physical','magical'],durationSeconds:15},
{key:'basic-attack-bonus',type:'damageBonus',target:'self',value:0.1,unit:'fraction',appliesTo:'basicAttack',durationSeconds:15,endWith:'shield'},
{key:'mana-drain',type:'resourceDrain',target:'self',value:0.01,unit:'fraction',resource:'mana',reference:'maxMana',intervalSeconds:1,durationSeconds:15,endWith:'shield'}],remove:['health','mana'],
de:'Du erhältst für maximal 15 Sekunden einen Schild, der physischen und magischen Schaden bis zu 10 % deines maximalen Lebens absorbiert. Solange der Schild besteht, verursachen normale Angriffe 10 % mehr Schaden und du verbrauchst pro Sekunde 1 % deines maximalen Manas. Beim Ablauf oder Aufbrauchen des Schilds enden alle drei Effekte.',
en:'Gain a shield for up to 15 seconds that absorbs physical and magical damage up to 10% of your maximum health. While the shield remains, basic attacks deal 10% more damage and you consume 1% of your maximum mana per second. All three effects end when the shield expires or is depleted.'}
];
try{
if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw new Error('Development DB required');
await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
const saved=[];
await mongoose.connection.transaction(async session=>{
saved.length=0;
for(const d of definitions){const current=await SkillDataModel.findOne({nr:d.nr,skillName_de:d.name}).session(session);if(!current)throw new Error('Missing skill');const next=current.toObject();for(const k of d.remove)delete next[k];Object.assign(next,{effectsVersion:1,effects:d.effects});if(d.activation)next.activation=d.activation;if(d.dur)next.dur=d.dur;if(d.de){next.description_de=d.de;next.description_eng=d.en;}await new SkillDataModel(next).validate();const set={effectsVersion:1,effects:d.effects};for(const k of ['activation','dur'])if(d[k])set[k]=d[k];if(d.de){set.description_de=d.de;set.description_eng=d.en;}await SkillDataModel.updateOne({_id:current._id},{$set:set,$unset:Object.fromEntries(d.remove.map(k=>[k,1]))},{session,runValidators:true});}
});
for(const d of definitions){const s=await SkillDataModel.findOne({nr:d.nr}).lean();if(s.effects.length!==d.effects.length || d.effects.some((effect,i)=>Object.entries(effect).some(([k,v])=>JSON.stringify(s.effects[i][k])!==JSON.stringify(v)))||d.remove.some(k=>s[k]!==undefined))throw new Error('Read-back mismatch');saved.push(s);}
let source=await fs.readFile('scripts/skilldata.js','utf8');
for(const d of definitions){const start=source.indexOf('  S_Name_de: '+JSON.stringify(d.name)+',');const end=source.indexOf('  S_Name_de:',start+40);if(start<0||end<0)throw new Error('Source missing');let b=source.slice(start,end);b=b.replace(/\n  effectsVersion: 1,\n  effects: \[[^\n]*\],/,'');b=b.replace('  S_Thumbnail:', '  effectsVersion: 1,\n  effects: '+JSON.stringify(d.effects)+',\n  S_Thumbnail:');if(d.nr===32){b=b.replace(/\n  statBonusUnits: [^\n]+/,'').replace(/\n  statBonusTargets: [^\n]+/,'').replace(/S_Int: [\d.]+/,'S_Int: 0').replace(/S_MDefense: -?[\d.]+/,'S_MDefense: 0');}else{b=b.replace(/S_Health: [\d.]+/,'S_Health: 0').replace(/S_Mana: [\d.]+/,'S_Mana: 0').replace(/S_Duration: [\d.]+/,'S_Duration: 15');if(!b.includes('activation:'))b=b.replace('  S_Thumbnail:', '  activation: "manual",\n  S_Thumbnail:');b=b.replace(/S_Description_de:\s*"(?:[^"\\]|\\.)*"/,'S_Description_de: '+JSON.stringify(d.de)).replace(/S_Description_eng:\s*"(?:[^"\\]|\\.)*"/,'S_Description_eng: '+JSON.stringify(d.en));}source=source.slice(0,start)+b+source.slice(end);}
await fs.writeFile('scripts/skilldata.js',source);
await fs.writeFile('data/skill-effects-decisions.json',JSON.stringify({version:1,definitions,cooldownEnergyOutburst:'pending: 104 seconds at level 1 proposed; level 10 31 versus reduction by 31 unclear. Existing 44 unchanged.',levelScaling:'pending',runtime:'Dedicated server implementation pending'},null,2)+'\n');
for(const file of ['data/skill-description-review.json','data/skill-review.json']){const r=JSON.parse(await fs.readFile(file,'utf8'));if(r.majorIssues){for(const d of definitions){const i=r.majorIssues.find(i=>i.nr===d.nr);i.status='partiallyResolved';i.effectsDecision={effectsVersion:1,effects:d.effects,pending:['levelScaling',...(d.nr===34?['cooldown']:['triggerCondition'])]};}}else for(const entry of r.reviews){const s=saved.find(s=>String(s._id)===entry.database?._id);if(s)entry.database=s;}await fs.writeFile(file,JSON.stringify(r,null,2)+'\n');}
console.log('Verified shared effects for Elemental Energy and Energy Outburst. Legacy duplicate effect fields removed. Cooldown 44 unchanged pending clarification.');
}catch(e){console.error('Effect migration failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}


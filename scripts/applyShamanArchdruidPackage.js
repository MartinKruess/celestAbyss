import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
const norm=v=>JSON.parse(JSON.stringify(v));
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection;assert.equal(await col.countDocuments({skillName_eng:'Wisdom of the Archdruid'}),0);
 const before=await col.find({nr:{$in:[62,87,254]}}).toArray();assert.equal(before.length,3);
 const nr=(await col.find({}).sort({nr:-1}).limit(1).next()).nr+1;
 const skill={_id:new mongoose.Types.ObjectId(),nr,skillName_de:'Weisheit des Erzdruiden',skillName_eng:'Wisdom of the Archdruid',category:'passive',dmgType:'passive',charClass:['Shamane','High Elves'],maxSkillLv:5,maxUpgradeLv:10,currentSkillLv:0,currentUpgradeLv:0,skillpoints:1,resourceCosts:[],str:3,int:3,wis:3,statScaling:{str:{type:'linear',base:3,perLevel:3},int:{type:'linear',base:3,perLevel:3},wis:{type:'linear',base:3,perLevel:3}},effectsVersion:1,effects:[{key:'archdruid-mana-regeneration',type:'statModifier',target:'self',stat:'manaRegen',value:.006,unit:'fraction',durationSeconds:0,valueScaling:{type:'linear',base:.006,perLevel:.006}}],
 description_de:'Die Lehren des Erzdruiden stärken dauerhaft deine Verbindung zwischen Körper, Geist und Natur. Gewährt je gelernter Stufe 3 Stärke, 3 Intelligenz und 3 Willenskraft, bis zu jeweils 15 auf Stufe 5. Erhöht zusätzlich die gesamte Mana-Regeneration um 0,6 Prozent je Stufe, maximal 3 Prozent. Der Prozentbonus wird nach allen flachen Regenerationsboni und der Umrechnung von Willenskraft angewendet. Keine Geschick-, Vitalitäts- oder Angriffstempoboni. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit oder Cooldown.',
 description_eng:'The teachings of the archdruid permanently strengthen the bond between body, mind and nature. Grants 3 Strength, 3 Intelligence and 3 Wisdom per learned level, reaching 15 each at level 5. Also increases total Mana regeneration by 0.6 percent per level, up to 3 percent. This multiplier applies after flat regeneration bonuses and Wisdom conversion. No Dexterity, Vitality or attack-speed bonus. Permanent passive with no activation cost, cast time or cooldown.'};
 skill.levelProgression=buildSkillProgression(norm(skill));
 const changes=before.map(original=>{
  const next=norm(original);
  if(next.nr===87){assert.ok(next.charClass.includes('Shamane'));next.charClass=next.charClass.filter(c=>!['Shamane','High Elves'].includes(c));}
  if(next.nr===62){assert.equal(next.cd,150);next.cd=120;next.cooldownScaling.base=120;next.description_de=next.description_de.replace('von 150 um 2 Sekunden je weiterer Stufe auf 142 Sekunden','von 120 um 2 Sekunden je weiterer Stufe auf 112 Sekunden');next.description_eng=next.description_eng.replace(/150/g,'120').replace(/142/g,'112');next.levelProgression=buildSkillProgression(next);}
  if(next.nr===254){
   next.effects=next.effects.filter(e=>e.type!=='resourceCostReduction'&&e.targetSkillNumber!==87);
   for(const effect of next.effects)if(effect.type==='damageBonus'&&effect.damageTypes?.includes('magical')){effect.value=.006;effect.valueScaling={type:'linear',base:.006,perLevel:.006};}
   next.effects.push({key:'salamander-all-skill-mana',type:'resourceCostReduction',target:'self',appliesTo:'allSkills',resource:'mana',value:.006,unit:'fraction',durationSeconds:0,valueScaling:{type:'linear',base:.006,perLevel:.006}});
   next.description_de='Permanente Passive mit fünf Stufen. Erhöht den physischen Schaden von Beben, Erdbeben, Infernalem Kreuzschlag, Sprungschlag, Felszähne, Felsensalve und beiden Phasen der Erdsäule um 0,3 Prozent je Stufe, maximal 1,5 Prozent. Erhöht den magischen Feuerschaden von Feuerlanze, Infernal Zyklon, Infernalem Kreuzschlag und Verbrennen um 0,6 Prozent je Stufe, maximal 3 Prozent; bestehende Feuer-DoTs profitieren ebenfalls. Senkt die Manakosten sämtlicher eigener Skills um 0,6 Prozent je Stufe, maximal 3 Prozent, einschließlich Erdangriffen, Buffs und Unterstützungsfähigkeiten. Andere Ressourcenpreise werden nicht reduziert. Schadensboni umfassen den passenden Charakterangriff; beim Kreuzschlag wird jede Komponente nur einmal verstärkt. Keine Wirkung auf Auto-Attack-Schaden, Cooldowns, Castzeiten oder den magischen Erdschaden von Erdbeben. Keine zusätzliche Brandchance, Aktivierungskosten oder begrenzte Dauer.';
   next.description_eng='Permanent passive with five levels. Increases physical damage of Tremor, Earthquake, Infernal Cross Strike, Jump Strike, Rock Fangs, Rock Volley and both Earth Pillar phases by 0.3 percent per level, up to 1.5 percent. Increases magical fire damage of Fire Lance, Infernal Cyclone, Infernal Cross Strike and Burn by 0.6 percent per level, up to 3 percent, including existing fire damage over time. Reduces Mana costs of all own skills by 0.6 percent per level, up to 3 percent, including earth attacks, buffs and support skills. Other resource costs are unchanged. Damage bonuses include the matching character attack; each cross-strike component is boosted once. Does not affect basic-attack damage, cooldowns, cast times or Earthquake magical earth damage. No additional burn chance, activation cost or limited duration.';
   next.levelProgression=buildSkillProgression(next);
  }
  return {before:original,next};
 });
 for(const record of [skill,...changes.map(c=>c.next)])await new SkillDataModel(record).validate();
 const dir='data/balancing/history/before-shaman-archdruid-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skills.json',JSON.stringify(before,null,2)+'\n');
 const path='data/reports/class-skill-counts.json',report=JSON.parse(await fs.readFile(path,'utf8')),row=report.counts.find(c=>c.name.startsWith('Schamane'));assert.equal(row.total,31);assert.ok(row.skillNumbers.includes(87));await fs.copyFile(path,dir+'/class-skill-counts.json');
 await mongoose.connection.transaction(async session=>{for(const c of changes){assert.deepEqual(norm(await col.findOne({_id:c.before._id},{session})),norm(c.before));const set={...c.next};delete set._id;await col.updateOne({_id:c.before._id},{$set:set},{session});}await col.insertOne(skill,{session});});
 for(const c of changes)assert.deepEqual(norm(await col.findOne({_id:c.before._id})),c.next);assert.deepEqual(await col.findOne({nr}),skill);
 row.skillNumbers=row.skillNumbers.filter(n=>n!==87).concat(nr).sort((a,b)=>a-b);row.passive++;row.offensive--;report.catalogCount=await col.countDocuments({});const classified=report.classified.find(c=>c.nr===87);if(classified)classified.classes=changes.find(c=>c.next.nr===87).next.charClass;report.classified.push({nr,id:String(skill._id),name:skill.skillName_de,classes:skill.charClass,category:'passive',activeDefensive:false});await fs.writeFile(path,JSON.stringify(report,null,2)+'\n');
 await fs.writeFile('data/balancing/shaman-archdruid-package.json',JSON.stringify({status:'appliedAndVerified',backup:dir,skill,changes:changes.map(c=>({before:norm(c.before),skill:c.next}))},null,2)+'\n');
 console.log(JSON.stringify({created:nr,shamanTotal:row.total,passive:row.passive,cycloneCooldown:'120 to 112 seconds'}));
}catch(e){console.error('Shaman package failed ('+e.name+'): '+(e.name==='AssertionError'?e.message:'details omitted'));process.exitCode=1;}
finally{await mongoose.disconnect();}

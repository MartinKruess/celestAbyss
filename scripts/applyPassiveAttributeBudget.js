import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const audit=JSON.parse(await fs.readFile('data/balancing/passive-attribute-audit.json','utf8'));
const plan=audit.proposals.concretePassivePlan,keys=['str','vita','int','wis','agi','dex'];
const names={str:['Stärke','Strength'],vita:['Vitalität','Vitality'],int:['Intelligenz','Intelligence'],wis:['Willenskraft','Wisdom'],agi:['Agilität','Agility'],dex:['Geschick','Dexterity']};
const extras={
 140:['Keine Aktivierungskosten, Castzeit oder Cooldown.','No activation cost, cast time or cooldown.'],
 67:['Allgemeine Mana-Kosten dauerhaft um 1 % auf Stufe 1–4, 2 % auf Stufe 5–9 und 3 % auf Stufe 10 reduziert.','Permanently reduces all Mana costs by 1% at levels 1–4, 2% at 5–9 and 3% at 10.'],
 145:['Permanenter Attributbonus ohne Auslöser. Keine direkten Abwehrboni, Aktivierungskosten, Castzeit oder Cooldown.','Permanent attributes without a trigger. No direct defense bonus, activation cost, cast time or cooldown.'],
 60:['Direkte MP-Regeneration auf Stufen 1/3/5/7/9 jeweils zusätzlich +8, maximal +40 je Tick.','Direct Mana regeneration increases by 8 at levels 1/3/5/7/9, reaching +40 per tick.'],
 208:['Keine Aktivierungskosten, Castzeit oder Cooldown.','No activation cost, cast time or cooldown.'],
 143:['Je Stufe 1 % Chance, einen neu angewendeten Fluch abzuwehren, maximal 10 %. Direkte M-Abwehr: +6 auf Stufe 1, +4 je weiterer Stufe bis +42. Entfernt keine bestehenden Flüche; konkrete Flucharten noch offen.','Each level grants 1% chance to resist a newly applied curse, up to 10%. Direct magical defense starts at +6, adding 4 per additional level to +42. Does not remove existing curses; specific curse types remain pending.'],
 4:['Keine Stärke- oder Vitalitätsboni. Keine Aktivierungskosten, Castzeit oder Cooldown.','No Strength or Vitality bonus, activation cost, cast time or cooldown.'],
 81:['Eine einzige lernbare Stufe. Keine Aktivierungskosten, Castzeit oder Cooldown.','One learnable level. No activation cost, cast time or cooldown.'],
 10:['Keine Aktivierungskosten, Castzeit oder Cooldown.','No activation cost, cast time or cooldown.'],
 28:['Zusätzlich je Stufe +1 M-Abwehr und +1 Blockpunkt, maximal +10 jeweils. Block ist ein Punktewert, keine Prozentchance.','Also grants +1 magical defense and +1 Block rating per level, reaching +10 each. Block is a rating, not a percentage.'],
 141:['Zusätzlich je Stufe +2 Blockpunkte, maximal +20. Je Stufe 1 % der aktuellen gesamten Vitalität als zusätzliche Stärke, maximal 10 %. Ausrüstung und aktive Vitalitätsboni zählen mit. Vitalität wird nicht abgezogen, intern keine Rundung.','Also grants +2 Block rating per level, up to +20. Each level grants 1% of current total Vitality as additional Strength, up to 10%. Includes equipment and active Vitality bonuses, without consuming Vitality or rounding internally.'],
 116:['Direkter M-Angriff +2 je Stufe, maximal +20. Zusätzlich +1 Glück ab Stufe 5, insgesamt +3 auf Stufe 10. Kein fester Intelligenzbonus.','Direct magical attack +2 per level, up to +20. Also +1 Luck from level 5, totaling +3 at level 10. No fixed Intelligence bonus.'],
 259:['Zusätzlich je Stufe 0,6 % mehr gesamte Mana-Regeneration, maximal 3 %, nach flachen Boni und Willenskraftumrechnung. Kein fester Willenskraftbonus.','Also increases total Mana regeneration by 0.6% per level, up to 3%, after flat bonuses and Wisdom conversion. No fixed Wisdom bonus.'],
 187:['Auf jeder gelernten Stufe konstant +5 Punkte Angriffsgeschwindigkeit. Keine Aktivierungskosten, Castzeit oder Cooldown.','A constant +5 attack speed rating at every learned level. No activation cost, cast time or cooldown.']
};
const changes=plan.maximumAttributeReplacements.map(p=>{
 const before=catalog.find(s=>s.nr===p.nr),skill=structuredClone(before);assert.equal(skill.type,'passive');
 skill.statScaling??={};
 for(const key of keys){delete skill[key];delete skill.statScaling[key];delete skill.statBonusUnits?.[key];delete skill.statBonusTargets?.[key];}
 for(const [key,max]of Object.entries(p.attributes)){
  const amount=max/skill.maxSkillLv;skill[key]=amount;skill.statScaling[key]={type:'linear',base:amount,perLevel:amount};
 }
 if(p.nr===145)for(const key of ['pdef','mdef']){delete skill[key];delete skill.statScaling[key];}
 const description=lang=>{
  const index=lang==='de'?0:1;
  const per=Object.entries(p.attributes).map(([k,v])=>'+'+(v/skill.maxSkillLv).toLocaleString(lang==='de'?'de-DE':'en-US')+' '+names[k][index]).join(', ');
  const max=Object.entries(p.attributes).map(([k,v])=>'+'+v+' '+names[k][index]).join(', ');
  const first=lang==='de'?`Dauerhafter Attributanteil: je gelernter Stufe ${per}; auf Stufe ${skill.maxSkillLv} insgesamt ${max}. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten.`:`Permanent attribute component: ${per} per learned level; at level ${skill.maxSkillLv}, ${max} total. This component always applies independently of any triggered effects.`;
  return first+' '+(extras[p.nr]?.[index]??before['description_'+lang]);
 };
 skill.description_de=description('de');skill.description_eng=description('eng');
 delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
 return {before,skill,attributes:p.attributes};
});
for(const {before,skill,attributes}of changes){
 await new SkillDataModel(skill).validate();assert.equal(skill.maxSkillLv,before.maxSkillLv);assert.deepEqual(skill.charClass,before.charClass);
 assert.deepEqual(skill.effects,before.effects);assert.deepEqual(skill.attributeConversionBonus,before.attributeConversionBonus);
 for(let level=1;level<=skill.maxSkillLv;level++){
  const r=resolveSkillAtLevel(skill,level),old=resolveSkillAtLevel(before,level);
  for(const key of keys)assert.ok(Math.abs((r[key]??0)-(attributes[key]??0)*level/skill.maxSkillLv)<1e-9);
  for(const [key,value]of Object.entries(old))if(typeof value==='number'&&!keys.includes(key)&&!(skill.nr===145&&['pdef','mdef'].includes(key)))assert.equal(r[key],value,skill.nr+' '+key+' level '+level);
 }
}
if(!process.argv.includes('--apply'))console.log('Preview verified: 18 passive attribute changes, every rank checked, effects/other numeric values preserved.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:changes.map(c=>c.skill.nr)}}).toArray();assert.equal(stored.length,changes.length);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-passive-attribute-budget-'+Date.now();await fs.mkdir(backup,{recursive:true});
 await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');await fs.writeFile(backup+'/catalog.json',JSON.stringify(catalog,null,2)+'\n');await fs.writeFile(backup+'/approved-audit.json',JSON.stringify(audit,null,2)+'\n');
 for(const {skill}of changes){
  const live=stored.find(s=>s.nr===skill.nr),fields=structuredClone(skill);delete fields._id;
  const update={$set:fields},unset=Object.fromEntries([...keys,'pdef','mdef'].filter(k=>Object.hasOwn(live,k)&&!Object.hasOwn(fields,k)).map(k=>[k,'']));if(Object.keys(unset).length)update.$unset=unset;
  const result=await col.updateOne(live,update);assert.equal(result.matchedCount,1);
  const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);
 }
 await fs.writeFile('data/balancing/passive-attribute-budget-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,pointDelta:0,maximumAttributeReplacements:plan.maximumAttributeReplacements,expectedRows:plan.rows,progression:'Each fixed attribute scales linearly from maximum / learned-rank count to the approved maximum. Unmentioned effects and active self buffs unchanged.'},null,2)+'\n');
 console.log('Verified all 18 passive database updates.');
}catch(error){console.error('Passive attribute update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}

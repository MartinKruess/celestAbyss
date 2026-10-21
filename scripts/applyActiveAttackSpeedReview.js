import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const norm=v=>JSON.parse(JSON.stringify(v));
try {
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,changes=[];
 for(const [nr,base,last,text] of [
  [148,0,.1,'Eigenbuff für 300 Sekunden. Gewährt 0 bis 10 Punkte Angriffsgeschwindigkeit über 10 Stufen und 2 bis 11 Ambush.'],
  [174,.05,.1,'Eigenbuff für 60 Sekunden. Gewährt 5 bis 10 Punkte Angriffsgeschwindigkeit über 10 Stufen und 3 bis 7,5 Stärke.'],
  [223,.1,.15,'Gruppenbuff für 1800 Sekunden. Gewährt 10 bis 15 Punkte Angriffsgeschwindigkeit über 3 Stufen und 10 bis 15 Prozent Laufgeschwindigkeit.'],
  [189,0,.05,'Eigenbuff für 600 Sekunden. Gewährt 0 bis 5 Punkte Angriffsgeschwindigkeit über 5 Stufen und 2 bis 5 Prozent Laufgeschwindigkeit.'],
  [238,0,.2,'Eigenbuff mit 10 Stufen. Gewährt 0 bis 20 Punkte Angriffsgeschwindigkeit und 1 bis 10 Ambush. Die Dauer steigt von 11 auf 20 Sekunden.']
 ]) {
  const before=await col.findOne({nr});assert.ok(before);
  const skill=norm(before);skill.atkSpeed=base;skill.statScaling.atkSpeed={type:'linear',base,perLevel:(last-base)/(skill.maxSkillLv-1)};
  // Keep existing resource costs, timing and non-speed mechanics in the description.
  skill.description_de=text+' '+before.description_de.slice(before.description_de.indexOf(nr===174?'Mana 73':nr===238?'Cooldown 120':'Mana-Kosten'));
  if(nr===189)skill.description_de=text+' Cooldown 60 Sekunden. Zusatzeffekt auf Stufe 5: Solange dieser Buff und Attentäter gleichzeitig aktiv sind, stellt jeder eigene Auto-Attack 12 Mana wieder her. Begleiterangriffe zählen nicht. Mana-Kosten 43 auf Stufe 1, plus 16 je weiterer Stufe bis 107. Castzeit 0,3 Sekunden.';
  const english={148:'Self buff lasting 300 seconds. Grants 0 to 10 attack speed rating points and 2 to 11 Ambush across 10 levels. Mana cost 110 to 256. Instant activation; cooldown 60 seconds.',174:'Self buff lasting 60 seconds. Grants 5 to 10 attack speed rating points and 3 to 7.5 Strength across 10 levels. Mana cost 73 plus 41 per additional level, reaching 442. Cast time 0.3 seconds; cooldown 300 seconds.',223:'Group buff lasting 1800 seconds. Grants 10 to 15 attack speed rating points and 10 to 15 percent movement speed across 3 levels. Mana cost 63 plus 23 per additional level, reaching 109. Cast time 0.4 seconds; cooldown 60 seconds.',189:'Self buff lasting 600 seconds. Grants 0 to 5 attack speed rating points and 2 to 5 percent movement speed across 5 levels. At level 5, each successful own basic attack restores 12 Mana while Assassin is also active; companion attacks do not count. Mana cost 43 plus 16 per additional level, reaching 107. Cast time 0.3 seconds; cooldown 60 seconds.',238:'Self buff with 10 levels. Grants 0 to 20 attack speed rating points and 1 to 10 Ambush. Duration increases from 11 to 20 seconds. Cooldown 120 seconds; cast time 0.1 seconds. No extra or double basic attack hits. While Heart of the Traitor at level 5 is also active, each own basic attack restores 12 Mana. Mana cost increases linearly from 67 to 211.'};
  skill.description_eng=english[nr];
  delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
  await new SkillDataModel(skill).validate();
  assert.ok(Math.abs(resolveSkillAtLevel(skill,1).atkSpeed-base)<1e-8);assert.ok(Math.abs(resolveSkillAtLevel(skill,skill.maxSkillLv).atkSpeed-last)<1e-8);
  changes.push({before:norm(before),skill,id:before._id});
 }
 const backup='data/balancing/history/before-active-attack-speed-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(changes.map(c=>c.before),null,2)+'\n');
 for(const c of changes){const set={...c.skill};delete set._id;await col.updateOne({_id:c.id},{$set:set});assert.deepEqual(norm(await col.findOne({_id:c.id})),c.skill);}
 await fs.writeFile('data/balancing/active-attack-speed-decision.json',JSON.stringify({status:'appliedAndVerified',backup,changes:changes.map(({before,skill})=>({before,skill}))},null,2)+'\n');console.log('Five active attack speed changes verified.');
}catch(e){console.error('Active speed update failed ('+e.name+').');process.exitCode=1;}finally{await mongoose.disconnect();}

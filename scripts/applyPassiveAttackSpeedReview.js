import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const norm = value => JSON.parse(JSON.stringify(value));
try {
  assert.equal(process.env.MONGODB_DB_NAME, 'celestabyss_dev');
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, {dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
  const collection=SkillDataModel.collection;
  const changes=[];
  for(const nr of [119,177,187,201]) {
    const before=await collection.findOne({nr});
    assert.ok(before);
    const skill=norm(before);
    if(nr===201) {
      delete skill.atkSpeed;
      delete skill.statScaling.atkSpeed;
      delete skill.statBonusUnits.atkSpeed;
      skill.description_de='Waffentraining verbessert dauerhaft deine allgemeinen Waffenfertigkeiten. Gewährt je gelernter Stufe 5 physischen und 5 magischen Angriff, bis zu jeweils 100 auf Stufe 20. Gewährt keine Angriffsgeschwindigkeit.';
      skill.description_eng='Weapon Training permanently improves your general weapon proficiency. Each learned level grants 5 physical attack and 5 magical attack, reaching 100 each at level 20. Does not grant attack speed.';
    }
    if(nr===187) {
      skill.atkSpeed=0.05;
      skill.statScaling.atkSpeed={type:'linear',base:0.05,perLevel:0};
      skill.description_de='Permanentes passives Training mit 10 Stufen. Gewährt auf jeder gelernten Stufe insgesamt 5 Punkte Angriffsgeschwindigkeit. Zusätzlich erhältst du 1 Geschick je gelerntem Skilllevel, bis zu 10 auf Stufe 10. Keine Aktivierungskosten, Zauberzeit oder Abklingzeit.';
      skill.description_eng='Permanent passive training with 10 levels. Grants a total of 5 attack speed rating points at every learned level. Also grants 1 Dexterity per learned skill level, reaching 10 at level 10. No activation cost, cast time or cooldown.';
    }
    if(nr===119) {
      skill.description_de=skill.description_de.replace('5 Prozent Angriffsgeschwindigkeit','5 Punkte Angriffsgeschwindigkeit');
      skill.description_eng=skill.description_eng.replace('5 percent attack speed','5 attack speed rating points');
    }
    if(nr===177) {
      skill.description_de=skill.description_de.replace('+10 % Angriffsgeschwindigkeit','+10 Punkte Angriffsgeschwindigkeit').replace('+20 % Angriffsgeschwindigkeit','+20 Punkte Angriffsgeschwindigkeit').replaceAll('Lauftempo','Laufgeschwindigkeit');
      skill.description_eng=skill.description_eng.replace('+10% attack speed','+10 attack speed rating points').replace('+20% attack speed','+20 attack speed rating points');
    }
    delete skill.levelProgression;
    skill.levelProgression=buildSkillProgression(skill);
    await new SkillDataModel(skill).validate();
    for(let level=1;level<=skill.maxSkillLv;level++) {
      const resolved=resolveSkillAtLevel(skill,level);
      if(nr===201) { assert.equal(resolved.atkSpeed,undefined); assert.equal(resolved.patk,5*level); }
      if(nr===187) assert.equal(resolved.atkSpeed,0.05);
    }
    changes.push({before:norm(before),skill,id:before._id});
  }
  const backup='data/balancing/history/before-passive-attack-speed-'+Date.now();
  await fs.mkdir(backup,{recursive:true});
  await fs.writeFile(backup+'/skills.json',JSON.stringify(changes.map(c=>c.before),null,2)+'\n');
  for(const change of changes) {
    const set={...change.skill}; delete set._id;
    const update={$set:set};
    if(change.skill.nr===201) update.$unset={atkSpeed:''};
    await collection.updateOne({_id:change.id},update);
    assert.deepEqual(norm(await collection.findOne({_id:change.id})),change.skill);
  }
  await fs.writeFile('data/balancing/passive-attack-speed-decision.json',JSON.stringify({status:'appliedAndVerified',backup,internalUnits:'Legacy fractions retained; 0.05 means 5 raw rating points, not 5 percent final frequency',changes:changes.map(({before,skill})=>({before,skill}))},null,2)+'\n');
  console.log('Verified passive attack speed changes and German/English descriptions; backup '+backup);
} catch(error) {console.error('Passive attack speed update failed ('+error.name+'): '+(error instanceof assert.AssertionError?error.message:'details omitted'));process.exitCode=1;}
finally {await mongoose.disconnect();}

import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';

try {
  assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
  await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
  const col=SkillDataModel.collection, before=await col.findOne({nr:160});
  assert(before);
  const s=structuredClone(before);
  delete s._id;
  for(const key of ['patk','penetration','statBonusUnits','levelProgression','durationScaling']) delete s[key];
  s.skillName_de='Stolz des Kriegers';
  s.skillName_eng="Warrior's Pride";
  s.maxSkillLv=10;
  s.dur=300;
  s.str=1;
  s.vita=1;
  s.statScaling={str:{type:'linear',base:1,perLevel:1},vita:{type:'linear',base:1,perLevel:1}};
  s.description_de='Selbstbuff. Gewährt je Skillstufe +1 Stärke und +1 Vitalität, bis zu jeweils +10 auf Stufe 10. Dauer 300 Sekunden, Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden. Aktivierungskosten 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana auf Stufe 10 vor Vergünstigungen.';
  s.description_eng='Self-buff granting +1 Strength and +1 Vitality per skill level, reaching +10 each at level 10. Lasts 300 seconds. Cooldown: 60 seconds. Fixed cast time: 0.1 seconds. Costs 50 Mana at level 1 plus 13 per additional level, reaching 167 Mana at level 10 before discounts.';
  s.levelProgression=buildSkillProgression(s);
  await new SkillDataModel(s).validate();
  assert.deepEqual(s.charClass,before.charClass);
  for(let level=1;level<=10;level++) {
    const r=resolveSkillAtLevel(s,level);
    assert.equal(r.str,level); assert.equal(r.vita,level);
    assert.equal(r.dur,300); assert.equal(r.cd,60);
    assert.equal(r.mana,50+13*(level-1));
    assert.equal(r.patk,undefined); assert.equal(r.penetration,undefined);
  }
  const backup='data/balancing/history/before-warrior-pride-'+Date.now();
  await fs.mkdir(backup,{recursive:true});
  await fs.writeFile(backup+'/skill.json',JSON.stringify(before,null,2)+'\n');
  const unset=Object.fromEntries(Object.keys(before).filter(k=>k!=='_id'&&!(k in s)).map(k=>[k,'']));
  await col.updateOne({_id:before._id},{$set:s,$unset:unset});
  const actual=await col.findOne({_id:before._id}); delete actual._id;
  assert.deepEqual(actual,s);
  await fs.writeFile('data/balancing/warrior-pride-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),nr:160,backup,skill:s},null,2)+'\n');
  console.log('Verified Warrior Pride: ten levels, +1 STR/+1 VIT per level, 300 seconds; ownership unchanged.');
} catch(e) {
  console.error('Warrior Pride update failed ('+e.name+'); credentials omitted.');
  if(['AssertionError','ValidationError'].includes(e.name)) console.error(e.message);
  process.exitCode=1;
} finally { await mongoose.disconnect(); }

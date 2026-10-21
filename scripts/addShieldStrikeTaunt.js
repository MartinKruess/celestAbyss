import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
  assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
  await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
  const col=SkillDataModel.collection,b=await col.findOne({nr:94});assert(b);
  const s=structuredClone(b);delete s._id;
  const effect={key:'shield-strike-taunt',type:'control',controlKind:'taunt',target:'enemy',minimumSkillLevel:20,durationSeconds:2,durationStatus:'defined',actionRestrictionsStatus:'defined',forcedTarget:'caster',forcedAction:'basicAttack',preventsSkillUse:true,overridesCurrentTarget:true,appliesInPvp:true,requiresSuccessfulHit:true};
  s.effects=[...(s.effects??[]).filter(e=>e.key!==effect.key),effect];
  s.description_de=s.description_de.replace('Keine Benommenheit oder zusätzliche Kontrollwirkung.','Ab Skillstufe 20 löst ein erfolgreicher Treffer Verspotten für 2 Sekunden aus: Das getroffene Ziel muss unabhängig von seinem bisherigen Fokus den Ritter mit Auto-Attacks angreifen und kann währenddessen keine Skills einsetzen. Gilt gegen Monster und Spieler im PvP.');
  s.description_eng=s.description_eng.replace('No daze or additional control effect.','From skill level 20, a successful hit taunts the target for 2 seconds. The target must use basic attacks against the caster regardless of its previous target and cannot use skills during this effect. Applies to monsters and players in PvP.');
  const model=new SkillDataModel(s);await model.validate();
  const validatedEffect=model.toObject().effects[0];
  for(const [key,value] of Object.entries(effect)) assert.deepEqual(validatedEffect[key],value);
  const backup='data/balancing/history/before-shield-strike-taunt-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(b,null,2)+'\n');
  await col.updateOne({_id:b._id},{$set:{effects:s.effects,description_de:s.description_de,description_eng:s.description_eng}});
  const actual=await col.findOne({_id:b._id});delete actual._id;assert.deepEqual(actual,s);
  await fs.writeFile('data/balancing/shield-strike-taunt-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:94,effect,scope:'Control definition added; damage, Mana, cooldown and animation unchanged. Incoming-combat simulation is not implemented by this data change.'},null,2)+'\n');
  console.log('Verified Shield Strike taunt at level 20: 2s forced basic attacks against caster, including PvP.');
}catch(e){console.error('Taunt update failed ('+e.name+'); credentials omitted.');if(['AssertionError','ValidationError'].includes(e.name))console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}

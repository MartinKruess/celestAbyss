import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {usesFixedSelfBuffCast,selfBuffManaCurve} from '../services/selfBuffRules.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,all=await col.find({}).toArray(),before=all.filter(usesFixedSelfBuffCast),changes=[];
 for(const original of before){
  const skill=structuredClone({...original,_id:undefined});delete skill._id;delete skill.levelProgression;
  skill.resourceCosts??=[];const cost=skill.resourceCosts.find(c=>c.resource==='mana');
  if(cost){assert.equal(cost.unit,'flat');cost.scaling=selfBuffManaCurve();}else skill.resourceCosts.push({resource:'mana',reference:'maxMana',unit:'flat',scaling:selfBuffManaCurve()});
  skill.mana=50;if(skill.manaCostScaling)skill.manaCostScaling=selfBuffManaCurve();
  skill.manaPricing={category:'selfbuff',basis:'skillLevel',usesCharacterAttack:false,version:1};
  skill.description_de=skill.description_de.replace(/(?:Die )?Mana(?:-Kosten|kosten)[^!?]*?\.(?=\s+[A-Za-zÄÖÜäöüß]|$)/g,'').replace(/\s{2,}/g,' ').trim();
  skill.description_eng=skill.description_eng.replace(/Mana costs?[^!?]*?\.(?=\s+[A-Za-z]|$)/gi,'').replace(/\s{2,}/g,' ').trim();
  skill.description_de+=` Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal ${50+13*(skill.maxSkillLv-1)} auf Stufe ${skill.maxSkillLv}, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.`;
  skill.description_eng+=` Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching ${50+13*(skill.maxSkillLv-1)} at level ${skill.maxSkillLv}, before discounts. Ongoing Mana drain is calculated separately.`;
  skill.levelProgression=buildSkillProgression(skill);
  await new SkillDataModel(skill).validate();
  for(let level=1;level<=skill.maxSkillLv;level++){const resolved=resolveSkillAtLevel(skill,level);assert.equal(resolved.mana,50+13*(level-1));assert.equal(resolved.castTimeSeconds,.1);}
  assert.deepEqual(skill.effects,original.effects,'Ongoing effects and drains retained');
  assert.deepEqual(skill.statScaling,original.statScaling);assert.deepEqual(skill.cooldownScaling,original.cooldownScaling);assert.equal(skill.cd,original.cd);assert.deepEqual(skill.durationScaling,original.durationScaling);assert.equal(skill.dur,original.dur);
  changes.push({before:original,skill});
 }
 const backup='data/balancing/history/before-self-buff-mana-rule-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(before,null,2)+'\n');
 for(const {before:original,skill}of changes){await col.updateOne({_id:original._id},{$set:skill});const actual=await col.findOne({_id:original._id});delete actual._id;const expected={...original,...skill};delete expected._id;assert.deepEqual(actual,expected);}
 await fs.writeFile('data/balancing/self-buff-mana-rule-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,rule:{base:50,perAdditionalLevel:13,basis:'learnedOrAuthorizedEffectiveSkillLevel',castTimeSeconds:.1},scope:'Currently assigned selfbuffs and Energy Burst 34. Provoke is an aggro action and excluded. Public group buffs and unassigned historical definitions untouched. Ongoing Mana drain untouched. Existing permanent discounts still apply.',changes},null,2)+'\n');
 const application=JSON.parse(await fs.readFile('data/balancing/self-buff-alignment-application.json','utf8'));application.status='appliedAndVerified';application.mana='Separate verified self-buff activation rule: 50 +13 per additional level, before discounts. See self-buff-mana-rule-decision.json.';await fs.writeFile('data/balancing/self-buff-alignment-application.json',JSON.stringify(application,null,2)+'\n');
 console.log('Verified '+changes.length+' self-buff definitions: Mana 50 +13 per additional level, cast .1 seconds; drains and groups unchanged.');
}catch(e){console.error('Self-buff Mana update failed ('+e.name+'); credentials omitted.');if(['AssertionError','ValidationError'].includes(e.name))console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}

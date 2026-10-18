import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {getPath,curveValue} from '../services/skillProgression.js';
const norm=v=>JSON.parse(JSON.stringify(v));
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.find({}).sort({nr:1}).toArray();
 const changes=[],pending=[];let checked=0;
 for(const skill of before){
  assert.ok(!skill.levelProgression,'Already migrated');
  const progression=buildSkillProgression(norm(skill)),set={levelProgression:progression};
  if(skill.nr===222){set.skillLevelGrant={levels:1,targetCount:1,allowAboveLearnableMax:true,excludesSelf:true,attributeCost:{str:20,vita:20,int:20,wis:20,agi:20,dex:20}};set.description_de=skill.description_de.replace('Auswahl und zulässige Höchststufe des verbesserten Skills werden noch festgelegt.','Erhöht genau einen ausgewählten, bereits gelernten eigenen Skill um eine effektive Stufe, auch über dessen normale Lerngrenze hinaus. Vergessener Zauber kann sich nicht selbst erhöhen. Die gelernte Stufe des Zielskills bleibt unverändert.');set.description_eng=skill.description_eng.replace('Selection and the permitted maximum level of the upgraded skill remain to be defined.','Grants one effective level to one selected, already learned own skill, including above its normal learning cap. Cannot target Forgotten Spell itself. The target skill learned level remains unchanged.');}
  const candidate={...norm(skill),...set};await new SkillDataModel(candidate).validate();
  for(let level=1;level<=skill.maxSkillLv;level++){
   const resolved=resolveSkillAtLevel(candidate,level);
   for(const entry of progression.rules){const old=curveValue(getPath(skill,entry.path),level),current=curveValue(getPath(resolved,entry.path),level);assert.ok(Math.abs(old-current)<1e-7,`${skill.nr}:${entry.path.join('.')}:${level}: ${old} != ${current}`);checked++;}
  }
  for(const extra of [1,5])try{resolveSkillAtLevel({...candidate,maxSkillLv:skill.maxSkillLv+extra},skill.maxSkillLv+extra);}catch(e){pending.push({nr:skill.nr,name:skill.skillName_de,extraLevels:extra,reason:e.message});}
  changes.push({before:skill,set});
 }
 const dir='data/balancing/history/before-skill-progression-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skills.json',JSON.stringify(before,null,2)+'\n');
 await mongoose.connection.transaction(async session=>{for(const change of changes){assert.deepEqual(norm(await col.findOne({_id:change.before._id},{session})),norm(change.before));await col.updateOne({_id:change.before._id},{$set:change.set},{session});}});
 for(const change of changes)assert.deepEqual(norm(await col.findOne({_id:change.before._id})),norm({...change.before,...change.set}));
 const summary={status:'appliedAndVerified',backup:dir,skills:changes.length,rules:changes.reduce((n,c)=>n+c.set.levelProgression.rules.length,0),checkedExistingValues:checked,derivedManaRules:changes.flatMap(c=>c.set.levelProgression.rules).filter(r=>r.rule.kind==='outputCost').length,pendingExtensions:pending};
 await fs.writeFile('data/balancing/skill-progression-migration.json',JSON.stringify(summary,null,2)+'\n');console.log(JSON.stringify(summary));
}catch(e){console.error('Skill progression migration failed ('+e.name+'): '+(e.name==='AssertionError'?e.message:'details omitted'));process.exitCode=1;}
finally{await mongoose.disconnect();}

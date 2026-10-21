import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { ClassTemplateModel } from '../models/classTemplateSchema.js';

const regeneration = { baseManaPerTick:25, baseHealthPerTick:12, tickIntervalSeconds:null, status:'intervalPending' };
try {
  if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Requires development database');
  const templates = JSON.parse(await fs.readFile('data/class-templates.json','utf8'));
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName:process.env.MONGODB_DB_NAME, autoIndex:false, serverSelectionTimeoutMS:10000 });
  const keys = templates.map(x=>x.key);
  const before = await ClassTemplateModel.find({key:{$in:keys}}).lean();
  if (before.length !== 13 || keys.length !== 13) throw new Error('Unexpected class count');
  await fs.mkdir('data/balancing',{recursive:true});
  const backupPath='data/balancing/class-regeneration-before.json';
  try { await fs.writeFile(backupPath, JSON.stringify(before.map(x=>({key:x.key,regeneration:x.regeneration??null})),null,2)+'\n',{flag:'wx'}); } catch(e) { if(e.code!=='EEXIST')throw e; }
  await ClassTemplateModel.updateMany({key:{$in:keys}},{$set:{regeneration}},{runValidators:true});
  const after = await ClassTemplateModel.find({key:{$in:keys}}).lean();
  if(after.some(x=>x.regeneration.baseManaPerTick!==25||x.regeneration.baseHealthPerTick!==12||x.regeneration.tickIntervalSeconds!==null))throw new Error('Read-back mismatch');
  for(const c of templates)c.regeneration={...regeneration};
  await fs.writeFile('data/class-templates.json',JSON.stringify(templates,null,2)+'\n');
  const baseline=JSON.parse(await fs.readFile('data/balancing/class-baselines.json','utf8'));
  for(const c of baseline.classes)c.regeneration={...regeneration};
  await fs.writeFile('data/balancing/class-baselines.json',JSON.stringify(baseline,null,2)+'\n');
  await fs.writeFile('data/balancing/regeneration-model.json',JSON.stringify({regeneration, wisdomManaPerTick:{factor:1,status:'provisionalProposal'},percentageBonuses:{status:'skillDependentNotAutomaticallyGranted'},combatRules:'pending',healerWisdomMagicalAttack:{enabled:true,factor:null,status:'factorPending',scope:'Healer / Priest / Erzbischof only'},note:'Definitions only, no runtime ticker implemented; 12 HP and 25 Mana are per tick, not per second.'},null,2)+'\n');
  console.log('Verified all 13 classes: 25 Mana and 12 HP per tick saved and local definitions synchronized. Tick interval remains unset.');
} catch(e) {console.error(`Regeneration update failed (${e.name}); credentials omitted.`);process.exitCode=1;}
finally {await mongoose.disconnect();}

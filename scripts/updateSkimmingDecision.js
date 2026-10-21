import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
const description_de = 'Abschöpfen erhöht deine Stärke und Vitalität. +2 Stärke und +1 Vitalität pro Skilllevel.';
const description_eng = 'Skimming increases your Strength by 2 and Vitality by 1 per skill level.';
const changes = { int: 0, vic: 0, str: 2, vita: 1, description_de, description_eng };
try {
  if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Requires development DB');
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName: process.env.MONGODB_DB_NAME, serverSelectionTimeoutMS: 10000, autoIndex: false });
  const current = await SkillDataModel.findOne({ nr: 4, skillName_de: 'Abschöpfen' });
  if (!current) throw new Error('Missing skill'); console.log(JSON.stringify({ str:current.str,vita:current.vita,int:current.int,vic:current.vic }));
  const already = current.str === 2 && current.vita === 1 && !current.int && !current.vic;
  if (!already && !(current.int === 2 && current.vic === 1 && [0,2].includes(current.str ?? 0) && [0,1].includes(current.vita ?? 0))) throw new Error('Unexpected current effects');
  const result = await SkillDataModel.updateOne({ _id: current._id, int: current.int, vic: current.vic, str: current.str, vita: current.vita }, { $set: { str:2, vita:1, description_de, description_eng }, $unset: { int:1, vic:1 } }, { runValidators: true });
  if (result.matchedCount !== 1) throw new Error('Concurrent change');
  const saved = await SkillDataModel.findById(current._id).lean();
  for (const [key,value] of Object.entries(changes)) if ((value === 0 ? (saved[key] ?? 0) : saved[key]) !== value) throw new Error('Read-back mismatch');
  const file = new URL('./skilldata.js', import.meta.url);
  let source = await fs.readFile(file, 'utf8');
  const start = source.indexOf('  S_Name_eng: "Skimming",');
  const end = source.indexOf('}, {', start);
  if (start < 0 || end < 0) throw new Error('Missing seed block');
  let block = source.slice(start,end);
  block = block.replace(/S_Description_eng:\s*"[^"]*"/, 'S_Description_eng: ' + JSON.stringify(description_eng)).replace(/S_Description_de:\s*"[^"]*"/, 'S_Description_de: ' + JSON.stringify(description_de));
  for (const [key,value] of Object.entries({Int:0,Vic:0,Str:2,Vita:1})) block = block.replace(new RegExp('S_'+key+': \\d+'), 'S_'+key+': '+value);
  await fs.writeFile(file, source.slice(0,start)+block+source.slice(end));
  const reviewURL = new URL('../data/skill-description-review.json', import.meta.url);
  const review = JSON.parse(await fs.readFile(reviewURL,'utf8'));
  const issue = review.majorIssues.find(entry => entry.nr === 4);
  issue.status = 'resolved'; issue.decision = { str:2, vita:1, int:0, vic:0, scaling:'perSkillLevel', classAssignment:'unchanged' };
  await fs.writeFile(reviewURL, JSON.stringify(review,null,2)+'\n');
  const auditURL = new URL('../data/skill-review.json', import.meta.url);
  const audit = JSON.parse(await fs.readFile(auditURL,'utf8'));
  for (const entry of audit.reviews) if (entry.database?._id === String(saved._id)) { entry.database = saved; entry.effectDecision = issue.decision; }
  await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
  console.log('Verified Skimming: Strength +2, Vitality +1 per skill level; seed and review synchronized. Classes unchanged.');
} catch(error) { console.error(`Skill decision failed (${error.name}); credentials omitted.`); if (['Missing skill','Unexpected current effects','Concurrent change','Read-back mismatch','Missing seed block','Requires development DB'].includes(error.message)) console.error(error.message); process.exitCode=1; }
finally { await mongoose.disconnect(); }





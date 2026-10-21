import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { SkillDataModel } from '../models/skillSchema.js';
const statBonusUnits = { str:'fraction', int:'fraction' };
try {
  if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw new Error('Requires development DB');
  await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, { dbName:process.env.MONGODB_DB_NAME, serverSelectionTimeoutMS:10000, autoIndex:false });
  const current = await SkillDataModel.findOne({ nr:6, skillName_de:'Adrenalin' }).lean();
  if (!current || current.int !== 0.01 || ![0,0.01].includes(current.str ?? 0)) throw new Error('Unexpected effects');
  const result = await SkillDataModel.updateOne({ _id:current._id, int:current.int, str:current.str }, { $set:{ str:0.01, int:0.01, statBonusUnits } }, {runValidators:true});
  if (result.matchedCount !== 1) throw new Error('Concurrent change');
  const saved = await SkillDataModel.findById(current._id).lean();
  if (saved.str !== 0.01 || saved.int !== 0.01 || saved.statBonusUnits.str !== 'fraction' || saved.statBonusUnits.int !== 'fraction') throw new Error('Read-back mismatch');
  const sourceURL = new URL('./skilldata.js',import.meta.url);
  const source = await fs.readFile(sourceURL,'utf8');
  const start = source.indexOf('  S_Name_eng: "Adrenaline",'); const end=source.indexOf('}, {',start);
  if (start<0 || end<0) throw new Error('Missing source');
  let block=source.slice(start,end).replace(/S_Str: [\d.]+/, 'S_Str: 0.01');
  if (!block.includes('statBonusUnits:')) block=block.replace('  S_Thumbnail:', '  statBonusUnits: { str: "fraction", int: "fraction" },\n  S_Thumbnail:');
  await fs.writeFile(sourceURL,source.slice(0,start)+block+source.slice(end));
  const url=new URL('../data/skill-description-review.json',import.meta.url); const review=JSON.parse(await fs.readFile(url,'utf8'));
  const issue=review.majorIssues.find(entry=>entry.nr===6);
  issue.status='partiallyResolved'; issue.decision={str:0.01,int:0.01,statBonusUnits,scaling:'pending',balancingReview:true};
  issue.issue='Bestätigt: Strength und Intelligence jeweils +1 %, als Bruchteil 0.01 gespeichert. Skalierung pro Skilllevel und Balancing mit Gegenstücken noch offen.';
  await fs.writeFile(url,JSON.stringify(review,null,2)+'\n');
  const auditURL=new URL('../data/skill-review.json',import.meta.url); const audit=JSON.parse(await fs.readFile(auditURL,'utf8'));
  for (const entry of audit.reviews) if(entry.database?._id===String(saved._id)){entry.database=saved;entry.effectDecision=issue.decision;}
  await fs.writeFile(auditURL,JSON.stringify(audit,null,2)+'\n');
  console.log('Verified Adrenaline: Strength and Intelligence +1%, explicit fractional units. Level scaling pending.');
} catch(error){console.error(`Adrenaline update failed (${error.name}); credentials omitted.`);process.exitCode=1;}
finally {await mongoose.disconnect();}

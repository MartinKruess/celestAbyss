import 'dotenv/config';
import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';

const read = async path => JSON.parse(await fs.readFile(path,'utf8'));
const save = async (path,value) => fs.writeFile(path,JSON.stringify(value,null,2)+'\n');
const decisionPath = 'data/balancing/mace-training-decisions.json';
try {
  if (process.argv.includes('--apply')) {
    if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw Error('Development database required');
    const decision = await read(decisionPath);
    await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
    const col = SkillDataModel.collection;
    await mongoose.connection.transaction(async session => {
      for (const skill of decision.skills) {
        const existing = await col.findOne({nr:skill.nr},{session});
        if (existing) assert.equal(String(existing._id),skill._id);
        const record = {...skill,_id:new mongoose.Types.ObjectId(skill._id)};
        await col.replaceOne({_id:record._id},record,{upsert:true,session});
      }
    });
    for (const skill of decision.skills) {
      const actual = await col.findOne({nr:skill.nr});
      assert.deepEqual(JSON.parse(JSON.stringify(actual)),skill);
    }
    await save(decisionPath,{...decision,status:'appliedAndVerified'});
    console.log('Verified both mace training definitions in development database.');
  } else {
    const catalog = await read('data/skills.json');
    const base = catalog.find(s=>s.nr===132);
    const axe = catalog.find(s=>s.nr===26);
    assert.equal(base.skillName_eng,'Two-handed Mace Training');
    const existing = catalog.find(s=>s.skillName_eng==='Dual Mace Training');
    const dir = 'data/balancing/history/before-mace-training-'+Date.now();
    await fs.mkdir(dir,{recursive:true});
    for (const path of ['data/skills.json','data/skills.manifest.json','data/reports/class-skill-counts.json']) await fs.copyFile(path,dir+'/'+path.split('/').at(-1));
    const strength = structuredClone(axe.statScaling.str);
    const secondary = structuredClone(axe.statScaling.agi);
    const dual = {...base,_id:existing?._id??String(new mongoose.Types.ObjectId()),nr:existing?.nr??Math.max(...catalog.map(s=>s.nr))+1,skillName_de:'Streitkolbentraining',skillName_eng:'Dual Mace Training',charClass:['Shamane','High Elves'],str:2,int:1,statScaling:{str:strength,int:secondary},description_de:'Ermöglicht das Führen von zwei Einhand-Streitkolben. Permanentes Waffentraining: Auf Skilllevel 1 erhältst du 2 Stärke und 1 Intelligenz. Je weiterer Stufe steigt abwechselnd Stärke oder Intelligenz um 1, beginnend mit Stärke auf Stufe 2. Auf Stufe 10 insgesamt 7 Stärke und 5 Intelligenz. Die Boni gelten einmal für den Charakter, nicht pro Waffe. Keine Aktivierungskosten, Castzeit oder Cooldown.',description_eng:'Allows wielding two one-handed maces. Permanent weapon training: level 1 grants 2 Strength and 1 Intelligence. Each additional level alternately adds 1 Strength or Intelligence, starting with Strength at level 2. Level 10 grants 7 Strength and 5 Intelligence in total. Bonuses apply once to the character, not per weapon. No activation cost, cast time or cooldown.'};
    const druid = {...base,charClass:['Druide','Alchemist'],str:1,int:2,statScaling:{str:secondary,int:strength},description_de:'Verbessert dauerhaft deinen Umgang mit zweihändigen Streitkolben. Auf Skilllevel 1 erhältst du 1 Stärke und 2 Intelligenz. Je weiterer Stufe steigt abwechselnd Intelligenz oder Stärke um 1, beginnend mit Intelligenz auf Stufe 2. Auf Stufe 10 insgesamt 5 Stärke und 7 Intelligenz. Die Boni gelten einmal für den Charakter. Keine Aktivierungskosten, Castzeit oder Cooldown.',description_eng:'Permanently improves proficiency with two-handed maces. Level 1 grants 1 Strength and 2 Intelligence. Each additional level alternately adds 1 Intelligence or Strength, starting with Intelligence at level 2. Level 10 grants 5 Strength and 7 Intelligence in total. Bonuses apply once to the character. No activation cost, cast time or cooldown.'};
    for (const skill of [druid,dual]) await new SkillDataModel(skill).validate();
    const updated = catalog.filter(s=>s.nr!==132 && s.nr!==dual.nr).concat(druid,dual).sort((a,b)=>a.nr-b.nr);
    const counts = await read('data/reports/class-skill-counts.json');
    const shaman = counts.counts.find(c=>c.name==='Schamane / Hochelfe');
    shaman.skillNumbers = shaman.skillNumbers.map(nr=>nr===132?dual.nr:nr).sort((a,b)=>a-b);
    assert.equal(shaman.skillNumbers.length,shaman.total);
    counts.catalogCount = updated.length;
    counts.classified = counts.classified.filter(s=>s.nr!==132 && s.nr!==dual.nr);
    for (const skill of [druid,dual]) counts.classified.push({nr:skill.nr,id:skill._id,name:skill.skillName_de,classes:skill.charClass,category:'passive',activeDefensive:false});
    counts.classified.sort((a,b)=>a.nr-b.nr);
    await save('data/skills.json',updated);
    await save('data/reports/class-skill-counts.json',counts);
    const manifest = await read('data/skills.manifest.json');
    const body = await fs.readFile('data/skills.json','utf8');
    await save('data/skills.manifest.json',{...manifest,count:updated.length,sha256:createHash('sha256').update(body).digest('hex'),localModifiedAt:new Date().toISOString(),databaseSyncStatus:'maceTrainingPending'});
    await save(decisionPath,{status:'preparedLocallyDatabasePending',referenceSkill:26,backup:dir,skills:[druid,dual]});
    console.log('Prepared and validated separate Druid/Shaman mace trainings; database application pending.');
  }
} catch(error) { console.error('Mace training update failed ('+error.name+'); credentials omitted.'); process.exitCode=1; }
finally {await mongoose.disconnect();}

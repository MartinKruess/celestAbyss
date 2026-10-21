import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';

const penalties={str:-20,vita:-20,int:-20,wis:-20,agi:-20,dex:-20};
const removed=['amb','faith','vic','luck'];
const set={...penalties,
 description_de:'Verzichtet permanent auf jeweils 20 Stärke, Vitalität, Intelligenz, Willenskraft, Agilität und Geschick, um einen Skill deiner Wahl um eine Stufe zu erhöhen. Glück, Ambush, Faith und Victim werden nicht verringert. Vergessener Zauber hat eine Skillstufe und keine Levelskalierung. Permanenter passiver Skill ohne Mana-Kosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer. Auswahl und zulässige Höchststufe des verbesserten Skills werden noch festgelegt.',
 description_eng:'Permanently sacrifices 20 Strength, Vitality, Intelligence, Wisdom, Agility and Dexterity each to increase one chosen skill by one level. Luck, Ambush, Faith and Victim are not reduced. Forgotten Spell has one skill level and no level scaling. Permanent passive skill with no Mana cost, cast time, cooldown or limited duration. Selection and the permitted maximum level of the upgraded skill remain to be defined.'};
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection;
 const before=await col.findOne({nr:222});assert.ok(before);
 const expected={...before,...set};for(const key of removed)delete expected[key];
 await new SkillDataModel(expected).validate();
 const dir='data/balancing/history/before-forgotten-spell-attributes-'+Date.now();
 await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skill.json',JSON.stringify(before,null,2)+'\n');
 await col.updateOne({_id:before._id},{$set:set,$unset:Object.fromEntries(removed.map(key=>[key,'']))});
 const after=await col.findOne({_id:before._id});assert.deepEqual(after,expected);
 await fs.writeFile('data/balancing/forgotten-spell-attribute-decision.json',JSON.stringify({status:'appliedAndVerified',backup:dir,penalties,removed,skill:after},null,2)+'\n');
 console.log('Verified Forgotten Spell: six base attributes -20 each; Luck, Ambush, Faith and Victim penalties removed.');
}catch(error){console.error('Forgotten Spell update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}

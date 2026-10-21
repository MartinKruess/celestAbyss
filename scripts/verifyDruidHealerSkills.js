import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {targetedSkillModifiers} from '../services/targetedSkillPassives.js';
try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:'celestabyss_dev',autoIndex:false,serverSelectionTimeoutMS:10000});
 const catalog=await SkillDataModel.collection.find({}).toArray();
 const own=aliases=>catalog.filter(s=>s.isClassCore&&s.allowedRaces?.length?s.allowedRaces.includes('Aurora'):s.charClass?.some(c=>aliases.includes(c)));
 const druid=own(['Druide','Alchemist']),healer=own(['Healer','Priest']);assert.equal(druid.length,32);assert.equal(healer.length,32);
 assert.equal(new Set(druid.map(s=>s.nr)).size,32);assert.equal(new Set(healer.map(s=>s.nr)).size,32);
 for(const s of new Map([...druid,...healer].map(s=>[s.nr,s])).values())await new SkillDataModel(s).validate();
 const ice=catalog.find(s=>s.nr===30),rose=catalog.find(s=>s.nr===261),sylph=catalog.find(s=>s.nr===253),spirit=catalog.find(s=>s.nr===244),ban=catalog.find(s=>s.nr===220);
 for(const alias of ['Healer','Priest','Druide','Alchemist'])assert(ice.charClass.includes(alias));
 assert(druid.some(s=>s.nr===261));assert(!healer.some(s=>s.nr===261));assert.equal(rose.maxSkillLv,5);
 const modifiers=targetedSkillModifiers(catalog,[261],30);assert.equal(modifiers.extraFlatDamage,185);assert.equal(modifiers.manaMultiplier,1);assert.equal(modifiers.replacementSkillName_de,'Dornige Eisranken');
 assert.equal(targetedSkillModifiers(catalog,healer.filter(s=>s.type==='passive').map(s=>s.nr),30).extraFlatDamage,0);
 assert.equal(resolveSkillAtLevel(ice,10).mana,158);assert.equal(sylph.maxSkillLv,10);assert.equal(spirit.maxSkillLv,2);assert.equal(catalog.find(s=>s.nr===212).maxSkillLv,20);
 assert.equal(ban.effects.find(e=>e.controlKind==='spellSuppression').interruptsCurrentCast,true);
 const backup='data/balancing/history/verified-druid-healer-skills-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify([...new Map([...druid,...healer].map(s=>[s.nr,s])).values()],null,2)+'\n');
 const result={status:'verifiedAgainstMongoDB',generatedAt:new Date().toISOString(),backup,druid:{count:32,skillNumbers:druid.map(s=>s.nr)},healer:{count:32,skillNumbers:healer.map(s=>s.nr)},checks:{sharedIceThorns:true,thornedRoseDruidOnly:true,thornedRoseMaxBonus:185,iceThornsManaUnchanged:158,sylphLevels:10,natureSpiritLevels:2,skybreakerLevels:20,magicBanInterruptsCast:true},scope:'Read-only verification of existing development database. No skill assignments or values changed.'};await fs.writeFile('data/balancing/druid-healer-skill-verification.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
}catch(e){console.error('Verification failed ('+e.name+'); credentials omitted.');if(['AssertionError','ValidationError'].includes(e.name))console.error(e.message);process.exitCode=1;}finally{await mongoose.disconnect();}


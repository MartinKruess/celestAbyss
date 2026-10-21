import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const bases={226:{maxHealth:500,physicalAttack:100,physicalDefense:63,magicalDefense:52},237:{maxHealth:1000,magicalAttack:135,physicalDefense:90,magicalDefense:110},244:{maxHealth:500,magicalAttack:100,physicalDefense:45,magicalDefense:81}};
const changes=Object.entries(bases).map(([nr,baseStats])=>{
 const before=catalog.find(s=>s.nr===Number(nr)),after=structuredClone(before),c=after.summonedCreatureSettings;
 c.baseStats=baseStats;
 if(c.inheritedAttributeFractions)for(const k of Object.keys(c.inheritedAttributeFractions))c.inheritedAttributeFractions[k]=.1;
 for(const k of ['healthFractionOfCaster','magicalAttackFractionOfCaster','physicalDefenseFractionOfCasterMagicalDefense','magicalDefenseFractionOfCasterMagicalDefense'])if(c[k]!==undefined)c[k]=.1;
 for(const lang of ['de','eng']){
  const field='description_'+lang;
  after[field]=after[field].replaceAll('30 Prozent','10 Prozent').replaceAll('30 %','10 %').replaceAll('30%','10%').replaceAll('einem Drittel','10 Prozent').replaceAll('one third','10 percent');
  const hp=baseStats.maxHealth,pa=baseStats.physicalAttack??0,ma=baseStats.magicalAttack??0,pd=baseStats.physicalDefense,md=baseStats.magicalDefense;
  if(lang==='de')after[field]=after[field].replace(/Zusätzliche eigene Grundwerte: [^.]+\./,`Zusätzliche eigene Grundwerte: ${hp} Max-Leben, ${pa} P-Angriff, ${ma} M-Angriff, ${pd} P-Verteidigung und ${md} M-Verteidigung.`);
  else after[field]=after[field].replace(/Additional fixed base stats: [^.]+\./,`Additional fixed base stats: ${hp} maximum HP, ${pa} physical attack, ${ma} magical attack, ${pd} physical defense and ${md} magical defense, added to existing inheritance.`);
  assert.notEqual(after[field],before[field]);
 }
 const unchanged=structuredClone(after);unchanged.summonedCreatureSettings=before.summonedCreatureSettings;unchanged.description_de=before.description_de;unchanged.description_eng=before.description_eng;assert.deepEqual(unchanged,before);
 return {before,after};
});
for(const {after}of changes)await new SkillDataModel(after).validate();
if(!process.argv.includes('--apply'))console.log('Validated three companion changes; dry run only.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=[];
 for(const {before}of changes){const live=await col.findOne({nr:before.nr}),normalized=JSON.parse(JSON.stringify(live));delete normalized.__v;assert.deepEqual(normalized,before);stored.push(live);}
 const backup='data/balancing/history/before-companion-ten-percent-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(let i=0;i<changes.length;i++){const {after}=changes[i],fields=structuredClone(after);delete fields._id;const result=await col.updateOne(stored[i],{$set:fields});assert.equal(result.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored[i]._id})));delete actual.__v;assert.deepEqual(actual,after);}
 await fs.writeFile('data/balancing/companion-ten-percent-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,changes},null,2)+'\n');
 console.log('Three companion database records updated and verified.');
}catch(error){console.error('Companion update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}

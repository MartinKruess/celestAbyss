import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const before=catalog.find(s=>s.nr===70);assert.equal(before.maxSkillLv,4);
const skill=structuredClone(before);skill.maxSkillLv=5;
skill.statScaling.patk={type:'table',base:17,values:[17,25,34,42,50]};
skill.burstUsage.belowTargetHealthFractionByLevel=[.05,.06,.06,.06,.06];
skill.burstUsage.usesBelowThresholdByLevel=[2,2,2,3,3];
skill.attackExecution.damageMultiplierScaling={type:'table',values:[1,1.5,1.5,1.5,1.5]};
skill.attackExecution.armorIgnoreFractionByLevel=[0,0,0,0,1];
skill.description_de='Kunai-Angriff mit fünf Skillstufen und ganzzahligem physischem Grundschaden von 17/25/34/42/50. Start- und Maximalwirkung bleiben erhalten. Außerhalb der Lebensschwelle ist eine normale Anwendung ohne Schadensmultiplikator oder Rüstungsignorierung möglich. Stufe 1 erlaubt gegen Ziele unter 5 Prozent Leben zwei Anwendungen. Ab Stufe 2 liegt die Schwelle unter 6 Prozent und nur darunter verursacht jede Anwendung 1,5-fachen Schaden. Ab Stufe 4 sind unter dieser Schwelle drei Anwendungen möglich. Auf Stufe 5 wird im PvE und PvP unter derselben 6-Prozent-Schwelle zusätzlich die gegnerische Rüstung vollständig ignoriert. Kein doppelter Schadensmultiplikator. Zwischen Anwendungen liegen 0,5 Sekunden, nach der Folge 16 Sekunden Cooldown. Keine Mana-Kosten, Castzeit 0 Sekunden, vorläufige Animation 1 Sekunde. Im PvP und vorläufig auch gegen Bosse einsetzbar. Finisher- und Boss-Balancing sowie allgemeiner PvP-Schadensfaktor bleiben offen. Rüstungsignorierung ist kein garantierter Todesstoß und ignoriert nicht automatisch Schilde oder andere Schadensreduktionen. Verhalten bei Heilung des Ziels über die Schwelle, Unterbrechung und unvollständigen Folgen bleibt offen.';
skill.description_eng='Kunai attack with five levels and integer physical base damage of 17/25/34/42/50. Starting and maximum effects are retained. Outside the target Health threshold, one normal use is possible without a damage multiplier or armor ignore. Level 1 allows two uses below 5 percent Health. From level 2, the threshold is below 6 percent and each use deals 1.5 times damage only below it. From level 4, three uses are allowed below the threshold. At level 5, PvE and PvP attacks additionally ignore all enemy armor below the same 6-percent threshold. No double-damage multiplier. Uses are separated by 0.5 seconds, followed by a 16-second cooldown. No Mana cost, cast time 0 seconds, provisional animation 1 second. Allowed in PvP and provisionally against bosses. Finisher and boss balancing and general PvP damage factor remain pending. Armor ignore is not a guaranteed kill and does not bypass shields or other damage reductions automatically. Target healing above threshold, interruption and partial-sequence behavior remain pending.';
delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);
await new SkillDataModel(skill).validate();
for(let level=1;level<=5;level++){const r=resolveSkillAtLevel(skill,level);assert.equal(r.patk,[17,25,34,42,50][level-1]);assert.equal(r.mana,0);}
for(const [level,oldLevel]of [[1,1],[5,4]]){
 const a=resolveSkillAtLevel(skill,level),b=resolveSkillAtLevel(before,oldLevel);
 for(const k of ['patk','mana','cd','castTimeSeconds','resourceCosts','usageRestrictions'])assert.deepEqual(a[k],b[k]);
 assert.equal(a.burstUsage.belowTargetHealthFractionByLevel[level-1],b.burstUsage.belowTargetHealthFractionByLevel[oldLevel-1]);
 assert.equal(a.burstUsage.usesBelowThresholdByLevel[level-1],b.burstUsage.usesBelowThresholdByLevel[oldLevel-1]);
 assert.equal(a.attackExecution.armorIgnoreFractionByLevel[level-1],b.attackExecution.armorIgnoreFractionByLevel[oldLevel-1]);
 assert.deepEqual(a.attackExecution.damageMultiplierScaling,b.attackExecution.damageMultiplierScaling);
}
if(!process.argv.includes('--apply'))console.log('Preview verified: Kunai five integer levels, old maximum retained; 1.5 multiplier at two, third use at four, armor ignore at five.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.findOne({nr:70});const normalized=JSON.parse(JSON.stringify(stored));delete normalized.__v;assert.deepEqual(normalized,before);
 const backup='data/balancing/history/before-kunai-five-levels-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skill.json',JSON.stringify(stored,null,2)+'\n');
 const fields=structuredClone(skill);delete fields._id;const r=await col.updateOne(stored,{$set:fields});assert.equal(r.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:stored._id})));delete actual.__v;assert.deepEqual(actual,skill);
 await fs.writeFile('data/balancing/kunai-five-levels-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,nr:70,previousMaxLevel:4,maxSkillLevel:5,pointDelta:1,damageByLevel:[17,25,34,42,50],milestones:{higherThresholdAndDamageMultiplier:2,thirdUse:4,armorIgnore:5},preservedEndpoints:true},null,2)+'\n');
 console.log('Verified Kunai five-level database update.');
}catch(error){console.error('Kunai update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}

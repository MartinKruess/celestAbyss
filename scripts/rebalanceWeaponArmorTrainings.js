import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {buildSkillProgression} from '../services/inferSkillProgression.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
const catalog=JSON.parse(await fs.readFile('data/skills.json','utf8'));
const numbers=[201,144,245,102,18,7,22];
const changes=numbers.map(nr=>{
 const before=catalog.find(s=>s.nr===nr),skill=structuredClone(before);
 if(nr===201){for(const k of ['patk','matk']){skill[k]=1;skill.statScaling[k]={type:'linear',base:1,perLevel:1};}
  skill.description_de='Permanentes allgemeines Waffentraining mit 20 Stufen für alle Klassen. Je gelernter Stufe +1 physischer und +1 magischer Angriff, maximal jeweils +20 auf Stufe 20. Keine Angriffsgeschwindigkeit, Aktivierungskosten, Castzeit oder Cooldown.';
  skill.description_eng='Permanent general Weapon Training with 20 levels for all classes. Each learned level grants +1 physical and +1 magical attack, reaching +20 each at level 20. No attack speed, activation costs, cast time or cooldown.';
 }else if(nr===144){skill.pdef=3;skill.statScaling.pdef={type:'linear',base:3,perLevel:3};
  skill.description_de='Permanentes Rüstungstraining mit zehn Stufen für alle Klassen. Je gelernter Stufe +3 physische und +6 magische Verteidigung, maximal +30 P-Abwehr und +60 M-Abwehr. Keine Vitalitätsboni, Aktivierungskosten, Castzeit oder Cooldown.';
  skill.description_eng='Permanent Armor Training with ten levels for all classes. Each learned level grants +3 physical and +6 magical defense, reaching +30 physical and +60 magical defense. No Vitality bonus, activation costs, cast time or cooldown.';
 }else if(nr===245){skill.str=3;skill.statScaling.str={type:'linear',base:3,perLevel:1};
  skill.description_de='Permanentes Breitschwert-Training des Abenteurers für seine zweihändige Schwertwaffe. Zehn Stufen: +3 Stärke auf Stufe 1, +1 je weiterer Stufe, maximal +12 auf Stufe 10, entsprechend dem Zweihand-Axttraining. Kein Geschickbonus. Eigene Skilldefinition; Ritter und Tempelritter verwenden ihr separates Schwerttraining. Keine Aktivierungskosten, Castzeit oder Cooldown.';
  skill.description_eng='Permanent Adventurer Broadsword Training for the two-handed sword. Ten levels: +3 Strength at level 1 plus 1 per additional level, reaching +12 at level 10, matching Two-handed Axe Training. No Dexterity bonus. Separate definition from Knight Sword Training. No activation costs, cast time or cooldown.';
 }else if(nr===102){skill.vita=skill.dex;skill.statScaling.vita=structuredClone(skill.statScaling.dex);delete skill.dex;delete skill.statScaling.dex;delete skill.statBonusTargets?.dex;delete skill.statBonusUnits?.dex;
  skill.description_de='Permanentes Schwerttraining des Ritters mit fünf Stufen. Stärke je Stufe 2/3/4/5/6. Vitalität ersetzt den bisherigen Geschickbonus unverändert im Verlauf: 1/1/1/1/2. Auf Stufe 5 insgesamt +6 Stärke und +2 Vitalität. Kein Geschickbonus. Keine Aktivierungskosten, Castzeit oder Cooldown.';
  skill.description_eng='Permanent Knight Sword Training with five levels. Strength by level: 2/3/4/5/6. Vitality replaces the previous Dexterity bonus with the same progression: 1/1/1/1/2. At level 5: +6 Strength and +2 Vitality. No Dexterity bonus, activation costs, cast time or cooldown.';
 }else if(nr===18){delete skill.patk;delete skill.statScaling.patk;delete skill.statBonusTargets?.patk;delete skill.statBonusUnits?.patk;
  skill.description_de='Permanentes Bogenschießtraining mit zehn Stufen. Auf Stufe 1 +2 Geschicklichkeit, +1 je weiterer Stufe, maximal +11 auf Stufe 10. Der direkte physische Angriffsbonus entfällt vollständig. Kein Agilitätsbonus. Keine Aktivierungskosten, Castzeit oder Cooldown.';
  skill.description_eng='Permanent Bow Training with ten levels. Grants +2 Dexterity at level 1 plus 1 per additional level, reaching +11 at level 10. The direct physical attack bonus is removed entirely. No Agility bonus, activation costs, cast time or cooldown.';
 }else if(nr===7){skill.agi=1;skill.dex=1;skill.statScaling.agi={type:'table',base:1,values:[1,1,2,2,3,3,4,4,5,5]};skill.statScaling.dex={type:'table',base:1,values:[1,2,2,3,3,4,4,5,5,6]};
  skill.description_de='Permanentes Armbrusttraining mit zehn Stufen. Beginnt mit +1 Agilität und +1 Geschicklichkeit. Je weiterer Stufe steigt abwechselnd Geschick oder Agilität um 1, beginnend mit Geschick auf Stufe 2. Auf Stufe 10 insgesamt +5 Agilität und +6 Geschicklichkeit. Keine Aktivierungskosten, Castzeit oder Cooldown.';
  skill.description_eng='Permanent Crossbow Training with ten levels. Starts at +1 Agility and +1 Dexterity. Each additional level alternates +1 Dexterity or Agility, beginning with Dexterity at level 2. At level 10: +5 Agility and +6 Dexterity. No activation costs, cast time or cooldown.';
 }else{const dual=catalog.find(s=>s.nr===26);skill.agi=dual.str;skill.str=dual.agi;skill.statScaling.agi=structuredClone(dual.statScaling.str);skill.statScaling.str=structuredClone(dual.statScaling.agi);
  skill.description_de='Permanentes Dolchtraining mit zehn Stufen. Spiegelt die Attributverteilung des Dual-Axttrainings: Auf Stufe 1 +2 Agilität und +1 Stärke. Je weiterer Stufe steigt abwechselnd Agilität oder Stärke um 1, beginnend mit Agilität auf Stufe 2. Auf Stufe 10 insgesamt +7 Agilität und +5 Stärke. Die Boni gelten einmal für den Charakter. Keine Aktivierungskosten, Castzeit oder Cooldown.';
  skill.description_eng='Permanent Dagger Training with ten levels. Mirrors the Dual Axe Training attribute distribution: starts at +2 Agility and +1 Strength. Each additional level alternates +1 Agility or Strength, beginning with Agility at level 2. At level 10: +7 Agility and +5 Strength. Bonuses apply once per character. No activation costs, cast time or cooldown.';
 }
 delete skill.levelProgression;skill.levelProgression=buildSkillProgression(skill);return {before,skill};
});
const expected={201:{patk:20,matk:20},144:{pdef:30,mdef:60},245:{str:12},102:{str:6,vita:2},18:{dex:11},7:{agi:5,dex:6},22:{agi:7,str:5}};
for(const {before,skill}of changes){await new SkillDataModel(skill).validate();assert.equal(skill.maxSkillLv,before.maxSkillLv);assert.deepEqual(skill.charClass,before.charClass);const r=resolveSkillAtLevel(skill,skill.maxSkillLv);for(const [k,v]of Object.entries(expected[skill.nr]))assert.equal(r[k],v);}
if(!process.argv.includes('--apply'))console.log('Preview verified: seven training changes, preserved skill levels and class assignments.');
else try{
 assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const col=SkillDataModel.collection,stored=await col.find({nr:{$in:numbers}}).toArray();assert.equal(stored.length,numbers.length);
 for(const {before}of changes){const live=JSON.parse(JSON.stringify(stored.find(s=>s.nr===before.nr)));delete live.__v;assert.deepEqual(live,before);}
 const backup='data/balancing/history/before-training-rebalance-'+Date.now();await fs.mkdir(backup,{recursive:true});await fs.writeFile(backup+'/skills.json',JSON.stringify(stored,null,2)+'\n');
 for(const {skill}of changes){const live=stored.find(s=>s.nr===skill.nr),fields=structuredClone(skill);delete fields._id;const update={$set:fields};if(skill.nr===102)update.$unset={dex:''};if(skill.nr===18)update.$unset={patk:''};const result=await col.updateOne(live,update);assert.equal(result.matchedCount,1);const actual=JSON.parse(JSON.stringify(await col.findOne({_id:live._id})));delete actual.__v;assert.deepEqual(actual,skill);}
 await fs.writeFile('data/balancing/training-rebalance-decision.json',JSON.stringify({status:'appliedAndVerified',generatedAt:new Date().toISOString(),backup,pointDelta:0,maximumBonuses:expected,unchangedSkillNumbers:[139,131,26,93,132,252]},null,2)+'\n');console.log('Verified seven training database updates.');
}catch(error){console.error('Training update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}

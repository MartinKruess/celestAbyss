import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:76});assert.equal(before.skillName_eng,'Mighty Double Strike');assert.deepEqual(before.charClass,['Shamane','High Elves']);
 const set={skillName_de:'Infernaler Kreuzschlag',skillName_eng:'Infernal Cross Strike',matk:83,statScaling:{...before.statScaling,matk:{type:'linear',base:83,perLevel:16}},attackExecution:{...before.attackExecution,magicalDamageElement:'fire'},mana:125,resourceCosts:before.resourceCosts.map(c=>c.resource==='mana'?{...c,scaling:{type:'linear',base:125,perLevel:24}}:c),
 description_de:'Entzündet Flammen um deine beiden Einhand-Streitkolben und führt zwei aufeinanderfolgende Schläge aus. Jeder Treffer verursacht physischen Grundschaden von 166, +32 je weiterer Stufe bis 614 auf Stufe 15, sowie magischen Feuer-Grundschaden in halber Höhe: 83, +16 je weiterer Stufe bis 307. Je Treffer kommen einmal der volle aktuelle P-Angriff und einmal der volle aktuelle M-Angriff hinzu. Zwei Treffer mit jeweils voller Wirkung, keine zusätzliche Schadensverdopplung und kein DoT. Keine Castzeit. Cooldown 47 Sekunden, −1 je weiterer Stufe bis 33. Vorläufige Animation 0,5 Sekunden; genaue Trefferzeitpunkte und Trefferbereich bleiben offen. Mana-Kosten 125 auf Stufe 1, +24 je weiterer Stufe bis 461 auf Stufe 15. Die Kosten entsprechen gerundet 25 Prozent des gesamten Skill-Grundschadens beider Treffer, ohne Charakterangriff und ohne zusätzliche Gegnerzahl.',
 description_eng:'Ignites flames around your two one-handed maces and performs two consecutive strikes. Each hit deals physical base damage 166 plus 32 per additional level to 614 at level 15, plus magical fire base damage equal to half: 83 plus 16 per additional level to 307. Each hit adds full current physical attack and full current magical attack once. Both hits deal full damage, without an extra doubling or damage over time. No cast time. Cooldown 47 seconds minus 1 per additional level to 33. Provisional animation 0.5 seconds; exact hit timing and hit area remain undefined. Mana 125 at level 1 plus 24 per additional level to 461, rounded from 25 percent of both hits total skill base damage, excluding character attack and target count.'};
 const expected={...before,...set};await new SkillDataModel(expected).validate();
 const dir='data/balancing/history/before-infernal-cross-strike-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skill.json',JSON.stringify(before,null,2)+'\n');
 const path='data/reports/class-skill-counts.json',report=JSON.parse(await fs.readFile(path,'utf8'));await fs.copyFile(path,dir+'/class-skill-counts.json');
 await col.updateOne({_id:before._id},{$set:set});assert.deepEqual(await col.findOne({_id:before._id}),expected);
 report.classified.find(s=>s.nr===76).name=set.skillName_de;await fs.writeFile(path,JSON.stringify(report,null,2)+'\n');
 await fs.writeFile('data/balancing/infernal-cross-strike-decision.json',JSON.stringify({status:'appliedAndVerified',backup:dir,skill:expected},null,2)+'\n');
 console.log('Verified Infernal Cross Strike: two full hybrid hits, physical166–614, magical fire83–307, Mana125–461. Existing skill76 preserved.');
}catch(error){console.error('Cross strike update failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}

import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
import {evaluateDamageSkill} from '../services/rotationDamage.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000,connectTimeoutMS:10000});
 const col=SkillDataModel.collection,before=await col.findOne({nr:118});assert.ok(before);
 const durationScaling={type:'linear',base:4,perLevel:0.75};
 const effects=before.effects.map(e=>e.controlKind==='pull'?{...e,pullSpeed:110,pullSpeedReference:'standardMovement100',combinesWithVoluntaryMovement:true,stopsAtCenter:true,airbornePullStatus:'pending'}:e);
 const set={patk:266,statScaling:{...before.statScaling,patk:{type:'linear',base:266,perLevel:178.5}},dur:4,durationScaling,effects,
 attackExecution:{hitCount:2,damageValueScope:'perApplication',hitTimingStatus:'defined',damagePhases:[{stat:'patk',timing:'castEnd',target:'enemy',addsCasterAttack:true},{stat:'matk',timing:'afterSkillDuration',target:'enemiesInArea',addsCasterAttack:true}]},
 description_de:'Nach Abschluss der Castzeit trifft ein körperlicher Initialschlag ausschließlich das anvisierte Ziel: 266 physischer Grundschaden auf Stufe 1, +178,5 je weiterer Stufe bis 980 auf Stufe 5, zuzüglich einmal des aktuellen P-Angriffs. Anschließend werden Gegner im Radius von 10 Metern zum Skillzentrum gezogen. Die Zuggeschwindigkeit beträgt 110 auf der relativen Skala mit Standard-Lauftempo 100 und wird mit der freiwilligen Bewegung kombiniert; am Zentrum endet der Zug. Verhalten in der Luft und Umsetzung in Unreal-Bewegungseinheiten bleiben offen. Ansaugdauer 4 Sekunden, +0,75 je weiterer Stufe bis 7 Sekunden. Danach trifft eine einmalige magische Explosion alle noch im Bereich befindlichen Gegner einschließlich des ursprünglichen Ziels: 532 Grundschaden, +357 je weiterer Stufe bis 1960, zuzüglich einmal des aktuellen M-Angriffs je getroffenem Gegner. Während des Ansaugens kein wiederholter Schaden. Mana unverändert 133 +89 bis 489, Castzeit 0,8 Sekunden, Cooldown 150 minus 2 je weiterer Stufe bis 142 Sekunden.',
 description_eng:'At cast completion, only the selected enemy takes one physical hit: base 266 plus 178.5 per additional level to 980 at level 5, plus current physical attack once. Enemies within 10 meters are then pulled toward the skill center at speed 110 on a relative scale where standard movement is 100, combined with voluntary movement and stopping at the center. Airborne behavior and Unreal movement-unit conversion remain undefined. Pull duration is 4 seconds plus 0.75 per additional level to 7. At its end, one magical explosion hits every enemy still inside, including the original target if present: base 532 plus 357 per additional level to 1960, plus current magical attack once per target. No repeated damage during the pull. Mana unchanged at 133 plus 89 to 489, cast time 0.8 seconds, cooldown 150 minus 2 per additional level to 142 seconds.'};
 const expected={...before,...set};await new SkillDataModel(expected).validate();
 const dir='data/balancing/history/before-vacuum-hybrid-'+Date.now();await fs.mkdir(dir,{recursive:true});await fs.writeFile(dir+'/skill.json',JSON.stringify(before,null,2)+'\n');
 await col.updateOne({_id:before._id},{$set:set});assert.deepEqual(await col.findOne({_id:before._id}),expected);
 const sky=await col.findOne({nr:212});const stats={physicalAttack:397.2,magicalAttack:580.13,criticalDamageBonus:0.8};
 assert.equal(sky.patk,144);assert.equal(sky.matk,292);
 assert.ok(Math.abs(evaluateDamageSkill(sky,stats).damage-(342+stats.physicalAttack+688+stats.magicalAttack)*1.8)<1e-8);
 await fs.writeFile('data/balancing/vacuum-hybrid-decision.json',JSON.stringify({status:'appliedAndVerified',backup:dir,skill:expected,skybreakerVerified:{physicalBase:342,magicalBase:688,multipliers:[1,0.8],includesBothCharacterAttacks:true}},null,2)+'\n');
 console.log('Verified Vacuum Impulse physical single-target initial hit and magical area explosion; Skybreaker already includes both character attacks.');
}catch(error){console.error('Vacuum upgrade failed ('+error.name+'); credentials omitted.');process.exitCode=1;}
finally{await mongoose.disconnect();}

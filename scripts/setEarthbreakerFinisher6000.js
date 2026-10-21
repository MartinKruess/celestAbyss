import 'dotenv/config';import fs from 'node:fs/promises';import mongoose from 'mongoose';import {isDeepStrictEqual} from 'node:util';import {SkillDataModel} from '../models/skillSchema.js';
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const c=SkillDataModel.collection,b=await c.findOne({nr:39});if(b.charClass.some(x=>!['Butcher','Destroyer'].includes(x)))throw Error('Unexpected shared assignment');
 const resourceCosts=structuredClone(b.resourceCosts);resourceCosts.find(x=>x.resource==='mana').scaling={type:'linear',base:200,perLevel:244};
 const set={patk:501,statScaling:{...b.statScaling,patk:{type:'linear',base:501,perLevel:611}},mana:200,resourceCosts,
 manaPricing:{...b.manaPricing,category:'finisher',factor:.4},
 description_de:'Bricht den Boden auf und schleudert nahe Gegner zurück. Mächtiger einmaliger physischer Flächenangriff: 501 Skill-Grundschaden auf Stufe 1, plus 611 je weiterer Stufe, insgesamt 6000 auf Stufe 10. Der aktuelle P-Angriff wird je getroffenem Gegner einmal addiert. Mana-Kosten 200 auf Stufe 1, plus 244 je weiterer Stufe, insgesamt 2396 auf Stufe 10. Finisher-Kostenkurve: ungefähr 40 % des Skill-Grundschadens, mit ganzzahligen Startkosten und Steigerungen. Cooldown unverändert von 70 um 1 Sekunde je weiterer Stufe auf 61 Sekunden. Castzeit 0,3 Sekunden. Die gespeicherte Wirkungsdauer bleibt 5 Sekunden; keine zusätzlichen wiederholten Schadenstreffer festgelegt. Flächenform, Reichweite, maximale Gegnerzahl und Rückstoßweite sind weiterhin nicht definiert.',
 description_eng:'Breaks open the ground and knocks nearby enemies back. Powerful single-hit physical area attack: 501 skill base damage at level 1, plus 611 per additional level, reaching 6000 at level 10. Current physical attack is added once per enemy hit. Mana cost 200 plus 244 per additional level, reaching 2396. Finisher pricing approximately 40% of skill base damage with integer starting costs and increments. Unchanged cooldown 70 minus 1 per additional level, reaching 61 seconds. Cast time 0.3 seconds. Stored duration remains 5 seconds; no additional repeated damage hits defined. Exact area shape, range, target cap and knockback distance remain undefined.'};
 await new SkillDataModel({...b,...set}).validate();
 const dir='data/balancing/history/before-earthbreaker-finisher-'+new Date().toISOString().replaceAll(':','-');await fs.mkdir(dir,{recursive:true});
 await fs.writeFile(dir+'/skill39-before.json',JSON.stringify(b,null,2)+'\n',{flag:'wx'});
 for(const file of ['data/balancing/all-class-timed-damage.json','docs/balancing/all-class-timed-damage.md','data/balancing/all-class-damage-rotations.json'])await fs.copyFile(file,dir+'/'+file.split('/').at(-1));
 await c.updateOne({nr:39},{$set:set});if(!isDeepStrictEqual(await c.findOne({nr:39}),{...b,...set}))throw Error('Read-back mismatch');
 console.log('Verified Earthbreaker: 501 +611 ->6000 damage, Mana200 +244 ->2396; Butcher only, cooldown/cast unchanged.');
}catch(e){console.error('Earthbreaker update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}

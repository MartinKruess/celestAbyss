import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
const rageCosts={13:55,127:35,128:5,109:5};
try{
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.find({nr:{$in:[13,109,127,128,161]}}).toArray();if(before.length!==5)throw Error('Missing skill');
 const plans=before.map(s=>{
 if(s.nr===161)return {s,set:{cd:70,cooldownScaling:{type:'linear',base:70,perLevel:-1},description_de:s.description_de.replace('der Cooldown sinkt gleichmäßig von 90 auf 85 Sekunden','der Cooldown sinkt von 70 Sekunden um 1 Sekunde je weiterer Stufe auf 61 Sekunden auf Stufe 10')+' Wutaufbau durch Auto-Attacks ist ausschließlich während dieses Buffs möglich; es gibt keinen zusätzlichen Grund-Wutgewinn außerhalb des Buffs.',description_eng:s.description_eng.replace('cooldown decreases evenly from 90 to 85 seconds','cooldown decreases from 70 seconds by 1 second per additional level to 61 seconds at level 10')+' Basic attacks generate Rage only while this buff is active; no additional baseline Rage generation outside the buff.'},unset:{}};
 const cost=rageCosts[s.nr];let de=s.description_de,en=s.description_eng,req={...s.activationRequirements};
 if(s.nr===13){delete req.ragePointsPerSuccessfulBasicAttack;req.minimumFraction=0.55;req.generationAmountStatus='defined';de=de.replace('bei voller Wutleiste','bei mindestens 55 Wutpunkten').replace('Verbraucht 100 Prozent Wut und kein Mana.','Verbraucht 55 Wutpunkte und kein Mana.').replace('Jede erfolgreiche eigene Auto-Attack-Aktion erzeugt grundsätzlich 0,5 Wutpunkte bei einer Leiste von 100 Punkten; zwei Waffen zählen als eine Aktion. Das Zusammenwirken mit dem zusätzlichen Wutaufbau von Energie der Wut bleibt gesondert zu klären.','Eigene Auto-Attacks erzeugen ausschließlich während Energie der Wut Wutpunkte; zwei Waffen zählen als eine gemeinsame Aktion.');en=en.replace('Requires a full Rage bar','Requires at least 55 Rage points').replace('Costs 100 percent Rage and no Mana.','Costs 55 Rage points and no Mana.').replace('Each successful own basic-attack action generates 0.5 base Rage points on a 100-point bar; dual weapons count as one action. Interaction with additional generation from Energy of Anger remains to be clarified.','Own basic attacks generate Rage only while Energy of Anger is active; dual weapons count as one action.');}
 if(s.nr===109){de+=' Kostet vor Anwendung 5 Wutpunkte und kein Mana; die bestehende Rückgabe von 5 Wutpunkten erfolgt anschließend, netto 0 Wut bei erfolgreicher Anwendung.';en+=' Requires and consumes 5 Rage points before use, no Mana; existing 5-Rage gain is applied afterwards, net 0 Rage on successful use.';}
 if(s.nr===127){de=de.replace('Aktivierungskosten sind noch offen.','Kostet 35 Wutpunkte und kein Mana.');en=en.replace('Activation costs remain pending.','Costs 35 Rage points and no Mana.');}
 if(s.nr===128){de=de.replace('Verbraucht weder Mana noch Wut und erzeugt keine Wut.','Kostet 5 Wutpunkte und kein Mana; erzeugt keine Wut.');en=en.replace('Costs no Mana or Rage and generates no Rage.','Costs 5 Rage points and no Mana; generates no Rage.');}
 return {s,set:{activationRequirements:req,resourceCosts:[{resource:'rage',reference:'maxRage',unit:'flat',scaling:{type:'fixed',base:cost}}],description_de:de,description_eng:en},unset:{}};
 });
 for(const p of plans)await new SkillDataModel({...p.s,...p.set}).validate();
 await fs.writeFile('data/balancing/gladiator-rage-costs-energy70-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 for(const p of plans){await SkillDataModel.collection.updateOne({nr:p.s.nr},{$set:p.set});const saved=await SkillDataModel.collection.findOne({nr:p.s.nr});for(const[k,v]of Object.entries(p.set))if(JSON.stringify(saved[k])!==JSON.stringify(v))throw Error('Read-back mismatch');}
 console.log('Verified Rage55/35/5/5; generation only Energy buff; cooldown70–61, existing Storm refund preserved. Damage unchanged.');
}catch(e){console.error(`Rage rules update failed (${e.name}); credentials omitted.`);process.exitCode=1;}finally{await mongoose.disconnect();}

import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Wrong database');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const before=await SkillDataModel.collection.findOne({nr:237});
 if(!before?.summonedCreatureSettings)throw Error('Missing summon');
 const set={summonedCreatureSettings:{...before.summonedCreatureSettings,statSampling:'liveBeforeSummonHealthPenalty',defenseScalingStatus:'defined',physicalDefenseFractionOfCasterMagicalDefense:1/3,magicalDefenseFractionOfCasterMagicalDefense:1/3},description_de:before.description_de.replace('Morrak erhält vorläufig beim Beschwören vor dem HP-Abzug ein Drittel des Max-Lebens und M-Angriffs des Anwenders.','Morraks Werte sind live an seinen Meister gekoppelt: Max-Leben und M-Angriff entsprechen jeweils einem Drittel des entsprechenden aktuellen Meisterwerts. Eigene Beschwörungskosten von -500 Max-HP werden aus der HP-Berechnungsbasis herausgerechnet. Buffs und Debuffs des Meisters wirken damit auch auf Morrak. Physische und magische Verteidigung Morraks entsprechen beide einem Drittel der aktuellen magischen Verteidigung des Meisters.').replace('Verteidigungsskalierung, weitere Beschwörungskosten und Aggroregeln bleiben offen.','Keine weiteren Beschwörungskosten: kein Mana, keine Seelen und kein zusätzlicher einmaliger Lebensabzug; allein -500 Max-HP während der Beschwörung. Aggroregeln und genaue Anpassung aktueller HP bei wechselndem Max-Leben bleiben offen.'),description_eng:before.description_eng.replace('Provisionally snapshots one third of caster max HP and magical attack before the health penalty.','Morrak is live-linked to his master: max HP and magical attack each equal one third of the corresponding current caster stat. His own -500 max-HP summon penalty is excluded from the health calculation basis. Caster buffs and debuffs therefore affect Morrak. Both physical and magical defense equal one third of the caster’s current magical defense.').replace('Defense scaling, further summon costs and aggro rules remain pending.','No other summon costs: no Mana, souls or additional upfront health loss; only -500 max HP while summoned. Aggro rules and exact current-HP handling when maximum HP changes remain pending.')};
 await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/morrak-live-stats-before.json',JSON.stringify(before,null,2)+'\n');
 await SkillDataModel.collection.updateOne({nr:237},{$set:set});
 const after=await SkillDataModel.collection.findOne({nr:237});
 for(const[k,v]of Object.entries(set))if(JSON.stringify(after[k])!==JSON.stringify(v))throw Error('Read-back mismatch');
 console.log('Morrak live stats verified; both defenses one-third caster M-Defense; no additional summon costs.');
}catch(e){console.error('Update failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}

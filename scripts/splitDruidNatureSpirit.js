import 'dotenv/config';
import mongoose from 'mongoose';
import fs from 'node:fs/promises';
import {isDeepStrictEqual} from 'node:util';
import {SkillDataModel} from '../models/skillSchema.js';
try {
 if(process.env.MONGODB_DB_NAME!=='celestabyss_dev')throw Error('Development database required');
 await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,autoIndex:false,serverSelectionTimeoutMS:10000});
 const c=SkillDataModel.collection,before=await c.findOne({nr:226});
 if(await c.findOne({nr:244}))throw Error('Skill number already occupied');
 const nature=structuredClone(before);nature._id=new mongoose.Types.ObjectId();nature.nr=244;nature.charClass=['Druide','Alchemist'];nature.skillName_de='Naturgeist';nature.skillName_eng='Nature Spirit';
 nature.summonedCreatureSettings={...nature.summonedCreatureSettings,inheritedAttributeFractions:{intelligence:0.3,vitality:0.3,wisdom:0.3},attributeConversionMode:'standardMagical',damageType:'magical',damageElement:'wind',baseAttacksPerSecond:1.5};
 nature.description_de='Beschwört einen Naturgeist, der mit kleinen Wirbelstürmen magischen Windschaden aus der Entfernung verursacht. Eigene Skilldefinition nur für Druide/Alchemist, getrennt vom Seelenbegleiter des Jägers. Übernimmt live jeweils 30 % der aktuellen Intelligenz, Vitalität und Willenskraft seines Meisters. Statt Geschick liefert Intelligenz den Angriff: 1,8 M-Angriff je übernommenes Intelligenz-Punkt; keine direkte Übernahme von Waffenangriff oder fertigem M-Angriff. Vita und Willenskraft werden nach den normalen Begleiterregeln verwertet. Keine physische Angriffskomponente. Eine lernbare Stufe, 132 Mana, 0,4 Sekunden Castzeit, 360 Sekunden Dauer und 360 Sekunden Cooldown ab Beschwörung. Maximal ein Naturgeist gleichzeitig; erneutes Rufen ersetzt den bisherigen. Bei Tod nur verbleibenden Beschwörungs-Cooldown abwarten. Angreifbar und von Flächenschaden betroffen. Kein dauerhafter Pet-Platz, mit normalem Pet kombinierbar. Grundfrequenz 1,5 Angriffe pro Sekunde bei 100 % eigenem Angriffstempo, keine Übernahme von Agilität. Meister-Buffs und -Debuffs wirken live auf die übernommenen Attribute. Begleiterbuffs wirken direkt auf den Naturgeist. Reichweite und Anpassung aktueller HP bei Max-HP-Änderungen noch offen.';
 nature.description_eng='Summons a Nature Spirit that uses small tornadoes as ranged magical wind basic attacks. Separate Druid/Alchemist skill. Live inheritance: 30% each of current master Intelligence, Vitality and Wisdom. Intelligence replaces Dexterity as the attack source: 1.8 magical attack per inherited Intelligence point, without direct weapon or final master attack inheritance. Standard companion Vitality/Wisdom conversions. No physical attack component. One learnable level, 132 Mana, 0.4-second cast, 360-second lifetime and cooldown starting on summon. Maximum one active instance; resummoning replaces it. Death requires waiting only the remaining summon cooldown. Targetable and affected by area damage. Does not occupy a permanent pet slot. Base frequency 1.5 attacks per second at 100% own speed; no Agility inheritance. Master attribute changes apply live; companion buffs apply directly. Range and current-HP adjustments remain pending.';
 const set={charClass:before.charClass.filter(x=>!['Druide','Alchemist'].includes(x))};
 await new SkillDataModel(nature).validate();await new SkillDataModel({...before,...set}).validate();
 await fs.writeFile('data/balancing/druid-nature-spirit-split-before.json',JSON.stringify(before,null,2)+'\n',{flag:'wx'});
 // Create the new definition before removing the old assignment.
 await c.insertOne(nature);await c.updateOne({nr:226},{$set:set});
 if(!isDeepStrictEqual(await c.findOne({nr:244}),nature)||!isDeepStrictEqual(await c.findOne({nr:226}),{...before,...set}))throw Error('Read-back mismatch');
 console.log('Verified Nature Spirit #244 for Druid/Alchemist, 30% Intelligence -> magical wind attacks. Hunter retains #226 with unchanged combat values.');
}catch(e){console.error('Nature Spirit split failed ('+e.name+'); credentials omitted.');process.exitCode=1;}finally{await mongoose.disconnect();}

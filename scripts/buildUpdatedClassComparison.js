import {attributeConversionFactor} from '../services/attributeConversion.js';
import fs from 'node:fs/promises';
import {applyEquipmentBonus,applyItemComparisonBonuses} from '../services/equipmentComparisonBonuses.js';
import {comparisonHighlights,comparisonMarker} from '../services/comparisonHighlights.js';
import {compareSelfBuffs} from '../services/selfBuffComparison.js';
import {permanentManaRegenMultiplier} from '../services/permanentManaRegeneration.js';
import {soulReserveAttackBonus} from '../services/soulReserveBonus.js';
const read=async p=>JSON.parse(await fs.readFile(p,'utf8'));
const [baselines,equipment,model,skills,sp]=await Promise.all(['data/balancing/class-baselines.json','data/balancing/ranked-equipment.json','data/balancing/attribute-model.json','data/skills.json','data/balancing/class-skill-points.json'].map(read));
const refreshKnight=process.argv.includes('--refresh-knight');
const refreshShaman=process.argv.includes('--refresh-shaman');
const refreshRogue=process.argv.includes('--refresh-rogue');
const refreshDruid=process.argv.includes('--refresh-druid')||refreshShaman||refreshKnight||refreshRogue;
const refreshedClass=refreshRogue?'villian':refreshKnight?'knight':refreshShaman?'shaman':'druid';
const previousComparison=refreshDruid?await read('data/balancing/class-comparison-level60.json'):undefined;
const names={adventurer:'Abenteurer',butcher:'Butcher',druid:'Druide',gladiator:'Gladiator',healer:'Heiler',herbalist:'Kräuterkundler',hunter:'Jäger',knight:'Ritter',luminet:'Luminet',ritualist:'Ritualist',shaman:'Schamane',summoner:'Seelenjäger',villian:'Schurke'};
const armorNames={adventurer:'Adventure',butcher:'Butcher',druid:'Druid',gladiator:'Gladiator',healer:'Healer',herbalist:'Kräuterkundler',hunter:'Archer',knight:'Tank',luminet:'Lightmage',ritualist:'Bloodmage',shaman:'Shamane',summoner:'Seelenjäger',villian:'Villain'};
const loadouts={gladiator:['1H Axt','1H Axt'],butcher:['2H Axt'],hunter:['Bow'],summoner:['Crossbow'],knight:['Sword','Shield'],villian:['Dagger','Dagger'],adventurer:['2H Schwert'],druid:['2H Mace'],shaman:['Mace','Mace'],herbalist:['Wand'],healer:['Wand'],luminet:['Lichtstab'],ritualist:['Victim-Stab']};
const aliases={vita:'vitality',wis:'wisdom',str:'strength',dex:'dexterity',amb:'ambush',int:'intelligence',faith:'faith',vic:'victim',agi:'agility',luck:'luck'};
const direct={health:'maxHealth',mana:'maxMana',patk:'physicalAttack',matk:'magicalAttack',pdef:'physicalDefense',mdef:'magicalDefense',atkSpeed:'attackSpeed',movementSpeed:'movementSpeed',manaRegen:'manaRegen',healthRegen:'healthRegen',critChanceRating:'critChanceRating',block:'block',penetration:'penetration',accuracy:'accuracy',dodge:'dodge'};
const end=(c,l)=>c.type==='table'?c.values[l-1]:c.base+(c.type==='fixed'?0:(l-1)*c.perLevel);
function build(key,attrs,flat,initial){
  const stats={...initial,accuracy:0,dodge:0,critChanceRating:0,block:0,penetration:0,healthRegen:12,manaRegen:25,criticalDamageBonus:0.8};
  const selected=model.offensiveAttributeEligibility.confirmedMatchingAttributes[key]??model.offensiveAttributeEligibility.pendingClassComparisonAttributes[key];
  for(const c of model.conversions){
    if(c.amountPerPoint===undefined||c.status!=='confirmedFactor')continue;
    let factor=c.amountPerPoint;
    const override=model.offensiveAttributeEligibility.classAttackOverrides?.[key];
    const target=override?.attribute===c.attribute&&['physicalAttack','magicalAttack'].includes(c.target)?override.target:c.target;
    if(selected&&['physicalAttack','magicalAttack'].includes(c.target)&&model.offensiveAttributeEligibility.attributes.includes(c.attribute))factor=selected.includes(c.attribute)?c.amountPerPoint:model.offensiveAttributeEligibility.nonMatchingAttributeFactor;
    if(override?.attribute===c.attribute&&['physicalAttack','magicalAttack'].includes(c.target))factor=override.amountPerPoint;
    if(c.attribute==='strength'&&target==='physicalAttack')factor*=model.strengthAttackClassModifiers?.classMultipliers[key]??1;
    if(c.attribute==='intelligence'&&target==='magicalAttack')factor*=model.intelligenceAttackClassModifiers?.classMultipliers[key]??1;
    if(c.attribute==='vitality'&&model.vitalityClassModifiers?.targets.includes(target))factor*=model.vitalityClassModifiers.classTargetMultipliers?.[key]?.[target]??model.vitalityClassModifiers.classMultipliers[key]??1;
    if(c.attribute==='wisdom')factor*=model.wisdomClassModifiers?.classTargetMultipliers[key]?.[target]??1;
    if(c.unit==='percentagePoints')factor/=100;
    stats[target]=(stats[target]??0)+(attrs[c.attribute]??0)*factor;
  }
  for(const [k,v]of Object.entries(flat))stats[k]=(stats[k]??0)+v;
  const special=specialAttack(key,attrs);if(special)stats[special.target]+=special.amount;
  return stats;
}
function specialAttack(key,attrs){const rules=model.plannedSpecialAttributeUnlock,attribute=rules?.classAttributes?.[key];if(!attribute)return undefined;const factor=rules.classAmountsPerPoint?.[key]??rules.amountPerPoint,target=rules.classTargets?.[key]??rules.target;return {attribute,factor,target,amount:(attrs[attribute]??0)*factor,assumption:'R6 class-specific unlock assumed active'};}
const rows=[],passiveRows=[];
for(const c of baselines.classes){
  const initial=c.baseStats,levelAttrs={vitality:59,wisdom:59,strength:59,intelligence:59};
  const base=build(c.key,levelAttrs,{},initial);
  const pre=await read(`data/balancing/${c.key}-precombat.json`);
  for(const weapons of [loadouts[c.key]]){
    const attrs={...levelAttrs},flat={},armor=equipment.armor.find(x=>x.name===armorNames[c.key]&&x.rank===6);
    const unresolvedWeapon=[];
    for(const [stat,value]of Object.entries(armor.raw)){
      const result=applyEquipmentBonus({stat,value,unit:['attackSpeed','movementSpeed','criticalDamageBonus'].includes(stat)?armor.rawUnits?.[stat]:'flat'},attrs,flat);
      if(!result.applied)unresolvedWeapon.push({weapon:armor.name,label:stat,value,reason:result.reason});
    }
    for(const effect of applyItemComparisonBonuses(armor,attrs,flat))unresolvedWeapon.push({weapon:armor.name,label:effect.stat??effect.name??'Spezialeffekt',value:effect.value??'offen',...effect});
    for(const [i,name]of weapons.entries()){
      const efficiency=i===1&&['villian','gladiator'].includes(c.key)?0.9:1;
      const weapon=equipment.weapons.find(x=>x.name===name&&x.rank===6);
      for(const b of weapon.raw){
        const attribute={'Vita':'vitality','Wisdom':'wisdom','Stärke':'strength','Dexterity':'dexterity','Ambush':'ambush','Intelligence':'intelligence','Faith':'faith','Vic':'victim','Int/Faith/Vic':'intelligence','Agility':'agility','Agylity':'agility'}[b.label];
        const actualAttribute=b.label==='Int/Faith/Vic'?'intelligence':attribute;
        if(actualAttribute)attrs[actualAttribute]=(attrs[actualAttribute]??0)+b.value;
        const target={'P.Ang':'physicalAttack','M.Ang':'magicalAttack','P.Deff':'physicalDefense'}[b.label];
        if(target)flat[target]=(flat[target]??0)+b.value*(target.endsWith('Attack')?efficiency:1);
        if(b.label==='ATK Speed')flat.attackSpeed=(flat.attackSpeed??0)+b.value/100;
        const extra={'HP-Reg':'healthRegen','MP-Reg':'manaRegen','Movement Speed':'movementSpeed','Lauftempo':'movementSpeed','Genauigkeit':'accuracy','Ausweichen':'dodge','Glück':'luck'}[b.label];
        if(extra){const result=applyEquipmentBonus({stat:extra,value:b.value,unit:b.unit??(['movementSpeed'].includes(extra)?undefined:'flat')},attrs,flat);if(!result.applied)unresolvedWeapon.push({weapon:name,...b,reason:result.reason});}
        if(['Krit Ch.','Block'].includes(b.label))unresolvedWeapon.push({weapon:name,...b});
      }
      for(const effect of applyItemComparisonBonuses(weapon,attrs,flat,{directAttackFactor:efficiency}))unresolvedWeapon.push({weapon:name,label:effect.stat??effect.name??'Spezialeffekt',value:effect.value??'offen',...effect});
    }
    const equipped=build(c.key,attrs,flat,initial),name=names[c.key],row={key:c.key,name,sp:sp.classes.find(x=>x.key===c.key).sp,base,equipped,weapons,knownAttributes:attrs,unresolvedWeapon,attackIncomplete:false};rows.push(row);
    const variants=c.key==='adventurer'?pre.variants.filter(v=>v.weapon==='2H Schwert'||v.weapon==='Sword'):pre.variants;
    for(const variant of variants){
      const pa={...attrs},pf={...flat},numbers=[...variant.includedSkills];if(c.key==='villian'&&!numbers.includes(243))numbers.push(243);
      // These passive skills now also have unconditional attributes; retain their triggered effects separately.
      if(['adventurer','gladiator'].includes(c.key)&&!numbers.includes(145))numbers.push(145);
      if(c.key==='butcher'&&!numbers.includes(177))numbers.push(177);
      for(const nr of numbers){const s=skills.find(x=>x.nr===nr);if(!s)throw Error('Missing skill');for(const [k,curve]of Object.entries(s.statScaling??{})){const v=end(curve,s.maxSkillLv);if(aliases[k])pa[aliases[k]]=(pa[aliases[k]]??0)+v;else if(direct[k])pf[direct[k]]=(pf[direct[k]]??0)+v;}for(const k of [...Object.keys(aliases),...Object.keys(direct)]){if(s.statScaling?.[k]||typeof s[k]!=='number')continue;if(aliases[k])pa[aliases[k]]=(pa[aliases[k]]??0)+s[k];else pf[direct[k]]=(pf[direct[k]]??0)+s[k];}}
      if(c.key==='ritualist'&&numbers.includes(120)){const reaper=skills.find(s=>s.nr===120),storage=reaper.soulStorageSettings;if(storage.bonusStat){const attribute=aliases[storage.bonusStat];const capacity=end(storage.capacityScaling,reaper.maxSkillLv);pa[attribute]=(pa[attribute]??0)+Math.floor(capacity/storage.fragmentsPerBonusStep)*storage.bonusPerFullStep;}}
      if(c.key==='ritualist'&&numbers.includes(241)){
        const reaper=skills.find(s=>s.nr===120);
        const capacity=end(reaper.soulStorageSettings.capacityScaling,reaper.maxSkillLv);
        pf.magicalAttack=(pf.magicalAttack??0)+soulReserveAttackBonus(skills.find(s=>s.nr===241),capacity);
      }
      for(const nr of numbers){const cv=skills.find(x=>x.nr===nr)?.attributeConversionBonus;if(cv?.sourceStat==='vita'&&cv.targetStat==='str')pa.strength=(pa.strength??0)+(pa.vitality??0)*attributeConversionFactor(skills.find(s=>s.nr===nr));}
      for(const nr of numbers){const cv=skills.find(x=>x.nr===nr)?.attributeConversionBonus;if(cv?.sourceStat==='dex'&&cv.targetStat==='maxMana')pf.maxMana=(pf.maxMana??0)+(pa.dexterity??0)*attributeConversionFactor(skills.find(s=>s.nr===nr));}
      const stats=build(c.key,pa,pf,initial);
      stats.manaRegen*=permanentManaRegenMultiplier(skills,numbers);
      passiveRows.push({key:c.key,name:name+(c.key==='ritualist'?` / ${variant.weapon}`:''),weapons,knownAttributes:pa,includedSkills:numbers,stats,specialAttributeAttack:specialAttack(c.key,pa)});
    }
  }
}
if(refreshDruid){
for(let i=0;i<rows.length;i++)if(rows[i].key!==refreshedClass)rows[i]=previousComparison.rows.find(r=>r.key===rows[i].key)??rows[i];
for(let i=0;i<passiveRows.length;i++)if(passiveRows[i].key!==refreshedClass)passiveRows[i]=previousComparison.passiveRows.find(r=>r.key===passiveRows[i].key&&JSON.stringify(r.weapons)===JSON.stringify(passiveRows[i].weapons)&&JSON.stringify(r.includedSkills)===JSON.stringify(passiveRows[i].includedSkills))??previousComparison.passiveRows.find(r=>r.key===passiveRows[i].key&&r.name===passiveRows[i].name)??passiveRows[i];
}
const fields=[['maxHealth','Leben'],['maxMana','Mana'],['physicalAttack','P-Angriff'],['magicalAttack','M-Angriff'],['physicalDefense','P-DEF'],['magicalDefense','M-DEF'],['accuracy','Genauigkeit*'],['dodge','Ausweichen*'],['critChanceRating','Kritische Treffer*'],['criticalDamageBonus','Krit. Schaden'],['block','Block*'],['penetration','Penetration*'],['attackSpeed','Angriffstempo†'],['movementSpeed','Lauftempo†'],['healthRegen','HP-Reg./Tick*'],['manaRegen','MP-Reg./Tick*']];
const wholeNumberFields=new Set(['maxHealth','maxMana','physicalAttack','magicalAttack','physicalDefense','magicalDefense']);
const fmt=(v,k)=>{if(!Number.isFinite(v))throw Error('Nonfinite '+k);const speed=['attackSpeed','movementSpeed'].includes(k),percentage=k==='criticalDamageBonus';const value=v*(speed||percentage?100:1);return (wholeNumberFields.has(k)?Math.round(value):Number(value.toFixed(2))).toLocaleString('de-DE')+(speed?' Punkte':percentage?' %':'');};
const highlights=comparisonHighlights(passiveRows);
const assignments=(await read('data/reports/class-skill-counts.json')).counts;
const assignmentNames={gladiator:'Gladiator / Berserker',herbalist:'Kräuterkundler / Witcher',adventurer:'Abenteurer / Scout',hunter:'Jäger / Schütze',butcher:'Butcher / Destroyer',villian:'Schurke / Schattenkrieger',summoner:'Nachtjäger / Seelenjäger',ritualist:'Ritualist / Blutmagier',druid:'Druide / Alchemist',healer:'Heiler / Priester',shaman:'Schamane / Hochelfe',luminet:'Luminet / Lichtmagier',knight:'Ritter / Tempelritter'};
for(const pre of passiveRows)pre.learnedSkillNumbers=assignments.find(c=>c.name===assignmentNames[pre.key]).skillNumbers;
const selfBuffRows=passiveRows.map(pre=>compareSelfBuffs({pre,skills,model,assignedNumbers:assignments.find(c=>c.name===assignmentNames[pre.key]).skillNumbers}));
if(refreshDruid)for(let i=0;i<selfBuffRows.length;i++)if(selfBuffRows[i].key!==refreshedClass)selfBuffRows[i]=previousComparison.selfBuffRows.find(r=>r.key===selfBuffRows[i].key&&r.name===selfBuffRows[i].name)??selfBuffRows[i];
function table(list,select,withSP=false,colored=false){let text=`| Klasse | ${withSP?'SP | ':''}${fields.map(x=>x[1]).join(' | ')} |\n| --- | ${withSP?'---: | ':''}${fields.map(()=> '---:').join(' | ')} |\n`;for(const r of list)text+=`| ${r.name} | ${withSP?r.sp+' | ':''}${fields.map(([k])=>(colored&&highlights[k]?comparisonMarker(select(r)[k],highlights[k])+' ':'')+fmt(select(r)[k],k)).join(' | ')} |\n`;if(colored){for(const [label,property]of [['Median','median'],['Arithmetischer Mittelwert','mean'],['Gelber Bereich: ±','tolerance']])text+=`| **${label}** | ${fields.map(([k])=>highlights[k]?fmt(highlights[k][property],k):'—').join(' | ')} |\n`;}return text;}
let md='# Klassenvergleich auf Level 60\n\nAktualisierte Grundregeln, ursprüngliche R6-Ausrüstung. Keine Beispielwerte 6/4/4, Verstärkungen, Schmuck, Steine, aktiven Buffs oder Begleiterschäden. SP steht ausschließlich in der ersten Tabelle.\n\nDie Spezialisierung ist für Jäger (Geschick) und Schurke (Ambush) als Rechenszenario angesetzt: passendes Attribut 1,8, fremde Angriffsattribute 1,1. Für die übrigen Klassen gelten zunächst die allgemeinen Grundumrechnungen. Deren individuelle Klassenpassiven einschließlich Faith/Victim → M-Angriff und Wisdom → Heilerangriff sind noch nicht vollständig festgelegt und hier nicht vorweggenommen. Faith und Victim geben daher im Grundregel-Szenario P-Angriff.\n\n* Genauigkeit, Ausweichen, kritische Treffer, Block und Penetration sind bekannte Punktebeiträge, keine Prozentchancen. Unbekannte Anfangsattribute und operative Startwerte dieser neuen Spalten fehlen weiterhin; 0 bedeutet keinen bekannten Beitrag, nicht bestätigte absolute Null. Regeneration enthält 12 HP/25 Mana Grundregeneration, bekannte Attribute und permanente direkte Boni. Start-Vita ×4 bzw. Start-Wisdom ×3 kommen gegebenenfalls hinzu; Tick-Abstand offen. Die bisherigen Ausgangswerte für Leben/Angriff/Verteidigung bleiben erhalten und Startattribute werden nicht nochmals addiert.\n\n† Tempo relativ zum Grundtempo: Agilität +0,06 Prozentpunkte je Punkt, direkte passive Boni additiv als Vergleichsannahme. Waffen-Speed-Abzüge und Waffenkrit sind wegen ihrer noch offenen Verrechnung separat ausgewiesen und nicht eingerechnet. Keine Angriffe/Sekunde oder Meter/Sekunde. Keine bestätigte Agilität-zu-Lauftempo-Umrechnung. Kritischer Schaden ist der zusätzliche Bonus von 80 Prozent.\n\n## Basis ohne Ausrüstung\n\n';
md+=table(rows.filter((r,i)=>rows.findIndex(x=>x.key===r.key)===i),r=>r.base,true);
md+='\n## Mit Waffen und Rüstung\n\n'+table(rows,r=>r.equipped);
md+='\n## Vergleich mit permanenten Passiven vor dem Kampf\n\n🔴 unter dem Vergleichsbereich · 🟡 nahe am Median · 🟢 über dem Vergleichsbereich. Die Farben zeigen ausschließlich die relative Lage, keine Bewertung als gut oder schlecht. Gelber Bereich einschließlich Grenzen: Leben und Mana jeweils Median ±500; P-/M-Angriff, P-/M-Verteidigung und HP-/MP-Regeneration jeweils Median ±10 %. Nur diese acht Spalten werden markiert.\n\nJede der 13 Klassen zählt einmal: Bei mehreren Waffen-/Seelenspeicher-Varianten wird zunächst deren Mittelwert je Klasse gebildet; daraus folgen Median und arithmetischer Mittelwert über alle Klassen. Die sichtbaren Varianten werden einzeln gegen diesen gemeinsamen Bereich eingeordnet.\n\n'+table(passiveRows,r=>r.stats,false,true);
md+='\nRitualist: leerer und voller Seelenspeicher separat; Ausbrennen als Kampfzustand ausgeschlossen. Technische Perfektion beim Schurken enthalten. Keine Änderung an Skillzuweisungen oder Ausrüstungsdefinitionen.\n\n## Ausrüstungsannahmen\n\n| Klasse | Waffen | Noch nicht verrechnete Waffenwerte |\n| --- | --- | --- |\n';
for(const r of rows)md+=`| ${r.name} | ${r.weapons.join(' + ')} | ${r.unresolvedWeapon.map(x=>`${x.weapon}: ${x.label} ${x.value}${x.condition?' (Bedingung: '+x.condition+')':''}${x.description?' — '+x.description:''}`).join('; ')||'Keine weiteren offenen Ausrüstungsboni'} |\n`;
md+='\nBei Magiewaffen wird Int/Faith/Vic weiterhin einmal als alternativer Intelligenzbonus angesetzt, nicht dreifach. Nebenhand beim Gladiator und Schurken: 90 Prozent direkter Angriff und offensiver Waffenattribute. Sonstige Attribute bleiben davon unberührt. Beim Abenteurer bleiben Schwert und Streitkolben Alternativen; andere Waffenvarianten sind Vergleichsszenarien. Startattribute, Klassenindividualisierung und Waffen-Speed-Verrechnung müssen vor abschließenden Balanceurteilen ergänzt werden.\n';
md=md.replace('Waffen-Speed-Abzüge und Waffenkrit sind wegen ihrer noch offenen Verrechnung separat ausgewiesen und nicht eingerechnet.','Waffen-Speed-Abzüge sind mit ihrem vollständigen Wert additiv eingerechnet, auch auf der Nebenhand. Waffenkrit und Schildblock bleiben wegen offener Einheiten separat und sind nicht eingerechnet.');
md=md.replace('90 Prozent direkter Angriff und offensiver Waffenattribute. Sonstige Attribute bleiben davon unberührt.','90 Prozent direkter Waffenangriff. Sämtliche Attributboni zählen zu 100 Prozent; Angriffstempoabzüge beider Waffen zählen ebenfalls vollständig. Zweihandwaffen erhalten keinen pauschalen Nebenhandabzug.');
md=md.replace('Startattribute, Klassenindividualisierung und Waffen-Speed-Verrechnung müssen','Startattribute, Klassenindividualisierung und die Verrechnung von Waffen-Crit/Schildblock müssen');
md+='\nGespeicherte R6-Tempoabzüge: Zweihandaxt −30 Prozentpunkte; zwei Einhandäxte jeweils −15, zusammen −30; zwei Dolche jeweils −10, zusammen −20. Diese Quelldaten wurden nicht geändert.\n';
md=md.replace('Noch nicht verrechnete Waffenwerte','Noch nicht verrechnete Ausrüstungswerte / Effekte');
md=md.replace('Int/Faith/Vic weiterhin einmal als alternativer Intelligenzbonus angesetzt','Int/Faith/Vic einmal passend als Faith beim Luminet, Victim beim Ritualisten und Intelligenz bei den übrigen Magieklassen angesetzt');
md=md.replace(/Die Spezialisierung ist für Jäger[\s\S]*?Faith und Victim geben daher im Grundregel-Szenario P-Angriff\./,'Interne Klassenumrechnung ohne zusätzliche Skills oder SP: klassenfremde Angriffsattribute geben 0 Angriff. Bestätigt sind Geschick für Jäger/Seelenjäger und Ambush für Schurke. Andere Attributwirkungen bleiben erhalten. Für die noch einzeln zu prüfenden Klassen verwendet das Vergleichsszenario vorläufig Stärke bei körperlichen Kämpfern, Intelligenz bei Magiern und Stärke/Intelligenz bei den bisherigen Hybridvarianten. Faith/Victim und ihre Abgrenzung zu Intelligenz bei Luminet/Ritualist bleiben bis zur Bestätigung aus dem Angriff ausgeschlossen. Die ±5/10-Prozent-Vorschläge für Vita/Stärke sind nicht angewendet.');
md+='\nRüstungs- und Waffenboni werden gemeinsam vor der Attributumrechnung gesammelt. Explizit erfasste permanente Tempo-, Regenerations-, Attribut- und Kampfwertboni werden eingerechnet. Bedingte Effekte und Boni mit ungeklärter Einheit stehen separat; sie gelten nicht automatisch vor dem Kampf. In der aktuellen Rüstungsquelle sind keine zusätzlichen Lauf-/Angriffstempoboni oder direkten Regenerationsboni erfasst. Daher wurden keine Schuhboni oder Gewichtsabzüge erfunden. Summen der Rüstung werden nicht nochmals mit ihren Einzelteil-Verteilungen addiert. Strukturierte Ergänzungen werden als comparisonBonuses (stat, value, unit, optionale condition) beziehungsweise comparisonEffects erfasst.\n';
md=md.replace('Faith/Victim und ihre Abgrenzung zu Intelligenz bei Luminet/Ritualist bleiben bis zur Bestätigung aus dem Angriff ausgeschlossen.','Luminet verwendet ausschließlich Faith, Ritualist ausschließlich Victim mit jeweils 2 M-Angriff pro Punkt; Intelligenz liefert ihnen keinen M-Angriff.');
md=md.replace(/Interne Klassenumrechnung ohne zusätzliche Skills oder SP:[\s\S]*?Die ±5\/10-Prozent-Vorschläge für Vita\/Stärke sind nicht angewendet\./,'Interne Klassenumrechnung: fremde Angriffsattribute geben 0 Angriff. Geschick gibt nur Jäger/Seelenjäger Angriff. Ambush, Faith und Victim sind erhaltene Spezialwerte ohne direkte Angriffsumrechnung; ihre späteren Schwellenboni und Zusatzskills sind noch nicht festgelegt. Für den Vergleich gelten vorläufig Stärke bei körperlichen Kämpfern einschließlich Schurke, Intelligenz bei Magiern einschließlich Luminet/Ritualist und Stärke/Intelligenz bei den bisherigen Hybridvarianten. Andere Attributwirkungen bleiben erhalten. Die ±5/10-Prozent-Vorschläge für Vita/Stärke sind nicht angewendet.');
md=md.replace('Int/Faith/Vic einmal passend als Faith beim Luminet, Victim beim Ritualisten und Intelligenz bei den übrigen Magieklassen angesetzt','Int/Faith/Vic vorläufig einmal als Intelligenzbonus angesetzt');
md+='\nBestätigte Umstellung: Schurke verwendet Stärke, Ritualist und Luminet verwenden Intelligenz als normale Angriffsquelle. Ambush, Victim und Faith bleiben als Spezialwerte ohne direkte Angriffsumrechnung erhalten; bestehende Skillboni darauf werden nicht automatisch ersetzt.\n';
md=md.replace('Die ±5/10-Prozent-Vorschläge für Vita/Stärke sind nicht angewendet.','Vita-Sonderfaktoren sind noch nicht angewendet. Für den Stärke-Angriffsbeitrag gelten Butcher +10 % (1,98), Gladiator und Schamane +5 % (1,89), übrige Stärke-Klassen Standard (1,8). Penetration bleibt unverändert. Nicht für Stärke-Angriff zugelassene Klassen bleiben bei 0.');
md=md.replace('Vita-Sonderfaktoren sind noch nicht angewendet.','Vita: Ritter +10 % auf Leben/P-DEF/HP-Regeneration pro Punkt (33/2,2/4,4), Gladiator +5 % (31,5/2,1/4,2), übrige Klassen Standard (30/2/4). Nur der Attributbeitrag wird erhöht.');
md+='\nIntelligenz zu M-Angriff: Druide und Kräuterkundler +5 % (1,89 je Punkt), Luminet und Ritualist +10 % (1,98), Heiler und Schamane Standard (1,8). Nur der Intelligenzbeitrag wird erhöht; direkte Waffen-/Skillangriffsboni bleiben unverändert.\n';
md+='\nWillenskraft: Heiler +10 % auf alle drei Umrechnungen (33 Mana, 2,2 M-DEF, 3,3 MP-Regeneration je Punkt). Kräuterkundler, Luminet und Ritualist +5 % ausschließlich auf M-DEF (2,1). Jäger und Ritter +10 % ausschließlich auf M-DEF (2,2). Seelenjäger +5 % auf Mana/M-DEF (31,5/2,1). Schurke +5 % ausschließlich auf Mana (31,5). Alle anderen Willenskraft-Umrechnungen bleiben Standard. Direkte Ausrüstungs-/Skillboni werden nicht mitmultipliziert.\n';
md=md.replace('Ritter +10 % auf Leben/P-DEF/HP-Regeneration pro Punkt (33/2,2/4,4)','Ritter +10 % auf Leben/HP-Regeneration und +5 % auf P-DEF pro Punkt (33/2,1/4,4)');
md=md.replace('Kräuterkundler, Luminet und Ritualist +5 % ausschließlich auf M-DEF (2,1). Jäger und Ritter +10 % ausschließlich auf M-DEF (2,2).','Kräuterkundler und Ritter +5 % ausschließlich auf M-DEF (2,1). Jäger +10 % ausschließlich auf M-DEF (2,2). Luminet und Ritualist erhalten keinen zusätzlichen Willenskraft-/M-DEF-Bonus (Standard: 2 M-DEF).');
if(new Set(rows.map(x=>x.key)).size!==13||rows.length!==13)throw Error('Incomplete class comparison');
md+='\nAktuelle MP-Regel: Willenskraft liefert '+model.conversions.find(c=>c.attribute==='wisdom'&&c.target==='manaRegen').amountPerPoint.toLocaleString('de-DE')+' MP-Regeneration pro Punkt und Tick. MP-Regeneration tickt alle '+(model.regenerationTiming?.manaTickIntervalSeconds??'noch offenen')+' Sekunden. HP-Tick unverändert; im bisherigen Test 2 Sekunden. Die aktuelle Zehn-Minuten-Auswertung steht separat in all-class-timed-damage.md.\n';
let buffSection='\n## Vergleich mit permanenten Passiven und eigenen Buffs\n\nR6-Momentaufnahme mit gleichzeitig aktiven eigenen Buffs auf der maximal lernbaren Stufe. Selbst gewirkte Gruppenbuffs sind enthalten, Buffs anderer Klassen nicht. Kurze Buffs werden vollständig angesetzt: Dies sind zeitweise Spitzenwerte, keine dauerhaft verfügbaren Werte und kein neuer Schadenstest. Jede Definition zählt einmal. Ausrüstung und permanente Passive entsprechen der vorherigen Tabelle.\n\n'+table(selfBuffRows,r=>r.stats);
buffSection+='\nDie MP-Regeneration ist der Bruttowert je 3-Sekunden-Tick. Aktivierungskosten und laufende Toggle-Kosten ändern die angezeigte Max-Mana-Kapazität oder Brutto-Regeneration nicht. Max-Leben-/Max-Mana-Boni sind keine sofortige Heilung oder Mana-Wiederherstellung. Keine Beschwörungen, Kampf-Procs, zufälligen Zusatzschäden oder erst durch Angriffe/Felder aktivierten Buffs. Faith/Victim/Ambush folgen derselben Grundregel wie in der vorherigen Tabelle; die separate R6-Freischaltannahme des Zehn-Minuten-Tests wird hier nicht zusätzlich aktiviert.\n\n### Eingerechnete eigene Buffs und Sonderfälle\n\n| Klasse | Eigene Buffs (maximale Dauer) | Separate Effekte / Annahmen |\n| --- | --- | --- |\n';
for(const r of selfBuffRows){const notes=[...r.notes,...r.excluded.map(e=>e.name+': '+e.reason),...r.buffs.flatMap(b=>b.notes.map(n=>b.name+': '+n))];buffSection+=`| ${r.name} | ${r.buffs.map(b=>`${b.name} (${b.durationSeconds===0?'Toggle':b.durationSeconds===null?'Dauer offen':b.durationSeconds+' s'})`).join('; ')||'Keine'} | ${notes.join('; ').replaceAll('|','/')} |\n`;}
md=md.replace('\nRitualist: leerer und voller Seelenspeicher separat;',buffSection+'\nRitualist: leerer und voller Seelenspeicher separat;');
md=md.replace('Keine Beispielwerte 6/4/4, Verstärkungen, Schmuck, Steine, aktiven Buffs oder Begleiterschäden.','Keine Beispielwerte 6/4/4, Verstärkungen, Schmuck, Steine oder Begleiterschäden. Aktive eigene Buffs werden ausschließlich in der gesonderten Bufftabelle angesetzt.');
md=md.replace('Start-Vita ×4 bzw. Start-Wisdom ×3 kommen gegebenenfalls hinzu; Tick-Abstand offen.','Start-Vita ×4 bzw. Start-Wisdom ×0,9 kommen gegebenenfalls hinzu; MP-Tick alle 3 Sekunden.');
md=md.replace('Willenskraft: Heiler +10 % auf alle drei Umrechnungen (33 Mana, 2,2 M-DEF, 3,3 MP-Regeneration je Punkt).','Willenskraft: Heiler Standard (30 Mana, 2 M-DEF und 0,9 MP-Regeneration je Punkt).');
md=md.replace('Luminet und Ritualist +10 % (1,98), Heiler und Schamane Standard (1,8).','Luminet und Ritualist 1,6 je Punkt, Heiler und Schamane Standard (1,8).');
md=md.replace('Bestätigt sind Geschick für Jäger/Seelenjäger und Ambush für Schurke.','Bestätigt sind Geschick für Jäger/Seelenjäger und Stärke für Schurke.');
md=md.replace(/Interne Klassenumrechnung:[^\n]+/,'Interne Klassenumrechnung: fremde normale Angriffsattribute geben 0 Angriff. Schurke verwendet Stärke, Jäger und Seelenjäger Geschick; Magier verwenden Intelligenz gemäß den klassenbezogenen Faktoren. Für diesen R6-Vergleich wird zusätzlich die klassenspezifische Freischaltung ab Rang 4 vorausgesetzt: Schurke +1,8 P-Angriff je Ambush, Luminet +1,8 M-Angriff je Faith, Ritualist +1,9 M-Angriff je Victim. Diese Beiträge werden genau einmal eingerechnet. Sonstige Attributwirkungen bleiben erhalten.');
md=md.replace(/Bestätigte Umstellung:[^\n]+/,'R6-Spezialattribute sind in den Tabellen berücksichtigt. Die separate spielseitige Quest-/Skillfreischaltung ist weiterhin nicht angelegt; hier gilt dieselbe Freischaltannahme wie im Zehn-Minuten-Test.');
md=md.replace('Faith/Victim/Ambush folgen derselben Grundregel wie in der vorherigen Tabelle; die separate R6-Freischaltannahme des Zehn-Minuten-Tests wird hier nicht zusätzlich aktiviert.','Faith/Victim/Ambush verwenden dieselbe R6-Freischaltannahme wie die vorherige Tabelle und der Zehn-Minuten-Test; eigene Buffboni auf diese Attribute werden mitgerechnet.');
await fs.writeFile('data/balancing/class-comparison-level60.json',JSON.stringify({level:60,rank:6,status:'updatedBaseRulesClassSpecializationsIncomplete',dualWeaponEfficiency:{mainHand:1,offHand:0.9,scope:'Direct weapon attack only; all attributes and speed penalties at full value'},rows,passiveRows,selfBuffRows,fields,highlights,highlightMethod:'Median across 13 equally weighted class averages; HP/MP tolerance 500, other selected fields 10 percent of median'},null,2)+'\n');
md+='\nAnzeige: Leben, Mana, P-/M-Angriff und P-/M-DEF werden auf ganze Zahlen gerundet, einschließlich der zugehörigen Median-, Mittelwert- und Toleranzangaben. Ab Genauigkeit sind bis zu zwei Nachkommastellen möglich. Berechnungen und Farbzuordnung verwenden weiterhin ungerundete Werte; Grenzfälle können durch die Anzeige gleich aussehen. Attributfaktoren in den Erläuterungen bleiben exakt angegeben.\n';
md=md.replace('Luminet und Ritualist 1,6 je Punkt','Luminet und Ritualist 1,8 je Punkt').replace(/Schurke \+1,8 P-Angriff je Ambush, Luminet \+1,8 M-Angriff je Faith, Ritualist \+1,9 M-Angriff je Victim\./,'Schurke +1,8 P-Angriff je Ambush. Luminet und Ritualist verwenden ausschließlich Intelligenz; Faith und Victim liefern keinen zusätzlichen Angriff.').replace('Faith/Victim/Ambush verwenden dieselbe R6-Freischaltannahme wie die vorherige Tabelle und der Zehn-Minuten-Test; eigene Buffboni auf diese Attribute werden mitgerechnet.','Nur Ambush nutzt die R6-Freischaltannahme. Luminet und Ritualist verwenden Intelligenz.');
md=md.replace('# Klassenvergleich auf Level 60','# All Basic Stats – Klassenwerte auf Level 60');
md=md.replace('† Tempo relativ zum Grundtempo:','† Tempo wird als additive Rohpunkte angezeigt (100 Punkte entsprechen dem Grundtempo), nicht als direkter Prozentbonus. Angriffsgeschwindigkeit folgt im Schadenstest nach dem Stapeln aller Boni der vorhandenen Sättigungskurve. Eine Laufgeschwindigkeitskurve ist noch nicht definiert. Weitere Attributregeln:');
md=md.replace('Aktualisierte Grundregeln, ursprüngliche R6-Ausrüstung.','Aktuelle R6-Rüstung nach der Überarbeitung: nur direkte P-/M-Abwehr, keine festen Vita-, Willenskraft-, Lebens- oder Manaboni. Noch keine Zufallsboni oder Steine eingerechnet. Waffenattribute bleiben enthalten.');
const factorFor=(attribute,target,key)=>{
 const base=model.conversions.find(c=>c.attribute===attribute&&c.target===target).amountPerPoint;
 const mods=attribute==='vitality'?model.vitalityClassModifiers:model.wisdomClassModifiers;
 return base*(mods?.classTargetMultipliers?.[key]?.[target]??mods?.classMultipliers?.[key]??1);
};
const exact=n=>Number(n.toFixed(4)).toLocaleString('de-DE');
md=md.replace(/Vita: Ritter[^\n]+Nur der Attributbeitrag wird erhöht\./,
 `Vita: Standard ${exact(factorFor('vitality','maxHealth','adventurer'))} Leben / ${exact(factorFor('vitality','physicalDefense','adventurer'))} P-Abwehr / ${exact(factorFor('vitality','healthRegen','adventurer'))} HP-Regeneration je Punkt; Gladiator ${exact(factorFor('vitality','maxHealth','gladiator'))} / ${exact(factorFor('vitality','physicalDefense','gladiator'))} / ${exact(factorFor('vitality','healthRegen','gladiator'))}; Ritter ${exact(factorFor('vitality','maxHealth','knight'))} / ${exact(factorFor('vitality','physicalDefense','knight'))} / ${exact(factorFor('vitality','healthRegen','knight'))}. Nur der Attributbeitrag erhält die Klassenmodifikatoren.`);
md=md.replace(/\nWillenskraft:[^\n]+/,
 `\nWillenskraft: Standard ${exact(factorFor('wisdom','maxMana','healer'))} Mana / ${exact(factorFor('wisdom','magicalDefense','healer'))} M-Abwehr / ${exact(factorFor('wisdom','manaRegen','healer'))} MP-Regeneration je Punkt. Kräuterkundler, Ritter und Seelenjäger erhalten ${exact(factorFor('wisdom','magicalDefense','knight'))} M-Abwehr, Jäger ${exact(factorFor('wisdom','magicalDefense','hunter'))}. Seelenjäger und Schurke erhalten ${exact(factorFor('wisdom','maxMana','summoner'))} Mana. Übrige Umrechnungen bleiben Standard; direkte Boni werden nicht mitmultipliziert.`);
const gladiSource=passiveRows.find(r=>r.key==='gladiator');
const gladiEquipped=rows.find(r=>r.key==='gladiator'),gladiArmor=equipment.armor.find(r=>r.name==='Gladiator'&&r.rank===6);
const gladiInitial=baselines.classes.find(c=>c.key==='gladiator').baseStats.maxHealth;
const armorVita=gladiArmor.raw.vitality??0,armorLife=gladiArmor.raw.health??0;
const weaponVita=gladiEquipped.knownAttributes.vitality-59-armorVita;
const passiveVita=gladiSource.knownAttributes.vitality-gladiEquipped.knownAttributes.vitality;
md+=`\n## Herkunft der Lebenswerte – Kontrollbeispiel Gladiator\n\nDie Rüstung liefert derzeit ${exact(armorVita)} Vitalität und ${exact(armorLife)} direktes Leben. Mit permanenten Passiven stammen die ${exact(gladiSource.knownAttributes.vitality)} bekannten Vita aus 59 Levelzuwachs, ${exact(passiveVita)} permanenten Passivboni, ${exact(weaponVita)} Waffen-Vita und ${exact(armorVita)} Rüstungs-Vita. Startleben: ${exact(gladiInitial)}; Leben je Vita: ${exact(factorFor('vitality','maxHealth','gladiator'))}; Gesamtleben: ${exact(gladiSource.stats.maxHealth)}. Die geplanten Zufallsboni sind dabei noch nicht eingerechnet.\n`;
await fs.writeFile('docs/balancing/class-comparison.md',md);
console.log(`Updated comparison: ${rows.length} loadouts, ${passiveRows.length} passive scenarios, ${fields.length} values; SP only in first table.`);


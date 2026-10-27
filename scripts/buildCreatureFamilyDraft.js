import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {familyDraftStats, rawPetAutoProbe} from '../services/creatureFamilyDraft.js';
import {resolveSkillAtLevel} from '../services/skillLevel.js';
import {skillForClass} from '../services/skillLearningLevel.js';

const read = async path => JSON.parse(await fs.readFile(path, 'utf8'));
const sourcePaths = ['data/balancing/creature-family-draft.json', 'data/balancing/attribute-model.json', 'data/skills.json',
  'data/balancing/class-comparison-level60.json', 'data/balancing/all-class-timed-damage.json', 'services/creatureFamilyDraft.js', 'services/attackSpeed.js'];
const [draft, model, skills, comparison, players] = await Promise.all(sourcePaths.slice(0, 5).map(read));
const f = (value, digits = 2) => value.toLocaleString('de-DE', {maximumFractionDigits: digits});
const pct = value => f(value) + ' %';
const families = draft.families.map(template => ({id: template.id, name: template.name,
  levels: draft.displayLevels.map(level => {
    const row = familyDraftStats(template, level, model);
    return {...row, autoProbe: rawPetAutoProbe(row.stats, template)};
  })}));
const wolf = draft.families.find(x => x.id === 'wolf-body-1');
const aliases = {str: 'strength', vita: 'vitality', int: 'intelligence', wis: 'wisdom', dex: 'dexterity', agi: 'agility'};
function bondBonuses(classKey) {
  const definition = skillForClass(skills.find(s => s.nr === 134), classKey);
  const resolved = resolveSkillAtLevel(definition, definition.maxSkillLv);
  return Object.fromEntries(resolved.effects.filter(e => e.type === 'statModifier' && e.target === 'companion').map(e => [aliases[e.stat], e.value]));
}
const wild = resolveSkillAtLevel(skills.find(s => s.nr === 246), 1).companionBondSettings;
const wolfClassAddition = players.results.map(player => {
  const pre = comparison.passiveRows.find(r => r.key === player.key && (r.key !== 'ritualist' || !r.includedSkills.includes(120)));
  const pet = familyDraftStats(wolf, 60, model, {attributeBonuses: bondBonuses(player.key)});
  const wildAddition = player.key === 'adventurer' ? {
    physicalAttack: pre.stats.physicalAttack * wild.physicalAttackFractionByLevel[0],
    physicalDefense: pre.stats.physicalDefense * wild.physicalDefenseFractionByLevel[0],
    magicalDefense: pre.stats.magicalDefense * wild.magicalDefenseFractionByLevel[0],
  } : {};
  for (const [key, value] of Object.entries(wildAddition)) pet.stats[key] += value;
  const probe = rawPetAutoProbe(pet.stats, wolf), count = player.key === 'adventurer' ? 2 : 1;
  return {key: player.key, name: player.name, playerDamage: player.totalDamage, petCount: count, bondAttributeBonuses: bondBonuses(player.key),
    wildTrustAssumption: player.key === 'adventurer' ? 1 : null, wildAddition, petStats: pet.stats,
    damagePerPet: probe.totalDamage, additionalPetDamage: probe.totalDamage * count,
    combinedDamage: player.totalDamage + probe.totalDamage * count};
});
const factorSensitivity = [1, 1.15, 1.3].map(factor => {
  const row = familyDraftStats(wolf, 60, model, {profileFactor: factor});
  return {factor, stats: row.stats, autoProbe: rawPetAutoProbe(row.stats, wolf)};
});
const report = {status: 'proposalForReview', generatedAt: new Date().toISOString(), databaseApplied: false,
  inputHashes: Object.fromEntries(await Promise.all(sourcePaths.map(async path => [path, createHash('sha256').update(await fs.readFile(path)).digest('hex')]))),
  playerBaselineGeneratedAt: players.generatedAt, families, factorSensitivity, wolfClassAddition,
  probeScope: '600 seconds against the existing 10,000,000-HP dummy, no armor or incoming attacks. First basic hit after one full attack interval. No skills, crits, misses, dodges, pathing, healing, mana costs, trust progression or pet death. This is an auto-attack calculation, not a completed pet simulation. Player traces are reused unchanged; no player rerun.',
  additionScope: 'Ordinary maximum Bond per class; Adventurer two identical example wolves, maximum Bond and Wild Bond at 100% trust with permanent owner stats. No optional own/group buffs, Blood Scent, Pack Attack, pet skills, equipment or action costs.'};
await fs.writeFile('data/balancing/creature-family-preview.json', JSON.stringify(report, null, 2) + '\n');

function growthTable(template) {
  const names = {strength: 'Stärke', vitality: 'Vitalität', intelligence: 'Intelligenz', wisdom: 'Willenskraft', dexterity: 'Geschick', agility: 'Agilität', luck: 'Glück'};
  let md = '| Attribut | Level 1 | Zuwachs je weiterem Level |\n| --- | ---: | ---: |\n';
  for (const [key, value] of Object.entries(template.attributesLevelOne)) md += `| ${names[key]} | ${f(value)} | ${f(template.attributeGainPerLevel[key] ?? 0)} |\n`;
  return md;
}
function levelTable(family) {
  let md = '| Level | Leben | Mana | P-Angriff | M-Angriff | P-Abwehr | M-Abwehr | Angriffe/s | Auto-Schaden / 600 s |\n| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n';
  for (const row of family.levels) {
    const s = row.stats;
    md += `| ${row.level === 60 ? '**60**' : row.level} | ${f(s.maxHealth)} | ${f(s.maxMana)} | ${f(s.physicalAttack)} | ${f(s.magicalAttack)} | ${f(s.physicalDefense)} | ${f(s.magicalDefense)} | ${f(1 / row.autoProbe.interval, 3)} | ${f(row.autoProbe.totalDamage, 0)} |\n`;
  }
  return md;
}
function variants(group) {
  let md = '| Bisheriger Name | Grundmodell | Namensstatus |\n| --- | --- | --- |\n';
  for (const v of group.variants) md += `| ${v.name} | ${v.familyId ?? 'Noch zuzuordnen'} | ${v.nameStatus === 'pending' ? 'Offen; Vorschlag: ' + v.nameSuggestion : 'Gesammelt'} |\n`;
  return md;
}
const formula = 'Attribut auf Level L = Startwert + (L − 1) × Levelzuwachs. Kein wiederholtes Multiplizieren des vorherigen Levels und keine stillschweigend bestätigte ×1,5-Kurve. Die Vorlage ist zunächst linear, damit wir ihre Wirkung leicht prüfen können.\n\n';
const conversions = 'Vorgeschlagene Umrechnung aus dem aktuellen allgemeinen Attributmodell: 30 Leben je Vita, 30 Mana je Willenskraft, 1,2 P-Abwehr je Vita, 1,2 M-Abwehr je Willenskraft und 1,8 P-Angriff je Stärke. Geschick gibt Genauigkeit; Agilität gibt Ausweichen und 0,06 Angriffstempopunkte je Punkt. Keine Klassenboni. Diese Übernahme für reguläre Pets ist Teil des Entwurfs, keine bereits freigegebene Pet-Regel.\n\n';
const scope = 'Die Rechenprobe verwendet wie der bestehende Spieler-Basisvergleich ein Ziel mit 10.000.000 Leben ohne Abwehr und ohne Gegenangriffe. Nur normale Angriffe, erster Treffer nach einem vollständigen Angriffsintervall; keine eigenen Skills, zufälligen Krits, Trefferwürfe, Laufwege oder Pet-Tode. Leben und Abwehr werden hier nur angezeigt; sie erhöhen den Rohschaden nicht. Regeneration und Mana werden nicht verbraucht oder als Heilung angerechnet. Bewegung bleibt bei 100 % Basiswert; ein Agilitätsfaktor für Lauftempo wird nicht erfunden.\n\n';
let md = '# Pet-Wölfe – Grundmodell und Levelentwurf\n\n**Entwurf zur gemeinsamen Abstimmung. Nicht in der Datenbank angewendet.** Neue Grundwerte, Levelzuwächse, Grundfrequenz und Profilfaktoren sind Vorschläge. Bestehende Spieler- und Beschwörungswerte bleiben unverändert.\n\n';
md += '## Startvorlage\n\nPhysischer Nahkämpfer, 1,0 Basisangriffe pro Sekunde vor dem kleinen Agilitätsbonus. Kein eigener Angriffsskill und keine automatische Vererbung von Spielerwerten in der Familienvorlage. Bindung und Wilde Bindung werden erst im gesonderten Level-60-Beispiel ergänzt.\n\n';
md += growthTable(wolf) + '\n' + conversions;
md += '## Wachstum von Level 1 bis 100\n\n' + formula + levelTable(families.find(x => x.id === wolf.id)) + '\n' + scope;
md += 'Die Zahlen werden intern präzise gerechnet. Leben und Mana werden erst am Ende auf ganze Werte gerundet; die Anzeige anderer Werte hat höchstens zwei Nachkommastellen. Attribute, Treffer-/Ausweichwerte und Regeneration stehen vollständig im JSON-Bericht. Die vorhandene Angriffstempokurve wird einmal auf den Rohwert angewendet.\n\n';
md += '## Drei Pet-Faktoren auf Level 60\n\nBeispiele am selben Grundmodell, ohne Bindung oder Besitzerbonus. Der Faktor betrifft Leben, Mana, Angriff und Abwehr, nicht Angriffstempo, Genauigkeit oder Ausweichen. Noch keine der sieben Wolfsvarianten erhält einen dieser Faktoren.\n\n| Pet-Faktor | Leben | P-Angriff | P-Abwehr | M-Abwehr | Auto-Schaden / 600 s |\n| ---: | ---: | ---: | ---: | ---: | ---: |\n';
for (const row of factorSensitivity) md += `| ×${f(row.factor)} | ${f(row.stats.maxHealth)} | ${f(row.stats.physicalAttack)} | ${f(row.stats.physicalDefense)} | ${f(row.stats.magicalDefense)} | ${f(row.autoProbe.totalDamage, 0)} |\n`;
md += '\n## Bestehender Spielerschaden plus Beispielwolf\n\n**Vorläufige reine Additionsprobe. Keine neue Spieler-Simulation und keine fertige Gesamtbalance.** Alle Klassen bekommen denselben Level-60-Beispielwolf mit ihrem maximal lernbaren Bindungsbonus. Der Abenteurer bekommt zwei solche Wölfe, stärkere Bindung und zusätzlich Wilde Bindung bei 100 % Vertrauen aus seinen permanenten Werten. Bestehende temporäre Klassenbeschwörungen sind bereits im Spielerschaden enthalten und werden nicht doppelt addiert.\n\n';
md += 'Eigene und fremde aktive Buffs, Blutgeruch, Rudelangriff, Wolfsfähigkeiten, Pet-Ausrüstung, Laufzeiten und Opportunitätskosten fehlen noch. Deshalb ist besonders die Abenteurer-Zeile nur eine erste Größenordnung. Die zufällige Wahl späterer Pets wird dadurch nicht festgelegt.\n\n| Klasse | Bisheriger Schaden | Wölfe | Zusätzlicher Wolfschaden | Summe | Zuwachs |\n| --- | ---: | ---: | ---: | ---: | ---: |\n';
for (const row of wolfClassAddition) md += `| ${row.name} | ${f(row.playerDamage, 0)} | ${row.petCount} | ${f(row.additionalPetDamage, 0)} | ${f(row.combinedDamage, 0)} | ${pct(100 * row.additionalPetDamage / row.playerDamage)} |\n`;
md += '\n## Gesammelte Wolfsvarianten\n\nNoch keine Seltenheit, Zähmchance, Gebietszuordnung oder besondere Fähigkeit vergeben. Die Aufteilung auf Wolf-Grundmodell 1 und 2 folgt nach der Prüfung dieser Startwerte. Ein zweites Wolfsgrundmodell erhält noch keine erfundenen Werte.\n\n' + variants(draft.variantGroups.find(x => x.id === 'wolves'));
md += '\n## Zentrale Stellschrauben\n\nFamilienstartwerte und Levelzuwächse stehen einmal in `data/balancing/creature-family-draft.json`. Varianten sollen später nur auf diese Vorlage verweisen und ihre Abweichungen speichern. Für eine genaue Zieleinstellung unterstützt die Berechnung bereits das Verhältnis „Zielwert / ursprünglicher Referenzwert“ je Kampfwert: keine manuell zu erratenden Dezimalfaktoren. Wird die Familie später schwächer, wirkt das gespeicherte Verhältnis weiter mit. Es gibt noch keine festgelegten Zielwerte je Wolfsvariante und keinen Unreal-Import.\n\n';
md += 'Die Beispielprofile Pet ×1 und Monster ×2,5 sind getrennt. Profile können einzelne Kampfwerte später unterschiedlich verändern. Echte Bosse sind hier nicht angelegt.\n\n[Vogelvorlagen und Varianten](pet-birds.md). Neu erzeugen: `node scripts/buildCreatureFamilyDraft.js`.\n';
await fs.writeFile('docs/balancing/pet-wolves.md', md);

let birds = '# Pet-Vögel – zwei getrennte Grundmodelle\n\n**Entwurf zur gemeinsamen Abstimmung. Nicht in der Datenbank angewendet.** Die beiden vom Nutzer getrennten Vogelarten bleiben zwei Modell-/Skelettgruppen. Die Spielwerte sind vorläufige Vorschläge. Beide Gruppen sind vorerst physisch; Flugfähigkeit, Reichweite, Fähigkeiten und Trefferanimationen sind noch offen.\n\n' + formula + conversions;
for (const [id, groupId] of [['bird-body-1', 'birds-1'], ['bird-body-2', 'birds-2']]) {
  const template = draft.families.find(x => x.id === id);
  birds += `## ${template.name}\n\nVorgeschlagene Basisfrequenz: ${f(template.baseAttacksPerSecond)} Angriffe pro Sekunde vor Agilität.\n\n`;
  birds += growthTable(template) + '\n' + levelTable(families.find(x => x.id === id)) + '\n' + variants(draft.variantGroups.find(x => x.id === groupId)) + '\n';
}
birds += '## Vergleichsrahmen\n\n' + scope + 'Die Varianten teilen zunächst nur die Modellgruppe. Es gibt noch keine individuellen Statboni, Seltenheiten oder Zähmchancen. Die beiden Namensvorschläge sind nicht als endgültige Namen übernommen.\n\n[Wolfsgrundmodell und Level-60-Spielervergleich](pet-wolves.md). Neu erzeugen: `node scripts/buildCreatureFamilyDraft.js`.\n';
await fs.writeFile('docs/balancing/pet-birds.md', birds);
console.log(JSON.stringify({status: report.status, families: families.map(x => ({name: x.name, levelOne: x.levels[0].stats, levelSixty: x.levels.find(r => r.level === 60).stats, rawDamage60: x.levels.find(r => r.level === 60).autoProbe.totalDamage})), adventurer: wolfClassAddition.find(x => x.key === 'adventurer')}, null, 2));

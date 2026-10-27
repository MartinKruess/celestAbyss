import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { simulateClass } from '../services/timedDamageSimulation.js';
import { progressionReference, addReferenceAttributes } from '../services/progressionDpsReference.js';
import { eligibleEquipmentAffixes } from '../services/equipmentAffixEligibility.js';
import { isGroupBuff, isSelfBuff } from '../services/skillClassification.js';
import { skillForClass } from '../services/skillLearningLevel.js';
import { compareSelfBuffs } from '../services/selfBuffComparison.js';
import { equipmentUpgradeRule } from '../services/equipmentUpgrades.js';

const inputPaths = ['data/skills.json', 'data/balancing/class-comparison-level60.json',
  'data/balancing/ranked-equipment.json', 'data/balancing/attribute-model.json',
  'data/balancing/all-class-damage-rotations.json', 'data/balancing/level-one-character-reference.json',
  'data/balancing/socket-reference-budgets.json', 'data/balancing/random-affix-reference-proposal.json',
  'data/balancing/armor-defense-model.json', 'data/balancing/all-class-timed-damage.json',
  'data/balancing/socket-design.json', 'data/balancing/armor-parts.json', 'data/balancing/equipment-upgrade-rules.json'];
const texts = await Promise.all(inputPaths.map(p => fs.readFile(p, 'utf8')));
const [skills, comparison, equipment, model, rotations, levelOne, sockets, affixes, armorModel, prior, socketDesign, armorDefinition] = texts.map(JSON.parse);
const level = Number(process.argv.find(a => a.startsWith('--level='))?.split('=')[1] ?? 100), rank = 6;
assert.ok([100, 120].includes(level));
const upgrade = Number(process.argv.find(a => a.startsWith('--upgrade='))?.split('=')[1] ?? 0);
const upgradeRule = equipmentUpgradeRule(rank, upgrade);
const suffix = upgrade ? `-plus${upgrade}` : '';
const out = `data/balancing/level${level}-r6-comparison${suffix}.json`;
const mdOut = `docs/balancing/level${level}-r6-comparison${suffix}.md`;
const keys = [...new Set(comparison.passiveRows.map(r => r.key))];
assert.equal(keys.length, 13);
const reviews = await Promise.all(keys.map(k => fs.readFile(`data/balancing/${k === 'villian' ? 'rogue' : k}-skill-review.json`, 'utf8').then(JSON.parse)));
const assigned = new Map(keys.map((k, i) => [k, reviews[i].skillNumbers ?? reviews[i].skills.map(s => s.nr)]));
const providers = skills.filter(isGroupBuff).map(s => {
  const choices = keys.filter(k => assigned.get(k).includes(s.nr))
    .map(k => ({ key: k, skill: skillForClass(s, k) })).sort((a, b) => b.skill.maxSkillLv - a.skill.maxSkillLv);
  if (!choices.length) return null;
  return { nr: s.nr, name: s.skillName_de, providerKey: choices[0].key,
    level: choices[0].skill.maxSkillLv, skill: { ...choices[0].skill, effectiveSkillLevel: choices[0].skill.maxSkillLv } };
}).filter(Boolean);
const groups = providers.map(p => p.nr);
const magic = new Set(['healer', 'herbalist', 'luminet', 'ritualist']);
const hybrid = new Set(['druid', 'shaman']);
const pool = armorModel.bonusSlotRules.randomSelection.pool;
const bound = affixes.rows.find(r => r.rank === rank);
assert.equal(bound.randomSlotsPerItem, 3);
const excludedOwn = new Set([158, 152, 167, 169, 161, 188]);
const aliases = { strength: 'Stärke', intelligence: 'Intelligenz', dexterity: 'Geschick', wisdom: 'Willenskraft', vitality: 'Vitalität', agility: 'Agilität' };

function build(key, primary, secondary) {
  const pre = progressionReference({ key, level, rank, comparison, equipment, skills, model, levelOne, upgrade, armorDefinition });
  const items = [], changes = {};
  const addAttribute = (stat, value) => changes[stat] = (changes[stat] ?? 0) + value;
  for (const [index, name] of pre.weapons.entries()) {
    const half = ['1H Axt', 'Mace', 'Dagger', 'Sword', 'Shield'].includes(name);
    const channel = primary === 'intelligence' ? 'magical' : 'physical';
    const item = { id: `weapon-${index}`, name, category: 'weapons', affixes: [], gems: [] };
    const efficiency = index === 1 && ['gladiator', 'villian', 'shaman'].includes(key) ? .9 : 1;
    for (const [stat, fullValue, attribute] of [[`${channel}Attack`, bound.weaponFullReferenceAttackMaximum, false],
      [`${channel}SkillDamageBonus`, bound.weaponFullReferenceSkillDamageMaximum, false], [primary, bound.attributeMaximum, true]]) {
      assert.ok(eligibleEquipmentAffixes(pool, { category: 'weapons', weaponType: name, rank }, item.affixes.map(a => a.stat)).some(a => a.stat === stat), `Illegal ${name} ${stat}`);
      const scaled = fullValue * (half ? .5 : 1), value = stat.endsWith('SkillDamageBonus') ? scaled : Math.floor(scaled);
      item.affixes.push({ stat, value });
      if (attribute) addAttribute(stat, value);
      else pre.stats[stat] = (pre.stats[stat] ?? 0) + value * (stat.endsWith('Attack') ? efficiency : 1);
    }
    items.push(item);
  }
  for (const slot of ['chest', 'pants', 'gloves', 'helmet', 'boots']) {
    const item = { id: slot, category: 'armor', affixes: [], gems: [] };
    for (const stat of [...new Set([primary, secondary, 'vitality', 'wisdom', 'agility'])].slice(0, 3)) {
      assert.ok(eligibleEquipmentAffixes(pool, { category: 'armor', equipmentSlot: slot, rank }, item.affixes.map(a => a.stat)).some(a => a.stat === stat));
      item.affixes.push({ stat, value: bound.attributeMaximum });
      addAttribute(stat, bound.attributeMaximum);
    }
    items.push(item);
  }
  const shape = pre.weapons.includes('Shield') ? 'swordAndShield' : pre.weapons.length === 2 ? 'dualWield' : 'twoHandWeapon';
  const budget = sockets.rows.find(r => r.level === 100 && r.loadout === shape && r.definedSmithingAdditionsIncluded);
  assert.equal(budget.bonusPerStone, socketDesign.stoneValues.bonusByRank[6]);
  for (const entry of budget.items) {
    const weapons = items.filter(i => i.category === 'weapons');
    const item = entry.id.startsWith('oneHandWeapon') ? weapons[entry.id.endsWith('-6') ? 1 : 0]
      : entry.id.startsWith('twoHandWeapon') ? weapons[0]
      : entry.id.startsWith('shield') ? weapons.find(i => i.name === 'Shield') : items.find(i => i.id === entry.id.split('-')[0]);
    assert.ok(item);
    item.socketCapacity = entry.slotCount;
    const order = [...new Set([primary, secondary, 'wisdom', 'vitality', 'agility', 'intelligence', 'strength'])];
    for (let i = 0; i < entry.slotCount; i++) {
      const stat = order.find(s => item.gems.filter(g => g.stat === s).length < entry.sameTypeLimit);
      item.gems.push({ stat, value: budget.bonusPerStone }); addAttribute(stat, budget.bonusPerStone);
    }
    assert.equal(item.gems.length, item.socketCapacity);
    for (const stat of order) assert.ok(item.gems.filter(g => g.stat === stat).length <= entry.sameTypeLimit);
  }
  assert.equal(items.reduce((n, i) => n + i.gems.length, 0), budget.totalSlots);
  assert.ok(items.every(i => i.affixes.length === 3 && new Set(i.affixes.map(a => a.stat)).size === 3));
  addReferenceAttributes(pre, changes, skills, model);
  for (const field of Object.values(pre.stats)) assert.ok(Number.isFinite(field));
  return { pre, items, primary, secondary, addedAttributes: changes, socketCount: budget.totalSlots };
}

const scenarios = ['passives', 'self', 'all'];
function run(build, scenario, step = .01) {
  const key = build.pre.key;
  const own = skills.filter(s => assigned.get(key).includes(s.nr) && s.category !== 'creature' && isSelfBuff(s) && !excludedOwn.has(s.nr)).map(s => s.nr);
  const groupNumbers = scenario === 'all' ? groups : [];
  const baseConfig = prior.results.find(r => r.key === key).config;
  const result = simulateClass({ pre: structuredClone(build.pre), skills, model,
    attackNumbers: rotations.classes.find(r => r.key === key).rows.map(s => s.nr),
    config: { ...baseConfig, duration: 600, targetHealth: 1e12, step, cacheCombatStats: true,
      specialAttributeAttackFactor: 0, specialAttributeAttackFactors: {},
      enableOwnBuffs: scenario !== 'passives', prebuffOwnBuffs: false, permanentPrebuffs: false,
      preparedBuffNumbers: groupNumbers, permanentBuffNumbers: groupNumbers,
      externalBuffSkills: scenario === 'all' ? providers.map(p => p.skill) : [],
      ownBuffNumbers: scenario === 'passives' ? [] : [...groupNumbers, ...own], recordActionTimeline: false } });
  assert.equal(result.durationSeconds, 600, `${key} ${scenario} incomplete`);
  assert.ok(!result.deathAt && result.finalMana >= 0);
  assert.ok(Math.abs(result.totalDamage - result.autoDamage - result.skillDamage - result.summonDamage) < 1e-4);
  assert.ok(Math.abs(result.manaSpent - result.skills.reduce((n, s) => n + s.manaSpent, 0)) < 1e-4);
  assert.ok(Math.abs(result.minutes.reduce((n, m) => n + m.damage, 0) - result.totalDamage) < 1e-4);
  for (const nr of groupNumbers) {
    const periods = result.buffPeriods.filter(p => p.nr === nr);
    assert.equal(periods.length, 1); assert.equal(periods[0].start, 0); assert.equal(periods[0].end, 600);
    assert.ok(!result.skills.some(s => s.nr === nr && s.applications));
  }
  return { result, availableOwnBuffNumbers: own, activeGroupNumbers: groupNumbers };
}

const classes = [];
for (const key of keys) {
  const primaries = hybrid.has(key) ? ['strength', 'intelligence'] : [magic.has(key) ? 'intelligence' : ['hunter', 'summoner'].includes(key) ? 'dexterity' : 'strength'];
  const candidates = [];
  for (const primary of primaries) for (const secondary of ['wisdom', ...(hybrid.has(key) ? [primary === 'strength' ? 'intelligence' : 'strength'] : ['agility'])]) {
    const candidate = build(key, primary, secondary);
    const trial = run(candidate, 'passives', .05);
    candidates.push({ build: candidate, damage: trial.result.totalDamage });
  }
  candidates.sort((a, b) => b.damage - a.damage);
  const selected = candidates[0].build;
  const results = {};
  for (const scenario of scenarios) results[scenario] = run(selected, scenario);
  // Descriptive simultaneous-buff stat snapshots, separate from measured uptime.
  const stats = { passives: selected.pre.stats };
  for (const scenario of ['self', 'all']) {
    const buffNumbers = [...results[scenario].availableOwnBuffNumbers, ...(scenario === 'all' ? groups : [])];
    const catalog = skills.map(s => scenario === 'all' && groups.includes(s.nr)
      ? { ...providers.find(p => p.nr === s.nr).skill, learningLimits: undefined } : s);
    stats[scenario] = compareSelfBuffs({ pre: selected.pre, skills: catalog, model, assignedNumbers: buffNumbers }).stats;
  }
  classes.push({ key, name: selected.pre.name, loadout: selected, candidateSearch: candidates.map(c => ({ primary: c.build.primary, secondary: c.build.secondary, totalDamage: c.damage })), stats, scenarios: results });
  console.log(JSON.stringify({ class: selected.pre.name, primary: selected.primary, secondary: selected.secondary, damage: Object.fromEntries(scenarios.map(s => [s, Math.round(results[s].result.totalDamage)])) }));
  await fs.writeFile(`data/balancing/level${level}-r6-comparison${suffix}-progress.json`, JSON.stringify({ completedClasses: classes.length, classes }, null, 2) + '\n');
}

const assumptions = [
  `Level ${level}, unveränderte R6-Waffen und fünf R6-Rüstungsteile, Verstärkung +${upgrade}. ${upgrade ? `Pro Plus +${upgradeRule.basisPointsPerUpgrade / 100} % des direkten Waffenangriffs/der direkten Abwehr bei +0, jedes Teil auf zwei Stellen gerundet. Attribute, Steine und Zufallsboni bleiben unverändert.` : 'Unverstärkte Referenz; die definierte Pluskurve ist hier nicht angewendet.'}`,
  `Bestehender Levelzuwachs bis ${level} fortgeführt: je Level +1 Vita, Stärke, Intelligenz, Willenskraft, mit tatsächlichen Klassenumrechnungen und permanenten attributabhängigen Passiven. Keine neuen Skills oder höheren Skillcaps allein durch das höhere Charakterlevel erfunden.`,
  'Drei maximale, unterschiedliche und erlaubte Zufallsboni pro Gegenstand. Waffen: passender direkter Angriff, passender Skillschaden, Hauptattribut. Rüstung: drei Attribute. Maximalwerte sind perfekte Rolls, keine Garantie eines global optimalen Builds. Auswahl zwischen dokumentierten Attribut-/Steinprofilen anhand eines Basislaufs; derselbe Build in allen drei Szenarien.',
  'R6-Steine +16, zwölf dokumentierte Sockel einschließlich definierter Schmiedezusätze. Kein stiller Wechsel auf R7-Steine +18 wegen Charakterlevel 120. Je-Gegenstand-Duplikatgrenzen geprüft. Zusätzliche Handschuh-/Helmsockel mit offenem Freischaltlevel ausgeschlossen.',
  'Feste bestehende Angriffspriorität in allen drei Szenarien, keine neue Rotationsoptimierung. Basislauf ohne optionale Buffs; notwendige Klassen-Komboaktivierungen und Beschwörungen bleiben wie im bisherigen Vergleich enthalten.',
  'Selbstbuffs starten inaktiv und werden im Kampf regulär gewirkt, bezahlt und erneuert. Alle zugeordneten öffentlichen Gruppenbuffs mit höchster existierender Anbieter-Skillstufe sind im dritten Lauf ab Beginn dauerhaft aktiv, einschließlich für Spieler wirkungsloser Begleiterbuffs. Kein Zeit-/Manaaufwand der externen Anbieter simuliert.',
  '600 Sekunden am Dummy ohne Gegnerabwehr oder eingehenden Schaden, Ziel-HP 10^12. Vorhandene Eigenkosten und Regenerationsregeln des bisherigen Tests beibehalten. Kein Nachweis von Überlebensfähigkeit oder Monsterbalance.',
  'Reguläre Pets, Schmuck ohne definierte Werte, zufällige Crits/Procs und Ausweichen sind wie im bisherigen deterministischen Vergleich nicht simuliert. Temporäre Klassenbeschwörungen sind enthalten und separat ausgewiesen. Bekannte Spezialattribute bleiben gesperrt, wenn der vorhandene Freischaltskill nicht definiert ist.',
  'Wertetabellen mit Buffs zeigen theoretische gleichzeitige Statboni, nicht gemessene permanente Verfügbarkeit. Austauschbuffs und situative Effekte können abweichen; DPS verwendet die tatsächlichen Laufzeiten und Ressourcen.',
];
const cacheControls = [];
for (const key of ['knight', 'druid', 'ritualist']) {
  const c = classes.find(c => c.key === key), expected = c.scenarios.all.result;
  const actual = simulateClass({ pre: structuredClone(c.loadout.pre), skills, model,
    attackNumbers: rotations.classes.find(r => r.key === key).rows.map(s => s.nr),
    config: { ...expected.config, cacheCombatStats: false } });
  for (const field of ['totalDamage', 'manaSpent', 'finalMana', 'finalHealth'])
    assert.ok(Math.abs(actual[field] - expected[field]) < 1e-6, `Cache mismatch ${key} ${field}`);
  cacheControls.push({ key, fullDurationSeconds: 600, identicalWithinTolerance: true });
}
const hashPaths = [...inputPaths, 'services/progressionDpsReference.js', 'services/equipmentUpgrades.js', 'services/timedDamageSimulation.js', 'services/selfBuffComparison.js', 'services/rotationDamage.js', 'services/attackSpeed.js', 'services/skillClassification.js', 'scripts/calculateEndgameR6Comparison.js', ...keys.map(k => `data/balancing/${k === 'villian' ? 'rogue' : k}-skill-review.json`)];
const inputHashes = Object.fromEntries(await Promise.all(hashPaths.map(async p => [p, createHash('sha256').update(await fs.readFile(p)).digest('hex')])));
const report = { generatedAt: new Date().toISOString(), level, rank, upgrade, durationSeconds: 600,
  status: 'deterministicEndgameMaximumRollReferenceNotGlobalOptimum', assumptions, providers, inputHashes, cacheControls,
  progressionNotes: { rank1: 'Nicht verbesserbar.', rank2: 'Schmiedetutorial im 20er-Bereich: +1 für eine Waffe und ein Rüstungsteil, zwei Sockel mit zwei Seelensteinen; genaue Level und Prozentwert offen.', rank3: 'Ab Level 40 eigenständige Verbesserungen bis +10; Prozente je Rang laut equipment-upgrade-rules.json.' }, classes };
await fs.writeFile(out, JSON.stringify(report, null, 2) + '\n');
const f = n => n.toLocaleString('de-DE', { maximumFractionDigits: 2 });
let md = `# Level ${level}: R6-Ausrüstung, 600 Sekunden, +${upgrade}\n\n` + assumptions.map(a => '- ' + a).join('\n') + '\n\n## Drei Szenarien: Gesamtschaden einschließlich Beschwörungen\n\n| Klasse | Passive, Steine, Max-Rolls | Zusätzlich Selbstbuffs | Zusätzlich alle Fremdbuffs | DPS Basis / Selbst / Alle |\n| --- | ---: | ---: | ---: | --- |\n';
// Keep the recorded class order; sort only the displayed overview.
const damageOrder = [...classes].sort((a, b) => b.scenarios.all.result.totalDamage - a.scenarios.all.result.totalDamage);
for (const c of damageOrder) md += `| ${c.name} | ${scenarios.map(s => f(c.scenarios[s].result.totalDamage)).join(' | ')} | ${scenarios.map(s => f(c.scenarios[s].result.dps)).join(' / ')} |\n`;
md += '\nSortiert absteigend nach Gesamtschaden mit Selbstbuffs und allen Fremdbuffs. Die drei Schadensspalten zeigen jeweils die Summe über 600 Sekunden.\n';
for (const scenario of scenarios) {
  md += `\n## Kampfwerte: ${scenario}\n\n${scenario === 'passives' ? 'Permanente Ausgangswerte.' : 'Theoretische gleichzeitige Buffwirkung; keine Zusage permanenter Buff-Uptime.'}\n\n| Klasse | Leben | Mana | P-ATK | M-ATK | P-DEF | M-DEF | Tempo-Rohpunkte |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |\n`;
  for (const c of classes) { const s = c.stats[scenario]; md += `| ${c.name} | ${['maxHealth', 'maxMana', 'physicalAttack', 'magicalAttack', 'physicalDefense', 'magicalDefense'].map(k => f(s[k])).join(' | ')} | ${f(s.attackSpeed * 100)} |\n`; }
  md += '\n| Klasse | Auto-Schaden | Skillschaden | Beschwörungen | Mana-Verbrauch | Mana-Regeneration | Mana-Wartezeit |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |\n';
  for (const c of classes) { const r = c.scenarios[scenario].result; md += `| ${c.name} | ${['autoDamage', 'skillDamage', 'summonDamage', 'manaSpent', 'manaRegenerated', 'manaBlockedSeconds'].map(k => f(r[k])).join(' | ')} |\n`; }
}
md += '\n## Konkrete Ausrüstung\n\n';
for (const c of classes) {
  md += `### ${c.name}\n\nHauptattribut ${aliases[c.loadout.primary]}, zweites Attribut ${aliases[c.loadout.secondary]}; ${c.loadout.socketCount} belegte Sockel.\n\n| Teil | Drei maximale Zufallsboni | Seelensteine |\n| --- | --- | --- |\n`;
  for (const i of c.loadout.items) md += `| ${i.name ?? i.id} | ${i.affixes.map(a => `${a.stat} +${f(a.value)}`).join(', ')} | ${i.gems.map(g => `${aliases[g.stat]} +${g.value}`).join(', ')} |\n`;
}
md += '\n## Fremdbuff-Anbieter\n\n| Buff | Anbieter | Skillstufe |\n| --- | --- | ---: |\n' + providers.map(p => `| ${p.name} | ${p.providerKey} | ${p.level} |`).join('\n') + '\n';
md += '\n## Prüfungen und Grenzen\n\nAlle 39 Endläufe erreichen 600 Sekunden; Schadensteilsummen, Minutensummen, Mana-Ledger, drei unterschiedliche legale Affixe pro Teil und Sockel-/Duplikatgrenzen wurden geprüft. Der Lauf verändert weder die bestehenden Level-60-Berichte noch Spiel-/Datenbankwerte. Reguläre Pets und eine vollständige Kampf-/Aggro-/Heilungsbewertung bleiben offen.\n';
md += '\nDrei volle Kontrollläufe (Ritter, Druide, Ritualist) ohne Statcache stimmen mit den gecachten Läufen überein. Zehn gezielte bestehende Tests für Level-/Attributfortschreibung und Affixregeln bestanden bei der Erstellung. Drei weitere bestehende Tests in groupBuffBonuses.test.js und selfBuffComparison.test.js schlagen wegen abweichender historischer Katalog-/Erwartungswerte fehl (Astralkörper-Definition, Ritter-Attributbonus und alter Schurken-Mana-Snapshot). Diese Erwartungen und die Spielregeln wurden für den Bericht nicht geändert.\n';
await fs.writeFile(mdOut, md);
await fs.unlink(`data/balancing/level${level}-r6-comparison${suffix}-progress.json`);
console.log(JSON.stringify({ saved: out, report: mdOut, classes: classes.length, finalRuns: classes.length * scenarios.length }));

import fs from 'node:fs/promises';

const baseline = JSON.parse(await fs.readFile('data/balancing/class-baselines.json', 'utf8'));
const levels = [1, 10, 20, 30, 40, 50, 60];
const attributeModel = JSON.parse(await fs.readFile('data/balancing/attribute-model.json', 'utf8'));
const factor = (attribute, target) => attributeModel.conversions.find(c => c.attribute === attribute && c.target === target).amountPerPoint;
const model = {
  baseLevel: 1,
  attributeGainPerLevel: { vitality: 1, strength: 1, intelligence: 1, wisdom: 1 },
  directOperativeGainPerLevel: 0,
  rule: 'Add conversions of gained attributes to existing Level-1 operative baselines; do not add starting attribute contributions twice.',
  confirmedDefaultConversions: { physicalAttackPerStrength: factor('strength', 'physicalAttack'), magicalAttackPerIntelligence: factor('intelligence', 'magicalAttack'), physicalAttackPerFaith: factor('faith', 'physicalAttack'), physicalAttackPerVictim: factor('victim', 'physicalAttack'), physicalAttackPerDexterity: factor('dexterity', 'physicalAttack'), healthRegenPerVitality: factor('vitality','healthRegen'), manaRegenPerWisdom: factor('wisdom','manaRegen') },
  pendingConversions: ['class-specific offensive attribute eligibility'],
  classes: baseline.classes.map(c => ({ key: c.key, levels: levels.map(level => {
    const gain = level - 1;
    return { level, attributeGain: { vitality: gain, strength: gain, intelligence: gain, wisdom: gain },
      stats: { ...c.baseStats, maxHealth: c.baseStats.maxHealth + gain * 30,
        maxMana: c.baseStats.maxMana + gain * 30,
        physicalDefense: c.baseStats.physicalDefense + gain * factor('vitality','physicalDefense') * (attributeModel.vitalityClassModifiers?.classTargetMultipliers?.[c.key]?.physicalDefense ?? attributeModel.vitalityClassModifiers?.classMultipliers?.[c.key] ?? 1),
        magicalDefense: c.baseStats.magicalDefense + gain * factor('wisdom','magicalDefense') * (attributeModel.wisdomClassModifiers?.classTargetMultipliers?.[c.key]?.magicalDefense ?? 1),
        physicalAttack: c.baseStats.physicalAttack + gain * factor('strength', 'physicalAttack'),
        magicalAttack: c.baseStats.magicalAttack + gain * factor('intelligence', 'magicalAttack') } };
  }) }))
};
await fs.writeFile('data/balancing/class-base-growth.json', JSON.stringify(model, null, 2) + '\n');
const previous = JSON.parse(await fs.readFile('data/balancing/gladiator-health-growth.json', 'utf8'));
previous.status = 'supersededByAttributeGrowth';
previous.supersededBy = 'data/balancing/class-base-growth.json';
await fs.writeFile('data/balancing/gladiator-health-growth.json', JSON.stringify(previous, null, 2) + '\n');
const generatorPath = 'scripts/buildClassBalancingReports.js';
let generator = await fs.readFile(generatorPath, 'utf8');
generator = generator.replace("if(c.key==='gladiator'){", "if(c.key==='gladiator' && JSON.parse(await fs.readFile('data/balancing/gladiator-health-growth.json','utf8')).status==='proposalNotApplied'){");
generator = generator.replace('Startwerte vorhanden, Formel oder Endwerte noch festlegen', 'Vita, Stärke, Intelligenz und Wisdom jeweils +1 pro weiterem Level; offensive Umrechnungen offen');
generator = generator.replace('direkte Angriffsboni und zusätzliche Stärke werden getrennt ausgewiesen.', 'Direkte Angriffsboni plus 1,5 physischer Angriff je zusätzlichem Stärke-Punkt sind eingerechnet. Der Faktor ist eine vorläufige Vergleichsannahme.');
generator = generator.replace(/plus 1,[58] physischer Angriff/g, `plus ${String(factor('strength', 'physicalAttack')).replace('.', ',')} physischer Angriff`);
generator = generator.replace("c.status==='unitPending'?'Einheit offen':'Offen'", "c.status==='provisionalComparisonFactor'?'Vorläufiger Vergleichsfaktor':c.status==='unitPending'?'Einheit offen':'Offen'");
await fs.writeFile(generatorPath, generator);
console.log('Calculated 13 classes at five levels; attack conversions remain pending. Previous fixed-health proposal superseded.');

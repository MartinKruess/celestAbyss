import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {simulateClass, conversionDelta} from '../services/timedDamageSimulation.js';
import {permanentManaRegenMultiplier} from '../services/permanentManaRegeneration.js';

const read = async path => JSON.parse(await fs.readFile(path, 'utf8'));
const [comparison, equipment, skills, model, rotations, baseline] = await Promise.all([
  'data/balancing/class-comparison-level60.json', 'data/balancing/ranked-equipment.json',
  'data/skills.json', 'data/balancing/attribute-model.json',
  'data/balancing/all-class-damage-rotations.json', 'data/balancing/all-class-timed-damage.json'
].map(read));
const birdLevel100 = process.argv.includes('--bird-level100');
const enemyLevel = birdLevel100 ? 100 : 63;
const birdPreview = birdLevel100 ? (await read('data/creatures/world-variant-preview.json')).variants
  .find(v=>v.key==='world-redcrest-ripper').levels.find(row=>row.level===100).stats : undefined;
const enemies = birdLevel100 ? [{name:'Rotkammreißer',health:birdPreview.maxHealth,stats:birdPreview}]
  : [{name:'Wolf',health:6300}, {name:'Vogelgruppe 1',health:8200}, {name:'Golem',health:9800}];
const armorNames = {adventurer:'Adventure', druid:'Druid', healer:'Healer'};
const attributes = {'Stärke':'strength', 'Vita':'vitality', 'Wisdom':'wisdom', 'Intelligence':'intelligence', 'Dexterity':'dexterity', 'Agility':'agility'};
const flat = {'P.Ang':'physicalAttack', 'M.Ang':'magicalAttack', 'P.Deff':'physicalDefense', 'ATK Speed':'attackSpeed'};
const results = [];
for (const rank of [3,4]) for (const key of Object.keys(armorNames)) {
  const pre = structuredClone(comparison.passiveRows.find(row => row.key === key));
  const deltaAttributes = {};
  const changeAttribute = (stat, amount) => deltaAttributes[stat] = (deltaAttributes[stat] ?? 0) + amount;
  for (const [r,sign] of [[6,-1],[rank,1]]) {
    const armor = equipment.armor.find(item => item.name === armorNames[key] && item.rank === r);
    assert(armor);
    assert(!armor.comparisonBonuses?.length && !armor.comparisonEffects?.length);
    for (const [stat,value] of Object.entries(armor.raw)) {
      const target = {health:'maxHealth',mana:'maxMana'}[stat] ?? stat;
      assert(target in pre.stats);
      pre.stats[target] += sign * value;
    }
    for (const name of pre.weapons) {
      const weapon = equipment.weapons.find(item => item.name === name && item.rank === r);
      assert(weapon && !weapon.comparisonBonuses?.length && !weapon.comparisonEffects?.length);
      for (const bonus of weapon.raw) {
        if (attributes[bonus.label]) changeAttribute(attributes[bonus.label], sign * bonus.value);
        else {
          assert(flat[bonus.label], 'Unhandled weapon stat: '+bonus.label);
          pre.stats[flat[bonus.label]] += sign * bonus.value / (bonus.label === 'ATK Speed' ? 100 : 1);
        }
      }
    }
  }
  const regenFactor = permanentManaRegenMultiplier(skills,pre.includedSkills);
  for (const [attribute,amount] of Object.entries(deltaAttributes)) {
    pre.knownAttributes[attribute] = (pre.knownAttributes[attribute] ?? 0) + amount;
    for (const [stat,value] of Object.entries(conversionDelta(model,key,attribute,amount))) {
      pre.stats[stat] = (pre.stats[stat] ?? 0) + value * (stat === 'manaRegen' ? regenFactor : 1);
    }
  }
  assert(Object.values(pre.stats).every(Number.isFinite));
  const stored = baseline.results.find(row => row.key === key);
  const attacks = rotations.classes.find(row => row.key === key).rows.map(row => row.nr);
  for (const enemy of enemies) {
    const result = simulateClass({pre,skills,model,attackNumbers:attacks,config:{...stored.config,
      duration:birdLevel100?600:120,targetHealth:enemy.health,cacheCombatStats:true,recordActionTimeline:false,
      enableOwnBuffs:false,specialAttributeAttackFactor:0,specialAttributeAttackFactors:{}}});
    assert(Number.isFinite(result.targetDeathAt), 'Target survived: '+key);
    if (key === 'adventurer') assert.equal(result.summonDamage,0);
    assert(Math.abs(result.totalDamage-result.skillDamage-result.autoDamage-result.summonDamage)<1e-6);
    const rawBirdHitsToDefeatPlayer = birdLevel100 ? Math.ceil(pre.stats.maxHealth/enemy.stats.physicalAttack) : undefined;
    results.push({key,name:pre.name,rank,playerLevel:60,enemyLevel,enemy:enemy.name,
      targetHealth:enemy.health,seconds:result.targetDeathAt,damage:result.totalDamage,
      overkill:result.totalDamage-enemy.health,skillDamage:result.skillDamage,
      autoDamage:result.autoDamage,summonDamage:result.summonDamage,manaSpent:result.manaSpent,
      stats:pre.stats,enemyStats:enemy.stats,
      rawBirdHitsToDefeatPlayer,
      rawBirdAutoOnlyDeathSeconds:birdLevel100 ? rawBirdHitsToDefeatPlayer/(1.3*enemy.stats.attackSpeed) : undefined,
      usedSkills:result.skills.filter(s=>s.applications>0).map(s=>({nr:s.nr,name:s.name,applications:s.applications,damage:s.damage}))});
  }
}
const report = {generatedAt:new Date().toISOString(),status:'health-only-test-not-a-complete-duel',
  assumptions:['Level 60 characters with R3 or R4 class weapon and five armor pieces, +0; no random affixes, jewelry or stones.',
    'Existing permanent passives and skill levels retained; no active self/group buffs or ordinary pets.',
    'Druid nature-spirit summon remains in the existing rotation; Adventurer has no pets.',
    'Fresh resources and cooldowns for every encounter; existing mixed skill/auto priority, not a newly optimized farming rotation.',
    'Enemy HP only: no enemy defense, attacks, crit/miss rolls or level-difference modifier. Does not measure survival.',
    'R3/R4 are requested test loadouts, not a finalized rank-by-level requirement. No database or canonical growth changes.',
    ...(birdLevel100?['Separate raw incoming-damage estimate: bird uses physical auto-attacks only, no defenses or player healing, illustrative base rate 1.3 times inherited 0.7 speed; first bird hit after a full interval. This estimate is not integrated into the outgoing simulator and does not decide a complete duel.']:[])],results};
await fs.writeFile('data/balancing/'+(birdLevel100?'world-bird-level100-vs-level60-probe':'world-creature-level63-probe')+'.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(results.map(({name,rank,enemy,seconds,overkill,summonDamage,stats,rawBirdHitsToDefeatPlayer,rawBirdAutoOnlyDeathSeconds})=>({name,rank,enemy,seconds,overkill,summonDamage,health:stats.maxHealth,rawBirdHitsToDefeatPlayer,rawBirdAutoOnlyDeathSeconds})),null,2));

import test from 'node:test';
import assert from 'node:assert/strict';
import {skills} from '../scripts/skilldata.js';
import {mapSkill} from '../scripts/seedData.js';
import {SkillDataModel} from '../models/skillSchema.js';
import {skillEffectFingerprint} from '../services/skillDescriptions.js';
const skill=name=>mapSkill(skills.find(s=>s.S_Name_de===name),0);
test('Charge is a self buff and replaces magical attack with physical attack',async()=>{
const value=skill('Aufladung');const doc=new SkillDataModel(value);await doc.validate();
assert.equal(value.dmgType,'selfbuff');assert.equal(doc.matk,undefined);
assert.equal(value.maxSkillLv,1);
for(const[k,end]of Object.entries({str:25,health:240,patk:200})){assert.equal(value.statScaling[k].base,end);assert.equal(value.statScaling[k].perLevel,0);}
assert.equal(value.resourceCosts[0].scaling.base,102);
assert.equal(value.resourceCosts[0].scaling.perLevel,0);
assert.equal(value.cooldownScaling.base,122);assert.equal(value.cooldownScaling.perLevel,0);
assert.equal(value.castTimeSeconds,0.1);assert.equal(value.dur,15);
});
test('Smash Strike increases only its upper endpoint without changing base attack or costs',async()=>{
const value=skill('Schmetterschlag');await new SkillDataModel(value).validate();
assert.equal(value.patk,111);assert.equal(value.statScaling.patk.base+9*value.statScaling.patk.perLevel,1068);
assert.equal(value.resourceCosts[0].scaling.base+9*value.resourceCosts[0].scaling.perLevel,441);
assert.equal(value.castTimeSeconds,0.4);assert.equal(value.cd,43);
});
test('Two-handed Axe Training starts at three Strength and reaches twelve',async()=>{
const value=skill('Zweihändiges Axttraining');await new SkillDataModel(value).validate();
assert.equal(value.maxSkillLv,10);assert.equal(value.statScaling.str.base,3);
assert.equal(value.statScaling.str.base+9*value.statScaling.str.perLevel,12);
assert.equal(new SkillDataModel(value).agi,undefined);
});
test('Regeneration Shockwave heals damage dealt rather than increasing maximum Health',async()=>{
const value=skill('Schockwelle der Regeneration');const doc=new SkillDataModel(value);await doc.validate();
assert.equal(value.statScaling.patk.base+9*value.statScaling.patk.perLevel,940);
assert.equal(value.resourceCosts[0].scaling.base+9*value.resourceCosts[0].scaling.perLevel,1011);
assert.equal(value.cooldownScaling.base+9*value.cooldownScaling.perLevel,68);
const effect=value.effects[0];assert.equal(effect.reference,'damageDealt');assert.equal(effect.value*1000,15);
assert.ok(Math.abs(effect.valueScaling.base+9*effect.valueScaling.perLevel-0.024)<1e-10);
assert.equal(effect.target,'self');assert.equal(doc.health,undefined);
});
test('Skullsplitter applies stepped daze to one enemy without persistent damage',async()=>{
const value=skill('Schädelspalter');await new SkillDataModel(value).validate();
assert.equal(value.statScaling.patk.base+9*value.statScaling.patk.perLevel,1854);
assert.equal(value.resourceCosts[0].scaling.base+9*value.resourceCosts[0].scaling.perLevel,993);
assert.equal(value.castTimeSeconds,0.3);assert.equal(value.attackExecution.targetMode,'singleEnemy');
assert.deepEqual(value.effects[0].durationScaling.values,[1,1,1,1,2,2,2,2,2,3]);
assert.equal(value.hasLingeringDamage,false);assert.equal(skill('Mächtiger Hieb').castTimeSeconds,0.6);
});
test('Earthbreaker scales independently and keeps the swapped duration',async()=>{
const value=skill('Erdbrecher');await new SkillDataModel(value).validate();
assert.equal(value.statScaling.patk.base+9*value.statScaling.patk.perLevel,1013);
assert.equal(value.resourceCosts[0].scaling.base+9*value.resourceCosts[0].scaling.perLevel,566);
assert.equal(value.cooldownScaling.base+9*value.cooldownScaling.perLevel,61);
assert.equal(value.castTimeSeconds,0.3);assert.equal(value.dur,5);
});
test('Earthquake scales physical and magical base attack independently',async()=>{
const value=skill('Erdbeben');await new SkillDataModel(value).validate();
assert.equal(value.statScaling.patk.base+9*value.statScaling.patk.perLevel,644);
assert.equal(value.statScaling.matk.base+9*value.statScaling.matk.perLevel,260);
assert.equal(value.resourceCosts[0].scaling.base+9*value.resourceCosts[0].scaling.perLevel,465);
assert.equal(value.castTimeSeconds,0.1);assert.equal(value.cd,55);assert.equal(value.dur,3);
assert.equal(value.attackArea.radiusMeters,5);assert.equal(value.attackArea.center,'caster');
const slow=value.effects.find(e=>e.key==='earthquakeSlow');
assert.ok(Math.abs(slow.valueScaling.base+9*slow.valueScaling.perLevel-(-0.16))<1e-10);
assert.equal(slow.durationSeconds,3);
});
test('Energy Discharge adds a single area hit while retaining its health sacrifice',async()=>{
const value=skill('Energieentladung');await new SkillDataModel(value).validate();
assert.equal(value.statScaling.patk.base+9*value.statScaling.patk.perLevel,1993);
assert.equal(value.castTimeSeconds,0.4);assert.equal(value.attackExecution.hitCount,1);
assert.equal(value.attackArea.radiusMeters,5);assert.equal(value.attackArea.center,'caster');
assert.equal(value.resourceCosts[0].resource,'health');assert.equal(value.resourceCosts[0].scaling.base,0.3);
assert.ok(Math.abs(value.resourceCosts[0].scaling.base+9*value.resourceCosts[0].scaling.perLevel-0.21)<1e-10);
});
test('Charged Strike keeps provisional total animation separate from zero extra cast time',async()=>{
const value=skill('Aufgeladener Schlag');await new SkillDataModel(value).validate();
assert.equal(value.statScaling.patk.base+14*value.statScaling.patk.perLevel,855);
assert.equal(value.resourceCosts[0].scaling.base+14*value.resourceCosts[0].scaling.perLevel,597);
assert.equal(value.animationDurationSeconds,0.8);assert.equal(value.castTimeSeconds,0);
assert.equal(new SkillDataModel(value).dur,undefined);
});
test('Sweeper has confirmed attack and Mana curves without overwriting unreviewed timing',async()=>{
const value=skill('Abräumer');await new SkillDataModel(value).validate();
assert.equal(value.statScaling.patk.base+9*value.statScaling.patk.perLevel,543);
assert.equal(value.resourceCosts[0].scaling.base+9*value.resourceCosts[0].scaling.perLevel,252);
assert.equal(value.castTimeSeconds,0.6);assert.equal(value.cd,46);assert.equal(value.dur,2);
});
test('Steadfast grants two Vitality and one Wisdom per learned level',async()=>{
const value=skill('Standhaft');await new SkillDataModel(value).validate();
assert.equal(value.statScaling.vita.base+9*value.statScaling.vita.perLevel,20);
assert.equal(value.statScaling.wis.base+9*value.statScaling.wis.perLevel,10);
assert.deepEqual(value.resourceCosts,[]);
});
test('For Honor increases Agility only on even skill levels and keeps self targets',async()=>{
const value=skill('Für die Ehre');await new SkillDataModel(value).validate();
assert.deepEqual(value.statScaling.agi.values,[1,2,2,3,3,4,4,5,5,6]);
assert.equal(value.statScaling.amb.base+9*value.statScaling.amb.perLevel,12);
assert.equal(value.resourceCosts[0].scaling.base+9*value.resourceCosts[0].scaling.perLevel,499);
assert.equal(value.statBonusTargets.agi,'self');assert.equal(value.castTimeSeconds,0.6);
});
test('Sharp Instinct stores fractional attack speed rather than a threefold speed bonus',async()=>{
const value=skill('Scharfer Instinkte');await new SkillDataModel(value).validate();
assert.equal(value.atkSpeed,0.01);assert.equal(value.statBonusUnits.atkSpeed,'fraction');
assert.ok(Math.abs(value.statScaling.atkSpeed.base+9*value.statScaling.atkSpeed.perLevel-0.11)<1e-10);
assert.equal(value.statScaling.amb.base+9*value.statScaling.amb.perLevel,11);
assert.equal(value.resourceCosts[0].scaling.base+9*value.resourceCosts[0].scaling.perLevel,256);
assert.equal(value.castTimeSeconds,0);assert.equal(value.dur,300);assert.equal(value.cd,60);
});
test('shared defensive training separates direct defense from attribute conversion',async()=>{
const endurance=skill('Ausdauertraining');const armor=skill('Rüstungstraining');
await new SkillDataModel(endurance).validate();const armorDoc=new SkillDataModel(armor);await armorDoc.validate();
for(const key of ['vita','wis'])assert.equal(endurance.statScaling[key].base+19*endurance.statScaling[key].perLevel,20);
for(const key of ['pdef','mdef']){assert.equal(endurance[key]??0,0);assert.equal(endurance.statScaling[key],undefined);assert.ok(!endurance.levelProgression.rules.some(rule=>rule.path.includes(key)));assert.equal(armor.statScaling[key].base+9*armor.statScaling[key].perLevel,key==='pdef'?30:60);}
assert.equal(armorDoc.vita,undefined);assert.equal(endurance.category,'passive');
});
test('Summon and Recall share fixed costs while Breed adds experience only for companions',async()=>{
for(const[name,cast]of [['Beschwören',1],['Zurückrufen',0]]){
const value=skill(name);await new SkillDataModel(value).validate();assert.equal(value.cd,5);assert.equal(value.castTimeSeconds,cast);assert.equal(value.resourceCosts[0].scaling.base,5);
}
const breed=skill('Zucht');await new SkillDataModel(breed).validate();
assert.equal(breed.learningLimits.defaultMaxLevel,1);assert.equal(breed.learningLimits.classOverrides.Abenteuer,3);
const effect=breed.effects[0];assert.equal(effect.target,'companion');assert.equal(effect.experienceSource,'playerExperience');
assert.ok(Math.abs(1+effect.valueScaling.base+2*effect.valueScaling.perLevel-1.3)<1e-10);
});
test('Bond buffs only the companion and limits non-specialist learning to level one',async()=>{
const value=skill('Bindung');await new SkillDataModel(value).validate();
assert.equal(value.learningLimits.defaultMaxLevel,1);assert.equal(value.learningLimits.classOverrides.Abenteuer,3);
assert.equal(value.learningLimits.status,'secondSpecialistPending');
assert.equal(value.effects.length,4);
for(const e of value.effects){assert.equal(e.target,'companion');assert.equal(e.value,10);assert.equal(e.valueScaling.base+2*e.valueScaling.perLevel,20);}
assert.deepEqual(value.resourceCosts,[]);
});
test('Taming separates base chance from creature counter and preserves three cast levels',async()=>{
const value=skill('Tamen');await new SkillDataModel(value).validate();
assert.equal(value.maxSkillLv,3);assert.equal(value.taming.requiresMatchingItem,true);
assert.equal(value.taming.creatureCounterStatus,'pending');assert.equal(value.taming.itemConsumptionStatus,'pending');
const cost=value.resourceCosts[0].scaling;
assert.deepEqual([0,1,2].map(i=>cost.base+i*cost.perLevel),[100,125,150]);
assert.deepEqual([0,1,2].map(i=>value.castTimeScaling.base+i*value.castTimeScaling.perLevel),[3,2.5,2]);
assert.deepEqual([0,1,2].map(i=>value.cooldownScaling.base+i*value.cooldownScaling.perLevel),[60,50,40]);
assert.ok(Math.abs(value.taming.successChanceScaling.base+2*value.taming.successChanceScaling.perLevel-0.8)<1e-10);
});
test('Bladestorm attacks five times in front of the caster rather than in a circle',async()=>{
const value=skill('Wirbelnde Klinge');await new SkillDataModel(value).validate();
assert.equal(value.attackArea.shape,'frontal');assert.equal(value.attackArea.rangeMeters,3);
assert.equal(value.attackArea.radiusMeters,undefined);assert.equal(value.attackArea.geometryStatus,'pending');
assert.equal(value.attackExecution.hitCount,5);
const perHit=value.statScaling.patk.base+9*value.statScaling.patk.perLevel;
assert.equal(perHit,592);assert.equal(perHit*5,2960);
assert.equal(value.resourceCosts[0].scaling.base+9*value.resourceCosts[0].scaling.perLevel,389);
assert.equal(value.cooldownScaling.base+9*value.cooldownScaling.perLevel,57);
assert.deepEqual(value.animationDurationRangeSeconds,{min:0.8,max:1});
});
test('Supersonic Blade has one hit and constant paralysis duration rather than damage over time',async()=>{
const value=skill('Überschallklinge');const doc=new SkillDataModel(value);await doc.validate();
assert.equal(value.statScaling.patk.base+4*value.statScaling.patk.perLevel,1556);
assert.equal(value.resourceCosts[0].scaling.base+4*value.resourceCosts[0].scaling.perLevel,527);
assert.equal(value.cooldownScaling.base+4*value.cooldownScaling.perLevel,108);
assert.equal(value.castTimeSeconds,1);assert.equal(value.attackExecution.hitCount,1);
assert.equal(value.effects[0].durationSeconds,0.5);assert.equal(value.effects[0].controlKind,'paralysis');
assert.equal(value.effects[0].actionRestrictionsStatus,'pending');
doc.effects[0].controlKind=undefined;await assert.rejects(doc.validate());
});
test('Survival Will replaces Vitality with both defenses and separates HP threshold probabilities',async()=>{
const value=skill('Überlebenswille');const doc=new SkillDataModel(value);await doc.validate();
assert.equal(doc.vita,undefined);assert.equal(doc.health,undefined);
assert.equal(value.statScaling.str.base+4*value.statScaling.str.perLevel,7);
for(const key of ['pdef','mdef'])assert.equal(value.statScaling[key].base+4*value.statScaling[key].perLevel,54);
assert.deepEqual(value.triggerCondition.healthThresholds,[{belowFraction:0.1,chancePerCheck:0.3},{belowFraction:0.2,chancePerCheck:0.1},{belowFraction:0.3,chancePerCheck:0.05}]);
assert.equal(value.triggerCondition.thresholdSelection,'lowestMatchingThreshold');
assert.equal(value.triggerCondition.requiresCooldownReady,true);
assert.equal(value.cd,30);assert.equal(value.dur,12);
});
test('rotating and leap strikes separate animation from costs and Sword Training removes Wisdom',async()=>{
for(const[name,damage,mana,animation]of [['Rotier Schlag',198,132,0.7],['Sprungschlag',1570,1002,0.5]]){
const value=skill(name);await new SkillDataModel(value).validate();
assert.equal(value.statScaling.patk.base+9*value.statScaling.patk.perLevel,damage);
assert.equal(value.resourceCosts[0].scaling.base+9*value.resourceCosts[0].scaling.perLevel,mana);
assert.equal(value.animationDurationSeconds,animation);assert.equal(value.castTimeSeconds,0);
if(name==='Sprungschlag'){
assert.equal(value.cooldownScaling.base+9*value.cooldownScaling.perLevel,38);
assert.equal(value.attackArea.radiusMeters,2);assert.equal(value.attackArea.center,'caster');
assert.equal(value.attackArea.evaluation,'atImpact');assert.equal(value.movement.forwardDistanceMeters,0);
assert.deepEqual(value.effects,[]);
}
}
const sword=skill('Schwerttraining');await new SkillDataModel(sword).validate();
assert.deepEqual(sword.statScaling.str.values,[2,3,4,5,6]);
assert.deepEqual(sword.statScaling.vita.values,[1,1,1,1,2]);assert.equal(sword.statScaling.dex,undefined);
assert.equal(new SkillDataModel(sword).wis,undefined);
});
test('Infernal Cross Strike counts two hybrid hits without doubling the per-hit base twice',async()=>{
const value=skill('Infernaler Kreuzschlag');await new SkillDataModel(value).validate();
assert.equal(value.attackExecution.hitCount,2);assert.equal(value.attackExecution.damageValueScope,'perHit');
assert.equal(value.patk,166);const end=value.statScaling.patk.base+14*value.statScaling.patk.perLevel;
assert.equal(end,614);assert.equal(end*value.attackExecution.hitCount,1228);
assert.equal(value.matk,83);assert.equal(value.statScaling.matk.base+14*value.statScaling.matk.perLevel,307);assert.equal(value.attackExecution.magicalDamageElement,'fire');
assert.equal(value.resourceCosts[0].scaling.base+14*value.resourceCosts[0].scaling.perLevel,461);
assert.equal(value.cd,47);assert.equal(value.cooldownScaling.base+14*value.cooldownScaling.perLevel,33);assert.equal(value.castTimeSeconds,0);assert.equal(value.animationDurationSeconds,0.5);
});
test('Body Control removes Vitality and Body Reinforcement explicitly includes companions',async()=>{
const body=skill('Körperbeherrschung');const buff=skill('Verstärkung des Körpers');
const bodyDoc=new SkillDataModel(body);await bodyDoc.validate();await new SkillDataModel(buff).validate();
assert.equal(bodyDoc.vita,undefined);
assert.equal(body.statScaling.str,undefined);
assert.equal(body.statScaling.dex.base+9*body.statScaling.dex.perLevel,23);
assert.equal(body.statScaling.agi.base+9*body.statScaling.agi.perLevel,12);
assert.equal(buff.resourceCosts[0].scaling.base+9*buff.resourceCosts[0].scaling.perLevel,254);
assert.equal(buff.castTimeSeconds,0.3);assert.equal(buff.statBonusTargets.vita,'selfGroupAndCompanions');
});
test('passive expansions double level nine without an extra level ten increment',async()=>{
for(const name of ['Erweiterung des Körpers','Erweiterung des Geistes','Erweiterung der Sinne']){
 const value=skill(name);await new SkillDataModel(value).validate();
 for(const[k,curve]of Object.entries(value.statScaling)){
  if(name==='Erweiterung der Sinne'&&k==='vita'){assert.equal(curve.base+9*curve.perLevel,16);continue;}
  assert.equal(curve.values.length,10);
  assert.equal(curve.values[9],curve.values[8]*2);
  const stepped=name==='Erweiterung des Geistes'&&['faith','vic'].includes(k);
  assert.equal(curve.values[8],curve.values[0]+(stepped?4:8)*(k==='health'?50:1));
 }
}
const body=skill('Erweiterung des Körpers');
assert.equal(body.statScaling.health,undefined);assert.equal(body.statScaling.agi,undefined);
assert.equal(body.statScaling.vita.values[9],20);assert.equal(body.statScaling.str.values[9],20);
assert.equal(skill('Erweiterung des Geistes').statScaling.faith,undefined);
assert.equal(skill('Erweiterung des Geistes').statScaling.vic,undefined);
});
test('First Aid uses flat self healing without a duplicate magic attack bonus',async()=>{
const value=skill('Erste Hilfe');await new SkillDataModel(value).validate();
const heal=value.effects.find(e=>e.type==='heal');
assert.equal(heal.target,'self');assert.equal(heal.unit,'flat');assert.equal(heal.durationSeconds,0);
assert.equal(heal.valueScaling.base+9*heal.valueScaling.perLevel,275);
const cost=value.resourceCosts[0].scaling;assert.equal(cost.base+9*cost.perLevel,164);
assert.equal(value.cooldownScaling.base+9*value.cooldownScaling.perLevel,26);
assert.equal(value.castTimeSeconds,0.2);
assert.ok(!value.catalogRecord);assert.equal(new SkillDataModel(value).matk,undefined);
});
test('Double Jump preserves endpoint costs and provisional height without changing class access',async()=>{
const value=skill('Doppelsprung');await new SkillDataModel(value).validate();
assert.deepEqual(value.charClass,['Hunter','Archer','Abenteuer']);
const stamina=value.resourceCosts.find(c=>c.resource==='stamina').scaling;
assert.ok(Math.abs(stamina.base+9*stamina.perLevel-0.25)<1e-10);
assert.equal(value.cooldownScaling.base+9*value.cooldownScaling.perLevel,4);
assert.equal(value.durationScaling.base+9*value.durationScaling.perLevel,2);
assert.equal(value.movement.heightScaling.base+9*value.movement.heightScaling.perLevel,2);
assert.equal(value.movement.heightStatus,'provisional');
});
test('Dash preserves independently stepped distance, time, cooldown and stamina costs',async()=>{
const value=skill('Dash');await new SkillDataModel(value).validate();
assert.deepEqual(value.cooldownScaling.values,[6,5,4,4,4,3,3,3,3,3]);
assert.deepEqual(value.durationScaling.values,[1,1,1,0.75,0.75,0.75,0.75,0.5,0.5,0.5]);
assert.deepEqual(value.movement.distanceScaling.values,[1,1,1,1,1.5,1.5,2,2,2,2]);
assert.deepEqual(value.resourceCosts.find(c=>c.resource==='stamina').scaling.values,[0.5,0.45,0.4,0.4,0.4,0.4,0.4,0.4,0.4,0.2]);
assert.equal(value.resourceCosts.find(c=>c.resource==='mana').scaling.base,0);
});
test('Tremor scales damage and Mana and steps its slow at levels five through twenty',async()=>{
const value=skill('Beben');const doc=new SkillDataModel(value);await doc.validate();
assert.equal(value.maxSkillLv,20);
assert.equal(value.statScaling.patk.base+19*value.statScaling.patk.perLevel,822);
const cost=value.resourceCosts[0].scaling;assert.equal(cost.base+19*cost.perLevel,229);
assert.equal(value.cooldownScaling.base+19*value.cooldownScaling.perLevel,30);
assert.equal(value.effects[0].value,-0.05);
assert.equal(value.effects[0].durationStatus,'defined');
assert.equal(value.effects[0].durationSeconds,1);
for(const [level,amount,duration]of [[1,-0.05,1],[4,-0.05,1],[5,-0.06,1.5],[10,-0.07,2],[15,-0.08,2.5],[20,-0.09,3]]){
assert.equal(value.effects[0].valueScaling.values[level-1],amount);
assert.equal(value.effects[0].durationScaling.values[level-1],duration);
}
});
test('Adrenaline checks each own attack with five percent chance and defined endpoints',async()=>{
const value=skill('Adrenalin');const doc=new SkillDataModel(value);await doc.validate();
assert.equal(value.cd,120);assert.equal(value.dur,20);
for(const key of ['str','int'])assert.equal(value.statScaling[key].base+(value.maxSkillLv-1)*value.statScaling[key].perLevel,0.05);
assert.equal(value.triggerCondition.type,'ownAttack');
assert.equal(value.triggerCondition.combatDurationSeconds,undefined);
assert.equal(value.triggerConditionStatus,'defined');
assert.equal(doc.triggerCondition.chancePerCheck,0.05);
assert.equal(value.durationScaling.base+4*value.durationScaling.perLevel,30);
assert.equal(value.cooldownScaling.base+4*value.cooldownScaling.perLevel,102);
assert.equal(value.triggerCondition.oncePerAttackAction,true);
doc.triggerCondition.chancePerCheck=1.01;
await assert.rejects(doc.validate());
});
test('shared effects preserve targets and avoid duplicate legacy bonuses',async()=>{
const elemental=skill('Elementarenergie');const outburst=skill('Energieausbruch');
await new SkillDataModel(elemental).validate();await new SkillDataModel(outburst).validate();
assert.equal(elemental.int,0);assert.equal(elemental.mdef,0);
assert.deepEqual(elemental.effects.map(e=>[e.type,e.target,e.value]),[['statModifier','self',2],['statModifier','enemy',-0.1]]);
assert.equal(outburst.health,0);assert.equal(outburst.mana,0);
assert.equal(outburst.effects[0].reference,'maxHealth');assert.equal(outburst.effects[1].appliesTo,'basicAttack');assert.equal(outburst.effects[2].reference,'maxMana');
assert.equal(outburst.effects[2].intervalSource,'manaRegenerationTick');assert.equal(outburst.effects[2].endWith,'shield');
assert.notEqual(skillEffectFingerprint(outburst),skillEffectFingerprint({...outburst,effects:[]}));
});
test('incomplete shields and resource drains are rejected',async()=>{
for(const effect of [{key:'shield',type:'shield',target:'self',durationSeconds:15,value:0.1,unit:'fraction'}, {key:'drain',type:'resourceDrain',target:'self',durationSeconds:15,value:0.01,unit:'fraction'}]){
const record=new SkillDataModel({...skill('Energieausbruch'),effects:[effect]});await assert.rejects(record.validate());
}
});

test('Divine Protection defines both levels and removes legacy stat bonuses',async()=>{
const s=skill('Göttlicher Schutz');await new SkillDataModel(s).validate();const e=s.effects[0];
assert.equal(s.maxSkillLv,2);assert.equal(e.target,'alliesBehindCaster');assert.equal(e.type,'damageReduction');
assert.equal(e.durationScaling.base,5);assert.equal(e.durationScaling.base+e.durationScaling.perLevel,7);
assert.equal(e.valueScaling.base,0.3);assert.ok(Math.abs(e.valueScaling.base+e.valueScaling.perLevel-0.35)<1e-12);
for(const key of ['health','vita','pdef','mdef'])assert.equal(s[key],0);
});

test('Infernal Cyclone duration spans six to ten seconds with confirmed one-second cast',async()=>{
const s=skill('Infernal Zyklon');await new SkillDataModel(s).validate();
assert.equal(s.maxSkillLv,5);assert.equal(s.dur,6);assert.equal(s.durationScaling.base+(s.maxSkillLv-1)*s.durationScaling.perLevel,10);
assert.equal(s.castTimeSeconds,1);
});

test('Life Essence heals target max health from 3 to 5 percent and reduces cooldown',async()=>{
const s=skill('Lebensessenz');await new SkillDataModel(s).validate();const e=s.effects[0];
assert.equal(s.maxSkillLv,5);assert.equal(s.health,0);assert.equal(e.target,'allyOrCompanion');assert.equal(e.reference,'targetMaxHealth');assert.equal(e.durationSeconds,0);
assert.equal(e.valueScaling.base*20000,600);assert.equal((e.valueScaling.base+4*e.valueScaling.perLevel)*20000,1000);
assert.equal(s.cooldownScaling.base+4*s.cooldownScaling.perLevel,43);
});

test('Movability has explicit fractional movement speed and confirmed endpoints',async()=>{
const s=skill('Beweglichkeit');await new SkillDataModel(s).validate();assert.equal(s.maxSkillLv,10);
assert.equal(s.statScaling.agi.base+9*s.statScaling.agi.perLevel,5);
assert.ok(Math.abs(s.statScaling.movementSpeed.base+9*s.statScaling.movementSpeed.perLevel-0.10)<1e-12);
assert.equal(s.statBonusUnits.movementSpeed,'fraction');assert.equal(s.movementSpeed,0.01);
assert.equal(s.durationScaling.base+9*s.durationScaling.perLevel,24.5);
assert.equal(s.cooldownScaling.base+9*s.cooldownScaling.perLevel,102);
});

test('Soul Separation heals self 150 to 750 and Recharge reduces cooldown by 5/10/15',async()=>{
const soul=skill('Seelenernte');const recharge=skill('Wiederaufladung');await new SkillDataModel(soul).validate();await new SkillDataModel(recharge).validate();
assert.equal(soul.maxSkillLv,5);assert.equal(soul.effects[0].target,'self');assert.equal(soul.effects[0].valueScaling.base+4*soul.effects[0].valueScaling.perLevel,750);assert.equal(soul.cooldownScaling.base+4*soul.cooldownScaling.perLevel,180);
assert.equal(recharge.maxSkillLv,3);assert.equal(recharge.effects[0].appliesTo,'allSkills');assert.deepEqual([0,1,2].map(i=>recharge.effects[0].valueScaling.base+i*recharge.effects[0].valueScaling.perLevel),[5,10,15]);assert.equal(recharge.dur,0);
});

test('Iron Will retains permanent block rating and the confirmed 4/16/16/20 progression',async()=>{
const s=skill('Eiserner Wille');await new SkillDataModel(s).validate();assert.equal(s.dmgType,'passive');assert.equal(s.statBonusUnits.block,'flat');
for(const[k,v]of Object.entries({str:4,vita:16,wis:16}))assert.equal(s.statScaling[k].values[9],v);
assert.deepEqual(s.statScaling.vita.values,[2,2,4,6,8,10,12,14,16,16]);
assert.equal(s.statScaling.block.base+9*s.statScaling.block.perLevel,20);
assert.equal(skill('Erweckung der Leidenschaft').agi,2);
});

test('the three attribute expansions are permanent passive skills without duration',async()=>{
for(const name of ['Erweiterung des Körpers','Erweiterung des Geistes','Erweiterung der Sinne']){
const s=skill(name);await new SkillDataModel(s).validate();assert.equal(s.category,'passive');assert.equal(s.dmgType,'passive');assert.equal(s.dur,0);assert.equal(s.cd,0);
}
});

test('three support buffs share per-level attribute bonuses and target self plus allies',async()=>{
for(const[name,stats,max]of [['Verstärkung des Körpers',['str','vita'],10],['Festigung des Geistes',['int','wis'],10],['Erweckung der Leidenschaft',['dex','agi'],5]]){
const s=skill(name);await new SkillDataModel(s).validate();assert.equal(s.maxSkillLv,max);assert.equal(s.dmgType,'buff');assert.equal(s.dur,300);
for(const k of stats){assert.equal(s[k],2);assert.equal(s.statScaling[k].base+(max-1)*s.statScaling[k].perLevel,2*max);assert.equal(s.statBonusTargets[k],s.nr===75?'selfGroupAndCompanions':'selfAndAllies');}
}
});

test('Sneaky Trap records confirmed endpoints and excludes recursive replay',async()=>{
const s=skill('Hinterhältiger Pfeil');await new SkillDataModel(s).validate();const e=s.effects[0];
assert.equal(s.maxSkillLv,10);assert.equal(e.value,0.8);assert.equal(e.valueAtMaxLevel,0.9);assert.equal(e.hitChance,0.5);assert.equal(e.hitChanceAtMaxLevel,0.6);
assert.equal(e.durationSeconds,20);assert.equal(e.durationAtMaxLevelSeconds,30);assert.equal(e.damageSource,'caster');assert.equal(e.excludeReplayDamage,true);assert.equal(e.progressionStatus,'pending');
assert.equal(s.cooldownScaling.base+9*s.cooldownScaling.perLevel,102);
const invalid=new SkillDataModel({...s,effects:[{...e,excludeReplayDamage:false}]});await assert.rejects(invalid.validate());
});

test('Unbroken has a bounded final combat phase with speed bonuses and cooldown',async()=>{
const s=skill('Ungebrochen');await new SkillDataModel(s).validate();assert.equal(s.cd,600);assert.equal(s.dur,20);assert.equal(s.activation,'automatic');
assert.equal(s.effects[0].restoredHealthFraction,0.8);assert.equal(s.cooldownScaling.base+9*s.cooldownScaling.perLevel,300);assert.equal(s.durationScaling.base+9*s.durationScaling.perLevel,30);assert.equal(s.effects[0].trigger,'lethalDamage');assert.equal(s.effects[0].diesAtEnd,true);assert.equal(s.effects[1].value,0.1);assert.equal(s.effects[2].value,0.3);assert.equal(s.atkSpeed,0);assert.equal(s.movementSpeed,0);
});

test('Eternal Victor triggers below fifteen percent health without resurrection',async()=>{
const s=skill('Ewiger Sieger');await new SkillDataModel(s).validate();
assert.equal(s.activation,'automatic');assert.equal(s.maxSkillLv,10);
assert.equal(s.cd,180);assert.equal(s.dur,30);
assert.equal(s.triggerCondition.type,'ownAttack');assert.equal(s.triggerCondition.oncePerAttackAction,true);
assert.equal(s.triggerCondition.requiresCooldownReady,true);
assert.deepEqual(s.triggerCondition.healthThresholds,[{belowFraction:0.15,chancePerCheck:0.8}]);
for(const k of ['str','vita'])assert.equal(s.statScaling[k].base+9*s.statScaling[k].perLevel,21);
assert.ok(!(s.effects??[]).some(e=>e.type==='deathReprieve'||e.type==='heal'));
});

test('Ether Rain caps healing contributors without capping damage recipients',async()=>{
const s=skill('Ätherregen');await new SkillDataModel(s).validate();
const [damage,heal]=s.effects;
assert.equal(damage.type,'periodicDamage');assert.equal(damage.target,'enemiesInArea');
assert.equal(damage.intervalSeconds,2);assert.equal(damage.firstTickAfterSeconds,2);
assert.equal(damage.valueScaling.base+9*damage.valueScaling.perLevel,957);
assert.equal(heal.damageSourceEffectKey,damage.key);assert.equal(heal.recipientGroup,'ownGroup');
assert.equal(heal.distribution,'fullAmountToEachRecipient');assert.equal(heal.value,75);
assert.deepEqual(heal.healingFromDamage,{primaryTargetFraction:0.1,additionalTargetFraction:0.01,maxAdditionalTargets:4,capsDamageTargets:false});
assert.equal(heal.durationScaling.values[9],8);assert.equal(s.cooldownScaling.base+9*s.cooldownScaling.perLevel,123);
assert.equal(s.health,0);
});

test('Weapon Training provides twenty flat attack at maximum and no attack speed',async()=>{
const s=skill('Waffentraining');await new SkillDataModel(s).validate();assert.equal(s.maxSkillLv,20);assert.equal(s.atkSpeed??0,0);
assert.equal(s.statScaling.patk.base+19*s.statScaling.patk.perLevel,20);assert.equal(s.statScaling.matk.base+19*s.statScaling.matk.perLevel,20);assert.equal(s.statScaling.atkSpeed,undefined);
});

test('merged Aurora blessing preserves scaling and replaces separate healer blessings',async()=>{
for(const[name,stats]of [['Aurora-Segen',{patk:18,matk:18,str:2,manaRegen:18,int:2,wis:2,pdef:18,mdef:18,vita:2}]]){
const s=skill(name);await new SkillDataModel(s).validate();assert.equal(s.maxSkillLv,10);
for(const[k,v]of Object.entries(stats)){assert.equal(s[k],v);assert.equal(s.statScaling[k].base+9*s.statScaling[k].perLevel,v*10);}
}
for(const name of ['Segen der Mentalität','Segen der Verteidigung'])assert.ok(!skill(name).charClass.includes('Healer'));
});

test('catalysts share exclusive area rules and scale to 125/250 over five levels',async()=>{
for(const name of ['Katalysator Rein','Katalysator Unrein']){
const s=skill(name);await new SkillDataModel(s).validate();assert.equal(s.maxSkillLv,5);assert.equal(s.cd,180);assert.equal(s.cooldownScaling.base+4*s.cooldownScaling.perLevel,172);assert.equal(s.areaSettings.exclusiveGroup,'catalystField');assert.equal(s.areaSettings.overlapPolicy,'rejectPlacement');assert.equal(s.areaSettings.radiusMeters,undefined);
assert.equal(s.durationScaling.base+4*s.durationScaling.perLevel,32);assert.equal(s.patk,0);assert.equal(s.matk,0);
assert.deepEqual(s.effects.map(e=>e.valueScaling.base+4*e.valueScaling.perLevel),[125,250]);
}
});

test('Sanctified Barrier reduces magical damage by 20 percent and complements tank protection',async()=>{
const s=skill('Geheiligte Barriere');await new SkillDataModel(s).validate();const e=s.effects[0];
assert.equal(s.maxSkillLv,1);assert.equal(s.cd,300);assert.equal(s.dur,9);assert.equal(s.matk,0);assert.equal(e.type,'damageReduction');assert.equal(e.target,'alliesInArea');assert.deepEqual(e.damageTypes,['magical']);assert.equal(e.value,0.2);
assert.equal(25000*(1-0.35)*(1-e.value),13000);
});

test('Wild Power keeps its balancing attack bonus and Pet Power scales four combat stats',async()=>{
const wild=skill('Macht der Wildnis');const pet=skill('Macht des Begleiters');await new SkillDataModel(wild).validate();await new SkillDataModel(pet).validate();assert.equal(wild.patk,120);assert.ok(wild.description_de.includes('120'));
for(const k of ['patk','matk','pdef','mdef'])assert.equal(pet.statScaling[k].base+9*pet.statScaling[k].perLevel,50);
});

test('Burn Out uses flat health drain every 1.5 seconds with confirmed endpoints',async()=>{
const s=skill('Ausbrennen');await new SkillDataModel(s).validate();const[bonus,drain]=s.effects;
assert.equal(bonus.valueScaling.base+9*bonus.valueScaling.perLevel,80);const end=drain.valueScaling.base+9*drain.valueScaling.perLevel;assert.equal(end,72);assert.equal(drain.intervalSeconds,1.5);assert.equal(drain.unit,'flat');assert.equal(end*30/drain.intervalSeconds,1440);assert.equal(end*30/drain.intervalSeconds*0.5,720);
assert.equal(s.matk,0);assert.equal(s.health,0);
});

test('Water Chains preserves control endpoints over ten levels with actual damage scaling',async()=>{
const s=skill('Wasserfesseln');await new SkillDataModel(s).validate();assert.equal(s.maxSkillLv,10);assert.equal(s.cd,38);assert.deepEqual(s.durationScaling.values,[1,1,1.5,1.5,1.5,2,2,2.5,2.5,3]);assert.equal(s.cooldownScaling.base+9*s.cooldownScaling.perLevel,28.5);assert.equal(s.statScaling.matk.perLevel,21);assert.equal(s.resourceCosts[0].scaling.values.at(-1),59);
});

test('Energy Outburst upgrades its shield at levels 5 and 10; mana loss preserves shield',async()=>{
const s=skill('Energieausbruch');await new SkillDataModel(s).validate();const[shield,bonus,drain]=s.effects;
assert.deepEqual([1,4,5,9,10].map(level=>shield.valueScaling.values[level-1]),[0.1,0.1,0.12,0.12,0.15]);
assert.equal(s.durationScaling.values[8],15);assert.equal(s.durationScaling.values[9],18);assert.equal(s.cd,120);assert.equal(s.cooldownScaling.base+9*s.cooldownScaling.perLevel,90);
assert.equal(drain.onInsufficientResource,'disableEffects');assert.deepEqual(drain.disablesEffects,['basic-attack-bonus','mana-drain']);assert.equal(bonus.endWith,'shield');
});







test('Poison Arrow refreshes poison duration without resetting its tick timer',async()=>{
const s=skill('Giftpfeil');await new SkillDataModel(s).validate();const e=s.effects.find(e=>e.key==='poison-arrow-dot');
assert.equal(s.dur,600);assert.equal(e.applicationChance,0.03);assert.equal(e.applicationTrigger,'ownArrowHit');
assert.equal(e.durationSeconds,3);assert.equal(e.intervalSeconds,1);assert.equal(e.firstTickAfterSeconds,1);
assert.equal(e.maxStacksPerTarget,1);assert.equal(e.reapplicationPolicy,'refreshDurationPreserveTickTimer');assert.equal(e.spreadsToOtherTargets,false);
assert.equal(s.maxSkillLv,10);assert.equal(e.valueScaling.values[0],3);assert.equal(e.valueScaling.values.at(-1),60);assert.equal(s.resourceCosts[0].scaling.values[0],50);assert.equal(s.resourceCosts[0].scaling.values.at(-1),297);
});

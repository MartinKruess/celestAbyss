import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import mongoose from 'mongoose';
import {CreatureTemplateModel} from '../models/creatureTemplateSchema.js';
import {resolveCreatureTemplate} from '../services/creatureTemplate.js';

const read = async path => JSON.parse(await fs.readFile(path, 'utf8'));
const format = value => Number(value.toFixed(2)).toLocaleString('de-DE');
try {
  const mode = process.argv[2];
  if (!['--check','--apply'].includes(mode)) throw Error('Use --check or --apply');
  const [base,reference,design] = await Promise.all([
    'data/creatures/base-creature.json', 'data/creatures/world-reference-level1.json',
    'data/creatures/world-variant-design.json'
  ].map(read));
  const growth = {
    key:'world-growth-draft',name_de:'World-Monster – gemeinsame erste Wachstumskurve',
    kind:'profile',parentKey:reference.key,version:1,status:'draft',spawnable:false,
    description_de:'Vorläufige gemeinsame World-Kurve für Wölfe, Vögel und Golems. Keine fertigen Pet-Werte und kein Unreal-Import.',
    levelGrowth:{mode:'compoundPerLevel',referenceLevel:1,maximumPreviewLevel:100,
      status:'configured',statFactors:design.growthFactors},
    statMultipliers:{magicalAttack:0},
    enabledStats:Object.fromEntries(['strength','vitality','intelligence','wisdom','dexterity','agility','luck'].map(key=>[key,false])),
    pending:['Growth rates require Unreal gameplay testing; primary attributes disabled for these direct-stat NPC profiles',
      'Physical-only attack profile is a starting assumption, not a final elemental skill assignment',
      'Actual base attack frequency, movement units and attack animation timings',
      'XP reward remains inherited neutral placeholder 1; no XP balancing or payout is implemented',
      'Captured-pet profile and level reset rules; rarity and taming eligibility']
  };
  const families = design.families.map(f => ({key:f.key,name_de:f.name,kind:'family',
    parentKey:growth.key,version:1,status:'draft',bodyTemplateKey:f.bodyTemplateKey,
    statMultipliers:{},pending:['Body group is a logical label, not a loaded Unreal asset',
      ...(f.key==='world-wolves'?['Adult wolf variants; exact Unreal model assets remain open']:[])]}));
  // Relative variants follow their source targets when the design is recalibrated.
  for (const variant of design.variants) if (variant.scaleFrom) {
    const source=design.variants.find(v=>v.key===variant.scaleFrom);
    assert.ok(source?.targets);
    assert.equal(source.referenceLevel??design.referenceLevel,variant.referenceLevel??design.referenceLevel);
    variant.targets=Object.fromEntries(Object.entries(source.targets).map(([stat,n])=>[stat,n*variant.statFactor]));
  }
  const referenceAtTarget = level=>resolveCreatureTemplate(base,[reference,growth],level);
  const variants = design.variants.map(v => ({key:'world-'+v.key,name_de:v.name,kind:'variant',
    parentKey:v.familyKey,version:1,status:'draft',spawnable:false,
    description_de:`Erster World-Monster-Entwurf, auf Level ${v.referenceLevel??design.referenceLevel} mit ${v.targets.maxHealth} Leben abgestimmt. Angriff und Abwehr sind vorläufige Vorschläge.`,
    statMultipliers:Object.fromEntries(Object.entries(v.targets).map(([stat,value])=>[stat,value/referenceAtTarget(v.referenceLevel??design.referenceLevel).rawStats[stat]])),
    pending:['Abilities, elemental damage, spawning areas, rarity, tame chance and drops remain open',
      ...(v.namePending?['Working name; final name not chosen']:[]),...(v.pending??[]),...(v.areaLevelOffset!==undefined?[`Area placement: adult level ${v.areaLevelOffset>=0?'+':''}${v.areaLevelOffset}, minimum level 1; stat factor applied at own level, not twice`]:[])]}));
  const templates = [growth,...families,...variants];
  assert.equal(new Set(templates.map(t=>t.key)).size,1+design.families.length+design.variants.length);
  for (const template of [base,reference,...templates]) await new CreatureTemplateModel(template).validate();
  const previews = design.variants.map((v,index) => {
    const family = families.find(f=>f.key===v.familyKey),variant=variants[index];
    const levels = design.displayLevels.map(level=>resolveCreatureTemplate(base,[reference,growth,family,variant],level));
    const anchor = levels.find(r=>r.level===(v.referenceLevel??design.referenceLevel));
    for (const [stat,target] of Object.entries(v.targets)) assert(Math.abs(anchor.stats[stat]-(stat==='maxHealth'?Math.round(target):target))<1e-8, v.key+' '+stat);
    const [minimum,maximum] = v.familyKey==='world-golems'?[9800,12250]:v.familyKey==='world-wolves'?[6300,7000]:[7000,9000];
    if (!v.scaleFrom) assert(anchor.stats.maxHealth>=minimum && anchor.stats.maxHealth<=maximum);
    for (const resolved of levels) {
      assert.equal(resolved.capabilities.tamable,false);
      assert.equal(resolved.spawnable,false);
      assert.equal(resolved.stats.vitality,0);
      assert.equal(resolved.stats.magicalAttack,0);
      assert.equal(resolved.stats.attackSpeed,0.7);
      assert.equal(resolved.regenerationRules.healthInCombat,false);
    }
    // Family changes propagate to descendants without rewriting variant values.
    const familyNerf = {...family,statMultipliers:{physicalAttack:0.9}};
    const nerfed = resolveCreatureTemplate(base,[reference,growth,familyNerf,variant],v.referenceLevel??design.referenceLevel);
    assert(Math.abs(nerfed.stats.physicalAttack-anchor.stats.physicalAttack*0.9)<1e-8);
    return {key:variant.key,name:v.name,familyKey:v.familyKey,namePending:v.namePending??false,
      referenceLevel:v.referenceLevel??design.referenceLevel,scaleFrom:v.scaleFrom??null,areaLevelOffset:v.areaLevelOffset??null,role:v.role??null,statFactor:v.statFactor??1,targets:v.targets,levels:levels.map(r=>({level:r.level,stats:r.stats,rawStats:r.rawStats,rewards:r.rewards}))};
  });
  for (const variant of previews.filter(v=>v.scaleFrom)) {
    const source=previews.find(v=>v.key==='world-'+variant.scaleFrom);
    for (const row of variant.levels) for (const stat of Object.keys(variant.targets)) {
      assert(Math.abs(row.rawStats[stat]-source.levels.find(r=>r.level===row.level).rawStats[stat]*variant.statFactor)<1e-7,variant.key+' relative '+stat);
    }
  }
  const generatedAt = new Date().toISOString();
  await fs.writeFile('data/creatures/world-variant-templates.json',JSON.stringify({generatedAt,
    status:design.status,referenceLevel:design.referenceLevel,dependencies:[base.key,reference.key],encounterGroups:design.encounterGroups??[],templates},null,2)+'\n');
  await fs.writeFile('data/creatures/world-variant-preview.json',JSON.stringify({generatedAt,
    status:'initialWorldMonsterDraftNotFinalPetBalance',displayLevels:design.displayLevels,variants:previews},null,2)+'\n');
  let md = '# Wölfe, Vögel und Golems – World-Monster-Varianten\n\n';
  md += '**7 erwachsene Wolfsarten, 7 Rudelführer, 6 Nachwuchsvarianten und 11 Vögel, Level 1–100.** Referenzlevel **63**: Wölfe 6.300–7.000 Leben, beide Vogelgruppen 7.000–9.000 Leben. Alle übrigen Kampfwerte und die Wachstumskurven sind erste Vorschläge für spätere Unreal-Tests. Zusätzlich **5 Golems**, mit vorläufigen Grundwerten auf Level 60: 9.800 Leben, 350 P-Angriff und jeweils 250 P-/M-Abwehr. Stein und Eis starten zahlenmäßig gleich. Gigantische Varianten erhalten +10 % auf Leben, Angriff und beide Abwehrwerte; Vulkangolem +25 % gegenüber Stein. Tempo bleibt unverändert. Eisverhalten und das besondere Verhalten des kleinen Vulkan-Minibosses sind offen.\n\n';
  md += '## Gemeinsame Berechnung\n\nGrundkreatur → Level-1-World-Referenz → gemeinsame Wachstumskurve → Zahlenfamilie → Variante. Varianten speichern nur Multiplikatoren, keine kopierten Grundwerte.\n\n';
  md += '`Wert(Level) = geerbter Level-1-Wert × Familienfaktor × Variantenfaktor × Wachstum^(Level − 1)`\n\n';
  md += 'Leben wächst zunächst mit **1,065 je Level**, P-Angriff und beide Abwehrwerte mit **1,04**. Die Zielwerte auf Level 63 dienen einmalig zur Ermittlung der Variantenfaktoren. Sie werden beim Auflösen nicht erneut erzwungen: Änderungen an der gemeinsamen Referenz, Familie oder Kurve wirken auf alle Nachfahren. Es gibt keinen automatischen Tausch „mehr Leben gegen weniger Angriff“.\n\n';
  md += 'HP/Mana werden erst am Ende gerundet; Angriff und Abwehr behalten intern volle Genauigkeit. Lange Multiplikatoren werden vom Werkzeug berechnet und müssen nicht von Hand eingegeben werden. Neue Varianten lassen sich mit ganzen Zielwerten in `world-variant-design.json` ausarbeiten. Ein erneuter Generatorlauf passt Variantenfaktoren wieder an diese Eingabeziele an.\n\n';
  md += '**Direkte NPC-Kampfwerte:** Primärattribute sind in diesem World-Profil deaktiviert; es kommen nicht heimlich 30 Leben aus Vitalität hinzu. Vorläufig ausschließlich physischer Angriff; Namen wie Schatten- oder Frostwolf legen noch keine Elementarskills fest. Angriffstempo 0,7 und Lauftempo 0,95 werden unverändert geerbt, ohne wachsende Tempoattribute. Tatsächliche Grundfrequenz und Animationen fehlen noch. Keine HP-Regeneration im aktiven Kampf; außerhalb bzw. im Rückkehrzustand 10 % Max-Leben je 3 Sekunden. Cooldown-only-Mana.\n\n';
  for (const family of families) {
    md += `## ${family.name_de}\n\n| Variante | Leben L1 | P-Angriff L1 | Leben L63 | P-Angriff L63 | P-Abwehr L63 | M-Abwehr L63 |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |\n`;
    for (const p of previews.filter(p=>p.familyKey===family.key)) {
      const first=p.levels.find(r=>r.level===1).stats,last=p.levels.find(r=>r.level===63).stats;
      md += `| ${p.name}${p.namePending?' (Arbeitsname)':''} | ${format(first.maxHealth)} | ${format(first.physicalAttack)} | ${format(last.maxHealth)} | ${format(last.physicalAttack)} | ${format(last.physicalDefense)} | ${format(last.magicalDefense)} |\n`;
    }
    md += '\n';
  }
  md += '## Wolfsgruppe 2: Faktoren und Gebietslevel\n\n| Variante | Quelle | Faktor auf eigenem Level | Level gegenüber örtlichen Erwachsenen |\n| --- | --- | ---: | ---: |\n';
  for (const p of previews.filter(p=>p.familyKey==='world-wolves-2')) {
    const source=previews.find(v=>v.key==='world-'+p.scaleFrom);
    md+=`| ${p.name} | ${source.name} | ${format(p.statFactor*100)} % | ${p.areaLevelOffset} |\n`;
  }
  md+='\nJunge erscheinen zwei Level unter den Erwachsenen, Welpen vier. Das Level wird mindestens 1. Erst das eigene Level berechnen, dann einmal den Faktor anwenden. Die Faktoren betreffen HP, P-Angriff und beide Abwehrwerte; Tempo bleibt gleich. Platzierung ist vorgemerkt, kein implementierter Spawner. Nachwuchs gibt es ausschließlich für Waldwolf, Grauwolf und Frostklauenwolf.\n\n';
  md += '## Golems: Startwerte auf Level 60\n\nRelative Varianten folgen den Grundwerten ihrer Quelle. Dies sind Vorschläge, keine endgültige Balance.\n\n| Variante | Faktor | HP | P-Angriff | P-Abwehr | M-Abwehr |\n| --- | ---: | ---: | ---: | ---: | ---: |\n';
  for (const p of previews.filter(p=>p.familyKey==='world-golems')) {
    const s=p.levels.find(r=>r.level===60).stats;
    md+=`| ${p.name} | ×${format(p.statFactor)} | ${format(s.maxHealth)} | ${format(s.physicalAttack)} | ${format(s.physicalDefense)} | ${format(s.magicalDefense)} |\n`;
  }
  md += '\nDie vorstehende L63-Tabelle zeigt zum Vergleich weiterhin Level 63. Relative Golemvarianten werden aus ihren Quellvarianten erzeugt. Keine neuen Spezialfähigkeiten festgelegt.\n\n';
  md += '## Lebenspunkte über die Level\n\n| Variante | '+design.displayLevels.map(l=>'L'+l).join(' | ')+' |\n| --- | '+design.displayLevels.map(()=>'---:').join(' | ')+' |\n';
  for (const p of previews) md += '| '+p.name+' | '+p.levels.map(r=>format(r.stats.maxHealth)).join(' | ')+' |\n';
  md += '\n## Noch offen\n\nNicht zähmbar oder reitbar und nicht automatisch spawnbar. Es sind World-Monster-Vorlagen, keine fertigen Pet-Werte. Wolfsgruppe 2 enthält Nachwuchs und Rudelführer; konkrete Unreal-Körpermodelle bleiben offen; Vogelgruppe 1/2 sind logische Modellgruppen, noch keine Unreal-Assets. Felsenflügel und Mondvariante bleiben Arbeitsnamen. Keine Spezialskills, Drops oder endgültige XP-Kurve erfunden; die geerbte 1 Kill-XP ist nur Platzhalter.\n\n';
  md += 'Die bisherigen Dateien `creature-family-draft.json`, `pet-wolves.md` und `pet-birds.md` zeigen den älteren Attributentwurf. Maßgeblich für diese neuen World-Varianten sind `world-variant-design.json`, `world-variant-templates.json` und `world-variant-preview.json`. Die 600-Sekunden-Spielerberichte bleiben unverändert.\n\nPrüfen/neu erzeugen: `node scripts/seedWorldCreatureVariants.js --check`. Entwicklungsdatenbank speichern und alle Felder zurücklesen: `node scripts/seedWorldCreatureVariants.js --apply`.\n';
  await fs.writeFile('docs/balancing/world-creature-variants.md',md);
  if (mode==='--apply') {
    assert.equal(process.env.MONGODB_DB_NAME,'celestabyss_dev');
    await mongoose.connect(process.env.DB_MONGO_URL||process.env.MONGODB_URI,{dbName:process.env.MONGODB_DB_NAME,
      autoIndex:false,serverSelectionTimeoutMS:10000});
    await CreatureTemplateModel.createIndexes();
    for (const dependency of [base,reference]) {
      const stored=await CreatureTemplateModel.collection.findOne({key:dependency.key});
      assert(stored,'Missing base dependency');
      for (const [key,value] of Object.entries(dependency)) assert.deepEqual(stored[key],value,'Stale base dependency '+key);
    }
    const keys=templates.map(t=>t.key);
    const before=await CreatureTemplateModel.collection.find({key:{$in:keys}}).toArray();
    if (before.length) {
      await fs.mkdir('data/creatures/history',{recursive:true});
      await fs.writeFile('data/creatures/history/before-world-variants-'+Date.now()+'.json',JSON.stringify(before,null,2)+'\n');
    }
    for (const template of templates) await CreatureTemplateModel.collection.updateOne({key:template.key},{$set:template},{upsert:true});
    const documents=await CreatureTemplateModel.collection.find({key:{$in:keys}}).toArray();
    assert.equal(documents.length,templates.length);
    for (const template of templates) {
      const stored=documents.find(d=>d.key===template.key);
      for (const [key,value] of Object.entries(template)) assert.deepEqual(stored[key],value,template.key+' '+key);
    }
    // Resolve the actual readback, including inherited dependencies, not just local JSON.
    const dbBase=await CreatureTemplateModel.collection.findOne({key:base.key});
    const dbReference=await CreatureTemplateModel.collection.findOne({key:reference.key});
    for (const expected of previews) {
      const chain=[dbReference,documents.find(d=>d.key===growth.key),documents.find(d=>d.key===expected.familyKey),documents.find(d=>d.key===expected.key)];
      assert.deepEqual(resolveCreatureTemplate(dbBase,chain,63).stats,expected.levels.find(r=>r.level===63).stats);
    }
    const source=await fs.readFile('data/creatures/world-variant-templates.json');
    await fs.writeFile('data/creatures/world-variants.manifest.json',JSON.stringify({verifiedAt:new Date().toISOString(),
      database:process.env.MONGODB_DB_NAME,collection:CreatureTemplateModel.collection.name,
      sourceSha256:createHash('sha256').update(source).digest('hex'),status:'draftStoredAndReadbackVerified',
      documents:documents.map(d=>({key:d.key,id:String(d._id)}))},null,2)+'\n');
    console.log(`Stored and readback verified: ${variants.length} variants, ${families.length} families, 1 shared growth profile.`);
  }
  console.log(`Validated ${variants.length} variants at ${design.displayLevels.length} levels, reference HP bands, inherited rules and central family adjustment.`);
} catch (error) {
  console.error('World variant setup failed ('+error.name+'); connection details omitted.');
  if (process.argv[2]==='--check') console.error(error.message);
  process.exitCode=1;
} finally { await mongoose.disconnect(); }

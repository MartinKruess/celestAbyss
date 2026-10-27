import 'dotenv/config';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import mongoose from 'mongoose';
import {CreatureTemplateModel} from '../models/creatureTemplateSchema.js';
import {resolveCreatureTemplate} from '../services/creatureTemplate.js';

try {
  const mode = process.argv[2];
  if (!['--check', '--apply'].includes(mode)) throw Error('Use --check or --apply');
  const path = 'data/creatures/base-creature.json';
  const source = await fs.readFile(path, 'utf8'), base = JSON.parse(source);
  await new CreatureTemplateModel(base).validate();
  const exceptions = {attackSpeed: 0.7, movementSpeed: 0.95, healthRegen: 0.1, manaRegen: 0};
  for (const [key, value] of Object.entries(base.baseStats)) assert.equal(value, exceptions[key] ?? 1);
  assert.equal(base.capabilities.tamable, false);
  assert.equal(base.capabilities.mountable, false);
  assert.equal(base.spawnable, false);
  assert.equal(base.rewards.experienceOnKill.base, 1);
  const resolved = resolveCreatureTemplate(base);
  let md = '# Grundkreatur – gemeinsame Wertevorlage\n\nEine gemeinsame Zahlenbasis für alle Familien, keine gespawnte Kreatur. Grundkampfwerte und Attribute beginnen bei **1**; festgelegte Ausnahmen sind Angriffstempo 0,7, Lauftempo 0,95, HP-Regeneration 10 % Max-Leben je Tick und vorerst keine MP-Regeneration. Es gibt noch kein Modell, keine Skills und keine festgelegte Levelskalierung.\n\n';
  md += '## Grundwerte\n\nLeben, Mana, Ausdauer, physischer/magischer Angriff und beide Abwehrwerte beginnen jeweils bei 1. Auch Stärke, Vitalität, Intelligenz, Willenskraft, Geschick, Agilität und Glück haben die neutrale Zahlenbasis 1.\n\n';
  md += '**Keine doppelte Umrechnung:** Attribute und fertige Kampfwerte werden hier unabhängig gespeichert. Eine Vitalität von 1 erzeugt nicht zusätzlich 30 Leben; die Vorlage bleibt tatsächlich bei 1 Leben. Eine spätere Attributumrechnung muss ausdrücklich definiert werden.\n\n';
  md += '| Wert | Zahlenbasis | Standardmäßig aktiv | Effektiver Basiswert | Einheit |\n| --- | ---: | --- | ---: | --- |\n';
  for (const key of Object.keys(base.baseStats)) md += `| ${key} | ${base.baseStats[key]} | ${base.enabledStats[key] === false ? 'Nein' : 'Ja'} | ${resolved.stats[key]} | ${base.statUnits[key]} |\n`;
  md += '\nAngriffstempo 0,7 bedeutet 70 % und Lauftempo 0,95 bedeutet 95 % des jeweiligen Grundtempos. Ein tatsächlicher Angriff pro Sekunde oder eine Meterzahl werden dadurch noch nicht festgelegt. Crit, Block, Genauigkeit, Ausweichen, Penetration und flache Skill-Schadensboni bleiben ausgeschaltet. Kritischer Zusatzschaden verwendet im Vorlagenformat Prozentpunkte: eine aktivierte 1 wird intern zu 0,01, nicht zu 100 %.\n\n';
  md += '## Regeneration, Rückkehr und Ressourcen\n\n**HP-Regeneration: 10 % der maximalen Lebenspunkte alle 3 Sekunden.** Im aktiven Kampf kein automatisches Heilen. Außerhalb des Kampfes sowie beim Rücklauf nach einem Leash-/Reset werden maximal 100 % Leben erreicht; kein sofortiges Vollheilen und keine Wiederbelebung. Aus halbem Leben sind fünf Ticks nötig (15 Sekunden), aus fast leerem Leben höchstens zehn Ticks (30 Sekunden). Bruchteile bleiben intern erhalten. Vita erzeugt keine zusätzliche HP-Regeneration auf diese Prozentregel.\n\nErneute Treffer dürfen die Rückkehr nicht abbrechen oder den Erholungstimer ständig neu starten. Im Rückkehrzustand bleibt die Heilung deshalb auch bei neuen Treffern erlaubt. Der Server beziehungsweise die Unreal-AI muss diesen Zustand verbindlich setzen und beibehalten. Der Zeitpunkt des normalen Kampfendes, die Leash-Grenze und das Verhalten bei Ankunft sind noch offen. Diese Vorlagendaten und geprüften Hilfsfunktionen ersetzen noch keine fertige Monster-AI. Es wurde keine Unverwundbarkeit eingeführt. Eigene sofortige Boss-Resets sind noch nicht angelegt.\n\n**Mana-Modus: `cooldownOnly`.** Standardkreaturen bezahlen keine Manakosten und bleiben auch in einem langen Kampf handlungsfähig. Cooldowns gelten weiterhin. MP-Regeneration hat eine prozentuale Einheit, ist aber bei diesem Modus nicht erforderlich und mit Rate 0 deaktiviert. Eine abgeleitete Kreatur kann später ausdrücklich `consumeMana` und eine eigene prozentuale Regenerationsrate erhalten. Spielerregeln werden davon nicht verändert.\n\n**Ausdauer:** Der Zahlenplatz bleibt bei 1. Standardmäßig keine Ausdauerkosten; Gegner-Sprint und sein Verbrauch sind noch nicht festgelegt.\n\n';
  md += '## Level und Varianten\n\n`Wert = Grundwert × Familien-/Profil-/Variantenfaktoren × Level-Faktor^(Level − 1)`\n\nDie Level-Faktoren sind noch nicht abgestimmt. Ein nicht eingestellter Faktor bedeutet ×1: keine Steigerung. Die Rechenprobe unterstützt Level 1–100. Neue Faktoren werden nicht heimlich festgelegt. Leben/Mana/Ausdauer werden erst am Ende gerundet.\n\nEine Variante kann zum Beispiel Leben ×9001 und P-Angriff ×18 erhalten. Daraus entstehen auf Level 1 genau 9001 Leben und 18 P-Angriff. Für einen gewünschten Wert auf einem anderen Level muss die später gewählte Levelkurve berücksichtigt werden. Varianten speichern relative Abweichungen und den Vorlagenverweis, keine Kopie sämtlicher Ausgangswerte.\n\n';
  md += '## Erfahrungspunkte für das Töten\n\nDie gemeinsame Basis gewährt **1 XP pro Kill** als neutralen Platzhalter. Das ist eine eigene Belohnung (`rewards.experienceOnKill`), kein Angriffswert und nicht der vom Pet selbst angesammelte Erfahrungsstand (`experience`). Die Kill-XP werden nicht aus Lebenspunkten oder Angriff abgeleitet. Familien-/Profil-/Variantenmultiplikatoren können sie unabhängig von der Kampfstärke verändern.\n\n`Kill-XP = XP-Basis × geerbte XP-Multiplikatoren × XP-Level-Faktor^(Level − 1)`\n\nXP-Level-Faktor und Multiplikator stehen zunächst auf ×1; eine Belohnungskurve ist noch nicht abgestimmt. Es wird erst am Ende auf ganze Erfahrungspunkte gerundet. Keine Drops oder Loot-Tabelle ergänzt. Levelunterschiede, Gruppenverteilung und die tatsächliche einmalige Auszahlung über das serverseitige Todesereignis sind noch offen; die Vorlage berechnet zunächst die Bruttobelohnung.\n\n';
  md += '## Eigenschaften und Modell\n\n- `tamable: false`: nicht zähmbar, bis eine abgeleitete Vorlage ausdrücklich `true` setzt.\n- `mountable: false`: nicht reitbar, bis ausdrücklich freigegeben.\n- Fehlende Eigenschaft: vom Vorgänger übernehmen. Ausdrückliches `false` bleibt eine Ausnahme, auch wenn der Vorgänger später `true` wird.\n- `bodyTemplateKey: null`: noch keine Körpervorlage. Eine numerische Vorlage erzeugt keine Unreal-Skelette, Sattelplätze oder Animationen.\n- `skillNumbers: []`: noch keine Standardangriffe oder besonderen Skills. Eine ausdrücklich leere Liste entfernt geerbte Skills.\n- `spawnable: false`: reine Grundlage; kein neues Monster oder Pet wird in die Welt gesetzt.\n\n';
  md += 'Die bisherigen Wolfs-/Vogeldateien bleiben frühere Attributentwürfe. Die neuen 18 World-Varianten verwenden diese neutrale Grundlage über ein eigenes Wachstumsprofil; Übersicht: world-creature-variants.md. Sie sind erste Monsterentwürfe für Unreal-Tests, keine fertigen Pet-Werte. Spielerwerte und die 600-Sekunden-Berichte werden nicht verändert.\n\nQuelle: `data/creatures/base-creature.json`. MongoDB: `creatureTemplates`, Schlüssel `base-creature`; getrennt von den eigentlichen Kreatureninstanzen. Prüfen und Dokumentation aktualisieren: `node scripts/seedBaseCreature.js --check`. In die Entwicklungsdatenbank übernehmen: `node scripts/seedBaseCreature.js --apply`.\n';
  await fs.writeFile('docs/balancing/base-creature.md', md);
  if (mode === '--apply') {
    if (process.env.MONGODB_DB_NAME !== 'celestabyss_dev') throw Error('Requires development DB');
    await mongoose.connect(process.env.DB_MONGO_URL || process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DB_NAME, autoIndex: false, serverSelectionTimeoutMS: 10000,
    });
    await CreatureTemplateModel.createIndexes();
    const before = await CreatureTemplateModel.collection.findOne({key: base.key});
    if (before) {
      const backup = 'data/creatures/history/before-base-creature-' + Date.now() + '.json';
      await fs.mkdir('data/creatures/history', {recursive: true});
      await fs.writeFile(backup, JSON.stringify(before, null, 2) + '\n');
    }
    await CreatureTemplateModel.collection.updateOne({key: base.key}, {$set: base}, {upsert: true});
    const after = await CreatureTemplateModel.collection.findOne({key: base.key});
    for (const [key, value] of Object.entries(base)) assert.deepEqual(after[key], value, key);
    assert.equal(await CreatureTemplateModel.countDocuments({key: base.key}), 1);
    await fs.writeFile('data/creatures/base-creature.manifest.json', JSON.stringify({
      verifiedAt: new Date().toISOString(), database: process.env.MONGODB_DB_NAME,
      collection: CreatureTemplateModel.collection.name, key: base.key, id: String(after._id),
      sourceSha256: createHash('sha256').update(source).digest('hex'), status: 'draftStoredAndVerified',
    }, null, 2) + '\n');
    console.log('Base creature stored and verified in creatureTemplates; no creature instances or player data changed.');
  } else console.log('Base creature validated: speed 0.7/0.95, Health recovery 10% per 3 s outside active combat, cooldown-only Mana, growth unconfigured.');
} catch (error) {
  console.error('Base creature setup failed (' + error.name + '); connection details omitted.');
  process.exitCode = 1;
} finally {
  await mongoose.disconnect();
}

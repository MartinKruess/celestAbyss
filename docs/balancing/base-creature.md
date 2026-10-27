# Grundkreatur – gemeinsame Wertevorlage

Eine gemeinsame Zahlenbasis für alle Familien, keine gespawnte Kreatur. Grundkampfwerte und Attribute beginnen bei **1**; festgelegte Ausnahmen sind Angriffstempo 0,7, Lauftempo 0,95, HP-Regeneration 10 % Max-Leben je Tick und vorerst keine MP-Regeneration. Es gibt noch kein Modell, keine Skills und keine festgelegte Levelskalierung.

## Grundwerte

Leben, Mana, Ausdauer, physischer/magischer Angriff und beide Abwehrwerte beginnen jeweils bei 1. Auch Stärke, Vitalität, Intelligenz, Willenskraft, Geschick, Agilität und Glück haben die neutrale Zahlenbasis 1.

**Keine doppelte Umrechnung:** Attribute und fertige Kampfwerte werden hier unabhängig gespeichert. Eine Vitalität von 1 erzeugt nicht zusätzlich 30 Leben; die Vorlage bleibt tatsächlich bei 1 Leben. Eine spätere Attributumrechnung muss ausdrücklich definiert werden.

| Wert | Zahlenbasis | Standardmäßig aktiv | Effektiver Basiswert | Einheit |
| --- | ---: | --- | ---: | --- |
| maxHealth | 1 | Ja | 1 | flat |
| maxMana | 1 | Ja | 1 | flat |
| maxStamina | 1 | Ja | 1 | flat |
| physicalAttack | 1 | Ja | 1 | flat |
| magicalAttack | 1 | Ja | 1 | flat |
| physicalDefense | 1 | Ja | 1 | flat |
| magicalDefense | 1 | Ja | 1 | flat |
| strength | 1 | Ja | 1 | flat |
| vitality | 1 | Ja | 1 | flat |
| intelligence | 1 | Ja | 1 | flat |
| wisdom | 1 | Ja | 1 | flat |
| dexterity | 1 | Ja | 1 | flat |
| agility | 1 | Ja | 1 | flat |
| luck | 1 | Ja | 1 | flat |
| attackSpeed | 0.7 | Ja | 0.7 | fractionOfBaseSpeed |
| movementSpeed | 0.95 | Ja | 0.95 | fractionOfBaseSpeed |
| accuracy | 1 | Nein | 0 | ratingPoints |
| dodge | 1 | Nein | 0 | ratingPoints |
| critChanceRating | 1 | Nein | 0 | ratingPoints |
| criticalDamageBonus | 1 | Nein | 0 | percentagePoints |
| block | 1 | Nein | 0 | ratingPoints |
| penetration | 1 | Nein | 0 | ratingPoints |
| healthRegen | 0.1 | Ja | 0.1 | fractionOfMaxPerTick |
| manaRegen | 0 | Nein | 0 | fractionOfMaxPerTick |
| physicalSkillDamageBonus | 1 | Nein | 0 | flat |
| magicalSkillDamageBonus | 1 | Nein | 0 | flat |

Angriffstempo 0,7 bedeutet 70 % und Lauftempo 0,95 bedeutet 95 % des jeweiligen Grundtempos. Ein tatsächlicher Angriff pro Sekunde oder eine Meterzahl werden dadurch noch nicht festgelegt. Crit, Block, Genauigkeit, Ausweichen, Penetration und flache Skill-Schadensboni bleiben ausgeschaltet. Kritischer Zusatzschaden verwendet im Vorlagenformat Prozentpunkte: eine aktivierte 1 wird intern zu 0,01, nicht zu 100 %.

## Regeneration, Rückkehr und Ressourcen

**HP-Regeneration: 10 % der maximalen Lebenspunkte alle 3 Sekunden.** Im aktiven Kampf kein automatisches Heilen. Außerhalb des Kampfes sowie beim Rücklauf nach einem Leash-/Reset werden maximal 100 % Leben erreicht; kein sofortiges Vollheilen und keine Wiederbelebung. Aus halbem Leben sind fünf Ticks nötig (15 Sekunden), aus fast leerem Leben höchstens zehn Ticks (30 Sekunden). Bruchteile bleiben intern erhalten. Vita erzeugt keine zusätzliche HP-Regeneration auf diese Prozentregel.

Erneute Treffer dürfen die Rückkehr nicht abbrechen oder den Erholungstimer ständig neu starten. Im Rückkehrzustand bleibt die Heilung deshalb auch bei neuen Treffern erlaubt. Der Server beziehungsweise die Unreal-AI muss diesen Zustand verbindlich setzen und beibehalten. Der Zeitpunkt des normalen Kampfendes, die Leash-Grenze und das Verhalten bei Ankunft sind noch offen. Diese Vorlagendaten und geprüften Hilfsfunktionen ersetzen noch keine fertige Monster-AI. Es wurde keine Unverwundbarkeit eingeführt. Eigene sofortige Boss-Resets sind noch nicht angelegt.

**Mana-Modus: `cooldownOnly`.** Standardkreaturen bezahlen keine Manakosten und bleiben auch in einem langen Kampf handlungsfähig. Cooldowns gelten weiterhin. MP-Regeneration hat eine prozentuale Einheit, ist aber bei diesem Modus nicht erforderlich und mit Rate 0 deaktiviert. Eine abgeleitete Kreatur kann später ausdrücklich `consumeMana` und eine eigene prozentuale Regenerationsrate erhalten. Spielerregeln werden davon nicht verändert.

**Ausdauer:** Der Zahlenplatz bleibt bei 1. Standardmäßig keine Ausdauerkosten; Gegner-Sprint und sein Verbrauch sind noch nicht festgelegt.

## Level und Varianten

`Wert = Grundwert × Familien-/Profil-/Variantenfaktoren × Level-Faktor^(Level − 1)`

Die Level-Faktoren sind noch nicht abgestimmt. Ein nicht eingestellter Faktor bedeutet ×1: keine Steigerung. Die Rechenprobe unterstützt Level 1–100. Neue Faktoren werden nicht heimlich festgelegt. Leben/Mana/Ausdauer werden erst am Ende gerundet.

Eine Variante kann zum Beispiel Leben ×9001 und P-Angriff ×18 erhalten. Daraus entstehen auf Level 1 genau 9001 Leben und 18 P-Angriff. Für einen gewünschten Wert auf einem anderen Level muss die später gewählte Levelkurve berücksichtigt werden. Varianten speichern relative Abweichungen und den Vorlagenverweis, keine Kopie sämtlicher Ausgangswerte.

## Erfahrungspunkte für das Töten

Die gemeinsame Basis gewährt **1 XP pro Kill** als neutralen Platzhalter. Das ist eine eigene Belohnung (`rewards.experienceOnKill`), kein Angriffswert und nicht der vom Pet selbst angesammelte Erfahrungsstand (`experience`). Die Kill-XP werden nicht aus Lebenspunkten oder Angriff abgeleitet. Familien-/Profil-/Variantenmultiplikatoren können sie unabhängig von der Kampfstärke verändern.

`Kill-XP = XP-Basis × geerbte XP-Multiplikatoren × XP-Level-Faktor^(Level − 1)`

XP-Level-Faktor und Multiplikator stehen zunächst auf ×1; eine Belohnungskurve ist noch nicht abgestimmt. Es wird erst am Ende auf ganze Erfahrungspunkte gerundet. Keine Drops oder Loot-Tabelle ergänzt. Levelunterschiede, Gruppenverteilung und die tatsächliche einmalige Auszahlung über das serverseitige Todesereignis sind noch offen; die Vorlage berechnet zunächst die Bruttobelohnung.

## Eigenschaften und Modell

- `tamable: false`: nicht zähmbar, bis eine abgeleitete Vorlage ausdrücklich `true` setzt.
- `mountable: false`: nicht reitbar, bis ausdrücklich freigegeben.
- Fehlende Eigenschaft: vom Vorgänger übernehmen. Ausdrückliches `false` bleibt eine Ausnahme, auch wenn der Vorgänger später `true` wird.
- `bodyTemplateKey: null`: noch keine Körpervorlage. Eine numerische Vorlage erzeugt keine Unreal-Skelette, Sattelplätze oder Animationen.
- `skillNumbers: []`: noch keine Standardangriffe oder besonderen Skills. Eine ausdrücklich leere Liste entfernt geerbte Skills.
- `spawnable: false`: reine Grundlage; kein neues Monster oder Pet wird in die Welt gesetzt.

Die bisherigen Wolfs-/Vogeldateien bleiben frühere Attributentwürfe. Die neuen 18 World-Varianten verwenden diese neutrale Grundlage über ein eigenes Wachstumsprofil; Übersicht: world-creature-variants.md. Sie sind erste Monsterentwürfe für Unreal-Tests, keine fertigen Pet-Werte. Spielerwerte und die 600-Sekunden-Berichte werden nicht verändert.

Quelle: `data/creatures/base-creature.json`. MongoDB: `creatureTemplates`, Schlüssel `base-creature`; getrennt von den eigentlichen Kreatureninstanzen. Prüfen und Dokumentation aktualisieren: `node scripts/seedBaseCreature.js --check`. In die Entwicklungsdatenbank übernehmen: `node scripts/seedBaseCreature.js --apply`.

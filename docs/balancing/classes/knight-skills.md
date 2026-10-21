# Ritter / Tempelritter: Werte und Skillprüfung

**32 Skills, 280 Skillpunkte.** Göttlicher Schutz hat eine Stufe mit 30 % Schadensreduktion für fünf Sekunden (215 Mana, 77 Sekunden Cooldown, 0,5 Sekunden Castzeit). Schildsturm hat 20 Stufen: 272 bis 1507 physischen Grundschaden und 68 bis 372 Mana. Benommenheit steigt wie bisher von einer auf drei Sekunden bis Stufe 15 und bleibt danach bei drei Sekunden. Der Wegfall einer Schutzstufe und fünf zusätzliche Schildsturm-Stufen ergeben zusammen vier zusätzliche Skillpunkte.

Einteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.

**32 unterschiedliche zugeordnete Skills: 17 aktive und 15 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie bei den bisher geprüften Klassen. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.

| Art | Anzahl | Skills |
| --- | ---: | --- |
| Übrige Passive einschließlich Procs | 12 | Erleuchtung, Eiserner Schild, Erwachen, Erweiterung des Körpers, Schildangriffstraining, Schwerttraining, Überlebenswille, Ausdauertraining, Standhaft, Eiserner Wille, Rüstungstraining, Waffentraining |
| Aktive Skills (Angriff/Heilung/Unterstützung) | 8 | Brecher der Deckung, Donnernde Lanze, Erlösendes Feld, Brecher des Geistes, Göttlicher Schutz, Mächtiger Hieb, Schildstoß, Schildsturm |
| Gruppenbuffs | 2 | Verstärkung des Körpers, Stählerne Rüstung |
| Eigenbuffs | 4 | Schutz Aura, Provozieren, Stolz des Kriegers, Aktive Deckung |
| Kreaturen aktiv | 3 | Tamen, Beschwören, Zurückrufen |
| Kreaturen passiv | 3 | Bindung, Kontrolle, Zucht |

## Basis und Ausrüstung

R1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.

### Basis ohne Ausrüstung

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 231 | 501 | 801 | 1.101 | 1.401 | 1.701 | 2.001 |
| Mana | 133 | 403 | 703 | 1.003 | 1.303 | 1.603 | 1.903 |
| P-Angriff | 5 | 21,2 | 39,2 | 57,2 | 75,2 | 93,2 | 111,2 |
| M-Angriff | 4 | 20,2 | 38,2 | 56,2 | 74,2 | 92,2 | 110,2 |
| P-Defense | 11 | 29 | 49 | 69 | 89 | 109 | 129 |
| M-Defense | 10 | 28 | 48 | 68 | 88 | 108 | 128 |

### Mit Rüstung, Einhandschwert und Schild

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 981 | 1.251 | 2.021 | 2.791 | 3.561 | 4.781 | 6.001 |
| Mana | 518 | 788 | 1.248 | 1.713 | 2.128 | 2.603 | 3.253 |
| P-Angriff | 17 | 33,2 | 63,8 | 103,2 | 157,2 | 230,2 | 333,2 |
| M-Angriff | 4 | 20,2 | 38,2 | 56,2 | 74,2 | 92,2 | 110,2 |
| P-Defense | 128 | 146 | 224 | 377 | 568 | 862 | 1.186 |
| M-Defense | 79 | 97 | 170 | 243 | 405 | 491 | 659 |

Schwert und Schild sind jeweils mit den ursprünglichen vollen Werten angesetzt. Das Schild erhält keinen Zweitwaffen-Abschlag. Equipment-Vorschläge sind nicht übernommen. Grundregeneration: 25 Mana und 12 HP pro Tick. Das Intervall wird später in Unreal geprüft. Bestehende gemeinsame Skillwerte werden übernommen; fehlende Werte werden nicht geschätzt.

## Ausgelagerter Skill

Urteil des Himmels gehört nicht mehr zum Ritter. Seine aktuelle Lichtmagier-Zuordnung ist vorläufig; Lichtmagier oder Heiler werden später entschieden.

## Schutzaura, DB-Nr. 82

Schutzaura (gespeichert als Schutz Aura) ist enthalten: +400 bis +1300 P-Defense und M-Defense für 15 Sekunden, 83 bis 416 Mana, 0,1 Sekunden Castzeit und 90 Sekunden Cooldown. Die Skalierung der Verteidigungsboni ist vorläufig und wird im Balancing erneut geprüft.

## Skillübersicht

| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Erleuchtung | Passive | 20 | Wisdom +0,5<br>Intelligenz +0,5 | Intelligenz: 0,5 bis 10<br>Wisdom: 0,5 bis 10<br>manaRegen: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 19 | Brecher der Deckung | Skill / physisch | 10 | P-Angriff +97<br>statModifier, Ziel enemy, pdef, -0,01<br>threatGain, Ziel enemy, 500 | P-Angriff: 97 bis 511 | Mana-Kosten: 24 bis 132 | 36 bis 27 | 0.1 | pdef: 15 bis 24 s<br>threatGain: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 23 | Donnernde Lanze | Skill / physisch | 15 | P-Angriff +280 | P-Angriff: 280 bis 2.996 | Mana-Kosten: 70 bis 756 | 37 | Offen | 0 (einmalig) | Cast Time offen |
| 28 | Eiserner Schild | Passive | 10 | Vita +0,5<br>M-Defense +1 | block: 1 bis 10<br>M-Defense: 1 bis 10<br>Vita: 0,5 bis 5 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 40 | Erlösendes Feld | Skill / physisch | 10 | P-Angriff +187<br>statModifier, Ziel alliesInArea, matk, 15<br>statModifier, Ziel enemiesInArea, pdef, -0,02<br>statModifier, Ziel enemiesInArea, mdef, -0,01<br>threatGain, Ziel enemiesInArea, 5.000 | P-Angriff: 187 bis 1.267<br>statModifier/matk: 15 bis 37,5<br>statModifier/pdef: -2 bis -11 %<br>statModifier/mdef: -1 bis -10 % | Mana-Kosten: 47 bis 317 | 83 bis 74 | 0.4 | matk: 25 bis 30 s<br>pdef: 25 bis 30 s<br>mdef: 25 bis 30 s<br>threatGain: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 42 | Erwachen | Passive | 10 | Ein eigener Angriff unter 30 Prozent Leben aktiviert Erwachen, sofern der Skill bereit ist. Reduziert erlittenen physischen und magischen Schaden für 30 Sekunden um 1 Prozent je gelerntem Skilllevel, bis zu 10 Prozent auf Stufe 10. Cooldown 120 Sekunden. Automatischer passiver Effekt ohne Aktivierungskosten oder Castzeit; Begleiterangriffe lösen ihn nicht aus.<br>damageReduction, Ziel self, 0,01 | damageReduction/: 1 bis 10 % | Keine | 120 | Entfällt | damageReduction: 30 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 45 | Erweiterung des Körpers | Passive | 10 | Stärke +1<br>Vita +1<br>Wisdom +1 | Vita: 1 bis 10<br>Stärke: 1 bis 10<br>Wisdom: 1 bis 10 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 55 | Brecher des Geistes | Skill / physisch | 10 | P-Angriff +81<br>statModifier, Ziel enemy, mdef, -0,01<br>threatGain, Ziel enemy, 500 | P-Angriff: 81 bis 486<br>statModifier/mdef: -1 bis -10 % | Mana-Kosten: 20 bis 119 | 27 bis 18 | 0.1 | mdef: 21 bis 30 s<br>threatGain: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 59 | Göttlicher Schutz | Skill | 1 | Aktiver Schutzskill mit einer einzigen lernbaren Stufe. Du rammst deinen Schild in den Boden und erschaffst vor dir ein schützendes Abbild des Schildes. Verbündete hinter dem Schild erleiden durch abgefangene Angriffe für 5 Sekunden 30 % weniger Schaden. Castzeit 0,5 Sekunden, Cooldown 77 Sekunden, Aktivierungskosten 215 Mana. Die frühere zweite Stufe entfällt; die Werte der bisherigen ersten Stufe bleiben erhalten.<br>damageReduction, Ziel alliesBehindCaster, 0,3 | damageReduction/: 30 bis 30 % | Mana-Kosten: 215 bis 215 | 77 | 0.5 | damageReduction: 5 bis 5 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 75 | Verstärkung des Körpers | Buff | 10 | Stärke +1<br>Vita +1 | Stärke: 1 bis 10<br>Vita: 1 bis 10 | Mana-Kosten: 47 bis 254 | 60 | 0.2 | 600 | Gemeinsame Definition |
| 77 | Mächtiger Hieb | Skill / physisch | 10 | P-Angriff +73 | P-Angriff: 73 bis 733 | Mana-Kosten: 18 bis 180 | 27 | 0.2 | 0 (einmalig) | Gemeinsame Definition |
| 82 | Schutz Aura | Selbstbuff | 10 | P-Defense +400<br>M-Defense +400 | P-Defense: 400 bis 1.300<br>M-Defense: 400 bis 1.300 | Mana-Kosten: 50 bis 167 | 90 | 0.1 | 15 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 93 | Schildangriffstraining | Passive | 5 | Stärke +2<br>Vita +1 | Stärke: 2 bis 6<br>Vita: 1 bis 3 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 94 | Schildstoß | Skill / physisch | 20 | P-Angriff +137<br>control, Ziel enemy<br>Animation 1 s (vorläufig) | P-Angriff: 137 bis 1.030 | Mana-Kosten: 34 bis 262 | 29 | 0.1 | taunt: 2 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 95 | Schildsturm | Skill / physisch | 20 | P-Angriff +272<br>control, Ziel enemy | P-Angriff: 272 bis 1.507 | Mana-Kosten: 68 bis 372 | 37 | 0.1 | dazed: 1 bis 3 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 102 | Schwerttraining | Passive | 5 | Stärke +2<br>Vita +1 | Stärke: 2 bis 6<br>Vita: 1 bis 2 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 107 | Stählerne Rüstung | Buff | 1 | P-Defense +80<br>M-Defense +60 | P-Defense: 80 bis 80<br>M-Defense: 60 bis 60 | Mana-Kosten: 92 bis 92 | 60 | 0.3 | 1800 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 114 | Überlebenswille | Passive | 5 | Stärke +3<br>P-Defense +30<br>M-Defense +30 | Stärke: 3 bis 7<br>P-Defense: 30 bis 54<br>M-Defense: 30 bis 54 | Keine | 30 | Entfällt | 12 | Gemeinsame Definition |
| 133 | Tamen | Skill | 3 / Ritter 1 | Versucht, eine Kreatur zu zähmen. Erfordert das passende spezielle Taming-Item für diese Kreatur. Die Grunderfolgschance beginnt bei 50 Prozent und steigt je weiterer Skillstufe um 15 Prozentpunkte auf 80 Prozent. Ein Kreaturen-Gegenwert beeinflusst die endgültige Erfolgschance; die Berechnung ist noch festzulegen. Die Mana-Kosten steigen von 100 um 25 je weiterer Stufe auf 150. Die Cast Time sinkt von 3 um 0,5 Sekunden je weiterer Stufe auf 2 Sekunden, der Cooldown von 60 um 10 Sekunden je weiterer Stufe auf 40 Sekunden. Der Versuch verursacht keinen Schaden und hat keine anschließende Effektdauer. Der Itemverbrauch ist noch festzulegen. Die Definition umfasst drei Stufen; die normale Lerngrenze anderer Klassen liegt bei Stufe 1. Der Abenteurer kann Stufe 3 lernen; eine zweite Spezialklasse ist noch nicht festgelegt. | Nicht vollständig gespeichert | Mana-Kosten: 100 bis 150 | 60 bis 40 | 3 bis 2 | 0 (keine anschließende Wirkung) | Gemeinsame Definition; Levelskalierung prüfen |
| 134 | Bindung | Passive | 3 / Ritter 1 | Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.<br>statModifier, Ziel companion, str, 10<br>statModifier, Ziel companion, vita, 10<br>statModifier, Ziel companion, int, 10<br>statModifier, Ziel companion, wis, 10 | statModifier/str: 10 bis 20<br>statModifier/vita: 10 bis 20<br>statModifier/int: 10 bis 20<br>statModifier/wis: 10 bis 20 | Keine | Entfällt | Entfällt | str: 0 s<br>vita: 0 s<br>int: 0 s<br>wis: 0 s | Gemeinsame Definition |
| 135 | Kontrolle | Passive | 2 / Ritter 1 | Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen. | Nicht vollständig gespeichert | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition; Levelskalierung prüfen |
| 136 | Beschwören | Skill | 1 | Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 1 | Nicht gespeichert | Gemeinsame Definition |
| 137 | Zurückrufen | Skill | 1 | Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 0 | Nicht gespeichert | Gemeinsame Definition |
| 138 | Zucht | Passive | 3 / Ritter 1 | Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.<br>experienceBonus, Ziel companion, 0,1 | experienceBonus/: 10 bis 30 % | Keine | Entfällt | Entfällt | experienceBonus: 0 s | Gemeinsame Definition |
| 139 | Ausdauertraining | Passive | 20 | Vita +1<br>Wisdom +1 | Vita: 1 bis 20<br>Wisdom: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 140 | Standhaft | Passive | 10 | Vita +1<br>Wisdom +0,5 | Vita: 1 bis 10<br>Wisdom: 0,5 bis 5 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 141 | Eiserner Wille | Passive | 10 | Stärke +0,3<br>Stärke-Bonus: 10 % der aktuellen Vita (ohne Vita-Abzug) | block: 2 bis 20<br>Stärke: 0,3 bis 3 | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 144 | Rüstungstraining | Passive | 10 | P-Defense +3<br>M-Defense +6 | P-Defense: 3 bis 30<br>M-Defense: 6 bis 60 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 158 | Provozieren | Selbstbuff | 2 / Ritter 2 | Aktivierbarer Toggle mit zwei lernbaren Stufen. Gladiator/Berserker können Stufe 1 lernen: Aggro aus verursachtem Schaden mal 2, laufende Kosten 25 Mana je Mana-Regenerationstick. Ritter/Templer können Stufe 2 lernen: Aggro aus verursachtem Schaden mal 3, laufende Kosten 45 Mana je Mana-Regenerationstick. Die bisherigen maximalen Wirkungen und laufenden Kosten bleiben erhalten; nur die Lernstufen wurden zusammengefasst. Fixe zusätzliche Aggro wird nicht mitmultipliziert. Keine feste Wirkungsdauer. Tickintervall vom Mana-Regenerationssystem; bei unzureichendem Mana vorläufig Abschalten. Umschalt-Cooldown 20 Sekunden, Castzeit 0 Sekunden.<br>threatMultiplier, Ziel self, 2<br>resourceDrain, Ziel self, 25 | threatMultiplier/: 2 bis 3<br>resourceDrain/: 25 bis 45 | Aktivierung offen; laufend mana: 25 von undefined je Mana-Regenerationstick | 20 | 0 | threatMultiplier: 0 s<br>resourceDrain: 0 s | Einmalige Aktivierungskosten offen; laufender Verbrauch definiert |
| 160 | Stolz des Kriegers | Selbstbuff | 10 | Stärke +1<br>Vita +1<br>P-Angriff +35<br>M-Defense +35 | Stärke: 1 bis 10<br>Vita: 1 bis 10<br>P-Angriff: 35 bis 35<br>M-Defense: 35 bis 35 | Mana-Kosten: 50 bis 167 | 60 | 0.1 | 300 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 171 | Aktive Deckung | Selbstbuff | 10 | P-Defense +6<br>M-Defense +6 | P-Defense: 6 bis 33<br>M-Defense: 6 bis 33 | Mana-Kosten: 50 bis 167 | 60 | 0.1 | 600 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 201 | Waffentraining | Passive | 20 | P-Angriff +1<br>M-Angriff +1 | P-Angriff: 1 bis 20<br>M-Angriff: 1 bis 20 | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition |

## Detaildaten

Gemeinsame Werte werden nicht neu erfunden. Jeder Block zeigt den vollständigen gespeicherten Stand außer der technischen Mongo-ID.

### 1: Erleuchtung

Permanenter passiver Aurora-Grundskill mit 20 Stufen. Je gelernter Stufe +0,5 Intelligenz und +0,5 Willenskraft, auf Stufe 20 jeweils +10. Kein Geschickbonus. Die direkte MP-Regeneration bleibt bei +1 je Stufe, auf Stufe 20 +20 MP je zugehörigem Regenerationstick. Kein direkter HP-Regenerationsbonus. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Enlightenment |
| category | Aurora |
| charClass[0] | Healer |
| charClass[1] | Priest |
| charClass[2] | Luminet |
| charClass[3] | Lightmage |
| charClass[4] | Shamane |
| charClass[5] | High Elves |
| charClass[6] | Druide |
| charClass[7] | Alchemist |
| charClass[8] | Ritter |
| charClass[9] | Tempelritter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanenter passiver Aurora-Grundskill mit 20 Stufen. Je gelernter Stufe +0,5 Intelligenz und +0,5 Willenskraft, auf Stufe 20 jeweils +10. Kein Geschickbonus. Die direkte MP-Regeneration bleibt bei +1 je Stufe, auf Stufe 20 +20 MP je zugehörigem Regenerationstick. Kein direkter HP-Regenerationsbonus. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent passive Aurora core skill with 20 levels. Each learned level grants +0.5 Intelligence and +0.5 Wisdom, reaching +10 each at level 20. No Dexterity bonus. Direct Mana regeneration remains +1 per level, reaching +20 per associated regeneration tick. No direct Health regeneration bonus. No activation costs, cast time or cooldown. |
| dmgType (Altformat) | passive |
| int | 0,5 |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 1 |
| skillName_de | Erleuchtung |
| skillpoints | 1 |
| wis | 0,5 |
| allowedRaces[0] | Aurora |
| unlockPhase | race |
| isClassCore | true |
| resourceCosts | [] |
| statScaling.int.type | linear |
| statScaling.int.base | 0,5 |
| statScaling.int.perLevel | 0,5 |
| statScaling.wis.type | linear |
| statScaling.wis.base | 0,5 |
| statScaling.wis.perLevel | 0,5 |
| statScaling.manaRegen.type | linear |
| statScaling.manaRegen.base | 1 |
| statScaling.manaRegen.perLevel | 1 |
| manaRegen | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | int |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0,5 |
| levelProgression.rules[0].rule.perLevel | 0,5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | wis |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,5 |
| levelProgression.rules[1].rule.perLevel | 0,5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | manaRegen |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 1 |
| levelProgression.rules[2].rule.perLevel | 1 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| learningRequirements.minimumCharacterLevel | 1 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| classificationVersion | 1 |
| type | passive |

### 19: Brecher der Deckung

Trifft den Gegner mit einem Schildangriff und senkt seine physische Verteidigung für zunächst 15 Sekunden um 1 Prozent. Physischer Skill-Grundschaden 97 auf Stufe 1, +46 je weiterer Stufe, maximal 511 auf Stufe 10. Mana-Kosten 24 auf Stufe 1, +12 je weiterer Stufe, maximal 132 auf Stufe 10. Castzeit 0,1 Sekunden, Cooldown 36 Sekunden auf Stufe 1 und 27 Sekunden auf Stufe 10. Die Dauer der Verteidigungssenkung steigt um 1 Sekunde je weiterer Stufe auf 24 Sekunden; ihre Stärke bleibt bei 1 Prozent. Bei Anwendung werden zusätzlich einmalig 500 feste Aggropunkte gegen das Ziel erzeugt, nach dem schadensbezogenen Aggro-Multiplikator; dieser feste Bonus wird nicht erneut multipliziert. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Breaker of the Shield |
| category | active |
| cd | 36 |
| charClass[0] | Knife |
| charClass[1] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Trifft den Gegner mit einem Schildangriff und senkt seine physische Verteidigung für zunächst 15 Sekunden um 1 Prozent. Physischer Skill-Grundschaden 97 auf Stufe 1, +46 je weiterer Stufe, maximal 511 auf Stufe 10. Mana-Kosten 24 auf Stufe 1, +12 je weiterer Stufe, maximal 132 auf Stufe 10. Castzeit 0,1 Sekunden, Cooldown 36 Sekunden auf Stufe 1 und 27 Sekunden auf Stufe 10. Die Dauer der Verteidigungssenkung steigt um 1 Sekunde je weiterer Stufe auf 24 Sekunden; ihre Stärke bleibt bei 1 Prozent. Bei Anwendung werden zusätzlich einmalig 500 feste Aggropunkte gegen das Ziel erzeugt, nach dem schadensbezogenen Aggro-Multiplikator; dieser feste Bonus wird nicht erneut multipliziert. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Hits the enemy with a shield attack and reduces physical defense by 1 percent for initially 15 seconds.  Cast time is 0.1 seconds; Cooldown 36 seconds at level 1 and 27 seconds at level 10. Defense reduction duration increases by 1 second per additional level to 24 seconds; reduction strength remains at 1 percent. On activation adds 500 flat threat toward the target once, after damage-based threat multiplication; this fixed bonus is not multiplied again. Physical skill base damage 97 at level 1, +46 per additional level, maximum 511 at level 10. Mana cost 24 +12 per additional level, maximum 132. Current physical attack is added once per target hit. Other effects and cast time are unchanged. |
| dmgType (Altformat) | physical |
| dur | 15 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 19 |
| skillName_de | Brecher der Deckung |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| effects[0].key | shield-breaker-defense |
| effects[0].type | statModifier |
| effects[0].target | enemy |
| effects[0].stat | pdef |
| effects[0].reference | targetStat |
| effects[0].value | -0,01 |
| effects[0].unit | fraction |
| effects[0].durationSeconds | 15 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 15 |
| effects[0].durationScaling.perLevel | 1 |
| effects[1].key | breaker-flat-threat |
| effects[1].type | threatGain |
| effects[1].target | enemy |
| effects[1].value | 500 |
| effects[1].unit | flat |
| effects[1].durationSeconds | 0 |
| effects[1].applicationTiming | onActivation |
| effects[1].affectedByThreatMultiplier | false |
| mana (Aktivierungskosten, kein Bonus) | 24 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 24 |
| resourceCosts[0].scaling.perLevel | 12 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 97 |
| statScaling.patk.perLevel | 46 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 36 |
| cooldownScaling.perLevel | -1 |
| durationScaling.type | linear |
| durationScaling.base | 15 |
| durationScaling.perLevel | 1 |
| patk | 97 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | durationScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 15 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 24 |
| levelProgression.rules[1].rule.rule.perLevel | 12 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 97 |
| levelProgression.rules[2].rule.perLevel | 46 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | cooldownScaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0,1 |
| levelProgression.rules[3].rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.base | 36 |
| levelProgression.rules[3].rule.rule.perLevel | -1 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | durationScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 15 |
| levelProgression.rules[4].rule.perLevel | 1 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 23: Donnernde Lanze

Erschafft eine Aura um dein Schwert oder deinen Streitkolben und stürmt zum Gegner vor, um ihn einmalig zu treffen. Physischer Skill-Grundschaden 280 auf Stufe 1, +194 je weiterer Stufe, maximal 2996 auf Stufe 15. Mana-Kosten 70 auf Stufe 1, +49 je weiterer Stufe, maximal 756 auf Stufe 15. Die Ansturmzeit hängt vom Abstand zum Gegner ab und liegt vorläufig zwischen 0,1 und 3 Sekunden. Keine anhaltende Schadenswirkung. Cooldown 37 Sekunden auf Stufe 1 und 37 Sekunden auf Stufe 15. Eine zusätzliche feste Castzeit sowie Reichweite und genaue Distanz-Zeit-Berechnung sind noch nicht festgelegt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Thundering Lance |
| category | active |
| cd | 37 |
| charClass[0] | Knife |
| charClass[1] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erschafft eine Aura um dein Schwert oder deinen Streitkolben und stürmt zum Gegner vor, um ihn einmalig zu treffen. Physischer Skill-Grundschaden 280 auf Stufe 1, +194 je weiterer Stufe, maximal 2996 auf Stufe 15. Mana-Kosten 70 auf Stufe 1, +49 je weiterer Stufe, maximal 756 auf Stufe 15. Die Ansturmzeit hängt vom Abstand zum Gegner ab und liegt vorläufig zwischen 0,1 und 3 Sekunden. Keine anhaltende Schadenswirkung. Cooldown 37 Sekunden auf Stufe 1 und 37 Sekunden auf Stufe 15. Eine zusätzliche feste Castzeit sowie Reichweite und genaue Distanz-Zeit-Berechnung sind noch nicht festgelegt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Creates an aura around your sword or mace and charges toward the enemy to hit once.  Provisional charge time depends on distance to the target and ranges from 0.1 to 3 seconds. No ongoing damage. Cooldown 37 seconds at level 1 and 37 seconds at level 15. Additional fixed cast time, range and exact distance-to-time calculation remain unspecified. Physical skill base damage 280 at level 1, +194 per additional level, maximum 2996 at level 15. Mana cost 70 +49 per additional level, maximum 756. Current physical attack is added once per target hit. Other effects and cast time are unchanged. |
| dmgType (Altformat) | physical |
| maxSkillLv | 15 |
| maxUpgradeLv | 10 |
| nr | 23 |
| patk | 280 |
| skillName_de | Donnernde Lanze |
| skillpoints | 1 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 70 |
| movement.type | chargeToEnemy |
| movement.durationBasis | targetDistance |
| movement.durationRangeSeconds.min | 0,1 |
| movement.durationRangeSeconds.max | 3 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 70 |
| resourceCosts[0].scaling.perLevel | 49 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 280 |
| statScaling.patk.perLevel | 194 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 70 |
| levelProgression.rules[0].rule.rule.perLevel | 49 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 280 |
| levelProgression.rules[1].rule.perLevel | 194 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 28: Eiserner Schild

Dauerhafter Attributanteil: je gelernter Stufe +0,5 Vitalität; auf Stufe 10 insgesamt +5 Vitalität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Zusätzlich je Stufe +1 M-Abwehr und +1 Blockpunkt, maximal +10 jeweils. Block ist ein Punktewert, keine Prozentchance.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Iron Shield |
| block | 1 |
| category | passive |
| charClass[0] | Knife |
| charClass[1] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +0,5 Vitalität; auf Stufe 10 insgesamt +5 Vitalität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Zusätzlich je Stufe +1 M-Abwehr und +1 Blockpunkt, maximal +10 jeweils. Block ist ein Punktewert, keine Prozentchance. |
| description_eng | Permanent attribute component: +0.5 Vitality per learned level; at level 10, +5 Vitality total. This component always applies independently of any triggered effects. Also grants +1 magical defense and +1 Block rating per level, reaching +10 each. Block is a rating, not a percentage. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 28 |
| skillName_de | Eiserner Schild |
| skillpoints | 1 |
| vita | 0,5 |
| resourceCosts | [] |
| statScaling.block.type | linear |
| statScaling.block.base | 1 |
| statScaling.block.perLevel | 1 |
| statScaling.mdef.type | linear |
| statScaling.mdef.base | 1 |
| statScaling.mdef.perLevel | 1 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 0,5 |
| statScaling.vita.perLevel | 0,5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | block |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | mdef |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | vita |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 0,5 |
| levelProgression.rules[2].rule.perLevel | 0,5 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |
| mdef | 1 |

### 40: Erlösendes Feld

Erschafft ein heiliges Feld, das deine Aggro auf Gegner erhöht. Beim Setzen trifft es betroffene Gegner einmal physisch: einmaliger Treffer. Physischer Skill-Grundschaden 187 auf Stufe 1, +120 je weiterer Stufe, maximal 1267 auf Stufe 10. Kein zusätzlicher Schaden über Zeit. Bei Aktivierung erzeugt das Feld auf betroffene Gegner einmalig 5000 zusätzliche Aggro. Dieser feste Bonus wird nach dem schadensbezogenen Aggro-Multiplikator addiert und nicht erneut multipliziert. Gruppenmitglieder im Feld erhalten 15 zusätzlichen magischen Angriff auf Stufe 1, plus 2,5 je weiterer Stufe bis zu 37,5 auf Stufe 10. Dieser Gruppenbonus ist vom Initialtreffer getrennt. Gegner im Feld verlieren auf Stufe 1 2 Prozent physische und 1 Prozent magische Verteidigung. Beide Reduktionen steigen um 1 Prozentpunkt je weiterer Stufe auf 11 Prozent physische und 10 Prozent magische Verteidigung. Die Dauer steigt gleichmäßig von 25 auf 30 Sekunden. Der Cooldown 83 Sekunden auf Stufe 1 und 74 Sekunden auf Stufe 10. Der Feldradius beträgt 12 Meter. Mana-Kosten 47 auf Stufe 1, +30 je weiterer Stufe, maximal 317 auf Stufe 10. Castzeit 0,4 Sekunden. Ein Zeitfenster für das allgemeine Aggro-System wird hier nicht festgelegt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Redeeming Field |
| category | active |
| cd | 83 |
| charClass[0] | Knife |
| charClass[1] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erschafft ein heiliges Feld, das deine Aggro auf Gegner erhöht. Beim Setzen trifft es betroffene Gegner einmal physisch: einmaliger Treffer. Physischer Skill-Grundschaden 187 auf Stufe 1, +120 je weiterer Stufe, maximal 1267 auf Stufe 10. Kein zusätzlicher Schaden über Zeit. Bei Aktivierung erzeugt das Feld auf betroffene Gegner einmalig 5000 zusätzliche Aggro. Dieser feste Bonus wird nach dem schadensbezogenen Aggro-Multiplikator addiert und nicht erneut multipliziert. Gruppenmitglieder im Feld erhalten 15 zusätzlichen magischen Angriff auf Stufe 1, plus 2,5 je weiterer Stufe bis zu 37,5 auf Stufe 10. Dieser Gruppenbonus ist vom Initialtreffer getrennt. Gegner im Feld verlieren auf Stufe 1 2 Prozent physische und 1 Prozent magische Verteidigung. Beide Reduktionen steigen um 1 Prozentpunkt je weiterer Stufe auf 11 Prozent physische und 10 Prozent magische Verteidigung. Die Dauer steigt gleichmäßig von 25 auf 30 Sekunden. Der Cooldown 83 Sekunden auf Stufe 1 und 74 Sekunden auf Stufe 10. Der Feldradius beträgt 12 Meter. Mana-Kosten 47 auf Stufe 1, +30 je weiterer Stufe, maximal 317 auf Stufe 10. Castzeit 0,4 Sekunden. Ein Zeitfenster für das allgemeine Aggro-System wird hier nicht festgelegt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Creates a sacred field with a single physical hit on placement: 187 base damage at level 1 plus 120 per additional level, reaching 1267 at level 10. No damage over time. Increases threat toward enemies; on activation it adds 5000 flat threat toward affected enemies once. This flat bonus is added after damage-based threat multiplication and is not multiplied again. Group members within the field gain 15 magical attack at level 1, increasing by 2.5 per additional level to 37.5 at level 10. This group bonus is separate from the initial hit. Enemies within the field lose 2 percent physical and 1 percent magical defense at level 1. Both reductions increase by 1 percentage point per additional level to 11 percent physical and 10 percent magical defense reduction. Duration increases evenly from 25 to 30 seconds. Cooldown 83 seconds at level 1 and 74 seconds at level 10. Field radius is 12 meters.  Cast time 0.4 seconds. No general threat-system time window is defined here. Physical skill base damage 187 at level 1, +120 per additional level, maximum 1267 at level 10. Mana cost 47 +30 per additional level, maximum 317. Current physical attack is added once per target hit. Other effects and cast time are unchanged. |
| dmgType (Altformat) | spell |
| dur | 25 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 40 |
| skillName_de | Erlösendes Feld |
| skillpoints | 1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 83 |
| cooldownScaling.perLevel | -1 |
| durationScaling.type | linear |
| durationScaling.base | 25 |
| durationScaling.perLevel | 0,556 |
| effects[0].key | redeeming-field-magic |
| effects[0].type | statModifier |
| effects[0].target | alliesInArea |
| effects[0].recipientGroup | ownGroup |
| effects[0].stat | matk |
| effects[0].value | 15 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 15 |
| effects[0].valueScaling.perLevel | 2,5 |
| effects[0].durationSeconds | 25 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 25 |
| effects[0].durationScaling.perLevel | 0,556 |
| effects[1].key | redeeming-field-physical-defense |
| effects[1].type | statModifier |
| effects[1].target | enemiesInArea |
| effects[1].stat | pdef |
| effects[1].reference | targetStat |
| effects[1].value | -0,02 |
| effects[1].unit | fraction |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | -0,02 |
| effects[1].valueScaling.perLevel | -0,01 |
| effects[1].durationSeconds | 25 |
| effects[1].durationScaling.type | linear |
| effects[1].durationScaling.base | 25 |
| effects[1].durationScaling.perLevel | 0,556 |
| effects[2].key | redeeming-field-magical-defense |
| effects[2].type | statModifier |
| effects[2].target | enemiesInArea |
| effects[2].stat | mdef |
| effects[2].reference | targetStat |
| effects[2].value | -0,01 |
| effects[2].unit | fraction |
| effects[2].valueScaling.type | linear |
| effects[2].valueScaling.base | -0,01 |
| effects[2].valueScaling.perLevel | -0,01 |
| effects[2].durationSeconds | 25 |
| effects[2].durationScaling.type | linear |
| effects[2].durationScaling.base | 25 |
| effects[2].durationScaling.perLevel | 0,556 |
| effects[3].key | redeeming-field-threat |
| effects[3].type | threatGain |
| effects[3].target | enemiesInArea |
| effects[3].value | 5.000 |
| effects[3].unit | flat |
| effects[3].durationSeconds | 0 |
| effects[3].applicationTiming | onActivation |
| effects[3].affectedByThreatMultiplier | false |
| areaSettings.radiusMeters | 12 |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| hasLingeringDamage | false |
| patk | 187 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 187 |
| statScaling.patk.perLevel | 120 |
| castTimeSeconds | 0,4 |
| mana (Aktivierungskosten, kein Bonus) | 47 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 47 |
| resourceCosts[0].scaling.perLevel | 30 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 83 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 25 |
| levelProgression.rules[1].rule.perLevel | 0,556 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 15 |
| levelProgression.rules[2].rule.perLevel | 2,5 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | durationScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 25 |
| levelProgression.rules[3].rule.perLevel | 0,556 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 1 |
| levelProgression.rules[4].path[2] | valueScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | -0,02 |
| levelProgression.rules[4].rule.perLevel | -0,01 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | effects |
| levelProgression.rules[5].path[1] | 1 |
| levelProgression.rules[5].path[2] | durationScaling |
| levelProgression.rules[5].rule.kind | linear |
| levelProgression.rules[5].rule.base | 25 |
| levelProgression.rules[5].rule.perLevel | 0,556 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.rules[6].path[0] | effects |
| levelProgression.rules[6].path[1] | 2 |
| levelProgression.rules[6].path[2] | valueScaling |
| levelProgression.rules[6].rule.kind | linear |
| levelProgression.rules[6].rule.base | -0,01 |
| levelProgression.rules[6].rule.perLevel | -0,01 |
| levelProgression.rules[6].source | storedFormula |
| levelProgression.rules[7].path[0] | effects |
| levelProgression.rules[7].path[1] | 2 |
| levelProgression.rules[7].path[2] | durationScaling |
| levelProgression.rules[7].rule.kind | linear |
| levelProgression.rules[7].rule.base | 25 |
| levelProgression.rules[7].rule.perLevel | 0,556 |
| levelProgression.rules[7].source | storedFormula |
| levelProgression.rules[8].path[0] | statScaling |
| levelProgression.rules[8].path[1] | patk |
| levelProgression.rules[8].rule.kind | linear |
| levelProgression.rules[8].rule.base | 187 |
| levelProgression.rules[8].rule.perLevel | 120 |
| levelProgression.rules[8].source | storedFormula |
| levelProgression.rules[9].path[0] | resourceCosts |
| levelProgression.rules[9].path[1] | 0 |
| levelProgression.rules[9].path[2] | scaling |
| levelProgression.rules[9].rule.kind | outputCost |
| levelProgression.rules[9].rule.factor | 0,25 |
| levelProgression.rules[9].rule.basis | damage |
| levelProgression.rules[9].rule.minimum | 0 |
| levelProgression.rules[9].source | verifiedManaPricing |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 42: Erwachen

Ein eigener Angriff unter 30 Prozent Leben aktiviert Erwachen, sofern der Skill bereit ist. Reduziert erlittenen physischen und magischen Schaden für 30 Sekunden um 1 Prozent je gelerntem Skilllevel, bis zu 10 Prozent auf Stufe 10. Cooldown 120 Sekunden. Automatischer passiver Effekt ohne Aktivierungskosten oder Castzeit; Begleiterangriffe lösen ihn nicht aus.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Awakening |
| category | passive |
| charClass[0] | Knife |
| charClass[1] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Ein eigener Angriff unter 30 Prozent Leben aktiviert Erwachen, sofern der Skill bereit ist. Reduziert erlittenen physischen und magischen Schaden für 30 Sekunden um 1 Prozent je gelerntem Skilllevel, bis zu 10 Prozent auf Stufe 10. Cooldown 120 Sekunden. Automatischer passiver Effekt ohne Aktivierungskosten oder Castzeit; Begleiterangriffe lösen ihn nicht aus. |
| description_eng | Your own attack below 30 percent Health triggers Awakening when ready. Reduces incoming physical and magical damage for 30 seconds by 1 percent per learned skill level, reaching 10 percent at level 10. Cooldown is 120 seconds. Automatic passive effect with no activation costs or cast time; companion attacks do not trigger it. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 42 |
| skillName_de | Erwachen |
| skillpoints | 1 |
| activation | automatic |
| cd | 120 |
| dur | 30 |
| effects[0].key | awakening-damage-reduction |
| effects[0].type | damageReduction |
| effects[0].target | self |
| effects[0].value | 0,01 |
| effects[0].unit | fraction |
| effects[0].damageTypes[0] | physical |
| effects[0].damageTypes[1] | magical |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0,01 |
| effects[0].valueScaling.perLevel | 0,01 |
| effects[0].durationSeconds | 30 |
| resourceCosts | [] |
| triggerCondition.type | ownAttack |
| triggerCondition.oncePerAttackAction | true |
| triggerCondition.excludeCompanionAttacks | true |
| triggerCondition.requiresCooldownReady | true |
| triggerCondition.healthThresholds[0].belowFraction | 0,3 |
| triggerCondition.healthThresholds[0].chancePerCheck | 1 |
| triggerCondition.thresholdSelection | lowestMatchingThreshold |
| triggerConditionStatus | defined |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0,01 |
| levelProgression.rules[0].rule.perLevel | 0,01 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 45: Erweiterung des Körpers

Permanenter passiver Bonus mit zehn Stufen. Stärke, Vitalität und Willenskraft erhalten jeweils folgende Boni auf Stufe 1 bis 10: 1 / 1,5 / 2 / 2,5 / 3 / 3,5 / 4 / 4,5 / 5 / 10. Alle bisherigen Attributboni sind auf jeder Stufe halbiert. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Expansion of the Body |
| category | passive |
| charClass[0] | Knife |
| charClass[1] | Templar |
| charClass[2] | Gladiator |
| charClass[3] | Berserker |
| charClass[4] | Abenteuer |
| charClass[5] | Butcher |
| charClass[6] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanenter passiver Bonus mit zehn Stufen. Stärke, Vitalität und Willenskraft erhalten jeweils folgende Boni auf Stufe 1 bis 10: 1 / 1,5 / 2 / 2,5 / 3 / 3,5 / 4 / 4,5 / 5 / 10. Alle bisherigen Attributboni sind auf jeder Stufe halbiert. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent passive with ten levels. Strength, Vitality and Wisdom each receive the following bonuses at levels 1 through 10: 1 / 1.5 / 2 / 2.5 / 3 / 3.5 / 4 / 4.5 / 5 / 10. All previous attribute bonuses are halved at every level. No activation costs, cast time or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 45 |
| skillName_de | Erweiterung des Körpers |
| skillpoints | 1 |
| vita | 1 |
| wis | 1 |
| resourceCosts | [] |
| statScaling.vita.type | table |
| statScaling.vita.values[0] | 1 |
| statScaling.vita.values[1] | 1,5 |
| statScaling.vita.values[2] | 2 |
| statScaling.vita.values[3] | 2,5 |
| statScaling.vita.values[4] | 3 |
| statScaling.vita.values[5] | 3,5 |
| statScaling.vita.values[6] | 4 |
| statScaling.vita.values[7] | 4,5 |
| statScaling.vita.values[8] | 5 |
| statScaling.vita.values[9] | 10 |
| statScaling.str.type | table |
| statScaling.str.values[0] | 1 |
| statScaling.str.values[1] | 1,5 |
| statScaling.str.values[2] | 2 |
| statScaling.str.values[3] | 2,5 |
| statScaling.str.values[4] | 3 |
| statScaling.str.values[5] | 3,5 |
| statScaling.str.values[6] | 4 |
| statScaling.str.values[7] | 4,5 |
| statScaling.str.values[8] | 5 |
| statScaling.str.values[9] | 10 |
| statScaling.wis.type | table |
| statScaling.wis.values[0] | 1 |
| statScaling.wis.values[1] | 1,5 |
| statScaling.wis.values[2] | 2 |
| statScaling.wis.values[3] | 2,5 |
| statScaling.wis.values[4] | 3 |
| statScaling.wis.values[5] | 3,5 |
| statScaling.wis.values[6] | 4 |
| statScaling.wis.values[7] | 4,5 |
| statScaling.wis.values[8] | 5 |
| statScaling.wis.values[9] | 10 |
| str | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | vita |
| levelProgression.rules[0].rule.kind | sum |
| levelProgression.rules[0].rule.terms[0].kind | linear |
| levelProgression.rules[0].rule.terms[0].base | 1 |
| levelProgression.rules[0].rule.terms[0].perLevel | 0,5 |
| levelProgression.rules[0].rule.terms[1].kind | thresholds |
| levelProgression.rules[0].rule.terms[1].base | 0 |
| levelProgression.rules[0].rule.terms[1].changes[0].level | 10 |
| levelProgression.rules[0].rule.terms[1].changes[0].value | 4,5 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | str |
| levelProgression.rules[1].rule.kind | sum |
| levelProgression.rules[1].rule.terms[0].kind | linear |
| levelProgression.rules[1].rule.terms[0].base | 1 |
| levelProgression.rules[1].rule.terms[0].perLevel | 0,5 |
| levelProgression.rules[1].rule.terms[1].kind | thresholds |
| levelProgression.rules[1].rule.terms[1].base | 0 |
| levelProgression.rules[1].rule.terms[1].changes[0].level | 10 |
| levelProgression.rules[1].rule.terms[1].changes[0].value | 4,5 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | wis |
| levelProgression.rules[2].rule.kind | sum |
| levelProgression.rules[2].rule.terms[0].kind | linear |
| levelProgression.rules[2].rule.terms[0].base | 1 |
| levelProgression.rules[2].rule.terms[0].perLevel | 0,5 |
| levelProgression.rules[2].rule.terms[1].kind | thresholds |
| levelProgression.rules[2].rule.terms[1].base | 0 |
| levelProgression.rules[2].rule.terms[1].changes[0].level | 10 |
| levelProgression.rules[2].rule.terms[1].changes[0].value | 4,5 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| learningRequirements.minimumCharacterLevel | 3 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| classificationVersion | 1 |
| type | passive |

### 55: Brecher des Geistes

Ein mächtiger Schildstoß verursacht einmalig physischen Schaden. Physischer Skill-Grundschaden 81 auf Stufe 1, +45 je weiterer Stufe, maximal 486 auf Stufe 10. Senkt die magische Verteidigung des Gegners um zunächst 1 Prozent und je weiterer Stufe um 1 Prozentpunkt mehr, bis zu 10 Prozent. Die Effektdauer steigt wie bisher von 21 um 1 Sekunde je weiterer Stufe auf 30 Sekunden. Der Cooldown 27 Sekunden auf Stufe 1 und 18 Sekunden auf Stufe 10. Mana-Kosten 20 auf Stufe 1, +11 je weiterer Stufe, maximal 119 auf Stufe 10. Castzeit 0,1 Sekunden. Bei Anwendung werden zusätzlich einmalig 500 feste Aggropunkte gegen das Ziel erzeugt, nach dem schadensbezogenen Aggro-Multiplikator; dieser feste Bonus wird nicht erneut multipliziert. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Mindbreaker |
| category | active |
| cd | 27 |
| charClass[0] | Knife |
| charClass[1] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Ein mächtiger Schildstoß verursacht einmalig physischen Schaden. Physischer Skill-Grundschaden 81 auf Stufe 1, +45 je weiterer Stufe, maximal 486 auf Stufe 10. Senkt die magische Verteidigung des Gegners um zunächst 1 Prozent und je weiterer Stufe um 1 Prozentpunkt mehr, bis zu 10 Prozent. Die Effektdauer steigt wie bisher von 21 um 1 Sekunde je weiterer Stufe auf 30 Sekunden. Der Cooldown 27 Sekunden auf Stufe 1 und 18 Sekunden auf Stufe 10. Mana-Kosten 20 auf Stufe 1, +11 je weiterer Stufe, maximal 119 auf Stufe 10. Castzeit 0,1 Sekunden. Bei Anwendung werden zusätzlich einmalig 500 feste Aggropunkte gegen das Ziel erzeugt, nach dem schadensbezogenen Aggro-Multiplikator; dieser feste Bonus wird nicht erneut multipliziert. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng |  Reduces enemy magical defense by 1 percent initially and an additional 1 percentage point per additional level, reaching 10 percent. Effect duration retains its progression from 21 by 1 second per additional level to 30 seconds. Cooldown 27 seconds at level 1 and 18 seconds at level 10.  Cast time is 0.1 seconds. On activation adds 500 flat threat toward the target once, after damage-based threat multiplication; this fixed bonus is not multiplied again. Physical skill base damage 81 at level 1, +45 per additional level, maximum 486 at level 10. Mana cost 20 +11 per additional level, maximum 119. Current physical attack is added once per target hit. Existing effects, cooldown and cast time unchanged. |
| dmgType (Altformat) | physical |
| dur | 21 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 55 |
| patk | 81 |
| skillName_de | Brecher des Geistes |
| skillpoints | 1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 27 |
| cooldownScaling.perLevel | -1 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 21 |
| effects[0].durationScaling.perLevel | 1 |
| effects[0].type | statModifier |
| effects[0].target | enemy |
| effects[0].stat | mdef |
| effects[0].value | -0,01 |
| effects[0].unit | fraction |
| effects[0].reference | targetStat |
| effects[0].damageTypes | [] |
| effects[0].durationSeconds | 21 |
| effects[0].key | enemy-magic-defense |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | -0,01 |
| effects[0].valueScaling.perLevel | -0,01 |
| effects[1].key | breaker-flat-threat |
| effects[1].type | threatGain |
| effects[1].target | enemy |
| effects[1].value | 500 |
| effects[1].unit | flat |
| effects[1].durationSeconds | 0 |
| effects[1].applicationTiming | onActivation |
| effects[1].affectedByThreatMultiplier | false |
| effectsVersion | 1 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 20 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 20 |
| resourceCosts[0].scaling.perLevel | 11 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 81 |
| statScaling.patk.perLevel | 45 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 27 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 21 |
| levelProgression.rules[1].rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | -0,01 |
| levelProgression.rules[2].rule.perLevel | -0,01 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | resourceCosts |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | scaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0 |
| levelProgression.rules[3].rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.base | 20 |
| levelProgression.rules[3].rule.rule.perLevel | 11 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | patk |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 81 |
| levelProgression.rules[4].rule.perLevel | 45 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 59: Göttlicher Schutz

Aktiver Schutzskill mit einer einzigen lernbaren Stufe. Du rammst deinen Schild in den Boden und erschaffst vor dir ein schützendes Abbild des Schildes. Verbündete hinter dem Schild erleiden durch abgefangene Angriffe für 5 Sekunden 30 % weniger Schaden. Castzeit 0,5 Sekunden, Cooldown 77 Sekunden, Aktivierungskosten 215 Mana. Die frühere zweite Stufe entfällt; die Werte der bisherigen ersten Stufe bleiben erhalten.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Divine Protection |
| category | active |
| cd | 77 |
| charClass[0] | Knife |
| charClass[1] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Aktiver Schutzskill mit einer einzigen lernbaren Stufe. Du rammst deinen Schild in den Boden und erschaffst vor dir ein schützendes Abbild des Schildes. Verbündete hinter dem Schild erleiden durch abgefangene Angriffe für 5 Sekunden 30 % weniger Schaden. Castzeit 0,5 Sekunden, Cooldown 77 Sekunden, Aktivierungskosten 215 Mana. Die frühere zweite Stufe entfällt; die Werte der bisherigen ersten Stufe bleiben erhalten. |
| description_eng | Active protection skill with one learnable level. Plant your shield in the ground to create a protective image in front of you. Allies behind the shield take 30% less damage from intercepted attacks for 5 seconds. Cast time 0.5 seconds, cooldown 77 seconds, activation cost 215 Mana. The former second level is removed; former level-one values are retained. |
| dmgType (Altformat) | spell |
| dur | 5 |
| maxSkillLv | 1 |
| maxUpgradeLv | 10 |
| nr | 59 |
| skillName_de | Göttlicher Schutz |
| skillpoints | 1 |
| activation | manual |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0,3 |
| effects[0].valueScaling.perLevel | 0 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 5 |
| effects[0].durationScaling.perLevel | 0 |
| effects[0].type | damageReduction |
| effects[0].target | alliesBehindCaster |
| effects[0].area | projectedShield |
| effects[0].value | 0,3 |
| effects[0].unit | fraction |
| effects[0].damageTypes | [] |
| effects[0].durationSeconds | 5 |
| effects[0].key | projected-shield-protection |
| effectsVersion | 1 |
| castTimeSeconds | 0,5 |
| mana (Aktivierungskosten, kein Bonus) | 215 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 215 |
| resourceCosts[0].scaling.perLevel | 0 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0,3 |
| levelProgression.rules[0].rule.perLevel | 0 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 5 |
| levelProgression.rules[1].rule.perLevel | 0 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 215 |
| levelProgression.rules[2].rule.rule.perLevel | 0 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | skill |

### 75: Verstärkung des Körpers

Gruppenbuff für dich, Gruppenmitglieder und Begleiter. Je Stufe +1 Stärke und +1 Vitalität, auf Stufe 10 jeweils +10. Dauer 10 Minuten, Cooldown 60 Sekunden, Castzeit 0,2 Sekunden. Mana-Kosten: 47 + 23 je weiterer Stufe.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Body Reinforcement |
| category | active |
| cd | 60 |
| charClass[0] | Knife |
| charClass[1] | Templar |
| charClass[2] | Gladiator |
| charClass[3] | Berserker |
| charClass[4] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Gruppenbuff für dich, Gruppenmitglieder und Begleiter. Je Stufe +1 Stärke und +1 Vitalität, auf Stufe 10 jeweils +10. Dauer 10 Minuten, Cooldown 60 Sekunden, Castzeit 0,2 Sekunden. Mana-Kosten: 47 + 23 je weiterer Stufe. |
| description_eng | Group buff for yourself, group members and companions. +1 Strength and +1 Vitality per level, reaching +10 each at level 10. Duration 10 minutes, cooldown 60 seconds, cast time 0.2 seconds. Mana cost: 47 + 23 per additional level. |
| dmgType (Altformat) | buff |
| dur | 600 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 75 |
| skillName_de | Verstärkung des Körpers |
| skillpoints | 1 |
| statScaling.str.type | linear |
| statScaling.str.base | 1 |
| statScaling.str.perLevel | 1 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 1 |
| statScaling.vita.perLevel | 1 |
| activation | manual |
| statBonusTargets.str | selfGroupAndCompanions |
| statBonusTargets.vita | selfGroupAndCompanions |
| statBonusUnits.str | flat |
| statBonusUnits.vita | flat |
| str | 1 |
| vita | 1 |
| castTimeSeconds | 0,2 |
| mana (Aktivierungskosten, kein Bonus) | 47 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 47 |
| resourceCosts[0].scaling.perLevel | 23 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | vita |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 47 |
| levelProgression.rules[2].rule.rule.perLevel | 23 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| target | group |
| type | buff |
| castTimeStatus | defined |

### 77: Mächtiger Hieb

Trifft den Gegner nach 0,2 Sekunden Aufladen mit einem mächtigen Hieb. Der physische Skill-Grundschaden steigt gleichmäßig von 73 auf Stufe 1 auf 733 auf Stufe 10. Mana-Kosten 18 auf Stufe 1, +18 je weiterer Stufe, maximal 180 auf Stufe 10. Keine anhaltende Wirkungsdauer, bisheriger Cooldown 27 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Mighty Strike |
| category | active |
| cd | 27 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| charClass[2] | Knife |
| charClass[3] | Templar |
| charClass[4] | Butcher |
| charClass[5] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Trifft den Gegner nach 0,2 Sekunden Aufladen mit einem mächtigen Hieb. Der physische Skill-Grundschaden steigt gleichmäßig von 73 auf Stufe 1 auf 733 auf Stufe 10. Mana-Kosten 18 auf Stufe 1, +18 je weiterer Stufe, maximal 180 auf Stufe 10. Keine anhaltende Wirkungsdauer, bisheriger Cooldown 27 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | After charging for 0.2 seconds, hits the opponent with a mighty strike. Physical skill base damage increases evenly from 73 at level 1 to 733 at level 10. Mana cost 18 at level 1, maximum 180 at level 10. No lasting effect; existing cooldown is 27 seconds. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 77 |
| patk | 73 |
| skillName_de | Mächtiger Hieb |
| skillpoints | 1 |
| castTimeSeconds | 0,2 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 18 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 18 |
| resourceCosts[0].scaling.perLevel | 18 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 73 |
| statScaling.patk.perLevel | 73,333 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 18 |
| levelProgression.rules[0].rule.rule.perLevel | 18 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 73 |
| levelProgression.rules[1].rule.perLevel | 73,333 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 82: Schutz Aura

Eigenbuff, der physische und magische Verteidigung für 15 Sekunden auf Stufe 1 jeweils um 400 erhöht. Je weiterer Stufe kommen jeweils 100 hinzu, bis zu jeweils 1300 auf Stufe 10. Diese starke Verteidigungsskalierung wird in der abschließenden Klassen-Balancingrunde erneut geprüft. Castzeit fest 0,1 Sekunden., Cooldown 90 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Protection Aura |
| category | active |
| cd | 90 |
| charClass[0] | Knife |
| charClass[1] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff, der physische und magische Verteidigung für 15 Sekunden auf Stufe 1 jeweils um 400 erhöht. Je weiterer Stufe kommen jeweils 100 hinzu, bis zu jeweils 1300 auf Stufe 10. Diese starke Verteidigungsskalierung wird in der abschließenden Klassen-Balancingrunde erneut geprüft. Castzeit fest 0,1 Sekunden., Cooldown 90 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff granting 400 physical and 400 magical defense for 15 seconds at level 1. Each additional level adds 100 to each, reaching 1300 each at level 10. This strong defense scaling will be reviewed in the final class balancing pass. Fixed cast time 0.1 seconds., cooldown is 90 seconds. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 167 at level 10, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 15 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| mdef | 400 |
| nr | 82 |
| pdef | 400 |
| skillName_de | Schutz Aura |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statScaling.pdef.type | linear |
| statScaling.pdef.base | 400 |
| statScaling.pdef.perLevel | 100 |
| statScaling.mdef.type | linear |
| statScaling.mdef.base | 400 |
| statScaling.mdef.perLevel | 100 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 50 |
| levelProgression.rules[0].rule.rule.perLevel | 13 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | pdef |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 400 |
| levelProgression.rules[1].rule.perLevel | 100 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | mdef |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 400 |
| levelProgression.rules[2].rule.perLevel | 100 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| castTimeStatus | defined |
| timingModifiers.castTimeIsFixed | true |
| timingModifiers.affectedByAttackSpeed | false |
| timingModifiers.affectedByCastSpeed | false |
| manaPricing.category | selfbuff |
| manaPricing.basis | skillLevel |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| classificationVersion | 1 |
| target | self |
| type | selfBuff |

### 93: Schildangriffstraining

Verbessert dauerhaft deine Fertigkeiten im Kampf mit dem Schild. Stärke und Vita wurden gegenüber der bisherigen Fassung getauscht: Auf Stufe 1 +2 Stärke und +1 Vita. Je weiterer Stufe +1 Stärke und +0,5 Vita. Auf Stufe 5 insgesamt +6 Stärke und +3 Vita. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Shield Attack Training |
| category | passive |
| charClass[0] | Knife |
| charClass[1] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Verbessert dauerhaft deine Fertigkeiten im Kampf mit dem Schild. Stärke und Vita wurden gegenüber der bisherigen Fassung getauscht: Auf Stufe 1 +2 Stärke und +1 Vita. Je weiterer Stufe +1 Stärke und +0,5 Vita. Auf Stufe 5 insgesamt +6 Stärke und +3 Vita. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer. |
| description_eng | Permanently improves shield combat. Swaps the previous Strength and Vitality progressions: grants 2 Strength and 1 Vitality at level 1, adding 1 Strength and 0.5 Vitality per additional level, reaching 6 Strength and 3 Vitality at level 5. No activation costs, cast time, cooldown or limited duration. |
| dmgType (Altformat) | passive |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 93 |
| skillName_de | Schildangriffstraining |
| skillpoints | 1 |
| vita | 1 |
| str | 2 |
| resourceCosts | [] |
| statScaling.str.type | linear |
| statScaling.str.base | 2 |
| statScaling.str.perLevel | 1 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 1 |
| statScaling.vita.perLevel | 0,5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | vita |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.perLevel | 0,5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 94: Schildstoß

Stößt mit dem Schild gegen den Gegner und verursacht einmalig physischen Grundschaden von 137 auf Stufe 1, plus 47 je weiterer Stufe auf 1030 auf Stufe 20. Ab Skillstufe 20 löst ein erfolgreicher Treffer Verspotten für 2 Sekunden aus: Das getroffene Ziel muss unabhängig von seinem bisherigen Fokus den Ritter mit Auto-Attacks angreifen und kann währenddessen keine Skills einsetzen. Gilt gegen Monster und Spieler im PvP. Mana-Kosten 34 auf Stufe 1, +12 je weiterer Stufe, maximal 262 auf Stufe 20. Castzeit 0,1 Sekunden, vorläufige Animation 1 Sekunde, Cooldown 29 Sekunden auf Stufe 1 und 29 Sekunden auf Stufe 20. Keine anhaltende Schadenswirkung. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Shield Strike |
| category | active |
| cd | 29 |
| charClass[0] | Knife |
| charClass[1] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Stößt mit dem Schild gegen den Gegner und verursacht einmalig physischen Grundschaden von 137 auf Stufe 1, plus 47 je weiterer Stufe auf 1030 auf Stufe 20. Ab Skillstufe 20 löst ein erfolgreicher Treffer Verspotten für 2 Sekunden aus: Das getroffene Ziel muss unabhängig von seinem bisherigen Fokus den Ritter mit Auto-Attacks angreifen und kann währenddessen keine Skills einsetzen. Gilt gegen Monster und Spieler im PvP. Mana-Kosten 34 auf Stufe 1, +12 je weiterer Stufe, maximal 262 auf Stufe 20. Castzeit 0,1 Sekunden, vorläufige Animation 1 Sekunde, Cooldown 29 Sekunden auf Stufe 1 und 29 Sekunden auf Stufe 20. Keine anhaltende Schadenswirkung. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Hits the enemy with a shield thrust, dealing base physical damage once, starting at 137 and increasing by 47 per additional level to 1030 at level 20. From skill level 20, a successful hit taunts the target for 2 seconds. The target must use basic attacks against the caster regardless of its previous target and cannot use skills during this effect. Applies to monsters and players in PvP. Mana cost 34 at level 1, maximum 262 at level 20. Cast time is 0.1 seconds, provisional animation is 1 second, Cooldown 29 seconds at level 1 and 29 seconds at level 20. No ongoing damage. |
| dmgType (Altformat) | physical |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 94 |
| patk | 137 |
| skillName_de | Schildstoß |
| skillpoints | 1 |
| animationDurationSeconds | 1 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,1 |
| effects[0].key | shield-strike-taunt |
| effects[0].type | control |
| effects[0].controlKind | taunt |
| effects[0].target | enemy |
| effects[0].minimumSkillLevel | 20 |
| effects[0].durationSeconds | 2 |
| effects[0].durationStatus | defined |
| effects[0].actionRestrictionsStatus | defined |
| effects[0].forcedTarget | caster |
| effects[0].forcedAction | basicAttack |
| effects[0].preventsSkillUse | true |
| effects[0].overridesCurrentTarget | true |
| effects[0].appliesInPvp | true |
| effects[0].requiresSuccessfulHit | true |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 34 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 34 |
| resourceCosts[0].scaling.perLevel | 12 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 137 |
| statScaling.patk.perLevel | 47 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 34 |
| levelProgression.rules[0].rule.rule.perLevel | 12 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 137 |
| levelProgression.rules[1].rule.perLevel | 47 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 95: Schildsturm

Stürmt mit dem Schild auf den Gegner zu und verursacht einmalig physischen Schaden. Physischer Skill-Grundschaden 272 auf Stufe 1, +65 je weiterer Stufe, maximal 1507 auf Stufe 20. Macht das Ziel zunächst 1 Sekunde benommen; die Effektdauer steigt wie bisher gleichmäßig auf 3 Sekunden auf Stufe 15 und bleibt auf Stufe 16 bis 20 bei 3 Sekunden. Mana-Kosten 68 auf Stufe 1, +16 je weiterer Stufe, maximal 372 auf Stufe 20. Castzeit 0,1 Sekunden, Cooldown 37 Sekunden. Keine anhaltende Schadenswirkung. Ansturmdistanz und genaue Einschränkungen durch Benommenheit werden später geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Shield Storm |
| category | active |
| cd | 37 |
| charClass[0] | Knife |
| charClass[1] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Stürmt mit dem Schild auf den Gegner zu und verursacht einmalig physischen Schaden. Physischer Skill-Grundschaden 272 auf Stufe 1, +65 je weiterer Stufe, maximal 1507 auf Stufe 20. Macht das Ziel zunächst 1 Sekunde benommen; die Effektdauer steigt wie bisher gleichmäßig auf 3 Sekunden auf Stufe 15 und bleibt auf Stufe 16 bis 20 bei 3 Sekunden. Mana-Kosten 68 auf Stufe 1, +16 je weiterer Stufe, maximal 372 auf Stufe 20. Castzeit 0,1 Sekunden, Cooldown 37 Sekunden. Keine anhaltende Schadenswirkung. Ansturmdistanz und genaue Einschränkungen durch Benommenheit werden später geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Charges toward the enemy with the shield and hits once for physical damage. Physical base damage 272 at level 1 plus 65 per additional level, reaching 1507 at level 20, plus current physical attack once. Dazes the target for 1 second initially, increasing evenly to 3 seconds at level 15 as before, then remaining at 3 seconds through level 20. Mana cost 68 plus 16 per additional level, reaching 372 at level 20. Cast time 0.1 seconds, cooldown 37 seconds. No ongoing damage. Charge distance and exact daze restrictions remain to be reviewed. |
| dmgType (Altformat) | physical |
| dur | 1 |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 95 |
| patk | 272 |
| skillName_de | Schildsturm |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| effects[0].key | shield-storm-daze |
| effects[0].type | control |
| effects[0].controlKind | dazed |
| effects[0].target | enemy |
| effects[0].actionRestrictionsStatus | pending |
| effects[0].durationSeconds | 1 |
| effects[0].durationScaling.type | table |
| effects[0].durationScaling.values[0] | 1 |
| effects[0].durationScaling.values[1] | 1,143 |
| effects[0].durationScaling.values[2] | 1,286 |
| effects[0].durationScaling.values[3] | 1,429 |
| effects[0].durationScaling.values[4] | 1,571 |
| effects[0].durationScaling.values[5] | 1,714 |
| effects[0].durationScaling.values[6] | 1,857 |
| effects[0].durationScaling.values[7] | 2 |
| effects[0].durationScaling.values[8] | 2,143 |
| effects[0].durationScaling.values[9] | 2,286 |
| effects[0].durationScaling.values[10] | 2,429 |
| effects[0].durationScaling.values[11] | 2,571 |
| effects[0].durationScaling.values[12] | 2,714 |
| effects[0].durationScaling.values[13] | 2,857 |
| effects[0].durationScaling.values[14] | 3 |
| effects[0].durationScaling.values[15] | 3 |
| effects[0].durationScaling.values[16] | 3 |
| effects[0].durationScaling.values[17] | 3 |
| effects[0].durationScaling.values[18] | 3 |
| effects[0].durationScaling.values[19] | 3 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 68 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 68 |
| resourceCosts[0].scaling.perLevel | 16 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 272 |
| statScaling.patk.perLevel | 65 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | durationScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.max | 3 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 1 |
| levelProgression.rules[0].rule.rule.perLevel | 0,143 |
| levelProgression.rules[0].source | confirmedThreeSecondCap |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 68 |
| levelProgression.rules[1].rule.rule.perLevel | 16 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 272 |
| levelProgression.rules[2].rule.perLevel | 65 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 102: Schwerttraining

Permanentes Schwerttraining des Ritters mit fünf Stufen. Stärke je Stufe 2/3/4/5/6. Vitalität ersetzt den bisherigen Geschickbonus unverändert im Verlauf: 1/1/1/1/2. Auf Stufe 5 insgesamt +6 Stärke und +2 Vitalität. Kein Geschickbonus. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Sword Training |
| category | passive |
| charClass[0] | Knife |
| charClass[1] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanentes Schwerttraining des Ritters mit fünf Stufen. Stärke je Stufe 2/3/4/5/6. Vitalität ersetzt den bisherigen Geschickbonus unverändert im Verlauf: 1/1/1/1/2. Auf Stufe 5 insgesamt +6 Stärke und +2 Vitalität. Kein Geschickbonus. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent Knight Sword Training with five levels. Strength by level: 2/3/4/5/6. Vitality replaces the previous Dexterity bonus with the same progression: 1/1/1/1/2. At level 5: +6 Strength and +2 Vitality. No Dexterity bonus, activation costs, cast time or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 102 |
| skillName_de | Schwerttraining |
| skillpoints | 1 |
| str | 2 |
| resourceCosts | [] |
| statScaling.str.type | table |
| statScaling.str.values[0] | 2 |
| statScaling.str.values[1] | 3 |
| statScaling.str.values[2] | 4 |
| statScaling.str.values[3] | 5 |
| statScaling.str.values[4] | 6 |
| statScaling.vita.type | table |
| statScaling.vita.values[0] | 1 |
| statScaling.vita.values[1] | 1 |
| statScaling.vita.values[2] | 1 |
| statScaling.vita.values[3] | 1 |
| statScaling.vita.values[4] | 2 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | vita |
| levelProgression.rules[1].rule.kind | rounded |
| levelProgression.rules[1].rule.mode | round |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 0,5 |
| levelProgression.rules[1].rule.rule.perLevel | 0,25 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |
| vita | 1 |

### 107: Stählerne Rüstung

Verstärkt verbündete Spieler in der Nähe um 80 physische und 60 magische Verteidigung. Eine lernbare Stufe. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten: 92.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Steel Armor |
| category | active |
| cd | 60 |
| charClass[0] | Templar |
| charClass[1] | Knife |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Verstärkt verbündete Spieler in der Nähe um 80 physische und 60 magische Verteidigung. Eine lernbare Stufe. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten: 92. |
| description_eng | Grants nearby allied players +80 physical and +60 magical defense. One learnable level. Duration 30 minutes, cooldown 60 seconds, cast time 0.3 seconds. Mana cost: 92. |
| dmgType (Altformat) | buff |
| dur | 1.800 |
| maxSkillLv | 1 |
| maxUpgradeLv | 10 |
| mdef | 60 |
| nr | 107 |
| pdef | 80 |
| skillName_de | Stählerne Rüstung |
| skillpoints | 1 |
| castTimeSeconds | 0,3 |
| mana (Aktivierungskosten, kein Bonus) | 92 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 92 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | constant |
| levelProgression.rules[0].rule.rule.value | 92 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | pdef |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 80 |
| levelProgression.rules[1].rule.perLevel | 80 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | mdef |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 60 |
| levelProgression.rules[2].rule.perLevel | 60 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| target | group |
| type | buff |
| castTimeStatus | defined |
| statBonusUnits.pdef | flat |
| statBonusUnits.mdef | flat |
| statScaling.pdef.type | linear |
| statScaling.pdef.base | 80 |
| statScaling.pdef.perLevel | 80 |
| statScaling.mdef.type | linear |
| statScaling.mdef.base | 60 |
| statScaling.mdef.perLevel | 60 |

### 114: Überlebenswille

Eigene Angriffe können Überlebenswille auslösen, wenn der Skill bereit ist: unter 30 Prozent Leben mit 5 Prozent Chance, unter 20 Prozent mit 10 Prozent und unter 10 Prozent mit 30 Prozent. Es gilt nur die niedrigste passende Lebensschwelle. Der Buff erhöht für 12 Sekunden Stärke um 3 sowie physische und magische Verteidigung jeweils um 30. Je weiterer Skillstufe kommen 1 Stärke und jeweils 6 Verteidigung hinzu, bis zu 7 Stärke und jeweils 54 Verteidigung auf Level 5. Der Cooldown beträgt 30 Sekunden. Der Skill verändert weder Vitalität noch maximales Leben.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Will to Survive |
| category | passive |
| cd | 30 |
| charClass[0] | Knife |
| charClass[1] | Templar |
| charClass[2] | Gladiator |
| charClass[3] | Berserker |
| charClass[4] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigene Angriffe können Überlebenswille auslösen, wenn der Skill bereit ist: unter 30 Prozent Leben mit 5 Prozent Chance, unter 20 Prozent mit 10 Prozent und unter 10 Prozent mit 30 Prozent. Es gilt nur die niedrigste passende Lebensschwelle. Der Buff erhöht für 12 Sekunden Stärke um 3 sowie physische und magische Verteidigung jeweils um 30. Je weiterer Skillstufe kommen 1 Stärke und jeweils 6 Verteidigung hinzu, bis zu 7 Stärke und jeweils 54 Verteidigung auf Level 5. Der Cooldown beträgt 30 Sekunden. Der Skill verändert weder Vitalität noch maximales Leben. |
| description_eng | Your own attacks can trigger Survival Will when ready: a 5 percent chance below 30 percent Health, 10 percent below 20 percent, and 30 percent below 10 percent. Only the lowest matching Health threshold applies. For 12 seconds, the buff increases Strength by 3 and physical and magical defense by 30 each. Each additional skill level adds 1 Strength and 6 to each defense, reaching 7 Strength and 54 to each defense at level 5. Cooldown is 30 seconds. The skill does not change Vitality or maximum Health. |
| dmgType (Altformat) | passive |
| dur | 12 |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 114 |
| skillName_de | Überlebenswille |
| skillpoints | 1 |
| str | 3 |
| activation | automatic |
| mdef | 30 |
| pdef | 30 |
| resourceCosts | [] |
| statBonusUnits.str | flat |
| statBonusUnits.pdef | flat |
| statBonusUnits.mdef | flat |
| statScaling.str.type | linear |
| statScaling.str.base | 3 |
| statScaling.str.perLevel | 1 |
| statScaling.pdef.type | linear |
| statScaling.pdef.base | 30 |
| statScaling.pdef.perLevel | 6 |
| statScaling.mdef.type | linear |
| statScaling.mdef.base | 30 |
| statScaling.mdef.perLevel | 6 |
| triggerCondition.type | ownAttack |
| triggerCondition.oncePerAttackAction | true |
| triggerCondition.excludeCompanionAttacks | true |
| triggerCondition.requiresCooldownReady | true |
| triggerCondition.healthThresholds[0].belowFraction | 0,1 |
| triggerCondition.healthThresholds[0].chancePerCheck | 0,3 |
| triggerCondition.healthThresholds[1].belowFraction | 0,2 |
| triggerCondition.healthThresholds[1].chancePerCheck | 0,1 |
| triggerCondition.healthThresholds[2].belowFraction | 0,3 |
| triggerCondition.healthThresholds[2].chancePerCheck | 0,05 |
| triggerCondition.thresholdSelection | lowestMatchingThreshold |
| triggerConditionStatus | defined |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 3 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | pdef |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 30 |
| levelProgression.rules[1].rule.perLevel | 6 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | mdef |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 30 |
| levelProgression.rules[2].rule.perLevel | 6 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 133: Tamen

Versucht, eine Kreatur zu zähmen. Erfordert das passende spezielle Taming-Item für diese Kreatur. Die Grunderfolgschance beginnt bei 50 Prozent und steigt je weiterer Skillstufe um 15 Prozentpunkte auf 80 Prozent. Ein Kreaturen-Gegenwert beeinflusst die endgültige Erfolgschance; die Berechnung ist noch festzulegen. Die Mana-Kosten steigen von 100 um 25 je weiterer Stufe auf 150. Die Cast Time sinkt von 3 um 0,5 Sekunden je weiterer Stufe auf 2 Sekunden, der Cooldown von 60 um 10 Sekunden je weiterer Stufe auf 40 Sekunden. Der Versuch verursacht keinen Schaden und hat keine anschließende Effektdauer. Der Itemverbrauch ist noch festzulegen. Die Definition umfasst drei Stufen; die normale Lerngrenze anderer Klassen liegt bei Stufe 1. Der Abenteurer kann Stufe 3 lernen; eine zweite Spezialklasse ist noch nicht festgelegt.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Tame |
| category | creature |
| cd | 60 |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knife |
| charClass[6] | Templar |
| charClass[7] | Herbalist |
| charClass[8] | Witcher |
| charClass[9] | Archer |
| charClass[10] | Hunter |
| charClass[11] | Druide |
| charClass[12] | Alchemist |
| charClass[13] | Summoner |
| charClass[14] | Soulseeker |
| charClass[15] | Bloodmage |
| charClass[16] | Luminet |
| charClass[17] | Lightmage |
| charClass[18] | Healer |
| charClass[19] | Priest |
| charClass[20] | Ritualist |
| charClass[21] | Shamane |
| charClass[22] | High Elves |
| charClass[23] | Villian |
| charClass[24] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Versucht, eine Kreatur zu zähmen. Erfordert das passende spezielle Taming-Item für diese Kreatur. Die Grunderfolgschance beginnt bei 50 Prozent und steigt je weiterer Skillstufe um 15 Prozentpunkte auf 80 Prozent. Ein Kreaturen-Gegenwert beeinflusst die endgültige Erfolgschance; die Berechnung ist noch festzulegen. Die Mana-Kosten steigen von 100 um 25 je weiterer Stufe auf 150. Die Cast Time sinkt von 3 um 0,5 Sekunden je weiterer Stufe auf 2 Sekunden, der Cooldown von 60 um 10 Sekunden je weiterer Stufe auf 40 Sekunden. Der Versuch verursacht keinen Schaden und hat keine anschließende Effektdauer. Der Itemverbrauch ist noch festzulegen. Die Definition umfasst drei Stufen; die normale Lerngrenze anderer Klassen liegt bei Stufe 1. Der Abenteurer kann Stufe 3 lernen; eine zweite Spezialklasse ist noch nicht festgelegt. |
| description_eng | Attempts to tame a creature. Requires the specific matching taming item for that creature. Base success chance starts at 50 percent and increases by 15 percentage points per additional skill level to 80 percent. A creature counter value influences final success chance; its calculation is still to be defined. Mana cost increases from 100 by 25 per additional level to 150. Cast time decreases from 3 by 0.5 seconds per additional level to 2 seconds, and cooldown from 60 by 10 seconds per additional level to 40 seconds. The attempt causes no damage and has no subsequent effect duration. Item consumption is still to be defined. The definition contains three levels; normal other classes are capped at learned level 1. The Adventurer may learn level 3; a second specialist remains undefined. |
| dmgType (Altformat) | spell |
| maxSkillLv | 3 |
| maxUpgradeLv | 10 |
| nr | 133 |
| skillName_de | Tamen |
| skillpoints | 1 |
| castTimeScaling.type | linear |
| castTimeScaling.base | 3 |
| castTimeScaling.perLevel | -0,5 |
| castTimeSeconds | 3 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 60 |
| cooldownScaling.perLevel | -10 |
| mana (Aktivierungskosten, kein Bonus) | 100 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 100 |
| resourceCosts[0].scaling.perLevel | 25 |
| taming.requiresMatchingItem | true |
| taming.itemConsumptionStatus | pending |
| taming.creatureCounterStatus | pending |
| taming.baseSuccessChance | 0,5 |
| taming.successChanceScaling.type | linear |
| taming.successChanceScaling.base | 0,5 |
| taming.successChanceScaling.perLevel | 0,15 |
| learningLimits.defaultMaxLevel | 1 |
| learningLimits.classOverrides.Abenteuer | 3 |
| learningLimits.classOverrides.Gladiator | 1 |
| learningLimits.classOverrides.Berserker | 1 |
| learningLimits.status | secondSpecialistPending |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | castTimeScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 3 |
| levelProgression.rules[0].rule.rule.perLevel | -0,5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | cooldownScaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0,1 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 60 |
| levelProgression.rules[1].rule.rule.perLevel | -10 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 100 |
| levelProgression.rules[2].rule.rule.perLevel | 25 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | taming |
| levelProgression.rules[3].path[1] | successChanceScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 0,5 |
| levelProgression.rules[3].rule.perLevel | 0,15 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| learningRequirements.minimumCharacterLevel | 4 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| classificationVersion | 1 |
| type | skill |

### 134: Bindung

Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Bond |
| category | creature |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knife |
| charClass[6] | Templar |
| charClass[7] | Herbalist |
| charClass[8] | Witcher |
| charClass[9] | Archer |
| charClass[10] | Hunter |
| charClass[11] | Druide |
| charClass[12] | Alchemist |
| charClass[13] | Summoner |
| charClass[14] | Soulseeker |
| charClass[15] | Bloodmage |
| charClass[16] | Luminet |
| charClass[17] | Lightmage |
| charClass[18] | Healer |
| charClass[19] | Priest |
| charClass[20] | Ritualist |
| charClass[21] | Shamane |
| charClass[22] | High Elves |
| charClass[23] | Villian |
| charClass[24] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown. |
| description_eng | The bond permanently strengthens your companion. At skill level 1 it gains 10 Strength, Vitality, Intelligence and Wisdom each. Each additional level adds 5 to each attribute, reaching 20 each at level 3. The player does not receive these bonuses. Standard classes can learn level 1; the Adventurer can learn level 3. The second specialist class is still to be defined. Bond has no activation costs or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 3 |
| maxUpgradeLv | 10 |
| nr | 134 |
| skillName_de | Bindung |
| skillpoints | 1 |
| effects[0].key | bond_str |
| effects[0].type | statModifier |
| effects[0].target | companion |
| effects[0].stat | str |
| effects[0].value | 10 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 0 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 10 |
| effects[0].valueScaling.perLevel | 5 |
| effects[0].progressionStatus | defined |
| effects[1].key | bond_vita |
| effects[1].type | statModifier |
| effects[1].target | companion |
| effects[1].stat | vita |
| effects[1].value | 10 |
| effects[1].unit | flat |
| effects[1].durationSeconds | 0 |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | 10 |
| effects[1].valueScaling.perLevel | 5 |
| effects[1].progressionStatus | defined |
| effects[2].key | bond_int |
| effects[2].type | statModifier |
| effects[2].target | companion |
| effects[2].stat | int |
| effects[2].value | 10 |
| effects[2].unit | flat |
| effects[2].durationSeconds | 0 |
| effects[2].valueScaling.type | linear |
| effects[2].valueScaling.base | 10 |
| effects[2].valueScaling.perLevel | 5 |
| effects[2].progressionStatus | defined |
| effects[3].key | bond_wis |
| effects[3].type | statModifier |
| effects[3].target | companion |
| effects[3].stat | wis |
| effects[3].value | 10 |
| effects[3].unit | flat |
| effects[3].durationSeconds | 0 |
| effects[3].valueScaling.type | linear |
| effects[3].valueScaling.base | 10 |
| effects[3].valueScaling.perLevel | 5 |
| effects[3].progressionStatus | defined |
| effectsVersion | 1 |
| learningLimits.defaultMaxLevel | 1 |
| learningLimits.classOverrides.Abenteuer | 3 |
| learningLimits.status | secondSpecialistPending |
| resourceCosts | [] |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 10 |
| levelProgression.rules[0].rule.perLevel | 5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 1 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 10 |
| levelProgression.rules[1].rule.perLevel | 5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 2 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 10 |
| levelProgression.rules[2].rule.perLevel | 5 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 3 |
| levelProgression.rules[3].path[2] | valueScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 10 |
| levelProgression.rules[3].rule.perLevel | 5 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| learningRequirements.minimumCharacterLevel | 6 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| classificationVersion | 1 |
| type | passive |

### 135: Kontrolle

Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Control |
| category | creature |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knife |
| charClass[6] | Templar |
| charClass[7] | Herbalist |
| charClass[8] | Witcher |
| charClass[9] | Archer |
| charClass[10] | Hunter |
| charClass[11] | Druide |
| charClass[12] | Alchemist |
| charClass[13] | Summoner |
| charClass[14] | Soulseeker |
| charClass[15] | Bloodmage |
| charClass[16] | Luminet |
| charClass[17] | Lightmage |
| charClass[18] | Healer |
| charClass[19] | Priest |
| charClass[20] | Ritualist |
| charClass[21] | Shamane |
| charClass[22] | High Elves |
| charClass[23] | Villian |
| charClass[24] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen. |
| description_eng | Permanent passive creature skill. The learned skill level determines the number of simultaneously controlled creatures: one at level 1, two at level 2. All other classes can learn up to level 1; only the Adventurer and its advancement can learn up to level 2 and control two creatures simultaneously. First unlock at character level 5; the character-level requirement for skill rank 2 remains pending. |
| dmgType (Altformat) | passive |
| maxSkillLv | 2 |
| maxUpgradeLv | 10 |
| nr | 135 |
| skillName_de | Kontrolle |
| skillpoints | 1 |
| learningLimits.defaultMaxLevel | 1 |
| learningLimits.classOverrides.Abenteuer | 2 |
| learningLimits.classOverrides.Adventure | 2 |
| learningLimits.classOverrides.Adventurer | 2 |
| learningLimits.classOverrides.Scout | 2 |
| learningLimits.status | defined |
| levelProgression.version | 1 |
| levelProgression.rules | [] |
| levelProgression.extensionNeedsDefinition[0] | companionControlSettings.maximumControlledCreaturesByLevel |
| learningRequirements.minimumCharacterLevel | 5 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| classificationVersion | 1 |
| type | passive |
| companionControlSettings.maximumControlledCreaturesByLevel[0] | 1 |
| companionControlSettings.maximumControlledCreaturesByLevel[1] | 2 |

### 136: Beschwören

Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Summon |
| category | creature |
| cd | 5 |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knife |
| charClass[6] | Templar |
| charClass[7] | Herbalist |
| charClass[8] | Witcher |
| charClass[9] | Archer |
| charClass[10] | Hunter |
| charClass[11] | Druide |
| charClass[12] | Alchemist |
| charClass[13] | Summoner |
| charClass[14] | Soulseeker |
| charClass[15] | Bloodmage |
| charClass[16] | Luminet |
| charClass[17] | Lightmage |
| charClass[18] | Healer |
| charClass[19] | Priest |
| charClass[20] | Ritualiost |
| charClass[21] | Shamane |
| charClass[22] | High Elves |
| charClass[23] | Villian |
| charClass[24] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer. |
| description_eng | Summons your companion after a 1 second cast time. Costs 5 Mana and has a 5 second cooldown. There is no subsequent effect duration. |
| dmgType (Altformat) | spell |
| maxSkillLv | 1 |
| maxUpgradeLv | 10 |
| nr | 136 |
| skillName_de | Beschwören |
| skillpoints | 1 |
| castTimeSeconds | 1 |
| mana (Aktivierungskosten, kein Bonus) | 5 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | constant |
| levelProgression.rules[0].rule.rule.value | 5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| learningRequirements.minimumCharacterLevel | 6 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| classificationVersion | 1 |
| type | skill |

### 137: Zurückrufen

Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Recall |
| category | creature |
| cd | 5 |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knife |
| charClass[6] | Templar |
| charClass[7] | Herbalist |
| charClass[8] | Witcher |
| charClass[9] | Archer |
| charClass[10] | Hunter |
| charClass[11] | Druide |
| charClass[12] | Alchemist |
| charClass[13] | Summoner |
| charClass[14] | Soulseeker |
| charClass[15] | Bloodmage |
| charClass[16] | Luminet |
| charClass[17] | Lightmage |
| charClass[18] | Healer |
| charClass[19] | Priest |
| charClass[20] | Ritualist |
| charClass[21] | Shamane |
| charClass[22] | High Elves |
| charClass[23] | Villian |
| charClass[24] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer. |
| description_eng | Recalls your companion instantly. Costs 5 Mana and has a 5 second cooldown. No cast time or subsequent effect duration. |
| dmgType (Altformat) | spell |
| maxSkillLv | 1 |
| maxUpgradeLv | 10 |
| nr | 137 |
| skillName_de | Zurückrufen |
| skillpoints | 1 |
| castTimeSeconds | 0 |
| mana (Aktivierungskosten, kein Bonus) | 5 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | constant |
| levelProgression.rules[0].rule.rule.value | 5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| learningRequirements.minimumCharacterLevel | 6 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| classificationVersion | 1 |
| type | skill |

### 138: Zucht

Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Breed |
| category | creature |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knife |
| charClass[6] | Templar |
| charClass[7] | Herbalist |
| charClass[8] | Witcher |
| charClass[9] | Archer |
| charClass[10] | Hunter |
| charClass[11] | Druide |
| charClass[12] | Alchemist |
| charClass[13] | Summoner |
| charClass[14] | Soulseeker |
| charClass[15] | Bloodmage |
| charClass[16] | Luminet |
| charClass[17] | Lightmage |
| charClass[18] | Healer |
| charClass[19] | Priest |
| charClass[20] | Ritualist |
| charClass[21] | Shamane |
| charClass[22] | High Elves |
| charClass[23] | Villian |
| charClass[24] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen. |
| description_eng | Allows your companion to gain experience and level up. It receives the same experience as you, plus 10 percent per learned skill level: 110 percent at level 1, 120 percent at level 2 and 130 percent at level 3. Permanently passive with no costs or cooldown. Standard classes can learn level 1, the Adventurer level 3; the second specialist class is still to be defined. |
| dmgType (Altformat) | passive |
| maxSkillLv | 3 |
| maxUpgradeLv | 10 |
| nr | 138 |
| skillName_de | Zucht |
| skillpoints | 1 |
| effects[0].key | breedExperience |
| effects[0].type | experienceBonus |
| effects[0].target | companion |
| effects[0].experienceSource | playerExperience |
| effects[0].value | 0,1 |
| effects[0].unit | fraction |
| effects[0].durationSeconds | 0 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0,1 |
| effects[0].valueScaling.perLevel | 0,1 |
| effects[0].progressionStatus | defined |
| effectsVersion | 1 |
| learningLimits.defaultMaxLevel | 1 |
| learningLimits.classOverrides.Abenteuer | 3 |
| learningLimits.status | secondSpecialistPending |
| resourceCosts | [] |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0,1 |
| levelProgression.rules[0].rule.perLevel | 0,1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| learningRequirements.minimumCharacterLevel | 7 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| classificationVersion | 1 |
| type | passive |

### 139: Ausdauertraining

Permanentes Ausdauertraining mit 20 Stufen für alle Klassen. Je gelerntem Skilllevel +1 Vitalität und +1 Willenskraft, auf Stufe 20 jeweils +20. Keine direkten Boni auf physische oder magische Verteidigung; die regulären Attributumrechnungen bleiben wirksam. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Endurance Training |
| category | passive |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knife |
| charClass[6] | Templar |
| charClass[7] | Herbalist |
| charClass[8] | Witcher |
| charClass[9] | Archer |
| charClass[10] | Hunter |
| charClass[11] | Druide |
| charClass[12] | Alchemist |
| charClass[13] | Summoner |
| charClass[14] | Soulseeker |
| charClass[15] | Bloodmage |
| charClass[16] | Luminet |
| charClass[17] | Lightmage |
| charClass[18] | Healer |
| charClass[19] | Priest |
| charClass[20] | Ritualist |
| charClass[21] | Shamane |
| charClass[22] | High Elves |
| charClass[23] | Villian |
| charClass[24] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanentes Ausdauertraining mit 20 Stufen für alle Klassen. Je gelerntem Skilllevel +1 Vitalität und +1 Willenskraft, auf Stufe 20 jeweils +20. Keine direkten Boni auf physische oder magische Verteidigung; die regulären Attributumrechnungen bleiben wirksam. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent Endurance Training with 20 levels for all classes. Each learned level grants +1 Vitality and +1 Wisdom, reaching +20 each at level 20. No direct physical or magical defense bonuses; normal attribute conversions still apply. No activation costs, cast time or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 139 |
| skillName_de | Ausdauertraining |
| skillpoints | 1 |
| vita | 1 |
| wis | 1 |
| resourceCosts | [] |
| statScaling.vita.type | linear |
| statScaling.vita.base | 1 |
| statScaling.vita.perLevel | 1 |
| statScaling.wis.type | linear |
| statScaling.wis.base | 1 |
| statScaling.wis.perLevel | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | vita |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | wis |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| learningRequirements.minimumCharacterLevel | 2 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| classificationVersion | 1 |
| type | passive |

### 140: Standhaft

Dauerhafter Attributanteil: je gelernter Stufe +1 Vitalität, +0,5 Willenskraft; auf Stufe 10 insgesamt +10 Vitalität, +5 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Steadfast |
| category | passive |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| charClass[2] | Knife |
| charClass[3] | Templar |
| charClass[4] | Gladiator |
| charClass[5] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +1 Vitalität, +0,5 Willenskraft; auf Stufe 10 insgesamt +10 Vitalität, +5 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent attribute component: +1 Vitality, +0.5 Wisdom per learned level; at level 10, +10 Vitality, +5 Wisdom total. This component always applies independently of any triggered effects. No activation cost, cast time or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 140 |
| skillName_de | Standhaft |
| skillpoints | 1 |
| vita | 1 |
| wis | 0,5 |
| resourceCosts | [] |
| statScaling.vita.type | linear |
| statScaling.vita.base | 1 |
| statScaling.vita.perLevel | 1 |
| statScaling.wis.type | linear |
| statScaling.wis.base | 0,5 |
| statScaling.wis.perLevel | 0,5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | vita |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | wis |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,5 |
| levelProgression.rules[1].rule.perLevel | 0,5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 141: Eiserner Wille

Dauerhafter Attributanteil: je gelernter Stufe +0,3 Stärke; auf Stufe 10 insgesamt +3 Stärke. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Zusätzlich je Stufe +2 Blockpunkte, maximal +20. Je Stufe 1 % der aktuellen gesamten Vitalität als zusätzliche Stärke, maximal 10 %. Ausrüstung und aktive Vitalitätsboni zählen mit. Vitalität wird nicht abgezogen, intern keine Rundung.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Iron Will |
| block | 2 |
| category | passive |
| charClass[0] | Knife |
| charClass[1] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +0,3 Stärke; auf Stufe 10 insgesamt +3 Stärke. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Zusätzlich je Stufe +2 Blockpunkte, maximal +20. Je Stufe 1 % der aktuellen gesamten Vitalität als zusätzliche Stärke, maximal 10 %. Ausrüstung und aktive Vitalitätsboni zählen mit. Vitalität wird nicht abgezogen, intern keine Rundung. |
| description_eng | Permanent attribute component: +0.3 Strength per learned level; at level 10, +3 Strength total. This component always applies independently of any triggered effects. Also grants +2 Block rating per level, up to +20. Each level grants 1% of current total Vitality as additional Strength, up to 10%. Includes equipment and active Vitality bonuses, without consuming Vitality or rounding internally. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 141 |
| skillName_de | Eiserner Wille |
| skillpoints | 1 |
| statBonusUnits.block | flat |
| statScaling.block.type | linear |
| statScaling.block.base | 2 |
| statScaling.block.perLevel | 2 |
| statScaling.str.type | linear |
| statScaling.str.base | 0,3 |
| statScaling.str.perLevel | 0,3 |
| attributeConversionBonus.sourceStat | vita |
| attributeConversionBonus.targetStat | str |
| attributeConversionBonus.amountPerPoint | 0,01 |
| attributeConversionBonus.usesCurrentAttributeValue | true |
| attributeConversionBonus.amountPerPointScaling.type | linear |
| attributeConversionBonus.amountPerPointScaling.base | 0,01 |
| attributeConversionBonus.amountPerPointScaling.perLevel | 0,01 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | block |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.perLevel | 2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | str |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,3 |
| levelProgression.rules[1].rule.perLevel | 0,3 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | attributeConversionBonus |
| levelProgression.rules[2].path[1] | amountPerPointScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 0,01 |
| levelProgression.rules[2].rule.perLevel | 0,01 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |
| str | 0,3 |

### 144: Rüstungstraining

Permanentes Rüstungstraining mit zehn Stufen für alle Klassen. Je gelernter Stufe +3 physische und +6 magische Verteidigung, maximal +30 P-Abwehr und +60 M-Abwehr. Keine Vitalitätsboni, Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Armor Training |
| category | passive |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knife |
| charClass[6] | Templar |
| charClass[7] | Herbalist |
| charClass[8] | Witcher |
| charClass[9] | Archer |
| charClass[10] | Hunter |
| charClass[11] | Druide |
| charClass[12] | Alchemist |
| charClass[13] | Summoner |
| charClass[14] | Soulseeker |
| charClass[15] | Bloodmage |
| charClass[16] | Luminet |
| charClass[17] | Lightmage |
| charClass[18] | Healer |
| charClass[19] | Priest |
| charClass[20] | Ritualist |
| charClass[21] | Shamane |
| charClass[22] | High Elves |
| charClass[23] | Villian |
| charClass[24] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanentes Rüstungstraining mit zehn Stufen für alle Klassen. Je gelernter Stufe +3 physische und +6 magische Verteidigung, maximal +30 P-Abwehr und +60 M-Abwehr. Keine Vitalitätsboni, Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent Armor Training with ten levels for all classes. Each learned level grants +3 physical and +6 magical defense, reaching +30 physical and +60 magical defense. No Vitality bonus, activation costs, cast time or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 144 |
| pdef | 3 |
| skillName_de | Rüstungstraining |
| skillpoints | 1 |
| mdef | 6 |
| resourceCosts | [] |
| statScaling.pdef.type | linear |
| statScaling.pdef.base | 3 |
| statScaling.pdef.perLevel | 3 |
| statScaling.mdef.type | linear |
| statScaling.mdef.base | 6 |
| statScaling.mdef.perLevel | 6 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | pdef |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 3 |
| levelProgression.rules[0].rule.perLevel | 3 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | mdef |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 6 |
| levelProgression.rules[1].rule.perLevel | 6 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| learningRequirements.minimumCharacterLevel | 2 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| classificationVersion | 1 |
| type | passive |

### 158: Provozieren

Aktivierbarer Toggle mit zwei lernbaren Stufen. Gladiator/Berserker können Stufe 1 lernen: Aggro aus verursachtem Schaden mal 2, laufende Kosten 25 Mana je Mana-Regenerationstick. Ritter/Templer können Stufe 2 lernen: Aggro aus verursachtem Schaden mal 3, laufende Kosten 45 Mana je Mana-Regenerationstick. Die bisherigen maximalen Wirkungen und laufenden Kosten bleiben erhalten; nur die Lernstufen wurden zusammengefasst. Fixe zusätzliche Aggro wird nicht mitmultipliziert. Keine feste Wirkungsdauer. Tickintervall vom Mana-Regenerationssystem; bei unzureichendem Mana vorläufig Abschalten. Umschalt-Cooldown 20 Sekunden, Castzeit 0 Sekunden.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Provoke |
| category | active |
| cd | 20 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| charClass[2] | Knife |
| charClass[3] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Aktivierbarer Toggle mit zwei lernbaren Stufen. Gladiator/Berserker können Stufe 1 lernen: Aggro aus verursachtem Schaden mal 2, laufende Kosten 25 Mana je Mana-Regenerationstick. Ritter/Templer können Stufe 2 lernen: Aggro aus verursachtem Schaden mal 3, laufende Kosten 45 Mana je Mana-Regenerationstick. Die bisherigen maximalen Wirkungen und laufenden Kosten bleiben erhalten; nur die Lernstufen wurden zusammengefasst. Fixe zusätzliche Aggro wird nicht mitmultipliziert. Keine feste Wirkungsdauer. Tickintervall vom Mana-Regenerationssystem; bei unzureichendem Mana vorläufig Abschalten. Umschalt-Cooldown 20 Sekunden, Castzeit 0 Sekunden. |
| description_eng | Toggle with two learnable levels. Gladiator/Berserker learn level 1: damage-generated threat times 2, draining 25 Mana per Mana regeneration tick. Knight/Templar learn level 2: damage-generated threat times 3, draining 45 Mana per regeneration tick. Previous maximum effects and ongoing costs are preserved; only learning levels are compressed. Flat additional threat is not multiplied. No fixed duration; deactivates on insufficient Mana provisionally. Toggle cooldown 20 seconds, cast time 0 seconds. |
| dmgType (Altformat) | selfbuff |
| maxSkillLv | 2 |
| maxUpgradeLv | 10 |
| nr | 158 |
| skillName_de | Provozieren |
| skillpoints | 1 |
| activation | toggle |
| effects[0].key | provoke-threat |
| effects[0].type | threatMultiplier |
| effects[0].target | self |
| effects[0].value | 2 |
| effects[0].unit | flat |
| effects[0].threatBasis | damageDealt |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 2 |
| effects[0].valueScaling.perLevel | 1 |
| effects[0].durationSeconds | 0 |
| effects[1].key | provoke-mana-drain |
| effects[1].type | resourceDrain |
| effects[1].target | self |
| effects[1].resource | mana |
| effects[1].value | 25 |
| effects[1].unit | flat |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | 25 |
| effects[1].valueScaling.perLevel | 20 |
| effects[1].intervalSource | manaRegenerationTick |
| effects[1].durationSeconds | 0 |
| learningLimits.defaultMaxLevel | 2 |
| learningLimits.classOverrides.Gladiator | 1 |
| learningLimits.classOverrides.Berserker | 1 |
| learningLimits.classOverrides.Knife | 2 |
| learningLimits.classOverrides.Templar | 2 |
| learningLimits.classOverrides.Ritter | 2 |
| learningLimits.classOverrides.Tempelritter | 2 |
| learningLimits.status | defined |
| toggleSettings.durationMode | whileEnabled |
| toggleSettings.onInsufficientResource | deactivate |
| castTimeSeconds | 0 |
| castTimeStatus | defined |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 1 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 25 |
| levelProgression.rules[1].rule.perLevel | 20 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| target | self |
| type | selfBuff |

### 160: Stolz des Kriegers

Selbstbuff. Gewährt je Skillstufe +1 Stärke und +1 Vitalität, bis zu jeweils +10 auf Stufe 10. Zusätzlich auf allen Stufen +35 P-Angriff und +35 M-Verteidigung. Dauer 300 Sekunden, Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden. Aktivierungskosten 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana auf Stufe 10 vor Vergünstigungen.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Warrior's Pride |
| category | active |
| cd | 60 |
| charClass[0] | Knife |
| charClass[1] | Templar |
| charClass[2] | Ritter |
| charClass[3] | Tempelritter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Selbstbuff. Gewährt je Skillstufe +1 Stärke und +1 Vitalität, bis zu jeweils +10 auf Stufe 10. Zusätzlich auf allen Stufen +35 P-Angriff und +35 M-Verteidigung. Dauer 300 Sekunden, Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden. Aktivierungskosten 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana auf Stufe 10 vor Vergünstigungen. |
| description_eng | Self-buff granting +1 Strength and +1 Vitality per level, reaching +10 each at level 10. Additionally grants 35 physical attack and 35 magical defense at every level. Duration 300 seconds, cooldown 60 seconds. Fixed cast time 0.1 seconds. Costs 50 Mana at level 1 plus 13 per additional level, before discounts. |
| dmgType (Altformat) | selfbuff |
| dur | 300 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 160 |
| skillName_de | Stolz des Kriegers |
| skillpoints | 1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statScaling.str.type | linear |
| statScaling.str.base | 1 |
| statScaling.str.perLevel | 1 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 1 |
| statScaling.vita.perLevel | 1 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 35 |
| statScaling.patk.perLevel | 0 |
| statScaling.mdef.type | linear |
| statScaling.mdef.base | 35 |
| statScaling.mdef.perLevel | 0 |
| castTimeSeconds | 0,1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 50 |
| levelProgression.rules[0].rule.rule.perLevel | 13 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | str |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | vita |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 1 |
| levelProgression.rules[2].rule.perLevel | 1 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | patk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 35 |
| levelProgression.rules[3].rule.perLevel | 0 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | mdef |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 35 |
| levelProgression.rules[4].rule.perLevel | 0 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| castTimeStatus | defined |
| timingModifiers.castTimeIsFixed | true |
| timingModifiers.affectedByAttackSpeed | false |
| timingModifiers.affectedByCastSpeed | false |
| manaPricing.category | selfbuff |
| manaPricing.basis | skillLevel |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| classificationVersion | 1 |
| target | self |
| type | selfBuff |
| str | 1 |
| vita | 1 |
| mdef | 35 |
| patk | 35 |

### 171: Aktive Deckung

Schneller Eigenbuff, der physische und magische Verteidigung auf Stufe 1 jeweils um 6 erhöht. Je weiterer Stufe kommen jeweils 3 hinzu, bis zu jeweils 33 auf Stufe 10. Gewährt auf allen Stufen zusätzlich 10 feste Blockpunkte, keine 10 Prozent. Castzeit fest 0,1 Sekunden. Bisherige Dauer 600 Sekunden und Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Active Cover |
| block | 10 |
| category | active |
| cd | 60 |
| charClass[0] | Knife |
| charClass[1] | Templar |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Schneller Eigenbuff, der physische und magische Verteidigung auf Stufe 1 jeweils um 6 erhöht. Je weiterer Stufe kommen jeweils 3 hinzu, bis zu jeweils 33 auf Stufe 10. Gewährt auf allen Stufen zusätzlich 10 feste Blockpunkte, keine 10 Prozent. Castzeit fest 0,1 Sekunden. Bisherige Dauer 600 Sekunden und Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Quick self buff granting 6 physical and 6 magical defense at level 1. Each additional level adds 3 to each, reaching 33 each at level 10. Grants an additional 10 flat Block rating at every level, not 10 percent. Fixed cast time 0.1 seconds. Existing duration is 600 seconds and cooldown is 60 seconds. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 167 at level 10, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 600 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| mdef | 6 |
| nr | 171 |
| pdef | 6 |
| skillName_de | Aktive Deckung |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statScaling.pdef.type | linear |
| statScaling.pdef.base | 6 |
| statScaling.pdef.perLevel | 3 |
| statScaling.mdef.type | linear |
| statScaling.mdef.base | 6 |
| statScaling.mdef.perLevel | 3 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 50 |
| levelProgression.rules[0].rule.rule.perLevel | 13 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | pdef |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 6 |
| levelProgression.rules[1].rule.perLevel | 3 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | mdef |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 6 |
| levelProgression.rules[2].rule.perLevel | 3 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| castTimeStatus | defined |
| timingModifiers.castTimeIsFixed | true |
| timingModifiers.affectedByAttackSpeed | false |
| timingModifiers.affectedByCastSpeed | false |
| manaPricing.category | selfbuff |
| manaPricing.basis | skillLevel |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| classificationVersion | 1 |
| target | self |
| type | selfBuff |

### 201: Waffentraining

Permanentes allgemeines Waffentraining mit 20 Stufen für alle Klassen. Je gelernter Stufe +1 physischer und +1 magischer Angriff, maximal jeweils +20 auf Stufe 20. Keine Angriffsgeschwindigkeit, Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Weapon Training |
| category | passive |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knife |
| charClass[6] | Templar |
| charClass[7] | Herbalist |
| charClass[8] | Witcher |
| charClass[9] | Archer |
| charClass[10] | Hunter |
| charClass[11] | Druide |
| charClass[12] | Alchemist |
| charClass[13] | Summoner |
| charClass[14] | Soulseeker |
| charClass[15] | Bloodmage |
| charClass[16] | Luminet |
| charClass[17] | Lightmage |
| charClass[18] | Healer |
| charClass[19] | Priest |
| charClass[20] | Ritualist |
| charClass[21] | Shamane |
| charClass[22] | High Elves |
| charClass[23] | Villian |
| charClass[24] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanentes allgemeines Waffentraining mit 20 Stufen für alle Klassen. Je gelernter Stufe +1 physischer und +1 magischer Angriff, maximal jeweils +20 auf Stufe 20. Keine Angriffsgeschwindigkeit, Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent general Weapon Training with 20 levels for all classes. Each learned level grants +1 physical and +1 magical attack, reaching +20 each at level 20. No attack speed, activation costs, cast time or cooldown. |
| dmgType (Altformat) | passive |
| matk | 1 |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 201 |
| patk | 1 |
| skillName_de | Waffentraining |
| skillpoints | 1 |
| statBonusUnits.patk | flat |
| statBonusUnits.matk | flat |
| statScaling.patk.type | linear |
| statScaling.patk.base | 1 |
| statScaling.patk.perLevel | 1 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 1 |
| statScaling.matk.perLevel | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | patk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | matk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| learningRequirements.minimumCharacterLevel | 2 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| classificationVersion | 1 |
| type | passive |

## Gemeinsame Blöcke

[Kreaturenskills](../shared-creature-skills.md) und [Trainingsskills](../shared-training-skills.md) werden einmal gemeinsam geprüft. Die normale Lerngrenze für Bindung und Zucht ist bereits 1. Taming ist für normale Klassen auf Stufe 1 begrenzt. Weitere bestätigte gemeinsame Regeln werden übernommen; unvollständige Beschreibungen bleiben sichtbar.

## Reihenfolge

Zuerst die noch unvollständigen Rittern-Skills durchgehen, gemeinsame geprüfte Definitionen übernehmen, anschließend permanente Passive auf den Ausrüstungsstand rechnen. Aktive Buffs, automatische Kampf-Procs und endgültige Schadensverrechnung folgen separat.

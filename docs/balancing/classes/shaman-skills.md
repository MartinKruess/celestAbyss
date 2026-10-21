# Schamane / Hochelfe: Werte und Skillprüfung

Einteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.

**32 unterschiedliche zugeordnete Skills: 18 aktive und 14 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie bei den bisher geprüften Klassen. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.

| Art | Anzahl | Skills |
| --- | ---: | --- |
| Übrige Passive einschließlich Procs | 11 | Erleuchtung, Adrenalin, Energie Umwandler, Erweiterung des Geistes, Ausdauertraining, Rüstungstraining, Waffentraining, Streitkolbentraining, Weisheit des Salamanders, Feurige Leidenschaft, Weisheit des Erdweisen |
| Aktive Skills (Angriff/Heilung/Unterstützung) | 11 | Beben, Erdbeben, Feuerlanze, Infernal Zyklon, Infernaler Kreuzschlag, Sprungschlag, Verbrennen, Felszähne, Felsensalve, Erdsäule, Stoßgebet |
| Kreaturen aktiv | 3 | Tamen, Beschwören, Zurückrufen |
| Kreaturen passiv | 3 | Bindung, Kontrolle, Zucht |
| Eigenbuffs | 1 | Macht der Wildnis |
| Gruppenbuffs | 3 | Macht des Felsens, Geschwindigkeit der Dox, Macht des Feuers |

## Basis und Ausrüstung

R1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.

### Basis ohne Ausrüstung

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 192 | 462 | 762 | 1.062 | 1.362 | 1.662 | 1.962 |
| Mana | 153 | 423 | 723 | 1.023 | 1.323 | 1.623 | 1.923 |
| P-Angriff | 10 | 26,2 | 44,2 | 62,2 | 80,2 | 98,2 | 116,2 |
| M-Angriff | 10 | 26,2 | 44,2 | 62,2 | 80,2 | 98,2 | 116,2 |
| P-Defense | 6 | 24 | 44 | 64 | 84 | 104 | 124 |
| M-Defense | 4 | 22 | 42 | 62 | 82 | 102 | 122 |

### Mit Rüstung und Streitkolben

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 602 | 872 | 1.462 | 2.112 | 2.762 | 3.387 | 4.037 |
| Mana | 538 | 808 | 1.358 | 1.973 | 2.598 | 3.223 | 3.873 |
| P-Angriff | 10 | 26,2 | 44,2 | 62,2 | 80,2 | 98,2 | 116,2 |
| M-Angriff | 10 | 26,2 | 44,2 | 62,2 | 80,2 | 98,2 | 116,2 |
| P-Defense | 73 | 91 | 166 | 280 | 396 | 517 | 676 |
| M-Defense | 66 | 84 | 154 | 260 | 359 | 485 | 628 |

Als Vergleichswaffe ist vorläufig ein Streitkolben angesetzt. Grundregeneration: 25 Mana und 12 HP pro Tick. Das Intervall wird später in Unreal geprüft. Bestehende gemeinsame Skillwerte werden übernommen; fehlende Werte werden nicht geschätzt.

## Skillübersicht

| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Erleuchtung | Passive | 20 | Wisdom +0,5<br>Intelligenz +0,5 | Intelligenz: 0,5 bis 10<br>Wisdom: 0,5 bis 10<br>manaRegen: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 6 | Adrenalin | Passive | 5 | Stärke +1 %<br>Intelligenz +1 % | Stärke: 1 % bis 5 %<br>Intelligenz: 1 % bis 5 % | Keine | 120 bis 102 | Entfällt | 20 bis 30 | Gemeinsame Definition |
| 15 | Beben | Skill / physisch | 20 | P-Angriff +81<br>statModifier, Ziel enemy, movementSpeed, -0,05 | P-Angriff: 81 bis 822<br>statModifier/movementSpeed: -5 bis -9 % | Mana-Kosten: 20 bis 210 | 39 bis 29 | 0.1 | movementSpeed: 1 bis 3 s | Gemeinsame Definition |
| 33 | Energie Umwandler | Passive | 10 | P-Angriff +3<br>M-Angriff +2 | P-Angriff: 3 bis 30<br>M-Angriff: 2 bis 20 | Keine | Entfällt | Entfällt | Permanent | Lernvoraussetzungen und Ausführung prüfen |
| 38 | Erdbeben | Skill / gemischt | 10 | P-Angriff +167<br>M-Angriff +35<br>statModifier, Ziel enemy, movementSpeed, -0,07<br>Fläche: 5 m Radius um Spieler | P-Angriff: 167 bis 644<br>M-Angriff: 35 bis 260<br>statModifier/movementSpeed: -7 bis -16 % | Mana-Kosten: 51 bis 231 | 55 | 0.1 | movementSpeed: 3 s | Gemeinsame Definition |
| 44 | Erweiterung des Geistes | Passive | 10 | Wisdom +1<br>Intelligenz +1<br>Dexterity +1 | Intelligenz: 1 bis 10<br>Wisdom: 1 bis 10<br>Dexterity: 1 bis 10 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 50 | Feuerlanze | Skill / magisch | 10 | M-Angriff +197 | M-Angriff: 197 bis 611 | Mana-Kosten: 49 bis 153 | 49 bis 40 | 0.2 | 0 (einmalig) | Lernvoraussetzungen und Ausführung prüfen |
| 62 | Infernal Zyklon | Skill / magisch | 5 | M-Angriff +368<br>periodicDamage, Ziel enemiesInArea, 72 | M-Angriff: 368 bis 936<br>periodicDamage/: 72 bis 186 | Mana-Kosten: 234 bis 746 | 119 bis 111 | 0.4 | periodicDamage: 6 bis 10 s | Gemeinsame Definition |
| 76 | Infernaler Kreuzschlag | Skill / gemischt | 15 | P-Angriff +166<br>M-Angriff +83<br>Animation 0,5 s (vorläufig) | P-Angriff: 166 bis 614<br>M-Angriff: 83 bis 307 | Mana-Kosten: 125 bis 461 | 47 bis 33 | 0 | Wirkung einmalig; Animation 0,5 s | Gemeinsame Definition |
| 106 | Sprungschlag | Skill / physisch | 10 | P-Angriff +391<br>Animation 0,5 s (vorläufig)<br>Fläche: 2 m Radius um Spieler | P-Angriff: 391 bis 1.606 | Mana-Kosten: 98 bis 404 | 45 bis 36 | 0 | Wirkung einmalig; Animation 0,5 s | Lernvoraussetzungen und Ausführung prüfen |
| 133 | Tamen | Skill | 3 / Schamane 1 | Versucht, eine Kreatur zu zähmen. Erfordert das passende spezielle Taming-Item für diese Kreatur. Die Grunderfolgschance beginnt bei 50 Prozent und steigt je weiterer Skillstufe um 15 Prozentpunkte auf 80 Prozent. Ein Kreaturen-Gegenwert beeinflusst die endgültige Erfolgschance; die Berechnung ist noch festzulegen. Die Mana-Kosten steigen von 100 um 25 je weiterer Stufe auf 150. Die Cast Time sinkt von 3 um 0,5 Sekunden je weiterer Stufe auf 2 Sekunden, der Cooldown von 60 um 10 Sekunden je weiterer Stufe auf 40 Sekunden. Der Versuch verursacht keinen Schaden und hat keine anschließende Effektdauer. Der Itemverbrauch ist noch festzulegen. Die Definition umfasst drei Stufen; die normale Lerngrenze anderer Klassen liegt bei Stufe 1. Der Abenteurer kann Stufe 3 lernen; eine zweite Spezialklasse ist noch nicht festgelegt. | Nicht vollständig gespeichert | Mana-Kosten: 100 bis 150 | 60 bis 40 | 3 bis 2 | 0 (keine anschließende Wirkung) | Gemeinsame Definition; Levelskalierung prüfen |
| 134 | Bindung | Passive | 3 / Schamane 1 | Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.<br>statModifier, Ziel companion, str, 10<br>statModifier, Ziel companion, vita, 10<br>statModifier, Ziel companion, int, 10<br>statModifier, Ziel companion, wis, 10 | statModifier/str: 10 bis 20<br>statModifier/vita: 10 bis 20<br>statModifier/int: 10 bis 20<br>statModifier/wis: 10 bis 20 | Keine | Entfällt | Entfällt | str: 0 s<br>vita: 0 s<br>int: 0 s<br>wis: 0 s | Gemeinsame Definition |
| 135 | Kontrolle | Passive | 2 / Schamane 1 | Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen. | Nicht vollständig gespeichert | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition; Levelskalierung prüfen |
| 136 | Beschwören | Skill | 1 | Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 1 | Nicht gespeichert | Gemeinsame Definition |
| 137 | Zurückrufen | Skill | 1 | Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 0 | Nicht gespeichert | Gemeinsame Definition |
| 138 | Zucht | Passive | 3 / Schamane 1 | Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.<br>experienceBonus, Ziel companion, 0,1 | experienceBonus/: 10 bis 30 % | Keine | Entfällt | Entfällt | experienceBonus: 0 s | Gemeinsame Definition |
| 139 | Ausdauertraining | Passive | 20 | Vita +1<br>Wisdom +1 | Vita: 1 bis 20<br>Wisdom: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 144 | Rüstungstraining | Passive | 10 | P-Defense +3<br>M-Defense +6 | P-Defense: 3 bis 30<br>M-Defense: 6 bis 60 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 149 | Macht der Wildnis | Selbstbuff | 3 | Stärke +3<br>P-Angriff +30 | Stärke: 3 bis 5<br>P-Angriff: 30 bis 60 | Mana-Kosten: 50 bis 76 | 60 | 0.1 | 1.200 bis 1.200 | Gemeinsame Definition |
| 192 | Macht des Felsens | Buff | 10 | P-Defense +18 | P-Defense: 18 bis 180<br>Vita: 0 bis 5 | Mana-Kosten: 54 bis 198 | 60 | 0.3 | 1800 | Lernvoraussetzungen und Ausführung prüfen |
| 201 | Waffentraining | Passive | 20 | P-Angriff +1<br>M-Angriff +1 | P-Angriff: 1 bis 20<br>M-Angriff: 1 bis 20 | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 202 | Verbrennen | Skill / magisch | 5 | Lässt einen Gegner für 10 Sekunden brennen: zehn magische Schadensticks, einer je Sekunde, erster Tick nach einer Sekunde, kein Initialtreffer. Fünf Skillstufen mit 16/39/61/84/106 Grundschaden je Tick, insgesamt 160/390/610/840/1060 Grundschaden. Kein zusätzlicher Charakterangriff je Tick. Mana-Kosten: 24/59/92/126/159, gerundet 15 Prozent des gesamten Grundschadens vor passiven Rabatten. Weisheit des Salamanders verstärkt Feuerschaden und reduziert Mana-Kosten. Castzeit 0,2 Sekunden, Cooldown 22 Sekunden. Die Maximalwerte entsprechen der vorherigen Stufe 10. Zielanzahl und Trefferbereich werden später geprüft.<br>periodicDamage, Ziel enemy, 16 | periodicDamage/: 16 bis 106 | Mana-Kosten: 24 bis 159 | 22 | 0.2 | periodicDamage: 10 s | Lernvoraussetzungen und Ausführung prüfen |
| 223 | Geschwindigkeit der Dox | Buff | 3 | Attack Speed +5<br>Movement Speed +1 | Attack Speed: 5 bis 10<br>Movement Speed: 1 bis 5 | Mana-Kosten: 63 bis 109 | 60 | 0.3 | 1800 | Lernvoraussetzungen und Ausführung prüfen |
| 224 | Macht des Feuers | Buff | 10 | Gruppenbuff: +18 körperlicher Skillschaden je Stufe, maximal +180. Zusätzlich magischer Skillschaden: 0 auf Stufe 1, +9 je weiterer Stufe bis +81 auf Stufe 10. Keine direkten P-/M-Angriffsboni. Der Schadensbonus gilt je passendem Skilltreffer mit Angriffsanteil, bei Mehrfachtreffern entsprechend je Treffer. Periodischer Schaden mit Charakterangriffsanteil profitiert ebenfalls. Keine Wirkung auf normale Auto-Attacks, Begleiterangriffe oder reine feste Rest-DoTs. Normale Attribute, Waffen und Self-Buffs skalieren weiterhin wie bisher. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten 63 +24 je weiterer Stufe, maximal 279.<br>damageBonus, Ziel self, 18<br>damageBonus, Ziel self, 0 | damageBonus/: 18 bis 180<br>damageBonus/: 0 bis 81 | Mana-Kosten: 63 bis 279 | 60 | 0.3 | damageBonus: 1.800 s<br>damageBonus: 1.800 s | Lernvoraussetzungen und Ausführung prüfen |
| 252 | Streitkolbentraining | Passive | 10 | Stärke +2<br>Intelligenz +1 | Stärke: 2 bis 7<br>Intelligenz: 1 bis 5 | Keine | Entfällt | Entfällt | Permanent | Lernvoraussetzungen und Ausführung prüfen |
| 254 | Weisheit des Salamanders | Passive | 5 | Permanente Passive mit fünf Stufen. Erhöht den physischen Schaden von Beben, Erdbeben, Infernalem Kreuzschlag, Sprungschlag, Felszähne, Felsensalve und beiden Phasen der Erdsäule um 0,3 Prozent je Stufe, maximal 1,5 Prozent. Erhöht den magischen Feuerschaden von Feuerlanze, Infernal Zyklon, Infernalem Kreuzschlag und Verbrennen um 0,6 Prozent je Stufe, maximal 3 Prozent; bestehende Feuer-DoTs profitieren ebenfalls. Senkt die Manakosten sämtlicher eigener Skills um 0,6 Prozent je Stufe, maximal 3 Prozent, einschließlich Erdangriffen, Buffs und Unterstützungsfähigkeiten. Andere Ressourcenpreise werden nicht reduziert. Schadensboni umfassen den passenden Charakterangriff; beim Kreuzschlag wird jede Komponente nur einmal verstärkt. Keine Wirkung auf Auto-Attack-Schaden, Cooldowns, Castzeiten oder den magischen Erdschaden von Erdbeben. Keine zusätzliche Brandchance, Aktivierungskosten oder begrenzte Dauer.<br>damageBonus, Ziel self, 0,003<br>damageBonus, Ziel self, 0,003<br>damageBonus, Ziel self, 0,003<br>damageBonus, Ziel self, 0,003<br>damageBonus, Ziel self, 0,006<br>damageBonus, Ziel self, 0,006<br>damageBonus, Ziel self, 0,006<br>damageBonus, Ziel self, 0,006<br>damageBonus, Ziel self, 0,003<br>damageBonus, Ziel self, 0,003<br>damageBonus, Ziel self, 0,003<br>resourceCostReduction, Ziel self, 0,006 | damageBonus/: 0,3 bis 1,5 %<br>damageBonus/: 0,3 bis 1,5 %<br>damageBonus/: 0,3 bis 1,5 %<br>damageBonus/: 0,3 bis 1,5 %<br>damageBonus/: 0,6 bis 3 %<br>damageBonus/: 0,6 bis 3 %<br>damageBonus/: 0,6 bis 3 %<br>damageBonus/: 0,6 bis 3 %<br>damageBonus/: 0,3 bis 1,5 %<br>damageBonus/: 0,3 bis 1,5 %<br>damageBonus/: 0,3 bis 1,5 %<br>resourceCostReduction/: 0,6 bis 3 % | Keine | Entfällt | Entfällt | damageBonus: 0 s<br>damageBonus: 0 s<br>damageBonus: 0 s<br>damageBonus: 0 s<br>damageBonus: 0 s<br>damageBonus: 0 s<br>damageBonus: 0 s<br>damageBonus: 0 s<br>damageBonus: 0 s<br>damageBonus: 0 s<br>damageBonus: 0 s<br>resourceCostReduction: 0 s | Lernvoraussetzungen und Ausführung prüfen |
| 255 | Felszähne | Skill / physisch | 20 | P-Angriff +73<br>Fläche: undefined m Radius um Spieler | P-Angriff: 73 bis 947 | Mana-Kosten: 18 bis 237 | 34 bis 15 | 0.1 | 0 (einmalig) | Lernvoraussetzungen und Ausführung prüfen |
| 256 | Felsensalve | Skill / physisch | 15 | P-Angriff +611<br>Animation 2,5 s (vorläufig)<br>Ein einzelnes Ziel | P-Angriff: 611 bis 2.711 | Mana-Kosten: 306 bis 3.389 | 65 bis 51 | 0.6 | Wirkung einmalig; Animation 2,5 s | Lernvoraussetzungen und Ausführung prüfen |
| 257 | Feurige Leidenschaft | Passive | 10 | Bei weniger als 50 Prozent deines maximalen Manas können erfolgreiche eigene Auto-Attacks oder direkte Angriffsskills mit 0,5 Prozent Wahrscheinlichkeit je gelernter Skillstufe Feurige Leidenschaft entfesseln (0,5 Prozent auf Stufe 1, +0,5 Prozentpunkte je weiterer Stufe, maximal 5 Prozent auf Stufe 10), sofern der Skill bereit ist. Jede Angriffsaktion prüft die Chance nur einmal: zwei Waffen, Mehrfachtreffer oder mehrere getroffene Ziele geben keine zusätzlichen Würfe; periodischer Schaden und Begleiter lösen nicht aus. Die Wirkung hält auf allen zehn Stufen 10 Sekunden. Währenddessen verursacht jede erfolgreiche eigene Auto-Attack-Aktion zusätzlich 2 magischen Feuerschaden je Skillstufe, maximal 20 auf Stufe 10, und stellt einmalig 5 Mana wieder her. Kein Zusatz des M-Angriffs zu diesem festen Bonusschaden. Angriffsskills können die Passive auslösen, erhalten aber weder deren Zusatzschaden noch Mana-Rückgewinnung. Keine Aktivierungskosten. Interner Cooldown beginnt mit Auslösung: 90 Sekunden, −1 je weiterer Stufe bis 81 auf Stufe 10. Die Wirkung stapelt nicht und wird nicht durch neue Auslösungen verlängert. Ein Anstieg auf mindestens 50 Prozent Mana beendet eine bereits laufende Wirkung nicht vorzeitig.<br>damageBonus, Ziel self, 2<br>resourceGain, Ziel self, 5 | damageBonus/: 2 bis 20 | Keine | 90 bis 81 | Entfällt | damageBonus: 10 s<br>resourceGain: 10 s | Lernvoraussetzungen und Ausführung prüfen |
| 258 | Erdsäule | Skill / physisch | 10 | P-Angriff +231<br>control, Ziel enemiesInArea<br>Fläche: undefined m Radius um Spieler | P-Angriff: 231 bis 1.212 | Mana-Kosten: 58 bis 371 | 38 bis 29 | 0.2 | stun: 0,5 s | Lernvoraussetzungen und Ausführung prüfen |
| 259 | Weisheit des Erdweisen | Passive | 5 | Stärke +2<br>Vita +1,6<br>Intelligenz +2<br>statModifier, Ziel self, manaRegen, 0,006 | Stärke: 2 bis 10<br>Vita: 1,6 bis 8<br>Intelligenz: 2 bis 10<br>statModifier/manaRegen: 0,6 bis 3 % | Keine | Entfällt | Entfällt | manaRegen: 0 s | Lernvoraussetzungen und Ausführung prüfen |
| 263 | Stoßgebet | Skill / magisch | 3 | M-Angriff +143<br>heal, Ziel self, 240<br>heal, Ziel alliesInArea, 240<br>Ein einzelnes Ziel | M-Angriff: 143 bis 295 | Mana-Kosten: 36 bis 74 | 54 bis 44 | 0.1 | heal: 0 s<br>heal: 0 s | Lernvoraussetzungen und Ausführung prüfen |

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

### 6: Adrenalin

Eigene Angriffe können Adrenalin mit 5 Prozent Wahrscheinlichkeit auslösen, wenn der Skill bereit ist. Es erhöht Stärke und Intelligenz um 1 Prozent je Skillstufe, bis zu 5 Prozent. Die Dauer steigt von 20 auf 30 Sekunden und der Cooldown sinkt von 120 auf 102 Sekunden.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Adrenaline |
| category | passive |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| charClass[2] | Druide |
| charClass[3] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigene Angriffe können Adrenalin mit 5 Prozent Wahrscheinlichkeit auslösen, wenn der Skill bereit ist. Es erhöht Stärke und Intelligenz um 1 Prozent je Skillstufe, bis zu 5 Prozent. Die Dauer steigt von 20 auf 30 Sekunden und der Cooldown sinkt von 120 auf 102 Sekunden. |
| description_eng | Your own attacks have a 5 percent chance to trigger Adrenaline when ready. It increases Strength and Intelligence by 1 percent per skill level, up to 5 percent. Duration increases from 20 to 30 seconds and cooldown decreases from 120 to 102 seconds. |
| dmgType (Altformat) | passive |
| int | 0,01 |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 6 |
| skillName_de | Adrenalin |
| skillpoints | 1 |
| statBonusUnits.str | fraction |
| statBonusUnits.int | fraction |
| str | 0,01 |
| activation | automatic |
| cd | 120 |
| dur | 20 |
| statScaling.str.type | linear |
| statScaling.str.base | 0,01 |
| statScaling.str.perLevel | 0,01 |
| statScaling.int.type | linear |
| statScaling.int.base | 0,01 |
| statScaling.int.perLevel | 0,01 |
| triggerCondition.type | ownAttack |
| triggerCondition.chancePerCheck | 0,05 |
| triggerCondition.oncePerAttackAction | true |
| triggerCondition.excludeCompanionAttacks | true |
| triggerCondition.requiresCooldownReady | true |
| triggerConditionStatus | defined |
| cooldownScaling.type | linear |
| cooldownScaling.base | 120 |
| cooldownScaling.perLevel | -4,5 |
| durationScaling.type | linear |
| durationScaling.base | 20 |
| durationScaling.perLevel | 2,5 |
| resourceCosts | [] |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0,01 |
| levelProgression.rules[0].rule.perLevel | 0,01 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | int |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,01 |
| levelProgression.rules[1].rule.perLevel | 0,01 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | cooldownScaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0,1 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 120 |
| levelProgression.rules[2].rule.rule.perLevel | -4,5 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | durationScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 20 |
| levelProgression.rules[3].rule.perLevel | 2,5 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 15: Beben

Schmettert deine Waffe auf den Boden und erzeugt ein Beben, das getroffene Gegner schädigt und verlangsamt. Der physische Grundangriffswert steigt von 81 um 39 je weiterer Skillstufe auf 822. Die Mana-Kosten 20 auf Stufe 1, +10 je weiterer Stufe, maximal 210 auf Stufe 20. Der Cooldown sinkt von 39 auf 29 Sekunden. Die Verlangsamung beginnt bei 5 Prozent für 1 Sekunde. Auf Skilllevel 5, 10, 15 und 20 steigt sie jeweils um 1 Prozentpunkt und ihre Dauer um 0,5 Sekunden, bis zu 9 Prozent für 3 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). Castzeit 0,1 Sekunden.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Tremor |
| category | active |
| cd | 39 |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Schmettert deine Waffe auf den Boden und erzeugt ein Beben, das getroffene Gegner schädigt und verlangsamt. Der physische Grundangriffswert steigt von 81 um 39 je weiterer Skillstufe auf 822. Die Mana-Kosten 20 auf Stufe 1, +10 je weiterer Stufe, maximal 210 auf Stufe 20. Der Cooldown sinkt von 39 auf 29 Sekunden. Die Verlangsamung beginnt bei 5 Prozent für 1 Sekunde. Auf Skilllevel 5, 10, 15 und 20 steigt sie jeweils um 1 Prozentpunkt und ihre Dauer um 0,5 Sekunden, bis zu 9 Prozent für 3 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). Castzeit 0,1 Sekunden. |
| description_eng | Slams your weapon into the ground, causing a tremor that damages and slows affected enemies. Physical base attack increases from 81 by 39 per additional skill level to 822. Mana cost 20 at level 1, maximum 210 at level 20. Cooldown decreases from 39 to 29 seconds. The slow starts at 5 percent for 1 second. At skill levels 5, 10, 15 and 20, it increases by 1 percentage point and lasts 0.5 seconds longer, reaching 9 percent for 3 seconds. Cast time 0.1 seconds. |
| dmgType (Altformat) | physical |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 15 |
| patk | 81 |
| skillName_de | Beben |
| skillpoints | 1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 39 |
| cooldownScaling.perLevel | -0,526 |
| effects[0].key | tremorSlow |
| effects[0].type | statModifier |
| effects[0].target | enemy |
| effects[0].stat | movementSpeed |
| effects[0].value | -0,05 |
| effects[0].unit | fraction |
| effects[0].reference | targetStat |
| effects[0].durationStatus | defined |
| effects[0].progressionStatus | defined |
| effects[0].durationSeconds | 1 |
| effects[0].valueScaling.type | table |
| effects[0].valueScaling.values[0] | -0,05 |
| effects[0].valueScaling.values[1] | -0,05 |
| effects[0].valueScaling.values[2] | -0,05 |
| effects[0].valueScaling.values[3] | -0,05 |
| effects[0].valueScaling.values[4] | -0,06 |
| effects[0].valueScaling.values[5] | -0,06 |
| effects[0].valueScaling.values[6] | -0,06 |
| effects[0].valueScaling.values[7] | -0,06 |
| effects[0].valueScaling.values[8] | -0,06 |
| effects[0].valueScaling.values[9] | -0,07 |
| effects[0].valueScaling.values[10] | -0,07 |
| effects[0].valueScaling.values[11] | -0,07 |
| effects[0].valueScaling.values[12] | -0,07 |
| effects[0].valueScaling.values[13] | -0,07 |
| effects[0].valueScaling.values[14] | -0,08 |
| effects[0].valueScaling.values[15] | -0,08 |
| effects[0].valueScaling.values[16] | -0,08 |
| effects[0].valueScaling.values[17] | -0,08 |
| effects[0].valueScaling.values[18] | -0,08 |
| effects[0].valueScaling.values[19] | -0,09 |
| effects[0].durationScaling.type | table |
| effects[0].durationScaling.values[0] | 1 |
| effects[0].durationScaling.values[1] | 1 |
| effects[0].durationScaling.values[2] | 1 |
| effects[0].durationScaling.values[3] | 1 |
| effects[0].durationScaling.values[4] | 1,5 |
| effects[0].durationScaling.values[5] | 1,5 |
| effects[0].durationScaling.values[6] | 1,5 |
| effects[0].durationScaling.values[7] | 1,5 |
| effects[0].durationScaling.values[8] | 1,5 |
| effects[0].durationScaling.values[9] | 2 |
| effects[0].durationScaling.values[10] | 2 |
| effects[0].durationScaling.values[11] | 2 |
| effects[0].durationScaling.values[12] | 2 |
| effects[0].durationScaling.values[13] | 2 |
| effects[0].durationScaling.values[14] | 2,5 |
| effects[0].durationScaling.values[15] | 2,5 |
| effects[0].durationScaling.values[16] | 2,5 |
| effects[0].durationScaling.values[17] | 2,5 |
| effects[0].durationScaling.values[18] | 2,5 |
| effects[0].durationScaling.values[19] | 3 |
| effectsVersion | 1 |
| mana (Aktivierungskosten, kein Bonus) | 20 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 20 |
| resourceCosts[0].scaling.perLevel | 10 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 81 |
| statScaling.patk.perLevel | 39 |
| castTimeSeconds | 0,1 |
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
| levelProgression.rules[0].rule.rule.base | 39 |
| levelProgression.rules[0].rule.rule.perLevel | -0,526 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | periodicSteps |
| levelProgression.rules[1].rule.base | -0,05 |
| levelProgression.rules[1].rule.steps[0] | 0 |
| levelProgression.rules[1].rule.steps[1] | 0 |
| levelProgression.rules[1].rule.steps[2] | 0 |
| levelProgression.rules[1].rule.steps[3] | -0,01 |
| levelProgression.rules[1].rule.steps[4] | 0 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | durationScaling |
| levelProgression.rules[2].rule.kind | periodicSteps |
| levelProgression.rules[2].rule.base | 1 |
| levelProgression.rules[2].rule.steps[0] | 0 |
| levelProgression.rules[2].rule.steps[1] | 0 |
| levelProgression.rules[2].rule.steps[2] | 0 |
| levelProgression.rules[2].rule.steps[3] | 0,5 |
| levelProgression.rules[2].rule.steps[4] | 0 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.rules[3].path[0] | resourceCosts |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | scaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0 |
| levelProgression.rules[3].rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.base | 20 |
| levelProgression.rules[3].rule.rule.perLevel | 10 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | patk |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 81 |
| levelProgression.rules[4].rule.perLevel | 39 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 33: Energie Umwandler

Erhöht dauerhaft deinen physischen Angriff um 3 und deinen magischen Angriff um 2 je gelerntem Skilllevel, bis zu 30 physischem und 20 magischem Angriff auf Stufe 10. Permanenter passiver Skill ohne Trigger, Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Energy Converter |
| category | passive |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erhöht dauerhaft deinen physischen Angriff um 3 und deinen magischen Angriff um 2 je gelerntem Skilllevel, bis zu 30 physischem und 20 magischem Angriff auf Stufe 10. Permanenter passiver Skill ohne Trigger, Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer. |
| description_eng | Permanently increases physical attack by 3 and magical attack by 2 per learned skill level, reaching 30 physical and 20 magical attack at level 10. Permanent passive skill with no trigger, activation costs, cast time, cooldown or limited duration. |
| dmgType (Altformat) | passive |
| matk | 2 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 33 |
| patk | 3 |
| skillName_de | Energie Umwandler |
| skillpoints | 1 |
| resourceCosts | [] |
| statScaling.patk.type | linear |
| statScaling.patk.base | 3 |
| statScaling.patk.perLevel | 3 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 2 |
| statScaling.matk.perLevel | 2 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | patk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 3 |
| levelProgression.rules[0].rule.perLevel | 3 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | matk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 2 |
| levelProgression.rules[1].rule.perLevel | 2 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 38: Erdbeben

Erzeugt ein Erdbeben in einem kreisförmigen Bereich mit 5 Metern Radius um dich und trifft Gegner physisch und magisch. Verlangsamt getroffene Gegner für 3 Sekunden: auf Level 1 um 7 Prozent, je weiterer Stufe um 1 Prozentpunkt mehr, bis zu 16 Prozent auf Level 10. Der physische Grundangriffswert steigt von 167 um 53 je weiterer Stufe auf 644, der magische von 35 um 25 auf 260. Die Mana-Kosten 51 auf Stufe 1, +20 je weiterer Stufe, maximal 231 auf Stufe 10. Die Cast Time beträgt 0,1 Sekunden, der Cooldown bleibt zunächst bei 55 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Earthquake |
| category | active |
| cd | 55 |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| charClass[2] | Butcher |
| charClass[3] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erzeugt ein Erdbeben in einem kreisförmigen Bereich mit 5 Metern Radius um dich und trifft Gegner physisch und magisch. Verlangsamt getroffene Gegner für 3 Sekunden: auf Level 1 um 7 Prozent, je weiterer Stufe um 1 Prozentpunkt mehr, bis zu 16 Prozent auf Level 10. Der physische Grundangriffswert steigt von 167 um 53 je weiterer Stufe auf 644, der magische von 35 um 25 auf 260. Die Mana-Kosten 51 auf Stufe 1, +20 je weiterer Stufe, maximal 231 auf Stufe 10. Die Cast Time beträgt 0,1 Sekunden, der Cooldown bleibt zunächst bei 55 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Causes an earthquake in a circular 5 meter radius around you, dealing physical and magical damage to enemies. Slows affected enemies for 3 seconds: 7 percent at level 1, increasing by 1 percentage point per additional level to 16 percent at level 10. Physical base attack increases from 167 by 53 per additional level to 644; magical base attack increases from 35 by 25 to 260. Mana cost 51 at level 1, maximum 231 at level 10. Cast time is 0.1 seconds and cooldown remains provisionally 55 seconds. |
| dmgType (Altformat) | physical |
| dur | 3 |
| matk | 35 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 38 |
| patk | 167 |
| skillName_de | Erdbeben |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 51 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 51 |
| resourceCosts[0].scaling.perLevel | 20 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 167 |
| statScaling.patk.perLevel | 53 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 35 |
| statScaling.matk.perLevel | 25 |
| attackArea.shape | circle |
| attackArea.center | caster |
| attackArea.radiusMeters | 5 |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | atImpact |
| attackArea.timingStatus | pending |
| effects[0].key | earthquakeSlow |
| effects[0].type | statModifier |
| effects[0].target | enemy |
| effects[0].stat | movementSpeed |
| effects[0].value | -0,07 |
| effects[0].unit | fraction |
| effects[0].reference | targetStat |
| effects[0].durationSeconds | 3 |
| effects[0].durationStatus | defined |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | -0,07 |
| effects[0].valueScaling.perLevel | -0,01 |
| effects[0].progressionStatus | defined |
| effectsVersion | 1 |
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
| levelProgression.rules[0].rule.rule.base | 51 |
| levelProgression.rules[0].rule.rule.perLevel | 20 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 167 |
| levelProgression.rules[1].rule.perLevel | 53 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 35 |
| levelProgression.rules[2].rule.perLevel | 25 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | valueScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | -0,07 |
| levelProgression.rules[3].rule.perLevel | -0,01 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | mixed |
| type | skill |

### 44: Erweiterung des Geistes

Permanenter passiver Bonus mit zehn Stufen. Intelligenz, Willenskraft und Geschick erhalten jeweils folgende Boni auf Stufe 1 bis 10: 1 / 1,5 / 2 / 2,5 / 3 / 3,5 / 4 / 4,5 / 5 / 10. Alle bisherigen Attributboni sind auf jeder Stufe halbiert. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Expansion of the Spirit |
| category | passive |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| charClass[2] | Ritualist |
| charClass[3] | Bloodmage |
| charClass[4] | Druide |
| charClass[5] | Alchemist |
| charClass[6] | Healer |
| charClass[7] | Priest |
| charClass[8] | Shamane |
| charClass[9] | High Elves |
| charClass[10] | Luminet |
| charClass[11] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanenter passiver Bonus mit zehn Stufen. Intelligenz, Willenskraft und Geschick erhalten jeweils folgende Boni auf Stufe 1 bis 10: 1 / 1,5 / 2 / 2,5 / 3 / 3,5 / 4 / 4,5 / 5 / 10. Alle bisherigen Attributboni sind auf jeder Stufe halbiert. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent passive with ten levels. Intelligence, Wisdom and Dexterity each receive the following bonuses at levels 1 through 10: 1 / 1.5 / 2 / 2.5 / 3 / 3.5 / 4 / 4.5 / 5 / 10. All previous attribute bonuses are halved at every level. No activation costs, cast time or cooldown. |
| dmgType (Altformat) | passive |
| int | 1 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 44 |
| skillName_de | Erweiterung des Geistes |
| skillpoints | 1 |
| wis | 1 |
| resourceCosts | [] |
| statScaling.int.type | table |
| statScaling.int.values[0] | 1 |
| statScaling.int.values[1] | 1,5 |
| statScaling.int.values[2] | 2 |
| statScaling.int.values[3] | 2,5 |
| statScaling.int.values[4] | 3 |
| statScaling.int.values[5] | 3,5 |
| statScaling.int.values[6] | 4 |
| statScaling.int.values[7] | 4,5 |
| statScaling.int.values[8] | 5 |
| statScaling.int.values[9] | 10 |
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
| statScaling.dex.type | table |
| statScaling.dex.values[0] | 1 |
| statScaling.dex.values[1] | 1,5 |
| statScaling.dex.values[2] | 2 |
| statScaling.dex.values[3] | 2,5 |
| statScaling.dex.values[4] | 3 |
| statScaling.dex.values[5] | 3,5 |
| statScaling.dex.values[6] | 4 |
| statScaling.dex.values[7] | 4,5 |
| statScaling.dex.values[8] | 5 |
| statScaling.dex.values[9] | 10 |
| dex | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | int |
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
| levelProgression.rules[1].path[1] | wis |
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
| levelProgression.rules[2].path[1] | dex |
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

### 50: Feuerlanze

Erschafft eine Feuerlanze, die einen Gegner einmalig durchbohrt. Der magische Grundschaden steigt von 197 um 46 je weiterer Stufe auf 611 auf Stufe 10.  Der Cooldown sinkt von 49 um 1 Sekunde je weiterer Stufe auf 40 Sekunden. Castzeit 0,2 Sekunden. Keine anhaltende Schadenswirkung; der Rüstungseffekt der Eislanze wird nicht übernommen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). Mana-Kosten je Stufe: 49/61/72/84/95/107/118/130/141/153. Exakt gerundete 25 Prozent des gesamten Skill-Grundschadens ohne Charakterangriff; garantierte Mehrfachtreffer und garantierter kritischer Treffer sind enthalten, Heilung erhält keinen zusätzlichen Kostenaufschlag.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Firelance |
| category | active |
| cd | 49 |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erschafft eine Feuerlanze, die einen Gegner einmalig durchbohrt. Der magische Grundschaden steigt von 197 um 46 je weiterer Stufe auf 611 auf Stufe 10.  Der Cooldown sinkt von 49 um 1 Sekunde je weiterer Stufe auf 40 Sekunden. Castzeit 0,2 Sekunden. Keine anhaltende Schadenswirkung; der Rüstungseffekt der Eislanze wird nicht übernommen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). Mana-Kosten je Stufe: 49/61/72/84/95/107/118/130/141/153. Exakt gerundete 25 Prozent des gesamten Skill-Grundschadens ohne Charakterangriff; garantierte Mehrfachtreffer und garantierter kritischer Treffer sind enthalten, Heilung erhält keinen zusätzlichen Kostenaufschlag. |
| description_eng | Creates a lance of fire that pierces an enemy once. Base magical damage increases from 197 by 46 per additional level to 611 at level 10.  Cooldown decreases from 49 by 1 second per additional level to 40 seconds. Cast time is 0.2 seconds. No ongoing damage; the Ice Lance armor effect is not copied. Mana costs by level: 49/61/72/84/95/107/118/130/141/153. Exactly rounded 25 percent of total skill base damage excluding character attack; guaranteed multiple hits and guaranteed critical damage are included, with no additional healing surcharge. |
| dmgType (Altformat) | spell |
| matk | 197 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 50 |
| skillName_de | Feuerlanze |
| skillpoints | 1 |
| castTimeSeconds | 0,2 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 49 |
| cooldownScaling.perLevel | -1 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 49 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 49 |
| resourceCosts[0].scaling.values[0] | 49 |
| resourceCosts[0].scaling.values[1] | 61 |
| resourceCosts[0].scaling.values[2] | 72 |
| resourceCosts[0].scaling.values[3] | 84 |
| resourceCosts[0].scaling.values[4] | 95 |
| resourceCosts[0].scaling.values[5] | 107 |
| resourceCosts[0].scaling.values[6] | 118 |
| resourceCosts[0].scaling.values[7] | 130 |
| resourceCosts[0].scaling.values[8] | 141 |
| resourceCosts[0].scaling.values[9] | 153 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 197 |
| statScaling.matk.perLevel | 46 |
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
| levelProgression.rules[0].rule.rule.base | 49 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | outputCost |
| levelProgression.rules[1].rule.factor | 0,25 |
| levelProgression.rules[1].rule.basis | damage |
| levelProgression.rules[1].rule.minimum | 0 |
| levelProgression.rules[1].source | verifiedManaPricing |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 197 |
| levelProgression.rules[2].rule.perLevel | 46 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 62: Infernal Zyklon

Erzeugt einen Zyklon aus Höllenfeuer im betroffenen Gebiet. Der bisherige magische Grundschadenswert steigt von 368 um 142 je weiterer Stufe auf 936 auf Stufe 5. Mana-Kosten 234 auf Stufe 1, Stufenwerte 234, 325, 467, 570, 746, maximal 746 auf Stufe 5. Die Dauer steigt von 6 um 1 Sekunde je weiterer Stufe auf 10 Sekunden. Der Cooldown sinkt von 119 um 2 Sekunden je weiterer Stufe auf 111 Sekunden. Castzeit 0,4 Sekunden. Der genannte Grundschaden trifft einmal beim Auslösen. Danach verursacht der Zyklon alle 2 Sekunden zusätzlichen magischen Schaden: 72 auf Stufe 1, je weiterer Stufe +28,5 bis 186 auf Stufe 5, zuzüglich des aktuellen Charakter-M-Angriffs bei jedem Tick. Der erste zusätzliche Tick erfolgt nach 2 Sekunden. Bei voller Laufzeit trifft der DoT auf Stufe 1 dreimal (2/4/6 Sekunden) und auf Stufe 5 fünfmal (2/4/6/8/10 Sekunden). Trefferbereich und Verhalten bei Bewegung des Ziels bleiben offen. Aktuelle Mana-Gruppe: finisher (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Infernal Cyclone |
| category | active |
| cd | 119 |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erzeugt einen Zyklon aus Höllenfeuer im betroffenen Gebiet. Der bisherige magische Grundschadenswert steigt von 368 um 142 je weiterer Stufe auf 936 auf Stufe 5. Mana-Kosten 234 auf Stufe 1, Stufenwerte 234, 325, 467, 570, 746, maximal 746 auf Stufe 5. Die Dauer steigt von 6 um 1 Sekunde je weiterer Stufe auf 10 Sekunden. Der Cooldown sinkt von 119 um 2 Sekunden je weiterer Stufe auf 111 Sekunden. Castzeit 0,4 Sekunden. Der genannte Grundschaden trifft einmal beim Auslösen. Danach verursacht der Zyklon alle 2 Sekunden zusätzlichen magischen Schaden: 72 auf Stufe 1, je weiterer Stufe +28,5 bis 186 auf Stufe 5, zuzüglich des aktuellen Charakter-M-Angriffs bei jedem Tick. Der erste zusätzliche Tick erfolgt nach 2 Sekunden. Bei voller Laufzeit trifft der DoT auf Stufe 1 dreimal (2/4/6 Sekunden) und auf Stufe 5 fünfmal (2/4/6/8/10 Sekunden). Trefferbereich und Verhalten bei Bewegung des Ziels bleiben offen. Aktuelle Mana-Gruppe: finisher (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Creates a cyclone of hellfire in the affected area. Existing magical base damage increases from 368 by 142 per additional level to 936 at level 5. Mana cost 234 at level 1, maximum 746 at level 5. Duration increases from 6 by 1 second per additional level to 10 seconds. Cooldown decreases from 119 by 2 seconds per additional level to 111 seconds. Cast time is 0.4 seconds. The stated base damage hits once on activation. Additional magical damage ticks every 2 seconds: 72 at level 1 plus 28.5 per additional level to 186 at level 5, adding current caster magical attack to each tick. First tick after 2 seconds. Full duration gives three ticks at level 1 (2/4/6 seconds) and five at level 5 (2/4/6/8/10 seconds). Hit area and behavior when the target moves remain pending. |
| dmgType (Altformat) | spell |
| dur | 6 |
| matk | 368 |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 62 |
| skillName_de | Infernal Zyklon |
| skillpoints | 1 |
| durationScaling.type | linear |
| durationScaling.base | 6 |
| durationScaling.perLevel | 1 |
| castTimeSeconds | 0,4 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 119 |
| cooldownScaling.perLevel | -2 |
| mana (Aktivierungskosten, kein Bonus) | 234 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.values[0] | 234 |
| resourceCosts[0].scaling.values[1] | 325 |
| resourceCosts[0].scaling.values[2] | 467 |
| resourceCosts[0].scaling.values[3] | 570 |
| resourceCosts[0].scaling.values[4] | 746 |
| resourceCosts[0].scaling.base | 234 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 368 |
| statScaling.matk.perLevel | 142 |
| effects[0].key | infernal-cyclone-periodic |
| effects[0].type | periodicDamage |
| effects[0].target | enemiesInArea |
| effects[0].value | 72 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 72 |
| effects[0].valueScaling.perLevel | 28,5 |
| effects[0].durationSeconds | 6 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 6 |
| effects[0].durationScaling.perLevel | 1 |
| effects[0].firstTickAfterSeconds | 2 |
| effects[0].intervalSeconds | 2 |
| effects[0].addsCasterMagicalAttack | true |
| effects[0].damageTypes[0] | magical |
| effects[0].periodicDamageKind | areaAttack |
| manaPricing.category | finisher |
| manaPricing.factor | 0,4 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 6 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | cooldownScaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0,1 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 119 |
| levelProgression.rules[1].rule.rule.perLevel | -2 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | outputCost |
| levelProgression.rules[2].rule.factor | 0,4 |
| levelProgression.rules[2].rule.basis | damage |
| levelProgression.rules[2].rule.minimum | 0 |
| levelProgression.rules[2].source | verifiedManaPricing |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | matk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 368 |
| levelProgression.rules[3].rule.perLevel | 142 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | valueScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 72 |
| levelProgression.rules[4].rule.perLevel | 28,5 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | effects |
| levelProgression.rules[5].path[1] | 0 |
| levelProgression.rules[5].path[2] | durationScaling |
| levelProgression.rules[5].rule.kind | linear |
| levelProgression.rules[5].rule.base | 6 |
| levelProgression.rules[5].rule.perLevel | 1 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 76: Infernaler Kreuzschlag

Entzündet Flammen um deine beiden Einhand-Streitkolben und führt zwei aufeinanderfolgende Schläge aus. Jeder Treffer verursacht physischen Grundschaden von 166, +32 je weiterer Stufe bis 614 auf Stufe 15, sowie magischen Feuer-Grundschaden in halber Höhe: 83, +16 je weiterer Stufe bis 307. Je Treffer kommen einmal der volle aktuelle P-Angriff und einmal der volle aktuelle M-Angriff hinzu. Zwei Treffer mit jeweils voller Wirkung, keine zusätzliche Schadensverdopplung und kein DoT. Keine Castzeit. Cooldown 47 Sekunden, −1 je weiterer Stufe bis 33. Vorläufige Animation 0,5 Sekunden; genaue Trefferzeitpunkte und Trefferbereich bleiben offen. Mana-Kosten 125 auf Stufe 1, +24 je weiterer Stufe bis 461 auf Stufe 15. Die Kosten entsprechen gerundet 25 Prozent des gesamten Skill-Grundschadens beider Treffer, ohne Charakterangriff und ohne zusätzliche Gegnerzahl.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Infernal Cross Strike |
| category | active |
| cd | 47 |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Entzündet Flammen um deine beiden Einhand-Streitkolben und führt zwei aufeinanderfolgende Schläge aus. Jeder Treffer verursacht physischen Grundschaden von 166, +32 je weiterer Stufe bis 614 auf Stufe 15, sowie magischen Feuer-Grundschaden in halber Höhe: 83, +16 je weiterer Stufe bis 307. Je Treffer kommen einmal der volle aktuelle P-Angriff und einmal der volle aktuelle M-Angriff hinzu. Zwei Treffer mit jeweils voller Wirkung, keine zusätzliche Schadensverdopplung und kein DoT. Keine Castzeit. Cooldown 47 Sekunden, −1 je weiterer Stufe bis 33. Vorläufige Animation 0,5 Sekunden; genaue Trefferzeitpunkte und Trefferbereich bleiben offen. Mana-Kosten 125 auf Stufe 1, +24 je weiterer Stufe bis 461 auf Stufe 15. Die Kosten entsprechen gerundet 25 Prozent des gesamten Skill-Grundschadens beider Treffer, ohne Charakterangriff und ohne zusätzliche Gegnerzahl. |
| description_eng | Ignites flames around your two one-handed maces and performs two consecutive strikes. Each hit deals physical base damage 166 plus 32 per additional level to 614 at level 15, plus magical fire base damage equal to half: 83 plus 16 per additional level to 307. Each hit adds full current physical attack and full current magical attack once. Both hits deal full damage, without an extra doubling or damage over time. No cast time. Cooldown 47 seconds minus 1 per additional level to 33. Provisional animation 0.5 seconds; exact hit timing and hit area remain undefined. Mana 125 at level 1 plus 24 per additional level to 461, rounded from 25 percent of both hits total skill base damage, excluding character attack and target count. |
| dmgType (Altformat) | physical |
| maxSkillLv | 15 |
| maxUpgradeLv | 10 |
| nr | 76 |
| patk | 166 |
| skillName_de | Infernaler Kreuzschlag |
| skillpoints | 1 |
| animationDurationSeconds | 0,5 |
| animationTimingStatus | provisional |
| attackExecution.hitCount | 2 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | pending |
| attackExecution.magicalDamageElement | fire |
| castTimeSeconds | 0 |
| mana (Aktivierungskosten, kein Bonus) | 125 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 125 |
| resourceCosts[0].scaling.perLevel | 24 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 166 |
| statScaling.patk.perLevel | 32 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 83 |
| statScaling.matk.perLevel | 16 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 47 |
| cooldownScaling.perLevel | -1 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| matk | 83 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | outputCost |
| levelProgression.rules[0].rule.factor | 0,25 |
| levelProgression.rules[0].rule.basis | damage |
| levelProgression.rules[0].rule.minimum | 0 |
| levelProgression.rules[0].source | verifiedManaPricing |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 166 |
| levelProgression.rules[1].rule.perLevel | 32 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 83 |
| levelProgression.rules[2].rule.perLevel | 16 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | cooldownScaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0,1 |
| levelProgression.rules[3].rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.base | 47 |
| levelProgression.rules[3].rule.rule.perLevel | -1 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | mixed |
| type | skill |

### 106: Sprungschlag

Springt senkrecht hoch und schlägt mit der Waffe auf den Boden. Trifft Gegner in einem kreisförmigen Bereich mit 2 Metern Radius um dich, ohne Vorwärtsbewegung oder zusätzlichen Debuff. Der physische Skill-Grundschaden steigt gleichmäßig von 391 auf Stufe 1 auf 1606 auf Stufe 10. Die Mana-Kosten 98 auf Stufe 1, +34 je weiterer Stufe, maximal 404 auf Stufe 10. Der Cooldown 45 Sekunden auf Stufe 1 und 36 Sekunden auf Stufe 10. Die Aktion beginnt ohne zusätzliche Cast Time; die Animation dauert vorläufig 0,5 Sekunden. Sprunghöhe und genauer Trefferzeitpunkt werden im Spiel geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Leap Strike |
| category | active |
| cd | 45 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| charClass[2] | Abenteuer |
| charClass[3] | Shamane |
| charClass[4] | High Elves |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Springt senkrecht hoch und schlägt mit der Waffe auf den Boden. Trifft Gegner in einem kreisförmigen Bereich mit 2 Metern Radius um dich, ohne Vorwärtsbewegung oder zusätzlichen Debuff. Der physische Skill-Grundschaden steigt gleichmäßig von 391 auf Stufe 1 auf 1606 auf Stufe 10. Die Mana-Kosten 98 auf Stufe 1, +34 je weiterer Stufe, maximal 404 auf Stufe 10. Der Cooldown 45 Sekunden auf Stufe 1 und 36 Sekunden auf Stufe 10. Die Aktion beginnt ohne zusätzliche Cast Time; die Animation dauert vorläufig 0,5 Sekunden. Sprunghöhe und genauer Trefferzeitpunkt werden im Spiel geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Jumps vertically and slams the weapon into the ground. Hits enemies within a circular 2 meter radius around you, with no forward movement or additional debuff. Physical skill base damage increases evenly from 391 at level 1 to 1606 at level 10. Mana cost 98 at level 1, maximum 404 at level 10. Cooldown 45 seconds at level 1 and 36 seconds at level 10. The action begins without additional cast time; provisional animation duration is 0.5 seconds. Jump height and exact impact timing will be verified in game. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 106 |
| patk | 391 |
| skillName_de | Sprungschlag |
| skillpoints | 1 |
| animationDurationSeconds | 0,5 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0 |
| mana (Aktivierungskosten, kein Bonus) | 98 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 98 |
| resourceCosts[0].scaling.perLevel | 34 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 391 |
| statScaling.patk.perLevel | 135 |
| attackArea.shape | circle |
| attackArea.center | caster |
| attackArea.radiusMeters | 2 |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | atImpact |
| attackArea.timingStatus | pending |
| cooldownScaling.type | linear |
| cooldownScaling.base | 45 |
| cooldownScaling.perLevel | -1 |
| effects | [] |
| movement.type | verticalJump |
| movement.forwardDistanceMeters | 0 |
| movement.heightStatus | provisional |
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
| levelProgression.rules[0].rule.rule.base | 98 |
| levelProgression.rules[0].rule.rule.perLevel | 34 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 391 |
| levelProgression.rules[1].rule.perLevel | 135 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | cooldownScaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0,1 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 45 |
| levelProgression.rules[2].rule.rule.perLevel | -1 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

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

### 149: Macht der Wildnis

Eigenbuff für Abenteurer und Schamane, Dauer 1200 Sekunden. Stärke 3 +1 je weiterer Stufe bis 5 und P-Angriff 30 +15 je weiterer Stufe bis 60 auf Stufe 3. Kein Intelligenzbonus. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 76 auf Stufe 3, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. Abenteurer-Variante: P-Angriff 20/30/40 statt 30/45/60; Stärke unverändert 3/4/5. Dauer 1200 Sekunden, Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden. Mana 50/63/76 vor Rabatten. Der Schamane behält seine bisherigen Werte.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Power of the Wild |
| category | active |
| cd | 60 |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| charClass[2] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff für Abenteurer und Schamane, Dauer 1200 Sekunden. Stärke 3 +1 je weiterer Stufe bis 5 und P-Angriff 30 +15 je weiterer Stufe bis 60 auf Stufe 3. Kein Intelligenzbonus. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 76 auf Stufe 3, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. Abenteurer-Variante: P-Angriff 20/30/40 statt 30/45/60; Stärke unverändert 3/4/5. Dauer 1200 Sekunden, Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden. Mana 50/63/76 vor Rabatten. Der Schamane behält seine bisherigen Werte. |
| description_eng | Self buff for Adventurer and Shaman lasting 1200 seconds. Strength starts at 3 and increases by 1 to 5; physical attack starts at 30 and increases by 15 to 60 at level 3. No Intelligence bonus. Cooldown 60 seconds. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 76 at level 3, before discounts. Ongoing Mana drain is calculated separately. Adventurer variant: physical attack 20/30/40 instead of 30/45/60; Strength remains 3/4/5. Duration 1200 seconds, cooldown 60 seconds, fixed 0.1-second cast. Mana 50/63/76 before discounts. Shaman keeps its existing values. |
| dmgType (Altformat) | selfbuff |
| dur | 1.200 |
| maxSkillLv | 3 |
| maxUpgradeLv | 10 |
| nr | 149 |
| patk | 30 |
| skillName_de | Macht der Wildnis |
| skillpoints | 1 |
| str | 3 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statBonusTargets.str | self |
| statBonusTargets.patk | self |
| statScaling.str.type | linear |
| statScaling.str.base | 3 |
| statScaling.str.perLevel | 1 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 30 |
| statScaling.patk.perLevel | 15 |
| durationScaling.type | linear |
| durationScaling.base | 1.200 |
| durationScaling.perLevel | 0 |
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
| levelProgression.rules[1].rule.base | 3 |
| levelProgression.rules[1].rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 30 |
| levelProgression.rules[2].rule.perLevel | 15 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | durationScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 1.200 |
| levelProgression.rules[3].rule.perLevel | 0 |
| levelProgression.rules[3].source | storedFormula |
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
| classCombatOverrides.adventurer.patk | 20 |
| classCombatOverrides.adventurer.statScaling.str.type | linear |
| classCombatOverrides.adventurer.statScaling.str.base | 3 |
| classCombatOverrides.adventurer.statScaling.str.perLevel | 1 |
| classCombatOverrides.adventurer.statScaling.patk.type | linear |
| classCombatOverrides.adventurer.statScaling.patk.base | 20 |
| classCombatOverrides.adventurer.statScaling.patk.perLevel | 10 |
| classCombatOverrides.adventurer.levelProgression.version | 1 |
| classCombatOverrides.adventurer.levelProgression.rules[0].path[0] | resourceCosts |
| classCombatOverrides.adventurer.levelProgression.rules[0].path[1] | 0 |
| classCombatOverrides.adventurer.levelProgression.rules[0].path[2] | scaling |
| classCombatOverrides.adventurer.levelProgression.rules[0].rule.kind | bounded |
| classCombatOverrides.adventurer.levelProgression.rules[0].rule.min | 0 |
| classCombatOverrides.adventurer.levelProgression.rules[0].rule.rule.kind | linear |
| classCombatOverrides.adventurer.levelProgression.rules[0].rule.rule.base | 50 |
| classCombatOverrides.adventurer.levelProgression.rules[0].rule.rule.perLevel | 13 |
| classCombatOverrides.adventurer.levelProgression.rules[0].source | storedFormula |
| classCombatOverrides.adventurer.levelProgression.rules[1].path[0] | statScaling |
| classCombatOverrides.adventurer.levelProgression.rules[1].path[1] | str |
| classCombatOverrides.adventurer.levelProgression.rules[1].rule.kind | linear |
| classCombatOverrides.adventurer.levelProgression.rules[1].rule.base | 3 |
| classCombatOverrides.adventurer.levelProgression.rules[1].rule.perLevel | 1 |
| classCombatOverrides.adventurer.levelProgression.rules[1].source | storedFormula |
| classCombatOverrides.adventurer.levelProgression.rules[2].path[0] | statScaling |
| classCombatOverrides.adventurer.levelProgression.rules[2].path[1] | patk |
| classCombatOverrides.adventurer.levelProgression.rules[2].rule.kind | linear |
| classCombatOverrides.adventurer.levelProgression.rules[2].rule.base | 20 |
| classCombatOverrides.adventurer.levelProgression.rules[2].rule.perLevel | 10 |
| classCombatOverrides.adventurer.levelProgression.rules[2].source | storedFormula |
| classCombatOverrides.adventurer.levelProgression.rules[3].path[0] | durationScaling |
| classCombatOverrides.adventurer.levelProgression.rules[3].rule.kind | linear |
| classCombatOverrides.adventurer.levelProgression.rules[3].rule.base | 1.200 |
| classCombatOverrides.adventurer.levelProgression.rules[3].rule.perLevel | 0 |
| classCombatOverrides.adventurer.levelProgression.rules[3].source | storedFormula |
| classCombatOverrides.adventurer.levelProgression.extensionNeedsDefinition | [] |
| classCombatOverrides.adventurer.description_de | Abenteurer-Variante: P-Angriff 20/30/40 statt 30/45/60; Stärke unverändert 3/4/5. Dauer 1200 Sekunden, Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden. Mana 50/63/76 vor Rabatten. Der Schamane behält seine bisherigen Werte. |
| classCombatOverrides.adventurer.description_eng | Adventurer variant: physical attack 20/30/40 instead of 30/45/60; Strength remains 3/4/5. Duration 1200 seconds, cooldown 60 seconds, fixed 0.1-second cast. Mana 50/63/76 before discounts. Shaman keeps its existing values. |

### 192: Macht des Felsens

Erhöht die physische Verteidigung deiner Gruppe einschließlich dir selbst um 18 je gelerntem Skilllevel, bis zu 180 auf Stufe 10. Auf Stufe 10 kommen zusätzlich 5 Vitalität hinzu. Die Mana-Kosten steigen von 54 um 16 je weiterer Stufe auf 198. Castzeit 0,3 Sekunden, Dauer 1800 Sekunden, Cooldown 60 Sekunden.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Power of the Rock |
| category | active |
| cd | 60 |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erhöht die physische Verteidigung deiner Gruppe einschließlich dir selbst um 18 je gelerntem Skilllevel, bis zu 180 auf Stufe 10. Auf Stufe 10 kommen zusätzlich 5 Vitalität hinzu. Die Mana-Kosten steigen von 54 um 16 je weiterer Stufe auf 198. Castzeit 0,3 Sekunden, Dauer 1800 Sekunden, Cooldown 60 Sekunden. |
| description_eng | Increases physical defense for your group, including yourself, by 18 per learned skill level, reaching 180 at level 10. Level 10 additionally grants 5 Vitality. Mana cost increases from 54 by 16 per additional level to 198. Cast time is 0.3 seconds, duration is 1800 seconds, cooldown is 60 seconds. |
| dmgType (Altformat) | buff |
| dur | 1.800 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 192 |
| pdef | 18 |
| skillName_de | Macht des Felsens |
| skillpoints | 1 |
| castTimeSeconds | 0,3 |
| mana (Aktivierungskosten, kein Bonus) | 54 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 54 |
| resourceCosts[0].scaling.perLevel | 16 |
| statScaling.pdef.type | linear |
| statScaling.pdef.base | 18 |
| statScaling.pdef.perLevel | 18 |
| statScaling.vita.type | table |
| statScaling.vita.values[0] | 0 |
| statScaling.vita.values[1] | 0 |
| statScaling.vita.values[2] | 0 |
| statScaling.vita.values[3] | 0 |
| statScaling.vita.values[4] | 0 |
| statScaling.vita.values[5] | 0 |
| statScaling.vita.values[6] | 0 |
| statScaling.vita.values[7] | 0 |
| statScaling.vita.values[8] | 0 |
| statScaling.vita.values[9] | 5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 54 |
| levelProgression.rules[0].rule.rule.perLevel | 16 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | pdef |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 18 |
| levelProgression.rules[1].rule.perLevel | 18 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | vita |
| levelProgression.rules[2].rule.kind | thresholds |
| levelProgression.rules[2].rule.base | 0 |
| levelProgression.rules[2].rule.changes[0].level | 10 |
| levelProgression.rules[2].rule.changes[0].value | 5 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| target | group |
| type | buff |
| castTimeStatus | defined |

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

### 202: Verbrennen

Lässt einen Gegner für 10 Sekunden brennen: zehn magische Schadensticks, einer je Sekunde, erster Tick nach einer Sekunde, kein Initialtreffer. Fünf Skillstufen mit 16/39/61/84/106 Grundschaden je Tick, insgesamt 160/390/610/840/1060 Grundschaden. Kein zusätzlicher Charakterangriff je Tick. Mana-Kosten: 24/59/92/126/159, gerundet 15 Prozent des gesamten Grundschadens vor passiven Rabatten. Weisheit des Salamanders verstärkt Feuerschaden und reduziert Mana-Kosten. Castzeit 0,2 Sekunden, Cooldown 22 Sekunden. Die Maximalwerte entsprechen der vorherigen Stufe 10. Zielanzahl und Trefferbereich werden später geprüft.

Hinweis: Ausschließlich der periodicDamage-Effekt bestimmt den Schaden. Die zusätzlich exportierten alten Felder matk/statScaling.matk werden bei diesem reinen DoT nicht als Initialtreffer oder Tickschaden ausgewertet.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Burn |
| category | active |
| cd | 22 |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Lässt einen Gegner für 10 Sekunden brennen: zehn magische Schadensticks, einer je Sekunde, erster Tick nach einer Sekunde, kein Initialtreffer. Fünf Skillstufen mit 16/39/61/84/106 Grundschaden je Tick, insgesamt 160/390/610/840/1060 Grundschaden. Kein zusätzlicher Charakterangriff je Tick. Mana-Kosten: 24/59/92/126/159, gerundet 15 Prozent des gesamten Grundschadens vor passiven Rabatten. Weisheit des Salamanders verstärkt Feuerschaden und reduziert Mana-Kosten. Castzeit 0,2 Sekunden, Cooldown 22 Sekunden. Die Maximalwerte entsprechen der vorherigen Stufe 10. Zielanzahl und Trefferbereich werden später geprüft. |
| description_eng | Burns an enemy for 10 seconds: ten magical damage ticks, one per second, first tick after one second, no initial hit. Five skill levels deal 16/39/61/84/106 base damage per tick, totaling 160/390/610/840/1060. No additional character attack per tick. Mana costs 24/59/92/126/159, rounded 15% of total base damage before passive discounts. Wisdom of the Salamander boosts fire damage and reduces Mana cost. Cast time 0.2 seconds, cooldown 22 seconds. Maximum values match the previous level 10. Target count and area remain subject to later review. |
| dmgType (Altformat) | spell |
| dur | 10 |
| matk | 12 |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 202 |
| skillName_de | Verbrennen |
| skillpoints | 1 |
| castTimeSeconds | 0,2 |
| effects[0].key | burn-dot |
| effects[0].type | periodicDamage |
| effects[0].target | enemy |
| effects[0].value | 16 |
| effects[0].unit | flat |
| effects[0].damageTypes[0] | magical |
| effects[0].intervalSeconds | 1 |
| effects[0].firstTickAfterSeconds | 1 |
| effects[0].durationSeconds | 10 |
| effects[0].valueScaling.type | table |
| effects[0].valueScaling.values[0] | 16 |
| effects[0].valueScaling.values[1] | 39 |
| effects[0].valueScaling.values[2] | 61 |
| effects[0].valueScaling.values[3] | 84 |
| effects[0].valueScaling.values[4] | 106 |
| effects[0].periodicDamageKind | residualDot |
| effects[0].addsCasterMagicalAttack | false |
| hasLingeringDamage | true |
| mana (Aktivierungskosten, kein Bonus) | 24 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 24 |
| resourceCosts[0].scaling.values[0] | 24 |
| resourceCosts[0].scaling.values[1] | 59 |
| resourceCosts[0].scaling.values[2] | 92 |
| resourceCosts[0].scaling.values[3] | 126 |
| resourceCosts[0].scaling.values[4] | 159 |
| statScaling.matk.type | table |
| statScaling.matk.values[0] | 12 |
| statScaling.matk.values[1] | 26 |
| statScaling.matk.values[2] | 39 |
| statScaling.matk.values[3] | 53 |
| statScaling.matk.values[4] | 66 |
| manaPricing.category | dot |
| manaPricing.factor | 0,15 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | periodicSteps |
| levelProgression.rules[0].rule.base | 16 |
| levelProgression.rules[0].rule.steps[0] | 23 |
| levelProgression.rules[0].rule.steps[1] | 22 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | outputCost |
| levelProgression.rules[1].rule.factor | 0,15 |
| levelProgression.rules[1].rule.basis | damage |
| levelProgression.rules[1].rule.minimum | 0 |
| levelProgression.rules[1].source | verifiedManaPricing |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | periodicSteps |
| levelProgression.rules[2].rule.base | 12 |
| levelProgression.rules[2].rule.steps[0] | 14 |
| levelProgression.rules[2].rule.steps[1] | 13 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 223: Geschwindigkeit der Dox

Gruppenbuff über drei Stufen: Angriffsgeschwindigkeitspunkte 5 / 7,5 / 10 und Laufgeschwindigkeitspunkte 1 / 3 / 5. Beide sind additive Rohpunkte, keine direkten Prozentmultiplikatoren. Angriffstempo wird nach dem Sammeln aller Boni durch die bestehende Tempokurve gerechnet; die konkrete Laufgeschwindigkeitskurve ist noch offen. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten: 63 + 23 je weiterer Stufe.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Speed of the Dox |
| atkSpeed | 5 |
| category | active |
| cd | 60 |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Gruppenbuff über drei Stufen: Angriffsgeschwindigkeitspunkte 5 / 7,5 / 10 und Laufgeschwindigkeitspunkte 1 / 3 / 5. Beide sind additive Rohpunkte, keine direkten Prozentmultiplikatoren. Angriffstempo wird nach dem Sammeln aller Boni durch die bestehende Tempokurve gerechnet; die konkrete Laufgeschwindigkeitskurve ist noch offen. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten: 63 + 23 je weiterer Stufe. |
| description_eng | Group buff with three levels: attack-speed rating 5 / 7.5 / 10 and movement-speed rating 1 / 3 / 5. Both are additive raw points, not direct percentage multipliers. Attack speed follows the existing speed curve after all bonuses stack; the movement-speed curve remains pending. Duration 30 minutes, cooldown 60 seconds, cast time 0.3 seconds. Mana cost: 63 + 23 per additional level. |
| dmgType (Altformat) | buff |
| dur | 1.800 |
| maxSkillLv | 3 |
| maxUpgradeLv | 10 |
| movementSpeed | 1 |
| nr | 223 |
| skillName_de | Geschwindigkeit der Dox |
| skillpoints | 1 |
| castTimeSeconds | 0,3 |
| mana (Aktivierungskosten, kein Bonus) | 63 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 63 |
| resourceCosts[0].scaling.perLevel | 23 |
| statBonusUnits.atkSpeed | ratingPoints |
| statBonusUnits.movementSpeed | ratingPoints |
| statScaling.atkSpeed.type | table |
| statScaling.atkSpeed.values[0] | 5 |
| statScaling.atkSpeed.values[1] | 7,5 |
| statScaling.atkSpeed.values[2] | 10 |
| statScaling.movementSpeed.type | table |
| statScaling.movementSpeed.values[0] | 1 |
| statScaling.movementSpeed.values[1] | 3 |
| statScaling.movementSpeed.values[2] | 5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 63 |
| levelProgression.rules[0].rule.rule.perLevel | 23 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | atkSpeed |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 5 |
| levelProgression.rules[1].rule.perLevel | 2,5 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | movementSpeed |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 1 |
| levelProgression.rules[2].rule.perLevel | 2 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| target | group |
| type | buff |
| castTimeStatus | defined |
| statBonusTargets.atkSpeed | selfAndAllies |
| statBonusTargets.movementSpeed | selfAndAllies |

### 224: Macht des Feuers

Gruppenbuff: +18 körperlicher Skillschaden je Stufe, maximal +180. Zusätzlich magischer Skillschaden: 0 auf Stufe 1, +9 je weiterer Stufe bis +81 auf Stufe 10. Keine direkten P-/M-Angriffsboni. Der Schadensbonus gilt je passendem Skilltreffer mit Angriffsanteil, bei Mehrfachtreffern entsprechend je Treffer. Periodischer Schaden mit Charakterangriffsanteil profitiert ebenfalls. Keine Wirkung auf normale Auto-Attacks, Begleiterangriffe oder reine feste Rest-DoTs. Normale Attribute, Waffen und Self-Buffs skalieren weiterhin wie bisher. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten 63 +24 je weiterer Stufe, maximal 279.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Power of Fire |
| category | active |
| cd | 60 |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Gruppenbuff: +18 körperlicher Skillschaden je Stufe, maximal +180. Zusätzlich magischer Skillschaden: 0 auf Stufe 1, +9 je weiterer Stufe bis +81 auf Stufe 10. Keine direkten P-/M-Angriffsboni. Der Schadensbonus gilt je passendem Skilltreffer mit Angriffsanteil, bei Mehrfachtreffern entsprechend je Treffer. Periodischer Schaden mit Charakterangriffsanteil profitiert ebenfalls. Keine Wirkung auf normale Auto-Attacks, Begleiterangriffe oder reine feste Rest-DoTs. Normale Attribute, Waffen und Self-Buffs skalieren weiterhin wie bisher. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten 63 +24 je weiterer Stufe, maximal 279. |
| description_eng | Group buff: +18 physical skill damage per level, reaching +180. Also adds magical skill damage: 0 at level 1, +9 per additional level to +81 at level 10. No direct physical or magical attack bonuses. The damage bonus applies to matching skill hits with an attack contribution, including each hit of multi-hit skills and periodic hits that add character attack. Does not affect normal basic attacks, companion attacks or purely fixed residual DoTs. Normal attributes, weapons and self buffs retain their existing scaling. Duration 30 minutes, cooldown 60 seconds, cast time 0.3 seconds. Mana cost 63 +24 per additional level, reaching 279. |
| dmgType (Altformat) | buff |
| dur | 1.800 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 224 |
| skillName_de | Macht des Feuers |
| skillpoints | 1 |
| castTimeSeconds | 0,3 |
| mana (Aktivierungskosten, kein Bonus) | 63 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 63 |
| resourceCosts[0].scaling.perLevel | 24 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 63 |
| levelProgression.rules[0].rule.rule.perLevel | 24 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 18 |
| levelProgression.rules[1].rule.perLevel | 18 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 1 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 0 |
| levelProgression.rules[2].rule.perLevel | 9 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| target | group |
| type | buff |
| castTimeStatus | defined |
| effects[0].key | group-physical-skill-damage |
| effects[0].type | damageBonus |
| effects[0].target | self |
| effects[0].appliesTo | allSkills |
| effects[0].damageTypes[0] | physical |
| effects[0].value | 18 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 18 |
| effects[0].valueScaling.perLevel | 18 |
| effects[0].durationSeconds | 1.800 |
| effects[1].key | group-magical-skill-damage |
| effects[1].type | damageBonus |
| effects[1].target | self |
| effects[1].appliesTo | allSkills |
| effects[1].damageTypes[0] | magical |
| effects[1].value | 0 |
| effects[1].unit | flat |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | 0 |
| effects[1].valueScaling.perLevel | 9 |
| effects[1].durationSeconds | 1.800 |
| effectsVersion | 1 |

### 252: Streitkolbentraining

Ermöglicht das Führen von zwei Einhand-Streitkolben. Permanentes Waffentraining: Auf Skilllevel 1 erhältst du 2 Stärke und 1 Intelligenz. Je weiterer Stufe steigt abwechselnd Stärke oder Intelligenz um 1, beginnend mit Stärke auf Stufe 2. Auf Stufe 10 insgesamt 7 Stärke und 5 Intelligenz. Die Boni gelten einmal für den Charakter, nicht pro Waffe. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Dual Mace Training |
| category | passive |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Ermöglicht das Führen von zwei Einhand-Streitkolben. Permanentes Waffentraining: Auf Skilllevel 1 erhältst du 2 Stärke und 1 Intelligenz. Je weiterer Stufe steigt abwechselnd Stärke oder Intelligenz um 1, beginnend mit Stärke auf Stufe 2. Auf Stufe 10 insgesamt 7 Stärke und 5 Intelligenz. Die Boni gelten einmal für den Charakter, nicht pro Waffe. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Allows wielding two one-handed maces. Permanent weapon training: level 1 grants 2 Strength and 1 Intelligence. Each additional level alternately adds 1 Strength or Intelligence, starting with Strength at level 2. Level 10 grants 7 Strength and 5 Intelligence in total. Bonuses apply once to the character, not per weapon. No activation cost, cast time or cooldown. |
| dmgType (Altformat) | passive |
| int | 1 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 252 |
| skillName_de | Streitkolbentraining |
| skillpoints | 1 |
| str | 2 |
| resourceCosts | [] |
| statScaling.str.type | table |
| statScaling.str.values[0] | 2 |
| statScaling.str.values[1] | 3 |
| statScaling.str.values[2] | 3 |
| statScaling.str.values[3] | 4 |
| statScaling.str.values[4] | 4 |
| statScaling.str.values[5] | 5 |
| statScaling.str.values[6] | 5 |
| statScaling.str.values[7] | 6 |
| statScaling.str.values[8] | 6 |
| statScaling.str.values[9] | 7 |
| statScaling.int.type | table |
| statScaling.int.values[0] | 1 |
| statScaling.int.values[1] | 1 |
| statScaling.int.values[2] | 2 |
| statScaling.int.values[3] | 2 |
| statScaling.int.values[4] | 3 |
| statScaling.int.values[5] | 3 |
| statScaling.int.values[6] | 4 |
| statScaling.int.values[7] | 4 |
| statScaling.int.values[8] | 5 |
| statScaling.int.values[9] | 5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | periodicSteps |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.steps[0] | 1 |
| levelProgression.rules[0].rule.steps[1] | 0 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | int |
| levelProgression.rules[1].rule.kind | periodicSteps |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.steps[0] | 0 |
| levelProgression.rules[1].rule.steps[1] | 1 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 254: Weisheit des Salamanders

Permanente Passive mit fünf Stufen. Erhöht den physischen Schaden von Beben, Erdbeben, Infernalem Kreuzschlag, Sprungschlag, Felszähne, Felsensalve und beiden Phasen der Erdsäule um 0,3 Prozent je Stufe, maximal 1,5 Prozent. Erhöht den magischen Feuerschaden von Feuerlanze, Infernal Zyklon, Infernalem Kreuzschlag und Verbrennen um 0,6 Prozent je Stufe, maximal 3 Prozent; bestehende Feuer-DoTs profitieren ebenfalls. Senkt die Manakosten sämtlicher eigener Skills um 0,6 Prozent je Stufe, maximal 3 Prozent, einschließlich Erdangriffen, Buffs und Unterstützungsfähigkeiten. Andere Ressourcenpreise werden nicht reduziert. Schadensboni umfassen den passenden Charakterangriff; beim Kreuzschlag wird jede Komponente nur einmal verstärkt. Keine Wirkung auf Auto-Attack-Schaden, Cooldowns, Castzeiten oder den magischen Erdschaden von Erdbeben. Keine zusätzliche Brandchance, Aktivierungskosten oder begrenzte Dauer.

| Feld | Gespeicherter Wert |
| --- | --- |
| nr | 254 |
| skillName_de | Weisheit des Salamanders |
| skillName_eng | Wisdom of the Salamander |
| category | passive |
| dmgType (Altformat) | passive |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| skillpoints | 1 |
| resourceCosts | [] |
| effectsVersion | 1 |
| effects[0].key | salamander-damageBonus-15-physical |
| effects[0].type | damageBonus |
| effects[0].target | self |
| effects[0].appliesTo | specificSkill |
| effects[0].targetSkillNumber | 15 |
| effects[0].value | 0,003 |
| effects[0].unit | fraction |
| effects[0].durationSeconds | 0 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0,003 |
| effects[0].valueScaling.perLevel | 0,003 |
| effects[0].damageTypes[0] | physical |
| effects[1].key | salamander-damageBonus-38-physical |
| effects[1].type | damageBonus |
| effects[1].target | self |
| effects[1].appliesTo | specificSkill |
| effects[1].targetSkillNumber | 38 |
| effects[1].value | 0,003 |
| effects[1].unit | fraction |
| effects[1].durationSeconds | 0 |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | 0,003 |
| effects[1].valueScaling.perLevel | 0,003 |
| effects[1].damageTypes[0] | physical |
| effects[2].key | salamander-damageBonus-76-physical |
| effects[2].type | damageBonus |
| effects[2].target | self |
| effects[2].appliesTo | specificSkill |
| effects[2].targetSkillNumber | 76 |
| effects[2].value | 0,003 |
| effects[2].unit | fraction |
| effects[2].durationSeconds | 0 |
| effects[2].valueScaling.type | linear |
| effects[2].valueScaling.base | 0,003 |
| effects[2].valueScaling.perLevel | 0,003 |
| effects[2].damageTypes[0] | physical |
| effects[3].key | salamander-damageBonus-106-physical |
| effects[3].type | damageBonus |
| effects[3].target | self |
| effects[3].appliesTo | specificSkill |
| effects[3].targetSkillNumber | 106 |
| effects[3].value | 0,003 |
| effects[3].unit | fraction |
| effects[3].durationSeconds | 0 |
| effects[3].valueScaling.type | linear |
| effects[3].valueScaling.base | 0,003 |
| effects[3].valueScaling.perLevel | 0,003 |
| effects[3].damageTypes[0] | physical |
| effects[4].key | salamander-damageBonus-50-magical |
| effects[4].type | damageBonus |
| effects[4].target | self |
| effects[4].appliesTo | specificSkill |
| effects[4].targetSkillNumber | 50 |
| effects[4].value | 0,006 |
| effects[4].unit | fraction |
| effects[4].durationSeconds | 0 |
| effects[4].valueScaling.type | linear |
| effects[4].valueScaling.base | 0,006 |
| effects[4].valueScaling.perLevel | 0,006 |
| effects[4].damageTypes[0] | magical |
| effects[5].key | salamander-damageBonus-62-magical |
| effects[5].type | damageBonus |
| effects[5].target | self |
| effects[5].appliesTo | specificSkill |
| effects[5].targetSkillNumber | 62 |
| effects[5].value | 0,006 |
| effects[5].unit | fraction |
| effects[5].durationSeconds | 0 |
| effects[5].valueScaling.type | linear |
| effects[5].valueScaling.base | 0,006 |
| effects[5].valueScaling.perLevel | 0,006 |
| effects[5].damageTypes[0] | magical |
| effects[6].key | salamander-damageBonus-76-magical |
| effects[6].type | damageBonus |
| effects[6].target | self |
| effects[6].appliesTo | specificSkill |
| effects[6].targetSkillNumber | 76 |
| effects[6].value | 0,006 |
| effects[6].unit | fraction |
| effects[6].durationSeconds | 0 |
| effects[6].valueScaling.type | linear |
| effects[6].valueScaling.base | 0,006 |
| effects[6].valueScaling.perLevel | 0,006 |
| effects[6].damageTypes[0] | magical |
| effects[7].key | salamander-damageBonus-202-magical |
| effects[7].type | damageBonus |
| effects[7].target | self |
| effects[7].appliesTo | specificSkill |
| effects[7].targetSkillNumber | 202 |
| effects[7].value | 0,006 |
| effects[7].unit | fraction |
| effects[7].durationSeconds | 0 |
| effects[7].valueScaling.type | linear |
| effects[7].valueScaling.base | 0,006 |
| effects[7].valueScaling.perLevel | 0,006 |
| effects[7].damageTypes[0] | magical |
| effects[8].key | salamander-damageBonus-255-physical |
| effects[8].type | damageBonus |
| effects[8].target | self |
| effects[8].appliesTo | specificSkill |
| effects[8].targetSkillNumber | 255 |
| effects[8].value | 0,003 |
| effects[8].unit | fraction |
| effects[8].durationSeconds | 0 |
| effects[8].damageTypes[0] | physical |
| effects[8].valueScaling.type | linear |
| effects[8].valueScaling.base | 0,003 |
| effects[8].valueScaling.perLevel | 0,003 |
| effects[9].key | salamander-damageBonus-256-physical |
| effects[9].type | damageBonus |
| effects[9].target | self |
| effects[9].appliesTo | specificSkill |
| effects[9].targetSkillNumber | 256 |
| effects[9].value | 0,003 |
| effects[9].unit | fraction |
| effects[9].durationSeconds | 0 |
| effects[9].damageTypes[0] | physical |
| effects[9].valueScaling.type | linear |
| effects[9].valueScaling.base | 0,003 |
| effects[9].valueScaling.perLevel | 0,003 |
| effects[10].key | salamander-damageBonus-258-physical |
| effects[10].type | damageBonus |
| effects[10].target | self |
| effects[10].appliesTo | specificSkill |
| effects[10].targetSkillNumber | 258 |
| effects[10].value | 0,003 |
| effects[10].unit | fraction |
| effects[10].durationSeconds | 0 |
| effects[10].damageTypes[0] | physical |
| effects[10].valueScaling.type | linear |
| effects[10].valueScaling.base | 0,003 |
| effects[10].valueScaling.perLevel | 0,003 |
| effects[11].key | salamander-all-skill-mana |
| effects[11].type | resourceCostReduction |
| effects[11].target | self |
| effects[11].appliesTo | allSkills |
| effects[11].resource | mana |
| effects[11].value | 0,006 |
| effects[11].unit | fraction |
| effects[11].durationSeconds | 0 |
| effects[11].valueScaling.type | linear |
| effects[11].valueScaling.base | 0,006 |
| effects[11].valueScaling.perLevel | 0,006 |
| description_de | Permanente Passive mit fünf Stufen. Erhöht den physischen Schaden von Beben, Erdbeben, Infernalem Kreuzschlag, Sprungschlag, Felszähne, Felsensalve und beiden Phasen der Erdsäule um 0,3 Prozent je Stufe, maximal 1,5 Prozent. Erhöht den magischen Feuerschaden von Feuerlanze, Infernal Zyklon, Infernalem Kreuzschlag und Verbrennen um 0,6 Prozent je Stufe, maximal 3 Prozent; bestehende Feuer-DoTs profitieren ebenfalls. Senkt die Manakosten sämtlicher eigener Skills um 0,6 Prozent je Stufe, maximal 3 Prozent, einschließlich Erdangriffen, Buffs und Unterstützungsfähigkeiten. Andere Ressourcenpreise werden nicht reduziert. Schadensboni umfassen den passenden Charakterangriff; beim Kreuzschlag wird jede Komponente nur einmal verstärkt. Keine Wirkung auf Auto-Attack-Schaden, Cooldowns, Castzeiten oder den magischen Erdschaden von Erdbeben. Keine zusätzliche Brandchance, Aktivierungskosten oder begrenzte Dauer. |
| description_eng | Permanent passive with five levels. Increases physical damage of Tremor, Earthquake, Infernal Cross Strike, Jump Strike, Rock Fangs, Rock Volley and both Earth Pillar phases by 0.3 percent per level, up to 1.5 percent. Increases magical fire damage of Fire Lance, Infernal Cyclone, Infernal Cross Strike and Burn by 0.6 percent per level, up to 3 percent, including existing fire damage over time. Reduces Mana costs of all own skills by 0.6 percent per level, up to 3 percent, including earth attacks, buffs and support skills. Other resource costs are unchanged. Damage bonuses include the matching character attack; each cross-strike component is boosted once. Does not affect basic-attack damage, cooldowns, cast times or Earthquake magical earth damage. No additional burn chance, activation cost or limited duration. |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0,003 |
| levelProgression.rules[0].rule.perLevel | 0,003 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 1 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,003 |
| levelProgression.rules[1].rule.perLevel | 0,003 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 2 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 0,003 |
| levelProgression.rules[2].rule.perLevel | 0,003 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 3 |
| levelProgression.rules[3].path[2] | valueScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 0,003 |
| levelProgression.rules[3].rule.perLevel | 0,003 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 4 |
| levelProgression.rules[4].path[2] | valueScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 0,006 |
| levelProgression.rules[4].rule.perLevel | 0,006 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | effects |
| levelProgression.rules[5].path[1] | 5 |
| levelProgression.rules[5].path[2] | valueScaling |
| levelProgression.rules[5].rule.kind | linear |
| levelProgression.rules[5].rule.base | 0,006 |
| levelProgression.rules[5].rule.perLevel | 0,006 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.rules[6].path[0] | effects |
| levelProgression.rules[6].path[1] | 6 |
| levelProgression.rules[6].path[2] | valueScaling |
| levelProgression.rules[6].rule.kind | linear |
| levelProgression.rules[6].rule.base | 0,006 |
| levelProgression.rules[6].rule.perLevel | 0,006 |
| levelProgression.rules[6].source | storedFormula |
| levelProgression.rules[7].path[0] | effects |
| levelProgression.rules[7].path[1] | 7 |
| levelProgression.rules[7].path[2] | valueScaling |
| levelProgression.rules[7].rule.kind | linear |
| levelProgression.rules[7].rule.base | 0,006 |
| levelProgression.rules[7].rule.perLevel | 0,006 |
| levelProgression.rules[7].source | storedFormula |
| levelProgression.rules[8].path[0] | effects |
| levelProgression.rules[8].path[1] | 8 |
| levelProgression.rules[8].path[2] | valueScaling |
| levelProgression.rules[8].rule.kind | linear |
| levelProgression.rules[8].rule.base | 0,003 |
| levelProgression.rules[8].rule.perLevel | 0,003 |
| levelProgression.rules[8].source | storedFormula |
| levelProgression.rules[9].path[0] | effects |
| levelProgression.rules[9].path[1] | 9 |
| levelProgression.rules[9].path[2] | valueScaling |
| levelProgression.rules[9].rule.kind | linear |
| levelProgression.rules[9].rule.base | 0,003 |
| levelProgression.rules[9].rule.perLevel | 0,003 |
| levelProgression.rules[9].source | storedFormula |
| levelProgression.rules[10].path[0] | effects |
| levelProgression.rules[10].path[1] | 10 |
| levelProgression.rules[10].path[2] | valueScaling |
| levelProgression.rules[10].rule.kind | linear |
| levelProgression.rules[10].rule.base | 0,003 |
| levelProgression.rules[10].rule.perLevel | 0,003 |
| levelProgression.rules[10].source | storedFormula |
| levelProgression.rules[11].path[0] | effects |
| levelProgression.rules[11].path[1] | 11 |
| levelProgression.rules[11].path[2] | valueScaling |
| levelProgression.rules[11].rule.kind | linear |
| levelProgression.rules[11].rule.base | 0,006 |
| levelProgression.rules[11].rule.perLevel | 0,006 |
| levelProgression.rules[11].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 255: Felszähne

Lässt große, überkreuzte Felsspitzen um das anvisierte Ziel aus dem Boden schießen. Verursacht einmalig physischen Schaden an Gegnern in einem kleinen kreisförmigen Bereich um das Ziel; eng beieinanderstehende Gegner können gemeinsam getroffen werden. Grundschaden 73 auf Stufe 1, +46 je weiterer Stufe bis 947 auf Stufe 20, zuzüglich einmal des aktuellen P-Angriffs je getroffenem Gegner. Keine Verlangsamung, kein DoT und kein zusätzlicher Kontroll- oder Mehrfachtreffereffekt. Castzeit 0,1 Sekunden. Cooldown 34 Sekunden auf Stufe 1, −1 je weiterer Stufe bis 15 auf Stufe 20. Mana-Kosten entsprechen je Stufe gerundet 25 Prozent des Skill-Grundschadens, ohne Charakterangriff oder Gegnerzahl: 18 bis 237 Mana. Genauer Flächenradius, Reichweite und Animation noch offen. Weisheit des Salamanders erhöht den physischen Schaden und reduziert als allgemeiner Skillrabatt auch die Mana-Kosten.

| Feld | Gespeicherter Wert |
| --- | --- |
| nr | 255 |
| skillName_de | Felszähne |
| skillName_eng | Rock Fangs |
| category | active |
| dmgType (Altformat) | physical |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| skillpoints | 1 |
| patk | 73 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 73 |
| statScaling.patk.perLevel | 46 |
| mana (Aktivierungskosten, kein Bonus) | 18 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 18 |
| resourceCosts[0].scaling.values[0] | 18 |
| resourceCosts[0].scaling.values[1] | 30 |
| resourceCosts[0].scaling.values[2] | 41 |
| resourceCosts[0].scaling.values[3] | 53 |
| resourceCosts[0].scaling.values[4] | 64 |
| resourceCosts[0].scaling.values[5] | 76 |
| resourceCosts[0].scaling.values[6] | 87 |
| resourceCosts[0].scaling.values[7] | 99 |
| resourceCosts[0].scaling.values[8] | 110 |
| resourceCosts[0].scaling.values[9] | 122 |
| resourceCosts[0].scaling.values[10] | 133 |
| resourceCosts[0].scaling.values[11] | 145 |
| resourceCosts[0].scaling.values[12] | 156 |
| resourceCosts[0].scaling.values[13] | 168 |
| resourceCosts[0].scaling.values[14] | 179 |
| resourceCosts[0].scaling.values[15] | 191 |
| resourceCosts[0].scaling.values[16] | 202 |
| resourceCosts[0].scaling.values[17] | 214 |
| resourceCosts[0].scaling.values[18] | 225 |
| resourceCosts[0].scaling.values[19] | 237 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| castTimeSeconds | 0,1 |
| cd | 34 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 34 |
| cooldownScaling.perLevel | -1 |
| hasLingeringDamage | false |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | defined |
| attackArea.shape | circle |
| attackArea.center | selectedTarget |
| attackArea.geometryStatus | pending |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | atImpact |
| description_de | Lässt große, überkreuzte Felsspitzen um das anvisierte Ziel aus dem Boden schießen. Verursacht einmalig physischen Schaden an Gegnern in einem kleinen kreisförmigen Bereich um das Ziel; eng beieinanderstehende Gegner können gemeinsam getroffen werden. Grundschaden 73 auf Stufe 1, +46 je weiterer Stufe bis 947 auf Stufe 20, zuzüglich einmal des aktuellen P-Angriffs je getroffenem Gegner. Keine Verlangsamung, kein DoT und kein zusätzlicher Kontroll- oder Mehrfachtreffereffekt. Castzeit 0,1 Sekunden. Cooldown 34 Sekunden auf Stufe 1, −1 je weiterer Stufe bis 15 auf Stufe 20. Mana-Kosten entsprechen je Stufe gerundet 25 Prozent des Skill-Grundschadens, ohne Charakterangriff oder Gegnerzahl: 18 bis 237 Mana. Genauer Flächenradius, Reichweite und Animation noch offen. Weisheit des Salamanders erhöht den physischen Schaden und reduziert als allgemeiner Skillrabatt auch die Mana-Kosten. |
| description_eng | Crossing rock spikes erupt around the selected target, dealing one physical hit to enemies in a small circular area. Closely grouped enemies can be hit together. Base damage 73 at level 1 plus 46 per additional level to 947 at level 20, plus full current physical attack once per target. No slow, damage over time, additional control or multi-hit effect. Cast time 0.1 seconds. Cooldown 34 seconds minus 1 per additional level to 15. Mana per level is rounded from 25 percent of skill base damage, excluding character attack and target count: 18 to 237. Exact area radius, range and animation remain undefined. Wisdom of the Salamander boosts physical damage and its general skill Mana discount applies. |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | patk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 73 |
| levelProgression.rules[0].rule.perLevel | 46 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | outputCost |
| levelProgression.rules[1].rule.factor | 0,25 |
| levelProgression.rules[1].rule.basis | damage |
| levelProgression.rules[1].rule.minimum | 0 |
| levelProgression.rules[1].source | verifiedManaPricing |
| levelProgression.rules[2].path[0] | cooldownScaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0,1 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 34 |
| levelProgression.rules[2].rule.rule.perLevel | -1 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 256: Felsensalve

Hebt Felsplatten aus dem Boden und schleudert sie auf ein Hauptziel. Zwei Platten auf Stufe 1–4, drei auf Stufe 5–9, vier auf Stufe 10–14 und fünf auf Stufe 15. Jede Platte verursacht 611 physischen Grundschaden, +150 je weiterer Skillstufe bis 2711, zuzüglich einmal des aktuellen P-Angriffs. Jeder Einschlag erzeugt eine Splitterwelle hinter dem Hauptziel: bis zu vier verschiedene zufällige Nebenziele erhalten jeweils 10 Prozent des Schadens der jeweiligen Platte. Die Auswahl erfolgt je Platte neu aus den dann im Gebiet stehenden Gegnern. Das Hauptziel erhält keinen zusätzlichen Splitterschaden. Fehlende Nebenziele lassen Trefferplätze verfallen; keine Umverteilung auf bereits getroffene Gegner und keine weiteren Splitter aus Splittern. Exakte Fächergeometrie und Reichweite bleiben offen. Castzeit 0,6 Sekunden. Cooldown 65 Sekunden, −1 je weiterer Stufe bis 51 Sekunden. Vorläufige Animationsdauer 2,5 Sekunden; genaue Trefferzeitpunkte bleiben offen. Mana pro gesamter Anwendung: gerundet 25 Prozent des gesamten Grundschadens der Hauptziel-Platten, ohne Charakterangriff oder zusätzliche Gegnerzahl; 306 bis 3389. Kein DoT oder Kontrolleffekt. Weisheit des Salamanders erhöht den physischen Schaden und reduziert als allgemeiner Skillrabatt auch die Mana-Kosten.

| Feld | Gespeicherter Wert |
| --- | --- |
| nr | 256 |
| skillName_de | Felsensalve |
| skillName_eng | Rock Volley |
| category | active |
| dmgType (Altformat) | physical |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| maxSkillLv | 15 |
| maxUpgradeLv | 10 |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| skillpoints | 1 |
| patk | 611 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 611 |
| statScaling.patk.perLevel | 150 |
| mana (Aktivierungskosten, kein Bonus) | 306 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 306 |
| resourceCosts[0].scaling.values[0] | 306 |
| resourceCosts[0].scaling.values[1] | 381 |
| resourceCosts[0].scaling.values[2] | 456 |
| resourceCosts[0].scaling.values[3] | 531 |
| resourceCosts[0].scaling.values[4] | 908 |
| resourceCosts[0].scaling.values[5] | 1.021 |
| resourceCosts[0].scaling.values[6] | 1.133 |
| resourceCosts[0].scaling.values[7] | 1.246 |
| resourceCosts[0].scaling.values[8] | 1.358 |
| resourceCosts[0].scaling.values[9] | 1.961 |
| resourceCosts[0].scaling.values[10] | 2.111 |
| resourceCosts[0].scaling.values[11] | 2.261 |
| resourceCosts[0].scaling.values[12] | 2.411 |
| resourceCosts[0].scaling.values[13] | 2.561 |
| resourceCosts[0].scaling.values[14] | 3.389 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| castTimeSeconds | 0,6 |
| cd | 65 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 65 |
| cooldownScaling.perLevel | -1 |
| animationDurationSeconds | 2,5 |
| animationTimingStatus | provisional |
| hasLingeringDamage | false |
| attackExecution.hitCount | 2 |
| attackExecution.hitCountScaling.type | table |
| attackExecution.hitCountScaling.values[0] | 2 |
| attackExecution.hitCountScaling.values[1] | 2 |
| attackExecution.hitCountScaling.values[2] | 2 |
| attackExecution.hitCountScaling.values[3] | 2 |
| attackExecution.hitCountScaling.values[4] | 3 |
| attackExecution.hitCountScaling.values[5] | 3 |
| attackExecution.hitCountScaling.values[6] | 3 |
| attackExecution.hitCountScaling.values[7] | 3 |
| attackExecution.hitCountScaling.values[8] | 3 |
| attackExecution.hitCountScaling.values[9] | 4 |
| attackExecution.hitCountScaling.values[10] | 4 |
| attackExecution.hitCountScaling.values[11] | 4 |
| attackExecution.hitCountScaling.values[12] | 4 |
| attackExecution.hitCountScaling.values[13] | 4 |
| attackExecution.hitCountScaling.values[14] | 5 |
| attackExecution.damageValueScope | perHit |
| attackExecution.targetMode | singleEnemy |
| attackExecution.hitTimingStatus | pending |
| attackExecution.secondarySplinters.damageFractionOfPrimaryHit | 0,1 |
| attackExecution.secondarySplinters.maxTargetsPerProjectile | 4 |
| attackExecution.secondarySplinters.reselectEachProjectile | true |
| attackExecution.secondarySplinters.distinctWithinProjectile | true |
| attackExecution.secondarySplinters.excludesPrimaryTarget | true |
| attackExecution.secondarySplinters.unusedSlotsExpire | true |
| attackExecution.secondarySplinters.canCauseFurtherSplinters | false |
| attackExecution.secondarySplinters.region | behindPrimaryTarget |
| attackExecution.secondarySplinters.geometryStatus | pending |
| description_de | Hebt Felsplatten aus dem Boden und schleudert sie auf ein Hauptziel. Zwei Platten auf Stufe 1–4, drei auf Stufe 5–9, vier auf Stufe 10–14 und fünf auf Stufe 15. Jede Platte verursacht 611 physischen Grundschaden, +150 je weiterer Skillstufe bis 2711, zuzüglich einmal des aktuellen P-Angriffs. Jeder Einschlag erzeugt eine Splitterwelle hinter dem Hauptziel: bis zu vier verschiedene zufällige Nebenziele erhalten jeweils 10 Prozent des Schadens der jeweiligen Platte. Die Auswahl erfolgt je Platte neu aus den dann im Gebiet stehenden Gegnern. Das Hauptziel erhält keinen zusätzlichen Splitterschaden. Fehlende Nebenziele lassen Trefferplätze verfallen; keine Umverteilung auf bereits getroffene Gegner und keine weiteren Splitter aus Splittern. Exakte Fächergeometrie und Reichweite bleiben offen. Castzeit 0,6 Sekunden. Cooldown 65 Sekunden, −1 je weiterer Stufe bis 51 Sekunden. Vorläufige Animationsdauer 2,5 Sekunden; genaue Trefferzeitpunkte bleiben offen. Mana pro gesamter Anwendung: gerundet 25 Prozent des gesamten Grundschadens der Hauptziel-Platten, ohne Charakterangriff oder zusätzliche Gegnerzahl; 306 bis 3389. Kein DoT oder Kontrolleffekt. Weisheit des Salamanders erhöht den physischen Schaden und reduziert als allgemeiner Skillrabatt auch die Mana-Kosten. |
| description_eng | Lifts rock plates and throws them at one primary target. Two plates at levels1–4, three at5–9, four at10–14 and five at15. Each plate deals physical base damage611 plus150 per additional level to2711, plus full current physical attack once. Each impact sends splinters behind the primary target: up to four distinct random secondary enemies each receive10 percent of that plate damage. Targets are reselected independently for every plate from enemies currently inside. Excludes the primary target; unused slots expire, with no redistribution or recursive splinters. Exact fan geometry and range remain undefined. Cast0.6 seconds, cooldown65 minus1 per additional level to51. Provisional animation2.5 seconds, exact hit offsets pending. Mana per full application is rounded25 percent of all primary-projectile base damage, excluding character attack and secondary target count:306–3389. No DoT or control. Wisdom of the Salamander boosts physical damage and its general skill Mana discount applies. |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | patk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 611 |
| levelProgression.rules[0].rule.perLevel | 150 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | outputCost |
| levelProgression.rules[1].rule.factor | 0,25 |
| levelProgression.rules[1].rule.basis | damage |
| levelProgression.rules[1].rule.minimum | 0 |
| levelProgression.rules[1].source | verifiedManaPricing |
| levelProgression.rules[2].path[0] | cooldownScaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0,1 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 65 |
| levelProgression.rules[2].rule.rule.perLevel | -1 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | attackExecution |
| levelProgression.rules[3].path[1] | hitCountScaling |
| levelProgression.rules[3].rule.kind | periodicSteps |
| levelProgression.rules[3].rule.base | 2 |
| levelProgression.rules[3].rule.steps[0] | 0 |
| levelProgression.rules[3].rule.steps[1] | 0 |
| levelProgression.rules[3].rule.steps[2] | 0 |
| levelProgression.rules[3].rule.steps[3] | 1 |
| levelProgression.rules[3].rule.steps[4] | 0 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 257: Feurige Leidenschaft

Bei weniger als 50 Prozent deines maximalen Manas können erfolgreiche eigene Auto-Attacks oder direkte Angriffsskills mit 0,5 Prozent Wahrscheinlichkeit je gelernter Skillstufe Feurige Leidenschaft entfesseln (0,5 Prozent auf Stufe 1, +0,5 Prozentpunkte je weiterer Stufe, maximal 5 Prozent auf Stufe 10), sofern der Skill bereit ist. Jede Angriffsaktion prüft die Chance nur einmal: zwei Waffen, Mehrfachtreffer oder mehrere getroffene Ziele geben keine zusätzlichen Würfe; periodischer Schaden und Begleiter lösen nicht aus. Die Wirkung hält auf allen zehn Stufen 10 Sekunden. Währenddessen verursacht jede erfolgreiche eigene Auto-Attack-Aktion zusätzlich 2 magischen Feuerschaden je Skillstufe, maximal 20 auf Stufe 10, und stellt einmalig 5 Mana wieder her. Kein Zusatz des M-Angriffs zu diesem festen Bonusschaden. Angriffsskills können die Passive auslösen, erhalten aber weder deren Zusatzschaden noch Mana-Rückgewinnung. Keine Aktivierungskosten. Interner Cooldown beginnt mit Auslösung: 90 Sekunden, −1 je weiterer Stufe bis 81 auf Stufe 10. Die Wirkung stapelt nicht und wird nicht durch neue Auslösungen verlängert. Ein Anstieg auf mindestens 50 Prozent Mana beendet eine bereits laufende Wirkung nicht vorzeitig.

| Feld | Gespeicherter Wert |
| --- | --- |
| nr | 257 |
| skillName_de | Feurige Leidenschaft |
| skillName_eng | Fiery Passion |
| category | passive |
| dmgType (Altformat) | passive |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| skillpoints | 1 |
| resourceCosts | [] |
| cd | 90 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 90 |
| cooldownScaling.perLevel | -1 |
| dur | 10 |
| triggerConditionStatus | defined |
| triggerCondition.type | ownAttack |
| triggerCondition.chancePerCheck | 0,005 |
| triggerCondition.requiresCooldownReady | true |
| triggerCondition.manaBelowFraction | 0,5 |
| triggerCondition.oncePerAttackAction | true |
| triggerCondition.includesBasicAttacks | true |
| triggerCondition.includesAttackSkills | true |
| triggerCondition.excludeCompanionAttacks | true |
| triggerCondition.excludesPeriodicDamage | true |
| triggerCondition.chancePerCheckScaling.type | linear |
| triggerCondition.chancePerCheckScaling.base | 0,005 |
| triggerCondition.chancePerCheckScaling.perLevel | 0,005 |
| effectsVersion | 1 |
| effects[0].key | passion-fire-auto |
| effects[0].type | damageBonus |
| effects[0].target | self |
| effects[0].appliesTo | basicAttack |
| effects[0].damageTypes[0] | magical |
| effects[0].damageSchool | fire |
| effects[0].value | 2 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 10 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 2 |
| effects[0].valueScaling.perLevel | 2 |
| effects[1].key | passion-auto-mana |
| effects[1].type | resourceGain |
| effects[1].resource | mana |
| effects[1].target | self |
| effects[1].gainTrigger | ownBasicAttack |
| effects[1].oncePerAttackAction | true |
| effects[1].value | 5 |
| effects[1].unit | flat |
| effects[1].durationSeconds | 10 |
| description_de | Bei weniger als 50 Prozent deines maximalen Manas können erfolgreiche eigene Auto-Attacks oder direkte Angriffsskills mit 0,5 Prozent Wahrscheinlichkeit je gelernter Skillstufe Feurige Leidenschaft entfesseln (0,5 Prozent auf Stufe 1, +0,5 Prozentpunkte je weiterer Stufe, maximal 5 Prozent auf Stufe 10), sofern der Skill bereit ist. Jede Angriffsaktion prüft die Chance nur einmal: zwei Waffen, Mehrfachtreffer oder mehrere getroffene Ziele geben keine zusätzlichen Würfe; periodischer Schaden und Begleiter lösen nicht aus. Die Wirkung hält auf allen zehn Stufen 10 Sekunden. Währenddessen verursacht jede erfolgreiche eigene Auto-Attack-Aktion zusätzlich 2 magischen Feuerschaden je Skillstufe, maximal 20 auf Stufe 10, und stellt einmalig 5 Mana wieder her. Kein Zusatz des M-Angriffs zu diesem festen Bonusschaden. Angriffsskills können die Passive auslösen, erhalten aber weder deren Zusatzschaden noch Mana-Rückgewinnung. Keine Aktivierungskosten. Interner Cooldown beginnt mit Auslösung: 90 Sekunden, −1 je weiterer Stufe bis 81 auf Stufe 10. Die Wirkung stapelt nicht und wird nicht durch neue Auslösungen verlängert. Ein Anstieg auf mindestens 50 Prozent Mana beendet eine bereits laufende Wirkung nicht vorzeitig. |
| description_eng | While below50 percent maximum Mana, successful own basic attacks or direct attack skills have a chance of 0.5 percent per learned skill level per attack action (0.5 percent at level 1, increasing by 0.5 percentage points per additional level to 5 percent at level 10) to trigger Fiery Passion when ready. Dual weapons, multi-hit skills and multiple targets do not grant extra rolls; periodic and companion damage cannot trigger it. Duration10 seconds at all ten levels. Each successful own basic-attack action during the effect deals2 additional flat magical fire damage per skill level, up to20, and restores5 Mana once. No magical-attack contribution to this flat bonus. Attack skills can trigger the passive but do not receive its bonus damage or Mana return. No activation cost. Internal cooldown starts on trigger:90 seconds minus1 per additional level to81. No stacking or refreshing. Recovering to50 percent Mana or above does not end an already active effect. |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 90 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | triggerCondition |
| levelProgression.rules[1].path[1] | chancePerCheckScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,005 |
| levelProgression.rules[1].rule.perLevel | 0,005 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 2 |
| levelProgression.rules[2].rule.perLevel | 2 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 258: Erdsäule

Hebt unter dir eine steinerne Säule aus dem Boden und trägt dich mit nach oben. Nach 0,2 Sekunden Castzeit folgen 0,1 Sekunden gebundenes Weiterzaubern für die erste Anhebung. Kleine Felsspitzen verursachen einmalig 231 physischen Grundschaden, +109 je weiterer Stufe bis 1212, zuzüglich einmal deines P-Angriffs. Getroffene Gegner werden nach außen weggeschoben und 0,5 Sekunden betäubt. Die Säule fährt anschließend in vorläufig 0,85 Sekunden auf etwa 1 bis 1,5 Meter hoch und bleibt danach 5 Sekunden stehen. Ab Stufe 6 brechen beim vollständigen Ausfahren größere Spitzen um die Säule hervor: einmalig 273 zusätzlicher physischer Schaden ohne weiteren P-Angriff oder weitere Betäubung. Beide Phasen prüfen die dann anwesenden Gegner; entkommene Gegner werden nicht automatisch erneut getroffen. Cooldown ab Abschluss des gebundenen Zauberns: 38 bis 29 Sekunden, läuft während des Hochfahrens und der Standdauer. Mana je Anwendung: gerundet 25 Prozent des gesamten Grundschadens ohne P-Angriff, 58 bis 371. Weisheit des Salamanders erhöht beide physischen Schadensphasen und reduziert als allgemeiner Skillrabatt auch die Mana-Kosten. Kein DoT. Die Säule ist kein gültiger Boden für weitere Erdsäulen. Genaue Höhe, Radien, Wegschubstrecke und Höheninteraktion mit anderen Skills werden später im Spiel abgestimmt.

| Feld | Gespeicherter Wert |
| --- | --- |
| nr | 258 |
| skillName_de | Erdsäule |
| skillName_eng | Earth Pillar |
| category | active |
| dmgType (Altformat) | physical |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| skillpoints | 1 |
| patk | 231 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 231 |
| statScaling.patk.perLevel | 109 |
| mana (Aktivierungskosten, kein Bonus) | 58 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 58 |
| resourceCosts[0].scaling.values[0] | 58 |
| resourceCosts[0].scaling.values[1] | 85 |
| resourceCosts[0].scaling.values[2] | 112 |
| resourceCosts[0].scaling.values[3] | 140 |
| resourceCosts[0].scaling.values[4] | 167 |
| resourceCosts[0].scaling.values[5] | 262 |
| resourceCosts[0].scaling.values[6] | 290 |
| resourceCosts[0].scaling.values[7] | 317 |
| resourceCosts[0].scaling.values[8] | 344 |
| resourceCosts[0].scaling.values[9] | 371 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| castTimeSeconds | 0,2 |
| cd | 38 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 38 |
| cooldownScaling.perLevel | -1 |
| dur | 5,85 |
| hasLingeringDamage | false |
| attackExecution.channelTimeSeconds | 0,1 |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perApplication |
| attackExecution.hitTimingStatus | defined |
| attackExecution.knockbackDirection | awayFromCaster |
| attackExecution.knockbackAppliesOnSuccessfulHit | true |
| attackExecution.knockbackResistanceStatus | pending |
| attackExecution.terrainPlatform.riseSeconds | 0,85 |
| attackExecution.terrainPlatform.standingSeconds | 5 |
| attackExecution.terrainPlatform.heightRangeMeters.min | 1 |
| attackExecution.terrainPlatform.heightRangeMeters.max | 1,5 |
| attackExecution.terrainPlatform.liftsCaster | true |
| attackExecution.terrainPlatform.supportsFurtherTerrainSkills | false |
| attackExecution.terrainPlatform.geometryStatus | pending |
| attackExecution.terrainPlatform.cooldownRunsDuringLifetime | true |
| attackExecution.damagePhases[0].stat | patk |
| attackExecution.damagePhases[0].timing | castEnd |
| attackExecution.damagePhases[0].offsetSeconds | 0 |
| attackExecution.damagePhases[0].target | enemiesInArea |
| attackExecution.damagePhases[0].addsCasterAttack | true |
| attackExecution.damagePhases[1].stat | patk |
| attackExecution.damagePhases[1].timing | castEnd |
| attackExecution.damagePhases[1].offsetSeconds | 0,85 |
| attackExecution.damagePhases[1].minimumSkillLevel | 6 |
| attackExecution.damagePhases[1].baseDamage | 273 |
| attackExecution.damagePhases[1].target | enemiesInArea |
| attackExecution.damagePhases[1].addsCasterAttack | false |
| attackArea.shape | circle |
| attackArea.center | caster |
| attackArea.centerTracking | casterStartPosition |
| attackArea.geometryStatus | pending |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | perHit |
| effectsVersion | 1 |
| effects[0].key | earth-pillar-initial-stun |
| effects[0].type | control |
| effects[0].controlKind | stun |
| effects[0].target | enemiesInArea |
| effects[0].durationSeconds | 0,5 |
| effects[0].applicationDelaySeconds | 0 |
| description_de | Hebt unter dir eine steinerne Säule aus dem Boden und trägt dich mit nach oben. Nach 0,2 Sekunden Castzeit folgen 0,1 Sekunden gebundenes Weiterzaubern für die erste Anhebung. Kleine Felsspitzen verursachen einmalig 231 physischen Grundschaden, +109 je weiterer Stufe bis 1212, zuzüglich einmal deines P-Angriffs. Getroffene Gegner werden nach außen weggeschoben und 0,5 Sekunden betäubt. Die Säule fährt anschließend in vorläufig 0,85 Sekunden auf etwa 1 bis 1,5 Meter hoch und bleibt danach 5 Sekunden stehen. Ab Stufe 6 brechen beim vollständigen Ausfahren größere Spitzen um die Säule hervor: einmalig 273 zusätzlicher physischer Schaden ohne weiteren P-Angriff oder weitere Betäubung. Beide Phasen prüfen die dann anwesenden Gegner; entkommene Gegner werden nicht automatisch erneut getroffen. Cooldown ab Abschluss des gebundenen Zauberns: 38 bis 29 Sekunden, läuft während des Hochfahrens und der Standdauer. Mana je Anwendung: gerundet 25 Prozent des gesamten Grundschadens ohne P-Angriff, 58 bis 371. Weisheit des Salamanders erhöht beide physischen Schadensphasen und reduziert als allgemeiner Skillrabatt auch die Mana-Kosten. Kein DoT. Die Säule ist kein gültiger Boden für weitere Erdsäulen. Genaue Höhe, Radien, Wegschubstrecke und Höheninteraktion mit anderen Skills werden später im Spiel abgestimmt. |
| description_eng | Raises a stone pillar beneath you, carrying you upward. A 0.2-second cast is followed by 0.1 seconds of continued channeling for the initial lift. Small rock spikes deal 231 physical base damage plus 109 per additional level, up to 1212, plus your physical attack once. Enemies hit are pushed outward and stunned for 0.5 seconds. The pillar then rises over a provisional 0.85 seconds to roughly 1 to 1.5 meters and remains standing for 5 seconds. From level 6, larger spikes erupt around the fully raised pillar, dealing an additional 273 physical damage once, without another physical-attack contribution or stun. Each phase checks enemies currently in its area; escaping enemies are not automatically hit again. Cooldown starts when channeling finishes: 38 seconds minus 1 per additional level to 29, running during ascent and standing time. Mana is rounded from 25 percent of total base damage, excluding character attack: 58 to 371. Wisdom of the Salamander boosts both physical phases and its general skill Mana discount applies. No damage over time. The pillar cannot serve as ground for another pillar. Exact height, radii, push distance and interactions with other skills at different elevations remain subject to in-game tuning. |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | patk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 231 |
| levelProgression.rules[0].rule.perLevel | 109 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | outputCost |
| levelProgression.rules[1].rule.factor | 0,25 |
| levelProgression.rules[1].rule.basis | damage |
| levelProgression.rules[1].rule.minimum | 0 |
| levelProgression.rules[1].source | verifiedManaPricing |
| levelProgression.rules[2].path[0] | cooldownScaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0,1 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 38 |
| levelProgression.rules[2].rule.rule.perLevel | -1 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 259: Weisheit des Erdweisen

Dauerhafter Attributanteil: je gelernter Stufe +2 Stärke, +1,6 Vitalität, +2 Intelligenz; auf Stufe 5 insgesamt +10 Stärke, +8 Vitalität, +10 Intelligenz. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Zusätzlich je Stufe 0,6 % mehr gesamte Mana-Regeneration, maximal 3 %, nach flachen Boni und Willenskraftumrechnung. Kein fester Willenskraftbonus.

| Feld | Gespeicherter Wert |
| --- | --- |
| nr | 259 |
| skillName_de | Weisheit des Erdweisen |
| skillName_eng | Wisdom of the Earth Sage |
| category | passive |
| dmgType (Altformat) | passive |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| skillpoints | 1 |
| resourceCosts | [] |
| str | 2 |
| int | 2 |
| statScaling.str.type | linear |
| statScaling.str.base | 2 |
| statScaling.str.perLevel | 2 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 1,6 |
| statScaling.vita.perLevel | 1,6 |
| statScaling.int.type | linear |
| statScaling.int.base | 2 |
| statScaling.int.perLevel | 2 |
| effectsVersion | 1 |
| effects[0].key | archdruid-mana-regeneration |
| effects[0].type | statModifier |
| effects[0].target | self |
| effects[0].stat | manaRegen |
| effects[0].value | 0,006 |
| effects[0].unit | fraction |
| effects[0].durationSeconds | 0 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0,006 |
| effects[0].valueScaling.perLevel | 0,006 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +2 Stärke, +1,6 Vitalität, +2 Intelligenz; auf Stufe 5 insgesamt +10 Stärke, +8 Vitalität, +10 Intelligenz. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Zusätzlich je Stufe 0,6 % mehr gesamte Mana-Regeneration, maximal 3 %, nach flachen Boni und Willenskraftumrechnung. Kein fester Willenskraftbonus. |
| description_eng | Permanent attribute component: +2 Strength, +1.6 Vitality, +2 Intelligence per learned level; at level 5, +10 Strength, +8 Vitality, +10 Intelligence total. This component always applies independently of any triggered effects. Also increases total Mana regeneration by 0.6% per level, up to 3%, after flat bonuses and Wisdom conversion. No fixed Wisdom bonus. |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.perLevel | 2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | vita |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1,6 |
| levelProgression.rules[1].rule.perLevel | 1,6 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | int |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 2 |
| levelProgression.rules[2].rule.perLevel | 2 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | valueScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 0,006 |
| levelProgression.rules[3].rule.perLevel | 0,006 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |
| vita | 1,6 |

### 263: Stoßgebet

Trifft ein gegnerisches Ziel einmal mit magischem Schaden: 143/219/295 Skill-Grundschaden auf den drei Stufen, jeweils zuzüglich des aktuellen M-Angriffs. Nach einem erfolgreichen Treffer fliegt eine grüne Kugel vom Ziel zum Schamanen zurück und teilt sich zu höchstens zwei weiteren Verbündeten innerhalb von 2,5 Metern um den Schamanen auf. Der Schamane und diese Verbündeten werden jeweils um feste 240 Leben geheilt, maximal 720 insgesamt. Fehlende Empfänger erhöhen die Heilung anderer Empfänger nicht. Die Heilung skaliert weder mit dem Schaden noch mit M-Angriff oder kritischen Treffern und setzt einen erfolgreichen Treffer voraus. Keine eigene Heilerrolle; kleine situative Unterstützung. Mana 36/55/74 nach der 25-Prozent-Regel aus dem Skill-Grundschaden ohne Charakterangriff und ohne zusätzlichen Heilaufschlag. Castzeit 0,1 Sekunden, Cooldown 54/49/44 Sekunden. Keine anhaltende Wirkung. Orb-Flugzeit und Auswahl zwischen mehr als zwei geeigneten Verbündeten bleiben für die Umsetzung offen.

| Feld | Gespeicherter Wert |
| --- | --- |
| nr | 263 |
| attackExecution.targetMode | singleEnemy |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.timingStatus | pending |
| castTimeSeconds | 0,1 |
| castTimeStatus | defined |
| category | active |
| cd | 54 |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| classificationVersion | 1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 54 |
| cooldownScaling.perLevel | -5 |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| damageType | magical |
| description_de | Trifft ein gegnerisches Ziel einmal mit magischem Schaden: 143/219/295 Skill-Grundschaden auf den drei Stufen, jeweils zuzüglich des aktuellen M-Angriffs. Nach einem erfolgreichen Treffer fliegt eine grüne Kugel vom Ziel zum Schamanen zurück und teilt sich zu höchstens zwei weiteren Verbündeten innerhalb von 2,5 Metern um den Schamanen auf. Der Schamane und diese Verbündeten werden jeweils um feste 240 Leben geheilt, maximal 720 insgesamt. Fehlende Empfänger erhöhen die Heilung anderer Empfänger nicht. Die Heilung skaliert weder mit dem Schaden noch mit M-Angriff oder kritischen Treffern und setzt einen erfolgreichen Treffer voraus. Keine eigene Heilerrolle; kleine situative Unterstützung. Mana 36/55/74 nach der 25-Prozent-Regel aus dem Skill-Grundschaden ohne Charakterangriff und ohne zusätzlichen Heilaufschlag. Castzeit 0,1 Sekunden, Cooldown 54/49/44 Sekunden. Keine anhaltende Wirkung. Orb-Flugzeit und Auswahl zwischen mehr als zwei geeigneten Verbündeten bleiben für die Umsetzung offen. |
| description_eng | Hits one enemy for 143/219/295 magical base skill damage across three levels, plus current magical attack. After a successful hit, a green orb returns from the target to the Shaman and splits toward up to two additional allies within 2.5 meters of the caster. The caster and those allies each recover a fixed 240 Health, up to 720 total. Missing recipients do not increase healing received by others. Healing does not scale with damage, magical attack or critical hits and requires a successful hit. Small situational support. Mana 36/55/74 follows the 25% base-damage rule, excluding character attack and without an additional healing surcharge. Cast time 0.1 seconds; cooldown 54/49/44 seconds. No ongoing effect. Orb travel time and selection among more than two eligible allies remain pending. |
| dmgType (Altformat) | spell |
| effects[0].key | prayer-caster-heal |
| effects[0].type | heal |
| effects[0].target | self |
| effects[0].value | 240 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 0 |
| effects[0].requiresSuccessfulHit | true |
| effects[0].delivery | returningOrb |
| effects[1].key | prayer-allied-heal |
| effects[1].type | heal |
| effects[1].target | alliesInArea |
| effects[1].value | 240 |
| effects[1].unit | flat |
| effects[1].durationSeconds | 0 |
| effects[1].requiresSuccessfulHit | true |
| effects[1].delivery | returningOrb |
| effects[1].areaCenter | caster |
| effects[1].radiusMeters | 2,5 |
| effects[1].maximumRecipients | 2 |
| effects[1].excludesCaster | true |
| hasLingeringDamage | false |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | matk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 143 |
| levelProgression.rules[0].rule.perLevel | 76 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | cooldownScaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0,1 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 54 |
| levelProgression.rules[1].rule.rule.perLevel | -5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | outputCost |
| levelProgression.rules[2].rule.factor | 0,25 |
| levelProgression.rules[2].rule.basis | damage |
| levelProgression.rules[2].rule.minimum | 0 |
| levelProgression.rules[2].source | verifiedManaPricing |
| levelProgression.extensionNeedsDefinition | [] |
| mana (Aktivierungskosten, kein Bonus) | 36 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| matk | 143 |
| maxSkillLv | 3 |
| maxUpgradeLv | 10 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 36 |
| resourceCosts[0].scaling.values[0] | 36 |
| resourceCosts[0].scaling.values[1] | 55 |
| resourceCosts[0].scaling.values[2] | 74 |
| skillName_de | Stoßgebet |
| skillName_eng | Fervent Prayer |
| skillpoints | 1 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 143 |
| statScaling.matk.perLevel | 76 |
| type | skill |

## Gemeinsame Blöcke

[Kreaturenskills](../shared-creature-skills.md) und [Trainingsskills](../shared-training-skills.md) werden einmal gemeinsam geprüft. Die normale Lerngrenze für Bindung und Zucht ist bereits 1. Taming hat noch keine klassenspezifische Lerngrenze im Datensatz; der geplante Schamane-Maximalwert 1 ist deshalb nur als Plan markiert.

## Reihenfolge

Zuerst die noch unvollständigen Schamanen-Skills durchgehen, gemeinsame geprüfte Definitionen übernehmen, anschließend permanente Passive auf den Ausrüstungsstand rechnen. Aktive Buffs, automatische Kampf-Procs und endgültige Schadensverrechnung folgen separat.

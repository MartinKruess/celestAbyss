# Schurke / Schattenkrieger: Werte und Skillprüfung

<!-- skill-learning-overview:start -->
## Skills nach Lernlevel

Die erste Spalte zeigt das aktuell gespeicherte Lernlevel dieser Klasse. Sortiert nach Lernlevel; noch offene Vorschläge stehen am vorgesehenen Platz. „Offen“ bedeutet: noch kein verbindliches Lernlevel gespeichert. Bereits übernommene Vorschläge werden nicht doppelt angezeigt. Weitere Skillstufen verteilen wir getrennt; „Skillstufen“ bezeichnet die lernbare Ausbaustufe, nicht das Charakterlevel.

Die SP-Spalte zeigt die Kosten der ersten Skillstufe. Die vollständigen Kosten stehen in der Tabelle „Skillpunktkosten je Stufe“. Regulär kostet der vollständige Ausbau 300 SP, ab erstem Lernlevel 55 insgesamt 400 SP; Taming-Skills behalten günstige Sonderkosten. Das alte Feld `skillpoints` und frühere Pauschalsummen sind historisch.

| Ab Charakterlevel | Skill | Noch offene Planung | Weitere Skillstufen ab Charakterlevel | Nr | Lernbare Skillstufen | SP erste Stufe |
| ---: | --- | ---: | --- | ---: | ---: | ---: |
| 1 | Überleben | — | — | 2 | 20 | 1 |
| 2 | Ausdauertraining | — | — | 139 | 20 | 1 |
| 2 | Waffentraining | — | — | 201 | 20 | 1 |
| 4 | Bindung | — | — | 134 | 1 | 6 |
| 4 | Kontrolle | — | — | 135 | 1 | 4 |
| 4 | Rüstungstraining | — | — | 144 | 10 | 1 |
| 4 | Zucht | — | — | 138 | 1 | 5 |
| 5 | Beschwören | — | — | 136 | 1 | 1 |
| 5 | Tamen | — | — | 133 | 1 | 10 |
| 5 | Zurückrufen | — | — | 137 | 1 | 1 |
| 6 | Dunkler Schlag | — | — | 27 | 20 | 12 |
| 9 | Erweiterung der Sinne | — | — | 43 | 10 | 12 |
| 10 | Kunai Todesstoß | — | — | 70 | 5 | 30 |
| 12 | Blutklinge | — | — | 17 | 10 | 10 |
| 15 | Dolchtraining | — | — | 22 | 10 | 10 |
| 21 | Dunkler Schleier | — | — | 188 | 2 | 130 |
| 22 | Schattenfalle | — | — | 91 | 10 | 10 |
| 23 | Schattenschlag | — | — | 92 | 10 | 10 |
| 25 | Flinke Füße | — | — | 191 | 3 | 80 |
| 27 | Schattendolch | — | — | 90 | 15 | 6 |
| 30 | List des Schurken | — | — | 146 | 10 | 10 |
| 33 | Körperbeherrschung | — | — | 67 | 10 | 10 |
| 37 | Beweglichkeit | — | — | 80 | 10 | 10 |
| 37 | Brecher des Lichts | — | — | 20 | 10 | 10 |
| 42 | Sturmklinge | — | — | 111 | 10 | 10 |
| 42 | Überschallklinge | — | — | 115 | 10 | 10 |
| 47 | Klingentornado | — | — | 65 | 10 | 10 |
| 47 | Wirbelnde Klinge | — | — | 126 | 10 | 10 |
| 55 | Attentäter | — | — | 238 | 10 | 13 |
| 60 | Herz des Verräters | — | — | 189 | 5 | 40 |
| 60 | Technische Perfektion | — | — | 243 | 4 | 60 |
| 65 | Tödlicher Tanz | — | — | 113 | 10 | 13 |

[Alte Lernlevel als Vorlage](../legacy-skill-learning-levels.md) · [Alle Klassen](../skill-learning-index.md)
<!-- skill-learning-overview:end -->

**32 Skills, 280 Skillpunkte; Ziel von 280 erreicht.** Dunkler Schlag hat 20 Stufen bei unveränderten Start- und Maximalwerten: 41 bis 279 Grundschaden, 10 bis 66 Mana, 28 bis 14 Sekunden Cooldown. Überschallklinge hat zehn Stufen und erreicht die Werte der früheren Skalierung auf Stufe 6: maximal 1786 Grundschaden, 447 Mana und 105 Sekunden Cooldown. Schaden, Mana und Cooldown werden ganzzahlig über die Stufen verteilt; Mana der Überschallklinge folgt gerundet der 25%-Regel. Paralyse bleibt auf allen Stufen bei 0,5 Sekunden. Kunai-Todesstoß hat fünf Stufen mit 17/25/34/42/50 Grundschaden. Ab Stufe 2 gelten die 6%-Lebensschwelle und der bedingte 1,5-fache Schaden, ab Stufe 4 drei Anwendungen und auf Stufe 5 die bedingte Rüstungsignorierung. Start- und Maximalwirkung bleiben erhalten.

Einteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.

**32 unterschiedliche zugeordnete Skills: 21 aktive und 11 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie bei den bisher geprüften Klassen. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.

| Art | Anzahl | Skills |
| --- | ---: | --- |
| Übrige Passive einschließlich Procs | 8 | Überleben, Dolchtraining, Erweiterung der Sinne, Körperbeherrschung, Ausdauertraining, Rüstungstraining, Waffentraining, Technische Perfektion |
| Aktive Skills (Angriff/Heilung/Unterstützung) | 12 | Blutklinge, Brecher des Lichts, Dunkler Schlag, Klingentornado, Kunai Todesstoß, Schattendolch, Schattenfalle, Schattenschlag, Sturmklinge, Tödlicher Tanz, Überschallklinge, Wirbelnde Klinge |
| Eigenbuffs | 5 | Beweglichkeit, List des Schurken, Dunkler Schleier, Herz des Verräters, Attentäter |
| Kreaturen aktiv | 3 | Tamen, Beschwören, Zurückrufen |
| Kreaturen passiv | 3 | Bindung, Kontrolle, Zucht |
| Gruppenbuffs | 1 | Flinke Füße |

## Technische Perfektion und Attentäter

Technische Perfektion hat vier Stufen: je aktuellem Geschickpunkt +1/+2/+3/+4 Max-Mana. Bei 55 bekannten Geschickpunkten ergibt das 55/110/165/220 zusätzliches Max-Mana. Gegenüber der bisherigen Maximalwirkung sind das auf neuer Stufe 4 zusätzliche 110 Mana. Keine direkte Mana-Wiederherstellung oder zusätzliche Regeneration. Attentäter gewährt auf zehn Stufen 0 bis 10 % zusätzliche Angriffsgeschwindigkeit; der Ambush-Bonus dieses Skills entfällt vollständig. Kosten, Dauer, Cooldown und Mana-Rückgewinnung mit Herz des Verräters bleiben unverändert.

## Basis und Ausrüstung

R1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.

### Basis ohne Ausrüstung

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 166 | 436 | 736 | 1.036 | 1.336 | 1.636 | 1.936 |
| Mana | 134 | 404 | 704 | 1.004 | 1.304 | 1.604 | 1.904 |
| P-Angriff | 11 | 27,2 | 45,2 | 63,2 | 81,2 | 99,2 | 117,2 |
| M-Angriff | 6 | 22,2 | 40,2 | 58,2 | 76,2 | 94,2 | 112,2 |
| P-Defense | 5 | 23 | 43 | 63 | 83 | 103 | 123 |
| M-Defense | 8 | 26 | 46 | 66 | 86 | 106 | 126 |

### Mit Rüstung und zwei Dolchen

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 516 | 786 | 1.261 | 1.736 | 2.211 | 2.861 | 3.686 |
| Mana | 459 | 729 | 1.189 | 1.594 | 2.039 | 2.454 | 2.954 |
| P-Angriff | 26,2 | 42,4 | 78,64 | 120,96 | 176,58 | 255 | 380,16 |
| M-Angriff | 6 | 22,2 | 40,2 | 58,2 | 76,2 | 94,2 | 112,2 |
| P-Defense | 67 | 85 | 142 | 191 | 289 | 426 | 644 |
| M-Defense | 59 | 77 | 140 | 199 | 306 | 401 | 498 |

Zwei Dolche sind angesetzt: Hauptwaffe 100 Prozent, Zweitwaffe 90 Prozent einschließlich des Ambush-Beitrags. Equipment-Vorschläge sind nicht übernommen. Grundregeneration: 25 Mana und 12 HP pro Tick. Das Intervall wird später in Unreal geprüft. Bestehende gemeinsame Skillwerte werden übernommen; fehlende Werte werden nicht geschätzt.

## Skillübersicht

| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | Überleben | Passive | 20 | HP-Regeneration +0,5<br>Stärke +0,5<br>Agility +0,25<br>Dexterity +0,25 | Stärke: 0,5 bis 10<br>Agility: 0,25 bis 5<br>Dexterity: 0,25 bis 5<br>manaRegen: 0,5 bis 10<br>HP-Regeneration: 0,5 bis 10 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 139 | Ausdauertraining | Passive | 20 | Vita +1<br>Wisdom +1 | Vita: 1 bis 20<br>Wisdom: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 201 | Waffentraining | Passive | 20 | P-Angriff +1<br>M-Angriff +1 | P-Angriff: 1 bis 20<br>M-Angriff: 1 bis 20 | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 134 | Bindung | Passive | 3 / Schurke 1 | Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.<br>statModifier, Ziel companion, str, 10<br>statModifier, Ziel companion, vita, 10<br>statModifier, Ziel companion, int, 10<br>statModifier, Ziel companion, wis, 10 | statModifier/str: 10 bis 20<br>statModifier/vita: 10 bis 20<br>statModifier/int: 10 bis 20<br>statModifier/wis: 10 bis 20 | Keine | Entfällt | Entfällt | str: 0 s<br>vita: 0 s<br>int: 0 s<br>wis: 0 s | Gemeinsame Definition |
| 135 | Kontrolle | Passive | 2 / Schurke 1 | Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen. | Nicht vollständig gespeichert | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition; Levelskalierung prüfen |
| 144 | Rüstungstraining | Passive | 10 | P-Defense +3<br>M-Defense +6 | P-Defense: 3 bis 30<br>M-Defense: 6 bis 60 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 138 | Zucht | Passive | 3 / Schurke 1 | Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.<br>experienceBonus, Ziel companion, 0,1 | experienceBonus/: 10 bis 30 % | Keine | Entfällt | Entfällt | experienceBonus: 0 s | Gemeinsame Definition |
| 136 | Beschwören | Skill | 1 | Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 1 | Nicht gespeichert | Gemeinsame Definition |
| 133 | Tamen | Skill | 3 / Schurke 1 | Versucht, eine Kreatur zu zähmen. Erfordert eine zur Kreaturenvariante passende Zähmungskarte. Die Grundchance wird von der jeweiligen Kreaturenvariante vorgegeben. Tamen multipliziert diese Chance auf Stufe 1 mit 1,0, auf Stufe 2 mit 1,1 und auf Stufe 3 mit 1,2; keine zusätzlichen Prozentpunkte und keine eigene feste Grunderfolgschance. Bei 1 Prozent Grundchance ergeben sich 1 / 1,1 / 1,2 Prozent Erfolgschance je Versuch. Die Formel steigt bei später autorisierten zusätzlichen effektiven Skillstufen um 0,1 je Stufe weiter. Die Definition hat weiterhin drei lernbare Stufen: normale Klassen maximal Stufe 1, Abenteurer maximal Stufe 3; eine zweite Spezialklasse ist noch nicht festgelegt. Mana 100 / 125 / 150, Castzeit 3 / 2,5 / 2 Sekunden und Cooldown 60 / 50 / 40 Sekunden. Kein Schaden und keine anschließende Effektdauer. Konkrete Kreaturen-Grundchancen, Kartenzuordnungen, Itemverbrauch, Zieldistanz und Abbruchbedingungen sind noch festzulegen. | Chancenfaktor ×1,0 / ×1,1 / ×1,2; normale Lerngrenze 1 | Mana-Kosten: 100 bis 150 | 60 bis 40 | 3 bis 2 | 0 (keine anschließende Wirkung) | Gemeinsame Definition; Levelskalierung prüfen |
| 137 | Zurückrufen | Skill | 1 | Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 0 | Nicht gespeichert | Gemeinsame Definition |
| 27 | Dunkler Schlag | Skill / physisch | 20 | P-Angriff +41 | P-Angriff: 41 bis 279 | Mana-Kosten: 10 bis 66 | 28 bis 14 | 0 | 0 (einmalig) | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 43 | Erweiterung der Sinne | Passive | 10 | Vita +0,5<br>Wisdom +0,5<br>Agility +1<br>Dexterity +1 | Dexterity: 1 bis 10<br>Agility: 1 bis 10<br>Vita: 0,5 bis 5<br>Wisdom: 0,5 bis 5 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 70 | Kunai Todesstoß | Skill / physisch | 5 | P-Angriff +17<br>Animation 1 s (vorläufig)<br>Ein einzelnes Ziel | P-Angriff: 17 bis 50 | Mana-Kosten: 0 bis 0 | 16 | 0 | Wirkung einmalig; Animation 1 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 17 | Blutklinge | Skill / physisch | 10 | HP +0,02<br>P-Angriff +100<br>heal, Ziel self, 0,02<br>Animation 0,5 s (vorläufig) | P-Angriff: 100 bis 757<br>heal/: 2 bis 6,5 % | Mana-Kosten: 25 bis 189 | 80 bis 71 | 0.1 | heal: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 22 | Dolchtraining | Passive | 10 | Stärke +1<br>Agility +2 | Agility: 2 bis 7<br>Stärke: 1 bis 5 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 188 | Dunkler Schleier | Selbstbuff | 2 | Movement Speed +3 % | Movement Speed: 3 % bis 5 % | Mana-Kosten: 50 bis 63 | 120 bis 90 | 0.1 | 5 bis 8 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 91 | Schattenfalle | Skill / physisch | 10 | P-Angriff +171<br>control, Ziel enemy, 1 | P-Angriff: 171 bis 648 | Mana-Kosten: 43 bis 160 | 36 | 0.2 | dazed: 0,5 bis 1,5 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 92 | Schattenschlag | Skill / physisch | 10 | P-Angriff +253 | P-Angriff: 253 bis 901 | Mana-Kosten: 63 bis 225 | 33 | 0.1 | 0 (einmalig) | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 191 | Flinke Füße | Buff | 3 | Movement Speed +1 | Movement Speed: 1 bis 10 | Mana-Kosten: 47 bis 85 | 60 | 0.2 | 600 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 90 | Schattendolch | Skill / physisch | 15 | P-Angriff +94 | P-Angriff: 94 bis 808 | Mana-Kosten: 24 bis 206 | 9 | 0.1 | 0 (einmalig) | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 146 | List des Schurken | Selbstbuff | 10 | Luck +1<br>Ambush +6 | Luck: 1 bis 5,5<br>Ambush: 6 bis 15 | Mana-Kosten: 50 bis 167 | 60 | 0.1 | 300 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 67 | Körperbeherrschung | Passive | 10 | Agility +0,5<br>Dexterity +1<br>resourceCostReduction, Ziel self, 0,01 | Dexterity: 1 bis 10<br>Agility: 0,5 bis 5<br>resourceCostReduction/: 1 bis 3 % | Keine | Entfällt | Entfällt | resourceCostReduction: 0 s | Gemeinsame Definition |
| 80 | Beweglichkeit | Selbstbuff | 10 | Movement Speed +1 % | Agility: 0 bis 5<br>Movement Speed: 1 % bis 10 % | Mana-Kosten: 50 bis 167 | 120 bis 102 | 0.1 | 20 bis 24,5 | Gemeinsame Definition |
| 20 | Brecher des Lichts | Skill / physisch | 10 | P-Angriff +234<br>conditionalCriticalHit, Ziel enemy, 1<br>Animation 0,5 s (vorläufig) | P-Angriff: 234 bis 567 | Mana-Kosten: 164 bis 398 | 52 bis 43 | 0 | conditionalCriticalHit: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 111 | Sturmklinge | Skill / physisch | 10 | P-Angriff +333<br>Animation 0,5 s (vorläufig)<br>Ein einzelnes Ziel | P-Angriff: 333 bis 1.332 | Mana-Kosten: 83 bis 335 | 77 bis 59 | 0.1 | Wirkung einmalig; Animation 0,5 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 115 | Überschallklinge | Skill / physisch | 10 | P-Angriff +636<br>control, Ziel enemy | P-Angriff: 636 bis 1.786 | Mana-Kosten: 159 bis 447 | 120 bis 105 | 0.1 | paralysis: 0,5 s | Gemeinsame Definition |
| 65 | Klingentornado | Skill / physisch | 10 | P-Angriff +113<br>Animation 4 s (vorläufig)<br>Fläche: undefined m vor Spieler | P-Angriff: 113 bis 482 | Mana-Kosten: 113 bis 482 | 75 bis 66 | 0.1 | Wirkung einmalig; Animation 4 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 126 | Wirbelnde Klinge | Skill / physisch | 10 | P-Angriff +277<br>Fläche: 3 m vor Spieler | P-Angriff: 277 bis 592 | Mana-Kosten: 346 bis 742 | 75 bis 57 | 0.1 | Nicht gespeichert | Gemeinsame Definition |
| 238 | Attentäter | Selbstbuff | 10 | Attack Speed +0 % | Attack Speed: 0 % bis 10 % | Mana-Kosten: 50 bis 167 | 120 | 0.1 | 11 bis 20 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 189 | Herz des Verräters | Selbstbuff | 5 | Attack Speed +0 %<br>Movement Speed +2 %<br>resourceGain, Ziel self, 12 | Attack Speed: 0 % bis 5 %<br>Movement Speed: 2 % bis 5 % | Mana-Kosten: 50 bis 102 | 60 | 0.1 | resourceGain: 600 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 243 | Technische Perfektion | Passive | 4 | Stärke +3,25<br>Fläche: undefined m vor Spieler | Stärke: 3,25 bis 13 | Keine | Offen | Entfällt | Nicht gespeichert | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 113 | Tödlicher Tanz | Skill / physisch | 10 | P-Angriff +138<br>Animation 0,3 s (vorläufig)<br>Fläche: 3,5 m Radius um Spieler | P-Angriff: 138 bis 471 | Mana-Kosten: 104 bis 942 | 68 | 0.1 | Wirkung einmalig; Animation 0,3 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |

## Detaildaten

Gemeinsame Werte werden nicht neu erfunden. Jeder Block zeigt den vollständigen gespeicherten Stand außer der technischen Mongo-ID.

### 2: Überleben

Permanenter passiver Umbra-Grundskill mit 20 Stufen. Je gelernter Stufe +0,5 Stärke, +0,25 Agilität und +0,25 Geschicklichkeit. Auf Stufe 20: +10 Stärke, +5 Agilität und +5 Geschicklichkeit. Direkte HP- und MP-Regeneration bleiben jeweils bei +0,5 je Stufe, auf Stufe 20 jeweils +10 je zugehörigem Regenerationstick. Diese Boni werden zur Grundregeneration und anderen Boni addiert. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 1 |
| skillPointCosts.rankCosts.0 | 1 |
| skillPointCosts.rankCosts.1 | 2 |
| skillPointCosts.rankCosts.2 | 4 |
| skillPointCosts.rankCosts.3 | 5 |
| skillPointCosts.rankCosts.4 | 7 |
| skillPointCosts.rankCosts.5 | 8 |
| skillPointCosts.rankCosts.6 | 10 |
| skillPointCosts.rankCosts.7 | 11 |
| skillPointCosts.rankCosts.8 | 13 |
| skillPointCosts.rankCosts.9 | 14 |
| skillPointCosts.rankCosts.10 | 16 |
| skillPointCosts.rankCosts.11 | 17 |
| skillPointCosts.rankCosts.12 | 19 |
| skillPointCosts.rankCosts.13 | 20 |
| skillPointCosts.rankCosts.14 | 22 |
| skillPointCosts.rankCosts.15 | 23 |
| skillPointCosts.rankCosts.16 | 25 |
| skillPointCosts.rankCosts.17 | 26 |
| skillPointCosts.rankCosts.18 | 28 |
| skillPointCosts.rankCosts.19 | 29 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| skillName_eng | Survive |
| agi | 0,25 |
| category | Umbra |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| charClass[2] | Summoner |
| charClass[3] | Soulseeker |
| charClass[4] | Ritualist |
| charClass[5] | Bloodmage |
| charClass[6] | Villian |
| charClass[7] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanenter passiver Umbra-Grundskill mit 20 Stufen. Je gelernter Stufe +0,5 Stärke, +0,25 Agilität und +0,25 Geschicklichkeit. Auf Stufe 20: +10 Stärke, +5 Agilität und +5 Geschicklichkeit. Direkte HP- und MP-Regeneration bleiben jeweils bei +0,5 je Stufe, auf Stufe 20 jeweils +10 je zugehörigem Regenerationstick. Diese Boni werden zur Grundregeneration und anderen Boni addiert. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent passive Umbra core skill with 20 levels. Each learned level grants +0.5 Strength, +0.25 Agility and +0.25 Dexterity. At level 20: +10 Strength, +5 Agility and +5 Dexterity. Direct Health and Mana regeneration each remain +0.5 per level, reaching +10 each per associated regeneration tick. Additive with base regeneration and other bonuses. No activation costs, cast time or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 2 |
| skillName_de | Überleben |
| skillpoints | 1 |
| str | 0,5 |
| allowedRaces[0] | Umbra |
| isClassCore | true |
| unlockPhase | race |
| resourceCosts | [] |
| statScaling.str.type | linear |
| statScaling.str.base | 0,5 |
| statScaling.str.perLevel | 0,5 |
| statScaling.agi.type | linear |
| statScaling.agi.base | 0,25 |
| statScaling.agi.perLevel | 0,25 |
| statScaling.dex.type | linear |
| statScaling.dex.base | 0,25 |
| statScaling.dex.perLevel | 0,25 |
| statScaling.manaRegen.type | linear |
| statScaling.manaRegen.base | 0,5 |
| statScaling.manaRegen.perLevel | 0,5 |
| statScaling.healthRegen.type | linear |
| statScaling.healthRegen.base | 0,5 |
| statScaling.healthRegen.perLevel | 0,5 |
| dex | 0,25 |
| healthRegen | 0,5 |
| manaRegen | 0,5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0,5 |
| levelProgression.rules[0].rule.perLevel | 0,5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | agi |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,25 |
| levelProgression.rules[1].rule.perLevel | 0,25 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | dex |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 0,25 |
| levelProgression.rules[2].rule.perLevel | 0,25 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | manaRegen |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 0,5 |
| levelProgression.rules[3].rule.perLevel | 0,5 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | healthRegen |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 0,5 |
| levelProgression.rules[4].rule.perLevel | 0,5 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| learningRequirements.minimumCharacterLevel | 1 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| classificationVersion | 1 |
| type | passive |

### 139: Ausdauertraining

Permanentes Ausdauertraining mit 20 Stufen für alle Klassen. Je gelerntem Skilllevel +1 Vitalität und +1 Willenskraft, auf Stufe 20 jeweils +20. Keine direkten Boni auf physische oder magische Verteidigung; die regulären Attributumrechnungen bleiben wirksam. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 1 |
| skillPointCosts.rankCosts.0 | 1 |
| skillPointCosts.rankCosts.1 | 2 |
| skillPointCosts.rankCosts.2 | 4 |
| skillPointCosts.rankCosts.3 | 5 |
| skillPointCosts.rankCosts.4 | 7 |
| skillPointCosts.rankCosts.5 | 8 |
| skillPointCosts.rankCosts.6 | 10 |
| skillPointCosts.rankCosts.7 | 11 |
| skillPointCosts.rankCosts.8 | 13 |
| skillPointCosts.rankCosts.9 | 14 |
| skillPointCosts.rankCosts.10 | 16 |
| skillPointCosts.rankCosts.11 | 17 |
| skillPointCosts.rankCosts.12 | 19 |
| skillPointCosts.rankCosts.13 | 20 |
| skillPointCosts.rankCosts.14 | 22 |
| skillPointCosts.rankCosts.15 | 23 |
| skillPointCosts.rankCosts.16 | 25 |
| skillPointCosts.rankCosts.17 | 26 |
| skillPointCosts.rankCosts.18 | 28 |
| skillPointCosts.rankCosts.19 | 29 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| skillName_eng | Endurance Training |
| category | passive |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knight |
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

### 201: Waffentraining

Permanentes allgemeines Waffentraining mit 20 Stufen für alle Klassen. Je gelernter Stufe +1 physischer und +1 magischer Angriff, maximal jeweils +20 auf Stufe 20. Keine Angriffsgeschwindigkeit, Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 1 |
| skillPointCosts.rankCosts.0 | 1 |
| skillPointCosts.rankCosts.1 | 2 |
| skillPointCosts.rankCosts.2 | 4 |
| skillPointCosts.rankCosts.3 | 5 |
| skillPointCosts.rankCosts.4 | 7 |
| skillPointCosts.rankCosts.5 | 8 |
| skillPointCosts.rankCosts.6 | 10 |
| skillPointCosts.rankCosts.7 | 11 |
| skillPointCosts.rankCosts.8 | 13 |
| skillPointCosts.rankCosts.9 | 14 |
| skillPointCosts.rankCosts.10 | 16 |
| skillPointCosts.rankCosts.11 | 17 |
| skillPointCosts.rankCosts.12 | 19 |
| skillPointCosts.rankCosts.13 | 20 |
| skillPointCosts.rankCosts.14 | 22 |
| skillPointCosts.rankCosts.15 | 23 |
| skillPointCosts.rankCosts.16 | 25 |
| skillPointCosts.rankCosts.17 | 26 |
| skillPointCosts.rankCosts.18 | 28 |
| skillPointCosts.rankCosts.19 | 29 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 2 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Weapon Training |
| category | passive |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knight |
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
| classificationVersion | 1 |
| type | passive |

### 134: Bindung

Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 6 |
| skillPointCosts.rankCosts.0 | 6 |
| skillPointCosts.classRankCosts.adventurer.0 | 6 |
| skillPointCosts.classRankCosts.adventurer.1 | 7 |
| skillPointCosts.classRankCosts.adventurer.2 | 8 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 4 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Bond |
| category | creature |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knight |
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
| classificationVersion | 1 |
| type | passive |

### 135: Kontrolle

Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 4. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 4 |
| skillPointCosts.rankCosts.0 | 4 |
| skillPointCosts.classRankCosts.adventurer.0 | 4 |
| skillPointCosts.classRankCosts.adventurer.1 | 5 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 4 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Control |
| category | creature |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knight |
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
| description_de | Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 4. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen. |
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
| classificationVersion | 1 |
| type | passive |
| companionControlSettings.maximumControlledCreaturesByLevel[0] | 1 |
| companionControlSettings.maximumControlledCreaturesByLevel[1] | 2 |

### 144: Rüstungstraining

Permanentes Rüstungstraining mit zehn Stufen für alle Klassen. Je gelernter Stufe +3 physische und +6 magische Verteidigung, maximal +30 P-Abwehr und +60 M-Abwehr. Keine Vitalitätsboni, Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 1 |
| skillPointCosts.rankCosts.0 | 1 |
| skillPointCosts.rankCosts.1 | 7 |
| skillPointCosts.rankCosts.2 | 14 |
| skillPointCosts.rankCosts.3 | 20 |
| skillPointCosts.rankCosts.4 | 27 |
| skillPointCosts.rankCosts.5 | 33 |
| skillPointCosts.rankCosts.6 | 40 |
| skillPointCosts.rankCosts.7 | 46 |
| skillPointCosts.rankCosts.8 | 53 |
| skillPointCosts.rankCosts.9 | 59 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 4 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Armor Training |
| category | passive |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knight |
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
| classificationVersion | 1 |
| type | passive |

### 138: Zucht

Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 5 |
| skillPointCosts.rankCosts.0 | 5 |
| skillPointCosts.classRankCosts.adventurer.0 | 5 |
| skillPointCosts.classRankCosts.adventurer.1 | 6 |
| skillPointCosts.classRankCosts.adventurer.2 | 7 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 4 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Breed |
| category | creature |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knight |
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
| classificationVersion | 1 |
| type | passive |

### 136: Beschwören

Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 1 |
| skillPointCosts.rankCosts.0 | 1 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 5 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Summon |
| category | creature |
| cd | 5 |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knight |
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
| classificationVersion | 1 |
| type | skill |

### 133: Tamen

Versucht, eine Kreatur zu zähmen. Erfordert eine zur Kreaturenvariante passende Zähmungskarte. Die Grundchance wird von der jeweiligen Kreaturenvariante vorgegeben. Tamen multipliziert diese Chance auf Stufe 1 mit 1,0, auf Stufe 2 mit 1,1 und auf Stufe 3 mit 1,2; keine zusätzlichen Prozentpunkte und keine eigene feste Grunderfolgschance. Bei 1 Prozent Grundchance ergeben sich 1 / 1,1 / 1,2 Prozent Erfolgschance je Versuch. Die Formel steigt bei später autorisierten zusätzlichen effektiven Skillstufen um 0,1 je Stufe weiter. Die Definition hat weiterhin drei lernbare Stufen: normale Klassen maximal Stufe 1, Abenteurer maximal Stufe 3; eine zweite Spezialklasse ist noch nicht festgelegt. Mana 100 / 125 / 150, Castzeit 3 / 2,5 / 2 Sekunden und Cooldown 60 / 50 / 40 Sekunden. Kein Schaden und keine anschließende Effektdauer. Konkrete Kreaturen-Grundchancen, Kartenzuordnungen, Itemverbrauch, Zieldistanz und Abbruchbedingungen sind noch festzulegen.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 10 |
| skillPointCosts.rankCosts.0 | 10 |
| skillPointCosts.classRankCosts.adventurer.0 | 10 |
| skillPointCosts.classRankCosts.adventurer.1 | 11 |
| skillPointCosts.classRankCosts.adventurer.2 | 12 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 5 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Tame |
| category | creature |
| cd | 60 |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knight |
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
| description_de | Versucht, eine Kreatur zu zähmen. Erfordert eine zur Kreaturenvariante passende Zähmungskarte. Die Grundchance wird von der jeweiligen Kreaturenvariante vorgegeben. Tamen multipliziert diese Chance auf Stufe 1 mit 1,0, auf Stufe 2 mit 1,1 und auf Stufe 3 mit 1,2; keine zusätzlichen Prozentpunkte und keine eigene feste Grunderfolgschance. Bei 1 Prozent Grundchance ergeben sich 1 / 1,1 / 1,2 Prozent Erfolgschance je Versuch. Die Formel steigt bei später autorisierten zusätzlichen effektiven Skillstufen um 0,1 je Stufe weiter. Die Definition hat weiterhin drei lernbare Stufen: normale Klassen maximal Stufe 1, Abenteurer maximal Stufe 3; eine zweite Spezialklasse ist noch nicht festgelegt. Mana 100 / 125 / 150, Castzeit 3 / 2,5 / 2 Sekunden und Cooldown 60 / 50 / 40 Sekunden. Kein Schaden und keine anschließende Effektdauer. Konkrete Kreaturen-Grundchancen, Kartenzuordnungen, Itemverbrauch, Zieldistanz und Abbruchbedingungen sind noch festzulegen. |
| description_eng | Attempts to tame a creature. Requires a taming card matching the creature variant. The base chance belongs to the specific creature variant. Tame multiplies this chance by 1.0 at level 1, 1.1 at level 2 and 1.2 at level 3; it adds no percentage points and supplies no fixed base success chance. A 1 percent base chance becomes 1 / 1.1 / 1.2 percent per attempt. The formula continues by 0.1 per additional effective level when separately authorized. The definition still has three learnable levels: ordinary classes are capped at level 1 and the Adventurer at level 3; a second specialist remains undefined. Mana is 100 / 125 / 150, cast time 3 / 2.5 / 2 seconds and cooldown 60 / 50 / 40 seconds. No damage or subsequent effect duration. Creature base chances, card mappings, item consumption, target distance and interruption conditions remain to be defined. |
| dmgType | spell |
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
| mana | 100 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 100 |
| resourceCosts[0].scaling.perLevel | 25 |
| taming.requiresMatchingItem | true |
| taming.itemConsumptionStatus | pending |
| taming.baseChanceSource | creatureVariant |
| taming.chanceFormula | baseChanceTimesSkillMultiplier |
| taming.chanceMultiplierScaling.type | linear |
| taming.chanceMultiplierScaling.base | 1 |
| taming.chanceMultiplierScaling.perLevel | 0,1 |
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
| levelProgression.rules[3].path[1] | chanceMultiplierScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 1 |
| levelProgression.rules[3].rule.perLevel | 0,1 |
| levelProgression.rules[3].source | storedFormula |
| classificationVersion | 1 |
| type | skill |

### 137: Zurückrufen

Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 1 |
| skillPointCosts.rankCosts.0 | 1 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 5 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Recall |
| category | creature |
| cd | 5 |
| charClass[0] | Abenteuer |
| charClass[1] | Butcher |
| charClass[2] | Destroyer |
| charClass[3] | Gladiator |
| charClass[4] | Berserker |
| charClass[5] | Knight |
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
| classificationVersion | 1 |
| type | skill |

### 27: Dunkler Schlag

Greift unmittelbar aus den Schatten an und verursacht einmalig physischen Schaden. Zwanzig Skillstufen bei unveränderten Start- und Maximalwerten. Grundschaden steigt gemäß ganzzahliger Stufentabelle von 41 auf 279, Mana-Kosten von 10 auf 66. Cooldown sinkt gemäß ganzzahliger Stufentabelle von 28 auf 14 Sekunden. Castzeit 0 Sekunden, keine anhaltende Wirkungsdauer oder zusätzliche Wartezeit vor dem Angriff. Bestehende Kosten bleiben erhalten; Charakterangriff zählt nicht zur Manakostenbasis.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 5 |
| skillPointCosts.rankCosts.0 | 5 |
| skillPointCosts.rankCosts.1 | 6 |
| skillPointCosts.rankCosts.2 | 7 |
| skillPointCosts.rankCosts.3 | 8 |
| skillPointCosts.rankCosts.4 | 9 |
| skillPointCosts.rankCosts.5 | 10 |
| skillPointCosts.rankCosts.6 | 11 |
| skillPointCosts.rankCosts.7 | 12 |
| skillPointCosts.rankCosts.8 | 13 |
| skillPointCosts.rankCosts.9 | 14 |
| skillPointCosts.rankCosts.10 | 16 |
| skillPointCosts.rankCosts.11 | 17 |
| skillPointCosts.rankCosts.12 | 18 |
| skillPointCosts.rankCosts.13 | 19 |
| skillPointCosts.rankCosts.14 | 20 |
| skillPointCosts.rankCosts.15 | 21 |
| skillPointCosts.rankCosts.16 | 22 |
| skillPointCosts.rankCosts.17 | 23 |
| skillPointCosts.rankCosts.18 | 24 |
| skillPointCosts.rankCosts.19 | 25 |
| skillPointCosts.classRankCosts.villian.0 | 12 |
| skillPointCosts.classRankCosts.villian.1 | 12 |
| skillPointCosts.classRankCosts.villian.2 | 13 |
| skillPointCosts.classRankCosts.villian.3 | 13 |
| skillPointCosts.classRankCosts.villian.4 | 13 |
| skillPointCosts.classRankCosts.villian.5 | 14 |
| skillPointCosts.classRankCosts.villian.6 | 14 |
| skillPointCosts.classRankCosts.villian.7 | 14 |
| skillPointCosts.classRankCosts.villian.8 | 15 |
| skillPointCosts.classRankCosts.villian.9 | 15 |
| skillPointCosts.classRankCosts.villian.10 | 15 |
| skillPointCosts.classRankCosts.villian.11 | 15 |
| skillPointCosts.classRankCosts.villian.12 | 16 |
| skillPointCosts.classRankCosts.villian.13 | 16 |
| skillPointCosts.classRankCosts.villian.14 | 16 |
| skillPointCosts.classRankCosts.villian.15 | 17 |
| skillPointCosts.classRankCosts.villian.16 | 17 |
| skillPointCosts.classRankCosts.villian.17 | 17 |
| skillPointCosts.classRankCosts.villian.18 | 18 |
| skillPointCosts.classRankCosts.villian.19 | 18 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| learningRequirements.classOverrides.villian | 6 |
| learningRequirements.minimumCharacterLevel | 6 |
| skillName_eng | Dark Strike |
| category | active |
| cd | 28 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Greift unmittelbar aus den Schatten an und verursacht einmalig physischen Schaden. Zwanzig Skillstufen bei unveränderten Start- und Maximalwerten. Grundschaden steigt gemäß ganzzahliger Stufentabelle von 41 auf 279, Mana-Kosten von 10 auf 66. Cooldown sinkt gemäß ganzzahliger Stufentabelle von 28 auf 14 Sekunden. Castzeit 0 Sekunden, keine anhaltende Wirkungsdauer oder zusätzliche Wartezeit vor dem Angriff. Bestehende Kosten bleiben erhalten; Charakterangriff zählt nicht zur Manakostenbasis. |
| description_eng | Attacks immediately from the shadows, dealing physical damage once. Twenty levels retain former starting and maximum values. Base damage increases from 41 to 279 and Mana cost from 10 to 66 according to integer level tables. Cooldown decreases from 28 to 14 seconds according to its integer level table. Cast time 0 seconds, no lingering effect or preparation delay. Existing costs retained; character attack is excluded from the Mana cost basis. |
| dmgType (Altformat) | physical |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 27 |
| patk | 41 |
| skillName_de | Dunkler Schlag |
| skillpoints | 1 |
| castTimeSeconds | 0 |
| cooldownScaling.type | table |
| cooldownScaling.base | 28 |
| cooldownScaling.values[0] | 28 |
| cooldownScaling.values[1] | 27 |
| cooldownScaling.values[2] | 27 |
| cooldownScaling.values[3] | 26 |
| cooldownScaling.values[4] | 25 |
| cooldownScaling.values[5] | 24 |
| cooldownScaling.values[6] | 24 |
| cooldownScaling.values[7] | 23 |
| cooldownScaling.values[8] | 22 |
| cooldownScaling.values[9] | 21 |
| cooldownScaling.values[10] | 21 |
| cooldownScaling.values[11] | 20 |
| cooldownScaling.values[12] | 19 |
| cooldownScaling.values[13] | 18 |
| cooldownScaling.values[14] | 18 |
| cooldownScaling.values[15] | 17 |
| cooldownScaling.values[16] | 16 |
| cooldownScaling.values[17] | 15 |
| cooldownScaling.values[18] | 15 |
| cooldownScaling.values[19] | 14 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 10 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 10 |
| resourceCosts[0].scaling.values[0] | 10 |
| resourceCosts[0].scaling.values[1] | 13 |
| resourceCosts[0].scaling.values[2] | 16 |
| resourceCosts[0].scaling.values[3] | 19 |
| resourceCosts[0].scaling.values[4] | 22 |
| resourceCosts[0].scaling.values[5] | 25 |
| resourceCosts[0].scaling.values[6] | 28 |
| resourceCosts[0].scaling.values[7] | 31 |
| resourceCosts[0].scaling.values[8] | 34 |
| resourceCosts[0].scaling.values[9] | 37 |
| resourceCosts[0].scaling.values[10] | 39 |
| resourceCosts[0].scaling.values[11] | 42 |
| resourceCosts[0].scaling.values[12] | 45 |
| resourceCosts[0].scaling.values[13] | 48 |
| resourceCosts[0].scaling.values[14] | 51 |
| resourceCosts[0].scaling.values[15] | 54 |
| resourceCosts[0].scaling.values[16] | 57 |
| resourceCosts[0].scaling.values[17] | 60 |
| resourceCosts[0].scaling.values[18] | 63 |
| resourceCosts[0].scaling.values[19] | 66 |
| statScaling.patk.type | table |
| statScaling.patk.base | 41 |
| statScaling.patk.values[0] | 41 |
| statScaling.patk.values[1] | 54 |
| statScaling.patk.values[2] | 66 |
| statScaling.patk.values[3] | 79 |
| statScaling.patk.values[4] | 91 |
| statScaling.patk.values[5] | 104 |
| statScaling.patk.values[6] | 116 |
| statScaling.patk.values[7] | 129 |
| statScaling.patk.values[8] | 141 |
| statScaling.patk.values[9] | 154 |
| statScaling.patk.values[10] | 166 |
| statScaling.patk.values[11] | 179 |
| statScaling.patk.values[12] | 191 |
| statScaling.patk.values[13] | 204 |
| statScaling.patk.values[14] | 216 |
| statScaling.patk.values[15] | 229 |
| statScaling.patk.values[16] | 241 |
| statScaling.patk.values[17] | 254 |
| statScaling.patk.values[18] | 266 |
| statScaling.patk.values[19] | 279 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | periodicSteps |
| levelProgression.rules[0].rule.rule.base | 28 |
| levelProgression.rules[0].rule.rule.steps[0] | -1 |
| levelProgression.rules[0].rule.rule.steps[1] | 0 |
| levelProgression.rules[0].rule.rule.steps[2] | -1 |
| levelProgression.rules[0].rule.rule.steps[3] | -1 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | rounded |
| levelProgression.rules[1].rule.rule.mode | round |
| levelProgression.rules[1].rule.rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.rule.base | 10 |
| levelProgression.rules[1].rule.rule.rule.perLevel | 2,947 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | periodicSteps |
| levelProgression.rules[2].rule.base | 41 |
| levelProgression.rules[2].rule.steps[0] | 13 |
| levelProgression.rules[2].rule.steps[1] | 12 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 43: Erweiterung der Sinne

Permanenter passiver Bonus mit zehn Stufen. Je gelernter Stufe +1 Agilität, +1 Geschick, +0,5 Vitalität und +0,5 Willenskraft. Auf Stufe 10 insgesamt +10 Agilität, +10 Geschick, +5 Vitalität und +5 Willenskraft. Kein zusätzlicher Glücksbonus. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 12 |
| skillPointCosts.rankCosts.0 | 12 |
| skillPointCosts.rankCosts.1 | 16 |
| skillPointCosts.rankCosts.2 | 20 |
| skillPointCosts.rankCosts.3 | 24 |
| skillPointCosts.rankCosts.4 | 28 |
| skillPointCosts.rankCosts.5 | 32 |
| skillPointCosts.rankCosts.6 | 36 |
| skillPointCosts.rankCosts.7 | 40 |
| skillPointCosts.rankCosts.8 | 44 |
| skillPointCosts.rankCosts.9 | 48 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 9 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Expansion of the Senses |
| category | passive |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| charClass[2] | Summoner |
| charClass[3] | Soulseeker |
| charClass[4] | Villian |
| charClass[5] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanenter passiver Bonus mit zehn Stufen. Je gelernter Stufe +1 Agilität, +1 Geschick, +0,5 Vitalität und +0,5 Willenskraft. Auf Stufe 10 insgesamt +10 Agilität, +10 Geschick, +5 Vitalität und +5 Willenskraft. Kein zusätzlicher Glücksbonus. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent passive with ten levels. Each learned level grants +1 Agility, +1 Dexterity, +0.5 Vitality and +0.5 Wisdom. At level 10: +10 Agility, +10 Dexterity, +5 Vitality and +5 Wisdom. No added Luck bonus, activation costs, cast time or cooldown. |
| dex | 1 |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 43 |
| skillName_de | Erweiterung der Sinne |
| skillpoints | 1 |
| agi | 1 |
| resourceCosts | [] |
| statScaling.dex.type | linear |
| statScaling.dex.base | 1 |
| statScaling.dex.perLevel | 1 |
| statScaling.agi.type | linear |
| statScaling.agi.base | 1 |
| statScaling.agi.perLevel | 1 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 0,5 |
| statScaling.vita.perLevel | 0,5 |
| statScaling.wis.type | linear |
| statScaling.wis.base | 0,5 |
| statScaling.wis.perLevel | 0,5 |
| vita | 0,5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | dex |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | agi |
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
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | wis |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 0,5 |
| levelProgression.rules[3].rule.perLevel | 0,5 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |
| wis | 0,5 |

### 70: Kunai Todesstoß

Kunai-Angriff mit fünf Skillstufen und ganzzahligem physischem Grundschaden von 17/25/34/42/50. Start- und Maximalwirkung bleiben erhalten. Außerhalb der Lebensschwelle ist eine normale Anwendung ohne Schadensmultiplikator oder Rüstungsignorierung möglich. Stufe 1 erlaubt gegen Ziele unter 5 Prozent Leben zwei Anwendungen. Ab Stufe 2 liegt die Schwelle unter 6 Prozent und nur darunter verursacht jede Anwendung 1,5-fachen Schaden. Ab Stufe 4 sind unter dieser Schwelle drei Anwendungen möglich. Auf Stufe 5 wird im PvE und PvP unter derselben 6-Prozent-Schwelle zusätzlich die gegnerische Rüstung vollständig ignoriert. Kein doppelter Schadensmultiplikator. Zwischen Anwendungen liegen 0,5 Sekunden, nach der Folge 16 Sekunden Cooldown. Keine Mana-Kosten, Castzeit 0 Sekunden, vorläufige Animation 1 Sekunde. Im PvP und vorläufig auch gegen Bosse einsetzbar. Finisher- und Boss-Balancing sowie allgemeiner PvP-Schadensfaktor bleiben offen. Rüstungsignorierung ist kein garantierter Todesstoß und ignoriert nicht automatisch Schilde oder andere Schadensreduktionen. Verhalten bei Heilung des Ziels über die Schwelle, Unterbrechung und unvollständigen Folgen bleibt offen.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 30 |
| skillPointCosts.rankCosts.0 | 30 |
| skillPointCosts.rankCosts.1 | 45 |
| skillPointCosts.rankCosts.2 | 60 |
| skillPointCosts.rankCosts.3 | 75 |
| skillPointCosts.rankCosts.4 | 90 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 10 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Kunai Deathblow |
| category | active |
| cd | 16 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Kunai-Angriff mit fünf Skillstufen und ganzzahligem physischem Grundschaden von 17/25/34/42/50. Start- und Maximalwirkung bleiben erhalten. Außerhalb der Lebensschwelle ist eine normale Anwendung ohne Schadensmultiplikator oder Rüstungsignorierung möglich. Stufe 1 erlaubt gegen Ziele unter 5 Prozent Leben zwei Anwendungen. Ab Stufe 2 liegt die Schwelle unter 6 Prozent und nur darunter verursacht jede Anwendung 1,5-fachen Schaden. Ab Stufe 4 sind unter dieser Schwelle drei Anwendungen möglich. Auf Stufe 5 wird im PvE und PvP unter derselben 6-Prozent-Schwelle zusätzlich die gegnerische Rüstung vollständig ignoriert. Kein doppelter Schadensmultiplikator. Zwischen Anwendungen liegen 0,5 Sekunden, nach der Folge 16 Sekunden Cooldown. Keine Mana-Kosten, Castzeit 0 Sekunden, vorläufige Animation 1 Sekunde. Im PvP und vorläufig auch gegen Bosse einsetzbar. Finisher- und Boss-Balancing sowie allgemeiner PvP-Schadensfaktor bleiben offen. Rüstungsignorierung ist kein garantierter Todesstoß und ignoriert nicht automatisch Schilde oder andere Schadensreduktionen. Verhalten bei Heilung des Ziels über die Schwelle, Unterbrechung und unvollständigen Folgen bleibt offen. |
| description_eng | Kunai attack with five levels and integer physical base damage of 17/25/34/42/50. Starting and maximum effects are retained. Outside the target Health threshold, one normal use is possible without a damage multiplier or armor ignore. Level 1 allows two uses below 5 percent Health. From level 2, the threshold is below 6 percent and each use deals 1.5 times damage only below it. From level 4, three uses are allowed below the threshold. At level 5, PvE and PvP attacks additionally ignore all enemy armor below the same 6-percent threshold. No double-damage multiplier. Uses are separated by 0.5 seconds, followed by a 16-second cooldown. No Mana cost, cast time 0 seconds, provisional animation 1 second. Allowed in PvP and provisionally against bosses. Finisher and boss balancing and general PvP damage factor remain pending. Armor ignore is not a guaranteed kill and does not bypass shields or other damage reductions automatically. Target healing above threshold, interruption and partial-sequence behavior remain pending. |
| dmgType (Altformat) | physical |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 70 |
| patk | 17 |
| skillName_de | Kunai Todesstoß |
| skillpoints | 1 |
| animationDurationSeconds | 1 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0 |
| hasLingeringDamage | false |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 0 |
| statScaling.patk.type | table |
| statScaling.patk.base | 17 |
| statScaling.patk.values[0] | 17 |
| statScaling.patk.values[1] | 25 |
| statScaling.patk.values[2] | 34 |
| statScaling.patk.values[3] | 42 |
| statScaling.patk.values[4] | 50 |
| burstUsage.usesPerBurst | 1 |
| burstUsage.belowTargetHealthFractionByLevel[0] | 0,05 |
| burstUsage.belowTargetHealthFractionByLevel[1] | 0,06 |
| burstUsage.belowTargetHealthFractionByLevel[2] | 0,06 |
| burstUsage.belowTargetHealthFractionByLevel[3] | 0,06 |
| burstUsage.belowTargetHealthFractionByLevel[4] | 0,06 |
| burstUsage.usesBelowThresholdByLevel[0] | 2 |
| burstUsage.usesBelowThresholdByLevel[1] | 2 |
| burstUsage.usesBelowThresholdByLevel[2] | 2 |
| burstUsage.usesBelowThresholdByLevel[3] | 3 |
| burstUsage.usesBelowThresholdByLevel[4] | 3 |
| burstUsage.betweenUsesCooldownSeconds | 0,5 |
| burstUsage.afterBurstCooldownSeconds | 16 |
| burstUsage.partialBurstResetStatus | pending |
| attackExecution.targetMode | singleEnemy |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | pending |
| attackExecution.damageMultiplierScaling.type | table |
| attackExecution.damageMultiplierScaling.values[0] | 1 |
| attackExecution.damageMultiplierScaling.values[1] | 1,5 |
| attackExecution.damageMultiplierScaling.values[2] | 1,5 |
| attackExecution.damageMultiplierScaling.values[3] | 1,5 |
| attackExecution.damageMultiplierScaling.values[4] | 1,5 |
| attackExecution.damageMultiplierCondition | targetBelowBurstHealthThreshold |
| attackExecution.armorIgnoreFractionByLevel[0] | 0 |
| attackExecution.armorIgnoreFractionByLevel[1] | 0 |
| attackExecution.armorIgnoreFractionByLevel[2] | 0 |
| attackExecution.armorIgnoreFractionByLevel[3] | 0 |
| attackExecution.armorIgnoreFractionByLevel[4] | 1 |
| attackExecution.armorIgnoreCondition | targetBelowBurstHealthThreshold |
| attackExecution.armorIgnoreMode | pveAndPvp |
| usageRestrictions.allowPvp | true |
| usageRestrictions.allowBossTargets | true |
| usageRestrictions.pvpDamageFactorStatus | pending |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | constant |
| levelProgression.rules[0].rule.rule.value | 0 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | rounded |
| levelProgression.rules[1].rule.mode | round |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 17 |
| levelProgression.rules[1].rule.rule.perLevel | 8,25 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | attackExecution |
| levelProgression.rules[2].path[1] | damageMultiplierScaling |
| levelProgression.rules[2].rule.kind | thresholds |
| levelProgression.rules[2].rule.base | 1 |
| levelProgression.rules[2].rule.changes[0].level | 2 |
| levelProgression.rules[2].rule.changes[0].value | 1,5 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition[0] | burstUsage.belowTargetHealthFractionByLevel |
| levelProgression.extensionNeedsDefinition[1] | burstUsage.usesBelowThresholdByLevel |
| levelProgression.extensionNeedsDefinition[2] | attackExecution.armorIgnoreFractionByLevel |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 17: Blutklinge

Verursacht einmalig physischen Schaden und heilt dich um 2 Prozent des tatsächlich durch diesen Angriff verursachten Lebensschadens auf Stufe 1. Je weiterer Stufe steigt der Heilungsanteil um 0,5 Prozentpunkte auf 6,5 Prozent auf Stufe 10. Der physische Grundschaden steigt von 100 um 73 je weiterer Stufe auf 757.  Der Cooldown sinkt von 80 um 1 Sekunde je weiterer Stufe auf 71 Sekunden. Castzeit 0,1 Sekunden, vorläufige Animation 0,5 Sekunden. Keine anhaltende Heilungswirkung für weitere Angriffe. Mana-Kosten je Stufe: 25/43/62/80/98/116/135/153/171/189. Exakt gerundete 25 Prozent des gesamten Skill-Grundschadens ohne Charakterangriff; garantierte Mehrfachtreffer und garantierter kritischer Treffer sind enthalten, Heilung erhält keinen zusätzlichen Kostenaufschlag.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 10 |
| skillPointCosts.rankCosts.0 | 10 |
| skillPointCosts.rankCosts.1 | 14 |
| skillPointCosts.rankCosts.2 | 19 |
| skillPointCosts.rankCosts.3 | 23 |
| skillPointCosts.rankCosts.4 | 28 |
| skillPointCosts.rankCosts.5 | 32 |
| skillPointCosts.rankCosts.6 | 37 |
| skillPointCosts.rankCosts.7 | 41 |
| skillPointCosts.rankCosts.8 | 46 |
| skillPointCosts.rankCosts.9 | 50 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 12 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Blood Reaver |
| category | active |
| cd | 80 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Verursacht einmalig physischen Schaden und heilt dich um 2 Prozent des tatsächlich durch diesen Angriff verursachten Lebensschadens auf Stufe 1. Je weiterer Stufe steigt der Heilungsanteil um 0,5 Prozentpunkte auf 6,5 Prozent auf Stufe 10. Der physische Grundschaden steigt von 100 um 73 je weiterer Stufe auf 757.  Der Cooldown sinkt von 80 um 1 Sekunde je weiterer Stufe auf 71 Sekunden. Castzeit 0,1 Sekunden, vorläufige Animation 0,5 Sekunden. Keine anhaltende Heilungswirkung für weitere Angriffe. Mana-Kosten je Stufe: 25/43/62/80/98/116/135/153/171/189. Exakt gerundete 25 Prozent des gesamten Skill-Grundschadens ohne Charakterangriff; garantierte Mehrfachtreffer und garantierter kritischer Treffer sind enthalten, Heilung erhält keinen zusätzlichen Kostenaufschlag. |
| description_eng | Deals physical damage once and heals you for 2 percent of the actual Health damage dealt by this attack at level 1. Each additional level adds 0.5 percentage points, reaching 6.5 percent at level 10. Base physical damage increases from 100 by 73 per additional level to 757.  Cooldown decreases from 80 by 1 second per additional level to 71 seconds. Cast time is 0.1 seconds; provisional animation is 0.5 seconds. Does not grant ongoing healing for later attacks. Mana costs by level: 25/43/62/80/98/116/135/153/171/189. Exactly rounded 25 percent of total skill base damage excluding character attack; guaranteed multiple hits and guaranteed critical damage are included, with no additional healing surcharge. |
| dmgType (Altformat) | physical |
| health | 0,02 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 17 |
| patk | 100 |
| skillName_de | Blutklinge |
| skillpoints | 1 |
| animationDurationSeconds | 0,5 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 80 |
| cooldownScaling.perLevel | -1 |
| effects[0].key | blood-blade-self-heal |
| effects[0].type | heal |
| effects[0].target | self |
| effects[0].value | 0,02 |
| effects[0].unit | fraction |
| effects[0].reference | damageDealt |
| effects[0].damageBasis | actualHealthDamage |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0,02 |
| effects[0].valueScaling.perLevel | 0,005 |
| effects[0].durationSeconds | 0 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 25 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 25 |
| resourceCosts[0].scaling.values[0] | 25 |
| resourceCosts[0].scaling.values[1] | 43 |
| resourceCosts[0].scaling.values[2] | 62 |
| resourceCosts[0].scaling.values[3] | 80 |
| resourceCosts[0].scaling.values[4] | 98 |
| resourceCosts[0].scaling.values[5] | 116 |
| resourceCosts[0].scaling.values[6] | 135 |
| resourceCosts[0].scaling.values[7] | 153 |
| resourceCosts[0].scaling.values[8] | 171 |
| resourceCosts[0].scaling.values[9] | 189 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 100 |
| statScaling.patk.perLevel | 73 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 80 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,02 |
| levelProgression.rules[1].rule.perLevel | 0,005 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | outputCost |
| levelProgression.rules[2].rule.factor | 0,25 |
| levelProgression.rules[2].rule.basis | damage |
| levelProgression.rules[2].rule.minimum | 0 |
| levelProgression.rules[2].source | verifiedManaPricing |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | patk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 100 |
| levelProgression.rules[3].rule.perLevel | 73 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 22: Dolchtraining

Permanentes Dolchtraining mit zehn Stufen. Spiegelt die Attributverteilung des Dual-Axttrainings: Auf Stufe 1 +2 Agilität und +1 Stärke. Je weiterer Stufe steigt abwechselnd Agilität oder Stärke um 1, beginnend mit Agilität auf Stufe 2. Auf Stufe 10 insgesamt +7 Agilität und +5 Stärke. Die Boni gelten einmal für den Charakter. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 10 |
| skillPointCosts.rankCosts.0 | 10 |
| skillPointCosts.rankCosts.1 | 14 |
| skillPointCosts.rankCosts.2 | 19 |
| skillPointCosts.rankCosts.3 | 23 |
| skillPointCosts.rankCosts.4 | 28 |
| skillPointCosts.rankCosts.5 | 32 |
| skillPointCosts.rankCosts.6 | 37 |
| skillPointCosts.rankCosts.7 | 41 |
| skillPointCosts.rankCosts.8 | 46 |
| skillPointCosts.rankCosts.9 | 50 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 15 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Dagger Training |
| agi | 2 |
| category | passive |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanentes Dolchtraining mit zehn Stufen. Spiegelt die Attributverteilung des Dual-Axttrainings: Auf Stufe 1 +2 Agilität und +1 Stärke. Je weiterer Stufe steigt abwechselnd Agilität oder Stärke um 1, beginnend mit Agilität auf Stufe 2. Auf Stufe 10 insgesamt +7 Agilität und +5 Stärke. Die Boni gelten einmal für den Charakter. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent Dagger Training with ten levels. Mirrors the Dual Axe Training attribute distribution: starts at +2 Agility and +1 Strength. Each additional level alternates +1 Agility or Strength, beginning with Agility at level 2. At level 10: +7 Agility and +5 Strength. Bonuses apply once per character. No activation costs, cast time or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 22 |
| skillName_de | Dolchtraining |
| skillpoints | 1 |
| resourceCosts | [] |
| statScaling.agi.type | table |
| statScaling.agi.values[0] | 2 |
| statScaling.agi.values[1] | 3 |
| statScaling.agi.values[2] | 3 |
| statScaling.agi.values[3] | 4 |
| statScaling.agi.values[4] | 4 |
| statScaling.agi.values[5] | 5 |
| statScaling.agi.values[6] | 5 |
| statScaling.agi.values[7] | 6 |
| statScaling.agi.values[8] | 6 |
| statScaling.agi.values[9] | 7 |
| statScaling.str.type | table |
| statScaling.str.values[0] | 1 |
| statScaling.str.values[1] | 1 |
| statScaling.str.values[2] | 2 |
| statScaling.str.values[3] | 2 |
| statScaling.str.values[4] | 3 |
| statScaling.str.values[5] | 3 |
| statScaling.str.values[6] | 4 |
| statScaling.str.values[7] | 4 |
| statScaling.str.values[8] | 5 |
| statScaling.str.values[9] | 5 |
| str | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | agi |
| levelProgression.rules[0].rule.kind | periodicSteps |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.steps[0] | 1 |
| levelProgression.rules[0].rule.steps[1] | 0 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | str |
| levelProgression.rules[1].rule.kind | periodicSteps |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.steps[0] | 0 |
| levelProgression.rules[1].rule.steps[1] | 1 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 188: Dunkler Schleier

Tarnt dich auf Stufe 1 für 5 Sekunden und auf Stufe 2 für 8 Sekunden. Währenddessen bist du für Gegner unsichtbar und nicht direkt anwählbar. Flächenschaden und zufällige Treffer können dich weiterhin treffen. Deine Gruppe sieht dich. Dein kleiner Supportbegleiter wird ebenfalls unsichtbar, dein Kampftier nicht. Ein Treffer oder ein eigener Angriff beendet die Tarnung, sofern der Skill keine ausdrücklich definierte Ausnahme hat. Schattenfalle darf einmal ohne Aufdeckung platziert werden. Schattenschlag macht dich für 1 Sekunde sichtbar und lässt dich danach in die verbleibende Tarnzeit zurückkehren. Die ursprüngliche Zeit läuft dabei weiter. Schattendolch beendet die Tarnung als normaler Angriff. Aktivierung setzt nur deine eigene NPC-Aggro auf null; andere Aggrowerte bleiben erhalten und Gegner wählen ihr nächstes gültiges Ziel. Bewegungsgeschwindigkeit plus 3 Prozent auf Stufe 1, plus 5 Prozent auf Stufe 2. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 63 auf Stufe 2, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 130 |
| skillPointCosts.rankCosts.0 | 130 |
| skillPointCosts.rankCosts.1 | 170 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 21 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Dark Veil |
| category | active |
| cd | 120 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Tarnt dich auf Stufe 1 für 5 Sekunden und auf Stufe 2 für 8 Sekunden. Währenddessen bist du für Gegner unsichtbar und nicht direkt anwählbar. Flächenschaden und zufällige Treffer können dich weiterhin treffen. Deine Gruppe sieht dich. Dein kleiner Supportbegleiter wird ebenfalls unsichtbar, dein Kampftier nicht. Ein Treffer oder ein eigener Angriff beendet die Tarnung, sofern der Skill keine ausdrücklich definierte Ausnahme hat. Schattenfalle darf einmal ohne Aufdeckung platziert werden. Schattenschlag macht dich für 1 Sekunde sichtbar und lässt dich danach in die verbleibende Tarnzeit zurückkehren. Die ursprüngliche Zeit läuft dabei weiter. Schattendolch beendet die Tarnung als normaler Angriff. Aktivierung setzt nur deine eigene NPC-Aggro auf null; andere Aggrowerte bleiben erhalten und Gegner wählen ihr nächstes gültiges Ziel. Bewegungsgeschwindigkeit plus 3 Prozent auf Stufe 1, plus 5 Prozent auf Stufe 2. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 63 auf Stufe 2, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Stealths you for 5 seconds at level 1 or 8 seconds at level 2. Enemies cannot see or directly target you, but area damage and incidental hits can still hit you. Your group can see you. Your small support companion is hidden; your combat pet is not. Incoming hits and own attacks end stealth unless explicitly excepted. One Shadow Trap may be placed without revealing you. Shadow Strike reveals you for 1 second before returning to the remaining original stealth duration, whose timer continues. Shadow Dagger ends stealth as a normal attack. Activation clears only your own NPC threat; other threat values remain and enemies select their next valid target. Grants 3 or 5 percent movement speed. 1 seconds. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 63 at level 2, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 5 |
| maxSkillLv | 2 |
| maxUpgradeLv | 10 |
| movementSpeed | 0,03 |
| nr | 188 |
| skillName_de | Dunkler Schleier |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 120 |
| cooldownScaling.perLevel | -30 |
| durationScaling.type | linear |
| durationScaling.base | 5 |
| durationScaling.perLevel | 3 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statBonusUnits.movementSpeed | fraction |
| statScaling.movementSpeed.type | linear |
| statScaling.movementSpeed.base | 0,03 |
| statScaling.movementSpeed.perLevel | 0,02 |
| stealthSettings.preventsDirectTargeting | true |
| stealthSettings.grantsDamageImmunity | false |
| stealthSettings.visibleToGroup | true |
| stealthSettings.hidesSupportCompanion | true |
| stealthSettings.hidesCombatPet | false |
| stealthSettings.breaksOnIncomingHit | true |
| stealthSettings.breaksOnOwnAttackUnlessExcepted | true |
| stealthSettings.clearsOwnNpcThreat | true |
| stealthSettings.otherCharactersThreatUnchanged | true |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 120 |
| levelProgression.rules[0].rule.rule.perLevel | -30 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 5 |
| levelProgression.rules[1].rule.perLevel | 3 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 50 |
| levelProgression.rules[2].rule.rule.perLevel | 13 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | movementSpeed |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 0,03 |
| levelProgression.rules[3].rule.perLevel | 0,02 |
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

### 91: Schattenfalle

Nur während der Tarnung einsetzbar. Platziere eine für dich sichtbare und für Gegner unsichtbare Falle, ohne dadurch sichtbar zu werden. Pro Tarnung kann eine Schattenfalle platziert werden. Die Falle verschwindet spätestens nach 10 Sekunden. Beim Betreten verursacht sie physischen Schaden und macht das Ziel kurz benommen. Grundschaden 171, plus 53 je weiterer Stufe, bis zu 648 auf Stufe 10. Benommenheit steigt über die zehn Stufen von 0,5 auf 1,5 Sekunden. Mana-Kosten 43 auf Stufe 1, +13 je weiterer Stufe, maximal 160 auf Stufe 10. Cooldown 36 Sekunden, Castzeit 0,2 Sekunden. Liegezeit und Benommenheit sind getrennte Zeitangaben. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 10 |
| skillPointCosts.rankCosts.0 | 10 |
| skillPointCosts.rankCosts.1 | 14 |
| skillPointCosts.rankCosts.2 | 19 |
| skillPointCosts.rankCosts.3 | 23 |
| skillPointCosts.rankCosts.4 | 28 |
| skillPointCosts.rankCosts.5 | 32 |
| skillPointCosts.rankCosts.6 | 37 |
| skillPointCosts.rankCosts.7 | 41 |
| skillPointCosts.rankCosts.8 | 46 |
| skillPointCosts.rankCosts.9 | 50 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 22 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Shadow Trap |
| category | active |
| cd | 36 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Nur während der Tarnung einsetzbar. Platziere eine für dich sichtbare und für Gegner unsichtbare Falle, ohne dadurch sichtbar zu werden. Pro Tarnung kann eine Schattenfalle platziert werden. Die Falle verschwindet spätestens nach 10 Sekunden. Beim Betreten verursacht sie physischen Schaden und macht das Ziel kurz benommen. Grundschaden 171, plus 53 je weiterer Stufe, bis zu 648 auf Stufe 10. Benommenheit steigt über die zehn Stufen von 0,5 auf 1,5 Sekunden. Mana-Kosten 43 auf Stufe 1, +13 je weiterer Stufe, maximal 160 auf Stufe 10. Cooldown 36 Sekunden, Castzeit 0,2 Sekunden. Liegezeit und Benommenheit sind getrennte Zeitangaben. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Usable only while stealthed. Place a trap visible to you but invisible to enemies without revealing yourself. One Shadow Trap may be placed per stealth activation. The trap disappears after at most 10 seconds. An enemy entering it takes physical damage and is briefly dazed. Base damage starts at 171 and increases by 53 per additional level to 648 at level 10. Daze duration increases from 0.5 to 1.5 seconds across ten levels. Mana cost 43 at level 1, maximum 160 at level 10. Cooldown is 36 seconds and cast time is 0.2 seconds. Trap lifetime and daze duration are separate. |
| dmgType (Altformat) | physical |
| dur | 0,5 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 91 |
| patk | 171 |
| skillName_de | Schattenfalle |
| skillpoints | 1 |
| activationRequirements.requiresStealth | true |
| castTimeSeconds | 0,2 |
| effects[0].key | shadow-trap-daze |
| effects[0].type | control |
| effects[0].target | enemy |
| effects[0].controlKind | dazed |
| effects[0].value | 1 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 0,5 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 0,5 |
| effects[0].durationScaling.perLevel | 0,111 |
| mana (Aktivierungskosten, kein Bonus) | 43 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 43 |
| resourceCosts[0].scaling.perLevel | 13 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 171 |
| statScaling.patk.perLevel | 53 |
| stealthInteraction.preservesStealthOnPlacement | true |
| stealthInteraction.maxPlacementsPerStealth | 1 |
| trapSettings.lifetimeSeconds | 10 |
| trapSettings.visibleToCaster | true |
| trapSettings.visibleToEnemies | false |
| trapSettings.trigger | enemyEnters |
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
| levelProgression.rules[0].rule.base | 0,5 |
| levelProgression.rules[0].rule.perLevel | 0,111 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 43 |
| levelProgression.rules[1].rule.rule.perLevel | 13 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 171 |
| levelProgression.rules[2].rule.perLevel | 53 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 92: Schattenschlag

Nur während der Tarnung einsetzbar. Verursacht einmalig physischen Grundschaden von 253 auf Stufe 1, plus 72 je weiterer Stufe, bis zu 901 auf Stufe 10. Mana-Kosten 63 auf Stufe 1, +18 je weiterer Stufe, maximal 225 auf Stufe 10. Cooldown 33 Sekunden, Castzeit 0,1 Sekunden. Die Animation dauert vorläufig 0,2 bis 0,3 Sekunden. Nach Ausführung wirst du für 1 Sekunde sichtbar. Anschließend kehrt die Tarnung nur zurück, wenn ihre ursprüngliche Dauer noch nicht abgelaufen ist und sie nicht durch einen Treffer beendet wurde. Die ursprüngliche Tarnzeit läuft während der Sichtbarkeit weiter und wird weder verlängert noch neu gestartet. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 10 |
| skillPointCosts.rankCosts.0 | 10 |
| skillPointCosts.rankCosts.1 | 14 |
| skillPointCosts.rankCosts.2 | 19 |
| skillPointCosts.rankCosts.3 | 23 |
| skillPointCosts.rankCosts.4 | 28 |
| skillPointCosts.rankCosts.5 | 32 |
| skillPointCosts.rankCosts.6 | 37 |
| skillPointCosts.rankCosts.7 | 41 |
| skillPointCosts.rankCosts.8 | 46 |
| skillPointCosts.rankCosts.9 | 50 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 23 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Shadow Strike |
| category | active |
| cd | 33 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Nur während der Tarnung einsetzbar. Verursacht einmalig physischen Grundschaden von 253 auf Stufe 1, plus 72 je weiterer Stufe, bis zu 901 auf Stufe 10. Mana-Kosten 63 auf Stufe 1, +18 je weiterer Stufe, maximal 225 auf Stufe 10. Cooldown 33 Sekunden, Castzeit 0,1 Sekunden. Die Animation dauert vorläufig 0,2 bis 0,3 Sekunden. Nach Ausführung wirst du für 1 Sekunde sichtbar. Anschließend kehrt die Tarnung nur zurück, wenn ihre ursprüngliche Dauer noch nicht abgelaufen ist und sie nicht durch einen Treffer beendet wurde. Die ursprüngliche Tarnzeit läuft während der Sichtbarkeit weiter und wird weder verlängert noch neu gestartet. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Usable only while stealthed. Deals physical base damage once, starting at 253 and increasing by 72 per additional level to 901 at level 10. Mana cost 63 at level 1, maximum 225 at level 10. Cooldown is 33 seconds and cast time is 0.1 seconds. Provisional animation duration is 0.2 to 0.3 seconds. After execution, reveals you for 1 second. Stealth then resumes only if its original duration remains and an incoming hit has not ended it. The original stealth timer continues during the reveal and is neither extended nor restarted. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 92 |
| patk | 253 |
| skillName_de | Schattenschlag |
| skillpoints | 1 |
| activationRequirements.requiresStealth | true |
| animationDurationRangeSeconds.min | 0,2 |
| animationDurationRangeSeconds.max | 0,3 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,1 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 63 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 63 |
| resourceCosts[0].scaling.perLevel | 18 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 253 |
| statScaling.patk.perLevel | 72 |
| stealthInteraction.temporaryRevealSeconds | 1 |
| stealthInteraction.resumeIfOriginalDurationRemains | true |
| stealthInteraction.originalDurationContinuesDuringReveal | true |
| stealthInteraction.incomingHitCancelsResumption | true |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
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
| levelProgression.rules[1].rule.base | 253 |
| levelProgression.rules[1].rule.perLevel | 72 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 191: Flinke Füße

Gruppenbuff: Laufgeschwindigkeitspunkte je Stufe 1 / 5,5 / 10. Das sind additive Rohpunkte zum Tempo, kein garantierter prozentualer Laufgeschwindigkeitsgewinn. Die konkrete Laufgeschwindigkeitskurve ist noch offen. Dauer 10 Minuten, Cooldown 60 Sekunden, Castzeit 0,2 Sekunden. Mana-Kosten: 47 + 19 je weiterer Stufe.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 80 |
| skillPointCosts.rankCosts.0 | 80 |
| skillPointCosts.rankCosts.1 | 100 |
| skillPointCosts.rankCosts.2 | 120 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 25 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Quick Feet |
| category | active |
| cd | 60 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| charClass[2] | Summoner |
| charClass[3] | Soulseeker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Gruppenbuff: Laufgeschwindigkeitspunkte je Stufe 1 / 5,5 / 10. Das sind additive Rohpunkte zum Tempo, kein garantierter prozentualer Laufgeschwindigkeitsgewinn. Die konkrete Laufgeschwindigkeitskurve ist noch offen. Dauer 10 Minuten, Cooldown 60 Sekunden, Castzeit 0,2 Sekunden. Mana-Kosten: 47 + 19 je weiterer Stufe. |
| description_eng | Group buff: movement-speed rating by level 1 / 5.5 / 10. Additive raw speed points, not a guaranteed percentage movement-speed increase. The movement-speed curve remains pending. Duration 10 minutes, cooldown 60 seconds, cast time 0.2 seconds. Mana cost: 47 + 19 per additional level. |
| dmgType (Altformat) | buff |
| dur | 600 |
| maxSkillLv | 3 |
| maxUpgradeLv | 10 |
| movementSpeed | 1 |
| nr | 191 |
| skillName_de | Flinke Füße |
| skillpoints | 1 |
| castTimeSeconds | 0,2 |
| mana (Aktivierungskosten, kein Bonus) | 47 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 47 |
| resourceCosts[0].scaling.perLevel | 19 |
| statBonusTargets.movementSpeed | selfAndAllies |
| statBonusUnits.movementSpeed | ratingPoints |
| statScaling.movementSpeed.type | table |
| statScaling.movementSpeed.values[0] | 1 |
| statScaling.movementSpeed.values[1] | 5,5 |
| statScaling.movementSpeed.values[2] | 10 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 47 |
| levelProgression.rules[0].rule.rule.perLevel | 19 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | movementSpeed |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.perLevel | 4,5 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| target | group |
| type | buff |
| castTimeStatus | defined |

### 90: Schattendolch

Nur während der Tarnung einsetzbar. Stürme aus maximal 3 Metern Entfernung auf ein Ziel zu und verursache einmalig physischen Schaden. Grundschaden 94, plus 51 je weiterer Stufe, bis zu 808 auf Stufe 15. Mana-Kosten 24 auf Stufe 1, +13 je weiterer Stufe, maximal 206 auf Stufe 15. Cooldown 9 Sekunden, Castzeit 0,1 Sekunden. Die Bewegung dauert vorläufig 0,5 bis 0,7 Sekunden. Als normaler Angriff beendet der Skill die Tarnung. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 6 |
| skillPointCosts.rankCosts.0 | 6 |
| skillPointCosts.rankCosts.1 | 8 |
| skillPointCosts.rankCosts.2 | 10 |
| skillPointCosts.rankCosts.3 | 12 |
| skillPointCosts.rankCosts.4 | 14 |
| skillPointCosts.rankCosts.5 | 16 |
| skillPointCosts.rankCosts.6 | 18 |
| skillPointCosts.rankCosts.7 | 20 |
| skillPointCosts.rankCosts.8 | 22 |
| skillPointCosts.rankCosts.9 | 24 |
| skillPointCosts.rankCosts.10 | 26 |
| skillPointCosts.rankCosts.11 | 28 |
| skillPointCosts.rankCosts.12 | 30 |
| skillPointCosts.rankCosts.13 | 32 |
| skillPointCosts.rankCosts.14 | 34 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 27 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Shadow Dagger |
| category | active |
| cd | 9 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Nur während der Tarnung einsetzbar. Stürme aus maximal 3 Metern Entfernung auf ein Ziel zu und verursache einmalig physischen Schaden. Grundschaden 94, plus 51 je weiterer Stufe, bis zu 808 auf Stufe 15. Mana-Kosten 24 auf Stufe 1, +13 je weiterer Stufe, maximal 206 auf Stufe 15. Cooldown 9 Sekunden, Castzeit 0,1 Sekunden. Die Bewegung dauert vorläufig 0,5 bis 0,7 Sekunden. Als normaler Angriff beendet der Skill die Tarnung. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Usable only while stealthed. Charge at a target from up to 3 metres away and deal physical damage once. Base damage starts at 94 and increases by 51 per additional level to 808 at level 15. Mana cost 24 at level 1, maximum 206 at level 15. Cooldown is 9 seconds and cast time is 0.1 seconds. Provisional movement duration is 0.5 to 0.7 seconds. As a normal attack, this skill ends stealth. |
| dmgType (Altformat) | physical |
| maxSkillLv | 15 |
| maxUpgradeLv | 10 |
| nr | 90 |
| patk | 94 |
| skillName_de | Schattendolch |
| skillpoints | 1 |
| activationRequirements.requiresStealth | true |
| castTimeSeconds | 0,1 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 24 |
| movement.type | chargeToEnemy |
| movement.distanceMeters | 3 |
| movement.durationBasis | targetDistance |
| movement.durationRangeSeconds.min | 0,5 |
| movement.durationRangeSeconds.max | 0,7 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 24 |
| resourceCosts[0].scaling.perLevel | 13 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 94 |
| statScaling.patk.perLevel | 51 |
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
| levelProgression.rules[0].rule.rule.base | 24 |
| levelProgression.rules[0].rule.rule.perLevel | 13 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 94 |
| levelProgression.rules[1].rule.perLevel | 51 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 146: List des Schurken

Eigenbuff für 300 Sekunden. Glück startet bei 1 und steigt um 0,5 je weiterer Stufe auf 5,5 auf Stufe 10. Ambush startet bei 6 und steigt um 1 je weiterer Stufe auf 15. Übernimmt einen Teil des Ambush-Bonus aus dem beim Schurken entfernten Scharfer Instinkt; kein zusätzlicher Angriffstempobonus. Castzeit fest 0,1 Sekunden., Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 10 |
| skillPointCosts.rankCosts.0 | 10 |
| skillPointCosts.rankCosts.1 | 14 |
| skillPointCosts.rankCosts.2 | 19 |
| skillPointCosts.rankCosts.3 | 23 |
| skillPointCosts.rankCosts.4 | 28 |
| skillPointCosts.rankCosts.5 | 32 |
| skillPointCosts.rankCosts.6 | 37 |
| skillPointCosts.rankCosts.7 | 41 |
| skillPointCosts.rankCosts.8 | 46 |
| skillPointCosts.rankCosts.9 | 50 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 30 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Rogue's Cunning |
| amb | 6 |
| category | active |
| cd | 60 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff für 300 Sekunden. Glück startet bei 1 und steigt um 0,5 je weiterer Stufe auf 5,5 auf Stufe 10. Ambush startet bei 6 und steigt um 1 je weiterer Stufe auf 15. Übernimmt einen Teil des Ambush-Bonus aus dem beim Schurken entfernten Scharfer Instinkt; kein zusätzlicher Angriffstempobonus. Castzeit fest 0,1 Sekunden., Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff for 300 seconds. Luck 1 plus 0.5 per additional level, maximum 5.5. Ambush 6 plus 1 per additional level, maximum 15 at level 10. Partly absorbs the Rogue-only removal of Sharp Instinct; no attack-speed bonus. Fixed cast time 0.1 seconds, cooldown 60 seconds. Activation costs are 50 Mana plus 13 per additional level, maximum 167. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 167 at level 10, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 300 |
| luck | 1 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 146 |
| skillName_de | List des Schurken |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statScaling.luck.type | linear |
| statScaling.luck.base | 1 |
| statScaling.luck.perLevel | 0,5 |
| statScaling.amb.type | linear |
| statScaling.amb.base | 6 |
| statScaling.amb.perLevel | 1 |
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
| levelProgression.rules[1].path[1] | luck |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.perLevel | 0,5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | amb |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 6 |
| levelProgression.rules[2].rule.perLevel | 1 |
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

### 67: Körperbeherrschung

Dauerhafter Attributanteil: je gelernter Stufe +1 Geschick, +0,5 Agilität; auf Stufe 10 insgesamt +10 Geschick, +5 Agilität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Allgemeine Mana-Kosten dauerhaft um 1 % auf Stufe 1–4, 2 % auf Stufe 5–9 und 3 % auf Stufe 10 reduziert.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 10 |
| skillPointCosts.rankCosts.0 | 10 |
| skillPointCosts.rankCosts.1 | 14 |
| skillPointCosts.rankCosts.2 | 19 |
| skillPointCosts.rankCosts.3 | 23 |
| skillPointCosts.rankCosts.4 | 28 |
| skillPointCosts.rankCosts.5 | 32 |
| skillPointCosts.rankCosts.6 | 37 |
| skillPointCosts.rankCosts.7 | 41 |
| skillPointCosts.rankCosts.8 | 46 |
| skillPointCosts.rankCosts.9 | 50 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 33 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Body Control |
| category | passive |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| charClass[2] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +1 Geschick, +0,5 Agilität; auf Stufe 10 insgesamt +10 Geschick, +5 Agilität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Allgemeine Mana-Kosten dauerhaft um 1 % auf Stufe 1–4, 2 % auf Stufe 5–9 und 3 % auf Stufe 10 reduziert. |
| description_eng | Permanent attribute component: +1 Dexterity, +0.5 Agility per learned level; at level 10, +10 Dexterity, +5 Agility total. This component always applies independently of any triggered effects. Permanently reduces all Mana costs by 1% at levels 1–4, 2% at 5–9 and 3% at 10. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 67 |
| skillName_de | Körperbeherrschung |
| skillpoints | 1 |
| agi | 0,5 |
| resourceCosts | [] |
| statScaling.dex.type | linear |
| statScaling.dex.base | 1 |
| statScaling.dex.perLevel | 1 |
| statScaling.agi.type | linear |
| statScaling.agi.base | 0,5 |
| statScaling.agi.perLevel | 0,5 |
| dex | 1 |
| effects[0].key | body-control-mana-efficiency |
| effects[0].type | resourceCostReduction |
| effects[0].target | self |
| effects[0].resource | mana |
| effects[0].appliesTo | allSkills |
| effects[0].value | 0,01 |
| effects[0].unit | fraction |
| effects[0].durationSeconds | 0 |
| effects[0].valueScaling.type | table |
| effects[0].valueScaling.values[0] | 0,01 |
| effects[0].valueScaling.values[1] | 0,01 |
| effects[0].valueScaling.values[2] | 0,01 |
| effects[0].valueScaling.values[3] | 0,01 |
| effects[0].valueScaling.values[4] | 0,02 |
| effects[0].valueScaling.values[5] | 0,02 |
| effects[0].valueScaling.values[6] | 0,02 |
| effects[0].valueScaling.values[7] | 0,02 |
| effects[0].valueScaling.values[8] | 0,02 |
| effects[0].valueScaling.values[9] | 0,03 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | dex |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | agi |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,5 |
| levelProgression.rules[1].rule.perLevel | 0,5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | thresholds |
| levelProgression.rules[2].rule.base | 0,01 |
| levelProgression.rules[2].rule.changes[0].level | 5 |
| levelProgression.rules[2].rule.changes[0].value | 0,02 |
| levelProgression.rules[2].rule.changes[1].level | 10 |
| levelProgression.rules[2].rule.changes[1].value | 0,03 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 80: Beweglichkeit

Eigenbuff für 20 bis 24,5 Sekunden. Bewegungsgeschwindigkeit steigt von 1 Prozent auf Stufe 1 um 1 Prozentpunkt je weiterer Stufe auf 10 Prozent auf Stufe 10. Agilität steigt gleichmäßig von 0 auf 5. Castzeit fest 0,1 Sekunden. Cooldown sinkt von 120 um 2 Sekunden je weiterer Stufe auf 102 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 10 |
| skillPointCosts.rankCosts.0 | 10 |
| skillPointCosts.rankCosts.1 | 14 |
| skillPointCosts.rankCosts.2 | 19 |
| skillPointCosts.rankCosts.3 | 23 |
| skillPointCosts.rankCosts.4 | 28 |
| skillPointCosts.rankCosts.5 | 32 |
| skillPointCosts.rankCosts.6 | 37 |
| skillPointCosts.rankCosts.7 | 41 |
| skillPointCosts.rankCosts.8 | 46 |
| skillPointCosts.rankCosts.9 | 50 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 37 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Movability |
| category | active |
| cd | 120 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| charClass[2] | Villian |
| charClass[3] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff für 20 bis 24,5 Sekunden. Bewegungsgeschwindigkeit steigt von 1 Prozent auf Stufe 1 um 1 Prozentpunkt je weiterer Stufe auf 10 Prozent auf Stufe 10. Agilität steigt gleichmäßig von 0 auf 5. Castzeit fest 0,1 Sekunden. Cooldown sinkt von 120 um 2 Sekunden je weiterer Stufe auf 102 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff lasting 20 to 24.5 seconds. Movement speed starts at 1 percent and increases by 1 percentage point per additional level to 10 percent at level 10. Agility increases evenly from 0 to 5. Fixed cast time 0.1 seconds. Cooldown decreases from 120 by 2 seconds per additional level to 102 seconds. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 167 at level 10, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 20 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 80 |
| skillName_de | Beweglichkeit |
| skillpoints | 1 |
| activation | manual |
| cooldownScaling.type | linear |
| cooldownScaling.base | 120 |
| cooldownScaling.perLevel | -2 |
| durationScaling.type | linear |
| durationScaling.base | 20 |
| durationScaling.perLevel | 0,5 |
| movementSpeed | 0,01 |
| statBonusUnits.agi | flat |
| statBonusUnits.movementSpeed | fraction |
| statScaling.agi.type | linear |
| statScaling.agi.base | 0 |
| statScaling.agi.perLevel | 0,556 |
| statScaling.movementSpeed.type | linear |
| statScaling.movementSpeed.base | 0,01 |
| statScaling.movementSpeed.perLevel | 0,01 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 120 |
| levelProgression.rules[0].rule.rule.perLevel | -2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 20 |
| levelProgression.rules[1].rule.perLevel | 0,5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | agi |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 0 |
| levelProgression.rules[2].rule.perLevel | 0,556 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | movementSpeed |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 0,01 |
| levelProgression.rules[3].rule.perLevel | 0,01 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | resourceCosts |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | scaling |
| levelProgression.rules[4].rule.kind | bounded |
| levelProgression.rules[4].rule.min | 0 |
| levelProgression.rules[4].rule.rule.kind | linear |
| levelProgression.rules[4].rule.rule.base | 50 |
| levelProgression.rules[4].rule.rule.perLevel | 13 |
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

### 20: Brecher des Lichts

Führt zwei schnelle physische Angriffe aus. Der Grundschaden je Treffer steigt von 234 um 37 je weiterer Stufe auf 567 auf Stufe 10. Zwei Treffer ergeben insgesamt 468 bis 1134 Skill-Grundschaden vor Charakterangriff und Verteidigung. Mana-Kosten 164 auf Stufe 1, +26 je weiterer Stufe, maximal 398 auf Stufe 10. Der Cooldown sinkt von 52 um 1 Sekunde je weiterer Stufe auf 43 Sekunden. Castzeit 0 Sekunden, vorläufige Animation 0,5 Sekunden. Keine Unsichtbarkeit und keine anhaltende Wirkungsdauer. Wenn der erste Treffer nicht kritisch ist, ist der zweite Treffer garantiert kritisch. War der erste Treffer kritisch, wird der zweite normal auf einen kritischen Treffer geprüft. Der Bonus gilt nur innerhalb dieser Zweierfolge; Crit-Immunitäten und das Verhalten bei verfehltem ersten Treffer werden später geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 10 |
| skillPointCosts.rankCosts.0 | 10 |
| skillPointCosts.rankCosts.1 | 14 |
| skillPointCosts.rankCosts.2 | 19 |
| skillPointCosts.rankCosts.3 | 23 |
| skillPointCosts.rankCosts.4 | 28 |
| skillPointCosts.rankCosts.5 | 32 |
| skillPointCosts.rankCosts.6 | 37 |
| skillPointCosts.rankCosts.7 | 41 |
| skillPointCosts.rankCosts.8 | 46 |
| skillPointCosts.rankCosts.9 | 50 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 37 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Breaker of Light |
| category | active |
| cd | 52 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Führt zwei schnelle physische Angriffe aus. Der Grundschaden je Treffer steigt von 234 um 37 je weiterer Stufe auf 567 auf Stufe 10. Zwei Treffer ergeben insgesamt 468 bis 1134 Skill-Grundschaden vor Charakterangriff und Verteidigung. Mana-Kosten 164 auf Stufe 1, +26 je weiterer Stufe, maximal 398 auf Stufe 10. Der Cooldown sinkt von 52 um 1 Sekunde je weiterer Stufe auf 43 Sekunden. Castzeit 0 Sekunden, vorläufige Animation 0,5 Sekunden. Keine Unsichtbarkeit und keine anhaltende Wirkungsdauer. Wenn der erste Treffer nicht kritisch ist, ist der zweite Treffer garantiert kritisch. War der erste Treffer kritisch, wird der zweite normal auf einen kritischen Treffer geprüft. Der Bonus gilt nur innerhalb dieser Zweierfolge; Crit-Immunitäten und das Verhalten bei verfehltem ersten Treffer werden später geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Performs two quick physical attacks. Base damage per hit increases from 234 by 37 per additional level to 567 at level 10. Both hits total 468 to 1134 skill base damage before character attack and defense. Mana cost 164 at level 1, maximum 398 at level 10. Cooldown decreases from 52 by 1 second per additional level to 43 seconds. Cast time is 0 seconds; provisional animation is 0.5 seconds. No invisibility or lasting effect. If the first hit is not critical, the second hit is guaranteed critical. If the first hit was critical, the second uses a normal critical check. This rule only applies within the two-hit sequence; critical immunities and a missed first hit remain to be reviewed. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 20 |
| patk | 234 |
| skillName_de | Brecher des Lichts |
| skillpoints | 1 |
| animationDurationSeconds | 0,5 |
| animationTimingStatus | provisional |
| attackExecution.hitCount | 2 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | pending |
| castTimeSeconds | 0 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 52 |
| cooldownScaling.perLevel | -1 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 164 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 164 |
| resourceCosts[0].scaling.perLevel | 26 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 234 |
| statScaling.patk.perLevel | 37 |
| effects[0].key | breaker-light-second-crit |
| effects[0].type | conditionalCriticalHit |
| effects[0].target | enemy |
| effects[0].hitIndex | 2 |
| effects[0].referenceHitIndex | 1 |
| effects[0].criticalCondition | previousHitNotCritical |
| effects[0].otherwiseCriticalCheck | normal |
| effects[0].value | 1 |
| effects[0].unit | fraction |
| effects[0].durationSeconds | 0 |
| effects[0].criticalImmunityStatus | pending |
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
| levelProgression.rules[0].rule.rule.base | 52 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 164 |
| levelProgression.rules[1].rule.rule.perLevel | 26 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 234 |
| levelProgression.rules[2].rule.perLevel | 37 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 111: Sturmklinge

Führt einen besonders wuchtigen Angriff mit beiden Dolchen gegen einen einzelnen Gegner aus. Kein Flächenangriff und kein zusätzlicher zweiter Schadenswurf allein aufgrund der beiden Waffen. Der physische Grundschaden steigt von 333 um 111 je weiterer Stufe auf 1332 auf Stufe 10. Mana-Kosten 83 auf Stufe 1, +28 je weiterer Stufe, maximal 335 auf Stufe 10. Der Cooldown startet bei 77 Sekunden, 30 Sekunden über dem alten Wert, und sinkt um 2 Sekunden je weiterer Stufe auf 59 Sekunden. Castzeit 0,1 Sekunden, vorläufige Animation 0,5 Sekunden. Keine anhaltende Wirkungsdauer. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 10 |
| skillPointCosts.rankCosts.0 | 10 |
| skillPointCosts.rankCosts.1 | 14 |
| skillPointCosts.rankCosts.2 | 19 |
| skillPointCosts.rankCosts.3 | 23 |
| skillPointCosts.rankCosts.4 | 28 |
| skillPointCosts.rankCosts.5 | 32 |
| skillPointCosts.rankCosts.6 | 37 |
| skillPointCosts.rankCosts.7 | 41 |
| skillPointCosts.rankCosts.8 | 46 |
| skillPointCosts.rankCosts.9 | 50 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 42 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Storm Blade |
| category | active |
| cd | 77 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Führt einen besonders wuchtigen Angriff mit beiden Dolchen gegen einen einzelnen Gegner aus. Kein Flächenangriff und kein zusätzlicher zweiter Schadenswurf allein aufgrund der beiden Waffen. Der physische Grundschaden steigt von 333 um 111 je weiterer Stufe auf 1332 auf Stufe 10. Mana-Kosten 83 auf Stufe 1, +28 je weiterer Stufe, maximal 335 auf Stufe 10. Der Cooldown startet bei 77 Sekunden, 30 Sekunden über dem alten Wert, und sinkt um 2 Sekunden je weiterer Stufe auf 59 Sekunden. Castzeit 0,1 Sekunden, vorläufige Animation 0,5 Sekunden. Keine anhaltende Wirkungsdauer. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Performs one powerful attack with both daggers against a single enemy. Not an area attack; using two weapons does not add a separate second damage hit. Base physical damage increases from 333 by 111 per additional level to 1332 at level 10. Mana cost 83 at level 1, maximum 335 at level 10.555555… per additional level to 780. Cooldown starts at 77 seconds, 30 seconds above the old value, and decreases by 2 seconds per additional level to 59 seconds. Cast time is 0.1 seconds; provisional animation is 0.5 seconds. No lasting effect. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 111 |
| patk | 333 |
| skillName_de | Sturmklinge |
| skillpoints | 1 |
| animationDurationSeconds | 0,5 |
| animationTimingStatus | provisional |
| attackExecution.targetMode | singleEnemy |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | pending |
| castTimeSeconds | 0,1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 77 |
| cooldownScaling.perLevel | -2 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 83 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 83 |
| resourceCosts[0].scaling.perLevel | 28 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 333 |
| statScaling.patk.perLevel | 111 |
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
| levelProgression.rules[0].rule.rule.base | 77 |
| levelProgression.rules[0].rule.rule.perLevel | -2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 83 |
| levelProgression.rules[1].rule.rule.perLevel | 28 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 333 |
| levelProgression.rules[2].rule.perLevel | 111 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 115: Überschallklinge

Führt nach 0,1 Sekunden Castzeit einen einzelnen physischen Treffer aus. Zehn Skillstufen mit ganzzahligen Stufentabellen. Die Animationsdauer ist separat noch festzulegen. Der getroffene Gegner wird unverändert für 0,5 Sekunden paralysiert; genaue Aktionseinschränkungen bleiben offen. Physischer Skill-Grundschaden steigt von 636 auf 1786. Mana-Kosten betragen exakt gerundete 25 Prozent des jeweiligen Skill-Grundschadens ohne Charakterangriff, vor Rabatten: 159 bis 447. Cooldown sinkt von 120 auf 105 Sekunden. Die neuen Maximalwerte entsprechen der bisherigen Skalierung um eine zusätzliche Stufe; die Paralyse wird nicht erhöht.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 10 |
| skillPointCosts.rankCosts.0 | 10 |
| skillPointCosts.rankCosts.1 | 14 |
| skillPointCosts.rankCosts.2 | 19 |
| skillPointCosts.rankCosts.3 | 23 |
| skillPointCosts.rankCosts.4 | 28 |
| skillPointCosts.rankCosts.5 | 32 |
| skillPointCosts.rankCosts.6 | 37 |
| skillPointCosts.rankCosts.7 | 41 |
| skillPointCosts.rankCosts.8 | 46 |
| skillPointCosts.rankCosts.9 | 50 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| learningRequirements.minimumCharacterLevel | 42 |
| skillName_eng | Supersonic Blade |
| category | active |
| cd | 120 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Führt nach 0,1 Sekunden Castzeit einen einzelnen physischen Treffer aus. Zehn Skillstufen mit ganzzahligen Stufentabellen. Die Animationsdauer ist separat noch festzulegen. Der getroffene Gegner wird unverändert für 0,5 Sekunden paralysiert; genaue Aktionseinschränkungen bleiben offen. Physischer Skill-Grundschaden steigt von 636 auf 1786. Mana-Kosten betragen exakt gerundete 25 Prozent des jeweiligen Skill-Grundschadens ohne Charakterangriff, vor Rabatten: 159 bis 447. Cooldown sinkt von 120 auf 105 Sekunden. Die neuen Maximalwerte entsprechen der bisherigen Skalierung um eine zusätzliche Stufe; die Paralyse wird nicht erhöht. |
| description_eng | Performs one physical hit after a 0.1-second cast. Ten levels use integer progression tables. Animation duration remains to be defined separately. Target paralysis remains 0.5 seconds at all levels; exact action restrictions remain pending. Physical base damage increases from 636 to 1786. Mana costs exactly rounded 25 percent of each level’s base damage excluding character attack, before discounts: 159 to 447. Cooldown decreases from 120 to 105 seconds. New maximum values correspond to one extra level of the former progression; paralysis is not increased. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 115 |
| patk | 636 |
| skillName_de | Überschallklinge |
| skillpoints | 1 |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | pending |
| castTimeSeconds | 0,1 |
| cooldownScaling.type | table |
| cooldownScaling.base | 120 |
| cooldownScaling.values[0] | 120 |
| cooldownScaling.values[1] | 118 |
| cooldownScaling.values[2] | 117 |
| cooldownScaling.values[3] | 115 |
| cooldownScaling.values[4] | 113 |
| cooldownScaling.values[5] | 112 |
| cooldownScaling.values[6] | 110 |
| cooldownScaling.values[7] | 108 |
| cooldownScaling.values[8] | 107 |
| cooldownScaling.values[9] | 105 |
| effects[0].key | supersonicParalysis |
| effects[0].type | control |
| effects[0].target | enemy |
| effects[0].controlKind | paralysis |
| effects[0].actionRestrictionsStatus | pending |
| effects[0].durationSeconds | 0,5 |
| effects[0].durationStatus | defined |
| effects[0].progressionStatus | defined |
| effectsVersion | 1 |
| mana (Aktivierungskosten, kein Bonus) | 159 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 159 |
| resourceCosts[0].scaling.values[0] | 159 |
| resourceCosts[0].scaling.values[1] | 191 |
| resourceCosts[0].scaling.values[2] | 223 |
| resourceCosts[0].scaling.values[3] | 255 |
| resourceCosts[0].scaling.values[4] | 287 |
| resourceCosts[0].scaling.values[5] | 319 |
| resourceCosts[0].scaling.values[6] | 351 |
| resourceCosts[0].scaling.values[7] | 383 |
| resourceCosts[0].scaling.values[8] | 415 |
| resourceCosts[0].scaling.values[9] | 447 |
| statScaling.patk.type | table |
| statScaling.patk.base | 636 |
| statScaling.patk.values[0] | 636 |
| statScaling.patk.values[1] | 764 |
| statScaling.patk.values[2] | 892 |
| statScaling.patk.values[3] | 1.019 |
| statScaling.patk.values[4] | 1.147 |
| statScaling.patk.values[5] | 1.275 |
| statScaling.patk.values[6] | 1.403 |
| statScaling.patk.values[7] | 1.530 |
| statScaling.patk.values[8] | 1.658 |
| statScaling.patk.values[9] | 1.786 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | periodicSteps |
| levelProgression.rules[0].rule.rule.base | 120 |
| levelProgression.rules[0].rule.rule.steps[0] | -2 |
| levelProgression.rules[0].rule.rule.steps[1] | -1 |
| levelProgression.rules[0].rule.rule.steps[2] | -2 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | outputCost |
| levelProgression.rules[1].rule.factor | 0,25 |
| levelProgression.rules[1].rule.basis | damage |
| levelProgression.rules[1].rule.minimum | 0 |
| levelProgression.rules[1].source | verifiedManaPricing |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | periodicSteps |
| levelProgression.rules[2].rule.base | 636 |
| levelProgression.rules[2].rule.steps[0] | 128 |
| levelProgression.rules[2].rule.steps[1] | 128 |
| levelProgression.rules[2].rule.steps[2] | 127 |
| levelProgression.rules[2].rule.steps[3] | 128 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 65: Klingentornado

Führt vier physische Treffer gegen Gegner vor dir aus. Der Grundschaden je Treffer steigt von 113 um 41 je weiterer Stufe auf 482 auf Stufe 10; vier volle Treffer entsprechen 1928 Skill-Grundschaden vor Charakterangriff und Verteidigung. Mana-Kosten 113 auf Stufe 1, +41 je weiterer Stufe, maximal 482 auf Stufe 10. Der Cooldown sinkt von 75 um 1 Sekunde je weiterer Stufe auf 66 Sekunden. Castzeit 0,1 Sekunden. Die Animation dauert vorläufig 4 Sekunden und kann durch Attack Speed auf ungefähr 1 Sekunde sinken; die genaue Umrechnung wird im Spiel geprüft. Kein zusätzlicher DoT. Trefferbereich und Trefferzeitpunkte bleiben offen. Die frühere Angabe von 50 Prozent Schaden an Nebenzielen wird separat geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 10 |
| skillPointCosts.rankCosts.0 | 10 |
| skillPointCosts.rankCosts.1 | 14 |
| skillPointCosts.rankCosts.2 | 19 |
| skillPointCosts.rankCosts.3 | 23 |
| skillPointCosts.rankCosts.4 | 28 |
| skillPointCosts.rankCosts.5 | 32 |
| skillPointCosts.rankCosts.6 | 37 |
| skillPointCosts.rankCosts.7 | 41 |
| skillPointCosts.rankCosts.8 | 46 |
| skillPointCosts.rankCosts.9 | 50 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 47 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Blade Flurry |
| category | active |
| cd | 75 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Führt vier physische Treffer gegen Gegner vor dir aus. Der Grundschaden je Treffer steigt von 113 um 41 je weiterer Stufe auf 482 auf Stufe 10; vier volle Treffer entsprechen 1928 Skill-Grundschaden vor Charakterangriff und Verteidigung. Mana-Kosten 113 auf Stufe 1, +41 je weiterer Stufe, maximal 482 auf Stufe 10. Der Cooldown sinkt von 75 um 1 Sekunde je weiterer Stufe auf 66 Sekunden. Castzeit 0,1 Sekunden. Die Animation dauert vorläufig 4 Sekunden und kann durch Attack Speed auf ungefähr 1 Sekunde sinken; die genaue Umrechnung wird im Spiel geprüft. Kein zusätzlicher DoT. Trefferbereich und Trefferzeitpunkte bleiben offen. Die frühere Angabe von 50 Prozent Schaden an Nebenzielen wird separat geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Performs four physical hits against enemies in front of you. Base damage per hit increases from 113 by 41 per additional level to 482 at level 10; four full hits total 1928 skill base damage before character attack and defense. Mana cost 113 at level 1, maximum 482 at level 10. Cooldown decreases from 75 by 1 second per additional level to 66 seconds. Cast time is 0.1 seconds. Provisional animation is 4 seconds and may decrease to roughly 1 second through attack speed; exact conversion will be verified in game. No additional DoT. Hit area and timing remain pending. The former rule of 50 percent damage to secondary targets will be reviewed separately. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 65 |
| patk | 113 |
| skillName_de | Klingentornado |
| skillpoints | 1 |
| animationDurationRangeSeconds.min | 1 |
| animationDurationRangeSeconds.max | 4 |
| animationDurationSeconds | 4 |
| animationScalesWithAttackSpeed | true |
| animationTimingStatus | provisional |
| attackArea.shape | frontal |
| attackArea.center | caster |
| attackArea.geometryStatus | pending |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | perHit |
| attackArea.timingStatus | pending |
| attackExecution.hitCount | 4 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | pending |
| castTimeSeconds | 0,1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 75 |
| cooldownScaling.perLevel | -1 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 113 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 113 |
| resourceCosts[0].scaling.perLevel | 41 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 113 |
| statScaling.patk.perLevel | 41 |
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
| levelProgression.rules[0].rule.rule.base | 75 |
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
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 113 |
| levelProgression.rules[2].rule.perLevel | 41 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 126: Wirbelnde Klinge

Führt fünf physische Treffer im Bereich bis 3 Meter vor dir aus, ohne nach vorne zu stürmen. Jeder Treffer hat auf Skilllevel 1 einen Grundangriffswert von 277, der je weiterer Stufe um 35 auf 592 steigt. Die Mana-Kosten 346 auf Stufe 1, +44 je weiterer Stufe, maximal 742 auf Stufe 10. Der Cooldown sinkt von 75 um 2 Sekunden je weiterer Stufe auf 57 Sekunden. Die Ausführung dauert vorläufig 0,8 bis 1 Sekunde. Genaue Breite des Trefferbereichs und Trefferzeitpunkte werden im Spiel festgelegt. Castzeit 0,1 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 10 |
| skillPointCosts.rankCosts.0 | 10 |
| skillPointCosts.rankCosts.1 | 14 |
| skillPointCosts.rankCosts.2 | 19 |
| skillPointCosts.rankCosts.3 | 23 |
| skillPointCosts.rankCosts.4 | 28 |
| skillPointCosts.rankCosts.5 | 32 |
| skillPointCosts.rankCosts.6 | 37 |
| skillPointCosts.rankCosts.7 | 41 |
| skillPointCosts.rankCosts.8 | 46 |
| skillPointCosts.rankCosts.9 | 50 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 47 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Bladestorm |
| category | active |
| cd | 75 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| charClass[2] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Führt fünf physische Treffer im Bereich bis 3 Meter vor dir aus, ohne nach vorne zu stürmen. Jeder Treffer hat auf Skilllevel 1 einen Grundangriffswert von 277, der je weiterer Stufe um 35 auf 592 steigt. Die Mana-Kosten 346 auf Stufe 1, +44 je weiterer Stufe, maximal 742 auf Stufe 10. Der Cooldown sinkt von 75 um 2 Sekunden je weiterer Stufe auf 57 Sekunden. Die Ausführung dauert vorläufig 0,8 bis 1 Sekunde. Genaue Breite des Trefferbereichs und Trefferzeitpunkte werden im Spiel festgelegt. Castzeit 0,1 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Performs five physical hits in the area up to 3 meters in front of you, without charging forward. Each hit has a base attack value of 277 at skill level 1, increasing by 35 per additional level to 592. Mana cost 346 at level 1, maximum 742 at level 10. Cooldown decreases from 75 by 2 seconds per additional level to 57 seconds. Execution provisionally lasts 0.8 to 1 second. Exact area width and hit timings will be defined in game. Cast time is 0.1 seconds. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 126 |
| patk | 277 |
| skillName_de | Wirbelnde Klinge |
| skillpoints | 1 |
| animationDurationRangeSeconds.min | 0,8 |
| animationDurationRangeSeconds.max | 1 |
| animationTimingStatus | provisional |
| attackArea.shape | frontal |
| attackArea.center | caster |
| attackArea.rangeMeters | 3 |
| attackArea.geometryStatus | pending |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | perHit |
| attackArea.timingStatus | pending |
| attackExecution.hitCount | 5 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | pending |
| cooldownScaling.type | linear |
| cooldownScaling.base | 75 |
| cooldownScaling.perLevel | -2 |
| mana (Aktivierungskosten, kein Bonus) | 346 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 346 |
| resourceCosts[0].scaling.perLevel | 44 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 277 |
| statScaling.patk.perLevel | 35 |
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
| levelProgression.rules[0].rule.rule.base | 75 |
| levelProgression.rules[0].rule.rule.perLevel | -2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 346 |
| levelProgression.rules[1].rule.rule.perLevel | 44 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 277 |
| levelProgression.rules[2].rule.perLevel | 35 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 238: Attentäter

Eigenbuff mit zehn Stufen. Gewährt 0 bis 10 % zusätzliche Angriffsgeschwindigkeit, gleichmäßig über die zehn Stufen verteilt. Kein Ambush-Bonus. Dauer steigt von 11 auf 20 Sekunden. Cooldown 120 Sekunden, feste Castzeit 0,1 Sekunden unabhängig von Angriffs- oder Castgeschwindigkeit. Keine zusätzlichen oder doppelten Auto-Attack-Treffer. Bei gleichzeitig aktivem Herz des Verräters auf Stufe 5 stellt jeder eigene Auto-Attack 12 Mana wieder her. Aktivierungskosten 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. Animationsdauer ist von der Castzeit getrennt.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 13 |
| skillPointCosts.rankCosts.0 | 13 |
| skillPointCosts.rankCosts.1 | 19 |
| skillPointCosts.rankCosts.2 | 25 |
| skillPointCosts.rankCosts.3 | 31 |
| skillPointCosts.rankCosts.4 | 37 |
| skillPointCosts.rankCosts.5 | 43 |
| skillPointCosts.rankCosts.6 | 49 |
| skillPointCosts.rankCosts.7 | 55 |
| skillPointCosts.rankCosts.8 | 61 |
| skillPointCosts.rankCosts.9 | 67 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 55 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| activationRequirements.targetHealthBelowFractionScaling.values | [] |
| attackExecution.hitCountScaling.values | [] |
| attackExecution.damageMultiplierScaling.values | [] |
| attackExecution.armorIgnoreFractionByLevel | [] |
| movement.distanceScaling.values | [] |
| durationScaling.type | linear |
| durationScaling.base | 11 |
| durationScaling.perLevel | 1 |
| cooldownScaling.values | [] |
| burstUsage.usesPerBurstScaling.values | [] |
| burstUsage.afterBurstCooldownScaling.values | [] |
| burstUsage.belowTargetHealthFractionByLevel | [] |
| burstUsage.usesBelowThresholdByLevel | [] |
| triggerCondition.chancePerCheck | null |
| triggerCondition.healthThresholds | [] |
| allowedRaces | [] |
| isClassCore | false |
| nr | 238 |
| skillName_eng | Assassin |
| skillName_de | Attentäter |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| maxSkillLv | 10 |
| currentUpgradeLv | 0 |
| maxUpgradeLv | 10 |
| category | active |
| description_eng | Self buff with ten levels. Grants 0 to 10% additional attack speed evenly across ten levels. No Ambush bonus. Duration increases from 11 to 20 seconds. Cooldown 120 seconds, fixed cast time 0.1 seconds unaffected by attack or cast speed. No additional or double basic attack hits. While Heart of the Traitor at level 5 is also active, each own basic attack restores 12 Mana. Activation costs 50 Mana plus 13 per additional level, up to 167 before discounts. Ongoing Mana drain is calculated separately; animation duration is separate. |
| description_de | Eigenbuff mit zehn Stufen. Gewährt 0 bis 10 % zusätzliche Angriffsgeschwindigkeit, gleichmäßig über die zehn Stufen verteilt. Kein Ambush-Bonus. Dauer steigt von 11 auf 20 Sekunden. Cooldown 120 Sekunden, feste Castzeit 0,1 Sekunden unabhängig von Angriffs- oder Castgeschwindigkeit. Keine zusätzlichen oder doppelten Auto-Attack-Treffer. Bei gleichzeitig aktivem Herz des Verräters auf Stufe 5 stellt jeder eigene Auto-Attack 12 Mana wieder her. Aktivierungskosten 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. Animationsdauer ist von der Castzeit getrennt. |
| dmgType (Altformat) | selfbuff |
| skillpoints | 1 |
| cd | 120 |
| dur | 11 |
| atkSpeed | 0 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statBonusUnits.atkSpeed | fraction |
| statScaling.atkSpeed.type | linear |
| statScaling.atkSpeed.base | 0 |
| statScaling.atkSpeed.perLevel | 0,011 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 11 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 50 |
| levelProgression.rules[1].rule.rule.perLevel | 13 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | atkSpeed |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 0 |
| levelProgression.rules[2].rule.perLevel | 0,011 |
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

### 189: Herz des Verräters

Eigenbuff für 600 Sekunden. Gewährt 0 bis 5 Punkte Angriffsgeschwindigkeit über 5 Stufen und 2 bis 5 Prozent Laufgeschwindigkeit. Cooldown 60 Sekunden. Zusatzeffekt auf Stufe 5: Solange dieser Buff und Attentäter gleichzeitig aktiv sind, stellt jeder eigene Auto-Attack 12 Mana wieder her. Begleiterangriffe zählen nicht. Castzeit fest 0,1 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 102 auf Stufe 5, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 40 |
| skillPointCosts.rankCosts.0 | 40 |
| skillPointCosts.rankCosts.1 | 60 |
| skillPointCosts.rankCosts.2 | 80 |
| skillPointCosts.rankCosts.3 | 100 |
| skillPointCosts.rankCosts.4 | 120 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 60 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Heart of the Traitor |
| atkSpeed | 0 |
| category | active |
| cd | 60 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff für 600 Sekunden. Gewährt 0 bis 5 Punkte Angriffsgeschwindigkeit über 5 Stufen und 2 bis 5 Prozent Laufgeschwindigkeit. Cooldown 60 Sekunden. Zusatzeffekt auf Stufe 5: Solange dieser Buff und Attentäter gleichzeitig aktiv sind, stellt jeder eigene Auto-Attack 12 Mana wieder her. Begleiterangriffe zählen nicht. Castzeit fest 0,1 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 102 auf Stufe 5, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff lasting 600 seconds. Grants 0 to 5 attack speed rating points and 2 to 5 percent movement speed across 5 levels. At level 5, each successful own basic attack restores 12 Mana while Assassin is also active; companion attacks do not count. Fixed cast time 0.1 seconds.; cooldown 60 seconds. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 102 at level 5, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 600 |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| movementSpeed | 0,02 |
| nr | 189 |
| skillName_de | Herz des Verräters |
| skillpoints | 1 |
| statBonusUnits.atkSpeed | fraction |
| statBonusUnits.movementSpeed | fraction |
| statScaling.atkSpeed.type | linear |
| statScaling.atkSpeed.base | 0 |
| statScaling.atkSpeed.perLevel | 0,013 |
| statScaling.movementSpeed.type | linear |
| statScaling.movementSpeed.base | 0,02 |
| statScaling.movementSpeed.perLevel | 0,008 |
| effects[0].key | traitor-assassin-mana |
| effects[0].type | resourceGain |
| effects[0].target | self |
| effects[0].resource | mana |
| effects[0].value | 12 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 600 |
| effects[0].minimumSkillLevel | 5 |
| effects[0].requiredActiveSkillNumbers[0] | 189 |
| effects[0].requiredActiveSkillNumbers[1] | 238 |
| effects[0].gainTrigger | ownBasicAttack |
| effects[0].oncePerAttackAction | true |
| effects[0].excludeCompanionAttacks | true |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| castTimeSeconds | 0,1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | atkSpeed |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0 |
| levelProgression.rules[0].rule.perLevel | 0,013 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | movementSpeed |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,02 |
| levelProgression.rules[1].rule.perLevel | 0,008 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 50 |
| levelProgression.rules[2].rule.rule.perLevel | 13 |
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

### 243: Technische Perfektion

Dauerhafter Attributanteil: je gelernter Stufe +3,25 Stärke; auf Stufe 4 insgesamt +13 Stärke. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Permanenter passiver Skill mit vier Stufen. Jeder aktuelle Geschickpunkt gewährt je nach Skillstufe zusätzlich 1/2/3/4 Max-Mana. Verwendet den aktuellen Gesamtwert einschließlich Geschick aus Ausrüstung, permanenten Passiven und aktiven Attributboni; spätere Änderungen wirken auf den Bonus. Bei 55 bekannten Geschickpunkten ergibt das 55/110/165/220 zusätzliches Max-Mana, zuzüglich eines noch nicht festgelegten Geschick-Startwerts. Keine direkte Mana-Wiederherstellung, zusätzliche Regeneration oder weitere Manakostenreduktion. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer. Aktuelles Mana bei Änderungen des Maximums wird nach der noch zentral festzulegenden Regel behandelt.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 60 |
| skillPointCosts.rankCosts.0 | 60 |
| skillPointCosts.rankCosts.1 | 87 |
| skillPointCosts.rankCosts.2 | 113 |
| skillPointCosts.rankCosts.3 | 140 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 60 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| attributeConversionBonus.sourceStat | dex |
| attributeConversionBonus.targetStat | maxMana |
| attributeConversionBonus.amountPerPoint | 1 |
| attributeConversionBonus.usesCurrentAttributeValue | true |
| attributeConversionBonus.amountPerPointScaling.type | linear |
| attributeConversionBonus.amountPerPointScaling.base | 1 |
| attributeConversionBonus.amountPerPointScaling.perLevel | 1 |
| soulGenerationSettings.maximumUniqueEnemiesScaling.values | [] |
| soulStorageSettings.capacityScaling.values | [] |
| activationRequirements.targetHealthBelowFractionScaling.values | [] |
| tetherSettings.worldAnchorKinds | [] |
| collectedPointScaling.thresholds | [] |
| collectedPointScaling.durationSecondsByTier | [] |
| collectedPointScaling.baseDamageBonusFractionByTier | [] |
| attackExecution.additionalDamageFromSacrificedHealth.values | [] |
| attackExecution.hitCountScaling.values | [] |
| attackExecution.damageMultiplierScaling.values | [] |
| attackExecution.armorIgnoreFractionByLevel | [] |
| attackArea.radiusScaling.values | [] |
| attackArea.maxTargetsScaling.values | [] |
| movement.distanceScaling.values | [] |
| movement.hopDirections | [] |
| durationScaling.values | [] |
| cooldownScaling.values | [] |
| resourceCosts | [] |
| burstUsage.usesPerBurstScaling.values | [] |
| burstUsage.afterBurstCooldownScaling.values | [] |
| burstUsage.belowTargetHealthFractionByLevel | [] |
| burstUsage.usesBelowThresholdByLevel | [] |
| triggerCondition.chancePerCheckScaling.values | [] |
| triggerCondition.chancePerCheck | null |
| triggerCondition.healthThresholds | [] |
| allowedRaces | [] |
| isClassCore | false |
| nr | 243 |
| skillName_eng | Technical Perfection |
| skillName_de | Technische Perfektion |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| maxSkillLv | 4 |
| currentUpgradeLv | 0 |
| maxUpgradeLv | 10 |
| category | passive |
| description_eng | Permanent attribute component: +3.25 Strength per learned level; at level 4, +13 Strength total. This component always applies independently of any triggered effects. Permanent passive with four levels. Each current Dexterity point grants 1/2/3/4 additional maximum Mana according to skill level. Uses current total Dexterity including equipment, permanent passives and active attribute bonuses; later changes affect the bonus. At 55 known Dexterity this grants 55/110/165/220 maximum Mana, plus any starting Dexterity still undefined. No instant Mana restoration, extra regeneration or further cost reduction. No activation cost, cast time, cooldown or limited duration. Current-Mana handling on maximum changes follows a central rule still pending. |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +3,25 Stärke; auf Stufe 4 insgesamt +13 Stärke. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Permanenter passiver Skill mit vier Stufen. Jeder aktuelle Geschickpunkt gewährt je nach Skillstufe zusätzlich 1/2/3/4 Max-Mana. Verwendet den aktuellen Gesamtwert einschließlich Geschick aus Ausrüstung, permanenten Passiven und aktiven Attributboni; spätere Änderungen wirken auf den Bonus. Bei 55 bekannten Geschickpunkten ergibt das 55/110/165/220 zusätzliches Max-Mana, zuzüglich eines noch nicht festgelegten Geschick-Startwerts. Keine direkte Mana-Wiederherstellung, zusätzliche Regeneration oder weitere Manakostenreduktion. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer. Aktuelles Mana bei Änderungen des Maximums wird nach der noch zentral festzulegenden Regel behandelt. |
| dmgType (Altformat) | passive |
| skillpoints | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | attributeConversionBonus |
| levelProgression.rules[0].path[1] | amountPerPointScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | str |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 3,25 |
| levelProgression.rules[1].rule.perLevel | 3,25 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |
| statScaling.str.type | linear |
| statScaling.str.base | 3,25 |
| statScaling.str.perLevel | 3,25 |
| str | 3,25 |

### 113: Tödlicher Tanz

Springt zum Gegner und flitzt zwischen ausreichend nahen Gegnern hin und her. Trefferzahl nach Skillstufe 1 bis 10: 3, 3, 4, 4, 5, 5, 6, 6, 7, 8. Jeder erreichbare Gegner wird zunächst einmal getroffen, bevor Ziele erneut getroffen werden. Bei nur einem Gegner erhält dieser alle Treffer, auch ein Boss. Drei Treffer gegen zwei Gegner verteilen sich 2 zu 1; acht Treffer gegen acht Gegner ergeben je einen Treffer. Physischer Grundschaden je Treffer steigt von 138 um 37 je weiterer Stufe auf 471. Auf Stufe 10 ergeben acht Treffer 3768 Skill-Grundschaden vor Charakterangriff und Verteidigung. Am Ende bleibt der Schurke beim letzten Ziel stehen. Bei einem einzelnen Ziel endet er auf der dem Start gegenüberliegenden Seite des Gegners. Mana-Kosten 104 auf Stufe 1, Stufenwerte 104, 131, 212, 249, 358, 404, 540, 596, 760, 942, maximal 942 auf Stufe 10. Cooldown 68 Sekunden, Castzeit 0,1 Sekunden. Die bisherige Ausführung von 0,3 Sekunden bleibt vorläufig; Der Suchradius beträgt 3,5 Meter um den Spieler, nicht um den Gegner. Bei jedem weiteren Sprung wird neu innerhalb von 3,5 Metern um die aktuelle Spielerposition nach einem erreichbaren Ziel gesucht. Der Suchradius bewegt sich mit dem Spieler. Trefferzeitpunkte und Bewegungsanimation werden im Spiel geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 13 |
| skillPointCosts.rankCosts.0 | 13 |
| skillPointCosts.rankCosts.1 | 19 |
| skillPointCosts.rankCosts.2 | 25 |
| skillPointCosts.rankCosts.3 | 31 |
| skillPointCosts.rankCosts.4 | 37 |
| skillPointCosts.rankCosts.5 | 43 |
| skillPointCosts.rankCosts.6 | 49 |
| skillPointCosts.rankCosts.7 | 55 |
| skillPointCosts.rankCosts.8 | 61 |
| skillPointCosts.rankCosts.9 | 67 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 65 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Deadly Dance |
| category | active |
| cd | 68 |
| charClass[0] | Villian |
| charClass[1] | Shadowwarrior |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Springt zum Gegner und flitzt zwischen ausreichend nahen Gegnern hin und her. Trefferzahl nach Skillstufe 1 bis 10: 3, 3, 4, 4, 5, 5, 6, 6, 7, 8. Jeder erreichbare Gegner wird zunächst einmal getroffen, bevor Ziele erneut getroffen werden. Bei nur einem Gegner erhält dieser alle Treffer, auch ein Boss. Drei Treffer gegen zwei Gegner verteilen sich 2 zu 1; acht Treffer gegen acht Gegner ergeben je einen Treffer. Physischer Grundschaden je Treffer steigt von 138 um 37 je weiterer Stufe auf 471. Auf Stufe 10 ergeben acht Treffer 3768 Skill-Grundschaden vor Charakterangriff und Verteidigung. Am Ende bleibt der Schurke beim letzten Ziel stehen. Bei einem einzelnen Ziel endet er auf der dem Start gegenüberliegenden Seite des Gegners. Mana-Kosten 104 auf Stufe 1, Stufenwerte 104, 131, 212, 249, 358, 404, 540, 596, 760, 942, maximal 942 auf Stufe 10. Cooldown 68 Sekunden, Castzeit 0,1 Sekunden. Die bisherige Ausführung von 0,3 Sekunden bleibt vorläufig; Der Suchradius beträgt 3,5 Meter um den Spieler, nicht um den Gegner. Bei jedem weiteren Sprung wird neu innerhalb von 3,5 Metern um die aktuelle Spielerposition nach einem erreichbaren Ziel gesucht. Der Suchradius bewegt sich mit dem Spieler. Trefferzeitpunkte und Bewegungsanimation werden im Spiel geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Leaps to an enemy and rapidly moves between sufficiently close enemies. Hit counts at skill levels 1 through 10 are 3, 3, 4, 4, 5, 5, 6, 6, 7, 8. Each reachable enemy is hit once before targets repeat. A single enemy receives every hit, including a boss. Three hits against two enemies distribute as 2 and 1; eight hits against eight enemies give one each. Base physical damage per hit increases from 138 by 37 per additional level to 471. At level 10 eight hits total 3768 skill base damage before character attack and defense. The Rogue finishes at the last target. Against a single target, ends on the opposite side of the enemy from the starting position. Mana cost 104 at level 1, maximum 942 at level 10. Cooldown is 68 seconds, cast time is 0.1 seconds. Existing 0.3 second execution remains provisional; target search radius is 3.5 meters around the player, not around an enemy. Each subsequent jump searches again within 3.5 meters of the current player position. The search radius follows the player. Hit timings and movement animation will be reviewed in game. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 113 |
| patk | 138 |
| skillName_de | Tödlicher Tanz |
| skillpoints | 1 |
| animationDurationSeconds | 0,3 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,1 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 104 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.values[0] | 104 |
| resourceCosts[0].scaling.values[1] | 131 |
| resourceCosts[0].scaling.values[2] | 212 |
| resourceCosts[0].scaling.values[3] | 249 |
| resourceCosts[0].scaling.values[4] | 358 |
| resourceCosts[0].scaling.values[5] | 404 |
| resourceCosts[0].scaling.values[6] | 540 |
| resourceCosts[0].scaling.values[7] | 596 |
| resourceCosts[0].scaling.values[8] | 760 |
| resourceCosts[0].scaling.values[9] | 942 |
| resourceCosts[0].scaling.base | 104 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 138 |
| statScaling.patk.perLevel | 37 |
| attackExecution.hitCount | 3 |
| attackExecution.hitCountScaling.type | table |
| attackExecution.hitCountScaling.values[0] | 3 |
| attackExecution.hitCountScaling.values[1] | 3 |
| attackExecution.hitCountScaling.values[2] | 4 |
| attackExecution.hitCountScaling.values[3] | 4 |
| attackExecution.hitCountScaling.values[4] | 5 |
| attackExecution.hitCountScaling.values[5] | 5 |
| attackExecution.hitCountScaling.values[6] | 6 |
| attackExecution.hitCountScaling.values[7] | 6 |
| attackExecution.hitCountScaling.values[8] | 7 |
| attackExecution.hitCountScaling.values[9] | 8 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | pending |
| attackExecution.targetDistribution | roundRobinBeforeRepeating |
| attackExecution.canRepeatTarget | true |
| movement.type | targetChain |
| movement.finishAt | lastTarget |
| movement.singleTargetFinishSide | oppositeStartingSide |
| attackArea.shape | circle |
| attackArea.center | caster |
| attackArea.centerTracking | casterCurrentPosition |
| attackArea.radiusMeters | 3,5 |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | perHit |
| attackArea.timingStatus | pending |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
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
| levelProgression.rules[1].rule.base | 138 |
| levelProgression.rules[1].rule.perLevel | 37 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | attackExecution |
| levelProgression.rules[2].path[1] | hitCountScaling |
| levelProgression.rules[2].rule.kind | rounded |
| levelProgression.rules[2].rule.mode | round |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 2,5 |
| levelProgression.rules[2].rule.rule.perLevel | 0,556 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

## Gemeinsame Blöcke

[Kreaturenskills](../shared-creature-skills.md) und [Trainingsskills](../shared-training-skills.md) werden einmal gemeinsam geprüft. Die normale Lerngrenze für Bindung und Zucht ist bereits 1. Taming und Kontrolle sind für Schurke und Schattenkrieger auf Stufe 1 begrenzt.

## Reihenfolge

Zuerst die noch unvollständigen Schurken-Skills durchgehen, gemeinsame geprüfte Definitionen übernehmen, anschließend permanente Passive auf den Ausrüstungsstand rechnen. Aktive Buffs, automatische Kampf-Procs und endgültige Schadensverrechnung folgen separat.

<!-- full-skill-point-costs:start -->
## Skillpunktkosten je Stufe

Aktuell vollständig gespeichert: **8227 SP** für alle 32 Skills einschließlich günstiger Taming-Sonderkosten. Weitere Charakterlevel für einzelne Ausbaustufen sind davon getrennt und noch zu verteilen. Alte Pauschalsummen in historischen Prüfabschnitten gelten nicht für diese Preise.

| Nr | Skill | SP je Skillstufe | Gesamt-SP |
| ---: | --- | --- | ---: |
| 2 | Überleben | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 17 | Blutklinge | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 20 | Brecher des Lichts | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 22 | Dolchtraining | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 27 | Dunkler Schlag | 12 / 12 / 13 / 13 / 13 / 14 / 14 / 14 / 15 / 15 / 15 / 15 / 16 / 16 / 16 / 17 / 17 / 17 / 18 / 18 | 300 |
| 43 | Erweiterung der Sinne | 12 / 16 / 20 / 24 / 28 / 32 / 36 / 40 / 44 / 48 | 300 |
| 65 | Klingentornado | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 67 | Körperbeherrschung | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 70 | Kunai Todesstoß | 30 / 45 / 60 / 75 / 90 | 300 |
| 80 | Beweglichkeit | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 90 | Schattendolch | 6 / 8 / 10 / 12 / 14 / 16 / 18 / 20 / 22 / 24 / 26 / 28 / 30 / 32 / 34 | 300 |
| 91 | Schattenfalle | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 92 | Schattenschlag | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 111 | Sturmklinge | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 113 | Tödlicher Tanz | 13 / 19 / 25 / 31 / 37 / 43 / 49 / 55 / 61 / 67 | 400 |
| 115 | Überschallklinge | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 126 | Wirbelnde Klinge | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 133 | Tamen | 10 | 10 |
| 134 | Bindung | 6 | 6 |
| 135 | Kontrolle | 4 | 4 |
| 136 | Beschwören | 1 | 1 |
| 137 | Zurückrufen | 1 | 1 |
| 138 | Zucht | 5 | 5 |
| 139 | Ausdauertraining | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 144 | Rüstungstraining | 1 / 7 / 14 / 20 / 27 / 33 / 40 / 46 / 53 / 59 | 300 |
| 146 | List des Schurken | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 188 | Dunkler Schleier | 130 / 170 | 300 |
| 189 | Herz des Verräters | 40 / 60 / 80 / 100 / 120 | 400 |
| 191 | Flinke Füße | 80 / 100 / 120 | 300 |
| 201 | Waffentraining | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 238 | Attentäter | 13 / 19 / 25 / 31 / 37 / 43 / 49 / 55 / 61 / 67 | 400 |
| 243 | Technische Perfektion | 60 / 87 / 113 / 140 | 400 |
<!-- full-skill-point-costs:end -->

### Prüfung der Sichtbarkeit im zweiten Klassenreview

Bei der neu angelegten Testfigur Schurki waren beide Testquest-Marker noch leer. Alle 32 Skills und die 19 späteren Lernlevel waren bereits korrekt hinterlegt; nach Freigabe der Testmarker foundation und specialization liefert der Katalog auf Level 65 alle 32 sichtbar. Eine laufende Sitzung muss dafür die Welt erneut betreten. Keine Lernlevel oder Skilldefinitionen geändert; individuelle Baumverbindungen des Schurken sind anschließend noch gemeinsam zu prüfen.

### Bestätigte Baumverbindungen vom 26.10.2026

Die abschließend genannten Vorgänger sind serverseitig in `services/skillTree.js` erfasst. Erforderlich ist jeweils Rang 3, begrenzt auf das tatsächliche Klassenmaximum. Starter-Ausnahmen, Lernlevel, Kosten und Wirkungen bleiben erhalten.

- Kunai Todesstoß ← Dunkler Schlag.
- Blutklinge ← Ausdauertraining.
- Dolchtraining ← Waffentraining.
- Dunkler Schleier ← Erweiterung der Sinne.
- Schattenfalle, Schattenschlag und Schattendolch ← Dunkler Schleier.
- Flinke Füße ← Ausdauertraining; Beweglichkeit ← Flinke Füße; Attentäter ← Beweglichkeit.
- List des Schurken und Körperbeherrschung ← Erweiterung der Sinne.
- Brecher des Lichts ← Dolchtraining.
- Sturmklinge ← Blutklinge; Überschallklinge und Wirbelnde Klinge ← Sturmklinge; Klingentornado ← Wirbelnde Klinge.
- Herz des Verräters ← List des Schurken.
- Technische Perfektion ← Kunai Todesstoß.
- Tödlicher Tanz benötigt Herz des Verräters UND Technische Perfektion.

Alle 32 Skills sind angebunden, ohne fehlende Vorgänger oder Zyklen. Ausweichtraining (#142) gehört im bestehenden Katalog ausschließlich Jäger/Archer und Summoner/Soulseeker; es ist beim Schurken auch auf späteren Levels nicht enthalten. Eine zusätzliche Klassenzuordnung wurde nicht beschlossen. Das neue Layout trennt Dolch-, Klingen-, Schleier-, Listen- und Bewegungszweige. Übernahme und visuelle Abnahme nach Abschluss der laufenden Klassenprüfung.

### Technische Perfektion: letzter Anschlussknick entfernt

Nach dem Nutzerbild Technische Perfektion #243 von X160 auf die bestehende senkrechte Zwischenbahn X280 versetzt. Die Kunai-Zuleitung läuft damit nach dem oberen Abzweig gerade bis zur oberen Iconkante; der untere Umweg mit zwei zusätzlichen Richtungswechseln entfällt. Kunai Todesstoß bleibt der Vorgänger, Tödlicher Tanz bleibt unverändert angebunden. Eine native Geometrie-Assertion verlangt für diese Verbindung genau einen oberen Knick und einen geraden senkrechten Abschluss. Abschließender regulärer Lauf aller zwölf Unreal-Tests erfolgreich, einschließlich dieser Assertion. Am 26.10.2026 gemeinsam mit Ritter und Herbalist ins Live-Projekt übernommen und neu gestartet; keine Schutzrichtlinien geändert. Persönliche visuelle Abnahme durch den Nutzer bleibt offen.

### Nachkorrektur: Kunai rechts und Überschallklinge rechts von Sturmklinge

Kunai Todesstoß #70 von X160 auf X400 verschoben und damit genau unter Dunkler Schlag #27 mit direkter senkrechter Anbindung von oben. Technische Perfektion #243 bleibt auf ihrer Zwischenbahn X280; ihre Zuleitung verlässt Kunai jetzt links statt rechts, ohne unteren Anschlussknick. Überschallklinge #115 von X160 auf X700 rechts neben Sturmklinge #111 X400 versetzt, gleiche Zeile und bestehende Voraussetzung. Keine Änderung an Werten oder Voraussetzungen. Native Assertions kontrollieren den direkten Kunai-Anschluss und die rechte Überschallklinge; vollständige Linienprüfung kontrolliert alle weiterführenden Äste.

Blutklingen-Zuleitung zusätzlich knapp unter Kunai gelegt, nachdem der erste native Lauf eine Kollision mit dessen unterem Knotenbereich erkannt hatte. Korrigierter Stand kompiliert erfolgreich; abschließender nativer Teststart und reguläre Wiederholung durch Windows-Ladefehler 4551 blockiert. Noch keine Live-Übernahme und kein Neustart.

Aktueller Status ersetzt die vorherige Ladeblockade: Kunai-/Überschallklingen-Positionen und korrigierte Blutklingen-Zuleitung nach erfolgreicher vollständiger nativer Geometrieprüfung gemeinsam installiert und neu gestartet. Zwölf native Tests und 18 isolierte HTTP-Aufrufe bestanden; Backup tmp/before-defense-straight-entry-20261026-145110. Keine Änderung an Windows-Schutzrichtlinien.

# Butcher / Destroyer: Werte und Skillprüfung

Einteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.

**32 unterschiedliche zugeordnete Skills: 20 aktive und 12 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie beim Abenteurer. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.

| Art | Anzahl | Skills |
| --- | ---: | --- |
| Übrige Passive einschließlich Procs | 9 | Überleben, Erweiterung des Körpers, Zweihändiges Axttraining, Ausdauertraining, Standhaft, Rüstungstraining, Ewiger Sieger, Ungebrochen, Waffentraining |
| Aktive Skills (Angriff/Heilung/Unterstützung) | 12 | Abräumer, Aufgeladener Schlag, Energieentladung, Erdbeben, Erdbrecher, Mächtiger Hieb, Rotier Schlag, Schädelspalter, Schmetterschlag, Schockwelle der Regeneration, Dämonische Schockwelle, Zorn des Henkers |
| Eigenbuffs | 5 | Aufladung, Kampfinstinkt, Geist des Kriegers, Blutrausch, Bis in den Tot |
| Kreaturen aktiv | 3 | Tamen, Beschwören, Zurückrufen |
| Kreaturen passiv | 3 | Bindung, Kontrolle, Zucht |

## Ewiger Sieger: festgelegter Kampf-Proc

**DB-Nr. 176, maximal 10 Stufen.** Unter 15 Prozent Leben haben eigene Angriffe eine Proc-Chance von 80 Prozent, wenn der Skill bereit ist. Für 30 Sekunden +3 bis +21 Stärke und +3 bis +21 Vita; Cooldown 180 Sekunden. Keine Kosten oder direkte Heilung. Dieser Buff gehört zu den 32 Skills, ist aber vor dem Kampf nicht aktiv. Die Wiederbelebungsmechanik ist der separate Skill Ungebrochen.


## Skillpunkte

**280 Skillpunkte** für alle 32 Skills auf ihrer maximal lernbaren Stufe. Jede gelernte Stufe kostet einen Punkt, einschließlich Stufe 1. Klassenspezifische Lerngrenzen sind berücksichtigt.

**Aufladung (Nr. 12)** hat eine einzige lernbare Stufe und übernimmt vollständig die bisherigen Werte von Stufe 5: +25 Stärke, +240 maximale Lebenspunkte, +200 P-Angriff, 15 Sekunden Dauer, 102 Mana Aktivierungskosten, 122 Sekunden Cooldown und feste Castzeit 0,1 Sekunden. Damit entfallen vier Skillpunkte bei unveränderter maximaler Wirkung.

## Basis und Ausrüstung

R1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.

### Basis ohne Ausrüstung

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 221 | 491 | 791 | 1.091 | 1.391 | 1.691 | 1.991 |
| Mana | 121 | 391 | 691 | 991 | 1.291 | 1.591 | 1.891 |
| P-Angriff | 13 | 29,2 | 47,2 | 65,2 | 83,2 | 101,2 | 119,2 |
| M-Angriff | 7 | 23,2 | 41,2 | 59,2 | 77,2 | 95,2 | 113,2 |
| P-Defense | 4 | 22 | 42 | 62 | 82 | 102 | 122 |
| M-Defense | 6 | 24 | 44 | 64 | 84 | 104 | 124 |

### Mit Rüstung und Zweihandaxt

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 656 | 926 | 1.491 | 2.116 | 2.741 | 3.391 | 4.091 |
| Mana | 296 | 566 | 996 | 1.371 | 1.816 | 2.291 | 2.791 |
| P-Angriff | 40 | 56,2 | 104,2 | 167,2 | 255,2 | 384,2 | 591,2 |
| M-Angriff | 7 | 23,2 | 41,2 | 59,2 | 77,2 | 95,2 | 113,2 |
| P-Defense | 76 | 94 | 151 | 215 | 343 | 508 | 725 |
| M-Defense | 47 | 65 | 126 | 183 | 290 | 389 | 486 |

Die neue Zweihandaxt-Stärke ist nur notiert, nicht in der Datenbank oder Vergleichsrechnung übernommen: auf R6 45 statt 40. Damit wäre P-Angriff auf Level 60 715,2 statt 706,2. Alle übrigen Equipment-Vorschläge bleiben ebenfalls unverändert notiert. Grundregeneration: 25 Mana und 12 HP pro Tick. Intervall wird später in Unreal geprüft.

## Vollständigkeitsprüfung aller 32 Skilldefinitionen

Die Detailblöcke enthalten den vollständigen Datenbankexport. Fehlende aktive Kosten/Castzeiten werden nicht ergänzt oder als null angenommen. Passive erfordern keine aktive Castzeit; nicht angegebene Zusatzkosten bleiben unbestimmt.

| Nr | Skill | Tatsächlich fehlende Grundangaben |
| ---: | --- | --- |
| 2 | Überleben | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 3 | Abräumer | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 11 | Aufgeladener Schlag | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 12 | Aufladung | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 35 | Energieentladung | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 38 | Erdbeben | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 39 | Erdbrecher | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 45 | Erweiterung des Körpers | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 77 | Mächtiger Hieb | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 87 | Rotier Schlag | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 89 | Schädelspalter | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 96 | Schmetterschlag | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 98 | Schockwelle der Regeneration | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 131 | Zweihändiges Axttraining | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 133 | Tamen | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 134 | Bindung | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 135 | Kontrolle | Wirkungs-/Levelskalierung, konkrete Wirkung |
| 136 | Beschwören | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 137 | Zurückrufen | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 138 | Zucht | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 139 | Ausdauertraining | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 140 | Standhaft | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 144 | Rüstungstraining | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 172 | Kampfinstinkt | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 173 | Geist des Kriegers | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 174 | Blutrausch | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 175 | Bis in den Tot | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 176 | Ewiger Sieger | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 177 | Ungebrochen | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 201 | Waffentraining | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 227 | Dämonische Schockwelle | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |
| 234 | Zorn des Henkers | Keine Lücke in den hier geprüften Grundfeldern; Detailmechanik siehe Skilltext |

Darstellungsfehler korrigiert: Ungebrochen erzeugt bei leerer valueScaling-Struktur keinen NaN-Eintrag mehr; Tamen zeigt seine vorhandene Chancen-Skalierung. Einstufige Skills benötigen keine Levelskalierung.

## Skillübersicht

| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | Überleben | Passive | 20 | HP-Regeneration +0,5<br>Stärke +0,5<br>Agility +0,25<br>Dexterity +0,25 | Stärke: 0,5 bis 10<br>Agility: 0,25 bis 5<br>Dexterity: 0,25 bis 5<br>manaRegen: 0,5 bis 10<br>HP-Regeneration: 0,5 bis 10 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition; Rassengrundskill: bisherige Namensentscheidung beachten |
| 3 | Abräumer | Skill / physisch | 10 | P-Angriff +75 | P-Angriff: 75 bis 543 | Mana-Kosten: 19 bis 136 | 46 | 0.6 | 2 | Lernvoraussetzungen und Ausführung prüfen |
| 11 | Aufgeladener Schlag | Skill / physisch | 15 | P-Angriff +85<br>Animation 0,8 s (vorläufig) | P-Angriff: 85 bis 855 | Mana-Kosten: 21 bis 217 | 25 | 0 | Wirkung einmalig; Animation 0,8 s | Lernvoraussetzungen und Ausführung prüfen |
| 12 | Aufladung | Selbstbuff | 1 | HP +240<br>P-Angriff +80 | HP: 240 bis 240<br>P-Angriff: 80 bis 80 | Mana-Kosten: 102 bis 102 | 122 bis 122 | 0.1 | 15 | Lernvoraussetzungen und Ausführung prüfen |
| 35 | Energieentladung | Skill / physisch | 10 | P-Angriff +787<br>Fläche: 5 m Radius um Spieler | P-Angriff: 787 bis 1.993 | health-Kosten: 0,3 bis 0,21 (Anteil) | 180 | 0.4 | Nicht gespeichert | Lernvoraussetzungen und Ausführung prüfen |
| 38 | Erdbeben | Skill / gemischt | 10 | P-Angriff +167<br>M-Angriff +35<br>statModifier, Ziel enemy, movementSpeed, -0,07<br>Fläche: 5 m Radius um Spieler | P-Angriff: 167 bis 644<br>M-Angriff: 35 bis 260<br>statModifier/movementSpeed: -7 bis -16 % | Mana-Kosten: 51 bis 231 | 55 | 0.1 | movementSpeed: 3 s | Lernvoraussetzungen und Ausführung prüfen |
| 39 | Erdbrecher | Skill / physisch | 10 | P-Angriff +501 | P-Angriff: 501 bis 6.000 | Mana-Kosten: 200 bis 2.396 | 70 bis 61 | 0.3 | 5 | Lernvoraussetzungen und Ausführung prüfen |
| 45 | Erweiterung des Körpers | Passive | 10 | Stärke +1<br>Vita +1<br>Wisdom +1 | Vita: 1 bis 10<br>Stärke: 1 bis 10<br>Wisdom: 1 bis 10 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 77 | Mächtiger Hieb | Skill / physisch | 10 | P-Angriff +73 | P-Angriff: 73 bis 733 | Mana-Kosten: 18 bis 180 | 27 | 0.2 | 0 (einmalig) | Lernvoraussetzungen und Ausführung prüfen |
| 87 | Rotier Schlag | Skill / physisch | 10 | P-Angriff +36<br>Animation 0,7 s (vorläufig) | P-Angriff: 36 bis 594 | Mana-Kosten: 9 bis 153 | 37 bis 28 | 0 | Wirkung einmalig; Animation 0,7 s | Gemeinsame Definition |
| 89 | Schädelspalter | Skill / physisch | 10 | P-Angriff +387<br>control, Ziel enemy<br>Ein einzelnes Ziel | P-Angriff: 387 bis 2.556 | Mana-Kosten: 97 bis 637 | 60 | 0.3 | dazed: 1 bis 3 s | Lernvoraussetzungen und Ausführung prüfen |
| 96 | Schmetterschlag | Skill / physisch | 10 | P-Angriff +111 | P-Angriff: 111 bis 1.368 | Mana-Kosten: 28 bis 343 | 41 | 0.2 | 0 (einmalig) | Lernvoraussetzungen und Ausführung prüfen |
| 98 | Schockwelle der Regeneration | Skill / physisch | 10 | P-Angriff +337<br>heal, Ziel self, 0,015 | P-Angriff: 337 bis 940<br>heal/: 1,5 bis 2,4 % | Mana-Kosten: 183 bis 633 | 77 bis 68 | 1 | heal: 0 s | Wirkung/Einordnung prüfen |
| 131 | Zweihändiges Axttraining | Passive | 10 | Stärke +3 | Stärke: 3 bis 12 | Keine | Entfällt | Entfällt | Permanent | Lernvoraussetzungen und Ausführung prüfen |
| 133 | Tamen | Skill | 3 / Butcher 1 | Versucht, eine Kreatur zu zähmen. Erfordert das passende spezielle Taming-Item für diese Kreatur. Die Grunderfolgschance beginnt bei 50 Prozent und steigt je weiterer Skillstufe um 15 Prozentpunkte auf 80 Prozent. Ein Kreaturen-Gegenwert beeinflusst die endgültige Erfolgschance; die Berechnung ist noch festzulegen. Die Mana-Kosten steigen von 100 um 25 je weiterer Stufe auf 150. Die Cast Time sinkt von 3 um 0,5 Sekunden je weiterer Stufe auf 2 Sekunden, der Cooldown von 60 um 10 Sekunden je weiterer Stufe auf 40 Sekunden. Der Versuch verursacht keinen Schaden und hat keine anschließende Effektdauer. Der Itemverbrauch ist noch festzulegen. Die Definition umfasst drei Stufen; die normale Lerngrenze anderer Klassen liegt bei Stufe 1. Der Abenteurer kann Stufe 3 lernen; eine zweite Spezialklasse ist noch nicht festgelegt. | Zähmchance: 50 bis 80 % | Mana-Kosten: 100 bis 150 | 60 bis 40 | 3 bis 2 | Nicht gespeichert | Gemeinsame Definition |
| 134 | Bindung | Passive | 3 / Butcher 1 | Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.<br>statModifier, Ziel companion, str, 10<br>statModifier, Ziel companion, vita, 10<br>statModifier, Ziel companion, int, 10<br>statModifier, Ziel companion, wis, 10 | statModifier/str: 10 bis 20<br>statModifier/vita: 10 bis 20<br>statModifier/int: 10 bis 20<br>statModifier/wis: 10 bis 20 | Keine | Entfällt | Entfällt | str: 0 s<br>vita: 0 s<br>int: 0 s<br>wis: 0 s | Gemeinsame Definition |
| 135 | Kontrolle | Passive | 2 / Butcher 1 | Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen. | Nicht vollständig gespeichert | Keine aktive Nutzung; Zusatzkosten nicht separat definiert | Entfällt | Entfällt | Permanent | Gemeinsame Definition; Levelskalierung prüfen |
| 136 | Beschwören | Skill | 1 | Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer. | Eine Stufe; keine Levelskalierung nötig | Mana-Kosten: 5 bis 5 | 5 | 1 | Nicht gespeichert | Gemeinsame Definition |
| 137 | Zurückrufen | Skill | 1 | Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer. | Eine Stufe; keine Levelskalierung nötig | Mana-Kosten: 5 bis 5 | 5 | 0 | Nicht gespeichert | Gemeinsame Definition |
| 138 | Zucht | Passive | 3 / Butcher 1 | Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.<br>experienceBonus, Ziel companion, 0,1 | experienceBonus/: 10 bis 30 % | Keine | Entfällt | Entfällt | experienceBonus: 0 s | Gemeinsame Definition |
| 139 | Ausdauertraining | Passive | 20 | Vita +1<br>Wisdom +1 | Vita: 1 bis 20<br>Wisdom: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 140 | Standhaft | Passive | 10 | Vita +1<br>Wisdom +0,5 | Vita: 1 bis 10<br>Wisdom: 0,5 bis 5 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 144 | Rüstungstraining | Passive | 10 | P-Defense +3<br>M-Defense +6 | P-Defense: 3 bis 30<br>M-Defense: 6 bis 60 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 172 | Kampfinstinkt | Selbstbuff | 10 | Aktiver Eigenbuff mit zehn Stufen für 600 Sekunden. Erhöht physischen Skillschaden um 8 je Skillstufe, maximal +80. Der Bonus wird je passendem Skilltreffer mit physischem Angriffsanteil angewendet, auch bei Mehrfachtreffern. Kein allgemeiner P-Angriff, kein Bonus für normale Auto-Attacks, Begleiter oder rein feste Rest-DoTs. Kein Stärkebonus. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50 auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten.<br>damageBonus, Ziel self, 8 | damageBonus/: 8 bis 80 | Mana-Kosten: 50 bis 167 | 60 | 0.1 | damageBonus: 600 s | Lernvoraussetzungen und Ausführung prüfen |
| 173 | Geist des Kriegers | Selbstbuff | 10 | Vita +2<br>P-Angriff +2 | Vita: 2 bis 20<br>P-Angriff: 2 bis 20 | Mana-Kosten: 50 bis 167 | 60 | 0.1 | 300 | Lernvoraussetzungen und Ausführung prüfen |
| 174 | Blutrausch | Selbstbuff | 10 | P-Angriff +2<br>Attack Speed +5 % | Attack Speed: 5 % bis 10 %<br>P-Angriff: 2 bis 20 | Mana-Kosten: 50 bis 167 | 300 | 0.1 | 60 | Lernvoraussetzungen und Ausführung prüfen |
| 175 | Bis in den Tot | Selbstbuff | 10 | Attack Speed +15 %<br>statModifier, Ziel self, atkSpeed, 0,15 | Vita → Stärke 1:1: 1 bis 10 % Vita | Mana-Kosten: 50 bis 167 | 150 bis 141 | 0.1 | atkSpeed: 15 s | Lernvoraussetzungen und Ausführung prüfen |
| 176 | Ewiger Sieger | Passive | 10 | Stärke +3<br>Vita +3 | Stärke: 3 bis 21<br>Vita: 3 bis 21 | Keine | 180 | Entfällt | 30 | Lernvoraussetzungen und Ausführung prüfen |
| 177 | Ungebrochen | Passive | 10 | Wisdom +1<br>deathReprieve, Ziel self<br>statModifier, Ziel self, atkSpeed, 0,1<br>statModifier, Ziel self, movementSpeed, 0,3<br>damageBonus, Ziel self, 3 | Wisdom: 1 bis 10<br>statModifier/atkSpeed: 10 bis 20 %<br>statModifier/movementSpeed: 30 bis 45 %<br>damageBonus/: 3 bis 30 | Keine aktive Nutzung; Zusatzkosten nicht separat definiert | 600 bis 300 | Entfällt | deathReprieve: 20 bis 30 s<br>atkSpeed: 20 bis 30 s<br>movementSpeed: 20 bis 30 s<br>damageBonus: 0 s | Lernvoraussetzungen und Ausführung prüfen |
| 201 | Waffentraining | Passive | 20 | P-Angriff +1<br>M-Angriff +1 | P-Angriff: 1 bis 20<br>M-Angriff: 1 bis 20 | Keine aktive Nutzung; Zusatzkosten nicht separat definiert | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 227 | Dämonische Schockwelle | Skill / gemischt | 3 | P-Angriff +172<br>M-Angriff +109 | P-Angriff: 172 bis 688<br>M-Angriff: 109 bis 436 | Mana-Kosten: 70 bis 280 | 125 | 0.2 | 2 | Lernvoraussetzungen und Ausführung prüfen |
| 234 | Zorn des Henkers | Skill / physisch | 5 | P-Angriff +600<br>statModifier, Ziel self, critChanceRating, 20 | P-Angriff: 600 bis 2.820<br>statModifier/critChanceRating: 20 bis 100 | Mana-Kosten: 150 bis 706 | 180 | 0.2 | critChanceRating: 0 s | Lernvoraussetzungen und Ausführung prüfen |

## Detaildaten

Gemeinsame Werte werden nicht neu erfunden. Jeder Block zeigt den vollständigen gespeicherten Stand außer der technischen Mongo-ID.

### 2: Überleben

Permanenter passiver Umbra-Grundskill mit 20 Stufen. Je gelernter Stufe +0,5 Stärke, +0,25 Agilität und +0,25 Geschicklichkeit. Auf Stufe 20: +10 Stärke, +5 Agilität und +5 Geschicklichkeit. Direkte HP- und MP-Regeneration bleiben jeweils bei +0,5 je Stufe, auf Stufe 20 jeweils +10 je zugehörigem Regenerationstick. Diese Boni werden zur Grundregeneration und anderen Boni addiert. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
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

### 3: Abräumer

Trifft zwei bis drei Gegner in deiner Nähe. Der physische Grundangriffswert steigt von 75 um 52 je weiterer Skillstufe auf 543 auf Level 10. Die Mana-Kosten 19 auf Stufe 1, +13 je weiterer Stufe, maximal 136 auf Stufe 10. Die Cast Time beträgt 0,6 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Clearer |
| category | active |
| cd | 46 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Trifft zwei bis drei Gegner in deiner Nähe. Der physische Grundangriffswert steigt von 75 um 52 je weiterer Skillstufe auf 543 auf Level 10. Die Mana-Kosten 19 auf Stufe 1, +13 je weiterer Stufe, maximal 136 auf Stufe 10. Die Cast Time beträgt 0,6 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Hits two to three nearby enemies. Physical base attack increases from 75 by 52 per additional skill level to 543 at level 10. Mana cost 19 at level 1, maximum 136 at level 10. Cast time is 0.6 seconds. |
| dmgType (Altformat) | physical |
| dur | 2 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 3 |
| patk | 75 |
| skillName_de | Abräumer |
| skillpoints | 1 |
| castTimeSeconds | 0,6 |
| mana (Aktivierungskosten, kein Bonus) | 19 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 19 |
| resourceCosts[0].scaling.perLevel | 13 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 75 |
| statScaling.patk.perLevel | 52 |
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
| levelProgression.rules[1].rule.base | 75 |
| levelProgression.rules[1].rule.perLevel | 52 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 11: Aufgeladener Schlag

Führt einen aufgeladenen physischen Schlag aus. Der Grundangriffswert steigt von 85 um 55 je weiterer Stufe auf 855 auf Level 15. Die Mana-Kosten 21 auf Stufe 1, +14 je weiterer Stufe, maximal 217 auf Stufe 15. Die gesamte Animation dauert vorläufig 0,8 Sekunden. Keine zusätzliche Cast Time vor der Animation. Der genaue Trefferzeitpunkt innerhalb der Animation wird im Spiel festgelegt. Der Cooldown bleibt zunächst bei 25 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Charged Strike |
| category | active |
| cd | 25 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Führt einen aufgeladenen physischen Schlag aus. Der Grundangriffswert steigt von 85 um 55 je weiterer Stufe auf 855 auf Level 15. Die Mana-Kosten 21 auf Stufe 1, +14 je weiterer Stufe, maximal 217 auf Stufe 15. Die gesamte Animation dauert vorläufig 0,8 Sekunden. Keine zusätzliche Cast Time vor der Animation. Der genaue Trefferzeitpunkt innerhalb der Animation wird im Spiel festgelegt. Der Cooldown bleibt zunächst bei 25 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Performs a charged physical strike. Base attack increases from 85 by 55 per additional level to 855 at level 15. Mana cost 21 at level 1, maximum 217 at level 15. Total animation duration is provisionally 0.8 seconds. No additional cast time before the animation. Exact hit timing within the animation will be defined in game. Cooldown remains provisionally 25 seconds. |
| dmgType (Altformat) | physical |
| maxSkillLv | 15 |
| maxUpgradeLv | 10 |
| nr | 11 |
| patk | 85 |
| skillName_de | Aufgeladener Schlag |
| skillpoints | 1 |
| animationDurationSeconds | 0,8 |
| animationTimingStatus | provisional |
| mana (Aktivierungskosten, kein Bonus) | 21 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 21 |
| resourceCosts[0].scaling.perLevel | 14 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 85 |
| statScaling.patk.perLevel | 55 |
| castTimeSeconds | 0 |
| hasLingeringDamage | false |
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
| levelProgression.rules[0].rule.rule.base | 21 |
| levelProgression.rules[0].rule.rule.perLevel | 14 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 85 |
| levelProgression.rules[1].rule.perLevel | 55 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 12: Aufladung

Aktiver Eigenbuff mit einer einzigen lernbaren Stufe. Gewährt für 15 Sekunden +240 maximale Lebenspunkte und +80 P-Angriff. Kein Stärkebonus. Der Lebensbonus ist keine direkte Heilung. Cooldown 122 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Aktivierung kostet 102 Mana vor Rabatten. Eine gelernte Stufe kostet einen Skillpunkt.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Charge |
| category | active |
| cd | 122 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Aktiver Eigenbuff mit einer einzigen lernbaren Stufe. Gewährt für 15 Sekunden +240 maximale Lebenspunkte und +80 P-Angriff. Kein Stärkebonus. Der Lebensbonus ist keine direkte Heilung. Cooldown 122 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Aktivierung kostet 102 Mana vor Rabatten. Eine gelernte Stufe kostet einen Skillpunkt. |
| description_eng | Active self buff with one learnable level. Grants 240 maximum Health and 80 physical attack for 15 seconds. No Strength bonus; maximum Health is not direct healing. Cooldown 122 seconds; fixed 0.1-second cast unaffected by speed. Costs 102 Mana before discounts. One skill point for the single learned level. |
| dmgType (Altformat) | selfbuff |
| dur | 15 |
| health | 240 |
| maxSkillLv | 1 |
| maxUpgradeLv | 10 |
| nr | 12 |
| skillName_de | Aufladung |
| skillpoints | 1 |
| activation | manual |
| castTimeSeconds | 0,1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 122 |
| cooldownScaling.perLevel | 0 |
| mana (Aktivierungskosten, kein Bonus) | 102 |
| patk | 80 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 102 |
| resourceCosts[0].scaling.perLevel | 0 |
| statBonusTargets.health | self |
| statBonusTargets.patk | self |
| statBonusUnits.health | flat |
| statBonusUnits.patk | flat |
| statScaling.health.type | linear |
| statScaling.health.base | 240 |
| statScaling.health.perLevel | 0 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 80 |
| statScaling.patk.perLevel | 0 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 122 |
| levelProgression.rules[0].rule.rule.perLevel | 0 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 102 |
| levelProgression.rules[1].rule.rule.perLevel | 0 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | health |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 240 |
| levelProgression.rules[2].rule.perLevel | 0 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | patk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 80 |
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

### 35: Energieentladung

Entlädt nach 0,4 Sekunden Cast Time Energie und trifft Gegner in einem kreisförmigen Bereich mit 5 Metern Radius um dich einmal physisch. Der Grundangriffswert steigt von 787 um 134 je weiterer Skillstufe auf 1993 auf Level 10. Die Lebens-Kosten sinken von 30 Prozent des maximalen Lebens um 1 Prozentpunkt je weiterer Stufe auf 21 Prozent. Bei unzureichendem Leben ist der Skill nicht aktivierbar. Der Cooldown bleibt bei 180 Sekunden. Keine anhaltende Effektdauer; der genaue Trefferzeitpunkt wird im Spiel festgelegt.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Energy Discharge |
| category | active |
| cd | 180 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Entlädt nach 0,4 Sekunden Cast Time Energie und trifft Gegner in einem kreisförmigen Bereich mit 5 Metern Radius um dich einmal physisch. Der Grundangriffswert steigt von 787 um 134 je weiterer Skillstufe auf 1993 auf Level 10. Die Lebens-Kosten sinken von 30 Prozent des maximalen Lebens um 1 Prozentpunkt je weiterer Stufe auf 21 Prozent. Bei unzureichendem Leben ist der Skill nicht aktivierbar. Der Cooldown bleibt bei 180 Sekunden. Keine anhaltende Effektdauer; der genaue Trefferzeitpunkt wird im Spiel festgelegt. |
| description_eng | After a 0.4 second cast time, discharges energy and hits enemies once physically in a circular 5 meter radius around you. Base attack increases from 787 by 134 per additional skill level to 1993 at level 10. Health cost decreases from 30 percent of maximum Health by 1 percentage point per additional level to 21 percent. The skill cannot be activated with insufficient Health. Cooldown remains 180 seconds. No lingering effect duration; exact hit timing will be defined in game. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 35 |
| patk | 787 |
| skillName_de | Energieentladung |
| skillpoints | 1 |
| resourceCosts[0].resource | health |
| resourceCosts[0].reference | maxHealth |
| resourceCosts[0].unit | fraction |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 0,3 |
| resourceCosts[0].scaling.perLevel | -0,01 |
| resourceCosts[0].scaling.values | [] |
| attackArea.shape | circle |
| attackArea.center | caster |
| attackArea.radiusMeters | 5 |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | atImpact |
| attackArea.timingStatus | pending |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | pending |
| castTimeSeconds | 0,4 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 787 |
| statScaling.patk.perLevel | 134 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.max | 1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 0,3 |
| levelProgression.rules[0].rule.rule.perLevel | -0,01 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 787 |
| levelProgression.rules[1].rule.perLevel | 134 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

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

### 39: Erdbrecher

Bricht den Boden auf und schleudert nahe Gegner zurück. Mächtiger einmaliger physischer Flächenangriff: 501 Skill-Grundschaden auf Stufe 1, plus 611 je weiterer Stufe, insgesamt 6000 auf Stufe 10. Der aktuelle P-Angriff wird je getroffenem Gegner einmal addiert. Mana-Kosten 200 auf Stufe 1, plus 244 je weiterer Stufe, insgesamt 2396 auf Stufe 10. Finisher-Kostenkurve: ungefähr 40 % des Skill-Grundschadens, mit ganzzahligen Startkosten und Steigerungen. Cooldown unverändert von 70 um 1 Sekunde je weiterer Stufe auf 61 Sekunden. Castzeit 0,3 Sekunden. Die gespeicherte Wirkungsdauer bleibt 5 Sekunden; keine zusätzlichen wiederholten Schadenstreffer festgelegt. Flächenform, Reichweite, maximale Gegnerzahl und Rückstoßweite sind weiterhin nicht definiert.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Earthbreaker |
| category | active |
| cd | 70 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Bricht den Boden auf und schleudert nahe Gegner zurück. Mächtiger einmaliger physischer Flächenangriff: 501 Skill-Grundschaden auf Stufe 1, plus 611 je weiterer Stufe, insgesamt 6000 auf Stufe 10. Der aktuelle P-Angriff wird je getroffenem Gegner einmal addiert. Mana-Kosten 200 auf Stufe 1, plus 244 je weiterer Stufe, insgesamt 2396 auf Stufe 10. Finisher-Kostenkurve: ungefähr 40 % des Skill-Grundschadens, mit ganzzahligen Startkosten und Steigerungen. Cooldown unverändert von 70 um 1 Sekunde je weiterer Stufe auf 61 Sekunden. Castzeit 0,3 Sekunden. Die gespeicherte Wirkungsdauer bleibt 5 Sekunden; keine zusätzlichen wiederholten Schadenstreffer festgelegt. Flächenform, Reichweite, maximale Gegnerzahl und Rückstoßweite sind weiterhin nicht definiert. |
| description_eng | Breaks open the ground and knocks nearby enemies back. Powerful single-hit physical area attack: 501 skill base damage at level 1, plus 611 per additional level, reaching 6000 at level 10. Current physical attack is added once per enemy hit. Mana cost 200 plus 244 per additional level, reaching 2396. Finisher pricing approximately 40% of skill base damage with integer starting costs and increments. Unchanged cooldown 70 minus 1 per additional level, reaching 61 seconds. Cast time 0.3 seconds. Stored duration remains 5 seconds; no additional repeated damage hits defined. Exact area shape, range, target cap and knockback distance remain undefined. |
| dmgType (Altformat) | physical |
| dur | 5 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 39 |
| patk | 501 |
| skillName_de | Erdbrecher |
| skillpoints | 1 |
| castTimeSeconds | 0,3 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 70 |
| cooldownScaling.perLevel | -1 |
| mana (Aktivierungskosten, kein Bonus) | 200 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 200 |
| resourceCosts[0].scaling.perLevel | 244 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 501 |
| statScaling.patk.perLevel | 611 |
| manaPricing.category | finisher |
| manaPricing.factor | 0,4 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 70 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 200 |
| levelProgression.rules[1].rule.rule.perLevel | 244 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 501 |
| levelProgression.rules[2].rule.perLevel | 611 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

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

### 87: Rotier Schlag

Führt einen rotierenden physischen Hieb aus. Der Grundangriffswert steigt von 36 um 62 je weiterer Stufe auf 594. Die Mana-Kosten 9 auf Stufe 1, +16 je weiterer Stufe, maximal 153 auf Stufe 10. Der Cooldown sinkt von 37 um 1 Sekunde je weiterer Stufe auf 28 Sekunden. Der Angriff beginnt ohne Cast Time; die Animation dauert vorläufig 0,7 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Rotating Strike |
| category | active |
| cd | 37 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Führt einen rotierenden physischen Hieb aus. Der Grundangriffswert steigt von 36 um 62 je weiterer Stufe auf 594. Die Mana-Kosten 9 auf Stufe 1, +16 je weiterer Stufe, maximal 153 auf Stufe 10. Der Cooldown sinkt von 37 um 1 Sekunde je weiterer Stufe auf 28 Sekunden. Der Angriff beginnt ohne Cast Time; die Animation dauert vorläufig 0,7 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Performs a rotating physical strike. Base attack increases from 36 by 62 per additional level to 594. Mana cost 9 at level 1, maximum 153 at level 10. Cooldown decreases from 37 by 1 second per additional level to 28 seconds. The attack starts without cast time; provisional animation duration is 0.7 seconds. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 87 |
| patk | 36 |
| skillName_de | Rotier Schlag |
| skillpoints | 1 |
| animationDurationSeconds | 0,7 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 37 |
| cooldownScaling.perLevel | -1 |
| mana (Aktivierungskosten, kein Bonus) | 9 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 9 |
| resourceCosts[0].scaling.perLevel | 16 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 36 |
| statScaling.patk.perLevel | 62 |
| hasLingeringDamage | false |
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
| levelProgression.rules[0].rule.rule.base | 37 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 9 |
| levelProgression.rules[1].rule.rule.perLevel | 16 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 36 |
| levelProgression.rules[2].rule.perLevel | 62 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 89: Schädelspalter

Trifft einen einzelnen Gegner physisch und macht ihn kurz benommen. Der Grundangriffswert steigt von 387 um 241 je weiterer Skillstufe auf 2556 auf Level 10. Die Mana-Kosten 97 auf Stufe 1, +60 je weiterer Stufe, maximal 637 auf Stufe 10. Die Cast Time beträgt 0,3 Sekunden, der Cooldown bleibt zunächst bei 60 Sekunden. Die Benommenheit dauert auf Level 1 bis 4 1 Sekunde, auf Level 5 bis 9 2 Sekunden und auf Level 10 3 Sekunden. Der Schaden hat keine anhaltende Dauer; die genaue Einschränkung durch Benommenheit ist noch festzulegen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Skull Splitter |
| category | active |
| cd | 60 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Trifft einen einzelnen Gegner physisch und macht ihn kurz benommen. Der Grundangriffswert steigt von 387 um 241 je weiterer Skillstufe auf 2556 auf Level 10. Die Mana-Kosten 97 auf Stufe 1, +60 je weiterer Stufe, maximal 637 auf Stufe 10. Die Cast Time beträgt 0,3 Sekunden, der Cooldown bleibt zunächst bei 60 Sekunden. Die Benommenheit dauert auf Level 1 bis 4 1 Sekunde, auf Level 5 bis 9 2 Sekunden und auf Level 10 3 Sekunden. Der Schaden hat keine anhaltende Dauer; die genaue Einschränkung durch Benommenheit ist noch festzulegen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Hits a single enemy physically and briefly dazes it. Base attack increases from 387 by 241 per additional skill level to 2556 at level 10. Mana cost 97 at level 1, maximum 637 at level 10. Cast time is 0.3 seconds and cooldown remains provisionally 60 seconds. Daze lasts 1 second at levels 1 to 4, 2 seconds at levels 5 to 9, and 3 seconds at level 10. Damage has no lingering duration; exact action restrictions from daze remain to be defined. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 89 |
| patk | 387 |
| skillName_de | Schädelspalter |
| skillpoints | 1 |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.targetMode | singleEnemy |
| attackExecution.hitTimingStatus | pending |
| castTimeSeconds | 0,3 |
| effects[0].key | skullsplitterDaze |
| effects[0].type | control |
| effects[0].target | enemy |
| effects[0].controlKind | dazed |
| effects[0].actionRestrictionsStatus | pending |
| effects[0].durationSeconds | 1 |
| effects[0].durationStatus | defined |
| effects[0].durationScaling.type | table |
| effects[0].durationScaling.values[0] | 1 |
| effects[0].durationScaling.values[1] | 1 |
| effects[0].durationScaling.values[2] | 1 |
| effects[0].durationScaling.values[3] | 1 |
| effects[0].durationScaling.values[4] | 2 |
| effects[0].durationScaling.values[5] | 2 |
| effects[0].durationScaling.values[6] | 2 |
| effects[0].durationScaling.values[7] | 2 |
| effects[0].durationScaling.values[8] | 2 |
| effects[0].durationScaling.values[9] | 3 |
| effects[0].progressionStatus | defined |
| effectsVersion | 1 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 97 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 97 |
| resourceCosts[0].scaling.perLevel | 60 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 387 |
| statScaling.patk.perLevel | 241 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | durationScaling |
| levelProgression.rules[0].rule.kind | thresholds |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.changes[0].level | 5 |
| levelProgression.rules[0].rule.changes[0].value | 2 |
| levelProgression.rules[0].rule.changes[1].level | 10 |
| levelProgression.rules[0].rule.changes[1].value | 3 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 97 |
| levelProgression.rules[1].rule.rule.perLevel | 60 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 387 |
| levelProgression.rules[2].rule.perLevel | 241 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 96: Schmetterschlag

Mit roher Gewalt schlägst du auf deinen Gegner ein und verursachst dabei großen Schaden. Der physische Skill-Grundschaden steigt gleichmäßig von 111 auf Stufe 1 auf 1368 auf Stufe 10. Die Mana-Kosten 28 auf Stufe 1, +35 je weiterer Stufe, maximal 343 auf Stufe 10. Die Castzeit beträgt 0,2 Sekunden. Keine anhaltende Schadensdauer. Genaue Zielwahl und Trefferfläche sind noch zu prüfen. Cooldown 41 Sekunden auf Stufe 1 und 41 Sekunden auf Stufe 10. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Smash |
| category | active |
| cd | 41 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| charClass[2] | Gladiator |
| charClass[3] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Mit roher Gewalt schlägst du auf deinen Gegner ein und verursachst dabei großen Schaden. Der physische Skill-Grundschaden steigt gleichmäßig von 111 auf Stufe 1 auf 1368 auf Stufe 10. Die Mana-Kosten 28 auf Stufe 1, +35 je weiterer Stufe, maximal 343 auf Stufe 10. Die Castzeit beträgt 0,2 Sekunden. Keine anhaltende Schadensdauer. Genaue Zielwahl und Trefferfläche sind noch zu prüfen. Cooldown 41 Sekunden auf Stufe 1 und 41 Sekunden auf Stufe 10. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | You hit your opponent with brute force and deal great damage. Physical skill base damage increases evenly from 111 at level 1 to 1368 at level 10. Mana cost 28 at level 1, maximum 343 at level 10. Cast time is 0.2 seconds. No lingering damage duration. Exact targeting and hit area remain to be reviewed. Cooldown 41 seconds at level 1 and 41 seconds at level 10. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 96 |
| patk | 111 |
| skillName_de | Schmetterschlag |
| skillpoints | 1 |
| castTimeSeconds | 0,2 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 28 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 28 |
| resourceCosts[0].scaling.perLevel | 35 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 111 |
| statScaling.patk.perLevel | 139,667 |
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
| levelProgression.rules[0].rule.rule.base | 28 |
| levelProgression.rules[0].rule.rule.perLevel | 35 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 111 |
| levelProgression.rules[1].rule.perLevel | 139,667 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 98: Schockwelle der Regeneration

Erzeugt nach 1 Sekunde Cast Time eine Schockwelle, die Gegner im Umkreis physisch schädigt und dich um 1,5 Prozent des tatsächlich verursachten Schadens auf Level 1 heilt. Der Heilanteil steigt je weiterer Skillstufe um 0,1 Prozentpunkte auf 2,4 Prozent auf Level 10. Der physische Grundangriffswert steigt von 337 um 67 je weiterer Skillstufe auf 940 auf Level 10. Die Mana-Kosten 183 auf Stufe 1, plus 50 je weiterer Stufe, auf Stufe 10 insgesamt 633. Der Cooldown sinkt von 77 um 1 Sekunde je weiterer Stufe auf 68 Sekunden. Die gespeicherte Ausführungsdauer beträgt 1 Sekunde; es gibt keinen anhaltenden Schaden über Zeit. Der Flächenradius und der genaue Trefferzeitpunkt sind noch festzulegen.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Shockwave of Regeneration |
| category | active |
| cd | 77 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erzeugt nach 1 Sekunde Cast Time eine Schockwelle, die Gegner im Umkreis physisch schädigt und dich um 1,5 Prozent des tatsächlich verursachten Schadens auf Level 1 heilt. Der Heilanteil steigt je weiterer Skillstufe um 0,1 Prozentpunkte auf 2,4 Prozent auf Level 10. Der physische Grundangriffswert steigt von 337 um 67 je weiterer Skillstufe auf 940 auf Level 10. Die Mana-Kosten 183 auf Stufe 1, plus 50 je weiterer Stufe, auf Stufe 10 insgesamt 633. Der Cooldown sinkt von 77 um 1 Sekunde je weiterer Stufe auf 68 Sekunden. Die gespeicherte Ausführungsdauer beträgt 1 Sekunde; es gibt keinen anhaltenden Schaden über Zeit. Der Flächenradius und der genaue Trefferzeitpunkt sind noch festzulegen. |
| description_eng | After a 1 second cast time, creates a shockwave that deals physical damage to nearby enemies and heals you for 1.5 percent of actual damage dealt at level 1. The healing share increases by 0.1 percentage points per additional skill level to 2.4 percent at level 10. Physical base attack increases from 337 by 67 per additional skill level to 940 at level 10. Mana cost 183 at level 1, plus 50 per additional level, reaching 633 at level 10. Cooldown decreases from 77 by 1 second per additional level to 68 seconds. Stored execution duration is 1 second; there is no lingering damage over time. Area radius and exact hit timing remain to be defined. |
| dmgType (Altformat) | physical |
| dur | 1 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 98 |
| patk | 337 |
| skillName_de | Schockwelle der Regeneration |
| skillpoints | 1 |
| castTimeSeconds | 1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 77 |
| cooldownScaling.perLevel | -1 |
| effects[0].key | shockwaveSelfHeal |
| effects[0].type | heal |
| effects[0].target | self |
| effects[0].value | 0,015 |
| effects[0].unit | fraction |
| effects[0].reference | damageDealt |
| effects[0].damageBasis | actualHealthDamage |
| effects[0].durationSeconds | 0 |
| effects[0].progressionStatus | defined |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0,015 |
| effects[0].valueScaling.perLevel | 0,001 |
| effectsVersion | 1 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 183 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 183 |
| resourceCosts[0].scaling.perLevel | 50 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 337 |
| statScaling.patk.perLevel | 67 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 77 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,015 |
| levelProgression.rules[1].rule.perLevel | 0,001 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 183 |
| levelProgression.rules[2].rule.rule.perLevel | 50 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | patk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 337 |
| levelProgression.rules[3].rule.perLevel | 67 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 131: Zweihändiges Axttraining

Verbessert dauerhaft deinen Umgang mit zweihändigen Äxten. Auf Skilllevel 1 erhältst du 3 Stärke. Je weiterer Stufe kommt 1 Stärke hinzu, bis zu 12 Stärke auf Level 10. Keine Aktivierungskosten oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Two-handed Axe Training |
| category | passive |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Verbessert dauerhaft deinen Umgang mit zweihändigen Äxten. Auf Skilllevel 1 erhältst du 3 Stärke. Je weiterer Stufe kommt 1 Stärke hinzu, bis zu 12 Stärke auf Level 10. Keine Aktivierungskosten oder Cooldown. |
| description_eng | Permanently improves your proficiency with two-handed axes. At skill level 1, gain 3 Strength. Each additional level adds 1 Strength, reaching 12 Strength at level 10. No activation costs or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 131 |
| skillName_de | Zweihändiges Axttraining |
| skillpoints | 1 |
| str | 3 |
| resourceCosts | [] |
| statScaling.str.type | linear |
| statScaling.str.base | 3 |
| statScaling.str.perLevel | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 3 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
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

### 172: Kampfinstinkt

Aktiver Eigenbuff mit zehn Stufen für 600 Sekunden. Erhöht physischen Skillschaden um 8 je Skillstufe, maximal +80. Der Bonus wird je passendem Skilltreffer mit physischem Angriffsanteil angewendet, auch bei Mehrfachtreffern. Kein allgemeiner P-Angriff, kein Bonus für normale Auto-Attacks, Begleiter oder rein feste Rest-DoTs. Kein Stärkebonus. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50 auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Combat Instinct |
| category | active |
| cd | 60 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Aktiver Eigenbuff mit zehn Stufen für 600 Sekunden. Erhöht physischen Skillschaden um 8 je Skillstufe, maximal +80. Der Bonus wird je passendem Skilltreffer mit physischem Angriffsanteil angewendet, auch bei Mehrfachtreffern. Kein allgemeiner P-Angriff, kein Bonus für normale Auto-Attacks, Begleiter oder rein feste Rest-DoTs. Kein Stärkebonus. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50 auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten. |
| description_eng | Active self buff with ten levels for 600 seconds. Adds 8 physical skill damage per level, up to 80, to each matching skill hit with a physical attack component, including multi-hit attacks. Does not increase general physical attack, normal basic attacks, companions or purely fixed residual DoTs. No Strength bonus. Cooldown 60 seconds; fixed 0.1-second cast unaffected by speed. Mana starts at 50 plus 13 per additional level, up to 167 before discounts. |
| dmgType (Altformat) | selfbuff |
| dur | 600 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 172 |
| skillName_de | Kampfinstinkt |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
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
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 8 |
| levelProgression.rules[1].rule.perLevel | 8 |
| levelProgression.rules[1].source | storedFormula |
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
| effects[0].key | combat-instinct-physical-skill-damage |
| effects[0].type | damageBonus |
| effects[0].target | self |
| effects[0].appliesTo | allSkills |
| effects[0].unit | flat |
| effects[0].damageTypes[0] | physical |
| effects[0].value | 8 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 8 |
| effects[0].valueScaling.perLevel | 8 |
| effects[0].durationSeconds | 600 |
| effectsVersion | 1 |

### 173: Geist des Kriegers

Aktiver Eigenbuff des Butchers mit zehn Stufen. Gewährt je Stufe +2 P-Angriff und +2 Vitalität, maximal jeweils +20. Kein Stärkebonus. Dauer 300 Sekunden, Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50 auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Spirit of the Warrior |
| category | active |
| cd | 60 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Aktiver Eigenbuff des Butchers mit zehn Stufen. Gewährt je Stufe +2 P-Angriff und +2 Vitalität, maximal jeweils +20. Kein Stärkebonus. Dauer 300 Sekunden, Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50 auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten. |
| description_eng | Butcher active self buff with ten levels. Grants 2 physical attack and 2 Vitality per level, up to 20 each. No Strength bonus. Duration 300 seconds, cooldown 60 seconds, fixed 0.1-second cast unaffected by speed. Mana starts at 50 plus 13 per additional level, up to 167 before discounts. |
| dmgType (Altformat) | selfbuff |
| dur | 300 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 173 |
| skillName_de | Geist des Kriegers |
| skillpoints | 1 |
| vita | 2 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 2 |
| statScaling.vita.perLevel | 2 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 2 |
| statScaling.patk.perLevel | 2 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | vita |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.perLevel | 2 |
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
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 2 |
| levelProgression.rules[2].rule.perLevel | 2 |
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
| patk | 2 |
| statBonusTargets.patk | self |
| statBonusUnits.patk | flat |

### 174: Blutrausch

Aktiver Eigenbuff mit zehn Stufen für 60 Sekunden. Gewährt +2 P-Angriff je Skillstufe, maximal +20, statt des bisherigen Stärkebonus. Angriffsgeschwindigkeit steigt gleichmäßig von +5 auf +10 Rohpunkte über die bestehende Tempokurve. Cooldown 300 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50 auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Bloodlust |
| atkSpeed | 0,05 |
| category | active |
| cd | 300 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Aktiver Eigenbuff mit zehn Stufen für 60 Sekunden. Gewährt +2 P-Angriff je Skillstufe, maximal +20, statt des bisherigen Stärkebonus. Angriffsgeschwindigkeit steigt gleichmäßig von +5 auf +10 Rohpunkte über die bestehende Tempokurve. Cooldown 300 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50 auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten. |
| description_eng | Active self buff with ten levels for 60 seconds. Grants 2 physical attack per level, up to 20, replacing the former Strength bonus. Attack speed increases evenly from 5 to 10 raw rating points through the existing speed curve. Cooldown 300 seconds; fixed 0.1-second cast unaffected by speed. Mana starts at 50 plus 13 per additional level, up to 167 before discounts. |
| dmgType (Altformat) | selfbuff |
| dur | 60 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 174 |
| skillName_de | Blutrausch |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statBonusUnits.atkSpeed | fraction |
| statBonusUnits.patk | flat |
| statScaling.atkSpeed.type | linear |
| statScaling.atkSpeed.base | 0,05 |
| statScaling.atkSpeed.perLevel | 0,006 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 2 |
| statScaling.patk.perLevel | 2 |
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
| levelProgression.rules[1].path[1] | atkSpeed |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,05 |
| levelProgression.rules[1].rule.perLevel | 0,006 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 2 |
| levelProgression.rules[2].rule.perLevel | 2 |
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
| patk | 2 |
| statBonusTargets.patk | self |

### 175: Bis in den Tot

Eigenbuff für 15 Sekunden. Erhöht das Angriffstempo auf allen Stufen um 15 Prozent. Tauscht auf Stufe 1 vorübergehend 1 Prozent der aktuellen Vitalität gegen dieselbe Anzahl zusätzlicher Stärkepunkte. Je weiterer Stufe steigt der getauschte Vita-Anteil um 1 Prozentpunkt, bis zu 10 Prozent auf Stufe 10. Berechnung einmalig bei Aktivierung vor dem eigenen Effekt; kein prozentualer Stärke-Bonus und kein wiederholtes Abziehen. Beispiel: 100 Vita und 200 Stärke werden auf Stufe 10 zu 90 Vita und 210 Stärke. Beide Änderungen enden nach 15 Sekunden. Der alte feste Bonus von 55 P-Angriff und die Zweikampf-/Boss-Bedingung entfallen. Aktivierung kostet 50 Mana auf Stufe 1, +13 je weiterer Stufe bis 167. Cooldown 150 Sekunden, je weiterer Stufe 1 Sekunde weniger bis 141. Castzeit fest 0,1 Sekunden. Vita-Abzug senkt entsprechend Max-Leben, P-Abwehr und HP-Regeneration; Umgang mit aktuellen HP beim Wechsel des Max-Lebens bleibt offen. Kein Wiederbelebungseffekt. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Until Death |
| category | active |
| cd | 150 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff für 15 Sekunden. Erhöht das Angriffstempo auf allen Stufen um 15 Prozent. Tauscht auf Stufe 1 vorübergehend 1 Prozent der aktuellen Vitalität gegen dieselbe Anzahl zusätzlicher Stärkepunkte. Je weiterer Stufe steigt der getauschte Vita-Anteil um 1 Prozentpunkt, bis zu 10 Prozent auf Stufe 10. Berechnung einmalig bei Aktivierung vor dem eigenen Effekt; kein prozentualer Stärke-Bonus und kein wiederholtes Abziehen. Beispiel: 100 Vita und 200 Stärke werden auf Stufe 10 zu 90 Vita und 210 Stärke. Beide Änderungen enden nach 15 Sekunden. Der alte feste Bonus von 55 P-Angriff und die Zweikampf-/Boss-Bedingung entfallen. Aktivierung kostet 50 Mana auf Stufe 1, +13 je weiterer Stufe bis 167. Cooldown 150 Sekunden, je weiterer Stufe 1 Sekunde weniger bis 141. Castzeit fest 0,1 Sekunden. Vita-Abzug senkt entsprechend Max-Leben, P-Abwehr und HP-Regeneration; Umgang mit aktuellen HP beim Wechsel des Max-Lebens bleibt offen. Kein Wiederbelebungseffekt. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff for 15 seconds. Grants 15 percent attack speed at every level. Temporarily exchanges 1 percent of current vitality at level 1 for the same number of additional Strength points. Each additional level raises the exchanged vitality fraction by 1 percentage point, reaching 10 percent at level 10. Calculated once on activation before its own effect; not a percentage Strength bonus or repeated drain. Example: 100 vitality and 200 Strength become 90 vitality and 210 Strength at level 10. Both changes end after 15 seconds. Removes the old fixed 55 physical attack bonus and duel/boss condition. Activation costs 50 Mana plus 13 per additional level to 167. Cooldown 150 seconds minus 1 per additional level to 141. Fixed cast time 0.1 seconds. Reduced vitality lowers maximum HP, physical defense and HP regeneration; current-HP adjustment when maximum HP changes remains pending. No resurrection. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 167 at level 10, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 15 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 175 |
| skillName_de | Bis in den Tot |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| atkSpeed | 0,15 |
| attributeExchangeSettings.sourceStat | vita |
| attributeExchangeSettings.destinationStat | str |
| attributeExchangeSettings.sourceFractionScaling.type | linear |
| attributeExchangeSettings.sourceFractionScaling.base | 0,01 |
| attributeExchangeSettings.sourceFractionScaling.perLevel | 0,01 |
| attributeExchangeSettings.destinationPointsPerSourcePoint | 1 |
| attributeExchangeSettings.sampling | onActivationBeforeOwnEffect |
| attributeExchangeSettings.durationSeconds | 15 |
| attributeExchangeSettings.currentHealthAdjustmentStatus | pending |
| cooldownScaling.type | linear |
| cooldownScaling.base | 150 |
| cooldownScaling.perLevel | -1 |
| effects[0].key | until-death-attack-speed |
| effects[0].type | statModifier |
| effects[0].target | self |
| effects[0].stat | atkSpeed |
| effects[0].value | 0,15 |
| effects[0].unit | fraction |
| effects[0].durationSeconds | 15 |
| statBonusUnits.atkSpeed | fraction |
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
| levelProgression.rules[1].path[0] | attributeExchangeSettings |
| levelProgression.rules[1].path[1] | sourceFractionScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,01 |
| levelProgression.rules[1].rule.perLevel | 0,01 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | cooldownScaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0,1 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 150 |
| levelProgression.rules[2].rule.rule.perLevel | -1 |
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

### 176: Ewiger Sieger

Eigene Angriffe haben unter 15 Prozent Leben eine Chance von 80 Prozent, Ewiger Sieger auszulösen, wenn der Skill bereit ist. Erhöht für 30 Sekunden Stärke und Vitalität jeweils um 3 auf Level 1. Je weiterer Stufe steigen beide Boni um 2, bis zu jeweils 21 auf Level 10. Der Cooldown beträgt 180 Sekunden. Keine Aktivierungskosten. Der Vitalitätsbonus erhöht maximales Leben und physische Verteidigung, heilt dich aber nicht direkt. Ewiger Sieger belebt dich nicht wieder.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Eternal Victor |
| category | passive |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigene Angriffe haben unter 15 Prozent Leben eine Chance von 80 Prozent, Ewiger Sieger auszulösen, wenn der Skill bereit ist. Erhöht für 30 Sekunden Stärke und Vitalität jeweils um 3 auf Level 1. Je weiterer Stufe steigen beide Boni um 2, bis zu jeweils 21 auf Level 10. Der Cooldown beträgt 180 Sekunden. Keine Aktivierungskosten. Der Vitalitätsbonus erhöht maximales Leben und physische Verteidigung, heilt dich aber nicht direkt. Ewiger Sieger belebt dich nicht wieder. |
| description_eng | Your own attacks below 15 percent Health have an 80 percent chance to trigger Eternal Victor when ready. For 30 seconds, increases Strength and Vitality by 3 each at level 1. Each additional level adds 2 to both bonuses, reaching 21 each at level 10. Cooldown is 180 seconds. No activation costs. Vitality increases maximum Health and physical defense, but does not directly heal you. Eternal Victor does not revive you. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 176 |
| skillName_de | Ewiger Sieger |
| skillpoints | 1 |
| str | 3 |
| vita | 3 |
| activation | automatic |
| cd | 180 |
| dur | 30 |
| resourceCosts | [] |
| statScaling.str.type | linear |
| statScaling.str.base | 3 |
| statScaling.str.perLevel | 2 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 3 |
| statScaling.vita.perLevel | 2 |
| triggerCondition.type | ownAttack |
| triggerCondition.oncePerAttackAction | true |
| triggerCondition.excludeCompanionAttacks | true |
| triggerCondition.requiresCooldownReady | true |
| triggerCondition.healthThresholds[0].belowFraction | 0,15 |
| triggerCondition.healthThresholds[0].chancePerCheck | 0,8 |
| triggerCondition.thresholdSelection | lowestMatchingThreshold |
| triggerConditionStatus | defined |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 3 |
| levelProgression.rules[0].rule.perLevel | 2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | vita |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 3 |
| levelProgression.rules[1].rule.perLevel | 2 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 177: Ungebrochen

Dauerhafter Bonus: +3 physischer Skillschaden je gelernter Stufe, auf Stufe 10 insgesamt +30. Gilt ständig für passende physische Skilltreffer, unabhängig von der letzten Kampfphase. Kein Stärkebonus, kein allgemeiner P-Angriff und kein Bonus für normale Auto-Attacks oder Begleiter. Nach tödlichem Schaden beginnt automatisch eine letzte Kampfphase mit 80 % deines maximalen Lebens. Auf Skilllevel 1 hält sie 20 Sekunden, gewährt +10 Punkte Angriffsgeschwindigkeit und +30 % Laufgeschwindigkeit und hat 600 Sekunden Cooldown. Auf Skilllevel 10 sind es 30 Sekunden, +20 Punkte Angriffsgeschwindigkeit, +45 % Laufgeschwindigkeit und 300 Sekunden Cooldown. Du kannst währenddessen geheilt werden, stirbst aber spätestens am Ende der Phase. Erneuter Tod beendet die Phase sofort. Zusätzlich dauerhaft +1 Willenskraft je gelernter Skillstufe: +1 auf Stufe 1 bis insgesamt +10 auf Stufe 10.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Unbroken |
| category | passive |
| cd | 600 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Bonus: +3 physischer Skillschaden je gelernter Stufe, auf Stufe 10 insgesamt +30. Gilt ständig für passende physische Skilltreffer, unabhängig von der letzten Kampfphase. Kein Stärkebonus, kein allgemeiner P-Angriff und kein Bonus für normale Auto-Attacks oder Begleiter. Nach tödlichem Schaden beginnt automatisch eine letzte Kampfphase mit 80 % deines maximalen Lebens. Auf Skilllevel 1 hält sie 20 Sekunden, gewährt +10 Punkte Angriffsgeschwindigkeit und +30 % Laufgeschwindigkeit und hat 600 Sekunden Cooldown. Auf Skilllevel 10 sind es 30 Sekunden, +20 Punkte Angriffsgeschwindigkeit, +45 % Laufgeschwindigkeit und 300 Sekunden Cooldown. Du kannst währenddessen geheilt werden, stirbst aber spätestens am Ende der Phase. Erneuter Tod beendet die Phase sofort. Zusätzlich dauerhaft +1 Willenskraft je gelernter Skillstufe: +1 auf Stufe 1 bis insgesamt +10 auf Stufe 10. |
| description_eng | Permanent bonus: +3 physical skill damage per learned level, up to +30 at level 10. Always applies to matching physical skill hits, independently of the final combat phase. No Strength bonus, general physical attack bonus or normal basic attack/companion bonus. After lethal damage, automatically begin a final combat phase with 80% of your maximum health. At skill level 1, it lasts 20 seconds, grants +10 attack speed rating points and +30% movement speed and has a 600-second cooldown. At skill level 10, it lasts 30 seconds, grants +20 attack speed rating points and +45% movement speed and has a 300-second cooldown. Healing is possible during the phase, but you die when it ends. Dying again ends the phase immediately. Additionally grants 1 permanent Wisdom per learned skill level, from 1 at level 1 to 10 at level 10. |
| dmgType (Altformat) | passive |
| dur | 20 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 177 |
| skillName_de | Ungebrochen |
| skillpoints | 1 |
| activation | automatic |
| effects[0].restoredHealthFraction | 0,8 |
| effects[0].healingAllowed | true |
| effects[0].endsOnDeath | true |
| effects[0].disablesEffects | [] |
| effects[0].trigger | lethalDamage |
| effects[0].diesAtEnd | true |
| effects[0].valueScaling.values | [] |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 20 |
| effects[0].durationScaling.perLevel | 1,111 |
| effects[0].durationScaling.values | [] |
| effects[0].type | deathReprieve |
| effects[0].target | self |
| effects[0].allowedRaces | [] |
| effects[0].damageTypes | [] |
| effects[0].durationSeconds | 20 |
| effects[0].key | last-stand |
| effects[1].disablesEffects | [] |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | 0,1 |
| effects[1].valueScaling.perLevel | 0,011 |
| effects[1].valueScaling.values | [] |
| effects[1].durationScaling.type | linear |
| effects[1].durationScaling.base | 20 |
| effects[1].durationScaling.perLevel | 1,111 |
| effects[1].durationScaling.values | [] |
| effects[1].type | statModifier |
| effects[1].target | self |
| effects[1].allowedRaces | [] |
| effects[1].stat | atkSpeed |
| effects[1].value | 0,1 |
| effects[1].unit | fraction |
| effects[1].reference | targetStat |
| effects[1].damageTypes | [] |
| effects[1].durationSeconds | 20 |
| effects[1].endWith | last-stand |
| effects[1].key | last-stand-attack-speed |
| effects[2].disablesEffects | [] |
| effects[2].valueScaling.type | linear |
| effects[2].valueScaling.base | 0,3 |
| effects[2].valueScaling.perLevel | 0,017 |
| effects[2].valueScaling.values | [] |
| effects[2].durationScaling.type | linear |
| effects[2].durationScaling.base | 20 |
| effects[2].durationScaling.perLevel | 1,111 |
| effects[2].durationScaling.values | [] |
| effects[2].type | statModifier |
| effects[2].target | self |
| effects[2].allowedRaces | [] |
| effects[2].stat | movementSpeed |
| effects[2].value | 0,3 |
| effects[2].unit | fraction |
| effects[2].reference | targetStat |
| effects[2].damageTypes | [] |
| effects[2].durationSeconds | 20 |
| effects[2].endWith | last-stand |
| effects[2].key | last-stand-movement-speed |
| effects[3].key | unbroken-permanent-physical-skill-damage |
| effects[3].type | damageBonus |
| effects[3].target | self |
| effects[3].appliesTo | allSkills |
| effects[3].unit | flat |
| effects[3].damageTypes[0] | physical |
| effects[3].value | 3 |
| effects[3].valueScaling.type | linear |
| effects[3].valueScaling.base | 3 |
| effects[3].valueScaling.perLevel | 3 |
| effects[3].durationSeconds | 0 |
| effectsVersion | 1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 600 |
| cooldownScaling.perLevel | -33,333 |
| durationScaling.type | linear |
| durationScaling.base | 20 |
| durationScaling.perLevel | 1,111 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | durationScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 20 |
| levelProgression.rules[0].rule.perLevel | 1,111 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 1 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,1 |
| levelProgression.rules[1].rule.perLevel | 0,011 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 1 |
| levelProgression.rules[2].path[2] | durationScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 20 |
| levelProgression.rules[2].rule.perLevel | 1,111 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 2 |
| levelProgression.rules[3].path[2] | valueScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 0,3 |
| levelProgression.rules[3].rule.perLevel | 0,017 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 2 |
| levelProgression.rules[4].path[2] | durationScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 20 |
| levelProgression.rules[4].rule.perLevel | 1,111 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | cooldownScaling |
| levelProgression.rules[5].rule.kind | bounded |
| levelProgression.rules[5].rule.min | 0,1 |
| levelProgression.rules[5].rule.rule.kind | linear |
| levelProgression.rules[5].rule.rule.base | 600 |
| levelProgression.rules[5].rule.rule.perLevel | -33,333 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.rules[6].path[0] | durationScaling |
| levelProgression.rules[6].rule.kind | linear |
| levelProgression.rules[6].rule.base | 20 |
| levelProgression.rules[6].rule.perLevel | 1,111 |
| levelProgression.rules[6].source | storedFormula |
| levelProgression.rules[7].path[0] | effects |
| levelProgression.rules[7].path[1] | 3 |
| levelProgression.rules[7].path[2] | valueScaling |
| levelProgression.rules[7].rule.kind | linear |
| levelProgression.rules[7].rule.base | 3 |
| levelProgression.rules[7].rule.perLevel | 3 |
| levelProgression.rules[7].source | storedFormula |
| levelProgression.rules[8].path[0] | statScaling |
| levelProgression.rules[8].path[1] | wis |
| levelProgression.rules[8].rule.kind | linear |
| levelProgression.rules[8].rule.base | 1 |
| levelProgression.rules[8].rule.perLevel | 1 |
| levelProgression.rules[8].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |
| statScaling.wis.type | linear |
| statScaling.wis.base | 1 |
| statScaling.wis.perLevel | 1 |
| wis | 1 |

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

### 227: Dämonische Schockwelle

Schlägt auf den Boden vor dir und erzeugt eine Schockwelle, die Gegner in einem kegelförmigen Bereich trifft. P-Grundangriff je Stufe 172 / 344 / 688; M-Grundangriff 109 / 218 / 436. Beide Werte verdoppeln sich je weiterer Stufe. Mana-Kosten 70 auf Stufe 1, Stufenwerte 70, 140, 280, maximal 280 auf Stufe 3. Castzeit 0,2 Sekunden. Cooldown 125 Sekunden auf Stufe 1 und 125 Sekunden auf Stufe 3. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Demonic Blast |
| category | active |
| cd | 125 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Schlägt auf den Boden vor dir und erzeugt eine Schockwelle, die Gegner in einem kegelförmigen Bereich trifft. P-Grundangriff je Stufe 172 / 344 / 688; M-Grundangriff 109 / 218 / 436. Beide Werte verdoppeln sich je weiterer Stufe. Mana-Kosten 70 auf Stufe 1, Stufenwerte 70, 140, 280, maximal 280 auf Stufe 3. Castzeit 0,2 Sekunden. Cooldown 125 Sekunden auf Stufe 1 und 125 Sekunden auf Stufe 3. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Strikes the ground in front of you, creating a shock wave that hits enemies in a cone. Physical base attack by level: 172 / 344 / 688; magical base attack: 109 / 218 / 436. Both double each additional level. Mana cost 70 at level 1, maximum 280 at level 3. Cast time 0.2 seconds. Cooldown 125 seconds at level 1 and 125 seconds at level 3. |
| dmgType (Altformat) | physical |
| dur | 2 |
| matk | 109 |
| maxSkillLv | 3 |
| maxUpgradeLv | 10 |
| nr | 227 |
| patk | 172 |
| skillName_de | Dämonische Schockwelle |
| skillpoints | 1 |
| castTimeSeconds | 0,2 |
| mana (Aktivierungskosten, kein Bonus) | 70 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.values[0] | 70 |
| resourceCosts[0].scaling.values[1] | 140 |
| resourceCosts[0].scaling.values[2] | 280 |
| resourceCosts[0].scaling.base | 70 |
| statScaling.patk.type | table |
| statScaling.patk.values[0] | 172 |
| statScaling.patk.values[1] | 344 |
| statScaling.patk.values[2] | 688 |
| statScaling.matk.type | table |
| statScaling.matk.values[0] | 109 |
| statScaling.matk.values[1] | 218 |
| statScaling.matk.values[2] | 436 |
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
| levelProgression.rules[0].rule.rule.kind | exponential |
| levelProgression.rules[0].rule.rule.base | 70 |
| levelProgression.rules[0].rule.rule.factor | 2 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | exponential |
| levelProgression.rules[1].rule.base | 172 |
| levelProgression.rules[1].rule.factor | 2 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | exponential |
| levelProgression.rules[2].rule.base | 109 |
| levelProgression.rules[2].rule.factor | 2 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | mixed |
| type | skill |

### 234: Zorn des Henkers

Führe einen tödlichen Hieb aus, der schweren Schaden verursacht und eine hohe Kritchance hat. Physischer Grundangriff 600 auf Stufe 1, je weiterer Stufe +555 bis 2820 auf Stufe 5. Mana-Kosten 150 auf Stufe 1, +139 je weiterer Stufe, maximal 706 auf Stufe 5. Castzeit 0,2 Sekunden, Cooldown 180 Sekunden auf Stufe 1 und 180 Sekunden auf Stufe 5. Nur für diesen Angriff wird der aktuelle Krit-Wert um 20 Punkte je gelerntem Skilllevel erhöht: 20 / 40 / 60 / 80 / 100 auf Stufe 1 bis 5. Kein Bonus von 100 Prozent und kein garantierter Krit; andere Angriffe erhalten diesen Bonus nicht. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Executioner's Wrath |
| category | active |
| cd | 180 |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Führe einen tödlichen Hieb aus, der schweren Schaden verursacht und eine hohe Kritchance hat. Physischer Grundangriff 600 auf Stufe 1, je weiterer Stufe +555 bis 2820 auf Stufe 5. Mana-Kosten 150 auf Stufe 1, +139 je weiterer Stufe, maximal 706 auf Stufe 5. Castzeit 0,2 Sekunden, Cooldown 180 Sekunden auf Stufe 1 und 180 Sekunden auf Stufe 5. Nur für diesen Angriff wird der aktuelle Krit-Wert um 20 Punkte je gelerntem Skilllevel erhöht: 20 / 40 / 60 / 80 / 100 auf Stufe 1 bis 5. Kein Bonus von 100 Prozent und kein garantierter Krit; andere Angriffe erhalten diesen Bonus nicht. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Execute a lethal blow that deals heavy damage and has a high critical chance. Physical base attack 600 at level 1 plus 555 per additional level to 2820 at level 5. Mana cost 150 at level 1, maximum 706 at level 5. Cast time 0.2 seconds, Cooldown 180 seconds at level 1 and 180 seconds at level 5. Only this attack adds 20 critical rating points per learned level: 20 / 40 / 60 / 80 / 100 at levels 1 through 5. This is not 100 percent or a guaranteed critical hit; other attacks receive no bonus. |
| dmgType (Altformat) | physical |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 234 |
| patk | 600 |
| skillName_de | Zorn des Henkers |
| skillpoints | 1 |
| castTimeSeconds | 0,2 |
| mana (Aktivierungskosten, kein Bonus) | 150 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 150 |
| resourceCosts[0].scaling.perLevel | 139 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 600 |
| statScaling.patk.perLevel | 555 |
| effects[0].key | executioner-crit-rating |
| effects[0].type | statModifier |
| effects[0].target | self |
| effects[0].stat | critChanceRating |
| effects[0].value | 20 |
| effects[0].unit | flat |
| effects[0].appliesTo | specificSkill |
| effects[0].targetSkillNumber | 234 |
| effects[0].durationSeconds | 0 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 20 |
| effects[0].valueScaling.perLevel | 20 |
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
| levelProgression.rules[0].rule.rule.base | 150 |
| levelProgression.rules[0].rule.rule.perLevel | 139 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 600 |
| levelProgression.rules[1].rule.perLevel | 555 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 20 |
| levelProgression.rules[2].rule.perLevel | 20 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

## Gemeinsame Blöcke

[Kreaturenskills](../shared-creature-skills.md) und [Trainingsskills](../shared-training-skills.md) werden einmal gemeinsam geprüft. Die normale Lerngrenze für Bindung und Zucht ist bereits 1. Tamen verwendet beim Butcher die gespeicherte Standard-Lerngrenze 1; die Definition umfasst für andere Klassen bis zu 3 Stufen.

## Reihenfolge

Zuerst die noch unvollständigen Butcher-Skills durchgehen, gemeinsame geprüfte Definitionen übernehmen, anschließend permanente Passive auf den Ausrüstungsstand rechnen. Aktive Buffs, automatische Kampf-Procs und endgültige Schadensverrechnung folgen separat.

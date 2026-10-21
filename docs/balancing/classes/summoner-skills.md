# Nachtjäger / Seelenjäger: Werte und Skillprüfung

Einteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.

**32 unterschiedliche zugeordnete Skills: 20 aktive und 12 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie bei den bisher geprüften Klassen. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.

| Art | Anzahl | Skills |
| --- | ---: | --- |
| Übrige Passive einschließlich Procs | 9 | Überleben, Armbrusttraining, Erweiterung der Sinne, Verbessertes Nachladen, Ausdauertraining, Ausweichtraining, Rüstungstraining, Hartes Training, Waffentraining |
| Bewegungsbuffs | 1 | Dash |
| Aktive Skills (Angriff/Heilung/Unterstützung) | 10 | Doppelschuss, Explosionspfeil, Feuerpfeil, Kettenschuss, Kopfschuss, Hinterhältiger Pfeil, Seelenschuss, Seelensammler, Spektralketten, Durchdringender Schuss |
| Eigenbuffs | 4 | Beweglichkeit, Scharfer Instinkte, Gute Reflexe, Keine Gnade |
| Kreaturen aktiv | 3 | Tamen, Beschwören, Zurückrufen |
| Kreaturen passiv | 3 | Bindung, Kontrolle, Zucht |
| Gruppenbuffs | 2 | Erweckung der Leidenschaft, Flinke Füße |

## Basis und Ausrüstung

R1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.

### Basis ohne Ausrüstung

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 175 | 445 | 745 | 1.045 | 1.345 | 1.645 | 1.945 |
| Mana | 139 | 409 | 709 | 1.009 | 1.309 | 1.609 | 1.909 |
| P-Angriff | 12 | 28,2 | 46,2 | 64,2 | 82,2 | 100,2 | 118,2 |
| M-Angriff | 3 | 19,2 | 37,2 | 55,2 | 73,2 | 91,2 | 109,2 |
| P-Defense | 5 | 23 | 43 | 63 | 83 | 103 | 123 |
| M-Defense | 10 | 28 | 48 | 68 | 88 | 108 | 128 |

### Mit Rüstung und Armbrust

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 525 | 795 | 1.270 | 1.685 | 2.130 | 2.545 | 3.045 |
| Mana | 314 | 584 | 1.014 | 1.389 | 1.834 | 2.309 | 2.809 |
| P-Angriff | 36 | 52,2 | 89,2 | 140,2 | 215,2 | 328,2 | 504,2 |
| M-Angriff | 3 | 19,2 | 37,2 | 55,2 | 73,2 | 91,2 | 109,2 |
| P-Defense | 56 | 74 | 127 | 201 | 305 | 398 | 495 |
| M-Defense | 50 | 68 | 117 | 187 | 284 | 379 | 476 |

Eine Armbrust ist angesetzt. Ihr Agilitätsbonus wird ohne bestätigte Umrechnung nicht in Angriff oder Tempo umgerechnet. Equipment-Vorschläge sind nicht übernommen. Grundregeneration: 25 Mana und 12 HP pro Tick. Das Intervall wird später in Unreal geprüft. Bestehende gemeinsame Skillwerte werden übernommen; fehlende Werte werden nicht geschätzt.

## Skillübersicht

| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | Überleben | Passive | 20 | HP-Regeneration +0,5<br>Stärke +0,5<br>Agility +0,25<br>Dexterity +0,25 | Stärke: 0,5 bis 10<br>Agility: 0,25 bis 5<br>Dexterity: 0,25 bis 5<br>manaRegen: 0,5 bis 10<br>HP-Regeneration: 0,5 bis 10 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 7 | Armbrusttraining | Passive | 10 | Agility +1<br>Dexterity +1 | Agility: 1 bis 5<br>Dexterity: 1 bis 6 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 21 | Dash | Buff / Bewegung (selbst) | 10 | Rutsche schnell in eine Richtung. Mit höheren Skillstufen sinken Ausdauerkosten, Cooldown und Bewegungsdauer, während die Reichweite steigt. Auf Level 1 bewegst du dich 1 Meter in 1 Sekunde bei 6 Sekunden Cooldown und 50 Prozent Ausdauerkosten. Auf Level 10 sind es 2 Meter in 0,5 Sekunden bei 3 Sekunden Cooldown und 20 Prozent Ausdauerkosten. Dash kostet kein Mana. | Nicht vollständig gespeichert | Mana-Kosten: 0 bis 0<br>stamina-Kosten: 0,5 bis 0,2 (Anteil) | 6 bis 3 | Offen | 1 bis 0,5 | Gemeinsame Definition; Levelskalierung prüfen; Cast Time offen |
| 24 | Doppelschuss | Skill / physisch | 10 | P-Angriff +243<br>Ein einzelnes Ziel | P-Angriff: 243 bis 576 | Mana-Kosten: 122 bis 293 | 29 bis 25 | 0 | 0 (einmalig) | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 43 | Erweiterung der Sinne | Passive | 10 | Vita +0,5<br>Wisdom +0,5<br>Agility +1<br>Dexterity +1 | Dexterity: 1 bis 10<br>Agility: 1 bis 10<br>Vita: 0,5 bis 5<br>Wisdom: 0,5 bis 5 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 47 | Explosionspfeil | Skill / physisch | 10 | P-Angriff +334<br>Animation 1,5 s (vorläufig) | P-Angriff: 334 bis 712 | Mana-Kosten: 251 bis 534 | 36 bis 30 | 0 | Wirkung einmalig; Animation 1,5 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 51 | Feuerpfeil | Skill / physisch | 20 | P-Angriff +67<br>Animation 0,8 s (vorläufig) | P-Angriff: 67 bis 428 | Mana-Kosten: 17 bis 112 | 23 bis 9 | 0 | Wirkung einmalig; Animation 0,8 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 63 | Kettenschuss | Skill / physisch | 5 | P-Angriff +52 | P-Angriff: 52 bis 144 | Mana-Kosten: 13 bis 37 | 60 bis 56 | 0.2 | 1 bis 8 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 66 | Kopfschuss | Skill / physisch | 10 | P-Angriff +474<br>Animation 1 s (vorläufig)<br>Ein einzelnes Ziel | P-Angriff: 474 bis 1.203 | Mana-Kosten: 213 bis 541 | 55 | 0.3 | Wirkung einmalig; Animation 1 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 80 | Beweglichkeit | Selbstbuff | 10 | Movement Speed +1 % | Agility: 0 bis 5<br>Movement Speed: 1 % bis 10 % | Mana-Kosten: 50 bis 167 | 120 bis 102 | 0.1 | 20 bis 24,5 | Gemeinsame Definition |
| 119 | Verbessertes Nachladen | Passive | 10 | P-Angriff +2 | P-Angriff: 2 bis 20<br>Attack Speed: 0 % bis 5 % | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 133 | Tamen | Skill | 3 / Nachtjäger 1 | Versucht, eine Kreatur zu zähmen. Erfordert das passende spezielle Taming-Item für diese Kreatur. Die Grunderfolgschance beginnt bei 50 Prozent und steigt je weiterer Skillstufe um 15 Prozentpunkte auf 80 Prozent. Ein Kreaturen-Gegenwert beeinflusst die endgültige Erfolgschance; die Berechnung ist noch festzulegen. Die Mana-Kosten steigen von 100 um 25 je weiterer Stufe auf 150. Die Cast Time sinkt von 3 um 0,5 Sekunden je weiterer Stufe auf 2 Sekunden, der Cooldown von 60 um 10 Sekunden je weiterer Stufe auf 40 Sekunden. Der Versuch verursacht keinen Schaden und hat keine anschließende Effektdauer. Der Itemverbrauch ist noch festzulegen. Die Definition umfasst drei Stufen; die normale Lerngrenze anderer Klassen liegt bei Stufe 1. Der Abenteurer kann Stufe 3 lernen; eine zweite Spezialklasse ist noch nicht festgelegt. | Nicht vollständig gespeichert | Mana-Kosten: 100 bis 150 | 60 bis 40 | 3 bis 2 | 0 (keine anschließende Wirkung) | Gemeinsame Definition; Levelskalierung prüfen |
| 134 | Bindung | Passive | 3 / Nachtjäger 1 | Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.<br>statModifier, Ziel companion, str, 10<br>statModifier, Ziel companion, vita, 10<br>statModifier, Ziel companion, int, 10<br>statModifier, Ziel companion, wis, 10 | statModifier/str: 10 bis 20<br>statModifier/vita: 10 bis 20<br>statModifier/int: 10 bis 20<br>statModifier/wis: 10 bis 20 | Keine | Entfällt | Entfällt | str: 0 s<br>vita: 0 s<br>int: 0 s<br>wis: 0 s | Gemeinsame Definition |
| 135 | Kontrolle | Passive | 2 / Nachtjäger 1 | Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen. | Nicht vollständig gespeichert | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition; Levelskalierung prüfen |
| 136 | Beschwören | Skill | 1 | Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 1 | Nicht gespeichert | Gemeinsame Definition |
| 137 | Zurückrufen | Skill | 1 | Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 0 | Nicht gespeichert | Gemeinsame Definition |
| 138 | Zucht | Passive | 3 / Nachtjäger 1 | Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.<br>experienceBonus, Ziel companion, 0,1 | experienceBonus/: 10 bis 30 % | Keine | Entfällt | Entfällt | experienceBonus: 0 s | Gemeinsame Definition |
| 139 | Ausdauertraining | Passive | 20 | Vita +1<br>Wisdom +1 | Vita: 1 bis 20<br>Wisdom: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 142 | Ausweichtraining | Passive | 10 | Agility +1<br>Dexterity +0,5 | Agility: 1 bis 10<br>Dexterity: 0,5 bis 5 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 144 | Rüstungstraining | Passive | 10 | P-Defense +3<br>M-Defense +6 | P-Defense: 3 bis 30<br>M-Defense: 6 bis 60 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 147 | Erweckung der Leidenschaft | Buff | 5 | Agility +2<br>Dexterity +2 | Dexterity: 2 bis 10<br>Agility: 2 bis 10 | Mana-Kosten: 75 bis 175 | 60 | 0.2 | 600 | Gemeinsame Definition |
| 148 | Scharfer Instinkte | Selbstbuff | 10 | Ambush +2<br>Attack Speed +0 % | Ambush: 2 bis 11<br>Attack Speed: 0 % bis 1 % | Mana-Kosten: 50 bis 167 | 60 | 0.1 | 300 | Gemeinsame Definition |
| 183 | Gute Reflexe | Selbstbuff | 10 | Agility +1<br>resourceCostReduction, Ziel self, 0,02 | Agility: 1 bis 10 | Mana-Kosten: 50 bis 167 | 60 | 0.1 | resourceCostReduction: 600 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 184 | Hinterhältiger Pfeil | Skill / physisch | 10 | P-Angriff +37<br>damageReplay, Ziel enemy, 0,8<br>Animation 0,5 s (vorläufig) | P-Angriff: 37 bis 64 | Mana-Kosten: 9 bis 18 | 120 bis 102 | 0 | damageReplay: 20 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 185 | Seelenschuss | Skill / physisch | 10 | Markiert einen Gegner für 5 Sekunden und eröffnet das Seelensammler-Fenster. Verursacht selbst keinen Schaden. Castzeit 0 Sekunden, vorläufige Animation 0,1 Sekunden. Bezahlt die Sammlung im Voraus: Kosten von 20 Seelensammler-Anwendungen auf der jeweiligen Stufe, Mana je Stufe 40/140/240/340/440/560/660/760/860/960. Während der Markierung ist Seelensammler kostenlos; maximal 25 vollständige Anwendungen sind möglich. Nicht genutzte Anwendungen werden nicht erstattet. Spektralketten bleibt ein separat bezahlter Abschluss und kann gegen dasselbe Ziel bis 1,5 Sekunden nach Markierungsende eingesetzt werden. Cooldown gleichmäßig von 90 Sekunden auf Stufe 1 bis 75 Sekunden auf Stufe 10.<br>Animation 0,1 s (vorläufig) | P-Angriff: 0 bis 0 | Mana-Kosten: 40 bis 960 | 90 bis 75 | 0 | 5 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 186 | Seelensammler | Skill / physisch | 10 | P-Angriff +4<br>Animation 0,3 s (vorläufig) | P-Angriff: 4 bis 121 | Mana-Kosten: 0 bis 0 | 0 | 0.2 | Wirkung einmalig; Animation 0,3 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 187 | Hartes Training | Passive | 10 | Dexterity +1,4<br>Attack Speed +5 % | Attack Speed: 5 % bis 5 %<br>Dexterity: 1,4 bis 14 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 190 | Keine Gnade | Selbstbuff | 10 | Dexterity +0,8<br>P-Angriff +8,696 | Dexterity: 0,8 bis 8<br>P-Angriff: 8,696 bis 40 | Mana-Kosten: 50 bis 167 | 60 | 0.1 | 600 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 191 | Flinke Füße | Buff | 3 | Movement Speed +1 | Movement Speed: 1 bis 10 | Mana-Kosten: 47 bis 85 | 60 | 0.2 | 600 | Gemeinsame Definition |
| 201 | Waffentraining | Passive | 20 | P-Angriff +1<br>M-Angriff +1 | P-Angriff: 1 bis 20<br>M-Angriff: 1 bis 20 | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 229 | Spektralketten | Skill / gemischt | 1 | P-Angriff +730<br>M-Angriff +203 | Sammelpunkte-Schwellen: 6 / 16 / 22; Fesselung 1 / 2 / 3 / 4 s; nur Skill-Grundschaden +0 / 4 / 9 / 15 % | Mana-Kosten: 439 bis 439 | 69 | 0.3 | 1 / 2 / 3 / 4 s nach Sammelpunkten | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 262 | Durchdringender Schuss | Skill / physisch | 10 | P-Angriff +340<br>Ein einzelnes Ziel | P-Angriff: 340 bis 889 | Mana-Kosten: 85 bis 222 | 42 | 0 | 0 (einmalig) | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |

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

### 7: Armbrusttraining

Permanentes Armbrusttraining mit zehn Stufen. Beginnt mit +1 Agilität und +1 Geschicklichkeit. Je weiterer Stufe steigt abwechselnd Geschick oder Agilität um 1, beginnend mit Geschick auf Stufe 2. Auf Stufe 10 insgesamt +5 Agilität und +6 Geschicklichkeit. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Crossbow Training |
| agi | 1 |
| category | passive |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanentes Armbrusttraining mit zehn Stufen. Beginnt mit +1 Agilität und +1 Geschicklichkeit. Je weiterer Stufe steigt abwechselnd Geschick oder Agilität um 1, beginnend mit Geschick auf Stufe 2. Auf Stufe 10 insgesamt +5 Agilität und +6 Geschicklichkeit. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent Crossbow Training with ten levels. Starts at +1 Agility and +1 Dexterity. Each additional level alternates +1 Dexterity or Agility, beginning with Dexterity at level 2. At level 10: +5 Agility and +6 Dexterity. No activation costs, cast time or cooldown. |
| dex | 1 |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 7 |
| skillName_de | Armbrusttraining |
| skillpoints | 1 |
| resourceCosts | [] |
| statScaling.agi.type | table |
| statScaling.agi.base | 1 |
| statScaling.agi.values[0] | 1 |
| statScaling.agi.values[1] | 1 |
| statScaling.agi.values[2] | 2 |
| statScaling.agi.values[3] | 2 |
| statScaling.agi.values[4] | 3 |
| statScaling.agi.values[5] | 3 |
| statScaling.agi.values[6] | 4 |
| statScaling.agi.values[7] | 4 |
| statScaling.agi.values[8] | 5 |
| statScaling.agi.values[9] | 5 |
| statScaling.dex.type | table |
| statScaling.dex.base | 1 |
| statScaling.dex.values[0] | 1 |
| statScaling.dex.values[1] | 2 |
| statScaling.dex.values[2] | 2 |
| statScaling.dex.values[3] | 3 |
| statScaling.dex.values[4] | 3 |
| statScaling.dex.values[5] | 4 |
| statScaling.dex.values[6] | 4 |
| statScaling.dex.values[7] | 5 |
| statScaling.dex.values[8] | 5 |
| statScaling.dex.values[9] | 6 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | agi |
| levelProgression.rules[0].rule.kind | periodicSteps |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.steps[0] | 0 |
| levelProgression.rules[0].rule.steps[1] | 1 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | dex |
| levelProgression.rules[1].rule.kind | periodicSteps |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.steps[0] | 1 |
| levelProgression.rules[1].rule.steps[1] | 0 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 21: Dash

Rutsche schnell in eine Richtung. Mit höheren Skillstufen sinken Ausdauerkosten, Cooldown und Bewegungsdauer, während die Reichweite steigt. Auf Level 1 bewegst du dich 1 Meter in 1 Sekunde bei 6 Sekunden Cooldown und 50 Prozent Ausdauerkosten. Auf Level 10 sind es 2 Meter in 0,5 Sekunden bei 3 Sekunden Cooldown und 20 Prozent Ausdauerkosten. Dash kostet kein Mana.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Dashing |
| category | active |
| cd | 6 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| charClass[2] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Rutsche schnell in eine Richtung. Mit höheren Skillstufen sinken Ausdauerkosten, Cooldown und Bewegungsdauer, während die Reichweite steigt. Auf Level 1 bewegst du dich 1 Meter in 1 Sekunde bei 6 Sekunden Cooldown und 50 Prozent Ausdauerkosten. Auf Level 10 sind es 2 Meter in 0,5 Sekunden bei 3 Sekunden Cooldown und 20 Prozent Ausdauerkosten. Dash kostet kein Mana. |
| description_eng | Slide quickly in a direction. Higher skill levels reduce stamina cost, cooldown and movement duration while increasing distance. At level 1, move 1 meter in 1 second with a 6 second cooldown and 50 percent stamina cost. At level 10, move 2 meters in 0.5 seconds with a 3 second cooldown and 20 percent stamina cost. Dash costs no mana. |
| dmgType (Altformat) | Movement |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 21 |
| skillName_de | Dash |
| skillpoints | 1 |
| activation | manual |
| cooldownScaling.type | table |
| cooldownScaling.values[0] | 6 |
| cooldownScaling.values[1] | 5 |
| cooldownScaling.values[2] | 4 |
| cooldownScaling.values[3] | 4 |
| cooldownScaling.values[4] | 4 |
| cooldownScaling.values[5] | 3 |
| cooldownScaling.values[6] | 3 |
| cooldownScaling.values[7] | 3 |
| cooldownScaling.values[8] | 3 |
| cooldownScaling.values[9] | 3 |
| dur | 1 |
| durationScaling.type | table |
| durationScaling.values[0] | 1 |
| durationScaling.values[1] | 1 |
| durationScaling.values[2] | 1 |
| durationScaling.values[3] | 0,75 |
| durationScaling.values[4] | 0,75 |
| durationScaling.values[5] | 0,75 |
| durationScaling.values[6] | 0,75 |
| durationScaling.values[7] | 0,5 |
| durationScaling.values[8] | 0,5 |
| durationScaling.values[9] | 0,5 |
| movement.type | directionalSlide |
| movement.distanceMeters | 1 |
| movement.distanceScaling.type | table |
| movement.distanceScaling.values[0] | 1 |
| movement.distanceScaling.values[1] | 1 |
| movement.distanceScaling.values[2] | 1 |
| movement.distanceScaling.values[3] | 1 |
| movement.distanceScaling.values[4] | 1,5 |
| movement.distanceScaling.values[5] | 1,5 |
| movement.distanceScaling.values[6] | 2 |
| movement.distanceScaling.values[7] | 2 |
| movement.distanceScaling.values[8] | 2 |
| movement.distanceScaling.values[9] | 2 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 0 |
| resourceCosts[1].resource | stamina |
| resourceCosts[1].reference | maxStamina |
| resourceCosts[1].unit | fraction |
| resourceCosts[1].scaling.type | table |
| resourceCosts[1].scaling.base | 0,5 |
| resourceCosts[1].scaling.values[0] | 0,5 |
| resourceCosts[1].scaling.values[1] | 0,45 |
| resourceCosts[1].scaling.values[2] | 0,4 |
| resourceCosts[1].scaling.values[3] | 0,4 |
| resourceCosts[1].scaling.values[4] | 0,4 |
| resourceCosts[1].scaling.values[5] | 0,4 |
| resourceCosts[1].scaling.values[6] | 0,4 |
| resourceCosts[1].scaling.values[7] | 0,4 |
| resourceCosts[1].scaling.values[8] | 0,4 |
| resourceCosts[1].scaling.values[9] | 0,2 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | thresholds |
| levelProgression.rules[0].rule.rule.base | 6 |
| levelProgression.rules[0].rule.rule.changes[0].level | 2 |
| levelProgression.rules[0].rule.rule.changes[0].value | 5 |
| levelProgression.rules[0].rule.rule.changes[1].level | 3 |
| levelProgression.rules[0].rule.rule.changes[1].value | 4 |
| levelProgression.rules[0].rule.rule.changes[2].level | 6 |
| levelProgression.rules[0].rule.rule.changes[2].value | 3 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | periodicSteps |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.steps[0] | 0 |
| levelProgression.rules[1].rule.steps[1] | 0 |
| levelProgression.rules[1].rule.steps[2] | -0,25 |
| levelProgression.rules[1].rule.steps[3] | 0 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | movement |
| levelProgression.rules[2].path[1] | distanceScaling |
| levelProgression.rules[2].rule.kind | thresholds |
| levelProgression.rules[2].rule.base | 1 |
| levelProgression.rules[2].rule.changes[0].level | 5 |
| levelProgression.rules[2].rule.changes[0].value | 1,5 |
| levelProgression.rules[2].rule.changes[1].level | 7 |
| levelProgression.rules[2].rule.changes[1].value | 2 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.rules[3].path[0] | resourceCosts |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | scaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0 |
| levelProgression.rules[3].rule.rule.kind | constant |
| levelProgression.rules[3].rule.rule.value | 0 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | resourceCosts |
| levelProgression.rules[4].path[1] | 1 |
| levelProgression.rules[4].path[2] | scaling |
| levelProgression.rules[4].rule.kind | bounded |
| levelProgression.rules[4].rule.min | 0 |
| levelProgression.rules[4].rule.max | 1 |
| levelProgression.rules[4].rule.rule.kind | thresholds |
| levelProgression.rules[4].rule.rule.base | 0,5 |
| levelProgression.rules[4].rule.rule.changes[0].level | 2 |
| levelProgression.rules[4].rule.rule.changes[0].value | 0,45 |
| levelProgression.rules[4].rule.rule.changes[1].level | 3 |
| levelProgression.rules[4].rule.rule.changes[1].value | 0,4 |
| levelProgression.rules[4].rule.rule.changes[2].level | 10 |
| levelProgression.rules[4].rule.rule.changes[2].value | 0,2 |
| levelProgression.rules[4].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| effectKind | movement |
| target | self |
| type | buff |

### 24: Doppelschuss

Schießt zwei Pfeile schnell hintereinander auf ein Ziel. Jeder Treffer verursacht auf Stufe 1 243 physischen Skill-Grundschaden, plus 37 je weiterer Stufe, bis zu 576 je Treffer auf Stufe 10. Beide Treffer zusammen ergeben 1152 Skill-Grundschaden auf Stufe 10 vor Charakterangriff und Verteidigung. Mana-Kosten 122 auf Stufe 1, +19 je weiterer Stufe, maximal 293 auf Stufe 10. Cooldown sinkt gleichmäßig von 29 auf 25 Sekunden. Keine zusätzliche Castzeit: Der Skill fügt sich in den Schussablauf ein. Animation, Projektilflugzeit und genaue Trefferzeitpunkte werden im Spiel abgestimmt; keine anhaltende Wirkungsdauer. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Double Shot |
| category | active |
| cd | 29 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Schießt zwei Pfeile schnell hintereinander auf ein Ziel. Jeder Treffer verursacht auf Stufe 1 243 physischen Skill-Grundschaden, plus 37 je weiterer Stufe, bis zu 576 je Treffer auf Stufe 10. Beide Treffer zusammen ergeben 1152 Skill-Grundschaden auf Stufe 10 vor Charakterangriff und Verteidigung. Mana-Kosten 122 auf Stufe 1, +19 je weiterer Stufe, maximal 293 auf Stufe 10. Cooldown sinkt gleichmäßig von 29 auf 25 Sekunden. Keine zusätzliche Castzeit: Der Skill fügt sich in den Schussablauf ein. Animation, Projektilflugzeit und genaue Trefferzeitpunkte werden im Spiel abgestimmt; keine anhaltende Wirkungsdauer. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Shoots two arrows at one target in quick succession. Each hit deals 243 physical skill base damage at level 1, increasing by 37 per additional level to 576 per hit at level 10. Both hits total 1152 skill base damage at level 10 before character attack and defence. Mana cost 122 at level 1, maximum 293 at level 10. Cooldown decreases evenly from 29 to 25 seconds. No additional cast time; the skill fits into the shooting sequence. Animation, projectile travel and exact hit timing will be tuned in game; no lingering effect. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 24 |
| patk | 243 |
| skillName_de | Doppelschuss |
| skillpoints | 1 |
| attackExecution.targetMode | singleEnemy |
| attackExecution.hitCount | 2 |
| attackExecution.damageValueScope | perHit |
| attackExecution.timingStatus | pending |
| castTimeSeconds | 0 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 29 |
| cooldownScaling.perLevel | -0,444 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 122 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 122 |
| resourceCosts[0].scaling.perLevel | 19 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 243 |
| statScaling.patk.perLevel | 37 |
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
| levelProgression.rules[0].rule.rule.base | 29 |
| levelProgression.rules[0].rule.rule.perLevel | -0,444 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 122 |
| levelProgression.rules[1].rule.rule.perLevel | 19 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 243 |
| levelProgression.rules[2].rule.perLevel | 37 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 43: Erweiterung der Sinne

Permanenter passiver Bonus mit zehn Stufen. Je gelernter Stufe +1 Agilität, +1 Geschick, +0,5 Vitalität und +0,5 Willenskraft. Auf Stufe 10 insgesamt +10 Agilität, +10 Geschick, +5 Vitalität und +5 Willenskraft. Kein zusätzlicher Glücksbonus. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
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
| learningRequirements.minimumCharacterLevel | 3 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| classificationVersion | 1 |
| type | passive |
| wis | 0,5 |

### 47: Explosionspfeil

Die nächsten drei Pfeile verursachen jeweils 2 Sekunden nach dem Auftreffen zusätzlichen physischen Explosionsschaden. Der Explosionsgrundschaden startet bei 334 und steigt um 42 je weiterer Stufe auf 712 auf Stufe 10. Cooldown sinkt gleichmäßig von 36 auf 30 Sekunden. Zusätzliche Castzeit 0 Sekunden. Vorläufige Ausführungs-/Fluganimation 1,5 Sekunden; die Explosionsverzögerung nach dem Treffer ist davon getrennt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). Mana-Kosten je Stufe: 251/282/314/345/377/408/440/471/503/534. Exakt gerundete 25 Prozent des gesamten Skill-Grundschadens ohne Charakterangriff; garantierte Mehrfachtreffer und garantierter kritischer Treffer sind enthalten, Heilung erhält keinen zusätzlichen Kostenaufschlag.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Explosive Arrow |
| category | active |
| cd | 36 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Die nächsten drei Pfeile verursachen jeweils 2 Sekunden nach dem Auftreffen zusätzlichen physischen Explosionsschaden. Der Explosionsgrundschaden startet bei 334 und steigt um 42 je weiterer Stufe auf 712 auf Stufe 10. Cooldown sinkt gleichmäßig von 36 auf 30 Sekunden. Zusätzliche Castzeit 0 Sekunden. Vorläufige Ausführungs-/Fluganimation 1,5 Sekunden; die Explosionsverzögerung nach dem Treffer ist davon getrennt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). Mana-Kosten je Stufe: 251/282/314/345/377/408/440/471/503/534. Exakt gerundete 25 Prozent des gesamten Skill-Grundschadens ohne Charakterangriff; garantierte Mehrfachtreffer und garantierter kritischer Treffer sind enthalten, Heilung erhält keinen zusätzlichen Kostenaufschlag. |
| description_eng | The next three arrows each deal additional physical explosion damage 2 seconds after impact. Base explosion damage starts at 334 and increases by 42 per additional level to 712 at level 10. Activation costs 147  Cooldown decreases evenly from 36 to 30 seconds. Additional cast time is 0 seconds. Provisional execution/travel animation is 1.5 seconds; post-impact explosion delay is separate. Mana costs by level: 251/282/314/345/377/408/440/471/503/534. Exactly rounded 25 percent of total skill base damage excluding character attack; guaranteed multiple hits and guaranteed critical damage are included, with no additional healing surcharge. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 47 |
| patk | 334 |
| skillName_de | Explosionspfeil |
| skillpoints | 1 |
| castTimeSeconds | 0 |
| animationDurationSeconds | 1,5 |
| animationTimingStatus | provisional |
| attackExecution.empoweredBasicAttacks | 3 |
| attackExecution.explosionDelayAfterImpactSeconds | 2 |
| attackExecution.damageValueScope | perHit |
| attackExecution.timingStatus | pending |
| cooldownScaling.type | linear |
| cooldownScaling.base | 36 |
| cooldownScaling.perLevel | -0,667 |
| mana (Aktivierungskosten, kein Bonus) | 251 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 251 |
| resourceCosts[0].scaling.values[0] | 251 |
| resourceCosts[0].scaling.values[1] | 282 |
| resourceCosts[0].scaling.values[2] | 314 |
| resourceCosts[0].scaling.values[3] | 345 |
| resourceCosts[0].scaling.values[4] | 377 |
| resourceCosts[0].scaling.values[5] | 408 |
| resourceCosts[0].scaling.values[6] | 440 |
| resourceCosts[0].scaling.values[7] | 471 |
| resourceCosts[0].scaling.values[8] | 503 |
| resourceCosts[0].scaling.values[9] | 534 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 334 |
| statScaling.patk.perLevel | 42 |
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
| levelProgression.rules[0].rule.rule.base | 36 |
| levelProgression.rules[0].rule.rule.perLevel | -0,667 |
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
| levelProgression.rules[2].rule.base | 334 |
| levelProgression.rules[2].rule.perLevel | 42 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 51: Feuerpfeil

Schießt einen brennenden Pfeil auf dein Ziel. Verursacht einmalig physischen Grundschaden von 67, plus 19 je weiterer Stufe, bis zu 428 auf Stufe 20. Mana-Kosten 17 auf Stufe 1, +5 je weiterer Stufe, maximal 112 auf Stufe 20. Cooldown 23 Sekunden auf Stufe 1, sinkend gemäß ganzzahliger Stufentabelle bis auf 9 Sekunden auf Stufe 20. Zusätzliche Castzeit 0 Sekunden, vorläufige Flug-/Ausführungsanimation 0,8 Sekunden. Kein zusätzlicher DoT festgelegt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Fire Arrow |
| category | active |
| cd | 23 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| charClass[2] | Archer |
| charClass[3] | Hunter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Schießt einen brennenden Pfeil auf dein Ziel. Verursacht einmalig physischen Grundschaden von 67, plus 19 je weiterer Stufe, bis zu 428 auf Stufe 20. Mana-Kosten 17 auf Stufe 1, +5 je weiterer Stufe, maximal 112 auf Stufe 20. Cooldown 23 Sekunden auf Stufe 1, sinkend gemäß ganzzahliger Stufentabelle bis auf 9 Sekunden auf Stufe 20. Zusätzliche Castzeit 0 Sekunden, vorläufige Flug-/Ausführungsanimation 0,8 Sekunden. Kein zusätzlicher DoT festgelegt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Shoots a burning arrow at your target, dealing physical damage once. Base damage starts at 67 and increases by 19 per additional level to 428 at level 20. Mana cost 17 at level 1, maximum 112 at level 20. Cooldown 23 seconds at level 1, decreasing through an integer level table to 9 seconds at level 20. Additional cast time is 0 seconds; provisional travel/execution animation is 0.8 seconds. No additional damage over time is defined. |
| dmgType (Altformat) | physical |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 51 |
| patk | 67 |
| skillName_de | Feuerpfeil |
| skillpoints | 1 |
| castTimeSeconds | 0 |
| animationDurationSeconds | 0,8 |
| animationTimingStatus | provisional |
| cooldownScaling.type | table |
| cooldownScaling.values[0] | 23 |
| cooldownScaling.values[1] | 23 |
| cooldownScaling.values[2] | 22 |
| cooldownScaling.values[3] | 21 |
| cooldownScaling.values[4] | 20 |
| cooldownScaling.values[5] | 20 |
| cooldownScaling.values[6] | 19 |
| cooldownScaling.values[7] | 18 |
| cooldownScaling.values[8] | 17 |
| cooldownScaling.values[9] | 17 |
| cooldownScaling.values[10] | 16 |
| cooldownScaling.values[11] | 15 |
| cooldownScaling.values[12] | 14 |
| cooldownScaling.values[13] | 14 |
| cooldownScaling.values[14] | 13 |
| cooldownScaling.values[15] | 12 |
| cooldownScaling.values[16] | 11 |
| cooldownScaling.values[17] | 11 |
| cooldownScaling.values[18] | 10 |
| cooldownScaling.values[19] | 9 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 17 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 17 |
| resourceCosts[0].scaling.perLevel | 5 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 67 |
| statScaling.patk.perLevel | 19 |
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
| levelProgression.rules[0].rule.rule.base | 23 |
| levelProgression.rules[0].rule.rule.steps[0] | 0 |
| levelProgression.rules[0].rule.rule.steps[1] | -1 |
| levelProgression.rules[0].rule.rule.steps[2] | -1 |
| levelProgression.rules[0].rule.rule.steps[3] | -1 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 17 |
| levelProgression.rules[1].rule.rule.perLevel | 5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 67 |
| levelProgression.rules[2].rule.perLevel | 19 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 63: Kettenschuss

Ein Pfeil verbindet dich über ein Seil oder Energieband mit dem Ziel. Auf Stufe 1 ziehst du dich nach der genannten Verzögerung von 0,2 Sekunden ungefähr 1 Meter zum Gegner und hüpfst dabei leicht. Ab Stufe 2 können leichtere normale Gegner stattdessen ungefähr 1 Meter zu dir gezogen werden, nicht direkt an deine Position. Wie zwischen Eigenzug und Gegnerzug gewählt wird, ist noch offen. Ab Stufe 3 kannst du über den Gegner springen, aus der Luft schießen und auf der gegenüberliegenden Seite in etwa dem ursprünglichen Abstand landen, beispielsweise 3 bis 5 Meter entfernt. Auf Stufe 5 ermöglicht ein Bossziel einen hohen Flugpunkt und Bogen, mit einer an Größe und Form des Bosses angepassten Flughöhe innerhalb des 8 Sekunden langen Skillfensters. Während dieses skillbedingten Flugs sind Angriffe und Skillkombinationen möglich. Bodenangriffe unter dir erreichen dich räumlich nicht; Angriffe in die Luft können dich treffen. Keine pauschale Unverwundbarkeit. Du landest hinter dem Boss ohne Fallschaden aus diesem Skillflug. Im PvP und gegen gleich schwere Gegner ist der Bogen kleiner und kürzer. Die Sondererlaubnis zum Schießen im Flug gilt für diesen Skill. Physischer Grundschaden 52, plus 23 je weiterer Stufe, bis zu 144. Mana-Kosten 13 auf Stufe 1, +6 je weiterer Stufe, maximal 37 auf Stufe 5. Vorläufige Dauern je Stufe: 1 / 2,5 / 4 / 6 / 8 Sekunden. Ob die genannte Zugverzögerung zusätzlich zur Castzeit gilt, Stufe 4, genaue Flugbahn, Zugauswahl und mögliche 10 Sekunden Enddauer sind noch offen. Auch Jäger und Archer können Kettenschuss erlernen. Der Skill ist ohne Gegner an geeigneten Weltankern nutzbar, um dich auf Dächer, an Felsen und eingeschränkt an Bäume zu ziehen. Zulässige Anker, Reichweite und genaue Weltbewegung werden noch festgelegt. Es gibt keine feste Flughöhe von 30 Metern. Die Flugbahn muss das jeweilige Bossmodell überqueren können. Die normale Angriffsreichweite gilt auch in der Luft; zu große Entfernung verhindert weitere Treffer. Erhöhte Weltpositionen sollen über andere passende Bewegungsfähigkeiten wie den Doppelsprung des Abenteurers erreichbar und damit konterbar sein. Eine entsprechende spätere Fähigkeit des Schurken ist nur eine Überlegung. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Chain Shot |
| category | active |
| cd | 60 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| charClass[2] | Hunter |
| charClass[3] | Archer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Ein Pfeil verbindet dich über ein Seil oder Energieband mit dem Ziel. Auf Stufe 1 ziehst du dich nach der genannten Verzögerung von 0,2 Sekunden ungefähr 1 Meter zum Gegner und hüpfst dabei leicht. Ab Stufe 2 können leichtere normale Gegner stattdessen ungefähr 1 Meter zu dir gezogen werden, nicht direkt an deine Position. Wie zwischen Eigenzug und Gegnerzug gewählt wird, ist noch offen. Ab Stufe 3 kannst du über den Gegner springen, aus der Luft schießen und auf der gegenüberliegenden Seite in etwa dem ursprünglichen Abstand landen, beispielsweise 3 bis 5 Meter entfernt. Auf Stufe 5 ermöglicht ein Bossziel einen hohen Flugpunkt und Bogen, mit einer an Größe und Form des Bosses angepassten Flughöhe innerhalb des 8 Sekunden langen Skillfensters. Während dieses skillbedingten Flugs sind Angriffe und Skillkombinationen möglich. Bodenangriffe unter dir erreichen dich räumlich nicht; Angriffe in die Luft können dich treffen. Keine pauschale Unverwundbarkeit. Du landest hinter dem Boss ohne Fallschaden aus diesem Skillflug. Im PvP und gegen gleich schwere Gegner ist der Bogen kleiner und kürzer. Die Sondererlaubnis zum Schießen im Flug gilt für diesen Skill. Physischer Grundschaden 52, plus 23 je weiterer Stufe, bis zu 144. Mana-Kosten 13 auf Stufe 1, +6 je weiterer Stufe, maximal 37 auf Stufe 5. Vorläufige Dauern je Stufe: 1 / 2,5 / 4 / 6 / 8 Sekunden. Ob die genannte Zugverzögerung zusätzlich zur Castzeit gilt, Stufe 4, genaue Flugbahn, Zugauswahl und mögliche 10 Sekunden Enddauer sind noch offen. Auch Jäger und Archer können Kettenschuss erlernen. Der Skill ist ohne Gegner an geeigneten Weltankern nutzbar, um dich auf Dächer, an Felsen und eingeschränkt an Bäume zu ziehen. Zulässige Anker, Reichweite und genaue Weltbewegung werden noch festgelegt. Es gibt keine feste Flughöhe von 30 Metern. Die Flugbahn muss das jeweilige Bossmodell überqueren können. Die normale Angriffsreichweite gilt auch in der Luft; zu große Entfernung verhindert weitere Treffer. Erhöhte Weltpositionen sollen über andere passende Bewegungsfähigkeiten wie den Doppelsprung des Abenteurers erreichbar und damit konterbar sein. Eine entsprechende spätere Fähigkeit des Schurken ist nur eine Überlegung. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | A tethered arrow connects you to the target. Level 1 pulls you approximately 1 metre toward the enemy after the stated 0.2 second delay, with a small hop. From level 2, lighter normal enemies can instead be pulled approximately 1 metre toward you rather than directly to your position; selection between self pull and enemy pull is pending. From level 3, vault over the enemy, shoot while airborne and land on the opposite side at approximately the original distance, for example 3 to 5 metres. Level 5 allows a high boss-targeted arc, with height adapted to boss size and shape within the 8 second skill window. Attacks and skill combinations are allowed during this skill flight. Ground attacks underneath spatially miss you, but aerial attacks can hit; no blanket invulnerability. Land behind the boss without fall damage from this skill flight. PvP and equal-weight targets use a shorter, lower arc. Airborne shooting permission is limited to this skill. Physical base damage is 52 plus 23 per additional level to 144. Provisional Mana cost 13 at level 1, maximum 37 at level 5.2 seconds. Provisional duration by level: 1 / 2.5 / 4 / 6 / 8 seconds. Whether pull delay is additional to cast time, level 4 behavior, precise trajectory, pull selection and a possible 10 second maximum duration remain pending. Hunter and Archer can also learn Chain Shot. It can be used without an enemy on suitable world anchors to pull yourself onto roofs, toward rocks and, within limits, trees. Anchor eligibility, range and exact world traversal are pending. There is no fixed 30 metre height. The trajectory must clear the individual boss model. Normal attack range still applies in the air; excessive distance prevents further hits. Elevated world positions should be accessible through suitable counter-mobility such as the Adventurer double jump. Similar future Rogue mobility is only a consideration. |
| dmgType (Altformat) | physical |
| dur | 1 |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 63 |
| patk | 52 |
| skillName_de | Kettenschuss |
| skillpoints | 1 |
| castTimeSeconds | 0,2 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 60 |
| cooldownScaling.perLevel | -1 |
| durationScaling.type | table |
| durationScaling.values[0] | 1 |
| durationScaling.values[1] | 2,5 |
| durationScaling.values[2] | 4 |
| durationScaling.values[3] | 6 |
| durationScaling.values[4] | 8 |
| mana (Aktivierungskosten, kein Bonus) | 13 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 13 |
| resourceCosts[0].scaling.perLevel | 6 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 52 |
| statScaling.patk.perLevel | 23 |
| tetherSettings.selfPullUnlockLevel | 1 |
| tetherSettings.lightEnemyPullUnlockLevel | 2 |
| tetherSettings.vaultUnlockLevel | 3 |
| tetherSettings.highBossArcUnlockLevel | 5 |
| tetherSettings.initialPullDistanceMeters | 1 |
| tetherSettings.enemyPullDistanceMeters | 1 |
| tetherSettings.statedPullDelaySeconds | 0,2 |
| tetherSettings.delayRelationToCastTimeStatus | pending |
| tetherSettings.enemyPullEligibility | lighterNormalEnemies |
| tetherSettings.vaultLandingSide | oppositeStartingSide |
| tetherSettings.vaultLandingDistanceMatchesStartingDistance | true |
| tetherSettings.highBossArcHeightStatus | provisional |
| tetherSettings.allowsAttacksDuringSkillFlight | true |
| tetherSettings.grantsBlanketInvulnerability | false |
| tetherSettings.groundAttackAvoidance | spatial |
| tetherSettings.aerialAttacksCanHit | true |
| tetherSettings.preventsFallDamageFromSkillFlight | true |
| tetherSettings.pvpArc | shortLowArc |
| tetherSettings.equalWeightArc | shortLowArc |
| tetherSettings.enemyPullSelectionStatus | pending |
| tetherSettings.levelFourBehaviorStatus | pending |
| tetherSettings.implementationStatus | definitionOnly |
| tetherSettings.usableWithoutEnemy | true |
| tetherSettings.worldAnchorKinds[0] | roof |
| tetherSettings.worldAnchorKinds[1] | rock |
| tetherSettings.worldAnchorKinds[2] | tree |
| tetherSettings.worldAnchorEligibilityStatus | pending |
| tetherSettings.worldAnchorRangeStatus | pending |
| tetherSettings.highBossArcHeightMode | targetSizeDependent |
| tetherSettings.respectsAttackRangeDuringFlight | true |
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
| levelProgression.rules[0].rule.rule.base | 60 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | legacyTable |
| levelProgression.rules[1].rule.values[0] | 1 |
| levelProgression.rules[1].rule.values[1] | 2,5 |
| levelProgression.rules[1].rule.values[2] | 4 |
| levelProgression.rules[1].rule.values[3] | 6 |
| levelProgression.rules[1].rule.values[4] | 8 |
| levelProgression.rules[1].rule.beyond | requiresDefinition |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 13 |
| levelProgression.rules[2].rule.rule.perLevel | 6 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | patk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 52 |
| levelProgression.rules[3].rule.perLevel | 23 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 66: Kopfschuss

Ein gezielter Schuss auf einen Gegner, der garantiert kritisch trifft. Physischer Grundschaden 474, plus 81 je weiterer Stufe, bis zu 1203 auf Stufe 10 vor Krit-Multiplikator, Charakterangriff und Verteidigung.  Castzeit 0,3 Sekunden, vorläufige Animation 1 Sekunde. Cooldown weiterhin 55 Sekunden. Krit-Immunitäten werden später geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). Mana-Kosten je Stufe: 213/250/286/323/359/396/432/468/505/541. Exakt gerundete 25 Prozent des gesamten Skill-Grundschadens ohne Charakterangriff; garantierte Mehrfachtreffer und garantierter kritischer Treffer sind enthalten, Heilung erhält keinen zusätzlichen Kostenaufschlag.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Headshot |
| category | active |
| cd | 55 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Ein gezielter Schuss auf einen Gegner, der garantiert kritisch trifft. Physischer Grundschaden 474, plus 81 je weiterer Stufe, bis zu 1203 auf Stufe 10 vor Krit-Multiplikator, Charakterangriff und Verteidigung.  Castzeit 0,3 Sekunden, vorläufige Animation 1 Sekunde. Cooldown weiterhin 55 Sekunden. Krit-Immunitäten werden später geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). Mana-Kosten je Stufe: 213/250/286/323/359/396/432/468/505/541. Exakt gerundete 25 Prozent des gesamten Skill-Grundschadens ohne Charakterangriff; garantierte Mehrfachtreffer und garantierter kritischer Treffer sind enthalten, Heilung erhält keinen zusätzlichen Kostenaufschlag. |
| description_eng | A targeted shot at one enemy that is guaranteed to be critical. Physical base damage starts at 474 and increases by 81 per additional level to 1203 at level 10 before critical multiplier, character attack and defence.  Cast time is 0.3 seconds; provisional animation is 1 second. Cooldown remains 55 seconds. Critical immunities will be reviewed later. Mana costs by level: 213/250/286/323/359/396/432/468/505/541. Exactly rounded 25 percent of total skill base damage excluding character attack; guaranteed multiple hits and guaranteed critical damage are included, with no additional healing surcharge. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 66 |
| patk | 474 |
| skillName_de | Kopfschuss |
| skillpoints | 1 |
| castTimeSeconds | 0,3 |
| animationDurationSeconds | 1 |
| animationTimingStatus | provisional |
| attackExecution.targetMode | singleEnemy |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.guaranteedCriticalHit | true |
| attackExecution.criticalImmunityStatus | pending |
| attackExecution.timingStatus | pending |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 213 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 213 |
| resourceCosts[0].scaling.values[0] | 213 |
| resourceCosts[0].scaling.values[1] | 250 |
| resourceCosts[0].scaling.values[2] | 286 |
| resourceCosts[0].scaling.values[3] | 323 |
| resourceCosts[0].scaling.values[4] | 359 |
| resourceCosts[0].scaling.values[5] | 396 |
| resourceCosts[0].scaling.values[6] | 432 |
| resourceCosts[0].scaling.values[7] | 468 |
| resourceCosts[0].scaling.values[8] | 505 |
| resourceCosts[0].scaling.values[9] | 541 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 474 |
| statScaling.patk.perLevel | 81 |
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
| levelProgression.rules[1].rule.base | 474 |
| levelProgression.rules[1].rule.perLevel | 81 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 80: Beweglichkeit

Eigenbuff für 20 bis 24,5 Sekunden. Bewegungsgeschwindigkeit steigt von 1 Prozent auf Stufe 1 um 1 Prozentpunkt je weiterer Stufe auf 10 Prozent auf Stufe 10. Agilität steigt gleichmäßig von 0 auf 5. Castzeit fest 0,1 Sekunden. Cooldown sinkt von 120 um 2 Sekunden je weiterer Stufe auf 102 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
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

### 119: Verbessertes Nachladen

Verbessert dauerhaft dein Nachladen. Gewährt 2 physischen Angriff je gelerntem Skilllevel, bis zu 20 auf Stufe 10. Auf Stufe 10 zusätzlich 5 Punkte Angriffsgeschwindigkeit. Permanent passiv ohne Aktivierungskosten oder Cooldown. Ersetzt die frühere vorläufige Umrechnung von Ambush in Angriff.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Improved Reload |
| category | passive |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Verbessert dauerhaft dein Nachladen. Gewährt 2 physischen Angriff je gelerntem Skilllevel, bis zu 20 auf Stufe 10. Auf Stufe 10 zusätzlich 5 Punkte Angriffsgeschwindigkeit. Permanent passiv ohne Aktivierungskosten oder Cooldown. Ersetzt die frühere vorläufige Umrechnung von Ambush in Angriff. |
| description_eng | Permanently improves reloading. Grants 2 physical attack per learned skill level, reaching 20 at level 10. At level 10 also grants 5 attack speed rating points. Permanent passive skill without activation costs or cooldown. Replaces the earlier tentative Ambush-to-attack conversion. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 119 |
| patk | 2 |
| skillName_de | Verbessertes Nachladen |
| skillpoints | 1 |
| resourceCosts | [] |
| statBonusUnits.patk | flat |
| statBonusUnits.atkSpeed | fraction |
| statScaling.patk.type | linear |
| statScaling.patk.base | 2 |
| statScaling.patk.perLevel | 2 |
| statScaling.atkSpeed.type | table |
| statScaling.atkSpeed.values[0] | 0 |
| statScaling.atkSpeed.values[1] | 0 |
| statScaling.atkSpeed.values[2] | 0 |
| statScaling.atkSpeed.values[3] | 0 |
| statScaling.atkSpeed.values[4] | 0 |
| statScaling.atkSpeed.values[5] | 0 |
| statScaling.atkSpeed.values[6] | 0 |
| statScaling.atkSpeed.values[7] | 0 |
| statScaling.atkSpeed.values[8] | 0 |
| statScaling.atkSpeed.values[9] | 0,05 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | patk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.perLevel | 2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | atkSpeed |
| levelProgression.rules[1].rule.kind | thresholds |
| levelProgression.rules[1].rule.base | 0 |
| levelProgression.rules[1].rule.changes[0].level | 10 |
| levelProgression.rules[1].rule.changes[0].value | 0,05 |
| levelProgression.rules[1].source | verifiedExistingLevels |
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

### 142: Ausweichtraining

Permanentes passives Ausweichtraining. Gewährt 1 Agilität und 0,5 Geschicklichkeit je gelerntem Skilllevel, bis zu 10 Agilität und 5 Geschicklichkeit auf Stufe 10. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Dodge Training |
| agi | 1 |
| category | passive |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| charClass[2] | Summoner |
| charClass[3] | Soulseeker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanentes passives Ausweichtraining. Gewährt 1 Agilität und 0,5 Geschicklichkeit je gelerntem Skilllevel, bis zu 10 Agilität und 5 Geschicklichkeit auf Stufe 10. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent passive dodge training. Grants 1 Agility and 0.5 Dexterity per learned skill level, reaching 10 Agility and 5 Dexterity at level 10. No activation costs, cast time or cooldown. |
| dex | 0,5 |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 142 |
| skillName_de | Ausweichtraining |
| skillpoints | 1 |
| resourceCosts | [] |
| statScaling.agi.type | linear |
| statScaling.agi.base | 1 |
| statScaling.agi.perLevel | 1 |
| statScaling.dex.type | linear |
| statScaling.dex.base | 0,5 |
| statScaling.dex.perLevel | 0,5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | agi |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | dex |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,5 |
| levelProgression.rules[1].rule.perLevel | 0,5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| learningRequirements.minimumCharacterLevel | 10 |
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

### 147: Erweckung der Leidenschaft

Erweckt die Leidenschaft und erhöht deine Geschicklichkeit und Agilität sowie die deiner Verbündeten jeweils um 2 je gelerntem Skilllevel, bis zu jeweils 10 auf Level 5. Der Buff hält 600 Sekunden und hat 60 Sekunden Cooldown. Die Mana-Kosten steigen von 75 um 25 je weiterer Stufe auf 175. Castzeit 0,2 Sekunden.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Passion Awakening |
| category | active |
| cd | 60 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| charClass[2] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erweckt die Leidenschaft und erhöht deine Geschicklichkeit und Agilität sowie die deiner Verbündeten jeweils um 2 je gelerntem Skilllevel, bis zu jeweils 10 auf Level 5. Der Buff hält 600 Sekunden und hat 60 Sekunden Cooldown. Die Mana-Kosten steigen von 75 um 25 je weiterer Stufe auf 175. Castzeit 0,2 Sekunden. |
| description_eng | Awakens passion, increasing your Dexterity and Agility and those of your allies by 2 each per learned skill level, up to 10 each at level 5. The buff lasts 600 seconds and has a 60 second cooldown. Mana cost increases from 75 by 25 per additional level to 175. Cast time is 0.2 seconds. |
| dex | 2 |
| dmgType (Altformat) | buff |
| dur | 600 |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 147 |
| skillName_de | Erweckung der Leidenschaft |
| skillpoints | 1 |
| agi | 2 |
| activation | manual |
| statBonusTargets.dex | selfAndAllies |
| statBonusTargets.agi | selfAndAllies |
| statBonusUnits.dex | flat |
| statBonusUnits.agi | flat |
| statScaling.dex.type | linear |
| statScaling.dex.base | 2 |
| statScaling.dex.perLevel | 2 |
| statScaling.agi.type | linear |
| statScaling.agi.base | 2 |
| statScaling.agi.perLevel | 2 |
| castTimeSeconds | 0,2 |
| castTimeStatus | defined |
| mana (Aktivierungskosten, kein Bonus) | 75 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 75 |
| resourceCosts[0].scaling.perLevel | 25 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | dex |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.perLevel | 2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | agi |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 2 |
| levelProgression.rules[1].rule.perLevel | 2 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 75 |
| levelProgression.rules[2].rule.rule.perLevel | 25 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| target | group |
| type | buff |

### 148: Scharfer Instinkte

Eigenbuff für 300 Sekunden. Gewährt 2 bis 11 Ambush und 0 bis 1 festen Angriffsgeschwindigkeitspunkt über zehn Stufen. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Sharp Instincts |
| amb | 2 |
| atkSpeed | 0 |
| category | active |
| cd | 60 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| charClass[2] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff für 300 Sekunden. Gewährt 2 bis 11 Ambush und 0 bis 1 festen Angriffsgeschwindigkeitspunkt über zehn Stufen. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff lasting 300 seconds. Grants 2 to 11 Ambush and 0 to 1 flat attack-speed rating point across ten levels. Cooldown 60 seconds. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 167 at level 10, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 300 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 148 |
| skillName_de | Scharfer Instinkte |
| skillpoints | 1 |
| animationDurationRangeSeconds.min | 0,2 |
| animationDurationRangeSeconds.max | 0,3 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statBonusUnits.amb | flat |
| statBonusUnits.atkSpeed | fraction |
| statScaling.amb.type | linear |
| statScaling.amb.base | 2 |
| statScaling.amb.perLevel | 1 |
| statScaling.atkSpeed.type | linear |
| statScaling.atkSpeed.base | 0 |
| statScaling.atkSpeed.perLevel | 0,001 |
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
| levelProgression.rules[1].path[1] | amb |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 2 |
| levelProgression.rules[1].rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | atkSpeed |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 0 |
| levelProgression.rules[2].rule.perLevel | 0,001 |
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

### 183: Gute Reflexe

Eigenbuff für 600 Sekunden. Gewährt 1 Agilität je gelerntem Skilllevel, bis zu 10 auf Stufe 10. Während der Buff aktiv ist, kostet Dash 2 Ausdauerpunkte weniger, entsprechend 0,02 auf der Ausdauerskala von 0 bis 1. Der Rabatt gilt nur für Dash und steigt nicht mit der Skillstufe. Dash auf Stufe 10 kostet damit 0,18 statt 0,20 Ausdauer. Cooldown 60 Sekunden. Castzeit fest 0,1 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Good Reflexes |
| category | active |
| cd | 60 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff für 600 Sekunden. Gewährt 1 Agilität je gelerntem Skilllevel, bis zu 10 auf Stufe 10. Während der Buff aktiv ist, kostet Dash 2 Ausdauerpunkte weniger, entsprechend 0,02 auf der Ausdauerskala von 0 bis 1. Der Rabatt gilt nur für Dash und steigt nicht mit der Skillstufe. Dash auf Stufe 10 kostet damit 0,18 statt 0,20 Ausdauer. Cooldown 60 Sekunden. Castzeit fest 0,1 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff lasting 600 seconds. Grants 1 Agility per learned skill level, reaching 10 at level 10. While active, Dash costs 2 fewer stamina points, equivalent to 0.02 on the 0 to 1 stamina scale. This reduction applies only to Dash and does not scale with skill level. Level 10 Dash therefore costs 0.18 instead of 0.20 stamina. Cooldown is 60 seconds. Fixed cast time 0.1 seconds. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 167 at level 10, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 600 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 183 |
| skillName_de | Gute Reflexe |
| skillpoints | 1 |
| agi | 1 |
| effects[0].key | good-reflexes-dash-efficiency |
| effects[0].type | resourceCostReduction |
| effects[0].target | self |
| effects[0].resource | stamina |
| effects[0].appliesTo | specificSkill |
| effects[0].targetSkillNumber | 21 |
| effects[0].value | 0,02 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 600 |
| statScaling.agi.type | linear |
| statScaling.agi.base | 1 |
| statScaling.agi.perLevel | 1 |
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
| levelProgression.rules[0].path[1] | agi |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
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

### 184: Hinterhältiger Pfeil

Ein Trickschuss markiert bei einem Treffer den Gegner. Auf Skilllevel 1 beträgt die Trefferchance 50 %. Während der nächsten 20 Sekunden wird der Schaden gesammelt, den du selbst diesem Gegner zufügst. Anschließend werden 80 % dieses Schadens erneut auf ihn angewendet. Auf Skilllevel 10 beträgt die Trefferchance 60 %, das Sammelfenster 30 Sekunden und der erneut angewendete Anteil 90 %. Der Cooldown startet bei 120 Sekunden und sinkt pro weiterem Skilllevel um 2 Sekunden auf 102 Sekunden. Der erneut angewendete Schaden wird nicht nochmals gesammelt. Der anfängliche Schuss verursacht 37 physischen Grundschaden, plus 3 je weiterer Stufe, bis zu 64 auf Stufe 10. Mana-Kosten 9 auf Stufe 1, +1 je weiterer Stufe, maximal 18 auf Stufe 10. Zusätzliche Castzeit 0 Sekunden, vorläufige Fluganimation 0,5 Sekunden. Die Fluganimation ist von der anschließenden Markierungsdauer getrennt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Sneaky Trap |
| category | active |
| cd | 120 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Ein Trickschuss markiert bei einem Treffer den Gegner. Auf Skilllevel 1 beträgt die Trefferchance 50 %. Während der nächsten 20 Sekunden wird der Schaden gesammelt, den du selbst diesem Gegner zufügst. Anschließend werden 80 % dieses Schadens erneut auf ihn angewendet. Auf Skilllevel 10 beträgt die Trefferchance 60 %, das Sammelfenster 30 Sekunden und der erneut angewendete Anteil 90 %. Der Cooldown startet bei 120 Sekunden und sinkt pro weiterem Skilllevel um 2 Sekunden auf 102 Sekunden. Der erneut angewendete Schaden wird nicht nochmals gesammelt. Der anfängliche Schuss verursacht 37 physischen Grundschaden, plus 3 je weiterer Stufe, bis zu 64 auf Stufe 10. Mana-Kosten 9 auf Stufe 1, +1 je weiterer Stufe, maximal 18 auf Stufe 10. Zusätzliche Castzeit 0 Sekunden, vorläufige Fluganimation 0,5 Sekunden. Die Fluganimation ist von der anschließenden Markierungsdauer getrennt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | A trick shot marks the enemy on a successful hit. At skill level 1, the hit chance is 50%. Damage you personally deal to that enemy is collected for the next 20 seconds, then 80% of it is applied again. At skill level 10, the hit chance is 60%, the collection window is 30 seconds and the repeated share is 90%. The cooldown starts at 120 seconds and decreases by 2 seconds per additional skill level to 102 seconds. Repeated damage is not collected again. The initial shot deals 37 physical base damage, increasing by 3 per additional level to 64 at level 10. Mana cost 9 at level 1, maximum 18 at level 10. Additional cast time is 0 seconds; provisional travel animation is 0.5 seconds. Travel animation and the subsequent mark duration are separate. |
| dmgType (Altformat) | physical |
| dur | 20 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 184 |
| skillName_de | Hinterhältiger Pfeil |
| skillpoints | 1 |
| activation | manual |
| cooldownScaling.type | linear |
| cooldownScaling.base | 120 |
| cooldownScaling.perLevel | -2 |
| effects[0].damageBasis | actualHealthDamage |
| effects[0].applyMitigationAgain | false |
| effects[0].cancelOnCasterDeath | true |
| effects[0].cancelOnTargetDeath | true |
| effects[0].disablesEffects | [] |
| effects[0].hitChance | 0,5 |
| effects[0].hitChanceAtMaxLevel | 0,6 |
| effects[0].valueAtMaxLevel | 0,9 |
| effects[0].durationAtMaxLevelSeconds | 30 |
| effects[0].progressionStatus | pending |
| effects[0].damageSource | caster |
| effects[0].excludeReplayDamage | true |
| effects[0].valueScaling.values | [] |
| effects[0].durationScaling.values | [] |
| effects[0].type | damageReplay |
| effects[0].target | enemy |
| effects[0].allowedRaces | [] |
| effects[0].value | 0,8 |
| effects[0].unit | fraction |
| effects[0].damageTypes | [] |
| effects[0].durationSeconds | 20 |
| effects[0].key | collected-damage-replay |
| effectsVersion | 1 |
| castTimeSeconds | 0 |
| animationDurationSeconds | 0,5 |
| animationTimingStatus | provisional |
| mana (Aktivierungskosten, kein Bonus) | 9 |
| patk | 37 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 9 |
| resourceCosts[0].scaling.perLevel | 1 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 37 |
| statScaling.patk.perLevel | 3 |
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
| levelProgression.rules[0].rule.rule.base | 120 |
| levelProgression.rules[0].rule.rule.perLevel | -2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 9 |
| levelProgression.rules[1].rule.rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 37 |
| levelProgression.rules[2].rule.perLevel | 3 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 185: Seelenschuss

Markiert einen Gegner für 5 Sekunden und eröffnet das Seelensammler-Fenster. Verursacht selbst keinen Schaden. Castzeit 0 Sekunden, vorläufige Animation 0,1 Sekunden. Bezahlt die Sammlung im Voraus: Kosten von 20 Seelensammler-Anwendungen auf der jeweiligen Stufe, Mana je Stufe 40/140/240/340/440/560/660/760/860/960. Während der Markierung ist Seelensammler kostenlos; maximal 25 vollständige Anwendungen sind möglich. Nicht genutzte Anwendungen werden nicht erstattet. Spektralketten bleibt ein separat bezahlter Abschluss und kann gegen dasselbe Ziel bis 1,5 Sekunden nach Markierungsende eingesetzt werden. Cooldown gleichmäßig von 90 Sekunden auf Stufe 1 bis 75 Sekunden auf Stufe 10.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Soulshot |
| category | active |
| cd | 90 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Markiert einen Gegner für 5 Sekunden und eröffnet das Seelensammler-Fenster. Verursacht selbst keinen Schaden. Castzeit 0 Sekunden, vorläufige Animation 0,1 Sekunden. Bezahlt die Sammlung im Voraus: Kosten von 20 Seelensammler-Anwendungen auf der jeweiligen Stufe, Mana je Stufe 40/140/240/340/440/560/660/760/860/960. Während der Markierung ist Seelensammler kostenlos; maximal 25 vollständige Anwendungen sind möglich. Nicht genutzte Anwendungen werden nicht erstattet. Spektralketten bleibt ein separat bezahlter Abschluss und kann gegen dasselbe Ziel bis 1,5 Sekunden nach Markierungsende eingesetzt werden. Cooldown gleichmäßig von 90 Sekunden auf Stufe 1 bis 75 Sekunden auf Stufe 10. |
| description_eng | Marks an enemy for 5 seconds and opens the Soul Collector window. Deals no damage itself. Cast time 0 seconds; provisional animation 0.1 seconds. Prepays collection at the price of 20 Soul Collector applications at the corresponding level. Mana costs by level: 40/140/240/340/440/560/660/760/860/960. Soul Collector is free during the mark, allowing at most 25 completed applications. Unused applications are not refunded. Spectral Chains remains a separately paid finisher usable against the same target for up to 1.5 seconds after mark expiry. Cooldown decreases evenly from 90 seconds at level 1 to 75 seconds at level 10. |
| dmgType (Altformat) | spell |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 185 |
| skillName_de | Seelenschuss |
| skillpoints | 1 |
| castTimeSeconds | 0 |
| animationDurationSeconds | 0,1 |
| animationTimingStatus | provisional |
| dur | 5 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 40 |
| resourceCosts[0].scaling.values[0] | 40 |
| resourceCosts[0].scaling.values[1] | 140 |
| resourceCosts[0].scaling.values[2] | 240 |
| resourceCosts[0].scaling.values[3] | 340 |
| resourceCosts[0].scaling.values[4] | 440 |
| resourceCosts[0].scaling.values[5] | 560 |
| resourceCosts[0].scaling.values[6] | 660 |
| resourceCosts[0].scaling.values[7] | 760 |
| resourceCosts[0].scaling.values[8] | 860 |
| resourceCosts[0].scaling.values[9] | 960 |
| statScaling.patk.type | table |
| statScaling.patk.values[0] | 0 |
| statScaling.patk.values[1] | 0 |
| statScaling.patk.values[2] | 0 |
| statScaling.patk.values[3] | 0 |
| statScaling.patk.values[4] | 0 |
| statScaling.patk.values[5] | 0 |
| statScaling.patk.values[6] | 0 |
| statScaling.patk.values[7] | 0 |
| statScaling.patk.values[8] | 0 |
| statScaling.patk.values[9] | 0 |
| targetMarkSettings.durationSeconds | 5 |
| targetMarkSettings.visuallyProminent | true |
| cooldownScaling.type | linear |
| cooldownScaling.base | 90 |
| cooldownScaling.perLevel | -1,667 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | sum |
| levelProgression.rules[0].rule.terms[0].kind | rounded |
| levelProgression.rules[0].rule.terms[0].mode | round |
| levelProgression.rules[0].rule.terms[0].rule.kind | linear |
| levelProgression.rules[0].rule.terms[0].rule.base | 2 |
| levelProgression.rules[0].rule.terms[0].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[1].kind | rounded |
| levelProgression.rules[0].rule.terms[1].mode | round |
| levelProgression.rules[0].rule.terms[1].rule.kind | linear |
| levelProgression.rules[0].rule.terms[1].rule.base | 2 |
| levelProgression.rules[0].rule.terms[1].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[2].kind | rounded |
| levelProgression.rules[0].rule.terms[2].mode | round |
| levelProgression.rules[0].rule.terms[2].rule.kind | linear |
| levelProgression.rules[0].rule.terms[2].rule.base | 2 |
| levelProgression.rules[0].rule.terms[2].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[3].kind | rounded |
| levelProgression.rules[0].rule.terms[3].mode | round |
| levelProgression.rules[0].rule.terms[3].rule.kind | linear |
| levelProgression.rules[0].rule.terms[3].rule.base | 2 |
| levelProgression.rules[0].rule.terms[3].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[4].kind | rounded |
| levelProgression.rules[0].rule.terms[4].mode | round |
| levelProgression.rules[0].rule.terms[4].rule.kind | linear |
| levelProgression.rules[0].rule.terms[4].rule.base | 2 |
| levelProgression.rules[0].rule.terms[4].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[5].kind | rounded |
| levelProgression.rules[0].rule.terms[5].mode | round |
| levelProgression.rules[0].rule.terms[5].rule.kind | linear |
| levelProgression.rules[0].rule.terms[5].rule.base | 2 |
| levelProgression.rules[0].rule.terms[5].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[6].kind | rounded |
| levelProgression.rules[0].rule.terms[6].mode | round |
| levelProgression.rules[0].rule.terms[6].rule.kind | linear |
| levelProgression.rules[0].rule.terms[6].rule.base | 2 |
| levelProgression.rules[0].rule.terms[6].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[7].kind | rounded |
| levelProgression.rules[0].rule.terms[7].mode | round |
| levelProgression.rules[0].rule.terms[7].rule.kind | linear |
| levelProgression.rules[0].rule.terms[7].rule.base | 2 |
| levelProgression.rules[0].rule.terms[7].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[8].kind | rounded |
| levelProgression.rules[0].rule.terms[8].mode | round |
| levelProgression.rules[0].rule.terms[8].rule.kind | linear |
| levelProgression.rules[0].rule.terms[8].rule.base | 2 |
| levelProgression.rules[0].rule.terms[8].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[9].kind | rounded |
| levelProgression.rules[0].rule.terms[9].mode | round |
| levelProgression.rules[0].rule.terms[9].rule.kind | linear |
| levelProgression.rules[0].rule.terms[9].rule.base | 2 |
| levelProgression.rules[0].rule.terms[9].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[10].kind | rounded |
| levelProgression.rules[0].rule.terms[10].mode | round |
| levelProgression.rules[0].rule.terms[10].rule.kind | linear |
| levelProgression.rules[0].rule.terms[10].rule.base | 2 |
| levelProgression.rules[0].rule.terms[10].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[11].kind | rounded |
| levelProgression.rules[0].rule.terms[11].mode | round |
| levelProgression.rules[0].rule.terms[11].rule.kind | linear |
| levelProgression.rules[0].rule.terms[11].rule.base | 2 |
| levelProgression.rules[0].rule.terms[11].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[12].kind | rounded |
| levelProgression.rules[0].rule.terms[12].mode | round |
| levelProgression.rules[0].rule.terms[12].rule.kind | linear |
| levelProgression.rules[0].rule.terms[12].rule.base | 2 |
| levelProgression.rules[0].rule.terms[12].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[13].kind | rounded |
| levelProgression.rules[0].rule.terms[13].mode | round |
| levelProgression.rules[0].rule.terms[13].rule.kind | linear |
| levelProgression.rules[0].rule.terms[13].rule.base | 2 |
| levelProgression.rules[0].rule.terms[13].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[14].kind | rounded |
| levelProgression.rules[0].rule.terms[14].mode | round |
| levelProgression.rules[0].rule.terms[14].rule.kind | linear |
| levelProgression.rules[0].rule.terms[14].rule.base | 2 |
| levelProgression.rules[0].rule.terms[14].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[15].kind | rounded |
| levelProgression.rules[0].rule.terms[15].mode | round |
| levelProgression.rules[0].rule.terms[15].rule.kind | linear |
| levelProgression.rules[0].rule.terms[15].rule.base | 2 |
| levelProgression.rules[0].rule.terms[15].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[16].kind | rounded |
| levelProgression.rules[0].rule.terms[16].mode | round |
| levelProgression.rules[0].rule.terms[16].rule.kind | linear |
| levelProgression.rules[0].rule.terms[16].rule.base | 2 |
| levelProgression.rules[0].rule.terms[16].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[17].kind | rounded |
| levelProgression.rules[0].rule.terms[17].mode | round |
| levelProgression.rules[0].rule.terms[17].rule.kind | linear |
| levelProgression.rules[0].rule.terms[17].rule.base | 2 |
| levelProgression.rules[0].rule.terms[17].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[18].kind | rounded |
| levelProgression.rules[0].rule.terms[18].mode | round |
| levelProgression.rules[0].rule.terms[18].rule.kind | linear |
| levelProgression.rules[0].rule.terms[18].rule.base | 2 |
| levelProgression.rules[0].rule.terms[18].rule.perLevel | 5,111 |
| levelProgression.rules[0].rule.terms[19].kind | rounded |
| levelProgression.rules[0].rule.terms[19].mode | round |
| levelProgression.rules[0].rule.terms[19].rule.kind | linear |
| levelProgression.rules[0].rule.terms[19].rule.base | 2 |
| levelProgression.rules[0].rule.terms[19].rule.perLevel | 5,111 |
| levelProgression.rules[0].source | verifiedPrepaidComboBudget |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | constant |
| levelProgression.rules[1].rule.value | 0 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | cooldownScaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0,1 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 90 |
| levelProgression.rules[2].rule.rule.perLevel | -1,667 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | prepaidComboBudget |
| levelProgression.rules[3].path[1] | perApplicationManaScaling |
| levelProgression.rules[3].rule.kind | rounded |
| levelProgression.rules[3].rule.mode | round |
| levelProgression.rules[3].rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.base | 2 |
| levelProgression.rules[3].rule.rule.perLevel | 5,111 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| mana (Aktivierungskosten, kein Bonus) | 40 |
| manaPricing.category | combo |
| manaPricing.factor | 0,4 |
| manaPricing.basis | sharedComboBudget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 2 |
| prepaidComboBudget.sourceSkillNumber | 186 |
| prepaidComboBudget.paidApplications | 20 |
| prepaidComboBudget.maxApplications | 25 |
| prepaidComboBudget.perApplicationManaScaling.type | table |
| prepaidComboBudget.perApplicationManaScaling.values[0] | 2 |
| prepaidComboBudget.perApplicationManaScaling.values[1] | 7 |
| prepaidComboBudget.perApplicationManaScaling.values[2] | 12 |
| prepaidComboBudget.perApplicationManaScaling.values[3] | 17 |
| prepaidComboBudget.perApplicationManaScaling.values[4] | 22 |
| prepaidComboBudget.perApplicationManaScaling.values[5] | 28 |
| prepaidComboBudget.perApplicationManaScaling.values[6] | 33 |
| prepaidComboBudget.perApplicationManaScaling.values[7] | 38 |
| prepaidComboBudget.perApplicationManaScaling.values[8] | 43 |
| prepaidComboBudget.perApplicationManaScaling.values[9] | 48 |
| prepaidComboBudget.perApplicationManaScaling.base | 2 |
| prepaidComboBudget.finisherSkillNumber | 229 |
| prepaidComboBudget.finisherPaidSeparately | true |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 186: Seelensammler

Nur gegen ein mit Seelenschuss markiertes Ziel einsetzbar. Verursacht einmalig physischen Schaden aus dem regulären Charakter-P-Angriff plus zusätzlichem Skill-Grundschaden. Dieser Zusatz beträgt auf Stufe 1 genau 4 und steigt je weiterer Stufe um 13 bis auf 121 auf Stufe 10. Es wird kein separater Auto-Attack zusätzlich ausgelöst. Jeder erfolgreiche Treffer gibt 1 Sammelpunkt. Geblockte und kritische Treffer geben ebenfalls genau 1 Punkt, verfehlte und ausgewichene Angriffe keinen. Feste Castzeit 0,2 Sekunden, kein zusätzlicher Cooldown. Die vorläufige Animation von 0,3 Sekunden blockiert keine weiteren Aktionen. Die fünf Sekunden lange Markierung begrenzt das Sammelfenster.  Eine neue Anwendung beginnt frühestens nach Abschluss der vorherigen 0,2 Sekunden Castzeit. Angriffstempo, Cast-Speed-Boni und Cooldown-Reduktion verkürzen diese Zeit nicht. Im fünfsekündigen Sammelfenster sind daher höchstens 25 vollständige Anwendungen möglich. Seelensammler selbst kostet kein Mana: Seelenschuss bezahlt bereits ein gemeinsames Budget für 20 Anwendungen auf der jeweiligen Stufe. Im fünfsekündigen Fenster sind weiterhin bis zu 25 Anwendungen möglich. Spektralketten wird separat bezahlt.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Soul Collector |
| category | active |
| cd | 0 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Nur gegen ein mit Seelenschuss markiertes Ziel einsetzbar. Verursacht einmalig physischen Schaden aus dem regulären Charakter-P-Angriff plus zusätzlichem Skill-Grundschaden. Dieser Zusatz beträgt auf Stufe 1 genau 4 und steigt je weiterer Stufe um 13 bis auf 121 auf Stufe 10. Es wird kein separater Auto-Attack zusätzlich ausgelöst. Jeder erfolgreiche Treffer gibt 1 Sammelpunkt. Geblockte und kritische Treffer geben ebenfalls genau 1 Punkt, verfehlte und ausgewichene Angriffe keinen. Feste Castzeit 0,2 Sekunden, kein zusätzlicher Cooldown. Die vorläufige Animation von 0,3 Sekunden blockiert keine weiteren Aktionen. Die fünf Sekunden lange Markierung begrenzt das Sammelfenster.  Eine neue Anwendung beginnt frühestens nach Abschluss der vorherigen 0,2 Sekunden Castzeit. Angriffstempo, Cast-Speed-Boni und Cooldown-Reduktion verkürzen diese Zeit nicht. Im fünfsekündigen Sammelfenster sind daher höchstens 25 vollständige Anwendungen möglich. Seelensammler selbst kostet kein Mana: Seelenschuss bezahlt bereits ein gemeinsames Budget für 20 Anwendungen auf der jeweiligen Stufe. Im fünfsekündigen Fenster sind weiterhin bis zu 25 Anwendungen möglich. Spektralketten wird separat bezahlt. |
| description_eng | Requires a target marked by Soulshot. Deals physical damage from normal character physical attack plus additional skill base damage. The extra damage is 4 at level 1 and increases by 13 per additional level, reaching 121 at level 10. No separate basic attack is added. Each successful hit grants one collected point; blocked and critical hits also grant one, while misses and dodges grant none. Fixed cast time 0.2 seconds, no additional cooldown. The provisional 0.3-second animation does not block other actions. The 5-second target mark limits the collection window. No Mana cost. A new application starts only after the previous 0.2-second cast completes. Attack speed, cast-speed bonuses and cooldown reduction cannot shorten this timing. The five-second collection window therefore permits at most 25 completed applications. Soul Collector itself costs no Mana: Soulshot prepays a shared budget for 20 applications at the corresponding level. The five-second window still allows up to 25 applications. Spectral Chains is paid separately. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 186 |
| skillName_de | Seelensammler |
| skillpoints | 1 |
| castTimeSeconds | 0,2 |
| activationRequirements.requiredTargetMarkSkillNumber | 185 |
| animationDurationSeconds | 0,3 |
| animationTimingStatus | provisional |
| blocksOtherSkillsDuringAnimation | false |
| hasLingeringDamage | false |
| pointGeneration.requiresTargetMarkSkillNumber | 185 |
| pointGeneration.pointsPerSuccessfulHit | 1 |
| pointGeneration.countsBlockedHits | true |
| pointGeneration.countsMissedOrDodgedHits | false |
| pointGeneration.criticalHitPoints | 1 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 4 |
| statScaling.patk.perLevel | 13 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 0 |
| patk | 4 |
| timingModifiers.castTimeIsFixed | true |
| timingModifiers.affectedByAttackSpeed | false |
| timingModifiers.affectedByCastSpeed | false |
| timingModifiers.affectedByCooldownReduction | false |
| manaPricing.category | combo |
| manaPricing.factor | 0,4 |
| manaPricing.basis | sharedComboBudget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 2 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | patk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 4 |
| levelProgression.rules[0].rule.perLevel | 13 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | constant |
| levelProgression.rules[1].rule.rule.value | 0 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| mana (Aktivierungskosten, kein Bonus) | 0 |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 187: Hartes Training

Dauerhafter Attributanteil: je gelernter Stufe +1,4 Geschick; auf Stufe 10 insgesamt +14 Geschick. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Auf jeder gelernten Stufe konstant +5 Punkte Angriffsgeschwindigkeit. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Hard Training |
| atkSpeed | 0,05 |
| category | passive |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +1,4 Geschick; auf Stufe 10 insgesamt +14 Geschick. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Auf jeder gelernten Stufe konstant +5 Punkte Angriffsgeschwindigkeit. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent attribute component: +1.4 Dexterity per learned level; at level 10, +14 Dexterity total. This component always applies independently of any triggered effects. A constant +5 attack speed rating at every learned level. No activation cost, cast time or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 187 |
| skillName_de | Hartes Training |
| skillpoints | 1 |
| dex | 1,4 |
| resourceCosts | [] |
| statBonusUnits.atkSpeed | fraction |
| statScaling.atkSpeed.type | linear |
| statScaling.atkSpeed.base | 0,05 |
| statScaling.atkSpeed.perLevel | 0 |
| statScaling.dex.type | linear |
| statScaling.dex.base | 1,4 |
| statScaling.dex.perLevel | 1,4 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | atkSpeed |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0,05 |
| levelProgression.rules[0].rule.perLevel | 0 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | dex |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1,4 |
| levelProgression.rules[1].rule.perLevel | 1,4 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 190: Keine Gnade

Aktiver Eigenbuff für 600 Sekunden mit zehn Stufen. Gewährt 0,8 Geschick je Skillstufe, maximal +8. Der direkte P-Angriff steigt proportional zur bisherigen Stufenkurve von 15 × 40/69 auf maximal +40. Kein direkter Angriffstempobonus. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50 auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | No Mercy |
| category | active |
| cd | 60 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Aktiver Eigenbuff für 600 Sekunden mit zehn Stufen. Gewährt 0,8 Geschick je Skillstufe, maximal +8. Der direkte P-Angriff steigt proportional zur bisherigen Stufenkurve von 15 × 40/69 auf maximal +40. Kein direkter Angriffstempobonus. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50 auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten. |
| description_eng | Active self buff for 600 seconds with ten levels. Grants 0.8 Dexterity per level, up to 8. Direct physical attack follows the former level curve scaled by 40/69, from 15 × 40/69 to 40. No direct attack-speed bonus. Cooldown 60 seconds; fixed 0.1-second cast unaffected by speed. Mana starts at 50 plus 13 per additional level, up to 167 before discounts. |
| dmgType (Altformat) | selfbuff |
| dur | 600 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 190 |
| patk | 8,696 |
| skillName_de | Keine Gnade |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| dex | 0,8 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statScaling.dex.type | linear |
| statScaling.dex.base | 0,8 |
| statScaling.dex.perLevel | 0,8 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 8,696 |
| statScaling.patk.perLevel | 3,478 |
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
| levelProgression.rules[1].path[1] | dex |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,8 |
| levelProgression.rules[1].rule.perLevel | 0,8 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 8,696 |
| levelProgression.rules[2].rule.perLevel | 3,478 |
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

### 191: Flinke Füße

Gruppenbuff: Laufgeschwindigkeitspunkte je Stufe 1 / 5,5 / 10. Das sind additive Rohpunkte zum Tempo, kein garantierter prozentualer Laufgeschwindigkeitsgewinn. Die konkrete Laufgeschwindigkeitskurve ist noch offen. Dauer 10 Minuten, Cooldown 60 Sekunden, Castzeit 0,2 Sekunden. Mana-Kosten: 47 + 19 je weiterer Stufe.

| Feld | Gespeicherter Wert |
| --- | --- |
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

### 229: Spektralketten

Triff ein markiertes Ziel und entfessle die Macht der mit Seelensammler gesammelten Punkte, um es in Ketten zu legen. Bei 0 bis 5 Punkten beträgt die Fesselungsdauer 1 Sekunde ohne Grundschadensbonus. Bei 6 bis 15 Punkten: 2 Sekunden und 4 Prozent mehr Skill-Grundschaden. Bei 16 bis 21 Punkten: 3 Sekunden und 9 Prozent mehr Skill-Grundschaden. Ab 22 Punkten: 4 Sekunden und 15 Prozent mehr Skill-Grundschaden; im fünfsekündigen Sammelfenster sind theoretisch höchstens 25 Treffer möglich. Die Prozentboni gelten ausschließlich für den Skill-Grundschaden, nicht für Charakterangriff oder Waffenbeiträge. Jeder erfolgreiche Seelensammler-Treffer gibt genau einen Punkt, auch ein geblockter oder kritischer Treffer. Verfehlte oder ausgewichene Angriffe geben keinen Punkt. Die Castzeit beträgt 0,3 Sekunden. Sie verbraucht alle gesammelten Punkte, setzt den Punktestand auf null und beendet die Sammelphase. Die Fesselungsdauer beträgt abhängig vom erreichten Punktebereich 1 bis 4 Sekunden. Der einmalig erlernbare Skill hat 730 physischen und 203 magischen Grundschaden. Cooldown 69 Sekunden. Die nach Sammelpunkten vergebenen Prozentboni wirken auf diese Skill-Grundschäden, nicht auf Charakter- oder Waffenangriff. Der Abschluss darf gegen dasselbe zuvor markierte Ziel noch bis 1,5 Sekunden nach Ablauf der fünfsekündigen Markierung eingesetzt werden. Nach Ablauf der Markierung können keine weiteren Sammelpunkte aufgebaut werden. Mana-Kosten 439 auf Stufe 1, konstant, maximal 439 auf Stufe 1. Aktuelle Mana-Gruppe: combo (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Spectral Chains |
| category | active |
| cd | 69 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Triff ein markiertes Ziel und entfessle die Macht der mit Seelensammler gesammelten Punkte, um es in Ketten zu legen. Bei 0 bis 5 Punkten beträgt die Fesselungsdauer 1 Sekunde ohne Grundschadensbonus. Bei 6 bis 15 Punkten: 2 Sekunden und 4 Prozent mehr Skill-Grundschaden. Bei 16 bis 21 Punkten: 3 Sekunden und 9 Prozent mehr Skill-Grundschaden. Ab 22 Punkten: 4 Sekunden und 15 Prozent mehr Skill-Grundschaden; im fünfsekündigen Sammelfenster sind theoretisch höchstens 25 Treffer möglich. Die Prozentboni gelten ausschließlich für den Skill-Grundschaden, nicht für Charakterangriff oder Waffenbeiträge. Jeder erfolgreiche Seelensammler-Treffer gibt genau einen Punkt, auch ein geblockter oder kritischer Treffer. Verfehlte oder ausgewichene Angriffe geben keinen Punkt. Die Castzeit beträgt 0,3 Sekunden. Sie verbraucht alle gesammelten Punkte, setzt den Punktestand auf null und beendet die Sammelphase. Die Fesselungsdauer beträgt abhängig vom erreichten Punktebereich 1 bis 4 Sekunden. Der einmalig erlernbare Skill hat 730 physischen und 203 magischen Grundschaden. Cooldown 69 Sekunden. Die nach Sammelpunkten vergebenen Prozentboni wirken auf diese Skill-Grundschäden, nicht auf Charakter- oder Waffenangriff. Der Abschluss darf gegen dasselbe zuvor markierte Ziel noch bis 1,5 Sekunden nach Ablauf der fünfsekündigen Markierung eingesetzt werden. Nach Ablauf der Markierung können keine weiteren Sammelpunkte aufgebaut werden. Mana-Kosten 439 auf Stufe 1, konstant, maximal 439 auf Stufe 1. Aktuelle Mana-Gruppe: combo (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Hits a marked target and consumes all collected Soul Collector points. At 0–5 points: 1-second root with no skill-base damage bonus. At 6–15 points: 2-second root and 4 percent skill-base damage bonus. At 16–21 points: 3-second root and 9 percent skill-base damage bonus. At 22 or more points: 4-second root and 15 percent skill-base damage bonus; the five-second collection window theoretically permits at most 25 hits. Bonuses affect skill base damage only, not character or weapon attack. One point per successful hit, including blocked and critical hits; misses and dodges grant none. Consumes all points, resets the total to zero and ends collection. No Mana cost, cast time 0.3 seconds. One skill level, 730 physical and 203 magical base damage, cooldown 69 seconds. Spectral Chains can finish against the same previously marked target for up to 1.5 seconds after the five-second mark expires. No additional collection is possible after mark expiry. Mana cost 439 at level 1, maximum 439 at level 1. |
| dmgType (Altformat) | spell |
| dur | 1 |
| matk | 203 |
| maxSkillLv | 1 |
| maxUpgradeLv | 10 |
| nr | 229 |
| patk | 730 |
| skillName_de | Spektralketten |
| skillpoints | 1 |
| castTimeSeconds | 0,3 |
| collectedPointScaling.sourceSkillNumber | 186 |
| collectedPointScaling.thresholds[0] | 6 |
| collectedPointScaling.thresholds[1] | 16 |
| collectedPointScaling.thresholds[2] | 22 |
| collectedPointScaling.durationSecondsByTier[0] | 1 |
| collectedPointScaling.durationSecondsByTier[1] | 2 |
| collectedPointScaling.durationSecondsByTier[2] | 3 |
| collectedPointScaling.durationSecondsByTier[3] | 4 |
| collectedPointScaling.baseDamageBonusFractionByTier[0] | 0 |
| collectedPointScaling.baseDamageBonusFractionByTier[1] | 0,04 |
| collectedPointScaling.baseDamageBonusFractionByTier[2] | 0,09 |
| collectedPointScaling.baseDamageBonusFractionByTier[3] | 0,15 |
| collectedPointScaling.countsBlockedHits | true |
| collectedPointScaling.countsMissedOrDodgedHits | false |
| collectedPointScaling.pointsPerSuccessfulHit | 1 |
| collectedPointScaling.consumesAllPointsOnUse | true |
| collectedPointScaling.resetsPointsTo | 0 |
| collectedPointScaling.endsCollectionPhaseOnUse | true |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 439 |
| activationRequirements.requiredTargetMarkSkillNumber | 185 |
| activationRequirements.postTargetMarkWindowSeconds | 1,5 |
| manaPricing.category | combo |
| manaPricing.factor | 0,4 |
| manaPricing.basis | sharedComboBudget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | constant |
| levelProgression.rules[0].rule.rule.value | 439 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | mixed |
| type | skill |

### 262: Durchdringender Schuss

Ein gezielter Schuss mit erhöhter Durchdringung. Verursacht einmalig physischen Skill-Grundschaden von 340 auf Stufe 1, plus 61 je weiterer Stufe, bis zu 889 auf Stufe 10, zuzüglich des aktuellen P-Angriffs. Ausschließlich dieser Treffer erhält zusätzlich 20 Penetrationspunkte; kein dauerhafter Charakterbonus und keine Senkung der gegnerischen Verteidigung für andere Angriffe. Mana je Stufe nach der 25-Prozent-Regel aus dem Skill-Grundschaden ohne Charakterangriff, auf ganze Mana gerundet: 85 bis 222. Keine zusätzliche Castzeit. Cooldown auf allen Stufen 42 Sekunden. Kein DoT. Animation, Projektilflugzeit und genaue Trefferzeitpunkte bleiben für die Umsetzung offen.

| Feld | Gespeicherter Wert |
| --- | --- |
| nr | 262 |
| attackExecution.targetMode | singleEnemy |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.penetrationBonus | 20 |
| attackExecution.timingStatus | pending |
| castTimeSeconds | 0 |
| castTimeStatus | defined |
| category | active |
| cd | 42 |
| charClass[0] | Summoner |
| charClass[1] | Soulseeker |
| classificationVersion | 1 |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| damageType | physical |
| description_de | Ein gezielter Schuss mit erhöhter Durchdringung. Verursacht einmalig physischen Skill-Grundschaden von 340 auf Stufe 1, plus 61 je weiterer Stufe, bis zu 889 auf Stufe 10, zuzüglich des aktuellen P-Angriffs. Ausschließlich dieser Treffer erhält zusätzlich 20 Penetrationspunkte; kein dauerhafter Charakterbonus und keine Senkung der gegnerischen Verteidigung für andere Angriffe. Mana je Stufe nach der 25-Prozent-Regel aus dem Skill-Grundschaden ohne Charakterangriff, auf ganze Mana gerundet: 85 bis 222. Keine zusätzliche Castzeit. Cooldown auf allen Stufen 42 Sekunden. Kein DoT. Animation, Projektilflugzeit und genaue Trefferzeitpunkte bleiben für die Umsetzung offen. |
| description_eng | A targeted shot with increased penetration. Deals physical base skill damage once: 340 at level 1 plus 61 per additional level, reaching 889 at level 10, plus current physical attack. This hit alone gains 20 additional penetration rating; no permanent character bonus and no target defense debuff for other attacks. Mana equals 25% of base skill damage excluding character attack, rounded to whole Mana: 85 to 222. No additional cast time. Cooldown 42 seconds at every level. No damage over time. Animation, projectile travel and exact impact timing remain pending. |
| dmgType (Altformat) | physical |
| hasLingeringDamage | false |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | patk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 340 |
| levelProgression.rules[0].rule.perLevel | 61 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | outputCost |
| levelProgression.rules[1].rule.factor | 0,25 |
| levelProgression.rules[1].rule.basis | damage |
| levelProgression.rules[1].rule.minimum | 0 |
| levelProgression.rules[1].source | verifiedManaPricing |
| levelProgression.extensionNeedsDefinition | [] |
| mana (Aktivierungskosten, kein Bonus) | 85 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| patk | 340 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 85 |
| resourceCosts[0].scaling.values[0] | 85 |
| resourceCosts[0].scaling.values[1] | 100 |
| resourceCosts[0].scaling.values[2] | 116 |
| resourceCosts[0].scaling.values[3] | 131 |
| resourceCosts[0].scaling.values[4] | 146 |
| resourceCosts[0].scaling.values[5] | 161 |
| resourceCosts[0].scaling.values[6] | 177 |
| resourceCosts[0].scaling.values[7] | 192 |
| resourceCosts[0].scaling.values[8] | 207 |
| resourceCosts[0].scaling.values[9] | 222 |
| skillName_de | Durchdringender Schuss |
| skillName_eng | Piercing Shot |
| skillpoints | 1 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 340 |
| statScaling.patk.perLevel | 61 |
| type | skill |

## Gemeinsame Blöcke

[Kreaturenskills](../shared-creature-skills.md) und [Trainingsskills](../shared-training-skills.md) werden einmal gemeinsam geprüft. Die normale Lerngrenze für Bindung und Zucht ist bereits 1. Die zweite Kreaturen-Spezialklasse und ihre Lerngrenzen sind noch zu bestätigen.

## Reihenfolge

Die Grundwerte dieser Klassenrunde sind bearbeitet und in der Datenbank gespeichert. Permanente Passive sind im Klassenvergleich enthalten. Der 33. gemeinsame Mana-Skill mit dem Schurken sowie die ausdrücklich offenen Detailregeln bleiben für die nächste Runde.

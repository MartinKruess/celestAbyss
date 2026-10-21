# Druide / Alchemist: Werte und Skillprüfung

**32 Skills, 280 Skillpunkte.** Windschlitzer hat nur beim Druiden 20 Stufen: magischer Grundschaden 211 bis 921, Mana 53 bis 233, Grund-Cooldown 54 bis 45 Sekunden. Kräuterkundler und Witcher behalten zehn Stufen mit unveränderten Werten. Windfesseln hat 15 Stufen mit bisherigen Start- und Maximalwerten: 223 bis 529 Grundschaden, 56 bis 137 Mana, ein bis fünf Sekunden Debuffdauer und ein bis zehn Prozent Angriffstempo-Senkung. Vergessener Zauber hat zwei Stufen: je −20 beziehungsweise −15 Stärke, Vitalität, Intelligenz, Willenskraft, Agilität und Geschick. Beide Stufen geben unverändert genau einem gewählten eigenen Skill +1 effektive Stufe. Energieschlag bleibt auf Stufe 5 begrenzt.

Einteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.

**32 unterschiedliche zugeordnete Skills: 18 aktive und 14 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie bei den bisher geprüften Klassen. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.

| Art | Anzahl | Skills |
| --- | ---: | --- |
| Übrige Passive einschließlich Procs | 11 | Erleuchtung, Adrenalin, Erweiterung des Geistes, Zweihändiges Streitkolbentraining, Ausdauertraining, Rüstungstraining, Waffentraining, Kanalisierung, Vergessener Zauber, Gunst der Sylphen, Dornige Rose |
| Aktive Skills (Angriff/Heilung/Unterstützung) | 12 | Ätherregen, Eislanze, Eisranken, Energieschlag, Vakuumimpuls, Windfesseln, Katalysator Rein, Himmelsbrecher, Manaexplosion, Bannmagie, Windschlitzer, Naturgeist |
| Kreaturen aktiv | 3 | Tamen, Beschwören, Zurückrufen |
| Kreaturen passiv | 3 | Bindung, Kontrolle, Zucht |
| Gruppenbuffs | 2 | Macht des Wassers, Macht des Geistes |
| Eigenbuffs | 1 | Herr der Elemente |

## Basis und Ausrüstung

R1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.

### Basis ohne Ausrüstung

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 183 | 453 | 753 | 1.053 | 1.353 | 1.653 | 1.953 |
| Mana | 151 | 421 | 721 | 1.021 | 1.321 | 1.621 | 1.921 |
| P-Angriff | 9 | 25,2 | 43,2 | 61,2 | 79,2 | 97,2 | 115,2 |
| M-Angriff | 11 | 27,2 | 45,2 | 63,2 | 81,2 | 99,2 | 117,2 |
| P-Defense | 5 | 23 | 43 | 63 | 83 | 103 | 123 |
| M-Defense | 5 | 23 | 43 | 63 | 83 | 103 | 123 |

### Mit Rüstung und Streitkolben

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 533 | 803 | 1.278 | 1.753 | 2.228 | 2.853 | 3.678 |
| Mana | 536 | 806 | 1.356 | 1.971 | 2.596 | 3.221 | 3.871 |
| P-Angriff | 9 | 25,2 | 43,2 | 61,2 | 79,2 | 97,2 | 115,2 |
| M-Angriff | 11 | 27,2 | 45,2 | 63,2 | 81,2 | 99,2 | 117,2 |
| P-Defense | 70 | 88 | 160 | 259 | 358 | 504 | 679 |
| M-Defense | 65 | 83 | 152 | 245 | 355 | 476 | 611 |

Als Vergleichswaffe ist vorläufig ein Streitkolben angesetzt. Grundregeneration: 25 Mana und 12 HP pro Tick. Das Intervall wird später in Unreal geprüft. Bestehende gemeinsame Skillwerte werden übernommen; fehlende Werte werden nicht geschätzt.

## Skillübersicht

| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Erleuchtung | Passive | 20 | Wisdom +0,5<br>Intelligenz +0,5 | Intelligenz: 0,5 bis 10<br>Wisdom: 0,5 bis 10<br>manaRegen: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 6 | Adrenalin | Passive | 5 | Stärke +1 %<br>Intelligenz +1 % | Stärke: 1 % bis 5 %<br>Intelligenz: 1 % bis 5 % | Keine | 120 bis 102 | Entfällt | 20 bis 30 | Gemeinsame Definition |
| 9 | Ätherregen | Skill / magisch | 10 | M-Angriff +300<br>periodicDamage, Ziel enemiesInArea, 300<br>heal, Ziel alliesInArea, 75<br>Fläche: undefined m vor Spieler | M-Angriff: 300 bis 957<br>periodicDamage/: 300 bis 957 | Mana-Kosten: 110 bis 239 | 152 bis 125 | 0.6 | periodicDamage: 6 bis 8 s<br>heal: 6 bis 8 s | Lernvoraussetzungen und Ausführung prüfen |
| 29 | Eislanze | Skill / magisch | 10 | M-Angriff +187 | M-Angriff: 187 bis 628 | Mana-Kosten: 47 bis 155 | 50 bis 41 | 0.6 | 5 | Lernvoraussetzungen und Ausführung prüfen |
| 30 | Eisranken | Skill / magisch | 10 | M-Angriff +123<br>control, Ziel enemy<br>periodicDamage, Ziel enemy, 8 | M-Angriff: 123 bis 456<br>periodicDamage/: 8 bis 44 | Mana-Kosten: 33 bis 158 | 22 | 0.5 | root: 1 bis 4 s<br>periodicDamage: 1 bis 4 s | Lernvoraussetzungen und Ausführung prüfen |
| 36 | Energieschlag | Skill / magisch | 20 / Druide 5 | M-Angriff +25 | M-Angriff: 25 bis 105 | Mana-Kosten: 6 bis 26 | 2,6 bis 2,2 | 0.15 | 0 (einmalig) | Lernvoraussetzungen und Ausführung prüfen |
| 44 | Erweiterung des Geistes | Passive | 10 | Wisdom +1<br>Intelligenz +1<br>Dexterity +1 | Intelligenz: 1 bis 10<br>Wisdom: 1 bis 10<br>Dexterity: 1 bis 10 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 118 | Vakuumimpuls | Skill / gemischt | 5 | P-Angriff +266<br>M-Angriff +532<br>control, Ziel enemiesInArea<br>Fläche: 5 m Radius um Spieler | M-Angriff: 532 bis 1.960<br>P-Angriff: 266 bis 980 | Mana-Kosten: 133 bis 489 | 100 bis 92 | 0.4 | pull: 7 bis 4 s | Lernvoraussetzungen und Ausführung prüfen |
| 125 | Windfesseln | Skill / magisch | 15 | M-Angriff +223<br>statModifier, Ziel enemy, atkSpeed, -0,01 | M-Angriff: 223 bis 529<br>statModifier/atkSpeed: -1 bis -10 % | Mana-Kosten: 56 bis 137 | 37 | 0.2 | atkSpeed: 1 bis 5 s | Lernvoraussetzungen und Ausführung prüfen |
| 132 | Zweihändiges Streitkolbentraining | Passive | 10 | Stärke +1<br>Intelligenz +2 | Stärke: 1 bis 5<br>Intelligenz: 2 bis 7 | Keine | Entfällt | Entfällt | Permanent | Lernvoraussetzungen und Ausführung prüfen |
| 133 | Tamen | Skill | 3 / Druide 1 | Versucht, eine Kreatur zu zähmen. Erfordert das passende spezielle Taming-Item für diese Kreatur. Die Grunderfolgschance beginnt bei 50 Prozent und steigt je weiterer Skillstufe um 15 Prozentpunkte auf 80 Prozent. Ein Kreaturen-Gegenwert beeinflusst die endgültige Erfolgschance; die Berechnung ist noch festzulegen. Die Mana-Kosten steigen von 100 um 25 je weiterer Stufe auf 150. Die Cast Time sinkt von 3 um 0,5 Sekunden je weiterer Stufe auf 2 Sekunden, der Cooldown von 60 um 10 Sekunden je weiterer Stufe auf 40 Sekunden. Der Versuch verursacht keinen Schaden und hat keine anschließende Effektdauer. Der Itemverbrauch ist noch festzulegen. Die Definition umfasst drei Stufen; die normale Lerngrenze anderer Klassen liegt bei Stufe 1. Der Abenteurer kann Stufe 3 lernen; eine zweite Spezialklasse ist noch nicht festgelegt. | Nicht vollständig gespeichert | Mana-Kosten: 100 bis 100 | 60 bis 60 | 3 bis 3 | 0 (keine anschließende Wirkung) | Gemeinsame Definition; Levelskalierung prüfen |
| 134 | Bindung | Passive | 3 / Druide 1 | Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.<br>statModifier, Ziel companion, str, 10<br>statModifier, Ziel companion, vita, 10<br>statModifier, Ziel companion, int, 10<br>statModifier, Ziel companion, wis, 10 | statModifier/str: 10 bis 10<br>statModifier/vita: 10 bis 10<br>statModifier/int: 10 bis 10<br>statModifier/wis: 10 bis 10 | Keine | Entfällt | Entfällt | str: 0 s<br>vita: 0 s<br>int: 0 s<br>wis: 0 s | Gemeinsame Definition |
| 135 | Kontrolle | Passive | 2 / Druide 1 | Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen. | Nicht vollständig gespeichert | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition; Levelskalierung prüfen |
| 136 | Beschwören | Skill | 1 | Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 1 | Nicht gespeichert | Gemeinsame Definition |
| 137 | Zurückrufen | Skill | 1 | Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 0 | Nicht gespeichert | Gemeinsame Definition |
| 138 | Zucht | Passive | 3 / Druide 1 | Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.<br>experienceBonus, Ziel companion, 0,1 | experienceBonus/: 10 bis 10 % | Keine | Entfällt | Entfällt | experienceBonus: 0 s | Gemeinsame Definition |
| 139 | Ausdauertraining | Passive | 20 | Vita +1<br>Wisdom +1 | Vita: 1 bis 20<br>Wisdom: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 144 | Rüstungstraining | Passive | 10 | P-Defense +3<br>M-Defense +6 | P-Defense: 3 bis 30<br>M-Defense: 6 bis 60 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 193 | Macht des Wassers | Buff | 10 | Gruppenbuff: +15 direkte MP-Regeneration je Tick auf Stufe 1, +5 je weiterer Stufe, maximal +60. Zusätzlich magischer Skillschaden: 0 auf Stufe 1, +9 je weiterer Stufe bis +81 auf Stufe 10. Kein direkter M-Angriffsbonus. Der Schadensbonus gilt je passendem Skilltreffer mit Angriffsanteil, bei Mehrfachtreffern entsprechend je Treffer. Periodischer Schaden mit Charakterangriffsanteil profitiert ebenfalls. Keine Wirkung auf normale Auto-Attacks, Begleiterangriffe oder reine feste Rest-DoTs. Normale Attribute, Waffen und Self-Buffs skalieren weiterhin wie bisher. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten 54 +16 je weiterer Stufe, maximal 198.<br>damageBonus, Ziel self, 0 | manaRegen: 15 bis 60<br>damageBonus/: 0 bis 81 | Mana-Kosten: 54 bis 198 | 60 | 0.3 | damageBonus: 1.800 s | Lernvoraussetzungen und Ausführung prüfen |
| 194 | Herr der Elemente | Selbstbuff | 10 | Stärke +1<br>Vita +1<br>Wisdom +1<br>Intelligenz +2 | Stärke: 1 bis 5<br>Vita: 1 bis 5<br>Wisdom: 1 bis 5<br>Intelligenz: 2 bis 20 | Mana-Kosten: 50 bis 167 | 60 | 0.1 | 600 | Lernvoraussetzungen und Ausführung prüfen |
| 201 | Waffentraining | Passive | 20 | P-Angriff +1<br>M-Angriff +1 | P-Angriff: 1 bis 20<br>M-Angriff: 1 bis 20 | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 203 | Kanalisierung | Passive | 10 | Stärke +1<br>Vita +0,5<br>Wisdom +0,5<br>Intelligenz +0,8<br>Mana +100 | Mana: 100 bis 865<br>Stärke: 1 bis 10<br>Vita: 0,5 bis 5<br>Intelligenz: 0,8 bis 8<br>Wisdom: 0,5 bis 5 | Keine | Entfällt | Entfällt | Permanent | Lernvoraussetzungen und Ausführung prüfen |
| 204 | Katalysator Rein | Skill | 5 | Erschafft ein Verstärkungsfeld für Gruppenmitglieder der Völker Aurora. Im Feld steigen ihr physischer Angriff um 25 und ihr magischer Angriff um 50 pro Skilllevel. Auf Stufe 5 sind dies +125 P-Angriff und +250 M-Angriff. Die Felddauer beträgt 24 Sekunden auf Stufe 1 und steigt um 2 Sekunden je weiterer Stufe auf 32 Sekunden. Der Cooldown beginnt bei 180 Sekunden und sinkt um 2 Sekunden je weiterer Stufe auf 172 Sekunden. In einem bereits von einem Katalysator belegten Gebiet kann kein weiterer Katalysator platziert werden. Castzeit 1,8 Sekunden. Mana-Kosten unverändert 198 auf Stufe 1, plus 87 je weiterer Stufe bis 546 auf Stufe 5.<br>statModifier, Ziel alliesInArea, patk, 25<br>statModifier, Ziel alliesInArea, matk, 50 | statModifier/patk: 25 bis 125<br>statModifier/matk: 50 bis 250 | Mana-Kosten: 198 bis 546 | 180 bis 172 | 1.8 | patk: 24 bis 32 s<br>matk: 24 bis 32 s | Lernvoraussetzungen und Ausführung prüfen |
| 212 | Himmelsbrecher | Skill / gemischt | 20 | P-Angriff +344<br>M-Angriff +592<br>Animation 2,5 s (vorläufig) | P-Angriff: 344 bis 2.785<br>M-Angriff: 592 bis 4.197 | Mana-Kosten: 421 bis 3.142 | 137 bis 118 | 0.6 | Wirkung einmalig; Animation 2,5 s | Lernvoraussetzungen und Ausführung prüfen |
| 219 | Manaexplosion | Skill / magisch | 10 | M-Angriff +383 | M-Angriff: 383 bis 383 | Mana-Kosten: 1 bis 1 (Anteil) | 360 | 1.2 | 0 (einmalig) | Lernvoraussetzungen und Ausführung prüfen |
| 220 | Bannmagie | Skill / magisch | 10 | M-Angriff +37<br>control, Ziel enemy | M-Angriff: 37 bis 154 | Mana-Kosten: 9 bis 36 | 540 | 0.2 | spellSuppression: 3 bis 4 s | Lernvoraussetzungen und Ausführung prüfen |
| 221 | Windschlitzer | Skill / magisch | 20 / Druide 20 | M-Angriff +211 | M-Angriff: 211 bis 921 | Mana-Kosten: 53 bis 233 | 54 bis 45 | 0.2 | Nicht gespeichert | Lernvoraussetzungen und Ausführung prüfen |
| 222 | Vergessener Zauber | Passive | 2 | Stärke +-20<br>Vita +-20<br>Wisdom +-20<br>Agility +-20<br>Intelligenz +-20<br>Dexterity +-20 | Stärke: -20 bis -15<br>Vita: -20 bis -15<br>Intelligenz: -20 bis -15<br>Wisdom: -20 bis -15<br>Agility: -20 bis -15<br>Dexterity: -20 bis -15 | Keine | Entfällt | Entfällt | Permanent | Lernvoraussetzungen und Ausführung prüfen |
| 225 | Macht des Geistes | Buff | 10 | M-Defense +18 | M-Defense: 18 bis 180 | Mana-Kosten: 63 bis 288 | 60 | 0.3 | 1800 | Lernvoraussetzungen und Ausführung prüfen |
| 244 | Naturgeist | Skill | 2 | Beschwört einen Naturgeist, der mit kleinen Wirbelstürmen magischen Windschaden aus der Entfernung verursacht. Eigene Skilldefinition nur für Druide/Alchemist, getrennt vom Seelenbegleiter des Jägers. Übernimmt live jeweils 10 % der aktuellen Intelligenz, Vitalität und Willenskraft seines Meisters. Statt Geschick liefert Intelligenz den Angriff: 1,8 M-Angriff je übernommenes Intelligenz-Punkt; keine direkte Übernahme von Waffenangriff oder fertigem M-Angriff. Vita und Willenskraft werden nach den normalen Begleiterregeln verwertet. Keine physische Angriffskomponente. Zwei lernbare Stufen. Auf Stufe 2 erhält ausschließlich der Naturgeist zusätzlich je 10 Vitalität, Intelligenz und Willenskraft, zusätzlich zu Vererbung und Bindung. Der Druide erhält diese Boni nicht. Unverändert auf beiden Stufen: 132 Mana, 0,4 Sekunden Castzeit, 360 Sekunden Dauer und 360 Sekunden Cooldown ab Beschwörung. Maximal ein Naturgeist gleichzeitig; erneutes Rufen ersetzt den bisherigen. Bei Tod nur verbleibenden Beschwörungs-Cooldown abwarten. Angreifbar und von Flächenschaden betroffen. Kein dauerhafter Pet-Platz, mit normalem Pet kombinierbar. Grundfrequenz 1,1 Angriffe pro Sekunde bei 100 % eigenem Angriffstempo, keine Übernahme von Agilität. Meister-Buffs und -Debuffs wirken live auf die übernommenen Attribute. Begleiterbuffs wirken direkt auf den Naturgeist. Reichweite und Anpassung aktueller HP bei Max-HP-Änderungen noch offen. Zusätzliche eigene Grundwerte: 500 Max-Leben, 0 P-Angriff, 100 M-Angriff, 45 P-Verteidigung und 81 M-Verteidigung. Diese Werte werden zur bisherigen Vererbung addiert. Grundfrequenz 1,1 Angriffe pro Sekunde. Bindung wirkt direkt und zusätzlich auf die Kreaturenattribute; die normale Lerngrenze des Meisters ist zu beachten.<br>statModifier, Ziel companion, vita, 10<br>statModifier, Ziel companion, int, 10<br>statModifier, Ziel companion, wis, 10 | statModifier/vita: 0 bis 10<br>statModifier/int: 0 bis 10<br>statModifier/wis: 0 bis 10 | Mana-Kosten: 132 bis 132 | 360 | 0.4 | vita: 0 s<br>int: 0 s<br>wis: 0 s | Lernvoraussetzungen und Ausführung prüfen |
| 253 | Gunst der Sylphen | Passive | 10 | Die Gunst der Sylphen verbessert deine Windkontrolle. Zehn Stufen. Wirkt ausschließlich auf Windschlitzer, Windfesseln und Vakuumimpuls: je Stufe 0,5 Sekunden weniger Cooldown, 0,5 Prozent mehr gesamter verursachter Schaden und 0,5 Prozent weniger Mana-Kosten. Auf Stufe 10: 5 Sekunden weniger Cooldown, 5 Prozent mehr Schaden und 5 Prozent weniger Mana-Kosten; zusätzlich erst auf Stufe 10 0,1 Sekunden weniger Castzeit. Der Schadensbonus umfasst den jeweiligen Charakterangriff und bei Vakuumimpuls beide Schadensphasen. Keine Wirkung auf andere Skills, Naturgeist oder Auto-Attacks. Keine zusätzliche MP-Regeneration. Ansaugdauer und Animation bleiben unverändert. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit oder Cooldown.<br>cooldownReduction, Ziel self, 0,5<br>damageBonus, Ziel self, 0,005<br>resourceCostReduction, Ziel self, 0,005<br>cooldownReduction, Ziel self, 0,5<br>damageBonus, Ziel self, 0,005<br>resourceCostReduction, Ziel self, 0,005<br>cooldownReduction, Ziel self, 0,5<br>damageBonus, Ziel self, 0,005<br>resourceCostReduction, Ziel self, 0,005<br>castTimeReduction, Ziel self, 0<br>castTimeReduction, Ziel self, 0<br>castTimeReduction, Ziel self, 0 | cooldownReduction/: 0,5 bis 5<br>damageBonus/: 0,5 bis 5 %<br>resourceCostReduction/: 0,5 bis 5 %<br>cooldownReduction/: 0,5 bis 5<br>damageBonus/: 0,5 bis 5 %<br>resourceCostReduction/: 0,5 bis 5 %<br>cooldownReduction/: 0,5 bis 5<br>damageBonus/: 0,5 bis 5 %<br>resourceCostReduction/: 0,5 bis 5 %<br>castTimeReduction/: 0 bis 0,1<br>castTimeReduction/: 0 bis 0,1<br>castTimeReduction/: 0 bis 0,1 | Keine | Entfällt | Entfällt | cooldownReduction: 0 s<br>damageBonus: 0 s<br>resourceCostReduction: 0 s<br>cooldownReduction: 0 s<br>damageBonus: 0 s<br>resourceCostReduction: 0 s<br>cooldownReduction: 0 s<br>damageBonus: 0 s<br>resourceCostReduction: 0 s<br>castTimeReduction: 0 s<br>castTimeReduction: 0 s<br>castTimeReduction: 0 s | Lernvoraussetzungen und Ausführung prüfen |
| 261 | Dornige Rose | Passive | 5 | Permanente passive Spezialisierung mit 5 Stufen, nur für Druide und seine Weiterentwicklung. Mit gelernter Dornige Rose wird Eisranken als Dornige Eisranken angezeigt. Jede Stufe erhöht den einmaligen Initialschaden dieses Angriffs um 37, bis zu +185 auf Stufe 5. Die Mana-Kosten des aktiven Skills bleiben unverändert; Fesselwirkung, DoT, Castzeit und Cooldown bleiben ebenfalls unverändert. Kein zusätzlicher Charakterangriffsbeitrag. Die Passive selbst hat keine Aktivierungskosten, Castzeit oder Cooldown.<br>damageBonus, Ziel self, 37 | damageBonus/: 37 bis 185 | Keine | Entfällt | Entfällt | damageBonus: 0 s | Lernvoraussetzungen und Ausführung prüfen |

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

### 9: Ätherregen

Beschwört ein Ätherfeld, das alle 2 Sekunden Gegnern magischen Schaden zufügt und jedes eigene Gruppenmitglied im Feld heilt. Der magische Grundangriff je Auslösung steigt von 300 um 73 je weiterer Stufe auf 957. Die Heilung je Auslösung beträgt 75 HP plus 10 Prozent des Schadens an einem getroffenen Ziel und je 1 Prozent des Schadens an bis zu vier weiteren getroffenen Zielen. Weitere Gegner erhalten weiterhin Schaden, tragen aber nicht zur Heilung bei. Jedes Gruppenmitglied im Feld erhält die volle Heilung. Die Dauer beträgt zunächst 6 Sekunden, ab Stufe 5 7 Sekunden und auf Stufe 10 8 Sekunden. Auslösungen erfolgen nach 2, 4, 6 und gegebenenfalls 8 Sekunden. Mana-Kosten 110 auf Stufe 1, Stufenwerte 110, 118, 126, 133, 141, 149, 156, 164, 172, 239, maximal 239 auf Stufe 10. Castzeit 0,6 Sekunden. Cooldown 152 Sekunden auf Stufe 1, 125 Sekunden auf Stufe 10; bisheriger Stufenverlauf um 2 Sekunden erhöht. Startdurchmesser, Auswahl des ersten Ziels und genaue Schadensbasis werden noch geklärt. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). Vor jedem Tick wird die Zahl der aktuell im Feld stehenden eigenen Gruppenmitglieder einschließlich des Anwenders bestimmt. Genau diese Zahl begrenzt die Anzahl verschiedener angreifbarer Gegner für diesen Tick. Jeder ausgewählte Gegner erhält höchstens einen Schadenstreffer pro Tick. Sind weniger Gegner vorhanden, verfallen freie Zielplätze; ein einzelner Gegner erhält keine zusätzlichen Treffer durch weitere Gruppenmitglieder. Heilung erhalten ausschließlich die eigenen Gruppenmitglieder, die sich zum jeweiligen Heiltick im Feld befinden; jeder erhält den vollen berechneten Heilwert. Vor jedem Tick wird die Zahl der aktuell im Feld stehenden eigenen Gruppenmitglieder einschließlich des Anwenders bestimmt. Genau diese Zahl begrenzt die Anzahl verschiedener angreifbarer Gegner für diesen Tick. Jeder ausgewählte Gegner erhält höchstens einen Schadenstreffer pro Tick. Sind weniger Gegner vorhanden, verfallen freie Zielplätze; ein einzelner Gegner erhält keine zusätzlichen Treffer durch weitere Gruppenmitglieder. Heilung erhalten ausschließlich die eigenen Gruppenmitglieder, die sich zum jeweiligen Heiltick im Feld befinden; jeder erhält den vollen berechneten Heilwert.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Ether Rain |
| category | active |
| cd | 152 |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| charClass[2] | Luminet |
| charClass[3] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Beschwört ein Ätherfeld, das alle 2 Sekunden Gegnern magischen Schaden zufügt und jedes eigene Gruppenmitglied im Feld heilt. Der magische Grundangriff je Auslösung steigt von 300 um 73 je weiterer Stufe auf 957. Die Heilung je Auslösung beträgt 75 HP plus 10 Prozent des Schadens an einem getroffenen Ziel und je 1 Prozent des Schadens an bis zu vier weiteren getroffenen Zielen. Weitere Gegner erhalten weiterhin Schaden, tragen aber nicht zur Heilung bei. Jedes Gruppenmitglied im Feld erhält die volle Heilung. Die Dauer beträgt zunächst 6 Sekunden, ab Stufe 5 7 Sekunden und auf Stufe 10 8 Sekunden. Auslösungen erfolgen nach 2, 4, 6 und gegebenenfalls 8 Sekunden. Mana-Kosten 110 auf Stufe 1, Stufenwerte 110, 118, 126, 133, 141, 149, 156, 164, 172, 239, maximal 239 auf Stufe 10. Castzeit 0,6 Sekunden. Cooldown 152 Sekunden auf Stufe 1, 125 Sekunden auf Stufe 10; bisheriger Stufenverlauf um 2 Sekunden erhöht. Startdurchmesser, Auswahl des ersten Ziels und genaue Schadensbasis werden noch geklärt. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). Vor jedem Tick wird die Zahl der aktuell im Feld stehenden eigenen Gruppenmitglieder einschließlich des Anwenders bestimmt. Genau diese Zahl begrenzt die Anzahl verschiedener angreifbarer Gegner für diesen Tick. Jeder ausgewählte Gegner erhält höchstens einen Schadenstreffer pro Tick. Sind weniger Gegner vorhanden, verfallen freie Zielplätze; ein einzelner Gegner erhält keine zusätzlichen Treffer durch weitere Gruppenmitglieder. Heilung erhalten ausschließlich die eigenen Gruppenmitglieder, die sich zum jeweiligen Heiltick im Feld befinden; jeder erhält den vollen berechneten Heilwert. Vor jedem Tick wird die Zahl der aktuell im Feld stehenden eigenen Gruppenmitglieder einschließlich des Anwenders bestimmt. Genau diese Zahl begrenzt die Anzahl verschiedener angreifbarer Gegner für diesen Tick. Jeder ausgewählte Gegner erhält höchstens einen Schadenstreffer pro Tick. Sind weniger Gegner vorhanden, verfallen freie Zielplätze; ein einzelner Gegner erhält keine zusätzlichen Treffer durch weitere Gruppenmitglieder. Heilung erhalten ausschließlich die eigenen Gruppenmitglieder, die sich zum jeweiligen Heiltick im Feld befinden; jeder erhält den vollen berechneten Heilwert. |
| description_eng | Summons an ether field that deals magical damage to enemies and heals each member of your own group within the field every 2 seconds. Base magical attack per pulse increases from 300 by 73 per additional level to 957. Healing per pulse is 75 HP plus 10 percent of damage to one hit target and 1 percent of damage to each of up to four additional hit targets. Further enemies still take damage but do not contribute to healing. Each group member within the field receives the full healing. Duration starts at 6 seconds, becomes 7 seconds at level 5 and 8 seconds at level 10. Pulses occur at 2, 4, 6 and, where applicable, 8 seconds. Mana cost 110 at level 1, maximum 239 at level 10. Cast time is 0.6 seconds. Cooldown 152 seconds at level 1 and 125 seconds at level 10; previous progression increased by 2 seconds throughout. Starting diameter, primary target selection and exact damage basis remain pending. Before each tick, count own group members currently inside the field, including the caster. This count limits the number of distinct enemy targets for that tick. Each selected enemy receives at most one damage hit per tick. Unused target slots expire; extra group members do not add hits to a single enemy. Only own group members currently inside receive the full calculated healing amount per recipient. Before each tick, count own group members currently inside the field, including the caster. This count limits the number of distinct enemy targets for that tick. Each selected enemy receives at most one damage hit per tick. Unused target slots expire; extra group members do not add hits to a single enemy. Only own group members currently inside receive the full calculated healing amount per recipient. |
| dmgType (Altformat) | spell |
| dur | 6 |
| matk | 300 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 9 |
| skillName_de | Ätherregen |
| skillpoints | 1 |
| castTimeSeconds | 0,6 |
| durationScaling.type | table |
| durationScaling.values[0] | 6 |
| durationScaling.values[1] | 6 |
| durationScaling.values[2] | 6 |
| durationScaling.values[3] | 6 |
| durationScaling.values[4] | 7 |
| durationScaling.values[5] | 7 |
| durationScaling.values[6] | 7 |
| durationScaling.values[7] | 7 |
| durationScaling.values[8] | 7 |
| durationScaling.values[9] | 8 |
| mana (Aktivierungskosten, kein Bonus) | 110 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.values[0] | 110 |
| resourceCosts[0].scaling.values[1] | 118 |
| resourceCosts[0].scaling.values[2] | 126 |
| resourceCosts[0].scaling.values[3] | 133 |
| resourceCosts[0].scaling.values[4] | 141 |
| resourceCosts[0].scaling.values[5] | 149 |
| resourceCosts[0].scaling.values[6] | 156 |
| resourceCosts[0].scaling.values[7] | 164 |
| resourceCosts[0].scaling.values[8] | 172 |
| resourceCosts[0].scaling.values[9] | 239 |
| resourceCosts[0].scaling.base | 110 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 300 |
| statScaling.matk.perLevel | 73 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 152 |
| cooldownScaling.perLevel | -3 |
| effects[0].key | ether-rain-damage |
| effects[0].type | periodicDamage |
| effects[0].target | enemiesInArea |
| effects[0].value | 300 |
| effects[0].unit | flat |
| effects[0].damageTypes[0] | magical |
| effects[0].addsCasterMagicalAttack | true |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 300 |
| effects[0].valueScaling.perLevel | 73 |
| effects[0].intervalSeconds | 2 |
| effects[0].firstTickAfterSeconds | 2 |
| effects[0].durationSeconds | 6 |
| effects[0].durationScaling.type | table |
| effects[0].durationScaling.values[0] | 6 |
| effects[0].durationScaling.values[1] | 6 |
| effects[0].durationScaling.values[2] | 6 |
| effects[0].durationScaling.values[3] | 6 |
| effects[0].durationScaling.values[4] | 7 |
| effects[0].durationScaling.values[5] | 7 |
| effects[0].durationScaling.values[6] | 7 |
| effects[0].durationScaling.values[7] | 7 |
| effects[0].durationScaling.values[8] | 7 |
| effects[0].durationScaling.values[9] | 8 |
| effects[0].periodicDamageKind | areaAttack |
| effects[0].maxHitsPerTargetPerTick | 1 |
| effects[0].redistributeUnusedTargetSlots | false |
| effects[1].key | ether-rain-heal |
| effects[1].type | heal |
| effects[1].target | alliesInArea |
| effects[1].recipientGroup | ownGroup |
| effects[1].distribution | fullAmountToEachRecipient |
| effects[1].value | 75 |
| effects[1].unit | flat |
| effects[1].damageSourceEffectKey | ether-rain-damage |
| effects[1].damageBasisStatus | pending |
| effects[1].primaryTargetSelectionStatus | pending |
| effects[1].healingFromDamage.primaryTargetFraction | 0,1 |
| effects[1].healingFromDamage.additionalTargetFraction | 0,01 |
| effects[1].healingFromDamage.maxAdditionalTargets | 4 |
| effects[1].healingFromDamage.capsDamageTargets | false |
| effects[1].intervalSeconds | 2 |
| effects[1].firstTickAfterSeconds | 2 |
| effects[1].durationSeconds | 6 |
| effects[1].durationScaling.type | table |
| effects[1].durationScaling.values[0] | 6 |
| effects[1].durationScaling.values[1] | 6 |
| effects[1].durationScaling.values[2] | 6 |
| effects[1].durationScaling.values[3] | 6 |
| effects[1].durationScaling.values[4] | 7 |
| effects[1].durationScaling.values[5] | 7 |
| effects[1].durationScaling.values[6] | 7 |
| effects[1].durationScaling.values[7] | 7 |
| effects[1].durationScaling.values[8] | 7 |
| effects[1].durationScaling.values[9] | 8 |
| manaPricing.category | heal |
| manaPricing.factor | 0,35 |
| manaPricing.basis | healingPerRecipient |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | thresholds |
| levelProgression.rules[0].rule.base | 6 |
| levelProgression.rules[0].rule.changes[0].level | 5 |
| levelProgression.rules[0].rule.changes[0].value | 7 |
| levelProgression.rules[0].rule.changes[1].level | 10 |
| levelProgression.rules[0].rule.changes[1].value | 8 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | sum |
| levelProgression.rules[1].rule.rule.terms[0].kind | periodicSteps |
| levelProgression.rules[1].rule.rule.terms[0].base | 110 |
| levelProgression.rules[1].rule.rule.terms[0].steps[0] | 8 |
| levelProgression.rules[1].rule.rule.terms[0].steps[1] | 8 |
| levelProgression.rules[1].rule.rule.terms[0].steps[2] | 7 |
| levelProgression.rules[1].rule.rule.terms[1].kind | thresholds |
| levelProgression.rules[1].rule.rule.terms[1].base | 0 |
| levelProgression.rules[1].rule.rule.terms[1].changes[0].level | 10 |
| levelProgression.rules[1].rule.rule.terms[1].changes[0].value | 60 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 300 |
| levelProgression.rules[2].rule.perLevel | 73 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | cooldownScaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0,1 |
| levelProgression.rules[3].rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.base | 152 |
| levelProgression.rules[3].rule.rule.perLevel | -3 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | valueScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 300 |
| levelProgression.rules[4].rule.perLevel | 73 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | effects |
| levelProgression.rules[5].path[1] | 0 |
| levelProgression.rules[5].path[2] | durationScaling |
| levelProgression.rules[5].rule.kind | thresholds |
| levelProgression.rules[5].rule.base | 6 |
| levelProgression.rules[5].rule.changes[0].level | 5 |
| levelProgression.rules[5].rule.changes[0].value | 7 |
| levelProgression.rules[5].rule.changes[1].level | 10 |
| levelProgression.rules[5].rule.changes[1].value | 8 |
| levelProgression.rules[5].source | verifiedExistingLevels |
| levelProgression.rules[6].path[0] | effects |
| levelProgression.rules[6].path[1] | 1 |
| levelProgression.rules[6].path[2] | durationScaling |
| levelProgression.rules[6].rule.kind | thresholds |
| levelProgression.rules[6].rule.base | 6 |
| levelProgression.rules[6].rule.changes[0].level | 5 |
| levelProgression.rules[6].rule.changes[0].value | 7 |
| levelProgression.rules[6].rule.changes[1].level | 10 |
| levelProgression.rules[6].rule.changes[1].value | 8 |
| levelProgression.rules[6].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |
| attackArea.target | enemiesInArea |
| attackArea.geometryStatus | pending |
| attackArea.maxTargetsFrom | ownGroupMembersCurrentlyInAreaIncludingCaster |
| attackArea.targetSelectionTiming | eachTick |

### 29: Eislanze

Beschwört eine Eislanze, die das Ziel einmalig durchbohrt und seine Rüstung für 5 Sekunden um 5 Prozent verringert. Der magische Grundangriff steigt von 187 um 49 je weiterer Stufe auf 628. Die Mana-Kosten 47 auf Stufe 1, +12 je weiterer Stufe, maximal 155 auf Stufe 10. Die Castzeit beträgt 0,6 Sekunden. Der Cooldown 50 Sekunden auf Stufe 1, 41 Sekunden auf Stufe 10; bisheriger Stufenverlauf um 2 Sekunden erhöht. Die fünf Sekunden betreffen den Rüstungseffekt, keinen Schaden über Zeit. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Ice Lance |
| category | active |
| cd | 50 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| charClass[2] | Druide |
| charClass[3] | Alchemist |
| charClass[4] | Healer |
| charClass[5] | Priest |
| charClass[6] | Luminet |
| charClass[7] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Beschwört eine Eislanze, die das Ziel einmalig durchbohrt und seine Rüstung für 5 Sekunden um 5 Prozent verringert. Der magische Grundangriff steigt von 187 um 49 je weiterer Stufe auf 628. Die Mana-Kosten 47 auf Stufe 1, +12 je weiterer Stufe, maximal 155 auf Stufe 10. Die Castzeit beträgt 0,6 Sekunden. Der Cooldown 50 Sekunden auf Stufe 1, 41 Sekunden auf Stufe 10; bisheriger Stufenverlauf um 2 Sekunden erhöht. Die fünf Sekunden betreffen den Rüstungseffekt, keinen Schaden über Zeit. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Summons an ice lance that pierces the target once and reduces its armor by 5 percent for 5 seconds. Base magical attack increases from 187 by 49 per additional level to 628. Mana cost 47 at level 1, maximum 155 at level 10. Cast time is 0.6 seconds. Cooldown 50 seconds at level 1 and 41 seconds at level 10; previous progression increased by 2 seconds throughout. The five seconds refer to the armor effect, not damage over time. |
| dmgType (Altformat) | spell |
| dur | 5 |
| matk | 187 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 29 |
| skillName_de | Eislanze |
| skillpoints | 1 |
| castTimeSeconds | 0,6 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 50 |
| cooldownScaling.perLevel | -1 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 47 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 47 |
| resourceCosts[0].scaling.perLevel | 12 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 187 |
| statScaling.matk.perLevel | 49 |
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
| levelProgression.rules[0].rule.rule.base | 50 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 47 |
| levelProgression.rules[1].rule.rule.perLevel | 12 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 187 |
| levelProgression.rules[2].rule.perLevel | 49 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 30: Eisranken

Schließt den Gegner in Eisranken ein und hält ihn fest. Der erste Treffer verursacht magischen Grundschaden von 123 auf Stufe 1, plus 37 je weiterer Stufe, bis zu 456 auf Stufe 10. Die Fesselwirkung steigt gleichmäßig von 1 auf 4 Sekunden über zehn Stufen. Währenddessen verursacht ein DoT nach jeder vollen Sekunde 8 festen magischen Schaden auf Stufe 1, plus 4 je weiterer Stufe, bis zu 44 je Tick auf Stufe 10. Der DoT erhält keinen zusätzlichen M-Angriffsbeitrag pro Tick. Auf Stufe 10 ergeben sich vier Ticks mit zusammen 176 und insgesamt 632 Skill-Grundschaden einschließlich erstem Treffer, vor zusätzlichem Charakterangriff auf den ersten Treffer und gegnerischer Verteidigung. Castzeit 0,5 Sekunden, bisheriger Cooldown 22 Sekunden. Mana-Kosten 33 auf Stufe 1, Stufenwerte 33, 43, 53, 69, 80, 91, 110, 123, 135, 158, maximal 158 auf Stufe 10. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Ice Thorns |
| category | active |
| cd | 22 |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| charClass[2] | Healer |
| charClass[3] | Priest |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Schließt den Gegner in Eisranken ein und hält ihn fest. Der erste Treffer verursacht magischen Grundschaden von 123 auf Stufe 1, plus 37 je weiterer Stufe, bis zu 456 auf Stufe 10. Die Fesselwirkung steigt gleichmäßig von 1 auf 4 Sekunden über zehn Stufen. Währenddessen verursacht ein DoT nach jeder vollen Sekunde 8 festen magischen Schaden auf Stufe 1, plus 4 je weiterer Stufe, bis zu 44 je Tick auf Stufe 10. Der DoT erhält keinen zusätzlichen M-Angriffsbeitrag pro Tick. Auf Stufe 10 ergeben sich vier Ticks mit zusammen 176 und insgesamt 632 Skill-Grundschaden einschließlich erstem Treffer, vor zusätzlichem Charakterangriff auf den ersten Treffer und gegnerischer Verteidigung. Castzeit 0,5 Sekunden, bisheriger Cooldown 22 Sekunden. Mana-Kosten 33 auf Stufe 1, Stufenwerte 33, 43, 53, 69, 80, 91, 110, 123, 135, 158, maximal 158 auf Stufe 10. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Encloses the opponent in ice thorns, rooting them. Initial magical base damage starts at 123 at level 1 and increases by 37 per additional level to 456 at level 10. Root duration increases evenly from 1 to 4 seconds over ten levels. During this time a DoT ticks after each full second for 8 flat magical damage at level 1, increasing by 4 per additional level to 44 per tick at level 10. The DoT does not add caster magical attack per tick. At level 10 four ticks deal 176 damage, totaling 632 skill base damage including the initial hit, before additional character attack on the initial hit and enemy defense. Cast time is 0.5 seconds; existing cooldown is 22 seconds. Mana cost 33 at level 1, maximum 158 at level 10. |
| dmgType (Altformat) | spell |
| dur | 1 |
| matk | 123 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 30 |
| skillName_de | Eisranken |
| skillpoints | 1 |
| castTimeSeconds | 0,5 |
| durationScaling.type | linear |
| durationScaling.base | 1 |
| durationScaling.perLevel | 0,333 |
| effects[0].key | ice-thorns-root |
| effects[0].type | control |
| effects[0].controlKind | root |
| effects[0].target | enemy |
| effects[0].actionRestrictionsStatus | defined |
| effects[0].durationSeconds | 1 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 1 |
| effects[0].durationScaling.perLevel | 0,333 |
| effects[1].key | ice-thorns-dot |
| effects[1].type | periodicDamage |
| effects[1].target | enemy |
| effects[1].value | 8 |
| effects[1].unit | flat |
| effects[1].damageTypes[0] | magical |
| effects[1].addsCasterMagicalAttack | false |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | 8 |
| effects[1].valueScaling.perLevel | 4 |
| effects[1].intervalSeconds | 1 |
| effects[1].firstTickAfterSeconds | 1 |
| effects[1].durationSeconds | 1 |
| effects[1].durationScaling.type | linear |
| effects[1].durationScaling.base | 1 |
| effects[1].durationScaling.perLevel | 0,333 |
| hasLingeringDamage | true |
| statScaling.matk.type | linear |
| statScaling.matk.base | 123 |
| statScaling.matk.perLevel | 37 |
| mana (Aktivierungskosten, kein Bonus) | 33 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.values[0] | 33 |
| resourceCosts[0].scaling.values[1] | 43 |
| resourceCosts[0].scaling.values[2] | 53 |
| resourceCosts[0].scaling.values[3] | 69 |
| resourceCosts[0].scaling.values[4] | 80 |
| resourceCosts[0].scaling.values[5] | 91 |
| resourceCosts[0].scaling.values[6] | 110 |
| resourceCosts[0].scaling.values[7] | 123 |
| resourceCosts[0].scaling.values[8] | 135 |
| resourceCosts[0].scaling.values[9] | 158 |
| resourceCosts[0].scaling.base | 33 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.perLevel | 0,333 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.perLevel | 0,333 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 1 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 8 |
| levelProgression.rules[2].rule.perLevel | 4 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 1 |
| levelProgression.rules[3].path[2] | durationScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 1 |
| levelProgression.rules[3].rule.perLevel | 0,333 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | matk |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 123 |
| levelProgression.rules[4].rule.perLevel | 37 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | resourceCosts |
| levelProgression.rules[5].path[1] | 0 |
| levelProgression.rules[5].path[2] | scaling |
| levelProgression.rules[5].rule.kind | outputCost |
| levelProgression.rules[5].rule.factor | 0,25 |
| levelProgression.rules[5].rule.basis | damage |
| levelProgression.rules[5].rule.minimum | 0 |
| levelProgression.rules[5].source | verifiedManaPricing |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 36: Energieschlag

Wirft einen Ball aus purem Licht auf dein Ziel und verursacht einmalig magischen Schaden. Der magische Grundangriff steigt von 25 um 20 je weiterer Stufe auf 205. Die Mana-Kosten 6 auf Stufe 1, +5 je weiterer Stufe, maximal 51 auf Stufe 10. Castzeit 0,15 Sekunden, kein anhaltender Effekt. Der Cooldown beträgt 2,6 Sekunden auf Stufe 1 und sinkt je weiterer Stufe um 0,1 Sekunden: 2,2 Sekunden auf Stufe 5 und 1,7 Sekunden auf Stufe 10. Heiler, Priester, Druide und Alchemist können maximal Stufe 5 lernen. Luminet und Lichtmagier verwenden eine eigene Spezialisierung bis Stufe 20 mit gesondertem Schaden, Mana, Cooldown und Castzeit. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Energy Strike |
| category | active |
| cd | 2,6 |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| charClass[2] | Healer |
| charClass[3] | Priest |
| charClass[4] | Druide |
| charClass[5] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Wirft einen Ball aus purem Licht auf dein Ziel und verursacht einmalig magischen Schaden. Der magische Grundangriff steigt von 25 um 20 je weiterer Stufe auf 205. Die Mana-Kosten 6 auf Stufe 1, +5 je weiterer Stufe, maximal 51 auf Stufe 10. Castzeit 0,15 Sekunden, kein anhaltender Effekt. Der Cooldown beträgt 2,6 Sekunden auf Stufe 1 und sinkt je weiterer Stufe um 0,1 Sekunden: 2,2 Sekunden auf Stufe 5 und 1,7 Sekunden auf Stufe 10. Heiler, Priester, Druide und Alchemist können maximal Stufe 5 lernen. Luminet und Lichtmagier verwenden eine eigene Spezialisierung bis Stufe 20 mit gesondertem Schaden, Mana, Cooldown und Castzeit. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Throws a ball of pure light at your target, dealing magical damage once. Base magical attack increases from 25 by 20 per additional level to 205. Mana cost 6 at level 1, maximum 51 at level 10. Cast time 0.15 seconds, no lasting effect. Cooldown starts at 2.6 seconds at level 1 and decreases by 0.1 seconds per additional level: 2.2 seconds at level 5 and 1.7 seconds at level 10. Healer, Priest, Druid and Alchemist can learn up to level 5. Luminet and Lightmage use a separate specialization with 20 levels and its own damage, Mana, cooldown and cast time. |
| dmgType (Altformat) | spell |
| matk | 25 |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 36 |
| skillName_de | Energieschlag |
| skillpoints | 1 |
| castTimeSeconds | 0,15 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 2,6 |
| cooldownScaling.perLevel | -0,1 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 6 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 6 |
| resourceCosts[0].scaling.perLevel | 5 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 25 |
| statScaling.matk.perLevel | 20 |
| learningLimits.defaultMaxLevel | 5 |
| learningLimits.classOverrides.Healer | 5 |
| learningLimits.classOverrides.Priest | 5 |
| learningLimits.classOverrides.Druide | 5 |
| learningLimits.classOverrides.Alchemist | 5 |
| learningLimits.classOverrides.Luminet | 20 |
| learningLimits.classOverrides.Lightmage | 20 |
| learningLimits.status | defined |
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
| levelProgression.rules[0].rule.rule.base | 2,6 |
| levelProgression.rules[0].rule.rule.perLevel | -0,1 |
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
| levelProgression.rules[2].rule.base | 25 |
| levelProgression.rules[2].rule.perLevel | 20 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classCombatOverrides.luminet.maxSkillLv | 20 |
| classCombatOverrides.luminet.matk | 63 |
| classCombatOverrides.luminet.mana | 16 |
| classCombatOverrides.luminet.cd | 12 |
| classCombatOverrides.luminet.castTimeSeconds | 0,1 |
| classCombatOverrides.luminet.statScaling.matk.type | linear |
| classCombatOverrides.luminet.statScaling.matk.base | 63 |
| classCombatOverrides.luminet.statScaling.matk.perLevel | 24 |
| classCombatOverrides.luminet.cooldownScaling.type | table |
| classCombatOverrides.luminet.cooldownScaling.values[0] | 12 |
| classCombatOverrides.luminet.cooldownScaling.values[1] | 12 |
| classCombatOverrides.luminet.cooldownScaling.values[2] | 12 |
| classCombatOverrides.luminet.cooldownScaling.values[3] | 12 |
| classCombatOverrides.luminet.cooldownScaling.values[4] | 10 |
| classCombatOverrides.luminet.cooldownScaling.values[5] | 10 |
| classCombatOverrides.luminet.cooldownScaling.values[6] | 10 |
| classCombatOverrides.luminet.cooldownScaling.values[7] | 10 |
| classCombatOverrides.luminet.cooldownScaling.values[8] | 10 |
| classCombatOverrides.luminet.cooldownScaling.values[9] | 8 |
| classCombatOverrides.luminet.cooldownScaling.values[10] | 8 |
| classCombatOverrides.luminet.cooldownScaling.values[11] | 8 |
| classCombatOverrides.luminet.cooldownScaling.values[12] | 8 |
| classCombatOverrides.luminet.cooldownScaling.values[13] | 8 |
| classCombatOverrides.luminet.cooldownScaling.values[14] | 6 |
| classCombatOverrides.luminet.cooldownScaling.values[15] | 6 |
| classCombatOverrides.luminet.cooldownScaling.values[16] | 6 |
| classCombatOverrides.luminet.cooldownScaling.values[17] | 6 |
| classCombatOverrides.luminet.cooldownScaling.values[18] | 6 |
| classCombatOverrides.luminet.cooldownScaling.values[19] | 4 |
| classCombatOverrides.luminet.resourceCosts[0].resource | mana |
| classCombatOverrides.luminet.resourceCosts[0].reference | maxMana |
| classCombatOverrides.luminet.resourceCosts[0].unit | flat |
| classCombatOverrides.luminet.resourceCosts[0].scaling.type | linear |
| classCombatOverrides.luminet.resourceCosts[0].scaling.base | 16 |
| classCombatOverrides.luminet.resourceCosts[0].scaling.perLevel | 7 |
| classCombatOverrides.luminet.description_de | Luminet-Spezialisierung von Energieschlag mit 20 lernbaren Stufen. Einmaliger magischer Schaden: 63 Grundschaden auf Stufe 1 und +24 je weiterer Stufe, bis 519 auf Stufe 20, zuzüglich M-Angriff. Mana 16 auf Stufe 1 und +7 je weiterer Stufe, bis 149 auf Stufe 20. Cooldown Stufen 1–4: 12 Sekunden; 5–9: 10 Sekunden; 10–14: 8 Sekunden; 15–19: 6 Sekunden; Stufe 20: 4 Sekunden. Castzeit 0,1 Sekunden. Heiler und Druide behalten ihre eigene Variante und maximal Stufe 5. |
| classCombatOverrides.luminet.description_eng | Luminet specialization of Energy Strike with 20 learnable levels. Deals magical damage once: 63 base damage at level 1 plus 24 per additional level, reaching 519 at level 20, plus magical attack. Mana starts at 16 and increases by 7 per additional level to 149. Cooldown is 12 seconds at levels 1–4, 10 at levels 5–9, 8 at levels 10–14, 6 at levels 15–19 and 4 at level 20. Cast time 0.1 seconds. Healer and Druid retain their own version capped at level 5. |
| classCombatOverrides.luminet.levelProgression.version | 1 |
| classCombatOverrides.luminet.levelProgression.rules[0].path[0] | cooldownScaling |
| classCombatOverrides.luminet.levelProgression.rules[0].rule.kind | bounded |
| classCombatOverrides.luminet.levelProgression.rules[0].rule.min | 0,1 |
| classCombatOverrides.luminet.levelProgression.rules[0].rule.rule.kind | periodicSteps |
| classCombatOverrides.luminet.levelProgression.rules[0].rule.rule.base | 12 |
| classCombatOverrides.luminet.levelProgression.rules[0].rule.rule.steps[0] | 0 |
| classCombatOverrides.luminet.levelProgression.rules[0].rule.rule.steps[1] | 0 |
| classCombatOverrides.luminet.levelProgression.rules[0].rule.rule.steps[2] | 0 |
| classCombatOverrides.luminet.levelProgression.rules[0].rule.rule.steps[3] | -2 |
| classCombatOverrides.luminet.levelProgression.rules[0].rule.rule.steps[4] | 0 |
| classCombatOverrides.luminet.levelProgression.rules[0].source | verifiedExistingLevels |
| classCombatOverrides.luminet.levelProgression.rules[1].path[0] | resourceCosts |
| classCombatOverrides.luminet.levelProgression.rules[1].path[1] | 0 |
| classCombatOverrides.luminet.levelProgression.rules[1].path[2] | scaling |
| classCombatOverrides.luminet.levelProgression.rules[1].rule.kind | bounded |
| classCombatOverrides.luminet.levelProgression.rules[1].rule.min | 0 |
| classCombatOverrides.luminet.levelProgression.rules[1].rule.rule.kind | linear |
| classCombatOverrides.luminet.levelProgression.rules[1].rule.rule.base | 16 |
| classCombatOverrides.luminet.levelProgression.rules[1].rule.rule.perLevel | 7 |
| classCombatOverrides.luminet.levelProgression.rules[1].source | storedFormula |
| classCombatOverrides.luminet.levelProgression.rules[2].path[0] | statScaling |
| classCombatOverrides.luminet.levelProgression.rules[2].path[1] | matk |
| classCombatOverrides.luminet.levelProgression.rules[2].rule.kind | linear |
| classCombatOverrides.luminet.levelProgression.rules[2].rule.base | 63 |
| classCombatOverrides.luminet.levelProgression.rules[2].rule.perLevel | 24 |
| classCombatOverrides.luminet.levelProgression.rules[2].source | storedFormula |
| classCombatOverrides.luminet.levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
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

### 118: Vakuumimpuls

Nach 0,4 Sekunden Castzeit trifft ausschließlich das anvisierte Ziel ein physischer Initialschlag: 266 +178,5 je weiterer Stufe bis 980 Grundschaden, zuzüglich vollem aktuellen P-Angriff. Gegner innerhalb von 2 Metern Ansaugradius (4 Meter Durchmesser) werden zum Skillzentrum gezogen. Zugstärke 110 bei Standard-Lauftempo 100, mit freiwilliger Bewegung kombiniert; der Zug endet am Zentrum. Ansaugdauer und zugehörige Animation werden mit höheren Stufen schneller: 7 / 6,25 / 5,5 / 4,75 / 4 Sekunden. Kein wiederholter Schaden während des Ansaugens. Danach trifft eine einmalige magische Explosion alle Gegner innerhalb von 5 Metern Explosionsradius, einschließlich des ursprünglichen Ziels, falls es noch dort ist: 532 +357 bis 1960 Grundschaden zuzüglich vollem aktuellen M-Angriff je Ziel. Die Ansauganimation folgt der Wirkdauer; die abschließende Explosionsanimation ist noch nicht zeitlich festgelegt und keine zusätzliche definierte Aktionssperre. Zugzonen, Verhalten in der Luft und Unreal-Bewegungseinheiten werden später getestet. Mana unverändert 133 +89 bis 489. Cooldown 100 −2 je weiterer Stufe bis 92 Sekunden.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Vacuum Impulse |
| category | active |
| cd | 100 |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Nach 0,4 Sekunden Castzeit trifft ausschließlich das anvisierte Ziel ein physischer Initialschlag: 266 +178,5 je weiterer Stufe bis 980 Grundschaden, zuzüglich vollem aktuellen P-Angriff. Gegner innerhalb von 2 Metern Ansaugradius (4 Meter Durchmesser) werden zum Skillzentrum gezogen. Zugstärke 110 bei Standard-Lauftempo 100, mit freiwilliger Bewegung kombiniert; der Zug endet am Zentrum. Ansaugdauer und zugehörige Animation werden mit höheren Stufen schneller: 7 / 6,25 / 5,5 / 4,75 / 4 Sekunden. Kein wiederholter Schaden während des Ansaugens. Danach trifft eine einmalige magische Explosion alle Gegner innerhalb von 5 Metern Explosionsradius, einschließlich des ursprünglichen Ziels, falls es noch dort ist: 532 +357 bis 1960 Grundschaden zuzüglich vollem aktuellen M-Angriff je Ziel. Die Ansauganimation folgt der Wirkdauer; die abschließende Explosionsanimation ist noch nicht zeitlich festgelegt und keine zusätzliche definierte Aktionssperre. Zugzonen, Verhalten in der Luft und Unreal-Bewegungseinheiten werden später getestet. Mana unverändert 133 +89 bis 489. Cooldown 100 −2 je weiterer Stufe bis 92 Sekunden. |
| description_eng | After a 0.4-second cast, only the selected target takes physical base damage 266 +178.5 per additional level to 980, plus full current physical attack. Enemies within a 2-meter pull radius (4-meter diameter) are pulled toward the skill center at strength 110 relative to standard movement 100, combined with voluntary movement and stopping at the center. Pull duration and its animation shorten with level: 7 / 6.25 / 5.5 / 4.75 / 4 seconds. No repeated damage during pulling. Then one magical explosion hits enemies within a 5-meter explosion radius, including the original target if still present: base 532 +357 to 1960, plus full current magical attack per target. Pull animation follows effect duration; final explosion animation timing and any additional action lock remain undefined. Pull zones, airborne behavior and Unreal movement units will be tested later. Mana unchanged at 133 +89 to 489. Cooldown 100 minus 2 per additional level to 92 seconds. |
| dmgType (Altformat) | spell |
| dur | 7 |
| matk | 532 |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 118 |
| skillName_de | Vakuumimpuls |
| skillpoints | 1 |
| attackArea.shape | circle |
| attackArea.center | skillCenter |
| attackArea.radiusMeters | 5 |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | atImpact |
| attackArea.timingStatus | defined |
| attackExecution.hitCount | 2 |
| attackExecution.damageValueScope | perApplication |
| attackExecution.hitTimingStatus | defined |
| attackExecution.damagePhases[0].stat | patk |
| attackExecution.damagePhases[0].timing | castEnd |
| attackExecution.damagePhases[0].target | enemy |
| attackExecution.damagePhases[0].addsCasterAttack | true |
| attackExecution.damagePhases[1].stat | matk |
| attackExecution.damagePhases[1].timing | afterSkillDuration |
| attackExecution.damagePhases[1].target | enemiesInArea |
| attackExecution.damagePhases[1].addsCasterAttack | true |
| attackExecution.animationFollowsSkillDuration | true |
| castTimeSeconds | 0,4 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 100 |
| cooldownScaling.perLevel | -2 |
| durationScaling.type | linear |
| durationScaling.base | 7 |
| durationScaling.perLevel | -0,75 |
| effects[0].key | vacuum-impulse-pull |
| effects[0].type | control |
| effects[0].controlKind | pull |
| effects[0].target | enemiesInArea |
| effects[0].pullCenter | skillCenter |
| effects[0].actionRestrictionsStatus | pending |
| effects[0].durationSeconds | 7 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 7 |
| effects[0].durationScaling.perLevel | -0,75 |
| effects[0].pullSpeed | 110 |
| effects[0].pullSpeedReference | standardMovement100 |
| effects[0].combinesWithVoluntaryMovement | true |
| effects[0].stopsAtCenter | true |
| effects[0].airbornePullStatus | pending |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 133 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 133 |
| resourceCosts[0].scaling.perLevel | 89 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 532 |
| statScaling.matk.perLevel | 357 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 266 |
| statScaling.patk.perLevel | 178,5 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| patk | 266 |
| areaSettings.radiusMeters | 2 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 100 |
| levelProgression.rules[0].rule.rule.perLevel | -2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 7 |
| levelProgression.rules[1].rule.perLevel | -0,75 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | durationScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 7 |
| levelProgression.rules[2].rule.perLevel | -0,75 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | resourceCosts |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | scaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0 |
| levelProgression.rules[3].rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.base | 133 |
| levelProgression.rules[3].rule.rule.perLevel | 89 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | matk |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 532 |
| levelProgression.rules[4].rule.perLevel | 357 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | statScaling |
| levelProgression.rules[5].path[1] | patk |
| levelProgression.rules[5].rule.kind | linear |
| levelProgression.rules[5].rule.base | 266 |
| levelProgression.rules[5].rule.perLevel | 178,5 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | mixed |
| type | skill |

### 125: Windfesseln

Trifft den Gegner einmalig mit Windmagie und verlangsamt sein Angriffstempo. 15 Skillstufen mit unveränderten Start- und Maximalwerten. Magischer Grundschaden 223 bis 529 und Mana-Kosten 56 bis 137 gemäß ganzzahligen Stufentabellen. Angriffstempo-Senkung steigt gleichmäßig von 1 auf 10 Prozent, Debuffdauer von einer auf fünf Sekunden. Castzeit 0,2 Sekunden, Grund-Cooldown 37 Sekunden. Keine zusätzliche Bewegungsfessel und kein Schaden über Zeit.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Wind Shackles |
| category | active |
| cd | 37 |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Trifft den Gegner einmalig mit Windmagie und verlangsamt sein Angriffstempo. 15 Skillstufen mit unveränderten Start- und Maximalwerten. Magischer Grundschaden 223 bis 529 und Mana-Kosten 56 bis 137 gemäß ganzzahligen Stufentabellen. Angriffstempo-Senkung steigt gleichmäßig von 1 auf 10 Prozent, Debuffdauer von einer auf fünf Sekunden. Castzeit 0,2 Sekunden, Grund-Cooldown 37 Sekunden. Keine zusätzliche Bewegungsfessel und kein Schaden über Zeit. |
| description_eng | Hits the enemy once with wind magic and slows attack speed. Fifteen levels retain former starting and maximum values. Magical base damage 223 to 529 and Mana cost 56 to 137 follow integer level tables. Attack speed reduction increases evenly from 1 to 10 percent and debuff duration from one to five seconds. Cast time 0.2 seconds, base cooldown 37 seconds. No additional movement root or damage over time. |
| dmgType (Altformat) | spell |
| dur | 1 |
| matk | 223 |
| maxSkillLv | 15 |
| maxUpgradeLv | 10 |
| nr | 125 |
| skillName_de | Windfesseln |
| skillpoints | 1 |
| castTimeSeconds | 0,2 |
| durationScaling.type | linear |
| durationScaling.base | 1 |
| durationScaling.perLevel | 0,286 |
| effects[0].key | wind-shackles-attack-speed |
| effects[0].type | statModifier |
| effects[0].target | enemy |
| effects[0].stat | atkSpeed |
| effects[0].reference | targetStat |
| effects[0].unit | fraction |
| effects[0].value | -0,01 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | -0,01 |
| effects[0].valueScaling.perLevel | -0,006 |
| effects[0].durationSeconds | 1 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 1 |
| effects[0].durationScaling.perLevel | 0,286 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 56 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 56 |
| resourceCosts[0].scaling.values[0] | 56 |
| resourceCosts[0].scaling.values[1] | 62 |
| resourceCosts[0].scaling.values[2] | 68 |
| resourceCosts[0].scaling.values[3] | 73 |
| resourceCosts[0].scaling.values[4] | 79 |
| resourceCosts[0].scaling.values[5] | 85 |
| resourceCosts[0].scaling.values[6] | 91 |
| resourceCosts[0].scaling.values[7] | 97 |
| resourceCosts[0].scaling.values[8] | 102 |
| resourceCosts[0].scaling.values[9] | 108 |
| resourceCosts[0].scaling.values[10] | 114 |
| resourceCosts[0].scaling.values[11] | 120 |
| resourceCosts[0].scaling.values[12] | 125 |
| resourceCosts[0].scaling.values[13] | 131 |
| resourceCosts[0].scaling.values[14] | 137 |
| statScaling.matk.type | table |
| statScaling.matk.base | 223 |
| statScaling.matk.values[0] | 223 |
| statScaling.matk.values[1] | 245 |
| statScaling.matk.values[2] | 267 |
| statScaling.matk.values[3] | 289 |
| statScaling.matk.values[4] | 310 |
| statScaling.matk.values[5] | 332 |
| statScaling.matk.values[6] | 354 |
| statScaling.matk.values[7] | 376 |
| statScaling.matk.values[8] | 398 |
| statScaling.matk.values[9] | 420 |
| statScaling.matk.values[10] | 442 |
| statScaling.matk.values[11] | 463 |
| statScaling.matk.values[12] | 485 |
| statScaling.matk.values[13] | 507 |
| statScaling.matk.values[14] | 529 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.perLevel | 0,286 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | -0,01 |
| levelProgression.rules[1].rule.perLevel | -0,006 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | durationScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 1 |
| levelProgression.rules[2].rule.perLevel | 0,286 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | resourceCosts |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | scaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0 |
| levelProgression.rules[3].rule.rule.kind | rounded |
| levelProgression.rules[3].rule.rule.mode | round |
| levelProgression.rules[3].rule.rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.rule.base | 56 |
| levelProgression.rules[3].rule.rule.rule.perLevel | 5,786 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | matk |
| levelProgression.rules[4].rule.kind | periodicSteps |
| levelProgression.rules[4].rule.base | 223 |
| levelProgression.rules[4].rule.steps[0] | 22 |
| levelProgression.rules[4].rule.steps[1] | 22 |
| levelProgression.rules[4].rule.steps[2] | 22 |
| levelProgression.rules[4].rule.steps[3] | 21 |
| levelProgression.rules[4].rule.steps[4] | 22 |
| levelProgression.rules[4].rule.steps[5] | 22 |
| levelProgression.rules[4].rule.steps[6] | 22 |
| levelProgression.rules[4].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 132: Zweihändiges Streitkolbentraining

Verbessert dauerhaft deinen Umgang mit zweihändigen Streitkolben. Auf Skilllevel 1 erhältst du 1 Stärke und 2 Intelligenz. Je weiterer Stufe steigt abwechselnd Intelligenz oder Stärke um 1, beginnend mit Intelligenz auf Stufe 2. Auf Stufe 10 insgesamt 5 Stärke und 7 Intelligenz. Die Boni gelten einmal für den Charakter. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Two-handed Mace Training |
| category | passive |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Verbessert dauerhaft deinen Umgang mit zweihändigen Streitkolben. Auf Skilllevel 1 erhältst du 1 Stärke und 2 Intelligenz. Je weiterer Stufe steigt abwechselnd Intelligenz oder Stärke um 1, beginnend mit Intelligenz auf Stufe 2. Auf Stufe 10 insgesamt 5 Stärke und 7 Intelligenz. Die Boni gelten einmal für den Charakter. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanently improves proficiency with two-handed maces. Level 1 grants 1 Strength and 2 Intelligence. Each additional level alternately adds 1 Intelligence or Strength, starting with Intelligence at level 2. Level 10 grants 5 Strength and 7 Intelligence in total. Bonuses apply once to the character. No activation cost, cast time or cooldown. |
| dmgType (Altformat) | passive |
| int | 2 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 132 |
| skillName_de | Zweihändiges Streitkolbentraining |
| skillpoints | 1 |
| str | 1 |
| resourceCosts | [] |
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
| statScaling.int.type | table |
| statScaling.int.values[0] | 2 |
| statScaling.int.values[1] | 3 |
| statScaling.int.values[2] | 3 |
| statScaling.int.values[3] | 4 |
| statScaling.int.values[4] | 4 |
| statScaling.int.values[5] | 5 |
| statScaling.int.values[6] | 5 |
| statScaling.int.values[7] | 6 |
| statScaling.int.values[8] | 6 |
| statScaling.int.values[9] | 7 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | periodicSteps |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.steps[0] | 0 |
| levelProgression.rules[0].rule.steps[1] | 1 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | int |
| levelProgression.rules[1].rule.kind | periodicSteps |
| levelProgression.rules[1].rule.base | 2 |
| levelProgression.rules[1].rule.steps[0] | 1 |
| levelProgression.rules[1].rule.steps[1] | 0 |
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

### 193: Macht des Wassers

Gruppenbuff: +15 direkte MP-Regeneration je Tick auf Stufe 1, +5 je weiterer Stufe, maximal +60. Zusätzlich magischer Skillschaden: 0 auf Stufe 1, +9 je weiterer Stufe bis +81 auf Stufe 10. Kein direkter M-Angriffsbonus. Der Schadensbonus gilt je passendem Skilltreffer mit Angriffsanteil, bei Mehrfachtreffern entsprechend je Treffer. Periodischer Schaden mit Charakterangriffsanteil profitiert ebenfalls. Keine Wirkung auf normale Auto-Attacks, Begleiterangriffe oder reine feste Rest-DoTs. Normale Attribute, Waffen und Self-Buffs skalieren weiterhin wie bisher. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten 54 +16 je weiterer Stufe, maximal 198.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Power of the Water |
| category | active |
| cd | 60 |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Gruppenbuff: +15 direkte MP-Regeneration je Tick auf Stufe 1, +5 je weiterer Stufe, maximal +60. Zusätzlich magischer Skillschaden: 0 auf Stufe 1, +9 je weiterer Stufe bis +81 auf Stufe 10. Kein direkter M-Angriffsbonus. Der Schadensbonus gilt je passendem Skilltreffer mit Angriffsanteil, bei Mehrfachtreffern entsprechend je Treffer. Periodischer Schaden mit Charakterangriffsanteil profitiert ebenfalls. Keine Wirkung auf normale Auto-Attacks, Begleiterangriffe oder reine feste Rest-DoTs. Normale Attribute, Waffen und Self-Buffs skalieren weiterhin wie bisher. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten 54 +16 je weiterer Stufe, maximal 198. |
| description_eng | Group buff: +15 direct Mana regeneration per tick at level 1, +5 per additional level, reaching +60. Also adds magical skill damage: 0 at level 1, +9 per additional level to +81 at level 10. No direct magical attack bonus. The damage bonus applies to matching skill hits with an attack contribution, including each hit of multi-hit skills and periodic hits that add character attack. Does not affect normal basic attacks, companion attacks or purely fixed residual DoTs. Normal attributes, weapons and self buffs retain their existing scaling. Duration 30 minutes, cooldown 60 seconds, cast time 0.3 seconds. Mana cost 54 +16 per additional level, reaching 198. |
| dmgType (Altformat) | buff |
| dur | 1.800 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 193 |
| skillName_de | Macht des Wassers |
| skillpoints | 1 |
| manaRegen | 15 |
| statScaling.manaRegen.type | linear |
| statScaling.manaRegen.base | 15 |
| statScaling.manaRegen.perLevel | 5 |
| castTimeSeconds | 0,3 |
| mana (Aktivierungskosten, kein Bonus) | 54 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 54 |
| resourceCosts[0].scaling.perLevel | 16 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | manaRegen |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 15 |
| levelProgression.rules[0].rule.perLevel | 5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 54 |
| levelProgression.rules[1].rule.rule.perLevel | 16 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
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
| effects[0].key | group-magical-skill-damage |
| effects[0].type | damageBonus |
| effects[0].target | self |
| effects[0].appliesTo | allSkills |
| effects[0].damageTypes[0] | magical |
| effects[0].value | 0 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0 |
| effects[0].valueScaling.perLevel | 9 |
| effects[0].durationSeconds | 1.800 |
| effectsVersion | 1 |

### 194: Herr der Elemente

Eigenbuff mit zehn Stufen für 600 Sekunden. Stärke, Vitalität und Willenskraft steigen jeweils gemäß Stufentabelle 1/1/2/2/3/3/4/4/5/5. Intelligenz steigt um 2 je Skillstufe von 2 auf 20. Wirkt ausschließlich auf dich selbst; keine Faith- oder Victim-Boni. Aktivierungskosten unverändert: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana vor Rabatten. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist von der Castzeit getrennt. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Master of the Elements |
| category | active |
| cd | 60 |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff mit zehn Stufen für 600 Sekunden. Stärke, Vitalität und Willenskraft steigen jeweils gemäß Stufentabelle 1/1/2/2/3/3/4/4/5/5. Intelligenz steigt um 2 je Skillstufe von 2 auf 20. Wirkt ausschließlich auf dich selbst; keine Faith- oder Victim-Boni. Aktivierungskosten unverändert: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana vor Rabatten. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist von der Castzeit getrennt. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff with ten levels lasting 600 seconds. Strength, Vitality and Wisdom each follow the level table 1/1/2/2/3/3/4/4/5/5. Intelligence increases by 2 per skill level, from 2 to 20. Affects only the caster; no Faith or Victim bonuses. Activation costs unchanged: 50 Mana at level 1 plus 13 per additional level, up to 167 Mana before discounts. Cooldown 60 seconds; fixed cast time 0.1 seconds at all levels, unaffected by attack or cast speed. Animation duration is separate. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 600 |
| int | 2 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 194 |
| skillName_de | Herr der Elemente |
| skillpoints | 1 |
| str | 1 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statScaling.str.type | table |
| statScaling.str.base | 1 |
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
| statScaling.vita.type | table |
| statScaling.vita.base | 1 |
| statScaling.vita.values[0] | 1 |
| statScaling.vita.values[1] | 1 |
| statScaling.vita.values[2] | 2 |
| statScaling.vita.values[3] | 2 |
| statScaling.vita.values[4] | 3 |
| statScaling.vita.values[5] | 3 |
| statScaling.vita.values[6] | 4 |
| statScaling.vita.values[7] | 4 |
| statScaling.vita.values[8] | 5 |
| statScaling.vita.values[9] | 5 |
| statScaling.wis.type | table |
| statScaling.wis.base | 1 |
| statScaling.wis.values[0] | 1 |
| statScaling.wis.values[1] | 1 |
| statScaling.wis.values[2] | 2 |
| statScaling.wis.values[3] | 2 |
| statScaling.wis.values[4] | 3 |
| statScaling.wis.values[5] | 3 |
| statScaling.wis.values[6] | 4 |
| statScaling.wis.values[7] | 4 |
| statScaling.wis.values[8] | 5 |
| statScaling.wis.values[9] | 5 |
| statScaling.int.type | linear |
| statScaling.int.base | 2 |
| statScaling.int.perLevel | 2 |
| statBonusTargets.str | self |
| statBonusTargets.vita | self |
| statBonusTargets.wis | self |
| statBonusTargets.int | self |
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
| levelProgression.rules[1].rule.kind | periodicSteps |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.steps[0] | 0 |
| levelProgression.rules[1].rule.steps[1] | 1 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | vita |
| levelProgression.rules[2].rule.kind | periodicSteps |
| levelProgression.rules[2].rule.base | 1 |
| levelProgression.rules[2].rule.steps[0] | 0 |
| levelProgression.rules[2].rule.steps[1] | 1 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | wis |
| levelProgression.rules[3].rule.kind | periodicSteps |
| levelProgression.rules[3].rule.base | 1 |
| levelProgression.rules[3].rule.steps[0] | 0 |
| levelProgression.rules[3].rule.steps[1] | 1 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | int |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 2 |
| levelProgression.rules[4].rule.perLevel | 2 |
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
| vita | 1 |
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

### 203: Kanalisierung

Dauerhafter Attributanteil: je gelernter Stufe +1 Stärke, +0,5 Vitalität, +0,8 Intelligenz, +0,5 Willenskraft; auf Stufe 10 insgesamt +10 Stärke, +5 Vitalität, +8 Intelligenz, +5 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Erhöht dauerhaft dein maximales Mana um 100 auf Skilllevel 1. Je weiterer Stufe steigt der Bonus um 85, bis zu 865 auf Stufe 10. Permanenter passiver Skill ohne Trigger, Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer. Der Bonus erhöht den maximalen Manapool und stellt kein Mana unmittelbar wieder her.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Channeling |
| category | passive |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +1 Stärke, +0,5 Vitalität, +0,8 Intelligenz, +0,5 Willenskraft; auf Stufe 10 insgesamt +10 Stärke, +5 Vitalität, +8 Intelligenz, +5 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Erhöht dauerhaft dein maximales Mana um 100 auf Skilllevel 1. Je weiterer Stufe steigt der Bonus um 85, bis zu 865 auf Stufe 10. Permanenter passiver Skill ohne Trigger, Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer. Der Bonus erhöht den maximalen Manapool und stellt kein Mana unmittelbar wieder her. |
| description_eng | Permanent attribute component: +1 Strength, +0.5 Vitality, +0.8 Intelligence, +0.5 Wisdom per learned level; at level 10, +10 Strength, +5 Vitality, +8 Intelligence, +5 Wisdom total. This component always applies independently of any triggered effects. Permanently increases maximum Mana by 100 at skill level 1. Each additional level adds 85, reaching 865 at level 10. Permanent passive skill with no trigger, activation costs, cast time, cooldown or limited duration. The bonus increases the maximum Mana pool and does not directly restore Mana. |
| dmgType (Altformat) | passive |
| mana | 100 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 203 |
| skillName_de | Kanalisierung |
| skillpoints | 1 |
| resourceCosts | [] |
| statScaling.mana.type | linear |
| statScaling.mana.base | 100 |
| statScaling.mana.perLevel | 85 |
| statScaling.str.type | linear |
| statScaling.str.base | 1 |
| statScaling.str.perLevel | 1 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 0,5 |
| statScaling.vita.perLevel | 0,5 |
| statScaling.int.type | linear |
| statScaling.int.base | 0,8 |
| statScaling.int.perLevel | 0,8 |
| statScaling.wis.type | linear |
| statScaling.wis.base | 0,5 |
| statScaling.wis.perLevel | 0,5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | mana |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 100 |
| levelProgression.rules[0].rule.perLevel | 85 |
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
| levelProgression.rules[2].rule.base | 0,5 |
| levelProgression.rules[2].rule.perLevel | 0,5 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | int |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 0,8 |
| levelProgression.rules[3].rule.perLevel | 0,8 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | wis |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 0,5 |
| levelProgression.rules[4].rule.perLevel | 0,5 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |
| int | 0,8 |
| str | 1 |
| vita | 0,5 |
| wis | 0,5 |

### 204: Katalysator Rein

Erschafft ein Verstärkungsfeld für Gruppenmitglieder der Völker Aurora. Im Feld steigen ihr physischer Angriff um 25 und ihr magischer Angriff um 50 pro Skilllevel. Auf Stufe 5 sind dies +125 P-Angriff und +250 M-Angriff. Die Felddauer beträgt 24 Sekunden auf Stufe 1 und steigt um 2 Sekunden je weiterer Stufe auf 32 Sekunden. Der Cooldown beginnt bei 180 Sekunden und sinkt um 2 Sekunden je weiterer Stufe auf 172 Sekunden. In einem bereits von einem Katalysator belegten Gebiet kann kein weiterer Katalysator platziert werden. Castzeit 1,8 Sekunden. Mana-Kosten unverändert 198 auf Stufe 1, plus 87 je weiterer Stufe bis 546 auf Stufe 5.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Catalyst Pure |
| category | active |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erschafft ein Verstärkungsfeld für Gruppenmitglieder der Völker Aurora. Im Feld steigen ihr physischer Angriff um 25 und ihr magischer Angriff um 50 pro Skilllevel. Auf Stufe 5 sind dies +125 P-Angriff und +250 M-Angriff. Die Felddauer beträgt 24 Sekunden auf Stufe 1 und steigt um 2 Sekunden je weiterer Stufe auf 32 Sekunden. Der Cooldown beginnt bei 180 Sekunden und sinkt um 2 Sekunden je weiterer Stufe auf 172 Sekunden. In einem bereits von einem Katalysator belegten Gebiet kann kein weiterer Katalysator platziert werden. Castzeit 1,8 Sekunden. Mana-Kosten unverändert 198 auf Stufe 1, plus 87 je weiterer Stufe bis 546 auf Stufe 5. |
| description_eng | Creates an enhancement field for Aurora group members. Within the field, physical attack increases by 25 and magical attack by 50 per skill level, reaching +125 physical and +250 magical attack at level 5. Field duration starts at 24 seconds and increases by 2 per additional level to 32 seconds. Cooldown starts at 180 seconds and decreases by 2 per additional level to 172 seconds. Another catalyst cannot be placed in an area already occupied by a catalyst. Cast time is 1.8 seconds. Mana cost remains 198 at level 1, plus 87 per additional level to 546 at level 5. |
| dmgType (Altformat) | spell |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 204 |
| skillName_de | Katalysator Rein |
| skillpoints | 1 |
| activation | manual |
| areaSettings.exclusiveGroup | catalystField |
| areaSettings.overlapPolicy | rejectPlacement |
| cd | 180 |
| dur | 24 |
| durationScaling.type | linear |
| durationScaling.base | 24 |
| durationScaling.perLevel | 2 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 25 |
| effects[0].valueScaling.perLevel | 25 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 24 |
| effects[0].durationScaling.perLevel | 2 |
| effects[0].type | statModifier |
| effects[0].target | alliesInArea |
| effects[0].allowedRaces[0] | Aurora |
| effects[0].stat | patk |
| effects[0].value | 25 |
| effects[0].unit | flat |
| effects[0].damageTypes | [] |
| effects[0].durationSeconds | 24 |
| effects[0].key | field-patk |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | 50 |
| effects[1].valueScaling.perLevel | 50 |
| effects[1].durationScaling.type | linear |
| effects[1].durationScaling.base | 24 |
| effects[1].durationScaling.perLevel | 2 |
| effects[1].type | statModifier |
| effects[1].target | alliesInArea |
| effects[1].allowedRaces[0] | Aurora |
| effects[1].stat | matk |
| effects[1].value | 50 |
| effects[1].unit | flat |
| effects[1].damageTypes | [] |
| effects[1].durationSeconds | 24 |
| effects[1].key | field-matk |
| effectsVersion | 1 |
| castTimeSeconds | 1,8 |
| mana (Aktivierungskosten, kein Bonus) | 198 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 198 |
| resourceCosts[0].scaling.perLevel | 87 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 180 |
| cooldownScaling.perLevel | -2 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 24 |
| levelProgression.rules[0].rule.perLevel | 2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 25 |
| levelProgression.rules[1].rule.perLevel | 25 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | durationScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 24 |
| levelProgression.rules[2].rule.perLevel | 2 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 1 |
| levelProgression.rules[3].path[2] | valueScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 50 |
| levelProgression.rules[3].rule.perLevel | 50 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 1 |
| levelProgression.rules[4].path[2] | durationScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 24 |
| levelProgression.rules[4].rule.perLevel | 2 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | resourceCosts |
| levelProgression.rules[5].path[1] | 0 |
| levelProgression.rules[5].path[2] | scaling |
| levelProgression.rules[5].rule.kind | bounded |
| levelProgression.rules[5].rule.min | 0 |
| levelProgression.rules[5].rule.rule.kind | linear |
| levelProgression.rules[5].rule.rule.base | 198 |
| levelProgression.rules[5].rule.rule.perLevel | 87 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.rules[6].path[0] | cooldownScaling |
| levelProgression.rules[6].rule.kind | bounded |
| levelProgression.rules[6].rule.min | 0,1 |
| levelProgression.rules[6].rule.rule.kind | linear |
| levelProgression.rules[6].rule.rule.base | 180 |
| levelProgression.rules[6].rule.rule.perLevel | -2 |
| levelProgression.rules[6].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | skill |

### 212: Himmelsbrecher

Trifft zweimal mit kombiniertem physischem und magischem Schaden. 20 Skillstufen. Der erste Treffer verursacht 344 bis 2785 physischen und 592 bis 4197 magischen Grundschaden, jeweils zuzüglich des vollen aktuellen P- beziehungsweise M-Angriffs. Der zweite Treffer nach vorläufig 2,5 Sekunden verursacht 80 Prozent dieses gesamten kombinierten Schadens. Die gespeicherten ganzzahligen Wachstumsregeln werden über Stufe 10 hinaus fortgeführt; die bisherigen Stufen 1 bis 10 bleiben unverändert. Kein DoT. Castzeit 0,6 Sekunden. Cooldown 137 Sekunden auf Stufe 1, minus 1 je weiterer Stufe bis 118 auf Stufe 20. Mana nach der 25-Prozent-Regel aus dem gesamten Skill-Grundschaden beider Treffer, ohne Charakterangriff oder Gegnerzahl: 421 bis 3142. Trefferbereich bleibt offen.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Skybreaker |
| category | active |
| cd | 137 |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Trifft zweimal mit kombiniertem physischem und magischem Schaden. 20 Skillstufen. Der erste Treffer verursacht 344 bis 2785 physischen und 592 bis 4197 magischen Grundschaden, jeweils zuzüglich des vollen aktuellen P- beziehungsweise M-Angriffs. Der zweite Treffer nach vorläufig 2,5 Sekunden verursacht 80 Prozent dieses gesamten kombinierten Schadens. Die gespeicherten ganzzahligen Wachstumsregeln werden über Stufe 10 hinaus fortgeführt; die bisherigen Stufen 1 bis 10 bleiben unverändert. Kein DoT. Castzeit 0,6 Sekunden. Cooldown 137 Sekunden auf Stufe 1, minus 1 je weiterer Stufe bis 118 auf Stufe 20. Mana nach der 25-Prozent-Regel aus dem gesamten Skill-Grundschaden beider Treffer, ohne Charakterangriff oder Gegnerzahl: 421 bis 3142. Trefferbereich bleibt offen. |
| description_eng | Two hits dealing combined physical and magical damage over 20 skill levels. First hit: 344 to 2785 physical and 592 to 4197 magical base damage, plus full current physical and magical attack respectively. Second hit after a provisional 2.5 seconds deals 80% of that total. Existing integer progression rules extend beyond level 10; levels 1–10 are unchanged. No damage over time. Cast time 0.6 seconds. Cooldown 137 seconds, minus 1 per additional level to 118. Mana follows the 25% rule for total base damage of both hits, excluding character attack and target count: 421 to 3142. Hit area remains undefined. |
| dmgType (Altformat) | spell |
| matk | 592 |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 212 |
| patk | 344 |
| skillName_de | Himmelsbrecher |
| skillpoints | 1 |
| animationDurationSeconds | 2,5 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,6 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 421 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 421 |
| resourceCosts[0].scaling.values[0] | 421 |
| resourceCosts[0].scaling.values[1] | 564 |
| resourceCosts[0].scaling.values[2] | 708 |
| resourceCosts[0].scaling.values[3] | 851 |
| resourceCosts[0].scaling.values[4] | 994 |
| resourceCosts[0].scaling.values[5] | 1.137 |
| resourceCosts[0].scaling.values[6] | 1.281 |
| resourceCosts[0].scaling.values[7] | 1.423 |
| resourceCosts[0].scaling.values[8] | 1.567 |
| resourceCosts[0].scaling.values[9] | 1.710 |
| resourceCosts[0].scaling.values[10] | 1.854 |
| resourceCosts[0].scaling.values[11] | 1.996 |
| resourceCosts[0].scaling.values[12] | 2.140 |
| resourceCosts[0].scaling.values[13] | 2.283 |
| resourceCosts[0].scaling.values[14] | 2.426 |
| resourceCosts[0].scaling.values[15] | 2.569 |
| resourceCosts[0].scaling.values[16] | 2.713 |
| resourceCosts[0].scaling.values[17] | 2.856 |
| resourceCosts[0].scaling.values[18] | 2.999 |
| resourceCosts[0].scaling.values[19] | 3.142 |
| statScaling.patk.type | table |
| statScaling.patk.values[0] | 344 |
| statScaling.patk.values[1] | 472 |
| statScaling.patk.values[2] | 601 |
| statScaling.patk.values[3] | 729 |
| statScaling.patk.values[4] | 858 |
| statScaling.patk.values[5] | 986 |
| statScaling.patk.values[6] | 1.115 |
| statScaling.patk.values[7] | 1.243 |
| statScaling.patk.values[8] | 1.372 |
| statScaling.patk.values[9] | 1.500 |
| statScaling.patk.values[10] | 1.629 |
| statScaling.patk.values[11] | 1.757 |
| statScaling.patk.values[12] | 1.886 |
| statScaling.patk.values[13] | 2.014 |
| statScaling.patk.values[14] | 2.143 |
| statScaling.patk.values[15] | 2.271 |
| statScaling.patk.values[16] | 2.400 |
| statScaling.patk.values[17] | 2.528 |
| statScaling.patk.values[18] | 2.657 |
| statScaling.patk.values[19] | 2.785 |
| statScaling.matk.type | table |
| statScaling.matk.values[0] | 592 |
| statScaling.matk.values[1] | 782 |
| statScaling.matk.values[2] | 972 |
| statScaling.matk.values[3] | 1.161 |
| statScaling.matk.values[4] | 1.351 |
| statScaling.matk.values[5] | 1.541 |
| statScaling.matk.values[6] | 1.731 |
| statScaling.matk.values[7] | 1.920 |
| statScaling.matk.values[8] | 2.110 |
| statScaling.matk.values[9] | 2.300 |
| statScaling.matk.values[10] | 2.490 |
| statScaling.matk.values[11] | 2.679 |
| statScaling.matk.values[12] | 2.869 |
| statScaling.matk.values[13] | 3.059 |
| statScaling.matk.values[14] | 3.249 |
| statScaling.matk.values[15] | 3.438 |
| statScaling.matk.values[16] | 3.628 |
| statScaling.matk.values[17] | 3.818 |
| statScaling.matk.values[18] | 4.008 |
| statScaling.matk.values[19] | 4.197 |
| attackExecution.hitCount | 2 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | pending |
| attackExecution.hitSequence[0].offsetSeconds | 0 |
| attackExecution.hitSequence[0].damageMultiplier | 1 |
| attackExecution.hitSequence[1].offsetSeconds | 2,5 |
| attackExecution.hitSequence[1].damageMultiplier | 0,8 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 137 |
| cooldownScaling.perLevel | -1 |
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
| levelProgression.rules[1].rule.kind | periodicSteps |
| levelProgression.rules[1].rule.base | 344 |
| levelProgression.rules[1].rule.steps[0] | 128 |
| levelProgression.rules[1].rule.steps[1] | 129 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | periodicSteps |
| levelProgression.rules[2].rule.base | 592 |
| levelProgression.rules[2].rule.steps[0] | 190 |
| levelProgression.rules[2].rule.steps[1] | 190 |
| levelProgression.rules[2].rule.steps[2] | 189 |
| levelProgression.rules[2].rule.steps[3] | 190 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.rules[3].path[0] | cooldownScaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0,1 |
| levelProgression.rules[3].rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.base | 137 |
| levelProgression.rules[3].rule.rule.perLevel | -1 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | mixed |
| type | skill |

### 219: Manaexplosion

Opfert dein gesamtes aktuell verfügbares Mana für eine gewaltige einmalige Explosion. Die Kosten betragen 100 Prozent des aktuellen Manas. Der magische Grundschaden beträgt auf allen Skillstufen 383. Zusätzlich verursacht die Explosion Schaden in Höhe von 30 Prozent des tatsächlich geopferten Manas. Bei 10000 geopfertem Mana ergibt das 3383 Schaden vor weiteren Angriffs- und Verteidigungsberechnungen. Castzeit 1,2 Sekunden, Cooldown 360 Sekunden. Kein Schaden über Zeit und keine anhaltende Wirkungsdauer. Animationsdauer und Trefferbereich werden später festgelegt.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Mana Explosion |
| category | active |
| cd | 360 |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Opfert dein gesamtes aktuell verfügbares Mana für eine gewaltige einmalige Explosion. Die Kosten betragen 100 Prozent des aktuellen Manas. Der magische Grundschaden beträgt auf allen Skillstufen 383. Zusätzlich verursacht die Explosion Schaden in Höhe von 30 Prozent des tatsächlich geopferten Manas. Bei 10000 geopfertem Mana ergibt das 3383 Schaden vor weiteren Angriffs- und Verteidigungsberechnungen. Castzeit 1,2 Sekunden, Cooldown 360 Sekunden. Kein Schaden über Zeit und keine anhaltende Wirkungsdauer. Animationsdauer und Trefferbereich werden später festgelegt. |
| description_eng | Sacrifices all currently available Mana for a powerful single explosion. Costs 100 percent of current Mana. Base magical damage is 383 at every skill level. The explosion additionally deals damage equal to 30 percent of the Mana actually sacrificed. Spending 10000 Mana gives 3383 damage before other attack and defense calculations. Cast time is 1.2 seconds, cooldown is 360 seconds. No damage over time or lasting effect. Animation duration and hit area will be defined later. |
| dmgType (Altformat) | spell |
| matk | 383 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 219 |
| skillName_de | Manaexplosion |
| skillpoints | 1 |
| castTimeSeconds | 1,2 |
| hasLingeringDamage | false |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | currentMana |
| resourceCosts[0].unit | fraction |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 1 |
| statScaling.matk.type | table |
| statScaling.matk.values[0] | 383 |
| statScaling.matk.values[1] | 383 |
| statScaling.matk.values[2] | 383 |
| statScaling.matk.values[3] | 383 |
| statScaling.matk.values[4] | 383 |
| statScaling.matk.values[5] | 383 |
| statScaling.matk.values[6] | 383 |
| statScaling.matk.values[7] | 383 |
| statScaling.matk.values[8] | 383 |
| statScaling.matk.values[9] | 383 |
| damageFromResourceCost.resource | mana |
| damageFromResourceCost.basis | actualAmountSpent |
| damageFromResourceCost.multiplier | 0,3 |
| damageFromResourceCost.damageType | magical |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.max | 1 |
| levelProgression.rules[0].rule.rule.kind | constant |
| levelProgression.rules[0].rule.rule.value | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | matk |
| levelProgression.rules[1].rule.kind | constant |
| levelProgression.rules[1].rule.value | 383 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 220: Bannmagie

Belegt den Gegner mit einem Bann, der das Wirken von Spells für 3 Sekunden unterdrückt. Wirkt auch auf Bosse. Auf Skilllevel 10 steigt die Banndauer auf 4 Sekunden. Verursacht zusätzlich einmalig magischen Grundschaden von 37 auf Stufe 1, plus 13 je weiterer Stufe, bis zu 154. Mana-Kosten 9 auf Stufe 1, +3 je weiterer Stufe, maximal 36 auf Stufe 10. Vorläufige Castzeit 0,2 Sekunden. Der bisherige Cooldown beträgt 540 Sekunden. Ein erfolgreicher Treffer bricht einen bereits laufenden Zauber des Ziels sofort ab. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Magic Ban |
| category | active |
| cd | 540 |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Belegt den Gegner mit einem Bann, der das Wirken von Spells für 3 Sekunden unterdrückt. Wirkt auch auf Bosse. Auf Skilllevel 10 steigt die Banndauer auf 4 Sekunden. Verursacht zusätzlich einmalig magischen Grundschaden von 37 auf Stufe 1, plus 13 je weiterer Stufe, bis zu 154. Mana-Kosten 9 auf Stufe 1, +3 je weiterer Stufe, maximal 36 auf Stufe 10. Vorläufige Castzeit 0,2 Sekunden. Der bisherige Cooldown beträgt 540 Sekunden. Ein erfolgreicher Treffer bricht einen bereits laufenden Zauber des Ziels sofort ab. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Applies a ban that suppresses the target spellcasting for 3 seconds. Also affects bosses. At skill level 10, suppression lasts 4 seconds. Additionally deals magical base damage once, starting at 37 and increasing by 13 per additional level to 154. Mana cost 9 at level 1, maximum 36 at level 10. Provisional cast time is 0.2 seconds. Existing cooldown is 540 seconds. Interaction with casts already in progress remains to be clarified. A successful hit immediately interrupts any spell the target is currently casting. |
| dmgType (Altformat) | spell |
| matk | 37 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 220 |
| skillName_de | Bannmagie |
| skillpoints | 1 |
| castTimeSeconds | 0,2 |
| castTimeStatus | provisional |
| dur | 3 |
| durationScaling.type | table |
| durationScaling.values[0] | 3 |
| durationScaling.values[1] | 3 |
| durationScaling.values[2] | 3 |
| durationScaling.values[3] | 3 |
| durationScaling.values[4] | 3 |
| durationScaling.values[5] | 3 |
| durationScaling.values[6] | 3 |
| durationScaling.values[7] | 3 |
| durationScaling.values[8] | 3 |
| durationScaling.values[9] | 4 |
| effects[0].key | magic-ban-suppression |
| effects[0].type | control |
| effects[0].controlKind | spellSuppression |
| effects[0].target | enemy |
| effects[0].affectsBosses | true |
| effects[0].actionRestrictionsStatus | defined |
| effects[0].durationSeconds | 3 |
| effects[0].durationScaling.type | table |
| effects[0].durationScaling.values[0] | 3 |
| effects[0].durationScaling.values[1] | 3 |
| effects[0].durationScaling.values[2] | 3 |
| effects[0].durationScaling.values[3] | 3 |
| effects[0].durationScaling.values[4] | 3 |
| effects[0].durationScaling.values[5] | 3 |
| effects[0].durationScaling.values[6] | 3 |
| effects[0].durationScaling.values[7] | 3 |
| effects[0].durationScaling.values[8] | 3 |
| effects[0].durationScaling.values[9] | 4 |
| effects[0].interruptsCurrentCast | true |
| effects[0].requiresSuccessfulHit | true |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 9 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 9 |
| resourceCosts[0].scaling.perLevel | 3 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 37 |
| statScaling.matk.perLevel | 13 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | rounded |
| levelProgression.rules[0].rule.mode | round |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 2,5 |
| levelProgression.rules[0].rule.rule.perLevel | 0,111 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | durationScaling |
| levelProgression.rules[1].rule.kind | rounded |
| levelProgression.rules[1].rule.mode | round |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 2,5 |
| levelProgression.rules[1].rule.rule.perLevel | 0,111 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 9 |
| levelProgression.rules[2].rule.rule.perLevel | 3 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | matk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 37 |
| levelProgression.rules[3].rule.perLevel | 13 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 221: Windschlitzer

Druidenvariante von Windschlitzer mit 20 lernbaren Stufen. Einmaliger magischer Skill-Grundschaden 211 bis 921 gemäß ganzzahliger Stufentabelle, zuzüglich aktuellem M-Angriff. Mana-Kosten 53 bis 233 gemäß ganzzahliger Stufentabelle. Die Maximalwerte von Schaden und Mana entsprechen einer zusätzlichen Stufe der bisherigen Skalierung. Grund-Cooldown sinkt über die 20 Stufen gleichmäßig von 54 auf 45 Sekunden. Castzeit 0,2 Sekunden. Kräuterkundler und Witcher behalten unverändert ihre Variante mit zehn Stufen.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Wind Slasher |
| category | active |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| charClass[2] | Herbalist |
| charClass[3] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Druidenvariante von Windschlitzer mit 20 lernbaren Stufen. Einmaliger magischer Skill-Grundschaden 211 bis 921 gemäß ganzzahliger Stufentabelle, zuzüglich aktuellem M-Angriff. Mana-Kosten 53 bis 233 gemäß ganzzahliger Stufentabelle. Die Maximalwerte von Schaden und Mana entsprechen einer zusätzlichen Stufe der bisherigen Skalierung. Grund-Cooldown sinkt über die 20 Stufen gleichmäßig von 54 auf 45 Sekunden. Castzeit 0,2 Sekunden. Kräuterkundler und Witcher behalten unverändert ihre Variante mit zehn Stufen. |
| description_eng | Druid specialization of Wind Slasher with 20 learnable levels. Deals magical skill base damage once, from 211 to 921 according to an integer level table, plus current magical attack. Mana cost 53 to 233 according to its integer level table. Maximum damage and Mana correspond to one extra level of the former progression. Base cooldown decreases evenly from 54 to 45 seconds over 20 levels. Cast time 0.2 seconds. Herbalist and Witcher retain their unchanged ten-level version. |
| dmgType (Altformat) | spell |
| matk | 211 |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 221 |
| skillName_de | Windschlitzer |
| skillpoints | 1 |
| castTimeSeconds | 0,2 |
| cd | 54 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 54 |
| cooldownScaling.perLevel | -0,474 |
| mana (Aktivierungskosten, kein Bonus) | 53 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 53 |
| resourceCosts[0].scaling.values[0] | 53 |
| resourceCosts[0].scaling.values[1] | 62 |
| resourceCosts[0].scaling.values[2] | 72 |
| resourceCosts[0].scaling.values[3] | 81 |
| resourceCosts[0].scaling.values[4] | 91 |
| resourceCosts[0].scaling.values[5] | 100 |
| resourceCosts[0].scaling.values[6] | 110 |
| resourceCosts[0].scaling.values[7] | 119 |
| resourceCosts[0].scaling.values[8] | 129 |
| resourceCosts[0].scaling.values[9] | 138 |
| resourceCosts[0].scaling.values[10] | 148 |
| resourceCosts[0].scaling.values[11] | 157 |
| resourceCosts[0].scaling.values[12] | 167 |
| resourceCosts[0].scaling.values[13] | 176 |
| resourceCosts[0].scaling.values[14] | 186 |
| resourceCosts[0].scaling.values[15] | 195 |
| resourceCosts[0].scaling.values[16] | 205 |
| resourceCosts[0].scaling.values[17] | 214 |
| resourceCosts[0].scaling.values[18] | 224 |
| resourceCosts[0].scaling.values[19] | 233 |
| statScaling.matk.type | table |
| statScaling.matk.base | 211 |
| statScaling.matk.values[0] | 211 |
| statScaling.matk.values[1] | 248 |
| statScaling.matk.values[2] | 286 |
| statScaling.matk.values[3] | 323 |
| statScaling.matk.values[4] | 360 |
| statScaling.matk.values[5] | 398 |
| statScaling.matk.values[6] | 435 |
| statScaling.matk.values[7] | 473 |
| statScaling.matk.values[8] | 510 |
| statScaling.matk.values[9] | 547 |
| statScaling.matk.values[10] | 585 |
| statScaling.matk.values[11] | 622 |
| statScaling.matk.values[12] | 659 |
| statScaling.matk.values[13] | 697 |
| statScaling.matk.values[14] | 734 |
| statScaling.matk.values[15] | 772 |
| statScaling.matk.values[16] | 809 |
| statScaling.matk.values[17] | 846 |
| statScaling.matk.values[18] | 884 |
| statScaling.matk.values[19] | 921 |
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
| levelProgression.rules[0].rule.rule.base | 54 |
| levelProgression.rules[0].rule.rule.perLevel | -0,474 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | periodicSteps |
| levelProgression.rules[1].rule.rule.base | 53 |
| levelProgression.rules[1].rule.rule.steps[0] | 9 |
| levelProgression.rules[1].rule.rule.steps[1] | 10 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | periodicSteps |
| levelProgression.rules[2].rule.base | 211 |
| levelProgression.rules[2].rule.steps[0] | 37 |
| levelProgression.rules[2].rule.steps[1] | 38 |
| levelProgression.rules[2].rule.steps[2] | 37 |
| levelProgression.rules[2].rule.steps[3] | 37 |
| levelProgression.rules[2].rule.steps[4] | 38 |
| levelProgression.rules[2].rule.steps[5] | 37 |
| levelProgression.rules[2].rule.steps[6] | 38 |
| levelProgression.rules[2].rule.steps[7] | 37 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |
| classCombatOverrides.druid.maxSkillLv | 20 |
| classCombatOverrides.druid.statScaling.matk.type | table |
| classCombatOverrides.druid.statScaling.matk.base | 211 |
| classCombatOverrides.druid.statScaling.matk.values[0] | 211 |
| classCombatOverrides.druid.statScaling.matk.values[1] | 248 |
| classCombatOverrides.druid.statScaling.matk.values[2] | 286 |
| classCombatOverrides.druid.statScaling.matk.values[3] | 323 |
| classCombatOverrides.druid.statScaling.matk.values[4] | 360 |
| classCombatOverrides.druid.statScaling.matk.values[5] | 398 |
| classCombatOverrides.druid.statScaling.matk.values[6] | 435 |
| classCombatOverrides.druid.statScaling.matk.values[7] | 473 |
| classCombatOverrides.druid.statScaling.matk.values[8] | 510 |
| classCombatOverrides.druid.statScaling.matk.values[9] | 547 |
| classCombatOverrides.druid.statScaling.matk.values[10] | 585 |
| classCombatOverrides.druid.statScaling.matk.values[11] | 622 |
| classCombatOverrides.druid.statScaling.matk.values[12] | 659 |
| classCombatOverrides.druid.statScaling.matk.values[13] | 697 |
| classCombatOverrides.druid.statScaling.matk.values[14] | 734 |
| classCombatOverrides.druid.statScaling.matk.values[15] | 772 |
| classCombatOverrides.druid.statScaling.matk.values[16] | 809 |
| classCombatOverrides.druid.statScaling.matk.values[17] | 846 |
| classCombatOverrides.druid.statScaling.matk.values[18] | 884 |
| classCombatOverrides.druid.statScaling.matk.values[19] | 921 |
| classCombatOverrides.druid.resourceCosts[0].resource | mana |
| classCombatOverrides.druid.resourceCosts[0].reference | maxMana |
| classCombatOverrides.druid.resourceCosts[0].unit | flat |
| classCombatOverrides.druid.resourceCosts[0].scaling.type | table |
| classCombatOverrides.druid.resourceCosts[0].scaling.base | 53 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[0] | 53 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[1] | 62 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[2] | 72 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[3] | 81 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[4] | 91 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[5] | 100 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[6] | 110 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[7] | 119 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[8] | 129 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[9] | 138 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[10] | 148 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[11] | 157 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[12] | 167 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[13] | 176 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[14] | 186 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[15] | 195 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[16] | 205 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[17] | 214 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[18] | 224 |
| classCombatOverrides.druid.resourceCosts[0].scaling.values[19] | 233 |
| classCombatOverrides.druid.cooldownScaling.type | linear |
| classCombatOverrides.druid.cooldownScaling.base | 54 |
| classCombatOverrides.druid.cooldownScaling.perLevel | -0,474 |
| classCombatOverrides.druid.description_de | Druidenvariante von Windschlitzer mit 20 lernbaren Stufen. Einmaliger magischer Skill-Grundschaden 211 bis 921 gemäß ganzzahliger Stufentabelle, zuzüglich aktuellem M-Angriff. Mana-Kosten 53 bis 233 gemäß ganzzahliger Stufentabelle. Die Maximalwerte von Schaden und Mana entsprechen einer zusätzlichen Stufe der bisherigen Skalierung. Grund-Cooldown sinkt über die 20 Stufen gleichmäßig von 54 auf 45 Sekunden. Castzeit 0,2 Sekunden. Kräuterkundler und Witcher behalten unverändert ihre Variante mit zehn Stufen. |
| classCombatOverrides.druid.description_eng | Druid specialization of Wind Slasher with 20 learnable levels. Deals magical skill base damage once, from 211 to 921 according to an integer level table, plus current magical attack. Mana cost 53 to 233 according to its integer level table. Maximum damage and Mana correspond to one extra level of the former progression. Base cooldown decreases evenly from 54 to 45 seconds over 20 levels. Cast time 0.2 seconds. Herbalist and Witcher retain their unchanged ten-level version. |
| classCombatOverrides.druid.levelProgression.version | 1 |
| classCombatOverrides.druid.levelProgression.rules[0].path[0] | cooldownScaling |
| classCombatOverrides.druid.levelProgression.rules[0].rule.kind | bounded |
| classCombatOverrides.druid.levelProgression.rules[0].rule.min | 0,1 |
| classCombatOverrides.druid.levelProgression.rules[0].rule.rule.kind | linear |
| classCombatOverrides.druid.levelProgression.rules[0].rule.rule.base | 54 |
| classCombatOverrides.druid.levelProgression.rules[0].rule.rule.perLevel | -0,474 |
| classCombatOverrides.druid.levelProgression.rules[0].source | storedFormula |
| classCombatOverrides.druid.levelProgression.rules[1].path[0] | resourceCosts |
| classCombatOverrides.druid.levelProgression.rules[1].path[1] | 0 |
| classCombatOverrides.druid.levelProgression.rules[1].path[2] | scaling |
| classCombatOverrides.druid.levelProgression.rules[1].rule.kind | bounded |
| classCombatOverrides.druid.levelProgression.rules[1].rule.min | 0 |
| classCombatOverrides.druid.levelProgression.rules[1].rule.rule.kind | periodicSteps |
| classCombatOverrides.druid.levelProgression.rules[1].rule.rule.base | 53 |
| classCombatOverrides.druid.levelProgression.rules[1].rule.rule.steps[0] | 9 |
| classCombatOverrides.druid.levelProgression.rules[1].rule.rule.steps[1] | 10 |
| classCombatOverrides.druid.levelProgression.rules[1].source | verifiedExistingLevels |
| classCombatOverrides.druid.levelProgression.rules[2].path[0] | statScaling |
| classCombatOverrides.druid.levelProgression.rules[2].path[1] | matk |
| classCombatOverrides.druid.levelProgression.rules[2].rule.kind | periodicSteps |
| classCombatOverrides.druid.levelProgression.rules[2].rule.base | 211 |
| classCombatOverrides.druid.levelProgression.rules[2].rule.steps[0] | 37 |
| classCombatOverrides.druid.levelProgression.rules[2].rule.steps[1] | 38 |
| classCombatOverrides.druid.levelProgression.rules[2].rule.steps[2] | 37 |
| classCombatOverrides.druid.levelProgression.rules[2].rule.steps[3] | 37 |
| classCombatOverrides.druid.levelProgression.rules[2].rule.steps[4] | 38 |
| classCombatOverrides.druid.levelProgression.rules[2].rule.steps[5] | 37 |
| classCombatOverrides.druid.levelProgression.rules[2].rule.steps[6] | 38 |
| classCombatOverrides.druid.levelProgression.rules[2].rule.steps[7] | 37 |
| classCombatOverrides.druid.levelProgression.rules[2].source | verifiedExistingLevels |
| classCombatOverrides.druid.levelProgression.extensionNeedsDefinition | [] |
| classCombatOverrides.herbalist.maxSkillLv | 10 |
| classCombatOverrides.herbalist.statScaling.matk.type | linear |
| classCombatOverrides.herbalist.statScaling.matk.base | 211 |
| classCombatOverrides.herbalist.statScaling.matk.perLevel | 71 |
| classCombatOverrides.herbalist.resourceCosts[0].resource | mana |
| classCombatOverrides.herbalist.resourceCosts[0].reference | maxMana |
| classCombatOverrides.herbalist.resourceCosts[0].unit | flat |
| classCombatOverrides.herbalist.resourceCosts[0].scaling.type | linear |
| classCombatOverrides.herbalist.resourceCosts[0].scaling.base | 53 |
| classCombatOverrides.herbalist.resourceCosts[0].scaling.perLevel | 18 |
| classCombatOverrides.herbalist.cooldownScaling.type | linear |
| classCombatOverrides.herbalist.cooldownScaling.base | 54 |
| classCombatOverrides.herbalist.cooldownScaling.perLevel | -1 |
| classCombatOverrides.herbalist.description_de | Schneidet deine Feinde mit Klingen aus Wind. Der magische Grundschaden des Skills beträgt 211 auf Skilllevel 1 und steigt um 71 je weiterer Stufe auf 850 auf Stufe 10. Dieser Wert erhöht nicht dauerhaft deinen magischen Angriff. Die Mana-Kosten 53 auf Stufe 1, +18 je weiterer Stufe, maximal 215 auf Stufe 10. Der Cooldown sinkt von 54 um 1 Sekunde je weiterer Stufe auf 45 Sekunden. Castzeit 0,2 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| classCombatOverrides.herbalist.description_eng | Cuts your enemies with blades of wind. The skill base magical damage starts at 211 at level 1 and increases by 71 per additional level to 850 at level 10. This value does not permanently increase your magical attack. Mana cost 53 at level 1, maximum 215 at level 10. Cooldown decreases from 54 by 1 second per additional level to 45 seconds. Cast time is 0.2 seconds. |
| classCombatOverrides.herbalist.levelProgression.version | 1 |
| classCombatOverrides.herbalist.levelProgression.rules[0].path[0] | cooldownScaling |
| classCombatOverrides.herbalist.levelProgression.rules[0].rule.kind | bounded |
| classCombatOverrides.herbalist.levelProgression.rules[0].rule.min | 0,1 |
| classCombatOverrides.herbalist.levelProgression.rules[0].rule.rule.kind | linear |
| classCombatOverrides.herbalist.levelProgression.rules[0].rule.rule.base | 54 |
| classCombatOverrides.herbalist.levelProgression.rules[0].rule.rule.perLevel | -1 |
| classCombatOverrides.herbalist.levelProgression.rules[0].source | storedFormula |
| classCombatOverrides.herbalist.levelProgression.rules[1].path[0] | resourceCosts |
| classCombatOverrides.herbalist.levelProgression.rules[1].path[1] | 0 |
| classCombatOverrides.herbalist.levelProgression.rules[1].path[2] | scaling |
| classCombatOverrides.herbalist.levelProgression.rules[1].rule.kind | bounded |
| classCombatOverrides.herbalist.levelProgression.rules[1].rule.min | 0 |
| classCombatOverrides.herbalist.levelProgression.rules[1].rule.rule.kind | linear |
| classCombatOverrides.herbalist.levelProgression.rules[1].rule.rule.base | 53 |
| classCombatOverrides.herbalist.levelProgression.rules[1].rule.rule.perLevel | 18 |
| classCombatOverrides.herbalist.levelProgression.rules[1].source | storedFormula |
| classCombatOverrides.herbalist.levelProgression.rules[2].path[0] | statScaling |
| classCombatOverrides.herbalist.levelProgression.rules[2].path[1] | matk |
| classCombatOverrides.herbalist.levelProgression.rules[2].rule.kind | linear |
| classCombatOverrides.herbalist.levelProgression.rules[2].rule.base | 211 |
| classCombatOverrides.herbalist.levelProgression.rules[2].rule.perLevel | 71 |
| classCombatOverrides.herbalist.levelProgression.rules[2].source | storedFormula |
| classCombatOverrides.herbalist.levelProgression.extensionNeedsDefinition | [] |
| learningLimits.defaultMaxLevel | 10 |
| learningLimits.classOverrides.Druide | 20 |
| learningLimits.classOverrides.Alchemist | 20 |
| learningLimits.classOverrides.Herbalist | 10 |
| learningLimits.classOverrides.Witcher | 10 |
| learningLimits.status | defined |

### 222: Vergessener Zauber

Permanente Passive mit zwei Stufen. Erhöht genau einen ausgewählten, bereits gelernten eigenen Skill um eine effektive Stufe, auch über dessen normale Lerngrenze hinaus. Der Bonus bleibt auf beiden Stufen +1. Dafür werden auf Skillstufe 1 jeweils 20 und auf Skillstufe 2 jeweils 15 Stärke, Vitalität, Intelligenz, Willenskraft, Agilität und Geschick abgezogen. Glück wird nicht verringert. Vergessener Zauber kann sich nicht selbst erhöhen. Gelernte Stufe und Skillpunktkosten des Zielskills bleiben unverändert. Keine Mana-Kosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer. Die Attributabzüge dürfen nicht doppelt eingerechnet werden.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Forgotten Spell |
| agi | -20 |
| category | passive |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanente Passive mit zwei Stufen. Erhöht genau einen ausgewählten, bereits gelernten eigenen Skill um eine effektive Stufe, auch über dessen normale Lerngrenze hinaus. Der Bonus bleibt auf beiden Stufen +1. Dafür werden auf Skillstufe 1 jeweils 20 und auf Skillstufe 2 jeweils 15 Stärke, Vitalität, Intelligenz, Willenskraft, Agilität und Geschick abgezogen. Glück wird nicht verringert. Vergessener Zauber kann sich nicht selbst erhöhen. Gelernte Stufe und Skillpunktkosten des Zielskills bleiben unverändert. Keine Mana-Kosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer. Die Attributabzüge dürfen nicht doppelt eingerechnet werden. |
| description_eng | Permanent passive with two levels. Grants one effective level to exactly one selected, already learned own skill, including above its normal learning cap. Both ranks grant +1. Each of Strength, Vitality, Intelligence, Wisdom, Agility and Dexterity is reduced by 20 at rank 1 or 15 at rank 2. Luck is unaffected. Cannot target Forgotten Spell itself. The target's learned rank and skill point cost remain unchanged. No Mana cost, cast time, cooldown or limited duration. Attribute deductions must not be counted twice. |
| dex | -20 |
| dmgType (Altformat) | passive |
| int | -20 |
| maxSkillLv | 2 |
| maxUpgradeLv | 10 |
| nr | 222 |
| skillName_de | Vergessener Zauber |
| skillpoints | 1 |
| str | -20 |
| vita | -20 |
| wis | -20 |
| resourceCosts | [] |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | -20 |
| levelProgression.rules[0].rule.perLevel | 5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | vita |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | -20 |
| levelProgression.rules[1].rule.perLevel | 5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | int |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | -20 |
| levelProgression.rules[2].rule.perLevel | 5 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | wis |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | -20 |
| levelProgression.rules[3].rule.perLevel | 5 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | agi |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | -20 |
| levelProgression.rules[4].rule.perLevel | 5 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | statScaling |
| levelProgression.rules[5].path[1] | dex |
| levelProgression.rules[5].rule.kind | linear |
| levelProgression.rules[5].rule.base | -20 |
| levelProgression.rules[5].rule.perLevel | 5 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| skillLevelGrant.levels | 1 |
| skillLevelGrant.targetCount | 1 |
| skillLevelGrant.allowAboveLearnableMax | true |
| skillLevelGrant.excludesSelf | true |
| skillLevelGrant.attributeCost.str | 20 |
| skillLevelGrant.attributeCost.vita | 20 |
| skillLevelGrant.attributeCost.int | 20 |
| skillLevelGrant.attributeCost.wis | 20 |
| skillLevelGrant.attributeCost.agi | 20 |
| skillLevelGrant.attributeCost.dex | 20 |
| skillLevelGrant.attributeCostScaling.str.type | linear |
| skillLevelGrant.attributeCostScaling.str.base | 20 |
| skillLevelGrant.attributeCostScaling.str.perLevel | -5 |
| skillLevelGrant.attributeCostScaling.vita.type | linear |
| skillLevelGrant.attributeCostScaling.vita.base | 20 |
| skillLevelGrant.attributeCostScaling.vita.perLevel | -5 |
| skillLevelGrant.attributeCostScaling.int.type | linear |
| skillLevelGrant.attributeCostScaling.int.base | 20 |
| skillLevelGrant.attributeCostScaling.int.perLevel | -5 |
| skillLevelGrant.attributeCostScaling.wis.type | linear |
| skillLevelGrant.attributeCostScaling.wis.base | 20 |
| skillLevelGrant.attributeCostScaling.wis.perLevel | -5 |
| skillLevelGrant.attributeCostScaling.agi.type | linear |
| skillLevelGrant.attributeCostScaling.agi.base | 20 |
| skillLevelGrant.attributeCostScaling.agi.perLevel | -5 |
| skillLevelGrant.attributeCostScaling.dex.type | linear |
| skillLevelGrant.attributeCostScaling.dex.base | 20 |
| skillLevelGrant.attributeCostScaling.dex.perLevel | -5 |
| classificationVersion | 1 |
| type | passive |
| statScaling.str.type | linear |
| statScaling.str.base | -20 |
| statScaling.str.perLevel | 5 |
| statScaling.vita.type | linear |
| statScaling.vita.base | -20 |
| statScaling.vita.perLevel | 5 |
| statScaling.int.type | linear |
| statScaling.int.base | -20 |
| statScaling.int.perLevel | 5 |
| statScaling.wis.type | linear |
| statScaling.wis.base | -20 |
| statScaling.wis.perLevel | 5 |
| statScaling.agi.type | linear |
| statScaling.agi.base | -20 |
| statScaling.agi.perLevel | 5 |
| statScaling.dex.type | linear |
| statScaling.dex.base | -20 |
| statScaling.dex.perLevel | 5 |

### 225: Macht des Geistes

Gruppenbuff: +18 magische Verteidigung je Stufe, auf Stufe 10 +180. Kein zusätzlicher Willenskraftbonus. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten: 63 + 25 je weiterer Stufe.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Power of Mind |
| category | active |
| cd | 60 |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Gruppenbuff: +18 magische Verteidigung je Stufe, auf Stufe 10 +180. Kein zusätzlicher Willenskraftbonus. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten: 63 + 25 je weiterer Stufe. |
| description_eng | Group buff: +18 magical defense per level, reaching +180 at level 10. No additional Wisdom bonus. Duration 30 minutes, cooldown 60 seconds, cast time 0.3 seconds. Mana cost: 63 + 25 per additional level. |
| dmgType (Altformat) | buff |
| dur | 1.800 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| mdef | 18 |
| nr | 225 |
| skillName_de | Macht des Geistes |
| skillpoints | 1 |
| castTimeSeconds | 0,3 |
| mana (Aktivierungskosten, kein Bonus) | 63 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 63 |
| resourceCosts[0].scaling.perLevel | 25 |
| statScaling.mdef.type | linear |
| statScaling.mdef.base | 18 |
| statScaling.mdef.perLevel | 18 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 63 |
| levelProgression.rules[0].rule.rule.perLevel | 25 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | mdef |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 18 |
| levelProgression.rules[1].rule.perLevel | 18 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| target | group |
| type | buff |
| castTimeStatus | defined |
| statBonusUnits.mdef | flat |

### 244: Naturgeist

Beschwört einen Naturgeist, der mit kleinen Wirbelstürmen magischen Windschaden aus der Entfernung verursacht. Eigene Skilldefinition nur für Druide/Alchemist, getrennt vom Seelenbegleiter des Jägers. Übernimmt live jeweils 10 % der aktuellen Intelligenz, Vitalität und Willenskraft seines Meisters. Statt Geschick liefert Intelligenz den Angriff: 1,8 M-Angriff je übernommenes Intelligenz-Punkt; keine direkte Übernahme von Waffenangriff oder fertigem M-Angriff. Vita und Willenskraft werden nach den normalen Begleiterregeln verwertet. Keine physische Angriffskomponente. Zwei lernbare Stufen. Auf Stufe 2 erhält ausschließlich der Naturgeist zusätzlich je 10 Vitalität, Intelligenz und Willenskraft, zusätzlich zu Vererbung und Bindung. Der Druide erhält diese Boni nicht. Unverändert auf beiden Stufen: 132 Mana, 0,4 Sekunden Castzeit, 360 Sekunden Dauer und 360 Sekunden Cooldown ab Beschwörung. Maximal ein Naturgeist gleichzeitig; erneutes Rufen ersetzt den bisherigen. Bei Tod nur verbleibenden Beschwörungs-Cooldown abwarten. Angreifbar und von Flächenschaden betroffen. Kein dauerhafter Pet-Platz, mit normalem Pet kombinierbar. Grundfrequenz 1,1 Angriffe pro Sekunde bei 100 % eigenem Angriffstempo, keine Übernahme von Agilität. Meister-Buffs und -Debuffs wirken live auf die übernommenen Attribute. Begleiterbuffs wirken direkt auf den Naturgeist. Reichweite und Anpassung aktueller HP bei Max-HP-Änderungen noch offen. Zusätzliche eigene Grundwerte: 500 Max-Leben, 0 P-Angriff, 100 M-Angriff, 45 P-Verteidigung und 81 M-Verteidigung. Diese Werte werden zur bisherigen Vererbung addiert. Grundfrequenz 1,1 Angriffe pro Sekunde. Bindung wirkt direkt und zusätzlich auf die Kreaturenattribute; die normale Lerngrenze des Meisters ist zu beachten.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Nature Spirit |
| category | active |
| cd | 360 |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Beschwört einen Naturgeist, der mit kleinen Wirbelstürmen magischen Windschaden aus der Entfernung verursacht. Eigene Skilldefinition nur für Druide/Alchemist, getrennt vom Seelenbegleiter des Jägers. Übernimmt live jeweils 10 % der aktuellen Intelligenz, Vitalität und Willenskraft seines Meisters. Statt Geschick liefert Intelligenz den Angriff: 1,8 M-Angriff je übernommenes Intelligenz-Punkt; keine direkte Übernahme von Waffenangriff oder fertigem M-Angriff. Vita und Willenskraft werden nach den normalen Begleiterregeln verwertet. Keine physische Angriffskomponente. Zwei lernbare Stufen. Auf Stufe 2 erhält ausschließlich der Naturgeist zusätzlich je 10 Vitalität, Intelligenz und Willenskraft, zusätzlich zu Vererbung und Bindung. Der Druide erhält diese Boni nicht. Unverändert auf beiden Stufen: 132 Mana, 0,4 Sekunden Castzeit, 360 Sekunden Dauer und 360 Sekunden Cooldown ab Beschwörung. Maximal ein Naturgeist gleichzeitig; erneutes Rufen ersetzt den bisherigen. Bei Tod nur verbleibenden Beschwörungs-Cooldown abwarten. Angreifbar und von Flächenschaden betroffen. Kein dauerhafter Pet-Platz, mit normalem Pet kombinierbar. Grundfrequenz 1,1 Angriffe pro Sekunde bei 100 % eigenem Angriffstempo, keine Übernahme von Agilität. Meister-Buffs und -Debuffs wirken live auf die übernommenen Attribute. Begleiterbuffs wirken direkt auf den Naturgeist. Reichweite und Anpassung aktueller HP bei Max-HP-Änderungen noch offen. Zusätzliche eigene Grundwerte: 500 Max-Leben, 0 P-Angriff, 100 M-Angriff, 45 P-Verteidigung und 81 M-Verteidigung. Diese Werte werden zur bisherigen Vererbung addiert. Grundfrequenz 1,1 Angriffe pro Sekunde. Bindung wirkt direkt und zusätzlich auf die Kreaturenattribute; die normale Lerngrenze des Meisters ist zu beachten. |
| description_eng | Summons a Nature Spirit that uses small tornadoes as ranged magical wind basic attacks. Separate Druid/Alchemist skill. Live inheritance: 10% each of current master Intelligence, Vitality and Wisdom. Intelligence replaces Dexterity as the attack source: 1.8 magical attack per inherited Intelligence point, without direct weapon or final master attack inheritance. Standard companion Vitality/Wisdom conversions. No physical attack component. Two learnable levels. At level 2, the Nature Spirit itself gains an additional 10 Vitality, 10 Intelligence and 10 Wisdom on top of inheritance and Bond. These bonuses do not apply to the Druid. Unchanged at both levels: 132 Mana, 0.4-second cast, 360-second lifetime and cooldown starting on summon. Maximum one active instance; resummoning replaces it. Death requires waiting only the remaining summon cooldown. Targetable and affected by area damage. Does not occupy a permanent pet slot. Base frequency 1.1 attacks per second at 100% own speed; no Agility inheritance. Master attribute changes apply live; companion buffs apply directly. Range and current-HP adjustments remain pending. Additional fixed base stats: 500 maximum HP, 0 physical attack, 100 magical attack, 45 physical defense and 81 magical defense, added to existing inheritance. Base frequency 1.1 attacks per second. Bond applies directly to creature attributes in addition to inheritance, at the master class learning cap. |
| dmgType (Altformat) | spell |
| dur | 360 |
| maxSkillLv | 2 |
| maxUpgradeLv | 10 |
| nr | 244 |
| skillName_de | Naturgeist |
| skillpoints | 1 |
| castTimeSeconds | 0,4 |
| mana (Aktivierungskosten, kein Bonus) | 132 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 132 |
| resourceCosts[0].scaling.perLevel | 0 |
| summonedCreatureSettings.occupiesPermanentPetSlot | false |
| summonedCreatureSettings.canCoexistWithPermanentPet | true |
| summonedCreatureSettings.inheritedAttributeFractions.intelligence | 0,1 |
| summonedCreatureSettings.inheritedAttributeFractions.vitality | 0,1 |
| summonedCreatureSettings.inheritedAttributeFractions.wisdom | 0,1 |
| summonedCreatureSettings.attributeConversionMode | standardMagical |
| summonedCreatureSettings.acceptsGroupCompanionBuffs | true |
| summonedCreatureSettings.maximumActiveInstances | 1 |
| summonedCreatureSettings.statSampling | liveBeforeSummonHealthPenalty |
| summonedCreatureSettings.defenseScalingStatus | defined |
| summonedCreatureSettings.attackStyle | rangedBasicAttack |
| summonedCreatureSettings.damageType | magical |
| summonedCreatureSettings.targetable | true |
| summonedCreatureSettings.affectedByAreaAttacks | true |
| summonedCreatureSettings.lifetimeSeconds | 360 |
| summonedCreatureSettings.endsOnCreatureDeath | true |
| summonedCreatureSettings.currentHealthAdjustmentStatus | pending |
| summonedCreatureSettings.summonCooldownSeconds | 360 |
| summonedCreatureSettings.cooldownStartsOn | summon |
| summonedCreatureSettings.deathRestartsCooldown | false |
| summonedCreatureSettings.attackSpeed | 1 |
| summonedCreatureSettings.damageElement | wind |
| summonedCreatureSettings.baseAttacksPerSecond | 1,1 |
| summonedCreatureSettings.baseStats.maxHealth | 500 |
| summonedCreatureSettings.baseStats.magicalAttack | 100 |
| summonedCreatureSettings.baseStats.physicalDefense | 45 |
| summonedCreatureSettings.baseStats.magicalDefense | 81 |
| summonedCreatureSettings.receivesBond | true |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 132 |
| levelProgression.rules[0].rule.rule.perLevel | 0 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0 |
| levelProgression.rules[1].rule.perLevel | 10 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 1 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 0 |
| levelProgression.rules[2].rule.perLevel | 10 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 2 |
| levelProgression.rules[3].path[2] | valueScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 0 |
| levelProgression.rules[3].rule.perLevel | 10 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | skill |
| effects[0].key | nature-spirit-level-two-vita |
| effects[0].type | statModifier |
| effects[0].target | companion |
| effects[0].stat | vita |
| effects[0].value | 10 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 0 |
| effects[0].minimumSkillLevel | 2 |
| effects[0].valueScaling.type | table |
| effects[0].valueScaling.values[0] | 0 |
| effects[0].valueScaling.values[1] | 10 |
| effects[1].key | nature-spirit-level-two-int |
| effects[1].type | statModifier |
| effects[1].target | companion |
| effects[1].stat | int |
| effects[1].value | 10 |
| effects[1].unit | flat |
| effects[1].durationSeconds | 0 |
| effects[1].minimumSkillLevel | 2 |
| effects[1].valueScaling.type | table |
| effects[1].valueScaling.values[0] | 0 |
| effects[1].valueScaling.values[1] | 10 |
| effects[2].key | nature-spirit-level-two-wis |
| effects[2].type | statModifier |
| effects[2].target | companion |
| effects[2].stat | wis |
| effects[2].value | 10 |
| effects[2].unit | flat |
| effects[2].durationSeconds | 0 |
| effects[2].minimumSkillLevel | 2 |
| effects[2].valueScaling.type | table |
| effects[2].valueScaling.values[0] | 0 |
| effects[2].valueScaling.values[1] | 10 |

### 253: Gunst der Sylphen

Die Gunst der Sylphen verbessert deine Windkontrolle. Zehn Stufen. Wirkt ausschließlich auf Windschlitzer, Windfesseln und Vakuumimpuls: je Stufe 0,5 Sekunden weniger Cooldown, 0,5 Prozent mehr gesamter verursachter Schaden und 0,5 Prozent weniger Mana-Kosten. Auf Stufe 10: 5 Sekunden weniger Cooldown, 5 Prozent mehr Schaden und 5 Prozent weniger Mana-Kosten; zusätzlich erst auf Stufe 10 0,1 Sekunden weniger Castzeit. Der Schadensbonus umfasst den jeweiligen Charakterangriff und bei Vakuumimpuls beide Schadensphasen. Keine Wirkung auf andere Skills, Naturgeist oder Auto-Attacks. Keine zusätzliche MP-Regeneration. Ansaugdauer und Animation bleiben unverändert. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| nr | 253 |
| skillName_de | Gunst der Sylphen |
| skillName_eng | Favor of the Sylphs |
| category | passive |
| dmgType (Altformat) | passive |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| skillpoints | 1 |
| resourceCosts | [] |
| effectsVersion | 1 |
| effects[0].key | sylph-cooldown-118 |
| effects[0].type | cooldownReduction |
| effects[0].target | self |
| effects[0].appliesTo | specificSkill |
| effects[0].targetSkillNumber | 118 |
| effects[0].value | 0,5 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 0 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0,5 |
| effects[0].valueScaling.perLevel | 0,5 |
| effects[1].key | sylph-damage-118 |
| effects[1].type | damageBonus |
| effects[1].target | self |
| effects[1].appliesTo | specificSkill |
| effects[1].targetSkillNumber | 118 |
| effects[1].value | 0,005 |
| effects[1].unit | fraction |
| effects[1].durationSeconds | 0 |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | 0,005 |
| effects[1].valueScaling.perLevel | 0,005 |
| effects[2].key | sylph-mana-118 |
| effects[2].type | resourceCostReduction |
| effects[2].resource | mana |
| effects[2].target | self |
| effects[2].appliesTo | specificSkill |
| effects[2].targetSkillNumber | 118 |
| effects[2].value | 0,005 |
| effects[2].unit | fraction |
| effects[2].durationSeconds | 0 |
| effects[2].valueScaling.type | linear |
| effects[2].valueScaling.base | 0,005 |
| effects[2].valueScaling.perLevel | 0,005 |
| effects[3].key | sylph-cooldown-125 |
| effects[3].type | cooldownReduction |
| effects[3].target | self |
| effects[3].appliesTo | specificSkill |
| effects[3].targetSkillNumber | 125 |
| effects[3].value | 0,5 |
| effects[3].unit | flat |
| effects[3].durationSeconds | 0 |
| effects[3].valueScaling.type | linear |
| effects[3].valueScaling.base | 0,5 |
| effects[3].valueScaling.perLevel | 0,5 |
| effects[4].key | sylph-damage-125 |
| effects[4].type | damageBonus |
| effects[4].target | self |
| effects[4].appliesTo | specificSkill |
| effects[4].targetSkillNumber | 125 |
| effects[4].value | 0,005 |
| effects[4].unit | fraction |
| effects[4].durationSeconds | 0 |
| effects[4].valueScaling.type | linear |
| effects[4].valueScaling.base | 0,005 |
| effects[4].valueScaling.perLevel | 0,005 |
| effects[5].key | sylph-mana-125 |
| effects[5].type | resourceCostReduction |
| effects[5].resource | mana |
| effects[5].target | self |
| effects[5].appliesTo | specificSkill |
| effects[5].targetSkillNumber | 125 |
| effects[5].value | 0,005 |
| effects[5].unit | fraction |
| effects[5].durationSeconds | 0 |
| effects[5].valueScaling.type | linear |
| effects[5].valueScaling.base | 0,005 |
| effects[5].valueScaling.perLevel | 0,005 |
| effects[6].key | sylph-cooldown-221 |
| effects[6].type | cooldownReduction |
| effects[6].target | self |
| effects[6].appliesTo | specificSkill |
| effects[6].targetSkillNumber | 221 |
| effects[6].value | 0,5 |
| effects[6].unit | flat |
| effects[6].durationSeconds | 0 |
| effects[6].valueScaling.type | linear |
| effects[6].valueScaling.base | 0,5 |
| effects[6].valueScaling.perLevel | 0,5 |
| effects[7].key | sylph-damage-221 |
| effects[7].type | damageBonus |
| effects[7].target | self |
| effects[7].appliesTo | specificSkill |
| effects[7].targetSkillNumber | 221 |
| effects[7].value | 0,005 |
| effects[7].unit | fraction |
| effects[7].durationSeconds | 0 |
| effects[7].valueScaling.type | linear |
| effects[7].valueScaling.base | 0,005 |
| effects[7].valueScaling.perLevel | 0,005 |
| effects[8].key | sylph-mana-221 |
| effects[8].type | resourceCostReduction |
| effects[8].resource | mana |
| effects[8].target | self |
| effects[8].appliesTo | specificSkill |
| effects[8].targetSkillNumber | 221 |
| effects[8].value | 0,005 |
| effects[8].unit | fraction |
| effects[8].durationSeconds | 0 |
| effects[8].valueScaling.type | linear |
| effects[8].valueScaling.base | 0,005 |
| effects[8].valueScaling.perLevel | 0,005 |
| effects[9].key | sylph-cast-118 |
| effects[9].type | castTimeReduction |
| effects[9].target | self |
| effects[9].appliesTo | specificSkill |
| effects[9].targetSkillNumber | 118 |
| effects[9].value | 0 |
| effects[9].unit | flat |
| effects[9].durationSeconds | 0 |
| effects[9].valueScaling.type | table |
| effects[9].valueScaling.values[0] | 0 |
| effects[9].valueScaling.values[1] | 0 |
| effects[9].valueScaling.values[2] | 0 |
| effects[9].valueScaling.values[3] | 0 |
| effects[9].valueScaling.values[4] | 0 |
| effects[9].valueScaling.values[5] | 0 |
| effects[9].valueScaling.values[6] | 0 |
| effects[9].valueScaling.values[7] | 0 |
| effects[9].valueScaling.values[8] | 0 |
| effects[9].valueScaling.values[9] | 0,1 |
| effects[10].key | sylph-cast-125 |
| effects[10].type | castTimeReduction |
| effects[10].target | self |
| effects[10].appliesTo | specificSkill |
| effects[10].targetSkillNumber | 125 |
| effects[10].value | 0 |
| effects[10].unit | flat |
| effects[10].durationSeconds | 0 |
| effects[10].valueScaling.type | table |
| effects[10].valueScaling.values[0] | 0 |
| effects[10].valueScaling.values[1] | 0 |
| effects[10].valueScaling.values[2] | 0 |
| effects[10].valueScaling.values[3] | 0 |
| effects[10].valueScaling.values[4] | 0 |
| effects[10].valueScaling.values[5] | 0 |
| effects[10].valueScaling.values[6] | 0 |
| effects[10].valueScaling.values[7] | 0 |
| effects[10].valueScaling.values[8] | 0 |
| effects[10].valueScaling.values[9] | 0,1 |
| effects[11].key | sylph-cast-221 |
| effects[11].type | castTimeReduction |
| effects[11].target | self |
| effects[11].appliesTo | specificSkill |
| effects[11].targetSkillNumber | 221 |
| effects[11].value | 0 |
| effects[11].unit | flat |
| effects[11].durationSeconds | 0 |
| effects[11].valueScaling.type | table |
| effects[11].valueScaling.values[0] | 0 |
| effects[11].valueScaling.values[1] | 0 |
| effects[11].valueScaling.values[2] | 0 |
| effects[11].valueScaling.values[3] | 0 |
| effects[11].valueScaling.values[4] | 0 |
| effects[11].valueScaling.values[5] | 0 |
| effects[11].valueScaling.values[6] | 0 |
| effects[11].valueScaling.values[7] | 0 |
| effects[11].valueScaling.values[8] | 0 |
| effects[11].valueScaling.values[9] | 0,1 |
| description_de | Die Gunst der Sylphen verbessert deine Windkontrolle. Zehn Stufen. Wirkt ausschließlich auf Windschlitzer, Windfesseln und Vakuumimpuls: je Stufe 0,5 Sekunden weniger Cooldown, 0,5 Prozent mehr gesamter verursachter Schaden und 0,5 Prozent weniger Mana-Kosten. Auf Stufe 10: 5 Sekunden weniger Cooldown, 5 Prozent mehr Schaden und 5 Prozent weniger Mana-Kosten; zusätzlich erst auf Stufe 10 0,1 Sekunden weniger Castzeit. Der Schadensbonus umfasst den jeweiligen Charakterangriff und bei Vakuumimpuls beide Schadensphasen. Keine Wirkung auf andere Skills, Naturgeist oder Auto-Attacks. Keine zusätzliche MP-Regeneration. Ansaugdauer und Animation bleiben unverändert. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent passive with ten levels, affecting only Wind Slasher, Wind Shackles and Vacuum Impulse. Each level reduces cooldown by 0.5 seconds, increases their total damage by 0.5% and reduces Mana cost by 0.5%. At level 10: 5 seconds less cooldown, 5% more damage and 5% lower Mana cost. Only at level 10, cast time is also reduced by 0.1 seconds. Includes character attack contributions and both Vacuum Impulse damage phases. Does not affect other skills, Nature Spirit or basic attacks. Grants no MP regeneration. Pull duration and animation are unchanged. No activation costs, cast time or cooldown. |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0,5 |
| levelProgression.rules[0].rule.perLevel | 0,5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 1 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,005 |
| levelProgression.rules[1].rule.perLevel | 0,005 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 2 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 0,005 |
| levelProgression.rules[2].rule.perLevel | 0,005 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 3 |
| levelProgression.rules[3].path[2] | valueScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 0,5 |
| levelProgression.rules[3].rule.perLevel | 0,5 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 4 |
| levelProgression.rules[4].path[2] | valueScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 0,005 |
| levelProgression.rules[4].rule.perLevel | 0,005 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | effects |
| levelProgression.rules[5].path[1] | 5 |
| levelProgression.rules[5].path[2] | valueScaling |
| levelProgression.rules[5].rule.kind | linear |
| levelProgression.rules[5].rule.base | 0,005 |
| levelProgression.rules[5].rule.perLevel | 0,005 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.rules[6].path[0] | effects |
| levelProgression.rules[6].path[1] | 6 |
| levelProgression.rules[6].path[2] | valueScaling |
| levelProgression.rules[6].rule.kind | linear |
| levelProgression.rules[6].rule.base | 0,5 |
| levelProgression.rules[6].rule.perLevel | 0,5 |
| levelProgression.rules[6].source | storedFormula |
| levelProgression.rules[7].path[0] | effects |
| levelProgression.rules[7].path[1] | 7 |
| levelProgression.rules[7].path[2] | valueScaling |
| levelProgression.rules[7].rule.kind | linear |
| levelProgression.rules[7].rule.base | 0,005 |
| levelProgression.rules[7].rule.perLevel | 0,005 |
| levelProgression.rules[7].source | storedFormula |
| levelProgression.rules[8].path[0] | effects |
| levelProgression.rules[8].path[1] | 8 |
| levelProgression.rules[8].path[2] | valueScaling |
| levelProgression.rules[8].rule.kind | linear |
| levelProgression.rules[8].rule.base | 0,005 |
| levelProgression.rules[8].rule.perLevel | 0,005 |
| levelProgression.rules[8].source | storedFormula |
| levelProgression.rules[9].path[0] | effects |
| levelProgression.rules[9].path[1] | 9 |
| levelProgression.rules[9].path[2] | valueScaling |
| levelProgression.rules[9].rule.kind | thresholds |
| levelProgression.rules[9].rule.base | 0 |
| levelProgression.rules[9].rule.changes[0].level | 10 |
| levelProgression.rules[9].rule.changes[0].value | 0,1 |
| levelProgression.rules[9].source | verifiedExistingLevels |
| levelProgression.rules[10].path[0] | effects |
| levelProgression.rules[10].path[1] | 10 |
| levelProgression.rules[10].path[2] | valueScaling |
| levelProgression.rules[10].rule.kind | thresholds |
| levelProgression.rules[10].rule.base | 0 |
| levelProgression.rules[10].rule.changes[0].level | 10 |
| levelProgression.rules[10].rule.changes[0].value | 0,1 |
| levelProgression.rules[10].source | verifiedExistingLevels |
| levelProgression.rules[11].path[0] | effects |
| levelProgression.rules[11].path[1] | 11 |
| levelProgression.rules[11].path[2] | valueScaling |
| levelProgression.rules[11].rule.kind | thresholds |
| levelProgression.rules[11].rule.base | 0 |
| levelProgression.rules[11].rule.changes[0].level | 10 |
| levelProgression.rules[11].rule.changes[0].value | 0,1 |
| levelProgression.rules[11].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 261: Dornige Rose

Permanente passive Spezialisierung mit 5 Stufen, nur für Druide und seine Weiterentwicklung. Mit gelernter Dornige Rose wird Eisranken als Dornige Eisranken angezeigt. Jede Stufe erhöht den einmaligen Initialschaden dieses Angriffs um 37, bis zu +185 auf Stufe 5. Die Mana-Kosten des aktiven Skills bleiben unverändert; Fesselwirkung, DoT, Castzeit und Cooldown bleiben ebenfalls unverändert. Kein zusätzlicher Charakterangriffsbeitrag. Die Passive selbst hat keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| nr | 261 |
| category | passive |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| classificationVersion | 1 |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanente passive Spezialisierung mit 5 Stufen, nur für Druide und seine Weiterentwicklung. Mit gelernter Dornige Rose wird Eisranken als Dornige Eisranken angezeigt. Jede Stufe erhöht den einmaligen Initialschaden dieses Angriffs um 37, bis zu +185 auf Stufe 5. Die Mana-Kosten des aktiven Skills bleiben unverändert; Fesselwirkung, DoT, Castzeit und Cooldown bleiben ebenfalls unverändert. Kein zusätzlicher Charakterangriffsbeitrag. Die Passive selbst hat keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent five-level passive specialization for the Druid and its advancement. Learning Thorned Rose changes the displayed name of Ice Thorns to Thorned Ice Vines. Each level adds 37 damage to the initial hit, up to 185 at level 5. The active skill retains its Mana cost, root, damage-over-time ticks, cast time and cooldown. No additional character attack contribution. The passive has no activation cost, cast time or cooldown. |
| dmgType (Altformat) | passive |
| effects[0].key | thorned-rose-ice-thorns |
| effects[0].type | damageBonus |
| effects[0].target | self |
| effects[0].appliesTo | specificSkill |
| effects[0].targetSkillNumber | 30 |
| effects[0].value | 37 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 0 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 37 |
| effects[0].valueScaling.perLevel | 37 |
| effects[0].replacementSkillName_de | Dornige Eisranken |
| effects[0].replacementSkillName_eng | Thorned Ice Vines |
| effectsVersion | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 37 |
| levelProgression.rules[0].rule.perLevel | 37 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| resourceCosts | [] |
| skillName_de | Dornige Rose |
| skillName_eng | Thorned Rose |
| skillpoints | 1 |
| type | passive |

## Gemeinsame Blöcke

[Kreaturenskills](../shared-creature-skills.md) und [Trainingsskills](../shared-training-skills.md) werden einmal gemeinsam geprüft. Die normale Lerngrenze für Bindung und Zucht ist bereits 1. Taming hat noch keine klassenspezifische Lerngrenze im Datensatz; der geplante Druide-Maximalwert 1 ist deshalb nur als Plan markiert.

## Reihenfolge

Zuerst die noch unvollständigen Druiden-Skills durchgehen, gemeinsame geprüfte Definitionen übernehmen, anschließend permanente Passive auf den Ausrüstungsstand rechnen. Aktive Buffs, automatische Kampf-Procs und endgültige Schadensverrechnung folgen separat.

# Gladiator / Berserker: Werte und Skillprüfung

<!-- skill-learning-overview:start -->
## Skills nach Lernlevel

Die erste Spalte zeigt das aktuell gespeicherte Lernlevel dieser Klasse. Sortiert nach Lernlevel; noch offene Vorschläge stehen am vorgesehenen Platz. „Offen“ bedeutet: noch kein verbindliches Lernlevel gespeichert. Bereits übernommene Vorschläge werden nicht doppelt angezeigt. Weitere Skillstufen verteilen wir getrennt; „Skillstufen“ bezeichnet die lernbare Ausbaustufe, nicht das Charakterlevel.

Die SP-Spalte zeigt die Kosten der ersten Skillstufe. Die vollständigen Kosten stehen in der Tabelle „Skillpunktkosten je Stufe“. Regulär kostet der vollständige Ausbau 300 SP, ab erstem Lernlevel 55 insgesamt 400 SP; Taming-Skills behalten günstige Sonderkosten. Das alte Feld `skillpoints` und frühere Pauschalsummen sind historisch.

| Ab Charakterlevel | Skill | Noch offene Planung | Weitere Skillstufen ab Charakterlevel | Nr | Lernbare Skillstufen | SP erste Stufe |
| ---: | --- | ---: | --- | ---: | ---: | ---: |
| 1 | Adaption | — | — | 5 | 20 | 1 |
| 2 | Ausdauertraining | — | — | 139 | 20 | 1 |
| 2 | Waffentraining | — | — | 201 | 20 | 1 |
| 4 | Bindung | — | — | 134 | 1 | 6 |
| 4 | Kontrolle | — | — | 135 | 1 | 4 |
| 4 | Rüstungstraining | — | — | 144 | 10 | 1 |
| 4 | Zucht | — | — | 138 | 1 | 5 |
| 5 | Beschwören | — | — | 136 | 1 | 1 |
| 5 | Tamen | — | — | 133 | 1 | 10 |
| 5 | Zurückrufen | — | — | 137 | 1 | 1 |
| 6 | Holzspalter | — | — | 61 | 20 | 12 |
| 9 | Erweiterung des Körpers | — | — | 45 | 10 | 12 |
| 10 | Mächtiger Hieb | — | — | 77 | 10 | 10 |
| 12 | Provozieren | — | — | 158 | 1 | 300 |
| 15 | Dual Axttraining | — | — | 26 | 10 | 10 |
| 17 | Schmetterschlag | — | — | 96 | 10 | 10 |
| 20 | Standhaft | — | — | 140 | 10 | 10 |
| 21 | Sprungschlag | — | — | 106 | 10 | 10 |
| 22 | Verstärkung des Körpers | — | — | 75 | 10 | 10 |
| 25 | Energieausbruch | — | — | 34 | 10 | 10 |
| 30 | Durchhalten | — | — | 145 | 10 | 10 |
| 33 | Innere Kraft | — | — | 162 | 15 | 6 |
| 35 | Energie der Wut | — | — | 161 | 10 | 10 |
| 35 | Wutklinge | — | — | 128 | 10 | 10 |
| 37 | Sturm der Wut | — | — | 109 | 10 | 10 |
| 42 | Überlebenswille | — | — | 114 | 5 | 30 |
| 47 | Kriegerischer Ansturm | — | — | 233 | 10 | 10 |
| 50 | Wutexplosion | — | — | 127 | 10 | 10 |
| 55 | Volles Potential | — | — | 163 | 3 | 107 |
| 60 | Ausbruch der Wut | — | — | 13 | 5 | 40 |
| 60 | Glück des Narrens | — | — | 52 | 5 | 40 |
| 65 | Blutiger Durchbruch | — | — | 230 | 10 | 13 |

[Alte Lernlevel als Vorlage](../legacy-skill-learning-levels.md) · [Alle Klassen](../skill-learning-index.md)
<!-- skill-learning-overview:end -->

**32 Skills. Gesamte SP-Kosten noch offen.** Glück des Narrens hat fünf Stufen mit Glück 1/3/6/8/10 und jeweils fünf kritischen Trefferpunkten pro Stufe, maximal 25. Die Verringerung von zehn auf fünf Stufen spart fünf Skillpunkte und reduziert die bisherigen Maximalboni von 11 auf 10 Glück sowie von 50 auf 25 kritische Trefferpunkte.

Einteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.

**32 unterschiedliche zugeordnete Skills: 19 aktive und 13 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie bei den bisher geprüften Klassen. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.

| Art | Anzahl | Skills |
| --- | ---: | --- |
| Übrige Passive einschließlich Procs | 10 | Adaption, Dual Axttraining, Erweiterung des Körpers, Glück des Narrens, Überlebenswille, Ausdauertraining, Standhaft, Rüstungstraining, Durchhalten, Waffentraining |
| Aktive Skills (Angriff/Heilung/Unterstützung) | 10 | Ausbruch der Wut, Holzspalter, Mächtiger Hieb, Schmetterschlag, Sprungschlag, Sturm der Wut, Wutexplosion, Wutklinge, Blutiger Durchbruch, Kriegerischer Ansturm |
| Eigenbuffs | 5 | Energieausbruch, Provozieren, Energie der Wut, Innere Kraft, Volles Potential |
| Gruppenbuffs | 1 | Verstärkung des Körpers |
| Kreaturen aktiv | 3 | Tamen, Beschwören, Zurückrufen |
| Kreaturen passiv | 3 | Bindung, Kontrolle, Zucht |

## Basis und Ausrüstung

R1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.

### Basis ohne Ausrüstung

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 212 | 482 | 782 | 1.082 | 1.382 | 1.682 | 1.982 |
| Mana | 137 | 407 | 707 | 1.007 | 1.307 | 1.607 | 1.907 |
| P-Angriff | 12 | 28,2 | 46,2 | 64,2 | 82,2 | 100,2 | 118,2 |
| M-Angriff | 6 | 22,2 | 40,2 | 58,2 | 76,2 | 94,2 | 112,2 |
| P-Defense | 9 | 27 | 47 | 67 | 87 | 107 | 127 |
| M-Defense | 3 | 21 | 41 | 61 | 81 | 101 | 121 |

### Mit Rüstung und zwei Einhandäxten

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 762 | 1.032 | 1.532 | 2.332 | 3.132 | 3.782 | 4.732 |
| Mana | 462 | 732 | 1.192 | 1.597 | 2.042 | 2.457 | 2.957 |
| P-Angriff | 36,7 | 52,9 | 96,74 | 157,3 | 242,56 | 363,92 | 551,4 |
| M-Angriff | 6 | 22,2 | 40,2 | 58,2 | 76,2 | 94,2 | 112,2 |
| P-Defense | 95 | 113 | 200 | 364 | 506 | 623 | 841 |
| M-Defense | 57 | 75 | 142 | 231 | 362 | 440 | 530 |

Zwei Einhandäxte sind angesetzt: Hauptwaffe 100 Prozent, Zweitwaffe 90 Prozent einschließlich des Stärkebeitrags. Equipment-Vorschläge sind nicht übernommen. Grundregeneration: 25 Mana und 12 HP pro Tick. Das Intervall wird später in Unreal geprüft. Bestehende gemeinsame Skillwerte werden übernommen; fehlende Werte werden nicht geschätzt.

## Skillübersicht

| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | Adaption | Passive | 20 | HP-Regeneration +0,5<br>Vita +0,5<br>Wisdom +0,5 | Vita: 0,5 bis 10<br>Wisdom: 0,5 bis 10<br>manaRegen: 0,5 bis 10<br>HP-Regeneration: 0,5 bis 10 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 139 | Ausdauertraining | Passive | 20 | Vita +1<br>Wisdom +1 | Vita: 1 bis 20<br>Wisdom: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 201 | Waffentraining | Passive | 20 | P-Angriff +1<br>M-Angriff +1 | P-Angriff: 1 bis 20<br>M-Angriff: 1 bis 20 | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 134 | Bindung | Passive | 3 / Gladiator 1 | Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.<br>statModifier, Ziel companion, str, 10<br>statModifier, Ziel companion, vita, 10<br>statModifier, Ziel companion, int, 10<br>statModifier, Ziel companion, wis, 10 | statModifier/str: 10 bis 20<br>statModifier/vita: 10 bis 20<br>statModifier/int: 10 bis 20<br>statModifier/wis: 10 bis 20 | Keine | Entfällt | Entfällt | str: 0 s<br>vita: 0 s<br>int: 0 s<br>wis: 0 s | Gemeinsame Definition |
| 135 | Kontrolle | Passive | 2 / Gladiator 1 | Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen. | Nicht vollständig gespeichert | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition; Levelskalierung prüfen |
| 144 | Rüstungstraining | Passive | 10 | P-Defense +3<br>M-Defense +6 | P-Defense: 3 bis 30<br>M-Defense: 6 bis 60 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 138 | Zucht | Passive | 3 / Gladiator 1 | Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.<br>experienceBonus, Ziel companion, 0,1 | experienceBonus/: 10 bis 30 % | Keine | Entfällt | Entfällt | experienceBonus: 0 s | Gemeinsame Definition |
| 136 | Beschwören | Skill | 1 | Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 1 | Nicht gespeichert | Gemeinsame Definition |
| 133 | Tamen | Skill | 3 / Gladiator 1 | Versucht, eine Kreatur zu zähmen. Erfordert eine zur Kreaturenvariante passende Zähmungskarte. Die Grundchance wird von der jeweiligen Kreaturenvariante vorgegeben. Tamen multipliziert diese Chance auf Stufe 1 mit 1,0, auf Stufe 2 mit 1,1 und auf Stufe 3 mit 1,2; keine zusätzlichen Prozentpunkte und keine eigene feste Grunderfolgschance. Bei 1 Prozent Grundchance ergeben sich 1 / 1,1 / 1,2 Prozent Erfolgschance je Versuch. Die Formel steigt bei später autorisierten zusätzlichen effektiven Skillstufen um 0,1 je Stufe weiter. Die Definition hat weiterhin drei lernbare Stufen: normale Klassen maximal Stufe 1, Abenteurer maximal Stufe 3; eine zweite Spezialklasse ist noch nicht festgelegt. Mana 100 / 125 / 150, Castzeit 3 / 2,5 / 2 Sekunden und Cooldown 60 / 50 / 40 Sekunden. Kein Schaden und keine anschließende Effektdauer. Konkrete Kreaturen-Grundchancen, Kartenzuordnungen, Itemverbrauch, Zieldistanz und Abbruchbedingungen sind noch festzulegen. | Chancenfaktor ×1,0 / ×1,1 / ×1,2; normale Lerngrenze 1 | Mana-Kosten: 100 bis 150 | 60 bis 40 | 3 bis 2 | 0 (keine anschließende Wirkung) | Gemeinsame Definition; Levelskalierung prüfen |
| 137 | Zurückrufen | Skill | 1 | Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 0 | Nicht gespeichert | Gemeinsame Definition |
| 61 | Holzspalter | Skill / physisch | 20 | P-Angriff +25<br>statModifier, Ziel enemy, pdef, -0,025 | P-Angriff: 25 bis 785<br>statModifier/pdef: -2,5 bis -12 % | Mana-Kosten: 6 bis 196 | 37 | 0.1 | pdef: 5 bis 9,5 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 45 | Erweiterung des Körpers | Passive | 10 | Stärke +1<br>Vita +1<br>Wisdom +1 | Vita: 1 bis 10<br>Stärke: 1 bis 10<br>Wisdom: 1 bis 10 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 77 | Mächtiger Hieb | Skill / physisch | 10 | P-Angriff +73 | P-Angriff: 73 bis 733 | Mana-Kosten: 18 bis 180 | 27 | 0.2 | 0 (einmalig) | Gemeinsame Definition |
| 158 | Provozieren | Selbstbuff | 2 / Gladiator 1 | Aktivierbarer Toggle mit zwei lernbaren Stufen. Gladiator/Berserker können Stufe 1 lernen: Aggro aus verursachtem Schaden mal 2, laufende Kosten 25 Mana je Mana-Regenerationstick. Ritter/Templer können Stufe 2 lernen: Aggro aus verursachtem Schaden mal 3, laufende Kosten 45 Mana je Mana-Regenerationstick. Die bisherigen maximalen Wirkungen und laufenden Kosten bleiben erhalten; nur die Lernstufen wurden zusammengefasst. Fixe zusätzliche Aggro wird nicht mitmultipliziert. Keine feste Wirkungsdauer. Tickintervall vom Mana-Regenerationssystem; bei unzureichendem Mana vorläufig Abschalten. Umschalt-Cooldown 20 Sekunden, Castzeit 0 Sekunden.<br>threatMultiplier, Ziel self, 2<br>resourceDrain, Ziel self, 25 | threatMultiplier/: 2 bis 3<br>resourceDrain/: 25 bis 45 | Aktivierung offen; laufend mana: 25 von undefined je Mana-Regenerationstick | 20 | 0 | threatMultiplier: 0 s<br>resourceDrain: 0 s | Einmalige Aktivierungskosten offen; laufender Verbrauch definiert |
| 26 | Dual Axttraining | Passive | 10 | Stärke +2<br>Agility +1 | Stärke: 2 bis 7<br>Agility: 1 bis 5 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 96 | Schmetterschlag | Skill / physisch | 10 | P-Angriff +111 | P-Angriff: 111 bis 1.368 | Mana-Kosten: 28 bis 343 | 41 | 0.2 | 0 (einmalig) | Gemeinsame Definition |
| 140 | Standhaft | Passive | 10 | Vita +1<br>Wisdom +0,5 | Vita: 1 bis 10<br>Wisdom: 0,5 bis 5 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 106 | Sprungschlag | Skill / physisch | 10 | P-Angriff +391<br>Animation 0,5 s (vorläufig)<br>Fläche: 2 m Radius um Spieler | P-Angriff: 391 bis 1.606 | Mana-Kosten: 98 bis 404 | 45 bis 36 | 0 | Wirkung einmalig; Animation 0,5 s | Gemeinsame Definition |
| 75 | Verstärkung des Körpers | Buff | 10 | Stärke +1<br>Vita +1 | Stärke: 1 bis 10<br>Vita: 1 bis 10 | Mana-Kosten: 47 bis 254 | 60 | 0.2 | 600 | Gemeinsame Definition |
| 34 | Energieausbruch | Selbstbuff | 10 | Erzeugt einen Schild gegen physischen und magischen Schaden mit einer Kapazität von 10 % deines maximalen Lebens, ab Skilllevel 5 mit 12 % und auf Skilllevel 10 mit 15 %. Solange der Schild besteht und ausreichend Mana vorhanden ist, verursachen normale Angriffe 10 % mehr Schaden und du verbrauchst je Mana-Regenerationstick 1 % deines maximalen Manas. Bei unzureichendem Mana enden Angriffsbonus und Manaverbrauch, der Schild bleibt bestehen. Schildbruch beendet alle zugehörigen Effekte. Der Schild hält maximal 15 Sekunden, auf Skilllevel 10 maximal 20 Sekunden. Der Cooldown sinkt von 120 Sekunden auf Skilllevel 1 auf 90 Sekunden auf Skilllevel 10. Castzeit fest 0,1 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.<br>shield, Ziel self, 0,1<br>damageBonus, Ziel self, 0,1<br>resourceDrain, Ziel self, 0,01 | shield/: 10 bis 15 % | Mana-Kosten: 50 bis 167 | 120 bis 90 | 0.1 | shield: 15 bis 20 s<br>damageBonus: 15 bis 20 s<br>resourceDrain: 15 bis 20 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 145 | Durchhalten | Passive | 10 | Stärke +0,8<br>Vita +0,5 | Stärke: 0,8 bis 8<br>Vita: 0,5 bis 5 | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition; Dauerhafter Attributbonus: maximal +8 Stärke und +5 Vitalität; keine direkten Abwehrboni oder Auslösebedingungen |
| 162 | Innere Kraft | Selbstbuff | 15 | Stärke +2<br>Vita +3 | Stärke: 2 bis 20<br>Vita: 3 bis 10<br>Penetration: 0 bis 35 | Mana-Kosten: 50 bis 232 | 60 | 0.1 | 600 | Keine zusätzliche Lernvoraussetzung |
| 161 | Energie der Wut | Selbstbuff | 10 | P-Angriff +85<br>resourceGain, Ziel self, 0,005 | P-Angriff: 85 bis 85<br>resourceGain/: 0,5 bis 1 % | Mana-Kosten: 50 bis 167 | 67 bis 58 | 0.1 | resourceGain: 45 bis 60 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 128 | Wutklinge | Skill / physisch | 10 | P-Angriff +292<br>Ein einzelnes Ziel | P-Angriff: 292 bis 1.375 | rage-Kosten: 5 bis 5 | 53 bis 44 | 0.2 | 0 (einmalig) | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 109 | Sturm der Wut | Skill / physisch | 10 | P-Angriff +281<br>Animation 1 s (vorläufig)<br>Fläche: 3 m Radius um Spieler | P-Angriff: 281 bis 1.247 | rage-Kosten: 5 bis 5 | 65 bis 55 | 0.3 | Wirkung einmalig; Animation 1 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 114 | Überlebenswille | Passive | 5 | Stärke +3<br>P-Defense +30<br>M-Defense +30 | Stärke: 3 bis 7<br>P-Defense: 30 bis 54<br>M-Defense: 30 bis 54 | Keine | 30 | Entfällt | 12 | Gemeinsame Definition |
| 233 | Kriegerischer Ansturm | Skill / physisch | 10 | P-Angriff +137<br>Attack Speed +10 %<br>statModifier, Ziel self, atkSpeed, 0,1 | P-Angriff: 137 bis 1.397<br>statModifier/atkSpeed: 10 bis 20 % | Mana-Kosten: 34 bis 349 | 56 | 0.3 | atkSpeed: 1 bis 2,8 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 127 | Wutexplosion | Skill / physisch | 10 | P-Angriff +399<br>Fläche: 3 m Radius um Spieler | P-Angriff: 399 bis 1.911 | rage-Kosten: 35 bis 35 | 54 | 0.8 | 0 (einmalig) | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 163 | Volles Potential | Selbstbuff | 3 | Luck +1<br>HP +250<br>statModifier, Ziel self, maxMana, 66 | HP: 250 bis 750<br>Luck: 1 bis 3<br>Crit Damage: 0 % bis 1 %<br>statModifier/maxMana: 66 bis 200 | Mana-Kosten: 50 bis 76 | 900 | 0.1 | maxMana: 600 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 13 | Ausbruch der Wut | Skill / physisch | 5 | P-Angriff +900<br>statModifier, Ziel self, str, 4 | P-Angriff: 900 bis 3.936<br>statModifier/str: 4 bis 20 | rage-Kosten: 55 bis 55 | 130 | 0.3 | str: 60 bis 64 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 52 | Glück des Narrens | Passive | 5 | Luck +1<br>Crit-Chance-Wert +5 | Luck: 1 bis 10<br>Crit-Chance-Wert: 5 bis 25 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 230 | Blutiger Durchbruch | Skill / physisch | 10 | P-Angriff +540<br>resourceGain, Ziel self, 5<br>Animation 3 s (vorläufig)<br>Fläche: 3 m Radius um Spieler<br>Maximal 5 Gegner, jeweils ein Treffer<br>Animation blockiert andere Skills | P-Angriff: 540 bis 5.400 | Mana-Kosten: 216 bis 2.160 | 90 bis 81 | 0.4 | resourceGain: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |

## Detaildaten

Gemeinsame Werte werden nicht neu erfunden. Jeder Block zeigt den vollständigen gespeicherten Stand außer der technischen Mongo-ID.

### 5: Adaption

Permanenter passiver Menschen-Grundskill mit 20 Stufen. Je gelernter Stufe +0,5 Vitalität und +0,5 Willenskraft, auf Stufe 20 jeweils +10. Direkte HP- und MP-Regeneration bleiben jeweils bei +0,5 je Stufe, auf Stufe 20 jeweils +10 je zugehörigem Regenerationstick. Diese Boni werden zur Grundregeneration und anderen Boni addiert. Keine Aktivierungskosten, Castzeit oder Cooldown.

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
| skillName_eng | Adaptation |
| category | Human |
| charClass[0] | Witcher |
| charClass[1] | Herbalist |
| charClass[2] | Knight |
| charClass[3] | Templar |
| charClass[4] | Archer |
| charClass[5] | Hunter |
| charClass[6] | Gladiator |
| charClass[7] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanenter passiver Menschen-Grundskill mit 20 Stufen. Je gelernter Stufe +0,5 Vitalität und +0,5 Willenskraft, auf Stufe 20 jeweils +10. Direkte HP- und MP-Regeneration bleiben jeweils bei +0,5 je Stufe, auf Stufe 20 jeweils +10 je zugehörigem Regenerationstick. Diese Boni werden zur Grundregeneration und anderen Boni addiert. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent passive Human core skill with 20 levels. Each learned level grants +0.5 Vitality and +0.5 Wisdom, reaching +10 each at level 20. Direct Health and Mana regeneration each remain +0.5 per level, reaching +10 each per associated regeneration tick. Additive with base regeneration and other bonuses. No activation costs, cast time or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 5 |
| skillName_de | Adaption |
| skillpoints | 1 |
| vita | 0,5 |
| wis | 0,5 |
| allowedRaces[0] | Human |
| isClassCore | true |
| unlockPhase | race |
| resourceCosts | [] |
| statScaling.vita.type | linear |
| statScaling.vita.base | 0,5 |
| statScaling.vita.perLevel | 0,5 |
| statScaling.wis.type | linear |
| statScaling.wis.base | 0,5 |
| statScaling.wis.perLevel | 0,5 |
| statScaling.manaRegen.type | linear |
| statScaling.manaRegen.base | 0,5 |
| statScaling.manaRegen.perLevel | 0,5 |
| statScaling.healthRegen.type | linear |
| statScaling.healthRegen.base | 0,5 |
| statScaling.healthRegen.perLevel | 0,5 |
| healthRegen | 0,5 |
| manaRegen | 0,5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | vita |
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
| levelProgression.rules[2].rule.base | 0,5 |
| levelProgression.rules[2].rule.perLevel | 0,5 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | healthRegen |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 0,5 |
| levelProgression.rules[3].rule.perLevel | 0,5 |
| levelProgression.rules[3].source | storedFormula |
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

### 61: Holzspalter

Führt einen mächtigen Schlag aus einem Sprung heraus aus. Der physische Grundschaden beginnt bei 25 und steigt um 40 je weiterer Stufe auf 785 auf Stufe 20. Senkt die physische Verteidigung getroffener Gegner zunächst um 2,5 Prozent, je weiterer Stufe um 0,5 Prozentpunkte stärker, bis zu 12 Prozent. Der Effekt hält zunächst 5 Sekunden und steigt gleichmäßig auf 9,5 Sekunden auf Stufe 20. Mana-Kosten 6 auf Stufe 1, +10 je weiterer Stufe, maximal 196 auf Stufe 20. Castzeit 0,1 Sekunden, Cooldown 37 Sekunden auf Stufe 1 und 37 Sekunden auf Stufe 20. Die bisherige Zusatzregel einer Erstattung von 50 Prozent der Mana-Kosten bei einem kritischen Treffer bleibt zur weiteren Prüfung vorgemerkt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| skillPointCosts.classRankCosts.gladiator.0 | 12 |
| skillPointCosts.classRankCosts.gladiator.1 | 12 |
| skillPointCosts.classRankCosts.gladiator.2 | 13 |
| skillPointCosts.classRankCosts.gladiator.3 | 13 |
| skillPointCosts.classRankCosts.gladiator.4 | 13 |
| skillPointCosts.classRankCosts.gladiator.5 | 14 |
| skillPointCosts.classRankCosts.gladiator.6 | 14 |
| skillPointCosts.classRankCosts.gladiator.7 | 14 |
| skillPointCosts.classRankCosts.gladiator.8 | 15 |
| skillPointCosts.classRankCosts.gladiator.9 | 15 |
| skillPointCosts.classRankCosts.gladiator.10 | 15 |
| skillPointCosts.classRankCosts.gladiator.11 | 15 |
| skillPointCosts.classRankCosts.gladiator.12 | 16 |
| skillPointCosts.classRankCosts.gladiator.13 | 16 |
| skillPointCosts.classRankCosts.gladiator.14 | 16 |
| skillPointCosts.classRankCosts.gladiator.15 | 17 |
| skillPointCosts.classRankCosts.gladiator.16 | 17 |
| skillPointCosts.classRankCosts.gladiator.17 | 17 |
| skillPointCosts.classRankCosts.gladiator.18 | 18 |
| skillPointCosts.classRankCosts.gladiator.19 | 18 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| learningRequirements.classOverrides.gladiator | 6 |
| learningRequirements.minimumCharacterLevel | 6 |
| skillName_eng | Woodsplitter |
| category | active |
| cd | 37 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Führt einen mächtigen Schlag aus einem Sprung heraus aus. Der physische Grundschaden beginnt bei 25 und steigt um 40 je weiterer Stufe auf 785 auf Stufe 20. Senkt die physische Verteidigung getroffener Gegner zunächst um 2,5 Prozent, je weiterer Stufe um 0,5 Prozentpunkte stärker, bis zu 12 Prozent. Der Effekt hält zunächst 5 Sekunden und steigt gleichmäßig auf 9,5 Sekunden auf Stufe 20. Mana-Kosten 6 auf Stufe 1, +10 je weiterer Stufe, maximal 196 auf Stufe 20. Castzeit 0,1 Sekunden, Cooldown 37 Sekunden auf Stufe 1 und 37 Sekunden auf Stufe 20. Die bisherige Zusatzregel einer Erstattung von 50 Prozent der Mana-Kosten bei einem kritischen Treffer bleibt zur weiteren Prüfung vorgemerkt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Performs a powerful strike from a jump. Base physical damage starts at 25 and increases by 40 per additional level to 785 at level 20. Reduces affected enemies physical defense by 2.5 percent initially, increasing by 0.5 percentage points per additional level to 12 percent. The effect duration increases evenly from 5 to 9.5 seconds at level 20. Mana cost 6 at level 1, maximum 196 at level 20. Cast time is 0.1 seconds; Cooldown 37 seconds at level 1 and 37 seconds at level 20. The previous rule refunding 50 percent of Mana cost on a critical hit remains noted for further review. |
| dmgType (Altformat) | physical |
| dur | 5 |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 61 |
| patk | 25 |
| skillName_de | Holzspalter |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| durationScaling.type | linear |
| durationScaling.base | 5 |
| durationScaling.perLevel | 0,237 |
| effects[0].key | woodsplitter-defense-reduction |
| effects[0].type | statModifier |
| effects[0].target | enemy |
| effects[0].stat | pdef |
| effects[0].reference | targetStat |
| effects[0].value | -0,025 |
| effects[0].unit | fraction |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | -0,025 |
| effects[0].valueScaling.perLevel | -0,005 |
| effects[0].durationSeconds | 5 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 5 |
| effects[0].durationScaling.perLevel | 0,237 |
| mana (Aktivierungskosten, kein Bonus) | 6 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 6 |
| resourceCosts[0].scaling.perLevel | 10 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 25 |
| statScaling.patk.perLevel | 40 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 5 |
| levelProgression.rules[0].rule.perLevel | 0,237 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | -0,025 |
| levelProgression.rules[1].rule.perLevel | -0,005 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | durationScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 5 |
| levelProgression.rules[2].rule.perLevel | 0,237 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | resourceCosts |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | scaling |
| levelProgression.rules[3].rule.kind | outputCost |
| levelProgression.rules[3].rule.factor | 0,25 |
| levelProgression.rules[3].rule.basis | damage |
| levelProgression.rules[3].rule.minimum | 0 |
| levelProgression.rules[3].source | verifiedManaPricing |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | patk |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 25 |
| levelProgression.rules[4].rule.perLevel | 40 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 45: Erweiterung des Körpers

Permanenter passiver Bonus mit zehn Stufen. Stärke, Vitalität und Willenskraft erhalten jeweils folgende Boni auf Stufe 1 bis 10: 1 / 1,5 / 2 / 2,5 / 3 / 3,5 / 4 / 4,5 / 5 / 10. Alle bisherigen Attributboni sind auf jeder Stufe halbiert. Keine Aktivierungskosten, Castzeit oder Cooldown.

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
| skillName_eng | Expansion of the Body |
| category | passive |
| charClass[0] | Knight |
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
| classificationVersion | 1 |
| type | passive |

### 77: Mächtiger Hieb

Trifft den Gegner nach 0,2 Sekunden Aufladen mit einem mächtigen Hieb. Der physische Skill-Grundschaden steigt gleichmäßig von 73 auf Stufe 1 auf 733 auf Stufe 10. Mana-Kosten 18 auf Stufe 1, +18 je weiterer Stufe, maximal 180 auf Stufe 10. Keine anhaltende Wirkungsdauer, bisheriger Cooldown 27 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| skillPointCosts.classRankCosts.knight.0 | 12 |
| skillPointCosts.classRankCosts.knight.1 | 16 |
| skillPointCosts.classRankCosts.knight.2 | 20 |
| skillPointCosts.classRankCosts.knight.3 | 24 |
| skillPointCosts.classRankCosts.knight.4 | 28 |
| skillPointCosts.classRankCosts.knight.5 | 32 |
| skillPointCosts.classRankCosts.knight.6 | 36 |
| skillPointCosts.classRankCosts.knight.7 | 40 |
| skillPointCosts.classRankCosts.knight.8 | 44 |
| skillPointCosts.classRankCosts.knight.9 | 48 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| learningRequirements.minimumCharacterLevel | 10 |
| skillName_eng | Mighty Strike |
| category | active |
| cd | 27 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| charClass[2] | Knight |
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

### 158: Provozieren

Aktivierbarer Toggle mit zwei lernbaren Stufen. Gladiator/Berserker können Stufe 1 lernen: Aggro aus verursachtem Schaden mal 2, laufende Kosten 25 Mana je Mana-Regenerationstick. Ritter/Templer können Stufe 2 lernen: Aggro aus verursachtem Schaden mal 3, laufende Kosten 45 Mana je Mana-Regenerationstick. Die bisherigen maximalen Wirkungen und laufenden Kosten bleiben erhalten; nur die Lernstufen wurden zusammengefasst. Fixe zusätzliche Aggro wird nicht mitmultipliziert. Keine feste Wirkungsdauer. Tickintervall vom Mana-Regenerationssystem; bei unzureichendem Mana vorläufig Abschalten. Umschalt-Cooldown 20 Sekunden, Castzeit 0 Sekunden.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 130 |
| skillPointCosts.rankCosts.0 | 130 |
| skillPointCosts.rankCosts.1 | 170 |
| skillPointCosts.classRankCosts.gladiator.0 | 300 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 12 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Provoke |
| category | active |
| cd | 20 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| charClass[2] | Knight |
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
| learningLimits.classOverrides.Knight | 2 |
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

### 26: Dual Axttraining

Verbessert dauerhaft deine Fertigkeiten im Kampf mit zwei Einhandäxten. Auf Skilllevel 1 erhältst du 2 Stärke und 1 Agility. Je weiterer Stufe steigt abwechselnd Stärke oder Agility um 1, beginnend mit Stärke auf Stufe 2. Auf Stufe 10 erhältst du insgesamt 7 Stärke und 5 Agility. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer.

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
| skillName_eng | Dual Axe Training |
| category | passive |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Verbessert dauerhaft deine Fertigkeiten im Kampf mit zwei Einhandäxten. Auf Skilllevel 1 erhältst du 2 Stärke und 1 Agility. Je weiterer Stufe steigt abwechselnd Stärke oder Agility um 1, beginnend mit Stärke auf Stufe 2. Auf Stufe 10 erhältst du insgesamt 7 Stärke und 5 Agility. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit, Cooldown oder begrenzte Wirkungsdauer. |
| description_eng | Permanently improves your proficiency with two one-handed axes. At skill level 1, gain 2 Strength and 1 Agility. Each additional level alternately adds 1 Strength or 1 Agility, starting with Strength at level 2. Level 10 grants a total of 7 Strength and 5 Agility. Permanent passive skill with no activation cost, cast time, cooldown or limited duration. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 26 |
| skillName_de | Dual Axttraining |
| skillpoints | 1 |
| str | 2 |
| agi | 1 |
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
| statScaling.agi.type | table |
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
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | periodicSteps |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.steps[0] | 1 |
| levelProgression.rules[0].rule.steps[1] | 0 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | agi |
| levelProgression.rules[1].rule.kind | periodicSteps |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.steps[0] | 0 |
| levelProgression.rules[1].rule.steps[1] | 1 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 96: Schmetterschlag

Mit roher Gewalt schlägst du auf deinen Gegner ein und verursachst dabei großen Schaden. Der physische Skill-Grundschaden steigt gleichmäßig von 111 auf Stufe 1 auf 1368 auf Stufe 10. Die Mana-Kosten 28 auf Stufe 1, +35 je weiterer Stufe, maximal 343 auf Stufe 10. Die Castzeit beträgt 0,2 Sekunden. Keine anhaltende Schadensdauer. Genaue Zielwahl und Trefferfläche sind noch zu prüfen. Cooldown 41 Sekunden auf Stufe 1 und 41 Sekunden auf Stufe 10. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| learningRequirements.minimumCharacterLevel | 17 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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

### 140: Standhaft

Dauerhafter Attributanteil: je gelernter Stufe +1 Vitalität, +0,5 Willenskraft; auf Stufe 10 insgesamt +10 Vitalität, +5 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Keine Aktivierungskosten, Castzeit oder Cooldown.

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
| learningRequirements.minimumCharacterLevel | 20 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Steadfast |
| category | passive |
| charClass[0] | Butcher |
| charClass[1] | Destroyer |
| charClass[2] | Knight |
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

### 106: Sprungschlag

Springt senkrecht hoch und schlägt mit der Waffe auf den Boden. Trifft Gegner in einem kreisförmigen Bereich mit 2 Metern Radius um dich, ohne Vorwärtsbewegung oder zusätzlichen Debuff. Der physische Skill-Grundschaden steigt gleichmäßig von 391 auf Stufe 1 auf 1606 auf Stufe 10. Die Mana-Kosten 98 auf Stufe 1, +34 je weiterer Stufe, maximal 404 auf Stufe 10. Der Cooldown 45 Sekunden auf Stufe 1 und 36 Sekunden auf Stufe 10. Die Aktion beginnt ohne zusätzliche Cast Time; die Animation dauert vorläufig 0,5 Sekunden. Sprunghöhe und genauer Trefferzeitpunkt werden im Spiel geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| learningRequirements.minimumCharacterLevel | 21 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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

### 75: Verstärkung des Körpers

Gruppenbuff für dich, Gruppenmitglieder und Begleiter. Je Stufe +1 Stärke und +1 Vitalität, auf Stufe 10 jeweils +10. Dauer 10 Minuten, Cooldown 60 Sekunden, Castzeit 0,2 Sekunden. Mana-Kosten: 47 + 23 je weiterer Stufe.

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
| skillName_eng | Body Reinforcement |
| category | active |
| cd | 60 |
| charClass[0] | Knight |
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

### 34: Energieausbruch

Erzeugt einen Schild gegen physischen und magischen Schaden mit einer Kapazität von 10 % deines maximalen Lebens, ab Skilllevel 5 mit 12 % und auf Skilllevel 10 mit 15 %. Solange der Schild besteht und ausreichend Mana vorhanden ist, verursachen normale Angriffe 10 % mehr Schaden und du verbrauchst je Mana-Regenerationstick 1 % deines maximalen Manas. Bei unzureichendem Mana enden Angriffsbonus und Manaverbrauch, der Schild bleibt bestehen. Schildbruch beendet alle zugehörigen Effekte. Der Schild hält maximal 15 Sekunden, auf Skilllevel 10 maximal 20 Sekunden. Der Cooldown sinkt von 120 Sekunden auf Skilllevel 1 auf 90 Sekunden auf Skilllevel 10. Castzeit fest 0,1 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

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
| learningRequirements.minimumCharacterLevel | 25 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Energy Outburst |
| category | active |
| cd | 120 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erzeugt einen Schild gegen physischen und magischen Schaden mit einer Kapazität von 10 % deines maximalen Lebens, ab Skilllevel 5 mit 12 % und auf Skilllevel 10 mit 15 %. Solange der Schild besteht und ausreichend Mana vorhanden ist, verursachen normale Angriffe 10 % mehr Schaden und du verbrauchst je Mana-Regenerationstick 1 % deines maximalen Manas. Bei unzureichendem Mana enden Angriffsbonus und Manaverbrauch, der Schild bleibt bestehen. Schildbruch beendet alle zugehörigen Effekte. Der Schild hält maximal 15 Sekunden, auf Skilllevel 10 maximal 20 Sekunden. Der Cooldown sinkt von 120 Sekunden auf Skilllevel 1 auf 90 Sekunden auf Skilllevel 10. Castzeit fest 0,1 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Creates a shield absorbing damage equal to 10% of maximum Health, 12% from level 5 and 15% at level 10. While the shield persists and sufficient Mana remains, basic attacks deal 10% more damage and consume 1% maximum Mana per regeneration tick. Shield break ends associated effects. Lasts 15 seconds, 20 seconds at level 10. Cooldown decreases from 120 to 90 seconds. Fixed cast time 0.1 seconds. Costs 50 Mana at level 1 plus 13 per additional level, before discounts. |
| dmgType (Altformat) | spell |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 34 |
| skillName_de | Energieausbruch |
| skillpoints | 1 |
| activation | manual |
| dur | 15 |
| effects[0].disablesEffects | [] |
| effects[0].valueScaling.type | table |
| effects[0].valueScaling.values[0] | 0,1 |
| effects[0].valueScaling.values[1] | 0,1 |
| effects[0].valueScaling.values[2] | 0,1 |
| effects[0].valueScaling.values[3] | 0,1 |
| effects[0].valueScaling.values[4] | 0,12 |
| effects[0].valueScaling.values[5] | 0,12 |
| effects[0].valueScaling.values[6] | 0,12 |
| effects[0].valueScaling.values[7] | 0,12 |
| effects[0].valueScaling.values[8] | 0,12 |
| effects[0].valueScaling.values[9] | 0,15 |
| effects[0].durationScaling.type | table |
| effects[0].durationScaling.values[0] | 15 |
| effects[0].durationScaling.values[1] | 15 |
| effects[0].durationScaling.values[2] | 15 |
| effects[0].durationScaling.values[3] | 15 |
| effects[0].durationScaling.values[4] | 15 |
| effects[0].durationScaling.values[5] | 15 |
| effects[0].durationScaling.values[6] | 15 |
| effects[0].durationScaling.values[7] | 15 |
| effects[0].durationScaling.values[8] | 15 |
| effects[0].durationScaling.values[9] | 20 |
| effects[0].type | shield |
| effects[0].target | self |
| effects[0].allowedRaces | [] |
| effects[0].value | 0,1 |
| effects[0].unit | fraction |
| effects[0].reference | maxHealth |
| effects[0].damageTypes[0] | physical |
| effects[0].damageTypes[1] | magical |
| effects[0].durationSeconds | 15 |
| effects[0].key | shield |
| effects[1].disablesEffects | [] |
| effects[1].valueScaling.values | [] |
| effects[1].durationScaling.type | table |
| effects[1].durationScaling.values[0] | 15 |
| effects[1].durationScaling.values[1] | 15 |
| effects[1].durationScaling.values[2] | 15 |
| effects[1].durationScaling.values[3] | 15 |
| effects[1].durationScaling.values[4] | 15 |
| effects[1].durationScaling.values[5] | 15 |
| effects[1].durationScaling.values[6] | 15 |
| effects[1].durationScaling.values[7] | 15 |
| effects[1].durationScaling.values[8] | 15 |
| effects[1].durationScaling.values[9] | 20 |
| effects[1].type | damageBonus |
| effects[1].target | self |
| effects[1].allowedRaces | [] |
| effects[1].value | 0,1 |
| effects[1].unit | fraction |
| effects[1].appliesTo | basicAttack |
| effects[1].damageTypes | [] |
| effects[1].durationSeconds | 15 |
| effects[1].endWith | shield |
| effects[1].key | basic-attack-bonus |
| effects[2].onInsufficientResource | disableEffects |
| effects[2].disablesEffects[0] | basic-attack-bonus |
| effects[2].disablesEffects[1] | mana-drain |
| effects[2].valueScaling.values | [] |
| effects[2].durationScaling.type | table |
| effects[2].durationScaling.values[0] | 15 |
| effects[2].durationScaling.values[1] | 15 |
| effects[2].durationScaling.values[2] | 15 |
| effects[2].durationScaling.values[3] | 15 |
| effects[2].durationScaling.values[4] | 15 |
| effects[2].durationScaling.values[5] | 15 |
| effects[2].durationScaling.values[6] | 15 |
| effects[2].durationScaling.values[7] | 15 |
| effects[2].durationScaling.values[8] | 15 |
| effects[2].durationScaling.values[9] | 20 |
| effects[2].type | resourceDrain |
| effects[2].target | self |
| effects[2].allowedRaces | [] |
| effects[2].value | 0,01 |
| effects[2].unit | fraction |
| effects[2].reference | maxMana |
| effects[2].resource | mana |
| effects[2].damageTypes | [] |
| effects[2].durationSeconds | 15 |
| effects[2].endWith | shield |
| effects[2].key | mana-drain |
| effects[2].intervalSource | manaRegenerationTick |
| effectsVersion | 1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 120 |
| cooldownScaling.perLevel | -3,333 |
| durationScaling.type | table |
| durationScaling.values[0] | 15 |
| durationScaling.values[1] | 15 |
| durationScaling.values[2] | 15 |
| durationScaling.values[3] | 15 |
| durationScaling.values[4] | 15 |
| durationScaling.values[5] | 15 |
| durationScaling.values[6] | 15 |
| durationScaling.values[7] | 15 |
| durationScaling.values[8] | 15 |
| durationScaling.values[9] | 20 |
| castTimeSeconds | 0,1 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | thresholds |
| levelProgression.rules[0].rule.base | 0,1 |
| levelProgression.rules[0].rule.changes[0].level | 5 |
| levelProgression.rules[0].rule.changes[0].value | 0,12 |
| levelProgression.rules[0].rule.changes[1].level | 10 |
| levelProgression.rules[0].rule.changes[1].value | 0,15 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | durationScaling |
| levelProgression.rules[1].rule.kind | thresholds |
| levelProgression.rules[1].rule.base | 15 |
| levelProgression.rules[1].rule.changes[0].level | 10 |
| levelProgression.rules[1].rule.changes[0].value | 20 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 1 |
| levelProgression.rules[2].path[2] | durationScaling |
| levelProgression.rules[2].rule.kind | thresholds |
| levelProgression.rules[2].rule.base | 15 |
| levelProgression.rules[2].rule.changes[0].level | 10 |
| levelProgression.rules[2].rule.changes[0].value | 20 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 2 |
| levelProgression.rules[3].path[2] | durationScaling |
| levelProgression.rules[3].rule.kind | thresholds |
| levelProgression.rules[3].rule.base | 15 |
| levelProgression.rules[3].rule.changes[0].level | 10 |
| levelProgression.rules[3].rule.changes[0].value | 20 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.rules[4].path[0] | cooldownScaling |
| levelProgression.rules[4].rule.kind | bounded |
| levelProgression.rules[4].rule.min | 0,1 |
| levelProgression.rules[4].rule.rule.kind | linear |
| levelProgression.rules[4].rule.rule.base | 120 |
| levelProgression.rules[4].rule.rule.perLevel | -3,333 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | durationScaling |
| levelProgression.rules[5].rule.kind | thresholds |
| levelProgression.rules[5].rule.base | 15 |
| levelProgression.rules[5].rule.changes[0].level | 10 |
| levelProgression.rules[5].rule.changes[0].value | 20 |
| levelProgression.rules[5].source | verifiedExistingLevels |
| levelProgression.rules[6].path[0] | resourceCosts |
| levelProgression.rules[6].path[1] | 0 |
| levelProgression.rules[6].path[2] | scaling |
| levelProgression.rules[6].rule.kind | bounded |
| levelProgression.rules[6].rule.min | 0 |
| levelProgression.rules[6].rule.rule.kind | linear |
| levelProgression.rules[6].rule.rule.base | 50 |
| levelProgression.rules[6].rule.rule.perLevel | 13 |
| levelProgression.rules[6].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| castTimeStatus | defined |
| timingModifiers.castTimeIsFixed | true |
| timingModifiers.affectedByAttackSpeed | false |
| timingModifiers.affectedByCastSpeed | false |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| manaPricing.category | selfbuff |
| manaPricing.basis | skillLevel |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| classificationVersion | 1 |
| target | self |
| type | selfBuff |

### 145: Durchhalten

Dauerhafter Attributanteil: je gelernter Stufe +0,8 Stärke, +0,5 Vitalität; auf Stufe 10 insgesamt +8 Stärke, +5 Vitalität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Permanenter Attributbonus ohne Auslöser. Keine direkten Abwehrboni, Aktivierungskosten, Castzeit oder Cooldown.

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
| skillName_eng | Endurance |
| category | passive |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| charClass[2] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +0,8 Stärke, +0,5 Vitalität; auf Stufe 10 insgesamt +8 Stärke, +5 Vitalität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Permanenter Attributbonus ohne Auslöser. Keine direkten Abwehrboni, Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent attribute component: +0.8 Strength, +0.5 Vitality per learned level; at level 10, +8 Strength, +5 Vitality total. This component always applies independently of any triggered effects. Permanent attributes without a trigger. No direct defense bonus, activation cost, cast time or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 145 |
| skillName_de | Durchhalten |
| skillpoints | 1 |
| vita | 0,5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0,8 |
| levelProgression.rules[0].rule.perLevel | 0,8 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | vita |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,5 |
| levelProgression.rules[1].rule.perLevel | 0,5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |
| statScaling.str.type | linear |
| statScaling.str.base | 0,8 |
| statScaling.str.perLevel | 0,8 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 0,5 |
| statScaling.vita.perLevel | 0,5 |
| str | 0,8 |

### 162: Innere Kraft

Eigenbuff mit 15 Skillstufen für 600 Sekunden. Stärke je Stufe: 2/3/5/6/7/8/10/11/12/14/15/16/17/19/20. Vitalität beginnt bei 3 und steigt auf jeder geraden Stufe um 1 bis 10. Auf ungeraden Stufen ab Stufe 3 kommen jeweils 5 feste Penetrationspunkte hinzu, maximal 35. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 232 auf Stufe 15, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

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
| learningRequirements.minimumCharacterLevel | 33 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Inner Strength |
| category | active |
| cd | 60 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff mit 15 Skillstufen für 600 Sekunden. Stärke je Stufe: 2/3/5/6/7/8/10/11/12/14/15/16/17/19/20. Vitalität beginnt bei 3 und steigt auf jeder geraden Stufe um 1 bis 10. Auf ungeraden Stufen ab Stufe 3 kommen jeweils 5 feste Penetrationspunkte hinzu, maximal 35. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 232 auf Stufe 15, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff with 15 skill levels lasting 600 seconds. Strength by level: 2/3/5/6/7/8/10/11/12/14/15/16/17/19/20. Vitality starts at 3 and increases by 1 at each even level to 10. Each odd level from level 3 adds 5 flat penetration rating, reaching 35. Cooldown 60 seconds. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 232 at level 15, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 600 |
| maxSkillLv | 15 |
| maxUpgradeLv | 10 |
| nr | 162 |
| skillName_de | Innere Kraft |
| skillpoints | 1 |
| str | 2 |
| vita | 3 |
| statBonusUnits.penetration | flat |
| statScaling.str.type | table |
| statScaling.str.base | 2 |
| statScaling.str.values[0] | 2 |
| statScaling.str.values[1] | 3 |
| statScaling.str.values[2] | 5 |
| statScaling.str.values[3] | 6 |
| statScaling.str.values[4] | 7 |
| statScaling.str.values[5] | 8 |
| statScaling.str.values[6] | 10 |
| statScaling.str.values[7] | 11 |
| statScaling.str.values[8] | 12 |
| statScaling.str.values[9] | 14 |
| statScaling.str.values[10] | 15 |
| statScaling.str.values[11] | 16 |
| statScaling.str.values[12] | 17 |
| statScaling.str.values[13] | 19 |
| statScaling.str.values[14] | 20 |
| statScaling.vita.type | table |
| statScaling.vita.values[0] | 3 |
| statScaling.vita.values[1] | 4 |
| statScaling.vita.values[2] | 4 |
| statScaling.vita.values[3] | 5 |
| statScaling.vita.values[4] | 5 |
| statScaling.vita.values[5] | 6 |
| statScaling.vita.values[6] | 6 |
| statScaling.vita.values[7] | 7 |
| statScaling.vita.values[8] | 7 |
| statScaling.vita.values[9] | 8 |
| statScaling.vita.values[10] | 8 |
| statScaling.vita.values[11] | 9 |
| statScaling.vita.values[12] | 9 |
| statScaling.vita.values[13] | 10 |
| statScaling.vita.values[14] | 10 |
| statScaling.penetration.type | table |
| statScaling.penetration.values[0] | 0 |
| statScaling.penetration.values[1] | 0 |
| statScaling.penetration.values[2] | 5 |
| statScaling.penetration.values[3] | 5 |
| statScaling.penetration.values[4] | 10 |
| statScaling.penetration.values[5] | 10 |
| statScaling.penetration.values[6] | 15 |
| statScaling.penetration.values[7] | 15 |
| statScaling.penetration.values[8] | 20 |
| statScaling.penetration.values[9] | 20 |
| statScaling.penetration.values[10] | 25 |
| statScaling.penetration.values[11] | 25 |
| statScaling.penetration.values[12] | 30 |
| statScaling.penetration.values[13] | 30 |
| statScaling.penetration.values[14] | 35 |
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
| levelProgression.rules[0].path[1] | str |
| levelProgression.rules[0].rule.kind | periodicSteps |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.steps[0] | 1 |
| levelProgression.rules[0].rule.steps[1] | 2 |
| levelProgression.rules[0].rule.steps[2] | 1 |
| levelProgression.rules[0].rule.steps[3] | 1 |
| levelProgression.rules[0].rule.steps[4] | 1 |
| levelProgression.rules[0].rule.steps[5] | 2 |
| levelProgression.rules[0].rule.steps[6] | 1 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | vita |
| levelProgression.rules[1].rule.kind | periodicSteps |
| levelProgression.rules[1].rule.base | 3 |
| levelProgression.rules[1].rule.steps[0] | 1 |
| levelProgression.rules[1].rule.steps[1] | 0 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | penetration |
| levelProgression.rules[2].rule.kind | periodicSteps |
| levelProgression.rules[2].rule.base | 0 |
| levelProgression.rules[2].rule.steps[0] | 0 |
| levelProgression.rules[2].rule.steps[1] | 5 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.rules[3].path[0] | resourceCosts |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | scaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0 |
| levelProgression.rules[3].rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.base | 50 |
| levelProgression.rules[3].rule.rule.perLevel | 13 |
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

### 161: Energie der Wut

Eigenbuff, der deinen physischen Angriff auf allen Skillstufen um 85 erhöht. Während der Buff aktiv ist, erzeugen ausschließlich deine Auto-Attacks Wut: 0,5 Wutpunkte je Angriff auf Stufe 1 bei einer Leiste von 100 Punkten. Je weiterer Stufe kommen bis Stufe 9 0,05 Punkte hinzu; Stufe 10 erreicht genau 1 Wutpunkt je Auto-Attack. Skills und Begleiter erzeugen durch diesen Effekt keine Wut. Die Dauer steigt gemäß ganzzahliger Stufentabelle von 45 auf 60 Sekunden, der Cooldown 67 Sekunden auf Stufe 1 und 58 Sekunden auf Stufe 10. Wutaufbau im Verhältnis zum Angriffstempo wird später geprüft. Castzeit fest 0,1 Sekunden. Wutaufbau durch Auto-Attacks ist ausschließlich während dieses Buffs möglich; es gibt keinen zusätzlichen Grund-Wutgewinn durch Auto-Attacks außerhalb des Buffs. Eigene Wutgewinne anderer Skills, beispielsweise die 5 Wut von Blutiger Durchbruch, sind davon unabhängig und benötigen diesen Buff nicht. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

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
| learningRequirements.minimumCharacterLevel | 35 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Energy of Anger |
| category | active |
| cd | 67 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff, der deinen physischen Angriff auf allen Skillstufen um 85 erhöht. Während der Buff aktiv ist, erzeugen ausschließlich deine Auto-Attacks Wut: 0,5 Wutpunkte je Angriff auf Stufe 1 bei einer Leiste von 100 Punkten. Je weiterer Stufe kommen bis Stufe 9 0,05 Punkte hinzu; Stufe 10 erreicht genau 1 Wutpunkt je Auto-Attack. Skills und Begleiter erzeugen durch diesen Effekt keine Wut. Die Dauer steigt gemäß ganzzahliger Stufentabelle von 45 auf 60 Sekunden, der Cooldown 67 Sekunden auf Stufe 1 und 58 Sekunden auf Stufe 10. Wutaufbau im Verhältnis zum Angriffstempo wird später geprüft. Castzeit fest 0,1 Sekunden. Wutaufbau durch Auto-Attacks ist ausschließlich während dieses Buffs möglich; es gibt keinen zusätzlichen Grund-Wutgewinn durch Auto-Attacks außerhalb des Buffs. Eigene Wutgewinne anderer Skills, beispielsweise die 5 Wut von Blutiger Durchbruch, sind davon unabhängig und benötigen diesen Buff nicht. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self-buff granting 85 physical attack at every level. While active, only your basic attacks generate Rage: 0.5 Rage per attack at level 1, rising to 1 at level 10 on a 100-point bar. Skills and companions do not generate Rage through this effect. Duration rises from 45 to 60 seconds; cooldown decreases from 67 to 58 seconds. Fixed cast time 0.1 seconds. Costs 50 Mana at level 1 plus 13 per additional level, before discounts. Basic attacks generate no Rage without this buff. Independent Rage gains granted by other skills, such as the 5 Rage from Bloody Breakthrough, do not require this buff. |
| dmgType (Altformat) | selfbuff |
| dur | 45 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 161 |
| patk | 85 |
| skillName_de | Energie der Wut |
| skillpoints | 1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 67 |
| cooldownScaling.perLevel | -1 |
| durationScaling.type | table |
| durationScaling.values[0] | 45 |
| durationScaling.values[1] | 46 |
| durationScaling.values[2] | 48 |
| durationScaling.values[3] | 49 |
| durationScaling.values[4] | 51 |
| durationScaling.values[5] | 52 |
| durationScaling.values[6] | 54 |
| durationScaling.values[7] | 55 |
| durationScaling.values[8] | 57 |
| durationScaling.values[9] | 60 |
| effects[0].key | energy-anger-basic-attack-rage |
| effects[0].type | resourceGain |
| effects[0].target | self |
| effects[0].resource | rage |
| effects[0].reference | maxRage |
| effects[0].value | 0,005 |
| effects[0].unit | fraction |
| effects[0].valueScaling.type | table |
| effects[0].valueScaling.values[0] | 0,005 |
| effects[0].valueScaling.values[1] | 0,006 |
| effects[0].valueScaling.values[2] | 0,006 |
| effects[0].valueScaling.values[3] | 0,007 |
| effects[0].valueScaling.values[4] | 0,007 |
| effects[0].valueScaling.values[5] | 0,008 |
| effects[0].valueScaling.values[6] | 0,008 |
| effects[0].valueScaling.values[7] | 0,009 |
| effects[0].valueScaling.values[8] | 0,009 |
| effects[0].valueScaling.values[9] | 0,01 |
| effects[0].gainTrigger | ownBasicAttack |
| effects[0].oncePerAttackAction | true |
| effects[0].excludeCompanionAttacks | true |
| effects[0].durationSeconds | 45 |
| effects[0].durationScaling.type | table |
| effects[0].durationScaling.values[0] | 45 |
| effects[0].durationScaling.values[1] | 46 |
| effects[0].durationScaling.values[2] | 48 |
| effects[0].durationScaling.values[3] | 49 |
| effects[0].durationScaling.values[4] | 51 |
| effects[0].durationScaling.values[5] | 52 |
| effects[0].durationScaling.values[6] | 54 |
| effects[0].durationScaling.values[7] | 55 |
| effects[0].durationScaling.values[8] | 57 |
| effects[0].durationScaling.values[9] | 60 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 85 |
| statScaling.patk.perLevel | 0 |
| castTimeSeconds | 0,1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 67 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | sum |
| levelProgression.rules[1].rule.terms[0].kind | periodicSteps |
| levelProgression.rules[1].rule.terms[0].base | 45 |
| levelProgression.rules[1].rule.terms[0].steps[0] | 1 |
| levelProgression.rules[1].rule.terms[0].steps[1] | 2 |
| levelProgression.rules[1].rule.terms[1].kind | thresholds |
| levelProgression.rules[1].rule.terms[1].base | 0 |
| levelProgression.rules[1].rule.terms[1].changes[0].level | 10 |
| levelProgression.rules[1].rule.terms[1].changes[0].value | 2 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | sum |
| levelProgression.rules[2].rule.terms[0].kind | linear |
| levelProgression.rules[2].rule.terms[0].base | 0,005 |
| levelProgression.rules[2].rule.terms[0].perLevel | 0,001 |
| levelProgression.rules[2].rule.terms[1].kind | thresholds |
| levelProgression.rules[2].rule.terms[1].base | 0 |
| levelProgression.rules[2].rule.terms[1].changes[0].level | 10 |
| levelProgression.rules[2].rule.terms[1].changes[0].value | 0,001 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | durationScaling |
| levelProgression.rules[3].rule.kind | sum |
| levelProgression.rules[3].rule.terms[0].kind | periodicSteps |
| levelProgression.rules[3].rule.terms[0].base | 45 |
| levelProgression.rules[3].rule.terms[0].steps[0] | 1 |
| levelProgression.rules[3].rule.terms[0].steps[1] | 2 |
| levelProgression.rules[3].rule.terms[1].kind | thresholds |
| levelProgression.rules[3].rule.terms[1].base | 0 |
| levelProgression.rules[3].rule.terms[1].changes[0].level | 10 |
| levelProgression.rules[3].rule.terms[1].changes[0].value | 2 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.rules[4].path[0] | resourceCosts |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | scaling |
| levelProgression.rules[4].rule.kind | bounded |
| levelProgression.rules[4].rule.min | 0 |
| levelProgression.rules[4].rule.rule.kind | linear |
| levelProgression.rules[4].rule.rule.base | 50 |
| levelProgression.rules[4].rule.rule.perLevel | 13 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | statScaling |
| levelProgression.rules[5].path[1] | patk |
| levelProgression.rules[5].rule.kind | linear |
| levelProgression.rules[5].rule.base | 85 |
| levelProgression.rules[5].rule.perLevel | 0 |
| levelProgression.rules[5].source | storedFormula |
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

### 128: Wutklinge

Kann nur eingesetzt werden, solange der Buff Ausbruch der Wut aktiv ist. Trifft einen einzelnen Gegner einmal physisch. Der physische Skill-Grundschaden steigt gleichmäßig von 292 auf Stufe 1 auf 1375 auf Stufe 10. Kostet 5 Wutpunkte und kein Mana; erzeugt keine Wut. Castzeit 0,2 Sekunden. Der Cooldown 53 Sekunden auf Stufe 1 und 44 Sekunden auf Stufe 10. Keine anhaltende Wirkungsdauer. Die frühere Regel von 5 zusätzlichem Angriff je Wutpunkt ist durch diese feste Skalierung ersetzt.

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
| learningRequirements.minimumCharacterLevel | 35 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Berserk Slash |
| category | active |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Kann nur eingesetzt werden, solange der Buff Ausbruch der Wut aktiv ist. Trifft einen einzelnen Gegner einmal physisch. Der physische Skill-Grundschaden steigt gleichmäßig von 292 auf Stufe 1 auf 1375 auf Stufe 10. Kostet 5 Wutpunkte und kein Mana; erzeugt keine Wut. Castzeit 0,2 Sekunden. Der Cooldown 53 Sekunden auf Stufe 1 und 44 Sekunden auf Stufe 10. Keine anhaltende Wirkungsdauer. Die frühere Regel von 5 zusätzlichem Angriff je Wutpunkt ist durch diese feste Skalierung ersetzt. |
| description_eng | Requires the Outburst of Anger buff to be active. Hits a single enemy once physically. Physical skill base damage increases evenly from 292 at level 1 to 1375 at level 10. Costs 5 Rage points and no Mana; generates no Rage. Cast time is 0.2 seconds. Cooldown 53 seconds at level 1 and 44 seconds at level 10. No lasting effect. The former rule granting 5 attack per Rage point is replaced by this fixed scaling. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 128 |
| patk | 292 |
| skillName_de | Wutklinge |
| skillpoints | 1 |
| activationRequirements.activeBuff.skillNumber | 13 |
| activationRequirements.activeBuff.effectKey | rage-outburst-strength |
| attackExecution.targetMode | singleEnemy |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | pending |
| castTimeSeconds | 0,2 |
| cd | 53 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 53 |
| cooldownScaling.perLevel | -1 |
| hasLingeringDamage | false |
| resourceCosts[0].resource | rage |
| resourceCosts[0].reference | maxRage |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 5 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 292 |
| statScaling.patk.perLevel | 120,333 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 53 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | constant |
| levelProgression.rules[1].rule.rule.value | 5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 292 |
| levelProgression.rules[2].rule.perLevel | 120,333 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 109: Sturm der Wut

Kann nur eingesetzt werden, solange der Stärke-Buff von Ausbruch der Wut aktiv ist. Verursacht einmalig physischen Schaden an Gegnern um dich herum, ohne Mehrfachtreffer. Der physische Skill-Grundschaden steigt gleichmäßig von 281 auf Stufe 1 auf 1247 auf Stufe 10. Der Cooldown 65 Sekunden auf Stufe 1 und 55 Sekunden auf Stufe 10. Castzeit 0,3 Sekunden. Die Animation dauert vorläufig 1 Sekunde; keine anhaltende Schadenswirkung. Der Radius beträgt 3 Meter. Der Skill kostet kein Mana. Kostet 5 Wutpunkte und kein Mana. Gibt keine Wut zurück. Zusammen mit Ausbruch der Wut (55), Wutexplosion (35) und Wutklinge (5) werden genau 100 Wutpunkte verbraucht.

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
| skillName_eng | Storm of Wrath |
| category | active |
| cd | 65 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Kann nur eingesetzt werden, solange der Stärke-Buff von Ausbruch der Wut aktiv ist. Verursacht einmalig physischen Schaden an Gegnern um dich herum, ohne Mehrfachtreffer. Der physische Skill-Grundschaden steigt gleichmäßig von 281 auf Stufe 1 auf 1247 auf Stufe 10. Der Cooldown 65 Sekunden auf Stufe 1 und 55 Sekunden auf Stufe 10. Castzeit 0,3 Sekunden. Die Animation dauert vorläufig 1 Sekunde; keine anhaltende Schadenswirkung. Der Radius beträgt 3 Meter. Der Skill kostet kein Mana. Kostet 5 Wutpunkte und kein Mana. Gibt keine Wut zurück. Zusammen mit Ausbruch der Wut (55), Wutexplosion (35) und Wutklinge (5) werden genau 100 Wutpunkte verbraucht. |
| description_eng | Requires the Strength buff from Outburst of Anger to be active. Deals physical damage once to enemies around you, without multiple hits. Physical skill base damage increases evenly from 281 at level 1 to 1247 at level 10. Cooldown 65 seconds at level 1 and 55 seconds at level 10. Cast time is 0.3 seconds. Provisional animation duration is 1 second, with no ongoing damage. Radius is 3 meters. The skill costs no Mana. Costs 5 Rage points and no Mana. Does not restore Rage. Together with Outburst of Anger (55), Rage Explosion (35) and Berserk Slash (5), the four attacks consume exactly 100 Rage points. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 109 |
| patk | 281 |
| skillName_de | Sturm der Wut |
| skillpoints | 1 |
| activationRequirements.activeBuff.skillNumber | 13 |
| activationRequirements.activeBuff.effectKey | rage-outburst-strength |
| animationDurationSeconds | 1 |
| animationTimingStatus | provisional |
| attackArea.shape | circle |
| attackArea.center | caster |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | atImpact |
| attackArea.timingStatus | pending |
| attackArea.radiusMeters | 3 |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | pending |
| castTimeSeconds | 0,3 |
| cooldownScaling.type | table |
| cooldownScaling.values[0] | 65 |
| cooldownScaling.values[1] | 64 |
| cooldownScaling.values[2] | 63 |
| cooldownScaling.values[3] | 62 |
| cooldownScaling.values[4] | 61 |
| cooldownScaling.values[5] | 60 |
| cooldownScaling.values[6] | 59 |
| cooldownScaling.values[7] | 58 |
| cooldownScaling.values[8] | 57 |
| cooldownScaling.values[9] | 55 |
| effects | [] |
| hasLingeringDamage | false |
| statScaling.patk.type | linear |
| statScaling.patk.base | 281 |
| statScaling.patk.perLevel | 107,333 |
| resourceCosts[0].resource | rage |
| resourceCosts[0].reference | maxRage |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | rounded |
| levelProgression.rules[0].rule.rule.mode | ceil |
| levelProgression.rules[0].rule.rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.rule.base | 65 |
| levelProgression.rules[0].rule.rule.rule.perLevel | -1,111 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 281 |
| levelProgression.rules[1].rule.perLevel | 107,333 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | constant |
| levelProgression.rules[2].rule.rule.value | 5 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 114: Überlebenswille

Eigene Angriffe können Überlebenswille auslösen, wenn der Skill bereit ist: unter 30 Prozent Leben mit 5 Prozent Chance, unter 20 Prozent mit 10 Prozent und unter 10 Prozent mit 30 Prozent. Es gilt nur die niedrigste passende Lebensschwelle. Der Buff erhöht für 12 Sekunden Stärke um 3 sowie physische und magische Verteidigung jeweils um 30. Je weiterer Skillstufe kommen 1 Stärke und jeweils 6 Verteidigung hinzu, bis zu 7 Stärke und jeweils 54 Verteidigung auf Level 5. Der Cooldown beträgt 30 Sekunden. Der Skill verändert weder Vitalität noch maximales Leben.

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
| learningRequirements.minimumCharacterLevel | 42 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Will to Survive |
| category | passive |
| cd | 30 |
| charClass[0] | Knight |
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

### 233: Kriegerischer Ansturm

Stürmt auf den Gegner zu und stößt ihn zurück. Verursacht einmalig physischen Grundschaden von 137 auf Skilllevel 1, plus 140 je weiterer Stufe, bis zu 1397 auf Stufe 10. Mana-Kosten 34 auf Stufe 1, +35 je weiterer Stufe, maximal 349 auf Stufe 10. Castzeit 0,3 Sekunden, Cooldown 56 Sekunden auf Stufe 1 und 56 Sekunden auf Stufe 10. Anschließend erhöht ein Eigenbuff Attack Speed um 10 Prozent auf Stufe 1, gleichmäßig steigend bis exakt 20 Prozent auf Stufe 10. Die Buffdauer steigt von 1 Sekunde um 0,2 Sekunden je weiterer Stufe auf 2,8 Sekunden. Der Angriff selbst verursacht keinen Schaden über Zeit. Ansturmdistanz und Rückstoß werden später genauer festgelegt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| learningRequirements.minimumCharacterLevel | 47 |
| skillName_eng | Warrior's Charge |
| atkSpeed | 0,1 |
| category | active |
| cd | 56 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Stürmt auf den Gegner zu und stößt ihn zurück. Verursacht einmalig physischen Grundschaden von 137 auf Skilllevel 1, plus 140 je weiterer Stufe, bis zu 1397 auf Stufe 10. Mana-Kosten 34 auf Stufe 1, +35 je weiterer Stufe, maximal 349 auf Stufe 10. Castzeit 0,3 Sekunden, Cooldown 56 Sekunden auf Stufe 1 und 56 Sekunden auf Stufe 10. Anschließend erhöht ein Eigenbuff Attack Speed um 10 Prozent auf Stufe 1, gleichmäßig steigend bis exakt 20 Prozent auf Stufe 10. Die Buffdauer steigt von 1 Sekunde um 0,2 Sekunden je weiterer Stufe auf 2,8 Sekunden. Der Angriff selbst verursacht keinen Schaden über Zeit. Ansturmdistanz und Rückstoß werden später genauer festgelegt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Charges at the enemy and pushes them back. Deals base physical damage once, starting at 137 at skill level 1 and increasing by 140 per additional level to 1397 at level 10. Mana cost 34 at level 1, maximum 349 at level 10. Cast time is 0.3 seconds; Cooldown 56 seconds at level 1 and 56 seconds at level 10. A subsequent self buff increases attack speed by 10 percent at level 1, increasing evenly to exactly 20 percent at level 10. Buff duration increases from 1 second by 0.2 seconds per additional level to 2.8 seconds. The attack itself deals no damage over time. Charge distance and knockback details will be defined later. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 233 |
| patk | 137 |
| skillName_de | Kriegerischer Ansturm |
| skillpoints | 1 |
| mana (Aktivierungskosten, kein Bonus) | 34 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 34 |
| resourceCosts[0].scaling.perLevel | 35 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 137 |
| statScaling.patk.perLevel | 140 |
| castTimeSeconds | 0,3 |
| dur | 1 |
| durationScaling.type | linear |
| durationScaling.base | 1 |
| durationScaling.perLevel | 0,2 |
| effects[0].key | warrior-charge-attack-speed |
| effects[0].type | statModifier |
| effects[0].target | self |
| effects[0].stat | atkSpeed |
| effects[0].value | 0,1 |
| effects[0].unit | fraction |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0,1 |
| effects[0].valueScaling.perLevel | 0,011 |
| effects[0].durationSeconds | 1 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 1 |
| effects[0].durationScaling.perLevel | 0,2 |
| statBonusUnits.atkSpeed | fraction |
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
| levelProgression.rules[1].rule.base | 137 |
| levelProgression.rules[1].rule.perLevel | 140 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | durationScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 1 |
| levelProgression.rules[2].rule.perLevel | 0,2 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | valueScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 0,1 |
| levelProgression.rules[3].rule.perLevel | 0,011 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | durationScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 1 |
| levelProgression.rules[4].rule.perLevel | 0,2 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 127: Wutexplosion

Kann nur eingesetzt werden, solange der Buff Ausbruch der Wut aktiv ist. Verursacht einmalig physischen Schaden an Gegnern in einem Radius von 3 Metern um dich. Der Grundschaden steigt von 399 um 168 je weiterer Stufe auf 1911 auf Stufe 10. Gewährt keinen zusätzlichen Stärke-Buff und erzeugt keine Wut. Castzeit 0,8 Sekunden, Cooldown 54 Sekunden auf Stufe 1 und 54 Sekunden auf Stufe 10. Kostet 35 Wutpunkte und kein Mana.

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
| learningRequirements.minimumCharacterLevel | 50 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Rage Explosion |
| category | active |
| cd | 54 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Kann nur eingesetzt werden, solange der Buff Ausbruch der Wut aktiv ist. Verursacht einmalig physischen Schaden an Gegnern in einem Radius von 3 Metern um dich. Der Grundschaden steigt von 399 um 168 je weiterer Stufe auf 1911 auf Stufe 10. Gewährt keinen zusätzlichen Stärke-Buff und erzeugt keine Wut. Castzeit 0,8 Sekunden, Cooldown 54 Sekunden auf Stufe 1 und 54 Sekunden auf Stufe 10. Kostet 35 Wutpunkte und kein Mana. |
| description_eng | Requires the Outburst of Anger buff to be active. Deals physical damage once to enemies within a 3 meter radius around you. Base damage increases from 399 by 168 per additional level to 1911 at level 10. Grants no additional Strength buff and generates no Rage. Cast time is 0.8 seconds; Cooldown 54 seconds at level 1 and 54 seconds at level 10. Costs 35 Rage points and no Mana. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 127 |
| patk | 399 |
| skillName_de | Wutexplosion |
| skillpoints | 1 |
| activationRequirements.activeBuff.skillNumber | 13 |
| activationRequirements.activeBuff.effectKey | rage-outburst-strength |
| attackArea.shape | circle |
| attackArea.center | caster |
| attackArea.radiusMeters | 3 |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | atImpact |
| attackArea.timingStatus | pending |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | pending |
| castTimeSeconds | 0,8 |
| effects | [] |
| hasLingeringDamage | false |
| statScaling.patk.type | linear |
| statScaling.patk.base | 399 |
| statScaling.patk.perLevel | 168 |
| resourceCosts[0].resource | rage |
| resourceCosts[0].reference | maxRage |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 35 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | patk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 399 |
| levelProgression.rules[0].rule.perLevel | 168 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | constant |
| levelProgression.rules[1].rule.rule.value | 35 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 163: Volles Potential

Eigenbuff mit drei Stufen; vereint Volles Potential und Kritische Schläge. Max-Leben +250/+500/+750; Glück +1/+2/+3; Max-Mana +66/+133/+200. Auf Maximalstufe zusätzlich +1 Prozentpunkt kritischer Schadensbonus (ohne weitere Boni 81 statt 80 Prozent Zusatzschaden bei kritischen Treffern). Normale Treffer erhalten diesen Bonus nicht. Kein zusätzlicher P-Angriff mehr. Kritische Schläge wird nicht zusätzlich gelernt oder gestapelt. Lebens- und Manaboni erhöhen die Maximalwerte, stellen die Ressourcen nicht sofort wieder her. Dauer 600 Sekunden, Cooldown 900 Sekunden, Castzeit fest 0,1 Sekunden. Aktivierungskosten 50 Mana auf Stufe 1, +13 je weiterer Stufe bis 76 Mana. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 76 auf Stufe 3, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 107 |
| skillPointCosts.rankCosts.0 | 107 |
| skillPointCosts.rankCosts.1 | 133 |
| skillPointCosts.rankCosts.2 | 160 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 55 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Full Potential |
| category | active |
| cd | 900 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff mit drei Stufen; vereint Volles Potential und Kritische Schläge. Max-Leben +250/+500/+750; Glück +1/+2/+3; Max-Mana +66/+133/+200. Auf Maximalstufe zusätzlich +1 Prozentpunkt kritischer Schadensbonus (ohne weitere Boni 81 statt 80 Prozent Zusatzschaden bei kritischen Treffern). Normale Treffer erhalten diesen Bonus nicht. Kein zusätzlicher P-Angriff mehr. Kritische Schläge wird nicht zusätzlich gelernt oder gestapelt. Lebens- und Manaboni erhöhen die Maximalwerte, stellen die Ressourcen nicht sofort wieder her. Dauer 600 Sekunden, Cooldown 900 Sekunden, Castzeit fest 0,1 Sekunden. Aktivierungskosten 50 Mana auf Stufe 1, +13 je weiterer Stufe bis 76 Mana. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 76 auf Stufe 3, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Three-level self buff combining Full Potential and Critical Strikes. Maximum Health +250/+500/+750, Luck +1/+2/+3, maximum Mana +66/+133/+200. At maximum level adds 1 percentage point critical damage bonus (81 instead of 80 percent bonus damage without other bonuses); normal hits unaffected. No physical attack bonus. Critical Strikes is no longer separately learned or stacked. Maximum-resource bonuses do not directly restore resources. Duration 600 seconds, cooldown 900 seconds, fixed cast time 0.1 seconds. Activation cost 50 plus 13 per additional level to 76 Mana. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 76 at level 3, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 600 |
| health | 250 |
| maxSkillLv | 3 |
| maxUpgradeLv | 10 |
| nr | 163 |
| skillName_de | Volles Potential |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statScaling.health.type | linear |
| statScaling.health.base | 250 |
| statScaling.health.perLevel | 250 |
| statScaling.luck.type | linear |
| statScaling.luck.base | 1 |
| statScaling.luck.perLevel | 1 |
| statScaling.critDamageBonus.type | table |
| statScaling.critDamageBonus.values[0] | 0 |
| statScaling.critDamageBonus.values[1] | 0 |
| statScaling.critDamageBonus.values[2] | 0,01 |
| effects[0].key | full-potential-max-mana |
| effects[0].type | statModifier |
| effects[0].target | self |
| effects[0].stat | maxMana |
| effects[0].value | 66 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 66 |
| effects[0].valueScaling.perLevel | 67 |
| effects[0].durationSeconds | 600 |
| luck | 1 |
| statBonusUnits.luck | flat |
| statBonusUnits.critDamageBonus | fraction |
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
| levelProgression.rules[1].path[1] | health |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 250 |
| levelProgression.rules[1].rule.perLevel | 250 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | luck |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 1 |
| levelProgression.rules[2].rule.perLevel | 1 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | critDamageBonus |
| levelProgression.rules[3].rule.kind | thresholds |
| levelProgression.rules[3].rule.base | 0 |
| levelProgression.rules[3].rule.changes[0].level | 3 |
| levelProgression.rules[3].rule.changes[0].value | 0,01 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | valueScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 66 |
| levelProgression.rules[4].rule.perLevel | 67 |
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

### 13: Ausbruch der Wut

Entfesselt bei mindestens 55 Wutpunkten einen einmaligen physischen Angriff und stärkt dich anschließend. Der physische Skill-Grundschaden steigt gleichmäßig von 900 auf Stufe 1 um 759 je weiterer Stufe auf 3936 auf Stufe 5. Anschließend erhältst du 4 Stärke je Skillstufe, maximal 20 auf Stufe 5, die auch deine anderen Angriffe und Skills beeinflusst. Der Buff hält zunächst 60 Sekunden und je weiterer Stufe 1 Sekunde länger, bis zu 64 Sekunden. Castzeit 0,3 Sekunden, Cooldown 130 Sekunden auf Stufe 1 und 130 Sekunden auf Stufe 5. Verbraucht 55 Wutpunkte und kein Mana. Eigene Auto-Attacks erzeugen ausschließlich während Energie der Wut Wutpunkte; zwei Waffen zählen als eine gemeinsame Aktion. Wut ist die spezielle Ressource des Gladiators und seiner Weiterentwicklung Berserker.

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
| skillName_eng | Outburst of Anger |
| category | active |
| cd | 130 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Entfesselt bei mindestens 55 Wutpunkten einen einmaligen physischen Angriff und stärkt dich anschließend. Der physische Skill-Grundschaden steigt gleichmäßig von 900 auf Stufe 1 um 759 je weiterer Stufe auf 3936 auf Stufe 5. Anschließend erhältst du 4 Stärke je Skillstufe, maximal 20 auf Stufe 5, die auch deine anderen Angriffe und Skills beeinflusst. Der Buff hält zunächst 60 Sekunden und je weiterer Stufe 1 Sekunde länger, bis zu 64 Sekunden. Castzeit 0,3 Sekunden, Cooldown 130 Sekunden auf Stufe 1 und 130 Sekunden auf Stufe 5. Verbraucht 55 Wutpunkte und kein Mana. Eigene Auto-Attacks erzeugen ausschließlich während Energie der Wut Wutpunkte; zwei Waffen zählen als eine gemeinsame Aktion. Wut ist die spezielle Ressource des Gladiators und seiner Weiterentwicklung Berserker. |
| description_eng | Requires at least 55 Rage points to unleash a single physical attack followed by a Strength buff. Physical skill base damage increases evenly from 900 at level 1 by 759 per additional level to 3936 at level 5. Afterwards grants 4 Strength per skill level, up to 20 at level 5, also benefiting your other attacks and skills. The buff starts at 60 seconds and lasts 1 second longer per additional level, reaching 64 seconds. Cast time is 0.3 seconds, Cooldown 130 seconds at level 1 and 130 seconds at level 5. Costs 55 Rage points and no Mana. Own basic attacks generate Rage only while Energy of Anger is active; dual weapons count as one action. Rage is the special resource of Gladiator and its advancement Berserker. |
| dmgType (Altformat) | physical |
| dur | 60 |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 13 |
| patk | 900 |
| skillName_de | Ausbruch der Wut |
| skillpoints | 1 |
| activation | manual |
| activationRequirements.resource | rage |
| activationRequirements.minimumFraction | 0,55 |
| activationRequirements.generationSource | basicAttacks |
| activationRequirements.generationAmountStatus | defined |
| castTimeSeconds | 0,3 |
| durationScaling.type | linear |
| durationScaling.base | 60 |
| durationScaling.perLevel | 1 |
| effects[0].key | rage-outburst-strength |
| effects[0].type | statModifier |
| effects[0].target | self |
| effects[0].stat | str |
| effects[0].value | 4 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 60 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 60 |
| effects[0].durationScaling.perLevel | 1 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 4 |
| effects[0].valueScaling.perLevel | 4 |
| resourceCosts[0].resource | rage |
| resourceCosts[0].reference | maxRage |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 55 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 900 |
| statScaling.patk.perLevel | 759 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 60 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 60 |
| levelProgression.rules[1].rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 4 |
| levelProgression.rules[2].rule.perLevel | 4 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | resourceCosts |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | scaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0 |
| levelProgression.rules[3].rule.rule.kind | constant |
| levelProgression.rules[3].rule.rule.value | 55 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | patk |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 900 |
| levelProgression.rules[4].rule.perLevel | 759 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 52: Glück des Narrens

Permanente Passive mit fünf Stufen. Glück steigt ganzzahlig von 1 auf 10: je Stufe 1/3/6/8/10. Gewährt zusätzlich 5 kritische Trefferpunkte je Skillstufe, bis zu 25 auf Stufe 5. Kritische Trefferpunkte sind keine direkten Prozentwerte und garantieren keine kritischen Treffer. Enthält den bisherigen Bonus von Lucky Strike. Keine Aktivierungskosten.

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
| skillName_eng | Fool of Luck |
| category | passive |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanente Passive mit fünf Stufen. Glück steigt ganzzahlig von 1 auf 10: je Stufe 1/3/6/8/10. Gewährt zusätzlich 5 kritische Trefferpunkte je Skillstufe, bis zu 25 auf Stufe 5. Kritische Trefferpunkte sind keine direkten Prozentwerte und garantieren keine kritischen Treffer. Enthält den bisherigen Bonus von Lucky Strike. Keine Aktivierungskosten. |
| description_eng | Permanent passive with five levels. Luck increases in integer steps from 1 to 10: 1/3/6/8/10 by level. Also grants 5 critical chance rating per skill level, reaching 25 at level 5. Rating points are not direct percentages and do not guarantee critical hits. Includes the former Lucky Strike bonus. No activation costs. |
| dmgType (Altformat) | passive |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 52 |
| skillName_de | Glück des Narrens |
| skillpoints | 1 |
| luck | 1 |
| resourceCosts | [] |
| statScaling.luck.type | table |
| statScaling.luck.values[0] | 1 |
| statScaling.luck.values[1] | 3 |
| statScaling.luck.values[2] | 6 |
| statScaling.luck.values[3] | 8 |
| statScaling.luck.values[4] | 10 |
| statScaling.critChanceRating.type | linear |
| statScaling.critChanceRating.base | 5 |
| statScaling.critChanceRating.perLevel | 5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | luck |
| levelProgression.rules[0].rule.kind | rounded |
| levelProgression.rules[0].rule.mode | round |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 1 |
| levelProgression.rules[0].rule.rule.perLevel | 2,25 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | critChanceRating |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 5 |
| levelProgression.rules[1].rule.perLevel | 5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| critChanceRating | 5 |
| classificationVersion | 1 |
| type | passive |

### 230: Blutiger Durchbruch

Wirft eine Axt auf das Hauptziel, stürmt kurz hinterher und schlägt mit der zweiten Axt frontal zu. Beim Herausziehen der ersten Axt folgt ein kreisförmiger Abschlussschlag. Gesamter P-Skill-Grundschaden: 540 auf Stufe 1, +540 je weiterer Stufe, 5400 auf Stufe 10. Die drei Phasen verteilen diesen Grundschaden im Verhältnis 1:2:3 (maximal 900/1800/2700); jede Phase addiert den vollen aktuellen P-Angriff. Erzeugt einmalig 5 Wut beim ersten erfolgreichen Schadenstreffer, unabhängig von der Anzahl getroffener Gegner. Dieser eigene Skill-Wutgewinn erfordert weder Energie der Wut noch einen anderen Buff oder Auto-Attack. Haupttreffer ein Ziel, Folgehiebe maximal fünf Gegner; Abschlussradius 3 m. Exakte Ansturmreichweite und Frontfläche noch offen. Vorläufige Trefferzeiten 0/1/2 Sekunden nach Castende; Animation 3 Sekunden. Mana 216 +216 je weiterer Stufe, maximal 2160. Castzeit 0,4 Sekunden; Cooldown unverändert 90 bis 81 Sekunden. Keine Tötung erforderlich.

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
| skillName_eng | Bloody Breakthrough |
| category | active |
| cd | 90 |
| charClass[0] | Gladiator |
| charClass[1] | Berserker |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Wirft eine Axt auf das Hauptziel, stürmt kurz hinterher und schlägt mit der zweiten Axt frontal zu. Beim Herausziehen der ersten Axt folgt ein kreisförmiger Abschlussschlag. Gesamter P-Skill-Grundschaden: 540 auf Stufe 1, +540 je weiterer Stufe, 5400 auf Stufe 10. Die drei Phasen verteilen diesen Grundschaden im Verhältnis 1:2:3 (maximal 900/1800/2700); jede Phase addiert den vollen aktuellen P-Angriff. Erzeugt einmalig 5 Wut beim ersten erfolgreichen Schadenstreffer, unabhängig von der Anzahl getroffener Gegner. Dieser eigene Skill-Wutgewinn erfordert weder Energie der Wut noch einen anderen Buff oder Auto-Attack. Haupttreffer ein Ziel, Folgehiebe maximal fünf Gegner; Abschlussradius 3 m. Exakte Ansturmreichweite und Frontfläche noch offen. Vorläufige Trefferzeiten 0/1/2 Sekunden nach Castende; Animation 3 Sekunden. Mana 216 +216 je weiterer Stufe, maximal 2160. Castzeit 0,4 Sekunden; Cooldown unverändert 90 bis 81 Sekunden. Keine Tötung erforderlich. |
| description_eng | Throws an axe, follows with a short rush and frontal sweep, then pulls the axe free with a circular finishing sweep. Total physical skill base damage 540 plus 540 per additional level, reaching 5400. Three phases split skill base 1:2:3; each separately adds full current physical attack. Grants 5 rage once on the first successful damaging hit, regardless of target count. This skill-specific Rage gain does not require Energy of Wrath, any other buff or a basic attack. Initial target single; later sweeps at most five enemies, final radius 3m. Rush distance and frontal geometry pending. Provisional impacts 0/1/2 seconds after cast completion; animation 3 seconds. Mana 216 plus 216 per additional level, maximum 2160. Cast 0.4 seconds, unchanged cooldown 90 to 81 seconds. No kill required. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 230 |
| patk | 540 |
| skillName_de | Blutiger Durchbruch |
| skillpoints | 1 |
| attackArea.shape | circle |
| attackArea.center | caster |
| attackArea.radiusMeters | 3 |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | atImpact |
| attackArea.timingStatus | pending |
| attackArea.maxTargets | 5 |
| castTimeSeconds | 0,4 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 90 |
| cooldownScaling.perLevel | -1 |
| mana (Aktivierungskosten, kein Bonus) | 216 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 216 |
| resourceCosts[0].scaling.perLevel | 216 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 540 |
| statScaling.patk.perLevel | 540 |
| animationDurationSeconds | 3 |
| animationTimingStatus | provisional |
| attackExecution.hitCount | 3 |
| attackExecution.damageValueScope | perApplication |
| attackExecution.sequenceScalesSkillBaseOnly | true |
| attackExecution.hitTimingStatus | pending |
| attackExecution.hitSequence[0].offsetSeconds | 0 |
| attackExecution.hitSequence[0].damageMultiplier | 0,167 |
| attackExecution.hitSequence[0].phase | Axtwurf |
| attackExecution.hitSequence[0].targetMode | singleEnemy |
| attackExecution.hitSequence[0].maxTargets | 1 |
| attackExecution.hitSequence[1].offsetSeconds | 1 |
| attackExecution.hitSequence[1].damageMultiplier | 0,333 |
| attackExecution.hitSequence[1].phase | Ansturm und Hieb |
| attackExecution.hitSequence[1].targetMode | frontalSweep |
| attackExecution.hitSequence[1].maxTargets | 5 |
| attackExecution.hitSequence[2].offsetSeconds | 2 |
| attackExecution.hitSequence[2].damageMultiplier | 0,5 |
| attackExecution.hitSequence[2].phase | Abschlussschlag |
| attackExecution.hitSequence[2].targetMode | circle |
| attackExecution.hitSequence[2].maxTargets | 5 |
| attackExecution.hitSequence[2].radius | 3 |
| blocksOtherSkillsDuringAnimation | true |
| hasLingeringDamage | false |
| manaPricing.category | finisher |
| manaPricing.factor | 0,4 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| effects[0].key | breakthroughRage |
| effects[0].type | resourceGain |
| effects[0].resource | rage |
| effects[0].target | self |
| effects[0].value | 5 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 0 |
| effects[0].gainTrigger | ownSkillDamage |
| effects[0].oncePerSkillApplication | true |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 90 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | outputCost |
| levelProgression.rules[1].rule.factor | 0,4 |
| levelProgression.rules[1].rule.basis | damage |
| levelProgression.rules[1].rule.minimum | 0 |
| levelProgression.rules[1].source | verifiedManaPricing |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 540 |
| levelProgression.rules[2].rule.perLevel | 540 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

## Gemeinsame Blöcke

[Kreaturenskills](../shared-creature-skills.md) und [Trainingsskills](../shared-training-skills.md) werden einmal gemeinsam geprüft. Die normale Lerngrenze für Bindung und Zucht ist bereits 1. Taming und Kontrolle sind für Gladiator und Berserker auf Stufe 1 begrenzt.

## Reihenfolge

Zuerst die noch unvollständigen Gladiatorn-Skills durchgehen, gemeinsame geprüfte Definitionen übernehmen, anschließend permanente Passive auf den Ausrüstungsstand rechnen. Aktive Buffs, automatische Kampf-Procs und endgültige Schadensverrechnung folgen separat.

<!-- full-skill-point-costs:start -->
## Skillpunktkosten je Stufe

Aktuell vollständig gespeichert: **8227 SP** für alle 32 Skills einschließlich günstiger Taming-Sonderkosten. Weitere Charakterlevel für einzelne Ausbaustufen sind davon getrennt und noch zu verteilen. Alte Pauschalsummen in historischen Prüfabschnitten gelten nicht für diese Preise.

| Nr | Skill | SP je Skillstufe | Gesamt-SP |
| ---: | --- | --- | ---: |
| 5 | Adaption | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 13 | Ausbruch der Wut | 40 / 60 / 80 / 100 / 120 | 400 |
| 26 | Dual Axttraining | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 34 | Energieausbruch | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 45 | Erweiterung des Körpers | 12 / 16 / 20 / 24 / 28 / 32 / 36 / 40 / 44 / 48 | 300 |
| 52 | Glück des Narrens | 40 / 60 / 80 / 100 / 120 | 400 |
| 61 | Holzspalter | 12 / 12 / 13 / 13 / 13 / 14 / 14 / 14 / 15 / 15 / 15 / 15 / 16 / 16 / 16 / 17 / 17 / 17 / 18 / 18 | 300 |
| 75 | Verstärkung des Körpers | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 77 | Mächtiger Hieb | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 96 | Schmetterschlag | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 106 | Sprungschlag | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 109 | Sturm der Wut | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 114 | Überlebenswille | 30 / 45 / 60 / 75 / 90 | 300 |
| 127 | Wutexplosion | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 128 | Wutklinge | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 133 | Tamen | 10 | 10 |
| 134 | Bindung | 6 | 6 |
| 135 | Kontrolle | 4 | 4 |
| 136 | Beschwören | 1 | 1 |
| 137 | Zurückrufen | 1 | 1 |
| 138 | Zucht | 5 | 5 |
| 139 | Ausdauertraining | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 140 | Standhaft | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 144 | Rüstungstraining | 1 / 7 / 14 / 20 / 27 / 33 / 40 / 46 / 53 / 59 | 300 |
| 145 | Durchhalten | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 158 | Provozieren | 300 | 300 |
| 161 | Energie der Wut | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 162 | Innere Kraft | 6 / 8 / 10 / 12 / 14 / 16 / 18 / 20 / 22 / 24 / 26 / 28 / 30 / 32 / 34 | 300 |
| 163 | Volles Potential | 107 / 133 / 160 | 400 |
| 201 | Waffentraining | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 230 | Blutiger Durchbruch | 13 / 19 / 25 / 31 / 37 / 43 / 49 / 55 / 61 / 67 | 400 |
| 233 | Kriegerischer Ansturm | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
<!-- full-skill-point-costs:end -->

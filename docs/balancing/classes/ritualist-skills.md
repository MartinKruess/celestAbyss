# Ritualist / Blutmagier: Werte und Skillprüfung

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
| 6 | Feuerball | — | — | 49 | 20 | 12 |
| 9 | Erweiterung des Geistes | — | — | 44 | 10 | 12 |
| 12 | Lebenssauger | — | — | 72 | 10 | 10 |
| 12 | Schwäche des Fleisches | — | — | 100 | 20 | 5 |
| 15 | Reaper | — | — | 120 | 10 | 10 |
| 17 | Dunkler Impuls | — | — | 232 | 10 | 10 |
| 20 | Geist des Feuers | — | — | 178 | 10 | 10 |
| 21 | Sturm des Feuers | — | — | 110 | 10 | 10 |
| 22 | Ausbrennen | — | — | 214 | 10 | 10 |
| 23 | Feuer der Verdammten | — | — | 48 | 5 | 30 |
| 27 | Opfergabe | — | — | 83 | 10 | 10 |
| 30 | Arkane Aufladung | — | — | 181 | 10 | 10 |
| 33 | Teufelspakt | — | — | 236 | 3 | 80 |
| 37 | Schrei der Unterwelt | — | — | 99 | 6 | 20 |
| 42 | Morrak´s Meister | — | — | 237 | 1 | 300 |
| 42 | Seelenfessel | — | — | 103 | 20 | 5 |
| 47 | Meteoritenschauer | — | — | 235 | 3 | 80 |
| 55 | Zahl der Opfer | — | — | 241 | 1 | 400 |
| 60 | Seelenernte | — | — | 105 | 5 | 40 |
| 60 | Seelenqual | — | — | 104 | 10 | 13 |
| 60 | Verloren in der Dunkelheit | — | — | 209 | 10 | 13 |
| 65 | Seelenplage | — | — | 180 | 10 | 13 |

[Alte Lernlevel als Vorlage](../legacy-skill-learning-levels.md) · [Alle Klassen](../skill-learning-index.md)
<!-- skill-learning-overview:end -->

**32 Skills, 280 Skillpunkte; Ziel von 280 erreicht.** Schrei der Unterwelt hat sechs statt drei Stufen bei unveränderter Start- und Maximalwirkung. Grundschaden auf allen Stufen 666, zusätzlicher Schaden aus geopfertem Leben je Stufe 0/20/40/65/95/125 %. Cooldown 90/88/86/84/82/80 Sekunden. Lebensopfer, Schutzwerte, Flächenradius und Energieablauf bleiben unverändert.

Einteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.

**32 unterschiedliche zugeordnete Skills: 17 aktive und 15 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie bei den bisher geprüften Klassen. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.

| Art | Anzahl | Skills |
| --- | ---: | --- |
| Übrige Passive einschließlich Procs | 12 | Überleben, Erweiterung des Geistes, Opfergabe, Reaper, Ausdauertraining, Rüstungstraining, Arkane Aufladung, Waffentraining, Verloren in der Dunkelheit, Ausbrennen, Morrak´s Meister, Zahl der Opfer |
| Aktive Skills (Angriff/Heilung/Unterstützung) | 12 | Feuer der Verdammten, Feuerball, Lebenssauger, Schrei der Unterwelt, Schwäche des Fleisches, Seelenfessel, Seelenqual, Seelenernte, Sturm des Feuers, Seelenplage, Dunkler Impuls, Meteoritenschauer |
| Kreaturen aktiv | 3 | Tamen, Beschwören, Zurückrufen |
| Kreaturen passiv | 3 | Bindung, Kontrolle, Zucht |
| Eigenbuffs | 2 | Geist des Feuers, Teufelspakt |

## Abschluss der Skillpunkte

Geist des Feuers gewährt je Stufe +1 Intelligenz und +2 direkten Feuerangriffsbonus, maximal +10 und +20 auf Stufe 10. Beide Boni sind halbiert; Mana und Zeiten bleiben gleich. Seelenfessel hat 20 Stufen mit denselben Start-/Maximalwerten wie zuvor: 97 bis 237 magischer Grundschaden, 39 bis 95 Mana, zwei bis drei Sekunden Fessel und 104 bis 90 Sekunden Cooldown. Schwäche des Fleisches hat 20 Stufen: unverändert −3 bis −30 % physische und −5 bis −50 % magische Verteidigung, 50 bis 95 HP-Kosten und 47 bis 281 Mana. Die Zwischenwerte sind auf die neuen Stufenzahlen verteilt. Verloren in der Dunkelheit bleibt auf zehn Stufen. Zusammen mit den drei zusätzlichen Stufen von Schrei der Unterwelt ergeben sich 18 zusätzliche Skillpunkte.

## Basis und Ausrüstung

R1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.

### Basis ohne Ausrüstung

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 169 | 439 | 739 | 1.039 | 1.339 | 1.639 | 1.939 |
| Mana | 167 | 437 | 737 | 1.037 | 1.337 | 1.637 | 1.937 |
| P-Angriff | 4 | 20,2 | 38,2 | 56,2 | 74,2 | 92,2 | 110,2 |
| M-Angriff | 14 | 30,2 | 48,2 | 66,2 | 84,2 | 102,2 | 120,2 |
| P-Defense | 4 | 22 | 42 | 62 | 82 | 102 | 122 |
| M-Defense | 8 | 26 | 46 | 66 | 86 | 106 | 126 |

### Mit Rüstung und Magiewaffe

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 569 | 839 | 1.339 | 1.839 | 2.339 | 2.989 | 3.789 |
| Mana | 502 | 772 | 1.297 | 1.832 | 2.367 | 3.137 | 3.997 |
| P-Angriff | 4 | 20,2 | 38,2 | 56,2 | 74,2 | 92,2 | 110,2 |
| M-Angriff | 39 | 55,2 | 97,6 | 154 | 234,4 | 358,2 | 539,6 |
| P-Defense | 60 | 78 | 136 | 214 | 308 | 429 | 590 |
| M-Defense | 76 | 94 | 149 | 207 | 329 | 502 | 733 |

Die vorhandene Wand-Tabelle dient als Vergleich für die Magiewaffe. Int/Faith/Vic wird einmal als alternativer Angriffsbonus gerechnet. Waffen-Speed ist noch nicht eingerechnet. Equipment-Vorschläge sind nicht übernommen. Grundregeneration: 25 Mana und 12 HP pro Tick. Das Intervall wird später in Unreal geprüft. Bestehende gemeinsame Skillwerte werden übernommen; fehlende Werte werden nicht geschätzt.

## Skillübersicht

| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | Überleben | Passive | 20 | HP-Regeneration +0,5<br>Mana-Regeneration +0,5<br>Stärke +0,5<br>Agility +0,25<br>Dexterity +0,25 | Stärke: 0,5 bis 10<br>Agility: 0,25 bis 5<br>Dexterity: 0,25 bis 5<br>Mana-Regeneration: 0,5 bis 10<br>HP-Regeneration: 0,5 bis 10 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 139 | Ausdauertraining | Passive | 20 | Vita +1<br>Wisdom +1 | Vita: 1 bis 20<br>Wisdom: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 201 | Waffentraining | Passive | 20 | P-Angriff +1<br>M-Angriff +1 | P-Angriff: 1 bis 20<br>M-Angriff: 1 bis 20 | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 134 | Bindung | Passive | 3 / Ritualist 1 | Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.<br>statModifier, Ziel companion, str, 10<br>statModifier, Ziel companion, vita, 10<br>statModifier, Ziel companion, int, 10<br>statModifier, Ziel companion, wis, 10 | statModifier/str: 10 bis 20<br>statModifier/vita: 10 bis 20<br>statModifier/int: 10 bis 20<br>statModifier/wis: 10 bis 20 | Keine | Entfällt | Entfällt | str: 0 s<br>vita: 0 s<br>int: 0 s<br>wis: 0 s | Gemeinsame Definition |
| 135 | Kontrolle | Passive | 2 / Ritualist 1 | Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen. | Nicht vollständig gespeichert | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition; Levelskalierung prüfen |
| 144 | Rüstungstraining | Passive | 10 | P-Defense +3<br>M-Defense +6 | P-Defense: 3 bis 30<br>M-Defense: 6 bis 60 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 138 | Zucht | Passive | 3 / Ritualist 1 | Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.<br>experienceBonus, Ziel companion, 0,1 | experienceBonus/: 10 bis 30 % | Keine | Entfällt | Entfällt | experienceBonus: 0 s | Gemeinsame Definition |
| 136 | Beschwören | Skill | 1 | Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 1 | Nicht gespeichert | Gemeinsame Definition |
| 133 | Tamen | Skill | 3 / Ritualist 1 | Versucht, eine Kreatur zu zähmen. Erfordert eine zur Kreaturenvariante passende Zähmungskarte. Die Grundchance wird von der jeweiligen Kreaturenvariante vorgegeben. Tamen multipliziert diese Chance auf Stufe 1 mit 1,0, auf Stufe 2 mit 1,1 und auf Stufe 3 mit 1,2; keine zusätzlichen Prozentpunkte und keine eigene feste Grunderfolgschance. Bei 1 Prozent Grundchance ergeben sich 1 / 1,1 / 1,2 Prozent Erfolgschance je Versuch. Die Formel steigt bei später autorisierten zusätzlichen effektiven Skillstufen um 0,1 je Stufe weiter. Die Definition hat weiterhin drei lernbare Stufen: normale Klassen maximal Stufe 1, Abenteurer maximal Stufe 3; eine zweite Spezialklasse ist noch nicht festgelegt. Mana 100 / 125 / 150, Castzeit 3 / 2,5 / 2 Sekunden und Cooldown 60 / 50 / 40 Sekunden. Kein Schaden und keine anschließende Effektdauer. Konkrete Kreaturen-Grundchancen, Kartenzuordnungen, Itemverbrauch, Zieldistanz und Abbruchbedingungen sind noch festzulegen. | Chancenfaktor ×1,0 / ×1,1 / ×1,2; normale Lerngrenze 1 | Mana-Kosten: 100 bis 150 | 60 bis 40 | 3 bis 2 | 0 (keine anschließende Wirkung) | Gemeinsame Definition; Levelskalierung prüfen |
| 137 | Zurückrufen | Skill | 1 | Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 0 | Nicht gespeichert | Gemeinsame Definition |
| 49 | Feuerball | Skill / magisch | 20 | M-Angriff +63<br>Animation 0,5 s (vorläufig) | M-Angriff: 63 bis 519 | Mana-Kosten: 16 bis 149 | 12 bis 4 | 0.1 | 0 bis 0 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 44 | Erweiterung des Geistes | Passive | 10 | Wisdom +1<br>Intelligenz +1<br>Dexterity +1 | Intelligenz: 1 bis 10<br>Wisdom: 1 bis 10<br>Dexterity: 1 bis 10 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 72 | Lebenssauger | Skill / magisch | 10 | M-Angriff +112<br>heal, Ziel self, 35<br>heal, Ziel self, 0<br>Animation 0,5 s (vorläufig) | M-Angriff: 112 bis 499<br>heal/: 35 bis 350<br>heal/: 0 bis 2 % | Mana-Kosten: 67 bis 354 | 48 bis 43 | 0.15 | heal: 0 s<br>heal: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 100 | Schwäche des Fleisches | Skill | 20 | Zwanzig Skillstufen mit unveränderter Start- und Maximalwirkung. Opfert gemäß ganzzahliger Stufentabelle 50 bis 95 HP und kostet zusätzlich 47 bis 281 Mana. Belegt einen Gegner für 30 Sekunden mit Schwäche: physische Verteidigung sinkt gleichmäßig von −3 Prozent auf Stufe 1 auf −30 Prozent auf Stufe 20; magische Verteidigung von −5 auf −50 Prozent. Dies reduziert Verteidigungswerte, nicht direkt erlittenen Schaden um denselben Prozentsatz. Cooldown 55 Sekunden, Castzeit 0,1 Sekunden. Verhalten bei unzureichenden HP ist noch offen.<br>statModifier, Ziel enemy, pdef, -0,03<br>statModifier, Ziel enemy, mdef, -0,05 | statModifier/pdef: -3 bis -30 %<br>statModifier/mdef: -5 bis -50 % | health-Kosten: 50 bis 95<br>Mana-Kosten: 47 bis 281 | 55 | 0.1 | pdef: 30 s<br>mdef: 30 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 120 | Reaper | Passive | 10 | Reaper: permanente Passive mit zehn Stufen, ausschließlich Seelenspeicher. Kapazität 10 Seelen auf Stufe 1, +10 je weiterer Stufe bis 100. Kein Intelligenz- oder sonstiger Attributbonus. Aktueller Vorrat bleibt auch offline erhalten, ohne zeitlichen Verfall. Gewinne oberhalb der Kapazität verfallen. Erzeugt selbst keine Seelen. Keine Aktivierungskosten, Castzeit oder Cooldown. Persistente Charakterressource ist später serverseitig anzubinden. | Nicht vollständig gespeichert | Keine | Entfällt | Entfällt | Permanent | Levelskalierung prüfen |
| 232 | Dunkler Impuls | Skill / magisch | 10 | M-Angriff +42 | M-Angriff: 42 bis 249 | Mana-Kosten: 11 bis 65 | 14 bis 5 | 0.1 | 0 bis 0 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 178 | Geist des Feuers | Selbstbuff | 10 | Aktiver Eigenbuff des Ritualisten mit zehn Stufen für 300 Sekunden. Gewährt einen flachen Feuer-Skillschadensbonus von 15 auf Stufe 1, gleichmäßig steigend bis 65 auf Stufe 10. Kein Intelligenzbonus. Wirkt ausschließlich auf Feuer der Verdammten, Feuerball und Sturm des Feuers. Der Bonus gilt je direktem magischen Skilltreffer und bei Feuer der Verdammten auch je Folgetick. Sturm des Feuers verursacht aktuell nur einen Schadenstreffer nach der Vorwarnung; seine anschließende Feuerphase ist rein optisch und erzeugt keine zusätzlichen Ticks. Keine Wirkung auf normale Auto-Attacks, Begleiter oder andere Skills. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Aktivierung kostet 50 Mana auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten.<br>damageBonus, Ziel self, 15 | damageBonus/: 15 bis 65 | Mana-Kosten: 50 bis 167 | 60 | 0.1 | damageBonus: 300 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 110 | Sturm des Feuers | Skill / magisch | 10 | M-Angriff +113<br>Fläche: 5 m Radius um anvisiertes Ziel | M-Angriff: 113 bis 734 | Mana-Kosten: 28 bis 181 | 120 bis 102 | 0.2 | 3.5 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 214 | Ausbrennen | Passive | 10 | Verstärkt deine Blutmagie auf Skilllevel 1 um 4 magischen Angriff. Solange die Verstärkung wirkt, verlierst du alle 1,5 Sekunden 18 Lebenspunkte. Pro weiterem Skilllevel steigt der Angriffsbonus um 4 und der Lebensverbrauch je Intervall um 6. Auf Skilllevel 10 erhältst du +40 magischen Angriff und verlierst 72 Lebenspunkte je Intervall.<br>statModifier, Ziel self, matk, 4<br>resourceDrain, Ziel self, 18 | statModifier/matk: 4 bis 40<br>resourceDrain/: 18 bis 72 | Keine aktive Nutzung | Entfällt | Entfällt | matk: 0 s<br>resourceDrain: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 48 | Feuer der Verdammten | Skill / magisch | 5 | M-Angriff +273<br>periodicDamage, Ziel enemiesInArea, 0,3<br>statModifier, Ziel enemy, movementSpeed, -0,05<br>Fläche: 1,5 m Radius um anvisiertes Ziel<br>Maximal 2 Gegner, jeweils ein Treffer | M-Angriff: 273 bis 721 | Mana-Kosten: 191 bis 503 | 57 bis 51 | 0.4 | periodicDamage: 10 s<br>movementSpeed: 10 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 83 | Opfergabe | Passive | 10 | Permanenter passiver Skill. Bei jeder eigenen Angriffsskill-Anwendung werden je gelerntem Skilllevel 0,05 Prozent des maximalen Lebens geopfert und der gesamte Schaden dieses Angriffsskills um 0,1 Prozent erhöht. Auf Stufe 10: 0,5 Prozent Max-Leben Kosten pro Anwendung für 1 Prozent mehr gesamten Angriffsskill-Schaden, einschließlich Waffen-/Charakteranteil; nicht nur Skill-Grundschaden. Auto-Attacks sind ausgeschlossen. Lebenspreis einmal pro Anwendung, nicht je Mehrfachtreffer oder Feldtick. Jede wiederholte Seelenqual-Anwendung zählt separat. Beispiele auf Stufe 10: Bei 5000 Max-HP kostet jede Anwendung 25 HP; 15 Anwendungen kosten 375 HP vor Regeneration und Heilung. Ein Angriff mit 1000 Schaden gewinnt 10, mit 10000 Schaden 100 zusätzlichen Schaden, vor etwaigen noch offenen Verrechnungsregeln. Der bisherige feste Victim-Bonus entfällt. Nicht offensive Skills, tödlicher Lebenspreis, genaue Reihenfolge der Schadensmultiplikatoren sowie HP-Regeneration werden noch geprüft. Keine eigene aktive Nutzung, Castzeit oder Cooldown. | Nicht vollständig gespeichert | Keine | Entfällt | Entfällt | Permanent | Levelskalierung prüfen |
| 181 | Arkane Aufladung | Passive | 10 | Mana-Regeneration +16<br>Vita +1 | Mana-Regeneration: 16 bis 24<br>Vita: 1 bis 10 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 236 | Teufelspakt | Selbstbuff | 3 | Vita +5<br>Wisdom +3<br>Intelligenz +2 | Wisdom: 3 bis 9<br>Intelligenz: 2 bis 6<br>Vita: 5 bis 15 | Mana-Kosten: 50 bis 76 | 60 | 0.1 | 600 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 99 | Schrei der Unterwelt | Skill / magisch | 6 | M-Angriff +666<br>statModifier, Ziel self, pdef, 100<br>statModifier, Ziel self, mdef, 100<br>Fläche: 5 m Radius um Spieler | M-Angriff: 666 bis 666 | health-Kosten: 0,25 bis 0,25 (Anteil) | 90 bis 80 | 0.1 | pdef: 3 s<br>mdef: 3 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 237 | Morrak´s Meister | Passive | 1 | Einstufige passive Verbesserung der questgebundenen Morrak-Beschwörung. Der Ritualist bezwingt Morrak in einer Quest und erhält dadurch zunächst die zusätzliche Möglichkeit, ihn als Nahkampf-Dämon zu beschwören; die erzählerische Meister-Wahl ist keine echte Auswahl. Sobald Morraks Meister auf Stufe 1 gelernt wird, ersetzt Morrak seine Nahkampf-Krallenangriffe durch magische Fernkampf-Auto-Attacks. Keine eigenen Casts oder Spells des Dämons; Attack-Speed-Wert bleibt 1, genaue Reichweite noch offen. Die separate Grundbeschwörung und Questfreischaltung müssen später in Quest- und Aktionsdaten angebunden werden; diese Passive selbst beschwört ihn nicht und hat keine aktive Castzeit. Bestehende Beschwörungsregeln bleiben: Castzeit 0,4 Sekunden, maximal 300 Sekunden Laufzeit bis Ablauf oder Tod. Die ursprüngliche questgebundene Nahkampf-Version gibt dem Anwender keine Attributboni. Erst mit gelernter Verbesserung Morraks Meister erhält der Anwender +5 Intelligenz und +5 Wisdom, und nur solange der verbesserte Fernkampf-Morrak beschworen ist. Lernen allein gewährt keine dauerhaften Attributboni. Der Beschwörungspreis von -500 Max-HP gilt während der Beschwörung weiterhin auch für die Grundversion. Morraks Werte sind live an seinen Meister gekoppelt: Max-Leben und M-Angriff entsprechen jeweils 10 Prozent des entsprechenden aktuellen Meisterwerts. Eigene Beschwörungskosten von -500 Max-HP werden aus der HP-Berechnungsbasis herausgerechnet. Buffs und Debuffs des Meisters wirken damit auch auf Morrak. Physische und magische Verteidigung Morraks entsprechen beide 10 Prozent der aktuellen magischen Verteidigung des Meisters. Er ist angreifbar und nimmt Flächenschaden; kein Mana oder Cast-Spells. Jeder Auto-Attack hat 1,5 Prozent Chance auf 50 Prozent Bewegungstempo-Senkung für 1,5 Sekunden. Beschwörungs-Cooldown 360 Sekunden (6 Minuten), maximale Anwesenheit 300 Sekunden (5 Minuten). Keine weiteren Beschwörungskosten: kein Mana, keine Seelen und kein zusätzlicher einmaliger Lebensabzug; allein -500 Max-HP während der Beschwörung. Aggroregeln und genaue Anpassung aktueller HP bei wechselndem Max-Leben bleiben offen. Diese zeitlich begrenzte Skill-Beschwörung belegt keinen regulären dauerhaften Pet-Platz und darf gleichzeitig mit dem normalen Pet aktiv sein. Zwei dauerhafte Pets bleiben dem Abenteurer vorbehalten. Macht des Begleiters wirkt nicht direkt auf Morrak; er übernimmt ausschließlich die definierten Werte seines Meisters. Reguläre Pets des Ritualisten können den Begleiterbuff erhalten. Grundfrequenz seiner Auto-Attacks: 1,1 Angriffe pro Sekunde bei 100 % eigenem Angriffstempo; keine Übernahme des Meister-Angriffstempos. Zusätzliche eigene Grundwerte: 1000 Max-Leben, 0 P-Angriff, 135 M-Angriff, 90 P-Verteidigung und 110 M-Verteidigung. Diese Werte werden zur bisherigen Vererbung addiert. Grundfrequenz 1,1 Angriffe pro Sekunde. Keine direkten Bindungsboni.<br>statModifier, Ziel self, int, 5<br>statModifier, Ziel self, wis, 5<br>statModifier, Ziel self, maxHealth, -500 | Nicht vollständig gespeichert | Keine | Entfällt | Entfällt | int: 300 s<br>wis: 300 s<br>maxHealth: 300 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 103 | Seelenfessel | Skill / magisch | 20 | M-Angriff +97<br>control, Ziel enemy<br>statModifier, Ziel enemy, mdef, -0,1 | M-Angriff: 97 bis 237 | Mana-Kosten: 39 bis 95<br>soulFragments-Kosten: 1 bis 1 | 104 bis 90 | 0.1 | stun: 2 bis 3 s<br>mdef: 2 bis 3 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 235 | Meteoritenschauer | Skill / physisch | 3 | P-Angriff +543<br>Fläche: 6 m Radius um Skillzentrum<br>Maximal 6 Gegner, jeweils ein Treffer | P-Angriff: 543 bis 2.172 | Mana-Kosten: 652 bis 2.608 | 280 bis 200 | 0.8 | 6 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 241 | Zahl der Opfer | Passive | 1 | Permanenter passiver Vorratsbonus mit einer lernbaren Stufe. Je volle zehn aktuell gespeicherte Seelen im durch Reaper verwalteten Speicher +3 direkter M-Angriff: 0–9 Seelen geben 0, 10–19 geben +3, 20–29 geben +6, bis maximal +30 bei 100 Seelen. Bonus sinkt beim Ausgeben entsprechend der vollen Zehnergruppen. Reaper selbst gibt keinen Intelligenzbonus. Keine eigene Seelenerzeugung, kein historischer Tötungszähler und keine Moralvoraussetzung. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer.<br>Fläche: undefined m vor Spieler | Sammelpunkte-Schwellen: ; Fesselung  s; nur Skill-Grundschaden + % | Keine | Offen | Entfällt |  s nach Sammelpunkten | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 105 | Seelenernte | Skill / magisch | 5 | M-Angriff +381<br>heal, Ziel self, 150 | M-Angriff: 381 bis 1.013<br>heal/: 150 bis 750 | Mana-Kosten: 152 bis 408 | 200 bis 180 | 0.3 | heal: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 104 | Seelenqual | Skill / magisch | 10 | M-Angriff +47<br>Ein einzelnes Ziel | M-Angriff: 47 bis 168 | Mana-Kosten: 19 bis 67 | 0.2 | 0 | 0 bis 0 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 209 | Verloren in der Dunkelheit | Passive | 10 | Permanenter passiver Skill mit zehn Stufen. Erhöht den direkten magischen Skillschaden von Seelenfessel, Seelenqual, Seelenernte und Seelenplage um 12 je gelerntem Skilllevel, auf Maximalstufe um 120 je passendem Treffer. Jede einzelne Seelenqual-Anwendung ist ein eigener Angriff mit einem direkten Treffer. Keiner dieser vier Skills verursacht derzeit periodischen Schaden; es gibt hier keine DoT-Ticks. Keine Wirkung auf andere Skills, normale Auto-Attacks oder Begleiter. Kein prozentualer Bonus, keine Aktivierungskosten, Castzeit oder begrenzte Dauer. Der Name ist vorläufig; eine bessere Bezeichnung wird später festgelegt.<br>damageBonus, Ziel self, 12 | damageBonus/: 12 bis 120 | Keine | Entfällt | Entfällt | damageBonus: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 180 | Seelenplage | Skill / magisch | 10 | M-Angriff +171<br>Animation 4 s (vorläufig)<br>Fläche: undefined × undefined m; Position zum Ziel offen<br>Maximal 6 Gegner, jeweils ein Treffer | M-Angriff: 171 bis 693 | soulFragments-Kosten: 3 bis 30 | 85 bis 76 | 0.3 | 0 bis 0 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |

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

### 49: Feuerball

Schleudert einen Feuerball auf dein Ziel und verursacht einmalig magischen Schaden. Grundschaden 63 auf Stufe 1, +24 je weiterer Stufe, auf Stufe 20 519. Mana-Kosten 16 auf Stufe 1, +7 je weiterer Stufe, maximal 149 auf Stufe 20. Cooldown Stufen 1–4: 12 Sekunden; 5–9: 10 Sekunden; 10–14: 8 Sekunden; 15–19: 6 Sekunden; Stufe 20: 4 Sekunden. Castzeit 0,1 Sekunden. Vorläufige Flug-/Animationszeit 0,5 Sekunden, keine anhaltende Wirkung oder zusätzlicher Verbrennungs-DoT. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| skillPointCosts.classRankCosts.ritualist.0 | 12 |
| skillPointCosts.classRankCosts.ritualist.1 | 12 |
| skillPointCosts.classRankCosts.ritualist.2 | 13 |
| skillPointCosts.classRankCosts.ritualist.3 | 13 |
| skillPointCosts.classRankCosts.ritualist.4 | 13 |
| skillPointCosts.classRankCosts.ritualist.5 | 14 |
| skillPointCosts.classRankCosts.ritualist.6 | 14 |
| skillPointCosts.classRankCosts.ritualist.7 | 14 |
| skillPointCosts.classRankCosts.ritualist.8 | 15 |
| skillPointCosts.classRankCosts.ritualist.9 | 15 |
| skillPointCosts.classRankCosts.ritualist.10 | 15 |
| skillPointCosts.classRankCosts.ritualist.11 | 15 |
| skillPointCosts.classRankCosts.ritualist.12 | 16 |
| skillPointCosts.classRankCosts.ritualist.13 | 16 |
| skillPointCosts.classRankCosts.ritualist.14 | 16 |
| skillPointCosts.classRankCosts.ritualist.15 | 17 |
| skillPointCosts.classRankCosts.ritualist.16 | 17 |
| skillPointCosts.classRankCosts.ritualist.17 | 17 |
| skillPointCosts.classRankCosts.ritualist.18 | 18 |
| skillPointCosts.classRankCosts.ritualist.19 | 18 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| learningRequirements.classOverrides.ritualist | 6 |
| learningRequirements.minimumCharacterLevel | 6 |
| skillName_eng | Fireball |
| category | active |
| cd | 12 |
| charClass[0] | Ritualist |
| charClass[1] | Bloodmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Schleudert einen Feuerball auf dein Ziel und verursacht einmalig magischen Schaden. Grundschaden 63 auf Stufe 1, +24 je weiterer Stufe, auf Stufe 20 519. Mana-Kosten 16 auf Stufe 1, +7 je weiterer Stufe, maximal 149 auf Stufe 20. Cooldown Stufen 1–4: 12 Sekunden; 5–9: 10 Sekunden; 10–14: 8 Sekunden; 15–19: 6 Sekunden; Stufe 20: 4 Sekunden. Castzeit 0,1 Sekunden. Vorläufige Flug-/Animationszeit 0,5 Sekunden, keine anhaltende Wirkung oder zusätzlicher Verbrennungs-DoT. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Hurls a fireball at one target, dealing magical damage once. Base damage 63 plus 24 per additional level, reaching 519 at level 20. Mana cost 16 at level 1, maximum 149 at level 20. Cooldown levels 1–4: 12 seconds; 5–9: 10; 10–14: 8; 15–19: 6; level 20: 4. Cast time 0.1 seconds. Provisional flight/animation time 0.5 seconds; no lingering effect or additional burning DoT. |
| dmgType (Altformat) | spell |
| matk | 63 |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 49 |
| skillName_de | Feuerball |
| skillpoints | 1 |
| animationDurationSeconds | 0,5 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,1 |
| cooldownScaling.type | table |
| cooldownScaling.values[0] | 12 |
| cooldownScaling.values[1] | 12 |
| cooldownScaling.values[2] | 12 |
| cooldownScaling.values[3] | 12 |
| cooldownScaling.values[4] | 10 |
| cooldownScaling.values[5] | 10 |
| cooldownScaling.values[6] | 10 |
| cooldownScaling.values[7] | 10 |
| cooldownScaling.values[8] | 10 |
| cooldownScaling.values[9] | 8 |
| cooldownScaling.values[10] | 8 |
| cooldownScaling.values[11] | 8 |
| cooldownScaling.values[12] | 8 |
| cooldownScaling.values[13] | 8 |
| cooldownScaling.values[14] | 6 |
| cooldownScaling.values[15] | 6 |
| cooldownScaling.values[16] | 6 |
| cooldownScaling.values[17] | 6 |
| cooldownScaling.values[18] | 6 |
| cooldownScaling.values[19] | 4 |
| durationScaling.type | table |
| durationScaling.values[0] | 0 |
| durationScaling.values[1] | 0 |
| durationScaling.values[2] | 0 |
| durationScaling.values[3] | 0 |
| durationScaling.values[4] | 0 |
| durationScaling.values[5] | 0 |
| durationScaling.values[6] | 0 |
| durationScaling.values[7] | 0 |
| durationScaling.values[8] | 0 |
| durationScaling.values[9] | 0 |
| durationScaling.values[10] | 0 |
| durationScaling.values[11] | 0 |
| durationScaling.values[12] | 0 |
| durationScaling.values[13] | 0 |
| durationScaling.values[14] | 0 |
| durationScaling.values[15] | 0 |
| durationScaling.values[16] | 0 |
| durationScaling.values[17] | 0 |
| durationScaling.values[18] | 0 |
| durationScaling.values[19] | 0 |
| hasLingeringDamage | false |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 16 |
| resourceCosts[0].scaling.perLevel | 7 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 63 |
| statScaling.matk.perLevel | 24 |
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
| levelProgression.rules[0].rule.rule.base | 12 |
| levelProgression.rules[0].rule.rule.steps[0] | 0 |
| levelProgression.rules[0].rule.rule.steps[1] | 0 |
| levelProgression.rules[0].rule.rule.steps[2] | 0 |
| levelProgression.rules[0].rule.rule.steps[3] | -2 |
| levelProgression.rules[0].rule.rule.steps[4] | 0 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | constant |
| levelProgression.rules[1].rule.value | 0 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 16 |
| levelProgression.rules[2].rule.rule.perLevel | 7 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | matk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 63 |
| levelProgression.rules[3].rule.perLevel | 24 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 44: Erweiterung des Geistes

Permanenter passiver Bonus mit zehn Stufen. Intelligenz, Willenskraft und Geschick erhalten jeweils folgende Boni auf Stufe 1 bis 10: 1 / 1,5 / 2 / 2,5 / 3 / 3,5 / 4 / 4,5 / 5 / 10. Alle bisherigen Attributboni sind auf jeder Stufe halbiert. Keine Aktivierungskosten, Castzeit oder Cooldown.

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
| classificationVersion | 1 |
| type | passive |

### 72: Lebenssauger

Greift einen Gegner einmalig magisch an und heilt den Anwender. Magischer Skill-Grundschaden 112 auf Stufe 1 und +43 je weiterer Stufe, auf Stufe 10 499. Mana 67 auf Stufe 1, gleichmäßig steigend auf 354 auf Stufe 10. Cooldown gleichmäßig von 48 auf 43 Sekunden über zehn Stufen. Castzeit 0,15 Sekunden, vorläufige Animation 0,5 Sekunden, kein Schaden über Zeit. Einmalige Selbstheilung: 35 HP je gelerntem Skilllevel, insgesamt 350 HP auf Stufe 10. Erst auf Stufe 10 zusätzlich 2 Prozent des tatsächlich durch diese Anwendung verursachten Lebensschadens. Beide Komponenten gehören zu derselben Heilung. Beispiele auf Stufe 10: 6000 Schaden heilt 470 HP; 10000 heilt 550 HP; 20000 heilt 750 HP; 100000 heilt 2350 HP. Kein höherer prozentualer Lebensraub und keine automatische prozentuale Steigerung über die Skillstufen. Heil-Auslösung bei verfehltem oder vollständig abgewehrtem Angriff wird noch geklärt.

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
| skillName_eng | Life Drainer |
| category | active |
| cd | 48 |
| charClass[0] | Bloodmage |
| charClass[1] | Ritualist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Greift einen Gegner einmalig magisch an und heilt den Anwender. Magischer Skill-Grundschaden 112 auf Stufe 1 und +43 je weiterer Stufe, auf Stufe 10 499. Mana 67 auf Stufe 1, gleichmäßig steigend auf 354 auf Stufe 10. Cooldown gleichmäßig von 48 auf 43 Sekunden über zehn Stufen. Castzeit 0,15 Sekunden, vorläufige Animation 0,5 Sekunden, kein Schaden über Zeit. Einmalige Selbstheilung: 35 HP je gelerntem Skilllevel, insgesamt 350 HP auf Stufe 10. Erst auf Stufe 10 zusätzlich 2 Prozent des tatsächlich durch diese Anwendung verursachten Lebensschadens. Beide Komponenten gehören zu derselben Heilung. Beispiele auf Stufe 10: 6000 Schaden heilt 470 HP; 10000 heilt 550 HP; 20000 heilt 750 HP; 100000 heilt 2350 HP. Kein höherer prozentualer Lebensraub und keine automatische prozentuale Steigerung über die Skillstufen. Heil-Auslösung bei verfehltem oder vollständig abgewehrtem Angriff wird noch geklärt. |
| description_eng | Attacks one enemy once with magic and heals the caster. Magical skill base damage 112 plus 43 per additional level, reaching 499 at level 10. Mana 67 at level 1, increasing linearly to 354 at level 10. Cooldown decreases linearly from 48 to 43 seconds across ten levels. Cast time 0.15 seconds, provisional animation 0.5 seconds, no damage over time. One self-heal: 35 HP per learned skill level, totaling 350 at level 10. Only at level 10 additionally restores 2 percent of actual health damage dealt by this activation. Both components form the same heal. Level-10 examples: 6000 damage heals 470 HP; 10000 heals 550; 20000 heals 750; 100000 heals 2350. No higher percentage lifesteal or automatic percentage growth across skill levels. Healing on missed or fully blocked attacks remains pending. |
| dmgType (Altformat) | spell |
| matk | 112 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 72 |
| skillName_de | Lebenssauger |
| skillpoints | 1 |
| animationDurationSeconds | 0,5 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,15 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 48 |
| cooldownScaling.perLevel | -0,556 |
| durationScaling.type | table |
| durationScaling.values[0] | 0 |
| durationScaling.values[1] | 0 |
| durationScaling.values[2] | 0 |
| durationScaling.values[3] | 0 |
| durationScaling.values[4] | 0 |
| durationScaling.values[5] | 0 |
| durationScaling.values[6] | 0 |
| durationScaling.values[7] | 0 |
| durationScaling.values[8] | 0 |
| durationScaling.values[9] | 0 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 67 |
| resourceCosts[0].scaling.perLevel | 31,889 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 112 |
| statScaling.matk.perLevel | 43 |
| effects[0].key | life-drainer-flat-heal |
| effects[0].type | heal |
| effects[0].target | self |
| effects[0].value | 35 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 35 |
| effects[0].valueScaling.perLevel | 35 |
| effects[0].durationSeconds | 0 |
| effects[1].key | life-drainer-damage-heal |
| effects[1].type | heal |
| effects[1].target | self |
| effects[1].value | 0 |
| effects[1].unit | fraction |
| effects[1].reference | damageDealt |
| effects[1].damageBasis | actualHealthDamage |
| effects[1].damageSource | caster |
| effects[1].targetSkillNumber | 72 |
| effects[1].appliesTo | specificSkill |
| effects[1].valueScaling.type | table |
| effects[1].valueScaling.values[0] | 0 |
| effects[1].valueScaling.values[1] | 0 |
| effects[1].valueScaling.values[2] | 0 |
| effects[1].valueScaling.values[3] | 0 |
| effects[1].valueScaling.values[4] | 0 |
| effects[1].valueScaling.values[5] | 0 |
| effects[1].valueScaling.values[6] | 0 |
| effects[1].valueScaling.values[7] | 0 |
| effects[1].valueScaling.values[8] | 0 |
| effects[1].valueScaling.values[9] | 0,02 |
| effects[1].minimumSkillLevel | 10 |
| effects[1].durationSeconds | 0 |
| effectsVersion | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 48 |
| levelProgression.rules[0].rule.rule.perLevel | -0,556 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | constant |
| levelProgression.rules[1].rule.value | 0 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 67 |
| levelProgression.rules[2].rule.rule.perLevel | 31,889 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | matk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 112 |
| levelProgression.rules[3].rule.perLevel | 43 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | valueScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 35 |
| levelProgression.rules[4].rule.perLevel | 35 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | effects |
| levelProgression.rules[5].path[1] | 1 |
| levelProgression.rules[5].path[2] | valueScaling |
| levelProgression.rules[5].rule.kind | thresholds |
| levelProgression.rules[5].rule.base | 0 |
| levelProgression.rules[5].rule.changes[0].level | 10 |
| levelProgression.rules[5].rule.changes[0].value | 0,02 |
| levelProgression.rules[5].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 100: Schwäche des Fleisches

Zwanzig Skillstufen mit unveränderter Start- und Maximalwirkung. Opfert gemäß ganzzahliger Stufentabelle 50 bis 95 HP und kostet zusätzlich 47 bis 281 Mana. Belegt einen Gegner für 30 Sekunden mit Schwäche: physische Verteidigung sinkt gleichmäßig von −3 Prozent auf Stufe 1 auf −30 Prozent auf Stufe 20; magische Verteidigung von −5 auf −50 Prozent. Dies reduziert Verteidigungswerte, nicht direkt erlittenen Schaden um denselben Prozentsatz. Cooldown 55 Sekunden, Castzeit 0,1 Sekunden. Verhalten bei unzureichenden HP ist noch offen.

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
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 12 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Weakness of the Flesh |
| category | active |
| cd | 55 |
| charClass[0] | Bloodmage |
| charClass[1] | Ritualist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Zwanzig Skillstufen mit unveränderter Start- und Maximalwirkung. Opfert gemäß ganzzahliger Stufentabelle 50 bis 95 HP und kostet zusätzlich 47 bis 281 Mana. Belegt einen Gegner für 30 Sekunden mit Schwäche: physische Verteidigung sinkt gleichmäßig von −3 Prozent auf Stufe 1 auf −30 Prozent auf Stufe 20; magische Verteidigung von −5 auf −50 Prozent. Dies reduziert Verteidigungswerte, nicht direkt erlittenen Schaden um denselben Prozentsatz. Cooldown 55 Sekunden, Castzeit 0,1 Sekunden. Verhalten bei unzureichenden HP ist noch offen. |
| description_eng | Twenty skill levels retain the former starting and maximum effects. Sacrifices 50 to 95 HP and costs 47 to 281 Mana according to integer level tables. Debuffs one enemy for 30 seconds: physical defense reduction increases evenly from 3 to 30 percent, magical defense reduction from 5 to 50 percent. These modify defense stats, not incoming damage by those percentages. Cooldown 55 seconds, cast time 0.1 seconds. Insufficient-health behavior remains pending. |
| dmgType (Altformat) | spell |
| dur | 30 |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 100 |
| skillName_de | Schwäche des Fleisches |
| skillpoints | 1 |
| effects[0].key | flesh-weakness-physical-defense |
| effects[0].type | statModifier |
| effects[0].target | enemy |
| effects[0].stat | pdef |
| effects[0].value | -0,03 |
| effects[0].unit | fraction |
| effects[0].reference | targetStat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | -0,03 |
| effects[0].valueScaling.perLevel | -0,014 |
| effects[0].durationSeconds | 30 |
| effects[1].key | flesh-weakness-magical-defense |
| effects[1].type | statModifier |
| effects[1].target | enemy |
| effects[1].stat | mdef |
| effects[1].value | -0,05 |
| effects[1].unit | fraction |
| effects[1].reference | targetStat |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | -0,05 |
| effects[1].valueScaling.perLevel | -0,024 |
| effects[1].durationSeconds | 30 |
| effectsVersion | 1 |
| resourceCosts[0].resource | health |
| resourceCosts[0].reference | maxHealth |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.values[0] | 50 |
| resourceCosts[0].scaling.values[1] | 52 |
| resourceCosts[0].scaling.values[2] | 55 |
| resourceCosts[0].scaling.values[3] | 57 |
| resourceCosts[0].scaling.values[4] | 59 |
| resourceCosts[0].scaling.values[5] | 62 |
| resourceCosts[0].scaling.values[6] | 64 |
| resourceCosts[0].scaling.values[7] | 67 |
| resourceCosts[0].scaling.values[8] | 69 |
| resourceCosts[0].scaling.values[9] | 71 |
| resourceCosts[0].scaling.values[10] | 74 |
| resourceCosts[0].scaling.values[11] | 76 |
| resourceCosts[0].scaling.values[12] | 78 |
| resourceCosts[0].scaling.values[13] | 81 |
| resourceCosts[0].scaling.values[14] | 83 |
| resourceCosts[0].scaling.values[15] | 86 |
| resourceCosts[0].scaling.values[16] | 88 |
| resourceCosts[0].scaling.values[17] | 90 |
| resourceCosts[0].scaling.values[18] | 93 |
| resourceCosts[0].scaling.values[19] | 95 |
| resourceCosts[1].resource | mana |
| resourceCosts[1].reference | maxMana |
| resourceCosts[1].unit | flat |
| resourceCosts[1].scaling.type | table |
| resourceCosts[1].scaling.base | 47 |
| resourceCosts[1].scaling.values[0] | 47 |
| resourceCosts[1].scaling.values[1] | 59 |
| resourceCosts[1].scaling.values[2] | 72 |
| resourceCosts[1].scaling.values[3] | 84 |
| resourceCosts[1].scaling.values[4] | 96 |
| resourceCosts[1].scaling.values[5] | 109 |
| resourceCosts[1].scaling.values[6] | 121 |
| resourceCosts[1].scaling.values[7] | 133 |
| resourceCosts[1].scaling.values[8] | 146 |
| resourceCosts[1].scaling.values[9] | 158 |
| resourceCosts[1].scaling.values[10] | 170 |
| resourceCosts[1].scaling.values[11] | 182 |
| resourceCosts[1].scaling.values[12] | 195 |
| resourceCosts[1].scaling.values[13] | 207 |
| resourceCosts[1].scaling.values[14] | 219 |
| resourceCosts[1].scaling.values[15] | 232 |
| resourceCosts[1].scaling.values[16] | 244 |
| resourceCosts[1].scaling.values[17] | 256 |
| resourceCosts[1].scaling.values[18] | 269 |
| resourceCosts[1].scaling.values[19] | 281 |
| castTimeSeconds | 0,1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | -0,03 |
| levelProgression.rules[0].rule.perLevel | -0,014 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 1 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | -0,05 |
| levelProgression.rules[1].rule.perLevel | -0,024 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | periodicSteps |
| levelProgression.rules[2].rule.rule.base | 50 |
| levelProgression.rules[2].rule.rule.steps[0] | 2 |
| levelProgression.rules[2].rule.rule.steps[1] | 3 |
| levelProgression.rules[2].rule.rule.steps[2] | 2 |
| levelProgression.rules[2].rule.rule.steps[3] | 2 |
| levelProgression.rules[2].rule.rule.steps[4] | 3 |
| levelProgression.rules[2].rule.rule.steps[5] | 2 |
| levelProgression.rules[2].rule.rule.steps[6] | 3 |
| levelProgression.rules[2].rule.rule.steps[7] | 2 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.rules[3].path[0] | resourceCosts |
| levelProgression.rules[3].path[1] | 1 |
| levelProgression.rules[3].path[2] | scaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0 |
| levelProgression.rules[3].rule.rule.kind | rounded |
| levelProgression.rules[3].rule.rule.mode | round |
| levelProgression.rules[3].rule.rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.rule.base | 47 |
| levelProgression.rules[3].rule.rule.rule.perLevel | 12,316 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | skill |

### 120: Reaper

Reaper: permanente Passive mit zehn Stufen, ausschließlich Seelenspeicher. Kapazität 10 Seelen auf Stufe 1, +10 je weiterer Stufe bis 100. Kein Intelligenz- oder sonstiger Attributbonus. Aktueller Vorrat bleibt auch offline erhalten, ohne zeitlichen Verfall. Gewinne oberhalb der Kapazität verfallen. Erzeugt selbst keine Seelen. Keine Aktivierungskosten, Castzeit oder Cooldown. Persistente Charakterressource ist später serverseitig anzubinden.

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
| skillName_eng | Reaper |
| category | passive |
| charClass[0] | Bloodmage |
| charClass[1] | Ritualist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Reaper: permanente Passive mit zehn Stufen, ausschließlich Seelenspeicher. Kapazität 10 Seelen auf Stufe 1, +10 je weiterer Stufe bis 100. Kein Intelligenz- oder sonstiger Attributbonus. Aktueller Vorrat bleibt auch offline erhalten, ohne zeitlichen Verfall. Gewinne oberhalb der Kapazität verfallen. Erzeugt selbst keine Seelen. Keine Aktivierungskosten, Castzeit oder Cooldown. Persistente Charakterressource ist später serverseitig anzubinden. |
| description_eng | Reaper: permanent passive with ten levels, soul storage only. Capacity starts at 10 and increases by 10 per additional level to 100. No Intelligence or other attribute bonus. Storage persists offline without time decay; excess gains are discarded. Generates no souls. No activation costs, cast time or cooldown. Persistent character storage still requires server integration. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 120 |
| skillName_de | Reaper |
| skillpoints | 1 |
| resourceCosts | [] |
| soulStorageSettings.resource | soulFragments |
| soulStorageSettings.capacityScaling.type | linear |
| soulStorageSettings.capacityScaling.base | 10 |
| soulStorageSettings.capacityScaling.perLevel | 10 |
| soulStorageSettings.persistsOffline | true |
| soulStorageSettings.decaysOverTime | false |
| soulStorageSettings.onCapacityReached | discardExcess |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | soulStorageSettings |
| levelProgression.rules[0].path[1] | capacityScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 10 |
| levelProgression.rules[0].rule.perLevel | 10 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 232: Dunkler Impuls

Sendet einen Impuls der Dunkelheit aus und verursacht einmalig magischen Schaden. Skill-Grundschaden 42 auf Stufe 1 und +23 je weiterer Stufe, auf Stufe 10 249. Mana-Kosten 11 auf Stufe 1, +6 je weiterer Stufe, maximal 65 auf Stufe 10. Cooldown 14 Sekunden und -1 je weiterer Stufe, auf Stufe 10 5 Sekunden. Castzeit 0,1 Sekunden, Wirkungsdauer 0 Sekunden, kein Schaden über Zeit. Genaue Zielwahl beziehungsweise Trefferfläche bleibt noch zu definieren. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| skillName_eng | Dark Pulse |
| category | active |
| cd | 14 |
| charClass[0] | Ritualist |
| charClass[1] | Bloodmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Sendet einen Impuls der Dunkelheit aus und verursacht einmalig magischen Schaden. Skill-Grundschaden 42 auf Stufe 1 und +23 je weiterer Stufe, auf Stufe 10 249. Mana-Kosten 11 auf Stufe 1, +6 je weiterer Stufe, maximal 65 auf Stufe 10. Cooldown 14 Sekunden und -1 je weiterer Stufe, auf Stufe 10 5 Sekunden. Castzeit 0,1 Sekunden, Wirkungsdauer 0 Sekunden, kein Schaden über Zeit. Genaue Zielwahl beziehungsweise Trefferfläche bleibt noch zu definieren. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Sends out a dark pulse, dealing magical damage once. Skill base damage 42 plus 23 per additional level, reaching 249 at level 10. Mana cost 11 at level 1, maximum 65 at level 10. Cooldown 14 minus 1 per additional level, reaching 5 seconds. Cast time 0.1 seconds, effect duration zero, no damage over time. Exact targeting or hit area remains pending. |
| dmgType (Altformat) | spell |
| matk | 42 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 232 |
| skillName_de | Dunkler Impuls |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 14 |
| cooldownScaling.perLevel | -1 |
| durationScaling.type | table |
| durationScaling.values[0] | 0 |
| durationScaling.values[1] | 0 |
| durationScaling.values[2] | 0 |
| durationScaling.values[3] | 0 |
| durationScaling.values[4] | 0 |
| durationScaling.values[5] | 0 |
| durationScaling.values[6] | 0 |
| durationScaling.values[7] | 0 |
| durationScaling.values[8] | 0 |
| durationScaling.values[9] | 0 |
| hasLingeringDamage | false |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 11 |
| resourceCosts[0].scaling.perLevel | 6 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 42 |
| statScaling.matk.perLevel | 23 |
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
| levelProgression.rules[0].rule.rule.base | 14 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | constant |
| levelProgression.rules[1].rule.value | 0 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 11 |
| levelProgression.rules[2].rule.rule.perLevel | 6 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | matk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 42 |
| levelProgression.rules[3].rule.perLevel | 23 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 178: Geist des Feuers

Aktiver Eigenbuff des Ritualisten mit zehn Stufen für 300 Sekunden. Gewährt einen flachen Feuer-Skillschadensbonus von 15 auf Stufe 1, gleichmäßig steigend bis 65 auf Stufe 10. Kein Intelligenzbonus. Wirkt ausschließlich auf Feuer der Verdammten, Feuerball und Sturm des Feuers. Der Bonus gilt je direktem magischen Skilltreffer und bei Feuer der Verdammten auch je Folgetick. Sturm des Feuers verursacht aktuell nur einen Schadenstreffer nach der Vorwarnung; seine anschließende Feuerphase ist rein optisch und erzeugt keine zusätzlichen Ticks. Keine Wirkung auf normale Auto-Attacks, Begleiter oder andere Skills. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Aktivierung kostet 50 Mana auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten.

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
| skillName_eng | Spirit of Fire |
| category | active |
| cd | 60 |
| charClass[0] | Bloodmage |
| charClass[1] | Ritualist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Aktiver Eigenbuff des Ritualisten mit zehn Stufen für 300 Sekunden. Gewährt einen flachen Feuer-Skillschadensbonus von 15 auf Stufe 1, gleichmäßig steigend bis 65 auf Stufe 10. Kein Intelligenzbonus. Wirkt ausschließlich auf Feuer der Verdammten, Feuerball und Sturm des Feuers. Der Bonus gilt je direktem magischen Skilltreffer und bei Feuer der Verdammten auch je Folgetick. Sturm des Feuers verursacht aktuell nur einen Schadenstreffer nach der Vorwarnung; seine anschließende Feuerphase ist rein optisch und erzeugt keine zusätzlichen Ticks. Keine Wirkung auf normale Auto-Attacks, Begleiter oder andere Skills. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Aktivierung kostet 50 Mana auf Stufe 1, +13 je weiterer Stufe bis 167 vor Rabatten. |
| description_eng | Active Ritualist self buff with ten levels, lasting 300 seconds. Grants flat fire skill damage from 15 at level 1, increasing evenly to 65 at level 10. No Intelligence bonus. Applies only to Fire of the Damned, Fireball and Fire Storm. The bonus applies per direct magical skill hit and also per follow-up damage tick of Fire of the Damned. Fire Storm currently deals one damage hit after its warning; its following visual fire phase adds no damage ticks. No effect on normal basic attacks, companions or other skills. Cooldown 60 seconds; fixed 0.1-second cast unaffected by speed. Activation costs 50 Mana plus 13 per additional level, up to 167 before discounts. |
| dmgType (Altformat) | selfbuff |
| dur | 300 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 178 |
| skillName_de | Geist des Feuers |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| effects[0].key | fire-spirit-fire-attack |
| effects[0].type | damageBonus |
| effects[0].target | self |
| effects[0].appliesTo | allSkills |
| effects[0].damageSchool | fire |
| effects[0].value | 15 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 15 |
| effects[0].valueScaling.perLevel | 5,556 |
| effects[0].durationSeconds | 300 |
| effects[0].eligibleSkillNumbers[0] | 48 |
| effects[0].eligibleSkillNumbers[1] | 49 |
| effects[0].eligibleSkillNumbers[2] | 110 |
| effects[0].appliesToBasicAttacks | false |
| effects[0].appliesToPeriodicDamage | true |
| effects[0].bonusApplicationScope | eachSkillHit |
| effectsVersion | 1 |
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
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 15 |
| levelProgression.rules[0].rule.perLevel | 5,556 |
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
| mana (Aktivierungskosten, kein Bonus) | 50 |
| manaPricing.category | selfbuff |
| manaPricing.basis | skillLevel |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| classificationVersion | 1 |
| target | self |
| type | selfBuff |

### 110: Sturm des Feuers

Erzeugt um das anvisierte Ziel eine anfangs unauffällige kreisförmige brennende Fläche mit 5 Metern Radius. Während der ersten 0,5 Sekunden entsteht kein Schaden. Danach erhebt beziehungsweise verdichtet sich das Feuer zur Mitte hin zu einer Feuersäule oder einem Feuersturm; diese visuelle Feuerphase dauert 3 Sekunden. Gesamte Feldlaufzeit 3,5 Sekunden. Der Schaden trifft jeden betroffenen Gegner genau einmal nach der 0,5-sekündigen Vorwarnung; die dreisekündige Feuerphase erzeugt keine zusätzlichen Schadensticks. Mitbewegung des Feldes und exakter Animations-Trefferzeitpunkt bleiben offen. Magischer Skill-Grundschaden 113 auf Stufe 1 und +69 je weiterer Stufe, auf Stufe 10 734. Mana-Kosten 28 auf Stufe 1, +17 je weiterer Stufe, maximal 181 auf Stufe 10. Cooldown 120 Sekunden und -2 je weiterer Stufe, auf Stufe 10 102 Sekunden. Castzeit 0,2 Sekunden. Endgültige optische Darstellung später im Spiel prüfen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| skillName_eng | Storm of Fire |
| category | active |
| cd | 120 |
| charClass[0] | Bloodmage |
| charClass[1] | Ritualist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erzeugt um das anvisierte Ziel eine anfangs unauffällige kreisförmige brennende Fläche mit 5 Metern Radius. Während der ersten 0,5 Sekunden entsteht kein Schaden. Danach erhebt beziehungsweise verdichtet sich das Feuer zur Mitte hin zu einer Feuersäule oder einem Feuersturm; diese visuelle Feuerphase dauert 3 Sekunden. Gesamte Feldlaufzeit 3,5 Sekunden. Der Schaden trifft jeden betroffenen Gegner genau einmal nach der 0,5-sekündigen Vorwarnung; die dreisekündige Feuerphase erzeugt keine zusätzlichen Schadensticks. Mitbewegung des Feldes und exakter Animations-Trefferzeitpunkt bleiben offen. Magischer Skill-Grundschaden 113 auf Stufe 1 und +69 je weiterer Stufe, auf Stufe 10 734. Mana-Kosten 28 auf Stufe 1, +17 je weiterer Stufe, maximal 181 auf Stufe 10. Cooldown 120 Sekunden und -2 je weiterer Stufe, auf Stufe 10 102 Sekunden. Castzeit 0,2 Sekunden. Endgültige optische Darstellung später im Spiel prüfen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Creates an initially subtle circular burning area around the selected target with a 5-meter radius. No damage during the first 0.5 seconds. Fire then rises/converges toward the center as a pillar or storm for a 3-second visual fire phase. Total field duration 3.5 seconds. Each affected enemy takes damage exactly once after the 0.5-second warning; the three-second fire phase adds no damage ticks. Area tracking and exact animation hit timing remain pending. Magical skill base damage 113 plus 69 per additional level, reaching 734 at level 10. Mana cost 28 at level 1, maximum 181 at level 10. Cooldown 120 minus 2 per additional level, reaching 102 seconds. Cast time 0.2 seconds. Final visual presentation will be reviewed in game. |
| dmgType (Altformat) | spell |
| dur | 3,5 |
| matk | 113 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 110 |
| skillName_de | Sturm des Feuers |
| skillpoints | 1 |
| attackArea.shape | circle |
| attackArea.center | selectedTarget |
| attackArea.radiusMeters | 5 |
| attackArea.target | enemiesInArea |
| attackArea.geometryStatus | defined |
| attackArea.centerTracking | pending |
| attackExecution.damageStartsAfterSeconds | 0,5 |
| attackExecution.damagingVisualPhaseSeconds | 3 |
| attackExecution.hitFrequencyStatus | defined |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| castTimeSeconds | 0,2 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 120 |
| cooldownScaling.perLevel | -2 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 28 |
| resourceCosts[0].scaling.perLevel | 17 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 113 |
| statScaling.matk.perLevel | 69 |
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
| levelProgression.rules[1].rule.rule.base | 28 |
| levelProgression.rules[1].rule.rule.perLevel | 17 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 113 |
| levelProgression.rules[2].rule.perLevel | 69 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 214: Ausbrennen

Verstärkt deine Blutmagie auf Skilllevel 1 um 4 magischen Angriff. Solange die Verstärkung wirkt, verlierst du alle 1,5 Sekunden 18 Lebenspunkte. Pro weiterem Skilllevel steigt der Angriffsbonus um 4 und der Lebensverbrauch je Intervall um 6. Auf Skilllevel 10 erhältst du +40 magischen Angriff und verlierst 72 Lebenspunkte je Intervall.

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
| skillName_eng | Burn Out |
| category | passive |
| charClass[0] | Ritualist |
| charClass[1] | Bloodmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Verstärkt deine Blutmagie auf Skilllevel 1 um 4 magischen Angriff. Solange die Verstärkung wirkt, verlierst du alle 1,5 Sekunden 18 Lebenspunkte. Pro weiterem Skilllevel steigt der Angriffsbonus um 4 und der Lebensverbrauch je Intervall um 6. Auf Skilllevel 10 erhältst du +40 magischen Angriff und verlierst 72 Lebenspunkte je Intervall. |
| description_eng | Strengthens your blood magic by 4 magical attack at skill level 1. While the enhancement is active, you lose 18 health every 1.5 seconds. Each additional skill level adds 4 magical attack and increases the health cost per interval by 6. At skill level 10, gain +40 magical attack and lose 72 health per interval. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 214 |
| skillName_de | Ausbrennen |
| skillpoints | 1 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 4 |
| effects[0].valueScaling.perLevel | 4 |
| effects[0].type | statModifier |
| effects[0].target | self |
| effects[0].allowedRaces | [] |
| effects[0].stat | matk |
| effects[0].value | 4 |
| effects[0].unit | flat |
| effects[0].damageTypes | [] |
| effects[0].durationSeconds | 0 |
| effects[0].key | blood-magic-strength |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | 18 |
| effects[1].valueScaling.perLevel | 6 |
| effects[1].type | resourceDrain |
| effects[1].target | self |
| effects[1].allowedRaces | [] |
| effects[1].value | 18 |
| effects[1].unit | flat |
| effects[1].resource | health |
| effects[1].damageTypes | [] |
| effects[1].intervalSeconds | 1,5 |
| effects[1].durationSeconds | 0 |
| effects[1].key | blood-magic-health-drain |
| effectsVersion | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 4 |
| levelProgression.rules[0].rule.perLevel | 4 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 1 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 18 |
| levelProgression.rules[1].rule.perLevel | 6 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 48: Feuer der Verdammten

Erzeugt ein Feld aus bläulich-schwarzen, astral wirkenden Flammen um das anvisierte Ziel, maximale Feldlaufzeit 10 Sekunden. Fläche und Gegnerlimit steigen in Stufen: Stufe 1–2: 3 Meter Durchmesser und bis zu 2 Gegner; Stufe 3–4: 5 Meter Durchmesser und bis zu 4 Gegner; Stufe 5: 7 Meter Durchmesser und bis zu 6 Gegner. Jeder erstmals erfolgreich getroffene Gegner gibt pro Anwendung genau 1 Seelenfragment, unabhängig von späteren Schadensticks und ohne Tötungsvoraussetzung. Das Limit gilt für unterschiedliche Gegner über die gesamte Anwendung, damit durch Zielwechsel nicht mehr als 2/4/6 Seelen gewonnen werden. Weitere Treffer desselben Gegners geben keine zusätzliche Seele. Maximal 6 Seelen auf Stufe 5, begrenzt durch freie Plätze im Reaper-Speicher. Zielauswahl bei mehr Gegnern sowie Mitbewegung des Felds bleiben offen. Initialtreffer bei Sekunde 0 mit vollem berechnetem Initialschaden. Danach Schadensticks bei Sekunde 1,5/3/4,5/6/7,5/9, jeweils 30 Prozent des berechneten Initialschadens (70 Prozent weniger); sechs Folgeticks. Vor weiteren Schadensberechnungen entspricht die gesamte Trefferfolge dem 2,8-Fachen des Initialwerts, falls alle Treffer treffen. Der erste erfolgreiche Treffer verlangsamt um 5 Prozent, jeder weitere erfolgreiche Feldtreffer um einen zusätzlichen Prozentpunkt, maximal 11 Prozent nach sieben Treffern. Verhalten bei Verlassen/Wiedereintritt und genaue Restdauer des Slow-Effekts sind noch zu klären. Magischer Initial-Grundschaden 273 auf Stufe 1 und +112 je weiterer Stufe, auf Stufe 5 721. Mana-Kosten 191 auf Stufe 1, +78 je weiterer Stufe, maximal 503 auf Stufe 5. Cooldown 57 Sekunden und -1,5 je weiterer Stufe, auf Stufe 5 51 Sekunden. Castzeit 0,4 Sekunden. Der frühere Säulenentwurf mit 2 Sekunden Animation ist ersetzt. Kein zusätzlicher Schadensbonus abhängig von gespeicherten Seelen oder einer Opferzahl. Zeitpunkt der Feldplatzierung und Verrechnung der Folgeticks mit gegnerischer Verteidigung bleiben offen. Seelengewinn funktioniert auch gegen Spieler im PvP nach denselben Regeln: eine Seele je unterschiedlichem erfolgreich getroffenem Gegner pro Anwendung, begrenzt durch Gegnerlimit und freien Speicher. Übungspuppen geben keine Seelenfragmente; die konkrete Erkennung von Übungszielen wird später serverseitig umgesetzt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| learningRequirements.minimumCharacterLevel | 23 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Fire of the Damned |
| category | active |
| cd | 57 |
| charClass[0] | Ritualist |
| charClass[1] | Bloodmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erzeugt ein Feld aus bläulich-schwarzen, astral wirkenden Flammen um das anvisierte Ziel, maximale Feldlaufzeit 10 Sekunden. Fläche und Gegnerlimit steigen in Stufen: Stufe 1–2: 3 Meter Durchmesser und bis zu 2 Gegner; Stufe 3–4: 5 Meter Durchmesser und bis zu 4 Gegner; Stufe 5: 7 Meter Durchmesser und bis zu 6 Gegner. Jeder erstmals erfolgreich getroffene Gegner gibt pro Anwendung genau 1 Seelenfragment, unabhängig von späteren Schadensticks und ohne Tötungsvoraussetzung. Das Limit gilt für unterschiedliche Gegner über die gesamte Anwendung, damit durch Zielwechsel nicht mehr als 2/4/6 Seelen gewonnen werden. Weitere Treffer desselben Gegners geben keine zusätzliche Seele. Maximal 6 Seelen auf Stufe 5, begrenzt durch freie Plätze im Reaper-Speicher. Zielauswahl bei mehr Gegnern sowie Mitbewegung des Felds bleiben offen. Initialtreffer bei Sekunde 0 mit vollem berechnetem Initialschaden. Danach Schadensticks bei Sekunde 1,5/3/4,5/6/7,5/9, jeweils 30 Prozent des berechneten Initialschadens (70 Prozent weniger); sechs Folgeticks. Vor weiteren Schadensberechnungen entspricht die gesamte Trefferfolge dem 2,8-Fachen des Initialwerts, falls alle Treffer treffen. Der erste erfolgreiche Treffer verlangsamt um 5 Prozent, jeder weitere erfolgreiche Feldtreffer um einen zusätzlichen Prozentpunkt, maximal 11 Prozent nach sieben Treffern. Verhalten bei Verlassen/Wiedereintritt und genaue Restdauer des Slow-Effekts sind noch zu klären. Magischer Initial-Grundschaden 273 auf Stufe 1 und +112 je weiterer Stufe, auf Stufe 5 721. Mana-Kosten 191 auf Stufe 1, +78 je weiterer Stufe, maximal 503 auf Stufe 5. Cooldown 57 Sekunden und -1,5 je weiterer Stufe, auf Stufe 5 51 Sekunden. Castzeit 0,4 Sekunden. Der frühere Säulenentwurf mit 2 Sekunden Animation ist ersetzt. Kein zusätzlicher Schadensbonus abhängig von gespeicherten Seelen oder einer Opferzahl. Zeitpunkt der Feldplatzierung und Verrechnung der Folgeticks mit gegnerischer Verteidigung bleiben offen. Seelengewinn funktioniert auch gegen Spieler im PvP nach denselben Regeln: eine Seele je unterschiedlichem erfolgreich getroffenem Gegner pro Anwendung, begrenzt durch Gegnerlimit und freien Speicher. Übungspuppen geben keine Seelenfragmente; die konkrete Erkennung von Übungszielen wird später serverseitig umgesetzt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Creates a field of bluish-black astral flames, around the selected target, lasting at most 10 seconds. Area and target limit increase in milestones: levels 1–2: 3-meter diameter, up to 2 enemies; levels 3–4: 5-meter diameter, up to 4 enemies; level 5: 7-meter diameter, up to 6 enemies. Each enemy successfully hit for the first time grants exactly 1 soul fragment per activation, regardless of subsequent damage ticks, with no kill requirement. The limit applies to unique enemies across the entire activation so switching targets cannot generate more than 2/4/6 souls. Further hits on the same enemy grant no extra souls. Maximum 6 souls at level 5, limited by remaining Reaper storage capacity. Target selection among excess enemies and field tracking remain pending. Initial hit at second 0 deals full calculated initial damage. Six subsequent ticks at 1.5/3/4.5/6/7.5/9 seconds each deal 30 percent of calculated initial damage (70 percent less). Before further damage calculations, all seven hits total 2.8 times the initial value if all land. The first successful hit slows movement by 5 percent; each subsequent successful field hit adds one percentage point, up to 11 percent after seven hits. Exit/reentry behavior and the exact slow expiry remain pending. Initial magical base damage 273 plus 112 per additional level, reaching 721 at level 5. Mana cost 191 at level 1, maximum 503 at level 5. Cooldown 57 minus 1.5 per additional level, reaching 51 seconds. Cast time 0.4 seconds. Replaces the previous pillar concept and its 2-second animation. No additional damage bonus based on stored souls or victim count. Field placement timing and mitigation of subsequent ticks remain pending. Soul generation also works against players in PvP under the same rules: one soul per distinct successfully hit opponent per activation, limited by target cap and available storage. Training dummies grant no soul fragments; exact training-target detection will be implemented server-side later. |
| dmgType (Altformat) | spell |
| matk | 273 |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 48 |
| skillName_de | Feuer der Verdammten |
| skillpoints | 1 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,4 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 57 |
| cooldownScaling.perLevel | -1,5 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 191 |
| resourceCosts[0].scaling.perLevel | 78 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 273 |
| statScaling.matk.perLevel | 112 |
| attackArea.shape | circle |
| attackArea.center | selectedTarget |
| attackArea.radiusMeters | 1,5 |
| attackArea.target | enemiesInArea |
| attackArea.geometryStatus | defined |
| attackArea.evaluation | perHit |
| attackArea.radiusScaling.type | table |
| attackArea.radiusScaling.values[0] | 1,5 |
| attackArea.radiusScaling.values[1] | 1,5 |
| attackArea.radiusScaling.values[2] | 2,5 |
| attackArea.radiusScaling.values[3] | 2,5 |
| attackArea.radiusScaling.values[4] | 3,5 |
| attackArea.maxTargets | 2 |
| attackArea.maxTargetsScaling.type | table |
| attackArea.maxTargetsScaling.values[0] | 2 |
| attackArea.maxTargetsScaling.values[1] | 2 |
| attackArea.maxTargetsScaling.values[2] | 4 |
| attackArea.maxTargetsScaling.values[3] | 4 |
| attackArea.maxTargetsScaling.values[4] | 6 |
| attackArea.centerTracking | pending |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| dur | 10 |
| effects[0].key | damned-fire-periodic-damage |
| effects[0].type | periodicDamage |
| effects[0].target | enemiesInArea |
| effects[0].value | 0,3 |
| effects[0].unit | fraction |
| effects[0].initialCalculatedDamageFraction | 0,3 |
| effects[0].intervalSeconds | 1,5 |
| effects[0].firstTickAfterSeconds | 1,5 |
| effects[0].durationSeconds | 10 |
| effects[0].damageTypes[0] | magical |
| effects[0].damageBasisStatus | pending |
| effects[0].periodicDamageKind | areaAttack |
| effects[1].key | damned-fire-stacking-slow |
| effects[1].type | statModifier |
| effects[1].target | enemy |
| effects[1].stat | movementSpeed |
| effects[1].value | -0,05 |
| effects[1].unit | fraction |
| effects[1].applicationTrigger | ownSkillHit |
| effects[1].targetSkillNumber | 48 |
| effects[1].additionalSlowFractionPerHit | 0,01 |
| effects[1].maximumSlowFraction | 0,11 |
| effects[1].durationSeconds | 10 |
| effects[1].slowLifetimeStatus | pending |
| effectsVersion | 1 |
| soulGenerationSettings.onSuccessfulHit | true |
| soulGenerationSettings.fragmentsPerUniqueEnemy | 1 |
| soulGenerationSettings.oncePerEnemyPerActivation | true |
| soulGenerationSettings.requiresKill | false |
| soulGenerationSettings.maximumUniqueEnemiesScaling.type | table |
| soulGenerationSettings.maximumUniqueEnemiesScaling.values[0] | 2 |
| soulGenerationSettings.maximumUniqueEnemiesScaling.values[1] | 2 |
| soulGenerationSettings.maximumUniqueEnemiesScaling.values[2] | 4 |
| soulGenerationSettings.maximumUniqueEnemiesScaling.values[3] | 4 |
| soulGenerationSettings.maximumUniqueEnemiesScaling.values[4] | 6 |
| soulGenerationSettings.allowsPvpTargets | true |
| soulGenerationSettings.excludesTrainingDummies | true |
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
| levelProgression.rules[0].rule.rule.base | 57 |
| levelProgression.rules[0].rule.rule.perLevel | -1,5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 191 |
| levelProgression.rules[1].rule.rule.perLevel | 78 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 273 |
| levelProgression.rules[2].rule.perLevel | 112 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | attackArea |
| levelProgression.rules[3].path[1] | radiusScaling |
| levelProgression.rules[3].rule.kind | periodicSteps |
| levelProgression.rules[3].rule.base | 1,5 |
| levelProgression.rules[3].rule.steps[0] | 0 |
| levelProgression.rules[3].rule.steps[1] | 1 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.rules[4].path[0] | attackArea |
| levelProgression.rules[4].path[1] | maxTargetsScaling |
| levelProgression.rules[4].rule.kind | periodicSteps |
| levelProgression.rules[4].rule.base | 2 |
| levelProgression.rules[4].rule.steps[0] | 0 |
| levelProgression.rules[4].rule.steps[1] | 2 |
| levelProgression.rules[4].source | verifiedExistingLevels |
| levelProgression.rules[5].path[0] | soulGenerationSettings |
| levelProgression.rules[5].path[1] | maximumUniqueEnemiesScaling |
| levelProgression.rules[5].rule.kind | periodicSteps |
| levelProgression.rules[5].rule.base | 2 |
| levelProgression.rules[5].rule.steps[0] | 0 |
| levelProgression.rules[5].rule.steps[1] | 2 |
| levelProgression.rules[5].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 83: Opfergabe

Permanenter passiver Skill. Bei jeder eigenen Angriffsskill-Anwendung werden je gelerntem Skilllevel 0,05 Prozent des maximalen Lebens geopfert und der gesamte Schaden dieses Angriffsskills um 0,1 Prozent erhöht. Auf Stufe 10: 0,5 Prozent Max-Leben Kosten pro Anwendung für 1 Prozent mehr gesamten Angriffsskill-Schaden, einschließlich Waffen-/Charakteranteil; nicht nur Skill-Grundschaden. Auto-Attacks sind ausgeschlossen. Lebenspreis einmal pro Anwendung, nicht je Mehrfachtreffer oder Feldtick. Jede wiederholte Seelenqual-Anwendung zählt separat. Beispiele auf Stufe 10: Bei 5000 Max-HP kostet jede Anwendung 25 HP; 15 Anwendungen kosten 375 HP vor Regeneration und Heilung. Ein Angriff mit 1000 Schaden gewinnt 10, mit 10000 Schaden 100 zusätzlichen Schaden, vor etwaigen noch offenen Verrechnungsregeln. Der bisherige feste Victim-Bonus entfällt. Nicht offensive Skills, tödlicher Lebenspreis, genaue Reihenfolge der Schadensmultiplikatoren sowie HP-Regeneration werden noch geprüft. Keine eigene aktive Nutzung, Castzeit oder Cooldown.

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
| learningRequirements.minimumCharacterLevel | 27 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Sacrifice |
| category | passive |
| charClass[0] | Bloodmage |
| charClass[1] | Ritualist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanenter passiver Skill. Bei jeder eigenen Angriffsskill-Anwendung werden je gelerntem Skilllevel 0,05 Prozent des maximalen Lebens geopfert und der gesamte Schaden dieses Angriffsskills um 0,1 Prozent erhöht. Auf Stufe 10: 0,5 Prozent Max-Leben Kosten pro Anwendung für 1 Prozent mehr gesamten Angriffsskill-Schaden, einschließlich Waffen-/Charakteranteil; nicht nur Skill-Grundschaden. Auto-Attacks sind ausgeschlossen. Lebenspreis einmal pro Anwendung, nicht je Mehrfachtreffer oder Feldtick. Jede wiederholte Seelenqual-Anwendung zählt separat. Beispiele auf Stufe 10: Bei 5000 Max-HP kostet jede Anwendung 25 HP; 15 Anwendungen kosten 375 HP vor Regeneration und Heilung. Ein Angriff mit 1000 Schaden gewinnt 10, mit 10000 Schaden 100 zusätzlichen Schaden, vor etwaigen noch offenen Verrechnungsregeln. Der bisherige feste Victim-Bonus entfällt. Nicht offensive Skills, tödlicher Lebenspreis, genaue Reihenfolge der Schadensmultiplikatoren sowie HP-Regeneration werden noch geprüft. Keine eigene aktive Nutzung, Castzeit oder Cooldown. |
| description_eng | Permanent passive. Each own attack-skill activation sacrifices 0.05 percent of maximum health per learned level and increases that skill’s total damage by 0.1 percent per learned level. At level 10: 0.5 percent max-health cost per activation for 1 percent additional total attack-skill damage, including weapon/character contribution, not just skill base damage. Basic attacks are excluded. Health cost once per activation, not per multi-hit or field tick. Every repeated Soul Torment activation counts separately. Level-10 examples: at 5000 max HP each activation costs 25 HP; 15 activations cost 375 before regeneration or healing. An attack dealing 1000 gains 10 damage, one dealing 10000 gains 100, subject to damage-order rules still pending. Replaces the old fixed Victim bonus. Non-offensive skill interaction, lethal health costs, exact multiplier order and health regeneration remain pending. No manual activation, cast time or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 83 |
| skillName_de | Opfergabe |
| skillpoints | 1 |
| attackSacrificeSettings.healthReference | maxHealth |
| attackSacrificeSettings.healthCostFractionScaling.type | linear |
| attackSacrificeSettings.healthCostFractionScaling.base | 0,001 |
| attackSacrificeSettings.healthCostFractionScaling.perLevel | 0,001 |
| attackSacrificeSettings.oncePerAttackSkillActivation | true |
| attackSacrificeSettings.costsPerHit | false |
| attackSacrificeSettings.basicAttackInteractionStatus | defined |
| attackSacrificeSettings.nonAttackSkillInteractionStatus | pending |
| attackSacrificeSettings.lethalCostPolicyStatus | pending |
| attackSacrificeSettings.damageBonusBasis | totalAttackSkillDamage |
| attackSacrificeSettings.damageBonusFractionScaling.type | linear |
| attackSacrificeSettings.damageBonusFractionScaling.base | 0,001 |
| attackSacrificeSettings.damageBonusFractionScaling.perLevel | 0,001 |
| attackSacrificeSettings.excludesBasicAttacks | true |
| resourceCosts | [] |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | attackSacrificeSettings |
| levelProgression.rules[0].path[1] | healthCostFractionScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0,001 |
| levelProgression.rules[0].rule.perLevel | 0,001 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | attackSacrificeSettings |
| levelProgression.rules[1].path[1] | damageBonusFractionScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,001 |
| levelProgression.rules[1].rule.perLevel | 0,001 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 181: Arkane Aufladung

Permanente Passive mit zehn Stufen. Gewährt +1 Vitalität je Stufe, maximal +10. Kein Willenskraftbonus. Direkte MP-Regeneration je 3-Sekunden-Tick steigt gleichmäßig von +16 auf Stufe 1 bis +24 auf Stufe 10, also +8/9 je weiterer Stufe. Keine Victim-Voraussetzung und kein direkter M-Angriffsbonus. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer.

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
| skillName_eng | Arcane Charge |
| category | passive |
| charClass[0] | Bloodmage |
| charClass[1] | Ritualist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanente Passive mit zehn Stufen. Gewährt +1 Vitalität je Stufe, maximal +10. Kein Willenskraftbonus. Direkte MP-Regeneration je 3-Sekunden-Tick steigt gleichmäßig von +16 auf Stufe 1 bis +24 auf Stufe 10, also +8/9 je weiterer Stufe. Keine Victim-Voraussetzung und kein direkter M-Angriffsbonus. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer. |
| description_eng | Permanent passive with ten levels. Grants 1 Vitality per level, up to 10. No Wisdom bonus. Direct Mana regeneration per 3-second tick increases evenly from 16 at level 1 to 24 at level 10, adding 8/9 per additional level. No Victim requirement or direct magical attack bonus. No activation costs, cast time, cooldown or limited duration. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 181 |
| skillName_de | Arkane Aufladung |
| skillpoints | 1 |
| manaRegen | 16 |
| resourceCosts | [] |
| statScaling.manaRegen.type | linear |
| statScaling.manaRegen.base | 16 |
| statScaling.manaRegen.perLevel | 0,889 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 1 |
| statScaling.vita.perLevel | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | manaRegen |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 16 |
| levelProgression.rules[0].rule.perLevel | 0,889 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | vita |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |
| vita | 1 |

### 236: Teufelspakt

Aktiver Eigenbuff für 600 Sekunden. Je Skillstufe +2 Intelligenz, +3 Willenskraft und +5 Vitalität; auf Stufe 3 +6 Intelligenz, +9 Willenskraft und +15 Vitalität. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50/63/76 vor Rabatten. Erneute Anwendung erneuert die Wirkung ohne Selbststapelung. Kein zusätzlicher Risikoeffekt.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 80 |
| skillPointCosts.rankCosts.0 | 80 |
| skillPointCosts.rankCosts.1 | 100 |
| skillPointCosts.rankCosts.2 | 120 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 33 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Devil's Pact |
| category | active |
| cd | 60 |
| charClass[0] | Ritualist |
| charClass[1] | Bloodmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Aktiver Eigenbuff für 600 Sekunden. Je Skillstufe +2 Intelligenz, +3 Willenskraft und +5 Vitalität; auf Stufe 3 +6 Intelligenz, +9 Willenskraft und +15 Vitalität. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig vom Tempo. Mana 50/63/76 vor Rabatten. Erneute Anwendung erneuert die Wirkung ohne Selbststapelung. Kein zusätzlicher Risikoeffekt. |
| description_eng | Active self buff for 600 seconds. Each level grants 2 Intelligence, 3 Wisdom and 5 Vitality; level 3 grants 6 Intelligence, 9 Wisdom and 15 Vitality. Cooldown 60 seconds; fixed 0.1-second cast unaffected by speed. Mana 50/63/76 before discounts. Reapplication refreshes without stacking. No additional risk effect. |
| dmgType (Altformat) | selfbuff |
| dur | 600 |
| int | 2 |
| maxSkillLv | 3 |
| maxUpgradeLv | 10 |
| nr | 236 |
| skillName_de | Teufelspakt |
| skillpoints | 1 |
| vita | 5 |
| wis | 3 |
| castTimeSeconds | 0,1 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statScaling.wis.type | linear |
| statScaling.wis.base | 3 |
| statScaling.wis.perLevel | 3 |
| statScaling.int.type | linear |
| statScaling.int.base | 2 |
| statScaling.int.perLevel | 2 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 5 |
| statScaling.vita.perLevel | 5 |
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
| levelProgression.rules[1].path[1] | wis |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 3 |
| levelProgression.rules[1].rule.perLevel | 3 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | int |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 2 |
| levelProgression.rules[2].rule.perLevel | 2 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | vita |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 5 |
| levelProgression.rules[3].rule.perLevel | 5 |
| levelProgression.rules[3].source | storedFormula |
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

### 99: Schrei der Unterwelt

Opfert 25 Prozent des maximalen Lebens. Nur aktivierbar, wenn das aktuelle Leben strikt über 25 Prozent des Maximal-Lebens liegt. Der dreisekündige Ablauf besteht aus 1 Sekunde Energie sammeln, 1 Sekunde Energie halten und 1 Sekunde Explosion; während dieser drei Sekunden +100 direkte P-Defense und +100 direkte M-Defense auf allen sechs Stufen. In der dritten Sekunde wird die Energie mit einem Schrei kreisförmig im Radius von 5 Metern um den Anwender ausgestoßen und trifft alle Gegner dort einmal magisch. Cooldown je Stufe 90/88/86/84/82/80 Sekunden. Magischer Skill-Schaden: auf allen Stufen 666 Grundschaden, zusätzlich je Stufe 0/20/40/65/95/125 Prozent des tatsächlich für diesen Skill geopferten Lebens. Die Lebensanteile ersetzen die 666 nicht. Bei 8000 Max-HP werden 2000 HP geopfert; Skill-Schaden auf Stufe 1/2/3/4/5/6: 666/1066/1466/1966/2566/3166 vor zusätzlichen Charakter- und Schadensberechnungen. Die alte Lebenszahl -25 war kein fixer HP-Abzug und wurde durch strukturierte Kosten ersetzt. Castzeit 0,1 Sekunden vor dem dreisekündigen Energieablauf. Freiwillige Bewegung während des Sammelns und Charakter-M-Angriffsbeitrag sind noch offen. Keine Manakosten im neuen Kostenentwurf. Sichtbarer Aufbau soll Gegner zum Abstandhalten bewegen und dem Anwender kurz Raum zum Reagieren oder Entkommen verschaffen. Die Explosion stößt erfolgreich getroffene Gegner um 1 Meter radial vom Anwender weg. Bossresistenzen, Kollisionsverhalten und weitere Knockback-Regeln werden in der zweiten Runde festgelegt. Der exakte einzelne Trefferzeitpunkt innerhalb der Explosionssekunde wird an die Animation angepasst. Stun und Rückstoß treffen den Anwender weiterhin, unterbrechen jedoch den aktivierten Energieablauf nicht. Gewöhnliche Stopp-Befehle brechen den Ablauf ebenfalls nicht ab. Die Explosion erfolgt um die aktuelle Position des Anwenders bei Freisetzung; ein Rückstoß kann die Gefahrenzone somit verschieben. Tod vor der Freisetzung lässt die Energie verflüchtigen, ohne Todesexplosion; eine bereits freigesetzte Explosion bleibt wirksam. Keine allgemeine Kontrollimmunität, der Skill entfernt keinen Stun.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 20 |
| skillPointCosts.rankCosts.0 | 20 |
| skillPointCosts.rankCosts.1 | 32 |
| skillPointCosts.rankCosts.2 | 44 |
| skillPointCosts.rankCosts.3 | 56 |
| skillPointCosts.rankCosts.4 | 68 |
| skillPointCosts.rankCosts.5 | 80 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 37 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Scream of the Underworld |
| category | active |
| cd | 90 |
| charClass[0] | Bloodmage |
| charClass[1] | Ritualist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Opfert 25 Prozent des maximalen Lebens. Nur aktivierbar, wenn das aktuelle Leben strikt über 25 Prozent des Maximal-Lebens liegt. Der dreisekündige Ablauf besteht aus 1 Sekunde Energie sammeln, 1 Sekunde Energie halten und 1 Sekunde Explosion; während dieser drei Sekunden +100 direkte P-Defense und +100 direkte M-Defense auf allen sechs Stufen. In der dritten Sekunde wird die Energie mit einem Schrei kreisförmig im Radius von 5 Metern um den Anwender ausgestoßen und trifft alle Gegner dort einmal magisch. Cooldown je Stufe 90/88/86/84/82/80 Sekunden. Magischer Skill-Schaden: auf allen Stufen 666 Grundschaden, zusätzlich je Stufe 0/20/40/65/95/125 Prozent des tatsächlich für diesen Skill geopferten Lebens. Die Lebensanteile ersetzen die 666 nicht. Bei 8000 Max-HP werden 2000 HP geopfert; Skill-Schaden auf Stufe 1/2/3/4/5/6: 666/1066/1466/1966/2566/3166 vor zusätzlichen Charakter- und Schadensberechnungen. Die alte Lebenszahl -25 war kein fixer HP-Abzug und wurde durch strukturierte Kosten ersetzt. Castzeit 0,1 Sekunden vor dem dreisekündigen Energieablauf. Freiwillige Bewegung während des Sammelns und Charakter-M-Angriffsbeitrag sind noch offen. Keine Manakosten im neuen Kostenentwurf. Sichtbarer Aufbau soll Gegner zum Abstandhalten bewegen und dem Anwender kurz Raum zum Reagieren oder Entkommen verschaffen. Die Explosion stößt erfolgreich getroffene Gegner um 1 Meter radial vom Anwender weg. Bossresistenzen, Kollisionsverhalten und weitere Knockback-Regeln werden in der zweiten Runde festgelegt. Der exakte einzelne Trefferzeitpunkt innerhalb der Explosionssekunde wird an die Animation angepasst. Stun und Rückstoß treffen den Anwender weiterhin, unterbrechen jedoch den aktivierten Energieablauf nicht. Gewöhnliche Stopp-Befehle brechen den Ablauf ebenfalls nicht ab. Die Explosion erfolgt um die aktuelle Position des Anwenders bei Freisetzung; ein Rückstoß kann die Gefahrenzone somit verschieben. Tod vor der Freisetzung lässt die Energie verflüchtigen, ohne Todesexplosion; eine bereits freigesetzte Explosion bleibt wirksam. Keine allgemeine Kontrollimmunität, der Skill entfernt keinen Stun. |
| description_eng | Sacrifices 25 percent of maximum health. Usable only when current health is strictly above 25 percent of maximum. The three-second sequence consists of 1 second gathering energy, 1 second holding it and 1 second exploding, granting +100 direct physical and magical defense at all six levels during that time. During the third second releases the energy in a scream, hitting every enemy within a 5-meter radius once with magical damage. Cooldown by level 90/88/86/84/82/80 seconds. Magical skill damage: 666 base damage at all levels, plus 0/20/40/65/95/125 percent of actual health sacrificed for this skill by level. Health-based damage adds to, rather than replaces, 666. At 8000 maximum HP, sacrifices 2000 HP and yields 666/1066/1466/1966/2566/3166 skill damage at levels 1/2/3/4/5/6 before additional character and damage calculations. Legacy health -25 replaced by structured costs. Cast time 0.1 seconds before the three-second energy sequence. Voluntary movement while gathering energy and character magical attack contribution remain pending. No Mana cost in the new cost design. Visible buildup is intended to encourage opponents to move away, giving the caster space to react or escape. The explosion knocks successfully hit enemies 1 meter radially away from the caster. Boss resistance, collision and further knockback rules will be defined in the second review round. Exact single-hit timing within the explosion second will be matched to the animation. Stuns and displacement still affect the caster but do not interrupt the activated energy sequence. Ordinary stop commands do not cancel it either. Explosion centers on the caster’s current position at release; displacement can therefore move the danger zone. Death before release dissipates the energy without a death explosion; an already released explosion remains effective. No general crowd-control immunity and no stun removal. |
| dmgType (Altformat) | spell |
| dur | 3 |
| matk | 666 |
| maxSkillLv | 6 |
| maxUpgradeLv | 10 |
| nr | 99 |
| skillName_de | Schrei der Unterwelt |
| skillpoints | 1 |
| activationRequirements.resource | health |
| activationRequirements.minimumFraction | 0,25 |
| activationRequirements.requiresStrictlyAboveMinimumFraction | true |
| attackArea.shape | circle |
| attackArea.center | caster |
| attackArea.radiusMeters | 5 |
| attackArea.geometryStatus | defined |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | atImpact |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.additionalDamageFromSacrificedHealth.type | table |
| attackExecution.additionalDamageFromSacrificedHealth.values[0] | 0 |
| attackExecution.additionalDamageFromSacrificedHealth.values[1] | 0,2 |
| attackExecution.additionalDamageFromSacrificedHealth.values[2] | 0,4 |
| attackExecution.additionalDamageFromSacrificedHealth.values[3] | 0,65 |
| attackExecution.additionalDamageFromSacrificedHealth.values[4] | 0,95 |
| attackExecution.additionalDamageFromSacrificedHealth.values[5] | 1,25 |
| attackExecution.energyGatherSeconds | 1 |
| attackExecution.energyHoldSeconds | 1 |
| attackExecution.explosionPhaseSeconds | 1 |
| attackExecution.hitTimingStatus | pending |
| attackExecution.continuesThroughStun | true |
| attackExecution.continuesThroughDisplacement | true |
| attackExecution.cancelsOnCasterDeathBeforeRelease | true |
| attackExecution.releasedExplosionPersistsAfterCasterDeath | true |
| attackExecution.centersOnCasterAtRelease | true |
| attackExecution.ignoresOrdinaryStopCommand | true |
| attackExecution.knockbackMeters | 1 |
| attackExecution.knockbackDirection | awayFromCaster |
| attackExecution.knockbackAppliesOnSuccessfulHit | true |
| attackExecution.knockbackResistanceStatus | pending |
| cooldownScaling.type | linear |
| cooldownScaling.base | 90 |
| cooldownScaling.perLevel | -2 |
| effects[0].key | underworld-scream-pdef |
| effects[0].type | statModifier |
| effects[0].target | self |
| effects[0].stat | pdef |
| effects[0].value | 100 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 3 |
| effects[1].key | underworld-scream-mdef |
| effects[1].type | statModifier |
| effects[1].target | self |
| effects[1].stat | mdef |
| effects[1].value | 100 |
| effects[1].unit | flat |
| effects[1].durationSeconds | 3 |
| effectsVersion | 1 |
| resourceCosts[0].resource | health |
| resourceCosts[0].reference | maxHealth |
| resourceCosts[0].unit | fraction |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 0,25 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 666 |
| statScaling.matk.perLevel | 0 |
| castTimeSeconds | 0,1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | attackExecution |
| levelProgression.rules[0].path[1] | additionalDamageFromSacrificedHealth |
| levelProgression.rules[0].rule.kind | legacyTable |
| levelProgression.rules[0].rule.values[0] | 0 |
| levelProgression.rules[0].rule.values[1] | 0,2 |
| levelProgression.rules[0].rule.values[2] | 0,4 |
| levelProgression.rules[0].rule.values[3] | 0,65 |
| levelProgression.rules[0].rule.values[4] | 0,95 |
| levelProgression.rules[0].rule.values[5] | 1,25 |
| levelProgression.rules[0].rule.beyond | requiresDefinition |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | cooldownScaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0,1 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 90 |
| levelProgression.rules[1].rule.rule.perLevel | -2 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.max | 1 |
| levelProgression.rules[2].rule.rule.kind | constant |
| levelProgression.rules[2].rule.rule.value | 0,25 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | matk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 666 |
| levelProgression.rules[3].rule.perLevel | 0 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 237: Morrak´s Meister

Einstufige passive Verbesserung der questgebundenen Morrak-Beschwörung. Der Ritualist bezwingt Morrak in einer Quest und erhält dadurch zunächst die zusätzliche Möglichkeit, ihn als Nahkampf-Dämon zu beschwören; die erzählerische Meister-Wahl ist keine echte Auswahl. Sobald Morraks Meister auf Stufe 1 gelernt wird, ersetzt Morrak seine Nahkampf-Krallenangriffe durch magische Fernkampf-Auto-Attacks. Keine eigenen Casts oder Spells des Dämons; Attack-Speed-Wert bleibt 1, genaue Reichweite noch offen. Die separate Grundbeschwörung und Questfreischaltung müssen später in Quest- und Aktionsdaten angebunden werden; diese Passive selbst beschwört ihn nicht und hat keine aktive Castzeit. Bestehende Beschwörungsregeln bleiben: Castzeit 0,4 Sekunden, maximal 300 Sekunden Laufzeit bis Ablauf oder Tod. Die ursprüngliche questgebundene Nahkampf-Version gibt dem Anwender keine Attributboni. Erst mit gelernter Verbesserung Morraks Meister erhält der Anwender +5 Intelligenz und +5 Wisdom, und nur solange der verbesserte Fernkampf-Morrak beschworen ist. Lernen allein gewährt keine dauerhaften Attributboni. Der Beschwörungspreis von -500 Max-HP gilt während der Beschwörung weiterhin auch für die Grundversion. Morraks Werte sind live an seinen Meister gekoppelt: Max-Leben und M-Angriff entsprechen jeweils 10 Prozent des entsprechenden aktuellen Meisterwerts. Eigene Beschwörungskosten von -500 Max-HP werden aus der HP-Berechnungsbasis herausgerechnet. Buffs und Debuffs des Meisters wirken damit auch auf Morrak. Physische und magische Verteidigung Morraks entsprechen beide 10 Prozent der aktuellen magischen Verteidigung des Meisters. Er ist angreifbar und nimmt Flächenschaden; kein Mana oder Cast-Spells. Jeder Auto-Attack hat 1,5 Prozent Chance auf 50 Prozent Bewegungstempo-Senkung für 1,5 Sekunden. Beschwörungs-Cooldown 360 Sekunden (6 Minuten), maximale Anwesenheit 300 Sekunden (5 Minuten). Keine weiteren Beschwörungskosten: kein Mana, keine Seelen und kein zusätzlicher einmaliger Lebensabzug; allein -500 Max-HP während der Beschwörung. Aggroregeln und genaue Anpassung aktueller HP bei wechselndem Max-Leben bleiben offen. Diese zeitlich begrenzte Skill-Beschwörung belegt keinen regulären dauerhaften Pet-Platz und darf gleichzeitig mit dem normalen Pet aktiv sein. Zwei dauerhafte Pets bleiben dem Abenteurer vorbehalten. Macht des Begleiters wirkt nicht direkt auf Morrak; er übernimmt ausschließlich die definierten Werte seines Meisters. Reguläre Pets des Ritualisten können den Begleiterbuff erhalten. Grundfrequenz seiner Auto-Attacks: 1,1 Angriffe pro Sekunde bei 100 % eigenem Angriffstempo; keine Übernahme des Meister-Angriffstempos. Zusätzliche eigene Grundwerte: 1000 Max-Leben, 0 P-Angriff, 135 M-Angriff, 90 P-Verteidigung und 110 M-Verteidigung. Diese Werte werden zur bisherigen Vererbung addiert. Grundfrequenz 1,1 Angriffe pro Sekunde. Keine direkten Bindungsboni.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 300 |
| skillPointCosts.rankCosts.0 | 300 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 42 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Morrak's Master |
| category | passive |
| charClass[0] | Ritualist |
| charClass[1] | Bloodmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Einstufige passive Verbesserung der questgebundenen Morrak-Beschwörung. Der Ritualist bezwingt Morrak in einer Quest und erhält dadurch zunächst die zusätzliche Möglichkeit, ihn als Nahkampf-Dämon zu beschwören; die erzählerische Meister-Wahl ist keine echte Auswahl. Sobald Morraks Meister auf Stufe 1 gelernt wird, ersetzt Morrak seine Nahkampf-Krallenangriffe durch magische Fernkampf-Auto-Attacks. Keine eigenen Casts oder Spells des Dämons; Attack-Speed-Wert bleibt 1, genaue Reichweite noch offen. Die separate Grundbeschwörung und Questfreischaltung müssen später in Quest- und Aktionsdaten angebunden werden; diese Passive selbst beschwört ihn nicht und hat keine aktive Castzeit. Bestehende Beschwörungsregeln bleiben: Castzeit 0,4 Sekunden, maximal 300 Sekunden Laufzeit bis Ablauf oder Tod. Die ursprüngliche questgebundene Nahkampf-Version gibt dem Anwender keine Attributboni. Erst mit gelernter Verbesserung Morraks Meister erhält der Anwender +5 Intelligenz und +5 Wisdom, und nur solange der verbesserte Fernkampf-Morrak beschworen ist. Lernen allein gewährt keine dauerhaften Attributboni. Der Beschwörungspreis von -500 Max-HP gilt während der Beschwörung weiterhin auch für die Grundversion. Morraks Werte sind live an seinen Meister gekoppelt: Max-Leben und M-Angriff entsprechen jeweils 10 Prozent des entsprechenden aktuellen Meisterwerts. Eigene Beschwörungskosten von -500 Max-HP werden aus der HP-Berechnungsbasis herausgerechnet. Buffs und Debuffs des Meisters wirken damit auch auf Morrak. Physische und magische Verteidigung Morraks entsprechen beide 10 Prozent der aktuellen magischen Verteidigung des Meisters. Er ist angreifbar und nimmt Flächenschaden; kein Mana oder Cast-Spells. Jeder Auto-Attack hat 1,5 Prozent Chance auf 50 Prozent Bewegungstempo-Senkung für 1,5 Sekunden. Beschwörungs-Cooldown 360 Sekunden (6 Minuten), maximale Anwesenheit 300 Sekunden (5 Minuten). Keine weiteren Beschwörungskosten: kein Mana, keine Seelen und kein zusätzlicher einmaliger Lebensabzug; allein -500 Max-HP während der Beschwörung. Aggroregeln und genaue Anpassung aktueller HP bei wechselndem Max-Leben bleiben offen. Diese zeitlich begrenzte Skill-Beschwörung belegt keinen regulären dauerhaften Pet-Platz und darf gleichzeitig mit dem normalen Pet aktiv sein. Zwei dauerhafte Pets bleiben dem Abenteurer vorbehalten. Macht des Begleiters wirkt nicht direkt auf Morrak; er übernimmt ausschließlich die definierten Werte seines Meisters. Reguläre Pets des Ritualisten können den Begleiterbuff erhalten. Grundfrequenz seiner Auto-Attacks: 1,1 Angriffe pro Sekunde bei 100 % eigenem Angriffstempo; keine Übernahme des Meister-Angriffstempos. Zusätzliche eigene Grundwerte: 1000 Max-Leben, 0 P-Angriff, 135 M-Angriff, 90 P-Verteidigung und 110 M-Verteidigung. Diese Werte werden zur bisherigen Vererbung addiert. Grundfrequenz 1,1 Angriffe pro Sekunde. Keine direkten Bindungsboni. |
| description_eng | One-level passive upgrade to the quest-granted Morrak summon. The Ritualist defeats Morrak in a quest and initially gains a separate ability to summon him as a melee demon; the narrative master choice is not an actual option. Learning Morrak’s Master at level 1 replaces his melee claw attacks with magical ranged basic attacks. The demon still has no casts or spells; attack-speed rating remains 1, exact range pending. The separate base summon and quest unlock require later quest/action integration; this passive itself does not summon him and has no active cast time. Existing summon rules remain: cast 0.4 seconds, lifetime at most 300 seconds or until death. The original quest-granted melee version grants no caster attribute buffs. Only after learning Morrak’s Master does the caster gain +5 Intelligence and +5 Wisdom while the upgraded ranged Morrak is summoned; merely learning the passive grants no permanent attribute bonuses. The -500 max-HP summon penalty continues to apply while summoned, including the base version. Morrak is live-linked to his master: max HP and magical attack each equal 10 percent of the corresponding current caster stat. His own -500 max-HP summon penalty is excluded from the health calculation basis. Caster buffs and debuffs therefore affect Morrak. Both physical and magical defense equal 10 percent of the caster’s current magical defense. Targetable and affected by area damage, no Mana or casts. Each basic attack has 1.5 percent chance to slow movement by 50 percent for 1.5 seconds. Summon cooldown 360 seconds (6 minutes), maximum lifetime 300 seconds (5 minutes). No other summon costs: no Mana, souls or additional upfront health loss; only -500 max HP while summoned. Aggro rules and exact current-HP handling when maximum HP changes remain pending. This temporary skill summon does not occupy a regular permanent-pet slot and can coexist with the normal pet. Two permanent pets remain exclusive to the Adventurer. Power of the Pet does not directly affect Morrak; he inherits only the defined master stats. Regular Ritualist pets can receive the companion buff. Basic attack frequency: 1.1 attacks per second at 100% own attack speed; does not inherit caster attack speed. Additional fixed base stats: 1000 maximum HP, 0 physical attack, 135 magical attack, 90 physical defense and 110 magical defense, added to existing inheritance. Base frequency 1.1 attacks per second. No direct Bond bonuses. |
| dmgType (Altformat) | passive |
| maxSkillLv | 1 |
| maxUpgradeLv | 10 |
| nr | 237 |
| skillName_de | Morrak´s Meister |
| skillpoints | 1 |
| effects[0].key | morrak-caster-int |
| effects[0].type | statModifier |
| effects[0].target | self |
| effects[0].stat | int |
| effects[0].value | 5 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 300 |
| effects[0].endWith | morrak-summon |
| effects[1].key | morrak-caster-wis |
| effects[1].type | statModifier |
| effects[1].target | self |
| effects[1].stat | wis |
| effects[1].value | 5 |
| effects[1].unit | flat |
| effects[1].durationSeconds | 300 |
| effects[1].endWith | morrak-summon |
| effects[2].key | morrak-caster-maxHealth |
| effects[2].type | statModifier |
| effects[2].target | self |
| effects[2].stat | maxHealth |
| effects[2].value | -500 |
| effects[2].unit | flat |
| effects[2].durationSeconds | 300 |
| effects[2].endWith | morrak-summon |
| effectsVersion | 1 |
| summonedCreatureSettings.name | Morrak |
| summonedCreatureSettings.healthFractionOfCaster | 0,1 |
| summonedCreatureSettings.magicalAttackFractionOfCaster | 0,1 |
| summonedCreatureSettings.statSampling | liveBeforeSummonHealthPenalty |
| summonedCreatureSettings.defenseScalingStatus | defined |
| summonedCreatureSettings.attackStyle | rangedBasicAttack |
| summonedCreatureSettings.damageType | magical |
| summonedCreatureSettings.attackSpeed | 1 |
| summonedCreatureSettings.usesMana | false |
| summonedCreatureSettings.hasCastSpells | false |
| summonedCreatureSettings.targetable | true |
| summonedCreatureSettings.affectedByAreaAttacks | true |
| summonedCreatureSettings.lifetimeSeconds | 300 |
| summonedCreatureSettings.endsOnCreatureDeath | true |
| summonedCreatureSettings.casterBuffsEndWithCreature | true |
| summonedCreatureSettings.slowProcChancePerBasicAttack | 0,015 |
| summonedCreatureSettings.slowDurationSeconds | 1,5 |
| summonedCreatureSettings.movementSlowFraction | 0,5 |
| summonedCreatureSettings.threatAndAggroStatus | pending |
| summonedCreatureSettings.currentHealthAdjustmentStatus | pending |
| summonedCreatureSettings.baseSummonGrantedByQuest | true |
| summonedCreatureSettings.questRequiresDefeatingCreature | true |
| summonedCreatureSettings.skillIsRangedUpgrade | true |
| summonedCreatureSettings.baseAttackStyle | meleeClaws |
| summonedCreatureSettings.summonCastTimeSeconds | 0,4 |
| summonedCreatureSettings.rangedAttackRangeStatus | pending |
| summonedCreatureSettings.baseSummonGrantsAttributeBuffs | false |
| summonedCreatureSettings.attributeBuffsRequireLearnedUpgrade | true |
| summonedCreatureSettings.occupiesPermanentPetSlot | false |
| summonedCreatureSettings.canCoexistWithPermanentPet | true |
| summonedCreatureSettings.summonCooldownSeconds | 360 |
| summonedCreatureSettings.physicalDefenseFractionOfCasterMagicalDefense | 0,1 |
| summonedCreatureSettings.magicalDefenseFractionOfCasterMagicalDefense | 0,1 |
| summonedCreatureSettings.acceptsGroupCompanionBuffs | false |
| summonedCreatureSettings.baseAttacksPerSecond | 1,1 |
| summonedCreatureSettings.baseStats.maxHealth | 1.000 |
| summonedCreatureSettings.baseStats.magicalAttack | 135 |
| summonedCreatureSettings.baseStats.physicalDefense | 90 |
| summonedCreatureSettings.baseStats.magicalDefense | 110 |
| summonedCreatureSettings.receivesBond | false |
| resourceCosts | [] |
| levelProgression.version | 1 |
| levelProgression.rules | [] |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 103: Seelenfessel

Verbraucht 1 Seelenfragment und lässt zwei seelenhafte Hände aus dem Boden den Gegner festhalten. Kein Lebensopfer. Zwanzig Skillstufen mit unveränderter Start- und Maximalwirkung. Die Fessel betäubt das Ziel und senkt seine M-Defense währenddessen um 10 Prozent. Dauer steigt gleichmäßig von 2 Sekunden auf Stufe 1 bis 3 Sekunden auf Stufe 20. Magischer Initial-Grundschaden steigt gemäß ganzzahliger Stufentabelle von 97 auf 237; dazu einmal aktueller M-Angriff. Mana steigt gemäß ganzzahliger Stufentabelle von 39 auf 95. Cooldown sinkt gleichmäßig von 104 auf 90 Sekunden. Castzeit vorläufig 0,1 Sekunden innerhalb des genannten Bereichs 0,1–0,2 Sekunden. Während der Fessel ist Seelenqual nutzbar. Der permanente Seelenvorrat und seine Kapazität sind durch Reaper festgelegt; Seelengewinne folgen den Regeln der jeweiligen Skills. Mana-Gruppe: combo; bestehende Start- und Endkosten bleiben erhalten.

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
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 42 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Soul Shackle |
| category | active |
| cd | 104 |
| charClass[0] | Bloodmage |
| charClass[1] | Ritualist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Verbraucht 1 Seelenfragment und lässt zwei seelenhafte Hände aus dem Boden den Gegner festhalten. Kein Lebensopfer. Zwanzig Skillstufen mit unveränderter Start- und Maximalwirkung. Die Fessel betäubt das Ziel und senkt seine M-Defense währenddessen um 10 Prozent. Dauer steigt gleichmäßig von 2 Sekunden auf Stufe 1 bis 3 Sekunden auf Stufe 20. Magischer Initial-Grundschaden steigt gemäß ganzzahliger Stufentabelle von 97 auf 237; dazu einmal aktueller M-Angriff. Mana steigt gemäß ganzzahliger Stufentabelle von 39 auf 95. Cooldown sinkt gleichmäßig von 104 auf 90 Sekunden. Castzeit vorläufig 0,1 Sekunden innerhalb des genannten Bereichs 0,1–0,2 Sekunden. Während der Fessel ist Seelenqual nutzbar. Der permanente Seelenvorrat und seine Kapazität sind durch Reaper festgelegt; Seelengewinne folgen den Regeln der jeweiligen Skills. Mana-Gruppe: combo; bestehende Start- und Endkosten bleiben erhalten. |
| description_eng | Consumes one soul fragment and summons two spectral hands to shackle an enemy. No health sacrifice. Twenty levels retain the former starting and maximum effects. Stuns and reduces magical defense by 10 percent for the same duration, increasing evenly from 2 to 3 seconds. Initial magical base damage increases from 97 to 237 according to an integer level table, plus current magical attack once. Mana increases from 39 to 95 according to its integer level table. Cooldown decreases evenly from 104 to 90 seconds. Provisional cast time 0.1 seconds within the stated 0.1–0.2 range. Soul Torment is usable during the shackle. Permanent soul storage and capacity are defined by Reaper; soul gains follow the rules of the respective skills. Combo Mana group; existing starting and maximum costs retained. |
| dmgType (Altformat) | spell |
| dur | 2 |
| matk | 97 |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 103 |
| skillName_de | Seelenfessel |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 104 |
| cooldownScaling.perLevel | -0,737 |
| durationScaling.type | linear |
| durationScaling.base | 2 |
| durationScaling.perLevel | 0,053 |
| effects[0].key | soul-shackle-control |
| effects[0].type | control |
| effects[0].target | enemy |
| effects[0].controlKind | stun |
| effects[0].durationSeconds | 2 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 2 |
| effects[0].durationScaling.perLevel | 0,053 |
| effects[1].key | soul-shackle-magical-defense |
| effects[1].type | statModifier |
| effects[1].target | enemy |
| effects[1].stat | mdef |
| effects[1].value | -0,1 |
| effects[1].unit | fraction |
| effects[1].reference | targetStat |
| effects[1].durationSeconds | 2 |
| effects[1].durationScaling.type | linear |
| effects[1].durationScaling.base | 2 |
| effects[1].durationScaling.perLevel | 0,053 |
| effects[1].endWith | soul-shackle-control |
| effectsVersion | 1 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 39 |
| resourceCosts[0].scaling.values[0] | 39 |
| resourceCosts[0].scaling.values[1] | 42 |
| resourceCosts[0].scaling.values[2] | 45 |
| resourceCosts[0].scaling.values[3] | 48 |
| resourceCosts[0].scaling.values[4] | 51 |
| resourceCosts[0].scaling.values[5] | 54 |
| resourceCosts[0].scaling.values[6] | 57 |
| resourceCosts[0].scaling.values[7] | 60 |
| resourceCosts[0].scaling.values[8] | 63 |
| resourceCosts[0].scaling.values[9] | 66 |
| resourceCosts[0].scaling.values[10] | 68 |
| resourceCosts[0].scaling.values[11] | 71 |
| resourceCosts[0].scaling.values[12] | 74 |
| resourceCosts[0].scaling.values[13] | 77 |
| resourceCosts[0].scaling.values[14] | 80 |
| resourceCosts[0].scaling.values[15] | 83 |
| resourceCosts[0].scaling.values[16] | 86 |
| resourceCosts[0].scaling.values[17] | 89 |
| resourceCosts[0].scaling.values[18] | 92 |
| resourceCosts[0].scaling.values[19] | 95 |
| resourceCosts[1].resource | soulFragments |
| resourceCosts[1].reference | currentSoulFragments |
| resourceCosts[1].unit | flat |
| resourceCosts[1].scaling.type | fixed |
| resourceCosts[1].scaling.base | 1 |
| statScaling.matk.type | table |
| statScaling.matk.base | 97 |
| statScaling.matk.values[0] | 97 |
| statScaling.matk.values[1] | 104 |
| statScaling.matk.values[2] | 112 |
| statScaling.matk.values[3] | 119 |
| statScaling.matk.values[4] | 126 |
| statScaling.matk.values[5] | 134 |
| statScaling.matk.values[6] | 141 |
| statScaling.matk.values[7] | 149 |
| statScaling.matk.values[8] | 156 |
| statScaling.matk.values[9] | 163 |
| statScaling.matk.values[10] | 171 |
| statScaling.matk.values[11] | 178 |
| statScaling.matk.values[12] | 185 |
| statScaling.matk.values[13] | 193 |
| statScaling.matk.values[14] | 200 |
| statScaling.matk.values[15] | 208 |
| statScaling.matk.values[16] | 215 |
| statScaling.matk.values[17] | 222 |
| statScaling.matk.values[18] | 230 |
| statScaling.matk.values[19] | 237 |
| manaPricing.category | combo |
| manaPricing.factor | 0,4 |
| manaPricing.basis | sharedComboBudget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 104 |
| levelProgression.rules[0].rule.rule.perLevel | -0,737 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 2 |
| levelProgression.rules[1].rule.perLevel | 0,053 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | durationScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 2 |
| levelProgression.rules[2].rule.perLevel | 0,053 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 1 |
| levelProgression.rules[3].path[2] | durationScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 2 |
| levelProgression.rules[3].rule.perLevel | 0,053 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | resourceCosts |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | scaling |
| levelProgression.rules[4].rule.kind | bounded |
| levelProgression.rules[4].rule.min | 0 |
| levelProgression.rules[4].rule.rule.kind | rounded |
| levelProgression.rules[4].rule.rule.mode | round |
| levelProgression.rules[4].rule.rule.rule.kind | linear |
| levelProgression.rules[4].rule.rule.rule.base | 39 |
| levelProgression.rules[4].rule.rule.rule.perLevel | 2,947 |
| levelProgression.rules[4].source | verifiedExistingLevels |
| levelProgression.rules[5].path[0] | resourceCosts |
| levelProgression.rules[5].path[1] | 1 |
| levelProgression.rules[5].path[2] | scaling |
| levelProgression.rules[5].rule.kind | bounded |
| levelProgression.rules[5].rule.min | 0 |
| levelProgression.rules[5].rule.rule.kind | constant |
| levelProgression.rules[5].rule.rule.value | 1 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.rules[6].path[0] | statScaling |
| levelProgression.rules[6].path[1] | matk |
| levelProgression.rules[6].rule.kind | periodicSteps |
| levelProgression.rules[6].rule.base | 97 |
| levelProgression.rules[6].rule.steps[0] | 7 |
| levelProgression.rules[6].rule.steps[1] | 8 |
| levelProgression.rules[6].rule.steps[2] | 7 |
| levelProgression.rules[6].rule.steps[3] | 7 |
| levelProgression.rules[6].rule.steps[4] | 8 |
| levelProgression.rules[6].rule.steps[5] | 7 |
| levelProgression.rules[6].rule.steps[6] | 8 |
| levelProgression.rules[6].rule.steps[7] | 7 |
| levelProgression.rules[6].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 235: Meteoritenschauer

Vorläufig beibehaltener Flächenangriff: Meteoritenschauer über einer Fläche mit 12 Metern Durchmesser (6 Meter Radius). Drei Skillstufen. Der bisher gespeicherte physische Skill-Grundschaden 543 verdoppelt sich je weiterer Stufe: 543/1086/2172. Der Schaden bleibt physisch, sein zusätzlicher Charakterangriffsanteil skaliert jedoch mit dem aktuellen M-Angriff des Anwenders statt mit dessen P-Angriff. Physische Schadensboni und gegnerische physische Abwehr gehören weiterhin zum physischen Schadenskanal. Mana-Kosten 652 auf Stufe 1, Stufenwerte 652, 1304, 2608, maximal 2608 auf Stufe 3. Cooldown 280/240/200 Sekunden, auf Stufe 3 also 3 Minuten 20 Sekunden. Castzeit 0,8 Sekunden. Letztgenannte Gesamtlaufzeit 6 Sekunden. Meteoriteneinschläge erfolgen versetzt in kleinen und etwas größeren Wellen mit je sechs Meteoriten; erste Teilwelle 40 Prozent, zweite 60 Prozent, Abstand innerhalb eines Paars 0,5 Sekunden. Bestätigter Rhythmus: bei Sekunde 1/3/5 jeweils eine 40-Prozent-Welle, bei Sekunde 1,5/3,5/5,5 jeweils eine 60-Prozent-Welle. Sechs Wellen mit jeweils sechs Meteoriten, insgesamt 36 Meteoriten. Jede Teilwelle verursacht genau einen Flächentreffer bei jedem zulässigen Gegner, der zum jeweiligen Wellenzeitpunkt innerhalb der Fläche steht. Die sechs Meteoriten je Welle sind ausschließlich Optik: keine Einzelprojektiltreffer, keine lokalen Einschlags-Trefferflächen und kein zusätzlicher Schaden durch überlappende Meteoriten. Der Schaden je Ziel und Teilwelle beträgt den gespeicherten Wellenanteil (40 oder 60 Prozent) aus Skill-Grundschaden plus aktuellem M-Angriffsanteil einschließlich passendem physischen Skillschadenbonus. Ein Ziel, das während aller sechs Teilwellen in der Fläche bleibt, erhält insgesamt drei volle Schadensäquivalente. Entscheidung über langfristigen Verbleib des Skills noch offen. Vor jeder Teilwelle werden alle aktuell innerhalb der Fläche befindlichen Gegner neu ermittelt. Sind es höchstens 6, werden alle getroffen; sind es mehr, werden für diese Welle zufällig 6 unterschiedliche Gegner ohne Mehrfachauswahl desselben Gegners ausgewählt. Frühere Wellen schränken die neue Auswahl nicht ein. Gegner außerhalb der Fläche werden nicht getroffen, neu eingetretene Gegner können ab der nächsten Welle ausgewählt werden. Maximal 6 Ziele je Welle, kein Gesamtlimit unterschiedlicher Ziele über die gesamte Anwendung. Die Anzahl sichtbarer Meteoriten ist kein zusätzlicher Schadensmultiplikator. Aktuelle Mana-Gruppe: finisher (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 80 |
| skillPointCosts.rankCosts.0 | 80 |
| skillPointCosts.rankCosts.1 | 100 |
| skillPointCosts.rankCosts.2 | 120 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 47 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Meteor Shower |
| category | active |
| cd | 280 |
| charClass[0] | Ritualist |
| charClass[1] | Bloodmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Vorläufig beibehaltener Flächenangriff: Meteoritenschauer über einer Fläche mit 12 Metern Durchmesser (6 Meter Radius). Drei Skillstufen. Der bisher gespeicherte physische Skill-Grundschaden 543 verdoppelt sich je weiterer Stufe: 543/1086/2172. Der Schaden bleibt physisch, sein zusätzlicher Charakterangriffsanteil skaliert jedoch mit dem aktuellen M-Angriff des Anwenders statt mit dessen P-Angriff. Physische Schadensboni und gegnerische physische Abwehr gehören weiterhin zum physischen Schadenskanal. Mana-Kosten 652 auf Stufe 1, Stufenwerte 652, 1304, 2608, maximal 2608 auf Stufe 3. Cooldown 280/240/200 Sekunden, auf Stufe 3 also 3 Minuten 20 Sekunden. Castzeit 0,8 Sekunden. Letztgenannte Gesamtlaufzeit 6 Sekunden. Meteoriteneinschläge erfolgen versetzt in kleinen und etwas größeren Wellen mit je sechs Meteoriten; erste Teilwelle 40 Prozent, zweite 60 Prozent, Abstand innerhalb eines Paars 0,5 Sekunden. Bestätigter Rhythmus: bei Sekunde 1/3/5 jeweils eine 40-Prozent-Welle, bei Sekunde 1,5/3,5/5,5 jeweils eine 60-Prozent-Welle. Sechs Wellen mit jeweils sechs Meteoriten, insgesamt 36 Meteoriten. Jede Teilwelle verursacht genau einen Flächentreffer bei jedem zulässigen Gegner, der zum jeweiligen Wellenzeitpunkt innerhalb der Fläche steht. Die sechs Meteoriten je Welle sind ausschließlich Optik: keine Einzelprojektiltreffer, keine lokalen Einschlags-Trefferflächen und kein zusätzlicher Schaden durch überlappende Meteoriten. Der Schaden je Ziel und Teilwelle beträgt den gespeicherten Wellenanteil (40 oder 60 Prozent) aus Skill-Grundschaden plus aktuellem M-Angriffsanteil einschließlich passendem physischen Skillschadenbonus. Ein Ziel, das während aller sechs Teilwellen in der Fläche bleibt, erhält insgesamt drei volle Schadensäquivalente. Entscheidung über langfristigen Verbleib des Skills noch offen. Vor jeder Teilwelle werden alle aktuell innerhalb der Fläche befindlichen Gegner neu ermittelt. Sind es höchstens 6, werden alle getroffen; sind es mehr, werden für diese Welle zufällig 6 unterschiedliche Gegner ohne Mehrfachauswahl desselben Gegners ausgewählt. Frühere Wellen schränken die neue Auswahl nicht ein. Gegner außerhalb der Fläche werden nicht getroffen, neu eingetretene Gegner können ab der nächsten Welle ausgewählt werden. Maximal 6 Ziele je Welle, kein Gesamtlimit unterschiedlicher Ziele über die gesamte Anwendung. Die Anzahl sichtbarer Meteoriten ist kein zusätzlicher Schadensmultiplikator. Aktuelle Mana-Gruppe: finisher (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Provisionally retained area attack: meteor shower over a 12-meter-diameter area (6-meter radius). Three skill levels. Existing physical skill base damage 543 doubles per additional level: 543/1086/2172. Damage remains physical, but its additional caster-attack contribution uses the caster’s current magical attack instead of physical attack. Physical damage modifiers and enemy physical defense still belong to the physical damage channel. Mana cost 652 at level 1, maximum 2608 at level 3. Cooldown 280/240/200 seconds, reaching 3 minutes 20 seconds at level 3. Cast time 0.8 seconds. Latest stated duration 6 seconds. Staggered waves of six smaller then six slightly larger meteors, with 40 percent then 60 percent portions separated by 0.5 seconds. Confirmed timing: 40-percent waves at seconds 1/3/5, 60-percent waves at 1.5/3.5/5.5. Six waves of six meteors each, totaling 36 meteors. Each partial wave causes exactly one area hit on every eligible enemy inside the area at that wave time. Six meteors per wave are visual only: no individual projectile hits, local impact hitboxes or overlap damage. Each target receives the stored wave fraction (40 or 60 percent) of skill base damage plus current magical attack contribution including the matching physical skill damage bonus. A target inside all six partial waves receives three full damage equivalents in total. Long-term inclusion remains open. Before each partial wave, determine all enemies currently inside the area again. Hit all if there are at most 6; otherwise randomly select 6 distinct enemies without replacement for that wave. Previous waves do not restrict later selection. Enemies outside the area are not hit; newly entered enemies are eligible at the next wave. Maximum 6 targets per wave, with no activation-wide distinct-target limit. Visual meteor count is not an additional damage multiplier. |
| dmgType (Altformat) | spell |
| maxSkillLv | 3 |
| maxUpgradeLv | 10 |
| nr | 235 |
| patk | 543 |
| skillName_de | Meteoritenschauer |
| skillpoints | 1 |
| attackArea.shape | circle |
| attackArea.center | skillCenter |
| attackArea.radiusMeters | 6 |
| attackArea.geometryStatus | defined |
| attackArea.target | enemiesInArea |
| attackArea.maxTargets | 6 |
| attackArea.maxTargetsPerWave | 6 |
| attackArea.targetSelectionTiming | eachWave |
| attackArea.targetSelection | randomWithoutReplacement |
| castTimeSeconds | 0,8 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 280 |
| cooldownScaling.perLevel | -40 |
| dur | 6 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.values[0] | 652 |
| resourceCosts[0].scaling.values[1] | 1.304 |
| resourceCosts[0].scaling.values[2] | 2.608 |
| resourceCosts[0].scaling.base | 652 |
| statScaling.patk.type | table |
| statScaling.patk.values[0] | 543 |
| statScaling.patk.values[1] | 1.086 |
| statScaling.patk.values[2] | 2.172 |
| attackExecution.meteorWaveSequence[0].offsetSeconds | 1 |
| attackExecution.meteorWaveSequence[0].damageFraction | 0,4 |
| attackExecution.meteorWaveSequence[0].meteorCount | 6 |
| attackExecution.meteorWaveSequence[1].offsetSeconds | 1,5 |
| attackExecution.meteorWaveSequence[1].damageFraction | 0,6 |
| attackExecution.meteorWaveSequence[1].meteorCount | 6 |
| attackExecution.meteorWaveSequence[2].offsetSeconds | 3 |
| attackExecution.meteorWaveSequence[2].damageFraction | 0,4 |
| attackExecution.meteorWaveSequence[2].meteorCount | 6 |
| attackExecution.meteorWaveSequence[3].offsetSeconds | 3,5 |
| attackExecution.meteorWaveSequence[3].damageFraction | 0,6 |
| attackExecution.meteorWaveSequence[3].meteorCount | 6 |
| attackExecution.meteorWaveSequence[4].offsetSeconds | 5 |
| attackExecution.meteorWaveSequence[4].damageFraction | 0,4 |
| attackExecution.meteorWaveSequence[4].meteorCount | 6 |
| attackExecution.meteorWaveSequence[5].offsetSeconds | 5,5 |
| attackExecution.meteorWaveSequence[5].damageFraction | 0,6 |
| attackExecution.meteorWaveSequence[5].meteorCount | 6 |
| attackExecution.meteorDamageDistributionStatus | defined |
| attackExecution.physicalDamageAttackSource | magicalAttack |
| attackExecution.meteorHitMode | oneAreaHitPerWave |
| attackExecution.meteorCountIsVisualOnly | true |
| attackExecution.meteorWaveDamageScope | eachEligibleTargetInArea |
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
| levelProgression.rules[0].rule.rule.base | 280 |
| levelProgression.rules[0].rule.rule.perLevel | -40 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | exponential |
| levelProgression.rules[1].rule.rule.base | 652 |
| levelProgression.rules[1].rule.rule.factor | 2 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | exponential |
| levelProgression.rules[2].rule.base | 543 |
| levelProgression.rules[2].rule.factor | 2 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 241: Zahl der Opfer

Permanenter passiver Vorratsbonus mit einer lernbaren Stufe. Je volle zehn aktuell gespeicherte Seelen im durch Reaper verwalteten Speicher +3 direkter M-Angriff: 0–9 Seelen geben 0, 10–19 geben +3, 20–29 geben +6, bis maximal +30 bei 100 Seelen. Bonus sinkt beim Ausgeben entsprechend der vollen Zehnergruppen. Reaper selbst gibt keinen Intelligenzbonus. Keine eigene Seelenerzeugung, kein historischer Tötungszähler und keine Moralvoraussetzung. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 400 |
| skillPointCosts.rankCosts.0 | 400 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 55 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| soulReserveBonusSettings.stat | matk |
| soulReserveBonusSettings.maximumBonus | 30 |
| soulReserveBonusSettings.usesCurrentStoredAmount | true |
| soulReserveBonusSettings.levelProgressionStatus | defined |
| soulReserveBonusSettings.fragmentsPerBonusStep | 10 |
| soulReserveBonusSettings.bonusPerFullStep | 3 |
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
| nr | 241 |
| skillName_eng | Number of Victims |
| skillName_de | Zahl der Opfer |
| charClass[0] | Bloodmage |
| charClass[1] | Ritualist |
| currentSkillLv | 0 |
| maxSkillLv | 1 |
| currentUpgradeLv | 0 |
| maxUpgradeLv | 10 |
| category | passive |
| description_eng | Permanent passive reserve bonus with one learnable level. Each complete ten currently stored souls in the Reaper-managed reserve grants 3 direct magical attack: 0–9 souls grant 0, 10–19 grant 3, 20–29 grant 6, up to 30 at 100 souls. Spending souls reduces the bonus at ten-soul thresholds. Reaper itself grants no Intelligence. Generates no souls and uses no historical kill count or morality. No activation costs, cast time, cooldown or limited duration. |
| description_de | Permanenter passiver Vorratsbonus mit einer lernbaren Stufe. Je volle zehn aktuell gespeicherte Seelen im durch Reaper verwalteten Speicher +3 direkter M-Angriff: 0–9 Seelen geben 0, 10–19 geben +3, 20–29 geben +6, bis maximal +30 bei 100 Seelen. Bonus sinkt beim Ausgeben entsprechend der vollen Zehnergruppen. Reaper selbst gibt keinen Intelligenzbonus. Keine eigene Seelenerzeugung, kein historischer Tötungszähler und keine Moralvoraussetzung. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer. |
| dmgType (Altformat) | passive |
| skillpoints | 1 |
| levelProgression.version | 1 |
| levelProgression.rules | [] |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 105: Seelenernte

Manueller Abschluss der Kombination Seelenfessel → Seelenqual → Seelenernte. Verursacht einmalig magischen Schaden und heilt den Anwender. Magischer Grundschaden 381 auf Stufe 1, +158 je weiterer Stufe, auf Stufe 5 1013. Bestehende feste Selbstheilung 150 je gelerntem Skilllevel, von 150 bis 750 HP; bisher keine bestätigte zusätzliche Abhängigkeit der Heilmenge von der Trefferzahl. Die Zahl erfolgreicher Seelenqual-Treffer auf dem gefesselten Ziel bestimmt die Ernte: 0–4 ergibt 0 Seelenfragmente, 5–11 ergibt 1, ab 12 ergibt 2. Maximal 2 Seelenfragmente pro Abschluss. Seelenfessel kostet zuvor 1 Fragment. Seelenernte ist bis 1,5 Sekunden nach Auflösung der Seelenfessel abfeuerbar; genaue serverseitige Ablaufprüfung und Verhalten bei vorzeitigem Tod des Ziels noch offen. Cooldown 200 Sekunden, je weiterer Stufe 5 Sekunden weniger, auf Stufe 5 180 Sekunden. Castzeit 0,3 Sekunden, einmalige Wirkung. Mana-Kosten 152 auf Stufe 1, +64 je weiterer Stufe, maximal 408 auf Stufe 5. Speicherregeln sind durch Reaper definiert. Eine zusätzliche Schadens-/Heilskalierung nach Trefferzahl ist bisher nicht festgelegt. Übungspuppen geben keine Seelenfragmente; die konkrete Erkennung von Übungszielen wird später serverseitig umgesetzt. Aktuelle Mana-Gruppe: combo (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| skillName_eng | Soul Harvest |
| category | active |
| cd | 200 |
| charClass[0] | Bloodmage |
| charClass[1] | Ritualist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Manueller Abschluss der Kombination Seelenfessel → Seelenqual → Seelenernte. Verursacht einmalig magischen Schaden und heilt den Anwender. Magischer Grundschaden 381 auf Stufe 1, +158 je weiterer Stufe, auf Stufe 5 1013. Bestehende feste Selbstheilung 150 je gelerntem Skilllevel, von 150 bis 750 HP; bisher keine bestätigte zusätzliche Abhängigkeit der Heilmenge von der Trefferzahl. Die Zahl erfolgreicher Seelenqual-Treffer auf dem gefesselten Ziel bestimmt die Ernte: 0–4 ergibt 0 Seelenfragmente, 5–11 ergibt 1, ab 12 ergibt 2. Maximal 2 Seelenfragmente pro Abschluss. Seelenfessel kostet zuvor 1 Fragment. Seelenernte ist bis 1,5 Sekunden nach Auflösung der Seelenfessel abfeuerbar; genaue serverseitige Ablaufprüfung und Verhalten bei vorzeitigem Tod des Ziels noch offen. Cooldown 200 Sekunden, je weiterer Stufe 5 Sekunden weniger, auf Stufe 5 180 Sekunden. Castzeit 0,3 Sekunden, einmalige Wirkung. Mana-Kosten 152 auf Stufe 1, +64 je weiterer Stufe, maximal 408 auf Stufe 5. Speicherregeln sind durch Reaper definiert. Eine zusätzliche Schadens-/Heilskalierung nach Trefferzahl ist bisher nicht festgelegt. Übungspuppen geben keine Seelenfragmente; die konkrete Erkennung von Übungszielen wird später serverseitig umgesetzt. Aktuelle Mana-Gruppe: combo (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Manual finisher for Soul Shackle → Soul Torment → Soul Harvest. Deals magical damage once and heals the caster. Base damage 381 at level 1, plus 158 per additional level to 1013 at level 5. Existing fixed self-healing remains 150 per learned skill level, from 150 to 750 HP; no extra hit-count-based healing amount is confirmed. Successful Torment hits on the shackled target determine the harvest: 0–4 yields 0 soul fragments, 5–11 yields 1, at least 12 yields 2. Maximum 2 fragments per finisher. Shackle costs 1 fragment first. Finisher can be fired up to 1.5 seconds after Shackle ends; precise server timing and target death behavior remain pending. Cooldown starts at 200 seconds and decreases by 5 per additional level to 180 seconds at level 5. Cast time 0.3 seconds; one-time effect. Mana cost 152 at level 1, maximum 408 at level 5. Storage rules are defined by Reaper. No additional hit-count damage/healing scaling is currently confirmed. Training dummies grant no soul fragments; exact training-target detection will be implemented server-side later. |
| dmgType (Altformat) | spell |
| matk | 381 |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 105 |
| skillName_de | Seelenernte |
| skillpoints | 1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 200 |
| cooldownScaling.perLevel | -5 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 150 |
| effects[0].valueScaling.perLevel | 150 |
| effects[0].type | heal |
| effects[0].target | self |
| effects[0].value | 150 |
| effects[0].unit | flat |
| effects[0].damageTypes | [] |
| effects[0].durationSeconds | 0 |
| effects[0].key | self-heal |
| effectsVersion | 1 |
| castTimeSeconds | 0,3 |
| durationScaling.type | table |
| durationScaling.values[0] | 0 |
| durationScaling.values[1] | 0 |
| durationScaling.values[2] | 0 |
| durationScaling.values[3] | 0 |
| durationScaling.values[4] | 0 |
| soulHarvestSettings.sourceSkillNumber | 104 |
| soulHarvestSettings.shackleSkillNumber | 103 |
| soulHarvestSettings.minimumHitsForOneFragment | 5 |
| soulHarvestSettings.minimumHitsForTwoFragments | 12 |
| soulHarvestSettings.maximumFragments | 2 |
| soulHarvestSettings.manualFinisher | true |
| soulHarvestSettings.postShackleWindowSeconds | 1,5 |
| soulHarvestSettings.damageAndHealingScalingByHitCountStatus | pending |
| soulHarvestSettings.excludesTrainingDummies | true |
| statScaling.matk.type | linear |
| statScaling.matk.base | 381 |
| statScaling.matk.perLevel | 158 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 152 |
| resourceCosts[0].scaling.perLevel | 64 |
| mana (Aktivierungskosten, kein Bonus) | 152 |
| manaPricing.category | combo |
| manaPricing.factor | 0,4 |
| manaPricing.basis | sharedComboBudget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 200 |
| levelProgression.rules[0].rule.rule.perLevel | -5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 150 |
| levelProgression.rules[1].rule.perLevel | 150 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | durationScaling |
| levelProgression.rules[2].rule.kind | constant |
| levelProgression.rules[2].rule.value | 0 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | matk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 381 |
| levelProgression.rules[3].rule.perLevel | 158 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | resourceCosts |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | scaling |
| levelProgression.rules[4].rule.kind | bounded |
| levelProgression.rules[4].rule.min | 0 |
| levelProgression.rules[4].rule.rule.kind | linear |
| levelProgression.rules[4].rule.rule.base | 152 |
| levelProgression.rules[4].rule.rule.perLevel | 64 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 104: Seelenqual

Einmaliger magischer Angriff, nur solange Seelenfessel auf dem Ziel wirkt. Kein Lebensopfer, kein Schaden über Zeit. Grundschaden 47 auf Stufe 1, gleichmäßig steigend auf 168 auf Stufe 10. Zwischenwerte werden für die Anzeige gerundet. Mana-Kosten 19 auf Stufe 1, Stufenwerte 19, 24, 30, 35, 40, 46, 51, 56, 62, 67, maximal 67 auf Stufe 10. Castzeit 0 Sekunden, Cooldown 0,2 Sekunden. Bei sofortiger erster Anwendung passen maximal 15 Anwendungen in das 3-Sekunden-Fenster (Zeitpunkte 0 bis 2,8 Sekunden); Reaktionszeit und Serverablauf können das reduzieren. 15 Anwendungen kosten auf Stufe 10 1005 Mana. Für Seelenernte vorgemerkt: 0–4 erfolgreiche Seelenqual-Treffer ergeben 0 Seelen, 5–11 ergeben 1, ab 12 ergeben 2; höhere Trefferzahlen durch das geänderte Timing erhöhen die Ernte nicht über 2. Manueller Abschluss bevorzugt, genaue Umsetzung noch offen. Seelenfessel kostet zuvor 1 Seele, daher entspricht eine Ernte von 1 nur dem Ausgleich dieses Einsatzes. Aktuelle Mana-Gruppe: combo (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| learningRequirements.minimumCharacterLevel | 60 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Soul Torment |
| category | active |
| cd | 0,2 |
| charClass[0] | Bloodmage |
| charClass[1] | Ritualist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Einmaliger magischer Angriff, nur solange Seelenfessel auf dem Ziel wirkt. Kein Lebensopfer, kein Schaden über Zeit. Grundschaden 47 auf Stufe 1, gleichmäßig steigend auf 168 auf Stufe 10. Zwischenwerte werden für die Anzeige gerundet. Mana-Kosten 19 auf Stufe 1, Stufenwerte 19, 24, 30, 35, 40, 46, 51, 56, 62, 67, maximal 67 auf Stufe 10. Castzeit 0 Sekunden, Cooldown 0,2 Sekunden. Bei sofortiger erster Anwendung passen maximal 15 Anwendungen in das 3-Sekunden-Fenster (Zeitpunkte 0 bis 2,8 Sekunden); Reaktionszeit und Serverablauf können das reduzieren. 15 Anwendungen kosten auf Stufe 10 1005 Mana. Für Seelenernte vorgemerkt: 0–4 erfolgreiche Seelenqual-Treffer ergeben 0 Seelen, 5–11 ergeben 1, ab 12 ergeben 2; höhere Trefferzahlen durch das geänderte Timing erhöhen die Ernte nicht über 2. Manueller Abschluss bevorzugt, genaue Umsetzung noch offen. Seelenfessel kostet zuvor 1 Seele, daher entspricht eine Ernte von 1 nur dem Ausgleich dieses Einsatzes. Aktuelle Mana-Gruppe: combo (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Deals one magical hit only while Soul Shackle affects the target. Base damage starts at 47 at level 1 and increases evenly to 168 at level 10. Intermediate values are rounded for display. Mana cost 19 at level 1, maximum 67 at level 10. Fifteen uses cost 1020 Mana. No health sacrifice, no damage over time, zero cast time, cooldown 0.2 seconds. Up to 15 immediate uses fit into a full 3-second shackle; the comparison uses 15. Harvest yields 0 fragments for 0–4 hits, 1 for 5–11 and 2 for 12 or more, capped at 2. Each shackle costs 1 fragment. Exact server timing and manual finisher implementation remain pending. |
| dmgType (Altformat) | spell |
| matk | 47 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 104 |
| skillName_de | Seelenqual |
| skillpoints | 1 |
| activationRequirements.requiredTargetMarkSkillNumber | 103 |
| attackExecution.targetMode | singleEnemy |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| castTimeSeconds | 0 |
| durationScaling.type | table |
| durationScaling.values[0] | 0 |
| durationScaling.values[1] | 0 |
| durationScaling.values[2] | 0 |
| durationScaling.values[3] | 0 |
| durationScaling.values[4] | 0 |
| durationScaling.values[5] | 0 |
| durationScaling.values[6] | 0 |
| durationScaling.values[7] | 0 |
| durationScaling.values[8] | 0 |
| durationScaling.values[9] | 0 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.values[0] | 19 |
| resourceCosts[0].scaling.values[1] | 24 |
| resourceCosts[0].scaling.values[2] | 30 |
| resourceCosts[0].scaling.values[3] | 35 |
| resourceCosts[0].scaling.values[4] | 40 |
| resourceCosts[0].scaling.values[5] | 46 |
| resourceCosts[0].scaling.values[6] | 51 |
| resourceCosts[0].scaling.values[7] | 56 |
| resourceCosts[0].scaling.values[8] | 62 |
| resourceCosts[0].scaling.values[9] | 67 |
| resourceCosts[0].scaling.base | 19 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 47 |
| statScaling.matk.perLevel | 13,444 |
| mana (Aktivierungskosten, kein Bonus) | 19 |
| manaPricing.category | combo |
| manaPricing.factor | 0,4 |
| manaPricing.basis | sharedComboBudget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | constant |
| levelProgression.rules[0].rule.value | 0 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | periodicSteps |
| levelProgression.rules[1].rule.rule.base | 19 |
| levelProgression.rules[1].rule.rule.steps[0] | 5 |
| levelProgression.rules[1].rule.rule.steps[1] | 6 |
| levelProgression.rules[1].rule.rule.steps[2] | 5 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 47 |
| levelProgression.rules[2].rule.perLevel | 13,444 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 209: Verloren in der Dunkelheit

Permanenter passiver Skill mit zehn Stufen. Erhöht den direkten magischen Skillschaden von Seelenfessel, Seelenqual, Seelenernte und Seelenplage um 12 je gelerntem Skilllevel, auf Maximalstufe um 120 je passendem Treffer. Jede einzelne Seelenqual-Anwendung ist ein eigener Angriff mit einem direkten Treffer. Keiner dieser vier Skills verursacht derzeit periodischen Schaden; es gibt hier keine DoT-Ticks. Keine Wirkung auf andere Skills, normale Auto-Attacks oder Begleiter. Kein prozentualer Bonus, keine Aktivierungskosten, Castzeit oder begrenzte Dauer. Der Name ist vorläufig; eine bessere Bezeichnung wird später festgelegt.

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
| learningRequirements.minimumCharacterLevel | 60 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Lost in the Darkness |
| category | passive |
| charClass[0] | Bloodmage |
| charClass[1] | Ritualist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanenter passiver Skill mit zehn Stufen. Erhöht den direkten magischen Skillschaden von Seelenfessel, Seelenqual, Seelenernte und Seelenplage um 12 je gelerntem Skilllevel, auf Maximalstufe um 120 je passendem Treffer. Jede einzelne Seelenqual-Anwendung ist ein eigener Angriff mit einem direkten Treffer. Keiner dieser vier Skills verursacht derzeit periodischen Schaden; es gibt hier keine DoT-Ticks. Keine Wirkung auf andere Skills, normale Auto-Attacks oder Begleiter. Kein prozentualer Bonus, keine Aktivierungskosten, Castzeit oder begrenzte Dauer. Der Name ist vorläufig; eine bessere Bezeichnung wird später festgelegt. |
| description_eng | Permanent passive with ten levels. Adds 12 flat direct magical skill damage per learned level to Soul Shackle, Soul Torment, Soul Harvest and Soul Plague, up to 120 per eligible hit. Each Soul Torment application is a separate attack with one direct hit. None of these four skills currently deals periodic damage, so there are no damage-over-time ticks here. No effect on other skills, normal basic attacks or companions. Not a percentage bonus; no activation costs, cast time or limited duration. Name remains provisional. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 209 |
| skillName_de | Verloren in der Dunkelheit |
| skillpoints | 1 |
| effects[0].key | darkness-soul-damage |
| effects[0].type | damageBonus |
| effects[0].target | self |
| effects[0].appliesTo | allSkills |
| effects[0].damageSchool | soul |
| effects[0].value | 12 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 12 |
| effects[0].valueScaling.perLevel | 12 |
| effects[0].durationSeconds | 0 |
| effects[0].eligibleSkillNumbers[0] | 103 |
| effects[0].eligibleSkillNumbers[1] | 104 |
| effects[0].eligibleSkillNumbers[2] | 105 |
| effects[0].eligibleSkillNumbers[3] | 180 |
| effects[0].appliesToBasicAttacks | false |
| effects[0].appliesToPeriodicDamage | false |
| effects[0].bonusApplicationScope | eachSkillHit |
| effectsVersion | 1 |
| resourceCosts | [] |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 12 |
| levelProgression.rules[0].rule.perLevel | 12 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 180: Seelenplage

Unabhängiger einmaliger magischer Flächenangriff in einem rechteckigen Bereich vor dem Anwender, trifft bis zu sechs Gegner. Kein anhaltendes Feld, keine Keim-Markierungen und keine Voraussetzung durch Seelenfessel, Seelenqual oder Seelenernte. Verbraucht 3 Seelenfragmente auf Stufe 1 und +3 je weiterer Stufe, auf Stufe 10 30; kostet kein Mana. Der benötigte Seelenvorrat muss vorhanden und der Cooldown bereit sein. Magischer Grundschaden je getroffenem Gegner 171, +58 je weiterer Stufe, auf Stufe 10 693. Cooldown 85 Sekunden, -1 je weiterer Stufe, auf Stufe 10 76 Sekunden. Castzeit 0,3 Sekunden, vorläufige Animation 4 Sekunden auf allen Stufen. Genau ein Treffer je Gegner, kein Schaden über Zeit. Länge und Breite des Rechtecks, genauer Trefferzeitpunkt und Blockieren anderer Aktionen während der Animation bleiben offen.

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
| skillName_eng | Soul Plague |
| category | active |
| cd | 85 |
| charClass[0] | Bloodmage |
| charClass[1] | Ritualist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Unabhängiger einmaliger magischer Flächenangriff in einem rechteckigen Bereich vor dem Anwender, trifft bis zu sechs Gegner. Kein anhaltendes Feld, keine Keim-Markierungen und keine Voraussetzung durch Seelenfessel, Seelenqual oder Seelenernte. Verbraucht 3 Seelenfragmente auf Stufe 1 und +3 je weiterer Stufe, auf Stufe 10 30; kostet kein Mana. Der benötigte Seelenvorrat muss vorhanden und der Cooldown bereit sein. Magischer Grundschaden je getroffenem Gegner 171, +58 je weiterer Stufe, auf Stufe 10 693. Cooldown 85 Sekunden, -1 je weiterer Stufe, auf Stufe 10 76 Sekunden. Castzeit 0,3 Sekunden, vorläufige Animation 4 Sekunden auf allen Stufen. Genau ein Treffer je Gegner, kein Schaden über Zeit. Länge und Breite des Rechtecks, genauer Trefferzeitpunkt und Blockieren anderer Aktionen während der Animation bleiben offen. |
| description_eng | Independent one-time magical area attack in a rectangle in front of the caster, hitting up to six enemies. No persistent field, seed marks or Soul Shackle/Torment/Harvest requirement. Consumes 3 soul fragments at level 1 plus 3 per additional level, reaching 30 at level 10; no Mana cost. Requires sufficient fragments and ready cooldown. Magical base damage per hit enemy 171 plus 58 per additional level, reaching 693. Cooldown 85 minus 1 per additional level, reaching 76 seconds. Cast time 0.3 seconds, provisional animation 4 seconds at every level. Exactly one hit per enemy, no damage over time. Rectangle length/width, hit timing and action blocking during animation remain pending. |
| dmgType (Altformat) | spell |
| matk | 171 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 180 |
| skillName_de | Seelenplage |
| skillpoints | 1 |
| animationDurationSeconds | 4 |
| animationTimingStatus | provisional |
| attackArea.shape | rectangle |
| attackArea.center | caster |
| attackArea.maxTargets | 6 |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | atImpact |
| attackArea.geometryStatus | pending |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| castTimeSeconds | 0,3 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 85 |
| cooldownScaling.perLevel | -1 |
| durationScaling.type | table |
| durationScaling.values[0] | 0 |
| durationScaling.values[1] | 0 |
| durationScaling.values[2] | 0 |
| durationScaling.values[3] | 0 |
| durationScaling.values[4] | 0 |
| durationScaling.values[5] | 0 |
| durationScaling.values[6] | 0 |
| durationScaling.values[7] | 0 |
| durationScaling.values[8] | 0 |
| durationScaling.values[9] | 0 |
| hasLingeringDamage | false |
| resourceCosts[0].resource | soulFragments |
| resourceCosts[0].reference | currentSoulFragments |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 3 |
| resourceCosts[0].scaling.perLevel | 3 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 171 |
| statScaling.matk.perLevel | 58 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 85 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | constant |
| levelProgression.rules[1].rule.value | 0 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 3 |
| levelProgression.rules[2].rule.rule.perLevel | 3 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | matk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 171 |
| levelProgression.rules[3].rule.perLevel | 58 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

## Gemeinsame Blöcke

[Kreaturenskills](../shared-creature-skills.md) und [Trainingsskills](../shared-training-skills.md) werden einmal gemeinsam geprüft. Die normale Lerngrenze für Bindung und Zucht ist bereits 1. Die zweite Kreaturen-Spezialklasse und ihre Lerngrenzen sind noch zu bestätigen.

## Reihenfolge

Diese Klassenrunde beginnt jetzt. Bereits bestätigte gemeinsame Skills sind mit aktuellen Werten enthalten. Klassenspezifische Wirkungen, Kosten und Skalierungen werden noch geprüft.

<!-- full-skill-point-costs:start -->
## Skillpunktkosten je Stufe

Aktuell vollständig gespeichert: **8327 SP** für alle 32 Skills einschließlich günstiger Taming-Sonderkosten. Weitere Charakterlevel für einzelne Ausbaustufen sind davon getrennt und noch zu verteilen. Alte Pauschalsummen in historischen Prüfabschnitten gelten nicht für diese Preise.

| Nr | Skill | SP je Skillstufe | Gesamt-SP |
| ---: | --- | --- | ---: |
| 2 | Überleben | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 44 | Erweiterung des Geistes | 12 / 16 / 20 / 24 / 28 / 32 / 36 / 40 / 44 / 48 | 300 |
| 48 | Feuer der Verdammten | 30 / 45 / 60 / 75 / 90 | 300 |
| 49 | Feuerball | 12 / 12 / 13 / 13 / 13 / 14 / 14 / 14 / 15 / 15 / 15 / 15 / 16 / 16 / 16 / 17 / 17 / 17 / 18 / 18 | 300 |
| 72 | Lebenssauger | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 83 | Opfergabe | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 99 | Schrei der Unterwelt | 20 / 32 / 44 / 56 / 68 / 80 | 300 |
| 100 | Schwäche des Fleisches | 5 / 6 / 7 / 8 / 9 / 10 / 11 / 12 / 13 / 14 / 16 / 17 / 18 / 19 / 20 / 21 / 22 / 23 / 24 / 25 | 300 |
| 103 | Seelenfessel | 5 / 6 / 7 / 8 / 9 / 10 / 11 / 12 / 13 / 14 / 16 / 17 / 18 / 19 / 20 / 21 / 22 / 23 / 24 / 25 | 300 |
| 104 | Seelenqual | 13 / 19 / 25 / 31 / 37 / 43 / 49 / 55 / 61 / 67 | 400 |
| 105 | Seelenernte | 40 / 60 / 80 / 100 / 120 | 400 |
| 110 | Sturm des Feuers | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 120 | Reaper | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 133 | Tamen | 10 | 10 |
| 134 | Bindung | 6 | 6 |
| 135 | Kontrolle | 4 | 4 |
| 136 | Beschwören | 1 | 1 |
| 137 | Zurückrufen | 1 | 1 |
| 138 | Zucht | 5 | 5 |
| 139 | Ausdauertraining | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 144 | Rüstungstraining | 1 / 7 / 14 / 20 / 27 / 33 / 40 / 46 / 53 / 59 | 300 |
| 178 | Geist des Feuers | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 180 | Seelenplage | 13 / 19 / 25 / 31 / 37 / 43 / 49 / 55 / 61 / 67 | 400 |
| 181 | Arkane Aufladung | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 201 | Waffentraining | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 209 | Verloren in der Dunkelheit | 13 / 19 / 25 / 31 / 37 / 43 / 49 / 55 / 61 / 67 | 400 |
| 214 | Ausbrennen | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 232 | Dunkler Impuls | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 235 | Meteoritenschauer | 80 / 100 / 120 | 300 |
| 236 | Teufelspakt | 80 / 100 / 120 | 300 |
| 237 | Morrak´s Meister | 300 | 300 |
| 241 | Zahl der Opfer | 400 | 400 |
<!-- full-skill-point-costs:end -->

### Bestätigte Baumverbindungen aus dem zweiten UI-Review

Die Vorgänger stehen zentral serverseitig in `services/skillTree.js`. Es gilt Rang 3, begrenzt auf das Klassenmaximum, zusätzlich zu bestehenden Charakterleveln und Questfreigaben. Bestehende Starter-Ausnahmen bleiben erhalten.

- Lebenssauger ← Ausdauertraining.
- Schwäche des Fleisches ← Waffentraining, nach links.
- Reaper und Geist des Feuers ← Erweiterung des Geistes.
- Dunkler Impuls ← Feuerball (der vorhandene erste Angriff #49; im Gespräch Feuerpfeil genannt).
- Sturm des Feuers und Ausbrennen ← Geist des Feuers.
- Feuer der Verdammten benötigt Reaper UND Sturm des Feuers.
- Opfergabe ← Feuer der Verdammten; Schrei der Unterwelt ← Opfergabe.
- Arkane Aufladung benötigt nach der Korrektur vom 26.10.2026 ausschließlich Erweiterung des Geistes.
- Teufelspakt und Zahl der Opfer ← Reaper.
- Seelenfessel ← Feuer der Verdammten; Verloren in der Dunkelheit ← Seelenfessel; Seelenplage ← Verloren in der Dunkelheit.
- Meteoritenschauer ← Dunkler Impuls.
- Seelenqual ← Zahl der Opfer; Seelenernte ← Seelenqual.

Alle 32 Skills sind damit an den Rassenskill angebunden. Lernlevel, Wirkungen und Kosten wurden nicht verändert. Seelenqual und Seelenernte bleiben auf demselben Charakterlevel und stehen deshalb nebeneinander.

### Visuelle Nachkorrektur nach dem zweiten Review

Lebenssauger (#72) bleibt auf X1550 unter seiner senkrechten Zuleitung; Ausdauertraining läuft seitlich auf diese Bahn und endet gerade von oben im Icon. Beim erneuten Review am 26.10.2026 wurde die Ausdauer-Voraussetzung von Arkane Aufladung (#181) ausdrücklich entfernt. Erweiterung des Geistes führt nun mit einem einzigen rechtwinkligen Knick direkt zur oberen Iconkante der Arkanen Aufladung; die äußeren Umwege über X1320/X1780 entfallen. Die Reaper-/Feuer-der-Verdammten-Verbindungen bleiben wie visuell bestätigt. Lernlevel, Kosten und Skillwirkungen unverändert. Kein Neustart während des laufenden Reviews.

# Kräuterkundler / Witcher: Werte und Skillprüfung

<!-- skill-learning-overview:start -->
## Skills nach Lernlevel

Die erste Spalte zeigt das aktuell gespeicherte Lernlevel dieser Klasse. Sortiert nach Lernlevel; noch offene Vorschläge stehen am vorgesehenen Platz. „Offen“ bedeutet: noch kein verbindliches Lernlevel gespeichert. Bereits übernommene Vorschläge werden nicht doppelt angezeigt. Weitere Skillstufen verteilen wir getrennt; „Skillstufen“ bezeichnet die lernbare Ausbaustufe, nicht das Charakterlevel.

Die SP-Spalte zeigt die Kosten der ersten Skillstufe. Die vollständigen Kosten stehen in der Tabelle „Skillpunktkosten je Stufe“. Regulär kostet der vollständige Ausbau 300 SP, ab erstem Lernlevel 55 insgesamt 400 SP; Taming-Skills behalten günstige Sonderkosten. Das alte Feld `skillpoints` und frühere Pauschalsummen sind historisch.

| Ab Charakterlevel | Skill | Noch offene Planung | Weitere Skillstufen ab Charakterlevel | Nr | Lernbare Skillstufen | SP erste Stufe |
| ---: | --- | ---: | --- | ---: | ---: | ---: |
| 1 | Adaption | — | — | 5 | 20 | 1 |
| 2 | Ausdauertraining | — | — | 139 | 20 | 1 |
| 2 | Waffentraining | — | — | 201 | 20 | 1 |
| 3 | Bindung | — | — | 134 | 1 | 6 |
| 3 | Kontrolle | — | — | 135 | 1 | 4 |
| 3 | Zucht | — | — | 138 | 1 | 5 |
| 4 | Rüstungstraining | — | — | 144 | 10 | 1 |
| 5 | Beschwören | — | — | 136 | 1 | 1 |
| 5 | Tamen | — | — | 133 | 1 | 10 |
| 5 | Zurückrufen | — | — | 137 | 1 | 1 |
| 6 | Wasserfesseln | — | — | 16 | 10 | 12 |
| 9 | Erweiterung des Geistes | — | — | 44 | 10 | 12 |
| 10 | Elektrisches Feld | — | — | 31 | 10 | 10 |
| 12 | Eislanze | — | — | 29 | 10 | 10 |
| 15 | Entgiftung | — | — | 167 | 10 | 10 |
| 17 | Natürlicher Schutz | — | — | 164 | 10 | 10 |
| 20 | Ewiges Eis | — | — | 46 | 15 | 6 |
| 22 | Aura Unterdrückung | — | — | 165 | 10 | 10 |
| 22 | Windschlitzer | — | — | 221 | 10 | 10 |
| 25 | Lebensessenz | — | — | 71 | 5 | 30 |
| 27 | Kugelblitz | — | — | 69 | 10 | 10 |
| 30 | Abschöpfen | — | — | 4 | 10 | 10 |
| 33 | Alles im Fluss | — | — | 166 | 10 | 10 |
| 37 | Geladener Nebel | — | — | 56 | 15 | 6 |
| 42 | Lähmung | — | — | 84 | 10 | 10 |
| 42 | Naturgewalt | — | — | 81 | 1 | 300 |
| 42 | Wiederaufladung | — | — | 123 | 3 | 80 |
| 47 | Katalysator Unrein | — | — | 205 | 5 | 30 |
| 55 | Gezielter Blitz | — | — | 57 | 10 | 13 |
| 60 | Elementarenergie | — | — | 32 | 10 | 13 |
| 60 | Innere Unruhe | — | — | 169 | 10 | 13 |
| 65 | Tobender Sturm | — | — | 112 | 10 | 13 |

[Alte Lernlevel als Vorlage](../legacy-skill-learning-levels.md) · [Alle Klassen](../skill-learning-index.md)
<!-- skill-learning-overview:end -->

**32 Skills. Gesamte SP-Kosten noch offen.** Wasserfesseln hat zehn Stufen: 47 magischen Grundschaden, +21 je weiterer Stufe bis 236. Mana beträgt gerundet 25 % des Skill-Grundschadens: 12 bis 59; Charakterangriff zählt nicht zur Kostenbasis. Fesseldauer bleibt bei maximal drei Sekunden, Cooldown bei minimal 28,5 Sekunden. Naturgewalt hat eine Stufe mit halbierten bisherigen Maximalboni: +7 Intelligenz, +2,5 Willenskraft und +2,5 Vitalität. Ewiges Eis bleibt unverändert auf 15 Stufen. Zusammen entfallen zwölf Skillpunkte.

Einteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.

**32 unterschiedliche zugeordnete Skills: 19 aktive und 13 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie bei den bisher geprüften Klassen. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.

| Art | Anzahl | Skills |
| --- | ---: | --- |
| Übrige Passive einschließlich Procs | 10 | Abschöpfen, Adaption, Elementarenergie, Erweiterung des Geistes, Naturgewalt, Lähmung, Wiederaufladung, Ausdauertraining, Rüstungstraining, Waffentraining |
| Aktive Skills (Angriff/Heilung/Unterstützung) | 11 | Wasserfesseln, Eislanze, Elektrisches Feld, Ewiges Eis, Geladener Nebel, Gezielter Blitz, Kugelblitz, Lebensessenz, Tobender Sturm, Katalysator Unrein, Windschlitzer |
| Kreaturen aktiv | 3 | Tamen, Beschwören, Zurückrufen |
| Kreaturen passiv | 3 | Bindung, Kontrolle, Zucht |
| Eigenbuffs | 4 | Natürlicher Schutz, Aura Unterdrückung, Entgiftung, Innere Unruhe |
| Gruppenbuffs | 1 | Alles im Fluss |

## Gemeinsame Aura Unterdrückung

Aura Unterdrückung (Nr. 165) ist ein aktiver Selbstbuff für Kräuterkundler und Luminet. Beide Klassen lernen ihn erstmals ab **Charakterlevel 22**. Je Skillstufe 0,5 % weniger neu erzeugte Schadens-Aggro und +1,2 Intelligenz; maximal 5 % und +12 Intelligenz auf Stufe 10. Dauer 180 Sekunden, Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden, Aktivierungskosten 50 bis 167 Mana. Charakterlevel-Voraussetzungen für weitere Skillstufen sind noch offen.

## Basis und Ausrüstung

R1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.

### Basis ohne Ausrüstung

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 176 | 446 | 746 | 1.046 | 1.346 | 1.646 | 1.946 |
| Mana | 163 | 433 | 733 | 1.033 | 1.333 | 1.633 | 1.933 |
| P-Angriff | 6 | 22,2 | 40,2 | 58,2 | 76,2 | 94,2 | 112,2 |
| M-Angriff | 12 | 28,2 | 46,2 | 64,2 | 82,2 | 100,2 | 118,2 |
| P-Defense | 6 | 24 | 44 | 64 | 84 | 104 | 124 |
| M-Defense | 6 | 24 | 44 | 64 | 84 | 104 | 124 |

### Mit Rüstung und Magiewaffe

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 526 | 796 | 1.271 | 1.746 | 2.246 | 2.896 | 3.746 |
| Mana | 548 | 818 | 1.443 | 2.128 | 2.813 | 3.583 | 4.293 |
| P-Angriff | 6 | 22,2 | 40,2 | 58,2 | 76,2 | 94,2 | 112,2 |
| M-Angriff | 37 | 53,2 | 95,6 | 152 | 232,4 | 356,2 | 537,6 |
| P-Defense | 67 | 85 | 151 | 238 | 346 | 482 | 642 |
| M-Defense | 63 | 81 | 144 | 229 | 352 | 478 | 598 |

Die vorhandene Wand-Tabelle dient als Vergleich für die Magiewaffe. Int/Faith/Vic wird einmal als alternativer Angriffsbonus gerechnet. Waffen-Speed ist noch nicht eingerechnet. Equipment-Vorschläge sind nicht übernommen. Grundregeneration: 25 Mana und 12 HP pro Tick. Das Intervall wird später in Unreal geprüft. Bestehende gemeinsame Skillwerte werden übernommen; fehlende Werte werden nicht geschätzt.

## Skillübersicht

| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | Adaption | Passive | 20 | HP-Regeneration +0,5<br>Vita +0,5<br>Wisdom +0,5 | Vita: 0,5 bis 10<br>Wisdom: 0,5 bis 10<br>manaRegen: 0,5 bis 10<br>HP-Regeneration: 0,5 bis 10 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 139 | Ausdauertraining | Passive | 20 | Vita +1<br>Wisdom +1 | Vita: 1 bis 20<br>Wisdom: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 201 | Waffentraining | Passive | 20 | P-Angriff +1<br>M-Angriff +1 | P-Angriff: 1 bis 20<br>M-Angriff: 1 bis 20 | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 134 | Bindung | Passive | 3 / Kräuterkundler 1 | Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.<br>statModifier, Ziel companion, str, 10<br>statModifier, Ziel companion, vita, 10<br>statModifier, Ziel companion, int, 10<br>statModifier, Ziel companion, wis, 10 | statModifier/str: 10 bis 20<br>statModifier/vita: 10 bis 20<br>statModifier/int: 10 bis 20<br>statModifier/wis: 10 bis 20 | Keine | Entfällt | Entfällt | str: 0 s<br>vita: 0 s<br>int: 0 s<br>wis: 0 s | Gemeinsame Definition |
| 135 | Kontrolle | Passive | 2 / Kräuterkundler 1 | Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen. | Nicht vollständig gespeichert | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition; Levelskalierung prüfen |
| 138 | Zucht | Passive | 3 / Kräuterkundler 1 | Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.<br>experienceBonus, Ziel companion, 0,1 | experienceBonus/: 10 bis 30 % | Keine | Entfällt | Entfällt | experienceBonus: 0 s | Gemeinsame Definition |
| 144 | Rüstungstraining | Passive | 10 | P-Defense +3<br>M-Defense +6 | P-Defense: 3 bis 30<br>M-Defense: 6 bis 60 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 136 | Beschwören | Skill | 1 | Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 1 | Nicht gespeichert | Gemeinsame Definition |
| 133 | Tamen | Skill | 3 / Kräuterkundler 1 | Versucht, eine Kreatur zu zähmen. Erfordert eine zur Kreaturenvariante passende Zähmungskarte. Die Grundchance wird von der jeweiligen Kreaturenvariante vorgegeben. Tamen multipliziert diese Chance auf Stufe 1 mit 1,0, auf Stufe 2 mit 1,1 und auf Stufe 3 mit 1,2; keine zusätzlichen Prozentpunkte und keine eigene feste Grunderfolgschance. Bei 1 Prozent Grundchance ergeben sich 1 / 1,1 / 1,2 Prozent Erfolgschance je Versuch. Die Formel steigt bei später autorisierten zusätzlichen effektiven Skillstufen um 0,1 je Stufe weiter. Die Definition hat weiterhin drei lernbare Stufen: normale Klassen maximal Stufe 1, Abenteurer maximal Stufe 3; eine zweite Spezialklasse ist noch nicht festgelegt. Mana 100 / 125 / 150, Castzeit 3 / 2,5 / 2 Sekunden und Cooldown 60 / 50 / 40 Sekunden. Kein Schaden und keine anschließende Effektdauer. Konkrete Kreaturen-Grundchancen, Kartenzuordnungen, Itemverbrauch, Zieldistanz und Abbruchbedingungen sind noch festzulegen. | Chancenfaktor ×1,0 / ×1,1 / ×1,2; normale Lerngrenze 1 | Mana-Kosten: 100 bis 150 | 60 bis 40 | 3 bis 2 | 0 (keine anschließende Wirkung) | Gemeinsame Definition; Levelskalierung prüfen |
| 137 | Zurückrufen | Skill | 1 | Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 0 | Nicht gespeichert | Gemeinsame Definition |
| 16 | Wasserfesseln | Skill / magisch | 10 | M-Angriff +47 | M-Angriff: 47 bis 236 | Mana-Kosten: 12 bis 59 | 38 bis 28,5 | 0.2 | 1 bis 3 | Gemeinsame Definition |
| 44 | Erweiterung des Geistes | Passive | 10 | Wisdom +1<br>Intelligenz +1<br>Dexterity +1 | Intelligenz: 1 bis 10<br>Wisdom: 1 bis 10<br>Dexterity: 1 bis 10 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 31 | Elektrisches Feld | Skill / magisch | 10 | M-Angriff +137<br>periodicDamage, Ziel enemiesInArea, 10<br>statModifier, Ziel enemiesInArea, movementSpeed, -0,05<br>Fläche: 2 m Radius um Spieler | M-Angriff: 137 bis 542<br>periodicDamage/: 10 bis 37 | Mana-Kosten: 63 bis 276 | 47 bis 38 | 0.3 | periodicDamage: 4 bis 8 s<br>movementSpeed: 4 bis 8 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 29 | Eislanze | Skill / magisch | 10 | M-Angriff +187 | M-Angriff: 187 bis 628 | Mana-Kosten: 47 bis 155 | 50 bis 41 | 0.6 | 5 | Gemeinsame Definition |
| 167 | Entgiftung | Selbstbuff | 10 | Eigenbuff gegen neue Vergiftungen. Wenn eine Vergiftung angewendet werden würde, besteht auf Stufe 1 eine Chance von 30 Prozent, sie zu verhindern. Je weiterer Stufe steigt diese Chance um 5 Prozentpunkte auf 75 Prozent auf Stufe 10. Keine vollständige Giftimmunität und keine Entfernung bereits laufender Vergiftungen festgelegt. Buffdauer 10 Sekunden auf Stufe 1, plus 5 je weiterer Stufe, bis zu 55 Sekunden. Castzeit fest 0,1 Sekunden., Cooldown weiterhin 120 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.<br>statusResistance, Ziel self, 0,3 | statusResistance/: 30 bis 75 % | Mana-Kosten: 50 bis 167 | 120 | 0.1 | statusResistance: 10 bis 55 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 164 | Natürlicher Schutz | Selbstbuff | 10 | Wisdom +3<br>P-Defense +6<br>M-Defense +6 | P-Defense: 6 bis 42<br>M-Defense: 6 bis 42<br>Wisdom: 3 bis 12 | Mana-Kosten: 50 bis 167 | 60 | 0.1 | 600 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 46 | Ewiges Eis | Skill / magisch | 15 | M-Angriff +137<br>control, Ziel enemy, 1<br>damageReduction, Ziel enemy, 0,2<br>Ein einzelnes Ziel | M-Angriff: 137 bis 739 | Mana-Kosten: 34 bis 188 | 54 bis 39 | 0.6 | freeze: 0,5 bis 2,5 s<br>damageReduction: 0,5 bis 2,5 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 165 | Aura Unterdrückung | Selbstbuff | 10 | Intelligenz +1,2<br>threatMultiplier, Ziel self, 0,995 | Intelligenz: 1,2 bis 12<br>threatMultiplier/: 99,5 bis 95 % | Mana-Kosten: 50 bis 167 | 60 | 0.1 | threatMultiplier: 180 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 221 | Windschlitzer | Skill / magisch | 10 / Kräuterkundler 10 | M-Angriff +211 | M-Angriff: 211 bis 850 | Mana-Kosten: 53 bis 215 | 54 bis 45 | 0.2 | Nicht gespeichert | Gemeinsame Definition |
| 71 | Lebensessenz | Skill | 5 | Erwecke die Lebensessenz eines Verbündeten oder Begleiters und heile ihn auf Skilllevel 1 um 3 % seines maximalen Lebens. Pro weiterem Skilllevel steigt die Heilung um 0,5 Prozentpunkte, bis zu 5 % auf Skilllevel 5. Der Cooldown beträgt anfangs 55 Sekunden und sinkt pro weiterem Skilllevel um 3 Sekunden, bis auf 43 Sekunden. Mana-Kosten 113 auf Stufe 1, plus 55 je weiterer Stufe, bis zu 333 auf Stufe 5. Castzeit 0,3 Sekunden. Dies ist eine Heilung, keine Wiederbelebung.<br>heal, Ziel allyOrCompanion, 0,03 | heal/: 3 bis 5 % | Mana-Kosten: 113 bis 333 | 55 bis 43 | 0.3 | heal: 0 s | Gemeinsame Definition |
| 69 | Kugelblitz | Skill / magisch | 10 | M-Angriff +398<br>Animation 1 s (vorläufig) | M-Angriff: 398 bis 1.685 | Mana-Kosten: 100 bis 424 | 52 bis 43 | 0.2 | Wirkung einmalig; Animation 1 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 4 | Abschöpfen | Passive | 10 | Wisdom +0,5<br>Intelligenz +2,5 | Intelligenz: 2,5 bis 25<br>Wisdom: 0,5 bis 5 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 166 | Alles im Fluss | Buff | 10 | Wisdom +1<br>Intelligenz +1 | Intelligenz: 1 bis 10<br>Wisdom: 1 bis 10 | Mana-Kosten: 53 bis 305 | 60 | 0.3 | 1800 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 56 | Geladener Nebel | Skill / magisch | 15 | M-Angriff +177<br>statModifier, Ziel enemiesInArea, accuracy, -10<br>damageTakenBonus, Ziel enemiesInArea, 0,02<br>Fläche: 4 m Radius um Spieler | M-Angriff: 177 bis 1.059<br>statModifier/accuracy: -10 bis -25 | Mana-Kosten: 44 bis 268 | 62 bis 37 | 0.4 | accuracy: 4 bis 18 s<br>damageTakenBonus: 4 bis 18 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 84 | Lähmung | Passive | 10 | Passiver automatischer Effekt. Jeder eigene elektrische Angriff prüft bei bereitem internen Cooldown eine Chance von 10 Prozent, den betroffenen Gegner für 3 Sekunden zu paralysieren. Die Prüfung gilt je Angriffsaktion, nicht mehrfach allein aufgrund mehrerer Treffer derselben Anwendung. Begleiterangriffe zählen nicht. Der bisher gespeicherte interne Cooldown bleibt bei 30 Sekunden. Keine Aktivierungskosten. Levelskalierung, Zielauswahl bei Flächenangriffen und Behandlung periodischer Elektroticks sind noch offen.<br>control, Ziel enemy, 1 | Nicht vollständig gespeichert | Keine | 30 | Entfällt | paralysis: 3 s | Levelskalierung prüfen |
| 81 | Naturgewalt | Passive | 1 | Vita +5<br>Intelligenz +5 | Intelligenz: 5 bis 5<br>Vita: 5 bis 5 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 123 | Wiederaufladung | Passive | 3 | Reduziert als passiver Bonus den Cooldown deiner Skills auf Skilllevel 1 um 5 Sekunden, auf Skilllevel 2 um 10 Sekunden und auf Skilllevel 3 um 15 Sekunden.<br>cooldownReduction, Ziel self, 5 | cooldownReduction/: 5 bis 15 | Keine aktive Nutzung | Entfällt | Entfällt | cooldownReduction: 0 s | Gemeinsame Definition |
| 205 | Katalysator Unrein | Skill | 5 | Erschafft ein Verstärkungsfeld für Gruppenmitglieder der Völker Menschen und Umbra. Im Feld steigen ihr physischer Angriff um 25 und ihr magischer Angriff um 50 pro Skilllevel. Auf Stufe 5 sind dies +125 P-Angriff und +250 M-Angriff. Die Felddauer beträgt 24 Sekunden auf Stufe 1 und steigt um 2 Sekunden je weiterer Stufe auf 32 Sekunden. Der Cooldown beginnt bei 180 Sekunden und sinkt um 2 Sekunden je weiterer Stufe auf 172 Sekunden. In einem bereits von einem Katalysator belegten Gebiet kann kein weiterer Katalysator platziert werden. Castzeit 1,8 Sekunden. Mana-Kosten unverändert 198 auf Stufe 1, plus 87 je weiterer Stufe bis 546 auf Stufe 5.<br>statModifier, Ziel alliesInArea, patk, 25<br>statModifier, Ziel alliesInArea, matk, 50 | statModifier/patk: 25 bis 125<br>statModifier/matk: 50 bis 250 | Mana-Kosten: 198 bis 546 | 180 bis 172 | 1.8 | patk: 24 bis 32 s<br>matk: 24 bis 32 s | Gemeinsame Definition |
| 57 | Gezielter Blitz | Skill / magisch | 10 | M-Angriff +293<br>Animation 1 s (vorläufig) | M-Angriff: 293 bis 1.238 | Mana-Kosten: 73 bis 307 | 42 bis 33 | 0.2 | Wirkung einmalig; Animation 1 s | Gemeinsame Definition |
| 32 | Elementarenergie | Passive | 10 | Permanenter passiver Skill mit automatischem Kampfeffekt. Jeder dritte eigene Angriff gegen einen Gegner prüft die Auslösechance, sofern der interne Cooldown bereit ist. Auto-Attacks und Angriffsskills zählen; Mehrfachtreffer derselben Anwendung zählen als eine Angriffsaktion. Begleiterangriffe zählen nicht. Keine zusätzliche Mindestkampfdauer. Die Chance steigt gleichmäßig von 15 Prozent auf Stufe 1 auf 20 Prozent auf Stufe 10. Bei Auslösung erhältst du für 30 Sekunden 2 Intelligenz auf Stufe 1, plus 1 je weiterer Stufe, bis zu 11 auf Stufe 10. Die magische Verteidigung des betroffenen Gegners sinkt dabei unverändert für 30 Sekunden um 10 Prozent. Der interne Cooldown sinkt gleichmäßig von 120 auf 115 Sekunden. Keine manuelle Aktivierung. Detailregeln des Angriffszählers und Zielauswahl bei Flächenangriffen sind noch offen.<br>statModifier, Ziel self, int, 2<br>statModifier, Ziel enemy, mdef, -0,1 | statModifier/int: 2 bis 11 | Offen | 120 bis 115 | Entfällt | int: 30 s<br>mdef: 30 s | Gemeinsame Definition; Kosten offen |
| 169 | Innere Unruhe | Selbstbuff | 10 | Eigenbuff mit wechselndem magischem Schadensbonus. Für jede eigene magische Skillanwendung wird einmal ein zusätzlicher flacher Skillschadenswert neu ausgewürfelt. Dieser eine Wurf wird auf jeden zugehörigen magischen Treffer und jeden magischen Schadenstick dieser Anwendung angewendet, auch bei mehrteiligen Skills wie Tobender Sturm. Normale Auto-Attacks und Begleiterangriffe sind ausgeschlossen. Auf Stufe 1 liegt der Bonus zwischen 13 und 31. Die Untergrenze steigt je weiterer Stufe um 5, die Obergrenze um 10, bis zu 58 bis 121 auf Stufe 10. Der Buff gibt keine Stärke, Intelligenz oder Angriffsgeschwindigkeit mehr. Dauer steigt gleichmäßig von 30 auf 35 Sekunden. Cooldown 70 Sekunden, minus 1 je weiterer Stufe, bis zu 61 Sekunden. Castzeit fest 0,1 Sekunden. Die genaue Zufallsverteilung innerhalb des Wertebereichs ist noch offen; Mehrfachtreffer und Schadensticks sind ausdrücklich eingeschlossen. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.<br>randomDamageBonus, Ziel self, 13 | Nicht vollständig gespeichert | Mana-Kosten: 50 bis 167 | 70 bis 61 | 0.1 | randomDamageBonus: 30 bis 35 s | Levelskalierung prüfen |
| 112 | Tobender Sturm | Skill / magisch | 10 | M-Angriff +266<br>periodicDamage, Ziel enemiesInArea, 266<br>Fläche: 8 m Radius um Spieler<br>Maximal 5 Gegner, jeweils ein Treffer | M-Angriff: 266 bis 545<br>periodicDamage/: 266 bis 545 | Mana-Kosten: 213 bis 1.962 | 100 bis 91 | 0.8 | periodicDamage: 4 bis 17,5 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |

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

### 16: Wasserfesseln

Erschafft Wasserfesseln, die ein Ziel festhalten und einmalig magischen Schaden verursachen. Zehn Skillstufen. Magischer Skill-Grundschaden 47 auf Stufe 1, +21 je weiterer Stufe, maximal 236 auf Stufe 10; dazu einmal aktueller M-Angriff. Mana-Kosten nach der 25%-Regel ausschließlich aus dem Skill-Grundschaden, kaufmännisch auf ganze Punkte gerundet: 12/17/22/28/33/38/43/49/54/59. Charakterangriff zählt nicht zur Kostenbasis. Fesseldauer je Skillstufe: 1/1/1,5/1,5/1,5/2/2/2,5/2,5/3 Sekunden. Cooldown sinkt gleichmäßig von 38 auf 28,5 Sekunden über die zehn Stufen. Castzeit unverändert 0,2 Sekunden. Keine zusätzliche periodische Schadenswirkung.

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
| skillPointCosts.classRankCosts.herbalist.0 | 12 |
| skillPointCosts.classRankCosts.herbalist.1 | 16 |
| skillPointCosts.classRankCosts.herbalist.2 | 20 |
| skillPointCosts.classRankCosts.herbalist.3 | 24 |
| skillPointCosts.classRankCosts.herbalist.4 | 28 |
| skillPointCosts.classRankCosts.herbalist.5 | 32 |
| skillPointCosts.classRankCosts.herbalist.6 | 36 |
| skillPointCosts.classRankCosts.herbalist.7 | 40 |
| skillPointCosts.classRankCosts.herbalist.8 | 44 |
| skillPointCosts.classRankCosts.herbalist.9 | 48 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| learningRequirements.classOverrides.herbalist | 6 |
| learningRequirements.minimumCharacterLevel | 6 |
| skillName_eng | Water Chains |
| category | active |
| cd | 38 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erschafft Wasserfesseln, die ein Ziel festhalten und einmalig magischen Schaden verursachen. Zehn Skillstufen. Magischer Skill-Grundschaden 47 auf Stufe 1, +21 je weiterer Stufe, maximal 236 auf Stufe 10; dazu einmal aktueller M-Angriff. Mana-Kosten nach der 25%-Regel ausschließlich aus dem Skill-Grundschaden, kaufmännisch auf ganze Punkte gerundet: 12/17/22/28/33/38/43/49/54/59. Charakterangriff zählt nicht zur Kostenbasis. Fesseldauer je Skillstufe: 1/1/1,5/1,5/1,5/2/2/2,5/2,5/3 Sekunden. Cooldown sinkt gleichmäßig von 38 auf 28,5 Sekunden über die zehn Stufen. Castzeit unverändert 0,2 Sekunden. Keine zusätzliche periodische Schadenswirkung. |
| description_eng | Creates water chains that immobilize a target and deal magical damage once. Ten skill levels. Magical skill base damage 47 at level 1 plus 21 per additional level, reaching 236 at level 10, plus current magical attack once. Mana cost is 25% of skill base damage rounded to whole points: 12/17/22/28/33/38/43/49/54/59. Character attack is excluded from the cost basis. Immobilization duration by level: 1/1/1.5/1.5/1.5/2/2/2.5/2.5/3 seconds. Cooldown decreases evenly from 38 to 28.5 seconds over ten levels. Cast time remains 0.2 seconds. No additional periodic damage. |
| dmgType (Altformat) | spell |
| dur | 1 |
| matk | 47 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 16 |
| skillName_de | Wasserfesseln |
| skillpoints | 1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 38 |
| cooldownScaling.perLevel | -1,056 |
| durationScaling.type | table |
| durationScaling.values[0] | 1 |
| durationScaling.values[1] | 1 |
| durationScaling.values[2] | 1,5 |
| durationScaling.values[3] | 1,5 |
| durationScaling.values[4] | 1,5 |
| durationScaling.values[5] | 2 |
| durationScaling.values[6] | 2 |
| durationScaling.values[7] | 2,5 |
| durationScaling.values[8] | 2,5 |
| durationScaling.values[9] | 3 |
| mana (Aktivierungskosten, kein Bonus) | 12 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 12 |
| resourceCosts[0].scaling.values[0] | 12 |
| resourceCosts[0].scaling.values[1] | 17 |
| resourceCosts[0].scaling.values[2] | 22 |
| resourceCosts[0].scaling.values[3] | 28 |
| resourceCosts[0].scaling.values[4] | 33 |
| resourceCosts[0].scaling.values[5] | 38 |
| resourceCosts[0].scaling.values[6] | 43 |
| resourceCosts[0].scaling.values[7] | 49 |
| resourceCosts[0].scaling.values[8] | 54 |
| resourceCosts[0].scaling.values[9] | 59 |
| castTimeSeconds | 0,2 |
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
| levelProgression.rules[0].rule.rule.base | 38 |
| levelProgression.rules[0].rule.rule.perLevel | -1,056 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | legacyTable |
| levelProgression.rules[1].rule.values[0] | 1 |
| levelProgression.rules[1].rule.values[1] | 1 |
| levelProgression.rules[1].rule.values[2] | 1,5 |
| levelProgression.rules[1].rule.values[3] | 1,5 |
| levelProgression.rules[1].rule.values[4] | 1,5 |
| levelProgression.rules[1].rule.values[5] | 2 |
| levelProgression.rules[1].rule.values[6] | 2 |
| levelProgression.rules[1].rule.values[7] | 2,5 |
| levelProgression.rules[1].rule.values[8] | 2,5 |
| levelProgression.rules[1].rule.values[9] | 3 |
| levelProgression.rules[1].rule.beyond | requiresDefinition |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | outputCost |
| levelProgression.rules[2].rule.factor | 0,25 |
| levelProgression.rules[2].rule.basis | damage |
| levelProgression.rules[2].rule.minimum | 0 |
| levelProgression.rules[2].source | verifiedManaPricing |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | matk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 47 |
| levelProgression.rules[3].rule.perLevel | 21 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |
| statScaling.matk.type | linear |
| statScaling.matk.base | 47 |
| statScaling.matk.perLevel | 21 |

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

### 31: Elektrisches Feld

Erzeugt ein kreisförmiges elektrisches Feld auf dem Boden. Vorläufig werden die genannten 4 Meter als Durchmesser gerechnet, also 2 Meter Radius; Flächengröße noch bestätigen. Beim Auslösen verursacht es einmalig 137 magischen Skill-Grundschaden, plus 45 je weiterer Stufe, bis zu 542 auf Stufe 10. Solange Gegner im Feld stehen, erleiden sie alle 2 Sekunden zusätzlich 10 magischen Schaden, plus 3 je weiterer Stufe, bis zu 37 auf Stufe 10, zuzüglich des aktuellen Charakter-M-Angriffs bei jedem Tick. Gegner im Feld sind um 5 Prozent verlangsamt; beim Verlassen endet dieser Flächeneffekt. Feldlaufzeit vorläufig 4 Sekunden auf Stufe 1 bis 4, 6 Sekunden auf Stufe 5 bis 9 und 8 Sekunden auf Stufe 10. Erster Tick nach 2 Sekunden, somit 2, 3 oder 4 Ticks bei vollständigem Aufenthalt. Mana-Kosten 63 auf Stufe 1, Stufenwerte 63, 83, 104, 124, 153, 175, 196, 218, 240, 276, maximal 276 auf Stufe 10. Cooldown 47 Sekunden, minus 1 je weiterer Stufe, bis zu 38 Sekunden. Castzeit 0,3 Sekunden. Die genauen Stufenübergänge der Laufzeit sind als vorläufige Staffelung festgehalten. Aktuelle Mana-Gruppe: finisher (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 10 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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
| skillName_eng | Electric Field |
| category | active |
| cd | 47 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erzeugt ein kreisförmiges elektrisches Feld auf dem Boden. Vorläufig werden die genannten 4 Meter als Durchmesser gerechnet, also 2 Meter Radius; Flächengröße noch bestätigen. Beim Auslösen verursacht es einmalig 137 magischen Skill-Grundschaden, plus 45 je weiterer Stufe, bis zu 542 auf Stufe 10. Solange Gegner im Feld stehen, erleiden sie alle 2 Sekunden zusätzlich 10 magischen Schaden, plus 3 je weiterer Stufe, bis zu 37 auf Stufe 10, zuzüglich des aktuellen Charakter-M-Angriffs bei jedem Tick. Gegner im Feld sind um 5 Prozent verlangsamt; beim Verlassen endet dieser Flächeneffekt. Feldlaufzeit vorläufig 4 Sekunden auf Stufe 1 bis 4, 6 Sekunden auf Stufe 5 bis 9 und 8 Sekunden auf Stufe 10. Erster Tick nach 2 Sekunden, somit 2, 3 oder 4 Ticks bei vollständigem Aufenthalt. Mana-Kosten 63 auf Stufe 1, Stufenwerte 63, 83, 104, 124, 153, 175, 196, 218, 240, 276, maximal 276 auf Stufe 10. Cooldown 47 Sekunden, minus 1 je weiterer Stufe, bis zu 38 Sekunden. Castzeit 0,3 Sekunden. Die genauen Stufenübergänge der Laufzeit sind als vorläufige Staffelung festgehalten. Aktuelle Mana-Gruppe: finisher (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Creates a circular electrical field on the ground. The stated 4 metres are provisionally treated as diameter, giving a 2 metre radius; area size needs confirmation. Initial magical skill base damage is 137, increasing by 45 per additional level to 542 at level 10. Enemies inside take 10 additional magical damage every 2 seconds, increasing by 3 per additional level to 37 at level 10, adding current caster magical attack to each tick. Enemies inside are slowed by 5 percent; this area effect ends when they leave. Provisional field duration is 4 seconds at levels 1 through 4, 6 seconds at levels 5 through 9 and 8 seconds at level 10. First tick is after 2 seconds, giving 2, 3 or 4 ticks with full exposure. Mana cost 63 at level 1, maximum 276 at level 10. Cooldown starts at 47 seconds and decreases by 1 per additional level to 38 seconds. Cast time is 0.3 seconds. Duration milestone levels remain provisional. |
| dmgType (Altformat) | spell |
| dur | 4 |
| matk | 137 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 31 |
| skillName_de | Elektrisches Feld |
| skillpoints | 1 |
| attackArea.shape | circle |
| attackArea.center | skillCenter |
| attackArea.radiusMeters | 2 |
| attackArea.geometryStatus | pending |
| attackArea.target | enemiesInArea |
| attackArea.timingStatus | pending |
| castTimeSeconds | 0,3 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 47 |
| cooldownScaling.perLevel | -1 |
| durationScaling.type | table |
| durationScaling.values[0] | 4 |
| durationScaling.values[1] | 4 |
| durationScaling.values[2] | 4 |
| durationScaling.values[3] | 4 |
| durationScaling.values[4] | 6 |
| durationScaling.values[5] | 6 |
| durationScaling.values[6] | 6 |
| durationScaling.values[7] | 6 |
| durationScaling.values[8] | 6 |
| durationScaling.values[9] | 8 |
| effects[0].key | electric-field-periodic |
| effects[0].type | periodicDamage |
| effects[0].target | enemiesInArea |
| effects[0].value | 10 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 10 |
| effects[0].valueScaling.perLevel | 3 |
| effects[0].durationSeconds | 4 |
| effects[0].durationScaling.type | table |
| effects[0].durationScaling.values[0] | 4 |
| effects[0].durationScaling.values[1] | 4 |
| effects[0].durationScaling.values[2] | 4 |
| effects[0].durationScaling.values[3] | 4 |
| effects[0].durationScaling.values[4] | 6 |
| effects[0].durationScaling.values[5] | 6 |
| effects[0].durationScaling.values[6] | 6 |
| effects[0].durationScaling.values[7] | 6 |
| effects[0].durationScaling.values[8] | 6 |
| effects[0].durationScaling.values[9] | 8 |
| effects[0].intervalSeconds | 2 |
| effects[0].firstTickAfterSeconds | 2 |
| effects[0].addsCasterMagicalAttack | true |
| effects[0].onlyWhileTargetInsideArea | true |
| effects[0].damageTypes[0] | magical |
| effects[0].periodicDamageKind | areaAttack |
| effects[1].key | electric-field-slow |
| effects[1].type | statModifier |
| effects[1].target | enemiesInArea |
| effects[1].stat | movementSpeed |
| effects[1].value | -0,05 |
| effects[1].unit | fraction |
| effects[1].durationSeconds | 4 |
| effects[1].durationScaling.type | table |
| effects[1].durationScaling.values[0] | 4 |
| effects[1].durationScaling.values[1] | 4 |
| effects[1].durationScaling.values[2] | 4 |
| effects[1].durationScaling.values[3] | 4 |
| effects[1].durationScaling.values[4] | 6 |
| effects[1].durationScaling.values[5] | 6 |
| effects[1].durationScaling.values[6] | 6 |
| effects[1].durationScaling.values[7] | 6 |
| effects[1].durationScaling.values[8] | 6 |
| effects[1].durationScaling.values[9] | 8 |
| effects[1].onlyWhileTargetInsideArea | true |
| mana (Aktivierungskosten, kein Bonus) | 63 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.values[0] | 63 |
| resourceCosts[0].scaling.values[1] | 83 |
| resourceCosts[0].scaling.values[2] | 104 |
| resourceCosts[0].scaling.values[3] | 124 |
| resourceCosts[0].scaling.values[4] | 153 |
| resourceCosts[0].scaling.values[5] | 175 |
| resourceCosts[0].scaling.values[6] | 196 |
| resourceCosts[0].scaling.values[7] | 218 |
| resourceCosts[0].scaling.values[8] | 240 |
| resourceCosts[0].scaling.values[9] | 276 |
| resourceCosts[0].scaling.base | 63 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 137 |
| statScaling.matk.perLevel | 45 |
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
| levelProgression.rules[0].rule.rule.base | 47 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | thresholds |
| levelProgression.rules[1].rule.base | 4 |
| levelProgression.rules[1].rule.changes[0].level | 5 |
| levelProgression.rules[1].rule.changes[0].value | 6 |
| levelProgression.rules[1].rule.changes[1].level | 10 |
| levelProgression.rules[1].rule.changes[1].value | 8 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 10 |
| levelProgression.rules[2].rule.perLevel | 3 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | durationScaling |
| levelProgression.rules[3].rule.kind | thresholds |
| levelProgression.rules[3].rule.base | 4 |
| levelProgression.rules[3].rule.changes[0].level | 5 |
| levelProgression.rules[3].rule.changes[0].value | 6 |
| levelProgression.rules[3].rule.changes[1].level | 10 |
| levelProgression.rules[3].rule.changes[1].value | 8 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 1 |
| levelProgression.rules[4].path[2] | durationScaling |
| levelProgression.rules[4].rule.kind | thresholds |
| levelProgression.rules[4].rule.base | 4 |
| levelProgression.rules[4].rule.changes[0].level | 5 |
| levelProgression.rules[4].rule.changes[0].value | 6 |
| levelProgression.rules[4].rule.changes[1].level | 10 |
| levelProgression.rules[4].rule.changes[1].value | 8 |
| levelProgression.rules[4].source | verifiedExistingLevels |
| levelProgression.rules[5].path[0] | resourceCosts |
| levelProgression.rules[5].path[1] | 0 |
| levelProgression.rules[5].path[2] | scaling |
| levelProgression.rules[5].rule.kind | outputCost |
| levelProgression.rules[5].rule.factor | 0,4 |
| levelProgression.rules[5].rule.basis | damage |
| levelProgression.rules[5].rule.minimum | 0 |
| levelProgression.rules[5].source | verifiedManaPricing |
| levelProgression.rules[6].path[0] | statScaling |
| levelProgression.rules[6].path[1] | matk |
| levelProgression.rules[6].rule.kind | linear |
| levelProgression.rules[6].rule.base | 137 |
| levelProgression.rules[6].rule.perLevel | 45 |
| levelProgression.rules[6].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 29: Eislanze

Beschwört eine Eislanze, die das Ziel einmalig durchbohrt und seine Rüstung für 5 Sekunden um 5 Prozent verringert. Der magische Grundangriff steigt von 187 um 49 je weiterer Stufe auf 628. Die Mana-Kosten 47 auf Stufe 1, +12 je weiterer Stufe, maximal 155 auf Stufe 10. Die Castzeit beträgt 0,6 Sekunden. Der Cooldown 50 Sekunden auf Stufe 1, 41 Sekunden auf Stufe 10; bisheriger Stufenverlauf um 2 Sekunden erhöht. Die fünf Sekunden betreffen den Rüstungseffekt, keinen Schaden über Zeit. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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

### 167: Entgiftung

Eigenbuff gegen neue Vergiftungen. Wenn eine Vergiftung angewendet werden würde, besteht auf Stufe 1 eine Chance von 30 Prozent, sie zu verhindern. Je weiterer Stufe steigt diese Chance um 5 Prozentpunkte auf 75 Prozent auf Stufe 10. Keine vollständige Giftimmunität und keine Entfernung bereits laufender Vergiftungen festgelegt. Buffdauer 10 Sekunden auf Stufe 1, plus 5 je weiterer Stufe, bis zu 55 Sekunden. Castzeit fest 0,1 Sekunden., Cooldown weiterhin 120 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 15 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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
| skillName_eng | Detoxification |
| category | active |
| cd | 120 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff gegen neue Vergiftungen. Wenn eine Vergiftung angewendet werden würde, besteht auf Stufe 1 eine Chance von 30 Prozent, sie zu verhindern. Je weiterer Stufe steigt diese Chance um 5 Prozentpunkte auf 75 Prozent auf Stufe 10. Keine vollständige Giftimmunität und keine Entfernung bereits laufender Vergiftungen festgelegt. Buffdauer 10 Sekunden auf Stufe 1, plus 5 je weiterer Stufe, bis zu 55 Sekunden. Castzeit fest 0,1 Sekunden., Cooldown weiterhin 120 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff resisting new poison applications. When poison would be applied, level 1 grants a 30 percent chance to prevent it. Each additional level adds 5 percentage points, reaching 75 percent at level 10. Does not grant full poison immunity; removal of existing poison is not defined. Buff duration starts at 10 seconds and increases by 5 per additional level to 55 seconds. Fixed cast time 0.1 seconds. and cooldown remains 120 seconds. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 167 at level 10, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 10 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 167 |
| skillName_de | Entgiftung |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| durationScaling.type | linear |
| durationScaling.base | 10 |
| durationScaling.perLevel | 5 |
| effects[0].key | detoxification-poison-resistance |
| effects[0].type | statusResistance |
| effects[0].target | self |
| effects[0].resistedStatus | poison |
| effects[0].resistanceCheck | onStatusApplication |
| effects[0].value | 0,3 |
| effects[0].unit | fraction |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0,3 |
| effects[0].valueScaling.perLevel | 0,05 |
| effects[0].durationSeconds | 10 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 10 |
| effects[0].durationScaling.perLevel | 5 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 10 |
| levelProgression.rules[0].rule.perLevel | 5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,3 |
| levelProgression.rules[1].rule.perLevel | 0,05 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | durationScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 10 |
| levelProgression.rules[2].rule.perLevel | 5 |
| levelProgression.rules[2].source | storedFormula |
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

### 164: Natürlicher Schutz

Eigenbuff für 600 Sekunden. Physische und magische Verteidigung starten bei jeweils 6 auf Stufe 1 und steigen um jeweils 4 je weiterer Stufe auf jeweils 42 auf Stufe 10. Wisdom beträgt 3 auf Stufe 1 bis 4, 6 auf Stufe 5 bis 9 und 12 auf Stufe 10. Castzeit fest 0,1 Sekunden., Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 17 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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
| skillName_eng | Natural Protection |
| category | active |
| cd | 60 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff für 600 Sekunden. Physische und magische Verteidigung starten bei jeweils 6 auf Stufe 1 und steigen um jeweils 4 je weiterer Stufe auf jeweils 42 auf Stufe 10. Wisdom beträgt 3 auf Stufe 1 bis 4, 6 auf Stufe 5 bis 9 und 12 auf Stufe 10. Castzeit fest 0,1 Sekunden., Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff lasting 600 seconds. Physical and magical defence start at 6 each at level 1 and increase by 4 each per additional level to 42 each at level 10. Wisdom is 3 at levels 1 through 4, 6 at levels 5 through 9 and 12 at level 10. Fixed cast time 0.1 seconds. and cooldown is 60 seconds. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 167 at level 10, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 600 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| mdef | 6 |
| nr | 164 |
| pdef | 6 |
| skillName_de | Natürlicher Schutz |
| skillpoints | 1 |
| wis | 3 |
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
| statScaling.pdef.perLevel | 4 |
| statScaling.mdef.type | linear |
| statScaling.mdef.base | 6 |
| statScaling.mdef.perLevel | 4 |
| statScaling.wis.type | table |
| statScaling.wis.values[0] | 3 |
| statScaling.wis.values[1] | 3 |
| statScaling.wis.values[2] | 3 |
| statScaling.wis.values[3] | 3 |
| statScaling.wis.values[4] | 6 |
| statScaling.wis.values[5] | 6 |
| statScaling.wis.values[6] | 6 |
| statScaling.wis.values[7] | 6 |
| statScaling.wis.values[8] | 6 |
| statScaling.wis.values[9] | 12 |
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
| levelProgression.rules[1].rule.perLevel | 4 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | mdef |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 6 |
| levelProgression.rules[2].rule.perLevel | 4 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | wis |
| levelProgression.rules[3].rule.kind | thresholds |
| levelProgression.rules[3].rule.base | 3 |
| levelProgression.rules[3].rule.changes[0].level | 5 |
| levelProgression.rules[3].rule.changes[0].value | 6 |
| levelProgression.rules[3].rule.changes[1].level | 10 |
| levelProgression.rules[3].rule.changes[1].value | 12 |
| levelProgression.rules[3].source | verifiedExistingLevels |
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

### 46: Ewiges Eis

Eis fliegt aus mehreren Richtungen auf einen Gegner zu und verfolgt dessen Bewegung. Weglaufen oder Wegrollen allein schüttelt die Projektile nicht ab; die normale Treffer-/Ausweichberechnung kann den Angriff dennoch verfehlen lassen. Verursacht einmalig 137 magischen Skill-Grundschaden, plus 43 je weiterer Stufe, bis zu 739 auf Stufe 15. Bei einem Treffer wird das Ziel mit 50 Prozent Wahrscheinlichkeit eingefroren. Die Einfrierdauer steigt gleichmäßig von 0,5 auf 2,5 Sekunden. Während des Einfrierens bleibt der Gegner angreifbar, nimmt aber nur 80 Prozent des sonst ankommenden Schadens. Dieser Schutz endet zusammen mit dem Einfrieren und gilt nur, wenn Einfrieren tatsächlich ausgelöst wurde. Mana-Kosten 34 auf Stufe 1, +11 je weiterer Stufe, maximal 188 auf Stufe 15. Castzeit 0,6 Sekunden, Cooldown sinkt gleichmäßig von 54 Sekunden auf Stufe 1 auf 39 Sekunden auf Stufe 15. Ein vorheriger Treffer durch einen Wasserspruch erhöht die Einfrierchance über die Grundchance von 50 Prozent hinaus. Die Höhe dieses Bonus und das Zeitfenster nach dem Wasserspruch werden später festgelegt. Der Wasserspruch ist keine Voraussetzung für Aktivierung oder Einfrieren. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 20 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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
| skillName_eng | Eternal Ice |
| category | active |
| cd | 54 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eis fliegt aus mehreren Richtungen auf einen Gegner zu und verfolgt dessen Bewegung. Weglaufen oder Wegrollen allein schüttelt die Projektile nicht ab; die normale Treffer-/Ausweichberechnung kann den Angriff dennoch verfehlen lassen. Verursacht einmalig 137 magischen Skill-Grundschaden, plus 43 je weiterer Stufe, bis zu 739 auf Stufe 15. Bei einem Treffer wird das Ziel mit 50 Prozent Wahrscheinlichkeit eingefroren. Die Einfrierdauer steigt gleichmäßig von 0,5 auf 2,5 Sekunden. Während des Einfrierens bleibt der Gegner angreifbar, nimmt aber nur 80 Prozent des sonst ankommenden Schadens. Dieser Schutz endet zusammen mit dem Einfrieren und gilt nur, wenn Einfrieren tatsächlich ausgelöst wurde. Mana-Kosten 34 auf Stufe 1, +11 je weiterer Stufe, maximal 188 auf Stufe 15. Castzeit 0,6 Sekunden, Cooldown sinkt gleichmäßig von 54 Sekunden auf Stufe 1 auf 39 Sekunden auf Stufe 15. Ein vorheriger Treffer durch einen Wasserspruch erhöht die Einfrierchance über die Grundchance von 50 Prozent hinaus. Die Höhe dieses Bonus und das Zeitfenster nach dem Wasserspruch werden später festgelegt. Der Wasserspruch ist keine Voraussetzung für Aktivierung oder Einfrieren. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Ice approaches an enemy from several directions and tracks its movement. Running or rolling alone does not shake off the projectiles; normal hit/dodge resolution may still make the attack miss. Deals 137 magical skill base damage once, increasing by 43 per additional level to 739 at level 15. A hit has a 50 percent chance to freeze the target. Freeze duration increases evenly from 0.5 to 2.5 seconds. While frozen, the enemy remains attackable but takes only 80 percent of otherwise incoming damage. This protection ends with the freeze and applies only if freezing actually triggers. Mana cost 34 at level 1, maximum 188 at level 15. Cast time is 0.6 seconds; cooldown decreases evenly from 54 seconds at level 1 to 39 seconds at level 15. A previous water-spell hit increases freeze chance above the 50 percent base chance. The bonus amount and qualifying time window will be defined later. A water-spell hit is not required to activate the skill or freeze the target. |
| dmgType (Altformat) | spell |
| dur | 0,5 |
| matk | 137 |
| maxSkillLv | 15 |
| maxUpgradeLv | 10 |
| nr | 46 |
| skillName_de | Ewiges Eis |
| skillpoints | 1 |
| attackExecution.targetMode | singleEnemy |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.tracksTargetMovement | true |
| attackExecution.canMissFromHitCalculation | true |
| attackExecution.timingStatus | pending |
| castTimeSeconds | 0,6 |
| durationScaling.type | linear |
| durationScaling.base | 0,5 |
| durationScaling.perLevel | 0,143 |
| effects[0].key | eternal-ice-freeze |
| effects[0].type | control |
| effects[0].target | enemy |
| effects[0].controlKind | freeze |
| effects[0].hitChance | 0,5 |
| effects[0].value | 1 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 0,5 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 0,5 |
| effects[0].durationScaling.perLevel | 0,143 |
| effects[0].actionRestrictionsStatus | pending |
| effects[1].key | eternal-ice-protection |
| effects[1].type | damageReduction |
| effects[1].target | enemy |
| effects[1].value | 0,2 |
| effects[1].unit | fraction |
| effects[1].durationSeconds | 0,5 |
| effects[1].durationScaling.type | linear |
| effects[1].durationScaling.base | 0,5 |
| effects[1].durationScaling.perLevel | 0,143 |
| effects[1].endWith | eternal-ice-freeze |
| effects[1].damageTypes[0] | physical |
| effects[1].damageTypes[1] | magical |
| mana (Aktivierungskosten, kein Bonus) | 34 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 34 |
| resourceCosts[0].scaling.perLevel | 11 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 137 |
| statScaling.matk.perLevel | 43 |
| conditionalProcBonus.condition | targetPreviouslyHitByWaterSpell |
| conditionalProcBonus.effectKey | eternal-ice-freeze |
| conditionalProcBonus.increasesChance | true |
| conditionalProcBonus.bonusAmountStatus | pending |
| conditionalProcBonus.conditionDurationStatus | pending |
| conditionalProcBonus.isActivationRequirement | false |
| cooldownScaling.type | linear |
| cooldownScaling.base | 54 |
| cooldownScaling.perLevel | -1,071 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0,5 |
| levelProgression.rules[0].rule.perLevel | 0,143 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,5 |
| levelProgression.rules[1].rule.perLevel | 0,143 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 1 |
| levelProgression.rules[2].path[2] | durationScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 0,5 |
| levelProgression.rules[2].rule.perLevel | 0,143 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | resourceCosts |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | scaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0 |
| levelProgression.rules[3].rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.base | 34 |
| levelProgression.rules[3].rule.rule.perLevel | 11 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | matk |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 137 |
| levelProgression.rules[4].rule.perLevel | 43 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | cooldownScaling |
| levelProgression.rules[5].rule.kind | bounded |
| levelProgression.rules[5].rule.min | 0,1 |
| levelProgression.rules[5].rule.rule.kind | linear |
| levelProgression.rules[5].rule.rule.base | 54 |
| levelProgression.rules[5].rule.rule.perLevel | -1,071 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 165: Aura Unterdrückung

Eigenbuff für Kräuterkundler und Luminet, Dauer 180 Sekunden. Reduziert die durch Schaden neu erzeugte Aggro um 0,5 Prozent je gelerntem Skilllevel, bis zu 5 Prozent auf Stufe 10. Der Aggro-Multiplikator sinkt von 0,995 auf 0,95; der tatsächlich verursachte Schaden bleibt unverändert. Bei 1000 Schaden entstehen auf Stufe 10 950 Schadens-Aggro. Bereits angesammelte Aggro wird nicht rückwirkend gelöscht. Gewährt zusätzlich 1,2 Intelligenz je Skillstufe, bis zu 12 Intelligenz auf Stufe 10. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Cooldown 60 Sekunden. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

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
| skillName_eng | Aura Suppression |
| category | active |
| cd | 60 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| charClass[2] | Luminet |
| charClass[3] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff für Kräuterkundler und Luminet, Dauer 180 Sekunden. Reduziert die durch Schaden neu erzeugte Aggro um 0,5 Prozent je gelerntem Skilllevel, bis zu 5 Prozent auf Stufe 10. Der Aggro-Multiplikator sinkt von 0,995 auf 0,95; der tatsächlich verursachte Schaden bleibt unverändert. Bei 1000 Schaden entstehen auf Stufe 10 950 Schadens-Aggro. Bereits angesammelte Aggro wird nicht rückwirkend gelöscht. Gewährt zusätzlich 1,2 Intelligenz je Skillstufe, bis zu 12 Intelligenz auf Stufe 10. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Cooldown 60 Sekunden. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff shared by Herbalist and Luminet, lasting 180 seconds. Reduces newly generated damage threat by 0.5 percent per learned skill level, reaching 5 percent at level 10. Threat multiplier decreases from 0.995 to 0.95; actual damage is unchanged. At level 10, 1000 damage generates 950 damage threat. Does not retroactively erase accumulated threat. Also grants 1.2 Intelligence per skill level, up to 12 Intelligence at level 10. Fixed cast time 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Cooldown 60 seconds. Activation costs 50 Mana at level 1 plus 13 per additional level, reaching 167 Mana at level 10, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 180 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 165 |
| skillName_de | Aura Unterdrückung |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| effects[0].key | aura-suppression-threat |
| effects[0].type | threatMultiplier |
| effects[0].target | self |
| effects[0].value | 0,995 |
| effects[0].unit | fraction |
| effects[0].threatBasis | damageDealt |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0,995 |
| effects[0].valueScaling.perLevel | -0,005 |
| effects[0].durationSeconds | 180 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
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
| levelProgression.rules[0].rule.base | 0,995 |
| levelProgression.rules[0].rule.perLevel | -0,005 |
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
| levelProgression.rules[2].path[1] | int |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 1,2 |
| levelProgression.rules[2].rule.perLevel | 1,2 |
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
| int | 1,2 |
| statBonusTargets.int | self |
| statBonusUnits.int | flat |
| statScaling.int.type | linear |
| statScaling.int.base | 1,2 |
| statScaling.int.perLevel | 1,2 |
| classificationVersion | 1 |
| target | self |
| type | selfBuff |
| learningRequirements.minimumCharacterLevel | 22 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |

### 221: Windschlitzer

Schneidet deine Feinde mit Klingen aus Wind. Der magische Grundschaden des Skills beträgt 211 auf Skilllevel 1 und steigt um 71 je weiterer Stufe auf 850 auf Stufe 10. Dieser Wert erhöht nicht dauerhaft deinen magischen Angriff. Die Mana-Kosten 53 auf Stufe 1, +18 je weiterer Stufe, maximal 215 auf Stufe 10. Der Cooldown sinkt von 54 um 1 Sekunde je weiterer Stufe auf 45 Sekunden. Castzeit 0,2 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| skillPointCosts.classRankCosts.druid.0 | 5 |
| skillPointCosts.classRankCosts.druid.1 | 6 |
| skillPointCosts.classRankCosts.druid.2 | 7 |
| skillPointCosts.classRankCosts.druid.3 | 8 |
| skillPointCosts.classRankCosts.druid.4 | 9 |
| skillPointCosts.classRankCosts.druid.5 | 10 |
| skillPointCosts.classRankCosts.druid.6 | 11 |
| skillPointCosts.classRankCosts.druid.7 | 12 |
| skillPointCosts.classRankCosts.druid.8 | 13 |
| skillPointCosts.classRankCosts.druid.9 | 14 |
| skillPointCosts.classRankCosts.druid.10 | 16 |
| skillPointCosts.classRankCosts.druid.11 | 17 |
| skillPointCosts.classRankCosts.druid.12 | 18 |
| skillPointCosts.classRankCosts.druid.13 | 19 |
| skillPointCosts.classRankCosts.druid.14 | 20 |
| skillPointCosts.classRankCosts.druid.15 | 21 |
| skillPointCosts.classRankCosts.druid.16 | 22 |
| skillPointCosts.classRankCosts.druid.17 | 23 |
| skillPointCosts.classRankCosts.druid.18 | 24 |
| skillPointCosts.classRankCosts.druid.19 | 25 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 22 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Wind Slasher |
| category | active |
| charClass[0] | Druide |
| charClass[1] | Alchemist |
| charClass[2] | Herbalist |
| charClass[3] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Schneidet deine Feinde mit Klingen aus Wind. Der magische Grundschaden des Skills beträgt 211 auf Skilllevel 1 und steigt um 71 je weiterer Stufe auf 850 auf Stufe 10. Dieser Wert erhöht nicht dauerhaft deinen magischen Angriff. Die Mana-Kosten 53 auf Stufe 1, +18 je weiterer Stufe, maximal 215 auf Stufe 10. Der Cooldown sinkt von 54 um 1 Sekunde je weiterer Stufe auf 45 Sekunden. Castzeit 0,2 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Cuts your enemies with blades of wind. The skill base magical damage starts at 211 at level 1 and increases by 71 per additional level to 850 at level 10. This value does not permanently increase your magical attack. Mana cost 53 at level 1, maximum 215 at level 10. Cooldown decreases from 54 by 1 second per additional level to 45 seconds. Cast time is 0.2 seconds. |
| dmgType (Altformat) | spell |
| matk | 211 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 221 |
| skillName_de | Windschlitzer |
| skillpoints | 1 |
| castTimeSeconds | 0,2 |
| cd | 54 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 54 |
| cooldownScaling.perLevel | -1 |
| mana (Aktivierungskosten, kein Bonus) | 53 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 53 |
| resourceCosts[0].scaling.perLevel | 18 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 211 |
| statScaling.matk.perLevel | 71 |
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
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 53 |
| levelProgression.rules[1].rule.rule.perLevel | 18 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 211 |
| levelProgression.rules[2].rule.perLevel | 71 |
| levelProgression.rules[2].source | storedFormula |
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

### 71: Lebensessenz

Erwecke die Lebensessenz eines Verbündeten oder Begleiters und heile ihn auf Skilllevel 1 um 3 % seines maximalen Lebens. Pro weiterem Skilllevel steigt die Heilung um 0,5 Prozentpunkte, bis zu 5 % auf Skilllevel 5. Der Cooldown beträgt anfangs 55 Sekunden und sinkt pro weiterem Skilllevel um 3 Sekunden, bis auf 43 Sekunden. Mana-Kosten 113 auf Stufe 1, plus 55 je weiterer Stufe, bis zu 333 auf Stufe 5. Castzeit 0,3 Sekunden. Dies ist eine Heilung, keine Wiederbelebung.

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 25 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillPointCosts.firstLevel | 30 |
| skillPointCosts.rankCosts.0 | 30 |
| skillPointCosts.rankCosts.1 | 45 |
| skillPointCosts.rankCosts.2 | 60 |
| skillPointCosts.rankCosts.3 | 75 |
| skillPointCosts.rankCosts.4 | 90 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| skillName_eng | Life Essence |
| category | active |
| cd | 55 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erwecke die Lebensessenz eines Verbündeten oder Begleiters und heile ihn auf Skilllevel 1 um 3 % seines maximalen Lebens. Pro weiterem Skilllevel steigt die Heilung um 0,5 Prozentpunkte, bis zu 5 % auf Skilllevel 5. Der Cooldown beträgt anfangs 55 Sekunden und sinkt pro weiterem Skilllevel um 3 Sekunden, bis auf 43 Sekunden. Mana-Kosten 113 auf Stufe 1, plus 55 je weiterer Stufe, bis zu 333 auf Stufe 5. Castzeit 0,3 Sekunden. Dies ist eine Heilung, keine Wiederbelebung. |
| description_eng | Awaken the life essence of an ally or companion, healing them for 3% of their maximum health at skill level 1. Each additional skill level increases the healing by 0.5 percentage points, reaching 5% at skill level 5. The cooldown starts at 55 seconds and decreases by 3 seconds per additional skill level, reaching 43 seconds. Mana cost starts at 113 at level 1 and increases by 55 per additional level to 333 at level 5. Cast time is 0.3 seconds. This is healing, not resurrection. |
| dmgType (Altformat) | spell |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 71 |
| skillName_de | Lebensessenz |
| skillpoints | 1 |
| activation | manual |
| cooldownScaling.type | linear |
| cooldownScaling.base | 55 |
| cooldownScaling.perLevel | -3 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0,03 |
| effects[0].valueScaling.perLevel | 0,005 |
| effects[0].type | heal |
| effects[0].target | allyOrCompanion |
| effects[0].value | 0,03 |
| effects[0].unit | fraction |
| effects[0].reference | targetMaxHealth |
| effects[0].damageTypes | [] |
| effects[0].durationSeconds | 0 |
| effects[0].key | life-essence-heal |
| effectsVersion | 1 |
| castTimeSeconds | 0,3 |
| mana (Aktivierungskosten, kein Bonus) | 113 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 113 |
| resourceCosts[0].scaling.perLevel | 55 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 55 |
| levelProgression.rules[0].rule.rule.perLevel | -3 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,03 |
| levelProgression.rules[1].rule.perLevel | 0,005 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 113 |
| levelProgression.rules[2].rule.rule.perLevel | 55 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | skill |

### 69: Kugelblitz

Verursacht einmalig magischen Skill-Grundschaden von 398 auf Stufe 1, plus 143 je weiterer Stufe, bis zu 1685 auf Stufe 10. Mana-Kosten 100 auf Stufe 1, +36 je weiterer Stufe, maximal 424 auf Stufe 10. Cooldown beginnt unverändert bei 52 Sekunden und sinkt um 1 Sekunde je weiterer Stufe auf 43 Sekunden. Castzeit 0,2 Sekunden, vorläufige Animation 1 Sekunde. Keine anhaltende Wirkungsdauer. Die alte Beschreibung nennt zusätzlich 15 Prozent mehr Schaden elektrischer Fähigkeiten nach einem vorherigen Wasserspruch auf dem Ziel; genaue Zuordnung und Ausgestaltung dieses alten Zusatzeffekts sind noch zu prüfen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 27 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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
| skillName_eng | Ball Lightning |
| category | active |
| cd | 52 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Verursacht einmalig magischen Skill-Grundschaden von 398 auf Stufe 1, plus 143 je weiterer Stufe, bis zu 1685 auf Stufe 10. Mana-Kosten 100 auf Stufe 1, +36 je weiterer Stufe, maximal 424 auf Stufe 10. Cooldown beginnt unverändert bei 52 Sekunden und sinkt um 1 Sekunde je weiterer Stufe auf 43 Sekunden. Castzeit 0,2 Sekunden, vorläufige Animation 1 Sekunde. Keine anhaltende Wirkungsdauer. Die alte Beschreibung nennt zusätzlich 15 Prozent mehr Schaden elektrischer Fähigkeiten nach einem vorherigen Wasserspruch auf dem Ziel; genaue Zuordnung und Ausgestaltung dieses alten Zusatzeffekts sind noch zu prüfen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Deals magical skill base damage once, starting at 398 and increasing by 143 per additional level to 1685 at level 10. Mana cost 100 at level 1, maximum 424 at level 10. Cooldown remains 52 seconds initially and decreases by 1 per additional level to 43 seconds. Cast time is 0.2 seconds; provisional animation is 1 second. No lingering duration. The old description also mentions 15 percent additional electric skill damage after a previous water spell hit on the target; exact ownership and behavior of this legacy effect remain to be reviewed. |
| dmgType (Altformat) | spell |
| matk | 398 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 69 |
| skillName_de | Kugelblitz |
| skillpoints | 1 |
| animationDurationSeconds | 1 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,2 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 52 |
| cooldownScaling.perLevel | -1 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 100 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 100 |
| resourceCosts[0].scaling.perLevel | 36 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 398 |
| statScaling.matk.perLevel | 143 |
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
| levelProgression.rules[1].rule.rule.base | 100 |
| levelProgression.rules[1].rule.rule.perLevel | 36 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 398 |
| levelProgression.rules[2].rule.perLevel | 143 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 4: Abschöpfen

Dauerhafter Attributanteil: je gelernter Stufe +2,5 Intelligenz, +0,5 Willenskraft; auf Stufe 10 insgesamt +25 Intelligenz, +5 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Keine Stärke- oder Vitalitätsboni. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 30 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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
| skillName_eng | Skimming |
| category | passive |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +2,5 Intelligenz, +0,5 Willenskraft; auf Stufe 10 insgesamt +25 Intelligenz, +5 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Keine Stärke- oder Vitalitätsboni. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent attribute component: +2.5 Intelligence, +0.5 Wisdom per learned level; at level 10, +25 Intelligence, +5 Wisdom total. This component always applies independently of any triggered effects. No Strength or Vitality bonus, activation cost, cast time or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 4 |
| skillName_de | Abschöpfen |
| skillpoints | 1 |
| int | 2,5 |
| resourceCosts | [] |
| statScaling.int.type | linear |
| statScaling.int.base | 2,5 |
| statScaling.int.perLevel | 2,5 |
| statScaling.wis.type | linear |
| statScaling.wis.base | 0,5 |
| statScaling.wis.perLevel | 0,5 |
| wis | 0,5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | int |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 2,5 |
| levelProgression.rules[0].rule.perLevel | 2,5 |
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

### 166: Alles im Fluss

Gruppenbuff: je Stufe +1 Intelligenz und +1 Willenskraft, auf Stufe 10 jeweils +10. Kein direkter M-Angriffsbonus. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten: 53 + 28 je weiterer Stufe.

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 33 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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
| skillName_eng | Everything Flows |
| category | active |
| cd | 60 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Gruppenbuff: je Stufe +1 Intelligenz und +1 Willenskraft, auf Stufe 10 jeweils +10. Kein direkter M-Angriffsbonus. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten: 53 + 28 je weiterer Stufe. |
| description_eng | Group buff: +1 Intelligence and +1 Wisdom per level, reaching +10 each at level 10. No direct magical attack bonus. Duration 30 minutes, cooldown 60 seconds, cast time 0.3 seconds. Mana cost: 53 + 28 per additional level. |
| dmgType (Altformat) | buff |
| dur | 1.800 |
| int | 1 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 166 |
| skillName_de | Alles im Fluss |
| skillpoints | 1 |
| mana (Aktivierungskosten, kein Bonus) | 53 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 53 |
| resourceCosts[0].scaling.perLevel | 28 |
| statBonusTargets.int | selfAndAllies |
| statBonusTargets.wis | selfAndAllies |
| statScaling.int.type | linear |
| statScaling.int.base | 1 |
| statScaling.int.perLevel | 1 |
| statScaling.wis.type | linear |
| statScaling.wis.base | 1 |
| statScaling.wis.perLevel | 1 |
| castTimeSeconds | 0,3 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 53 |
| levelProgression.rules[0].rule.rule.perLevel | 28 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | int |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | wis |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 1 |
| levelProgression.rules[2].rule.perLevel | 1 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| target | group |
| type | buff |
| castTimeStatus | defined |
| statBonusUnits.int | flat |
| statBonusUnits.wis | flat |
| wis | 1 |

### 56: Geladener Nebel

Erzeugt geladenen Nebel. Magischer Skill-Grundschaden 177 auf Stufe 1, plus 63 je weiterer Stufe, bis zu 1059 auf Stufe 15. Der Schaden erfolgt einmalig beim Erzeugen des Nebels, nicht wiederholt. Gegner im Nebel verlieren direkt 10 Genauigkeit auf Stufe 1, gleichmäßig steigend auf 25 Genauigkeit auf Stufe 15. Elektroangriffe gegen Ziele im Nebel verursachen 2 Prozent mehr Schaden. Beide Flächeneffekte gelten nur, solange der Gegner im Nebel steht. Die Nebeldauer startet bei 4 Sekunden und steigt um 1 Sekunde je weiterer Stufe auf 18 Sekunden. Mana-Kosten 44 auf Stufe 1, +16 je weiterer Stufe, maximal 268 auf Stufe 15. Castzeit 0,4 Sekunden. Cooldown vorläufig gleichmäßig von 62 auf 37 Sekunden. Der kreisförmige Nebel hat 8 Meter Durchmesser beziehungsweise 4 Meter Radius. Die genaue Platzierung ist noch offen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 37 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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
| skillName_eng | Charged Mist |
| category | active |
| cd | 62 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erzeugt geladenen Nebel. Magischer Skill-Grundschaden 177 auf Stufe 1, plus 63 je weiterer Stufe, bis zu 1059 auf Stufe 15. Der Schaden erfolgt einmalig beim Erzeugen des Nebels, nicht wiederholt. Gegner im Nebel verlieren direkt 10 Genauigkeit auf Stufe 1, gleichmäßig steigend auf 25 Genauigkeit auf Stufe 15. Elektroangriffe gegen Ziele im Nebel verursachen 2 Prozent mehr Schaden. Beide Flächeneffekte gelten nur, solange der Gegner im Nebel steht. Die Nebeldauer startet bei 4 Sekunden und steigt um 1 Sekunde je weiterer Stufe auf 18 Sekunden. Mana-Kosten 44 auf Stufe 1, +16 je weiterer Stufe, maximal 268 auf Stufe 15. Castzeit 0,4 Sekunden. Cooldown vorläufig gleichmäßig von 62 auf 37 Sekunden. Der kreisförmige Nebel hat 8 Meter Durchmesser beziehungsweise 4 Meter Radius. Die genaue Platzierung ist noch offen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Creates charged mist. Magical skill base damage starts at 177 and increases by 63 per additional level to 1059 at level 15. Damage is applied once when the mist is created, not repeatedly. Enemies inside lose 10 direct Accuracy at level 1, increasing evenly to a reduction of 25 at level 15. Electric attacks against targets inside deal 2 percent more damage. Both area effects apply only while the target stays in the mist. Mist duration starts at 4 seconds and increases by 1 second per additional level to 18 seconds. Mana cost 44 at level 1, maximum 268 at level 15. Cast time is 0.4 seconds. Provisional cooldown decreases evenly from 62 to 37 seconds. The circular mist has an 8 metre diameter, or 4 metre radius. Exact placement remains pending. |
| dmgType (Altformat) | spell |
| matk | 177 |
| maxSkillLv | 15 |
| maxUpgradeLv | 10 |
| nr | 56 |
| skillName_de | Geladener Nebel |
| skillpoints | 1 |
| castTimeSeconds | 0,4 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 62 |
| cooldownScaling.perLevel | -1,786 |
| dur | 4 |
| durationScaling.type | linear |
| durationScaling.base | 4 |
| durationScaling.perLevel | 1 |
| effects[0].key | charged-mist-accuracy |
| effects[0].type | statModifier |
| effects[0].target | enemiesInArea |
| effects[0].stat | accuracy |
| effects[0].value | -10 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | -10 |
| effects[0].valueScaling.perLevel | -1,071 |
| effects[0].durationSeconds | 4 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 4 |
| effects[0].durationScaling.perLevel | 1 |
| effects[0].onlyWhileTargetInsideArea | true |
| effects[1].key | charged-mist-electric-bonus |
| effects[1].type | damageTakenBonus |
| effects[1].target | enemiesInArea |
| effects[1].damageSchool | electric |
| effects[1].value | 0,02 |
| effects[1].unit | fraction |
| effects[1].durationSeconds | 4 |
| effects[1].durationScaling.type | linear |
| effects[1].durationScaling.base | 4 |
| effects[1].durationScaling.perLevel | 1 |
| effects[1].onlyWhileTargetInsideArea | true |
| mana (Aktivierungskosten, kein Bonus) | 44 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 44 |
| resourceCosts[0].scaling.perLevel | 16 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 177 |
| statScaling.matk.perLevel | 63 |
| attackArea.shape | circle |
| attackArea.center | skillCenter |
| attackArea.radiusMeters | 4 |
| attackArea.target | enemiesInArea |
| attackArea.geometryStatus | defined |
| attackArea.timingStatus | pending |
| attackExecution.damageValueScope | perHit |
| attackExecution.timingStatus | defined |
| attackExecution.hitCount | 1 |
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
| levelProgression.rules[0].rule.rule.base | 62 |
| levelProgression.rules[0].rule.rule.perLevel | -1,786 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 4 |
| levelProgression.rules[1].rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | -10 |
| levelProgression.rules[2].rule.perLevel | -1,071 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | durationScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 4 |
| levelProgression.rules[3].rule.perLevel | 1 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 1 |
| levelProgression.rules[4].path[2] | durationScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 4 |
| levelProgression.rules[4].rule.perLevel | 1 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | resourceCosts |
| levelProgression.rules[5].path[1] | 0 |
| levelProgression.rules[5].path[2] | scaling |
| levelProgression.rules[5].rule.kind | bounded |
| levelProgression.rules[5].rule.min | 0 |
| levelProgression.rules[5].rule.rule.kind | linear |
| levelProgression.rules[5].rule.rule.base | 44 |
| levelProgression.rules[5].rule.rule.perLevel | 16 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.rules[6].path[0] | statScaling |
| levelProgression.rules[6].path[1] | matk |
| levelProgression.rules[6].rule.kind | linear |
| levelProgression.rules[6].rule.base | 177 |
| levelProgression.rules[6].rule.perLevel | 63 |
| levelProgression.rules[6].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 84: Lähmung

Passiver automatischer Effekt. Jeder eigene elektrische Angriff prüft bei bereitem internen Cooldown eine Chance von 10 Prozent, den betroffenen Gegner für 3 Sekunden zu paralysieren. Die Prüfung gilt je Angriffsaktion, nicht mehrfach allein aufgrund mehrerer Treffer derselben Anwendung. Begleiterangriffe zählen nicht. Der bisher gespeicherte interne Cooldown bleibt bei 30 Sekunden. Keine Aktivierungskosten. Levelskalierung, Zielauswahl bei Flächenangriffen und Behandlung periodischer Elektroticks sind noch offen.

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 42 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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
| skillName_eng | Paralyse |
| category | passive |
| cd | 30 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Passiver automatischer Effekt. Jeder eigene elektrische Angriff prüft bei bereitem internen Cooldown eine Chance von 10 Prozent, den betroffenen Gegner für 3 Sekunden zu paralysieren. Die Prüfung gilt je Angriffsaktion, nicht mehrfach allein aufgrund mehrerer Treffer derselben Anwendung. Begleiterangriffe zählen nicht. Der bisher gespeicherte interne Cooldown bleibt bei 30 Sekunden. Keine Aktivierungskosten. Levelskalierung, Zielauswahl bei Flächenangriffen und Behandlung periodischer Elektroticks sind noch offen. |
| description_eng | Automatic passive effect. Each own electric attack checks a 10 percent chance to paralyse the affected enemy for 3 seconds while the internal cooldown is ready. The check applies per attack action, not repeatedly merely because one activation has multiple hits. Companion attacks do not count. Existing internal cooldown remains 30 seconds. No activation costs. Level scaling, target selection for area attacks and treatment of periodic electric ticks remain pending. |
| dmgType (Altformat) | passive |
| dur | 3 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 84 |
| skillName_de | Lähmung |
| skillpoints | 1 |
| activation | automatic |
| effects[0].key | electric-paralysis |
| effects[0].type | control |
| effects[0].target | enemy |
| effects[0].controlKind | paralysis |
| effects[0].value | 1 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 3 |
| effects[0].actionRestrictionsStatus | pending |
| resourceCosts | [] |
| triggerCondition.type | ownAttack |
| triggerCondition.damageSchool | electric |
| triggerCondition.chancePerCheck | 0,1 |
| triggerCondition.oncePerAttackAction | true |
| triggerCondition.excludeCompanionAttacks | true |
| triggerCondition.requiresCooldownReady | true |
| triggerConditionStatus | defined |
| levelProgression.version | 1 |
| levelProgression.rules | [] |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 81: Naturgewalt

Dauerhafter Attributanteil: je gelernter Stufe +5 Intelligenz, +5 Vitalität; auf Stufe 1 insgesamt +5 Intelligenz, +5 Vitalität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Eine einzige lernbare Stufe. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 42 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillPointCosts.firstLevel | 300 |
| skillPointCosts.rankCosts.0 | 300 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| skillName_eng | Force of Nature |
| category | passive |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +5 Intelligenz, +5 Vitalität; auf Stufe 1 insgesamt +5 Intelligenz, +5 Vitalität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Eine einzige lernbare Stufe. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent attribute component: +5 Intelligence, +5 Vitality per learned level; at level 1, +5 Intelligence, +5 Vitality total. This component always applies independently of any triggered effects. One learnable level. No activation cost, cast time or cooldown. |
| dmgType (Altformat) | passive |
| int | 5 |
| maxSkillLv | 1 |
| maxUpgradeLv | 10 |
| nr | 81 |
| skillName_de | Naturgewalt |
| skillpoints | 1 |
| vita | 5 |
| resourceCosts | [] |
| statScaling.int.type | linear |
| statScaling.int.base | 5 |
| statScaling.int.perLevel | 5 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 5 |
| statScaling.vita.perLevel | 5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | int |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 5 |
| levelProgression.rules[0].rule.perLevel | 5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | vita |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 5 |
| levelProgression.rules[1].rule.perLevel | 5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 123: Wiederaufladung

Reduziert als passiver Bonus den Cooldown deiner Skills auf Skilllevel 1 um 5 Sekunden, auf Skilllevel 2 um 10 Sekunden und auf Skilllevel 3 um 15 Sekunden.

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 42 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillPointCosts.firstLevel | 80 |
| skillPointCosts.rankCosts.0 | 80 |
| skillPointCosts.rankCosts.1 | 100 |
| skillPointCosts.rankCosts.2 | 120 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| skillName_eng | Recharge |
| category | passive |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Reduziert als passiver Bonus den Cooldown deiner Skills auf Skilllevel 1 um 5 Sekunden, auf Skilllevel 2 um 10 Sekunden und auf Skilllevel 3 um 15 Sekunden. |
| description_eng | Passively reduces the cooldown of your skills by 5 seconds at skill level 1, 10 seconds at skill level 2 and 15 seconds at skill level 3. |
| dmgType (Altformat) | passive |
| maxSkillLv | 3 |
| maxUpgradeLv | 10 |
| nr | 123 |
| skillName_de | Wiederaufladung |
| skillpoints | 1 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 5 |
| effects[0].valueScaling.perLevel | 5 |
| effects[0].type | cooldownReduction |
| effects[0].target | self |
| effects[0].value | 5 |
| effects[0].unit | flat |
| effects[0].appliesTo | allSkills |
| effects[0].damageTypes | [] |
| effects[0].durationSeconds | 0 |
| effects[0].key | all-skills-cooldown-reduction |
| effectsVersion | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 5 |
| levelProgression.rules[0].rule.perLevel | 5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 205: Katalysator Unrein

Erschafft ein Verstärkungsfeld für Gruppenmitglieder der Völker Menschen und Umbra. Im Feld steigen ihr physischer Angriff um 25 und ihr magischer Angriff um 50 pro Skilllevel. Auf Stufe 5 sind dies +125 P-Angriff und +250 M-Angriff. Die Felddauer beträgt 24 Sekunden auf Stufe 1 und steigt um 2 Sekunden je weiterer Stufe auf 32 Sekunden. Der Cooldown beginnt bei 180 Sekunden und sinkt um 2 Sekunden je weiterer Stufe auf 172 Sekunden. In einem bereits von einem Katalysator belegten Gebiet kann kein weiterer Katalysator platziert werden. Castzeit 1,8 Sekunden. Mana-Kosten unverändert 198 auf Stufe 1, plus 87 je weiterer Stufe bis 546 auf Stufe 5.

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 47 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillPointCosts.firstLevel | 30 |
| skillPointCosts.rankCosts.0 | 30 |
| skillPointCosts.rankCosts.1 | 45 |
| skillPointCosts.rankCosts.2 | 60 |
| skillPointCosts.rankCosts.3 | 75 |
| skillPointCosts.rankCosts.4 | 90 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| skillName_eng | Catalyst Impure |
| category | active |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erschafft ein Verstärkungsfeld für Gruppenmitglieder der Völker Menschen und Umbra. Im Feld steigen ihr physischer Angriff um 25 und ihr magischer Angriff um 50 pro Skilllevel. Auf Stufe 5 sind dies +125 P-Angriff und +250 M-Angriff. Die Felddauer beträgt 24 Sekunden auf Stufe 1 und steigt um 2 Sekunden je weiterer Stufe auf 32 Sekunden. Der Cooldown beginnt bei 180 Sekunden und sinkt um 2 Sekunden je weiterer Stufe auf 172 Sekunden. In einem bereits von einem Katalysator belegten Gebiet kann kein weiterer Katalysator platziert werden. Castzeit 1,8 Sekunden. Mana-Kosten unverändert 198 auf Stufe 1, plus 87 je weiterer Stufe bis 546 auf Stufe 5. |
| description_eng | Creates an enhancement field for Human and Umbra group members. Within the field, physical attack increases by 25 and magical attack by 50 per skill level, reaching +125 physical and +250 magical attack at level 5. Field duration starts at 24 seconds and increases by 2 per additional level to 32 seconds. Cooldown starts at 180 seconds and decreases by 2 per additional level to 172 seconds. Another catalyst cannot be placed in an area already occupied by a catalyst. Cast time is 1.8 seconds. Mana cost remains 198 at level 1, plus 87 per additional level to 546 at level 5. |
| dmgType (Altformat) | spell |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 205 |
| skillName_de | Katalysator Unrein |
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
| effects[0].allowedRaces[0] | Human |
| effects[0].allowedRaces[1] | Umbra |
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
| effects[1].allowedRaces[0] | Human |
| effects[1].allowedRaces[1] | Umbra |
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

### 57: Gezielter Blitz

Schleudert einen gezielten Blitzschlag auf einen Gegner und verursacht einmalig magischen Grundschaden von 293 auf Stufe 1, plus 105 je weiterer Stufe, bis zu 1238 auf Stufe 10. Mana-Kosten 73 auf Stufe 1, +26 je weiterer Stufe, maximal 307 auf Stufe 10. Der Cooldown sinkt von 42 um 1 Sekunde je weiterer Stufe auf 33 Sekunden. Castzeit 0,2 Sekunden. Die Animation dauert vorläufig 1 Sekunde; keine anhaltende Wirkungsdauer oder Schaden über Zeit. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 55 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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
| skillName_eng | Targeted Lightning |
| category | active |
| cd | 42 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Schleudert einen gezielten Blitzschlag auf einen Gegner und verursacht einmalig magischen Grundschaden von 293 auf Stufe 1, plus 105 je weiterer Stufe, bis zu 1238 auf Stufe 10. Mana-Kosten 73 auf Stufe 1, +26 je weiterer Stufe, maximal 307 auf Stufe 10. Der Cooldown sinkt von 42 um 1 Sekunde je weiterer Stufe auf 33 Sekunden. Castzeit 0,2 Sekunden. Die Animation dauert vorläufig 1 Sekunde; keine anhaltende Wirkungsdauer oder Schaden über Zeit. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Hurls a targeted lightning strike at an enemy, dealing magical base damage once, starting at 293 at level 1 and increasing by 105 per additional level to 1238 at level 10. Mana cost 73 at level 1, maximum 307 at level 10. Cooldown decreases from 42 by 1 second per additional level to 33 seconds. Cast time is 0.2 seconds. Provisional animation duration is 1 second, with no lasting effect or damage over time. |
| dmgType (Altformat) | spell |
| matk | 293 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 57 |
| skillName_de | Gezielter Blitz |
| skillpoints | 1 |
| animationDurationSeconds | 1 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,2 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 42 |
| cooldownScaling.perLevel | -1 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 73 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 73 |
| resourceCosts[0].scaling.perLevel | 26 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 293 |
| statScaling.matk.perLevel | 105 |
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
| levelProgression.rules[0].rule.rule.base | 42 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 73 |
| levelProgression.rules[1].rule.rule.perLevel | 26 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 293 |
| levelProgression.rules[2].rule.perLevel | 105 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 32: Elementarenergie

Permanenter passiver Skill mit automatischem Kampfeffekt. Jeder dritte eigene Angriff gegen einen Gegner prüft die Auslösechance, sofern der interne Cooldown bereit ist. Auto-Attacks und Angriffsskills zählen; Mehrfachtreffer derselben Anwendung zählen als eine Angriffsaktion. Begleiterangriffe zählen nicht. Keine zusätzliche Mindestkampfdauer. Die Chance steigt gleichmäßig von 15 Prozent auf Stufe 1 auf 20 Prozent auf Stufe 10. Bei Auslösung erhältst du für 30 Sekunden 2 Intelligenz auf Stufe 1, plus 1 je weiterer Stufe, bis zu 11 auf Stufe 10. Die magische Verteidigung des betroffenen Gegners sinkt dabei unverändert für 30 Sekunden um 10 Prozent. Der interne Cooldown sinkt gleichmäßig von 120 auf 115 Sekunden. Keine manuelle Aktivierung. Detailregeln des Angriffszählers und Zielauswahl bei Flächenangriffen sind noch offen.

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 60 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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
| skillName_eng | Elemental Energy |
| category | passive |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanenter passiver Skill mit automatischem Kampfeffekt. Jeder dritte eigene Angriff gegen einen Gegner prüft die Auslösechance, sofern der interne Cooldown bereit ist. Auto-Attacks und Angriffsskills zählen; Mehrfachtreffer derselben Anwendung zählen als eine Angriffsaktion. Begleiterangriffe zählen nicht. Keine zusätzliche Mindestkampfdauer. Die Chance steigt gleichmäßig von 15 Prozent auf Stufe 1 auf 20 Prozent auf Stufe 10. Bei Auslösung erhältst du für 30 Sekunden 2 Intelligenz auf Stufe 1, plus 1 je weiterer Stufe, bis zu 11 auf Stufe 10. Die magische Verteidigung des betroffenen Gegners sinkt dabei unverändert für 30 Sekunden um 10 Prozent. Der interne Cooldown sinkt gleichmäßig von 120 auf 115 Sekunden. Keine manuelle Aktivierung. Detailregeln des Angriffszählers und Zielauswahl bei Flächenangriffen sind noch offen. |
| description_eng | Permanent passive skill with an automatic combat effect. Every third own attack against an enemy checks the proc chance while the internal cooldown is ready. Basic attacks and attack skills count; multiple hits from one activation count as one attack action. Companion attacks do not count. No additional minimum combat duration. Chance increases evenly from 15 percent at level 1 to 20 percent at level 10. Triggering grants 2 Intelligence at level 1 plus 1 per additional level to 11 at level 10, lasting 30 seconds. The affected enemy magical defence is still reduced by 10 percent for 30 seconds. Internal cooldown decreases evenly from 120 to 115 seconds. No manual activation. Detailed attack-counter lifecycle and target selection for area attacks remain pending. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 32 |
| skillName_de | Elementarenergie |
| skillpoints | 1 |
| activation | automatic |
| cd | 120 |
| dur | 30 |
| triggerConditionStatus | defined |
| effects[0].type | statModifier |
| effects[0].target | self |
| effects[0].stat | int |
| effects[0].value | 2 |
| effects[0].unit | flat |
| effects[0].damageTypes | [] |
| effects[0].durationSeconds | 30 |
| effects[0].key | self-intelligence |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 2 |
| effects[0].valueScaling.perLevel | 1 |
| effects[0].progressionStatus | defined |
| effects[1].type | statModifier |
| effects[1].target | enemy |
| effects[1].stat | mdef |
| effects[1].value | -0,1 |
| effects[1].unit | fraction |
| effects[1].reference | targetStat |
| effects[1].damageTypes | [] |
| effects[1].durationSeconds | 30 |
| effects[1].key | enemy-magic-defense |
| effectsVersion | 1 |
| triggerCondition.type | ownAttack |
| triggerCondition.checkEveryAttackActions | 3 |
| triggerCondition.chancePerCheck | 0,15 |
| triggerCondition.includesBasicAttacks | true |
| triggerCondition.includesAttackSkills | true |
| triggerCondition.oncePerAttackAction | true |
| triggerCondition.excludeCompanionAttacks | true |
| triggerCondition.requiresCooldownReady | true |
| triggerCondition.chancePerCheckScaling.type | linear |
| triggerCondition.chancePerCheckScaling.base | 0,15 |
| triggerCondition.chancePerCheckScaling.perLevel | 0,006 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 120 |
| cooldownScaling.perLevel | -0,556 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | triggerCondition |
| levelProgression.rules[1].path[1] | chancePerCheckScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,15 |
| levelProgression.rules[1].rule.perLevel | 0,006 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | cooldownScaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0,1 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 120 |
| levelProgression.rules[2].rule.rule.perLevel | -0,556 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 169: Innere Unruhe

Eigenbuff mit wechselndem magischem Schadensbonus. Für jede eigene magische Skillanwendung wird einmal ein zusätzlicher flacher Skillschadenswert neu ausgewürfelt. Dieser eine Wurf wird auf jeden zugehörigen magischen Treffer und jeden magischen Schadenstick dieser Anwendung angewendet, auch bei mehrteiligen Skills wie Tobender Sturm. Normale Auto-Attacks und Begleiterangriffe sind ausgeschlossen. Auf Stufe 1 liegt der Bonus zwischen 13 und 31. Die Untergrenze steigt je weiterer Stufe um 5, die Obergrenze um 10, bis zu 58 bis 121 auf Stufe 10. Der Buff gibt keine Stärke, Intelligenz oder Angriffsgeschwindigkeit mehr. Dauer steigt gleichmäßig von 30 auf 35 Sekunden. Cooldown 70 Sekunden, minus 1 je weiterer Stufe, bis zu 61 Sekunden. Castzeit fest 0,1 Sekunden. Die genaue Zufallsverteilung innerhalb des Wertebereichs ist noch offen; Mehrfachtreffer und Schadensticks sind ausdrücklich eingeschlossen. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 60 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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
| skillName_eng | Inner Restlessness |
| category | active |
| cd | 70 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff mit wechselndem magischem Schadensbonus. Für jede eigene magische Skillanwendung wird einmal ein zusätzlicher flacher Skillschadenswert neu ausgewürfelt. Dieser eine Wurf wird auf jeden zugehörigen magischen Treffer und jeden magischen Schadenstick dieser Anwendung angewendet, auch bei mehrteiligen Skills wie Tobender Sturm. Normale Auto-Attacks und Begleiterangriffe sind ausgeschlossen. Auf Stufe 1 liegt der Bonus zwischen 13 und 31. Die Untergrenze steigt je weiterer Stufe um 5, die Obergrenze um 10, bis zu 58 bis 121 auf Stufe 10. Der Buff gibt keine Stärke, Intelligenz oder Angriffsgeschwindigkeit mehr. Dauer steigt gleichmäßig von 30 auf 35 Sekunden. Cooldown 70 Sekunden, minus 1 je weiterer Stufe, bis zu 61 Sekunden. Castzeit fest 0,1 Sekunden. Die genaue Zufallsverteilung innerhalb des Wertebereichs ist noch offen; Mehrfachtreffer und Schadensticks sind ausdrücklich eingeschlossen. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff granting a varying magical damage bonus. Roll one additional flat skill-damage value per own magical skill application. Reuse that roll on every associated magical hit and damage-over-time tick, including multi-hit skills such as Raging Storm. Normal basic attacks and companion attacks are excluded. At level 1 the bonus ranges from 13 to 31. Each additional level adds 5 to the minimum and 10 to the maximum, reaching 58 to 121 at level 10. No longer grants Strength, Intelligence or attack speed. Duration increases evenly from 30 to 35 seconds. Cooldown starts at 70 seconds and decreases by 1 per additional level to 61 seconds. Fixed cast time 0.1 seconds. The exact random distribution within the range remains pending; multi-hit attacks and damage-over-time ticks are explicitly included. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 167 at level 10, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 30 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 169 |
| skillName_de | Innere Unruhe |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 70 |
| cooldownScaling.perLevel | -1 |
| durationScaling.type | linear |
| durationScaling.base | 30 |
| durationScaling.perLevel | 0,556 |
| effects[0].key | inner-restlessness-random-magic |
| effects[0].type | randomDamageBonus |
| effects[0].target | self |
| effects[0].value | 13 |
| effects[0].unit | flat |
| effects[0].appliesTo | allSkills |
| effects[0].damageTypes[0] | magical |
| effects[0].durationSeconds | 30 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 30 |
| effects[0].durationScaling.perLevel | 0,556 |
| effects[0].randomDamageRange.minimum | 13 |
| effects[0].randomDamageRange.maximum | 31 |
| effects[0].randomDamageRange.minimumPerAdditionalLevel | 5 |
| effects[0].randomDamageRange.maximumPerAdditionalLevel | 10 |
| effects[0].randomDamageRange.rerollPerAttackAction | true |
| effects[0].randomDamageRange.distributionStatus | pending |
| effects[0].randomDamageRange.rerollPerSkillApplication | true |
| effects[0].randomDamageRange.reuseRollForAllHitsAndTicks | true |
| effects[0].appliesToBasicAttacks | false |
| effects[0].appliesToPeriodicDamage | true |
| effects[0].bonusApplicationScope | eachSkillHit |
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
| levelProgression.rules[0].rule.rule.base | 70 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 30 |
| levelProgression.rules[1].rule.perLevel | 0,556 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | durationScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 30 |
| levelProgression.rules[2].rule.perLevel | 0,556 |
| levelProgression.rules[2].source | storedFormula |
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

### 112: Tobender Sturm

Eine Gewitterwolke bedeckt einen kreisförmigen Bereich mit 16 Metern Durchmesser beziehungsweise 8 Metern Radius. Kein Initialtreffer: Der erste volle Blitzschaden erfolgt 1 Sekunde nach Entstehung der Wolke, weitere Blitzwellen folgen alle 2 Sekunden. Pro Welle werden höchstens 5 Gegner innerhalb der Fläche getroffen, sowohl im PvE als auch im PvP. Bei jeder Welle werden die Ziele neu zufällig gewählt; sind weniger Gegner vorhanden, können entsprechend weniger getroffen werden. Die Wolke besteht auf Stufe 1 für 4 Sekunden und je weiterer Stufe 1,5 Sekunden länger, bis zu 17,5 Sekunden auf Stufe 10. Das ergibt 2 bis 9 Blitzwellen. Auf Stufe 10 trifft die letzte Welle bei Sekunde 17; die Wolke läuft danach noch 0,5 Sekunden aus. Jeder Blitz verursacht 266 magischen Skill-Grundschaden auf Stufe 1, plus 31 je weiterer Stufe, bis zu 545 auf Stufe 10, zusätzlich zum Charakter-M-Angriff. Mana-Kosten 213 auf Stufe 1, Stufenwerte 213, 356, 525, 574, 780, 1010, 1266, 1352, 1645, 1962, maximal 1962 auf Stufe 10. Castzeit 0,8 Sekunden. Cooldown beginnt bei 100 Sekunden und sinkt um 1 Sekunde je weiterer Stufe auf 91 Sekunden auf Stufe 10. Der Sturm hat keinen eigenen garantierten Stun; die passive Lähmung unterliegt ihren eigenen Regeln. Platzierung und genaue Proc-Prüfung periodischer Blitzwellen bleiben zu klären. Aktuelle Mana-Gruppe: finisher (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| learningRequirements.minimumCharacterLevel | 65 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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
| skillName_eng | Raging Storm |
| category | active |
| cd | 100 |
| charClass[0] | Herbalist |
| charClass[1] | Witcher |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eine Gewitterwolke bedeckt einen kreisförmigen Bereich mit 16 Metern Durchmesser beziehungsweise 8 Metern Radius. Kein Initialtreffer: Der erste volle Blitzschaden erfolgt 1 Sekunde nach Entstehung der Wolke, weitere Blitzwellen folgen alle 2 Sekunden. Pro Welle werden höchstens 5 Gegner innerhalb der Fläche getroffen, sowohl im PvE als auch im PvP. Bei jeder Welle werden die Ziele neu zufällig gewählt; sind weniger Gegner vorhanden, können entsprechend weniger getroffen werden. Die Wolke besteht auf Stufe 1 für 4 Sekunden und je weiterer Stufe 1,5 Sekunden länger, bis zu 17,5 Sekunden auf Stufe 10. Das ergibt 2 bis 9 Blitzwellen. Auf Stufe 10 trifft die letzte Welle bei Sekunde 17; die Wolke läuft danach noch 0,5 Sekunden aus. Jeder Blitz verursacht 266 magischen Skill-Grundschaden auf Stufe 1, plus 31 je weiterer Stufe, bis zu 545 auf Stufe 10, zusätzlich zum Charakter-M-Angriff. Mana-Kosten 213 auf Stufe 1, Stufenwerte 213, 356, 525, 574, 780, 1010, 1266, 1352, 1645, 1962, maximal 1962 auf Stufe 10. Castzeit 0,8 Sekunden. Cooldown beginnt bei 100 Sekunden und sinkt um 1 Sekunde je weiterer Stufe auf 91 Sekunden auf Stufe 10. Der Sturm hat keinen eigenen garantierten Stun; die passive Lähmung unterliegt ihren eigenen Regeln. Platzierung und genaue Proc-Prüfung periodischer Blitzwellen bleiben zu klären. Aktuelle Mana-Gruppe: finisher (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | A thundercloud covers a circular area with a 16 metre diameter and 8 metre radius. No initial hit: the first full lightning damage occurs 1 second after the cloud appears, with subsequent waves every 2 seconds. Each wave hits at most 5 enemies in the area in both PvE and PvP. Targets are randomly selected again for each wave; fewer enemies allow fewer targets. Cloud duration starts at 4 seconds and increases by 1.5 per additional level to 17.5 seconds at level 10, producing 2 to 9 waves. At level 10 the final wave hits at second 17 and the cloud fades over the remaining 0.5 seconds. Each lightning hit deals 266 magical skill base damage at level 1 plus 31 per additional level to 545 at level 10, plus character magical attack. Mana cost 213 at level 1, maximum 1962 at level 10. Cast time is 0.8 seconds. Cooldown starts at 100 seconds and decreases by 1 second per additional level to 91 seconds at level 10. The storm itself does not guarantee a stun; passive Paralysis follows its own rules. Placement and exact proc checks for periodic lightning waves remain pending. |
| dmgType (Altformat) | spell |
| matk | 266 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 112 |
| skillName_de | Tobender Sturm |
| skillpoints | 1 |
| attackArea.shape | circle |
| attackArea.center | skillCenter |
| attackArea.radiusMeters | 8 |
| attackArea.geometryStatus | defined |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | perHit |
| attackArea.timingStatus | defined |
| attackArea.maxTargets | 5 |
| attackArea.targetSelection | randomEachTick |
| castTimeSeconds | 0,8 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 100 |
| cooldownScaling.perLevel | -1 |
| dur | 4 |
| durationScaling.type | linear |
| durationScaling.base | 4 |
| durationScaling.perLevel | 1,5 |
| effects[0].key | raging-storm-lightning |
| effects[0].type | periodicDamage |
| effects[0].target | enemiesInArea |
| effects[0].damageSchool | electric |
| effects[0].value | 266 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 266 |
| effects[0].valueScaling.perLevel | 31 |
| effects[0].durationSeconds | 4 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 4 |
| effects[0].durationScaling.perLevel | 1,5 |
| effects[0].intervalSeconds | 2 |
| effects[0].firstTickAfterSeconds | 1 |
| effects[0].addsCasterMagicalAttack | true |
| effects[0].onlyWhileTargetInsideArea | true |
| effects[0].damageTypes[0] | magical |
| effects[0].periodicDamageKind | areaAttack |
| mana (Aktivierungskosten, kein Bonus) | 213 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.values[0] | 213 |
| resourceCosts[0].scaling.values[1] | 356 |
| resourceCosts[0].scaling.values[2] | 525 |
| resourceCosts[0].scaling.values[3] | 574 |
| resourceCosts[0].scaling.values[4] | 780 |
| resourceCosts[0].scaling.values[5] | 1.010 |
| resourceCosts[0].scaling.values[6] | 1.266 |
| resourceCosts[0].scaling.values[7] | 1.352 |
| resourceCosts[0].scaling.values[8] | 1.645 |
| resourceCosts[0].scaling.values[9] | 1.962 |
| resourceCosts[0].scaling.base | 213 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 266 |
| statScaling.matk.perLevel | 31 |
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
| levelProgression.rules[0].rule.rule.base | 100 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 4 |
| levelProgression.rules[1].rule.perLevel | 1,5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 266 |
| levelProgression.rules[2].rule.perLevel | 31 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | durationScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 4 |
| levelProgression.rules[3].rule.perLevel | 1,5 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | resourceCosts |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | scaling |
| levelProgression.rules[4].rule.kind | outputCost |
| levelProgression.rules[4].rule.factor | 0,4 |
| levelProgression.rules[4].rule.basis | damage |
| levelProgression.rules[4].rule.minimum | 0 |
| levelProgression.rules[4].source | verifiedManaPricing |
| levelProgression.rules[5].path[0] | statScaling |
| levelProgression.rules[5].path[1] | matk |
| levelProgression.rules[5].rule.kind | linear |
| levelProgression.rules[5].rule.base | 266 |
| levelProgression.rules[5].rule.perLevel | 31 |
| levelProgression.rules[5].source | storedFormula |
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

Vollständiger Ausbau: **8227 SP**. Regulär 300 SP je Skill, ab erstem Lernlevel 55 insgesamt 400 SP; Taming-Skills behalten ihre Sonderkosten.

| Nr | Skill | SP je Skillstufe | Gesamt |
| ---: | --- | --- | ---: |
| 4 | Abschöpfen | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 5 | Adaption | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 16 | Wasserfesseln | 12 / 16 / 20 / 24 / 28 / 32 / 36 / 40 / 44 / 48 | 300 |
| 29 | Eislanze | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 31 | Elektrisches Feld | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 32 | Elementarenergie | 13 / 19 / 25 / 31 / 37 / 43 / 49 / 55 / 61 / 67 | 400 |
| 44 | Erweiterung des Geistes | 12 / 16 / 20 / 24 / 28 / 32 / 36 / 40 / 44 / 48 | 300 |
| 46 | Ewiges Eis | 6 / 8 / 10 / 12 / 14 / 16 / 18 / 20 / 22 / 24 / 26 / 28 / 30 / 32 / 34 | 300 |
| 56 | Geladener Nebel | 6 / 8 / 10 / 12 / 14 / 16 / 18 / 20 / 22 / 24 / 26 / 28 / 30 / 32 / 34 | 300 |
| 57 | Gezielter Blitz | 13 / 19 / 25 / 31 / 37 / 43 / 49 / 55 / 61 / 67 | 400 |
| 69 | Kugelblitz | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 71 | Lebensessenz | 30 / 45 / 60 / 75 / 90 | 300 |
| 81 | Naturgewalt | 300 | 300 |
| 84 | Lähmung | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 112 | Tobender Sturm | 13 / 19 / 25 / 31 / 37 / 43 / 49 / 55 / 61 / 67 | 400 |
| 123 | Wiederaufladung | 80 / 100 / 120 | 300 |
| 133 | Tamen | 10 | 10 |
| 134 | Bindung | 6 | 6 |
| 135 | Kontrolle | 4 | 4 |
| 136 | Beschwören | 1 | 1 |
| 137 | Zurückrufen | 1 | 1 |
| 138 | Zucht | 5 | 5 |
| 139 | Ausdauertraining | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 144 | Rüstungstraining | 1 / 7 / 14 / 20 / 27 / 33 / 40 / 46 / 53 / 59 | 300 |
| 164 | Natürlicher Schutz | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 165 | Aura Unterdrückung | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 166 | Alles im Fluss | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 167 | Entgiftung | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 169 | Innere Unruhe | 13 / 19 / 25 / 31 / 37 / 43 / 49 / 55 / 61 / 67 | 400 |
| 201 | Waffentraining | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 205 | Katalysator Unrein | 30 / 45 / 60 / 75 / 90 | 300 |
| 221 | Windschlitzer | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
<!-- full-skill-point-costs:end -->

### Vollständige Herbalist-Baumverbindungen vom 26.10.2026

- Elektrisches Feld ← Wasserfesseln; Eislanze ← Elektrisches Feld; Ewiges Eis und Windschlitzer ← Eislanze.
- Entgiftung ← Ausdauertraining; Natürlicher Schutz ← Entgiftung.
- Aura Unterdrückung ← Erweiterung des Geistes; Lebensessenz ← Aura Unterdrückung; Naturgewalt ← Lebensessenz.
- Kugelblitz ← Elektrisches Feld; Geladener Nebel ← Kugelblitz; Lähmung ← Geladener Nebel; Gezielter Blitz ← Lähmung; Tobender Sturm ← Gezielter Blitz.
- Abschöpfen ← Waffentraining; Alles im Fluss ← Abschöpfen.
- Wiederaufladung ← Naturgewalt; Katalysator Unrein ← Wiederaufladung; Elementarenergie ← Katalysator Unrein; Innere Unruhe ← Elementarenergie.

Tobender Sturm erhält ausdrücklich vorerst KEINE zusätzliche Naturgewalt-Voraussetzung. Alle 32 Skills angebunden, keine Kreise oder fehlenden Vorgänger. Es gilt Vorgängerrang 3, begrenzt auf das Klassenmaximum; bestehende Starter-Ausnahmen bleiben erhalten. Lernlevel, Kosten und Wirkungen unverändert. Gleichzeitige Freischaltungen von Naturgewalt/Wiederaufladung sowie Elementarenergie/Innere Unruhe werden nebeneinander dargestellt. Gemeinsame Übernahme mit Ritter und Technischer Perfektion nach erfolgreicher Prüfung und normalem Speichern der Sitzung angefordert.

Übernahme am 26.10.2026 abgeschlossen: 63 Backendtests und zwölf native Tests samt Herbalist-Geometrie erfolgreich. Gemeinsam mit Ritter/Schurki installiert, Backend/Dedicated/Editor neu gestartet. Herbi regulär eingelassen und Skillansicht geöffnet; keine persönlichen Ränge oder SP verändert. Tobender Sturm weiterhin ausschließlich hinter Gezielter Blitz.

### Tobender Sturm: abschließende Doppelvoraussetzung und Goldmarkierung

Die spätere Nutzerkorrektur ersetzt die vorläufige Einzelvoraussetzung oben: Tobender Sturm #112 benötigt Gezielter Blitz #57 auf Rang 10 UND Naturgewalt #81 auf Rang 1. Neue Verbindung verlässt Naturgewalt senkrecht nach unten und trifft Tobender Sturm von rechts mit genau einem rechten Winkel; keine zusätzlichen Umwege. Übrige Vorgängerränge bleiben bei 3, begrenzt auf das Klassenmaximum, einschließlich der bestehenden Starter-Ausnahmen. Keine zusätzlichen Charakterlevel-Grenzen für spätere Skillränge beschlossen. Persönliche Ränge und SP bleiben erhalten.

Doppelvoraussetzung und direkte Seitenverbindung nach 63 erfolgreichen Backendtests und zwölf nativen Tests ins Live-Projekt übernommen. Gemeinsamer Neustart mit kräftiger Goldauswahl und nicht mehr durch Rangaktualisierungen verworfener Lernanimation erfolgt; Backup tmp/before-storm-gold-review-20261026-142926.

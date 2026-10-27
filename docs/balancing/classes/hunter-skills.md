# Jäger / Schütze: Werte und Skillprüfung

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
| 6 | Feuerpfeil | — | — | 51 | 20 | 12 |
| 8 | Ausweichrolle | — | — | 14 | 2 | 130 |
| 8 | Doppelsprung | — | — | 25 | 10 | 10 |
| 9 | Erweiterung der Sinne | — | — | 43 | 10 | 12 |
| 10 | Ausweichtraining | — | — | 142 | 10 | 10 |
| 12 | Kettenschuss | — | — | 63 | 5 | 30 |
| 15 | Bogenschießtraining | — | — | 18 | 10 | 10 |
| 17 | Gebundener Schuss | — | — | 53 | 10 | 10 |
| 20 | Treffsicherheit | — | — | 153 | 10 | 10 |
| 21 | Schockschuss | — | — | 97 | 10 | 10 |
| 22 | Entzugspfeil | — | — | 37 | 10 | 10 |
| 23 | Giftpfeil | — | — | 152 | 10 | 10 |
| 27 | Voll Durchziehen | — | — | 122 | 10 | 10 |
| 30 | Auge des Falken | — | — | 154 | 10 | 10 |
| 33 | Auf der Jagd | — | — | 10 | 5 | 30 |
| 37 | Macht des Begleiters | — | — | 150 | 10 | 10 |
| 37 | Verstärkter Pfeil | — | — | 121 | 20 | 5 |
| 42 | Seelenbegleiter | — | — | 226 | 1 | 300 |
| 55 | Präzisionsschuss | — | — | 86 | 15 | 8 |
| 60 | Pfeil der Vorfahren | — | — | 157 | 10 | 13 |
| 60 | Waldläufer | — | — | 156 | 1 | 400 |
| 65 | Salve | — | — | 88 | 5 | 40 |

[Alte Lernlevel als Vorlage](../legacy-skill-learning-levels.md) · [Alle Klassen](../skill-learning-index.md)
<!-- skill-learning-overview:end -->

**32 Skills. Gesamte SP-Kosten noch offen.** Giftpfeil hat zehn statt zwanzig Stufen bei unveränderten Start- und Maximalwerten: 3 bis 60 Giftschaden je Sekunde, drei Sekunden Vergiftung, 3 % Chance je treffendem Pfeil, einmalig 50 bis 297 Mana. Waldläufer hat eine statt drei Stufen: +2 Agilität, +3 Geschicklichkeit, kein direkter P-Angriffsbonus, fest 54 Mana. Beide Buffs dauern 600 Sekunden, haben 60 Sekunden Cooldown und feste Castzeit 0,1 Sekunden. Zusammen entfallen zwölf Skillpunkte.

Einteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.

**32 unterschiedliche zugeordnete Skills: 20 aktive und 12 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie bei den bisher geprüften Klassen. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.

| Art | Anzahl | Skills |
| --- | ---: | --- |
| Übrige Passive einschließlich Procs | 9 | Adaption, Auf der Jagd, Bogenschießtraining, Erweiterung der Sinne, Voll Durchziehen, Ausdauertraining, Ausweichtraining, Rüstungstraining, Waffentraining |
| Bewegungsbuffs | 2 | Ausweichrolle, Doppelsprung |
| Aktive Skills (Angriff/Heilung/Unterstützung) | 9 | Entzugspfeil, Feuerpfeil, Gebundener Schuss, Kettenschuss, Präzisionsschuss, Salve, Schockschuss, Verstärkter Pfeil, Seelenbegleiter |
| Kreaturen aktiv | 3 | Tamen, Beschwören, Zurückrufen |
| Kreaturen passiv | 3 | Bindung, Kontrolle, Zucht |
| Gruppenbuffs | 1 | Macht des Begleiters |
| Eigenbuffs | 5 | Giftpfeil, Treffsicherheit, Auge des Falken, Waldläufer, Pfeil der Vorfahren |

## Basis und Ausrüstung

R1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.

### Basis ohne Ausrüstung

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 184 | 454 | 754 | 1.054 | 1.354 | 1.654 | 1.954 |
| Mana | 111 | 381 | 681 | 981 | 1.281 | 1.581 | 1.881 |
| P-Angriff | 13 | 29,2 | 47,2 | 65,2 | 83,2 | 101,2 | 119,2 |
| M-Angriff | 3 | 19,2 | 37,2 | 55,2 | 73,2 | 91,2 | 109,2 |
| P-Defense | 6 | 24 | 44 | 64 | 84 | 104 | 124 |
| M-Defense | 8 | 26 | 46 | 66 | 86 | 106 | 126 |

### Mit Rüstung und Bogen

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 534 | 804 | 1.279 | 1.754 | 2.229 | 2.854 | 3.504 |
| Mana | 436 | 706 | 1.166 | 1.631 | 2.106 | 2.731 | 3.381 |
| P-Angriff | 44 | 60,2 | 111,2 | 179,2 | 276,2 | 421,2 | 644,2 |
| M-Angriff | 3 | 19,2 | 37,2 | 55,2 | 73,2 | 91,2 | 109,2 |
| P-Defense | 65 | 83 | 139 | 213 | 321 | 440 | 612 |
| M-Defense | 68 | 86 | 153 | 208 | 319 | 432 | 546 |

Ein Bogen ist angesetzt. Sein Geschicklichkeitsbonus trägt mit 1,8 P-Angriff je Punkt zum Angriff bei. Waffen-Speed ist noch nicht eingerechnet. Equipment-Vorschläge sind nicht übernommen. Grundregeneration: 25 Mana und 12 HP pro Tick. Das Intervall wird später in Unreal geprüft. Bestehende gemeinsame Skillwerte werden übernommen; fehlende Werte werden nicht geschätzt.

## Skillübersicht

| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 5 | Adaption | Passive | 20 | HP-Regeneration +0,5<br>Vita +0,5<br>Wisdom +0,5 | Vita: 0,5 bis 10<br>Wisdom: 0,5 bis 10<br>manaRegen: 0,5 bis 10<br>HP-Regeneration: 0,5 bis 10 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 139 | Ausdauertraining | Passive | 20 | Vita +1<br>Wisdom +1 | Vita: 1 bis 20<br>Wisdom: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 201 | Waffentraining | Passive | 20 | P-Angriff +1<br>M-Angriff +1 | P-Angriff: 1 bis 20<br>M-Angriff: 1 bis 20 | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 134 | Bindung | Passive | 3 / Jäger 1 | Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.<br>statModifier, Ziel companion, str, 10<br>statModifier, Ziel companion, vita, 10<br>statModifier, Ziel companion, int, 10<br>statModifier, Ziel companion, wis, 10 | statModifier/str: 10 bis 20<br>statModifier/vita: 10 bis 20<br>statModifier/int: 10 bis 20<br>statModifier/wis: 10 bis 20 | Keine | Entfällt | Entfällt | str: 0 s<br>vita: 0 s<br>int: 0 s<br>wis: 0 s | Gemeinsame Definition |
| 135 | Kontrolle | Passive | 2 / Jäger 1 | Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen. | Nicht vollständig gespeichert | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition; Levelskalierung prüfen |
| 144 | Rüstungstraining | Passive | 10 | P-Defense +3<br>M-Defense +6 | P-Defense: 3 bis 30<br>M-Defense: 6 bis 60 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 138 | Zucht | Passive | 3 / Jäger 1 | Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.<br>experienceBonus, Ziel companion, 0,1 | experienceBonus/: 10 bis 30 % | Keine | Entfällt | Entfällt | experienceBonus: 0 s | Gemeinsame Definition |
| 136 | Beschwören | Skill | 1 | Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 1 | Nicht gespeichert | Gemeinsame Definition |
| 133 | Tamen | Skill | 3 / Jäger 1 | Versucht, eine Kreatur zu zähmen. Erfordert eine zur Kreaturenvariante passende Zähmungskarte. Die Grundchance wird von der jeweiligen Kreaturenvariante vorgegeben. Tamen multipliziert diese Chance auf Stufe 1 mit 1,0, auf Stufe 2 mit 1,1 und auf Stufe 3 mit 1,2; keine zusätzlichen Prozentpunkte und keine eigene feste Grunderfolgschance. Bei 1 Prozent Grundchance ergeben sich 1 / 1,1 / 1,2 Prozent Erfolgschance je Versuch. Die Formel steigt bei später autorisierten zusätzlichen effektiven Skillstufen um 0,1 je Stufe weiter. Die Definition hat weiterhin drei lernbare Stufen: normale Klassen maximal Stufe 1, Abenteurer maximal Stufe 3; eine zweite Spezialklasse ist noch nicht festgelegt. Mana 100 / 125 / 150, Castzeit 3 / 2,5 / 2 Sekunden und Cooldown 60 / 50 / 40 Sekunden. Kein Schaden und keine anschließende Effektdauer. Konkrete Kreaturen-Grundchancen, Kartenzuordnungen, Itemverbrauch, Zieldistanz und Abbruchbedingungen sind noch festzulegen. | Chancenfaktor ×1,0 / ×1,1 / ×1,2; normale Lerngrenze 1 | Mana-Kosten: 100 bis 150 | 60 bis 40 | 3 bis 2 | 0 (keine anschließende Wirkung) | Gemeinsame Definition; Levelskalierung prüfen |
| 137 | Zurückrufen | Skill | 1 | Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 0 | Nicht gespeichert | Gemeinsame Definition |
| 51 | Feuerpfeil | Skill / physisch | 20 | P-Angriff +67<br>Animation 0,8 s (vorläufig) | P-Angriff: 67 bis 428 | Mana-Kosten: 17 bis 112 | 23 bis 9 | 0 | Wirkung einmalig; Animation 0,8 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 14 | Ausweichrolle | Buff / Bewegung (selbst) | 2 | Weiche mit einer Rolle aus. Auf Skilllevel 1 verbraucht sie 15 Prozent deiner maximalen Ausdauer und hat 4 Sekunden Cooldown, auf Skilllevel 2 sind es 10 Prozent und 2 Sekunden. Die Rolle dauert vorläufig 1 Sekunde und kostet kein Mana. | Nicht vollständig gespeichert | Mana-Kosten: 0 bis 0<br>stamina-Kosten: 0,15 bis 0,1 (Anteil) | 4 bis 2 | 0 | 1 | Levelskalierung prüfen |
| 25 | Doppelsprung | Buff / Bewegung (selbst) | 10 | Ein zusätzlicher Sprung lässt dich höher springen und erhöhte Stellen erreichen. Die vorläufige Sprunghöhe steigt von 1,50 auf 2,00 Meter. Die Ausdauerkosten sinken von 60 auf 25 Prozent, der Cooldown von 8 auf 4 Sekunden und die Bewegungsdauer von 2,5 auf 2 Sekunden. Die Bewegung wird später im Spiel geprüft. | Nicht vollständig gespeichert | Mana-Kosten: 0 bis 0<br>stamina-Kosten: 0,6 bis 0,25 (Anteil) | 8 bis 4 | Offen | 2,5 bis 2 | Levelskalierung prüfen; Cast Time offen |
| 43 | Erweiterung der Sinne | Passive | 10 | Vita +0,5<br>Wisdom +0,5<br>Agility +1<br>Dexterity +1 | Dexterity: 1 bis 10<br>Agility: 1 bis 10<br>Vita: 0,5 bis 5<br>Wisdom: 0,5 bis 5 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 142 | Ausweichtraining | Passive | 10 | Agility +1<br>Dexterity +0,5 | Agility: 1 bis 10<br>Dexterity: 0,5 bis 5 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 63 | Kettenschuss | Skill / physisch | 5 | P-Angriff +52 | P-Angriff: 52 bis 144 | Mana-Kosten: 13 bis 37 | 60 bis 56 | 0.2 | 1 bis 8 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 18 | Bogenschießtraining | Passive | 10 | Dexterity +2 | Dexterity: 2 bis 11 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 53 | Gebundener Schuss | Skill / physisch | 10 | P-Angriff +37<br>control, Ziel enemy, 1 | P-Angriff: 37 bis 199 | Mana-Kosten: 9 bis 54 | 17 | 0.4 | root: 1 bis 3 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 153 | Treffsicherheit | Selbstbuff | 10 | Dexterity +1,2 | Dexterity: 1,2 bis 12<br>Luck: 0 bis 5 | Mana-Kosten: 50 bis 167 | 60 | 0.1 | 600 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 97 | Schockschuss | Skill / physisch | 10 | P-Angriff +236<br>control, Ziel enemy, 1 | P-Angriff: 236 bis 632 | Mana-Kosten: 59 bis 158 | 49 | 0.3 | stun: 1 bis 3 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 37 | Entzugspfeil | Skill / physisch | 10 | P-Angriff +101<br>heal, Ziel self, 48<br>Animation 0,3 s (vorläufig) | P-Angriff: 101 bis 479<br>heal/: 48 bis 156 | Mana-Kosten: 27 bis 135 | 54 | 0.1 | heal: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 152 | Giftpfeil | Selbstbuff | 10 | Eigenbuff mit zehn Skillstufen für 600 Sekunden. Jeder eigene erfolgreich treffende Pfeil hat während des Buffs 3 % Chance, das getroffene Ziel für 3 Sekunden zu vergiften. Das Gift verursacht einmal pro Sekunde 3 bis 60 Schaden gemäß Stufentabelle; ohne Erneuerung drei Ticks und maximal 180 Schaden auf Stufe 10. Erste Auslösung nach einer Sekunde. Das Gift stapelt pro Ziel nicht und springt nicht auf andere Ziele über. Erneute Auslösung erneuert nur die Restdauer auf drei Sekunden, ohne den laufenden Tick-Timer zurückzusetzen. Kein zusätzlicher Magieangriffsbeitrag. Aktivierungskosten einmalig 50 bis 297 Mana gemäß Stufentabelle, vor Rabatten. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig von Angriffs- oder Castgeschwindigkeit. Die bisherigen Start- und Maximalwerte bleiben erhalten und sind auf zehn statt zwanzig Stufen verteilt.<br>periodicDamage, Ziel enemy, 3 | periodicDamage/: 3 bis 60 | Mana-Kosten: 50 bis 297 | 60 | 0.1 | Buff 600 s; Gift 3 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 122 | Voll Durchziehen | Passive | 10 | Penetration +3<br>Dexterity +0,5 | Penetration: 3 bis 30<br>Dexterity: 0,5 bis 5<br>Luck: 0 bis 3 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 154 | Auge des Falken | Selbstbuff | 10 | Ausweichen +10<br>Genauigkeit +15<br>Luck +1<br>P-Angriff +1 | P-Angriff: 1 bis 10<br>Genauigkeit: 15 bis 24<br>Luck: 1 bis 5<br>Ausweichen: 10 bis 20 | Mana-Kosten: 50 bis 167 | 60 | 0.1 | 600 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 10 | Auf der Jagd | Passive | 5 | Agility +0,2<br>Dexterity +1,6 | Dexterity: 1,6 bis 8<br>Agility: 0,2 bis 1 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 150 | Macht des Begleiters | Buff / Begleiter | 10 | Vita +2<br>Wisdom +2<br>Dexterity +2 | Dexterity: 2 bis 20<br>Vita: 2 bis 20<br>Wisdom: 2 bis 20 | Mana-Kosten: 231 bis 645 | 60 | 0.2 | 600 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 121 | Verstärkter Pfeil | Skill / physisch | 20 | P-Angriff +257 | P-Angriff: 257 bis 1.625 | Mana-Kosten: 64 bis 406 | 67 bis 48 | 0.4 | 0 (einmalig) | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 226 | Seelenbegleiter | Skill | 1 | Beschwört einen Seelenbegleiter für maximal 360 Sekunden (6 Minuten), sofern er nicht vorher stirbt. Eine lernbare Stufe. Mana-Kosten 132, Cooldown 360 Sekunden, Castzeit 0,4 Sekunden. Er greift ausschließlich mit physischen Fernkampf-Auto-Attacks an und bufft den Meister nicht. Seine Attribute entsprechen live jeweils 10 Prozent des aktuellen Geschicks, der Vitalität und der Wisdom seines Meisters. Standardumrechnung für physische Fernkämpfer: je Geschick 1,8 P-Angriff und 1,6 Genauigkeit; je Vita 30 Max-HP, 2 P-Abwehr und 4 HP-Regeneration pro Tick; je Wisdom 30 Max-Mana, 2 M-Abwehr und 3 MP-Regeneration pro Tick. Keine direkte Übernahme von Waffenangriff oder fertigen Kampfwerten des Meisters. Kein eigener M-Angriff. Buffs und Debuffs des Meisters verändern die übernommenen Attribute live. Macht des Begleiters wirkt direkt auf seine Attribute, zusätzlich zu den übernommenen Meisterattributen. Der Begleiter ist angreifbar, wird von Flächeneffekten getroffen und belegt keinen dauerhaften Pet-Platz. Maximal ein Seelenbegleiter dieses Skills gleichzeitig; erneutes Beschwören ersetzt den bisherigen. Grund-Angriffstempo 100 Prozent wie bei Morrak; keine Übernahme von Agilität. Reichweite und Anpassung aktueller HP bei wechselndem Max-Leben bleiben offen. Der Cooldown beginnt mit der Beschwörung. Bei vorzeitigem Tod verschwindet der Begleiter; erneutes Rufen ist erst nach Ablauf des noch laufenden Beschwörungs-Cooldowns möglich. Tod startet keine zusätzliche Wartezeit. Bei voller Laufzeit von 360 Sekunden kann er nach Ablauf erneut gerufen werden. Kein Wiederbeleben auf 1 HP und keine separate Todessperre. Zusätzliche eigene Grundwerte: 500 Max-Leben, 100 P-Angriff, 0 M-Angriff, 63 P-Verteidigung und 52 M-Verteidigung. Diese Werte werden zur bisherigen Vererbung addiert. Grundfrequenz 1,5 Angriffe pro Sekunde. Bindung wirkt direkt und zusätzlich auf die Kreaturenattribute; die normale Lerngrenze des Meisters ist zu beachten. | Nicht vollständig gespeichert | Mana-Kosten: 132 bis 132 | 360 | 0.4 | 360 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 86 | Präzisionsschuss | Skill / physisch | 15 | P-Angriff +491<br>statModifier, Ziel enemy, atkSpeed, 0<br>statModifier, Ziel enemy, movementSpeed, 0<br>Ein einzelnes Ziel | P-Angriff: 491 bis 2.409<br>statModifier/atkSpeed: 0 bis -7,5 %<br>statModifier/movementSpeed: 0 bis -5 % | Mana-Kosten: 221 bis 1.089 | 71 bis 57 | 0.4 | atkSpeed: 15 bis 29 s<br>movementSpeed: 15 bis 29 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 157 | Pfeil der Vorfahren | Selbstbuff | 10 | Eigenbuff für 12 Sekunden, gebunden an den bei Aktivierung anvisierten Gegner. Jeder erfolgreiche eigene Auto-Attack gegen dieses Ziel löst drei zusätzliche Ahnenpfeile auf dasselbe Ziel aus. Jeder Zusatzpfeil verursacht 12 physischen Grundschaden je Skillstufe bis 120 auf Stufe 10: insgesamt 36 bis 360 Zusatzschaden pro auslösendem Treffer vor gegnerischer Verteidigung. Kein zusätzlicher Charakter- oder Waffenangriff, keine weiteren Gegner. Zusatzpfeile und Begleiter lösen keine Ahnenpfeile aus. Cooldown 90 Sekunden. Eigenständige Treffer-/Krit-Regeln und Verhalten beim Tod des Ziels bleiben zu klären. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.<br>triggeredAttack, Ziel enemy, 12 | triggeredAttack/: 12 bis 120 | Mana-Kosten: 50 bis 167 | 90 | 0.1 | triggeredAttack: 12 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 156 | Waldläufer | Selbstbuff | 1 | Agility +2<br>Dexterity +3 | Agility: 2 bis 2<br>Dexterity: 3 bis 3 | Mana-Kosten: 54 bis 54 | 60 | 0.1 | 600 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 88 | Salve | Skill / physisch | 5 | P-Angriff +138<br>Animation 1 s (vorläufig)<br>Fläche: 4 m Radius um anvisiertes Ziel | Nicht vollständig gespeichert | Mana-Kosten: 104 bis 414 | 72 bis 64 | 0.2 | Wirkung einmalig; Animation 1 s | Levelskalierung prüfen |

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

### 51: Feuerpfeil

Schießt einen brennenden Pfeil auf dein Ziel. Verursacht einmalig physischen Grundschaden von 67, plus 19 je weiterer Stufe, bis zu 428 auf Stufe 20. Mana-Kosten 17 auf Stufe 1, +5 je weiterer Stufe, maximal 112 auf Stufe 20. Cooldown 23 Sekunden auf Stufe 1, sinkend gemäß ganzzahliger Stufentabelle bis auf 9 Sekunden auf Stufe 20. Zusätzliche Castzeit 0 Sekunden, vorläufige Flug-/Ausführungsanimation 0,8 Sekunden. Kein zusätzlicher DoT festgelegt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| skillPointCosts.classRankCosts.hunter.0 | 12 |
| skillPointCosts.classRankCosts.hunter.1 | 12 |
| skillPointCosts.classRankCosts.hunter.2 | 13 |
| skillPointCosts.classRankCosts.hunter.3 | 13 |
| skillPointCosts.classRankCosts.hunter.4 | 13 |
| skillPointCosts.classRankCosts.hunter.5 | 14 |
| skillPointCosts.classRankCosts.hunter.6 | 14 |
| skillPointCosts.classRankCosts.hunter.7 | 14 |
| skillPointCosts.classRankCosts.hunter.8 | 15 |
| skillPointCosts.classRankCosts.hunter.9 | 15 |
| skillPointCosts.classRankCosts.hunter.10 | 15 |
| skillPointCosts.classRankCosts.hunter.11 | 15 |
| skillPointCosts.classRankCosts.hunter.12 | 16 |
| skillPointCosts.classRankCosts.hunter.13 | 16 |
| skillPointCosts.classRankCosts.hunter.14 | 16 |
| skillPointCosts.classRankCosts.hunter.15 | 17 |
| skillPointCosts.classRankCosts.hunter.16 | 17 |
| skillPointCosts.classRankCosts.hunter.17 | 17 |
| skillPointCosts.classRankCosts.hunter.18 | 18 |
| skillPointCosts.classRankCosts.hunter.19 | 18 |
| skillPointCosts.classRankCosts.summoner.0 | 12 |
| skillPointCosts.classRankCosts.summoner.1 | 12 |
| skillPointCosts.classRankCosts.summoner.2 | 13 |
| skillPointCosts.classRankCosts.summoner.3 | 13 |
| skillPointCosts.classRankCosts.summoner.4 | 13 |
| skillPointCosts.classRankCosts.summoner.5 | 14 |
| skillPointCosts.classRankCosts.summoner.6 | 14 |
| skillPointCosts.classRankCosts.summoner.7 | 14 |
| skillPointCosts.classRankCosts.summoner.8 | 15 |
| skillPointCosts.classRankCosts.summoner.9 | 15 |
| skillPointCosts.classRankCosts.summoner.10 | 15 |
| skillPointCosts.classRankCosts.summoner.11 | 15 |
| skillPointCosts.classRankCosts.summoner.12 | 16 |
| skillPointCosts.classRankCosts.summoner.13 | 16 |
| skillPointCosts.classRankCosts.summoner.14 | 16 |
| skillPointCosts.classRankCosts.summoner.15 | 17 |
| skillPointCosts.classRankCosts.summoner.16 | 17 |
| skillPointCosts.classRankCosts.summoner.17 | 17 |
| skillPointCosts.classRankCosts.summoner.18 | 18 |
| skillPointCosts.classRankCosts.summoner.19 | 18 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| learningRequirements.classOverrides.hunter | 6 |
| learningRequirements.classOverrides.summoner | 6 |
| learningRequirements.minimumCharacterLevel | 6 |
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

### 14: Ausweichrolle

Weiche mit einer Rolle aus. Auf Skilllevel 1 verbraucht sie 15 Prozent deiner maximalen Ausdauer und hat 4 Sekunden Cooldown, auf Skilllevel 2 sind es 10 Prozent und 2 Sekunden. Die Rolle dauert vorläufig 1 Sekunde und kostet kein Mana.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 130 |
| skillPointCosts.rankCosts.0 | 130 |
| skillPointCosts.rankCosts.1 | 170 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 8 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Dodge Roll |
| category | active |
| cd | 4 |
| charClass[0] | Hunter |
| charClass[1] | Archer |
| charClass[2] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Weiche mit einer Rolle aus. Auf Skilllevel 1 verbraucht sie 15 Prozent deiner maximalen Ausdauer und hat 4 Sekunden Cooldown, auf Skilllevel 2 sind es 10 Prozent und 2 Sekunden. Die Rolle dauert vorläufig 1 Sekunde und kostet kein Mana. |
| description_eng | Dodge with a roll. At skill level 1 it costs 15 percent of maximum stamina with a 4 second cooldown; at level 2 it costs 10 percent with a 2 second cooldown. The provisional roll duration is 1 second. It costs no mana. |
| dmgType (Altformat) | Movement |
| maxSkillLv | 2 |
| maxUpgradeLv | 10 |
| nr | 14 |
| skillName_de | Ausweichrolle |
| skillpoints | 1 |
| cooldownScaling.type | table |
| cooldownScaling.values[0] | 4 |
| cooldownScaling.values[1] | 2 |
| dur | 1 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 0 |
| resourceCosts[1].resource | stamina |
| resourceCosts[1].reference | maxStamina |
| resourceCosts[1].unit | fraction |
| resourceCosts[1].scaling.type | table |
| resourceCosts[1].scaling.base | 0,15 |
| resourceCosts[1].scaling.values[0] | 0,15 |
| resourceCosts[1].scaling.values[1] | 0,1 |
| castTimeSeconds | 0 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 4 |
| levelProgression.rules[0].rule.rule.perLevel | -2 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | constant |
| levelProgression.rules[1].rule.rule.value | 0 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 1 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.max | 1 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 0,15 |
| levelProgression.rules[2].rule.rule.perLevel | -0,05 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| effectKind | movement |
| target | self |
| type | buff |

### 25: Doppelsprung

Ein zusätzlicher Sprung lässt dich höher springen und erhöhte Stellen erreichen. Die vorläufige Sprunghöhe steigt von 1,50 auf 2,00 Meter. Die Ausdauerkosten sinken von 60 auf 25 Prozent, der Cooldown von 8 auf 4 Sekunden und die Bewegungsdauer von 2,5 auf 2 Sekunden. Die Bewegung wird später im Spiel geprüft.

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
| learningRequirements.minimumCharacterLevel | 8 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Double Jump |
| category | active |
| cd | 8 |
| charClass[0] | Hunter |
| charClass[1] | Archer |
| charClass[2] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Ein zusätzlicher Sprung lässt dich höher springen und erhöhte Stellen erreichen. Die vorläufige Sprunghöhe steigt von 1,50 auf 2,00 Meter. Die Ausdauerkosten sinken von 60 auf 25 Prozent, der Cooldown von 8 auf 4 Sekunden und die Bewegungsdauer von 2,5 auf 2 Sekunden. Die Bewegung wird später im Spiel geprüft. |
| description_eng | An additional jump lets you jump higher and reach elevated locations. Provisional jump height increases from 1.50 to 2.00 meters. Stamina cost decreases from 60 to 25 percent, cooldown from 8 to 4 seconds, and movement duration from 2.5 to 2 seconds. Movement will be verified in game. |
| dmgType (Altformat) | Movement |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 25 |
| skillName_de | Doppelsprung |
| skillpoints | 1 |
| activation | manual |
| cooldownScaling.type | linear |
| cooldownScaling.base | 8 |
| cooldownScaling.perLevel | -0,444 |
| dur | 2,5 |
| durationScaling.type | linear |
| durationScaling.base | 2,5 |
| durationScaling.perLevel | -0,056 |
| movement.type | doubleJump |
| movement.heightMeters | 1,5 |
| movement.heightStatus | provisional |
| movement.heightScaling.type | linear |
| movement.heightScaling.base | 1,5 |
| movement.heightScaling.perLevel | 0,056 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 0 |
| resourceCosts[1].resource | stamina |
| resourceCosts[1].reference | maxStamina |
| resourceCosts[1].unit | fraction |
| resourceCosts[1].scaling.type | linear |
| resourceCosts[1].scaling.base | 0,6 |
| resourceCosts[1].scaling.perLevel | -0,039 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 8 |
| levelProgression.rules[0].rule.rule.perLevel | -0,444 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 2,5 |
| levelProgression.rules[1].rule.perLevel | -0,056 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | movement |
| levelProgression.rules[2].path[1] | heightScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 1,5 |
| levelProgression.rules[2].rule.perLevel | 0,056 |
| levelProgression.rules[2].source | storedFormula |
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
| levelProgression.rules[4].rule.rule.kind | linear |
| levelProgression.rules[4].rule.rule.base | 0,6 |
| levelProgression.rules[4].rule.rule.perLevel | -0,039 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| effectKind | movement |
| target | self |
| type | buff |

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

### 142: Ausweichtraining

Permanentes passives Ausweichtraining. Gewährt 1 Agilität und 0,5 Geschicklichkeit je gelerntem Skilllevel, bis zu 10 Agilität und 5 Geschicklichkeit auf Stufe 10. Keine Aktivierungskosten, Castzeit oder Cooldown.

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

### 63: Kettenschuss

Ein Pfeil verbindet dich über ein Seil oder Energieband mit dem Ziel. Auf Stufe 1 ziehst du dich nach der genannten Verzögerung von 0,2 Sekunden ungefähr 1 Meter zum Gegner und hüpfst dabei leicht. Ab Stufe 2 können leichtere normale Gegner stattdessen ungefähr 1 Meter zu dir gezogen werden, nicht direkt an deine Position. Wie zwischen Eigenzug und Gegnerzug gewählt wird, ist noch offen. Ab Stufe 3 kannst du über den Gegner springen, aus der Luft schießen und auf der gegenüberliegenden Seite in etwa dem ursprünglichen Abstand landen, beispielsweise 3 bis 5 Meter entfernt. Auf Stufe 5 ermöglicht ein Bossziel einen hohen Flugpunkt und Bogen, mit einer an Größe und Form des Bosses angepassten Flughöhe innerhalb des 8 Sekunden langen Skillfensters. Während dieses skillbedingten Flugs sind Angriffe und Skillkombinationen möglich. Bodenangriffe unter dir erreichen dich räumlich nicht; Angriffe in die Luft können dich treffen. Keine pauschale Unverwundbarkeit. Du landest hinter dem Boss ohne Fallschaden aus diesem Skillflug. Im PvP und gegen gleich schwere Gegner ist der Bogen kleiner und kürzer. Die Sondererlaubnis zum Schießen im Flug gilt für diesen Skill. Physischer Grundschaden 52, plus 23 je weiterer Stufe, bis zu 144. Mana-Kosten 13 auf Stufe 1, +6 je weiterer Stufe, maximal 37 auf Stufe 5. Vorläufige Dauern je Stufe: 1 / 2,5 / 4 / 6 / 8 Sekunden. Ob die genannte Zugverzögerung zusätzlich zur Castzeit gilt, Stufe 4, genaue Flugbahn, Zugauswahl und mögliche 10 Sekunden Enddauer sind noch offen. Auch Jäger und Archer können Kettenschuss erlernen. Der Skill ist ohne Gegner an geeigneten Weltankern nutzbar, um dich auf Dächer, an Felsen und eingeschränkt an Bäume zu ziehen. Zulässige Anker, Reichweite und genaue Weltbewegung werden noch festgelegt. Es gibt keine feste Flughöhe von 30 Metern. Die Flugbahn muss das jeweilige Bossmodell überqueren können. Die normale Angriffsreichweite gilt auch in der Luft; zu große Entfernung verhindert weitere Treffer. Erhöhte Weltpositionen sollen über andere passende Bewegungsfähigkeiten wie den Doppelsprung des Abenteurers erreichbar und damit konterbar sein. Eine entsprechende spätere Fähigkeit des Schurken ist nur eine Überlegung. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| learningRequirements.minimumCharacterLevel | 12 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
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

### 18: Bogenschießtraining

Permanentes Bogenschießtraining mit zehn Stufen. Auf Stufe 1 +2 Geschicklichkeit, +1 je weiterer Stufe, maximal +11 auf Stufe 10. Der direkte physische Angriffsbonus entfällt vollständig. Kein Agilitätsbonus. Keine Aktivierungskosten, Castzeit oder Cooldown.

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
| skillName_eng | Bow Training |
| category | passive |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanentes Bogenschießtraining mit zehn Stufen. Auf Stufe 1 +2 Geschicklichkeit, +1 je weiterer Stufe, maximal +11 auf Stufe 10. Der direkte physische Angriffsbonus entfällt vollständig. Kein Agilitätsbonus. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent Bow Training with ten levels. Grants +2 Dexterity at level 1 plus 1 per additional level, reaching +11 at level 10. The direct physical attack bonus is removed entirely. No Agility bonus, activation costs, cast time or cooldown. |
| dex | 2 |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 18 |
| skillName_de | Bogenschießtraining |
| skillpoints | 1 |
| resourceCosts | [] |
| statScaling.dex.type | linear |
| statScaling.dex.base | 2 |
| statScaling.dex.perLevel | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | dex |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 53: Gebundener Schuss

Dein Charakter hüpft zunächst nach links und schießt einen Seilpfeil über den Gegner, danach nach rechts für einen zweiten Seilpfeil. Die gekreuzten Seile fesseln das Ziel. Die Fesselungsdauer steigt gleichmäßig von 1 Sekunde auf Stufe 1 auf 3 Sekunden auf Stufe 10. Physischer Skill-Grundschaden 37, plus 18 je weiterer Stufe, bis zu 199 insgesamt pro Anwendung; zwei Seilpfeile bedeuten keinen doppelten Schadenswert. Mana-Kosten 9 auf Stufe 1, +5 je weiterer Stufe, maximal 54 auf Stufe 10. Castzeit 0,4 Sekunden für den beschriebenen Ablauf. Cooldown weiterhin 17 Sekunden. Keine Zugwirkung wie beim Kettenschuss. Sprungweiten, genaue Trefferzeitpunkte und die durch Fesselung gesperrten Aktionen werden im Spiel abgestimmt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| skillName_eng | Bound Shot |
| category | active |
| cd | 17 |
| charClass[0] | Hunter |
| charClass[1] | Archer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dein Charakter hüpft zunächst nach links und schießt einen Seilpfeil über den Gegner, danach nach rechts für einen zweiten Seilpfeil. Die gekreuzten Seile fesseln das Ziel. Die Fesselungsdauer steigt gleichmäßig von 1 Sekunde auf Stufe 1 auf 3 Sekunden auf Stufe 10. Physischer Skill-Grundschaden 37, plus 18 je weiterer Stufe, bis zu 199 insgesamt pro Anwendung; zwei Seilpfeile bedeuten keinen doppelten Schadenswert. Mana-Kosten 9 auf Stufe 1, +5 je weiterer Stufe, maximal 54 auf Stufe 10. Castzeit 0,4 Sekunden für den beschriebenen Ablauf. Cooldown weiterhin 17 Sekunden. Keine Zugwirkung wie beim Kettenschuss. Sprungweiten, genaue Trefferzeitpunkte und die durch Fesselung gesperrten Aktionen werden im Spiel abgestimmt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Your character hops left and fires a tether arrow over the enemy, then hops right and fires a second tether arrow. The crossed ropes root the target. Root duration increases evenly from 1 second at level 1 to 3 seconds at level 10. Physical skill base damage starts at 37 and increases by 18 per additional level to 199 total per activation; two tether arrows do not double this damage value. Mana cost 9 at level 1, maximum 54 at level 10. Cast time is 0.4 seconds for the described sequence. Cooldown remains 17 seconds. Does not pull targets like Chain Shot. Hop distances, exact hit timing and actions prevented by the root will be tuned in game. |
| dmgType (Altformat) | physical |
| dur | 1 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 53 |
| patk | 37 |
| skillName_de | Gebundener Schuss |
| skillpoints | 1 |
| castTimeSeconds | 0,4 |
| durationScaling.type | linear |
| durationScaling.base | 1 |
| durationScaling.perLevel | 0,222 |
| effects[0].key | bound-shot-root |
| effects[0].type | control |
| effects[0].target | enemy |
| effects[0].controlKind | root |
| effects[0].value | 1 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 1 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 1 |
| effects[0].durationScaling.perLevel | 0,222 |
| effects[0].actionRestrictionsStatus | pending |
| mana (Aktivierungskosten, kein Bonus) | 9 |
| movement.type | alternatingSideHops |
| movement.hopDirections[0] | left |
| movement.hopDirections[1] | right |
| movement.firesTetherArrowPerHop | true |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 9 |
| resourceCosts[0].scaling.perLevel | 5 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 37 |
| statScaling.patk.perLevel | 18 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.perLevel | 0,222 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.perLevel | 0,222 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 9 |
| levelProgression.rules[2].rule.rule.perLevel | 5 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | patk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 37 |
| levelProgression.rules[3].rule.perLevel | 18 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 153: Treffsicherheit

Eigenbuff für 600 Sekunden. Gewährt 1,2 Geschicklichkeit je Skillstufe bis 12 auf Stufe 10. Auf Stufe 10 zusätzlich 5 Glück. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

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
| skillName_eng | Accuracy |
| category | active |
| cd | 60 |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff für 600 Sekunden. Gewährt 1,2 Geschicklichkeit je Skillstufe bis 12 auf Stufe 10. Auf Stufe 10 zusätzlich 5 Glück. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff lasting 600 seconds. Grants 1.2 Dexterity per skill level, reaching 12 at level 10. Also grants 5 Luck at level 10. Cooldown 60 seconds. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 167 at level 10, before discounts. Ongoing Mana drain is calculated separately. |
| dex | 1,2 |
| dmgType (Altformat) | selfbuff |
| dur | 600 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 153 |
| skillName_de | Treffsicherheit |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statScaling.dex.type | linear |
| statScaling.dex.base | 1,2 |
| statScaling.dex.perLevel | 1,2 |
| statScaling.luck.type | table |
| statScaling.luck.values[0] | 0 |
| statScaling.luck.values[1] | 0 |
| statScaling.luck.values[2] | 0 |
| statScaling.luck.values[3] | 0 |
| statScaling.luck.values[4] | 0 |
| statScaling.luck.values[5] | 0 |
| statScaling.luck.values[6] | 0 |
| statScaling.luck.values[7] | 0 |
| statScaling.luck.values[8] | 0 |
| statScaling.luck.values[9] | 5 |
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
| levelProgression.rules[1].rule.base | 1,2 |
| levelProgression.rules[1].rule.perLevel | 1,2 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | luck |
| levelProgression.rules[2].rule.kind | thresholds |
| levelProgression.rules[2].rule.base | 0 |
| levelProgression.rules[2].rule.changes[0].level | 10 |
| levelProgression.rules[2].rule.changes[0].value | 5 |
| levelProgression.rules[2].source | verifiedExistingLevels |
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

### 97: Schockschuss

Schießt einen Pfeil auf deinen Gegner. Physischer Skill-Grundschaden 236, plus 44 je weiterer Stufe, bis zu 632 auf Stufe 10. Der getroffene Gegner wird mit einer festen Wahrscheinlichkeit von 50 Prozent betäubt. Die Betäubungsdauer steigt gleichmäßig von 1 Sekunde auf Stufe 1 auf 3 Sekunden auf Stufe 10. Mana-Kosten 59 auf Stufe 1, +11 je weiterer Stufe, maximal 158 auf Stufe 10. Castzeit 0,3 Sekunden. Die Chance bleibt auf allen Stufen unverändert. Cooldown 49 Sekunden auf Stufe 1 und 49 Sekunden auf Stufe 10. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| skillName_eng | Shock Shot |
| category | active |
| cd | 49 |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Schießt einen Pfeil auf deinen Gegner. Physischer Skill-Grundschaden 236, plus 44 je weiterer Stufe, bis zu 632 auf Stufe 10. Der getroffene Gegner wird mit einer festen Wahrscheinlichkeit von 50 Prozent betäubt. Die Betäubungsdauer steigt gleichmäßig von 1 Sekunde auf Stufe 1 auf 3 Sekunden auf Stufe 10. Mana-Kosten 59 auf Stufe 1, +11 je weiterer Stufe, maximal 158 auf Stufe 10. Castzeit 0,3 Sekunden. Die Chance bleibt auf allen Stufen unverändert. Cooldown 49 Sekunden auf Stufe 1 und 49 Sekunden auf Stufe 10. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Shoots an arrow at an enemy. Physical skill base damage starts at 236 and increases by 44 per additional level to 632 at level 10. A hit has a fixed 50 percent chance to stun the enemy. Stun duration increases evenly from 1 second at level 1 to 3 seconds at level 10. Mana cost 59 at level 1, maximum 158 at level 10. Cast time is 0.3 seconds. Stun chance remains unchanged at all levels. Cooldown 49 seconds at level 1 and 49 seconds at level 10. |
| dmgType (Altformat) | physical |
| dur | 1 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 97 |
| patk | 236 |
| skillName_de | Schockschuss |
| skillpoints | 1 |
| castTimeSeconds | 0,3 |
| durationScaling.type | linear |
| durationScaling.base | 1 |
| durationScaling.perLevel | 0,222 |
| effects[0].key | shock-shot-stun |
| effects[0].type | control |
| effects[0].target | enemy |
| effects[0].controlKind | stun |
| effects[0].hitChance | 0,5 |
| effects[0].value | 1 |
| effects[0].unit | flat |
| effects[0].durationSeconds | 1 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 1 |
| effects[0].durationScaling.perLevel | 0,222 |
| effects[0].actionRestrictionsStatus | pending |
| mana (Aktivierungskosten, kein Bonus) | 59 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 59 |
| resourceCosts[0].scaling.perLevel | 11 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 236 |
| statScaling.patk.perLevel | 44 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.perLevel | 0,222 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.perLevel | 0,222 |
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
| levelProgression.rules[3].rule.base | 236 |
| levelProgression.rules[3].rule.perLevel | 44 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 37: Entzugspfeil

Verursacht einmalig physischen Schaden und heilt dich um einen festen Lebensbetrag. Auf Stufe 1: 101 physischer Grundschaden und 48 Heilung. Je weiterer Stufe kommen 42 Grundschaden und 12 Heilung hinzu, bis zu 479 Grundschaden und 156 Heilung auf Stufe 10. Mana-Kosten 27, plus 12 je weiterer Stufe, bis zu 135. Castzeit 0,1 Sekunden, vorläufige Animation 0,3 Sekunden. Keine anhaltende Wirkungsdauer und kein Bonus auf maximales Leben. Cooldown 54 Sekunden auf Stufe 1 und 54 Sekunden auf Stufe 10.

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
| skillName_eng | Draining Arrow |
| category | active |
| cd | 54 |
| charClass[0] | Hunter |
| charClass[1] | Archer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Verursacht einmalig physischen Schaden und heilt dich um einen festen Lebensbetrag. Auf Stufe 1: 101 physischer Grundschaden und 48 Heilung. Je weiterer Stufe kommen 42 Grundschaden und 12 Heilung hinzu, bis zu 479 Grundschaden und 156 Heilung auf Stufe 10. Mana-Kosten 27, plus 12 je weiterer Stufe, bis zu 135. Castzeit 0,1 Sekunden, vorläufige Animation 0,3 Sekunden. Keine anhaltende Wirkungsdauer und kein Bonus auf maximales Leben. Cooldown 54 Sekunden auf Stufe 1 und 54 Sekunden auf Stufe 10. |
| description_eng | Deals physical damage once and heals you for a fixed amount. Level 1 has 101 physical base damage and 48 healing. Each additional level adds 42 base damage and 12 healing, reaching 479 base damage and 156 healing at level 10. Mana cost starts at 27 and increases by 12 per additional level to 135. Cast time is 0.1 seconds; provisional animation is 0.3 seconds. No lingering duration or maximum Health bonus. Cooldown 54 seconds at level 1 and 54 seconds at level 10. |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 37 |
| patk | 101 |
| skillName_de | Entzugspfeil |
| skillpoints | 1 |
| animationDurationSeconds | 0,3 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,1 |
| effects[0].key | draining-arrow-self-heal |
| effects[0].type | heal |
| effects[0].target | self |
| effects[0].value | 48 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 48 |
| effects[0].valueScaling.perLevel | 12 |
| effects[0].durationSeconds | 0 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 27 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 27 |
| resourceCosts[0].scaling.perLevel | 12 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 101 |
| statScaling.patk.perLevel | 42 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 48 |
| levelProgression.rules[0].rule.perLevel | 12 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 27 |
| levelProgression.rules[1].rule.rule.perLevel | 12 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 101 |
| levelProgression.rules[2].rule.perLevel | 42 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 152: Giftpfeil

Eigenbuff mit zehn Skillstufen für 600 Sekunden. Jeder eigene erfolgreich treffende Pfeil hat während des Buffs 3 % Chance, das getroffene Ziel für 3 Sekunden zu vergiften. Das Gift verursacht einmal pro Sekunde 3 bis 60 Schaden gemäß Stufentabelle; ohne Erneuerung drei Ticks und maximal 180 Schaden auf Stufe 10. Erste Auslösung nach einer Sekunde. Das Gift stapelt pro Ziel nicht und springt nicht auf andere Ziele über. Erneute Auslösung erneuert nur die Restdauer auf drei Sekunden, ohne den laufenden Tick-Timer zurückzusetzen. Kein zusätzlicher Magieangriffsbeitrag. Aktivierungskosten einmalig 50 bis 297 Mana gemäß Stufentabelle, vor Rabatten. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig von Angriffs- oder Castgeschwindigkeit. Die bisherigen Start- und Maximalwerte bleiben erhalten und sind auf zehn statt zwanzig Stufen verteilt.

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
| skillName_eng | Poison Arrow |
| category | active |
| cd | 60 |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff mit zehn Skillstufen für 600 Sekunden. Jeder eigene erfolgreich treffende Pfeil hat während des Buffs 3 % Chance, das getroffene Ziel für 3 Sekunden zu vergiften. Das Gift verursacht einmal pro Sekunde 3 bis 60 Schaden gemäß Stufentabelle; ohne Erneuerung drei Ticks und maximal 180 Schaden auf Stufe 10. Erste Auslösung nach einer Sekunde. Das Gift stapelt pro Ziel nicht und springt nicht auf andere Ziele über. Erneute Auslösung erneuert nur die Restdauer auf drei Sekunden, ohne den laufenden Tick-Timer zurückzusetzen. Kein zusätzlicher Magieangriffsbeitrag. Aktivierungskosten einmalig 50 bis 297 Mana gemäß Stufentabelle, vor Rabatten. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig von Angriffs- oder Castgeschwindigkeit. Die bisherigen Start- und Maximalwerte bleiben erhalten und sind auf zehn statt zwanzig Stufen verteilt. |
| description_eng | Self buff with ten skill levels, lasting 600 seconds. Each own arrow that successfully hits has a 3% chance to poison its target for three seconds. Poison deals 3 to 60 damage once per second according to its level table; three ticks without refresh, up to 180 damage at level 10. First tick after one second. No stacking or spreading. Reapplication refreshes duration without resetting the running tick timer. No added caster magical attack. One-time activation cost 50 to 297 Mana according to the level table, before discounts. Cooldown 60 seconds; fixed cast time 0.1 seconds, unaffected by attack or cast speed. Former starting and maximum values are redistributed over ten rather than twenty levels. |
| dmgType (Altformat) | selfbuff |
| dur | 600 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 152 |
| skillName_de | Giftpfeil |
| skillpoints | 1 |
| effects[0].key | poison-arrow-dot |
| effects[0].type | periodicDamage |
| effects[0].target | enemy |
| effects[0].damageSchool | poison |
| effects[0].value | 3 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | table |
| effects[0].valueScaling.values[0] | 3 |
| effects[0].valueScaling.values[1] | 9 |
| effects[0].valueScaling.values[2] | 16 |
| effects[0].valueScaling.values[3] | 22 |
| effects[0].valueScaling.values[4] | 28 |
| effects[0].valueScaling.values[5] | 35 |
| effects[0].valueScaling.values[6] | 41 |
| effects[0].valueScaling.values[7] | 47 |
| effects[0].valueScaling.values[8] | 54 |
| effects[0].valueScaling.values[9] | 60 |
| effects[0].durationSeconds | 3 |
| effects[0].intervalSeconds | 1 |
| effects[0].firstTickAfterSeconds | 1 |
| effects[0].applicationTrigger | ownArrowHit |
| effects[0].applicationChance | 0,03 |
| effects[0].requiredActiveSkillNumbers[0] | 152 |
| effects[0].maxStacksPerTarget | 1 |
| effects[0].reapplicationPolicy | refreshDurationPreserveTickTimer |
| effects[0].spreadsToOtherTargets | false |
| effects[0].addsCasterMagicalAttack | false |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.values[0] | 50 |
| resourceCosts[0].scaling.values[1] | 77 |
| resourceCosts[0].scaling.values[2] | 105 |
| resourceCosts[0].scaling.values[3] | 132 |
| resourceCosts[0].scaling.values[4] | 160 |
| resourceCosts[0].scaling.values[5] | 187 |
| resourceCosts[0].scaling.values[6] | 215 |
| resourceCosts[0].scaling.values[7] | 242 |
| resourceCosts[0].scaling.values[8] | 270 |
| resourceCosts[0].scaling.values[9] | 297 |
| castTimeSeconds | 0,1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | periodicSteps |
| levelProgression.rules[0].rule.base | 3 |
| levelProgression.rules[0].rule.steps[0] | 6 |
| levelProgression.rules[0].rule.steps[1] | 7 |
| levelProgression.rules[0].rule.steps[2] | 6 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | periodicSteps |
| levelProgression.rules[1].rule.rule.base | 50 |
| levelProgression.rules[1].rule.rule.steps[0] | 27 |
| levelProgression.rules[1].rule.rule.steps[1] | 28 |
| levelProgression.rules[1].source | verifiedExistingLevels |
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

### 122: Voll Durchziehen

Erhöht dauerhaft die Durchschlagskraft deiner Pfeile. Je gelerntem Skilllevel erhältst du 3 Penetration und 0,5 Geschicklichkeit. Auf Stufe 10 sind das 30 Penetration und 5 Geschicklichkeit; zusätzlich erhältst du auf dieser Stufe 3 Glück. Der bisherige Agilitätsbonus entfällt. Penetration wirkt gegen gegnerischen Block; die genaue Berechnungsformel wird später festgelegt. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit oder Cooldown.

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
| skillName_eng | Full Draw |
| category | passive |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erhöht dauerhaft die Durchschlagskraft deiner Pfeile. Je gelerntem Skilllevel erhältst du 3 Penetration und 0,5 Geschicklichkeit. Auf Stufe 10 sind das 30 Penetration und 5 Geschicklichkeit; zusätzlich erhältst du auf dieser Stufe 3 Glück. Der bisherige Agilitätsbonus entfällt. Penetration wirkt gegen gegnerischen Block; die genaue Berechnungsformel wird später festgelegt. Permanenter passiver Skill ohne Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanently increases arrow penetration. Each learned skill level grants 3 Penetration and 0.5 Dexterity. Level 10 grants 30 Penetration and 5 Dexterity, plus 3 Luck unlocked at that level. Replaces the former Agility bonus. Penetration counters enemy Block; the exact formula will be defined later. Permanent passive skill without activation costs, cast time or cooldown. |
| dex | 0,5 |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 122 |
| skillName_de | Voll Durchziehen |
| skillpoints | 1 |
| penetration | 3 |
| resourceCosts | [] |
| statScaling.penetration.type | linear |
| statScaling.penetration.base | 3 |
| statScaling.penetration.perLevel | 3 |
| statScaling.dex.type | linear |
| statScaling.dex.base | 0,5 |
| statScaling.dex.perLevel | 0,5 |
| statScaling.luck.type | table |
| statScaling.luck.values[0] | 0 |
| statScaling.luck.values[1] | 0 |
| statScaling.luck.values[2] | 0 |
| statScaling.luck.values[3] | 0 |
| statScaling.luck.values[4] | 0 |
| statScaling.luck.values[5] | 0 |
| statScaling.luck.values[6] | 0 |
| statScaling.luck.values[7] | 0 |
| statScaling.luck.values[8] | 0 |
| statScaling.luck.values[9] | 3 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | penetration |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 3 |
| levelProgression.rules[0].rule.perLevel | 3 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | dex |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,5 |
| levelProgression.rules[1].rule.perLevel | 0,5 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | luck |
| levelProgression.rules[2].rule.kind | thresholds |
| levelProgression.rules[2].rule.base | 0 |
| levelProgression.rules[2].rule.changes[0].level | 10 |
| levelProgression.rules[2].rule.changes[0].value | 3 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 154: Auge des Falken

Eigenbuff für 600 Sekunden. Gewährt 1 P-Angriff je Skillstufe, maximal 10. Genauigkeit 15 +1 je weiterer Stufe bis 24. Glück: Stufe 1–4 +1, Stufe 5–9 +2, Stufe 10 +5. Ausweichen je Stufe: 10/11/12/13/14/16/17/18/19/20 feste Punkte. Vereint Auge des Falken und Sechster Sinn, kein zusätzliches Stapeln und keine zusätzliche Erblindungsresistenz. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

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
| skillName_eng | Hawk Eye |
| category | active |
| cd | 60 |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff für 600 Sekunden. Gewährt 1 P-Angriff je Skillstufe, maximal 10. Genauigkeit 15 +1 je weiterer Stufe bis 24. Glück: Stufe 1–4 +1, Stufe 5–9 +2, Stufe 10 +5. Ausweichen je Stufe: 10/11/12/13/14/16/17/18/19/20 feste Punkte. Vereint Auge des Falken und Sechster Sinn, kein zusätzliches Stapeln und keine zusätzliche Erblindungsresistenz. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff lasting 600 seconds. Grants 1 physical attack per skill level, reaching 10. Accuracy starts at 15 and increases by 1 to 24. Luck: +1 at levels 1–4, +2 at levels 5–9, +5 at level 10. Dodge rating by level: 10/11/12/13/14/16/17/18/19/20. Merges Eye of the Hawk and Sixth Sense without additional stacking or extra blindness resistance. Cooldown 60 seconds. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 167 at level 10, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 600 |
| luck | 1 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 154 |
| patk | 1 |
| skillName_de | Auge des Falken |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| accuracy | 15 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 1 |
| statScaling.patk.perLevel | 1 |
| statScaling.accuracy.type | linear |
| statScaling.accuracy.base | 15 |
| statScaling.accuracy.perLevel | 1 |
| statScaling.luck.type | table |
| statScaling.luck.values[0] | 1 |
| statScaling.luck.values[1] | 1 |
| statScaling.luck.values[2] | 1 |
| statScaling.luck.values[3] | 1 |
| statScaling.luck.values[4] | 2 |
| statScaling.luck.values[5] | 2 |
| statScaling.luck.values[6] | 2 |
| statScaling.luck.values[7] | 2 |
| statScaling.luck.values[8] | 2 |
| statScaling.luck.values[9] | 5 |
| statScaling.dodge.type | table |
| statScaling.dodge.values[0] | 10 |
| statScaling.dodge.values[1] | 11 |
| statScaling.dodge.values[2] | 12 |
| statScaling.dodge.values[3] | 13 |
| statScaling.dodge.values[4] | 14 |
| statScaling.dodge.values[5] | 16 |
| statScaling.dodge.values[6] | 17 |
| statScaling.dodge.values[7] | 18 |
| statScaling.dodge.values[8] | 19 |
| statScaling.dodge.values[9] | 20 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| dodge | 10 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | patk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1 |
| levelProgression.rules[0].rule.perLevel | 1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | accuracy |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 15 |
| levelProgression.rules[1].rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | luck |
| levelProgression.rules[2].rule.kind | thresholds |
| levelProgression.rules[2].rule.base | 1 |
| levelProgression.rules[2].rule.changes[0].level | 5 |
| levelProgression.rules[2].rule.changes[0].value | 2 |
| levelProgression.rules[2].rule.changes[1].level | 10 |
| levelProgression.rules[2].rule.changes[1].value | 5 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | dodge |
| levelProgression.rules[3].rule.kind | rounded |
| levelProgression.rules[3].rule.mode | round |
| levelProgression.rules[3].rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.base | 10 |
| levelProgression.rules[3].rule.rule.perLevel | 1,111 |
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

### 10: Auf der Jagd

Dauerhafter Attributanteil: je gelernter Stufe +1,6 Geschick, +0,2 Agilität; auf Stufe 5 insgesamt +8 Geschick, +1 Agilität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Keine Aktivierungskosten, Castzeit oder Cooldown.

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
| learningRequirements.minimumCharacterLevel | 33 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | On the Hunt |
| agi | 0,2 |
| category | passive |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +1,6 Geschick, +0,2 Agilität; auf Stufe 5 insgesamt +8 Geschick, +1 Agilität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent attribute component: +1.6 Dexterity, +0.2 Agility per learned level; at level 5, +8 Dexterity, +1 Agility total. This component always applies independently of any triggered effects. No activation cost, cast time or cooldown. |
| dex | 1,6 |
| dmgType (Altformat) | passive |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 10 |
| skillName_de | Auf der Jagd |
| skillpoints | 1 |
| resourceCosts | [] |
| statScaling.dex.type | linear |
| statScaling.dex.base | 1,6 |
| statScaling.dex.perLevel | 1,6 |
| statScaling.agi.type | linear |
| statScaling.agi.base | 0,2 |
| statScaling.agi.perLevel | 0,2 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | dex |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1,6 |
| levelProgression.rules[0].rule.perLevel | 1,6 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | agi |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,2 |
| levelProgression.rules[1].rule.perLevel | 0,2 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 150: Macht des Begleiters

Verstärkt ausschließlich Gruppenbegleiter, keine Spieler. Je Stufe +2 Geschick, +2 Vitalität und +2 Willenskraft, maximal jeweils +20. Gilt für reguläre Pets einschließlich der Pets des Ritualisten und für den Seelenbegleiter, nicht direkt für Morrak. Der Seelenbegleiter erhält diese Attribute zusätzlich zur Meistervererbung. Seine Geschickpunkte geben 1,8 P-Angriff je Punkt; andere Begleiter verwenden ihre jeweiligen Attributregeln. Dauer 10 Minuten, Cooldown 60 Sekunden, Castzeit 0,2 Sekunden. Mana-Kosten: 231 + 46 je weiterer Stufe.

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
| skillName_eng | Power of the Pet |
| category | active |
| cd | 60 |
| charClass[0] | Hunter |
| charClass[1] | Archer |
| charClass[2] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Verstärkt ausschließlich Gruppenbegleiter, keine Spieler. Je Stufe +2 Geschick, +2 Vitalität und +2 Willenskraft, maximal jeweils +20. Gilt für reguläre Pets einschließlich der Pets des Ritualisten und für den Seelenbegleiter, nicht direkt für Morrak. Der Seelenbegleiter erhält diese Attribute zusätzlich zur Meistervererbung. Seine Geschickpunkte geben 1,8 P-Angriff je Punkt; andere Begleiter verwenden ihre jeweiligen Attributregeln. Dauer 10 Minuten, Cooldown 60 Sekunden, Castzeit 0,2 Sekunden. Mana-Kosten: 231 + 46 je weiterer Stufe. |
| description_eng | Buffs group companions only, not players. Each level grants +2 Dexterity, Vitality and Wisdom, reaching +20 each. Applies to regular pets including Ritualist pets and the spirit companion, not directly to Morrak. The spirit companion gains these attributes in addition to master inheritance and converts Dexterity into 1.8 physical attack per point; other companions use their respective attribute rules. Duration 10 minutes, cooldown 60 seconds, cast time 0.2 seconds. Mana cost: 231 + 46 per additional level. |
| dmgType (Altformat) | buff |
| dur | 600 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 150 |
| skillName_de | Macht des Begleiters |
| skillpoints | 1 |
| statScaling.dex.type | linear |
| statScaling.dex.base | 2 |
| statScaling.dex.perLevel | 2 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 2 |
| statScaling.vita.perLevel | 2 |
| statScaling.wis.type | linear |
| statScaling.wis.base | 2 |
| statScaling.wis.perLevel | 2 |
| castTimeSeconds | 0,2 |
| mana (Aktivierungskosten, kein Bonus) | 231 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 231 |
| resourceCosts[0].scaling.perLevel | 46 |
| statBonusTargets.dex | groupCompanions |
| statBonusTargets.vita | groupCompanions |
| statBonusTargets.wis | groupCompanions |
| vita | 2 |
| wis | 2 |
| dex | 2 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | dex |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.perLevel | 2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | vita |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 2 |
| levelProgression.rules[1].rule.perLevel | 2 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | wis |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 2 |
| levelProgression.rules[2].rule.perLevel | 2 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | resourceCosts |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | scaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0 |
| levelProgression.rules[3].rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.base | 231 |
| levelProgression.rules[3].rule.rule.perLevel | 46 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| target | companions |
| type | buff |
| castTimeStatus | defined |
| statBonusUnits.dex | flat |
| statBonusUnits.vita | flat |
| statBonusUnits.wis | flat |

### 121: Verstärkter Pfeil

Verstärke deinen Pfeil und füge einem Gegner einmalig physischen Schaden zu. Skill-Grundschaden 257 auf Stufe 1, plus 72 je weiterer Stufe, bis zu 1625 auf Stufe 20. Mana-Kosten 64 auf Stufe 1, +18 je weiterer Stufe, maximal 406 auf Stufe 20. Castzeit 0,4 Sekunden. Kein zusätzlicher Schadensbonus durch Entfernung und keine anhaltende Wirkung. Cooldown 67 Sekunden, minus 1 je weiterer Stufe, bis zu 48 Sekunden auf Stufe 20. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| learningRequirements.minimumCharacterLevel | 37 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Enhanced Arrow |
| category | active |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Verstärke deinen Pfeil und füge einem Gegner einmalig physischen Schaden zu. Skill-Grundschaden 257 auf Stufe 1, plus 72 je weiterer Stufe, bis zu 1625 auf Stufe 20. Mana-Kosten 64 auf Stufe 1, +18 je weiterer Stufe, maximal 406 auf Stufe 20. Castzeit 0,4 Sekunden. Kein zusätzlicher Schadensbonus durch Entfernung und keine anhaltende Wirkung. Cooldown 67 Sekunden, minus 1 je weiterer Stufe, bis zu 48 Sekunden auf Stufe 20. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Empower an arrow to deal physical damage once to an enemy. Skill base damage starts at 257 at level 1 and increases by 72 per additional level to 1625 at level 20. Mana cost 64 at level 1, maximum 406 at level 20. Cast time is 0.4 seconds. No additional distance-based damage bonus or lingering effect. Cooldown starts at 67 seconds and decreases by 1 per additional level to 48 seconds at level 20. |
| dmgType (Altformat) | physical |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 121 |
| patk | 257 |
| skillName_de | Verstärkter Pfeil |
| skillpoints | 1 |
| castTimeSeconds | 0,4 |
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 64 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 64 |
| resourceCosts[0].scaling.perLevel | 18 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 257 |
| statScaling.patk.perLevel | 72 |
| cd | 67 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 67 |
| cooldownScaling.perLevel | -1 |
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
| levelProgression.rules[1].rule.base | 257 |
| levelProgression.rules[1].rule.perLevel | 72 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | cooldownScaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0,1 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 67 |
| levelProgression.rules[2].rule.rule.perLevel | -1 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 226: Seelenbegleiter

Beschwört einen Seelenbegleiter für maximal 360 Sekunden (6 Minuten), sofern er nicht vorher stirbt. Eine lernbare Stufe. Mana-Kosten 132, Cooldown 360 Sekunden, Castzeit 0,4 Sekunden. Er greift ausschließlich mit physischen Fernkampf-Auto-Attacks an und bufft den Meister nicht. Seine Attribute entsprechen live jeweils 10 Prozent des aktuellen Geschicks, der Vitalität und der Wisdom seines Meisters. Standardumrechnung für physische Fernkämpfer: je Geschick 1,8 P-Angriff und 1,6 Genauigkeit; je Vita 30 Max-HP, 2 P-Abwehr und 4 HP-Regeneration pro Tick; je Wisdom 30 Max-Mana, 2 M-Abwehr und 3 MP-Regeneration pro Tick. Keine direkte Übernahme von Waffenangriff oder fertigen Kampfwerten des Meisters. Kein eigener M-Angriff. Buffs und Debuffs des Meisters verändern die übernommenen Attribute live. Macht des Begleiters wirkt direkt auf seine Attribute, zusätzlich zu den übernommenen Meisterattributen. Der Begleiter ist angreifbar, wird von Flächeneffekten getroffen und belegt keinen dauerhaften Pet-Platz. Maximal ein Seelenbegleiter dieses Skills gleichzeitig; erneutes Beschwören ersetzt den bisherigen. Grund-Angriffstempo 100 Prozent wie bei Morrak; keine Übernahme von Agilität. Reichweite und Anpassung aktueller HP bei wechselndem Max-Leben bleiben offen. Der Cooldown beginnt mit der Beschwörung. Bei vorzeitigem Tod verschwindet der Begleiter; erneutes Rufen ist erst nach Ablauf des noch laufenden Beschwörungs-Cooldowns möglich. Tod startet keine zusätzliche Wartezeit. Bei voller Laufzeit von 360 Sekunden kann er nach Ablauf erneut gerufen werden. Kein Wiederbeleben auf 1 HP und keine separate Todessperre. Zusätzliche eigene Grundwerte: 500 Max-Leben, 100 P-Angriff, 0 M-Angriff, 63 P-Verteidigung und 52 M-Verteidigung. Diese Werte werden zur bisherigen Vererbung addiert. Grundfrequenz 1,5 Angriffe pro Sekunde. Bindung wirkt direkt und zusätzlich auf die Kreaturenattribute; die normale Lerngrenze des Meisters ist zu beachten.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 300 |
| skillPointCosts.rankCosts.0 | 300 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 42 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Spirit Animal |
| category | active |
| cd | 360 |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Beschwört einen Seelenbegleiter für maximal 360 Sekunden (6 Minuten), sofern er nicht vorher stirbt. Eine lernbare Stufe. Mana-Kosten 132, Cooldown 360 Sekunden, Castzeit 0,4 Sekunden. Er greift ausschließlich mit physischen Fernkampf-Auto-Attacks an und bufft den Meister nicht. Seine Attribute entsprechen live jeweils 10 Prozent des aktuellen Geschicks, der Vitalität und der Wisdom seines Meisters. Standardumrechnung für physische Fernkämpfer: je Geschick 1,8 P-Angriff und 1,6 Genauigkeit; je Vita 30 Max-HP, 2 P-Abwehr und 4 HP-Regeneration pro Tick; je Wisdom 30 Max-Mana, 2 M-Abwehr und 3 MP-Regeneration pro Tick. Keine direkte Übernahme von Waffenangriff oder fertigen Kampfwerten des Meisters. Kein eigener M-Angriff. Buffs und Debuffs des Meisters verändern die übernommenen Attribute live. Macht des Begleiters wirkt direkt auf seine Attribute, zusätzlich zu den übernommenen Meisterattributen. Der Begleiter ist angreifbar, wird von Flächeneffekten getroffen und belegt keinen dauerhaften Pet-Platz. Maximal ein Seelenbegleiter dieses Skills gleichzeitig; erneutes Beschwören ersetzt den bisherigen. Grund-Angriffstempo 100 Prozent wie bei Morrak; keine Übernahme von Agilität. Reichweite und Anpassung aktueller HP bei wechselndem Max-Leben bleiben offen. Der Cooldown beginnt mit der Beschwörung. Bei vorzeitigem Tod verschwindet der Begleiter; erneutes Rufen ist erst nach Ablauf des noch laufenden Beschwörungs-Cooldowns möglich. Tod startet keine zusätzliche Wartezeit. Bei voller Laufzeit von 360 Sekunden kann er nach Ablauf erneut gerufen werden. Kein Wiederbeleben auf 1 HP und keine separate Todessperre. Zusätzliche eigene Grundwerte: 500 Max-Leben, 100 P-Angriff, 0 M-Angriff, 63 P-Verteidigung und 52 M-Verteidigung. Diese Werte werden zur bisherigen Vererbung addiert. Grundfrequenz 1,5 Angriffe pro Sekunde. Bindung wirkt direkt und zusätzlich auf die Kreaturenattribute; die normale Lerngrenze des Meisters ist zu beachten. |
| description_eng | Summons a spirit companion for up to 360 seconds (6 minutes), unless killed earlier. One learnable level. Mana cost 132, cooldown 360 seconds, cast time 0.4 seconds. Uses only physical ranged basic attacks and does not buff the master. Live inherits 10% each of current master dexterity, vitality and wisdom. Standard ranged physical conversions: each dexterity gives 1.8 physical attack and 1.6 accuracy; each vitality gives 30 maximum HP, 2 physical defense and 4 HP regeneration per tick; each wisdom gives 30 maximum Mana, 2 magical defense and 3 Mana regeneration per tick. No direct inheritance of weapon attack or derived master combat stats. No own magical attack. Master buffs and debuffs affect inherited attributes live. Power of the Pet directly buffs its attributes in addition to inherited master attributes. Targetable and affected by area attacks; does not occupy a permanent pet slot. At most one spirit companion from this skill; recasting replaces it. Base attack-speed multiplier is 100%, matching Morrak; no agility inheritance. Range and current-HP adjustment when maximum HP changes remain pending. Cooldown starts on summoning. If killed early, the companion disappears and can be summoned again once the remaining summon cooldown expires. Death does not restart the cooldown. After a full 360-second lifetime, it can be summoned again. No 1-HP revival or separate death lockout. Additional fixed base stats: 500 maximum HP, 100 physical attack, 0 magical attack, 63 physical defense and 52 magical defense, added to existing inheritance. Base frequency 1.5 attacks per second. Bond applies directly to creature attributes in addition to inheritance, at the master class learning cap. |
| dmgType (Altformat) | spell |
| dur | 360 |
| maxSkillLv | 1 |
| maxUpgradeLv | 10 |
| nr | 226 |
| skillName_de | Seelenbegleiter |
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
| summonedCreatureSettings.inheritedAttributeFractions.dexterity | 0,1 |
| summonedCreatureSettings.inheritedAttributeFractions.vitality | 0,1 |
| summonedCreatureSettings.inheritedAttributeFractions.wisdom | 0,1 |
| summonedCreatureSettings.attributeConversionMode | standardRangedPhysical |
| summonedCreatureSettings.acceptsGroupCompanionBuffs | true |
| summonedCreatureSettings.maximumActiveInstances | 1 |
| summonedCreatureSettings.statSampling | liveBeforeSummonHealthPenalty |
| summonedCreatureSettings.defenseScalingStatus | defined |
| summonedCreatureSettings.attackStyle | rangedBasicAttack |
| summonedCreatureSettings.damageType | physical |
| summonedCreatureSettings.targetable | true |
| summonedCreatureSettings.affectedByAreaAttacks | true |
| summonedCreatureSettings.lifetimeSeconds | 360 |
| summonedCreatureSettings.endsOnCreatureDeath | true |
| summonedCreatureSettings.currentHealthAdjustmentStatus | pending |
| summonedCreatureSettings.summonCooldownSeconds | 360 |
| summonedCreatureSettings.cooldownStartsOn | summon |
| summonedCreatureSettings.deathRestartsCooldown | false |
| summonedCreatureSettings.attackSpeed | 1 |
| summonedCreatureSettings.baseStats.maxHealth | 500 |
| summonedCreatureSettings.baseStats.physicalAttack | 100 |
| summonedCreatureSettings.baseStats.physicalDefense | 63 |
| summonedCreatureSettings.baseStats.magicalDefense | 52 |
| summonedCreatureSettings.baseAttacksPerSecond | 1,5 |
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
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | skill |

### 86: Präzisionsschuss

Ein gezielter Schuss, der garantiert kritisch trifft. Physischer Skill-Grundschaden 491 auf Stufe 1, plus 137 je weiterer Stufe, bis zu 2409 auf Stufe 15 vor Krit-Multiplikator, Charakterangriff und Verteidigung. Mana-Kosten 221 auf Stufe 1, +62 je weiterer Stufe, maximal 1089 auf Stufe 15. Castzeit 0,4 Sekunden zum Zielen. Cooldown 71 Sekunden auf Stufe 1 und 57 Sekunden auf Stufe 15. Senkt beim getroffenen Gegner Angriffsgeschwindigkeit und Bewegungsgeschwindigkeit. Beide Senkungen beginnen auf Stufe 1 bei 0 und steigen gleichmäßig bis auf 7,5 Prozent Angriffsgeschwindigkeit und 5 Prozent Bewegungsgeschwindigkeit auf Stufe 15. Die Effektdauer beginnt bei 15 Sekunden und steigt um 1 Sekunde je weiterer Stufe auf 29 Sekunden. Die frühere Ausweichsenkung entfällt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 8 |
| skillPointCosts.rankCosts.0 | 8 |
| skillPointCosts.rankCosts.1 | 11 |
| skillPointCosts.rankCosts.2 | 13 |
| skillPointCosts.rankCosts.3 | 16 |
| skillPointCosts.rankCosts.4 | 19 |
| skillPointCosts.rankCosts.5 | 21 |
| skillPointCosts.rankCosts.6 | 24 |
| skillPointCosts.rankCosts.7 | 27 |
| skillPointCosts.rankCosts.8 | 29 |
| skillPointCosts.rankCosts.9 | 32 |
| skillPointCosts.rankCosts.10 | 35 |
| skillPointCosts.rankCosts.11 | 37 |
| skillPointCosts.rankCosts.12 | 40 |
| skillPointCosts.rankCosts.13 | 43 |
| skillPointCosts.rankCosts.14 | 45 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 55 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Precision Shot |
| category | active |
| cd | 71 |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Ein gezielter Schuss, der garantiert kritisch trifft. Physischer Skill-Grundschaden 491 auf Stufe 1, plus 137 je weiterer Stufe, bis zu 2409 auf Stufe 15 vor Krit-Multiplikator, Charakterangriff und Verteidigung. Mana-Kosten 221 auf Stufe 1, +62 je weiterer Stufe, maximal 1089 auf Stufe 15. Castzeit 0,4 Sekunden zum Zielen. Cooldown 71 Sekunden auf Stufe 1 und 57 Sekunden auf Stufe 15. Senkt beim getroffenen Gegner Angriffsgeschwindigkeit und Bewegungsgeschwindigkeit. Beide Senkungen beginnen auf Stufe 1 bei 0 und steigen gleichmäßig bis auf 7,5 Prozent Angriffsgeschwindigkeit und 5 Prozent Bewegungsgeschwindigkeit auf Stufe 15. Die Effektdauer beginnt bei 15 Sekunden und steigt um 1 Sekunde je weiterer Stufe auf 29 Sekunden. Die frühere Ausweichsenkung entfällt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | An aimed shot guaranteed to be critical. Physical skill base damage starts at 491 and increases by 137 per additional level to 2409 at level 15 before critical multiplier, character attack and defence. Mana cost 221 at level 1, maximum 1089 at level 15. Aiming cast time is 0.4 seconds. Cooldown 71 seconds at level 1 and 57 seconds at level 15. Reduces the hit enemy attack and movement speed. Both reductions start at 0 at level 1 and increase evenly to 7.5 percent attack speed and 5 percent movement speed reduction at level 15. Effect duration starts at 15 seconds and increases by 1 second per additional level to 29 seconds. Replaces the former dodge reduction. |
| dmgType (Altformat) | physical |
| dur | 15 |
| maxSkillLv | 15 |
| maxUpgradeLv | 10 |
| nr | 86 |
| patk | 491 |
| skillName_de | Präzisionsschuss |
| skillpoints | 1 |
| attackExecution.targetMode | singleEnemy |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.guaranteedCriticalHit | true |
| attackExecution.criticalImmunityStatus | pending |
| attackExecution.timingStatus | pending |
| castTimeSeconds | 0,4 |
| mana (Aktivierungskosten, kein Bonus) | 221 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 221 |
| resourceCosts[0].scaling.perLevel | 62 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 491 |
| statScaling.patk.perLevel | 137 |
| durationScaling.type | linear |
| durationScaling.base | 15 |
| durationScaling.perLevel | 1 |
| effects[0].key | precision-shot-attack-speed |
| effects[0].type | statModifier |
| effects[0].target | enemy |
| effects[0].stat | atkSpeed |
| effects[0].value | 0 |
| effects[0].unit | fraction |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0 |
| effects[0].valueScaling.perLevel | -0,005 |
| effects[0].durationSeconds | 15 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 15 |
| effects[0].durationScaling.perLevel | 1 |
| effects[1].key | precision-shot-movement-speed |
| effects[1].type | statModifier |
| effects[1].target | enemy |
| effects[1].stat | movementSpeed |
| effects[1].value | 0 |
| effects[1].unit | fraction |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | 0 |
| effects[1].valueScaling.perLevel | -0,004 |
| effects[1].durationSeconds | 15 |
| effects[1].durationScaling.type | linear |
| effects[1].durationScaling.base | 15 |
| effects[1].durationScaling.perLevel | 1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 71 |
| cooldownScaling.perLevel | -1 |
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
| levelProgression.rules[0].rule.rule.base | 221 |
| levelProgression.rules[0].rule.rule.perLevel | 62 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | patk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 491 |
| levelProgression.rules[1].rule.perLevel | 137 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | durationScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 15 |
| levelProgression.rules[2].rule.perLevel | 1 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | valueScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 0 |
| levelProgression.rules[3].rule.perLevel | -0,005 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | durationScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 15 |
| levelProgression.rules[4].rule.perLevel | 1 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | effects |
| levelProgression.rules[5].path[1] | 1 |
| levelProgression.rules[5].path[2] | valueScaling |
| levelProgression.rules[5].rule.kind | linear |
| levelProgression.rules[5].rule.base | 0 |
| levelProgression.rules[5].rule.perLevel | -0,004 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.rules[6].path[0] | effects |
| levelProgression.rules[6].path[1] | 1 |
| levelProgression.rules[6].path[2] | durationScaling |
| levelProgression.rules[6].rule.kind | linear |
| levelProgression.rules[6].rule.base | 15 |
| levelProgression.rules[6].rule.perLevel | 1 |
| levelProgression.rules[6].source | storedFormula |
| levelProgression.rules[7].path[0] | cooldownScaling |
| levelProgression.rules[7].rule.kind | bounded |
| levelProgression.rules[7].rule.min | 0,1 |
| levelProgression.rules[7].rule.rule.kind | linear |
| levelProgression.rules[7].rule.rule.base | 71 |
| levelProgression.rules[7].rule.rule.perLevel | -1 |
| levelProgression.rules[7].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

### 157: Pfeil der Vorfahren

Eigenbuff für 12 Sekunden, gebunden an den bei Aktivierung anvisierten Gegner. Jeder erfolgreiche eigene Auto-Attack gegen dieses Ziel löst drei zusätzliche Ahnenpfeile auf dasselbe Ziel aus. Jeder Zusatzpfeil verursacht 12 physischen Grundschaden je Skillstufe bis 120 auf Stufe 10: insgesamt 36 bis 360 Zusatzschaden pro auslösendem Treffer vor gegnerischer Verteidigung. Kein zusätzlicher Charakter- oder Waffenangriff, keine weiteren Gegner. Zusatzpfeile und Begleiter lösen keine Ahnenpfeile aus. Cooldown 90 Sekunden. Eigenständige Treffer-/Krit-Regeln und Verhalten beim Tod des Ziels bleiben zu klären. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

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
| skillName_eng | Ancestor's Arrow |
| category | active |
| cd | 90 |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff für 12 Sekunden, gebunden an den bei Aktivierung anvisierten Gegner. Jeder erfolgreiche eigene Auto-Attack gegen dieses Ziel löst drei zusätzliche Ahnenpfeile auf dasselbe Ziel aus. Jeder Zusatzpfeil verursacht 12 physischen Grundschaden je Skillstufe bis 120 auf Stufe 10: insgesamt 36 bis 360 Zusatzschaden pro auslösendem Treffer vor gegnerischer Verteidigung. Kein zusätzlicher Charakter- oder Waffenangriff, keine weiteren Gegner. Zusatzpfeile und Begleiter lösen keine Ahnenpfeile aus. Cooldown 90 Sekunden. Eigenständige Treffer-/Krit-Regeln und Verhalten beim Tod des Ziels bleiben zu klären. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| description_eng | Self buff lasting 12 seconds, bound to the enemy targeted on activation. Each successful own basic attack against that enemy triggers three additional ancestral arrows at the same target. Each arrow deals 12 physical base damage per skill level to 120 at level 10, totaling 36 to 360 bonus damage per triggering hit before defense. No additional character or weapon attack and no other targets. Triggered arrows and companion attacks cannot trigger further arrows. Cooldown 90 seconds. Separate hit/critical rules and behavior on target death remain pending. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 167 at level 10, before discounts. Ongoing Mana drain is calculated separately. |
| dmgType (Altformat) | selfbuff |
| dur | 12 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 157 |
| skillName_de | Pfeil der Vorfahren |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| effects[0].key | ancestor-three-arrows |
| effects[0].type | triggeredAttack |
| effects[0].target | enemy |
| effects[0].value | 12 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 12 |
| effects[0].valueScaling.perLevel | 12 |
| effects[0].durationSeconds | 12 |
| effects[0].applicationTrigger | ownBasicAttackHit |
| effects[0].additionalProjectileCount | 3 |
| effects[0].requiresOriginalTarget | true |
| effects[0].affectsOnlyTriggerTarget | true |
| effects[0].excludesTriggeredAttacks | true |
| effects[0].excludeCompanionAttacks | true |
| effects[0].addsCasterPhysicalAttack | false |
| effects[0].damageTypes[0] | physical |
| effects[0].progressionStatus | defined |
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
| levelProgression.rules[0].rule.base | 12 |
| levelProgression.rules[0].rule.perLevel | 12 |
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

### 156: Waldläufer

Eigenbuff mit einer einzigen Skillstufe für 600 Sekunden. Gewährt +2 Agilität und +3 Geschicklichkeit. Kein direkter P-Angriffsbonus; der bisherige direkte Bonus entfällt vollständig. Aktivierungskosten fest 54 Mana vor Rabatten. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillPointCosts.firstLevel | 400 |
| skillPointCosts.rankCosts.0 | 400 |
| skillPointCosts.furtherLevelsStatus | defined |
| skillPointCosts.version | 2 |
| learningRequirements.minimumCharacterLevel | 60 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Ranger |
| agi | 2 |
| category | active |
| cd | 60 |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Eigenbuff mit einer einzigen Skillstufe für 600 Sekunden. Gewährt +2 Agilität und +3 Geschicklichkeit. Kein direkter P-Angriffsbonus; der bisherige direkte Bonus entfällt vollständig. Aktivierungskosten fest 54 Mana vor Rabatten. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. |
| description_eng | Self buff with one learnable level, lasting 600 seconds. Grants +2 Agility and +3 Dexterity. No direct physical attack bonus; the former direct bonus is removed entirely. Activation costs a fixed 54 Mana before discounts. Cooldown 60 seconds; fixed cast time 0.1 seconds, unaffected by attack or cast speed. Animation duration is separate. |
| dex | 3 |
| dmgType (Altformat) | selfbuff |
| dur | 600 |
| maxSkillLv | 1 |
| maxUpgradeLv | 10 |
| nr | 156 |
| skillName_de | Waldläufer |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| mana (Aktivierungskosten, kein Bonus) | 54 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 54 |
| resourceCosts[0].scaling.perLevel | 0 |
| statScaling.agi.type | linear |
| statScaling.agi.base | 2 |
| statScaling.agi.perLevel | 0 |
| statScaling.dex.type | linear |
| statScaling.dex.base | 3 |
| statScaling.dex.perLevel | 0 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 54 |
| levelProgression.rules[0].rule.rule.perLevel | 0 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | agi |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 2 |
| levelProgression.rules[1].rule.perLevel | 0 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | dex |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 3 |
| levelProgression.rules[2].rule.perLevel | 0 |
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

### 88: Salve

Schießt mehrere Wellen aus jeweils gleichzeitig abgefeuerten Pfeilen. Stufe 1: eine Welle mit 3 Pfeilen. Stufe 2: zwei Wellen mit je 3 Pfeilen. Stufe 3: 4 und 3 Pfeile. Stufe 4: 4 und 4 Pfeile. Stufe 5: drei Wellen mit 5, 4 und 3 Pfeilen. Jeder Pfeil hat 138 physischen Skill-Grundschaden; eine zusätzliche Schadensskalierung wurde noch nicht festgelegt. Castzeit 0,2 Sekunden, vorläufige Ausführungsanimation insgesamt 1 Sekunde. Keine anhaltende Wirkung nach den Einschlägen. Genaue Wellenabstände und Verteilungspriorität sind noch offen. Ein anvisierter Gegner bestimmt das Zentrum eines Kreises mit 4 Metern Radius. Gegner innerhalb dieses Bereichs können von den Pfeilen getroffen werden. Wie sich der Mittelpunkt bei Zielbewegung verhält und nach welcher Priorität Pfeile auf mehrere Ziele verteilt werden, ist noch offen. Alle Pfeile können denselben Gegner treffen, auch einen Boss. Bei mehreren Gegnern im 4-Meter-Bereich können sich die Pfeile auf diese verteilen; ein Ziel kann dabei mehrfach getroffen werden. Auf Stufe 5 sind bis zu 12 Treffer auf dasselbe Ziel möglich. Mana-Kosten 104 auf Stufe 1, Stufenwerte 104, 207, 242, 276, 414, maximal 414 auf Stufe 5. Cooldown 72 Sekunden auf Stufe 1 und 64 Sekunden auf Stufe 5. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

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
| learningRequirements.minimumCharacterLevel | 65 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| skillName_eng | Salve |
| category | active |
| charClass[0] | Archer |
| charClass[1] | Hunter |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Schießt mehrere Wellen aus jeweils gleichzeitig abgefeuerten Pfeilen. Stufe 1: eine Welle mit 3 Pfeilen. Stufe 2: zwei Wellen mit je 3 Pfeilen. Stufe 3: 4 und 3 Pfeile. Stufe 4: 4 und 4 Pfeile. Stufe 5: drei Wellen mit 5, 4 und 3 Pfeilen. Jeder Pfeil hat 138 physischen Skill-Grundschaden; eine zusätzliche Schadensskalierung wurde noch nicht festgelegt. Castzeit 0,2 Sekunden, vorläufige Ausführungsanimation insgesamt 1 Sekunde. Keine anhaltende Wirkung nach den Einschlägen. Genaue Wellenabstände und Verteilungspriorität sind noch offen. Ein anvisierter Gegner bestimmt das Zentrum eines Kreises mit 4 Metern Radius. Gegner innerhalb dieses Bereichs können von den Pfeilen getroffen werden. Wie sich der Mittelpunkt bei Zielbewegung verhält und nach welcher Priorität Pfeile auf mehrere Ziele verteilt werden, ist noch offen. Alle Pfeile können denselben Gegner treffen, auch einen Boss. Bei mehreren Gegnern im 4-Meter-Bereich können sich die Pfeile auf diese verteilen; ein Ziel kann dabei mehrfach getroffen werden. Auf Stufe 5 sind bis zu 12 Treffer auf dasselbe Ziel möglich. Mana-Kosten 104 auf Stufe 1, Stufenwerte 104, 207, 242, 276, 414, maximal 414 auf Stufe 5. Cooldown 72 Sekunden auf Stufe 1 und 64 Sekunden auf Stufe 5. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Fires waves of simultaneously released arrows. Level 1: one wave of 3 arrows. Level 2: two waves of 3 arrows each. Level 3: 4 and 3 arrows. Level 4: 4 and 4 arrows. Level 5: three waves of 5, 4 and 3 arrows. Each arrow has 138 physical skill base damage; no additional damage scaling has been defined yet. Cast time is 0.2 seconds; provisional total execution animation is 1 second. No lingering effect after impacts. Exact wave timing and distribution priority remain pending. A selected enemy defines the centre of a circle with a 4 metre radius. Enemies inside that area can be hit by the arrows. Whether the centre follows a moving target and the distribution priority among multiple targets remain pending. All arrows can hit the same enemy, including a boss. With multiple enemies inside the 4 metre area, arrows can be distributed among them, with repeated hits on a target allowed. Level 5 can deal up to 12 hits to a single target. Mana cost 104 at level 1, maximum 414 at level 5. Cooldown 72 seconds at level 1 and 64 seconds at level 5. |
| dmgType (Altformat) | physical |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 88 |
| patk | 138 |
| skillName_de | Salve |
| skillpoints | 1 |
| animationDurationSeconds | 1 |
| animationTimingStatus | provisional |
| attackExecution.projectileWavesByLevel[0].counts[0] | 3 |
| attackExecution.projectileWavesByLevel[1].counts[0] | 3 |
| attackExecution.projectileWavesByLevel[1].counts[1] | 3 |
| attackExecution.projectileWavesByLevel[2].counts[0] | 4 |
| attackExecution.projectileWavesByLevel[2].counts[1] | 3 |
| attackExecution.projectileWavesByLevel[3].counts[0] | 4 |
| attackExecution.projectileWavesByLevel[3].counts[1] | 4 |
| attackExecution.projectileWavesByLevel[4].counts[0] | 5 |
| attackExecution.projectileWavesByLevel[4].counts[1] | 4 |
| attackExecution.projectileWavesByLevel[4].counts[2] | 3 |
| attackExecution.damageValueScope | perHit |
| attackExecution.timingStatus | pending |
| attackExecution.projectileTargetDistributionStatus | pending |
| attackExecution.canRepeatTarget | true |
| castTimeSeconds | 0,2 |
| hasLingeringDamage | false |
| attackArea.shape | circle |
| attackArea.center | selectedTarget |
| attackArea.radiusMeters | 4 |
| attackArea.target | enemiesInArea |
| attackArea.centerTracking | pending |
| attackArea.timingStatus | pending |
| cd | 72 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 72 |
| cooldownScaling.perLevel | -2 |
| mana (Aktivierungskosten, kein Bonus) | 104 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.values[0] | 104 |
| resourceCosts[0].scaling.values[1] | 207 |
| resourceCosts[0].scaling.values[2] | 242 |
| resourceCosts[0].scaling.values[3] | 276 |
| resourceCosts[0].scaling.values[4] | 414 |
| resourceCosts[0].scaling.base | 104 |
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
| levelProgression.rules[0].rule.rule.base | 72 |
| levelProgression.rules[0].rule.rule.perLevel | -2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | outputCost |
| levelProgression.rules[1].rule.factor | 0,25 |
| levelProgression.rules[1].rule.basis | damage |
| levelProgression.rules[1].rule.minimum | 0 |
| levelProgression.rules[1].source | verifiedManaPricing |
| levelProgression.extensionNeedsDefinition[0] | attackExecution.projectileWavesByLevel |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

## Gemeinsame Blöcke

[Kreaturenskills](../shared-creature-skills.md) und [Trainingsskills](../shared-training-skills.md) werden einmal gemeinsam geprüft. Die normale Lerngrenze für Bindung und Zucht ist bereits 1. Die zweite Kreaturen-Spezialklasse und ihre Lerngrenzen sind noch zu bestätigen.

## Reihenfolge

Diese Klassenrunde beginnt jetzt. Bereits bestätigte gemeinsame Skills sind mit aktuellen Werten enthalten. Klassenspezifische Wirkungen, Kosten und Skalierungen werden noch geprüft.

<!-- full-skill-point-costs:start -->
## Skillpunktkosten je Stufe

Aktuell vollständig gespeichert: **8227 SP** für alle 32 Skills einschließlich günstiger Taming-Sonderkosten. Weitere Charakterlevel für einzelne Ausbaustufen sind davon getrennt und noch zu verteilen. Alte Pauschalsummen in historischen Prüfabschnitten gelten nicht für diese Preise.

| Nr | Skill | SP je Skillstufe | Gesamt-SP |
| ---: | --- | --- | ---: |
| 5 | Adaption | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 10 | Auf der Jagd | 30 / 45 / 60 / 75 / 90 | 300 |
| 14 | Ausweichrolle | 130 / 170 | 300 |
| 18 | Bogenschießtraining | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 25 | Doppelsprung | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 37 | Entzugspfeil | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 43 | Erweiterung der Sinne | 12 / 16 / 20 / 24 / 28 / 32 / 36 / 40 / 44 / 48 | 300 |
| 51 | Feuerpfeil | 12 / 12 / 13 / 13 / 13 / 14 / 14 / 14 / 15 / 15 / 15 / 15 / 16 / 16 / 16 / 17 / 17 / 17 / 18 / 18 | 300 |
| 53 | Gebundener Schuss | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 63 | Kettenschuss | 30 / 45 / 60 / 75 / 90 | 300 |
| 86 | Präzisionsschuss | 8 / 11 / 13 / 16 / 19 / 21 / 24 / 27 / 29 / 32 / 35 / 37 / 40 / 43 / 45 | 400 |
| 88 | Salve | 40 / 60 / 80 / 100 / 120 | 400 |
| 97 | Schockschuss | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 121 | Verstärkter Pfeil | 5 / 6 / 7 / 8 / 9 / 10 / 11 / 12 / 13 / 14 / 16 / 17 / 18 / 19 / 20 / 21 / 22 / 23 / 24 / 25 | 300 |
| 122 | Voll Durchziehen | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 133 | Tamen | 10 | 10 |
| 134 | Bindung | 6 | 6 |
| 135 | Kontrolle | 4 | 4 |
| 136 | Beschwören | 1 | 1 |
| 137 | Zurückrufen | 1 | 1 |
| 138 | Zucht | 5 | 5 |
| 139 | Ausdauertraining | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 142 | Ausweichtraining | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 144 | Rüstungstraining | 1 / 7 / 14 / 20 / 27 / 33 / 40 / 46 / 53 / 59 | 300 |
| 150 | Macht des Begleiters | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 152 | Giftpfeil | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 153 | Treffsicherheit | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 154 | Auge des Falken | 10 / 14 / 19 / 23 / 28 / 32 / 37 / 41 / 46 / 50 | 300 |
| 156 | Waldläufer | 400 | 400 |
| 157 | Pfeil der Vorfahren | 13 / 19 / 25 / 31 / 37 / 43 / 49 / 55 / 61 / 67 | 400 |
| 201 | Waffentraining | 1 / 2 / 4 / 5 / 7 / 8 / 10 / 11 / 13 / 14 / 16 / 17 / 19 / 20 / 22 / 23 / 25 / 26 / 28 / 29 | 300 |
| 226 | Seelenbegleiter | 300 | 300 |
<!-- full-skill-point-costs:end -->

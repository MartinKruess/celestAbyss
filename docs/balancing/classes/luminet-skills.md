# Luminet / Lichtmagier: Werte und Skillprüfung

Einteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.

**32 unterschiedliche zugeordnete Skills: 20 aktive und 12 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie bei den bisher geprüften Klassen. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.

| Art | Anzahl | Skills |
| --- | ---: | --- |
| Übrige Passive einschließlich Procs | 9 | Erleuchtung, Erweiterung des Geistes, Hoffnungsschimmer, Unerschöpfliche Hoffnung, Ausdauertraining, Rüstungstraining, Waffentraining, Das ewige Wissen, Läuterung |
| Aktive Skills (Angriff/Heilung/Unterstützung) | 15 | Astralkörper, Ätherregen, Eislanze, Energieschlag, Erste Hilfe, Schwerter des Lichtes, Urteil des Himmels, Aurora Wellen, Strafendes Licht, Heiliges Kreuz, Heilige Vernichtung, Göttliche Nova, Licht kristallenes Gefängnis, Geheiligte Barriere, Luminus |
| Eigenbuffs | 2 | Festigung des Glaubens, Aura Unterdrückung |
| Kreaturen aktiv | 3 | Tamen, Beschwören, Zurückrufen |
| Kreaturen passiv | 3 | Bindung, Kontrolle, Zucht |

## Skillpunkte und Freischaltung

**280 Skillpunkte** für alle 32 Skills auf ihrer maximal lernbaren Stufe: 157 für aktive Skills einschließlich Buffs und 123 für Passive. Jede gelernte Stufe kostet einen Punkt, einschließlich Stufe 1. Gemeinsame Skills zählen einmal.

**Aura Unterdrückung (Nr. 165)** ist derselbe aktive Selbstbuff wie beim Kräuterkundler und wird für beide Klassen ab **Charakterlevel 22** erlernbar. Zehn Skillstufen: je Stufe 0,5 % weniger neu erzeugte Schadens-Aggro und +1,2 Intelligenz, maximal 5 % und +12 Intelligenz. Dauer 180 Sekunden, Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden, Aktivierungskosten 50 bis 167 Mana. Charakterlevel-Voraussetzungen für weitere Skillstufen sind noch offen.

## Basis und Ausrüstung

R1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.

### Basis ohne Ausrüstung

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 171 | 441 | 741 | 1.041 | 1.341 | 1.641 | 1.941 |
| Mana | 167 | 437 | 737 | 1.037 | 1.337 | 1.637 | 1.937 |
| P-Angriff | 4 | 20,2 | 38,2 | 56,2 | 74,2 | 92,2 | 110,2 |
| M-Angriff | 14 | 30,2 | 48,2 | 66,2 | 84,2 | 102,2 | 120,2 |
| P-Defense | 4 | 22 | 42 | 62 | 82 | 102 | 122 |
| M-Defense | 8 | 26 | 46 | 66 | 86 | 106 | 126 |

### Mit Rüstung und Magiewaffe

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 431 | 701 | 1.176 | 1.891 | 2.391 | 2.891 | 3.541 |
| Mana | 492 | 762 | 1.282 | 1.807 | 2.342 | 3.087 | 3.947 |
| P-Angriff | 4 | 20,2 | 38,2 | 56,2 | 74,2 | 92,2 | 110,2 |
| M-Angriff | 39 | 55,2 | 97,6 | 154 | 234,4 | 358,2 | 539,6 |
| P-Defense | 51 | 69 | 123 | 216 | 320 | 426 | 548 |
| M-Defense | 84 | 102 | 193 | 341 | 467 | 592 | 804 |

Die vorhandene Wand-Tabelle dient als Vergleich für die Magiewaffe. Int/Faith/Vic wird einmal als alternativer Angriffsbonus gerechnet. Waffen-Speed ist noch nicht eingerechnet. Equipment-Vorschläge sind nicht übernommen. Grundregeneration: 25 Mana und 12 HP pro Tick. Das Intervall wird später in Unreal geprüft. Bestehende gemeinsame Skillwerte werden übernommen; fehlende Werte werden nicht geschätzt.

## Skillübersicht

| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Erleuchtung | Passive | 20 | Mana-Regeneration +1<br>Wisdom +0,5<br>Intelligenz +0,5 | Intelligenz: 0,5 bis 10<br>Wisdom: 0,5 bis 10<br>Mana-Regeneration: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 8 | Astralkörper | Skill / magisch | 5 | M-Angriff +506<br>Animation 4 s (vorläufig) | M-Angriff: 506 bis 1.450 | Mana-Kosten: 127 bis 363 | 123 bis 115 | 0.5 | Wirkung einmalig; Animation 4 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 9 | Ätherregen | Skill / magisch | 10 | M-Angriff +300<br>periodicDamage, Ziel enemiesInArea, 300<br>heal, Ziel alliesInArea, 75<br>Fläche: undefined m vor Spieler | M-Angriff: 300 bis 957<br>periodicDamage/: 300 bis 957 | Mana-Kosten: 110 bis 239 | 152 bis 125 | 0.6 | periodicDamage: 6 bis 8 s<br>heal: 6 bis 8 s | Gemeinsame Definition |
| 29 | Eislanze | Skill / magisch | 10 | M-Angriff +187 | M-Angriff: 187 bis 628 | Mana-Kosten: 47 bis 155 | 50 bis 41 | 0.6 | 5 | Gemeinsame Definition |
| 36 | Energieschlag | Skill / magisch | 20 / Lichtmagier 20 | M-Angriff +63 | M-Angriff: 63 bis 519 | Mana-Kosten: 16 bis 149 | 12 bis 4 | 0.1 | 0 (einmalig) | Gemeinsame Definition |
| 41 | Erste Hilfe | Skill | 10 | Heilt dich nach einer Cast Time von 0,2 Sekunden sofort um 50 Lebenspunkte. Je weiterer Skillstufe steigt die Heilung um 25, bis zu 275 Lebenspunkten. Die Mana-Kosten 18 auf Stufe 1, +9 je weiterer Stufe, maximal 99 auf Stufe 10. Der Cooldown sinkt von 35 um 1 Sekunde je weiterer Stufe auf 26 Sekunden. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).<br>heal, Ziel self, 50 | heal/: 50 bis 275 | Mana-Kosten: 18 bis 99 | 35 bis 26 | 0.2 | heal: 0 s | Gemeinsame Definition |
| 44 | Erweiterung des Geistes | Passive | 10 | Wisdom +1<br>Intelligenz +1<br>Dexterity +1 | Intelligenz: 1 bis 10<br>Wisdom: 1 bis 10<br>Dexterity: 1 bis 10 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 60 | Hoffnungsschimmer | Passive | 10 | Mana-Regeneration +8<br>Wisdom +0,4<br>Intelligenz +0,6 | Mana-Regeneration: 8 bis 40<br>Intelligenz: 0,6 bis 6<br>Wisdom: 0,4 bis 4 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 74 | Festigung des Glaubens | Selbstbuff | 10 | Wisdom +-1<br>Intelligenz +3 | Intelligenz: 3 bis 30<br>Wisdom: -1 bis -10 | Mana-Kosten: 50 bis 167 | 60 | 0.1 | 300 | Gemeinsame Definition |
| 101 | Schwerter des Lichtes | Skill / magisch | 10 | M-Angriff +273<br>statModifier, Ziel alliesInArea, int, 13<br>Fläche: 7,5 m Radius um Skillzentrum<br>Ein einzelnes Ziel | M-Angriff: 273 bis 1.029<br>statModifier/int: 13 bis 17,5 | Mana-Kosten: 68 bis 257 | 72 bis 63 | 0.7 | int: 10 bis 30 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 116 | Unerschöpfliche Hoffnung | Passive | 10 | Vita +1<br>M-Angriff +2 | M-Angriff: 2 bis 20<br>Luck: 0 bis 3<br>Vita: 1 bis 10 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 117 | Urteil des Himmels | Skill / magisch | 5 | M-Angriff +316 | M-Angriff: 316 bis 768 | Mana-Kosten: 119 bis 287 | 44 | 0.5 | 2 | Gemeinsame Definition; Vom Ritter entfernt, vorläufig Luminet zugeordnet; mögliche spätere Heiler-Zuordnung offen |
| 133 | Tamen | Skill | 3 / Lichtmagier 1 | Versucht, eine Kreatur zu zähmen. Erfordert das passende spezielle Taming-Item für diese Kreatur. Die Grunderfolgschance beginnt bei 50 Prozent und steigt je weiterer Skillstufe um 15 Prozentpunkte auf 80 Prozent. Ein Kreaturen-Gegenwert beeinflusst die endgültige Erfolgschance; die Berechnung ist noch festzulegen. Die Mana-Kosten steigen von 100 um 25 je weiterer Stufe auf 150. Die Cast Time sinkt von 3 um 0,5 Sekunden je weiterer Stufe auf 2 Sekunden, der Cooldown von 60 um 10 Sekunden je weiterer Stufe auf 40 Sekunden. Der Versuch verursacht keinen Schaden und hat keine anschließende Effektdauer. Der Itemverbrauch ist noch festzulegen. Die Definition umfasst drei Stufen; die normale Lerngrenze anderer Klassen liegt bei Stufe 1. Der Abenteurer kann Stufe 3 lernen; eine zweite Spezialklasse ist noch nicht festgelegt. | Nicht vollständig gespeichert | Mana-Kosten: 100 bis 150 | 60 bis 40 | 3 bis 2 | 0 (keine anschließende Wirkung) | Gemeinsame Definition; Levelskalierung prüfen |
| 134 | Bindung | Passive | 3 / Lichtmagier 1 | Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.<br>statModifier, Ziel companion, str, 10<br>statModifier, Ziel companion, vita, 10<br>statModifier, Ziel companion, int, 10<br>statModifier, Ziel companion, wis, 10 | statModifier/str: 10 bis 20<br>statModifier/vita: 10 bis 20<br>statModifier/int: 10 bis 20<br>statModifier/wis: 10 bis 20 | Keine | Entfällt | Entfällt | str: 0 s<br>vita: 0 s<br>int: 0 s<br>wis: 0 s | Gemeinsame Definition |
| 135 | Kontrolle | Passive | 2 / Lichtmagier 1 | Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen. | Nicht vollständig gespeichert | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition; Levelskalierung prüfen |
| 136 | Beschwören | Skill | 1 | Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 1 | Nicht gespeichert | Gemeinsame Definition |
| 137 | Zurückrufen | Skill | 1 | Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 0 | Nicht gespeichert | Gemeinsame Definition |
| 138 | Zucht | Passive | 3 / Lichtmagier 1 | Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.<br>experienceBonus, Ziel companion, 0,1 | experienceBonus/: 10 bis 30 % | Keine | Entfällt | Entfällt | experienceBonus: 0 s | Gemeinsame Definition |
| 139 | Ausdauertraining | Passive | 20 | Vita +1<br>Wisdom +1 | Vita: 1 bis 20<br>Wisdom: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 144 | Rüstungstraining | Passive | 10 | P-Defense +3<br>M-Defense +6 | P-Defense: 3 bis 30<br>M-Defense: 6 bis 60 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 165 | Aura Unterdrückung | Selbstbuff | 10 | Intelligenz +1,2<br>threatMultiplier, Ziel self, 0,995 | Intelligenz: 1,2 bis 12<br>threatMultiplier/: 99,5 bis 95 % | Mana-Kosten: 50 bis 167 | 60 | 0.1 | threatMultiplier: 180 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 201 | Waffentraining | Passive | 20 | P-Angriff +1<br>M-Angriff +1 | P-Angriff: 1 bis 20<br>M-Angriff: 1 bis 20 | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 208 | Das ewige Wissen | Passive | 10 | Wisdom +0,6<br>Intelligenz +1,4 | Intelligenz: 1,4 bis 14<br>Wisdom: 0,6 bis 6 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 211 | Aurora Wellen | Skill / magisch | 10 | M-Angriff +384<br>Fläche: 6 × 4 m; Position zum Ziel offen | M-Angriff: 384 bis 1.500 | Mana-Kosten: 96 bis 375 | 300 bis 237 | 0.8 | Nicht gespeichert | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 213 | Strafendes Licht | Skill / magisch | 10 | M-Angriff +292<br>damageBonus, Ziel enemy, 0,05<br>Animation 1 s (vorläufig) | M-Angriff: 292 bis 1.255 | Mana-Kosten: 73 bis 316 | 92 bis 83 | 0.3 | damageBonus: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 215 | Heiliges Kreuz | Skill / magisch | 10 | M-Angriff +237<br>Animation 1 s (vorläufig) | M-Angriff: 237 bis 1.146 | Mana-Kosten: 59 bis 284 | 48 | 0.2 | 0 bis 0 | Gemeinsame Definition; Vom Ritter zum Lichtmagier übernommen |
| 216 | Heilige Vernichtung | Skill / magisch | 10 | M-Angriff +113<br>Animation 0,6 s (vorläufig)<br>Ein einzelnes Ziel | M-Angriff: 113 bis 446 | Mana-Kosten: 85 bis 337 | 55 bis 46 | 0.1 | 0 bis 0 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 217 | Göttliche Nova | Skill / magisch | 10 | M-Angriff +473<br>Animation 2,5 s (vorläufig)<br>Fläche: 2 m Radius um anvisiertes Ziel<br>Maximal 5 Gegner, jeweils ein Treffer | M-Angriff: 473 bis 1.415 | Mana-Kosten: 118 bis 354 | 176 bis 158 | 0.4 | 2,5 bis 2,5 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 218 | Licht kristallenes Gefängnis | Skill / magisch | 3 | M-Angriff +291<br>control, Ziel enemy<br>damageTakenBonus, Ziel enemy, 0,01 | M-Angriff: 291 bis 509<br>damageTakenBonus/: 1 bis 3 % | Mana-Kosten: 73 bis 127 | 130 bis 120 | 0.5 | root: 1 bis 4 s<br>damageTakenBonus: 1 bis 4 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 228 | Geheiligte Barriere | Skill | 1 | Erschafft für 9 Sekunden eine schützende Barriere mit 4 Metern Radius um dich. Du und Verbündete innerhalb der Barriere erleiden 20 Prozent weniger magischen Schaden. Wer den Bereich verlässt, verliert den Schutz. Kostet 150 Mana, Castzeit 0,3 Sekunden. Bestehender Cooldown 300 Sekunden.<br>damageReduction, Ziel alliesInArea, 0,2 | Nicht vollständig gespeichert | Mana-Kosten: 150 bis 150 | 300 | 0.3 | damageReduction: 9 s | Gemeinsame Definition |
| 231 | Luminus | Skill / magisch | 10 | M-Angriff +42<br>Animation 0,2 s (vorläufig) | M-Angriff: 42 bis 249 | Mana-Kosten: 11 bis 65 | 14 bis 5 | 0.1 | 0 bis 0 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 260 | Läuterung | Passive | 10 | Permanente Passive. Je Skillstufe erleidest du 1 Prozent weniger Giftschaden und 0,5 Prozent weniger Dunkelheitsschaden. Zusätzlich besteht je Skillstufe eine um 0,5 Prozentpunkte erhöhte Chance, einen neu angewendeten Fluch abzuwehren. Auf Stufe 10: 10 Prozent Giftschadensresistenz, 5 Prozent Dunkelheitsschadensresistenz und 5 Prozent Fluchresistenz. Verhindert keine Vergiftung und entfernt keine bestehenden Vergiftungen oder Flüche. Keine Aktivierungskosten, Castzeit oder Cooldown.<br>damageReduction, Ziel self, 0,01<br>damageReduction, Ziel self, 0,005<br>statusResistance, Ziel self, 0,005 | damageReduction/: 1 bis 10 %<br>damageReduction/: 0,5 bis 5 %<br>statusResistance/: 0,5 bis 5 % | Keine | Entfällt | Entfällt | damageReduction: 0 s<br>damageReduction: 0 s<br>statusResistance: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |

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

### 8: Astralkörper

Erschafft ein Abbild deiner selbst, das durch die Gegner fliegt, ihnen Schaden zufügt und dahinter verschwindet. Es kann auch Gegnergruppen treffen, laut bisheriger Beschreibung bis zu sieben Gegner. Die vorläufige Animation dauert 4 Sekunden und blockiert keine weiteren Angriffe. Kein viersekündiger DoT. Magischer Skill-Grundschaden 506 auf Stufe 1, plus 236 je weiterer Stufe, bis zu 1450 auf Stufe 5. Mana-Kosten 127 auf Stufe 1, +59 je weiterer Stufe, maximal 363 auf Stufe 5. Cooldown 123 Sekunden auf Stufe 1, 115 Sekunden auf Stufe 5; bisheriger Stufenverlauf um 3 Sekunden erhöht. Castzeit 0,5 Sekunden. Jeder Gegner kann pro Anwendung höchstens einmal getroffen werden; keine Mehrfachtreffer auf dasselbe Ziel. Genaue Flugbahn und Trefferbereich bleiben noch offen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Astral Body |
| category | active |
| cd | 123 |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erschafft ein Abbild deiner selbst, das durch die Gegner fliegt, ihnen Schaden zufügt und dahinter verschwindet. Es kann auch Gegnergruppen treffen, laut bisheriger Beschreibung bis zu sieben Gegner. Die vorläufige Animation dauert 4 Sekunden und blockiert keine weiteren Angriffe. Kein viersekündiger DoT. Magischer Skill-Grundschaden 506 auf Stufe 1, plus 236 je weiterer Stufe, bis zu 1450 auf Stufe 5. Mana-Kosten 127 auf Stufe 1, +59 je weiterer Stufe, maximal 363 auf Stufe 5. Cooldown 123 Sekunden auf Stufe 1, 115 Sekunden auf Stufe 5; bisheriger Stufenverlauf um 3 Sekunden erhöht. Castzeit 0,5 Sekunden. Jeder Gegner kann pro Anwendung höchstens einmal getroffen werden; keine Mehrfachtreffer auf dasselbe Ziel. Genaue Flugbahn und Trefferbereich bleiben noch offen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Creates an image of yourself that flies through enemies, deals damage and disappears behind them. Can hit groups, up to seven enemies according to the existing description. Provisional animation lasts 4 seconds and does not block further attacks. Does not deal damage over time for four seconds. Magical skill base damage starts at 506 and increases by 236 per additional level to 1450 at level 5. Mana cost 127 at level 1, maximum 363 at level 5. Cooldown 123 seconds at level 1 and 115 seconds at level 5; previous progression increased by 3 seconds throughout. Cast time is 0.5 seconds. Each enemy can be hit at most once per activation; no repeated hits on the same target. Exact trajectory and hit area remain pending. |
| dmgType (Altformat) | spell |
| matk | 506 |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 8 |
| skillName_de | Astralkörper |
| skillpoints | 1 |
| castTimeSeconds | 0,5 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 123 |
| cooldownScaling.perLevel | -2 |
| mana (Aktivierungskosten, kein Bonus) | 127 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 127 |
| resourceCosts[0].scaling.perLevel | 59 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 506 |
| statScaling.matk.perLevel | 236 |
| animationDurationSeconds | 4 |
| animationTimingStatus | provisional |
| blocksOtherSkillsDuringAnimation | false |
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
| levelProgression.rules[0].rule.rule.base | 123 |
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
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 506 |
| levelProgression.rules[2].rule.perLevel | 236 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |
| attackExecution.hitCount | 1 |
| attackExecution.maxHitsPerTargetPerActivation | 1 |

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

### 36: Energieschlag

Luminet-Spezialisierung von Energieschlag mit 20 lernbaren Stufen. Einmaliger magischer Schaden: 63 Grundschaden auf Stufe 1 und +24 je weiterer Stufe, bis 519 auf Stufe 20, zuzüglich M-Angriff. Mana 16 auf Stufe 1 und +7 je weiterer Stufe, bis 149 auf Stufe 20. Cooldown Stufen 1–4: 12 Sekunden; 5–9: 10 Sekunden; 10–14: 8 Sekunden; 15–19: 6 Sekunden; Stufe 20: 4 Sekunden. Castzeit 0,1 Sekunden. Heiler und Druide behalten ihre eigene Variante und maximal Stufe 5.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Energy Strike |
| category | active |
| cd | 12 |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| charClass[2] | Healer |
| charClass[3] | Priest |
| charClass[4] | Druide |
| charClass[5] | Alchemist |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Luminet-Spezialisierung von Energieschlag mit 20 lernbaren Stufen. Einmaliger magischer Schaden: 63 Grundschaden auf Stufe 1 und +24 je weiterer Stufe, bis 519 auf Stufe 20, zuzüglich M-Angriff. Mana 16 auf Stufe 1 und +7 je weiterer Stufe, bis 149 auf Stufe 20. Cooldown Stufen 1–4: 12 Sekunden; 5–9: 10 Sekunden; 10–14: 8 Sekunden; 15–19: 6 Sekunden; Stufe 20: 4 Sekunden. Castzeit 0,1 Sekunden. Heiler und Druide behalten ihre eigene Variante und maximal Stufe 5. |
| description_eng | Luminet specialization of Energy Strike with 20 learnable levels. Deals magical damage once: 63 base damage at level 1 plus 24 per additional level, reaching 519 at level 20, plus magical attack. Mana starts at 16 and increases by 7 per additional level to 149. Cooldown is 12 seconds at levels 1–4, 10 at levels 5–9, 8 at levels 10–14, 6 at levels 15–19 and 4 at level 20. Cast time 0.1 seconds. Healer and Druid retain their own version capped at level 5. |
| dmgType (Altformat) | spell |
| matk | 63 |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 36 |
| skillName_de | Energieschlag |
| skillpoints | 1 |
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
| hasLingeringDamage | false |
| mana (Aktivierungskosten, kein Bonus) | 16 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 16 |
| resourceCosts[0].scaling.perLevel | 7 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 63 |
| statScaling.matk.perLevel | 24 |
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
| levelProgression.rules[0].rule.rule.kind | periodicSteps |
| levelProgression.rules[0].rule.rule.base | 12 |
| levelProgression.rules[0].rule.rule.steps[0] | 0 |
| levelProgression.rules[0].rule.rule.steps[1] | 0 |
| levelProgression.rules[0].rule.rule.steps[2] | 0 |
| levelProgression.rules[0].rule.rule.steps[3] | -2 |
| levelProgression.rules[0].rule.rule.steps[4] | 0 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 16 |
| levelProgression.rules[1].rule.rule.perLevel | 7 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 63 |
| levelProgression.rules[2].rule.perLevel | 24 |
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

### 41: Erste Hilfe

Heilt dich nach einer Cast Time von 0,2 Sekunden sofort um 50 Lebenspunkte. Je weiterer Skillstufe steigt die Heilung um 25, bis zu 275 Lebenspunkten. Die Mana-Kosten 18 auf Stufe 1, +9 je weiterer Stufe, maximal 99 auf Stufe 10. Der Cooldown sinkt von 35 um 1 Sekunde je weiterer Stufe auf 26 Sekunden. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | First Aid |
| category | active |
| cd | 35 |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| charClass[2] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Heilt dich nach einer Cast Time von 0,2 Sekunden sofort um 50 Lebenspunkte. Je weiterer Skillstufe steigt die Heilung um 25, bis zu 275 Lebenspunkten. Die Mana-Kosten 18 auf Stufe 1, +9 je weiterer Stufe, maximal 99 auf Stufe 10. Der Cooldown sinkt von 35 um 1 Sekunde je weiterer Stufe auf 26 Sekunden. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Instantly heals you for 50 Health after a 0.2 second cast time. Healing increases by 25 per additional skill level, up to 275 Health. Mana cost 18 at level 1, maximum 99 at level 10. Cooldown decreases from 35 by 1 second per additional level to 26 seconds. |
| dmgType (Altformat) | spell |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 41 |
| skillName_de | Erste Hilfe |
| skillpoints | 1 |
| castTimeSeconds | 0,2 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 35 |
| cooldownScaling.perLevel | -1 |
| effects[0].key | firstAidHeal |
| effects[0].type | heal |
| effects[0].target | self |
| effects[0].unit | flat |
| effects[0].value | 50 |
| effects[0].durationSeconds | 0 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 50 |
| effects[0].valueScaling.perLevel | 25 |
| effects[0].progressionStatus | defined |
| effectsVersion | 1 |
| mana (Aktivierungskosten, kein Bonus) | 18 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 18 |
| resourceCosts[0].scaling.perLevel | 9 |
| manaPricing.category | heal |
| manaPricing.factor | 0,35 |
| manaPricing.basis | healingPerRecipient |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 35 |
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 50 |
| levelProgression.rules[1].rule.perLevel | 25 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 18 |
| levelProgression.rules[2].rule.rule.perLevel | 9 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| learningRequirements.minimumCharacterLevel | 5 |
| learningRequirements.status | defined |
| learningRequirements.furtherSkillLevelsStatus | pending |
| classificationVersion | 1 |
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

### 60: Hoffnungsschimmer

Dauerhafter Attributanteil: je gelernter Stufe +0,6 Intelligenz, +0,4 Willenskraft; auf Stufe 10 insgesamt +6 Intelligenz, +4 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Direkte MP-Regeneration auf Stufen 1/3/5/7/9 jeweils zusätzlich +8, maximal +40 je Tick.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Ray of Hope |
| category | passive |
| charClass[0] | Healer |
| charClass[1] | Priest |
| charClass[2] | Luminet |
| charClass[3] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +0,6 Intelligenz, +0,4 Willenskraft; auf Stufe 10 insgesamt +6 Intelligenz, +4 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Direkte MP-Regeneration auf Stufen 1/3/5/7/9 jeweils zusätzlich +8, maximal +40 je Tick. |
| description_eng | Permanent attribute component: +0.6 Intelligence, +0.4 Wisdom per learned level; at level 10, +6 Intelligence, +4 Wisdom total. This component always applies independently of any triggered effects. Direct Mana regeneration increases by 8 at levels 1/3/5/7/9, reaching +40 per tick. |
| dmgType (Altformat) | passive |
| int | 0,6 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 60 |
| skillName_de | Hoffnungsschimmer |
| skillpoints | 1 |
| wis | 0,4 |
| manaRegen | 8 |
| resourceCosts | [] |
| statScaling.manaRegen.type | table |
| statScaling.manaRegen.values[0] | 8 |
| statScaling.manaRegen.values[1] | 8 |
| statScaling.manaRegen.values[2] | 16 |
| statScaling.manaRegen.values[3] | 16 |
| statScaling.manaRegen.values[4] | 24 |
| statScaling.manaRegen.values[5] | 24 |
| statScaling.manaRegen.values[6] | 32 |
| statScaling.manaRegen.values[7] | 32 |
| statScaling.manaRegen.values[8] | 40 |
| statScaling.manaRegen.values[9] | 40 |
| statScaling.int.type | linear |
| statScaling.int.base | 0,6 |
| statScaling.int.perLevel | 0,6 |
| statScaling.wis.type | linear |
| statScaling.wis.base | 0,4 |
| statScaling.wis.perLevel | 0,4 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | manaRegen |
| levelProgression.rules[0].rule.kind | periodicSteps |
| levelProgression.rules[0].rule.base | 8 |
| levelProgression.rules[0].rule.steps[0] | 0 |
| levelProgression.rules[0].rule.steps[1] | 8 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | int |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,6 |
| levelProgression.rules[1].rule.perLevel | 0,6 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | wis |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 0,4 |
| levelProgression.rules[2].rule.perLevel | 0,4 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 74: Festigung des Glaubens

Selbstbuff des Lumineten. Gewährt je Skillstufe 3 Intelligenz und senkt während der Wirkung die Willenskraft um 1. Auf Stufe 10: +30 Intelligenz und −10 Willenskraft. Dauer 300 Sekunden, Cooldown 60 Sekunden. Aktivierung fest 0,1 Sekunden. Kostet 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana auf Stufe 10 vor Vergünstigungen. Wirkt ausschließlich auf dich selbst; nach Ablauf entfallen beide Attributänderungen.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Fortification of Faith |
| category | active |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Selbstbuff des Lumineten. Gewährt je Skillstufe 3 Intelligenz und senkt während der Wirkung die Willenskraft um 1. Auf Stufe 10: +30 Intelligenz und −10 Willenskraft. Dauer 300 Sekunden, Cooldown 60 Sekunden. Aktivierung fest 0,1 Sekunden. Kostet 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana auf Stufe 10 vor Vergünstigungen. Wirkt ausschließlich auf dich selbst; nach Ablauf entfallen beide Attributänderungen. |
| description_eng | Luminet self-buff. Each skill level grants 3 Intelligence and reduces Wisdom by 1 while active. At level 10: +30 Intelligence and −10 Wisdom. Duration 300 seconds; cooldown 60 seconds; fixed activation time 0.1 seconds. Costs 50 Mana at level 1 plus 13 per additional level, reaching 167 Mana at level 10 before discounts. Affects only the caster; both attribute changes end when the buff expires. |
| dmgType (Altformat) | selfbuff |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 74 |
| skillName_de | Festigung des Glaubens |
| skillpoints | 1 |
| activation | manual |
| cd | 60 |
| dur | 300 |
| int | 3 |
| statBonusTargets.int | self |
| statBonusTargets.wis | self |
| statBonusUnits.int | flat |
| statBonusUnits.wis | flat |
| statScaling.int.type | linear |
| statScaling.int.base | 3 |
| statScaling.int.perLevel | 3 |
| statScaling.wis.type | linear |
| statScaling.wis.base | -1 |
| statScaling.wis.perLevel | -1 |
| wis | -1 |
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
| levelProgression.rules[0].path[1] | int |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 3 |
| levelProgression.rules[0].rule.perLevel | 3 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | wis |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | -1 |
| levelProgression.rules[1].rule.perLevel | -1 |
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
| manaPricing.category | selfbuff |
| manaPricing.basis | skillLevel |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| timingModifiers.castTimeIsFixed | true |
| timingModifiers.affectedByAttackSpeed | false |
| timingModifiers.affectedByCastSpeed | false |
| classificationVersion | 1 |
| target | self |
| type | selfBuff |

### 101: Schwerter des Lichtes

Ein riesiges Schwert aus Licht spießt den anvisierten Gegner auf und verursacht einmalig magischen Skill-Grundschaden von 273 auf Stufe 1, plus 84 je weiterer Stufe, bis zu 1029 auf Stufe 10. Das Schwert und ein Feld mit 15 Metern Durchmesser beziehungsweise 7,5 Metern Radius bleiben danach bestehen. Die Feldlaufzeit steigt gleichmäßig von 10 auf 30 Sekunden. Du und deine Verbündeten erhalten im Feld 13 Intelligenz auf Stufe 1, plus 0,5 je weiterer Stufe, bis zu 17,5 auf Stufe 10. Der Bonus gilt nur während des Aufenthalts im Feld. Keine wiederholten Schadensticks festgelegt. Mana-Kosten 68 auf Stufe 1, +21 je weiterer Stufe, maximal 257 auf Stufe 10. Cooldown 72 Sekunden auf Stufe 1 und 63 Sekunden auf Stufe 10. Castzeit 0,7 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Swords of Light |
| category | active |
| cd | 72 |
| charClass[0] | Healer |
| charClass[1] | Priest |
| charClass[2] | Luminet |
| charClass[3] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Ein riesiges Schwert aus Licht spießt den anvisierten Gegner auf und verursacht einmalig magischen Skill-Grundschaden von 273 auf Stufe 1, plus 84 je weiterer Stufe, bis zu 1029 auf Stufe 10. Das Schwert und ein Feld mit 15 Metern Durchmesser beziehungsweise 7,5 Metern Radius bleiben danach bestehen. Die Feldlaufzeit steigt gleichmäßig von 10 auf 30 Sekunden. Du und deine Verbündeten erhalten im Feld 13 Intelligenz auf Stufe 1, plus 0,5 je weiterer Stufe, bis zu 17,5 auf Stufe 10. Der Bonus gilt nur während des Aufenthalts im Feld. Keine wiederholten Schadensticks festgelegt. Mana-Kosten 68 auf Stufe 1, +21 je weiterer Stufe, maximal 257 auf Stufe 10. Cooldown 72 Sekunden auf Stufe 1 und 63 Sekunden auf Stufe 10. Castzeit 0,7 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | A giant sword of light impales the selected enemy, dealing magical skill base damage once, starting at 273 and increasing by 84 per additional level to 1029 at level 10. The sword and a field with a 15 metre diameter and 7.5 metre radius remain afterward. Field duration increases evenly from 10 to 30 seconds. You and your allies inside gain 13 Intelligence at level 1 plus 0.5 per additional level to 17.5 at level 10. The bonus applies only while inside the field. No recurring damage ticks are defined. Mana cost 68 at level 1, maximum 257 at level 10. Cooldown 72 seconds at level 1 and 63 seconds at level 10. Cast time is 0.7 seconds. |
| dmgType (Altformat) | spell |
| dur | 10 |
| matk | 273 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 101 |
| skillName_de | Schwerter des Lichtes |
| skillpoints | 1 |
| attackArea.shape | circle |
| attackArea.center | skillCenter |
| attackArea.radiusMeters | 7,5 |
| attackArea.geometryStatus | defined |
| attackArea.timingStatus | defined |
| attackExecution.targetMode | singleEnemy |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.timingStatus | pending |
| castTimeSeconds | 0,7 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 72 |
| cooldownScaling.perLevel | -1 |
| durationScaling.type | linear |
| durationScaling.base | 10 |
| durationScaling.perLevel | 2,222 |
| effects[0].key | swords-light-intelligence-field |
| effects[0].type | statModifier |
| effects[0].target | alliesInArea |
| effects[0].stat | int |
| effects[0].value | 13 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 13 |
| effects[0].valueScaling.perLevel | 0,5 |
| effects[0].durationSeconds | 10 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 10 |
| effects[0].durationScaling.perLevel | 2,222 |
| effects[0].onlyWhileTargetInsideArea | true |
| mana (Aktivierungskosten, kein Bonus) | 68 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 68 |
| resourceCosts[0].scaling.perLevel | 21 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 273 |
| statScaling.matk.perLevel | 84 |
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
| levelProgression.rules[0].rule.rule.perLevel | -1 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 10 |
| levelProgression.rules[1].rule.perLevel | 2,222 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 13 |
| levelProgression.rules[2].rule.perLevel | 0,5 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | durationScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 10 |
| levelProgression.rules[3].rule.perLevel | 2,222 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | resourceCosts |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | scaling |
| levelProgression.rules[4].rule.kind | outputCost |
| levelProgression.rules[4].rule.factor | 0,25 |
| levelProgression.rules[4].rule.basis | damage |
| levelProgression.rules[4].rule.minimum | 0 |
| levelProgression.rules[4].source | verifiedManaPricing |
| levelProgression.rules[5].path[0] | statScaling |
| levelProgression.rules[5].path[1] | matk |
| levelProgression.rules[5].rule.kind | linear |
| levelProgression.rules[5].rule.base | 273 |
| levelProgression.rules[5].rule.perLevel | 84 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 116: Unerschöpfliche Hoffnung

Dauerhafter Attributanteil: je gelernter Stufe +1 Vitalität; auf Stufe 10 insgesamt +10 Vitalität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Direkter M-Angriff +2 je Stufe, maximal +20. Zusätzlich +1 Glück ab Stufe 5, insgesamt +3 auf Stufe 10. Kein fester Intelligenzbonus.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Inexhaustible Hope |
| category | passive |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +1 Vitalität; auf Stufe 10 insgesamt +10 Vitalität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Direkter M-Angriff +2 je Stufe, maximal +20. Zusätzlich +1 Glück ab Stufe 5, insgesamt +3 auf Stufe 10. Kein fester Intelligenzbonus. |
| description_eng | Permanent attribute component: +1 Vitality per learned level; at level 10, +10 Vitality total. This component always applies independently of any triggered effects. Direct magical attack +2 per level, up to +20. Also +1 Luck from level 5, totaling +3 at level 10. No fixed Intelligence bonus. |
| dmgType (Altformat) | passive |
| matk | 2 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 116 |
| skillName_de | Unerschöpfliche Hoffnung |
| skillpoints | 1 |
| resourceCosts | [] |
| statScaling.matk.type | linear |
| statScaling.matk.base | 2 |
| statScaling.matk.perLevel | 2 |
| statScaling.luck.type | table |
| statScaling.luck.values[0] | 0 |
| statScaling.luck.values[1] | 0 |
| statScaling.luck.values[2] | 0 |
| statScaling.luck.values[3] | 0 |
| statScaling.luck.values[4] | 1 |
| statScaling.luck.values[5] | 1 |
| statScaling.luck.values[6] | 1 |
| statScaling.luck.values[7] | 1 |
| statScaling.luck.values[8] | 1 |
| statScaling.luck.values[9] | 3 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 1 |
| statScaling.vita.perLevel | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | matk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 2 |
| levelProgression.rules[0].rule.perLevel | 2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | luck |
| levelProgression.rules[1].rule.kind | thresholds |
| levelProgression.rules[1].rule.base | 0 |
| levelProgression.rules[1].rule.changes[0].level | 5 |
| levelProgression.rules[1].rule.changes[0].value | 1 |
| levelProgression.rules[1].rule.changes[1].level | 10 |
| levelProgression.rules[1].rule.changes[1].value | 3 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | vita |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 1 |
| levelProgression.rules[2].rule.perLevel | 1 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |
| vita | 1 |

### 117: Urteil des Himmels

Ruft einen Strahl vom Himmel herab, der Gegner im betroffenen Bereich zuerst mit dem vollen magischen Skill-Schadenswert trifft. Nach 2 Sekunden verursacht der abschließende zweite Treffer 50 Prozent des ursprünglichen Schadenswerts. Der magische Grundschaden des ersten Treffers steigt von 316 um 113 je weiterer Stufe auf 768 auf Stufe 5. Der zweite Treffer entspricht 158 bis 384 Grundschaden; zusammen 474 bis 1152 vor weiteren Schadensberechnungen. Mana-Kosten 119 auf Stufe 1, +42 je weiterer Stufe, maximal 287 auf Stufe 5. Cooldown 44 Sekunden auf Stufe 1, 44 Sekunden auf Stufe 5; bisheriger Stufenverlauf um 2 Sekunden erhöht. Castzeit 0,5 Sekunden. Genauer Trefferbereich und Verrechnung mit gegnerischer Verteidigung werden noch geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Judgement of Heaven |
| category | active |
| cd | 44 |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Ruft einen Strahl vom Himmel herab, der Gegner im betroffenen Bereich zuerst mit dem vollen magischen Skill-Schadenswert trifft. Nach 2 Sekunden verursacht der abschließende zweite Treffer 50 Prozent des ursprünglichen Schadenswerts. Der magische Grundschaden des ersten Treffers steigt von 316 um 113 je weiterer Stufe auf 768 auf Stufe 5. Der zweite Treffer entspricht 158 bis 384 Grundschaden; zusammen 474 bis 1152 vor weiteren Schadensberechnungen. Mana-Kosten 119 auf Stufe 1, +42 je weiterer Stufe, maximal 287 auf Stufe 5. Cooldown 44 Sekunden auf Stufe 1, 44 Sekunden auf Stufe 5; bisheriger Stufenverlauf um 2 Sekunden erhöht. Castzeit 0,5 Sekunden. Genauer Trefferbereich und Verrechnung mit gegnerischer Verteidigung werden noch geprüft. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Calls down a beam from heaven that first hits enemies in the affected area for the full magical skill damage value. After 2 seconds, a final second hit deals 50 percent of the original damage value. First-hit base magical damage increases from 316 by 113 per additional level to 768 at level 5. Second-hit base damage is 158 to 384, totaling 474 to 1152 before further damage calculations. Mana cost 119 at level 1, maximum 287 at level 5. Cooldown 44 seconds at level 1 and 44 seconds at level 5; previous progression increased by 2 seconds throughout. Cast time is 0.5 seconds. Exact area and interaction with enemy defense remain to be reviewed. |
| dmgType (Altformat) | spell |
| maxSkillLv | 5 |
| maxUpgradeLv | 10 |
| nr | 117 |
| skillName_de | Urteil des Himmels |
| skillpoints | 1 |
| attackExecution.hitCount | 2 |
| attackExecution.damageValueScope | perHit |
| attackExecution.hitTimingStatus | defined |
| attackExecution.hitSequence[0].offsetSeconds | 0 |
| attackExecution.hitSequence[0].damageMultiplier | 1 |
| attackExecution.hitSequence[1].offsetSeconds | 2 |
| attackExecution.hitSequence[1].damageMultiplier | 0,5 |
| dur | 2 |
| mana (Aktivierungskosten, kein Bonus) | 119 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 119 |
| resourceCosts[0].scaling.perLevel | 42 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 316 |
| statScaling.matk.perLevel | 113 |
| castTimeSeconds | 0,5 |
| matk | 316 |
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
| levelProgression.rules[0].rule.rule.base | 119 |
| levelProgression.rules[0].rule.rule.perLevel | 42 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | matk |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 316 |
| levelProgression.rules[1].rule.perLevel | 113 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
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

### 165: Aura Unterdrückung

Eigenbuff für Kräuterkundler und Luminet, Dauer 180 Sekunden. Reduziert die durch Schaden neu erzeugte Aggro um 0,5 Prozent je gelerntem Skilllevel, bis zu 5 Prozent auf Stufe 10. Der Aggro-Multiplikator sinkt von 0,995 auf 0,95; der tatsächlich verursachte Schaden bleibt unverändert. Bei 1000 Schaden entstehen auf Stufe 10 950 Schadens-Aggro. Bereits angesammelte Aggro wird nicht rückwirkend gelöscht. Gewährt zusätzlich 1,2 Intelligenz je Skillstufe, bis zu 12 Intelligenz auf Stufe 10. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Cooldown 60 Sekunden. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
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

### 208: Das ewige Wissen

Dauerhafter Attributanteil: je gelernter Stufe +1,4 Intelligenz, +0,6 Willenskraft; auf Stufe 10 insgesamt +14 Intelligenz, +6 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | The Eternal Knowledge |
| category | passive |
| charClass[0] | Healer |
| charClass[1] | Priest |
| charClass[2] | Luminet |
| charClass[3] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +1,4 Intelligenz, +0,6 Willenskraft; auf Stufe 10 insgesamt +14 Intelligenz, +6 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent attribute component: +1.4 Intelligence, +0.6 Wisdom per learned level; at level 10, +14 Intelligence, +6 Wisdom total. This component always applies independently of any triggered effects. No activation cost, cast time or cooldown. |
| dmgType (Altformat) | passive |
| int | 1,4 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 208 |
| skillName_de | Das ewige Wissen |
| skillpoints | 1 |
| wis | 0,6 |
| resourceCosts | [] |
| statScaling.int.type | linear |
| statScaling.int.base | 1,4 |
| statScaling.int.perLevel | 1,4 |
| statScaling.wis.type | linear |
| statScaling.wis.base | 0,6 |
| statScaling.wis.perLevel | 0,6 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | int |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 1,4 |
| levelProgression.rules[0].rule.perLevel | 1,4 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | wis |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 0,6 |
| levelProgression.rules[1].rule.perLevel | 0,6 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 211: Aurora Wellen

Beschwört eine Welle aus Licht, die durch eine größere Fläche fliegt. In der Mitte voller Schaden, an den äußeren Rändern halber Schaden. Die Fläche ist rechteckig, 6 Meter lang und 4 Meter breit, vor dem Spieler beziehungsweise mit Bezug zum anvisierten Gegner. Die Breite teilt sich quer zur Wellenrichtung in 30 Prozent linken Rand, 40 Prozent Mitte und 30 Prozent rechten Rand. Bei 4 Metern Gesamtbreite sind die Randstreifen je 1,2 Meter und die Mitte 1,6 Meter breit. Die Mitte verursacht vollen Schaden, beide Randstreifen halben Schaden. Für die Zuordnung zählt ausschließlich der Positions-/Referenzpunkt des getroffenen Charakters, nicht seine sichtbare Körperbreite oder eine Überlappung mehrerer Zonen. Die exakten Übergangslinien zählen zur Mitte, jedes Ziel erhält nur einen Zonenfaktor je Treffer. Die genaue Position und Ausrichtung der Gesamtfläche relativ zum Gegner bleiben offen. M-Angriff 384 auf Stufe 1, +124 je weiterer Stufe, auf Stufe 10 insgesamt 1500. Mana-Kosten 96 auf Stufe 1, +31 je weiterer Stufe, maximal 375 auf Stufe 10. Cooldown 300 Sekunden, -7 je weiterer Stufe, auf Stufe 10 237 Sekunden. Castzeit 0,8 Sekunden. Die bisherigen 12 Sekunden sind keine bestätigte Wirkungsdauer: Animationsdauer (beispielsweise 4 Sekunden statt 12), Trefferzahl und mögliche anhaltende Wirkung müssen noch geklärt werden. Ablauf: Zunächst etwa 1,5 Sekunden visuelles Spektakel am Himmel ohne Schaden; anschließend entlädt es sich als schadensverursachende Lichtwelle über die Fläche. Diese Vorphase ist keine zusätzliche Castzeit und legt die Gesamtlänge der Animation nicht fest. Die genaue zeitliche Einordnung zur Castzeit bleibt zu prüfen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Aurora Waves |
| category | active |
| cd | 300 |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Beschwört eine Welle aus Licht, die durch eine größere Fläche fliegt. In der Mitte voller Schaden, an den äußeren Rändern halber Schaden. Die Fläche ist rechteckig, 6 Meter lang und 4 Meter breit, vor dem Spieler beziehungsweise mit Bezug zum anvisierten Gegner. Die Breite teilt sich quer zur Wellenrichtung in 30 Prozent linken Rand, 40 Prozent Mitte und 30 Prozent rechten Rand. Bei 4 Metern Gesamtbreite sind die Randstreifen je 1,2 Meter und die Mitte 1,6 Meter breit. Die Mitte verursacht vollen Schaden, beide Randstreifen halben Schaden. Für die Zuordnung zählt ausschließlich der Positions-/Referenzpunkt des getroffenen Charakters, nicht seine sichtbare Körperbreite oder eine Überlappung mehrerer Zonen. Die exakten Übergangslinien zählen zur Mitte, jedes Ziel erhält nur einen Zonenfaktor je Treffer. Die genaue Position und Ausrichtung der Gesamtfläche relativ zum Gegner bleiben offen. M-Angriff 384 auf Stufe 1, +124 je weiterer Stufe, auf Stufe 10 insgesamt 1500. Mana-Kosten 96 auf Stufe 1, +31 je weiterer Stufe, maximal 375 auf Stufe 10. Cooldown 300 Sekunden, -7 je weiterer Stufe, auf Stufe 10 237 Sekunden. Castzeit 0,8 Sekunden. Die bisherigen 12 Sekunden sind keine bestätigte Wirkungsdauer: Animationsdauer (beispielsweise 4 Sekunden statt 12), Trefferzahl und mögliche anhaltende Wirkung müssen noch geklärt werden. Ablauf: Zunächst etwa 1,5 Sekunden visuelles Spektakel am Himmel ohne Schaden; anschließend entlädt es sich als schadensverursachende Lichtwelle über die Fläche. Diese Vorphase ist keine zusätzliche Castzeit und legt die Gesamtlänge der Animation nicht fest. Die genaue zeitliche Einordnung zur Castzeit bleibt zu prüfen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Summons a wave of light traveling through a large area. Full damage in the center, half damage at the outer edges. The area is a rectangle 6 meters long and 4 meters wide, in front of the caster with placement related to the selected enemy. Across the wave width, the left edge occupies 30 percent, the center 40 percent, and the right edge 30 percent. For a 4-meter width, each edge is 1.2 meters wide and the center is 1.6 meters wide. Center damage is full, edge damage half. Determine the zone solely from the character reference position, not visible body width or overlap. Exact transition lines belong to the center; each hit applies only one zone multiplier. Exact placement and orientation of the overall area relative to the target remain pending. Magical attack 384 plus 124 per additional level, totaling 1500 at level 10. Mana cost 96 at level 1, maximum 375 at level 10. Cooldown 300 minus 7 per additional level, totaling 237 seconds. Cast time 0.8 seconds. The old 12-second duration is unconfirmed: animation duration (possibly 4 rather than 12 seconds), hit count and any lingering effect remain pending. Sequence: approximately 1.5 seconds of visual spectacle in the sky without damage, followed by discharge as a damaging light wave across the area. This visual prelude is not an additional cast time and does not define total animation length. Its exact timing relative to the cast remains to be reviewed. |
| dmgType (Altformat) | spell |
| matk | 384 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 211 |
| skillName_de | Aurora Wellen |
| skillpoints | 1 |
| castTimeSeconds | 0,8 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 300 |
| cooldownScaling.perLevel | -7 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 96 |
| resourceCosts[0].scaling.perLevel | 31 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 384 |
| statScaling.matk.perLevel | 124 |
| waveDamageProfile.centerDamageMultiplier | 1 |
| waveDamageProfile.edgeDamageMultiplier | 0,5 |
| waveDamageProfile.edgeWidthStatus | defined |
| waveDamageProfile.areaDimensionsStatus | defined |
| waveDamageProfile.hitFrequencyStatus | pending |
| waveDamageProfile.visualPreludeSeconds | 1,5 |
| waveDamageProfile.damageStartsAfterVisualPrelude | true |
| waveDamageProfile.leftWidthFraction | 0,3 |
| waveDamageProfile.centerWidthFraction | 0,4 |
| waveDamageProfile.rightWidthFraction | 0,3 |
| waveDamageProfile.targetPositionBasis | characterReferencePoint |
| waveDamageProfile.boundaryAssignment | centerIncludesBoundaries |
| attackArea.shape | rectangle |
| attackArea.center | skillCenter |
| attackArea.lengthMeters | 6 |
| attackArea.widthMeters | 4 |
| attackArea.geometryStatus | defined |
| attackArea.target | enemiesInArea |
| attackArea.centerTracking | pending |
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
| levelProgression.rules[0].rule.rule.base | 300 |
| levelProgression.rules[0].rule.rule.perLevel | -7 |
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
| levelProgression.rules[2].rule.base | 384 |
| levelProgression.rules[2].rule.perLevel | 124 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 213: Strafendes Licht

Ein Licht so rein, dass es die Dunkelheit vertreibt und geschundene Seelen reinigt. Einmaliger magischer Angriff: 292 auf Stufe 1, +107 je weiterer Stufe, auf Stufe 10 insgesamt 1255. Mana-Kosten 73 auf Stufe 1, +27 je weiterer Stufe, maximal 316 auf Stufe 10. Cooldown 92 Sekunden, -1 je weiterer Stufe, auf Stufe 10 83 Sekunden. Castzeit 0,3 Sekunden. Vorläufige Animation ungefähr 1 Sekunde; keine anhaltende Wirkung. Gegen Gegner vom Typ Dunkel oder Dämon zusätzlich 5 Prozent des Skill-Basiswerts als Bonusschaden, ohne Waffen- oder Charakterangriff in dieser Bonusbasis. Weitere berechtigte Gegnertypen sind noch nicht festgelegt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Punishing Light |
| category | active |
| cd | 92 |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Ein Licht so rein, dass es die Dunkelheit vertreibt und geschundene Seelen reinigt. Einmaliger magischer Angriff: 292 auf Stufe 1, +107 je weiterer Stufe, auf Stufe 10 insgesamt 1255. Mana-Kosten 73 auf Stufe 1, +27 je weiterer Stufe, maximal 316 auf Stufe 10. Cooldown 92 Sekunden, -1 je weiterer Stufe, auf Stufe 10 83 Sekunden. Castzeit 0,3 Sekunden. Vorläufige Animation ungefähr 1 Sekunde; keine anhaltende Wirkung. Gegen Gegner vom Typ Dunkel oder Dämon zusätzlich 5 Prozent des Skill-Basiswerts als Bonusschaden, ohne Waffen- oder Charakterangriff in dieser Bonusbasis. Weitere berechtigte Gegnertypen sind noch nicht festgelegt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | A light so pure that it drives away darkness and cleanses battered souls. One magical attack: 292 plus 107 per additional level, totaling 1255 at level 10. Mana cost 73 at level 1, maximum 316 at level 10. Cooldown 92 minus 1 per additional level, totaling 83 seconds. Cast time 0.3 seconds. Provisional animation approximately 1 second; no lingering effect. Against dark or demon enemies, adds 5 percent of skill base damage only, excluding weapon and character attack from the bonus basis. Additional eligible creature types remain undefined. |
| dmgType (Altformat) | spell |
| matk | 292 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 213 |
| skillName_de | Strafendes Licht |
| skillpoints | 1 |
| animationDurationSeconds | 1 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,3 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 92 |
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
| effects[0].key | punishing-light-creature-bonus |
| effects[0].type | damageBonus |
| effects[0].target | enemy |
| effects[0].value | 0,05 |
| effects[0].unit | fraction |
| effects[0].appliesTo | specificSkill |
| effects[0].targetSkillNumber | 213 |
| effects[0].bonusDamageBasis | skillBaseDamage |
| effects[0].targetCreatureTypes[0] | dark |
| effects[0].targetCreatureTypes[1] | demon |
| effects[0].durationSeconds | 0 |
| effectsVersion | 1 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 73 |
| resourceCosts[0].scaling.perLevel | 27 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 292 |
| statScaling.matk.perLevel | 107 |
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
| levelProgression.rules[0].rule.rule.base | 92 |
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
| levelProgression.rules[2].rule.rule.base | 73 |
| levelProgression.rules[2].rule.rule.perLevel | 27 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | matk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 292 |
| levelProgression.rules[3].rule.perLevel | 107 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 215: Heiliges Kreuz

Erschafft ein heiliges Kreuz, schleudert es nach vorne und lässt es explodieren. Magischer Grundschaden 237 auf Stufe 1. Je weiterer Stufe steigt er durchgehend um 101: auf 641 auf Stufe 5 und insgesamt 1146 auf Stufe 10. Mana-Kosten 59 auf Stufe 1, +25 je weiterer Stufe, maximal 284 auf Stufe 10. Castzeit 0,2 Sekunden. Vorläufige Animationsdauer 1 Sekunde, keine anhaltende Wirkung. Cooldown 48 Sekunden auf Stufe 1, 48 Sekunden auf Stufe 10; bisheriger Stufenverlauf um 5 Sekunden erhöht. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Holy Cross |
| category | active |
| cd | 48 |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erschafft ein heiliges Kreuz, schleudert es nach vorne und lässt es explodieren. Magischer Grundschaden 237 auf Stufe 1. Je weiterer Stufe steigt er durchgehend um 101: auf 641 auf Stufe 5 und insgesamt 1146 auf Stufe 10. Mana-Kosten 59 auf Stufe 1, +25 je weiterer Stufe, maximal 284 auf Stufe 10. Castzeit 0,2 Sekunden. Vorläufige Animationsdauer 1 Sekunde, keine anhaltende Wirkung. Cooldown 48 Sekunden auf Stufe 1, 48 Sekunden auf Stufe 10; bisheriger Stufenverlauf um 5 Sekunden erhöht. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Creates a holy cross, hurls it forward and makes it explode. Magical base damage starts at 237. Each additional level adds 101 throughout, reaching 641 at level 5 and 1146 at level 10. Mana cost 59 at level 1, maximum 284 at level 10. Cast time 0.2 seconds. Provisional animation duration 1 second; no lingering effect. Cooldown 48 seconds at level 1 and 48 seconds at level 10; previous progression increased by 5 seconds throughout. |
| dmgType (Altformat) | spell |
| matk | 237 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 215 |
| skillName_de | Heiliges Kreuz |
| skillpoints | 1 |
| animationDurationSeconds | 1 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,2 |
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
| resourceCosts[0].scaling.base | 59 |
| resourceCosts[0].scaling.perLevel | 25 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 237 |
| statScaling.matk.perLevel | 101 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
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
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 59 |
| levelProgression.rules[1].rule.rule.perLevel | 25 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 237 |
| levelProgression.rules[2].rule.perLevel | 101 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 216: Heilige Vernichtung

Schleudert drei Lichtspeere auf einen Gegner. Jeder Speer verursacht den vollen angegebenen magischen Skill-Schaden: 113 auf Stufe 1, +37 je weiterer Stufe, auf Stufe 10 446 je Speer, zusammen 1338 Skill-Grundschaden bei drei Treffern. Mana-Kosten 85 auf Stufe 1, +28 je weiterer Stufe, maximal 337 auf Stufe 10. Cooldown 55 Sekunden auf Stufe 1, 46 Sekunden auf Stufe 10; bisheriger Stufenverlauf um 3 Sekunden erhöht. Castzeit 0,1 Sekunden, vorläufige Animationsdauer 0,6 Sekunden. Keine anhaltende Wirkung. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Holy Destruction |
| category | active |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Schleudert drei Lichtspeere auf einen Gegner. Jeder Speer verursacht den vollen angegebenen magischen Skill-Schaden: 113 auf Stufe 1, +37 je weiterer Stufe, auf Stufe 10 446 je Speer, zusammen 1338 Skill-Grundschaden bei drei Treffern. Mana-Kosten 85 auf Stufe 1, +28 je weiterer Stufe, maximal 337 auf Stufe 10. Cooldown 55 Sekunden auf Stufe 1, 46 Sekunden auf Stufe 10; bisheriger Stufenverlauf um 3 Sekunden erhöht. Castzeit 0,1 Sekunden, vorläufige Animationsdauer 0,6 Sekunden. Keine anhaltende Wirkung. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Hurls three spears of light at one enemy. Each spear deals full listed magical skill damage: 113 at level 1, +37 per additional level, reaching 446 per spear and 1338 total skill base damage for three hits at level 10. Mana cost 85 at level 1, maximum 337 at level 10. Cooldown 55 seconds at level 1 and 46 seconds at level 10; previous progression increased by 3 seconds throughout. Cast time 0.1 seconds; provisional animation duration 0.6 seconds. No lingering effect. |
| dmgType (Altformat) | spell |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 216 |
| skillName_de | Heilige Vernichtung |
| skillpoints | 1 |
| animationDurationSeconds | 0,6 |
| animationTimingStatus | provisional |
| attackExecution.targetMode | singleEnemy |
| attackExecution.hitCount | 3 |
| attackExecution.damageValueScope | perHit |
| castTimeSeconds | 0,1 |
| cd | 55 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 55 |
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
| matk | 113 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 85 |
| resourceCosts[0].scaling.perLevel | 28 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 113 |
| statScaling.matk.perLevel | 37 |
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
| levelProgression.rules[0].rule.rule.base | 55 |
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
| levelProgression.rules[2].rule.rule.base | 85 |
| levelProgression.rules[2].rule.rule.perLevel | 28 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | matk |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 113 |
| levelProgression.rules[3].rule.perLevel | 37 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 217: Göttliche Nova

Im Zielgebiet um den anvisierten Gegner entsteht eine Lichtkugel. Nach 2 Sekunden explodiert sie und verursacht einmalig magischen Flächenschaden an bis zu fünf Gegnern; kein wiederholter Schaden. Die sichtbare Kugel hat anfangs 2 Meter Durchmesser, zieht sich kurz vor der Explosion auf 0,5 Meter Durchmesser zusammen und explodiert über eine Fläche von 4 Metern Durchmesser (2 Meter Radius). Der genaue Zeitpunkt des Zusammenziehens und die Mitbewegung des Zielgebiets bleiben offen. Grundschaden 473 auf Stufe 1, je weiterer Stufe bis einschließlich Stufe 9 +93 auf 1217; der letzte Schritt auf Stufe 10 gibt stattdessen +198, insgesamt 1415. Mana-Kosten 118 auf Stufe 1, Stufenwerte 118, 142, 165, 188, 211, 235, 258, 281, 304, 354, maximal 354 auf Stufe 10. Cooldown 176 Sekunden auf Stufe 1 und 158 Sekunden auf Stufe 10. Castzeit 0,4 Sekunden. Gesamtdauer der visuellen Wirkung vorläufig 2,5 Sekunden; Explosion nach 2 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Divine Nova |
| category | active |
| cd | 176 |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| charClass[2] | Healer |
| charClass[3] | Priest |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Im Zielgebiet um den anvisierten Gegner entsteht eine Lichtkugel. Nach 2 Sekunden explodiert sie und verursacht einmalig magischen Flächenschaden an bis zu fünf Gegnern; kein wiederholter Schaden. Die sichtbare Kugel hat anfangs 2 Meter Durchmesser, zieht sich kurz vor der Explosion auf 0,5 Meter Durchmesser zusammen und explodiert über eine Fläche von 4 Metern Durchmesser (2 Meter Radius). Der genaue Zeitpunkt des Zusammenziehens und die Mitbewegung des Zielgebiets bleiben offen. Grundschaden 473 auf Stufe 1, je weiterer Stufe bis einschließlich Stufe 9 +93 auf 1217; der letzte Schritt auf Stufe 10 gibt stattdessen +198, insgesamt 1415. Mana-Kosten 118 auf Stufe 1, Stufenwerte 118, 142, 165, 188, 211, 235, 258, 281, 304, 354, maximal 354 auf Stufe 10. Cooldown 176 Sekunden auf Stufe 1 und 158 Sekunden auf Stufe 10. Castzeit 0,4 Sekunden. Gesamtdauer der visuellen Wirkung vorläufig 2,5 Sekunden; Explosion nach 2 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | A sphere of light forms in the target area around the selected enemy. After 2 seconds it explodes, dealing magical area damage once to up to five enemies; no repeated damage. The visual sphere starts at 2 meters diameter, briefly contracts to 0.5 meters diameter before exploding over a 4-meter-diameter area (2-meter radius). Exact contraction timing and target-area tracking remain pending. Base damage 473 at level 1, +93 per additional level through level 9 (1217); the final step to level 10 instead adds 198, totaling 1415. Mana cost 118 at level 1, maximum 354 at level 10. Cooldown 176 seconds at level 1 and 158 seconds at level 10. Cast time 0.4 seconds. Provisional total visual effect duration 2.5 seconds; explosion after 2 seconds. |
| dmgType (Altformat) | spell |
| matk | 473 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 217 |
| skillName_de | Göttliche Nova |
| skillpoints | 1 |
| animationDurationSeconds | 2,5 |
| animationTimingStatus | provisional |
| attackArea.shape | circle |
| attackArea.center | selectedTarget |
| attackArea.geometryStatus | defined |
| attackArea.maxTargets | 5 |
| attackArea.radiusMeters | 2 |
| attackArea.centerTracking | pending |
| attackExecution.hitCount | 1 |
| attackExecution.damageValueScope | perHit |
| attackExecution.explosionDelayAfterCreationSeconds | 2 |
| castTimeSeconds | 0,4 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 176 |
| cooldownScaling.perLevel | -2 |
| durationScaling.type | table |
| durationScaling.values[0] | 2,5 |
| durationScaling.values[1] | 2,5 |
| durationScaling.values[2] | 2,5 |
| durationScaling.values[3] | 2,5 |
| durationScaling.values[4] | 2,5 |
| durationScaling.values[5] | 2,5 |
| durationScaling.values[6] | 2,5 |
| durationScaling.values[7] | 2,5 |
| durationScaling.values[8] | 2,5 |
| durationScaling.values[9] | 2,5 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.values[0] | 118 |
| resourceCosts[0].scaling.values[1] | 142 |
| resourceCosts[0].scaling.values[2] | 165 |
| resourceCosts[0].scaling.values[3] | 188 |
| resourceCosts[0].scaling.values[4] | 211 |
| resourceCosts[0].scaling.values[5] | 235 |
| resourceCosts[0].scaling.values[6] | 258 |
| resourceCosts[0].scaling.values[7] | 281 |
| resourceCosts[0].scaling.values[8] | 304 |
| resourceCosts[0].scaling.values[9] | 354 |
| resourceCosts[0].scaling.base | 118 |
| statScaling.matk.type | table |
| statScaling.matk.values[0] | 473 |
| statScaling.matk.values[1] | 566 |
| statScaling.matk.values[2] | 659 |
| statScaling.matk.values[3] | 752 |
| statScaling.matk.values[4] | 845 |
| statScaling.matk.values[5] | 938 |
| statScaling.matk.values[6] | 1.031 |
| statScaling.matk.values[7] | 1.124 |
| statScaling.matk.values[8] | 1.217 |
| statScaling.matk.values[9] | 1.415 |
| visualSphereProfile.initialDiameterMeters | 2 |
| visualSphereProfile.contractedDiameterMeters | 0,5 |
| visualSphereProfile.contractionTimingStatus | pending |
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
| levelProgression.rules[0].rule.rule.base | 176 |
| levelProgression.rules[0].rule.rule.perLevel | -2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | constant |
| levelProgression.rules[1].rule.value | 2,5 |
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
| levelProgression.rules[3].rule.kind | sum |
| levelProgression.rules[3].rule.terms[0].kind | linear |
| levelProgression.rules[3].rule.terms[0].base | 473 |
| levelProgression.rules[3].rule.terms[0].perLevel | 93 |
| levelProgression.rules[3].rule.terms[1].kind | thresholds |
| levelProgression.rules[3].rule.terms[1].base | 0 |
| levelProgression.rules[3].rule.terms[1].changes[0].level | 10 |
| levelProgression.rules[3].rule.terms[1].changes[0].value | 105 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 218: Licht kristallenes Gefängnis

Erschafft ein kristallenes Gefängnis aus Licht, das den Gegner auf der Stelle festhält. Er kann sich nicht bewegen oder dem Spieler folgen; Angriffe werden durch das Gefängnis nicht blockiert. Dauer auf Stufe 1/2/3: 1/2/4 Sekunden. Währenddessen erleidet der eingesperrte Gegner auf Stufe 1/2/3 jeweils 1/2/3 Prozent mehr Schaden durch eingehende Lichtangriffe. Der Bonus gilt nicht für ausgehende Angriffe des Ziels. Physikalische Darstellung und Sonderregeln für Bosse werden später geprüft. Magischer Grundschaden 291 auf Stufe 1, +109 je weiterer Stufe, insgesamt 509 auf Stufe 3. Kein wiederholter Schaden festgelegt. Mana-Kosten 73 auf Stufe 1, +27 je weiterer Stufe, maximal 127 auf Stufe 3. Cooldown 130 Sekunden, -5 je weiterer Stufe, auf Stufe 3 120 Sekunden. Castzeit 0,5 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Light Crystal Prison |
| category | active |
| cd | 130 |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erschafft ein kristallenes Gefängnis aus Licht, das den Gegner auf der Stelle festhält. Er kann sich nicht bewegen oder dem Spieler folgen; Angriffe werden durch das Gefängnis nicht blockiert. Dauer auf Stufe 1/2/3: 1/2/4 Sekunden. Währenddessen erleidet der eingesperrte Gegner auf Stufe 1/2/3 jeweils 1/2/3 Prozent mehr Schaden durch eingehende Lichtangriffe. Der Bonus gilt nicht für ausgehende Angriffe des Ziels. Physikalische Darstellung und Sonderregeln für Bosse werden später geprüft. Magischer Grundschaden 291 auf Stufe 1, +109 je weiterer Stufe, insgesamt 509 auf Stufe 3. Kein wiederholter Schaden festgelegt. Mana-Kosten 73 auf Stufe 1, +27 je weiterer Stufe, maximal 127 auf Stufe 3. Cooldown 130 Sekunden, -5 je weiterer Stufe, auf Stufe 3 120 Sekunden. Castzeit 0,5 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Creates a crystalline prison of light that roots the enemy in place. The enemy cannot move or follow the player; the prison does not block attacks. Duration at levels 1/2/3: 1/2/4 seconds. While imprisoned, the target takes 1/2/3 percent more damage from incoming light attacks at skill levels 1/2/3 respectively; outgoing attacks by the target are unaffected. Physical presentation and boss-specific rules will be reviewed later. Magical base damage 291 plus 109 per additional level, totaling 509 at level 3. No repeated damage defined. Mana cost 73 at level 1, maximum 127 at level 3. Cooldown 130 minus 5 per additional level, reaching 120 seconds at level 3. Cast time 0.5 seconds. |
| dmgType (Altformat) | spell |
| dur | 1 |
| matk | 291 |
| maxSkillLv | 3 |
| maxUpgradeLv | 10 |
| nr | 218 |
| skillName_de | Licht kristallenes Gefängnis |
| skillpoints | 1 |
| castTimeSeconds | 0,5 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 130 |
| cooldownScaling.perLevel | -5 |
| durationScaling.type | table |
| durationScaling.values[0] | 1 |
| durationScaling.values[1] | 2 |
| durationScaling.values[2] | 4 |
| effects[0].key | light-crystal-prison-root |
| effects[0].type | control |
| effects[0].target | enemy |
| effects[0].controlKind | root |
| effects[0].durationSeconds | 1 |
| effects[0].durationScaling.type | table |
| effects[0].durationScaling.values[0] | 1 |
| effects[0].durationScaling.values[1] | 2 |
| effects[0].durationScaling.values[2] | 4 |
| effects[1].key | light-prison-incoming-light-bonus |
| effects[1].type | damageTakenBonus |
| effects[1].target | enemy |
| effects[1].value | 0,01 |
| effects[1].unit | fraction |
| effects[1].damageSchool | light |
| effects[1].durationSeconds | 1 |
| effects[1].durationScaling.type | table |
| effects[1].durationScaling.values[0] | 1 |
| effects[1].durationScaling.values[1] | 2 |
| effects[1].durationScaling.values[2] | 4 |
| effects[1].endWith | light-crystal-prison-root |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | 0,01 |
| effects[1].valueScaling.perLevel | 0,01 |
| effectsVersion | 1 |
| prisonSettings.preventsMovement | true |
| prisonSettings.preventsLeaving | true |
| prisonSettings.blocksMagicalAttacks | false |
| prisonSettings.magicalAttackBlockingScopeStatus | defined |
| prisonSettings.physicalAttackInteractionStatus | defined |
| prisonSettings.bossInteractionStatus | pending |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 73 |
| resourceCosts[0].scaling.perLevel | 27 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 291 |
| statScaling.matk.perLevel | 109 |
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
| levelProgression.rules[0].rule.rule.base | 130 |
| levelProgression.rules[0].rule.rule.perLevel | -5 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | exponential |
| levelProgression.rules[1].rule.base | 1 |
| levelProgression.rules[1].rule.factor | 2 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | durationScaling |
| levelProgression.rules[2].rule.kind | exponential |
| levelProgression.rules[2].rule.base | 1 |
| levelProgression.rules[2].rule.factor | 2 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 1 |
| levelProgression.rules[3].path[2] | durationScaling |
| levelProgression.rules[3].rule.kind | exponential |
| levelProgression.rules[3].rule.base | 1 |
| levelProgression.rules[3].rule.factor | 2 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 1 |
| levelProgression.rules[4].path[2] | valueScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 0,01 |
| levelProgression.rules[4].rule.perLevel | 0,01 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | resourceCosts |
| levelProgression.rules[5].path[1] | 0 |
| levelProgression.rules[5].path[2] | scaling |
| levelProgression.rules[5].rule.kind | outputCost |
| levelProgression.rules[5].rule.factor | 0,25 |
| levelProgression.rules[5].rule.basis | damage |
| levelProgression.rules[5].rule.minimum | 0 |
| levelProgression.rules[5].source | verifiedManaPricing |
| levelProgression.rules[6].path[0] | statScaling |
| levelProgression.rules[6].path[1] | matk |
| levelProgression.rules[6].rule.kind | linear |
| levelProgression.rules[6].rule.base | 291 |
| levelProgression.rules[6].rule.perLevel | 109 |
| levelProgression.rules[6].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 228: Geheiligte Barriere

Erschafft für 9 Sekunden eine schützende Barriere mit 4 Metern Radius um dich. Du und Verbündete innerhalb der Barriere erleiden 20 Prozent weniger magischen Schaden. Wer den Bereich verlässt, verliert den Schutz. Kostet 150 Mana, Castzeit 0,3 Sekunden. Bestehender Cooldown 300 Sekunden.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Sanctifierd Barrier |
| category | active |
| cd | 300 |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Erschafft für 9 Sekunden eine schützende Barriere mit 4 Metern Radius um dich. Du und Verbündete innerhalb der Barriere erleiden 20 Prozent weniger magischen Schaden. Wer den Bereich verlässt, verliert den Schutz. Kostet 150 Mana, Castzeit 0,3 Sekunden. Bestehender Cooldown 300 Sekunden. |
| description_eng | Creates a protective barrier with a 4-meter radius around you for 9 seconds. You and allies inside take 20 percent less magical damage. Leaving the area removes protection. Costs 150 Mana; cast time 0.3 seconds. Existing cooldown 300 seconds. |
| dmgType (Altformat) | spell |
| dur | 9 |
| maxSkillLv | 1 |
| maxUpgradeLv | 10 |
| nr | 228 |
| skillName_de | Geheiligte Barriere |
| skillpoints | 1 |
| activation | manual |
| effects[0].type | damageReduction |
| effects[0].target | alliesInArea |
| effects[0].allowedRaces | [] |
| effects[0].value | 0,2 |
| effects[0].unit | fraction |
| effects[0].damageTypes[0] | magical |
| effects[0].durationSeconds | 9 |
| effects[0].key | sanctified-magic-protection |
| effectsVersion | 1 |
| areaSettings.center | caster |
| areaSettings.movesWithCaster | true |
| areaSettings.membership | whileInside |
| areaSettings.includeCaster | true |
| areaSettings.radiusMeters | 4 |
| castTimeSeconds | 0,3 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 150 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | resourceCosts |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | scaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0 |
| levelProgression.rules[0].rule.rule.kind | constant |
| levelProgression.rules[0].rule.rule.value | 150 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | skill |

### 231: Luminus

Sendet einen Lichtimpuls auf das Ziel und verursacht einmalig magischen Schaden. Grundschaden 42 auf Stufe 1, +23 je weiterer Stufe, bis 249 auf Stufe 10; zusätzlich M-Angriff. Mana 11 auf Stufe 1, +6 je weiterer Stufe, bis 65. Cooldown 14 Sekunden auf Stufe 1, -1 je weiterer Stufe, bis 5 Sekunden. Castzeit 0,1 Sekunden. Kein Schaden über Zeit.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Luminus |
| category | active |
| cd | 14 |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Sendet einen Lichtimpuls auf das Ziel und verursacht einmalig magischen Schaden. Grundschaden 42 auf Stufe 1, +23 je weiterer Stufe, bis 249 auf Stufe 10; zusätzlich M-Angriff. Mana 11 auf Stufe 1, +6 je weiterer Stufe, bis 65. Cooldown 14 Sekunden auf Stufe 1, -1 je weiterer Stufe, bis 5 Sekunden. Castzeit 0,1 Sekunden. Kein Schaden über Zeit. |
| description_eng | Sends a pulse of light at the target, dealing magical damage once. Base damage starts at 42 and increases by 23 per additional level to 249 at level 10, plus magical attack. Mana starts at 11 and increases by 6 per additional level to 65. Cooldown starts at 14 seconds and decreases by 1 per additional level to 5 seconds. Cast time 0.1 seconds. No damage over time. |
| dmgType (Altformat) | spell |
| matk | 42 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 231 |
| skillName_de | Luminus |
| skillpoints | 1 |
| animationDurationSeconds | 0,2 |
| animationTimingStatus | provisional |
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
| mana (Aktivierungskosten, kein Bonus) | 11 |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 260: Läuterung

Permanente Passive. Je Skillstufe erleidest du 1 Prozent weniger Giftschaden und 0,5 Prozent weniger Dunkelheitsschaden. Zusätzlich besteht je Skillstufe eine um 0,5 Prozentpunkte erhöhte Chance, einen neu angewendeten Fluch abzuwehren. Auf Stufe 10: 10 Prozent Giftschadensresistenz, 5 Prozent Dunkelheitsschadensresistenz und 5 Prozent Fluchresistenz. Verhindert keine Vergiftung und entfernt keine bestehenden Vergiftungen oder Flüche. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Feld | Gespeicherter Wert |
| --- | --- |
| nr | 260 |
| skillName_de | Läuterung |
| skillName_eng | Purification |
| category | passive |
| dmgType (Altformat) | passive |
| charClass[0] | Luminet |
| charClass[1] | Lightmage |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| skillpoints | 1 |
| resourceCosts | [] |
| effectsVersion | 1 |
| effects[0].key | purification-poison-damage |
| effects[0].type | damageReduction |
| effects[0].damageSchool | poison |
| effects[0].value | 0,01 |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0,01 |
| effects[0].valueScaling.perLevel | 0,01 |
| effects[0].target | self |
| effects[0].unit | fraction |
| effects[0].durationSeconds | 0 |
| effects[1].key | purification-darkness-damage |
| effects[1].type | damageReduction |
| effects[1].damageSchool | darkness |
| effects[1].value | 0,005 |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | 0,005 |
| effects[1].valueScaling.perLevel | 0,005 |
| effects[1].target | self |
| effects[1].unit | fraction |
| effects[1].durationSeconds | 0 |
| effects[2].key | purification-curse-resistance |
| effects[2].type | statusResistance |
| effects[2].resistedStatus | curse |
| effects[2].resistanceCheck | onStatusApplication |
| effects[2].value | 0,005 |
| effects[2].valueScaling.type | linear |
| effects[2].valueScaling.base | 0,005 |
| effects[2].valueScaling.perLevel | 0,005 |
| effects[2].target | self |
| effects[2].unit | fraction |
| effects[2].durationSeconds | 0 |
| description_de | Permanente Passive. Je Skillstufe erleidest du 1 Prozent weniger Giftschaden und 0,5 Prozent weniger Dunkelheitsschaden. Zusätzlich besteht je Skillstufe eine um 0,5 Prozentpunkte erhöhte Chance, einen neu angewendeten Fluch abzuwehren. Auf Stufe 10: 10 Prozent Giftschadensresistenz, 5 Prozent Dunkelheitsschadensresistenz und 5 Prozent Fluchresistenz. Verhindert keine Vergiftung und entfernt keine bestehenden Vergiftungen oder Flüche. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent passive. Each skill level reduces poison damage taken by 1 percent and darkness damage taken by 0.5 percent, and grants a 0.5 percentage point chance to resist a newly applied curse. At level 10: 10 percent poison damage resistance, 5 percent darkness damage resistance and 5 percent curse resistance. Does not prevent poisoning or remove existing poison or curses. No activation cost, cast time or cooldown. |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0,01 |
| levelProgression.rules[0].rule.perLevel | 0,01 |
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
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

## Gemeinsame Blöcke

[Kreaturenskills](../shared-creature-skills.md) und [Trainingsskills](../shared-training-skills.md) werden einmal gemeinsam geprüft. Die normale Lerngrenze für Bindung und Zucht ist bereits 1. Die zweite Kreaturen-Spezialklasse und ihre Lerngrenzen sind noch zu bestätigen.

## Reihenfolge

Diese Klassenrunde beginnt jetzt. Bereits bestätigte gemeinsame Skills sind mit aktuellen Werten enthalten. Klassenspezifische Wirkungen, Kosten und Skalierungen werden noch geprüft.

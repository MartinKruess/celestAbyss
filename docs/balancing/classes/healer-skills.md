# Heiler / Priester: Werte und Skillprüfung

**32 Skills, 280 Skillpunkte.** Lunare Inkanation hat vier lernbare Stufen. Wiederbelebungsleben des Ziels: 80/160/320/640 HP. Mana-Kosten des Heilers: 120/180/240/300. Vorhandenes Ziel-Mana bleibt erhalten. Cooldown je Stufe: 100/90/80/70 Sekunden. Castzeit bleibt eine Sekunde. Die drei zusätzlichen Lernstufen bringen den Heiler auf 280 Punkte.

Einteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.

**32 unterschiedliche zugeordnete Skills: 20 aktive und 12 passive.** Gemeinsame Skills verwenden dieselben Datenbankdefinitionen wie bei den bisher geprüften Klassen. Die Angriffs-/Zaubereinordnung ist noch vorläufig; Namen und Beschreibungen werden in dieser Klassenrunde geprüft.

| Art | Anzahl | Skills |
| --- | ---: | --- |
| Übrige Passive einschließlich Procs | 9 | Erleuchtung, Erweiterung des Geistes, Gefrierbrand, Hoffnungsschimmer, Ausdauertraining, Immunität, Rüstungstraining, Waffentraining, Das ewige Wissen |
| Aktive Skills (Angriff/Heilung/Unterstützung) | 14 | Eislanze, Eisranken, Energieschlag, Kuss der Aurora, Heilung, Kristallisierte Wasserspähre, Göttliche Heilung, Schwerter des Lichtes, Strahlendes Aurafeld, Wiederherstellung, Lunare Inkanation, Himmlische Aufopferung, Göttliche Nova, Frostschauer |
| Kreaturen aktiv | 3 | Tamen, Beschwören, Zurückrufen |
| Kreaturen passiv | 3 | Bindung, Kontrolle, Zucht |
| Gruppenbuffs | 1 | Aurora-Segen |
| Eigenbuffs | 2 | Permafrost, Assimilation |

## Basis und Ausrüstung

R1 auf Level 1/10, R2 auf 20, R3 auf 30, R4 auf 40, R5 auf 50 und R6 auf 60. Keine Verstärkungsstufen, Schmuck, Steine, Passive, Eigen- oder Gruppenbuffs eingerechnet.

### Basis ohne Ausrüstung

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 153 | 423 | 723 | 1.023 | 1.323 | 1.623 | 1.923 |
| Mana | 182 | 452 | 752 | 1.052 | 1.352 | 1.652 | 1.952 |
| P-Angriff | 2 | 18,2 | 36,2 | 54,2 | 72,2 | 90,2 | 108,2 |
| M-Angriff | 12 | 28,2 | 46,2 | 64,2 | 82,2 | 100,2 | 118,2 |
| P-Defense | 3 | 21 | 41 | 61 | 81 | 101 | 121 |
| M-Defense | 13 | 31 | 51 | 71 | 91 | 111 | 131 |

### Mit Rüstung und Magiewaffe

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 353 | 623 | 1.098 | 1.573 | 2.048 | 2.673 | 3.298 |
| Mana | 682 | 952 | 1.487 | 2.172 | 2.882 | 3.652 | 4.362 |
| P-Angriff | 2 | 18,2 | 36,2 | 54,2 | 72,2 | 90,2 | 108,2 |
| M-Angriff | 37 | 53,2 | 95,6 | 152 | 232,4 | 356,2 | 537,6 |
| P-Defense | 41 | 59 | 105 | 164 | 255 | 364 | 483 |
| M-Defense | 112 | 130 | 188 | 326 | 495 | 729 | 968 |

Die vorhandene Wand-Tabelle dient als Vergleich für die Magiewaffe. Int/Faith/Vic wird einmal als alternativer Angriffsbonus gerechnet. Waffen-Speed ist noch nicht eingerechnet. Equipment-Vorschläge sind nicht übernommen. Grundregeneration: 25 Mana und 12 HP pro Tick. Das Intervall wird später in Unreal geprüft. Bestehende gemeinsame Skillwerte werden übernommen; fehlende Werte werden nicht geschätzt.

## Skillübersicht

| Nr | Skill | Art | Max. Definition / Lerngrenze | Startwerte / Wirkung | Vorhandene Skalierung und Maximalwerte | Kosten | Cooldown s | Cast Time s | Dauer s | Stand / offen |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Erleuchtung | Passive | 20 | Mana-Regeneration +1<br>Wisdom +0,5<br>Intelligenz +0,5 | Intelligenz: 0,5 bis 10<br>Wisdom: 0,5 bis 10<br>Mana-Regeneration: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 29 | Eislanze | Skill / magisch | 10 | M-Angriff +187 | M-Angriff: 187 bis 628 | Mana-Kosten: 47 bis 155 | 50 bis 41 | 0.6 | 5 | Gemeinsame Definition |
| 30 | Eisranken | Skill / magisch | 10 | M-Angriff +123<br>control, Ziel enemy<br>periodicDamage, Ziel enemy, 8 | M-Angriff: 123 bis 456<br>periodicDamage/: 8 bis 44 | Mana-Kosten: 33 bis 158 | 22 | 0.5 | root: 1 bis 4 s<br>periodicDamage: 1 bis 4 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 36 | Energieschlag | Skill / magisch | 20 / Heiler 5 | M-Angriff +25 | M-Angriff: 25 bis 105 | Mana-Kosten: 6 bis 26 | 2,6 bis 2,2 | 0.15 | 0 (einmalig) | Gemeinsame Definition |
| 44 | Erweiterung des Geistes | Passive | 10 | Wisdom +1<br>Intelligenz +1<br>Dexterity +1 | Intelligenz: 1 bis 10<br>Wisdom: 1 bis 10<br>Dexterity: 1 bis 10 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 54 | Gefrierbrand | Passive | 10 | Permanenter passiver Skill ohne direkten M-Angriffsbonus. Eiszauber verursachen ab Stufe 5 insgesamt 1 Prozent und ab Stufe 10 insgesamt 2 Prozent mehr Schaden. Auf den übrigen Stufen steigt die Chance, dass ein eigener treffender Eisangriff das Ziel für 2 Sekunden einfriert: Stufe 1/2/3/4/5/6/7/8/9/10 jeweils 1,25/2,5/3,75/5/5/6,25/7,5/8,75/10/10 Prozent. Löst dieses Einfrieren aus, erleidet das Ziel bei Sekunde 1 und 2 zusätzlich Gefrierbrand-Schaden. Grundschaden je Tick steigt gleichmäßig von 11 auf 131 über zehn Stufen, ohne Charakter- oder Waffen-M-Angriff je Tick. Auf Stufe 10 zwei Ticks zu je 131, insgesamt 262 Grundschaden. Der DoT ist an das durch diesen Skill ausgelöste Einfrieren gebunden und endet mit ihm. Keine Aktivierungskosten, Castzeit oder Cooldown festgelegt. Erneute Anwendung, Bossresistenzen, Einfrieren durch andere Skills und die Wechselwirkung des Eisbonus mit dem eigenen DoT werden später geprüft.<br>damageBonus, Ziel self, 0<br>control, Ziel enemy<br>periodicDamage, Ziel enemy, 11 | damageBonus/: 0 bis 2 %<br>control/: 0,013 bis 0,1<br>periodicDamage/: 11 bis 131 | Keine | Entfällt | Entfällt | damageBonus: 0 s<br>freeze: 2 s<br>periodicDamage: 2 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 58 | Kuss der Aurora | Skill | 6 | HP +550<br>heal, Ziel allyOrCompanion, 550<br>heal, Ziel allyOrCompanion, 0 | HP: 550 bis 2.700<br>heal/: 550 bis 2.700<br>heal/: 0 bis 5 % | Mana-Kosten: 283 bis 1.208 | 80 bis 70 | 0.6 | heal: 0 s<br>heal: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 60 | Hoffnungsschimmer | Passive | 10 | Mana-Regeneration +8<br>Wisdom +0,4<br>Intelligenz +0,6 | Mana-Regeneration: 8 bis 40<br>Intelligenz: 0,6 bis 6<br>Wisdom: 0,4 bis 4 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 64 | Heilung | Skill | 20 | HP +20<br>heal, Ziel allyOrCompanion, 20 | HP: 20 bis 1.540<br>heal/: 20 bis 1.540 | Mana-Kosten: 7 bis 539 | 19 | 0.1 | heal: 0 s | Gemeinsame Definition |
| 68 | Kristallisierte Wasserspähre | Skill / magisch | 10 | M-Angriff +137<br>Animation 1 s (vorläufig) | M-Angriff: 137 bis 380 | Mana-Kosten: 34 bis 97 | 30 bis 26 | 0.2 | Wirkung einmalig; Animation 1 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 78 | Göttliche Heilung | Skill | 10 | HP +162<br>heal, Ziel alliesInArea, 162<br>heal, Ziel alliesInArea, 81<br>Animation 2 s (vorläufig) | HP: 162 bis 1.035<br>heal/: 162 bis 1.035<br>heal/: 81 bis 517,5 | Mana-Kosten: 85 bis 544 | 64 bis 58 | 0.2 | heal: 0 s<br>heal: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 101 | Schwerter des Lichtes | Skill / magisch | 10 | M-Angriff +273<br>statModifier, Ziel alliesInArea, int, 13<br>Fläche: 7,5 m Radius um Skillzentrum<br>Ein einzelnes Ziel | M-Angriff: 273 bis 1.029<br>statModifier/int: 13 bis 17,5 | Mana-Kosten: 68 bis 257 | 72 bis 63 | 0.7 | int: 10 bis 30 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 108 | Strahlendes Aurafeld | Skill | 10 | HP +10<br>heal, Ziel self, 10<br>heal, Ziel alliesInArea, 3 | HP: 10 bis 100<br>heal/: 10 bis 100<br>heal/: 3 bis 30 | Mana-Kosten: 21 bis 210 | 73 bis 46 | 0 | heal: 12 s<br>heal: 12 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 124 | Wiederherstellung | Skill | 20 | HP +11<br>heal, Ziel allyOrCompanion, 11 | HP: 11 bis 600<br>heal/: 11 bis 600 | Mana-Kosten: 12 bis 840 | 41 bis 22 | 0.2 | heal: 3 bis 4 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 133 | Tamen | Skill | 3 / Heiler 1 | Versucht, eine Kreatur zu zähmen. Erfordert das passende spezielle Taming-Item für diese Kreatur. Die Grunderfolgschance beginnt bei 50 Prozent und steigt je weiterer Skillstufe um 15 Prozentpunkte auf 80 Prozent. Ein Kreaturen-Gegenwert beeinflusst die endgültige Erfolgschance; die Berechnung ist noch festzulegen. Die Mana-Kosten steigen von 100 um 25 je weiterer Stufe auf 150. Die Cast Time sinkt von 3 um 0,5 Sekunden je weiterer Stufe auf 2 Sekunden, der Cooldown von 60 um 10 Sekunden je weiterer Stufe auf 40 Sekunden. Der Versuch verursacht keinen Schaden und hat keine anschließende Effektdauer. Der Itemverbrauch ist noch festzulegen. Die Definition umfasst drei Stufen; die normale Lerngrenze anderer Klassen liegt bei Stufe 1. Der Abenteurer kann Stufe 3 lernen; eine zweite Spezialklasse ist noch nicht festgelegt. | Nicht vollständig gespeichert | Mana-Kosten: 100 bis 100 | 60 bis 60 | 3 bis 3 | 0 (keine anschließende Wirkung) | Gemeinsame Definition; Levelskalierung prüfen |
| 134 | Bindung | Passive | 3 / Heiler 1 | Die Bindung stärkt dauerhaft deine Kreatur. Auf Skilllevel 1 erhält sie jeweils 10 Stärke, Vitalität, Intelligenz und Willenskraft. Je weiterer Stufe kommen jeweils 5 hinzu, bis zu jeweils 20 auf Level 3. Der Spieler erhält diese Boni nicht. Normale Klassen können Level 1 lernen, der Abenteurer Level 3. Die zweite Spezialklasse ist noch festzulegen. Bindung hat keine Aktivierungskosten und keinen Cooldown.<br>statModifier, Ziel companion, str, 10<br>statModifier, Ziel companion, vita, 10<br>statModifier, Ziel companion, int, 10<br>statModifier, Ziel companion, wis, 10 | statModifier/str: 10 bis 10<br>statModifier/vita: 10 bis 10<br>statModifier/int: 10 bis 10<br>statModifier/wis: 10 bis 10 | Keine | Entfällt | Entfällt | str: 0 s<br>vita: 0 s<br>int: 0 s<br>wis: 0 s | Gemeinsame Definition |
| 135 | Kontrolle | Passive | 2 / Heiler 1 | Permanenter passiver Kreaturen-Skill. Die gelernte Skillstufe bestimmt die Anzahl gleichzeitig kontrollierbarer Kreaturen: eine auf Stufe 1, zwei auf Stufe 2. Alle anderen Klassen können maximal Stufe 1 lernen; nur der Abenteurer und seine Weiterentwicklung maximal Stufe 2 und damit zwei Kreaturen gleichzeitig kontrollieren. Freischaltung ab Charakterlevel 5. Die Charakterlevel-Voraussetzung für Skillstufe 2 ist noch offen. | Nicht vollständig gespeichert | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition; Levelskalierung prüfen |
| 136 | Beschwören | Skill | 1 | Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 1 | Nicht gespeichert | Gemeinsame Definition |
| 137 | Zurückrufen | Skill | 1 | Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer. | Nicht vollständig gespeichert | Mana-Kosten: 5 bis 5 | 5 | 0 | Nicht gespeichert | Gemeinsame Definition |
| 138 | Zucht | Passive | 3 / Heiler 1 | Ermöglicht deiner Kreatur, Erfahrung zu sammeln und aufzuleveln. Sie erhält die gleichen Erfahrungspunkte wie du, zuzüglich 10 Prozent je gelerntem Skilllevel. Das entspricht 110 Prozent auf Level 1, 120 Prozent auf Level 2 und 130 Prozent auf Level 3. Permanent passiv ohne Kosten oder Cooldown. Normale Klassen können Level 1 lernen, der Abenteurer Level 3; die zweite Spezialklasse ist noch festzulegen.<br>experienceBonus, Ziel companion, 0,1 | experienceBonus/: 10 bis 10 % | Keine | Entfällt | Entfällt | experienceBonus: 0 s | Gemeinsame Definition |
| 139 | Ausdauertraining | Passive | 20 | Vita +1<br>Wisdom +1 | Vita: 1 bis 20<br>Wisdom: 1 bis 20 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 143 | Immunität | Passive | 10 | Wisdom +0,5<br>Intelligenz +0,5<br>M-Defense +6<br>statusResistance, Ziel self, 0,01 | M-Defense: 6 bis 42<br>Intelligenz: 0,5 bis 5<br>Wisdom: 0,5 bis 5<br>statusResistance/: 1 bis 10 % | Keine | Entfällt | Entfällt | statusResistance: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 144 | Rüstungstraining | Passive | 10 | P-Defense +3<br>M-Defense +6 | P-Defense: 3 bis 30<br>M-Defense: 6 bis 60 | Keine | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 197 | Aurora-Segen | Buff | 10 | Mana-Regeneration +2<br>Stärke +2<br>Vita +2<br>Wisdom +2<br>Intelligenz +2 | Stärke: 2 bis 20<br>Vita: 2 bis 20<br>Intelligenz: 2 bis 20<br>Wisdom: 2 bis 20<br>Mana-Regeneration: 2 bis 20 | Mana-Kosten: 35 bis 224 | 60 | 0.3 | 1800 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 201 | Waffentraining | Passive | 20 | P-Angriff +1<br>M-Angriff +1 | P-Angriff: 1 bis 20<br>M-Angriff: 1 bis 20 | Keine aktive Nutzung | Entfällt | Entfällt | Permanent | Gemeinsame Definition |
| 206 | Lunare Inkanation | Skill | 4 | HP +80<br>Animation 1 s (vorläufig) | HP: 80 bis 640 | Mana-Kosten: 120 bis 300 | 100 bis 70 | 1 | 0 bis undefined | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 207 | Himmlische Aufopferung | Skill | 1 | Sofortige Notfallheilung mit einer lernbaren Stufe, ausschließlich für Heiler/Priester. Opfert 90 Prozent des maximalen Manas; dieses Mana muss zur Aktivierung vorhanden sein und wird tatsächlich bezahlt. Zusätzlich werden 10 Prozent des maximalen Lebens geopfert. Beide Ressourcenpreise müssen zur Aktivierung bezahlbar sein; der Lebenspreis darf den Anwender nicht töten. Jedes andere eigene Gruppenmitglied innerhalb von 10 Metern Radius um den Heiler zum Zeitpunkt der sofortigen Heilung erhält einzeln dieselbe Heilung: 500 HP plus 1,5 HP je tatsächlich für diese Anwendung geopfertem Manapunkt. Die Heilmenge wird nicht unter den Empfängern aufgeteilt; der Anwender selbst wird nicht geheilt. Beispiel: Bei 3000 Max-Mana werden 2700 Mana und zusätzlich 10 Prozent Max-Leben geopfert, jedes andere Gruppenmitglied erhält 4550 HP vor Begrenzung durch fehlendes Leben. Keine garantierte vollständige Heilung und keine fortlaufenden Heilticks. Cooldown 900 Sekunden (15 Minuten), Castzeit 0 Sekunden; die Heilung erfolgt sofort. Die vorläufige Animation von ungefähr 2 Sekunden verzögert die Wirkung nicht; ob sie weitere Aktionen blockiert, ist noch offen. Rundung von Mana-/Heilwerten wird später zentral festgelegt.<br>heal, Ziel ownGroup, 500<br>Animation 2 s (vorläufig) | Nicht vollständig gespeichert | Mana-Kosten: 0,9 bis 0,9 (Anteil)<br>health-Kosten: 0,1 bis 0,1 (Anteil) | 900 | 0 | heal: 0 s | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 208 | Das ewige Wissen | Passive | 10 | Wisdom +0,6<br>Intelligenz +1,4 | Intelligenz: 1,4 bis 14<br>Wisdom: 0,6 bis 6 | Keine | Entfällt | Entfällt | Permanent | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 217 | Göttliche Nova | Skill / magisch | 10 | M-Angriff +473<br>Animation 2,5 s (vorläufig)<br>Fläche: 2 m Radius um anvisiertes Ziel<br>Maximal 5 Gegner, jeweils ein Treffer | M-Angriff: 473 bis 1.415 | Mana-Kosten: 118 bis 354 | 176 bis 158 | 0.4 | 2,5 bis 2,5 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 239 | Frostschauer | Skill / magisch | 10 | M-Angriff +32<br>periodicDamage, Ziel enemiesInArea, 32<br>statModifier, Ziel enemy, movementSpeed, -0,01<br>Fläche: 5 m Radius um anvisiertes Ziel<br>Maximal 3 Gegner je Treffer/Tick<br>Schaden alle 1,5 s; Verlangsamung 1–10 % für 3 s nach Treffer | M-Angriff: 32 bis 271<br>periodicDamage/: 32 bis 271<br>statModifier/movementSpeed: -1 bis -10 % | Mana-Kosten: 26 bis 542 | 53 bis 44 | 0.4 | 4 bis 8 s Feldlaufzeit | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 240 | Permafrost | Selbstbuff | 3 | Sofort umschaltbarer Eigenbuff mit drei Stufen und ohne feste Laufzeit. Bleibt aktiv, bis er manuell ausgeschaltet wird oder das Mana für den nächsten Verbrauchstick nicht reicht. Bei jedem Mana-Regenerationstick kostet er auf Stufe 1/2/3 jeweils 13/21/29 Mana; zusätzlich einmalige Aktivierungskosten 50/63/76 Mana auf Stufe 1/2/3. Eiszauber haben bei aktivem Buff 2/4/6 Sekunden weniger Cooldown. Zusätzlich steigt die Einfrierchance von Eisangriffen auf allen drei Stufen um einen Prozentpunkt; Gefrierbrand erreicht damit auf Maximalstufe 11 statt 10 Prozent. Keine zusätzlichen Einfrierwürfe oder eigene Einfrierdauer. Castzeit fest 0,1 Sekunden. Beim Abschalten enden die Boni und der laufende Verbrauch. Umschalt-Cooldown 0 Sekunden. Mindest-Cooldown von Eiszaubern und Einfluss auf bereits laufende Cooldowns bleiben offen. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 76 auf Stufe 3, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.<br>cooldownReduction, Ziel self, 2<br>procChanceBonus, Ziel self, 0,01<br>resourceDrain, Ziel self, 13 | cooldownReduction/: 2 bis 6<br>resourceDrain/: 13 bis 29 | Mana-Kosten: 50 bis 76<br>Laufender Verbrauch: 13 / 21 / 29 Mana je Mana-Regenerationstick | 0 | 0.1 | Bis ausgeschaltet oder Mana nicht reicht | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |
| 242 | Assimilation | Selbstbuff | 5 | Mana-Regeneration +5 | Mana: 200 bis 300<br>Mana-Regeneration: 5 bis 25 | Mana-Kosten: 50 bis 102 | 60 | 0.1 | 600 | Keine zusätzliche Lernvoraussetzung festgelegt; Ausführung ggf. prüfen |

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

### 54: Gefrierbrand

Permanenter passiver Skill ohne direkten M-Angriffsbonus. Eiszauber verursachen ab Stufe 5 insgesamt 1 Prozent und ab Stufe 10 insgesamt 2 Prozent mehr Schaden. Auf den übrigen Stufen steigt die Chance, dass ein eigener treffender Eisangriff das Ziel für 2 Sekunden einfriert: Stufe 1/2/3/4/5/6/7/8/9/10 jeweils 1,25/2,5/3,75/5/5/6,25/7,5/8,75/10/10 Prozent. Löst dieses Einfrieren aus, erleidet das Ziel bei Sekunde 1 und 2 zusätzlich Gefrierbrand-Schaden. Grundschaden je Tick steigt gleichmäßig von 11 auf 131 über zehn Stufen, ohne Charakter- oder Waffen-M-Angriff je Tick. Auf Stufe 10 zwei Ticks zu je 131, insgesamt 262 Grundschaden. Der DoT ist an das durch diesen Skill ausgelöste Einfrieren gebunden und endet mit ihm. Keine Aktivierungskosten, Castzeit oder Cooldown festgelegt. Erneute Anwendung, Bossresistenzen, Einfrieren durch andere Skills und die Wechselwirkung des Eisbonus mit dem eigenen DoT werden später geprüft.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Frostburn |
| category | passive |
| charClass[0] | Healer |
| charClass[1] | Priest |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanenter passiver Skill ohne direkten M-Angriffsbonus. Eiszauber verursachen ab Stufe 5 insgesamt 1 Prozent und ab Stufe 10 insgesamt 2 Prozent mehr Schaden. Auf den übrigen Stufen steigt die Chance, dass ein eigener treffender Eisangriff das Ziel für 2 Sekunden einfriert: Stufe 1/2/3/4/5/6/7/8/9/10 jeweils 1,25/2,5/3,75/5/5/6,25/7,5/8,75/10/10 Prozent. Löst dieses Einfrieren aus, erleidet das Ziel bei Sekunde 1 und 2 zusätzlich Gefrierbrand-Schaden. Grundschaden je Tick steigt gleichmäßig von 11 auf 131 über zehn Stufen, ohne Charakter- oder Waffen-M-Angriff je Tick. Auf Stufe 10 zwei Ticks zu je 131, insgesamt 262 Grundschaden. Der DoT ist an das durch diesen Skill ausgelöste Einfrieren gebunden und endet mit ihm. Keine Aktivierungskosten, Castzeit oder Cooldown festgelegt. Erneute Anwendung, Bossresistenzen, Einfrieren durch andere Skills und die Wechselwirkung des Eisbonus mit dem eigenen DoT werden später geprüft. |
| description_eng | Permanent passive with no direct magical attack bonus. Ice spells gain a total of 1 percent increased damage at level 5 and 2 percent at level 10. Other levels increase the chance for an own successful ice attack to freeze the target for 2 seconds: levels 1–10 grant 1.25/2.5/3.75/5/5/6.25/7.5/8.75/10/10 percent. When this freeze procs, Frostburn deals additional damage at seconds 1 and 2. Base damage per tick increases linearly from 11 to 131 across ten levels, without character or weapon magical attack added per tick. Level 10 totals two ticks of 131, or 262 base damage. The DoT is linked to this passive’s freeze and ends with it. No activation costs, cast time or cooldown defined. Reapplication, boss resistances, freezes from other skills and interaction of the ice bonus with its own DoT remain pending. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 54 |
| skillName_de | Gefrierbrand |
| skillpoints | 1 |
| effects[0].key | frostburn-ice-spell-bonus |
| effects[0].type | damageBonus |
| effects[0].target | self |
| effects[0].appliesTo | allSkills |
| effects[0].damageSchool | ice |
| effects[0].value | 0 |
| effects[0].unit | fraction |
| effects[0].valueScaling.type | table |
| effects[0].valueScaling.values[0] | 0 |
| effects[0].valueScaling.values[1] | 0 |
| effects[0].valueScaling.values[2] | 0 |
| effects[0].valueScaling.values[3] | 0 |
| effects[0].valueScaling.values[4] | 0,01 |
| effects[0].valueScaling.values[5] | 0,01 |
| effects[0].valueScaling.values[6] | 0,01 |
| effects[0].valueScaling.values[7] | 0,01 |
| effects[0].valueScaling.values[8] | 0,01 |
| effects[0].valueScaling.values[9] | 0,02 |
| effects[0].durationSeconds | 0 |
| effects[1].key | frostburn-freeze |
| effects[1].type | control |
| effects[1].target | enemy |
| effects[1].controlKind | freeze |
| effects[1].applicationTrigger | ownIceAttackHit |
| effects[1].hitChance | 0,013 |
| effects[1].valueScaling.type | table |
| effects[1].valueScaling.values[0] | 0,013 |
| effects[1].valueScaling.values[1] | 0,025 |
| effects[1].valueScaling.values[2] | 0,038 |
| effects[1].valueScaling.values[3] | 0,05 |
| effects[1].valueScaling.values[4] | 0,05 |
| effects[1].valueScaling.values[5] | 0,063 |
| effects[1].valueScaling.values[6] | 0,075 |
| effects[1].valueScaling.values[7] | 0,088 |
| effects[1].valueScaling.values[8] | 0,1 |
| effects[1].valueScaling.values[9] | 0,1 |
| effects[1].durationSeconds | 2 |
| effects[2].key | frostburn-periodic-damage |
| effects[2].type | periodicDamage |
| effects[2].target | enemy |
| effects[2].damageTypes[0] | magical |
| effects[2].damageSchool | ice |
| effects[2].value | 11 |
| effects[2].unit | flat |
| effects[2].valueScaling.type | linear |
| effects[2].valueScaling.base | 11 |
| effects[2].valueScaling.perLevel | 13,333 |
| effects[2].intervalSeconds | 1 |
| effects[2].firstTickAfterSeconds | 1 |
| effects[2].durationSeconds | 2 |
| effects[2].endWith | frostburn-freeze |
| effects[2].addsCasterMagicalAttack | false |
| effectsVersion | 1 |
| resourceCosts | [] |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | thresholds |
| levelProgression.rules[0].rule.base | 0 |
| levelProgression.rules[0].rule.changes[0].level | 5 |
| levelProgression.rules[0].rule.changes[0].value | 0,01 |
| levelProgression.rules[0].rule.changes[1].level | 10 |
| levelProgression.rules[0].rule.changes[1].value | 0,02 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 1 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | legacyTable |
| levelProgression.rules[1].rule.values[0] | 0,013 |
| levelProgression.rules[1].rule.values[1] | 0,025 |
| levelProgression.rules[1].rule.values[2] | 0,038 |
| levelProgression.rules[1].rule.values[3] | 0,05 |
| levelProgression.rules[1].rule.values[4] | 0,05 |
| levelProgression.rules[1].rule.values[5] | 0,063 |
| levelProgression.rules[1].rule.values[6] | 0,075 |
| levelProgression.rules[1].rule.values[7] | 0,088 |
| levelProgression.rules[1].rule.values[8] | 0,1 |
| levelProgression.rules[1].rule.values[9] | 0,1 |
| levelProgression.rules[1].rule.beyond | requiresDefinition |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 2 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 11 |
| levelProgression.rules[2].rule.perLevel | 13,333 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

### 58: Kuss der Aurora

Nutzt die Macht Auroras, um ein einzelnes verbündetes Ziel einmalig zu heilen. Sechs Skillstufen. Grundheilung 550 HP auf Stufe 1 und +430 je weiterer Stufe: 550, 980, 1410, 1840, 2270, 2700 HP. Auf Stufe 5 zusätzlich 3 Prozent des Maximal-Lebens desselben Ziels, auf Stufe 6 stattdessen insgesamt 5 Prozent. Dieser prozentuale Anteil wird zur Grundheilung derselben Anwendung addiert, nicht als separater Cast ausgeführt. Mana 283 auf Stufe 1 und +185 je weiterer Stufe, auf Stufe 5 1023 und auf Stufe 6 1208. Cooldown 80 Sekunden und je weiterer Stufe 2 Sekunden weniger, auf Stufe 5 72 und auf Stufe 6 70 Sekunden. Castzeit 0,6 Sekunden. Einmalige Heilung nach der Castzeit, keine anschließende Wirkungsdauer oder Heilticks.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Aurora's Kiss |
| category | active |
| cd | 80 |
| charClass[0] | Healer |
| charClass[1] | Priest |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Nutzt die Macht Auroras, um ein einzelnes verbündetes Ziel einmalig zu heilen. Sechs Skillstufen. Grundheilung 550 HP auf Stufe 1 und +430 je weiterer Stufe: 550, 980, 1410, 1840, 2270, 2700 HP. Auf Stufe 5 zusätzlich 3 Prozent des Maximal-Lebens desselben Ziels, auf Stufe 6 stattdessen insgesamt 5 Prozent. Dieser prozentuale Anteil wird zur Grundheilung derselben Anwendung addiert, nicht als separater Cast ausgeführt. Mana 283 auf Stufe 1 und +185 je weiterer Stufe, auf Stufe 5 1023 und auf Stufe 6 1208. Cooldown 80 Sekunden und je weiterer Stufe 2 Sekunden weniger, auf Stufe 5 72 und auf Stufe 6 70 Sekunden. Castzeit 0,6 Sekunden. Einmalige Heilung nach der Castzeit, keine anschließende Wirkungsdauer oder Heilticks. |
| description_eng | Uses the power of Aurora to heal one allied target once. Six skill levels. Base healing 550 HP plus 430 per additional level: 550, 980, 1410, 1840, 2270, 2700 HP. Level 5 adds 3 percent of that same target’s maximum health; level 6 instead adds a total of 5 percent. The percentage component is added to base healing within the same activation, not cast separately. Mana 283 plus 185 per additional level: 1023 at level 5, 1208 at level 6. Cooldown 80 seconds minus 2 per additional level: 72 at level 5, 70 at level 6. Cast time 0.6 seconds. One healing application after casting, no lingering duration or healing ticks. |
| dmgType (Altformat) | spell |
| health | 550 |
| maxSkillLv | 6 |
| maxUpgradeLv | 10 |
| nr | 58 |
| skillName_de | Kuss der Aurora |
| skillpoints | 1 |
| castTimeSeconds | 0,6 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 80 |
| cooldownScaling.perLevel | -2 |
| durationScaling.type | table |
| durationScaling.values[0] | 0 |
| durationScaling.values[1] | 0 |
| durationScaling.values[2] | 0 |
| durationScaling.values[3] | 0 |
| durationScaling.values[4] | 0 |
| durationScaling.values[5] | 0 |
| effects[0].key | divine-healing-single-target |
| effects[0].type | heal |
| effects[0].target | allyOrCompanion |
| effects[0].value | 550 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 550 |
| effects[0].valueScaling.perLevel | 430 |
| effects[0].durationSeconds | 0 |
| effects[1].key | divine-healing-target-max-health |
| effects[1].type | heal |
| effects[1].target | allyOrCompanion |
| effects[1].value | 0 |
| effects[1].unit | fraction |
| effects[1].reference | targetMaxHealth |
| effects[1].valueScaling.type | table |
| effects[1].valueScaling.values[0] | 0 |
| effects[1].valueScaling.values[1] | 0 |
| effects[1].valueScaling.values[2] | 0 |
| effects[1].valueScaling.values[3] | 0 |
| effects[1].valueScaling.values[4] | 0,03 |
| effects[1].valueScaling.values[5] | 0,05 |
| effects[1].durationSeconds | 0 |
| effectsVersion | 1 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 283 |
| resourceCosts[0].scaling.perLevel | 185 |
| statScaling.health.type | linear |
| statScaling.health.base | 550 |
| statScaling.health.perLevel | 430 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 80 |
| levelProgression.rules[0].rule.rule.perLevel | -2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | constant |
| levelProgression.rules[1].rule.value | 0 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 550 |
| levelProgression.rules[2].rule.perLevel | 430 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 1 |
| levelProgression.rules[3].path[2] | valueScaling |
| levelProgression.rules[3].rule.kind | thresholds |
| levelProgression.rules[3].rule.base | 0 |
| levelProgression.rules[3].rule.changes[0].level | 5 |
| levelProgression.rules[3].rule.changes[0].value | 0,03 |
| levelProgression.rules[3].rule.changes[1].level | 6 |
| levelProgression.rules[3].rule.changes[1].value | 0,05 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.rules[4].path[0] | resourceCosts |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | scaling |
| levelProgression.rules[4].rule.kind | bounded |
| levelProgression.rules[4].rule.min | 0 |
| levelProgression.rules[4].rule.rule.kind | linear |
| levelProgression.rules[4].rule.rule.base | 283 |
| levelProgression.rules[4].rule.rule.perLevel | 185 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | statScaling |
| levelProgression.rules[5].path[1] | health |
| levelProgression.rules[5].rule.kind | linear |
| levelProgression.rules[5].rule.base | 550 |
| levelProgression.rules[5].rule.perLevel | 430 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | skill |

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

### 64: Heilung

Heilt ein verbündetes Ziel. Der Heilwert wächst kumulativ mit Zuwächsen von 20, 26, 32, 38 und so weiter: Jeder nächste Zuwachs ist um 6 höher. Heilwerte von Stufe 1 bis 20: 20, 46, 78, 116, 160, 210, 266, 328, 396, 470, 550, 636, 728, 826, 930, 1040, 1156, 1278, 1406, 1540. Formel für Stufe L: 20 × L + 3 × L × (L - 1). Auf Stufe 20 beträgt der Heilwert 1540 HP. Castzeit 0,1 Sekunden. Cooldown 19 Sekunden auf Stufe 1 und 19 Sekunden auf Stufe 20. Mana-Kosten 7 auf Stufe 1, Stufenwerte 7, 16, 27, 41, 56, 74, 93, 115, 139, 165, 193, 223, 255, 289, 326, 364, 405, 447, 492, 539, maximal 539 auf Stufe 20. Einmalige Heilung nach der Castzeit, Wirkungsdauer 0 Sekunden, keine Heilticks. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Healing |
| category | active |
| cd | 19 |
| charClass[0] | Healer |
| charClass[1] | Priest |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Heilt ein verbündetes Ziel. Der Heilwert wächst kumulativ mit Zuwächsen von 20, 26, 32, 38 und so weiter: Jeder nächste Zuwachs ist um 6 höher. Heilwerte von Stufe 1 bis 20: 20, 46, 78, 116, 160, 210, 266, 328, 396, 470, 550, 636, 728, 826, 930, 1040, 1156, 1278, 1406, 1540. Formel für Stufe L: 20 × L + 3 × L × (L - 1). Auf Stufe 20 beträgt der Heilwert 1540 HP. Castzeit 0,1 Sekunden. Cooldown 19 Sekunden auf Stufe 1 und 19 Sekunden auf Stufe 20. Mana-Kosten 7 auf Stufe 1, Stufenwerte 7, 16, 27, 41, 56, 74, 93, 115, 139, 165, 193, 223, 255, 289, 326, 364, 405, 447, 492, 539, maximal 539 auf Stufe 20. Einmalige Heilung nach der Castzeit, Wirkungsdauer 0 Sekunden, keine Heilticks. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Heals an allied target. Healing grows cumulatively with increments of 20, 26, 32, 38 and so on, increasing each successive increment by 6. Healing values at levels 1–20: 20, 46, 78, 116, 160, 210, 266, 328, 396, 470, 550, 636, 728, 826, 930, 1040, 1156, 1278, 1406, 1540. Formula for level L: 20 × L + 3 × L × (L - 1). Level 20 healing is 1540 HP. Cast time 0.1 seconds. Cooldown 19 seconds at level 1 and 19 seconds at level 20. Mana cost 7 at level 1, maximum 539 at level 20. Heals once after casting, effect duration 0 seconds, no healing ticks. |
| dmgType (Altformat) | spell |
| health | 20 |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 64 |
| skillName_de | Heilung |
| skillpoints | 1 |
| castTimeSeconds | 0,1 |
| statScaling.health.type | table |
| statScaling.health.values[0] | 20 |
| statScaling.health.values[1] | 46 |
| statScaling.health.values[2] | 78 |
| statScaling.health.values[3] | 116 |
| statScaling.health.values[4] | 160 |
| statScaling.health.values[5] | 210 |
| statScaling.health.values[6] | 266 |
| statScaling.health.values[7] | 328 |
| statScaling.health.values[8] | 396 |
| statScaling.health.values[9] | 470 |
| statScaling.health.values[10] | 550 |
| statScaling.health.values[11] | 636 |
| statScaling.health.values[12] | 728 |
| statScaling.health.values[13] | 826 |
| statScaling.health.values[14] | 930 |
| statScaling.health.values[15] | 1.040 |
| statScaling.health.values[16] | 1.156 |
| statScaling.health.values[17] | 1.278 |
| statScaling.health.values[18] | 1.406 |
| statScaling.health.values[19] | 1.540 |
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
| effects[0].key | small-healing-single-target |
| effects[0].type | heal |
| effects[0].target | allyOrCompanion |
| effects[0].value | 20 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | table |
| effects[0].valueScaling.values[0] | 20 |
| effects[0].valueScaling.values[1] | 46 |
| effects[0].valueScaling.values[2] | 78 |
| effects[0].valueScaling.values[3] | 116 |
| effects[0].valueScaling.values[4] | 160 |
| effects[0].valueScaling.values[5] | 210 |
| effects[0].valueScaling.values[6] | 266 |
| effects[0].valueScaling.values[7] | 328 |
| effects[0].valueScaling.values[8] | 396 |
| effects[0].valueScaling.values[9] | 470 |
| effects[0].valueScaling.values[10] | 550 |
| effects[0].valueScaling.values[11] | 636 |
| effects[0].valueScaling.values[12] | 728 |
| effects[0].valueScaling.values[13] | 826 |
| effects[0].valueScaling.values[14] | 930 |
| effects[0].valueScaling.values[15] | 1.040 |
| effects[0].valueScaling.values[16] | 1.156 |
| effects[0].valueScaling.values[17] | 1.278 |
| effects[0].valueScaling.values[18] | 1.406 |
| effects[0].valueScaling.values[19] | 1.540 |
| effects[0].durationSeconds | 0 |
| effectsVersion | 1 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.values[0] | 7 |
| resourceCosts[0].scaling.values[1] | 16 |
| resourceCosts[0].scaling.values[2] | 27 |
| resourceCosts[0].scaling.values[3] | 41 |
| resourceCosts[0].scaling.values[4] | 56 |
| resourceCosts[0].scaling.values[5] | 74 |
| resourceCosts[0].scaling.values[6] | 93 |
| resourceCosts[0].scaling.values[7] | 115 |
| resourceCosts[0].scaling.values[8] | 139 |
| resourceCosts[0].scaling.values[9] | 165 |
| resourceCosts[0].scaling.values[10] | 193 |
| resourceCosts[0].scaling.values[11] | 223 |
| resourceCosts[0].scaling.values[12] | 255 |
| resourceCosts[0].scaling.values[13] | 289 |
| resourceCosts[0].scaling.values[14] | 326 |
| resourceCosts[0].scaling.values[15] | 364 |
| resourceCosts[0].scaling.values[16] | 405 |
| resourceCosts[0].scaling.values[17] | 447 |
| resourceCosts[0].scaling.values[18] | 492 |
| resourceCosts[0].scaling.values[19] | 539 |
| resourceCosts[0].scaling.base | 7 |
| manaPricing.category | heal |
| manaPricing.factor | 0,35 |
| manaPricing.basis | healingPerRecipient |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | health |
| levelProgression.rules[0].rule.kind | polynomial |
| levelProgression.rules[0].rule.coefficients[0] | 20 |
| levelProgression.rules[0].rule.coefficients[1] | 23 |
| levelProgression.rules[0].rule.coefficients[2] | 3 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | constant |
| levelProgression.rules[1].rule.value | 0 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | polynomial |
| levelProgression.rules[2].rule.coefficients[0] | 20 |
| levelProgression.rules[2].rule.coefficients[1] | 23 |
| levelProgression.rules[2].rule.coefficients[2] | 3 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.rules[3].path[0] | resourceCosts |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | scaling |
| levelProgression.rules[3].rule.kind | outputCost |
| levelProgression.rules[3].rule.factor | 0,35 |
| levelProgression.rules[3].rule.basis | healing |
| levelProgression.rules[3].rule.minimum | 0 |
| levelProgression.rules[3].source | verifiedManaPricing |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | skill |

### 68: Kristallisierte Wasserspähre

Schleudert eine Eiskugel auf dein Ziel, die beim Aufprall zerspringt und einmalig magischen Schaden verursacht. Der Grundschaden steigt von 137 um 27 je weiterer Stufe auf 380 auf Stufe 10. Mana-Kosten 34 auf Stufe 1, +7 je weiterer Stufe, maximal 97 auf Stufe 10. Der Cooldown 30 Sekunden auf Stufe 1 und 26 Sekunden auf Stufe 10. Castzeit 0,2 Sekunden. Die vorläufige Animation dauert 1 Sekunde; keine anhaltende Wirkungsdauer oder zusätzlicher Kontrolleffekt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Crystallized Water Sphere |
| category | active |
| cd | 30 |
| charClass[0] | Healer |
| charClass[1] | Priest |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Schleudert eine Eiskugel auf dein Ziel, die beim Aufprall zerspringt und einmalig magischen Schaden verursacht. Der Grundschaden steigt von 137 um 27 je weiterer Stufe auf 380 auf Stufe 10. Mana-Kosten 34 auf Stufe 1, +7 je weiterer Stufe, maximal 97 auf Stufe 10. Der Cooldown 30 Sekunden auf Stufe 1 und 26 Sekunden auf Stufe 10. Castzeit 0,2 Sekunden. Die vorläufige Animation dauert 1 Sekunde; keine anhaltende Wirkungsdauer oder zusätzlicher Kontrolleffekt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Hurls an ice sphere at your target, shattering on impact and dealing magical damage once. Base damage increases from 137 by 27 per additional level to 380 at level 10. Mana cost 34 at level 1, maximum 97 at level 10. Cooldown 30 seconds at level 1 and 26 seconds at level 10. Cast time is 0.2 seconds. Provisional animation lasts 1 second; no lasting effect or additional control effect. |
| dmgType (Altformat) | spell |
| matk | 137 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 68 |
| skillName_de | Kristallisierte Wasserspähre |
| skillpoints | 1 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 30 |
| cooldownScaling.perLevel | -0,444 |
| mana (Aktivierungskosten, kein Bonus) | 34 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 34 |
| resourceCosts[0].scaling.perLevel | 7 |
| statScaling.matk.type | linear |
| statScaling.matk.base | 137 |
| statScaling.matk.perLevel | 27 |
| animationDurationSeconds | 1 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,2 |
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
| levelProgression.rules[0].rule.rule.base | 30 |
| levelProgression.rules[0].rule.rule.perLevel | -0,444 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 34 |
| levelProgression.rules[1].rule.rule.perLevel | 7 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | matk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 137 |
| levelProgression.rules[2].rule.perLevel | 27 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 78: Göttliche Heilung

Heilt die gesamte eigene Gruppe einschließlich des Heilers innerhalb von 12 Metern Radius um den Heiler. Nach der Castzeit erfolgt die erste Heilung mit dem vollen Skill-Heilwert; 1 Sekunde später folgt eine zweite Heilung mit 50 Prozent dieses Werts. Grundheilwert 162 HP auf Stufe 1, +97 je weiterer Stufe, auf Stufe 10 1035 HP. Je Gruppenmitglied insgesamt 243 HP auf Stufe 1 beziehungsweise 1552,5 HP auf Stufe 10 vor Begrenzung durch fehlende HP. Mana-Kosten 85 auf Stufe 1, +51 je weiterer Stufe, maximal 544 auf Stufe 10. Cooldown gleichmäßig von 64 auf 58 Sekunden über zehn Stufen. Castzeit 0,2 Sekunden. Gesamter visueller Ablauf ungefähr 2 Sekunden; genau zwei Heilungen, kein fortlaufender Heil-Tick. Ob Empfänger beim ersten Heal festgehalten oder beim zweiten erneut im Radius geprüft werden, ist noch offen. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Divine Healing |
| category | active |
| cd | 64 |
| charClass[0] | Healer |
| charClass[1] | Priest |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Heilt die gesamte eigene Gruppe einschließlich des Heilers innerhalb von 12 Metern Radius um den Heiler. Nach der Castzeit erfolgt die erste Heilung mit dem vollen Skill-Heilwert; 1 Sekunde später folgt eine zweite Heilung mit 50 Prozent dieses Werts. Grundheilwert 162 HP auf Stufe 1, +97 je weiterer Stufe, auf Stufe 10 1035 HP. Je Gruppenmitglied insgesamt 243 HP auf Stufe 1 beziehungsweise 1552,5 HP auf Stufe 10 vor Begrenzung durch fehlende HP. Mana-Kosten 85 auf Stufe 1, +51 je weiterer Stufe, maximal 544 auf Stufe 10. Cooldown gleichmäßig von 64 auf 58 Sekunden über zehn Stufen. Castzeit 0,2 Sekunden. Gesamter visueller Ablauf ungefähr 2 Sekunden; genau zwei Heilungen, kein fortlaufender Heil-Tick. Ob Empfänger beim ersten Heal festgehalten oder beim zweiten erneut im Radius geprüft werden, ist noch offen. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Heals the entire own group including the healer within a 12-meter radius of the healer. The first heal applies full skill healing after casting; 1 second later a second heal applies 50 percent of that value. Base healing 162 HP plus 97 per additional level, reaching 1035 at level 10. Total per group member 243 HP at level 1 or 1552.5 at level 10 before missing-health limits. Mana cost 85 at level 1, maximum 544 at level 10. Cooldown decreases linearly from 64 to 58 seconds across ten levels. Cast time 0.2 seconds. Approximate total visual sequence 2 seconds; exactly two heals, no ongoing healing ticks. Whether recipients are fixed at the first heal or checked again within the radius for the second remains pending. |
| dmgType (Altformat) | spell |
| health | 162 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 78 |
| skillName_de | Göttliche Heilung |
| skillpoints | 1 |
| animationDurationSeconds | 2 |
| animationTimingStatus | provisional |
| areaSettings.center | caster |
| areaSettings.includeCaster | true |
| areaSettings.radiusMeters | 12 |
| castTimeSeconds | 0,2 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 64 |
| cooldownScaling.perLevel | -0,667 |
| dur | 2 |
| effects[0].key | mass-healing-full |
| effects[0].type | heal |
| effects[0].target | alliesInArea |
| effects[0].recipientGroup | ownGroup |
| effects[0].distribution | fullAmountToEachRecipient |
| effects[0].value | 162 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 162 |
| effects[0].valueScaling.perLevel | 97 |
| effects[0].applicationDelaySeconds | 0 |
| effects[0].durationSeconds | 0 |
| effects[1].key | mass-healing-followup |
| effects[1].type | heal |
| effects[1].target | alliesInArea |
| effects[1].recipientGroup | ownGroup |
| effects[1].distribution | fullAmountToEachRecipient |
| effects[1].value | 81 |
| effects[1].unit | flat |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | 81 |
| effects[1].valueScaling.perLevel | 48,5 |
| effects[1].applicationDelaySeconds | 1 |
| effects[1].durationSeconds | 0 |
| effectsVersion | 1 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 85 |
| resourceCosts[0].scaling.perLevel | 51 |
| statScaling.health.type | linear |
| statScaling.health.base | 162 |
| statScaling.health.perLevel | 97 |
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
| levelProgression.rules[0].rule.rule.base | 64 |
| levelProgression.rules[0].rule.rule.perLevel | -0,667 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 162 |
| levelProgression.rules[1].rule.perLevel | 97 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 1 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 81 |
| levelProgression.rules[2].rule.perLevel | 48,5 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | resourceCosts |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | scaling |
| levelProgression.rules[3].rule.kind | bounded |
| levelProgression.rules[3].rule.min | 0 |
| levelProgression.rules[3].rule.rule.kind | linear |
| levelProgression.rules[3].rule.rule.base | 85 |
| levelProgression.rules[3].rule.rule.perLevel | 51 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | health |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 162 |
| levelProgression.rules[4].rule.perLevel | 97 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | skill |

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

### 108: Strahlendes Aurafeld

Aktiviert sofort ein 12 Sekunden dauerndes, mit dem Heiler mitbewegtes Aurafeld mit 4 Metern Radius. Der Heiler erhält Selbstheilung bei Sekunde 1, 3, 5, 7, 9 und 11. Verbündete im Feld erhalten jeweils 30 Prozent des Selbstheilungswerts bei Sekunde 2, 4, 6, 8, 10 und 12; der Heiler erhält diese zusätzlichen Verbündeten-Ticks nicht. Selbstheilung je Tick 10 HP je gelerntem Skilllevel, auf Stufe 10 100 HP. Verbündetenheilung je Tick 3 HP je gelerntem Skilllevel, auf Stufe 10 30 HP je Empfänger. Über die volle Laufzeit insgesamt 60 bis 600 HP für den Heiler und 18 bis 180 HP je durchgehend anwesendem Verbündeten. Mana-Kosten 21 auf Stufe 1, +21 je weiterer Stufe, maximal 210 auf Stufe 10. Cooldown 73 Sekunden auf Stufe 1 und 46 Sekunden auf Stufe 10. Castzeit 0 Sekunden. Bewegung ist erlaubt; ein eigener Angriff oder eine andere aktive Heilung bricht das gesamte Feld und alle verbleibenden Ticks ab. Die eigenen Aura-Heilticks lösen keinen Abbruch aus. Regeln für andere Aktionen, erlittenen Schaden und Unterbrechungseffekte werden später geprüft. Kein zusätzlicher Faith-Bonus. Eine Skalierung mit Waffen- oder Charakter-M-Angriff ist noch nicht festgelegt. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Radiant Aura Field |
| category | active |
| cd | 73 |
| charClass[0] | Healer |
| charClass[1] | Priest |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Aktiviert sofort ein 12 Sekunden dauerndes, mit dem Heiler mitbewegtes Aurafeld mit 4 Metern Radius. Der Heiler erhält Selbstheilung bei Sekunde 1, 3, 5, 7, 9 und 11. Verbündete im Feld erhalten jeweils 30 Prozent des Selbstheilungswerts bei Sekunde 2, 4, 6, 8, 10 und 12; der Heiler erhält diese zusätzlichen Verbündeten-Ticks nicht. Selbstheilung je Tick 10 HP je gelerntem Skilllevel, auf Stufe 10 100 HP. Verbündetenheilung je Tick 3 HP je gelerntem Skilllevel, auf Stufe 10 30 HP je Empfänger. Über die volle Laufzeit insgesamt 60 bis 600 HP für den Heiler und 18 bis 180 HP je durchgehend anwesendem Verbündeten. Mana-Kosten 21 auf Stufe 1, +21 je weiterer Stufe, maximal 210 auf Stufe 10. Cooldown 73 Sekunden auf Stufe 1 und 46 Sekunden auf Stufe 10. Castzeit 0 Sekunden. Bewegung ist erlaubt; ein eigener Angriff oder eine andere aktive Heilung bricht das gesamte Feld und alle verbleibenden Ticks ab. Die eigenen Aura-Heilticks lösen keinen Abbruch aus. Regeln für andere Aktionen, erlittenen Schaden und Unterbrechungseffekte werden später geprüft. Kein zusätzlicher Faith-Bonus. Eine Skalierung mit Waffen- oder Charakter-M-Angriff ist noch nicht festgelegt. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Instantly activates a 12-second aura field with a 4-meter radius that moves with the healer. Self-healing occurs at seconds 1, 3, 5, 7, 9 and 11. Allies within the field receive 30 percent of the self-healing value at seconds 2, 4, 6, 8, 10 and 12; the caster does not receive these additional allied ticks. Self-healing per tick is 10 HP per learned skill level, reaching 100 at level 10. Allied healing per tick is 3 HP per learned skill level, reaching 30 per recipient at level 10. Full-duration totals: 60–600 HP for the healer and 18–180 per continuously present ally. Mana cost 21 at level 1, maximum 210 at level 10. Cooldown 73 seconds at level 1 and 46 seconds at level 10. Movement is allowed; an own attack or another active healing action cancels the whole field and all remaining ticks. The aura’s own healing ticks do not cancel it. Other actions, incoming damage and interruption effects remain to be reviewed. No additional Faith bonus. Weapon/character magical-attack scaling remains undefined. |
| dmgType (Altformat) | spell |
| dur | 12 |
| health | 10 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 108 |
| skillName_de | Strahlendes Aurafeld |
| skillpoints | 1 |
| areaSettings.center | caster |
| areaSettings.movesWithCaster | true |
| areaSettings.membership | whileInside |
| areaSettings.includeCaster | false |
| areaSettings.radiusMeters | 4 |
| castTimeSeconds | 0 |
| effects[0].key | radiant-aura-self-heal |
| effects[0].type | heal |
| effects[0].target | self |
| effects[0].value | 10 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 10 |
| effects[0].valueScaling.perLevel | 10 |
| effects[0].intervalSeconds | 2 |
| effects[0].firstTickAfterSeconds | 1 |
| effects[0].durationSeconds | 12 |
| effects[1].key | radiant-aura-allied-heal |
| effects[1].type | heal |
| effects[1].target | alliesInArea |
| effects[1].excludesCaster | true |
| effects[1].onlyWhileTargetInsideArea | true |
| effects[1].value | 3 |
| effects[1].unit | flat |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | 3 |
| effects[1].valueScaling.perLevel | 3 |
| effects[1].intervalSeconds | 2 |
| effects[1].firstTickAfterSeconds | 2 |
| effects[1].durationSeconds | 12 |
| effectsVersion | 1 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 21 |
| resourceCosts[0].scaling.perLevel | 21 |
| statScaling.health.type | linear |
| statScaling.health.base | 10 |
| statScaling.health.perLevel | 10 |
| sustainedActionSettings.allowsMovement | true |
| sustainedActionSettings.cancelsOnOwnAttack | true |
| sustainedActionSettings.cancelsOnOtherHealingAction | true |
| sustainedActionSettings.ignoresOwnHealingTicksForCancellation | true |
| sustainedActionSettings.otherActionCancellationStatus | pending |
| sustainedActionSettings.incomingDamageCancellationStatus | pending |
| cooldownScaling.type | linear |
| cooldownScaling.base | 73 |
| cooldownScaling.perLevel | -3 |
| manaPricing.category | heal |
| manaPricing.factor | 0,35 |
| manaPricing.basis | healingPerRecipient |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 10 |
| levelProgression.rules[0].rule.perLevel | 10 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | effects |
| levelProgression.rules[1].path[1] | 1 |
| levelProgression.rules[1].path[2] | valueScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 3 |
| levelProgression.rules[1].rule.perLevel | 3 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 21 |
| levelProgression.rules[2].rule.rule.perLevel | 21 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | health |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 10 |
| levelProgression.rules[3].rule.perLevel | 10 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | cooldownScaling |
| levelProgression.rules[4].rule.kind | bounded |
| levelProgression.rules[4].rule.min | 0,1 |
| levelProgression.rules[4].rule.rule.kind | linear |
| levelProgression.rules[4].rule.rule.base | 73 |
| levelProgression.rules[4].rule.rule.perLevel | -3 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | skill |

### 124: Wiederherstellung

Heilt ein einzelnes anvisiertes verbündetes Ziel über Zeit. 20 lernbare Stufen. Die bestehende kumulative Heilkurve wird fortgesetzt: Heilwert pro Tick = Stufe × (Stufe + 10), von 11 auf Stufe 1 bis 600 auf Stufe 20. Ein Tick je Sekunde, erster Tick nach einer Sekunde, kein Sofort-Tick. Dauer auf Stufen 1–14: 3 Sekunden; ab Stufe 15: 4 Sekunden. Auf Stufe 20 insgesamt 2400 HP. Mana-Kosten 12 auf Stufe 1, Stufenwerte 12, 25, 41, 59, 79, 101, 125, 151, 180, 210, 243, 277, 314, 353, 525, 582, 643, 706, 771, 840, maximal 840 auf Stufe 20. Castzeit 0,2 Sekunden. Cooldown 41 Sekunden minus 1 je weiterer Stufe, maximal gelernt 22 Sekunden. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Recovery |
| category | active |
| cd | 41 |
| charClass[0] | Healer |
| charClass[1] | Priest |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Heilt ein einzelnes anvisiertes verbündetes Ziel über Zeit. 20 lernbare Stufen. Die bestehende kumulative Heilkurve wird fortgesetzt: Heilwert pro Tick = Stufe × (Stufe + 10), von 11 auf Stufe 1 bis 600 auf Stufe 20. Ein Tick je Sekunde, erster Tick nach einer Sekunde, kein Sofort-Tick. Dauer auf Stufen 1–14: 3 Sekunden; ab Stufe 15: 4 Sekunden. Auf Stufe 20 insgesamt 2400 HP. Mana-Kosten 12 auf Stufe 1, Stufenwerte 12, 25, 41, 59, 79, 101, 125, 151, 180, 210, 243, 277, 314, 353, 525, 582, 643, 706, 771, 840, maximal 840 auf Stufe 20. Castzeit 0,2 Sekunden. Cooldown 41 Sekunden minus 1 je weiterer Stufe, maximal gelernt 22 Sekunden. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| description_eng | Single-target allied heal over time, 20 learnable levels. Extends the existing cumulative curve: heal per tick = level * (level + 10), from 11 at level 1 to 600 at level 20. One tick per second, first after one second, no instant tick. Duration 3 seconds at levels 1-14, 4 seconds from level 15 onward. Level 20 total healing 2400 HP, Mana cost 12 at level 1, maximum 840 at level 20.2 seconds, cooldown 22 seconds (41 minus 1 per additional level). |
| dmgType (Altformat) | spell |
| dur | 3 |
| health | 11 |
| maxSkillLv | 20 |
| maxUpgradeLv | 10 |
| nr | 124 |
| skillName_de | Wiederherstellung |
| skillpoints | 1 |
| statScaling.health.type | table |
| statScaling.health.values[0] | 11 |
| statScaling.health.values[1] | 24 |
| statScaling.health.values[2] | 39 |
| statScaling.health.values[3] | 56 |
| statScaling.health.values[4] | 75 |
| statScaling.health.values[5] | 96 |
| statScaling.health.values[6] | 119 |
| statScaling.health.values[7] | 144 |
| statScaling.health.values[8] | 171 |
| statScaling.health.values[9] | 200 |
| statScaling.health.values[10] | 231 |
| statScaling.health.values[11] | 264 |
| statScaling.health.values[12] | 299 |
| statScaling.health.values[13] | 336 |
| statScaling.health.values[14] | 375 |
| statScaling.health.values[15] | 416 |
| statScaling.health.values[16] | 459 |
| statScaling.health.values[17] | 504 |
| statScaling.health.values[18] | 551 |
| statScaling.health.values[19] | 600 |
| castTimeSeconds | 0,2 |
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
| durationScaling.values[9] | 3 |
| durationScaling.values[10] | 3 |
| durationScaling.values[11] | 3 |
| durationScaling.values[12] | 3 |
| durationScaling.values[13] | 3 |
| durationScaling.values[14] | 4 |
| durationScaling.values[15] | 4 |
| durationScaling.values[16] | 4 |
| durationScaling.values[17] | 4 |
| durationScaling.values[18] | 4 |
| durationScaling.values[19] | 4 |
| effects[0].key | recovery-periodic-heal |
| effects[0].type | heal |
| effects[0].target | allyOrCompanion |
| effects[0].value | 11 |
| effects[0].unit | flat |
| effects[0].valueScaling.type | table |
| effects[0].valueScaling.values[0] | 11 |
| effects[0].valueScaling.values[1] | 24 |
| effects[0].valueScaling.values[2] | 39 |
| effects[0].valueScaling.values[3] | 56 |
| effects[0].valueScaling.values[4] | 75 |
| effects[0].valueScaling.values[5] | 96 |
| effects[0].valueScaling.values[6] | 119 |
| effects[0].valueScaling.values[7] | 144 |
| effects[0].valueScaling.values[8] | 171 |
| effects[0].valueScaling.values[9] | 200 |
| effects[0].valueScaling.values[10] | 231 |
| effects[0].valueScaling.values[11] | 264 |
| effects[0].valueScaling.values[12] | 299 |
| effects[0].valueScaling.values[13] | 336 |
| effects[0].valueScaling.values[14] | 375 |
| effects[0].valueScaling.values[15] | 416 |
| effects[0].valueScaling.values[16] | 459 |
| effects[0].valueScaling.values[17] | 504 |
| effects[0].valueScaling.values[18] | 551 |
| effects[0].valueScaling.values[19] | 600 |
| effects[0].intervalSeconds | 1 |
| effects[0].firstTickAfterSeconds | 1 |
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
| effects[0].durationScaling.values[9] | 3 |
| effects[0].durationScaling.values[10] | 3 |
| effects[0].durationScaling.values[11] | 3 |
| effects[0].durationScaling.values[12] | 3 |
| effects[0].durationScaling.values[13] | 3 |
| effects[0].durationScaling.values[14] | 4 |
| effects[0].durationScaling.values[15] | 4 |
| effects[0].durationScaling.values[16] | 4 |
| effects[0].durationScaling.values[17] | 4 |
| effects[0].durationScaling.values[18] | 4 |
| effects[0].durationScaling.values[19] | 4 |
| effectsVersion | 1 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.values[0] | 12 |
| resourceCosts[0].scaling.values[1] | 25 |
| resourceCosts[0].scaling.values[2] | 41 |
| resourceCosts[0].scaling.values[3] | 59 |
| resourceCosts[0].scaling.values[4] | 79 |
| resourceCosts[0].scaling.values[5] | 101 |
| resourceCosts[0].scaling.values[6] | 125 |
| resourceCosts[0].scaling.values[7] | 151 |
| resourceCosts[0].scaling.values[8] | 180 |
| resourceCosts[0].scaling.values[9] | 210 |
| resourceCosts[0].scaling.values[10] | 243 |
| resourceCosts[0].scaling.values[11] | 277 |
| resourceCosts[0].scaling.values[12] | 314 |
| resourceCosts[0].scaling.values[13] | 353 |
| resourceCosts[0].scaling.values[14] | 525 |
| resourceCosts[0].scaling.values[15] | 582 |
| resourceCosts[0].scaling.values[16] | 643 |
| resourceCosts[0].scaling.values[17] | 706 |
| resourceCosts[0].scaling.values[18] | 771 |
| resourceCosts[0].scaling.values[19] | 840 |
| resourceCosts[0].scaling.base | 12 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 41 |
| cooldownScaling.perLevel | -1 |
| manaPricing.category | heal |
| manaPricing.factor | 0,35 |
| manaPricing.basis | healingPerRecipient |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | health |
| levelProgression.rules[0].rule.kind | polynomial |
| levelProgression.rules[0].rule.coefficients[0] | 11 |
| levelProgression.rules[0].rule.coefficients[1] | 12 |
| levelProgression.rules[0].rule.coefficients[2] | 1 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | thresholds |
| levelProgression.rules[1].rule.base | 3 |
| levelProgression.rules[1].rule.changes[0].level | 15 |
| levelProgression.rules[1].rule.changes[0].value | 4 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | polynomial |
| levelProgression.rules[2].rule.coefficients[0] | 11 |
| levelProgression.rules[2].rule.coefficients[1] | 12 |
| levelProgression.rules[2].rule.coefficients[2] | 1 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.rules[3].path[0] | effects |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | durationScaling |
| levelProgression.rules[3].rule.kind | thresholds |
| levelProgression.rules[3].rule.base | 3 |
| levelProgression.rules[3].rule.changes[0].level | 15 |
| levelProgression.rules[3].rule.changes[0].value | 4 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.rules[4].path[0] | resourceCosts |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | scaling |
| levelProgression.rules[4].rule.kind | outputCost |
| levelProgression.rules[4].rule.factor | 0,35 |
| levelProgression.rules[4].rule.basis | healing |
| levelProgression.rules[4].rule.minimum | 0 |
| levelProgression.rules[4].source | verifiedManaPricing |
| levelProgression.rules[5].path[0] | cooldownScaling |
| levelProgression.rules[5].rule.kind | bounded |
| levelProgression.rules[5].rule.min | 0,1 |
| levelProgression.rules[5].rule.rule.kind | linear |
| levelProgression.rules[5].rule.rule.base | 41 |
| levelProgression.rules[5].rule.rule.perLevel | -1 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
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

### 143: Immunität

Dauerhafter Attributanteil: je gelernter Stufe +0,5 Intelligenz, +0,5 Willenskraft; auf Stufe 10 insgesamt +5 Intelligenz, +5 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Je Stufe 1 % Chance, einen neu angewendeten Fluch abzuwehren, maximal 10 %. Direkte M-Abwehr: +6 auf Stufe 1, +4 je weiterer Stufe bis +42. Entfernt keine bestehenden Flüche; konkrete Flucharten noch offen.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Immunity |
| category | passive |
| charClass[0] | Healer |
| charClass[1] | Priest |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Dauerhafter Attributanteil: je gelernter Stufe +0,5 Intelligenz, +0,5 Willenskraft; auf Stufe 10 insgesamt +5 Intelligenz, +5 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Je Stufe 1 % Chance, einen neu angewendeten Fluch abzuwehren, maximal 10 %. Direkte M-Abwehr: +6 auf Stufe 1, +4 je weiterer Stufe bis +42. Entfernt keine bestehenden Flüche; konkrete Flucharten noch offen. |
| description_eng | Permanent attribute component: +0.5 Intelligence, +0.5 Wisdom per learned level; at level 10, +5 Intelligence, +5 Wisdom total. This component always applies independently of any triggered effects. Each level grants 1% chance to resist a newly applied curse, up to 10%. Direct magical defense starts at +6, adding 4 per additional level to +42. Does not remove existing curses; specific curse types remain pending. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| mdef | 6 |
| nr | 143 |
| skillName_de | Immunität |
| skillpoints | 1 |
| wis | 0,5 |
| effects[0].key | immunity-curse-resistance |
| effects[0].type | statusResistance |
| effects[0].target | self |
| effects[0].resistedStatus | curse |
| effects[0].resistanceCheck | onStatusApplication |
| effects[0].value | 0,01 |
| effects[0].unit | fraction |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 0,01 |
| effects[0].valueScaling.perLevel | 0,01 |
| effects[0].durationSeconds | 0 |
| effectsVersion | 1 |
| resourceCosts | [] |
| statScaling.mdef.type | linear |
| statScaling.mdef.base | 6 |
| statScaling.mdef.perLevel | 4 |
| statScaling.int.type | linear |
| statScaling.int.base | 0,5 |
| statScaling.int.perLevel | 0,5 |
| statScaling.wis.type | linear |
| statScaling.wis.base | 0,5 |
| statScaling.wis.perLevel | 0,5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | effects |
| levelProgression.rules[0].path[1] | 0 |
| levelProgression.rules[0].path[2] | valueScaling |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 0,01 |
| levelProgression.rules[0].rule.perLevel | 0,01 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | mdef |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 6 |
| levelProgression.rules[1].rule.perLevel | 4 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | int |
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
| int | 0,5 |

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

### 197: Aurora-Segen

Aurora-Segen vereint die bisherigen Angriffs-, Mentalitäts- und Verteidigungssegen. Je Stufe +2 Stärke, Vitalität, Intelligenz und Willenskraft sowie +2 direkte MP-Regeneration je Tick. Auf Stufe 10 jeweils +20 der vier Attribute und +20 MP-Regeneration je Tick. Keine direkten Boni auf P-Angriff, M-Angriff, P-Abwehr oder M-Abwehr. Die bisherigen separaten Segen werden nicht zusätzlich gestapelt. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten: 35 + 21 je weiterer Stufe.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Aurora's Blessing |
| category | active |
| cd | 60 |
| charClass[0] | Healer |
| charClass[1] | Priest |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Aurora-Segen vereint die bisherigen Angriffs-, Mentalitäts- und Verteidigungssegen. Je Stufe +2 Stärke, Vitalität, Intelligenz und Willenskraft sowie +2 direkte MP-Regeneration je Tick. Auf Stufe 10 jeweils +20 der vier Attribute und +20 MP-Regeneration je Tick. Keine direkten Boni auf P-Angriff, M-Angriff, P-Abwehr oder M-Abwehr. Die bisherigen separaten Segen werden nicht zusätzlich gestapelt. Dauer 30 Minuten, Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Mana-Kosten: 35 + 21 je weiterer Stufe. |
| description_eng | Combines the former Attack, Mentality and Defense blessings. Each level grants +2 Strength, Vitality, Intelligence and Wisdom and +2 direct Mana regeneration per tick. Level 10 grants +20 of each of those four attributes and +20 Mana regeneration per tick. No direct physical/magical attack or defense bonuses. Former separate blessings do not stack in addition. Duration 30 minutes, cooldown 60 seconds, cast time 0.3 seconds. Mana cost: 35 + 21 per additional level. |
| dmgType (Altformat) | buff |
| dur | 1.800 |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 197 |
| skillName_de | Aurora-Segen |
| skillpoints | 1 |
| str | 2 |
| statBonusUnits.str | flat |
| statBonusUnits.vita | flat |
| statBonusUnits.int | flat |
| statBonusUnits.wis | flat |
| statBonusUnits.manaRegen | flat |
| statScaling.str.type | linear |
| statScaling.str.base | 2 |
| statScaling.str.perLevel | 2 |
| statScaling.vita.type | linear |
| statScaling.vita.base | 2 |
| statScaling.vita.perLevel | 2 |
| statScaling.int.type | linear |
| statScaling.int.base | 2 |
| statScaling.int.perLevel | 2 |
| statScaling.wis.type | linear |
| statScaling.wis.base | 2 |
| statScaling.wis.perLevel | 2 |
| statScaling.manaRegen.type | linear |
| statScaling.manaRegen.base | 2 |
| statScaling.manaRegen.perLevel | 2 |
| int | 2 |
| manaRegen | 2 |
| vita | 2 |
| wis | 2 |
| castTimeSeconds | 0,3 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 35 |
| resourceCosts[0].scaling.perLevel | 21 |
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
| levelProgression.rules[1].rule.base | 2 |
| levelProgression.rules[1].rule.perLevel | 2 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | int |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 2 |
| levelProgression.rules[2].rule.perLevel | 2 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | wis |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 2 |
| levelProgression.rules[3].rule.perLevel | 2 |
| levelProgression.rules[3].source | storedFormula |
| levelProgression.rules[4].path[0] | statScaling |
| levelProgression.rules[4].path[1] | manaRegen |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 2 |
| levelProgression.rules[4].rule.perLevel | 2 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | resourceCosts |
| levelProgression.rules[5].path[1] | 0 |
| levelProgression.rules[5].path[2] | scaling |
| levelProgression.rules[5].rule.kind | bounded |
| levelProgression.rules[5].rule.min | 0 |
| levelProgression.rules[5].rule.rule.kind | linear |
| levelProgression.rules[5].rule.rule.base | 35 |
| levelProgression.rules[5].rule.rule.perLevel | 21 |
| levelProgression.rules[5].source | storedFormula |
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

### 206: Lunare Inkanation

Belebt einen verstorbenen Verbündeten wieder. Vier Skillstufen: Das Ziel wird mit 80/160/320/640 HP wiederbelebt; das Wiederbelebungsleben verdoppelt sich je weiterer Stufe. Das vorhandene Mana des Ziels bleibt erhalten; kein zusätzlicher Mana-Wiederherstellungsbonus. Aktivierungskosten für den Heiler: 120 Mana auf Stufe 1, +60 je weiterer Stufe, also 120/180/240/300 Mana. Castzeit 1 Sekunde, Animation ungefähr 1 Sekunde. Einmalige Wiederbelebung ohne anschließende Wirkungsdauer. Cooldown 100 Sekunden auf Stufe 1, −10 Sekunden je weiterer Stufe: 100/90/80/70 Sekunden.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Lunar Incantation |
| category | active |
| cd | 100 |
| charClass[0] | Healer |
| charClass[1] | Priest |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Belebt einen verstorbenen Verbündeten wieder. Vier Skillstufen: Das Ziel wird mit 80/160/320/640 HP wiederbelebt; das Wiederbelebungsleben verdoppelt sich je weiterer Stufe. Das vorhandene Mana des Ziels bleibt erhalten; kein zusätzlicher Mana-Wiederherstellungsbonus. Aktivierungskosten für den Heiler: 120 Mana auf Stufe 1, +60 je weiterer Stufe, also 120/180/240/300 Mana. Castzeit 1 Sekunde, Animation ungefähr 1 Sekunde. Einmalige Wiederbelebung ohne anschließende Wirkungsdauer. Cooldown 100 Sekunden auf Stufe 1, −10 Sekunden je weiterer Stufe: 100/90/80/70 Sekunden. |
| description_eng | Resurrects a dead ally. Four skill levels restore the target with 80/160/320/640 HP, doubling per additional level. The target retains its existing Mana; no additional Mana restoration bonus. Healer activation cost is 120 Mana at level 1 plus 60 per additional level: 120/180/240/300 Mana. Cast time 1 second, animation approximately 1 second. One resurrection with no lingering effect duration. Cooldown starts at 100 seconds and decreases by 10 seconds per additional level: 100/90/80/70 seconds. |
| dmgType (Altformat) | spell |
| health | 80 |
| maxSkillLv | 4 |
| maxUpgradeLv | 10 |
| nr | 206 |
| skillName_de | Lunare Inkanation |
| skillpoints | 1 |
| animationDurationSeconds | 1 |
| animationTimingStatus | provisional |
| castTimeSeconds | 1 |
| durationScaling.type | table |
| durationScaling.values[0] | 0 |
| resurrectionSettings.requiresDeadAlly | true |
| resurrectionSettings.restoredHealth | 80 |
| resurrectionSettings.preservesTargetMana | true |
| resurrectionSettings.restoredHealthScaling.type | table |
| resurrectionSettings.restoredHealthScaling.base | 80 |
| resurrectionSettings.restoredHealthScaling.values[0] | 80 |
| resurrectionSettings.restoredHealthScaling.values[1] | 160 |
| resurrectionSettings.restoredHealthScaling.values[2] | 320 |
| resurrectionSettings.restoredHealthScaling.values[3] | 640 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | durationScaling |
| levelProgression.rules[0].rule.kind | constant |
| levelProgression.rules[0].rule.value | 0 |
| levelProgression.rules[0].source | verifiedExistingLevels |
| levelProgression.rules[1].path[0] | resurrectionSettings |
| levelProgression.rules[1].path[1] | restoredHealthScaling |
| levelProgression.rules[1].rule.kind | exponential |
| levelProgression.rules[1].rule.base | 80 |
| levelProgression.rules[1].rule.factor | 2 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 120 |
| levelProgression.rules[2].rule.rule.perLevel | 60 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | statScaling |
| levelProgression.rules[3].path[1] | health |
| levelProgression.rules[3].rule.kind | exponential |
| levelProgression.rules[3].rule.base | 80 |
| levelProgression.rules[3].rule.factor | 2 |
| levelProgression.rules[3].source | verifiedExistingLevels |
| levelProgression.rules[4].path[0] | cooldownScaling |
| levelProgression.rules[4].rule.kind | bounded |
| levelProgression.rules[4].rule.min | 0,1 |
| levelProgression.rules[4].rule.rule.kind | linear |
| levelProgression.rules[4].rule.rule.base | 100 |
| levelProgression.rules[4].rule.rule.perLevel | -10 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | skill |
| mana (Aktivierungskosten, kein Bonus) | 120 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 120 |
| resourceCosts[0].scaling.perLevel | 60 |
| statScaling.health.type | table |
| statScaling.health.base | 80 |
| statScaling.health.values[0] | 80 |
| statScaling.health.values[1] | 160 |
| statScaling.health.values[2] | 320 |
| statScaling.health.values[3] | 640 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 100 |
| cooldownScaling.perLevel | -10 |

### 207: Himmlische Aufopferung

Sofortige Notfallheilung mit einer lernbaren Stufe, ausschließlich für Heiler/Priester. Opfert 90 Prozent des maximalen Manas; dieses Mana muss zur Aktivierung vorhanden sein und wird tatsächlich bezahlt. Zusätzlich werden 10 Prozent des maximalen Lebens geopfert. Beide Ressourcenpreise müssen zur Aktivierung bezahlbar sein; der Lebenspreis darf den Anwender nicht töten. Jedes andere eigene Gruppenmitglied innerhalb von 10 Metern Radius um den Heiler zum Zeitpunkt der sofortigen Heilung erhält einzeln dieselbe Heilung: 500 HP plus 1,5 HP je tatsächlich für diese Anwendung geopfertem Manapunkt. Die Heilmenge wird nicht unter den Empfängern aufgeteilt; der Anwender selbst wird nicht geheilt. Beispiel: Bei 3000 Max-Mana werden 2700 Mana und zusätzlich 10 Prozent Max-Leben geopfert, jedes andere Gruppenmitglied erhält 4550 HP vor Begrenzung durch fehlendes Leben. Keine garantierte vollständige Heilung und keine fortlaufenden Heilticks. Cooldown 900 Sekunden (15 Minuten), Castzeit 0 Sekunden; die Heilung erfolgt sofort. Die vorläufige Animation von ungefähr 2 Sekunden verzögert die Wirkung nicht; ob sie weitere Aktionen blockiert, ist noch offen. Rundung von Mana-/Heilwerten wird später zentral festgelegt.

| Feld | Gespeicherter Wert |
| --- | --- |
| skillName_eng | Heavenly Sacrifice |
| category | active |
| cd | 900 |
| charClass[0] | Healer |
| charClass[1] | Priest |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Sofortige Notfallheilung mit einer lernbaren Stufe, ausschließlich für Heiler/Priester. Opfert 90 Prozent des maximalen Manas; dieses Mana muss zur Aktivierung vorhanden sein und wird tatsächlich bezahlt. Zusätzlich werden 10 Prozent des maximalen Lebens geopfert. Beide Ressourcenpreise müssen zur Aktivierung bezahlbar sein; der Lebenspreis darf den Anwender nicht töten. Jedes andere eigene Gruppenmitglied innerhalb von 10 Metern Radius um den Heiler zum Zeitpunkt der sofortigen Heilung erhält einzeln dieselbe Heilung: 500 HP plus 1,5 HP je tatsächlich für diese Anwendung geopfertem Manapunkt. Die Heilmenge wird nicht unter den Empfängern aufgeteilt; der Anwender selbst wird nicht geheilt. Beispiel: Bei 3000 Max-Mana werden 2700 Mana und zusätzlich 10 Prozent Max-Leben geopfert, jedes andere Gruppenmitglied erhält 4550 HP vor Begrenzung durch fehlendes Leben. Keine garantierte vollständige Heilung und keine fortlaufenden Heilticks. Cooldown 900 Sekunden (15 Minuten), Castzeit 0 Sekunden; die Heilung erfolgt sofort. Die vorläufige Animation von ungefähr 2 Sekunden verzögert die Wirkung nicht; ob sie weitere Aktionen blockiert, ist noch offen. Rundung von Mana-/Heilwerten wird später zentral festgelegt. |
| description_eng | Instant emergency group heal with one learnable level, for Healer/Priest only. Costs 90 percent of maximum Mana, which must be available and actually paid. Also sacrifices 10 percent of maximum health. Both resource costs must be affordable; the health price cannot kill the caster. Each other own group member within a 10-meter radius of the caster at the instant healing resolves receives the same full healing: 500 HP plus 1.5 HP per Mana point actually sacrificed for this activation. Healing is not divided among recipients; the caster is excluded. Example: 3000 maximum Mana costs 2700 Mana plus 10 percent of maximum health and heals each other group member for 4550 HP before missing-health limits. No guaranteed full heal or ongoing heal ticks. Cooldown 900 seconds (15 minutes), cast time zero; healing resolves instantly. Provisional approximately 2-second animation does not delay healing; whether it blocks other actions remains pending. Mana/healing rounding will be defined centrally later. |
| dmgType (Altformat) | spell |
| maxSkillLv | 1 |
| maxUpgradeLv | 10 |
| nr | 207 |
| skillName_de | Himmlische Aufopferung |
| skillpoints | 1 |
| animationDurationSeconds | 2 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | fraction |
| resourceCosts[0].scaling.type | fixed |
| resourceCosts[0].scaling.base | 0,9 |
| resourceCosts[1].resource | health |
| resourceCosts[1].reference | maxHealth |
| resourceCosts[1].unit | fraction |
| resourceCosts[1].scaling.type | fixed |
| resourceCosts[1].scaling.base | 0,1 |
| levelProgression.version | 1 |
| levelProgression.rules | [] |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | skill |
| effects[0].key | heavenly-sacrifice-group-heal |
| effects[0].type | heal |
| effects[0].target | ownGroup |
| effects[0].recipientGroup | ownGroup |
| effects[0].excludesCaster | true |
| effects[0].distribution | fullAmountToEachRecipient |
| effects[0].value | 500 |
| effects[0].unit | flat |
| effects[0].healingFromSpentMana.multiplier | 1,5 |
| effects[0].durationSeconds | 0 |
| effects[0].radiusMeters | 10 |
| effects[0].areaCenter | caster |
| effectsVersion | 1 |

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

### 239: Frostschauer

Erzeugt eisigen Regen um das anvisierte Ziel in 5 Metern Radius. Jeder Tick trifft höchstens 3 Gegner. Kein zusätzlicher Initialtreffer; erster Tick nach 1,5 Sekunden, danach alle 1,5 Sekunden. Feldlaufzeit 4 Sekunden auf Stufe 1, gleichmäßig steigend bis 8 Sekunden auf Stufe 10. Magischer Skill-Grundschaden je Tick und getroffenem Gegner 32 auf Stufe 1, gleichmäßig steigend bis 271 auf Stufe 10. Auf Maximalstufe Ticks bei 1,5 / 3 / 4,5 / 6 / 7,5 Sekunden, insgesamt 1355 Skill-Grundschaden je durchgehend getroffenem Ziel. Jeder Tick addiert zum Skill-Grundschaden den aktuellen M-Angriff des Anwenders. Bewegungstempo des getroffenen Gegners sinkt um 1 Prozent auf Stufe 1, je weiterer Stufe um 1 Prozentpunkt bis 10 Prozent. Die Verlangsamung hält nach jedem Treffer 3 Sekunden; erneute Treffer frischen nur die Dauer auf. Mana-Kosten 26 auf Stufe 1, Stufenwerte 26, 47, 102, 134, 166, 264, 306, 349, 489, 542, maximal 542 auf Stufe 10. Castzeit 0,4 Sekunden. Cooldown 53 Sekunden auf Stufe 1 und 44 Sekunden auf Stufe 10. Auswahl der bis zu drei Ziele je Tick und Mitbewegung des Feldes bleiben offen. Keine Sammelpunkte. Aktuelle Mana-Gruppe: finisher (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

| Feld | Gespeicherter Wert |
| --- | --- |
| activationRequirements.targetHealthBelowFractionScaling.values | [] |
| tetherSettings.worldAnchorKinds | [] |
| collectedPointScaling.thresholds | [] |
| collectedPointScaling.durationSecondsByTier | [] |
| collectedPointScaling.baseDamageBonusFractionByTier | [] |
| statScaling.matk.type | linear |
| statScaling.matk.base | 32 |
| statScaling.matk.perLevel | 26,556 |
| castTimeSeconds | 0,4 |
| attackExecution.hitCountScaling.values | [] |
| attackExecution.damageMultiplierScaling.values | [] |
| attackExecution.armorIgnoreFractionByLevel | [] |
| attackArea.centerTracking | pending |
| attackArea.maxTargets | 3 |
| attackArea.shape | circle |
| attackArea.center | selectedTarget |
| attackArea.radiusMeters | 5 |
| attackArea.geometryStatus | defined |
| attackArea.target | enemiesInArea |
| attackArea.evaluation | perHit |
| movement.distanceScaling.values | [] |
| movement.hopDirections | [] |
| durationScaling.type | linear |
| durationScaling.base | 4 |
| durationScaling.perLevel | 0,444 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 53 |
| cooldownScaling.perLevel | -1 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.values[0] | 26 |
| resourceCosts[0].scaling.values[1] | 47 |
| resourceCosts[0].scaling.values[2] | 102 |
| resourceCosts[0].scaling.values[3] | 134 |
| resourceCosts[0].scaling.values[4] | 166 |
| resourceCosts[0].scaling.values[5] | 264 |
| resourceCosts[0].scaling.values[6] | 306 |
| resourceCosts[0].scaling.values[7] | 349 |
| resourceCosts[0].scaling.values[8] | 489 |
| resourceCosts[0].scaling.values[9] | 542 |
| resourceCosts[0].scaling.base | 26 |
| effectsVersion | 1 |
| effects[0].targetCreatureTypes | [] |
| effects[0].damageSchool | ice |
| effects[0].requiredActiveSkillNumbers | [] |
| effects[0].firstTickAfterSeconds | 1,5 |
| effects[0].disablesEffects | [] |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 32 |
| effects[0].valueScaling.perLevel | 26,556 |
| effects[0].durationScaling.type | linear |
| effects[0].durationScaling.base | 4 |
| effects[0].durationScaling.perLevel | 0,444 |
| effects[0].type | periodicDamage |
| effects[0].target | enemiesInArea |
| effects[0].allowedRaces | [] |
| effects[0].value | 32 |
| effects[0].unit | flat |
| effects[0].damageTypes[0] | magical |
| effects[0].intervalSeconds | 1,5 |
| effects[0].durationSeconds | 4 |
| effects[0].key | ice-rain-periodic-damage |
| effects[0].addsCasterMagicalAttack | true |
| effects[0].periodicDamageKind | areaAttack |
| effects[1].key | frost-shower-movement-slow |
| effects[1].type | statModifier |
| effects[1].target | enemy |
| effects[1].stat | movementSpeed |
| effects[1].value | -0,01 |
| effects[1].unit | fraction |
| effects[1].valueAtMaxLevel | -0,1 |
| effects[1].progressionStatus | defined |
| effects[1].durationSeconds | 3 |
| effects[1].applicationTrigger | ownSkillHit |
| effects[1].targetSkillNumber | 239 |
| effects[1].maxStacksPerTarget | 1 |
| effects[1].reapplicationPolicy | refreshDuration |
| effects[1].valueScaling.type | linear |
| effects[1].valueScaling.base | -0,01 |
| effects[1].valueScaling.perLevel | -0,01 |
| burstUsage.usesPerBurstScaling.values | [] |
| burstUsage.afterBurstCooldownScaling.values | [] |
| burstUsage.belowTargetHealthFractionByLevel | [] |
| burstUsage.usesBelowThresholdByLevel | [] |
| triggerCondition.chancePerCheckScaling.values | [] |
| triggerCondition.chancePerCheck | null |
| triggerCondition.healthThresholds | [] |
| allowedRaces | [] |
| isClassCore | false |
| nr | 239 |
| skillName_eng | Frost Shower |
| skillName_de | Frostschauer |
| charClass[0] | Healer |
| charClass[1] | Priest |
| currentSkillLv | 0 |
| maxSkillLv | 10 |
| currentUpgradeLv | 0 |
| maxUpgradeLv | 10 |
| category | active |
| description_eng | Creates icy rain within a 5-meter radius around the selected target. Each tick hits at most 3 enemies. No additional initial hit; first tick at 1.5 seconds, then every 1.5 seconds. Field duration starts at 4 seconds and increases evenly to 8 seconds at level 10. Magical skill base damage per tick per enemy starts at 32 and increases evenly to 271 at level 10. At maximum level ticks occur at 1.5 / 3 / 4.5 / 6 / 7.5 seconds, totaling 1355 skill base damage per continuously hit target. Each tick adds the caster’s current magical attack to skill base damage. Each hit slows movement by 1 percent at level 1, plus 1 percentage point per additional level to 10 percent. Slow lasts 3 seconds after each hit; subsequent hits refresh duration only. Mana cost 26 at level 1, maximum 542 at level 10. Cast time 0.4 seconds. Cooldown 53 seconds at level 1 and 44 seconds at level 10. Target selection per tick and field tracking remain pending. No collected points. |
| description_de | Erzeugt eisigen Regen um das anvisierte Ziel in 5 Metern Radius. Jeder Tick trifft höchstens 3 Gegner. Kein zusätzlicher Initialtreffer; erster Tick nach 1,5 Sekunden, danach alle 1,5 Sekunden. Feldlaufzeit 4 Sekunden auf Stufe 1, gleichmäßig steigend bis 8 Sekunden auf Stufe 10. Magischer Skill-Grundschaden je Tick und getroffenem Gegner 32 auf Stufe 1, gleichmäßig steigend bis 271 auf Stufe 10. Auf Maximalstufe Ticks bei 1,5 / 3 / 4,5 / 6 / 7,5 Sekunden, insgesamt 1355 Skill-Grundschaden je durchgehend getroffenem Ziel. Jeder Tick addiert zum Skill-Grundschaden den aktuellen M-Angriff des Anwenders. Bewegungstempo des getroffenen Gegners sinkt um 1 Prozent auf Stufe 1, je weiterer Stufe um 1 Prozentpunkt bis 10 Prozent. Die Verlangsamung hält nach jedem Treffer 3 Sekunden; erneute Treffer frischen nur die Dauer auf. Mana-Kosten 26 auf Stufe 1, Stufenwerte 26, 47, 102, 134, 166, 264, 306, 349, 489, 542, maximal 542 auf Stufe 10. Castzeit 0,4 Sekunden. Cooldown 53 Sekunden auf Stufe 1 und 44 Sekunden auf Stufe 10. Auswahl der bis zu drei Ziele je Tick und Mitbewegung des Feldes bleiben offen. Keine Sammelpunkte. Aktuelle Mana-Gruppe: finisher (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis). |
| dmgType (Altformat) | spell |
| skillpoints | 1 |
| matk | 32 |
| dur | 4 |
| cd | 53 |
| manaPricing.category | finisher |
| manaPricing.factor | 0,4 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | matk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 32 |
| levelProgression.rules[0].rule.perLevel | 26,556 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 4 |
| levelProgression.rules[1].rule.perLevel | 0,444 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | cooldownScaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0,1 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 53 |
| levelProgression.rules[2].rule.rule.perLevel | -1 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | resourceCosts |
| levelProgression.rules[3].path[1] | 0 |
| levelProgression.rules[3].path[2] | scaling |
| levelProgression.rules[3].rule.kind | outputCost |
| levelProgression.rules[3].rule.factor | 0,4 |
| levelProgression.rules[3].rule.basis | damage |
| levelProgression.rules[3].rule.minimum | 0 |
| levelProgression.rules[3].source | verifiedManaPricing |
| levelProgression.rules[4].path[0] | effects |
| levelProgression.rules[4].path[1] | 0 |
| levelProgression.rules[4].path[2] | valueScaling |
| levelProgression.rules[4].rule.kind | linear |
| levelProgression.rules[4].rule.base | 32 |
| levelProgression.rules[4].rule.perLevel | 26,556 |
| levelProgression.rules[4].source | storedFormula |
| levelProgression.rules[5].path[0] | effects |
| levelProgression.rules[5].path[1] | 0 |
| levelProgression.rules[5].path[2] | durationScaling |
| levelProgression.rules[5].rule.kind | linear |
| levelProgression.rules[5].rule.base | 4 |
| levelProgression.rules[5].rule.perLevel | 0,444 |
| levelProgression.rules[5].source | storedFormula |
| levelProgression.rules[6].path[0] | effects |
| levelProgression.rules[6].path[1] | 1 |
| levelProgression.rules[6].path[2] | valueScaling |
| levelProgression.rules[6].rule.kind | linear |
| levelProgression.rules[6].rule.base | -0,01 |
| levelProgression.rules[6].rule.perLevel | -0,01 |
| levelProgression.rules[6].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | magical |
| type | skill |

### 240: Permafrost

Sofort umschaltbarer Eigenbuff mit drei Stufen und ohne feste Laufzeit. Bleibt aktiv, bis er manuell ausgeschaltet wird oder das Mana für den nächsten Verbrauchstick nicht reicht. Bei jedem Mana-Regenerationstick kostet er auf Stufe 1/2/3 jeweils 13/21/29 Mana; zusätzlich einmalige Aktivierungskosten 50/63/76 Mana auf Stufe 1/2/3. Eiszauber haben bei aktivem Buff 2/4/6 Sekunden weniger Cooldown. Zusätzlich steigt die Einfrierchance von Eisangriffen auf allen drei Stufen um einen Prozentpunkt; Gefrierbrand erreicht damit auf Maximalstufe 11 statt 10 Prozent. Keine zusätzlichen Einfrierwürfe oder eigene Einfrierdauer. Castzeit fest 0,1 Sekunden. Beim Abschalten enden die Boni und der laufende Verbrauch. Umschalt-Cooldown 0 Sekunden. Mindest-Cooldown von Eiszaubern und Einfluss auf bereits laufende Cooldowns bleiben offen. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 76 auf Stufe 3, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| activationRequirements.targetHealthBelowFractionScaling.values | [] |
| tetherSettings.worldAnchorKinds | [] |
| collectedPointScaling.thresholds | [] |
| collectedPointScaling.durationSecondsByTier | [] |
| collectedPointScaling.baseDamageBonusFractionByTier | [] |
| castTimeSeconds | 0,1 |
| attackExecution.hitCountScaling.values | [] |
| attackExecution.damageMultiplierScaling.values | [] |
| attackExecution.armorIgnoreFractionByLevel | [] |
| movement.distanceScaling.values | [] |
| movement.hopDirections | [] |
| durationScaling.values | [] |
| cooldownScaling.values | [] |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| effectsVersion | 1 |
| effects[0].targetCreatureTypes | [] |
| effects[0].damageSchool | ice |
| effects[0].requiredActiveSkillNumbers | [] |
| effects[0].disablesEffects | [] |
| effects[0].valueScaling.type | linear |
| effects[0].valueScaling.base | 2 |
| effects[0].valueScaling.perLevel | 2 |
| effects[0].valueScaling.values | [] |
| effects[0].durationScaling.values | [] |
| effects[0].type | cooldownReduction |
| effects[0].target | self |
| effects[0].allowedRaces | [] |
| effects[0].value | 2 |
| effects[0].unit | flat |
| effects[0].appliesTo | allSkills |
| effects[0].damageTypes | [] |
| effects[0].durationSeconds | 0 |
| effects[0].key | permafrost-ice-cooldown |
| effects[1].targetCreatureTypes | [] |
| effects[1].damageSchool | ice |
| effects[1].requiredActiveSkillNumbers | [] |
| effects[1].disablesEffects | [] |
| effects[1].valueScaling.values | [] |
| effects[1].durationScaling.values | [] |
| effects[1].type | procChanceBonus |
| effects[1].controlKind | freeze |
| effects[1].target | self |
| effects[1].allowedRaces | [] |
| effects[1].value | 0,01 |
| effects[1].unit | fraction |
| effects[1].damageTypes | [] |
| effects[1].durationSeconds | 0 |
| effects[1].key | permafrost-freeze-chance |
| effects[2].targetCreatureTypes | [] |
| effects[2].requiredActiveSkillNumbers | [] |
| effects[2].intervalSource | manaRegenerationTick |
| effects[2].disablesEffects | [] |
| effects[2].valueScaling.type | table |
| effects[2].valueScaling.values[0] | 13 |
| effects[2].valueScaling.values[1] | 21 |
| effects[2].valueScaling.values[2] | 29 |
| effects[2].durationScaling.values | [] |
| effects[2].type | resourceDrain |
| effects[2].target | self |
| effects[2].allowedRaces | [] |
| effects[2].value | 13 |
| effects[2].unit | flat |
| effects[2].resource | mana |
| effects[2].damageTypes | [] |
| effects[2].durationSeconds | 0 |
| effects[2].key | permafrost-mana-drain |
| activation | toggle |
| toggleSettings.durationMode | whileEnabled |
| toggleSettings.onInsufficientResource | deactivate |
| burstUsage.usesPerBurstScaling.values | [] |
| burstUsage.afterBurstCooldownScaling.values | [] |
| burstUsage.belowTargetHealthFractionByLevel | [] |
| burstUsage.usesBelowThresholdByLevel | [] |
| triggerCondition.chancePerCheckScaling.values | [] |
| triggerCondition.chancePerCheck | null |
| triggerCondition.healthThresholds | [] |
| allowedRaces | [] |
| isClassCore | false |
| nr | 240 |
| skillName_eng | Permafrost |
| skillName_de | Permafrost |
| charClass[0] | Healer |
| charClass[1] | Priest |
| currentSkillLv | 0 |
| maxSkillLv | 3 |
| currentUpgradeLv | 0 |
| maxUpgradeLv | 10 |
| category | active |
| description_eng | Instant-toggle self buff with three levels and no fixed duration. Remains enabled until manually switched off or Mana is insufficient for the next drain tick. Costs 13/21/29 Mana per Mana regeneration tick at levels 1/2/3, plus upfront activation costs of 50/63/76 Mana at levels 1/2/3. Reduces ice spell cooldowns by 2/4/6 seconds while enabled. Adds one percentage point to ice-attack freeze chance at every level, raising maximum Frostburn chance from 10 to 11 percent. No separate freeze rolls or independent freeze duration. Fixed cast time 0.1 seconds. Benefits and drain end on deactivation. Toggle cooldown is zero seconds. Minimum ice-spell cooldown and handling of already running cooldowns remain pending. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 76 at level 3, before discounts. Ongoing Mana drain is calculated separately. |
| description_de | Sofort umschaltbarer Eigenbuff mit drei Stufen und ohne feste Laufzeit. Bleibt aktiv, bis er manuell ausgeschaltet wird oder das Mana für den nächsten Verbrauchstick nicht reicht. Bei jedem Mana-Regenerationstick kostet er auf Stufe 1/2/3 jeweils 13/21/29 Mana; zusätzlich einmalige Aktivierungskosten 50/63/76 Mana auf Stufe 1/2/3. Eiszauber haben bei aktivem Buff 2/4/6 Sekunden weniger Cooldown. Zusätzlich steigt die Einfrierchance von Eisangriffen auf allen drei Stufen um einen Prozentpunkt; Gefrierbrand erreicht damit auf Maximalstufe 11 statt 10 Prozent. Keine zusätzlichen Einfrierwürfe oder eigene Einfrierdauer. Castzeit fest 0,1 Sekunden. Beim Abschalten enden die Boni und der laufende Verbrauch. Umschalt-Cooldown 0 Sekunden. Mindest-Cooldown von Eiszaubern und Einfluss auf bereits laufende Cooldowns bleiben offen. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 76 auf Stufe 3, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| dmgType (Altformat) | selfbuff |
| skillpoints | 1 |
| cd | 0 |
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
| levelProgression.rules[1].rule.base | 2 |
| levelProgression.rules[1].rule.perLevel | 2 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | effects |
| levelProgression.rules[2].path[1] | 2 |
| levelProgression.rules[2].path[2] | valueScaling |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 13 |
| levelProgression.rules[2].rule.perLevel | 8 |
| levelProgression.rules[2].source | verifiedExistingLevels |
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

### 242: Assimilation

Eigenbuff für 600 Sekunden (10 Minuten). Erhöht das maximale Mana auf Stufe 1 um 200 und je weiterer Stufe um 25, auf Stufe 5 insgesamt um 300. Zusätzlich +5 direkte MP-Regeneration je gelerntem Skilllevel, auf Stufe 5 +25 pro Mana-Regenerationstick. Dies ist ein Max-Mana-Bonus, keine sofortige Mana-Wiederherstellung. Kostet 50 Mana auf Stufe 1 und +13 je weiterer Stufe, auf Stufe 5 102. Cooldown 60 Sekunden, Castzeit fest 0,1 Sekunden. Erneute Anwendung erneuert die Laufzeit, ohne die Boni mit sich selbst zu stapeln. Regenerationstick-Intervall und Umgang mit aktuellem Mana bei Max-Mana-Änderungen werden zentral festgelegt. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 102 auf Stufe 5, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

| Feld | Gespeicherter Wert |
| --- | --- |
| soulGenerationSettings.maximumUniqueEnemiesScaling.values | [] |
| soulStorageSettings.capacityScaling.values | [] |
| activationRequirements.targetHealthBelowFractionScaling.values | [] |
| tetherSettings.worldAnchorKinds | [] |
| collectedPointScaling.thresholds | [] |
| collectedPointScaling.durationSecondsByTier | [] |
| collectedPointScaling.baseDamageBonusFractionByTier | [] |
| statScaling.mana.type | linear |
| statScaling.mana.base | 200 |
| statScaling.mana.perLevel | 25 |
| statScaling.manaRegen.type | linear |
| statScaling.manaRegen.base | 5 |
| statScaling.manaRegen.perLevel | 5 |
| castTimeSeconds | 0,1 |
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
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| burstUsage.usesPerBurstScaling.values | [] |
| burstUsage.afterBurstCooldownScaling.values | [] |
| burstUsage.belowTargetHealthFractionByLevel | [] |
| burstUsage.usesBelowThresholdByLevel | [] |
| triggerCondition.chancePerCheckScaling.values | [] |
| triggerCondition.chancePerCheck | null |
| triggerCondition.healthThresholds | [] |
| allowedRaces | [] |
| isClassCore | false |
| nr | 242 |
| skillName_eng | Assimilation |
| skillName_de | Assimilation |
| charClass[0] | Healer |
| charClass[1] | Priest |
| currentSkillLv | 0 |
| maxSkillLv | 5 |
| currentUpgradeLv | 0 |
| maxUpgradeLv | 10 |
| category | active |
| description_eng | Self buff lasting 600 seconds (10 minutes). Increases maximum Mana by 200 at level 1 and 25 per additional level, reaching 300 at level 5. Also grants +5 direct Mana regeneration per learned level, reaching +25 per Mana regeneration tick. This increases maximum Mana, not instant Mana restoration. Costs 50 Mana plus 13 per additional level, reaching 102. Cooldown 60 seconds, Fixed cast time 0.1 seconds. Reapplying refreshes duration without stacking the bonuses with themselves. Tick interval and current-Mana handling when maximum Mana changes are configured centrally. Fixed cast time of 0.1 seconds at every level, unaffected by attack or cast speed. Animation duration is separate. Activation cost: 50 Mana at level 1 plus 13 per additional level, reaching 102 at level 5, before discounts. Ongoing Mana drain is calculated separately. |
| description_de | Eigenbuff für 600 Sekunden (10 Minuten). Erhöht das maximale Mana auf Stufe 1 um 200 und je weiterer Stufe um 25, auf Stufe 5 insgesamt um 300. Zusätzlich +5 direkte MP-Regeneration je gelerntem Skilllevel, auf Stufe 5 +25 pro Mana-Regenerationstick. Dies ist ein Max-Mana-Bonus, keine sofortige Mana-Wiederherstellung. Kostet 50 Mana auf Stufe 1 und +13 je weiterer Stufe, auf Stufe 5 102. Cooldown 60 Sekunden, Castzeit fest 0,1 Sekunden. Erneute Anwendung erneuert die Laufzeit, ohne die Boni mit sich selbst zu stapeln. Regenerationstick-Intervall und Umgang mit aktuellem Mana bei Max-Mana-Änderungen werden zentral festgelegt. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 102 auf Stufe 5, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. |
| dmgType (Altformat) | selfbuff |
| skillpoints | 1 |
| cd | 60 |
| dur | 600 |
| mana (Aktivierungskosten, kein Bonus) | 50 |
| manaRegen | 5 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | mana |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 200 |
| levelProgression.rules[0].rule.perLevel | 25 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | statScaling |
| levelProgression.rules[1].path[1] | manaRegen |
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 5 |
| levelProgression.rules[1].rule.perLevel | 5 |
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

## Gemeinsame Blöcke

[Kreaturenskills](../shared-creature-skills.md) und [Trainingsskills](../shared-training-skills.md) werden einmal gemeinsam geprüft. Die normale Lerngrenze für Bindung und Zucht ist bereits 1. Die zweite Kreaturen-Spezialklasse und ihre Lerngrenzen sind noch zu bestätigen.

## Reihenfolge

Diese Klassenrunde beginnt jetzt. Bereits bestätigte gemeinsame Skills sind mit aktuellen Werten enthalten. Klassenspezifische Wirkungen, Kosten und Skalierungen werden noch geprüft.

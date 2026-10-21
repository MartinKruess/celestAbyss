# Abenteurer: Werte und Skillprüfung

**32 Skills, 280 Skillpunkte.** Jede gelernte Stufe kostet einen Punkt, einschließlich Stufe 1. Wilde Bindung hat eine Stufe mit den bisherigen Maximalwerten (+20 % P-Angriff und jeweils +10 % P-/M-Verteidigung des Abenteurers für das Pet bei vollem Vertrauen). Kontrolle hat maximal zwei Stufen: eine gleichzeitig kontrollierbare Kreatur je gelernter Stufe, also maximal zwei beim Abenteurer und seiner Weiterentwicklung. Alle anderen Klassen bleiben bei Kontrolle Stufe 1 und einer Kreatur.

Einteilung: `type` bezeichnet Skill, Passive, Selbstbuff oder Buff; `damageType` bezeichnet physisch, magisch oder gemischt. Bewegung ist ein selbstgerichteter Buff. `dmgType` wird nur noch als Altformat für bestehende Werkzeuge mitgeführt.

**32 unterschiedliche zugeordnete Skills: 18 aktive und 14 passive.** Die Passiven enthalten auch automatisch ausgelöste Procs. Die Kreaturenskills sind separat nach aktiver und passiver Nutzung aufgeteilt.

| Art | Anzahl | Skills |
| --- | ---: | --- |
| Angriffe | 5 | Sprungschlag, Wirbelnde Klinge, Kreuzhieb, Rudelangriff, Blutender Schnitt |
| Eigenbuffs | 2 | Scharfer Instinkte, Macht der Wildnis |
| Gruppen-/Begleiterbuffs | 3 | Verstärkung des Körpers, Erweckung der Leidenschaft, Macht des Begleiters |
| Heilung | 2 | Erste Hilfe, Lebenstransfer |
| Bewegung | 3 | Ausweichrolle, Dash, Doppelsprung |
| Aktive Kreaturenskills | 3 | Tamen, Beschwören, Zurückrufen |
| Übrige Passive einschließlich Procs | 11 | Adaption, Erweiterung des Körpers, Körperbeherrschung, Überlebenswille, Ausdauertraining, Rüstungstraining, Durchhalten, Waffentraining, Breitschwert-Training, Wilde Bindung, Beharrlichkeit |
| Passive Kreaturenskills | 3 | Bindung, Kontrolle, Zucht |

Verstärkung des Körpers und Erweckung der Leidenschaft sind Gruppenbuffs; Macht des Begleiters wirkt ausschließlich auf Gruppenbegleiter. Zwei Eigenbuffs: Scharfer Instinkte und Macht der Wildnis. Für die Ehre ist nicht mehr zugeordnet. Drei Bewegungsfähigkeiten: Ausweichrolle, Dash und Doppelsprung. Durchhalten gewährt dauerhaft maximal +8 Stärke und +5 Vitalität; kein Proc und keine direkten Abwehrboni. Diese Änderung verschiebt keine aktive/passive Gesamtzahl.

## Bereits geklärter Stand

| Skill | Festgelegte Werte | Was noch fehlt |
| --- | --- | --- |
| Erweiterung des Körpers | Permanenter passiver Bonus mit zehn Stufen. Stärke, Vitalität und Willenskraft erhalten jeweils folgende Boni auf Stufe 1 bis 10: 1 / 1,5 / 2 / 2,5 / 3 / 3,5 / 4 / 4,5 / 5 / 10. Alle bisherigen Attributboni sind auf jeder Stufe halbiert. Keine Aktivierungskosten, Castzeit oder Cooldown. | Aktueller Datenbankstand |
| Waffentraining | Permanentes allgemeines Waffentraining mit 20 Stufen für alle Klassen. Je gelernter Stufe +1 physischer und +1 magischer Angriff, maximal jeweils +20 auf Stufe 20. Keine Angriffsgeschwindigkeit, Aktivierungskosten, Castzeit oder Cooldown. | Aktueller Datenbankstand |
| Ausdauertraining | Permanentes Ausdauertraining mit 20 Stufen für alle Klassen. Je gelerntem Skilllevel +1 Vitalität und +1 Willenskraft, auf Stufe 20 jeweils +20. Keine direkten Boni auf physische oder magische Verteidigung; die regulären Attributumrechnungen bleiben wirksam. Keine Aktivierungskosten, Castzeit oder Cooldown. | Aktueller Datenbankstand |
| Rüstungstraining | Permanentes Rüstungstraining mit zehn Stufen für alle Klassen. Je gelernter Stufe +3 physische und +6 magische Verteidigung, maximal +30 P-Abwehr und +60 M-Abwehr. Keine Vitalitätsboni, Aktivierungskosten, Castzeit oder Cooldown. | Aktueller Datenbankstand |

Adrenalin, Beben und Rotier Schlag sind dem Abenteurer nicht mehr zugeordnet. Breitschwert-Training ersetzt das bisherige Schwerttraining: zehn Stufen mit 3 +0,5 Stärke bis 7,5; kein Geschick. Die Detailtabellen zeigen den aktuellen Datenbankstand.

## Charakterwerte

Die notierten Änderungen an anderen Rüstungen und Waffen wurden nicht übernommen. Basiswachstum: je weiterem Level +1 Vita, Stärke, Intelligenz und Wisdom. Vorläufiger Angriffsfaktor 1,8.

### Basis ohne Ausrüstung

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Leben | 172 | 442 | 742 | 1.042 | 1.342 | 1.642 | 1.942 |
| Mana | 131 | 401 | 701 | 1.001 | 1.301 | 1.601 | 1.901 |
| P-Angriff | 8 | 24,2 | 42,2 | 60,2 | 78,2 | 96,2 | 114,2 |
| M-Angriff | 6 | 22,2 | 40,2 | 58,2 | 76,2 | 94,2 | 112,2 |
| P-Defense | 7 | 25 | 45 | 65 | 85 | 105 | 125 |
| M-Defense | 9 | 27 | 47 | 67 | 87 | 107 | 127 |

### Mit Rüstung und Zweihandschwert

| Wert | Level 1 | Level 10 | Level 20 | Level 30 | Level 40 | Level 50 | Level 60 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Rang | R1 | R1 | R2 | R3 | R4 | R5 | R6 |
| Leben | 672 | 942 | 1.567 | 2.192 | 2.842 | 3.492 | 4.292 |
| Mana | 516 | 786 | 1.336 | 1.951 | 2.576 | 3.201 | 3.851 |
| P-Angriff | 24 | 40,2 | 73,8 | 119,2 | 182,2 | 270,2 | 398,2 |
| M-Angriff | 6 | 22,2 | 40,2 | 58,2 | 76,2 | 94,2 | 112,2 |
| P-Defense | 88 | 106 | 187 | 302 | 448 | 602 | 777 |
| M-Defense | 66 | 84 | 144 | 230 | 345 | 471 | 577 |

Attack Speed und Movement Speed starten mit Faktor 1; ihre Ausrüstungswirkung bleibt vorerst ausgenommen. Schmuck, Steine, Passive, aktive Buffs und Begleiter sind nicht eingerechnet.

## Regeneration

| Einstellung | Stand |
| --- | --- |
| Grundregeneration Mana | 25 pro Tick |
| Grundregeneration HP | 12 pro Tick |
| Tick-Intervall | MP alle 3 Sekunden; HP im bisherigen Simulator alle 2 Sekunden |
| Wisdom zu Mana-Regeneration | 0,9 Mana pro Punkt und 3-Sekunden-Tick, gespeichert |
| Prozentuale Regeneration | Nur über konkret bestätigte Skills oder Gegenstände |
| Kampfregeln und Verzögerung nach Schaden | Offen |

## Skillübersicht

Arbeitsübersicht der aktuellen Datenbankwerte. Bereits bestätigte Festlegungen wurden synchronisiert; offene Angaben bleiben offen. Boni sind keine endgültigen Schadenswerte eines Treffers. Die 5 zugeordneten Angriffe sind derzeit physisch.

| DB-Nr | Skill | Art | Max. Level | Grundwirkung / Werte auf Level 1 | Levelskalierung / Maximalwerte | Mana-Kosten | Cooldown s | Dauer s | Cast Time s | Noch offen / Stand |
| ---: | --- | --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| 5 | Adaption | Passiv | 20 | Vita +0,5<br>Wisdom +0,5<br>Mana-Regeneration +0,5 | Vita: +0,5 je weiterer Stufe; maximal +10<br>Wisdom: +0,5 je weiterer Stufe; maximal +10<br>Mana-Regeneration: +0,5 je weiterer Stufe; maximal +10<br>healthRegen: +0,5 je weiterer Stufe; maximal +10 | Keine aktive Nutzung | Entfällt | Permanent | Entfällt | Lernvoraussetzungen prüfen |
| 14 | Ausweichrolle | Bewegung | 2 | Ausweichrolle | Noch nicht vollständig gespeichert | mana: 0<br>stamina: 15 % / 10 % | 4 bis 2 | 1 | 0 | Kosten und Cast Time; Levelskalierung |
| 21 | Dash | Bewegung | 10 | Dash / schnelle Bewegung<br>Reichweite 1 m | Gestufte Reichweite, Dauer, Cooldown und Kosten; vollständige Leveltabelle unten | mana: 0<br>stamina: 50 % / 45 % / 40 % / 40 % / 40 % / 40 % / 40 % / 40 % / 40 % / 20 % | 6 bis 5 bis 4 bis 4 bis 4 bis 3 bis 3 bis 3 bis 3 bis 3 | 1 bis 1 bis 1 bis 0,75 bis 0,75 bis 0,75 bis 0,75 bis 0,5 bis 0,5 bis 0,5 | Offen | Kosten und Cast Time; Levelskalierung |
| 25 | Doppelsprung | Bewegung | 10 | Zusätzlicher Sprung<br>Sprunghöhe 1,5 m (vorläufig) | Höhe 1,5 bis 2 m; Kosten, Cooldown und Dauer linear über neun Steigerungen (vorläufig) | mana: 0<br>stamina: 60 % bis 25 % | 8 bis 4 | 2,5 bis 2 | Offen | Kosten und Cast Time; Levelskalierung |
| 41 | Erste Hilfe | Heilung | 10 | Sofortige Eigenheilung um 50 HP; kein M-Angriff<br>heal: 50 (self); Dauer 0 s | +25 HP je weiterer Stufe; maximal 275 HP | mana: 18 bis 99 | 35 bis 26 | Sofort | 0.2 | Levelskalierung; Eigenheilung und Skalierung geklärt |
| 45 | Erweiterung des Körpers | Permanenter passiver Bonus mit zehn Stufen. Stärke, Vitalität und Willenskraft erhalten jeweils folgende Boni auf Stufe 1 bis 10: 1 / 1,5 / 2 / 2,5 / 3 / 3,5 / 4 / 4,5 / 5 / 10. Alle bisherigen Attributboni sind auf jeder Stufe halbiert. Keine Aktivierungskosten, Castzeit oder Cooldown. | Aktueller Datenbankstand |
| 67 | Körperbeherrschung | Passiv | 10 | Dexterity +1<br>Agility +0,5<br>resourceCostReduction: 1 % (self); Dauer 0 s | Dexterity: +1 je weiterer Stufe; maximal +10<br>Agility: +0,5 je weiterer Stufe; maximal +5 | Keine aktive Nutzung | Entfällt | Permanent | Entfällt | Lernvoraussetzungen prüfen |
| 75 | Verstärkung des Körpers | Gruppen-/Begleiterbuff | 10 | Stärke +1<br>Vita +1<br>Ziele: selbst, Gruppe und Begleiter | Stärke: +1 je weiterer Stufe; maximal +10<br>Vita: +1 je weiterer Stufe; maximal +10 | mana: 47 bis 254 | 60 | 600 | 0.2 | Lernvoraussetzungen prüfen |
| 106 | Sprungschlag | Angriff | 10 | P-Angriff +391<br>Kreis, 2 m Radius um Spieler; Gegner im Bereich | P-Angriff: +135 je weiterer Stufe; maximal +1.606 | mana: 98 bis 404 | 45 bis 36 | Kein anhaltender Effekt | 0 | Lernvoraussetzungen prüfen |
| 114 | Überlebenswille | Passiv | 5 | Stärke +3<br>P-Defense +30<br>M-Defense +30<br>Eigener Angriff: unter 30 % HP 5 %, unter 20 % 10 %, unter 10 % 30 % Proc-Chance | Stärke: +1 je weiterer Stufe; maximal +7<br>P-Defense: +6 je weiterer Stufe; maximal +54<br>M-Defense: +6 je weiterer Stufe; maximal +54 | Keine aktive Nutzung | 30 | 12 | Entfällt | Lernvoraussetzungen prüfen |
| 126 | Wirbelnde Klinge | Angriff | 10 | P-Angriff +277<br>5 Treffer; Angriffswert gilt je Treffer<br>Bis 3 m vor Spieler; Bereichsbreite offen | P-Angriff: +35 je weiterer Stufe; maximal +592<br>Maximal 592 je Treffer, zusammen 2.960 Grundwert | mana: 346 bis 742 | 75 bis 57 | 0,8 bis 1 (Ausführung) | 0.1 | Trefferzeitpunkte; Animation vorläufig; Bereichsbreite; Bewegung während Ausführung; Schurken-Zuordnung prüfen |
| 133 | Tamen | Kreaturen | 3 | Zähmversuch; passendes Item erforderlich; Grunderfolg 50 % | Grunderfolg 50 / 65 / 80 %; Cast Time 3 / 2,5 / 2 s; Mana und Cooldown siehe Spalten | mana: 100 bis 150 | 60 bis 40 | Keine anschließende Wirkung | 3 bis 2 | Gemeinsamer Kreaturenblock; Levelskalierung; Kreaturen-Gegenwert; Itemverbrauch; Lerngrenze normal 1, Abenteurer 3; zweiter Spezialist offen |
| 134 | Bindung | Kreaturen | 3 | Bindung stärkt Spieler und Kreatur; Zahlen offen<br>Stärke: 10 (companion); Dauer 0 s<br>Vita: 10 (companion); Dauer 0 s<br>Intelligenz: 10 (companion); Dauer 0 s<br>Wisdom: 10 (companion); Dauer 0 s | Je +5 Stärke/Vita/Intelligenz/Wisdom pro weiterer Stufe, nur Kreatur; Level 1/2/3 jeweils +10/+15/+20 | Keine aktive Nutzung | Entfällt | Permanent | Entfällt | Gemeinsamer Kreaturenblock; Levelskalierung; Lerngrenze normal 1, Abenteurer 3; zweiter Spezialist offen |
| 135 | Kontrolle | Kreaturen | 2 | Kreaturenkontrolle verbessert Effizienz; Zahlen offen | Noch nicht vollständig gespeichert | Keine aktive Nutzung | Entfällt | Permanent | Entfällt | Gemeinsamer Kreaturenblock; Levelskalierung |
| 136 | Beschwören | Kreaturen | 1 | Kreatur beschwören | Eine Stufe | mana: 5 | 5 | Nicht gespeichert | 1 | Gemeinsamer Kreaturenblock |
| 137 | Zurückrufen | Kreaturen | 1 | Kreatur zurückrufen | Eine Stufe | mana: 5 | 5 | Nicht gespeichert | 0 | Gemeinsamer Kreaturenblock |
| 138 | Zucht | Kreaturen | 3 | Kreatur kann leveln; Spieler-EP plus 10 % auf Level 1<br>experienceBonus: 10 % (companion); Dauer 0 s | Kreaturen-EP: 110 / 120 / 130 % der Spieler-EP | Keine aktive Nutzung | Entfällt | Permanent | Entfällt | Gemeinsamer Kreaturenblock; Levelskalierung; Lerngrenze normal 1, Abenteurer 3; zweiter Spezialist offen |
| 139 | Ausdauertraining | Permanentes Ausdauertraining mit 20 Stufen für alle Klassen. Je gelerntem Skilllevel +1 Vitalität und +1 Willenskraft, auf Stufe 20 jeweils +20. Keine direkten Boni auf physische oder magische Verteidigung; die regulären Attributumrechnungen bleiben wirksam. Keine Aktivierungskosten, Castzeit oder Cooldown. | Aktueller Datenbankstand |
| 144 | Rüstungstraining | Permanentes Rüstungstraining mit zehn Stufen für alle Klassen. Je gelernter Stufe +3 physische und +6 magische Verteidigung, maximal +30 P-Abwehr und +60 M-Abwehr. Keine Vitalitätsboni, Aktivierungskosten, Castzeit oder Cooldown. | Aktueller Datenbankstand |
| 145 | Durchhalten | Passiv | 10 | Stärke +0,8<br>Vita +0,5 | Stärke: +0,8 je weiterer Stufe; maximal +8<br>Vita: +0,5 je weiterer Stufe; maximal +5 | Keine aktive Nutzung | Entfällt | Permanent | Entfällt | Lernvoraussetzungen prüfen |
| 147 | Erweckung der Leidenschaft | Gruppen-/Begleiterbuff | 5 | Dexterity +2<br>Agility +2 | Dexterity: +2 je weiterer Stufe; maximal +10<br>Agility: +2 je weiterer Stufe; maximal +10 | mana: 75 bis 175 | 60 | 600 | 0.2 | Lernvoraussetzungen prüfen |
| 148 | Scharfer Instinkte | Eigenbuff | 10 | Ambush +2<br>Attack Speed +0 % | Ambush: +1 je weiterer Stufe; maximal +11<br>Attack Speed: +0,111 % je weiterer Stufe; maximal +1 % | mana: 50 bis 167 | 60 | 300 | 0.1 | Lernvoraussetzungen prüfen |
| 149 | Macht der Wildnis | Eigenbuff | 3 | Stärke +3<br>P-Angriff +20 | Stärke: +1 je weiterer Stufe; maximal +5<br>P-Angriff: +10 je weiterer Stufe; maximal +40 | mana: 50 bis 76 | 60 | 1.200 bis 1.200 | 0.1 | Lernvoraussetzungen prüfen |
| 150 | Macht des Begleiters | Gruppen-/Begleiterbuff | 10 | Vita +2<br>Wisdom +2<br>Dexterity +2 | Dexterity: +2 je weiterer Stufe; maximal +20<br>Vita: +2 je weiterer Stufe; maximal +20<br>Wisdom: +2 je weiterer Stufe; maximal +20 | mana: 231 bis 645 | 60 | 600 | 0.2 | Lernvoraussetzungen prüfen |
| 201 | Waffentraining | Permanentes allgemeines Waffentraining mit 20 Stufen für alle Klassen. Je gelernter Stufe +1 physischer und +1 magischer Angriff, maximal jeweils +20 auf Stufe 20. Keine Angriffsgeschwindigkeit, Aktivierungskosten, Castzeit oder Cooldown. | Aktueller Datenbankstand |
| 245 | Breitschwert-Training | Passiv | 10 | Stärke +3 | Stärke: +1 je weiterer Stufe; maximal +12 | Keine aktive Nutzung | Entfällt | Permanent | Entfällt | Lernvoraussetzungen prüfen |
| 246 | Wilde Bindung | Passiv | 1 | Ab 100 % Pet-Vertrauen: Bonus aus aktuellen Spielerwerten; Spieler behält seine Werte | Angriff: 10 / 15 / 20 % des Spieler-P-Angriffs; P-/M-Abwehr jeweils 5 / 7,5 / 10 % | Keine aktive Nutzung | Entfällt | Permanent | Entfällt | Angriffszuordnung bei magischen Pets |
| 247 | Beharrlichkeit | Passiv | 5 | Nach erlittenem Crit: 25 % Proc-Chance; 15 s +10 P-Abwehr/+10 M-Abwehr/+5 Agilität; sofort 50 HP heilen | Je Stufe +10 P-Abwehr/+10 M-Abwehr/+5 Agilität; maximal +50/+50/+25. Heilung 50 +3 bis 62 HP | Keine aktive Nutzung | 48 bis 44 (intern) | 15 s | Entfällt | Lernvoraussetzungen prüfen |
| 248 | Kreuzhieb | Angriff | 10 | P-Angriff +135<br>2 Treffer; Grundwert gilt für gesamte Anwendung | Hieb 1: 27 +56 bis 531; Hieb 2: 108 +56 bis 612. Je Hieb zusätzlich aktueller P-Angriff | mana: 34 bis 286 | 43 bis 34 | Kein anhaltender Effekt | 0.1 | Trefferzeitpunkte; Animation vorläufig |
| 249 | Rudelangriff | Angriff | 20 | 273 P-Grundschaden + eigener P-Angriff + Angriffskraft von 0–2 beteiligten Pets; gemeinsame Schadensanzeige | +154 Grundschaden je weiterer Stufe bis 3.199; auch ohne Pet nutzbar | mana: 68 / 107 / 145 / 184 / 222 / 261 / 299 / 338 / 376 / 415 / 453 / 492 / 530 / 569 / 607 / 646 / 684 / 723 / 761 / 800 | 70 bis 51 | Nicht gespeichert | 0.4 | Reichweite, genaue Animation/Trefferzeiten, magische Pet-Beiträge |
| 250 | Lebenstransfer | Bewegung/Kreaturen | 20 | Vier unterbrechbare Heilimpulse für einen eigenen Begleiter; 0,8 s Cast; Kosten nur je erfolgtem Impuls | 20 Stufen: Heilung je Impuls 40 bis 400, +40 alle zwei Stufen; maximal 1600 Heilung für 1200 HP und 160 Mana. Abstand 0,5 s, ab Stufe 10 0,4 s, auf Stufe 20 0,3 s | Offen | 60 bis 22 | 2 bis 1,2 s Heilphase | 0.8 | Kosten und Cast Time; Levelskalierung; Wirkung gespeichert; Pet-Zielreichweite noch festzulegen |
| 251 | Blutender Schnitt | Angriff | 6 | Horizontaler Hieb: 117 P-Grundschaden + aktueller P-Angriff; Blutgeruch 12 s, kein Blutungs-/DoT-Schaden | +57 Grundschaden bis 402; Gruppenbegleiter gegen markiertes Ziel +0,5 Prozentpunkte je Stufe bis 3 %; keine Stapelung | mana: 29 bis 99 | 48 bis 47 bis 46 bis 44 bis 43 bis 42 | Kein anhaltender Effekt | 0.1 | Lernvoraussetzungen prüfen |

Fehlende Felder bedeuten nicht automatisch null oder kostenlos. P-/M-Werte bei Buffs und Passiven sind Boni, keine Angriffsschäden. Die Einordnung ist vorläufig. Dauer fehlt bei vielen Sofortfähigkeiten; dies ist nicht automatisch ein Fehler.

## Details je Skill

Die folgenden Tabellen enthalten alle gespeicherten Felder außer der technischen Mongo-ID. Verschachtelte Effekte, Skalierungen, Klassen und Kosten sind vollständig aufgeführt. Vorhandene Beschreibungen sind unverändert.

### 5: Adaption

| Gespeichertes Feld | Wert |
| --- | --- |
| skillName_eng | Adaptation |
| category | Human |
| charClass[0] | Witcher |
| charClass[1] | Herbalist |
| charClass[2] | Knife |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 14: Ausweichrolle

| Gespeichertes Feld | Wert |
| --- | --- |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 21: Dash

| Gespeichertes Feld | Wert |
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

#### Dash je Skilllevel

| Level | Cooldown s | Bewegungsdauer s | Reichweite m | Ausdauer | Mana |
| ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 6 | 1 | 1 | 0,5 | 0 |
| 2 | 5 | 1 | 1 | 0,45 | 0 |
| 3 | 4 | 1 | 1 | 0,4 | 0 |
| 4 | 4 | 0,75 | 1 | 0,4 | 0 |
| 5 | 4 | 0,75 | 1,5 | 0,4 | 0 |
| 6 | 3 | 0,75 | 1,5 | 0,4 | 0 |
| 7 | 3 | 0,75 | 2 | 0,4 | 0 |
| 8 | 3 | 0,5 | 2 | 0,4 | 0 |
| 9 | 3 | 0,5 | 2 | 0,4 | 0 |
| 10 | 3 | 0,5 | 2 | 0,2 | 0 |

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Cast Time bestätigen, Instant nicht automatisch annehmen
- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 25: Doppelsprung

| Gespeichertes Feld | Wert |
| --- | --- |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Cast Time bestätigen, Instant nicht automatisch annehmen
- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 41: Erste Hilfe

| Gespeichertes Feld | Wert |
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
| mana | 18 |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Eigenheilung vollständig festgelegt: 50 bis 275 HP, 20 bis 164 Mana, 35 bis 26 Sekunden Cooldown, 0,2 Sekunden Cast Time. Keine Skalierung mit Charakter-M-Angriff. Das frühere matk-Feld 25 war der Heilungszuwachs je weiterer Skillstufe und ist entfernt.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 45: Erweiterung des Körpers

| Gespeichertes Feld | Wert |
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
| skillName_de | Erweiterung des Körpers | Permanenter passiver Bonus mit zehn Stufen. Stärke, Vitalität und Willenskraft erhalten jeweils folgende Boni auf Stufe 1 bis 10: 1 / 1,5 / 2 / 2,5 / 3 / 3,5 / 4 / 4,5 / 5 / 10. Alle bisherigen Attributboni sind auf jeder Stufe halbiert. Keine Aktivierungskosten, Castzeit oder Cooldown. | Aktueller Datenbankstand |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Festgelegt und gespeichert: permanent passiv ohne Kosten oder Cooldown. Startboni +150 HP, +3 Vita, +2 Wisdom und +2 Agility. Bis Level 9 je weiterer Stufe +50 HP und je +1 Attributpunkt. Auf Level 10 werden ausschließlich die Level-9-Boni verdoppelt: +1.100 HP, +22 Vita, +20 Wisdom, +20 Agility.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 67: Körperbeherrschung

| Gespeichertes Feld | Wert |
| --- | --- |
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
| statBonusUnits | {} |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 75: Verstärkung des Körpers

| Gespeichertes Feld | Wert |
| --- | --- |
| skillName_eng | Body Reinforcement |
| category | active |
| cd | 60 |
| charClass[0] | Knife |
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
| mana | 47 |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 106: Sprungschlag

| Gespeichertes Feld | Wert |
| --- | --- |
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
| mana | 98 |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 114: Überlebenswille

| Gespeichertes Feld | Wert |
| --- | --- |
| skillName_eng | Will to Survive |
| category | passive |
| cd | 30 |
| charClass[0] | Knife |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 126: Wirbelnde Klinge

| Gespeichertes Feld | Wert |
| --- | --- |
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
| mana | 346 |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 145: Durchhalten

| Gespeichertes Feld | Wert |
| --- | --- |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 147: Erweckung der Leidenschaft

| Gespeichertes Feld | Wert |
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
| mana | 75 |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 148: Scharfer Instinkte

| Gespeichertes Feld | Wert |
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
| mana | 50 |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 149: Macht der Wildnis

| Gespeichertes Feld | Wert |
| --- | --- |
| skillName_eng | Power of the Wild |
| category | active |
| cd | 60 |
| charClass[0] | Shamane |
| charClass[1] | High Elves |
| charClass[2] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Abenteurer-Variante: P-Angriff 20/30/40 statt 30/45/60; Stärke unverändert 3/4/5. Dauer 1200 Sekunden, Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden. Mana 50/63/76 vor Rabatten. Der Schamane behält seine bisherigen Werte. |
| description_eng | Adventurer variant: physical attack 20/30/40 instead of 30/45/60; Strength remains 3/4/5. Duration 1200 seconds, cooldown 60 seconds, fixed 0.1-second cast. Mana 50/63/76 before discounts. Shaman keeps its existing values. |
| dmgType (Altformat) | selfbuff |
| dur | 1.200 |
| maxSkillLv | 3 |
| maxUpgradeLv | 10 |
| nr | 149 |
| patk | 20 |
| skillName_de | Macht der Wildnis |
| skillpoints | 1 |
| str | 3 |
| animationTimingStatus | provisional |
| castTimeSeconds | 0,1 |
| mana | 50 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 50 |
| resourceCosts[0].scaling.perLevel | 13 |
| statBonusTargets.str | self |
| statBonusTargets.patk | self |
| statScaling.str.type | linear |
| statScaling.str.base | 3 |
| statScaling.str.perLevel | 1 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 20 |
| statScaling.patk.perLevel | 10 |
| durationScaling.type | linear |
| durationScaling.base | 1.200 |
| durationScaling.perLevel | 0 |
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
| levelProgression.rules[1].rule.kind | linear |
| levelProgression.rules[1].rule.base | 3 |
| levelProgression.rules[1].rule.perLevel | 1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | statScaling |
| levelProgression.rules[2].path[1] | patk |
| levelProgression.rules[2].rule.kind | linear |
| levelProgression.rules[2].rule.base | 20 |
| levelProgression.rules[2].rule.perLevel | 10 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.rules[3].path[0] | durationScaling |
| levelProgression.rules[3].rule.kind | linear |
| levelProgression.rules[3].rule.base | 1.200 |
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
| classCombatOverrides.adventurer.patk | 20 |
| classCombatOverrides.adventurer.statScaling.str.type | linear |
| classCombatOverrides.adventurer.statScaling.str.base | 3 |
| classCombatOverrides.adventurer.statScaling.str.perLevel | 1 |
| classCombatOverrides.adventurer.statScaling.patk.type | linear |
| classCombatOverrides.adventurer.statScaling.patk.base | 20 |
| classCombatOverrides.adventurer.statScaling.patk.perLevel | 10 |
| classCombatOverrides.adventurer.levelProgression.version | 1 |
| classCombatOverrides.adventurer.levelProgression.rules[0].path[0] | resourceCosts |
| classCombatOverrides.adventurer.levelProgression.rules[0].path[1] | 0 |
| classCombatOverrides.adventurer.levelProgression.rules[0].path[2] | scaling |
| classCombatOverrides.adventurer.levelProgression.rules[0].rule.kind | bounded |
| classCombatOverrides.adventurer.levelProgression.rules[0].rule.min | 0 |
| classCombatOverrides.adventurer.levelProgression.rules[0].rule.rule.kind | linear |
| classCombatOverrides.adventurer.levelProgression.rules[0].rule.rule.base | 50 |
| classCombatOverrides.adventurer.levelProgression.rules[0].rule.rule.perLevel | 13 |
| classCombatOverrides.adventurer.levelProgression.rules[0].source | storedFormula |
| classCombatOverrides.adventurer.levelProgression.rules[1].path[0] | statScaling |
| classCombatOverrides.adventurer.levelProgression.rules[1].path[1] | str |
| classCombatOverrides.adventurer.levelProgression.rules[1].rule.kind | linear |
| classCombatOverrides.adventurer.levelProgression.rules[1].rule.base | 3 |
| classCombatOverrides.adventurer.levelProgression.rules[1].rule.perLevel | 1 |
| classCombatOverrides.adventurer.levelProgression.rules[1].source | storedFormula |
| classCombatOverrides.adventurer.levelProgression.rules[2].path[0] | statScaling |
| classCombatOverrides.adventurer.levelProgression.rules[2].path[1] | patk |
| classCombatOverrides.adventurer.levelProgression.rules[2].rule.kind | linear |
| classCombatOverrides.adventurer.levelProgression.rules[2].rule.base | 20 |
| classCombatOverrides.adventurer.levelProgression.rules[2].rule.perLevel | 10 |
| classCombatOverrides.adventurer.levelProgression.rules[2].source | storedFormula |
| classCombatOverrides.adventurer.levelProgression.rules[3].path[0] | durationScaling |
| classCombatOverrides.adventurer.levelProgression.rules[3].rule.kind | linear |
| classCombatOverrides.adventurer.levelProgression.rules[3].rule.base | 1.200 |
| classCombatOverrides.adventurer.levelProgression.rules[3].rule.perLevel | 0 |
| classCombatOverrides.adventurer.levelProgression.rules[3].source | storedFormula |
| classCombatOverrides.adventurer.levelProgression.extensionNeedsDefinition | [] |
| classCombatOverrides.adventurer.description_de | Abenteurer-Variante: P-Angriff 20/30/40 statt 30/45/60; Stärke unverändert 3/4/5. Dauer 1200 Sekunden, Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden. Mana 50/63/76 vor Rabatten. Der Schamane behält seine bisherigen Werte. |
| classCombatOverrides.adventurer.description_eng | Adventurer variant: physical attack 20/30/40 instead of 30/45/60; Strength remains 3/4/5. Duration 1200 seconds, cooldown 60 seconds, fixed 0.1-second cast. Mana 50/63/76 before discounts. Shaman keeps its existing values. |

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 150: Macht des Begleiters

| Gespeichertes Feld | Wert |
| --- | --- |
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
| mana | 231 |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 245: Breitschwert-Training

| Gespeichertes Feld | Wert |
| --- | --- |
| skillName_eng | Broadsword Training |
| category | passive |
| charClass[0] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| description_de | Permanentes Breitschwert-Training des Abenteurers für seine zweihändige Schwertwaffe. Zehn Stufen: +3 Stärke auf Stufe 1, +1 je weiterer Stufe, maximal +12 auf Stufe 10, entsprechend dem Zweihand-Axttraining. Kein Geschickbonus. Eigene Skilldefinition; Ritter und Tempelritter verwenden ihr separates Schwerttraining. Keine Aktivierungskosten, Castzeit oder Cooldown. |
| description_eng | Permanent Adventurer Broadsword Training for the two-handed sword. Ten levels: +3 Strength at level 1 plus 1 per additional level, reaching +12 at level 10, matching Two-handed Axe Training. No Dexterity bonus. Separate definition from Knight Sword Training. No activation costs, cast time or cooldown. |
| dmgType (Altformat) | passive |
| maxSkillLv | 10 |
| maxUpgradeLv | 10 |
| nr | 245 |
| skillName_de | Breitschwert-Training |
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

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 246: Wilde Bindung

| Gespeichertes Feld | Wert |
| --- | --- |
| charClass[0] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| maxUpgradeLv | 10 |
| skillpoints | 1 |
| nr | 246 |
| skillName_de | Wilde Bindung |
| skillName_eng | Wild Bond |
| category | passive |
| dmgType (Altformat) | passive |
| maxSkillLv | 1 |
| resourceCosts | [] |
| description_de | Permanente Passive mit einer einzigen Skillstufe. Bei 100 % Vertrauen erhält das jeweilige Pet zusätzlich 20 % der aktuellen physischen Angriffskraft sowie jeweils 10 % der aktuellen physischen und magischen Verteidigung des Abenteurers. Der Abenteurer behält alle Werte. Die einzige Stufe übernimmt die bisherigen Maximalwerte von Stufe 3 und kostet einen Skillpunkt. Die Verwendung des Angriffsbonus durch magische Pets bleibt offen; keine automatische Umwandlung festgelegt. |
| description_eng | Permanent passive with one learnable level. At 100% trust, the pet additionally gains 20% of the owner’s current physical attack and 10% of each current physical and magical defense. The owner retains all stats. The only level retains the former level-three maximum values and costs one skill point. Magical pet attack mapping remains pending. |
| companionBondSettings.requiredTrustFraction | 1 |
| companionBondSettings.usesCurrentOwnerStats | true |
| companionBondSettings.ownerRetainsStats | true |
| companionBondSettings.physicalAttackFractionByLevel[0] | 0,2 |
| companionBondSettings.physicalDefenseFractionByLevel[0] | 0,1 |
| companionBondSettings.magicalDefenseFractionByLevel[0] | 0,1 |
| companionBondSettings.magicalPetAttackMappingStatus | pending |
| levelProgression.version | 1 |
| levelProgression.rules | [] |
| levelProgression.extensionNeedsDefinition[0] | companionBondSettings.physicalAttackFractionByLevel |
| levelProgression.extensionNeedsDefinition[1] | companionBondSettings.physicalDefenseFractionByLevel |
| levelProgression.extensionNeedsDefinition[2] | companionBondSettings.magicalDefenseFractionByLevel |
| classificationVersion | 1 |
| type | passive |

Noch zu klären:

- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 247: Beharrlichkeit

| Gespeichertes Feld | Wert |
| --- | --- |
| charClass[0] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| maxUpgradeLv | 10 |
| skillpoints | 1 |
| nr | 247 |
| skillName_de | Beharrlichkeit |
| skillName_eng | Perseverance |
| category | passive |
| dmgType (Altformat) | passive |
| maxSkillLv | 5 |
| activation | automatic |
| resourceCosts | [] |
| description_de | Nach einem erlittenen kritischen Treffer: 25 % Chance auf 15 Sekunden Beharrlichkeit, sofern der interne Cooldown bereit ist. Je Skillstufe +10 P-Abwehr, +10 M-Abwehr und +5 Agilität; maximal +50/+50/+25. Sofortheilung 50 HP auf Stufe 1, +3 je weiterer Stufe bis 62. Interner Cooldown 48 Sekunden, je weiterer Stufe -1 bis 44. Kein permanenter Attributbonus. |
| description_eng | Taking a critical hit has a 25% chance to trigger a 15-second buff when its internal cooldown is ready. Each level grants 10 physical defense, 10 magical defense and 5 Agility. Immediate healing 50 +3 per additional level to 62. Internal cooldown 48 -1 per additional level to 44 seconds. |
| reactiveBuffSettings.trigger | receivedCriticalHit |
| reactiveBuffSettings.chance | 0,25 |
| reactiveBuffSettings.durationSeconds | 15 |
| reactiveBuffSettings.internalCooldownScaling.base | 48 |
| reactiveBuffSettings.internalCooldownScaling.perLevel | -1 |
| reactiveBuffSettings.bonusesPerLevel.pdef | 10 |
| reactiveBuffSettings.bonusesPerLevel.mdef | 10 |
| reactiveBuffSettings.bonusesPerLevel.agi | 5 |
| reactiveBuffSettings.immediateHealingScaling.base | 50 |
| reactiveBuffSettings.immediateHealingScaling.perLevel | 3 |
| levelProgression.version | 1 |
| levelProgression.rules | [] |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| type | passive |

Noch zu klären:

- Endgültige Levelskalierung noch nicht vollständig gespeichert
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 248: Kreuzhieb

| Gespeichertes Feld | Wert |
| --- | --- |
| charClass[0] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| maxUpgradeLv | 10 |
| skillpoints | 1 |
| nr | 248 |
| skillName_de | Kreuzhieb |
| skillName_eng | Cross Strike |
| category | active |
| dmgType (Altformat) | physical |
| maxSkillLv | 10 |
| castTimeSeconds | 0,1 |
| castTimeStatus | defined |
| animationDurationSeconds | 1,2 |
| animationTimingStatus | provisional |
| patk | 135 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 135 |
| statScaling.patk.perLevel | 112 |
| mana | 34 |
| description_de | Zwei aufeinanderfolgende physische Hiebe. Erster Hieb: 27 Grundschaden, +56 je weiterer Stufe bis 531. Zweiter Hieb: 108 Grundschaden, +56 je weiterer Stufe bis 612. Jeder Hieb addiert den aktuellen P-Angriff. Mana für die gesamte Anwendung: 34 +28 je weiterer Stufe bis 286 (25 % des gesamten Skill-Grundschadens, gerundet). Castzeit 0,1 Sekunden, anschließende Animation vorläufig etwa 1,2 Sekunden. Cooldown 43 Sekunden, -1 je weiterer Stufe bis 34 Sekunden. Genaue Trefferzeitpunkte noch offen. |
| description_eng | Two consecutive physical hits: first base 27 +56 per additional level to 531, second 108 +56 to 612. Each adds current physical attack. Total mana 34 +28 to 286. Cast 0.1 seconds, subsequent animation approximately 1.2 seconds. Cooldown 43 -1 per additional level to 34 seconds; precise hit times pending. |
| attackExecution.hitCount | 2 |
| attackExecution.damageValueScope | perApplication |
| attackExecution.hitTimingStatus | pending |
| attackExecution.physicalHitBaseScaling[0].base | 27 |
| attackExecution.physicalHitBaseScaling[0].perLevel | 56 |
| attackExecution.physicalHitBaseScaling[1].base | 108 |
| attackExecution.physicalHitBaseScaling[1].perLevel | 56 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 34 |
| resourceCosts[0].scaling.perLevel | 28 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| cd | 43 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 43 |
| cooldownScaling.perLevel | -1 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | patk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 135 |
| levelProgression.rules[0].rule.perLevel | 112 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | outputCost |
| levelProgression.rules[1].rule.factor | 0,25 |
| levelProgression.rules[1].rule.basis | damage |
| levelProgression.rules[1].rule.minimum | 0 |
| levelProgression.rules[1].source | verifiedManaPricing |
| levelProgression.rules[2].path[0] | cooldownScaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0,1 |
| levelProgression.rules[2].rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.base | 43 |
| levelProgression.rules[2].rule.rule.perLevel | -1 |
| levelProgression.rules[2].source | storedFormula |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 249: Rudelangriff

| Gespeichertes Feld | Wert |
| --- | --- |
| charClass[0] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| maxUpgradeLv | 10 |
| skillpoints | 1 |
| category | active |
| nr | 249 |
| skillName_de | Rudelangriff |
| skillName_eng | Pack Attack |
| dmgType (Altformat) | physical |
| maxSkillLv | 20 |
| patk | 273 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 273 |
| statScaling.patk.perLevel | 154 |
| description_de | Rudelangriff, 20 Stufen. Der Abenteurer springt zurück, gibt bis zu zwei verfügbaren Begleitern Zeit zur Positionierung und stürmt zum gemeinsamen Angriff vor. Der Rücksprung ist Animation und darf parallel zur Castzeit von 0,4 Sekunden laufen; keine zusätzliche festgelegte Animationssperre. Grundschaden 273 +154 je weiterer Stufe bis 3199, dazu einmal eigener aktueller P-Angriff und einmal die Angriffskraft jedes teilnehmenden Pets. Auch allein oder mit einem Pet nutzbar, eine gemeinsame Schadensanzeige. Cooldown 70 Sekunden, -1 je weiterer Stufe bis 51, beginnend nach Castende. Mana 25 % des Skill-Grundschadens, je Stufe auf ganze Mana gerundet: 68 bis 800; Spieler-/Pet-Angriff nicht Teil der Kostenbasis. Reichweite, genaue Animation/Trefferzeitpunkte und Verrechnung magischer Pet-Angriffe noch offen. |
| description_eng | 20 levels. Backstep, allow up to two companions to position, then charge. Backstep animation may overlap the 0.4-second cast; no additional specified animation lock. Base273 +154 per additional level to3199, plus current owner physical attack and each participating companion attack once. Usable solo. Cooldown70 -1 per additional level to51 after cast end. Mana is25% of skill base rounded per level:68 to800, excluding owner/companion attack. Range, exact animation/hit times and magical companion mapping pending. |
| packAttackSettings.maxCompanions | 2 |
| packAttackSettings.usableWithoutCompanions | true |
| packAttackSettings.usesCurrentOwnerPhysicalAttack | true |
| packAttackSettings.companionAttackFactor | 1 |
| packAttackSettings.combinedDamageDisplay | true |
| packAttackSettings.preparation | backstep, companion positioning, forward charge |
| packAttackSettings.preparationTimingStatus | pending |
| packAttackSettings.magicalCompanionDamageMappingStatus | pending |
| castTimeSeconds | 0,4 |
| castTimeStatus | defined |
| cd | 70 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 70 |
| cooldownScaling.perLevel | -1 |
| mana | 68 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | table |
| resourceCosts[0].scaling.base | 68 |
| resourceCosts[0].scaling.values[0] | 68 |
| resourceCosts[0].scaling.values[1] | 107 |
| resourceCosts[0].scaling.values[2] | 145 |
| resourceCosts[0].scaling.values[3] | 184 |
| resourceCosts[0].scaling.values[4] | 222 |
| resourceCosts[0].scaling.values[5] | 261 |
| resourceCosts[0].scaling.values[6] | 299 |
| resourceCosts[0].scaling.values[7] | 338 |
| resourceCosts[0].scaling.values[8] | 376 |
| resourceCosts[0].scaling.values[9] | 415 |
| resourceCosts[0].scaling.values[10] | 453 |
| resourceCosts[0].scaling.values[11] | 492 |
| resourceCosts[0].scaling.values[12] | 530 |
| resourceCosts[0].scaling.values[13] | 569 |
| resourceCosts[0].scaling.values[14] | 607 |
| resourceCosts[0].scaling.values[15] | 646 |
| resourceCosts[0].scaling.values[16] | 684 |
| resourceCosts[0].scaling.values[17] | 723 |
| resourceCosts[0].scaling.values[18] | 761 |
| resourceCosts[0].scaling.values[19] | 800 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | patk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 273 |
| levelProgression.rules[0].rule.perLevel | 154 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | cooldownScaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0,1 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 70 |
| levelProgression.rules[1].rule.rule.perLevel | -1 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | resourceCosts |
| levelProgression.rules[2].path[1] | 0 |
| levelProgression.rules[2].path[2] | scaling |
| levelProgression.rules[2].rule.kind | outputCost |
| levelProgression.rules[2].rule.factor | 0,25 |
| levelProgression.rules[2].rule.basis | damage |
| levelProgression.rules[2].rule.minimum | 0 |
| levelProgression.rules[2].source | verifiedManaPricing |
| levelProgression.extensionNeedsDefinition | [] |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 250: Lebenstransfer

| Gespeichertes Feld | Wert |
| --- | --- |
| charClass[0] | Abenteuer |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| maxUpgradeLv | 10 |
| skillpoints | 1 |
| category | active |
| nr | 250 |
| skillName_de | Lebenstransfer |
| skillName_eng | Life Transfer |
| dmgType (Altformat) | heal |
| maxSkillLv | 20 |
| castTimeSeconds | 0,8 |
| castTimeStatus | defined |
| animationDurationSeconds | 2 |
| animationTimingStatus | defined |
| cd | 60 |
| cooldownScaling.type | linear |
| cooldownScaling.base | 60 |
| cooldownScaling.perLevel | -2 |
| description_de | Lebenstransfer: 20 Stufen, 0,8 Sekunden Castzeit. Vier unterbrechbare Heilimpulse für einen ausgewählten eigenen Begleiter. Abstand 0,5 Sekunden auf Stufe 1–9, 0,4 auf Stufe 10–19, 0,3 auf Stufe 20; erster Impuls nach einem vollständigen Intervall. Übertragung damit 2 / 1,6 / 1,2 Sekunden. Heilung je Impuls steigt in ganzen Stufenpaaren: 40 HP auf Stufe 1–2, danach alle zwei Stufen +40 bis 400 auf Stufe 19–20. Pro tatsächlich ausgeführtem Impuls werden 75 % der Heilung als eigene HP und 10 % als Mana bezahlt. Maximal viermal 300 HP und 40 Mana für viermal 400 Heilung: 1200 eigene HP +160 Mana → 1600 Pet-Heilung. Keine Kosten vor einem Impuls; Abbruch durch Bewegung/Dash stoppt alle restlichen Impulse. Darf den Anwender nicht töten. Cooldown beginnt mit dem ersten Heilimpuls: 60 Sekunden, -2 je weiterer Stufe bis 22. Abbruch vor dem ersten Impuls kostet weder Ressourcen noch Cooldown. Die Heilphase ersetzt die bisher feste Zwei-Sekunden-Animation entsprechend der Skillstufe. |
| description_eng | 20 levels, fixed 0.8-second cast, four interruptible healing pulses. Intervals 0.5s at levels 1–9, 0.4s at 10–19, 0.3s at 20; first pulse after one full interval. Healing per pulse 40 at levels 1–2, increasing by 40 every two levels to 400 at 19–20. Each completed pulse costs 75% of its healing in caster health and 10% in mana. Maximum totals: 1200 health and 160 mana for 1600 companion healing. Movement cancels remaining pulses; cannot kill caster. Cooldown starts at first pulse: 60 -2 per additional level to 22 seconds. Cancellation before first pulse is free. |
| lifeTransferSettings.target | selectedOwnCompanion |
| lifeTransferSettings.interruptible | true |
| lifeTransferSettings.healingProgressionStatus | defined |
| lifeTransferSettings.impulseCountStatus | defined |
| lifeTransferSettings.costProgressionStatus | defined |
| lifeTransferSettings.impulseCount | 4 |
| lifeTransferSettings.intervalSecondsByLevel[0] | 0,5 |
| lifeTransferSettings.intervalSecondsByLevel[1] | 0,5 |
| lifeTransferSettings.intervalSecondsByLevel[2] | 0,5 |
| lifeTransferSettings.intervalSecondsByLevel[3] | 0,5 |
| lifeTransferSettings.intervalSecondsByLevel[4] | 0,5 |
| lifeTransferSettings.intervalSecondsByLevel[5] | 0,5 |
| lifeTransferSettings.intervalSecondsByLevel[6] | 0,5 |
| lifeTransferSettings.intervalSecondsByLevel[7] | 0,5 |
| lifeTransferSettings.intervalSecondsByLevel[8] | 0,5 |
| lifeTransferSettings.intervalSecondsByLevel[9] | 0,4 |
| lifeTransferSettings.intervalSecondsByLevel[10] | 0,4 |
| lifeTransferSettings.intervalSecondsByLevel[11] | 0,4 |
| lifeTransferSettings.intervalSecondsByLevel[12] | 0,4 |
| lifeTransferSettings.intervalSecondsByLevel[13] | 0,4 |
| lifeTransferSettings.intervalSecondsByLevel[14] | 0,4 |
| lifeTransferSettings.intervalSecondsByLevel[15] | 0,4 |
| lifeTransferSettings.intervalSecondsByLevel[16] | 0,4 |
| lifeTransferSettings.intervalSecondsByLevel[17] | 0,4 |
| lifeTransferSettings.intervalSecondsByLevel[18] | 0,4 |
| lifeTransferSettings.intervalSecondsByLevel[19] | 0,3 |
| lifeTransferSettings.healingPerImpulseByLevel[0] | 40 |
| lifeTransferSettings.healingPerImpulseByLevel[1] | 40 |
| lifeTransferSettings.healingPerImpulseByLevel[2] | 80 |
| lifeTransferSettings.healingPerImpulseByLevel[3] | 80 |
| lifeTransferSettings.healingPerImpulseByLevel[4] | 120 |
| lifeTransferSettings.healingPerImpulseByLevel[5] | 120 |
| lifeTransferSettings.healingPerImpulseByLevel[6] | 160 |
| lifeTransferSettings.healingPerImpulseByLevel[7] | 160 |
| lifeTransferSettings.healingPerImpulseByLevel[8] | 200 |
| lifeTransferSettings.healingPerImpulseByLevel[9] | 200 |
| lifeTransferSettings.healingPerImpulseByLevel[10] | 240 |
| lifeTransferSettings.healingPerImpulseByLevel[11] | 240 |
| lifeTransferSettings.healingPerImpulseByLevel[12] | 280 |
| lifeTransferSettings.healingPerImpulseByLevel[13] | 280 |
| lifeTransferSettings.healingPerImpulseByLevel[14] | 320 |
| lifeTransferSettings.healingPerImpulseByLevel[15] | 320 |
| lifeTransferSettings.healingPerImpulseByLevel[16] | 360 |
| lifeTransferSettings.healingPerImpulseByLevel[17] | 360 |
| lifeTransferSettings.healingPerImpulseByLevel[18] | 400 |
| lifeTransferSettings.healingPerImpulseByLevel[19] | 400 |
| lifeTransferSettings.healthCostPerImpulseByLevel[0] | 30 |
| lifeTransferSettings.healthCostPerImpulseByLevel[1] | 30 |
| lifeTransferSettings.healthCostPerImpulseByLevel[2] | 60 |
| lifeTransferSettings.healthCostPerImpulseByLevel[3] | 60 |
| lifeTransferSettings.healthCostPerImpulseByLevel[4] | 90 |
| lifeTransferSettings.healthCostPerImpulseByLevel[5] | 90 |
| lifeTransferSettings.healthCostPerImpulseByLevel[6] | 120 |
| lifeTransferSettings.healthCostPerImpulseByLevel[7] | 120 |
| lifeTransferSettings.healthCostPerImpulseByLevel[8] | 150 |
| lifeTransferSettings.healthCostPerImpulseByLevel[9] | 150 |
| lifeTransferSettings.healthCostPerImpulseByLevel[10] | 180 |
| lifeTransferSettings.healthCostPerImpulseByLevel[11] | 180 |
| lifeTransferSettings.healthCostPerImpulseByLevel[12] | 210 |
| lifeTransferSettings.healthCostPerImpulseByLevel[13] | 210 |
| lifeTransferSettings.healthCostPerImpulseByLevel[14] | 240 |
| lifeTransferSettings.healthCostPerImpulseByLevel[15] | 240 |
| lifeTransferSettings.healthCostPerImpulseByLevel[16] | 270 |
| lifeTransferSettings.healthCostPerImpulseByLevel[17] | 270 |
| lifeTransferSettings.healthCostPerImpulseByLevel[18] | 300 |
| lifeTransferSettings.healthCostPerImpulseByLevel[19] | 300 |
| lifeTransferSettings.manaCostPerImpulseByLevel[0] | 4 |
| lifeTransferSettings.manaCostPerImpulseByLevel[1] | 4 |
| lifeTransferSettings.manaCostPerImpulseByLevel[2] | 8 |
| lifeTransferSettings.manaCostPerImpulseByLevel[3] | 8 |
| lifeTransferSettings.manaCostPerImpulseByLevel[4] | 12 |
| lifeTransferSettings.manaCostPerImpulseByLevel[5] | 12 |
| lifeTransferSettings.manaCostPerImpulseByLevel[6] | 16 |
| lifeTransferSettings.manaCostPerImpulseByLevel[7] | 16 |
| lifeTransferSettings.manaCostPerImpulseByLevel[8] | 20 |
| lifeTransferSettings.manaCostPerImpulseByLevel[9] | 20 |
| lifeTransferSettings.manaCostPerImpulseByLevel[10] | 24 |
| lifeTransferSettings.manaCostPerImpulseByLevel[11] | 24 |
| lifeTransferSettings.manaCostPerImpulseByLevel[12] | 28 |
| lifeTransferSettings.manaCostPerImpulseByLevel[13] | 28 |
| lifeTransferSettings.manaCostPerImpulseByLevel[14] | 32 |
| lifeTransferSettings.manaCostPerImpulseByLevel[15] | 32 |
| lifeTransferSettings.manaCostPerImpulseByLevel[16] | 36 |
| lifeTransferSettings.manaCostPerImpulseByLevel[17] | 36 |
| lifeTransferSettings.manaCostPerImpulseByLevel[18] | 40 |
| lifeTransferSettings.manaCostPerImpulseByLevel[19] | 40 |
| lifeTransferSettings.paymentTiming | perCompletedImpulse |
| lifeTransferSettings.cooldownStartsOn | firstHealingImpulse |
| lifeTransferSettings.cancellationBeforeFirstImpulseIsFree | true |
| lifeTransferSettings.cannotKillCaster | true |
| lifeTransferSettings.cancelOnMovement | true |
| animationScalesWithAttackSpeed | false |
| durationScaling.type | table |
| durationScaling.values[0] | 2 |
| durationScaling.values[1] | 2 |
| durationScaling.values[2] | 2 |
| durationScaling.values[3] | 2 |
| durationScaling.values[4] | 2 |
| durationScaling.values[5] | 2 |
| durationScaling.values[6] | 2 |
| durationScaling.values[7] | 2 |
| durationScaling.values[8] | 2 |
| durationScaling.values[9] | 1,6 |
| durationScaling.values[10] | 1,6 |
| durationScaling.values[11] | 1,6 |
| durationScaling.values[12] | 1,6 |
| durationScaling.values[13] | 1,6 |
| durationScaling.values[14] | 1,6 |
| durationScaling.values[15] | 1,6 |
| durationScaling.values[16] | 1,6 |
| durationScaling.values[17] | 1,6 |
| durationScaling.values[18] | 1,6 |
| durationScaling.values[19] | 1,2 |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | cooldownScaling |
| levelProgression.rules[0].rule.kind | bounded |
| levelProgression.rules[0].rule.min | 0,1 |
| levelProgression.rules[0].rule.rule.kind | linear |
| levelProgression.rules[0].rule.rule.base | 60 |
| levelProgression.rules[0].rule.rule.perLevel | -2 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | durationScaling |
| levelProgression.rules[1].rule.kind | thresholds |
| levelProgression.rules[1].rule.base | 2 |
| levelProgression.rules[1].rule.changes[0].level | 10 |
| levelProgression.rules[1].rule.changes[0].value | 1,6 |
| levelProgression.rules[1].rule.changes[1].level | 20 |
| levelProgression.rules[1].rule.changes[1].value | 1,2 |
| levelProgression.rules[1].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition[0] | lifeTransferSettings.intervalSecondsByLevel |
| levelProgression.extensionNeedsDefinition[1] | lifeTransferSettings.healingPerImpulseByLevel |
| levelProgression.extensionNeedsDefinition[2] | lifeTransferSettings.healthCostPerImpulseByLevel |
| levelProgression.extensionNeedsDefinition[3] | lifeTransferSettings.manaCostPerImpulseByLevel |
| classificationVersion | 1 |
| type | skill |

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Aktivierungskosten bestätigen, fehlender Mana-Wert ist nicht automatisch 0
- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

### 251: Blutender Schnitt

| Gespeichertes Feld | Wert |
| --- | --- |
| nr | 251 |
| skillName_de | Blutender Schnitt |
| skillName_eng | Bleeding Cut |
| charClass[0] | Abenteuer |
| category | active |
| dmgType (Altformat) | physical |
| currentSkillLv | 0 |
| currentUpgradeLv | 0 |
| maxSkillLv | 6 |
| maxUpgradeLv | 10 |
| skillpoints | 1 |
| patk | 117 |
| statScaling.patk.type | linear |
| statScaling.patk.base | 117 |
| statScaling.patk.perLevel | 57 |
| mana | 29 |
| resourceCosts[0].resource | mana |
| resourceCosts[0].reference | maxMana |
| resourceCosts[0].unit | flat |
| resourceCosts[0].scaling.type | linear |
| resourceCosts[0].scaling.base | 29 |
| resourceCosts[0].scaling.perLevel | 14 |
| manaPricing.category | normal |
| manaPricing.factor | 0,25 |
| manaPricing.basis | skillBaseDamagePerTarget |
| manaPricing.usesCharacterAttack | false |
| manaPricing.version | 1 |
| castTimeSeconds | 0,1 |
| castTimeStatus | defined |
| animationDurationSeconds | 0 |
| animationTimingStatus | provisional |
| cd | 48 |
| cooldownScaling.type | table |
| cooldownScaling.values[0] | 48 |
| cooldownScaling.values[1] | 47 |
| cooldownScaling.values[2] | 46 |
| cooldownScaling.values[3] | 44 |
| cooldownScaling.values[4] | 43 |
| cooldownScaling.values[5] | 42 |
| description_de | Horizontaler physischer Schwerthieb: 117 Grundschaden, +57 je weiterer Stufe bis 402 auf Stufe 6, dazu einmal aktueller P-Angriff. Markiert das getroffene Ziel zwölf Sekunden mit Blutgeruch. Alle Begleiter der eigenen Gruppe einschließlich temporärer Beschwörungen verursachen gegen dieses Ziel 0,5 Prozentpunkte mehr Schaden je Skillstufe, maximal 3 %. Kein Blutungs- oder sonstiger periodischer Schaden. Mehrere Blutgeruch-Markierungen stapeln nicht; erneute Anwendung erneuert die Dauer. Mana 29 +14 bis 99 je Anwendung. Cast 0,1 Sekunden; Animation im vorläufigen Modell 0. Cooldown je Stufe 48/47/46/44/43/42 Sekunden. |
| description_eng | One horizontal physical sword hit: base 117 +57 per additional level to 402, plus current physical attack once. Marks the target with Blood Scent for 12 seconds; own group companions including temporary summons deal 0.5 percentage points more damage per level, maximum 3%, against this target. No bleeding or periodic damage. Does not stack; reapplication refreshes duration. Mana 29 +14 to99, cast0.1s, provisional animation0, cooldown48/47/46/44/43/42s. |
| companionVulnerabilitySettings.debuffName | Blutgeruch |
| companionVulnerabilitySettings.durationSeconds | 12 |
| companionVulnerabilitySettings.damageBonusFractionByLevel[0] | 0,005 |
| companionVulnerabilitySettings.damageBonusFractionByLevel[1] | 0,01 |
| companionVulnerabilitySettings.damageBonusFractionByLevel[2] | 0,015 |
| companionVulnerabilitySettings.damageBonusFractionByLevel[3] | 0,02 |
| companionVulnerabilitySettings.damageBonusFractionByLevel[4] | 0,025 |
| companionVulnerabilitySettings.damageBonusFractionByLevel[5] | 0,03 |
| companionVulnerabilitySettings.appliesTo | ownGroupCompanionDamageAgainstMarkedTarget |
| companionVulnerabilitySettings.includesTemporarySummons | true |
| companionVulnerabilitySettings.stacking | refreshDurationNoStack |
| companionVulnerabilitySettings.dealsPeriodicDamage | false |
| levelProgression.version | 1 |
| levelProgression.rules[0].path[0] | statScaling |
| levelProgression.rules[0].path[1] | patk |
| levelProgression.rules[0].rule.kind | linear |
| levelProgression.rules[0].rule.base | 117 |
| levelProgression.rules[0].rule.perLevel | 57 |
| levelProgression.rules[0].source | storedFormula |
| levelProgression.rules[1].path[0] | resourceCosts |
| levelProgression.rules[1].path[1] | 0 |
| levelProgression.rules[1].path[2] | scaling |
| levelProgression.rules[1].rule.kind | bounded |
| levelProgression.rules[1].rule.min | 0 |
| levelProgression.rules[1].rule.rule.kind | linear |
| levelProgression.rules[1].rule.rule.base | 29 |
| levelProgression.rules[1].rule.rule.perLevel | 14 |
| levelProgression.rules[1].source | storedFormula |
| levelProgression.rules[2].path[0] | cooldownScaling |
| levelProgression.rules[2].rule.kind | bounded |
| levelProgression.rules[2].rule.min | 0,1 |
| levelProgression.rules[2].rule.rule.kind | rounded |
| levelProgression.rules[2].rule.rule.mode | round |
| levelProgression.rules[2].rule.rule.rule.kind | linear |
| levelProgression.rules[2].rule.rule.rule.base | 48 |
| levelProgression.rules[2].rule.rule.rule.perLevel | -1,2 |
| levelProgression.rules[2].source | verifiedExistingLevels |
| levelProgression.extensionNeedsDefinition[0] | companionVulnerabilitySettings.damageBonusFractionByLevel |
| classificationVersion | 1 |
| damageType | physical |
| type | skill |

Vorhandene Levelskalierungen sind bereits gespeichert und gelten als bestehende Festlegung. Nur weitere, bislang nicht skalierte Werte oder neue Balancingentscheidungen prüfen.

Noch zu klären:

- Nur fehlende Skalierung von Kosten, Schaden oder weiteren Werten ergänzen; vorhandene Kurven beibehalten
- Lernlevel, Voraussetzungen und Skillpunktkosten im Klassenbaum prüfen

## Gemeinsame Prüfblöcke

Die sechs Kreaturenskills stehen in der [gemeinsamen Kreaturendatei](../shared-creature-skills.md). Waffen-, Ausdauer- und Rüstungstraining stehen in der [gemeinsamen Trainingsdatei](../shared-training-skills.md). Alle neun zählen weiterhin zu den 32 Skills. Für die Abenteurer-Datei verbleiben 23 Detailblöcke; auch darunter sind mehrere mit anderen Klassen geteilte Skills.

## Zusätzliche Quelleneinträge

- Mut des Abenteurers (alte Quell-ID 148): noch nicht als zusätzlicher Skill übernommen.

Kleine Regeneration und Erweiterung der Kraft aus dem alten Klassenboard bleiben gesondert zu prüfen. Keine automatische Zuordnung zu ähnlich benannten Skills.

## Reihenfolge der gemeinsamen Prüfung

1. Regenerationsintervall, Kampfregeln und Wisdom-Beitrag bestimmen.
2. Fehlende Skills und Waffenbedingungen klären.
3. Angriffe und Erste Hilfe: Wirkung, Kosten, Cast Time, Cooldown und Levelskalierung.
4. Passive, Eigenbuffs, Gruppenbuffs und Kreaturenskills.
5. Gesamte Attribute, Mana-Verbrauch, Heilung und Schaden mit Begleitern berechnen.
6. Mit den anschließend ausgearbeiteten anderen Klassen vergleichen.

## Neue Abenteurer-Skills

| Skill | Stufen | Bestätigte Wirkung | Noch offen |
| --- | ---: | --- | --- |
| Wilde Bindung | 1 | Permanente Passive mit einer einzigen Skillstufe. Bei 100 % Vertrauen erhält das jeweilige Pet zusätzlich 20 % der aktuellen physischen Angriffskraft sowie jeweils 10 % der aktuellen physischen und magischen Verteidigung des Abenteurers. Der Abenteurer behält alle Werte. Die einzige Stufe übernimmt die bisherigen Maximalwerte von Stufe 3 und kostet einen Skillpunkt. Die Verwendung des Angriffsbonus durch magische Pets bleibt offen; keine automatische Umwandlung festgelegt. | Angriffszuordnung bei magischen Pets |
| Beharrlichkeit | 5 | Nach einem erlittenen kritischen Treffer: 25 % Chance auf 15 Sekunden Beharrlichkeit, sofern der interne Cooldown bereit ist. Je Skillstufe +10 P-Abwehr, +10 M-Abwehr und +5 Agilität; maximal +50/+50/+25. Sofortheilung 50 HP auf Stufe 1, +3 je weiterer Stufe bis 62. Interner Cooldown 48 Sekunden, je weiterer Stufe -1 bis 44. Kein permanenter Attributbonus. | Bestätigte Grundwirkung vollständig gespeichert |
| Kreuzhieb | 10 | Zwei aufeinanderfolgende physische Hiebe. Erster Hieb: 27 Grundschaden, +56 je weiterer Stufe bis 531. Zweiter Hieb: 108 Grundschaden, +56 je weiterer Stufe bis 612. Jeder Hieb addiert den aktuellen P-Angriff. Mana für die gesamte Anwendung: 34 +28 je weiterer Stufe bis 286 (25 % des gesamten Skill-Grundschadens, gerundet). Castzeit 0,1 Sekunden, anschließende Animation vorläufig etwa 1,2 Sekunden. Cooldown 43 Sekunden, -1 je weiterer Stufe bis 34 Sekunden. Genaue Trefferzeitpunkte noch offen. | Genaue Trefferzeitpunkte |
| Rudelangriff | 20 | Rudelangriff, 20 Stufen. Der Abenteurer springt zurück, gibt bis zu zwei verfügbaren Begleitern Zeit zur Positionierung und stürmt zum gemeinsamen Angriff vor. Der Rücksprung ist Animation und darf parallel zur Castzeit von 0,4 Sekunden laufen; keine zusätzliche festgelegte Animationssperre. Grundschaden 273 +154 je weiterer Stufe bis 3199, dazu einmal eigener aktueller P-Angriff und einmal die Angriffskraft jedes teilnehmenden Pets. Auch allein oder mit einem Pet nutzbar, eine gemeinsame Schadensanzeige. Cooldown 70 Sekunden, -1 je weiterer Stufe bis 51, beginnend nach Castende. Mana 25 % des Skill-Grundschadens, je Stufe auf ganze Mana gerundet: 68 bis 800; Spieler-/Pet-Angriff nicht Teil der Kostenbasis. Reichweite, genaue Animation/Trefferzeitpunkte und Verrechnung magischer Pet-Angriffe noch offen. | Reichweite, genaue Animation/Trefferzeiten und magische Pet-Beiträge |
| Lebenstransfer | 20 | Lebenstransfer: 20 Stufen, 0,8 Sekunden Castzeit. Vier unterbrechbare Heilimpulse für einen ausgewählten eigenen Begleiter. Abstand 0,5 Sekunden auf Stufe 1–9, 0,4 auf Stufe 10–19, 0,3 auf Stufe 20; erster Impuls nach einem vollständigen Intervall. Übertragung damit 2 / 1,6 / 1,2 Sekunden. Heilung je Impuls steigt in ganzen Stufenpaaren: 40 HP auf Stufe 1–2, danach alle zwei Stufen +40 bis 400 auf Stufe 19–20. Pro tatsächlich ausgeführtem Impuls werden 75 % der Heilung als eigene HP und 10 % als Mana bezahlt. Maximal viermal 300 HP und 40 Mana für viermal 400 Heilung: 1200 eigene HP +160 Mana → 1600 Pet-Heilung. Keine Kosten vor einem Impuls; Abbruch durch Bewegung/Dash stoppt alle restlichen Impulse. Darf den Anwender nicht töten. Cooldown beginnt mit dem ersten Heilimpuls: 60 Sekunden, -2 je weiterer Stufe bis 22. Abbruch vor dem ersten Impuls kostet weder Ressourcen noch Cooldown. Die Heilphase ersetzt die bisher feste Zwei-Sekunden-Animation entsprechend der Skillstufe. | Pet-Zielreichweite |
| Blutender Schnitt | 6 | Horizontaler physischer Schwerthieb: 117 Grundschaden, +57 je weiterer Stufe bis 402 auf Stufe 6, dazu einmal aktueller P-Angriff. Markiert das getroffene Ziel zwölf Sekunden mit Blutgeruch. Alle Begleiter der eigenen Gruppe einschließlich temporärer Beschwörungen verursachen gegen dieses Ziel 0,5 Prozentpunkte mehr Schaden je Skillstufe, maximal 3 %. Kein Blutungs- oder sonstiger periodischer Schaden. Mehrere Blutgeruch-Markierungen stapeln nicht; erneute Anwendung erneuert die Dauer. Mana 29 +14 bis 99 je Anwendung. Cast 0,1 Sekunden; Animation im vorläufigen Modell 0. Cooldown je Stufe 48/47/46/44/43/42 Sekunden. | Bestätigte Grundwirkung vollständig gespeichert |

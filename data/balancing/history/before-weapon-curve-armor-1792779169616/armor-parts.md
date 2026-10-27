# Rüstungsteile – fünf Teile je Klasse und Rang

Aktuelle physische Kalibrierung: R2, R3, R5 und R6 sind pro Klasse aus R4 auf Level 60 abgeleitet. Gladiator R4 wurde auf 169 P-Abwehr gekürzt. R1 wurde separat um die festgelegten ganzen Abwehrpunkte gekürzt; keine Kalibrierung auf Rüstungslevel 1. Diese expliziten P-Abwehrsummen überschreiben die historische Skalierung; Auch die M-Abwehr von R2, R3, R5 und R6 ist je Klasse am unveränderten magischen R4-Anker kalibriert und aufgerundet. M-Abwehr von R1 bleibt unverändert; auf Level 1 wird ohne Rüstung geprüft.

Brust 30 %, Hose 26 %, Helm 16 %, Handschuhe 16 %, Schuhe 12 %. Ganze Abwehrpunkte werden mit dem größten Rest verteilt; bei Gleichstand gilt diese Reihenfolge. Die bisherigen Quellen-Gesamtwerte werden einmal mit 354/554 skaliert und auf ganze Punkte gerundet. Anschließend gelten individuelle R6-Ziele, proportional auf R1–R5 übertragen: Gladiator M-Abwehr 123, Butcher M-Abwehr 149, Abenteurer P-Abwehr 302 und M-Abwehr 186. Die fünf Teile ergeben exakt die neuen Gesamtwerte.

Nur P-Abwehr und M-Abwehr sind belegt. Direkte HP/MP sowie Vitalität und Willenskraft sind vorerst entfernt. Unter den beiden Abwehrwerten stehen je Teil sechs vorbereitete, noch leere Bonusplätze. Davon für Zusatzwerte vorgesehen: R1 0, R2 1, R3 1, R4 2, R5 2, R6 3. Übrige Plätze sind für später reserviert. Sockel für Steine sind davon getrennt. Namen sind Arbeitsnamen; Materialbezeichnungen haben keine zusätzlichen Effekte. Als 390 Rüstungsteile und 52 Umhangentwürfe in MongoDB gespeichert und gegen diese Definitionen geprüft.

Die früher fehlerhaften M-Abwehr-Teilsummen des Butchers wurden aus den korrekten Quellen-Gesamtwerten neu verteilt und anschließend mit demselben Faktor skaliert. Die Originaltabelle bleibt als historische Quelle erhalten. Aktuelle Definition: `data/balancing/armor-parts.json`.

## Gesamtwerte auf einen Blick

Je Zelle **P-Abwehr / M-Abwehr**, jeweils die Summe der fünf Rüstungsteile. Umhänge sind nicht enthalten. Über den Klassennamen geht es zu den Einzelteilen.

| Klasse | R1 | R2 | R3 | R4 | R5 | R6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [Abenteurer](#abenteurer) | 27 / 19 | 50 / 29 | 106 / 65 | 161 / 100 | 217 / 136 | 273 / 172 |
| [Butcher](#butcher) | 31 / 15 | 37 / 25 | 77 / 55 | 116 / 84 | 156 / 114 | 196 / 144 |
| [Druide](#druide) | 28 / 23 | 46 / 39 | 95 / 81 | 144 / 123 | 194 / 166 | 243 / 208 |
| [Gladiator](#gladiator) | 32 / 12 | 52 / 27 | 111 / 55 | 169 / 83 | 228 / 112 | 287 / 140 |
| [Heiler](#heiler) | 18 / 44 | 28 / 59 | 57 / 129 | 86 / 199 | 116 / 270 | 145 / 340 |
| [Jäger](#jäger) | 23 / 26 | 37 / 35 | 78 / 76 | 119 / 117 | 161 / 159 | 202 / 200 |
| [Kräuterkundler](#kräuterkundler) | 24 / 21 | 42 / 35 | 89 / 74 | 135 / 112 | 182 / 151 | 229 / 190 |
| [Luminet](#luminet) | 21 / 36 | 37 / 64 | 76 / 134 | 114 / 204 | 153 / 275 | 192 / 345 |
| [Nachtjäger](#nachtjäger) | 19 / 19 | 36 / 30 | 75 / 68 | 114 / 106 | 154 / 145 | 193 / 183 |
| [Ritter](#ritter) | 38 / 29 | 60 / 52 | 130 / 112 | 199 / 171 | 269 / 231 | 339 / 291 |
| [Ritualist](#ritualist) | 23 / 31 | 36 / 35 | 74 / 76 | 112 / 116 | 151 / 157 | 189 / 198 |
| [Schamane](#schamane) | 25 / 24 | 47 / 41 | 98 / 84 | 148 / 126 | 199 / 169 | 250 / 212 |
| [Schurke](#schurke) | 25 / 20 | 31 / 33 | 66 / 73 | 100 / 112 | 135 / 152 | 170 / 192 |

## Verteilungsregel für neue Rüstungen

Für jede Klasse gilt dieselbe Aufteilung: Brust 30 %, Hose 26 %, Helm 16 %, Handschuhe 16 %, Schuhe 12 %. P-Abwehr und M-Abwehr werden getrennt verteilt. Zunächst werden die exakten Prozentanteile berechnet und abgerundet. Verbleibende Punkte erhalten die Teile mit dem größten Nachkommarest; Gleichstände folgen der genannten Teilreihenfolge. So ergibt auch eine Gesamtsumme von 501 exakt 501 ganze Punkte: 151 / 130 / 80 / 80 / 60.

Die Klasse bestimmt die Zuordnung und das gewünschte Verhältnis zwischen P- und M-Abwehr, nicht diese Slotanteile. Optional lässt sich das aktuelle R6-Profil fortschreiben: neue M-Abwehr = gerundet(neue P-Abwehr × R6-M-Abwehr / R6-P-Abwehr). Das ist ein Vorschlag für denselben Klassenstil, keine automatische Zusage zur Balance eines neuen Rangs. Beide Gesamtsummen können auch unabhängig festgelegt werden. Umhänge bleiben zusätzlich. Gemeinsame Berechnung: `services/armorAllocation.js`.

## Abenteurer

Klassenlinie: Abenteurer / Scout.

### Rang 1

Materialnamen.

| Wert | Einfache Lederjacke | Grobe Leinenhose | Stoffkappe | Arbeitshandschuhe | Abgetragene Lederschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 8 | 7 | 5 | 4 | 3 |
| M-Abwehr | 6 | 5 | 3 | 3 | 2 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **27 P-Abwehr / 19 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Robustes Reisewams | Gefütterte Lederhose | Wetterfeste Kapuze | Feste Lederhandschuhe | Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 15 | 13 | 8 | 8 | 6 |
| M-Abwehr | 9 | 7 | 5 | 5 | 3 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **50 P-Abwehr / 29 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Wachslederjacke | Dornenfeste Lederhose | Breitrandiger Lederhut | Verstärkte Arbeitshandschuhe | Wetterfeste Reisestiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 32 | 27 | 17 | 17 | 13 |
| M-Abwehr | 20 | 17 | 10 | 10 | 8 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **106 P-Abwehr / 65 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Vielgeflickte Reisejacke | Hose der tausend Wege | Wetterkappe | Handschuhe des Finders | Weitläuferstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 48 | 42 | 26 | 26 | 19 |
| M-Abwehr | 30 | 26 | 16 | 16 | 12 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **161 P-Abwehr / 100 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Wandererleder – Brust R5 | Wandererleder – Hose R5 | Wandererleder – Helm R5 | Wandererleder – Handschuhe R5 | Wandererleder – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 65 | 56 | 35 | 35 | 26 |
| M-Abwehr | 41 | 35 | 22 | 22 | 16 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **217 P-Abwehr / 136 M-Abwehr**.

**Umhang: Umhang – Abenteurer R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Erbe der Seeschlange.** Thema: Blaugrüne Seeschlangenschuppen auf robustem Leder. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Schuppenharnisch der Seeschlange | Seeschlangen-Beinschutz | Stirnreif der Tiefsee | Gezeitenhandschuhe | Brandungsstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 82 | 71 | 44 | 43 | 33 |
| M-Abwehr | 52 | 45 | 27 | 27 | 21 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **273 P-Abwehr / 172 M-Abwehr**.

**Umhang: Mantel der fernen Küsten.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Butcher

Klassenlinie: Butcher / Destroyer.

### Rang 1

Materialnamen.

| Wert | Grobe Lederweste | Leinenhose | Lederkappe | Wickelhandschuhe | Abgetragene Stiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 9 | 8 | 5 | 5 | 4 |
| M-Abwehr | 5 | 4 | 2 | 2 | 2 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **31 P-Abwehr / 15 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Verstärktes Lederwams | Robuste Fellhose | Offene Lederhaube | Nietenhandschuhe | Schwere Lederstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 11 | 10 | 6 | 6 | 4 |
| M-Abwehr | 8 | 6 | 4 | 4 | 3 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **37 P-Abwehr / 25 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Beschlagener Lederharnisch | Beinschutz aus Hartleder | Eisenbeschlagene Kappe | Panzerlederhandschuhe | Stiefel mit Eisenkappen |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 23 | 20 | 13 | 12 | 9 |
| M-Abwehr | 16 | 14 | 9 | 9 | 7 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **77 P-Abwehr / 55 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Panzer des Schlachtmeisters | Blutvernähte Beinschienen | Gebrochene Eisenmaske | Kettenwickel | Knochenbrecherstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 35 | 30 | 19 | 18 | 14 |
| M-Abwehr | 25 | 22 | 14 | 13 | 10 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **116 P-Abwehr / 84 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Schlächterplatten – Brust R5 | Schlächterplatten – Hose R5 | Schlächterplatten – Helm R5 | Schlächterplatten – Handschuhe R5 | Schlächterplatten – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 47 | 40 | 25 | 25 | 19 |
| M-Abwehr | 34 | 30 | 18 | 18 | 14 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **156 P-Abwehr / 114 M-Abwehr**.

**Umhang: Umhang – Butcher R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Schwarzstahl – Brecher.** Thema: Schwarzstahl. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Schwarzstahlbeschlagene Lederweste | Lederhose mit Schwarzstahlschienen | Offene Schwarzstahlmaske | Schwarzstahlwickel | Schwarzstahlbesetzte Stiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 59 | 51 | 31 | 31 | 24 |
| M-Abwehr | 43 | 38 | 23 | 23 | 17 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **196 P-Abwehr / 144 M-Abwehr**.

**Umhang: Rauchgrauer Kriegsmantel.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Druide

Klassenlinie: Druide / Alchemist.

### Rang 1

Materialnamen.

| Wert | Grobe Stofftunika | Leinenhose | Weiche Stoffkappe | Einfache Lederhandschuhe | Ledersandalen |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 8 | 7 | 5 | 5 | 3 |
| M-Abwehr | 7 | 6 | 4 | 3 | 3 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **28 P-Abwehr / 23 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Naturgefärbte Robe | Gewebte Wollhose | Fellbesetzte Kapuze | Wildlederhandschuhe | Gefütterte Mokassins |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 14 | 12 | 7 | 7 | 6 |
| M-Abwehr | 12 | 10 | 6 | 6 | 5 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **46 P-Abwehr / 39 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Robe aus Rindenfasern | Hose aus Nesseltuch | Federbesetzte Kapuze | Wurzelfaserhandschuhe | Geschmeidige Fellstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 29 | 25 | 15 | 15 | 11 |
| M-Abwehr | 24 | 21 | 13 | 13 | 10 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **95 P-Abwehr / 81 M-Abwehr**.

**Umhang: Gefütterter Stoffumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Rinde des alten Hains | Moosverwobene Hose | Krone des Jahreskreises | Hände des Wildwuchses | Wurzelpfad |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 43 | 38 | 23 | 23 | 17 |
| M-Abwehr | 37 | 32 | 20 | 19 | 15 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **144 P-Abwehr / 123 M-Abwehr**.

**Umhang: Feingewebter Reisemantel.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Naturgewand – Brust R5 | Naturgewand – Hose R5 | Naturgewand – Helm R5 | Naturgewand – Handschuhe R5 | Naturgewand – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 58 | 51 | 31 | 31 | 23 |
| M-Abwehr | 50 | 43 | 27 | 26 | 20 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **194 P-Abwehr / 166 M-Abwehr**.

**Umhang: Umhang – Druide R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Bund des alten Hains.** Thema: Rindenfasern, weiches Leder, Blätter und Flechtarbeit. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Hainwächtergewand | Rindenfaserhose des alten Hains | Geflochtene Weidenkrone | Wurzelgreifer des alten Hains | Moospfadstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 73 | 63 | 39 | 39 | 29 |
| M-Abwehr | 63 | 54 | 33 | 33 | 25 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **243 P-Abwehr / 208 M-Abwehr**.

**Umhang: Blättermantel des alten Hains.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Gladiator

Klassenlinie: Gladiator / Berserker.

### Rang 1

Materialnamen.

| Wert | Gefüttertes Lederwams | Grobe Stoffhose | Lederkappe | Leichte Lederhandschuhe | Feste Lederschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 10 | 8 | 5 | 5 | 4 |
| M-Abwehr | 4 | 3 | 2 | 2 | 1 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **32 P-Abwehr / 12 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Ringpanzerweste | Verstärkte Lederhose | Offener Eisenhelm | Nietenhandschuhe | Beschlagene Lederstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 16 | 14 | 8 | 8 | 6 |
| M-Abwehr | 8 | 7 | 5 | 4 | 3 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **52 P-Abwehr / 27 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Eiserne Brustplatte | Beinschienen aus Eisen | Eiserner Nasalhelm | Eisenhandschuhe | Schienenstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 33 | 29 | 18 | 18 | 13 |
| M-Abwehr | 16 | 14 | 9 | 9 | 7 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **111 P-Abwehr / 55 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Kürass des Herausforderers | Sandnarben-Beinschutz | Helm der letzten Runde | Siegergriff | Stiefel des Sandrings |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 51 | 44 | 27 | 27 | 20 |
| M-Abwehr | 25 | 22 | 13 | 13 | 10 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **169 P-Abwehr / 83 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Arenapanzer – Brust R5 | Arenapanzer – Hose R5 | Arenapanzer – Helm R5 | Arenapanzer – Handschuhe R5 | Arenapanzer – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 68 | 59 | 37 | 37 | 27 |
| M-Abwehr | 34 | 29 | 18 | 18 | 13 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **228 P-Abwehr / 112 M-Abwehr**.

**Umhang: Umhang – Gladiator R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Schwarzstahl – Arenabrecher.** Thema: Schwarzstahl. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Schwarzstahlpanzer | Gehärtete Schwarzstahlbeinplatten | Schwarzstahl-Eisenbrecherhelm | Schwarzstahlfaustschützer | Schwarzstahlkampfstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 86 | 75 | 46 | 46 | 34 |
| M-Abwehr | 42 | 37 | 22 | 22 | 17 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **287 P-Abwehr / 140 M-Abwehr**.

**Umhang: Rauchgrauer Kriegsmantel.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Heiler

Klassenlinie: Heiler / Priester.

### Rang 1

Materialnamen.

| Wert | Einfache Stofftunika | Leinenhose | Stoffhaube | Leinenhandschuhe | Stoffschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 5 | 5 | 3 | 3 | 2 |
| M-Abwehr | 13 | 12 | 7 | 7 | 5 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **18 P-Abwehr / 44 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Schlichte Wollrobe | Weiche Stoffhose | Wollkapuze | Feingewebte Handschuhe | Gefütterte Stoffschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 8 | 7 | 5 | 5 | 3 |
| M-Abwehr | 18 | 15 | 10 | 9 | 7 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **28 P-Abwehr / 59 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Bestickte Seidenrobe | Seidenhose | Bestickte Kapuze | Seidenhandschuhe | Schuhe aus Samt |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 17 | 15 | 9 | 9 | 7 |
| M-Abwehr | 39 | 33 | 21 | 21 | 15 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **57 P-Abwehr / 129 M-Abwehr**.

**Umhang: Gefütterter Stoffumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Robe der stillen Zuflucht | Leinen der Genesung | Haube des Morgenlichts | Hände der Barmherzigkeit | Pilgerschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 26 | 22 | 14 | 14 | 10 |
| M-Abwehr | 59 | 52 | 32 | 32 | 24 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **86 P-Abwehr / 199 M-Abwehr**.

**Umhang: Feingewebter Reisemantel.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Segensgewand – Brust R5 | Segensgewand – Hose R5 | Segensgewand – Helm R5 | Segensgewand – Handschuhe R5 | Segensgewand – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 35 | 30 | 19 | 18 | 14 |
| M-Abwehr | 81 | 70 | 43 | 43 | 33 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **116 P-Abwehr / 270 M-Abwehr**.

**Umhang: Umhang – Heiler R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Numara-Set.** Thema: Numara – Wasser- oder Quellengeist; genaue Geschichte noch offen. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Feine Robe von Numara | Ruheweberhose von Numara | Hüterhaube von Numara | Lindernde Hände von Numara | Sanfte Schritte von Numara |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 44 | 38 | 23 | 23 | 17 |
| M-Abwehr | 102 | 89 | 54 | 54 | 41 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **145 P-Abwehr / 340 M-Abwehr**.

**Umhang: Mantel der Geborgenheit von Numara.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Jäger

Klassenlinie: Jäger / Schütze.

### Rang 1

Materialnamen.

| Wert | Leichtes Lederwams | Einfache Stoffhose | Stoffkapuze | Dünne Lederhandschuhe | Weiche Lederschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 7 | 6 | 4 | 3 | 3 |
| M-Abwehr | 8 | 7 | 4 | 4 | 3 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **23 P-Abwehr / 26 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Geschmeidige Lederjacke | Wildlederhose | Lederkapuze | Verstärkte Lederhandschuhe | Leichte Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 11 | 10 | 6 | 6 | 4 |
| M-Abwehr | 10 | 9 | 6 | 6 | 4 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **37 P-Abwehr / 35 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Genieteter Lederharnisch | Doppelt genähte Lederhose | Gefütterte Jagdkapuze | Flinkfingerhandschuhe | Weichsohlige Jagdstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 23 | 20 | 13 | 13 | 9 |
| M-Abwehr | 23 | 20 | 12 | 12 | 9 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **78 P-Abwehr / 76 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Wams des langen Ansitzes | Farnläuferhose | Kapuze der Fährte | Sehnenschoner | Schuhe des Wildwechsels |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 36 | 31 | 19 | 19 | 14 |
| M-Abwehr | 35 | 30 | 19 | 19 | 14 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **119 P-Abwehr / 117 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Waldläuferleder – Brust R5 | Waldläuferleder – Hose R5 | Waldläuferleder – Helm R5 | Waldläuferleder – Handschuhe R5 | Waldläuferleder – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 48 | 42 | 26 | 26 | 19 |
| M-Abwehr | 48 | 41 | 26 | 25 | 19 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **161 P-Abwehr / 159 M-Abwehr**.

**Umhang: Umhang – Jäger R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Ferox – Wildes Feuer.** Thema: Ferox-Leder. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Wildbrandwams des Ferox | Dicklederhose des Ferox | Goldmähnenkapuze | Bestiengriff des Ferox | Glutpelzstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 61 | 53 | 32 | 32 | 24 |
| M-Abwehr | 60 | 52 | 32 | 32 | 24 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **202 P-Abwehr / 200 M-Abwehr**.

**Umhang: Flammenfellmantel des Ferox.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Kräuterkundler

Klassenlinie: Kräuterkundler / Witcher.

### Rang 1

Materialnamen.

| Wert | Einfache Lederjacke | Grobe Leinenhose | Stoffkappe | Arbeitshandschuhe | Abgetragene Lederschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 7 | 6 | 4 | 4 | 3 |
| M-Abwehr | 6 | 6 | 3 | 3 | 3 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **24 P-Abwehr / 21 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Robustes Reisewams | Gefütterte Lederhose | Wetterfeste Kapuze | Feste Lederhandschuhe | Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 12 | 11 | 7 | 7 | 5 |
| M-Abwehr | 10 | 9 | 6 | 6 | 4 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **42 P-Abwehr / 35 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Wachslederjacke | Dornenfeste Lederhose | Breitrandiger Lederhut | Verstärkte Arbeitshandschuhe | Wetterfeste Reisestiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 27 | 23 | 14 | 14 | 11 |
| M-Abwehr | 22 | 19 | 12 | 12 | 9 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **89 P-Abwehr / 74 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Schürze des Giftmischers | Dornenfeste Hose | Kapuze des Sammlers | Wurzelgreifer | Moorstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 40 | 35 | 22 | 22 | 16 |
| M-Abwehr | 34 | 29 | 18 | 18 | 13 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **135 P-Abwehr / 112 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Kräuterleder – Brust R5 | Kräuterleder – Hose R5 | Kräuterleder – Helm R5 | Kräuterleder – Handschuhe R5 | Kräuterleder – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 55 | 47 | 29 | 29 | 22 |
| M-Abwehr | 46 | 39 | 24 | 24 | 18 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **182 P-Abwehr / 151 M-Abwehr**.

**Umhang: Umhang – Kräuterkundler R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Geisterrose – Rosenasche.** Thema: Geisterrose. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Aschfahle Robe der Geisterrose | Aschleinenhose der Geisterrose | Geisterrosenschleier | Alchemistenhandschuhe der Geisterrose | Aschpfadstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 69 | 59 | 37 | 37 | 27 |
| M-Abwehr | 57 | 50 | 30 | 30 | 23 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **229 P-Abwehr / 190 M-Abwehr**.

**Umhang: Rosenasche-Mantel.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Luminet

Klassenlinie: Luminet / Lichtmagier.

### Rang 1

Materialnamen.

| Wert | Einfache Stofftunika | Leinenhose | Stoffhaube | Leinenhandschuhe | Stoffschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 6 | 6 | 3 | 3 | 3 |
| M-Abwehr | 11 | 9 | 6 | 6 | 4 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **21 P-Abwehr / 36 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Schlichte Wollrobe | Weiche Stoffhose | Wollkapuze | Feingewebte Handschuhe | Gefütterte Stoffschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 11 | 10 | 6 | 6 | 4 |
| M-Abwehr | 19 | 17 | 10 | 10 | 8 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **37 P-Abwehr / 64 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Bestickte Seidenrobe | Seidenhose | Bestickte Kapuze | Seidenhandschuhe | Schuhe aus Samt |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 23 | 20 | 12 | 12 | 9 |
| M-Abwehr | 40 | 35 | 22 | 21 | 16 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **76 P-Abwehr / 134 M-Abwehr**.

**Umhang: Gefütterter Stoffumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Mantel der Lichtbrechung | Sonnenseidenhose | Diadem des ersten Strahls | Prismenhandschuhe | Schritte der Dämmerung |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 34 | 30 | 18 | 18 | 14 |
| M-Abwehr | 61 | 53 | 33 | 33 | 24 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **114 P-Abwehr / 204 M-Abwehr**.

**Umhang: Feingewebter Reisemantel.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Lichtgewand – Brust R5 | Lichtgewand – Hose R5 | Lichtgewand – Helm R5 | Lichtgewand – Handschuhe R5 | Lichtgewand – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 46 | 40 | 25 | 24 | 18 |
| M-Abwehr | 83 | 71 | 44 | 44 | 33 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **153 P-Abwehr / 275 M-Abwehr**.

**Umhang: Umhang – Luminet R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Morgenblüte – Zuflucht.** Thema: Morgenblüte. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Feine Robe der Morgenblüte | Beinkleid der Morgenblüte | Silberweberhaube der Morgenblüte | Bewahrerhandschuhe der Morgenblüte | Sanfte Schritte der Morgenblüte |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 57 | 50 | 31 | 31 | 23 |
| M-Abwehr | 104 | 90 | 55 | 55 | 41 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **192 P-Abwehr / 345 M-Abwehr**.

**Umhang: Blütenblauer Mantel der Morgenblüte.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Nachtjäger

Klassenlinie: Nachtjäger / Seelenjäger.

### Rang 1

Materialnamen.

| Wert | Leichtes Lederwams | Einfache Stoffhose | Stoffkapuze | Dünne Lederhandschuhe | Weiche Lederschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 6 | 5 | 3 | 3 | 2 |
| M-Abwehr | 6 | 5 | 3 | 3 | 2 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **19 P-Abwehr / 19 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Geschmeidige Lederjacke | Wildlederhose | Lederkapuze | Verstärkte Lederhandschuhe | Leichte Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 11 | 9 | 6 | 6 | 4 |
| M-Abwehr | 9 | 8 | 5 | 5 | 3 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **36 P-Abwehr / 30 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Genieteter Lederharnisch | Doppelt genähte Lederhose | Gefütterte Jagdkapuze | Flinkfingerhandschuhe | Weichsohlige Jagdstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 23 | 19 | 12 | 12 | 9 |
| M-Abwehr | 20 | 18 | 11 | 11 | 8 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **75 P-Abwehr / 68 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Harnisch der verlorenen Spur | Nachtlederhose | Blick hinter den Schleier | Griff des Seelenfängers | Schritte des Verfolgten |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 34 | 30 | 18 | 18 | 14 |
| M-Abwehr | 32 | 27 | 17 | 17 | 13 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **114 P-Abwehr / 106 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Seelenjägerleder – Brust R5 | Seelenjägerleder – Hose R5 | Seelenjägerleder – Helm R5 | Seelenjägerleder – Handschuhe R5 | Seelenjägerleder – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 46 | 40 | 25 | 25 | 18 |
| M-Abwehr | 44 | 38 | 23 | 23 | 17 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **154 P-Abwehr / 145 M-Abwehr**.

**Umhang: Umhang – Nachtjäger R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Nachtmahr.** Thema: Dunkles Leder, matte Schuppen und rauchgraue Jagdmotive. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Nachtmahrharnisch | Fährtenhose des Nachtmahrs | Nachtmahrkapuze | Seelengreifer des Nachtmahrs | Pirschstiefel des Nachtmahrs |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 58 | 50 | 31 | 31 | 23 |
| M-Abwehr | 55 | 48 | 29 | 29 | 22 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **193 P-Abwehr / 183 M-Abwehr**.

**Umhang: Schleiermantel des Nachtmahrs.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Ritter

Klassenlinie: Ritter / Tempelritter.

### Rang 1

Materialnamen.

| Wert | Gesteppte Stoffrüstung | Gefütterte Leinenhose | Gepolsterte Kappe | Dicke Lederhandschuhe | Feste Lederstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 11 | 10 | 6 | 6 | 5 |
| M-Abwehr | 9 | 7 | 5 | 5 | 3 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **38 P-Abwehr / 29 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Einfaches Kettenhemd | Verstärkte Lederhose | Eiserne Hirnhaube | Kettenhandschuhe | Beschlagene Stiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 18 | 16 | 10 | 9 | 7 |
| M-Abwehr | 16 | 14 | 8 | 8 | 6 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **60 P-Abwehr / 52 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Eiserner Plattenharnisch | Eiserner Beinschutz | Geschlossener Eisenhelm | Plattenhandschuhe | Eiserne Panzerschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 39 | 34 | 21 | 21 | 15 |
| M-Abwehr | 34 | 29 | 18 | 18 | 13 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **130 P-Abwehr / 112 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Eidwacht | Beinschutz des Bollwerks | Visier der Morgenwache | Handschuhe des Hüters | Stand des Unbeugsamen |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 59 | 52 | 32 | 32 | 24 |
| M-Abwehr | 51 | 45 | 27 | 27 | 21 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **199 P-Abwehr / 171 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Wächterplatten – Brust R5 | Wächterplatten – Hose R5 | Wächterplatten – Helm R5 | Wächterplatten – Handschuhe R5 | Wächterplatten – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 81 | 70 | 43 | 43 | 32 |
| M-Abwehr | 69 | 60 | 37 | 37 | 28 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **269 P-Abwehr / 231 M-Abwehr**.

**Umhang: Umhang – Ritter R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Schwarzstahl – Bollwerk.** Thema: Schwarzstahl. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Schwarzstahl-Plattenharnisch | Geschlossener Schwarzstahlbeinschutz | Schwarzstahl-Visierhelm | Schwarzstahl-Panzerhandschuhe | Schwarzstahl-Panzerschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 102 | 88 | 54 | 54 | 41 |
| M-Abwehr | 87 | 76 | 47 | 46 | 35 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **339 P-Abwehr / 291 M-Abwehr**.

**Umhang: Rauchgrauer Kriegsmantel.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Ritualist

Klassenlinie: Ritualist / Blutmagier.

### Rang 1

Materialnamen.

| Wert | Einfache Stofftunika | Leinenhose | Stoffhaube | Leinenhandschuhe | Stoffschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 7 | 6 | 4 | 3 | 3 |
| M-Abwehr | 9 | 8 | 5 | 5 | 4 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **23 P-Abwehr / 31 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Schlichte Wollrobe | Weiche Stoffhose | Wollkapuze | Feingewebte Handschuhe | Gefütterte Stoffschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 11 | 9 | 6 | 6 | 4 |
| M-Abwehr | 10 | 9 | 6 | 6 | 4 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **36 P-Abwehr / 35 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Bestickte Seidenrobe | Seidenhose | Bestickte Kapuze | Seidenhandschuhe | Schuhe aus Samt |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 22 | 19 | 12 | 12 | 9 |
| M-Abwehr | 23 | 20 | 12 | 12 | 9 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **74 P-Abwehr / 76 M-Abwehr**.

**Umhang: Gefütterter Stoffumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Gewand der letzten Anrufung | Ascheverwebte Hose | Schleier der Namenlosen | Opferhände | Schritte ins Jenseits |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 34 | 29 | 18 | 18 | 13 |
| M-Abwehr | 35 | 30 | 19 | 18 | 14 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **112 P-Abwehr / 116 M-Abwehr**.

**Umhang: Feingewebter Reisemantel.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Ritualgewand – Brust R5 | Ritualgewand – Hose R5 | Ritualgewand – Helm R5 | Ritualgewand – Handschuhe R5 | Ritualgewand – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 46 | 39 | 24 | 24 | 18 |
| M-Abwehr | 47 | 41 | 25 | 25 | 19 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **151 P-Abwehr / 157 M-Abwehr**.

**Umhang: Umhang – Ritualist R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Dämmerblüte – Letzte Anrufung.** Thema: Dämmerblüte. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Nachtweberrobe der Dämmerblüte | Aschenseidenhose der Dämmerblüte | Aschenhaube der Dämmerblüte | Schattenfadengreifer der Dämmerblüte | Ritualschuhe der Dämmerblüte |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 57 | 49 | 30 | 30 | 23 |
| M-Abwehr | 59 | 51 | 32 | 32 | 24 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **189 P-Abwehr / 198 M-Abwehr**.

**Umhang: Blutroter Mantel der Dämmerblüte.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Schamane

Klassenlinie: Schamane / Hochelfe.

### Rang 1

Materialnamen.

| Wert | Grobe Stofftunika | Leinenhose | Weiche Stoffkappe | Einfache Lederhandschuhe | Ledersandalen |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 8 | 6 | 4 | 4 | 3 |
| M-Abwehr | 7 | 6 | 4 | 4 | 3 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **25 P-Abwehr / 24 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Naturgefärbte Robe | Gewebte Wollhose | Fellbesetzte Kapuze | Wildlederhandschuhe | Gefütterte Mokassins |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 14 | 12 | 8 | 7 | 6 |
| M-Abwehr | 12 | 11 | 7 | 6 | 5 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **47 P-Abwehr / 41 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Robe aus Rindenfasern | Hose aus Nesseltuch | Federbesetzte Kapuze | Wurzelfaserhandschuhe | Geschmeidige Fellstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 29 | 25 | 16 | 16 | 12 |
| M-Abwehr | 25 | 22 | 14 | 13 | 10 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **98 P-Abwehr / 84 M-Abwehr**.

**Umhang: Gefütterter Stoffumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Gewand der Ahnenstimmen | Hose des Regentanzes | Maske der vier Winde | Glutbewahrer | Erdenwandler |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 44 | 38 | 24 | 24 | 18 |
| M-Abwehr | 38 | 33 | 20 | 20 | 15 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **148 P-Abwehr / 126 M-Abwehr**.

**Umhang: Feingewebter Reisemantel.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Geistergewand – Brust R5 | Geistergewand – Hose R5 | Geistergewand – Helm R5 | Geistergewand – Handschuhe R5 | Geistergewand – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 59 | 52 | 32 | 32 | 24 |
| M-Abwehr | 51 | 44 | 27 | 27 | 20 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **199 P-Abwehr / 169 M-Abwehr**.

**Umhang: Umhang – Schamane R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Erbe der Windrufer.** Thema: Gewebter Stoff, Leder, Ahnenzeichen und gefärbte Bänder. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Ahnengewand der Windrufer | Bandverzierte Wanderhose | Windrufmaske | Glutwickel der Ahnen | Schritte der Erdenrufer |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 75 | 65 | 40 | 40 | 30 |
| M-Abwehr | 64 | 55 | 34 | 34 | 25 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **250 P-Abwehr / 212 M-Abwehr**.

**Umhang: Ahnenmantel der vier Winde.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Schurke

Klassenlinie: Schurke / Schattenkrieger.

### Rang 1

Materialnamen.

| Wert | Leichtes Lederwams | Einfache Stoffhose | Stoffkapuze | Dünne Lederhandschuhe | Weiche Lederschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 8 | 6 | 4 | 4 | 3 |
| M-Abwehr | 6 | 5 | 3 | 3 | 3 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **25 P-Abwehr / 20 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Geschmeidige Lederjacke | Wildlederhose | Lederkapuze | Verstärkte Lederhandschuhe | Leichte Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 9 | 8 | 5 | 5 | 4 |
| M-Abwehr | 10 | 9 | 5 | 5 | 4 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **31 P-Abwehr / 33 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Genieteter Lederharnisch | Doppelt genähte Lederhose | Gefütterte Jagdkapuze | Flinkfingerhandschuhe | Weichsohlige Jagdstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 20 | 17 | 11 | 10 | 8 |
| M-Abwehr | 22 | 19 | 12 | 11 | 9 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **66 P-Abwehr / 73 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Wams der falschen Fährte | Verborgene Taschen | Maske ohne Namen | Schlossknackerhandschuhe | Lautlose Sohlen |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 30 | 26 | 16 | 16 | 12 |
| M-Abwehr | 34 | 29 | 18 | 18 | 13 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **100 P-Abwehr / 112 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Schattenleder – Brust R5 | Schattenleder – Hose R5 | Schattenleder – Helm R5 | Schattenleder – Handschuhe R5 | Schattenleder – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 40 | 35 | 22 | 22 | 16 |
| M-Abwehr | 46 | 40 | 24 | 24 | 18 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **135 P-Abwehr / 152 M-Abwehr**.

**Umhang: Umhang – Schurke R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Dämmerblüte – Lautlose Jagd.** Thema: Dämmerblüte. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Nachtschuppenweste der Dämmerblüte | Nachtlederhose der Dämmerblüte | Schattenkapuze der Dämmerblüte | Schwarzschuppenhandschuhe der Dämmerblüte | Lautlose Stiefel der Dämmerblüte |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 51 | 44 | 27 | 27 | 21 |
| M-Abwehr | 57 | 50 | 31 | 31 | 23 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **170 P-Abwehr / 192 M-Abwehr**.

**Umhang: Blutroter Mantel der Dämmerblüte.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.


## Zufallsbonus-Regeln

Jeder verfügbare Zusatzwertplatz erhält beim Drop garantiert einen Wert. Gewichtete Ziehungen ohne Wiederholung: Jeder Zusatzwert darf pro Gegenstand nur einmal vorkommen, auf Rüstung ebenso wie auf Waffen. Nach jeder Ziehung wird der gewählte Wert für die übrigen Plätze desselben Items entfernt und die verbleibenden Gewichte neu normalisiert. Auf verschiedenen Gegenständen darf derselbe Wert erneut vorkommen. Die Ergebnisse gehören zum einzelnen gedroppten Item. Gewichte sind keine unabhängigen Trefferprüfungen. Bonushöhen, Qualitätsstufen und Umschmieden sind noch offen; derzeit wird nichts ausgewürfelt.

Stärke bis Agilität: ausschließlich die festgelegten ganzzahligen Würfelwerte. Glück: höchstens eine Nachkommastelle. Maximales Leben und Mana: ganze Zahlen. Block und Penetration: ganze Zahlen. Alle übrigen Boni: höchstens zwei Nachkommastellen, jeweils in ihrer Anzeigeeinheit. Keine Rundung der abgeleiteten Charakterwerte durch diese Regel.

| Zusatzwert | Ziehgewicht | Nachkommastellen |
| --- | ---: | ---: |
| Stärke | 20 | 0 |
| Vitalität | 20 | 0 |
| Intelligenz | 20 | 0 |
| Willenskraft | 20 | 0 |
| Geschick | 20 | 0 |
| Agilität | 20 | 0 |
| Glück (nur Waffen) | 15 | 1 |
| Maximales Leben (nur Rüstung) | 30 | 0 |
| Maximales Mana (nur Rüstung) | 25 | 0 |
| Lebensregeneration | 30 | 2 |
| Manaregeneration | 25 | 2 |
| Physischer Angriff (nur Waffen) | 3 | 0 |
| Magischer Angriff (nur Waffen) | 3 | 0 |
| Physische Abwehr (nur Rüstung) | 15 | 0 |
| Magische Abwehr (nur Rüstung) | 15 | 0 |
| Angriffsgeschwindigkeit (nur Waffen) | 10 | 2 |
| Laufgeschwindigkeit (nur Schuhe) | 10 | 2 |
| Genauigkeit | 20 | 0 |
| Ausweichen (nur Rüstung) | 15 | 0 |
| Kritischer Trefferwert | 10 | 0 |
| Kritischer Zusatzschaden (nur Waffen) | 3 | 2 |
| Block (nur Schilde) | 15 | 0 |
| Penetration (nur Waffen) | 15 | 0 |
| Physischer Skillschaden (nur Waffen) | 12 | 2 |
| Magischer Skillschaden (nur Waffen) | 12 | 2 |

Vor jeder Ziehung wird der Pool nach Itemkategorie und Ausrüstungsplatz gefiltert. Direkter P-/M-Angriff, physischer/magischer Skillschaden, Angriffstempo, kritischer Zusatzschaden, Penetration und Glück sind nur auf Waffen erlaubt. Lauftempo ist ausschließlich auf Schuhen ab Rang 4 erlaubt. Stärke bis Agilität bleiben auf Rüstung und Waffen möglich. Direkter Kritwert bleibt auch auf Rüstung möglich. Block ist ausschließlich auf Schilden rollbar, nicht auf Rüstung oder anderen Waffen. Die Ziehgewichte werden innerhalb des zulässigen Pools normalisiert. Diese Regeln betreffen zufällige Zusatzwerte; die Belegung durch Steine ist separat.

### Festgelegte Bonus-Höchstwerte

R1 ist nur der rechnerische Ausgangspunkt; auf R1 werden keine Zusatzwerte erzeugt. Wertigkeitsstufen sind noch offen.

| Zusatzwert | R1 | R2 | R3 | R4 | R5 | R6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Stärke | 1 | 2 | 3 | 4 | 6 | 8 |
| Vitalität | 1 | 2 | 3 | 4 | 6 | 8 |
| Intelligenz | 1 | 2 | 3 | 4 | 6 | 8 |
| Willenskraft | 1 | 2 | 3 | 4 | 6 | 8 |
| Geschick | 1 | 2 | 3 | 4 | 6 | 8 |
| Agilität | 1 | 2 | 3 | 4 | 6 | 8 |
| Glück | 1 | 3,2 | 5,4 | 7,6 | 9,8 | 12 |
| Maximales Leben | 40 | 80 | 120 | 160 | 240 | 320 |
| Maximales Mana | 40 | 80 | 120 | 160 | 240 | 320 |
| Lebensregeneration | 0,2 | 0,4 | 0,6 | 0,8 | 1 | 1,2 |
| Manaregeneration | 0,2 | 0,4 | 0,6 | 0,8 | 1 | 1,2 |
| Physischer Angriff | 2 | 7,6 | 13,2 | 18,8 | 24,4 | 30 |
| Magischer Angriff | 2 | 7,6 | 13,2 | 18,8 | 24,4 | 30 |
| Physische Abwehr | 5 | 10 | 15 | 20 | 25 | 30 |
| Magische Abwehr | 5 | 10 | 15 | 20 | 25 | 30 |
| Angriffsgeschwindigkeit | 0,5 | 1,4 | 2,3 | 3,2 | 4,1 | 5 |
| Laufgeschwindigkeit | — | — | — | 1,5 | 3 | 4,5 |
| Genauigkeit | 5 | 10 | 15 | 20 | 25 | 30 |
| Ausweichen | 5 | 10 | 15 | 20 | 25 | 30 |
| Kritischer Trefferwert | 5 | 9 | 13 | 17 | 21 | 25 |
| Kritischer Zusatzschaden | — | — | — | 1 | 3 | 5 |
| Block | 1 | 3 | 6 | 10 | 15 | 20 |
| Penetration | 1 | 3 | 6 | 10 | 15 | 20 |
| Physischer Skillschaden | 20 | 40 | 60 | 80 | 100 | 120 |
| Magischer Skillschaden | 20 | 40 | 60 | 80 | 100 | 120 |

Waffen-Zusatzwerte sind als voller Zweihand-Referenzwert angegeben. Einhandwaffen erhalten 50 %, Zweihandwaffen 100 %. Das betrifft ausschließlich zufällige Boni, nicht die Grundwerte der Waffe. Schilde erhalten denselben Pool wie normale Waffen plus exklusiv Block. Alle Schildboni werden halbiert, außer Block: dieser bleibt ungekürzt bei maximal 20 auf R6. Skillschaden ist auf 120 für Zweihand und 60 für Einhand/Schilde festgelegt. Waffen und Schilde haben R1 0, R2–R3 1, R4–R5 2 und R6 3 zufällige Zusatzwerte. Präzision halbierter Ganzzahlen und die vollständige Zuordnung der Waffentypen sind noch offen; es werden noch keine Waffenboni ausgewürfelt.

### Festgelegte mögliche Würfelwerte

Die Einträge nennen erlaubte Werte je gezogenem Bonus. Ihre einzelnen Wahrscheinlichkeiten sind noch nicht festgelegt. R1 bleibt ohne Zusatzwertplätze.

| Zusatzwert | R1 | R2 | R3 | R4 | R5 | R6 |
| --- | --- | --- | --- | --- | --- | --- |
| Stärke | 1 | 1 / 2 | 1 / 2 / 3 | 1 / 2 / 3 / 4 | 1 / 2 / 3 / 4 / 5 / 6 | 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 |
| Vitalität | 1 | 1 / 2 | 1 / 2 / 3 | 1 / 2 / 3 / 4 | 1 / 2 / 3 / 4 / 5 / 6 | 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 |
| Intelligenz | 1 | 1 / 2 | 1 / 2 / 3 | 1 / 2 / 3 / 4 | 1 / 2 / 3 / 4 / 5 / 6 | 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 |
| Willenskraft | 1 | 1 / 2 | 1 / 2 / 3 | 1 / 2 / 3 / 4 | 1 / 2 / 3 / 4 / 5 / 6 | 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 |
| Geschick | 1 | 1 / 2 | 1 / 2 / 3 | 1 / 2 / 3 / 4 | 1 / 2 / 3 / 4 / 5 / 6 | 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 |
| Agilität | 1 | 1 / 2 | 1 / 2 / 3 | 1 / 2 / 3 / 4 | 1 / 2 / 3 / 4 / 5 / 6 | 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 |
| Glück | 1 | 1–3.2 (Schritt 0.1) | 1–5.4 (Schritt 0.1) | 1–7.6 (Schritt 0.1) | 1–9.8 (Schritt 0.1) | 1–12 (Schritt 0.1) |
| Maximales Leben | 40 | 40–80 (Schritt 1) | 40–120 (Schritt 1) | 40–160 (Schritt 1) | 40–240 (Schritt 1) | 40–320 (Schritt 1) |
| Maximales Mana | 40 | 40–80 (Schritt 1) | 40–120 (Schritt 1) | 40–160 (Schritt 1) | 40–240 (Schritt 1) | 40–320 (Schritt 1) |
| Lebensregeneration | 0.1–0.2 (Schritt 0.01) | 0.1–0.4 (Schritt 0.01) | 0.1–0.6 (Schritt 0.01) | 0.1–0.8 (Schritt 0.01) | 0.1–1 (Schritt 0.01) | 0.1–1.2 (Schritt 0.01) |
| Manaregeneration | 0.1–0.2 (Schritt 0.01) | 0.1–0.4 (Schritt 0.01) | 0.1–0.6 (Schritt 0.01) | 0.1–0.8 (Schritt 0.01) | 0.1–1 (Schritt 0.01) | 0.1–1.2 (Schritt 0.01) |
| Physischer Angriff | 1–2 (Schritt 1) | 1–7 (Schritt 1) | 1–13 (Schritt 1) | 1–18 (Schritt 1) | 1–24 (Schritt 1) | 1–30 (Schritt 1) |
| Magischer Angriff | 1–2 (Schritt 1) | 1–7 (Schritt 1) | 1–13 (Schritt 1) | 1–18 (Schritt 1) | 1–24 (Schritt 1) | 1–30 (Schritt 1) |
| Physische Abwehr | 5 | 5–10 (Schritt 1) | 5–15 (Schritt 1) | 5–20 (Schritt 1) | 5–25 (Schritt 1) | 5–30 (Schritt 1) |
| Magische Abwehr | 5 | 5–10 (Schritt 1) | 5–15 (Schritt 1) | 5–20 (Schritt 1) | 5–25 (Schritt 1) | 5–30 (Schritt 1) |
| Laufgeschwindigkeit | — | — | — | 0.1–1.5 (Schritt 0.01) | 0.1–3 (Schritt 0.01) | 0.1–4.5 (Schritt 0.01) |
| Genauigkeit | 5 | 5–10 (Schritt 1) | 5–15 (Schritt 1) | 5–20 (Schritt 1) | 5–25 (Schritt 1) | 5–30 (Schritt 1) |
| Ausweichen | 5 | 5–10 (Schritt 1) | 5–15 (Schritt 1) | 5–20 (Schritt 1) | 5–25 (Schritt 1) | 5–30 (Schritt 1) |
| Kritischer Trefferwert | 5 | 5–9 (Schritt 1) | 5–13 (Schritt 1) | 5–17 (Schritt 1) | 5–21 (Schritt 1) | 5–25 (Schritt 1) |
| Kritischer Zusatzschaden | — | — | — | 0.1–1 (Schritt 0.01) | 0.1–3 (Schritt 0.01) | 0.1–5 (Schritt 0.01) |
| Block | 1 | 1–3 (Schritt 1) | 1–6 (Schritt 1) | 1–10 (Schritt 1) | 1–15 (Schritt 1) | 1–20 (Schritt 1) |
| Penetration | 1 | 1–3 (Schritt 1) | 1–6 (Schritt 1) | 1–10 (Schritt 1) | 1–15 (Schritt 1) | 1–20 (Schritt 1) |

### Späterer Schmiedeausbau – Entwurfsrichtung

Die Grundabwehr steigt mit dem Rang; die Zusatzwertwürfe bestimmen zusätzlich die Qualität des einzelnen Fundstücks. Gezieltes Schmieden soll einzelne vorhandene Zusatzwerte mit passenden Materialien und einer Erfolgschance bis zum normalen Rangmaximum verbessern können. Danach ist Meisterschmiedearbeit mit selteneren Spezialmaterialien vorgesehen, beispielsweise für Hauptattribute von R6-Maximum 8 auf bis zu 10. Drop-Maxima bleiben unverändert. Noch keine Umsetzung: Materialkosten, Erfolgschancen, Fehlschläge, zulässige Werte/Ränge und endgültige Meistergrenzen sind offen.

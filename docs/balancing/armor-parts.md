# Rüstungsteile – fünf Teile je Klasse und Rang

Brust 30 %, Hose 26 %, Helm 16 %, Handschuhe 16 %, Schuhe 12 %. Ganze Abwehrpunkte werden mit dem größten Rest verteilt; bei Gleichstand gilt diese Reihenfolge. Die bisherigen Quellen-Gesamtwerte werden einmal mit 354/554 skaliert und auf ganze Punkte gerundet. Anschließend gelten individuelle R6-Ziele, proportional auf R1–R5 übertragen: Gladiator M-Abwehr 123, Butcher M-Abwehr 149, Abenteurer P-Abwehr 302 und M-Abwehr 186. Die fünf Teile ergeben exakt die neuen Gesamtwerte.

Nur P-Abwehr und M-Abwehr sind belegt. Direkte HP/MP sowie Vitalität und Willenskraft sind vorerst entfernt. Unter den beiden Abwehrwerten stehen je Teil sechs vorbereitete, noch leere Bonusplätze. Davon für Zusatzwerte vorgesehen: R1 0, R2 1, R3 1, R4 2, R5 2, R6 3. Übrige Plätze sind für später reserviert. Sockel für Steine sind davon getrennt. Namen sind Arbeitsnamen; Materialbezeichnungen haben keine zusätzlichen Effekte. Als 390 Rüstungsteile und 52 Umhangentwürfe in MongoDB gespeichert und gegen diese Definitionen geprüft.

Die früher fehlerhaften M-Abwehr-Teilsummen des Butchers wurden aus den korrekten Quellen-Gesamtwerten neu verteilt und anschließend mit demselben Faktor skaliert. Die Originaltabelle bleibt als historische Quelle erhalten. Aktuelle Definition: `data/balancing/armor-parts.json`.

## Gesamtwerte auf einen Blick

Je Zelle **P-Abwehr / M-Abwehr**, jeweils die Summe der fünf Rüstungsteile. Umhänge sind nicht enthalten. Über den Klassennamen geht es zu den Einzelteilen.

| Klasse | R1 | R2 | R3 | R4 | R5 | R6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [Abenteurer](#abenteurer) | 30 / 19 | 54 / 32 | 99 / 58 | 161 / 100 | 228 / 149 | 302 / 186 |
| [Butcher](#butcher) | 31 / 15 | 44 / 31 | 59 / 46 | 116 / 84 | 196 / 118 | 309 / 149 |
| [Druide](#druide) | 29 / 23 | 56 / 44 | 100 / 78 | 144 / 123 | 212 / 174 | 291 / 235 |
| [Gladiator](#gladiator) | 36 / 12 | 72 / 25 | 145 / 47 | 204 / 83 | 253 / 102 | 354 / 123 |
| [Heiler](#heiler) | 18 / 44 | 28 / 59 | 47 / 119 | 86 / 199 | 130 / 318 | 180 / 443 |
| [Jäger](#jäger) | 25 / 26 | 42 / 49 | 70 / 65 | 119 / 117 | 170 / 164 | 254 / 211 |
| [Kräuterkundler](#kräuterkundler) | 26 / 21 | 49 / 36 | 86 / 62 | 135 / 112 | 197 / 162 | 267 / 211 |
| [Luminet](#luminet) | 21 / 36 | 36 / 72 | 66 / 145 | 114 / 204 | 162 / 253 | 215 / 354 |
| [Nachtjäger](#nachtjäger) | 20 / 19 | 35 / 33 | 65 / 62 | 114 / 106 | 157 / 148 | 199 / 190 |
| [Ritter](#ritter) | 44 / 29 | 59 / 56 | 119 / 84 | 199 / 171 | 318 / 206 | 443 / 288 |
| [Ritualist](#ritualist) | 23 / 31 | 41 / 44 | 72 / 59 | 112 / 116 | 164 / 196 | 235 / 309 |
| [Schamane](#schamane) | 27 / 24 | 52 / 46 | 100 / 88 | 148 / 126 | 200 / 181 | 276 / 247 |
| [Schurke](#schurke) | 27 / 20 | 44 / 41 | 56 / 62 | 100 / 112 | 162 / 157 | 269 / 199 |

## Verteilungsregel für neue Rüstungen

Für jede Klasse gilt dieselbe Aufteilung: Brust 30 %, Hose 26 %, Helm 16 %, Handschuhe 16 %, Schuhe 12 %. P-Abwehr und M-Abwehr werden getrennt verteilt. Zunächst werden die exakten Prozentanteile berechnet und abgerundet. Verbleibende Punkte erhalten die Teile mit dem größten Nachkommarest; Gleichstände folgen der genannten Teilreihenfolge. So ergibt auch eine Gesamtsumme von 501 exakt 501 ganze Punkte: 151 / 130 / 80 / 80 / 60.

Die Klasse bestimmt die Zuordnung und das gewünschte Verhältnis zwischen P- und M-Abwehr, nicht diese Slotanteile. Optional lässt sich das aktuelle R6-Profil fortschreiben: neue M-Abwehr = gerundet(neue P-Abwehr × R6-M-Abwehr / R6-P-Abwehr). Das ist ein Vorschlag für denselben Klassenstil, keine automatische Zusage zur Balance eines neuen Rangs. Beide Gesamtsummen können auch unabhängig festgelegt werden. Umhänge bleiben zusätzlich. Gemeinsame Berechnung: `services/armorAllocation.js`.

## Abenteurer

Klassenlinie: Abenteurer / Scout.

### Rang 1

Materialnamen.

| Wert | Einfache Lederjacke | Grobe Leinenhose | Stoffkappe | Arbeitshandschuhe | Abgetragene Lederschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 9 | 8 | 5 | 5 | 3 |
| M-Abwehr | 6 | 5 | 3 | 3 | 2 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **30 P-Abwehr / 19 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Robustes Reisewams | Gefütterte Lederhose | Wetterfeste Kapuze | Feste Lederhandschuhe | Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 16 | 14 | 9 | 9 | 6 |
| M-Abwehr | 10 | 8 | 5 | 5 | 4 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **54 P-Abwehr / 32 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Wachslederjacke | Dornenfeste Lederhose | Breitrandiger Lederhut | Verstärkte Arbeitshandschuhe | Wetterfeste Reisestiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 29 | 26 | 16 | 16 | 12 |
| M-Abwehr | 18 | 15 | 9 | 9 | 7 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **99 P-Abwehr / 58 M-Abwehr**.

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
| P-Abwehr | 68 | 59 | 37 | 37 | 27 |
| M-Abwehr | 44 | 39 | 24 | 24 | 18 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **228 P-Abwehr / 149 M-Abwehr**.

**Umhang: Umhang – Abenteurer R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Erbe der Seeschlange.** Thema: Blaugrüne Seeschlangenschuppen auf robustem Leder. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Schuppenharnisch der Seeschlange | Seeschlangen-Beinschutz | Stirnreif der Tiefsee | Gezeitenhandschuhe | Brandungsstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 91 | 79 | 48 | 48 | 36 |
| M-Abwehr | 56 | 48 | 30 | 30 | 22 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **302 P-Abwehr / 186 M-Abwehr**.

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
| P-Abwehr | 13 | 12 | 7 | 7 | 5 |
| M-Abwehr | 9 | 8 | 5 | 5 | 4 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **44 P-Abwehr / 31 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Beschlagener Lederharnisch | Beinschutz aus Hartleder | Eisenbeschlagene Kappe | Panzerlederhandschuhe | Stiefel mit Eisenkappen |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 18 | 15 | 10 | 9 | 7 |
| M-Abwehr | 14 | 12 | 7 | 7 | 6 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **59 P-Abwehr / 46 M-Abwehr**.

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
| P-Abwehr | 59 | 51 | 31 | 31 | 24 |
| M-Abwehr | 35 | 31 | 19 | 19 | 14 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **196 P-Abwehr / 118 M-Abwehr**.

**Umhang: Umhang – Butcher R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Schwarzstahl – Brecher.** Thema: Schwarzstahl. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Schwarzstahlbeschlagene Lederweste | Lederhose mit Schwarzstahlschienen | Offene Schwarzstahlmaske | Schwarzstahlwickel | Schwarzstahlbesetzte Stiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 93 | 80 | 50 | 49 | 37 |
| M-Abwehr | 44 | 39 | 24 | 24 | 18 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **309 P-Abwehr / 149 M-Abwehr**.

**Umhang: Rauchgrauer Kriegsmantel.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Druide

Klassenlinie: Druide / Alchemist.

### Rang 1

Materialnamen.

| Wert | Grobe Stofftunika | Leinenhose | Weiche Stoffkappe | Einfache Lederhandschuhe | Ledersandalen |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 9 | 7 | 5 | 5 | 3 |
| M-Abwehr | 7 | 6 | 4 | 3 | 3 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **29 P-Abwehr / 23 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Naturgefärbte Robe | Gewebte Wollhose | Fellbesetzte Kapuze | Wildlederhandschuhe | Gefütterte Mokassins |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 17 | 14 | 9 | 9 | 7 |
| M-Abwehr | 13 | 12 | 7 | 7 | 5 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **56 P-Abwehr / 44 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Robe aus Rindenfasern | Hose aus Nesseltuch | Federbesetzte Kapuze | Wurzelfaserhandschuhe | Geschmeidige Fellstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 30 | 26 | 16 | 16 | 12 |
| M-Abwehr | 23 | 20 | 13 | 13 | 9 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **100 P-Abwehr / 78 M-Abwehr**.

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
| P-Abwehr | 64 | 55 | 34 | 34 | 25 |
| M-Abwehr | 52 | 45 | 28 | 28 | 21 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **212 P-Abwehr / 174 M-Abwehr**.

**Umhang: Umhang – Druide R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Bund des alten Hains.** Thema: Rindenfasern, weiches Leder, Blätter und Flechtarbeit. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Hainwächtergewand | Rindenfaserhose des alten Hains | Geflochtene Weidenkrone | Wurzelgreifer des alten Hains | Moospfadstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 87 | 76 | 47 | 46 | 35 |
| M-Abwehr | 70 | 61 | 38 | 38 | 28 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **291 P-Abwehr / 235 M-Abwehr**.

**Umhang: Blättermantel des alten Hains.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Gladiator

Klassenlinie: Gladiator / Berserker.

### Rang 1

Materialnamen.

| Wert | Gefüttertes Lederwams | Grobe Stoffhose | Lederkappe | Leichte Lederhandschuhe | Feste Lederschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 11 | 9 | 6 | 6 | 4 |
| M-Abwehr | 4 | 3 | 2 | 2 | 1 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **36 P-Abwehr / 12 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Ringpanzerweste | Verstärkte Lederhose | Offener Eisenhelm | Nietenhandschuhe | Beschlagene Lederstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 22 | 19 | 11 | 11 | 9 |
| M-Abwehr | 8 | 6 | 4 | 4 | 3 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **72 P-Abwehr / 25 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Eiserne Brustplatte | Beinschienen aus Eisen | Eiserner Nasalhelm | Eisenhandschuhe | Schienenstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 44 | 38 | 23 | 23 | 17 |
| M-Abwehr | 14 | 12 | 8 | 7 | 6 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **145 P-Abwehr / 47 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Kürass des Herausforderers | Sandnarben-Beinschutz | Helm der letzten Runde | Siegergriff | Stiefel des Sandrings |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 61 | 53 | 33 | 33 | 24 |
| M-Abwehr | 25 | 22 | 13 | 13 | 10 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **204 P-Abwehr / 83 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Arenapanzer – Brust R5 | Arenapanzer – Hose R5 | Arenapanzer – Helm R5 | Arenapanzer – Handschuhe R5 | Arenapanzer – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 76 | 66 | 41 | 40 | 30 |
| M-Abwehr | 31 | 27 | 16 | 16 | 12 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **253 P-Abwehr / 102 M-Abwehr**.

**Umhang: Umhang – Gladiator R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Schwarzstahl – Arenabrecher.** Thema: Schwarzstahl. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Schwarzstahlpanzer | Gehärtete Schwarzstahlbeinplatten | Schwarzstahl-Eisenbrecherhelm | Schwarzstahlfaustschützer | Schwarzstahlkampfstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 106 | 92 | 57 | 57 | 42 |
| M-Abwehr | 37 | 32 | 20 | 19 | 15 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **354 P-Abwehr / 123 M-Abwehr**.

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
| P-Abwehr | 14 | 12 | 8 | 7 | 6 |
| M-Abwehr | 36 | 31 | 19 | 19 | 14 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **47 P-Abwehr / 119 M-Abwehr**.

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
| P-Abwehr | 39 | 34 | 21 | 21 | 15 |
| M-Abwehr | 95 | 83 | 51 | 51 | 38 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **130 P-Abwehr / 318 M-Abwehr**.

**Umhang: Umhang – Heiler R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Numara-Set.** Thema: Numara – Wasser- oder Quellengeist; genaue Geschichte noch offen. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Feine Robe von Numara | Ruheweberhose von Numara | Hüterhaube von Numara | Lindernde Hände von Numara | Sanfte Schritte von Numara |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 54 | 47 | 29 | 29 | 21 |
| M-Abwehr | 133 | 115 | 71 | 71 | 53 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **180 P-Abwehr / 443 M-Abwehr**.

**Umhang: Mantel der Geborgenheit von Numara.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Jäger

Klassenlinie: Jäger / Schütze.

### Rang 1

Materialnamen.

| Wert | Leichtes Lederwams | Einfache Stoffhose | Stoffkapuze | Dünne Lederhandschuhe | Weiche Lederschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 8 | 6 | 4 | 4 | 3 |
| M-Abwehr | 8 | 7 | 4 | 4 | 3 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **25 P-Abwehr / 26 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Geschmeidige Lederjacke | Wildlederhose | Lederkapuze | Verstärkte Lederhandschuhe | Leichte Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 12 | 11 | 7 | 7 | 5 |
| M-Abwehr | 14 | 13 | 8 | 8 | 6 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **42 P-Abwehr / 49 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Genieteter Lederharnisch | Doppelt genähte Lederhose | Gefütterte Jagdkapuze | Flinkfingerhandschuhe | Weichsohlige Jagdstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 21 | 18 | 11 | 11 | 9 |
| M-Abwehr | 20 | 17 | 10 | 10 | 8 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **70 P-Abwehr / 65 M-Abwehr**.

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
| P-Abwehr | 51 | 44 | 27 | 27 | 21 |
| M-Abwehr | 49 | 43 | 26 | 26 | 20 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **170 P-Abwehr / 164 M-Abwehr**.

**Umhang: Umhang – Jäger R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Ferox – Wildes Feuer.** Thema: Ferox-Leder. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Wildbrandwams des Ferox | Dicklederhose des Ferox | Goldmähnenkapuze | Bestiengriff des Ferox | Glutpelzstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 76 | 66 | 41 | 41 | 30 |
| M-Abwehr | 63 | 55 | 34 | 34 | 25 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **254 P-Abwehr / 211 M-Abwehr**.

**Umhang: Flammenfellmantel des Ferox.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Kräuterkundler

Klassenlinie: Kräuterkundler / Witcher.

### Rang 1

Materialnamen.

| Wert | Einfache Lederjacke | Grobe Leinenhose | Stoffkappe | Arbeitshandschuhe | Abgetragene Lederschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 8 | 7 | 4 | 4 | 3 |
| M-Abwehr | 6 | 6 | 3 | 3 | 3 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **26 P-Abwehr / 21 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Robustes Reisewams | Gefütterte Lederhose | Wetterfeste Kapuze | Feste Lederhandschuhe | Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 14 | 13 | 8 | 8 | 6 |
| M-Abwehr | 11 | 9 | 6 | 6 | 4 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **49 P-Abwehr / 36 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Wachslederjacke | Dornenfeste Lederhose | Breitrandiger Lederhut | Verstärkte Arbeitshandschuhe | Wetterfeste Reisestiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 26 | 22 | 14 | 14 | 10 |
| M-Abwehr | 19 | 16 | 10 | 10 | 7 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **86 P-Abwehr / 62 M-Abwehr**.

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
| P-Abwehr | 59 | 51 | 32 | 31 | 24 |
| M-Abwehr | 49 | 42 | 26 | 26 | 19 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **197 P-Abwehr / 162 M-Abwehr**.

**Umhang: Umhang – Kräuterkundler R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Geisterrose – Rosenasche.** Thema: Geisterrose. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Aschfahle Robe der Geisterrose | Aschleinenhose der Geisterrose | Geisterrosenschleier | Alchemistenhandschuhe der Geisterrose | Aschpfadstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 80 | 69 | 43 | 43 | 32 |
| M-Abwehr | 63 | 55 | 34 | 34 | 25 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **267 P-Abwehr / 211 M-Abwehr**.

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
| P-Abwehr | 11 | 9 | 6 | 6 | 4 |
| M-Abwehr | 22 | 19 | 11 | 11 | 9 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **36 P-Abwehr / 72 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Bestickte Seidenrobe | Seidenhose | Bestickte Kapuze | Seidenhandschuhe | Schuhe aus Samt |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 20 | 17 | 11 | 10 | 8 |
| M-Abwehr | 44 | 38 | 23 | 23 | 17 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **66 P-Abwehr / 145 M-Abwehr**.

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
| P-Abwehr | 49 | 42 | 26 | 26 | 19 |
| M-Abwehr | 76 | 66 | 41 | 40 | 30 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **162 P-Abwehr / 253 M-Abwehr**.

**Umhang: Umhang – Luminet R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Morgenblüte – Zuflucht.** Thema: Morgenblüte. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Feine Robe der Morgenblüte | Beinkleid der Morgenblüte | Silberweberhaube der Morgenblüte | Bewahrerhandschuhe der Morgenblüte | Sanfte Schritte der Morgenblüte |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 65 | 56 | 34 | 34 | 26 |
| M-Abwehr | 106 | 92 | 57 | 57 | 42 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **215 P-Abwehr / 354 M-Abwehr**.

**Umhang: Blütenblauer Mantel der Morgenblüte.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Nachtjäger

Klassenlinie: Nachtjäger / Seelenjäger.

### Rang 1

Materialnamen.

| Wert | Leichtes Lederwams | Einfache Stoffhose | Stoffkapuze | Dünne Lederhandschuhe | Weiche Lederschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 6 | 5 | 3 | 3 | 3 |
| M-Abwehr | 6 | 5 | 3 | 3 | 2 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **20 P-Abwehr / 19 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Geschmeidige Lederjacke | Wildlederhose | Lederkapuze | Verstärkte Lederhandschuhe | Leichte Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 10 | 9 | 6 | 6 | 4 |
| M-Abwehr | 10 | 9 | 5 | 5 | 4 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **35 P-Abwehr / 33 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Genieteter Lederharnisch | Doppelt genähte Lederhose | Gefütterte Jagdkapuze | Flinkfingerhandschuhe | Weichsohlige Jagdstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 20 | 17 | 10 | 10 | 8 |
| M-Abwehr | 19 | 16 | 10 | 10 | 7 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **65 P-Abwehr / 62 M-Abwehr**.

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
| P-Abwehr | 47 | 41 | 25 | 25 | 19 |
| M-Abwehr | 44 | 38 | 24 | 24 | 18 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **157 P-Abwehr / 148 M-Abwehr**.

**Umhang: Umhang – Nachtjäger R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Nachtmahr.** Thema: Dunkles Leder, matte Schuppen und rauchgraue Jagdmotive. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Nachtmahrharnisch | Fährtenhose des Nachtmahrs | Nachtmahrkapuze | Seelengreifer des Nachtmahrs | Pirschstiefel des Nachtmahrs |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 59 | 52 | 32 | 32 | 24 |
| M-Abwehr | 57 | 50 | 30 | 30 | 23 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **199 P-Abwehr / 190 M-Abwehr**.

**Umhang: Schleiermantel des Nachtmahrs.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Ritter

Klassenlinie: Ritter / Tempelritter.

### Rang 1

Materialnamen.

| Wert | Gesteppte Stoffrüstung | Gefütterte Leinenhose | Gepolsterte Kappe | Dicke Lederhandschuhe | Feste Lederstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 13 | 12 | 7 | 7 | 5 |
| M-Abwehr | 9 | 7 | 5 | 5 | 3 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **44 P-Abwehr / 29 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Einfaches Kettenhemd | Verstärkte Lederhose | Eiserne Hirnhaube | Kettenhandschuhe | Beschlagene Stiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 18 | 15 | 10 | 9 | 7 |
| M-Abwehr | 17 | 14 | 9 | 9 | 7 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **59 P-Abwehr / 56 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Eiserner Plattenharnisch | Eiserner Beinschutz | Geschlossener Eisenhelm | Plattenhandschuhe | Eiserne Panzerschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 36 | 31 | 19 | 19 | 14 |
| M-Abwehr | 25 | 22 | 14 | 13 | 10 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **119 P-Abwehr / 84 M-Abwehr**.

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
| P-Abwehr | 95 | 83 | 51 | 51 | 38 |
| M-Abwehr | 62 | 53 | 33 | 33 | 25 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **318 P-Abwehr / 206 M-Abwehr**.

**Umhang: Umhang – Ritter R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Schwarzstahl – Bollwerk.** Thema: Schwarzstahl. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Schwarzstahl-Plattenharnisch | Geschlossener Schwarzstahlbeinschutz | Schwarzstahl-Visierhelm | Schwarzstahl-Panzerhandschuhe | Schwarzstahl-Panzerschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 133 | 115 | 71 | 71 | 53 |
| M-Abwehr | 86 | 75 | 46 | 46 | 35 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **443 P-Abwehr / 288 M-Abwehr**.

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
| P-Abwehr | 12 | 11 | 7 | 6 | 5 |
| M-Abwehr | 13 | 12 | 7 | 7 | 5 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **41 P-Abwehr / 44 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Bestickte Seidenrobe | Seidenhose | Bestickte Kapuze | Seidenhandschuhe | Schuhe aus Samt |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 22 | 19 | 11 | 11 | 9 |
| M-Abwehr | 18 | 15 | 10 | 9 | 7 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **72 P-Abwehr / 59 M-Abwehr**.

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
| P-Abwehr | 49 | 43 | 26 | 26 | 20 |
| M-Abwehr | 59 | 51 | 31 | 31 | 24 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **164 P-Abwehr / 196 M-Abwehr**.

**Umhang: Umhang – Ritualist R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Dämmerblüte – Letzte Anrufung.** Thema: Dämmerblüte. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Nachtweberrobe der Dämmerblüte | Aschenseidenhose der Dämmerblüte | Aschenhaube der Dämmerblüte | Schattenfadengreifer der Dämmerblüte | Ritualschuhe der Dämmerblüte |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 70 | 61 | 38 | 38 | 28 |
| M-Abwehr | 93 | 80 | 50 | 49 | 37 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **235 P-Abwehr / 309 M-Abwehr**.

**Umhang: Blutroter Mantel der Dämmerblüte.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Schamane

Klassenlinie: Schamane / Hochelfe.

### Rang 1

Materialnamen.

| Wert | Grobe Stofftunika | Leinenhose | Weiche Stoffkappe | Einfache Lederhandschuhe | Ledersandalen |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 8 | 7 | 5 | 4 | 3 |
| M-Abwehr | 7 | 6 | 4 | 4 | 3 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **27 P-Abwehr / 24 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Naturgefärbte Robe | Gewebte Wollhose | Fellbesetzte Kapuze | Wildlederhandschuhe | Gefütterte Mokassins |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 16 | 14 | 8 | 8 | 6 |
| M-Abwehr | 14 | 12 | 7 | 7 | 6 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **52 P-Abwehr / 46 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Robe aus Rindenfasern | Hose aus Nesseltuch | Federbesetzte Kapuze | Wurzelfaserhandschuhe | Geschmeidige Fellstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 30 | 26 | 16 | 16 | 12 |
| M-Abwehr | 26 | 23 | 14 | 14 | 11 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **100 P-Abwehr / 88 M-Abwehr**.

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
| P-Abwehr | 60 | 52 | 32 | 32 | 24 |
| M-Abwehr | 54 | 47 | 29 | 29 | 22 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **200 P-Abwehr / 181 M-Abwehr**.

**Umhang: Umhang – Schamane R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Erbe der Windrufer.** Thema: Gewebter Stoff, Leder, Ahnenzeichen und gefärbte Bänder. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Ahnengewand der Windrufer | Bandverzierte Wanderhose | Windrufmaske | Glutwickel der Ahnen | Schritte der Erdenrufer |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 83 | 72 | 44 | 44 | 33 |
| M-Abwehr | 74 | 64 | 40 | 39 | 30 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **276 P-Abwehr / 247 M-Abwehr**.

**Umhang: Ahnenmantel der vier Winde.** P-/M-Abwehr noch offen; 3 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

## Schurke

Klassenlinie: Schurke / Schattenkrieger.

### Rang 1

Materialnamen.

| Wert | Leichtes Lederwams | Einfache Stoffhose | Stoffkapuze | Dünne Lederhandschuhe | Weiche Lederschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 8 | 7 | 5 | 4 | 3 |
| M-Abwehr | 6 | 5 | 3 | 3 | 3 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **27 P-Abwehr / 20 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Geschmeidige Lederjacke | Wildlederhose | Lederkapuze | Verstärkte Lederhandschuhe | Leichte Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 13 | 12 | 7 | 7 | 5 |
| M-Abwehr | 12 | 11 | 7 | 6 | 5 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **44 P-Abwehr / 41 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Genieteter Lederharnisch | Doppelt genähte Lederhose | Gefütterte Jagdkapuze | Flinkfingerhandschuhe | Weichsohlige Jagdstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 17 | 14 | 9 | 9 | 7 |
| M-Abwehr | 19 | 16 | 10 | 10 | 7 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **56 P-Abwehr / 62 M-Abwehr**.

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
| P-Abwehr | 49 | 42 | 26 | 26 | 19 |
| M-Abwehr | 47 | 41 | 25 | 25 | 19 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **162 P-Abwehr / 157 M-Abwehr**.

**Umhang: Umhang – Schurke R5.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 6

**Set: Dämmerblüte – Lautlose Jagd.** Thema: Dämmerblüte. Fünf Rüstungsteile plus Umhang; Setboni und Herstellungsrezept noch offen.

| Wert | Nachtschuppenweste der Dämmerblüte | Nachtlederhose der Dämmerblüte | Schattenkapuze der Dämmerblüte | Schwarzschuppenhandschuhe der Dämmerblüte | Lautlose Stiefel der Dämmerblüte |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 81 | 70 | 43 | 43 | 32 |
| M-Abwehr | 59 | 52 | 32 | 32 | 24 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **269 P-Abwehr / 199 M-Abwehr**.

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

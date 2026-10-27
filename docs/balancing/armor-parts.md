# Rüstungsteile – gemeinsame Waffen-Rangkurve

Alle 65 R6-Einzelteile bleiben unverändert. R1–R5 werden pro Teil und Abwehrart rückwärts berechnet: R1→R2 +77 %, R2→R3 +75 %, R3→R4 +73 %, R4→R5 +71 %, R5→R6 +69 %. Nach jedem Schritt kaufmännisch auf zwei Nachkommastellen runden, intern mit ganzzahligen Hundertsteln rechnen. Setwerte sind die exakte Summe der fünf Teile. Die Spielanzeige darf ganze Zahlen zeigen; diese Anzeige darf nicht als Berechnungsgrundlage zurückfließen.

Nur direkte P-/M-Abwehr; Charakterwerte, Attribute, Passive, Steine, Zufallsboni und Schild werden separat addiert. Umhänge bleiben ohne festgelegte Abwehr. R1 ist nicht verbesserbar. Zusatzwertplätze und Sockel sind getrennte Systeme.

Aktuelle Definitionen gegen MongoDB geprüft.

## Gesamtwerte auf einen Blick

Je Zelle **P-Abwehr / M-Abwehr**, jeweils die Summe der fünf Rüstungsteile. Umhänge sind nicht enthalten. Über den Klassennamen geht es zu den Einzelteilen.

| Klasse | R1 | R2 | R3 | R4 | R5 | R6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [Abenteurer](#abenteurer) | 17.61 / 11.12 | 31.19 / 19.66 | 54.6 / 34.4 | 94.47 / 59.53 | 161.54 / 101.79 | 273 / 172 |
| [Butcher](#butcher) | 12.65 / 9.3 | 22.39 / 16.45 | 39.2 / 28.8 | 67.83 / 49.83 | 115.97 / 85.21 | 196 / 144 |
| [Druide](#druide) | 15.69 / 13.44 | 27.77 / 23.77 | 48.6 / 41.6 | 84.1 / 71.97 | 143.8 / 123.08 | 243 / 208 |
| [Gladiator](#gladiator) | 18.53 / 9.04 | 32.81 / 15.99 | 57.4 / 28 | 99.32 / 48.43 | 169.83 / 82.84 | 287 / 140 |
| [Heiler](#heiler) | 9.37 / 21.97 | 16.57 / 38.86 | 29 / 68 | 50.18 / 117.65 | 85.81 / 201.18 | 145 / 340 |
| [Jäger](#jäger) | 13.05 / 12.93 | 23.09 / 22.86 | 40.4 / 40 | 69.89 / 69.19 | 119.51 / 118.33 | 202 / 200 |
| [Kräuterkundler](#kräuterkundler) | 14.8 / 12.28 | 26.18 / 21.71 | 45.8 / 38 | 79.25 / 65.75 | 135.5 / 112.43 | 229 / 190 |
| [Luminet](#luminet) | 12.4 / 22.28 | 21.93 / 39.45 | 38.4 / 69 | 66.45 / 119.38 | 113.61 / 204.13 | 192 / 345 |
| [Nachtjäger](#nachtjäger) | 12.47 / 11.81 | 22.05 / 20.91 | 38.6 / 36.6 | 66.79 / 63.33 | 114.2 / 108.28 | 193 / 183 |
| [Ritter](#ritter) | 21.9 / 18.79 | 38.75 / 33.26 | 67.8 / 58.2 | 117.3 / 100.7 | 200.59 / 172.19 | 339 / 291 |
| [Ritualist](#ritualist) | 12.21 / 12.79 | 21.6 / 22.63 | 37.8 / 39.6 | 65.4 / 68.51 | 111.83 / 117.15 | 189 / 198 |
| [Schamane](#schamane) | 16.14 / 13.7 | 28.57 / 24.24 | 50 / 42.4 | 86.5 / 73.37 | 147.93 / 125.44 | 250 / 212 |
| [Schurke](#schurke) | 10.99 / 12.4 | 19.44 / 21.93 | 34 / 38.4 | 58.85 / 66.45 | 100.61 / 113.61 | 170 / 192 |

## Verteilungsregel für neue Rüstungen

R6 behält seine bisherigen ganzzahligen Einzelteile und damit die bestehende Verteilung Brust 30 %, Hose 26 %, Helm 16 %, Handschuhe 16 %, Schuhe 12 % einschließlich historischer Rundung. Niedrigere Ränge werden direkt aus diesen Teilen zurückgerechnet, statt Setwerte erneut ganzzahlig zu verteilen. Gemeinsame Berechnung: `services/armorRankProgression.js`.


## Abenteurer

Klassenlinie: Abenteurer / Scout.

### Rang 1

Materialnamen.

| Wert | Einfache Lederjacke | Grobe Leinenhose | Stoffkappe | Arbeitshandschuhe | Abgetragene Lederschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 5.29 | 4.58 | 2.84 | 2.77 | 2.13 |
| M-Abwehr | 3.36 | 2.9 | 1.75 | 1.75 | 1.36 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **17.61 P-Abwehr / 11.12 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Robustes Reisewams | Gefütterte Lederhose | Wetterfeste Kapuze | Feste Lederhandschuhe | Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 9.37 | 8.11 | 5.03 | 4.91 | 3.77 |
| M-Abwehr | 5.94 | 5.14 | 3.09 | 3.09 | 2.4 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **31.19 P-Abwehr / 19.66 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Wachslederjacke | Dornenfeste Lederhose | Breitrandiger Lederhut | Verstärkte Arbeitshandschuhe | Wetterfeste Reisestiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 16.4 | 14.2 | 8.8 | 8.6 | 6.6 |
| M-Abwehr | 10.4 | 9 | 5.4 | 5.4 | 4.2 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **54.6 P-Abwehr / 34.4 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Vielgeflickte Reisejacke | Hose der tausend Wege | Wetterkappe | Handschuhe des Finders | Weitläuferstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 28.37 | 24.57 | 15.23 | 14.88 | 11.42 |
| M-Abwehr | 17.99 | 15.57 | 9.35 | 9.35 | 7.27 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **94.47 P-Abwehr / 59.53 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Wandererleder – Brust R5 | Wandererleder – Hose R5 | Wandererleder – Helm R5 | Wandererleder – Handschuhe R5 | Wandererleder – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 48.52 | 42.01 | 26.04 | 25.44 | 19.53 |
| M-Abwehr | 30.77 | 26.63 | 15.98 | 15.98 | 12.43 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **161.54 P-Abwehr / 101.79 M-Abwehr**.

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
| P-Abwehr | 3.81 | 3.29 | 2 | 2 | 1.55 |
| M-Abwehr | 2.77 | 2.45 | 1.49 | 1.49 | 1.1 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **12.65 P-Abwehr / 9.3 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Verstärktes Lederwams | Robuste Fellhose | Offene Lederhaube | Nietenhandschuhe | Schwere Lederstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 6.74 | 5.83 | 3.54 | 3.54 | 2.74 |
| M-Abwehr | 4.91 | 4.34 | 2.63 | 2.63 | 1.94 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **22.39 P-Abwehr / 16.45 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Beschlagener Lederharnisch | Beinschutz aus Hartleder | Eisenbeschlagene Kappe | Panzerlederhandschuhe | Stiefel mit Eisenkappen |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 11.8 | 10.2 | 6.2 | 6.2 | 4.8 |
| M-Abwehr | 8.6 | 7.6 | 4.6 | 4.6 | 3.4 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **39.2 P-Abwehr / 28.8 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Panzer des Schlachtmeisters | Blutvernähte Beinschienen | Gebrochene Eisenmaske | Kettenwickel | Knochenbrecherstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 20.42 | 17.65 | 10.73 | 10.73 | 8.3 |
| M-Abwehr | 14.88 | 13.15 | 7.96 | 7.96 | 5.88 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **67.83 P-Abwehr / 49.83 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Schlächterplatten – Brust R5 | Schlächterplatten – Hose R5 | Schlächterplatten – Helm R5 | Schlächterplatten – Handschuhe R5 | Schlächterplatten – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 34.91 | 30.18 | 18.34 | 18.34 | 14.2 |
| M-Abwehr | 25.44 | 22.49 | 13.61 | 13.61 | 10.06 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **115.97 P-Abwehr / 85.21 M-Abwehr**.

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
| P-Abwehr | 4.71 | 4.07 | 2.52 | 2.52 | 1.87 |
| M-Abwehr | 4.07 | 3.49 | 2.13 | 2.13 | 1.62 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **15.69 P-Abwehr / 13.44 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Naturgefärbte Robe | Gewebte Wollhose | Fellbesetzte Kapuze | Wildlederhandschuhe | Gefütterte Mokassins |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 8.34 | 7.2 | 4.46 | 4.46 | 3.31 |
| M-Abwehr | 7.2 | 6.17 | 3.77 | 3.77 | 2.86 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **27.77 P-Abwehr / 23.77 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Robe aus Rindenfasern | Hose aus Nesseltuch | Federbesetzte Kapuze | Wurzelfaserhandschuhe | Geschmeidige Fellstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 14.6 | 12.6 | 7.8 | 7.8 | 5.8 |
| M-Abwehr | 12.6 | 10.8 | 6.6 | 6.6 | 5 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **48.6 P-Abwehr / 41.6 M-Abwehr**.

**Umhang: Gefütterter Stoffumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Rinde des alten Hains | Moosverwobene Hose | Krone des Jahreskreises | Hände des Wildwuchses | Wurzelpfad |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 25.26 | 21.8 | 13.5 | 13.5 | 10.04 |
| M-Abwehr | 21.8 | 18.68 | 11.42 | 11.42 | 8.65 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **84.1 P-Abwehr / 71.97 M-Abwehr**.

**Umhang: Feingewebter Reisemantel.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Naturgewand – Brust R5 | Naturgewand – Hose R5 | Naturgewand – Helm R5 | Naturgewand – Handschuhe R5 | Naturgewand – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 43.2 | 37.28 | 23.08 | 23.08 | 17.16 |
| M-Abwehr | 37.28 | 31.95 | 19.53 | 19.53 | 14.79 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **143.8 P-Abwehr / 123.08 M-Abwehr**.

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
| P-Abwehr | 5.55 | 4.84 | 2.97 | 2.97 | 2.2 |
| M-Abwehr | 2.71 | 2.39 | 1.42 | 1.42 | 1.1 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **18.53 P-Abwehr / 9.04 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Ringpanzerweste | Verstärkte Lederhose | Offener Eisenhelm | Nietenhandschuhe | Beschlagene Lederstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 9.83 | 8.57 | 5.26 | 5.26 | 3.89 |
| M-Abwehr | 4.8 | 4.23 | 2.51 | 2.51 | 1.94 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **32.81 P-Abwehr / 15.99 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Eiserne Brustplatte | Beinschienen aus Eisen | Eiserner Nasalhelm | Eisenhandschuhe | Schienenstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 17.2 | 15 | 9.2 | 9.2 | 6.8 |
| M-Abwehr | 8.4 | 7.4 | 4.4 | 4.4 | 3.4 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **57.4 P-Abwehr / 28 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Kürass des Herausforderers | Sandnarben-Beinschutz | Helm der letzten Runde | Siegergriff | Stiefel des Sandrings |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 29.76 | 25.95 | 15.92 | 15.92 | 11.77 |
| M-Abwehr | 14.53 | 12.8 | 7.61 | 7.61 | 5.88 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **99.32 P-Abwehr / 48.43 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Arenapanzer – Brust R5 | Arenapanzer – Hose R5 | Arenapanzer – Helm R5 | Arenapanzer – Handschuhe R5 | Arenapanzer – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 50.89 | 44.38 | 27.22 | 27.22 | 20.12 |
| M-Abwehr | 24.85 | 21.89 | 13.02 | 13.02 | 10.06 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **169.83 P-Abwehr / 82.84 M-Abwehr**.

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
| P-Abwehr | 2.84 | 2.45 | 1.49 | 1.49 | 1.1 |
| M-Abwehr | 6.59 | 5.75 | 3.49 | 3.49 | 2.65 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **9.37 P-Abwehr / 21.97 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Schlichte Wollrobe | Weiche Stoffhose | Wollkapuze | Feingewebte Handschuhe | Gefütterte Stoffschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 5.03 | 4.34 | 2.63 | 2.63 | 1.94 |
| M-Abwehr | 11.66 | 10.17 | 6.17 | 6.17 | 4.69 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **16.57 P-Abwehr / 38.86 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Bestickte Seidenrobe | Seidenhose | Bestickte Kapuze | Seidenhandschuhe | Schuhe aus Samt |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 8.8 | 7.6 | 4.6 | 4.6 | 3.4 |
| M-Abwehr | 20.4 | 17.8 | 10.8 | 10.8 | 8.2 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **29 P-Abwehr / 68 M-Abwehr**.

**Umhang: Gefütterter Stoffumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Robe der stillen Zuflucht | Leinen der Genesung | Haube des Morgenlichts | Hände der Barmherzigkeit | Pilgerschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 15.23 | 13.15 | 7.96 | 7.96 | 5.88 |
| M-Abwehr | 35.3 | 30.8 | 18.68 | 18.68 | 14.19 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **50.18 P-Abwehr / 117.65 M-Abwehr**.

**Umhang: Feingewebter Reisemantel.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Segensgewand – Brust R5 | Segensgewand – Hose R5 | Segensgewand – Helm R5 | Segensgewand – Handschuhe R5 | Segensgewand – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 26.04 | 22.49 | 13.61 | 13.61 | 10.06 |
| M-Abwehr | 60.36 | 52.66 | 31.95 | 31.95 | 24.26 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **85.81 P-Abwehr / 201.18 M-Abwehr**.

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
| P-Abwehr | 3.94 | 3.42 | 2.07 | 2.07 | 1.55 |
| M-Abwehr | 3.88 | 3.36 | 2.07 | 2.07 | 1.55 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **13.05 P-Abwehr / 12.93 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Geschmeidige Lederjacke | Wildlederhose | Lederkapuze | Verstärkte Lederhandschuhe | Leichte Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 6.97 | 6.06 | 3.66 | 3.66 | 2.74 |
| M-Abwehr | 6.86 | 5.94 | 3.66 | 3.66 | 2.74 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **23.09 P-Abwehr / 22.86 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Genieteter Lederharnisch | Doppelt genähte Lederhose | Gefütterte Jagdkapuze | Flinkfingerhandschuhe | Weichsohlige Jagdstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 12.2 | 10.6 | 6.4 | 6.4 | 4.8 |
| M-Abwehr | 12 | 10.4 | 6.4 | 6.4 | 4.8 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **40.4 P-Abwehr / 40 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Wams des langen Ansitzes | Farnläuferhose | Kapuze der Fährte | Sehnenschoner | Schuhe des Wildwechsels |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 21.11 | 18.34 | 11.07 | 11.07 | 8.3 |
| M-Abwehr | 20.76 | 17.99 | 11.07 | 11.07 | 8.3 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **69.89 P-Abwehr / 69.19 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Waldläuferleder – Brust R5 | Waldläuferleder – Hose R5 | Waldläuferleder – Helm R5 | Waldläuferleder – Handschuhe R5 | Waldläuferleder – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 36.09 | 31.36 | 18.93 | 18.93 | 14.2 |
| M-Abwehr | 35.5 | 30.77 | 18.93 | 18.93 | 14.2 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **119.51 P-Abwehr / 118.33 M-Abwehr**.

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
| P-Abwehr | 4.46 | 3.81 | 2.39 | 2.39 | 1.75 |
| M-Abwehr | 3.68 | 3.23 | 1.94 | 1.94 | 1.49 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **14.8 P-Abwehr / 12.28 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Robustes Reisewams | Gefütterte Lederhose | Wetterfeste Kapuze | Feste Lederhandschuhe | Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 7.89 | 6.74 | 4.23 | 4.23 | 3.09 |
| M-Abwehr | 6.51 | 5.71 | 3.43 | 3.43 | 2.63 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **26.18 P-Abwehr / 21.71 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Wachslederjacke | Dornenfeste Lederhose | Breitrandiger Lederhut | Verstärkte Arbeitshandschuhe | Wetterfeste Reisestiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 13.8 | 11.8 | 7.4 | 7.4 | 5.4 |
| M-Abwehr | 11.4 | 10 | 6 | 6 | 4.6 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **45.8 P-Abwehr / 38 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Schürze des Giftmischers | Dornenfeste Hose | Kapuze des Sammlers | Wurzelgreifer | Moorstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 23.88 | 20.42 | 12.8 | 12.8 | 9.35 |
| M-Abwehr | 19.73 | 17.3 | 10.38 | 10.38 | 7.96 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **79.25 P-Abwehr / 65.75 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Kräuterleder – Brust R5 | Kräuterleder – Hose R5 | Kräuterleder – Helm R5 | Kräuterleder – Handschuhe R5 | Kräuterleder – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 40.83 | 34.91 | 21.89 | 21.89 | 15.98 |
| M-Abwehr | 33.73 | 29.59 | 17.75 | 17.75 | 13.61 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **135.5 P-Abwehr / 112.43 M-Abwehr**.

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
| P-Abwehr | 3.68 | 3.23 | 2 | 2 | 1.49 |
| M-Abwehr | 6.72 | 5.81 | 3.55 | 3.55 | 2.65 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **12.4 P-Abwehr / 22.28 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Schlichte Wollrobe | Weiche Stoffhose | Wollkapuze | Feingewebte Handschuhe | Gefütterte Stoffschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 6.51 | 5.71 | 3.54 | 3.54 | 2.63 |
| M-Abwehr | 11.89 | 10.29 | 6.29 | 6.29 | 4.69 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **21.93 P-Abwehr / 39.45 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Bestickte Seidenrobe | Seidenhose | Bestickte Kapuze | Seidenhandschuhe | Schuhe aus Samt |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 11.4 | 10 | 6.2 | 6.2 | 4.6 |
| M-Abwehr | 20.8 | 18 | 11 | 11 | 8.2 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **38.4 P-Abwehr / 69 M-Abwehr**.

**Umhang: Gefütterter Stoffumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Mantel der Lichtbrechung | Sonnenseidenhose | Diadem des ersten Strahls | Prismenhandschuhe | Schritte der Dämmerung |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 19.73 | 17.3 | 10.73 | 10.73 | 7.96 |
| M-Abwehr | 35.99 | 31.14 | 19.03 | 19.03 | 14.19 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **66.45 P-Abwehr / 119.38 M-Abwehr**.

**Umhang: Feingewebter Reisemantel.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Lichtgewand – Brust R5 | Lichtgewand – Hose R5 | Lichtgewand – Helm R5 | Lichtgewand – Handschuhe R5 | Lichtgewand – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 33.73 | 29.59 | 18.34 | 18.34 | 13.61 |
| M-Abwehr | 61.54 | 53.25 | 32.54 | 32.54 | 24.26 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **113.61 P-Abwehr / 204.13 M-Abwehr**.

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
| P-Abwehr | 3.75 | 3.23 | 2 | 2 | 1.49 |
| M-Abwehr | 3.55 | 3.1 | 1.87 | 1.87 | 1.42 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **12.47 P-Abwehr / 11.81 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Geschmeidige Lederjacke | Wildlederhose | Lederkapuze | Verstärkte Lederhandschuhe | Leichte Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 6.63 | 5.71 | 3.54 | 3.54 | 2.63 |
| M-Abwehr | 6.29 | 5.49 | 3.31 | 3.31 | 2.51 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **22.05 P-Abwehr / 20.91 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Genieteter Lederharnisch | Doppelt genähte Lederhose | Gefütterte Jagdkapuze | Flinkfingerhandschuhe | Weichsohlige Jagdstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 11.6 | 10 | 6.2 | 6.2 | 4.6 |
| M-Abwehr | 11 | 9.6 | 5.8 | 5.8 | 4.4 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **38.6 P-Abwehr / 36.6 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Harnisch der verlorenen Spur | Nachtlederhose | Blick hinter den Schleier | Griff des Seelenfängers | Schritte des Verfolgten |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 20.07 | 17.3 | 10.73 | 10.73 | 7.96 |
| M-Abwehr | 19.03 | 16.61 | 10.04 | 10.04 | 7.61 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **66.79 P-Abwehr / 63.33 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Seelenjägerleder – Brust R5 | Seelenjägerleder – Hose R5 | Seelenjägerleder – Helm R5 | Seelenjägerleder – Handschuhe R5 | Seelenjägerleder – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 34.32 | 29.59 | 18.34 | 18.34 | 13.61 |
| M-Abwehr | 32.54 | 28.4 | 17.16 | 17.16 | 13.02 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **114.2 P-Abwehr / 108.28 M-Abwehr**.

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
| P-Abwehr | 6.59 | 5.68 | 3.49 | 3.49 | 2.65 |
| M-Abwehr | 5.62 | 4.91 | 3.03 | 2.97 | 2.26 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **21.9 P-Abwehr / 18.79 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Einfaches Kettenhemd | Verstärkte Lederhose | Eiserne Hirnhaube | Kettenhandschuhe | Beschlagene Stiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 11.66 | 10.06 | 6.17 | 6.17 | 4.69 |
| M-Abwehr | 9.94 | 8.69 | 5.37 | 5.26 | 4 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **38.75 P-Abwehr / 33.26 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Eiserner Plattenharnisch | Eiserner Beinschutz | Geschlossener Eisenhelm | Plattenhandschuhe | Eiserne Panzerschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 20.4 | 17.6 | 10.8 | 10.8 | 8.2 |
| M-Abwehr | 17.4 | 15.2 | 9.4 | 9.2 | 7 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **67.8 P-Abwehr / 58.2 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Eidwacht | Beinschutz des Bollwerks | Visier der Morgenwache | Handschuhe des Hüters | Stand des Unbeugsamen |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 35.3 | 30.45 | 18.68 | 18.68 | 14.19 |
| M-Abwehr | 30.11 | 26.3 | 16.26 | 15.92 | 12.11 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **117.3 P-Abwehr / 100.7 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Wächterplatten – Brust R5 | Wächterplatten – Hose R5 | Wächterplatten – Helm R5 | Wächterplatten – Handschuhe R5 | Wächterplatten – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 60.36 | 52.07 | 31.95 | 31.95 | 24.26 |
| M-Abwehr | 51.48 | 44.97 | 27.81 | 27.22 | 20.71 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **200.59 P-Abwehr / 172.19 M-Abwehr**.

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
| P-Abwehr | 3.68 | 3.16 | 1.94 | 1.94 | 1.49 |
| M-Abwehr | 3.81 | 3.29 | 2.07 | 2.07 | 1.55 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **12.21 P-Abwehr / 12.79 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Schlichte Wollrobe | Weiche Stoffhose | Wollkapuze | Feingewebte Handschuhe | Gefütterte Stoffschuhe |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 6.51 | 5.6 | 3.43 | 3.43 | 2.63 |
| M-Abwehr | 6.74 | 5.83 | 3.66 | 3.66 | 2.74 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **21.6 P-Abwehr / 22.63 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Bestickte Seidenrobe | Seidenhose | Bestickte Kapuze | Seidenhandschuhe | Schuhe aus Samt |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 11.4 | 9.8 | 6 | 6 | 4.6 |
| M-Abwehr | 11.8 | 10.2 | 6.4 | 6.4 | 4.8 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **37.8 P-Abwehr / 39.6 M-Abwehr**.

**Umhang: Gefütterter Stoffumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Gewand der letzten Anrufung | Ascheverwebte Hose | Schleier der Namenlosen | Opferhände | Schritte ins Jenseits |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 19.73 | 16.95 | 10.38 | 10.38 | 7.96 |
| M-Abwehr | 20.42 | 17.65 | 11.07 | 11.07 | 8.3 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **65.4 P-Abwehr / 68.51 M-Abwehr**.

**Umhang: Feingewebter Reisemantel.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Ritualgewand – Brust R5 | Ritualgewand – Hose R5 | Ritualgewand – Helm R5 | Ritualgewand – Handschuhe R5 | Ritualgewand – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 33.73 | 28.99 | 17.75 | 17.75 | 13.61 |
| M-Abwehr | 34.91 | 30.18 | 18.93 | 18.93 | 14.2 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **111.83 P-Abwehr / 117.15 M-Abwehr**.

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
| P-Abwehr | 4.84 | 4.2 | 2.58 | 2.58 | 1.94 |
| M-Abwehr | 4.13 | 3.55 | 2.2 | 2.2 | 1.62 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **16.14 P-Abwehr / 13.7 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Naturgefärbte Robe | Gewebte Wollhose | Fellbesetzte Kapuze | Wildlederhandschuhe | Gefütterte Mokassins |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 8.57 | 7.43 | 4.57 | 4.57 | 3.43 |
| M-Abwehr | 7.31 | 6.29 | 3.89 | 3.89 | 2.86 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **28.57 P-Abwehr / 24.24 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Robe aus Rindenfasern | Hose aus Nesseltuch | Federbesetzte Kapuze | Wurzelfaserhandschuhe | Geschmeidige Fellstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 15 | 13 | 8 | 8 | 6 |
| M-Abwehr | 12.8 | 11 | 6.8 | 6.8 | 5 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **50 P-Abwehr / 42.4 M-Abwehr**.

**Umhang: Gefütterter Stoffumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Gewand der Ahnenstimmen | Hose des Regentanzes | Maske der vier Winde | Glutbewahrer | Erdenwandler |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 25.95 | 22.49 | 13.84 | 13.84 | 10.38 |
| M-Abwehr | 22.15 | 19.03 | 11.77 | 11.77 | 8.65 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **86.5 P-Abwehr / 73.37 M-Abwehr**.

**Umhang: Feingewebter Reisemantel.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Geistergewand – Brust R5 | Geistergewand – Hose R5 | Geistergewand – Helm R5 | Geistergewand – Handschuhe R5 | Geistergewand – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 44.38 | 38.46 | 23.67 | 23.67 | 17.75 |
| M-Abwehr | 37.87 | 32.54 | 20.12 | 20.12 | 14.79 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **147.93 P-Abwehr / 125.44 M-Abwehr**.

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
| P-Abwehr | 3.29 | 2.84 | 1.75 | 1.75 | 1.36 |
| M-Abwehr | 3.68 | 3.23 | 2 | 2 | 1.49 |
| Bonusplatz 1 (später) | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **10.99 P-Abwehr / 12.4 M-Abwehr**.

### Rang 2

Materialnamen.

| Wert | Geschmeidige Lederjacke | Wildlederhose | Lederkapuze | Verstärkte Lederhandschuhe | Leichte Wanderstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 5.83 | 5.03 | 3.09 | 3.09 | 2.4 |
| M-Abwehr | 6.51 | 5.71 | 3.54 | 3.54 | 2.63 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **19.44 P-Abwehr / 21.93 M-Abwehr**.

### Rang 3

Materialnamen.

| Wert | Genieteter Lederharnisch | Doppelt genähte Lederhose | Gefütterte Jagdkapuze | Flinkfingerhandschuhe | Weichsohlige Jagdstiefel |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 10.2 | 8.8 | 5.4 | 5.4 | 4.2 |
| M-Abwehr | 11.4 | 10 | 6.2 | 6.2 | 4.6 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 (später) | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **34 P-Abwehr / 38.4 M-Abwehr**.

**Umhang: Wetterfester Lederumhang.** P-/M-Abwehr noch offen; 1 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 4

Übernommene Namensvorschläge.

| Wert | Wams der falschen Fährte | Verborgene Taschen | Maske ohne Namen | Schlossknackerhandschuhe | Lautlose Sohlen |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 17.65 | 15.23 | 9.35 | 9.35 | 7.27 |
| M-Abwehr | 19.73 | 17.3 | 10.73 | 10.73 | 7.96 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **58.85 P-Abwehr / 66.45 M-Abwehr**.

**Umhang: Geschmeidiger Lederumhang.** P-/M-Abwehr noch offen; 2 Zusatzwertplätze auf diesem Rang, sechs maximal vorbereitet. Nicht in der obigen Abwehrsumme enthalten.

### Rang 5

Arbeitsnamen, noch offen.

| Wert | Schattenleder – Brust R5 | Schattenleder – Hose R5 | Schattenleder – Helm R5 | Schattenleder – Handschuhe R5 | Schattenleder – Schuhe R5 |
| --- | ---: | ---: | ---: | ---: | ---: |
| P-Abwehr | 30.18 | 26.04 | 15.98 | 15.98 | 12.43 |
| M-Abwehr | 33.73 | 29.59 | 18.34 | 18.34 | 13.61 |
| Bonusplatz 1 | | | | | |
| Bonusplatz 2 | | | | | |
| Bonusplatz 3 (später) | | | | | |
| Bonusplatz 4 (später) | | | | | |
| Bonusplatz 5 (später) | | | | | |
| Bonusplatz 6 (später) | | | | | |

Gesamt: **100.61 P-Abwehr / 113.61 M-Abwehr**.

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

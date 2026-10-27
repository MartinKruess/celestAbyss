# Vorschlag: Physische Rüstung an R4 kalibrieren

Nur berechnet, keine Spielwerte geändert. R4 auf Level 60 bleibt pro Klasse der feste Anker. X = (Klassenbasis + 59 × Vita-Abwehrfaktor + R4-Rüstung) / 60. Ziel-Rüstung auf Level L = L × X − Klassenbasis − (L − 1) × Vita-Abwehrfaktor. R2/3/5/6 werden daraus auf 20/40/80/100 hoch- beziehungsweise heruntergerechnet. Keine Passiven, Buffs, Waffen/Schild, Zufallswerte, Upgrades oder Steine. Magische Abwehr ist nicht Gegenstand dieser Kalibrierung.

## Vorgeschlagene P-Abwehrsummen der fünf Rüstungsteile

R1 als separater Vorschlag unverändert übernehmen; R4 bleibt unverändert. Alle Summen sind ganzzahlig.

| Klasse | R1 / 1 | R2 / 20 | R3 / 40 | R4 / 60 | R5 / 80 | R6 / 100 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 30 | 50 | 105 | 161 | 217 | 272 |
| Butcher | 31 | 37 | 76 | 116 | 156 | 195 |
| Druide | 29 | 45 | 95 | 144 | 193 | 243 |
| Gladiator | 36 | 63 | 133 | 204 | 275 | 345 |
| Heiler | 18 | 27 | 57 | 86 | 115 | 145 |
| Kräuterkundler | 26 | 42 | 88 | 135 | 182 | 228 |
| Jäger | 25 | 36 | 78 | 119 | 160 | 202 |
| Ritter | 44 | 60 | 129 | 199 | 269 | 338 |
| Luminet | 21 | 36 | 75 | 114 | 153 | 192 |
| Ritualist | 23 | 35 | 74 | 112 | 150 | 189 |
| Schamane | 27 | 46 | 97 | 148 | 199 | 250 |
| Seelenjäger | 20 | 35 | 75 | 114 | 153 | 193 |
| Schurke | 27 | 31 | 65 | 100 | 135 | 169 |

Maximale verbleibende Levelabweichung für R2–R6 nach Rundung: 0,175 Level. Alle 78 Summen wurden auf monotone Rangfolge und exakte Verteilung auf fünf Teile geprüft. Alle 65 Punkte R2–R6 liegen innerhalb der rechnerischen Rundungstoleranz; R4 ist unverändert.

## R1 als separate Startausnahme

Die bestehenden R1-Werte werden vorläufig beibehalten. Sie geben auf Level 1 das folgende rechnerische Rüstungslevel. Ob dieser Startschutz angenehm ist, muss im Kampf mit Startgegnern geprüft werden.

| Klasse | R1 P-Abwehr | Rüstungslevel auf Level 1 |
| --- | ---: | ---: |
| Abenteurer | 30 | 9,296 |
| Butcher | 31 | 11,006 |
| Druide | 29 | 9,281 |
| Gladiator | 36 | 9,397 |
| Heiler | 18 | 7,885 |
| Kräuterkundler | 26 | 9,065 |
| Jäger | 25 | 9,499 |
| Ritter | 44 | 11,606 |
| Luminet | 21 | 7,945 |
| Ritualist | 23 | 8,672 |
| Schamane | 27 | 8,808 |
| Seelenjäger | 20 | 7,903 |
| Schurke | 27 | 10,922 |

## Abenteurer

X = 3,98 (intern ungerundet). Einzelteile in der Reihenfolge Brust / Hose / Helm / Handschuhe / Schuhe.

| Rang | Aktuell | Vorschlag | Änderung | Gesamt inkl. Charakter | Rüstungslevel | Fünf Teile |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| R1 | 30 | 30 | 0 | 37 | 9,296 | 9 / 8 / 5 / 5 / 3 |
| R2 | 54 | 50 | -4 | 79,8 | 20,05 | 15 / 13 / 8 / 8 / 6 |
| R3 | 99 | 105 | +6 | 158,8 | 39,899 | 31 / 27 / 17 / 17 / 13 |
| R4 | 161 | 161 | 0 | 238,8 | 60 | 48 / 42 / 26 / 26 / 19 |
| R5 | 228 | 217 | -11 | 318,8 | 80,101 | 65 / 56 / 35 / 35 / 26 |
| R6 | 302 | 272 | -30 | 397,8 | 99,95 | 82 / 71 / 43 / 43 / 33 |

## Butcher

X = 3,18 (intern ungerundet). Einzelteile in der Reihenfolge Brust / Hose / Helm / Handschuhe / Schuhe.

| Rang | Aktuell | Vorschlag | Änderung | Gesamt inkl. Charakter | Rüstungslevel | Fünf Teile |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| R1 | 31 | 31 | 0 | 35 | 11,006 | 9 / 8 / 5 / 5 / 4 |
| R2 | 44 | 37 | -7 | 63,8 | 20,063 | 11 / 10 / 6 / 6 / 4 |
| R3 | 59 | 76 | +17 | 126,8 | 39,874 | 23 / 20 / 12 / 12 / 9 |
| R4 | 116 | 116 | 0 | 190,8 | 60 | 35 / 30 / 19 / 18 / 14 |
| R5 | 196 | 156 | -40 | 254,8 | 80,126 | 47 / 40 / 25 / 25 / 19 |
| R6 | 309 | 195 | -114 | 317,8 | 99,937 | 59 / 51 / 31 / 31 / 23 |

## Druide

X = 3,663 (intern ungerundet). Einzelteile in der Reihenfolge Brust / Hose / Helm / Handschuhe / Schuhe.

| Rang | Aktuell | Vorschlag | Änderung | Gesamt inkl. Charakter | Rüstungslevel | Fünf Teile |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| R1 | 29 | 29 | 0 | 34 | 9,281 | 9 / 7 / 5 / 5 / 3 |
| R2 | 56 | 45 | -11 | 72,8 | 19,873 | 14 / 12 / 7 / 7 / 5 |
| R3 | 100 | 95 | -5 | 146,8 | 40,073 | 29 / 25 / 15 / 15 / 11 |
| R4 | 144 | 144 | 0 | 219,8 | 60 | 43 / 38 / 23 / 23 / 17 |
| R5 | 212 | 193 | -19 | 292,8 | 79,927 | 58 / 50 / 31 / 31 / 23 |
| R6 | 291 | 243 | -48 | 366,8 | 100,127 | 73 / 63 / 39 / 39 / 29 |

## Gladiator

X = 4,789 (intern ungerundet). Einzelteile in der Reihenfolge Brust / Hose / Helm / Handschuhe / Schuhe.

| Rang | Aktuell | Vorschlag | Änderung | Gesamt inkl. Charakter | Rüstungslevel | Fünf Teile |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| R1 | 36 | 36 | 0 | 45 | 9,397 | 11 / 9 / 6 / 6 / 4 |
| R2 | 72 | 63 | -9 | 95,94 | 20,033 | 19 / 16 / 10 / 10 / 8 |
| R3 | 145 | 133 | -12 | 191,14 | 39,912 | 40 / 35 / 21 / 21 / 16 |
| R4 | 204 | 204 | 0 | 287,34 | 60 | 61 / 53 / 33 / 33 / 24 |
| R5 | 253 | 275 | +22 | 383,54 | 80,088 | 83 / 71 / 44 / 44 / 33 |
| R6 | 354 | 345 | -9 | 478,74 | 99,967 | 104 / 90 / 55 / 55 / 41 |

## Heiler

X = 2,663 (intern ungerundet). Einzelteile in der Reihenfolge Brust / Hose / Helm / Handschuhe / Schuhe.

| Rang | Aktuell | Vorschlag | Änderung | Gesamt inkl. Charakter | Rüstungslevel | Fünf Teile |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| R1 | 18 | 18 | 0 | 21 | 7,885 | 5 / 5 / 3 / 3 / 2 |
| R2 | 28 | 27 | -1 | 52,8 | 19,825 | 8 / 7 / 5 / 4 / 3 |
| R3 | 47 | 57 | +10 | 106,8 | 40,1 | 17 / 15 / 9 / 9 / 7 |
| R4 | 86 | 86 | 0 | 159,8 | 60 | 26 / 22 / 14 / 14 / 10 |
| R5 | 130 | 115 | -15 | 212,8 | 79,9 | 35 / 30 / 18 / 18 / 14 |
| R6 | 180 | 145 | -35 | 266,8 | 100,175 | 44 / 38 / 23 / 23 / 17 |

## Kräuterkundler

X = 3,53 (intern ungerundet). Einzelteile in der Reihenfolge Brust / Hose / Helm / Handschuhe / Schuhe.

| Rang | Aktuell | Vorschlag | Änderung | Gesamt inkl. Charakter | Rüstungslevel | Fünf Teile |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| R1 | 26 | 26 | 0 | 32 | 9,065 | 8 / 7 / 4 / 4 / 3 |
| R2 | 49 | 42 | -7 | 70,8 | 20,057 | 12 / 11 / 7 / 7 / 5 |
| R3 | 86 | 88 | +2 | 140,8 | 39,887 | 26 / 23 / 14 / 14 / 11 |
| R4 | 135 | 135 | 0 | 211,8 | 60 | 40 / 35 / 22 / 22 / 16 |
| R5 | 197 | 182 | -15 | 282,8 | 80,113 | 55 / 47 / 29 / 29 / 22 |
| R6 | 267 | 228 | -39 | 352,8 | 99,943 | 68 / 59 / 37 / 37 / 27 |

## Jäger

X = 3,263 (intern ungerundet). Einzelteile in der Reihenfolge Brust / Hose / Helm / Handschuhe / Schuhe.

| Rang | Aktuell | Vorschlag | Änderung | Gesamt inkl. Charakter | Rüstungslevel | Fünf Teile |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| R1 | 25 | 25 | 0 | 31 | 9,499 | 8 / 6 / 4 / 4 / 3 |
| R2 | 42 | 36 | -6 | 64,8 | 19,857 | 11 / 9 / 6 / 6 / 4 |
| R3 | 70 | 78 | +8 | 130,8 | 40,082 | 23 / 20 / 13 / 13 / 9 |
| R4 | 119 | 119 | 0 | 195,8 | 60 | 36 / 31 / 19 / 19 / 14 |
| R5 | 170 | 160 | -10 | 260,8 | 79,918 | 48 / 42 / 26 / 25 / 19 |
| R6 | 254 | 202 | -52 | 326,8 | 100,143 | 61 / 53 / 32 / 32 / 24 |

## Ritter

X = 4,739 (intern ungerundet). Einzelteile in der Reihenfolge Brust / Hose / Helm / Handschuhe / Schuhe.

| Rang | Aktuell | Vorschlag | Änderung | Gesamt inkl. Charakter | Rüstungslevel | Fünf Teile |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| R1 | 44 | 44 | 0 | 55 | 11,606 | 13 / 12 / 7 / 7 / 5 |
| R2 | 59 | 60 | +1 | 94,94 | 20,034 | 18 / 16 / 10 / 9 / 7 |
| R3 | 119 | 129 | +10 | 189,14 | 39,911 | 39 / 33 / 21 / 21 / 15 |
| R4 | 199 | 199 | 0 | 284,34 | 60 | 59 / 52 / 32 / 32 / 24 |
| R5 | 318 | 269 | -49 | 379,54 | 80,089 | 81 / 70 / 43 / 43 / 32 |
| R6 | 443 | 338 | -105 | 473,74 | 99,966 | 101 / 88 / 54 / 54 / 41 |

## Luminet

X = 3,147 (intern ungerundet). Einzelteile in der Reihenfolge Brust / Hose / Helm / Handschuhe / Schuhe.

| Rang | Aktuell | Vorschlag | Änderung | Gesamt inkl. Charakter | Rüstungslevel | Fünf Teile |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| R1 | 21 | 21 | 0 | 25 | 7,945 | 6 / 6 / 3 / 3 / 3 |
| R2 | 36 | 36 | 0 | 62,8 | 19,958 | 11 / 9 / 6 / 6 / 4 |
| R3 | 66 | 75 | +9 | 125,8 | 39,979 | 23 / 19 / 12 / 12 / 9 |
| R4 | 114 | 114 | 0 | 188,8 | 60 | 34 / 30 / 18 / 18 / 14 |
| R5 | 162 | 153 | -9 | 251,8 | 80,021 | 46 / 40 / 25 / 24 / 18 |
| R6 | 215 | 192 | -23 | 314,8 | 100,042 | 57 / 50 / 31 / 31 / 23 |

## Ritualist

X = 3,113 (intern ungerundet). Einzelteile in der Reihenfolge Brust / Hose / Helm / Handschuhe / Schuhe.

| Rang | Aktuell | Vorschlag | Änderung | Gesamt inkl. Charakter | Rüstungslevel | Fünf Teile |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| R1 | 23 | 23 | 0 | 27 | 8,672 | 7 / 6 / 4 / 3 / 3 |
| R2 | 41 | 35 | -6 | 61,8 | 19,85 | 10 / 9 / 6 / 6 / 4 |
| R3 | 72 | 74 | +2 | 124,8 | 40,086 | 22 / 19 / 12 / 12 / 9 |
| R4 | 112 | 112 | 0 | 186,8 | 60 | 34 / 29 / 18 / 18 / 13 |
| R5 | 164 | 150 | -14 | 248,8 | 79,914 | 45 / 39 / 24 / 24 / 18 |
| R6 | 235 | 189 | -46 | 311,8 | 100,15 | 57 / 49 / 30 / 30 / 23 |

## Schamane

X = 3,747 (intern ungerundet). Einzelteile in der Reihenfolge Brust / Hose / Helm / Handschuhe / Schuhe.

| Rang | Aktuell | Vorschlag | Änderung | Gesamt inkl. Charakter | Rüstungslevel | Fünf Teile |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| R1 | 27 | 27 | 0 | 33 | 8,808 | 8 / 7 / 5 / 4 / 3 |
| R2 | 52 | 46 | -6 | 74,8 | 19,964 | 14 / 12 / 7 / 7 / 6 |
| R3 | 100 | 97 | -3 | 149,8 | 39,982 | 29 / 25 / 16 / 15 / 12 |
| R4 | 148 | 148 | 0 | 224,8 | 60 | 44 / 38 / 24 / 24 / 18 |
| R5 | 200 | 199 | -1 | 299,8 | 80,018 | 59 / 52 / 32 / 32 / 24 |
| R6 | 276 | 250 | -26 | 374,8 | 100,036 | 75 / 65 / 40 / 40 / 30 |

## Seelenjäger

X = 3,163 (intern ungerundet). Einzelteile in der Reihenfolge Brust / Hose / Helm / Handschuhe / Schuhe.

| Rang | Aktuell | Vorschlag | Änderung | Gesamt inkl. Charakter | Rüstungslevel | Fünf Teile |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| R1 | 20 | 20 | 0 | 25 | 7,903 | 6 / 5 / 3 / 3 / 3 |
| R2 | 35 | 35 | 0 | 62,8 | 19,852 | 10 / 9 / 6 / 6 / 4 |
| R3 | 65 | 75 | +10 | 126,8 | 40,084 | 23 / 19 / 12 / 12 / 9 |
| R4 | 114 | 114 | 0 | 189,8 | 60 | 34 / 30 / 18 / 18 / 14 |
| R5 | 157 | 153 | -4 | 252,8 | 79,916 | 46 / 40 / 25 / 24 / 18 |
| R6 | 199 | 193 | -6 | 316,8 | 100,148 | 58 / 50 / 31 / 31 / 23 |

## Schurke

X = 2,93 (intern ungerundet). Einzelteile in der Reihenfolge Brust / Hose / Helm / Handschuhe / Schuhe.

| Rang | Aktuell | Vorschlag | Änderung | Gesamt inkl. Charakter | Rüstungslevel | Fünf Teile |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| R1 | 27 | 27 | 0 | 32 | 10,922 | 8 / 7 / 5 / 4 / 3 |
| R2 | 44 | 31 | -13 | 58,8 | 20,068 | 9 / 8 / 5 / 5 / 4 |
| R3 | 56 | 65 | +9 | 116,8 | 39,863 | 20 / 17 / 10 / 10 / 8 |
| R4 | 100 | 100 | 0 | 175,8 | 60 | 30 / 26 / 16 / 16 / 12 |
| R5 | 162 | 135 | -27 | 234,8 | 80,137 | 40 / 35 / 22 / 22 / 16 |
| R6 | 269 | 169 | -100 | 292,8 | 99,932 | 51 / 44 / 27 / 27 / 20 |

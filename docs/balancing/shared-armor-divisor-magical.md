# Magische Abwehr: gemeinsamer Divisor aus dem R6-Median

Nur Analyse, keine Spielwerte geändert. X = Median der Gesamtabwehr auf Level 100 mit R6 / 100 = 324,8 / 100 = 3,248. Jede der 13 Klassen zählt einmal. Basisabwehr + Levelzuwachs + fünf Rüstungsteile auf +0; Level 1 ohne Rüstung. Keine Waffen/Schild, Skills, Buffs, Zufallswerte, Steine oder Upgrades. Alle Klassen verwenden denselben Divisor.

## Errechnete Rüstungslevel

| Klasse | 1 ohne Rüstung | 20 / R2 | 40 / R3 | 60 / R4 | 80 / R5 | 100 / R6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 2,771 | 18,719 | 37,192 | 55,357 | 73,83 | 92,303 |
| Butcher | 1,847 | 16,564 | 33,19 | 49,507 | 66,133 | 82,759 |
| Druide | 1,539 | 20,567 | 40,887 | 61,207 | 81,835 | 102,155 |
| Gladiator | 0,924 | 16,256 | 32,266 | 48,276 | 64,594 | 80,603 |
| Heiler | 4,002 | 29,187 | 58,128 | 87,069 | 116,318 | 145,259 |
| Kräuterkundler | 1,847 | 19,994 | 39,76 | 59,218 | 78,984 | 98,75 |
| Jäger | 2,463 | 20,961 | 41,712 | 62,463 | 83,522 | 104,273 |
| Ritter | 3,079 | 26,459 | 52,691 | 78,615 | 104,846 | 131,078 |
| Luminet | 2,463 | 29,187 | 58,128 | 87,069 | 116,318 | 145,259 |
| Ritualist | 2,463 | 20,259 | 40,271 | 59,975 | 79,988 | 100 |
| Schamane | 1,232 | 20,874 | 41,502 | 61,823 | 82,451 | 103,079 |
| Seelenjäger | 3,079 | 19,686 | 39,144 | 58,602 | 78,368 | 97,826 |
| Schurke | 2,463 | 19,643 | 39,347 | 58,744 | 78,448 | 98,153 |
| **Median** | 2,463 | 20,259 | 40,271 | 59,975 | 79,988 | 100 |

## Medianprüfung

| Level | Median Gesamtabwehr | Median Rüstungslevel | Abweichung Level | Median-Abwehr / Level |
| ---: | ---: | ---: | ---: | ---: |
| 1 | 8 | 2,463 | 1,463 | 8 |
| 20 | 65,8 | 20,259 | 0,259 | 3,29 |
| 40 | 130,8 | 40,271 | 0,271 | 3,27 |
| 60 | 194,8 | 59,975 | -0,025 | 3,247 |
| 80 | 259,8 | 79,988 | -0,012 | 3,248 |
| 100 | 324,8 | 100 | 0 | 3,248 |

## Individuelle Prüfung mit R4 auf Level 60 als Anker

Je Klasse eigener Divisor. Keine Änderungen übernommen.

| Klasse | 1 ohne Rüstung | 20 / R2 | 40 / R3 | 60 / R4 | 80 / R5 | 100 / R6 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 3,003 | 20,289 | 40,311 | 60 | 80,022 | 100,044 |
| Butcher | 2,239 | 20,075 | 40,224 | 60 | 80,149 | 100,299 |
| Druide | 1,509 | 20,161 | 40,08 | 60 | 80,221 | 100,141 |
| Gladiator | 1,148 | 20,204 | 40,102 | 60 | 80,281 | 100,179 |
| Heiler | 2,758 | 20,113 | 40,057 | 60 | 80,156 | 100,099 |
| Kräuterkundler | 1,872 | 20,258 | 40,285 | 60 | 80,027 | 100,054 |
| Jäger | 2,366 | 20,134 | 40,067 | 60 | 80,229 | 100,162 |
| Ritter | 2,35 | 20,194 | 40,215 | 60 | 80,02 | 100,041 |
| Luminet | 1,697 | 20,113 | 40,057 | 60 | 80,156 | 100,099 |
| Ritualist | 2,464 | 20,267 | 40,287 | 60 | 80,021 | 100,041 |
| Schamane | 1,195 | 20,259 | 40,279 | 60 | 80,02 | 100,04 |
| Seelenjäger | 3,152 | 20,156 | 40,078 | 60 | 80,237 | 100,16 |
| Schurke | 2,516 | 20,063 | 40,189 | 60 | 80,126 | 100,252 |

## Rechnerische magische Rüstungskorrekturen

Je Zelle aktuelle Summe → aufgerundetes Ziel, damit kein Rang unter seinem Ziel liegt. Nur Vorschlag, nicht gespeichert. R1 bleibt für den Starttest unangelegt.

| Klasse | R2 | R3 | R4 | R5 | R6 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 29 → 29 | 65 → 65 | 100 → 100 | 136 → 136 | 172 → 172 |
| Butcher | 25 → 25 | 55 → 55 | 84 → 84 | 114 → 114 | 144 → 144 |
| Druide | 39 → 39 | 81 → 81 | 123 → 123 | 166 → 166 | 208 → 208 |
| Gladiator | 27 → 27 | 55 → 55 | 83 → 83 | 112 → 112 | 140 → 140 |
| Heiler | 59 → 59 | 129 → 129 | 199 → 199 | 270 → 270 | 340 → 340 |
| Kräuterkundler | 35 → 35 | 74 → 74 | 112 → 112 | 151 → 151 | 190 → 190 |
| Jäger | 35 → 35 | 76 → 76 | 117 → 117 | 159 → 159 | 200 → 200 |
| Ritter | 52 → 52 | 112 → 112 | 171 → 171 | 231 → 231 | 291 → 291 |
| Luminet | 64 → 64 | 134 → 134 | 204 → 204 | 275 → 275 | 345 → 345 |
| Ritualist | 35 → 35 | 76 → 76 | 116 → 116 | 157 → 157 | 198 → 198 |
| Schamane | 41 → 41 | 84 → 84 | 126 → 126 | 169 → 169 | 212 → 212 |
| Seelenjäger | 30 → 30 | 68 → 68 | 106 → 106 | 145 → 145 | 183 → 183 |
| Schurke | 33 → 33 | 73 → 73 | 112 → 112 | 152 → 152 | 192 → 192 |

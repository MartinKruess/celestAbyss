# World-Monster: Abwehrprüfung mit neuer Monsterkurve

Nur Analyse, keine Spielwerte geändert. Aktuell 7 Wölfe und 11 Vögel, kein Golem. Bisherige Referenz Level 63; frühere Level-60-Spielerprobe verwendete nur Gegnerleben. Neue Prüfformel: Sweetspot = Monsterabwehr / (25/6); Verhältnis = Sweetspot / Spielerlevel; Variante A, 30 % bei 1, darunter 10 % + 20 % × Verhältnis, darüber 30 % + 100 % × (Verhältnis − 1), maximal 100 %. Geprüft gegen einen Spieler gleichen Levels.

## Aktuelle Level-60-Werte

| Variante | P-Abwehr | P-Sweetspot | P-Reduzierung | M-Abwehr | M-Sweetspot | M-Reduzierung |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Grimmiger Waldwolf | 111,12 | 26,67 | 18,89 % | 71,12 | 17,07 | 15,69 % |
| Frostklauenwolf | 124,46 | 29,87 | 19,96 % | 97,79 | 23,47 | 17,82 % |
| Schattenwolf | 93,34 | 22,4 | 17,47 % | 84,45 | 20,27 | 16,76 % |
| Sonnenfellwolf | 106,68 | 25,6 | 18,53 % | 106,68 | 25,6 | 18,53 % |
| Gewöhnlicher Grauwolf | 88,9 | 21,34 | 17,11 % | 62,23 | 14,94 | 14,98 % |
| Rotmähnenwolf | 102,23 | 24,54 | 18,18 % | 66,67 | 16 | 15,33 % |
| Nebelwolf | 93,34 | 22,4 | 17,47 % | 102,23 | 24,54 | 18,18 % |
| Silberschwingenkranich | 80,01 | 19,2 | 16,4 % | 115,57 | 27,74 | 19,25 % |
| Rotkammreißer | 97,79 | 23,47 | 17,82 % | 75,56 | 18,14 | 16,05 % |
| Blaufederkolben | 75,56 | 18,14 | 16,05 % | 111,12 | 26,67 | 18,89 % |
| Waldheinläufer | 84,45 | 20,27 | 16,76 % | 71,12 | 17,07 | 15,69 % |
| Düsterkrähenläufer | 88,9 | 21,34 | 17,11 % | 106,68 | 25,6 | 18,53 % |
| Himmelsfalk | 66,67 | 16 | 15,33 % | 80,01 | 19,2 | 16,4 % |
| Rotscheitelgleiter | 75,56 | 18,14 | 16,05 % | 75,56 | 18,14 | 16,05 % |
| Waldkronenschreiher | 62,23 | 14,94 | 14,98 % | 88,9 | 21,34 | 17,11 % |
| Schattenspitz | 71,12 | 17,07 | 15,69 % | 97,79 | 23,47 | 17,82 % |
| Felsenflügel | 111,12 | 26,67 | 18,89 % | 71,12 | 17,07 | 15,69 % |
| Mondvariante | 71,12 | 17,07 | 15,69 % | 124,46 | 29,87 | 19,96 % |

## Physische Abwehr: alter Verlauf gegenüber hypothetischer neuer Kurve

Je Zelle aktuell → Vorschlag. Vorschlag hält die Level-60-Stärke je Variante unverändert, verwendet ab Level 20 lineares Wachstum und darunter eine gesonderte Startkurve. Die neutrale Startkurve mit 3 Abwehr auf Level 10 ist nur ein Beispiel, keine beschlossene Einstellung.

| Variante | Level 1 | Level 10 | Level 20 | Level 60 | Level 100 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Grimmiger Waldwolf | 10,99 → 0,01 | 15,64 → 1,33 | 23,15 → 37,04 | 111,12 → 111,12 | 533,51 → 185,21 |
| Frostklauenwolf | 12,3 → 0,01 | 17,51 → 1,49 | 25,92 → 41,49 | 124,46 → 124,46 | 597,53 → 207,43 |
| Schattenwolf | 9,23 → 0,01 | 13,13 → 1,12 | 19,44 → 31,11 | 93,34 → 93,34 | 448,15 → 155,57 |
| Sonnenfellwolf | 10,55 → 0,01 | 15,01 → 1,28 | 22,22 → 35,56 | 106,68 → 106,68 | 512,17 → 177,8 |
| Gewöhnlicher Grauwolf | 8,79 → 0,01 | 12,51 → 1,07 | 18,52 → 29,63 | 88,9 → 88,9 | 426,81 → 148,17 |
| Rotmähnenwolf | 10,11 → 0,01 | 14,39 → 1,23 | 21,29 → 34,08 | 102,23 → 102,23 | 490,83 → 170,39 |
| Nebelwolf | 9,23 → 0,01 | 13,13 → 1,12 | 19,44 → 31,11 | 93,34 → 93,34 | 448,15 → 155,57 |
| Silberschwingenkranich | 7,91 → 0,01 | 11,26 → 0,96 | 16,67 → 26,67 | 80,01 → 80,01 | 384,13 → 133,35 |
| Rotkammreißer | 9,67 → 0,01 | 13,76 → 1,17 | 20,37 → 32,6 | 97,79 → 97,79 | 469,49 → 162,98 |
| Blaufederkolben | 7,47 → 0,01 | 10,63 → 0,91 | 15,74 → 25,19 | 75,56 → 75,56 | 362,79 → 125,94 |
| Waldheinläufer | 8,35 → 0,01 | 11,88 → 1,01 | 17,59 → 28,15 | 84,45 → 84,45 | 405,47 → 140,76 |
| Düsterkrähenläufer | 8,79 → 0,01 | 12,51 → 1,07 | 18,52 → 29,63 | 88,9 → 88,9 | 426,81 → 148,17 |
| Himmelsfalk | 6,59 → 0,01 | 9,38 → 0,8 | 13,89 → 22,22 | 66,67 → 66,67 | 320,11 → 111,12 |
| Rotscheitelgleiter | 7,47 → 0,01 | 10,63 → 0,91 | 15,74 → 25,19 | 75,56 → 75,56 | 362,79 → 125,94 |
| Waldkronenschreiher | 6,15 → 0,01 | 8,76 → 0,75 | 12,96 → 20,74 | 62,23 → 62,23 | 298,77 → 103,72 |
| Schattenspitz | 7,03 → 0,01 | 10,01 → 0,85 | 14,81 → 23,71 | 71,12 → 71,12 | 341,45 → 118,53 |
| Felsenflügel | 10,99 → 0,01 | 15,64 → 1,33 | 23,15 → 37,04 | 111,12 → 111,12 | 533,51 → 185,21 |
| Mondvariante | 7,03 → 0,01 | 10,01 → 0,85 | 14,81 → 23,71 | 71,12 → 71,12 | 341,45 → 118,53 |

Die 30-%-Referenz bei Level 60 ist 250 Abwehr. Niedrigere Variantenwerte dürfen bewusst weniger schützen; sie sind nicht automatisch Fehler. Aktuelle exponentielle Abwehr und neue lineare Grundkurve passen jedoch nicht über alle Level zusammen. Ein Level-60-Anker allein bestimmt die Einsteigerkurve nicht. Bei beibehaltener Mindestresistenz bleiben auch bei nahezu keiner Abwehr mindestens rund 10 % Reduzierung.

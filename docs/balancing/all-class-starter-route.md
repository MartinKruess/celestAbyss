# Alle Klassen: dieselbe Starterroute bis Gegnerlevel 10

- Probe auf Grundlage des groben Benutzerverlaufs, keine berechnete XP-Kurve. Eine Zeile ist eine eigenständige Begegnung; zusätzliche Wolfs-Kills für Levelaufstiege sind nicht als exakte XP-Anzahl modelliert.
- Alle Zeilen starten mit vollem Leben. Keine passive HP-Regeneration im Kampf, Heilung, aktiven Schadensskills, Begleiter, Buffs, Crits, Ausweichen, Bewegung, Aggrogruppen oder Verbrauchsgüter. Frühe Skillfreischaltungen und erlernte Stufen bleiben offen. Ergebnisse sind eine reine Auto-Attack-Referenz.
- Monsterfrequenz vorläufig 0,7 Angriffe/s (angenommene Grundfrequenz 1 × gespeicherter Tempofaktor 0,7), keine bestätigte Animationsfrequenz. Beide Seiten treffen erstmals nach ihrem eigenen Angriffsintervall; zeitgleiche Treffer zählen beide. Keine Monster-HP-Regeneration im Kampf.
- Wolfwerte aus aktuellen aufgelösten World-Templates. Kobolde als normale Wald-Krieger: Angriff 24, P-DEF 8, M-DEF 5 auf Level 1, danach vorhandene +4-%-Kurve. Keine neuen Goblinwerte in die Spieldaten geschrieben.
- Kobold-Leben ist noch undefiniert. Ausschließlich für Kampfdauer und Gesamtlebensverlust wird das Leben eines gleichleveligen erwachsenen Grauwolfs verwendet. Schaden pro Koboldtreffer hängt nicht von dieser HP-Annahme ab.
- Der gesamte Armschutzbonus wird gegen das tatsächliche Monsterlevel ausgewertet. Bei Gegnern über dem Heilerlevel können sowohl mit als auch ohne Armschutz bereits 0 % physische Reduktion gelten.
- Alle 13 vorhandenen Klassen mit ihrer aktuellen einzelnen R1-Klassenwaffe ab Level 1. Ritter ohne Schild; Schurke und Gladiator vor Level 10 ohne Nebenhand. Die Route endet auf Spielerlevel 9, also bleibt die bestätigte zweite Waffe ab Level 10 hier noch ohne Wirkung. Schamanen-Nebenhandfreischaltung wird nicht erfunden.
- Gleiche Gegner und Spielerlevel wie in der Heilerprobe, keine getrennte XP-Kurve je Klasse. Jeder Kampf beginnt mit vollem Leben. Nach dem ersten Level-3-Goblin wird genau der klassenspezifische R1-Armschutz angelegt; keine weiteren Rüstungsteile angenommen.
- Nahkampf-Grundfrequenz 1,3, Fernkampf/Magie 1,1; vollständige jeweilige R1-Waffentempoabzüge enthalten. Magier verwenden M-Angriff und M-Abwehr des Ziels, alle anderen normale physische Auto-Attacks gegen P-Abwehr. Erde/Feuer/Wasser/Wind-Skills, Heilung und Beschwörungen sind nicht enthalten.
- Die größere P-Abwehr einiger Gegner gegenüber ihrer M-Abwehr kann physische Klassen stärker bremsen. Gute Ergebnisse des Heilers sind deshalb ein Indiz, kein mathematischer Nachweis gleicher Ergebnisse aller Klassen.
- Die 15 Heilerkontrollen stimmen bei Kampfdauer, Lebensverlust, Trefferzahlen und Endleben mit dem bisherigen Heilerbericht überein. Kein Spiel- oder Datenbankwert verändert.

## Übersicht, sortiert nach höchstem Lebensverlust

| Klasse | Gewonnene Einzelkämpfe | Höchster Lebensverlust | Schwieriger Gegner | Spielerlevel dabei | Goblin L10 gegen Spieler L8 | Wolf L10 gegen Spieler L9 |
| --- | ---: | ---: | --- | ---: | ---: | ---: |
| Druide | 15/15 | 84,7 % | Grauwolf L3 | 2 | 43,5 % | 42,3 % |
| Schurke | 15/15 | 80,5 % | Grauwolf L3 | 2 | 45,4 % | 46,2 % |
| Heiler | 15/15 | 62,3 % | Grauwolf L3 | 2 | 37,6 % | 38,2 % |
| Schamane | 15/15 | 61,2 % | Grauwolf L3 | 2 | 40,9 % | 39 % |
| Seelenjäger | 15/15 | 55 % | Grauwolf L3 | 2 | 44,4 % | 44,5 % |
| Abenteurer | 15/15 | 50,6 % | Grauwolf L3 | 2 | 40,2 % | 38,4 % |
| Jäger | 15/15 | 43 % | Goblin L10 | 8 | 43 % | 40,9 % |
| Butcher | 15/15 | 42,8 % | Grauwolf L3 | 2 | 31,7 % | 24,4 % |
| Ritualist | 15/15 | 40,5 % | Grauwolf L3 | 2 | 36,1 % | 27,5 % |
| Luminet | 15/15 | 40,1 % | Grauwolf L3 | 2 | 35,9 % | 27,4 % |
| Kräuterkundler | 15/15 | 37,7 % | Grauwolf L3 | 2 | 34,4 % | 32,8 % |
| Ritter | 15/15 | 34,6 % | Grauwolf L3 | 2 | 25,9 % | 25,2 % |
| Gladiator | 15/15 | 28 % | Grauwolf L3 | 2 | 24,8 % | 24 % |

## Lebensverlust je Einzelkampf

| Gegner | Gegnerlevel | Spielerlevel | Abenteurer | Butcher | Druide | Gladiator | Heiler | Kräuterkundler | Jäger | Ritter | Luminet | Ritualist | Schamane | Seelenjäger | Schurke |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Welpe | 1 | 1 | 1,4 % | 1,9 % | 3,8 % | 0,9 % | 3,8 % | 1,6 % | 1,6 % | 1,4 % | 2,5 % | 2,5 % | 3 % | 2 % | 4,2 % |
| Jungtier | 2 | 2 | 5,4 % | 6,9 % | 10,2 % | 3,6 % | 11,7 % | 6 % | 2,9 % | 2,8 % | 8,6 % | 8,7 % | 5,6 % | 7,1 % | 7,4 % |
| Grauwolf | 3 | 2 | 50,6 % | 42,8 % | 84,7 % | 28 % | 62,3 % | 37,7 % | 36,3 % | 34,6 % | 40,1 % | 40,5 % | 61,2 % | 55 % | 80,5 % |
| Goblin | 3 | 3 | 23,3 % | 21,2 % | 35,4 % | 16,1 % | 33,2 % | 19,3 % | 18,6 % | 15,8 % | 25,8 % | 26 % | 30,1 % | 29,3 % | 38 % |
| Goblin | 4 | 4 | 20,1 % | 17,7 % | 29,1 % | 14,6 % | 26,9 % | 16,6 % | 16,6 % | 14,6 % | 21,1 % | 21,4 % | 25,7 % | 25,1 % | 26,6 % |
| Goblin | 5 | 4 | 32,7 % | 23 % | 37,8 % | 19 % | 34,7 % | 21,6 % | 21,5 % | 19 % | 27,5 % | 27,9 % | 33,4 % | 32,7 % | 43,3 % |
| Grauwolf | 5 | 5 | 23,7 % | 20,5 % | 33,8 % | 17,5 % | 29,8 % | 19,4 % | 19,3 % | 17,8 % | 24,1 % | 24,4 % | 24,1 % | 29 % | 30,5 % |
| Grauwolf | 6 | 6 | 24,8 % | 21,2 % | 34,9 % | 18,6 % | 29,7 % | 20,1 % | 20,1 % | 19,1 % | 24,5 % | 24,8 % | 25,2 % | 29,8 % | 31,2 % |
| Grauwolf | 7 | 6 | 30,1 % | 25,7 % | 42,4 % | 22,6 % | 33 % | 24,4 % | 32,5 % | 23,2 % | 29,7 % | 30,1 % | 38,3 % | 45,2 % | 47,4 % |
| Goblin | 8 | 7 | 27,6 % | 23,4 % | 38,6 % | 21,1 % | 28,5 % | 22,3 % | 29,7 % | 21,8 % | 26,7 % | 27 % | 35,2 % | 40,9 % | 34,2 % |
| Grauwolf | 8 | 7 | 30,4 % | 25,7 % | 42,4 % | 23,2 % | 31,3 % | 24,5 % | 32,6 % | 24 % | 29,4 % | 29,7 % | 38,6 % | 45 % | 47 % |
| Grauwolf | 9 | 8 | 30,6 % | 25,1 % | 42,4 % | 23,6 % | 29,8 % | 24,6 % | 32,7 % | 24,6 % | 28,4 % | 28,6 % | 38,9 % | 44,8 % | 46,6 % |
| Goblin | 9 | 8 | 27,8 % | 22,9 % | 38,6 % | 21,5 % | 27,1 % | 22,4 % | 29,8 % | 22,4 % | 25,9 % | 26 % | 35,4 % | 40,7 % | 33,9 % |
| Goblin | 10 | 8 | 40,2 % | 31,7 % | 43,5 % | 24,8 % | 37,6 % | 34,4 % | 43 % | 25,9 % | 35,9 % | 36,1 % | 40,9 % | 44,4 % | 45,4 % |
| Grauwolf | 10 | 9 | 38,4 % | 24,4 % | 42,3 % | 24 % | 38,2 % | 32,8 % | 40,9 % | 25,2 % | 27,4 % | 27,5 % | 39 % | 44,5 % | 46,2 % |

## Abenteurer

| Gegner | Gegnerlevel | Spielerlevel | Leben | P-DEF | Waffe | Angriffe/s | Schaden pro eigenem Treffer | Schaden pro Gegentreffer | Eigene / gegnerische Treffer | Dauer s | Verlust % | Ergebnis |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |
| Welpe | 1 | 1 | 172 | 7 | 2H Schwert | 1,1 | 17,6 | 2,5 | 3 / 1 | 2,7 | 1,4 % | player |
| Jungtier | 2 | 2 | 202 | 8,2 | 2H Schwert | 1,1 | 20,4 | 5,5 | 4 / 2 | 3,6 | 5,4 % | player |
| Grauwolf | 3 | 2 | 202 | 8,2 | 2H Schwert | 1,1 | 14,4 | 17 | 10 / 6 | 9 | 50,6 % | player |
| Goblin | 3 | 3 | 232 | 9,4 | 2H Schwert | 1,1 | 21 | 13,5 | 7 / 4 | 6,3 | 23,3 % | player |
| Goblin | 4 | 4 | 262 | 13,4 | 2H Schwert | 1,1 | 23,3 | 13,2 | 7 / 4 | 6,3 | 20,1 % | player |
| Goblin | 5 | 4 | 262 | 13,4 | 2H Schwert | 1,1 | 23,2 | 17,2 | 8 / 5 | 7,2 | 32,7 % | player |
| Grauwolf | 5 | 5 | 292 | 14,6 | 2H Schwert | 1,1 | 25 | 17,3 | 7 / 4 | 6,3 | 23,7 % | player |
| Grauwolf | 6 | 6 | 322 | 15,8 | 2H Schwert | 1,1 | 26,9 | 19,9 | 7 / 4 | 6,3 | 24,8 % | player |
| Grauwolf | 7 | 6 | 322 | 15,8 | 2H Schwert | 1,1 | 26,8 | 24,2 | 7 / 4 | 6,3 | 30,1 % | player |
| Goblin | 8 | 7 | 352 | 17 | 2H Schwert | 1,1 | 28,8 | 24,3 | 7 / 4 | 6,3 | 27,6 % | player |
| Grauwolf | 8 | 7 | 352 | 17 | 2H Schwert | 1,1 | 28,6 | 26,7 | 7 / 4 | 6,3 | 30,4 % | player |
| Grauwolf | 9 | 8 | 382 | 18,2 | 2H Schwert | 1,1 | 30,3 | 29,2 | 7 / 4 | 6,3 | 30,6 % | player |
| Goblin | 9 | 8 | 382 | 18,2 | 2H Schwert | 1,1 | 30,5 | 26,6 | 7 / 4 | 6,3 | 27,8 % | player |
| Goblin | 10 | 8 | 382 | 18,2 | 2H Schwert | 1,1 | 30,4 | 30,7 | 8 / 5 | 7,2 | 40,2 % | player |
| Grauwolf | 10 | 9 | 412 | 19,4 | 2H Schwert | 1,1 | 32 | 31,7 | 8 / 5 | 7,2 | 38,4 % | player |

## Butcher

| Gegner | Gegnerlevel | Spielerlevel | Leben | P-DEF | Waffe | Angriffe/s | Schaden pro eigenem Treffer | Schaden pro Gegentreffer | Eigene / gegnerische Treffer | Dauer s | Verlust % | Ergebnis |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |
| Welpe | 1 | 1 | 221 | 4 | 2H Axt | 1 | 29,3 | 4,3 | 2 / 1 | 1,9 | 1,9 % | player |
| Jungtier | 2 | 2 | 251 | 5,2 | 2H Axt | 1 | 33,2 | 8,6 | 3 / 2 | 2,9 | 6,9 % | player |
| Grauwolf | 3 | 2 | 251 | 5,2 | 2H Axt | 1 | 23,5 | 26,9 | 7 / 4 | 6,7 | 42,8 % | player |
| Goblin | 3 | 3 | 281 | 6,4 | 2H Axt | 1 | 33,5 | 19,9 | 5 / 3 | 4,8 | 21,2 % | player |
| Goblin | 4 | 4 | 311 | 9,6 | 2H Axt | 1 | 36,4 | 18,4 | 5 / 3 | 4,8 | 17,7 % | player |
| Goblin | 5 | 4 | 311 | 9,6 | 2H Axt | 1 | 36,2 | 23,9 | 5 / 3 | 4,8 | 23 % | player |
| Grauwolf | 5 | 5 | 341 | 10,8 | 2H Axt | 1 | 38,4 | 23,3 | 5 / 3 | 4,8 | 20,5 % | player |
| Grauwolf | 6 | 6 | 371 | 12 | 2H Axt | 1 | 40,6 | 26,2 | 5 / 3 | 4,8 | 21,2 % | player |
| Grauwolf | 7 | 6 | 371 | 12 | 2H Axt | 1 | 40,5 | 31,8 | 5 / 3 | 4,8 | 25,7 % | player |
| Goblin | 8 | 7 | 401 | 13,2 | 2H Axt | 1 | 42,9 | 31,3 | 5 / 3 | 4,8 | 23,4 % | player |
| Grauwolf | 8 | 7 | 401 | 13,2 | 2H Axt | 1 | 42,6 | 34,4 | 5 / 3 | 4,8 | 25,7 % | player |
| Grauwolf | 9 | 8 | 431 | 14,4 | 2H Axt | 1 | 44,6 | 36,1 | 5 / 3 | 4,8 | 25,1 % | player |
| Goblin | 9 | 8 | 431 | 14,4 | 2H Axt | 1 | 44,9 | 32,8 | 5 / 3 | 4,8 | 22,9 % | player |
| Goblin | 10 | 8 | 431 | 14,4 | 2H Axt | 1 | 44,8 | 34,2 | 6 / 4 | 5,8 | 31,7 % | player |
| Grauwolf | 10 | 9 | 461 | 15,6 | 2H Axt | 1 | 46,5 | 37,5 | 5 / 3 | 4,8 | 24,4 % | player |

## Druide

| Gegner | Gegnerlevel | Spielerlevel | Leben | P-DEF | Waffe | Angriffe/s | Schaden pro eigenem Treffer | Schaden pro Gegentreffer | Eigene / gegnerische Treffer | Dauer s | Verlust % | Ergebnis |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |
| Welpe | 1 | 1 | 183 | 5 | 2H Mace | 1,1 | 13,9 | 3,4 | 4 / 2 | 3,6 | 3,8 % | player |
| Jungtier | 2 | 2 | 213 | 6,2 | 2H Mace | 1,1 | 16,4 | 7,2 | 5 / 3 | 4,5 | 10,2 % | player |
| Grauwolf | 3 | 2 | 213 | 6,2 | 2H Mace | 1,1 | 11,6 | 22,5 | 13 / 8 | 11,8 | 84,7 % | player |
| Goblin | 3 | 3 | 243 | 7,4 | 2H Mace | 1,1 | 17,2 | 17,2 | 9 / 5 | 8,1 | 35,4 % | player |
| Goblin | 4 | 4 | 273 | 11,1 | 2H Mace | 1,1 | 19,3 | 15,9 | 8 / 5 | 7,2 | 29,1 % | player |
| Goblin | 5 | 4 | 273 | 11,1 | 2H Mace | 1,1 | 19,2 | 20,6 | 9 / 5 | 8,1 | 37,8 % | player |
| Grauwolf | 5 | 5 | 303 | 12,3 | 2H Mace | 1,1 | 21 | 20,5 | 8 / 5 | 7,2 | 33,8 % | player |
| Grauwolf | 6 | 6 | 333 | 13,5 | 2H Mace | 1,1 | 22,8 | 23,3 | 8 / 5 | 7,2 | 34,9 % | player |
| Grauwolf | 7 | 6 | 333 | 13,5 | 2H Mace | 1,1 | 22,7 | 28,2 | 9 / 5 | 8,1 | 42,4 % | player |
| Goblin | 8 | 7 | 363 | 14,7 | 2H Mace | 1,1 | 24,7 | 28 | 8 / 5 | 7,2 | 38,6 % | player |
| Grauwolf | 8 | 7 | 363 | 14,7 | 2H Mace | 1,1 | 24,5 | 30,8 | 9 / 5 | 8,1 | 42,4 % | player |
| Grauwolf | 9 | 8 | 393 | 15,9 | 2H Mace | 1,1 | 26,2 | 33,3 | 9 / 5 | 8,1 | 42,4 % | player |
| Goblin | 9 | 8 | 393 | 15,9 | 2H Mace | 1,1 | 26,4 | 30,3 | 8 / 5 | 7,2 | 38,6 % | player |
| Goblin | 10 | 8 | 393 | 15,9 | 2H Mace | 1,1 | 26,3 | 34,2 | 9 / 5 | 8,1 | 43,5 % | player |
| Grauwolf | 10 | 9 | 423 | 17,1 | 2H Mace | 1,1 | 27,8 | 35,8 | 9 / 5 | 8,1 | 42,3 % | player |

## Gladiator

| Gegner | Gegnerlevel | Spielerlevel | Leben | P-DEF | Waffe | Angriffe/s | Schaden pro eigenem Treffer | Schaden pro Gegentreffer | Eigene / gegnerische Treffer | Dauer s | Verlust % | Ergebnis |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |
| Welpe | 1 | 1 | 212 | 9 | 1H Axt | 1,2 | 18,3 | 1,9 | 3 / 1 | 2,6 | 0,9 % | player |
| Jungtier | 2 | 2 | 243,5 | 10,3 | 1H Axt | 1,2 | 21,3 | 4,4 | 4 / 2 | 3,4 | 3,6 % | player |
| Grauwolf | 3 | 2 | 243,5 | 10,3 | 1H Axt | 1,2 | 15 | 13,6 | 10 / 5 | 8,5 | 28 % | player |
| Goblin | 3 | 3 | 275 | 11,5 | 1H Axt | 1,2 | 21,9 | 11 | 7 / 4 | 6 | 16,1 % | player |
| Goblin | 4 | 4 | 306,5 | 15,8 | 1H Axt | 1,2 | 24,3 | 11,2 | 7 / 4 | 6 | 14,6 % | player |
| Goblin | 5 | 4 | 306,5 | 15,8 | 1H Axt | 1,2 | 24,2 | 14,6 | 7 / 4 | 6 | 19 % | player |
| Grauwolf | 5 | 5 | 338 | 17 | 1H Axt | 1,2 | 26,1 | 14,8 | 7 / 4 | 6 | 17,5 % | player |
| Grauwolf | 6 | 6 | 369,5 | 18,3 | 1H Axt | 1,2 | 28,1 | 17,2 | 7 / 4 | 6 | 18,6 % | player |
| Grauwolf | 7 | 6 | 369,5 | 18,3 | 1H Axt | 1,2 | 27,9 | 20,9 | 7 / 4 | 6 | 22,6 % | player |
| Goblin | 8 | 7 | 401 | 19,5 | 1H Axt | 1,2 | 30,1 | 21,1 | 7 / 4 | 6 | 21,1 % | player |
| Grauwolf | 8 | 7 | 401 | 19,5 | 1H Axt | 1,2 | 29,8 | 23,2 | 7 / 4 | 6 | 23,2 % | player |
| Grauwolf | 9 | 8 | 432,5 | 20,8 | 1H Axt | 1,2 | 31,6 | 25,5 | 7 / 4 | 6 | 23,6 % | player |
| Goblin | 9 | 8 | 432,5 | 20,8 | 1H Axt | 1,2 | 31,9 | 23,2 | 7 / 4 | 6 | 21,5 % | player |
| Goblin | 10 | 8 | 432,5 | 20,8 | 1H Axt | 1,2 | 31,8 | 26,8 | 8 / 4 | 6,8 | 24,8 % | player |
| Grauwolf | 10 | 9 | 464 | 22 | 1H Axt | 1,2 | 33,4 | 27,8 | 7 / 4 | 6 | 24 % | player |

## Heiler

| Gegner | Gegnerlevel | Spielerlevel | Leben | P-DEF | Waffe | Angriffe/s | Schaden pro eigenem Treffer | Schaden pro Gegentreffer | Eigene / gegnerische Treffer | Dauer s | Verlust % | Ergebnis |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |
| Welpe | 1 | 1 | 153 | 3 | Wand | 0,9 | 28,9 | 5,7 | 2 / 1 | 2,3 | 3,8 % | player |
| Jungtier | 2 | 2 | 183 | 4,2 | Wand | 0,9 | 31,9 | 10,7 | 3 / 2 | 3,4 | 11,7 % | player |
| Grauwolf | 3 | 2 | 183 | 4,2 | Wand | 0,9 | 28,7 | 28,5 | 6 / 4 | 6,8 | 62,3 % | player |
| Goblin | 3 | 3 | 213 | 5,4 | Wand | 0,9 | 33 | 23,6 | 5 / 3 | 5,7 | 33,2 % | player |
| Goblin | 4 | 4 | 243 | 8,1 | Wand | 0,9 | 35,3 | 21,8 | 5 / 3 | 5,7 | 26,9 % | player |
| Goblin | 5 | 4 | 243 | 8,1 | Wand | 0,9 | 35,2 | 28,1 | 5 / 3 | 5,7 | 34,7 % | player |
| Grauwolf | 5 | 5 | 273 | 9,3 | Wand | 0,9 | 36,7 | 27,1 | 5 / 3 | 5,7 | 29,8 % | player |
| Grauwolf | 6 | 6 | 303 | 10,5 | Wand | 0,9 | 38,6 | 30 | 5 / 3 | 5,7 | 29,7 % | player |
| Grauwolf | 7 | 6 | 303 | 10,5 | Wand | 0,9 | 38,5 | 33,4 | 5 / 3 | 5,7 | 33 % | player |
| Goblin | 8 | 7 | 333 | 11,7 | Wand | 0,9 | 40,9 | 31,6 | 5 / 3 | 5,7 | 28,5 % | player |
| Grauwolf | 8 | 7 | 333 | 11,7 | Wand | 0,9 | 40,4 | 34,7 | 5 / 3 | 5,7 | 31,3 % | player |
| Grauwolf | 9 | 8 | 363 | 12,9 | Wand | 0,9 | 42,1 | 36,1 | 5 / 3 | 5,7 | 29,8 % | player |
| Goblin | 9 | 8 | 363 | 12,9 | Wand | 0,9 | 42,6 | 32,8 | 5 / 3 | 5,7 | 27,1 % | player |
| Goblin | 10 | 8 | 363 | 12,9 | Wand | 0,9 | 42,5 | 34,2 | 6 / 4 | 6,8 | 37,6 % | player |
| Grauwolf | 10 | 9 | 393 | 14,1 | Wand | 0,9 | 43,9 | 37,5 | 6 / 4 | 6,8 | 38,2 % | player |

## Kräuterkundler

| Gegner | Gegnerlevel | Spielerlevel | Leben | P-DEF | Waffe | Angriffe/s | Schaden pro eigenem Treffer | Schaden pro Gegentreffer | Eigene / gegnerische Treffer | Dauer s | Verlust % | Ergebnis |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |
| Welpe | 1 | 1 | 176 | 6 | Wand | 0,9 | 28,9 | 2,9 | 2 / 1 | 2,3 | 1,6 % | player |
| Jungtier | 2 | 2 | 206 | 7,2 | Wand | 0,9 | 32 | 6,2 | 3 / 2 | 3,4 | 6 % | player |
| Grauwolf | 3 | 2 | 206 | 7,2 | Wand | 0,9 | 28,8 | 19,4 | 6 / 4 | 6,8 | 37,7 % | player |
| Goblin | 3 | 3 | 236 | 8,4 | Wand | 0,9 | 33,2 | 15,1 | 5 / 3 | 5,7 | 19,3 % | player |
| Goblin | 4 | 4 | 266 | 12 | Wand | 0,9 | 35,5 | 14,7 | 5 / 3 | 5,7 | 16,6 % | player |
| Goblin | 5 | 4 | 266 | 12 | Wand | 0,9 | 35,4 | 19,1 | 5 / 3 | 5,7 | 21,6 % | player |
| Grauwolf | 5 | 5 | 296 | 13,2 | Wand | 0,9 | 37 | 19,1 | 5 / 3 | 5,7 | 19,4 % | player |
| Grauwolf | 6 | 6 | 326 | 14,4 | Wand | 0,9 | 39 | 21,9 | 5 / 3 | 5,7 | 20,1 % | player |
| Grauwolf | 7 | 6 | 326 | 14,4 | Wand | 0,9 | 38,9 | 26,5 | 5 / 3 | 5,7 | 24,4 % | player |
| Goblin | 8 | 7 | 356 | 15,6 | Wand | 0,9 | 41,3 | 26,5 | 5 / 3 | 5,7 | 22,3 % | player |
| Grauwolf | 8 | 7 | 356 | 15,6 | Wand | 0,9 | 40,8 | 29,1 | 5 / 3 | 5,7 | 24,5 % | player |
| Grauwolf | 9 | 8 | 386 | 16,8 | Wand | 0,9 | 42,7 | 31,6 | 5 / 3 | 5,7 | 24,6 % | player |
| Goblin | 9 | 8 | 386 | 16,8 | Wand | 0,9 | 43,1 | 28,8 | 5 / 3 | 5,7 | 22,4 % | player |
| Goblin | 10 | 8 | 386 | 16,8 | Wand | 0,9 | 43,1 | 33,2 | 6 / 4 | 6,8 | 34,4 % | player |
| Grauwolf | 10 | 9 | 416 | 18 | Wand | 0,9 | 44,5 | 34,1 | 6 / 4 | 6,8 | 32,8 % | player |

## Jäger

| Gegner | Gegnerlevel | Spielerlevel | Leben | P-DEF | Waffe | Angriffe/s | Schaden pro eigenem Treffer | Schaden pro Gegentreffer | Eigene / gegnerische Treffer | Dauer s | Verlust % | Ergebnis |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |
| Welpe | 1 | 1 | 184 | 6 | Bow | 0,9 | 32,2 | 2,9 | 2 / 1 | 2,3 | 1,6 % | player |
| Jungtier | 2 | 2 | 214 | 7,2 | Bow | 0,9 | 34,8 | 6,2 | 2 / 1 | 2,3 | 2,9 % | player |
| Grauwolf | 3 | 2 | 214 | 7,2 | Bow | 0,9 | 24,6 | 19,4 | 6 / 4 | 6,8 | 36,3 % | player |
| Goblin | 3 | 3 | 244 | 8,4 | Bow | 0,9 | 33,5 | 15,1 | 5 / 3 | 5,7 | 18,6 % | player |
| Goblin | 4 | 4 | 274 | 11,7 | Bow | 0,9 | 34,8 | 15,1 | 5 / 3 | 5,7 | 16,6 % | player |
| Goblin | 5 | 4 | 274 | 11,7 | Bow | 0,9 | 34,7 | 19,7 | 5 / 3 | 5,7 | 21,5 % | player |
| Grauwolf | 5 | 5 | 304 | 12,9 | Bow | 0,9 | 35,3 | 19,6 | 5 / 3 | 5,7 | 19,3 % | player |
| Grauwolf | 6 | 6 | 334 | 14,1 | Bow | 0,9 | 35,8 | 22,4 | 5 / 3 | 5,7 | 20,1 % | player |
| Grauwolf | 7 | 6 | 334 | 14,1 | Bow | 0,9 | 35,7 | 27,1 | 6 / 4 | 6,8 | 32,5 % | player |
| Goblin | 8 | 7 | 364 | 15,3 | Bow | 0,9 | 36,4 | 27 | 6 / 4 | 6,8 | 29,7 % | player |
| Grauwolf | 8 | 7 | 364 | 15,3 | Bow | 0,9 | 36,1 | 29,7 | 6 / 4 | 6,8 | 32,6 % | player |
| Grauwolf | 9 | 8 | 394 | 16,5 | Bow | 0,9 | 36,4 | 32,2 | 6 / 4 | 6,8 | 32,7 % | player |
| Goblin | 9 | 8 | 394 | 16,5 | Bow | 0,9 | 36,7 | 29,3 | 6 / 4 | 6,8 | 29,8 % | player |
| Goblin | 10 | 8 | 394 | 16,5 | Bow | 0,9 | 36,6 | 33,9 | 7 / 5 | 8 | 43 % | player |
| Grauwolf | 10 | 9 | 424 | 17,7 | Bow | 0,9 | 36,7 | 34,7 | 7 / 5 | 8 | 40,9 % | player |

## Ritter

| Gegner | Gegnerlevel | Spielerlevel | Leben | P-DEF | Waffe | Angriffe/s | Schaden pro eigenem Treffer | Schaden pro Gegentreffer | Eigene / gegnerische Treffer | Dauer s | Verlust % | Ergebnis |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |
| Welpe | 1 | 1 | 231 | 11 | Sword | 1,2 | 12,4 | 1,6 | 5 / 2 | 4,3 | 1,4 % | player |
| Jungtier | 2 | 2 | 264 | 12,3 | Sword | 1,2 | 14,9 | 3,7 | 5 / 2 | 4,3 | 2,8 % | player |
| Grauwolf | 3 | 2 | 264 | 12,3 | Sword | 1,2 | 10,5 | 11,4 | 14 / 8 | 12 | 34,6 % | player |
| Goblin | 3 | 3 | 297 | 13,5 | Sword | 1,2 | 15,7 | 9,4 | 10 / 5 | 8,5 | 15,8 % | player |
| Goblin | 4 | 4 | 330 | 18,3 | Sword | 1,2 | 17,7 | 9,7 | 9 / 5 | 7,7 | 14,6 % | player |
| Goblin | 5 | 4 | 330 | 18,3 | Sword | 1,2 | 17,6 | 12,6 | 10 / 5 | 8,5 | 19 % | player |
| Grauwolf | 5 | 5 | 363 | 19,5 | Sword | 1,2 | 19,4 | 12,9 | 9 / 5 | 7,7 | 17,8 % | player |
| Grauwolf | 6 | 6 | 396 | 20,8 | Sword | 1,2 | 21,2 | 15,1 | 9 / 5 | 7,7 | 19,1 % | player |
| Grauwolf | 7 | 6 | 396 | 20,8 | Sword | 1,2 | 21,1 | 18,4 | 9 / 5 | 7,7 | 23,2 % | player |
| Goblin | 8 | 7 | 429 | 22,1 | Sword | 1,2 | 23 | 18,7 | 9 / 5 | 7,7 | 21,8 % | player |
| Grauwolf | 8 | 7 | 429 | 22,1 | Sword | 1,2 | 22,8 | 20,6 | 9 / 5 | 7,7 | 24 % | player |
| Grauwolf | 9 | 8 | 462 | 23,3 | Sword | 1,2 | 24,5 | 22,8 | 9 / 5 | 7,7 | 24,6 % | player |
| Goblin | 9 | 8 | 462 | 23,3 | Sword | 1,2 | 24,7 | 20,7 | 9 / 5 | 7,7 | 22,4 % | player |
| Goblin | 10 | 8 | 462 | 23,3 | Sword | 1,2 | 24,6 | 23,9 | 10 / 5 | 8,5 | 25,9 % | player |
| Grauwolf | 10 | 9 | 495 | 24,6 | Sword | 1,2 | 26,2 | 25 | 9 / 5 | 7,7 | 25,2 % | player |

## Luminet

| Gegner | Gegnerlevel | Spielerlevel | Leben | P-DEF | Waffe | Angriffe/s | Schaden pro eigenem Treffer | Schaden pro Gegentreffer | Eigene / gegnerische Treffer | Dauer s | Verlust % | Ergebnis |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |
| Welpe | 1 | 1 | 171 | 4 | Lichtstab | 0,9 | 30,5 | 4,3 | 2 / 1 | 2,3 | 2,5 % | player |
| Jungtier | 2 | 2 | 201 | 5,2 | Lichtstab | 0,9 | 33,6 | 8,6 | 3 / 2 | 3,4 | 8,6 % | player |
| Grauwolf | 3 | 2 | 201 | 5,2 | Lichtstab | 0,9 | 30,2 | 26,9 | 5 / 3 | 5,7 | 40,1 % | player |
| Goblin | 3 | 3 | 231 | 6,4 | Lichtstab | 0,9 | 34,7 | 19,9 | 5 / 3 | 5,7 | 25,8 % | player |
| Goblin | 4 | 4 | 261 | 9,6 | Lichtstab | 0,9 | 37 | 18,4 | 5 / 3 | 5,7 | 21,1 % | player |
| Goblin | 5 | 4 | 261 | 9,6 | Lichtstab | 0,9 | 36,8 | 23,9 | 5 / 3 | 5,7 | 27,5 % | player |
| Grauwolf | 5 | 5 | 291 | 10,8 | Lichtstab | 0,9 | 38,4 | 23,3 | 5 / 3 | 5,7 | 24,1 % | player |
| Grauwolf | 6 | 6 | 321 | 12 | Lichtstab | 0,9 | 40,3 | 26,2 | 5 / 3 | 5,7 | 24,5 % | player |
| Grauwolf | 7 | 6 | 321 | 12 | Lichtstab | 0,9 | 40,2 | 31,8 | 5 / 3 | 5,7 | 29,7 % | player |
| Goblin | 8 | 7 | 351 | 13,2 | Lichtstab | 0,9 | 42,6 | 31,3 | 5 / 3 | 5,7 | 26,7 % | player |
| Grauwolf | 8 | 7 | 351 | 13,2 | Lichtstab | 0,9 | 42,1 | 34,4 | 5 / 3 | 5,7 | 29,4 % | player |
| Grauwolf | 9 | 8 | 381 | 14,4 | Lichtstab | 0,9 | 43,8 | 36,1 | 5 / 3 | 5,7 | 28,4 % | player |
| Goblin | 9 | 8 | 381 | 14,4 | Lichtstab | 0,9 | 44,3 | 32,8 | 5 / 3 | 5,7 | 25,9 % | player |
| Goblin | 10 | 8 | 381 | 14,4 | Lichtstab | 0,9 | 44,2 | 34,2 | 6 / 4 | 6,8 | 35,9 % | player |
| Grauwolf | 10 | 9 | 411 | 15,6 | Lichtstab | 0,9 | 45,6 | 37,5 | 5 / 3 | 5,7 | 27,4 % | player |

## Ritualist

| Gegner | Gegnerlevel | Spielerlevel | Leben | P-DEF | Waffe | Angriffe/s | Schaden pro eigenem Treffer | Schaden pro Gegentreffer | Eigene / gegnerische Treffer | Dauer s | Verlust % | Ergebnis |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |
| Welpe | 1 | 1 | 169 | 4 | Victim-Stab | 0,9 | 30,5 | 4,3 | 2 / 1 | 2,3 | 2,5 % | player |
| Jungtier | 2 | 2 | 199 | 5,2 | Victim-Stab | 0,9 | 33,6 | 8,6 | 3 / 2 | 3,4 | 8,7 % | player |
| Grauwolf | 3 | 2 | 199 | 5,2 | Victim-Stab | 0,9 | 30,2 | 26,9 | 5 / 3 | 5,7 | 40,5 % | player |
| Goblin | 3 | 3 | 229 | 6,4 | Victim-Stab | 0,9 | 34,7 | 19,9 | 5 / 3 | 5,7 | 26 % | player |
| Goblin | 4 | 4 | 259 | 9,5 | Victim-Stab | 0,9 | 37 | 18,5 | 5 / 3 | 5,7 | 21,4 % | player |
| Goblin | 5 | 4 | 259 | 9,5 | Victim-Stab | 0,9 | 36,8 | 24 | 5 / 3 | 5,7 | 27,9 % | player |
| Grauwolf | 5 | 5 | 289 | 10,7 | Victim-Stab | 0,9 | 38,4 | 23,5 | 5 / 3 | 5,7 | 24,4 % | player |
| Grauwolf | 6 | 6 | 319 | 11,9 | Victim-Stab | 0,9 | 40,3 | 26,3 | 5 / 3 | 5,7 | 24,8 % | player |
| Grauwolf | 7 | 6 | 319 | 11,9 | Victim-Stab | 0,9 | 40,2 | 32 | 5 / 3 | 5,7 | 30,1 % | player |
| Goblin | 8 | 7 | 349 | 13,1 | Victim-Stab | 0,9 | 42,6 | 31,4 | 5 / 3 | 5,7 | 27 % | player |
| Grauwolf | 8 | 7 | 349 | 13,1 | Victim-Stab | 0,9 | 42,1 | 34,5 | 5 / 3 | 5,7 | 29,7 % | player |
| Grauwolf | 9 | 8 | 379 | 14,3 | Victim-Stab | 0,9 | 43,8 | 36,1 | 5 / 3 | 5,7 | 28,6 % | player |
| Goblin | 9 | 8 | 379 | 14,3 | Victim-Stab | 0,9 | 44,3 | 32,8 | 5 / 3 | 5,7 | 26 % | player |
| Goblin | 10 | 8 | 379 | 14,3 | Victim-Stab | 0,9 | 44,2 | 34,2 | 6 / 4 | 6,8 | 36,1 % | player |
| Grauwolf | 10 | 9 | 409 | 15,5 | Victim-Stab | 0,9 | 45,6 | 37,5 | 5 / 3 | 5,7 | 27,5 % | player |

## Schamane

| Gegner | Gegnerlevel | Spielerlevel | Leben | P-DEF | Waffe | Angriffe/s | Schaden pro eigenem Treffer | Schaden pro Gegentreffer | Eigene / gegnerische Treffer | Dauer s | Verlust % | Ergebnis |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |
| Welpe | 1 | 1 | 192 | 6 | Mace | 1,2 | 13,2 | 2,9 | 4 / 2 | 3,4 | 3 % | player |
| Jungtier | 2 | 2 | 222 | 7,2 | Mace | 1,2 | 15,7 | 6,2 | 5 / 2 | 4,3 | 5,6 % | player |
| Grauwolf | 3 | 2 | 222 | 7,2 | Mace | 1,2 | 11,1 | 19,4 | 13 / 7 | 11,1 | 61,2 % | player |
| Goblin | 3 | 3 | 252 | 8,4 | Mace | 1,2 | 16,6 | 15,1 | 9 / 5 | 7,7 | 30,1 % | player |
| Goblin | 4 | 4 | 282 | 12,2 | Mace | 1,2 | 18,7 | 14,5 | 9 / 5 | 7,7 | 25,7 % | player |
| Goblin | 5 | 4 | 282 | 12,2 | Mace | 1,2 | 18,6 | 18,8 | 9 / 5 | 7,7 | 33,4 % | player |
| Grauwolf | 5 | 5 | 312 | 13,4 | Mace | 1,2 | 20,5 | 18,8 | 8 / 4 | 6,8 | 24,1 % | player |
| Grauwolf | 6 | 6 | 342 | 14,6 | Mace | 1,2 | 22,4 | 21,6 | 8 / 4 | 6,8 | 25,2 % | player |
| Grauwolf | 7 | 6 | 342 | 14,6 | Mace | 1,2 | 22,3 | 26,2 | 9 / 5 | 7,7 | 38,3 % | player |
| Goblin | 8 | 7 | 372 | 15,8 | Mace | 1,2 | 24,3 | 26,2 | 9 / 5 | 7,7 | 35,2 % | player |
| Grauwolf | 8 | 7 | 372 | 15,8 | Mace | 1,2 | 24,1 | 28,7 | 9 / 5 | 7,7 | 38,6 % | player |
| Grauwolf | 9 | 8 | 402 | 17 | Mace | 1,2 | 25,9 | 31,3 | 9 / 5 | 7,7 | 38,9 % | player |
| Goblin | 9 | 8 | 402 | 17 | Mace | 1,2 | 26,1 | 28,4 | 9 / 5 | 7,7 | 35,4 % | player |
| Goblin | 10 | 8 | 402 | 17 | Mace | 1,2 | 26 | 32,9 | 9 / 5 | 7,7 | 40,9 % | player |
| Grauwolf | 10 | 9 | 432 | 18,2 | Mace | 1,2 | 27,6 | 33,7 | 9 / 5 | 7,7 | 39 % | player |

## Seelenjäger

| Gegner | Gegnerlevel | Spielerlevel | Leben | P-DEF | Waffe | Angriffe/s | Schaden pro eigenem Treffer | Schaden pro Gegentreffer | Eigene / gegnerische Treffer | Dauer s | Verlust % | Ergebnis |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |
| Welpe | 1 | 1 | 175 | 5 | Crossbow | 0,9 | 26,3 | 3,4 | 2 / 1 | 2,1 | 2 % | player |
| Jungtier | 2 | 2 | 205 | 6,2 | Crossbow | 0,9 | 28,5 | 7,2 | 3 / 2 | 3,2 | 7,1 % | player |
| Grauwolf | 3 | 2 | 205 | 6,2 | Crossbow | 0,9 | 20,1 | 22,5 | 8 / 5 | 8,6 | 55 % | player |
| Goblin | 3 | 3 | 235 | 7,4 | Crossbow | 0,9 | 27,4 | 17,2 | 6 / 4 | 6,4 | 29,3 % | player |
| Goblin | 4 | 4 | 265 | 10,6 | Crossbow | 0,9 | 28,5 | 16,6 | 6 / 4 | 6,4 | 25,1 % | player |
| Goblin | 5 | 4 | 265 | 10,6 | Crossbow | 0,9 | 28,4 | 21,6 | 6 / 4 | 6,4 | 32,7 % | player |
| Grauwolf | 5 | 5 | 295 | 11,8 | Crossbow | 0,9 | 28,8 | 21,4 | 6 / 4 | 6,4 | 29 % | player |
| Grauwolf | 6 | 6 | 325 | 13 | Crossbow | 0,9 | 29,3 | 24,2 | 6 / 4 | 6,4 | 29,8 % | player |
| Grauwolf | 7 | 6 | 325 | 13 | Crossbow | 0,9 | 29,2 | 29,4 | 7 / 5 | 7,5 | 45,2 % | player |
| Goblin | 8 | 7 | 355 | 14,2 | Crossbow | 0,9 | 29,8 | 29,1 | 7 / 5 | 7,5 | 40,9 % | player |
| Grauwolf | 8 | 7 | 355 | 14,2 | Crossbow | 0,9 | 29,5 | 31,9 | 7 / 5 | 7,5 | 45 % | player |
| Grauwolf | 9 | 8 | 385 | 15,4 | Crossbow | 0,9 | 29,8 | 34,5 | 8 / 5 | 8,6 | 44,8 % | player |
| Goblin | 9 | 8 | 385 | 15,4 | Crossbow | 0,9 | 30 | 31,4 | 7 / 5 | 7,5 | 40,7 % | player |
| Goblin | 10 | 8 | 385 | 15,4 | Crossbow | 0,9 | 29,9 | 34,2 | 8 / 5 | 8,6 | 44,4 % | player |
| Grauwolf | 10 | 9 | 415 | 16,6 | Crossbow | 0,9 | 30 | 36,9 | 8 / 5 | 8,6 | 44,5 % | player |

## Schurke

| Gegner | Gegnerlevel | Spielerlevel | Leben | P-DEF | Waffe | Angriffe/s | Schaden pro eigenem Treffer | Schaden pro Gegentreffer | Eigene / gegnerische Treffer | Dauer s | Verlust % | Ergebnis |
| --- | ---: | ---: | ---: | ---: | --- | ---: | ---: | ---: | --- | ---: | ---: | --- |
| Welpe | 1 | 1 | 166 | 5 | Dagger | 1,2 | 13,9 | 3,4 | 4 / 2 | 3,2 | 4,2 % | player |
| Jungtier | 2 | 2 | 196 | 6,2 | Dagger | 1,2 | 16,4 | 7,2 | 5 / 2 | 4 | 7,4 % | player |
| Grauwolf | 3 | 2 | 196 | 6,2 | Dagger | 1,2 | 11,6 | 22,5 | 13 / 7 | 10,5 | 80,5 % | player |
| Goblin | 3 | 3 | 226 | 7,4 | Dagger | 1,2 | 17,2 | 17,2 | 9 / 5 | 7,3 | 38 % | player |
| Goblin | 4 | 4 | 256 | 10,4 | Dagger | 1,2 | 19,3 | 17 | 8 / 4 | 6,5 | 26,6 % | player |
| Goblin | 5 | 4 | 256 | 10,4 | Dagger | 1,2 | 19,2 | 22,2 | 9 / 5 | 7,3 | 43,3 % | player |
| Grauwolf | 5 | 5 | 286 | 11,6 | Dagger | 1,2 | 21 | 21,8 | 8 / 4 | 6,5 | 30,5 % | player |
| Grauwolf | 6 | 6 | 316 | 12,8 | Dagger | 1,2 | 22,8 | 24,7 | 8 / 4 | 6,5 | 31,2 % | player |
| Grauwolf | 7 | 6 | 316 | 12,8 | Dagger | 1,2 | 22,7 | 29,9 | 9 / 5 | 7,3 | 47,4 % | player |
| Goblin | 8 | 7 | 346 | 14 | Dagger | 1,2 | 24,7 | 29,6 | 8 / 4 | 6,5 | 34,2 % | player |
| Grauwolf | 8 | 7 | 346 | 14 | Dagger | 1,2 | 24,5 | 32,5 | 9 / 5 | 7,3 | 47 % | player |
| Grauwolf | 9 | 8 | 376 | 15,2 | Dagger | 1,2 | 26,2 | 35 | 9 / 5 | 7,3 | 46,6 % | player |
| Goblin | 9 | 8 | 376 | 15,2 | Dagger | 1,2 | 26,4 | 31,9 | 8 / 4 | 6,5 | 33,9 % | player |
| Goblin | 10 | 8 | 376 | 15,2 | Dagger | 1,2 | 26,3 | 34,2 | 9 / 5 | 7,3 | 45,4 % | player |
| Grauwolf | 10 | 9 | 406 | 16,4 | Dagger | 1,2 | 27,8 | 37,5 | 9 / 5 | 7,3 | 46,2 % | player |

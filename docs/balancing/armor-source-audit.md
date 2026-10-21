# Rüstungen – Quellenprüfung und Einzelteil-Verteilung

Lesende Prüfung. Keine Spielwerte oder Originaldateien geändert. 13 Klassenreihen × 6 Ränge = 78 Gesamtzeilen und 312 abgeleitete Teilzeilen. Die aktuelle MongoDB enthält keine Rüstungsteile als Items; vorhanden sind die Werte der geretteten Tabelle EQ_Stats. Klassenbezug steht in der Quelle als Reihenüberschrift, nicht als Item-Beschränkung.

Vier Quellkürzel r/h/g/s, hier als Rüstung/Brust, Helm, Handschuhe und Schuhe interpretiert. Verteilung grundsätzlich 34/20/20/26 Prozent. Keine Hosenspalte. Direkte Lebens- und Mana-Boni sind nicht auf Einzelteile verteilt. Nachkommastellen sind die tatsächlich gespeicherten Werte; die Tabelle zeigt häufig gerundete Zahlen.

Prüfumfang: 1357 berechnete Formelzellen; 0 abweichende Formel-Caches; 0 nicht auswertbare Formeln; 4 Abweichungen zwischen Teil-Summe und Gesamtwert; 7 Teilwerte außerhalb der üblichen Verteilung; 0 Rang-Abnahmen; 0 Unterschiede zu den aktuellen Vergleichs-Gesamtwerten.

## Abweichende Summen der Einzelteile

| Klasse | Rang | Wert | Gesamt laut Quelle | Summe der Teile | Differenz | Zellenzeile |
| --- | ---: | --- | ---: | ---: | ---: | ---: |
| Butcher / Destroyer | 2 | M-Abwehr | 64 | 55,44 | -8,56 | 4 |
| Butcher / Destroyer | 3 | M-Abwehr | 97 | 80,62 | -16,38 | 5 |
| Butcher / Destroyer | 4 | M-Abwehr | 176 | 147,96 | -28,04 | 6 |
| Butcher / Destroyer | 5 | M-Abwehr | 245 | 233 | -12 | 7 |

## Abweichende Verteilungszellen

Erwartungswerte sind aus der durchgängigen 34/20/20/26-Prozent-Verteilung abgeleitet, keine bestätigten Korrekturen. Manuell gesetzte Werte können absichtliche Ausnahmen sein.

| Klasse | Rang | Teil | Wert | Zelle | Gespeichert | Nach üblicher Verteilung | Formel |
| --- | ---: | --- | --- | --- | ---: | ---: | --- |
| Butcher | 2 | Rüstung/Brust | M-Abwehr | L4 | 17 | 21,76 | Manuell |
| Butcher | 2 | Helm | M-Abwehr | M4 | 9 | 12,8 | Manuell |
| Butcher | 3 | Rüstung/Brust | M-Abwehr | L5 | 24 | 32,98 | Manuell |
| Butcher | 3 | Helm | M-Abwehr | M5 | 12 | 19,4 | Manuell |
| Butcher | 4 | Rüstung/Brust | M-Abwehr | L6 | 45 | 59,84 | Manuell |
| Butcher | 4 | Helm | M-Abwehr | M6 | 22 | 35,2 | Manuell |
| Butcher | 5 | Helm | M-Abwehr | M7 | 37 | 49 | Manuell |

## Größere Rang-Sprünge – zur Sichtprüfung

Mehr als eine Verdopplung ist kein nachgewiesener Rechenfehler.

| Klasse | Rangwechsel | Wert | Vorher | Nachher | Faktor |
| --- | --- | --- | ---: | ---: | ---: |
| Butcher | R1 → R2 | magicalDefense | 31 | 64 | 2,065 |
| Gladiator | R1 → R2 | physicalDefense | 56 | 113 | 2,018 |
| Gladiator | R1 → R2 | magicalDefense | 34 | 71 | 2,088 |
| Gladiator | R2 → R3 | physicalDefense | 113 | 227 | 2,009 |
| Tank | R2 → R3 | physicalDefense | 93 | 187 | 2,011 |
| Tank | R3 → R4 | magicalDefense | 131 | 267 | 2,038 |
| Villain | R1 → R2 | magicalDefense | 31 | 64 | 2,065 |
| Healer | R2 → R3 | magicalDefense | 93 | 187 | 2,011 |
| Lightmage | R1 → R2 | magicalDefense | 56 | 113 | 2,018 |
| Lightmage | R2 → R3 | magicalDefense | 113 | 227 | 2,009 |

## Alle Gesamtwerte

| Klasse | Rang | Direkt HP | Direkt MP | P-Abwehr | M-Abwehr | Vitalität | Willenskraft |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Butcher / Destroyer | 1 | 75 | 25 | 48 | 31 | 12 | 5 |
| Butcher / Destroyer | 2 | 100 | 35 | 69 | 64 | 20 | 9 |
| Butcher / Destroyer | 3 | 125 | 50 | 93 | 97 | 30 | 11 |
| Butcher / Destroyer | 4 | 150 | 75 | 181 | 176 | 40 | 15 |
| Butcher / Destroyer | 5 | 200 | 100 | 306 | 245 | 50 | 20 |
| Butcher / Destroyer | 6 | 300 | 150 | 483 | 312 | 60 | 25 |
| Gladiator / Berserker | 1 | 100 | 25 | 56 | 34 | 15 | 10 |
| Gladiator / Berserker | 2 | 150 | 35 | 113 | 71 | 20 | 15 |
| Gladiator / Berserker | 3 | 200 | 50 | 227 | 134 | 35 | 18 |
| Gladiator / Berserker | 4 | 250 | 75 | 319 | 237 | 50 | 22 |
| Gladiator / Berserker | 5 | 300 | 100 | 396 | 289 | 60 | 25 |
| Gladiator / Berserker | 6 | 350 | 150 | 554 | 349 | 80 | 30 |
| Ritter / Tempelritter | 1 | 150 | 25 | 69 | 45 | 20 | 12 |
| Ritter / Tempelritter | 2 | 200 | 35 | 93 | 88 | 30 | 17 |
| Ritter / Tempelritter | 3 | 250 | 50 | 187 | 131 | 40 | 22 |
| Ritter / Tempelritter | 4 | 300 | 75 | 312 | 267 | 50 | 25 |
| Ritter / Tempelritter | 5 | 350 | 100 | 498 | 323 | 75 | 30 |
| Ritter / Tempelritter | 6 | 400 | 150 | 693 | 451 | 100 | 40 |
| Schurke / Schattenkrieger | 1 | 50 | 25 | 42 | 31 | 10 | 10 |
| Schurke / Schattenkrieger | 2 | 75 | 35 | 69 | 64 | 15 | 15 |
| Schurke / Schattenkrieger | 3 | 100 | 50 | 88 | 97 | 20 | 18 |
| Schurke / Schattenkrieger | 4 | 125 | 75 | 156 | 176 | 25 | 22 |
| Schurke / Schattenkrieger | 5 | 175 | 100 | 253 | 245 | 35 | 25 |
| Schurke / Schattenkrieger | 6 | 250 | 150 | 421 | 312 | 50 | 30 |
| Ritualist / Blutmagier | 1 | 100 | 35 | 36 | 48 | 10 | 10 |
| Ritualist / Blutmagier | 2 | 150 | 50 | 64 | 69 | 15 | 15 |
| Ritualist / Blutmagier | 3 | 200 | 75 | 112 | 93 | 20 | 20 |
| Ritualist / Blutmagier | 4 | 250 | 100 | 176 | 181 | 25 | 25 |
| Ritualist / Blutmagier | 5 | 300 | 150 | 257 | 306 | 35 | 35 |
| Ritualist / Blutmagier | 6 | 350 | 200 | 368 | 483 | 50 | 50 |
| Heiler / Priester | 1 | 50 | 50 | 28 | 69 | 5 | 15 |
| Heiler / Priester | 2 | 75 | 75 | 44 | 93 | 10 | 20 |
| Heiler / Priester | 3 | 100 | 100 | 73 | 187 | 15 | 30 |
| Heiler / Priester | 4 | 125 | 150 | 134 | 312 | 20 | 40 |
| Heiler / Priester | 5 | 150 | 200 | 203 | 498 | 30 | 50 |
| Heiler / Priester | 6 | 175 | 250 | 282 | 693 | 40 | 60 |
| Luminet / Lichtmagier | 1 | 50 | 25 | 33 | 56 | 7 | 10 |
| Luminet / Lichtmagier | 2 | 75 | 35 | 57 | 113 | 12 | 15 |
| Luminet / Lichtmagier | 3 | 100 | 50 | 104 | 227 | 25 | 20 |
| Luminet / Lichtmagier | 4 | 150 | 75 | 178 | 319 | 30 | 25 |
| Luminet / Lichtmagier | 5 | 200 | 100 | 254 | 396 | 35 | 35 |
| Luminet / Lichtmagier | 6 | 250 | 150 | 336 | 554 | 45 | 50 |
| Kräuterkundler / Witcher | 1 | 50 | 25 | 41 | 33 | 10 | 12 |
| Kräuterkundler / Witcher | 2 | 75 | 50 | 77 | 56 | 15 | 20 |
| Kräuterkundler / Witcher | 3 | 100 | 75 | 134 | 97 | 20 | 30 |
| Kräuterkundler / Witcher | 4 | 150 | 100 | 212 | 176 | 25 | 40 |
| Kräuterkundler / Witcher | 5 | 200 | 150 | 308 | 254 | 35 | 50 |
| Kräuterkundler / Witcher | 6 | 300 | 200 | 418 | 330 | 50 | 60 |
| Jäger / Schütze | 1 | 50 | 25 | 39 | 40 | 10 | 10 |
| Jäger / Schütze | 2 | 75 | 35 | 65 | 77 | 15 | 15 |
| Jäger / Schütze | 3 | 100 | 50 | 109 | 102 | 20 | 20 |
| Jäger / Schütze | 4 | 125 | 75 | 187 | 183 | 25 | 25 |
| Jäger / Schütze | 5 | 150 | 100 | 266 | 256 | 35 | 35 |
| Jäger / Schütze | 6 | 200 | 150 | 398 | 330 | 45 | 45 |
| Schamane / Hochelfe | 1 | 50 | 25 | 43 | 38 | 12 | 12 |
| Schamane / Hochelfe | 2 | 100 | 35 | 82 | 72 | 20 | 20 |
| Schamane / Hochelfe | 3 | 150 | 50 | 156 | 138 | 30 | 30 |
| Schamane / Hochelfe | 4 | 200 | 75 | 232 | 197 | 40 | 40 |
| Schamane / Hochelfe | 5 | 225 | 100 | 313 | 283 | 50 | 50 |
| Schamane / Hochelfe | 6 | 275 | 150 | 432 | 386 | 60 | 60 |
| Druide / Alchemist | 1 | 50 | 25 | 45 | 36 | 10 | 12 |
| Druide / Alchemist | 2 | 75 | 35 | 87 | 69 | 15 | 20 |
| Druide / Alchemist | 3 | 100 | 50 | 156 | 122 | 20 | 30 |
| Druide / Alchemist | 4 | 125 | 75 | 225 | 192 | 25 | 40 |
| Druide / Alchemist | 5 | 150 | 100 | 331 | 273 | 35 | 50 |
| Druide / Alchemist | 6 | 225 | 150 | 456 | 368 | 50 | 60 |
| Nachtjäger / Seelenjäger | 1 | 50 | 25 | 31 | 30 | 10 | 5 |
| Nachtjäger / Seelenjäger | 2 | 75 | 35 | 54 | 51 | 15 | 9 |
| Nachtjäger / Seelenjäger | 3 | 100 | 50 | 102 | 97 | 18 | 11 |
| Nachtjäger / Seelenjäger | 4 | 125 | 75 | 178 | 166 | 22 | 15 |
| Nachtjäger / Seelenjäger | 5 | 150 | 100 | 245 | 231 | 25 | 20 |
| Nachtjäger / Seelenjäger | 6 | 200 | 150 | 312 | 298 | 30 | 25 |
| Abenteurer / Scout | 1 | 50 | 25 | 51 | 33 | 15 | 12 |
| Abenteurer / Scout | 2 | 75 | 35 | 92 | 57 | 25 | 20 |
| Abenteurer / Scout | 3 | 100 | 50 | 167 | 103 | 35 | 30 |
| Abenteurer / Scout | 4 | 150 | 75 | 273 | 178 | 45 | 40 |
| Abenteurer / Scout | 5 | 200 | 100 | 387 | 264 | 55 | 50 |
| Abenteurer / Scout | 6 | 250 | 150 | 512 | 330 | 70 | 60 |

## Alle abgeleiteten Einzelteile

Noch keine benannten Datenbank-Items. Leben und Mana bleiben ohne erfundene Slotzuweisung.

| Klasse | Rang | Teil | P-Abwehr | M-Abwehr | Vitalität | Willenskraft |
| --- | ---: | --- | ---: | ---: | ---: | ---: |
| Butcher / Destroyer | 1 | Rüstung/Brust | 16,32 | 10,54 | 4,08 | 1,7 |
| Butcher / Destroyer | 1 | Helm | 9,6 | 6,2 | 2,4 | 1 |
| Butcher / Destroyer | 1 | Handschuhe | 9,6 | 6,2 | 2,4 | 1 |
| Butcher / Destroyer | 1 | Schuhe | 12,48 | 8,06 | 3,12 | 1,3 |
| Butcher / Destroyer | 2 | Rüstung/Brust | 23,46 | 17 | 6,8 | 3,06 |
| Butcher / Destroyer | 2 | Helm | 13,8 | 9 | 4 | 1,8 |
| Butcher / Destroyer | 2 | Handschuhe | 13,8 | 12,8 | 4 | 1,8 |
| Butcher / Destroyer | 2 | Schuhe | 17,94 | 16,64 | 5,2 | 2,34 |
| Butcher / Destroyer | 3 | Rüstung/Brust | 31,62 | 24 | 10,2 | 3,74 |
| Butcher / Destroyer | 3 | Helm | 18,6 | 12 | 6 | 2,2 |
| Butcher / Destroyer | 3 | Handschuhe | 18,6 | 19,4 | 6 | 2,2 |
| Butcher / Destroyer | 3 | Schuhe | 24,18 | 25,22 | 7,8 | 2,86 |
| Butcher / Destroyer | 4 | Rüstung/Brust | 61,54 | 45 | 13,6 | 5,1 |
| Butcher / Destroyer | 4 | Helm | 36,2 | 22 | 8 | 3 |
| Butcher / Destroyer | 4 | Handschuhe | 36,2 | 35,2 | 8 | 3 |
| Butcher / Destroyer | 4 | Schuhe | 47,06 | 45,76 | 10,4 | 3,9 |
| Butcher / Destroyer | 5 | Rüstung/Brust | 104,04 | 83,3 | 17 | 6,8 |
| Butcher / Destroyer | 5 | Helm | 61,2 | 37 | 10 | 4 |
| Butcher / Destroyer | 5 | Handschuhe | 61,2 | 49 | 10 | 4 |
| Butcher / Destroyer | 5 | Schuhe | 79,56 | 63,7 | 13 | 5,2 |
| Butcher / Destroyer | 6 | Rüstung/Brust | 164,22 | 106,08 | 20,4 | 8,5 |
| Butcher / Destroyer | 6 | Helm | 96,6 | 62,4 | 12 | 5 |
| Butcher / Destroyer | 6 | Handschuhe | 96,6 | 62,4 | 12 | 5 |
| Butcher / Destroyer | 6 | Schuhe | 125,58 | 81,12 | 15,6 | 6,5 |
| Gladiator / Berserker | 1 | Rüstung/Brust | 19,04 | 11,56 | 5,1 | 3,4 |
| Gladiator / Berserker | 1 | Helm | 11,2 | 6,8 | 3 | 2 |
| Gladiator / Berserker | 1 | Handschuhe | 11,2 | 6,8 | 3 | 2 |
| Gladiator / Berserker | 1 | Schuhe | 14,56 | 8,84 | 3,9 | 2,6 |
| Gladiator / Berserker | 2 | Rüstung/Brust | 38,42 | 24,14 | 6,8 | 5,1 |
| Gladiator / Berserker | 2 | Helm | 22,6 | 14,2 | 4 | 3 |
| Gladiator / Berserker | 2 | Handschuhe | 22,6 | 14,2 | 4 | 3 |
| Gladiator / Berserker | 2 | Schuhe | 29,38 | 18,46 | 5,2 | 3,9 |
| Gladiator / Berserker | 3 | Rüstung/Brust | 77,18 | 45,56 | 11,9 | 6,12 |
| Gladiator / Berserker | 3 | Helm | 45,4 | 26,8 | 7 | 3,6 |
| Gladiator / Berserker | 3 | Handschuhe | 45,4 | 26,8 | 7 | 3,6 |
| Gladiator / Berserker | 3 | Schuhe | 59,02 | 34,84 | 9,1 | 4,68 |
| Gladiator / Berserker | 4 | Rüstung/Brust | 108,46 | 80,58 | 17 | 7,48 |
| Gladiator / Berserker | 4 | Helm | 63,8 | 47,4 | 10 | 4,4 |
| Gladiator / Berserker | 4 | Handschuhe | 63,8 | 47,4 | 10 | 4,4 |
| Gladiator / Berserker | 4 | Schuhe | 82,94 | 61,62 | 13 | 5,72 |
| Gladiator / Berserker | 5 | Rüstung/Brust | 134,64 | 98,26 | 20,4 | 8,5 |
| Gladiator / Berserker | 5 | Helm | 79,2 | 57,8 | 12 | 5 |
| Gladiator / Berserker | 5 | Handschuhe | 79,2 | 57,8 | 12 | 5 |
| Gladiator / Berserker | 5 | Schuhe | 102,96 | 75,14 | 15,6 | 6,5 |
| Gladiator / Berserker | 6 | Rüstung/Brust | 188,36 | 118,66 | 27,2 | 10,2 |
| Gladiator / Berserker | 6 | Helm | 110,8 | 69,8 | 16 | 6 |
| Gladiator / Berserker | 6 | Handschuhe | 110,8 | 69,8 | 16 | 6 |
| Gladiator / Berserker | 6 | Schuhe | 144,04 | 90,74 | 20,8 | 7,8 |
| Ritter / Tempelritter | 1 | Rüstung/Brust | 23,46 | 15,3 | 6,8 | 4,08 |
| Ritter / Tempelritter | 1 | Helm | 13,8 | 9 | 4 | 2,4 |
| Ritter / Tempelritter | 1 | Handschuhe | 13,8 | 9 | 4 | 2,4 |
| Ritter / Tempelritter | 1 | Schuhe | 17,94 | 11,7 | 5,2 | 3,12 |
| Ritter / Tempelritter | 2 | Rüstung/Brust | 31,62 | 29,92 | 10,2 | 5,78 |
| Ritter / Tempelritter | 2 | Helm | 18,6 | 17,6 | 6 | 3,4 |
| Ritter / Tempelritter | 2 | Handschuhe | 18,6 | 17,6 | 6 | 3,4 |
| Ritter / Tempelritter | 2 | Schuhe | 24,18 | 22,88 | 7,8 | 4,42 |
| Ritter / Tempelritter | 3 | Rüstung/Brust | 63,58 | 44,54 | 13,6 | 7,48 |
| Ritter / Tempelritter | 3 | Helm | 37,4 | 26,2 | 8 | 4,4 |
| Ritter / Tempelritter | 3 | Handschuhe | 37,4 | 26,2 | 8 | 4,4 |
| Ritter / Tempelritter | 3 | Schuhe | 48,62 | 34,06 | 10,4 | 5,72 |
| Ritter / Tempelritter | 4 | Rüstung/Brust | 106,08 | 90,78 | 17 | 8,5 |
| Ritter / Tempelritter | 4 | Helm | 62,4 | 53,4 | 10 | 5 |
| Ritter / Tempelritter | 4 | Handschuhe | 62,4 | 53,4 | 10 | 5 |
| Ritter / Tempelritter | 4 | Schuhe | 81,12 | 69,42 | 13 | 6,5 |
| Ritter / Tempelritter | 5 | Rüstung/Brust | 169,32 | 109,82 | 25,5 | 10,2 |
| Ritter / Tempelritter | 5 | Helm | 99,6 | 64,6 | 15 | 6 |
| Ritter / Tempelritter | 5 | Handschuhe | 99,6 | 64,6 | 15 | 6 |
| Ritter / Tempelritter | 5 | Schuhe | 129,48 | 83,98 | 19,5 | 7,8 |
| Ritter / Tempelritter | 6 | Rüstung/Brust | 235,62 | 153,34 | 34 | 13,6 |
| Ritter / Tempelritter | 6 | Helm | 138,6 | 90,2 | 20 | 8 |
| Ritter / Tempelritter | 6 | Handschuhe | 138,6 | 90,2 | 20 | 8 |
| Ritter / Tempelritter | 6 | Schuhe | 180,18 | 117,26 | 26 | 10,4 |
| Schurke / Schattenkrieger | 1 | Rüstung/Brust | 14,28 | 10,54 | 3,4 | 3,4 |
| Schurke / Schattenkrieger | 1 | Helm | 8,4 | 6,2 | 2 | 2 |
| Schurke / Schattenkrieger | 1 | Handschuhe | 8,4 | 6,2 | 2 | 2 |
| Schurke / Schattenkrieger | 1 | Schuhe | 10,92 | 8,06 | 2,6 | 2,6 |
| Schurke / Schattenkrieger | 2 | Rüstung/Brust | 23,46 | 21,76 | 5,1 | 5,1 |
| Schurke / Schattenkrieger | 2 | Helm | 13,8 | 12,8 | 3 | 3 |
| Schurke / Schattenkrieger | 2 | Handschuhe | 13,8 | 12,8 | 3 | 3 |
| Schurke / Schattenkrieger | 2 | Schuhe | 17,94 | 16,64 | 3,9 | 3,9 |
| Schurke / Schattenkrieger | 3 | Rüstung/Brust | 29,92 | 32,98 | 6,8 | 6,12 |
| Schurke / Schattenkrieger | 3 | Helm | 17,6 | 19,4 | 4 | 3,6 |
| Schurke / Schattenkrieger | 3 | Handschuhe | 17,6 | 19,4 | 4 | 3,6 |
| Schurke / Schattenkrieger | 3 | Schuhe | 22,88 | 25,22 | 5,2 | 4,68 |
| Schurke / Schattenkrieger | 4 | Rüstung/Brust | 53,04 | 59,84 | 8,5 | 7,48 |
| Schurke / Schattenkrieger | 4 | Helm | 31,2 | 35,2 | 5 | 4,4 |
| Schurke / Schattenkrieger | 4 | Handschuhe | 31,2 | 35,2 | 5 | 4,4 |
| Schurke / Schattenkrieger | 4 | Schuhe | 40,56 | 45,76 | 6,5 | 5,72 |
| Schurke / Schattenkrieger | 5 | Rüstung/Brust | 86,02 | 83,3 | 11,9 | 8,5 |
| Schurke / Schattenkrieger | 5 | Helm | 50,6 | 49 | 7 | 5 |
| Schurke / Schattenkrieger | 5 | Handschuhe | 50,6 | 49 | 7 | 5 |
| Schurke / Schattenkrieger | 5 | Schuhe | 65,78 | 63,7 | 9,1 | 6,5 |
| Schurke / Schattenkrieger | 6 | Rüstung/Brust | 143,14 | 106,08 | 17 | 10,2 |
| Schurke / Schattenkrieger | 6 | Helm | 84,2 | 62,4 | 10 | 6 |
| Schurke / Schattenkrieger | 6 | Handschuhe | 84,2 | 62,4 | 10 | 6 |
| Schurke / Schattenkrieger | 6 | Schuhe | 109,46 | 81,12 | 13 | 7,8 |
| Ritualist / Blutmagier | 1 | Rüstung/Brust | 12,24 | 16,32 | 3,4 | 3,4 |
| Ritualist / Blutmagier | 1 | Helm | 7,2 | 9,6 | 2 | 2 |
| Ritualist / Blutmagier | 1 | Handschuhe | 7,2 | 9,6 | 2 | 2 |
| Ritualist / Blutmagier | 1 | Schuhe | 9,36 | 12,48 | 2,6 | 2,6 |
| Ritualist / Blutmagier | 2 | Rüstung/Brust | 21,76 | 23,46 | 5,1 | 5,1 |
| Ritualist / Blutmagier | 2 | Helm | 12,8 | 13,8 | 3 | 3 |
| Ritualist / Blutmagier | 2 | Handschuhe | 12,8 | 13,8 | 3 | 3 |
| Ritualist / Blutmagier | 2 | Schuhe | 16,64 | 17,94 | 3,9 | 3,9 |
| Ritualist / Blutmagier | 3 | Rüstung/Brust | 38,08 | 31,62 | 6,8 | 6,8 |
| Ritualist / Blutmagier | 3 | Helm | 22,4 | 18,6 | 4 | 4 |
| Ritualist / Blutmagier | 3 | Handschuhe | 22,4 | 18,6 | 4 | 4 |
| Ritualist / Blutmagier | 3 | Schuhe | 29,12 | 24,18 | 5,2 | 5,2 |
| Ritualist / Blutmagier | 4 | Rüstung/Brust | 59,84 | 61,54 | 8,5 | 8,5 |
| Ritualist / Blutmagier | 4 | Helm | 35,2 | 36,2 | 5 | 5 |
| Ritualist / Blutmagier | 4 | Handschuhe | 35,2 | 36,2 | 5 | 5 |
| Ritualist / Blutmagier | 4 | Schuhe | 45,76 | 47,06 | 6,5 | 6,5 |
| Ritualist / Blutmagier | 5 | Rüstung/Brust | 87,38 | 104,04 | 11,9 | 11,9 |
| Ritualist / Blutmagier | 5 | Helm | 51,4 | 61,2 | 7 | 7 |
| Ritualist / Blutmagier | 5 | Handschuhe | 51,4 | 61,2 | 7 | 7 |
| Ritualist / Blutmagier | 5 | Schuhe | 66,82 | 79,56 | 9,1 | 9,1 |
| Ritualist / Blutmagier | 6 | Rüstung/Brust | 125,12 | 164,22 | 17 | 17 |
| Ritualist / Blutmagier | 6 | Helm | 73,6 | 96,6 | 10 | 10 |
| Ritualist / Blutmagier | 6 | Handschuhe | 73,6 | 96,6 | 10 | 10 |
| Ritualist / Blutmagier | 6 | Schuhe | 95,68 | 125,58 | 13 | 13 |
| Heiler / Priester | 1 | Rüstung/Brust | 9,52 | 23,46 | 1,7 | 5,1 |
| Heiler / Priester | 1 | Helm | 5,6 | 13,8 | 1 | 3 |
| Heiler / Priester | 1 | Handschuhe | 5,6 | 13,8 | 1 | 3 |
| Heiler / Priester | 1 | Schuhe | 7,28 | 17,94 | 1,3 | 3,9 |
| Heiler / Priester | 2 | Rüstung/Brust | 14,96 | 31,62 | 3,4 | 6,8 |
| Heiler / Priester | 2 | Helm | 8,8 | 18,6 | 2 | 4 |
| Heiler / Priester | 2 | Handschuhe | 8,8 | 18,6 | 2 | 4 |
| Heiler / Priester | 2 | Schuhe | 11,44 | 24,18 | 2,6 | 5,2 |
| Heiler / Priester | 3 | Rüstung/Brust | 24,82 | 63,58 | 5,1 | 10,2 |
| Heiler / Priester | 3 | Helm | 14,6 | 37,4 | 3 | 6 |
| Heiler / Priester | 3 | Handschuhe | 14,6 | 37,4 | 3 | 6 |
| Heiler / Priester | 3 | Schuhe | 18,98 | 48,62 | 3,9 | 7,8 |
| Heiler / Priester | 4 | Rüstung/Brust | 45,56 | 106,08 | 6,8 | 13,6 |
| Heiler / Priester | 4 | Helm | 26,8 | 62,4 | 4 | 8 |
| Heiler / Priester | 4 | Handschuhe | 26,8 | 62,4 | 4 | 8 |
| Heiler / Priester | 4 | Schuhe | 34,84 | 81,12 | 5,2 | 10,4 |
| Heiler / Priester | 5 | Rüstung/Brust | 69,02 | 169,32 | 10,2 | 17 |
| Heiler / Priester | 5 | Helm | 40,6 | 99,6 | 6 | 10 |
| Heiler / Priester | 5 | Handschuhe | 40,6 | 99,6 | 6 | 10 |
| Heiler / Priester | 5 | Schuhe | 52,78 | 129,48 | 7,8 | 13 |
| Heiler / Priester | 6 | Rüstung/Brust | 95,88 | 235,62 | 13,6 | 20,4 |
| Heiler / Priester | 6 | Helm | 56,4 | 138,6 | 8 | 12 |
| Heiler / Priester | 6 | Handschuhe | 56,4 | 138,6 | 8 | 12 |
| Heiler / Priester | 6 | Schuhe | 73,32 | 180,18 | 10,4 | 15,6 |
| Luminet / Lichtmagier | 1 | Rüstung/Brust | 11,22 | 19,04 | 2,38 | 3,4 |
| Luminet / Lichtmagier | 1 | Helm | 6,6 | 11,2 | 1,4 | 2 |
| Luminet / Lichtmagier | 1 | Handschuhe | 6,6 | 11,2 | 1,4 | 2 |
| Luminet / Lichtmagier | 1 | Schuhe | 8,58 | 14,56 | 1,82 | 2,6 |
| Luminet / Lichtmagier | 2 | Rüstung/Brust | 19,38 | 38,42 | 4,08 | 5,1 |
| Luminet / Lichtmagier | 2 | Helm | 11,4 | 22,6 | 2,4 | 3 |
| Luminet / Lichtmagier | 2 | Handschuhe | 11,4 | 22,6 | 2,4 | 3 |
| Luminet / Lichtmagier | 2 | Schuhe | 14,82 | 29,38 | 3,12 | 3,9 |
| Luminet / Lichtmagier | 3 | Rüstung/Brust | 35,36 | 77,18 | 8,5 | 6,8 |
| Luminet / Lichtmagier | 3 | Helm | 20,8 | 45,4 | 5 | 4 |
| Luminet / Lichtmagier | 3 | Handschuhe | 20,8 | 45,4 | 5 | 4 |
| Luminet / Lichtmagier | 3 | Schuhe | 27,04 | 59,02 | 6,5 | 5,2 |
| Luminet / Lichtmagier | 4 | Rüstung/Brust | 60,52 | 108,46 | 10,2 | 8,5 |
| Luminet / Lichtmagier | 4 | Helm | 35,6 | 63,8 | 6 | 5 |
| Luminet / Lichtmagier | 4 | Handschuhe | 35,6 | 63,8 | 6 | 5 |
| Luminet / Lichtmagier | 4 | Schuhe | 46,28 | 82,94 | 7,8 | 6,5 |
| Luminet / Lichtmagier | 5 | Rüstung/Brust | 86,36 | 134,64 | 11,9 | 11,9 |
| Luminet / Lichtmagier | 5 | Helm | 50,8 | 79,2 | 7 | 7 |
| Luminet / Lichtmagier | 5 | Handschuhe | 50,8 | 79,2 | 7 | 7 |
| Luminet / Lichtmagier | 5 | Schuhe | 66,04 | 102,96 | 9,1 | 9,1 |
| Luminet / Lichtmagier | 6 | Rüstung/Brust | 114,24 | 188,36 | 15,3 | 17 |
| Luminet / Lichtmagier | 6 | Helm | 67,2 | 110,8 | 9 | 10 |
| Luminet / Lichtmagier | 6 | Handschuhe | 67,2 | 110,8 | 9 | 10 |
| Luminet / Lichtmagier | 6 | Schuhe | 87,36 | 144,04 | 11,7 | 13 |
| Kräuterkundler / Witcher | 1 | Rüstung/Brust | 13,94 | 11,22 | 3,4 | 4,08 |
| Kräuterkundler / Witcher | 1 | Helm | 8,2 | 6,6 | 2 | 2,4 |
| Kräuterkundler / Witcher | 1 | Handschuhe | 8,2 | 6,6 | 2 | 2,4 |
| Kräuterkundler / Witcher | 1 | Schuhe | 10,66 | 8,58 | 2,6 | 3,12 |
| Kräuterkundler / Witcher | 2 | Rüstung/Brust | 26,18 | 19,04 | 5,1 | 6,8 |
| Kräuterkundler / Witcher | 2 | Helm | 15,4 | 11,2 | 3 | 4 |
| Kräuterkundler / Witcher | 2 | Handschuhe | 15,4 | 11,2 | 3 | 4 |
| Kräuterkundler / Witcher | 2 | Schuhe | 20,02 | 14,56 | 3,9 | 5,2 |
| Kräuterkundler / Witcher | 3 | Rüstung/Brust | 45,56 | 32,98 | 6,8 | 10,2 |
| Kräuterkundler / Witcher | 3 | Helm | 26,8 | 19,4 | 4 | 6 |
| Kräuterkundler / Witcher | 3 | Handschuhe | 26,8 | 19,4 | 4 | 6 |
| Kräuterkundler / Witcher | 3 | Schuhe | 34,84 | 25,22 | 5,2 | 7,8 |
| Kräuterkundler / Witcher | 4 | Rüstung/Brust | 72,08 | 59,84 | 8,5 | 13,6 |
| Kräuterkundler / Witcher | 4 | Helm | 42,4 | 35,2 | 5 | 8 |
| Kräuterkundler / Witcher | 4 | Handschuhe | 42,4 | 35,2 | 5 | 8 |
| Kräuterkundler / Witcher | 4 | Schuhe | 55,12 | 45,76 | 6,5 | 10,4 |
| Kräuterkundler / Witcher | 5 | Rüstung/Brust | 104,72 | 86,36 | 11,9 | 17 |
| Kräuterkundler / Witcher | 5 | Helm | 61,6 | 50,8 | 7 | 10 |
| Kräuterkundler / Witcher | 5 | Handschuhe | 61,6 | 50,8 | 7 | 10 |
| Kräuterkundler / Witcher | 5 | Schuhe | 80,08 | 66,04 | 9,1 | 13 |
| Kräuterkundler / Witcher | 6 | Rüstung/Brust | 142,12 | 112,2 | 17 | 20,4 |
| Kräuterkundler / Witcher | 6 | Helm | 83,6 | 66 | 10 | 12 |
| Kräuterkundler / Witcher | 6 | Handschuhe | 83,6 | 66 | 10 | 12 |
| Kräuterkundler / Witcher | 6 | Schuhe | 108,68 | 85,8 | 13 | 15,6 |
| Jäger / Schütze | 1 | Rüstung/Brust | 13,26 | 13,6 | 3,4 | 3,4 |
| Jäger / Schütze | 1 | Helm | 7,8 | 8 | 2 | 2 |
| Jäger / Schütze | 1 | Handschuhe | 7,8 | 8 | 2 | 2 |
| Jäger / Schütze | 1 | Schuhe | 10,14 | 10,4 | 2,6 | 2,6 |
| Jäger / Schütze | 2 | Rüstung/Brust | 22,1 | 26,18 | 5,1 | 5,1 |
| Jäger / Schütze | 2 | Helm | 13 | 15,4 | 3 | 3 |
| Jäger / Schütze | 2 | Handschuhe | 13 | 15,4 | 3 | 3 |
| Jäger / Schütze | 2 | Schuhe | 16,9 | 20,02 | 3,9 | 3,9 |
| Jäger / Schütze | 3 | Rüstung/Brust | 37,06 | 34,68 | 6,8 | 6,8 |
| Jäger / Schütze | 3 | Helm | 21,8 | 20,4 | 4 | 4 |
| Jäger / Schütze | 3 | Handschuhe | 21,8 | 20,4 | 4 | 4 |
| Jäger / Schütze | 3 | Schuhe | 28,34 | 26,52 | 5,2 | 5,2 |
| Jäger / Schütze | 4 | Rüstung/Brust | 63,58 | 62,22 | 8,5 | 8,5 |
| Jäger / Schütze | 4 | Helm | 37,4 | 36,6 | 5 | 5 |
| Jäger / Schütze | 4 | Handschuhe | 37,4 | 36,6 | 5 | 5 |
| Jäger / Schütze | 4 | Schuhe | 48,62 | 47,58 | 6,5 | 6,5 |
| Jäger / Schütze | 5 | Rüstung/Brust | 90,44 | 87,04 | 11,9 | 11,9 |
| Jäger / Schütze | 5 | Helm | 53,2 | 51,2 | 7 | 7 |
| Jäger / Schütze | 5 | Handschuhe | 53,2 | 51,2 | 7 | 7 |
| Jäger / Schütze | 5 | Schuhe | 69,16 | 66,56 | 9,1 | 9,1 |
| Jäger / Schütze | 6 | Rüstung/Brust | 135,32 | 112,2 | 15,3 | 15,3 |
| Jäger / Schütze | 6 | Helm | 79,6 | 66 | 9 | 9 |
| Jäger / Schütze | 6 | Handschuhe | 79,6 | 66 | 9 | 9 |
| Jäger / Schütze | 6 | Schuhe | 103,48 | 85,8 | 11,7 | 11,7 |
| Schamane / Hochelfe | 1 | Rüstung/Brust | 14,62 | 12,92 | 4,08 | 4,08 |
| Schamane / Hochelfe | 1 | Helm | 8,6 | 7,6 | 2,4 | 2,4 |
| Schamane / Hochelfe | 1 | Handschuhe | 8,6 | 7,6 | 2,4 | 2,4 |
| Schamane / Hochelfe | 1 | Schuhe | 11,18 | 9,88 | 3,12 | 3,12 |
| Schamane / Hochelfe | 2 | Rüstung/Brust | 27,88 | 24,48 | 6,8 | 6,8 |
| Schamane / Hochelfe | 2 | Helm | 16,4 | 14,4 | 4 | 4 |
| Schamane / Hochelfe | 2 | Handschuhe | 16,4 | 14,4 | 4 | 4 |
| Schamane / Hochelfe | 2 | Schuhe | 21,32 | 18,72 | 5,2 | 5,2 |
| Schamane / Hochelfe | 3 | Rüstung/Brust | 53,04 | 46,92 | 10,2 | 10,2 |
| Schamane / Hochelfe | 3 | Helm | 31,2 | 27,6 | 6 | 6 |
| Schamane / Hochelfe | 3 | Handschuhe | 31,2 | 27,6 | 6 | 6 |
| Schamane / Hochelfe | 3 | Schuhe | 40,56 | 35,88 | 7,8 | 7,8 |
| Schamane / Hochelfe | 4 | Rüstung/Brust | 78,88 | 66,98 | 13,6 | 13,6 |
| Schamane / Hochelfe | 4 | Helm | 46,4 | 39,4 | 8 | 8 |
| Schamane / Hochelfe | 4 | Handschuhe | 46,4 | 39,4 | 8 | 8 |
| Schamane / Hochelfe | 4 | Schuhe | 60,32 | 51,22 | 10,4 | 10,4 |
| Schamane / Hochelfe | 5 | Rüstung/Brust | 106,42 | 96,22 | 17 | 17 |
| Schamane / Hochelfe | 5 | Helm | 62,6 | 56,6 | 10 | 10 |
| Schamane / Hochelfe | 5 | Handschuhe | 62,6 | 56,6 | 10 | 10 |
| Schamane / Hochelfe | 5 | Schuhe | 81,38 | 73,58 | 13 | 13 |
| Schamane / Hochelfe | 6 | Rüstung/Brust | 146,88 | 131,24 | 20,4 | 20,4 |
| Schamane / Hochelfe | 6 | Helm | 86,4 | 77,2 | 12 | 12 |
| Schamane / Hochelfe | 6 | Handschuhe | 86,4 | 77,2 | 12 | 12 |
| Schamane / Hochelfe | 6 | Schuhe | 112,32 | 100,36 | 15,6 | 15,6 |
| Druide / Alchemist | 1 | Rüstung/Brust | 15,3 | 12,24 | 3,4 | 4,08 |
| Druide / Alchemist | 1 | Helm | 9 | 7,2 | 2 | 2,4 |
| Druide / Alchemist | 1 | Handschuhe | 9 | 7,2 | 2 | 2,4 |
| Druide / Alchemist | 1 | Schuhe | 11,7 | 9,36 | 2,6 | 3,12 |
| Druide / Alchemist | 2 | Rüstung/Brust | 29,58 | 23,46 | 5,1 | 6,8 |
| Druide / Alchemist | 2 | Helm | 17,4 | 13,8 | 3 | 4 |
| Druide / Alchemist | 2 | Handschuhe | 17,4 | 13,8 | 3 | 4 |
| Druide / Alchemist | 2 | Schuhe | 22,62 | 17,94 | 3,9 | 5,2 |
| Druide / Alchemist | 3 | Rüstung/Brust | 53,04 | 41,48 | 6,8 | 10,2 |
| Druide / Alchemist | 3 | Helm | 31,2 | 24,4 | 4 | 6 |
| Druide / Alchemist | 3 | Handschuhe | 31,2 | 24,4 | 4 | 6 |
| Druide / Alchemist | 3 | Schuhe | 40,56 | 31,72 | 5,2 | 7,8 |
| Druide / Alchemist | 4 | Rüstung/Brust | 76,5 | 65,28 | 8,5 | 13,6 |
| Druide / Alchemist | 4 | Helm | 45 | 38,4 | 5 | 8 |
| Druide / Alchemist | 4 | Handschuhe | 45 | 38,4 | 5 | 8 |
| Druide / Alchemist | 4 | Schuhe | 58,5 | 49,92 | 6,5 | 10,4 |
| Druide / Alchemist | 5 | Rüstung/Brust | 112,54 | 92,82 | 11,9 | 17 |
| Druide / Alchemist | 5 | Helm | 66,2 | 54,6 | 7 | 10 |
| Druide / Alchemist | 5 | Handschuhe | 66,2 | 54,6 | 7 | 10 |
| Druide / Alchemist | 5 | Schuhe | 86,06 | 70,98 | 9,1 | 13 |
| Druide / Alchemist | 6 | Rüstung/Brust | 155,04 | 125,12 | 17 | 20,4 |
| Druide / Alchemist | 6 | Helm | 91,2 | 73,6 | 10 | 12 |
| Druide / Alchemist | 6 | Handschuhe | 91,2 | 73,6 | 10 | 12 |
| Druide / Alchemist | 6 | Schuhe | 118,56 | 95,68 | 13 | 15,6 |
| Nachtjäger / Seelenjäger | 1 | Rüstung/Brust | 10,54 | 10,2 | 3,4 | 1,7 |
| Nachtjäger / Seelenjäger | 1 | Helm | 6,2 | 6 | 2 | 1 |
| Nachtjäger / Seelenjäger | 1 | Handschuhe | 6,2 | 6 | 2 | 1 |
| Nachtjäger / Seelenjäger | 1 | Schuhe | 8,06 | 7,8 | 2,6 | 1,3 |
| Nachtjäger / Seelenjäger | 2 | Rüstung/Brust | 18,36 | 17,34 | 5,1 | 3,06 |
| Nachtjäger / Seelenjäger | 2 | Helm | 10,8 | 10,2 | 3 | 1,8 |
| Nachtjäger / Seelenjäger | 2 | Handschuhe | 10,8 | 10,2 | 3 | 1,8 |
| Nachtjäger / Seelenjäger | 2 | Schuhe | 14,04 | 13,26 | 3,9 | 2,34 |
| Nachtjäger / Seelenjäger | 3 | Rüstung/Brust | 34,68 | 32,98 | 6,12 | 3,74 |
| Nachtjäger / Seelenjäger | 3 | Helm | 20,4 | 19,4 | 3,6 | 2,2 |
| Nachtjäger / Seelenjäger | 3 | Handschuhe | 20,4 | 19,4 | 3,6 | 2,2 |
| Nachtjäger / Seelenjäger | 3 | Schuhe | 26,52 | 25,22 | 4,68 | 2,86 |
| Nachtjäger / Seelenjäger | 4 | Rüstung/Brust | 60,52 | 56,44 | 7,48 | 5,1 |
| Nachtjäger / Seelenjäger | 4 | Helm | 35,6 | 33,2 | 4,4 | 3 |
| Nachtjäger / Seelenjäger | 4 | Handschuhe | 35,6 | 33,2 | 4,4 | 3 |
| Nachtjäger / Seelenjäger | 4 | Schuhe | 46,28 | 43,16 | 5,72 | 3,9 |
| Nachtjäger / Seelenjäger | 5 | Rüstung/Brust | 83,3 | 78,54 | 8,5 | 6,8 |
| Nachtjäger / Seelenjäger | 5 | Helm | 49 | 46,2 | 5 | 4 |
| Nachtjäger / Seelenjäger | 5 | Handschuhe | 49 | 46,2 | 5 | 4 |
| Nachtjäger / Seelenjäger | 5 | Schuhe | 63,7 | 60,06 | 6,5 | 5,2 |
| Nachtjäger / Seelenjäger | 6 | Rüstung/Brust | 106,08 | 101,32 | 10,2 | 8,5 |
| Nachtjäger / Seelenjäger | 6 | Helm | 62,4 | 59,6 | 6 | 5 |
| Nachtjäger / Seelenjäger | 6 | Handschuhe | 62,4 | 59,6 | 6 | 5 |
| Nachtjäger / Seelenjäger | 6 | Schuhe | 81,12 | 77,48 | 7,8 | 6,5 |
| Abenteurer / Scout | 1 | Rüstung/Brust | 17,34 | 11,22 | 5,1 | 4,08 |
| Abenteurer / Scout | 1 | Helm | 10,2 | 6,6 | 3 | 2,4 |
| Abenteurer / Scout | 1 | Handschuhe | 10,2 | 6,6 | 3 | 2,4 |
| Abenteurer / Scout | 1 | Schuhe | 13,26 | 8,58 | 3,9 | 3,12 |
| Abenteurer / Scout | 2 | Rüstung/Brust | 31,28 | 19,38 | 8,5 | 6,8 |
| Abenteurer / Scout | 2 | Helm | 18,4 | 11,4 | 5 | 4 |
| Abenteurer / Scout | 2 | Handschuhe | 18,4 | 11,4 | 5 | 4 |
| Abenteurer / Scout | 2 | Schuhe | 23,92 | 14,82 | 6,5 | 5,2 |
| Abenteurer / Scout | 3 | Rüstung/Brust | 56,78 | 35,02 | 11,9 | 10,2 |
| Abenteurer / Scout | 3 | Helm | 33,4 | 20,6 | 7 | 6 |
| Abenteurer / Scout | 3 | Handschuhe | 33,4 | 20,6 | 7 | 6 |
| Abenteurer / Scout | 3 | Schuhe | 43,42 | 26,78 | 9,1 | 7,8 |
| Abenteurer / Scout | 4 | Rüstung/Brust | 92,82 | 60,52 | 15,3 | 13,6 |
| Abenteurer / Scout | 4 | Helm | 54,6 | 35,6 | 9 | 8 |
| Abenteurer / Scout | 4 | Handschuhe | 54,6 | 35,6 | 9 | 8 |
| Abenteurer / Scout | 4 | Schuhe | 70,98 | 46,28 | 11,7 | 10,4 |
| Abenteurer / Scout | 5 | Rüstung/Brust | 131,58 | 89,76 | 18,7 | 17 |
| Abenteurer / Scout | 5 | Helm | 77,4 | 52,8 | 11 | 10 |
| Abenteurer / Scout | 5 | Handschuhe | 77,4 | 52,8 | 11 | 10 |
| Abenteurer / Scout | 5 | Schuhe | 100,62 | 68,64 | 14,3 | 13 |
| Abenteurer / Scout | 6 | Rüstung/Brust | 174,08 | 112,2 | 23,8 | 20,4 |
| Abenteurer / Scout | 6 | Helm | 102,4 | 66 | 14 | 12 |
| Abenteurer / Scout | 6 | Handschuhe | 102,4 | 66 | 14 | 12 |
| Abenteurer / Scout | 6 | Schuhe | 133,12 | 85,8 | 18,2 | 15,6 |

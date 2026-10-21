# Vorschlag: drei Gruppen für Manakosten

**Historischer Vorschlagsstand vor der freigegebenen Übernahme.** 90 Kostenkurven einschließlich zugeteilter Kombobudgets sind inzwischen gespeichert und neu simuliert. Offene Sonderfälle wurden beibehalten; dieser Entwurf zeigt weiterhin die ursprünglichen Referenzen. Die endgültige Verteilung und Ausnahmen stehen in data/balancing/three-tier-mana-application.json.

| Gruppe | Faktor | Basis |
| --- | ---: | --- |
| Normale Angriffe | 25 % | Gesamter Skill-Grundschaden einer Anwendung gegen ein Ziel |
| Heilungen | 35 % | Gesamte definierte Grundheilung eines Empfängers je Anwendung |
| Finisher / anhaltende Schadensfelder / große Kombos | 40 % | Vollständiger Skill-Grundschaden gegen ein Ziel; Kombos insgesamt einmal |

Charakterangriff, Gegnerzahl und Gruppengröße werden nicht in die Kostenbasis multipliziert. Ganze Startwerte und ganze Steigerungen; Tabellen bei wechselnden Trefferzahlen/Dauer und Verdopplungen. Keine Schadensänderungen nötig. Keine Laufzeit-Simulation, keine Annahme geänderter Anwendungshäufigkeiten.

**Ätherregen ist ausdrücklich Heilung (35 %). Infernal Zyklon gehört ausdrücklich zu den Finishern (40 %).** Die neuen normalen 25 % sind im Vorschlag auch für Energieschlag berücksichtigt; das ist noch keine Änderung seiner gespeicherten Kosten.

## Normale Angriffe – 25 %

| Nr. | Skill | Stufen | Mana bisher 1 → Max | Referenz neu 1 → Max | Ganzzahlige Kurve |
| ---: | --- | ---: | ---: | ---: | --- |
| 3 | Abräumer | 10 | 45 → 252 | 19 → 136 | 19 + 13 je weiterer Stufe |
| 8 | Astralkörper | 5 | 134 → 582 | 127 → 363 | 127 + 59 je weiterer Stufe |
| 11 | Aufgeladener Schlag | 15 | 65 → 485 | 21 → 217 | 21 + 14 je weiterer Stufe |
| 13 | Ausbruch der Wut | 5 | — | — | Separat prüfen |
| 15 | Beben | 20 | 20 → 229 | 20 → 210 | 20 + 10 je weiterer Stufe |
| 16 | Wasserfesseln | 20 | 23 → 232 | 12 → 12 | Konstant 12 |
| 17 | Blutklinge | 10 | 56 → 344 | — | Separat prüfen |
| 19 | Brecher der Deckung | 10 | 45 → 288 | 24 → 96 | 24 + 8 je weiterer Stufe |
| 20 | Brecher des Lichts | 10 | 127 → 583 | 164 → 398 | 164 + 26 je weiterer Stufe |
| 23 | Donnernde Lanze | 15 | 64 → 414 | 70 → 392 | 70 + 23 je weiterer Stufe |
| 24 | Doppelschuss | 10 | 103 → 319 | 122 → 293 | 122 + 19 je weiterer Stufe |
| 27 | Dunkler Schlag | 15 | 13 → 69 | 10 → 66 | 10 + 4 je weiterer Stufe |
| 29 | Eislanze | 10 | 84 → 462 | 47 → 155 | 47 + 12 je weiterer Stufe |
| 30 | Eisranken | 10 | 65 → 326 | 33 → 158 | 33 / 43 / 53 / 69 / 80 / 91 / 110 / 123 / 135 / 158 |
| 35 | Energieentladung | 10 | — | — | Separat prüfen |
| 36 | Energieschlag | 10 | 12 → 120 | 6 → 51 | 6 + 5 je weiterer Stufe |
| 37 | Entzugspfeil | 10 | 27 → 135 | — | Separat prüfen |
| 38 | Erdbeben | 10 | 87 → 465 | 51 → 231 | 51 + 20 je weiterer Stufe |
| 39 | Erdbrecher | 10 | 134 → 566 | 71 → 251 | 71 + 20 je weiterer Stufe |
| 40 | Erlösendes Feld | 10 | 83 → 389 | 47 → 236 | 47 + 21 je weiterer Stufe |
| 46 | Ewiges Eis | 15 | 57 → 393 | 34 → 188 | 34 + 11 je weiterer Stufe |
| 47 | Explosionspfeil | 10 | 147 → 381 | 251 → 539 | 251 + 32 je weiterer Stufe |
| 48 | Feuer der Verdammten | 5 | 167 → 469 | 191 → 503 | 191 + 78 je weiterer Stufe |
| 49 | Feuerball | 20 | 31 → 202 | 16 → 149 | 16 + 7 je weiterer Stufe |
| 50 | Feuerlanze | 10 | 74 → 362 | 49 → 157 | 49 + 12 je weiterer Stufe |
| 51 | Feuerpfeil | 20 | 32 → 279 | 17 → 112 | 17 + 5 je weiterer Stufe |
| 53 | Gebundener Schuss | 10 | 21 → 102 | 9 → 54 | 9 + 5 je weiterer Stufe |
| 55 | Brecher des Geistes | 10 | 37 → 244 | 20 → 93 | 20 / 28 / 36 / 45 / 53 / 61 / 69 / 77 / 85 / 93 |
| 56 | Geladener Nebel | 15 | 75 → 523 | 44 → 268 | 44 + 16 je weiterer Stufe |
| 57 | Gezielter Blitz | 10 | 101 → 452 | 73 → 307 | 73 + 26 je weiterer Stufe |
| 61 | Holzspalter | 20 | 34 → 395 | 6 → 196 | 6 + 10 je weiterer Stufe |
| 63 | Kettenschuss | 5 | 5 → 30 | 13 → 37 | 13 + 6 je weiterer Stufe |
| 65 | Klingentornado | 10 | 61 → 268 | 113 → 482 | 113 + 41 je weiterer Stufe |
| 66 | Kopfschuss | 10 | 217 → 784 | 213 → 537 | 213 + 36 je weiterer Stufe |
| 68 | Kristallisierte Wasserspähre | 10 | 39 → 165 | 34 → 97 | 34 + 7 je weiterer Stufe |
| 69 | Kugelblitz | 10 | 181 → 676 | 100 → 424 | 100 + 36 je weiterer Stufe |
| 70 | Kunai Todesstoß | 4 | 0 → 0 | — | Separat prüfen |
| 72 | Lebenssauger | 10 | 67 → 354 | — | Separat prüfen |
| 76 | Mächtiger Doppelschlag | 15 | 83 → 503 | 83 → 307 | 83 + 16 je weiterer Stufe |
| 77 | Mächtiger Hieb | 10 | 42 → 240 | 18 → 180 | 18 + 18 je weiterer Stufe |
| 86 | Präzisionsschuss | 15 | 173 → 1.069 | 221 → 1.089 | 221 + 62 je weiterer Stufe |
| 87 | Rotier Schlag | 10 | 24 → 132 | 9 → 153 | 9 + 16 je weiterer Stufe |
| 88 | Salve | 5 | 82 → 214 | 104 → 414 | 104 / 207 / 242 / 276 / 414 |
| 89 | Schädelspalter | 10 | 210 → 993 | 97 → 637 | 97 + 60 je weiterer Stufe |
| 90 | Schattendolch | 15 | 42 → 308 | 24 → 206 | 24 + 13 je weiterer Stufe |
| 91 | Schattenfalle | 10 | 54 → 270 | 43 → 160 | 43 + 13 je weiterer Stufe |
| 92 | Schattenschlag | 10 | 154 → 577 | 63 → 225 | 63 + 18 je weiterer Stufe |
| 94 | Schildstoß | 20 | 68 → 657 | 34 → 262 | 34 + 12 je weiterer Stufe |
| 95 | Schildsturm | 15 | 87 → 591 | 68 → 271 | 68 / 82 / 97 / 111 / 126 / 140 / 155 / 169 / 184 / 198 / 213 / 227 / 242 / 256 / 271 |
| 96 | Schmetterschlag | 10 | 54 → 441 | 28 → 343 | 28 + 35 je weiterer Stufe |
| 97 | Schockschuss | 10 | 97 → 466 | 59 → 158 | 59 + 11 je weiterer Stufe |
| 98 | Schockwelle der Regeneration | 10 | 183 → 633 | — | Separat prüfen |
| 99 | Schrei der Unterwelt | 3 | — | — | Separat prüfen |
| 101 | Schwerter des Lichtes | 10 | 123 → 636 | 68 → 257 | 68 + 21 je weiterer Stufe |
| 106 | Sprungschlag | 10 | 174 → 714 | 98 → 404 | 98 + 34 je weiterer Stufe |
| 109 | Sturm der Wut | 10 | — | — | Separat prüfen |
| 110 | Sturm des Feuers | 10 | 42 → 375 | 28 → 181 | 28 + 17 je weiterer Stufe |
| 111 | Sturmklinge | 10 | 217 → 780 | 83 → 335 | 83 + 28 je weiterer Stufe |
| 113 | Tödlicher Tanz | 10 | 45 → 324 | 104 → 942 | 104 / 131 / 212 / 249 / 358 / 404 / 540 / 596 / 760 / 942 |
| 115 | Überschallklinge | 5 | 231 → 527 | 159 → 391 | 159 + 58 je weiterer Stufe |
| 117 | Urteil des Himmels | 5 | 157 → 405 | 119 → 287 | 119 + 42 je weiterer Stufe |
| 118 | Vakuumimpuls | 5 | 225 → 553 | 133 → 489 | 133 + 89 je weiterer Stufe |
| 121 | Verstärkter Pfeil | 20 | 67 → 732 | 64 → 406 | 64 + 18 je weiterer Stufe |
| 125 | Windfesseln | 10 | 87 → 285 | 56 → 137 | 56 + 9 je weiterer Stufe |
| 126 | Wirbelnde Klinge | 10 | 123 → 389 | 346 → 742 | 346 + 44 je weiterer Stufe |
| 127 | Wutexplosion | 10 | — | — | Separat prüfen |
| 128 | Wutklinge | 10 | — | — | Separat prüfen |
| 180 | Seelenplage | 10 | — | — | Separat prüfen |
| 184 | Hinterhältiger Pfeil | 10 | 39 → 93 | 9 → 18 | 9 + 1 je weiterer Stufe |
| 202 | Verbrennen | 15 | 8 → 120 | 15 → 127 | 15 + 8 je weiterer Stufe |
| 210 | Lichtblitz | 20 | 32 → 222 | 16 → 149 | 16 + 7 je weiterer Stufe |
| 211 | Aurora Wellen | 10 | 170 → 521 | 96 → 375 | 96 + 31 je weiterer Stufe |
| 212 | Himmelsbrecher | 10 | 207 → 1.188 | 196 → 466 | 196 + 30 je weiterer Stufe |
| 213 | Strafendes Licht | 10 | 89 → 656 | 73 → 316 | 73 + 27 je weiterer Stufe |
| 215 | Heiliges Kreuz | 10 | 77 → 464 | 59 → 284 | 59 + 25 je weiterer Stufe |
| 216 | Heilige Vernichtung | 10 | 67 → 298 | 85 → 337 | 85 + 28 je weiterer Stufe |
| 217 | Göttliche Nova | 10 | 137 → 649 | 118 → 354 | 118 / 142 / 165 / 188 / 211 / 235 / 258 / 281 / 304 / 354 |
| 218 | Licht kristallenes Gefängnis | 3 | 115 → 209 | 73 → 127 | 73 + 27 je weiterer Stufe |
| 219 | Manaexplosion | 10 | — | — | Separat prüfen |
| 220 | Bannmagie | 10 | 17 → 116 | 9 → 36 | 9 + 3 je weiterer Stufe |
| 221 | Windschlitzer | 10 | 73 → 406 | 53 → 215 | 53 + 18 je weiterer Stufe |
| 227 | Dämonische Schockwelle | 3 | 55 → 220 | 70 → 280 | 70 / 140 / 280 |
| 230 | Wirbelsturm | 10 | 83 → 389 | 38 → 227 | 38 + 21 je weiterer Stufe |
| 231 | Luminus | 10 | 21 → 75 | 4 → 22 | 4 + 2 je weiterer Stufe |
| 232 | Dunkler Impuls | 10 | 18 → 90 | 11 → 65 | 11 + 6 je weiterer Stufe |
| 233 | Kriegerischer Ansturm | 10 | 44 → 305 | 34 → 349 | 34 + 35 je weiterer Stufe |
| 234 | Zorn des Henkers | 5 | 217 → 709 | 150 → 706 | 150 + 139 je weiterer Stufe |

## Heilungen – 35 %

| Nr. | Skill | Stufen | Mana bisher 1 → Max | Referenz neu 1 → Max | Ganzzahlige Kurve |
| ---: | --- | ---: | ---: | ---: | --- |
| 9 | Ätherregen | 10 | 210 → 516 | 110 → 239 | 110 / 118 / 126 / 133 / 141 / 149 / 156 / 164 / 172 / 239 |
| 41 | Erste Hilfe | 10 | 20 → 164 | 18 → 99 | 18 + 9 je weiterer Stufe |
| 58 | Kuss der Aurora | 6 | 283 → 1.208 | 193 → 948 | 193 + 151 je weiterer Stufe |
| 64 | Heilung | 20 | 16 → 130 | 7 → 539 | 7 / 16 / 27 / 41 / 56 / 74 / 93 / 115 / 139 / 165 / 193 / 223 / 255 / 289 / 326 / 364 / 405 / 447 / 492 / 539 |
| 71 | Lebensessenz | 5 | 113 → 333 | — | Separat prüfen |
| 78 | Göttliche Heilung | 10 | 92 → 713 | 85 → 544 | 85 + 51 je weiterer Stufe |
| 108 | Strahlendes Aurafeld | 10 | 15 → 51 | 21 → 210 | 21 + 21 je weiterer Stufe |
| 124 | Wiederherstellung | 20 | 22 → 174 | 12 → 840 | 12 / 25 / 41 / 59 / 79 / 101 / 125 / 151 / 180 / 210 / 243 / 277 / 314 / 353 / 525 / 582 / 643 / 706 / 771 / 840 |

## Finisher / Schadensfelder – 40 %

| Nr. | Skill | Stufen | Mana bisher 1 → Max | Referenz neu 1 → Max | Ganzzahlige Kurve |
| ---: | --- | ---: | ---: | ---: | --- |
| 31 | Elektrisches Feld | 10 | 41 → 212 | 63 → 276 | 63 / 83 / 104 / 124 / 153 / 175 / 196 / 218 / 240 / 276 |
| 62 | Infernal Zyklon | 5 | 172 → 536 | 234 → 746 | 234 / 325 / 467 / 570 / 746 |
| 112 | Tobender Sturm | 10 | 123 → 528 | 213 → 1.962 | 213 / 356 / 525 / 574 / 780 / 1010 / 1266 / 1352 / 1645 / 1962 |
| 235 | Meteoritenschauer | 3 | 255 → 469 | 652 → 2.608 | 652 / 1304 / 2608 |
| 239 | Frostschauer | 10 | 56 → 362 | 26 → 542 | 26 / 47 / 102 / 134 / 166 / 264 / 306 / 349 / 489 / 542 |

## Große Kombos – gemeinsames 40-%-Budget

Nur Maximalstufen und vollständig erfolgreiche Sammelfenster. Das Budget darf nicht zusätzlich auf jede Einzelkomponente nochmals vollständig aufgeschlagen werden. Eine Verteilung auf Start, Treffer und Abschluss ist noch nicht festgelegt.

| Kombo | Vollständiger Skill-Grundschaden | Mana bisher | Kostenbudget neu |
| --- | ---: | ---: | ---: |
| Ritualist: Seelenfessel + 15 Seelenqual + Seelenernte | 3.770 | 1.678 | 1.508 |
| Seelenjäger: Markierung + 25 Seelensammler + Spektralketten | 4.097,95 | 0 | 1.639 |

## Einzelprüfungen und offene Referenzen

- **Ätherregen (9)**: Vom Nutzer ausdrücklich als Heilung eingeordnet. Referenz: Heilung eines Empfängers aus einem getroffenen Gegner, ohne Charakterangriff und weitere Gegner; tatsächliche Heilung ist schadensabhängig. Schaden wird nicht zusätzlich bepreist.
- **Ausbruch der Wut (13)**: Bestehende Sonderressource/prozentuale/kostenlose Mechanik nicht automatisch ersetzen.
- **Blutklinge (17)**: Schadensangriff mit zusätzlicher Heilung: Komponenten getrennt prüfen, keine doppelte Vollbepreisung.
- **Elektrisches Feld (31)**: Anhaltendes Feld/Großangriff; vollständige definierte Anwendung gegen ein Ziel. Infernal Zyklon vom Nutzer ausdrücklich eingeschlossen.
- **Energieentladung (35)**: Bestehende Sonderressource/prozentuale/kostenlose Mechanik nicht automatisch ersetzen.
- **Energieschlag (36)**: Neue 25-%-Gruppenzuordnung: ersetzt nur im Vorschlag die frühere Ausnahme; gespeicherter Energieschlag unverändert, Heiler weiter maximal Stufe 5.
- **Entzugspfeil (37)**: Schadensangriff mit zusätzlicher Heilung: Komponenten getrennt prüfen, keine doppelte Vollbepreisung.
- **Kuss der Aurora (58)**: Referenz deckt nur feste Grundheilung; zusätzlicher 3-/5-%-Max-HP-Anteil braucht ein Referenzziel.
- **Infernal Zyklon (62)**: Anhaltendes Feld/Großangriff; vollständige definierte Anwendung gegen ein Ziel. Infernal Zyklon vom Nutzer ausdrücklich eingeschlossen.
- **Klingentornado (65)**: Grenzfall: Mehrfachtreffer, besondere Kombo oder offene Mechanik; Gruppenzuordnung vor Übernahme prüfen.
- **Kunai Todesstoß (70)**: Bestehende Sonderressource/prozentuale/kostenlose Mechanik nicht automatisch ersetzen. Grenzfall: Mehrfachtreffer, besondere Kombo oder offene Mechanik; Gruppenzuordnung vor Übernahme prüfen.
- **Lebensessenz (71)**: Heilung hängt vollständig vom Max-Leben des Ziels ab; ohne festgelegtes Referenzziel keine feste Kostenkurve erfinden.
- **Lebenssauger (72)**: Schadensangriff mit zusätzlicher Heilung: Komponenten getrennt prüfen, keine doppelte Vollbepreisung.
- **Salve (88)**: Grenzfall: Mehrfachtreffer, besondere Kombo oder offene Mechanik; Gruppenzuordnung vor Übernahme prüfen.
- **Schockwelle der Regeneration (98)**: Schadensangriff mit zusätzlicher Heilung: Komponenten getrennt prüfen, keine doppelte Vollbepreisung.
- **Schrei der Unterwelt (99)**: Bestehende Sonderressource/prozentuale/kostenlose Mechanik nicht automatisch ersetzen.
- **Seelenfessel (103)**: Gemeinsames Kombobudget unten; keine zusätzliche Einzelbepreisung.
- **Seelenqual (104)**: Gemeinsames Kombobudget unten; keine zusätzliche Einzelbepreisung.
- **Seelenernte (105)**: Gemeinsames Kombobudget unten; keine zusätzliche Einzelbepreisung.
- **Strahlendes Aurafeld (108)**: Referenz: Selbstheilung eines Empfängers; Verbündetenheilung separat, nicht mit der Gruppengröße multipliziert.
- **Sturm der Wut (109)**: Bestehende Sonderressource/prozentuale/kostenlose Mechanik nicht automatisch ersetzen.
- **Tobender Sturm (112)**: Anhaltendes Feld/Großangriff; vollständige definierte Anwendung gegen ein Ziel. Infernal Zyklon vom Nutzer ausdrücklich eingeschlossen.
- **Tödlicher Tanz (113)**: Grenzfall: Mehrfachtreffer, besondere Kombo oder offene Mechanik; Gruppenzuordnung vor Übernahme prüfen.
- **Wirbelnde Klinge (126)**: Grenzfall: Mehrfachtreffer, besondere Kombo oder offene Mechanik; Gruppenzuordnung vor Übernahme prüfen.
- **Wutexplosion (127)**: Bestehende Sonderressource/prozentuale/kostenlose Mechanik nicht automatisch ersetzen.
- **Wutklinge (128)**: Bestehende Sonderressource/prozentuale/kostenlose Mechanik nicht automatisch ersetzen.
- **Seelenplage (180)**: Bestehende Sonderressource/prozentuale/kostenlose Mechanik nicht automatisch ersetzen.
- **Hinterhältiger Pfeil (184)**: Grenzfall: Mehrfachtreffer, besondere Kombo oder offene Mechanik; Gruppenzuordnung vor Übernahme prüfen.
- **Seelenschuss (185)**: Gemeinsames Kombobudget unten; keine zusätzliche Einzelbepreisung.
- **Seelensammler (186)**: Gemeinsames Kombobudget unten; keine zusätzliche Einzelbepreisung.
- **Aurora Wellen (211)**: Grenzfall: Mehrfachtreffer, besondere Kombo oder offene Mechanik; Gruppenzuordnung vor Übernahme prüfen.
- **Manaexplosion (219)**: Bestehende Sonderressource/prozentuale/kostenlose Mechanik nicht automatisch ersetzen.
- **Spektralketten (229)**: Gemeinsames Kombobudget unten; keine zusätzliche Einzelbepreisung.
- **Meteoritenschauer (235)**: Anhaltendes Feld/Großangriff; vollständige definierte Anwendung gegen ein Ziel. Infernal Zyklon vom Nutzer ausdrücklich eingeschlossen.
- **Frostschauer (239)**: Anhaltendes Feld/Großangriff; vollständige definierte Anwendung gegen ein Ziel. Infernal Zyklon vom Nutzer ausdrücklich eingeschlossen.

Kostenkurven für Lebensessenz und den prozentualen Zusatz von Kuss der Aurora sind ohne Referenz-Max-HP nicht abschließend ableitbar. Hybride Angriffe mit Heilung sind nicht stillschweigend als reine Heilung umklassifiziert. Beschwörungen und reine Buffs bleiben außerhalb dieses Entwurfs.

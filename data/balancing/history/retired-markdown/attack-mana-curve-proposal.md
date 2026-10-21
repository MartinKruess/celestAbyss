# Vorschlag: einheitliche Manakosten für Angriffsskills

**Nur Vorschläge, nicht in Datenbank oder Spielwerte übernommen. Kein neuer Zehn-Minuten-Test.** Grundlage ist der aktuelle lokale Datenbankexport; gemeinsame Skills werden genau einmal berechnet. Nicht mehr zugeordnete Reserve-Skills bleiben außerhalb der Vorschläge.

## Berechnungsregel

- Referenz: **40 % des vollständigen Skill-Grundschadens einer Anwendung gegen ein Ziel**. Charakter-/Waffenangriff und Anzahl möglicher Gegner werden nicht addiert.
- Festgelegte Mehrfachtreffer und Feldticks sind enthalten; die volle Feldlaufzeit ist eine Obergrenze bei stehenbleibendem Ziel. Zufällige Procs und unbestimmte Schadenswiederholungen sind nicht enthalten. Gesicherte Krits verwenden den bisherigen Grundbonus von 80 %.
- Bei linearer Schadensentwicklung: ganzzahlig gerundeter Start und ganzzahlige Steigerung je Stufe. Der Faktor darf dadurch leicht um 40 % schwanken. Bei Verdopplungen verdoppeln sich die ganzzahligen Manakosten exakt. Bei wechselnden Trefferzahlen oder Laufzeiten wird jeder Stufenwert ganzzahlig tabelliert.
- **Keine Schadensänderung erforderlich:** Ganzzahlige Manakosten lassen sich ohne Eingriff in die bestehenden Schadenswerte berechnen. Bestehende gebrochene interne Schadenssteigerungen werden durch diesen Vorschlag nicht verändert.
- Energieschlag bleibt unverändert, einschließlich Heiler-Stufengrenze 5. Kostenlose Kombos, prozentuale Manakosten und Angriffe mit ausschließlich Lebens-/Wut-/Seelenkosten bleiben Sonderfälle. Reine Heilzauber, Buffs und Beschwörungen erhalten hier keine neue Kostenkurve.
- Kontrolle, zusätzliche Heilung, weitere Ressourcen und unklare Treffermechaniken sind markiert. Ihre 40-%-Werte sind Vergleichswerte ohne erfundene Zu-/Abschläge und müssen vor einer Übernahme einzeln beurteilt werden.

## Umfang

- 98 aktuell zugeordnete Angriffsskills geprüft; gemeinsame Definitionen einmal gezählt.
- 86 Kostenreferenzen: 47 auf Maximalstufe günstiger, 39 teurer.
- 72 lineare Kurven mit ganzzahliger Steigerung, 1 konstante Kurve, 13 ganzzahlige Stufentabellen.
- 12 Sonderfälle unverändert; 2 nicht mehr zugeordnete Reserve-Angriffe separat.
- Keine Schadenswerte geändert. Alle neuen Kostenwerte, Startwerte und linearen Steigerungen sind ganze Zahlen.

## Größte Änderungen auf Maximalstufe

| Skill | Mana bisher | Referenz neu | Unterschied |
| --- | ---: | ---: | ---: |
| Meteoritenschauer (Nr. 235) | 469 | 2.608 | +2.139 |
| Tobender Sturm (Nr. 112) | 528 | 1.962 | +1.434 |
| Tödlicher Tanz (Nr. 113) | 324 | 1.507 | +1.183 |
| Ätherregen (Nr. 9) | 516 | 1.531 | +1.015 |
| Wirbelnde Klinge (Nr. 126) | 389 | 1.184 | +795 |
| Präzisionsschuss (Nr. 86) | 1.069 | 1.740 | +671 |
| Klingentornado (Nr. 65) | 268 | 775 | +507 |
| Explosionspfeil (Nr. 47) | 381 | 851 | +470 |
| Salve (Nr. 88) | 214 | 662 | +448 |
| Himmelsbrecher (Nr. 212) | 1.188 | 746 | -442 |
| Zorn des Henkers (Nr. 234) | 709 | 1.128 | +419 |
| Feuer der Verdammten (Nr. 48) | 469 | 806 | +337 |

## Vergleich aller kostenpflichtigen Angriffe

⚠ = zusätzlicher Prüfpunkt, keine automatische Übernahme. Schaden = vollständiger Skill-Grundschaden gegen ein Ziel; Werte vor Charakterangriff. Die Kostenkurven enthalten ausschließlich ganze Zahlen.

| Nr. | Skill / Klassen | Stufen | Schaden 1 → Max | Mana bisher 1 → Max | Referenz neu 1 → Max | Neue Kurve | Δ Mana Max |
| ---: | --- | ---: | ---: | ---: | ---: | --- | ---: |
| 3 | Abräumer<br>Butcher | 10 | 75 → 543 | 45 → 252 | 30 → 219 | 30 + 21 je weiterer Stufe | -33 |
| 8 | Astralkörper<br>Luminet | 5 | 506 → 1.450 | 134 → 582 | 202 → 578 | 202 + 94 je weiterer Stufe | -4 |
| 9 | ⚠ Ätherregen<br>Druide, Luminet | 10 | 900 → 3.828 | 210 → 516 | 360 → 1.531 | 360 / 448 / 535 / 623 / 710 / 798 / 886 / 973 / 1.061 / 1.531 | +1.015 |
| 11 | Aufgeladener Schlag<br>Butcher | 15 | 85 → 855 | 65 → 485 | 34 → 342 | 34 + 22 je weiterer Stufe | -143 |
| 15 | Beben<br>Abenteurer, Druide, Schamane | 20 | 81 → 822 | 20 → 229 | 32 → 336 | 32 + 16 je weiterer Stufe | +107 |
| 16 | ⚠ Wasserfesseln<br>Kräuterkundler | 20 | 47 → 47 | 23 → 232 | 19 → 19 | Konstant 19 | -213 |
| 17 | ⚠ Blutklinge<br>Schurke | 10 | 100 → 757 | 56 → 344 | 40 → 301 | 40 + 29 je weiterer Stufe | -43 |
| 19 | ⚠ Brecher der Deckung<br>Ritter | 10 | 97 → 394 | 45 → 288 | 39 → 156 | 39 + 13 je weiterer Stufe | -132 |
| 20 | ⚠ Brecher des Lichts<br>Schurke | 10 | 655,2 → 1.587,6 | 127 → 583 | 262 → 631 | 262 + 41 je weiterer Stufe | +48 |
| 23 | Donnernde Lanze<br>Ritter | 15 | 280 → 1.540 | 64 → 414 | 112 → 616 | 112 + 36 je weiterer Stufe | +202 |
| 24 | ⚠ Doppelschuss<br>Seelenjäger | 10 | 486 → 1.152 | 103 → 319 | 194 → 464 | 194 + 30 je weiterer Stufe | +145 |
| 27 | Dunkler Schlag<br>Schurke | 15 | 41 → 279 | 13 → 69 | 16 → 114 | 16 + 7 je weiterer Stufe | +45 |
| 29 | ⚠ Eislanze<br>Kräuterkundler, Druide, Heiler, Luminet | 10 | 187 → 628 | 84 → 462 | 75 → 255 | 75 + 20 je weiterer Stufe | -207 |
| 30 | ⚠ Eisranken<br>Schamane | 10 | 131 → 632 | 65 → 326 | 52 → 253 | 52 / 69 / 85 / 110 / 128 / 146 / 176 / 196 / 216 / 253 | -73 |
| 31 | ⚠ Elektrisches Feld<br>Kräuterkundler | 10 | 157 → 690 | 41 → 212 | 63 → 276 | 63 / 83 / 104 / 124 / 153 / 175 / 196 / 218 / 240 / 276 | +64 |
| 37 | ⚠ Entzugspfeil<br>Jäger | 10 | 101 → 479 | 27 → 135 | 40 → 193 | 40 + 17 je weiterer Stufe | +58 |
| 38 | Erdbeben<br>Butcher, Druide, Schamane | 10 | 202 → 904 | 87 → 465 | 81 → 360 | 81 + 31 je weiterer Stufe | -105 |
| 39 | Erdbrecher<br>Butcher | 10 | 284 → 1.013 | 134 → 566 | 114 → 402 | 114 + 32 je weiterer Stufe | -164 |
| 40 | ⚠ Erlösendes Feld<br>Ritter | 10 | 187 → 934 | 83 → 389 | 75 → 372 | 75 + 33 je weiterer Stufe | -17 |
| 46 | ⚠ Ewiges Eis<br>Kräuterkundler | 15 | 137 → 739 | 57 → 393 | 55 → 293 | 55 + 17 je weiterer Stufe | -100 |
| 47 | ⚠ Explosionspfeil<br>Seelenjäger | 10 | 1.002 → 2.136 | 147 → 381 | 401 → 851 | 401 + 50 je weiterer Stufe | +470 |
| 48 | ⚠ Feuer der Verdammten<br>Ritualist | 5 | 764,4 → 2.018,8 | 167 → 469 | 306 → 806 | 306 + 125 je weiterer Stufe | +337 |
| 49 | Feuerball<br>Ritualist | 20 | 63 → 614 | 31 → 202 | 25 → 253 | 25 + 12 je weiterer Stufe | +51 |
| 50 | Feuerlanze<br>Schamane | 10 | 197 → 611 | 74 → 362 | 79 → 241 | 79 + 18 je weiterer Stufe | -121 |
| 51 | Feuerpfeil<br>Jäger, Seelenjäger | 20 | 67 → 428 | 32 → 279 | 27 → 179 | 27 + 8 je weiterer Stufe | -100 |
| 53 | ⚠ Gebundener Schuss<br>Jäger | 10 | 37 → 199 | 21 → 102 | 15 → 78 | 15 + 7 je weiterer Stufe | -24 |
| 55 | ⚠ Brecher des Geistes<br>Ritter | 10 | 81 → 372 | 37 → 244 | 32 → 149 | 32 / 45 / 58 / 71 / 84 / 97 / 110 / 123 / 136 / 149 | -95 |
| 56 | ⚠ Geladener Nebel<br>Kräuterkundler | 15 | 177 → 1.059 | 75 → 523 | 71 → 421 | 71 + 25 je weiterer Stufe | -102 |
| 57 | Gezielter Blitz<br>Kräuterkundler, Schamane | 10 | 293 → 1.238 | 101 → 452 | 117 → 495 | 117 + 42 je weiterer Stufe | +43 |
| 61 | Holzspalter<br>Gladiator | 20 | 25 → 785 | 34 → 395 | 10 → 314 | 10 + 16 je weiterer Stufe | -81 |
| 62 | ⚠ Infernal Zyklon<br>Schamane | 5 | 584 → 1.866 | 172 → 536 | 234 → 746 | 234 / 325 / 467 / 570 / 746 | +210 |
| 63 | Kettenschuss<br>Jäger, Seelenjäger | 5 | 52 → 144 | 5 → 30 | 21 → 57 | 21 + 9 je weiterer Stufe | +27 |
| 65 | ⚠ Klingentornado<br>Schurke | 10 | 452 → 1.928 | 61 → 268 | 181 → 775 | 181 + 66 je weiterer Stufe | +507 |
| 66 | ⚠ Kopfschuss<br>Seelenjäger | 10 | 853,2 → 2.165,4 | 217 → 784 | 341 → 863 | 341 + 58 je weiterer Stufe | +79 |
| 68 | ⚠ Kristallisierte Wasserspähre<br>Heiler, Schamane | 10 | 137 → 380 | 39 → 165 | 55 → 154 | 55 + 11 je weiterer Stufe | -11 |
| 69 | Kugelblitz<br>Kräuterkundler | 10 | 398 → 1.685 | 181 → 676 | 159 → 672 | 159 + 57 je weiterer Stufe | -4 |
| 72 | ⚠ Lebenssauger<br>Ritualist | 10 | 112 → 499 | 67 → 354 | 45 → 198 | 45 + 17 je weiterer Stufe | -156 |
| 76 | ⚠ Mächtiger Doppelschlag<br>Abenteurer, Schamane | 15 | 332 → 1.228 | 83 → 503 | 133 → 497 | 133 + 26 je weiterer Stufe | -6 |
| 77 | Mächtiger Hieb<br>Gladiator, Butcher, Ritter | 10 | 73 → 733 | 42 → 240 | 29 → 290 | 29 + 29 je weiterer Stufe | +50 |
| 86 | ⚠ Präzisionsschuss<br>Jäger | 15 | 883,8 → 4.336,2 | 173 → 1.069 | 354 → 1.740 | 354 + 99 je weiterer Stufe | +671 |
| 87 | Rotier Schlag<br>Abenteurer, Butcher, Schamane | 10 | 36 → 594 | 24 → 132 | 14 → 239 | 14 + 25 je weiterer Stufe | +107 |
| 88 | ⚠ Salve<br>Jäger | 5 | 414 → 1.656 | 82 → 214 | 166 → 662 | 166 / 331 / 386 / 442 / 662 | +448 |
| 89 | ⚠ Schädelspalter<br>Butcher | 10 | 387 → 2.556 | 210 → 993 | 155 → 1.019 | 155 + 96 je weiterer Stufe | +26 |
| 90 | Schattendolch<br>Schurke | 15 | 94 → 808 | 42 → 308 | 38 → 318 | 38 + 20 je weiterer Stufe | +10 |
| 91 | ⚠ Schattenfalle<br>Schurke | 10 | 171 → 648 | 54 → 270 | 68 → 257 | 68 + 21 je weiterer Stufe | -13 |
| 92 | Schattenschlag<br>Schurke | 10 | 253 → 901 | 154 → 577 | 101 → 362 | 101 + 29 je weiterer Stufe | -215 |
| 94 | ⚠ Schildstoß<br>Ritter | 20 | 137 → 1.030 | 68 → 657 | 55 → 416 | 55 + 19 je weiterer Stufe | -241 |
| 95 | ⚠ Schildsturm<br>Ritter | 15 | 272 → 1.083 | 87 → 591 | 109 → 433 | 109 / 132 / 155 / 178 / 201 / 224 / 248 / 271 / 294 / 317 / 340 / 364 / 387 / 410 / 433 | -158 |
| 96 | Schmetterschlag<br>Gladiator, Butcher | 10 | 111 → 1.368 | 54 → 441 | 44 → 548 | 44 + 56 je weiterer Stufe | +107 |
| 97 | ⚠ Schockschuss<br>Jäger | 10 | 236 → 632 | 97 → 466 | 94 → 256 | 94 + 18 je weiterer Stufe | -210 |
| 98 | ⚠ Schockwelle der Regeneration<br>Butcher | 10 | 337 → 940 | 183 → 633 | 135 → 378 | 135 + 27 je weiterer Stufe | -255 |
| 101 | ⚠ Schwerter des Lichtes<br>Heiler, Luminet | 10 | 273 → 1.029 | 123 → 636 | 109 → 415 | 109 + 34 je weiterer Stufe | -221 |
| 103 | ⚠ Seelenfessel<br>Ritualist | 15 | 97 → 237 | 25 → 193 | 39 → 95 | 39 + 4 je weiterer Stufe | -98 |
| 104 | Seelenqual<br>Ritualist | 10 | 47 → 168 | 23 → 68 | 19 → 64 | 19 + 5 je weiterer Stufe | -4 |
| 105 | ⚠ Seelenernte<br>Ritualist | 5 | 381 → 1.013 | 153 → 465 | 152 → 404 | 152 + 63 je weiterer Stufe | -61 |
| 106 | Sprungschlag<br>Gladiator, Abenteurer, Druide | 10 | 391 → 1.606 | 174 → 714 | 156 → 642 | 156 + 54 je weiterer Stufe | -72 |
| 110 | Sturm des Feuers<br>Ritualist | 10 | 113 → 734 | 42 → 375 | 45 → 297 | 45 + 28 je weiterer Stufe | -78 |
| 111 | Sturmklinge<br>Schurke | 10 | 333 → 1.332 | 217 → 780 | 133 → 529 | 133 + 44 je weiterer Stufe | -251 |
| 112 | ⚠ Tobender Sturm<br>Kräuterkundler | 10 | 532 → 4.905 | 123 → 528 | 213 → 1.962 | 213 / 356 / 525 / 574 / 780 / 1.010 / 1.266 / 1.352 / 1.645 / 1.962 | +1.434 |
| 113 | ⚠ Tödlicher Tanz<br>Schurke | 10 | 414 → 3.768 | 45 → 324 | 166 → 1.507 | 166 / 210 / 339 / 398 / 572 / 646 / 864 / 953 / 1.215 / 1.507 | +1.183 |
| 115 | ⚠ Überschallklinge<br>Abenteurer, Schurke | 5 | 636 → 1.556 | 231 → 527 | 254 → 622 | 254 + 92 je weiterer Stufe | +95 |
| 117 | ⚠ Urteil des Himmels<br>Luminet | 5 | 474 → 1.152 | 157 → 405 | 190 → 462 | 190 + 68 je weiterer Stufe | +57 |
| 118 | ⚠ Vakuumimpuls<br>Schamane | 5 | 532 → 1.960 | 225 → 553 | 213 → 785 | 213 + 143 je weiterer Stufe | +232 |
| 121 | ⚠ Verstärkter Pfeil<br>Jäger | 20 | 257 → 1.625 | 67 → 732 | 103 → 654 | 103 + 29 je weiterer Stufe | -78 |
| 125 | ⚠ Windfesseln<br>Schamane | 10 | 223 → 529 | 87 → 285 | 89 → 215 | 89 + 14 je weiterer Stufe | -70 |
| 126 | ⚠ Wirbelnde Klinge<br>Abenteurer, Schurke | 10 | 1.385 → 2.960 | 123 → 389 | 554 → 1.184 | 554 + 70 je weiterer Stufe | +795 |
| 184 | ⚠ Hinterhältiger Pfeil<br>Seelenjäger | 10 | 37 → 64 | 39 → 93 | 15 → 24 | 15 + 1 je weiterer Stufe | -69 |
| 202 | ⚠ Verbrennen<br>Druide | 15 | 60 → 480 | 8 → 120 | 24 → 192 | 24 + 12 je weiterer Stufe | +72 |
| 210 | Lichtblitz<br>Luminet | 20 | 62 → 594 | 32 → 222 | 25 → 234 | 25 + 11 je weiterer Stufe | +12 |
| 211 | ⚠ Aurora Wellen<br>Luminet | 10 | 384 → 1.500 | 170 → 521 | 154 → 604 | 154 + 50 je weiterer Stufe | +83 |
| 212 | ⚠ Himmelsbrecher<br>Schamane | 10 | 784,8 → 1.854 | 207 → 1.188 | 314 → 746 | 314 + 48 je weiterer Stufe | -442 |
| 213 | Strafendes Licht<br>Luminet | 10 | 292 → 1.255 | 89 → 656 | 117 → 504 | 117 + 43 je weiterer Stufe | -152 |
| 215 | Heiliges Kreuz<br>Luminet | 10 | 237 → 1.146 | 77 → 464 | 95 → 455 | 95 + 40 je weiterer Stufe | -9 |
| 216 | ⚠ Heilige Vernichtung<br>Luminet | 10 | 339 → 1.338 | 67 → 298 | 136 → 532 | 136 + 44 je weiterer Stufe | +234 |
| 217 | Göttliche Nova<br>Heiler, Luminet | 10 | 473 → 1.415 | 137 → 649 | 189 → 566 | 189 / 226 / 264 / 301 / 338 / 375 / 412 / 450 / 487 / 566 | -83 |
| 218 | ⚠ Licht kristallenes Gefängnis<br>Luminet | 3 | 291 → 509 | 115 → 209 | 116 → 204 | 116 + 44 je weiterer Stufe | -5 |
| 220 | ⚠ Bannmagie<br>Druide | 10 | 37 → 154 | 17 → 116 | 15 → 60 | 15 + 5 je weiterer Stufe | -56 |
| 221 | Windschlitzer<br>Kräuterkundler, Druide | 10 | 211 → 850 | 73 → 406 | 84 → 336 | 84 + 28 je weiterer Stufe | -70 |
| 227 | Dämonische Schockwelle<br>Butcher | 3 | 281 → 1.124 | 55 → 220 | 112 → 448 | 112 / 224 / 448 | +228 |
| 230 | Wirbelsturm<br>Gladiator | 10 | 153 → 912 | 83 → 389 | 61 → 367 | 61 + 34 je weiterer Stufe | -22 |
| 231 | Luminus<br>Luminet | 10 | 17 → 98 | 21 → 75 | 7 → 43 | 7 + 4 je weiterer Stufe | -32 |
| 232 | Dunkler Impuls<br>Ritualist | 10 | 42 → 249 | 18 → 90 | 17 → 98 | 17 + 9 je weiterer Stufe | +8 |
| 233 | Kriegerischer Ansturm<br>Gladiator | 10 | 137 → 1.397 | 44 → 305 | 55 → 559 | 55 + 56 je weiterer Stufe | +254 |
| 234 | Zorn des Henkers<br>Butcher | 5 | 600 → 2.820 | 217 → 709 | 240 → 1.128 | 240 + 222 je weiterer Stufe | +419 |
| 235 | ⚠ Meteoritenschauer<br>Ritualist | 3 | 1.629 → 6.516 | 255 → 469 | 652 → 2.608 | 652 / 1.304 / 2.608 | +2.139 |
| 239 | ⚠ Frostschauer<br>Heiler | 10 | 64 → 1.355 | 56 → 362 | 26 → 542 | 26 / 47 / 102 / 134 / 166 / 264 / 306 / 349 / 489 / 542 | +180 |

## Unveränderte Sonderfälle

| Nr. | Skill | Behandlung |
| ---: | --- | --- |
| 13 | Ausbruch der Wut | Kein definierter Manaverbrauch; Ressourcenmechanik beibehalten. Zusätzliche Lebens-/Seelen-/Wutkosten separat berücksichtigen; 40 % ist nur die Referenz ohne Rabatt. |
| 35 | Energieentladung | Kein definierter Manaverbrauch; Ressourcenmechanik beibehalten. Zusätzliche Lebens-/Seelen-/Wutkosten separat berücksichtigen; 40 % ist nur die Referenz ohne Rabatt. |
| 36 | Energieschlag | Energieschlag ausdrücklich unverändert; Heiler weiterhin maximal Stufe 5. |
| 70 | Kunai Todesstoß | Explizit kostenlose Kombo; keine neuen Manakosten vorschlagen. |
| 99 | Schrei der Unterwelt | Kein definierter Manaverbrauch; Ressourcenmechanik beibehalten. Zusätzliche Lebens-/Seelen-/Wutkosten separat berücksichtigen; 40 % ist nur die Referenz ohne Rabatt. |
| 109 | Sturm der Wut | Kein definierter Manaverbrauch; Ressourcenmechanik beibehalten. Zusätzliche Lebens-/Seelen-/Wutkosten separat berücksichtigen; 40 % ist nur die Referenz ohne Rabatt. |
| 127 | Wutexplosion | Kein definierter Manaverbrauch; Ressourcenmechanik beibehalten. Zusätzliche Lebens-/Seelen-/Wutkosten separat berücksichtigen; 40 % ist nur die Referenz ohne Rabatt. |
| 128 | Wutklinge | Kein definierter Manaverbrauch; Ressourcenmechanik beibehalten. Zusätzliche Lebens-/Seelen-/Wutkosten separat berücksichtigen; 40 % ist nur die Referenz ohne Rabatt. |
| 180 | Seelenplage | Kein definierter Manaverbrauch; Ressourcenmechanik beibehalten. Zusätzliche Lebens-/Seelen-/Wutkosten separat berücksichtigen; 40 % ist nur die Referenz ohne Rabatt. |
| 186 | Seelensammler | Explizit kostenlose Kombo; keine neuen Manakosten vorschlagen. |
| 219 | Manaexplosion | Prozentuale Sonderkosten nicht durch Fixkosten ersetzen. |
| 229 | Spektralketten | Explizit kostenlose Kombo; keine neuen Manakosten vorschlagen. |

## Hinweise zur Einzelprüfung

- **Ätherregen (9)**: Zusätzliche Heilung nicht in die Schadensbasis eingepreist. Volle Feldlaufzeit auf einem Ziel angenommen; Verlassen des Felds reduziert den realen Schaden. Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Wasserfesseln (16)**: Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Blutklinge (17)**: Zusätzliche Heilung nicht in die Schadensbasis eingepreist.
- **Brecher der Deckung (19)**: Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Brecher des Lichts (20)**: Replay-/bedingte Kritmechanik gesondert prüfen. Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen. Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Doppelschuss (24)**: Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Eislanze (29)**: Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Eisranken (30)**: Kontroll-/Zusatzeffekt gesondert bewerten. Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen. Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Elektrisches Feld (31)**: Volle Feldlaufzeit auf einem Ziel angenommen; Verlassen des Felds reduziert den realen Schaden. Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Entzugspfeil (37)**: Zusätzliche Heilung nicht in die Schadensbasis eingepreist. Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Erlösendes Feld (40)**: Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Ewiges Eis (46)**: Kontroll-/Zusatzeffekt gesondert bewerten. Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Explosionspfeil (47)**: Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Feuer der Verdammten (48)**: Volle Feldlaufzeit auf einem Ziel angenommen; Verlassen des Felds reduziert den realen Schaden. Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Gebundener Schuss (53)**: Kontroll-/Zusatzeffekt gesondert bewerten. Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Brecher des Geistes (55)**: Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Geladener Nebel (56)**: Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Infernal Zyklon (62)**: Volle Feldlaufzeit auf einem Ziel angenommen; Verlassen des Felds reduziert den realen Schaden. Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Klingentornado (65)**: Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Kopfschuss (66)**: Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Kristallisierte Wasserspähre (68)**: Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Lebenssauger (72)**: Zusätzliche Heilung nicht in die Schadensbasis eingepreist.
- **Mächtiger Doppelschlag (76)**: Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Präzisionsschuss (86)**: Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Salve (88)**: Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Schädelspalter (89)**: Kontroll-/Zusatzeffekt gesondert bewerten.
- **Schattenfalle (91)**: Kontroll-/Zusatzeffekt gesondert bewerten. Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Schildstoß (94)**: Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Schildsturm (95)**: Kontroll-/Zusatzeffekt gesondert bewerten. Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Schockschuss (97)**: Kontroll-/Zusatzeffekt gesondert bewerten. Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Schockwelle der Regeneration (98)**: Zusätzliche Heilung nicht in die Schadensbasis eingepreist.
- **Schwerter des Lichtes (101)**: Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Seelenfessel (103)**: Zusätzliche Lebens-/Seelen-/Wutkosten separat berücksichtigen; 40 % ist nur die Referenz ohne Rabatt. Kontroll-/Zusatzeffekt gesondert bewerten. Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Seelenernte (105)**: Zusätzliche Heilung nicht in die Schadensbasis eingepreist. Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Tobender Sturm (112)**: Volle Feldlaufzeit auf einem Ziel angenommen; Verlassen des Felds reduziert den realen Schaden. Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Tödlicher Tanz (113)**: Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Überschallklinge (115)**: Kontroll-/Zusatzeffekt gesondert bewerten.
- **Urteil des Himmels (117)**: Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen. Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Vakuumimpuls (118)**: Kontroll-/Zusatzeffekt gesondert bewerten.
- **Verstärkter Pfeil (121)**: Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Windfesseln (125)**: Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Wirbelnde Klinge (126)**: Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Hinterhältiger Pfeil (184)**: Replay-/bedingte Kritmechanik gesondert prüfen. Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Verbrennen (202)**: Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Aurora Wellen (211)**: Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Himmelsbrecher (212)**: Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Heilige Vernichtung (216)**: Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Licht kristallenes Gefängnis (218)**: Kontroll-/Zusatzeffekt gesondert bewerten. Kontrolle, Debuff, Heilung, Zusatzbonus oder noch offene Treffermechanik: vor Übernahme prüfen.
- **Bannmagie (220)**: Kontroll-/Zusatzeffekt gesondert bewerten.
- **Meteoritenschauer (235)**: Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.
- **Frostschauer (239)**: Volle Feldlaufzeit auf einem Ziel angenommen; Verlassen des Felds reduziert den realen Schaden. Mehrfachtreffer/Folgeeffekte im Schaden enthalten; keine Multiplikation mit Gegnerzahl.

## Reserve ohne aktuelle Klassenzuordnung

- Pforte der Verbannung (85): Keiner aktuellen Klassenliste zugeordnet; Reserve unverändert lassen.
- Zielschuss (130): Keiner aktuellen Klassenliste zugeordnet; Reserve unverändert lassen.

## Freigabe und nächster Schritt

Vor dem Schreiben in die Datenbank zuerst die Referenzliste und ihre Ausnahmen prüfen. Besonders Felder und Mehrfachtreffer können erheblich teurer werden; günstige Kontrollangriffe können durch die reine Schadensformel zu billig werden. Der Zehn-Minuten-Test bleibt bis zum Abschluss der Manakosten-Anpassung unverändert. Eine spätere Übernahme muss den oben gespeicherten Quellhash prüfen, damit zwischenzeitliche Änderungen nicht überschrieben werden.

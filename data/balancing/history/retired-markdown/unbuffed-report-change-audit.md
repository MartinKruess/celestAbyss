# Warum sich die Schadenszahlen geändert haben

Verglichen wurden die gesicherten Ergebnisse desselben Basisberichts vor und nach seiner vollständigen Aktualisierung. Der alte Klassenvergleich wurde anhand seiner SHA-256-Prüfsumme exakt wiedergefunden. Keine erneute Balanceänderung für diese Prüfung.

## Ritter: alter Wert exakt rekonstruiert

| Rechenstand | Gesamtschaden | Skill-Schaden | Auto-Attack-Schaden | Auto-Attacks |
| --- | ---: | ---: | ---: | ---: |
| Alter Tempowert 90, alte Basis 1.5 | 607.805 | 223.470 | 384.336 | 713 |
| Nur Waffentraining-Tempo entfernt: 70, Basis 1.5 | 514.012 | 223.470 | 290.543 | 539 |
| Zusätzlich neue Basis 1.3 und heutige Kurve | 476.818 | 223.470 | 253.349 | 470 |

Waffentraining gab früher 20 Angriffsgeschwindigkeitspunkte auf Maximalstufe; dieser Bonus wurde zuvor entfernt, war in der alten Datei aber noch enthalten. Die Nahkampf-Basis wurde zuvor von 1,5 auf 1,3 reduziert. Der Ritter verliert in dieser Gegenüberstellung ausschließlich Auto-Attack-Schaden; der Schaden je Auto-Attack (539,04) und sein gesamter Skill-Schaden bleiben gleich. Bei nur 70 bzw. 90 Rohpunkten greift die Sättigung oberhalb 100 noch nicht.

## Alle Klassen: alter und neuer Basisbericht

Gesamtschaden einschließlich temporärer Klassenbeschwörungen. Das ist eine Gegenüberstellung verschiedener Rechenstände, kein isolierter Test eines einzigen Balanceparameters.

| Klasse | Alter Basisbericht | Neuer Basisbericht | Differenz | Altes Tempo (Punkte) | Neues Tempo (Punkte) |
| --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 611.163 | 506.601 | -104.562 | 98.14 | 78.14 |
| Butcher | 797.158 | 605.145 | -192.013 | 90.60 | 70.60 |
| Druide | 729.405 | 585.259 | -144.147 | 97.00 | 77.00 |
| Gladiator | 832.503 | 639.627 | -192.876 | 90.30 | 70.30 |
| Heiler | 678.663 | 532.386 | -146.277 | 90.00 | 70.00 |
| Kräuterkundler | 774.730 | 660.609 | -114.120 | 90.00 | 70.00 |
| Jäger | 870.403 | 709.921 | -160.482 | 92.34 | 72.34 |
| Ritter | 607.805 | 476.818 | -130.987 | 90.00 | 70.00 |
| Luminet | 933.899 | 720.139 | -213.760 | 90.00 | 70.00 |
| Ritualist | 956.957 | 870.394 | -86.563 | 90.60 | 70.60 |
| Schamane | 713.854 | 587.899 | -125.955 | 90.00 | 70.00 |
| Seelenjäger | 773.873 | 609.984 | -163.889 | 116.84 | 93.84 |
| Schurke | 651.609 | 533.248 | -118.361 | 104.20 | 84.20 |

## Beschwörungen richtig lesen

Im Basisbericht All Class Timed Damage enthält Gesamtschaden bereits die Beschwörungen. Der Ritualist erzielt dort aktuell 870.394 insgesamt, davon 185.881 Morrak. Nicht nochmals addieren.

Im Buff-Bericht wurden zuvor zunächst 1.311.876 Charakterschaden und separat 320.472 Morrak-Schaden gezeigt. Zusammen sind das 1.632.348. Dieser Lauf hat permanente Gruppenbuffs und reguläre Eigenbuffs; Morrak erbt den höheren M-Angriff des Meisters. Die Tabellenbeschriftung wird entsprechend präzisiert.

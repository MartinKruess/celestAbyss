> Historischer Vergleichsstand vor dem aktuellen Abenteurer-Umbau. Für den aktuellen Abenteurer siehe den ungebufften 600-Sekunden-Teilvergleich; dieser Buff-Bericht wurde nicht neu simuliert.

# Zehn-Minuten-Schadensvergleich mit eigenen Buffs

[Ungebuffter Vergleich](all-class-timed-damage.md) · [Klassenwerte](class-comparison.md)

Berechnungsstand: 2026-10-17T21:23:40.356Z. Separate Variante; der ungebuffte Ausgangsbericht bleibt erhalten.

## Gesamtvergleich

| Klasse | Ohne Eigenbuffs | Mit Eigenbuffs | Unterschied | Gewinn | Mana/min ohne → mit | Mana-Wartezeit ohne → mit | Tod bei 2 Mio. HP |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Jäger | 835.420 | 1.140.333 | 304.914 | 36,5 % | 3.502 → 3.732 | 0 → 5 s | — |
| Ritualist | 929.180 | 1.037.390 | 108.211 | 11,6 % | 4.323 → 4.562 | 253 → 233 s | — |
| Luminet | 933.899 | 980.732 | 46.832 | 5 % | 5.692 → 6.050 | 277 → 275 s | — |
| Schamane | 602.263 | 940.015 | 337.751 | 56,1 % | 4.667 → 4.754 | 242 → 135 s | — |
| Seelenjäger | 773.873 | 938.377 | 164.504 | 21,3 % | 2.888 → 2.885 | 141 → 128 s | — |
| Butcher | 785.005 | 918.459 | 133.454 | 17 % | 3.523 → 3.509 | 214 → 204 s | — |
| Heiler | 678.663 | 899.508 | 220.845 | 32,5 % | 2.544 → 3.410 | 0 → 0 s | — |
| Abenteurer | 643.603 | 866.310 | 222.707 | 34,6 % | 2.985 → 3.117 | 0 → 0 s | — |
| Gladiator | 823.931 | 864.935 | 41.003 | 5 % | 4.017 → 4.027 | 80 → 173 s | — |
| Kräuterkundler | 774.730 | 853.987 | 79.258 | 10,2 % | 5.026 → 5.142 | 208 → 207 s | — |
| Druide | 593.745 | 765.923 | 172.178 | 29 % | 4.755 → 6.307 | 285 → 39 s | — |
| Schurke | 651.609 | 747.853 | 96.244 | 14,8 % | 3.031 → 3.245 | 180 → 128 s | — |
| Ritter | 555.158 | 578.421 | 23.263 | 4,2 % | 3.605 → 4.858 | 0 → 0 s | — |

## Regeln und Annahmen

- Je Klasse 600 Sekunden, Level 60 und R6-Ausrüstung. Gegner zuerst 2.000.000 Leben; nur bei vorzeitigem Tod zusätzlicher vollständiger Lauf mit 10.000.000 Leben. Keine Gegenangriffe, Verteidigung, Verfehlwürfe oder Gegnerregeneration.
- Vergleich mit dem gespeicherten ungebufften Stand; dieser wird nicht überschrieben. Vor jeder Klasse erneuter ungebuffter Kontrolllauf: Schaden, Manaverbrauch und Mana-Wartezeit müssen dem gespeicherten Stand entsprechen.
- Alle zugeordneten selbst wirkbaren Eigen-/Gruppenbuffs mit deterministischen Auswirkungen werden bei Verfügbarkeit eingesetzt. Keine Buffs fremder Klassen, kein Food, keine Tränke. Reguläre Pets bleiben ausgeschlossen; die bisherigen zeitweisen Beschwörungen bleiben enthalten.
- Start ungepufft mit vollen ursprünglichen Ressourcen, allen Cooldowns bereit, 100 Wut beziehungsweise 100 Seelen. Buff-Casts und Aktivierungskosten zählen innerhalb der 600 Sekunden. Neue Max-HP/MP füllen die Ressourcen nicht kostenlos auf.
- Priorität: laufende Kombos/Tarnangriffe beenden; sonst verfügbare fehlende Buffs, mit Regenerations-/Willenskraftbuffs zuerst, dann längerer Dauer und Skillnummer. Anschließend Beschwörungen, notwendige Setups und die bisherige Schadenspriorität. Buffs erst nach Ablauf erneuern, ohne Selbststapelung. Energie der Wut behält die bisherige Erneuerung bei Verfügbarkeit.
- Kurze Buffs wirken nur für ihre tatsächliche Laufzeit. Bis in den Tot tauscht einmal bei Aktivierung 10 Prozent der dann aktuellen Vita in Stärke; Rücktausch beim Ablauf. Glück und Krit-Schadensbonus ändern keine zufälligen Krit-Würfe; garantierte Krits verwenden den aktuellen Krit-Schadensbonus.
- MP-Regeneration 0,9 je Willenskraft plus direkte Boni alle 3 Sekunden; HP-Regeneration alle 2 Sekunden. Laufende Kosten von Provozieren/Permafrost/Energieausbruch werden nach dem MP-Tick separat bezahlt. Bei fehlendem Mana schalten Toggles ab; Energieausbruch verliert nur Angriffsbonus und Verbrauch. Wiederaktivierung erst bei bezahlbarer nächster Verbrauchsrate und verfügbarem Umschalt-Cooldown.
- Permafrost reduziert die Cooldowns der im bisherigen Test als Eis eingestuften Skills 29/68/239 um seinen aktuellen Bonus, nur bei neuen Anwendungen. Technische Sicherheitsgrenze 0,1 Sekunden; keine dieser definierten Abklingzeiten erreicht sie.
- Geist des Feuers: Int-Bonus regulär; +40 flacher Feuerbonus auf Feuerball, Initialtreffer von Feuer der Verdammten und die drei Meteoriten-Schadenspaare. Folgeanteile von Feuer der Verdammten enthalten den entsprechenden Initialtrefferanteil. Diese Element-/Mehrfachtreffer-Zuordnung bleibt eine offengelegte Testannahme.
- Pfeil der Vorfahren erzeugt je Auto-Attack während seiner Laufzeit 3×160 Zusatzschaden gegen das unveränderte Ziel, ohne erneuten Charakterangriff oder zufällige Krits. Herz des Verräters plus Attentäter stellt während gemeinsamer Aktivität 12 Mana je eigenem Auto-Attack wieder her; kein zusätzlicher MP-Tick-Bonus.
- Energieausbruch gibt während seines maximal 18 Sekunden bestehenden Schilds 10 Prozent Auto-Attack-Bonus. Die Puppe bricht den Schild nicht, da sie nicht angreift. Schutz-/Verteidigungsbuffs sind zeitlich aktiv, gegnerische Schadensvermeidung wird hier nicht bewertet.
- Seelenbegleiter übernimmt live 30 Prozent des gebufften Geschicks; Macht des Begleiters gibt ihm weitere 50 Geschick direkt. Naturgeist übernimmt gebuffte Intelligenz; Morak ein Drittel des gebufften M-Angriffs. Macht des Begleiters wirkt nicht direkt auf Morak. Die Beschwörungen stapeln sich nicht.
- Stählerne Rüstung ist weiterhin nur als Verbündetenbuff definiert; Selbstwirkung bleibt unbestätigt und wird nicht erfunden. Zufalls-Gift, Innere Unruhe und andere zufällige Procs bleiben wie im Ausgangstest aus. Keine isolierten Heilaktionen.
- Übrige Regeln einschließlich Angriffstempo, Castende-Cooldown, Reaktionspause, Auto-Attack-Übergängen, Soul-Kombos und R6-Faith-/Victim-Freischaltannahme entsprechen der gespeicherten ungebufften Auswertung.

## Abenteurer

Gesamtschaden 866.310: Skills 231.570, Auto-Attacks 634.740, Beschwörungen 0. Mana-Verbrauch 31.174, davon optionale Buffs einschließlich laufender Kosten 1.620, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 5.951. Mana-Wartezeit 0 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 72.160 | 94.670 |
| 2 | 64.791 | 86.856 |
| 3 | 62.174 | 85.114 |
| 4 | 64.246 | 87.566 |
| 5 | 63.780 | 84.072 |
| 6 | 60.322 | 83.830 |
| 7 | 64.325 | 86.720 |
| 8 | 64.246 | 86.146 |
| 9 | 62.768 | 85.708 |
| 10 | 64.791 | 85.628 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Verstärkung des Körpers | 2 | 599 s | 493 |
| Erweckung der Leidenschaft | 2 | 599 s | 340 |
| Scharfer Instinkte | 2 | 599 s | 497 |
| Macht der Wildnis | 1 | 600 s | 291 |

Nicht angesetzt: Macht des Begleiters — Keine regulären Pets im Test; kein buffbarer Begleiter dieser Klasse.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 894 | 634.740 | 0 |
| Wirbelnde Klinge | 11 | 71.610 | 7.917 |
| Mächtiger Doppelschlag | 18 | 47.664 | 5.360 |
| Sprungschlag | 17 | 39.372 | 6.662 |
| Beben | 20 | 30.640 | 4.074 |
| Rotier Schlag | 22 | 28.688 | 3.265 |
| Überschallklinge | 6 | 13.596 | 2.276 |
| Verstärkung des Körpers | 2 | 0 | 493 |
| Erweckung der Leidenschaft | 2 | 0 | 340 |
| Scharfer Instinkte | 2 | 0 | 497 |
| Macht der Wildnis | 1 | 0 | 291 |

## Butcher

Gesamtschaden 918.459: Skills 240.952, Auto-Attacks 677.507, Beschwörungen 0. Mana-Verbrauch 35.085, davon optionale Buffs einschließlich laufender Kosten 4.785, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 326. Mana-Wartezeit 204 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 91.689 | 113.750 |
| 2 | 74.786 | 87.137 |
| 3 | 78.066 | 91.455 |
| 4 | 77.853 | 86.301 |
| 5 | 77.285 | 93.536 |
| 6 | 75.419 | 83.129 |
| 7 | 77.880 | 98.567 |
| 8 | 76.697 | 86.920 |
| 9 | 77.695 | 88.434 |
| 10 | 77.634 | 89.229 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Aufladung | 5 | 75 s | 1.935 |
| Verstärkung des Körpers | 2 | 596 s | 508 |
| Kampfinstinkt | 1 | 600 s | 209 |
| Geist des Kriegers | 2 | 448 s | 334 |
| Blutrausch | 2 | 120 s | 884 |
| Bis in den Tot | 5 | 75 s | 915 |

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 701 | 677.507 | 0 |
| Aufgeladener Schlag | 23 | 42.348 | 4.991 |
| Mächtiger Hieb | 20 | 34.654 | 3.600 |
| Rotier Schlag | 21 | 33.011 | 3.213 |
| Schmetterschlag | 13 | 30.841 | 4.459 |
| Erdbeben | 11 | 21.209 | 2.541 |
| Abräumer | 13 | 19.849 | 1.768 |
| Schädelspalter | 4 | 13.900 | 2.548 |
| Energieentladung | 4 | 12.069 | 0 |
| Zorn des Henkers | 3 | 11.206 | 2.118 |
| Dämonische Schockwelle | 5 | 10.795 | 1.400 |
| Erdbrecher | 1 | 7.351 | 2.396 |
| Schockwelle der Regeneration | 2 | 3.718 | 1.266 |
| Aufladung | 5 | 0 | 1.935 |
| Verstärkung des Körpers | 2 | 0 | 508 |
| Kampfinstinkt | 1 | 0 | 209 |
| Geist des Kriegers | 2 | 0 | 334 |
| Blutrausch | 2 | 0 | 884 |
| Bis in den Tot | 5 | 0 | 915 |

## Druide

Gesamtschaden 765.923: Skills 656.802, Auto-Attacks 45.638, Beschwörungen 63.483. Mana-Verbrauch 63.069, davon optionale Buffs einschließlich laufender Kosten 1.027, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 287. Mana-Wartezeit 39 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 67.006 | 81.561 |
| 2 | 56.977 | 73.616 |
| 3 | 61.307 | 78.172 |
| 4 | 57.821 | 73.841 |
| 5 | 60.249 | 80.901 |
| 6 | 56.891 | 71.751 |
| 7 | 56.107 | 78.441 |
| 8 | 62.491 | 73.522 |
| 9 | 56.977 | 77.527 |
| 10 | 57.920 | 76.590 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Macht des Felsens | 1 | 598 s | 198 |
| Macht des Wassers | 1 | 599 s | 198 |
| Herr der Elemente | 1 | 599 s | 631 |

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Energieschlag | 668 | 492.603 | 34.068 |
| Naturgeist | 2 | 63.483 | 264 |
| Auto-Attack | 95 | 45.638 | 0 |
| Sprungschlag | 16 | 33.382 | 6.464 |
| Ätherregen | 5 | 29.811 | 1.195 |
| Beben | 20 | 26.048 | 4.200 |
| Erdbeben | 11 | 21.097 | 2.541 |
| Windschlitzer | 14 | 19.369 | 3.010 |
| Eislanze | 15 | 17.423 | 2.325 |
| Verbrennen | 26 | 12.480 | 3.302 |
| Manaexplosion | 2 | 3.213 | 4.601 |
| Bannmagie | 2 | 1.375 | 72 |
| Macht des Felsens | 1 | 0 | 198 |
| Macht des Wassers | 1 | 0 | 198 |
| Herr der Elemente | 1 | 0 | 631 |

## Gladiator

Gesamtschaden 864.935: Skills 267.248, Auto-Attacks 597.687, Beschwörungen 0. Mana-Verbrauch 40.274, davon optionale Buffs einschließlich laufender Kosten 8.873, davon laufende Kosten 7.208. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 403. Mana-Wartezeit 173 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 98.924 | 100.826 |
| 2 | 78.715 | 80.037 |
| 3 | 87.411 | 89.061 |
| 4 | 73.789 | 80.471 |
| 5 | 84.571 | 90.213 |
| 6 | 78.484 | 79.949 |
| 7 | 79.531 | 87.978 |
| 8 | 83.465 | 84.896 |
| 9 | 78.314 | 86.705 |
| 10 | 80.727 | 84.800 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Energieausbruch | 7 | 126 s | 2.208 |
| Verstärkung des Körpers | 2 | 598 s | 508 |
| Provozieren | 1 | 597 s | 5.000 |
| Energie des Mutes | 1 | 600 s | 305 |
| Innere Kraft | 1 | 600 s | 595 |
| Volles Potential | 1 | 599 s | 257 |

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 679 | 597.687 | 0 |
| Sprungschlag | 17 | 41.944 | 6.868 |
| Mächtiger Hieb | 21 | 33.540 | 3.780 |
| Schmetterschlag | 14 | 31.193 | 4.802 |
| Wutexplosion | 10 | 27.873 | 0 |
| Holzspalter | 16 | 26.382 | 3.136 |
| Ausbruch der Wut | 5 | 23.920 | 0 |
| Kriegerischer Ansturm | 10 | 22.620 | 3.490 |
| Wutklinge | 10 | 22.513 | 0 |
| Sturm der Wut | 10 | 21.233 | 0 |
| Blutiger Durchbruch | 2 | 16.029 | 4.320 |
| Energieausbruch | 7 | 0 | 2.208 |
| Verstärkung des Körpers | 2 | 0 | 508 |
| Provozieren | 1 | 0 | 5.000 |
| Energie des Mutes | 1 | 0 | 305 |
| Energie der Wut | 11 | 0 | 5.005 |
| Innere Kraft | 1 | 0 | 595 |
| Volles Potential | 1 | 0 | 257 |

## Heiler

Gesamtschaden 899.508: Skills 592.188, Auto-Attacks 307.320, Beschwörungen 0. Mana-Verbrauch 34.096, davon optionale Buffs einschließlich laufender Kosten 6.585, davon laufende Kosten 5.800. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 8.323. Mana-Wartezeit 0 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 72.386 | 92.288 |
| 2 | 64.793 | 84.973 |
| 3 | 68.202 | 92.526 |
| 4 | 68.994 | 91.771 |
| 5 | 66.689 | 86.838 |
| 6 | 67.418 | 92.927 |
| 7 | 68.731 | 87.737 |
| 8 | 66.715 | 93.483 |
| 9 | 67.237 | 86.542 |
| 10 | 67.497 | 90.422 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Festigung des Geistes | 2 | 598 s | 502 |
| Aurora-Segen | 1 | 600 s | 224 |
| Permafrost | 1 | 599 s | 5.800 |
| Assimilation | 1 | 599 s | 59 |

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Energieschlag | 358 | 390.220 | 9.308 |
| Auto-Attack | 312 | 307.320 | 0 |
| Frostschauer | 16 | 102.490 | 8.672 |
| Kristallisierte Wasserspähre | 30 | 41.769 | 2.910 |
| Eislanze | 17 | 27.969 | 2.635 |
| Schwerter des Lichtes | 10 | 20.140 | 2.570 |
| Göttliche Nova | 4 | 9.600 | 1.416 |
| Festigung des Geistes | 2 | 0 | 502 |
| Aurora-Segen | 1 | 0 | 224 |
| Permafrost | 1 | 0 | 5.800 |
| Assimilation | 1 | 0 | 59 |

## Kräuterkundler

Gesamtschaden 853.987: Skills 476.062, Auto-Attacks 377.925, Beschwörungen 0. Mana-Verbrauch 51.421, davon optionale Buffs einschließlich laufender Kosten 1.157, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 1.362. Mana-Wartezeit 207 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 94.025 | 99.838 |
| 2 | 84.237 | 94.018 |
| 3 | 74.781 | 83.399 |
| 4 | 73.929 | 80.914 |
| 5 | 75.508 | 84.421 |
| 6 | 75.161 | 82.940 |
| 7 | 71.823 | 79.494 |
| 8 | 75.253 | 85.179 |
| 9 | 73.707 | 78.741 |
| 10 | 76.306 | 85.042 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Natürlicher Schutz | 1 | 600 s | 264 |
| Aura Unterdrückung | 4 | 598 s | 588 |
| Alles im Fluss | 1 | 599 s | 305 |

Nicht angesetzt: Entgiftung — Giftabwehr ohne angreifenden Gegner hat keinen Effekt.; Innere Unruhe — Zufälliger Schadensbonus mit noch offener Verteilung bleibt aus.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 445 | 377.925 | 0 |
| Elektrisches Feld | 26 | 130.365 | 7.176 |
| Gezielter Blitz | 33 | 70.007 | 10.131 |
| Kugelblitz | 21 | 54.031 | 8.904 |
| Geladener Nebel | 27 | 51.523 | 7.236 |
| Wasserfesseln | 43 | 38.540 | 516 |
| Ewiges Eis | 24 | 38.118 | 4.512 |
| Windschlitzer | 20 | 33.985 | 4.300 |
| Eislanze | 23 | 33.977 | 3.565 |
| Tobender Sturm | 2 | 25.515 | 3.924 |
| Natürlicher Schutz | 1 | 0 | 264 |
| Aura Unterdrückung | 4 | 0 | 588 |
| Alles im Fluss | 1 | 0 | 305 |

## Jäger

Gesamtschaden 1.140.333: Skills 453.990, Auto-Attacks 552.720, Beschwörungen 133.623. Mana-Verbrauch 37.324, davon optionale Buffs einschließlich laufender Kosten 2.489, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 177. Mana-Wartezeit 5 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 92.390 | 116.712 |
| 2 | 81.688 | 118.171 |
| 3 | 81.551 | 109.995 |
| 4 | 82.116 | 116.006 |
| 5 | 84.709 | 117.380 |
| 6 | 82.315 | 109.418 |
| 7 | 80.833 | 112.516 |
| 8 | 82.315 | 114.994 |
| 9 | 82.977 | 110.212 |
| 10 | 84.526 | 114.927 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Macht des Begleiters | 1 | 597 s | 645 |
| Treffsicherheit | 1 | 600 s | 164 |
| Auge des Falken | 1 | 599 s | 192 |
| Waldläufer | 1 | 599 s | 165 |
| Pfeil der Vorfahren | 7 | 84 s | 1.323 |

Nicht angesetzt: Giftpfeil — Zufälliger Gift-Proc bleibt wie im Ausgangstest aus.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 564 | 552.720 | 0 |
| Salve | 10 | 134.160 | 4.140 |
| Seelenbegleiter | 2 | 133.623 | 264 |
| Feuerpfeil | 66 | 92.928 | 7.392 |
| Präzisionsschuss | 11 | 67.102 | 11.979 |
| Gebundener Schuss | 34 | 40.086 | 1.836 |
| Pfeil der Vorfahren | 7 | 36.480 | 1.323 |
| Verstärkter Pfeil | 13 | 33.865 | 5.278 |
| Schockschuss | 13 | 20.956 | 2.054 |
| Entzugspfeil | 11 | 16.049 | 1.485 |
| Kettenschuss | 11 | 12.364 | 407 |
| Macht des Begleiters | 1 | 0 | 645 |
| Treffsicherheit | 1 | 0 | 164 |
| Auge des Falken | 1 | 0 | 192 |
| Waldläufer | 1 | 0 | 165 |

## Ritter

Gesamtschaden 578.421: Skills 218.800, Auto-Attacks 359.621, Beschwörungen 0. Mana-Verbrauch 48.576, davon optionale Buffs einschließlich laufender Kosten 12.528, davon laufende Kosten 9.000. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 607. Mana-Wartezeit 0 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 59.983 | 62.578 |
| 2 | 56.270 | 58.720 |
| 3 | 52.603 | 55.585 |
| 4 | 57.261 | 59.252 |
| 5 | 53.089 | 55.539 |
| 6 | 55.499 | 57.453 |
| 7 | 53.336 | 54.521 |
| 8 | 57.747 | 60.471 |
| 9 | 52.603 | 55.585 |
| 10 | 56.766 | 58.720 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Verstärkung des Körpers | 2 | 599 s | 508 |
| Schutz Aura | 7 | 105 s | 2.912 |
| Provozieren | 1 | 599 s | 9.000 |
| Aktive Deckung | 1 | 600 s | 108 |

Nicht angesetzt: Stählerne Rüstung — Nur verbündete Spieler; Selbstwirkung unbestätigt und keine weiteren Spieler im Test.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 676 | 359.621 | 0 |
| Donnernde Lanze | 16 | 56.448 | 12.096 |
| Brecher des Geistes | 33 | 33.593 | 3.927 |
| Schildstoß | 20 | 31.240 | 5.240 |
| Mächtiger Hieb | 22 | 27.830 | 3.960 |
| Schildsturm | 16 | 27.424 | 4.672 |
| Brecher der Deckung | 25 | 26.075 | 3.300 |
| Erlösendes Feld | 9 | 16.191 | 2.853 |
| Verstärkung des Körpers | 2 | 0 | 508 |
| Schutz Aura | 7 | 0 | 2.912 |
| Provozieren | 1 | 0 | 9.000 |
| Aktive Deckung | 1 | 0 | 108 |

## Luminet

Gesamtschaden 980.732: Skills 809.570, Auto-Attacks 171.161, Beschwörungen 0. Mana-Verbrauch 60.503, davon optionale Buffs einschließlich laufender Kosten 502, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 296. Mana-Wartezeit 275 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 133.308 | 135.573 |
| 2 | 91.227 | 98.066 |
| 3 | 90.873 | 95.907 |
| 4 | 85.906 | 91.366 |
| 5 | 91.802 | 95.793 |
| 6 | 85.005 | 90.597 |
| 7 | 92.391 | 95.871 |
| 8 | 85.571 | 89.263 |
| 9 | 91.255 | 95.493 |
| 10 | 86.562 | 92.803 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Festigung des Geistes | 2 | 597 s | 502 |

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Energieschlag | 382 | 386.869 | 19.482 |
| Lichtblitz | 146 | 205.018 | 21.754 |
| Auto-Attack | 212 | 171.161 | 0 |
| Luminus | 62 | 56.235 | 1.364 |
| Ätherregen | 5 | 35.283 | 1.195 |
| Urteil des Himmels | 14 | 33.104 | 4.018 |
| Heiliges Kreuz | 12 | 23.399 | 3.408 |
| Eislanze | 14 | 20.088 | 2.170 |
| Schwerter des Lichtes | 9 | 16.402 | 2.313 |
| Strafendes Licht | 6 | 12.385 | 1.896 |
| Heilige Vernichtung | 2 | 7.436 | 674 |
| Licht kristallenes Gefängnis | 5 | 6.575 | 635 |
| Aurora Wellen | 1 | 2.293 | 375 |
| Astralkörper | 1 | 2.243 | 363 |
| Göttliche Nova | 1 | 2.240 | 354 |
| Festigung des Geistes | 2 | 0 | 502 |

## Ritualist

Gesamtschaden 1.037.390: Skills 517.844, Auto-Attacks 347.126, Beschwörungen 172.421. Mana-Verbrauch 45.617, davon optionale Buffs einschließlich laufender Kosten 245, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 550. Mana-Wartezeit 233 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 124.466 | 133.513 |
| 2 | 100.683 | 114.698 |
| 3 | 90.456 | 103.656 |
| 4 | 91.895 | 99.714 |
| 5 | 92.089 | 103.930 |
| 6 | 68.997 | 81.134 |
| 7 | 91.637 | 97.350 |
| 8 | 88.497 | 98.969 |
| 9 | 87.649 | 100.053 |
| 10 | 92.810 | 104.375 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Geist des Feuers | 2 | 597 s | 134 |
| Teufelspakt | 1 | 600 s | 111 |

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 398 | 347.126 | 0 |
| Feuerball | 133 | 205.053 | 19.817 |
| Morrak´s Meister | 2 | 172.421 | 0 |
| Dunkler Impuls | 107 | 121.229 | 6.955 |
| Seelenqual | 56 | 66.412 | 3.752 |
| Feuer der Verdammten | 11 | 50.911 | 5.533 |
| Schrei der Unterwelt | 8 | 24.146 | 0 |
| Lebenssauger | 14 | 19.427 | 4.956 |
| Sturm des Feuers | 6 | 9.759 | 1.086 |
| Seelenfessel | 7 | 8.704 | 665 |
| Meteoritenschauer | 1 | 7.017 | 2.608 |
| Seelenplage | 3 | 5.186 | 0 |
| Geist des Feuers | 2 | 0 | 134 |
| Teufelspakt | 1 | 0 | 111 |

## Schamane

Gesamtschaden 940.015: Skills 469.709, Auto-Attacks 470.306, Beschwörungen 0. Mana-Verbrauch 47.538, davon optionale Buffs einschließlich laufender Kosten 976, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 255. Mana-Wartezeit 135 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 81.170 | 104.246 |
| 2 | 58.874 | 95.702 |
| 3 | 58.269 | 93.553 |
| 4 | 57.549 | 90.573 |
| 5 | 57.702 | 91.710 |
| 6 | 57.612 | 92.965 |
| 7 | 57.676 | 94.414 |
| 8 | 58.164 | 93.373 |
| 9 | 57.692 | 93.949 |
| 10 | 57.555 | 89.530 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Macht der Wildnis | 1 | 599 s | 300 |
| Geschwindigkeit der Dox | 1 | 599 s | 109 |
| Macht des Feuers | 1 | 599 s | 279 |
| Macht des Geistes | 1 | 600 s | 288 |

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 595 | 470.306 | 0 |
| Energieschlag | 335 | 237.750 | 17.085 |
| Mächtiger Doppelschlag | 13 | 36.515 | 3.991 |
| Beben | 19 | 30.636 | 3.990 |
| Rotier Schlag | 21 | 29.073 | 3.213 |
| Eisranken | 25 | 28.418 | 3.950 |
| Erdbeben | 11 | 24.190 | 2.541 |
| Gezielter Blitz | 12 | 20.912 | 3.684 |
| Kristallisierte Wasserspähre | 22 | 19.463 | 2.134 |
| Feuerlanze | 15 | 16.736 | 2.355 |
| Windfesseln | 14 | 14.472 | 1.918 |
| Infernal Zyklon | 1 | 4.894 | 746 |
| Himmelsbrecher | 1 | 4.185 | 466 |
| Vakuumimpuls | 1 | 2.465 | 489 |
| Macht der Wildnis | 1 | 0 | 300 |
| Geschwindigkeit der Dox | 1 | 0 | 109 |
| Macht des Feuers | 1 | 0 | 279 |
| Macht des Geistes | 1 | 0 | 288 |

## Seelenjäger

Gesamtschaden 938.377: Skills 284.214, Auto-Attacks 654.162, Beschwörungen 0. Mana-Verbrauch 28.849, davon optionale Buffs einschließlich laufender Kosten 2.538, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 436. Mana-Wartezeit 128 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 95.651 | 114.735 |
| 2 | 84.802 | 94.442 |
| 3 | 71.932 | 92.495 |
| 4 | 75.305 | 91.348 |
| 5 | 74.801 | 92.898 |
| 6 | 72.622 | 83.912 |
| 7 | 75.426 | 93.138 |
| 8 | 74.038 | 93.156 |
| 9 | 75.547 | 92.052 |
| 10 | 73.749 | 90.202 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Beweglichkeit | 6 | 147 s | 846 |
| Erweckung der Leidenschaft | 2 | 582 s | 350 |
| Scharfer Instinkte | 2 | 573 s | 512 |
| Gute Reflexe | 1 | 600 s | 349 |
| Keine Gnade | 1 | 599 s | 141 |
| Flinke Füße | 4 | 597 s | 340 |

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 848 | 654.162 | 0 |
| Seelensammler | 83 | 73.994 | 3.984 |
| Feuerpfeil | 59 | 70.752 | 6.608 |
| Doppelschuss | 21 | 56.608 | 6.153 |
| Explosionspfeil | 10 | 44.514 | 5.390 |
| Kopfschuss | 6 | 21.328 | 3.222 |
| Kettenschuss | 11 | 10.074 | 407 |
| Hinterhältiger Pfeil | 6 | 4.997 | 108 |
| Spektralketten | 1 | 1.948 | 439 |
| Beweglichkeit | 6 | 0 | 846 |
| Erweckung der Leidenschaft | 2 | 0 | 350 |
| Scharfer Instinkte | 2 | 0 | 512 |
| Gute Reflexe | 1 | 0 | 349 |
| Seelenschuss | 8 | 0 | 0 |
| Keine Gnade | 1 | 0 | 141 |
| Flinke Füße | 4 | 0 | 340 |

## Schurke

Gesamtschaden 747.853: Skills 249.677, Auto-Attacks 498.176, Beschwörungen 0. Mana-Verbrauch 32.450, davon optionale Buffs einschließlich laufender Kosten 2.563, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 2.508. Mana am Ende 505. Mana-Wartezeit 128 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 87.457 | 94.537 |
| 2 | 61.242 | 72.822 |
| 3 | 68.705 | 79.919 |
| 4 | 61.242 | 64.990 |
| 5 | 59.642 | 78.648 |
| 6 | 65.646 | 70.958 |
| 7 | 60.223 | 73.560 |
| 8 | 60.887 | 64.639 |
| 9 | 67.219 | 82.562 |
| 10 | 59.347 | 65.218 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Beweglichkeit | 6 | 147 s | 821 |
| List des Schurken | 2 | 599 s | 285 |
| Herz des Verräters | 1 | 600 s | 104 |
| Flinke Füße | 4 | 597 s | 330 |
| Attentäter | 5 | 100 s | 1.023 |

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 876 | 498.176 | 0 |
| Tödlicher Tanz | 5 | 41.560 | 4.569 |
| Wirbelnde Klinge | 6 | 34.782 | 4.318 |
| Klingentornado | 8 | 33.557 | 3.740 |
| Brecher des Lichts | 10 | 31.730 | 3.861 |
| Dunkler Schlag | 36 | 30.380 | 2.305 |
| Kunai Todesstoß | 34 | 20.908 | 0 |
| Sturmklinge | 9 | 17.068 | 2.925 |
| Überschallklinge | 5 | 10.602 | 1.896 |
| Blutklinge | 8 | 10.571 | 2.669 |
| Schattenfalle | 7 | 8.505 | 1.086 |
| Schattenschlag | 4 | 5.880 | 873 |
| Schattendolch | 3 | 4.135 | 599 |
| Beweglichkeit | 6 | 0 | 821 |
| List des Schurken | 2 | 0 | 285 |
| Dunkler Schleier | 7 | 0 | 1.046 |
| Herz des Verräters | 1 | 0 | 104 |
| Flinke Füße | 4 | 0 | 330 |
| Attentäter | 5 | 0 | 1.023 |

# Zehn-Minuten-Schadensvergleich mit eigenen Buffs

[Ungebuffter Vergleich](all-class-timed-damage.md) · [Klassenwerte](class-comparison.md)

Berechnungsstand: 2026-10-18T22:31:51.606Z. Separate Variante; der ungebuffte Ausgangsbericht bleibt erhalten.

## Gesamtvergleich

| Klasse | Ohne Eigenbuffs | Mit Eigenbuffs | Unterschied | Gewinn | Mana/min ohne → mit | Mana-Wartezeit ohne → mit | Tod bei 2 Mio. HP |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Jäger | 870.403 | 1.175.238 | 304.836 | 35 % | 3.502 → 3.732 | 0 → 5 s | — |
| Schamane | 713.854 | 1.106.420 | 392.565 | 55 % | 5.087 → 5.093 | 217 → 147 s | — |
| Ritualist | 956.957 | 1.065.167 | 108.211 | 11,3 % | 4.323 → 4.562 | 253 → 233 s | — |
| Luminet | 933.899 | 980.732 | 46.832 | 5 % | 5.692 → 6.050 | 277 → 275 s | — |
| Seelenjäger | 773.873 | 938.377 | 164.504 | 21,3 % | 2.888 → 2.885 | 141 → 128 s | — |
| Butcher | 797.158 | 929.493 | 132.335 | 16,6 % | 3.523 → 3.509 | 215 → 206 s | — |
| Heiler | 678.663 | 899.508 | 220.845 | 32,5 % | 2.544 → 3.410 | 0 → 0 s | — |
| Abenteurer | 647.907 | 873.189 | 225.281 | 34,8 % | 2.942 → 3.104 | 0 → 0 s | — |
| Gladiator | 832.503 | 869.699 | 37.196 | 4,5 % | 4.017 → 3.899 | 80 → 187 s | — |
| Kräuterkundler | 774.730 | 853.987 | 79.258 | 10,2 % | 5.026 → 5.142 | 208 → 207 s | — |
| Druide | 729.405 | 806.338 | 76.933 | 10,5 % | 4.543 → 4.751 | 20 → 7 s | — |
| Schurke | 658.721 | 763.503 | 104.782 | 15,9 % | 2.980 → 3.281 | 168 → 118 s | — |
| Ritter | 607.805 | 631.684 | 23.879 | 3,9 % | 3.696 → 4.873 | 0 → 6 s | — |

Die ungebuffte Spalte wurde ebenfalls frisch gerechnet. Abweichungen zum separat gespeicherten normalen Bericht: Abenteurer 611.163 → 647.907; Schurke 651.609 → 658.721.

## Regeln und Annahmen

- Je Klasse 600 Sekunden, Level 60 und R6-Ausrüstung. Gegner zuerst 2.000.000 Leben; nur bei vorzeitigem Tod zusätzlicher vollständiger Lauf mit 10.000.000 Leben. Keine Gegenangriffe, Verteidigung, Verfehlwürfe oder Gegnerregeneration.
- Die ungebuffte Vergleichsspalte wurde für alle Klassen mit denselben aktuellen Eingaben wie der Buff-Lauf neu simuliert. Der separate normale Bericht bleibt unverändert. Abweichungen zu dessen teils älteren Zeilen werden separat ausgewiesen.
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
- Übrige Regeln einschließlich Angriffstempo, Castende-Cooldown, Reaktionspause, Auto-Attack-Übergängen und Soul-Kombos entsprechen der gespeicherten ungebufften Auswertung. R6-Freischaltannahme: Rogue Ambush1,8 zu P-Angriff, Luminet Faith1,8 und Ritualist Victim1,9 zu M-Angriff. Bereits im Ausgangswert enthaltene Beiträge werden nicht doppelt addiert; eigene Attributbuffs wirken live.

## Abenteurer

Gesamtschaden 873.189: Skills 221.069, Auto-Attacks 652.120, Beschwörungen 0. Mana-Verbrauch 31.035, davon optionale Buffs einschließlich laufender Kosten 1.620, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 5.615. Mana-Wartezeit 0 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 73.938 | 96.304 |
| 2 | 64.638 | 87.605 |
| 3 | 62.886 | 84.976 |
| 4 | 62.400 | 85.037 |
| 5 | 64.492 | 87.294 |
| 6 | 63.032 | 83.861 |
| 7 | 66.742 | 90.091 |
| 8 | 62.802 | 84.726 |
| 9 | 62.484 | 86.712 |
| 10 | 64.492 | 86.582 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Verstärkung des Körpers | 2 | 599 s | 493 |
| Erweckung der Leidenschaft | 2 | 598 s | 340 |
| Scharfer Instinkte | 2 | 598 s | 497 |
| Macht der Wildnis | 1 | 600 s | 291 |

Nicht angesetzt: Macht des Begleiters — Keine regulären Pets im Test; kein buffbarer Begleiter dieser Klasse.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 915 | 652.120 | 0 |
| Wirbelnde Klinge | 11 | 71.759 | 7.680 |
| Rudelangriff | 12 | 46.940 | 9.033 |
| Kreuzhieb | 18 | 46.231 | 4.844 |
| Sprungschlag | 17 | 39.418 | 6.462 |
| Blutender Schnitt | 15 | 16.721 | 1.397 |
| Verstärkung des Körpers | 2 | 0 | 493 |
| Erweckung der Leidenschaft | 2 | 0 | 340 |
| Scharfer Instinkte | 2 | 0 | 497 |
| Macht der Wildnis | 1 | 0 | 291 |

## Butcher

Gesamtschaden 929.493: Skills 241.369, Auto-Attacks 688.124, Beschwörungen 0. Mana-Verbrauch 35.085, davon optionale Buffs einschließlich laufender Kosten 4.785, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 326. Mana-Wartezeit 206 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 91.905 | 114.726 |
| 2 | 77.001 | 88.990 |
| 3 | 78.876 | 92.791 |
| 4 | 78.664 | 87.220 |
| 5 | 78.906 | 95.956 |
| 6 | 76.230 | 83.443 |
| 7 | 79.501 | 98.943 |
| 8 | 77.507 | 87.881 |
| 9 | 78.505 | 89.353 |
| 10 | 80.065 | 90.189 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Aufladung | 5 | 75 s | 1.935 |
| Verstärkung des Körpers | 2 | 597 s | 508 |
| Kampfinstinkt | 1 | 600 s | 209 |
| Geist des Kriegers | 2 | 448 s | 334 |
| Blutrausch | 2 | 120 s | 884 |
| Bis in den Tot | 5 | 75 s | 915 |

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 712 | 688.124 | 0 |
| Aufgeladener Schlag | 23 | 42.348 | 4.991 |
| Mächtiger Hieb | 20 | 35.030 | 3.600 |
| Rotier Schlag | 21 | 33.011 | 3.213 |
| Schmetterschlag | 13 | 30.841 | 4.459 |
| Erdbeben | 11 | 21.250 | 2.541 |
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

Gesamtschaden 806.338: Skills 562.419, Auto-Attacks 159.437, Beschwörungen 84.482. Mana-Verbrauch 47.515, davon optionale Buffs einschließlich laufender Kosten 1.117, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 6.836. Mana-Wartezeit 7 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 82.837 | 87.922 |
| 2 | 66.036 | 74.374 |
| 3 | 78.847 | 86.855 |
| 4 | 65.706 | 72.644 |
| 5 | 81.646 | 90.320 |
| 6 | 65.374 | 72.376 |
| 7 | 69.773 | 87.791 |
| 8 | 75.070 | 73.617 |
| 9 | 71.950 | 88.756 |
| 10 | 72.165 | 71.683 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Macht des Wassers | 1 | 599 s | 198 |
| Herr der Elemente | 1 | 598 s | 631 |
| Macht des Geistes | 1 | 599 s | 288 |

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Energieschlag | 430 | 345.690 | 11.180 |
| Auto-Attack | 384 | 159.437 | 0 |
| Naturgeist | 2 | 84.482 | 264 |
| Himmelsbrecher | 5 | 44.227 | 8.550 |
| Eisranken | 27 | 35.935 | 4.266 |
| Ätherregen | 5 | 33.119 | 1.195 |
| Vakuumimpuls | 7 | 29.088 | 3.337 |
| Windfesseln | 19 | 23.914 | 2.538 |
| Windschlitzer | 15 | 23.815 | 3.144 |
| Eislanze | 15 | 19.904 | 2.325 |
| Manaexplosion | 2 | 5.022 | 9.526 |
| Bannmagie | 2 | 1.706 | 72 |
| Macht des Wassers | 1 | 0 | 198 |
| Herr der Elemente | 1 | 0 | 631 |
| Macht des Geistes | 1 | 0 | 288 |

## Gladiator

Gesamtschaden 869.699: Skills 265.346, Auto-Attacks 604.353, Beschwörungen 0. Mana-Verbrauch 38.986, davon optionale Buffs einschließlich laufender Kosten 8.873, davon laufende Kosten 7.208. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 1.691. Mana-Wartezeit 187 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 99.716 | 101.702 |
| 2 | 78.744 | 80.970 |
| 3 | 88.994 | 89.937 |
| 4 | 74.552 | 82.164 |
| 5 | 85.334 | 89.161 |
| 6 | 78.454 | 80.825 |
| 7 | 80.294 | 88.939 |
| 8 | 82.919 | 84.318 |
| 9 | 81.237 | 86.708 |
| 10 | 82.260 | 84.975 |

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
| Auto-Attack | 686 | 604.353 | 0 |
| Sprungschlag | 17 | 41.972 | 6.868 |
| Mächtiger Hieb | 22 | 35.093 | 3.960 |
| Schmetterschlag | 15 | 33.438 | 5.145 |
| Wutexplosion | 10 | 27.873 | 0 |
| Holzspalter | 16 | 26.411 | 3.136 |
| Kriegerischer Ansturm | 11 | 24.893 | 3.839 |
| Ausbruch der Wut | 5 | 23.920 | 0 |
| Wutklinge | 10 | 22.513 | 0 |
| Sturm der Wut | 10 | 21.233 | 0 |
| Blutiger Durchbruch | 1 | 8.001 | 2.160 |
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

Gesamtschaden 1.175.238: Skills 453.990, Auto-Attacks 552.720, Beschwörungen 168.528. Mana-Verbrauch 37.324, davon optionale Buffs einschließlich laufender Kosten 2.489, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 177. Mana-Wartezeit 5 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 95.861 | 120.105 |
| 2 | 85.198 | 121.681 |
| 3 | 85.061 | 113.505 |
| 4 | 85.626 | 119.516 |
| 5 | 88.219 | 120.890 |
| 6 | 85.825 | 112.928 |
| 7 | 84.265 | 115.948 |
| 8 | 85.825 | 118.504 |
| 9 | 86.487 | 113.722 |
| 10 | 88.036 | 118.437 |

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
| Seelenbegleiter | 2 | 168.528 | 264 |
| Salve | 10 | 134.160 | 4.140 |
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

Gesamtschaden 631.684: Skills 225.479, Auto-Attacks 406.205, Beschwörungen 0. Mana-Verbrauch 48.734, davon optionale Buffs einschließlich laufender Kosten 12.528, davon laufende Kosten 9.000. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 449. Mana-Wartezeit 6 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 65.825 | 67.701 |
| 2 | 62.525 | 65.843 |
| 3 | 56.730 | 60.057 |
| 4 | 61.933 | 64.721 |
| 5 | 61.447 | 61.207 |
| 6 | 57.246 | 63.061 |
| 7 | 61.986 | 63.656 |
| 8 | 57.216 | 60.543 |
| 9 | 61.447 | 64.235 |
| 10 | 61.447 | 60.660 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Verstärkung des Körpers | 2 | 599 s | 508 |
| Schutz Aura | 7 | 105 s | 2.912 |
| Provozieren | 1 | 599 s | 9.000 |
| Aktive Deckung | 1 | 600 s | 108 |

Nicht angesetzt: Stählerne Rüstung — Nur verbündete Spieler; Selbstwirkung unbestätigt und keine weiteren Spieler im Test.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 702 | 406.205 | 0 |
| Donnernde Lanze | 16 | 57.194 | 12.096 |
| Brecher des Geistes | 33 | 35.133 | 3.927 |
| Schildstoß | 21 | 33.781 | 5.502 |
| Schildsturm | 17 | 29.931 | 4.964 |
| Mächtiger Hieb | 22 | 28.856 | 3.960 |
| Brecher der Deckung | 22 | 23.972 | 2.904 |
| Erlösendes Feld | 9 | 16.611 | 2.853 |
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

Gesamtschaden 1.065.167: Skills 517.844, Auto-Attacks 347.126, Beschwörungen 200.198. Mana-Verbrauch 45.617, davon optionale Buffs einschließlich laufender Kosten 245, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 550. Mana-Wartezeit 233 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 127.521 | 136.521 |
| 2 | 103.785 | 117.800 |
| 3 | 93.558 | 106.758 |
| 4 | 94.997 | 102.816 |
| 5 | 95.191 | 107.032 |
| 6 | 68.997 | 81.181 |
| 7 | 94.645 | 100.358 |
| 8 | 91.599 | 102.071 |
| 9 | 90.751 | 103.155 |
| 10 | 95.912 | 107.477 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Geist des Feuers | 2 | 597 s | 134 |
| Teufelspakt | 1 | 600 s | 111 |

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 398 | 347.126 | 0 |
| Feuerball | 133 | 205.053 | 19.817 |
| Morrak´s Meister | 2 | 200.198 | 0 |
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

Gesamtschaden 1.106.420: Skills 379.776, Auto-Attacks 726.644, Beschwörungen 0. Mana-Verbrauch 50.930, davon optionale Buffs einschließlich laufender Kosten 886, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 430. Mana-Wartezeit 147 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 95.019 | 132.211 |
| 2 | 72.715 | 110.187 |
| 3 | 70.695 | 110.731 |
| 4 | 66.184 | 105.111 |
| 5 | 69.818 | 109.752 |
| 6 | 67.544 | 108.323 |
| 7 | 66.536 | 106.247 |
| 8 | 69.244 | 110.127 |
| 9 | 65.673 | 109.891 |
| 10 | 70.426 | 103.840 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Macht der Wildnis | 1 | 598 s | 300 |
| Macht des Felsens | 1 | 599 s | 198 |
| Geschwindigkeit der Dox | 1 | 599 s | 109 |
| Macht des Feuers | 1 | 598 s | 279 |

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 825 | 726.644 | 0 |
| Infernaler Kreuzschlag | 17 | 82.935 | 7.602 |
| Felszähne | 37 | 68.642 | 8.506 |
| Erdsäule | 17 | 40.822 | 6.118 |
| Sprungschlag | 16 | 40.385 | 6.270 |
| Beben | 20 | 34.566 | 4.074 |
| Erdbeben | 11 | 26.354 | 2.465 |
| Verbrennen | 25 | 24.720 | 5.820 |
| Infernal Zyklon | 5 | 24.596 | 3.618 |
| Feuerlanze | 15 | 18.528 | 2.284 |
| Felsensalve | 1 | 18.228 | 3.287 |
| Macht der Wildnis | 1 | 0 | 300 |
| Macht des Felsens | 1 | 0 | 198 |
| Geschwindigkeit der Dox | 1 | 0 | 109 |
| Macht des Feuers | 1 | 0 | 279 |

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

Gesamtschaden 763.503: Skills 258.554, Auto-Attacks 504.949, Beschwörungen 0. Mana-Verbrauch 32.809, davon optionale Buffs einschließlich laufender Kosten 2.563, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 2.508. Mana am Ende 146. Mana-Wartezeit 118 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 87.457 | 94.537 |
| 2 | 64.655 | 80.977 |
| 3 | 66.150 | 80.694 |
| 4 | 63.391 | 68.887 |
| 5 | 64.173 | 74.332 |
| 6 | 63.091 | 71.523 |
| 7 | 60.223 | 73.550 |
| 8 | 61.821 | 69.790 |
| 9 | 66.738 | 85.206 |
| 10 | 61.022 | 64.010 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Beweglichkeit | 6 | 147 s | 821 |
| List des Schurken | 2 | 599 s | 285 |
| Herz des Verräters | 1 | 600 s | 104 |
| Flinke Füße | 4 | 597 s | 330 |
| Attentäter | 5 | 100 s | 1.023 |

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 888 | 504.949 | 0 |
| Tödlicher Tanz | 5 | 41.560 | 4.432 |
| Brecher des Lichts | 12 | 38.065 | 4.494 |
| Wirbelnde Klinge | 6 | 34.782 | 4.189 |
| Klingentornado | 8 | 33.557 | 3.628 |
| Dunkler Schlag | 34 | 28.694 | 2.111 |
| Kunai Todesstoß | 34 | 20.926 | 0 |
| Sturmklinge | 9 | 17.068 | 2.837 |
| Überschallklinge | 5 | 10.602 | 1.839 |
| Blutklinge | 8 | 10.571 | 2.589 |
| Schattenfalle | 7 | 8.505 | 1.054 |
| Schattenschlag | 5 | 7.345 | 1.059 |
| Schattendolch | 5 | 6.880 | 969 |
| Beweglichkeit | 6 | 0 | 821 |
| List des Schurken | 2 | 0 | 285 |
| Dunkler Schleier | 7 | 0 | 1.046 |
| Herz des Verräters | 1 | 0 | 104 |
| Flinke Füße | 4 | 0 | 330 |
| Attentäter | 5 | 0 | 1.023 |

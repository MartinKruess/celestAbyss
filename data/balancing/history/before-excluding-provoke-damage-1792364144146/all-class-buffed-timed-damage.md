# Zehn-Minuten-Schadensvergleich nur mit Selbstbuffs

[Ungebuffter Vergleich](all-class-timed-damage.md) · [Klassenwerte](class-comparison.md)

Berechnungsstand: 2026-10-18T22:44:47.179Z. Separate Variante; der ungebuffte Ausgangsbericht bleibt erhalten.

## Gesamtvergleich

| Klasse | Ohne Eigenbuffs | Mit Eigenbuffs | Unterschied | Gewinn | Mana/min ohne → mit | Mana-Wartezeit ohne → mit | Tod bei 2 Mio. HP |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Jäger | 870.403 | 1.098.580 | 228.177 | 26,2 % | 3.502 → 3.673 | 0 → 0 s | — |
| Ritualist | 956.957 | 1.065.167 | 108.211 | 11,3 % | 4.323 → 4.562 | 253 → 233 s | — |
| Luminet | 933.899 | 933.899 | 0 | 0 % | 5.692 → 5.692 | 277 → 277 s | — |
| Seelenjäger | 773.873 | 923.230 | 149.357 | 19,3 % | 2.888 → 2.877 | 141 → 127 s | — |
| Butcher | 797.158 | 901.227 | 104.069 | 13,1 % | 3.523 → 3.488 | 215 → 205 s | — |
| Gladiator | 832.503 | 846.953 | 14.450 | 1,7 % | 4.017 → 4.018 | 80 → 168 s | — |
| Abenteurer | 647.907 | 831.329 | 183.421 | 28,3 % | 2.942 → 3.020 | 0 → 0 s | — |
| Schamane | 713.854 | 817.541 | 103.687 | 14,5 % | 5.087 → 5.094 | 217 → 218 s | — |
| Kräuterkundler | 774.730 | 775.744 | 1.014 | 0,1 % | 5.026 → 5.250 | 208 → 188 s | — |
| Druide | 729.405 | 764.232 | 34.827 | 4,8 % | 4.543 → 4.598 | 20 → 17 s | — |
| Schurke | 658.721 | 762.298 | 103.577 | 15,7 % | 2.980 → 3.253 | 168 → 121 s | — |
| Heiler | 678.663 | 695.229 | 16.566 | 2,4 % | 2.544 → 3.337 | 0 → 0 s | — |
| Ritter | 607.805 | 602.954 | -4.851 | -0,8 % | 3.696 → 4.898 | 0 → 0 s | — |

Die ungebuffte Spalte wurde ebenfalls frisch gerechnet. Abweichungen zum separat gespeicherten normalen Bericht: Abenteurer 611.163 → 647.907; Schurke 651.609 → 658.721.

## Regeln und Annahmen

- Je Klasse 600 Sekunden, Level 60 und R6-Ausrüstung. Gegner zuerst 2.000.000 Leben; nur bei vorzeitigem Tod zusätzlicher vollständiger Lauf mit 10.000.000 Leben. Keine Gegenangriffe, Verteidigung, Verfehlwürfe oder Gegnerregeneration.
- Die ungebuffte Vergleichsspalte wurde für alle Klassen mit denselben aktuellen Eingaben wie der Buff-Lauf neu simuliert. Der separate normale Bericht bleibt unverändert. Abweichungen zu dessen teils älteren Zeilen werden separat ausgewiesen.
- Nur reine Selbstbuffs mit deterministischen Auswirkungen werden bei Verfügbarkeit eingesetzt. Alle Gruppenbuffs und Gruppenbegleiterbuffs sind ausgeschlossen, auch wenn der Charakter sie selbst wirken kann. Energieausbruch ist als ausschließlich auf sich selbst wirkender Skill enthalten. Keine fremden Buffs, kein Food, keine Tränke oder regulären Pets. Bisherige notwendige Setups und zeitweise Beschwörungen bleiben enthalten.
- Start ungepufft mit vollen ursprünglichen Ressourcen, allen Cooldowns bereit, 100 Wut beziehungsweise 100 Seelen. Buff-Casts und Aktivierungskosten zählen innerhalb der 600 Sekunden. Neue Max-HP/MP füllen die Ressourcen nicht kostenlos auf.
- Priorität: laufende Kombos/Tarnangriffe beenden; sonst verfügbare fehlende Buffs, mit Regenerations-/Willenskraftbuffs zuerst, dann längerer Dauer und Skillnummer. Anschließend Beschwörungen, notwendige Setups und die bisherige Schadenspriorität. Buffs erst nach Ablauf erneuern, ohne Selbststapelung. Energie der Wut behält die bisherige Erneuerung bei Verfügbarkeit.
- Kurze Buffs wirken nur für ihre tatsächliche Laufzeit. Bis in den Tot tauscht einmal bei Aktivierung 10 Prozent der dann aktuellen Vita in Stärke; Rücktausch beim Ablauf. Glück und Krit-Schadensbonus ändern keine zufälligen Krit-Würfe; garantierte Krits verwenden den aktuellen Krit-Schadensbonus.
- MP-Regeneration 0,9 je Willenskraft plus direkte Boni alle 3 Sekunden; HP-Regeneration alle 2 Sekunden. Laufende Kosten von Provozieren/Permafrost/Energieausbruch werden nach dem MP-Tick separat bezahlt. Bei fehlendem Mana schalten Toggles ab; Energieausbruch verliert nur Angriffsbonus und Verbrauch. Wiederaktivierung erst bei bezahlbarer nächster Verbrauchsrate und verfügbarem Umschalt-Cooldown.
- Permafrost reduziert die Cooldowns der im bisherigen Test als Eis eingestuften Skills 29/68/239 um seinen aktuellen Bonus, nur bei neuen Anwendungen. Technische Sicherheitsgrenze 0,1 Sekunden; keine dieser definierten Abklingzeiten erreicht sie.
- Geist des Feuers: Int-Bonus regulär; +40 flacher Feuerbonus auf Feuerball, Initialtreffer von Feuer der Verdammten und die drei Meteoriten-Schadenspaare. Folgeanteile von Feuer der Verdammten enthalten den entsprechenden Initialtrefferanteil. Diese Element-/Mehrfachtreffer-Zuordnung bleibt eine offengelegte Testannahme.
- Pfeil der Vorfahren erzeugt je Auto-Attack während seiner Laufzeit 3×160 Zusatzschaden gegen das unveränderte Ziel, ohne erneuten Charakterangriff oder zufällige Krits. Herz des Verräters plus Attentäter stellt während gemeinsamer Aktivität 12 Mana je eigenem Auto-Attack wieder her; kein zusätzlicher MP-Tick-Bonus.
- Energieausbruch gibt während seines maximal 18 Sekunden bestehenden Schilds 10 Prozent Auto-Attack-Bonus. Die Puppe bricht den Schild nicht, da sie nicht angreift. Schutz-/Verteidigungsbuffs sind zeitlich aktiv, gegnerische Schadensvermeidung wird hier nicht bewertet.
- Seelenbegleiter übernimmt live 30 Prozent des durch Selbstbuffs erhöhten Geschicks. Macht des Begleiters ist als Gruppenbegleiterbuff ausgeschlossen. Naturgeist übernimmt die durch Selbstbuffs erhöhte Intelligenz; Morak ein Drittel des gebufften M-Angriffs. Die Beschwörungen stapeln sich nicht.
- Stählerne Rüstung ist weiterhin nur als Verbündetenbuff definiert; Selbstwirkung bleibt unbestätigt und wird nicht erfunden. Zufalls-Gift, Innere Unruhe und andere zufällige Procs bleiben wie im Ausgangstest aus. Keine isolierten Heilaktionen.
- Übrige Regeln einschließlich Angriffstempo, Castende-Cooldown, Reaktionspause, Auto-Attack-Übergängen und Soul-Kombos entsprechen der gespeicherten ungebufften Auswertung. R6-Freischaltannahme: Rogue Ambush1,8 zu P-Angriff, Luminet Faith1,8 und Ritualist Victim1,9 zu M-Angriff. Bereits im Ausgangswert enthaltene Beiträge werden nicht doppelt addiert; eigene Attributbuffs wirken live.

## Abenteurer

Gesamtschaden 831.329: Skills 216.209, Auto-Attacks 615.120, Beschwörungen 0. Mana-Verbrauch 30.203, davon optionale Buffs einschließlich laufender Kosten 788, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 5.615. Mana-Wartezeit 0 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 73.938 | 93.057 |
| 2 | 64.638 | 83.112 |
| 3 | 62.886 | 81.232 |
| 4 | 62.400 | 80.616 |
| 5 | 64.492 | 82.838 |
| 6 | 63.032 | 80.830 |
| 7 | 66.742 | 84.958 |
| 8 | 62.802 | 81.018 |
| 9 | 62.484 | 80.830 |
| 10 | 64.492 | 82.838 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Scharfer Instinkte | 2 | 600 s | 497 |
| Macht der Wildnis | 1 | 600 s | 291 |

Nicht angesetzt: Verstärkung des Körpers — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.; Erweckung der Leidenschaft — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.; Macht des Begleiters — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 909 | 615.120 | 0 |
| Wirbelnde Klinge | 11 | 69.779 | 7.680 |
| Rudelangriff | 12 | 46.508 | 9.033 |
| Kreuzhieb | 18 | 44.935 | 4.844 |
| Sprungschlag | 17 | 38.806 | 6.462 |
| Blutender Schnitt | 15 | 16.181 | 1.397 |
| Scharfer Instinkte | 2 | 0 | 497 |
| Macht der Wildnis | 1 | 0 | 291 |

## Butcher

Gesamtschaden 901.227: Skills 237.703, Auto-Attacks 663.524, Beschwörungen 0. Mana-Verbrauch 34.877, davon optionale Buffs einschließlich laufender Kosten 4.277, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 534. Mana-Wartezeit 205 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 91.905 | 113.019 |
| 2 | 77.001 | 83.739 |
| 3 | 78.876 | 89.560 |
| 4 | 78.664 | 86.772 |
| 5 | 78.906 | 91.019 |
| 6 | 76.230 | 88.765 |
| 7 | 79.501 | 87.016 |
| 8 | 77.507 | 85.540 |
| 9 | 78.505 | 88.682 |
| 10 | 80.065 | 87.115 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Aufladung | 5 | 75 s | 1.935 |
| Kampfinstinkt | 1 | 600 s | 209 |
| Geist des Kriegers | 2 | 449 s | 334 |
| Blutrausch | 2 | 120 s | 884 |
| Bis in den Tot | 5 | 75 s | 915 |

Nicht angesetzt: Verstärkung des Körpers — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 716 | 663.524 | 0 |
| Aufgeladener Schlag | 22 | 39.664 | 4.774 |
| Mächtiger Hieb | 21 | 35.104 | 3.780 |
| Rotier Schlag | 21 | 32.148 | 3.213 |
| Schmetterschlag | 13 | 29.993 | 4.459 |
| Schädelspalter | 6 | 21.030 | 3.822 |
| Abräumer | 13 | 19.321 | 1.768 |
| Erdbeben | 10 | 19.258 | 2.310 |
| Energieentladung | 4 | 11.907 | 0 |
| Dämonische Schockwelle | 5 | 10.929 | 1.400 |
| Zorn des Henkers | 2 | 7.399 | 1.412 |
| Erdbrecher | 1 | 7.307 | 2.396 |
| Schockwelle der Regeneration | 2 | 3.643 | 1.266 |
| Aufladung | 5 | 0 | 1.935 |
| Kampfinstinkt | 1 | 0 | 209 |
| Geist des Kriegers | 2 | 0 | 334 |
| Blutrausch | 2 | 0 | 884 |
| Bis in den Tot | 5 | 0 | 915 |

## Druide

Gesamtschaden 764.232: Skills 519.225, Auto-Attacks 160.267, Beschwörungen 84.740. Mana-Verbrauch 45.978, davon optionale Buffs einschließlich laufender Kosten 631, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 2.678. Mana-Wartezeit 17 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 82.837 | 85.426 |
| 2 | 66.036 | 70.117 |
| 3 | 78.847 | 81.787 |
| 4 | 65.706 | 68.839 |
| 5 | 81.646 | 85.918 |
| 6 | 65.374 | 69.459 |
| 7 | 69.773 | 72.365 |
| 8 | 75.070 | 78.837 |
| 9 | 71.950 | 76.125 |
| 10 | 72.165 | 75.361 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Herr der Elemente | 1 | 599 s | 631 |

Nicht angesetzt: Macht des Wassers — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.; Macht des Geistes — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Energieschlag | 432 | 312.306 | 11.232 |
| Auto-Attack | 386 | 160.267 | 0 |
| Naturgeist | 2 | 84.740 | 264 |
| Himmelsbrecher | 5 | 43.498 | 8.550 |
| Eisranken | 27 | 33.748 | 4.266 |
| Ätherregen | 5 | 31.499 | 1.195 |
| Vakuumimpuls | 7 | 28.507 | 3.337 |
| Windschlitzer | 15 | 22.569 | 3.144 |
| Windfesseln | 19 | 22.336 | 2.538 |
| Eislanze | 15 | 18.689 | 2.325 |
| Manaexplosion | 2 | 4.529 | 8.423 |
| Bannmagie | 2 | 1.544 | 72 |
| Herr der Elemente | 1 | 0 | 631 |

## Gladiator

Gesamtschaden 846.953: Skills 265.785, Auto-Attacks 581.168, Beschwörungen 0. Mana-Verbrauch 40.183, davon optionale Buffs einschließlich laufender Kosten 8.365, davon laufende Kosten 7.208. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 494. Mana-Wartezeit 168 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 99.716 | 98.584 |
| 2 | 78.744 | 81.107 |
| 3 | 88.994 | 86.052 |
| 4 | 74.552 | 79.102 |
| 5 | 85.334 | 86.083 |
| 6 | 78.454 | 77.801 |
| 7 | 80.294 | 92.359 |
| 8 | 82.919 | 78.945 |
| 9 | 81.237 | 85.298 |
| 10 | 82.260 | 81.622 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Energieausbruch | 7 | 126 s | 2.208 |
| Provozieren | 1 | 598 s | 5.000 |
| Energie des Mutes | 1 | 600 s | 305 |
| Innere Kraft | 1 | 600 s | 595 |
| Volles Potential | 1 | 599 s | 257 |

Nicht angesetzt: Verstärkung des Körpers — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 692 | 581.168 | 0 |
| Sprungschlag | 17 | 41.301 | 6.868 |
| Mächtiger Hieb | 22 | 34.240 | 3.960 |
| Schmetterschlag | 15 | 32.792 | 5.145 |
| Holzspalter | 16 | 25.756 | 3.136 |
| Wutexplosion | 9 | 24.746 | 0 |
| Kriegerischer Ansturm | 11 | 24.427 | 3.839 |
| Ausbruch der Wut | 5 | 23.731 | 0 |
| Wutklinge | 10 | 22.135 | 0 |
| Sturm der Wut | 10 | 20.855 | 0 |
| Blutiger Durchbruch | 2 | 15.803 | 4.320 |
| Energieausbruch | 7 | 0 | 2.208 |
| Provozieren | 1 | 0 | 5.000 |
| Energie des Mutes | 1 | 0 | 305 |
| Energie der Wut | 10 | 0 | 4.550 |
| Innere Kraft | 1 | 0 | 595 |
| Volles Potential | 1 | 0 | 257 |

## Heiler

Gesamtschaden 695.229: Skills 465.800, Auto-Attacks 229.429, Beschwörungen 0. Mana-Verbrauch 33.370, davon optionale Buffs einschließlich laufender Kosten 5.859, davon laufende Kosten 5.800. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 7.123. Mana-Wartezeit 0 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 72.386 | 72.386 |
| 2 | 64.793 | 67.271 |
| 3 | 68.202 | 70.521 |
| 4 | 68.994 | 70.971 |
| 5 | 66.689 | 65.851 |
| 6 | 67.418 | 73.329 |
| 7 | 68.731 | 66.033 |
| 8 | 66.715 | 72.491 |
| 9 | 67.237 | 66.689 |
| 10 | 67.497 | 69.688 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Permafrost | 1 | 600 s | 5.800 |
| Assimilation | 1 | 600 s | 59 |

Nicht angesetzt: Festigung des Geistes — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.; Aurora-Segen — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Energieschlag | 358 | 300.004 | 9.308 |
| Auto-Attack | 313 | 229.429 | 0 |
| Frostschauer | 16 | 81.926 | 8.672 |
| Kristallisierte Wasserspähre | 30 | 34.058 | 2.910 |
| Eislanze | 17 | 23.600 | 2.635 |
| Schwerter des Lichtes | 10 | 17.620 | 2.570 |
| Göttliche Nova | 4 | 8.592 | 1.416 |
| Permafrost | 1 | 0 | 5.800 |
| Assimilation | 1 | 0 | 59 |

## Kräuterkundler

Gesamtschaden 775.744: Skills 446.498, Auto-Attacks 329.246, Beschwörungen 0. Mana-Verbrauch 52.503, davon optionale Buffs einschließlich laufender Kosten 852, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 280. Mana-Wartezeit 188 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 94.025 | 93.231 |
| 2 | 84.237 | 84.284 |
| 3 | 74.781 | 74.781 |
| 4 | 73.929 | 73.183 |
| 5 | 75.508 | 77.001 |
| 6 | 75.161 | 74.377 |
| 7 | 71.823 | 78.488 |
| 8 | 75.253 | 73.636 |
| 9 | 73.707 | 76.241 |
| 10 | 76.306 | 70.522 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Natürlicher Schutz | 1 | 600 s | 264 |
| Aura Unterdrückung | 4 | 598 s | 588 |

Nicht angesetzt: Alles im Fluss — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.; Entgiftung — Giftabwehr ohne angreifenden Gegner hat keinen Effekt.; Innere Unruhe — Zufälliger Schadensbonus mit noch offener Verteilung bleibt aus.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 441 | 329.246 | 0 |
| Elektrisches Feld | 26 | 114.508 | 7.176 |
| Gezielter Blitz | 32 | 64.539 | 9.824 |
| Kugelblitz | 21 | 51.841 | 8.904 |
| Geladener Nebel | 26 | 46.945 | 6.968 |
| Ewiges Eis | 24 | 35.654 | 4.512 |
| Tobender Sturm | 3 | 35.338 | 5.886 |
| Wasserfesseln | 43 | 34.124 | 516 |
| Windschlitzer | 20 | 31.932 | 4.300 |
| Eislanze | 23 | 31.616 | 3.565 |
| Natürlicher Schutz | 1 | 0 | 264 |
| Aura Unterdrückung | 4 | 0 | 588 |

## Jäger

Gesamtschaden 1.098.580: Skills 454.950, Auto-Attacks 555.660, Beschwörungen 87.970. Mana-Verbrauch 36.733, davon optionale Buffs einschließlich laufender Kosten 1.844, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 768. Mana-Wartezeit 0 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 95.861 | 113.345 |
| 2 | 85.198 | 115.041 |
| 3 | 85.061 | 105.405 |
| 4 | 85.626 | 112.396 |
| 5 | 88.219 | 113.270 |
| 6 | 85.825 | 105.256 |
| 7 | 84.265 | 108.482 |
| 8 | 85.825 | 109.424 |
| 9 | 86.487 | 105.622 |
| 10 | 88.036 | 110.337 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Treffsicherheit | 1 | 600 s | 164 |
| Auge des Falken | 1 | 599 s | 192 |
| Waldläufer | 1 | 599 s | 165 |
| Pfeil der Vorfahren | 7 | 84 s | 1.323 |

Nicht angesetzt: Macht des Begleiters — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.; Giftpfeil — Zufälliger Gift-Proc bleibt wie im Ausgangstest aus.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 567 | 555.660 | 0 |
| Salve | 10 | 134.160 | 4.140 |
| Feuerpfeil | 66 | 92.928 | 7.392 |
| Seelenbegleiter | 2 | 87.970 | 264 |
| Präzisionsschuss | 11 | 67.102 | 11.979 |
| Gebundener Schuss | 35 | 40.086 | 1.890 |
| Pfeil der Vorfahren | 7 | 37.440 | 1.323 |
| Verstärkter Pfeil | 13 | 33.865 | 5.278 |
| Schockschuss | 13 | 20.956 | 2.054 |
| Entzugspfeil | 11 | 16.049 | 1.485 |
| Kettenschuss | 11 | 12.364 | 407 |
| Treffsicherheit | 1 | 0 | 164 |
| Auge des Falken | 1 | 0 | 192 |
| Waldläufer | 1 | 0 | 165 |

## Ritter

Gesamtschaden 602.954: Skills 223.470, Auto-Attacks 379.484, Beschwörungen 0. Mana-Verbrauch 48.982, davon optionale Buffs einschließlich laufender Kosten 12.020, davon laufende Kosten 9.000. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 201. Mana-Wartezeit 0 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 65.825 | 64.255 |
| 2 | 62.525 | 63.016 |
| 3 | 56.730 | 56.191 |
| 4 | 61.933 | 61.933 |
| 5 | 61.447 | 60.908 |
| 6 | 57.246 | 56.707 |
| 7 | 61.986 | 60.908 |
| 8 | 57.216 | 57.216 |
| 9 | 61.447 | 60.908 |
| 10 | 61.447 | 60.908 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Schutz Aura | 7 | 105 s | 2.912 |
| Provozieren | 1 | 600 s | 9.000 |
| Aktive Deckung | 1 | 600 s | 108 |

Nicht angesetzt: Verstärkung des Körpers — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.; Stählerne Rüstung — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 704 | 379.484 | 0 |
| Donnernde Lanze | 17 | 60.096 | 12.852 |
| Brecher des Geistes | 33 | 33.826 | 3.927 |
| Schildstoß | 21 | 32.950 | 5.502 |
| Schildsturm | 17 | 29.258 | 4.964 |
| Mächtiger Hieb | 22 | 27.985 | 3.960 |
| Brecher der Deckung | 22 | 23.101 | 2.904 |
| Erlösendes Feld | 9 | 16.254 | 2.853 |
| Schutz Aura | 7 | 0 | 2.912 |
| Provozieren | 1 | 0 | 9.000 |
| Aktive Deckung | 1 | 0 | 108 |

## Luminet

Gesamtschaden 933.899: Skills 757.628, Auto-Attacks 176.271, Beschwörungen 0. Mana-Verbrauch 56.917, davon optionale Buffs einschließlich laufender Kosten 0, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 300. Mana-Wartezeit 277 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 133.308 | 133.308 |
| 2 | 91.227 | 91.227 |
| 3 | 90.873 | 90.873 |
| 4 | 85.906 | 85.906 |
| 5 | 91.802 | 91.802 |
| 6 | 85.005 | 85.005 |
| 7 | 92.391 | 92.391 |
| 8 | 85.571 | 85.571 |
| 9 | 91.255 | 91.255 |
| 10 | 86.562 | 86.562 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |

Nicht angesetzt: Festigung des Geistes — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Energieschlag | 371 | 363.763 | 18.921 |
| Lichtblitz | 144 | 197.525 | 21.456 |
| Auto-Attack | 227 | 176.271 | 0 |
| Luminus | 60 | 52.524 | 1.320 |
| Ätherregen | 5 | 34.909 | 1.195 |
| Urteil des Himmels | 12 | 27.813 | 3.444 |
| Heiliges Kreuz | 11 | 21.139 | 3.124 |
| Eislanze | 14 | 19.672 | 2.170 |
| Schwerter des Lichtes | 10 | 17.958 | 2.570 |
| Heilige Vernichtung | 2 | 7.244 | 674 |
| Licht kristallenes Gefängnis | 5 | 6.384 | 635 |
| Aurora Wellen | 1 | 2.261 | 375 |
| Astralkörper | 1 | 2.211 | 363 |
| Göttliche Nova | 1 | 2.208 | 354 |
| Strafendes Licht | 1 | 2.016 | 316 |

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

Gesamtschaden 817.541: Skills 352.223, Auto-Attacks 465.318, Beschwörungen 0. Mana-Verbrauch 50.937, davon optionale Buffs einschließlich laufender Kosten 300, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 424. Mana-Wartezeit 218 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 95.019 | 104.951 |
| 2 | 72.715 | 82.107 |
| 3 | 70.695 | 80.270 |
| 4 | 66.184 | 77.481 |
| 5 | 69.818 | 80.270 |
| 6 | 67.544 | 79.627 |
| 7 | 66.536 | 79.244 |
| 8 | 69.244 | 77.960 |
| 9 | 65.673 | 77.869 |
| 10 | 70.426 | 77.763 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Macht der Wildnis | 1 | 600 s | 300 |

Nicht angesetzt: Macht des Felsens — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.; Geschwindigkeit der Dox — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.; Macht des Feuers — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 664 | 465.318 | 0 |
| Infernaler Kreuzschlag | 17 | 73.886 | 7.602 |
| Felszähne | 37 | 61.882 | 8.506 |
| Erdsäule | 18 | 39.934 | 6.478 |
| Sprungschlag | 16 | 37.462 | 6.270 |
| Beben | 20 | 30.912 | 4.074 |
| Infernal Zyklon | 5 | 25.282 | 3.618 |
| Verbrennen | 26 | 24.819 | 6.053 |
| Erdbeben | 11 | 23.454 | 2.465 |
| Felsensalve | 1 | 17.315 | 3.287 |
| Feuerlanze | 15 | 17.276 | 2.284 |
| Macht der Wildnis | 1 | 0 | 300 |

## Seelenjäger

Gesamtschaden 923.230: Skills 279.485, Auto-Attacks 643.745, Beschwörungen 0. Mana-Verbrauch 28.773, davon optionale Buffs einschließlich laufender Kosten 1.848, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 0. Mana am Ende 512. Mana-Wartezeit 127 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 95.651 | 111.300 |
| 2 | 84.802 | 91.609 |
| 3 | 71.932 | 90.016 |
| 4 | 75.305 | 90.939 |
| 5 | 74.801 | 89.069 |
| 6 | 72.622 | 87.212 |
| 7 | 75.426 | 92.363 |
| 8 | 74.038 | 91.587 |
| 9 | 75.547 | 90.064 |
| 10 | 73.749 | 89.069 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Beweglichkeit | 6 | 147 s | 846 |
| Scharfer Instinkte | 2 | 599 s | 512 |
| Gute Reflexe | 1 | 600 s | 349 |
| Keine Gnade | 1 | 599 s | 141 |

Nicht angesetzt: Erweckung der Leidenschaft — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.; Flinke Füße — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 854 | 643.745 | 0 |
| Feuerpfeil | 60 | 70.908 | 6.720 |
| Seelensammler | 71 | 62.111 | 3.408 |
| Doppelschuss | 21 | 55.852 | 6.153 |
| Explosionspfeil | 12 | 52.769 | 6.468 |
| Kopfschuss | 6 | 21.133 | 3.222 |
| Kettenschuss | 11 | 9.876 | 407 |
| Hinterhältiger Pfeil | 6 | 4.907 | 108 |
| Spektralketten | 1 | 1.930 | 439 |
| Beweglichkeit | 6 | 0 | 846 |
| Scharfer Instinkte | 2 | 0 | 512 |
| Gute Reflexe | 1 | 0 | 349 |
| Seelenschuss | 8 | 0 | 0 |
| Keine Gnade | 1 | 0 | 141 |

## Schurke

Gesamtschaden 762.298: Skills 261.300, Auto-Attacks 500.998, Beschwörungen 0. Mana-Verbrauch 32.531, davon optionale Buffs einschließlich laufender Kosten 2.233, davon laufende Kosten 0. Mana-Rückgewinnung durch eigene Angriffe 2.508. Mana am Ende 424. Mana-Wartezeit 121 s; die bisherige Abschnittsdefinition bleibt erhalten.

| Minute | Ohne Eigenbuffs | Mit Eigenbuffs |
| ---: | ---: | ---: |
| 1 | 87.457 | 94.537 |
| 2 | 64.655 | 74.525 |
| 3 | 66.150 | 87.073 |
| 4 | 63.391 | 65.214 |
| 5 | 64.173 | 77.760 |
| 6 | 63.091 | 66.020 |
| 7 | 60.223 | 82.468 |
| 8 | 61.821 | 69.063 |
| 9 | 66.738 | 81.212 |
| 10 | 61.022 | 64.426 |

| Eigener Buff | Anwendungen | Wirkzeit im Test | Mana einschließlich laufender Kosten |
| --- | ---: | ---: | ---: |
| Beweglichkeit | 6 | 147 s | 821 |
| List des Schurken | 2 | 599 s | 285 |
| Herz des Verräters | 1 | 600 s | 104 |
| Attentäter | 5 | 100 s | 1.023 |

Nicht angesetzt: Flinke Füße — Gruppen- oder Gruppenbegleiterbuff: im reinen Selbstbuff-Vergleich ausgeschlossen.

| Aktion / Skill | Anwendungen | Schaden | Mana |
| --- | ---: | ---: | ---: |
| Auto-Attack | 881 | 500.998 | 0 |
| Tödlicher Tanz | 5 | 41.560 | 4.432 |
| Wirbelnde Klinge | 7 | 40.564 | 4.887 |
| Brecher des Lichts | 11 | 34.898 | 4.119 |
| Klingentornado | 8 | 33.557 | 3.628 |
| Dunkler Schlag | 36 | 30.380 | 2.236 |
| Kunai Todesstoß | 35 | 21.540 | 0 |
| Sturmklinge | 10 | 18.964 | 3.152 |
| Überschallklinge | 5 | 10.602 | 1.839 |
| Blutklinge | 7 | 9.250 | 2.266 |
| Schattenfalle | 7 | 8.505 | 1.054 |
| Schattenschlag | 5 | 7.345 | 1.059 |
| Schattendolch | 3 | 4.135 | 581 |
| Beweglichkeit | 6 | 0 | 821 |
| List des Schurken | 2 | 0 | 285 |
| Dunkler Schleier | 7 | 0 | 1.046 |
| Herz des Verräters | 1 | 0 | 104 |
| Attentäter | 5 | 0 | 1.023 |

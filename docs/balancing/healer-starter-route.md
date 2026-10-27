# Heiler: Beispielroute gegen Wölfe und Kobolde bis Gegnerlevel 10

- Probe auf Grundlage des groben Benutzerverlaufs, keine berechnete XP-Kurve. Eine Zeile ist eine eigenständige Begegnung; zusätzliche Wolfs-Kills für Levelaufstiege sind nicht als exakte XP-Anzahl modelliert.
- Alle Zeilen starten mit vollem Leben. Keine passive HP-Regeneration im Kampf, Heilung, aktiven Schadensskills, Begleiter, Buffs, Crits, Ausweichen, Bewegung, Aggrogruppen oder Verbrauchsgüter. Frühe Skillfreischaltungen und erlernte Stufen bleiben offen. Ergebnisse sind eine reine Auto-Attack-Referenz.
- Heiler mit aktuellem R1-Intelligenzstab ab Level 1 (+25 M-ATK, −20 Tempopunkte), bestehenden Level-1-Werten und normalen Attributzuwächsen. Keine unbekannten Startattribute doppelt addiert. Grundfrequenz 1,1; mit Waffenabzug 0,88 Angriffe/s.
- Monsterfrequenz vorläufig 0,7 Angriffe/s (angenommene Grundfrequenz 1 × gespeicherter Tempofaktor 0,7), keine bestätigte Animationsfrequenz. Beide Seiten treffen erstmals nach ihrem eigenen Angriffsintervall; zeitgleiche Treffer zählen beide. Keine Monster-HP-Regeneration im Kampf.
- Wolfwerte aus aktuellen aufgelösten World-Templates. Kobolde als normale Wald-Krieger: Angriff 24, P-DEF 8, M-DEF 5 auf Level 1, danach vorhandene +4-%-Kurve. Keine neuen Goblinwerte in die Spieldaten geschrieben.
- Kobold-Leben ist noch undefiniert. Ausschließlich für Kampfdauer und Gesamtlebensverlust wird das Leben eines gleichleveligen erwachsenen Grauwolfs verwendet. Schaden pro Koboldtreffer hängt nicht von dieser HP-Annahme ab.
- Referenz für ersten erfolgreichen Rüstungsdrop: nach dem Level-3-Kobold wird der R1-Armschutz angelegt (+1.49 P-DEF / +3.49 M-DEF). Kein Armschutzdrop durch Wölfe. Keine weiteren Funde in der Hauptprobe; Vorher/Nachher-Vergleich ist separat aufgeführt.
- Der gesamte Armschutzbonus wird gegen das tatsächliche Monsterlevel ausgewertet. Bei Gegnern über dem Heilerlevel können sowohl mit als auch ohne Armschutz bereits 0 % physische Reduktion gelten.
- Angriff 37 wird separat als lokale Sensitivität bei sonst gleichem Gegner geprüft, nicht als neue Startzahl oder Wachstumskurve festgelegt. Pro Begegnung sind außerdem Heilerlevel −1/+1 enthalten.

## Hauptprobe

Kobold-Leben und Monsterfrequenz sind Annahmen. Die Spalte Schaden/Treffer folgt den aktuellen Angriff-/Abwehrwerten; Kampfdauer und Gesamtverlust hängen zusätzlich von den Annahmen ab.

| Gegner | Gegnerlevel | Heilerlevel | Heilerleben | Armschutz | Monsterleben | Monsterangriff | Schaden/Treffer | Heilerangriffe | Gegentreffer | Dauer s | Lebensverlust | Verlust % | Ergebnis |
| --- | ---: | ---: | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Welpe | 1 | 1 | 153 | Nein | 51 | 10,55 | 5,74 | 2 | 1 | 2,27 | 5,74 | 3,75 % | player |
| Jungtier | 2 | 2 | 183 | Nein | 68 | 13,71 | 10,67 | 3 | 2 | 3,41 | 21,34 | 11,66 % | player |
| Grauwolf | 3 | 2 | 183 | Nein | 144 | 28,52 | 28,52 | 6 | 4 | 6,82 | 114,07 | 62,33 % | player |
| Kobold | 3 | 3 | 213 | Nein | 144 (Probe) | 25,96 | 23,56 | 5 | 3 | 5,68 | 70,69 | 33,19 % | player |
| Kobold | 4 | 4 | 243 | Ja | 153 (Probe) | 27 | 21,81 | 5 | 3 | 5,68 | 65,43 | 26,93 % | player |
| Kobold | 5 | 4 | 243 | Ja | 163 (Probe) | 28,08 | 28,08 | 5 | 3 | 5,68 | 84,23 | 34,66 % | player |
| Grauwolf | 5 | 5 | 273 | Ja | 163 | 30,85 | 27,13 | 5 | 3 | 5,68 | 81,38 | 29,81 % | player |
| Grauwolf | 6 | 6 | 303 | Ja | 174 | 32,08 | 29,98 | 5 | 3 | 5,68 | 89,94 | 29,68 % | player |
| Grauwolf | 7 | 6 | 303 | Ja | 185 | 33,36 | 33,36 | 5 | 3 | 5,68 | 100,09 | 33,03 % | player |
| Kobold | 8 | 7 | 333 | Ja | 197 (Probe) | 31,58 | 31,58 | 5 | 3 | 5,68 | 94,75 | 28,45 % | player |
| Grauwolf | 8 | 7 | 333 | Ja | 197 | 34,7 | 34,7 | 5 | 3 | 5,68 | 104,09 | 31,26 % | player |
| Grauwolf | 9 | 8 | 363 | Ja | 210 | 36,08 | 36,08 | 5 | 3 | 5,68 | 108,25 | 29,82 % | player |
| Kobold | 9 | 8 | 363 | Ja | 210 (Probe) | 32,85 | 32,85 | 5 | 3 | 5,68 | 98,54 | 27,15 % | player |
| Kobold | 10 | 8 | 363 | Ja | 224 (Probe) | 34,16 | 34,16 | 6 | 4 | 6,82 | 136,64 | 37,64 % | player |
| Grauwolf | 10 | 9 | 393 | Ja | 224 | 37,53 | 37,53 | 6 | 4 | 6,82 | 150,11 | 38,2 % | player |

## Eingehender Schaden pro Treffer: Armschutz und Angriff 37

| Gegner | Gegnerlevel | Heilerlevel | Ohne Armschutz | Mit Armschutz | Angriff 37 im angenommenen Ausrüstungsstand |
| --- | ---: | ---: | ---: | ---: | ---: |
| Welpe | 1 | 1 | 5,74 | 3,84 | 20,15 |
| Jungtier | 2 | 2 | 10,67 | 7,87 | 28,79 |
| Grauwolf | 3 | 2 | 28,52 | 24,57 | 37 |
| Kobold | 3 | 3 | 23,56 | 18,47 | 33,59 |
| Kobold | 4 | 4 | 26,73 | 21,81 | 29,89 |
| Kobold | 5 | 4 | 28,08 | 28,08 | 37 |
| Grauwolf | 5 | 5 | 30,85 | 27,13 | 32,54 |
| Grauwolf | 6 | 6 | 32,08 | 29,98 | 34,58 |
| Grauwolf | 7 | 6 | 33,36 | 33,36 | 37 |
| Kobold | 8 | 7 | 31,58 | 31,58 | 37 |
| Grauwolf | 8 | 7 | 34,7 | 34,7 | 37 |
| Grauwolf | 9 | 8 | 36,08 | 36,08 | 37 |
| Kobold | 9 | 8 | 32,85 | 32,85 | 37 |
| Kobold | 10 | 8 | 34,16 | 34,16 | 37 |
| Grauwolf | 10 | 9 | 37,53 | 37,53 | 37 |

## Grenzen

Ein kleiner Verlust in der Referenz bedeutet einen leichten einzelnen Auto-Attack-Kampf, nicht automatisch zu schwache Monster. Ohne Erholung aufeinanderfolgende Gegner, Gruppen, Fähigkeiten, veränderte Monsterfrequenz und frühe Heilerskills verändern das Ergebnis. Die Armschutz-/Waffen-/Levelwerte sind berechnet; für eine endgültige Kampfabstimmung fehlen insbesondere Koboldleben, tatsächliche Angriffsintervalle und frühe Skillstufen. Es wurden keine Spiel- oder Datenbankwerte verändert.

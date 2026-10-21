# Zehn Minuten: permanente Eigen- und Gruppenbuffs

Auto-Attacks gegen die stärkste gefundene reine Skillfolge. Keine normale Kampfrotation mit Auto-Attacks zwischen Skills. Beschwörungen separat.

| Klasse | Nur Auto-Attacks | Skills: bisherige Priorität | Skills: stärkster gefundener Lauf | Suchgewinn |
| --- | ---: | ---: | ---: | ---: |
| Abenteurer | 896.938 | 274.529 | 274.529 | 0 |
| Butcher | 1.514.826 | 476.133 | 478.621 | 2.488 |
| Druide | 609.984 | 856.761 | 863.023 | 6.262 |
| Gladiator | 882.583 | 281.815 | 291.273 | 9.457 |
| Heiler | 705.459 | 873.290 | 880.058 | 6.768 |
| Kräuterkundler | 781.659 | 721.785 | 721.860 | 75 |
| Jäger | 1.064.202 | 531.479 | 531.479 | 0 |
| Ritter | 654.066 | 290.191 | 290.191 | 0 |
| Luminet | 715.629 | 1.846.171 | 1.884.206 | 38.035 |
| Ritualist | 842.247 | 860.761 | 903.914 | 43.153 |
| Schamane | 759.102 | 718.774 | 718.774 | 0 |
| Seelenjäger | 899.781 | 521.637 | 521.637 | 0 |
| Schurke | 945.421 | 508.188 | 508.188 | 0 |

## Geteilte Gruppenbuffs

| Skill | Stufe | Anbieter |
| --- | ---: | --- |
| Festigung des Geistes | 10 | Heiler |
| Verstärkung des Körpers | 10 | Abenteurer |
| Stählerne Rüstung | 1 | Ritter |
| Erweckung der Leidenschaft | 5 | Abenteurer |
| Macht des Begleiters | 10 | Abenteurer |
| Alles im Fluss | 10 | Kräuterkundler |
| Flinke Füße | 3 | Nachtjäger |
| Macht des Felsens | 10 | Schamane |
| Macht des Wassers | 10 | Druide |
| Aurora-Segen | 10 | Heiler |
| Geschwindigkeit der Dox | 3 | Schamane |
| Macht des Feuers | 10 | Schamane |
| Macht des Geistes | 10 | Druide |

## Regeln und Grenzen

- 600 Sekunden, Level 60, aktuelle R6-Ausrüstung. Alle zugeordneten deterministischen Eigenbuffs und alle verfügbaren Gruppenbuffs sind vor Beginn aktiv, werden einmal gestapelt und bleiben permanent aktiv. Keine Buff-Castzeiten, Aktivierungs- oder laufenden Buffkosten innerhalb dieses künstlichen Szenarios. Maximale HP/MP sind zu Beginn gefüllt.
- Auch kurze Eigenbuffs wie Attentäter, Blutrausch und Pfeil der Vorfahren gelten dauerhaft. Das ist ein künstlicher Vollbuff-Test und kein normaler Kampf. Bedingte Angriffs-/Kombosetups, Tarnfenster, Beschwörungen und durch einzelne Angriffe ausgelöste Kurzboni behalten ihre Kampfmechanik.
- Öffentliche Buffs werden auf dem höchsten tatsächlich lernbaren Anbieter-Level vergeben. Identische Skills werden nicht mehrfach gestapelt. Nicht zugeordnete alte Segen sind ausgeschlossen. Stählerne Rüstung wird als von einem Verbündeten bereitgestellt angenommen. Macht des Begleiters bufft Begleiter, keine Spieler und nicht Morrak direkt.
- Provozieren, zufällige Procs, reguläre Pets, Tränke und Food bleiben ausgeschlossen. Es gibt keine Gegenangriffe, Rüstung, Verfehlwürfe oder zufälligen Krits. Krit-/Block-/Ausweichwertung wird nicht ausgewürfelt.
- Auto-only enthält keine aktiven Schadensskills. Eigene durch Auto-Attacks ausgelöste Zusatzpfeile gehören zum Charakterschaden. Skills-only enthält keine Spieler-Auto-Attacks und keinen Explosionspfeil, der diese als Auslöser benötigt. Beide Modi können ihre klassenspezifischen temporären Kreaturen beschwören; deren Schaden wird separat ausgewiesen.
- Skillkosten, Regeneration, Cooldowns und Klassenressourcen bleiben aktiv. Notwendige Kombosetups behalten ihre Kosten und Zeiten. Kein unendliches Mana. Angriffsgeschwindigkeit beeinflusst Castzeiten noch nicht. Aktuelle Reaktionspause 0,1 Sekunden bleibt erhalten.
- Nahkampf-Basis 1,3 und Sättigung bis maximal 2 Aktionen/s bei 350 Rohpunkten; Jäger/Seelenjäger-Basis 1,1, Magier und Kräuterkundler unverändert. Die Sättigung gilt bislang nur für Nahkämpfer. Agilität liefert unverändert 0,06 Rohpunkte pro Punkt.
- Gesucht werden Skill-Auswahl und Priorität unter diesen Regeln. Mehrere Schadens-/Mana-/Zeitgewichtungen, ein reservierender Ansatz, wiederholte Auslassungsversuche und reproduzierbare alternative Prioritäten werden verglichen. Grobsuche im 0,05-s-Raster, Finalisten und veröffentlichte Ergebnisse im 0,01-s-Raster. Besten gefundener Lauf, kein mathematisch bewiesenes globales Optimum.
- Zehn Minuten erlauben lange Cooldowns grundsätzlich zweimal, erzwingen aber keine ineffiziente Anwendung. Selten oder nie verwendete Skills werden ausdrücklich aufgelistet. Einzelzieltest bewertet keine Flächenabdeckung, Kontrolle oder Defensive.

## Abenteurer

Suchläufe: 39. Gewählte Priorität: existingPriority.

| Modus | Charakterschaden | Beschwörungsschaden | Mana verbraucht | Mana am Ende | Auto-Attack-Aktionen |
| --- | ---: | ---: | ---: | ---: | ---: |
| autoOnly | 896.938 | 0 | 0 | 7.001 | 809 |
| skillsOnly | 274.529 | 0 | 29.415 | 7.001 | 0 |

### Tatsächliche Eröffnung: erste 30 Aktionen

| Zeit (s) | Skill | Mana danach |
| ---: | --- | ---: |
| 0.00 | Wirbelnde Klinge | 6.303 |
| 0.20 | Rudelangriff | 5.550 |
| 0.70 | Kreuzhieb | 5.281 |
| 0.90 | Sprungschlag | 4.901 |
| 1.00 | Blutender Schnitt | 4.808 |
| 34.80 | Kreuzhieb | 6.732 |
| 36.90 | Sprungschlag | 6.621 |
| 43.10 | Blutender Schnitt | 6.908 |
| 51.60 | Rudelangriff | 6.248 |
| 57.10 | Wirbelnde Klinge | 6.303 |
| 68.90 | Kreuzhieb | 6.732 |
| 72.90 | Sprungschlag | 6.621 |
| 85.20 | Blutender Schnitt | 6.908 |
| 103.00 | Rudelangriff | 6.248 |
| 103.50 | Kreuzhieb | 5.979 |
| 108.90 | Sprungschlag | 6.552 |
| 114.20 | Wirbelnde Klinge | 6.303 |
| 127.30 | Blutender Schnitt | 6.908 |
| 137.60 | Kreuzhieb | 6.732 |
| 144.90 | Sprungschlag | 6.621 |
| 154.40 | Rudelangriff | 6.248 |
| 169.40 | Blutender Schnitt | 6.908 |
| 171.30 | Wirbelnde Klinge | 6.303 |
| 171.70 | Kreuzhieb | 6.034 |
| 180.90 | Sprungschlag | 6.621 |
| 205.80 | Rudelangriff | 6.248 |
| 206.30 | Kreuzhieb | 5.979 |
| 211.50 | Blutender Schnitt | 6.839 |
| 216.90 | Sprungschlag | 6.621 |
| 228.40 | Wirbelnde Klinge | 6.303 |

Die vollständige zeitliche Reihenfolge steht in der JSON-Datei unter `skillsOnly.result.actionTimeline`. Die Priorität wird nach jeder Aktion anhand von Bereitschaft und Ressourcen neu geprüft; die Eröffnung ist kein blind wiederholter Zyklus.

### Verwendete Skills

| Skill | Anwendungen | Treffer/Schadensereignisse | Schaden | Mana |
| --- | ---: | ---: | ---: | ---: |
| Wirbelnde Klinge | 11 | 11 | 93.539 | 7.680 |
| Kreuzhieb | 18 | 18 | 60.487 | 4.844 |
| Rudelangriff | 12 | 12 | 51.692 | 9.033 |
| Sprungschlag | 17 | 17 | 46.150 | 6.462 |
| Blutender Schnitt | 15 | 15 | 22.661 | 1.397 |

### Weniger als zweimal eingesetzt

Alle ausgewerteten Angriffs-Skills mindestens zweimal eingesetzt.

## Butcher

Suchläufe: 53. Gewählte Priorität: weights:0.5/0.5/0.

| Modus | Charakterschaden | Beschwörungsschaden | Mana verbraucht | Mana am Ende | Auto-Attack-Aktionen |
| --- | ---: | ---: | ---: | ---: | ---: |
| autoOnly | 1.514.826 | 0 | 0 | 5.641 | 863 |
| skillsOnly | 478.621 | 0 | 62.419 | 5.641 | 0 |

### Tatsächliche Eröffnung: erste 30 Aktionen

| Zeit (s) | Skill | Mana danach |
| ---: | --- | ---: |
| 0.00 | Energieentladung | 5.641 |
| 0.50 | Rotier Schlag | 5.488 |
| 0.60 | Aufgeladener Schlag | 5.271 |
| 0.70 | Erdbeben | 5.040 |
| 0.90 | Dämonische Schockwelle | 4.760 |
| 1.20 | Mächtiger Hieb | 4.580 |
| 1.50 | Zorn des Henkers | 3.874 |
| 1.80 | Schädelspalter | 3.237 |
| 2.20 | Erdbrecher | 841 |
| 2.60 | Schmetterschlag | 498 |
| 3.10 | Abräumer | 798 |
| 3.80 | Schockwelle der Regeneration | 165 |
| 25.60 | Aufgeladener Schlag | 3.001 |
| 28.40 | Mächtiger Hieb | 3.257 |
| 28.70 | Rotier Schlag | 3.104 |
| 44.00 | Schmetterschlag | 4.941 |
| 49.70 | Abräumer | 5.505 |
| 50.60 | Aufgeladener Schlag | 5.288 |
| 55.60 | Mächtiger Hieb | 5.461 |
| 55.90 | Erdbeben | 5.230 |
| 56.70 | Rotier Schlag | 5.077 |
| 62.10 | Schädelspalter | 5.004 |
| 63.50 | Erdbrecher | 3.044 |
| 72.80 | Schockwelle der Regeneration | 3.719 |
| 75.60 | Aufgeladener Schlag | 3.939 |
| 82.80 | Mächtiger Hieb | 4.631 |
| 84.70 | Rotier Schlag | 4.914 |
| 85.40 | Schmetterschlag | 4.571 |
| 96.30 | Abräumer | 5.505 |
| 100.60 | Aufgeladener Schlag | 5.424 |

Die vollständige zeitliche Reihenfolge steht in der JSON-Datei unter `skillsOnly.result.actionTimeline`. Die Priorität wird nach jeder Aktion anhand von Bereitschaft und Ressourcen neu geprüft; die Eröffnung ist kein blind wiederholter Zyklus.

### Verwendete Skills

| Skill | Anwendungen | Treffer/Schadensereignisse | Schaden | Mana |
| --- | ---: | ---: | ---: | ---: |
| Erdbrecher | 10 | 10 | 77.553 | 23.960 |
| Aufgeladener Schlag | 24 | 24 | 62.647 | 5.208 |
| Mächtiger Hieb | 23 | 23 | 57.231 | 4.140 |
| Rotier Schlag | 22 | 22 | 51.685 | 3.366 |
| Schmetterschlag | 15 | 15 | 46.850 | 5.145 |
| Schädelspalter | 10 | 10 | 43.113 | 6.370 |
| Erdbeben | 11 | 11 | 35.071 | 2.541 |
| Abräumer | 13 | 13 | 29.878 | 1.768 |
| Schockwelle der Regeneration | 9 | 9 | 24.258 | 5.697 |
| Zorn des Henkers | 4 | 4 | 18.301 | 2.824 |
| Dämonische Schockwelle | 5 | 5 | 17.042 | 1.400 |
| Energieentladung | 4 | 4 | 14.993 | 0 |

### Weniger als zweimal eingesetzt

Alle ausgewerteten Angriffs-Skills mindestens zweimal eingesetzt.

## Druide

Suchläufe: 49. Gewählte Priorität: weights:0/1/0.

| Modus | Charakterschaden | Beschwörungsschaden | Mana verbraucht | Mana am Ende | Auto-Attack-Aktionen |
| --- | ---: | ---: | ---: | ---: | ---: |
| autoOnly | 609.984 | 103.188 | 264 | 8.036 | 720 |
| skillsOnly | 863.023 | 103.188 | 51.170 | 8.036 | 0 |

### Tatsächliche Eröffnung: erste 30 Aktionen

| Zeit (s) | Skill | Mana danach |
| ---: | --- | ---: |
| 0.00 | Naturgeist | 7.904 |
| 0.50 | Himmelsbrecher | 6.194 |
| 1.20 | Ätherregen | 5.955 |
| 1.90 | Vakuumimpuls | 5.478 |
| 2.30 | Windfesseln | 5.345 |
| 2.50 | Energieschlag | 5.319 |
| 2.75 | Bannmagie | 5.283 |
| 3.05 | Windschlitzer | 5.564 |
| 3.45 | Eisranken | 5.406 |
| 4.05 | Energieschlag | 5.380 |
| 4.30 | Manaexplosion | 0 |
| 6.00 | Energieschlag | 465 |
| 6.25 | Eislanze | 310 |
| 7.25 | Energieschlag | 284 |
| 8.50 | Energieschlag | 258 |
| 9.75 | Energieschlag | 723 |
| 11.00 | Energieschlag | 697 |
| 12.25 | Energieschlag | 1.162 |
| 13.50 | Energieschlag | 1.136 |
| 14.75 | Energieschlag | 1.110 |
| 16.00 | Energieschlag | 1.575 |
| 17.25 | Energieschlag | 1.549 |
| 18.50 | Energieschlag | 2.015 |
| 19.75 | Energieschlag | 1.989 |
| 21.00 | Energieschlag | 2.454 |
| 22.25 | Energieschlag | 2.428 |
| 23.50 | Energieschlag | 2.402 |
| 24.75 | Energieschlag | 2.867 |
| 25.95 | Eisranken | 2.709 |
| 26.55 | Energieschlag | 2.683 |

Die vollständige zeitliche Reihenfolge steht in der JSON-Datei unter `skillsOnly.result.actionTimeline`. Die Priorität wird nach jeder Aktion anhand von Bereitschaft und Ressourcen neu geprüft; die Eröffnung ist kein blind wiederholter Zyklus.

### Verwendete Skills

| Skill | Anwendungen | Treffer/Schadensereignisse | Schaden | Mana |
| --- | ---: | ---: | ---: | ---: |
| Energieschlag | 472 | 472 | 586.795 | 12.272 |
| Naturgeist | 2 | 657 | 103.188 | 264 |
| Himmelsbrecher | 5 | 10 | 52.069 | 8.550 |
| Eisranken | 27 | 135 | 47.796 | 4.266 |
| Ätherregen | 5 | 20 | 41.904 | 1.195 |
| Vakuumimpuls | 7 | 14 | 35.340 | 3.337 |
| Windfesseln | 19 | 19 | 32.469 | 2.538 |
| Windschlitzer | 15 | 15 | 30.569 | 3.144 |
| Eislanze | 15 | 15 | 26.493 | 2.325 |
| Manaexplosion | 2 | 2 | 7.004 | 13.206 |
| Bannmagie | 2 | 2 | 2.584 | 72 |

### Weniger als zweimal eingesetzt

Alle ausgewerteten Angriffs-Skills mindestens zweimal eingesetzt.

## Gladiator

Suchläufe: 57. Gewählte Priorität: weights:1/0/0/omit:127.

| Modus | Charakterschaden | Beschwörungsschaden | Mana verbraucht | Mana am Ende | Auto-Attack-Aktionen |
| --- | ---: | ---: | ---: | ---: | ---: |
| autoOnly | 882.583 | 0 | 0 | 6.607 | 671 |
| skillsOnly | 291.273 | 0 | 45.609 | 6.607 | 0 |

### Tatsächliche Eröffnung: erste 30 Aktionen

| Zeit (s) | Skill | Mana danach |
| ---: | --- | ---: |
| 0.00 | Energie der Wut | 6.152 |
| 0.20 | Ausbruch der Wut | 6.152 |
| 0.60 | Wutklinge | 6.152 |
| 0.90 | Sturm der Wut | 6.152 |
| 1.30 | Mächtiger Hieb | 5.972 |
| 1.60 | Holzspalter | 5.776 |
| 1.80 | Schmetterschlag | 5.433 |
| 2.30 | Kriegerischer Ansturm | 5.084 |
| 2.70 | Sprungschlag | 4.680 |
| 2.80 | Blutiger Durchbruch | 2.520 |
| 28.50 | Mächtiger Hieb | 6.427 |
| 38.70 | Holzspalter | 6.411 |
| 38.90 | Sprungschlag | 6.007 |
| 43.20 | Schmetterschlag | 6.264 |
| 44.80 | Wutklinge | 6.264 |
| 55.70 | Mächtiger Hieb | 6.427 |
| 56.20 | Sturm der Wut | 6.427 |
| 58.10 | Energie der Wut | 6.152 |
| 58.60 | Kriegerischer Ansturm | 5.803 |
| 74.90 | Sprungschlag | 6.203 |
| 75.80 | Holzspalter | 6.411 |
| 82.90 | Mächtiger Hieb | 6.427 |
| 84.20 | Blutiger Durchbruch | 4.447 |
| 84.70 | Schmetterschlag | 4.104 |
| 110.10 | Mächtiger Hieb | 6.427 |
| 110.90 | Sprungschlag | 6.023 |
| 112.90 | Holzspalter | 6.286 |
| 114.90 | Kriegerischer Ansturm | 6.258 |
| 116.20 | Energie der Wut | 5.803 |
| 126.10 | Schmetterschlag | 6.264 |

Die vollständige zeitliche Reihenfolge steht in der JSON-Datei unter `skillsOnly.result.actionTimeline`. Die Priorität wird nach jeder Aktion anhand von Bereitschaft und Ressourcen neu geprüft; die Eröffnung ist kein blind wiederholter Zyklus.

### Verwendete Skills

| Skill | Anwendungen | Treffer/Schadensereignisse | Schaden | Mana |
| --- | ---: | ---: | ---: | ---: |
| Blutiger Durchbruch | 8 | 24 | 73.240 | 17.280 |
| Sprungschlag | 17 | 17 | 48.593 | 6.868 |
| Mächtiger Hieb | 23 | 23 | 45.653 | 4.140 |
| Schmetterschlag | 15 | 15 | 39.320 | 5.145 |
| Holzspalter | 17 | 17 | 34.608 | 3.332 |
| Kriegerischer Ansturm | 11 | 11 | 29.155 | 3.839 |
| Ausbruch der Wut | 2 | 2 | 10.364 | 0 |
| Wutklinge | 2 | 2 | 5.298 | 0 |
| Sturm der Wut | 2 | 2 | 5.042 | 0 |
| Energie der Wut | 11 | 0 | 0 | 5.005 |

### Weniger als zweimal eingesetzt

- Wutexplosion: 0 Anwendungen; gespeicherter Cooldown 54 Sekunden.

## Heiler

Suchläufe: 41. Gewählte Priorität: seededAlternative:7.

| Modus | Charakterschaden | Beschwörungsschaden | Mana verbraucht | Mana am Ende | Auto-Attack-Aktionen |
| --- | ---: | ---: | ---: | ---: | ---: |
| autoOnly | 705.459 | 0 | 0 | 8.502 | 565 |
| skillsOnly | 880.058 | 0 | 30.501 | 8.502 | 0 |

### Tatsächliche Eröffnung: erste 30 Aktionen

| Zeit (s) | Skill | Mana danach |
| ---: | --- | ---: |
| 0.00 | Energieschlag | 8.476 |
| 0.25 | Kristallisierte Wasserspähre | 8.379 |
| 0.55 | Frostschauer | 7.837 |
| 1.05 | Schwerter des Lichtes | 7.580 |
| 1.85 | Energieschlag | 7.554 |
| 2.10 | Eislanze | 7.399 |
| 2.80 | Göttliche Nova | 7.045 |
| 3.30 | Energieschlag | 7.602 |
| 4.55 | Energieschlag | 7.576 |
| 5.80 | Energieschlag | 7.550 |
| 7.05 | Energieschlag | 8.107 |
| 8.30 | Energieschlag | 8.081 |
| 9.55 | Energieschlag | 8.476 |
| 10.80 | Energieschlag | 8.450 |
| 12.05 | Energieschlag | 8.476 |
| 13.30 | Energieschlag | 8.450 |
| 14.55 | Energieschlag | 8.424 |
| 15.80 | Energieschlag | 8.476 |
| 17.05 | Energieschlag | 8.450 |
| 18.30 | Energieschlag | 8.476 |
| 19.55 | Energieschlag | 8.450 |
| 20.45 | Kristallisierte Wasserspähre | 8.353 |
| 20.80 | Energieschlag | 8.327 |
| 22.05 | Energieschlag | 8.476 |
| 23.30 | Energieschlag | 8.450 |
| 24.55 | Energieschlag | 8.476 |
| 25.80 | Energieschlag | 8.450 |
| 27.05 | Energieschlag | 8.476 |
| 28.30 | Energieschlag | 8.450 |
| 29.55 | Energieschlag | 8.424 |

Die vollständige zeitliche Reihenfolge steht in der JSON-Datei unter `skillsOnly.result.actionTimeline`. Die Priorität wird nach jeder Aktion anhand von Bereitschaft und Ressourcen neu geprüft; die Eröffnung ist kein blind wiederholter Zyklus.

### Verwendete Skills

| Skill | Anwendungen | Treffer/Schadensereignisse | Schaden | Mana |
| --- | ---: | ---: | ---: | ---: |
| Energieschlag | 473 | 473 | 640.253 | 12.298 |
| Frostschauer | 16 | 80 | 123.999 | 8.672 |
| Kristallisierte Wasserspähre | 30 | 30 | 49.835 | 2.910 |
| Eislanze | 17 | 17 | 32.540 | 2.635 |
| Schwerter des Lichtes | 10 | 10 | 22.776 | 2.570 |
| Göttliche Nova | 4 | 4 | 10.654 | 1.416 |

### Weniger als zweimal eingesetzt

Alle ausgewerteten Angriffs-Skills mindestens zweimal eingesetzt.

## Kräuterkundler

Suchläufe: 47. Gewählte Priorität: seededAlternative:0.

| Modus | Charakterschaden | Beschwörungsschaden | Mana verbraucht | Mana am Ende | Auto-Attack-Aktionen |
| --- | ---: | ---: | ---: | ---: | ---: |
| autoOnly | 781.659 | 0 | 0 | 8.253 | 617 |
| skillsOnly | 721.860 | 0 | 62.236 | 8.253 | 0 |

### Tatsächliche Eröffnung: erste 30 Aktionen

| Zeit (s) | Skill | Mana danach |
| ---: | --- | ---: |
| 0.00 | Wasserfesseln | 8.241 |
| 0.30 | Elektrisches Feld | 7.965 |
| 0.70 | Ewiges Eis | 7.777 |
| 1.40 | Geladener Nebel | 7.509 |
| 1.90 | Windschlitzer | 7.294 |
| 2.40 | Eislanze | 7.139 |
| 3.10 | Tobender Sturm | 5.689 |
| 4.00 | Kugelblitz | 5.265 |
| 4.60 | Gezielter Blitz | 4.958 |
| 13.70 | Wasserfesseln | 6.481 |
| 22.80 | Gezielter Blitz | 7.709 |
| 23.60 | Elektrisches Feld | 7.433 |
| 24.00 | Geladener Nebel | 7.677 |
| 25.30 | Ewiges Eis | 7.489 |
| 27.40 | Wasserfesseln | 7.988 |
| 29.00 | Eislanze | 7.833 |
| 32.30 | Windschlitzer | 8.038 |
| 32.80 | Kugelblitz | 7.614 |
| 41.00 | Gezielter Blitz | 7.946 |
| 41.30 | Wasserfesseln | 7.934 |
| 46.40 | Geladener Nebel | 7.985 |
| 46.90 | Elektrisches Feld | 7.709 |
| 49.90 | Ewiges Eis | 8.033 |
| 55.00 | Wasserfesseln | 8.241 |
| 55.60 | Eislanze | 8.086 |
| 59.20 | Gezielter Blitz | 7.946 |
| 61.30 | Kugelblitz | 7.829 |
| 62.70 | Windschlitzer | 7.614 |
| 68.70 | Wasserfesseln | 8.241 |
| 69.00 | Geladener Nebel | 7.985 |

Die vollständige zeitliche Reihenfolge steht in der JSON-Datei unter `skillsOnly.result.actionTimeline`. Die Priorität wird nach jeder Aktion anhand von Bereitschaft und Ressourcen neu geprüft; die Eröffnung ist kein blind wiederholter Zyklus.

### Verwendete Skills

| Skill | Anwendungen | Treffer/Schadensereignisse | Schaden | Mana |
| --- | ---: | ---: | ---: | ---: |
| Elektrisches Feld | 26 | 130 | 185.599 | 7.176 |
| Tobender Sturm | 8 | 72 | 132.520 | 15.696 |
| Gezielter Blitz | 33 | 33 | 84.013 | 10.131 |
| Kugelblitz | 21 | 21 | 63.052 | 8.904 |
| Geladener Nebel | 27 | 27 | 62.798 | 7.236 |
| Wasserfesseln | 44 | 44 | 57.810 | 528 |
| Ewiges Eis | 25 | 25 | 50.147 | 4.700 |
| Eislanze | 23 | 23 | 43.582 | 3.565 |
| Windschlitzer | 20 | 20 | 42.337 | 4.300 |

### Weniger als zweimal eingesetzt

Alle ausgewerteten Angriffs-Skills mindestens zweimal eingesetzt.

## Jäger

Suchläufe: 45. Gewählte Priorität: existingPriority.

| Modus | Charakterschaden | Beschwörungsschaden | Mana verbraucht | Mana am Ende | Auto-Attack-Aktionen |
| --- | ---: | ---: | ---: | ---: | ---: |
| autoOnly | 1.064.202 | 173.839 | 264 | 5.931 | 579 |
| skillsOnly | 531.479 | 173.839 | 35.136 | 5.931 | 0 |

### Tatsächliche Eröffnung: erste 30 Aktionen

| Zeit (s) | Skill | Mana danach |
| ---: | --- | ---: |
| 0.00 | Seelenbegleiter | 5.799 |
| 0.50 | Salve | 5.385 |
| 0.80 | Präzisionsschuss | 4.296 |
| 1.30 | Verstärkter Pfeil | 3.890 |
| 1.80 | Schockschuss | 3.732 |
| 2.20 | Entzugspfeil | 3.597 |
| 2.40 | Feuerpfeil | 3.485 |
| 2.50 | Gebundener Schuss | 3.431 |
| 3.00 | Kettenschuss | 3.839 |
| 11.40 | Feuerpfeil | 4.617 |
| 19.90 | Gebundener Schuss | 5.877 |
| 20.40 | Feuerpfeil | 5.765 |
| 29.40 | Feuerpfeil | 5.819 |
| 37.30 | Gebundener Schuss | 5.877 |
| 38.40 | Feuerpfeil | 5.765 |
| 47.40 | Feuerpfeil | 5.819 |
| 49.70 | Verstärkter Pfeil | 5.525 |
| 51.10 | Schockschuss | 5.773 |
| 54.70 | Gebundener Schuss | 5.877 |
| 56.30 | Entzugspfeil | 5.742 |
| 56.50 | Feuerpfeil | 5.630 |
| 58.20 | Präzisionsschuss | 4.842 |
| 59.20 | Kettenschuss | 4.805 |
| 64.70 | Salve | 5.281 |
| 65.50 | Feuerpfeil | 5.169 |
| 72.10 | Gebundener Schuss | 5.877 |
| 74.50 | Feuerpfeil | 5.765 |
| 83.50 | Feuerpfeil | 5.819 |
| 89.50 | Gebundener Schuss | 5.877 |
| 92.50 | Feuerpfeil | 5.819 |

Die vollständige zeitliche Reihenfolge steht in der JSON-Datei unter `skillsOnly.result.actionTimeline`. Die Priorität wird nach jeder Aktion anhand von Bereitschaft und Ressourcen neu geprüft; die Eröffnung ist kein blind wiederholter Zyklus.

### Verwendete Skills

| Skill | Anwendungen | Treffer/Schadensereignisse | Schaden | Mana |
| --- | ---: | ---: | ---: | ---: |
| Salve | 10 | 10 | 179.520 | 4.140 |
| Seelenbegleiter | 2 | 897 | 173.839 | 264 |
| Feuerpfeil | 67 | 67 | 119.662 | 7.504 |
| Präzisionsschuss | 11 | 11 | 74.587 | 11.979 |
| Gebundener Schuss | 35 | 35 | 54.495 | 1.890 |
| Verstärkter Pfeil | 13 | 13 | 38.779 | 5.278 |
| Schockschuss | 13 | 13 | 25.870 | 2.054 |
| Entzugspfeil | 12 | 12 | 22.044 | 1.620 |
| Kettenschuss | 11 | 11 | 16.522 | 407 |

### Weniger als zweimal eingesetzt

Alle ausgewerteten Angriffs-Skills mindestens zweimal eingesetzt.

## Ritter

Suchläufe: 43. Gewählte Priorität: existingPriority.

| Modus | Charakterschaden | Beschwörungsschaden | Mana verbraucht | Mana am Ende | Auto-Attack-Aktionen |
| --- | ---: | ---: | ---: | ---: | ---: |
| autoOnly | 654.066 | 0 | 0 | 7.333 | 668 |
| skillsOnly | 290.191 | 0 | 37.393 | 7.027 | 0 |

### Tatsächliche Eröffnung: erste 30 Aktionen

| Zeit (s) | Skill | Mana danach |
| ---: | --- | ---: |
| 0.00 | Donnernde Lanze | 6.577 |
| 0.10 | Erlösendes Feld | 6.260 |
| 0.60 | Schildsturm | 5.968 |
| 0.80 | Schildstoß | 5.706 |
| 1.00 | Mächtiger Hieb | 5.526 |
| 1.30 | Brecher der Deckung | 5.394 |
| 1.50 | Brecher des Geistes | 5.275 |
| 19.60 | Brecher des Geistes | 7.214 |
| 28.20 | Mächtiger Hieb | 7.153 |
| 28.50 | Brecher der Deckung | 7.021 |
| 29.90 | Schildstoß | 6.759 |
| 37.00 | Donnernde Lanze | 6.577 |
| 37.70 | Schildsturm | 6.285 |
| 37.90 | Brecher des Geistes | 6.166 |
| 55.40 | Mächtiger Hieb | 7.153 |
| 55.70 | Brecher der Deckung | 7.021 |
| 56.00 | Brecher des Geistes | 6.902 |
| 59.00 | Schildstoß | 7.071 |
| 74.00 | Donnernde Lanze | 6.577 |
| 74.10 | Brecher des Geistes | 6.458 |
| 74.50 | Erlösendes Feld | 6.141 |
| 75.00 | Schildsturm | 6.346 |
| 82.60 | Mächtiger Hieb | 7.153 |
| 82.90 | Brecher der Deckung | 7.021 |
| 88.10 | Schildstoß | 7.071 |
| 92.20 | Brecher des Geistes | 7.214 |
| 109.80 | Mächtiger Hieb | 7.153 |
| 110.10 | Brecher der Deckung | 7.021 |
| 110.30 | Brecher des Geistes | 6.902 |
| 111.00 | Donnernde Lanze | 6.577 |

Die vollständige zeitliche Reihenfolge steht in der JSON-Datei unter `skillsOnly.result.actionTimeline`. Die Priorität wird nach jeder Aktion anhand von Bereitschaft und Ressourcen neu geprüft; die Eröffnung ist kein blind wiederholter Zyklus.

### Verwendete Skills

| Skill | Anwendungen | Treffer/Schadensereignisse | Schaden | Mana |
| --- | ---: | ---: | ---: | ---: |
| Donnernde Lanze | 17 | 17 | 67.577 | 12.852 |
| Brecher des Geistes | 34 | 34 | 49.815 | 4.046 |
| Schildstoß | 21 | 21 | 42.192 | 5.502 |
| Mächtiger Hieb | 23 | 23 | 39.379 | 4.140 |
| Schildsturm | 17 | 17 | 36.739 | 4.964 |
| Brecher der Deckung | 23 | 23 | 34.273 | 3.036 |
| Erlösendes Feld | 9 | 9 | 20.215 | 2.853 |

### Weniger als zweimal eingesetzt

Alle ausgewerteten Angriffs-Skills mindestens zweimal eingesetzt.

## Luminet

Suchläufe: 57. Gewählte Priorität: seededAlternative:0.

| Modus | Charakterschaden | Beschwörungsschaden | Mana verbraucht | Mana am Ende | Auto-Attack-Aktionen |
| --- | ---: | ---: | ---: | ---: | ---: |
| autoOnly | 715.629 | 0 | 0 | 7.367 | 565 |
| skillsOnly | 1.884.206 | 0 | 94.346 | 7.013 | 0 |

### Tatsächliche Eröffnung: erste 30 Aktionen

| Zeit (s) | Skill | Mana danach |
| ---: | --- | ---: |
| 0.00 | Luminus | 7.345 |
| 0.20 | Ätherregen | 7.106 |
| 0.90 | Energieschlag | 7.055 |
| 1.15 | Eislanze | 6.900 |
| 1.85 | Energieschlag | 6.849 |
| 2.10 | Licht kristallenes Gefängnis | 6.722 |
| 2.70 | Energieschlag | 6.671 |
| 2.95 | Heilige Vernichtung | 6.334 |
| 3.15 | Aurora Wellen | 6.496 |
| 4.05 | Energieschlag | 6.445 |
| 4.30 | Astralkörper | 6.082 |
| 4.90 | Energieschlag | 6.031 |
| 5.15 | Göttliche Nova | 5.677 |
| 5.65 | Energieschlag | 5.626 |
| 5.90 | Lichtblitz | 5.477 |
| 6.10 | Urteil des Himmels | 5.726 |
| 6.70 | Energieschlag | 5.675 |
| 6.95 | Heiliges Kreuz | 5.391 |
| 7.25 | Strafendes Licht | 5.075 |
| 7.65 | Energieschlag | 5.024 |
| 7.90 | Schwerter des Lichtes | 4.767 |
| 8.70 | Energieschlag | 4.716 |
| 9.00 | Lichtblitz | 5.104 |
| 9.20 | Luminus | 5.082 |
| 9.45 | Energieschlag | 5.031 |
| 10.20 | Energieschlag | 4.980 |
| 10.95 | Energieschlag | 4.929 |
| 11.70 | Energieschlag | 4.878 |
| 12.10 | Lichtblitz | 5.265 |
| 12.45 | Energieschlag | 5.214 |

Die vollständige zeitliche Reihenfolge steht in der JSON-Datei unter `skillsOnly.result.actionTimeline`. Die Priorität wird nach jeder Aktion anhand von Bereitschaft und Ressourcen neu geprüft; die Eröffnung ist kein blind wiederholter Zyklus.

### Verwendete Skills

| Skill | Anwendungen | Treffer/Schadensereignisse | Schaden | Mana |
| --- | ---: | ---: | ---: | ---: |
| Energieschlag | 767 | 767 | 1.140.435 | 39.117 |
| Lichtblitz | 186 | 186 | 349.329 | 27.714 |
| Luminus | 66 | 66 | 91.342 | 1.452 |
| Heilige Vernichtung | 13 | 13 | 67.418 | 4.381 |
| Ätherregen | 5 | 20 | 44.637 | 1.195 |
| Urteil des Himmels | 14 | 28 | 43.072 | 4.018 |
| Heiliges Kreuz | 13 | 13 | 31.553 | 3.692 |
| Eislanze | 15 | 15 | 28.639 | 2.325 |
| Schwerter des Lichtes | 10 | 10 | 22.956 | 2.570 |
| Strafendes Licht | 8 | 8 | 20.267 | 2.528 |
| Astralkörper | 6 | 6 | 16.444 | 2.178 |
| Göttliche Nova | 4 | 4 | 10.789 | 1.416 |
| Licht kristallenes Gefängnis | 5 | 5 | 8.910 | 635 |
| Aurora Wellen | 3 | 3 | 8.414 | 1.125 |

### Weniger als zweimal eingesetzt

Alle ausgewerteten Angriffs-Skills mindestens zweimal eingesetzt.

## Ritualist

Suchläufe: 60. Gewählte Priorität: weights:0.5/0.5/0/omit:180.

| Modus | Charakterschaden | Beschwörungsschaden | Mana verbraucht | Mana am Ende | Auto-Attack-Aktionen |
| --- | ---: | ---: | ---: | ---: | ---: |
| autoOnly | 842.247 | 320.598 | 0 | 6.787 | 567 |
| skillsOnly | 903.914 | 321.007 | 58.444 | 6.787 | 0 |

### Tatsächliche Eröffnung: erste 30 Aktionen

| Zeit (s) | Skill | Mana danach |
| ---: | --- | ---: |
| 0.00 | Morrak´s Meister | 6.637 |
| 0.50 | Schrei der Unterwelt | 6.637 |
| 0.70 | Dunkler Impuls | 6.572 |
| 0.90 | Seelenfessel | 6.477 |
| 1.00 | Seelenqual | 6.410 |
| 1.20 | Seelenqual | 6.343 |
| 1.40 | Seelenqual | 6.276 |
| 1.60 | Seelenqual | 6.209 |
| 1.80 | Seelenqual | 6.142 |
| 2.00 | Seelenqual | 6.075 |
| 2.20 | Seelenqual | 6.008 |
| 2.40 | Seelenqual | 5.941 |
| 2.60 | Seelenqual | 5.874 |
| 2.80 | Seelenqual | 5.807 |
| 3.00 | Seelenqual | 6.228 |
| 3.20 | Seelenqual | 6.161 |
| 3.40 | Seelenqual | 6.094 |
| 3.60 | Seelenqual | 6.027 |
| 3.80 | Seelenqual | 5.960 |
| 3.81 | Seelenernte | 5.552 |
| 4.21 | Feuer der Verdammten | 5.049 |
| 4.71 | Feuerball | 4.900 |
| 4.91 | Sturm des Feuers | 4.719 |
| 5.21 | Lebenssauger | 4.365 |
| 5.46 | Meteoritenschauer | 1.757 |
| 6.36 | Dunkler Impuls | 2.179 |
| 8.81 | Feuerball | 2.030 |
| 11.46 | Dunkler Impuls | 2.453 |
| 12.91 | Feuerball | 2.791 |
| 16.56 | Dunkler Impuls | 3.214 |

Die vollständige zeitliche Reihenfolge steht in der JSON-Datei unter `skillsOnly.result.actionTimeline`. Die Priorität wird nach jeder Aktion anhand von Bereitschaft und Ressourcen neu geprüft; die Eröffnung ist kein blind wiederholter Zyklus.

### Verwendete Skills

| Skill | Anwendungen | Treffer/Schadensereignisse | Schaden | Mana |
| --- | ---: | ---: | ---: | ---: |
| Morrak´s Meister | 2 | 592 | 321.007 | 0 |
| Feuerball | 145 | 145 | 313.245 | 21.605 |
| Dunkler Impuls | 117 | 117 | 204.899 | 7.605 |
| Seelenqual | 105 | 105 | 187.666 | 7.035 |
| Feuer der Verdammten | 12 | 84 | 76.222 | 6.036 |
| Schrei der Unterwelt | 8 | 8 | 32.505 | 0 |
| Lebenssauger | 14 | 14 | 28.045 | 4.956 |
| Meteoritenschauer | 3 | 18 | 24.325 | 7.824 |
| Sturm des Feuers | 6 | 6 | 13.441 | 1.086 |
| Seelenfessel | 7 | 7 | 12.999 | 665 |
| Seelenernte | 4 | 4 | 10.568 | 1.632 |

### Weniger als zweimal eingesetzt

- Seelenplage: 0 Anwendungen; gespeicherter Cooldown 76 Sekunden.

## Schamane

Suchläufe: 49. Gewählte Priorität: existingPriority.

| Modus | Charakterschaden | Beschwörungsschaden | Mana verbraucht | Mana am Ende | Auto-Attack-Aktionen |
| --- | ---: | ---: | ---: | ---: | ---: |
| autoOnly | 759.102 | 0 | 0 | 7.473 | 668 |
| skillsOnly | 718.774 | 0 | 91.013 | 7.468 | 0 |

### Tatsächliche Eröffnung: erste 30 Aktionen

| Zeit (s) | Skill | Mana danach |
| ---: | --- | ---: |
| 0.00 | Felsensalve | 4.186 |
| 0.70 | Infernal Zyklon | 3.462 |
| 1.20 | Infernaler Kreuzschlag | 3.015 |
| 1.30 | Erdbeben | 2.791 |
| 1.50 | Sprungschlag | 2.399 |
| 1.60 | Erdsäule | 2.039 |
| 2.00 | Felszähne | 1.809 |
| 2.20 | Beben | 1.605 |
| 2.40 | Feuerlanze | 1.453 |
| 2.70 | Verbrennen | 1.220 |
| 17.10 | Felszähne | 3.566 |
| 24.90 | Verbrennen | 4.879 |
| 30.90 | Erdsäule | 5.549 |
| 31.30 | Beben | 5.345 |
| 32.20 | Felszähne | 5.115 |
| 34.20 | Infernaler Kreuzschlag | 5.183 |
| 37.50 | Sprungschlag | 5.306 |
| 42.60 | Feuerlanze | 6.184 |
| 47.10 | Verbrennen | 6.467 |
| 47.40 | Felszähne | 6.237 |
| 51.60 | Felsensalve | 3.980 |
| 56.40 | Erdbeben | 4.271 |
| 60.20 | Erdsäule | 4.941 |
| 60.60 | Beben | 4.737 |
| 62.50 | Felszähne | 4.507 |
| 67.20 | Infernaler Kreuzschlag | 5.090 |
| 69.30 | Verbrennen | 5.373 |
| 73.50 | Sprungschlag | 5.496 |
| 77.60 | Felszähne | 5.781 |
| 82.80 | Feuerlanze | 6.659 |

Die vollständige zeitliche Reihenfolge steht in der JSON-Datei unter `skillsOnly.result.actionTimeline`. Die Priorität wird nach jeder Aktion anhand von Bereitschaft und Ressourcen neu geprüft; die Eröffnung ist kein blind wiederholter Zyklus.

### Verwendete Skills

| Skill | Anwendungen | Treffer/Schadensereignisse | Schaden | Mana |
| --- | ---: | ---: | ---: | ---: |
| Felsensalve | 12 | 12 | 234.305 | 39.448 |
| Infernaler Kreuzschlag | 19 | 19 | 119.561 | 8.496 |
| Felszähne | 40 | 40 | 84.585 | 9.196 |
| Erdsäule | 21 | 42 | 55.875 | 7.557 |
| Infernal Zyklon | 6 | 36 | 49.457 | 4.342 |
| Sprungschlag | 17 | 17 | 47.320 | 6.662 |
| Beben | 21 | 21 | 41.743 | 4.278 |
| Erdbeben | 11 | 11 | 33.989 | 2.465 |
| Verbrennen | 27 | 270 | 26.698 | 6.286 |
| Feuerlanze | 15 | 15 | 25.242 | 2.284 |

### Weniger als zweimal eingesetzt

Alle ausgewerteten Angriffs-Skills mindestens zweimal eingesetzt.

## Seelenjäger

Suchläufe: 45. Gewählte Priorität: existingPriority.

| Modus | Charakterschaden | Beschwörungsschaden | Mana verbraucht | Mana am Ende | Auto-Attack-Aktionen |
| --- | ---: | ---: | ---: | ---: | ---: |
| autoOnly | 899.781 | 0 | 0 | 4.983 | 795 |
| skillsOnly | 521.637 | 0 | 33.734 | 4.983 | 0 |

### Tatsächliche Eröffnung: erste 30 Aktionen

| Zeit (s) | Skill | Mana danach |
| ---: | --- | ---: |
| 0.00 | Seelenschuss | 4.983 |
| 0.00 | Seelensammler | 4.935 |
| 0.20 | Seelensammler | 4.887 |
| 0.40 | Seelensammler | 4.839 |
| 0.60 | Seelensammler | 4.791 |
| 0.80 | Seelensammler | 4.743 |
| 1.00 | Seelensammler | 4.695 |
| 1.20 | Seelensammler | 4.647 |
| 1.40 | Seelensammler | 4.599 |
| 1.60 | Seelensammler | 4.551 |
| 1.80 | Seelensammler | 4.503 |
| 2.00 | Seelensammler | 4.455 |
| 2.20 | Seelensammler | 4.407 |
| 2.40 | Seelensammler | 4.359 |
| 2.60 | Seelensammler | 4.311 |
| 2.80 | Seelensammler | 4.263 |
| 3.00 | Seelensammler | 4.624 |
| 3.20 | Seelensammler | 4.576 |
| 3.40 | Seelensammler | 4.528 |
| 3.60 | Seelensammler | 4.480 |
| 3.80 | Seelensammler | 4.432 |
| 4.00 | Seelensammler | 4.384 |
| 4.20 | Seelensammler | 4.336 |
| 4.40 | Seelensammler | 4.288 |
| 4.60 | Seelensammler | 4.240 |
| 4.80 | Seelensammler | 4.192 |
| 5.00 | Spektralketten | 3.753 |
| 5.40 | Kopfschuss | 3.216 |
| 5.80 | Doppelschuss | 2.923 |
| 5.90 | Feuerpfeil | 2.811 |

Die vollständige zeitliche Reihenfolge steht in der JSON-Datei unter `skillsOnly.result.actionTimeline`. Die Priorität wird nach jeder Aktion anhand von Bereitschaft und Ressourcen neu geprüft; die Eröffnung ist kein blind wiederholter Zyklus.

### Verwendete Skills

| Skill | Anwendungen | Treffer/Schadensereignisse | Schaden | Mana |
| --- | ---: | ---: | ---: | ---: |
| Seelensammler | 200 | 200 | 250.560 | 9.600 |
| Feuerpfeil | 64 | 64 | 99.827 | 7.168 |
| Doppelschuss | 24 | 24 | 81.974 | 7.032 |
| Kopfschuss | 11 | 11 | 46.229 | 5.907 |
| Spektralketten | 8 | 8 | 21.838 | 3.512 |
| Kettenschuss | 11 | 11 | 14.034 | 407 |
| Hinterhältiger Pfeil | 6 | 6 | 7.175 | 108 |
| Seelenschuss | 8 | 0 | 0 | 0 |

### Weniger als zweimal eingesetzt

Alle ausgewerteten Angriffs-Skills mindestens zweimal eingesetzt.

## Schurke

Suchläufe: 53. Gewählte Priorität: existingPriority.

| Modus | Charakterschaden | Beschwörungsschaden | Mana verbraucht | Mana am Ende | Auto-Attack-Aktionen |
| --- | ---: | ---: | ---: | ---: | ---: |
| autoOnly | 945.421 | 0 | 0 | 5.265 | 932 |
| skillsOnly | 508.188 | 0 | 41.630 | 5.225 | 0 |

### Tatsächliche Eröffnung: erste 30 Aktionen

| Zeit (s) | Skill | Mana danach |
| ---: | --- | ---: |
| 0.00 | Dunkler Schleier | 5.116 |
| 0.20 | Schattenfalle | 4.965 |
| 0.50 | Schattenschlag | 4.753 |
| 1.60 | Schattendolch | 4.560 |
| 1.80 | Tödlicher Tanz | 3.673 |
| 2.00 | Wirbelnde Klinge | 2.975 |
| 2.20 | Klingentornado | 2.522 |
| 2.40 | Brecher des Lichts | 2.147 |
| 2.50 | Überschallklinge | 1.779 |
| 3.60 | Sturmklinge | 1.878 |
| 3.80 | Blutklinge | 1.554 |
| 4.00 | Dunkler Schlag | 1.492 |
| 4.10 | Kunai Todesstoß | 1.492 |
| 18.00 | Dunkler Schlag | 3.498 |
| 20.10 | Kunai Todesstoß | 3.498 |
| 32.00 | Dunkler Schlag | 5.090 |
| 36.10 | Kunai Todesstoß | 5.265 |
| 45.40 | Brecher des Lichts | 4.891 |
| 46.00 | Dunkler Schlag | 4.828 |
| 52.10 | Kunai Todesstoß | 5.265 |
| 59.10 | Wirbelnde Klinge | 4.567 |
| 60.00 | Dunkler Schlag | 4.918 |
| 62.70 | Sturmklinge | 4.603 |
| 68.10 | Kunai Todesstoß | 5.265 |
| 68.30 | Klingentornado | 4.811 |
| 69.90 | Tödlicher Tanz | 4.339 |
| 74.00 | Dunkler Schlag | 4.690 |
| 74.90 | Blutklinge | 4.367 |
| 84.10 | Kunai Todesstoß | 5.265 |
| 88.00 | Dunkler Schlag | 5.203 |

Die vollständige zeitliche Reihenfolge steht in der JSON-Datei unter `skillsOnly.result.actionTimeline`. Die Priorität wird nach jeder Aktion anhand von Bereitschaft und Ressourcen neu geprüft; die Eröffnung ist kein blind wiederholter Zyklus.

### Verwendete Skills

| Skill | Anwendungen | Treffer/Schadensereignisse | Schaden | Mana |
| --- | ---: | ---: | ---: | ---: |
| Tödlicher Tanz | 9 | 9 | 106.949 | 7.977 |
| Wirbelnde Klinge | 11 | 11 | 88.352 | 7.680 |
| Brecher des Lichts | 14 | 14 | 61.991 | 5.243 |
| Klingentornado | 10 | 10 | 59.856 | 4.535 |
| Dunkler Schlag | 43 | 43 | 55.616 | 2.670 |
| Kunai Todesstoß | 38 | 38 | 40.447 | 0 |
| Sturmklinge | 11 | 11 | 25.810 | 3.467 |
| Blutklinge | 9 | 9 | 15.943 | 2.913 |
| Überschallklinge | 6 | 6 | 15.422 | 2.207 |
| Schattenschlag | 7 | 7 | 13.408 | 1.482 |
| Schattendolch | 7 | 7 | 12.757 | 1.357 |
| Schattenfalle | 7 | 7 | 11.637 | 1.054 |
| Dunkler Schleier | 7 | 0 | 0 | 1.046 |

### Weniger als zweimal eingesetzt

Alle ausgewerteten Angriffs-Skills mindestens zweimal eingesetzt.

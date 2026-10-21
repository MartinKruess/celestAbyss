# Zehn-Minuten-Schadensvergleich

Berechnungsstand: 2026-10-17 T 19:38:55.656 Z; Eingabedateien und SHA-256-Prüfsummen sind im JSON gespeichert.

- Blutiger Durchbruch: drei Treffer teilen den Skill-Grundschaden 1:2:3 und addieren jeweils den vollen aktuellen P-Angriff. Vorläufige Trefferzeiten 0/1/2 Sekunden nach Castende; einmalig 5 Wut beim ersten erfolgreichen Schadenstreffer. Keine zusätzliche Animationssperre im Test.
- Gladiator: Energie der Wut hält auf Maximalstufe 59 Sekunden bei 58 Sekunden Cooldown nach 0,1 Sekunden Cast. Der Test erneuert diesen notwendigen Wutaufbau-Buff bei Verfügbarkeit mit Priorität, auch bei bereits aktiver Wirkung und genügend Wut. Kein zusätzlicher Wutpunkt bei Aktivierung. Ausbruch der Wut hat 130 Sekunden Cooldown und 64 Sekunden Buffdauer.
- R 6-Test mit freigeschalteter besonderer Verwertung: Luminet erhält 1,8 M-Angriff je Faith, Ritualist 1,9 M-Angriff je Victim zusätzlich zur Intelligenz (je 1,6 M-Angriff pro Int bei beiden Klassen). Permanente Attribute, dynamischer Reaper-Bonus und Morraks 5 Victim sind enthalten. Beim Luminet wird Aufenthalt im eigenen Lichtschwertfeld angenommen (+17,5 Faith während der Feldlaufzeit). Diese Freischaltung wird für diesen R 6-Test vorausgesetzt.
- Zunächst Kontrolllauf mit 2.000.000 HP; da einzelne Klassen das Ziel vor 600 Sekunden töten, zusätzlicher einheitlicher 600-Sekunden-Vergleich mit 10.000.000 HP für alle Klassen. Der Todzeitpunkt des bestätigten 2-Millionen-Ziels wird separat ausgewiesen. 600 Sekunden je Klasse, Level 60/R 6 mit permanenten Passiven, frisches normales Monster, ohne Gegenangriffe, Rüstung, Verfehlen, Heilung oder Regeneration. Ritualist startet mit 100 Seelen, Gladiator mit 100 Wut, alle Cooldowns bereit.
- Auto-Attacks werden bei Zauberstabklassen (Heiler/Kräuterkundler/Luminet/Ritualist) als magisch mit dem aktuellen M-Angriff, bei den übrigen Waffenklassen als physisch mit aktuellem P-Angriff gerechnet. Dies ist die explizite Waffen-/Schadensart-Annahme dieses Tests.
- 100% Angriffstempo entspricht bei Heiler/Luminet/Ritualist 1,1, beim Kräuterkundler 1,2, bei Jäger/Seelenjäger 1,3, sonst 1,5 gemeinsamen Auto-Attack-Aktionen pro Sekunde. Waffenabzüge und permanente Angriffstempo-Boni werden als Faktor angewendet. Zwei Waffen sind eine Aktion mit dem bereits kombinierten Angriff. HP-Regeneration alle 2 Sekunden, MP-Regeneration alle 3 Sekunden (1,3 je Willenskraftpunkt). Zeitschritt 10 ms; keine zusätzliche globale Abklingzeit. Abweichungen von subframegenauen Abläufen sind möglich.
- Nach einem abgeschlossenen Skill 0,1 Sekunden Reaktionszeit bis zum nächsten Skill; Während dieser Reaktionszeit keine eigenen Aktionen. Nach Skillabschluss bis zum eigenen Auto-Attack einen vollständigen aktuellen Auto-Attack-Abstand warten, berechnet aus Grundfrequenz und tatsächlichem Angriffstempo. Nach einem eigenen Auto-Attack mindestens 0,5 Sekunden bis zum nächsten Skill. Feste Sammelsequenzen Seelenqual/Seelensammler behalten ihre Frequenz, Seelenschuss startet die Sequenz direkt. Nur Castzeit sperrt weitere eigene Aktionen. Animationen/Flugzeiten/Ansturmdauer ignoriert. Periodische Treffer und fest gespeicherte Mehrfachtrefferabstände bleiben zeitlich verteilt. Treffer nach 600 Sekunden entfallen. Cooldowns beginnen erst am Castende beim Auslösen des Angriffs; Flugzeit, Animation und laufende Felder verzögern diesen Beginn nicht. Treffer und Wirkungen folgen ihren definierten Zeitpunkten.
- Wiederaufladung 123 verringert beim Kräuterkundler alle Skill-Cooldowns um 15 Sekunden. Druides Vergessener Zauber 222 wird wegen noch unbestimmter Skillauswahl nicht gelernt/aktiviert; dessen Attributpreis und unbekannte Verbesserung werden beide ausgeschlossen.
- Gefrierbrand gewährt als nicht zufällige permanente Passive +2% auf die aus den Beschreibungen bekannten Eis-Skills 29/68/239; Freeze-Proc und Folgeschaden bleiben aus. Schadensschul-Zuordnung ist noch nicht allgemein getaggt.
- Keine optionalen Eigenbuffs, Gruppenbuffs oder Toggles, keine reinen Heilaktionen, keine regulären Pets. Erlaubte Setups: Energie der Wut, Seelenschuss und Dunkler Schleier. Unvermeidbare Boni aus diesen Setups und Schadensskills sowie Moraks Beschwörung sind enthalten. Temporäre Beschwörungen Seelenbegleiter/Naturgeist/Morak sind enthalten.
- Keine zufälligen Procs oder Krits, einschließlich Gift, Hinterhältiger-Pfeil-Replay und kritischer Zusatzchance des Henkers. Garantierte Krits sind×1,8; bedingt garantierter zweiter Lichtbrecher-Treffer wird ohne zufälligen ersten Crit garantiert kritisch.
- Skillwahl: notwendige verfügbare Setup-/Komboaktionen, sonst bereite Nicht-Spam-Angriffe nach vollständigem Anwendungsschaden absteigend; Skills mit höchstens 5 Sekunden Cooldown dienen als Füller. Manaexplosion zuletzt unter verfügbaren Angriffen. Kostenpflichtige nicht bezahlbare Aktionen werden übersprungen zugunsten bezahlbarer Aktionen.
- Seelensammler 25×0,2 s, danach Spektralketten innerhalb 1,5 s. Seelenqual bewusst auf 15 Anwendungen begrenzt, nicht auf theoretisch 16 optimiert. Nach Möglichkeit Seelenernte im Abschlussfenster; reguläre Seelengewinne gegen das einzelne Monster, maximal 1 Fragment pro Feuer-der-Verdammten-Anwendung.
- Feldangriffe verwenden aktuellen Charakterangriff je Tick; Rest-Verbrennen verwendet festen Tickwert. Feuer der Verdammten verwendet 30% des berechneten Initialtreffers pro Folgetreffer. Nicht zeitlich definierte Mehrfachtreffer werden gemeinsam am Castende gerechnet. Physisch/magisch gemischte Skills verwenden beide Charakterangriffe.
- Normaler Schurkenangriff beendet Tarnung; Schattenfalle bleibt getarnt, Schattenschlag hat 1 s Sichtbarkeit. In dieser Rückkehrpause keine normalen Auto-Attacks, um die Kombo nicht abzubrechen. Schattenfalle wird für diesen stationären Nahbereichstest als vom Monster ausgelöst angenommen.
- Nicht festgelegte Current-HP-Anpassung: bei sinkenden Max-HP nur auf neues Maximum begrenzen, bei steigenden Max-HP kein gratis Auffüllen. Lebenspreise dürfen nicht töten; sonst Aktion gesperrt. Heilungen aus Schadensangriffen getrennt von HP-Regeneration gezählt. Opfergabe kostet pro Skillanwendung, nicht pro Treffer.
- Morrak nutzt live ein Drittel M-Angriff des Meisters inklusive unvermeidbarer permanenter Kampfpassiven; seine 500-Max-HP-Kosten und+5 Wis gelten während Beschwörung. Seelenbegleiter nutzt 30% Geschick/Vita/Willenskraft; Naturgeist nutzt 30% Intelligenz/Vita/Willenskraft und verursacht magischen Windschaden mit 1,8 M-Angriff je übernommenem Intelligenzpunkt. Beide ohne optionalen Begleiterbuff. Morrak 1,1 Angriffe/s, Seelenbegleiter und Naturgeist 1,5 Angriffe/s ohne fremde Tempoübernahme.
- Dies ist eine Modellrechnung mit offengelegter Steuerung, kein Unreal-Lauf und keine abschließende Balancebewertung. Zehn Minutenabschnitte sind Zeitfenster, keine künstlich synchronisierten Rotationen. Vollständige große Kombos werden gesondert gezählt.

## Gesamtvergleich: volle 600 Sekunden, Zusatztest mit 10 Millionen Ziel-HP

| Klasse | Schaden | DPS | Skills | Auto-Attacks | Beschwörungen | Ø pro Minute | Erstmals Skill zu teuer | Erstmals Mana=0 | Mana-Wartephasen | Mana-Wartezeit gesamt | Längste Mana-Pause | Tod bei 2 Mio HP |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: | --- |
| Luminet | **1.056.882** | 1.761 | 944.431 | 112.450 | 0 | 105.688 | 1:57 | 2:42 | 304 | 166 s | 0.93 s | — |
| Ritualist | **1.012.921** | 1.688 | 553.231 | 302.737 | 156.953 | 101.292 | 0:05 | — | 202 | 128 s | 0.92 s | — |
| Seelenjäger | **845.427** | 1.409 | 355.799 | 489.628 | 0 | 84.543 | 1:21 | — | 297 | 64 s | 0.67 s | — |
| Kräuterkundler | **844.059** | 1.407 | 513.320 | 330.739 | 0 | 84.406 | — | — | 0 | 0 s | 0.00 s | — |
| Gladiator | **843.698** | 1.406 | 310.911 | 532.787 | 0 | 84.370 | — | — | 0 | 0 s | 0.00 s | — |
| Jäger | **835.420** | 1.392 | 357.609 | 437.122 | 40.688 | 83.542 | — | — | 0 | 0 s | 0.00 s | — |
| Butcher | **816.100** | 1.360 | 278.950 | 537.149 | 0 | 81.610 | 0:01 | 7:00 | 651 | 199 s | 0.65 s | — |
| Schurke | **701.932** | 1.170 | 308.276 | 393.656 | 0 | 70.193 | 0:03 | — | 392 | 92 s | 2.80 s | — |
| Heiler | **678.663** | 1.131 | 444.836 | 233.827 | 0 | 67.866 | — | — | 0 | 0 s | 0.00 s | — |
| Schamane | **677.983** | 1.130 | 561.105 | 116.878 | 0 | 67.798 | 1:56 | — | 570 | 215 s | 0.55 s | — |
| Druide | **661.274** | 1.102 | 562.563 | 44.703 | 54.008 | 66.127 | 0:05 | 0:04 | 211 | 64 s | 0.55 s | — |
| Abenteurer | **643.603** | 1.073 | 208.148 | 435.455 | 0 | 64.360 | — | — | 0 | 0 s | 0.00 s | — |
| Ritter | **555.158** | 925 | 213.673 | 341.485 | 0 | 55.516 | — | — | 0 | 0 s | 0.00 s | — |

## Zahlen richtig lesen und Heiler-Ergebnis nachvollziehen

**Ein zu teurer bereiter Skill bedeutet weder null Mana noch null Leben.** Die Summe der Mana-Wartezeit besteht aus vielen kurzen Pausen; sie ist keine zusammenhängende Regeneration bis zum vollen Pool. Ressourcen werden fortlaufend genutzt. Die Cooldowns bleiben dauerhaft aktiv und werden zwischen Minuten nicht zurückgesetzt. Nur beim Start sind alle Skills gleichzeitig bereit.

Butcher: erster zu teurer Skill 0:01; 728 Phasen mit mindestens einem nicht bezahlbaren Skill. Längste tatsächliche Mana-Pause 0.65 Sekunden.

Luminet: 304 Mana-Wartepausen, zusammen 165.59 Sekunden.

Heiler: Energieschlag auf Stufe 5, Cooldown 1.1 Sekunden nach Castende. 358 Anwendungen erzeugen 300.004 Schaden, eigene Auto-Attacks 233.827. Potenzielle MP-Regeneration 363 alle 3 Sekunden; durchschnittlicher Verbrauch 2.544 Mana pro Minute. Reine Heilzauber sind im Schadenstest ausgeschlossen.

## Mana-Pool, Verbrauch und Regeneration

Basispool und permanente MP-Regeneration ohne optionale Eigenbuffs. Während aktiver Beschwörungen können einzelne Werte temporär abweichen. Potenzielle Regeneration ist am vollen Pool begrenzt.

| Klasse | Mana-Pool | MP-Reg/Tick | Mögliche MP-Reg/min | Verbrauch/min | Tatsächlich regeneriert/min |
| --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 5.951 | 281 | 5.614 | 2.985 | 2.985 |
| Butcher | 4.291 | 209 | 4.184 | 4.589 | 4.184 |
| Druide | 6.536 | 278 | 5.554 | 6.177 | 5.554 |
| Gladiator | 5.057 | 242 | 4.834 | 4.543 | 4.400 |
| Heiler | 6.852 | 363 | 7.264 | 2.544 | 2.544 |
| Kräuterkundler | 6.543 | 303 | 6.056 | 6.222 | 6.056 |
| Jäger | 4.581 | 222 | 4.444 | 3.502 | 3.438 |
| Ritter | 5.983 | 292 | 5.840 | 3.605 | 3.595 |
| Luminet | 6.017 | 332 | 6.640 | 7.204 | 6.640 |
| Ritualist | 4.837 | 249 | 4.974 | 5.381 | 5.091 |
| Schamane | 5.673 | 278 | 5.554 | 6.090 | 5.554 |
| Seelenjäger | 3.565 | 170 | 3.404 | 3.682 | 3.404 |
| Schurke | 3.828 | 177 | 3.534 | 3.868 | 3.534 |

## Sensitivität: Mana für den stärksten bereiten Angriff zurückhalten

Der Hauptlauf verwendet die erste bezahlbare priorisierte Aktion. Der Zusatzlauf wartet bei fehlendem Mana für die höchste Priorität mit Auto-Attacks, statt billigere Skills zu wirken. Das ist eine andere Steuerung, keine geänderte Klasse.

| Klasse | Hauptlauf | Mit Manareserve | Unterschied |
| --- | ---: | ---: | ---: |
| Abenteurer | 643.603 | 643.603 | 0 |
| Butcher | 816.100 | 800.607 | -15.493 |
| Druide | 661.274 | 659.395 | -1.878 |
| Gladiator | 843.698 | 843.698 | 0 |
| Heiler | 678.663 | 678.663 | 0 |
| Kräuterkundler | 844.059 | 844.059 | 0 |
| Jäger | 835.420 | 835.420 | 0 |
| Ritter | 555.158 | 555.158 | 0 |
| Luminet | 1.056.882 | 1.048.719 | -8.163 |
| Ritualist | 1.012.921 | 1.012.646 | -275 |
| Schamane | 677.983 | 676.057 | -1.926 |
| Seelenjäger | 845.427 | 854.453 | 9.026 |
| Schurke | 701.932 | 701.792 | -140 |

Ein Mana-Hindernis bedeutet: mindestens ein bereiter priorisierter Skill ist nicht bezahlbar. Das ist nicht zwangsläufig ein leerer Pool oder Stillstand; günstigere Skills und Auto-Attacks bleiben erlaubt. Mana-Wartezeit ist die Summe vieler einzelner Zeitstücke ohne bezahlbare gewählte Skillaktion; Auto-Attacks gehen weiter. Sie ist keine Zeit bis zum vollen Mana-Pool und keine HP-Ausfallzeit. Die Zahl der Mana-Wartephasen zählt diese tatsächlich getrennten Pausen. Andere Wartezeiten wie Tarnrückkehr sind getrennt erfasst.

## Schaden pro Minute

| Klasse | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Ø |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 72.160 | 64.791 | 62.174 | 64.246 | 63.780 | 60.322 | 64.325 | 64.246 | 62.768 | 64.791 | 64.360 |
| Butcher | 94.581 | 77.811 | 83.255 | 81.264 | 77.118 | 81.467 | 82.495 | 76.887 | 78.225 | 82.995 | 81.610 |
| Druide | 72.697 | 62.668 | 68.691 | 64.679 | 65.733 | 61.808 | 69.662 | 64.280 | 65.767 | 65.289 | 66.127 |
| Gladiator | 98.924 | 78.715 | 87.711 | 73.789 | 89.043 | 80.118 | 89.488 | 75.934 | 86.032 | 83.943 | 84.370 |
| Heiler | 72.386 | 64.793 | 68.202 | 68.994 | 66.689 | 67.418 | 68.731 | 66.715 | 67.237 | 67.497 | 67.866 |
| Kräuterkundler | 94.025 | 84.237 | 85.814 | 78.505 | 82.737 | 86.204 | 83.647 | 88.857 | 70.498 | 89.536 | 84.406 |
| Jäger | 92.390 | 81.688 | 81.551 | 82.116 | 84.709 | 82.315 | 80.833 | 82.315 | 82.977 | 84.526 | 83.542 |
| Ritter | 59.983 | 56.270 | 52.603 | 57.261 | 53.089 | 55.499 | 53.336 | 57.747 | 52.603 | 56.766 | 55.516 |
| Luminet | 133.308 | 121.044 | 101.490 | 99.750 | 101.449 | 97.730 | 102.466 | 100.667 | 102.220 | 96.760 | 105.688 |
| Ritualist | 124.089 | 112.987 | 94.017 | 104.158 | 100.000 | 74.895 | 103.062 | 104.737 | 90.227 | 104.751 | 101.292 |
| Schamane | 81.170 | 71.276 | 65.047 | 64.253 | 66.245 | 66.693 | 63.850 | 67.551 | 65.210 | 66.687 | 67.798 |
| Seelenjäger | 95.651 | 95.813 | 84.150 | 81.042 | 76.004 | 82.048 | 89.221 | 82.921 | 82.573 | 76.004 | 84.543 |
| Schurke | 83.955 | 74.193 | 73.472 | 66.377 | 63.372 | 71.507 | 68.042 | 67.252 | 67.545 | 66.216 | 70.193 |

## Abenteurer

Gesamt **643.603**, Laufzeit 10:00, Rest-Mana 5.951, Rest-HP 6.692. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.356.397.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 799 | 799 | 435.455 | 0 | 0 |
| Wirbelnde Klinge | 11 | 11 | 62.535 | 7.917 | 0 |
| Mächtiger Doppelschlag | 19 | 19 | 44.042 | 5.658 | 0 |
| Sprungschlag | 17 | 17 | 36.567 | 6.662 | 0 |
| Beben | 20 | 20 | 27.340 | 4.074 | 0 |
| Rotier Schlag | 22 | 22 | 25.058 | 3.265 | 0 |
| Überschallklinge | 6 | 6 | 12.606 | 2.276 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Butcher

Gesamt **816.100**, Laufzeit 10:00, Rest-Mana 244, Rest-HP 5.891. Effektive Angriffsheilung 0, Überheilung 336, HP-Regeneration 4.948, Lebenspreise 4.948. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.183.900.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 663 | 663 | 537.149 | 0 | 0 |
| Aufgeladener Schlag | 24 | 24 | 39.964 | 5.208 | 0 |
| Mächtiger Hieb | 22 | 22 | 33.950 | 3.960 | 0 |
| Schmetterschlag | 15 | 15 | 32.673 | 5.145 | 0 |
| Rotier Schlag | 22 | 22 | 30.892 | 3.366 | 0 |
| Schädelspalter | 9 | 9 | 30.296 | 5.733 | 0 |
| Erdbrecher | 4 | 4 | 27.241 | 9.584 | 0 |
| Erdbeben | 11 | 11 | 20.033 | 2.541 | 0 |
| Abräumer | 13 | 13 | 17.591 | 1.768 | 0 |
| Schockwelle der Regeneration | 8 | 8 | 14.001 | 5.064 | 0 |
| Energieentladung | 4 | 4 | 11.213 | 0 | 0 |
| Zorn des Henkers | 3 | 3 | 10.891 | 2.118 | 0 |
| Dämonische Schockwelle | 5 | 5 | 10.206 | 1.400 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:01. Erstmals wirklich 0 Mana: 7:00, insgesamt 1 Ereignisse mit vollständig ausgegebenem Mana. 728 Phasen mit mindestens einem zu teuren bereiten Skill; darin 651 tatsächliche Mana-Wartepausen mit zusammen 199 Sekunden und maximal 0.65 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 7:00.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:01 | 0:01 | 0 s | Schockwelle der Regeneration | 552 |
| 0:01 | 0:02 | 0 s | Schockwelle der Regeneration | 552 |
| 0:02 | 0:02 | 1 s | Dämonische Schockwelle | 209 |
| 0:02 | 0:03 | 0 s | Dämonische Schockwelle | 29 |
| 0:03 | 0:03 | 1 s | Dämonische Schockwelle | 7 |
| 0:04 | 0:04 | 0 s | Dämonische Schockwelle | 7 |
| 0:05 | 0:05 | 0 s | Dämonische Schockwelle | 7 |
| 0:05 | 0:06 | 0 s | Dämonische Schockwelle | 7 |
| 0:06 | 0:06 | 1 s | Dämonische Schockwelle | 63 |
| 0:07 | 0:07 | 0 s | Dämonische Schockwelle | 63 |
| 0:07 | 0:08 | 0 s | Dämonische Schockwelle | 63 |
| 0:08 | 0:08 | 0 s | Dämonische Schockwelle | 63 |
| 0:09 | 0:09 | 0 s | Dämonische Schockwelle | 273 |
| 0:09 | 0:10 | 1 s | Dämonische Schockwelle | 56 |
| 0:10 | 0:10 | 0 s | Dämonische Schockwelle | 56 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Druide

Gesamt **661.274**, Laufzeit 10:00, Rest-Mana 305, Rest-HP 4.278. Effektive Angriffsheilung 0, Überheilung 2.743, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.338.726.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 661 | 661 | 409.645 | 33.711 | 0 |
| Naturgeist | 2 | 897 | 54.008 | 264 | 0 |
| Auto-Attack | 101 | 101 | 44.703 | 0 | 0 |
| Sprungschlag | 15 | 15 | 30.729 | 6.060 | 0 |
| Ätherregen | 5 | 20 | 27.435 | 1.195 | 0 |
| Beben | 20 | 20 | 25.292 | 4.200 | 0 |
| Erdbeben | 11 | 11 | 19.375 | 2.541 | 0 |
| Windschlitzer | 14 | 14 | 17.706 | 3.010 | 0 |
| Eislanze | 15 | 15 | 15.641 | 2.325 | 0 |
| Verbrennen | 26 | 130 | 12.480 | 3.302 | 0 |
| Manaexplosion | 2 | 2 | 3.123 | 5.091 | 0 |
| Bannmagie | 2 | 2 | 1.137 | 72 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:05. Erstmals wirklich 0 Mana: 0:04, insgesamt 2 Ereignisse mit vollständig ausgegebenem Mana. 228 Phasen mit mindestens einem zu teuren bereiten Skill; darin 211 tatsächliche Mana-Wartepausen mit zusammen 64 Sekunden und maximal 0.55 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 0:04, 6:05.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:05 | 0:06 | 1 s | Energieschlag | 0 |
| 0:56 | 0:56 | 0 s | Erdbeben | 219 |
| 0:56 | 0:57 | 0 s | Erdbeben | 168 |
| 1:02 | 1:02 | 0 s | Beben | 135 |
| 1:02 | 1:03 | 0 s | Beben | 84 |
| 1:04 | 1:04 | 0 s | Energieschlag | 50 |
| 1:05 | 1:05 | 0 s | Energieschlag | 50 |
| 1:05 | 1:06 | 0 s | Energieschlag | 50 |
| 1:13 | 1:13 | 0 s | Sprungschlag | 297 |
| 1:13 | 1:14 | 1 s | Sprungschlag | 246 |
| 1:14 | 1:15 | 1 s | Sprungschlag | 195 |
| 1:15 | 1:15 | 0 s | Energieschlag | 18 |
| 1:16 | 1:16 | 0 s | Energieschlag | 18 |
| 1:16 | 1:17 | 0 s | Energieschlag | 18 |
| 1:17 | 1:17 | 0 s | Energieschlag | 18 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Gladiator

Gesamt **843.698**, Laufzeit 10:00, Rest-Mana 3.629, Rest-HP 7.461. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 44. Gegner-Restleben 9.156.302.

Große Kombos: rageOutbursts: 5.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 685 | 685 | 532.787 | 0 | 0 |
| Blutiger Durchbruch | 8 | 24 | 61.827 | 17.280 | 0 |
| Sprungschlag | 17 | 17 | 40.531 | 6.868 | 0 |
| Mächtiger Hieb | 22 | 22 | 33.255 | 3.960 | 0 |
| Schmetterschlag | 15 | 15 | 32.166 | 5.145 | 0 |
| Wutexplosion | 10 | 10 | 27.025 | 0 | 0 |
| Holzspalter | 17 | 17 | 26.602 | 3.332 | 0 |
| Kriegerischer Ansturm | 11 | 11 | 23.960 | 3.839 | 0 |
| Ausbruch der Wut | 5 | 5 | 23.496 | 0 | 0 |
| Wutklinge | 10 | 10 | 21.665 | 0 | 0 |
| Sturm der Wut | 10 | 10 | 20.385 | 0 | 0 |
| Energie der Wut | 11 | 0 | 0 | 5.005 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Heiler

Gesamt **678.663**, Laufzeit 10:00, Rest-Mana 6.852, Rest-HP 3.898. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.321.337.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 358 | 358 | 300.004 | 9.308 | 0 |
| Auto-Attack | 319 | 319 | 233.827 | 0 | 0 |
| Frostschauer | 14 | 70 | 71.686 | 7.588 | 0 |
| Kristallisierte Wasserspähre | 23 | 23 | 26.111 | 2.231 | 0 |
| Eislanze | 15 | 15 | 20.823 | 2.325 | 0 |
| Schwerter des Lichtes | 10 | 10 | 17.620 | 2.570 | 0 |
| Göttliche Nova | 4 | 4 | 8.592 | 1.416 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Kräuterkundler

Gesamt **844.059**, Laufzeit 10:00, Rest-Mana 4.879, Rest-HP 5.096. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.155.941.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 443 | 443 | 330.739 | 0 | 0 |
| Elektrisches Feld | 26 | 130 | 116.834 | 7.176 | 0 |
| Tobender Sturm | 8 | 72 | 94.519 | 15.696 | 0 |
| Gezielter Blitz | 33 | 33 | 66.563 | 10.131 | 0 |
| Kugelblitz | 21 | 21 | 51.841 | 8.904 | 0 |
| Geladener Nebel | 27 | 27 | 48.751 | 7.236 | 0 |
| Ewiges Eis | 25 | 25 | 37.140 | 4.700 | 0 |
| Wasserfesseln | 43 | 43 | 34.124 | 516 | 0 |
| Windschlitzer | 20 | 20 | 31.932 | 4.300 | 0 |
| Eislanze | 23 | 23 | 31.616 | 3.565 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Jäger

Gesamt **835.420**, Laufzeit 10:00, Rest-Mana 3.935, Rest-HP 5.184. Effektive Angriffsheilung 0, Überheilung 1.872, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.164.580.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 572 | 572 | 437.122 | 0 | 0 |
| Salve | 10 | 10 | 108.264 | 4.140 | 0 |
| Feuerpfeil | 66 | 66 | 78.685 | 7.392 | 0 |
| Präzisionsschuss | 11 | 11 | 62.829 | 11.979 | 0 |
| Seelenbegleiter | 2 | 897 | 40.688 | 264 | 0 |
| Gebundener Schuss | 35 | 35 | 33.712 | 1.890 | 0 |
| Verstärkter Pfeil | 13 | 13 | 31.060 | 5.278 | 0 |
| Schockschuss | 13 | 13 | 18.151 | 2.054 | 0 |
| Entzugspfeil | 12 | 12 | 14.918 | 1.620 | 0 |
| Kettenschuss | 11 | 11 | 9.990 | 407 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Ritter

Gesamt **555.158**, Laufzeit 10:00, Rest-Mana 5.882, Rest-HP 9.475. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.444.842.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 689 | 689 | 341.485 | 0 | 0 |
| Donnernde Lanze | 16 | 16 | 55.866 | 12.096 | 0 |
| Brecher des Geistes | 33 | 33 | 32.394 | 3.927 | 0 |
| Schildstoß | 20 | 20 | 30.512 | 5.240 | 0 |
| Mächtiger Hieb | 22 | 22 | 27.030 | 3.960 | 0 |
| Schildsturm | 16 | 16 | 26.842 | 4.672 | 0 |
| Brecher der Deckung | 25 | 25 | 25.166 | 3.300 | 0 |
| Erlösendes Feld | 9 | 9 | 15.864 | 2.853 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Donnernde Lanze: keine feste Castzeit gespeichert; Ansturm-/Animationsdauer im vereinbarten Test ignoriert (0 s).

## Luminet

Gesamt **1.056.882**, Laufzeit 10:00, Rest-Mana 379, Rest-HP 4.141. Effektive Angriffsheilung 0, Überheilung 3.498, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.943.118.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 481 | 481 | 472.020 | 24.531 | 0 |
| Lichtblitz | 140 | 140 | 192.162 | 20.860 | 0 |
| Auto-Attack | 145 | 145 | 112.450 | 0 | 0 |
| Luminus | 63 | 63 | 55.191 | 1.386 | 0 |
| Heilige Vernichtung | 13 | 13 | 47.656 | 4.381 | 0 |
| Ätherregen | 5 | 20 | 34.980 | 1.195 | 0 |
| Urteil des Himmels | 14 | 28 | 32.432 | 4.018 | 0 |
| Heiliges Kreuz | 12 | 12 | 23.046 | 3.408 | 0 |
| Eislanze | 14 | 14 | 19.641 | 2.170 | 0 |
| Schwerter des Lichtes | 10 | 10 | 17.958 | 2.570 | 0 |
| Strafendes Licht | 8 | 8 | 16.226 | 2.528 | 0 |
| Astralkörper | 5 | 5 | 11.120 | 1.815 | 0 |
| Göttliche Nova | 4 | 4 | 8.769 | 1.416 | 0 |
| Aurora Wellen | 3 | 3 | 6.847 | 1.125 | 0 |
| Licht kristallenes Gefängnis | 5 | 5 | 6.384 | 635 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:57. Erstmals wirklich 0 Mana: 2:42, insgesamt 3 Ereignisse mit vollständig ausgegebenem Mana. 392 Phasen mit mindestens einem zu teuren bereiten Skill; darin 304 tatsächliche Mana-Wartepausen mit zusammen 166 Sekunden und maximal 0.93 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 2:42, 4:19, 4:51.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:57 | 1:58 | 0 s | Astralkörper | 331 |
| 1:58 | 1:58 | 1 s | Astralkörper | 280 |
| 1:59 | 1:59 | 0 s | Astralkörper | 131 |
| 1:59 | 1:59 | 1 s | Astralkörper | 80 |
| 2:00 | 2:00 | 1 s | Astralkörper | 361 |
| 2:00 | 2:01 | 1 s | Astralkörper | 310 |
| 2:01 | 2:02 | 1 s | Astralkörper | 259 |
| 2:02 | 2:02 | 0 s | Astralkörper | 110 |
| 2:02 | 2:03 | 1 s | Astralkörper | 59 |
| 2:03 | 2:03 | 1 s | Astralkörper | 340 |
| 2:03 | 2:04 | 1 s | Astralkörper | 289 |
| 2:04 | 2:05 | 1 s | Astralkörper | 238 |
| 2:05 | 2:05 | 0 s | Astralkörper | 89 |
| 2:05 | 2:05 | 0 s | Astralkörper | 38 |
| 2:05 | 2:06 | 1 s | Ätherregen | 16 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Ritualist

Gesamt **1.012.921**, Laufzeit 10:00, Rest-Mana 1.942, Rest-HP 4.057. Effektive Angriffsheilung 2.181, Überheilung 5.334, HP-Regeneration 43.796, Lebenspreise 45.622. Rest-Seelen 19, Rest-Wut 0. Gegner-Restleben 8.987.079.

Große Kombos: soulShackles: 7; soulHarvests: 3.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 382 | 382 | 302.737 | 0 | 0 |
| Feuerball | 139 | 139 | 197.430 | 20.711 | 0 |
| Morrak´s Meister | 2 | 592 | 156.953 | 0 | 0 |
| Dunkler Impuls | 113 | 113 | 118.838 | 7.345 | 0 |
| Seelenqual | 98 | 98 | 107.143 | 6.566 | 0 |
| Feuer der Verdammten | 12 | 77 | 47.196 | 6.036 | 0 |
| Schrei der Unterwelt | 8 | 8 | 22.356 | 0 | 0 |
| Lebenssauger | 14 | 14 | 18.277 | 4.956 | 1.708 |
| Meteoritenschauer | 2 | 12 | 13.793 | 5.216 | 0 |
| Sturm des Feuers | 6 | 6 | 9.271 | 1.086 | 0 |
| Seelenfessel | 7 | 7 | 8.132 | 665 | 0 |
| Seelenernte | 3 | 3 | 5.861 | 1.224 | 474 |
| Seelenplage | 3 | 3 | 4.934 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:05. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 270 Phasen mit mindestens einem zu teuren bereiten Skill; darin 202 tatsächliche Mana-Wartepausen mit zusammen 128 Sekunden und maximal 0.92 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:05 | 0:06 | 0 s | Seelenernte | 346 |
| 0:06 | 0:07 | 1 s | Dunkler Impuls | 44 |
| 0:07 | 0:08 | 1 s | Dunkler Impuls | 44 |
| 0:08 | 0:09 | 0 s | Dunkler Impuls | 44 |
| 3:21 | 3:21 | 0 s | Meteoritenschauer | 1.808 |
| 3:21 | 3:22 | 1 s | Meteoritenschauer | 1.743 |
| 3:22 | 3:23 | 1 s | Meteoritenschauer | 1.594 |
| 3:24 | 3:24 | 1 s | Meteoritenschauer | 1.850 |
| 3:25 | 3:25 | 1 s | Meteoritenschauer | 1.850 |
| 3:26 | 3:26 | 1 s | Meteoritenschauer | 1.850 |
| 3:26 | 3:27 | 0 s | Meteoritenschauer | 1.785 |
| 3:27 | 3:27 | 0 s | Meteoritenschauer | 1.891 |
| 3:27 | 3:27 | 0 s | Meteoritenschauer | 1.710 |
| 3:28 | 3:28 | 1 s | Meteoritenschauer | 1.207 |
| 3:29 | 3:29 | 1 s | Meteoritenschauer | 1.207 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 4:34 | 4:35 | 1 s | Cooldowns/Voraussetzungen |

## Schamane

Gesamt **677.983**, Laufzeit 10:00, Rest-Mana 309, Rest-HP 4.637. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.322.017.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 535 | 535 | 336.355 | 27.285 | 0 |
| Auto-Attack | 243 | 243 | 116.878 | 0 | 0 |
| Mächtiger Doppelschlag | 18 | 18 | 39.419 | 5.526 | 0 |
| Gezielter Blitz | 17 | 17 | 28.249 | 5.219 | 0 |
| Eisranken | 25 | 123 | 26.305 | 3.950 | 0 |
| Beben | 19 | 19 | 24.757 | 3.990 | 0 |
| Rotier Schlag | 21 | 21 | 22.575 | 3.213 | 0 |
| Erdbeben | 11 | 11 | 19.895 | 2.541 | 0 |
| Kristallisierte Wasserspähre | 22 | 22 | 17.681 | 2.134 | 0 |
| Windfesseln | 16 | 16 | 15.243 | 2.192 | 0 |
| Feuerlanze | 14 | 14 | 14.486 | 2.198 | 0 |
| Himmelsbrecher | 2 | 4 | 6.965 | 932 | 0 |
| Vakuumimpuls | 2 | 2 | 4.767 | 978 | 0 |
| Infernal Zyklon | 1 | 6 | 4.408 | 746 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:56. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 739 Phasen mit mindestens einem zu teuren bereiten Skill; darin 570 tatsächliche Mana-Wartepausen mit zusammen 215 Sekunden und maximal 0.55 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:56 | 1:57 | 0 s | Windfesseln | 112 |
| 1:59 | 1:59 | 0 s | Energieschlag | 48 |
| 2:04 | 2:04 | 0 s | Beben | 192 |
| 2:04 | 2:05 | 1 s | Beben | 141 |
| 2:05 | 2:06 | 0 s | Beben | 90 |
| 2:08 | 2:08 | 0 s | Energieschlag | 4 |
| 2:14 | 2:15 | 0 s | Mächtiger Doppelschlag | 152 |
| 2:16 | 2:16 | 1 s | Gezielter Blitz | 20 |
| 2:17 | 2:17 | 0 s | Gezielter Blitz | 20 |
| 2:17 | 2:17 | 0 s | Gezielter Blitz | 20 |
| 2:18 | 2:18 | 0 s | Gezielter Blitz | 298 |
| 2:18 | 2:18 | 0 s | Himmelsbrecher | 201 |
| 2:18 | 2:19 | 1 s | Himmelsbrecher | 150 |
| 2:19 | 2:20 | 1 s | Himmelsbrecher | 99 |
| 2:20 | 2:21 | 1 s | Himmelsbrecher | 48 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Seelenjäger

Gesamt **845.427**, Laufzeit 10:00, Rest-Mana 788, Rest-HP 4.125. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.154.573.

Große Kombos: soulCollectionWindows: 8; spectralFinishers: 2.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 757 | 757 | 489.628 | 0 | 0 |
| Seelensammler | 145 | 145 | 111.331 | 6.960 | 0 |
| Explosionspfeil | 19 | 57 | 77.452 | 10.241 | 0 |
| Feuerpfeil | 62 | 62 | 66.638 | 6.944 | 0 |
| Doppelschuss | 22 | 22 | 53.803 | 6.446 | 0 |
| Kopfschuss | 9 | 9 | 29.967 | 4.833 | 0 |
| Kettenschuss | 11 | 11 | 8.699 | 407 | 0 |
| Hinterhältiger Pfeil | 6 | 6 | 4.265 | 108 | 0 |
| Spektralketten | 2 | 2 | 3.645 | 878 | 0 |
| Seelenschuss | 8 | 0 | 0 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:21. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 312 Phasen mit mindestens einem zu teuren bereiten Skill; darin 297 tatsächliche Mana-Wartepausen mit zusammen 64 Sekunden und maximal 0.67 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:21 | 1:21 | 0 s | Doppelschuss | 212 |
| 1:21 | 1:21 | 0 s | Doppelschuss | 212 |
| 1:22 | 1:22 | 0 s | Doppelschuss | 212 |
| 1:23 | 1:23 | 0 s | Doppelschuss | 212 |
| 1:23 | 1:23 | 0 s | Doppelschuss | 212 |
| 1:56 | 1:57 | 0 s | Feuerpfeil | 69 |
| 2:06 | 2:06 | 1 s | Feuerpfeil | 61 |
| 2:07 | 2:07 | 0 s | Feuerpfeil | 61 |
| 2:07 | 2:08 | 0 s | Feuerpfeil | 61 |
| 2:08 | 2:08 | 0 s | Feuerpfeil | 61 |
| 2:14 | 2:14 | 0 s | Doppelschuss | 290 |
| 2:34 | 2:35 | 1 s | Seelensammler | 4 |
| 2:35 | 2:35 | 0 s | Spektralketten | 4 |
| 2:36 | 2:36 | 0 s | Spektralketten | 174 |
| 2:36 | 2:36 | 0 s | Spektralketten | 174 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Schurke

Gesamt **701.932**, Laufzeit 10:00, Rest-Mana 489, Rest-HP 4.766. Effektive Angriffsheilung 0, Überheilung 658, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.298.068.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 774 | 774 | 393.656 | 0 | 0 |
| Tödlicher Tanz | 8 | 8 | 62.694 | 7.310 | 0 |
| Wirbelnde Klinge | 10 | 10 | 55.030 | 7.197 | 0 |
| Brecher des Lichts | 13 | 13 | 39.152 | 5.019 | 0 |
| Klingentornado | 9 | 9 | 35.662 | 4.208 | 0 |
| Dunkler Schlag | 42 | 42 | 33.079 | 2.689 | 0 |
| Kunai Todesstoß | 37 | 37 | 20.668 | 0 | 0 |
| Sturmklinge | 10 | 10 | 18.406 | 3.249 | 0 |
| Überschallklinge | 5 | 5 | 10.323 | 1.896 | 0 |
| Blutklinge | 8 | 8 | 10.125 | 2.669 | 0 |
| Schattenschlag | 6 | 6 | 8.458 | 1.310 | 0 |
| Schattenfalle | 7 | 7 | 8.096 | 1.086 | 0 |
| Schattendolch | 5 | 5 | 6.583 | 999 | 0 |
| Dunkler Schleier | 7 | 0 | 0 | 1.046 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:03. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 427 Phasen mit mindestens einem zu teuren bereiten Skill; darin 392 tatsächliche Mana-Wartepausen mit zusammen 92 Sekunden und maximal 2.80 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:03 | 0:03 | 0 s | Blutklinge | 90 |
| 0:03 | 0:03 | 0 s | Blutklinge | 26 |
| 0:04 | 0:04 | 1 s | Blutklinge | 26 |
| 0:05 | 0:05 | 0 s | Blutklinge | 26 |
| 0:05 | 0:05 | 0 s | Blutklinge | 26 |
| 0:06 | 0:06 | 0 s | Blutklinge | 203 |
| 0:06 | 0:07 | 0 s | Blutklinge | 203 |
| 0:07 | 0:07 | 0 s | Blutklinge | 203 |
| 0:08 | 0:08 | 0 s | Blutklinge | 203 |
| 0:08 | 0:09 | 0 s | Blutklinge | 203 |
| 2:18 | 2:18 | 0 s | Tödlicher Tanz | 536 |
| 2:19 | 2:19 | 0 s | Tödlicher Tanz | 536 |
| 2:19 | 2:20 | 0 s | Tödlicher Tanz | 536 |
| 2:20 | 2:20 | 0 s | Tödlicher Tanz | 536 |
| 2:21 | 2:21 | 0 s | Tödlicher Tanz | 713 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 3:01 | 3:03 | 2 s | Mana |
| 3:04 | 3:06 | 2 s | Mana |
| 4:31 | 4:33 | 1 s | Mana |
| 7:33 | 7:36 | 3 s | Mana |
| 7:36 | 7:39 | 3 s | Mana |
| 7:40 | 7:41 | 1 s | Mana |
| 9:03 | 9:06 | 3 s | Mana |
| 9:06 | 9:09 | 3 s | Mana |
| 9:10 | 9:11 | 1 s | Mana |

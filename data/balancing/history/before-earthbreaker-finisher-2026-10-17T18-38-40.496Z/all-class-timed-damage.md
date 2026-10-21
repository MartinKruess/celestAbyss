# Zehn-Minuten-Schadensvergleich

> Dieser Gesamtlauf verwendet noch 1,5 MP-Reg je Willenskraft. Inzwischen sind 1,3 gespeichert; Klassenvergleich und separater Zwei-Minuten-Heiltest sind aktualisiert. Der nächste Gesamtlauf folgt zusammen mit der noch zu bestimmenden Gladiator-Änderung.

Berechnungsstand: 2026-10-17 T 18:13:38.182 Z; Eingabedateien und SHA-256-Prüfsummen sind im JSON gespeichert.

- Gladiator: Energie der Wut hält auf Maximalstufe 59 Sekunden bei 58 Sekunden Cooldown nach 0,1 Sekunden Cast. Der Test erneuert diesen notwendigen Wutaufbau-Buff bei Verfügbarkeit mit Priorität, auch bei bereits aktiver Wirkung und genügend Wut. Kein zusätzlicher Wutpunkt bei Aktivierung. Ausbruch der Wut hat 130 Sekunden Cooldown und 64 Sekunden Buffdauer.
- R 6-Test mit freigeschalteter besonderer Verwertung: Luminet erhält 1,8 M-Angriff je Faith, Ritualist 1,9 M-Angriff je Victim zusätzlich zur Intelligenz (je 1,6 M-Angriff pro Int bei beiden Klassen). Permanente Attribute, dynamischer Reaper-Bonus und Morraks 5 Victim sind enthalten. Beim Luminet wird Aufenthalt im eigenen Lichtschwertfeld angenommen (+17,5 Faith während der Feldlaufzeit). Diese Freischaltung wird für diesen R 6-Test vorausgesetzt.
- Zunächst Kontrolllauf mit 2.000.000 HP; da einzelne Klassen das Ziel vor 600 Sekunden töten, zusätzlicher einheitlicher 600-Sekunden-Vergleich mit 10.000.000 HP für alle Klassen. Der Todzeitpunkt des bestätigten 2-Millionen-Ziels wird separat ausgewiesen. 600 Sekunden je Klasse, Level 60/R 6 mit permanenten Passiven, frisches normales Monster, ohne Gegenangriffe, Rüstung, Verfehlen, Heilung oder Regeneration. Ritualist startet mit 100 Seelen, Gladiator mit 100 Wut, alle Cooldowns bereit.
- Auto-Attacks werden bei Zauberstabklassen (Heiler/Kräuterkundler/Luminet/Ritualist) als magisch mit dem aktuellen M-Angriff, bei den übrigen Waffenklassen als physisch mit aktuellem P-Angriff gerechnet. Dies ist die explizite Waffen-/Schadensart-Annahme dieses Tests.
- 100% Angriffstempo entspricht bei Heiler/Luminet/Ritualist 1,1, beim Kräuterkundler 1,2, bei Jäger/Seelenjäger 1,3, sonst 1,5 gemeinsamen Auto-Attack-Aktionen pro Sekunde. Waffenabzüge und permanente Angriffstempo-Boni werden als Faktor angewendet. Zwei Waffen sind eine Aktion mit dem bereits kombinierten Angriff. HP-Regeneration alle 2 Sekunden, MP-Regeneration alle 3 Sekunden (1,5 je Willenskraftpunkt). Zeitschritt 10 ms; keine zusätzliche globale Abklingzeit. Abweichungen von subframegenauen Abläufen sind möglich.
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
| Luminet | **1.139.439** | 1.899 | 1.073.586 | 65.853 | 0 | 113.944 | 2:29 | — | 209 | 108 s | 0.93 s | — |
| Ritualist | **1.033.919** | 1.723 | 574.317 | 302.654 | 156.948 | 103.392 | 0:05 | — | 0 | 0 s | 0.00 s | — |
| Seelenjäger | **881.839** | 1.470 | 401.266 | 480.572 | 0 | 88.184 | 2:36 | — | 115 | 26 s | 0.67 s | — |
| Kräuterkundler | **844.059** | 1.407 | 513.320 | 330.739 | 0 | 84.406 | — | — | 0 | 0 s | 0.00 s | — |
| Jäger | **835.420** | 1.392 | 357.609 | 437.122 | 40.688 | 83.542 | — | — | 0 | 0 s | 0.00 s | — |
| Butcher | **812.596** | 1.354 | 278.688 | 533.909 | 0 | 81.260 | — | — | 0 | 0 s | 0.00 s | — |
| Gladiator | **781.352** | 1.302 | 249.356 | 531.995 | 0 | 78.135 | — | — | 0 | 0 s | 0.00 s | — |
| Schurke | **740.615** | 1.234 | 337.803 | 402.811 | 0 | 74.061 | 0:03 | — | 21 | 3 s | 0.55 s | — |
| Schamane | **702.371** | 1.171 | 627.338 | 75.033 | 0 | 70.237 | 2:24 | — | 469 | 178 s | 0.55 s | — |
| Heiler | **678.663** | 1.131 | 444.836 | 233.827 | 0 | 67.866 | — | — | 0 | 0 s | 0.00 s | — |
| Druide | **676.004** | 1.127 | 619.783 | 2.213 | 54.008 | 67.600 | 0:05 | 0:04 | 8 | 3 s | 0.55 s | — |
| Abenteurer | **643.603** | 1.073 | 208.148 | 435.455 | 0 | 64.360 | — | — | 0 | 0 s | 0.00 s | — |
| Ritter | **522.081** | 870 | 179.109 | 342.972 | 0 | 52.208 | — | — | 0 | 0 s | 0.00 s | — |

## Zahlen richtig lesen und Heiler-Ergebnis nachvollziehen

**Ein zu teurer bereiter Skill bedeutet weder null Mana noch null Leben.** Die Summe der Mana-Wartezeit besteht aus vielen kurzen Pausen; sie ist keine zusammenhängende Regeneration bis zum vollen Pool. Ressourcen werden fortlaufend genutzt. Die Cooldowns bleiben dauerhaft aktiv und werden zwischen Minuten nicht zurückgesetzt. Nur beim Start sind alle Skills gleichzeitig bereit.

Butcher: erster zu teurer Skill —; 0 Phasen mit mindestens einem nicht bezahlbaren Skill. Längste tatsächliche Mana-Pause 0.00 Sekunden.

Luminet: 209 Mana-Wartepausen, zusammen 107.64 Sekunden.

Heiler: Energieschlag auf Stufe 5, Cooldown 1.1 Sekunden nach Castende. 358 Anwendungen erzeugen 300.004 Schaden, eigene Auto-Attacks 233.827. Potenzielle MP-Regeneration 406 alle 3 Sekunden; durchschnittlicher Verbrauch 2.544 Mana pro Minute. Reine Heilzauber sind im Schadenstest ausgeschlossen.

## Mana-Pool, Verbrauch und Regeneration

Basispool und permanente MP-Regeneration ohne optionale Eigenbuffs. Während aktiver Beschwörungen können einzelne Werte temporär abweichen. Potenzielle Regeneration ist am vollen Pool begrenzt.

| Klasse | Mana-Pool | MP-Reg/Tick | Mögliche MP-Reg/min | Verbrauch/min | Tatsächlich regeneriert/min |
| --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 5.951 | 319 | 6.370 | 2.985 | 2.985 |
| Butcher | 4.291 | 236 | 4.720 | 4.079 | 4.079 |
| Druide | 6.536 | 314 | 6.270 | 6.826 | 6.270 |
| Gladiator | 5.057 | 274 | 5.470 | 2.997 | 2.997 |
| Heiler | 6.852 | 406 | 8.120 | 2.544 | 2.544 |
| Kräuterkundler | 6.543 | 344 | 6.880 | 6.222 | 6.222 |
| Jäger | 4.581 | 251 | 5.020 | 3.502 | 3.464 |
| Ritter | 5.983 | 330 | 6.600 | 2.740 | 2.740 |
| Luminet | 6.017 | 370 | 7.400 | 7.960 | 7.400 |
| Ritualist | 4.837 | 279 | 5.570 | 5.729 | 5.705 |
| Schamane | 5.673 | 314 | 6.270 | 6.790 | 6.270 |
| Seelenjäger | 3.565 | 191 | 3.820 | 4.101 | 3.820 |
| Schurke | 3.828 | 199 | 3.970 | 4.282 | 3.970 |

## Sensitivität: Mana für den stärksten bereiten Angriff zurückhalten

Der Hauptlauf verwendet die erste bezahlbare priorisierte Aktion. Der Zusatzlauf wartet bei fehlendem Mana für die höchste Priorität mit Auto-Attacks, statt billigere Skills zu wirken. Das ist eine andere Steuerung, keine geänderte Klasse.

| Klasse | Hauptlauf | Mit Manareserve | Unterschied |
| --- | ---: | ---: | ---: |
| Abenteurer | 643.603 | 643.603 | 0 |
| Butcher | 812.596 | 812.596 | 0 |
| Druide | 676.004 | 676.004 | 0 |
| Gladiator | 781.352 | 781.352 | 0 |
| Heiler | 678.663 | 678.663 | 0 |
| Kräuterkundler | 844.059 | 844.059 | 0 |
| Jäger | 835.420 | 835.420 | 0 |
| Ritter | 522.081 | 522.081 | 0 |
| Luminet | 1.139.439 | 1.125.372 | -14.067 |
| Ritualist | 1.033.919 | 1.038.717 | 4.798 |
| Schamane | 702.371 | 704.436 | 2.066 |
| Seelenjäger | 881.839 | 884.587 | 2.748 |
| Schurke | 740.615 | 740.286 | -329 |

Ein Mana-Hindernis bedeutet: mindestens ein bereiter priorisierter Skill ist nicht bezahlbar. Das ist nicht zwangsläufig ein leerer Pool oder Stillstand; günstigere Skills und Auto-Attacks bleiben erlaubt. Mana-Wartezeit ist die Summe vieler einzelner Zeitstücke ohne bezahlbare gewählte Skillaktion; Auto-Attacks gehen weiter. Sie ist keine Zeit bis zum vollen Mana-Pool und keine HP-Ausfallzeit. Die Zahl der Mana-Wartephasen zählt diese tatsächlich getrennten Pausen. Andere Wartezeiten wie Tarnrückkehr sind getrennt erfasst.

## Schaden pro Minute

| Klasse | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Ø |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 72.160 | 64.791 | 62.174 | 64.246 | 63.780 | 60.322 | 64.325 | 64.246 | 62.768 | 64.791 | 64.360 |
| Butcher | 91.214 | 77.203 | 80.874 | 81.155 | 80.019 | 78.275 | 83.134 | 76.212 | 79.506 | 85.005 | 81.260 |
| Druide | 72.708 | 64.270 | 69.659 | 65.919 | 70.704 | 63.225 | 69.588 | 65.932 | 68.092 | 65.907 | 67.600 |
| Gladiator | 89.368 | 71.966 | 79.766 | 73.818 | 80.363 | 74.132 | 79.930 | 75.230 | 77.352 | 79.426 | 78.135 |
| Heiler | 72.386 | 64.793 | 68.202 | 68.994 | 66.689 | 67.418 | 68.731 | 66.715 | 67.237 | 67.497 | 67.866 |
| Kräuterkundler | 94.025 | 84.237 | 85.814 | 78.505 | 82.737 | 86.204 | 83.647 | 88.857 | 70.498 | 89.536 | 84.406 |
| Jäger | 92.390 | 81.688 | 81.551 | 82.116 | 84.709 | 82.315 | 80.833 | 82.315 | 82.977 | 84.526 | 83.542 |
| Ritter | 56.228 | 52.747 | 50.518 | 53.242 | 50.890 | 52.308 | 50.260 | 53.119 | 50.022 | 52.747 | 52.208 |
| Luminet | 133.308 | 122.289 | 122.409 | 109.128 | 110.763 | 106.013 | 112.656 | 107.785 | 109.324 | 105.763 | 113.944 |
| Ritualist | 126.919 | 113.487 | 93.187 | 110.906 | 103.479 | 74.212 | 111.243 | 104.374 | 89.642 | 106.470 | 103.392 |
| Schamane | 81.170 | 70.795 | 75.673 | 67.291 | 67.369 | 68.963 | 67.318 | 68.083 | 70.428 | 65.281 | 70.237 |
| Seelenjäger | 95.651 | 95.813 | 92.494 | 89.084 | 76.432 | 86.659 | 87.203 | 88.890 | 90.089 | 79.524 | 88.184 |
| Schurke | 83.955 | 74.193 | 72.963 | 74.932 | 72.867 | 74.041 | 74.199 | 69.089 | 70.460 | 73.914 | 74.061 |

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

Gesamt **812.596**, Laufzeit 10:00, Rest-Mana 4.291, Rest-HP 5.891. Effektive Angriffsheilung 42, Überheilung 336, HP-Regeneration 4.906, Lebenspreise 4.948. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.187.404.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 659 | 659 | 533.909 | 0 | 0 |
| Aufgeladener Schlag | 24 | 24 | 39.964 | 5.208 | 0 |
| Mächtiger Hieb | 22 | 22 | 33.950 | 3.960 | 0 |
| Schädelspalter | 10 | 10 | 33.662 | 6.370 | 0 |
| Schmetterschlag | 15 | 15 | 32.673 | 5.145 | 0 |
| Rotier Schlag | 22 | 22 | 30.892 | 3.366 | 0 |
| Erdbeben | 11 | 11 | 20.033 | 2.541 | 0 |
| Erdbrecher | 10 | 10 | 18.232 | 2.510 | 0 |
| Abräumer | 13 | 13 | 17.591 | 1.768 | 0 |
| Schockwelle der Regeneration | 9 | 9 | 15.752 | 5.697 | 42 |
| Zorn des Henkers | 4 | 4 | 14.521 | 2.824 | 0 |
| Energieentladung | 4 | 4 | 11.213 | 0 | 0 |
| Dämonische Schockwelle | 5 | 5 | 10.206 | 1.400 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Druide

Gesamt **676.004**, Laufzeit 10:00, Rest-Mana 980, Rest-HP 4.278. Effektive Angriffsheilung 0, Überheilung 2.743, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.323.996.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 747 | 746 | 462.322 | 38.097 | 0 |
| Naturgeist | 2 | 897 | 54.008 | 264 | 0 |
| Sprungschlag | 17 | 17 | 34.826 | 6.868 | 0 |
| Ätherregen | 5 | 20 | 27.435 | 1.195 | 0 |
| Beben | 20 | 20 | 25.292 | 4.200 | 0 |
| Erdbeben | 11 | 11 | 19.375 | 2.541 | 0 |
| Windschlitzer | 14 | 14 | 17.706 | 3.010 | 0 |
| Eislanze | 15 | 15 | 15.641 | 2.325 | 0 |
| Verbrennen | 27 | 131 | 12.576 | 3.429 | 0 |
| Manaexplosion | 2 | 2 | 3.472 | 6.255 | 0 |
| Auto-Attack | 5 | 5 | 2.213 | 0 | 0 |
| Bannmagie | 2 | 2 | 1.137 | 72 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:05. Erstmals wirklich 0 Mana: 0:04, insgesamt 2 Ereignisse mit vollständig ausgegebenem Mana. 8 Phasen mit mindestens einem zu teuren bereiten Skill; darin 8 tatsächliche Mana-Wartepausen mit zusammen 3 Sekunden und maximal 0.55 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 0:04, 6:06.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:05 | 0:06 | 1 s | Energieschlag | 0 |
| 6:07 | 6:07 | 1 s | Energieschlag | 0 |
| 6:08 | 6:08 | 0 s | Energieschlag | 0 |
| 6:37 | 6:38 | 1 s | Sprungschlag | 261 |
| 6:38 | 6:38 | 1 s | Sprungschlag | 210 |
| 6:40 | 6:40 | 0 s | Energieschlag | 18 |
| 6:40 | 6:40 | 0 s | Energieschlag | 18 |
| 6:41 | 6:41 | 0 s | Energieschlag | 18 |

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Gladiator

Gesamt **781.352**, Laufzeit 10:00, Rest-Mana 5.057, Rest-HP 7.461. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 40. Gegner-Restleben 9.218.648.

Große Kombos: rageOutbursts: 5.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 684 | 684 | 531.995 | 0 | 0 |
| Sprungschlag | 17 | 17 | 40.531 | 6.868 | 0 |
| Mächtiger Hieb | 22 | 22 | 33.255 | 3.960 | 0 |
| Schmetterschlag | 15 | 15 | 32.137 | 5.145 | 0 |
| Wutexplosion | 10 | 10 | 27.025 | 0 | 0 |
| Holzspalter | 17 | 17 | 26.602 | 3.332 | 0 |
| Kriegerischer Ansturm | 11 | 11 | 23.932 | 3.839 | 0 |
| Wutklinge | 10 | 10 | 21.665 | 0 | 0 |
| Sturm der Wut | 10 | 10 | 20.385 | 0 | 0 |
| Wirbelsturm | 8 | 8 | 13.515 | 1.816 | 0 |
| Ausbruch der Wut | 5 | 5 | 10.311 | 0 | 0 |
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

Gesamt **844.059**, Laufzeit 10:00, Rest-Mana 6.543, Rest-HP 5.096. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.155.941.

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

Gesamt **835.420**, Laufzeit 10:00, Rest-Mana 4.194, Rest-HP 5.184. Effektive Angriffsheilung 0, Überheilung 1.872, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.164.580.

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

Gesamt **522.081**, Laufzeit 10:00, Rest-Mana 5.983, Rest-HP 9.475. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.477.919.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 692 | 692 | 342.972 | 0 | 0 |
| Donnernde Lanze | 16 | 16 | 32.570 | 6.272 | 0 |
| Schildstoß | 20 | 20 | 30.512 | 5.240 | 0 |
| Brecher des Geistes | 33 | 33 | 28.632 | 3.069 | 0 |
| Mächtiger Hieb | 22 | 22 | 27.030 | 3.960 | 0 |
| Schildsturm | 16 | 16 | 25.258 | 4.336 | 0 |
| Brecher der Deckung | 25 | 25 | 22.241 | 2.400 | 0 |
| Erlösendes Feld | 9 | 9 | 12.867 | 2.124 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Donnernde Lanze: keine feste Castzeit gespeichert; Ansturm-/Animationsdauer im vereinbarten Test ignoriert (0 s).

## Luminet

Gesamt **1.139.439**, Laufzeit 10:00, Rest-Mana 416, Rest-HP 4.141. Effektive Angriffsheilung 0, Überheilung 3.467, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.860.561.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 602 | 602 | 590.656 | 30.702 | 0 |
| Lichtblitz | 145 | 145 | 199.056 | 21.605 | 0 |
| Auto-Attack | 85 | 85 | 65.853 | 0 | 0 |
| Luminus | 63 | 63 | 55.108 | 1.386 | 0 |
| Heilige Vernichtung | 13 | 13 | 47.561 | 4.381 | 0 |
| Ätherregen | 5 | 20 | 34.671 | 1.195 | 0 |
| Urteil des Himmels | 14 | 28 | 32.480 | 4.018 | 0 |
| Heiliges Kreuz | 13 | 13 | 24.954 | 3.692 | 0 |
| Eislanze | 14 | 14 | 19.672 | 2.170 | 0 |
| Schwerter des Lichtes | 10 | 10 | 17.904 | 2.570 | 0 |
| Strafendes Licht | 8 | 8 | 16.226 | 2.528 | 0 |
| Astralkörper | 6 | 6 | 13.331 | 2.178 | 0 |
| Göttliche Nova | 4 | 4 | 8.769 | 1.416 | 0 |
| Aurora Wellen | 3 | 3 | 6.816 | 1.125 | 0 |
| Licht kristallenes Gefängnis | 5 | 5 | 6.384 | 635 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 2:29. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 245 Phasen mit mindestens einem zu teuren bereiten Skill; darin 209 tatsächliche Mana-Wartepausen mit zusammen 108 Sekunden und maximal 0.93 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 2:29 | 2:29 | 1 s | Energieschlag | 21 |
| 2:41 | 2:41 | 0 s | Göttliche Nova | 169 |
| 2:41 | 2:42 | 0 s | Göttliche Nova | 118 |
| 2:42 | 2:43 | 1 s | Lichtblitz | 61 |
| 2:43 | 2:44 | 1 s | Lichtblitz | 10 |
| 2:50 | 2:50 | 1 s | Strafendes Licht | 95 |
| 2:50 | 2:51 | 0 s | Strafendes Licht | 44 |
| 2:51 | 2:51 | 0 s | Lichtblitz | 98 |
| 2:51 | 2:51 | 0 s | Eislanze | 47 |
| 2:51 | 2:52 | 1 s | Eislanze | 25 |
| 2:53 | 2:53 | 1 s | Eislanze | 25 |
| 2:55 | 2:56 | 0 s | Energieschlag | 40 |
| 2:56 | 2:57 | 0 s | Energieschlag | 40 |
| 2:59 | 2:59 | 0 s | Urteil des Himmels | 108 |
| 2:59 | 3:00 | 1 s | Urteil des Himmels | 57 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Ritualist

Gesamt **1.033.919**, Laufzeit 10:00, Rest-Mana 4.597, Rest-HP 4.057. Effektive Angriffsheilung 2.584, Überheilung 5.682, HP-Regeneration 43.559, Lebenspreise 45.810. Rest-Seelen 22, Rest-Wut 0. Gegner-Restleben 8.966.081.

Große Kombos: soulShackles: 7; soulHarvests: 4.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 381 | 381 | 302.654 | 0 | 0 |
| Feuerball | 139 | 139 | 197.602 | 20.711 | 0 |
| Morrak´s Meister | 2 | 591 | 156.948 | 0 | 0 |
| Dunkler Impuls | 113 | 113 | 118.992 | 7.345 | 0 |
| Seelenqual | 105 | 105 | 114.745 | 7.035 | 0 |
| Feuer der Verdammten | 12 | 84 | 51.488 | 6.036 | 0 |
| Schrei der Unterwelt | 8 | 8 | 22.366 | 0 | 0 |
| Meteoritenschauer | 3 | 18 | 20.689 | 7.824 | 0 |
| Lebenssauger | 14 | 14 | 18.296 | 4.956 | 1.760 |
| Sturm des Feuers | 6 | 6 | 9.274 | 1.086 | 0 |
| Seelenfessel | 7 | 7 | 8.137 | 665 | 0 |
| Seelenernte | 4 | 4 | 7.794 | 1.632 | 824 |
| Seelenplage | 3 | 3 | 4.934 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:05. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 1 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:05 | 0:06 | 0 s | Seelenernte | 377 |

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Schamane

Gesamt **702.371**, Laufzeit 10:00, Rest-Mana 473, Rest-HP 4.637. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.297.629.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 609 | 609 | 382.878 | 31.059 | 0 |
| Auto-Attack | 156 | 156 | 75.033 | 0 | 0 |
| Mächtiger Doppelschlag | 18 | 18 | 39.419 | 5.526 | 0 |
| Gezielter Blitz | 18 | 18 | 29.911 | 5.526 | 0 |
| Eisranken | 26 | 130 | 27.448 | 4.108 | 0 |
| Beben | 19 | 19 | 24.757 | 3.990 | 0 |
| Rotier Schlag | 20 | 20 | 21.500 | 3.060 | 0 |
| Erdbeben | 11 | 11 | 19.895 | 2.541 | 0 |
| Kristallisierte Wasserspähre | 23 | 23 | 18.485 | 2.231 | 0 |
| Feuerlanze | 15 | 15 | 15.521 | 2.355 | 0 |
| Windfesseln | 16 | 16 | 15.243 | 2.192 | 0 |
| Himmelsbrecher | 4 | 8 | 13.930 | 1.864 | 0 |
| Vakuumimpuls | 4 | 4 | 9.535 | 1.956 | 0 |
| Infernal Zyklon | 2 | 12 | 8.816 | 1.492 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 2:24. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 573 Phasen mit mindestens einem zu teuren bereiten Skill; darin 469 tatsächliche Mana-Wartepausen mit zusammen 178 Sekunden und maximal 0.55 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 2:24 | 2:25 | 0 s | Vakuumimpuls | 186 |
| 2:25 | 2:25 | 1 s | Vakuumimpuls | 135 |
| 2:25 | 2:26 | 1 s | Vakuumimpuls | 84 |
| 2:26 | 2:27 | 1 s | Vakuumimpuls | 33 |
| 2:27 | 2:28 | 1 s | Vakuumimpuls | 296 |
| 2:28 | 2:28 | 1 s | Vakuumimpuls | 245 |
| 2:28 | 2:29 | 1 s | Vakuumimpuls | 194 |
| 2:29 | 2:30 | 1 s | Vakuumimpuls | 143 |
| 2:30 | 2:31 | 1 s | Vakuumimpuls | 405 |
| 2:31 | 2:31 | 1 s | Vakuumimpuls | 354 |
| 2:31 | 2:32 | 1 s | Vakuumimpuls | 303 |
| 2:32 | 2:33 | 0 s | Vakuumimpuls | 252 |
| 2:34 | 2:34 | 1 s | Windfesseln | 26 |
| 2:35 | 2:35 | 0 s | Beben | 26 |
| 2:35 | 2:35 | 0 s | Beben | 26 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Seelenjäger

Gesamt **881.839**, Laufzeit 10:00, Rest-Mana 753, Rest-HP 4.125. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.118.161.

Große Kombos: soulCollectionWindows: 8; spectralFinishers: 3.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 743 | 743 | 480.572 | 0 | 0 |
| Seelensammler | 184 | 184 | 141.275 | 8.832 | 0 |
| Explosionspfeil | 19 | 57 | 77.452 | 10.241 | 0 |
| Feuerpfeil | 64 | 64 | 68.787 | 7.168 | 0 |
| Doppelschuss | 24 | 24 | 58.694 | 7.032 | 0 |
| Kopfschuss | 11 | 11 | 36.626 | 5.907 | 0 |
| Kettenschuss | 11 | 11 | 8.699 | 407 | 0 |
| Spektralketten | 3 | 3 | 5.468 | 1.317 | 0 |
| Hinterhältiger Pfeil | 6 | 6 | 4.265 | 108 | 0 |
| Seelenschuss | 8 | 0 | 0 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 2:36. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 123 Phasen mit mindestens einem zu teuren bereiten Skill; darin 115 tatsächliche Mana-Wartepausen mit zusammen 26 Sekunden und maximal 0.67 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 2:36 | 2:36 | 0 s | Explosionspfeil | 465 |
| 2:36 | 2:37 | 1 s | Explosionspfeil | 172 |
| 2:37 | 2:37 | 0 s | Explosionspfeil | 172 |
| 2:38 | 2:38 | 0 s | Explosionspfeil | 172 |
| 2:38 | 2:39 | 0 s | Explosionspfeil | 172 |
| 2:39 | 2:39 | 0 s | Explosionspfeil | 363 |
| 2:40 | 2:40 | 0 s | Explosionspfeil | 363 |
| 2:40 | 2:41 | 0 s | Explosionspfeil | 363 |
| 2:41 | 2:41 | 0 s | Explosionspfeil | 363 |
| 2:51 | 2:51 | 0 s | Kopfschuss | 476 |
| 2:52 | 2:52 | 0 s | Kopfschuss | 476 |
| 2:53 | 2:53 | 0 s | Kopfschuss | 476 |
| 2:53 | 2:53 | 0 s | Kopfschuss | 476 |
| 2:54 | 2:55 | 0 s | Kettenschuss | 18 |
| 2:55 | 2:56 | 0 s | Kettenschuss | 18 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Schurke

Gesamt **740.615**, Laufzeit 10:00, Rest-Mana 706, Rest-HP 4.766. Effektive Angriffsheilung 0, Überheilung 740, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.259.385.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 792 | 792 | 402.811 | 0 | 0 |
| Tödlicher Tanz | 9 | 9 | 70.531 | 8.224 | 0 |
| Wirbelnde Klinge | 11 | 11 | 60.533 | 7.917 | 0 |
| Brecher des Lichts | 14 | 14 | 42.164 | 5.405 | 0 |
| Klingentornado | 10 | 10 | 39.624 | 4.675 | 0 |
| Dunkler Schlag | 42 | 42 | 33.079 | 2.689 | 0 |
| Kunai Todesstoß | 37 | 37 | 20.668 | 0 | 0 |
| Sturmklinge | 11 | 11 | 20.247 | 3.574 | 0 |
| Überschallklinge | 6 | 6 | 12.388 | 2.276 | 0 |
| Blutklinge | 9 | 9 | 11.390 | 3.003 | 0 |
| Schattenschlag | 7 | 7 | 9.867 | 1.528 | 0 |
| Schattendolch | 7 | 7 | 9.216 | 1.399 | 0 |
| Schattenfalle | 7 | 7 | 8.096 | 1.086 | 0 |
| Dunkler Schleier | 7 | 0 | 0 | 1.046 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:03. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 23 Phasen mit mindestens einem zu teuren bereiten Skill; darin 21 tatsächliche Mana-Wartepausen mit zusammen 3 Sekunden und maximal 0.55 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:03 | 0:03 | 0 s | Blutklinge | 112 |
| 0:03 | 0:03 | 0 s | Blutklinge | 48 |
| 0:04 | 0:04 | 1 s | Blutklinge | 48 |
| 0:05 | 0:05 | 0 s | Blutklinge | 48 |
| 0:05 | 0:05 | 0 s | Blutklinge | 48 |
| 0:06 | 0:06 | 0 s | Blutklinge | 247 |
| 0:06 | 0:07 | 0 s | Blutklinge | 247 |
| 0:07 | 0:07 | 0 s | Blutklinge | 247 |
| 0:08 | 0:08 | 0 s | Blutklinge | 247 |
| 0:08 | 0:09 | 0 s | Blutklinge | 247 |
| 6:05 | 6:05 | 0 s | Blutklinge | 308 |
| 6:05 | 6:05 | 0 s | Blutklinge | 308 |
| 8:00 | 8:00 | 0 s | Tödlicher Tanz | 671 |
| 8:00 | 8:01 | 0 s | Tödlicher Tanz | 671 |
| 8:01 | 8:01 | 0 s | Tödlicher Tanz | 671 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

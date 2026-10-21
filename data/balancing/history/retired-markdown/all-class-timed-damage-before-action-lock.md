# Zehn-Minuten-Schadensvergleich

Berechnungsstand: 2026-10-17 T 11:36:00.121 Z; Eingabedateien und SHA-256-Prüfsummen sind im JSON gespeichert.

- Zunächst Kontrolllauf mit 2.000.000 HP; da einzelne Klassen das Ziel vor 600 Sekunden töten, zusätzlicher einheitlicher 600-Sekunden-Vergleich mit 10.000.000 HP für alle Klassen. Der Todzeitpunkt des bestätigten 2-Millionen-Ziels wird separat ausgewiesen. 600 Sekunden je Klasse, Level 60/R 6 mit permanenten Passiven, frisches normales Monster, ohne Gegenangriffe, Rüstung, Verfehlen, Heilung oder Regeneration. Ritualist startet mit 100 Seelen, Gladiator mit 100 Wut, alle Cooldowns bereit.
- Auto-Attacks werden bei Zauberstabklassen (Heiler/Kräuterkundler/Luminet/Ritualist) als magisch mit dem aktuellen M-Angriff, bei den übrigen Waffenklassen als physisch mit aktuellem P-Angriff gerechnet. Dies ist die explizite Waffen-/Schadensart-Annahme dieses Tests.
- 100% Angriffstempo entspricht bei Heiler/Kräuterkundler/Luminet/Ritualist 1,3, sonst 1,5 gemeinsamen Auto-Attack-Aktionen pro Sekunde. Waffenabzüge und permanente Angriffstempo-Boni werden als Faktor angewendet. Zwei Waffen sind eine Aktion mit dem bereits kombinierten Angriff. HP/MP-Regeneration alle 2 Sekunden. Zeitschritt 10 ms; keine zusätzliche globale Abklingzeit. Abweichungen von subframegenauen Abläufen sind möglich.
- Nach einem abgeschlossenen Skill 0,1 Sekunden Reaktionszeit bis zum nächsten Skill; Auto-Attacks bleiben möglich. Feste Sammelsequenzen Seelenqual/Seelensammler behalten ihre Frequenz, Seelenschuss startet die Sequenz direkt. Nur Castzeit sperrt weitere eigene Aktionen. Animationen/Flugzeiten/Ansturmdauer ignoriert. Periodische Treffer und fest gespeicherte Mehrfachtrefferabstände bleiben zeitlich verteilt. Treffer nach 600 Sekunden entfallen. Cooldowns beginnen bei Aktivierungsbeginn, Treffer und Wirkungen am Castende.
- Wiederaufladung 123 verringert beim Kräuterkundler alle Skill-Cooldowns um 15 Sekunden. Druides Vergessener Zauber 222 wird wegen noch unbestimmter Skillauswahl nicht gelernt/aktiviert; dessen Attributpreis und unbekannte Verbesserung werden beide ausgeschlossen.
- Gefrierbrand gewährt als nicht zufällige permanente Passive +2% auf die aus den Beschreibungen bekannten Eis-Skills 29/68/239; Freeze-Proc und Folgeschaden bleiben aus. Schadensschul-Zuordnung ist noch nicht allgemein getaggt.
- Keine optionalen Eigenbuffs, Gruppenbuffs oder Toggles, keine reinen Heilaktionen, keine regulären Pets. Erlaubte Setups: Energie der Wut, Seelenschuss und Dunkler Schleier. Unvermeidbare Boni aus diesen Setups und Schadensskills sowie Moraks Beschwörung sind enthalten. Temporäre Beschwörungen Seelenbegleiter/Morak sind enthalten.
- Keine zufälligen Procs oder Krits, einschließlich Gift, Hinterhältiger-Pfeil-Replay und kritischer Zusatzchance des Henkers. Garantierte Krits sind×1,8; bedingt garantierter zweiter Lichtbrecher-Treffer wird ohne zufälligen ersten Crit garantiert kritisch.
- Skillwahl: notwendige verfügbare Setup-/Komboaktionen, sonst bereite Nicht-Spam-Angriffe nach vollständigem Anwendungsschaden absteigend; Skills mit höchstens 5 Sekunden Cooldown dienen als Füller. Manaexplosion zuletzt unter verfügbaren Angriffen. Kostenpflichtige nicht bezahlbare Aktionen werden übersprungen zugunsten bezahlbarer Aktionen.
- Seelensammler 25×0,2 s, danach Spektralketten innerhalb 1,5 s. Seelenqual bewusst auf 15 Anwendungen begrenzt, nicht auf theoretisch 16 optimiert. Nach Möglichkeit Seelenernte im Abschlussfenster; reguläre Seelengewinne gegen das einzelne Monster, maximal 1 Fragment pro Feuer-der-Verdammten-Anwendung.
- Feldangriffe verwenden aktuellen Charakterangriff je Tick; Rest-Verbrennen verwendet festen Tickwert. Feuer der Verdammten verwendet 30% des berechneten Initialtreffers pro Folgetreffer. Nicht zeitlich definierte Mehrfachtreffer werden gemeinsam am Castende gerechnet. Physisch/magisch gemischte Skills verwenden beide Charakterangriffe.
- Normaler Schurkenangriff beendet Tarnung; Schattenfalle bleibt getarnt, Schattenschlag hat 1 s Sichtbarkeit. In dieser Rückkehrpause keine normalen Auto-Attacks, um die Kombo nicht abzubrechen. Schattenfalle wird für diesen stationären Nahbereichstest als vom Monster ausgelöst angenommen.
- Nicht festgelegte Current-HP-Anpassung: bei sinkenden Max-HP nur auf neues Maximum begrenzen, bei steigenden Max-HP kein gratis Auffüllen. Lebenspreise dürfen nicht töten; sonst Aktion gesperrt. Heilungen aus Schadensangriffen getrennt von HP-Regeneration gezählt. Opfergabe kostet pro Skillanwendung, nicht pro Treffer.
- Morrak nutzt live ein Drittel M-Angriff des Meisters inklusive unvermeidbarer permanenter Kampfpassiven; seine 500-Max-HP-Kosten und+5 Wis gelten während Beschwörung. Seelenbegleiter nutzt 30% der bekannten Meisterattribute ohne optionalen Begleiterbuff. Beide 1,5 Angriffe/s ohne fremde Tempoübernahme.
- Dies ist eine Modellrechnung mit offengelegter Steuerung, kein Unreal-Lauf und keine abschließende Balancebewertung. Zehn Minutenabschnitte sind Zeitfenster, keine künstlich synchronisierten Rotationen. Vollständige große Kombos werden gesondert gezählt.

## Gesamtvergleich: volle 600 Sekunden, Zusatztest mit 10 Millionen Ziel-HP

| Klasse | Schaden | DPS | Skills | Auto-Attacks | Beschwörungen | Ø pro Minute | Erstmals Skill zu teuer | Erstmals Mana=0 | Mana-Wartephasen | Mana-Wartezeit gesamt | Längste Mana-Pause | Tod bei 2 Mio HP |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: | --- |
| Luminet | **1.984.689** | 3.308 | 1.335.710 | 648.979 | 0 | 198.469 | 0:23 | 3:49 | 678 | 366 s | 1.60 s | — |
| Heiler | **1.855.018** | 3.092 | 1.234.500 | 620.518 | 0 | 185.502 | — | — | 0 | 0 s | 0.00 s | — |
| Ritualist | **1.624.039** | 2.707 | 696.784 | 669.665 | 257.590 | 162.404 | — | — | 0 | 0 s | 0.00 s | — |
| Schamane | **1.397.394** | 2.329 | 891.399 | 505.995 | 0 | 139.739 | 2:48 | 9:29 | 51 | 35 s | 1.90 s | — |
| Druide | **1.264.901** | 2.108 | 786.424 | 468.790 | 9.688 | 126.490 | 0:05 | 0:04 | 13 | 5 s | 0.70 s | — |
| Kräuterkundler | **1.190.977** | 1.985 | 584.936 | 606.041 | 0 | 119.098 | — | — | 0 | 0 s | 0.00 s | — |
| Seelenjäger | **1.132.952** | 1.888 | 447.498 | 685.454 | 0 | 113.295 | — | — | 0 | 0 s | 0.00 s | — |
| Jäger | **1.072.012** | 1.787 | 359.652 | 669.250 | 43.110 | 107.201 | — | — | 0 | 0 s | 0.00 s | — |
| Butcher | **1.013.996** | 1.690 | 279.828 | 734.168 | 0 | 101.400 | 0:03 | — | 1 | 3 s | 2.80 s | — |
| Schurke | **1.005.620** | 1.676 | 394.393 | 611.227 | 0 | 100.562 | 0:03 | — | 0 | 0 s | 0.00 s | — |
| Gladiator | **951.273** | 1.585 | 215.867 | 735.406 | 0 | 95.127 | — | — | 0 | 0 s | 0.00 s | — |
| Abenteurer (Sword) | **719.764** | 1.200 | 204.898 | 514.866 | 0 | 71.976 | — | — | 0 | 0 s | 0.00 s | — |
| Abenteurer (Mace) | **707.485** | 1.179 | 204.144 | 503.341 | 0 | 70.749 | — | — | 0 | 0 s | 0.00 s | — |
| Ritter | **638.373** | 1.064 | 186.572 | 451.801 | 0 | 63.837 | — | — | 0 | 0 s | 0.00 s | — |

## Zahlen richtig lesen und Heiler-Ergebnis nachvollziehen

**Ein zu teurer bereiter Skill bedeutet weder null Mana noch null Leben.** Die Summe der Mana-Wartezeit besteht aus vielen kurzen Pausen; sie ist keine zusammenhängende Regeneration bis zum vollen Pool. Ressourcen werden fortlaufend genutzt. Die Cooldowns bleiben dauerhaft aktiv und werden zwischen Minuten nicht zurückgesetzt. Nur beim Start sind alle Skills gleichzeitig bereit.

Butcher: erster zu teurer Skill bei 3.70 Sekunden; zu diesem Zeitpunkt 323 Mana vorhanden. Längste tatsächliche Mana-Pause mit 2.80 Sekunden, 0 Ereignisse mit exakt null Mana. Der Lebenswert war nicht null.

Luminet: 678 kurze Mana-Pausen, zusammen 365.55 Sekunden; längste einzelne Pause 1.60 Sekunden. Währenddessen weiter Auto-Attacks, dazwischen weitere bezahlbare Skills. Tatsächlich null Mana 1-mal; erste Stelle 3:49.

Heiler: Energieschlag hat 0,05 Sekunden Castzeit und 0,6 Sekunden Cooldown auf Maximalstufe. 965 Anwendungen ergeben 1.064.395 Schaden. Auto-Attacks ergeben weitere 620.518, die restlichen Skills 170.105. Energieschlag und Auto-Attacks tragen zusammen 90.8 Prozent bei. Potenzielle MP-Regeneration 768,1 alle zwei Sekunden (384,05/s) gegenüber durchschnittlich 238.09 Mana-Verbrauch/s erklärt den fehlenden Engpass.

Die hohe Rate entsteht im vereinfachten Modell ausdrücklich ohne Animationssperren, mit 0,1 Sekunden Reaktionspause zwischen regulären Skills. Zauberstab-Auto-Attacks gelten als magisch. Diese Voraussetzungen prüfen, bevor daraus pauschale Skill-Nerfs abgeleitet werden.


## Sensitivität: Mana für den stärksten bereiten Angriff zurückhalten

Der Hauptlauf verwendet die erste bezahlbare priorisierte Aktion. Der Zusatzlauf wartet bei fehlendem Mana für die höchste Priorität mit Auto-Attacks, statt billigere Skills zu wirken. Das ist eine andere Steuerung, keine geänderte Klasse.

| Klasse | Hauptlauf | Mit Manareserve | Unterschied |
| --- | ---: | ---: | ---: |
| Abenteurer (Mace) | 707.485 | 707.485 | 0 |
| Abenteurer (Sword) | 719.764 | 719.764 | 0 |
| Butcher | 1.013.996 | 1.013.996 | 0 |
| Druide | 1.264.901 | 1.264.901 | 0 |
| Gladiator | 951.273 | 951.273 | 0 |
| Heiler | 1.855.018 | 1.855.018 | 0 |
| Kräuterkundler | 1.190.977 | 1.190.977 | 0 |
| Jäger | 1.072.012 | 1.072.012 | 0 |
| Ritter | 638.373 | 638.373 | 0 |
| Luminet | 1.984.689 | 1.947.457 | -37.232 |
| Ritualist | 1.624.039 | 1.624.039 | 0 |
| Schamane | 1.397.394 | 1.396.986 | -408 |
| Seelenjäger | 1.132.952 | 1.132.952 | 0 |
| Schurke | 1.005.620 | 1.005.620 | 0 |

Ein Mana-Hindernis bedeutet: mindestens ein bereiter priorisierter Skill ist nicht bezahlbar. Das ist nicht zwangsläufig ein leerer Pool oder Stillstand; günstigere Skills und Auto-Attacks bleiben erlaubt. Mana-Wartezeit ist die Summe vieler einzelner Zeitstücke ohne bezahlbare gewählte Skillaktion; Auto-Attacks gehen weiter. Sie ist keine Zeit bis zum vollen Mana-Pool und keine HP-Ausfallzeit. Die Zahl der Mana-Wartephasen zählt diese tatsächlich getrennten Pausen. Andere Wartezeiten wie Tarnrückkehr sind getrennt erfasst.

## Schaden pro Minute

| Klasse | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Ø |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer (Mace) | 78.421 | 71.668 | 67.973 | 71.668 | 67.973 | 69.374 | 70.112 | 70.656 | 70.112 | 69.529 | 70.749 |
| Abenteurer (Sword) | 80.054 | 72.734 | 69.034 | 72.734 | 69.034 | 70.430 | 71.178 | 71.722 | 71.716 | 71.128 | 71.976 |
| Butcher | 114.120 | 97.671 | 98.445 | 102.322 | 96.150 | 104.045 | 101.467 | 101.265 | 98.513 | 99.997 | 101.400 |
| Druide | 130.590 | 123.644 | 126.822 | 126.147 | 129.160 | 123.604 | 129.883 | 121.520 | 128.757 | 124.776 | 126.490 |
| Gladiator | 109.463 | 87.333 | 93.768 | 98.453 | 89.892 | 98.893 | 92.082 | 90.019 | 97.069 | 94.302 | 95.127 |
| Heiler | 189.861 | 182.562 | 190.584 | 181.459 | 183.007 | 189.935 | 181.904 | 189.845 | 183.301 | 182.562 | 185.502 |
| Kräuterkundler | 129.417 | 117.705 | 121.353 | 116.751 | 112.003 | 122.270 | 121.935 | 120.730 | 115.744 | 113.070 | 119.098 |
| Jäger | 113.615 | 106.464 | 107.487 | 107.288 | 109.936 | 107.691 | 106.367 | 107.487 | 109.737 | 95.940 | 107.201 |
| Ritter | 68.113 | 63.727 | 62.791 | 64.112 | 63.512 | 63.174 | 64.282 | 61.960 | 63.344 | 63.358 | 63.837 |
| Luminet | 227.824 | 201.103 | 200.834 | 195.608 | 194.509 | 189.894 | 200.608 | 190.380 | 186.135 | 197.793 | 198.469 |
| Ritualist | 188.183 | 172.820 | 150.072 | 171.635 | 166.360 | 117.481 | 180.160 | 160.745 | 148.674 | 167.910 | 162.404 |
| Schamane | 149.523 | 138.282 | 144.157 | 141.454 | 138.276 | 133.087 | 140.128 | 136.807 | 142.755 | 132.925 | 139.739 |
| Seelenjäger | 118.863 | 118.756 | 114.432 | 118.863 | 97.692 | 118.166 | 115.193 | 114.432 | 118.863 | 97.692 | 113.295 |
| Schurke | 111.747 | 100.990 | 99.204 | 99.593 | 102.393 | 101.434 | 98.004 | 104.020 | 87.244 | 100.990 | 100.562 |

## Abenteurer (Mace)

Gesamt **707.485**, Laufzeit 10:00, Rest-Mana 5.951, Rest-HP 6.692. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.292.515.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 944 | 944 | 503.341 | 0 | 0 |
| Wirbelnde Klinge | 11 | 11 | 61.886 | 4.151 | 0 |
| Mächtiger Doppelschlag | 19 | 19 | 43.594 | 12.109 | 0 |
| Sprungschlag | 16 | 16 | 34.227 | 15.551 | 0 |
| Beben | 20 | 20 | 27.104 | 4.443 | 0 |
| Rotier Schlag | 22 | 22 | 24.798 | 2.817 | 0 |
| Überschallklinge | 6 | 6 | 12.535 | 3.067 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:01 | 0:29 | 28 s | Cooldowns/Voraussetzungen |
| 0:29 | 0:31 | 2 s | Cooldowns/Voraussetzungen |
| 0:31 | 0:33 | 1 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:38 | 5 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:57 | 19 s | Cooldowns/Voraussetzungen |
| 0:57 | 1:01 | 4 s | Cooldowns/Voraussetzungen |
| 1:01 | 1:06 | 4 s | Cooldowns/Voraussetzungen |
| 1:06 | 1:16 | 10 s | Cooldowns/Voraussetzungen |
| 1:16 | 1:25 | 9 s | Cooldowns/Voraussetzungen |
| 1:25 | 1:31 | 6 s | Cooldowns/Voraussetzungen |
| 1:31 | 1:39 | 7 s | Cooldowns/Voraussetzungen |
| 1:39 | 1:48 | 9 s | Cooldowns/Voraussetzungen |
| 1:49 | 1:53 | 4 s | Cooldowns/Voraussetzungen |
| 1:54 | 2:01 | 7 s | Cooldowns/Voraussetzungen |
| 2:01 | 2:12 | 10 s | Cooldowns/Voraussetzungen |
| 2:12 | 2:21 | 10 s | Cooldowns/Voraussetzungen |
| 2:21 | 2:31 | 10 s | Cooldowns/Voraussetzungen |
| 2:32 | 2:45 | 13 s | Cooldowns/Voraussetzungen |
| 2:45 | 2:49 | 5 s | Cooldowns/Voraussetzungen |
| 2:49 | 2:51 | 1 s | Cooldowns/Voraussetzungen |

## Abenteurer (Sword)

Gesamt **719.764**, Laufzeit 10:00, Rest-Mana 5.951, Rest-HP 6.692. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.280.236.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 957 | 957 | 514.866 | 0 | 0 |
| Wirbelnde Klinge | 11 | 11 | 62.150 | 4.151 | 0 |
| Mächtiger Doppelschlag | 19 | 19 | 43.776 | 12.109 | 0 |
| Sprungschlag | 16 | 16 | 34.304 | 15.551 | 0 |
| Beben | 20 | 20 | 27.200 | 4.443 | 0 |
| Rotier Schlag | 22 | 22 | 24.904 | 2.817 | 0 |
| Überschallklinge | 6 | 6 | 12.564 | 3.067 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:01 | 0:29 | 28 s | Cooldowns/Voraussetzungen |
| 0:29 | 0:31 | 2 s | Cooldowns/Voraussetzungen |
| 0:31 | 0:33 | 1 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:38 | 5 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:57 | 19 s | Cooldowns/Voraussetzungen |
| 0:57 | 1:01 | 4 s | Cooldowns/Voraussetzungen |
| 1:01 | 1:06 | 4 s | Cooldowns/Voraussetzungen |
| 1:06 | 1:16 | 10 s | Cooldowns/Voraussetzungen |
| 1:16 | 1:25 | 9 s | Cooldowns/Voraussetzungen |
| 1:25 | 1:31 | 6 s | Cooldowns/Voraussetzungen |
| 1:31 | 1:39 | 7 s | Cooldowns/Voraussetzungen |
| 1:39 | 1:48 | 9 s | Cooldowns/Voraussetzungen |
| 1:49 | 1:53 | 4 s | Cooldowns/Voraussetzungen |
| 1:54 | 2:01 | 7 s | Cooldowns/Voraussetzungen |
| 2:01 | 2:12 | 10 s | Cooldowns/Voraussetzungen |
| 2:12 | 2:21 | 10 s | Cooldowns/Voraussetzungen |
| 2:21 | 2:31 | 10 s | Cooldowns/Voraussetzungen |
| 2:32 | 2:45 | 13 s | Cooldowns/Voraussetzungen |
| 2:45 | 2:49 | 5 s | Cooldowns/Voraussetzungen |
| 2:49 | 2:51 | 1 s | Cooldowns/Voraussetzungen |

## Butcher

Gesamt **1.013.996**, Laufzeit 10:00, Rest-Mana 4.291, Rest-HP 5.891. Effektive Angriffsheilung 45, Überheilung 358, HP-Regeneration 4.904, Lebenspreise 4.948. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.986.004.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 792 | 792 | 734.168 | 0 | 0 |
| Aufgeladener Schlag | 24 | 24 | 42.768 | 14.328 | 0 |
| Mächtiger Hieb | 22 | 22 | 36.520 | 5.280 | 0 |
| Schädelspalter | 10 | 10 | 34.830 | 9.930 | 0 |
| Rotier Schlag | 22 | 22 | 33.462 | 2.904 | 0 |
| Schmetterschlag | 14 | 14 | 32.130 | 6.174 | 0 |
| Erdbeben | 11 | 11 | 21.318 | 5.115 | 0 |
| Erdbrecher | 10 | 10 | 19.400 | 5.660 | 0 |
| Abräumer | 13 | 13 | 19.110 | 3.276 | 0 |
| Schockwelle der Regeneration | 9 | 9 | 16.803 | 9.099 | 45 |
| Energieentladung | 4 | 4 | 11.680 | 0 | 0 |
| Zorn des Henkers | 2 | 2 | 7.494 | 1.418 | 0 |
| Dämonische Schockwelle | 2 | 2 | 4.316 | 440 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:03. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 4 Phasen mit mindestens einem zu teuren bereiten Skill; darin 1 tatsächliche Mana-Wartepausen mit zusammen 3 Sekunden und maximal 2.80 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:03 | 0:04 | 1 s | Aufgeladener Schlag | 323 |
| 0:04 | 0:04 | 0 s | Aufgeladener Schlag | 520 |
| 0:04 | 0:05 | 1 s | Aufgeladener Schlag | 388 |
| 0:05 | 0:08 | 3 s | Aufgeladener Schlag | 136 |

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:05 | 0:08 | 3 s | Mana |
| 0:08 | 0:30 | 23 s | Cooldowns/Voraussetzungen |
| 0:31 | 0:32 | 1 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:44 | 11 s | Cooldowns/Voraussetzungen |
| 0:44 | 0:50 | 6 s | Cooldowns/Voraussetzungen |
| 0:51 | 0:57 | 6 s | Cooldowns/Voraussetzungen |
| 0:58 | 1:00 | 2 s | Cooldowns/Voraussetzungen |
| 1:00 | 1:03 | 2 s | Cooldowns/Voraussetzungen |
| 1:03 | 1:10 | 7 s | Cooldowns/Voraussetzungen |
| 1:11 | 1:23 | 12 s | Cooldowns/Voraussetzungen |
| 1:23 | 1:24 | 1 s | Cooldowns/Voraussetzungen |
| 1:25 | 1:27 | 2 s | Cooldowns/Voraussetzungen |
| 1:27 | 1:28 | 1 s | Cooldowns/Voraussetzungen |
| 1:28 | 1:36 | 8 s | Cooldowns/Voraussetzungen |
| 1:37 | 1:48 | 11 s | Cooldowns/Voraussetzungen |
| 1:48 | 1:51 | 3 s | Cooldowns/Voraussetzungen |
| 1:52 | 1:56 | 4 s | Cooldowns/Voraussetzungen |
| 1:56 | 2:00 | 4 s | Cooldowns/Voraussetzungen |
| 2:00 | 2:04 | 3 s | Cooldowns/Voraussetzungen |
| 2:04 | 2:10 | 6 s | Cooldowns/Voraussetzungen |

## Druide

Gesamt **1.264.901**, Laufzeit 10:00, Rest-Mana 6.536, Rest-HP 4.278. Effektive Angriffsheilung 0, Überheilung 2.844, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.735.099.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 928 | 928 | 621.625 | 111.360 | 0 |
| Auto-Attack | 905 | 905 | 468.790 | 0 | 0 |
| Sprungschlag | 16 | 16 | 33.984 | 16.032 | 0 |
| Ätherregen | 5 | 20 | 28.437 | 4.875 | 0 |
| Beben | 20 | 20 | 26.800 | 4.580 | 0 |
| Erdbeben | 11 | 11 | 20.755 | 5.115 | 0 |
| Windschlitzer | 14 | 14 | 18.408 | 5.684 | 0 |
| Eislanze | 16 | 16 | 17.486 | 7.392 | 0 |
| Verbrennen | 28 | 136 | 13.056 | 3.360 | 0 |
| Seelenbegleiter | 2 | 897 | 9.688 | 264 | 0 |
| Manaexplosion | 2 | 2 | 4.635 | 9.796 | 0 |
| Bannmagie | 2 | 2 | 1.238 | 232 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:05. Erstmals wirklich 0 Mana: 0:04, insgesamt 3 Ereignisse mit vollständig ausgegebenem Mana. 13 Phasen mit mindestens einem zu teuren bereiten Skill; darin 13 tatsächliche Mana-Wartepausen mit zusammen 5 Sekunden und maximal 0.70 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 0:04, 6:04, 6:27.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:05 | 0:06 | 1 s | Energieschlag | 0 |
| 6:05 | 6:06 | 1 s | Energieschlag | 0 |
| 6:09 | 6:09 | 0 s | Ätherregen | 444 |
| 6:09 | 6:10 | 1 s | Ätherregen | 324 |
| 6:10 | 6:10 | 1 s | Ätherregen | 786 |
| 6:10 | 6:11 | 1 s | Ätherregen | 666 |
| 6:11 | 6:12 | 0 s | Ätherregen | 546 |
| 6:13 | 6:14 | 1 s | Energieschlag | 33 |
| 6:21 | 6:21 | 0 s | Sprungschlag | 921 |
| 6:21 | 6:22 | 0 s | Sprungschlag | 801 |
| 6:23 | 6:24 | 0 s | Energieschlag | 21 |
| 6:27 | 6:28 | 0 s | Energieschlag | 0 |
| 6:33 | 6:34 | 1 s | Energieschlag | 95 |

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Gladiator

Gesamt **951.273**, Laufzeit 10:00, Rest-Mana 5.057, Rest-HP 7.461. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 62. Gegner-Restleben 9.048.727.

Große Kombos: rageOutbursts: 4.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 805 | 805 | 735.406 | 0 | 0 |
| Sprungschlag | 16 | 16 | 40.288 | 16.032 | 0 |
| Mächtiger Hieb | 23 | 23 | 37.848 | 5.520 | 0 |
| Schmetterschlag | 14 | 14 | 31.834 | 6.174 | 0 |
| Holzspalter | 15 | 15 | 25.362 | 5.925 | 0 |
| Kriegerischer Ansturm | 9 | 9 | 20.795 | 2.745 | 0 |
| Wutklinge | 8 | 8 | 18.288 | 0 | 0 |
| Wirbelsturm | 7 | 7 | 12.732 | 2.723 | 0 |
| Wutexplosion | 4 | 4 | 11.313 | 0 | 0 |
| Sturm der Wut | 4 | 4 | 8.707 | 0 | 0 |
| Ausbruch der Wut | 4 | 4 | 8.701 | 0 | 0 |
| Energie der Wut | 6 | 0 | 0 | 2.730 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:04 | 0:30 | 26 s | Cooldowns/Voraussetzungen |
| 0:31 | 0:38 | 7 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:43 | 5 s | Cooldowns/Voraussetzungen |
| 0:44 | 0:45 | 2 s | Cooldowns/Voraussetzungen |
| 0:45 | 0:56 | 11 s | Cooldowns/Voraussetzungen |
| 0:56 | 0:57 | 1 s | Cooldowns/Voraussetzungen |
| 0:58 | 1:11 | 13 s | Cooldowns/Voraussetzungen |
| 1:11 | 1:16 | 5 s | Cooldowns/Voraussetzungen |
| 1:16 | 1:24 | 9 s | Cooldowns/Voraussetzungen |
| 1:25 | 1:26 | 1 s | Cooldowns/Voraussetzungen |
| 1:27 | 1:39 | 11 s | Cooldowns/Voraussetzungen |
| 1:39 | 1:51 | 12 s | Cooldowns/Voraussetzungen |
| 1:52 | 1:54 | 2 s | Cooldowns/Voraussetzungen |
| 1:54 | 2:09 | 15 s | Cooldowns/Voraussetzungen |
| 2:10 | 2:18 | 9 s | Cooldowns/Voraussetzungen |
| 2:19 | 2:22 | 3 s | Cooldowns/Voraussetzungen |
| 2:22 | 2:32 | 10 s | Cooldowns/Voraussetzungen |
| 2:32 | 2:45 | 14 s | Cooldowns/Voraussetzungen |
| 2:46 | 2:52 | 6 s | Cooldowns/Voraussetzungen |
| 2:53 | 2:56 | 3 s | Cooldowns/Voraussetzungen |

## Heiler

Gesamt **1.855.018**, Laufzeit 10:00, Rest-Mana 7.263, Rest-HP 3.898. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.144.982.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 965 | 965 | 1.064.395 | 115.800 | 0 |
| Auto-Attack | 691 | 691 | 620.518 | 0 | 0 |
| Frostschauer | 14 | 70 | 83.467 | 5.068 | 0 |
| Kristallisierte Wasserspähre | 24 | 24 | 31.285 | 3.960 | 0 |
| Eislanze | 16 | 16 | 24.904 | 7.392 | 0 |
| Schwerter des Lichtes | 11 | 11 | 21.197 | 7.788 | 0 |
| Göttliche Nova | 4 | 4 | 9.252 | 2.848 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Kräuterkundler

Gesamt **1.190.977**, Laufzeit 10:00, Rest-Mana 6.423, Rest-HP 5.096. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.809.023.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 674 | 674 | 606.041 | 0 | 0 |
| Elektrisches Feld | 26 | 130 | 137.104 | 5.512 | 0 |
| Tobender Sturm | 8 | 72 | 105.655 | 4.224 | 0 |
| Gezielter Blitz | 34 | 34 | 73.818 | 20.332 | 0 |
| Kugelblitz | 22 | 22 | 57.782 | 19.316 | 0 |
| Geladener Nebel | 28 | 28 | 54.829 | 19.124 | 0 |
| Wasserfesseln | 44 | 44 | 41.631 | 10.208 | 0 |
| Ewiges Eis | 25 | 25 | 40.954 | 12.875 | 0 |
| Eislanze | 25 | 25 | 38.179 | 11.550 | 0 |
| Windschlitzer | 20 | 20 | 34.983 | 8.120 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:04 | 0:18 | 13 s | Cooldowns/Voraussetzungen |
| 0:18 | 0:19 | 2 s | Cooldowns/Voraussetzungen |
| 0:20 | 0:23 | 4 s | Cooldowns/Voraussetzungen |
| 0:24 | 0:27 | 2 s | Cooldowns/Voraussetzungen |
| 0:29 | 0:31 | 2 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:37 | 5 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:45 | 7 s | Cooldowns/Voraussetzungen |
| 0:47 | 0:51 | 4 s | Cooldowns/Voraussetzungen |
| 0:52 | 0:55 | 3 s | Cooldowns/Voraussetzungen |
| 0:56 | 0:57 | 1 s | Cooldowns/Voraussetzungen |
| 0:58 | 1:02 | 4 s | Cooldowns/Voraussetzungen |
| 1:03 | 1:08 | 5 s | Cooldowns/Voraussetzungen |
| 1:08 | 1:09 | 1 s | Cooldowns/Voraussetzungen |
| 1:10 | 1:12 | 2 s | Cooldowns/Voraussetzungen |
| 1:12 | 1:13 | 2 s | Cooldowns/Voraussetzungen |
| 1:14 | 1:15 | 1 s | Cooldowns/Voraussetzungen |
| 1:17 | 1:25 | 8 s | Cooldowns/Voraussetzungen |
| 1:26 | 1:30 | 4 s | Cooldowns/Voraussetzungen |
| 1:30 | 1:31 | 1 s | Cooldowns/Voraussetzungen |
| 1:33 | 1:39 | 6 s | Cooldowns/Voraussetzungen |

## Jäger

Gesamt **1.072.012**, Laufzeit 10:00, Rest-Mana 4.581, Rest-HP 5.184. Effektive Angriffsheilung 0, Überheilung 1.716, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.927.988.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 812 | 812 | 669.250 | 0 | 0 |
| Salve | 9 | 9 | 103.918 | 1.926 | 0 |
| Feuerpfeil | 69 | 69 | 86.402 | 19.251 | 0 |
| Präzisionsschuss | 10 | 10 | 58.198 | 10.690 | 0 |
| Seelenbegleiter | 2 | 897 | 43.110 | 264 | 0 |
| Gebundener Schuss | 36 | 36 | 36.835 | 3.672 | 0 |
| Verstärkter Pfeil | 13 | 13 | 31.840 | 9.516 | 0 |
| Schockschuss | 12 | 12 | 17.474 | 5.592 | 0 |
| Entzugspfeil | 11 | 11 | 14.335 | 1.485 | 0 |
| Kettenschuss | 11 | 11 | 10.650 | 330 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:03 | 0:11 | 8 s | Cooldowns/Voraussetzungen |
| 0:11 | 0:19 | 8 s | Cooldowns/Voraussetzungen |
| 0:20 | 0:28 | 9 s | Cooldowns/Voraussetzungen |
| 0:28 | 0:36 | 8 s | Cooldowns/Voraussetzungen |
| 0:37 | 0:46 | 9 s | Cooldowns/Voraussetzungen |
| 0:46 | 0:49 | 3 s | Cooldowns/Voraussetzungen |
| 0:49 | 0:52 | 3 s | Cooldowns/Voraussetzungen |
| 0:54 | 0:55 | 1 s | Cooldowns/Voraussetzungen |
| 0:55 | 0:59 | 4 s | Cooldowns/Voraussetzungen |
| 0:59 | 1:01 | 2 s | Cooldowns/Voraussetzungen |
| 1:02 | 1:03 | 1 s | Cooldowns/Voraussetzungen |
| 1:03 | 1:07 | 4 s | Cooldowns/Voraussetzungen |
| 1:07 | 1:10 | 3 s | Cooldowns/Voraussetzungen |
| 1:11 | 1:12 | 2 s | Cooldowns/Voraussetzungen |
| 1:12 | 1:21 | 9 s | Cooldowns/Voraussetzungen |
| 1:21 | 1:27 | 6 s | Cooldowns/Voraussetzungen |
| 1:28 | 1:30 | 2 s | Cooldowns/Voraussetzungen |
| 1:30 | 1:37 | 7 s | Cooldowns/Voraussetzungen |
| 1:38 | 1:43 | 5 s | Cooldowns/Voraussetzungen |
| 1:45 | 1:47 | 3 s | Cooldowns/Voraussetzungen |

## Ritter

Gesamt **638.373**, Laufzeit 10:00, Rest-Mana 5.983, Rest-HP 9.970. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.361.627.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 817 | 817 | 451.801 | 0 | 0 |
| Brecher des Geistes | 43 | 43 | 39.646 | 10.492 | 0 |
| Schildstoß | 19 | 19 | 30.077 | 12.483 | 0 |
| Mächtiger Hieb | 23 | 23 | 29.578 | 5.520 | 0 |
| Donnernde Lanze | 15 | 15 | 26.895 | 6.210 | 0 |
| Schildsturm | 16 | 16 | 25.968 | 9.456 | 0 |
| Brecher der Deckung | 24 | 24 | 22.512 | 6.912 | 0 |
| Erlösendes Feld | 8 | 8 | 11.896 | 3.112 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:02 | 0:15 | 14 s | Cooldowns/Voraussetzungen |
| 0:16 | 0:27 | 12 s | Cooldowns/Voraussetzungen |
| 0:28 | 0:29 | 1 s | Cooldowns/Voraussetzungen |
| 0:30 | 0:32 | 2 s | Cooldowns/Voraussetzungen |
| 0:32 | 0:39 | 7 s | Cooldowns/Voraussetzungen |
| 0:39 | 0:41 | 2 s | Cooldowns/Voraussetzungen |
| 0:41 | 0:43 | 3 s | Cooldowns/Voraussetzungen |
| 0:44 | 0:53 | 10 s | Cooldowns/Voraussetzungen |
| 0:53 | 0:55 | 1 s | Cooldowns/Voraussetzungen |
| 0:55 | 0:57 | 2 s | Cooldowns/Voraussetzungen |
| 0:58 | 1:04 | 6 s | Cooldowns/Voraussetzungen |
| 1:04 | 1:11 | 7 s | Cooldowns/Voraussetzungen |
| 1:12 | 1:15 | 3 s | Cooldowns/Voraussetzungen |
| 1:16 | 1:18 | 2 s | Cooldowns/Voraussetzungen |
| 1:18 | 1:19 | 1 s | Cooldowns/Voraussetzungen |
| 1:19 | 1:22 | 2 s | Cooldowns/Voraussetzungen |
| 1:22 | 1:25 | 3 s | Cooldowns/Voraussetzungen |
| 1:26 | 1:36 | 10 s | Cooldowns/Voraussetzungen |
| 1:36 | 1:39 | 3 s | Cooldowns/Voraussetzungen |
| 1:40 | 1:45 | 6 s | Cooldowns/Voraussetzungen |

Hinweis: Donnernde Lanze: keine feste Castzeit gespeichert; Ansturm-/Animationsdauer im vereinbarten Test ignoriert (0 s).

## Luminet

Gesamt **1.984.689**, Laufzeit 10:00, Rest-Mana 689, Rest-HP 4.141. Effektive Angriffsheilung 0, Überheilung 774, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.015.311.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 643 | 643 | 741.893 | 77.160 | 0 |
| Auto-Attack | 684 | 684 | 648.979 | 0 | 0 |
| Lichtblitz | 181 | 181 | 279.617 | 67.694 | 0 |
| Luminus | 81 | 81 | 84.916 | 6.075 | 0 |
| Heilige Vernichtung | 14 | 14 | 58.707 | 4.172 | 0 |
| Urteil des Himmels | 14 | 28 | 36.053 | 5.670 | 0 |
| Heiliges Kreuz | 14 | 14 | 29.327 | 6.496 | 0 |
| Eislanze | 15 | 15 | 23.652 | 6.930 | 0 |
| Schwerter des Lichtes | 10 | 10 | 19.897 | 7.080 | 0 |
| Strafendes Licht | 7 | 7 | 15.427 | 4.592 | 0 |
| Astralkörper | 6 | 6 | 14.393 | 4.092 | 0 |
| Göttliche Nova | 4 | 4 | 9.455 | 2.848 | 0 |
| Ätherregen | 1 | 4 | 7.738 | 975 | 0 |
| Aurora Wellen | 3 | 3 | 7.346 | 2.349 | 0 |
| Licht kristallenes Gefängnis | 5 | 5 | 7.289 | 1.045 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:23. Erstmals wirklich 0 Mana: 3:49, insgesamt 1 Ereignisse mit vollständig ausgegebenem Mana. 853 Phasen mit mindestens einem zu teuren bereiten Skill; darin 678 tatsächliche Mana-Wartepausen mit zusammen 366 Sekunden und maximal 1.60 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 3:49.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:23 | 0:24 | 0 s | Lichtblitz | 350 |
| 0:29 | 0:30 | 1 s | Energieschlag | 113 |
| 0:31 | 0:32 | 0 s | Energieschlag | 19 |
| 0:37 | 0:38 | 1 s | Energieschlag | 36 |
| 0:39 | 0:40 | 1 s | Energieschlag | 62 |
| 0:41 | 0:41 | 0 s | Lichtblitz | 267 |
| 0:41 | 0:42 | 0 s | Lichtblitz | 147 |
| 0:42 | 0:43 | 0 s | Urteil des Himmels | 293 |
| 0:43 | 0:43 | 1 s | Urteil des Himmels | 173 |
| 0:43 | 0:44 | 0 s | Heilige Vernichtung | 53 |
| 0:44 | 0:44 | 0 s | Urteil des Himmels | 395 |
| 0:44 | 0:44 | 1 s | Urteil des Himmels | 275 |
| 0:44 | 0:45 | 1 s | Urteil des Himmels | 155 |
| 0:45 | 0:46 | 0 s | Urteil des Himmels | 35 |
| 0:46 | 0:46 | 0 s | Eislanze | 270 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:48 | 0:50 | 1 s | Mana |
| 0:50 | 0:52 | 1 s | Mana |
| 1:04 | 1:06 | 1 s | Mana |
| 1:30 | 1:32 | 2 s | Mana |
| 1:32 | 1:34 | 1 s | Mana |
| 1:34 | 1:36 | 1 s | Mana |
| 1:56 | 1:58 | 1 s | Mana |
| 2:00 | 2:02 | 1 s | Mana |
| 2:08 | 2:10 | 1 s | Mana |
| 2:16 | 2:18 | 2 s | Mana |
| 2:20 | 2:22 | 1 s | Mana |
| 2:28 | 2:30 | 1 s | Mana |
| 2:40 | 2:42 | 1 s | Mana |
| 2:42 | 2:44 | 1 s | Mana |
| 2:44 | 2:46 | 1 s | Mana |
| 2:58 | 3:00 | 1 s | Mana |
| 3:00 | 3:02 | 2 s | Mana |
| 3:02 | 3:04 | 1 s | Mana |
| 3:04 | 3:06 | 1 s | Mana |
| 3:06 | 3:08 | 1 s | Mana |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Ritualist

Gesamt **1.624.039**, Laufzeit 10:00, Rest-Mana 5.227, Rest-HP 3.817. Effektive Angriffsheilung 4.057, Überheilung 4.634, HP-Regeneration 41.932, Lebenspreise 45.633. Rest-Seelen 22, Rest-Wut 0. Gegner-Restleben 8.375.961.

Große Kombos: soulShackles: 7; soulHarvests: 4.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 701 | 701 | 669.665 | 0 | 0 |
| Morrak´s Meister | 2 | 808 | 257.590 | 0 | 0 |
| Feuerball | 146 | 146 | 231.376 | 38.836 | 0 |
| Dunkler Impuls | 146 | 146 | 177.523 | 15.768 | 0 |
| Seelenqual | 105 | 105 | 131.795 | 8.085 | 0 |
| Feuer der Verdammten | 12 | 84 | 56.932 | 5.628 | 0 |
| Schrei der Unterwelt | 8 | 8 | 23.070 | 0 | 0 |
| Lebenssauger | 15 | 15 | 22.030 | 5.310 | 3.720 |
| Meteoritenschauer | 3 | 18 | 20.689 | 1.407 | 0 |
| Sturm des Feuers | 6 | 6 | 10.253 | 2.250 | 0 |
| Seelenfessel | 7 | 7 | 9.274 | 1.351 | 0 |
| Seelenernte | 4 | 4 | 8.442 | 1.860 | 337 |
| Seelenplage | 3 | 3 | 5.399 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:06 | 0:10 | 4 s | Cooldowns/Voraussetzungen |
| 0:10 | 0:14 | 4 s | Cooldowns/Voraussetzungen |
| 0:14 | 0:18 | 4 s | Cooldowns/Voraussetzungen |
| 0:18 | 0:22 | 4 s | Cooldowns/Voraussetzungen |
| 0:22 | 0:26 | 4 s | Cooldowns/Voraussetzungen |
| 0:26 | 0:30 | 4 s | Cooldowns/Voraussetzungen |
| 0:30 | 0:34 | 4 s | Cooldowns/Voraussetzungen |
| 0:34 | 0:38 | 4 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:42 | 4 s | Cooldowns/Voraussetzungen |
| 0:43 | 0:46 | 3 s | Cooldowns/Voraussetzungen |
| 0:46 | 0:50 | 4 s | Cooldowns/Voraussetzungen |
| 0:50 | 0:52 | 2 s | Cooldowns/Voraussetzungen |
| 0:52 | 0:54 | 1 s | Cooldowns/Voraussetzungen |
| 0:54 | 0:58 | 4 s | Cooldowns/Voraussetzungen |
| 0:58 | 1:02 | 4 s | Cooldowns/Voraussetzungen |
| 1:02 | 1:06 | 4 s | Cooldowns/Voraussetzungen |
| 1:06 | 1:10 | 4 s | Cooldowns/Voraussetzungen |
| 1:10 | 1:14 | 4 s | Cooldowns/Voraussetzungen |
| 1:14 | 1:18 | 4 s | Cooldowns/Voraussetzungen |
| 1:18 | 1:22 | 3 s | Cooldowns/Voraussetzungen |

## Schamane

Gesamt **1.397.394**, Laufzeit 10:00, Rest-Mana 1.095, Rest-HP 4.637. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.602.606.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 891 | 891 | 604.187 | 106.920 | 0 |
| Auto-Attack | 909 | 909 | 505.995 | 0 | 0 |
| Mächtiger Doppelschlag | 19 | 19 | 44.485 | 12.483 | 0 |
| Gezielter Blitz | 18 | 18 | 30.800 | 10.764 | 0 |
| Eisranken | 27 | 135 | 29.838 | 8.802 | 0 |
| Beben | 20 | 20 | 27.573 | 4.580 | 0 |
| Rotier Schlag | 21 | 21 | 24.164 | 2.772 | 0 |
| Infernal Zyklon | 5 | 30 | 23.523 | 2.680 | 0 |
| Erdbeben | 11 | 11 | 21.271 | 5.115 | 0 |
| Kristallisierte Wasserspähre | 24 | 24 | 20.474 | 3.960 | 0 |
| Himmelsbrecher | 5 | 10 | 18.538 | 5.940 | 0 |
| Feuerlanze | 16 | 16 | 17.346 | 7.552 | 0 |
| Windfesseln | 17 | 17 | 17.036 | 4.845 | 0 |
| Vakuumimpuls | 5 | 5 | 12.166 | 2.765 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 2:48. Erstmals wirklich 0 Mana: 9:29, insgesamt 1 Ereignisse mit vollständig ausgegebenem Mana. 57 Phasen mit mindestens einem zu teuren bereiten Skill; darin 51 tatsächliche Mana-Wartepausen mit zusammen 35 Sekunden und maximal 1.90 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 9:29.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 2:48 | 2:50 | 2 s | Energieschlag | 63 |
| 3:21 | 3:22 | 0 s | Eisranken | 259 |
| 4:35 | 4:35 | 1 s | Himmelsbrecher | 746 |
| 4:35 | 4:36 | 0 s | Himmelsbrecher | 626 |
| 4:36 | 4:38 | 1 s | Energieschlag | 20 |
| 4:38 | 4:38 | 0 s | Feuerlanze | 137 |
| 4:38 | 4:40 | 2 s | Feuerlanze | 17 |
| 4:40 | 4:40 | 0 s | Kristallisierte Wasserspähre | 127 |
| 4:40 | 4:42 | 1 s | Kristallisierte Wasserspähre | 7 |
| 4:45 | 4:46 | 1 s | Rotier Schlag | 110 |
| 4:47 | 4:48 | 1 s | Energieschlag | 7 |
| 5:00 | 5:02 | 2 s | Energieschlag | 100 |
| 5:03 | 5:03 | 0 s | Beben | 157 |
| 5:03 | 5:04 | 0 s | Beben | 37 |
| 5:07 | 5:08 | 0 s | Energieschlag | 87 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 2:48 | 2:50 | 2 s | Mana |
| 4:36 | 4:38 | 1 s | Mana |
| 4:38 | 4:40 | 2 s | Mana |
| 4:40 | 4:42 | 1 s | Mana |
| 4:47 | 4:48 | 1 s | Mana |
| 5:00 | 5:02 | 2 s | Mana |
| 5:34 | 5:36 | 1 s | Mana |
| 6:54 | 6:56 | 1 s | Mana |
| 7:12 | 7:14 | 2 s | Mana |
| 7:14 | 7:16 | 2 s | Mana |
| 7:17 | 7:18 | 1 s | Mana |
| 9:14 | 9:16 | 2 s | Mana |
| 9:30 | 9:32 | 1 s | Mana |
| 9:32 | 9:34 | 2 s | Mana |
| 9:34 | 9:36 | 1 s | Mana |

## Seelenjäger

Gesamt **1.132.952**, Laufzeit 10:00, Rest-Mana 3.565, Rest-HP 4.125. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.867.048.

Große Kombos: soulCollectionWindows: 8; spectralFinishers: 8.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 984 | 984 | 685.454 | 0 | 0 |
| Seelensammler | 200 | 200 | 163.520 | 0 | 0 |
| Explosionspfeil | 20 | 60 | 84.516 | 7.620 | 0 |
| Feuerpfeil | 64 | 64 | 71.974 | 17.856 | 0 |
| Doppelschuss | 24 | 24 | 61.085 | 7.656 | 0 |
| Kopfschuss | 11 | 11 | 37.612 | 8.624 | 0 |
| Spektralketten | 8 | 8 | 14.980 | 0 | 0 |
| Kettenschuss | 11 | 11 | 9.247 | 330 | 0 |
| Hinterhältiger Pfeil | 6 | 6 | 4.564 | 558 | 0 |
| Seelenschuss | 8 | 0 | 0 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:06 | 0:14 | 8 s | Cooldowns/Voraussetzungen |
| 0:14 | 0:23 | 9 s | Cooldowns/Voraussetzungen |
| 0:23 | 0:30 | 7 s | Cooldowns/Voraussetzungen |
| 0:31 | 0:32 | 1 s | Cooldowns/Voraussetzungen |
| 0:32 | 0:35 | 3 s | Cooldowns/Voraussetzungen |
| 0:35 | 0:41 | 6 s | Cooldowns/Voraussetzungen |
| 0:41 | 0:49 | 9 s | Cooldowns/Voraussetzungen |
| 0:49 | 0:55 | 6 s | Cooldowns/Voraussetzungen |
| 0:56 | 0:58 | 3 s | Cooldowns/Voraussetzungen |
| 0:58 | 1:00 | 2 s | Cooldowns/Voraussetzungen |
| 1:00 | 1:02 | 1 s | Cooldowns/Voraussetzungen |
| 1:02 | 1:05 | 3 s | Cooldowns/Voraussetzungen |
| 1:05 | 1:07 | 2 s | Cooldowns/Voraussetzungen |
| 1:07 | 1:15 | 8 s | Cooldowns/Voraussetzungen |
| 1:21 | 1:29 | 8 s | Cooldowns/Voraussetzungen |
| 1:29 | 1:35 | 6 s | Cooldowns/Voraussetzungen |
| 1:35 | 1:37 | 2 s | Cooldowns/Voraussetzungen |
| 1:38 | 1:45 | 8 s | Cooldowns/Voraussetzungen |
| 1:46 | 1:48 | 2 s | Cooldowns/Voraussetzungen |
| 1:48 | 1:55 | 7 s | Cooldowns/Voraussetzungen |

## Schurke

Gesamt **1.005.620**, Laufzeit 10:00, Rest-Mana 3.828, Rest-HP 4.766. Effektive Angriffsheilung 0, Überheilung 837, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.994.380.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 907 | 907 | 611.227 | 0 | 0 |
| Tödlicher Tanz | 9 | 9 | 82.433 | 2.829 | 0 |
| Wirbelnde Klinge | 11 | 11 | 69.625 | 4.151 | 0 |
| Brecher des Lichts | 14 | 14 | 48.643 | 7.917 | 0 |
| Klingentornado | 10 | 10 | 46.236 | 2.600 | 0 |
| Dunkler Schlag | 43 | 43 | 40.975 | 2.878 | 0 |
| Kunai Todesstoß | 38 | 38 | 27.508 | 0 | 0 |
| Sturmklinge | 11 | 11 | 22.065 | 8.323 | 0 |
| Überschallklinge | 6 | 6 | 13.379 | 3.067 | 0 |
| Blutklinge | 9 | 9 | 12.878 | 3.003 | 0 |
| Schattenschlag | 7 | 7 | 11.024 | 3.918 | 0 |
| Schattendolch | 7 | 7 | 10.373 | 2.091 | 0 |
| Schattenfalle | 7 | 7 | 9.253 | 1.833 | 0 |
| Dunkler Schleier | 7 | 0 | 0 | 1.046 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:03. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 2 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:03 | 0:03 | 0 s | Blutklinge | 135 |
| 0:03 | 0:03 | 0 s | Blutklinge | 68 |

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:04 | 0:17 | 14 s | Cooldowns/Voraussetzungen |
| 0:17 | 0:19 | 2 s | Cooldowns/Voraussetzungen |
| 0:20 | 0:31 | 12 s | Cooldowns/Voraussetzungen |
| 0:31 | 0:35 | 4 s | Cooldowns/Voraussetzungen |
| 0:36 | 0:45 | 9 s | Cooldowns/Voraussetzungen |
| 0:45 | 0:51 | 6 s | Cooldowns/Voraussetzungen |
| 0:52 | 0:59 | 7 s | Cooldowns/Voraussetzungen |
| 0:59 | 1:02 | 3 s | Cooldowns/Voraussetzungen |
| 1:02 | 1:07 | 5 s | Cooldowns/Voraussetzungen |
| 1:08 | 1:09 | 1 s | Cooldowns/Voraussetzungen |
| 1:10 | 1:13 | 4 s | Cooldowns/Voraussetzungen |
| 1:13 | 1:15 | 1 s | Cooldowns/Voraussetzungen |
| 1:15 | 1:23 | 9 s | Cooldowns/Voraussetzungen |
| 1:24 | 1:27 | 4 s | Cooldowns/Voraussetzungen |
| 1:28 | 1:30 | 2 s | Cooldowns/Voraussetzungen |
| 1:31 | 1:39 | 8 s | Cooldowns/Voraussetzungen |
| 1:40 | 1:41 | 2 s | Cooldowns/Voraussetzungen |
| 1:41 | 1:50 | 9 s | Cooldowns/Voraussetzungen |
| 1:51 | 1:55 | 4 s | Cooldowns/Voraussetzungen |
| 1:56 | 2:01 | 5 s | Cooldowns/Voraussetzungen |

# Zehn-Minuten-Schadensvergleich

Berechnungsstand: 2026-10-17 T 13:20:47.427 Z; Eingabedateien und SHA-256-Prüfsummen sind im JSON gespeichert.

- Zunächst Kontrolllauf mit 2.000.000 HP; da einzelne Klassen das Ziel vor 600 Sekunden töten, zusätzlicher einheitlicher 600-Sekunden-Vergleich mit 10.000.000 HP für alle Klassen. Der Todzeitpunkt des bestätigten 2-Millionen-Ziels wird separat ausgewiesen. 600 Sekunden je Klasse, Level 60/R 6 mit permanenten Passiven, frisches normales Monster, ohne Gegenangriffe, Rüstung, Verfehlen, Heilung oder Regeneration. Ritualist startet mit 100 Seelen, Gladiator mit 100 Wut, alle Cooldowns bereit.
- Auto-Attacks werden bei Zauberstabklassen (Heiler/Kräuterkundler/Luminet/Ritualist) als magisch mit dem aktuellen M-Angriff, bei den übrigen Waffenklassen als physisch mit aktuellem P-Angriff gerechnet. Dies ist die explizite Waffen-/Schadensart-Annahme dieses Tests.
- 100% Angriffstempo entspricht bei Heiler/Kräuterkundler/Luminet/Ritualist 1,2, bei Jäger/Seelenjäger 1,3, sonst 1,5 gemeinsamen Auto-Attack-Aktionen pro Sekunde. Waffenabzüge und permanente Angriffstempo-Boni werden als Faktor angewendet. Zwei Waffen sind eine Aktion mit dem bereits kombinierten Angriff. HP/MP-Regeneration alle 2 Sekunden. Zeitschritt 10 ms; keine zusätzliche globale Abklingzeit. Abweichungen von subframegenauen Abläufen sind möglich.
- Nach einem abgeschlossenen Skill 0,1 Sekunden Reaktionszeit bis zum nächsten Skill; Während dieser Reaktionszeit keine eigenen Aktionen. Auto-Attacks frühestens 0,5 Sekunden nach Skillabschluss. Feste Sammelsequenzen Seelenqual/Seelensammler behalten ihre Frequenz, Seelenschuss startet die Sequenz direkt. Nur Castzeit sperrt weitere eigene Aktionen. Animationen/Flugzeiten/Ansturmdauer ignoriert. Periodische Treffer und fest gespeicherte Mehrfachtrefferabstände bleiben zeitlich verteilt. Treffer nach 600 Sekunden entfallen. Cooldowns beginnen bei Aktivierungsbeginn, Treffer und Wirkungen am Castende.
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

Waffenstand: aktuelle, gegen MongoDB geprüfte Rang-6-Werte einschließlich überarbeiteter Attributboni. Luminet verwendet den Lichtstab, Ritualist den Victim-Stab. Faith/Victim-Verwertung bleibt gesperrt. Abenteurer weiterhin mit den bisherigen Mace-/Einhandschwert-Varianten; seine Zweihandschwertwerte sind noch offen. Alle Klassen überstehen den Kontrolllauf gegen das Ziel mit 2 Millionen HP über volle 600 Sekunden.

## Gesamtvergleich: volle 600 Sekunden, Zusatztest mit 10 Millionen Ziel-HP

| Klasse | Schaden | DPS | Skills | Auto-Attacks | Beschwörungen | Ø pro Minute | Erstmals Skill zu teuer | Erstmals Mana=0 | Mana-Wartephasen | Mana-Wartezeit gesamt | Längste Mana-Pause | Tod bei 2 Mio HP |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: | --- |
| Luminet | **1.352.652** | 2.254 | 1.162.358 | 190.294 | 0 | 135.265 | 0:31 | 2:23 | 600 | 337 s | 1.60 s | — |
| Ritualist | **1.283.980** | 2.140 | 621.239 | 448.028 | 214.712 | 128.398 | — | — | 0 | 0 s | 0.00 s | — |
| Heiler | **1.102.890** | 1.838 | 1.102.890 | 0 | 0 | 110.289 | — | — | 0 | 0 s | 0.00 s | — |
| Seelenjäger | **960.999** | 1.602 | 433.410 | 527.589 | 0 | 96.100 | — | — | 0 | 0 s | 0.00 s | — |
| Kräuterkundler | **947.131** | 1.579 | 535.786 | 411.345 | 0 | 94.713 | — | — | 0 | 0 s | 0.00 s | — |
| Jäger | **879.625** | 1.466 | 342.972 | 495.966 | 40.688 | 87.963 | — | — | 0 | 0 s | 0.00 s | — |
| Schamane | **863.807** | 1.440 | 842.644 | 21.163 | 0 | 86.381 | 2:48 | — | 47 | 31 s | 1.90 s | — |
| Butcher | **848.076** | 1.413 | 263.126 | 584.950 | 0 | 84.808 | 0:03 | — | 1 | 3 s | 2.80 s | — |
| Schurke | **771.968** | 1.287 | 339.150 | 432.819 | 0 | 77.197 | 0:03 | — | 0 | 0 s | 0.00 s | — |
| Gladiator | **763.768** | 1.273 | 200.883 | 562.885 | 0 | 76.377 | — | — | 0 | 0 s | 0.00 s | — |
| Druide | **753.333** | 1.256 | 740.547 | 3.098 | 9.688 | 75.333 | 0:05 | 0:04 | 13 | 5 s | 0.70 s | — |
| Abenteurer (Sword) | **635.310** | 1.059 | 196.263 | 439.047 | 0 | 63.531 | — | — | 0 | 0 s | 0.00 s | — |
| Abenteurer (Mace) | **608.447** | 1.014 | 192.307 | 416.140 | 0 | 60.845 | — | — | 0 | 0 s | 0.00 s | — |
| Ritter | **549.940** | 917 | 178.432 | 371.508 | 0 | 54.994 | — | — | 0 | 0 s | 0.00 s | — |

## Zahlen richtig lesen und Heiler-Ergebnis nachvollziehen

**Ein zu teurer bereiter Skill bedeutet weder null Mana noch null Leben.** Die Summe der Mana-Wartezeit besteht aus vielen kurzen Pausen; sie ist keine zusammenhängende Regeneration bis zum vollen Pool. Ressourcen werden fortlaufend genutzt. Die Cooldowns bleiben dauerhaft aktiv und werden zwischen Minuten nicht zurückgesetzt. Nur beim Start sind alle Skills gleichzeitig bereit.

Butcher: erster zu teurer Skill bei 3.70 Sekunden; zu diesem Zeitpunkt 323 Mana vorhanden. Längste tatsächliche Mana-Pause mit 2.80 Sekunden, 0 Ereignisse mit exakt null Mana. Der Lebenswert war nicht null.

Luminet: 600 kurze Mana-Pausen, zusammen 337.00 Sekunden; längste einzelne Pause 1.60 Sekunden. Währenddessen weiter Auto-Attacks, dazwischen weitere bezahlbare Skills. Tatsächlich null Mana 4-mal; erste Stelle 2:23.

Heiler: Energieschlag hat 0,1 Sekunden Castzeit und 0,6 Sekunden Cooldown auf Maximalstufe. 964 Anwendungen ergeben 947.998 Schaden. Auto-Attacks ergeben weitere 0, die restlichen Skills 154.892. Energieschlag und Auto-Attacks tragen zusammen 86.0 Prozent bei. Potenzielle MP-Regeneration 781,3 alle zwei Sekunden (390,65/s) gegenüber durchschnittlich 237.89 Mana-Verbrauch/s erklärt den fehlenden Engpass.

Die hohe Rate entsteht im vereinfachten Modell ausdrücklich ohne Animationssperren, mit 0,1 Sekunden Reaktionspause zwischen regulären Skills. Zauberstab-Auto-Attacks gelten als magisch. Diese Voraussetzungen prüfen, bevor daraus pauschale Skill-Nerfs abgeleitet werden.


## Sensitivität: Mana für den stärksten bereiten Angriff zurückhalten

Der Hauptlauf verwendet die erste bezahlbare priorisierte Aktion. Der Zusatzlauf wartet bei fehlendem Mana für die höchste Priorität mit Auto-Attacks, statt billigere Skills zu wirken. Das ist eine andere Steuerung, keine geänderte Klasse.

| Klasse | Hauptlauf | Mit Manareserve | Unterschied |
| --- | ---: | ---: | ---: |
| Abenteurer (Mace) | 608.447 | 608.447 | 0 |
| Abenteurer (Sword) | 635.310 | 635.310 | 0 |
| Butcher | 848.076 | 852.937 | 4.861 |
| Druide | 753.333 | 754.149 | 816 |
| Gladiator | 763.768 | 763.768 | 0 |
| Heiler | 1.102.890 | 1.102.890 | 0 |
| Kräuterkundler | 947.131 | 947.131 | 0 |
| Jäger | 879.625 | 879.625 | 0 |
| Ritter | 549.940 | 549.940 | 0 |
| Luminet | 1.352.652 | 1.370.079 | 17.427 |
| Ritualist | 1.283.980 | 1.283.980 | 0 |
| Schamane | 863.807 | 861.473 | -2.334 |
| Seelenjäger | 960.999 | 960.999 | 0 |
| Schurke | 771.968 | 772.477 | 509 |

Ein Mana-Hindernis bedeutet: mindestens ein bereiter priorisierter Skill ist nicht bezahlbar. Das ist nicht zwangsläufig ein leerer Pool oder Stillstand; günstigere Skills und Auto-Attacks bleiben erlaubt. Mana-Wartezeit ist die Summe vieler einzelner Zeitstücke ohne bezahlbare gewählte Skillaktion; Auto-Attacks gehen weiter. Sie ist keine Zeit bis zum vollen Mana-Pool und keine HP-Ausfallzeit. Die Zahl der Mana-Wartephasen zählt diese tatsächlich getrennten Pausen. Andere Wartezeiten wie Tarnrückkehr sind getrennt erfasst.

## Schaden pro Minute

| Klasse | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Ø |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer (Mace) | 67.386 | 62.458 | 58.381 | 61.085 | 58.381 | 59.399 | 59.529 | 60.531 | 61.360 | 59.937 | 60.845 |
| Abenteurer (Sword) | 70.183 | 65.180 | 61.052 | 63.731 | 61.052 | 62.020 | 62.175 | 63.202 | 64.107 | 62.608 | 63.531 |
| Butcher | 95.265 | 82.064 | 82.838 | 84.051 | 81.470 | 86.468 | 84.006 | 85.658 | 83.600 | 82.653 | 84.808 |
| Druide | 80.452 | 72.702 | 75.275 | 75.235 | 75.126 | 73.139 | 78.873 | 72.702 | 77.804 | 72.026 | 75.333 |
| Gladiator | 86.338 | 69.955 | 73.121 | 80.991 | 71.573 | 76.499 | 80.109 | 70.916 | 77.769 | 76.498 | 76.377 |
| Heiler | 115.365 | 107.781 | 115.074 | 106.798 | 107.330 | 114.541 | 106.347 | 114.454 | 108.401 | 106.798 | 110.289 |
| Kräuterkundler | 103.829 | 94.653 | 96.376 | 91.242 | 88.677 | 98.617 | 96.195 | 98.217 | 88.814 | 90.511 | 94.713 |
| Jäger | 93.556 | 87.465 | 88.429 | 87.465 | 91.582 | 87.868 | 86.610 | 88.429 | 90.619 | 77.602 | 87.963 |
| Ritter | 59.127 | 54.408 | 54.080 | 54.793 | 55.244 | 54.408 | 55.461 | 52.751 | 55.076 | 54.592 | 54.994 |
| Luminet | 151.985 | 132.108 | 135.482 | 133.655 | 128.815 | 135.106 | 134.750 | 136.025 | 131.891 | 132.835 | 135.265 |
| Ritualist | 149.197 | 136.279 | 118.760 | 135.808 | 131.215 | 92.191 | 142.064 | 126.747 | 118.245 | 133.474 | 128.398 |
| Schamane | 93.939 | 82.663 | 90.288 | 83.882 | 87.374 | 81.100 | 84.916 | 87.238 | 85.032 | 87.374 | 86.381 |
| Seelenjäger | 102.004 | 100.613 | 97.046 | 100.679 | 81.578 | 100.016 | 97.773 | 98.372 | 100.679 | 82.240 | 96.100 |
| Schurke | 86.777 | 77.475 | 76.065 | 76.916 | 78.547 | 78.129 | 75.162 | 79.698 | 66.233 | 76.966 | 77.197 |

## Abenteurer (Mace)

Gesamt **608.447**, Laufzeit 10:00, Rest-Mana 5.951, Rest-HP 6.692. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.391.553.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 909 | 909 | 416.140 | 0 | 0 |
| Wirbelnde Klinge | 11 | 11 | 57.739 | 4.151 | 0 |
| Mächtiger Doppelschlag | 19 | 19 | 40.728 | 12.109 | 0 |
| Sprungschlag | 16 | 16 | 33.021 | 15.551 | 0 |
| Beben | 20 | 20 | 25.596 | 4.443 | 0 |
| Rotier Schlag | 22 | 22 | 23.140 | 2.817 | 0 |
| Überschallklinge | 6 | 6 | 12.083 | 3.067 | 0 |

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

Gesamt **635.310**, Laufzeit 10:00, Rest-Mana 5.951, Rest-HP 6.692. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.364.690.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 909 | 909 | 439.047 | 0 | 0 |
| Wirbelnde Klinge | 11 | 11 | 59.125 | 4.151 | 0 |
| Mächtiger Doppelschlag | 19 | 19 | 41.686 | 12.109 | 0 |
| Sprungschlag | 16 | 16 | 33.424 | 15.551 | 0 |
| Beben | 20 | 20 | 26.100 | 4.443 | 0 |
| Rotier Schlag | 22 | 22 | 23.694 | 2.817 | 0 |
| Überschallklinge | 6 | 6 | 12.234 | 3.067 | 0 |

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

Gesamt **848.076**, Laufzeit 10:00, Rest-Mana 4.291, Rest-HP 5.891. Effektive Angriffsheilung 42, Überheilung 336, HP-Regeneration 4.906, Lebenspreise 4.948. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.151.924.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 722 | 722 | 584.950 | 0 | 0 |
| Aufgeladener Schlag | 24 | 24 | 39.964 | 14.328 | 0 |
| Mächtiger Hieb | 22 | 22 | 33.950 | 5.280 | 0 |
| Schädelspalter | 10 | 10 | 33.662 | 9.930 | 0 |
| Rotier Schlag | 22 | 22 | 30.892 | 2.904 | 0 |
| Schmetterschlag | 14 | 14 | 30.495 | 6.174 | 0 |
| Erdbeben | 11 | 11 | 20.033 | 5.115 | 0 |
| Erdbrecher | 10 | 10 | 18.232 | 5.660 | 0 |
| Abräumer | 13 | 13 | 17.591 | 3.276 | 0 |
| Schockwelle der Regeneration | 9 | 9 | 15.752 | 9.099 | 42 |
| Energieentladung | 4 | 4 | 11.213 | 0 | 0 |
| Zorn des Henkers | 2 | 2 | 7.260 | 1.418 | 0 |
| Dämonische Schockwelle | 2 | 2 | 4.082 | 440 | 0 |

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

Gesamt **753.333**, Laufzeit 10:00, Rest-Mana 6.536, Rest-HP 4.278. Effektive Angriffsheilung 0, Überheilung 2.762, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.246.667.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 925 | 925 | 581.996 | 111.000 | 0 |
| Sprungschlag | 16 | 16 | 32.778 | 16.032 | 0 |
| Ätherregen | 5 | 20 | 27.624 | 4.875 | 0 |
| Beben | 20 | 20 | 25.292 | 4.580 | 0 |
| Erdbeben | 11 | 11 | 19.479 | 5.115 | 0 |
| Windschlitzer | 14 | 14 | 17.839 | 5.684 | 0 |
| Eislanze | 16 | 16 | 16.835 | 7.392 | 0 |
| Verbrennen | 28 | 135 | 12.960 | 3.360 | 0 |
| Seelenbegleiter | 2 | 897 | 9.688 | 264 | 0 |
| Manaexplosion | 2 | 2 | 4.589 | 9.916 | 0 |
| Auto-Attack | 7 | 7 | 3.098 | 0 | 0 |
| Bannmagie | 2 | 2 | 1.156 | 232 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:05. Erstmals wirklich 0 Mana: 0:04, insgesamt 3 Ereignisse mit vollständig ausgegebenem Mana. 13 Phasen mit mindestens einem zu teuren bereiten Skill; darin 13 tatsächliche Mana-Wartepausen mit zusammen 5 Sekunden und maximal 0.70 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 0:04, 6:04, 6:27.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:05 | 0:06 | 1 s | Energieschlag | 0 |
| 6:05 | 6:06 | 1 s | Energieschlag | 0 |
| 6:09 | 6:09 | 0 s | Ätherregen | 444 |
| 6:09 | 6:10 | 1 s | Ätherregen | 324 |
| 6:10 | 6:10 | 1 s | Ätherregen | 786 |
| 6:11 | 6:11 | 1 s | Ätherregen | 666 |
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

Gesamt **763.768**, Laufzeit 10:00, Rest-Mana 5.057, Rest-HP 7.461. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 57. Gegner-Restleben 9.236.232.

Große Kombos: rageOutbursts: 4.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 750 | 750 | 562.885 | 0 | 0 |
| Sprungschlag | 16 | 16 | 37.676 | 16.032 | 0 |
| Mächtiger Hieb | 23 | 23 | 34.045 | 5.520 | 0 |
| Schmetterschlag | 14 | 14 | 29.549 | 6.174 | 0 |
| Holzspalter | 15 | 15 | 22.914 | 5.925 | 0 |
| Kriegerischer Ansturm | 9 | 9 | 19.326 | 2.745 | 0 |
| Wutklinge | 8 | 8 | 16.932 | 0 | 0 |
| Wirbelsturm | 7 | 7 | 11.589 | 2.723 | 0 |
| Wutexplosion | 4 | 4 | 10.710 | 0 | 0 |
| Sturm der Wut | 5 | 5 | 10.092 | 0 | 0 |
| Ausbruch der Wut | 4 | 4 | 8.049 | 0 | 0 |
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

Gesamt **1.102.890**, Laufzeit 10:00, Rest-Mana 7.395, Rest-HP 3.898. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.897.110.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 964 | 964 | 947.998 | 115.680 | 0 |
| Frostschauer | 14 | 70 | 74.927 | 5.068 | 0 |
| Kristallisierte Wasserspähre | 24 | 24 | 28.358 | 3.960 | 0 |
| Eislanze | 16 | 16 | 22.952 | 7.392 | 0 |
| Schwerter des Lichtes | 11 | 11 | 19.881 | 7.788 | 0 |
| Göttliche Nova | 4 | 4 | 8.774 | 2.848 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Kräuterkundler

Gesamt **947.131**, Laufzeit 10:00, Rest-Mana 6.543, Rest-HP 5.096. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.052.869.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 529 | 529 | 411.345 | 0 | 0 |
| Elektrisches Feld | 26 | 130 | 121.031 | 5.512 | 0 |
| Tobender Sturm | 8 | 72 | 96.761 | 4.224 | 0 |
| Gezielter Blitz | 34 | 34 | 69.618 | 20.332 | 0 |
| Kugelblitz | 22 | 22 | 55.064 | 19.316 | 0 |
| Geladener Nebel | 28 | 28 | 51.425 | 19.124 | 0 |
| Ewiges Eis | 25 | 25 | 37.915 | 12.875 | 0 |
| Wasserfesseln | 44 | 44 | 36.282 | 10.208 | 0 |
| Eislanze | 25 | 25 | 35.140 | 11.550 | 0 |
| Windschlitzer | 20 | 20 | 32.552 | 8.120 | 0 |

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

Gesamt **879.625**, Laufzeit 10:00, Rest-Mana 4.581, Rest-HP 5.184. Effektive Angriffsheilung 0, Überheilung 1.716, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.120.375.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 649 | 649 | 495.966 | 0 | 0 |
| Salve | 9 | 9 | 97.438 | 1.926 | 0 |
| Feuerpfeil | 69 | 69 | 82.262 | 19.251 | 0 |
| Präzisionsschuss | 10 | 10 | 57.118 | 10.690 | 0 |
| Seelenbegleiter | 2 | 897 | 40.688 | 264 | 0 |
| Gebundener Schuss | 36 | 36 | 34.675 | 3.672 | 0 |
| Verstärkter Pfeil | 13 | 13 | 31.060 | 9.516 | 0 |
| Schockschuss | 12 | 12 | 16.754 | 5.592 | 0 |
| Entzugspfeil | 11 | 11 | 13.675 | 1.485 | 0 |
| Kettenschuss | 11 | 11 | 9.990 | 330 | 0 |

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

Gesamt **549.940**, Laufzeit 10:00, Rest-Mana 5.983, Rest-HP 9.475. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.450.060.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 746 | 746 | 371.508 | 0 | 0 |
| Brecher des Geistes | 43 | 43 | 37.281 | 10.492 | 0 |
| Schildstoß | 19 | 19 | 29.032 | 12.483 | 0 |
| Mächtiger Hieb | 23 | 23 | 28.313 | 5.520 | 0 |
| Donnernde Lanze | 15 | 15 | 26.070 | 6.210 | 0 |
| Schildsturm | 16 | 16 | 25.088 | 9.456 | 0 |
| Brecher der Deckung | 24 | 24 | 21.192 | 6.912 | 0 |
| Erlösendes Feld | 8 | 8 | 11.456 | 3.112 | 0 |

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

Gesamt **1.352.652**, Laufzeit 10:00, Rest-Mana 699, Rest-HP 4.141. Effektive Angriffsheilung 0, Überheilung 709, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.647.348.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 615 | 615 | 611.679 | 73.800 | 0 |
| Lichtblitz | 190 | 190 | 263.258 | 71.060 | 0 |
| Auto-Attack | 241 | 241 | 190.294 | 0 | 0 |
| Luminus | 82 | 82 | 72.890 | 6.150 | 0 |
| Heilige Vernichtung | 14 | 14 | 52.006 | 4.172 | 0 |
| Urteil des Himmels | 15 | 30 | 35.093 | 6.075 | 0 |
| Heiliges Kreuz | 14 | 14 | 27.098 | 6.496 | 0 |
| Eislanze | 15 | 15 | 21.264 | 6.930 | 0 |
| Schwerter des Lichtes | 11 | 11 | 20.005 | 7.788 | 0 |
| Strafendes Licht | 8 | 8 | 16.357 | 5.248 | 0 |
| Astralkörper | 6 | 6 | 13.438 | 4.092 | 0 |
| Göttliche Nova | 4 | 4 | 8.818 | 2.848 | 0 |
| Ätherregen | 1 | 4 | 7.091 | 975 | 0 |
| Aurora Wellen | 3 | 3 | 6.869 | 2.349 | 0 |
| Licht kristallenes Gefängnis | 5 | 5 | 6.493 | 1.045 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:31. Erstmals wirklich 0 Mana: 2:23, insgesamt 4 Ereignisse mit vollständig ausgegebenem Mana. 817 Phasen mit mindestens einem zu teuren bereiten Skill; darin 600 tatsächliche Mana-Wartepausen mit zusammen 337 Sekunden und maximal 1.60 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 2:23, 3:47, 6:33, 8:39.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:31 | 0:32 | 0 s | Energieschlag | 49 |
| 0:37 | 0:38 | 1 s | Energieschlag | 84 |
| 0:39 | 0:40 | 1 s | Energieschlag | 116 |
| 0:41 | 0:41 | 0 s | Lichtblitz | 327 |
| 0:42 | 0:43 | 0 s | Urteil des Himmels | 359 |
| 0:43 | 0:43 | 1 s | Urteil des Himmels | 239 |
| 0:43 | 0:44 | 0 s | Heilige Vernichtung | 119 |
| 0:44 | 0:46 | 1 s | Eislanze | 62 |
| 0:46 | 0:46 | 0 s | Lichtblitz | 246 |
| 0:46 | 0:47 | 1 s | Heiliges Kreuz | 126 |
| 0:47 | 0:48 | 1 s | Heiliges Kreuz | 6 |
| 0:48 | 0:48 | 0 s | Lichtblitz | 188 |
| 0:48 | 0:50 | 2 s | Luminus | 68 |
| 0:51 | 0:52 | 1 s | Energieschlag | 25 |
| 0:53 | 0:54 | 1 s | Energieschlag | 57 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:44 | 0:46 | 1 s | Mana |
| 0:48 | 0:50 | 2 s | Mana |
| 1:01 | 1:02 | 1 s | Mana |
| 1:26 | 1:28 | 2 s | Mana |
| 1:28 | 1:30 | 1 s | Mana |
| 1:30 | 1:32 | 2 s | Mana |
| 1:56 | 1:58 | 1 s | Mana |
| 1:59 | 2:00 | 1 s | Mana |
| 2:04 | 2:06 | 1 s | Mana |
| 2:06 | 2:08 | 1 s | Mana |
| 2:08 | 2:10 | 1 s | Mana |
| 2:11 | 2:12 | 1 s | Mana |
| 2:12 | 2:14 | 2 s | Mana |
| 2:15 | 2:16 | 1 s | Mana |
| 2:16 | 2:18 | 1 s | Mana |
| 2:19 | 2:20 | 1 s | Mana |
| 2:20 | 2:22 | 1 s | Mana |
| 2:35 | 2:36 | 1 s | Mana |
| 2:40 | 2:42 | 1 s | Mana |
| 2:43 | 2:44 | 1 s | Mana |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Ritualist

Gesamt **1.283.980**, Laufzeit 10:00, Rest-Mana 4.987, Rest-HP 4.057. Effektive Angriffsheilung 4.070, Überheilung 4.573, HP-Regeneration 42.945, Lebenspreise 46.659. Rest-Seelen 22, Rest-Wut 0. Gegner-Restleben 8.716.020.

Große Kombos: soulShackles: 7; soulHarvests: 4.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 563 | 563 | 448.028 | 0 | 0 |
| Morrak´s Meister | 2 | 808 | 214.712 | 0 | 0 |
| Feuerball | 146 | 146 | 207.901 | 38.836 | 0 |
| Dunkler Impuls | 146 | 146 | 154.048 | 15.768 | 0 |
| Seelenqual | 105 | 105 | 114.912 | 8.085 | 0 |
| Feuer der Verdammten | 12 | 84 | 51.529 | 5.628 | 0 |
| Schrei der Unterwelt | 8 | 8 | 22.390 | 0 | 0 |
| Meteoritenschauer | 3 | 18 | 20.689 | 1.407 | 0 |
| Lebenssauger | 15 | 15 | 19.619 | 5.310 | 3.710 |
| Sturm des Feuers | 6 | 6 | 9.288 | 2.250 | 0 |
| Seelenfessel | 7 | 7 | 8.149 | 1.351 | 0 |
| Seelenernte | 4 | 4 | 7.799 | 1.860 | 360 |
| Seelenplage | 3 | 3 | 4.917 | 0 | 0 |

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

Gesamt **863.807**, Laufzeit 10:00, Rest-Mana 963, Rest-HP 4.637. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.136.193.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 891 | 891 | 568.191 | 106.920 | 0 |
| Mächtiger Doppelschlag | 19 | 19 | 41.609 | 12.483 | 0 |
| Gezielter Blitz | 18 | 18 | 30.073 | 10.764 | 0 |
| Eisranken | 27 | 135 | 28.747 | 8.802 | 0 |
| Beben | 20 | 20 | 26.060 | 4.580 | 0 |
| Rotier Schlag | 22 | 22 | 23.650 | 2.904 | 0 |
| Infernal Zyklon | 5 | 30 | 22.311 | 2.680 | 0 |
| Auto-Attack | 44 | 44 | 21.163 | 0 | 0 |
| Erdbeben | 11 | 11 | 19.994 | 5.115 | 0 |
| Kristallisierte Wasserspähre | 24 | 24 | 19.505 | 3.960 | 0 |
| Himmelsbrecher | 5 | 10 | 17.493 | 5.940 | 0 |
| Feuerlanze | 16 | 16 | 16.699 | 7.552 | 0 |
| Windfesseln | 17 | 17 | 16.349 | 4.845 | 0 |
| Vakuumimpuls | 5 | 5 | 11.964 | 2.765 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 2:48. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 55 Phasen mit mindestens einem zu teuren bereiten Skill; darin 47 tatsächliche Mana-Wartepausen mit zusammen 31 Sekunden und maximal 1.90 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 2:48 | 2:50 | 2 s | Energieschlag | 63 |
| 3:21 | 3:22 | 0 s | Eisranken | 259 |
| 4:35 | 4:35 | 0 s | Himmelsbrecher | 1.106 |
| 4:35 | 4:35 | 1 s | Himmelsbrecher | 986 |
| 4:37 | 4:38 | 1 s | Feuerlanze | 20 |
| 4:38 | 4:38 | 0 s | Feuerlanze | 137 |
| 4:38 | 4:40 | 2 s | Feuerlanze | 17 |
| 4:40 | 4:40 | 0 s | Kristallisierte Wasserspähre | 127 |
| 4:40 | 4:42 | 1 s | Kristallisierte Wasserspähre | 7 |
| 4:45 | 4:46 | 1 s | Rotier Schlag | 110 |
| 4:47 | 4:48 | 1 s | Energieschlag | 7 |
| 5:00 | 5:02 | 2 s | Energieschlag | 100 |
| 5:03 | 5:04 | 0 s | Beben | 37 |
| 5:07 | 5:08 | 0 s | Energieschlag | 87 |
| 5:33 | 5:33 | 0 s | Gezielter Blitz | 516 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 2:48 | 2:50 | 2 s | Mana |
| 4:38 | 4:40 | 2 s | Mana |
| 4:40 | 4:42 | 1 s | Mana |
| 4:47 | 4:48 | 1 s | Mana |
| 5:00 | 5:02 | 2 s | Mana |
| 5:34 | 5:36 | 1 s | Mana |
| 7:12 | 7:14 | 2 s | Mana |
| 7:14 | 7:16 | 2 s | Mana |
| 9:24 | 9:26 | 2 s | Mana |
| 9:32 | 9:34 | 2 s | Mana |

## Seelenjäger

Gesamt **960.999**, Laufzeit 10:00, Rest-Mana 3.565, Rest-HP 4.125. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.039.001.

Große Kombos: soulCollectionWindows: 8; spectralFinishers: 8.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 796 | 796 | 527.589 | 0 | 0 |
| Seelensammler | 200 | 200 | 156.760 | 0 | 0 |
| Explosionspfeil | 20 | 60 | 82.488 | 7.620 | 0 |
| Feuerpfeil | 64 | 64 | 69.811 | 17.856 | 0 |
| Doppelschuss | 24 | 24 | 59.462 | 7.656 | 0 |
| Kopfschuss | 11 | 11 | 36.943 | 8.624 | 0 |
| Spektralketten | 8 | 8 | 14.710 | 0 | 0 |
| Kettenschuss | 11 | 11 | 8.875 | 330 | 0 |
| Hinterhältiger Pfeil | 6 | 6 | 4.361 | 558 | 0 |
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

Gesamt **771.968**, Laufzeit 10:00, Rest-Mana 3.828, Rest-HP 4.766. Effektive Angriffsheilung 0, Überheilung 740, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.228.032.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 851 | 851 | 432.819 | 0 | 0 |
| Tödlicher Tanz | 9 | 9 | 70.531 | 2.829 | 0 |
| Wirbelnde Klinge | 11 | 11 | 60.533 | 4.151 | 0 |
| Brecher des Lichts | 14 | 14 | 42.164 | 7.917 | 0 |
| Klingentornado | 10 | 10 | 39.624 | 2.600 | 0 |
| Dunkler Schlag | 43 | 43 | 33.867 | 2.878 | 0 |
| Kunai Todesstoß | 38 | 38 | 21.227 | 0 | 0 |
| Sturmklinge | 11 | 11 | 20.247 | 8.323 | 0 |
| Überschallklinge | 6 | 6 | 12.388 | 3.067 | 0 |
| Blutklinge | 9 | 9 | 11.390 | 3.003 | 0 |
| Schattenschlag | 7 | 7 | 9.867 | 3.918 | 0 |
| Schattendolch | 7 | 7 | 9.216 | 2.091 | 0 |
| Schattenfalle | 7 | 7 | 8.096 | 1.833 | 0 |
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

# Zehn-Minuten-Schadensvergleich

Berechnungsstand: 2026-10-17 T 15:35:06.125 Z; Eingabedateien und SHA-256-Prüfsummen sind im JSON gespeichert.

- R 6-Test mit freigeschalteter besonderer Verwertung: Luminet erhält 1,8 M-Angriff je Faith, Ritualist 1,9 M-Angriff je Victim zusätzlich zur Intelligenz (je 1,6 M-Angriff pro Int bei beiden Klassen). Permanente Attribute, dynamischer Reaper-Bonus und Morraks 5 Victim sind enthalten. Beim Luminet wird Aufenthalt im eigenen Lichtschwertfeld angenommen (+17,5 Faith während der Feldlaufzeit). Diese Freischaltung wird für diesen R 6-Test vorausgesetzt.
- Zunächst Kontrolllauf mit 2.000.000 HP; da einzelne Klassen das Ziel vor 600 Sekunden töten, zusätzlicher einheitlicher 600-Sekunden-Vergleich mit 10.000.000 HP für alle Klassen. Der Todzeitpunkt des bestätigten 2-Millionen-Ziels wird separat ausgewiesen. 600 Sekunden je Klasse, Level 60/R 6 mit permanenten Passiven, frisches normales Monster, ohne Gegenangriffe, Rüstung, Verfehlen, Heilung oder Regeneration. Ritualist startet mit 100 Seelen, Gladiator mit 100 Wut, alle Cooldowns bereit.
- Auto-Attacks werden bei Zauberstabklassen (Heiler/Kräuterkundler/Luminet/Ritualist) als magisch mit dem aktuellen M-Angriff, bei den übrigen Waffenklassen als physisch mit aktuellem P-Angriff gerechnet. Dies ist die explizite Waffen-/Schadensart-Annahme dieses Tests.
- 100% Angriffstempo entspricht bei Heiler/Luminet/Ritualist 1,1, beim Kräuterkundler 1,2, bei Jäger/Seelenjäger 1,3, sonst 1,5 gemeinsamen Auto-Attack-Aktionen pro Sekunde. Waffenabzüge und permanente Angriffstempo-Boni werden als Faktor angewendet. Zwei Waffen sind eine Aktion mit dem bereits kombinierten Angriff. HP/MP-Regeneration alle 2 Sekunden. Zeitschritt 10 ms; keine zusätzliche globale Abklingzeit. Abweichungen von subframegenauen Abläufen sind möglich.
- Nach einem abgeschlossenen Skill 0,1 Sekunden Reaktionszeit bis zum nächsten Skill; Während dieser Reaktionszeit keine eigenen Aktionen. Auto-Attacks frühestens 0,5 Sekunden nach Skillabschluss. Feste Sammelsequenzen Seelenqual/Seelensammler behalten ihre Frequenz, Seelenschuss startet die Sequenz direkt. Nur Castzeit sperrt weitere eigene Aktionen. Animationen/Flugzeiten/Ansturmdauer ignoriert. Periodische Treffer und fest gespeicherte Mehrfachtrefferabstände bleiben zeitlich verteilt. Treffer nach 600 Sekunden entfallen. Cooldowns beginnen erst am Castende beim Auslösen des Angriffs; Flugzeit, Animation und laufende Felder verzögern diesen Beginn nicht. Treffer und Wirkungen folgen ihren definierten Zeitpunkten.
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
| Luminet | **1.460.699** | 2.434 | 1.192.026 | 268.673 | 0 | 146.070 | 2:11 | 9:59 | 164 | 82 s | 1.60 s | — |
| Ritualist | **1.217.031** | 2.028 | 583.581 | 419.107 | 214.344 | 121.703 | — | — | 0 | 0 s | 0.00 s | — |
| Heiler | **1.150.527** | 1.918 | 872.720 | 277.807 | 0 | 115.053 | — | — | 0 | 0 s | 0.00 s | — |
| Schamane | **1.043.050** | 1.738 | 745.323 | 297.727 | 0 | 104.305 | — | — | 0 | 0 s | 0.00 s | — |
| Seelenjäger | **961.662** | 1.603 | 433.410 | 528.252 | 0 | 96.166 | — | — | 0 | 0 s | 0.00 s | — |
| Druide | **931.547** | 1.553 | 620.240 | 299.198 | 12.110 | 93.155 | 0:05 | 0:04 | 5 | 3 s | 1.55 s | — |
| Kräuterkundler | **912.810** | 1.521 | 514.131 | 398.679 | 0 | 91.281 | — | — | 0 | 0 s | 0.00 s | — |
| Jäger | **881.719** | 1.470 | 342.008 | 499.023 | 40.688 | 88.172 | — | — | 0 | 0 s | 0.00 s | — |
| Butcher | **850.506** | 1.418 | 263.126 | 587.381 | 0 | 85.051 | 0:03 | — | 1 | 3 s | 2.80 s | — |
| Schurke | **774.511** | 1.291 | 339.150 | 435.362 | 0 | 77.451 | 0:03 | — | 0 | 0 s | 0.00 s | — |
| Gladiator | **764.668** | 1.274 | 199.358 | 565.310 | 0 | 76.467 | — | — | 0 | 0 s | 0.00 s | — |
| Abenteurer (Sword) | **634.827** | 1.058 | 196.263 | 438.564 | 0 | 63.483 | — | — | 0 | 0 s | 0.00 s | — |
| Abenteurer (Mace) | **607.989** | 1.013 | 192.307 | 415.682 | 0 | 60.799 | — | — | 0 | 0 s | 0.00 s | — |
| Ritter | **543.842** | 906 | 176.318 | 367.524 | 0 | 54.384 | — | — | 0 | 0 s | 0.00 s | — |

## Zahlen richtig lesen und Heiler-Ergebnis nachvollziehen

**Ein zu teurer bereiter Skill bedeutet weder null Mana noch null Leben.** Die Summe der Mana-Wartezeit besteht aus vielen kurzen Pausen; sie ist keine zusammenhängende Regeneration bis zum vollen Pool. Ressourcen werden fortlaufend genutzt. Die Cooldowns bleiben dauerhaft aktiv und werden zwischen Minuten nicht zurückgesetzt. Nur beim Start sind alle Skills gleichzeitig bereit.

Butcher: erster zu teurer Skill bei 3.70 Sekunden; zu diesem Zeitpunkt 323 Mana vorhanden. Längste tatsächliche Mana-Pause mit 2.80 Sekunden, 0 Ereignisse mit exakt null Mana. Der Lebenswert war nicht null.

Luminet: 164 kurze Mana-Pausen, zusammen 81.90 Sekunden; längste einzelne Pause 1.60 Sekunden. Währenddessen weiter Auto-Attacks, dazwischen weitere bezahlbare Skills. Tatsächlich null Mana 1-mal; erste Stelle 9:59.

Heiler: Energieschlag hat 0,15 Sekunden Castzeit und 0,7 Sekunden Cooldown auf Maximalstufe. 776 Anwendungen ergeben 727.888 Schaden. Auto-Attacks ergeben weitere 277.807, die restlichen Skills 144.832. Energieschlag und Auto-Attacks tragen zusammen 87.4 Prozent bei. Potenzielle MP-Regeneration 727.00 alle zwei Sekunden (363.50/s) gegenüber durchschnittlich 198.07 Mana-Verbrauch/s erklärt den fehlenden Engpass.

Die hohe Rate entsteht im vereinfachten Modell ausdrücklich ohne Animationssperren, mit 0,1 Sekunden Reaktionspause zwischen regulären Skills. Zauberstab-Auto-Attacks gelten als magisch. Diese Voraussetzungen prüfen, bevor daraus pauschale Skill-Nerfs abgeleitet werden.


## Sensitivität: Mana für den stärksten bereiten Angriff zurückhalten

Der Hauptlauf verwendet die erste bezahlbare priorisierte Aktion. Der Zusatzlauf wartet bei fehlendem Mana für die höchste Priorität mit Auto-Attacks, statt billigere Skills zu wirken. Das ist eine andere Steuerung, keine geänderte Klasse.

| Klasse | Hauptlauf | Mit Manareserve | Unterschied |
| --- | ---: | ---: | ---: |
| Abenteurer (Mace) | 607.989 | 607.989 | 0 |
| Abenteurer (Sword) | 634.827 | 634.827 | 0 |
| Butcher | 850.506 | 851.316 | 810 |
| Druide | 931.547 | 931.104 | -443 |
| Gladiator | 764.668 | 764.668 | 0 |
| Heiler | 1.150.527 | 1.150.527 | 0 |
| Kräuterkundler | 912.810 | 912.810 | 0 |
| Jäger | 881.719 | 881.719 | 0 |
| Ritter | 543.842 | 543.842 | 0 |
| Luminet | 1.460.699 | 1.450.940 | -9.759 |
| Ritualist | 1.217.031 | 1.217.031 | 0 |
| Schamane | 1.043.050 | 1.043.050 | 0 |
| Seelenjäger | 961.662 | 961.662 | 0 |
| Schurke | 774.511 | 771.968 | -2.543 |

Ein Mana-Hindernis bedeutet: mindestens ein bereiter priorisierter Skill ist nicht bezahlbar. Das ist nicht zwangsläufig ein leerer Pool oder Stillstand; günstigere Skills und Auto-Attacks bleiben erlaubt. Mana-Wartezeit ist die Summe vieler einzelner Zeitstücke ohne bezahlbare gewählte Skillaktion; Auto-Attacks gehen weiter. Sie ist keine Zeit bis zum vollen Mana-Pool und keine HP-Ausfallzeit. Die Zahl der Mana-Wartephasen zählt diese tatsächlich getrennten Pausen. Andere Wartezeiten wie Tarnrückkehr sind getrennt erfasst.

## Schaden pro Minute

| Klasse | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Ø |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer (Mace) | 68.301 | 62.001 | 58.381 | 62.001 | 57.923 | 59.857 | 59.987 | 59.615 | 60.445 | 59.479 | 60.799 |
| Abenteurer (Sword) | 71.149 | 64.697 | 61.052 | 64.697 | 60.569 | 62.503 | 62.658 | 62.236 | 63.141 | 62.125 | 63.483 |
| Butcher | 94.455 | 82.875 | 82.028 | 85.672 | 81.470 | 85.735 | 84.196 | 86.882 | 84.540 | 82.653 | 85.051 |
| Druide | 96.928 | 90.605 | 95.375 | 91.812 | 94.991 | 91.609 | 91.998 | 91.995 | 96.211 | 90.024 | 93.155 |
| Gladiator | 87.871 | 69.242 | 72.408 | 81.733 | 73.127 | 75.766 | 78.496 | 73.255 | 76.799 | 75.972 | 76.467 |
| Heiler | 118.742 | 111.764 | 114.243 | 117.524 | 112.214 | 116.488 | 115.082 | 114.842 | 115.655 | 113.971 | 115.053 |
| Kräuterkundler | 99.998 | 91.756 | 93.227 | 88.042 | 88.085 | 93.023 | 90.383 | 96.116 | 78.409 | 93.772 | 91.281 |
| Jäger | 92.027 | 88.994 | 88.429 | 88.994 | 89.427 | 89.193 | 88.007 | 89.193 | 90.619 | 76.838 | 88.172 |
| Ritter | 59.127 | 53.412 | 54.080 | 53.797 | 53.515 | 53.412 | 55.696 | 52.382 | 54.947 | 53.474 | 54.384 |
| Luminet | 159.001 | 147.919 | 145.341 | 147.433 | 142.980 | 142.915 | 146.468 | 142.572 | 143.123 | 142.946 | 146.070 |
| Ritualist | 145.551 | 130.119 | 114.054 | 129.707 | 123.402 | 87.542 | 129.654 | 120.177 | 112.481 | 124.343 | 121.703 |
| Schamane | 111.472 | 101.096 | 106.710 | 100.694 | 103.957 | 101.317 | 104.878 | 104.882 | 101.355 | 106.688 | 104.305 |
| Seelenjäger | 102.004 | 101.275 | 97.046 | 100.679 | 81.578 | 100.679 | 97.110 | 98.372 | 100.679 | 82.240 | 96.166 |
| Schurke | 86.777 | 77.983 | 75.556 | 77.425 | 76.198 | 79.970 | 75.670 | 80.945 | 67.021 | 76.966 | 77.451 |

## Abenteurer (Mace)

Gesamt **607.989**, Laufzeit 10:00, Rest-Mana 5.951, Rest-HP 6.692. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.392.011.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 908 | 908 | 415.682 | 0 | 0 |
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
| 0:32 | 0:33 | 1 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:38 | 5 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:57 | 19 s | Cooldowns/Voraussetzungen |
| 0:57 | 1:01 | 4 s | Cooldowns/Voraussetzungen |
| 1:02 | 1:06 | 4 s | Cooldowns/Voraussetzungen |
| 1:06 | 1:16 | 10 s | Cooldowns/Voraussetzungen |
| 1:16 | 1:25 | 9 s | Cooldowns/Voraussetzungen |
| 1:25 | 1:32 | 6 s | Cooldowns/Voraussetzungen |
| 1:32 | 1:39 | 7 s | Cooldowns/Voraussetzungen |
| 1:39 | 1:49 | 10 s | Cooldowns/Voraussetzungen |
| 1:50 | 1:53 | 3 s | Cooldowns/Voraussetzungen |
| 1:54 | 2:02 | 8 s | Cooldowns/Voraussetzungen |
| 2:02 | 2:12 | 10 s | Cooldowns/Voraussetzungen |
| 2:12 | 2:21 | 10 s | Cooldowns/Voraussetzungen |
| 2:21 | 2:32 | 11 s | Cooldowns/Voraussetzungen |
| 2:32 | 2:45 | 12 s | Cooldowns/Voraussetzungen |
| 2:45 | 2:49 | 5 s | Cooldowns/Voraussetzungen |
| 2:49 | 2:51 | 1 s | Cooldowns/Voraussetzungen |

## Abenteurer (Sword)

Gesamt **634.827**, Laufzeit 10:00, Rest-Mana 5.951, Rest-HP 6.692. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.365.173.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 908 | 908 | 438.564 | 0 | 0 |
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
| 0:32 | 0:33 | 1 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:38 | 5 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:57 | 19 s | Cooldowns/Voraussetzungen |
| 0:57 | 1:01 | 4 s | Cooldowns/Voraussetzungen |
| 1:02 | 1:06 | 4 s | Cooldowns/Voraussetzungen |
| 1:06 | 1:16 | 10 s | Cooldowns/Voraussetzungen |
| 1:16 | 1:25 | 9 s | Cooldowns/Voraussetzungen |
| 1:25 | 1:32 | 6 s | Cooldowns/Voraussetzungen |
| 1:32 | 1:39 | 7 s | Cooldowns/Voraussetzungen |
| 1:39 | 1:49 | 10 s | Cooldowns/Voraussetzungen |
| 1:50 | 1:53 | 3 s | Cooldowns/Voraussetzungen |
| 1:54 | 2:02 | 8 s | Cooldowns/Voraussetzungen |
| 2:02 | 2:12 | 10 s | Cooldowns/Voraussetzungen |
| 2:12 | 2:21 | 10 s | Cooldowns/Voraussetzungen |
| 2:21 | 2:32 | 11 s | Cooldowns/Voraussetzungen |
| 2:32 | 2:45 | 12 s | Cooldowns/Voraussetzungen |
| 2:45 | 2:49 | 5 s | Cooldowns/Voraussetzungen |
| 2:49 | 2:51 | 1 s | Cooldowns/Voraussetzungen |

## Butcher

Gesamt **850.506**, Laufzeit 10:00, Rest-Mana 4.291, Rest-HP 5.891. Effektive Angriffsheilung 42, Überheilung 336, HP-Regeneration 4.906, Lebenspreise 4.948. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.149.494.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 725 | 725 | 587.381 | 0 | 0 |
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
| 0:08 | 0:31 | 23 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:44 | 12 s | Cooldowns/Voraussetzungen |
| 0:45 | 0:51 | 6 s | Cooldowns/Voraussetzungen |
| 0:51 | 0:57 | 6 s | Cooldowns/Voraussetzungen |
| 1:01 | 1:03 | 2 s | Cooldowns/Voraussetzungen |
| 1:03 | 1:11 | 8 s | Cooldowns/Voraussetzungen |
| 1:12 | 1:23 | 10 s | Cooldowns/Voraussetzungen |
| 1:23 | 1:26 | 3 s | Cooldowns/Voraussetzungen |
| 1:28 | 1:37 | 9 s | Cooldowns/Voraussetzungen |
| 1:38 | 1:48 | 10 s | Cooldowns/Voraussetzungen |
| 1:48 | 1:52 | 5 s | Cooldowns/Voraussetzungen |
| 1:52 | 1:54 | 1 s | Cooldowns/Voraussetzungen |
| 1:54 | 1:56 | 2 s | Cooldowns/Voraussetzungen |
| 1:56 | 2:00 | 4 s | Cooldowns/Voraussetzungen |
| 2:01 | 2:04 | 3 s | Cooldowns/Voraussetzungen |
| 2:05 | 2:11 | 6 s | Cooldowns/Voraussetzungen |
| 2:11 | 2:13 | 1 s | Cooldowns/Voraussetzungen |
| 2:13 | 2:20 | 8 s | Cooldowns/Voraussetzungen |
| 2:22 | 2:24 | 2 s | Cooldowns/Voraussetzungen |

## Druide

Gesamt **931.547**, Laufzeit 10:00, Rest-Mana 6.536, Rest-HP 4.278. Effektive Angriffsheilung 0, Überheilung 2.743, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.068.453.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 748 | 748 | 463.562 | 89.760 | 0 |
| Auto-Attack | 676 | 676 | 299.198 | 0 | 0 |
| Sprungschlag | 16 | 16 | 32.778 | 16.032 | 0 |
| Ätherregen | 5 | 20 | 27.435 | 4.875 | 0 |
| Beben | 20 | 20 | 25.292 | 4.580 | 0 |
| Erdbeben | 11 | 11 | 19.375 | 5.115 | 0 |
| Windschlitzer | 14 | 14 | 17.706 | 5.684 | 0 |
| Eislanze | 15 | 15 | 15.641 | 6.930 | 0 |
| Verbrennen | 27 | 132 | 12.672 | 3.240 | 0 |
| Seelenbegleiter | 2 | 897 | 12.110 | 264 | 0 |
| Manaexplosion | 2 | 2 | 4.642 | 10.156 | 0 |
| Bannmagie | 2 | 2 | 1.137 | 232 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:05. Erstmals wirklich 0 Mana: 0:04, insgesamt 2 Ereignisse mit vollständig ausgegebenem Mana. 5 Phasen mit mindestens einem zu teuren bereiten Skill; darin 5 tatsächliche Mana-Wartepausen mit zusammen 3 Sekunden und maximal 1.55 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 0:04, 6:06.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:05 | 0:06 | 1 s | Energieschlag | 0 |
| 6:07 | 6:08 | 1 s | Energieschlag | 0 |
| 6:21 | 6:21 | 0 s | Sprungschlag | 597 |
| 6:21 | 6:22 | 0 s | Sprungschlag | 477 |
| 6:22 | 6:24 | 2 s | Energieschlag | 57 |

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 6:22 | 6:24 | 2 s | Mana |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Gladiator

Gesamt **764.668**, Laufzeit 10:00, Rest-Mana 5.057, Rest-HP 7.461. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 60. Gegner-Restleben 9.235.332.

Große Kombos: rageOutbursts: 4.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 753 | 753 | 565.310 | 0 | 0 |
| Sprungschlag | 16 | 16 | 37.676 | 16.032 | 0 |
| Mächtiger Hieb | 22 | 22 | 32.599 | 5.280 | 0 |
| Schmetterschlag | 14 | 14 | 29.549 | 6.174 | 0 |
| Holzspalter | 15 | 15 | 22.914 | 5.925 | 0 |
| Kriegerischer Ansturm | 9 | 9 | 19.326 | 2.745 | 0 |
| Wutklinge | 8 | 8 | 16.932 | 0 | 0 |
| Wirbelsturm | 7 | 7 | 11.589 | 2.723 | 0 |
| Wutexplosion | 4 | 4 | 10.710 | 0 | 0 |
| Sturm der Wut | 5 | 5 | 10.014 | 0 | 0 |
| Ausbruch der Wut | 4 | 4 | 8.049 | 0 | 0 |
| Energie der Wut | 6 | 0 | 0 | 2.730 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:04 | 0:31 | 27 s | Cooldowns/Voraussetzungen |
| 0:32 | 0:38 | 6 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:43 | 6 s | Cooldowns/Voraussetzungen |
| 0:44 | 0:45 | 1 s | Cooldowns/Voraussetzungen |
| 0:45 | 0:56 | 11 s | Cooldowns/Voraussetzungen |
| 0:56 | 0:58 | 2 s | Cooldowns/Voraussetzungen |
| 0:59 | 1:11 | 12 s | Cooldowns/Voraussetzungen |
| 1:11 | 1:16 | 4 s | Cooldowns/Voraussetzungen |
| 1:16 | 1:26 | 10 s | Cooldowns/Voraussetzungen |
| 1:28 | 1:39 | 11 s | Cooldowns/Voraussetzungen |
| 1:39 | 1:54 | 14 s | Cooldowns/Voraussetzungen |
| 1:54 | 2:09 | 15 s | Cooldowns/Voraussetzungen |
| 2:11 | 2:21 | 11 s | Cooldowns/Voraussetzungen |
| 2:23 | 2:32 | 9 s | Cooldowns/Voraussetzungen |
| 2:32 | 2:49 | 17 s | Cooldowns/Voraussetzungen |
| 2:50 | 2:52 | 2 s | Cooldowns/Voraussetzungen |
| 2:52 | 2:54 | 2 s | Cooldowns/Voraussetzungen |
| 2:54 | 2:56 | 2 s | Cooldowns/Voraussetzungen |
| 2:57 | 2:59 | 3 s | Cooldowns/Voraussetzungen |
| 3:00 | 3:10 | 10 s | Cooldowns/Voraussetzungen |

## Heiler

Gesamt **1.150.527**, Laufzeit 10:00, Rest-Mana 6.852, Rest-HP 3.898. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.849.473.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 776 | 776 | 727.888 | 93.120 | 0 |
| Auto-Attack | 379 | 379 | 277.807 | 0 | 0 |
| Frostschauer | 14 | 70 | 71.686 | 5.068 | 0 |
| Kristallisierte Wasserspähre | 23 | 23 | 26.111 | 3.795 | 0 |
| Eislanze | 15 | 15 | 20.823 | 6.930 | 0 |
| Schwerter des Lichtes | 10 | 10 | 17.620 | 7.080 | 0 |
| Göttliche Nova | 4 | 4 | 8.592 | 2.848 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Kräuterkundler

Gesamt **912.810**, Laufzeit 10:00, Rest-Mana 6.543, Rest-HP 5.096. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.087.190.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 534 | 534 | 398.679 | 0 | 0 |
| Elektrisches Feld | 26 | 130 | 116.829 | 5.512 | 0 |
| Tobender Sturm | 8 | 72 | 94.493 | 4.224 | 0 |
| Gezielter Blitz | 33 | 33 | 66.563 | 19.734 | 0 |
| Kugelblitz | 21 | 21 | 51.890 | 18.438 | 0 |
| Geladener Nebel | 27 | 27 | 48.751 | 18.441 | 0 |
| Ewiges Eis | 25 | 25 | 37.140 | 12.875 | 0 |
| Wasserfesseln | 44 | 44 | 34.918 | 10.208 | 0 |
| Windschlitzer | 20 | 20 | 31.932 | 8.120 | 0 |
| Eislanze | 23 | 23 | 31.616 | 10.626 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:04 | 0:18 | 13 s | Cooldowns/Voraussetzungen |
| 0:18 | 0:20 | 2 s | Cooldowns/Voraussetzungen |
| 0:20 | 0:24 | 4 s | Cooldowns/Voraussetzungen |
| 0:25 | 0:27 | 3 s | Cooldowns/Voraussetzungen |
| 0:28 | 0:29 | 1 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:38 | 5 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:45 | 7 s | Cooldowns/Voraussetzungen |
| 0:46 | 0:47 | 1 s | Cooldowns/Voraussetzungen |
| 0:47 | 0:52 | 5 s | Cooldowns/Voraussetzungen |
| 0:53 | 0:56 | 3 s | Cooldowns/Voraussetzungen |
| 0:59 | 1:03 | 4 s | Cooldowns/Voraussetzungen |
| 1:04 | 1:09 | 5 s | Cooldowns/Voraussetzungen |
| 1:11 | 1:13 | 2 s | Cooldowns/Voraussetzungen |
| 1:13 | 1:14 | 1 s | Cooldowns/Voraussetzungen |
| 1:15 | 1:16 | 2 s | Cooldowns/Voraussetzungen |
| 1:18 | 1:23 | 5 s | Cooldowns/Voraussetzungen |
| 1:24 | 1:26 | 2 s | Cooldowns/Voraussetzungen |
| 1:27 | 1:31 | 4 s | Cooldowns/Voraussetzungen |
| 1:34 | 1:41 | 6 s | Cooldowns/Voraussetzungen |
| 1:43 | 1:50 | 7 s | Cooldowns/Voraussetzungen |

## Jäger

Gesamt **881.719**, Laufzeit 10:00, Rest-Mana 4.581, Rest-HP 5.184. Effektive Angriffsheilung 0, Überheilung 1.716, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.118.281.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 653 | 653 | 499.023 | 0 | 0 |
| Salve | 9 | 9 | 97.438 | 1.926 | 0 |
| Feuerpfeil | 69 | 69 | 82.262 | 19.251 | 0 |
| Präzisionsschuss | 10 | 10 | 57.118 | 10.690 | 0 |
| Seelenbegleiter | 2 | 897 | 40.688 | 264 | 0 |
| Gebundener Schuss | 35 | 35 | 33.712 | 3.570 | 0 |
| Verstärkter Pfeil | 13 | 13 | 31.060 | 9.516 | 0 |
| Schockschuss | 12 | 12 | 16.754 | 5.592 | 0 |
| Entzugspfeil | 11 | 11 | 13.675 | 1.485 | 0 |
| Kettenschuss | 11 | 11 | 9.990 | 330 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:03 | 0:11 | 8 s | Cooldowns/Voraussetzungen |
| 0:11 | 0:19 | 9 s | Cooldowns/Voraussetzungen |
| 0:20 | 0:28 | 8 s | Cooldowns/Voraussetzungen |
| 0:28 | 0:37 | 9 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:46 | 8 s | Cooldowns/Voraussetzungen |
| 0:46 | 0:49 | 3 s | Cooldowns/Voraussetzungen |
| 0:50 | 0:53 | 3 s | Cooldowns/Voraussetzungen |
| 0:53 | 0:54 | 1 s | Cooldowns/Voraussetzungen |
| 0:55 | 0:59 | 4 s | Cooldowns/Voraussetzungen |
| 0:59 | 1:02 | 3 s | Cooldowns/Voraussetzungen |
| 1:03 | 1:07 | 4 s | Cooldowns/Voraussetzungen |
| 1:08 | 1:12 | 4 s | Cooldowns/Voraussetzungen |
| 1:13 | 1:21 | 8 s | Cooldowns/Voraussetzungen |
| 1:21 | 1:29 | 9 s | Cooldowns/Voraussetzungen |
| 1:30 | 1:38 | 8 s | Cooldowns/Voraussetzungen |
| 1:38 | 1:44 | 6 s | Cooldowns/Voraussetzungen |
| 1:44 | 1:47 | 3 s | Cooldowns/Voraussetzungen |
| 1:48 | 1:55 | 7 s | Cooldowns/Voraussetzungen |
| 1:56 | 2:03 | 7 s | Cooldowns/Voraussetzungen |
| 2:05 | 2:13 | 8 s | Cooldowns/Voraussetzungen |

## Ritter

Gesamt **543.842**, Laufzeit 10:00, Rest-Mana 5.983, Rest-HP 9.475. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.456.158.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 738 | 738 | 367.524 | 0 | 0 |
| Brecher des Geistes | 43 | 43 | 37.281 | 10.492 | 0 |
| Schildstoß | 19 | 19 | 29.032 | 12.483 | 0 |
| Mächtiger Hieb | 22 | 22 | 27.082 | 5.280 | 0 |
| Donnernde Lanze | 15 | 15 | 26.070 | 6.210 | 0 |
| Schildsturm | 16 | 16 | 25.088 | 9.456 | 0 |
| Brecher der Deckung | 23 | 23 | 20.309 | 6.624 | 0 |
| Erlösendes Feld | 8 | 8 | 11.456 | 3.112 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:02 | 0:16 | 14 s | Cooldowns/Voraussetzungen |
| 0:16 | 0:27 | 12 s | Cooldowns/Voraussetzungen |
| 0:30 | 0:32 | 2 s | Cooldowns/Voraussetzungen |
| 0:32 | 0:39 | 7 s | Cooldowns/Voraussetzungen |
| 0:39 | 0:41 | 2 s | Cooldowns/Voraussetzungen |
| 0:41 | 0:44 | 3 s | Cooldowns/Voraussetzungen |
| 0:44 | 0:53 | 10 s | Cooldowns/Voraussetzungen |
| 0:54 | 0:56 | 2 s | Cooldowns/Voraussetzungen |
| 0:56 | 0:58 | 1 s | Cooldowns/Voraussetzungen |
| 0:58 | 1:04 | 6 s | Cooldowns/Voraussetzungen |
| 1:04 | 1:12 | 8 s | Cooldowns/Voraussetzungen |
| 1:12 | 1:15 | 3 s | Cooldowns/Voraussetzungen |
| 1:16 | 1:18 | 2 s | Cooldowns/Voraussetzungen |
| 1:18 | 1:20 | 2 s | Cooldowns/Voraussetzungen |
| 1:20 | 1:22 | 2 s | Cooldowns/Voraussetzungen |
| 1:22 | 1:23 | 2 s | Cooldowns/Voraussetzungen |
| 1:24 | 1:26 | 2 s | Cooldowns/Voraussetzungen |
| 1:26 | 1:36 | 10 s | Cooldowns/Voraussetzungen |
| 1:36 | 1:40 | 4 s | Cooldowns/Voraussetzungen |
| 1:40 | 1:46 | 5 s | Cooldowns/Voraussetzungen |

Hinweis: Donnernde Lanze: keine feste Castzeit gespeichert; Ansturm-/Animationsdauer im vereinbarten Test ignoriert (0 s).

## Luminet

Gesamt **1.460.699**, Laufzeit 10:00, Rest-Mana 655, Rest-HP 4.141. Effektive Angriffsheilung 0, Überheilung 3.477, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.539.301.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 676 | 676 | 663.177 | 81.120 | 0 |
| Auto-Attack | 346 | 346 | 268.673 | 0 | 0 |
| Lichtblitz | 176 | 176 | 241.474 | 65.824 | 0 |
| Luminus | 65 | 65 | 56.864 | 4.875 | 0 |
| Heilige Vernichtung | 13 | 13 | 47.859 | 3.874 | 0 |
| Ätherregen | 5 | 20 | 34.765 | 4.875 | 0 |
| Urteil des Himmels | 14 | 28 | 32.385 | 5.670 | 0 |
| Heiliges Kreuz | 13 | 13 | 25.011 | 6.032 | 0 |
| Eislanze | 15 | 15 | 21.062 | 6.930 | 0 |
| Schwerter des Lichtes | 10 | 10 | 17.904 | 7.080 | 0 |
| Strafendes Licht | 8 | 8 | 16.226 | 5.248 | 0 |
| Astralkörper | 6 | 6 | 13.331 | 4.092 | 0 |
| Göttliche Nova | 4 | 4 | 8.769 | 2.848 | 0 |
| Aurora Wellen | 3 | 3 | 6.816 | 2.349 | 0 |
| Licht kristallenes Gefängnis | 5 | 5 | 6.384 | 1.045 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 2:11. Erstmals wirklich 0 Mana: 9:59, insgesamt 1 Ereignisse mit vollständig ausgegebenem Mana. 194 Phasen mit mindestens einem zu teuren bereiten Skill; darin 164 tatsächliche Mana-Wartepausen mit zusammen 82 Sekunden und maximal 1.60 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 9:59.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 2:11 | 2:12 | 0 s | Schwerter des Lichtes | 64 |
| 2:12 | 2:14 | 1 s | Energieschlag | 11 |
| 2:14 | 2:14 | 0 s | Urteil des Himmels | 172 |
| 2:14 | 2:16 | 1 s | Urteil des Himmels | 97 |
| 2:17 | 2:18 | 0 s | Lichtblitz | 107 |
| 2:19 | 2:19 | 0 s | Heilige Vernichtung | 148 |
| 2:19 | 2:20 | 0 s | Heilige Vernichtung | 28 |
| 2:21 | 2:21 | 0 s | Lichtblitz | 265 |
| 2:21 | 2:22 | 1 s | Lichtblitz | 145 |
| 2:23 | 2:24 | 0 s | Luminus | 66 |
| 2:25 | 2:26 | 0 s | Energieschlag | 32 |
| 2:29 | 2:30 | 1 s | Energieschlag | 24 |
| 2:31 | 2:32 | 0 s | Lichtblitz | 319 |
| 2:41 | 2:41 | 0 s | Göttliche Nova | 583 |
| 2:41 | 2:42 | 0 s | Göttliche Nova | 463 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 2:12 | 2:14 | 1 s | Mana |
| 2:14 | 2:16 | 1 s | Mana |
| 2:29 | 2:30 | 1 s | Mana |
| 2:52 | 2:54 | 1 s | Mana |
| 3:54 | 3:56 | 1 s | Mana |
| 4:06 | 4:08 | 1 s | Mana |
| 4:12 | 4:14 | 1 s | Mana |
| 4:14 | 4:16 | 2 s | Mana |
| 4:20 | 4:22 | 1 s | Mana |
| 5:26 | 5:28 | 2 s | Mana |
| 6:00 | 6:02 | 1 s | Mana |
| 6:28 | 6:30 | 1 s | Mana |
| 6:32 | 6:34 | 1 s | Mana |
| 7:48 | 7:50 | 1 s | Mana |
| 7:50 | 7:52 | 1 s | Mana |
| 8:04 | 8:06 | 2 s | Mana |
| 8:06 | 8:08 | 1 s | Mana |
| 8:34 | 8:36 | 1 s | Mana |
| 8:40 | 8:42 | 1 s | Mana |
| 9:00 | 9:02 | 1 s | Mana |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Ritualist

Gesamt **1.217.031**, Laufzeit 10:00, Rest-Mana 4.987, Rest-HP 4.057. Effektive Angriffsheilung 2.437, Überheilung 5.829, HP-Regeneration 43.874, Lebenspreise 45.955. Rest-Seelen 22, Rest-Wut 0. Gegner-Restleben 8.782.969.

Große Kombos: soulShackles: 7; soulHarvests: 4.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 528 | 528 | 419.107 | 0 | 0 |
| Morrak´s Meister | 2 | 807 | 214.344 | 0 | 0 |
| Feuerball | 144 | 144 | 204.742 | 38.304 | 0 |
| Dunkler Impuls | 115 | 115 | 121.116 | 12.420 | 0 |
| Seelenqual | 105 | 105 | 114.745 | 8.085 | 0 |
| Feuer der Verdammten | 12 | 84 | 51.490 | 5.628 | 0 |
| Schrei der Unterwelt | 8 | 8 | 22.366 | 0 | 0 |
| Meteoritenschauer | 3 | 18 | 20.689 | 1.407 | 0 |
| Lebenssauger | 14 | 14 | 18.296 | 4.956 | 1.809 |
| Sturm des Feuers | 6 | 6 | 9.273 | 2.250 | 0 |
| Seelenfessel | 7 | 7 | 8.137 | 1.351 | 0 |
| Seelenernte | 4 | 4 | 7.794 | 1.860 | 628 |
| Seelenplage | 3 | 3 | 4.934 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:06 | 0:10 | 4 s | Cooldowns/Voraussetzungen |
| 0:10 | 0:11 | 1 s | Cooldowns/Voraussetzungen |
| 0:11 | 0:14 | 3 s | Cooldowns/Voraussetzungen |
| 0:14 | 0:16 | 2 s | Cooldowns/Voraussetzungen |
| 0:16 | 0:18 | 2 s | Cooldowns/Voraussetzungen |
| 0:18 | 0:21 | 3 s | Cooldowns/Voraussetzungen |
| 0:22 | 0:26 | 4 s | Cooldowns/Voraussetzungen |
| 0:27 | 0:30 | 4 s | Cooldowns/Voraussetzungen |
| 0:32 | 0:35 | 3 s | Cooldowns/Voraussetzungen |
| 0:35 | 0:37 | 2 s | Cooldowns/Voraussetzungen |
| 0:37 | 0:39 | 2 s | Cooldowns/Voraussetzungen |
| 0:39 | 0:42 | 3 s | Cooldowns/Voraussetzungen |
| 0:43 | 0:45 | 2 s | Cooldowns/Voraussetzungen |
| 0:46 | 0:47 | 1 s | Cooldowns/Voraussetzungen |
| 0:47 | 0:51 | 4 s | Cooldowns/Voraussetzungen |
| 0:51 | 0:52 | 1 s | Cooldowns/Voraussetzungen |
| 0:53 | 0:55 | 2 s | Cooldowns/Voraussetzungen |
| 0:55 | 0:57 | 2 s | Cooldowns/Voraussetzungen |
| 0:57 | 0:59 | 2 s | Cooldowns/Voraussetzungen |
| 0:59 | 1:02 | 3 s | Cooldowns/Voraussetzungen |

## Schamane

Gesamt **1.043.050**, Laufzeit 10:00, Rest-Mana 5.108, Rest-HP 4.637. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.956.950.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 754 | 754 | 474.040 | 90.480 | 0 |
| Auto-Attack | 619 | 619 | 297.727 | 0 | 0 |
| Mächtiger Doppelschlag | 19 | 19 | 41.609 | 12.483 | 0 |
| Gezielter Blitz | 18 | 18 | 29.911 | 10.764 | 0 |
| Eisranken | 27 | 135 | 28.504 | 8.802 | 0 |
| Beben | 20 | 20 | 26.060 | 4.580 | 0 |
| Rotier Schlag | 22 | 22 | 23.650 | 2.904 | 0 |
| Infernal Zyklon | 5 | 30 | 22.041 | 2.680 | 0 |
| Erdbeben | 11 | 11 | 19.895 | 5.115 | 0 |
| Kristallisierte Wasserspähre | 23 | 23 | 18.485 | 3.795 | 0 |
| Himmelsbrecher | 5 | 10 | 17.412 | 5.940 | 0 |
| Feuerlanze | 16 | 16 | 16.555 | 7.552 | 0 |
| Windfesseln | 16 | 16 | 15.243 | 4.560 | 0 |
| Vakuumimpuls | 5 | 5 | 11.919 | 2.765 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Seelenjäger

Gesamt **961.662**, Laufzeit 10:00, Rest-Mana 3.565, Rest-HP 4.125. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.038.338.

Große Kombos: soulCollectionWindows: 8; spectralFinishers: 8.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 797 | 797 | 528.252 | 0 | 0 |
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
| 1:01 | 1:02 | 1 s | Cooldowns/Voraussetzungen |
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

Gesamt **774.511**, Laufzeit 10:00, Rest-Mana 3.828, Rest-HP 4.766. Effektive Angriffsheilung 0, Überheilung 740, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.225.489.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 856 | 856 | 435.362 | 0 | 0 |
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
| 1:41 | 1:51 | 10 s | Cooldowns/Voraussetzungen |
| 1:52 | 1:55 | 3 s | Cooldowns/Voraussetzungen |
| 1:56 | 2:01 | 5 s | Cooldowns/Voraussetzungen |

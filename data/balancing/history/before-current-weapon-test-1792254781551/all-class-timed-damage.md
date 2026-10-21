# Zehn-Minuten-Schadensvergleich

Berechnungsstand: 2026-10-17 T 16:23:38.968 Z; Eingabedateien und SHA-256-Prüfsummen sind im JSON gespeichert.

- Gladiator: Energie der Wut hält auf Maximalstufe 59 Sekunden bei 58 Sekunden Cooldown nach 0,1 Sekunden Cast. Der Test erneuert diesen notwendigen Wutaufbau-Buff bei Verfügbarkeit mit Priorität, auch bei bereits aktiver Wirkung und genügend Wut. Kein zusätzlicher Wutpunkt bei Aktivierung. Ausbruch der Wut hat 130 Sekunden Cooldown und 64 Sekunden Buffdauer.
- R 6-Test mit freigeschalteter besonderer Verwertung: Luminet erhält 1,8 M-Angriff je Faith, Ritualist 1,9 M-Angriff je Victim zusätzlich zur Intelligenz (je 1,6 M-Angriff pro Int bei beiden Klassen). Permanente Attribute, dynamischer Reaper-Bonus und Morraks 5 Victim sind enthalten. Beim Luminet wird Aufenthalt im eigenen Lichtschwertfeld angenommen (+17,5 Faith während der Feldlaufzeit). Diese Freischaltung wird für diesen R 6-Test vorausgesetzt.
- Zunächst Kontrolllauf mit 2.000.000 HP; da einzelne Klassen das Ziel vor 600 Sekunden töten, zusätzlicher einheitlicher 600-Sekunden-Vergleich mit 10.000.000 HP für alle Klassen. Der Todzeitpunkt des bestätigten 2-Millionen-Ziels wird separat ausgewiesen. 600 Sekunden je Klasse, Level 60/R 6 mit permanenten Passiven, frisches normales Monster, ohne Gegenangriffe, Rüstung, Verfehlen, Heilung oder Regeneration. Ritualist startet mit 100 Seelen, Gladiator mit 100 Wut, alle Cooldowns bereit.
- Auto-Attacks werden bei Zauberstabklassen (Heiler/Kräuterkundler/Luminet/Ritualist) als magisch mit dem aktuellen M-Angriff, bei den übrigen Waffenklassen als physisch mit aktuellem P-Angriff gerechnet. Dies ist die explizite Waffen-/Schadensart-Annahme dieses Tests.
- 100% Angriffstempo entspricht bei Heiler/Luminet/Ritualist 1,1, beim Kräuterkundler 1,2, bei Jäger/Seelenjäger 1,3, sonst 1,5 gemeinsamen Auto-Attack-Aktionen pro Sekunde. Waffenabzüge und permanente Angriffstempo-Boni werden als Faktor angewendet. Zwei Waffen sind eine Aktion mit dem bereits kombinierten Angriff. HP/MP-Regeneration alle 2 Sekunden. Zeitschritt 10 ms; keine zusätzliche globale Abklingzeit. Abweichungen von subframegenauen Abläufen sind möglich.
- Nach einem abgeschlossenen Skill 0,1 Sekunden Reaktionszeit bis zum nächsten Skill; Während dieser Reaktionszeit keine eigenen Aktionen. Nach Skillabschluss bis zum eigenen Auto-Attack einen vollständigen aktuellen Auto-Attack-Abstand warten, berechnet aus Grundfrequenz und tatsächlichem Angriffstempo. Nach einem eigenen Auto-Attack mindestens 0,5 Sekunden bis zum nächsten Skill. Feste Sammelsequenzen Seelenqual/Seelensammler behalten ihre Frequenz, Seelenschuss startet die Sequenz direkt. Nur Castzeit sperrt weitere eigene Aktionen. Animationen/Flugzeiten/Ansturmdauer ignoriert. Periodische Treffer und fest gespeicherte Mehrfachtrefferabstände bleiben zeitlich verteilt. Treffer nach 600 Sekunden entfallen. Cooldowns beginnen erst am Castende beim Auslösen des Angriffs; Flugzeit, Animation und laufende Felder verzögern diesen Beginn nicht. Treffer und Wirkungen folgen ihren definierten Zeitpunkten.
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
| Luminet | **1.208.927** | 2.015 | 1.187.865 | 21.062 | 0 | 120.893 | 2:11 | — | 124 | 54 s | 0.93 s | — |
| Ritualist | **1.096.405** | 1.827 | 574.772 | 307.295 | 214.339 | 109.641 | — | — | 0 | 0 s | 0.00 s | — |
| Seelenjäger | **907.314** | 1.512 | 426.741 | 480.572 | 0 | 90.731 | — | — | 0 | 0 s | 0.00 s | — |
| Heiler | **872.720** | 1.455 | 872.720 | 0 | 0 | 87.272 | — | — | 0 | 0 s | 0.00 s | — |
| Kräuterkundler | **844.059** | 1.407 | 513.320 | 330.739 | 0 | 84.406 | — | — | 0 | 0 s | 0.00 s | — |
| Jäger | **835.420** | 1.392 | 357.609 | 437.122 | 40.688 | 83.542 | — | — | 0 | 0 s | 0.00 s | — |
| Butcher | **813.407** | 1.356 | 278.688 | 534.719 | 0 | 81.341 | 0:03 | — | 4 | 1 s | 0.65 s | — |
| Gladiator | **781.352** | 1.302 | 249.356 | 531.995 | 0 | 78.135 | — | — | 0 | 0 s | 0.00 s | — |
| Schamane | **745.323** | 1.242 | 745.323 | 0 | 0 | 74.532 | — | — | 0 | 0 s | 0.00 s | — |
| Schurke | **741.632** | 1.236 | 337.803 | 403.828 | 0 | 74.163 | 0:03 | — | 0 | 0 s | 0.00 s | — |
| Druide | **636.397** | 1.061 | 623.845 | 443 | 12.110 | 63.640 | 0:05 | 0:04 | 2 | 1 s | 0.55 s | — |
| Abenteurer (Sword) | **614.698** | 1.024 | 198.352 | 416.346 | 0 | 61.470 | — | — | 0 | 0 s | 0.00 s | — |
| Abenteurer (Mace) | **588.994** | 982 | 194.370 | 394.624 | 0 | 58.899 | — | — | 0 | 0 s | 0.00 s | — |
| Ritter | **524.060** | 873 | 179.444 | 344.616 | 0 | 52.406 | — | — | 0 | 0 s | 0.00 s | — |

## Zahlen richtig lesen und Heiler-Ergebnis nachvollziehen

**Ein zu teurer bereiter Skill bedeutet weder null Mana noch null Leben.** Die Summe der Mana-Wartezeit besteht aus vielen kurzen Pausen; sie ist keine zusammenhängende Regeneration bis zum vollen Pool. Ressourcen werden fortlaufend genutzt. Die Cooldowns bleiben dauerhaft aktiv und werden zwischen Minuten nicht zurückgesetzt. Nur beim Start sind alle Skills gleichzeitig bereit.

Butcher: erster zu teurer Skill bei 3.70 Sekunden; zu diesem Zeitpunkt 323 Mana vorhanden. Längste tatsächliche Mana-Pause mit 0.65 Sekunden, 0 Ereignisse mit exakt null Mana. Der Lebenswert war nicht null.

Luminet: 124 kurze Mana-Pausen, zusammen 53.76 Sekunden; längste einzelne Pause 0.93 Sekunden. Währenddessen weiter Auto-Attacks, dazwischen weitere bezahlbare Skills. Tatsächlich null Mana 0-mal; erste Stelle —.

Heiler: Energieschlag hat 0,15 Sekunden Castzeit und 0,7 Sekunden Cooldown auf Maximalstufe. 776 Anwendungen ergeben 727.888 Schaden. Auto-Attacks ergeben weitere 0, die restlichen Skills 144.832. Energieschlag und Auto-Attacks tragen zusammen 83.4 Prozent bei. Potenzielle MP-Regeneration 727.00 alle zwei Sekunden (363.50/s) gegenüber durchschnittlich 198.07 Mana-Verbrauch/s erklärt den fehlenden Engpass.

Die hohe Rate entsteht im vereinfachten Modell ausdrücklich ohne Animationssperren, mit 0,1 Sekunden Reaktionspause zwischen regulären Skills. Zauberstab-Auto-Attacks gelten als magisch. Diese Voraussetzungen prüfen, bevor daraus pauschale Skill-Nerfs abgeleitet werden.


## Sensitivität: Mana für den stärksten bereiten Angriff zurückhalten

Der Hauptlauf verwendet die erste bezahlbare priorisierte Aktion. Der Zusatzlauf wartet bei fehlendem Mana für die höchste Priorität mit Auto-Attacks, statt billigere Skills zu wirken. Das ist eine andere Steuerung, keine geänderte Klasse.

| Klasse | Hauptlauf | Mit Manareserve | Unterschied |
| --- | ---: | ---: | ---: |
| Abenteurer (Mace) | 588.994 | 588.994 | 0 |
| Abenteurer (Sword) | 614.698 | 614.698 | 0 |
| Butcher | 813.407 | 811.786 | -1.620 |
| Druide | 636.397 | 636.397 | 0 |
| Gladiator | 781.352 | 781.352 | 0 |
| Heiler | 872.720 | 872.720 | 0 |
| Kräuterkundler | 844.059 | 844.059 | 0 |
| Jäger | 835.420 | 835.420 | 0 |
| Ritter | 524.060 | 524.060 | 0 |
| Luminet | 1.208.927 | 1.202.878 | -6.049 |
| Ritualist | 1.096.405 | 1.096.405 | 0 |
| Schamane | 745.323 | 745.323 | 0 |
| Seelenjäger | 907.314 | 907.314 | 0 |
| Schurke | 741.632 | 741.632 | 0 |

Ein Mana-Hindernis bedeutet: mindestens ein bereiter priorisierter Skill ist nicht bezahlbar. Das ist nicht zwangsläufig ein leerer Pool oder Stillstand; günstigere Skills und Auto-Attacks bleiben erlaubt. Mana-Wartezeit ist die Summe vieler einzelner Zeitstücke ohne bezahlbare gewählte Skillaktion; Auto-Attacks gehen weiter. Sie ist keine Zeit bis zum vollen Mana-Pool und keine HP-Ausfallzeit. Die Zahl der Mana-Wartephasen zählt diese tatsächlich getrennten Pausen. Andere Wartezeiten wie Tarnrückkehr sind getrennt erfasst.

## Schaden pro Minute

| Klasse | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Ø |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer (Mace) | 66.012 | 59.254 | 56.550 | 59.254 | 58.156 | 55.504 | 58.613 | 59.712 | 57.144 | 58.796 | 58.899 |
| Abenteurer (Sword) | 68.734 | 61.799 | 59.120 | 61.799 | 60.726 | 57.999 | 61.209 | 62.282 | 59.714 | 61.316 | 61.470 |
| Butcher | 91.214 | 77.203 | 79.208 | 81.200 | 80.829 | 78.275 | 85.565 | 76.212 | 79.506 | 84.195 | 81.341 |
| Druide | 68.159 | 60.066 | 65.455 | 61.715 | 66.500 | 59.021 | 66.922 | 61.729 | 63.888 | 62.942 | 63.640 |
| Gladiator | 89.368 | 71.966 | 79.766 | 73.818 | 80.363 | 74.132 | 79.930 | 75.230 | 77.352 | 79.426 | 78.135 |
| Heiler | 91.621 | 84.643 | 86.389 | 88.937 | 85.093 | 87.901 | 87.228 | 86.988 | 87.801 | 86.117 | 87.272 |
| Kräuterkundler | 94.025 | 84.237 | 85.814 | 78.505 | 82.737 | 86.204 | 83.647 | 88.857 | 70.498 | 89.536 | 84.406 |
| Jäger | 92.390 | 81.688 | 81.551 | 82.116 | 84.709 | 82.315 | 80.833 | 82.315 | 82.977 | 84.526 | 83.542 |
| Ritter | 56.435 | 52.944 | 50.715 | 53.442 | 51.087 | 52.508 | 50.452 | 53.316 | 50.217 | 52.944 | 52.406 |
| Luminet | 133.308 | 122.289 | 123.319 | 120.400 | 116.504 | 116.109 | 124.145 | 117.246 | 119.403 | 116.204 | 120.893 |
| Ritualist | 132.932 | 120.165 | 101.025 | 116.387 | 110.591 | 73.585 | 120.664 | 111.213 | 95.913 | 113.931 | 109.641 |
| Schamane | 81.170 | 70.795 | 77.851 | 70.392 | 75.098 | 70.053 | 75.538 | 75.061 | 71.534 | 77.830 | 74.532 |
| Seelenjäger | 95.651 | 95.813 | 93.141 | 95.004 | 77.079 | 94.357 | 92.986 | 93.141 | 93.710 | 76.432 | 90.731 |
| Schurke | 83.955 | 75.211 | 72.963 | 73.406 | 72.867 | 75.357 | 73.392 | 76.926 | 63.182 | 74.373 | 74.163 |

## Abenteurer (Mace)

Gesamt **588.994**, Laufzeit 10:00, Rest-Mana 5.951, Rest-HP 6.692. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.411.006.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 862 | 862 | 394.624 | 0 | 0 |
| Wirbelnde Klinge | 11 | 11 | 57.739 | 4.151 | 0 |
| Mächtiger Doppelschlag | 19 | 19 | 40.728 | 12.109 | 0 |
| Sprungschlag | 17 | 17 | 35.085 | 16.523 | 0 |
| Beben | 20 | 20 | 25.596 | 4.443 | 0 |
| Rotier Schlag | 22 | 22 | 23.140 | 2.817 | 0 |
| Überschallklinge | 6 | 6 | 12.083 | 3.067 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Abenteurer (Sword)

Gesamt **614.698**, Laufzeit 10:00, Rest-Mana 5.951, Rest-HP 6.692. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.385.302.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 862 | 862 | 416.346 | 0 | 0 |
| Wirbelnde Klinge | 11 | 11 | 59.125 | 4.151 | 0 |
| Mächtiger Doppelschlag | 19 | 19 | 41.686 | 12.109 | 0 |
| Sprungschlag | 17 | 17 | 35.513 | 16.523 | 0 |
| Beben | 20 | 20 | 26.100 | 4.443 | 0 |
| Rotier Schlag | 22 | 22 | 23.694 | 2.817 | 0 |
| Überschallklinge | 6 | 6 | 12.234 | 3.067 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Butcher

Gesamt **813.407**, Laufzeit 10:00, Rest-Mana 4.291, Rest-HP 5.891. Effektive Angriffsheilung 42, Überheilung 336, HP-Regeneration 4.906, Lebenspreise 4.948. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.186.593.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 660 | 660 | 534.719 | 0 | 0 |
| Aufgeladener Schlag | 24 | 24 | 39.964 | 14.328 | 0 |
| Mächtiger Hieb | 22 | 22 | 33.950 | 5.280 | 0 |
| Schädelspalter | 10 | 10 | 33.662 | 9.930 | 0 |
| Schmetterschlag | 15 | 15 | 32.673 | 6.615 | 0 |
| Rotier Schlag | 22 | 22 | 30.892 | 2.904 | 0 |
| Erdbeben | 11 | 11 | 20.033 | 5.115 | 0 |
| Erdbrecher | 10 | 10 | 18.232 | 5.660 | 0 |
| Abräumer | 13 | 13 | 17.591 | 3.276 | 0 |
| Schockwelle der Regeneration | 9 | 9 | 15.752 | 9.099 | 42 |
| Zorn des Henkers | 4 | 4 | 14.521 | 2.836 | 0 |
| Energieentladung | 4 | 4 | 11.213 | 0 | 0 |
| Dämonische Schockwelle | 5 | 5 | 10.206 | 1.100 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:03. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 7 Phasen mit mindestens einem zu teuren bereiten Skill; darin 4 tatsächliche Mana-Wartepausen mit zusammen 1 Sekunden und maximal 0.65 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:03 | 0:04 | 1 s | Aufgeladener Schlag | 323 |
| 0:04 | 0:04 | 0 s | Aufgeladener Schlag | 520 |
| 0:04 | 0:05 | 1 s | Aufgeladener Schlag | 388 |
| 0:05 | 0:05 | 1 s | Aufgeladener Schlag | 136 |
| 0:06 | 0:06 | 0 s | Aufgeladener Schlag | 573 |
| 0:07 | 0:07 | 0 s | Aufgeladener Schlag | 573 |
| 0:07 | 0:08 | 0 s | Aufgeladener Schlag | 573 |

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Druide

Gesamt **636.397**, Laufzeit 10:00, Rest-Mana 6.536, Rest-HP 4.278. Effektive Angriffsheilung 0, Überheilung 2.743, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.363.603.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 752 | 751 | 465.421 | 90.240 | 0 |
| Sprungschlag | 17 | 17 | 34.826 | 17.034 | 0 |
| Ätherregen | 5 | 20 | 27.435 | 4.875 | 0 |
| Beben | 20 | 20 | 25.292 | 4.580 | 0 |
| Erdbeben | 11 | 11 | 19.375 | 5.115 | 0 |
| Windschlitzer | 14 | 14 | 17.706 | 5.684 | 0 |
| Eislanze | 15 | 15 | 15.641 | 6.930 | 0 |
| Verbrennen | 27 | 131 | 12.576 | 3.240 | 0 |
| Seelenbegleiter | 2 | 897 | 12.110 | 264 | 0 |
| Manaexplosion | 2 | 2 | 4.435 | 9.466 | 0 |
| Bannmagie | 2 | 2 | 1.137 | 232 | 0 |
| Auto-Attack | 1 | 1 | 443 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:05. Erstmals wirklich 0 Mana: 0:04, insgesamt 2 Ereignisse mit vollständig ausgegebenem Mana. 2 Phasen mit mindestens einem zu teuren bereiten Skill; darin 2 tatsächliche Mana-Wartepausen mit zusammen 1 Sekunden und maximal 0.55 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 0:04, 6:06.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:05 | 0:06 | 1 s | Energieschlag | 0 |
| 6:07 | 6:07 | 1 s | Energieschlag | 0 |

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
| Sprungschlag | 17 | 17 | 40.531 | 17.034 | 0 |
| Mächtiger Hieb | 22 | 22 | 33.255 | 5.280 | 0 |
| Schmetterschlag | 15 | 15 | 32.137 | 6.615 | 0 |
| Wutexplosion | 10 | 10 | 27.025 | 0 | 0 |
| Holzspalter | 17 | 17 | 26.602 | 6.715 | 0 |
| Kriegerischer Ansturm | 11 | 11 | 23.932 | 3.355 | 0 |
| Wutklinge | 10 | 10 | 21.665 | 0 | 0 |
| Sturm der Wut | 10 | 10 | 20.385 | 0 | 0 |
| Wirbelsturm | 8 | 8 | 13.515 | 3.112 | 0 |
| Ausbruch der Wut | 5 | 5 | 10.311 | 0 | 0 |
| Energie der Wut | 11 | 0 | 0 | 5.005 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Heiler

Gesamt **872.720**, Laufzeit 10:00, Rest-Mana 6.852, Rest-HP 3.898. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.127.280.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 776 | 776 | 727.888 | 93.120 | 0 |
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

Gesamt **844.059**, Laufzeit 10:00, Rest-Mana 6.543, Rest-HP 5.096. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.155.941.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 443 | 443 | 330.739 | 0 | 0 |
| Elektrisches Feld | 26 | 130 | 116.834 | 5.512 | 0 |
| Tobender Sturm | 8 | 72 | 94.519 | 4.224 | 0 |
| Gezielter Blitz | 33 | 33 | 66.563 | 19.734 | 0 |
| Kugelblitz | 21 | 21 | 51.841 | 18.438 | 0 |
| Geladener Nebel | 27 | 27 | 48.751 | 18.441 | 0 |
| Ewiges Eis | 25 | 25 | 37.140 | 12.875 | 0 |
| Wasserfesseln | 43 | 43 | 34.124 | 9.976 | 0 |
| Windschlitzer | 20 | 20 | 31.932 | 8.120 | 0 |
| Eislanze | 23 | 23 | 31.616 | 10.626 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Jäger

Gesamt **835.420**, Laufzeit 10:00, Rest-Mana 4.581, Rest-HP 5.184. Effektive Angriffsheilung 0, Überheilung 1.872, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.164.580.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 572 | 572 | 437.122 | 0 | 0 |
| Salve | 10 | 10 | 108.264 | 2.140 | 0 |
| Feuerpfeil | 66 | 66 | 78.685 | 18.414 | 0 |
| Präzisionsschuss | 11 | 11 | 62.829 | 11.759 | 0 |
| Seelenbegleiter | 2 | 897 | 40.688 | 264 | 0 |
| Gebundener Schuss | 35 | 35 | 33.712 | 3.570 | 0 |
| Verstärkter Pfeil | 13 | 13 | 31.060 | 9.516 | 0 |
| Schockschuss | 13 | 13 | 18.151 | 6.058 | 0 |
| Entzugspfeil | 12 | 12 | 14.918 | 1.620 | 0 |
| Kettenschuss | 11 | 11 | 9.990 | 330 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Ritter

Gesamt **524.060**, Laufzeit 10:00, Rest-Mana 5.983, Rest-HP 9.475. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.475.940.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 692 | 692 | 344.616 | 0 | 0 |
| Donnernde Lanze | 16 | 16 | 32.608 | 6.624 | 0 |
| Schildstoß | 20 | 20 | 30.560 | 13.140 | 0 |
| Brecher des Geistes | 33 | 33 | 28.710 | 8.052 | 0 |
| Mächtiger Hieb | 22 | 22 | 27.082 | 5.280 | 0 |
| Schildsturm | 16 | 16 | 25.296 | 9.456 | 0 |
| Brecher der Deckung | 25 | 25 | 22.300 | 7.200 | 0 |
| Erlösendes Feld | 9 | 9 | 12.888 | 3.501 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Donnernde Lanze: keine feste Castzeit gespeichert; Ansturm-/Animationsdauer im vereinbarten Test ignoriert (0 s).

## Luminet

Gesamt **1.208.927**, Laufzeit 10:00, Rest-Mana 881, Rest-HP 4.141. Effektive Angriffsheilung 0, Überheilung 3.473, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.791.073.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 671 | 670 | 657.600 | 80.520 | 0 |
| Lichtblitz | 177 | 177 | 242.924 | 66.198 | 0 |
| Luminus | 65 | 65 | 56.896 | 4.875 | 0 |
| Heilige Vernichtung | 13 | 13 | 47.764 | 3.874 | 0 |
| Ätherregen | 5 | 20 | 34.734 | 4.875 | 0 |
| Urteil des Himmels | 14 | 28 | 32.447 | 5.670 | 0 |
| Heiliges Kreuz | 13 | 13 | 25.042 | 6.032 | 0 |
| Auto-Attack | 27 | 27 | 21.062 | 0 | 0 |
| Eislanze | 15 | 15 | 21.062 | 6.930 | 0 |
| Schwerter des Lichtes | 10 | 10 | 17.904 | 7.080 | 0 |
| Strafendes Licht | 8 | 8 | 16.226 | 5.248 | 0 |
| Astralkörper | 6 | 6 | 13.331 | 4.092 | 0 |
| Göttliche Nova | 4 | 4 | 8.737 | 2.848 | 0 |
| Aurora Wellen | 3 | 3 | 6.816 | 2.349 | 0 |
| Licht kristallenes Gefängnis | 5 | 5 | 6.384 | 1.045 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 2:11. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 152 Phasen mit mindestens einem zu teuren bereiten Skill; darin 124 tatsächliche Mana-Wartepausen mit zusammen 54 Sekunden und maximal 0.93 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 2:11 | 2:12 | 0 s | Schwerter des Lichtes | 64 |
| 2:12 | 2:13 | 1 s | Energieschlag | 11 |
| 2:15 | 2:15 | 0 s | Lichtblitz | 141 |
| 2:15 | 2:16 | 1 s | Lichtblitz | 66 |
| 2:17 | 2:18 | 0 s | Energieschlag | 107 |
| 2:19 | 2:19 | 0 s | Heilige Vernichtung | 148 |
| 2:19 | 2:20 | 0 s | Heilige Vernichtung | 28 |
| 2:25 | 2:26 | 1 s | Energieschlag | 32 |
| 2:29 | 2:29 | 1 s | Energieschlag | 24 |
| 2:31 | 2:32 | 0 s | Energieschlag | 65 |
| 2:41 | 2:42 | 1 s | Göttliche Nova | 583 |
| 2:50 | 2:50 | 0 s | Lichtblitz | 347 |
| 2:50 | 2:51 | 1 s | Lichtblitz | 227 |
| 2:51 | 2:51 | 0 s | Eislanze | 107 |
| 2:51 | 2:52 | 0 s | Eislanze | 32 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Ritualist

Gesamt **1.096.405**, Laufzeit 10:00, Rest-Mana 4.987, Rest-HP 4.057. Effektive Angriffsheilung 2.499, Überheilung 5.767, HP-Regeneration 43.662, Lebenspreise 45.805. Rest-Seelen 22, Rest-Wut 0. Gegner-Restleben 8.903.595.

Große Kombos: soulShackles: 7; soulHarvests: 4.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 387 | 387 | 307.295 | 0 | 0 |
| Morrak´s Meister | 2 | 807 | 214.339 | 0 | 0 |
| Feuerball | 140 | 140 | 199.090 | 37.240 | 0 |
| Dunkler Impuls | 112 | 112 | 117.960 | 12.096 | 0 |
| Seelenqual | 105 | 105 | 114.745 | 8.085 | 0 |
| Feuer der Verdammten | 12 | 84 | 51.489 | 5.628 | 0 |
| Schrei der Unterwelt | 8 | 8 | 22.366 | 0 | 0 |
| Meteoritenschauer | 3 | 18 | 20.689 | 1.407 | 0 |
| Lebenssauger | 14 | 14 | 18.296 | 4.956 | 1.788 |
| Sturm des Feuers | 6 | 6 | 9.273 | 2.250 | 0 |
| Seelenfessel | 7 | 7 | 8.137 | 1.351 | 0 |
| Seelenernte | 4 | 4 | 7.794 | 1.860 | 711 |
| Seelenplage | 3 | 3 | 4.934 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Schamane

Gesamt **745.323**, Laufzeit 10:00, Rest-Mana 5.108, Rest-HP 4.637. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.254.677.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 754 | 754 | 474.040 | 90.480 | 0 |
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

Gesamt **907.314**, Laufzeit 10:00, Rest-Mana 3.565, Rest-HP 4.125. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.092.686.

Große Kombos: soulCollectionWindows: 8; spectralFinishers: 8.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 743 | 743 | 480.572 | 0 | 0 |
| Seelensammler | 200 | 200 | 153.560 | 0 | 0 |
| Explosionspfeil | 20 | 60 | 81.528 | 7.620 | 0 |
| Feuerpfeil | 64 | 64 | 68.787 | 17.856 | 0 |
| Doppelschuss | 24 | 24 | 58.694 | 7.656 | 0 |
| Kopfschuss | 11 | 11 | 36.626 | 8.624 | 0 |
| Spektralketten | 8 | 8 | 14.582 | 0 | 0 |
| Kettenschuss | 11 | 11 | 8.699 | 330 | 0 |
| Hinterhältiger Pfeil | 6 | 6 | 4.265 | 558 | 0 |
| Seelenschuss | 8 | 0 | 0 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Schurke

Gesamt **741.632**, Laufzeit 10:00, Rest-Mana 3.535, Rest-HP 4.766. Effektive Angriffsheilung 0, Überheilung 740, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.258.368.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 794 | 794 | 403.828 | 0 | 0 |
| Tödlicher Tanz | 9 | 9 | 70.531 | 2.829 | 0 |
| Wirbelnde Klinge | 11 | 11 | 60.533 | 4.151 | 0 |
| Brecher des Lichts | 14 | 14 | 42.164 | 7.917 | 0 |
| Klingentornado | 10 | 10 | 39.624 | 2.600 | 0 |
| Dunkler Schlag | 42 | 42 | 33.079 | 2.811 | 0 |
| Kunai Todesstoß | 37 | 37 | 20.668 | 0 | 0 |
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
| — | — | — | Keine Phase ab 1 Sekunde |

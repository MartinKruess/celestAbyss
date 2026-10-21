# Zehn-Minuten-Schadensvergleich

Berechnungsstand: 2026-10-17 T 11:22:04.978 Z; Eingabedateien und SHA-256-Prüfsummen sind im JSON gespeichert.

- Zunächst Kontrolllauf mit 2.000.000 HP; da einzelne Klassen das Ziel vor 600 Sekunden töten, zusätzlicher einheitlicher 600-Sekunden-Vergleich mit 10.000.000 HP für alle Klassen. Der Todzeitpunkt des bestätigten 2-Millionen-Ziels wird separat ausgewiesen. 600 Sekunden je Klasse, Level 60/R 6 mit permanenten Passiven, frisches normales Monster, ohne Gegenangriffe, Rüstung, Verfehlen, Heilung oder Regeneration. Ritualist startet mit 100 Seelen, Gladiator mit 100 Wut, alle Cooldowns bereit.
- Auto-Attacks werden bei Zauberstabklassen (Heiler/Kräuterkundler/Luminet/Ritualist) als magisch mit dem aktuellen M-Angriff, bei den übrigen Waffenklassen als physisch mit aktuellem P-Angriff gerechnet. Dies ist die explizite Waffen-/Schadensart-Annahme dieses Tests.
- 100% Angriffstempo entspricht 1,5 gemeinsamen Auto-Attack-Aktionen pro Sekunde. Zwei Waffen sind eine Aktion mit dem bereits kombinierten Angriff. HP/MP-Regeneration alle 2 Sekunden. Zeitschritt 10 ms; keine zusätzliche globale Abklingzeit. Abweichungen von subframegenauen Abläufen sind möglich.
- Nur Castzeit sperrt weitere eigene Aktionen. Animationen/Flugzeiten/Ansturmdauer ignoriert. Periodische Treffer und fest gespeicherte Mehrfachtrefferabstände bleiben zeitlich verteilt. Treffer nach 600 Sekunden entfallen. Cooldowns beginnen bei Aktivierungsbeginn, Treffer und Wirkungen am Castende.
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
| Heiler | **2.155.823** | 3.593 | 1.451.791 | 704.032 | 0 | 215.582 | — | — | 0 | 0 s | 0.00 s | 9:16 |
| Luminet | **2.060.163** | 3.434 | 1.321.996 | 738.166 | 0 | 206.016 | 0:07 | 2:10 | 608 | 478 s | 1.88 s | 9:39 |
| Ritualist | **1.725.058** | 2.875 | 696.809 | 770.657 | 257.592 | 172.506 | — | — | 0 | 0 s | 0.00 s | — |
| Schamane | **1.407.976** | 2.347 | 903.651 | 504.325 | 0 | 140.798 | 1:08 | 7:52 | 610 | 350 s | 1.99 s | — |
| Druide | **1.365.437** | 2.276 | 886.959 | 468.790 | 9.688 | 136.544 | 1:59 | 0:03 | 99 | 60 s | 1.99 s | — |
| Kräuterkundler | **1.265.232** | 2.109 | 586.359 | 678.873 | 0 | 126.523 | — | — | 0 | 0 s | 0.00 s | — |
| Seelenjäger | **1.130.862** | 1.885 | 447.498 | 683.365 | 0 | 113.086 | — | — | 0 | 0 s | 0.00 s | — |
| Jäger | **1.069.539** | 1.783 | 359.652 | 666.778 | 43.110 | 106.954 | — | — | 0 | 0 s | 0.00 s | — |
| Butcher | **1.010.094** | 1.683 | 281.488 | 728.606 | 0 | 101.009 | 0:01 | — | 1 | 5 s | 4.88 s | — |
| Schurke | **1.006.968** | 1.678 | 394.393 | 612.575 | 0 | 100.697 | 0:02 | — | 1 | 1 s | 1.07 s | — |
| Gladiator | **945.154** | 1.575 | 215.767 | 729.387 | 0 | 94.515 | — | — | 0 | 0 s | 0.00 s | — |
| Abenteurer (Sword) | **718.688** | 1.198 | 204.898 | 513.790 | 0 | 71.869 | — | — | 0 | 0 s | 0.00 s | — |
| Abenteurer (Mace) | **707.485** | 1.179 | 204.144 | 503.341 | 0 | 70.749 | — | — | 0 | 0 s | 0.00 s | — |
| Ritter | **638.373** | 1.064 | 186.572 | 451.801 | 0 | 63.837 | — | — | 0 | 0 s | 0.00 s | — |

## Zahlen richtig lesen und Heiler-Ergebnis nachvollziehen

**Ein zu teurer bereiter Skill bedeutet weder null Mana noch null Leben.** Die Summe der Mana-Wartezeit besteht aus vielen kurzen Pausen; sie ist keine zusammenhängende Regeneration bis zum vollen Pool. Ressourcen werden fortlaufend genutzt. Die Cooldowns bleiben dauerhaft aktiv und werden zwischen Minuten nicht zurückgesetzt. Nur beim Start sind alle Skills gleichzeitig bereit.

Butcher: erster zu teurer Skill bei 1.90 Sekunden; zu diesem Zeitpunkt 897 Mana vorhanden. Eine tatsächliche Mana-Pause mit 4.88 Sekunden, nie exakt null Mana. Im sekündlichen Verlauf erstmals bei 0:26 wieder voller Pool. Der Lebenswert war nicht null.

Luminet: 608 kurze Mana-Pausen, zusammen 477.81 Sekunden; längste einzelne Pause 1.88 Sekunden. Währenddessen weiter Auto-Attacks, dazwischen weitere bezahlbare Skills. Tatsächlich null Mana 3-mal; erste Stelle 2:10.

Heiler: Energieschlag hat 0 Sekunden Castzeit und 0,5 Sekunden Cooldown auf Maximalstufe. 1162 Anwendungen ergeben 1.281.686 Schaden. Auto-Attacks ergeben weitere 704.032, die restlichen Skills 170.105. Energieschlag und Auto-Attacks tragen zusammen 92.1 Prozent bei. Potenzielle MP-Regeneration 768,1 alle zwei Sekunden (384,05/s) gegenüber durchschnittlich 277.49 Mana-Verbrauch/s erklärt den fehlenden Engpass.

Die hohe Rate entsteht im vereinfachten Modell ausdrücklich ohne Animationssperren oder globale Aktionspause. Zauberstab-Auto-Attacks gelten als magisch. Diese Voraussetzungen prüfen, bevor daraus pauschale Skill-Nerfs abgeleitet werden.


## Sensitivität: Mana für den stärksten bereiten Angriff zurückhalten

Der Hauptlauf verwendet die erste bezahlbare priorisierte Aktion. Der Zusatzlauf wartet bei fehlendem Mana für die höchste Priorität mit Auto-Attacks, statt billigere Skills zu wirken. Das ist eine andere Steuerung, keine geänderte Klasse.

| Klasse | Hauptlauf | Mit Manareserve | Unterschied |
| --- | ---: | ---: | ---: |
| Abenteurer (Mace) | 707.485 | 707.485 | 0 |
| Abenteurer (Sword) | 718.688 | 718.688 | 0 |
| Butcher | 1.010.094 | 1.009.361 | -733 |
| Druide | 1.365.437 | 1.360.477 | -4.959 |
| Gladiator | 945.154 | 945.154 | 0 |
| Heiler | 2.155.823 | 2.155.823 | 0 |
| Kräuterkundler | 1.265.232 | 1.265.232 | 0 |
| Jäger | 1.069.539 | 1.069.539 | 0 |
| Ritter | 638.373 | 638.373 | 0 |
| Luminet | 2.060.163 | 2.052.039 | -8.123 |
| Ritualist | 1.725.058 | 1.725.058 | 0 |
| Schamane | 1.407.976 | 1.400.101 | -7.875 |
| Seelenjäger | 1.130.862 | 1.130.862 | 0 |
| Schurke | 1.006.968 | 1.006.968 | 0 |

Ein Mana-Hindernis bedeutet: mindestens ein bereiter priorisierter Skill ist nicht bezahlbar. Das ist nicht zwangsläufig ein leerer Pool oder Stillstand; günstigere Skills und Auto-Attacks bleiben erlaubt. Mana-Wartezeit ist die Summe vieler einzelner Zeitstücke ohne bezahlbare gewählte Skillaktion; Auto-Attacks gehen weiter. Sie ist keine Zeit bis zum vollen Mana-Pool und keine HP-Ausfallzeit. Die Zahl der Mana-Wartephasen zählt diese tatsächlich getrennten Pausen. Andere Wartezeiten wie Tarnrückkehr sind getrennt erfasst.

## Schaden pro Minute

| Klasse | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Ø |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer (Mace) | 78.421 | 71.668 | 67.973 | 71.668 | 67.973 | 69.374 | 70.112 | 70.656 | 70.112 | 69.529 | 70.749 |
| Abenteurer (Sword) | 79.516 | 72.734 | 69.034 | 72.734 | 69.034 | 70.968 | 71.178 | 71.722 | 71.178 | 70.590 | 71.869 |
| Butcher | 112.860 | 97.077 | 101.154 | 100.540 | 97.810 | 101.458 | 99.613 | 103.628 | 96.150 | 99.803 | 101.009 |
| Druide | 141.070 | 138.747 | 133.155 | 136.712 | 133.331 | 137.981 | 134.075 | 136.737 | 136.528 | 137.099 | 136.544 |
| Gladiator | 105.951 | 87.333 | 92.941 | 98.453 | 89.813 | 98.943 | 91.554 | 86.769 | 95.408 | 97.990 | 94.515 |
| Heiler | 219.105 | 211.396 | 220.521 | 212.704 | 213.149 | 218.974 | 213.149 | 219.782 | 214.341 | 212.704 | 215.582 |
| Kräuterkundler | 134.812 | 125.798 | 127.647 | 127.215 | 116.825 | 130.362 | 130.027 | 130.621 | 118.968 | 122.958 | 126.523 |
| Jäger | 111.967 | 106.464 | 107.487 | 106.464 | 110.760 | 107.691 | 106.367 | 107.487 | 108.913 | 95.940 | 106.954 |
| Ritter | 67.007 | 63.174 | 63.344 | 65.034 | 63.143 | 62.621 | 63.729 | 63.066 | 63.344 | 63.911 | 63.837 |
| Luminet | 233.517 | 201.830 | 208.581 | 206.632 | 200.625 | 201.922 | 203.149 | 204.735 | 200.332 | 198.840 | 206.016 |
| Ritualist | 197.085 | 184.462 | 160.534 | 180.170 | 176.732 | 130.640 | 186.838 | 173.939 | 159.093 | 175.567 | 172.506 |
| Schamane | 160.737 | 138.794 | 137.224 | 141.371 | 137.300 | 139.143 | 139.922 | 137.720 | 137.886 | 137.879 | 140.798 |
| Seelenjäger | 118.166 | 118.756 | 114.432 | 118.166 | 97.692 | 118.863 | 114.496 | 113.736 | 118.863 | 97.692 | 113.086 |
| Schurke | 111.073 | 100.990 | 101.884 | 100.267 | 101.061 | 101.434 | 98.004 | 104.694 | 86.570 | 100.990 | 100.697 |

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
| 0:31 | 0:33 | 2 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:38 | 5 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:57 | 19 s | Cooldowns/Voraussetzungen |
| 0:57 | 1:01 | 4 s | Cooldowns/Voraussetzungen |
| 1:01 | 1:06 | 5 s | Cooldowns/Voraussetzungen |
| 1:06 | 1:16 | 10 s | Cooldowns/Voraussetzungen |
| 1:16 | 1:25 | 9 s | Cooldowns/Voraussetzungen |
| 1:25 | 1:31 | 6 s | Cooldowns/Voraussetzungen |
| 1:31 | 1:39 | 8 s | Cooldowns/Voraussetzungen |
| 1:39 | 1:48 | 9 s | Cooldowns/Voraussetzungen |
| 1:49 | 1:53 | 4 s | Cooldowns/Voraussetzungen |
| 1:54 | 2:01 | 7 s | Cooldowns/Voraussetzungen |
| 2:01 | 2:12 | 11 s | Cooldowns/Voraussetzungen |
| 2:12 | 2:21 | 9 s | Cooldowns/Voraussetzungen |
| 2:21 | 2:31 | 10 s | Cooldowns/Voraussetzungen |
| 2:32 | 2:45 | 13 s | Cooldowns/Voraussetzungen |
| 2:45 | 2:49 | 4 s | Cooldowns/Voraussetzungen |
| 2:49 | 2:51 | 2 s | Cooldowns/Voraussetzungen |

## Abenteurer (Sword)

Gesamt **718.688**, Laufzeit 10:00, Rest-Mana 5.951, Rest-HP 6.692. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.281.312.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 955 | 955 | 513.790 | 0 | 0 |
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
| 0:31 | 0:33 | 2 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:38 | 5 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:57 | 19 s | Cooldowns/Voraussetzungen |
| 0:57 | 1:01 | 4 s | Cooldowns/Voraussetzungen |
| 1:01 | 1:06 | 5 s | Cooldowns/Voraussetzungen |
| 1:06 | 1:16 | 10 s | Cooldowns/Voraussetzungen |
| 1:16 | 1:25 | 9 s | Cooldowns/Voraussetzungen |
| 1:25 | 1:31 | 6 s | Cooldowns/Voraussetzungen |
| 1:31 | 1:39 | 8 s | Cooldowns/Voraussetzungen |
| 1:39 | 1:48 | 9 s | Cooldowns/Voraussetzungen |
| 1:49 | 1:53 | 4 s | Cooldowns/Voraussetzungen |
| 1:54 | 2:01 | 7 s | Cooldowns/Voraussetzungen |
| 2:01 | 2:12 | 11 s | Cooldowns/Voraussetzungen |
| 2:12 | 2:21 | 9 s | Cooldowns/Voraussetzungen |
| 2:21 | 2:31 | 10 s | Cooldowns/Voraussetzungen |
| 2:32 | 2:45 | 13 s | Cooldowns/Voraussetzungen |
| 2:45 | 2:49 | 4 s | Cooldowns/Voraussetzungen |
| 2:49 | 2:51 | 2 s | Cooldowns/Voraussetzungen |

## Butcher

Gesamt **1.010.094**, Laufzeit 10:00, Rest-Mana 4.291, Rest-HP 5.891. Effektive Angriffsheilung 0, Überheilung 403, HP-Regeneration 4.948, Lebenspreise 4.948. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.989.906.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 786 | 786 | 728.606 | 0 | 0 |
| Aufgeladener Schlag | 24 | 24 | 42.768 | 14.328 | 0 |
| Mächtiger Hieb | 23 | 23 | 38.180 | 5.520 | 0 |
| Schädelspalter | 10 | 10 | 34.830 | 9.930 | 0 |
| Rotier Schlag | 22 | 22 | 33.462 | 2.904 | 0 |
| Schmetterschlag | 14 | 14 | 32.130 | 6.174 | 0 |
| Erdbeben | 11 | 11 | 21.318 | 5.115 | 0 |
| Erdbrecher | 10 | 10 | 19.400 | 5.660 | 0 |
| Abräumer | 13 | 13 | 19.110 | 3.276 | 0 |
| Schockwelle der Regeneration | 9 | 9 | 16.803 | 9.099 | 0 |
| Energieentladung | 4 | 4 | 11.680 | 0 | 0 |
| Zorn des Henkers | 2 | 2 | 7.494 | 1.418 | 0 |
| Dämonische Schockwelle | 2 | 2 | 4.316 | 440 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:01. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 1 Phasen mit mindestens einem zu teuren bereiten Skill; darin 1 tatsächliche Mana-Wartepausen mit zusammen 5 Sekunden und maximal 4.88 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:01 | 0:08 | 6 s | Schockwelle der Regeneration | 897 |

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:03 | 0:08 | 5 s | Mana |
| 0:09 | 0:26 | 18 s | Cooldowns/Voraussetzungen |
| 0:26 | 0:28 | 2 s | Cooldowns/Voraussetzungen |
| 0:29 | 0:30 | 1 s | Cooldowns/Voraussetzungen |
| 0:30 | 0:43 | 13 s | Cooldowns/Voraussetzungen |
| 0:44 | 0:48 | 4 s | Cooldowns/Voraussetzungen |
| 0:49 | 0:51 | 3 s | Cooldowns/Voraussetzungen |
| 0:51 | 0:55 | 4 s | Cooldowns/Voraussetzungen |
| 0:56 | 0:58 | 2 s | Cooldowns/Voraussetzungen |
| 0:58 | 1:00 | 2 s | Cooldowns/Voraussetzungen |
| 1:00 | 1:02 | 2 s | Cooldowns/Voraussetzungen |
| 1:02 | 1:16 | 13 s | Cooldowns/Voraussetzungen |
| 1:17 | 1:22 | 6 s | Cooldowns/Voraussetzungen |
| 1:23 | 1:26 | 3 s | Cooldowns/Voraussetzungen |
| 1:27 | 1:34 | 7 s | Cooldowns/Voraussetzungen |
| 1:35 | 1:42 | 7 s | Cooldowns/Voraussetzungen |
| 1:42 | 1:49 | 8 s | Cooldowns/Voraussetzungen |
| 1:50 | 1:51 | 1 s | Cooldowns/Voraussetzungen |
| 1:51 | 1:54 | 3 s | Cooldowns/Voraussetzungen |
| 1:54 | 2:00 | 6 s | Cooldowns/Voraussetzungen |

## Druide

Gesamt **1.365.437**, Laufzeit 10:00, Rest-Mana 595, Rest-HP 4.278. Effektive Angriffsheilung 0, Überheilung 2.844, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.634.563.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 1081 | 1081 | 724.113 | 129.720 | 0 |
| Auto-Attack | 905 | 905 | 468.790 | 0 | 0 |
| Sprungschlag | 16 | 16 | 33.984 | 16.032 | 0 |
| Ätherregen | 5 | 20 | 28.437 | 4.875 | 0 |
| Beben | 20 | 20 | 26.800 | 4.580 | 0 |
| Erdbeben | 11 | 11 | 20.755 | 5.115 | 0 |
| Windschlitzer | 14 | 14 | 18.408 | 5.684 | 0 |
| Eislanze | 16 | 16 | 17.486 | 7.392 | 0 |
| Verbrennen | 28 | 136 | 13.056 | 3.360 | 0 |
| Seelenbegleiter | 2 | 897 | 9.688 | 264 | 0 |
| Manaexplosion | 2 | 2 | 2.682 | 3.287 | 0 |
| Bannmagie | 2 | 2 | 1.238 | 232 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:59. Erstmals wirklich 0 Mana: 0:03, insgesamt 2 Ereignisse mit vollständig ausgegebenem Mana. 30 Phasen mit mindestens einem zu teuren bereiten Skill; darin 99 tatsächliche Mana-Wartepausen mit zusammen 60 Sekunden und maximal 1.99 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 0:03, 6:03.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:59 | 2:00 | 0 s | Energieschlag | 55 |
| 2:01 | 2:02 | 0 s | Beben | 157 |
| 2:03 | 2:12 | 9 s | Ätherregen | 150 |
| 2:12 | 2:14 | 1 s | Energieschlag | 45 |
| 2:17 | 2:18 | 1 s | Energieschlag | 83 |
| 2:33 | 2:34 | 1 s | Sprungschlag | 910 |
| 2:35 | 2:36 | 1 s | Energieschlag | 10 |
| 2:37 | 2:38 | 0 s | Eislanze | 112 |
| 2:39 | 2:40 | 1 s | Energieschlag | 112 |
| 3:12 | 3:14 | 1 s | Energieschlag | 104 |
| 3:17 | 3:18 | 0 s | Energieschlag | 86 |
| 3:50 | 3:52 | 1 s | Energieschlag | 78 |
| 4:15 | 4:16 | 1 s | Ätherregen | 971 |
| 4:17 | 4:18 | 0 s | Energieschlag | 98 |
| 4:28 | 4:30 | 1 s | Energieschlag | 68 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 2:12 | 2:14 | 1 s | Mana |
| 3:12 | 3:14 | 1 s | Mana |
| 3:50 | 3:52 | 1 s | Mana |
| 4:28 | 4:30 | 1 s | Mana |
| 4:32 | 4:34 | 1 s | Mana |
| 4:38 | 4:40 | 1 s | Mana |
| 6:28 | 6:30 | 2 s | Mana |
| 6:30 | 6:32 | 1 s | Mana |
| 7:44 | 7:46 | 1 s | Mana |
| 8:22 | 8:24 | 1 s | Mana |
| 8:42 | 8:44 | 2 s | Mana |
| 9:20 | 9:22 | 2 s | Mana |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Gladiator

Gesamt **945.154**, Laufzeit 10:00, Rest-Mana 5.057, Rest-HP 7.461. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 36. Gegner-Restleben 9.054.846.

Große Kombos: rageOutbursts: 4.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 801 | 801 | 729.387 | 0 | 0 |
| Sprungschlag | 16 | 16 | 40.188 | 16.032 | 0 |
| Mächtiger Hieb | 23 | 23 | 37.798 | 5.520 | 0 |
| Schmetterschlag | 14 | 14 | 31.784 | 6.174 | 0 |
| Holzspalter | 15 | 15 | 25.362 | 5.925 | 0 |
| Kriegerischer Ansturm | 9 | 9 | 20.745 | 2.745 | 0 |
| Wutklinge | 8 | 8 | 18.338 | 0 | 0 |
| Wirbelsturm | 7 | 7 | 12.732 | 2.723 | 0 |
| Wutexplosion | 4 | 4 | 11.363 | 0 | 0 |
| Sturm der Wut | 4 | 4 | 8.757 | 0 | 0 |
| Ausbruch der Wut | 4 | 4 | 8.701 | 0 | 0 |
| Energie der Wut | 6 | 0 | 0 | 2.730 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:03 | 0:29 | 26 s | Cooldowns/Voraussetzungen |
| 0:30 | 0:38 | 8 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:43 | 5 s | Cooldowns/Voraussetzungen |
| 0:43 | 0:44 | 1 s | Cooldowns/Voraussetzungen |
| 0:44 | 0:55 | 11 s | Cooldowns/Voraussetzungen |
| 0:57 | 1:11 | 14 s | Cooldowns/Voraussetzungen |
| 1:11 | 1:16 | 5 s | Cooldowns/Voraussetzungen |
| 1:16 | 1:23 | 8 s | Cooldowns/Voraussetzungen |
| 1:24 | 1:26 | 2 s | Cooldowns/Voraussetzungen |
| 1:26 | 1:38 | 12 s | Cooldowns/Voraussetzungen |
| 1:38 | 1:50 | 12 s | Cooldowns/Voraussetzungen |
| 1:51 | 1:54 | 3 s | Cooldowns/Voraussetzungen |
| 1:54 | 2:08 | 15 s | Cooldowns/Voraussetzungen |
| 2:09 | 2:17 | 8 s | Cooldowns/Voraussetzungen |
| 2:18 | 2:22 | 4 s | Cooldowns/Voraussetzungen |
| 2:22 | 2:32 | 10 s | Cooldowns/Voraussetzungen |
| 2:32 | 2:44 | 13 s | Cooldowns/Voraussetzungen |
| 2:45 | 2:50 | 5 s | Cooldowns/Voraussetzungen |
| 2:50 | 2:52 | 2 s | Cooldowns/Voraussetzungen |
| 2:52 | 2:55 | 3 s | Cooldowns/Voraussetzungen |

## Heiler

Gesamt **2.155.823**, Laufzeit 10:00, Rest-Mana 7.263, Rest-HP 3.898. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 7.844.177.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 1162 | 1162 | 1.281.686 | 139.440 | 0 |
| Auto-Attack | 784 | 784 | 704.032 | 0 | 0 |
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

Gesamt **1.265.232**, Laufzeit 10:00, Rest-Mana 6.423, Rest-HP 5.096. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.734.768.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 755 | 755 | 678.873 | 0 | 0 |
| Elektrisches Feld | 27 | 131 | 138.526 | 5.724 | 0 |
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
| 0:04 | 0:17 | 13 s | Cooldowns/Voraussetzungen |
| 0:17 | 0:19 | 2 s | Cooldowns/Voraussetzungen |
| 0:19 | 0:23 | 4 s | Cooldowns/Voraussetzungen |
| 0:24 | 0:26 | 2 s | Cooldowns/Voraussetzungen |
| 0:27 | 0:29 | 1 s | Cooldowns/Voraussetzungen |
| 0:29 | 0:30 | 1 s | Cooldowns/Voraussetzungen |
| 0:31 | 0:32 | 1 s | Cooldowns/Voraussetzungen |
| 0:32 | 0:37 | 5 s | Cooldowns/Voraussetzungen |
| 0:37 | 0:44 | 7 s | Cooldowns/Voraussetzungen |
| 0:44 | 0:46 | 2 s | Cooldowns/Voraussetzungen |
| 0:47 | 0:50 | 4 s | Cooldowns/Voraussetzungen |
| 0:51 | 0:55 | 4 s | Cooldowns/Voraussetzungen |
| 0:55 | 0:57 | 1 s | Cooldowns/Voraussetzungen |
| 0:58 | 1:02 | 4 s | Cooldowns/Voraussetzungen |
| 1:02 | 1:08 | 5 s | Cooldowns/Voraussetzungen |
| 1:08 | 1:09 | 1 s | Cooldowns/Voraussetzungen |
| 1:10 | 1:11 | 1 s | Cooldowns/Voraussetzungen |
| 1:11 | 1:13 | 2 s | Cooldowns/Voraussetzungen |
| 1:16 | 1:24 | 8 s | Cooldowns/Voraussetzungen |
| 1:25 | 1:30 | 5 s | Cooldowns/Voraussetzungen |

## Jäger

Gesamt **1.069.539**, Laufzeit 10:00, Rest-Mana 4.581, Rest-HP 5.184. Effektive Angriffsheilung 0, Überheilung 1.716, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.930.461.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 809 | 809 | 666.778 | 0 | 0 |
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
| 0:02 | 0:10 | 8 s | Cooldowns/Voraussetzungen |
| 0:10 | 0:18 | 8 s | Cooldowns/Voraussetzungen |
| 0:19 | 0:28 | 9 s | Cooldowns/Voraussetzungen |
| 0:28 | 0:35 | 8 s | Cooldowns/Voraussetzungen |
| 0:36 | 0:45 | 9 s | Cooldowns/Voraussetzungen |
| 0:45 | 0:49 | 3 s | Cooldowns/Voraussetzungen |
| 0:49 | 0:52 | 3 s | Cooldowns/Voraussetzungen |
| 0:53 | 0:54 | 1 s | Cooldowns/Voraussetzungen |
| 0:54 | 0:58 | 4 s | Cooldowns/Voraussetzungen |
| 0:58 | 1:01 | 3 s | Cooldowns/Voraussetzungen |
| 1:02 | 1:03 | 1 s | Cooldowns/Voraussetzungen |
| 1:03 | 1:07 | 4 s | Cooldowns/Voraussetzungen |
| 1:07 | 1:09 | 2 s | Cooldowns/Voraussetzungen |
| 1:10 | 1:11 | 2 s | Cooldowns/Voraussetzungen |
| 1:11 | 1:20 | 9 s | Cooldowns/Voraussetzungen |
| 1:20 | 1:26 | 6 s | Cooldowns/Voraussetzungen |
| 1:27 | 1:29 | 2 s | Cooldowns/Voraussetzungen |
| 1:29 | 1:37 | 8 s | Cooldowns/Voraussetzungen |
| 1:38 | 1:43 | 5 s | Cooldowns/Voraussetzungen |
| 1:44 | 1:46 | 3 s | Cooldowns/Voraussetzungen |

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
| 0:01 | 0:15 | 14 s | Cooldowns/Voraussetzungen |
| 0:15 | 0:27 | 12 s | Cooldowns/Voraussetzungen |
| 0:28 | 0:29 | 1 s | Cooldowns/Voraussetzungen |
| 0:29 | 0:32 | 3 s | Cooldowns/Voraussetzungen |
| 0:32 | 0:39 | 7 s | Cooldowns/Voraussetzungen |
| 0:39 | 0:41 | 2 s | Cooldowns/Voraussetzungen |
| 0:41 | 0:43 | 2 s | Cooldowns/Voraussetzungen |
| 0:43 | 0:53 | 10 s | Cooldowns/Voraussetzungen |
| 0:53 | 0:54 | 1 s | Cooldowns/Voraussetzungen |
| 0:55 | 0:57 | 2 s | Cooldowns/Voraussetzungen |
| 0:57 | 1:04 | 7 s | Cooldowns/Voraussetzungen |
| 1:04 | 1:11 | 7 s | Cooldowns/Voraussetzungen |
| 1:11 | 1:15 | 4 s | Cooldowns/Voraussetzungen |
| 1:15 | 1:18 | 2 s | Cooldowns/Voraussetzungen |
| 1:18 | 1:19 | 1 s | Cooldowns/Voraussetzungen |
| 1:19 | 1:21 | 2 s | Cooldowns/Voraussetzungen |
| 1:22 | 1:25 | 3 s | Cooldowns/Voraussetzungen |
| 1:25 | 1:36 | 11 s | Cooldowns/Voraussetzungen |
| 1:36 | 1:39 | 3 s | Cooldowns/Voraussetzungen |
| 1:39 | 1:45 | 6 s | Cooldowns/Voraussetzungen |

Hinweis: Donnernde Lanze: keine feste Castzeit gespeichert; Ansturm-/Animationsdauer im vereinbarten Test ignoriert (0 s).

## Luminet

Gesamt **2.060.163**, Laufzeit 10:00, Rest-Mana 737, Rest-HP 4.141. Effektive Angriffsheilung 0, Überheilung 774, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 7.939.837.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 778 | 778 | 738.166 | 0 | 0 |
| Energieschlag | 625 | 625 | 721.125 | 75.000 | 0 |
| Lichtblitz | 183 | 183 | 282.703 | 68.442 | 0 |
| Luminus | 81 | 81 | 84.885 | 6.075 | 0 |
| Heilige Vernichtung | 14 | 14 | 58.582 | 4.172 | 0 |
| Urteil des Himmels | 14 | 28 | 36.053 | 5.670 | 0 |
| Heiliges Kreuz | 14 | 14 | 29.390 | 6.496 | 0 |
| Eislanze | 15 | 15 | 23.652 | 6.930 | 0 |
| Schwerter des Lichtes | 11 | 11 | 21.756 | 7.788 | 0 |
| Strafendes Licht | 8 | 8 | 17.630 | 5.248 | 0 |
| Astralkörper | 6 | 6 | 14.393 | 4.092 | 0 |
| Göttliche Nova | 4 | 4 | 9.455 | 2.848 | 0 |
| Ätherregen | 1 | 4 | 7.738 | 975 | 0 |
| Aurora Wellen | 3 | 3 | 7.346 | 2.349 | 0 |
| Licht kristallenes Gefängnis | 5 | 5 | 7.289 | 1.045 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:07. Erstmals wirklich 0 Mana: 2:10, insgesamt 3 Ereignisse mit vollständig ausgegebenem Mana. 55 Phasen mit mindestens einem zu teuren bereiten Skill; darin 608 tatsächliche Mana-Wartepausen mit zusammen 478 Sekunden und maximal 1.88 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 2:10, 7:03, 9:54.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:07 | 0:08 | 0 s | Energieschlag | 10 |
| 0:11 | 0:12 | 1 s | Energieschlag | 76 |
| 0:13 | 0:14 | 1 s | Energieschlag | 27 |
| 0:15 | 0:16 | 1 s | Lichtblitz | 307 |
| 0:17 | 0:18 | 0 s | Energieschlag | 93 |
| 0:19 | 0:20 | 1 s | Energieschlag | 119 |
| 0:21 | 0:22 | 1 s | Energieschlag | 70 |
| 0:23 | 0:24 | 1 s | Lichtblitz | 350 |
| 0:26 | 0:28 | 1 s | Energieschlag | 87 |
| 0:29 | 0:30 | 1 s | Energieschlag | 113 |
| 0:31 | 0:32 | 0 s | Energieschlag | 19 |
| 0:35 | 0:36 | 0 s | Energieschlag | 10 |
| 0:37 | 0:38 | 1 s | Energieschlag | 36 |
| 0:39 | 0:40 | 1 s | Energieschlag | 62 |
| 0:41 | 0:42 | 1 s | Lichtblitz | 267 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:13 | 0:14 | 1 s | Mana |
| 0:26 | 0:28 | 1 s | Mana |
| 0:48 | 0:50 | 2 s | Mana |
| 0:50 | 0:52 | 1 s | Mana |
| 1:00 | 1:02 | 1 s | Mana |
| 1:03 | 1:04 | 1 s | Mana |
| 1:21 | 1:22 | 1 s | Mana |
| 1:26 | 1:28 | 2 s | Mana |
| 1:28 | 1:30 | 1 s | Mana |
| 1:30 | 1:32 | 1 s | Mana |
| 1:32 | 1:34 | 2 s | Mana |
| 1:54 | 1:56 | 2 s | Mana |
| 1:56 | 1:58 | 2 s | Mana |
| 1:58 | 2:00 | 1 s | Mana |
| 2:06 | 2:08 | 1 s | Mana |
| 2:10 | 2:12 | 1 s | Mana |
| 2:12 | 2:14 | 1 s | Mana |
| 2:16 | 2:18 | 1 s | Mana |
| 2:18 | 2:20 | 2 s | Mana |
| 2:26 | 2:28 | 1 s | Mana |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Ritualist

Gesamt **1.725.058**, Laufzeit 10:00, Rest-Mana 5.227, Rest-HP 3.817. Effektive Angriffsheilung 4.579, Überheilung 4.112, HP-Regeneration 41.415, Lebenspreise 45.638. Rest-Seelen 22, Rest-Wut 0. Gegner-Restleben 8.274.942.

Große Kombos: soulShackles: 7; soulHarvests: 4.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 807 | 807 | 770.657 | 0 | 0 |
| Morrak´s Meister | 2 | 808 | 257.592 | 0 | 0 |
| Feuerball | 146 | 146 | 231.373 | 38.836 | 0 |
| Dunkler Impuls | 146 | 146 | 177.550 | 15.768 | 0 |
| Seelenqual | 105 | 105 | 131.795 | 8.085 | 0 |
| Feuer der Verdammten | 12 | 84 | 56.932 | 5.628 | 0 |
| Schrei der Unterwelt | 8 | 8 | 23.070 | 0 | 0 |
| Lebenssauger | 15 | 15 | 22.030 | 5.310 | 3.387 |
| Meteoritenschauer | 3 | 18 | 20.689 | 1.407 | 0 |
| Sturm des Feuers | 6 | 6 | 10.253 | 2.250 | 0 |
| Seelenfessel | 7 | 7 | 9.274 | 1.351 | 0 |
| Seelenernte | 4 | 4 | 8.442 | 1.860 | 1.192 |
| Seelenplage | 3 | 3 | 5.399 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:05 | 0:09 | 4 s | Cooldowns/Voraussetzungen |
| 0:09 | 0:13 | 4 s | Cooldowns/Voraussetzungen |
| 0:13 | 0:17 | 4 s | Cooldowns/Voraussetzungen |
| 0:17 | 0:21 | 4 s | Cooldowns/Voraussetzungen |
| 0:21 | 0:25 | 4 s | Cooldowns/Voraussetzungen |
| 0:25 | 0:29 | 4 s | Cooldowns/Voraussetzungen |
| 0:29 | 0:33 | 4 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:37 | 4 s | Cooldowns/Voraussetzungen |
| 0:37 | 0:41 | 4 s | Cooldowns/Voraussetzungen |
| 0:42 | 0:45 | 3 s | Cooldowns/Voraussetzungen |
| 0:45 | 0:49 | 4 s | Cooldowns/Voraussetzungen |
| 0:49 | 0:52 | 3 s | Cooldowns/Voraussetzungen |
| 0:53 | 0:57 | 4 s | Cooldowns/Voraussetzungen |
| 0:57 | 1:01 | 4 s | Cooldowns/Voraussetzungen |
| 1:01 | 1:05 | 4 s | Cooldowns/Voraussetzungen |
| 1:05 | 1:09 | 4 s | Cooldowns/Voraussetzungen |
| 1:09 | 1:13 | 4 s | Cooldowns/Voraussetzungen |
| 1:13 | 1:17 | 4 s | Cooldowns/Voraussetzungen |
| 1:18 | 1:21 | 3 s | Cooldowns/Voraussetzungen |
| 1:22 | 1:25 | 3 s | Cooldowns/Voraussetzungen |

## Schamane

Gesamt **1.407.976**, Laufzeit 10:00, Rest-Mana 1.153, Rest-HP 4.637. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.592.024.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 932 | 932 | 631.989 | 111.840 | 0 |
| Auto-Attack | 906 | 906 | 504.325 | 0 | 0 |
| Mächtiger Doppelschlag | 18 | 18 | 42.143 | 11.826 | 0 |
| Gezielter Blitz | 18 | 18 | 30.800 | 10.764 | 0 |
| Eisranken | 27 | 135 | 29.838 | 8.802 | 0 |
| Beben | 20 | 20 | 27.573 | 4.580 | 0 |
| Rotier Schlag | 21 | 21 | 24.164 | 2.772 | 0 |
| Infernal Zyklon | 5 | 30 | 23.523 | 2.680 | 0 |
| Erdbeben | 11 | 11 | 21.271 | 5.115 | 0 |
| Kristallisierte Wasserspähre | 24 | 24 | 20.474 | 3.960 | 0 |
| Feuerlanze | 15 | 15 | 16.262 | 7.080 | 0 |
| Windfesseln | 16 | 16 | 16.034 | 4.560 | 0 |
| Vakuumimpuls | 5 | 5 | 12.166 | 2.765 | 0 |
| Himmelsbrecher | 2 | 4 | 7.415 | 2.376 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:08. Erstmals wirklich 0 Mana: 7:52, insgesamt 1 Ereignisse mit vollständig ausgegebenem Mana. 46 Phasen mit mindestens einem zu teuren bereiten Skill; darin 610 tatsächliche Mana-Wartepausen mit zusammen 350 Sekunden und maximal 1.99 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 7:52.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:08 | 1:10 | 1 s | Gezielter Blitz | 17 |
| 1:10 | 1:12 | 2 s | Eisranken | 1 |
| 1:13 | 1:14 | 1 s | Energieschlag | 17 |
| 1:19 | 1:20 | 1 s | Kristallisierte Wasserspähre | 158 |
| 1:21 | 1:22 | 1 s | Feuerlanze | 95 |
| 1:23 | 1:24 | 1 s | Energieschlag | 85 |
| 1:41 | 1:42 | 1 s | Mächtiger Doppelschlag | 556 |
| 1:43 | 1:46 | 3 s | Gezielter Blitz | 121 |
| 1:46 | 1:48 | 2 s | Energieschlag | 42 |
| 1:53 | 1:54 | 0 s | Energieschlag | 3 |
| 1:55 | 1:56 | 1 s | Windfesseln | 93 |
| 1:56 | 1:58 | 1 s | Energieschlag | 64 |
| 2:01 | 2:02 | 0 s | Energieschlag | 36 |
| 2:03 | 2:04 | 1 s | Energieschlag | 29 |
| 2:15 | 2:16 | 1 s | Energieschlag | 59 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 1:08 | 1:10 | 1 s | Mana |
| 1:10 | 1:12 | 2 s | Mana |
| 1:46 | 1:48 | 2 s | Mana |
| 1:56 | 1:58 | 1 s | Mana |
| 2:20 | 2:22 | 2 s | Mana |
| 2:23 | 2:24 | 1 s | Mana |
| 2:24 | 2:26 | 1 s | Mana |
| 2:50 | 2:52 | 2 s | Mana |
| 2:54 | 2:56 | 2 s | Mana |
| 3:02 | 3:04 | 1 s | Mana |
| 3:24 | 3:26 | 2 s | Mana |
| 3:26 | 3:28 | 1 s | Mana |
| 3:28 | 3:30 | 2 s | Mana |
| 3:48 | 3:50 | 1 s | Mana |
| 3:58 | 4:00 | 2 s | Mana |
| 4:00 | 4:02 | 1 s | Mana |
| 4:02 | 4:04 | 2 s | Mana |
| 4:38 | 4:40 | 2 s | Mana |
| 4:40 | 4:42 | 2 s | Mana |
| 4:42 | 4:44 | 1 s | Mana |

## Seelenjäger

Gesamt **1.130.862**, Laufzeit 10:00, Rest-Mana 3.565, Rest-HP 4.125. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.869.138.

Große Kombos: soulCollectionWindows: 8; spectralFinishers: 8.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 981 | 981 | 683.365 | 0 | 0 |
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
| 0:05 | 0:14 | 9 s | Cooldowns/Voraussetzungen |
| 0:14 | 0:23 | 9 s | Cooldowns/Voraussetzungen |
| 0:23 | 0:30 | 7 s | Cooldowns/Voraussetzungen |
| 0:30 | 0:31 | 1 s | Cooldowns/Voraussetzungen |
| 0:31 | 0:35 | 3 s | Cooldowns/Voraussetzungen |
| 0:35 | 0:40 | 5 s | Cooldowns/Voraussetzungen |
| 0:40 | 0:49 | 9 s | Cooldowns/Voraussetzungen |
| 0:49 | 0:55 | 6 s | Cooldowns/Voraussetzungen |
| 0:55 | 0:58 | 3 s | Cooldowns/Voraussetzungen |
| 0:58 | 1:00 | 2 s | Cooldowns/Voraussetzungen |
| 1:00 | 1:01 | 1 s | Cooldowns/Voraussetzungen |
| 1:01 | 1:05 | 3 s | Cooldowns/Voraussetzungen |
| 1:05 | 1:06 | 2 s | Cooldowns/Voraussetzungen |
| 1:06 | 1:15 | 8 s | Cooldowns/Voraussetzungen |
| 1:20 | 1:29 | 8 s | Cooldowns/Voraussetzungen |
| 1:29 | 1:35 | 6 s | Cooldowns/Voraussetzungen |
| 1:35 | 1:37 | 2 s | Cooldowns/Voraussetzungen |
| 1:37 | 1:45 | 8 s | Cooldowns/Voraussetzungen |
| 1:46 | 1:47 | 1 s | Cooldowns/Voraussetzungen |
| 1:47 | 1:55 | 7 s | Cooldowns/Voraussetzungen |

## Schurke

Gesamt **1.006.968**, Laufzeit 10:00, Rest-Mana 3.828, Rest-HP 4.766. Effektive Angriffsheilung 0, Überheilung 837, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 8.993.032.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 909 | 909 | 612.575 | 0 | 0 |
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

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:02. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 1 Phasen mit mindestens einem zu teuren bereiten Skill; darin 1 tatsächliche Mana-Wartepausen mit zusammen 1 Sekunden und maximal 1.07 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:02 | 0:04 | 1 s | Blutklinge | 135 |

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:02 | 0:04 | 1 s | Mana |
| 0:04 | 0:16 | 13 s | Cooldowns/Voraussetzungen |
| 0:16 | 0:18 | 2 s | Cooldowns/Voraussetzungen |
| 0:18 | 0:30 | 12 s | Cooldowns/Voraussetzungen |
| 0:30 | 0:34 | 4 s | Cooldowns/Voraussetzungen |
| 0:34 | 0:44 | 10 s | Cooldowns/Voraussetzungen |
| 0:44 | 0:50 | 6 s | Cooldowns/Voraussetzungen |
| 0:50 | 0:58 | 8 s | Cooldowns/Voraussetzungen |
| 0:58 | 1:01 | 3 s | Cooldowns/Voraussetzungen |
| 1:01 | 1:06 | 5 s | Cooldowns/Voraussetzungen |
| 1:07 | 1:09 | 2 s | Cooldowns/Voraussetzungen |
| 1:09 | 1:12 | 3 s | Cooldowns/Voraussetzungen |
| 1:12 | 1:15 | 2 s | Cooldowns/Voraussetzungen |
| 1:15 | 1:22 | 8 s | Cooldowns/Voraussetzungen |
| 1:22 | 1:26 | 4 s | Cooldowns/Voraussetzungen |
| 1:27 | 1:30 | 2 s | Cooldowns/Voraussetzungen |
| 1:30 | 1:31 | 1 s | Rückkehr in Tarnung |
| 1:31 | 1:38 | 7 s | Cooldowns/Voraussetzungen |
| 1:38 | 1:40 | 2 s | Cooldowns/Voraussetzungen |
| 1:40 | 1:49 | 9 s | Cooldowns/Voraussetzungen |

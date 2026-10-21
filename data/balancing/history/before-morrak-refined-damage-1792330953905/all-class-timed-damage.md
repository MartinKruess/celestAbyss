# Zehn-Minuten-Schadensvergleich

Berechnungsstand: 2026-10-18 T 13:35:26.717 Z; Eingabedateien und SHA-256-Prüfsummen sind im JSON gespeichert.

- Beschwörungen aktualisiert: Druide, Jäger und Ritualist neu gerechnet; die übrigen zehn Klassen behalten ihre bisherigen Ergebnisse. Neue feste Grundwerte von Naturgeist/Seelenbegleiter/Morrak enthalten. Bindung Stufe 1 wirkt auf Naturgeist und Seelenbegleiter, nicht auf Morrak. Frequenzen 1,1/1,5/1,1 Angriffe pro Sekunde.
- Abenteurer aktualisiert: neue permanente Passive und Zweihandschwert, Kreuzhieb und Blutender Schnitt enthalten. Reguläre Pets sind noch nicht modelliert; Wilde Bindung und Blutgeruch liefern deshalb keinen Pet-Zusatzschaden. Beharrlichkeit löst am nicht angreifenden Dummy nicht aus; Lebenstransfer ist reine Begleiterheilung und entfällt. Rudelangriff ist trotz bestätigtem Grundschaden vorläufig ausgeschlossen, weil Mana, Cooldown und Vorbereitungs-/Castdauer noch nicht festgelegt sind. Dieser Wert ist daher ein Teilvergleich ohne Rudelangriff und ohne reguläre Pets.
- Schurke: R 6-Freischaltung vorausgesetzt, 1,8 zusätzlicher P-Angriff je Ambush neben Stärke. Bereits in den Ausgangswerten enthaltene Spezialattribut-Beiträge werden nicht doppelt addiert.
- Blutiger Durchbruch: drei Treffer teilen den Skill-Grundschaden 1:2:3 und addieren jeweils den vollen aktuellen P-Angriff. Vorläufige Trefferzeiten 0/1/2 Sekunden nach Castende; einmalig 5 Wut beim ersten erfolgreichen Schadenstreffer. Keine zusätzliche Animationssperre im Test.
- Gladiator: Energie der Wut hält auf Maximalstufe 59 Sekunden bei 58 Sekunden Cooldown nach 0,1 Sekunden Cast. Der Test erneuert diesen notwendigen Wutaufbau-Buff bei Verfügbarkeit mit Priorität, auch bei bereits aktiver Wirkung und genügend Wut. Kein zusätzlicher Wutpunkt bei Aktivierung. Ausbruch der Wut hat 130 Sekunden Cooldown und 64 Sekunden Buffdauer.
- R 6-Test mit freigeschalteter besonderer Verwertung: Luminet erhält 1,8 M-Angriff je Faith, Ritualist 1,9 M-Angriff je Victim zusätzlich zur Intelligenz (je 1,6 M-Angriff pro Int bei beiden Klassen). Permanente Attribute, dynamischer Reaper-Bonus und Morraks 5 Victim sind enthalten. Beim Luminet wird Aufenthalt im eigenen Lichtschwertfeld angenommen (+17,5 Faith während der Feldlaufzeit). Diese Freischaltung wird für diesen R 6-Test vorausgesetzt.
- Zunächst Kontrolllauf mit 2.000.000 HP; da einzelne Klassen das Ziel vor 600 Sekunden töten, zusätzlicher einheitlicher 600-Sekunden-Vergleich mit 10.000.000 HP für alle Klassen. Der Todzeitpunkt des bestätigten 2-Millionen-Ziels wird separat ausgewiesen. 600 Sekunden je Klasse, Level 60/R 6 mit permanenten Passiven, frisches normales Monster, ohne Gegenangriffe, Rüstung, Verfehlen, Heilung oder Regeneration. Ritualist startet mit 100 Seelen, Gladiator mit 100 Wut, alle Cooldowns bereit.
- Auto-Attacks werden bei Zauberstabklassen (Heiler/Kräuterkundler/Luminet/Ritualist) als magisch mit dem aktuellen M-Angriff, bei den übrigen Waffenklassen als physisch mit aktuellem P-Angriff gerechnet. Dies ist die explizite Waffen-/Schadensart-Annahme dieses Tests.
- 100% Angriffstempo entspricht bei Heiler/Luminet/Ritualist 1,1, beim Kräuterkundler 1,2, bei Jäger/Seelenjäger 1,3, sonst 1,5 gemeinsamen Auto-Attack-Aktionen pro Sekunde. Waffenabzüge und permanente Angriffstempo-Boni werden als Faktor angewendet. Zwei Waffen sind eine Aktion mit dem bereits kombinierten Angriff. HP-Regeneration alle 2 Sekunden, MP-Regeneration alle 3 Sekunden (0,9 je Willenskraftpunkt). Zeitschritt 10 ms; keine zusätzliche globale Abklingzeit. Abweichungen von subframegenauen Abläufen sind möglich.
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
- Morrak nutzt live ein Drittel M-Angriff des Meisters inklusive unvermeidbarer permanenter Kampfpassiven; seine 500-Max-HP-Kosten und+5 Wis gelten während Beschwörung. Seelenbegleiter nutzt 30% Geschick/Vita/Willenskraft; Naturgeist nutzt 30% Intelligenz/Vita/Willenskraft und verursacht magischen Windschaden mit 1,8 M-Angriff je übernommenem Intelligenzpunkt. Beide ohne optionalen Begleiterbuff. Neue zusätzliche Grundwerte und Bindung sind in den Beschwörungsdaten definiert. Morrak und Naturgeist 1,1 Angriffe/s, Seelenbegleiter 1,5 Angriffe/s ohne fremde Tempoübernahme. Kein Begleitertod am nicht angreifenden Dummy; zusätzliche HP und Abwehr beeinflussen diesen Schadenstest nicht.
- Dies ist eine Modellrechnung mit offengelegter Steuerung, kein Unreal-Lauf und keine abschließende Balancebewertung. Zehn Minutenabschnitte sind Zeitfenster, keine künstlich synchronisierten Rotationen. Vollständige große Kombos werden gesondert gezählt.

## Gesamtvergleich: volle 600 Sekunden, Zusatztest mit 10 Millionen Ziel-HP

| Klasse | Schaden | DPS | Skills | Auto-Attacks | Beschwörungen | Ø pro Minute | Erstmals Skill zu teuer | Erstmals Mana=0 | Mana-Wartephasen | Mana-Wartezeit gesamt | Längste Mana-Pause | Tod bei 2 Mio HP |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: | --- |
| Ritualist | **972.914** | 1.622 | 459.456 | 314.058 | 199.400 | 97.291 | 0:05 | — | 415 | 253 s | 0.92 s | — |
| Luminet | **933.899** | 1.556 | 757.628 | 176.271 | 0 | 93.390 | 1:11 | 2:18 | 498 | 277 s | 0.93 s | — |
| Jäger | **870.403** | 1.451 | 357.609 | 437.122 | 75.671 | 87.040 | — | — | 0 | 0 s | 0.00 s | — |
| Gladiator | **823.931** | 1.373 | 289.434 | 534.498 | 0 | 82.393 | 2:51 | — | 278 | 80 s | 0.65 s | — |
| Butcher | **785.005** | 1.308 | 241.374 | 543.631 | 0 | 78.501 | 0:01 | 8:45 | 699 | 214 s | 0.65 s | — |
| Kräuterkundler | **774.730** | 1.291 | 441.004 | 333.726 | 0 | 77.473 | 2:34 | — | 406 | 208 s | 0.84 s | — |
| Seelenjäger | **773.873** | 1.290 | 271.956 | 501.917 | 0 | 77.387 | 1:17 | — | 629 | 141 s | 0.67 s | — |
| Druide | **729.405** | 1.216 | 497.529 | 154.114 | 77.762 | 72.941 | 0:05 | 0:04 | 39 | 20 s | 0.60 s | — |
| Heiler | **678.663** | 1.131 | 444.836 | 233.827 | 0 | 67.866 | — | — | 0 | 0 s | 0.00 s | — |
| Schurke | **651.609** | 1.086 | 243.185 | 408.424 | 0 | 65.161 | 0:03 | — | 717 | 180 s | 5.74 s | — |
| Abenteurer | **611.163** | 1.019 | 153.833 | 457.330 | 0 | 61.116 | — | — | 0 | 0 s | 0.00 s | — |
| Schamane | **602.263** | 1.004 | 452.679 | 149.585 | 0 | 60.226 | 1:08 | 6:31 | 657 | 242 s | 0.55 s | — |
| Ritter | **555.158** | 925 | 213.673 | 341.485 | 0 | 55.516 | — | — | 0 | 0 s | 0.00 s | — |

## Zahlen richtig lesen und Heiler-Ergebnis nachvollziehen

**Ein zu teurer bereiter Skill bedeutet weder null Mana noch null Leben.** Die Summe der Mana-Wartezeit besteht aus vielen kurzen Pausen; sie ist keine zusammenhängende Regeneration bis zum vollen Pool. Ressourcen werden fortlaufend genutzt. Die Cooldowns bleiben dauerhaft aktiv und werden zwischen Minuten nicht zurückgesetzt. Nur beim Start sind alle Skills gleichzeitig bereit.

Butcher: erster zu teurer Skill 0:01; 785 Phasen mit mindestens einem nicht bezahlbaren Skill. Längste tatsächliche Mana-Pause 0.65 Sekunden.

Luminet: 498 Mana-Wartepausen, zusammen 277.00 Sekunden.

Heiler: Energieschlag auf Stufe 5, Cooldown 1.1 Sekunden nach Castende. 358 Anwendungen erzeugen 300.004 Schaden, eigene Auto-Attacks 233.827. Potenzielle MP-Regeneration 278 alle 3 Sekunden; durchschnittlicher Verbrauch 2.544 Mana pro Minute. Reine Heilzauber sind im Schadenstest ausgeschlossen.

## Mana-Pool, Verbrauch und Regeneration

Basispool und permanente MP-Regeneration ohne optionale Eigenbuffs. Während aktiver Beschwörungen können einzelne Werte temporär abweichen. Potenzielle Regeneration ist am vollen Pool begrenzt.

| Klasse | Mana-Pool | MP-Reg/Tick | Mögliche MP-Reg/min | Verbrauch/min | Tatsächlich regeneriert/min |
| --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 5.651 | 196 | 3.922 | 2.101 | 2.101 |
| Butcher | 4.291 | 156 | 3.112 | 3.523 | 3.112 |
| Druide | 6.536 | 206 | 4.122 | 4.543 | 4.122 |
| Gladiator | 5.057 | 178 | 3.562 | 4.017 | 3.562 |
| Heiler | 6.852 | 278 | 5.552 | 2.544 | 2.544 |
| Kräuterkundler | 6.543 | 220 | 4.408 | 5.026 | 4.408 |
| Jäger | 4.581 | 165 | 3.292 | 3.502 | 3.292 |
| Ritter | 5.983 | 216 | 4.320 | 3.605 | 3.550 |
| Luminet | 6.017 | 256 | 5.120 | 5.692 | 5.120 |
| Ritualist | 4.837 | 189 | 3.782 | 4.323 | 3.863 |
| Schamane | 5.673 | 206 | 4.122 | 4.667 | 4.122 |
| Seelenjäger | 3.565 | 129 | 2.572 | 2.888 | 2.572 |
| Schurke | 3.828 | 133 | 2.662 | 3.031 | 2.662 |

## Sensitivität: Mana für den stärksten bereiten Angriff zurückhalten

Der Hauptlauf verwendet die erste bezahlbare priorisierte Aktion. Der Zusatzlauf wartet bei fehlendem Mana für die höchste Priorität mit Auto-Attacks, statt billigere Skills zu wirken. Das ist eine andere Steuerung, keine geänderte Klasse.

| Klasse | Hauptlauf | Mit Manareserve | Unterschied |
| --- | ---: | ---: | ---: |
| Abenteurer | 611.163 | 611.163 | 0 |
| Butcher | 785.005 | 765.769 | -19.236 |
| Druide | 729.405 | 719.997 | -9.408 |
| Gladiator | 823.931 | 823.156 | -776 |
| Heiler | 678.663 | 678.663 | 0 |
| Kräuterkundler | 774.730 | 768.830 | -5.899 |
| Jäger | 870.403 | 870.403 | 0 |
| Ritter | 555.158 | 555.158 | 0 |
| Luminet | 933.899 | 909.390 | -24.509 |
| Ritualist | 972.914 | 950.087 | -22.827 |
| Schamane | 602.263 | 629.398 | 27.134 |
| Seelenjäger | 773.873 | 785.937 | 12.064 |
| Schurke | 651.609 | 672.796 | 21.187 |

Ein Mana-Hindernis bedeutet: mindestens ein bereiter priorisierter Skill ist nicht bezahlbar. Das ist nicht zwangsläufig ein leerer Pool oder Stillstand; günstigere Skills und Auto-Attacks bleiben erlaubt. Mana-Wartezeit ist die Summe vieler einzelner Zeitstücke ohne bezahlbare gewählte Skillaktion; Auto-Attacks gehen weiter. Sie ist keine Zeit bis zum vollen Mana-Pool und keine HP-Ausfallzeit. Die Zahl der Mana-Wartephasen zählt diese tatsächlich getrennten Pausen. Andere Wartezeiten wie Tarnrückkehr sind getrennt erfasst.

## Schaden pro Minute

| Klasse | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Ø |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 67.540 | 61.439 | 59.687 | 59.201 | 61.841 | 59.833 | 60.891 | 59.603 | 59.285 | 61.841 | 61.116 |
| Butcher | 91.689 | 74.786 | 78.066 | 77.853 | 77.285 | 75.419 | 77.880 | 76.697 | 77.695 | 77.634 | 78.501 |
| Druide | 82.837 | 66.036 | 78.847 | 65.706 | 81.646 | 65.374 | 69.773 | 75.070 | 71.950 | 72.165 | 72.941 |
| Gladiator | 98.924 | 78.715 | 87.411 | 73.789 | 84.571 | 78.484 | 79.531 | 83.465 | 78.314 | 80.727 | 82.393 |
| Heiler | 72.386 | 64.793 | 68.202 | 68.994 | 66.689 | 67.418 | 68.731 | 66.715 | 67.237 | 67.497 | 67.866 |
| Kräuterkundler | 94.025 | 84.237 | 74.781 | 73.929 | 75.508 | 75.161 | 71.823 | 75.253 | 73.707 | 76.306 | 77.473 |
| Jäger | 95.861 | 85.198 | 85.061 | 85.626 | 88.219 | 85.825 | 84.265 | 85.825 | 86.487 | 88.036 | 87.040 |
| Ritter | 59.983 | 56.270 | 52.603 | 57.261 | 53.089 | 55.499 | 53.336 | 57.747 | 52.603 | 56.766 | 55.516 |
| Luminet | 133.308 | 91.227 | 90.873 | 85.906 | 91.802 | 85.005 | 92.391 | 85.571 | 91.255 | 86.562 | 93.390 |
| Ritualist | 129.276 | 105.567 | 95.340 | 96.779 | 96.973 | 68.997 | 96.373 | 93.381 | 92.533 | 97.694 | 97.291 |
| Schamane | 81.170 | 58.874 | 58.269 | 57.549 | 57.702 | 57.612 | 57.676 | 58.164 | 57.692 | 57.555 | 60.226 |
| Seelenjäger | 95.651 | 84.802 | 71.932 | 75.305 | 74.801 | 72.622 | 75.426 | 74.038 | 75.547 | 73.749 | 77.387 |
| Schurke | 87.457 | 61.242 | 68.705 | 61.242 | 59.642 | 65.646 | 60.223 | 60.887 | 67.219 | 59.347 | 65.161 |

## Abenteurer

Gesamt **611.163**, Laufzeit 10:00, Rest-Mana 5.651, Rest-HP 6.092. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.388.837.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 835 | 835 | 457.330 | 0 | 0 |
| Wirbelnde Klinge | 11 | 11 | 62.684 | 7.917 | 0 |
| Kreuzhieb | 18 | 18 | 40.291 | 4.994 | 0 |
| Sprungschlag | 17 | 17 | 36.613 | 6.662 | 0 |
| Blutender Schnitt | 15 | 15 | 14.246 | 1.440 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Butcher

Gesamt **785.005**, Laufzeit 10:00, Rest-Mana 182, Rest-HP 5.891. Effektive Angriffsheilung 0, Überheilung 252, HP-Regeneration 4.948, Lebenspreise 4.948. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.214.995.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 671 | 671 | 543.631 | 0 | 0 |
| Aufgeladener Schlag | 22 | 22 | 36.634 | 4.774 | 0 |
| Mächtiger Hieb | 22 | 22 | 33.950 | 3.960 | 0 |
| Schmetterschlag | 14 | 14 | 30.495 | 4.802 | 0 |
| Rotier Schlag | 21 | 21 | 29.488 | 3.213 | 0 |
| Schädelspalter | 7 | 7 | 23.563 | 4.459 | 0 |
| Erdbeben | 11 | 11 | 20.033 | 2.541 | 0 |
| Abräumer | 13 | 13 | 17.591 | 1.768 | 0 |
| Energieentladung | 4 | 4 | 11.213 | 0 | 0 |
| Zorn des Henkers | 3 | 3 | 10.891 | 2.118 | 0 |
| Schockwelle der Regeneration | 6 | 6 | 10.501 | 3.798 | 0 |
| Dämonische Schockwelle | 5 | 5 | 10.206 | 1.400 | 0 |
| Erdbrecher | 1 | 1 | 6.810 | 2.396 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:01. Erstmals wirklich 0 Mana: 8:45, insgesamt 1 Ereignisse mit vollständig ausgegebenem Mana. 785 Phasen mit mindestens einem zu teuren bereiten Skill; darin 699 tatsächliche Mana-Wartepausen mit zusammen 214 Sekunden und maximal 0.65 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 8:45.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:01 | 0:01 | 0 s | Schockwelle der Regeneration | 552 |
| 0:01 | 0:02 | 0 s | Schockwelle der Regeneration | 552 |
| 0:02 | 0:02 | 1 s | Dämonische Schockwelle | 209 |
| 0:02 | 0:03 | 0 s | Dämonische Schockwelle | 29 |
| 0:03 | 0:03 | 1 s | Dämonische Schockwelle | 32 |
| 0:04 | 0:04 | 0 s | Dämonische Schockwelle | 32 |
| 0:04 | 0:05 | 0 s | Dämonische Schockwelle | 32 |
| 0:05 | 0:05 | 0 s | Dämonische Schockwelle | 32 |
| 0:06 | 0:07 | 1 s | Dämonische Schockwelle | 187 |
| 0:07 | 0:07 | 1 s | Dämonische Schockwelle | 51 |
| 0:08 | 0:08 | 0 s | Dämonische Schockwelle | 51 |
| 0:09 | 0:09 | 0 s | Dämonische Schockwelle | 207 |
| 0:09 | 0:10 | 0 s | Dämonische Schockwelle | 207 |
| 0:10 | 0:10 | 0 s | Dämonische Schockwelle | 207 |
| 0:11 | 0:11 | 0 s | Dämonische Schockwelle | 207 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Druide

Gesamt **729.405**, Laufzeit 10:00, Rest-Mana 2.324, Rest-HP 4.278. Effektive Angriffsheilung 0, Überheilung 3.074, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.270.595.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 431 | 431 | 295.291 | 11.206 | 0 |
| Auto-Attack | 388 | 388 | 154.114 | 0 | 0 |
| Naturgeist | 2 | 658 | 77.762 | 264 | 0 |
| Himmelsbrecher | 5 | 10 | 42.996 | 8.550 | 0 |
| Eisranken | 27 | 135 | 32.728 | 4.266 | 0 |
| Ätherregen | 5 | 20 | 30.743 | 1.195 | 0 |
| Vakuumimpuls | 7 | 14 | 28.107 | 3.337 | 0 |
| Windschlitzer | 15 | 15 | 21.988 | 3.144 | 0 |
| Windfesseln | 19 | 19 | 21.600 | 2.538 | 0 |
| Eislanze | 15 | 15 | 18.122 | 2.325 | 0 |
| Manaexplosion | 2 | 2 | 4.487 | 8.535 | 0 |
| Bannmagie | 2 | 2 | 1.468 | 72 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:05. Erstmals wirklich 0 Mana: 0:04, insgesamt 2 Ereignisse mit vollständig ausgegebenem Mana. 76 Phasen mit mindestens einem zu teuren bereiten Skill; darin 39 tatsächliche Mana-Wartepausen mit zusammen 20 Sekunden und maximal 0.60 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 0:04, 6:05.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:05 | 0:06 | 0 s | Energieschlag | 0 |
| 6:07 | 6:07 | 0 s | Windschlitzer | 206 |
| 6:07 | 6:08 | 1 s | Windschlitzer | 180 |
| 6:08 | 6:08 | 0 s | Windschlitzer | 180 |
| 6:08 | 6:09 | 0 s | Windschlitzer | 154 |
| 6:27 | 6:27 | 0 s | Himmelsbrecher | 523 |
| 6:27 | 6:27 | 1 s | Himmelsbrecher | 497 |
| 6:28 | 6:28 | 0 s | Himmelsbrecher | 497 |
| 6:28 | 6:29 | 1 s | Himmelsbrecher | 471 |
| 6:29 | 6:29 | 0 s | Himmelsbrecher | 471 |
| 6:29 | 6:30 | 1 s | Himmelsbrecher | 445 |
| 6:31 | 6:31 | 0 s | Himmelsbrecher | 651 |
| 6:31 | 6:31 | 0 s | Himmelsbrecher | 518 |
| 6:31 | 6:32 | 1 s | Himmelsbrecher | 492 |
| 6:32 | 6:32 | 0 s | Himmelsbrecher | 492 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Gladiator

Gesamt **823.931**, Laufzeit 10:00, Rest-Mana 511, Rest-HP 7.461. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 38. Gegner-Restleben 9.176.069.

Große Kombos: rageOutbursts: 5.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 688 | 688 | 534.498 | 0 | 0 |
| Blutiger Durchbruch | 6 | 18 | 46.533 | 12.960 | 0 |
| Sprungschlag | 16 | 16 | 38.133 | 6.464 | 0 |
| Mächtiger Hieb | 22 | 22 | 33.255 | 3.960 | 0 |
| Schmetterschlag | 14 | 14 | 30.006 | 4.802 | 0 |
| Wutexplosion | 10 | 10 | 27.025 | 0 | 0 |
| Holzspalter | 16 | 16 | 25.054 | 3.136 | 0 |
| Kriegerischer Ansturm | 11 | 11 | 23.932 | 3.839 | 0 |
| Ausbruch der Wut | 5 | 5 | 23.496 | 0 | 0 |
| Wutklinge | 10 | 10 | 21.615 | 0 | 0 |
| Sturm der Wut | 10 | 10 | 20.385 | 0 | 0 |
| Energie der Wut | 11 | 0 | 0 | 5.005 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 2:51. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 312 Phasen mit mindestens einem zu teuren bereiten Skill; darin 278 tatsächliche Mana-Wartepausen mit zusammen 80 Sekunden und maximal 0.65 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 2:51 | 2:52 | 1 s | Kriegerischer Ansturm | 342 |
| 2:52 | 2:53 | 0 s | Kriegerischer Ansturm | 342 |
| 2:53 | 2:53 | 0 s | Kriegerischer Ansturm | 342 |
| 2:54 | 2:55 | 1 s | Energie der Wut | 171 |
| 2:55 | 2:55 | 0 s | Energie der Wut | 171 |
| 2:56 | 2:56 | 0 s | Energie der Wut | 171 |
| 2:56 | 2:57 | 0 s | Energie der Wut | 171 |
| 2:57 | 2:57 | 1 s | Energie der Wut | 349 |
| 2:58 | 2:58 | 0 s | Energie der Wut | 349 |
| 2:59 | 2:59 | 0 s | Energie der Wut | 349 |
| 2:59 | 3:00 | 0 s | Energie der Wut | 349 |
| 3:02 | 3:03 | 0 s | Sprungschlag | 72 |
| 3:03 | 3:03 | 0 s | Sprungschlag | 250 |
| 3:04 | 3:04 | 0 s | Sprungschlag | 250 |
| 3:05 | 3:05 | 0 s | Sprungschlag | 250 |

Weitere Phasen stehen vollständig in der JSON-Datei.

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

Gesamt **774.730**, Laufzeit 10:00, Rest-Mana 359, Rest-HP 5.096. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.225.270.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 447 | 447 | 333.726 | 0 | 0 |
| Elektrisches Feld | 26 | 130 | 116.838 | 7.176 | 0 |
| Gezielter Blitz | 33 | 33 | 66.563 | 10.131 | 0 |
| Kugelblitz | 21 | 21 | 51.890 | 8.904 | 0 |
| Geladener Nebel | 27 | 27 | 48.751 | 7.236 | 0 |
| Ewiges Eis | 24 | 24 | 35.654 | 4.512 | 0 |
| Wasserfesseln | 43 | 43 | 34.124 | 516 | 0 |
| Windschlitzer | 20 | 20 | 31.932 | 4.300 | 0 |
| Eislanze | 23 | 23 | 31.616 | 3.565 | 0 |
| Tobender Sturm | 2 | 18 | 23.636 | 3.924 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 2:34. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 492 Phasen mit mindestens einem zu teuren bereiten Skill; darin 406 tatsächliche Mana-Wartepausen mit zusammen 208 Sekunden und maximal 0.84 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 2:34 | 2:34 | 0 s | Tobender Sturm | 1.291 |
| 2:35 | 2:35 | 0 s | Tobender Sturm | 1.291 |
| 2:35 | 2:36 | 1 s | Tobender Sturm | 1.076 |
| 2:37 | 2:37 | 1 s | Tobender Sturm | 1.297 |
| 2:37 | 2:38 | 1 s | Tobender Sturm | 1.285 |
| 2:39 | 2:39 | 0 s | Tobender Sturm | 1.505 |
| 2:40 | 2:40 | 0 s | Tobender Sturm | 1.505 |
| 2:40 | 2:41 | 1 s | Tobender Sturm | 1.237 |
| 2:41 | 2:42 | 0 s | Tobender Sturm | 1.237 |
| 2:42 | 2:43 | 0 s | Tobender Sturm | 1.458 |
| 2:43 | 2:44 | 0 s | Tobender Sturm | 1.458 |
| 2:44 | 2:45 | 1 s | Tobender Sturm | 1.458 |
| 2:45 | 2:45 | 0 s | Tobender Sturm | 1.523 |
| 2:45 | 2:46 | 1 s | Tobender Sturm | 1.247 |
| 2:47 | 2:47 | 0 s | Tobender Sturm | 1.247 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Jäger

Gesamt **870.403**, Laufzeit 10:00, Rest-Mana 2.477, Rest-HP 5.184. Effektive Angriffsheilung 0, Überheilung 1.872, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.129.597.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 572 | 572 | 437.122 | 0 | 0 |
| Salve | 10 | 10 | 108.264 | 4.140 | 0 |
| Feuerpfeil | 66 | 66 | 78.685 | 7.392 | 0 |
| Seelenbegleiter | 2 | 897 | 75.671 | 264 | 0 |
| Präzisionsschuss | 11 | 11 | 62.829 | 11.979 | 0 |
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

Gesamt **555.158**, Laufzeit 10:00, Rest-Mana 5.437, Rest-HP 9.475. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.444.842.

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

Gesamt **933.899**, Laufzeit 10:00, Rest-Mana 300, Rest-HP 4.141. Effektive Angriffsheilung 0, Überheilung 3.491, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.066.101.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 371 | 371 | 363.763 | 18.921 | 0 |
| Lichtblitz | 144 | 144 | 197.525 | 21.456 | 0 |
| Auto-Attack | 227 | 227 | 176.271 | 0 | 0 |
| Luminus | 60 | 60 | 52.524 | 1.320 | 0 |
| Ätherregen | 5 | 20 | 34.909 | 1.195 | 0 |
| Urteil des Himmels | 12 | 24 | 27.813 | 3.444 | 0 |
| Heiliges Kreuz | 11 | 11 | 21.139 | 3.124 | 0 |
| Eislanze | 14 | 14 | 19.672 | 2.170 | 0 |
| Schwerter des Lichtes | 10 | 10 | 17.958 | 2.570 | 0 |
| Heilige Vernichtung | 2 | 2 | 7.244 | 674 | 0 |
| Licht kristallenes Gefängnis | 5 | 5 | 6.384 | 635 | 0 |
| Aurora Wellen | 1 | 1 | 2.261 | 375 | 0 |
| Astralkörper | 1 | 1 | 2.211 | 363 | 0 |
| Göttliche Nova | 1 | 1 | 2.208 | 354 | 0 |
| Strafendes Licht | 1 | 1 | 2.016 | 316 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:11. Erstmals wirklich 0 Mana: 2:18, insgesamt 8 Ereignisse mit vollständig ausgegebenem Mana. 725 Phasen mit mindestens einem zu teuren bereiten Skill; darin 498 tatsächliche Mana-Wartepausen mit zusammen 277 Sekunden und maximal 0.93 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 2:18, 3:28, 4:07, 4:13, 4:49, 5:28, 7:45, 9:28.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:11 | 1:12 | 0 s | Energieschlag | 4 |
| 1:13 | 1:13 | 0 s | Energieschlag | 9 |
| 1:14 | 1:14 | 1 s | Energieschlag | 9 |
| 1:17 | 1:17 | 0 s | Energieschlag | 14 |
| 1:19 | 1:19 | 0 s | Energieschlag | 19 |
| 1:20 | 1:21 | 1 s | Luminus | 19 |
| 1:22 | 1:23 | 0 s | Energieschlag | 2 |
| 1:23 | 1:24 | 0 s | Energieschlag | 2 |
| 1:25 | 1:26 | 0 s | Energieschlag | 7 |
| 1:26 | 1:27 | 1 s | Energieschlag | 7 |
| 1:27 | 1:27 | 1 s | Strafendes Licht | 212 |
| 1:28 | 1:28 | 0 s | Strafendes Licht | 161 |
| 1:28 | 1:29 | 1 s | Strafendes Licht | 12 |
| 1:29 | 1:30 | 1 s | Strafendes Licht | 12 |
| 1:30 | 1:30 | 0 s | Urteil des Himmels | 113 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Ritualist

Gesamt **972.914**, Laufzeit 10:00, Rest-Mana 237, Rest-HP 4.057. Effektive Angriffsheilung 1.749, Überheilung 2.764, HP-Regeneration 42.755, Lebenspreise 44.148. Rest-Seelen 12, Rest-Wut 0. Gegner-Restleben 9.027.086.

Große Kombos: soulShackles: 7.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 399 | 399 | 314.058 | 0 | 0 |
| Morrak´s Meister | 2 | 591 | 199.400 | 0 | 0 |
| Feuerball | 129 | 129 | 182.680 | 19.221 | 0 |
| Dunkler Impuls | 107 | 107 | 112.035 | 6.955 | 0 |
| Seelenqual | 51 | 51 | 56.114 | 3.417 | 0 |
| Feuer der Verdammten | 10 | 67 | 41.478 | 5.030 | 0 |
| Schrei der Unterwelt | 8 | 8 | 22.322 | 0 | 0 |
| Lebenssauger | 12 | 12 | 15.654 | 4.248 | 1.749 |
| Sturm des Feuers | 6 | 6 | 9.243 | 1.086 | 0 |
| Seelenfessel | 7 | 7 | 8.103 | 665 | 0 |
| Meteoritenschauer | 1 | 6 | 6.896 | 2.608 | 0 |
| Seelenplage | 3 | 3 | 4.930 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:05. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 516 Phasen mit mindestens einem zu teuren bereiten Skill; darin 415 tatsächliche Mana-Wartepausen mit zusammen 253 Sekunden und maximal 0.92 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:05 | 0:06 | 0 s | Seelenernte | 285 |
| 0:06 | 0:06 | 0 s | Seelenernte | 329 |
| 0:06 | 0:07 | 1 s | Seelenernte | 264 |
| 1:36 | 1:37 | 1 s | Seelenernte | 61 |
| 1:37 | 1:38 | 1 s | Seelenernte | 61 |
| 1:38 | 1:39 | 0 s | Feuerball | 61 |
| 1:44 | 1:44 | 0 s | Sturm des Feuers | 85 |
| 1:44 | 1:44 | 0 s | Feuer der Verdammten | 85 |
| 1:44 | 1:45 | 0 s | Feuer der Verdammten | 20 |
| 1:45 | 1:46 | 1 s | Feuer der Verdammten | 33 |
| 1:46 | 1:47 | 1 s | Feuer der Verdammten | 33 |
| 1:47 | 1:48 | 0 s | Feuer der Verdammten | 33 |
| 1:48 | 1:49 | 1 s | Feuer der Verdammten | 78 |
| 1:49 | 1:49 | 0 s | Feuer der Verdammten | 78 |
| 1:50 | 1:50 | 1 s | Feuer der Verdammten | 13 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 1:34 | 1:35 | 1 s | Cooldowns/Voraussetzungen |
| 3:03 | 3:04 | 1 s | Cooldowns/Voraussetzungen |
| 4:34 | 4:35 | 1 s | Cooldowns/Voraussetzungen |
| 6:04 | 6:05 | 1 s | Cooldowns/Voraussetzungen |
| 7:34 | 7:35 | 1 s | Cooldowns/Voraussetzungen |
| 7:36 | 7:37 | 1 s | Cooldowns/Voraussetzungen |
| 9:05 | 9:06 | 1 s | Cooldowns/Voraussetzungen |
| 9:06 | 9:07 | 1 s | Cooldowns/Voraussetzungen |

## Schamane

Gesamt **602.263**, Laufzeit 10:00, Rest-Mana 222, Rest-HP 4.637. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.397.737.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 476 | 476 | 299.261 | 24.276 | 0 |
| Auto-Attack | 311 | 311 | 149.585 | 0 | 0 |
| Eisranken | 25 | 125 | 26.393 | 3.950 | 0 |
| Beben | 18 | 18 | 23.454 | 3.780 | 0 |
| Rotier Schlag | 21 | 21 | 22.575 | 3.213 | 0 |
| Erdbeben | 10 | 10 | 18.087 | 2.310 | 0 |
| Kristallisierte Wasserspähre | 20 | 20 | 16.074 | 1.940 | 0 |
| Feuerlanze | 15 | 15 | 15.521 | 2.355 | 0 |
| Windfesseln | 14 | 14 | 13.338 | 1.918 | 0 |
| Infernal Zyklon | 1 | 6 | 4.408 | 746 | 0 |
| Mächtiger Doppelschlag | 2 | 2 | 4.380 | 614 | 0 |
| Himmelsbrecher | 1 | 2 | 3.482 | 466 | 0 |
| Gezielter Blitz | 2 | 2 | 3.323 | 614 | 0 |
| Vakuumimpuls | 1 | 1 | 2.384 | 489 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:08. Erstmals wirklich 0 Mana: 6:31, insgesamt 1 Ereignisse mit vollständig ausgegebenem Mana. 810 Phasen mit mindestens einem zu teuren bereiten Skill; darin 657 tatsächliche Mana-Wartepausen mit zusammen 242 Sekunden und maximal 0.55 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 6:31.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:08 | 1:08 | 0 s | Mächtiger Doppelschlag | 141 |
| 1:09 | 1:09 | 1 s | Mächtiger Doppelschlag | 296 |
| 1:09 | 1:10 | 1 s | Mächtiger Doppelschlag | 245 |
| 1:10 | 1:11 | 1 s | Mächtiger Doppelschlag | 194 |
| 1:11 | 1:11 | 1 s | Mächtiger Doppelschlag | 143 |
| 1:12 | 1:12 | 1 s | Mächtiger Doppelschlag | 298 |
| 1:12 | 1:12 | 0 s | Mächtiger Doppelschlag | 140 |
| 1:12 | 1:13 | 1 s | Mächtiger Doppelschlag | 89 |
| 1:13 | 1:14 | 1 s | Mächtiger Doppelschlag | 38 |
| 1:14 | 1:14 | 0 s | Mächtiger Doppelschlag | 38 |
| 1:15 | 1:15 | 0 s | Mächtiger Doppelschlag | 244 |
| 1:15 | 1:16 | 1 s | Mächtiger Doppelschlag | 193 |
| 1:16 | 1:16 | 1 s | Mächtiger Doppelschlag | 142 |
| 1:17 | 1:17 | 1 s | Mächtiger Doppelschlag | 91 |
| 1:17 | 1:18 | 1 s | Mächtiger Doppelschlag | 40 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Seelenjäger

Gesamt **773.873**, Laufzeit 10:00, Rest-Mana 407, Rest-HP 4.125. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.226.127.

Große Kombos: soulCollectionWindows: 8; spectralFinishers: 1.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 776 | 776 | 501.917 | 0 | 0 |
| Feuerpfeil | 64 | 64 | 68.787 | 7.168 | 0 |
| Seelensammler | 79 | 79 | 60.656 | 3.792 | 0 |
| Doppelschuss | 23 | 23 | 56.249 | 6.739 | 0 |
| Explosionspfeil | 11 | 33 | 44.840 | 5.929 | 0 |
| Kopfschuss | 8 | 8 | 26.637 | 4.296 | 0 |
| Kettenschuss | 11 | 11 | 8.699 | 407 | 0 |
| Hinterhältiger Pfeil | 6 | 6 | 4.265 | 108 | 0 |
| Spektralketten | 1 | 1 | 1.823 | 439 | 0 |
| Seelenschuss | 8 | 0 | 0 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:17. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 687 Phasen mit mindestens einem zu teuren bereiten Skill; darin 629 tatsächliche Mana-Wartepausen mit zusammen 141 Sekunden und maximal 0.67 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:17 | 1:18 | 0 s | Seelensammler | 7 |
| 1:18 | 1:19 | 1 s | Seelensammler | 40 |
| 1:19 | 1:19 | 0 s | Seelensammler | 40 |
| 1:20 | 1:20 | 0 s | Spektralketten | 40 |
| 1:20 | 1:21 | 0 s | Spektralketten | 40 |
| 1:21 | 1:21 | 0 s | Spektralketten | 168 |
| 1:22 | 1:22 | 0 s | Doppelschuss | 168 |
| 1:22 | 1:22 | 1 s | Doppelschuss | 56 |
| 1:23 | 1:23 | 0 s | Doppelschuss | 56 |
| 1:24 | 1:24 | 0 s | Doppelschuss | 185 |
| 1:24 | 1:24 | 0 s | Doppelschuss | 185 |
| 1:25 | 1:25 | 0 s | Doppelschuss | 185 |
| 1:26 | 1:26 | 0 s | Doppelschuss | 185 |
| 1:26 | 1:26 | 0 s | Doppelschuss | 185 |
| 1:35 | 1:35 | 0 s | Explosionspfeil | 166 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Schurke

Gesamt **651.609**, Laufzeit 10:00, Rest-Mana 135, Rest-HP 4.766. Effektive Angriffsheilung 0, Überheilung 673, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.348.391.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 760 | 760 | 408.424 | 0 | 0 |
| Wirbelnde Klinge | 8 | 8 | 45.176 | 5.758 | 0 |
| Brecher des Lichts | 14 | 14 | 43.292 | 5.405 | 0 |
| Klingentornado | 8 | 8 | 32.621 | 3.740 | 0 |
| Dunkler Schlag | 39 | 39 | 31.840 | 2.497 | 0 |
| Kunai Todesstoß | 36 | 36 | 21.146 | 0 | 0 |
| Sturmklinge | 10 | 10 | 18.694 | 3.249 | 0 |
| Überschallklinge | 6 | 6 | 12.560 | 2.276 | 0 |
| Blutklinge | 8 | 8 | 10.355 | 2.669 | 0 |
| Schattenfalle | 7 | 7 | 8.298 | 1.086 | 0 |
| Tödlicher Tanz | 1 | 1 | 8.067 | 914 | 0 |
| Schattenschlag | 4 | 4 | 5.754 | 873 | 0 |
| Schattendolch | 4 | 4 | 5.382 | 799 | 0 |
| Dunkler Schleier | 7 | 0 | 0 | 1.046 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:03. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 804 Phasen mit mindestens einem zu teuren bereiten Skill; darin 717 tatsächliche Mana-Wartepausen mit zusammen 180 Sekunden und maximal 5.74 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:03 | 0:03 | 0 s | Blutklinge | 47 |
| 0:03 | 0:04 | 1 s | Blutklinge | 47 |
| 0:04 | 0:05 | 0 s | Blutklinge | 47 |
| 0:05 | 0:05 | 0 s | Blutklinge | 47 |
| 0:06 | 0:06 | 0 s | Blutklinge | 180 |
| 0:06 | 0:06 | 1 s | Blutklinge | 116 |
| 0:07 | 0:07 | 0 s | Blutklinge | 116 |
| 0:08 | 0:08 | 0 s | Blutklinge | 116 |
| 0:08 | 0:08 | 0 s | Blutklinge | 116 |
| 0:09 | 0:09 | 0 s | Blutklinge | 249 |
| 0:09 | 0:10 | 0 s | Blutklinge | 249 |
| 0:10 | 0:10 | 0 s | Blutklinge | 249 |
| 0:11 | 0:11 | 0 s | Blutklinge | 249 |
| 0:11 | 0:11 | 0 s | Blutklinge | 249 |
| 1:10 | 1:10 | 0 s | Tödlicher Tanz | 423 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 1:31 | 1:36 | 4 s | Mana |
| 3:01 | 3:03 | 2 s | Mana |
| 3:04 | 3:06 | 2 s | Mana |
| 4:33 | 4:39 | 6 s | Mana |
| 4:39 | 4:41 | 2 s | Mana |
| 6:03 | 6:06 | 2 s | Mana |
| 6:07 | 6:09 | 2 s | Mana |
| 7:36 | 7:39 | 3 s | Mana |
| 7:39 | 7:44 | 5 s | Mana |
| 9:09 | 9:12 | 3 s | Mana |
| 9:12 | 9:17 | 5 s | Mana |

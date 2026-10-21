# All Class Timed Damage – 600-Sekunden-Test

Aktueller Basisvergleich: permanente Passive und temporäre Klassenbeschwörungen, ohne optionale Eigen- oder Gruppenbuffs. Prozentanteile beziehen sich auf den Gesamtschaden einschließlich Beschwörungen und sind keine vorgegebenen Quoten. Automatische Zusatzangriffe durch eigene Auto-Attacks zählen zur Auto-Attack-Seite. Der Test verwendet seine offengelegte Standardpriorität, keine freie globale Rotationsoptimierung. Die beiden aktuellen Buff-Vergleiche stehen direkt unter der Haupttabelle.

Berechnungsstand: 2026-10-20 T 14:42:07.930 Z; Eingabedateien und SHA-256-Prüfsummen sind im JSON gespeichert.

- Abenteurer aktualisiert: neue permanente Passive und Zweihandschwert, Kreuzhieb und Blutender Schnitt enthalten. Reguläre Pets sind noch nicht modelliert; Wilde Bindung und Blutgeruch liefern deshalb keinen Pet-Zusatzschaden. Beharrlichkeit löst am nicht angreifenden Dummy nicht aus; Lebenstransfer ist reine Begleiterheilung und entfällt. Rudelangriff ist trotz bestätigtem Grundschaden vorläufig ausgeschlossen, weil Mana, Cooldown und Vorbereitungs-/Castdauer noch nicht festgelegt sind. Dieser Wert ist daher ein Teilvergleich ohne Rudelangriff und ohne reguläre Pets.
- Schurke: R 6-Freischaltung vorausgesetzt, 1,8 zusätzlicher P-Angriff je Ambush neben Stärke. Bereits in den Ausgangswerten enthaltene Spezialattribut-Beiträge werden nicht doppelt addiert.
- Blutiger Durchbruch: drei Treffer teilen den Skill-Grundschaden 1:2:3 und addieren jeweils den vollen aktuellen P-Angriff. Vorläufige Trefferzeiten 0/1/2 Sekunden nach Castende; einmalig 5 Wut beim ersten erfolgreichen Schadenstreffer. Keine zusätzliche Animationssperre im Test.
- Gladiator: Energie der Wut hält auf Maximalstufe 59 Sekunden bei 58 Sekunden Cooldown nach 0,1 Sekunden Cast. Der Test erneuert diesen notwendigen Wutaufbau-Buff bei Verfügbarkeit mit Priorität, auch bei bereits aktiver Wirkung und genügend Wut. Kein zusätzlicher Wutpunkt bei Aktivierung. Ausbruch der Wut hat 130 Sekunden Cooldown und 64 Sekunden Buffdauer.
- Aktuelle Attributregeln: Luminet und Ritualist nutzen ausschließlich Intelligenz mit 1,8 M-Angriff pro Punkt; Faith und Victim geben keinen zusätzlichen Angriff. Reaper gewährt dynamisch Intelligenz nach aktuellem Seelenvorrat. Morraks Anwenderbonus beträgt während seiner Beschwörung +5 Intelligenz und +5 Willenskraft. Das Lichtschwertfeld gewährt Intelligenz während des Aufenthalts.
- 600 Sekunden je Klasse, Level 60/R 6, permanente Passive und temporäre Klassenbeschwörungen. Die Haupttabelle verwendet einen 10.000.000-HP-Dummy ohne Gegenangriffe, Rüstung, Verfehlen oder gegnerische Regeneration. Ein interner Zwei-Millionen-Kontrolllauf bleibt nur für technische Prüfungen erhalten; die sichtbare Tabelle zeigt stattdessen prozentuale Schadensanteile. Ritualist startet mit 100 Seelen, Gladiator mit 100 Wut, alle Cooldowns bereit.
- Auto-Attacks werden bei Zauberstabklassen (Heiler/Kräuterkundler/Luminet/Ritualist) als magisch mit dem aktuellen M-Angriff, bei den übrigen Waffenklassen als physisch mit aktuellem P-Angriff gerechnet. Dies ist die explizite Waffen-/Schadensart-Annahme dieses Tests.
- 100 Angriffsgeschwindigkeitspunkte entsprechen bei allen Magiern einschließlich Kräuterkundler sowie Jäger/Seelenjäger 1,1 Basisaktionen pro Sekunde, bei Nahkampfklassen 1,3. Alle Spielerklassen verwenden dieselbe Sättigungskurve und mindestens 0,5 Sekunden Abstand zwischen Auto-Attacks (höchstens zwei pro Sekunde). Waffenabzüge und Boni werden vor der Kurve gesammelt. MP-Regeneration alle 3 Sekunden, HP-Regeneration alle 2 Sekunden. Zeitschritt 10 ms.
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

| Klasse | Schaden | DPS | Skills | Auto-Attacks | Beschwörungen | Ø pro Minute | Erstmals Skill zu teuer | Erstmals Mana=0 | Mana-Wartephasen | Mana-Wartezeit gesamt | Längste Mana-Pause | Anteile AA / Skills / Beschw. |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: | --- |
| Ritualist | **768.805** | 1.281 | 445.696 | 201.330 | 121.778 | 76.880 | 1:36 | — | 324 | 288 s | 1.21 s | 26.2 % / 58.0 % / 15.8 % |
| Jäger | **644.382** | 1.074 | 318.197 | 226.152 | 100.033 | 64.438 | — | — | 0 | 0 s | 0.00 s | 35.1 % / 49.4 % / 15.5 % |
| Luminet | **643.870** | 1.073 | 470.922 | 172.948 | 0 | 64.387 | 6:29 | — | 75 | 64 s | 1.21 s | 26.9 % / 73.1 % / 0.0 % |
| Gladiator | **606.878** | 1.011 | 261.399 | 345.479 | 0 | 60.688 | 1:25 | — | 251 | 158 s | 1.01 s | 56.9 % / 43.1 % / 0.0 % |
| Druide | **595.737** | 993 | 368.191 | 125.030 | 102.516 | 59.574 | 0:05 | 0:04 | 1 | 0 s | 0.40 s | 21.0 % / 61.8 % / 17.2 % |
| Kräuterkundler | **550.782** | 918 | 355.543 | 195.240 | 0 | 55.078 | 1:17 | — | 362 | 323 s | 1.21 s | 35.4 % / 64.6 % / 0.0 % |
| Butcher | **537.911** | 897 | 211.986 | 325.926 | 0 | 53.791 | 0:01 | — | 521 | 340 s | 1.01 s | 60.6 % / 39.4 % / 0.0 % |
| Seelenjäger | **515.499** | 859 | 235.602 | 279.896 | 0 | 51.550 | 1:15 | — | 518 | 284 s | 0.90 s | 54.3 % / 45.7 % / 0.0 % |
| Heiler | **503.347** | 839 | 358.719 | 144.627 | 0 | 50.335 | — | — | 0 | 0 s | 0.00 s | 28.7 % / 71.3 % / 0.0 % |
| Schamane | **494.442** | 824 | 285.307 | 209.136 | 0 | 49.444 | 0:01 | — | 505 | 338 s | 1.01 s | 42.3 % / 57.7 % / 0.0 % |
| Schurke | **482.079** | 803 | 250.203 | 231.876 | 0 | 48.208 | 1:31 | — | 468 | 259 s | 5.30 s | 48.1 % / 51.9 % / 0.0 % |
| Abenteurer | **451.616** | 753 | 188.601 | 263.015 | 0 | 45.162 | — | — | 0 | 0 s | 0.00 s | 58.2 % / 41.8 % / 0.0 % |
| Ritter | **421.476** | 702 | 214.948 | 206.527 | 0 | 42.148 | — | — | 0 | 0 s | 0.00 s | 49.0 % / 51.0 % / 0.0 % |

## Zahlen richtig lesen und Heiler-Ergebnis nachvollziehen

**Ein zu teurer bereiter Skill bedeutet weder null Mana noch null Leben.** Die Summe der Mana-Wartezeit besteht aus vielen kurzen Pausen; sie ist keine zusammenhängende Regeneration bis zum vollen Pool. Ressourcen werden fortlaufend genutzt. Die Cooldowns bleiben dauerhaft aktiv und werden zwischen Minuten nicht zurückgesetzt. Nur beim Start sind alle Skills gleichzeitig bereit.

Butcher: erster zu teurer Skill 0:01; 574 Phasen mit mindestens einem nicht bezahlbaren Skill. Längste tatsächliche Mana-Pause 1.01 Sekunden.

Luminet: 75 Mana-Wartepausen, zusammen 63.71 Sekunden.

Heiler: Energieschlag auf Stufe 5, Cooldown 2.2 Sekunden nach Castende. 249 Anwendungen erzeugen 189.062 Schaden, eigene Auto-Attacks 144.627. Potenzielle MP-Regeneration 252 alle 3 Sekunden; durchschnittlicher Verbrauch 2.687 Mana pro Minute. Reine Heilzauber sind im Schadenstest ausgeschlossen.

## Mana-Pool, Verbrauch und Regeneration

Basispool und permanente MP-Regeneration ohne optionale Eigenbuffs. Während aktiver Beschwörungen können einzelne Werte temporär abweichen. Potenzielle Regeneration ist am vollen Pool begrenzt.

| Klasse | Mana-Pool | MP-Reg/Tick | Mögliche MP-Reg/min | Verbrauch/min | Tatsächlich regeneriert/min |
| --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 5.051 | 178 | 3.562 | 2.942 | 2.936 |
| Butcher | 3.841 | 142 | 2.842 | 3.187 | 2.842 |
| Druide | 6.086 | 193 | 3.852 | 4.399 | 3.852 |
| Gladiator | 4.307 | 156 | 3.112 | 3.484 | 3.112 |
| Heiler | 6.012 | 252 | 5.048 | 2.687 | 2.687 |
| Kräuterkundler | 5.643 | 193 | 3.868 | 4.411 | 3.868 |
| Jäger | 4.431 | 160 | 3.202 | 3.502 | 3.202 |
| Ritter | 4.603 | 175 | 3.492 | 3.832 | 3.492 |
| Luminet | 5.387 | 237 | 4.742 | 5.243 | 4.742 |
| Ritualist | 5.137 | 198 | 3.962 | 4.516 | 4.043 |
| Schamane | 5.073 | 194 | 3.875 | 4.360 | 3.875 |
| Seelenjäger | 3.723 | 133 | 2.662 | 3.014 | 2.662 |
| Schurke | 3.975 | 138 | 2.752 | 3.096 | 2.752 |

## Sensitivität: Mana für den stärksten bereiten Angriff zurückhalten

Der Hauptlauf verwendet die erste bezahlbare priorisierte Aktion. Der Zusatzlauf wartet bei fehlendem Mana für die höchste Priorität mit Auto-Attacks, statt billigere Skills zu wirken. Das ist eine andere Steuerung, keine geänderte Klasse.

| Klasse | Hauptlauf | Mit Manareserve | Unterschied |
| --- | ---: | ---: | ---: |
| Abenteurer | 451.616 | 451.616 | 0 |
| Butcher | 537.911 | 503.655 | -34.256 |
| Druide | 595.737 | 595.737 | 0 |
| Gladiator | 606.878 | 599.399 | -7.479 |
| Heiler | 503.347 | 503.347 | 0 |
| Kräuterkundler | 550.782 | 538.658 | -12.125 |
| Jäger | 644.382 | 644.382 | 0 |
| Ritter | 421.476 | 421.476 | 0 |
| Luminet | 643.870 | 643.639 | -231 |
| Ritualist | 768.805 | 746.288 | -22.517 |
| Schamane | 494.442 | 478.440 | -16.003 |
| Seelenjäger | 515.499 | 562.529 | 47.031 |
| Schurke | 482.079 | 489.481 | 7.402 |

Ein Mana-Hindernis bedeutet: mindestens ein bereiter priorisierter Skill ist nicht bezahlbar. Das ist nicht zwangsläufig ein leerer Pool oder Stillstand; günstigere Skills und Auto-Attacks bleiben erlaubt. Mana-Wartezeit ist die Summe vieler einzelner Zeitstücke ohne bezahlbare gewählte Skillaktion; Auto-Attacks gehen weiter. Sie ist keine Zeit bis zum vollen Mana-Pool und keine HP-Ausfallzeit. Die Zahl der Mana-Wartephasen zählt diese tatsächlich getrennten Pausen. Andere Wartezeiten wie Tarnrückkehr sind getrennt erfasst.

## Schaden pro Minute

| Klasse | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Ø |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 54.035 | 44.641 | 43.437 | 43.026 | 45.043 | 42.563 | 47.840 | 43.428 | 42.563 | 45.043 | 45.162 |
| Butcher | 65.463 | 51.532 | 53.315 | 54.364 | 50.918 | 52.941 | 55.308 | 48.260 | 51.655 | 54.157 | 53.791 |
| Druide | 71.400 | 55.545 | 59.927 | 54.834 | 62.565 | 61.640 | 52.015 | 62.401 | 55.226 | 60.185 | 59.574 |
| Gladiator | 78.481 | 59.387 | 59.132 | 58.174 | 55.222 | 57.517 | 64.695 | 55.555 | 61.340 | 57.375 | 60.688 |
| Heiler | 55.515 | 47.076 | 49.472 | 51.698 | 48.400 | 50.393 | 51.215 | 50.903 | 48.525 | 50.152 | 50.335 |
| Kräuterkundler | 76.371 | 57.600 | 56.900 | 51.219 | 51.421 | 52.109 | 51.814 | 52.005 | 50.781 | 50.561 | 55.078 |
| Jäger | 72.900 | 62.781 | 63.408 | 62.781 | 65.037 | 63.209 | 61.930 | 62.152 | 64.406 | 65.776 | 64.438 |
| Ritter | 47.601 | 43.084 | 39.020 | 43.130 | 43.523 | 38.558 | 43.523 | 38.188 | 43.084 | 41.765 | 42.148 |
| Luminet | 77.309 | 60.496 | 67.651 | 64.239 | 66.879 | 62.175 | 67.247 | 58.416 | 63.193 | 56.263 | 64.387 |
| Ritualist | 106.043 | 83.964 | 71.752 | 75.576 | 75.782 | 55.348 | 77.974 | 74.530 | 69.876 | 77.961 | 76.880 |
| Schamane | 71.844 | 47.816 | 45.574 | 46.500 | 47.662 | 46.013 | 48.412 | 46.491 | 47.462 | 46.668 | 49.444 |
| Seelenjäger | 71.009 | 55.681 | 46.464 | 48.661 | 50.472 | 48.661 | 48.584 | 49.211 | 49.922 | 46.834 | 51.550 |
| Schurke | 67.185 | 49.545 | 51.024 | 40.449 | 48.850 | 43.096 | 43.578 | 50.562 | 46.380 | 41.407 | 48.208 |

## Abenteurer

Gesamt **451.616**, Laufzeit 10:00, Rest-Mana 4.995, Rest-HP 5.642. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.548.384.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 557 | 557 | 263.015 | 0 | 0 |
| Wirbelnde Klinge | 11 | 11 | 58.531 | 7.680 | 0 |
| Rudelangriff | 12 | 12 | 44.054 | 9.033 | 0 |
| Kreuzhieb | 18 | 18 | 37.573 | 4.844 | 0 |
| Sprungschlag | 17 | 17 | 35.329 | 6.462 | 0 |
| Blutender Schnitt | 15 | 15 | 13.113 | 1.397 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Butcher

Gesamt **537.911**, Laufzeit 10:00, Rest-Mana 393, Rest-HP 5.291. Effektive Angriffsheilung 0, Überheilung 159, HP-Regeneration 4.444, Lebenspreise 4.444. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.462.089.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 455 | 455 | 325.926 | 0 | 0 |
| Aufgeladener Schlag | 22 | 22 | 34.569 | 4.774 | 0 |
| Mächtiger Hieb | 20 | 20 | 28.986 | 3.600 | 0 |
| Rotier Schlag | 21 | 21 | 27.517 | 3.213 | 0 |
| Schmetterschlag | 11 | 11 | 22.928 | 3.773 | 0 |
| Schädelspalter | 7 | 7 | 22.906 | 4.459 | 0 |
| Erdbeben | 11 | 11 | 18.121 | 2.541 | 0 |
| Abräumer | 13 | 13 | 16.371 | 1.768 | 0 |
| Energieentladung | 4 | 4 | 10.837 | 0 | 0 |
| Dämonische Schockwelle | 5 | 5 | 9.337 | 1.400 | 0 |
| Zorn des Henkers | 2 | 2 | 7.073 | 1.412 | 0 |
| Erdbrecher | 1 | 1 | 6.716 | 2.396 | 0 |
| Schockwelle der Regeneration | 4 | 4 | 6.625 | 2.532 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:01. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 574 Phasen mit mindestens einem zu teuren bereiten Skill; darin 521 tatsächliche Mana-Wartepausen mit zusammen 340 Sekunden und maximal 1.01 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:01 | 0:01 | 0 s | Schmetterschlag | 102 |
| 0:01 | 0:02 | 1 s | Schmetterschlag | 102 |
| 0:03 | 0:03 | 0 s | Schmetterschlag | 244 |
| 0:03 | 0:04 | 1 s | Schmetterschlag | 13 |
| 0:04 | 0:05 | 1 s | Schmetterschlag | 13 |
| 0:05 | 0:06 | 0 s | Schmetterschlag | 13 |
| 0:06 | 0:07 | 1 s | Schmetterschlag | 2 |
| 0:07 | 0:08 | 1 s | Schmetterschlag | 2 |
| 0:08 | 0:09 | 1 s | Schmetterschlag | 2 |
| 0:09 | 0:10 | 1 s | Schmetterschlag | 8 |
| 0:11 | 0:11 | 1 s | Schmetterschlag | 8 |
| 0:12 | 0:12 | 1 s | Schmetterschlag | 150 |
| 0:13 | 0:14 | 1 s | Schmetterschlag | 150 |
| 0:14 | 0:15 | 1 s | Schmetterschlag | 150 |
| 0:15 | 0:16 | 1 s | Schmetterschlag | 13 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:01 | 0:02 | 1 s | Mana |
| 0:03 | 0:04 | 1 s | Mana |
| 0:06 | 0:07 | 1 s | Mana |
| 0:09 | 0:10 | 1 s | Mana |
| 0:15 | 0:16 | 1 s | Mana |
| 0:21 | 0:22 | 1 s | Mana |
| 0:24 | 0:25 | 1 s | Mana |
| 0:33 | 0:34 | 1 s | Mana |
| 0:36 | 0:37 | 1 s | Mana |
| 0:46 | 0:47 | 1 s | Mana |
| 0:51 | 0:52 | 1 s | Mana |
| 0:56 | 0:57 | 1 s | Mana |
| 0:58 | 0:59 | 1 s | Mana |
| 1:04 | 1:05 | 1 s | Mana |
| 1:09 | 1:10 | 1 s | Mana |
| 1:12 | 1:13 | 1 s | Mana |
| 1:18 | 1:19 | 1 s | Mana |
| 1:24 | 1:25 | 1 s | Mana |
| 1:32 | 1:33 | 1 s | Mana |
| 1:37 | 1:38 | 1 s | Mana |

## Druide

Gesamt **595.737**, Laufzeit 10:00, Rest-Mana 620, Rest-HP 4.428. Effektive Angriffsheilung 0, Überheilung 2.888, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.404.263.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 227 | 227 | 134.361 | 5.902 | 0 |
| Auto-Attack | 373 | 373 | 125.030 | 0 | 0 |
| Naturgeist | 2 | 658 | 102.516 | 264 | 0 |
| Himmelsbrecher | 6 | 12 | 84.284 | 18.852 | 0 |
| Eisranken | 27 | 135 | 30.210 | 4.266 | 0 |
| Ätherregen | 5 | 20 | 28.878 | 1.195 | 0 |
| Vakuumimpuls | 7 | 14 | 27.651 | 3.252 | 0 |
| Windschlitzer | 15 | 15 | 22.174 | 3.320 | 0 |
| Windfesseln | 19 | 19 | 20.267 | 2.473 | 0 |
| Eislanze | 15 | 15 | 16.723 | 2.325 | 0 |
| Manaexplosion | 2 | 2 | 2.359 | 2.065 | 0 |
| Bannmagie | 2 | 2 | 1.282 | 72 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:05. Erstmals wirklich 0 Mana: 0:04, insgesamt 2 Ereignisse mit vollständig ausgegebenem Mana. 1 Phasen mit mindestens einem zu teuren bereiten Skill; darin 1 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.40 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 0:04, 6:05.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:05 | 0:06 | 0 s | Energieschlag | 0 |

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Gladiator

Gesamt **606.878**, Laufzeit 10:00, Rest-Mana 589, Rest-HP 6.673. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 14. Gegner-Restleben 9.393.122.

Große Kombos: rageOutbursts: 5.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 471 | 471 | 345.479 | 0 | 0 |
| Blutiger Durchbruch | 5 | 15 | 37.867 | 10.800 | 0 |
| Sprungschlag | 16 | 16 | 37.466 | 6.464 | 0 |
| Mächtiger Hieb | 22 | 22 | 32.296 | 3.960 | 0 |
| Schmetterschlag | 14 | 14 | 29.455 | 4.802 | 0 |
| Holzspalter | 16 | 16 | 24.368 | 3.136 | 0 |
| Kriegerischer Ansturm | 11 | 11 | 23.452 | 3.839 | 0 |
| Ausbruch der Wut | 5 | 5 | 23.252 | 0 | 0 |
| Wutklinge | 10 | 10 | 21.272 | 0 | 0 |
| Sturm der Wut | 8 | 8 | 15.993 | 0 | 0 |
| Wutexplosion | 6 | 6 | 15.979 | 0 | 0 |
| Energie der Wut | 11 | 0 | 0 | 1.837 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:25. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 277 Phasen mit mindestens einem zu teuren bereiten Skill; darin 251 tatsächliche Mana-Wartepausen mit zusammen 158 Sekunden und maximal 1.01 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:25 | 1:25 | 0 s | Schmetterschlag | 286 |
| 1:26 | 1:26 | 0 s | Schmetterschlag | 286 |
| 1:26 | 1:27 | 1 s | Schmetterschlag | 106 |
| 1:27 | 1:28 | 1 s | Schmetterschlag | 261 |
| 1:29 | 1:29 | 1 s | Schmetterschlag | 261 |
| 2:43 | 2:43 | 0 s | Blutiger Durchbruch | 1.389 |
| 2:44 | 2:44 | 1 s | Blutiger Durchbruch | 1.389 |
| 2:45 | 2:45 | 1 s | Blutiger Durchbruch | 1.545 |
| 2:46 | 2:47 | 1 s | Blutiger Durchbruch | 1.545 |
| 2:47 | 2:47 | 0 s | Blutiger Durchbruch | 1.545 |
| 2:48 | 2:49 | 1 s | Blutiger Durchbruch | 1.521 |
| 2:49 | 2:50 | 1 s | Blutiger Durchbruch | 1.521 |
| 2:50 | 2:51 | 1 s | Blutiger Durchbruch | 1.521 |
| 2:51 | 2:52 | 0 s | Blutiger Durchbruch | 1.676 |
| 2:52 | 2:52 | 1 s | Blutiger Durchbruch | 1.327 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:31 | 0:32 | 1 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:39 | 1 s | Cooldowns/Voraussetzungen |
| 0:40 | 0:41 | 1 s | Cooldowns/Voraussetzungen |
| 0:44 | 0:45 | 1 s | Cooldowns/Voraussetzungen |
| 0:47 | 0:48 | 1 s | Cooldowns/Voraussetzungen |
| 1:00 | 1:01 | 1 s | Cooldowns/Voraussetzungen |
| 1:14 | 1:15 | 1 s | Cooldowns/Voraussetzungen |
| 1:18 | 1:19 | 1 s | Cooldowns/Voraussetzungen |
| 1:22 | 1:23 | 1 s | Cooldowns/Voraussetzungen |
| 1:26 | 1:27 | 1 s | Mana |
| 1:30 | 1:31 | 1 s | Cooldowns/Voraussetzungen |
| 1:50 | 1:51 | 1 s | Cooldowns/Voraussetzungen |
| 1:53 | 1:54 | 1 s | Cooldowns/Voraussetzungen |
| 2:12 | 2:13 | 1 s | Cooldowns/Voraussetzungen |
| 2:14 | 2:15 | 1 s | Cooldowns/Voraussetzungen |
| 2:20 | 2:21 | 1 s | Cooldowns/Voraussetzungen |
| 2:26 | 2:27 | 1 s | Cooldowns/Voraussetzungen |
| 2:32 | 2:33 | 1 s | Cooldowns/Voraussetzungen |
| 2:48 | 2:49 | 1 s | Mana |
| 2:54 | 2:55 | 1 s | Mana |

## Heiler

Gesamt **503.347**, Laufzeit 10:00, Rest-Mana 6.012, Rest-HP 3.898. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.496.653.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 249 | 249 | 189.062 | 6.474 | 0 |
| Auto-Attack | 221 | 221 | 144.627 | 0 | 0 |
| Frostschauer | 14 | 70 | 66.134 | 7.588 | 0 |
| Eisranken | 27 | 135 | 34.747 | 4.266 | 0 |
| Kristallisierte Wasserspähre | 23 | 23 | 24.282 | 2.231 | 0 |
| Eislanze | 15 | 15 | 19.572 | 2.325 | 0 |
| Schwerter des Lichtes | 10 | 10 | 16.676 | 2.570 | 0 |
| Göttliche Nova | 4 | 4 | 8.246 | 1.416 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:03 | 0:04 | 1 s | Cooldowns/Voraussetzungen |
| 0:06 | 0:07 | 1 s | Cooldowns/Voraussetzungen |
| 0:08 | 0:09 | 1 s | Cooldowns/Voraussetzungen |
| 0:10 | 0:11 | 1 s | Cooldowns/Voraussetzungen |
| 0:13 | 0:14 | 1 s | Cooldowns/Voraussetzungen |
| 0:15 | 0:16 | 1 s | Cooldowns/Voraussetzungen |
| 0:17 | 0:18 | 1 s | Cooldowns/Voraussetzungen |
| 0:20 | 0:21 | 1 s | Cooldowns/Voraussetzungen |
| 0:22 | 0:23 | 1 s | Cooldowns/Voraussetzungen |
| 0:25 | 0:26 | 1 s | Cooldowns/Voraussetzungen |
| 0:27 | 0:28 | 1 s | Cooldowns/Voraussetzungen |
| 0:29 | 0:31 | 1 s | Cooldowns/Voraussetzungen |
| 0:32 | 0:33 | 1 s | Cooldowns/Voraussetzungen |
| 0:34 | 0:35 | 1 s | Cooldowns/Voraussetzungen |
| 0:36 | 0:38 | 1 s | Cooldowns/Voraussetzungen |
| 0:39 | 0:40 | 1 s | Cooldowns/Voraussetzungen |
| 0:41 | 0:42 | 1 s | Cooldowns/Voraussetzungen |
| 0:47 | 0:48 | 1 s | Cooldowns/Voraussetzungen |
| 0:48 | 0:49 | 1 s | Cooldowns/Voraussetzungen |
| 0:51 | 0:52 | 1 s | Cooldowns/Voraussetzungen |

## Kräuterkundler

Gesamt **550.782**, Laufzeit 10:00, Rest-Mana 218, Rest-HP 4.796. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.449.218.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 305 | 305 | 195.240 | 0 | 0 |
| Elektrisches Feld | 23 | 115 | 90.707 | 6.348 | 0 |
| Gezielter Blitz | 25 | 25 | 47.592 | 7.675 | 0 |
| Kugelblitz | 19 | 19 | 44.782 | 8.056 | 0 |
| Wasserfesseln | 43 | 43 | 37.674 | 2.537 | 0 |
| Geladener Nebel | 22 | 22 | 37.381 | 5.896 | 0 |
| Ewiges Eis | 22 | 22 | 30.341 | 4.136 | 0 |
| Windschlitzer | 19 | 19 | 28.312 | 4.085 | 0 |
| Eislanze | 22 | 22 | 27.899 | 3.410 | 0 |
| Tobender Sturm | 1 | 9 | 10.856 | 1.962 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:17. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 431 Phasen mit mindestens einem zu teuren bereiten Skill; darin 362 tatsächliche Mana-Wartepausen mit zusammen 323 Sekunden und maximal 1.21 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:17 | 1:18 | 1 s | Tobender Sturm | 1.317 |
| 1:19 | 1:19 | 1 s | Tobender Sturm | 1.510 |
| 1:20 | 1:21 | 1 s | Tobender Sturm | 1.510 |
| 1:21 | 1:22 | 1 s | Tobender Sturm | 1.704 |
| 1:22 | 1:23 | 1 s | Tobender Sturm | 1.704 |
| 1:23 | 1:25 | 1 s | Tobender Sturm | 1.549 |
| 1:25 | 1:26 | 1 s | Tobender Sturm | 1.742 |
| 1:26 | 1:26 | 0 s | Tobender Sturm | 1.318 |
| 1:26 | 1:27 | 1 s | Tobender Sturm | 1.259 |
| 1:28 | 1:29 | 1 s | Tobender Sturm | 1.453 |
| 1:29 | 1:30 | 1 s | Tobender Sturm | 1.453 |
| 1:31 | 1:31 | 1 s | Tobender Sturm | 1.646 |
| 1:32 | 1:32 | 1 s | Tobender Sturm | 1.646 |
| 1:32 | 1:33 | 0 s | Tobender Sturm | 1.378 |
| 1:33 | 1:33 | 0 s | Tobender Sturm | 1.264 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:04 | 0:05 | 1 s | Cooldowns/Voraussetzungen |
| 0:18 | 0:19 | 1 s | Cooldowns/Voraussetzungen |
| 0:20 | 0:21 | 1 s | Cooldowns/Voraussetzungen |
| 0:25 | 0:26 | 1 s | Cooldowns/Voraussetzungen |
| 0:28 | 0:29 | 1 s | Cooldowns/Voraussetzungen |
| 0:32 | 0:34 | 1 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:39 | 1 s | Cooldowns/Voraussetzungen |
| 0:45 | 0:46 | 1 s | Cooldowns/Voraussetzungen |
| 0:48 | 0:49 | 1 s | Cooldowns/Voraussetzungen |
| 0:52 | 0:53 | 1 s | Cooldowns/Voraussetzungen |
| 0:59 | 1:00 | 1 s | Cooldowns/Voraussetzungen |
| 1:03 | 1:04 | 1 s | Cooldowns/Voraussetzungen |
| 1:11 | 1:12 | 1 s | Cooldowns/Voraussetzungen |
| 1:12 | 1:14 | 1 s | Cooldowns/Voraussetzungen |
| 1:14 | 1:16 | 1 s | Cooldowns/Voraussetzungen |
| 1:17 | 1:18 | 1 s | Mana |
| 1:23 | 1:25 | 1 s | Mana |
| 1:26 | 1:27 | 1 s | Mana |
| 1:34 | 1:35 | 1 s | Mana |
| 1:41 | 1:43 | 1 s | Mana |

## Jäger

Gesamt **644.382**, Laufzeit 10:00, Rest-Mana 1.427, Rest-HP 4.554. Effektive Angriffsheilung 0, Überheilung 1.872, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.355.618.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 360 | 360 | 226.152 | 0 | 0 |
| Seelenbegleiter | 2 | 897 | 100.033 | 264 | 0 |
| Salve | 10 | 10 | 91.944 | 4.140 | 0 |
| Feuerpfeil | 66 | 66 | 69.709 | 7.392 | 0 |
| Präzisionsschuss | 11 | 11 | 60.137 | 11.979 | 0 |
| Verstärkter Pfeil | 13 | 13 | 29.292 | 5.278 | 0 |
| Gebundener Schuss | 35 | 35 | 28.952 | 1.890 | 0 |
| Schockschuss | 13 | 13 | 16.383 | 2.054 | 0 |
| Entzugspfeil | 12 | 12 | 13.286 | 1.620 | 0 |
| Kettenschuss | 11 | 11 | 8.494 | 407 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:03 | 0:04 | 1 s | Cooldowns/Voraussetzungen |
| 0:11 | 0:12 | 1 s | Cooldowns/Voraussetzungen |
| 0:20 | 0:21 | 1 s | Cooldowns/Voraussetzungen |
| 0:29 | 0:31 | 1 s | Cooldowns/Voraussetzungen |
| 0:37 | 0:38 | 1 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:40 | 1 s | Cooldowns/Voraussetzungen |
| 0:48 | 0:49 | 1 s | Cooldowns/Voraussetzungen |
| 0:51 | 0:52 | 1 s | Cooldowns/Voraussetzungen |
| 0:55 | 0:56 | 1 s | Cooldowns/Voraussetzungen |
| 0:59 | 1:00 | 1 s | Cooldowns/Voraussetzungen |
| 1:06 | 1:07 | 1 s | Cooldowns/Voraussetzungen |
| 1:12 | 1:13 | 1 s | Cooldowns/Voraussetzungen |
| 1:15 | 1:16 | 1 s | Cooldowns/Voraussetzungen |
| 1:25 | 1:26 | 1 s | Cooldowns/Voraussetzungen |
| 1:30 | 1:31 | 1 s | Cooldowns/Voraussetzungen |
| 1:34 | 1:35 | 1 s | Cooldowns/Voraussetzungen |
| 1:39 | 1:40 | 1 s | Cooldowns/Voraussetzungen |
| 1:41 | 1:42 | 1 s | Cooldowns/Voraussetzungen |
| 1:43 | 1:44 | 1 s | Cooldowns/Voraussetzungen |
| 1:47 | 1:48 | 1 s | Cooldowns/Voraussetzungen |

## Ritter

Gesamt **421.476**, Laufzeit 10:00, Rest-Mana 1.201, Rest-HP 8.188. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.578.524.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 470 | 470 | 206.527 | 0 | 0 |
| Donnernde Lanze | 17 | 17 | 58.402 | 12.852 | 0 |
| Schildsturm | 17 | 17 | 33.089 | 6.324 | 0 |
| Schildstoß | 21 | 21 | 30.858 | 5.502 | 0 |
| Brecher des Geistes | 33 | 33 | 30.539 | 3.927 | 0 |
| Mächtiger Hieb | 22 | 22 | 25.793 | 3.960 | 0 |
| Brecher der Deckung | 22 | 22 | 20.909 | 2.904 | 0 |
| Erlösendes Feld | 9 | 9 | 15.358 | 2.853 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:01 | 0:02 | 1 s | Cooldowns/Voraussetzungen |
| 0:19 | 0:20 | 1 s | Cooldowns/Voraussetzungen |
| 0:28 | 0:29 | 1 s | Cooldowns/Voraussetzungen |
| 0:30 | 0:31 | 1 s | Cooldowns/Voraussetzungen |
| 0:37 | 0:39 | 1 s | Cooldowns/Voraussetzungen |
| 0:56 | 0:57 | 1 s | Cooldowns/Voraussetzungen |
| 0:59 | 1:00 | 1 s | Cooldowns/Voraussetzungen |
| 1:15 | 1:16 | 1 s | Cooldowns/Voraussetzungen |
| 1:23 | 1:24 | 1 s | Cooldowns/Voraussetzungen |
| 1:28 | 1:29 | 1 s | Cooldowns/Voraussetzungen |
| 1:32 | 1:33 | 1 s | Cooldowns/Voraussetzungen |
| 1:51 | 1:52 | 1 s | Cooldowns/Voraussetzungen |
| 1:58 | 1:59 | 1 s | Cooldowns/Voraussetzungen |
| 2:08 | 2:09 | 1 s | Cooldowns/Voraussetzungen |
| 2:17 | 2:18 | 1 s | Cooldowns/Voraussetzungen |
| 2:27 | 2:28 | 1 s | Cooldowns/Voraussetzungen |
| 2:29 | 2:30 | 1 s | Cooldowns/Voraussetzungen |
| 2:45 | 2:46 | 1 s | Cooldowns/Voraussetzungen |
| 2:56 | 2:57 | 1 s | Cooldowns/Voraussetzungen |
| 3:03 | 3:04 | 1 s | Cooldowns/Voraussetzungen |

Hinweis: Donnernde Lanze: keine feste Castzeit gespeichert; Ansturm-/Animationsdauer im vereinbarten Test ignoriert (0 s).

## Luminet

Gesamt **643.870**, Laufzeit 10:00, Rest-Mana 377, Rest-HP 4.441. Effektive Angriffsheilung 0, Überheilung 3.253, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.356.130.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 258 | 258 | 172.948 | 0 | 0 |
| Energieschlag | 133 | 133 | 158.311 | 19.817 | 0 |
| Luminus | 110 | 110 | 101.331 | 7.150 | 0 |
| Heilige Vernichtung | 13 | 13 | 43.613 | 4.381 | 0 |
| Ätherregen | 5 | 20 | 32.534 | 1.195 | 0 |
| Urteil des Himmels | 14 | 28 | 30.198 | 4.018 | 0 |
| Heiliges Kreuz | 12 | 12 | 21.772 | 3.408 | 0 |
| Eislanze | 15 | 15 | 19.437 | 2.325 | 0 |
| Schwerter des Lichtes | 10 | 10 | 16.842 | 2.570 | 0 |
| Strafendes Licht | 7 | 7 | 13.466 | 2.212 | 0 |
| Astralkörper | 6 | 6 | 12.726 | 2.178 | 0 |
| Göttliche Nova | 4 | 4 | 8.344 | 1.416 | 0 |
| Aurora Wellen | 3 | 3 | 6.497 | 1.125 | 0 |
| Licht kristallenes Gefängnis | 5 | 5 | 5.853 | 635 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 6:29. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 92 Phasen mit mindestens einem zu teuren bereiten Skill; darin 75 tatsächliche Mana-Wartepausen mit zusammen 64 Sekunden und maximal 1.21 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 6:29 | 6:30 | 0 s | Heiliges Kreuz | 124 |
| 6:32 | 6:32 | 0 s | Energieschlag | 77 |
| 6:32 | 6:33 | 1 s | Energieschlag | 12 |
| 7:02 | 7:03 | 1 s | Energieschlag | 75 |
| 7:03 | 7:05 | 1 s | Luminus | 8 |
| 7:05 | 7:06 | 0 s | Luminus | 8 |
| 7:44 | 7:45 | 1 s | Astralkörper | 64 |
| 7:45 | 7:46 | 1 s | Astralkörper | 146 |
| 7:47 | 7:48 | 1 s | Astralkörper | 146 |
| 7:48 | 7:49 | 1 s | Energieschlag | 21 |
| 7:50 | 7:51 | 1 s | Energieschlag | 21 |
| 7:56 | 7:57 | 1 s | Aurora Wellen | 67 |
| 7:58 | 7:59 | 1 s | Aurora Wellen | 304 |
| 7:59 | 7:59 | 0 s | Aurora Wellen | 304 |
| 7:59 | 8:00 | 0 s | Aurora Wellen | 155 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:06 | 0:07 | 1 s | Cooldowns/Voraussetzungen |
| 0:10 | 0:11 | 1 s | Cooldowns/Voraussetzungen |
| 0:11 | 0:13 | 1 s | Cooldowns/Voraussetzungen |
| 0:15 | 0:16 | 1 s | Cooldowns/Voraussetzungen |
| 0:16 | 0:18 | 1 s | Cooldowns/Voraussetzungen |
| 0:19 | 0:20 | 1 s | Cooldowns/Voraussetzungen |
| 0:23 | 0:24 | 1 s | Cooldowns/Voraussetzungen |
| 0:27 | 0:29 | 1 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:34 | 1 s | Cooldowns/Voraussetzungen |
| 0:36 | 0:37 | 1 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:39 | 1 s | Cooldowns/Voraussetzungen |
| 0:40 | 0:41 | 1 s | Cooldowns/Voraussetzungen |
| 0:44 | 0:45 | 1 s | Cooldowns/Voraussetzungen |
| 0:48 | 0:49 | 1 s | Cooldowns/Voraussetzungen |
| 0:52 | 0:53 | 1 s | Cooldowns/Voraussetzungen |
| 0:53 | 0:55 | 1 s | Cooldowns/Voraussetzungen |
| 0:57 | 0:58 | 1 s | Cooldowns/Voraussetzungen |
| 0:58 | 1:00 | 1 s | Cooldowns/Voraussetzungen |
| 1:01 | 1:02 | 1 s | Cooldowns/Voraussetzungen |
| 1:05 | 1:06 | 1 s | Cooldowns/Voraussetzungen |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Ritualist

Gesamt **768.805**, Laufzeit 10:00, Rest-Mana 403, Rest-HP 4.357. Effektive Angriffsheilung 1.836, Überheilung 3.780, HP-Regeneration 44.342, Lebenspreise 45.823. Rest-Seelen 13, Rest-Wut 0. Gegner-Restleben 9.231.195.

Große Kombos: soulShackles: 7; soulHarvests: 1.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 286 | 286 | 201.330 | 0 | 0 |
| Feuerball | 129 | 129 | 159.491 | 19.221 | 0 |
| Morrak´s Meister | 2 | 592 | 121.778 | 0 | 0 |
| Dunkler Impuls | 107 | 107 | 103.034 | 6.955 | 0 |
| Seelenqual | 76 | 76 | 76.684 | 5.092 | 0 |
| Feuer der Verdammten | 9 | 63 | 36.491 | 4.527 | 0 |
| Schrei der Unterwelt | 8 | 8 | 22.403 | 0 | 0 |
| Lebenssauger | 13 | 13 | 15.843 | 4.602 | 1.666 |
| Meteoritenschauer | 1 | 6 | 8.908 | 2.608 | 0 |
| Sturm des Feuers | 6 | 6 | 8.739 | 1.086 | 0 |
| Seelenfessel | 7 | 7 | 7.514 | 665 | 0 |
| Seelenplage | 3 | 3 | 4.674 | 0 | 0 |
| Seelenernte | 1 | 1 | 1.916 | 408 | 171 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:36. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 431 Phasen mit mindestens einem zu teuren bereiten Skill; darin 324 tatsächliche Mana-Wartepausen mit zusammen 288 Sekunden und maximal 1.21 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:36 | 1:37 | 1 s | Feuerball | 55 |
| 1:38 | 1:39 | 1 s | Feuerball | 55 |
| 1:44 | 1:44 | 0 s | Sturm des Feuers | 97 |
| 1:44 | 1:45 | 1 s | Feuer der Verdammten | 32 |
| 1:45 | 1:46 | 1 s | Feuer der Verdammten | 54 |
| 1:47 | 1:47 | 1 s | Feuer der Verdammten | 54 |
| 1:48 | 1:48 | 0 s | Feuer der Verdammten | 257 |
| 1:48 | 1:49 | 1 s | Feuer der Verdammten | 108 |
| 1:49 | 1:50 | 1 s | Feuer der Verdammten | 43 |
| 1:51 | 1:52 | 1 s | Feuer der Verdammten | 245 |
| 1:52 | 1:52 | 0 s | Feuer der Verdammten | 245 |
| 1:52 | 1:54 | 1 s | Feuer der Verdammten | 96 |
| 1:54 | 1:54 | 0 s | Feuer der Verdammten | 299 |
| 1:54 | 1:55 | 1 s | Feuer der Verdammten | 234 |
| 1:56 | 1:56 | 0 s | Feuer der Verdammten | 234 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:06 | 0:07 | 1 s | Cooldowns/Voraussetzungen |
| 0:10 | 0:11 | 1 s | Cooldowns/Voraussetzungen |
| 0:11 | 0:13 | 1 s | Cooldowns/Voraussetzungen |
| 0:15 | 0:16 | 1 s | Cooldowns/Voraussetzungen |
| 0:16 | 0:18 | 1 s | Cooldowns/Voraussetzungen |
| 0:19 | 0:20 | 1 s | Cooldowns/Voraussetzungen |
| 0:23 | 0:24 | 1 s | Cooldowns/Voraussetzungen |
| 0:27 | 0:29 | 1 s | Cooldowns/Voraussetzungen |
| 0:31 | 0:32 | 1 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:34 | 1 s | Cooldowns/Voraussetzungen |
| 0:36 | 0:37 | 1 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:39 | 1 s | Cooldowns/Voraussetzungen |
| 0:40 | 0:41 | 1 s | Cooldowns/Voraussetzungen |
| 0:44 | 0:45 | 1 s | Cooldowns/Voraussetzungen |
| 0:46 | 0:47 | 1 s | Cooldowns/Voraussetzungen |
| 0:48 | 0:49 | 1 s | Cooldowns/Voraussetzungen |
| 0:53 | 0:55 | 1 s | Cooldowns/Voraussetzungen |
| 0:57 | 0:58 | 1 s | Cooldowns/Voraussetzungen |
| 0:58 | 1:00 | 1 s | Cooldowns/Voraussetzungen |
| 1:01 | 1:02 | 1 s | Cooldowns/Voraussetzungen |

## Schamane

Gesamt **494.442**, Laufzeit 10:00, Rest-Mana 223, Rest-HP 4.877. Effektive Angriffsheilung 0, Überheilung 3.360, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.505.558.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 434 | 434 | 209.136 | 0 | 0 |
| Infernaler Kreuzschlag | 15 | 15 | 54.944 | 6.708 | 0 |
| Felszähne | 34 | 34 | 49.311 | 7.816 | 0 |
| Erdsäule | 16 | 32 | 31.942 | 5.758 | 0 |
| Sprungschlag | 15 | 15 | 31.788 | 5.878 | 0 |
| Verbrennen | 26 | 255 | 27.841 | 4.010 | 0 |
| Beben | 19 | 19 | 25.145 | 3.870 | 0 |
| Erdbeben | 11 | 11 | 19.734 | 2.465 | 0 |
| Felsensalve | 1 | 1 | 16.204 | 3.287 | 0 |
| Feuerlanze | 14 | 14 | 14.452 | 2.078 | 0 |
| Stoßgebet | 14 | 14 | 9.607 | 1.005 | 0 |
| Infernal Zyklon | 1 | 6 | 4.340 | 724 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:01. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 577 Phasen mit mindestens einem zu teuren bereiten Skill; darin 505 tatsächliche Mana-Wartepausen mit zusammen 338 Sekunden und maximal 1.01 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:01 | 0:01 | 0 s | Erdsäule | 223 |
| 0:01 | 0:02 | 1 s | Erdsäule | 19 |
| 0:03 | 0:03 | 0 s | Erdsäule | 213 |
| 0:03 | 0:04 | 1 s | Erdsäule | 59 |
| 0:04 | 0:05 | 1 s | Erdsäule | 59 |
| 0:06 | 0:06 | 0 s | Erdsäule | 253 |
| 0:06 | 0:07 | 1 s | Erdsäule | 28 |
| 0:07 | 0:08 | 1 s | Erdsäule | 28 |
| 0:08 | 0:09 | 0 s | Erdsäule | 28 |
| 0:09 | 0:09 | 0 s | Erdsäule | 74 |
| 0:09 | 0:10 | 1 s | Erdsäule | 2 |
| 0:11 | 0:11 | 1 s | Erdsäule | 2 |
| 0:12 | 0:12 | 1 s | Erdsäule | 196 |
| 0:13 | 0:13 | 1 s | Erdsäule | 196 |
| 0:14 | 0:14 | 1 s | Erdsäule | 196 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:01 | 0:02 | 1 s | Mana |
| 0:03 | 0:04 | 1 s | Mana |
| 0:06 | 0:07 | 1 s | Mana |
| 0:09 | 0:10 | 1 s | Mana |
| 0:15 | 0:16 | 1 s | Mana |
| 0:21 | 0:22 | 1 s | Cooldowns/Voraussetzungen |
| 0:25 | 0:26 | 1 s | Cooldowns/Voraussetzungen |
| 0:30 | 0:31 | 1 s | Cooldowns/Voraussetzungen |
| 0:34 | 0:35 | 1 s | Cooldowns/Voraussetzungen |
| 0:36 | 0:37 | 1 s | Cooldowns/Voraussetzungen |
| 0:42 | 0:43 | 1 s | Cooldowns/Voraussetzungen |
| 0:47 | 0:48 | 1 s | Mana |
| 0:49 | 0:50 | 1 s | Mana |
| 0:51 | 0:52 | 1 s | Mana |
| 0:54 | 0:55 | 1 s | Mana |
| 0:57 | 0:58 | 1 s | Mana |
| 1:00 | 1:01 | 1 s | Mana |
| 1:03 | 1:04 | 1 s | Mana |
| 1:09 | 1:10 | 1 s | Mana |
| 1:12 | 1:13 | 1 s | Mana |

## Seelenjäger

Gesamt **515.499**, Laufzeit 10:00, Rest-Mana 203, Rest-HP 3.795. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.484.501.

Große Kombos: soulCollectionWindows: 1; spectralFinishers: 1.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 522 | 522 | 279.896 | 0 | 0 |
| Feuerpfeil | 64 | 64 | 61.709 | 7.168 | 0 |
| Explosionspfeil | 15 | 45 | 56.169 | 8.010 | 0 |
| Doppelschuss | 21 | 21 | 46.712 | 6.153 | 0 |
| Kopfschuss | 7 | 7 | 21.914 | 3.787 | 0 |
| Durchdringender Schuss | 14 | 14 | 19.953 | 3.108 | 0 |
| Seelensammler | 25 | 25 | 16.430 | 0 | 0 |
| Kettenschuss | 11 | 11 | 7.482 | 407 | 0 |
| Hinterhältiger Pfeil | 6 | 6 | 3.601 | 108 | 0 |
| Spektralketten | 1 | 1 | 1.632 | 439 | 0 |
| Seelenschuss | 1 | 0 | 0 | 960 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:15. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 579 Phasen mit mindestens einem zu teuren bereiten Skill; darin 518 tatsächliche Mana-Wartepausen mit zusammen 284 Sekunden und maximal 0.90 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:15 | 1:15 | 0 s | Seelenschuss | 656 |
| 1:16 | 1:16 | 0 s | Seelenschuss | 656 |
| 1:17 | 1:17 | 1 s | Seelenschuss | 656 |
| 1:18 | 1:18 | 0 s | Seelenschuss | 789 |
| 1:19 | 1:19 | 0 s | Seelenschuss | 789 |
| 1:19 | 1:20 | 1 s | Seelenschuss | 677 |
| 1:20 | 1:21 | 1 s | Seelenschuss | 677 |
| 1:21 | 1:21 | 0 s | Seelenschuss | 810 |
| 1:21 | 1:22 | 1 s | Seelenschuss | 517 |
| 1:23 | 1:23 | 1 s | Seelenschuss | 517 |
| 1:24 | 1:24 | 0 s | Seelenschuss | 650 |
| 1:25 | 1:25 | 0 s | Seelenschuss | 650 |
| 1:26 | 1:26 | 1 s | Seelenschuss | 650 |
| 1:27 | 1:27 | 0 s | Seelenschuss | 783 |
| 1:28 | 1:28 | 0 s | Seelenschuss | 783 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Schurke

Gesamt **482.079**, Laufzeit 10:00, Rest-Mana 534, Rest-HP 4.436. Effektive Angriffsheilung 0, Überheilung 707, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.517.921.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 513 | 513 | 231.876 | 0 | 0 |
| Wirbelnde Klinge | 8 | 8 | 41.760 | 5.585 | 0 |
| Brecher des Lichts | 13 | 13 | 37.092 | 4.868 | 0 |
| Dunkler Schlag | 41 | 41 | 29.971 | 2.546 | 0 |
| Klingentornado | 8 | 8 | 29.888 | 3.628 | 0 |
| Tödlicher Tanz | 4 | 4 | 29.536 | 3.545 | 0 |
| Kunai Todesstoß | 37 | 37 | 18.574 | 0 | 0 |
| Sturmklinge | 10 | 10 | 17.840 | 3.152 | 0 |
| Überschallklinge | 5 | 5 | 11.190 | 2.103 | 0 |
| Blutklinge | 9 | 9 | 10.881 | 1.600 | 0 |
| Schattenschlag | 7 | 7 | 9.471 | 1.482 | 0 |
| Schattenfalle | 7 | 7 | 7.700 | 1.054 | 0 |
| Schattendolch | 5 | 5 | 6.300 | 969 | 0 |
| Dunkler Schleier | 7 | 0 | 0 | 428 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:31. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 524 Phasen mit mindestens einem zu teuren bereiten Skill; darin 468 tatsächliche Mana-Wartepausen mit zusammen 259 Sekunden und maximal 5.30 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:31 | 1:36 | 4 s | Schattendolch | 22 |
| 1:56 | 1:56 | 0 s | Wirbelnde Klinge | 446 |
| 1:56 | 1:56 | 0 s | Wirbelnde Klinge | 384 |
| 1:56 | 1:57 | 1 s | Wirbelnde Klinge | 384 |
| 1:58 | 1:58 | 0 s | Wirbelnde Klinge | 522 |
| 1:59 | 1:59 | 0 s | Wirbelnde Klinge | 522 |
| 2:00 | 2:00 | 0 s | Wirbelnde Klinge | 659 |
| 2:00 | 2:01 | 0 s | Wirbelnde Klinge | 659 |
| 2:01 | 2:02 | 1 s | Wirbelnde Klinge | 344 |
| 2:02 | 2:03 | 0 s | Wirbelnde Klinge | 344 |
| 2:03 | 2:04 | 0 s | Wirbelnde Klinge | 481 |
| 2:04 | 2:05 | 0 s | Wirbelnde Klinge | 481 |
| 2:05 | 2:05 | 0 s | Wirbelnde Klinge | 481 |
| 2:06 | 2:06 | 0 s | Wirbelnde Klinge | 619 |
| 2:07 | 2:07 | 0 s | Wirbelnde Klinge | 619 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 1:31 | 1:36 | 4 s | Mana |
| 3:00 | 3:06 | 5 s | Mana |
| 3:07 | 3:08 | 1 s | Mana |
| 4:32 | 4:36 | 4 s | Mana |
| 6:01 | 6:03 | 2 s | Mana |
| 6:03 | 6:06 | 3 s | Mana |
| 6:07 | 6:08 | 2 s | Mana |
| 7:31 | 7:33 | 1 s | Mana |
| 7:34 | 7:36 | 2 s | Mana |
| 9:01 | 9:06 | 4 s | Mana |
| 9:07 | 9:09 | 2 s | Mana |

Hinweis: Die Buff-Tabellen müssen nach den geänderten Eingaben neu gerechnet werden: `node scripts/calculateComparableBuffScenarios.js`. Alte Buff-Zahlen werden nicht eingeblendet.

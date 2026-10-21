# Zehn-Minuten-Schadensvergleich

Aktueller Basisvergleich: permanente Passive und temporäre Klassenbeschwörungen, ohne optionale Eigen- oder Gruppenbuffs. Prozentanteile beziehen sich auf den Gesamtschaden einschließlich Beschwörungen und sind keine vorgegebenen Quoten. Automatische Zusatzangriffe durch eigene Auto-Attacks zählen zur Auto-Attack-Seite. Der Test verwendet seine offengelegte Standardpriorität, keine freie globale Rotationsoptimierung. Die beiden aktuellen Buff-Vergleiche stehen direkt unter der Haupttabelle.

Berechnungsstand: 2026-10-19 T 17:47:37.055 Z; Eingabedateien und SHA-256-Prüfsummen sind im JSON gespeichert.

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
| Ritualist | **872.697** | 1.454 | 455.806 | 231.010 | 185.881 | 87.270 | 0:05 | — | 342 | 290 s | 1.29 s | 26.5 % / 52.2 % / 21.3 % |
| Luminet | **720.139** | 1.200 | 529.589 | 190.551 | 0 | 72.014 | — | — | 0 | 0 s | 0.00 s | 26.5 % / 73.5 % / 0.0 % |
| Jäger | **709.921** | 1.183 | 357.609 | 276.640 | 75.671 | 70.992 | — | — | 0 | 0 s | 0.00 s | 39.0 % / 50.4 % / 10.7 % |
| Kräuterkundler | **667.282** | 1.112 | 441.811 | 225.470 | 0 | 66.728 | 2:34 | — | 319 | 269 s | 1.21 s | 33.8 % / 66.2 % / 0.0 % |
| Gladiator | **652.117** | 1.087 | 287.346 | 364.771 | 0 | 65.212 | 4:14 | — | 88 | 54 s | 1.01 s | 55.9 % / 44.1 % / 0.0 % |
| Butcher | **605.955** | 1.010 | 241.374 | 364.581 | 0 | 60.596 | 0:01 | 8:45 | 514 | 333 s | 1.00 s | 60.2 % / 39.8 % / 0.0 % |
| Seelenjäger | **603.248** | 1.005 | 262.384 | 340.864 | 0 | 60.325 | 1:15 | — | 510 | 272 s | 0.98 s | 56.5 % / 43.5 % / 0.0 % |
| Schamane | **597.264** | 995 | 352.735 | 244.529 | 0 | 59.726 | 0:02 | — | 482 | 322 s | 1.01 s | 40.9 % / 59.1 % / 0.0 % |
| Druide | **584.790** | 975 | 357.401 | 149.744 | 77.644 | 58.479 | 0:05 | 0:04 | 21 | 13 s | 0.91 s | 25.6 % / 61.1 % / 13.3 % |
| Schurke | **551.197** | 919 | 265.838 | 285.359 | 0 | 55.120 | 0:02 | — | 494 | 259 s | 5.40 s | 51.8 % / 48.2 % / 0.0 % |
| Heiler | **532.386** | 887 | 360.938 | 171.448 | 0 | 53.239 | — | — | 0 | 0 s | 0.00 s | 32.2 % / 67.8 % / 0.0 % |
| Abenteurer | **506.601** | 844 | 198.794 | 307.807 | 0 | 50.660 | — | — | 0 | 0 s | 0.00 s | 60.8 % / 39.2 % / 0.0 % |
| Ritter | **476.818** | 795 | 223.470 | 253.349 | 0 | 47.682 | — | — | 0 | 0 s | 0.00 s | 53.1 % / 46.9 % / 0.0 % |

## Zahlen richtig lesen und Heiler-Ergebnis nachvollziehen

**Ein zu teurer bereiter Skill bedeutet weder null Mana noch null Leben.** Die Summe der Mana-Wartezeit besteht aus vielen kurzen Pausen; sie ist keine zusammenhängende Regeneration bis zum vollen Pool. Ressourcen werden fortlaufend genutzt. Die Cooldowns bleiben dauerhaft aktiv und werden zwischen Minuten nicht zurückgesetzt. Nur beim Start sind alle Skills gleichzeitig bereit.

Butcher: erster zu teurer Skill 0:01; 568 Phasen mit mindestens einem nicht bezahlbaren Skill. Längste tatsächliche Mana-Pause 1.00 Sekunden.

Luminet: 0 Mana-Wartepausen, zusammen 0.00 Sekunden.

Heiler: Energieschlag auf Stufe 5, Cooldown 2.2 Sekunden nach Castende. 251 Anwendungen erzeugen 214.307 Schaden, eigene Auto-Attacks 171.448. Potenzielle MP-Regeneration 278 alle 3 Sekunden; durchschnittlicher Verbrauch 2.266 Mana pro Minute. Reine Heilzauber sind im Schadenstest ausgeschlossen.

## Mana-Pool, Verbrauch und Regeneration

Basispool und permanente MP-Regeneration ohne optionale Eigenbuffs. Während aktiver Beschwörungen können einzelne Werte temporär abweichen. Potenzielle Regeneration ist am vollen Pool begrenzt.

| Klasse | Mana-Pool | MP-Reg/Tick | Mögliche MP-Reg/min | Verbrauch/min | Tatsächlich regeneriert/min |
| --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 5.651 | 196 | 3.922 | 2.942 | 2.938 |
| Butcher | 4.291 | 156 | 3.112 | 3.523 | 3.112 |
| Druide | 6.536 | 206 | 4.122 | 4.118 | 3.923 |
| Gladiator | 5.057 | 178 | 3.562 | 3.956 | 3.562 |
| Heiler | 6.852 | 278 | 5.552 | 2.266 | 2.266 |
| Kräuterkundler | 6.543 | 220 | 4.408 | 5.028 | 4.408 |
| Jäger | 4.581 | 165 | 3.292 | 3.502 | 3.292 |
| Ritter | 5.983 | 216 | 4.320 | 3.696 | 3.625 |
| Luminet | 6.017 | 256 | 5.120 | 5.442 | 5.120 |
| Ritualist | 4.837 | 189 | 3.782 | 4.327 | 3.863 |
| Schamane | 6.123 | 226 | 4.524 | 5.112 | 4.524 |
| Seelenjäger | 3.565 | 129 | 2.572 | 2.896 | 2.572 |
| Schurke | 3.828 | 133 | 2.662 | 2.999 | 2.662 |

## Sensitivität: Mana für den stärksten bereiten Angriff zurückhalten

Der Hauptlauf verwendet die erste bezahlbare priorisierte Aktion. Der Zusatzlauf wartet bei fehlendem Mana für die höchste Priorität mit Auto-Attacks, statt billigere Skills zu wirken. Das ist eine andere Steuerung, keine geänderte Klasse.

| Klasse | Hauptlauf | Mit Manareserve | Unterschied |
| --- | ---: | ---: | ---: |
| Abenteurer | 506.601 | 506.601 | 0 |
| Butcher | 605.955 | 567.275 | -38.680 |
| Druide | 584.790 | 583.330 | -1.460 |
| Gladiator | 652.117 | 654.019 | 1.902 |
| Heiler | 532.386 | 532.386 | 0 |
| Kräuterkundler | 667.282 | 657.144 | -10.138 |
| Jäger | 709.921 | 709.921 | 0 |
| Ritter | 476.818 | 476.818 | 0 |
| Luminet | 720.139 | 720.139 | 0 |
| Ritualist | 872.697 | 857.688 | -15.008 |
| Schamane | 597.264 | 593.525 | -3.739 |
| Seelenjäger | 603.248 | 651.964 | 48.716 |
| Schurke | 551.197 | 550.095 | -1.103 |

Ein Mana-Hindernis bedeutet: mindestens ein bereiter priorisierter Skill ist nicht bezahlbar. Das ist nicht zwangsläufig ein leerer Pool oder Stillstand; günstigere Skills und Auto-Attacks bleiben erlaubt. Mana-Wartezeit ist die Summe vieler einzelner Zeitstücke ohne bezahlbare gewählte Skillaktion; Auto-Attacks gehen weiter. Sie ist keine Zeit bis zum vollen Mana-Pool und keine HP-Ausfallzeit. Die Zahl der Mana-Wartephasen zählt diese tatsächlich getrennten Pausen. Andere Wartezeiten wie Tarnrückkehr sind getrennt erfasst.

## Schaden pro Minute

| Klasse | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Ø |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 59.697 | 50.398 | 48.646 | 48.160 | 50.800 | 48.244 | 52.502 | 49.109 | 48.792 | 50.252 | 50.660 |
| Butcher | 74.891 | 57.556 | 59.431 | 60.029 | 59.461 | 56.785 | 60.056 | 58.238 | 60.289 | 59.216 | 60.596 |
| Druide | 69.532 | 50.854 | 63.774 | 50.634 | 67.437 | 51.274 | 64.190 | 52.283 | 66.031 | 48.781 | 58.479 |
| Gladiator | 81.652 | 61.600 | 69.500 | 56.464 | 69.542 | 63.272 | 60.824 | 64.347 | 60.438 | 64.479 | 65.212 |
| Heiler | 59.218 | 50.032 | 52.425 | 55.166 | 49.954 | 54.131 | 53.026 | 52.688 | 53.363 | 52.382 | 53.239 |
| Kräuterkundler | 83.573 | 74.535 | 62.783 | 64.903 | 64.377 | 64.873 | 60.634 | 63.974 | 64.002 | 63.628 | 66.728 |
| Jäger | 80.577 | 68.386 | 68.248 | 69.578 | 72.171 | 69.013 | 68.645 | 69.349 | 71.967 | 71.988 | 70.992 |
| Ritter | 53.427 | 48.510 | 43.793 | 50.075 | 47.971 | 43.770 | 49.535 | 43.254 | 47.971 | 48.510 | 47.682 |
| Luminet | 84.261 | 64.315 | 75.550 | 68.243 | 76.122 | 67.247 | 75.846 | 67.189 | 75.819 | 65.547 | 72.014 |
| Ritualist | 120.392 | 92.783 | 86.425 | 84.099 | 87.196 | 61.432 | 87.373 | 83.685 | 83.008 | 86.304 | 87.270 |
| Schamane | 83.161 | 61.962 | 57.289 | 57.152 | 53.988 | 55.852 | 56.791 | 57.741 | 57.325 | 56.003 | 59.726 |
| Seelenjäger | 80.127 | 73.985 | 56.910 | 55.603 | 55.539 | 55.175 | 58.286 | 55.111 | 58.048 | 54.464 | 60.325 |
| Schurke | 75.376 | 53.991 | 60.245 | 47.443 | 52.609 | 56.069 | 50.144 | 52.379 | 54.598 | 48.344 | 55.120 |

## Abenteurer

Gesamt **506.601**, Laufzeit 10:00, Rest-Mana 5.615, Rest-HP 6.092. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.493.399.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 562 | 562 | 307.807 | 0 | 0 |
| Wirbelnde Klinge | 11 | 11 | 62.684 | 7.680 | 0 |
| Rudelangriff | 12 | 12 | 44.960 | 9.033 | 0 |
| Kreuzhieb | 18 | 18 | 40.291 | 4.844 | 0 |
| Sprungschlag | 17 | 17 | 36.613 | 6.462 | 0 |
| Blutender Schnitt | 15 | 15 | 14.246 | 1.397 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Butcher

Gesamt **605.955**, Laufzeit 10:00, Rest-Mana 182, Rest-HP 5.891. Effektive Angriffsheilung 0, Überheilung 252, HP-Regeneration 4.948, Lebenspreise 4.948. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.394.045.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 450 | 450 | 364.581 | 0 | 0 |
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

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:01. Erstmals wirklich 0 Mana: 8:45, insgesamt 1 Ereignisse mit vollständig ausgegebenem Mana. 568 Phasen mit mindestens einem zu teuren bereiten Skill; darin 514 tatsächliche Mana-Wartepausen mit zusammen 333 Sekunden und maximal 1.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 8:45.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:01 | 0:01 | 0 s | Schockwelle der Regeneration | 552 |
| 0:01 | 0:01 | 0 s | Schockwelle der Regeneration | 552 |
| 0:01 | 0:02 | 0 s | Dämonische Schockwelle | 209 |
| 0:02 | 0:03 | 1 s | Dämonische Schockwelle | 29 |
| 0:03 | 0:04 | 1 s | Dämonische Schockwelle | 32 |
| 0:04 | 0:05 | 1 s | Dämonische Schockwelle | 32 |
| 0:05 | 0:06 | 1 s | Dämonische Schockwelle | 32 |
| 0:06 | 0:07 | 1 s | Dämonische Schockwelle | 51 |
| 0:08 | 0:08 | 1 s | Dämonische Schockwelle | 51 |
| 0:09 | 0:09 | 1 s | Dämonische Schockwelle | 207 |
| 0:10 | 0:10 | 1 s | Dämonische Schockwelle | 207 |
| 0:11 | 0:12 | 1 s | Dämonische Schockwelle | 207 |
| 0:12 | 0:13 | 1 s | Erdbeben | 82 |
| 0:13 | 0:14 | 1 s | Erdbeben | 82 |
| 0:14 | 0:15 | 0 s | Erdbeben | 82 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:06 | 0:07 | 1 s | Mana |
| 0:12 | 0:13 | 1 s | Mana |
| 0:15 | 0:16 | 1 s | Mana |
| 0:21 | 0:22 | 1 s | Mana |
| 0:29 | 0:30 | 1 s | Mana |
| 0:31 | 0:32 | 1 s | Mana |
| 0:40 | 0:41 | 1 s | Cooldowns/Voraussetzungen |
| 0:51 | 0:52 | 1 s | Cooldowns/Voraussetzungen |
| 0:54 | 0:55 | 1 s | Cooldowns/Voraussetzungen |
| 0:57 | 0:58 | 1 s | Cooldowns/Voraussetzungen |
| 1:10 | 1:11 | 1 s | Mana |
| 1:15 | 1:16 | 1 s | Mana |
| 1:21 | 1:22 | 1 s | Mana |
| 1:25 | 1:26 | 1 s | Mana |
| 1:28 | 1:29 | 1 s | Mana |
| 1:33 | 1:34 | 1 s | Mana |
| 1:41 | 1:42 | 1 s | Mana |
| 1:46 | 1:47 | 1 s | Mana |
| 1:52 | 1:53 | 1 s | Mana |
| 1:54 | 1:55 | 1 s | Mana |

## Druide

Gesamt **584.790**, Laufzeit 10:00, Rest-Mana 4.587, Rest-HP 4.278. Effektive Angriffsheilung 0, Überheilung 3.074, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.415.210.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 226 | 226 | 154.839 | 5.876 | 0 |
| Auto-Attack | 377 | 377 | 149.744 | 0 | 0 |
| Naturgeist | 2 | 657 | 77.644 | 264 | 0 |
| Himmelsbrecher | 5 | 10 | 42.996 | 8.550 | 0 |
| Eisranken | 27 | 135 | 32.728 | 4.266 | 0 |
| Ätherregen | 5 | 20 | 30.743 | 1.195 | 0 |
| Vakuumimpuls | 7 | 14 | 28.107 | 3.337 | 0 |
| Windschlitzer | 15 | 15 | 21.988 | 3.144 | 0 |
| Windfesseln | 19 | 19 | 21.600 | 2.538 | 0 |
| Eislanze | 15 | 15 | 18.122 | 2.325 | 0 |
| Manaexplosion | 2 | 2 | 4.810 | 9.613 | 0 |
| Bannmagie | 2 | 2 | 1.468 | 72 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:05. Erstmals wirklich 0 Mana: 0:04, insgesamt 2 Ereignisse mit vollständig ausgegebenem Mana. 29 Phasen mit mindestens einem zu teuren bereiten Skill; darin 21 tatsächliche Mana-Wartepausen mit zusammen 13 Sekunden und maximal 0.91 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 0:04, 6:05.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:05 | 0:06 | 0 s | Energieschlag | 0 |
| 6:26 | 6:27 | 1 s | Himmelsbrecher | 841 |
| 6:27 | 6:27 | 0 s | Himmelsbrecher | 889 |
| 6:27 | 6:28 | 1 s | Himmelsbrecher | 863 |
| 6:29 | 6:29 | 1 s | Himmelsbrecher | 863 |
| 6:30 | 6:30 | 0 s | Himmelsbrecher | 1.069 |
| 6:30 | 6:30 | 0 s | Himmelsbrecher | 935 |
| 6:30 | 6:31 | 1 s | Himmelsbrecher | 909 |
| 6:31 | 6:32 | 1 s | Himmelsbrecher | 909 |
| 6:32 | 6:33 | 0 s | Himmelsbrecher | 909 |
| 6:33 | 6:34 | 1 s | Himmelsbrecher | 1.089 |
| 6:34 | 6:35 | 1 s | Himmelsbrecher | 1.089 |
| 6:35 | 6:35 | 0 s | Himmelsbrecher | 1.089 |
| 6:35 | 6:36 | 1 s | Himmelsbrecher | 1.063 |
| 6:37 | 6:37 | 1 s | Himmelsbrecher | 1.270 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Gladiator

Gesamt **652.117**, Laufzeit 10:00, Rest-Mana 1.115, Rest-HP 7.461. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 16. Gegner-Restleben 9.347.883.

Große Kombos: rageOutbursts: 5.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 466 | 466 | 364.771 | 0 | 0 |
| Blutiger Durchbruch | 7 | 21 | 54.242 | 15.120 | 0 |
| Sprungschlag | 17 | 17 | 40.578 | 6.868 | 0 |
| Mächtiger Hieb | 22 | 22 | 33.369 | 3.960 | 0 |
| Schmetterschlag | 14 | 14 | 30.063 | 4.802 | 0 |
| Holzspalter | 16 | 16 | 25.148 | 3.136 | 0 |
| Kriegerischer Ansturm | 11 | 11 | 23.988 | 3.839 | 0 |
| Ausbruch der Wut | 5 | 5 | 23.496 | 0 | 0 |
| Wutklinge | 10 | 10 | 21.759 | 0 | 0 |
| Sturm der Wut | 9 | 9 | 18.431 | 0 | 0 |
| Wutexplosion | 6 | 6 | 16.272 | 0 | 0 |
| Energie der Wut | 11 | 0 | 0 | 1.837 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 4:14. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 96 Phasen mit mindestens einem zu teuren bereiten Skill; darin 88 tatsächliche Mana-Wartepausen mit zusammen 54 Sekunden und maximal 1.01 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 4:14 | 4:15 | 0 s | Sprungschlag | 396 |
| 5:27 | 5:28 | 1 s | Sprungschlag | 270 |
| 5:28 | 5:29 | 1 s | Sprungschlag | 270 |
| 5:31 | 5:32 | 1 s | Mächtiger Hieb | 44 |
| 5:32 | 5:33 | 1 s | Mächtiger Hieb | 44 |
| 5:33 | 5:34 | 1 s | Schmetterschlag | 42 |
| 5:34 | 5:35 | 1 s | Schmetterschlag | 42 |
| 5:35 | 5:36 | 1 s | Schmetterschlag | 42 |
| 5:36 | 5:37 | 1 s | Schmetterschlag | 220 |
| 5:38 | 5:38 | 0 s | Schmetterschlag | 220 |
| 5:38 | 5:39 | 1 s | Schmetterschlag | 24 |
| 5:40 | 5:40 | 1 s | Schmetterschlag | 202 |
| 5:41 | 5:41 | 1 s | Kriegerischer Ansturm | 202 |
| 5:42 | 5:43 | 1 s | Schmetterschlag | 31 |
| 5:43 | 5:44 | 0 s | Schmetterschlag | 31 |

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
| 1:26 | 1:27 | 1 s | Cooldowns/Voraussetzungen |
| 1:50 | 1:51 | 1 s | Cooldowns/Voraussetzungen |
| 2:06 | 2:07 | 1 s | Cooldowns/Voraussetzungen |
| 2:11 | 2:12 | 1 s | Cooldowns/Voraussetzungen |
| 2:15 | 2:16 | 1 s | Cooldowns/Voraussetzungen |
| 2:20 | 2:21 | 1 s | Cooldowns/Voraussetzungen |
| 2:26 | 2:27 | 1 s | Cooldowns/Voraussetzungen |
| 2:32 | 2:33 | 1 s | Cooldowns/Voraussetzungen |
| 2:44 | 2:45 | 1 s | Cooldowns/Voraussetzungen |
| 2:48 | 2:49 | 1 s | Cooldowns/Voraussetzungen |
| 2:54 | 2:55 | 1 s | Cooldowns/Voraussetzungen |

## Heiler

Gesamt **532.386**, Laufzeit 10:00, Rest-Mana 6.852, Rest-HP 3.898. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.467.614.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 251 | 251 | 214.307 | 6.526 | 0 |
| Auto-Attack | 229 | 229 | 171.448 | 0 | 0 |
| Frostschauer | 14 | 70 | 72.874 | 7.588 | 0 |
| Kristallisierte Wasserspähre | 23 | 23 | 26.497 | 2.231 | 0 |
| Eislanze | 15 | 15 | 21.016 | 2.325 | 0 |
| Schwerter des Lichtes | 10 | 10 | 17.620 | 2.570 | 0 |
| Göttliche Nova | 4 | 4 | 8.624 | 1.416 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:03 | 0:04 | 1 s | Cooldowns/Voraussetzungen |
| 0:05 | 0:06 | 1 s | Cooldowns/Voraussetzungen |
| 0:07 | 0:08 | 1 s | Cooldowns/Voraussetzungen |
| 0:10 | 0:11 | 1 s | Cooldowns/Voraussetzungen |
| 0:12 | 0:13 | 1 s | Cooldowns/Voraussetzungen |
| 0:14 | 0:16 | 1 s | Cooldowns/Voraussetzungen |
| 0:17 | 0:18 | 1 s | Cooldowns/Voraussetzungen |
| 0:19 | 0:20 | 1 s | Cooldowns/Voraussetzungen |
| 0:21 | 0:23 | 1 s | Cooldowns/Voraussetzungen |
| 0:24 | 0:25 | 1 s | Cooldowns/Voraussetzungen |
| 0:26 | 0:27 | 1 s | Cooldowns/Voraussetzungen |
| 0:29 | 0:30 | 1 s | Cooldowns/Voraussetzungen |
| 0:31 | 0:32 | 1 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:34 | 1 s | Cooldowns/Voraussetzungen |
| 0:35 | 0:37 | 1 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:39 | 1 s | Cooldowns/Voraussetzungen |
| 0:40 | 0:41 | 1 s | Cooldowns/Voraussetzungen |
| 0:45 | 0:46 | 1 s | Cooldowns/Voraussetzungen |
| 0:47 | 0:48 | 1 s | Cooldowns/Voraussetzungen |
| 0:50 | 0:51 | 1 s | Cooldowns/Voraussetzungen |

## Kräuterkundler

Gesamt **667.282**, Laufzeit 10:00, Rest-Mana 347, Rest-HP 5.096. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.332.718.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 302 | 302 | 225.470 | 0 | 0 |
| Elektrisches Feld | 26 | 130 | 116.900 | 7.176 | 0 |
| Gezielter Blitz | 33 | 33 | 66.563 | 10.131 | 0 |
| Kugelblitz | 21 | 21 | 51.841 | 8.904 | 0 |
| Geladener Nebel | 27 | 27 | 48.751 | 7.236 | 0 |
| Ewiges Eis | 24 | 24 | 35.654 | 4.512 | 0 |
| Wasserfesseln | 44 | 44 | 34.918 | 528 | 0 |
| Windschlitzer | 20 | 20 | 31.932 | 4.300 | 0 |
| Eislanze | 23 | 23 | 31.616 | 3.565 | 0 |
| Tobender Sturm | 2 | 18 | 23.636 | 3.924 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 2:34. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 384 Phasen mit mindestens einem zu teuren bereiten Skill; darin 319 tatsächliche Mana-Wartepausen mit zusammen 269 Sekunden und maximal 1.21 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 2:34 | 2:35 | 1 s | Tobender Sturm | 1.076 |
| 2:35 | 2:36 | 0 s | Tobender Sturm | 1.076 |
| 2:36 | 2:37 | 1 s | Tobender Sturm | 1.285 |
| 2:37 | 2:38 | 1 s | Tobender Sturm | 1.285 |
| 2:39 | 2:40 | 1 s | Tobender Sturm | 1.505 |
| 2:40 | 2:41 | 1 s | Tobender Sturm | 1.237 |
| 2:42 | 2:42 | 1 s | Tobender Sturm | 1.458 |
| 2:43 | 2:43 | 1 s | Tobender Sturm | 1.458 |
| 2:44 | 2:44 | 1 s | Tobender Sturm | 1.303 |
| 2:44 | 2:45 | 1 s | Tobender Sturm | 1.027 |
| 2:46 | 2:47 | 1 s | Tobender Sturm | 940 |
| 2:47 | 2:48 | 1 s | Tobender Sturm | 940 |
| 2:49 | 2:49 | 1 s | Tobender Sturm | 1.160 |
| 2:49 | 2:51 | 1 s | Tobender Sturm | 1.148 |
| 2:51 | 2:52 | 1 s | Tobender Sturm | 945 |

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
| 1:18 | 1:19 | 1 s | Cooldowns/Voraussetzungen |
| 1:23 | 1:25 | 1 s | Cooldowns/Voraussetzungen |
| 1:26 | 1:27 | 1 s | Cooldowns/Voraussetzungen |
| 1:34 | 1:35 | 1 s | Cooldowns/Voraussetzungen |
| 1:41 | 1:43 | 1 s | Cooldowns/Voraussetzungen |

## Jäger

Gesamt **709.921**, Laufzeit 10:00, Rest-Mana 2.477, Rest-HP 5.184. Effektive Angriffsheilung 0, Überheilung 1.872, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.290.079.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 362 | 362 | 276.640 | 0 | 0 |
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
| 0:03 | 0:04 | 1 s | Cooldowns/Voraussetzungen |
| 0:11 | 0:12 | 1 s | Cooldowns/Voraussetzungen |
| 0:20 | 0:21 | 1 s | Cooldowns/Voraussetzungen |
| 0:29 | 0:30 | 1 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:39 | 1 s | Cooldowns/Voraussetzungen |
| 0:48 | 0:49 | 1 s | Cooldowns/Voraussetzungen |
| 0:51 | 0:52 | 1 s | Cooldowns/Voraussetzungen |
| 0:57 | 0:58 | 1 s | Cooldowns/Voraussetzungen |
| 0:59 | 1:00 | 1 s | Cooldowns/Voraussetzungen |
| 1:06 | 1:07 | 1 s | Cooldowns/Voraussetzungen |
| 1:13 | 1:14 | 1 s | Cooldowns/Voraussetzungen |
| 1:15 | 1:16 | 1 s | Cooldowns/Voraussetzungen |
| 1:24 | 1:25 | 1 s | Cooldowns/Voraussetzungen |
| 1:30 | 1:31 | 1 s | Cooldowns/Voraussetzungen |
| 1:33 | 1:34 | 1 s | Cooldowns/Voraussetzungen |
| 1:38 | 1:39 | 1 s | Cooldowns/Voraussetzungen |
| 1:40 | 1:41 | 1 s | Cooldowns/Voraussetzungen |
| 1:42 | 1:43 | 1 s | Cooldowns/Voraussetzungen |
| 1:48 | 1:49 | 1 s | Cooldowns/Voraussetzungen |
| 1:50 | 1:51 | 1 s | Cooldowns/Voraussetzungen |

## Ritter

Gesamt **476.818**, Laufzeit 10:00, Rest-Mana 5.266, Rest-HP 9.475. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.523.182.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 470 | 470 | 253.349 | 0 | 0 |
| Donnernde Lanze | 17 | 17 | 60.096 | 12.852 | 0 |
| Brecher des Geistes | 33 | 33 | 33.826 | 3.927 | 0 |
| Schildstoß | 21 | 21 | 32.950 | 5.502 | 0 |
| Schildsturm | 17 | 17 | 29.258 | 4.964 | 0 |
| Mächtiger Hieb | 22 | 22 | 27.985 | 3.960 | 0 |
| Brecher der Deckung | 22 | 22 | 23.101 | 2.904 | 0 |
| Erlösendes Feld | 9 | 9 | 16.254 | 2.853 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:01 | 0:02 | 1 s | Cooldowns/Voraussetzungen |
| 0:19 | 0:20 | 1 s | Cooldowns/Voraussetzungen |
| 0:28 | 0:29 | 1 s | Cooldowns/Voraussetzungen |
| 0:30 | 0:31 | 1 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:39 | 1 s | Cooldowns/Voraussetzungen |
| 0:56 | 0:57 | 1 s | Cooldowns/Voraussetzungen |
| 0:59 | 1:00 | 1 s | Cooldowns/Voraussetzungen |
| 1:15 | 1:16 | 1 s | Cooldowns/Voraussetzungen |
| 1:23 | 1:24 | 1 s | Cooldowns/Voraussetzungen |
| 1:28 | 1:29 | 1 s | Cooldowns/Voraussetzungen |
| 1:32 | 1:33 | 1 s | Cooldowns/Voraussetzungen |
| 1:52 | 1:53 | 1 s | Cooldowns/Voraussetzungen |
| 1:57 | 1:58 | 1 s | Cooldowns/Voraussetzungen |
| 2:08 | 2:09 | 1 s | Cooldowns/Voraussetzungen |
| 2:17 | 2:18 | 1 s | Cooldowns/Voraussetzungen |
| 2:27 | 2:28 | 1 s | Cooldowns/Voraussetzungen |
| 2:29 | 2:30 | 1 s | Cooldowns/Voraussetzungen |
| 2:45 | 2:46 | 1 s | Cooldowns/Voraussetzungen |
| 2:56 | 2:57 | 1 s | Cooldowns/Voraussetzungen |
| 3:03 | 3:04 | 1 s | Cooldowns/Voraussetzungen |

Hinweis: Donnernde Lanze: keine feste Castzeit gespeichert; Ansturm-/Animationsdauer im vereinbarten Test ignoriert (0 s).

## Luminet

Gesamt **720.139**, Laufzeit 10:00, Rest-Mana 2.800, Rest-HP 4.141. Effektive Angriffsheilung 0, Überheilung 3.469, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.279.861.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 245 | 245 | 190.551 | 0 | 0 |
| Energieschlag | 141 | 141 | 182.854 | 21.009 | 0 |
| Luminus | 113 | 113 | 116.215 | 7.345 | 0 |
| Heilige Vernichtung | 13 | 13 | 47.796 | 4.381 | 0 |
| Ätherregen | 5 | 20 | 34.687 | 1.195 | 0 |
| Urteil des Himmels | 14 | 28 | 32.511 | 4.018 | 0 |
| Heiliges Kreuz | 13 | 13 | 24.996 | 3.692 | 0 |
| Eislanze | 15 | 15 | 21.042 | 2.325 | 0 |
| Schwerter des Lichtes | 10 | 10 | 17.912 | 2.570 | 0 |
| Strafendes Licht | 8 | 8 | 16.232 | 2.528 | 0 |
| Astralkörper | 6 | 6 | 13.368 | 2.178 | 0 |
| Göttliche Nova | 4 | 4 | 8.772 | 1.416 | 0 |
| Aurora Wellen | 3 | 3 | 6.818 | 1.125 | 0 |
| Licht kristallenes Gefängnis | 5 | 5 | 6.388 | 635 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: —. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 0 Phasen mit mindestens einem zu teuren bereiten Skill; darin 0 tatsächliche Mana-Wartepausen mit zusammen 0 Sekunden und maximal 0.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.


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

Gesamt **872.697**, Laufzeit 10:00, Rest-Mana 202, Rest-HP 4.057. Effektive Angriffsheilung 1.569, Überheilung 3.323, HP-Regeneration 43.015, Lebenspreise 44.229. Rest-Seelen 11, Rest-Wut 0. Gegner-Restleben 9.127.303.

Große Kombos: soulShackles: 7.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 289 | 289 | 231.010 | 0 | 0 |
| Morrak´s Meister | 2 | 591 | 185.881 | 0 | 0 |
| Feuerball | 128 | 128 | 170.610 | 19.072 | 0 |
| Dunkler Impuls | 108 | 108 | 114.441 | 7.020 | 0 |
| Seelenqual | 55 | 55 | 61.086 | 3.685 | 0 |
| Feuer der Verdammten | 9 | 62 | 38.469 | 4.527 | 0 |
| Schrei der Unterwelt | 8 | 8 | 22.422 | 0 | 0 |
| Lebenssauger | 13 | 13 | 17.102 | 4.602 | 1.569 |
| Sturm des Feuers | 6 | 6 | 9.319 | 1.086 | 0 |
| Meteoritenschauer | 1 | 6 | 9.199 | 2.608 | 0 |
| Seelenfessel | 7 | 7 | 8.191 | 665 | 0 |
| Seelenplage | 3 | 3 | 4.967 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:05. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 431 Phasen mit mindestens einem zu teuren bereiten Skill; darin 342 tatsächliche Mana-Wartepausen mit zusammen 290 Sekunden und maximal 1.29 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:05 | 0:06 | 0 s | Seelenernte | 285 |
| 0:06 | 0:06 | 0 s | Seelenernte | 329 |
| 0:06 | 0:07 | 1 s | Seelenernte | 264 |
| 1:36 | 1:36 | 0 s | Seelenernte | 210 |
| 1:36 | 1:37 | 1 s | Seelenernte | 61 |
| 1:38 | 1:39 | 1 s | Dunkler Impuls | 61 |
| 1:44 | 1:45 | 1 s | Feuer der Verdammten | 53 |
| 1:45 | 1:45 | 0 s | Feuer der Verdammten | 98 |
| 1:45 | 1:46 | 1 s | Feuer der Verdammten | 33 |
| 1:47 | 1:47 | 1 s | Feuer der Verdammten | 33 |
| 1:48 | 1:49 | 1 s | Feuer der Verdammten | 227 |
| 1:49 | 1:50 | 1 s | Feuer der Verdammten | 78 |
| 1:50 | 1:51 | 1 s | Feuer der Verdammten | 13 |
| 1:52 | 1:52 | 1 s | Feuer der Verdammten | 206 |
| 1:53 | 1:53 | 0 s | Feuer der Verdammten | 206 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:06 | 0:07 | 1 s | Mana |
| 0:10 | 0:11 | 1 s | Cooldowns/Voraussetzungen |
| 0:11 | 0:12 | 1 s | Cooldowns/Voraussetzungen |
| 0:14 | 0:15 | 1 s | Cooldowns/Voraussetzungen |
| 0:16 | 0:17 | 1 s | Cooldowns/Voraussetzungen |
| 0:18 | 0:19 | 1 s | Cooldowns/Voraussetzungen |
| 0:22 | 0:24 | 1 s | Cooldowns/Voraussetzungen |
| 0:27 | 0:28 | 1 s | Cooldowns/Voraussetzungen |
| 0:32 | 0:33 | 1 s | Cooldowns/Voraussetzungen |
| 0:35 | 0:36 | 1 s | Cooldowns/Voraussetzungen |
| 0:37 | 0:38 | 1 s | Cooldowns/Voraussetzungen |
| 0:39 | 0:41 | 1 s | Cooldowns/Voraussetzungen |
| 0:43 | 0:45 | 1 s | Cooldowns/Voraussetzungen |
| 0:46 | 0:47 | 1 s | Cooldowns/Voraussetzungen |
| 0:48 | 0:49 | 1 s | Cooldowns/Voraussetzungen |
| 0:53 | 0:54 | 1 s | Cooldowns/Voraussetzungen |
| 0:56 | 0:57 | 1 s | Cooldowns/Voraussetzungen |
| 0:58 | 0:59 | 1 s | Cooldowns/Voraussetzungen |
| 1:00 | 1:01 | 1 s | Cooldowns/Voraussetzungen |
| 1:04 | 1:06 | 1 s | Cooldowns/Voraussetzungen |

## Schamane

Gesamt **597.264**, Laufzeit 10:00, Rest-Mana 245, Rest-HP 4.637. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.402.736.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 428 | 428 | 244.529 | 0 | 0 |
| Infernaler Kreuzschlag | 17 | 17 | 69.419 | 7.602 | 0 |
| Felszähne | 38 | 38 | 58.562 | 8.736 | 0 |
| Verbrennen | 27 | 261 | 41.937 | 6.128 | 0 |
| Erdsäule | 19 | 37 | 39.379 | 6.838 | 0 |
| Sprungschlag | 17 | 17 | 37.570 | 6.662 | 0 |
| Beben | 21 | 21 | 29.699 | 4.278 | 0 |
| Erdbeben | 11 | 11 | 22.008 | 2.465 | 0 |
| Infernal Zyklon | 4 | 24 | 20.226 | 2.894 | 0 |
| Feuerlanze | 15 | 15 | 17.276 | 2.226 | 0 |
| Felsensalve | 1 | 1 | 16.658 | 3.287 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:02. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 544 Phasen mit mindestens einem zu teuren bereiten Skill; darin 482 tatsächliche Mana-Wartepausen mit zusammen 322 Sekunden und maximal 1.01 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:02 | 0:03 | 0 s | Feuerlanze | 28 |
| 0:51 | 0:52 | 1 s | Felsensalve | 1.031 |
| 0:52 | 0:53 | 1 s | Felsensalve | 1.031 |
| 0:53 | 0:54 | 1 s | Felsensalve | 1.031 |
| 0:54 | 0:55 | 1 s | Felsensalve | 1.257 |
| 0:55 | 0:56 | 1 s | Felsensalve | 1.257 |
| 0:57 | 0:57 | 0 s | Felsensalve | 1.483 |
| 0:57 | 0:58 | 1 s | Felsensalve | 1.259 |
| 0:58 | 0:59 | 1 s | Felsensalve | 1.259 |
| 0:59 | 1:00 | 1 s | Felsensalve | 1.259 |
| 1:00 | 1:00 | 0 s | Felsensalve | 1.125 |
| 1:00 | 1:01 | 1 s | Felsensalve | 922 |
| 1:02 | 1:02 | 0 s | Felsensalve | 922 |
| 1:02 | 1:03 | 1 s | Felsensalve | 692 |
| 1:04 | 1:05 | 1 s | Felsensalve | 918 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:03 | 0:04 | 1 s | Cooldowns/Voraussetzungen |
| 0:17 | 0:18 | 1 s | Cooldowns/Voraussetzungen |
| 0:24 | 0:25 | 1 s | Cooldowns/Voraussetzungen |
| 0:32 | 0:33 | 1 s | Cooldowns/Voraussetzungen |
| 0:34 | 0:35 | 1 s | Cooldowns/Voraussetzungen |
| 0:37 | 0:38 | 1 s | Cooldowns/Voraussetzungen |
| 0:43 | 0:44 | 1 s | Cooldowns/Voraussetzungen |
| 0:47 | 0:48 | 1 s | Cooldowns/Voraussetzungen |
| 0:57 | 0:58 | 1 s | Mana |
| 1:00 | 1:01 | 1 s | Mana |
| 1:02 | 1:03 | 1 s | Mana |
| 1:07 | 1:08 | 1 s | Mana |
| 1:09 | 1:10 | 1 s | Mana |
| 1:13 | 1:14 | 1 s | Mana |
| 1:18 | 1:19 | 1 s | Mana |
| 1:23 | 1:24 | 1 s | Mana |
| 1:31 | 1:32 | 1 s | Mana |
| 1:33 | 1:34 | 1 s | Mana |
| 1:40 | 1:41 | 1 s | Mana |
| 1:49 | 1:50 | 1 s | Mana |

## Seelenjäger

Gesamt **603.248**, Laufzeit 10:00, Rest-Mana 326, Rest-HP 4.125. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.396.752.

Große Kombos: soulCollectionWindows: 2; spectralFinishers: 1.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 527 | 527 | 340.864 | 0 | 0 |
| Feuerpfeil | 65 | 65 | 69.862 | 7.280 | 0 |
| Doppelschuss | 22 | 22 | 53.803 | 6.446 | 0 |
| Explosionspfeil | 12 | 36 | 48.917 | 6.408 | 0 |
| Seelensammler | 50 | 50 | 38.390 | 0 | 0 |
| Kopfschuss | 11 | 11 | 36.626 | 5.951 | 0 |
| Kettenschuss | 11 | 11 | 8.699 | 407 | 0 |
| Hinterhältiger Pfeil | 6 | 6 | 4.265 | 108 | 0 |
| Spektralketten | 1 | 1 | 1.823 | 439 | 0 |
| Seelenschuss | 2 | 0 | 0 | 1.920 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:15. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 563 Phasen mit mindestens einem zu teuren bereiten Skill; darin 510 tatsächliche Mana-Wartepausen mit zusammen 272 Sekunden und maximal 0.98 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:15 | 1:15 | 0 s | Seelenschuss | 830 |
| 1:15 | 1:16 | 0 s | Seelenschuss | 830 |
| 1:16 | 1:17 | 0 s | Seelenschuss | 830 |
| 1:17 | 1:18 | 0 s | Seelenschuss | 830 |
| 1:18 | 1:18 | 0 s | Seelenschuss | 959 |
| 1:18 | 1:19 | 1 s | Seelenschuss | 847 |
| 1:20 | 1:20 | 0 s | Seelenschuss | 847 |
| 1:26 | 1:27 | 1 s | Spektralketten | 144 |
| 1:27 | 1:27 | 0 s | Spektralketten | 272 |
| 1:27 | 1:28 | 1 s | Doppelschuss | 160 |
| 1:29 | 1:29 | 0 s | Doppelschuss | 160 |
| 1:30 | 1:30 | 0 s | Doppelschuss | 289 |
| 1:31 | 1:31 | 0 s | Doppelschuss | 289 |
| 1:32 | 1:32 | 0 s | Doppelschuss | 289 |
| 1:36 | 1:36 | 0 s | Explosionspfeil | 253 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Schurke

Gesamt **551.197**, Laufzeit 10:00, Rest-Mana 454, Rest-HP 4.766. Effektive Angriffsheilung 0, Überheilung 757, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.448.803.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 531 | 531 | 285.359 | 0 | 0 |
| Wirbelnde Klinge | 7 | 7 | 39.529 | 4.887 | 0 |
| Brecher des Lichts | 12 | 12 | 37.108 | 4.494 | 0 |
| Klingentornado | 9 | 9 | 36.698 | 4.082 | 0 |
| Dunkler Schlag | 41 | 41 | 33.472 | 2.546 | 0 |
| Tödlicher Tanz | 4 | 4 | 32.269 | 3.545 | 0 |
| Kunai Todesstoß | 37 | 37 | 21.734 | 0 | 0 |
| Sturmklinge | 10 | 10 | 18.694 | 3.152 | 0 |
| Überschallklinge | 6 | 6 | 12.560 | 2.196 | 0 |
| Blutklinge | 9 | 9 | 11.650 | 1.600 | 0 |
| Schattenfalle | 7 | 7 | 8.298 | 1.054 | 0 |
| Schattendolch | 6 | 6 | 8.072 | 1.163 | 0 |
| Schattenschlag | 4 | 4 | 5.754 | 847 | 0 |
| Dunkler Schleier | 7 | 0 | 0 | 428 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:02. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 556 Phasen mit mindestens einem zu teuren bereiten Skill; darin 494 tatsächliche Mana-Wartepausen mit zusammen 259 Sekunden und maximal 5.40 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:02 | 0:02 | 0 s | Blutklinge | 117 |
| 1:09 | 1:10 | 0 s | Tödlicher Tanz | 848 |
| 1:10 | 1:11 | 0 s | Tödlicher Tanz | 848 |
| 1:11 | 1:12 | 0 s | Tödlicher Tanz | 848 |
| 1:14 | 1:14 | 0 s | Blutklinge | 33 |
| 1:14 | 1:15 | 0 s | Blutklinge | 33 |
| 1:15 | 1:16 | 0 s | Blutklinge | 166 |
| 1:16 | 1:17 | 0 s | Blutklinge | 166 |
| 1:17 | 1:18 | 0 s | Blutklinge | 166 |
| 1:30 | 1:30 | 0 s | Schattenschlag | 156 |
| 1:30 | 1:36 | 5 s | Schattenschlag | 5 |
| 1:37 | 1:38 | 1 s | Schattendolch | 60 |
| 1:56 | 1:56 | 1 s | Wirbelnde Klinge | 368 |
| 1:57 | 1:57 | 0 s | Wirbelnde Klinge | 501 |
| 1:58 | 1:58 | 0 s | Wirbelnde Klinge | 501 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 1:30 | 1:36 | 5 s | Mana |
| 1:37 | 1:38 | 1 s | Mana |
| 3:00 | 3:03 | 2 s | Mana |
| 3:03 | 3:06 | 3 s | Mana |
| 4:31 | 4:33 | 2 s | Mana |
| 6:01 | 6:03 | 1 s | Mana |
| 7:31 | 7:36 | 4 s | Mana |
| 7:37 | 7:39 | 2 s | Mana |
| 9:04 | 9:09 | 5 s | Mana |

Hinweis: Die Buff-Tabellen müssen nach den geänderten Eingaben neu gerechnet werden: `node scripts/calculateComparableBuffScenarios.js`. Alte Buff-Zahlen werden nicht eingeblendet.

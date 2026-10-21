# Zehn-Minuten-Schadensvergleich

Aktueller Basisvergleich: permanente Passive und temporäre Klassenbeschwörungen, ohne optionale Eigen- oder Gruppenbuffs. Prozentanteile beziehen sich auf den Gesamtschaden einschließlich Beschwörungen und sind keine vorgegebenen Quoten. Automatische Zusatzangriffe durch eigene Auto-Attacks zählen zur Auto-Attack-Seite. Der Test verwendet seine offengelegte Standardpriorität, keine freie globale Rotationsoptimierung. [Separater Buff-Vergleich](all-class-ten-minute-party-buff-final.md).

Berechnungsstand: 2026-10-19 T 08:27:46.194 Z; Eingabedateien und SHA-256-Prüfsummen sind im JSON gespeichert.

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
| Ritualist | **870.394** | 1.451 | 453.504 | 231.010 | 185.881 | 87.039 | 0:05 | — | 342 | 290 s | 1.29 s | 26.5 % / 52.1 % / 21.4 % |
| Luminet | **720.139** | 1.200 | 529.589 | 190.551 | 0 | 72.014 | — | — | 0 | 0 s | 0.00 s | 26.5 % / 73.5 % / 0.0 % |
| Jäger | **709.921** | 1.183 | 357.609 | 276.640 | 75.671 | 70.992 | — | — | 0 | 0 s | 0.00 s | 39.0 % / 50.4 % / 10.7 % |
| Kräuterkundler | **660.609** | 1.101 | 441.858 | 218.751 | 0 | 66.061 | 2:34 | — | 312 | 264 s | 1.21 s | 33.1 % / 66.9 % / 0.0 % |
| Gladiator | **639.627** | 1.066 | 276.173 | 363.454 | 0 | 63.963 | 2:52 | — | 201 | 125 s | 1.01 s | 56.8 % / 43.2 % / 0.0 % |
| Seelenjäger | **609.984** | 1.017 | 276.235 | 333.749 | 0 | 60.998 | 1:17 | — | 459 | 247 s | 0.98 s | 54.7 % / 45.3 % / 0.0 % |
| Butcher | **605.145** | 1.009 | 241.374 | 363.771 | 0 | 60.515 | 0:01 | 8:45 | 507 | 331 s | 1.00 s | 60.1 % / 39.9 % / 0.0 % |
| Schamane | **587.899** | 980 | 338.228 | 249.671 | 0 | 58.790 | 0:02 | — | 482 | 318 s | 1.01 s | 42.5 % / 57.5 % / 0.0 % |
| Druide | **585.259** | 975 | 358.149 | 149.347 | 77.762 | 58.526 | 0:05 | 0:04 | 24 | 16 s | 0.91 s | 25.5 % / 61.2 % / 13.3 % |
| Schurke | **533.248** | 889 | 248.426 | 284.822 | 0 | 53.325 | 0:03 | — | 505 | 266 s | 5.07 s | 53.4 % / 46.6 % / 0.0 % |
| Heiler | **532.386** | 887 | 360.938 | 171.448 | 0 | 53.239 | — | — | 0 | 0 s | 0.00 s | 32.2 % / 67.8 % / 0.0 % |
| Abenteurer | **506.601** | 844 | 198.794 | 307.807 | 0 | 50.660 | — | — | 0 | 0 s | 0.00 s | 60.8 % / 39.2 % / 0.0 % |
| Ritter | **476.818** | 795 | 223.470 | 253.349 | 0 | 47.682 | — | — | 0 | 0 s | 0.00 s | 53.1 % / 46.9 % / 0.0 % |

## Zahlen richtig lesen und Heiler-Ergebnis nachvollziehen

**Ein zu teurer bereiter Skill bedeutet weder null Mana noch null Leben.** Die Summe der Mana-Wartezeit besteht aus vielen kurzen Pausen; sie ist keine zusammenhängende Regeneration bis zum vollen Pool. Ressourcen werden fortlaufend genutzt. Die Cooldowns bleiben dauerhaft aktiv und werden zwischen Minuten nicht zurückgesetzt. Nur beim Start sind alle Skills gleichzeitig bereit.

Butcher: erster zu teurer Skill 0:01; 565 Phasen mit mindestens einem nicht bezahlbaren Skill. Längste tatsächliche Mana-Pause 1.00 Sekunden.

Luminet: 0 Mana-Wartepausen, zusammen 0.00 Sekunden.

Heiler: Energieschlag auf Stufe 5, Cooldown 2.2 Sekunden nach Castende. 251 Anwendungen erzeugen 214.307 Schaden, eigene Auto-Attacks 171.448. Potenzielle MP-Regeneration 278 alle 3 Sekunden; durchschnittlicher Verbrauch 2.266 Mana pro Minute. Reine Heilzauber sind im Schadenstest ausgeschlossen.

## Mana-Pool, Verbrauch und Regeneration

Basispool und permanente MP-Regeneration ohne optionale Eigenbuffs. Während aktiver Beschwörungen können einzelne Werte temporär abweichen. Potenzielle Regeneration ist am vollen Pool begrenzt.

| Klasse | Mana-Pool | MP-Reg/Tick | Mögliche MP-Reg/min | Verbrauch/min | Tatsächlich regeneriert/min |
| --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 5.651 | 196 | 3.922 | 2.942 | 2.938 |
| Butcher | 4.291 | 156 | 3.112 | 3.523 | 3.112 |
| Druide | 6.536 | 206 | 4.122 | 4.142 | 3.926 |
| Gladiator | 5.057 | 178 | 3.562 | 4.036 | 3.562 |
| Heiler | 6.852 | 278 | 5.552 | 2.266 | 2.266 |
| Kräuterkundler | 6.543 | 220 | 4.408 | 5.028 | 4.408 |
| Jäger | 4.581 | 165 | 3.292 | 3.502 | 3.292 |
| Ritter | 5.983 | 216 | 4.320 | 3.696 | 3.625 |
| Luminet | 6.017 | 256 | 5.120 | 5.442 | 5.120 |
| Ritualist | 4.837 | 189 | 3.782 | 4.327 | 3.863 |
| Schamane | 6.123 | 226 | 4.524 | 5.098 | 4.524 |
| Seelenjäger | 3.565 | 129 | 2.572 | 2.906 | 2.572 |
| Schurke | 3.828 | 133 | 2.662 | 2.986 | 2.662 |

## Sensitivität: Mana für den stärksten bereiten Angriff zurückhalten

Der Hauptlauf verwendet die erste bezahlbare priorisierte Aktion. Der Zusatzlauf wartet bei fehlendem Mana für die höchste Priorität mit Auto-Attacks, statt billigere Skills zu wirken. Das ist eine andere Steuerung, keine geänderte Klasse.

| Klasse | Hauptlauf | Mit Manareserve | Unterschied |
| --- | ---: | ---: | ---: |
| Abenteurer | 506.601 | 506.601 | 0 |
| Butcher | 605.145 | 564.844 | -40.301 |
| Druide | 585.259 | 580.045 | -5.214 |
| Gladiator | 639.627 | 636.664 | -2.963 |
| Heiler | 532.386 | 532.386 | 0 |
| Kräuterkundler | 660.609 | 648.669 | -11.940 |
| Jäger | 709.921 | 709.921 | 0 |
| Ritter | 476.818 | 476.818 | 0 |
| Luminet | 720.139 | 720.139 | 0 |
| Ritualist | 870.394 | 851.235 | -19.159 |
| Schamane | 587.899 | 583.228 | -4.671 |
| Seelenjäger | 609.984 | 616.071 | 6.087 |
| Schurke | 533.248 | 532.260 | -988 |

Ein Mana-Hindernis bedeutet: mindestens ein bereiter priorisierter Skill ist nicht bezahlbar. Das ist nicht zwangsläufig ein leerer Pool oder Stillstand; günstigere Skills und Auto-Attacks bleiben erlaubt. Mana-Wartezeit ist die Summe vieler einzelner Zeitstücke ohne bezahlbare gewählte Skillaktion; Auto-Attacks gehen weiter. Sie ist keine Zeit bis zum vollen Mana-Pool und keine HP-Ausfallzeit. Die Zahl der Mana-Wartephasen zählt diese tatsächlich getrennten Pausen. Andere Wartezeiten wie Tarnrückkehr sind getrennt erfasst.

## Schaden pro Minute

| Klasse | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Ø |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 59.697 | 50.398 | 48.646 | 48.160 | 50.800 | 48.244 | 52.502 | 49.109 | 48.792 | 50.252 | 50.660 |
| Butcher | 74.891 | 57.556 | 59.431 | 59.219 | 60.272 | 56.785 | 59.246 | 58.238 | 59.479 | 60.026 | 60.515 |
| Druide | 69.135 | 51.207 | 64.106 | 50.634 | 67.437 | 50.877 | 63.577 | 51.644 | 67.067 | 49.575 | 58.526 |
| Gladiator | 83.095 | 61.106 | 69.578 | 55.531 | 63.891 | 58.638 | 60.517 | 64.328 | 58.681 | 64.262 | 63.963 |
| Heiler | 59.218 | 50.032 | 52.425 | 55.166 | 49.954 | 54.131 | 53.026 | 52.688 | 53.363 | 52.382 | 53.239 |
| Kräuterkundler | 82.826 | 72.292 | 62.836 | 64.108 | 62.185 | 63.284 | 60.650 | 66.263 | 63.107 | 63.060 | 66.061 |
| Jäger | 80.577 | 68.386 | 68.248 | 69.578 | 72.171 | 69.013 | 68.645 | 69.349 | 71.967 | 71.988 | 70.992 |
| Ritter | 53.427 | 48.510 | 43.793 | 50.075 | 47.971 | 43.770 | 49.535 | 43.254 | 47.971 | 48.510 | 47.682 |
| Luminet | 84.261 | 64.315 | 75.550 | 68.243 | 76.122 | 67.247 | 75.846 | 67.189 | 75.819 | 65.547 | 72.014 |
| Ritualist | 118.090 | 92.783 | 86.425 | 84.099 | 87.196 | 61.432 | 87.373 | 83.685 | 83.008 | 86.304 | 87.039 |
| Schamane | 81.307 | 60.989 | 56.316 | 55.470 | 55.366 | 55.470 | 56.782 | 56.622 | 51.801 | 57.775 | 58.790 |
| Seelenjäger | 80.127 | 68.488 | 55.259 | 57.841 | 57.338 | 55.158 | 60.003 | 59.382 | 58.730 | 57.656 | 60.998 |
| Schurke | 74.838 | 53.090 | 52.178 | 51.031 | 51.813 | 49.656 | 50.955 | 48.847 | 52.178 | 48.662 | 53.325 |

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

Gesamt **605.145**, Laufzeit 10:00, Rest-Mana 182, Rest-HP 5.891. Effektive Angriffsheilung 0, Überheilung 252, HP-Regeneration 4.948, Lebenspreise 4.948. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.394.855.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 449 | 449 | 363.771 | 0 | 0 |
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

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:01. Erstmals wirklich 0 Mana: 8:45, insgesamt 1 Ereignisse mit vollständig ausgegebenem Mana. 565 Phasen mit mindestens einem zu teuren bereiten Skill; darin 507 tatsächliche Mana-Wartepausen mit zusammen 331 Sekunden und maximal 1.00 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 8:45.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:01 | 0:01 | 0 s | Schockwelle der Regeneration | 552 |
| 0:01 | 0:02 | 0 s | Schockwelle der Regeneration | 552 |
| 0:02 | 0:02 | 0 s | Dämonische Schockwelle | 209 |
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
| 1:57 | 1:58 | 1 s | Mana |

## Druide

Gesamt **585.259**, Laufzeit 10:00, Rest-Mana 4.378, Rest-HP 4.278. Effektive Angriffsheilung 0, Überheilung 3.074, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.414.741.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 227 | 227 | 155.525 | 5.902 | 0 |
| Auto-Attack | 376 | 376 | 149.347 | 0 | 0 |
| Naturgeist | 2 | 658 | 77.762 | 264 | 0 |
| Himmelsbrecher | 5 | 10 | 42.996 | 8.550 | 0 |
| Eisranken | 27 | 135 | 32.728 | 4.266 | 0 |
| Ätherregen | 5 | 20 | 30.743 | 1.195 | 0 |
| Vakuumimpuls | 7 | 14 | 28.107 | 3.337 | 0 |
| Windschlitzer | 15 | 15 | 21.988 | 3.144 | 0 |
| Windfesseln | 19 | 19 | 21.600 | 2.538 | 0 |
| Eislanze | 15 | 15 | 18.122 | 2.325 | 0 |
| Manaexplosion | 2 | 2 | 4.873 | 9.822 | 0 |
| Bannmagie | 2 | 2 | 1.468 | 72 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:05. Erstmals wirklich 0 Mana: 0:04, insgesamt 2 Ereignisse mit vollständig ausgegebenem Mana. 34 Phasen mit mindestens einem zu teuren bereiten Skill; darin 24 tatsächliche Mana-Wartepausen mit zusammen 16 Sekunden und maximal 0.91 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 0:04, 6:05.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:05 | 0:06 | 0 s | Energieschlag | 0 |
| 6:07 | 6:07 | 0 s | Windschlitzer | 206 |
| 6:07 | 6:08 | 1 s | Windschlitzer | 180 |
| 6:08 | 6:09 | 0 s | Windschlitzer | 180 |
| 6:26 | 6:27 | 1 s | Himmelsbrecher | 631 |
| 6:27 | 6:27 | 0 s | Himmelsbrecher | 679 |
| 6:27 | 6:28 | 1 s | Himmelsbrecher | 653 |
| 6:29 | 6:29 | 1 s | Himmelsbrecher | 653 |
| 6:30 | 6:30 | 0 s | Himmelsbrecher | 859 |
| 6:30 | 6:30 | 0 s | Himmelsbrecher | 833 |
| 6:30 | 6:31 | 1 s | Himmelsbrecher | 700 |
| 6:31 | 6:32 | 1 s | Himmelsbrecher | 700 |
| 6:32 | 6:33 | 1 s | Himmelsbrecher | 674 |
| 6:34 | 6:34 | 1 s | Himmelsbrecher | 880 |
| 6:35 | 6:35 | 0 s | Himmelsbrecher | 880 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Gladiator

Gesamt **639.627**, Laufzeit 10:00, Rest-Mana 315, Rest-HP 7.461. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 8. Gegner-Restleben 9.360.373.

Große Kombos: rageOutbursts: 5.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 468 | 468 | 363.454 | 0 | 0 |
| Blutiger Durchbruch | 6 | 18 | 46.533 | 12.960 | 0 |
| Sprungschlag | 16 | 16 | 38.133 | 6.464 | 0 |
| Mächtiger Hieb | 22 | 22 | 33.255 | 3.960 | 0 |
| Schmetterschlag | 14 | 14 | 30.034 | 4.802 | 0 |
| Holzspalter | 17 | 17 | 26.602 | 3.332 | 0 |
| Kriegerischer Ansturm | 11 | 11 | 23.932 | 3.839 | 0 |
| Ausbruch der Wut | 5 | 5 | 23.496 | 0 | 0 |
| Wutklinge | 10 | 10 | 21.665 | 0 | 0 |
| Sturm der Wut | 8 | 8 | 16.308 | 0 | 0 |
| Wutexplosion | 6 | 6 | 16.215 | 0 | 0 |
| Energie der Wut | 11 | 0 | 0 | 5.005 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 2:52. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 226 Phasen mit mindestens einem zu teuren bereiten Skill; darin 201 tatsächliche Mana-Wartepausen mit zusammen 125 Sekunden und maximal 1.01 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 2:52 | 2:53 | 1 s | Kriegerischer Ansturm | 342 |
| 2:53 | 2:54 | 0 s | Kriegerischer Ansturm | 342 |
| 2:54 | 2:55 | 0 s | Energie der Wut | 171 |
| 2:55 | 2:56 | 0 s | Energie der Wut | 171 |
| 2:56 | 2:56 | 0 s | Energie der Wut | 171 |
| 2:57 | 2:57 | 0 s | Energie der Wut | 349 |
| 2:58 | 2:58 | 1 s | Energie der Wut | 349 |
| 2:59 | 2:59 | 1 s | Energie der Wut | 349 |
| 3:03 | 3:03 | 1 s | Sprungschlag | 250 |
| 3:04 | 3:04 | 0 s | Sprungschlag | 250 |
| 3:04 | 3:05 | 1 s | Sprungschlag | 250 |
| 4:05 | 4:05 | 0 s | Blutiger Durchbruch | 1.105 |
| 4:05 | 4:06 | 1 s | Blutiger Durchbruch | 1.105 |
| 4:06 | 4:07 | 1 s | Blutiger Durchbruch | 1.283 |
| 4:07 | 4:08 | 1 s | Blutiger Durchbruch | 1.283 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:31 | 0:32 | 1 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:39 | 1 s | Cooldowns/Voraussetzungen |
| 0:41 | 0:42 | 1 s | Cooldowns/Voraussetzungen |
| 0:45 | 0:46 | 1 s | Cooldowns/Voraussetzungen |
| 0:47 | 0:48 | 1 s | Cooldowns/Voraussetzungen |
| 0:57 | 0:58 | 1 s | Cooldowns/Voraussetzungen |
| 1:14 | 1:15 | 1 s | Cooldowns/Voraussetzungen |
| 1:18 | 1:19 | 1 s | Cooldowns/Voraussetzungen |
| 1:22 | 1:23 | 1 s | Cooldowns/Voraussetzungen |
| 1:27 | 1:28 | 1 s | Cooldowns/Voraussetzungen |
| 1:50 | 1:51 | 1 s | Cooldowns/Voraussetzungen |
| 2:08 | 2:09 | 1 s | Cooldowns/Voraussetzungen |
| 2:11 | 2:12 | 1 s | Cooldowns/Voraussetzungen |
| 2:13 | 2:14 | 1 s | Cooldowns/Voraussetzungen |
| 2:22 | 2:23 | 1 s | Cooldowns/Voraussetzungen |
| 2:26 | 2:27 | 1 s | Cooldowns/Voraussetzungen |
| 2:32 | 2:33 | 1 s | Cooldowns/Voraussetzungen |
| 2:44 | 2:45 | 1 s | Cooldowns/Voraussetzungen |
| 2:49 | 2:50 | 1 s | Cooldowns/Voraussetzungen |
| 2:52 | 2:53 | 1 s | Mana |

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

Gesamt **660.609**, Laufzeit 10:00, Rest-Mana 347, Rest-HP 5.096. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.339.391.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 293 | 293 | 218.751 | 0 | 0 |
| Elektrisches Feld | 26 | 130 | 116.947 | 7.176 | 0 |
| Gezielter Blitz | 33 | 33 | 66.563 | 10.131 | 0 |
| Kugelblitz | 21 | 21 | 51.841 | 8.904 | 0 |
| Geladener Nebel | 27 | 27 | 48.751 | 7.236 | 0 |
| Ewiges Eis | 24 | 24 | 35.654 | 4.512 | 0 |
| Wasserfesseln | 44 | 44 | 34.918 | 528 | 0 |
| Windschlitzer | 20 | 20 | 31.932 | 4.300 | 0 |
| Eislanze | 23 | 23 | 31.616 | 3.565 | 0 |
| Tobender Sturm | 2 | 18 | 23.636 | 3.924 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 2:34. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 379 Phasen mit mindestens einem zu teuren bereiten Skill; darin 312 tatsächliche Mana-Wartepausen mit zusammen 264 Sekunden und maximal 1.21 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 2:34 | 2:35 | 1 s | Tobender Sturm | 1.291 |
| 2:35 | 2:36 | 1 s | Tobender Sturm | 1.076 |
| 2:36 | 2:37 | 0 s | Tobender Sturm | 1.297 |
| 2:37 | 2:38 | 1 s | Tobender Sturm | 1.285 |
| 2:39 | 2:39 | 1 s | Tobender Sturm | 1.505 |
| 2:40 | 2:40 | 0 s | Tobender Sturm | 1.505 |
| 2:40 | 2:42 | 1 s | Tobender Sturm | 1.237 |
| 2:42 | 2:43 | 1 s | Tobender Sturm | 1.458 |
| 2:43 | 2:44 | 1 s | Tobender Sturm | 1.458 |
| 2:44 | 2:44 | 0 s | Tobender Sturm | 1.303 |
| 2:45 | 2:46 | 1 s | Tobender Sturm | 1.247 |
| 2:46 | 2:46 | 0 s | Tobender Sturm | 1.247 |
| 2:47 | 2:48 | 1 s | Tobender Sturm | 940 |
| 2:48 | 2:49 | 1 s | Tobender Sturm | 1.160 |
| 2:50 | 2:51 | 1 s | Tobender Sturm | 1.160 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:04 | 0:06 | 1 s | Cooldowns/Voraussetzungen |
| 0:18 | 0:19 | 1 s | Cooldowns/Voraussetzungen |
| 0:20 | 0:21 | 1 s | Cooldowns/Voraussetzungen |
| 0:25 | 0:26 | 1 s | Cooldowns/Voraussetzungen |
| 0:28 | 0:29 | 1 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:34 | 1 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:40 | 1 s | Cooldowns/Voraussetzungen |
| 0:46 | 0:47 | 1 s | Cooldowns/Voraussetzungen |
| 0:47 | 0:49 | 1 s | Cooldowns/Voraussetzungen |
| 0:53 | 0:54 | 1 s | Cooldowns/Voraussetzungen |
| 0:59 | 1:00 | 1 s | Cooldowns/Voraussetzungen |
| 1:04 | 1:05 | 1 s | Cooldowns/Voraussetzungen |
| 1:11 | 1:12 | 1 s | Cooldowns/Voraussetzungen |
| 1:13 | 1:14 | 1 s | Cooldowns/Voraussetzungen |
| 1:15 | 1:16 | 1 s | Cooldowns/Voraussetzungen |
| 1:18 | 1:19 | 1 s | Cooldowns/Voraussetzungen |
| 1:24 | 1:25 | 1 s | Cooldowns/Voraussetzungen |
| 1:27 | 1:28 | 1 s | Cooldowns/Voraussetzungen |
| 1:34 | 1:36 | 1 s | Cooldowns/Voraussetzungen |
| 1:41 | 1:42 | 1 s | Cooldowns/Voraussetzungen |

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

Gesamt **870.394**, Laufzeit 10:00, Rest-Mana 202, Rest-HP 4.057. Effektive Angriffsheilung 1.569, Überheilung 3.323, HP-Regeneration 43.015, Lebenspreise 44.229. Rest-Seelen 11, Rest-Wut 0. Gegner-Restleben 9.129.606.

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
| Seelenfessel | 7 | 7 | 8.191 | 665 | 0 |
| Meteoritenschauer | 1 | 6 | 6.896 | 2.608 | 0 |
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

Gesamt **587.899**, Laufzeit 10:00, Rest-Mana 379, Rest-HP 4.637. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.412.101.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 437 | 437 | 249.671 | 0 | 0 |
| Infernaler Kreuzschlag | 18 | 18 | 73.502 | 8.049 | 0 |
| Felszähne | 36 | 36 | 55.480 | 8.276 | 0 |
| Erdsäule | 19 | 38 | 39.656 | 6.838 | 0 |
| Sprungschlag | 16 | 16 | 35.360 | 6.270 | 0 |
| Beben | 20 | 20 | 28.285 | 4.074 | 0 |
| Infernal Zyklon | 5 | 30 | 25.282 | 3.618 | 0 |
| Verbrennen | 25 | 250 | 24.720 | 5.820 | 0 |
| Erdbeben | 11 | 11 | 22.008 | 2.465 | 0 |
| Feuerlanze | 15 | 15 | 17.276 | 2.284 | 0 |
| Felsensalve | 1 | 1 | 16.658 | 3.287 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:02. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 547 Phasen mit mindestens einem zu teuren bereiten Skill; darin 482 tatsächliche Mana-Wartepausen mit zusammen 318 Sekunden und maximal 1.01 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:02 | 0:03 | 0 s | Verbrennen | 103 |
| 0:51 | 0:52 | 1 s | Felsensalve | 1.005 |
| 0:53 | 0:53 | 1 s | Felsensalve | 1.005 |
| 0:54 | 0:54 | 1 s | Felsensalve | 1.232 |
| 0:55 | 0:55 | 1 s | Felsensalve | 1.232 |
| 0:56 | 0:57 | 1 s | Felsensalve | 1.232 |
| 0:57 | 0:58 | 1 s | Felsensalve | 1.234 |
| 0:58 | 0:59 | 1 s | Felsensalve | 1.234 |
| 0:59 | 1:00 | 1 s | Felsensalve | 1.234 |
| 1:00 | 1:00 | 0 s | Felsensalve | 1.100 |
| 1:00 | 1:01 | 1 s | Felsensalve | 896 |
| 1:02 | 1:02 | 1 s | Felsensalve | 896 |
| 1:03 | 1:03 | 0 s | Felsensalve | 1.123 |
| 1:03 | 1:04 | 1 s | Felsensalve | 893 |
| 1:04 | 1:05 | 1 s | Felsensalve | 893 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:03 | 0:04 | 1 s | Cooldowns/Voraussetzungen |
| 0:17 | 0:18 | 1 s | Cooldowns/Voraussetzungen |
| 0:25 | 0:26 | 1 s | Cooldowns/Voraussetzungen |
| 0:32 | 0:33 | 1 s | Cooldowns/Voraussetzungen |
| 0:34 | 0:35 | 1 s | Cooldowns/Voraussetzungen |
| 0:37 | 0:38 | 1 s | Cooldowns/Voraussetzungen |
| 0:42 | 0:43 | 1 s | Cooldowns/Voraussetzungen |
| 0:48 | 0:49 | 1 s | Cooldowns/Voraussetzungen |
| 0:57 | 0:58 | 1 s | Mana |
| 1:00 | 1:01 | 1 s | Mana |
| 1:03 | 1:04 | 1 s | Mana |
| 1:07 | 1:08 | 1 s | Mana |
| 1:10 | 1:11 | 1 s | Mana |
| 1:13 | 1:14 | 1 s | Mana |
| 1:18 | 1:19 | 1 s | Mana |
| 1:23 | 1:24 | 1 s | Mana |
| 1:29 | 1:30 | 1 s | Mana |
| 1:33 | 1:34 | 1 s | Mana |
| 1:40 | 1:41 | 1 s | Mana |
| 1:49 | 1:50 | 1 s | Mana |

## Seelenjäger

Gesamt **609.984**, Laufzeit 10:00, Rest-Mana 229, Rest-HP 4.125. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.390.016.

Große Kombos: soulCollectionWindows: 8; spectralFinishers: 1.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 516 | 516 | 333.749 | 0 | 0 |
| Feuerpfeil | 63 | 63 | 67.712 | 7.056 | 0 |
| Seelensammler | 85 | 85 | 65.263 | 4.080 | 0 |
| Doppelschuss | 23 | 23 | 56.249 | 6.739 | 0 |
| Explosionspfeil | 12 | 36 | 48.917 | 6.468 | 0 |
| Kopfschuss | 7 | 7 | 23.307 | 3.759 | 0 |
| Kettenschuss | 11 | 11 | 8.699 | 407 | 0 |
| Hinterhältiger Pfeil | 6 | 6 | 4.265 | 108 | 0 |
| Spektralketten | 1 | 1 | 1.823 | 439 | 0 |
| Seelenschuss | 8 | 0 | 0 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:17. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 506 Phasen mit mindestens einem zu teuren bereiten Skill; darin 459 tatsächliche Mana-Wartepausen mit zusammen 247 Sekunden und maximal 0.98 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:17 | 1:18 | 1 s | Seelensammler | 7 |
| 1:18 | 1:19 | 1 s | Seelensammler | 40 |
| 1:19 | 1:20 | 0 s | Spektralketten | 40 |
| 1:20 | 1:21 | 0 s | Spektralketten | 40 |
| 1:21 | 1:21 | 0 s | Doppelschuss | 168 |
| 1:21 | 1:22 | 1 s | Doppelschuss | 56 |
| 1:23 | 1:23 | 0 s | Doppelschuss | 56 |
| 1:24 | 1:24 | 0 s | Doppelschuss | 185 |
| 1:25 | 1:25 | 0 s | Doppelschuss | 185 |
| 1:26 | 1:26 | 0 s | Doppelschuss | 185 |
| 1:36 | 1:36 | 0 s | Explosionspfeil | 294 |
| 1:37 | 1:37 | 0 s | Explosionspfeil | 294 |
| 1:38 | 1:38 | 0 s | Explosionspfeil | 294 |
| 1:39 | 1:39 | 0 s | Explosionspfeil | 423 |
| 1:40 | 1:40 | 0 s | Explosionspfeil | 423 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Schurke

Gesamt **533.248**, Laufzeit 10:00, Rest-Mana 590, Rest-HP 4.766. Effektive Angriffsheilung 0, Überheilung 673, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.466.752.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 530 | 530 | 284.822 | 0 | 0 |
| Brecher des Lichts | 13 | 13 | 40.200 | 4.868 | 0 |
| Wirbelnde Klinge | 7 | 7 | 39.529 | 4.887 | 0 |
| Dunkler Schlag | 42 | 42 | 34.289 | 2.608 | 0 |
| Klingentornado | 8 | 8 | 32.621 | 3.628 | 0 |
| Kunai Todesstoß | 37 | 37 | 21.734 | 0 | 0 |
| Sturmklinge | 10 | 10 | 18.694 | 3.152 | 0 |
| Tödlicher Tanz | 2 | 2 | 16.134 | 1.773 | 0 |
| Überschallklinge | 6 | 6 | 12.560 | 2.207 | 0 |
| Blutklinge | 8 | 8 | 10.355 | 2.589 | 0 |
| Schattenschlag | 6 | 6 | 8.630 | 1.270 | 0 |
| Schattenfalle | 7 | 7 | 8.298 | 1.054 | 0 |
| Schattendolch | 4 | 4 | 5.382 | 775 | 0 |
| Dunkler Schleier | 7 | 0 | 0 | 1.046 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:03. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 575 Phasen mit mindestens einem zu teuren bereiten Skill; darin 505 tatsächliche Mana-Wartepausen mit zusammen 266 Sekunden und maximal 5.07 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:03 | 0:03 | 0 s | Blutklinge | 160 |
| 0:03 | 0:03 | 0 s | Blutklinge | 97 |
| 0:04 | 0:04 | 1 s | Blutklinge | 97 |
| 0:05 | 0:05 | 0 s | Blutklinge | 97 |
| 0:06 | 0:06 | 0 s | Blutklinge | 231 |
| 0:07 | 0:07 | 0 s | Blutklinge | 231 |
| 0:08 | 0:08 | 0 s | Blutklinge | 231 |
| 0:08 | 0:09 | 0 s | Blutklinge | 231 |
| 1:09 | 1:10 | 0 s | Tödlicher Tanz | 612 |
| 1:10 | 1:11 | 0 s | Tödlicher Tanz | 612 |
| 1:11 | 1:12 | 0 s | Tödlicher Tanz | 612 |
| 1:12 | 1:13 | 0 s | Tödlicher Tanz | 745 |
| 1:13 | 1:13 | 0 s | Tödlicher Tanz | 745 |
| 1:14 | 1:14 | 1 s | Tödlicher Tanz | 683 |
| 1:15 | 1:15 | 0 s | Tödlicher Tanz | 816 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 1:30 | 1:33 | 3 s | Mana |
| 1:33 | 1:38 | 5 s | Mana |
| 3:01 | 3:03 | 1 s | Mana |
| 4:30 | 4:36 | 5 s | Mana |
| 4:37 | 4:38 | 1 s | Mana |
| 6:02 | 6:06 | 3 s | Mana |
| 7:33 | 7:36 | 3 s | Mana |
| 7:36 | 7:39 | 3 s | Mana |
| 7:40 | 7:41 | 1 s | Mana |
| 9:05 | 9:09 | 4 s | Mana |

## Gegenprüfung: freie Auswahl statt erzwungener Skillnutzung

Gleiche ungebuffte Bedingungen und 600 Sekunden. Klassenbeschwörungen zählen in allen Spalten zum Gesamtschaden. Die Suche darf Skills und Kombo-Setups auslassen; sie verwendet keine Zielschadenswerte oder Prozentquoten. Beste gefundene Varianten einer begrenzten Suche, kein Beweis des globalen Optimums. Die ursprüngliche Standardtabelle oben bleibt als Referenz erhalten. [Vollständige Gegenprüfung und verwendete Skills](unbuffed-auto-versus-skills-check.md).

| Klasse | Nur Auto-Attacks + Beschwörung | Standardlauf | Bester gefundener Lauf | Gewinn gegen nur Auto-Attacks |
| --- | ---: | ---: | ---: | ---: |
| Abenteurer | 334.097 | 506.601 | 506.601 | 51.6 % |
| Butcher | 446.409 | 605.145 | 620.146 | 38.9 % |
| Druide | 315.567 | 585.259 | 587.204 | 86.1 % |
| Gladiator | 391.514 | 639.627 | 641.230 | 63.8 % |
| Heiler | 338.646 | 532.386 | 536.059 | 58.3 % |
| Kräuterkundler | 344.925 | 660.609 | 666.180 | 93.1 % |
| Jäger | 439.430 | 709.921 | 713.742 | 62.4 % |
| Ritter | 294.316 | 476.818 | 476.818 | 62.0 % |
| Luminet | 352.136 | 720.139 | 735.165 | 108.8 % |
| Ritualist | 627.759 | 870.394 | 1.022.891 | 62.9 % |
| Schamane | 311.946 | 587.899 | 601.607 | 92.9 % |
| Seelenjäger | 401.016 | 609.984 | 639.102 | 59.4 % |
| Schurke | 353.072 | 533.248 | 593.116 | 68.0 % |

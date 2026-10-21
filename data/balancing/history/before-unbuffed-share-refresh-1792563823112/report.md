# All Class Timed Damage – 600-Sekunden-Test

Aktueller Basisvergleich: permanente Passive und temporäre Klassenbeschwörungen, ohne optionale Eigen- oder Gruppenbuffs. Prozentanteile beziehen sich auf den Gesamtschaden einschließlich Beschwörungen und sind keine vorgegebenen Quoten. Automatische Zusatzangriffe durch eigene Auto-Attacks zählen zur Auto-Attack-Seite. Der Test verwendet seine offengelegte Standardpriorität, keine freie globale Rotationsoptimierung. Die beiden aktuellen Buff-Vergleiche stehen direkt unter der Haupttabelle.

Berechnungsstand: 2026-10-21 T 06:08:22.522 Z; Eingabedateien und SHA-256-Prüfsummen sind im JSON gespeichert.

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
| Ritualist | **613.628** | 1.023 | 304.400 | 191.557 | 117.671 | 61.363 | 0:01 | — | 419 | 382 s | 1.21 s | 31.2 % / 49.6 % / 19.2 % |
| Jäger | **595.015** | 992 | 266.317 | 228.665 | 100.033 | 59.502 | 1:05 | — | 348 | 286 s | 1.19 s | 38.4 % / 44.8 % / 16.8 % |
| Gladiator | **583.179** | 972 | 236.778 | 346.401 | 0 | 58.318 | 0:02 | — | 431 | 272 s | 1.01 s | 59.4 % / 40.6 % / 0.0 % |
| Luminet | **579.932** | 967 | 390.264 | 189.668 | 0 | 57.993 | 1:33 | 4:32 | 354 | 321 s | 1.21 s | 32.7 % / 67.3 % / 0.0 % |
| Druide | **540.132** | 900 | 310.240 | 127.376 | 102.516 | 54.013 | 0:02 | 0:02 | 297 | 199 s | 0.91 s | 23.6 % / 57.4 % / 19.0 % |
| Butcher | **517.153** | 862 | 198.105 | 319.048 | 0 | 51.715 | 0:00 | — | 518 | 340 s | 1.01 s | 61.7 % / 38.3 % / 0.0 % |
| Heiler | **503.347** | 839 | 358.719 | 144.627 | 0 | 50.335 | — | — | 0 | 0 s | 0.00 s | 28.7 % / 71.3 % / 0.0 % |
| Kräuterkundler | **488.721** | 815 | 272.998 | 215.724 | 0 | 48.872 | 0:03 | 8:17 | 404 | 356 s | 1.21 s | 44.1 % / 55.9 % / 0.0 % |
| Seelenjäger | **485.925** | 810 | 200.664 | 285.262 | 0 | 48.593 | 0:06 | — | 555 | 300 s | 0.90 s | 58.7 % / 41.3 % / 0.0 % |
| Abenteurer | **439.897** | 733 | 175.938 | 263.960 | 0 | 43.990 | 4:18 | — | 147 | 74 s | 0.90 s | 60.0 % / 40.0 % / 0.0 % |
| Schurke | **432.885** | 721 | 200.105 | 232.780 | 0 | 43.289 | 0:02 | — | 561 | 309 s | 5.60 s | 53.8 % / 46.2 % / 0.0 % |
| Schamane | **424.889** | 708 | 206.116 | 218.774 | 0 | 42.489 | 0:00 | — | 510 | 345 s | 1.01 s | 51.5 % / 48.5 % / 0.0 % |
| Ritter | **372.949** | 622 | 176.146 | 196.803 | 0 | 37.295 | 1:51 | — | 363 | 236 s | 1.01 s | 52.8 % / 47.2 % / 0.0 % |

<!-- BUFF_COMPARISONS_START -->

## Mit regulär aktivierten Eigenbuffs

Gleiche 600 Sekunden, Ausrüstung und feste Angriffspriorität wie oben. Eigenbuffs starten inaktiv, werden gewirkt und bezahlt und gelten nur für ihre normale Laufzeit. Keine Gruppenbuffs oder Provokation; keine neue Rotationsoptimierung.

| Klasse | Schaden | DPS | Skills | Auto-Attacks | Beschwörungen | Ø pro Minute | Erstmals Skill zu teuer | Erstmals Mana=0 | Mana-Wartephasen | Mana-Wartezeit gesamt | Längste Mana-Pause | Anteile AA / Skills / Beschw. | Änderung zum Basislauf |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: | --- | ---: |
| Ritualist | **640.659** | 1.068 | 321.610 | 200.350 | 118.698 | 64.066 | 0:00 | — | 412 | 379 s | 1.21 s | 31.3 % / 50.2 % / 18.5 % | +27.031 (+4.4 %) |
| Jäger | **627.841** | 1.046 | 269.467 | 256.032 | 102.341 | 62.784 | 0:03 | — | 411 | 336 s | 1.19 s | 40.8 % / 42.9 % / 16.3 % | +32.826 (+5.5 %) |
| Luminet | **604.400** | 1.007 | 390.297 | 214.104 | 0 | 60.440 | 0:52 | — | 367 | 330 s | 1.21 s | 35.4 % / 64.6 % / 0.0 % | +24.468 (+4.2 %) |
| Gladiator | **599.335** | 999 | 227.298 | 372.037 | 0 | 59.933 | 0:02 | — | 487 | 311 s | 1.01 s | 62.1 % / 37.9 % / 0.0 % | +16.156 (+2.8 %) |
| Druide | **555.087** | 925 | 321.286 | 129.075 | 104.726 | 55.509 | 0:02 | 0:03 | 331 | 218 s | 0.91 s | 23.3 % / 57.9 % / 18.9 % | +14.954 (+2.8 %) |
| Butcher | **554.703** | 925 | 201.106 | 353.597 | 0 | 55.470 | 0:01 | — | 543 | 328 s | 1.01 s | 63.7 % / 36.3 % / 0.0 % | +37.550 (+7.3 %) |
| Seelenjäger | **517.191** | 862 | 200.575 | 316.615 | 0 | 51.719 | 0:06 | 4:00 | 594 | 315 s | 0.88 s | 61.2 % / 38.8 % / 0.0 % | +31.265 (+6.4 %) |
| Heiler | **515.389** | 859 | 377.368 | 138.021 | 0 | 51.539 | — | — | 0 | 0 s | 0.00 s | 26.8 % / 73.2 % / 0.0 % | +12.042 (+2.4 %) |
| Kräuterkundler | **505.915** | 843 | 289.199 | 216.716 | 0 | 50.592 | 0:02 | 2:45 | 407 | 359 s | 1.21 s | 42.8 % / 57.2 % / 0.0 % | +17.194 (+3.5 %) |
| Abenteurer | **476.688** | 794 | 182.210 | 294.478 | 0 | 47.669 | 3:49 | — | 178 | 86 s | 0.89 s | 61.8 % / 38.2 % / 0.0 % | +36.790 (+8.4 %) |
| Schurke | **465.085** | 775 | 200.198 | 264.887 | 0 | 46.508 | 0:03 | — | 611 | 297 s | 5.69 s | 57.0 % / 43.0 % / 0.0 % | +32.200 (+7.4 %) |
| Schamane | **461.034** | 768 | 210.178 | 250.855 | 0 | 46.103 | 0:00 | — | 511 | 344 s | 1.01 s | 54.4 % / 45.6 % / 0.0 % | +36.144 (+8.5 %) |
| Ritter | **394.692** | 658 | 175.374 | 219.318 | 0 | 39.469 | 1:15 | — | 426 | 275 s | 1.01 s | 55.6 % / 44.4 % / 0.0 % | +21.743 (+5.8 %) |

## Eigenbuffs plus permanente Gruppenbuffs

Eigenbuffs wie im vorigen Test; zusätzlich alle aktuell zugeordneten öffentlichen Gruppenbuffs ab Beginn dauerhaft aktiv, jeweils einmal auf höchster Anbieter-Stufe. Vorbereitungskosten der Gruppenbuffs liegen außerhalb des Tests. Die Änderung vergleicht diese Tabelle mit dem vorherigen Eigenbuff-Test. Macht des Wassers und Macht des Feuers verstärken ausschließlich passende Skilltreffer, einschließlich Mehrfachtreffern und periodischen Treffern mit Angriffsanteil. Kein Bonus auf normale Auto-Attacks oder Beschwörungsangriffe; Attribute und sonstige Buffs wirken nach ihren normalen Regeln.

| Klasse | Schaden | DPS | Skills | Auto-Attacks | Beschwörungen | Ø pro Minute | Erstmals Skill zu teuer | Erstmals Mana=0 | Mana-Wartephasen | Mana-Wartezeit gesamt | Längste Mana-Pause | Anteile AA / Skills / Beschw. | Änderung zum Eigenbuff-Test |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: | --- | ---: |
| Ritualist | **919.868** | 1.533 | 568.303 | 229.572 | 121.993 | 91.987 | 0:02 | — | 188 | 126 s | 1.04 s | 25.0 % / 61.8 % / 13.3 % | +279.209 (+43.6 %) |
| Luminet | **842.528** | 1.404 | 605.565 | 236.963 | 0 | 84.253 | — | — | 0 | 0 s | 0.00 s | 28.1 % / 71.9 % / 0.0 % | +238.128 (+39.4 %) |
| Seelenjäger | **830.121** | 1.384 | 502.625 | 327.496 | 0 | 83.012 | 3:52 | — | 96 | 42 s | 0.88 s | 39.5 % / 60.5 % / 0.0 % | +312.931 (+60.5 %) |
| Jäger | **825.551** | 1.376 | 386.300 | 303.042 | 136.210 | 82.555 | — | — | 0 | 0 s | 0.00 s | 36.7 % / 46.8 % / 16.5 % | +197.710 (+31.5 %) |
| Gladiator | **788.696** | 1.314 | 334.737 | 453.959 | 0 | 78.870 | — | — | 0 | 0 s | 0.00 s | 57.6 % / 42.4 % / 0.0 % | +189.361 (+31.6 %) |
| Kräuterkundler | **757.924** | 1.263 | 504.656 | 253.268 | 0 | 75.792 | 1:17 | — | 339 | 232 s | 1.04 s | 33.4 % / 66.6 % / 0.0 % | +252.009 (+49.8 %) |
| Schurke | **750.957** | 1.252 | 405.040 | 345.917 | 0 | 75.096 | 0:03 | — | 8 | 3 s | 0.63 s | 46.1 % / 53.9 % / 0.0 % | +285.872 (+61.5 %) |
| Druide | **749.566** | 1.249 | 476.039 | 165.253 | 108.274 | 74.957 | 0:05 | 0:04 | 1 | 0 s | 0.20 s | 22.0 % / 63.5 % / 14.4 % | +194.479 (+35.0 %) |
| Butcher | **745.665** | 1.243 | 321.750 | 423.915 | 0 | 74.566 | 0:01 | — | 432 | 209 s | 0.87 s | 56.9 % / 43.1 % / 0.0 % | +190.962 (+34.4 %) |
| Schamane | **712.908** | 1.188 | 411.933 | 300.975 | 0 | 71.291 | 0:00 | — | 571 | 309 s | 0.87 s | 42.2 % / 57.8 % / 0.0 % | +251.874 (+54.6 %) |
| Heiler | **627.104** | 1.045 | 467.804 | 159.300 | 0 | 62.710 | — | — | 0 | 0 s | 0.00 s | 25.4 % / 74.6 % / 0.0 % | +111.716 (+21.7 %) |
| Abenteurer | **596.084** | 993 | 226.806 | 369.278 | 0 | 59.608 | — | — | 0 | 0 s | 0.00 s | 62.0 % / 38.0 % / 0.0 % | +119.397 (+25.0 %) |
| Ritter | **544.277** | 907 | 254.019 | 290.257 | 0 | 54.428 | — | — | 0 | 0 s | 0.00 s | 53.3 % / 46.7 % / 0.0 % | +149.585 (+37.9 %) |

Gesamtschaden = Skills + Auto-Attacks + Beschwörungen. Automatische Zusatzpfeile zählen wie oben zur Auto-Attack-Seite; Explosionspfeil bleibt Skill-Schaden. Detailprotokolle und verwendete Buffs stehen in den [Rechendaten](../../data/balancing/all-class-buff-scenarios.json). Stand: 21.10.2026, 08:09:01.

<!-- BUFF_COMPARISONS_END -->

## Zahlen richtig lesen und Heiler-Ergebnis nachvollziehen

**Ein zu teurer bereiter Skill bedeutet weder null Mana noch null Leben.** Die Summe der Mana-Wartezeit besteht aus vielen kurzen Pausen; sie ist keine zusammenhängende Regeneration bis zum vollen Pool. Ressourcen werden fortlaufend genutzt. Die Cooldowns bleiben dauerhaft aktiv und werden zwischen Minuten nicht zurückgesetzt. Nur beim Start sind alle Skills gleichzeitig bereit.

Butcher: erster zu teurer Skill 0:00; 577 Phasen mit mindestens einem nicht bezahlbaren Skill. Längste tatsächliche Mana-Pause 1.01 Sekunden.

Luminet: 354 Mana-Wartepausen, zusammen 320.62 Sekunden.

Heiler: Energieschlag auf Stufe 5, Cooldown 2.2 Sekunden nach Castende. 249 Anwendungen erzeugen 189.062 Schaden, eigene Auto-Attacks 144.627. Potenzielle MP-Regeneration 198 alle 3 Sekunden; durchschnittlicher Verbrauch 2.687 Mana pro Minute. Reine Heilzauber sind im Schadenstest ausgeschlossen.

## Mana-Pool, Verbrauch und Regeneration

Basispool und permanente MP-Regeneration ohne optionale Eigenbuffs. Während aktiver Beschwörungen können einzelne Werte temporär abweichen. Potenzielle Regeneration ist am vollen Pool begrenzt.

| Klasse | Mana-Pool | MP-Reg/Tick | Mögliche MP-Reg/min | Verbrauch/min | Tatsächlich regeneriert/min |
| --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 3.101 | 124 | 2.482 | 2.721 | 2.482 |
| Butcher | 3.241 | 129 | 2.572 | 2.878 | 2.572 |
| Druide | 4.136 | 139 | 2.772 | 2.944 | 2.772 |
| Gladiator | 3.257 | 129 | 2.572 | 2.870 | 2.572 |
| Heiler | 3.962 | 198 | 3.968 | 2.687 | 2.687 |
| Kräuterkundler | 3.643 | 139 | 2.788 | 3.129 | 2.788 |
| Jäger | 2.931 | 120 | 2.392 | 2.633 | 2.392 |
| Ritter | 3.253 | 139 | 2.772 | 3.058 | 2.772 |
| Luminet | 3.737 | 192 | 3.842 | 4.190 | 3.842 |
| Ritualist | 2.837 | 139 | 2.782 | 3.131 | 2.863 |
| Schamane | 3.123 | 138 | 2.762 | 3.056 | 2.762 |
| Seelenjäger | 2.785 | 111 | 2.212 | 2.475 | 2.212 |
| Schurke | 2.880 | 111 | 2.212 | 2.444 | 2.212 |

## Sensitivität: Mana für den stärksten bereiten Angriff zurückhalten

Der Hauptlauf verwendet die erste bezahlbare priorisierte Aktion. Der Zusatzlauf wartet bei fehlendem Mana für die höchste Priorität mit Auto-Attacks, statt billigere Skills zu wirken. Das ist eine andere Steuerung, keine geänderte Klasse.

| Klasse | Hauptlauf | Mit Manareserve | Unterschied |
| --- | ---: | ---: | ---: |
| Abenteurer | 439.897 | 438.529 | -1.369 |
| Butcher | 517.153 | 476.253 | -40.900 |
| Druide | 540.132 | 515.530 | -24.602 |
| Gladiator | 583.179 | 576.597 | -6.582 |
| Heiler | 503.347 | 503.347 | 0 |
| Kräuterkundler | 488.721 | 478.449 | -10.272 |
| Jäger | 595.015 | 589.001 | -6.014 |
| Ritter | 372.949 | 369.348 | -3.601 |
| Luminet | 579.932 | 570.772 | -9.160 |
| Ritualist | 613.628 | 596.266 | -17.362 |
| Schamane | 424.889 | 263.106 | -161.783 |
| Seelenjäger | 485.925 | 525.180 | 39.255 |
| Schurke | 432.885 | 438.302 | 5.417 |

Ein Mana-Hindernis bedeutet: mindestens ein bereiter priorisierter Skill ist nicht bezahlbar. Das ist nicht zwangsläufig ein leerer Pool oder Stillstand; günstigere Skills und Auto-Attacks bleiben erlaubt. Mana-Wartezeit ist die Summe vieler einzelner Zeitstücke ohne bezahlbare gewählte Skillaktion; Auto-Attacks gehen weiter. Sie ist keine Zeit bis zum vollen Mana-Pool und keine HP-Ausfallzeit. Die Zahl der Mana-Wartephasen zählt diese tatsächlich getrennten Pausen. Andere Wartezeiten wie Tarnrückkehr sind getrennt erfasst.

## Schaden pro Minute

| Klasse | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | Ø |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 54.035 | 44.641 | 43.437 | 43.026 | 44.571 | 42.563 | 39.320 | 43.428 | 42.563 | 42.316 | 43.990 |
| Butcher | 60.877 | 51.514 | 50.557 | 52.712 | 48.990 | 50.116 | 50.874 | 50.689 | 48.694 | 52.132 | 51.715 |
| Druide | 70.585 | 49.338 | 53.092 | 47.287 | 56.469 | 61.571 | 50.733 | 49.694 | 54.891 | 46.473 | 54.013 |
| Gladiator | 76.996 | 52.615 | 57.764 | 54.254 | 57.617 | 53.687 | 58.720 | 53.050 | 63.174 | 55.302 | 58.318 |
| Heiler | 55.515 | 47.076 | 49.472 | 51.698 | 48.400 | 50.393 | 51.215 | 50.903 | 48.525 | 50.152 | 50.335 |
| Kräuterkundler | 67.419 | 47.029 | 46.916 | 46.855 | 46.832 | 47.100 | 45.378 | 46.832 | 47.138 | 47.224 | 48.872 |
| Jäger | 72.900 | 57.943 | 57.313 | 53.587 | 59.003 | 56.885 | 58.516 | 56.885 | 62.781 | 59.202 | 59.502 |
| Ritter | 46.431 | 40.956 | 36.640 | 33.708 | 36.458 | 34.377 | 36.218 | 37.572 | 35.373 | 35.215 | 37.295 |
| Luminet | 77.309 | 58.215 | 58.648 | 53.416 | 58.012 | 51.736 | 57.206 | 53.776 | 57.395 | 54.220 | 57.993 |
| Ritualist | 71.943 | 63.544 | 62.127 | 60.171 | 62.481 | 46.511 | 62.099 | 60.587 | 61.193 | 62.972 | 61.363 |
| Schamane | 57.508 | 42.860 | 39.367 | 40.367 | 39.463 | 40.897 | 41.752 | 39.263 | 43.060 | 40.354 | 42.489 |
| Seelenjäger | 68.689 | 45.569 | 47.748 | 45.997 | 46.110 | 45.997 | 45.505 | 47.549 | 45.569 | 47.192 | 48.593 |
| Schurke | 63.428 | 37.762 | 46.832 | 37.260 | 40.580 | 45.046 | 39.190 | 39.040 | 41.612 | 42.133 | 43.289 |

## Abenteurer

Gesamt **439.897**, Laufzeit 10:00, Rest-Mana 709, Rest-HP 3.292. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.560.103.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 559 | 559 | 263.960 | 0 | 0 |
| Wirbelnde Klinge | 10 | 10 | 53.210 | 6.981 | 0 |
| Kreuzhieb | 18 | 18 | 37.573 | 4.844 | 0 |
| Rudelangriff | 10 | 10 | 36.712 | 7.527 | 0 |
| Sprungschlag | 17 | 17 | 35.329 | 6.462 | 0 |
| Blutender Schnitt | 15 | 15 | 13.113 | 1.397 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 4:18. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 153 Phasen mit mindestens einem zu teuren bereiten Skill; darin 147 tatsächliche Mana-Wartepausen mit zusammen 74 Sekunden und maximal 0.90 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 4:18 | 4:18 | 1 s | Rudelangriff | 673 |
| 4:19 | 4:19 | 1 s | Rudelangriff | 673 |
| 4:20 | 4:20 | 1 s | Rudelangriff | 673 |
| 4:50 | 4:50 | 1 s | Sprungschlag | 194 |
| 4:51 | 4:51 | 1 s | Sprungschlag | 319 |
| 4:52 | 4:52 | 1 s | Sprungschlag | 319 |
| 4:53 | 4:53 | 1 s | Sprungschlag | 319 |
| 4:56 | 4:57 | 0 s | Blutender Schnitt | 63 |
| 5:12 | 5:13 | 1 s | Rudelangriff | 445 |
| 5:13 | 5:13 | 1 s | Rudelangriff | 445 |
| 5:14 | 5:14 | 1 s | Rudelangriff | 445 |
| 5:15 | 5:15 | 1 s | Rudelangriff | 569 |
| 5:16 | 5:16 | 1 s | Rudelangriff | 569 |
| 5:17 | 5:17 | 1 s | Rudelangriff | 569 |
| 5:18 | 5:18 | 1 s | Rudelangriff | 693 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Butcher

Gesamt **517.153**, Laufzeit 10:00, Rest-Mana 180, Rest-HP 3.191. Effektive Angriffsheilung 0, Überheilung 120, HP-Regeneration 2.680, Lebenspreise 2.680. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.482.847.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 462 | 462 | 319.048 | 0 | 0 |
| Aufgeladener Schlag | 22 | 22 | 34.663 | 4.774 | 0 |
| Mächtiger Hieb | 19 | 19 | 27.618 | 3.420 | 0 |
| Rotier Schlag | 21 | 21 | 27.606 | 3.213 | 0 |
| Schmetterschlag | 12 | 12 | 25.063 | 4.116 | 0 |
| Erdbeben | 11 | 11 | 18.167 | 2.541 | 0 |
| Abräumer | 13 | 13 | 16.427 | 1.768 | 0 |
| Schädelspalter | 4 | 4 | 13.106 | 2.548 | 0 |
| Energieentladung | 4 | 4 | 10.854 | 0 | 0 |
| Dämonische Schockwelle | 5 | 5 | 9.358 | 1.400 | 0 |
| Erdbrecher | 1 | 1 | 6.721 | 2.396 | 0 |
| Schockwelle der Regeneration | 3 | 3 | 4.982 | 1.899 | 0 |
| Zorn des Henkers | 1 | 1 | 3.541 | 706 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:00. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 577 Phasen mit mindestens einem zu teuren bereiten Skill; darin 518 tatsächliche Mana-Wartepausen mit zusammen 340 Sekunden und maximal 1.01 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:00 | 0:01 | 0 s | Schädelspalter | 139 |
| 0:01 | 0:01 | 1 s | Schädelspalter | 139 |
| 0:01 | 0:02 | 1 s | Schädelspalter | 3 |
| 0:03 | 0:04 | 1 s | Schädelspalter | 132 |
| 0:04 | 0:05 | 1 s | Schädelspalter | 132 |
| 0:05 | 0:06 | 1 s | Schädelspalter | 132 |
| 0:06 | 0:07 | 1 s | Schädelspalter | 29 |
| 0:07 | 0:08 | 1 s | Schädelspalter | 29 |
| 0:08 | 0:09 | 0 s | Schädelspalter | 29 |
| 0:09 | 0:10 | 1 s | Schädelspalter | 5 |
| 0:10 | 0:11 | 1 s | Schädelspalter | 5 |
| 0:11 | 0:12 | 1 s | Schädelspalter | 5 |
| 0:12 | 0:13 | 1 s | Schädelspalter | 133 |
| 0:13 | 0:14 | 1 s | Schädelspalter | 133 |
| 0:14 | 0:15 | 0 s | Schädelspalter | 133 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:01 | 0:02 | 1 s | Mana |
| 0:06 | 0:07 | 1 s | Mana |
| 0:09 | 0:10 | 1 s | Mana |
| 0:15 | 0:16 | 1 s | Mana |
| 0:21 | 0:22 | 1 s | Mana |
| 0:27 | 0:28 | 1 s | Mana |
| 0:33 | 0:34 | 1 s | Mana |
| 0:39 | 0:40 | 1 s | Mana |
| 0:42 | 0:43 | 1 s | Mana |
| 0:48 | 0:49 | 1 s | Mana |
| 0:54 | 0:55 | 1 s | Mana |
| 1:01 | 1:02 | 1 s | Mana |
| 1:07 | 1:08 | 1 s | Mana |
| 1:14 | 1:15 | 1 s | Mana |
| 1:22 | 1:23 | 1 s | Mana |
| 1:30 | 1:31 | 1 s | Mana |
| 1:35 | 1:36 | 1 s | Mana |
| 1:39 | 1:40 | 1 s | Mana |
| 1:42 | 1:43 | 1 s | Mana |
| 1:49 | 1:50 | 1 s | Mana |

## Druide

Gesamt **540.132**, Laufzeit 10:00, Rest-Mana 2.417, Rest-HP 2.703. Effektive Angriffsheilung 0, Überheilung 2.888, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.459.868.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Energieschlag | 225 | 225 | 133.177 | 5.850 | 0 |
| Auto-Attack | 380 | 380 | 127.376 | 0 | 0 |
| Naturgeist | 2 | 658 | 102.516 | 264 | 0 |
| Eisranken | 27 | 135 | 30.210 | 4.266 | 0 |
| Ätherregen | 5 | 20 | 28.878 | 1.195 | 0 |
| Himmelsbrecher | 2 | 4 | 28.095 | 6.284 | 0 |
| Vakuumimpuls | 7 | 14 | 27.651 | 3.252 | 0 |
| Windschlitzer | 15 | 15 | 22.174 | 3.320 | 0 |
| Windfesseln | 19 | 19 | 20.267 | 2.473 | 0 |
| Eislanze | 15 | 15 | 16.723 | 2.325 | 0 |
| Manaexplosion | 2 | 2 | 1.781 | 138 | 0 |
| Bannmagie | 2 | 2 | 1.282 | 72 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:02. Erstmals wirklich 0 Mana: 0:02, insgesamt 2 Ereignisse mit vollständig ausgegebenem Mana. 444 Phasen mit mindestens einem zu teuren bereiten Skill; darin 297 tatsächliche Mana-Wartepausen mit zusammen 199 Sekunden und maximal 0.91 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 0:02, 6:04.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:02 | 0:02 | 1 s | Windschlitzer | 158 |
| 0:02 | 0:04 | 1 s | Windschlitzer | 0 |
| 0:04 | 0:04 | 0 s | Windschlitzer | 139 |
| 0:04 | 0:05 | 1 s | Windschlitzer | 8 |
| 0:05 | 0:06 | 0 s | Windschlitzer | 8 |
| 0:06 | 0:06 | 0 s | Windschlitzer | 111 |
| 0:06 | 0:07 | 1 s | Windschlitzer | 85 |
| 0:07 | 0:08 | 1 s | Windschlitzer | 85 |
| 0:08 | 0:09 | 0 s | Windschlitzer | 85 |
| 0:09 | 0:09 | 1 s | Windschlitzer | 198 |
| 0:09 | 0:10 | 1 s | Windschlitzer | 43 |
| 0:11 | 0:11 | 0 s | Windschlitzer | 43 |
| 0:11 | 0:12 | 1 s | Windschlitzer | 17 |
| 0:12 | 0:13 | 1 s | Windschlitzer | 155 |
| 0:13 | 0:14 | 0 s | Windschlitzer | 155 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

Hinweis: Ätherregen: Anwender als primäres Heilziel angenommen; keine Gruppe simuliert.

## Gladiator

Gesamt **583.179**, Laufzeit 10:00, Rest-Mana 276, Rest-HP 3.803. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 12. Gegner-Restleben 9.416.821.

Große Kombos: rageOutbursts: 5.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 472 | 472 | 346.401 | 0 | 0 |
| Sprungschlag | 16 | 16 | 37.466 | 6.464 | 0 |
| Mächtiger Hieb | 22 | 22 | 32.258 | 3.960 | 0 |
| Schmetterschlag | 15 | 15 | 31.538 | 5.145 | 0 |
| Holzspalter | 16 | 16 | 24.368 | 3.136 | 0 |
| Kriegerischer Ansturm | 11 | 11 | 23.490 | 3.839 | 0 |
| Ausbruch der Wut | 5 | 5 | 23.252 | 0 | 0 |
| Wutklinge | 10 | 10 | 21.272 | 0 | 0 |
| Wutexplosion | 6 | 6 | 15.979 | 0 | 0 |
| Blutiger Durchbruch | 2 | 6 | 15.162 | 4.320 | 0 |
| Sturm der Wut | 6 | 6 | 11.995 | 0 | 0 |
| Energie der Wut | 11 | 0 | 0 | 1.837 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:02. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 482 Phasen mit mindestens einem zu teuren bereiten Skill; darin 431 tatsächliche Mana-Wartepausen mit zusammen 272 Sekunden und maximal 1.01 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:02 | 0:02 | 0 s | Schmetterschlag | 177 |
| 0:02 | 0:03 | 0 s | Schmetterschlag | 177 |
| 0:03 | 0:03 | 0 s | Schmetterschlag | 306 |
| 0:03 | 0:04 | 1 s | Schmetterschlag | 110 |
| 0:04 | 0:05 | 0 s | Schmetterschlag | 110 |
| 0:05 | 0:05 | 0 s | Schmetterschlag | 110 |
| 0:06 | 0:06 | 0 s | Schmetterschlag | 238 |
| 0:06 | 0:07 | 1 s | Schmetterschlag | 58 |
| 0:08 | 0:08 | 1 s | Schmetterschlag | 58 |
| 0:09 | 0:09 | 1 s | Schmetterschlag | 187 |
| 0:10 | 0:10 | 1 s | Schmetterschlag | 187 |
| 0:11 | 0:12 | 1 s | Schmetterschlag | 187 |
| 0:12 | 0:13 | 1 s | Schmetterschlag | 315 |
| 0:13 | 0:14 | 1 s | Schmetterschlag | 315 |
| 0:14 | 0:15 | 0 s | Schmetterschlag | 315 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:06 | 0:07 | 1 s | Mana |
| 0:15 | 0:16 | 1 s | Cooldowns/Voraussetzungen |
| 0:33 | 0:34 | 1 s | Cooldowns/Voraussetzungen |
| 0:38 | 0:39 | 1 s | Cooldowns/Voraussetzungen |
| 0:40 | 0:41 | 1 s | Cooldowns/Voraussetzungen |
| 0:47 | 0:48 | 1 s | Cooldowns/Voraussetzungen |
| 1:01 | 1:02 | 1 s | Cooldowns/Voraussetzungen |
| 1:14 | 1:15 | 1 s | Cooldowns/Voraussetzungen |
| 1:18 | 1:19 | 1 s | Cooldowns/Voraussetzungen |
| 1:28 | 1:29 | 1 s | Mana |
| 1:39 | 1:40 | 1 s | Mana |
| 1:50 | 1:51 | 1 s | Mana |
| 2:11 | 2:12 | 1 s | Mana |
| 2:14 | 2:15 | 1 s | Mana |
| 2:20 | 2:21 | 1 s | Mana |
| 2:22 | 2:23 | 1 s | Mana |
| 2:26 | 2:27 | 1 s | Mana |
| 2:32 | 2:33 | 1 s | Mana |
| 2:54 | 2:55 | 1 s | Mana |
| 2:58 | 2:59 | 1 s | Mana |

## Heiler

Gesamt **503.347**, Laufzeit 10:00, Rest-Mana 3.962, Rest-HP 2.523. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.496.653.

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

Gesamt **488.721**, Laufzeit 10:00, Rest-Mana 231, Rest-HP 2.996. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.511.279.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 337 | 337 | 215.724 | 0 | 0 |
| Elektrisches Feld | 22 | 107 | 84.087 | 6.072 | 0 |
| Wasserfesseln | 41 | 41 | 35.921 | 2.419 | 0 |
| Gezielter Blitz | 19 | 19 | 35.835 | 5.833 | 0 |
| Geladener Nebel | 16 | 16 | 27.186 | 4.288 | 0 |
| Eislanze | 21 | 21 | 26.631 | 3.255 | 0 |
| Windschlitzer | 17 | 17 | 25.332 | 3.655 | 0 |
| Ewiges Eis | 18 | 18 | 24.824 | 3.384 | 0 |
| Tobender Sturm | 1 | 9 | 10.856 | 1.962 | 0 |
| Kugelblitz | 1 | 1 | 2.325 | 424 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:03. Erstmals wirklich 0 Mana: 8:17, insgesamt 1 Ereignisse mit vollständig ausgegebenem Mana. 471 Phasen mit mindestens einem zu teuren bereiten Skill; darin 404 tatsächliche Mana-Wartepausen mit zusammen 356 Sekunden und maximal 1.21 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 8:17.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:03 | 0:03 | 0 s | Eislanze | 142 |
| 0:03 | 0:04 | 1 s | Eislanze | 83 |
| 0:05 | 0:06 | 1 s | Eislanze | 83 |
| 0:24 | 0:26 | 1 s | Geladener Nebel | 262 |
| 0:26 | 0:27 | 1 s | Geladener Nebel | 262 |
| 0:27 | 0:28 | 1 s | Ewiges Eis | 134 |
| 0:29 | 0:30 | 1 s | Ewiges Eis | 134 |
| 0:30 | 0:31 | 1 s | Kugelblitz | 85 |
| 0:31 | 0:32 | 1 s | Kugelblitz | 26 |
| 0:33 | 0:33 | 1 s | Kugelblitz | 165 |
| 0:33 | 0:35 | 1 s | Kugelblitz | 10 |
| 0:35 | 0:36 | 1 s | Kugelblitz | 10 |
| 0:36 | 0:37 | 1 s | Kugelblitz | 150 |
| 0:38 | 0:39 | 1 s | Kugelblitz | 150 |
| 0:39 | 0:40 | 1 s | Kugelblitz | 74 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:03 | 0:04 | 1 s | Mana |
| 0:06 | 0:07 | 1 s | Cooldowns/Voraussetzungen |
| 0:17 | 0:19 | 1 s | Cooldowns/Voraussetzungen |
| 0:20 | 0:21 | 1 s | Cooldowns/Voraussetzungen |
| 0:24 | 0:26 | 1 s | Mana |
| 0:27 | 0:28 | 1 s | Mana |
| 0:31 | 0:32 | 1 s | Mana |
| 0:33 | 0:35 | 1 s | Mana |
| 0:39 | 0:40 | 1 s | Mana |
| 0:45 | 0:46 | 1 s | Mana |
| 0:48 | 0:49 | 1 s | Mana |
| 0:51 | 0:52 | 1 s | Mana |
| 0:57 | 0:58 | 1 s | Mana |
| 1:00 | 1:01 | 1 s | Mana |
| 1:04 | 1:05 | 1 s | Mana |
| 1:06 | 1:07 | 1 s | Mana |
| 1:12 | 1:13 | 1 s | Mana |
| 1:15 | 1:16 | 1 s | Mana |
| 1:18 | 1:19 | 1 s | Mana |
| 1:24 | 1:25 | 1 s | Mana |

## Jäger

Gesamt **595.015**, Laufzeit 10:00, Rest-Mana 517, Rest-HP 3.004. Effektive Angriffsheilung 0, Überheilung 1.716, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.404.985.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 364 | 364 | 228.665 | 0 | 0 |
| Seelenbegleiter | 2 | 897 | 100.033 | 264 | 0 |
| Salve | 9 | 9 | 82.750 | 3.726 | 0 |
| Feuerpfeil | 65 | 65 | 68.653 | 7.280 | 0 |
| Gebundener Schuss | 35 | 35 | 28.952 | 1.890 | 0 |
| Verstärkter Pfeil | 12 | 12 | 27.038 | 4.872 | 0 |
| Präzisionsschuss | 4 | 4 | 21.868 | 4.356 | 0 |
| Schockschuss | 13 | 13 | 16.383 | 2.054 | 0 |
| Entzugspfeil | 11 | 11 | 12.179 | 1.485 | 0 |
| Kettenschuss | 11 | 11 | 8.494 | 407 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:05. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 394 Phasen mit mindestens einem zu teuren bereiten Skill; darin 348 tatsächliche Mana-Wartepausen mit zusammen 286 Sekunden und maximal 1.19 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:05 | 1:05 | 1 s | Salve | 247 |
| 1:06 | 1:06 | 0 s | Salve | 366 |
| 1:06 | 1:07 | 1 s | Salve | 254 |
| 1:08 | 1:08 | 1 s | Salve | 254 |
| 1:09 | 1:10 | 1 s | Salve | 374 |
| 1:10 | 1:11 | 1 s | Salve | 374 |
| 1:11 | 1:12 | 0 s | Salve | 374 |
| 1:55 | 1:56 | 0 s | Präzisionsschuss | 333 |
| 1:56 | 1:57 | 1 s | Präzisionsschuss | 296 |
| 1:57 | 1:58 | 1 s | Präzisionsschuss | 415 |
| 1:59 | 1:59 | 1 s | Präzisionsschuss | 415 |
| 2:00 | 2:01 | 1 s | Präzisionsschuss | 535 |
| 2:01 | 2:01 | 0 s | Präzisionsschuss | 535 |
| 2:01 | 2:03 | 1 s | Präzisionsschuss | 423 |
| 2:03 | 2:04 | 1 s | Präzisionsschuss | 543 |

Weitere Phasen stehen vollständig in der JSON-Datei.

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
| 1:06 | 1:07 | 1 s | Mana |
| 1:12 | 1:13 | 1 s | Cooldowns/Voraussetzungen |
| 1:15 | 1:17 | 1 s | Cooldowns/Voraussetzungen |
| 1:25 | 1:26 | 1 s | Cooldowns/Voraussetzungen |
| 1:30 | 1:31 | 1 s | Cooldowns/Voraussetzungen |
| 1:34 | 1:35 | 1 s | Cooldowns/Voraussetzungen |
| 1:39 | 1:40 | 1 s | Cooldowns/Voraussetzungen |
| 1:40 | 1:41 | 1 s | Cooldowns/Voraussetzungen |
| 1:43 | 1:45 | 1 s | Cooldowns/Voraussetzungen |
| 1:47 | 1:48 | 1 s | Cooldowns/Voraussetzungen |

## Ritter

Gesamt **372.949**, Laufzeit 10:00, Rest-Mana 394, Rest-HP 4.488. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.627.051.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 467 | 467 | 196.803 | 0 | 0 |
| Donnernde Lanze | 9 | 9 | 30.757 | 6.804 | 0 |
| Brecher des Geistes | 33 | 33 | 29.945 | 3.927 | 0 |
| Schildstoß | 20 | 20 | 29.028 | 5.240 | 0 |
| Schildsturm | 14 | 14 | 26.998 | 5.208 | 0 |
| Mächtiger Hieb | 22 | 22 | 25.397 | 3.960 | 0 |
| Brecher der Deckung | 22 | 22 | 20.513 | 2.904 | 0 |
| Erlösendes Feld | 8 | 8 | 13.507 | 2.536 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:51. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 405 Phasen mit mindestens einem zu teuren bereiten Skill; darin 363 tatsächliche Mana-Wartepausen mit zusammen 236 Sekunden und maximal 1.01 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:51 | 1:52 | 1 s | Schildsturm | 166 |
| 1:53 | 1:53 | 1 s | Schildsturm | 166 |
| 1:54 | 1:54 | 1 s | Schildsturm | 305 |
| 1:55 | 1:55 | 1 s | Schildsturm | 305 |
| 1:56 | 1:56 | 1 s | Schildsturm | 305 |
| 1:57 | 1:58 | 1 s | Schildstoß | 71 |
| 1:59 | 1:59 | 1 s | Schildstoß | 71 |
| 2:00 | 2:00 | 1 s | Schildstoß | 210 |
| 2:01 | 2:01 | 1 s | Schildstoß | 210 |
| 2:02 | 2:03 | 1 s | Schildstoß | 210 |
| 2:28 | 2:29 | 1 s | Donnernde Lanze | 645 |
| 2:29 | 2:29 | 0 s | Donnernde Lanze | 645 |
| 2:30 | 2:31 | 1 s | Donnernde Lanze | 467 |
| 2:31 | 2:32 | 1 s | Donnernde Lanze | 467 |
| 2:32 | 2:33 | 1 s | Donnernde Lanze | 205 |

Weitere Phasen stehen vollständig in der JSON-Datei.

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
| 1:57 | 1:58 | 1 s | Mana |
| 2:03 | 2:04 | 1 s | Cooldowns/Voraussetzungen |
| 2:08 | 2:09 | 1 s | Cooldowns/Voraussetzungen |
| 2:17 | 2:18 | 1 s | Cooldowns/Voraussetzungen |
| 2:26 | 2:27 | 1 s | Cooldowns/Voraussetzungen |
| 2:30 | 2:31 | 1 s | Mana |
| 2:32 | 2:33 | 1 s | Mana |
| 2:36 | 2:37 | 1 s | Mana |
| 2:45 | 2:46 | 1 s | Mana |

Hinweis: Donnernde Lanze: keine feste Castzeit gespeichert; Ansturm-/Animationsdauer im vereinbarten Test ignoriert (0 s).

## Luminet

Gesamt **579.932**, Laufzeit 10:00, Rest-Mana 255, Rest-HP 2.841. Effektive Angriffsheilung 0, Überheilung 3.275, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.420.068.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 284 | 284 | 189.668 | 0 | 0 |
| Energieschlag | 116 | 116 | 137.719 | 17.284 | 0 |
| Luminus | 99 | 99 | 90.949 | 6.435 | 0 |
| Heilige Vernichtung | 10 | 10 | 33.225 | 3.370 | 0 |
| Ätherregen | 5 | 20 | 32.754 | 1.195 | 0 |
| Urteil des Himmels | 11 | 22 | 23.719 | 3.157 | 0 |
| Eislanze | 15 | 15 | 19.469 | 2.325 | 0 |
| Schwerter des Lichtes | 8 | 8 | 13.474 | 2.056 | 0 |
| Heiliges Kreuz | 7 | 7 | 12.671 | 1.988 | 0 |
| Strafendes Licht | 4 | 4 | 7.672 | 1.264 | 0 |
| Astralkörper | 3 | 3 | 6.316 | 1.089 | 0 |
| Licht kristallenes Gefängnis | 5 | 5 | 5.884 | 635 | 0 |
| Aurora Wellen | 2 | 2 | 4.310 | 750 | 0 |
| Göttliche Nova | 1 | 1 | 2.102 | 354 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 1:33. Erstmals wirklich 0 Mana: 4:32, insgesamt 1 Ereignisse mit vollständig ausgegebenem Mana. 459 Phasen mit mindestens einem zu teuren bereiten Skill; darin 354 tatsächliche Mana-Wartepausen mit zusammen 321 Sekunden und maximal 1.21 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

Mana tatsächlich vollständig ausgegeben bei: 4:32.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 1:33 | 1:33 | 1 s | Heilige Vernichtung | 286 |
| 1:34 | 1:34 | 0 s | Heilige Vernichtung | 286 |
| 1:34 | 1:35 | 1 s | Heilige Vernichtung | 137 |
| 1:35 | 1:36 | 1 s | Heilige Vernichtung | 72 |
| 1:37 | 1:37 | 1 s | Heilige Vernichtung | 264 |
| 1:38 | 1:38 | 0 s | Heilige Vernichtung | 264 |
| 1:38 | 1:39 | 1 s | Heilige Vernichtung | 115 |
| 1:40 | 1:40 | 0 s | Heilige Vernichtung | 307 |
| 1:40 | 1:41 | 1 s | Heilige Vernichtung | 23 |
| 1:42 | 1:42 | 0 s | Heilige Vernichtung | 215 |
| 1:42 | 1:42 | 0 s | Heilige Vernichtung | 150 |
| 1:42 | 1:44 | 1 s | Heilige Vernichtung | 1 |
| 1:44 | 1:45 | 1 s | Heilige Vernichtung | 1 |
| 1:45 | 1:46 | 1 s | Heilige Vernichtung | 193 |
| 1:47 | 1:47 | 0 s | Heilige Vernichtung | 193 |

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

Gesamt **613.628**, Laufzeit 10:00, Rest-Mana 154, Rest-HP 2.507. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 38.045, Lebenspreise 37.689. Rest-Seelen 3, Rest-Wut 0. Gegner-Restleben 9.386.372.

Große Kombos: soulShackles: 7.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 301 | 301 | 191.557 | 0 | 0 |
| Feuerball | 127 | 127 | 148.215 | 18.923 | 0 |
| Morrak´s Meister | 2 | 592 | 117.671 | 0 | 0 |
| Dunkler Impuls | 105 | 105 | 93.894 | 6.825 | 0 |
| Schrei der Unterwelt | 8 | 8 | 17.190 | 0 | 0 |
| Seelenqual | 18 | 18 | 16.786 | 1.206 | 0 |
| Meteoritenschauer | 1 | 6 | 8.559 | 2.608 | 0 |
| Sturm des Feuers | 6 | 6 | 8.310 | 1.086 | 0 |
| Seelenfessel | 7 | 7 | 7.032 | 665 | 0 |
| Seelenplage | 3 | 3 | 4.414 | 0 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:01. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 549 Phasen mit mindestens einem zu teuren bereiten Skill; darin 419 tatsächliche Mana-Wartepausen mit zusammen 382 Sekunden und maximal 1.21 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:01 | 0:01 | 0 s | Feuer der Verdammten | 229 |
| 0:01 | 0:02 | 0 s | Feuer der Verdammten | 48 |
| 0:02 | 0:02 | 0 s | Feuer der Verdammten | 48 |
| 0:02 | 0:03 | 1 s | Feuer der Verdammten | 48 |
| 0:06 | 0:06 | 0 s | Feuer der Verdammten | 173 |
| 0:06 | 0:07 | 1 s | Feuer der Verdammten | 24 |
| 0:08 | 0:08 | 1 s | Feuer der Verdammten | 24 |
| 0:09 | 0:09 | 0 s | Feuer der Verdammten | 168 |
| 0:09 | 0:10 | 1 s | Feuer der Verdammten | 103 |
| 0:11 | 0:12 | 1 s | Feuer der Verdammten | 103 |
| 0:12 | 0:13 | 1 s | Feuer der Verdammten | 97 |
| 0:13 | 0:14 | 1 s | Feuer der Verdammten | 97 |
| 0:14 | 0:15 | 1 s | Feuer der Verdammten | 32 |
| 0:16 | 0:16 | 0 s | Feuer der Verdammten | 176 |
| 0:16 | 0:17 | 1 s | Feuer der Verdammten | 27 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:03 | 0:04 | 1 s | Cooldowns/Voraussetzungen |
| 0:06 | 0:07 | 1 s | Mana |
| 0:09 | 0:10 | 1 s | Mana |
| 0:12 | 0:13 | 1 s | Mana |
| 0:14 | 0:15 | 1 s | Mana |
| 0:16 | 0:17 | 1 s | Mana |
| 0:19 | 0:21 | 1 s | Mana |
| 0:21 | 0:22 | 1 s | Mana |
| 0:25 | 0:26 | 1 s | Mana |
| 0:30 | 0:31 | 1 s | Mana |
| 0:33 | 0:35 | 1 s | Mana |
| 0:35 | 0:37 | 1 s | Mana |
| 0:37 | 0:39 | 1 s | Mana |
| 0:42 | 0:43 | 1 s | Mana |
| 0:46 | 0:48 | 1 s | Mana |
| 0:50 | 0:51 | 1 s | Mana |
| 0:51 | 0:53 | 1 s | Mana |
| 0:55 | 0:56 | 1 s | Mana |
| 0:57 | 0:58 | 1 s | Mana |
| 0:59 | 1:00 | 1 s | Mana |

## Schamane

Gesamt **424.889**, Laufzeit 10:00, Rest-Mana 183, Rest-HP 2.802. Effektive Angriffsheilung 0, Überheilung 3.360, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.575.111.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 454 | 454 | 218.774 | 0 | 0 |
| Felszähne | 32 | 32 | 46.410 | 7.356 | 0 |
| Verbrennen | 26 | 259 | 28.278 | 4.010 | 0 |
| Infernaler Kreuzschlag | 7 | 7 | 25.640 | 3.130 | 0 |
| Beben | 18 | 18 | 23.822 | 3.667 | 0 |
| Erdbeben | 11 | 11 | 19.734 | 2.465 | 0 |
| Erdsäule | 9 | 18 | 17.967 | 3.239 | 0 |
| Feuerlanze | 15 | 15 | 15.484 | 2.226 | 0 |
| Sprungschlag | 7 | 7 | 14.834 | 2.743 | 0 |
| Stoßgebet | 14 | 14 | 9.607 | 1.005 | 0 |
| Infernal Zyklon | 1 | 6 | 4.340 | 724 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:00. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 594 Phasen mit mindestens einem zu teuren bereiten Skill; darin 510 tatsächliche Mana-Wartepausen mit zusammen 345 Sekunden und maximal 1.01 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:00 | 0:00 | 0 s | Felsensalve | 3.123 |
| 0:00 | 0:00 | 0 s | Felsensalve | 2.399 |
| 0:00 | 0:00 | 0 s | Felsensalve | 1.952 |
| 0:00 | 0:01 | 0 s | Felsensalve | 1.560 |
| 0:01 | 0:01 | 0 s | Felsensalve | 1.200 |
| 0:01 | 0:01 | 0 s | Felsensalve | 976 |
| 0:01 | 0:01 | 0 s | Felsensalve | 747 |
| 0:01 | 0:01 | 0 s | Felsensalve | 543 |
| 0:02 | 0:02 | 0 s | Felsensalve | 389 |
| 0:02 | 0:02 | 0 s | Felsensalve | 240 |
| 0:02 | 0:03 | 1 s | Felsensalve | 168 |
| 0:04 | 0:04 | 1 s | Felsensalve | 307 |
| 0:05 | 0:05 | 1 s | Felsensalve | 307 |
| 0:06 | 0:06 | 1 s | Felsensalve | 445 |
| 0:07 | 0:07 | 1 s | Felsensalve | 445 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 0:02 | 0:03 | 1 s | Mana |
| 0:16 | 0:17 | 1 s | Mana |
| 0:24 | 0:25 | 1 s | Mana |
| 0:31 | 0:32 | 1 s | Mana |
| 0:33 | 0:34 | 1 s | Mana |
| 0:42 | 0:43 | 1 s | Mana |
| 0:45 | 0:46 | 1 s | Mana |
| 0:47 | 0:48 | 1 s | Mana |
| 0:51 | 0:52 | 1 s | Mana |
| 0:54 | 0:55 | 1 s | Mana |
| 1:00 | 1:01 | 1 s | Mana |
| 1:03 | 1:04 | 1 s | Mana |
| 1:09 | 1:10 | 1 s | Mana |
| 1:16 | 1:17 | 1 s | Mana |
| 1:21 | 1:22 | 1 s | Mana |
| 1:25 | 1:26 | 1 s | Mana |
| 1:30 | 1:31 | 1 s | Mana |
| 1:33 | 1:34 | 1 s | Mana |
| 1:36 | 1:37 | 1 s | Mana |
| 1:39 | 1:40 | 1 s | Mana |

## Seelenjäger

Gesamt **485.925**, Laufzeit 10:00, Rest-Mana 154, Rest-HP 2.695. Effektive Angriffsheilung 0, Überheilung 0, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.514.075.

Große Kombos: soulCollectionWindows: 1; spectralFinishers: 1.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 533 | 533 | 285.262 | 0 | 0 |
| Feuerpfeil | 59 | 59 | 56.829 | 6.608 | 0 |
| Explosionspfeil | 13 | 39 | 48.641 | 6.942 | 0 |
| Doppelschuss | 20 | 20 | 44.448 | 5.860 | 0 |
| Durchdringender Schuss | 13 | 13 | 18.515 | 2.886 | 0 |
| Seelensammler | 25 | 25 | 16.405 | 0 | 0 |
| Kettenschuss | 11 | 11 | 7.471 | 407 | 0 |
| Hinterhältiger Pfeil | 6 | 6 | 3.595 | 108 | 0 |
| Kopfschuss | 1 | 1 | 3.129 | 541 | 0 |
| Spektralketten | 1 | 1 | 1.631 | 439 | 0 |
| Seelenschuss | 1 | 0 | 0 | 960 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:06. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 616 Phasen mit mindestens einem zu teuren bereiten Skill; darin 555 tatsächliche Mana-Wartepausen mit zusammen 300 Sekunden und maximal 0.90 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:06 | 0:07 | 1 s | Feuerpfeil | 17 |
| 0:07 | 0:07 | 1 s | Feuerpfeil | 17 |
| 0:08 | 0:08 | 0 s | Feuerpfeil | 17 |
| 0:09 | 0:10 | 1 s | Kettenschuss | 16 |
| 0:10 | 0:11 | 1 s | Kettenschuss | 16 |
| 0:11 | 0:12 | 0 s | Kettenschuss | 16 |
| 0:35 | 0:35 | 0 s | Explosionspfeil | 329 |
| 0:36 | 0:36 | 0 s | Explosionspfeil | 439 |
| 0:37 | 0:37 | 0 s | Explosionspfeil | 439 |
| 0:37 | 0:38 | 1 s | Explosionspfeil | 327 |
| 0:38 | 0:39 | 1 s | Explosionspfeil | 327 |
| 0:39 | 0:40 | 0 s | Explosionspfeil | 438 |
| 0:40 | 0:41 | 0 s | Explosionspfeil | 438 |
| 0:41 | 0:42 | 0 s | Explosionspfeil | 438 |
| 0:48 | 0:48 | 0 s | Durchdringender Schuss | 124 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| — | — | — | Keine Phase ab 1 Sekunde |

## Schurke

Gesamt **432.885**, Laufzeit 10:00, Rest-Mana 564, Rest-HP 2.686. Effektive Angriffsheilung 0, Überheilung 707, HP-Regeneration 0, Lebenspreise 0. Rest-Seelen 0, Rest-Wut 0. Gegner-Restleben 9.567.115.

Große Kombos: Keine gesonderte Sammelkombo.

| Aktion | Anwendungen | Treffer | Schaden | Mana | Heilung |
| --- | ---: | ---: | ---: | ---: | ---: |
| Auto-Attack | 515 | 515 | 232.780 | 0 | 0 |
| Brecher des Lichts | 11 | 11 | 31.385 | 4.119 | 0 |
| Dunkler Schlag | 41 | 41 | 29.971 | 2.546 | 0 |
| Klingentornado | 8 | 8 | 29.888 | 3.628 | 0 |
| Wirbelnde Klinge | 5 | 5 | 26.100 | 3.491 | 0 |
| Kunai Todesstoß | 37 | 37 | 18.574 | 0 | 0 |
| Sturmklinge | 10 | 10 | 17.840 | 3.152 | 0 |
| Überschallklinge | 5 | 5 | 11.190 | 2.103 | 0 |
| Blutklinge | 9 | 9 | 10.881 | 1.600 | 0 |
| Schattenfalle | 7 | 7 | 7.700 | 1.054 | 0 |
| Tödlicher Tanz | 1 | 1 | 7.384 | 886 | 0 |
| Schattenschlag | 4 | 4 | 5.412 | 847 | 0 |
| Schattendolch | 3 | 3 | 3.780 | 581 | 0 |
| Dunkler Schleier | 7 | 0 | 0 | 428 | 0 |

**Mana-Protokoll:** Erstmals ein bereiter Skill zu teuer: 0:02. Erstmals wirklich 0 Mana: —, insgesamt 0 Ereignisse mit vollständig ausgegebenem Mana. 620 Phasen mit mindestens einem zu teuren bereiten Skill; darin 561 tatsächliche Mana-Wartepausen mit zusammen 309 Sekunden und maximal 5.60 Sekunden am Stück. Währenddessen bleiben Auto-Attacks möglich. Keine dieser Zahlen beschreibt einen HP-Verlust oder das Warten auf einen vollen Pool.

| Von | Bis | Dauer | Auslöser | Mana am Beginn |
| --- | --- | ---: | --- | ---: |
| 0:02 | 0:02 | 0 s | Brecher des Lichts | 225 |
| 0:02 | 0:02 | 0 s | Brecher des Lichts | 47 |
| 0:02 | 0:03 | 0 s | Brecher des Lichts | 47 |
| 0:03 | 0:03 | 1 s | Brecher des Lichts | 95 |
| 0:04 | 0:04 | 0 s | Brecher des Lichts | 95 |
| 0:05 | 0:05 | 0 s | Brecher des Lichts | 95 |
| 0:06 | 0:06 | 0 s | Brecher des Lichts | 206 |
| 0:07 | 0:07 | 0 s | Brecher des Lichts | 206 |
| 0:08 | 0:08 | 0 s | Brecher des Lichts | 206 |
| 0:09 | 0:09 | 0 s | Brecher des Lichts | 317 |
| 0:09 | 0:10 | 1 s | Brecher des Lichts | 1 |
| 0:10 | 0:11 | 0 s | Brecher des Lichts | 1 |
| 0:11 | 0:12 | 0 s | Brecher des Lichts | 1 |
| 0:12 | 0:12 | 0 s | Brecher des Lichts | 112 |
| 0:13 | 0:13 | 0 s | Brecher des Lichts | 112 |

Weitere Phasen stehen vollständig in der JSON-Datei.

Füllphasen ab einer Sekunde:

| Von | Bis | Dauer | Grund |
| --- | --- | ---: | --- |
| 1:30 | 1:33 | 3 s | Mana |
| 1:33 | 1:38 | 5 s | Mana |
| 3:00 | 3:06 | 6 s | Mana |
| 3:06 | 3:08 | 2 s | Mana |
| 4:30 | 4:33 | 2 s | Mana |
| 4:33 | 4:38 | 5 s | Mana |
| 6:01 | 6:06 | 4 s | Mana |
| 6:07 | 6:09 | 2 s | Mana |
| 7:31 | 7:33 | 1 s | Mana |
| 7:34 | 7:39 | 5 s | Mana |

Hinweis: Die Buff-Tabellen müssen nach den geänderten Eingaben neu gerechnet werden: `node scripts/calculateComparableBuffScenarios.js`. Alte Buff-Zahlen werden nicht eingeblendet.

# Schaden einer vollständigen Angriffsrunde – alle Klassen

- Level 60, ursprüngliche R6-Ausrüstung, aktuelle interne Klassenfaktoren und maximal gelernte permanente Passive. Keine Umstellung der Ausrüstung oder Skillwerte durch diese Auswertung.
- Jeder direkte Angriffsskill einmal, einschließlich seiner Mehrfachtreffer und vollständigen DoTs gegen EIN Ziel. Ausnahmen: Ritualist mit 15 Seelenqual-Anwendungen und Seelenjäger mit vollständigem Fünf-Sekunden-Fenster (theoretisch 25 Seelensammler-Treffer) und maximalen Spektralketten. Anzeige schwach nach stark ist keine Ausführungsreihenfolge.
- Vorläufige Rohschadensformel: Skill-Grundwert plus passender Charakterangriff je Treffer; gemischte Angriffe verwenden beide gespeicherten Komponenten. Keine gegnerische Verteidigung, zufälligen Crits, Auto-Attacks, Begleiter, Verbrauchsgegenstände oder separaten aktiven Buffs.
- Garantierte Crits verwenden 80 % Zusatzschaden. Beim Brecher des Lichts ist der erste Treffer normal und der zweite garantiert kritisch. Kein zusätzliches Würfeln zufälliger Crits.
- Gladiator startet mit voller Wut und setzt Ausbruch der Wut vor seinen abhängigen Skills ein. Sein dabei automatisch erzeugter +15-Stärke-Bonus ist enthalten; andernfalls wären die Wut-Folgeskills nicht einsetzbar. Separate Self-Buffs bleiben aus.
- Ritualist startet mit 100 Seelen. Seelenplage kostet 30 und Seelenfessel 1; Feuer der Verdammten gewinnt gegen ein einzelnes Ziel 1 Seele. Eine Seelenqual reicht nicht zur Seelengewinnung durch Seelenernte. Seelenstände ändern den Bonus von Zahl der Opfer. Ausbrennen, Opfergabe und der feste Seelenangriffsbonus sind automatische Kampfpassiven und enthalten.
- Keine Zeit-/DPS- oder vollständig ressourcen-/positionsgültige Rotation simuliert: alle Schäden dürfen vollständig auslaufen; gegnerische Statuswechsel, Nebel-/Lichtgefängnis-Synergien und Freeze-Schadensreduktion werden nicht als optimale Abfolge eingerechnet. Die Mana-Rechnung berücksichtigt weder Regeneration noch Heil-/Buffkosten.
- Manaexplosion wird nach den übrigen Schadensskills aus verbleibendem Mana berechnet. Bedingte Finisher und Replay-Effekte bleiben separat. Beide Seelenkombinationen stehen mit vollständigem Angriffsfenster im Hauptvergleich. Es handelt sich weiterhin nicht um eine DPS-Simulation.
- Die Tarnvoraussetzung für Schurken-Schattenangriffe und die schadenslose Markierung für Seelenjäger werden zugelassen. Ihre Aktivierung zählt nicht als zusätzlicher Schadensskill. Alle Schattenangriffe sind nicht automatisch in einer einzigen Tarnphase realisierbar.
- Summon-Schaden ohne definierte Angriffsfrequenz wird nicht erfunden. Druidischer Verbrennen-DoT und Frostschauer zählen nur den definierten Tick-Grundschaden; eine zusätzliche Charakter-M-Angriff-Skalierung steht separat als Sensitivität.
- Meteoriten: insgesamt drei 40/60-Paare, nicht sechsmal Meteoritenanzahl; der gespeicherte Meteoritenschauer bleibt physisch. Pro Welle gegen ein Ziel der volle Wellenanteil als bisherige Vergleichsannahme; genaue Einschlagsgeometrie noch offen.
- Keine finale Balancebewertung: Rotationssummen hängen von Skillanzahl und langen vollständigen Feldlaufzeiten ab, nicht nur von nachhaltigem Schaden.

## Vergleich: Skills je Klasse aufsteigend nach Schaden

| Klasse | Skill 1 | Skill 2 | Skill 3 | Skill 4 | Skill 5 | Skill 6 | Skill 7 | Skill 8 | Skill 9 | Skill 10 | Skill 11 | Skill 12 | Skill 13 | Summe |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Ritualist – Seelenqual ×15 | 904 | 1.010 | 1.156 | 1.176 | 1.394 | 1.473 | 1.794 | 2.297 | 3.865 | 8.538 | 14.102 | — | — | **37.708** |
| Schamane | 686 | 1.032 | 1.092 | 1.323 | 1.450 | 1.794 | 1.996 | 2.119 | 3.663 | 4.340 | 16.204 | — | — | **35.700** |
| Seelenjäger – Seelensammler ×25 | 599 | 679 | 963 | 1.424 | 1.631 | 2.222 | 3.129 | 3.742 | 16.405 | — | — | — | — | **30.795** |
| Druide | 592 | 641 | 870 | 1.067 | 1.115 | 1.119 | 1.478 | 3.950 | 5.776 | 14.047 | — | — | — | **30.655** |
| Schurke | 502 | 731 | 1.100 | 1.209 | 1.260 | 1.353 | 1.784 | 2.238 | 2.853 | 3.736 | 5.220 | 7.384 | — | **29.370** |
| Butcher | 1.264 | 1.315 | 1.454 | 1.576 | 1.652 | 1.661 | 1.872 | 2.089 | 2.714 | 3.277 | 3.541 | 6.721 | — | **29.131** |
| Luminet | 904 | 1.164 | 1.174 | 1.283 | 1.684 | 1.801 | 1.910 | 2.070 | 2.105 | 2.135 | 2.155 | 3.304 | 6.449 | **28.139** |
| Gladiator | 1.391 | 1.443 | 1.905 | 2.026 | 2.033 | 2.055 | 2.264 | 2.569 | 4.565 | 7.373 | — | — | — | **27.622** |
| Kräuterkundler | 876 | 1.268 | 1.379 | 1.490 | 1.699 | 1.878 | 2.325 | 3.891 | 10.666 | — | — | — | — | **25.473** |
| Jäger | 772 | 827 | 1.056 | 1.107 | 1.260 | 2.253 | 5.467 | 9.194 | — | — | — | — | — | **21.938** |
| Abenteurer | 874 | 2.078 | 2.087 | 3.671 | 5.321 | — | — | — | — | — | — | — | — | **14.032** |
| Heiler | 744 | 1.019 | 1.267 | 1.271 | 1.668 | 2.054 | 4.548 | — | — | — | — | — | — | **12.569** |
| Ritter | 907 | 932 | 1.154 | 1.451 | 1.688 | 1.928 | 3.417 | — | — | — | — | — | — | **11.480** |

Der Ritualist berücksichtigt 15 Seelenqual-Anwendungen und zwei geerntete Seelen. Auf Maximalstufe hat Seelenfessel 90 Sekunden und Seelenernte 180 Sekunden Cooldown; die vollständige Kombination ist daher nicht in jeder kurzen Rotation verfügbar. Der Seelenjäger berücksichtigt 25 Seelensammler-Anwendungen bei 75 Sekunden Kombinations-Cooldown. Schadenswiederholung des Hinterhältigen Pfeils bleibt außerhalb der Hauptsumme.

## Rangfolge der dargestellten Rotationen

| Klasse | Unterschiedliche Angriffsskills | Rohschaden |
| --- | ---: | ---: |
| Ritualist – Seelenqual ×15 | 11 | 37.708 |
| Schamane | 11 | 35.700 |
| Seelenjäger – Seelensammler ×25 | 9 | 30.795 |
| Druide | 10 | 30.655 |
| Schurke | 12 | 29.370 |
| Butcher | 12 | 29.131 |
| Luminet | 13 | 28.139 |
| Gladiator | 10 | 27.622 |
| Kräuterkundler | 9 | 25.473 |
| Jäger | 8 | 21.938 |
| Abenteurer | 5 | 14.032 |
| Heiler | 7 | 12.569 |
| Ritter | 7 | 11.480 |

## Abenteurer

P-Angriff **472**, M-Angriff **132**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Blutender Schnitt (Nr. 251) | 874 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Sprungschlag (Nr. 106) | 2.078 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Kreuzhieb (Nr. 248) | 2.087 | Individuelle Grundschäden und voller P-Angriff je Treffer. |
| Skill 4 | Rudelangriff (Nr. 249) | 3.671 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Wirbelnde Klinge (Nr. 126) | 5.321 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **14.032**. Mana nach den Schadensskills ohne Regeneration: **908**.

## Butcher

P-Angriff **691**, M-Angriff **27**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Abräumer (Nr. 3) | 1.264 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Rotier Schlag (Nr. 87) | 1.315 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Mächtiger Hieb (Nr. 77) | 1.454 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Aufgeladener Schlag (Nr. 11) | 1.576 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Erdbeben (Nr. 38) | 1.652 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Schockwelle der Regeneration (Nr. 98) | 1.661 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Dämonische Schockwelle (Nr. 227) | 1.872 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 8 | Schmetterschlag (Nr. 96) | 2.089 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 9 | Energieentladung (Nr. 35) | 2.714 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 10 | Schädelspalter (Nr. 89) | 3.277 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 11 | Zorn des Henkers (Nr. 234) | 3.541 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 12 | Erdbrecher (Nr. 39) | 6.721 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **29.131**. Mana nach den Schadensskills ohne Regeneration: **-2.671**.

## Druide

P-Angriff **335**, M-Angriff **487**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Energieschlag (Nr. 36) | 592 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Bannmagie (Nr. 220) | 641 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Manaexplosion (Nr. 219) | 870 | Manaexplosion zuletzt: 0.00 verbleibendes Mana, davon 30 % zusätzlich. |
| Skill 4 | Windfesseln (Nr. 125) | 1.067 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Eislanze (Nr. 29) | 1.115 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Eisranken (Nr. 30) | 1.119 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Windschlitzer (Nr. 221) | 1.478 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 8 | Vakuumimpuls (Nr. 118) | 3.950 | Getrennte physische/magische Schadensphasen; ein Ziel in allen Phasen angenommen. |
| Skill 9 | Ätherregen (Nr. 9) | 5.776 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 10 | Himmelsbrecher (Nr. 212) | 14.047 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **30.655**. Mana nach den Schadensskills ohne Regeneration: **-436**.

## Gladiator

P-Angriff **629**, M-Angriff **26**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Mächtiger Hieb (Nr. 77) | 1.391 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 2 | Holzspalter (Nr. 61) | 1.443 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 3 | Sturm der Wut (Nr. 109) | 1.905 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 4 | Schmetterschlag (Nr. 96) | 2.026 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 5 | Wutklinge (Nr. 128) | 2.033 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 6 | Kriegerischer Ansturm (Nr. 233) | 2.055 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 7 | Sprungschlag (Nr. 106) | 2.264 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 8 | Wutexplosion (Nr. 127) | 2.569 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 9 | Ausbruch der Wut (Nr. 13) | 4.565 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 10 | Blutiger Durchbruch (Nr. 230) | 7.373 | Skill-Grundschaden auf drei Phasen verteilt; voller Charakterangriff je Treffer. Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |

Gesamt: **27.622**. Mana nach den Schadensskills ohne Regeneration: **-375**.

Mit Provozieren: 27.622 × 2.5 + 0 feste Aggro = **69.055 Aggro**. Unveränderte Buff-/Debuff-Synergien und Auto-Attacks bleiben außen vor.

## Heiler

P-Angriff **22**, M-Angriff **639**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Energieschlag (Nr. 36) | 744 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Kristallisierte Wasserspähre (Nr. 68) | 1.019 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Eislanze (Nr. 29) | 1.267 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Eisranken (Nr. 30) | 1.271 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Schwerter des Lichtes (Nr. 101) | 1.668 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Göttliche Nova (Nr. 217) | 2.054 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Frostschauer (Nr. 239) | 4.548 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **12.569**. Mana nach den Schadensskills ohne Regeneration: **2.373**.

## Kräuterkundler

P-Angriff **26**, M-Angriff **640**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Wasserfesseln (Nr. 16) | 876 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Eislanze (Nr. 29) | 1.268 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Ewiges Eis (Nr. 46) | 1.379 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Windschlitzer (Nr. 221) | 1.490 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Geladener Nebel (Nr. 56) | 1.699 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Gezielter Blitz (Nr. 57) | 1.878 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Kugelblitz (Nr. 69) | 2.325 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 8 | Elektrisches Feld (Nr. 31) | 3.891 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 9 | Tobender Sturm (Nr. 112) | 10.666 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **25.473**. Mana nach den Schadensskills ohne Regeneration: **-211**.

## Jäger

P-Angriff **628**, M-Angriff **23**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Kettenschuss (Nr. 63) | 772 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Gebundener Schuss (Nr. 53) | 827 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Feuerpfeil (Nr. 51) | 1.056 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Entzugspfeil (Nr. 37) | 1.107 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Schockschuss (Nr. 97) | 1.260 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Verstärkter Pfeil (Nr. 121) | 2.253 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Präzisionsschuss (Nr. 86) | 5.467 | Garantierter Crit ×1,8 eingerechnet. |
| Skill 8 | Salve (Nr. 88) | 9.194 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **21.938**. Mana nach den Schadensskills ohne Regeneration: **526**.

## Ritter

P-Angriff **421**, M-Angriff **24**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Brecher des Geistes (Nr. 55) | 907 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Brecher der Deckung (Nr. 19) | 932 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Mächtiger Hieb (Nr. 77) | 1.154 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Schildstoß (Nr. 94) | 1.451 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Erlösendes Feld (Nr. 40) | 1.688 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Schildsturm (Nr. 95) | 1.928 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Donnernde Lanze (Nr. 23) | 3.417 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **11.480**. Mana nach den Schadensskills ohne Regeneration: **1.115**.

Mit Provozieren: 11.480 × 4 + 6.000 feste Aggro = **51.920 Aggro**. Unveränderte Buff-/Debuff-Synergien und Auto-Attacks bleiben außen vor.

## Luminet

P-Angriff **24**, M-Angriff **655**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Luminus (Nr. 231) | 904 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Licht kristallenes Gefängnis (Nr. 218) | 1.164 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Energieschlag (Nr. 36) | 1.174 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Eislanze (Nr. 29) | 1.283 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Schwerter des Lichtes (Nr. 101) | 1.684 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Heiliges Kreuz (Nr. 215) | 1.801 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Strafendes Licht (Nr. 213) | 1.910 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 8 | Göttliche Nova (Nr. 217) | 2.070 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 9 | Astralkörper (Nr. 8) | 2.105 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 10 | Urteil des Himmels (Nr. 117) | 2.135 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 11 | Aurora Wellen (Nr. 211) | 2.155 | Aurora-Welle vorläufig einmal im Zentrum; Trefferzahl noch offen. |
| Skill 12 | Heilige Vernichtung (Nr. 216) | 3.304 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 13 | Ätherregen (Nr. 9) | 6.449 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **28.139**. Mana nach den Schadensskills ohne Regeneration: **429**.

## Ritualist – Seelenqual ×15

P-Angriff **24**, M-Angriff **585**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Dunkler Impuls (Nr. 232) | 904 | Nach Seelenernte zwei zusätzliche Seelen: 0 zusätzlicher M-Angriff gemäß vollen Zehnergruppen auf nachfolgende Skills. |
| Skill 2 | Seelenfessel (Nr. 103) | 1.010 | 69 Seelen beim Einsatz: +18 M-Angriff durch Zahl der Opfer; Reaper +0 Intelligenz; Ausbrennen +40 M-Angriff als automatische Kampfpassive, Opfergabe +1 % Schaden. |
| Skill 3 | Lebenssauger (Nr. 72) | 1.156 | Nach Seelenernte zwei zusätzliche Seelen: 0 zusätzlicher M-Angriff gemäß vollen Zehnergruppen auf nachfolgende Skills. |
| Skill 4 | Feuerball (Nr. 49) | 1.176 | Nach Seelenernte zwei zusätzliche Seelen: 0 zusätzlicher M-Angriff gemäß vollen Zehnergruppen auf nachfolgende Skills. |
| Skill 5 | Sturm des Feuers (Nr. 110) | 1.394 | Nach Seelenernte zwei zusätzliche Seelen: 0 zusätzlicher M-Angriff gemäß vollen Zehnergruppen auf nachfolgende Skills. |
| Skill 6 | Seelenplage (Nr. 180) | 1.473 | 70 Seelen beim Einsatz: +21 M-Angriff durch Zahl der Opfer; Reaper +0 Intelligenz; Ausbrennen +40 M-Angriff als automatische Kampfpassive, Opfergabe +1 % Schaden. |
| Skill 7 | Seelenernte (Nr. 105) | 1.794 | Nach 15 Seelenqual-Treffern werden zwei Seelen geerntet. |
| Skill 8 | Schrei der Unterwelt (Nr. 99) | 2.297 | Charakter-M-Angriff vorläufig addiert; endgültige Beteiligung noch offen. Nach Seelenernte zwei zusätzliche Seelen: 0 zusätzlicher M-Angriff gemäß vollen Zehnergruppen auf nachfolgende Skills. |
| Skill 9 | Feuer der Verdammten (Nr. 48) | 3.865 | Nach Seelenernte zwei zusätzliche Seelen: 3 zusätzlicher M-Angriff gemäß vollen Zehnergruppen auf nachfolgende Skills. |
| Skill 10 | Meteoritenschauer (Nr. 235) | 8.538 | Nach Seelenernte zwei zusätzliche Seelen: 0 zusätzlicher M-Angriff gemäß vollen Zehnergruppen auf nachfolgende Skills. |
| Skill 11 | Seelenqual ×15 (Nr. 104) | 14.102 | 15 vollständige Anwendungen statt einer. |

Gesamt: **37.708**. Mana nach den Schadensskills ohne Regeneration: **-2.531**; verbleibende Seelen: **72**.

## Schamane

P-Angriff **482**, M-Angriff **391**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Stoßgebet (Nr. 263) | 686 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Feuerlanze (Nr. 50) | 1.032 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Verbrennen (Nr. 202) | 1.092 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Beben (Nr. 15) | 1.323 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Felszähne (Nr. 255) | 1.450 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Erdbeben (Nr. 38) | 1.794 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Erdsäule (Nr. 258) | 1.996 | Getrennte physische/magische Schadensphasen; ein Ziel in allen Phasen angenommen. |
| Skill 8 | Sprungschlag (Nr. 106) | 2.119 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 9 | Infernaler Kreuzschlag (Nr. 76) | 3.663 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 10 | Infernal Zyklon (Nr. 62) | 4.340 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 11 | Felsensalve (Nr. 256) | 16.204 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **35.700**. Mana nach den Schadensskills ohne Regeneration: **-3.119**.

## Seelenjäger – Seelensammler ×25

P-Angriff **535**, M-Angriff **23**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Hinterhältiger Pfeil (Nr. 184) | 599 | Nur Initialtreffer; bedingte Schadenswiederholung ohne Zeitplan separat als Obergrenze. |
| Skill 2 | Kettenschuss (Nr. 63) | 679 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Feuerpfeil (Nr. 51) | 963 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Durchdringender Schuss (Nr. 262) | 1.424 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Spektralketten (Nr. 229) | 1.631 | 25 Sammelpunkte: 15 % auf den Skill-Grundschaden, nicht auf Charakterangriff. |
| Skill 6 | Doppelschuss (Nr. 24) | 2.222 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Kopfschuss (Nr. 66) | 3.129 | Garantierter Crit ×1,8 eingerechnet. |
| Skill 8 | Explosionspfeil (Nr. 47) | 3.742 | Drei ausgelöste Explosionspfeile enthalten; keine zusätzlichen normalen Auto-Attacks. |
| Skill 9 | Seelensammler ×25 (Nr. 186) | 16.405 | 25 vollständige Anwendungen statt einer. |

Gesamt: **30.795**. Mana nach den Schadensskills ohne Regeneration: **-371**.

## Schurke

P-Angriff **452**, M-Angriff **26**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Kunai Todesstoß (Nr. 70) | 502 | Eine normale Anwendung. Finisher mit drei Anwendungen und ×1,5 wird separat ausgewiesen. |
| Skill 2 | Dunkler Schlag (Nr. 27) | 731 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Schattenfalle (Nr. 91) | 1.100 | Tarnvoraussetzung zugelassen, aber keine Attribut-/Angriffsboni aus Eigenbuffs; alle Schattenangriffe sind ein hypothetischer Gesamtumfang, keine nachgewiesene einzelne Tarnphase. |
| Skill 4 | Blutklinge (Nr. 17) | 1.209 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Schattendolch (Nr. 90) | 1.260 | Tarnvoraussetzung zugelassen, aber keine Attribut-/Angriffsboni aus Eigenbuffs; alle Schattenangriffe sind ein hypothetischer Gesamtumfang, keine nachgewiesene einzelne Tarnphase. |
| Skill 6 | Schattenschlag (Nr. 92) | 1.353 | Tarnvoraussetzung zugelassen, aber keine Attribut-/Angriffsboni aus Eigenbuffs; alle Schattenangriffe sind ein hypothetischer Gesamtumfang, keine nachgewiesene einzelne Tarnphase. |
| Skill 7 | Sturmklinge (Nr. 111) | 1.784 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 8 | Überschallklinge (Nr. 115) | 2.238 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 9 | Brecher des Lichts (Nr. 20) | 2.853 | Erster Treffer normal, zweiter garantiert kritisch; keine zufälligen Crits. |
| Skill 10 | Klingentornado (Nr. 65) | 3.736 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 11 | Wirbelnde Klinge (Nr. 126) | 5.220 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 12 | Tödlicher Tanz (Nr. 113) | 7.384 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **29.370**. Mana nach den Schadensskills ohne Regeneration: **-1.064**.

Separate Bedingungen / Sensitivitäten, nicht zur Hauptsumme addiert:

- Kunai-Finisher unter 6 % Ziel-Leben: drei Anwendungen ×1,5: **2.259**; alternative Gesamtsumme **31.127**.

<!-- TIMED_DAMAGE_COMPARISON -->

## Ergänzung: zehn Minuten mit Cooldowns und Ressourcen

Die einmalige Rotation oben ist ein Burst-Vergleich. Da das 2-Millionen-Ziel teils vorzeitig stirbt, zeigt die Haupttabelle einen zusätzlichen gleichmäßigen 600-Sekunden-Test mit 10 Millionen HP; statt der Todeszeiten werden die prozentualen Schadensanteile ausgewiesen. Die folgende Modellrechnung nutzt die bestätigten Testparameter: 1,1 Basisangriffe/s bei sämtlichen Magiern und Jäger/Seelenjäger, 1,3 bei Nahkampfklassen; gemeinsame Angriffsgeschwindigkeitskurve und maximal zwei Auto-Attacks/s;0,1s aktionsfreie Skill-Reaktionszeit undeinem vollen Angriffstempo-Intervall von Skill zu Auto-Attack und0,5s von Auto-Attack zu Skill, HP-Regeneration alle 2 s, MP-Regeneration alle3s, notwendige Setups, temporäre Beschwörungen, keine optionalen Eigenbuffs, Zufalls-Procs oder Gegnerabwehr. [Vollständige Regeln, Minutenwerte und Klassenprotokolle](all-class-timed-damage.md).

| Klasse | Schaden in 10 Min. | DPS | Ø Schaden/Minute | Erstmals Skill zu teuer | Erstmals Mana=0 | Mana-Wartephasen | Warten gesamt | Anteile AA / Skills / Beschw. |
| --- | ---: | ---: | ---: | --- | --- | ---: | ---: | --- |
| Ritualist | 613.628 | 1.023 | 61.363 | 0:01 | — | 419 | 382 s | 31.2 % / 49.6 % / 19.2 % |
| Jäger | 595.015 | 992 | 59.502 | 1:05 | — | 348 | 286 s | 38.4 % / 44.8 % / 16.8 % |
| Gladiator | 583.179 | 972 | 58.318 | 0:02 | — | 431 | 272 s | 59.4 % / 40.6 % / 0.0 % |
| Luminet | 579.932 | 967 | 57.993 | 1:33 | 4:32 | 354 | 321 s | 32.7 % / 67.3 % / 0.0 % |
| Druide | 540.132 | 900 | 54.013 | 0:02 | 0:02 | 297 | 199 s | 23.6 % / 57.4 % / 19.0 % |
| Butcher | 517.153 | 862 | 51.715 | 0:00 | — | 518 | 340 s | 61.7 % / 38.3 % / 0.0 % |
| Heiler | 503.347 | 839 | 50.335 | — | — | 0 | 0 s | 28.7 % / 71.3 % / 0.0 % |
| Kräuterkundler | 488.721 | 815 | 48.872 | 0:03 | 8:17 | 404 | 356 s | 44.1 % / 55.9 % / 0.0 % |
| Seelenjäger | 485.925 | 810 | 48.593 | 0:06 | — | 555 | 300 s | 58.7 % / 41.3 % / 0.0 % |
| Abenteurer | 439.897 | 733 | 43.990 | 4:18 | — | 147 | 74 s | 60.0 % / 40.0 % / 0.0 % |
| Schurke | 432.885 | 721 | 43.289 | 0:02 | — | 561 | 309 s | 53.8 % / 46.2 % / 0.0 % |
| Schamane | 424.889 | 708 | 42.489 | 0:00 | — | 510 | 345 s | 51.5 % / 48.5 % / 0.0 % |
| Ritter | 372.949 | 622 | 37.295 | 1:51 | — | 363 | 236 s | 52.8 % / 47.2 % / 0.0 % |

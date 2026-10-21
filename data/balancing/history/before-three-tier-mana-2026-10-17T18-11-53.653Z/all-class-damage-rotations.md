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

| Klasse | Skill 1 | Skill 2 | Skill 3 | Skill 4 | Skill 5 | Skill 6 | Skill 7 | Skill 8 | Skill 9 | Skill 10 | Skill 11 | Skill 12 | Skill 13 | Skill 14 | Summe |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Ritualist – Seelenqual ×15 | 1.039 | 1.145 | 1.291 | 1.407 | 1.529 | 1.606 | 1.928 | 2.921 | 4.240 | 6.896 | 16.126 | — | — | — | **40.128** |
| Seelenjäger – Seelensammler ×25 | 711 | 791 | 1.075 | 1.823 | 2.446 | 3.330 | 4.076 | 19.195 | — | — | — | — | — | — | **33.446** |
| Schurke | 559 | 788 | 1.157 | 1.266 | 1.317 | 1.410 | 1.841 | 2.065 | 3.012 | 3.962 | 5.503 | 7.837 | — | — | **30.714** |
| Luminet | 798 | 905 | 1.209 | 1.294 | 1.328 | 1.729 | 1.846 | 1.955 | 2.115 | 2.150 | 2.200 | 2.202 | 3.439 | 6.629 | **29.801** |
| Kräuterkundler | 794 | 1.375 | 1.486 | 1.597 | 1.806 | 1.985 | 2.432 | 4.423 | 11.624 | — | — | — | — | — | **27.519** |
| Butcher | 1.353 | 1.404 | 1.543 | 1.665 | 1.750 | 1.821 | 1.823 | 2.041 | 2.178 | 2.803 | 3.366 | 3.630 | — | — | **25.379** |
| Jäger | 908 | 963 | 1.192 | 1.243 | 1.396 | 2.389 | 5.712 | 10.826 | — | — | — | — | — | — | **24.630** |
| Schamane | 629 | 804 | 953 | 1.035 | 1.056 | 1.075 | 1.303 | 1.662 | 1.809 | 2.190 | 2.384 | 3.482 | 4.408 | — | **22.788** |
| Gladiator | 1.474 | 1.526 | 1.653 | 1.988 | 2.012 | 2.109 | 2.116 | 2.138 | 2.347 | 2.652 | — | — | — | — | **20.020** |
| Druide | 480 | 569 | 620 | 1.043 | 1.265 | 1.265 | 1.761 | 1.814 | 2.049 | 5.487 | — | — | — | — | **16.352** |
| Abenteurer | 1.139 | 1.367 | 2.101 | 2.151 | 2.318 | 5.685 | — | — | — | — | — | — | — | — | **14.761** |
| Heiler | 838 | 1.113 | 1.361 | 1.762 | 2.148 | 5.020 | — | — | — | — | — | — | — | — | **12.242** |
| Ritter | 868 | 890 | 1.229 | 1.430 | 1.526 | 1.579 | 2.036 | — | — | — | — | — | — | — | **9.555** |

Der Ritualist berücksichtigt 15 Seelenqual-Anwendungen und zwei geerntete Seelen. Auf Maximalstufe hat Seelenfessel 90 Sekunden und Seelenernte 180 Sekunden Cooldown; die vollständige Kombination ist daher nicht in jeder kurzen Rotation verfügbar. Der Seelenjäger berücksichtigt 25 Seelensammler-Anwendungen bei 75 Sekunden Kombinations-Cooldown. Schadenswiederholung des Hinterhältigen Pfeils bleibt außerhalb der Hauptsumme.

## Rangfolge der dargestellten Rotationen

| Klasse | Unterschiedliche Angriffsskills | Rohschaden |
| --- | ---: | ---: |
| Ritualist – Seelenqual ×15 | 11 | 40.128 |
| Seelenjäger – Seelensammler ×25 | 8 | 33.446 |
| Schurke | 12 | 30.714 |
| Luminet | 14 | 29.801 |
| Kräuterkundler | 9 | 27.519 |
| Butcher | 12 | 25.379 |
| Jäger | 8 | 24.630 |
| Schamane | 13 | 22.788 |
| Gladiator | 10 | 20.020 |
| Druide | 10 | 16.352 |
| Abenteurer | 6 | 14.761 |
| Heiler | 6 | 12.242 |
| Ritter | 7 | 9.555 |

## Abenteurer

P-Angriff **545**, M-Angriff **212**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Rotier Schlag (Nr. 87) | 1.139 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Beben (Nr. 15) | 1.367 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Überschallklinge (Nr. 115) | 2.101 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Sprungschlag (Nr. 106) | 2.151 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Mächtiger Doppelschlag (Nr. 76) | 2.318 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Wirbelnde Klinge (Nr. 126) | 5.685 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **14.761**. Mana nach den Schadensskills ohne Regeneration: **3.532**.

## Butcher

P-Angriff **810**, M-Angriff **107**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Abräumer (Nr. 3) | 1.353 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Rotier Schlag (Nr. 87) | 1.404 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Mächtiger Hieb (Nr. 77) | 1.543 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Aufgeladener Schlag (Nr. 11) | 1.665 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Schockwelle der Regeneration (Nr. 98) | 1.750 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Erdbeben (Nr. 38) | 1.821 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Erdbrecher (Nr. 39) | 1.823 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 8 | Dämonische Schockwelle (Nr. 227) | 2.041 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 9 | Schmetterschlag (Nr. 96) | 2.178 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 10 | Energieentladung (Nr. 35) | 2.803 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 11 | Schädelspalter (Nr. 89) | 3.366 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 12 | Zorn des Henkers (Nr. 234) | 3.630 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **25.379**. Mana nach den Schadensskills ohne Regeneration: **-845**.

## Druide

P-Angriff **443**, M-Angriff **415**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Verbrennen (Nr. 202) | 480 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Bannmagie (Nr. 220) | 569 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Energieschlag (Nr. 36) | 620 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Eislanze (Nr. 29) | 1.043 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Beben (Nr. 15) | 1.265 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Windschlitzer (Nr. 221) | 1.265 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Erdbeben (Nr. 38) | 1.761 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 8 | Manaexplosion (Nr. 219) | 1.814 | Manaexplosion zuletzt: 3388.00 verbleibendes Mana, davon 30 % zusätzlich. |
| Skill 9 | Sprungschlag (Nr. 106) | 2.049 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 10 | Ätherregen (Nr. 9) | 5.487 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **16.352**. Mana nach den Schadensskills ohne Regeneration: **0**.

Nicht bezifferbar: Naturgeist: Temporäre Beschwörung: Angriffstempo/Schadensformel fehlen; kein erfundener Einzeltreffer.

## Gladiator

P-Angriff **713**, M-Angriff **106**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Mächtiger Hieb (Nr. 77) | 1.474 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 2 | Holzspalter (Nr. 61) | 1.526 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 3 | Wirbelsturm (Nr. 230) | 1.653 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 4 | Sturm der Wut (Nr. 109) | 1.988 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 5 | Ausbruch der Wut (Nr. 13) | 2.012 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Schmetterschlag (Nr. 96) | 2.109 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 7 | Wutklinge (Nr. 128) | 2.116 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 8 | Kriegerischer Ansturm (Nr. 233) | 2.138 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 9 | Sprungschlag (Nr. 106) | 2.347 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |
| Skill 10 | Wutexplosion (Nr. 127) | 2.652 | Enthält +15 Stärke aus dem vorausgehenden Schadensskill Ausbruch der Wut; notwendige Wut-Skill-Voraussetzung, kein separat aktivierter Buff. |

Gesamt: **20.020**. Mana nach den Schadensskills ohne Regeneration: **2.573**.

Mit Provozieren: 20.020 × 2.5 + 0 feste Aggro = **50.049 Aggro**. Unveränderte Buff-/Debuff-Synergien und Auto-Attacks bleiben außen vor.

## Heiler

P-Angriff **102**, M-Angriff **733**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Energieschlag (Nr. 36) | 838 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Kristallisierte Wasserspähre (Nr. 68) | 1.113 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Eislanze (Nr. 29) | 1.361 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Schwerter des Lichtes (Nr. 101) | 1.762 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Göttliche Nova (Nr. 217) | 2.148 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Frostschauer (Nr. 239) | 5.020 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **12.242**. Mana nach den Schadensskills ohne Regeneration: **4.518**.

## Kräuterkundler

P-Angriff **106**, M-Angriff **747**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Wasserfesseln (Nr. 16) | 794 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Eislanze (Nr. 29) | 1.375 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Ewiges Eis (Nr. 46) | 1.486 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Windschlitzer (Nr. 221) | 1.597 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Geladener Nebel (Nr. 56) | 1.806 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Gezielter Blitz (Nr. 57) | 1.985 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Kugelblitz (Nr. 69) | 2.432 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 8 | Elektrisches Feld (Nr. 31) | 4.423 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 9 | Tobender Sturm (Nr. 112) | 11.624 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **27.519**. Mana nach den Schadensskills ohne Regeneration: **2.659**.

## Jäger

P-Angriff **764**, M-Angriff **103**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Kettenschuss (Nr. 63) | 908 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Gebundener Schuss (Nr. 53) | 963 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Feuerpfeil (Nr. 51) | 1.192 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Entzugspfeil (Nr. 37) | 1.243 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Schockschuss (Nr. 97) | 1.396 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Verstärkter Pfeil (Nr. 121) | 2.389 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Präzisionsschuss (Nr. 86) | 5.712 | Garantierter Crit ×1,8 eingerechnet. |
| Skill 8 | Salve (Nr. 88) | 10.826 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **24.630**. Mana nach den Schadensskills ohne Regeneration: **1.554**.

Nicht bezifferbar: Seelenbegleiter: Temporäre Beschwörung: Angriffstempo/Schadensformel fehlen; kein erfundener Einzeltreffer.

## Ritter

P-Angriff **496**, M-Angriff **104**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Brecher des Geistes (Nr. 55) | 868 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Brecher der Deckung (Nr. 19) | 890 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Mächtiger Hieb (Nr. 77) | 1.229 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Erlösendes Feld (Nr. 40) | 1.430 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Schildstoß (Nr. 94) | 1.526 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Schildsturm (Nr. 95) | 1.579 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Donnernde Lanze (Nr. 23) | 2.036 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **9.555**. Mana nach den Schadensskills ohne Regeneration: **3.160**.

Mit Provozieren: 9.555 × 4 + 6.000 feste Aggro = **44.221 Aggro**. Unveränderte Buff-/Debuff-Synergien und Auto-Attacks bleiben außen vor.

## Luminet

P-Angriff **104**, M-Angriff **700**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Luminus (Nr. 231) | 798 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Energieschlag (Nr. 36) | 905 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Licht kristallenes Gefängnis (Nr. 218) | 1.209 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Lichtblitz (Nr. 210) | 1.294 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Eislanze (Nr. 29) | 1.328 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Schwerter des Lichtes (Nr. 101) | 1.729 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Heiliges Kreuz (Nr. 215) | 1.846 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 8 | Strafendes Licht (Nr. 213) | 1.955 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 9 | Göttliche Nova (Nr. 217) | 2.115 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 10 | Astralkörper (Nr. 8) | 2.150 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 11 | Aurora Wellen (Nr. 211) | 2.200 | Aurora-Welle vorläufig einmal im Zentrum; Trefferzahl noch offen. |
| Skill 12 | Urteil des Himmels (Nr. 117) | 2.202 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 13 | Heilige Vernichtung (Nr. 216) | 3.439 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 14 | Ätherregen (Nr. 9) | 6.629 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **29.801**. Mana nach den Schadensskills ohne Regeneration: **202**.

## Ritualist – Seelenqual ×15

P-Angriff **104**, M-Angriff **627**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Dunkler Impuls (Nr. 232) | 1.039 | Nach Seelenernte zwei zusätzliche Seelen: +2 M-Angriff auf nachfolgende Skills. |
| Skill 2 | Seelenfessel (Nr. 103) | 1.145 | 69 Seelen beim Einsatz: +69 M-Angriff durch Zahl der Opfer; Ausbrennen +80 als automatische Kampfpassive, Opfergabe +1 % Schaden. |
| Skill 3 | Lebenssauger (Nr. 72) | 1.291 | Nach Seelenernte zwei zusätzliche Seelen: +2 M-Angriff auf nachfolgende Skills. |
| Skill 4 | Feuerball (Nr. 49) | 1.407 | Nach Seelenernte zwei zusätzliche Seelen: +2 M-Angriff auf nachfolgende Skills. |
| Skill 5 | Sturm des Feuers (Nr. 110) | 1.529 | Nach Seelenernte zwei zusätzliche Seelen: +2 M-Angriff auf nachfolgende Skills. |
| Skill 6 | Seelenplage (Nr. 180) | 1.606 | 70 Seelen beim Einsatz: +70 M-Angriff durch Zahl der Opfer; Ausbrennen +80 als automatische Kampfpassive, Opfergabe +1 % Schaden. |
| Skill 7 | Seelenernte (Nr. 105) | 1.928 | Nach 15 Seelenqual-Treffern werden zwei Seelen geerntet. |
| Skill 8 | Schrei der Unterwelt (Nr. 99) | 2.921 | Charakter-M-Angriff vorläufig addiert; endgültige Beteiligung noch offen. Nach Seelenernte zwei zusätzliche Seelen: +2 M-Angriff auf nachfolgende Skills. |
| Skill 9 | Feuer der Verdammten (Nr. 48) | 4.240 | Nach Seelenernte zwei zusätzliche Seelen: +2 M-Angriff auf nachfolgende Skills. |
| Skill 10 | Meteoritenschauer (Nr. 235) | 6.896 | Nach Seelenernte zwei zusätzliche Seelen: +2 M-Angriff auf nachfolgende Skills. |
| Skill 11 | Seelenqual ×15 (Nr. 104) | 16.126 | 15 vollständige Anwendungen statt einer. |

Gesamt: **40.128**. Mana nach den Schadensskills ohne Regeneration: **1.200**; verbleibende Seelen: **72**.

## Schamane

P-Angriff **481**, M-Angriff **424**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Energieschlag (Nr. 36) | 629 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 2 | Kristallisierte Wasserspähre (Nr. 68) | 804 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Windfesseln (Nr. 125) | 953 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Feuerlanze (Nr. 50) | 1.035 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Eisranken (Nr. 30) | 1.056 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Rotier Schlag (Nr. 87) | 1.075 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 7 | Beben (Nr. 15) | 1.303 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 8 | Gezielter Blitz (Nr. 57) | 1.662 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 9 | Erdbeben (Nr. 38) | 1.809 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 10 | Mächtiger Doppelschlag (Nr. 76) | 2.190 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 11 | Vakuumimpuls (Nr. 118) | 2.384 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 12 | Himmelsbrecher (Nr. 212) | 3.482 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 13 | Infernal Zyklon (Nr. 62) | 4.408 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **22.788**. Mana nach den Schadensskills ohne Regeneration: **357**.

## Seelenjäger – Seelensammler ×25

P-Angriff **647**, M-Angriff **103**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Hinterhältiger Pfeil (Nr. 184) | 711 | Nur Initialtreffer; bedingte Schadenswiederholung ohne Zeitplan separat als Obergrenze. |
| Skill 2 | Kettenschuss (Nr. 63) | 791 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Feuerpfeil (Nr. 51) | 1.075 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 4 | Spektralketten (Nr. 229) | 1.823 | 25 Sammelpunkte: 15 % auf den Skill-Grundschaden, nicht auf Charakterangriff. |
| Skill 5 | Doppelschuss (Nr. 24) | 2.446 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 6 | Kopfschuss (Nr. 66) | 3.330 | Garantierter Crit ×1,8 eingerechnet. |
| Skill 7 | Explosionspfeil (Nr. 47) | 4.076 | Drei ausgelöste Explosionspfeile enthalten; keine zusätzlichen normalen Auto-Attacks. |
| Skill 8 | Seelensammler ×25 (Nr. 186) | 19.195 | 25 vollständige Anwendungen statt einer. |

Gesamt: **33.446**. Mana nach den Schadensskills ohne Regeneration: **1.679**.

## Schurke

P-Angriff **509**, M-Angriff **106**.

| Spalte | Skill | Rohschaden | Hinweise |
| --- | --- | ---: | --- |
| Skill 1 | Kunai Todesstoß (Nr. 70) | 559 | Eine normale Anwendung. Finisher mit drei Anwendungen und ×1,5 wird separat ausgewiesen. |
| Skill 2 | Dunkler Schlag (Nr. 27) | 788 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 3 | Schattenfalle (Nr. 91) | 1.157 | Tarnvoraussetzung zugelassen, aber keine Attribut-/Angriffsboni aus Eigenbuffs; alle Schattenangriffe sind ein hypothetischer Gesamtumfang, keine nachgewiesene einzelne Tarnphase. |
| Skill 4 | Blutklinge (Nr. 17) | 1.266 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 5 | Schattendolch (Nr. 90) | 1.317 | Tarnvoraussetzung zugelassen, aber keine Attribut-/Angriffsboni aus Eigenbuffs; alle Schattenangriffe sind ein hypothetischer Gesamtumfang, keine nachgewiesene einzelne Tarnphase. |
| Skill 6 | Schattenschlag (Nr. 92) | 1.410 | Tarnvoraussetzung zugelassen, aber keine Attribut-/Angriffsboni aus Eigenbuffs; alle Schattenangriffe sind ein hypothetischer Gesamtumfang, keine nachgewiesene einzelne Tarnphase. |
| Skill 7 | Sturmklinge (Nr. 111) | 1.841 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 8 | Überschallklinge (Nr. 115) | 2.065 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 9 | Brecher des Lichts (Nr. 20) | 3.012 | Erster Treffer normal, zweiter garantiert kritisch; keine zufälligen Crits. |
| Skill 10 | Klingentornado (Nr. 65) | 3.962 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 11 | Wirbelnde Klinge (Nr. 126) | 5.503 | Eine Anwendung; gespeicherte Trefferzahl. |
| Skill 12 | Tödlicher Tanz (Nr. 113) | 7.837 | Eine Anwendung; gespeicherte Trefferzahl. |

Gesamt: **30.714**. Mana nach den Schadensskills ohne Regeneration: **-478**.

Separate Bedingungen / Sensitivitäten, nicht zur Hauptsumme addiert:

- Kunai-Finisher unter 6 % Ziel-Leben: drei Anwendungen ×1,5: **2.514**; alternative Gesamtsumme **32.669**.

<!-- TIMED_DAMAGE_COMPARISON -->

## Ergänzung: zehn Minuten mit Cooldowns und Ressourcen

> Bisheriger Teststand, unverändert. Die neue MP-Regel (1,5 je Willenskraft, Tick alle 3 Sekunden) ist hier noch nicht simuliert. Ein neuer Lauf folgt erst nach Anpassung der Manakosten.

Die einmalige Rotation oben ist ein Burst-Vergleich. Da das 2-Millionen-Ziel teils vorzeitig stirbt, zeigt die Haupttabelle einen zusätzlichen gleichmäßigen 600-Sekunden-Test mit 10 Millionen HP; die ursprünglichen Todeszeiten sind separat angegeben. Die folgende Modellrechnung nutzt die bestätigten Testparameter: 1,1 Auto-Attacks/s bei Heiler/Luminet/Ritualist und1,2/s beim Kräuterkundler,1,3/s bei Jäger/Seelenjäger, sonst1,5/s bei 100 % Tempo;0,1s aktionsfreie Skill-Reaktionszeit undeinem vollen Angriffstempo-Intervall von Skill zu Auto-Attack und0,5s von Auto-Attack zu Skill, HP/MP-Regeneration alle 2 s, notwendige Setups, temporäre Beschwörungen, keine optionalen Eigenbuffs, Zufalls-Procs oder Gegnerabwehr. [Vollständige Regeln, Minutenwerte und Klassenprotokolle](all-class-timed-damage.md).

| Klasse | Schaden in 10 Min. | DPS | Ø Schaden/Minute | Erstmals Skill zu teuer | Erstmals Mana=0 | Mana-Wartephasen | Warten gesamt | Tod des 2-Mio.-Ziels |
| --- | ---: | ---: | ---: | --- | --- | ---: | ---: | --- |
| Luminet | 1.208.927 | 2.015 | 120.893 | 2:11 | — | 124 | 54 s | — |
| Ritualist | 1.039.306 | 1.732 | 103.931 | — | — | 0 | 0 s | — |
| Seelenjäger | 907.314 | 1.512 | 90.731 | — | — | 0 | 0 s | — |
| Kräuterkundler | 844.059 | 1.407 | 84.406 | — | — | 0 | 0 s | — |
| Jäger | 835.420 | 1.392 | 83.542 | — | — | 0 | 0 s | — |
| Butcher | 813.407 | 1.356 | 81.341 | 0:03 | — | 4 | 1 s | — |
| Gladiator | 781.352 | 1.302 | 78.135 | — | — | 0 | 0 s | — |
| Schamane | 745.323 | 1.242 | 74.532 | — | — | 0 | 0 s | — |
| Schurke | 741.632 | 1.236 | 74.163 | 0:03 | — | 0 | 0 s | — |
| Heiler | 678.663 | 1.131 | 67.866 | — | — | 0 | 0 s | — |
| Druide | 678.296 | 1.130 | 67.830 | 0:05 | 0:04 | 2 | 1 s | — |
| Abenteurer | 643.603 | 1.073 | 64.360 | — | — | 0 | 0 s | — |
| Ritter | 522.081 | 870 | 52.208 | — | — | 0 | 0 s | — |

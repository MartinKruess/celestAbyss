# Verbesserungen von Waffen und Rüstung

Ab R3 gilt eine gemeinsame lineare Pluskurve für den direkten Waffenangriff und die direkte physische/magische Rüstungs- beziehungsweise Schildabwehr. Grundlage ist immer der unverstärkte Wert bei +0. Kein Zinseszins. Nach der Berechnung wird jeder einzelne Gegenstandswert kaufmännisch auf zwei Nachkommastellen gerundet. Ganze Zahlen dienen ausschließlich der Spielanzeige.

| Rang | Je Plusstufe | Maximalstufe | Gesamtbonus bei +10 |
| --- | ---: | ---: | ---: |
| R1 | Nicht verbesserbar | +0 | — |
| R2 | Schmiedetutorial; Prozentwert noch offen | Vorläufig +1 | — |
| R3 | +5,5 % | +10 | +55 % |
| R4 | +5,3 % | +10 | +53 % |
| R5 | +5,1 % | +10 | +51 % |
| R6 | +4,9 % | +10 | +49 % |

Formel: `Grundwert × (1 + Plusstufe × Rangbonus)`. Drei R3-Verbesserungen entsprechen +16,5 %, nicht dreimaligem Multiplizieren mit 1,055. Steine, Zufallsboni, Attribute, Tempo, Charaktergrundwerte und Skillschadensboni werden durch die Plusstufe nicht mitmultipliziert. Identische Plusstände erhalten das Verhältnis der direkten Waffen- und Rüstungswerte bis auf Rundung.

Die Rangabstände der Rüstung bleiben +77/+75/+73/+71/+69 %. Somit liegt R4 +0 gegenüber R3 +10 ungefähr 11,61 % höher, R5 +0 gegenüber R4 +10 ungefähr 11,76 %, R6 +0 gegenüber R5 +10 ungefähr 11,92 %. Die tatsächlichen Gegenstände weichen geringfügig durch Rundung ab. Für R7 ist kein Rang- oder Plusfaktor definiert.

Zentrale Definition: `data/balancing/equipment-upgrade-rules.json`. Gemeinsame Berechnung: `services/equipmentUpgrades.js`. Die Referenz- und Loadoutberechnungen unterstützen einen gemeinsamen Plusstand; Einzelgegenstände lassen sich separat berechnen. Der Endgame-Vergleich akzeptiert `--upgrade=0` bis `--upgrade=10` und verwendet diese Regel. Beispiel: `node scripts/calculateEndgameR6Comparison.js --level=100 --upgrade=10`.

Das ist die Statberechnung, kein fertiger Schmiedevorgang: Materialien, Preise, Erfolgschancen und Persistierung einer Itemverbesserung sind noch nicht festgelegt. Der vorhandene alte Upgrade-Controller ist nicht mit einer vollständigen Ausrüstungsinstanz-Logik verbunden. Hier werden keine Chancen oder Questbelohnungen erfunden. R2 +1 wird bis zur Festlegung seines Prozentwerts von der Berechnung ausdrücklich abgelehnt.

## Grundlage für die Monsterkurve

Die optimale Fortschrittsreferenz beginnt auf Level 40 mit R3 +0. Zehn Verbesserungen verteilen sich auf 19 Level: `Plus = floor((Level − Rangstartlevel) × 10 / 19)`, maximal +10. Die Schwellen sind 42/44/46/48/50/52/54/56/58/59. Auf Level 60 beginnt R4 +0; dieselbe Folge wiederholt sich für R4 und R5. Level 80 beginnt R5 +0, Level 100 R6 +0. R6 erreicht +10 auf Level 119 und bleibt danach dort, bis ein weiterer Rang ausdrücklich definiert wird. Gemeinsame Funktion: `optimalEquipmentReference(level)` in `services/equipmentUpgrades.js`. Diese Regel beschreibt einen Rechenstand und vergibt keine Gegenstände oder Verbesserungen im Spiel.

Für Level 40–100 können wir Spielerreferenzen aus Levelwerten, passender Ausrüstung, definiertem Plusstand, Steinen, Zufallsboni und angenommenen Buffs bilden. Typischer Fortschritt und perfekte Ausrüstung sind getrennte Referenzen. Eine reine Schadens-Dummyreferenz allein bestimmt noch keine faire Begegnung.

1. Gewünschte gegnerische Schadensreduktion festlegen und daraus mit der tatsächlich verwendeten Abwehrformel Monsterabwehr ableiten.
2. Spieler-DPS nach dieser Reduktion und gewünschte Tötungszeit verwenden: Monsterleben ungefähr effektive Spieler-DPS × gewünschte Kampfzeit. Kurze Kämpfe zusätzlich auf Opener/Burst statt nur 600-Sekunden-Durchschnitt prüfen.
3. Gewünschte Belastung der Spielerlebenspunkte beziehungsweise Überlebenszeit wählen; daraus Monsterangriff und Angriffstempo unter Berücksichtigung von Spielerabwehr, Heilung, Regeneration und defensiven Buffs bestimmen.
4. Auf dieser Grundkurve Familien, Rollen, Gruppen und bewusst schwierigere Abschnitte als dokumentierte Abweichungen aufbauen. Übergänge R3/R2/R1 und frühe gestaffelte Rüstungsfunde separat prüfen.

Die Anzahl verfügbarer Kampfwerte oder gleiche Prozentkurven allein garantiert keine Balance. Ausrüstungssprünge, Skillfreischaltungen und unterschiedliche Schadensarten bleiben Teil der Referenz.

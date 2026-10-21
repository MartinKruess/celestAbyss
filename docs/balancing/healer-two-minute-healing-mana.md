# Heiler: zwei Minuten Heilung auf Cooldown

Separater Ressourcen-Test, kein Ersatz der Zehn-Minuten-Schadensauswertung. Voller aktueller R6-Mana-Pool, maximale lernbare Stufen und permanente Passive. Alle fünf regulären Heilzauber werden bei Bereitschaft eingesetzt; Ziel-/Gruppenschaden wird als dauerhaft ausreichend angenommen. Keine Angriffe, Eigenbuffs, Tränke oder Himmlische Aufopferung mit 90-%-Lebensopfer.

Castzeiten blockieren andere Anwendungen; Cooldown startet nach Castende; zwischen Anwendungen 0,1 Sekunden Reaktionszeit. Bei gleichzeitig bereiten Skills feste Priorität Kuss der Aurora, Wiederherstellung, Göttliche Heilung, Heilung, Aurafeld. Neue aktive Heilung unterbricht ein laufendes Aurafeld; Wiederherstellungs-Ticks blockieren keine anderen Zauber. Tatsächlich benötigte Heilung, Gegnermechaniken und Überheilung werden nicht simuliert.

| Skill | Anwendungen | Mana je Anwendung | Mana insgesamt | Cooldown | Castzeit |
| --- | ---: | ---: | ---: | ---: | ---: |
| Kuss der Aurora | 2 | 1.208 | 2.416 | 70 s | 0,6 s |
| Wiederherstellung | 6 | 840 | 5.040 | 22 s | 0,2 s |
| Göttliche Heilung | 3 | 544 | 1.632 | 58 s | 0,2 s |
| Heilung | 7 | 539 | 3.773 | 19 s | 0,1 s |
| Strahlendes Aurafeld | 3 | 210 | 630 | 46 s | 0 s |

| Ergebnis | Wert |
| --- | ---: |
| Start-Mana | 6.852 |
| Mana-Verbrauch insgesamt | 13.491 |
| Verbrauch pro Minute | 6.745,5 |
| MP-Regeneration je 3 Sekunden | 277,6 |
| Mögliche Regeneration pro Minute | 5.552 |
| Tatsächlich regeneriert | 11.104 |
| Regeneration am vollen Pool verfallen | -0 |
| Niedrigster Mana-Stand | 3.511 bei 1,5 s |
| Mana nach zwei Minuten | 4.465 |
| Mana-Hindernisse | 0 Zeitschritte |

## Anwendungen

| Sekunde | Heilzauber | Mana-Kosten | Rest-Mana |
| ---: | --- | ---: | ---: |
| 0 | Kuss der Aurora | 1.208 | 5.644 |
| 0,7 | Wiederherstellung | 840 | 4.804 |
| 1 | Göttliche Heilung | 544 | 4.260 |
| 1,3 | Heilung | 539 | 3.721 |
| 1,5 | Strahlendes Aurafeld | 210 | 3.511 |
| 20,4 | Heilung | 539 | 4.637,6 |
| 22,9 | Wiederherstellung | 840 | 4.075,2 |
| 39,5 | Heilung | 539 | 5.201,8 |
| 45,1 | Wiederherstellung | 840 | 4.917 |
| 47,5 | Strahlendes Aurafeld | 210 | 4.707 |
| 58,6 | Heilung | 539 | 5.278,4 |
| 59,2 | Göttliche Heilung | 544 | 4.734,4 |
| 67,3 | Wiederherstellung | 840 | 4.727,2 |
| 70,6 | Kuss der Aurora | 1.208 | 3.796,8 |
| 77,7 | Heilung | 539 | 3.813 |
| 89,5 | Wiederherstellung | 840 | 4.083,4 |
| 93,5 | Strahlendes Aurafeld | 210 | 4.428,6 |
| 96,8 | Heilung | 539 | 4.167,2 |
| 111,7 | Wiederherstellung | 840 | 4.715,2 |
| 115,9 | Heilung | 539 | 4.453,8 |
| 117,4 | Göttliche Heilung | 544 | 4.187,4 |

## Aurafeld

| Von | Bis | Grund |
| ---: | ---: | --- |
| 1,5 | 13,5 | Vollständig ausgelaufen |
| 47,5 | 58,6 | Andere aktive Heilung |
| 93,5 | 96,8 | Andere aktive Heilung |

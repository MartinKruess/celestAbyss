> Seelenjäger-Werte in dieser Auswertung stammen noch von vor der Umstellung: Seelenschuss bezahlt jetzt 20 Sammelanwendungen im Voraus (maximal 960 Mana), Seelensammler ist kostenlos. Diese Ergebnisse müssen für den Seelenjäger neu gerechnet werden; die aktuelle Standardübersicht steht in all-class-timed-damage.md.

# Erneute Prüfung der angepassten Angriffe

600 Sekunden, ungebufft, ein stationäres Ziel. Standardläufe stimmen mit der aktuellen All-Class-Timed-Damage-Liste überein. Erneute begrenzte Suche nach Skill-Auswahl und Prioritäten, anschließend paarweise Tests mit und ohne den jeweiligen Skill bei 0,01 Sekunden Simulationsschritt. Kein Beweis eines globalen Optimums. Heilung, Kontrolle und zusätzliche Flächenziele werden nicht als Schaden gewertet. Keine Skilldefinitionen verändert.

Positive Differenz: Skill erhöht den Gesamtschaden. Negative Differenz: Weglassen erhöht den Gesamtschaden in dieser jeweiligen festen Rotation. Beide Tests erlauben Auto-Attacks als Füller. Keine erzwungenen Schadensanteile.

| Klasse | Skill | Anwendungen mit Skill | Skill-Schaden | Mana gesamt | Beitrag im Standardlauf | Beitrag in gesuchter Rotation |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Butcher | Schmetterschlag | 15 | 32.673 | 5.145 | 938 | 13.381 |
| Gladiator | Schmetterschlag | 14 | 30.034 | 4.802 | 230 | -1.697 |
| Kräuterkundler | Windschlitzer | 20 | 31.932 | 4.300 | 2.170 | 3.111 |
| Kräuterkundler | Kugelblitz | 21 | 51.890 | 8.904 | 559 | 22.230 |
| Druide | Windschlitzer | 15 | 21.988 | 3.144 | 20.163 | 19.189 |
| Schamane | Verbrennen | 27 | 43.384 | 6.128 | -2.339 | 10.277 |
| Schamane | Feuerlanze | 15 | 17.276 | 2.226 | -5.416 | 8.540 |
| Schamane | Felszähne | 40 | 61.644 | 9.196 | 8.098 | 7.756 |
| Seelenjäger | Kopfschuss | 9 | 29.967 | 4.869 | -12.708 | -9.298 |
| Seelenjäger | Explosionspfeil | 17 | 69.299 | 9.078 | -27.761 | -22.599 |
| Schurke | Blutklinge | 9 | 11.650 | 1.600 | -7.845 | -3.139 |
| Schurke | Überschallklinge | 6 | 12.560 | 2.196 | -14.555 | -11.112 |
| Ritualist | Meteoritenschauer | 1 | 9.332 | 2.608 | -13.673 | -9.249 |

## Ursachenprüfung

Nur diagnostisch: Derselbe Skill wird einmal ohne Manakosten und einmal ohne Castzeit simuliert. Das sind keine vorgeschlagenen Änderungen der Regeln. Positive Werte bedeuten einen Gewinn gegenüber derselben Rotation ohne den Skill.

| Klasse | Skill | Aktuell | Hypothetisch ohne Manakosten | Hypothetisch ohne Castzeit |
| --- | --- | ---: | ---: | ---: |
| Gladiator | Schmetterschlag | -1.697 | 22.853 | 906 |
| Seelenjäger | Kopfschuss | -9.298 | 33.392 | -9.378 |
| Seelenjäger | Explosionspfeil | -22.599 | 74.413 | -22.599 |
| Schurke | Blutklinge | -3.139 | 7.888 | -2.881 |
| Schurke | Überschallklinge | -11.112 | 10.948 | -10.575 |
| Ritualist | Meteoritenschauer | -9.249 | 28.900 | -9.249 |

Feuerlanze und Verbrennen sind in der gesuchten Auswahl positiv, im Standardlauf negativ: ihre Bewertung hängt von den anderen verwendeten Angriffen ab. Kopfschuss benötigt aktuell 0,3 Sekunden Castzeit. Explosionspfeil wird ohne Castzeit aktiviert, liefert seinen Zusatzschaden jedoch erst über die nächsten drei Auto-Attacks und verzögerte Explosionen. Kurze Castzeit ist daher weder identisch mit sofortigem Gesamtschaden noch ausreichend für eine positive Mana-Bilanz.

Konkretes Beispiel Seelenjäger: Kopfschuss liefert im gepaarten Lauf 29.967 Schaden, verdrängt aber unter anderem 33 Seelensammler-Treffer und fünf Spektralketten-Anwendungen. Explosionspfeil liefert 69.299 Schaden, verdrängt unter anderem 109 Seelensammler-Treffer und sechs Spektralketten-Anwendungen. Blutklinge und Überschallklinge verdrängen Anwendungen von Tödlicher Tanz und Wirbelnde Klinge. Das sind Effekte der jeweils geprüften Rotation, keine unveränderlichen Eigenschaften der Skills.

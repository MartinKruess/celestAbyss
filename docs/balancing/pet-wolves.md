# Pet-Wölfe – Grundmodell und Levelentwurf

**Entwurf zur gemeinsamen Abstimmung. Nicht in der Datenbank angewendet.** Neue Grundwerte, Levelzuwächse, Grundfrequenz und Profilfaktoren sind Vorschläge. Bestehende Spieler- und Beschwörungswerte bleiben unverändert.

## Startvorlage

Physischer Nahkämpfer, 1,0 Basisangriffe pro Sekunde vor dem kleinen Agilitätsbonus. Kein eigener Angriffsskill und keine automatische Vererbung von Spielerwerten in der Familienvorlage. Bindung und Wilde Bindung werden erst im gesonderten Level-60-Beispiel ergänzt.

| Attribut | Level 1 | Zuwachs je weiterem Level |
| --- | ---: | ---: |
| Stärke | 5 | 1 |
| Vitalität | 4 | 0,7 |
| Intelligenz | 0 | 0 |
| Willenskraft | 1 | 0,2 |
| Geschick | 4 | 0,5 |
| Agilität | 5 | 0,3 |
| Glück | 0 | 0 |

Vorgeschlagene Umrechnung aus dem aktuellen allgemeinen Attributmodell: 30 Leben je Vita, 30 Mana je Willenskraft, 1,2 P-Abwehr je Vita, 1,2 M-Abwehr je Willenskraft und 1,8 P-Angriff je Stärke. Geschick gibt Genauigkeit; Agilität gibt Ausweichen und 0,06 Angriffstempopunkte je Punkt. Keine Klassenboni. Diese Übernahme für reguläre Pets ist Teil des Entwurfs, keine bereits freigegebene Pet-Regel.

## Wachstum von Level 1 bis 100

Attribut auf Level L = Startwert + (L − 1) × Levelzuwachs. Kein wiederholtes Multiplizieren des vorherigen Levels und keine stillschweigend bestätigte ×1,5-Kurve. Die Vorlage ist zunächst linear, damit wir ihre Wirkung leicht prüfen können.

| Level | Leben | Mana | P-Angriff | M-Angriff | P-Abwehr | M-Abwehr | Angriffe/s | Auto-Schaden / 600 s |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 120 | 30 | 9 | 0 | 4,8 | 1,2 | 1,003 | 5.409 |
| 10 | 309 | 84 | 25,2 | 0 | 12,36 | 3,36 | 1,005 | 15.170 |
| 20 | 519 | 144 | 43,2 | 0 | 20,76 | 5,76 | 1,006 | 26.050 |
| 30 | 729 | 204 | 61,2 | 0 | 29,16 | 8,16 | 1,008 | 36.965 |
| 40 | 939 | 264 | 79,2 | 0 | 37,56 | 10,56 | 1,01 | 47.916 |
| 50 | 1.149 | 324 | 97,2 | 0 | 45,96 | 12,96 | 1,012 | 59.000 |
| **60** | 1.359 | 384 | 115,2 | 0 | 54,36 | 15,36 | 1,014 | 70.042 |
| 70 | 1.569 | 444 | 133,2 | 0 | 62,76 | 17,76 | 1,015 | 81.119 |
| 80 | 1.779 | 504 | 151,2 | 0 | 71,16 | 20,16 | 1,017 | 92.232 |
| 90 | 1.989 | 564 | 169,2 | 0 | 79,56 | 22,56 | 1,019 | 103.381 |
| 100 | 2.199 | 624 | 187,2 | 0 | 87,96 | 24,96 | 1,021 | 114.566 |

Die Rechenprobe verwendet wie der bestehende Spieler-Basisvergleich ein Ziel mit 10.000.000 Leben ohne Abwehr und ohne Gegenangriffe. Nur normale Angriffe, erster Treffer nach einem vollständigen Angriffsintervall; keine eigenen Skills, zufälligen Krits, Trefferwürfe, Laufwege oder Pet-Tode. Leben und Abwehr werden hier nur angezeigt; sie erhöhen den Rohschaden nicht. Regeneration und Mana werden nicht verbraucht oder als Heilung angerechnet. Bewegung bleibt bei 100 % Basiswert; ein Agilitätsfaktor für Lauftempo wird nicht erfunden.

Die Zahlen werden intern präzise gerechnet. Leben und Mana werden erst am Ende auf ganze Werte gerundet; die Anzeige anderer Werte hat höchstens zwei Nachkommastellen. Attribute, Treffer-/Ausweichwerte und Regeneration stehen vollständig im JSON-Bericht. Die vorhandene Angriffstempokurve wird einmal auf den Rohwert angewendet.

## Drei Pet-Faktoren auf Level 60

Beispiele am selben Grundmodell, ohne Bindung oder Besitzerbonus. Der Faktor betrifft Leben, Mana, Angriff und Abwehr, nicht Angriffstempo, Genauigkeit oder Ausweichen. Noch keine der sieben Wolfsvarianten erhält einen dieser Faktoren.

| Pet-Faktor | Leben | P-Angriff | P-Abwehr | M-Abwehr | Auto-Schaden / 600 s |
| ---: | ---: | ---: | ---: | ---: | ---: |
| ×1 | 1.359 | 115,2 | 54,36 | 15,36 | 70.042 |
| ×1,15 | 1.563 | 132,48 | 62,51 | 17,66 | 80.548 |
| ×1,3 | 1.767 | 149,76 | 70,67 | 19,97 | 91.054 |

## Bestehender Spielerschaden plus Beispielwolf

**Vorläufige reine Additionsprobe. Keine neue Spieler-Simulation und keine fertige Gesamtbalance.** Alle Klassen bekommen denselben Level-60-Beispielwolf mit ihrem maximal lernbaren Bindungsbonus. Der Abenteurer bekommt zwei solche Wölfe, stärkere Bindung und zusätzlich Wilde Bindung bei 100 % Vertrauen aus seinen permanenten Werten. Bestehende temporäre Klassenbeschwörungen sind bereits im Spielerschaden enthalten und werden nicht doppelt addiert.

Eigene und fremde aktive Buffs, Blutgeruch, Rudelangriff, Wolfsfähigkeiten, Pet-Ausrüstung, Laufzeiten und Opportunitätskosten fehlen noch. Deshalb ist besonders die Abenteurer-Zeile nur eine erste Größenordnung. Die zufällige Wahl späterer Pets wird dadurch nicht festgelegt.

| Klasse | Bisheriger Schaden | Wölfe | Zusätzlicher Wolfschaden | Summe | Zuwachs |
| --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 439.897 | 2 | 298.698 | 738.596 | 67,9 % |
| Butcher | 517.153 | 1 | 80.986 | 598.139 | 15,66 % |
| Druide | 540.132 | 1 | 80.986 | 621.118 | 14,99 % |
| Gladiator | 583.179 | 1 | 80.986 | 664.165 | 13,89 % |
| Heiler | 503.347 | 1 | 80.986 | 584.332 | 16,09 % |
| Kräuterkundler | 488.721 | 1 | 80.986 | 569.707 | 16,57 % |
| Jäger | 595.015 | 1 | 80.986 | 676.001 | 13,61 % |
| Ritter | 372.949 | 1 | 80.986 | 453.934 | 21,71 % |
| Luminet | 579.932 | 1 | 80.986 | 660.918 | 13,96 % |
| Ritualist | 613.628 | 1 | 80.986 | 694.614 | 13,2 % |
| Schamane | 424.889 | 1 | 80.986 | 505.875 | 19,06 % |
| Seelenjäger | 485.925 | 1 | 80.986 | 566.911 | 16,67 % |
| Schurke | 432.885 | 1 | 80.986 | 513.871 | 18,71 % |

## Gesammelte Wolfsvarianten

Noch keine Seltenheit, Zähmchance, Gebietszuordnung oder besondere Fähigkeit vergeben. Die Aufteilung auf Wolf-Grundmodell 1 und 2 folgt nach der Prüfung dieser Startwerte. Ein zweites Wolfsgrundmodell erhält noch keine erfundenen Werte.

| Bisheriger Name | Grundmodell | Namensstatus |
| --- | --- | --- |
| Grimmiger Waldwolf | Noch zuzuordnen | Gesammelt |
| Frostklauenwolf | Noch zuzuordnen | Gesammelt |
| Schattenwolf | Noch zuzuordnen | Gesammelt |
| Sonnenfellwolf | Noch zuzuordnen | Gesammelt |
| Gewöhnlicher Grauwolf | Noch zuzuordnen | Gesammelt |
| Rotmähnenwolf | Noch zuzuordnen | Gesammelt |
| Nebelwolf | Noch zuzuordnen | Gesammelt |

## Zentrale Stellschrauben

Familienstartwerte und Levelzuwächse stehen einmal in `data/balancing/creature-family-draft.json`. Varianten sollen später nur auf diese Vorlage verweisen und ihre Abweichungen speichern. Für eine genaue Zieleinstellung unterstützt die Berechnung bereits das Verhältnis „Zielwert / ursprünglicher Referenzwert“ je Kampfwert: keine manuell zu erratenden Dezimalfaktoren. Wird die Familie später schwächer, wirkt das gespeicherte Verhältnis weiter mit. Es gibt noch keine festgelegten Zielwerte je Wolfsvariante und keinen Unreal-Import.

Die Beispielprofile Pet ×1 und Monster ×2,5 sind getrennt. Profile können einzelne Kampfwerte später unterschiedlich verändern. Echte Bosse sind hier nicht angelegt.

[Vogelvorlagen und Varianten](pet-birds.md). Neu erzeugen: `node scripts/buildCreatureFamilyDraft.js`.

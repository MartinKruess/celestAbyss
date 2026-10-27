# Pet-Vögel – zwei getrennte Grundmodelle

**Entwurf zur gemeinsamen Abstimmung. Nicht in der Datenbank angewendet.** Die beiden vom Nutzer getrennten Vogelarten bleiben zwei Modell-/Skelettgruppen. Die Spielwerte sind vorläufige Vorschläge. Beide Gruppen sind vorerst physisch; Flugfähigkeit, Reichweite, Fähigkeiten und Trefferanimationen sind noch offen.

Attribut auf Level L = Startwert + (L − 1) × Levelzuwachs. Kein wiederholtes Multiplizieren des vorherigen Levels und keine stillschweigend bestätigte ×1,5-Kurve. Die Vorlage ist zunächst linear, damit wir ihre Wirkung leicht prüfen können.

Vorgeschlagene Umrechnung aus dem aktuellen allgemeinen Attributmodell: 30 Leben je Vita, 30 Mana je Willenskraft, 1,2 P-Abwehr je Vita, 1,2 M-Abwehr je Willenskraft und 1,8 P-Angriff je Stärke. Geschick gibt Genauigkeit; Agilität gibt Ausweichen und 0,06 Angriffstempopunkte je Punkt. Keine Klassenboni. Diese Übernahme für reguläre Pets ist Teil des Entwurfs, keine bereits freigegebene Pet-Regel.

## Vogel – Grundmodell 1

Vorgeschlagene Basisfrequenz: 1,05 Angriffe pro Sekunde vor Agilität.

| Attribut | Level 1 | Zuwachs je weiterem Level |
| --- | ---: | ---: |
| Stärke | 4 | 0,9 |
| Vitalität | 3 | 0,55 |
| Intelligenz | 0 | 0 |
| Willenskraft | 1 | 0,15 |
| Geschick | 5 | 0,6 |
| Agilität | 6 | 0,45 |
| Glück | 0 | 0 |

| Level | Leben | Mana | P-Angriff | M-Angriff | P-Abwehr | M-Abwehr | Angriffe/s | Auto-Schaden / 600 s |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 90 | 30 | 7,2 | 0 | 3,6 | 1,2 | 1,054 | 4.550 |
| 10 | 239 | 70 | 21,78 | 0 | 9,54 | 2,82 | 1,056 | 13.787 |
| 20 | 404 | 116 | 37,98 | 0 | 16,14 | 4,62 | 1,059 | 24.117 |
| 30 | 569 | 161 | 54,18 | 0 | 22,74 | 6,42 | 1,062 | 34.513 |
| 40 | 734 | 206 | 70,38 | 0 | 29,34 | 8,22 | 1,065 | 44.902 |
| 50 | 899 | 251 | 86,58 | 0 | 35,94 | 10,02 | 1,068 | 55.411 |
| **60** | 1.064 | 296 | 102,78 | 0 | 42,54 | 11,82 | 1,07 | 65.985 |
| 70 | 1.229 | 341 | 118,98 | 0 | 49,14 | 13,62 | 1,073 | 76.504 |
| 80 | 1.394 | 386 | 135,18 | 0 | 55,74 | 15,42 | 1,076 | 87.191 |
| 90 | 1.559 | 431 | 151,38 | 0 | 62,34 | 17,22 | 1,079 | 97.943 |
| 100 | 1.724 | 476 | 167,58 | 0 | 68,94 | 19,02 | 1,081 | 108.592 |

| Bisheriger Name | Grundmodell | Namensstatus |
| --- | --- | --- |
| Silberschwingenkranich | bird-body-1 | Gesammelt |
| Rotkammreißer | bird-body-1 | Gesammelt |
| Blaufederkolben | bird-body-1 | Gesammelt |
| Waldheinläufer | bird-body-1 | Gesammelt |
| Düsterkrähenläufer | bird-body-1 | Gesammelt |

## Vogel – Grundmodell 2

Vorgeschlagene Basisfrequenz: 1,15 Angriffe pro Sekunde vor Agilität.

| Attribut | Level 1 | Zuwachs je weiterem Level |
| --- | ---: | ---: |
| Stärke | 3 | 0,8 |
| Vitalität | 2,5 | 0,4 |
| Intelligenz | 0 | 0 |
| Willenskraft | 1 | 0,15 |
| Geschick | 6 | 0,7 |
| Agilität | 7 | 0,55 |
| Glück | 0 | 0 |

| Level | Leben | Mana | P-Angriff | M-Angriff | P-Abwehr | M-Abwehr | Angriffe/s | Auto-Schaden / 600 s |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 75 | 30 | 5,4 | 0 | 3 | 1,2 | 1,155 | 3.737 |
| 10 | 183 | 70 | 18,36 | 0 | 7,32 | 2,82 | 1,158 | 12.742 |
| 20 | 303 | 116 | 32,76 | 0 | 12,12 | 4,62 | 1,162 | 22.834 |
| 30 | 423 | 161 | 47,16 | 0 | 16,92 | 6,42 | 1,166 | 32.965 |
| 40 | 543 | 206 | 61,56 | 0 | 21,72 | 8,22 | 1,169 | 43.154 |
| 50 | 663 | 251 | 75,96 | 0 | 26,52 | 10,02 | 1,173 | 53.400 |
| **60** | 783 | 296 | 90,36 | 0 | 31,32 | 11,82 | 1,177 | 63.794 |
| 70 | 903 | 341 | 104,76 | 0 | 36,12 | 13,62 | 1,181 | 74.170 |
| 80 | 1.023 | 386 | 119,16 | 0 | 40,92 | 15,42 | 1,184 | 84.604 |
| 90 | 1.143 | 431 | 133,56 | 0 | 45,72 | 17,22 | 1,188 | 95.095 |
| 100 | 1.263 | 476 | 147,96 | 0 | 50,52 | 19,02 | 1,192 | 105.643 |

| Bisheriger Name | Grundmodell | Namensstatus |
| --- | --- | --- |
| Himmelsfalk | bird-body-2 | Gesammelt |
| Rotscheitelgleiter | bird-body-2 | Gesammelt |
| Waldkronenschreiher | bird-body-2 | Gesammelt |
| Schattenspitz | bird-body-2 | Gesammelt |
| Felsenflügel | bird-body-2 | Offen; Vorschlag: Felsenschwinge |
| Mondvariante | bird-body-2 | Offen; Vorschlag: Mondlauerfalke |

## Vergleichsrahmen

Die Rechenprobe verwendet wie der bestehende Spieler-Basisvergleich ein Ziel mit 10.000.000 Leben ohne Abwehr und ohne Gegenangriffe. Nur normale Angriffe, erster Treffer nach einem vollständigen Angriffsintervall; keine eigenen Skills, zufälligen Krits, Trefferwürfe, Laufwege oder Pet-Tode. Leben und Abwehr werden hier nur angezeigt; sie erhöhen den Rohschaden nicht. Regeneration und Mana werden nicht verbraucht oder als Heilung angerechnet. Bewegung bleibt bei 100 % Basiswert; ein Agilitätsfaktor für Lauftempo wird nicht erfunden.

Die Varianten teilen zunächst nur die Modellgruppe. Es gibt noch keine individuellen Statboni, Seltenheiten oder Zähmchancen. Die beiden Namensvorschläge sind nicht als endgültige Namen übernommen.

[Wolfsgrundmodell und Level-60-Spielervergleich](pet-wolves.md). Neu erzeugen: `node scripts/buildCreatureFamilyDraft.js`.

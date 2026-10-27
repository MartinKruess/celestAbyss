# Wölfe, Vögel und Golems – World-Monster-Varianten

**7 erwachsene Wolfsarten, 7 Rudelführer, 6 Nachwuchsvarianten und 11 Vögel, Level 1–100.** Referenzlevel **63**: Wölfe 6.300–7.000 Leben, beide Vogelgruppen 7.000–9.000 Leben. Alle übrigen Kampfwerte und die Wachstumskurven sind erste Vorschläge für spätere Unreal-Tests. Zusätzlich **5 Golems**, mit vorläufigen Grundwerten auf Level 60: 9.800 Leben, 350 P-Angriff und jeweils 250 P-/M-Abwehr. Stein und Eis starten zahlenmäßig gleich. Gigantische Varianten erhalten +10 % auf Leben, Angriff und beide Abwehrwerte; Vulkangolem +25 % gegenüber Stein. Tempo bleibt unverändert. Eisverhalten und das besondere Verhalten des kleinen Vulkan-Minibosses sind offen.

## Gemeinsame Berechnung

Grundkreatur → Level-1-World-Referenz → gemeinsame Wachstumskurve → Zahlenfamilie → Variante. Varianten speichern nur Multiplikatoren, keine kopierten Grundwerte.

`Wert(Level) = geerbter Level-1-Wert × Familienfaktor × Variantenfaktor × Wachstum^(Level − 1)`

Leben wächst zunächst mit **1,065 je Level**, P-Angriff und beide Abwehrwerte mit **1,04**. Die Zielwerte auf Level 63 dienen einmalig zur Ermittlung der Variantenfaktoren. Sie werden beim Auflösen nicht erneut erzwungen: Änderungen an der gemeinsamen Referenz, Familie oder Kurve wirken auf alle Nachfahren. Es gibt keinen automatischen Tausch „mehr Leben gegen weniger Angriff“.

HP/Mana werden erst am Ende gerundet; Angriff und Abwehr behalten intern volle Genauigkeit. Lange Multiplikatoren werden vom Werkzeug berechnet und müssen nicht von Hand eingegeben werden. Neue Varianten lassen sich mit ganzen Zielwerten in `world-variant-design.json` ausarbeiten. Ein erneuter Generatorlauf passt Variantenfaktoren wieder an diese Eingabeziele an.

**Direkte NPC-Kampfwerte:** Primärattribute sind in diesem World-Profil deaktiviert; es kommen nicht heimlich 30 Leben aus Vitalität hinzu. Vorläufig ausschließlich physischer Angriff; Namen wie Schatten- oder Frostwolf legen noch keine Elementarskills fest. Angriffstempo 0,7 und Lauftempo 0,95 werden unverändert geerbt, ohne wachsende Tempoattribute. Tatsächliche Grundfrequenz und Animationen fehlen noch. Keine HP-Regeneration im aktiven Kampf; außerhalb bzw. im Rückkehrzustand 10 % Max-Leben je 3 Sekunden. Cooldown-only-Mana.

## Wölfe – gemeinsame Zahlenfamilie

| Variante | Leben L1 | P-Angriff L1 | Leben L63 | P-Angriff L63 | P-Abwehr L63 | M-Abwehr L63 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Grimmiger Waldwolf | 135 | 30,32 | 6.700 | 345 | 125 | 80 |
| Frostklauenwolf | 141 | 29 | 7.000 | 330 | 140 | 110 |
| Schattenwolf | 129 | 30,76 | 6.400 | 350 | 105 | 95 |
| Sonnenfellwolf | 137 | 28,12 | 6.800 | 320 | 120 | 120 |
| Gewöhnlicher Grauwolf | 127 | 26,37 | 6.300 | 300 | 100 | 70 |
| Rotmähnenwolf | 133 | 29,88 | 6.600 | 340 | 115 | 75 |
| Nebelwolf | 131 | 27,25 | 6.500 | 310 | 105 | 115 |

## Vogelgruppe 1

| Variante | Leben L1 | P-Angriff L1 | Leben L63 | P-Angriff L63 | P-Abwehr L63 | M-Abwehr L63 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Silberschwingenkranich | 165 | 23,73 | 8.200 | 270 | 90 | 130 |
| Rotkammreißer | 181 | 30,76 | 9.000 | 350 | 110 | 85 |
| Blaufederkolben | 159 | 21,97 | 7.900 | 250 | 85 | 125 |
| Waldheinläufer | 149 | 24,61 | 7.400 | 280 | 95 | 80 |
| Düsterkrähenläufer | 171 | 27,25 | 8.500 | 310 | 100 | 120 |

## Vogelgruppe 2

| Variante | Leben L1 | P-Angriff L1 | Leben L63 | P-Angriff L63 | P-Abwehr L63 | M-Abwehr L63 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Himmelsfalk | 153 | 27,25 | 7.600 | 310 | 75 | 90 |
| Rotscheitelgleiter | 161 | 28,12 | 8.000 | 320 | 85 | 85 |
| Waldkronenschreiher | 141 | 22,85 | 7.000 | 260 | 70 | 100 |
| Schattenspitz | 157 | 29,88 | 7.800 | 340 | 80 | 110 |
| Felsenflügel (Arbeitsname) | 181 | 31,64 | 9.000 | 360 | 125 | 80 |
| Mondvariante (Arbeitsname) | 169 | 25,49 | 8.400 | 290 | 80 | 140 |

## Golems

| Variante | Leben L1 | P-Angriff L1 | Leben L63 | P-Angriff L63 | P-Abwehr L63 | M-Abwehr L63 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Steingolem | 239 | 34,6 | 11.838 | 393,7 | 281,22 | 281,22 |
| Gigantischer Steingolem | 262 | 38,06 | 13.022 | 433,07 | 309,34 | 309,34 |
| Eisgolem | 239 | 34,6 | 11.838 | 393,7 | 281,22 | 281,22 |
| Gigantischer Eisgolem | 262 | 38,06 | 13.022 | 433,07 | 309,34 | 309,34 |
| Vulkangolem (Arbeitsname) | 298 | 43,25 | 14.797 | 492,13 | 351,52 | 351,52 |

## Wolfsgruppe 2 – Nachwuchs und Rudelführer

| Variante | Leben L1 | P-Angriff L1 | Leben L63 | P-Angriff L63 | P-Abwehr L63 | M-Abwehr L63 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Rudelführer – Grimmiger Waldwolf | 149 | 33,35 | 7.370 | 379,5 | 137,5 | 88 |
| Rudelführer – Frostklauenwolf | 155 | 31,9 | 7.700 | 363 | 154 | 121 |
| Rudelführer – Schattenwolf | 142 | 33,84 | 7.040 | 385 | 115,5 | 104,5 |
| Rudelführer – Sonnenfellwolf | 151 | 30,94 | 7.480 | 352 | 132 | 132 |
| Rudelführer – Gewöhnlicher Grauwolf | 140 | 29 | 6.930 | 330 | 110 | 77 |
| Rudelführer – Rotmähnenwolf | 146 | 32,87 | 7.260 | 374 | 126,5 | 82,5 |
| Rudelführer – Nebelwolf | 144 | 29,97 | 7.150 | 341 | 115,5 | 126,5 |
| Waldwolf – Jungtier | 68 | 15,16 | 3.350 | 172,5 | 62,5 | 40 |
| Waldwolf – Welpe | 54 | 12,13 | 2.680 | 138 | 50 | 32 |
| Grauwolf – Jungtier | 63 | 13,18 | 3.150 | 150 | 50 | 35 |
| Grauwolf – Welpe | 51 | 10,55 | 2.520 | 120 | 40 | 28 |
| Frostklauenwolf – Jungtier | 71 | 14,5 | 3.500 | 165 | 70 | 55 |
| Frostklauenwolf – Welpe | 56 | 11,6 | 2.800 | 132 | 56 | 44 |

## Wolfsgruppe 2: Faktoren und Gebietslevel

| Variante | Quelle | Faktor auf eigenem Level | Level gegenüber örtlichen Erwachsenen |
| --- | --- | ---: | ---: |
| Rudelführer – Grimmiger Waldwolf | Grimmiger Waldwolf | 110 % | 0 |
| Rudelführer – Frostklauenwolf | Frostklauenwolf | 110 % | 0 |
| Rudelführer – Schattenwolf | Schattenwolf | 110 % | 0 |
| Rudelführer – Sonnenfellwolf | Sonnenfellwolf | 110 % | 0 |
| Rudelführer – Gewöhnlicher Grauwolf | Gewöhnlicher Grauwolf | 110 % | 0 |
| Rudelführer – Rotmähnenwolf | Rotmähnenwolf | 110 % | 0 |
| Rudelführer – Nebelwolf | Nebelwolf | 110 % | 0 |
| Waldwolf – Jungtier | Grimmiger Waldwolf | 50 % | -2 |
| Waldwolf – Welpe | Grimmiger Waldwolf | 40 % | -4 |
| Grauwolf – Jungtier | Gewöhnlicher Grauwolf | 50 % | -2 |
| Grauwolf – Welpe | Gewöhnlicher Grauwolf | 40 % | -4 |
| Frostklauenwolf – Jungtier | Frostklauenwolf | 50 % | -2 |
| Frostklauenwolf – Welpe | Frostklauenwolf | 40 % | -4 |

Junge erscheinen zwei Level unter den Erwachsenen, Welpen vier. Das Level wird mindestens 1. Erst das eigene Level berechnen, dann einmal den Faktor anwenden. Die Faktoren betreffen HP, P-Angriff und beide Abwehrwerte; Tempo bleibt gleich. Platzierung ist vorgemerkt, kein implementierter Spawner. Nachwuchs gibt es ausschließlich für Waldwolf, Grauwolf und Frostklauenwolf.

## Golems: Startwerte auf Level 60

Relative Varianten folgen den Grundwerten ihrer Quelle. Dies sind Vorschläge, keine endgültige Balance.

| Variante | Faktor | HP | P-Angriff | P-Abwehr | M-Abwehr |
| --- | ---: | ---: | ---: | ---: | ---: |
| Steingolem | ×1 | 9.800 | 350 | 250 | 250 |
| Gigantischer Steingolem | ×1,1 | 10.780 | 385 | 275 | 275 |
| Eisgolem | ×1 | 9.800 | 350 | 250 | 250 |
| Gigantischer Eisgolem | ×1,1 | 10.780 | 385 | 275 | 275 |
| Vulkangolem | ×1,25 | 12.250 | 437,5 | 312,5 | 312,5 |

Die vorstehende L63-Tabelle zeigt zum Vergleich weiterhin Level 63. Relative Golemvarianten werden aus ihren Quellvarianten erzeugt. Keine neuen Spezialfähigkeiten festgelegt.

## Lebenspunkte über die Level

| Variante | L1 | L10 | L20 | L30 | L40 | L50 | L60 | L63 | L80 | L100 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Grimmiger Waldwolf | 135 | 238 | 447 | 839 | 1.574 | 2.955 | 5.547 | 6.700 | 19.544 | 68.867 |
| Frostklauenwolf | 141 | 249 | 467 | 876 | 1.645 | 3.087 | 5.795 | 7.000 | 20.419 | 71.950 |
| Schattenwolf | 129 | 227 | 427 | 801 | 1.504 | 2.823 | 5.298 | 6.400 | 18.669 | 65.783 |
| Sonnenfellwolf | 137 | 242 | 453 | 851 | 1.598 | 2.999 | 5.629 | 6.800 | 19.836 | 69.895 |
| Gewöhnlicher Grauwolf | 127 | 224 | 420 | 789 | 1.480 | 2.778 | 5.215 | 6.300 | 18.377 | 64.755 |
| Rotmähnenwolf | 133 | 234 | 440 | 826 | 1.551 | 2.911 | 5.464 | 6.600 | 19.253 | 67.839 |
| Nebelwolf | 131 | 231 | 433 | 814 | 1.527 | 2.867 | 5.381 | 6.500 | 18.961 | 66.811 |
| Silberschwingenkranich | 165 | 291 | 547 | 1.026 | 1.927 | 3.616 | 6.788 | 8.200 | 23.920 | 84.285 |
| Rotkammreißer | 181 | 320 | 600 | 1.126 | 2.114 | 3.969 | 7.451 | 9.000 | 26.253 | 92.508 |
| Blaufederkolben | 159 | 281 | 527 | 989 | 1.856 | 3.484 | 6.540 | 7.900 | 23.045 | 81.201 |
| Waldheinläufer | 149 | 263 | 493 | 926 | 1.739 | 3.264 | 6.126 | 7.400 | 21.586 | 76.062 |
| Düsterkrähenläufer | 171 | 302 | 567 | 1.064 | 1.997 | 3.749 | 7.037 | 8.500 | 24.795 | 87.368 |
| Himmelsfalk | 153 | 270 | 507 | 951 | 1.786 | 3.352 | 6.292 | 7.600 | 22.170 | 78.118 |
| Rotscheitelgleiter | 161 | 284 | 533 | 1.001 | 1.880 | 3.528 | 6.623 | 8.000 | 23.336 | 82.229 |
| Waldkronenschreiher | 141 | 249 | 467 | 876 | 1.645 | 3.087 | 5.795 | 7.000 | 20.419 | 71.950 |
| Schattenspitz | 157 | 277 | 520 | 976 | 1.833 | 3.440 | 6.457 | 7.800 | 22.753 | 80.173 |
| Felsenflügel | 181 | 320 | 600 | 1.126 | 2.114 | 3.969 | 7.451 | 9.000 | 26.253 | 92.508 |
| Mondvariante | 169 | 298 | 560 | 1.051 | 1.974 | 3.705 | 6.954 | 8.400 | 24.503 | 86.341 |
| Steingolem | 239 | 420 | 789 | 1.482 | 2.781 | 5.221 | 9.800 | 11.838 | 34.532 | 121.678 |
| Gigantischer Steingolem | 262 | 463 | 868 | 1.630 | 3.059 | 5.743 | 10.780 | 13.022 | 37.985 | 133.845 |
| Eisgolem | 239 | 420 | 789 | 1.482 | 2.781 | 5.221 | 9.800 | 11.838 | 34.532 | 121.678 |
| Gigantischer Eisgolem | 262 | 463 | 868 | 1.630 | 3.059 | 5.743 | 10.780 | 13.022 | 37.985 | 133.845 |
| Vulkangolem | 298 | 526 | 987 | 1.852 | 3.477 | 6.526 | 12.250 | 14.797 | 43.165 | 152.097 |
| Rudelführer – Grimmiger Waldwolf | 149 | 262 | 491 | 922 | 1.732 | 3.250 | 6.101 | 7.370 | 21.499 | 75.754 |
| Rudelführer – Frostklauenwolf | 155 | 274 | 513 | 964 | 1.809 | 3.396 | 6.374 | 7.700 | 22.461 | 79.145 |
| Rudelführer – Schattenwolf | 142 | 250 | 469 | 881 | 1.654 | 3.105 | 5.828 | 7.040 | 20.536 | 72.362 |
| Rudelführer – Sonnenfellwolf | 151 | 266 | 499 | 936 | 1.757 | 3.299 | 6.192 | 7.480 | 21.820 | 76.884 |
| Rudelführer – Gewöhnlicher Grauwolf | 140 | 246 | 462 | 867 | 1.628 | 3.056 | 5.737 | 6.930 | 20.215 | 71.231 |
| Rudelführer – Rotmähnenwolf | 146 | 258 | 484 | 909 | 1.706 | 3.202 | 6.010 | 7.260 | 21.178 | 74.623 |
| Rudelführer – Nebelwolf | 144 | 254 | 477 | 895 | 1.680 | 3.153 | 5.919 | 7.150 | 20.857 | 73.492 |
| Waldwolf – Jungtier | 68 | 119 | 223 | 419 | 787 | 1.477 | 2.773 | 3.350 | 9.772 | 34.433 |
| Waldwolf – Welpe | 54 | 95 | 179 | 335 | 630 | 1.182 | 2.219 | 2.680 | 7.818 | 27.547 |
| Grauwolf – Jungtier | 63 | 112 | 210 | 394 | 740 | 1.389 | 2.608 | 3.150 | 9.189 | 32.378 |
| Grauwolf – Welpe | 51 | 90 | 168 | 315 | 592 | 1.111 | 2.086 | 2.520 | 7.351 | 25.902 |
| Frostklauenwolf – Jungtier | 71 | 124 | 233 | 438 | 822 | 1.544 | 2.897 | 3.500 | 10.210 | 35.975 |
| Frostklauenwolf – Welpe | 56 | 99 | 187 | 350 | 658 | 1.235 | 2.318 | 2.800 | 8.168 | 28.780 |

## Noch offen

Nicht zähmbar oder reitbar und nicht automatisch spawnbar. Es sind World-Monster-Vorlagen, keine fertigen Pet-Werte. Wolfsgruppe 2 enthält Nachwuchs und Rudelführer; konkrete Unreal-Körpermodelle bleiben offen; Vogelgruppe 1/2 sind logische Modellgruppen, noch keine Unreal-Assets. Felsenflügel und Mondvariante bleiben Arbeitsnamen. Keine Spezialskills, Drops oder endgültige XP-Kurve erfunden; die geerbte 1 Kill-XP ist nur Platzhalter.

Die bisherigen Dateien `creature-family-draft.json`, `pet-wolves.md` und `pet-birds.md` zeigen den älteren Attributentwurf. Maßgeblich für diese neuen World-Varianten sind `world-variant-design.json`, `world-variant-templates.json` und `world-variant-preview.json`. Die 600-Sekunden-Spielerberichte bleiben unverändert.

Prüfen/neu erzeugen: `node scripts/seedWorldCreatureVariants.js --check`. Entwicklungsdatenbank speichern und alle Felder zurücklesen: `node scripts/seedWorldCreatureVariants.js --apply`.

# Level 100: R6-Ausrüstung, 600 Sekunden, +0

- Level 100, unveränderte R6-Waffen und fünf R6-Rüstungsteile, Verstärkung +0. Keine noch unbestätigte Plus-Prozentregel eingerechnet.
- Bestehender Levelzuwachs bis 100 fortgeführt: je Level +1 Vita, Stärke, Intelligenz, Willenskraft, mit tatsächlichen Klassenumrechnungen und permanenten attributabhängigen Passiven. Keine neuen Skills oder höheren Skillcaps allein durch das höhere Charakterlevel erfunden.
- Drei maximale, unterschiedliche und erlaubte Zufallsboni pro Gegenstand. Waffen: passender direkter Angriff, passender Skillschaden, Hauptattribut. Rüstung: drei Attribute. Maximalwerte sind perfekte Rolls, keine Garantie eines global optimalen Builds. Auswahl zwischen dokumentierten Attribut-/Steinprofilen anhand eines Basislaufs; derselbe Build in allen drei Szenarien.
- R6-Steine +16, zwölf dokumentierte Sockel einschließlich definierter Schmiedezusätze. Kein stiller Wechsel auf R7-Steine +18 wegen Charakterlevel 120. Je-Gegenstand-Duplikatgrenzen geprüft. Zusätzliche Handschuh-/Helmsockel mit offenem Freischaltlevel ausgeschlossen.
- Feste bestehende Angriffspriorität in allen drei Szenarien, keine neue Rotationsoptimierung. Basislauf ohne optionale Buffs; notwendige Klassen-Komboaktivierungen und Beschwörungen bleiben wie im bisherigen Vergleich enthalten.
- Selbstbuffs starten inaktiv und werden im Kampf regulär gewirkt, bezahlt und erneuert. Alle zugeordneten öffentlichen Gruppenbuffs mit höchster existierender Anbieter-Skillstufe sind im dritten Lauf ab Beginn dauerhaft aktiv, einschließlich für Spieler wirkungsloser Begleiterbuffs. Kein Zeit-/Manaaufwand der externen Anbieter simuliert.
- 600 Sekunden am Dummy ohne Gegnerabwehr oder eingehenden Schaden, Ziel-HP 10^12. Vorhandene Eigenkosten und Regenerationsregeln des bisherigen Tests beibehalten. Kein Nachweis von Überlebensfähigkeit oder Monsterbalance.
- Reguläre Pets, Schmuck ohne definierte Werte, zufällige Crits/Procs und Ausweichen sind wie im bisherigen deterministischen Vergleich nicht simuliert. Temporäre Klassenbeschwörungen sind enthalten und separat ausgewiesen. Bekannte Spezialattribute bleiben gesperrt, wenn der vorhandene Freischaltskill nicht definiert ist.
- Wertetabellen mit Buffs zeigen theoretische gleichzeitige Statboni, nicht gemessene permanente Verfügbarkeit. Austauschbuffs und situative Effekte können abweichen; DPS verwendet die tatsächlichen Laufzeiten und Ressourcen.

## Drei Szenarien: Gesamtschaden einschließlich Beschwörungen

| Klasse | Passive, Steine, Max-Rolls | Zusätzlich Selbstbuffs | Zusätzlich alle Fremdbuffs | DPS Basis / Selbst / Alle |
| --- | ---: | ---: | ---: | --- |
| Ritualist | 1.149.966,24 | 1.174.301,91 | 1.343.554,31 | 1.916,61 / 1.957,17 / 2.239,26 |
| Luminet | 984.324,19 | 1.003.319,87 | 1.218.977,21 | 1.640,54 / 1.672,2 / 2.031,63 |
| Seelenjäger | 1.000.466,96 | 1.053.652,28 | 1.205.737,68 | 1.667,44 / 1.756,09 / 2.009,56 |
| Kräuterkundler | 973.518,04 | 997.459,43 | 1.190.380,6 | 1.622,53 / 1.662,43 / 1.983,97 |
| Schamane | 837.886,34 | 879.222,04 | 1.183.517,39 | 1.396,48 / 1.465,37 / 1.972,53 |
| Jäger | 940.014 | 987.452,88 | 1.146.385,48 | 1.566,69 / 1.645,75 / 1.910,64 |
| Gladiator | 937.456,78 | 957.616,33 | 1.143.076,24 | 1.562,43 / 1.596,03 / 1.905,13 |
| Butcher | 878.495,56 | 912.090,85 | 1.139.366,8 | 1.464,16 / 1.520,15 / 1.898,94 |
| Schurke | 916.830,74 | 953.357,24 | 1.120.240,24 | 1.528,05 / 1.588,93 / 1.867,07 |
| Druide | 903.736,61 | 922.051,14 | 1.078.661,49 | 1.506,23 / 1.536,75 / 1.797,77 |
| Heiler | 799.852,73 | 817.687,55 | 1.038.537,09 | 1.333,09 / 1.362,81 / 1.730,9 |
| Abenteurer | 777.357,6 | 819.898 | 956.818 | 1.295,6 / 1.366,5 / 1.594,7 |
| Ritter | 712.473,74 | 741.432,38 | 875.575,16 | 1.187,46 / 1.235,72 / 1.459,29 |

Sortiert absteigend nach Gesamtschaden mit Selbstbuffs und allen Fremdbuffs. Die drei Schadensspalten zeigen jeweils die Summe über 600 Sekunden.

## Kampfwerte: passives

Permanente Ausgangswerte.

| Klasse | Leben | Mana | P-ATK | M-ATK | P-DEF | M-DEF | Tempo-Rohpunkte |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 5.692 | 4.781 | 862,2 | 204,2 | 530,8 | 427 | 83,96 |
| Butcher | 5.591 | 4.921 | 1.116,58 | 27 | 444,8 | 402 | 76,54 |
| Druide | 5.103 | 5.816 | 594,4 | 894,9 | 474,8 | 465 | 77 |
| Gladiator | 6.323 | 4.937 | 1.035,86 | 26 | 570,44 | 395 | 76,54 |
| Heiler | 4.923 | 5.642 | 22 | 1.028,6 | 368,8 | 673,4 | 76,24 |
| Kräuterkundler | 5.876 | 7.963 | 26 | 1.048,13 | 493 | 583,6 | 70 |
| Jäger | 5.404 | 4.611 | 946,2 | 23 | 446,8 | 466 | 77,5 |
| Ritter | 7.128 | 4.933 | 825,82 | 24 | 767,34 | 572,6 | 76,24 |
| Luminet | 5.241 | 5.417 | 24 | 1.045,2 | 428,8 | 623 | 76,24 |
| Ritualist | 5.959 | 7.157 | 24 | 974,8 | 454,6 | 545,6 | 70,3 |
| Schamane | 5.682 | 7.443 | 888,38 | 463,2 | 505,6 | 567,6 | 70 |
| Seelenjäger | 5.575 | 7.321 | 853,2 | 23 | 444 | 540,28 | 92,46 |
| Schurke | 5.566 | 7.416 | 811,7 | 26 | 421 | 533,6 | 82,58 |

| Klasse | Auto-Schaden | Skillschaden | Beschwörungen | Mana-Verbrauch | Mana-Regeneration | Mana-Wartezeit |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 519.906,6 | 257.451 | 0 | 29.415,36 | 29.316,12 | 0 |
| Butcher | 550.473,94 | 328.021,62 | 0 | 40.522 | 35.800 | 290,59 |
| Druide | 221.711,2 | 555.821,01 | 126.204,4 | 43.279,9 | 37.800 | 0,91 |
| Gladiator | 581.693,4 | 355.763,38 | 0 | 39.905 | 35.800 | 51,39 |
| Heiler | 237.051,7 | 562.801,03 | 0 | 26.870 | 26.870 | 0 |
| Kräuterkundler | 315.487,13 | 658.030,91 | 0 | 60.321 | 53.800 | 104,08 |
| Jäger | 369.018 | 445.128,96 | 125.867,04 | 35.024 | 33.908 | 0 |
| Ritter | 426.123,12 | 286.350,62 | 0 | 38.322 | 37.209 | 0 |
| Luminet | 303.431,7 | 680.892,49 | 0 | 53.505 | 48.500 | 40,06 |
| Ritualist | 282.153,2 | 726.851,78 | 140.961,26 | 57.225 | 54.550 | 0 |
| Schamane | 370.454,46 | 467.431,88 | 0 | 59.215,59 | 54.322,2 | 295,41 |
| Seelenjäger | 410.389,2 | 590.077,76 | 0 | 45.868 | 45.868 | 0 |
| Schurke | 435.882,9 | 480.947,84 | 0 | 40.016,14 | 39.665,72 | 0 |

## Kampfwerte: self

Theoretische gleichzeitige Buffwirkung; keine Zusage permanenter Buff-Uptime.

| Klasse | Leben | Mana | P-ATK | M-ATK | P-DEF | M-DEF | Tempo-Rohpunkte |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 5.692 | 4.781 | 911,2 | 204,2 | 530,8 | 427 | 84,96 |
| Butcher | 5.834 | 4.921 | 1.275,98 | 27 | 444,92 | 402 | 101,54 |
| Druide | 5.253 | 5.966 | 603,4 | 932,7 | 480,8 | 471 | 77 |
| Gladiator | 7.388 | 5.137 | 1.073,66 | 26 | 583,04 | 395 | 76,54 |
| Heiler | 4.923 | 5.942 | 22 | 1.028,6 | 368,8 | 673,4 | 76,24 |
| Kräuterkundler | 5.876 | 8.323 | 26 | 1.070,81 | 535 | 640,72 | 70 |
| Jäger | 5.404 | 4.611 | 983,2 | 23 | 446,8 | 466 | 77,62 |
| Ritter | 7.458 | 4.933 | 880,62 | 24 | 2.112,94 | 1.940,6 | 76,24 |
| Luminet | 5.241 | 5.117 | 24 | 1.120,8 | 428,8 | 611 | 76,24 |
| Ritualist | 6.409 | 7.427 | 24 | 985,6 | 472,6 | 556,4 | 70,3 |
| Schamane | 5.682 | 7.443 | 957,83 | 463,2 | 505,6 | 567,6 | 70 |
| Seelenjäger | 5.575 | 7.321 | 907,6 | 23 | 444 | 540,28 | 94,36 |
| Schurke | 5.566 | 7.416 | 811,7 | 26 | 421 | 533,6 | 97,88 |

| Klasse | Auto-Schaden | Skillschaden | Beschwörungen | Mana-Verbrauch | Mana-Regeneration | Mana-Wartezeit |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 555.832 | 264.066 | 0 | 29.813,06 | 29.539,32 | 0 |
| Butcher | 582.475,06 | 329.615,79 | 0 | 40.059 | 35.800 | 294,2 |
| Druide | 224.464,8 | 569.208,54 | 128.377,8 | 43.824,4 | 38.700 | 0,2 |
| Gladiator | 614.979,11 | 342.637,22 | 0 | 40.495,02 | 35.800 | 139,36 |
| Heiler | 225.579,6 | 592.107,95 | 0 | 34.921 | 35.192 | 0 |
| Kräuterkundler | 316.959,76 | 680.499,67 | 0 | 62.930 | 55.960 | 61,91 |
| Jäger | 386.397,6 | 472.909,36 | 128.145,92 | 36.527 | 34.000 | 0 |
| Ritter | 447.354,96 | 294.077,42 | 0 | 39.992 | 37.800 | 0 |
| Luminet | 328.289,7 | 675.030,17 | 0 | 51.719 | 46.700 | 141,33 |
| Ritualist | 285.112,4 | 747.827,95 | 141.361,56 | 57.635 | 56.170 | 0 |
| Schamane | 400.372,94 | 478.849,1 | 0 | 59.447,76 | 54.322,2 | 293,31 |
| Seelenjäger | 442.001,2 | 611.651,08 | 0 | 47.316 | 47.316 | 0 |
| Schurke | 472.409,4 | 480.947,84 | 0 | 42.220,95 | 40.562,33 | 0 |

## Kampfwerte: all

Theoretische gleichzeitige Buffwirkung; keine Zusage permanenter Buff-Uptime.

| Klasse | Leben | Mana | P-ATK | M-ATK | P-DEF | M-DEF | Tempo-Rohpunkte |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 6.742 | 5.681 | 965,2 | 258,2 | 752,8 | 643 | 95,56 |
| Butcher | 6.779 | 5.821 | 1.342,31 | 27 | 662,72 | 618 | 112,14 |
| Druide | 6.303 | 6.866 | 657,4 | 989,4 | 702,8 | 687 | 87,6 |
| Gladiator | 8.490,5 | 6.037 | 1.130,36 | 26 | 807,14 | 611 | 87,14 |
| Heiler | 5.973 | 6.842 | 22 | 1.082,6 | 590,8 | 889,4 | 86,84 |
| Kräuterkundler | 6.926 | 9.223 | 26 | 1.127,51 | 757 | 858,52 | 80,6 |
| Jäger | 6.454 | 5.511 | 1.001,2 | 23 | 668,8 | 685,6 | 88,22 |
| Ritter | 8.613 | 5.833 | 940,92 | 24 | 2.337,04 | 2.158,4 | 86,84 |
| Luminet | 6.291 | 6.017 | 24 | 1.174,8 | 650,8 | 827 | 86,84 |
| Ritualist | 7.459 | 8.327 | 24 | 1.039,6 | 694,6 | 772,4 | 80,9 |
| Schamane | 6.732 | 8.343 | 1.014,53 | 517,2 | 727,6 | 783,6 | 80,6 |
| Seelenjäger | 6.625 | 8.266 | 925,6 | 23 | 666 | 758,08 | 104,96 |
| Schurke | 6.616 | 8.401 | 865,7 | 26 | 643 | 749,6 | 108,48 |

| Klasse | Auto-Schaden | Skillschaden | Beschwörungen | Mana-Verbrauch | Mana-Regeneration | Mana-Wartezeit |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 661.162 | 295.656 | 0 | 29.813,06 | 29.813,06 | 0 |
| Butcher | 696.377,77 | 442.989,02 | 0 | 61.870 | 57.200 | 60,97 |
| Druide | 272.821 | 673.914,89 | 131.925,6 | 48.280,9 | 45.837,9 | 0,2 |
| Gladiator | 732.218 | 410.858,24 | 0 | 46.575,39 | 46.185,39 | 0 |
| Heiler | 401.870,1 | 636.666,99 | 0 | 34.115 | 34.386 | 0 |
| Kräuterkundler | 400.266,05 | 790.114,55 | 0 | 65.563 | 65.826,8 | 0 |
| Jäger | 449.538,8 | 534.831,96 | 162.014,72 | 36.581 | 36.263 | 0 |
| Ritter | 547.615,44 | 327.959,72 | 0 | 39.992 | 39.435 | 0 |
| Luminet | 414.405,9 | 804.571,31 | 0 | 55.354 | 55.095 | 0 |
| Ritualist | 346.991,2 | 852.009,85 | 144.553,26 | 57.914 | 58.334 | 0 |
| Schamane | 495.090,64 | 688.426,75 | 0 | 82.662,77 | 76.364,2 | 61,12 |
| Seelenjäger | 505.377,6 | 700.360,08 | 0 | 47.538 | 47.538 | 0 |
| Schurke | 560.107,9 | 560.132,34 | 0 | 42.220,95 | 41.200,44 | 0 |

## Konkrete Ausrüstung

### Abenteurer

Hauptattribut Stärke, zweites Attribut Agilität; 12 belegte Sockel.

| Teil | Drei maximale Zufallsboni | Seelensteine |
| --- | --- | --- |
| 2H Schwert | physicalAttack +30, physicalSkillDamageBonus +120, strength +8 | Stärke +16, Stärke +16, Agilität +16, Agilität +16 |
| chest | strength +8, agility +8, vitality +8 | Stärke +16, Agilität +16, Willenskraft +16 |
| pants | strength +8, agility +8, vitality +8 | Stärke +16, Agilität +16 |
| gloves | strength +8, agility +8, vitality +8 | Stärke +16 |
| helmet | strength +8, agility +8, vitality +8 | Stärke +16 |
| boots | strength +8, agility +8, vitality +8 | Stärke +16 |
### Butcher

Hauptattribut Stärke, zweites Attribut Agilität; 12 belegte Sockel.

| Teil | Drei maximale Zufallsboni | Seelensteine |
| --- | --- | --- |
| 2H Axt | physicalAttack +30, physicalSkillDamageBonus +120, strength +8 | Stärke +16, Stärke +16, Agilität +16, Agilität +16 |
| chest | strength +8, agility +8, vitality +8 | Stärke +16, Agilität +16, Willenskraft +16 |
| pants | strength +8, agility +8, vitality +8 | Stärke +16, Agilität +16 |
| gloves | strength +8, agility +8, vitality +8 | Stärke +16 |
| helmet | strength +8, agility +8, vitality +8 | Stärke +16 |
| boots | strength +8, agility +8, vitality +8 | Stärke +16 |
### Druide

Hauptattribut Intelligenz, zweites Attribut Stärke; 12 belegte Sockel.

| Teil | Drei maximale Zufallsboni | Seelensteine |
| --- | --- | --- |
| 2H Mace | magicalAttack +30, magicalSkillDamageBonus +120, intelligence +8 | Intelligenz +16, Intelligenz +16, Stärke +16, Stärke +16 |
| chest | intelligence +8, strength +8, vitality +8 | Intelligenz +16, Stärke +16, Willenskraft +16 |
| pants | intelligence +8, strength +8, vitality +8 | Intelligenz +16, Stärke +16 |
| gloves | intelligence +8, strength +8, vitality +8 | Intelligenz +16 |
| helmet | intelligence +8, strength +8, vitality +8 | Intelligenz +16 |
| boots | intelligence +8, strength +8, vitality +8 | Intelligenz +16 |
### Gladiator

Hauptattribut Stärke, zweites Attribut Agilität; 12 belegte Sockel.

| Teil | Drei maximale Zufallsboni | Seelensteine |
| --- | --- | --- |
| 1H Axt | physicalAttack +15, physicalSkillDamageBonus +60, strength +4 | Stärke +16, Agilität +16 |
| 1H Axt | physicalAttack +15, physicalSkillDamageBonus +60, strength +4 | Stärke +16, Agilität +16 |
| chest | strength +8, agility +8, vitality +8 | Stärke +16, Agilität +16, Willenskraft +16 |
| pants | strength +8, agility +8, vitality +8 | Stärke +16, Agilität +16 |
| gloves | strength +8, agility +8, vitality +8 | Stärke +16 |
| helmet | strength +8, agility +8, vitality +8 | Stärke +16 |
| boots | strength +8, agility +8, vitality +8 | Stärke +16 |
### Heiler

Hauptattribut Intelligenz, zweites Attribut Agilität; 12 belegte Sockel.

| Teil | Drei maximale Zufallsboni | Seelensteine |
| --- | --- | --- |
| Wand | magicalAttack +30, magicalSkillDamageBonus +120, intelligence +8 | Intelligenz +16, Intelligenz +16, Agilität +16, Agilität +16 |
| chest | intelligence +8, agility +8, vitality +8 | Intelligenz +16, Agilität +16, Willenskraft +16 |
| pants | intelligence +8, agility +8, vitality +8 | Intelligenz +16, Agilität +16 |
| gloves | intelligence +8, agility +8, vitality +8 | Intelligenz +16 |
| helmet | intelligence +8, agility +8, vitality +8 | Intelligenz +16 |
| boots | intelligence +8, agility +8, vitality +8 | Intelligenz +16 |
### Kräuterkundler

Hauptattribut Intelligenz, zweites Attribut Willenskraft; 12 belegte Sockel.

| Teil | Drei maximale Zufallsboni | Seelensteine |
| --- | --- | --- |
| Wand | magicalAttack +30, magicalSkillDamageBonus +120, intelligence +8 | Intelligenz +16, Intelligenz +16, Willenskraft +16, Willenskraft +16 |
| chest | intelligence +8, wisdom +8, vitality +8 | Intelligenz +16, Willenskraft +16, Vitalität +16 |
| pants | intelligence +8, wisdom +8, vitality +8 | Intelligenz +16, Willenskraft +16 |
| gloves | intelligence +8, wisdom +8, vitality +8 | Intelligenz +16 |
| helmet | intelligence +8, wisdom +8, vitality +8 | Intelligenz +16 |
| boots | intelligence +8, wisdom +8, vitality +8 | Intelligenz +16 |
### Jäger

Hauptattribut Geschick, zweites Attribut Agilität; 12 belegte Sockel.

| Teil | Drei maximale Zufallsboni | Seelensteine |
| --- | --- | --- |
| Bow | physicalAttack +30, physicalSkillDamageBonus +120, dexterity +8 | Geschick +16, Geschick +16, Agilität +16, Agilität +16 |
| chest | dexterity +8, agility +8, vitality +8 | Geschick +16, Agilität +16, Willenskraft +16 |
| pants | dexterity +8, agility +8, vitality +8 | Geschick +16, Agilität +16 |
| gloves | dexterity +8, agility +8, vitality +8 | Geschick +16 |
| helmet | dexterity +8, agility +8, vitality +8 | Geschick +16 |
| boots | dexterity +8, agility +8, vitality +8 | Geschick +16 |
### Ritter

Hauptattribut Stärke, zweites Attribut Agilität; 12 belegte Sockel.

| Teil | Drei maximale Zufallsboni | Seelensteine |
| --- | --- | --- |
| Sword | physicalAttack +15, physicalSkillDamageBonus +60, strength +4 | Stärke +16, Agilität +16 |
| Shield | physicalAttack +15, physicalSkillDamageBonus +60, strength +4 | Stärke +16, Agilität +16 |
| chest | strength +8, agility +8, vitality +8 | Stärke +16, Agilität +16, Willenskraft +16 |
| pants | strength +8, agility +8, vitality +8 | Stärke +16, Agilität +16 |
| gloves | strength +8, agility +8, vitality +8 | Stärke +16 |
| helmet | strength +8, agility +8, vitality +8 | Stärke +16 |
| boots | strength +8, agility +8, vitality +8 | Stärke +16 |
### Luminet

Hauptattribut Intelligenz, zweites Attribut Agilität; 12 belegte Sockel.

| Teil | Drei maximale Zufallsboni | Seelensteine |
| --- | --- | --- |
| Lichtstab | magicalAttack +30, magicalSkillDamageBonus +120, intelligence +8 | Intelligenz +16, Intelligenz +16, Agilität +16, Agilität +16 |
| chest | intelligence +8, agility +8, vitality +8 | Intelligenz +16, Agilität +16, Willenskraft +16 |
| pants | intelligence +8, agility +8, vitality +8 | Intelligenz +16, Agilität +16 |
| gloves | intelligence +8, agility +8, vitality +8 | Intelligenz +16 |
| helmet | intelligence +8, agility +8, vitality +8 | Intelligenz +16 |
| boots | intelligence +8, agility +8, vitality +8 | Intelligenz +16 |
### Ritualist

Hauptattribut Intelligenz, zweites Attribut Willenskraft; 12 belegte Sockel.

| Teil | Drei maximale Zufallsboni | Seelensteine |
| --- | --- | --- |
| Victim-Stab | magicalAttack +30, magicalSkillDamageBonus +120, intelligence +8 | Intelligenz +16, Intelligenz +16, Willenskraft +16, Willenskraft +16 |
| chest | intelligence +8, wisdom +8, vitality +8 | Intelligenz +16, Willenskraft +16, Vitalität +16 |
| pants | intelligence +8, wisdom +8, vitality +8 | Intelligenz +16, Willenskraft +16 |
| gloves | intelligence +8, wisdom +8, vitality +8 | Intelligenz +16 |
| helmet | intelligence +8, wisdom +8, vitality +8 | Intelligenz +16 |
| boots | intelligence +8, wisdom +8, vitality +8 | Intelligenz +16 |
### Schamane

Hauptattribut Stärke, zweites Attribut Willenskraft; 12 belegte Sockel.

| Teil | Drei maximale Zufallsboni | Seelensteine |
| --- | --- | --- |
| Mace | physicalAttack +15, physicalSkillDamageBonus +60, strength +4 | Stärke +16, Willenskraft +16 |
| Mace | physicalAttack +15, physicalSkillDamageBonus +60, strength +4 | Stärke +16, Willenskraft +16 |
| chest | strength +8, wisdom +8, vitality +8 | Stärke +16, Willenskraft +16, Vitalität +16 |
| pants | strength +8, wisdom +8, vitality +8 | Stärke +16, Willenskraft +16 |
| gloves | strength +8, wisdom +8, vitality +8 | Stärke +16 |
| helmet | strength +8, wisdom +8, vitality +8 | Stärke +16 |
| boots | strength +8, wisdom +8, vitality +8 | Stärke +16 |
### Seelenjäger

Hauptattribut Geschick, zweites Attribut Willenskraft; 12 belegte Sockel.

| Teil | Drei maximale Zufallsboni | Seelensteine |
| --- | --- | --- |
| Crossbow | physicalAttack +30, physicalSkillDamageBonus +120, dexterity +8 | Geschick +16, Geschick +16, Willenskraft +16, Willenskraft +16 |
| chest | dexterity +8, wisdom +8, vitality +8 | Geschick +16, Willenskraft +16, Vitalität +16 |
| pants | dexterity +8, wisdom +8, vitality +8 | Geschick +16, Willenskraft +16 |
| gloves | dexterity +8, wisdom +8, vitality +8 | Geschick +16 |
| helmet | dexterity +8, wisdom +8, vitality +8 | Geschick +16 |
| boots | dexterity +8, wisdom +8, vitality +8 | Geschick +16 |
### Schurke

Hauptattribut Stärke, zweites Attribut Willenskraft; 12 belegte Sockel.

| Teil | Drei maximale Zufallsboni | Seelensteine |
| --- | --- | --- |
| Dagger | physicalAttack +15, physicalSkillDamageBonus +60, strength +4 | Stärke +16, Willenskraft +16 |
| Dagger | physicalAttack +15, physicalSkillDamageBonus +60, strength +4 | Stärke +16, Willenskraft +16 |
| chest | strength +8, wisdom +8, vitality +8 | Stärke +16, Willenskraft +16, Vitalität +16 |
| pants | strength +8, wisdom +8, vitality +8 | Stärke +16, Willenskraft +16 |
| gloves | strength +8, wisdom +8, vitality +8 | Stärke +16 |
| helmet | strength +8, wisdom +8, vitality +8 | Stärke +16 |
| boots | strength +8, wisdom +8, vitality +8 | Stärke +16 |

## Fremdbuff-Anbieter

| Buff | Anbieter | Skillstufe |
| --- | --- | ---: |
| Verstärkung des Körpers | adventurer | 10 |
| Stählerne Rüstung | knight | 1 |
| Erweckung der Leidenschaft | adventurer | 5 |
| Macht des Begleiters | adventurer | 10 |
| Alles im Fluss | herbalist | 10 |
| Flinke Füße | summoner | 3 |
| Macht des Felsens | shaman | 10 |
| Macht des Wassers | druid | 10 |
| Aurora-Segen | healer | 10 |
| Geschwindigkeit der Dox | shaman | 3 |
| Macht des Feuers | shaman | 10 |
| Macht des Geistes | druid | 10 |

## Prüfungen und Grenzen

Alle 39 Endläufe erreichen 600 Sekunden; Schadensteilsummen, Minutensummen, Mana-Ledger, drei unterschiedliche legale Affixe pro Teil und Sockel-/Duplikatgrenzen wurden geprüft. Der Lauf verändert weder die bestehenden Level-60-Berichte noch Spiel-/Datenbankwerte. Reguläre Pets und eine vollständige Kampf-/Aggro-/Heilungsbewertung bleiben offen.

Drei volle Kontrollläufe (Ritter, Druide, Ritualist) ohne Statcache stimmen mit den gecachten Läufen überein. Zehn gezielte bestehende Tests für Level-/Attributfortschreibung und Affixregeln bestanden bei der Erstellung. Drei weitere bestehende Tests in groupBuffBonuses.test.js und selfBuffComparison.test.js schlagen wegen abweichender historischer Katalog-/Erwartungswerte fehl (Astralkörper-Definition, Ritter-Attributbonus und alter Schurken-Mana-Snapshot). Diese Erwartungen und die Spielregeln wurden für den Bericht nicht geändert.

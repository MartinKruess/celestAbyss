# DPS-Kalibrierung über die Rangstufen

- Analysis only. No monster values, database records or active growth curves changed.
- Stages: 1/R1,20/R2,30/R2 tutorial,40/R3,60/R4,80/R5,100/R6;120 reuses R6 equipment and R6 stones because no R7 equipment exists here.
- Level 1: one starting weapon, no armor, skills, passives, affixes or sockets. Auto-attacks only. Levels 20/30 are explicitly full-skill upper-bound probes, not a claim those skills can be acquired then. No skill acquisition schedule is invented or audited.
- Level 40 onward assumes current maximum class skill caps and permanent passives. Levels 40+ own buffs, levels60+ all public player buffs at highest provider caps. For the upper bounds20/30 own buffs also included. External buffs start prepared and persist throughout this isolated test. Own buffs retain costs, durations and upkeep; missing duration242 provisionally120s,42=30s.
- 600 seconds, no target attacks, no passive combat HP regeneration, normal mana regeneration every3 seconds. Class healing and damage-linked healing remain active; no outside healer. Normal target permits stun-dependent combinations. Boss immunity requires a separate boss profile.
- Character progression adjusts +1 Vitality/Wisdom/Strength/Intelligence per level; current rank weapons/armor replace R6 comparison gear, including offhand direct-attack efficiency. Derived Knight/Rogue passive conversions retained; future locked Ambush attack contribution removed.
- Explicit legal maximum-roll reference: armor primary offensive attribute, then Wisdom, then Vitality as rank slots allow. Weapon direct attack and skill damage as slots allow, then matching offensive attribute. For one-affix ranks compare attack vs skill damage; hybrid STR/INT reference alternatives compared. This is a small declared candidate set, not an exhaustive maximum-DPS optimizer. No forced critical affix.
- Sockets: fill legal available per-item capacity using matching offensive attribute first; hybrids use the other offensive attribute next, physical classes Vitality then Wisdom, mages Wisdom then Vitality. Per-item duplicate caps and one-slot exception enforced. Includes only smithing extras with defined equipment levels. Level30 exactly one weapon and one armor tutorial socket, +2 per stone.
- No invented upgrade bonuses, jewelry, advancement, regular pets or future skill enhancements. Max-affix ranges for attack speed and new special stone values remain undefined and are not fabricated.
- Reference=(arithmetic mean DPS+median DPS)/2 over eleven damage classes; Healer/Knight retained as controls. Physical, magical and hybrid cohorts also reported. No character receives aggregate P+M attack; full rotations are simulated.
- Monster PDEF=MDEF=playerLevel*(25/6) gives30% reduction per damage event. True raw baseline uses explicit armor bypass, since zero armor normally still reduces10%. Live runs may change rotation/resource healing and therefore differ from0.7 times raw total.
- Five-second HP=armored blended DPS*5 is a sustained-DPS planning value. A fresh fight from full resources/all cooldowns is separately simulated to expose burst differences; it need not last5seconds. No conclusion that every class is within a narrow band is assumed.

| Level/Rang | Mittel DPS roh | Median roh | Referenz roh | Referenz mit Abwehr | PDEF=MDEF | HP für5s aus Dauer-DPS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1/R1 | 30,59 | 32,56 | 31,57 | 22,1 | 4,17 | 110,51 |
| 20/R2 (Skill-Obergrenze) | 419,39 | 439,94 | 429,67 | 300,77 | 83,33 | 1.503,83 |
| 30/R2 (Skill-Obergrenze) | 457,03 | 486,06 | 471,55 | 330,08 | 125 | 1.650,41 |
| 40/R3 | 572,23 | 616,45 | 594,34 | 416,04 | 166,67 | 2.080,18 |
| 60/R4 | 1.063,44 | 1.200,65 | 1.132,05 | 792,39 | 250 | 3.961,95 |
| 80/R5 | 1.287,69 | 1.429,06 | 1.358,38 | 950,86 | 333,33 | 4.754,32 |
| 100/R6 | 1.631,27 | 1.809,02 | 1.720,14 | 1.204,07 | 416,67 | 6.020,35 |
| 120/R6 | 1.672,97 | 1.852,3 | 1.762,63 | 1.233,84 | 500 | 6.169,22 |

## Level1,R1

Status: starterAutoAttackReference. Jeder einzelne Treffer verliert30%.

| Klasse | Gruppe | DPS roh | DPS Abwehr | Verlust gesamt | Erstes Manaproblem | Frischer Kampf gegen Referenz-HP |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | physical | 26,52 | 18,56 | 30% | keines | 5,43s |
| Butcher | physical | 41,6 | 29,12 | 30% | keines | 2,89s |
| Druide | hybrid | 21 | 14,7 | 30% | keines | 7,24s |
| Gladiator | physical | 29,25 | 20,48 | 30% | keines | 5,13s |
| Heiler | control | 32,56 | 22,79 | 30% | keines | 4,55s |
| Kräuterkundler | magical | 32,56 | 22,79 | 30% | keines | 4,55s |
| Jäger | physical | 38,72 | 27,1 | 30% | keines | 3,41s |
| Ritter | control | 19,89 | 13,92 | 30% | keines | 7,7s |
| Luminet | magical | 34,32 | 24,02 | 30% | keines | 4,55s |
| Ritualist | magical | 34,32 | 24,02 | 30% | keines | 4,55s |
| Schamane | hybrid | 21,06 | 14,74 | 30% | keines | 6,84s |
| Seelenjäger | physical | 33,66 | 23,56 | 30% | keines | 4,28s |
| Schurke | physical | 23,46 | 16,43 | 30% | keines | 6,48s |

| Schadensgruppe | Referenz roh | Referenz mit Abwehr |
| --- | ---: | ---: |
| physical | 31,83 | 22,28 |
| magical | 34,03 | 23,82 |
| hybrid | 21,03 | 14,72 |

## Level20,R2

Status: maxSkillUpperBoundNotLegalProgressionClaim. Jeder einzelne Treffer verliert30%.

| Klasse | Gruppe | DPS roh | DPS Abwehr | Verlust gesamt | Erstes Manaproblem | Frischer Kampf gegen Referenz-HP |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | physical | 408,95 | 286,26 | 30% | 0,8s | 0,1s |
| Butcher | physical | 439,94 | 307,96 | 30% | 0s | 0,2s |
| Druide | hybrid | 592,08 | 414,46 | 30% | 0s | 1,7s |
| Gladiator | physical | 533,03 | 373,12 | 30% | 0,5s | 0,8s |
| Heiler | control | 447,74 | 313,42 | 30% | keines | 2,3s |
| Kräuterkundler | magical | 364,11 | 254,87 | 30% | 1,3s | 1,8s |
| Jäger | physical | 537,31 | 376,12 | 30% | 1,3s | 0,9s |
| Ritter | control | 314,47 | 220,13 | 30% | 1,5s | 0s |
| Luminet | magical | 532,92 | 373,05 | 30% | 3,5s | 0,8s |
| Ritualist | magical | 50,89 | 35,62 | 30% | 0s | 1,6s |
| Schamane | hybrid | 445,36 | 311,75 | 30% | 0s | 0,5s |
| Seelenjäger | physical | 372,94 | 261,06 | 30% | 5,4s | 1,2s |
| Schurke | physical | 335,78 | 235,05 | 30% | 0,4s | 0,1s |

| Schadensgruppe | Referenz roh | Referenz mit Abwehr |
| --- | ---: | ---: |
| physical | 431,22 | 301,85 |
| magical | 340,04 | 238,03 |
| hybrid | 518,72 | 363,1 |

## Level30,R2

Status: maxSkillUpperBoundNotLegalProgressionClaim. Jeder einzelne Treffer verliert30%.

| Klasse | Gruppe | DPS roh | DPS Abwehr | Verlust gesamt | Erstes Manaproblem | Frischer Kampf gegen Referenz-HP |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | physical | 451,42 | 315,99 | 30% | 57,45s | 0,1s |
| Butcher | physical | 486,06 | 340,24 | 30% | 0s | 0,2s |
| Druide | hybrid | 638,7 | 447,09 | 30% | 1,2s | 1,1s |
| Gladiator | physical | 578,61 | 405,03 | 30% | 0,5s | 0,8s |
| Heiler | control | 474,81 | 332,37 | 30% | keines | 2,3s |
| Kräuterkundler | magical | 408,42 | 285,89 | 30% | 1,6s | 1,5s |
| Jäger | physical | 562,05 | 393,44 | 30% | 1,3s | 0,9s |
| Ritter | control | 359,4 | 251,58 | 30% | 37,41s | 0s |
| Luminet | magical | 579,33 | 405,53 | 30% | 3,9s | 0,8s |
| Ritualist | magical | 59,05 | 41,33 | 30% | 0s | 1,6s |
| Schamane | hybrid | 488,55 | 341,98 | 30% | 0s | 0,5s |
| Seelenjäger | physical | 391,35 | 273,95 | 30% | 5,4s | 1,4s |
| Schurke | physical | 383,79 | 268,65 | 30% | 0,4s | 0,1s |

| Schadensgruppe | Referenz roh | Referenz mit Abwehr |
| --- | ---: | ---: |
| physical | 472,14 | 330,5 |
| magical | 378,68 | 265,07 |
| hybrid | 563,62 | 394,54 |

## Level40,R3

Status: provisionalMaximumRollReference. Jeder einzelne Treffer verliert30%.

| Klasse | Gruppe | DPS roh | DPS Abwehr | Verlust gesamt | Erstes Manaproblem | Frischer Kampf gegen Referenz-HP |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | physical | 585,37 | 409,76 | 30% | 103,48s | 0,1s |
| Butcher | physical | 629,57 | 440,7 | 30% | 0,4s | 0,3s |
| Druide | hybrid | 752,64 | 526,85 | 30% | 1,2s | 1,1s |
| Gladiator | physical | 730,53 | 511,37 | 30% | 1,9s | 0,8s |
| Heiler | control | 597,69 | 418,38 | 30% | keines | 2,3s |
| Kräuterkundler | magical | 544,27 | 380,99 | 30% | 2,4s | 1,5s |
| Jäger | physical | 649,98 | 454,98 | 30% | 2,2s | 0,7s |
| Ritter | control | 483,41 | 338,39 | 30% | 37,41s | 0s |
| Luminet | magical | 732,91 | 513,04 | 30% | 5s | 1,7s |
| Ritualist | magical | 56,91 | 39,83 | 30% | 1,4s | 2,3s |
| Schamane | hybrid | 616,45 | 431,51 | 30% | 0s | 0,5s |
| Seelenjäger | physical | 459,73 | 321,81 | 30% | 5,5s | 1,4s |
| Schurke | physical | 536,18 | 375,32 | 30% | 0,6s | 0,1s |

| Schadensgruppe | Referenz roh | Referenz mit Abwehr |
| --- | ---: | ---: |
| physical | 603,01 | 422,11 |
| magical | 494,48 | 346,14 |
| hybrid | 684,54 | 479,18 |

## Level60,R4

Status: provisionalMaximumRollReference. Jeder einzelne Treffer verliert30%.

| Klasse | Gruppe | DPS roh | DPS Abwehr | Verlust gesamt | Erstes Manaproblem | Frischer Kampf gegen Referenz-HP |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | physical | 957,51 | 670,26 | 30% | keines | 0,1s |
| Butcher | physical | 1.113,44 | 779,41 | 30% | 2,2s | 0,3s |
| Druide | hybrid | 1.238,15 | 866,7 | 30% | 5,6s | 1,1s |
| Gladiator | physical | 1.203,14 | 842,2 | 30% | keines | 0,8s |
| Heiler | control | 963,77 | 674,64 | 30% | keines | 2,9s |
| Kräuterkundler | magical | 1.200,65 | 840,46 | 30% | 230,97s | 1,8s |
| Jäger | physical | 991,12 | 693,78 | 30% | keines | 0,7s |
| Ritter | control | 942,75 | 659,93 | 30% | keines | 0,2s |
| Luminet | magical | 1.307,23 | 915,06 | 30% | keines | 1,4s |
| Ritualist | magical | 202,34 | 140,72 | 30,45% | keines | 2,6s |
| Schamane | hybrid | 1.213,14 | 849,2 | 30% | 1,3s | 0,6s |
| Seelenjäger | physical | 1.065,31 | 745,72 | 30% | keines | 1,6s |
| Schurke | physical | 1.205,82 | 844,08 | 30% | keines | 0,1s |

| Schadensgruppe | Referenz roh | Referenz mit Abwehr |
| --- | ---: | ---: |
| physical | 1.089,38 | 762,57 |
| magical | 1.052,03 | 736,27 |
| hybrid | 1.225,64 | 857,95 |

## Level80,R5

Status: provisionalMaximumRollReference. Jeder einzelne Treffer verliert30%.

| Klasse | Gruppe | DPS roh | DPS Abwehr | Verlust gesamt | Erstes Manaproblem | Frischer Kampf gegen Referenz-HP |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | physical | 1.184,32 | 829,03 | 30% | keines | 0,1s |
| Butcher | physical | 1.416,14 | 991,3 | 30% | 184,26s | 0,3s |
| Druide | hybrid | 1.452,12 | 1.016,48 | 30% | 5,6s | 1,1s |
| Gladiator | physical | 1.429,06 | 1.000,35 | 30% | keines | 0,8s |
| Heiler | control | 1.198,37 | 838,86 | 30% | keines | 2,9s |
| Kräuterkundler | magical | 1.553,27 | 1.087,29 | 30% | keines | 1,8s |
| Jäger | physical | 1.158,13 | 810,69 | 30% | keines | 0,7s |
| Ritter | control | 1.118,27 | 782,79 | 30% | keines | 0,7s |
| Luminet | magical | 1.557,21 | 1.090,05 | 30% | keines | 2,3s |
| Ritualist | magical | 251,92 | 176,34 | 30% | keines | 2,6s |
| Schamane | hybrid | 1.470,72 | 1.029,51 | 30% | 2s | 0,6s |
| Seelenjäger | physical | 1.243,32 | 870,33 | 30% | keines | 1,6s |
| Schurke | physical | 1.448,36 | 1.013,85 | 30% | keines | 0,1s |

| Schadensgruppe | Referenz roh | Referenz mit Abwehr |
| --- | ---: | ---: |
| physical | 1.321,48 | 925,03 |
| magical | 1.337,04 | 935,93 |
| hybrid | 1.461,42 | 1.023 |

## Level100,R6

Status: provisionalMaximumRollReference. Jeder einzelne Treffer verliert30%.

| Klasse | Gruppe | DPS roh | DPS Abwehr | Verlust gesamt | Erstes Manaproblem | Frischer Kampf gegen Referenz-HP |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | physical | 1.525,52 | 1.067,87 | 30% | keines | 0,1s |
| Butcher | physical | 1.847,13 | 1.292,99 | 30% | keines | 0,6s |
| Druide | hybrid | 1.749,23 | 1.224,46 | 30% | 5,6s | 1,1s |
| Gladiator | physical | 1.809,02 | 1.266,31 | 30% | keines | 1,4s |
| Heiler | control | 1.548,99 | 1.084,29 | 30% | keines | 2,9s |
| Kräuterkundler | magical | 1.965,09 | 1.375,56 | 30% | keines | 1,8s |
| Jäger | physical | 1.416,64 | 991,65 | 30% | keines | 0,7s |
| Ritter | control | 1.408,09 | 985,66 | 30% | keines | 0,7s |
| Luminet | magical | 1.939 | 1.357,3 | 30% | keines | 2,3s |
| Ritualist | magical | 393,66 | 274,88 | 30,17% | keines | 2,8s |
| Schamane | hybrid | 1.893,71 | 1.325,6 | 30% | 103,68s | 0,6s |
| Seelenjäger | physical | 1.536,11 | 1.075,28 | 30% | keines | 1,8s |
| Schurke | physical | 1.868,85 | 1.308,2 | 30% | keines | 0,1s |

| Schadensgruppe | Referenz roh | Referenz mit Abwehr |
| --- | ---: | ---: |
| physical | 1.669,89 | 1.168,92 |
| magical | 1.685,79 | 1.179,94 |
| hybrid | 1.821,47 | 1.275,03 |

## Level120,R6

Status: R6EquipmentExtensionNotR7. Jeder einzelne Treffer verliert30%.

| Klasse | Gruppe | DPS roh | DPS Abwehr | Verlust gesamt | Erstes Manaproblem | Frischer Kampf gegen Referenz-HP |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | physical | 1.572,14 | 1.100,5 | 30% | keines | 0,1s |
| Butcher | physical | 1.893,15 | 1.325,21 | 30% | keines | 0,6s |
| Druide | hybrid | 1.802,91 | 1.262,03 | 30% | 5,6s | 1,1s |
| Gladiator | physical | 1.852,3 | 1.296,61 | 30% | keines | 1,4s |
| Heiler | control | 1.587,66 | 1.111,36 | 30% | keines | 2,9s |
| Kräuterkundler | magical | 2.012,03 | 1.408,42 | 30% | keines | 1,8s |
| Jäger | physical | 1.416,64 | 991,65 | 30% | keines | 0,7s |
| Ritter | control | 1.453,1 | 1.017,17 | 30% | keines | 0,7s |
| Luminet | magical | 1.980,84 | 1.386,59 | 30% | keines | 2,3s |
| Ritualist | magical | 416,8 | 291,76 | 30% | keines | 2,8s |
| Schamane | hybrid | 1.991,71 | 1.394,19 | 30% | 112,1s | 0,6s |
| Seelenjäger | physical | 1.536,11 | 1.075,28 | 30% | keines | 1,8s |
| Schurke | physical | 1.928,02 | 1.349,62 | 30% | keines | 0,1s |

| Schadensgruppe | Referenz roh | Referenz mit Abwehr |
| --- | ---: | ---: |
| physical | 1.705,98 | 1.194,18 |
| magical | 1.725,36 | 1.207,76 |
| hybrid | 1.897,31 | 1.328,11 |

## Grenze des Dauertests

Der Ritualist stirbt ohne Heilunterstützung durch Lebensverbrauch in den Stufen20–120 nach28,5–96Sekunden. Die angezeigten DPS teilen durch die geplanten600Sekunden und enthalten danach Nullschaden. Das ist keine validierte Dauer-DPS-Basis für Bossgruppen. Details zu Lebensdauer und DPS während der tatsächlichen Simulationsdauer stehen in JSON unter sustainedCoverage, durationSeconds und activeDps.

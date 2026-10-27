# Neue Monster: Level-60-Skalierung und Abwehr-Sweetspots

- Read-only level-60 scaling probe; no runtime templates or database values changed.
- Three requested combat values interpreted as attack plus physical and magical defense. P and M label attack type; shamans use magical attack.
- New profiles use their integer level-1 values and the existing provisional 1.04 compound growth: value(60) = value(1) × 1.04^59. This growth is a test assumption, not newly confirmed balance.
- Reference wolf/bird/golem use their actual existing level-60 previews, whose original level-1 coefficients were not rounded. No stealth rounding or recalibration of these references.
- Physical and magical sweetspots are independent: monster defense / (25/6). Sweetspot means the player level at which this monster blocks 30% of that damage type. Enemy level itself does not set outgoing player damage reduction.
- Health, fight duration, player survivability, party size and boss soloability are not evaluated. No buffs, debuffs, armor penetration, movement or skills applied.
- Family blocks remain together; within each family habitats follow forest/cave/mountain/frost and roles are sorted by attack. This is no overall difficulty ranking.
- Mountain Cyclops defense is still unassigned; no 10% troll-defense inheritance applied because its low magical-defense intent remains unresolved.
- Frosttroll uses the explicitly stated provisional mountain-troll reference, with already-rounded level-1 values 45 / 34 / 31.

Faktor: 10.115026353896976. Ein Sweetspot auf Level 60 benötigt **250 Abwehr**, für physischen und magischen Schaden jeweils separat.

## Referenzen

| Monster | Angriff | P-Abwehr | M-Abwehr | Sweetspot P / M | Reduktion gegen L60 P / M |
| --- | ---: | ---: | ---: | ---: | ---: |
| Gewöhnlicher Grauwolf | 266,7 P | 88,9 | 62,2 | 21,3 / 14,9 | 17,1 % / 15 % |
| Silberschwingenkranich | 240 P | 80 | 115,6 | 19,2 / 27,7 | 16,4 % / 19,2 % |
| Steingolem | 350 P | 250 | 250 | 60 / 60 | 30 % / 30 % |

## Goblins

| Monster | Angriff | P-Abwehr | M-Abwehr | Sweetspot P / M | Reduktion gegen L60 P / M |
| --- | ---: | ---: | ---: | ---: | ---: |
| Waldgoblin-Krieger | 242,8 P | 80,9 | 50,6 | 19,4 / 12,1 | 16,5 % / 14 % |
| Waldgoblin-Schütze | 242,8 P | 50,6 | 80,9 | 12,1 / 19,4 | 14 % / 16,5 % |
| Wald-Haupt-Goblin | 263 P | 101,2 | 70,8 | 24,3 / 17 | 18,1 % / 15,7 % |
| Waldgoblin-König | 343,9 P | 172 | 151,7 | 41,3 / 36,4 | 23,8 % / 22,1 % |
| Höhlengoblin-Krieger | 283,2 P | 91 | 60,7 | 21,8 / 14,6 | 17,3 % / 14,9 % |
| Höhlengoblin-Schütze | 283,2 P | 60,7 | 91 | 14,6 / 21,8 | 14,9 % / 17,3 % |
| Höhlen-Haupt-Goblin | 313,6 P | 121,4 | 80,9 | 29,1 / 19,4 | 19,7 % / 16,5 % |
| Höhlengoblin-König | 404,6 P | 202,3 | 182,1 | 48,6 / 43,7 | 26,2 % / 24,6 % |
| Berggoblin-Krieger | 303,5 P | 101,2 | 60,7 | 24,3 / 14,6 | 18,1 % / 14,9 % |
| Berggoblin-Schütze | 303,5 P | 60,7 | 101,2 | 14,6 / 24,3 | 14,9 % / 18,1 % |
| Berg-Haupt-Goblin | 333,8 P | 131,5 | 91 | 31,6 / 21,8 | 20,5 % / 17,3 % |
| Berggoblin-König | 434,9 P | 212,4 | 192,2 | 51 / 46,1 | 27 % / 25,4 % |

## Orcs

| Monster | Angriff | P-Abwehr | M-Abwehr | Sweetspot P / M | Reduktion gegen L60 P / M |
| --- | ---: | ---: | ---: | ---: | ---: |
| Wald-Orc-Krieger | 283,2 P | 91 | 50,6 | 21,8 / 12,1 | 17,3 % / 14 % |
| Wald-Orc-Schütze | 283,2 P | 50,6 | 91 | 12,1 / 21,8 | 14 % / 17,3 % |
| Wald-Orc-Schamane | 293,3 M | 50,6 | 91 | 12,1 / 21,8 | 14 % / 17,3 % |
| Wald-Orc-Hauptmann | 313,6 P | 131,5 | 101,2 | 31,6 / 24,3 | 20,5 % / 18,1 % |
| Wald-Orc-König | 404,6 P | 232,6 | 212,4 | 55,8 / 51 | 28,6 % / 27 % |
| Höhlen-Orc-Krieger | 303,5 P | 101,2 | 50,6 | 24,3 / 12,1 | 18,1 % / 14 % |
| Höhlen-Orc-Schütze | 303,5 P | 50,6 | 101,2 | 12,1 / 24,3 | 14 % / 18,1 % |
| Höhlen-Orc-Schamane | 313,6 M | 50,6 | 101,2 | 12,1 / 24,3 | 14 % / 18,1 % |
| Höhlen-Orc-Hauptmann | 333,8 P | 141,6 | 111,3 | 34 / 26,7 | 21,3 % / 18,9 % |
| Höhlen-Orc-König | 434,9 P | 252,9 | 232,6 | 60,7 / 55,8 | 31,2 % / 28,6 % |
| Berg-Orc-Krieger | 333,8 P | 111,3 | 60,7 | 26,7 / 14,6 | 18,9 % / 14,9 % |
| Berg-Orc-Schütze | 333,8 P | 60,7 | 111,3 | 14,6 / 26,7 | 14,9 % / 18,9 % |
| Berg-Orc-Schamane | 343,9 M | 60,7 | 111,3 | 14,6 / 26,7 | 14,9 % / 18,9 % |
| Berg-Orc-Hauptmann | 364,1 P | 151,7 | 121,4 | 36,4 / 29,1 | 22,1 % / 19,7 % |
| Berg-Orc-König | 475,4 P | 273,1 | 252,9 | 65,5 / 60,7 | 39,2 % / 31,2 % |

## Hobgoblins

| Monster | Angriff | P-Abwehr | M-Abwehr | Sweetspot P / M | Reduktion gegen L60 P / M |
| --- | ---: | ---: | ---: | ---: | ---: |
| Höhlen-Hobgoblin-Kämpfer | 313,6 P | 121,4 | 70,8 | 29,1 / 17 | 19,7 % / 15,7 % |
| Höhlen-Hobgoblin-Kommandant | 343,9 P | 141,6 | 131,5 | 34 / 31,6 | 21,3 % / 20,5 % |
| Höhlen-Hobgoblin-König | 424,8 P | 212,4 | 172 | 51 / 41,3 | 27 % / 23,8 % |
| Berg-Hobgoblin-Kämpfer | 333,8 P | 131,5 | 80,9 | 31,6 / 19,4 | 20,5 % / 16,5 % |
| Berg-Hobgoblin-Kommandant | 364,1 P | 151,7 | 141,6 | 36,4 / 34 | 22,1 % / 21,3 % |
| Berg-Hobgoblin-König | 445,1 P | 222,5 | 182,1 | 53,4 / 43,7 | 27,8 % / 24,6 % |

## Oger

| Monster | Angriff | P-Abwehr | M-Abwehr | Sweetspot P / M | Reduktion gegen L60 P / M |
| --- | ---: | ---: | ---: | ---: | ---: |
| Höhlen-Oger-Kämpfer | 313,6 P | 151,7 | 101,2 | 36,4 / 24,3 | 22,1 % / 18,1 % |
| Höhlen-Oger-Schamane | 323,7 M | 70,8 | 121,4 | 17 / 29,1 | 15,7 % / 19,7 % |
| Höhlen-Oger-Häuptling | 434,9 P | 313,6 | 283,2 | 75,3 / 68 | 55,4 % / 43,3 % |
| Berg-Oger-Kämpfer | 333,8 P | 161,8 | 111,3 | 38,8 / 26,7 | 22,9 % / 18,9 % |
| Berg-Oger-Schamane | 343,9 M | 101,2 | 141,6 | 24,3 / 34 | 18,1 % / 21,3 % |
| Berg-Oger-Häuptling | 455,2 P | 333,8 | 303,5 | 80,1 / 72,8 | 63,5 % / 51,4 % |

## Trolle

| Monster | Angriff | P-Abwehr | M-Abwehr | Sweetspot P / M | Reduktion gegen L60 P / M |
| --- | ---: | ---: | ---: | ---: | ---: |
| Waldtroll | 313,6 P | 232,6 | 212,4 | 55,8 / 51 | 28,6 % / 27 % |
| Höhlentroll | 333,8 P | 252,9 | 232,6 | 60,7 / 55,8 | 31,2 % / 28,6 % |
| Bergtroll | 364,1 P | 273,1 | 252,9 | 65,5 / 60,7 | 39,2 % / 31,2 % |
| Frosttroll | 455,2 P | 343,9 | 313,6 | 82,5 / 75,3 | 67,6 % / 55,4 % |

## Zyklopen

| Monster | Angriff | P-Abwehr | M-Abwehr | Sweetspot P / M | Reduktion gegen L60 P / M |
| --- | ---: | ---: | ---: | ---: | ---: |
| Bergzyklop | 404,6 P | offen | offen | offen / offen | offen % / offen % |


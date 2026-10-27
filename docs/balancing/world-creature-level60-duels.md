# Standkampfprobe: Ritter, Heiler und Druide gegen World-Monster

- Deterministic stationary 1v1, player and monster level 60; current R4 five-piece class armor and R4 class weapons, +0, no affixes or gems. Fresh full health/mana/cooldowns for each fight.
- All existing permanent passives and maximum class learning caps retained. No optional self/group buffs. Existing attack-skill side effects and Druid Nature Spirit included; Nature Spirit cannot be attacked in this probe.
- Monster values are the EXISTING compound-growth draft, not the hypothetical replacement armor curve. Golem not simulated: only its previous HP placeholder exists.
- Player armor uses shared divisors 3.268 physical / 3.248 magical and the 50% midpoint. Monster armor uses 25/6 and asymmetric variant A with 30% midpoint and 10% floor.
- Monsters use physical auto-attacks only, illustrative base rate 1.3 × inherited attackSpeed 0.7 = 0.91 hits/s. Their actual animation/base attack frequency is not defined. First hit after a full interval; enemy hits precede player impacts at equal simulation time.
- Player HP regeneration uses the current stored flat value every 2 seconds; mana every 3 seconds. Monster HP regeneration is OFF in combat. A separate sensitivity run disables only player HP regeneration.
- Healer uses explicit self-heal 108 and group heal 78 including the caster below 60% HP, respecting cast times, costs and cooldowns. Ally-only healing 58/64/124 is not silently treated as self-healing. No group or potions.
- No random criticals, miss/dodge/block rolls, movement, range, kiting, enemy special attacks, aggro redirection, control duration or target armor debuffs/armor bypass. Physical and magical damage phases resolve against their respective defenses. These omissions can affect class comparisons.
- This is a simplified numerical duel, not an Unreal combat run or a complete class-balance verdict.

## Alle Varianten

Je Zelle: Ergebnis, Kampfzeit, niedrigster HP-Stand. Der niedrigste Stand kann unter dem Stand am Kampfende liegen, weil zwischen Treffern regeneriert/geheilt wird.

| Monster | Leben | Ritter | Heiler | Druide |
| --- | ---: | --- | --- | --- |
| Grimmiger Waldwolf | 5547 | Sieg, 0,9 s, 100 % HP | Sieg, 3,3 s, 88,85 % HP | Sieg, 1,1 s, 96,02 % HP |
| Frostklauenwolf | 5795 | Sieg, 0,9 s, 100 % HP | Sieg, 3,4 s, 89,34 % HP | Sieg, 1,1 s, 96,2 % HP |
| Schattenwolf | 5298 | Sieg, 0,7 s, 100 % HP | Sieg, 3,3 s, 88,69 % HP | Sieg, 1,1 s, 95,97 % HP |
| Sonnenfellwolf | 5629 | Sieg, 0,9 s, 100 % HP | Sieg, 3,4 s, 89,66 % HP | Sieg, 1,1 s, 96,31 % HP |
| Gewöhnlicher Grauwolf | 5215 | Sieg, 0,7 s, 100 % HP | Sieg, 3,3 s, 90,31 % HP | Sieg, 1,1 s, 96,54 % HP |
| Rotmähnenwolf | 5464 | Sieg, 0,9 s, 100 % HP | Sieg, 3,3 s, 89,01 % HP | Sieg, 1,1 s, 96,08 % HP |
| Nebelwolf | 5381 | Sieg, 0,7 s, 100 % HP | Sieg, 3,3 s, 89,98 % HP | Sieg, 1,1 s, 96,43 % HP |
| Silberschwingenkranich | 6788 | Sieg, 1,2 s, 98,72 % HP | Sieg, 4,9 s, 91,27 % HP | Sieg, 2,2 s, 96,89 % HP |
| Rotkammreißer | 7451 | Sieg, 1,4 s, 98,34 % HP | Sieg, 4,9 s, 88,69 % HP | Sieg, 2,22 s, 95,97 % HP |
| Blaufederkolben | 6540 | Sieg, 0,9 s, 100 % HP | Sieg, 4,85 s, 91,92 % HP | Sieg, 2,2 s, 97,12 % HP |
| Waldheinläufer | 6126 | Sieg, 0,9 s, 100 % HP | Sieg, 3,4 s, 90,95 % HP | Sieg, 1,1 s, 96,77 % HP |
| Düsterkrähenläufer | 7037 | Sieg, 1,2 s, 98,53 % HP | Sieg, 4,9 s, 89,98 % HP | Sieg, 2,2 s, 96,43 % HP |
| Himmelsfalk | 6292 | Sieg, 0,9 s, 100 % HP | Sieg, 3,55 s, 89,98 % HP | Sieg, 1,1 s, 96,43 % HP |
| Rotscheitelgleiter | 6623 | Sieg, 0,9 s, 100 % HP | Sieg, 4,85 s, 89,66 % HP | Sieg, 2,2 s, 96,31 % HP |
| Waldkronenschreiher | 5795 | Sieg, 0,9 s, 100 % HP | Sieg, 3,4 s, 91,6 % HP | Sieg, 1,1 s, 97 % HP |
| Schattenspitz | 6457 | Sieg, 0,9 s, 100 % HP | Sieg, 4,3 s, 89,01 % HP | Sieg, 2,2 s, 96,08 % HP |
| Felsenflügel | 7451 | Sieg, 1,4 s, 98,29 % HP | Sieg, 4,9 s, 88,37 % HP | Sieg, 2,22 s, 95,85 % HP |
| Mondvariante | 6954 | Sieg, 1,2 s, 98,63 % HP | Sieg, 4,9 s, 90,63 % HP | Sieg, 2,2 s, 96,66 % HP |

## Spielerwerte und Regenerationskontrolle

| Klasse | HP | P-Abwehr | M-Abwehr | HP-Reg / 2 s | MP-Reg / 3 s | Siege | Siege ohne HP-Regeneration |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Ritter | 4.224 | 435,46 | 382,04 | 544,4 | 138,6 | 18/18 | 18/18 |
| Heiler | 2.523 | 213,8 | 458 | 328 | 193 | 18/18 | 18/18 |
| Druide | 2.703 | 279,8 | 312,8 | 348 | 138,6 | 18/18 | 18/18 |

## Prüfung des Simulators

37 direkte Tests bestanden. Breitere Prüfung: 81 bestanden, vier bereits vorhandene Fehlschläge in historischen Skill-/Buff-Erwartungen. Dieselben vier wurden mit dem unveränderten Simulator aus Git HEAD reproduziert. Details in world-creature-level60-duels-validation.json.

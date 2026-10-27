# Grauwolf-Rudelführer mit zwei Grauwölfen – Level 60

- Level 60, R4 +0, current passives and learned skill caps, no optional self/group buffs, random affixes, upgrades or gems. Fresh resources for each fight.
- One gray wolf pack leader plus two normal gray wolves, all level 60, simultaneous aggro. Each has separate HP, defenses and physical attacks. Dead wolves stop attacking. No monster skills.
- Two focus orders: companions first or leader first. Single-target overkill never spills to another enemy. All wolves remain in range; automatic retargeting happens on each damage impact, including lingering effects. This simplification does not model fixed DOT ownership or projectile flight.
- Explicit damaging area definitions hit all living eligible wolves up to stored target caps. A supportive field alone does not make its initial damage an AoE. Knight field 40 hits the pack; Healer 101 remains single-target. Druid 9 is limited to one enemy by the solo group-size rule.
- All wolves attack the player; Druid Nature Spirit contributes damage but cannot tank. No movement, random crit/dodge/block, control durations or armor debuffs. These are the same simplified combat omissions as the earlier solo probes.
- Attack frequency provisional: 1.3 × attackSpeed = 0.91 attacks/s per living wolf. First hit after a full interval; synchronized enemy hits precede player impacts on equal frames.
- No HP regeneration in combat; mana regeneration continues. Healer may use self-heal 108 and group heal 78 below 60% HP with real costs, casts and cooldowns. No potions.

| Gegner | HP | P-Angriff | P-Abwehr | M-Abwehr |
| --- | ---: | ---: | ---: | ---: |
| Rudelführer – Gewöhnlicher Grauwolf | 5.737 | 293,37 | 97,79 | 68,45 |
| Gewöhnlicher Grauwolf | 5.215 | 266,7 | 88,9 | 62,23 |
| Gewöhnlicher Grauwolf | 5.215 | 266,7 | 88,9 | 62,23 |

| Klasse | Fokus | Ergebnis | Zeit | Niedrigste HP | End-HP | End-Mana | Heilung |
| --- | --- | --- | ---: | ---: | ---: | ---: | ---: |
| Ritter | Begleiter zuerst | Sieg | 25,29 s | 56,93 % | 2.404,64 | 2.104,8 | 0 |
| Ritter | Rudelführer zuerst | Sieg | 27,49 s | 51,67 % | 2.182,47 | 2.243,4 | 0 |
| Heiler | Begleiter zuerst | Sieg | 12,3 s | 54,92 % | 1.636,72 | 2.133 | 1.694,19 |
| Heiler | Rudelführer zuerst | Sieg | 9,95 s | 54,92 % | 1.866,92 | 1.966 | 1.581,96 |
| Druide | Begleiter zuerst | Sieg | 6,2 s | 71,13 % | 2.030,02 | 111,05 | 214,79 |
| Druide | Rudelführer zuerst | Sieg | 5,86 s | 72,54 % | 2.068,66 | 8,45 | 216,05 |

## Getrennte Todeszeitpunkte

- Ritter, addsFirst: world-gray-wolf-1 bei 0,7 s; world-gray-wolf-2 bei 6 s; world-gray-wolf-pack-leader-1 bei 25,29 s
- Ritter, leaderFirst: world-gray-wolf-pack-leader-1 bei 0,9 s; world-gray-wolf-1 bei 10,4 s; world-gray-wolf-2 bei 27,49 s
- Heiler, addsFirst: world-gray-wolf-1 bei 3,3 s; world-gray-wolf-2 bei 7,6 s; world-gray-wolf-pack-leader-1 bei 12,3 s
- Heiler, leaderFirst: world-gray-wolf-pack-leader-1 bei 3,4 s; world-gray-wolf-1 bei 7,6 s; world-gray-wolf-2 bei 9,95 s
- Druide, addsFirst: world-gray-wolf-1 bei 1,1 s; world-gray-wolf-2 bei 3,6 s; world-gray-wolf-pack-leader-1 bei 6,2 s
- Druide, leaderFirst: world-gray-wolf-pack-leader-1 bei 1,1 s; world-gray-wolf-1 bei 3,6 s; world-gray-wolf-2 bei 5,86 s

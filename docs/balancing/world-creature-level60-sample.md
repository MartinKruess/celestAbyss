# Standkampfprobe: Ritter, Heiler und Druide gegen World-Monster

- Deterministic stationary 1v1, player and monster level 60; current R4 five-piece class armor and R4 class weapons, +0, no affixes or gems. Fresh full health/mana/cooldowns for each fight.
- All existing permanent passives and maximum class learning caps retained. No optional self/group buffs. Existing attack-skill side effects and Druid Nature Spirit included; Nature Spirit cannot be attacked in this probe.
- Monster values are the EXISTING compound-growth draft, not the hypothetical replacement armor curve. Golem profiles, when selected, are provisional new level-60 targets; elemental skills and miniboss behavior are not included.
- Player armor uses shared divisors 3.268 physical / 3.248 magical and the 50% midpoint. Monster armor uses 25/6 and asymmetric variant A with 30% midpoint and 10% floor.
- Monsters use physical auto-attacks only, illustrative base rate 1.3 × inherited attackSpeed 0.7 = 0.91 hits/s. Their actual animation/base attack frequency is not defined. First hit after a full interval; enemy hits precede player impacts at equal simulation time.
- Player and monster HP regeneration are OFF in combat; mana regeneration remains every 3 seconds. The redundant no-HP-regen control is retained for comparison with old reports.
- Healer uses explicit self-heal 108 and group heal 78 including the caster below 60% HP, respecting cast times, costs and cooldowns. Ally-only healing 58/64/124 is not silently treated as self-healing. No group or potions.
- No random criticals, miss/dodge/block rolls, movement, range, kiting, enemy special attacks, aggro redirection, control duration or target armor debuffs/armor bypass. Physical and magical damage phases resolve against their respective defenses. These omissions can affect class comparisons.
- This is a simplified numerical duel, not an Unreal combat run or a complete class-balance verdict.

## Alle Varianten

Je Zelle: Ergebnis, Kampfzeit, niedrigster HP-Stand. Der niedrigste Stand kann unter dem Stand am Kampfende liegen, weil zwischen Treffern regeneriert/geheilt wird.

| Monster | Leben | Ritter | Heiler | Druide |
| --- | ---: | --- | --- | --- |
| Steingolem | 9800 | Sieg, 15,89 s, 73,88 % HP | Sieg, 14,25 s, 55,47 % HP | Sieg, 3,6 s, 86,39 % HP |

## Spielerwerte und Regenerationskontrolle

| Klasse | HP | P-Abwehr | M-Abwehr | HP-Reg / 2 s | MP-Reg / 3 s | Siege | Siege ohne HP-Regeneration |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Ritter | 4.224 | 435,46 | 382,04 | 544,4 | 138,6 | 1/1 | 1/1 |
| Heiler | 2.523 | 213,8 | 458 | 328 | 193 | 1/1 | 1/1 |
| Druide | 2.703 | 279,8 | 312,8 | 348 | 138,6 | 1/1 | 1/1 |

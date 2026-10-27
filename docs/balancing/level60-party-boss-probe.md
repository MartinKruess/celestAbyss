# Ritualist, Ritter und Heiler gegen den Level-60-Boss

- Three level-60 actors, R4 +0 class weapons and five armor pieces, current permanent passives and maximum learned class skill caps. No random affixes, upgrades or gems.
- All public player group buffs provided at the highest currently available provider level, including providers outside the three-person party. These start prepared and persist through this isolated test; no double stacking of the same definition. Companion-only public buff 150 excluded from player stats.
- Own buffs start prepared with full resources. Finite own durations expire normally and are renewed with costs/casts/cooldowns; toggles pay upkeep. Assimilation 242 has no defined duration, so this probe explicitly assumes 120 seconds. Knight self reduction Awakening 42 starts active for its stored 30 seconds.
- Boss level 60, 100000 HP, physical AND magical armor 400, physical attack 1000. One physical attack per second, first hit after one second. Boss attacks the living actor with highest cumulative threat; ties retain the current target. No threat decay, switch margin, AoE, movement or special attacks. Morrak threat is provisionally assigned to its owner; summon tanking is not modeled.
- Same-time order: boss hit, then Ritualist, Ritter and Healer actor actions. Party has one shared boss-health pool and armor-debuff list. Distinct armor debuffs stack multiplicatively; repeats refresh their duration. Debuffs apply at cast completion before that skill impact, and their natural durations/costs/cooldowns are retained. Boss is assumed susceptible to these armor debuffs.
- Boss is stun-immune: no stun pauses, no stun-bound magic-defense reduction from Soul Shackle, and no Shackle-dependent Torment/Harvest combo window. Ritualist prioritizes Weakness of the Flesh 100. Knight field 40 includes -11% P-defense, -10% M-defense and +37.5 M-attack for each party member while in the field; both armor breakers are included. No automatic armor bypass.
- Healer interrupts damage actions at the next legal action opportunity when a party member is below 65% HP. Healing 64, Restoration 124, Aurora 58, group heal 78, aura 108 and emergency group heal 207 are available with costs, casts, cooldowns and effect timing. Self-targeting of ally heals is allowed for this requested probe. All members are assumed within healing range. Revival 206 is not simulated.
- Passive HP regeneration is OFF throughout active combat. A provisional 3-second out-of-combat delay is recorded, but there is no idle combat exit in this boss fight. MP regeneration continues every 3 seconds; active heals, damage-linked healing, HP costs and Ritualist 72 HP drain per 1.5 seconds included.
- Threat = effective damage times current damage-threat multiplier + fixed on-activation skill threat + healing-threat factor times effective healed HP. Provoke 158 grants knight x3 damage threat; 19/55 add 500 flat and field 40 adds 5000 flat, never multiplied again. Main healing threat factor 0.5 is a probe assumption, with sensitivity at 0 and 1; no settled healing-threat rule is claimed.
- No random crit/miss/dodge/block rolls, animation/recovery beyond existing cast policy, boss regeneration or Unreal movement. This is a deterministic stationary model, not a guaranteed in-engine kill time.

## Ergebnis

Sieg nach 61,48 Sekunden. Boss-Restleben 0. Kontrolllauf ohne Abwehrsenkungen: timeout, 66.298,33 Boss-Restleben nach 120 Sekunden.

| Klasse | Effektiver Boss-Schaden | Heilung an Gruppe | Erlittener Schaden | Niedrigste HP | HP am Ende | Mana am Ende |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Ritualist | 48.808,38 | 723,66 | 0 | 63,35 % | 3.120,49 / 3.929 | 1.006 |
| Ritter | 22.709,54 | 0 | 6.273,84 | 62,82 % | 5.055,51 / 5.709 | 3.394 |
| Heiler | 28.482,08 | 8.752,65 | 0 | 100 % | 3.573 / 3.573 | 3.223 |

## Mana im Kampf

HP-Regeneration ist im Kampf ausgeschaltet; MP-Regeneration bleibt aktiv. Vorbereitete Buffs starten mit vollen Ressourcen. Bei einem Tod endet die Ressourcenbilanz des betroffenen Charakters zu diesem Zeitpunkt.

| Klasse | Start | Verbraucht | Regeneriert | Minimum | Ende | Erster Manaengpass | Mana-bedingte Wartezeit |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Ritualist | 4.007 | 8.175 | 5.174 | 29,7 | 1.006 | keiner | 0 s |
| Ritter | 4.153 | 5.671 | 4.912 | 2.015 | 3.394 | keiner | 0 s |
| Heiler | 4.982 | 8.183 | 6.424 | 2.427 | 3.223 | keiner | 0 s |

## Aggro und Zielwechsel

Heilaggro ist vorläufig mit 0,5 je effektiv geheiltem HP angesetzt. Feste Skillaggro wird nicht nochmals mit Provozieren multipliziert.

| Klasse | Schadensaggro | Feste Skillaggro | Heilaggro | Gesamt | Tod |
| --- | ---: | ---: | ---: | ---: | ---: |
| Ritualist | 48.808,38 | 0 | 361,83 | 49.170,21 | überlebt |
| Ritter | 68.128,61 | 8.500 | 0 | 76.628,61 | überlebt |
| Heiler | 28.482,08 | 0 | 4.376,32 | 32.858,41 | überlebt |


Der Ritter erhält 3 × effektiven Schaden plus 8.500 feste Skillaggro. Ohne Debuffs reduzieren 400 Abwehr gegen Level 60 den Schaden um 90 %. Mit allen gleichzeitig aktiven P-Abwehrsenkungen bleiben 246,71 P-Abwehr (29,74 % Reduktion).

## Empfindlichkeit gegenüber Heilaggro

| Aggro pro effektiv geheiltem HP | Ergebnis | Zeit | Boss-Restleben | Erster Aggroverlust des Ritters |
| ---: | --- | ---: | ---: | ---: |
| 0 | win | 61,48 s | 0 | keiner |
| 0,5 | win | 61,48 s | 0 | keiner |
| 1 | win | 61,48 s | 0 | keiner |

Die Heilaggro-Regel ist eine vorläufige Modellannahme. Die Varianten zeigen, wie Zielwechsel das Kampfergebnis beeinflussen.

## Bossabwehr und Treffer pro Sekunde

| Sekunde | Boss-HP | P-Abwehr | M-Abwehr |
| ---: | ---: | ---: | ---: |
| 0 | 100.000 | 400 | 400 |
| 1 | 96.017,07 | 249,2 | 180 |
| 2 | 91.449,58 | 246,71 | 162 |
| 3 | 84.388,4 | 246,71 | 162 |
| 4 | 75.899,59 | 246,71 | 162 |
| 5 | 71.186,83 | 246,71 | 162 |
| 6 | 68.571,42 | 246,71 | 162 |
| 7 | 65.702,86 | 246,71 | 162 |
| 8 | 61.640,77 | 246,71 | 162 |
| 9 | 59.570,73 | 246,71 | 162 |
| 10 | 58.029,91 | 246,71 | 162 |
| 11 | 57.025,03 | 246,71 | 162 |
| 12 | 54.527,84 | 246,71 | 162 |
| 13 | 53.150,79 | 246,71 | 162 |
| 14 | 52.035,26 | 246,71 | 162 |
| 15 | 50.957,48 | 246,71 | 162 |
| 16 | 48.624,06 | 246,71 | 162 |
| 17 | 47.683,66 | 246,71 | 162 |
| 18 | 46.306,61 | 246,71 | 162 |
| 19 | 45.135,25 | 246,71 | 162 |
| 20 | 43.551,76 | 246,71 | 162 |
| 21 | 41.590,52 | 246,71 | 162 |
| 22 | 40.419,17 | 246,71 | 162 |
| 23 | 39.042,12 | 246,71 | 162 |
| 24 | 37.437,27 | 246,71 | 162 |
| 25 | 34.509,91 | 246,71 | 162 |
| 26 | 33.099,75 | 249,2 | 162 |
| 27 | 31.754,07 | 249,2 | 162 |
| 28 | 30.928,95 | 249,2 | 162 |
| 29 | 27.530,79 | 246,71 | 162 |
| 30 | 26.035,91 | 246,71 | 162 |
| 31 | 24.993,61 | 396 | 360 |
| 32 | 24.666,8 | 396 | 360 |
| 33 | 24.081,7 | 396 | 360 |
| 34 | 23.717,08 | 396 | 360 |
| 35 | 23.399,46 | 396 | 360 |
| 36 | 23.011,41 | 396 | 360 |
| 37 | 22.449,05 | 396 | 360 |
| 38 | 21.327,65 | 396 | 360 |
| 39 | 20.797,32 | 396 | 360 |
| 40 | 20.300,19 | 396 | 360 |
| 41 | 19.667,47 | 396 | 360 |
| 42 | 19.348,85 | 396 | 360 |
| 43 | 18.733,69 | 396 | 360 |
| 44 | 18.187,95 | 396 | 360 |
| 45 | 17.121,89 | 396 | 360 |
| 46 | 16.692 | 396 | 360 |
| 47 | 15.919,07 | 396 | 360 |
| 48 | 15.260,26 | 396 | 360 |
| 49 | 14.843,23 | 396 | 360 |
| 50 | 14.449,52 | 396 | 360 |
| 51 | 14.120,45 | 396 | 360 |
| 52 | 13.790,39 | 396 | 360 |
| 53 | 13.089,44 | 400 | 360 |
| 54 | 12.527,05 | 400 | 360 |
| 55 | 11.982,87 | 400 | 360 |
| 56 | 9.987,83 | 277,2 | 180 |
| 57 | 8.393,92 | 277,2 | 180 |
| 58 | 6.234,77 | 277,2 | 180 |
| 59 | 4.970,72 | 277,2 | 180 |
| 60 | 2.669,23 | 277,2 | 180 |
| 61 | 1.287,82 | 277,2 | 180 |

## Testprüfung

42 direkte Tests für gemeinsame Boss-HP, Abwehrkurven, Debuffwirkung zwischen Gruppenmitgliedern, Heilziele/Kosten, ausgeschaltete Kampf-HP-Regeneration, Betäubungsimmunität und bisherige Skillabläufe bestehen. Die breitere Auswahl hat vier bereits bekannte Fehlschläge aus historischen Skill-/Buff-Erwartungen; keine zusätzlichen Fehlschläge. Details in level60-party-boss-probe-validation.json.

# Ritualist: R6-Abschlussrechnung

- Level60, original R6 Wand/armor, maximum skill levels, no active buffs or companion damage
- Intelligence contributes 1.8 magical attack per point, same comparison convention as other classes; Victim is NOT additionally added until class conversion is settled
- Start with100 souls; Soul Plague then Shackle/Torment15/Harvest then Fire of the Damned maximally hitting six enemies for six soul gains
- Damage total shown against ONE enemy; six-target requirement is only for the resource-gain best case; with a lone boss Fire grants1 instead of6
- Ausbrennen active: +80 magical attack included; ongoing health drain72 per1.5s reported separately, no elapsed combat duration assumed
- Opfergabe adds1% total damage, costs0.5% maxHP once per attack-skill activation including each Torment cast; no cost per field tick
- Soul attack flat passive+120 applied per Torment cast and once to Shackle/Harvest/Plague; group definitions still provisional
- One enemy takes all six30% Fire follow-up ticks and all six Meteor wave portions; visual meteor count is NOT a damage multiplier
- Meteor remains physical per stored field: three times (2172+character physical attack), then Opfergabe; magical alternative is a separate sensitivity
- All attacks land; no defense/crit/damage resistance. Weakness debuff does not get converted into a guessed damage multiplier
- No regeneration or potions; timing includes cooldown resets for the hypothetical second round; not a sustainable-DPS simulation
- Morrak and buffs excluded from main rotation; no reliable attacks-per-second conversion for Morrak yet

## Werte

| Wert | Leerer Speicher, ohne Ausbrennen | 100 Seelen, ohne Ausbrennen |
| --- | ---: | ---: |
| Leben | 4.389 | 4.389 |
| Mana | 5.077 | 5.077 |
| M-Angriff | 847,62 | 947,62 |
| P-Angriff | 104 | 104 |
| P-Defense | 770 | 770 |
| M-Defense | 945 | 945 |

## Eine volle Rotation

| Skill | Anwendungen | Mana | Rohschaden ein Ziel | HP-Kosten | Selbstheilung | Seelen −/+ |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Seelenplage | 1 | 0 | 1.828,73 | 21,95 | 0 | −30/+0 |
| Seelenfessel | 1 | 193 | 1.367,16 | 21,95 | 0 | −1/+0 |
| Seelenqual | 15 | 1.155 | 19.461,99 | 329,18 | 0 | −0/+0 |
| Seelenernte | 1 | 465 | 2.150,92 | 21,95 | 750 | −0/+2 |
| Feuer der Verdammten | 1 | 469 | 4.863,09 | 21,95 | 0 | −0/+6 |
| Feuerball | 1 | 266 | 1.634,81 | 21,95 | 0 | −0/+0 |
| Lebenssauger | 1 | 354 | 1.518,66 | 21,95 | 380,37 | −0/+0 |
| Schrei der Unterwelt | 1 | 0 | 3.072,6 | 1.119,19 | 0 | −0/+0 |
| Sturm des Feuers | 1 | 375 | 1.756,01 | 21,95 | 0 | −0/+0 |
| Dunkler Impuls | 1 | 108 | 1.266,16 | 21,95 | 0 | −0/+0 |
| Meteoritenschauer | 1 | 469 | 6.896,28 | 21,95 | 0 | −0/+0 |
| Schwäche des Fleisches | 1 | 281 | 0, Debuff nicht in Rohschaden umgerechnet | 95 | 0 | 0 |

Mana-Pool **5077**; eine Runde **4135**, zwei **8270**, Fehlbetrag für zwei **3193** ohne Regeneration. Einmalige aktive Eigenbuff-Vorbereitung zusätzlich **368 Mana**.

Rohschaden erste Rotation **45.816,39**, zweite bei weiter gesunkenem Seelenvorrat **45.217,05**.

Maximale Seelenausgabe **31 pro Runde**; mögliche Gewinne **8**, netto **−23**, Start100 →77 →54. Bei nur einem Boss liefert das Feuerfeld nur1 statt6, daher netto−28 je erfolgreicher kompletter Kette.

Lebenskosten einschließlich Debuff **1.740,87 pro erster Runde**; Selbstheilung **1.130,37**, Nettoverlust **610,5** vor Ausbrennen, Regeneration und gegnerischem Schaden. Ausbrennen kostet zusätzlich **72 HP alle1,5 Sekunden**. Direkte HP-Regeneration **22 pro Tick**, Tickintervall offen; daher kein unbelegter zeitlicher Ausgleich.

## Stärkste einzelne Skillanwendungen

- Meteoritenschauer: **6.896,28 Rohschaden**.
- Feuer der Verdammten: **4.863,09 Rohschaden**.
- Schrei der Unterwelt: **3.072,6 Rohschaden**.

Die gesamte Seelenqual-Serie aus15 separaten Anwendungen verursacht **19.461,99**, zählt aber nicht als einzelne Skillanwendung. Meteoritenschauer bei hypothetischer magischer statt gespeicherter physischer Verrechnung: **9.625,16**; keine Datenbankänderung.

## Morrak

Nicht in die Rotation eingerechnet. Während der Beschwörung −500 Max-HP, +5 Wisdom und +5 Victim mit gelernter Verbesserung. Dämonenwerte live je⅓ des Meisters; beide Verteidigungen verwenden dessen M-Defense. Keine feste Angriffsfrequenz oder Lauf-/Zielzeit erfunden.

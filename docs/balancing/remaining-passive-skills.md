# Verbleibende passive Skills – Auswahl zur Durchsicht

4 Skilldefinitionen aus dem aktuellen Datenbankexport vom 2026-10-20T07:39:28.292Z. Gefilterte Auswahl nach Absprache: Rassen-, Waffen-, Rüstungs- und Erweiterungsskills sowie die ausdrücklich ausgeschlossenen Einzel-Skills sind ausgeblendet. Auch Passive mit Angriffs-, Treffer- oder Todesauslöser sind ausgeblendet. Die Auswahl enthält die vier zuletzt besprochenen gemeinsamen Passiven mit ihren aktuellen Werten. Die vollständige passive Gesamtliste bleibt separat erhalten. Klassenbezeichnungen entsprechen den gespeicherten Zuordnungen einschließlich Aufstiegsklassen; Lernbegrenzungen und Klassenspezialisierungen stehen im vollständigen Datensatz.

Die Wertetabellen zeigen den auf der jeweiligen Stufe aufgelösten direkten Wert. Einheiten, Auslöser, abgeleitete Boni und Bedingungen sind in der Beschreibung und im vollständigen Datensatz angegeben. Unvollständige Definitionen werden unverändert dargestellt.

| Nr. | Skill | Typ | Stufen | Zuordnung |
| ---: | --- | --- | ---: | --- |
| 67 | [Körperbeherrschung](#skill-67) | passive | 10 | Villian, Shadowwarrior, Abenteuer |
| 140 | [Standhaft](#skill-140) | passive | 10 | Butcher, Destroyer, Knife, Templar, Gladiator, Berserker |
| 142 | [Ausweichtraining](#skill-142) | passive | 10 | Archer, Hunter, Summoner, Soulseeker |
| 145 | [Durchhalten](#skill-145) | passive | 10 | Gladiator, Berserker, Abenteuer |

<a id="skill-67"></a>

## 67: Körperbeherrschung

**Typ:** passive · **Stufen:** 10

**Zuordnung:** Villian, Shadowwarrior, Abenteuer

Dauerhafter Attributanteil: je gelernter Stufe +1 Geschick, +0,5 Agilität; auf Stufe 10 insgesamt +10 Geschick, +5 Agilität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Allgemeine Mana-Kosten dauerhaft um 1 % auf Stufe 1–4, 2 % auf Stufe 5–9 und 3 % auf Stufe 10 reduziert.

| Stufe | Geschick | Agilität |
| ---: | ---: | ---: |
| 1 | 1 | 0.5 |
| 2 | 2 | 1 |
| 3 | 3 | 1.5 |
| 4 | 4 | 2 |
| 5 | 5 | 2.5 |
| 6 | 6 | 3 |
| 7 | 7 | 3.5 |
| 8 | 8 | 4 |
| 9 | 9 | 4.5 |
| 10 | 10 | 5 |

<details>
<summary>Vollständiger aktueller Datensatz einschließlich Effekten, Lernregeln und Klassenspezialisierungen</summary>

```json
{
  "_id": "6acc1c7e4826525c70d04ba6",
  "skillName_eng": "Body Control",
  "category": "passive",
  "charClass": [
    "Villian",
    "Shadowwarrior",
    "Abenteuer"
  ],
  "currentSkillLv": 0,
  "currentUpgradeLv": 0,
  "description_de": "Dauerhafter Attributanteil: je gelernter Stufe +1 Geschick, +0,5 Agilität; auf Stufe 10 insgesamt +10 Geschick, +5 Agilität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Allgemeine Mana-Kosten dauerhaft um 1 % auf Stufe 1–4, 2 % auf Stufe 5–9 und 3 % auf Stufe 10 reduziert.",
  "description_eng": "Permanent attribute component: +1 Dexterity, +0.5 Agility per learned level; at level 10, +10 Dexterity, +5 Agility total. This component always applies independently of any triggered effects. Permanently reduces all Mana costs by 1% at levels 1–4, 2% at 5–9 and 3% at 10.",
  "dmgType": "passive",
  "maxSkillLv": 10,
  "maxUpgradeLv": 10,
  "nr": 67,
  "skillName_de": "Körperbeherrschung",
  "skillpoints": 1,
  "agi": 0.5,
  "resourceCosts": [],
  "statBonusUnits": {},
  "statScaling": {
    "dex": {
      "type": "linear",
      "base": 1,
      "perLevel": 1
    },
    "agi": {
      "type": "linear",
      "base": 0.5,
      "perLevel": 0.5
    }
  },
  "dex": 1,
  "effects": [
    {
      "key": "body-control-mana-efficiency",
      "type": "resourceCostReduction",
      "target": "self",
      "resource": "mana",
      "appliesTo": "allSkills",
      "value": 0.01,
      "unit": "fraction",
      "durationSeconds": 0,
      "valueScaling": {
        "type": "table",
        "values": [
          0.01,
          0.01,
          0.01,
          0.01,
          0.02,
          0.02,
          0.02,
          0.02,
          0.02,
          0.03
        ]
      }
    }
  ],
  "levelProgression": {
    "version": 1,
    "rules": [
      {
        "path": [
          "statScaling",
          "dex"
        ],
        "rule": {
          "kind": "linear",
          "base": 1,
          "perLevel": 1
        },
        "source": "storedFormula"
      },
      {
        "path": [
          "statScaling",
          "agi"
        ],
        "rule": {
          "kind": "linear",
          "base": 0.5,
          "perLevel": 0.5
        },
        "source": "storedFormula"
      },
      {
        "path": [
          "effects",
          "0",
          "valueScaling"
        ],
        "rule": {
          "kind": "thresholds",
          "base": 0.01,
          "changes": [
            {
              "level": 5,
              "value": 0.02
            },
            {
              "level": 10,
              "value": 0.03
            }
          ]
        },
        "source": "verifiedExistingLevels"
      }
    ],
    "extensionNeedsDefinition": []
  },
  "classificationVersion": 1,
  "type": "passive"
}
```

</details>

<a id="skill-140"></a>

## 140: Standhaft

**Typ:** passive · **Stufen:** 10

**Zuordnung:** Butcher, Destroyer, Knife, Templar, Gladiator, Berserker

Dauerhafter Attributanteil: je gelernter Stufe +1 Vitalität, +0,5 Willenskraft; auf Stufe 10 insgesamt +10 Vitalität, +5 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Stufe | Vitalität | Willenskraft |
| ---: | ---: | ---: |
| 1 | 1 | 0.5 |
| 2 | 2 | 1 |
| 3 | 3 | 1.5 |
| 4 | 4 | 2 |
| 5 | 5 | 2.5 |
| 6 | 6 | 3 |
| 7 | 7 | 3.5 |
| 8 | 8 | 4 |
| 9 | 9 | 4.5 |
| 10 | 10 | 5 |

<details>
<summary>Vollständiger aktueller Datensatz einschließlich Effekten, Lernregeln und Klassenspezialisierungen</summary>

```json
{
  "_id": "6acc1c7e4826525c70d04bef",
  "skillName_eng": "Steadfast",
  "category": "passive",
  "charClass": [
    "Butcher",
    "Destroyer",
    "Knife",
    "Templar",
    "Gladiator",
    "Berserker"
  ],
  "currentSkillLv": 0,
  "currentUpgradeLv": 0,
  "description_de": "Dauerhafter Attributanteil: je gelernter Stufe +1 Vitalität, +0,5 Willenskraft; auf Stufe 10 insgesamt +10 Vitalität, +5 Willenskraft. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Keine Aktivierungskosten, Castzeit oder Cooldown.",
  "description_eng": "Permanent attribute component: +1 Vitality, +0.5 Wisdom per learned level; at level 10, +10 Vitality, +5 Wisdom total. This component always applies independently of any triggered effects. No activation cost, cast time or cooldown.",
  "dmgType": "passive",
  "maxSkillLv": 10,
  "maxUpgradeLv": 10,
  "nr": 140,
  "skillName_de": "Standhaft",
  "skillpoints": 1,
  "vita": 1,
  "wis": 0.5,
  "resourceCosts": [],
  "statScaling": {
    "vita": {
      "type": "linear",
      "base": 1,
      "perLevel": 1
    },
    "wis": {
      "type": "linear",
      "base": 0.5,
      "perLevel": 0.5
    }
  },
  "levelProgression": {
    "version": 1,
    "rules": [
      {
        "path": [
          "statScaling",
          "vita"
        ],
        "rule": {
          "kind": "linear",
          "base": 1,
          "perLevel": 1
        },
        "source": "storedFormula"
      },
      {
        "path": [
          "statScaling",
          "wis"
        ],
        "rule": {
          "kind": "linear",
          "base": 0.5,
          "perLevel": 0.5
        },
        "source": "storedFormula"
      }
    ],
    "extensionNeedsDefinition": []
  },
  "classificationVersion": 1,
  "type": "passive"
}
```

</details>

<a id="skill-142"></a>

## 142: Ausweichtraining

**Typ:** passive · **Stufen:** 10

**Zuordnung:** Archer, Hunter, Summoner, Soulseeker

Permanentes passives Ausweichtraining. Gewährt 1 Agilität und 0,5 Geschicklichkeit je gelerntem Skilllevel, bis zu 10 Agilität und 5 Geschicklichkeit auf Stufe 10. Keine Aktivierungskosten, Castzeit oder Cooldown.

| Stufe | Geschick | Agilität |
| ---: | ---: | ---: |
| 1 | 0.5 | 1 |
| 2 | 1 | 2 |
| 3 | 1.5 | 3 |
| 4 | 2 | 4 |
| 5 | 2.5 | 5 |
| 6 | 3 | 6 |
| 7 | 3.5 | 7 |
| 8 | 4 | 8 |
| 9 | 4.5 | 9 |
| 10 | 5 | 10 |

<details>
<summary>Vollständiger aktueller Datensatz einschließlich Effekten, Lernregeln und Klassenspezialisierungen</summary>

```json
{
  "_id": "6acc1c7e4826525c70d04bf1",
  "skillName_eng": "Dodge Training",
  "agi": 1,
  "category": "passive",
  "charClass": [
    "Archer",
    "Hunter",
    "Summoner",
    "Soulseeker"
  ],
  "currentSkillLv": 0,
  "currentUpgradeLv": 0,
  "description_de": "Permanentes passives Ausweichtraining. Gewährt 1 Agilität und 0,5 Geschicklichkeit je gelerntem Skilllevel, bis zu 10 Agilität und 5 Geschicklichkeit auf Stufe 10. Keine Aktivierungskosten, Castzeit oder Cooldown.",
  "description_eng": "Permanent passive dodge training. Grants 1 Agility and 0.5 Dexterity per learned skill level, reaching 10 Agility and 5 Dexterity at level 10. No activation costs, cast time or cooldown.",
  "dex": 0.5,
  "dmgType": "passive",
  "maxSkillLv": 10,
  "maxUpgradeLv": 10,
  "nr": 142,
  "skillName_de": "Ausweichtraining",
  "skillpoints": 1,
  "resourceCosts": [],
  "statScaling": {
    "agi": {
      "type": "linear",
      "base": 1,
      "perLevel": 1
    },
    "dex": {
      "type": "linear",
      "base": 0.5,
      "perLevel": 0.5
    }
  },
  "levelProgression": {
    "version": 1,
    "rules": [
      {
        "path": [
          "statScaling",
          "agi"
        ],
        "rule": {
          "kind": "linear",
          "base": 1,
          "perLevel": 1
        },
        "source": "storedFormula"
      },
      {
        "path": [
          "statScaling",
          "dex"
        ],
        "rule": {
          "kind": "linear",
          "base": 0.5,
          "perLevel": 0.5
        },
        "source": "storedFormula"
      }
    ],
    "extensionNeedsDefinition": []
  },
  "learningRequirements": {
    "minimumCharacterLevel": 10,
    "status": "defined",
    "furtherSkillLevelsStatus": "pending"
  },
  "classificationVersion": 1,
  "type": "passive"
}
```

</details>

<a id="skill-145"></a>

## 145: Durchhalten

**Typ:** passive · **Stufen:** 10

**Zuordnung:** Gladiator, Berserker, Abenteuer

Dauerhafter Attributanteil: je gelernter Stufe +0,8 Stärke, +0,5 Vitalität; auf Stufe 10 insgesamt +8 Stärke, +5 Vitalität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Permanenter Attributbonus ohne Auslöser. Keine direkten Abwehrboni, Aktivierungskosten, Castzeit oder Cooldown.

| Stufe | Stärke | Vitalität |
| ---: | ---: | ---: |
| 1 | 0.8 | 0.5 |
| 2 | 1.6 | 1 |
| 3 | 2.4000000000000004 | 1.5 |
| 4 | 3.2 | 2 |
| 5 | 4 | 2.5 |
| 6 | 4.8 | 3 |
| 7 | 5.6000000000000005 | 3.5 |
| 8 | 6.4 | 4 |
| 9 | 7.2 | 4.5 |
| 10 | 8 | 5 |

<details>
<summary>Vollständiger aktueller Datensatz einschließlich Effekten, Lernregeln und Klassenspezialisierungen</summary>

```json
{
  "_id": "6acc1c7e4826525c70d04bf4",
  "skillName_eng": "Endurance",
  "category": "passive",
  "charClass": [
    "Gladiator",
    "Berserker",
    "Abenteuer"
  ],
  "currentSkillLv": 0,
  "currentUpgradeLv": 0,
  "description_de": "Dauerhafter Attributanteil: je gelernter Stufe +0,8 Stärke, +0,5 Vitalität; auf Stufe 10 insgesamt +8 Stärke, +5 Vitalität. Dieser Anteil gilt ständig, unabhängig von zusätzlichen Auslöseeffekten. Permanenter Attributbonus ohne Auslöser. Keine direkten Abwehrboni, Aktivierungskosten, Castzeit oder Cooldown.",
  "description_eng": "Permanent attribute component: +0.8 Strength, +0.5 Vitality per learned level; at level 10, +8 Strength, +5 Vitality total. This component always applies independently of any triggered effects. Permanent attributes without a trigger. No direct defense bonus, activation cost, cast time or cooldown.",
  "dmgType": "passive",
  "maxSkillLv": 10,
  "maxUpgradeLv": 10,
  "nr": 145,
  "skillName_de": "Durchhalten",
  "skillpoints": 1,
  "vita": 0.5,
  "levelProgression": {
    "version": 1,
    "rules": [
      {
        "path": [
          "statScaling",
          "str"
        ],
        "rule": {
          "kind": "linear",
          "base": 0.8,
          "perLevel": 0.8
        },
        "source": "storedFormula"
      },
      {
        "path": [
          "statScaling",
          "vita"
        ],
        "rule": {
          "kind": "linear",
          "base": 0.5,
          "perLevel": 0.5
        },
        "source": "storedFormula"
      }
    ],
    "extensionNeedsDefinition": []
  },
  "classificationVersion": 1,
  "type": "passive",
  "statScaling": {
    "str": {
      "type": "linear",
      "base": 0.8,
      "perLevel": 0.8
    },
    "vita": {
      "type": "linear",
      "base": 0.5,
      "perLevel": 0.5
    }
  },
  "str": 0.8
}
```

</details>

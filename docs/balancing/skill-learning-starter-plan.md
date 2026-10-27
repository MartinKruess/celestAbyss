# Einstieg der Klassen

Die festgelegten ersten Freischaltungen wurden in Skillkatalog und Entwicklungsdatenbank übernommen. Die unten ausdrücklich offenen Entscheidungen bleiben Planung. Weitere Skillstufen werden getrennt verteilt.

Gemeinsam: Rassenskill L1, Waffentraining L2, Rüstungstraining und Bindung/Kontrolle/Zucht L4, Tamen/Beschwören/Zurückrufen L5. Erweiterung des Körpers beziehungsweise die entsprechende Erweiterung des Geistes/der Sinne L9. Ausdauertraining steht weiterhin auf dem bisherigen L2; neuer Zeitpunkt offen.

| Klasse | Erster festgelegter Angriff | Bewegung auf Level 8 |
| --- | --- | --- |
| [Abenteurer](classes/adventurer-skills.md) | Offen – Kreuzhieb zur Prüfung | Ausweichrolle, Dash, Doppelsprung |
| [Butcher](classes/butcher-skills.md) | Rotier Schlag (Level 6) | Noch nicht festgelegt |
| [Druide](classes/druid-skills.md) | Energieschlag (Level 6) | Noch nicht festgelegt |
| [Gladiator](classes/gladiator-skills.md) | Holzspalter (Level 6) | Noch nicht festgelegt |
| [Heiler](classes/healer-skills.md) | Energieschlag (Level 6) | Noch nicht festgelegt |
| [Kräuterkundler](classes/herbalist-skills.md) | Wasserfesseln (Level 6) | Noch nicht festgelegt |
| [Jäger](classes/hunter-skills.md) | Feuerpfeil (Level 6) | Ausweichrolle, Doppelsprung |
| [Ritter](classes/knight-skills.md) | Mächtiger Hieb (Level 10) | Noch nicht festgelegt |
| [Luminet](classes/luminet-skills.md) | Energieschlag (Level 6) | Noch nicht festgelegt |
| [Ritualist](classes/ritualist-skills.md) | Feuerball (Level 6) | Noch nicht festgelegt |
| [Schamane](classes/shaman-skills.md) | Noch offen | Noch nicht festgelegt |
| [Seelenjäger](classes/summoner-skills.md) | Feuerpfeil (Level 6) | Dash |
| [Schurke](classes/rogue-skills.md) | Dunkler Schlag (Level 6) | Noch nicht festgelegt |

## Offene Entscheidungen

- **Abenteurer:** Kreuzhieb auf Skillstufe 1 hat zwei Treffer: 27 + P-Angriff und 108 + P-Angriff, insgesamt 135 + 2 × P-Angriff vor Verteidigung. 34 Mana, 43 Sekunden Cooldown. Deutlich stärkerer Einzelburst als die genannten einfachen Einstiegsangriffe; kein dauerhafter DPS-Vergleich. Auswahl und eventuelle Anpassung offen.
- **Schamane:** Noch kein erster Angriff genannt. Die aktuelle Klassenliste enthält weder Rotier Schlag noch Energieschlag; bestehende physische Kandidaten wären Beben (81 Grundschaden) oder Felszähne (73 Grundschaden). Keine Auswahl vorgenommen.
- **Bewegung:** Jäger hat Ausweichrolle und Doppelsprung, keinen Dash. Seelenjäger hat Dash, weder Ausweichrolle noch Doppelsprung; Doppelschuss ist ein Angriff und nicht Teil dieses Bewegungspakets. Abenteurer hat alle drei Bewegungsskills. Alle genannten Bewegungsskills sind auf L8 festgelegt.
- **Ausdauertraining:** Bisher L2, neuer Zeitpunkt nicht genannt.

Quelle der Verteilung: `data/balancing/skill-learning-plan.json`; geprüfter Datenbankimport: `data/balancing/starter-skill-unlocks-decision.json`. Lernlevel wurden übernommen, Kampfwerte, Skillpunktkosten und Klassenzuordnungen bleiben erhalten.

## Weitere gemeinsame Lernlevel

Mächtiger Hieb L10 (ersetzt beim Ritter die frühere Ausnahme L6), Erdbeben L12, waffenspezifische Trainings L15, Schmetterschlag L17, Standhaft L20, Erdbrecher L21. Diese Lernlevel gelten für alle Klassen, denen der jeweilige Skill bereits zugeordnet ist. Andere klassenspezifische Passive auf L20 werden erst nach Benennung zugeordnet. Ausweichtraining und Hartes Training wurden nicht als Waffenspezialisierung eingestuft.

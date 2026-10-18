# Gespeicherte Skill-Skalierung

258 Definitionen enthalten 831 deklarative Regeln. 8050 bestehende Stufenwerte wurden gegen den Datenbankstand vor der Migration geprüft. IDs, Klassen, Maximalstufen, Grundwerte und alte Kurven bleiben erhalten. Die alten Tabellen sind Kompatibilitätsdaten; neue Laufzeitberechnungen verwenden levelProgression.

## Berechnung

services/skillLevel.js stellt resolveSkillAtLevel(definition, learnedLevel, options) bereit. Zurück kommen gelernte und effektive Stufe, ausgewertete Attribute, Kosten, Zeiten und Effekte. resolveCharacterSkillLevels wertet vertrauenswürdige persönliche Lernstände aus. services/skillLearningLevel.js bindet dieselben Regeln in die Simulation ein. Änderungen an Maximalstufen müssen weiterhin bewusst gespeicherte klassenspezifische Lerngrenzen berücksichtigen.

Unterstützt werden konstante, additive, multiplikative, polynomiale, periodisch wechselnde und gerundete Verläufe sowie Schwellenboni, abschnittsweise wechselnde Steigerungen und Begrenzungen. Schwellen bleiben an ihrer ausdrücklich gespeicherten Stufe; das Verschieben von Max-Level verschiebt keine historischen Meilensteine. Erkannte Formeln wurden über alle bisherigen Stufen geprüft. Diese Prüfung bestätigt die bisherigen Werte, nicht die zukünftige Balance. Plateaus behalten ihren letzten ausdrücklich definierten Wert. Ein einmaliger Abschlussbonus wird als dauerhafter Zusatz zum normalen Wachstum gespeichert.

33 Manakurven sind aus dem gesamten Skill-Grundschaden beziehungsweise der Heilung und dem gespeicherten Faktor abgeleitet. Character-Angriff und Zahl weiterer Gegner zählen nicht mit. Diese Regeln wurden nur übernommen, wenn sie auf jeder bisherigen Stufe exakt dieselben gerundeten Kosten ergeben. Bestehende abweichende Rundungsverläufe, feste Kosten, prozentuale Ressourcenpreise und Kombobudgets behalten eine eigene Regel. Der Faktor ist kein pauschales Wachstum von 25 Prozent pro Stufe. Für neue normale Angriffsskills kann outputCost mit factor 0.25 verwendet werden.

Beispiele: Wiederherstellung auf Stufe 30 ergibt 1200 Heilung pro Tick, vier Ticks, 1680 Mana und 12 Sekunden Cooldown. Erdsäule auf Stufe 15 ergibt 1757 initialen Grundschaden, zusätzlich 273, 508 Mana und 24 Sekunden Cooldown. Dies sind Vorschauwerte, keine Freischaltung dieser Stufen.

## Vergessener Zauber

Skill 222 speichert eine zusätzliche effektive Stufe für genau einen bereits gelernten eigenen Skill, einschließlich oberhalb der normalen Lerngrenze. Selbstwahl ist ausgeschlossen. Gelernte Stufe und Skillpunktkosten des Zielskills werden dadurch nicht verändert. Die Kosten sind je 20 Stärke, Vitalität, Intelligenz, Willenskraft, Agilität und Geschick. resolveCharacterSkillLevels liefert die Kosten einmal separat mit attributeCostSource 222; sie dürfen nicht nochmals zu bereits eingerechneten negativen Attributen des passiven Skills addiert werden. Der Aufrufer muss diese Attributänderungen in die Kampfwerte übernehmen. Der Bonus unterstützt aktive und passive Zielskills; dessen Kosten und Zeiten werden ebenfalls für die effektive Stufe neu berechnet.

Die Bibliothek ist vorbereitet. Das bisherige Charakterschema speichert weiterhin Skill-IDs ohne persönliche Lernstufen. Persistenz der Lernstände, Auswahl des Bonusziels sowie Login- und Upgrade-Endpunkte sind ein gesonderter Backend-Schritt. Die kanonische Schadensrangliste bleibt in dieser Änderung unverändert und schließt Vergessener Zauber weiterhin aus, solange kein Ziel ausgewählt wird. Es wurde keine Webseite angelegt.

## Noch nicht definierte Fortsetzung von Sonderfällen

Bekannte Stufen funktionieren vollständig. Für folgende zehn Skills wird eine Erweiterung sicher abgelehnt, statt Tabellen überzulaufen oder Werte zu erfinden:

| Nr. | Skill | Offene Fortsetzung |
| --- | --- | --- |
| 36 | Energieschlag | No defined progression for cooldownScaling |
| 54 | Gefrierbrand | No defined progression for effects.1.valueScaling |
| 63 | Kettenschuss | No defined progression for durationScaling |
| 70 | Kunai Todesstoß | No defined progression for burstUsage.belowTargetHealthFractionByLevel |
| 88 | Salve | No defined progression for attackExecution.projectileWavesByLevel |
| 99 | Schrei der Unterwelt | No defined progression for attackExecution.additionalDamageFromSacrificedHealth |
| 141 | Eiserner Wille | No defined progression for statScaling.vita |
| 246 | Wilde Bindung | No defined progression for companionBondSettings.physicalAttackFractionByLevel |
| 250 | Lebenstransfer | No defined progression for lifeTransferSettings.intervalSecondsByLevel |
| 251 | Blutender Schnitt | No defined progression for companionVulnerabilitySettings.damageBonusFractionByLevel |

Auch die Druiden-Bonusstufe verweigert solche nicht definierten Werte. Beim Energieschlag des Druiden ist der Übergang von seiner Lerngrenze 5 auf effektiv 6 bereits vorhanden; offen ist erst die Fortsetzung über die globale Definition Stufe 10.

## Validierung

Datenbanksicherung: data/balancing/history/before-skill-progression-1792352573368/skills.json. Migration: scripts/migrateSkillProgression.js. Vollständige Readback-Prüfung aller 258 Definitionen. Tests decken alle alten Stufen, Erweiterungen, geänderten Schaden mit dynamischem Mana, Bonusstufen für aktive/passive Skills, Klassenlimits und unbekannte Sonderverläufe ab.

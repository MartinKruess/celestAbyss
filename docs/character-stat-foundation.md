# Charakterwerte: getrennte Berechnungsgrundlagen

Stand: 25. Oktober 2026. Alle sieben Startattribute beginnen nach Nutzerentscheidung bei 0.

## Persistenz und Datenherkunft

Die Entwicklungsdatenbank enthält pro `classTemplates`-Dokument eine `statFoundation`:

- `version: 2`, `baseLevel: 1`;
- `directStats`: nackte Klassen-Grundwerte, ohne Attribute, Levelzuwachs, Ausrüstung oder Passive;
- `attributes`: Vitalität, Stärke, Intelligenz, Willenskraft, Geschick, Agilität und Glück, zunächst alle 0;
- `attributeGrowth`: bestätigte Zuwächse pro Level über Level 1 (derzeit je +1 Vita, Stärke, Intelligenz und Willenskraft).

Die bestehenden `statConversions` bleiben die Quelle für bestätigte Umrechnungsfaktoren und Klassenmodifikatoren. Regenerationsgrundwerte bleiben in `regeneration`, die kritische Grundschadenszugabe in den vorhandenen Regeln. Es wird keine neue Regenerations-Tickfrequenz erfunden.

`baseStats` bleibt als historische nackte Level-1-Referenz für die vorhandenen Balancing-Skripte erhalten; der neue Runtime-Ladepfad verwendet dieses Feld nicht. Vorberechnete Ausrüstungs-/Passivvergleiche sind Analyseergebnisse und keine Charaktergrundwerte. Die Bestandsaufnahme hat keine im Charakter gespeicherten Gesamtattribute gefunden; die Migration zieht deshalb keine vermuteten Rüstungsanteile ab.

Charaktere speichern weiterhin Klasse, Level, Fortschritt und aktuelle HP/Mana. Abgeleitete Maximalwerte werden nicht als zweite Wahrheit zurückgespeichert. Inventar und Skilldefinitionen verbleiben in ihren eigenen Systemen. Ausrüstungszuordnung und individuell gelernte Passive sind noch nicht an die Bonusquellen angeschlossen.

## Dedicated-Vertrag Version 2

`statProfile.baseValues` enthält direkte Kampfwerte, `baseAttributes` die Startattribute, `growth` die getrennten Levelzuwächse und `conversions` die bestätigten Regeln. Der Dedicated akzeptiert Version 1 mit vermischtem `stats`-Feld nicht mehr; Backend und Plugin müssen gemeinsam aktualisiert werden. Fehlende Daten führen zu einem Fehler statt zu einem geratenen Fallback.

Berechnung auf dem Dedicated:

1. Startattribute + Levelzuwachs + Attributbeiträge der aktuell aktiven Quellen.
2. Direkte Klassenwerte + direkte Quellenbeiträge + Umrechnung der gesamten Attribute, genau einmal.
3. Aktuelle HP/Mana auf die neuen Maximalwerte begrenzen und den fertigen Zustand replizieren.

Der bestehende Quellenmechanismus ersetzt Beiträge unter derselben ID und entfernt sie vollständig beim Ausziehen/Ablaufen. Widgets berechnen keine Werte. Ein erhöhtes Maximum heilt nicht automatisch; beim Senken wird der aktuelle Wert nötigenfalls begrenzt. Prozent-/Stapelregeln zusätzlicher Spielsysteme sind damit nicht neu definiert.

Jäger-Beispiel ohne Ausrüstung/Passive: Level 1 = 184 HP, 0 Vita; Level 25 = 184 + 24 × 30 = 904 HP. Eine Testquelle mit 20 Vita ergibt 1.504 HP; nach Entfernen wieder 904 HP. Andere Kampfwerte folgen ihren jeweiligen Klassenregeln.

## Migration und Prüfung

`node scripts/migrateStatFoundations.js --check` prüft die Live-Klassen ohne Schreibzugriff.
`node scripts/migrateStatFoundations.js --apply` sichert vollständige Klassendokumente und lokale Vorlagen unter ignoriertem `tmp/stat-foundations-<Zeit>/`, ergänzt das getrennte Fundament mit Schutz vor parallelen Änderungen und prüft es durch erneutes Lesen. Bestehende Fundamente werden nicht überschrieben. Spieler und Inventare werden nicht geändert.

Gezielte Backend-Prüfung: `node --test tests/characterStats.test.js tests/statFoundation.test.js tests/play.test.js tests/characterSkills.test.js`.
Native Prüfung: `unreal/BuildFrontendApi.ps1`, anschließend `unreal/TestFrontendApi.ps1`. Optional `-StatProfilePath <JSON>` mit einem lesend exportierten Hunter-Profil aus der Datenbank, um den echten Vertrag einschließlich Level-25-Anlegen/Ausziehen isoliert zu prüfen. Diese Testquelle ist kein bereits implementiertes Ausrüstungs-UI und ändert keine echten Gegenstände.

Bei bereits laufenden Prozessen ist ein Neustart erforderlich; vorhandene Spielersitzungen werden nicht im laufenden Betrieb umgestellt.

Umgesetzt und geprüft: 13 Live-Klassenvorlagen migriert und über den echten Backend-Ladepfad zurückgelesen. Sicherung: `tmp/stat-foundations-2026-10-25T11-14-38-087Z/`. 27 gezielte Backend-Tests, Editor-Build und sieben native Tests mit 18 isolierten HTTP-Anfragen bestanden. Der native Lauf nutzte zusätzlich das tatsächlich aus MongoDB exportierte Hunter-Profil für die genannten HP-/Anlegen-/Ausziehen-Prüfungen. Die getestete DLL wurde per Hash mit der installierten Kopie abgeglichen und der Projekteditor neu gestartet. Kein interaktiver Spiel-/Ausrüstungstest und keine Änderung echter Charakterfortschritte.

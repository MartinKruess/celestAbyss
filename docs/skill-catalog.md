# Lokaler Skill-Katalog

Die lesbare **[Gesamtliste aller Skills](balancing/all-skills.md)** enthält sämtliche aktuellen Definitionen, Beschreibungen, Stufenwerte und vollständigen Datensätze. Sie wird mit `node scripts/buildAllSkillsReview.js` aus dem aktuellen Katalog erstellt.

`data/skills.json` ist der vollständige Export der 263 aktuellen Skilldefinitionen aus der Entwicklungsdatenbank. Enthalten sind Namen, beide Beschreibungssprachen, Klassen, Werte, Levelskalierungen, Kosten, Effektdefinitionen und originale MongoDB-IDs. Das Manifest enthält Exportzeit und SHA-256. Es ist ein Katalog der Skilldefinitionen, kein Backup von Spielern oder Charakteren.

`scripts/skilldata.js` stellt daraus eine kompatible Ansicht für den bestehenden Import bereit. Der Seed übernimmt die vollständigen Katalogeinträge, einschließlich IDs; ältere Beschreibungsoverrides verändern exportierte Einträge nicht. Reihenfolge erzeugt keine neuen Skillnummern.

## Prüfen und importieren

- `npm run seed:check`: lokale Schema- und Duplikatprüfung, ohne Datenbank.
- `npm run skills:verify-db`: alle lokalen Felder und IDs mit der konfigurierten Datenbank vergleichen, nur lesend.
- `npm run seed -- --apply`: fehlende Skills und Items in die konfigurierte Datenbank einfügen. Vorher `.env` auf das gewünschte Ziel einstellen. Vorhandene Datensätze werden nicht überschrieben.
- `npm run skills:export`: Entwicklungsdatenbank erneut als lokalen Katalog exportieren. Schreibt lokale Dateien, keine Datenbankdaten.

Die erhaltenen IDs ermöglichen stabile Referenzen. Andere Collections, insbesondere Charakterdaten, müssen bei Bedarf gesondert gesichert und wiederhergestellt werden. Lokale Änderungen an `data/skills.json` mit `seed:check` prüfen. Alte einmalige Änderungsskripte mit textbasierten Anpassungen an `skilldata.js` gehören zum bisherigen Bearbeitungsverlauf und sind nicht der aktuelle Pflegeweg.

## Ungeklärte Quelleneinträge

`data/unresolved-source-skills.json` bewahrt die 13 Einträge ohne eindeutige Namenszuordnung samt originalen Quellendaten und Prüfinformationen auf. Sie werden nicht automatisch importiert. Nach gemeinsamer Zuordnung oder Bestätigung als neuer Skill werden sie gezielt in den Katalog aufgenommen.

Tests prüfen den vollständigen Weg vom Export über das Seed-Mapping bis zur Insert-Operation und den Erhalt aller Felder und IDs. Die Original-ODS-Dateien wurden nicht verändert.

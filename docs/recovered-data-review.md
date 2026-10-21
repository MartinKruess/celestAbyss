# Gerettete Spieldaten

Prüfung vom 12. Oktober 2026. Die Dateien im Download-Ordner wurden nur gelesen, nicht verändert oder importiert. Tabellenwerte und Formeln wurden für den Vergleich lokal extrahiert. Die Prüfung betrifft diese Dateien; sie trifft keine Aussage über den Bestand anderer Festplatten.

| Quelle in C:/Users/Nitram-PC/Downloads | Erhaltener Inhalt | Einschränkungen |
| --- | --- | --- |
| Weapon_Data.ods, Blatt weapons | 192 Datensätze: 78 Waffen, 60 Upgrade-Einträge, 10 Bufffood, 13 Consumables und 31 Materialien. Namen, Beschreibungen und zahlreiche Werte vorhanden. | Blatt Tabelle2 enthält einen weiteren Umbau desselben Bestands; nicht als zusätzliche 192 Items zählen. Keine vollständige Rüstungs-/Juwelenliste gefunden. |
| SkillList.ods, Blatt Tabelle1 | 240 nummerierte Skills mit IDs 1 bis 240 ohne Lücken oder doppelte IDs, Klassenangaben, Beschreibungen und Werten. Zusätzlich Auswertungen und Planungsnotizen. | Unterschiedlicher Stand gegenüber den 237 JS-Skills; Namen und Zuordnungen vor Import abgleichen. Die Gesamtdatei hat 284 befüllte Zeilen, nicht 283 Skills. |
| CharacterSkills.ods, Blatt Tabelle1 | 14 Klasseneinträge und 477 positive numerische Referenzen in ClassSkill, Attack, Deff, Buff, Passiv und Tame. | Referenzen über 240 fehlen im geretteten Skillkatalog; insbesondere 300 kann ein Platzhalter sein. Nicht automatisch ersetzen. |
| Druide_Skills.ods, Blatt Tabelle1 | 37 Einträge mit Druidenskills, Effekten und Werten. | Enthält ausdrücklich Leer01/Leer02 und Druide_buff01 sowie abweichende Schreibweisen; nicht 37 endgültige Skills annehmen. |
| Level_Data.ods, Blatt Tabelle1 | Level 1 bis 200, NeededEXP und SkillPoints; 199 Formeln. | Anzeige kann gerundet sein, während gespeicherte Formelwerte Nachkommastellen haben. EXP pro Level gegenüber kumulativ noch definieren. |
| werte.ods, Blatt Tabelle1 | 40 befüllte Zeilen und 68 Formeln mit Rüstungs-, Handschuh-, Helm-, Ring- und Waffenüberschriften; Rangwerte und Verhältnisberechnungen. | Zusätzliche Balancinggrundlage, keine vollständige Liste der benannten Rüstungssets oder Schmuckitems. |

## Vergleich mit dem Repository

Alle 192 Namen aus Weapon_Data/weapons kommen bereits in scripts/itemData.js vor. Die gemeinsam vorhandenen befüllten Felder stimmen nach Trimmen und einfacher Typnormalisierung überein. Dies ist ein Vergleich mit der Repositoryquelle der zuvor importierten Items, kein erneuter Live-Datenbankvergleich und keine Aussage über fehlende Felder oder Vollständigkeit der ursprünglichen Hauptdatei.

Der Skillvergleich anhand exakt gleicher deutscher Namen findet 56 gleich nummerierte Einträge und 151 mit anderer Nummer. 33 Namen lassen sich so nicht zuordnen; das können neue Skills, Umbenennungen oder Schreibvarianten sein, nicht automatisch 33 neue Skills. Beispiel: Kettenschuss hat in SkillList ID 64, im derzeitigen JS-Import nr 63. nr 64 ist dort Kleine Heilung. Eine direkte Übernahme der Matrix auf die aktuellen Datenbanknummern würde falsche Skills zuordnen.

Die Matrix nennt Adventure, Archer, Butcher, Bloodmage, Druide, Gladiator, Healer, Herbalist, Lightmage, Shamane, Soulseeker, Templer, Villian und Gamemaster. Diese Liste stimmt nicht vollständig mit der aktuell erlaubten Klassenliste im Backend überein. Auch Templer gegenüber Templar und weitere Namensvarianten müssen fachlich geklärt werden.

In den geprüften ODS-Dateien wurden keine externen xlink-Verweise gefunden, die den Speicherort der Hauptdatei verraten. Die Texte enthalten keine Unicode-Ersatzzeichen; falsch dargestellte Umlaute in der Terminalvorschau waren keine festgestellte Beschädigung der XML-Daten. Es wurden keine angezeigten Standard-Formelfehler gefunden; Formeln wurden nicht neu berechnet.

## Nächste Schritte

1. Originale sichern und weitere Armor-/Juwelen-Auszüge suchen; fehlende Hauptdatei bleibt offen.
2. Fachliche Skill-ID aus der geretteten Liste erhalten und getrennt von MongoDB-ObjectIds sowie derzeitigen nr-Werten führen.
3. Skillkatalog und Matrix zusammen abgleichen, fehlende IDs und Platzhalter ausweisen; Klasse und Skillnamen vereinheitlichen, keine Zuordnung erraten.
4. Level-/Skillpointkurve mit ihrem Formel- und Rundungsverhalten prüfen.
5. Erst nach abgestimmtem Abgleich einen Import mit Vorschau durchführen; vorhandene Daten nicht ungeprüft überschreiben.

Die Tabellen liefern bereits eine erhebliche Grundlage für das Charaktermodell, beweisen aber nicht, dass alle ursprünglichen Waffen-, Rüstungs- und Schmuckwerte vollständig gerettet sind.


Der Namensvergleich wurde mit ausdrücklich korrekter UTF-8-Decodierung erneut geprüft; der erste Vergleich hatte bei Umlauten zu viele fehlende Treffer ausgewiesen.


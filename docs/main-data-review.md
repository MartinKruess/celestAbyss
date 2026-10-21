# Prüfung der Hauptdatei

Die Datei E:/projects_g/CA_Project/Questsystem.ods enthält die beschriebene Hauptsammlung. Am 12. Oktober 2026 nur gelesen, keine Werte oder Formeln verändert und keine Datenbankimporte ausgeführt. Eine bytegleiche Projektkopie liegt in data/source/Questsystem.ods; SHA-256-Abgleich und Dateigröße sind im Manifest festgehalten. Die vom Nutzer angegebene Google-Sicherung wurde nicht geprüft.

## Erhaltener Bestand

19 Tabellenblätter und 3.910 gespeicherte Formeln wurden extrahiert. Das ist keine vollständige Neuberechnung oder fachliche Validierung der Formeln.

| Blatt | Inhalt |
| --- | --- |
| Klassen | 13 primäre Klassen und zugeordnete zweite Klassen, Rassen, Rollen, Schwierigkeit und Waffenhinweise. Benennungen teils Deutsch/Englisch gemischt. |
| EQ_Stats | 13 Klassen-/Rollenblöcke, 1.357 Formeln; Leben, Mana, physische/magische Verteidigung, Vita, Wisdom und Verteilungen auf Ausrüstungsteile. Nebenrechnungen rechts erhalten. |
| Weapon_Stats | Neun Blöcke, darunter 1H/2H-Axt, Bogen, Armbrust, Dolch, Kolben, Schild, Schwert und Zauberstab. 448 Formeln einschließlich Steigerungskalkulationen. |
| Schmuck_Stats | Ringe, Ohrringe, Amulette und Gürtel; 29 Formeln. All und Coins müssen fachlich geklärt werden; nach Nutzerangabe überarbeitbare Entwürfe. |
| Skills | Klassenspezifische Abschnitte mit Effekten, Schaden, MP-Kosten, Cooldown, Skillstufen, Grundwerten und zusätzlichen Zuordnungen rechts. Nummerierung wiederholt sich je Abschnitt; kein globaler Skillkatalog mit eindeutiger Nummer in Spalte A. |
| EXP Tab | Level-/EXP-Kalkulation bis Level 200, Mob-EXP, Zeit- und Multiplikatorberechnungen; 1.198 Formeln. |
| Questsystem | 30 Zeilen mit numerischer Quest-ID sowie weitere Entwürfe/Notizen. Voraussetzungen, Texte und Belohnungen sind teilweise ausgearbeitet, NPC-Zuordnung nicht vollständig. |
| Items | 526 benannte Datenzeilen nach Ausschluss zweier Überschriften. 380 unterschiedliche Namensstrings; 173 davon fehlen in der bisherigen 208-Item-JS-Liste. Wiederholte Namen kennzeichnen unter anderem unterschiedliche Ränge; Schreibfehler sind nicht automatisch neue Items. |
| Creatures | Wilde und gezähmte Kreaturen mit Namen, Beschreibungen und Werten. Nicht jede befüllte Zeile ist bereits ein fertiger importierbarer Datensatz. |
| Itemliste | Zusätzlicher älterer Namens-/Werteentwurf in mehreren nebeneinanderliegenden Bereichen. |
| Grundaufbau, Jobsystem, IdeenPool, CashShop, Marketing, Geschichten, Tabelle17, Network Com, Calculator | Struktur, Notizen, Orte/NPCs und Nebenberechnungen. Als Planungswissen erhalten, keine automatischen Produktregeln daraus ableiten. |

## Wichtige Importgrenzen

1. Im Items-Blatt sind unbenannte Emptycard-Zeilen reserviert. Im aktuell gespeicherten Stand umfasst der erste sichtbare Block Zeilen 210 bis 221; weitere Platzhalter folgen. Nutzerabsicht erhalten, nicht zusammenrücken oder anhand der Zeilenposition neue IDs vergeben. Das Blatt hat aktuell keine explizite ID-Spalte.
2. In Items steht in Zeile 235 eine zweite Überschrift. Danach ändert sich die Spaltenbelegung: mdeff kommt hinzu und spätere Werte verschieben sich. Ein Parser darf nicht die erste Überschrift auf alle Zeilen anwenden.
3. Wiederholte Namen wie Butcher Chest haben unterschiedliche Ränge und teilweise unterschiedliche Klassenzuordnungen. Das aktuelle MongoDB-Itemmodell mit unique name eignet sich dafür nicht unverändert. Vor Import fachliche Vorlagen-IDs beziehungsweise einen geklärten zusammengesetzten Schlüssel definieren.
4. Schreibvarianten wie Butche/Butcher, Villain/Villian, Druid/Druide und deutsche/englische Klassenbezeichnungen sind zu klären, nicht stillschweigend umzubenennen.
5. Skills in dieser Hauptdatei sind nach Klassen-/Skillbereichen angeordnet, während SkillList und CharacterSkills eigene IDs verwenden. Diese Quellen gemeinsam abgleichen und ursprüngliche IDs erhalten.
6. Angezeigte gerundete Zahlen und gespeicherte Formelwerte sind zu unterscheiden. Coins nicht ungeprüft als Kaufpreis übernehmen: bei der ersten Axt entspricht der Wert dem sell-Wert der bisherigen Itemquelle, nicht deren price-Feld. Das ist ein Hinweis, keine abschließende Semantik.
7. Aus dem Schmuckentwurf All nicht automatisch sämtliche Charakterattribute ableiten. Ein eigenes Attributschema und die beabsichtigte Wirkung müssen feststehen.

## Nächster sinnvoller Ablauf

Zuerst das Charakter-/Attributschema aus Klassen, EQ_Stats, Weapon_Stats und Skills mit dem Nutzer abstimmen. Danach einen Importentwurf erzeugen, der Hauptdaten von Nebenrechnungen trennt, Quellblatt/Quellzeile erhält, Platzhalter kennzeichnet und Namens-/ID-Konflikte offen ausweist. Erst danach neue Itemvorlagen, Klassen und Questdaten kontrolliert importieren.

Die Quelle ist ein erheblicher Fortschritt gegenüber den isolierten Downloads. Sie beweist noch keine fachliche Vollständigkeit aller früher ausgearbeiteten Werte. Die Formeln und Originaldatei bleiben die Referenz; es wurde nichts neu gebalanced.

## Einordnung der zusammengeführten Itemdatei

Nutzerklärung: Das Blatt Items vereinigt schrittweise vier frühere Bereiche (Kreaturen, Rüstung, Waffen und allgemeine Items). Bereits übertragene Teile wurden aus den alten Bereichen entfernt; darunter angehängte Rüstungsblöcke sind daher ein unfertiger Zusammenführungsstand, keine versehentlichen Dubletten. Butcher Chest/Head/Gloves und ähnliche Angaben sind teilweise Arbeitsnamen; endgültige Set-/Itemnamen fehlen zum Teil und werden später gemeinsam ergänzt.

Vor Übertragung unteren Header feldweise auf das gemeinsame Layout abbilden. Dabei magische Verteidigung mdeff erhalten: im unteren Rüstungslayout vorhanden, im oberen Header bisher nicht enthalten. Gemeinsames Layout gegebenenfalls um das Feld erweitern, statt Werte beim Umsortieren zu verlieren. Reihenfolge nicht als fachliche Bedeutung verwenden.

Aktuelle fachliche Vorgabe: Equipment liefert insbesondere Vita und Wisdom in klassen-/rangabhängigen Mengen; Angriffswerte kommen über Waffen und Seelensteine. Dies ist ein Arbeitsstand, kein Anlass zum Neubalancing oder zum Erfinden leerer Agility/Ambush/Faith/Intelligence-Werte. Leere Werte erst nach fachlicher Prüfung als nicht vorhanden oder als Null interpretieren.

Stabile Itemvorlagen-ID und Rang von veränderbaren Anzeigenamen trennen. Provisorische Namen nicht als Deduplizierungs- oder Importidentität verwenden. Quelle, Rang, Klasse und Ausrüstungsslot beim späteren Importentwurf erhalten. Kein Workbook geändert und keine Daten importiert.

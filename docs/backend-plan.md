# Celest Abyss Backend Plan

Stand: 12. Oktober 2026, nach Merge von PR #5. Dieser Plan beschreibt den aktuellen Funktionsstand und die offenen Aufgaben. Historische Zwischenstände stehen in backend-history.md; abgestimmte Anforderungen haben Vorrang vor alten Notizen.

## Ziel und Architektur

Ein MMORPG mit installierbarem Unreal-Client, Unreal Dedicated Server für die Simulation und Node-Backend für Accounts, dauerhafte Daten, Chat und Wirtschaft. Zunächst eine Spielwelt und ein Dedicated Server; Chat und Auktionshaus gelten zunächst innerhalb dieser Welt. Weitere Welten, Eventverbände und serverübergreifender Handel folgen später.

Modularer Node-Monolith, zunächst eine Backend-Instanz. Microservices sind nicht erforderlich. Mehrere Instanzen derselben Anwendung sind eine spätere Option und brauchen gemeinsame Chatverteilung, Widerrufssignale und Rate-Limits. Spielerzahlen bis 50.000 sind Planungsszenarien, keine gemessene Kapazitätszusage.

Dedicated Server entscheidet über Bewegung, Kampf, räumliche Nähe und verdienten Fortschritt. Clients fragen Aktionen an. Zuständigkeiten für Inventar, Crafting und Wirtschaft müssen vor deren Umsetzung verbindlich definiert werden.

## Bereits umgesetzt

| Bereich | Tatsächlicher Stand |
| --- | --- |
| Laufzeit | Node ab 22; Konfiguration prüfen, MongoDB vor Listenerstart verbinden, HTTP/WebSocket-Ports konfigurierbar, Gesundheitsendpunkte und geordnetes Herunterfahren. |
| Struktur | Express-App, Laufzeit, Authentifizierung, Chat und Charakterlogik getrennt. |
| Datenbank | Neue Atlas-Entwicklungsdatenbank celestabyss_dev verbunden; 208 Itemvorlagen und 237 Skills importiert und verifiziert. Alte Kopien in test nicht gelöscht. |
| Import | Spieldaten prüfen und fehlende Vorlagen wiederholbar importieren, ohne bestehende Vorlagen zu überschreiben. |
| Registrierung/Login | Eingabeprüfung, Argon2id, gefilterte Antworten, Rate-Limits. Login 10/IP/Minute, Registrierung 5/IP/Stunde. |
| Sitzungen | Access-JWT 15 Minuten, Sitzung höchstens sieben Tage, Refresh-Rotation, Replay-Sperre, Logout und Logout-all. Refreshlimit 30/IP/Minute. |
| REST-Zugriff | Account, Banstatus und aktive Sitzung prüfen; Charakterzugriffe prüfen zusätzlich Besitz. |
| Charaktere | Erstellen, Lesen und Löschen; Charakter/Inventar/Accountverweis transaktional, konkurrierende Limits geprüft, Skills nach Klasse, leeres Startinventar. Standardserver derzeit Asgard. |
| Globalchat | Echte WebSocket-Verbindung unter /chat; Sitzungsanmeldung, erneute Anmeldung nach Refresh, Logout-/Ablauf-Schließung, Abonnements, persistierte Nachrichten und Bestätigungen. |
| Chatverlauf | Für Spieler ausschließlich die jeweils neuesten 50 Nachrichten, auch bei alten Cursorn und Sende-Wiederholungen. Live-Client muss später ebenfalls auf 50 kürzen. |
| Chatsicherheit | Größen- und Ratenlimits, begrenzte Queues/Puffer, Heartbeat, Browser-Origin-Prüfung, Duplikatschutz, stabile Sequenz und Snapshot/Live-Übergang. |
| Moderationsvorbereitung | moderationRules-Schema, deutsche Seedquelle, Import-/Aktualisierungsskripte und Regeltabelle. 152 deutsche Entwürfe sowie fünf englische Entscheidungen gespeichert; Bastard auf Deutsch aktualisiert. 36 bereits abgestimmte Einträge inzwischen aktiviert; übrige Entwürfe inaktiv. |
| Tests | Zuletzt 183 automatisierte Tests bestanden; getrennte Atlas-Prüfungen für Auth, Charaktere und Chat erfolgreich. Datenbanktests laufen ausdrücklich separat. |
| Git | Bisheriger Backend-/Chatstand über PR #5 in main gemergt, Merge b06d7d6. .env bleibt außerhalb von Git. |

Der alte Positions-/PlayerData-WebSocket-Prototyp ist entfernt. Positionsübertragung gehört zur späteren Unreal-Anbindung.

Kompatible Paketupdates wurden durchgeführt; der letzte npm-Audit meldete keine bekannten Schwachstellen. Dies ist ein Prüfstand, keine dauerhafte Zusage.

## Moderation jetzt umgesetzt

- Aktive abgestimmte Regeln in den Chat integriert, einschließlich Maskierung und Blockierung; 36 Einträge aktiviert, offene Entwürfe bleiben aus.
- Lokale konservative Kontextprüfung, keine KI; unklare Nachrichten vor Zustellung halten. Prüfungen blockieren nicht den Chat anderer Spieler.
- Systemfälle und Spielermeldungen mit geschützten Originalen, Regelversionen und bis zu 50 Kontextnachrichten.
- Doppelte Meldungen je Account verhindern und Spielerberichte pro Nachricht bündeln; keine automatischen Bans.
- Rollen player/moderator/admin und geschützte REST-Endpunkte zur Fallbearbeitung; Audit und administrative Sicherung gegen Löschung.
- Normale Nachrichten und Sendeversuche nach 24 Stunden ablaufen lassen, sofort aus Spielerabfragen ausschließen und via TTL entfernen.
- Separate Fallfristen: offen/held 30 Tage, nach bestätigter Bearbeitung 90 Tage, verworfen ein Tag; legalHold-Ausnahmen und Fall-Sweeper.
- Freigegebene gehaltene Nachrichten werden vom ursprünglichen Client mit derselben ID erneut gesendet; keine automatische Veröffentlichung unter einem ausgeloggten Account.
- 138 Satzfälle, davon mehr als 100 unterschiedliche Texte, plus weitere Regressionstests. Gesamtsuite: 183 bestanden. Atlas-Test für Moderation und Berechtigungen erfolgreich; temporäre Testdaten entfernt.

Noch offen: endgültige Einstufung aller Entwürfe, breitere Kontextqualität, Website für Moderatoren, Warnungen/Chatsperren und zeitliche Accountbans. Regeln sind noch kein vollständiges Moderationsmodell für alle Sprachen.

Inventar-Spielaktionen bleiben gesperrt, keine Welt-Saves oder Mehrweltzuordnung implementiert.

## Nächste Arbeitsschritte

### 1 Moderation und Aufbewahrung

- [ ] Deutsche und englische Einstufungen abschließen; offene Entscheidungen nicht automatisch aktivieren.
- [x] Geltungsbereich global gegenüber sprachbezogen im Schema ergänzen. Dies ist unabhängig vom Chatkanal.
- [x] Eindeutige Stufe-3-Maskierung und Stufe-4-Blockierung mit Originaltextzuordnung und gezielten Varianten implementieren.
- [ ] Lokale Kontextprüfung umgesetzt; unklare Fälle bleiben held. Erkennung anhand weiterer Beispiele verbessern und bei Bedarf externes Modell evaluieren.
- [x] Spielermeldungen und Systemmeldungen mit Berechtigungen, Limits und Duplikatbündelung implementieren.
- [x] Global-Snapshot: bis zu 50 Nachrichten bis einschließlich der gemeldeten Nachricht sichern.
- [x] Normalnachrichten nach 24 Stunden ihres Alters löschen; geschützte Fall-Snapshots davon trennen.
- [ ] Fallstatus und Fristen festlegen: etwa 30 Tage offen, frühere Löschung irrelevanter Fälle, etwa drei Monate für verfolgte Fälle; konkrete Sicherungen gesondert begründen.
- [ ] Moderator-/Adminrollen und REST-Bearbeitung umgesetzt; Website-Oberfläche und Support-Arbeitsablauf fehlen noch.

### 2 Weitere Kommunikation

- [ ] Privatnachrichten: Teilnehmerrechte, Blockieren, Offline-Verhalten und Kontext mit bis zu 20 vorherigen Beiträgen beider Seiten.
- [ ] Gruppen und Gruppenverbände mit serverseitig bestätigten Mitgliedschaften; kleinere Gruppen und größere Verbände nutzen dasselbe Grundkonzept.
- [ ] Gilden-/Allianzchat mit Mitgliedschafts- und Austrittsregeln.
- [ ] Freunde und belastbarer Online-Status.
- [ ] Lokalchat später mit vertrauenswürdigen Dedicated-Server-Positionen, Welt/Instanz und ungefähr 100 Metern Radius.

### 3 Spieldaten und Quests

- [ ] Neue ausgearbeitete Itemlisten übernehmen und vorhandene Werte nach Abgleich aktualisieren.
- [ ] Skillbestand anhand der Nutzerlisten bestätigen; 237 importierte Einträge beweisen keine inhaltliche Vollständigkeit.
- [ ] Itemvorlagen von Item-Instanzen unterscheiden; stabile fachliche IDs, Stacks, Ausrüstung und Lager modellieren.
- [ ] Startausrüstung nach Itemüberarbeitung definieren; bis dahin Inventar leer.
- [ ] Questvorlagen, Voraussetzungen, Ziele und Belohnungen modellieren/importieren.
- [ ] Questfortschritt je Charakter getrennt speichern und doppelte Belohnungen verhindern.
- [ ] NPC-Zuordnung über stabile IDs; später Auswahl in Unreal ermöglichen.

### 4 Dedicated Server und Saves

- [ ] Eigene Serverauthentifizierung und Rechte für Fortschritt, Loot und Weltzustände.
- [ ] Charakterauswahl, Serverbeitritt und exklusive aktive Charaktersitzung festlegen.
- [ ] Versionierte Charakter-/Welt-Saves mit Bestätigungen und wiederholbaren Vorgängen.
- [ ] Periodische Saves alle 5 bis 10 Minuten, zusätzliche Saves bei wichtigen Ereignissen.
- [ ] Abschließende Fortschrittsspeicherung bei Logout und Wartung; jetziger Auth-Logout speichert keinen Spielprogress.
- [ ] Wiederherstellung und Konkurrenz zwischen Saves und Wirtschaftsänderungen testen.

Ein Save-Timer allein garantiert keine maximal zehn Minuten Rollback. Fehlgeschlagene oder aufgestaute Saves müssen sichtbar sein. Alte Saves dürfen neuere Item-/Währungsänderungen nicht überschreiben. Kritische Wirtschaftsänderungen sofort konsistent speichern.

### 5 Inventar und Wirtschaft

- [ ] Loot, Verschieben, Ausrüsten, Verbrauch, Lager und Währung mit verbindlichen Zuständigkeiten.
- [ ] Händler, Crafting und Upgrades sicher ersetzen und testen.
- [ ] Auktionshaus zunächst für die eine Welt: Einstellen, Suche/Filter/Sortierung, Kauf, Abbruch, Ablauf, Zustellung und Rückgabe.
- [ ] Bis zu 20 Favoriten; Bezug auf Angebot oder Vorlage entscheiden.
- [ ] Offline-Zustellung, konsistente Item-/Geldtransfers und Konkurrenztests.

### 6 Account und Betrieb vervollständigen

- [ ] Passwortreset und E-Mail-Verifizierung.
- [ ] Sicherer Browser-Loginvertrag einschließlich Cookie-/CSRF-Verhalten.
- [ ] Steam-Anmeldung und Accountverknüpfung.
- [ ] Expliziter Entwicklungszugang für schnelle Tests, ohne Produktionsrechte zu umgehen.
- [ ] Backups, Wiederherstellung, Betriebsmetriken und automatisierte CI-Checks; PR #5 hatte keine GitHub-CI-Checks.
- [ ] Lasttests, Login-/Weltbeitrittswarteschlangen bei Bedarf und Kapazitätslimits.
- [ ] Später Mehrinstanz-/Mehrweltbetrieb und ausdrücklich serverübergreifende Events; erst dann gemeinsame Verteilung ergänzen.

### 7 Unreal Integration

- [ ] Aktuelle Unreal-Version und C++-HTTP-/WebSocket-Anbindung vorbereiten; alte Plugin-Kompatibilität nicht voraussetzen.
- [ ] Fertige Backend-Verträge schrittweise anbinden und End-to-End testen.
- [ ] Klassentesten in der Charaktererstellung mit vorgefertigten Testcharakteren, vorläufig lokal und ohne dauerhaften Fortschritt.
- [ ] Optionale Trailer vor Login als Spielerfunktion, nicht als Kapazitätsgarantie.

## Verbindliche Moderationsgrundsätze

- Stufe 1: frei, kein alleiniger automatischer Treffer.
- Stufe 2: Kontext prüfen und erst bei Freigabe zustellen; Lokale konservative Prüfung umgesetzt; unklare Treffer bleiben zurückgehalten.
- Stufe 3: betreffende Stellen durch *** ersetzen; interner Treffer, keine sofortige Moderatorenmeldung allein durch den Treffer.
- Stufe 4: blockieren und zur Prüfung melden. Kontextpflichtige persönliche Bedrohungen sofort als Fall erfassen, vor Zustellung prüfen.
- Kein automatischer Ban allein aus Treffer oder Anzahl von Spielermeldungen.
- Spielsprache nur als Hinweis; Standort ist kein Sprachbeweis. Kurze Kürzel/Zahlen und normale Spielbegriffe nicht pauschal sperren.
- Schreibvarianten gezielt pro Regel statt beliebiger Silben-/Substring-Sperren.
- Freigaben und Kontextfälle vor Aktivierung bestätigen; Quellen und Konflikte stehen in moderation-rules-draft.md.

## Nachweise und Bedienung

- Chatvertrag: docs/chat-protocol.md.
- Regeltabelle: docs/moderation-rules-draft.md.
- Deutsche Entwurfsdaten: scripts/moderationData.js.
- Historische Notizen: docs/backend-history.md.
- npm test: Tests ohne echte Datenbank, teils lokale HTTP-/WebSocket-Verbindungen.
- npm run test:db-auth, test:db-characters und test:db-chat: ausdrücklich separate Atlas-Prüfungen.
- npm run seed:check / seed: Spieldaten prüfen beziehungsweise fehlende Vorlagen importieren.
- npm run moderation:check / moderation:seed: Entwürfe prüfen beziehungsweise fehlende inaktive Regeln importieren.

Nächster konkreter Bereich: weitere Regelabstimmung und Privatnachrichten. Danach Privatnachrichten; neue Item-/Questdaten können unabhängig davon vorbereitet werden. 183 Tests bestanden nach Moderationsintegration. Kein neuer npm-Audit für diese Änderung; keine neuen Abhängigkeiten hinzugefügt.

## Gerettete Tabellen geprüft

Fünf vom Nutzer benannte ODS-Dateien in Downloads plus werte.ods gelesen und mit Repositorydaten verglichen. Ergebnisse in docs/recovered-data-review.md. 192 Itemeinträge (darunter 78 Waffen) stimmen in gemeinsam vorhandenen Feldern mit der JS-Quelle überein. SkillList enthält 240 ursprüngliche IDs; Matrix für 14 Klassen ist nicht direkt mit den aktuellen 237 Importnummern kompatibel. Leveldaten 1 bis 200 und zusätzliche Balancingformeln erhalten. Keine Originaldatei verändert, keine Spieldaten importiert. Vor nächstem Import ursprüngliche Skill-IDs und Matrix zusammen abgleichen.

## Hauptdatei gefunden und geprüft

E:/projects_g/CA_Project/Questsystem.ods ist vorhanden und enthält 19 Tabellenblätter mit 3.910 erhaltenen Formeln, Klassen-/Equipment-/Waffen-/Schmuckwerten, Skills, 30 nummerierten Questentwürfen, Items und Kreaturen. Nur gelesen, nichts importiert. Bytegleiche lokale Projektkopie data/source/Questsystem.ods per SHA-256 verifiziert; Google-Sicherung nicht überprüft. Befunde in docs/main-data-review.md.

Items enthält 526 benannte Datenzeilen, wiederholte Namen je Rang und eine zweite geänderte Überschrift in Zeile 235. Bewusste Emptycard-Platzhalter erhalten; keine IDs aus Zeilennummern neu vergeben. Neue Namen und Rüstungsvorlagen vor Import fachlich abgleichen. Charakter-/Attributmodell anhand der geretteten Originalwerte gemeinsam festlegen, erst danach kontrollierte Datenübernahme.

## Klassenvorlagen angelegt

13 Klassenvorlagen aus dem Blatt Klassen und 14 ursprüngliche Skillmatrizen in celestabyss_dev gespeichert und Anzahl verifiziert. Collections classTemplates und legacyClassSkillMappings. Elf rassenbezogene Grundklassen plus Ritter und Jäger rassenübergreifend; Weiterentwicklungsnamen, Rollen-/Waffen-/Attributnotizen und genaue Quellposition erhalten. Keine Spielercharaktere erzeugt.

Stabile keys getrennt von Anzeigenamen. baseStats und statConversions bleiben null, Vorlagen status=draft/selectable=false. Das Blatt Skills enthält einige Grundwertansätze (beispielsweise Gladiator/Berserker), deren Bedeutung als Startwerte noch zu klären ist. Skillmatrix behält ursprüngliche numerische IDs und Slots, resolvedSkills bleibt leer; Nummern über 240 offen. Keine ungeprüfte Zuordnung auf bisherige Import-nr oder MongoDB-IDs.

GET /classes liefert den authentifizierten Vorlagenkatalog. Die bisherige Charaktererstellung nutzt noch ihre bestehende Klassen-/Rassenlogik und ist noch nicht auf diesen Katalog umgestellt. Nächster Schritt: bestätigte Klassennamen, Rassenwahl und tatsächliche Grundattribute/Umrechnungen definieren; danach Charaktererstellung und Skillverknüpfung anbinden. npm run classes:check prüft die Quell-Drafts, classes:seed fügt fehlende hinzu, ohne bestehende zu überschreiben.

## Konkrete Grundwerte aus Screenshot übernommen

Nutzer liefert ausdrücklich neue Grundwerte für alle 13 Klassen. Je Klasse maxHealth, maxMana, physicalAttack, magicalAttack, physicalDefense und magicalDefense übernommen; 78 Werte insgesamt. Screenshot als lokale Quelle data/source/class-base-stats-2026-10-12.png erhalten. Vergleichs-/Balancingwerte aus der alten Skills-Tabelle wurden dafür nicht benutzt.

data/stat-definitions.json trennt Kapazitäten, Kampfwerte, Primärattribute und abgeleitete Werte. Primärattribute bleiben ohne erfundene Zahlen; Umrechnungen bleiben offen. Critical Chance und Critical Damage getrennt, Attack Speed und Movement Speed getrennt. Ambush und Victim benötigen genaue Bedeutungsdefinition; Block Chance/Reduction und Penetration ebenfalls klären. Rage und Penetration später. Alle Schlüssel und Labels Englisch. maxHealth/maxMana sind Kapazitäten, aktuelle Füllstände gehören später separat zum Charakterzustand.

Klassenvorlagen bleiben draft/selectable=false, da Primärwerte, Rassenwahl und endgültige Skillverknüpfungen noch fehlen. Die vorhandene Charaktererstellung verwendet diese neuen Werte noch nicht automatisch.

## Skillbaum und Klassenwahl präzisiert

Nutzerklärung: Charakter startet mit Rassen-/Aussehenswahl ohne endgültige Klasse. Klassenwahl erst auf Level 10 innerhalb der Rasse. Abenteurer ist dabei zusätzlich eine spätere menschliche Klasse und nicht ungeprüft die generische Startklasse aller Völker. Gemeinsame Startwerte noch festlegen; die 78 Screenshotwerte bleiben bisherige Klassenentwürfe, nicht automatisch Level-1-Werte.

Blatt Skills erneut direkt aus der Originaldatei gelesen. Links stehen Mensch-Grundskills und Klassendetails mit Beschreibungen, Effekten, MP, CD und Stufen; G-Zeilen sind nach Nutzerklärung Kalkulationsszenarien. Rechts stehen Namens-/ID-Zuordnungskästen. Universell enthält Tamen, Bindung, Kontrolle, Beschwören (Quelle Beshwören), Zurückrufen und Zucht mit IDs 139 bis 144. Fixed Skills enthält Reiten, Tauchen, Tamen, Emotes, Springen, Klettern und Fliegen; nicht alle haben hier IDs oder Freischaltbedingungen.

Abenteurer: Offence und Offence 2 je sechs belegte Namensslots, einschließlich Waffentraining beziehungsweise Schwerttraining. Defence und Buffs ebenfalls je sechs; Passive vier belegte Namen, weitere Slots x/leer. Nicht automatisch jede Offence-Zuordnung als aktiven Angriff modellieren: Training kann passiv sein. Beispiel: Macht des Begleiters ID 156 im Buffbereich; Körperbeherrschung ID 70 im passiven Bereich.

Levelangaben neben den Kästen nicht ungeprüft als neue Freischaltlevel übernehmen: alte Tabellen enthalten Klassenzuordnungen bereits bei 3/5, während die aktuelle Klassenwahl auf 10 festgelegt ist. Ebenfalls Unterschiede zwischen Namens-/ID-Kästen der Hauptdatei, exportierter SkillList und bisherigem JS-Import beachten. Hauptdatei-Kasten nennt Kettenschuss ID 65, gerettete SkillList ID 64, bisheriger JS-Import nr 63. Zuordnung deshalb anhand Name/Version prüfen und alte Nummern mit Herkunft sichern.

Keine Skillzuordnungen oder Grundwerte in der Datenbank geändert. Nächster Modellschritt: universelle Skills, rassenspezifische Grundskills, spätere Klassenskills und Weiterentwicklungen getrennt definieren. Slots, fehlende IDs, fehlende Beschreibungen und ungeklärte Levelbedingungen erhalten.

## Skillnamen mit aktueller Datenbank abgeglichen

364 belegte Namensslots aus den grauen Klassenzuordnungskästen erfasst; 282 über normalisierten deutschen Namen eindeutig mit aktuellen MongoDB-Skill-IDs verknüpfbar, 82 noch ungeklärt. Dies sind Slot-Zuordnungen, keine 364 verschiedenen Skills. Entwurf in data/skill-name-mapping-draft.json, noch nicht auf Spielercharaktere oder Klassen angewendet. Schreibvarianten, abgekürzte Namen, Platzhalter und fehlende Definitionen offen; keine Voraussetzungen aus ähnlichen Namen ableiten.

Direkt bestätigt in Atlas: Waffentraining nr 201, Rüstungstraining nr 144, Ausdauertraining nr 139, Durchhalten nr 145, Ausweichtraining nr 142, Immunität nr 143, Standhaft nr 140. Character.skills speichert derzeit MongoDB-ObjectIds, nicht diese nr oder Tabellen-IDs. Schadensreduzierung und Standhaftigkeit haben unter diesen exakten Namen keinen Eintrag; Standhaft ist vorhanden, aber Gleichsetzung mit Standhaftigkeit bleibt fachlich offen. Bestehende charClass-Zuweisungen unterscheiden sich teilweise von den neuen Tabellen (Immunität aktuell nur Healer/Priest), daher nicht als endgültige neue Zuordnung übernehmen.

## SkillList vollständig über beide Sprachen verglichen

Aktuelle SkillList.ods erneut gelesen: Header Nr/S_Name_ENG/S_Name_DE, Zeilen 2 bis 241 enthalten 240 Skills; letzter Eintrag Wind Cutter/Windschlitzer. Bereiche darunter nicht als Skills importiert. Direkter Atlas-Abgleich verwendet beide Sprachfelder plus Beschreibungen und Maximallevel. 213 eindeutige Namenskandidaten, 25 ohne exakten Namenskandidaten, zwei widersprüchliche Mehrfachtreffer. Bei 58 Namenskandidaten weichen Beschreibung oder Maximallevel ab; das beweist nicht automatisch einen anderen Skill.

Dashing/Dashen und Mighty Strike/Mächtiger Schlag über Englisch gefunden. Passion Expansion ebenfalls gefunden. Mut des Abenteurers/Adventurer's Courage, Great Regeneration/Große Regeneration und weitere neue beziehungsweise umbenannte Begriffe haben keinen exakten Datenbanktreffer. Regeneration nicht mit Heilung gleichgesetzt. Katalysator/Catalyst ist nicht automatisch Catalyst Pure oder Impure.

Namenszuordnungsentwurf aktualisiert: 298 eindeutig namensbasierte Slots, 23 Slots mit Quelldefinition ohne DB-Namenstreffer, 43 weiter ungeklärt. Dies sind Slots, keine unterschiedlichen Skills. Vergleich in data/skill-list-comparison.json; keine MongoDB-Einträge oder Charakterzuordnungen geändert.

## Erweiterungs und Macht Skills Effekte verglichen

Atlas erneut gelesen und mit aktueller SkillList verglichen, ohne Datenänderung. Erweiterung der Sinne: DB amb2/dex3/str3, Quelle agi3/amb2/dex3. Erweiterung des Geistes: beide faith3/int3/vic3/wis3, aber Beschreibung nennt nur Int3. Erweiterung des Körpers: beide health150/agi2/vita3/wis2, Beschreibung nennt Wisdom1. Erwachen ist eigener Low-Health-Passivskill (unter30%HP,1% Schadensreduktion pro Level), nicht mit Expansion gleichsetzen.

DB Energie des Geistes (nr74) ist passiv matk4/mdef6; neue Liste Macht des Geistes ID75 hat faith2/int2/vic2/wis1. DB Energie des Körpers (nr75) ist aktiv patk20/pdef60,300s,Text nennt Angriff35; neue Liste Macht des Körpers ID76 hat vita2/wis1 ohne Dauer. DB Mentale Erweiterung (nr79) aktiv matk60/300s; neue Liste Mentale Erweiterung ID81 primäre Magieattribute faith3/int3/vic3/wis2. DB Erweiterung der Leidenschaft dex3/1800s,Text auchagi2; neue Liste ID149 str6. Keine automatische Vereinigung aufgrund von Namensähnlichkeit.

Elementare Macht-Skills getrennt behandeln. Direkte Mana-/MDEF-Zuwächse aus Primärwerten erst nach bestätigten Umrechnungen berechnen. Festgestellte Text-/Datenwidersprüche bleiben offen; Zahlen nicht als bestätigte Implementierung übernehmen.

## Einzelprüfung der Skills begonnen

Vergleich für alle 240 Quelldefinitionen in data/skill-review.json vorbereitet, mit Rohwerten, Datenbankkandidat, numerischen Unterschieden, Klassen-, Beschreibungs- und Namensänderungen sowie offenem Entscheidungsfeld. 80 eindeutige Namenskandidaten haben Unterschiede bei explizit vorhandenen numerischen Quellfeldern. Nicht ausgefüllte Quellfelder bleiben unbekannt; keine automatische Löschung vorhandener DB-Werte. Noch nichts angewendet.

Erster Skill Erleuchtung: In Liste und Datenbank MaxSkillLv20, Intelligence+1 und Wisdom+1; numerische Werte stimmen überein. Englische Schreibweise in neuer Liste Enlightenment, DB Enlightment. Klassenzuordnung unterscheidet sich; Zugehörigkeit unter neuer Level-10-Klassenwahl und Aurora-Ritter noch festlegen. Keine doppelte neue Skilldefinition erzeugen.

## Drei gemeinsame Klassenskills gekennzeichnet

Erleuchtung/Enlightenment (Aurora), aktueller DB-Eintrag Überleben/Survive (Umbra) und Adaption/Adaptation (Human) als isClassCore=true und unlockPhase=race gekennzeichnet. allowedRaces explizit gespeichert. Vorhandene Werte unverändert; die Zuordnung wird erst in späterer Charakter-/Skillbaumlogik wirksam.

Echte Kollision: Gewünschter Name Überlebenswille/Will to Survive ist bereits von DB-nr114 belegt, einem anderen passiven situativen Skill (+15 Vita,+3 Strength,12s Dauer,30s CD,maxLv5). Umbra-Grundskill DB-nr2 hat str1/agi1,maxLv20. Keine Zusammenführung; Umbenennung zurückgestellt, beide Einträge erhalten. Seedquelle synchronisiert, damit Erleuchtung nach Namenskorrektur nicht erneut unter altem Namen angelegt wird. Namensentscheidung für zwei unterschiedliche Skills angefragt.

### Namensentscheidung zum Umbra Grundskill

Nutzer bestätigt: Grundskill künftig Überlebenswille/Will to Survive; separaten situativen Skill DB-nr114 später anders benennen. Aktuelle DB-Namen bleiben bis zur abgestimmten Umbenennung beider Einträge erhalten, da Namen eindeutig indiziert sind. Zahlenwerte und IDs nicht zusammenführen. Präferenz im Skillreview gespeichert.

## Zwei mehrdeutige Geistes Skillzuordnungen entschieden

Nutzer bestätigt Quelldefinition Erweiterung des Geistes auf DB-nr44, vier Attribute faith/int/vic/wis jeweils3, als aktiver Buff mit300s Dauer. Dauer/Aktivierung gespeichert und zurückgelesen. Cooldown, Kosten und Levelskalierung noch offen; keine neuen Zahlen dafür erfunden. Bestehende Beschreibungen/DMG-Typ noch im Gesamtabgleich prüfen, da sie zuvor einen Passivskill beschrieben. Separater DB-nr79 Mentale Erweiterung mit matk60 bleibt erhalten.

Nutzer bestätigt Quelle Macht des Geistes auf DB-nr225: Gruppenbuff für magische Verteidigung, mdef18,1800s. Bestehende Definition behalten. Separater DB-nr74 Energie des Geistes mit matk4/mdef6 bleibt erhalten. Beide Namensmehrdeutigkeiten im Skillreview manuell aufgelöst; Zahlen können später bewusst gebalanced werden.

## Beschreibungen geprüft und eindeutige Texte korrigiert

Alle237 DB-Skills haben DE-/EN-Beschreibungen; aktuelle SkillList enthält108 Texte und132 Lücken. Bestehende DB-Texte bei Quelllücken behalten. 43 eindeutige Beschreibungspaare überarbeitet, atomar in Atlas gespeichert und alle43 zurückgelesen. Nur description_de/description_eng geändert, keine Namen, Klassen oder Zahlen. Gedankestrichfreie Sätze, konkrete Spielhandlungen erhalten. Source-Overrides mit Wirkungsfingerprint verhindern, dass nach später geänderten Werten alte Beschreibungen ungeprüft angewendet werden.

33 große Widersprüche unverändert in docs/skill-description-review.md und data/skill-description-review.json aufgeführt. Zahlen/Prozente, Zielgruppen, Voraussetzungen oder Dauer nicht erfunden. Bekannte Spezialmechaniken werden nicht allein wegen fehlender skalarer Felder gelöscht. Nächster Review kann diese Tabelle der Reihe nach bearbeiten.

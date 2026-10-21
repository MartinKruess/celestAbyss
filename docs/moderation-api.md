# Moderation und Aufbewahrung

Die Chatmoderation verwendet aktive, abgestimmte Einträge aus moderationRules. Ungeklärte Entwürfe bleiben inaktiv. Nach Änderungen werden Regeln innerhalb von höchstens 30 Sekunden neu geladen. global gilt unabhängig von der eingestellten Sprache; language beschränkt eine Regel auf die Spracheinstellung. Eine globale Hausregel kann nicht durch Umschalten der Spielsprache umgangen werden.

## Entscheidungen vor Zustellung

- allow: Nachricht unverändert speichern und verteilen.
- mask: erkannte Originaltextstellen durch *** ersetzen, internen Treffer speichern und nur den bearbeiteten Text öffentlich ausliefern.
- block: nicht im öffentlichen Chat speichern, Systemfall anlegen und nur dem Absender blocked melden.
- hold: nicht zustellen, geschützten Fall anlegen und dem Absender held melden.

Die lokale Kontextprüfung ist bewusst eng begrenzt und keine KI. Einige klare Spiel-/Frustbezüge können freigegeben werden; unklare Fälle bleiben zurückgehalten. Fehler oder ein Zwei-Sekunden-Timeout führen ebenfalls zu hold. Kontextprüfungen stehen außerhalb der globalen Veröffentlichungswarteschlange, damit andere Spieler weiter schreiben können. Höchstens 64 Prüfungen laufen gleichzeitig; bei Überlastung folgt MODERATION_BUSY ohne Zustellung.

Vorhandene Modelle werden nicht automatisch für vermeintlich sichere vollständige Sprach- oder Absichtserkennung ausgegeben. Konkrete Grenzfälle und neue Wörter benötigen weitere Tests. Varianten werden per bekannten Regelausdruck verglichen: Groß-/Kleinschreibung, Unicode-Kompatibilitätsformen, bestimmte Zahlenersetzungen, Dollarzeichen und Trennzeichen. Wortgrenzen verhindern Silbentreffer; Originaltextpositionen berücksichtigen auch Emojis.

blocked beziehungsweise held enthält requestID, clientMessageID, caseID und einen Hinweis. Für Wiederholungen dieselbe clientMessageID und denselben Originaltext verwenden. Dadurch entstehen keine zusätzlichen Fälle. Ein maskierter öffentlicher Verlauf enthält niemals den Originaltext.

## Spielermeldung

```json
{"type":"report","requestID":"report1","channel":"global","messageID":"24_HEX_CHARACTERS","reason":"Begründung"}
```

Der Zielbeitrag muss noch zu den aktuellen 50 sichtbaren Nachrichten gehören. Kein Abruf fremder Archive über Nachrichtennummern. Berichtgrund maximal 500 Zeichen. Höchstens fünf Meldungen je Account und Minute, auch über mehrere Verbindungen gemeinsam.

Antwort reported enthält caseID und duplicate. Ein Account meldet denselben Fall nur einmal. Verschiedene Spielerberichte werden zu einem Fall je Nachricht zusammengeführt. Meldungen allein bewirken keinen Ban.

Der geschützte Snapshot enthält bis zu 50 ursprüngliche Nachrichten bis einschließlich des Zielbeitrags. Der Backend-Speicher ist die Quelle; ein Client kann keine angeblichen Gesprächsbelege einschicken. Blockierte oder zurückgehaltene Beiträge sind nicht öffentlich; ihre Systemfälle enthalten bis zu 49 vorherige Beiträge plus den betroffenen Originaltext. Die automatische Analyse erhält bei Bedarf die letzten fünf Nachrichten als Kontext.

## Geschützte REST Bearbeitung

Alle Endpunkte benötigen einen gültigen Bearer-Access-Token und eine aktuelle Rolle moderator oder admin aus dem Account. Registrierung akzeptiert keine selbstgewählte Rolle. Rollen müssen bewusst durch einen berechtigten Betreiber vergeben werden. Es gibt noch keine Website-Oberfläche.

- GET /moderation/cases: maximal 50 Fälle, einschließlich privatem Original und Snapshot. Nächste Seite über before mit einer Fall-ID.
- POST /moderation/cases/:id/resolve: decision und eine Begründung note mit 1 bis 1000 Zeichen.
- POST /moderation/cases/:id/legal-hold: nur admin; enabled und begründende note.

Für held sind release oder block zulässig. Für open sind dismiss oder confirm zulässig. Jede Bearbeitung protokolliert Akteur, Aktion, Zeit und Begründung. Bereits bearbeitete Fälle können nicht erneut frei entschieden werden.

release gibt den noch nicht abgelaufenen Sendeversuch frei. Verbundene Geräte des Absenders erhalten moderation-result mit status released. Der Client sendet danach dieselbe clientMessageID und den ursprünglichen Text erneut; dann erfolgt die normale Speicherung und Zustellung. Bereits zwingende Maskierungen bleiben bei der Freigabe erhalten. Ohne verbundenen Client wird nicht automatisch unter dessen Namen eine neue Nachricht veröffentlicht. Nach Ablauf der 24-Stunden-Sendeaufbewahrung kann ein alter Beitrag nicht mehr freigegeben werden; der Fall bleibt trotzdem bearbeitbar.

Keine automatische Kontosperre oder Chatsperre wird aus einem Fall abgeleitet. Sanktionen sind ein späterer eigener, autorisierter Ablauf.

## Fristen

Normale Chatnachrichten und Moderationsversuche erhalten expiresAt nach 24 Stunden. Spielerabfragen schließen abgelaufene Nachrichten sofort aus. MongoDB-TTL-Indizes räumen physische Daten zeitversetzt auf. Der Startablauf ergänzt fehlende Ablaufdaten älterer Chatnachrichten anhand sentAt.

Offene und gehaltene Fälle laufen zunächst nach 30 Tagen ab. Bestätigte, blockierte oder freigegebene Fälle nach der Bearbeitung nach 90 Tagen, verworfene Fälle nach einem Tag. Dies sind konfigurierbare Produktregeln im Code, keine behaupteten gesetzlichen Mindestfristen. Vor öffentlichem Betrieb Fristen und Bearbeitungsrückstau erneut prüfen.

Ein Sweeper löscht alle 60 Sekunden höchstens 500 abgelaufene Fälle und deren Spielerberichte transaktional. legalHold verhindert die Löschung; Setzen und Aufheben erfordern Administratorrechte und werden protokolliert. Geschützte Snapshots sind unabhängig vom 24-Stunden-Chatverlauf.

## Prüfung und Betrieb

- npm test: komplette datenbankfreie Suite, einschließlich über 100 unterschiedlicher Satzbeispiele und lokaler WebSocket-Tests.
- npm run test:db-moderation: Atlas-Prüfung mit eigens erzeugten Testaccounts, Regeln, Nachrichten und Fällen; diese Daten werden entfernt.
- npm run moderation:activate: nur in celestabyss_dev, aktiviert bereits abgestimmte Regeln; ungeklärte Entwürfe bleiben aus.

Die erste Aktivierung betraf 36 abgestimmte Einträge, darunter explizite Freigaben. Das bedeutet nicht 36 verschiedene Sperrwörter. Englisch ist weiterhin nur teilweise abgestimmt. Multiplayer-Instanzverteilung und die Website für Moderatoren folgen später.

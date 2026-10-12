# Celest Abyss Backend Plan

Stand: 12. Oktober 2026. Dieses Dokument hält Anforderungen, vorgeschlagene Architektur und die Arbeitsreihenfolge für das MMORPG fest. Die Umsetzung erfolgt schrittweise; die Unreal-Anbindung folgt nach unabhängig testbaren Backend-Schnittstellen.

## Vereinbarte Anforderungen

- Installierbarer Unreal-Client und Unreal Dedicated Server für die Spielsimulation.
- Node-Backend mit REST und WebSockets sowie dauerhafter Datenbank.
- Gemeinsamer Account für Registrierung auf der Webseite und Login auf Webseite und im Spiel. Später zusätzlich Steam-Anmeldung ohne separate Registrierung.
- Charakterfortschritt einschließlich Level, Erfahrung, Quests, Position, Inventar, Ausrüstung und Lager dauerhaft speichern. Items über IDs referenzieren.
- Asynchrone World Saves alle 5 bis 10 Minuten; zusätzliche Saves bei wichtigen Ereignissen wie World-Boss-Abschluss sowie bei Logout und geordnetem Herunterfahren. Ziel: höchstens 10 Minuten verlorener Fortschritt bei Spielserverausfall.
- Serverübergreifendes Auktionshaus: einstellen, kaufen, eigene Angebote abbrechen, Angebote anzeigen und suchen, Filter, bis zu 20 Favoriten. Bedeutung einer separaten Löschfunktion noch klären.
- Chat: global, lokal im vorgesehenen Radius von etwa 100 Metern, Gruppe, Allianz und Privatnachrichten; weitere Räume später möglich. All-Chat als gemeinsame Ansicht noch bestätigen.
- Freundesliste und Online-Status.
- Administration mit zeitlich begrenzten und permanenten Bans.
- Größenordnung für Planung und Lasttests: 10.000 bis 50.000 Spieler. Gleichzeitig online, pro Welt und insgesamt noch unterscheiden.
- Schnelles Testen ohne wiederholte manuelle Anmeldung soll im Entwicklungsbetrieb möglich bleiben.

## Vorgeschlagene Zuständigkeiten

Der Dedicated Server entscheidet über Bewegung, Kampf, räumliche Nähe, verdienten Loot und Spielprogression. Das Backend speichert Ergebnisse und verwaltet Accounts, dauerhafte Daten, Auktionshaus und soziale Funktionen. Clients fragen Aktionen an; sie bestimmen keine verbindlichen Belohnungen, Guthaben oder Besitzstände.

Für Inventar, Währung und Crafting ist die genaue Grenze noch offen. Vor ihrer Implementierung muss für jede Änderung klar sein, wer sie entscheiden und speichern darf. Ein periodischer Abgleich allein verhindert keine konkurrierenden Änderungen.

## Regeln für zuverlässige Speicherung

- Regelmäßige Checkpoints für Welt und gewöhnlichen Charakterfortschritt; kritische Wirtschaftsänderungen sofort dauerhaft speichern.
- Ein Auktionshausvorgang muss nicht die gesamte Welt speichern. Geld, Angebot und Itembesitz müssen zusammen konsistent geändert werden.
- Eingestellte Items werden bis Verkauf, Ablauf oder Abbruch verwahrt und sind nicht mehr im Spiel verfügbar.
- Eindeutige Item-Instanz-IDs getrennt von IDs der Itemvorlagen.
- Versionsprüfung verhindert, dass alte World Saves neuere Käufe oder Inventaränderungen überschreiben.
- Eindeutige Vorgangs-IDs verhindern doppelte Käufe oder Belohnungen bei wiederholten Anfragen.
- Speichern erst nach dauerhafter Speicherung bestätigen; Fehler, Wiederholungen und aufgestaute Saves sichtbar machen.
- Die Grenze von zehn Minuten ist ein Betriebsziel, keine automatische Garantie durch den Timer.
- Charakterzustände können zusammen übertragen werden. Account, Charakter, Inventar, Lager und Wirtschaftsdaten werden nach Konsistenz- und Zugriffsmustern modelliert; kein pauschales Überschreiben eines riesigen Objekts.
- Serverwechsel und gleichzeitige Charakteranmeldungen brauchen Regeln für die aktive Sitzung und Schreibberechtigung.

## Auktionshaus

Zusätzlich zu den genannten Spieleraktionen sind Angebotsablauf, Zustellung an ausgeloggte Spieler, Rückgabe unverkaufter Items und Nachvollziehbarkeit abgeschlossener Vorgänge vorzusehen. Gebühren, Laufzeiten, Limits, Teilkäufe und Zustellverfahren sind noch offen.

Suche, Filter, Sortierung und Seiteneinteilung gehören für den gesamten Angebotsbestand ins Backend. Lokale Sortierung in Unreal erfasst sonst nur die bereits geladene Seite. Favoritenlimit von 20 serverseitig prüfen; Bezug auf Angebote oder Itemvorlagen noch festlegen.

## Chat und Online Status

Zunächst JSON als vorgeschlagenes Transportformat; binäre Formate erst anhand von Messungen und Unreal-Kompatibilität bewerten. Eine Nachricht kann einmal serialisiert werden, muss aber über jede berechtigte Client-Verbindung übertragen werden. Beispielannahme: 10 globale Nachrichten pro Sekunde bei 50.000 Empfängern ergeben 500.000 Zustellungen pro Sekunde. Das ist keine gemessene Projektlast.

Kanalmitgliedschaften, Nachrichtenlimits, Größenlimits, begrenzte Sendepuffer, langsame Clients und Verbindungsabbrüche berücksichtigen. Der Dedicated Server kann die Empfänger des lokalen Chats bestimmen. Ob Clients direkt mit Node verbunden sind oder Nachrichten über Dedicated Server erhalten, ist offen. Weiterleitung über Dedicated Server verschiebt die Verteilungslast und entlastet diese nicht vollständig.

Online-Status über aktive Sitzungen und Heartbeats verwalten, einschließlich unerwarteter Abbrüche. Aufbewahrung von Chatverläufen, Offline-Privatnachrichten, Blockieren und Moderation noch entscheiden.

### Chat bei Bedarf und Verlauf

Gewünschtes Verhalten: Beim Öffnen zunächst die letzten 50 berechtigten Nachrichten laden; ältere Nachrichten beim Hochscrollen seitenweise nachladen. Eine getrennte Moderationshistorie soll die Prüfung von Meldungen ermöglichen. Aufbewahrungsdauer und Administratorrechte sind noch festzulegen. Die 50 Nachrichten sind ein Anzeigefenster, keine Grenze für die gespeicherte Historie.

Vorgeschlagene Umsetzung: Live-Empfang pro Kanal abonnieren oder pausieren. Explizit deaktivierter globaler Chat braucht keine laufenden Zustellungen; beim erneuten Öffnen Verlauf nachladen und Live-Empfang fortsetzen. Bloßes automatisches Ausblenden des Fensters muss nicht sofort das Abonnement beenden. Kurze Verzögerung verhindert häufiges An- und Abmelden. Privatnachrichten und gewünschte Gruppenbenachrichtigungen separat behandeln; die WebSocket-Verbindung kann dafür offen bleiben.

Nachrichten erhalten IDs und eine stabile Reihenfolge pro Kanal. Übergang zwischen Verlauf und Live-Empfang ohne Lücken oder doppelte Anzeige gestalten. Historische Zugriffsrechte besonders für lokale, Gruppen- und Allianzkanäle gesondert definieren.

Verteilungslast anhand aktiver Kanalabonnenten berechnen, nicht pauschal anhand aller eingeloggten Spieler. Auch bei dauerhaft aktivem globalem Chat muss das System kontrolliert mit hoher Last umgehen können.

### Wachstum und Kapazitätsgrenzen

Spielerzahlen von 500, 5.000, 30.000 oder 50.000 sind mögliche Entwicklungsszenarien, keine zugesicherte Kapazität. Architektur auf mehrere Backend-Instanzen vorbereiten und anhand wachsender Lasttests dimensionieren; anfangs klein betreiben. Grenzen pro Dedicated Server, Welt und Backend getrennt konfigurieren und anhand gemessener Kapazität setzen. Viele Chatverbindungen belegen nicht die Machbarkeit derselben Spielerzahl in einer Unreal-Spielsimulation.

### Festgelegter Architekturansatz

Zunächst ein modularer Node-Monolith mit getrennten Bereichen für Accounts, Charaktere, Speicherung, Wirtschaft und Kommunikation. Keine Microservices als Voraussetzung. Bei Bedarf mehrere Instanzen derselben Anwendung betreiben; dafür gemeinsame Sitzungsdaten und instanzübergreifende Chatverteilung vorsehen. Einzelne Bereiche erst auslagern, wenn Messungen oder Betriebsanforderungen dies rechtfertigen.

Loginspitzen bei Release oder Neustarts als Lastszenario testen, ohne eine konkrete Gleichzeitigkeit vorauszusetzen. Begrenzte parallele Passwortprüfungen und eine begrenzte Warteschlange als mögliche Schutzmechanismen vorsehen. Login-Warteschlange für Authentifizierung und Weltbeitritts-Warteschlange für volle Spielserver sind unterschiedliche Abläufe. Eine Warteschlange glättet Spitzen, erhöht aber nicht die Verarbeitungskapazität.

Globalchat zunächst global für aktive Abonnenten. Verzögerungen von etwa ein bis zwei Sekunden sind für den Nutzer akzeptabel; zuverlässige Zustellung ist wichtiger als minimale Latenz. Eigene Nachrichten sofort als ausstehend anzeigen und erst nach Serverbestätigung als angenommen markieren; Fehler und Wiederholungen berücksichtigen. Persistierte Nachrichten können nach Verbindungsabbrüchen über IDs nachgeladen werden. Regionale, Kontinent- oder Dungeonkanäle bleiben spätere Optionen; keine automatische Einschränkung des Globalchats für Dungeonspieler festgelegt.

## Arbeitsreihenfolge

### 1 Grundlage und lauffähiger Betrieb

- [ ] Unterstützte Node-Version und Abhängigkeiten prüfen und festlegen.
- [ ] Konfiguration mit Umgebungsvariablen und Beispielkonfiguration ohne Geheimnisse.
- [ ] Datenbankbetrieb wiederherstellen oder lokale Entwicklungsdatenbank bereitstellen; keine alten Daten ungeprüft ändern.
- [ ] App-Erstellung, REST-Start, WebSockets und Datenbankverbindung trennen.
- [ ] Kontrollierter Start, Gesundheitsprüfung und geordnetes Herunterfahren.
- [ ] Einheitliche Fehlerbehandlung, sichere Logs, Eingabe- und Größenlimits.
- [ ] Bekannte Laufzeitfehler gezielt beheben; bestehende Unreal-Verträge berücksichtigen.
- [ ] Unabhängige Backend-Tests und API-Verträge einführen.

### 2 Accounts und Serverzugriff

- [ ] Registrierung, Login, Passwortspeicherung und Sitzungen planen und implementieren.
- [ ] Logout, Sitzungsablauf und Widerruf; Passwortzurücksetzen und E-Mail-Verifizierung entscheiden.
- [ ] Rollen, zeitliche Bans und Permabans.
- [ ] Dedicated Server authentifizieren; Besitz- und Zugriffsprüfungen.
- [ ] Expliziter Entwicklungsmodus für einfache Tests.
- [ ] Steam-Anbindung und Account-Verknüpfung vorbereiten; genaue Umsetzung später.

### 3 Charaktere und Saves

- [ ] Login bis Charakterauswahl, Serverbeitritt und Logout festlegen.
- [ ] Charakter- und Weltmodell sowie aktive Charaktersitzung definieren.
- [ ] Laden, versionierte Saves, Wiederholungen und Bestätigungen.
- [ ] Periodische, ereignisbezogene und abschließende Saves.
- [ ] Ausfall- und Wiederherstellungsszenarien testen.

### 4 Inventar und Wirtschaft

- [ ] Itemvorlagen und Item-Instanzen, Stacks, Ausrüstung und Lager modellieren.
- [ ] Zuständigkeit für Loot, Inventaraktionen und Crafting festlegen.
- [ ] Währung, konsistente Transfers und Schutz vor doppelten Vorgängen.
- [ ] Konkurrenz zwischen Spielserver-Saves und Backend-Transaktionen testen.

### 5 Auktionshaus

- [ ] Einstellen, Suchen, Filtern, Sortieren und Ergebnisseiten.
- [ ] Kaufen, eigene Angebote, Abbrechen und Ablauf.
- [ ] Zustellung, Rückgabe und Verkaufserlöse auch bei Offline-Spielern.
- [ ] Favoriten und Limits.
- [ ] Gleichzeitige Käufe und Wiederholungen testen.

### 6 Kommunikation und Skalierung

- [ ] Chatkanäle, Rechte, Moderation und Verbindungsmanagement.
- [ ] Freunde und Online-Status.
- [ ] Mehrere Backend-Instanzen und instanzübergreifende Nachrichtenverteilung bei Bedarf.
- [ ] Lasttests mit festgelegter Spielerzahl, Nachrichtenrate und Save-Größe.
- [ ] Transportformat nach Messungen bewerten.

### 7 Unreal Integration

- [ ] Tatsächlich verwendetes REST-Plugin und WebSocket-Anbindung identifizieren.
- [ ] Client und Dedicated Server gemeinsam an die API-Verträge anbinden.
- [ ] End-to-End-Abläufe einschließlich Wiederverbindung und Serverausfall testen.

## Offene Entscheidungen für die nächsten Gespräche

1. Login, Charakterauswahl, Weltwahl, Serverbeitritt und Logout im Detail.
2. Anzahl Spieler insgesamt gegenüber Spielern pro Dedicated Server; Welten, Instanzen und Transfers.
3. Aktueller Datenbankstand, Hosting und gewünschte Entwicklungsumgebung.
4. Verbindlicher Eigentümer jeder Art von Inventar-, Währungs- und Fortschrittsänderung.
5. Weltinhalt eines Saves, erwartete Datenmenge und Wiederherstellungsregeln.
6. Auktionshausregeln und Zustellung.
7. Direkte Client-WebSockets oder Weiterleitung über Dedicated Server; Verlauf und Offline-Nachrichten.
8. Bestehende Unreal-Anfrage- und Antwortformate.

## Aktueller Stand

CORS bleibt im Entwicklungsbetrieb offen; Produktion erfordert explizite Website-Origins. CORS ist keine Zugriffskontrolle für Unreal oder Dedicated Server. Auth-Anfragen sind auf 16 KiB begrenzt; JSON- und HTTP-Fehler werden ohne interne Details beantwortet. Login und Registrierung akzeptieren nur typgeprüfte Felder und keine vom Client vorgegebenen MongoDB-Abfrageobjekte. Übrige Endpunkte benötigen weiterhin eigene Validierung, Authentifizierung und Besitzprüfungen.

MongoDB zunächst beibehalten. Die Spielerzahl allein entscheidet nicht über SQL oder MongoDB. Vor der Wirtschaftsimplementierung Datenmodell, Indizes und Transaktionen prüfen; für MongoDB-Transaktionen einen Replica Set vorsehen. Ein späterer SQL-Wechsel ist eine Daten- und Code-Migration mit Tests, kein bloßer Austausch der Verbindungsadresse. Persistenzzugriffe künftig in Repository-Modulen bündeln.

Erster Authentifizierungsschritt umgesetzt: Argon2id statt bcrypt, getrennte Validierung für Registrierung und Login, gefilterte Loginantwort und signierter Access-JWT mit 15 Minuten Laufzeit. Datenbankfreie Tests prüfen Controller, Validierung, echte Hashes und Tokens. Login liefert `token`, `tokenType`, `expiresIn` und `userData` mit interner ID, Benutzername, Sprache und Charakterlimit; Charaktere werden später separat geladen.

Noch keine vollständige Sitzungsverwaltung: Refresh und Logout/Widerruf fehlen. Alte bcrypt-Hashes werden nicht akzeptiert; nach Prüfung des Datenbestands Migration beim Login oder Passwortreset entscheiden. Datenbankintegration bleibt bis zur Wiederherstellung ungeprüft. AES-Feldverschlüsselung ist nicht implementiert; zuerst schützenswerte Felder und Schlüsselverwaltung festlegen. npm meldet bekannte Schwachstellen im vorhandenen Abhängigkeitsbaum; gesondert prüfen und beheben.

Bestandsaufnahme durchgeführt. Verbleibende bekannte Probleme umfassen auskommentierte Routen-Authentifizierung, fehlerhafte Inventaroperationen, fehlende Antworten, nicht abgewartete Speicheroperationen, unvollständige Charaktererstellung und ungeprüfte WebSocket-Nachrichten. Die deaktivierte Anmeldung war bewusst für frühe Entwicklungstests eingerichtet.

Bei jeder Arbeitssitzung abgeschlossene Punkte markieren und neue Entscheidungen hier ergänzen. Nächster geplanter Schritt: Ablauf von Login bis Logout konkretisieren und den Umfang der ersten technischen Stabilisierung festlegen.

## Technische Referenzen

- [MongoDB Transaktionen](https://www.mongodb.com/docs/manual/core/transactions/)
- [WebSocket Bibliothek ws](https://github.com/websockets/ws)
- [Steam Authentifizierung](https://partner.steamgames.com/doc/features/auth)

### REST Zugriffsschutz umgesetzt

Spielrouten verlangen Bearer-JWT und ein bestehendes, nicht gebanntes Accountobjekt. Charakterlesen und -löschen prüfen Charakter-ID und Accountbesitz gemeinsam. Erstellung übernimmt die Account-ID aus der Anmeldung und akzeptiert keine Fortschrittsfelder. Charakterantworten schließen das Accountpasswort aus.

Loginlimit: 10 Anfragen pro IP und Minute; Registrierung: 5 pro IP und Stunde. Limits zählen auch ungültige und erfolgreiche Anfragen und liefern 429 mit Retry-After. Speicher ist begrenzt und lokal: mehrere Instanzen benötigen einen gemeinsamen Store. Reverse-Proxy-Vertrauen muss vor Deployment ausdrücklich konfiguriert werden; Forwarded-Header werden aktuell nicht vertraut.

Unsichere Legacy-Funktionen für Loot, Upgrades, Händler, Kreaturen und Datenimport sind nach Authentifizierung vorläufig mit 503 FEATURE_NOT_READY gesperrt. Bei Inventar, Upgrade und Händler wird zusätzlich der Charakterbesitz geprüft. Itemvorlagen bleiben authentifiziert lesbar. Freischaltung erfordert sichere Spiellogik sowie Server- oder Adminrechte.

Zwölf datenbankfreie Tests bestehen. Datenbank- und Netzwerkabläufe bleiben ungeprüft. WebSocket-Authentifizierung ist separat noch offen; der PlayerData-Prototyp ist kein sicherer Chatdienst. Charaktererstellung und -löschung sind noch nicht transaktional; Konkurrenz- und Ausfallverhalten folgen mit der Datenbankarbeit.

### Neue Atlas Datenbank verbunden

Am 12. Oktober 2026 neue Atlas-Datenbank erfolgreich verbunden und angepingt. 208 Itemvorlagen und 237 Skills importiert und Anzahl anschließend lesend verifiziert. Konfiguration akzeptiert DB_MONGO_URL oder MONGODB_URI. Import mit npm run seed:check ohne Datenbank prüfen; npm run seed fügt fehlende Vorlagen hinzu und überschreibt bestehende nicht. Startausrüstung enthält weiterhin alte Datenbank-IDs, einschließlich einer Kreatur; vor Charaktererstellung neu zuordnen. ACCESS_TOKEN_SECRET muss für echten Login konfiguriert sein. Zwölf JS-Tests bestehen weiterhin.

### Expliziter Datenbankname

Der neue Atlas-Verbindungsstring enthielt keinen Datenbanknamen; der erste Import landete deshalb in test. Konfiguration und Import verwenden nun MONGODB_DB_NAME=celestabyss_dev explizit. Dort wurden 208 Items und 237 Skills erneut importiert. Die Datenbank test wurde nicht gelöscht. Produktivbetrieb muss einen passenden eigenen Namen konfigurieren.

### Registrierung und Login gegen Atlas geprüft

Am 12. Oktober 2026 mit npm run test:db-auth die tatsächlichen HTTP-Auth-Routen auf einem temporären lokalen Port gegen celestabyss_dev geprüft: Registrierung, doppelte Registrierung, Argon2id-Speicherung, falsches Passwort, Login, JWT, geschützter Zugriff und Ban einschließlich Ablehnung eines bereits ausgestellten Tokens. Ban danach zurückgenommen. Test-Player test_bbdff39799fd bleibt mit leerer Charakterliste erhalten; zufälliges Passwort wurde nicht ausgegeben oder gespeichert. ACCESS_TOKEN_SECRET lokal zufällig erzeugt. Datenbanktest ist ausdrücklich separat und nicht Teil von npm test.

Players referenzieren Characters über ObjectIds; Characters enthalten accountID und server (derzeit Standard Asgard). Aktuelle Collections: players, items, skills, characters. Keine servers-Collection vorhanden. Charaktererstellung wegen alter Startitem-IDs weiterhin nicht gegen Datenbank getestet.

### Serverbetrieb stabilisiert

Konfigurationsprüfung vor Start; Datenbankverbindung vor Öffnen der Ports; HOST, PORT und WS_PORT konfigurierbar. Express-App und Laufzeit getrennt, Import der App öffnet keine Verbindungen. /health/live und /health/ready ergänzt. Datenbankausfall oder Herunterfahren sperrt Anfragen mit 503. SIGINT/SIGTERM schließen Netzwerk und MongoDB; Teilstart bei belegtem Port wird zurückgerollt. Ungeschützter WebSocket-Prototyp deaktiviert bis Chat-Authentifizierung umgesetzt ist.

16 datenbankfreie Tests bestehen. Atlas-Laufzeittest ohne Datenänderungen: Start, beide Health-Endpunkte mit 200 und vollständiges Herunterfahren erfolgreich. Kompatible npm-Sicherheitsupdates installiert; ungenutztes file-system entfernt; nodemon durch node --watch ersetzt. npm audit meldet aktuell null bekannte Schwachstellen. Nächster Schritt: Startitem-Zuordnung und konsistente Charaktererstellung.

### Charaktererstellung und Inventar repariert

Entscheidung: vorläufig leeres Startinventar bis zur Überarbeitung der Items. Alte Startitem-IDs entfernt und ungenutzten fehlerhaften Startitem-Helfer gelöscht. Kein Starter-Pet angelegt. Startausrüstung wird später anhand der neuen Itemdaten definiert.

Charakter, leeres Inventar und Accountverknüpfung werden in einer MongoDB-Transaktion erstellt. Charakterlimit wird durch bedingtes Schreiben am Account auch bei konkurrierenden Anfragen eingehalten. Skills werden anhand der Klasse verknüpft; Race wird serverseitig aus der bisherigen Klassenliste bestimmt. Default-Server bleibt Asgard. Inventar bleibt zur Wahrung des aktuellen Datenformats ein Array mit einer Inventar-ID.

Lesen und Löschen verwenden Account-ID und Charakter-ID gemeinsam. Löschen entfernt Charakter, zugehörige Inventare und Accountverweis transaktional. Accountantworten enthalten nur ausdrücklich ausgewählte Felder. Dynamische Item/Kreatur-Verweise im Inventarschema korrigiert. Erstellen liefert HTTP 201 mit characterID und userData; ungültige Klasse 400, Namenskonflikt oder Charakterlimit 409, fremder oder fehlender Charakter 404.

21 datenbankfreie Tests bestehen. npm run test:db-characters gegen Atlas erfolgreich: Erstellung, leeres Inventar, Skills, Besitzerprüfung, serverseitige Defaults, konkurrierendes Limit, doppelte Namen, echtes Rollback bei injiziertem Fehler, Item-Population und Löschung. Die dafür erzeugten Accounts, Charaktere und Inventare wurden wieder entfernt. Der frühere Auth-Testplayer bleibt erhalten.

Nächster geplanter Schritt: vollständige Sitzungsverwaltung mit Refresh, Logout und Widerruf. Spätere Itemüberarbeitung und konfigurierbare Serverauswahl bleiben offen.

### Sitzungsverwaltung umgesetzt

Access-JWT mit Sitzungs-ID und zufälliger Token-ID, 15 Minuten Laufzeit. Persistierte sessions mit Account-ID, Refresh-Hash, absolutem Ablauf nach sieben Tagen und Widerrufszeitpunkt. Refresh-Token separat signiert mit eigener Audience, bei jeder Verwendung atomar ersetzt; Wiederverwendung eines alten signierten Tokens sperrt die Sitzung. Forged Tokens können keine Sitzung sperren. Client muss Refresh serialisieren; verlorene Antworten können erneuten Login erfordern.

POST /user/refresh, /user/logout und /user/logout-all ergänzt. Alle REST-Zugriffe prüfen aktive Sitzung sowie Account/Ban. Logout sperrt auch noch nicht abgelaufene Access-Tokens. Abgelaufene Sessions werden via TTL-Index bereinigt; Ablauf wird zusätzlich in jeder Abfrage geprüft. Auth-Antworten no-store; Refreshlimit 30/IP/Minute. Frühere Tokens ohne sid sind nicht mehr gültig.

24 datenbankfreie Tests bestehen. Atlas-HTTP-Test für Registrierung, Login, Refresh-Rotation, Replay-Widerruf, Logout und Logout-all erfolgreich. Neuer Auth-Testplayer test_0d05f8440d20 bleibt erhalten; dessen Sitzungen sind widerrufen. Charakter-DB-Test erneut erfolgreich, seine temporären Daten entfernt.

Offen: WebSocket-Sitzungen, sicherer Browser-Cookie/CSRF-Vertrag, Passwortreset, E-Mail-Verifizierung, Sitzungsübersicht und serverseitige Fortschrittsspeicherung bei Logout. Itemdaten werden später überarbeitet; Startinventar bleibt leer.

### Nächster Bereich WebSocket Chat

Reihenfolge angepasst: WebSocket-Chat wird vor Itemüberarbeitung, Dedicated-Server-Anbindung und Saves umgesetzt. Globalchat und Privatnachrichten können unabhängig von Unreal und Inventar entwickelt und getestet werden. Zunächst Accountidentität verwenden; Charakteranzeigen später ergänzen.

1. Nachrichtenvertrag und authentifizierte WebSocket-Verbindung einschließlich Ablauf, Logout/Widerruf und Wiederverbindung.
2. Globalchat mit berechtigten Abonnements, Größen- und Ratenlimits, Serverbestätigung sowie stabilen Nachrichten-IDs.
3. Verlauf: letzte 50 Nachrichten, ältere Seiten, lückenfreier Übergang zum Live-Empfang und Moderationsaufbewahrung.
4. Privatnachrichten mit Empfängerrechten und festzulegendem Offline-Verhalten.
5. Gruppen-, Allianz- und lokale Kanäle nach Aufbau verlässlicher Mitgliedschafts- beziehungsweise Ortsinformationen. Lokale Empfänger ermittelt später der Dedicated Server.
6. Chatlasttests und Vorbereitung instanzübergreifender Verteilung nach Bedarf.

Items, Wirtschaft und Welt-Saves bleiben danach auf dem Plan. Unreal muss für den ersten Chatabschnitt noch nicht installiert sein.

### Globalchat umgesetzt

Positions-/PlayerData-Prototyp vollständig ersetzt durch Chat unter /chat. Authentifizierung mit Access-JWT und aktiver Sitzung, erneute Anmeldung nach Refresh, Ablauf und lokale Logout-Signale. Kein Positions-, Gesundheits- oder Bewegungsbroadcast.

Globalchat abonnieren/pausieren, speichern, bestätigen, live verteilen und nachladen. Letzte 50 Nachrichten, ältere Seiten und Catch-up mit stabiler Sequenz. Sequenzvergabe und Speicherung transaktional; Idempotenz anhand accountID/clientMessageID; keine bestätigten Duplikate. Snapshot/Live-Übergang puffert konkurrierende Nachrichten und filtert bereits enthaltene Sequenzen.

JSON-Validierung, Nachrichten- und Befehlslimits, begrenzte Warteschlangen und Puffer, Upgrade-Limits, Origin-Prüfung für Browser, Heartbeat, Ablauf- und Sitzungsprüfungen. Lokale Logout/Logout-all/Refresh-Replay-Ereignisse schließen betroffene Sockets. Periodische Prüfung deckt externe Änderungen ab. Limits und Live-Verteilung sind derzeit pro Backend-Instanz; gemeinsamer Broker folgt bei Mehrinstanzbetrieb.

36 Tests ohne echte Datenbank bestehen. Atlas-Chatprüfung mit echten HTTP-Logins und zwei WebSocket-Clients erfolgreich: persistierte Zustellung, Wiederholung ohne Duplikat, Verlauf, Refresh/erneute Anmeldung, sofortiger Logout-Abbruch und Wiederverbindung. Testdaten anschließend gezielt entfernt. Protokoll in docs/chat-protocol.md dokumentiert.

Nächste Chatfunktionen: Privatnachrichten mit Offline-/Blockierregeln; Gruppen/Allianzen nach Mitgliedschaftsmodell; Lokalchat nach Dedicated-Server-Ortsinformationen. Aufbewahrungsdauer und Moderationszugriff noch festlegen; Nachrichten werden bisher ohne automatische Löschung aufbewahrt. Itemüberarbeitung bleibt separat für später.

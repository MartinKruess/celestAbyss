# Celest Abyss - Backend

## Was Funktioniert

- register (create new Account)
- Login to Account
- create Character with Inventory and Skills
    - Link inventory to Character sometimes ot working
- add Item to inventory
    - isInventoryFull controll
    - stack Items as possible
- buy items
    - currency controll
    - add Item to inventory*


## Was fehlt

- populate Skill- and ItemData to Character

- Link inventory to Character (sometimes...)
- sell and delete item
- add EQ Items to DB
- combine Items
- consume items
- upgrade Items

- SkillData update (completed)
- upgrade Skills

- Spawn controll
- EXP update
## Backend starten

Node.js ab Version 22 verwenden. Die lokale `.env` benötigt `MONGODB_URI` oder `DB_MONGO_URL`, `MONGODB_DB_NAME` und einen zufälligen `ACCESS_TOKEN_SECRET` mit mindestens 32 Bytes. `.env.example` enthält die Konfigurationsnamen; Geheimnisse bleiben außerhalb von Git.

- `npm start`: Konfiguration prüfen, MongoDB verbinden, danach HTTP und WebSocket-Port öffnen.
- `npm run dev`: gleicher Ablauf mit dem eingebauten Node-Watcher.
- `npm test`: Tests ohne echte Datenbank; einige verwenden lokale HTTP-Verbindungen.
- `npm run seed:check`: Item- und Skillvorlagen ohne Datenbank prüfen.
- `npm run seed`: fehlende Vorlagen in die konfigurierte Datenbank importieren.
- `npm run test:db-auth`: expliziter Atlas-Auth-Test; legt einen Test-Player an.
- `npm run test:db-characters`: expliziter Atlas-Test für Charaktere, Inventar, Besitzrechte, parallele Erstellung und Transaktionen; entfernt die dafür erzeugten Testdaten wieder.

Standardwerte: `HOST=127.0.0.1`, `PORT=5600`, `WS_PORT=8080`. Für externen Zugriff HOST bewusst ändern. Produktion benötigt außerdem explizite `CORS_ORIGINS`.

`GET /health/live` bestätigt den laufenden Prozess. `GET /health/ready` liefert 200 bei aktiver Datenbankverbindung, sonst 503. Bei fehlender Bereitschaft werden Spiel- und Auth-Anfragen mit 503 abgewiesen. SIGINT und SIGTERM stoppen neue Verbindungen und schließen HTTP, WebSockets und Datenbank; nach fünf Sekunden werden verbleibende Netzwerkverbindungen beendet.

Der Positions-Prototyp ist entfernt. WebSockets unter /chat verwenden jetzt authentifizierte Sitzungen und den Globalchat; der Vertrag steht in docs/chat-protocol.md.

## Sitzungen und Auth API

Login unter `POST /user/login` liefert `token`, `tokenType`, `expiresIn` (900 Sekunden), `refreshToken`, `refreshExpiresAt` und gefilterte `userData`. Access-Tokens enthalten Account-ID und Sitzungs-ID. Alte Tokens ohne Sitzungs-ID werden abgewiesen; nach dem Update ist ein erneuter Login nötig.

`POST /user/refresh` erwartet `{ "refreshToken": "..." }`. Die Antwort enthält einen neuen Access- und Refresh-Token. Der Client muss den alten Refresh-Token ersetzen und Refresh-Anfragen serialisieren. Wiederverwendung eines früheren, gültig signierten Refresh-Tokens sperrt die gesamte betroffene Sitzung, auch bei parallelen Refresh-Anfragen. Bei verlorener Refresh-Antwort kann deshalb ein erneuter Login nötig werden.

`POST /user/logout` mit Bearer-Access-Token sperrt die aktuelle Sitzung. `POST /user/logout-all` sperrt alle Sitzungen dieses Accounts. Beide liefern 204 ohne Antwortkörper. Nach Logout sind Access- und Refresh-Tokens dieser Sitzungen unbrauchbar; andere Geräte bleiben bei einfachem Logout angemeldet.

Sitzungen laufen nach sieben Tagen absolut ab; Refresh verlängert diese Grenze nicht. Die `sessions`-Collection speichert nur einen SHA-256-Hash des Refresh-Tokens. Ein TTL-Index räumt abgelaufene Sitzungen auf; Zugriffsprüfungen prüfen den Ablauf unabhängig vom verzögerten TTL-Aufräumen. Auth-Antworten tragen `Cache-Control: no-store`. Refresh ist auf 30 Anfragen pro IP und Minute begrenzt.

Der aktuelle Vertrag ist für den nativen Client ausgelegt. Die spätere Webseite benötigt einen eigenen sicheren Umgang mit Refresh-Tokens, etwa HttpOnly-Cookies samt passender CSRF-Prüfung; dies ist noch nicht implementiert. WebSocket-Anmeldung und Globalchat sind umgesetzt; siehe docs/chat-protocol.md. Logout speichert noch keinen Spielprogress: den abschließenden Charakter-Save muss die spätere Dedicated-Server-Anbindung koordinieren.

## Globalchat

Globalchat mit gespeicherten Nachrichten, Abonnements, einem strikt auf die neuesten 50 Nachrichten begrenzten Spieler-Verlauf und Wiederverbindung ist implementiert. Privat-, Gruppen-, Allianz- und lokale Kanäle folgen separat. Siehe [Chatprotokoll](docs/chat-protocol.md).

`npm run test:db-chat` prüft Login, WebSockets, Speicherung, Wiederholungen, Verlauf, Logout und Wiederverbindung gegen die Entwicklungsdatenbank und entfernt die dafür erzeugten Testdaten.

## Moderation

Moderation ist jetzt in den Globalchat integriert. Aktive abgestimmte Regeln maskieren oder blockieren Nachrichten; eine lokale konservative Kontextprüfung hält unklare Beiträge für Moderatoren zurück. Es ist keine KI angeschlossen. Spieler können aktuelle Nachrichten melden; geschützte Moderator-Endpunkte bearbeiten Fälle und protokollieren Entscheidungen.

Normale Nachrichten laufen nach 24 Stunden ab. Gemeldete Ausschnitte werden getrennt aufbewahrt; administrative Sicherungen verhindern die Falllöschung. Siehe [Moderationsvertrag](docs/moderation-api.md).

`npm run test:db-moderation` prüft den vollständigen Atlas-Ablauf mit anschließendem Entfernen eigener Testdaten. `npm run moderation:activate` aktiviert ausschließlich abgestimmte Entwürfe in der Entwicklungsdatenbank. Ungeklärte Regeln bleiben inaktiv.

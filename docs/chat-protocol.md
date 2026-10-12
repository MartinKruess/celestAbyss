# Globalchat Protokoll

Der WebSocket-Dienst übernimmt Kommunikation, keine Positions- oder Kampfzustände. Version 1 implementiert den Globalchat unabhängig vom Unreal-Client. Privat-, Gruppen-, Allianz- und lokale Kanäle folgen später mit ihren eigenen Zugriffsregeln.

## Verbindung und Anmeldung

Entwicklung: `ws://127.0.0.1:8080/chat` mit dem konfigurierten WS_PORT. Produktion benötigt WSS am vorgeschalteten TLS-Endpunkt. Tokens stehen ausschließlich in der Auth-Nachricht, niemals in der URL.

Der Server sendet `hello` mit `version: 1` und `authTimeoutMs: 5000`. Innerhalb dieser Zeit sendet der Client einen Access-Token aus dem REST-Login:

```json
{"version":1,"type":"auth","requestID":"auth1","token":"ACCESS_TOKEN"}
```

Erfolg: `authenticated` mit requestID, accountID und expiresAt. Erst danach sind Chataktionen möglich. Refresh-Tokens werden nicht als WebSocket-Anmeldung akzeptiert. Jede Clientanfrage benötigt eine requestID aus 1 bis 64 Buchstaben, Ziffern, Unterstrichen oder Bindestrichen. Antworten enthalten version 1 und die jeweilige requestID; spontane Ereignisse haben keine requestID.

Vor Ablauf des Access-Tokens kann der Client via REST refreshen und den neuen Access-Token mit einer weiteren Auth-Nachricht senden. Account und Sitzung müssen gleich bleiben; ein Wechsel erfordert eine neue Verbindung. Abonnements bleiben bei erfolgreicher erneuter Anmeldung erhalten.

Access-Ablauf und lokaler Logout beziehungsweise Logout-all schließen die Verbindung mit Code 4001. Sitzungs- und Banstatus werden vor Aktionen und zusätzlich periodisch geprüft, bei stillen Verbindungen zunächst nach 30 bis 60 Sekunden, anschließend alle 30 Sekunden. Revocation-Ereignisse werden aktuell innerhalb einer Backend-Instanz verteilt.

## Kanal abonnieren und pausieren

```json
{"type":"subscribe","requestID":"sub1","channel":"global"}
```

Antwort: `subscribed` mit channel, messages, highWater, hasMore und gegebenenfalls nextBefore. messages enthält maximal die letzten 50 Nachrichten in aufsteigender Reihenfolge. highWater ist der oberste gespeicherte Sequenzstand des Snapshots. Nachrichten, die während des Ladens entstehen, werden gepuffert und nach der Antwort als Live-Ereignisse zugestellt, soweit sie nicht schon im Snapshot enthalten sind.

```json
{"type":"unsubscribe","requestID":"unsub1","channel":"global"}
```

Nach `unsubscribed` kommen keine neuen Globalchat-Ereignisse auf dieser Verbindung an. Die Verbindung bleibt für andere Aktionen offen. Wiederholtes subscribe liefert einen neuen Snapshot; der Client dedupliziert bereits angezeigte Nachrichten anhand ihrer id.

## Nachricht senden

```json
{"type":"send","requestID":"send1","channel":"global","clientMessageID":"msg_123","text":"Hallo zusammen!"}
```

Ein sendendes Konto muss angemeldet sein und den Globalchat abonniert haben. Text wird außen getrimmt und muss 1 bis 500 Unicode-Codepoints lang sein; bestimmte Steuerzeichen sind verboten. Zeilenumbrüche sind erlaubt. Sender-ID, Sendername, Uhrzeit und Sequenz bestimmt das Backend; vom Client vorgegebene Senderfelder werden nicht verwendet.

Nach dauerhafter Speicherung antwortet der Server mit `sent`, requestID, duplicate und message. Alle aktiven Abonnenten einschließlich des Absenders erhalten außerdem ein `message`-Ereignis mit derselben message. Der Client verbindet seine optimistische Anzeige mit clientMessageID und dedupliziert bestätigte Nachrichten anhand der serverseitigen id.

Eine message enthält:

```json
{
  "id":"MONGODB_MESSAGE_ID",
  "channel":"global",
  "sequence":123,
  "sender":{"accountID":"ACCOUNT_ID","username":"Player"},
  "clientMessageID":"msg_123",
  "text":"Hallo zusammen!",
  "sentAt":"2026-10-12T12:00:00.000Z"
}
```

Für Wiederholungen derselben Nachricht bleibt clientMessageID gleich, requestID darf wechseln. Wiederholung mit gleichem Text liefert die bestehende Nachricht mit duplicate true und erzeugt keine neue Live-Verteilung. Wiederholung mit verändertem Text liefert MESSAGE_ID_CONFLICT. Wiederholungen zählen zum Sendelimit. Ohne Bestätigung gilt eine Nachricht nicht als angenommen; nach einem Netzwerkfehler kann die gleiche clientMessageID erneut gesendet werden.

Nachrichten sind Text. Browserclients müssen sie als Text darstellen und dürfen sie nicht als HTML ausführen.

## Verlauf und Wiederverbindung

Ältere Nachrichten laden:

```json
{"type":"history","requestID":"history1","channel":"global","before":123,"limit":50}
```

Die Antwort `history` enthält messages aufsteigend, highWater, hasMore und gegebenenfalls nextBefore. before ist exklusiv; nextBefore ist der Cursor für die nächste ältere Seite. limit beträgt 1 bis 50. Verlauf ist auch ohne aktives Live-Abonnement abrufbar, aber immer nur mit gültiger Anmeldung.

Für Wiederverbindung merkt sich der Client seine zuletzt verarbeitete Sequenz. Nach Anmeldung abonniert er zuerst den Kanal und merkt sich dessen highWater. Anschließend lädt er die fehlenden Nachrichten mit after und diesem festen through:

```json
{"type":"history","requestID":"catchup1","channel":"global","after":100,"through":150,"limit":50}
```

after ist exklusiv, through inklusiv. Bei hasMore setzt der Client after auf nextAfter und behält through bei. before und after dürfen nicht gemeinsam verwendet werden. Live-Nachrichten können während des Nachladens eintreffen; der Client puffert beziehungsweise sortiert sie und dedupliziert anhand von id. Für einen durchgehend vollständigen Verlauf darf er seinen Catch-up-Cursor erst nach Abschluss des Nachladens bis through vorziehen.

## Grenzen und Fehler

- 16 KiB maximaler WebSocket-Payload; nur JSON-Textframes.
- Authentifizierung innerhalb von fünf Sekunden.
- Fünf Sendeanfragen pro Konto innerhalb von zehn Sekunden, über dessen Verbindungen gemeinsam.
- 60 Befehle je Verbindung und Minute; höchstens 16 wartende Befehle.
- 60 Upgrade-Versuche pro IP und Minute; höchstens zehn gleichzeitige Verbindungen je IP. Reverse-Proxy-Adressen werden derzeit nicht vertraut.
- Höchstens 1.000 wartende globale Schreibvorgänge; danach CHAT_BUSY.
- Begrenzte Sendepuffer und maximal 100 gepufferte Nachrichten während Snapshot-Ladens. Überlastete Clients werden mit Code 1013 geschlossen und laden nach Wiederverbindung den Verlauf.
- Heartbeat alle 30 Sekunden; nicht antwortende Clients werden entfernt.

Operationen antworten bei Fehlern mit `type: error` und einem stabilen error-Code, etwa AUTH_REQUIRED, UNKNOWN_CHANNEL, INVALID_MESSAGE, INVALID_CURSOR, RATE_LIMITED, NOT_SUBSCRIBED oder CHAT_OPERATION_FAILED. Fehlerhafte nicht zuordenbare Frames erhalten keine requestID. Interne Fehlermeldungen und Tokens werden nicht ausgegeben.

## Speicherung und Betrieb

Chatnachrichten werden in chatmessages gespeichert; chatcounters enthält den globalen Sequenzzähler. Sequenzvergabe und Nachrichtenspeicherung erfolgen in derselben MongoDB-Transaktion. Indizes sichern Reihenfolge und eindeutige Nachrichten-IDs pro Absender. Erfolgreiches Speichern bedeutet nicht, dass jeder Empfänger die Nachricht bereits angezeigt hat; Clients können persistierte Nachrichten nachladen.

Die letzten 50 Nachrichten sind nur das Anzeigefenster. Die gesamte Historie bleibt vorläufig gespeichert; vor öffentlichem Betrieb sind Aufbewahrungsdauer und Moderationsrechte festzulegen. Es gibt noch keine automatische Löschung oder Moderationsoberfläche.

Live-Verteilung, lokale Logout-Ereignisse und Limits gelten aktuell für eine Backend-Instanz. Mehrere Instanzen benötigen gemeinsame Nachrichtenverteilung, Widerrufssignale und Limit-Speicher. Eine Kapazität für 50.000 Verbindungen ist noch nicht gemessen.

## Prüfung

`npm test` prüft das Protokoll, die Anmeldung und echte lokale WebSocket-Verbindungen mit einem ersetzten Datenspeicher. `npm run test:db-chat` prüft den vollständigen Ablauf gegen celestabyss_dev und entfernt seine Testaccounts, Sitzungen und Nachrichten anschließend. Der Sequenzzähler wird nicht zurückgesetzt.

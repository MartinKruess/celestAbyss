# Aktive Skills – Ritualist und Heiler

Aktueller Datenbank-Katalog nach Rückkehr von Energieschlag auf 0,6 s Maximal-Cooldown, Castzeit 0,15 s. Vorbereitung der Einzelprüfung: zuerst Ritualist, danach Heiler. Grundwert = Stufe 1, Maximalwert = höchste Skillstufe. Kosten, Cooldown und Castzeit beziehen sich auf die Maximalstufe. P-/M-Werte sind Skill-Grundwerte, nicht vollständiger Anwendungsschaden; Charakterangriff, Mehrfachtreffer und Feldticks kommen gemäß Beschreibung hinzu. Keine Balanceänderungen außer dem bestätigten Cooldown.

## Ritualist

| Skill | Typ | Stufen | P-Grundwert | P-Maximalwert | M-Grundwert | M-Maximalwert | Kosten maximal | Cooldown s | Castzeit s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- | ---: | ---: |
| Feuer der Verdammten | spell | 5 | 0 | 0 | 273 | 721 | 503 mana (flat, maxMana) | 51 | 0,4 |
| Feuerball | spell | 20 | 0 | 0 | 63 | 614 | 149 mana (flat, maxMana) | 4 | 0,1 |
| Lebenssauger | spell | 10 | 0 | 0 | 112 | 499 | 354 mana (flat, maxMana) | 43 | 0,15 |
| Mentale Erweiterung | selfbuff | 10 | 0 | 0 | 60 | 150 | 190 mana (flat, maxMana) | 60 | 0,3 |
| Schrei der Unterwelt | spell | 3 | 0 | 0 | 666 | 666 | 0,25 health (fraction, maxHealth) | 80 | 0,1 |
| Schwäche des Fleisches | spell | 10 | 0 | 0 | 0 | 0 | 95 health (flat, maxHealth); 281 mana (flat, maxMana) | 55 | 0,1 |
| Seelenfessel | spell | 15 | 0 | 0 | 97 | 237 | 95 mana (flat, maxMana); 1 soulFragments (flat, currentSoulFragments) | 90 | 0,1 |
| Seelenqual | spell | 10 | 0 | 0 | 47 | 168 | 67 mana (flat, maxMana) | 0,2 | 0 |
| Seelenernte | spell | 5 | 0 | 0 | 381 | 1.013 | 408 mana (flat, maxMana) | 180 | 0,3 |
| Sturm des Feuers | spell | 10 | 0 | 0 | 113 | 734 | 181 mana (flat, maxMana) | 102 | 0,2 |
| Tamen | spell | 1 | 0 | 0 | 0 | 0 | 100 mana (flat, maxMana) | 60 | 3 |
| Beschwören | spell | 1 | 0 | 0 | 0 | 0 | 5 mana (flat, maxMana) | 5 | 1 |
| Zurückrufen | spell | 1 | 0 | 0 | 0 | 0 | 5 mana (flat, maxMana) | 5 | 0 |
| Geist des Feuers | selfbuff | 10 | 0 | 0 | 0 | 0 | 67 mana (flat, maxMana) | 60 | 0,2 |
| Seelenplage | spell | 10 | 0 | 0 | 171 | 693 | 30 soulFragments (flat, currentSoulFragments) | 76 | 0,3 |
| Dunkler Impuls | spell | 10 | 0 | 0 | 42 | 249 | 65 mana (flat, maxMana) | 5 | 0,1 |
| Meteoritenschauer | spell | 3 | 543 | 2.172 | 0 | 0 | 2.608 mana (flat, maxMana) | 200 | 0,8 |
| Teufelspakt | selfbuff | 3 | 0 | 0 | 0 | 0 | 111 mana (flat, maxMana) | 60 | 0,3 |
| Morrak´s Meister | Beschwörung / passives Upgrade | 1 | 0 | 0 | 0 | 0 | Kein Mana/Seelenpreis; −500 Max-Leben solange beschworen | 360 | 0,4 |

### Feuer der Verdammten

Erzeugt ein Feld aus bläulich-schwarzen, astral wirkenden Flammen um das anvisierte Ziel, maximale Feldlaufzeit 10 Sekunden. Fläche und Gegnerlimit steigen in Stufen: Stufe 1–2: 3 Meter Durchmesser und bis zu 2 Gegner; Stufe 3–4: 5 Meter Durchmesser und bis zu 4 Gegner; Stufe 5: 7 Meter Durchmesser und bis zu 6 Gegner. Jeder erstmals erfolgreich getroffene Gegner gibt pro Anwendung genau 1 Seelenfragment, unabhängig von späteren Schadensticks und ohne Tötungsvoraussetzung. Das Limit gilt für unterschiedliche Gegner über die gesamte Anwendung, damit durch Zielwechsel nicht mehr als 2/4/6 Seelen gewonnen werden. Weitere Treffer desselben Gegners geben keine zusätzliche Seele. Maximal 6 Seelen auf Stufe 5, begrenzt durch freie Plätze im Reaper-Speicher. Zielauswahl bei mehr Gegnern sowie Mitbewegung des Felds bleiben offen. Initialtreffer bei Sekunde 0 mit vollem berechnetem Initialschaden. Danach Schadensticks bei Sekunde 1,5/3/4,5/6/7,5/9, jeweils 30 Prozent des berechneten Initialschadens (70 Prozent weniger); sechs Folgeticks. Vor weiteren Schadensberechnungen entspricht die gesamte Trefferfolge dem 2,8-Fachen des Initialwerts, falls alle Treffer treffen. Der erste erfolgreiche Treffer verlangsamt um 5 Prozent, jeder weitere erfolgreiche Feldtreffer um einen zusätzlichen Prozentpunkt, maximal 11 Prozent nach sieben Treffern. Verhalten bei Verlassen/Wiedereintritt und genaue Restdauer des Slow-Effekts sind noch zu klären. Magischer Initial-Grundschaden 273 auf Stufe 1 und +112 je weiterer Stufe, auf Stufe 5 721. Mana-Kosten 191 auf Stufe 1, +78 je weiterer Stufe, maximal 503 auf Stufe 5. Cooldown 57 Sekunden und -1,5 je weiterer Stufe, auf Stufe 5 51 Sekunden. Castzeit 0,4 Sekunden. Der frühere Säulenentwurf mit 2 Sekunden Animation ist ersetzt. Historisch +1 Prozent Schaden je zehn Opfer; Definition von Opfern, Grenzen und Bonusbasis sind noch offen. Ein Wechsel dieses Opferbonus zu zusätzlicher Verlangsamung ist nur eine diskutierte Alternative, nicht festgelegt. Zeitpunkt der Feldplatzierung und Verrechnung der Folgeticks mit gegnerischer Verteidigung bleiben offen. Seelengewinn funktioniert auch gegen Spieler im PvP nach denselben Regeln: eine Seele je unterschiedlichem erfolgreich getroffenem Gegner pro Anwendung, begrenzt durch Gegnerlimit und freien Speicher. Übungspuppen geben keine Seelenfragmente; die konkrete Erkennung von Übungszielen wird später serverseitig umgesetzt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Feuerball

Schleudert einen Feuerball auf dein Ziel und verursacht einmalig magischen Schaden. Grundschaden 63 auf Stufe 1, +29 je weiterer Stufe, auf Stufe 20 614. Mana-Kosten 16 auf Stufe 1, +7 je weiterer Stufe, maximal 149 auf Stufe 20. Cooldown Stufen 1–4: 12 Sekunden; 5–9: 10 Sekunden; 10–14: 8 Sekunden; 15–19: 6 Sekunden; Stufe 20: 4 Sekunden. Castzeit 0,1 Sekunden. Vorläufige Flug-/Animationszeit 0,5 Sekunden, keine anhaltende Wirkung oder zusätzlicher Verbrennungs-DoT. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Lebenssauger

Greift einen Gegner einmalig magisch an und heilt den Anwender. Magischer Skill-Grundschaden 112 auf Stufe 1 und +43 je weiterer Stufe, auf Stufe 10 499. Mana 67 auf Stufe 1, gleichmäßig steigend auf 354 auf Stufe 10. Cooldown gleichmäßig von 48 auf 43 Sekunden über zehn Stufen. Castzeit 0,15 Sekunden, vorläufige Animation 0,5 Sekunden, kein Schaden über Zeit. Einmalige Selbstheilung: 35 HP je gelerntem Skilllevel, insgesamt 350 HP auf Stufe 10. Erst auf Stufe 10 zusätzlich 2 Prozent des tatsächlich durch diese Anwendung verursachten Lebensschadens. Beide Komponenten gehören zu derselben Heilung. Beispiele auf Stufe 10: 6000 Schaden heilt 470 HP; 10000 heilt 550 HP; 20000 heilt 750 HP; 100000 heilt 2350 HP. Kein höherer prozentualer Lebensraub und keine automatische prozentuale Steigerung über die Skillstufen. Heil-Auslösung bei verfehltem oder vollständig abgewehrtem Angriff wird noch geklärt.

### Mentale Erweiterung

Erhöht deinen magischen Angriff für 300 Sekunden um 60 auf Skilllevel 1. Je weiterer Stufe steigt der Bonus um 10, bis zu 150 auf Stufe 10. Die Mana-Kosten steigen von 37 um 17 je weiterer Stufe auf 190. Die Castzeit beträgt 0,3 Sekunden. Cooldown 60 Sekunden.

### Schrei der Unterwelt

Opfert 25 Prozent des maximalen Lebens. Nur aktivierbar, wenn das aktuelle Leben strikt über 25 Prozent des Maximal-Lebens liegt. Der dreisekündige Ablauf besteht aus 1 Sekunde Energie sammeln, 1 Sekunde Energie halten und 1 Sekunde Explosion; während dieser drei Sekunden +100 direkte P-Defense und +100 direkte M-Defense auf allen drei Stufen. In der dritten Sekunde wird die Energie mit einem Schrei kreisförmig im Radius von 5 Metern um den Anwender ausgestoßen und trifft alle Gegner dort einmal magisch. Cooldown 90/85/80 Sekunden. Magischer Skill-Schaden: auf allen Stufen 666 Grundschaden, auf Stufe 2 zusätzlich 50 Prozent und auf Stufe 3 zusätzlich 125 Prozent des tatsächlich für diesen Skill geopferten Lebens. Die Lebensanteile ersetzen die 666 nicht. Bei 8000 Max-HP werden 2000 HP geopfert; Skill-Schaden auf Stufe 1/2/3: 666/1666/3166 vor zusätzlichen Charakter- und Schadensberechnungen. Die alte Lebenszahl -25 war kein fixer HP-Abzug und wurde durch strukturierte Kosten ersetzt. Castzeit 0,1 Sekunden vor dem dreisekündigen Energieablauf. Freiwillige Bewegung während des Sammelns und Charakter-M-Angriffsbeitrag sind noch offen. Keine Manakosten im neuen Kostenentwurf. Sichtbarer Aufbau soll Gegner zum Abstandhalten bewegen und dem Anwender kurz Raum zum Reagieren oder Entkommen verschaffen. Die Explosion stößt erfolgreich getroffene Gegner um 1 Meter radial vom Anwender weg. Bossresistenzen, Kollisionsverhalten und weitere Knockback-Regeln werden in der zweiten Runde festgelegt. Der exakte einzelne Trefferzeitpunkt innerhalb der Explosionssekunde wird an die Animation angepasst. Stun und Rückstoß treffen den Anwender weiterhin, unterbrechen jedoch den aktivierten Energieablauf nicht. Gewöhnliche Stopp-Befehle brechen den Ablauf ebenfalls nicht ab. Die Explosion erfolgt um die aktuelle Position des Anwenders bei Freisetzung; ein Rückstoß kann die Gefahrenzone somit verschieben. Tod vor der Freisetzung lässt die Energie verflüchtigen, ohne Todesexplosion; eine bereits freigesetzte Explosion bleibt wirksam. Keine allgemeine Kontrollimmunität, der Skill entfernt keinen Stun.

### Schwäche des Fleisches

Opfert 50 HP auf Stufe 1 und je weiterer Stufe 5 zusätzliche HP, auf Stufe 10 95 HP. Kostet zusätzlich 47 Mana und +26 je weiterer Stufe, auf Stufe 10 281. Belegt einen Gegner für 30 Sekunden mit Schwäche: physische Verteidigung -3 Prozent je gelerntem Skilllevel, maximal -30 Prozent; magische Verteidigung -5 Prozent je gelerntem Skilllevel, maximal -50 Prozent. Dies reduziert Verteidigungswerte, nicht direkt erlittenen Schaden um denselben Prozentsatz. Bisheriger Cooldown 55 Sekunden. Castzeit 0,1 Sekunden. Verhalten bei unzureichenden HP ist noch offen.

### Seelenfessel

Verbraucht 1 Seelenfragment und lässt zwei seelenhafte Hände aus dem Boden den Gegner festhalten. Kein Lebensopfer. Die Fessel betäubt das Ziel und senkt seine M-Defense währenddessen um 10 Prozent. Dauer gleichmäßig von 2 Sekunden auf Stufe 1 bis 3 Sekunden auf Stufe 15. Magischer Initial-Grundschaden 97, +10 je weiterer Stufe, auf Stufe 15 237. Mana-Kosten 39 auf Stufe 1, +4 je weiterer Stufe, maximal 95 auf Stufe 15. Cooldown 104 Sekunden, -1 je weiterer Stufe, auf Stufe 15 90 Sekunden. Castzeit vorläufig 0,1 Sekunden innerhalb des genannten Bereichs 0,1–0,2 Sekunden. Während der Fessel ist Seelenqual nutzbar. Definition, Kapazität und Wiederauffüllen des permanenten Seelenvorrats werden separat ausgearbeitet. Aktuelle Mana-Gruppe: combo (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Seelenqual

Einmaliger magischer Angriff, nur solange Seelenfessel auf dem Ziel wirkt. Kein Lebensopfer, kein Schaden über Zeit. Grundschaden 47 auf Stufe 1, gleichmäßig steigend auf 168 auf Stufe 10. Zwischenwerte werden für die Anzeige gerundet. Mana-Kosten 19 auf Stufe 1, Stufenwerte 19, 24, 30, 35, 40, 46, 51, 56, 62, 67, maximal 67 auf Stufe 10. Castzeit 0 Sekunden, Cooldown 0,2 Sekunden. Bei sofortiger erster Anwendung passen maximal 15 Anwendungen in das 3-Sekunden-Fenster (Zeitpunkte 0 bis 2,8 Sekunden); Reaktionszeit und Serverablauf können das reduzieren. 15 Anwendungen kosten auf Stufe 10 1005 Mana. Für Seelenernte vorgemerkt: 0–4 erfolgreiche Seelenqual-Treffer ergeben 0 Seelen, 5–11 ergeben 1, ab 12 ergeben 2; höhere Trefferzahlen durch das geänderte Timing erhöhen die Ernte nicht über 2. Manueller Abschluss bevorzugt, genaue Umsetzung noch offen. Seelenfessel kostet zuvor 1 Seele, daher entspricht eine Ernte von 1 nur dem Ausgleich dieses Einsatzes. Aktuelle Mana-Gruppe: combo (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Seelenernte

Manueller Abschluss der Kombination Seelenfessel → Seelenqual → Seelenernte. Verursacht einmalig magischen Schaden und heilt den Anwender. Magischer Grundschaden 381 auf Stufe 1, +158 je weiterer Stufe, auf Stufe 5 1013. Bestehende feste Selbstheilung 150 je gelerntem Skilllevel, von 150 bis 750 HP; bisher keine bestätigte zusätzliche Abhängigkeit der Heilmenge von der Trefferzahl. Die Zahl erfolgreicher Seelenqual-Treffer auf dem gefesselten Ziel bestimmt die Ernte: 0–4 ergibt 0 Seelenfragmente, 5–11 ergibt 1, ab 12 ergibt 2. Maximal 2 Seelenfragmente pro Abschluss. Seelenfessel kostet zuvor 1 Fragment. Seelenernte ist bis 1,5 Sekunden nach Auflösung der Seelenfessel abfeuerbar; genaue serverseitige Ablaufprüfung und Verhalten bei vorzeitigem Tod des Ziels noch offen. Cooldown 200 Sekunden, je weiterer Stufe 5 Sekunden weniger, auf Stufe 5 180 Sekunden. Castzeit 0,3 Sekunden, einmalige Wirkung. Mana-Kosten 152 auf Stufe 1, +64 je weiterer Stufe, maximal 408 auf Stufe 5. Speicherregeln sind durch Reaper definiert. Eine zusätzliche Schadens-/Heilskalierung nach Trefferzahl ist bisher nicht festgelegt. Übungspuppen geben keine Seelenfragmente; die konkrete Erkennung von Übungszielen wird später serverseitig umgesetzt. Aktuelle Mana-Gruppe: combo (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Sturm des Feuers

Erzeugt um das anvisierte Ziel eine anfangs unauffällige kreisförmige brennende Fläche mit 5 Metern Radius. Während der ersten 0,5 Sekunden entsteht kein Schaden. Danach erhebt beziehungsweise verdichtet sich das Feuer zur Mitte hin zu einer Feuersäule oder einem Feuersturm; diese visuelle Feuerphase dauert 3 Sekunden. Gesamte Feldlaufzeit 3,5 Sekunden. Der Schaden trifft jeden betroffenen Gegner genau einmal nach der 0,5-sekündigen Vorwarnung; die dreisekündige Feuerphase erzeugt keine zusätzlichen Schadensticks. Mitbewegung des Feldes und exakter Animations-Trefferzeitpunkt bleiben offen. Magischer Skill-Grundschaden 113 auf Stufe 1 und +69 je weiterer Stufe, auf Stufe 10 734. Mana-Kosten 28 auf Stufe 1, +17 je weiterer Stufe, maximal 181 auf Stufe 10. Cooldown 120 Sekunden und -2 je weiterer Stufe, auf Stufe 10 102 Sekunden. Castzeit 0,2 Sekunden. Endgültige optische Darstellung später im Spiel prüfen. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Tamen

Versucht, eine Kreatur zu zähmen. Erfordert das passende spezielle Taming-Item für diese Kreatur. Die Grunderfolgschance beginnt bei 50 Prozent und steigt je weiterer Skillstufe um 15 Prozentpunkte auf 80 Prozent. Ein Kreaturen-Gegenwert beeinflusst die endgültige Erfolgschance; die Berechnung ist noch festzulegen. Die Mana-Kosten steigen von 100 um 25 je weiterer Stufe auf 150. Die Cast Time sinkt von 3 um 0,5 Sekunden je weiterer Stufe auf 2 Sekunden, der Cooldown von 60 um 10 Sekunden je weiterer Stufe auf 40 Sekunden. Der Versuch verursacht keinen Schaden und hat keine anschließende Effektdauer. Der Itemverbrauch ist noch festzulegen.

### Beschwören

Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer.

### Zurückrufen

Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer.

### Geist des Feuers

Eigenbuff für 300 Sekunden. Der bestehende Intelligenzbonus bleibt +2 je gelerntem Skilllevel, auf Stufe 10 +20. Zusätzlich erhalten Feuerangriffe +4 direkten Angriff je gelerntem Skilllevel, auf Stufe 10 +40. Mana 13 auf Stufe 1 und +6 je weiterer Stufe, auf Stufe 10 67. Castzeit 0,2 Sekunden, bestehender Cooldown 60 Sekunden. Einheitliche Element-Zuordnung und genaue Anwendung des flachen Feuerbonus bei Mehrfachtreffern und DoTs werden noch abgestimmt.

### Seelenplage

Unabhängiger einmaliger magischer Flächenangriff in einem rechteckigen Bereich vor dem Anwender, trifft bis zu sechs Gegner. Kein anhaltendes Feld, keine Keim-Markierungen und keine Voraussetzung durch Seelenfessel, Seelenqual oder Seelenernte. Verbraucht 3 Seelenfragmente auf Stufe 1 und +3 je weiterer Stufe, auf Stufe 10 30; kostet kein Mana. Der benötigte Seelenvorrat muss vorhanden und der Cooldown bereit sein. Magischer Grundschaden je getroffenem Gegner 171, +58 je weiterer Stufe, auf Stufe 10 693. Cooldown 85 Sekunden, -1 je weiterer Stufe, auf Stufe 10 76 Sekunden. Castzeit 0,3 Sekunden, vorläufige Animation 4 Sekunden auf allen Stufen. Genau ein Treffer je Gegner, kein Schaden über Zeit. Länge und Breite des Rechtecks, genauer Trefferzeitpunkt und Blockieren anderer Aktionen während der Animation bleiben offen.

### Dunkler Impuls

Sendet einen Impuls der Dunkelheit aus und verursacht einmalig magischen Schaden. Skill-Grundschaden 42 auf Stufe 1 und +23 je weiterer Stufe, auf Stufe 10 249. Mana-Kosten 11 auf Stufe 1, +6 je weiterer Stufe, maximal 65 auf Stufe 10. Cooldown 14 Sekunden und -1 je weiterer Stufe, auf Stufe 10 5 Sekunden. Castzeit 0,1 Sekunden, Wirkungsdauer 0 Sekunden, kein Schaden über Zeit. Genaue Zielwahl beziehungsweise Trefferfläche bleibt noch zu definieren. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Meteoritenschauer

Vorläufig beibehaltener Flächenangriff: Meteoritenschauer über einer Fläche mit 12 Metern Durchmesser (6 Meter Radius). Drei Skillstufen. Der bisher gespeicherte physische Skill-Grundschaden 543 verdoppelt sich je weiterer Stufe: 543/1086/2172. Schadensart bleibt vorerst entsprechend dem vorhandenen P-Angriff physisch. Mana-Kosten 652 auf Stufe 1, Stufenwerte 652, 1304, 2608, maximal 2608 auf Stufe 3. Cooldown 280/240/200 Sekunden, auf Stufe 3 also 3 Minuten 20 Sekunden. Castzeit 0,8 Sekunden. Letztgenannte Gesamtlaufzeit 6 Sekunden. Meteoriteneinschläge erfolgen versetzt in kleinen und etwas größeren Wellen mit je sechs Meteoriten; erste Teilwelle 40 Prozent, zweite 60 Prozent, Abstand innerhalb eines Paars 0,5 Sekunden. Bestätigter Rhythmus: bei Sekunde 1/3/5 jeweils eine 40-Prozent-Welle, bei Sekunde 1,5/3,5/5,5 jeweils eine 60-Prozent-Welle. Sechs Wellen mit jeweils sechs Meteoriten, insgesamt 36 Meteoriten. Die genaue Schadensverteilung des Wellenanteils auf die einzelnen Einschläge bleibt offen; daraus wird noch kein garantierter Gesamtschaden je Gegner abgeleitet. Einschlagspositionen und lokale Trefferflächen müssen später definiert werden; nicht jeder Meteorit trifft jeden Gegner. Entscheidung über langfristigen Verbleib des Skills noch offen. Pro Anwendung können insgesamt höchstens 6 unterschiedliche Gegner getroffen werden; spätere Wellen dürfen dieses Gesamtlimit nicht durch neue Ziele überschreiten. Auswahl bei mehr als 6 möglichen Zielen bleibt offen. Die Anzahl sichtbarer Meteoriten ist kein zusätzlicher Schadensmultiplikator. Aktuelle Mana-Gruppe: finisher (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Teufelspakt

Schließt einen Teufelspakt und verstärkt sich selbst für 600 Sekunden (10 Minuten). Je gelerntem Skilllevel +5 Victim, +5 Wisdom, +5 Intelligenz und +5 Vitalität, auf Stufe 3 jeweils +15. Kein zufälliger Buff und kein zusätzlicher Risikoeffekt im aktuellen Entwurf. Mana 61 auf Stufe 1, +25 je weiterer Stufe, auf Stufe 3 111. Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Erneute Anwendung erneuert den Eigenbuff, ohne seine Stärke mit sich selbst zu stapeln.

### Morrak´s Meister

Einstufige passive Verbesserung der questgebundenen Morrak-Beschwörung. Der Ritualist bezwingt Morrak in einer Quest und erhält dadurch zunächst die zusätzliche Möglichkeit, ihn als Nahkampf-Dämon zu beschwören; die erzählerische Meister-Wahl ist keine echte Auswahl. Sobald Morraks Meister auf Stufe 1 gelernt wird, ersetzt Morrak seine Nahkampf-Krallenangriffe durch magische Fernkampf-Auto-Attacks. Keine eigenen Casts oder Spells des Dämons; Attack-Speed-Wert bleibt 1, genaue Reichweite noch offen. Die separate Grundbeschwörung und Questfreischaltung müssen später in Quest- und Aktionsdaten angebunden werden; diese Passive selbst beschwört ihn nicht und hat keine aktive Castzeit. Bestehende Beschwörungsregeln bleiben: Castzeit 0,4 Sekunden, maximal 300 Sekunden Laufzeit bis Ablauf oder Tod. Die ursprüngliche questgebundene Nahkampf-Version gibt dem Anwender keine Attributboni. Erst mit gelernter Verbesserung Morraks Meister erhält der Anwender +5 Victim und +5 Wisdom, und nur solange der verbesserte Fernkampf-Morrak beschworen ist. Lernen allein gewährt keine dauerhaften Attributboni. Der Beschwörungspreis von -500 Max-HP gilt während der Beschwörung weiterhin auch für die Grundversion. Morraks Werte sind live an seinen Meister gekoppelt: Max-Leben und M-Angriff entsprechen jeweils einem Drittel des entsprechenden aktuellen Meisterwerts. Eigene Beschwörungskosten von -500 Max-HP werden aus der HP-Berechnungsbasis herausgerechnet. Buffs und Debuffs des Meisters wirken damit auch auf Morrak. Physische und magische Verteidigung Morraks entsprechen beide einem Drittel der aktuellen magischen Verteidigung des Meisters. Er ist angreifbar und nimmt Flächenschaden; kein Mana oder Cast-Spells. Jeder Auto-Attack hat 1,5 Prozent Chance auf 50 Prozent Bewegungstempo-Senkung für 1,5 Sekunden. Beschwörungs-Cooldown 360 Sekunden (6 Minuten), maximale Anwesenheit 300 Sekunden (5 Minuten). Keine weiteren Beschwörungskosten: kein Mana, keine Seelen und kein zusätzlicher einmaliger Lebensabzug; allein -500 Max-HP während der Beschwörung. Aggroregeln und genaue Anpassung aktueller HP bei wechselndem Max-Leben bleiben offen. Diese zeitlich begrenzte Skill-Beschwörung belegt keinen regulären dauerhaften Pet-Platz und darf gleichzeitig mit dem normalen Pet aktiv sein. Zwei dauerhafte Pets bleiben dem Abenteurer vorbehalten. Macht des Begleiters wirkt nicht direkt auf Morrak; er übernimmt ausschließlich die definierten Werte seines Meisters. Reguläre Pets des Ritualisten können den Begleiterbuff erhalten. Grundfrequenz seiner Auto-Attacks: 1,1 Angriffe pro Sekunde bei 100 % eigenem Angriffstempo; keine Übernahme des Meister-Angriffstempos.
## Heiler

| Skill | Typ | Stufen | P-Grundwert | P-Maximalwert | M-Grundwert | M-Maximalwert | Kosten maximal | Cooldown s | Castzeit s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- | ---: | ---: |
| Eislanze | spell | 10 | 0 | 0 | 187 | 628 | 155 mana (flat, maxMana) | 41 | 0,6 |
| Energieschlag | spell | 5 | 0 | 0 | 25 | 105 | 26 mana (flat, maxMana) | 1,1 | 0,15 |
| Kuss der Aurora | spell | 6 | 0 | 0 | 0 | 0 | 1.208 mana (flat, maxMana) | 70 | 0,6 |
| Heilung | spell | 20 | 0 | 0 | 0 | 0 | 539 mana (flat, maxMana) | 19 | 0,1 |
| Kristallisierte Wasserspähre | spell | 10 | 0 | 0 | 137 | 380 | 97 mana (flat, maxMana) | 26 | 0,2 |
| Festigung des Geistes | buff | 10 | 0 | 0 | 0 | 0 | 251 mana (flat, maxMana) | 60 | 0,3 |
| Göttliche Heilung | spell | 10 | 0 | 0 | 0 | 0 | 544 mana (flat, maxMana) | 58 | 0,2 |
| Mentale Erweiterung | selfbuff | 10 | 0 | 0 | 60 | 150 | 190 mana (flat, maxMana) | 60 | 0,3 |
| Schwerter des Lichtes | spell | 10 | 0 | 0 | 273 | 1.029 | 257 mana (flat, maxMana) | 63 | 0,7 |
| Strahlendes Aurafeld | spell | 10 | 0 | 0 | 0 | 0 | 210 mana (flat, maxMana) | 46 | 0 |
| Wiederherstellung | spell | 20 | 0 | 0 | 0 | 0 | 840 mana (flat, maxMana) | 22 | 0,2 |
| Tamen | spell | 1 | 0 | 0 | 0 | 0 | 100 mana (flat, maxMana) | 60 | 3 |
| Beschwören | spell | 1 | 0 | 0 | 0 | 0 | 5 mana (flat, maxMana) | 5 | 1 |
| Zurückrufen | spell | 1 | 0 | 0 | 0 | 0 | 5 mana (flat, maxMana) | 5 | 0 |
| Aurora-Segen | buff | 10 | 18 | 180 | 18 | 180 | 224 mana (flat, maxMana) | 60 | 0,5 |
| Lunare Inkanation | spell | 1 | 0 | 0 | 0 | 0 | Keine Aktivierungskosten gespeichert | 100 | 1 |
| Himmlische Aufopferung | spell | 1 | 0 | 0 | 0 | 0 | 0,9 health (fraction, maxHealth); 0,1 mana (fraction, maxMana) | 900 | 0 |
| Göttliche Nova | spell | 10 | 0 | 0 | 473 | 1.415 | 354 mana (flat, maxMana) | 158 | 0,4 |
| Frostschauer | spell | 10 | 0 | 0 | 32 | 271 | 542 mana (flat, maxMana) | 44 | 0,4 |
| Permafrost | selfbuff | 3 | 0 | 0 | 0 | 0 | Keine Aktivierungskosten gespeichert | 0 | 0 |
| Assimilation | selfbuff | 5 | 0 | 0 | 0 | 0 | 59 mana (flat, maxMana) | 60 | 0,3 |

### Eislanze

Beschwört eine Eislanze, die das Ziel einmalig durchbohrt und seine Rüstung für 5 Sekunden um 5 Prozent verringert. Der magische Grundangriff steigt von 187 um 49 je weiterer Stufe auf 628. Die Mana-Kosten 47 auf Stufe 1, +12 je weiterer Stufe, maximal 155 auf Stufe 10. Die Castzeit beträgt 0,6 Sekunden. Der Cooldown 50 Sekunden auf Stufe 1, 41 Sekunden auf Stufe 10; bisheriger Stufenverlauf um 2 Sekunden erhöht. Die fünf Sekunden betreffen den Rüstungseffekt, keinen Schaden über Zeit. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Energieschlag

Wirft einen Ball aus purem Licht auf dein Ziel und verursacht einmalig magischen Schaden. Der magische Grundangriff steigt von 25 um 20 je weiterer Stufe auf 205. Die Mana-Kosten 6 auf Stufe 1, +5 je weiterer Stufe, maximal 51 auf Stufe 10. Castzeit 0,15 Sekunden, kein anhaltender Effekt. Der Cooldown beträgt zunächst 2,1 Sekunden, ab Stufe 3 1,6 Sekunden, ab Stufe 5 1,1 Sekunden, ab Stufe 8 0,8 Sekunden und ab Stufe 10 0,6 Sekunden. Heiler und Priester können maximal Stufe 5 lernen; alle übrigen zugeordneten Klassen weiterhin Stufe 10. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Kuss der Aurora

Nutzt die Macht Auroras, um ein einzelnes verbündetes Ziel einmalig zu heilen. Sechs Skillstufen. Grundheilung 550 HP auf Stufe 1 und +430 je weiterer Stufe: 550, 980, 1410, 1840, 2270, 2700 HP. Auf Stufe 5 zusätzlich 3 Prozent des Maximal-Lebens desselben Ziels, auf Stufe 6 stattdessen insgesamt 5 Prozent. Dieser prozentuale Anteil wird zur Grundheilung derselben Anwendung addiert, nicht als separater Cast ausgeführt. Mana 283 auf Stufe 1 und +185 je weiterer Stufe, auf Stufe 5 1023 und auf Stufe 6 1208. Cooldown 80 Sekunden und je weiterer Stufe 2 Sekunden weniger, auf Stufe 5 72 und auf Stufe 6 70 Sekunden. Castzeit 0,6 Sekunden. Einmalige Heilung nach der Castzeit, keine anschließende Wirkungsdauer oder Heilticks.

### Heilung

Heilt ein verbündetes Ziel. Der Heilwert wächst kumulativ mit Zuwächsen von 20, 26, 32, 38 und so weiter: Jeder nächste Zuwachs ist um 6 höher. Heilwerte von Stufe 1 bis 20: 20, 46, 78, 116, 160, 210, 266, 328, 396, 470, 550, 636, 728, 826, 930, 1040, 1156, 1278, 1406, 1540. Formel für Stufe L: 20 × L + 3 × L × (L - 1). Auf Stufe 20 beträgt der Heilwert 1540 HP. Castzeit 0,1 Sekunden. Cooldown 19 Sekunden auf Stufe 1 und 19 Sekunden auf Stufe 20. Mana-Kosten 7 auf Stufe 1, Stufenwerte 7, 16, 27, 41, 56, 74, 93, 115, 139, 165, 193, 223, 255, 289, 326, 364, 405, 447, 492, 539, maximal 539 auf Stufe 20. Einmalige Heilung nach der Castzeit, Wirkungsdauer 0 Sekunden, keine Heilticks. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Kristallisierte Wasserspähre

Schleudert eine Eiskugel auf dein Ziel, die beim Aufprall zerspringt und einmalig magischen Schaden verursacht. Der Grundschaden steigt von 137 um 27 je weiterer Stufe auf 380 auf Stufe 10. Mana-Kosten 34 auf Stufe 1, +7 je weiterer Stufe, maximal 97 auf Stufe 10. Der Cooldown 30 Sekunden auf Stufe 1 und 26 Sekunden auf Stufe 10. Castzeit 0,2 Sekunden. Die vorläufige Animation dauert 1 Sekunde; keine anhaltende Wirkungsdauer oder zusätzlicher Kontrolleffekt. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Festigung des Geistes

Erhöht deine Intelligenz und Weisheit sowie die deiner Verbündeten für 300 Sekunden um jeweils 2 pro Skilllevel. Mana-Kosten 53 auf Stufe 1, plus 22 je weiterer Stufe, bis zu 251 auf Stufe 10. Castzeit 0,3 Sekunden.

### Göttliche Heilung

Heilt die gesamte eigene Gruppe einschließlich des Heilers innerhalb von 12 Metern Radius um den Heiler. Nach der Castzeit erfolgt die erste Heilung mit dem vollen Skill-Heilwert; 1 Sekunde später folgt eine zweite Heilung mit 50 Prozent dieses Werts. Grundheilwert 162 HP auf Stufe 1, +97 je weiterer Stufe, auf Stufe 10 1035 HP. Je Gruppenmitglied insgesamt 243 HP auf Stufe 1 beziehungsweise 1552,5 HP auf Stufe 10 vor Begrenzung durch fehlende HP. Mana-Kosten 85 auf Stufe 1, +51 je weiterer Stufe, maximal 544 auf Stufe 10. Cooldown gleichmäßig von 64 auf 58 Sekunden über zehn Stufen. Castzeit 0,2 Sekunden. Gesamter visueller Ablauf ungefähr 2 Sekunden; genau zwei Heilungen, kein fortlaufender Heil-Tick. Ob Empfänger beim ersten Heal festgehalten oder beim zweiten erneut im Radius geprüft werden, ist noch offen. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Mentale Erweiterung

Erhöht deinen magischen Angriff für 300 Sekunden um 60 auf Skilllevel 1. Je weiterer Stufe steigt der Bonus um 10, bis zu 150 auf Stufe 10. Die Mana-Kosten steigen von 37 um 17 je weiterer Stufe auf 190. Die Castzeit beträgt 0,3 Sekunden. Cooldown 60 Sekunden.

### Schwerter des Lichtes

Ein riesiges Schwert aus Licht spießt den anvisierten Gegner auf und verursacht einmalig magischen Skill-Grundschaden von 273 auf Stufe 1, plus 84 je weiterer Stufe, bis zu 1029 auf Stufe 10. Das Schwert und ein Feld mit 15 Metern Durchmesser beziehungsweise 7,5 Metern Radius bleiben danach bestehen. Die Feldlaufzeit steigt gleichmäßig von 10 auf 30 Sekunden. Du und deine Verbündeten erhalten im Feld 13 Faith auf Stufe 1, plus 0,5 je weiterer Stufe, bis zu 17,5 auf Stufe 10. Der Bonus gilt nur während des Aufenthalts im Feld. Keine wiederholten Schadensticks festgelegt. Mana-Kosten 68 auf Stufe 1, +21 je weiterer Stufe, maximal 257 auf Stufe 10. Cooldown 72 Sekunden auf Stufe 1 und 63 Sekunden auf Stufe 10. Castzeit 0,7 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Strahlendes Aurafeld

Aktiviert sofort ein 12 Sekunden dauerndes, mit dem Heiler mitbewegtes Aurafeld mit 4 Metern Radius. Der Heiler erhält Selbstheilung bei Sekunde 1, 3, 5, 7, 9 und 11. Verbündete im Feld erhalten jeweils 30 Prozent des Selbstheilungswerts bei Sekunde 2, 4, 6, 8, 10 und 12; der Heiler erhält diese zusätzlichen Verbündeten-Ticks nicht. Selbstheilung je Tick 10 HP je gelerntem Skilllevel, auf Stufe 10 100 HP. Verbündetenheilung je Tick 3 HP je gelerntem Skilllevel, auf Stufe 10 30 HP je Empfänger. Über die volle Laufzeit insgesamt 60 bis 600 HP für den Heiler und 18 bis 180 HP je durchgehend anwesendem Verbündeten. Mana-Kosten 21 auf Stufe 1, +21 je weiterer Stufe, maximal 210 auf Stufe 10. Cooldown 73 Sekunden auf Stufe 1 und 46 Sekunden auf Stufe 10. Castzeit 0 Sekunden. Bewegung ist erlaubt; ein eigener Angriff oder eine andere aktive Heilung bricht das gesamte Feld und alle verbleibenden Ticks ab. Die eigenen Aura-Heilticks lösen keinen Abbruch aus. Regeln für andere Aktionen, erlittenen Schaden und Unterbrechungseffekte werden später geprüft. Kein zusätzlicher Faith-Bonus. Eine Skalierung mit Waffen- oder Charakter-M-Angriff ist noch nicht festgelegt. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Wiederherstellung

Heilt ein einzelnes anvisiertes verbündetes Ziel über Zeit. 20 lernbare Stufen. Die bestehende kumulative Heilkurve wird fortgesetzt: Heilwert pro Tick = Stufe × (Stufe + 10), von 11 auf Stufe 1 bis 600 auf Stufe 20. Ein Tick je Sekunde, erster Tick nach einer Sekunde, kein Sofort-Tick. Dauer auf Stufen 1–14: 3 Sekunden; ab Stufe 15: 4 Sekunden. Auf Stufe 20 insgesamt 2400 HP. Mana-Kosten 12 auf Stufe 1, Stufenwerte 12, 25, 41, 59, 79, 101, 125, 151, 180, 210, 243, 277, 314, 353, 525, 582, 643, 706, 771, 840, maximal 840 auf Stufe 20. Castzeit 0,2 Sekunden. Cooldown 41 Sekunden minus 1 je weiterer Stufe, maximal gelernt 22 Sekunden. Aktuelle Mana-Gruppe: heal (35 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Tamen

Versucht, eine Kreatur zu zähmen. Erfordert das passende spezielle Taming-Item für diese Kreatur. Die Grunderfolgschance beginnt bei 50 Prozent und steigt je weiterer Skillstufe um 15 Prozentpunkte auf 80 Prozent. Ein Kreaturen-Gegenwert beeinflusst die endgültige Erfolgschance; die Berechnung ist noch festzulegen. Die Mana-Kosten steigen von 100 um 25 je weiterer Stufe auf 150. Die Cast Time sinkt von 3 um 0,5 Sekunden je weiterer Stufe auf 2 Sekunden, der Cooldown von 60 um 10 Sekunden je weiterer Stufe auf 40 Sekunden. Der Versuch verursacht keinen Schaden und hat keine anschließende Effektdauer. Der Itemverbrauch ist noch festzulegen.

### Beschwören

Beschwört deine Kreatur nach einer Cast Time von 1 Sekunde. Kostet 5 Mana und hat 5 Sekunden Cooldown. Es gibt keine anschließende Effektdauer.

### Zurückrufen

Ruft deine Kreatur sofort zurück. Kostet 5 Mana und hat 5 Sekunden Cooldown. Keine Cast Time oder anschließende Effektdauer.

### Aurora-Segen

Vereint die bisherigen Segen des Angriffes, der Mentalität und der Verteidigung in einem langfristigen Gruppenbuff. Je gelerntem Skilllevel erhalten alle Mitglieder der eigenen Gruppe +2 Stärke, +2 Vitalität, +2 Intelligenz, +2 Wisdom, +18 P-Angriff, +18 M-Angriff, +18 P-Defense, +18 M-Defense und +18 direkte MP-Regeneration je Regenerationstick. Auf Stufe 10 jeweils +20 Attribute und +180 der direkten Kampf- und Regenerationswerte. Dauer 1800 Sekunden, Cooldown 60 Sekunden. Zehn lernbare Stufen, ein SP je Stufe. Mana-Kosten 35 auf Stufe 1 und +21 je weiterer Stufe, auf Stufe 10 224. Castzeit 0,5 Sekunden. Die bisherigen separaten Mentalitäts- und Verteidigungssegen sind dem Heiler nicht mehr zugeordnet und werden nicht zusätzlich gestapelt.

### Lunare Inkanation

Belebt einen verstorbenen Verbündeten mit 2500 HP wieder. Das vorhandene Mana des Ziels bleibt erhalten; kein zusätzlicher Mana-Wiederherstellungsbonus. Castzeit 1 Sekunde, Animation ungefähr 1 Sekunde; dies ist kein zusätzlicher Wirkungszeitraum. Die Wiederbelebung erfolgt einmalig ohne anschließende Wirkungsdauer. Bestehender Cooldown 100 Sekunden. Aktivierungs-Manakosten des Heilers sind noch nicht festgelegt.

### Himmlische Aufopferung

Opfert 90 Prozent der maximalen Lebenspunkte, um die anderen Gruppenmitglieder zu heilen. Je mehr Lebenspunkte tatsächlich geopfert werden, desto höher ist die Heilung; Umrechnungsfaktor und Verteilung sind noch festzulegen. Keine garantierte vollständige Heilung. Kostet zusätzlich 10 Prozent des Maximal-Manas; dieses Mana muss zur Aktivierung vorhanden sein. Notfallheilung mit 900 Sekunden (15 Minuten) Cooldown und 0 Sekunden Castzeit: Die Wirkung erfolgt sofort. Die vorläufige Animation von ungefähr 2 Sekunden verzögert die Heilung nicht; ob sie andere Aktionen blockiert, ist noch offen. Keine fortlaufende Heilwirkung festgelegt. Der Skill bleibt vorerst erhalten; seine langfristige Notwendigkeit wird später geprüft. Verhalten bei unzureichenden aktuellen Lebenspunkten ist noch zu klären. Nur dem Heiler zugeordnet; beim Luminet entfernt.

### Göttliche Nova

Im Zielgebiet um den anvisierten Gegner entsteht eine Lichtkugel. Nach 2 Sekunden explodiert sie und verursacht einmalig magischen Flächenschaden an bis zu fünf Gegnern; kein wiederholter Schaden. Die sichtbare Kugel hat anfangs 2 Meter Durchmesser, zieht sich kurz vor der Explosion auf 0,5 Meter Durchmesser zusammen und explodiert über eine Fläche von 4 Metern Durchmesser (2 Meter Radius). Der genaue Zeitpunkt des Zusammenziehens und die Mitbewegung des Zielgebiets bleiben offen. Grundschaden 473 auf Stufe 1, je weiterer Stufe bis einschließlich Stufe 9 +93 auf 1217; der letzte Schritt auf Stufe 10 gibt stattdessen +198, insgesamt 1415. Mana-Kosten 118 auf Stufe 1, Stufenwerte 118, 142, 165, 188, 211, 235, 258, 281, 304, 354, maximal 354 auf Stufe 10. Cooldown 176 Sekunden auf Stufe 1 und 158 Sekunden auf Stufe 10. Castzeit 0,4 Sekunden. Gesamtdauer der visuellen Wirkung vorläufig 2,5 Sekunden; Explosion nach 2 Sekunden. Aktuelle Mana-Gruppe: normal (25 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Frostschauer

Erzeugt eisigen Regen um das anvisierte Ziel in 5 Metern Radius. Jeder Tick trifft höchstens 3 Gegner. Kein zusätzlicher Initialtreffer; erster Tick nach 1,5 Sekunden, danach alle 1,5 Sekunden. Feldlaufzeit 4 Sekunden auf Stufe 1, gleichmäßig steigend bis 8 Sekunden auf Stufe 10. Magischer Skill-Grundschaden je Tick und getroffenem Gegner 32 auf Stufe 1, gleichmäßig steigend bis 271 auf Stufe 10. Auf Maximalstufe Ticks bei 1,5 / 3 / 4,5 / 6 / 7,5 Sekunden, insgesamt 1355 Skill-Grundschaden je durchgehend getroffenem Ziel. Jeder Tick addiert zum Skill-Grundschaden den aktuellen M-Angriff des Anwenders. Bewegungstempo des getroffenen Gegners sinkt um 1 Prozent auf Stufe 1, je weiterer Stufe um 1 Prozentpunkt bis 10 Prozent. Die Verlangsamung hält nach jedem Treffer 3 Sekunden; erneute Treffer frischen nur die Dauer auf. Mana-Kosten 26 auf Stufe 1, Stufenwerte 26, 47, 102, 134, 166, 264, 306, 349, 489, 542, maximal 542 auf Stufe 10. Castzeit 0,4 Sekunden. Cooldown 53 Sekunden auf Stufe 1 und 44 Sekunden auf Stufe 10. Auswahl der bis zu drei Ziele je Tick und Mitbewegung des Feldes bleiben offen. Keine Sammelpunkte. Aktuelle Mana-Gruppe: finisher (40 % als Berechnungsgrundlage; Charakterangriff nicht in der Kostenbasis).

### Permafrost

Sofort umschaltbarer Eigenbuff mit drei Stufen und ohne feste Laufzeit. Bleibt aktiv, bis er manuell ausgeschaltet wird oder das Mana für den nächsten Verbrauchstick nicht reicht. Bei jedem Mana-Regenerationstick kostet er auf Stufe 1/2/3 jeweils 13/21/29 Mana; kein zusätzlicher einmaliger Aktivierungspreis. Eiszauber haben bei aktivem Buff 2/4/6 Sekunden weniger Cooldown. Zusätzlich steigt die Einfrierchance von Eisangriffen auf allen drei Stufen um einen Prozentpunkt; Gefrierbrand erreicht damit auf Maximalstufe 11 statt 10 Prozent. Keine zusätzlichen Einfrierwürfe oder eigene Einfrierdauer. Castzeit 0 Sekunden. Beim Abschalten enden die Boni und der laufende Verbrauch. Umschalt-Cooldown 0 Sekunden. Mindest-Cooldown von Eiszaubern und Einfluss auf bereits laufende Cooldowns bleiben offen.

### Assimilation

Eigenbuff für 600 Sekunden (10 Minuten). Erhöht das maximale Mana auf Stufe 1 um 200 und je weiterer Stufe um 25, auf Stufe 5 insgesamt um 300. Zusätzlich +5 direkte MP-Regeneration je gelerntem Skilllevel, auf Stufe 5 +25 pro Mana-Regenerationstick. Dies ist ein Max-Mana-Bonus, keine sofortige Mana-Wiederherstellung. Kostet 27 Mana auf Stufe 1 und +8 je weiterer Stufe, auf Stufe 5 59. Cooldown 60 Sekunden, Castzeit 0,3 Sekunden. Erneute Anwendung erneuert die Laufzeit, ohne die Boni mit sich selbst zu stapeln. Regenerationstick-Intervall und Umgang mit aktuellem Mana bei Max-Mana-Änderungen werden zentral festgelegt.

# Spieler- und Pet-Erfahrung bis Level 200

Referenz: Oberwelt ohne Booster. Zeitformel für Level L → L+1:

`(0.52 + 0.00083 * (L - 1)^2) * (1 - 0.8^L)` Stunden.

Benötigte XP = Zeit × Referenz-XP pro Stunde. Erst das gesamte Produkt wird auf ganze XP gerundet, nicht die Zeit selbst.

Referenzmonster: `round(2 * 40^((L - 1) / 44))` XP. Das sind 2 XP auf L1 und 80 XP auf L45.
Effektive Kills/h: `min(600, 30 * 20^((L - 1) / 44))`.
Der Einstieg enthält Orientierung, Wege und Pausen; die Killrate ist eine neue Planungsannahme, kein Messergebnis der Kampfsimulation. Ab L45 bleibt sie bei 600/h.
Diese Referenz wurde gewählt, um die Zeitkurve in XP-Einheiten zu übersetzen. Monsterarten, Gruppenverteilung, Levelunterschiede und Dungeon-Ertrag sind damit noch nicht kalibriert. Die vorhandenen Kreaturvorlagen behalten ihre bisherigen Platzhalterbelohnungen; eine Auszahlung im Kampf ist nicht implementiert.

| Aktuelles Level | XP zum nächsten Level | Gesamt-XP zum Erreichen | Stunden zum nächsten Level | Gesamtstunden zum Erreichen | Referenzmonster-XP | Effektive Kills/h |
|---|---:|---:|---:|---:|---:|---:|
| 1 | 6 | 0 | 0.104 | 0.000 | 2 | 30.0 |
| 15 | 308 | 1356 | 0.659 | 5.902 | 6 | 77.8 |
| 30 | 6046 | 28092 | 1.217 | 19.292 | 23 | 216.1 |
| 45 | 102086 | 493587 | 2.127 | 43.451 | 80 | 600.0 |
| 60 | 574795 | 4395939 | 3.409 | 83.866 | 281 | 600.0 |
| 80 | 5147127 | 44241598 | 5.700 | 172.709 | 1505 | 600.0 |
| 100 | 41792443 | 378313245 | 8.655 | 313.676 | 8048 | 600.0 |
| 150 | 6051670553 | 58865675018 | 18.947 | 981.287 | 532338 | 600.0 |
| 200 | Maximum | 7133686912883 | – | 2265.173 | 35213599 | 600.0 |

Level 1 startet bei 0 Gesamt-XP. Die Zeile L enthält die Anforderung für L → L+1, keine kumulative Schwelle. Level 200 hat keine nächste Anforderung. Gesamt-XP sind die Summe aller bereits absolvierten Levelanforderungen. Rundung auf ganze XP kann besonders anfangs die tatsächlich errechnete Zeit leicht verändern; die angegebene Zeit ist der ungerundete Entwurfswert.

## Pets

Pets verwenden dieselben Anforderungen und Gesamt-XP wie Spieler. Die Referenzzeiten in ihren Datensätzen sind die unbeschleunigten Spieler-Vergleichswerte. Der vorhandene Skill Zucht (138) bestimmt den Zuwachs aus tatsächlich gewährten Spieler-XP: ohne erlernten Skill 0 %, Skilllevel 1 = 110 %, 2 = 120 %, 3 = 130 %. Kein zweiter Bonus durch niedrigere Pet-Anforderungen.
120 % Zuwachs bedeutet bei gleicher XP-Quelle 1/1,2 der Zeit, also rund 16,7 % weniger Zeit. Die bestehenden Klassenlimits und Lernvoraussetzungen bleiben unverändert. Teil-XP bleiben auf zwei Dezimalstellen erhalten; einzelne kleine Belohnungen werden nicht auf ganze Pet-XP gerundet. Aktive Pets, Teilung zwischen mehreren Pets und Offline-Pets benötigen weiterhin eine serverseitige Auszahlungsregel; der neue Helfer erzeugt keine automatischen Awards.

## Datenbank

Collections: `playerExperienceLevels`, `petExperienceLevels`, `experienceProgressionRules`.
Import mit `node scripts/seedExperienceLevels.js --apply`, nur Entwicklungsdatenbank. Vorherige Inhalte dieser Collections werden lokal gesichert. Upsert und Readback erfolgen gemeinsam in einer Transaktion; Stände vorhandener Spieler/Pets sowie Skills, Skillpunkte und Monsterbelohnungen werden nicht geändert.
Die Collections enthalten Balancing-Definitionen; bestehende Charakter-/Kreaturcontroller besitzen noch keine Levelaufstiegs- oder Kill-XP-Auszahlung, die hiermit automatisch aktiviert würde.

Quellen: `data/balancing/experience-rules.json`, `services/experienceProgression.js`. Bei geänderter Referenzbelohnung oder Killrate Anforderungen neu generieren, damit die Zeiten erhalten bleiben. Bei späteren Änderungen mit existierenden Spielern braucht es eine gesonderte Regel für bereits gespeicherten Fortschritt.

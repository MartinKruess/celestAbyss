# Kontrolle: Auto-Attacks und Skill-Auswahl

Diagnose der aktuellen 120-Sekunden-Auswertung. Keine Änderung der kanonischen Ergebnisse oder Skillwerte. 240-Sekunden-Läufe verwenden dieselben Startbedingungen und Regeln.

| Klasse | Skills 120 s | Ohne 0,1-s-Reaktionspause | Beste einzelne Skill-Auslassung | Auto-Attacks 240 s | Skills 240 s |
| --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 53.010 | 53.010 | 53.010 | 186.093 | 91.022 |
| Butcher | 67.213 | 67.213 | 67.582 (ohne Nr. 234) | 218.343 | 110.645 |
| Druide | 112.974 | 112.251 | 112.974 | 99.233 | 219.928 |
| Gladiator | 64.741 | 64.741 | 66.290 (ohne Nr. 127) | 168.677 | 99.548 |
| Heiler | 113.380 | 113.380 | 113.380 | 135.605 | 226.395 |
| Kräuterkundler | 113.361 | 113.361 | 113.361 | 150.065 | 205.199 |
| Jäger | 93.498 | 93.498 | 93.498 | 198.180 | 172.687 |
| Ritter | 51.267 | 51.267 | 51.267 | 116.972 | 93.387 |
| Luminet | 208.178 | 209.037 | 217.656 (ohne Nr. 215) | 140.859 | 346.477 |
| Ritualist | 143.190 | 142.360 | 146.342 (ohne Nr. 72) | 182.503 | 239.145 |
| Schamane | 98.023 | 98.023 | 98.023 | 153.471 | 160.911 |
| Seelenjäger | 72.240 | 73.422 | 91.157 (ohne Nr. 47) | 207.295 | 114.238 |
| Schurke | 74.987 | 74.987 | 76.510 (ohne Nr. 115) | 163.009 | 117.883 |

Kontrollläufe ohne aktive Buffs bestätigen geschlossene Frequenzformel bei Klassen ohne Beschwörungsunterbrechungen; Schaden je Auto-Attack stimmt mit P-/M-Angriff überein. Ritualist berücksichtigt seinen eigenen Seelenbonus. Waffen stammen aus dem aktuellen R6-Vergleich: Hauptwaffe 100 %, Nebenwaffe 90 % direkter Waffenangriff, Attribute und Geschwindigkeitsabzüge vollständig. Eine Dual-Aktion zählt einmal.

Die Priorität wählt unter legalen/bezahlbaren Skills nach Rohschaden und bevorzugt Cooldowns über 5 Sekunden. Das ist keine globale Optimierung und keine Garantie für die beste Mana-Verwendung. Einzelne Skills auslassen ist ein Diagnosetest, keine optimierte Rotation. Mana-Blockierungszeit bedeutet, dass mindestens ein Kandidat unbezahlbar ist, nicht zwingend vollständigen Leerlauf. Reaktionspausen können Rotationen verschieben; ihre Entfernung muss deshalb nicht mehr Schaden ergeben.

Vier Minuten garantieren nicht alle Wiederanwendungen langer Cooldowns. Längere Messdauer beseitigt keine Ressourcen- oder Auswahlprobleme. Die Kopplung von Angriffsgeschwindigkeit an Castzeit fehlt weiterhin. Krits, Verfehlen, Block und gegnerische Abwehr sind nicht aktiviert.

Korrektur nach Diagnose: Explosionspfeil (Nr. 47) wird im reinen Skill-Modus nicht mehr aktiviert, da seine Ladungen ausschließlich durch Auto-Attacks ausgelöst werden. Die obige Diagnosetabelle dokumentiert den Zustand vor dieser Korrektur. Der kanonische Zwei-Minuten-Bericht wurde neu berechnet; Seelenjäger-Skillschaden jetzt 91.156,62 statt 72.240,43. Andere Klassen unverändert.

# Aktive Eigenbuffs – Prüfung und Änderungsvorschlag

**Nur simuliert, nicht in der Datenbank umgesetzt.** Aktuelle Begleiterwerte, Level 60/R6, 600 Sekunden, gleiche Angriffspriorität. Kein eingehender Schaden; Schutz, Bewegung, Aggro, Ausweichen und Penetration werden nicht vollständig bewertet.

| Klasse | Basis | Eigenbuffs aktuell | Eigenbuffs Vorschlag | Gewinn aktuell → Vorschlag | Mit Gruppen aktuell → Vorschlag |
| --- | ---: | ---: | ---: | --- | --- |
| Ritualist | 768.805 | 811.467 | 785.811 | 5.5 % → 2.2 % | 1.040.586 → 1.017.973 |
| Butcher | 537.911 | 608.117 | 597.697 | 13.1 % → 11.1 % | 800.974 → 789.112 |
| Gladiator | 606.878 | 616.501 | 627.731 | 1.6 % → 3.4 % | 788.696 → 801.659 |
| Luminet | 643.870 | 651.078 | 674.299 | 1.1 % → 4.7 % | 842.528 → 842.528 |
| Druide | 595.737 | 606.609 | 614.347 | 1.8 % → 3.1 % | 742.730 → 750.789 |
| Seelenjäger | 515.499 | 570.772 | 546.713 | 10.7 % → 6.1 % | 875.835 → 843.959 |
| Abenteurer | 451.616 | 503.153 | 489.173 | 11.4 % → 8.3 % | 611.624 → 596.084 |
| Schamane | 494.442 | 531.009 | 519.790 | 7.4 % → 5.1 % | 783.523 → 770.292 |

## Getestete Maximalwerte

| Skill | Wert | Aktuell | Vorschlag |
| --- | --- | ---: | ---: |
| Teufelspakt | int | 15 | 6 |
| Teufelspakt | wis | 15 | 9 |
| Geist des Feuers | int | 10 | 5 |
| Geist des Feuers | fireDamage | 20 | 10 |
| Aufladung | patk | 200 | 140 |
| Geist des Kriegers | str | 20 | 15 |
| Festigung des Glaubens | wis | -15 | 0 |
| Herr der Elemente | int | 10 | 20 |
| Keine Gnade | patk | 69 | 40 |
| Keine Gnade | dex | 10 | 8 |
| Macht der Wildnis | patk | 60 | 40 |
| Innere Kraft | str | 20 | 30 |

## Einzelbeiträge im aktuellen Eigenbuff-Lauf

Jeweils einen Buff ausgelassen, einschließlich seiner Kosten und Aktivierungszeit. Beiträge sind nicht addierbar.

| Klasse | Buff | Netto-Schadensbeitrag | Prozentpunkte der Basis |
| --- | --- | ---: | ---: |
| ritualist | Geist des Feuers | 14.190 | 1.85 |
| ritualist | Teufelspakt | 38.950 | 5.07 |
| butcher | Aufladung | 13.023 | 2.42 |
| butcher | Kampfinstinkt | 11.592 | 2.15 |
| butcher | Geist des Kriegers | 19.229 | 3.57 |
| butcher | Blutrausch | 6.565 | 1.22 |
| butcher | Bis in den Tot | 8.012 | 1.49 |
| gladiator | Energieausbruch | -7.023 | -1.16 |
| gladiator | Innere Kraft | 23.373 | 3.85 |
| gladiator | Volles Potential | -1.632 | -0.27 |
| luminet | Festigung des Glaubens | -766 | -0.12 |
| luminet | Aura Unterdrückung | -1.186 | -0.18 |
| druid | Herr der Elemente | 10.872 | 1.82 |
| summoner | Beweglichkeit | -8.016 | -1.55 |
| summoner | Scharfer Instinkte | -1.903 | -0.37 |
| summoner | Gute Reflexe | 1.051 | 0.20 |
| summoner | Keine Gnade | 62.411 | 12.11 |
| adventurer | Scharfer Instinkte | 3.788 | 0.84 |
| adventurer | Macht der Wildnis | 48.231 | 10.68 |
| shaman | Macht der Wildnis | 36.567 | 7.40 |

## Aktuelle Eigenbuffs

### ritualist: Geist des Feuers (Stufe 10)

Eigenbuff für 300 Sekunden mit zehn Stufen. Gewährt +1 Intelligenz je gelerntem Skilllevel, maximal +10 auf Stufe 10. Feuerangriffe erhalten zusätzlich +2 direkten Angriff je Skillstufe, maximal +20. Beide Boni sind gegenüber der bisherigen Definition halbiert. Aktivierungskosten 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana vor Rabatten. Feste Castzeit 0,1 Sekunden unabhängig von Angriffs- oder Castgeschwindigkeit; Cooldown 60 Sekunden. Einheitliche Element-Zuordnung und genaue Anwendung des flachen Feuerbonus bei Mehrfachtreffern und DoTs werden noch abgestimmt. Animationsdauer ist von der Castzeit getrennt.

### ritualist: Teufelspakt (Stufe 3)

Schließt einen Teufelspakt und verstärkt sich selbst für 600 Sekunden (10 Minuten). Je gelerntem Skilllevel +5 Wisdom, +5 Intelligenz und +5 Vitalität, auf Stufe 3 jeweils +15. Kein zufälliger Buff und kein zusätzlicher Risikoeffekt im aktuellen Entwurf. Mana 61 auf Stufe 1, +25 je weiterer Stufe, auf Stufe 3 111. Cooldown 60 Sekunden, Castzeit fest 0,1 Sekunden. Erneute Anwendung erneuert den Eigenbuff, ohne seine Stärke mit sich selbst zu stapeln. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 76 auf Stufe 3, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### butcher: Aufladung (Stufe 1)

Aktiver Eigenbuff mit einer einzigen Skillstufe. Verstärkt dich für 15 Sekunden um 25 Stärke, 240 maximale Lebenspunkte und 200 P-Angriff. Der Lebensbonus ist keine direkte Heilung. Cooldown 122 Sekunden. Feste Castzeit 0,1 Sekunden, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 102 Mana vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet. Die einzige Stufe übernimmt die bisherigen Werte von Skillstufe 5 und kostet einen Skillpunkt.

### butcher: Kampfinstinkt (Stufe 10)

Eigenbuff für 600 Sekunden. Stärke steigt gleichmäßig von 4 auf Stufe 1 bis 10 auf Stufe 10. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### butcher: Geist des Kriegers (Stufe 10)

Selbstbuff des Butchers. Erhöht Stärke und Vitalität jeweils um 2 je Skillstufe, bis zu jeweils 20 auf Stufe 10. Dauer 300 Sekunden, Cooldown 60 Sekunden auf allen Stufen. Aktivierung fest 0,1 Sekunden, unabhängig von Angriffs- oder Castgeschwindigkeit. Aktivierungskosten 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana auf Stufe 10 vor Vergünstigungen.

### butcher: Blutrausch (Stufe 10)

Eigenbuff für 60 Sekunden. Gewährt 5 bis 10 Punkte Angriffsgeschwindigkeit über 10 Stufen und 3 bis 7 Stärke. Castzeit fest 0,1 Sekunden., Dauer 60 Sekunden, Cooldown 300 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### butcher: Bis in den Tot (Stufe 10)

Eigenbuff für 15 Sekunden. Erhöht das Angriffstempo auf allen Stufen um 15 Prozent. Tauscht auf Stufe 1 vorübergehend 1 Prozent der aktuellen Vitalität gegen dieselbe Anzahl zusätzlicher Stärkepunkte. Je weiterer Stufe steigt der getauschte Vita-Anteil um 1 Prozentpunkt, bis zu 10 Prozent auf Stufe 10. Berechnung einmalig bei Aktivierung vor dem eigenen Effekt; kein prozentualer Stärke-Bonus und kein wiederholtes Abziehen. Beispiel: 100 Vita und 200 Stärke werden auf Stufe 10 zu 90 Vita und 210 Stärke. Beide Änderungen enden nach 15 Sekunden. Der alte feste Bonus von 55 P-Angriff und die Zweikampf-/Boss-Bedingung entfallen. Aktivierung kostet 50 Mana auf Stufe 1, +13 je weiterer Stufe bis 167. Cooldown 150 Sekunden, je weiterer Stufe 1 Sekunde weniger bis 141. Castzeit fest 0,1 Sekunden. Vita-Abzug senkt entsprechend Max-Leben, P-Abwehr und HP-Regeneration; Umgang mit aktuellen HP beim Wechsel des Max-Lebens bleibt offen. Kein Wiederbelebungseffekt. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### gladiator: Energieausbruch (Stufe 10)

Erzeugt einen Schild gegen physischen und magischen Schaden mit einer Kapazität von 10 % deines maximalen Lebens, ab Skilllevel 5 mit 12 % und auf Skilllevel 10 mit 15 %. Solange der Schild besteht und ausreichend Mana vorhanden ist, verursachen normale Angriffe 10 % mehr Schaden und du verbrauchst je Mana-Regenerationstick 1 % deines maximalen Manas. Bei unzureichendem Mana enden Angriffsbonus und Manaverbrauch, der Schild bleibt bestehen. Schildbruch beendet alle zugehörigen Effekte. Der Schild hält maximal 15 Sekunden, auf Skilllevel 10 maximal 20 Sekunden. Der Cooldown sinkt von 120 Sekunden auf Skilllevel 1 auf 90 Sekunden auf Skilllevel 10. Castzeit fest 0,1 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### gladiator: Innere Kraft (Stufe 15)

Eigenbuff mit 15 Skillstufen für 600 Sekunden. Stärke je Stufe: 2/3/5/6/7/8/10/11/12/14/15/16/17/19/20. Vitalität beginnt bei 3 und steigt auf jeder geraden Stufe um 1 bis 10. Auf ungeraden Stufen ab Stufe 3 kommen jeweils 5 feste Penetrationspunkte hinzu, maximal 35. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 232 auf Stufe 15, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### gladiator: Volles Potential (Stufe 3)

Eigenbuff mit drei Stufen; vereint Volles Potential und Kritische Schläge. Max-Leben +250/+500/+750; Glück +1/+2/+3; Max-Mana +66/+133/+200. Auf Maximalstufe zusätzlich +1 Prozentpunkt kritischer Schadensbonus (ohne weitere Boni 81 statt 80 Prozent Zusatzschaden bei kritischen Treffern). Normale Treffer erhalten diesen Bonus nicht. Kein zusätzlicher P-Angriff mehr. Kritische Schläge wird nicht zusätzlich gelernt oder gestapelt. Lebens- und Manaboni erhöhen die Maximalwerte, stellen die Ressourcen nicht sofort wieder her. Dauer 600 Sekunden, Cooldown 900 Sekunden, Castzeit fest 0,1 Sekunden. Aktivierungskosten 50 Mana auf Stufe 1, +13 je weiterer Stufe bis 76 Mana. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 76 auf Stufe 3, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### luminet: Festigung des Glaubens (Stufe 10)

Selbstbuff des Lumineten. Gewährt je Skillstufe 3 Intelligenz und senkt während der Wirkung die Willenskraft um 1,5. Auf Stufe 10: +30 Intelligenz und −15 Willenskraft. Dauer 300 Sekunden, Cooldown 60 Sekunden. Aktivierung fest 0,1 Sekunden. Kostet 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana auf Stufe 10 vor Vergünstigungen. Wirkt ausschließlich auf dich selbst; nach Ablauf entfallen beide Attributänderungen.

### luminet: Aura Unterdrückung (Stufe 10)

Eigenbuff für Kräuterkundler und Luminet, Dauer 180 Sekunden. Reduziert die durch Schaden neu erzeugte Aggro um 0,5 Prozent je gelerntem Skilllevel, bis zu 5 Prozent auf Stufe 10. Der Aggro-Multiplikator sinkt von 0,995 auf 0,95; der tatsächlich verursachte Schaden bleibt unverändert. Bei 1000 Schaden entstehen auf Stufe 10 950 Schadens-Aggro. Bereits angesammelte Aggro wird nicht rückwirkend gelöscht. Gewährt zusätzlich 1,2 Intelligenz je Skillstufe, bis zu 12 Intelligenz auf Stufe 10. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Cooldown 60 Sekunden. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### druid: Herr der Elemente (Stufe 10)

Eigenbuff mit zehn Stufen für 600 Sekunden. Stärke, Vitalität und Willenskraft steigen jeweils gemäß Stufentabelle 1/1/2/2/3/3/4/4/5/5. Intelligenz steigt um 1 je Skillstufe von 1 auf 10. Wirkt ausschließlich auf dich selbst; keine Faith- oder Victim-Boni. Aktivierungskosten unverändert: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 Mana vor Rabatten. Cooldown 60 Sekunden, feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist von der Castzeit getrennt. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### summoner: Beweglichkeit (Stufe 10)

Eigenbuff für 20 bis 24,5 Sekunden. Bewegungsgeschwindigkeit steigt von 1 Prozent auf Stufe 1 um 1 Prozentpunkt je weiterer Stufe auf 10 Prozent auf Stufe 10. Agilität steigt gleichmäßig von 0 auf 5. Castzeit fest 0,1 Sekunden. Cooldown sinkt von 120 um 2 Sekunden je weiterer Stufe auf 102 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### summoner: Scharfer Instinkte (Stufe 10)

Eigenbuff für 300 Sekunden. Gewährt 2 bis 11 Ambush und 0 bis 1 festen Angriffsgeschwindigkeitspunkt über zehn Stufen. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### summoner: Gute Reflexe (Stufe 10)

Eigenbuff für 600 Sekunden. Gewährt 1 Agilität je gelerntem Skilllevel, bis zu 10 auf Stufe 10. Während der Buff aktiv ist, kostet Dash 2 Ausdauerpunkte weniger, entsprechend 0,02 auf der Ausdauerskala von 0 bis 1. Der Rabatt gilt nur für Dash und steigt nicht mit der Skillstufe. Dash auf Stufe 10 kostet damit 0,18 statt 0,20 Ausdauer. Cooldown 60 Sekunden. Castzeit fest 0,1 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### summoner: Keine Gnade (Stufe 10)

Eigenbuff für 600 Sekunden. Gewährt 1 Geschicklichkeit je Skillstufe bis 10. P-Angriff 15 +6 je weiterer Stufe bis 69 auf Stufe 10. Kein direkter Angriffsgeschwindigkeitsbonus. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### adventurer: Scharfer Instinkte (Stufe 10)

Eigenbuff für 300 Sekunden. Gewährt 2 bis 11 Ambush und 0 bis 1 festen Angriffsgeschwindigkeitspunkt über zehn Stufen. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 167 auf Stufe 10, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### adventurer: Macht der Wildnis (Stufe 3)

Eigenbuff für Abenteurer und Schamane, Dauer 1200 Sekunden. Stärke 3 +1 je weiterer Stufe bis 5 und P-Angriff 30 +15 je weiterer Stufe bis 60 auf Stufe 3. Kein Intelligenzbonus. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 76 auf Stufe 3, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.

### shaman: Macht der Wildnis (Stufe 3)

Eigenbuff für Abenteurer und Schamane, Dauer 1200 Sekunden. Stärke 3 +1 je weiterer Stufe bis 5 und P-Angriff 30 +15 je weiterer Stufe bis 60 auf Stufe 3. Kein Intelligenzbonus. Cooldown 60 Sekunden. Feste Castzeit 0,1 Sekunden auf allen Stufen, unabhängig von Angriffs- oder Castgeschwindigkeit. Animationsdauer ist davon getrennt. Aktivierungskosten: 50 Mana auf Stufe 1, +13 je weiterer Stufe, maximal 76 auf Stufe 3, vor Rabatten. Laufender Mana-Verbrauch wird weiterhin getrennt berechnet.


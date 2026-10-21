# Dauerhafte Attributboni aus Skills je Klasse

**Aktuelle Ausnahme: Butcher hat nach der bestätigten Änderung von Ungebrochen 127 statt 130 feste Attributpunkte. Die bisherigen +13 Stärke wurden durch +30 physischen Skillschaden ersetzt; der aktuelle zusätzliche Willenskraftbonus auf Stufe 10 beträgt 10. Dieser Bonus ist kein Attribut und zählt nicht in die obere Summe. Die nachfolgenden ursprünglichen Plan-Tabellen dokumentieren den vorherigen 130-Punkte-Stand.**

Alle zugeordneten Passiven auf maximal lernbarer Stufe. Gezählt werden sechs Hauptattribute: Stärke, Vitalität, Intelligenz, Willenskraft, Agilität und Geschick. Grundwerte, Charakterlevel, Ausrüstung, aktive Buffs, Procs und Begleiterboni sind ausgeschlossen. Glück und Spezialattribute stehen separat. Direkte Kampfwerte wie Angriff, Abwehr, Mana und Block sind keine Attributpunkte und fehlen deshalb in dieser Summe. Die Summe ist ein Mengenvergleich, keine Bewertung der Kampfstärke.

| Klasse | Stärke | Vitalität | Intelligenz | Willenskraft | Agilität | Geschick | Summe | Glück zusätzlich |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 30 | 45 | 0 | 40 | 5 | 10 | **130** | 0 |
| Butcher | 32 | 40 | 0 | 45 | 5 | 5 | **127** | 0 |
| Druide | 15 | 25 | 35 | 45 | 0 | 10 | **130** | 0 |
| Gladiator | 25 | 55 | 0 | 45 | 5 | 0 | **130** | 10 |
| Heiler | 0 | 20 | 45 | 55 | 0 | 10 | **130** | 0 |
| Kräuterkundler | 0 | 35 | 40 | 45 | 0 | 10 | **130** | 0 |
| Jäger | 0 | 35 | 0 | 35 | 21 | 39 | **130** | 3 |
| Ritter | 25 | 50 | 10 | 45 | 0 | 0 | **130** | 0 |
| Luminet | 0 | 30 | 40 | 50 | 0 | 10 | **130** | 3 |
| Ritualist | 10 | 30 | 10 | 30 | 5 | 15 | **100** | 0 |
| Schamane | 17 | 28 | 35 | 40 | 0 | 10 | **130** | 0 |
| Nachtjäger | 10 | 25 | 0 | 25 | 30 | 40 | **130** | 0 |
| Schurke | 28 | 25 | 0 | 25 | 27 | 25 | **130** | 0 |

## Ursprüngliche umgesetzte Attributverteilung nach Klassenrolle (historisch)

Umgesetzt sind **130 feste Hauptattributpunkte je Klasse**, beim **Ritualisten 120** wegen seines zusätzlichen Dämons. Das Grundbudget liegt nahe an der aktuellen Mitte der Klassen. Die Zahlen ersetzen gedanklich die gesamte feste Skill-Attributsumme der oberen Tabelle; sie sind keine zusätzlichen Boni. Die Datenbank-Anpassungen sind bestätigt und umgesetzt. Der nachfolgende Schadenstest bewertet ihre Leistungswirkung. Feste Attribute steigen je Stufe linear um Maximalbonus geteilt durch Stufenzahl.

| Klasse | Stärke | Vitalität | Intelligenz | Willenskraft | Agilität | Geschick | Summe | Änderung gegenüber vor der Anpassung |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 30 | 45 | 0 | 40 | 5 | 10 | **130** | -7 |
| Butcher | 45 | 40 | 0 | 35 | 5 | 5 | **130** | -2 |
| Druide | 15 | 25 | 35 | 45 | 0 | 10 | **130** | +28 |
| Gladiator | 25 | 55 | 0 | 45 | 5 | 0 | **130** | -2 |
| Heiler | 0 | 20 | 45 | 55 | 0 | 10 | **130** | -1 |
| Kräuterkundler | 0 | 35 | 40 | 45 | 0 | 10 | **130** | -2 |
| Jäger | 0 | 35 | 0 | 35 | 21 | 39 | **130** | -14 |
| Ritter | 25 | 50 | 10 | 45 | 0 | 0 | **130** | -47 |
| Luminet | 0 | 30 | 40 | 50 | 0 | 10 | **130** | +9 |
| Ritualist | 10 | 30 | 10 | 50 | 5 | 15 | **120** | +30 |
| Schamane | 17 | 28 | 35 | 40 | 0 | 10 | **130** | -17 |
| Nachtjäger | 10 | 25 | 0 | 25 | 30 | 40 | **130** | +4 |
| Schurke | 28 | 25 | 0 | 25 | 27 | 25 | **130** | -7 |

### Ursprüngliche Anpassungen der vorhandenen Passiven (historisch)

Die obige Zieltabelle ist auf diese konkret durchgerechnete Variante abgestimmt. Einzelne Verteilungen weichen vom ersten Rollenentwurf ab, damit gemeinsame Skills identisch bleiben. Rassen-Skills, drei Erweiterungen, Waffentrainings, allgemeines Waffen-/Rüstungstraining und Ausdauertraining bleiben auf dem aktuellen Stand. Ausweichtraining bleibt bei +10 Agilität/+5 Geschick. Keine neuen Skills oder Lernstufen: 32 Skills und 280 Skillpunkte bleiben erhalten. Die bestätigten neuen dauerhaften Attributanteile sind in der Datenbank enthalten; bestehende Spezialeffekte und aktive Self-Buffs bleiben unverändert.

Die Attributspalte **ersetzt** den bisherigen festen Hauptattributanteil des jeweiligen Skills vollständig, sie wird nicht zusätzlich daraufgerechnet. Alle Angaben sind Maximalwerte. Je gelernter Stufe steigt jedes feste Attribut um Maximalwert geteilt durch die Zahl der Skillstufen.

| Passivskill | Klassen | Feste Hauptattributboni auf Maximalstufe | Weitere Regeln |
| --- | --- | --- | --- |
| Standhaft | Butcher, Gladiator, Ritter | +10 Vitalität, +5 Willenskraft | Standhaft halbieren. Gilt identisch für Gladiator, Butcher und Ritter. |
| Körperbeherrschung | Abenteurer, Schurke | +10 Geschick, +5 Agilität | Körperbeherrschung vereinheitlichen; die bisherigen 3 % Mana-Kostenreduktion auf Maximalstufe bleiben. |
| Durchhalten | Abenteurer, Gladiator | +8 Stärke, +5 Vitalität | Durchhalten erstmals eindeutig als dauerhaften Attributskill definieren, ohne Auslöser und ohne direkte Abwehrboni. Gleiche Werte für Abenteurer und Gladiator. Die bisher unvollständige Definition wird damit ersetzt. |
| Ungebrochen | Butcher | +13 Stärke | Ungebrochen erhält zusätzlich einen ständig wirksamen Stärkebonus. Der bestehende Effekt nach tödlichem Schaden bleibt separat und unverändert. Dieser permanente Anteil wurde ergänzt. |
| Kanalisierung | Druide | +10 Stärke, +5 Vitalität, +8 Intelligenz, +5 Willenskraft | Kanalisierung erhält einen neuen permanenten Attributanteil. Der bestehende direkte Max-Mana-Bonus bleibt unverändert. |
| Hoffnungsschimmer | Heiler, Luminet | +6 Intelligenz, +4 Willenskraft | Hoffnungsschimmer gemeinsam für Heiler und Luminet. Direkte MP-Regeneration bleibt unverändert. |
| Das ewige Wissen | Heiler, Luminet | +14 Intelligenz, +6 Willenskraft | Das ewige Wissen gemeinsam für Heiler und Luminet. |
| Immunität | Heiler | +5 Intelligenz, +5 Willenskraft | Immunität: bisherige Attributboni ersetzen; Fluchabwehr und direkte M-Abwehr bleiben unverändert. |
| Abschöpfen | Kräuterkundler | +25 Intelligenz, +5 Willenskraft | Abschöpfen stärker auf Intelligenz ausrichten. |
| Naturgewalt | Kräuterkundler | +5 Intelligenz, +5 Vitalität | Naturgewalt: bisherigen Attributanteil ersetzen; eine lernbare Stufe bleibt erhalten. |
| Auf der Jagd | Jäger | +8 Geschick, +1 Agilität | Auf der Jagd verkleinern. Waffen-, Ausweichtraining und Durchziehen bleiben erhalten. |
| Eiserner Schild | Ritter | +5 Vitalität | Eiserner Schild: Vitalität halbieren; +10 M-Abwehr und +10 Blockpunkte bleiben. |
| Eiserner Wille | Ritter | +3 Stärke | Eiserner Wille: feste +20 Vitalität/+10 Willenskraft durch +3 Stärke ersetzen. +20 Blockpunkte und dynamische Vitalität-zu-Stärke-Umrechnung bleiben separat erhalten. |
| Unerschöpfliche Hoffnung | Luminet | +10 Vitalität | Unerschöpfliche Hoffnung: bisherigen festen Intelligenzbonus durch Vitalität ersetzen. +3 Glück und +20 direkter M-Angriff bleiben unverändert. |
| Arkane Aufladung | Ritualist | +10 Vitalität, +20 Willenskraft | Arkane Aufladung erhält neue dauerhafte defensive Attribute. +20 direkte MP-Regeneration bleiben unverändert. Keine zusätzliche Intelligenz; Dämon und Seelenspeicher bleiben separat. |
| Weisheit des Erdweisen | Schamane | +10 Stärke, +8 Vitalität, +10 Intelligenz | Weisheit des Erdweisen umverteilen; bisherige feste Willenskraft entfällt. Die 3 % zusätzliche Mana-Regeneration bleiben. |
| Hartes Training | Nachtjäger | +14 Geschick | Hartes Training: Geschick von 10 auf 14. Die konstanten 5 Punkte Angriffsgeschwindigkeit bleiben. |
| Technische Perfektion | Schurke | +13 Stärke | Technische Perfektion erhält einen neuen permanenten Stärkebonus. +4 Max-Mana je aktuellem Geschickpunkt auf Stufe 4 bleiben unverändert. |

Diese Änderungen wurden gegen alle 13 aktuellen Klassenzuweisungen gerechnet: zwölf Klassen ergeben exakt 130 feste Hauptattributpunkte, der Ritualist 120. Die zusätzlichen dynamischen und bedingten Boni sind darin weiterhin nicht enthalten. Die Leistungswirkung wird im separat erzeugten aktuellen 600-Sekunden-Bericht geprüft. Mehr Willenskraft kann insbesondere über Mana-Regeneration den dauerhaften Schaden steigern, auch ohne mehr Intelligenz.

Gleiche Punktmengen bedeuten keine gleiche Kampfstärke: Angriffsattribute, defensive Attribute, direkte Angriffsboni, Skill-Grundschaden, Frequenz und Ressourcen haben unterschiedliche Auswirkungen. Gerade Ritualist und Luminet sollten durch den Mengenausgleich nicht automatisch mehr Intelligenz erhalten. Auch zusätzliche Vitalität und Willenskraft können durch längeres Überleben und weniger Ressourcenpausen die Kampfleistung erhöhen. Der Ritter wird über Tank-Leistung und Bedrohung beurteilt; geringerer Schaden allein macht ihn nicht zur schwächsten Klasse.

- **Abenteurer:** Vielseitiger Begleiterkämpfer: solide Stärke und Überleben, etwas Geschick für Genauigkeit.
- **Butcher:** Schwerer Nahkämpfer: Schwerpunkt Stärke, danach Vitalität.
- **Druide:** Hybrid und Unterstützer: Magie mit kleiner körperlicher Komponente, ausreichende Willenskraft.
- **Gladiator:** Robuster Nahkämpfer: Stärke und Vitalität, etwas Agilität.
- **Heiler:** Heilung und Ausdauer: Willenskraft vor Intelligenz; Heilskalierung gesondert prüfen.
- **Kräuterkundler:** Magischer Unterstützer: Intelligenz und Willenskraft gleich gewichtet, etwas mehr Vitalität.
- **Jäger:** Fernkämpfer: Geschick als Angriffsattribut, Agilität als zweiter Schwerpunkt.
- **Ritter:** Tank: hoher Vitalitätsbonus, ergänzende Willenskraft und etwas Stärke. Intelligenz aus dem Rassen-Skill bleibt enthalten; dynamische Zusatzstärke und Block kommen separat hinzu.
- **Luminet:** Bereits starker Magier: Intelligenz unverändert; das zusätzliche Budget geht in Vitalität statt mehr Angriff.
- **Ritualist:** Vorläufig 120 statt 130 feste Attributpunkte als Abschlag für Morrak. Ohne Dämon etwas schwächer als Luminet; mit Morraks eigenem Schaden und den Beschwörungsboni ungefähr gleichauf, gerne leicht darunter. Feste Intelligenz unverändert. Reaper bleibt separat. Die genaue Differenz muss der Schadensvergleich bestätigen.
- **Schamane:** Offensiver Hybrid: Stärke und Intelligenz, weniger zusätzliche Willenskraft als bisher.
- **Nachtjäger:** Schneller Armbrustkämpfer: Geschick vor Agilität; Rassen-Stärke bleibt erhalten.
- **Schurke:** Beweglicher Nahkämpfer: mehr Stärke für den tatsächlichen Angriff, Agilität für Tempo; Geschick unterstützt Genauigkeit und Technische Perfektion.

Reaper (nur Speicher), Eiserner Wille (Vitalität → zusätzliche Stärke), Vergessener Zauber (gewählter Zusatzlevel mit Attributabzug), Procs, Glück und direkte Kampfwerte bleiben wie in der oberen Tabelle separat. Der Vorschlag ändert keine davon. Ein zusätzlicher allgemein geteilter Magier-Skill ist für einen fairen Gesamtvergleich nicht zwingend: Bereits vorhandene eigene Magier-Passiven zählen in das Budget hinein.

**Balancingziel Luminet/Ritualist:** Ohne Morrak soll der Ritualist etwas schwächer sein. Mit Morraks eigenem Schaden und dem nur während der verbesserten Beschwörung gewährten Bonus von +5 Intelligenz/+5 Willenskraft soll er insgesamt ungefähr beim Luminet liegen, gerne leicht darunter. Diese Beiträge getrennt erfassen und genau einmal rechnen. Vergleich ohne aktive Buffs, mit eigenen Buffs und mit Gruppenbuffs unter gleichen Bedingungen; sowohl aktive Beschwörungsphase als auch tatsächliche Verfügbarkeit mit Beschwörungskosten und Cooldown beachten. Der Abschlag von zehn festen Punkten ist vorläufig und beweist noch keine entsprechende Schadensdifferenz.

## Abenteurer

| Skill | Gelernte Stufe | Hauptattributboni | Summe |
| --- | ---: | --- | ---: |
| Adaption | 20 | +10 Vitalität, +10 Willenskraft | 20 |
| Erweiterung des Körpers | 10 | +10 Stärke, +10 Vitalität, +10 Willenskraft | 30 |
| Körperbeherrschung | 10 | +5 Agilität, +10 Geschick | 15 |
| Ausdauertraining | 20 | +20 Vitalität, +20 Willenskraft | 40 |
| Durchhalten | 10 | +8 Stärke, +5 Vitalität | 13 |
| Breitschwert-Training | 10 | +12 Stärke | 12 |

## Butcher

| Skill | Gelernte Stufe | Hauptattributboni | Summe |
| --- | ---: | --- | ---: |
| Überleben | 20 | +10 Stärke, +5 Agilität, +5 Geschick | 20 |
| Erweiterung des Körpers | 10 | +10 Stärke, +10 Vitalität, +10 Willenskraft | 30 |
| Zweihändiges Axttraining | 10 | +12 Stärke | 12 |
| Ausdauertraining | 20 | +20 Vitalität, +20 Willenskraft | 40 |
| Standhaft | 10 | +10 Vitalität, +5 Willenskraft | 15 |
| Ungebrochen | 10 | +10 Willenskraft | 10 |

## Druide

| Skill | Gelernte Stufe | Hauptattributboni | Summe |
| --- | ---: | --- | ---: |
| Erleuchtung | 20 | +10 Intelligenz, +10 Willenskraft | 20 |
| Erweiterung des Geistes | 10 | +10 Intelligenz, +10 Willenskraft, +10 Geschick | 30 |
| Zweihändiges Streitkolbentraining | 10 | +5 Stärke, +7 Intelligenz | 12 |
| Ausdauertraining | 20 | +20 Vitalität, +20 Willenskraft | 40 |
| Kanalisierung | 10 | +10 Stärke, +5 Vitalität, +8 Intelligenz, +5 Willenskraft | 28 |

Vergessener Zauber: Zielskillabhängige Wahl: auf Stufe 2 −15 je Hauptattribut, insgesamt −90, plus Bonus des gewählten Zielskills

## Gladiator

| Skill | Gelernte Stufe | Hauptattributboni | Summe |
| --- | ---: | --- | ---: |
| Adaption | 20 | +10 Vitalität, +10 Willenskraft | 20 |
| Dual Axttraining | 10 | +7 Stärke, +5 Agilität | 12 |
| Erweiterung des Körpers | 10 | +10 Stärke, +10 Vitalität, +10 Willenskraft | 30 |
| Ausdauertraining | 20 | +20 Vitalität, +20 Willenskraft | 40 |
| Standhaft | 10 | +10 Vitalität, +5 Willenskraft | 15 |
| Durchhalten | 10 | +8 Stärke, +5 Vitalität | 13 |

## Heiler

| Skill | Gelernte Stufe | Hauptattributboni | Summe |
| --- | ---: | --- | ---: |
| Erleuchtung | 20 | +10 Intelligenz, +10 Willenskraft | 20 |
| Erweiterung des Geistes | 10 | +10 Intelligenz, +10 Willenskraft, +10 Geschick | 30 |
| Hoffnungsschimmer | 10 | +6 Intelligenz, +4 Willenskraft | 10 |
| Ausdauertraining | 20 | +20 Vitalität, +20 Willenskraft | 40 |
| Immunität | 10 | +5 Intelligenz, +5 Willenskraft | 10 |
| Das ewige Wissen | 10 | +14 Intelligenz, +6 Willenskraft | 20 |

## Kräuterkundler

| Skill | Gelernte Stufe | Hauptattributboni | Summe |
| --- | ---: | --- | ---: |
| Abschöpfen | 10 | +25 Intelligenz, +5 Willenskraft | 30 |
| Adaption | 20 | +10 Vitalität, +10 Willenskraft | 20 |
| Erweiterung des Geistes | 10 | +10 Intelligenz, +10 Willenskraft, +10 Geschick | 30 |
| Naturgewalt | 1 | +5 Vitalität, +5 Intelligenz | 10 |
| Ausdauertraining | 20 | +20 Vitalität, +20 Willenskraft | 40 |

## Jäger

| Skill | Gelernte Stufe | Hauptattributboni | Summe |
| --- | ---: | --- | ---: |
| Adaption | 20 | +10 Vitalität, +10 Willenskraft | 20 |
| Auf der Jagd | 5 | +1 Agilität, +8 Geschick | 9 |
| Bogenschießtraining | 10 | +11 Geschick | 11 |
| Erweiterung der Sinne | 10 | +5 Vitalität, +5 Willenskraft, +10 Agilität, +10 Geschick | 30 |
| Voll Durchziehen | 10 | +5 Geschick | 5 |
| Ausdauertraining | 20 | +20 Vitalität, +20 Willenskraft | 40 |
| Ausweichtraining | 10 | +10 Agilität, +5 Geschick | 15 |

## Ritter

| Skill | Gelernte Stufe | Hauptattributboni | Summe |
| --- | ---: | --- | ---: |
| Erleuchtung | 20 | +10 Intelligenz, +10 Willenskraft | 20 |
| Eiserner Schild | 10 | +5 Vitalität | 5 |
| Erweiterung des Körpers | 10 | +10 Stärke, +10 Vitalität, +10 Willenskraft | 30 |
| Schildangriffstraining | 5 | +6 Stärke, +3 Vitalität | 9 |
| Schwerttraining | 5 | +6 Stärke, +2 Vitalität | 8 |
| Ausdauertraining | 20 | +20 Vitalität, +20 Willenskraft | 40 |
| Standhaft | 10 | +10 Vitalität, +5 Willenskraft | 15 |
| Eiserner Wille | 10 | +3 Stärke | 3 |

Eiserner Wille: zusätzlich 10 % der aktuellen Gesamt-Vitalität als Stärke. Allein aus den hier summierten Skill-Vitalitätsboni ergibt das +5 Stärke; Grundwerte, Ausrüstung und Buffs kämen als Berechnungsbasis hinzu.

## Luminet

| Skill | Gelernte Stufe | Hauptattributboni | Summe |
| --- | ---: | --- | ---: |
| Erleuchtung | 20 | +10 Intelligenz, +10 Willenskraft | 20 |
| Erweiterung des Geistes | 10 | +10 Intelligenz, +10 Willenskraft, +10 Geschick | 30 |
| Hoffnungsschimmer | 10 | +6 Intelligenz, +4 Willenskraft | 10 |
| Unerschöpfliche Hoffnung | 10 | +10 Vitalität | 10 |
| Ausdauertraining | 20 | +20 Vitalität, +20 Willenskraft | 40 |
| Das ewige Wissen | 10 | +14 Intelligenz, +6 Willenskraft | 20 |

## Ritualist

| Skill | Gelernte Stufe | Hauptattributboni | Summe |
| --- | ---: | --- | ---: |
| Überleben | 20 | +10 Stärke, +5 Agilität, +5 Geschick | 20 |
| Erweiterung des Geistes | 10 | +10 Intelligenz, +10 Willenskraft, +10 Geschick | 30 |
| Ausdauertraining | 20 | +20 Vitalität, +20 Willenskraft | 40 |
| Arkane Aufladung | 10 | +10 Vitalität | 10 |

Reaper: ausschließlich Seelenspeicher ohne Attributbonus. Permanenter passiver Vorratsbonus mit einer lernbaren Stufe. Je volle zehn aktuell gespeicherte Seelen im durch Reaper verwalteten Speicher +3 direkter M-Angriff: 0–9 Seelen geben 0, 10–19 geben +3, 20–29 geben +6, bis maximal +30 bei 100 Seelen. Bonus sinkt beim Ausgeben entsprechend der vollen Zehnergruppen. Reaper selbst gibt keinen Intelligenzbonus. Keine eigene Seelenerzeugung, kein historischer Tötungszähler und keine Moralvoraussetzung. Keine Aktivierungskosten, Castzeit, Cooldown oder begrenzte Dauer.

Morrak´s Meister: Nur während der Morrak-Beschwörung

## Schamane

| Skill | Gelernte Stufe | Hauptattributboni | Summe |
| --- | ---: | --- | ---: |
| Erleuchtung | 20 | +10 Intelligenz, +10 Willenskraft | 20 |
| Erweiterung des Geistes | 10 | +10 Intelligenz, +10 Willenskraft, +10 Geschick | 30 |
| Ausdauertraining | 20 | +20 Vitalität, +20 Willenskraft | 40 |
| Streitkolbentraining | 10 | +7 Stärke, +5 Intelligenz | 12 |
| Weisheit des Erdweisen | 5 | +10 Stärke, +8 Vitalität, +10 Intelligenz | 28 |

## Nachtjäger

| Skill | Gelernte Stufe | Hauptattributboni | Summe |
| --- | ---: | --- | ---: |
| Überleben | 20 | +10 Stärke, +5 Agilität, +5 Geschick | 20 |
| Armbrusttraining | 10 | +5 Agilität, +6 Geschick | 11 |
| Erweiterung der Sinne | 10 | +5 Vitalität, +5 Willenskraft, +10 Agilität, +10 Geschick | 30 |
| Ausdauertraining | 20 | +20 Vitalität, +20 Willenskraft | 40 |
| Ausweichtraining | 10 | +10 Agilität, +5 Geschick | 15 |
| Hartes Training | 10 | +14 Geschick | 14 |

## Schurke

| Skill | Gelernte Stufe | Hauptattributboni | Summe |
| --- | ---: | --- | ---: |
| Überleben | 20 | +10 Stärke, +5 Agilität, +5 Geschick | 20 |
| Dolchtraining | 10 | +5 Stärke, +7 Agilität | 12 |
| Erweiterung der Sinne | 10 | +5 Vitalität, +5 Willenskraft, +10 Agilität, +10 Geschick | 30 |
| Körperbeherrschung | 10 | +5 Agilität, +10 Geschick | 15 |
| Ausdauertraining | 20 | +20 Vitalität, +20 Willenskraft | 40 |
| Technische Perfektion | 4 | +13 Stärke | 13 |

## Umsetzungsstand

Alle 18 bestätigten Passiv-Anpassungen sind in Datenbank und Katalog gespeichert. Die drei Varianten ohne optionale Buffs, mit Eigenbuffs und mit Eigen-/Gruppenbuffs werden im aktuellen [600-Sekunden-Test](all-class-timed-damage.md) ausgewertet. Aktive Self-Buff-Definitionen wurden nicht geändert.


Aktuelle Ritualisten-Anpassung: Arkane Aufladung gibt keine +20 Willenskraft mehr, daher jetzt 100 feste Attributpunkte. Direkte MP-Regeneration 16–24 je Tick; Reaper ohne Intelligenzbonus; Zahl der Opfer maximal +30 direkter M-Angriff; Ausbrennen maximal +40 M-Angriff. Diese direkten und dynamischen Boni zählen nicht als feste Hauptattribute.

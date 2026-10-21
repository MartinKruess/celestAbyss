> Mace-Status: In MongoDB gespeichert und zurückgelesen. Bestehende Simulationen verwenden weiterhin die vorherige Ausrüstung. Geplant: zwei Einhand-Maces für Schamane, ein Zweihand-Mace für Druide.

# Waffen – vollständiger aktueller Bestand

Stand: 18.10.2026. Mace-Werte nach bestätigtem Entwurf aktualisiert. Enthalten sind alle 78 Waffen einschließlich Schilden, sämtliche Ränge und alle gespeicherten spielbezogenen Felder. Nicht gespeicherte Werte sind **nicht automatisch null**. Technische MongoDB-IDs und Versionszähler werden nicht dargestellt.

## Klassenzuordnung und Vergleichsgrundlage

**Kampfwerte aktualisiert:** Rangkurve +77 / +75 / +73 / +71 / +69 %, vom ungerundeten Zwischenwert gerechnet und je Rang als ganze Zahl gespeichert. Neue Startwerte: Einhandaxt 13 P-Angriff, Armbrust 25 P-Angriff, Schild 8 P-Abwehr, alle drei Stabreihen 25 M-Angriff. Bogen bleibt bei 31 P-Angriff. Armbrust-Startwert 25 ist nach dem Vergleich in MongoDB übernommen. Alle anderen vorhandenen Startwerte bleiben. Zweihandschwert besitzt jetzt 16/28/50/86/147/248 P-Angriff und −15/−15/−15/−23/−23/−23 Angriffstempo; Zusatzattribute Rang 2–6: Stärke 2/5/10/15/20, Agilität 1/1/2/5/7, Geschick 0/1/1/3/3. Beide Mace-Reihen sind ausgearbeitet: Einhand startet mit 8 P-/5 M-Angriff, Zweihand mit 10 P-/16 M-Angriff. Zweihandtempo wie Zweihandschwert: −15 auf R1–3, −23 auf R4–6. Die Simulation wurde noch nicht neu gerechnet.

**Spezialstäbe:** Rang 2/3 bei Licht- und Victim-Stab wie beim Int-Stab: 3 Int + 2 Willenskraft / 6 Int + 4 Willenskraft. Lichtstab Rang 4–6: 10 Faith + 5 Willenskraft / 15 Faith + 10 Willenskraft / 20 Faith + 10 Willenskraft. Victim-Stab Rang 4–6: 12 Victim + 3 Vita / 20 Victim + 5 Vita / 22 Victim + 8 Vita. Spätere Skill-Freischaltung geplant: Faith beim Luminet 1,8 und Victim beim Ritualisten 1,9 M-Angriff pro Punkt zusätzlich zur Intelligenz; derzeit gesperrt.

**Gezielte Attributanpassungen:** Einhandaxt Rang 4/5/6: 8/11/15 Stärke pro Waffe. Schild Rang 2–6: 4/8/12/16/20 Vita. Dolche Rang 2–6 je Waffe: 2/3/4/5/8 Agilität und ebenso viel Ambush. Armbrust Rang 5: 10 Geschick + 10 Agilität; Rang 6: 14 Geschick + 11 Agilität. Diese Werte ersetzen an diesen Stellen die allgemeine Verschiebung der Attributboni.

**Umgesetzt:** Rang 1 ohne primäre Attributboni; Rang 2–6 erhalten jeweils die bisherigen Attribute des Vorrangs. Angriff, Abwehr, Block, Krit-Quellwerte und Angriffstempo bleiben unverändert. Die alten R6-Simulationsvorlagen unten sind als historische Referenz erhalten und wurden noch nicht neu berechnet.

**Abenteurer:** Die bestehende Zweihandschwert-Reihe (`Sword2H`, unter anderem Longsword und Great Sword) ist seine eigene Waffenreihe. Diese Zuordnung ersetzt die zuvor erwogene Zweihand-Mace-Reihe. Als Referenzen für die spätere gemeinsame Ausarbeitung dienen Einhandschwert und Zweihandaxt. Angriffswerte und Tempo sind festgelegt; Attribute sind festgelegt: Stärke und kleine Agilitäts-/Geschickboni; vorhandene technische Itemwerte bleiben erhalten. Die aktuelle Simulation verwendet die neue Zweihandschwert-Reihe; frühere Einhandschwert-/Mace-Vergleiche bleiben im Archiv.

Die Item-Dokumente enthalten keine verbindlichen Klassenbeschränkungen. Die Zuordnung unten nennt die aktuelle Vergleichsnutzung beziehungsweise ausdrücklich abgeleitete Rollen. Insbesondere besitzt der Heiler noch keine separat ausgewiesene vierte Stab-Reihe. Es gibt drei benannte Stab-Reihen: Faith, Intelligenz/Willenskraft und Victim.

**Wichtig:** Der bisherige R6-Klassenvergleich benutzt allgemeine Waffen-Grundwerte aus `ranked-equipment.json`, keine individuellen benannten MongoDB-Waffen. Bei allen vier Magiern war dies dieselbe Vorlage „Wand“ mit 40 Intelligenz, 498 M-Angriff, 8 Willenskraft und −30 Prozentpunkten Angriffstempo. Die benannten Stäbe haben davon abweichende Attribute. Die letzte benannte Waffenserie ist Rang 6 / benötigtes Level 100. Die zuvor fehlerhafte Rang-5-Kennzeichnung dieser 13 Waffen wurde korrigiert; sämtliche Kampfwerte blieben erhalten. Die Vergleichsvorlage R6 ist ein eigener Datenstand.

Block- und Krit-Quellwerte werden unverändert dargestellt und nicht stillschweigend als Prozent interpretiert. „Int/Faith/Vic“ der Vergleichsvorlage ist ein alternatives Quelllabel, kein dreifacher Attributbonus; der aktuelle Vergleich verwendet Intelligenz. Beschreibungen sind Text und keine automatisch implementierten Zusatzeffekte.

## R6-Grundwerte der bisherigen Simulation

| Waffentyp | Klassen im Vergleich | Sämtliche gespeicherten Grundboni |
| --- | --- | --- |
| 1H Axt | Gladiator, zweimal | P.Ang: 201<br>Block: 0.1<br>ATK Speed: -15<br>Stärke: 15 |
| 2H Axt | Butcher | P.Ang: 418<br>ATK Speed: -30<br>Stärke: 30 |
| Bow | Jäger | P.Ang: 480<br>ATK Speed: -30<br>Dexterity: 25 |
| Crossbow | Seelenjäger | P.Ang: 386<br>ATK Speed: -20<br>Dexterity: 14<br>Agility: 11 |
| Dagger | Schurke, zweimal | P.Ang: 124<br>ATK Speed: -10<br>Agility: 8<br>Ambush: 8 |
| Mace | Abenteurer / Druide / Schamane | P.Ang: 124<br>M.Ang: 77<br>ATK Speed: -15<br>Stärke: 8<br>Intelligence: 5 |
| Shield | Ritter | P.Deff: 124<br>Block: 0.15<br>ATK Speed: -15<br>Vita: 20 |
| Sword | Ritter / Abenteurer-Variante | P.Ang: 186<br>ATK Speed: -15<br>Stärke: 20 |
| 2H Schwert | Nicht verwendet | ATK Speed: -23<br>P.Ang: 248<br>Stärke: 20<br>Agility: 7<br>Dexterity: 3 |
| Wand | Heiler / Kräuterkundler / Luminet / Ritualist | M.Ang: 387<br>ATK Speed: -30<br>Intelligence: 18<br>Wisdom: 12 |
| Lichtstab | Nicht verwendet | M.Ang: 387<br>ATK Speed: -30<br>Intelligence: 20<br>Wisdom: 10 |
| Victim-Stab | Nicht verwendet | M.Ang: 387<br>ATK Speed: -30<br>Intelligence: 22<br>Vita: 8 |
| 2H Mace | Nicht verwendet | ATK Speed: -23<br>P.Ang: 155<br>M.Ang: 248<br>Stärke: 10<br>Intelligence: 16 |

## Alle benannten Waffen im Arbeitsbestand

| Waffe | Rang | Level | Typ | Klassenbezug | Kampfwerte und Attribute |
| --- | ---: | ---: | --- | --- | --- |
| Small Battleax | 1 | 1 | Axe | Gladiator (zwei Einhandäxte) | P-Angriff: 13<br>Angriffstempo (Quellwert): -10 |
| Battleaxe | 1 | 1 | Axe2H | Butcher | P-Angriff: 27<br>Angriffstempo (Quellwert): -20 |
| Small Wooden Bow | 1 | 1 | Bow | Jäger | P-Angriff: 31<br>Angriffstempo (Quellwert): -20 |
| Light Crossbow | 1 | 1 | Crossbow | Seelenjäger | P-Angriff: 24<br>Angriffstempo (Quellwert): -15 |
| Shark Tooth Dagger | 1 | 1 | Dagger | Schurke (zwei Dolche) | P-Angriff: 8<br>Angriffstempo (Quellwert): -5 |
| Little Mace | 1 | 1 | Mace | Druide / Schamane / Abenteurer (aktuelle Vergleichsausrüstung) | P-Angriff: 8<br>M-Angriff: 5<br>Angriffstempo (Quellwert): -10 |
| Big Mace | 1 | 1 | Mace2H | Noch keiner Vergleichsklasse zugeordnet | Angriffstempo (Quellwert): -15<br>P-Angriff: 10<br>M-Angriff: 16 |
| Wooden Shield | 1 | 1 | Shield | Ritter | P-Verteidigung: 8<br>Block (Quellwert): 0.02<br>Angriffstempo (Quellwert): -10 |
| Iron Sword | 1 | 1 | Sword | Ritter / Abenteurer (Vergleichsvariante) | P-Angriff: 12<br>Angriffstempo (Quellwert): -10 |
| Longsword | 1 | 1 | Sword2H | Abenteurer – zugeordnete eigene Waffenreihe; Kampfwerte noch auszuarbeiten | Angriffstempo (Quellwert): -15<br>P-Angriff: 16 |
| Staff of the Brightness | 1 | 1 | Wand2H | Luminet; Heiler als mögliche gemeinsame Lichtwaffe (abgeleitet) | M-Angriff: 25<br>Angriffstempo (Quellwert): -20 |
| Simple Wand | 1 | 1 | Wand2H | Heiler / Kräuterkundler; allgemeiner Int-Stab auch für Luminet / Ritualist denkbar (abgeleitet) | M-Angriff: 25<br>Angriffstempo (Quellwert): -20 |
| Staff of Obsession | 1 | 1 | Wand2H | Ritualist (aus Victim abgeleitet) | M-Angriff: 25<br>Angriffstempo (Quellwert): -20 |
| Thunder Axe | 2 | 20 | Axe | Gladiator (zwei Einhandäxte) | P-Angriff: 23<br>Angriffstempo (Quellwert): -10<br>Stärke: 2 |
| Great Battleaxe | 2 | 20 | Axe2H | Butcher | P-Angriff: 48<br>Angriffstempo (Quellwert): -20<br>Stärke: 5 |
| Nobler Wooden Bow | 2 | 20 | Bow | Jäger | P-Angriff: 55<br>Angriffstempo (Quellwert): -20<br>Geschick: 5 |
| Heaviness Crossbow | 2 | 20 | Crossbow | Seelenjäger | P-Angriff: 43<br>Angriffstempo (Quellwert): -15<br>Geschick: 2<br>Agilität: 2 |
| Balanced Dagger | 2 | 20 | Dagger | Schurke (zwei Dolche) | P-Angriff: 14<br>Angriffstempo (Quellwert): -5<br>Agilität: 2<br>Ambush: 2 |
| Morningstar | 2 | 20 | Mace | Druide / Schamane / Abenteurer (aktuelle Vergleichsausrüstung) | P-Angriff: 14<br>M-Angriff: 9<br>Angriffstempo (Quellwert): -10<br>Stärke: 1<br>Intelligenz: 1 |
| Blazing Mace | 2 | 20 | Mace2H | Noch keiner Vergleichsklasse zugeordnet | Angriffstempo (Quellwert): -15<br>P-Angriff: 18<br>M-Angriff: 28<br>Stärke: 2<br>Intelligenz: 2 |
| Iron Shield | 2 | 20 | Shield | Ritter | P-Verteidigung: 14<br>Block (Quellwert): 0.04<br>Angriffstempo (Quellwert): -10<br>Vitalität: 4 |
| Blade of Doom | 2 | 20 | Sword | Ritter / Abenteurer (Vergleichsvariante) | P-Angriff: 21<br>Angriffstempo (Quellwert): -10<br>Stärke: 2 |
| Great Sword | 2 | 20 | Sword2H | Abenteurer – zugeordnete eigene Waffenreihe; Kampfwerte noch auszuarbeiten | Angriffstempo (Quellwert): -15<br>P-Angriff: 28<br>Stärke: 2<br>Agilität: 1 |
| Radiant Staff | 2 | 20 | Wand2H | Luminet; Heiler als mögliche gemeinsame Lichtwaffe (abgeleitet) | M-Angriff: 44<br>Angriffstempo (Quellwert): -20<br>Intelligenz: 3<br>Willenskraft: 2 |
| Wand of Knowledge | 2 | 20 | Wand2H | Heiler / Kräuterkundler; allgemeiner Int-Stab auch für Luminet / Ritualist denkbar (abgeleitet) | M-Angriff: 44<br>Angriffstempo (Quellwert): -20<br>Intelligenz: 3<br>Willenskraft: 2 |
| Staff of Devoured Souls | 2 | 20 | Wand2H | Ritualist (aus Victim abgeleitet) | M-Angriff: 44<br>Angriffstempo (Quellwert): -20<br>Intelligenz: 3<br>Willenskraft: 2 |
| Jagged Broadaxe | 3 | 40 | Axe | Gladiator (zwei Einhandäxte) | P-Angriff: 40<br>Angriffstempo (Quellwert): -10<br>Stärke: 5 |
| War Axe | 3 | 40 | Axe2H | Butcher | P-Angriff: 84<br>Angriffstempo (Quellwert): -20<br>Stärke: 10 |
| Balanced Crossbow | 3 | 40 | Bow | Jäger | P-Angriff: 96<br>Angriffstempo (Quellwert): -20<br>Geschick: 10 |
| Crossbow of target Shot | 3 | 40 | Crossbow | Seelenjäger | P-Angriff: 76<br>Angriffstempo (Quellwert): -15<br>Geschick: 5<br>Agilität: 5 |
| Perfect Balanced Dagger | 3 | 40 | Dagger | Schurke (zwei Dolche) | P-Angriff: 25<br>Angriffstempo (Quellwert): -5<br>Agilität: 3<br>Ambush: 3 |
| The Silencer | 3 | 40 | Mace | Druide / Schamane / Abenteurer (aktuelle Vergleichsausrüstung) | P-Angriff: 25<br>M-Angriff: 15<br>Angriffstempo (Quellwert): -10<br>Stärke: 3<br>Intelligenz: 2 |
| Bessing of the Light Mace | 3 | 40 | Mace2H | Noch keiner Vergleichsklasse zugeordnet | Angriffstempo (Quellwert): -15<br>P-Angriff: 31<br>M-Angriff: 50<br>Stärke: 4<br>Intelligenz: 6 |
| Mighty Wall | 3 | 40 | Shield | Ritter | P-Verteidigung: 25<br>Block (Quellwert): 0.06<br>Angriffstempo (Quellwert): -10<br>Vitalität: 8 |
| Oathkeeper Sword | 3 | 40 | Sword | Ritter / Abenteurer (Vergleichsvariante) | P-Angriff: 37<br>Angriffstempo (Quellwert): -10<br>Stärke: 5 |
| Sword of Victory | 3 | 40 | Sword2H | Abenteurer – zugeordnete eigene Waffenreihe; Kampfwerte noch auszuarbeiten | Angriffstempo (Quellwert): -15<br>P-Angriff: 50<br>Stärke: 5<br>Agilität: 1<br>Geschick: 1 |
| Staff of Holyness | 3 | 40 | Wand2H | Luminet; Heiler als mögliche gemeinsame Lichtwaffe (abgeleitet) | M-Angriff: 77<br>Angriffstempo (Quellwert): -20<br>Intelligenz: 6<br>Willenskraft: 4 |
| Survivors Staff | 3 | 40 | Wand2H | Heiler / Kräuterkundler; allgemeiner Int-Stab auch für Luminet / Ritualist denkbar (abgeleitet) | M-Angriff: 77<br>Angriffstempo (Quellwert): -20<br>Intelligenz: 6<br>Willenskraft: 4 |
| Staff of Abyss | 3 | 40 | Wand2H | Ritualist (aus Victim abgeleitet) | M-Angriff: 77<br>Angriffstempo (Quellwert): -20<br>Intelligenz: 6<br>Willenskraft: 4 |
| Gale of Axe | 4 | 60 | Axe | Gladiator (zwei Einhandäxte) | P-Angriff: 70<br>Block (Quellwert): 0.05<br>Angriffstempo (Quellwert): -15<br>Stärke: 8 |
| Big Crusher | 4 | 60 | Axe2H | Butcher | P-Angriff: 145<br>Angriffstempo (Quellwert): -30<br>Stärke: 15 |
| Valkyrie Tendon | 4 | 60 | Bow | Jäger | P-Angriff: 166<br>Angriffstempo (Quellwert): -30<br>Geschick: 15 |
| The Huntress of the Shaddow | 4 | 60 | Crossbow | Seelenjäger | P-Angriff: 133<br>Angriffstempo (Quellwert): -20<br>Geschick: 10<br>Agilität: 7 |
| Lightbreaker | 4 | 60 | Dagger | Schurke (zwei Dolche) | P-Angriff: 43<br>Angriffstempo (Quellwert): -10<br>Agilität: 4<br>Ambush: 4 |
| Anguish of Peaceful Mind | 4 | 60 | Mace | Druide / Schamane / Abenteurer (aktuelle Vergleichsausrüstung) | P-Angriff: 43<br>M-Angriff: 27<br>Angriffstempo (Quellwert): -15<br>Stärke: 5<br>Intelligenz: 3 |
| Meteroic Mace | 4 | 60 | Mace2H | Noch keiner Vergleichsklasse zugeordnet | Angriffstempo (Quellwert): -23<br>P-Angriff: 54<br>M-Angriff: 86<br>Stärke: 6<br>Intelligenz: 10 |
| Antique shield | 4 | 60 | Shield | Ritter | P-Verteidigung: 43<br>Block (Quellwert): 0.08<br>Angriffstempo (Quellwert): -15<br>Vitalität: 12 |
| Dusk Blade | 4 | 60 | Sword | Ritter / Abenteurer (Vergleichsvariante) | P-Angriff: 64<br>Angriffstempo (Quellwert): -15<br>Stärke: 10 |
| Claymore | 4 | 60 | Sword2H | Abenteurer – zugeordnete eigene Waffenreihe; Kampfwerte noch auszuarbeiten | Angriffstempo (Quellwert): -23<br>P-Angriff: 86<br>Stärke: 10<br>Agilität: 2<br>Geschick: 1 |
| Clearness of sins | 4 | 60 | Wand2H | Luminet; Heiler als mögliche gemeinsame Lichtwaffe (abgeleitet) | M-Angriff: 134<br>Angriffstempo (Quellwert): -30<br>Willenskraft: 5<br>Intelligenz: 10 |
| Wand of Rejuvenation | 4 | 60 | Wand2H | Heiler / Kräuterkundler; allgemeiner Int-Stab auch für Luminet / Ritualist denkbar (abgeleitet) | M-Angriff: 134<br>Angriffstempo (Quellwert): -30<br>Intelligenz: 9<br>Willenskraft: 6 |
| Scepter of Lunar Eclipse | 4 | 60 | Wand2H | Ritualist (aus Victim abgeleitet) | M-Angriff: 134<br>Angriffstempo (Quellwert): -30<br>Vitalität: 3<br>Intelligenz: 12 |
| Dragons Breath | 5 | 80 | Axe | Gladiator (zwei Einhandäxte) | P-Angriff: 119<br>Block (Quellwert): 0.075<br>Angriffstempo (Quellwert): -15<br>Stärke: 11 |
| Great Destroyer | 5 | 80 | Axe2H | Butcher | P-Angriff: 247<br>Angriffstempo (Quellwert): -30<br>Stärke: 20 |
| Bow of Dragon Roar | 5 | 80 | Bow | Jäger | P-Angriff: 284<br>Angriffstempo (Quellwert): -30<br>Geschick: 20 |
| Hunters Arbalist | 5 | 80 | Crossbow | Seelenjäger | P-Angriff: 228<br>Angriffstempo (Quellwert): -20<br>Geschick: 10<br>Agilität: 10 |
| Shaddowbreaker | 5 | 80 | Dagger | Schurke (zwei Dolche) | P-Angriff: 73<br>Angriffstempo (Quellwert): -10<br>Agilität: 5<br>Ambush: 5 |
| Mongingstar of the fallen Angel | 5 | 80 | Mace | Druide / Schamane / Abenteurer (aktuelle Vergleichsausrüstung) | P-Angriff: 73<br>M-Angriff: 46<br>Angriffstempo (Quellwert): -15<br>Stärke: 6<br>Intelligenz: 4 |
| Rage of the Minotaur | 5 | 80 | Mace2H | Noch keiner Vergleichsklasse zugeordnet | Angriffstempo (Quellwert): -23<br>P-Angriff: 92<br>M-Angriff: 147<br>Stärke: 8<br>Intelligenz: 12 |
| Shield of Divine Protection | 5 | 80 | Shield | Ritter | P-Verteidigung: 73<br>Block (Quellwert): 0.1<br>Angriffstempo (Quellwert): -15<br>Vitalität: 16 |
| Redeem of Pain | 5 | 80 | Sword | Ritter / Abenteurer (Vergleichsvariante) | P-Angriff: 110<br>Angriffstempo (Quellwert): -15<br>Stärke: 15 |
| Executioner Sword of Baldur | 5 | 80 | Sword2H | Abenteurer – zugeordnete eigene Waffenreihe; Kampfwerte noch auszuarbeiten | Angriffstempo (Quellwert): -23<br>P-Angriff: 147<br>Stärke: 15<br>Agilität: 5<br>Geschick: 3 |
| Glimmer of Hope | 5 | 80 | Wand2H | Luminet; Heiler als mögliche gemeinsame Lichtwaffe (abgeleitet) | M-Angriff: 229<br>Angriffstempo (Quellwert): -30<br>Willenskraft: 10<br>Intelligenz: 15 |
| Wand of Oracle | 5 | 80 | Wand2H | Heiler / Kräuterkundler; allgemeiner Int-Stab auch für Luminet / Ritualist denkbar (abgeleitet) | M-Angriff: 229<br>Angriffstempo (Quellwert): -30<br>Intelligenz: 15<br>Willenskraft: 10 |
| Soulstealer | 5 | 80 | Wand2H | Ritualist (aus Victim abgeleitet) | M-Angriff: 229<br>Angriffstempo (Quellwert): -30<br>Vitalität: 5<br>Intelligenz: 20 |
| Skybreaker | 6 | 100 | Axe | Gladiator (zwei Einhandäxte) | P-Angriff: 201<br>Block (Quellwert): 0.1<br>Angriffstempo (Quellwert): -15<br>Stärke: 15 |
| Dimension | 6 | 100 | Axe2H | Butcher | P-Angriff: 418<br>Angriffstempo (Quellwert): -30<br>Stärke: 30 |
| Rayans Deracles | 6 | 100 | Bow | Jäger | P-Angriff: 480<br>Angriffstempo (Quellwert): -30<br>Geschick: 25 |
| Crossbow of the Shddowhunter | 6 | 100 | Crossbow | Seelenjäger | P-Angriff: 386<br>Angriffstempo (Quellwert): -20<br>Geschick: 14<br>Agilität: 11 |
| Blade of Damnation | 6 | 100 | Dagger | Schurke (zwei Dolche) | P-Angriff: 124<br>Angriffstempo (Quellwert): -10<br>Agilität: 8<br>Ambush: 8 |
| Guardien of the Light | 6 | 100 | Mace | Druide / Schamane / Abenteurer (aktuelle Vergleichsausrüstung) | P-Angriff: 124<br>M-Angriff: 77<br>Angriffstempo (Quellwert): -15<br>Stärke: 8<br>Intelligenz: 5 |
| Hammer of Justice | 6 | 100 | Mace2H | Noch keiner Vergleichsklasse zugeordnet | Angriffstempo (Quellwert): -23<br>P-Angriff: 155<br>M-Angriff: 248<br>Stärke: 10<br>Intelligenz: 16 |
| Aspis | 6 | 100 | Shield | Ritter | P-Verteidigung: 124<br>Block (Quellwert): 0.15<br>Angriffstempo (Quellwert): -15<br>Vitalität: 20 |
| Infernal Blade | 6 | 100 | Sword | Ritter / Abenteurer (Vergleichsvariante) | P-Angriff: 186<br>Angriffstempo (Quellwert): -15<br>Stärke: 20 |
| Souls Torment Blade | 6 | 100 | Sword2H | Abenteurer – zugeordnete eigene Waffenreihe; Kampfwerte noch auszuarbeiten | Angriffstempo (Quellwert): -23<br>P-Angriff: 248<br>Stärke: 20<br>Agilität: 7<br>Geschick: 3 |
| Rod of Divine Light | 6 | 100 | Wand2H | Luminet; Heiler als mögliche gemeinsame Lichtwaffe (abgeleitet) | M-Angriff: 387<br>Angriffstempo (Quellwert): -30<br>Willenskraft: 10<br>Intelligenz: 20 |
| Rod of Ethernal Life | 6 | 100 | Wand2H | Heiler / Kräuterkundler; allgemeiner Int-Stab auch für Luminet / Ritualist denkbar (abgeleitet) | M-Angriff: 387<br>Angriffstempo (Quellwert): -30<br>Intelligenz: 18<br>Willenskraft: 12 |
| Soul Eater | 6 | 100 | Wand2H | Ritualist (aus Victim abgeleitet) | M-Angriff: 387<br>Angriffstempo (Quellwert): -30<br>Vitalität: 8<br>Intelligenz: 22 |

## Vollständige Einzelwerte

### Small Battleax — Gladiator (zwei Einhandäxte)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Axe |
| Rang | 1 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 1 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 13 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Beschreibung | A lightweight battleax suitable for swift strikes. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 37 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 5 |
| description_de | Eine leichte Streitaxt für schnelle Schläge. |
| description_eng | A lightweight battleax suitable for swift strikes. |
| name_de | Kleine Streitaxt |
| name_eng | Small Battleaxe |

### Battleaxe — Butcher

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Axe2H |
| Rang | 1 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 1 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 27 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Beschreibung | A versatile and sturdy battleaxe for powerful attacks. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 71 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Eine vielseitige, robuste Streitaxt für kraftvolle Angriffe. |
| description_eng | A versatile and sturdy battleaxe for powerful attacks. |
| name_de | Streitaxt |
| name_eng | Battleaxe |

### Small Wooden Bow — Jäger

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Bow |
| Rang | 1 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 1 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 31 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Beschreibung | A basic wooden bow, ideal for beginners. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 71 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein einfacher Holzbogen, ideal für Anfänger. |
| description_eng | A basic wooden bow, ideal for beginners. |
| name_de | Kleiner Holzbogen |
| name_eng | Small Wooden Bow |

### Light Crossbow — Seelenjäger

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Crossbow |
| Rang | 1 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 1 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 24 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Beschreibung | A compact crossbow designed for quick aiming and firing. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 71 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Eine kompakte Armbrust, die schnelles Zielen und Schießen ermöglicht. |
| description_eng | A compact crossbow designed for quick aiming and firing. |
| name_de | Leichte Armbrust |
| name_eng | Light Crossbow |

### Shark Tooth Dagger — Schurke (zwei Dolche)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Dagger |
| Rang | 1 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 1 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 8 |
| Attribut → Angriffstempo (Quellwert) | -5 |
| Beschreibung | A dagger crafted from a shark's tooth, offering swift and precise stabs. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 37 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 5 |
| description_de | Ein aus einem Haifischzahn gefertigter Dolch für schnelle, präzise Stiche. |
| description_eng | A dagger crafted from a shark's tooth, offering swift and precise stabs. |
| name_de | Haifangdolch |
| name_eng | Shark Tooth Dagger |

### Little Mace — Druide / Schamane / Abenteurer (aktuelle Vergleichsausrüstung)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Mace |
| Rang | 1 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 1 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 8 |
| Attribut → M-Angriff | 5 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Beschreibung | A small mace that packs a surprising punch despite its size. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 37 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 5 |
| description_de | Ein kleiner Streitkolben, dessen Schläge trotz seiner Größe überraschend wuchtig sind. |
| description_eng | A small mace that packs a surprising punch despite its size. |
| name_de | Kleiner Streitkolben |
| name_eng | Little Mace |

### Big Mace — Noch keiner Vergleichsklasse zugeordnet

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Mace2H |
| Rang | 1 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 1 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → P-Angriff | 10 |
| Attribut → M-Angriff | 16 |
| Beschreibung | A large and heavy mace capable of devastating blows. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 71 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein großer, schwerer Streitkolben für verheerende Hiebe. |
| description_eng | A large and heavy mace capable of devastating blows. |
| name_de | Großer Streitkolben |
| name_eng | Big Mace |

### Wooden Shield — Ritter

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Shield |
| Rang | 1 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 1 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Verteidigung | 8 |
| Attribut → Block (Quellwert) | 0.02 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Beschreibung | A basic shield made from wood, offering moderate protection. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 37 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 5 |
| description_de | Ein einfacher Schild aus Holz, der mäßigen Schutz bietet. |
| description_eng | A basic shield made from wood, offering moderate protection. |
| name_de | Holzschild |
| name_eng | Wooden Shield |

### Iron Sword — Ritter / Abenteurer (Vergleichsvariante)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Sword |
| Rang | 1 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 1 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 12 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Beschreibung | A standard sword forged from iron, balanced for both offense and defense. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 37 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 5 |
| description_de | Ein gewöhnliches Schwert aus Eisen, ausgewogen für Angriff und Verteidigung. |
| description_eng | A standard sword forged from iron, balanced for both offense and defense. |
| name_de | Eisenschwert |
| name_eng | Iron Sword |

### Longsword — Abenteurer – zugeordnete eigene Waffenreihe; Kampfwerte noch auszuarbeiten

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Sword2H |
| Rang | 1 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 1 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → P-Angriff | 16 |
| Beschreibung | A lengthy sword with a sharp blade, suitable for slashing and thrusting. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 71 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein langes Schwert mit scharfer Klinge, geeignet für Hiebe und Stiche. |
| description_eng | A lengthy sword with a sharp blade, suitable for slashing and thrusting. |
| name_de | Langschwert |
| name_eng | Longsword |

### Staff of the Brightness — Luminet; Heiler als mögliche gemeinsame Lichtwaffe (abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 1 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 1 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 25 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Beschreibung | A staff imbued with radiant energy, capable of illuminating dark places. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 71 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein von strahlender Energie erfüllter Stab, der dunkle Orte erhellen kann. |
| description_eng | A staff imbued with radiant energy, capable of illuminating dark places. |
| name_de | Stab des Glanzes |
| name_eng | Staff of Radiance |

### Simple Wand — Heiler / Kräuterkundler; allgemeiner Int-Stab auch für Luminet / Ritualist denkbar (abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 1 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 1 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 25 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Beschreibung | A basic wand used by novice spellcasters for practicing simple spells. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 71 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein einfacher Zauberstab, mit dem angehende Magier grundlegende Zauber üben. |
| description_eng | A basic wand used by novice spellcasters for practicing simple spells. |
| name_de | Einfacher Zauberstab |
| name_eng | Simple Wand |

### Staff of Obsession — Ritualist (aus Victim abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 1 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 1 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 25 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Beschreibung | A staff that enhances the user's focus and determination in battle. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 71 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein Stab, der im Kampf die Konzentration und Entschlossenheit seines Trägers stärkt. |
| description_eng | A staff that enhances the user's focus and determination in battle. |
| name_de | Stab der Besessenheit |
| name_eng | Staff of Obsession |

### Thunder Axe — Gladiator (zwei Einhandäxte)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Axe |
| Rang | 2 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 20 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 23 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Attribut → Stärke | 2 |
| Beschreibung | An axe that crackles with electrical energy, delivering shocking blows to enemies. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 94 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Eine Axt, die vor elektrischer Energie knistert und Gegnern elektrisierende Schläge versetzt. |
| description_eng | An axe that crackles with electrical energy, delivering shocking blows to enemies. |
| name_de | Donneraxt |
| name_eng | Thunder Axe |

### Great Battleaxe — Butcher

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Axe2H |
| Rang | 2 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 20 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 48 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Attribut → Stärke | 5 |
| Beschreibung | A massive battleaxe wielded by seasoned warriors for devastating attacks. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 164 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Eine gewaltige Streitaxt, mit der erfahrene Krieger verheerende Angriffe ausführen. |
| description_eng | A massive battleaxe wielded by seasoned warriors for devastating attacks. |
| name_de | Große Streitaxt |
| name_eng | Great Battleaxe |

### Nobler Wooden Bow — Jäger

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Bow |
| Rang | 2 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 20 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 55 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Attribut → Geschick | 5 |
| Beschreibung | A refined wooden bow crafted with precision and elegance. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 164 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein hochwertiger Holzbogen, mit Präzision und Eleganz gefertigt. |
| description_eng | A refined wooden bow crafted with precision and elegance. |
| name_de | Edler Holzbogen |
| name_eng | Nobler Wooden Bow |

### Heaviness Crossbow — Seelenjäger

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Crossbow |
| Rang | 2 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 20 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 43 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → Geschick | 2 |
| Attribut → Agilität | 2 |
| Beschreibung | A heavy crossbow designed for maximum impact, capable of piercing armor. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 164 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Eine schwere Armbrust für höchste Durchschlagskraft, deren Bolzen Rüstungen durchdringen können. |
| description_eng | A heavy crossbow designed for maximum impact, capable of piercing armor. |
| name_de | Schwere Armbrust |
| name_eng | Heavy Crossbow |

### Balanced Dagger — Schurke (zwei Dolche)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Dagger |
| Rang | 2 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 20 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 14 |
| Attribut → Angriffstempo (Quellwert) | -5 |
| Attribut → Agilität | 2 |
| Attribut → Ambush | 2 |
| Beschreibung | A dagger with a well-balanced design, ideal for both offense and defense. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 94 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein ausgewogen gefertigter Dolch, gleichermaßen für Angriff und Verteidigung geeignet. |
| description_eng | A dagger with a well-balanced design, ideal for both offense and defense. |
| name_de | Ausbalancierter Dolch |
| name_eng | Balanced Dagger |

### Morningstar — Druide / Schamane / Abenteurer (aktuelle Vergleichsausrüstung)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Mace |
| Rang | 2 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 20 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 14 |
| Attribut → M-Angriff | 9 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Attribut → Stärke | 1 |
| Attribut → Intelligenz | 1 |
| Beschreibung | A spiked mace that inflicts brutal damage with each swing. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 94 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein mit Stacheln besetzter Streitkolben, der mit jedem Schwung brutalen Schaden anrichtet. |
| description_eng | A spiked mace that inflicts brutal damage with each swing. |
| name_de | Morgenstern |
| name_eng | Morningstar |

### Blazing Mace — Noch keiner Vergleichsklasse zugeordnet

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Mace2H |
| Rang | 2 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 20 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → P-Angriff | 18 |
| Attribut → M-Angriff | 28 |
| Attribut → Stärke | 2 |
| Attribut → Intelligenz | 2 |
| Beschreibung | A mace that burns with intense flames, scorching enemies upon impact. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 164 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein Streitkolben, der in heftigen Flammen brennt und Gegner beim Aufprall versengt. |
| description_eng | A mace that burns with intense flames, scorching enemies upon impact. |
| name_de | Lodernder Streitkolben |
| name_eng | Blazing Mace |

### Iron Shield — Ritter

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Shield |
| Rang | 2 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 20 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Verteidigung | 14 |
| Attribut → Block (Quellwert) | 0.04 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Attribut → Vitalität | 4 |
| Beschreibung | A robust shield forged from iron, providing dependable defense against foes. Its weight offers reassurance to warriors, while its iron construction ensures durability in combat. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 94 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein robuster Schild aus Eisen, der zuverlässigen Schutz vor Gegnern bietet. Sein Gewicht gibt Kriegern Sicherheit, während seine eiserne Bauweise im Kampf für Haltbarkeit sorgt. |
| description_eng | A robust shield forged from iron, providing dependable defense against foes. Its weight offers reassurance to warriors, while its iron construction ensures durability in combat. |
| name_de | Eisenschild |
| name_eng | Iron Shield |

### Blade of Doom — Ritter / Abenteurer (Vergleichsvariante)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Sword |
| Rang | 2 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 20 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 21 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Attribut → Stärke | 2 |
| Beschreibung | A sinister blade shrouded in darkness, its edge whispers of impending doom. Crafted by dark sorcerers, it instills fear in the hearts of its enemies and leaves a trail of despair in its wake. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 94 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Eine finstere, von Dunkelheit umhüllte Klinge, deren Schneide nahendes Unheil verheißt. Von dunklen Zauberern geschmiedet, erfüllt sie ihre Feinde mit Furcht und hinterlässt eine Spur der Verzweiflung. |
| description_eng | A sinister blade shrouded in darkness, its edge whispers of impending doom. Crafted by dark sorcerers, it instills fear in the hearts of its enemies and leaves a trail of despair in its wake. |
| name_de | Klinge des Verderbens |
| name_eng | Blade of Doom |

### Great Sword — Abenteurer – zugeordnete eigene Waffenreihe; Kampfwerte noch auszuarbeiten

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Sword2H |
| Rang | 2 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 20 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → P-Angriff | 28 |
| Attribut → Stärke | 2 |
| Attribut → Agilität | 1 |
| Beschreibung | A massive sword of legendary proportions, capable of cleaving through foes with ease. Wielded by only the mightiest warriors, it commands respect on the battlefield and strikes fear into the hearts of adversaries. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 164 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein gewaltiges Schwert von sagenhaften Ausmaßen, das Gegner mühelos spalten kann. Nur die mächtigsten Krieger führen es; auf dem Schlachtfeld gebietet es Respekt und erfüllt Widersacher mit Furcht. |
| description_eng | A massive sword of legendary proportions, capable of cleaving through foes with ease. Wielded by only the mightiest warriors, it commands respect on the battlefield and strikes fear into the hearts of adversaries. |
| name_de | Großschwert |
| name_eng | Great Sword |

### Radiant Staff — Luminet; Heiler als mögliche gemeinsame Lichtwaffe (abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 2 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 20 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 44 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Attribut → Intelligenz | 3 |
| Attribut → Willenskraft | 2 |
| Beschreibung | A staff aglow with radiant energy, emanating a warm and comforting light. Wielded by healers and defenders of the light, it serves as a beacon of hope in the darkest of times, casting out shadows and banishing evil. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 164 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein von strahlender Energie leuchtender Stab, der warmes, tröstliches Licht ausstrahlt. Heilern und Verteidigern des Lichts dient er in finstersten Zeiten als Zeichen der Hoffnung, das Schatten vertreibt und das Böse verbannt. |
| description_eng | A staff aglow with radiant energy, emanating a warm and comforting light. Wielded by healers and defenders of the light, it serves as a beacon of hope in the darkest of times, casting out shadows and banishing evil. |
| name_de | Strahlender Stab |
| name_eng | Radiant Staff |

### Wand of Knowledge — Heiler / Kräuterkundler; allgemeiner Int-Stab auch für Luminet / Ritualist denkbar (abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 2 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 20 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 44 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Attribut → Intelligenz | 3 |
| Attribut → Willenskraft | 2 |
| Beschreibung | A wand adorned with intricate symbols of wisdom and enlightenment. Held by scholars and seekers of truth, it unlocks the mysteries of the universe and empowers its wielder with boundless knowledge and insight. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 164 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein Zauberstab, verziert mit kunstvollen Zeichen der Weisheit und Erleuchtung. Gelehrten und Wahrheitssuchenden erschließt er die Geheimnisse des Universums und verleiht seinem Träger grenzenloses Wissen und tiefe Einsicht. |
| description_eng | A wand adorned with intricate symbols of wisdom and enlightenment. Held by scholars and seekers of truth, it unlocks the mysteries of the universe and empowers its wielder with boundless knowledge and insight. |
| name_de | Zauberstab des Wissens |
| name_eng | Wand of Knowledge |

### Staff of Devoured Souls — Ritualist (aus Victim abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 2 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 20 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 44 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Attribut → Intelligenz | 3 |
| Attribut → Willenskraft | 2 |
| Beschreibung | A staff infused with the essence of lost souls, hungry for power and vengeance. Wielded by necromancers and dark sorcerers, it consumes the life force of its victims and bends them to its master's will, leaving only desolation in its wake. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 164 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein mit der Essenz verlorener Seelen erfüllter Stab, der nach Macht und Vergeltung hungert. In den Händen von Nekromanten und dunklen Zauberern verzehrt er die Lebenskraft seiner Opfer und unterwirft sie seinem Meister. Zurück bleibt nur Verwüstung. |
| description_eng | A staff infused with the essence of lost souls, hungry for power and vengeance. Wielded by necromancers and dark sorcerers, it consumes the life force of its victims and bends them to its master's will, leaving only desolation in its wake. |
| name_de | Stab der verschlungenen Seelen |
| name_eng | Staff of Devoured Souls |

### Jagged Broadaxe — Gladiator (zwei Einhandäxte)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Axe |
| Rang | 3 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 40 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 40 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Attribut → Stärke | 5 |
| Beschreibung | A fearsome broadaxe with jagged edges, designed to inflict devastating wounds upon its foes. Wielded by berserkers and barbarians, it strikes fear into the hearts of enemies and leaves behind a trail of destruction. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 202 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Eine furchterregende Breitaxt mit gezackter Schneide, geschaffen, um ihren Gegnern verheerende Wunden zuzufügen. Berserker und Barbaren verbreiten mit ihr Angst und hinterlassen eine Spur der Zerstörung. |
| description_eng | A fearsome broadaxe with jagged edges, designed to inflict devastating wounds upon its foes. Wielded by berserkers and barbarians, it strikes fear into the hearts of enemies and leaves behind a trail of destruction. |
| name_de | Gezackte Breitaxt |
| name_eng | Jagged Broadaxe |

### War Axe — Butcher

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Axe2H |
| Rang | 3 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 40 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 84 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Attribut → Stärke | 10 |
| Beschreibung | A formidable axe forged for battle, its razor-sharp blade capable of cleaving through armor and bone alike. Wielded by seasoned warriors, it embodies the fury and chaos of war. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 357 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Eine mächtige, für die Schlacht geschmiedete Axt, deren rasiermesserscharfe Schneide Rüstung und Knochen spalten kann. In den Händen erfahrener Krieger verkörpert sie die Wut und das Chaos des Krieges. |
| description_eng | A formidable axe forged for battle, its razor-sharp blade capable of cleaving through armor and bone alike. Wielded by seasoned warriors, it embodies the fury and chaos of war. |
| name_de | Kriegsaxt |
| name_eng | War Axe |

### Balanced Crossbow — Jäger

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Bow |
| Rang | 3 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 40 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 96 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Attribut → Geschick | 10 |
| Beschreibung | A finely crafted crossbow, perfectly balanced for accuracy and power. Favored by skilled marksmen, it delivers deadly precision from a distance, striking down enemies with lethal efficiency. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 357 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| name_de | Ausbalancierter Bogen |
| name_eng | Balanced Bow |
| description_de | Ein fein gearbeiteter Bogen, perfekt ausbalanciert für Genauigkeit und Durchschlagskraft. Bei erfahrenen Schützen beliebt, trifft er aus der Ferne mit tödlicher Präzision und streckt Feinde mit höchster Effizienz nieder. |
| description_eng | A finely crafted bow, perfectly balanced for accuracy and power. Favored by skilled marksmen, it delivers deadly precision from a distance, striking down enemies with lethal efficiency. |

### Crossbow of target Shot — Seelenjäger

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Crossbow |
| Rang | 3 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 40 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 76 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → Geschick | 5 |
| Attribut → Agilität | 5 |
| Beschreibung | An enchanted crossbow blessed with the ability to unfailingly strike its intended target. Wielded by hunters and assassins, it never misses its mark, ensuring swift and silent elimination of foes. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 357 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Eine verzauberte Armbrust, die mit der Gabe gesegnet ist, ihr gewähltes Ziel unfehlbar zu treffen. In den Händen von Jägern und Assassinen verfehlt sie nie ihr Ziel und ermöglicht die schnelle, lautlose Ausschaltung ihrer Gegner. |
| description_eng | An enchanted crossbow blessed with the ability to unfailingly strike its intended target. Wielded by hunters and assassins, it never misses its mark, ensuring swift and silent elimination of foes. |
| name_de | Armbrust des gezielten Schusses |
| name_eng | Crossbow of the Precise Shot |

### Perfect Balanced Dagger — Schurke (zwei Dolche)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Dagger |
| Rang | 3 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 40 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 25 |
| Attribut → Angriffstempo (Quellwert) | -5 |
| Attribut → Agilität | 3 |
| Attribut → Ambush | 3 |
| Beschreibung | A dagger meticulously crafted for flawless balance and precision. Wielded by assassins and rogues, it slices through defenses with surgical precision, delivering swift and lethal strikes to unsuspecting foes. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 202 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein mit größter Sorgfalt gefertigter Dolch von vollendeter Balance und Präzision. Assassinen und Schurken durchdringen mit ihm gegnerische Verteidigung mit chirurgischer Genauigkeit und treffen ahnungslose Gegner schnell und tödlich. |
| description_eng | A dagger meticulously crafted for flawless balance and precision. Wielded by assassins and rogues, it slices through defenses with surgical precision, delivering swift and lethal strikes to unsuspecting foes. |
| name_de | Vollkommen ausbalancierter Dolch |
| name_eng | Perfect Balanced Dagger |

### The Silencer — Druide / Schamane / Abenteurer (aktuelle Vergleichsausrüstung)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Mace |
| Rang | 3 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 40 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 25 |
| Attribut → M-Angriff | 15 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Attribut → Stärke | 3 |
| Attribut → Intelligenz | 2 |
| Beschreibung | A legendary weapon whispered of in shadows, capable of silencing magic and rendering its wielder invisible to detection. Wielded by spies and infiltrators, it strikes from the darkness with deadly efficiency. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 202 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Eine legendäre Waffe, von der man im Verborgenen flüstert. Sie kann Magie zum Schweigen bringen und ihren Träger jeder Entdeckung entziehen. Spione und Eindringlinge schlagen mit ihr aus der Dunkelheit mit tödlicher Präzision zu. |
| description_eng | A legendary weapon whispered of in shadows, capable of silencing magic and rendering its wielder invisible to detection. Wielded by spies and infiltrators, it strikes from the darkness with deadly efficiency. |
| name_de | Der Verstummer |
| name_eng | The Silencer |

### Bessing of the Light Mace — Noch keiner Vergleichsklasse zugeordnet

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Mace2H |
| Rang | 3 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 40 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → P-Angriff | 31 |
| Attribut → M-Angriff | 50 |
| Attribut → Stärke | 4 |
| Attribut → Intelligenz | 6 |
| Beschreibung | A mace imbued with the divine blessings of light, radiating purity and holiness. Wielded by clerics and paladins, it banishes darkness and smites the unholy with righteous fury. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 357 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein von göttlichem Licht gesegneter Streitkolben, der Reinheit und Heiligkeit ausstrahlt. Kleriker und Paladine vertreiben mit ihm die Dunkelheit und zerschmettern das Unheilige mit gerechtem Zorn. |
| description_eng | A mace imbued with the divine blessings of light, radiating purity and holiness. Wielded by clerics and paladins, it banishes darkness and smites the unholy with righteous fury. |
| name_de | Streitkolben des Lichtsegens |
| name_eng | Mace of Light's Blessing |

### Mighty Wall — Ritter

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Shield |
| Rang | 3 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 40 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Verteidigung | 25 |
| Attribut → Block (Quellwert) | 0.06 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Attribut → Vitalität | 8 |
| Beschreibung | A towering shield of unyielding strength and resilience, capable of withstanding the mightiest of blows. Wielded by defenders and guardians, it forms an impenetrable barrier against enemy attacks. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 202 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein gewaltiger Schild von unbeugsamer Stärke und Widerstandskraft, der selbst den heftigsten Schlägen standhält. In den Händen von Verteidigern und Wächtern bildet er eine undurchdringliche Barriere gegen feindliche Angriffe. |
| description_eng | A towering shield of unyielding strength and resilience, capable of withstanding the mightiest of blows. Wielded by defenders and guardians, it forms an impenetrable barrier against enemy attacks. |
| name_de | Mächtiger Wall |
| name_eng | Mighty Wall |

### Oathkeeper Sword — Ritter / Abenteurer (Vergleichsvariante)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Sword |
| Rang | 3 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 40 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 37 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Attribut → Stärke | 5 |
| Beschreibung | A sword bound by sacred oaths, sworn to defend the innocent and uphold justice. Wielded by knights and champions, it cleaves through evil with unwavering resolve and unwavering loyalty. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 202 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein durch heilige Eide gebundenes Schwert, das dem Schutz der Unschuldigen und der Wahrung der Gerechtigkeit geweiht ist. Ritter und Streiter durchtrennen mit ihm das Böse mit unerschütterlicher Entschlossenheit und Treue. |
| description_eng | A sword bound by sacred oaths, sworn to defend the innocent and uphold justice. Wielded by knights and champions, it cleaves through evil with unwavering resolve and unwavering loyalty. |
| name_de | Schwert des Eidhüters |
| name_eng | Oathkeeper Sword |

### Sword of Victory — Abenteurer – zugeordnete eigene Waffenreihe; Kampfwerte noch auszuarbeiten

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Sword2H |
| Rang | 3 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 40 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → P-Angriff | 50 |
| Attribut → Stärke | 5 |
| Attribut → Agilität | 1 |
| Attribut → Geschick | 1 |
| Beschreibung | A sword destined for triumph on the battlefield, its blade gleaming with the promise of victory. Wielded by commanders and generals, it inspires courage in allies and strikes fear into the hearts of enemies. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 357 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein zum Triumph auf dem Schlachtfeld bestimmtes Schwert, dessen Klinge im Versprechen des Sieges glänzt. In den Händen von Befehlshabern und Generälen stärkt es den Mut der Verbündeten und schürt die Furcht ihrer Feinde. |
| description_eng | A sword destined for triumph on the battlefield, its blade gleaming with the promise of victory. Wielded by commanders and generals, it inspires courage in allies and strikes fear into the hearts of enemies. |
| name_de | Schwert des Sieges |
| name_eng | Sword of Victory |

### Staff of Holyness — Luminet; Heiler als mögliche gemeinsame Lichtwaffe (abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 3 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 40 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 77 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Attribut → Intelligenz | 6 |
| Attribut → Willenskraft | 4 |
| Beschreibung | A staff infused with divine light, channeling the power of righteousness and purity. Wielded by holy men and healers, it banishes darkness and brings solace to the suffering. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 357 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein von göttlichem Licht erfüllter Stab, der die Kraft von Rechtschaffenheit und Reinheit bündelt. Heilige und Heiler verbannen mit ihm die Dunkelheit und spenden Leidenden Trost. |
| description_eng | A staff infused with divine light, channeling the power of righteousness and purity. Wielded by holy men and healers, it banishes darkness and brings solace to the suffering. |
| name_de | Stab der Heiligkeit |
| name_eng | Staff of Holiness |

### Survivors Staff — Heiler / Kräuterkundler; allgemeiner Int-Stab auch für Luminet / Ritualist denkbar (abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 3 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 40 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 77 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Attribut → Intelligenz | 6 |
| Attribut → Willenskraft | 4 |
| Beschreibung | A staff borne by those who have endured great trials and emerged stronger for it. Wielded by survivors and outcasts, it symbolizes resilience and perseverance in the face of adversity. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 357 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein Stab jener, die schwere Prüfungen überstanden haben und gestärkt daraus hervorgegangen sind. Überlebenden und Ausgestoßenen dient er als Sinnbild für Widerstandskraft und Beharrlichkeit angesichts jeder Widrigkeit. |
| description_eng | A staff borne by those who have endured great trials and emerged stronger for it. Wielded by survivors and outcasts, it symbolizes resilience and perseverance in the face of adversity. |
| name_de | Stab der Überlebenden |
| name_eng | Survivors Staff |

### Staff of Abyss — Ritualist (aus Victim abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 3 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 40 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 77 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Attribut → Intelligenz | 6 |
| Attribut → Willenskraft | 4 |
| Beschreibung | A staff forged from the darkest depths of the abyss, its power drawn from the void itself. Wielded by sorcerers and dark mages, it unleashes destruction and chaos upon the world. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 357 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein in den finstersten Tiefen des Abgrunds geschmiedeter Stab, der seine Kraft aus der Leere selbst schöpft. In den Händen von Zauberern und dunklen Magiern entfesselt er Zerstörung und Chaos über die Welt. |
| description_eng | A staff forged from the darkest depths of the abyss, its power drawn from the void itself. Wielded by sorcerers and dark mages, it unleashes destruction and chaos upon the world. |
| name_de | Stab des Abgrunds |
| name_eng | Staff of Abyss |

### Gale of Axe — Gladiator (zwei Einhandäxte)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Axe |
| Rang | 4 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 60 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 70 |
| Attribut → Block (Quellwert) | 0.05 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → Stärke | 8 |
| Beschreibung | An axe infused with the fury of the tempest, its swings unleashing howling winds that tear through ranks of enemies. Wielded by stormlords and windcallers, it brings the wrath of the storm to the battlefield. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 453 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Eine vom Zorn des Unwetters erfüllte Axt, deren Schwünge heulende Winde entfesseln, die feindliche Reihen zerreißen. Sturmfürsten und Windrufer tragen mit ihr den Zorn des Sturms auf das Schlachtfeld. |
| description_eng | An axe infused with the fury of the tempest, its swings unleashing howling winds that tear through ranks of enemies. Wielded by stormlords and windcallers, it brings the wrath of the storm to the battlefield. |
| name_de | Sturmaxt |
| name_eng | Storm Axe |

### Big Crusher — Butcher

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Axe2H |
| Rang | 4 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 60 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 145 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Stärke | 15 |
| Beschreibung | A massive hammer of immense weight and power, capable of pulverizing foes with bone-crushing force. Wielded by giants and titans, it leaves nothing but devastation in its wake. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 783 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| name_de | Schädelspalter |
| name_eng | Skullsplitter |
| description_de | Eine gewaltige Zweihandaxt von enormem Gewicht und großer Kraft, deren Hiebe selbst die stärksten Gegner niederstrecken. Von Riesen und Titanen geführt, hinterlässt sie nichts als Verwüstung. |
| description_eng | A massive two-handed axe of immense weight and power, its blows capable of felling even the mightiest foes. Wielded by giants and titans, it leaves nothing but devastation in its wake. |

### Valkyrie Tendon — Jäger

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Bow |
| Rang | 4 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 60 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 166 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Geschick | 15 |
| Beschreibung | A mystical cord woven by the valkyries themselves, imbued with the strength and resilience of divine warriors. Wielded by champions and heroes, it grants unmatched agility and endurance in battle. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 783 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Eine mystische, von den Walküren selbst gewobene Sehne, erfüllt von der Stärke und Widerstandskraft göttlicher Krieger. Streitern und Helden verleiht sie unübertroffene Beweglichkeit und Ausdauer im Kampf. |
| description_eng | A mystical cord woven by the valkyries themselves, imbued with the strength and resilience of divine warriors. Wielded by champions and heroes, it grants unmatched agility and endurance in battle. |
| name_de | Sehne der Walküre |
| name_eng | Valkyrie Tendon |

### The Huntress of the Shaddow — Seelenjäger

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Crossbow |
| Rang | 4 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 60 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 133 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Attribut → Geschick | 10 |
| Attribut → Agilität | 7 |
| Beschreibung | A legendary bow wielded by the elusive and deadly huntress who stalks the shadows. Crafted from the finest ebony wood and imbued with dark magic, it strikes fear into the hearts of her prey. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 783 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| name_de | Die Schattenjägerin |
| name_eng | The Huntress of the Shadow |
| description_de | Eine legendäre Armbrust, geführt von einer schwer zu fassenden, tödlichen Jägerin, die durch die Schatten streift. Aus feinstem Ebenholz gefertigt und mit dunkler Magie durchdrungen, versetzt sie ihre Beute in Angst und Schrecken. |
| description_eng | A legendary crossbow wielded by the elusive and deadly huntress who stalks the shadows. Crafted from the finest ebony wood and imbued with dark magic, it strikes fear into the hearts of her prey. |

### Lightbreaker — Schurke (zwei Dolche)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Dagger |
| Rang | 4 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 60 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 43 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Attribut → Agilität | 4 |
| Attribut → Ambush | 4 |
| Beschreibung | A sword forged to shatter the darkness and dispel illusions, its blade gleaming with radiant energy. Wielded by crusaders and holy warriors, it cuts through shadows and evil with righteous fury. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 453 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| name_de | Lichtbrecher |
| name_eng | Lightbreaker |
| description_de | Ein geheimnisvoller Dolch, dessen dunkle Klinge das Licht um sich herum verschlingt. Einst von lautlosen Assassinen geführt, hüllt er seinen Träger in tiefe Schatten und lässt ihn nahezu unbemerkt an seine Opfer heranschleichen. |
| description_eng | A mysterious dagger whose dark blade devours the light around it. Once wielded by silent assassins, it shrouds its bearer in deep shadows, allowing them to stalk their victims almost unnoticed. |

### Anguish of Peaceful Mind — Druide / Schamane / Abenteurer (aktuelle Vergleichsausrüstung)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Mace |
| Rang | 4 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 60 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 43 |
| Attribut → M-Angriff | 27 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → Stärke | 5 |
| Attribut → Intelligenz | 3 |
| Beschreibung | A cursed blade that torments the wielder with visions of tranquility amidst chaos. Wielded by those haunted by inner demons, it brings inner peace at the cost of eternal suffering. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 453 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| name_de | Qual des friedvollen Geistes |
| name_eng | Anguish of a Peaceful Mind |
| description_de | Ein düsterer Streitkolben, dessen Schläge von einer unheimlichen Stille begleitet werden. Einst von einem Krieger geführt, der vergeblich nach innerem Frieden suchte, trägt er dessen rastlosen Zorn in sich. In der Hand liegt er ruhig, doch jeder Hieb erzählt von einem Geist, der niemals Ruhe fand. |
| description_eng | A grim mace whose blows are accompanied by an eerie silence. Once wielded by a warrior who sought inner peace in vain, it carries his restless fury within. It rests calmly in the hand, yet every strike tells of a soul that never found peace. |

### Meteroic Mace — Noch keiner Vergleichsklasse zugeordnet

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Mace2H |
| Rang | 4 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 60 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → Angriffstempo (Quellwert) | -23 |
| Attribut → P-Angriff | 54 |
| Attribut → M-Angriff | 86 |
| Attribut → Stärke | 6 |
| Attribut → Intelligenz | 10 |
| Beschreibung | A mace forged from the heart of a falling star, its celestial metal imbued with the fury of the cosmos. Wielded by celestial champions and starborn warriors, it smites foes with celestial might. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 783 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein aus dem Herzen einer Sternschnuppe geschmiedeter Streitkolben, dessen Himmelsmetall vom Zorn des Kosmos erfüllt ist. Himmlische Streiter und sternengeborene Krieger schlagen mit ihm ihre Feinde mit der Macht der Gestirne nieder. |
| description_eng | A mace forged from the heart of a falling star, its celestial metal imbued with the fury of the cosmos. Wielded by celestial champions and starborn warriors, it smites foes with celestial might. |
| name_de | Meteoritenstreitkolben |
| name_eng | Meteoric Mace |

### Antique shield — Ritter

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Shield |
| Rang | 4 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 60 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Verteidigung | 43 |
| Attribut → Block (Quellwert) | 0.08 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → Vitalität | 12 |
| Beschreibung | A shield of ancient design, adorned with intricate patterns and symbols of forgotten civilizations. Wielded by historians and relic hunters, it offers protection steeped in the mysteries of the past. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 453 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein Schild uralten Entwurfs, verziert mit kunstvollen Mustern und Zeichen vergessener Zivilisationen. Geschichtskundigen und Reliquienjägern bietet er Schutz, der von den Geheimnissen der Vergangenheit durchdrungen ist. |
| description_eng | A shield of ancient design, adorned with intricate patterns and symbols of forgotten civilizations. Wielded by historians and relic hunters, it offers protection steeped in the mysteries of the past. |
| name_de | Antiker Schild |
| name_eng | Antique shield |

### Dusk Blade — Ritter / Abenteurer (Vergleichsvariante)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Sword |
| Rang | 4 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 60 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 64 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → Stärke | 10 |
| Beschreibung | A blade forged in the twilight hours, its edge honed to cut through the veil between light and shadow. Wielded by duskblade assassins and shadowdancers, it strikes with deadly precision under cover of darkness. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 453 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Eine im Zwielicht geschmiedete Klinge, deren Schneide den Schleier zwischen Licht und Schatten durchtrennt. Assassinen der Dämmerung und Schattentänzer führen mit ihr unter dem Schutz der Dunkelheit tödlich präzise Angriffe aus. |
| description_eng | A blade forged in the twilight hours, its edge honed to cut through the veil between light and shadow. Wielded by duskblade assassins and shadowdancers, it strikes with deadly precision under cover of darkness. |
| name_de | Dämmerungsklinge |
| name_eng | Dusk Blade |

### Claymore — Abenteurer – zugeordnete eigene Waffenreihe; Kampfwerte noch auszuarbeiten

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Sword2H |
| Rang | 4 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 60 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → Angriffstempo (Quellwert) | -23 |
| Attribut → P-Angriff | 86 |
| Attribut → Stärke | 10 |
| Attribut → Agilität | 2 |
| Attribut → Geschick | 1 |
| Beschreibung | A massive two-handed sword of Scottish origin, wielded with both hands for devastating slashes and thrusts. Wielded by highland warriors and knights, it strikes fear into the hearts of enemies on the battlefield. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 783 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein gewaltiges Zweihandschwert, das mit beiden Händen für verheerende Hiebe und Stiche geführt wird. Hochlandkrieger und Ritter erfüllen damit ihre Feinde auf dem Schlachtfeld mit Furcht. |
| description_eng | A massive two-handed sword wielded with both hands for devastating slashes and thrusts. Wielded by highland warriors and knights, it strikes fear into the hearts of enemies on the battlefield. |
| name_de | Claymore |
| name_eng | Claymore |

### Clearness of sins — Luminet; Heiler als mögliche gemeinsame Lichtwaffe (abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 4 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 60 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 134 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Willenskraft | 5 |
| Attribut → Intelligenz | 10 |
| Beschreibung | A holy relic imbued with the power to cleanse the soul of its bearer, purging them of guilt and remorse. Wielded by repentant sinners and penitent pilgrims, it offers redemption and absolution. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 783 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Eine heilige Reliquie mit der Kraft, die Seele ihres Trägers zu reinigen und sie von Schuld und Reue zu befreien. Reuigen Sündern und büßenden Pilgern bietet sie Erlösung und Vergebung. |
| description_eng | A holy relic imbued with the power to cleanse the soul of its bearer, purging them of guilt and remorse. Wielded by repentant sinners and penitent pilgrims, it offers redemption and absolution. |
| name_de | Läuterung der Sünden |
| name_eng | Purification of Sins |

### Wand of Rejuvenation — Heiler / Kräuterkundler; allgemeiner Int-Stab auch für Luminet / Ritualist denkbar (abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 4 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 60 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 134 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Intelligenz | 9 |
| Attribut → Willenskraft | 6 |
| Beschreibung | A wand infused with the essence of vitality and renewal, capable of restoring health and vigor to the weary. Wielded by healers and druids, it brings new life to those in need. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 783 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein mit der Essenz von Lebenskraft und Erneuerung erfüllter Zauberstab, der Erschöpften Gesundheit und Kraft zurückgeben kann. Heiler und Druiden schenken damit Bedürftigen neues Leben. |
| description_eng | A wand infused with the essence of vitality and renewal, capable of restoring health and vigor to the weary. Wielded by healers and druids, it brings new life to those in need. |
| name_de | Zauberstab der Erneuerung |
| name_eng | Wand of Rejuvenation |

### Scepter of Lunar Eclipse — Ritualist (aus Victim abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 4 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 60 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 134 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Vitalität | 3 |
| Attribut → Intelligenz | 12 |
| Beschreibung | A wand infused with the essence of vitality and renewal, capable of restoring health and vigor to the weary. Wielded by healers and druids, it brings new life to those in need. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 783 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| name_de | Zepter der Mondfinsternis |
| name_eng | Scepter of Lunar Eclipse |
| description_de | Ein finsteres Zepter, dessen Kern selbst im hellsten Mondlicht schwarz bleibt. Einst von Ritualisten für verbotene Opferzeremonien geführt, trägt es das Echo unzähliger Seelen in sich. Wer seine Macht entfesselt, spürt, dass die Dunkelheit jede Gabe annimmt und stets nach mehr verlangt. |
| description_eng | A sinister scepter whose core remains black even in the brightest moonlight. Once wielded by ritualists in forbidden sacrificial rites, it holds the echoes of countless souls. Those who unleash its power sense that the darkness accepts every offering and always hungers for more. |

### Dragons Breath — Gladiator (zwei Einhandäxte)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Axe |
| Rang | 5 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 80 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 119 |
| Attribut → Block (Quellwert) | 0.075 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → Stärke | 11 |
| Beschreibung | An axe imbued with the fiery essence of dragons, its blade crackles with flames that scorch enemies upon impact. Wielded by dragon hunters and fire warriors, it leaves a trail of devastation in its wake. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 1081 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Eine von der feurigen Essenz der Drachen erfüllte Axt, deren Klinge vor Flammen knistert und Gegner beim Aufprall versengt. Drachenjäger und Feuerkrieger hinterlassen mit ihr eine Spur der Verwüstung. |
| description_eng | An axe imbued with the fiery essence of dragons, its blade crackles with flames that scorch enemies upon impact. Wielded by dragon hunters and fire warriors, it leaves a trail of devastation in its wake. |
| name_de | Drachenatem |
| name_eng | Dragons Breath |

### Great Destroyer — Butcher

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Axe2H |
| Rang | 5 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 80 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 247 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Stärke | 20 |
| Beschreibung | A colossal axe of destruction, its massive blade capable of cleaving through armies with unstoppable force. Wielded by berserkers and champions of chaos, it lays waste to all in its path. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 1637 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Eine kolossale Axt der Vernichtung, deren gewaltige Klinge ganze Heere mit unaufhaltsamer Kraft durchtrennen kann. Berserker und Streiter des Chaos verwüsten mit ihr alles auf ihrem Weg. |
| description_eng | A colossal axe of destruction, its massive blade capable of cleaving through armies with unstoppable force. Wielded by berserkers and champions of chaos, it lays waste to all in its path. |
| name_de | Großer Zerstörer |
| name_eng | The Great Destroyer |

### Bow of Dragon Roar — Jäger

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Bow |
| Rang | 5 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 80 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 284 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Geschick | 20 |
| Beschreibung | A bow crafted from dragonbone and sinew, its arrows sing with the roar of dragons as they soar through the air. Wielded by dragon hunters and archers, it strikes fear into the hearts of its targets with each shot. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 1637 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein aus Drachenknochen und Sehnen gefertigter Bogen, dessen Pfeile im Flug wie Drachen brüllen. Drachenjäger und Bogenschützen erfüllen ihre Ziele mit jedem Schuss mit Furcht. |
| description_eng | A bow crafted from dragonbone and sinew, its arrows sing with the roar of dragons as they soar through the air. Wielded by dragon hunters and archers, it strikes fear into the hearts of its targets with each shot. |
| name_de | Bogen des Drachengebrülls |
| name_eng | Bow of Dragon Roar |

### Hunters Arbalist — Seelenjäger

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Crossbow |
| Rang | 5 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 80 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 228 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Attribut → Geschick | 10 |
| Attribut → Agilität | 10 |
| Beschreibung | An arbalest designed for precision and power, favored by skilled hunters and marksmen. Wielded by those who stalk their prey from the shadows, it delivers swift and lethal bolts with deadly accuracy. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 1637 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Eine auf Präzision und Kraft ausgelegte Armbrust, die geschickte Jäger und Schützen bevorzugen. Wer seine Beute aus den Schatten verfolgt, verschießt mit ihr schnelle, tödliche Bolzen mit höchster Genauigkeit. |
| description_eng | An arbalest designed for precision and power, favored by skilled hunters and marksmen. Wielded by those who stalk their prey from the shadows, it delivers swift and lethal bolts with deadly accuracy. |
| name_de | Jägerarmbrust |
| name_eng | Hunter's Crossbow |

### Shaddowbreaker — Schurke (zwei Dolche)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Dagger |
| Rang | 5 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 80 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 73 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Attribut → Agilität | 5 |
| Attribut → Ambush | 5 |
| Beschreibung | A dagger honed to perfection for slicing through shadows, enabling silent and stealthy attacks. Crafted by shadow assassins and nightstalkers, it strikes with deadly precision without making a sound, allowing its wielder to move undetected through the darkness. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 1081 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein vollkommen geschärfter Dolch, der Schatten durchschneidet und lautlose, heimliche Angriffe ermöglicht. Von Schattenassassinen und Nachtjägern gefertigt, trifft er tödlich präzise, ohne einen Laut zu verursachen, sodass sein Träger unentdeckt durch die Dunkelheit ziehen kann. |
| description_eng | A dagger honed to perfection for slicing through shadows, enabling silent and stealthy attacks. Crafted by shadow assassins and nightstalkers, it strikes with deadly precision without making a sound, allowing its wielder to move undetected through the darkness. |
| name_de | Schattenbrecher |
| name_eng | Shadowbreaker |

### Mongingstar of the fallen Angel — Druide / Schamane / Abenteurer (aktuelle Vergleichsausrüstung)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Mace |
| Rang | 5 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 80 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 73 |
| Attribut → M-Angriff | 46 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → Stärke | 6 |
| Attribut → Intelligenz | 4 |
| Beschreibung | A morningstar forged from fallen stars and imbued with celestial power, its spiked head radiates with divine light. Wielded by fallen angels and celestial warriors, it metes out justice to the wicked and the damned. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 1081 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein aus gefallenen Sternen geschmiedeter und mit himmlischer Kraft erfüllter Morgenstern, dessen Stachelkopf göttliches Licht ausstrahlt. Gefallene Engel und himmlische Krieger üben mit ihm Gerechtigkeit an Frevlern und Verdammten. |
| description_eng | A morningstar forged from fallen stars and imbued with celestial power, its spiked head radiates with divine light. Wielded by fallen angels and celestial warriors, it metes out justice to the wicked and the damned. |
| name_de | Morgenstern des gefallenen Engels |
| name_eng | Morningstar of the Fallen Angel |

### Rage of the Minotaur — Noch keiner Vergleichsklasse zugeordnet

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Mace2H |
| Rang | 5 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 80 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → Angriffstempo (Quellwert) | -23 |
| Attribut → P-Angriff | 92 |
| Attribut → M-Angriff | 147 |
| Attribut → Stärke | 8 |
| Attribut → Intelligenz | 12 |
| Beschreibung | A weapon fueled by the primal fury of the minotaur, its massive horns and brutal strength make it a devastating force on the battlefield. Wielded by berserkers and warriors of rage, it tramples foes beneath its hooves with unstoppable fury. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 1637 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| name_de | Zorn des Minotaurus |
| name_eng | Rage of the Minotaur |
| description_de | Ein gewaltiger Zweihandstreitkolben, in dem der unbändige Zorn des Minotaurus fortlebt. Seine Schläge fallen mit der Wucht einer Bestie und zerschmettern selbst standhafte Gegner. Man sagt, wer ihn führt, spüre vor jedem Hieb das ferne Beben donnernder Hufe – und einen Zorn, der sich niemals bezwingen lässt. |
| description_eng | A mighty two-handed mace in which the untamed rage of the minotaur lives on. Its blows strike with the force of a rampaging beast, shattering even the most steadfast foes. It is said that those who wield it feel the distant tremor of thundering hooves before every strike—and a fury that can never be tamed. |

### Shield of Divine Protection — Ritter

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Shield |
| Rang | 5 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 80 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Verteidigung | 73 |
| Attribut → Block (Quellwert) | 0.1 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → Vitalität | 16 |
| Beschreibung | A shield blessed by the gods themselves, its surface gleams with divine light and holy sigils. Wielded by paladins and defenders of the faith, it offers unparalleled protection against evil and corruption. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 1081 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein von den Göttern selbst gesegneter Schild, dessen Oberfläche von göttlichem Licht und heiligen Siegeln erstrahlt. Paladinen und Verteidigern des Glaubens bietet er unvergleichlichen Schutz vor dem Bösen und vor Verderbnis. |
| description_eng | A shield blessed by the gods themselves, its surface gleams with divine light and holy sigils. Wielded by paladins and defenders of the faith, it offers unparalleled protection against evil and corruption. |
| name_de | Schild des göttlichen Schutzes |
| name_eng | Shield of Divine Protection |

### Redeem of Pain — Ritter / Abenteurer (Vergleichsvariante)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Sword |
| Rang | 5 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 80 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 110 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → Stärke | 15 |
| Beschreibung | A weapon of redemption forged from the fires of torment, its blade sears the flesh and purges the soul of sin. Wielded by penitent warriors and avengers of justice, it delivers swift and righteous retribution to the wicked. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 1081 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Eine in den Feuern der Qual geschmiedete Waffe der Erlösung, deren Klinge das Fleisch versengt und die Seele von Sünde reinigt. Büßende Krieger und Rächer der Gerechtigkeit üben mit ihr schnelle, gerechte Vergeltung an den Frevlern. |
| description_eng | A weapon of redemption forged from the fires of torment, its blade sears the flesh and purges the soul of sin. Wielded by penitent warriors and avengers of justice, it delivers swift and righteous retribution to the wicked. |
| name_de | Erlösung vom Schmerz |
| name_eng | Redeem of Pain |

### Executioner Sword of Baldur — Abenteurer – zugeordnete eigene Waffenreihe; Kampfwerte noch auszuarbeiten

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Sword2H |
| Rang | 5 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 80 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → Angriffstempo (Quellwert) | -23 |
| Attribut → P-Angriff | 147 |
| Attribut → Stärke | 15 |
| Attribut → Agilität | 5 |
| Attribut → Geschick | 3 |
| Beschreibung | A massive sword wielded by the executioners of Baldur, its blade is stained with the blood of the guilty. Wielded by those who serve as judge, jury, and executioner, it delivers swift and merciless justice to those deemed unworthy of life. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 1637 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein gewaltiges Schwert der Henker Baldurs, dessen Klinge vom Blut der Schuldigen gezeichnet ist. Wer Richter, Geschworener und Henker zugleich ist, vollstreckt mit ihm schnelle, unerbittliche Urteile an jenen, die des Lebens für unwürdig befunden wurden. |
| description_eng | A massive sword wielded by the executioners of Baldur, its blade is stained with the blood of the guilty. Wielded by those who serve as judge, jury, and executioner, it delivers swift and merciless justice to those deemed unworthy of life. |
| name_de | Henkerschwert Baldurs |
| name_eng | Baldur's Executioner's Sword |

### Glimmer of Hope — Luminet; Heiler als mögliche gemeinsame Lichtwaffe (abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 5 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 80 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 229 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Willenskraft | 10 |
| Attribut → Intelligenz | 15 |
| Beschreibung | A talisman of hope in the darkest of times, its light pierces through despair and guides lost souls to safety. Wielded by healers and guardians of the light, it offers solace and protection to those in need. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 1637 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| name_de | Hoffnungsschimmer |
| name_eng | Glimmer of Hope |
| description_de | Ein Zeichen der Hoffnung in den dunkelsten Zeiten. Sein Licht durchdringt die Verzweiflung und geleitet verlorene Seelen in Sicherheit. Von Heilern und Hütern des Lichts getragen, spendet er Bedürftigen Trost und Schutz. |
| description_eng | A symbol of hope in the darkest of times. Its light pierces through despair and guides lost souls to safety. Carried by healers and guardians of the light, it offers comfort and protection to those in need. |

### Wand of Oracle — Heiler / Kräuterkundler; allgemeiner Int-Stab auch für Luminet / Ritualist denkbar (abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 5 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 80 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 229 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Intelligenz | 15 |
| Attribut → Willenskraft | 10 |
| Beschreibung | A wand attuned to the ancient mysteries of the oracle, its magic reveals glimpses of the future and unlocks hidden truths. Wielded by seers and diviners, it offers guidance and foresight to those who seek its wisdom. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 1637 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein auf die uralten Geheimnisse des Orakels eingestimmter Zauberstab. Seine Magie gewährt Blicke in die Zukunft und enthüllt verborgene Wahrheiten. Sehern und Wahrsagern bietet er Führung und Voraussicht auf ihrer Suche nach Weisheit. |
| description_eng | A wand attuned to the ancient mysteries of the oracle, its magic reveals glimpses of the future and unlocks hidden truths. Wielded by seers and diviners, it offers guidance and foresight to those who seek its wisdom. |
| name_de | Zauberstab des Orakels |
| name_eng | Wand of Oracle |

### Soulstealer — Ritualist (aus Victim abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 5 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 80 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 229 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Vitalität | 5 |
| Attribut → Intelligenz | 20 |
| Beschreibung | A cursed weapon that feeds on the souls of its victims, its blade hungers for the life force of the living. Wielded by necromancers and dark sorcerers, it enslaves the souls of the damned and drains them of their essence. |
| Legendär | false |
| Seltenheit | 2 |
| Verkaufswert | 1637 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| name_de | Seelenräuber |
| name_eng | Soulreaver |
| description_de | Eine verfluchte Waffe, die sich von den Seelen ihrer Opfer nährt. Sein dunkler Kern dürstet nach Lebenskraft. Von Nekromanten und dunklen Zauberern geführt, versklavt sie die Seelen der Verdammten und entzieht ihnen ihre Essenz. |
| description_eng | A cursed weapon that feeds on the souls of its victims. Its dark core thirsts for life force. Wielded by necromancers and dark sorcerers, it enslaves the souls of the damned and drains them of their essence. |

### Skybreaker — Gladiator (zwei Einhandäxte)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Axe |
| Rang | 6 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 100 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 201 |
| Attribut → Block (Quellwert) | 0.1 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → Stärke | 15 |
| Beschreibung | A legendary one-handed axe rumored to have been wielded by an ancient sky warrior. Its razor-sharp blade is said to part the heavens themselves, summoning thunderstorms and lightning bolts to smite foes. |
| Legendär | false |
| Seltenheit | 3 |
| Verkaufswert | 2273 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Eine legendäre Einhandaxt, die angeblich einst ein uralter Himmelskrieger führte. Ihre rasiermesserscharfe Schneide soll den Himmel selbst spalten und Gewitter und Blitze herbeirufen können, um Feinde niederzustrecken. |
| description_eng | A legendary one-handed axe rumored to have been wielded by an ancient sky warrior. Its razor-sharp blade is said to part the heavens themselves, summoning thunderstorms and lightning bolts to smite foes. |
| name_de | Himmelsbrecher |
| name_eng | Skybreaker |

### Dimension — Butcher

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Axe2H |
| Rang | 6 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 100 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 418 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Stärke | 30 |
| Beschreibung | A mythical two-handed axe believed to have the power to tear open dimensional rifts. It was said to have been used by ancient heroes to traverse between worlds and confront otherworldly threats. |
| Legendär | false |
| Seltenheit | 3 |
| Verkaufswert | 3452 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Eine sagenhafte Zweihandaxt, der die Macht nachgesagt wird, Risse zwischen den Dimensionen zu öffnen. Uralte Helden sollen sie genutzt haben, um zwischen Welten zu reisen und sich außerweltlichen Bedrohungen zu stellen. |
| description_eng | A mythical two-handed axe believed to have the power to tear open dimensional rifts. It was said to have been used by ancient heroes to traverse between worlds and confront otherworldly threats. |
| name_de | Dimension |
| name_eng | Dimension |

### Rayans Deracles — Jäger

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Bow |
| Rang | 6 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 100 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 480 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Geschick | 25 |
| Beschreibung | A bow named after the legendary hero Rayan, known for its unparalleled accuracy and range. It was said to have been wielded by Rayan himself to strike down enemies from afar with pinpoint precision. |
| Legendär | false |
| Seltenheit | 3 |
| Verkaufswert | 3452 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein nach dem legendären Helden Rayan benannter Bogen, bekannt für seine unvergleichliche Genauigkeit und Reichweite. Rayan selbst soll ihn geführt haben, um Feinde aus großer Entfernung mit höchster Präzision niederzustrecken. |
| description_eng | A bow named after the legendary hero Rayan, known for its unparalleled accuracy and range. It was said to have been wielded by Rayan himself to strike down enemies from afar with pinpoint precision. |
| name_eng | Rayan´s Deracles |
| name_de | Rayans Deracles |

### Crossbow of the Shddowhunter — Seelenjäger

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Crossbow |
| Rang | 6 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 100 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 386 |
| Attribut → Angriffstempo (Quellwert) | -20 |
| Attribut → Geschick | 14 |
| Attribut → Agilität | 11 |
| Beschreibung | A crossbow crafted by shadowhunters, skilled assassins who stalked their prey from the shadows. It was designed for silent and deadly strikes, its bolts infused with shadow magic to pierce through defenses unnoticed. |
| Legendär | false |
| Seltenheit | 3 |
| Verkaufswert | 3452 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Eine von Schattenjägern gefertigte Armbrust. Diese geschickten Assassinen verfolgten ihre Beute aus den Schatten. Die Waffe wurde für lautlose, tödliche Angriffe entwickelt; ihre von Schattenmagie erfüllten Bolzen durchdringen Verteidigungen unbemerkt. |
| description_eng | A crossbow crafted by shadowhunters, skilled assassins who stalked their prey from the shadows. It was designed for silent and deadly strikes, its bolts infused with shadow magic to pierce through defenses unnoticed. |
| name_de | Armbrust des Schattenjägers |
| name_eng | Crossbow of the Shadow Hunter |

### Blade of Damnation — Schurke (zwei Dolche)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Dagger |
| Rang | 6 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 100 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 124 |
| Attribut → Angriffstempo (Quellwert) | -10 |
| Attribut → Agilität | 8 |
| Attribut → Ambush | 8 |
| Beschreibung | A cursed dagger forged in the depths of the underworld, its wicked blade thirsting for the souls of the living. It was said to have been used by dark sorcerers to harvest souls and unleash damnation upon the world. |
| Legendär | false |
| Seltenheit | 3 |
| Verkaufswert | 2273 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein in den Tiefen der Unterwelt geschmiedeter, verfluchter Dolch, dessen boshafte Klinge nach den Seelen der Lebenden dürstet. Dunkle Zauberer sollen ihn genutzt haben, um Seelen zu ernten und Verdammnis über die Welt zu bringen. |
| description_eng | A cursed dagger forged in the depths of the underworld, its wicked blade thirsting for the souls of the living. It was said to have been used by dark sorcerers to harvest souls and unleash damnation upon the world. |
| name_de | Klinge der Verdammnis |
| name_eng | Blade of Damnation |

### Guardien of the Light — Druide / Schamane / Abenteurer (aktuelle Vergleichsausrüstung)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Mace |
| Rang | 6 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 100 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 124 |
| Attribut → M-Angriff | 77 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → Stärke | 8 |
| Attribut → Intelligenz | 5 |
| Beschreibung | A sacred one-handed mace entrusted to the guardians of the light, defenders of the innocent and champions of righteousness. Its radiant energy was believed to purify evil and protect the faithful from harm. |
| Legendär | false |
| Seltenheit | 3 |
| Verkaufswert | 2273 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein heiliger Einhandstreitkolben, der den Wächtern des Lichts anvertraut wurde, den Beschützern der Unschuldigen und Streitern der Rechtschaffenheit. Seine strahlende Energie soll das Böse läutern und die Gläubigen vor Schaden bewahren. |
| description_eng | A sacred one-handed mace entrusted to the guardians of the light, defenders of the innocent and champions of righteousness. Its radiant energy was believed to purify evil and protect the faithful from harm. |
| name_de | Wächter des Lichts |
| name_eng | Guardian of the Light |

### Hammer of Justice — Noch keiner Vergleichsklasse zugeordnet

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Mace2H |
| Rang | 6 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 100 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → Angriffstempo (Quellwert) | -23 |
| Attribut → P-Angriff | 155 |
| Attribut → M-Angriff | 248 |
| Attribut → Stärke | 10 |
| Attribut → Intelligenz | 16 |
| Beschreibung | A mighty two-handed mace wielded by champions of justice and defenders of the law. Its crushing blows were said to deliver swift and righteous justice to those who dared to defy the principles of truth and honor. |
| Legendär | false |
| Seltenheit | 3 |
| Verkaufswert | 3452 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein mächtiger Zweihandstreitkolben der Streiter der Gerechtigkeit und Hüter des Gesetzes. Seine zerschmetternden Hiebe sollen schnelle, gerechte Urteile an jenen vollstrecken, die Wahrheit und Ehre missachten. |
| description_eng | A mighty two-handed mace wielded by champions of justice and defenders of the law. Its crushing blows were said to deliver swift and righteous justice to those who dared to defy the principles of truth and honor. |
| name_de | Hammer der Gerechtigkeit |
| name_eng | Hammer of Justice |

### Aspis — Ritter

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Shield |
| Rang | 6 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 100 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Verteidigung | 124 |
| Attribut → Block (Quellwert) | 0.15 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → Vitalität | 20 |
| Beschreibung | A legendary shield said to have been forged from the remnants of a fallen star. It was believed to offer unparalleled protection against both mundane and magical threats, its surface shimmering with celestial energy. |
| Legendär | false |
| Seltenheit | 3 |
| Verkaufswert | 2273 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein legendärer Schild, der aus den Überresten eines gefallenen Sterns geschmiedet worden sein soll. Man sagte ihm unvergleichlichen Schutz vor gewöhnlichen und magischen Bedrohungen nach; seine Oberfläche schimmert von himmlischer Energie. |
| description_eng | A legendary shield said to have been forged from the remnants of a fallen star. It was believed to offer unparalleled protection against both mundane and magical threats, its surface shimmering with celestial energy. |
| name_de | Aspis |
| name_eng | Aspis |

### Infernal Blade — Ritter / Abenteurer (Vergleichsvariante)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Sword |
| Rang | 6 |
| Attribut → Sockel | 1 |
| Attribut → Benötigtes Level (gespeichert) | 100 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → P-Angriff | 186 |
| Attribut → Angriffstempo (Quellwert) | -15 |
| Attribut → Stärke | 20 |
| Beschreibung | A cursed sword infused with the essence of the abyss, its blackened blade dripping with the blood of demons. It was feared for its corrupting influence and its ability to spread chaos and destruction wherever it went. |
| Legendär | false |
| Seltenheit | 3 |
| Verkaufswert | 2273 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 10 |
| description_de | Ein von der Essenz des Abgrunds erfülltes, verfluchtes Schwert, dessen geschwärzte Klinge vom Blut der Dämonen tropft. Es wurde für seinen verderblichen Einfluss und seine Fähigkeit gefürchtet, überall Chaos und Zerstörung zu verbreiten. |
| description_eng | A cursed sword infused with the essence of the abyss, its blackened blade dripping with the blood of demons. It was feared for its corrupting influence and its ability to spread chaos and destruction wherever it went. |
| name_de | Infernale Klinge |
| name_eng | Infernal Blade |

### Souls Torment Blade — Abenteurer – zugeordnete eigene Waffenreihe; Kampfwerte noch auszuarbeiten

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Sword2H |
| Rang | 6 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 100 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → Angriffstempo (Quellwert) | -23 |
| Attribut → P-Angriff | 248 |
| Attribut → Stärke | 20 |
| Attribut → Agilität | 7 |
| Attribut → Geschick | 3 |
| Beschreibung | A massive two-handed sword said to trap the souls of its victims within its blade, tormenting them for eternity. It was wielded by dark warriors and soul reapers who sought to feed on the suffering of the damned. |
| Legendär | false |
| Seltenheit | 3 |
| Verkaufswert | 3452 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein gewaltiges Zweihandschwert, das die Seelen seiner Opfer in seiner Klinge fangen und auf ewig quälen soll. Dunkle Krieger und Seelenschnitter führten es, um sich vom Leid der Verdammten zu nähren. |
| description_eng | A massive two-handed sword said to trap the souls of its victims within its blade, tormenting them for eternity. It was wielded by dark warriors and soul reapers who sought to feed on the suffering of the damned. |
| name_de | Klinge der Seelenqual |
| name_eng | Blade of Soul Torment |

### Rod of Divine Light — Luminet; Heiler als mögliche gemeinsame Lichtwaffe (abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 6 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 100 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 387 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Willenskraft | 10 |
| Attribut → Intelligenz | 20 |
| Beschreibung | d evil wherever it shone. It was wielded by prophets and clerics to bring hope and salvation to the faithful and to smite the forces of darkness. |
| Legendär | false |
| Seltenheit | 3 |
| Verkaufswert | 3452 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| name_de | Stab des göttlichen Lichts |
| name_eng | Rod of Divine Light |
| description_de | Ein heiliger Stab, durchdrungen von Auroras Licht. Einst ein Zeichen für Hoffnung und Erlösung gegen die Mächte der Dunkelheit. |
| description_eng | A sacred staff imbued with Aurora’s light. Once a symbol of hope and salvation against the forces of darkness. |

### Rod of Ethernal Life — Heiler / Kräuterkundler; allgemeiner Int-Stab auch für Luminet / Ritualist denkbar (abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 6 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 100 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 387 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Intelligenz | 18 |
| Attribut → Willenskraft | 12 |
| Beschreibung | A mystical staff said to grant eternal life to its wielder, its ancient power sustaining life beyond the bounds of mortal flesh. It was sought by those who sought to defy death itself and to ascend to immortality. |
| Legendär | false |
| Seltenheit | 3 |
| Verkaufswert | 3452 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein mystischer Stab, der seinem Träger ewiges Leben verleihen soll. Seine uralte Macht erhält das Leben über die Grenzen des sterblichen Fleisches hinaus. Begehrt war er bei jenen, die dem Tod selbst trotzen und zur Unsterblichkeit aufsteigen wollten. |
| description_eng | A mystical staff said to grant eternal life to its wielder, its ancient power sustaining life beyond the bounds of mortal flesh. It was sought by those who sought to defy death itself and to ascend to immortality. |
| name_de | Stab des ewigen Lebens |
| name_eng | Rod of Eternal Life |

### Soul Eater — Ritualist (aus Victim abgeleitet)

| Feld | Gespeicherter Wert |
| --- | --- |
| Waffentyp | Wand2H |
| Rang | 6 |
| Attribut → Sockel | 2 |
| Attribut → Benötigtes Level (gespeichert) | 100 |
| Attribut → Maximales Level (gespeichert) | 10 |
| Attribut → M-Angriff | 387 |
| Attribut → Angriffstempo (Quellwert) | -30 |
| Attribut → Vitalität | 8 |
| Attribut → Intelligenz | 22 |
| Beschreibung | A staff of dark magic that consumed the life force of its victims, granting its wielder untold power. It was feared for its ability to drain the souls of the living and to fuel the dark ambitions of its master. |
| Legendär | false |
| Seltenheit | 3 |
| Verkaufswert | 3452 |
| Verkaufbar | true |
| Stapelgröße | 1 |
| Vorschaubild |  |
| Handelbar | true |
| Gewicht | 20 |
| description_de | Ein Stab dunkler Magie, der die Lebenskraft seiner Opfer verzehrte und seinem Träger unermessliche Macht verlieh. Gefürchtet war er dafür, die Seelen der Lebenden auszusaugen und die finsteren Ziele seines Meisters zu nähren. |
| description_eng | A staff of dark magic that consumed the life force of its victims, granting its wielder untold power. It was feared for its ability to drain the souls of the living and to fuel the dark ambitions of its master. |
| name_de | Seelenverschlinger |
| name_eng | Soul Eater |

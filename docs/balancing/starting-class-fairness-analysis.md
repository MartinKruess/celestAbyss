# Startwerte: Fairness-Prüfung der Klassen

Analyse der aktuellen lokalen Daten, 23.10.2026. Keine Spielwerte oder Datenbankdaten verändert. Alle 13 Klassen-Basiswerte stimmen zwischen class-baselines.json, class-templates.json und der gespeicherten Level-1-Referenz überein. Waffen werden aus den aktuellen R1-Definitionen neu berechnet.

Dies ist ein Vergleich der Zahlenbasis, kein abschließender Nachweis der Kampf-Balance. Startausrüstung, Nebenhand-Freischaltung, Startskills, Startattribute, absolute Crit-/Ausweichwerte und Reichweitenvorteile sind nicht vollständig bestätigt. Tiertrainer ist in diesen 13 Vergleichsklassen nicht separat enthalten; Seelenjäger (technischer Schlüssel summoner) ist kein Ersatz für ihn.

## Level 1 ohne Ausrüstung

| Klasse | Leben | Mana | P-ATK | M-ATK | P-DEF | M-DEF | Summe vier Kampfwerte |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 172 | 131 | 8 | 6 | 7 | 9 | 30 |
| Butcher | 221 | 121 | 13 | 7 | 4 | 6 | 30 |
| Druide | 183 | 151 | 9 | 11 | 5 | 5 | 30 |
| Gladiator | 212 | 137 | 12 | 6 | 9 | 3 | 30 |
| Heiler | 153 | 182 | 2 | 12 | 3 | 13 | 30 |
| Kräuterkundler | 176 | 163 | 6 | 12 | 6 | 6 | 30 |
| Jäger | 184 | 111 | 13 | 3 | 6 | 8 | 30 |
| Ritter | 231 | 133 | 5 | 4 | 11 | 10 | 30 |
| Luminet | 171 | 167 | 4 | 14 | 4 | 8 | 30 |
| Ritualist | 169 | 167 | 4 | 14 | 4 | 8 | 30 |
| Schamane | 192 | 153 | 10 | 10 | 6 | 4 | 30 |
| Seelenjäger | 175 | 139 | 12 | 3 | 5 | 10 | 30 |
| Schurke | 166 | 134 | 11 | 6 | 5 | 8 | 30 |

Jede Klasse hat exakt 30 Punkte in diesen vier Kampfwerten. Das ist ein gleiches ungewichtetes Budget, kein Beweis gleicher Stärke: ein kaum genutzter M-ATK-Punkt ersetzt für eine physische Klasse keinen P-ATK-Punkt. Leben und Mana sind darin nicht enthalten. Alle nackten Klassen haben dieselben gespeicherten Tempo-Grundwerte.

## Mit einer R1-Klassenwaffe, ohne Rüstung und Nebenhand

| Klasse | Waffe(n) | P-ATK | M-ATK | P-DEF | M-DEF | Tempo-Rohpunkte | Auto-Angriffe/s | Roh-Auto-Schaden/s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 2H Schwert | 24 | 6 | 7 | 9 | 85 | 1,11 | 26,52 |
| Butcher | 2H Axt | 40 | 7 | 4 | 6 | 80 | 1,04 | 41,6 |
| Druide | 2H Mace | 19 | 27 | 5 | 5 | 85 | 1,11 | 21 |
| Gladiator | 1H Axt | 25 | 6 | 9 | 3 | 90 | 1,17 | 29,25 |
| Heiler | Wand | 2 | 37 | 3 | 13 | 80 | 0,88 | 32,56 |
| Kräuterkundler | Wand | 6 | 37 | 6 | 6 | 80 | 0,88 | 32,56 |
| Jäger | Bow | 44 | 3 | 6 | 8 | 80 | 0,88 | 38,72 |
| Ritter | Sword | 17 | 4 | 11 | 10 | 90 | 1,17 | 19,89 |
| Luminet | Lichtstab | 4 | 39 | 4 | 8 | 80 | 0,88 | 34,32 |
| Ritualist | Victim-Stab | 4 | 39 | 4 | 8 | 80 | 0,88 | 34,32 |
| Schamane | Mace | 18 | 15 | 6 | 4 | 90 | 1,17 | 21,06 |
| Seelenjäger | Crossbow | 36 | 3 | 5 | 10 | 85 | 0,94 | 33,66 |
| Schurke | Dagger | 19 | 6 | 5 | 8 | 95 | 1,23 | 23,46 |


## Vergleichsvariante mit vollständiger R1-Waffenkombination

| Klasse | Waffe(n) | P-ATK | M-ATK | P-DEF | M-DEF | Tempo-Rohpunkte | Auto-Angriffe/s | Roh-Auto-Schaden/s |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 2H Schwert | 24 | 6 | 7 | 9 | 85 | 1,11 | 26,52 |
| Butcher | 2H Axt | 40 | 7 | 4 | 6 | 80 | 1,04 | 41,6 |
| Druide | 2H Mace | 19 | 27 | 5 | 5 | 85 | 1,11 | 21 |
| Gladiator | 1H Axt + 1H Axt | 36,7 | 6 | 9 | 3 | 80 | 1,04 | 38,17 |
| Heiler | Wand | 2 | 37 | 3 | 13 | 80 | 0,88 | 32,56 |
| Kräuterkundler | Wand | 6 | 37 | 6 | 6 | 80 | 0,88 | 32,56 |
| Jäger | Bow | 44 | 3 | 6 | 8 | 80 | 0,88 | 38,72 |
| Ritter | Sword + Shield | 17 | 4 | 19 | 10 | 80 | 1,04 | 17,68 |
| Luminet | Lichtstab | 4 | 39 | 4 | 8 | 80 | 0,88 | 34,32 |
| Ritualist | Victim-Stab | 4 | 39 | 4 | 8 | 80 | 0,88 | 34,32 |
| Schamane | Mace + Mace | 25,2 | 19,5 | 6 | 4 | 80 | 1,04 | 26,21 |
| Seelenjäger | Crossbow | 36 | 3 | 5 | 10 | 85 | 0,94 | 33,66 |
| Schurke | Dagger + Dagger | 26,2 | 6 | 5 | 8 | 90 | 1,17 | 30,65 |


Roh-Auto-Schaden/s ist Angriffswert × Angriffe/s nach der vorhandenen Tempofunktion. Verwendet werden die Standardfrequenzen der Simulation: Nahkampf 1,3, Fernkampf/Magier 1,1 vor Tempoabzügen. Für vier Magierklassen zählt M-ATK, sonst P-ATK. Keine Gegnerabwehr, Skills, Crits, Verfehlungen, Bewegung, Heilung, Beschwörungen oder Ressourcen berücksichtigt. Hybrid-Magieskills werden damit ausdrücklich nicht bewertet. Das ist ein Vergleichsindikator und kein gemessener Kampf-DPS.

Vollständige Waffenkombination ist eine hypothetische Vergleichsvariante, keine bestätigte Startausstattung. Direkter Nebenhandangriff zählt mit dem vorhandenen Faktor 0,9, Tempoabzüge beider Waffen vollständig. Schildblock bleibt wegen nicht geklärter Einheiten ausgeschlossen.

## Klassen mit statistischer Unterlegenheit in einem engen Vergleich

Folgende Paare erfüllen: gleiche Ausrichtungsgruppe, in keinem der hier verwendeten Werte besser, mindestens einmal schlechter. Geprüft werden Leben, Mana, beide Abwehrwerte, Roh-Auto-Schaden/s; bei Hybriden zusätzlich beide Angriffswerte. Das beweist keine Gesamt-Unterlegenheit einschließlich Skills und Klassenmechaniken.


- Eine Waffe: Ritualist gegenüber Luminet.
- Eine Waffe: Schurke gegenüber Seelenjäger.
- Volle Waffenkombination: Ritualist gegenüber Luminet.
- Volle Waffenkombination: Schurke gegenüber Seelenjäger.


## Einordnung

- Die nackten Vier-Werte-Summen sind exakt gleich: 30 je Klasse. Der Schurke startet mit 11 P-ATK, 5 P-DEF und 8 M-DEF; der Butcher mit 13, 4 und 6. Der Schurke ist also nicht in allen diesen Werten unterlegen.
- Die Startwaffen spreizen die Angriffswerte deutlich. Zweite Dolche/Äxte ändern den Vergleich wesentlich. Eine Beurteilung muss deshalb mindestens eine definierte Startausstattung zugrunde legen.
- Schurke: niedriges Leben, aber gegenüber Butcher bessere nackte Abwehr und höheres Waffentempo. Sein Roh-Auto-Schaden bleibt auch mit zwei Dolchen unter dem Butcher. Ob frühe Skills/Mechaniken das ausgleichen, ist gesondert zu prüfen.
- Luminet und Ritualist haben gleiche vier nackte Kampfwerte, gleiches Mana und gleiche R1-Stabangriffswerte; Ritualist hat zwei Leben weniger. Das liegt weit unter einem Anlass für einen pauschalen Basisumbau. Beschwörung/Skills sind separat zu betrachten.
- Heiler: niedrigstes Leben und niedrige physische Abwehr, dafür höchste magische Abwehr und höchstes Mana. Kräuterkundler: ausgeglichenere Abwehr bei identischem nacktem M-ATK zum Heiler. Das sind erkennbare Gegenleistungen.
- Nicht aus der kleinen angezeigten Zahl allein auf Nutzlosigkeit schließen: unsere Abwehrformel ist levelabhängig. Ebenso ist eine frühe +5-Brust nicht mit einem +20-Gesamtset gleichzusetzen.

## Sinnvoller nächster Test

Vor Änderungen eine konkrete Startausstattung und verfügbare Startskills festlegen. Dann Level 1, 4 und 10 gegen denselben physischen und magischen Referenzgegner prüfen: Tötungszeit, verlorene Lebenspunkte, Überlebenszeit und Ressourcen. Eine-Waffe- und volle-Waffenkombinations-Varianten getrennt halten, bis die Freischaltung geklärt ist. So werden echte Startnachteile sichtbar, ohne bloße Punktesummen gleichzusetzen.

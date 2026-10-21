# Prüfung der Skillbeschreibungen

237 Datenbankskills geprüft. Die aktuelle Tabelle enthält108 Beschreibungen und132 fehlende Texte. Datenbankbeschreibungen bleiben bei fehlenden Quelltexten erhalten. 43 eindeutige Textkorrekturen gespeichert und zurückgelesen;32 größere Widersprüche bleiben offen. Abschöpfen wurde anschließend bestätigt: +2 Strength und +1 Vitality pro Skilllevel, ohne Intelligence- oder Victim-Bonus. Die Klassenzuordnung bleibt erhalten. Erleuchtung, Überlebenswille und Adaption gewähren ihre Attributboni ebenfalls pro Skilllevel.

## Größere Widersprüche

| DB Nr | Skill | Zu klären |
| --- | --- | --- |
| 4 | Abschöpfen | Geklärt und gespeichert: +2 Strength und +1 Vitality pro Skilllevel. |
| 6 | Adrenalin | Bestätigt und gespeichert: Strength und Intelligence jeweils +1 %, mit expliziter Einheit fraction. Skalierung pro Skilllevel und Balancing mit Gegenstücken bleiben offen. |
| 7 | Armbursttraining | Geklärt: +1 Dexterity und +2 Agility pro Skilllevel. |
| 16 | Wasserfesseln | Startdauer auf Skilllevel 1: 1 Sekunde. Cooldown 35 Sekunden, maximal 20 Skilllevel. Steigerungsvorschlag +0,1 Sekunden Dauer und -0,5 Sekunden Cooldown je weiterem Level noch offen. Bei 19 Steigerungen: 2,9 Sekunden und 25,5 Sekunden. PvP-Kontrolleffekte und Verkettung später prüfen. |
| 28 | Eiserner Schild | Geklärt: passiver Wertebonus. Deutsche Beschreibung bleibt, Englisch korrigiert zu Slightly increases your defense. Block +5/Vitality +2/Wisdom +1 und Maxlevel 10 unverändert. Bedeutung der Blockeinheit weiterhin offen. |
| 32 | Elementarenergie | Bestätigt und gespeichert: automatisch ausgelöster Effekt; Level 1 +2 Intelligence für den Anwender, -10 % Magical Defense beim Gegner, Dauer 30 Sekunden, Cooldown 120 Sekunden. Einheiten und Ziele explizit gespeichert. Triggerbedingung und weitere Levelskalierung offen; keine Laufzeit-Proc-Logik implementiert. |
| 34 | Energieausbruch | Text verspricht Schild10%HP,1% Manaverbrauch,10% Schaden und15s. Daten health0.04/mana0.04; getrennte Effekte/Einheiten fehlen. |
| 35 | Energieentladung | Text nennt30% Lebensopfer, health ist-0.05. Levelskalierung und Bedeutung dieses Felds klären. |
| 43 | Erweiterung der Sinne | Text nennt nur Strength+3; Daten enthalten auch Ambush+2 und Dexterity+3. Liste nennt Agility statt Strength. |
| 44 | Erweiterung des Geistes | Bestätigt sind vier Attribute+3 und300s aktiv. Alter Text nennt nur Intelligence+3 je Level. Skalierung je Level offen. |
| 45 | Erweiterung des Körpers | Text Wisdom+1; Daten Wisdom+2 und zusätzlicher Agility+2. Scope/Skalierung bestätigen. |
| 55 | Brecher des Geistes | Text nennt magische Verteidigung-10% für30s; dur5 und kein entsprechender mdef-Wert. |
| 59 | Göttlicher Schutz | Deutsch:30% Schadensreduktion für5s. Englisch:+10% physische Verteidigung für30s. Daten dur12,health500,vita25,pdef55,mdef55. |
| 62 | Internal Zyklon | Beide Texte8s; dur5. Angriffs-/Effektdauer trennen. |
| 71 | Lebensessenz | Text heilt3% des maximalen Lebens; health113 ohne Modus oder Formel. Nicht ungeprüft113HP daraus machen. |
| 75 | Energie des Körpers | Text Physical Attack+35; patk20. Physical Defense60 und300s stimmen. |
| 80 | Beweglichkeit | Text nennt Lauftempo; Daten agi3, keine movementSpeed. Agility wurde vom Nutzer mit Attack Speed verbunden. |
| 105 | Seelentrennung | Deutsch erfordert Seelenqual; Englisch erfordert Seelenfessel. Richtigen Vorgängerskill festlegen. |
| 123 | Wiederaufladung | Text verkürzt Cooldowns5 bis15s; dur-5. Eine Cooldownreduktionsformel fehlt. |
| 141 | Eiserner Wille | Deutsch Vita+3 und unvollständiger Block-Prozentwert. Englisch Willenskraft+3/Vita+1. Daten vita3/block2. Block-Einheit klären. |
| 147 | Erweiterung der Leidenschaft | DB-Text Dexterity+3/Agility+2, Daten nur dex3; Tabelle hat Strength+6. |
| 149 | Macht der Wildnis | Text Strength+3/Intelligence+2; zusätzlich patk120 gespeichert. Buff gegenüber Schaden klären. |
| 150 | Macht des Begleiters | Text stärkt Pet-Strength/Vitality+2; Daten enthalten stattdessen beide Angriffe/Verteidigungen jeweils5. Ziel/Bonusmodell klären. |
| 173 | Geist des Kriegers | Deutsch Strength/Vitality jeweils3; Daten str4/vita1. |
| 177 | Ungebrochen | Text Wiederaufstehen und40s weiterkämpfen; dur30. Weitere Daten Tempo/Angriffstempo, Wiederbelebungsmechanik fehlt strukturiert. |
| 184 | Hinterhältige Falle | Text speichert Schaden30s und wiederholt ihn; dur600. Trigger und Zeitfenster nicht strukturiert. |
| 193 | Macht des Wassers | Deutsch Manaregeneration; Englisch magischer Angriff. Daten matk18. |
| 197 | Segen des Angriffes | Text nur physischer Angriff; Daten auch matk18 und str2. Ziel-/Bonusumfang klären. |
| 201 | Waffentraining | Text Angriff+4; Daten patk5/matk5/atkSpeed1. Umfang und Attack-Speed-Einheit klären. |
| 204 | Katalysator Rein | Text nur magische Gruppenverstärkung, Daten zusätzlich patk45. Effektkategorien und Ziele fehlen. |
| 205 | Katalysator Unrein | Text nur magische Gruppenverstärkung, Daten zusätzlich patk45. Effektkategorien und Ziele fehlen. |
| 214 | Ausbrennen | Deutsch Blutmagieverstärkung durch Lebensopfer; Englisch Schaden über Zeit gegen Gegner. Daten health-18/matk3. |
| 228 | Geheiligte Barriere | Text Schildabsorption; gespeichert matk370. Schildstärke versus Angriffsfeld klären. |

## Eindeutige Textkorrekturen

| DB Nr | Skill | Neuer deutscher Text |
| --- | --- | --- |
| 1 | Erleuchtung | Erleuchtung erhöht deine Intelligenz und Weisheit. +1 Intelligenz +1 Weisheit pro Level |
| 3 | Abräumer | Trifft zwei bis drei Gegner in deiner Nähe. |
| 8 | Astalkörper | Erschafft einen Astralkörper, der auf deine Gegner zufliegt und bis zu sieben Feinde trifft. |
| 15 | Beben | Schlägt mit deiner Waffe auf den Boden und erzeugt ein Beben, das nahe Gegner kurz verlangsamt. |
| 18 | Bogenschießtraining | Verbessert deine Fertigkeiten mit dem Bogen und erhöht deine Geschicklichkeit um 3 pro Skilllevel. |
| 20 | Brecher des Lichts | Führt zwei schnelle Dolchstiche aus. Der zweite Stich hat eine erhöhte Chance auf einen kritischen Treffer. |
| 24 | Doppelschuss | Schießt zwei Pfeile schnell hintereinander auf dein Ziel. |
| 36 | Energieschlag | Wirft einen Ball aus purem Licht auf dein Ziel. |
| 39 | Erdbrecher | Bricht den Boden auf und schleudert nahe Gegner zurück. |
| 49 | Feuerball | Schleudert einen Feuerball auf dein Ziel. |
| 50 | Feuerlanze | Erschafft eine Feuerlanze, die einen Gegner durchbohrt. |
| 51 | Feuerpfeil | Schießt einen brennenden Pfeil auf dein Ziel. |
| 58 | Göttliche Heilung | Nutzt die Macht Auroras, um einem Verbündeten eine große Menge Leben wiederherzustellen. |
| 68 | Kristallisierte Wasserspähre | Schleudert eine Eiskugel auf dein Ziel. Sie zerspringt beim Aufprall und kann den Gegner kurzzeitig außer Gefecht setzen. |
| 69 | Kugelblitz | Elektrische Fähigkeiten richten 15% mehr Schaden an, wenn das Ziel zuvor von einem Wasserspruch getroffen wurde. |
| 73 | Lucky Strike | Lucky Strike erhöht leicht deine Kritische Chance. +1 pro Level |
| 79 | Mentale Erweiterung | Erhöht deinen magischen Angriff um 60 für 5 Minuten. |
| 88 | Salve | Schießt eine Salve aus Pfeilen auf einen größeren Bereich. |
| 93 | Schildangriffstraining | Du versteckst dich nicht nur hinter dem Schild, du kämpfst mit ihm. + 2 Vitalität +1 Stärke |
| 104 | Seelenqual | Verursacht hohen Schaden am Ziel, solange Seelenfessel wirkt. |
| 113 | Tödlicher Tanz | Setzt eine besondere Technik der Assassinen ein, bewegt dich zwischen mehreren Gegnern und fügt ihnen Schaden zu. |
| 115 | Überschallklinge | Schneidet die Luft mit einer Überschallklinge und erzeugt einen Schallstoß, der Gegnern im Umkreis Schaden zufügt. |
| 116 | Unerschöpfliche Hoffnung | Dein Glaube gibt dir unerschöpfliche Hoffnung. Du erhältst 2 Punkte magischen Angriff für jeden Glaubenspunkt. |
| 119 | Verbessertes Nachladen | Deine Fähigkeiten im Hinterhalt sind unübertroffen. Du erhältst 2 Angriffspunkte für jeden Ambush Punkt. |
| 140 | Standhaft | Erhöht deine Vitalität um 4 und deine Weisheit um 2. |
| 143 | Immunität | Erhöht deine Weisheit um 3 und deine magische Verteidigung um 6. |
| 144 | Rüstungstraining | Verbessert deine Rüstungsbeherrschung und erhöht deine physische Verteidigung um 6 und deine Vitalität um 2. |
| 156 | Waldläufer | Erhöhe die Geschicklichkeit um 2 und die Agilität um 1. |
| 161 | Energie der Wut | Erhöht deinen physischen Angriff um 50 für 45 Sekunden. |
| 167 | Entgiftung | Macht dich für 60 Sekunden immun gegen Vergiftungseffekte. |
| 189 | Herz des Verräters | Halte deine Freunde nah und deine Feinde noch näher. Erhöhe deine Geschwindigkeit und deine Angriffsgeschwindigkeit. |
| 194 | Herr der Elemente | Steigere die Werte deiner Gruppe |
| 206 | Lunare Inkanation | Badet einen Verbündeten im Mondlicht und erneuert seinen Körper. |
| 208 | Das ewige Wissen | Erweitert dein Wissen über Magie und verleiht dir mehr Macht. |
| 210 | Lichtblitz | Schleudert einen grellen Lichtblitz auf deine Feinde. |
| 216 | Heilige Vernichtung | Entfesselt eine Salve aus Lichtwellen, die deine Feinde trifft. |
| 218 | Licht kristallenes Gefängnis | Erschafft ein kristallenes Gefängnis aus Licht, das auch mächtige Gegner einschließen kann. |
| 219 | Manaexplosion | Opfert dein gesamtes Mana für eine gewaltige Explosion. Je mehr Mana du opferst, desto stärker wird der Angriff. |
| 225 | Macht des Geistes | Erhöht die magische Verteidigung deiner Gruppe um 18 für 30 Minuten. |
| 226 | Seelenbegleiter | Beschwört deinen Seelenbegleiter, der deine Feinde angreift. |
| 227 | Dämonische Schockwelle | Schlägt auf den Boden vor dir und erzeugt eine Schockwelle, die Gegner in einem kegelförmigen Bereich trifft. |
| 235 | Meteoritenschauer | Begräbt deine Feinde unter einem mächtigen Meteoritenschauer. |
| 236 | Teufelspackt | Schließt einen Teufelspakt und erhält einen zufälligen Buff. Der Pakt birgt ein Risiko. |

Englische Texte und Vorherstände stehen in data/skill-description-review.json. Neue Beschreibungen enthalten keine Gedankenstriche. Die bekannten Spielhandlungen bleiben erhalten. Spezialmechaniken ohne strukturierte Daten werden nicht allein deshalb gestrichen. Bei Prozenten, pro-Level-Skalierung und der Unterscheidung zwischen Angriffs- und Effektdauer wird keine Bedeutung erfunden.



## Bestätigte Waffentrainings

Boni pro Skilllevel: Armbrust Dexterity +1/Agility +2, Bogen Dexterity +2/Agility +1 und Dual-Axt Strength +2/Agility +1, jeweils maximal zehn Skilllevel. Zweihand-Axt und Dolch/Schwert unverändert.

Schwerttraining: Strength +2 und Wisdom +1, maximal fünf Skilllevel. Schildangriffstraining: Vitality +2 und Strength +1, maximal fünf Skilllevel. Beide nur für die bisherigen Klassen Knife und Templar (Ritter und Tempelritter). Zusammen auf Maximum: Strength +15, Vitality +10 und Wisdom +5, insgesamt 30 Attributpunkte. Datenbank, Seed und Beschreibungen synchronisiert.




## Bestätigte Zuordnung der Erweiterungen

Körper: Ritter/Tempelritter, Gladiator/Berserker, Abenteurer und Butcher/Destroyer. Geist: Kräuterkundler/Witcher, Ritualist/Blutmagier, Druide/Alchemist, Heiler/Priester, Schamane/Hochelfe und Luminet/Lichtmagier. Sinne: Jäger, Nachtjäger/Seelenjäger und Schurke/Schattenkrieger; Dexterity +3 und Agility +4, ohne Strength oder Ambush. Werte von Körper und Geist unverändert. Weitere Levelskalierung bleibt offen. Mentale Erweiterung und Erweiterung der Leidenschaft separat behandeln. Bestehende englische Klassenlabels bleiben bis zur gemeinsamen Namensmigration erhalten.

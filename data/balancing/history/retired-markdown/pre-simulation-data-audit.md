# Datenprüfung vor der Zehn-Minuten-Simulation

> **Nachtrag nach der Klärungsrunde:** Die folgende Liste dokumentiert den ursprünglichen Prüfstand vor den Ergänzungen. Inzwischen sind Wutaufbau/-kosten, Erlösendes Feld, Infernal-Zyklon, Frostschauer und das Seelensammler-/Spektralketten-Zeitfenster bestätigt und gespeichert. Für den vereinfachten Test zählen nur Castzeiten; die Ansturmdauer blockiert nicht. Der ausgeführte Test mit Annahmen und aktuellen Eingabe-Prüfsummen steht in [all-class-timed-damage.md](all-class-timed-damage.md). Die offenen allgemeinen Spielmechaniken wurden dadurch nicht als fertige Unreal-Implementierung erklärt.

Stand: 17.10.2026. **Keine Simulation gestartet, keine Datenbankwerte geändert.**

MongoDB-Prüfung: alle 243 Skilldefinitionen stimmen vollständig mit data/skills.json überein; alle 13 Klassen-Attributregeln stimmen mit den lokalen Definitionen überein. Datenübereinstimmung bedeutet nicht Vollständigkeit.

## Dateiabgleich

| Klasse | Skills | JSON-Abweichungen | geprüfte Markdown-Felder | nicht exakt gefundene Markdown-Felder |
| --- | ---: | ---: | ---: | ---: |
| adventurer | 33 | 0 | 1516 | 0 |
| butcher | 33 | 0 | 1433 | 0 |
| druid | 33 | 0 | 1574 | 0 |
| gladiator | 35 | 0 | 1618 | 0 |
| healer | 33 | 0 | 1837 | 0 |
| herbalist | 33 | 0 | 1570 | 0 |
| hunter | 33 | 0 | 1456 | 0 |
| knight | 33 | 0 | 1502 | 0 |
| luminet | 32 | 0 | 1571 | 0 |
| ritualist | 33 | 0 | 1678 | 0 |
| villian | 33 | 0 | 1502 | 0 |
| shaman | 32 | 0 | 1451 | 0 |
| summoner | 32 | 0 | 1417 | 0 |

Markdown-Abgleich prüft die gespeicherten Detailtabellen; Zusammenfassungen und historische Berechnungsabschnitte können trotzdem veraltet sein. Abenteurer verwendet teilweise gemeinsame Detaildateien; nicht gefundene Felder sind im JSON einzeln aufgelistet und erfordern Darstellungsprüfung.

## Offene Angaben und Entscheidungen

| Status | Skills | betroffene Klassen | Befund |
| --- | --- | --- | --- |
| blocker | 13 Ausbruch der Wut | gladiator | Wutgewinn je Auto-Attack fehlt. Voller Startbalken allein definiert keinen wiederholten 10-Minuten-Betrieb. |
| blocker | 127 Wutexplosion | gladiator | Wutexplosion: Aktivierungskosten ausdrücklich offen; nicht als kostenlos behandeln. |
| blocker | 40 Erlösendes Feld der Schwäche | knight | Erlösendes Feld: Mana-Kosten und Castzeit fehlen. |
| blocker | 23 Donnernde Lanze | knight | Donnernde Lanze: keine feste Castzeit, Ansturm 0,1–3 s ohne Distanzformel. Für Dummytest Distanz/Aktionsdauer festlegen. |
| blocker | 239 Frostschauer | healer | Frostschauer: Cooldown fehlt, Charakter-M-Angriffsbeitrag je Tick ausdrücklich offen. |
| blocker | 62 Infernal Zyklon | shaman | Infernal Zyklon: zusätzlicher DoT-Schaden und Tickintervall fehlen. Gespeicherter Grundtreffer ersetzt diese Wirkung nicht. |
| blocker | 186 Seelensammler, 229 Spektralketten | summoner | Seelensammler: Cast-/Cooldown-Überlappung offen; Spektralketten verlangt aktive Markierung, Abschluss nach maximaler Sammelphase ungeklärt. 25 Treffer plus Abschluss nicht ohne Zeitregel voraussetzen. |
| decision | 104 Seelenqual, 105 Seelenernte | ritualist | Seelenqual: 0 Cast und 0,19 s Cooldown erlaubt rechnerisch bis 16 Anwendungen in 3 s statt berichteter 15. Abschlussfenster/Skillpriorität müssen festgelegt werden. |
| decision | 83 Opfergabe, 99 Schrei der Unterwelt | ritualist | Opfergabe: tödlicher Lebenspreis/Aktivierungsreihenfolge offen. Schrei der Unterwelt: Beitrag des Charakter-M-Angriffs offen; bisherige Rotation addiert ihn als Annahme. |
| decision | 48 Feuer der Verdammten, 209 Verloren in der Dunkelheit | ritualist | Feuer der Verdammten: historischer Opferbonus ungeklärt. Verloren in der Dunkelheit: fehlende verbindliche Seelen-Skill-Tags und Anwendung je Mehrfachtreffer/DoT. |
| decision | 184 Hinterhältiger Pfeil | summoner | Hinterhältiger Pfeil: zufällige 60-%-Markierung führt zu 90-%-Schadenswiederholung. Im deterministischen Test explizit ausschließen oder eigene Variante; kein garantierter Proc. Zwischenstufenkurven offen, Maximalwerte vorhanden. |
| decision | 8 Astralkörper, 65 Klingentornado, 76 Mächtiger Doppelschlag, 88 Salve, 113 Tödlicher Tanz, 126 Wirbelnde Klinge, 180 Seelenplage, 211 Aurora Wellen, 227 Dämonische Schockwelle, 235 Meteoritenschauer | adventurer, butcher, hunter, luminet, ritualist, villian, shaman | Ausführungs-/Trefferzeitpunkte oder Blockierung weiterer Aktionen teilweise offen. Besonders Klingentornado (Attack-Speed-Abhängigkeit), Seelenplage (4 s Animation), Astralkörper (Mehrfachtrefferfrage), Aurora-Randzonen und Meteoriten-Einschlagsverteilung beeinflussen Zeitvergleich. |
| decision | 202 Verbrennen | druid | Verbrennen: Grundwert je Tick definiert, zusätzlicher Charakter-M-Angriff nicht explizit definiert. Bisheriger Vergleich zählt nur Grundwert. |
| excluded | 135 Kontrolle | adventurer, butcher, druid, gladiator, healer, herbalist, hunter, knight, luminet, ritualist, villian, shaman, summoner | Kontrolle: gemeinsame Definition mit Lerngrenzen vorhanden, konkrete Wirkung/Skalierung fehlt. Laut Nutzer normale Pet-Mechanik jetzt ausgenommen. |
| excluded | 206 Lunare Inkanation, 207 Himmlische Aufopferung, 108 Strahlendes Aurafeld | healer | Wiederbelebung: Aktivierungs-Mana fehlt. Himmlische Aufopferung: genaue Heilumwandlung/HP-Grenze offen. Aurafeld: M-Angriffsbeitrag offen. Keine Blocker für reinen offensiven Dummytest ohne Heilaktionen. |
| decision | 169 Innere Unruhe, 152 Giftpfeil, 54 Gefrierbrand, 32 Elementarenergie, 84 Lähmung, 75 Verstärkung des Körpers, 176 Ewiger Sieger | adventurer, butcher, gladiator, healer, herbalist, hunter, knight | Zufalls-Procs/Boni separat behandeln. Nutzer schließt Zufalls-Krit aus, aber andere Zufallseffekte noch nicht pauschal entschieden; etwa Gift, Gefrierbrand, Adrenalin und Innere Unruhe können Schaden ändern. |
| ready | 226 Seelenbegleiter, 237 Morrak´s Meister | druid, hunter, ritualist | Seelenbegleiter: 30 % Dex/Vita/Wis live, Fernkampf-P-Angriff, 360 s Laufzeit/CD, 132 Mana, 0,4 s Cast. Morrak: 1/3 M-Angriff live, 300 s Laufzeit/360 s CD, nur −500 Max-HP, 0,4 s Beschwörung; separate Questaktion noch nicht angebunden. Beide Attack-Speed 1. Neue Testannahme 1,5 Angriffe/s löst Grundfrequenz, keine Reichweite/Todeslogik für unbeweglichen unsterblichen Dummy nötig. |

## Globale Testregeln

- 100 % Angriffstempo = 1,5 gemeinsame Waffenaktionen/s; zwei Waffen sind ein gemeinsamer Angriff.
- HP/MP-Regeneration alle 2 s; Mana nach jedem Tick für nächste bezahlbare Aktion nutzbar, nicht auf volles Mana warten.
- Skill-Priorität, Auto-Attack während Cast/Animation, globaler Aktionsabstand, Cooldownstart und nicht blockierende Animationen zentral festlegen.
- Keine Rüstung, Verfehlen oder Zufalls-Krit; garantierter Krit weiterhin ×1,8.
- Eigenbuff-/Gruppenbuff-Nutzung und Zufalls-Schadensprocs vor Messung einheitlich bestimmen.

## Gewünschtes Mana-Protokoll

- Zeitpunkt erstmals unzureichendes Mana und Gesamtzeit ressourcenbedingt ohne Skills.
- Auto-Attack-only-Phasen getrennt nach Mana, Cooldowns und Voraussetzungen ausweisen.
- Kein Warten auf vollen Mana-Pool; erste bezahlbare erlaubte Aktion nutzen.

## Weitere Prüfergebnisse

Kurvenstrukturauffälligkeiten: 0. Alle pending/provisional-Statusfelder sind zusätzlich im JSON inventarisiert; viele betreffen Zielgeometrie oder spätere PvP-/Pet-Regeln und blockieren diesen Einzelzieltest nicht. Fehlende aktive Kosten werden nicht als null interpretiert. Konstante Effekte benötigen nicht zwangsläufig eine Levelkurve; Passive benötigen keine aktive Castzeit. Salve skaliert durch Pfeilanzahl und Wasserfesseln durch Dauer – keine fehlende Schadenskurve behauptet. Sturm der Wut ist laut Beschreibung manafrei, obwohl das strukturierte Nullkostenfeld fehlt.

Veraltete Berichtstexte: Die Rotationsauswertung schließt den Seelenbegleiter noch mit der Begründung „Angriffstempo/Schadensformel fehlen“ aus, obwohl die Definition mittlerweile vorliegt. Die Abenteurer-Zusammenfassung im Review-Generator setzt Erweiterung des Körpers weiterhin auf alte HP-/Agilitätswerte, obwohl die Detaildefinition bereits Stärke/Vita/Wisdom ohne Bonus-HP enthält. Diese Zusammenfassungen sind keine gültige Simulationsquelle.


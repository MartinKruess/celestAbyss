# Luminet: Abschlussstand der ersten Skillrunde

32 zugeordnete Skills: 21 aktiv, 11 passiv; 282 SP. Ein 33. Skill bleibt offen. Himmlische Aufopferung ist ausschließlich Healer/Priest zugeordnet. Erste Hilfe bleibt erhalten.

Bestätigte Kosten, Castzeiten und Levelkurven sind in MongoDB gespeichert und mit dem lokalen Katalog abgeglichen. Der Luminet ist in den Vergleich mit permanenten Passiven aufgenommen. Dies ist der Abschluss der ersten Werteprüfung, keine abgeschlossene Runtime-Implementierung oder endgültige Balancefreigabe.

Siehe [Skillübersicht](luminet-skills.md), [Werte vor dem Kampf](luminet-precombat.md), [Mana und Rotationsschaden](luminet-rotation-review.md) sowie [Klassenvergleich](../class-comparison.md).

Noch zu prüfen:

- Aurora-Welle: genaue Platzierung zum Ziel, Randbreite, Trefferhäufigkeit und gesamte Animationsdauer. Vorläufig ein voller Treffer in der Mitte für die Schadensrechnung.
- Nova: Zielgebietsmitbewegung und Zeitpunkt des Zusammenziehens; Durchmesser 2 m → 0,5 m, Explosion 4 m bestätigt.
- Gefängnis: Bossregeln und visuelle Physik. Festhalten 1/2/4 Sekunden, eingehender Lichtschaden +1/2/3 Prozent, kein Blockieren von Angriffen.
- Allgemeine Kreaturen-Kontrolle wird im gemeinsamen Block weiter ausgearbeitet.
- Charakter-M-Angriff pro Mehrfachtreffer, Faith/Victim-Umrechnung und Synergien benötigen dieselbe abschließende Prüfung wie bei den übrigen Klassen. Aktuelle Rechnung verwendet den bisherigen Intelligenzvergleich, ohne zusätzlich Faith und Victim aufzusummieren.
- Mana-Regeneration ist nicht zeitlich verrechnet; es ist keine feste Tickdauer beschlossen. Lange Cooldowns verhindern zwei unmittelbar aufeinanderfolgende vollständige Rotationen im tatsächlichen Spiel.

# Zwei Minuten: nur Auto-Attacks gegenüber nur Skills

Alle reinen Selbstbuffs bereits bei Messbeginn aktiv. Charakterschaden einschließlich eigener ausgelöster Zusatztreffer, Beschwörungen separat.

| Klasse | Nur Auto-Attacks | Nur Skills, keine Auto-Attacks |
| --- | ---: | ---: |
| Abenteurer | 93.385 | 53.010 |
| Butcher | 115.242 | 67.213 |
| Druide | 49.409 | 112.974 |
| Gladiator | 85.365 | 64.741 |
| Heiler | 68.169 | 113.380 |
| Kräuterkundler | 75.406 | 113.361 |
| Jäger | 100.760 | 93.498 |
| Ritter | 58.755 | 51.267 |
| Luminet | 70.810 | 208.178 |
| Ritualist | 90.270 | 143.190 |
| Schamane | 77.086 | 98.023 |
| Seelenjäger | 104.024 | 91.157 |
| Schurke | 81.796 | 74.987 |

## Separater Beschwörungsschaden

| Klasse | Im Auto-Attack-Lauf | Im Skill-Lauf |
| --- | ---: | ---: |
| Druide | 16.896 | 16.896 |
| Jäger | 17.614 | 17.614 |
| Ritualist | 49.003 | 46.624 |

## Regeln

- Nahkampf-Basis 1,3 Auto-Attack-Aktionen pro Sekunde; gemeinsame Punktsumme durch die Nahkampf-Sättigungskurve, maximal 2 Aktionen pro Sekunde bei 350 Punkten. Jäger und Seelenjäger: Grundfrequenz 1,1; Magierfrequenzen unverändert. Angriffsgeschwindigkeit verkürzt Castzeiten noch nicht. Agilitätsfaktor unverändert: 0,06 Punkte pro Agilität. Krit-/Block-/Ausweichkurven nicht als Zufallswürfe aktiviert.
- Je Klasse 120 Sekunden, Level 60 und R6-Grundausrüstung. Volle Ressourcen und alle im reinen Selbstbuff-Vergleich zugelassenen Selbstbuffs bereits bei t=0 aktiv; deren Vorbereitung liegt außerhalb der Messung. Keine Gruppenbuffs, kein Provozieren, keine regulären Pets oder zufälligen Procs.
- Abgelaufene Selbstbuffs werden bei Verfügbarkeit innerhalb der Messung erneuert und bezahlt. Maximalwerte und Ressourcenboni sind beim Start bereits berücksichtigt; spätere Erneuerungen füllen Ressourcen nicht kostenlos auf.
- Auto-only verwendet keine aktiven Schadensskills. Durch die Auto-Attacks ausgelöste Zusatztreffer aus Selbstbuffs, insbesondere Ahnenpfeile, gehören zum Charakterschaden dieser Variante. Reine Wut-, Seelenschuss- und Tarnungssetups ohne Nutzen für reine Auto-Attacks werden hier nicht aktiviert.
- Skills-only deaktiviert sämtliche Spieler-Auto-Attacks. Notwendige Skillsetups bleiben aktiv. Explosionspfeil wird nicht aktiviert, weil seine Ladungen ausschließlich durch Auto-Attacks ausgelöst werden. Auto-Attack-abhängige Mana-Rückgewinnung und Zusatzpfeile lösen ohne Auto-Attacks nicht aus. Cooldowns und Mana-Budget gelten unverändert; keine optimierte Suche nach anderen Skill-Auswahlen.
- Naturgeist, Seelenbegleiter und Morrak werden wie bisher beschworen, aber separat ausgewiesen und nicht in den Vergleich der Charakterangriffe eingerechnet. Beschwörung und Erneuerung beanspruchen regulär Zeit und Ressourcen.
- Nicht angreifendes Einzelziel ohne Abwehr, Verfehlwürfe oder zufällige Krits. Aktuelle Reaktionspausen und Angriffsübergänge bleiben erhalten. Die zuvor identifizierte feste 0,5-Sekunden-Sperre nach Auto-Attacks ist unverändert; im Skills-only-Lauf gibt es keine auslösenden Auto-Attacks.

## Abenteurer

| Modus | Mana-Verbrauch | Mana am Ende | Auto-Attacks |
| --- | ---: | ---: | ---: |
| autoOnly | 0 | 5.651 | 138 |
| skillsOnly | 7.229 | 4.728 | 0 |

| Modus | Aktion | Anwendungen | Schaden | Mana |
| --- | --- | ---: | ---: | ---: |
| autoOnly | Auto-Attack | 138 | 93.385 | 0 |
| skillsOnly | Wirbelnde Klinge | 3 | 19.031 | 2.094 |
| skillsOnly | Rudelangriff | 3 | 11.627 | 2.258 |
| skillsOnly | Kreuzhieb | 4 | 9.986 | 1.076 |
| skillsOnly | Sprungschlag | 4 | 9.131 | 1.520 |
| skillsOnly | Blutender Schnitt | 3 | 3.236 | 279 |

## Butcher

| Modus | Mana-Verbrauch | Mana am Ende | Auto-Attacks |
| --- | ---: | ---: | ---: |
| autoOnly | 0 | 4.291 | 121 |
| skillsOnly | 10.354 | 161 | 0 |

| Modus | Aktion | Anwendungen | Schaden | Mana |
| --- | --- | ---: | ---: | ---: |
| autoOnly | Auto-Attack | 121 | 115.242 | 0 |
| skillsOnly | Mächtiger Hieb | 5 | 8.520 | 900 |
| skillsOnly | Rotier Schlag | 5 | 7.810 | 765 |
| skillsOnly | Erdbrecher | 1 | 7.307 | 2.396 |
| skillsOnly | Schädelspalter | 2 | 7.299 | 1.274 |
| skillsOnly | Schmetterschlag | 3 | 7.185 | 1.029 |
| skillsOnly | Aufgeladener Schlag | 4 | 6.968 | 868 |
| skillsOnly | Abräumer | 3 | 4.710 | 408 |
| skillsOnly | Zorn des Henkers | 1 | 4.127 | 706 |
| skillsOnly | Erdbeben | 2 | 3.796 | 462 |
| skillsOnly | Schockwelle der Regeneration | 2 | 3.654 | 1.266 |
| skillsOnly | Energieentladung | 1 | 3.300 | 0 |
| skillsOnly | Dämonische Schockwelle | 1 | 2.538 | 280 |

## Druide

| Modus | Mana-Verbrauch | Mana am Ende | Auto-Attacks |
| --- | ---: | ---: | ---: |
| autoOnly | 132 | 6.686 | 119 |
| skillsOnly | 11.685 | 3.425 | 0 |

| Modus | Aktion | Anwendungen | Schaden | Mana |
| --- | --- | ---: | ---: | ---: |
| autoOnly | Auto-Attack | 119 | 49.409 | 0 |
| autoOnly | Naturgeist | 1 | 16.896 | 132 |
| skillsOnly | Energieschlag | 92 | 66.510 | 2.392 |
| skillsOnly | Naturgeist | 1 | 16.896 | 132 |
| skillsOnly | Himmelsbrecher | 1 | 8.700 | 1.710 |
| skillsOnly | Vakuumimpuls | 2 | 8.145 | 954 |
| skillsOnly | Eisranken | 6 | 7.500 | 948 |
| skillsOnly | Ätherregen | 1 | 6.300 | 239 |
| skillsOnly | Windfesseln | 4 | 4.702 | 534 |
| skillsOnly | Windschlitzer | 3 | 4.514 | 629 |
| skillsOnly | Eislanze | 3 | 3.738 | 465 |
| skillsOnly | Manaexplosion | 1 | 2.095 | 3.647 |
| skillsOnly | Bannmagie | 1 | 772 | 36 |

## Gladiator

| Modus | Mana-Verbrauch | Mana am Ende | Auto-Attacks |
| --- | ---: | ---: | ---: |
| autoOnly | 578 | 5.257 | 109 |
| skillsOnly | 11.639 | 742 | 0 |

| Modus | Aktion | Anwendungen | Schaden | Mana |
| --- | --- | ---: | ---: | ---: |
| autoOnly | Auto-Attack | 109 | 85.365 | 0 |
| autoOnly | Energieausbruch | 1 | 0 | 578 |
| skillsOnly | Blutiger Durchbruch | 2 | 15.718 | 4.320 |
| skillsOnly | Sprungschlag | 4 | 9.721 | 1.616 |
| skillsOnly | Mächtiger Hieb | 5 | 7.801 | 900 |
| skillsOnly | Kriegerischer Ansturm | 3 | 6.678 | 1.047 |
| skillsOnly | Schmetterschlag | 3 | 6.591 | 1.029 |
| skillsOnly | Holzspalter | 4 | 6.437 | 784 |
| skillsOnly | Ausbruch der Wut | 1 | 4.746 | 0 |
| skillsOnly | Wutexplosion | 1 | 2.750 | 0 |
| skillsOnly | Wutklinge | 1 | 2.214 | 0 |
| skillsOnly | Sturm der Wut | 1 | 2.086 | 0 |
| skillsOnly | Energieausbruch | 1 | 0 | 578 |
| skillsOnly | Energie der Wut | 3 | 0 | 1.365 |

## Heiler

| Modus | Mana-Verbrauch | Mana am Ende | Auto-Attacks |
| --- | ---: | ---: | ---: |
| autoOnly | 1.160 | 7.123 | 93 |
| skillsOnly | 7.816 | 6.998 | 0 |

| Modus | Aktion | Anwendungen | Schaden | Mana |
| --- | --- | ---: | ---: | ---: |
| autoOnly | Auto-Attack | 93 | 68.169 | 0 |
| autoOnly | Permafrost | 0 | 0 | 1.160 |
| skillsOnly | Energieschlag | 93 | 77.934 | 2.418 |
| skillsOnly | Frostschauer | 4 | 17.409 | 2.168 |
| skillsOnly | Kristallisierte Wasserspähre | 6 | 6.812 | 582 |
| skillsOnly | Eislanze | 4 | 5.553 | 620 |
| skillsOnly | Schwerter des Lichtes | 2 | 3.524 | 514 |
| skillsOnly | Göttliche Nova | 1 | 2.148 | 354 |
| skillsOnly | Permafrost | 0 | 0 | 1.160 |

## Kräuterkundler

| Modus | Mana-Verbrauch | Mana am Ende | Auto-Attacks |
| --- | ---: | ---: | ---: |
| autoOnly | 0 | 6.903 | 101 |
| skillsOnly | 14.140 | 2.011 | 0 |

| Modus | Aktion | Anwendungen | Schaden | Mana |
| --- | --- | ---: | ---: | ---: |
| autoOnly | Auto-Attack | 101 | 75.406 | 0 |
| skillsOnly | Elektrisches Feld | 6 | 24.619 | 1.656 |
| skillsOnly | Tobender Sturm | 2 | 23.636 | 3.924 |
| skillsOnly | Gezielter Blitz | 7 | 14.091 | 2.149 |
| skillsOnly | Kugelblitz | 5 | 12.352 | 2.120 |
| skillsOnly | Geladener Nebel | 6 | 10.834 | 1.608 |
| skillsOnly | Ewiges Eis | 5 | 7.428 | 940 |
| skillsOnly | Wasserfesseln | 9 | 7.142 | 108 |
| skillsOnly | Eislanze | 5 | 6.873 | 775 |
| skillsOnly | Windschlitzer | 4 | 6.386 | 860 |

## Jäger

| Modus | Mana-Verbrauch | Mana am Ende | Auto-Attacks |
| --- | ---: | ---: | ---: |
| autoOnly | 321 | 4.581 | 94 |
| skillsOnly | 8.570 | 2.595 | 0 |

| Modus | Aktion | Anwendungen | Schaden | Mana |
| --- | --- | ---: | ---: | ---: |
| autoOnly | Auto-Attack | 94 | 92.120 | 0 |
| autoOnly | Seelenbegleiter | 1 | 17.614 | 132 |
| autoOnly | Pfeil der Vorfahren | 1 | 8.640 | 189 |
| skillsOnly | Salve | 2 | 26.832 | 828 |
| skillsOnly | Feuerpfeil | 14 | 19.712 | 1.568 |
| skillsOnly | Präzisionsschuss | 3 | 18.301 | 3.267 |
| skillsOnly | Seelenbegleiter | 1 | 17.614 | 132 |
| skillsOnly | Gebundener Schuss | 7 | 8.253 | 378 |
| skillsOnly | Verstärkter Pfeil | 3 | 7.815 | 1.218 |
| skillsOnly | Schockschuss | 3 | 4.836 | 474 |
| skillsOnly | Entzugspfeil | 3 | 4.377 | 405 |
| skillsOnly | Kettenschuss | 3 | 3.372 | 111 |
| skillsOnly | Pfeil der Vorfahren | 1 | 0 | 189 |

## Ritter

| Modus | Mana-Verbrauch | Mana am Ende | Auto-Attacks |
| --- | ---: | ---: | ---: |
| autoOnly | 416 | 5.983 | 109 |
| skillsOnly | 8.945 | 5.105 | 0 |

| Modus | Aktion | Anwendungen | Schaden | Mana |
| --- | --- | ---: | ---: | ---: |
| autoOnly | Auto-Attack | 109 | 58.755 | 0 |
| autoOnly | Schutz Aura | 1 | 0 | 416 |
| skillsOnly | Donnernde Lanze | 4 | 14.140 | 3.024 |
| skillsOnly | Schildstoß | 5 | 7.845 | 1.310 |
| skillsOnly | Brecher des Geistes | 7 | 7.175 | 833 |
| skillsOnly | Schildsturm | 4 | 6.884 | 1.168 |
| skillsOnly | Mächtiger Hieb | 5 | 6.360 | 900 |
| skillsOnly | Brecher der Deckung | 5 | 5.250 | 660 |
| skillsOnly | Erlösendes Feld | 2 | 3.612 | 634 |
| skillsOnly | Schutz Aura | 1 | 0 | 416 |

## Luminet

| Modus | Mana-Verbrauch | Mana am Ende | Auto-Attacks |
| --- | ---: | ---: | ---: |
| autoOnly | 0 | 6.017 | 93 |
| skillsOnly | 15.978 | 279 | 0 |

| Modus | Aktion | Anwendungen | Schaden | Mana |
| --- | --- | ---: | ---: | ---: |
| autoOnly | Auto-Attack | 93 | 70.810 | 0 |
| skillsOnly | Energieschlag | 108 | 106.135 | 5.508 |
| skillsOnly | Lichtblitz | 34 | 46.734 | 5.066 |
| skillsOnly | Luminus | 12 | 10.560 | 264 |
| skillsOnly | Heilige Vernichtung | 2 | 7.244 | 674 |
| skillsOnly | Ätherregen | 1 | 7.042 | 239 |
| skillsOnly | Urteil des Himmels | 3 | 6.930 | 861 |
| skillsOnly | Heiliges Kreuz | 3 | 5.722 | 852 |
| skillsOnly | Eislanze | 3 | 4.231 | 465 |
| skillsOnly | Schwerter des Lichtes | 2 | 3.581 | 514 |
| skillsOnly | Aurora Wellen | 1 | 2.261 | 375 |
| skillsOnly | Astralkörper | 1 | 2.211 | 363 |
| skillsOnly | Göttliche Nova | 1 | 2.208 | 354 |
| skillsOnly | Strafendes Licht | 1 | 2.016 | 316 |
| skillsOnly | Licht kristallenes Gefängnis | 1 | 1.302 | 127 |

## Ritualist

| Modus | Mana-Verbrauch | Mana am Ende | Auto-Attacks |
| --- | ---: | ---: | ---: |
| autoOnly | 0 | 5.437 | 92 |
| skillsOnly | 13.032 | 539 | 0 |

| Modus | Aktion | Anwendungen | Schaden | Mana |
| --- | --- | ---: | ---: | ---: |
| autoOnly | Auto-Attack | 92 | 90.270 | 0 |
| autoOnly | Morrak´s Meister | 1 | 49.003 | 0 |
| skillsOnly | Morrak´s Meister | 1 | 46.624 | 0 |
| skillsOnly | Feuerball | 27 | 43.124 | 4.023 |
| skillsOnly | Seelenqual | 29 | 35.318 | 1.943 |
| skillsOnly | Dunkler Impuls | 22 | 26.152 | 1.430 |
| skillsOnly | Feuer der Verdammten | 2 | 9.664 | 1.006 |
| skillsOnly | Meteoritenschauer | 1 | 7.017 | 2.608 |
| skillsOnly | Schrei der Unterwelt | 2 | 6.090 | 0 |
| skillsOnly | Lebenssauger | 3 | 4.321 | 1.062 |
| skillsOnly | Seelenplage | 2 | 3.501 | 0 |
| skillsOnly | Sturm des Feuers | 2 | 3.340 | 362 |
| skillsOnly | Seelenfessel | 2 | 2.574 | 190 |
| skillsOnly | Seelenernte | 1 | 2.089 | 408 |

## Schamane

| Modus | Mana-Verbrauch | Mana am Ende | Auto-Attacks |
| --- | ---: | ---: | ---: |
| autoOnly | 0 | 6.123 | 110 |
| skillsOnly | 14.914 | 257 | 0 |

| Modus | Aktion | Anwendungen | Schaden | Mana |
| --- | --- | ---: | ---: | ---: |
| autoOnly | Auto-Attack | 110 | 77.086 | 0 |
| skillsOnly | Infernaler Kreuzschlag | 4 | 17.385 | 1.789 |
| skillsOnly | Felsensalve | 1 | 17.315 | 3.287 |
| skillsOnly | Felszähne | 8 | 13.380 | 1.839 |
| skillsOnly | Sprungschlag | 4 | 9.366 | 1.568 |
| skillsOnly | Erdsäule | 4 | 8.874 | 1.439 |
| skillsOnly | Infernal Zyklon | 2 | 8.685 | 1.447 |
| skillsOnly | Beben | 5 | 7.728 | 1.019 |
| skillsOnly | Erdbeben | 3 | 6.396 | 672 |
| skillsOnly | Verbrennen | 6 | 5.438 | 1.397 |
| skillsOnly | Feuerlanze | 3 | 3.455 | 457 |

## Seelenjäger

| Modus | Mana-Verbrauch | Mana am Ende | Auto-Attacks |
| --- | ---: | ---: | ---: |
| autoOnly | 141 | 3.565 | 138 |
| skillsOnly | 8.098 | 611 | 0 |

| Modus | Aktion | Anwendungen | Schaden | Mana |
| --- | --- | ---: | ---: | ---: |
| autoOnly | Auto-Attack | 138 | 104.024 | 0 |
| autoOnly | Beweglichkeit | 1 | 0 | 141 |
| skillsOnly | Seelensammler | 50 | 43.740 | 2.400 |
| skillsOnly | Feuerpfeil | 13 | 15.363 | 1.456 |
| skillsOnly | Doppelschuss | 5 | 13.298 | 1.465 |
| skillsOnly | Kopfschuss | 3 | 10.567 | 1.611 |
| skillsOnly | Spektralketten | 2 | 3.859 | 878 |
| skillsOnly | Kettenschuss | 3 | 2.693 | 111 |
| skillsOnly | Hinterhältiger Pfeil | 2 | 1.636 | 36 |
| skillsOnly | Beweglichkeit | 1 | 0 | 141 |
| skillsOnly | Seelenschuss | 2 | 0 | 0 |

## Schurke

| Modus | Mana-Verbrauch | Mana am Ende | Auto-Attacks |
| --- | ---: | ---: | ---: |
| autoOnly | 137 | 3.828 | 144 |
| skillsOnly | 8.914 | 238 | 0 |

| Modus | Aktion | Anwendungen | Schaden | Mana |
| --- | --- | ---: | ---: | ---: |
| autoOnly | Auto-Attack | 144 | 81.796 | 0 |
| autoOnly | Beweglichkeit | 1 | 0 | 137 |
| skillsOnly | Tödlicher Tanz | 2 | 16.710 | 1.773 |
| skillsOnly | Wirbelnde Klinge | 2 | 11.654 | 1.396 |
| skillsOnly | Brecher des Lichts | 3 | 9.554 | 1.123 |
| skillsOnly | Klingentornado | 2 | 8.443 | 907 |
| skillsOnly | Dunkler Schlag | 9 | 7.627 | 559 |
| skillsOnly | Kunai Todesstoß | 8 | 4.951 | 0 |
| skillsOnly | Überschallklinge | 2 | 4.259 | 736 |
| skillsOnly | Sturmklinge | 2 | 3.811 | 630 |
| skillsOnly | Blutklinge | 2 | 2.661 | 647 |
| skillsOnly | Schattenfalle | 2 | 2.443 | 301 |
| skillsOnly | Schattenschlag | 1 | 1.483 | 212 |
| skillsOnly | Schattendolch | 1 | 1.390 | 194 |
| skillsOnly | Beweglichkeit | 1 | 0 | 137 |
| skillsOnly | Dunkler Schleier | 2 | 0 | 299 |

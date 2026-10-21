> Noch nicht erneut berechnet nach den exakten Mana-Korrekturen an Feuerlanze, Kopfschuss, Explosionspfeil, Blutklinge und Überschallklinge sowie der Verbrennen-Änderung auf maximal 156 Schaden je Tick, 10 Sekunden und 15 % Mana vom gesamten Grundschaden. Aktuelle Standardwerte stehen in all-class-timed-damage.md.

# Gegenprüfung: lohnen sich Skills gegenüber Auto-Attacks?

> Historische Gegenprüfung vor den bestätigten Castzeitänderungen an Schmetterschlag, Windschlitzer und Kugelblitz. Diese Zahlen sind noch nicht erneut berechnet.

Current skills and stats. Total damage includes temporary class summons equally in all modes. No regular pets, random procs or critical rolls. Compare auto-only plus class summons, original standard policy, and searched attack subsets/priorities with optional combo setups disabled. No target damage or share quotas. Finite policy search: best found, not proof of global optimum. Coarse step .1s; final results .01s.

600 Sekunden, dieselben ungebufften Bedingungen wie All Class Timed Damage. Temporäre Klassenbeschwörungen sind in allen Spalten enthalten; keine regulären Pets. Die Suche darf Angriffe und Kombo-Setups auslassen und hat keine Vorgabe für Schadensanteile.

| Klasse | Nur Auto-Attacks + Beschwörung | Standardlauf | Bester gefundener Lauf | Gewinn gegen nur Auto-Attacks | Auto-Anteil im besten Lauf |
| --- | ---: | ---: | ---: | ---: | ---: |
| Abenteurer | 334.097 | 506.601 | 506.601 | 51.6 % | 60.8 % |
| Butcher | 446.409 | 605.145 | 620.146 | 38.9 % | 59.4 % |
| Druide | 315.567 | 585.259 | 587.204 | 86.1 % | 25.3 % |
| Gladiator | 391.514 | 639.627 | 641.230 | 63.8 % | 58.2 % |
| Heiler | 338.646 | 532.386 | 536.059 | 58.3 % | 32.5 % |
| Kräuterkundler | 344.925 | 660.609 | 666.180 | 93.1 % | 35.4 % |
| Jäger | 439.430 | 709.921 | 713.742 | 62.4 % | 39.3 % |
| Ritter | 294.316 | 476.818 | 476.818 | 62.0 % | 53.1 % |
| Luminet | 352.136 | 720.139 | 735.165 | 108.8 % | 27.5 % |
| Ritualist | 627.759 | 870.394 | 1.022.891 | 62.9 % | 26.4 % |
| Schamane | 311.946 | 587.899 | 601.607 | 92.9 % | 48.6 % |
| Seelenjäger | 401.016 | 609.984 | 639.102 | 59.4 % | 51.7 % |
| Schurke | 353.072 | 533.248 | 593.116 | 68.0 % | 51.9 % |

## Abenteurer

Ausgelassene Angriffsskills: keine. Ausgelassene Kombo-Setups: keine. Suchläufe: 47.

| Aktion | Anwendungen | Schaden |
| --- | ---: | ---: |
| Auto-Attack | 562 | 307.807 |
| Wirbelnde Klinge | 11 | 62.684 |
| Rudelangriff | 12 | 44.960 |
| Kreuzhieb | 18 | 40.291 |
| Sprungschlag | 17 | 36.613 |
| Blutender Schnitt | 15 | 14.246 |

## Butcher

Ausgelassene Angriffsskills: Schockwelle der Regeneration. Ausgelassene Kombo-Setups: keine. Suchläufe: 73.

| Aktion | Anwendungen | Schaden |
| --- | ---: | ---: |
| Auto-Attack | 455 | 368.632 |
| Aufgeladener Schlag | 24 | 39.964 |
| Mächtiger Hieb | 22 | 33.950 |
| Schädelspalter | 10 | 33.662 |
| Schmetterschlag | 15 | 32.673 |
| Rotier Schlag | 22 | 30.892 |
| Erdbeben | 11 | 20.033 |
| Abräumer | 13 | 17.591 |
| Zorn des Henkers | 4 | 14.521 |
| Energieentladung | 4 | 11.213 |
| Dämonische Schockwelle | 5 | 10.206 |
| Erdbrecher | 1 | 6.810 |

## Druide

Ausgelassene Angriffsskills: keine. Ausgelassene Kombo-Setups: keine. Suchläufe: 67.

| Aktion | Anwendungen | Schaden |
| --- | ---: | ---: |
| Energieschlag | 231 | 158.265 |
| Auto-Attack | 374 | 148.553 |
| Naturgeist | 2 | 77.762 |
| Himmelsbrecher | 5 | 42.996 |
| Eisranken | 27 | 32.728 |
| Ätherregen | 5 | 30.743 |
| Vakuumimpuls | 7 | 28.107 |
| Windschlitzer | 15 | 21.988 |
| Windfesseln | 19 | 21.600 |
| Eislanze | 15 | 18.122 |
| Manaexplosion | 2 | 4.872 |
| Bannmagie | 2 | 1.468 |

## Gladiator

Ausgelassene Angriffsskills: Schmetterschlag. Ausgelassene Kombo-Setups: keine. Suchläufe: 69.

| Aktion | Anwendungen | Schaden |
| --- | ---: | ---: |
| Auto-Attack | 480 | 373.266 |
| Blutiger Durchbruch | 8 | 61.856 |
| Sprungschlag | 17 | 40.502 |
| Mächtiger Hieb | 22 | 33.284 |
| Holzspalter | 17 | 26.602 |
| Kriegerischer Ansturm | 11 | 23.960 |
| Ausbruch der Wut | 5 | 23.496 |
| Wutklinge | 10 | 21.665 |
| Sturm der Wut | 10 | 20.385 |
| Wutexplosion | 6 | 16.215 |
| Energie der Wut | 11 | 0 |

## Heiler

Ausgelassene Angriffsskills: keine. Ausgelassene Kombo-Setups: keine. Suchläufe: 49.

| Aktion | Anwendungen | Schaden |
| --- | ---: | ---: |
| Energieschlag | 252 | 215.114 |
| Auto-Attack | 233 | 174.412 |
| Frostschauer | 14 | 72.810 |
| Kristallisierte Wasserspähre | 23 | 26.464 |
| Eislanze | 15 | 20.984 |
| Schwerter des Lichtes | 10 | 17.620 |
| Göttliche Nova | 4 | 8.655 |

## Kräuterkundler

Ausgelassene Angriffsskills: Windschlitzer, Kugelblitz. Ausgelassene Kombo-Setups: keine. Suchläufe: 64.

| Aktion | Anwendungen | Schaden |
| --- | ---: | ---: |
| Auto-Attack | 316 | 235.922 |
| Elektrisches Feld | 26 | 116.817 |
| Tobender Sturm | 8 | 94.493 |
| Gezielter Blitz | 33 | 66.523 |
| Geladener Nebel | 27 | 48.751 |
| Ewiges Eis | 25 | 37.140 |
| Wasserfesseln | 44 | 34.918 |
| Eislanze | 23 | 31.616 |

## Jäger

Ausgelassene Angriffsskills: keine. Ausgelassene Kombo-Setups: keine. Suchläufe: 53.

| Aktion | Anwendungen | Schaden |
| --- | ---: | ---: |
| Auto-Attack | 367 | 280.461 |
| Salve | 10 | 108.264 |
| Feuerpfeil | 66 | 78.685 |
| Seelenbegleiter | 2 | 75.671 |
| Präzisionsschuss | 11 | 62.829 |
| Gebundener Schuss | 35 | 33.712 |
| Verstärkter Pfeil | 13 | 31.060 |
| Schockschuss | 13 | 18.151 |
| Entzugspfeil | 12 | 14.918 |
| Kettenschuss | 11 | 9.990 |

## Ritter

Ausgelassene Angriffsskills: keine. Ausgelassene Kombo-Setups: keine. Suchläufe: 51.

| Aktion | Anwendungen | Schaden |
| --- | ---: | ---: |
| Auto-Attack | 470 | 253.349 |
| Donnernde Lanze | 17 | 60.096 |
| Brecher des Geistes | 33 | 33.826 |
| Schildstoß | 21 | 32.950 |
| Schildsturm | 17 | 29.258 |
| Mächtiger Hieb | 22 | 27.985 |
| Brecher der Deckung | 22 | 23.101 |
| Erlösendes Feld | 9 | 16.254 |

## Luminet

Ausgelassene Angriffsskills: keine. Ausgelassene Kombo-Setups: keine. Suchläufe: 63.

| Aktion | Anwendungen | Schaden |
| --- | ---: | ---: |
| Auto-Attack | 260 | 202.267 |
| Energieschlag | 141 | 182.854 |
| Luminus | 116 | 119.248 |
| Heilige Vernichtung | 13 | 47.687 |
| Ätherregen | 5 | 34.677 |
| Urteil des Himmels | 14 | 32.519 |
| Heiliges Kreuz | 13 | 25.200 |
| Eislanze | 15 | 21.011 |
| Schwerter des Lichtes | 10 | 17.966 |
| Strafendes Licht | 8 | 16.325 |
| Astralkörper | 6 | 13.399 |
| Göttliche Nova | 4 | 8.772 |
| Aurora Wellen | 3 | 6.886 |
| Licht kristallenes Gefängnis | 5 | 6.356 |

## Ritualist

Ausgelassene Angriffsskills: Lebenssauger, Seelenplage, Meteoritenschauer. Ausgelassene Kombo-Setups: keine. Suchläufe: 70.

| Aktion | Anwendungen | Schaden |
| --- | ---: | ---: |
| Auto-Attack | 298 | 269.969 |
| Morrak´s Meister | 2 | 206.755 |
| Feuerball | 138 | 198.601 |
| Dunkler Impuls | 113 | 131.810 |
| Seelenqual | 95 | 114.296 |
| Feuer der Verdammten | 12 | 55.226 |
| Schrei der Unterwelt | 8 | 23.281 |
| Sturm des Feuers | 6 | 9.931 |
| Seelenfessel | 7 | 8.910 |
| Seelenernte | 2 | 4.113 |

## Schamane

Ausgelassene Angriffsskills: Verbrennen, Feuerlanze, Beben, Felszähne, Erdsäule, Sprungschlag. Ausgelassene Kombo-Setups: keine. Suchläufe: 57.

| Aktion | Anwendungen | Schaden |
| --- | ---: | ---: |
| Auto-Attack | 512 | 292.521 |
| Felsensalve | 11 | 183.236 |
| Infernaler Kreuzschlag | 18 | 73.502 |
| Infernal Zyklon | 6 | 30.339 |
| Erdbeben | 11 | 22.008 |

## Seelenjäger

Ausgelassene Angriffsskills: Kopfschuss, Explosionspfeil. Ausgelassene Kombo-Setups: keine. Suchläufe: 63.

| Aktion | Anwendungen | Schaden |
| --- | ---: | ---: |
| Auto-Attack | 511 | 330.515 |
| Seelensammler | 200 | 153.560 |
| Feuerpfeil | 64 | 68.787 |
| Doppelschuss | 24 | 58.694 |
| Spektralketten | 8 | 14.582 |
| Kettenschuss | 11 | 8.699 |
| Hinterhältiger Pfeil | 6 | 4.265 |
| Seelenschuss | 8 | 0 |

## Schurke

Ausgelassene Angriffsskills: Schattenfalle, Blutklinge, Schattendolch, Schattenschlag, Überschallklinge. Ausgelassene Kombo-Setups: Dunkler Schleier. Suchläufe: 75.

| Aktion | Anwendungen | Schaden |
| --- | ---: | ---: |
| Auto-Attack | 573 | 307.930 |
| Tödlicher Tanz | 9 | 72.605 |
| Wirbelnde Klinge | 10 | 56.470 |
| Brecher des Lichts | 14 | 43.292 |
| Klingentornado | 9 | 36.698 |
| Dunkler Schlag | 43 | 35.105 |
| Kunai Todesstoß | 38 | 22.321 |
| Sturmklinge | 10 | 18.694 |

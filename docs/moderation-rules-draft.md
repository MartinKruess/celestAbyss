# Moderationsregeln zur Abstimmung

Die deutschen und englischen Sammlungen werden vor einem Datenbankimport bereinigt. Ausdrückliche Nutzerentscheidungen haben Vorrang vor Einstufungen in eingefügten Beispieltabelle. Die folgenden Vorschläge sind keine bereits aktiven Filterregeln. Es wurden keine Moderationsregeln importiert und kein Kontextmodell angeschlossen.

## Verhalten der vier Stufen

| Stufe | Verhalten |
| --- | --- |
| 1 Frei | Sofort zustellen; kein automatischer Treffer oder interner Verstoß allein wegen des Begriffs. Spielermeldungen bleiben möglich. |
| 2 Kontext | Bei einem tatsächlich aktivierten Kontexttreffer zurückhalten und vor Zustellung prüfen. Freigeben, zensieren oder blockieren je nach Ergebnis. Prüfverfahren und Timeout-Verhalten fehlen noch. |
| 3 Zensieren | Betroffene Originaltextstellen durch `***` ersetzen und zustellen; internen Treffer erfassen, keine automatische Moderatorenmeldung nur wegen dieses Treffers. |
| 4 Blockieren | Nicht zustellen; Original und begrenzten Kontext geschützt für Moderatoren sichern. Absender erhält einen Hinweis. Kein automatischer Ban aufgrund eines bloßen Treffers. |

Eine kontextabhängige Regel kann bei bestätigtem Angriff eine Stufe-3- oder Stufe-4-Aktion auslösen. Stufe, Prüfbedarf, Aktion und Meldeverhalten deshalb getrennt speichern.

## Ausdrücklich freigegebene Begriffe

Diese Begriffe kommen nicht als alleinige Auslöser in den automatischen Filter. Ein anderer, ausdrücklich definierter schwerer Ausdruck kann dennoch eine Regel treffen.

| Gruppe | Begriffe |
| --- | --- |
| Deutsche Flüche | Scheiße, Scheiß, Arsch, Kacke |
| Tolerierter Spott | Dummkopf, Idiot, Trottel, Depp, Noob, Kack-Noob, Loser, Lappen, Lauch, Clown, Müll |
| Spielbegriffe und mögliche Namen | Affe, Spast, Spasti, Mongo |
| Gaming-Ausdruck | Touch grass |

Vorläufig als freigegeben interpretiert: **Fick dich, Wichser, Drecksau, Kackbratze**. Die frühere Formulierung „drin lassen“ wurde im Gespräch als durchlassen interpretiert, aber nicht ausdrücklich abschließend bestätigt. Vor Aktivierung gegenteiliger Regeln erneut entscheiden. Kritik wie „Diese Quest ist behindert“ soll keinen automatischen Verstoß erzeugen; persönlich adressierte Verwendung bleibt separat kontextabhängig.

## Weitere Freigaben vorgeschlagen

Diese Begriffe würde ich aus einer automatisch verzögernden Kontextliste streichen. Die Freigabe ist ein Vorschlag, keine stillschweigend bestätigte Entscheidung.

| Gruppe | Begriffe | Begründung |
| --- | --- | --- |
| Üblicher Gaming-Slang | EZ, Git gud, Skill issue, L2P, WTF, AF, BS, FFS, LMAO, Cope, Seethe, Mald, Cringe, Toxic, Griefer, Troll, Dogwater, Brainrot, Rizz, Sigma | Für eure tolerante Hausregel kein eigenständiger schwerer Verstoß. |
| Spielwelt, Namen und Bewertungen | NPC, Bot, Trash, Garbage, Dog, Monkey, Ape, Pig, Dick, Karen, Wench, Mörder, Murderer, Cultist, Gotteskrieger, Holy warrior, Ketzer, Heretic, Kreuzzügler, Crusader | NPCs, Gegner, Klassen, Titel, Namen oder Itembewertungen dürfen nicht ständig eine Prüfung auslösen. |
| Allgemeiner Spott | Ass, Jerk, Moron, Dumbass, Simp, Incel, TERF, Cuck, Cuckold, Soyboy, Beta male, Snowflake, MAGAt, SJW, Commie, Tankie, Bootlicker, Sheep, Sheeple, Smoothbrain | An tolerierten deutschen Spott angleichen; schwere zusammengesetzte Angriffe separat prüfen. |
| Normale Beschreibungen | Black, White, Gay, Schwul, Queer, Türke, Ausländer, Autist | Identität, Farbe oder Nationalität sind für sich genommen kein Verstoß. Keine freie Freigabe diskriminierender zusammengesetzter Aussagen. |
| Politische Grundbegriffe | Liberal, Conservative, Democrat, Republican, Leftist, Right-winger, MAGA, Woke, Radical left, Alt-right, Kommunist, Anarchist, Bolschewist, Antifa, Grüner | Politische Erwähnung allein braucht keine Prüfung. |
| Politischer Spott | Radikaler, Fundamentalist, Reichsbürger, Querdenker, Schwurbler, Schlafschaf, Aluhutträger, Gutmensch, Linksgrünversifft, Klimakleber, Systemling, Rote Socke, Grüner Spinner | In der Sammlung bereits als frei vorgeschlagen. |
| Religiöse und politische Namen | Taliban, ISIS, IS, Daesh, Fanatiker, Fanatic, Zionist | In der letzten Sammlung frei vorgeschlagen; ältere abweichende Taliban-Einstufung damit ersetzt. |
| Kurze Kürzel und Zahlen | HS, MF, Mfer, SOB, HH, 18, 88, 1488, 14/88 | Kein alleiniger Prüftrigger. Zahlen können Level, Schaden oder Preise sein; Kürzel sind mehrdeutig. Ausdrücklich erkannte problematische Kombinationen separat prüfen. |

## Kleine direkte Sperrliste vorgeschlagen

Die folgenden eindeutigen Ausdrücke bilden den Kern einer direkten Stufe-4-Liste. Varianten werden pro Regel festgelegt. Selbst ein direkter Filtertreffer ist noch keine bestätigte Grundlage für eine Sanktion.

| Ausdrücke | Grund | Status |
| --- | --- | --- |
| Sieg Heil; Heil Hitler; Heil dem Führer | Nationalsozialistische Parole oder Verherrlichung | Bisheriger Stufe-4-Kern |
| White power | Rassistische Parole | In Ergänzungen direkt blockieren und melden vorgeschlagen |
| Juden vergasen; Juden ins Gas; Gas the Jews | Antisemitischer Gewaltaufruf | Bisheriger Stufe-4-Kern |
| Kill all Jews; Kill all Muslims; Kill all Blacks | Gewaltaufruf gegen benannte reale Gruppen | Englische Stufe-4-Ergänzung |
| Drecksjude; Drecks Jude; Drecksjuden; Drecks Juden | Antisemitische Herabwürdigung | Schreibvarianten ausdrücklich gewünscht |
| Hitler; Jude; Juden | Bewusst strenge Hausregel, auch bei neutraler Verwendung blockiert | Ausdrücklich entschieden; jüdisch allein bleibt erlaubt |

Die Einzelwortregel Jude trifft nicht automatisch Komposita wie Drecksjude; diese brauchen eigene Regeln. Ebenso ist jüdisch in einem Gewaltaufruf nicht durch eine neutrale Wortfreigabe geschützt: dafür ist eine passende zusammengesetzte Regel nötig.

## Direkte Zensur vorgeschlagen

| Deutsch | Englisch oder weitere Varianten | Status |
| --- | --- | --- |
| Hurensohn, Huso | Son of a bitch | Deutscher Kern vorläufig beibehalten; Englisch noch abstimmen. Groß-/Kleinschreibung ist keine eigene Regel. HS nicht pauschal übernehmen. |
| Missgeburt, Mistgeburt, Nuttenkind, Opferkind, Dreckskind | — | Missgeburt/Mistgeburt als Kern; übrige ursprüngliche Vorschläge offen. |
| Fotze | Cunt | Stufe-3-Vorschlag; Varianten wie F0tz3 pro Begriff berücksichtigen. |
| Schlampe, Dreckshure | Slut, Whore, Dirty whore | Stufe-3-Vorschlag; SchIampe mit großem I pro Begriff prüfen. |
| Schwuchtel | Faggot | In Sammlungen direkte Zensur vorgeschlagen. Kürzere beziehungsweise regional mehrdeutige Varianten separat behandeln. |
| Systemhure, Christenschwein, Muslimschwein | — | Direkte Zensur in Ergänzungen vorgeschlagen. |
| Schlitzauge, Japse, Kümmeltürke | Slant-eye | Direkte Zensur vorgeschlagen; Japse und Jap sind unterschiedliche Regeln. |

## Kontextkandidaten statt breiter Wortlisten

Diese Sammlung ist noch zu groß für eine dauerhaft vorgeschaltete Prüfung. Vor Umsetzung weiter reduzieren. Konkrete Spielsätze sollen frei bleiben; möglichst nur aussagekräftige Kombinationen statt jedes Einzelwort als Trigger verwenden.

| Bereich | Kandidaten | Wenn der Kontext einen Angriff bestätigt |
| --- | --- | --- |
| Mehrsprachige Überschneidung | Jap; Bitch; Asshole/Arschloch; Prick; Pussy; Bastard; Twat | Aktion je Regel festlegen. Deutsche Zustimmung und harmlose Namen nicht blockieren. |
| Direkte Schimpfphrasen | Fick deine Mutter; Fick deine Familie; Fuck your mother; Motherfucker; Fuck you; Fuck off; Go back to the kitchen; Fascist pig | Zensurvorschläge beziehungsweise noch offene tolerierte Ausdrücke; keine automatische Übernahme. |
| Weitere Beschimpfungen | Drecksschwein; Vollidiot; Köter; Ratte/Rat; Abschaum/Scumbag; Dirtbag; Shithead; Dumbfuck; Fuckface; Asswipe; Piece of shit; Worthless piece of shit; Incel freak; STFU; GTFO; Brain dead | Vor der Aktivierung entscheiden, welche nach euren Regeln überhaupt relevant sind. Viele könnten ebenfalls frei werden. |
| Ethnische Herabsetzung | Kanake; Zigeuner/Gypsy; Neger/Negro; Kameltreiber/Camel jockey; Bimbo; Paki; Wetback; Chink; Gook; Spic | Zensur oder Stufe 4; mehrere Einstufungen widersprechen sich noch. |
| Identitätsbezogene Angriffe | Behindert/Behinderter; Transe/Tranny; Fag; Dyke; Kampflesbe; Homo; Sissy; Retard/Retarded; Krebs/Cancer; Aids | Kontextpflichtig, wenn überhaupt aktiviert; neutrale beziehungsweise nicht persönlich adressierte Verwendung beachten. |
| Reale politische Vorwürfe | Nazi; Neonazi; Faschist/Fascist; Rechtsextremist/Far-right extremist; Linksextremist; Extremist; Terrorist/Domestic terrorist; Islamist; Ökofaschist; Sozialschmarotzer; Volksverräter; Vaterlandsverräter; Zecke/linke Zecke; Stalinist | Keine Sanktion aufgrund einer sachlichen Erwähnung; mögliche Kandidaten für weitere Freigaben. |
| Englische politische Vorwürfe | Libtard; Conservatard; Woketard; Traitor; Race traitor | Kontextbedarf und tatsächliche Relevanz noch entscheiden. |
| Schwere persönliche Anschuldigungen | Vergewaltiger; Kinderschänder; Pedo/Pädo; Groomer; Psychopath; Geisteskranker | Prüfen, ob persönlicher Angriff oder neutrale Erwähnung. |
| Religiöse Zuschreibungen | Islamist extremist; Jihadist/Dschihadist; Salafist/Salafistischer Extremist; Sektenmitglied/Cult member; Ungläubiger/Infidel/Kafir; Religionsfanatiker; Christenhasser/Muslimhasser/Judenhasser; Antisemit; Islamophob/Islamophobe | Neutrale Erwähnungen und Spielweltbegriffe müssen durchgehen. |
| Extremistische Zusammenhänge | ZOG; White supremacy; Blood and Honour; Heil dem deutschen Reich; Auschwitz zurückbringen; Untermensch/Subhuman; Rassenschande | Je nach vorheriger Einstufung direkter Block oder Kontext; Konflikte unten entscheiden. |
| Entmenschlichende Kombinationen | Parasiten; Schädlinge | Tiere und Gegner bleiben frei; reale Menschen-/Gruppenbezüge gesondert prüfen. |

## Bedrohungen und Gewaltaufrufe

Persönliche Bedrohungen werden vor Zustellung geprüft und sofort in die Moderationswarteschlange gegeben. Kontext wird benötigt, um Kampfansagen im PvP, Zitate und reale Drohungen zu unterscheiden. Der automatische Eingang ist keine bestätigte Sanktion.

| Kandidat | Zu beachten |
| --- | --- |
| Ich bring dich um; I will kill you | PvP-Aussage gegenüber Spielfigur gegenüber realer Drohung unterscheiden. |
| Ich weiß, wo du wohnst; I know where you live | Einschüchterung möglich, nicht jede Verwendung ist eine konkrete Drohung. |
| Ich werde dich vergewaltigen; I will rape you; You deserve to be raped | Schwerer sexualisierter Angriff; Entscheidung über direkten Block gegenüber Kontext aus der Stufe-4-Vorgabe noch vereinheitlichen. |
| Du gehörst ins KZ; Send them to the gas chambers | Menschenverachtender Angriff beziehungsweise schwerer Gewaltbezug; in bisherigen Sammlungen Stufe 4. |
| Alle … gehören erschossen; Vergast die …; Death to all … | Keine fertigen Literalregeln: Zielgruppe und Satz müssen feststehen. |
| Ungläubige töten; Kill the infidels | Reale Gruppen gegenüber Spielgegnern unterscheiden. |
| KYS/KY5; Kill yourself; Rope yourself; End yourself; Unalive yourself | Bei gezieltem Angriff blockieren und melden; Abkürzung allein nicht automatisch als bestätigten Angriff werten. |
| Get cancer; Go die | Auf Wunsch schwere persönliche Angriffe prüfen; genaue Aktion abstimmen. |

**Tötet alle … bleibt als pauschale Sperre gestrichen.** Dasselbe Prinzip gilt für englische Platzhalter mit Spielgegnern als möglichem Ziel. Keine automatische politische oder religiöse Bewertung aus frei erfundenen Spielrollen ableiten.

## Offene Konflikte vor Import

| Konflikt | Bisheriger Stand |
| --- | --- |
| Fick dich gegenüber Fuck you/Fuck off | Deutsch wurde vorläufig als toleriert verstanden; englische Tabelle schlägt Zensur vor. Gleichbehandlung entscheiden. |
| Wichser, Drecksau, Kackbratze | Vorläufige Freigabeinterpretation noch bestätigen. |
| Bastard | Deutsche Tabelle Stufe 3, englische Stufe 2. Noch keine endgültige Nutzerentscheidung. |
| Nigger, Kanake, Drecksausländer/Dirty foreigner, Untermensch/Subhuman | Erste Tabelle Stufe 4, spätere teils Zensur oder Kontext. Nigger/Sand nigger, Kike, Towelhead und Rassenschande nicht versehentlich auslassen; Aktion vor Import entscheiden. |
| Chink, Gook, Spic | Ergänzung zensieren bei Angriff, englische Stufe-4-Tabelle direkt blockieren. |
| Judensau | Blockieren und melden bei Angriff vorgeschlagen; Kontextpflicht versus direkte Sperre festlegen. |
| Fag, Tranny, Dyke, Retard/Retarded | Direkte Zensur und Kontextvarianten in verschiedenen Listen. Mehrdeutige Kurzformen separat behandeln. |
| Gefilterte persönliche Drohungen | Sofortiger Moderationsfall plus vorgelagerte Kontextprüfung ist gewünscht; welche ausdrücklich schweren Phrasen schon direkt blockieren, noch bestätigen. |

Hitler/Jude bleiben unabhängig von den neuen Tabellen bei der ausdrücklich gewählten strengen Regel. Taliban bleibt nach der neuesten Tabelle frei vorgeschlagen. Für weitere von Tabellen empfohlene Freigaben liegt noch keine pauschale Zustimmung vor.

## Umsetzung nach Abstimmung

In moderationRules pro Regel Ausdruck, Sprache, Stufe, Aktion, Kontextpflicht, automatische Meldung, Grund, Varianten, Aktivstatus und Version speichern. Freie Begriffe müssen nicht als ausführbare Filter in diese Collection; sie bleiben als Gegenbeispiele in Tests und in dieser Dokumentation.

Normalisierung nur gezielt je Regel: Groß-/Kleinschreibung, bekannte Zahlersetzungen, verwirrbare Zeichen und Trennzeichen. Keine universelle Silbensperre. Originaltext behalten; Zensur auf die originalen Textstellen abbilden. Spracheinstellung ist nur ein Hinweis, Standort kein Sprachbeweis. Keine sichere Kontexterkennung behaupten, bevor das Prüfverfahren implementiert und getestet ist.

Pflichttests: „Wir brauchen einen Heiler“, „Jup, lass uns losgehen“, „Jap, hab mich auch geärgert“, „Bin beim Affenboss“, „Diese Quest ist behindert“, „Level 88“, „18 Schaden“, „NPC“, „Touch grass“ und „Kack-Noob“ müssen ohne unberechtigte Maßnahmen funktionieren. Schwere Regeln bekommen getrennte Positivtests und Variantenfälle.

Globalreports sichern bis zu 50 Nachrichten bis einschließlich des gemeldeten Beitrags. Private beziehungsweise Gruppenberichte sollen später den Beitrag und bis zu 20 vorherige Nachrichten des berechtigten Gesprächs sichern. Normale Nachrichten 24 Stunden aufbewahren; Fallfristen und rechtliche Sicherungen gesondert bestätigen. Kein Import und keine Sanktionen vor Abschluss dieser Abstimmung.

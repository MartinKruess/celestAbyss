import { createHash } from 'node:crypto';

const rules = [];
function add(terms, level, action, reason, status = 'needsReview', notes = '') {
  for (const term of terms.split('|')) {
    rules.push({ key: `de_${createHash('sha256').update(term.toLowerCase()).digest('hex').slice(0, 24)}`,
      language: 'de', term, variants: [], level, action, contextRequired: action === 'review',
      matchType: term.includes(' ') ? 'phrase' : 'word', caseInsensitive: true,
      reportAutomatically: action === 'block', reason, status, notes,
      active: false, version: 1, source: 'conversation-draft-2026-10-12' });
  }
}
add('Scheiße|Scheiß|Arsch|Kacke|Dummkopf|Idiot|Trottel|Depp|Noob|Kack-Noob|Loser|Lappen|Lauch|Clown|Affe|Müll|Spast|Spasti|Mongo',
  1, 'allow', 'Ausdrücklich tolerierter Sprachgebrauch; kein alleiniger Filtertreffer.', 'agreed');
add('Fick dich|Wichser|Drecksau|Kackbratze', 1, 'allow', 'Vorläufig als toleriert verstanden.', 'needsReview', 'Interpretation von „drin lassen“ noch bestätigen.');
add('Sieg Heil|Heil Hitler|Heil dem Führer|Juden vergasen|Juden ins Gas|Drecksjude|Hitler|Jude|Juden',
  4, 'block', 'Schwere Phrase oder ausdrücklich gewählte strenge Hausregel.', 'agreed');
add('Du gehörst ins KZ|Ich werde dich vergewaltigen|Judensau', 4, 'block', 'Schwerer menschenverachtender oder sexualisierter Angriff.', 'needsReview', 'Direkter Block gegenüber Kontextpflicht noch bestätigen.');
add('Drecksausländer|Untermensch|Rassenschande|Kanake', 4, 'block', 'Schwere diskriminierende oder entmenschlichende Verwendung möglich.', 'needsReview', 'Widersprüchliche Vorschläge für Block, Zensur und Kontext; Stufe ist vorläufig.');
add('Hurensohn|Huso|Missgeburt|Mistgeburt|Nuttenkind|Fotze|Schlampe|Dreckshure|Schwuchtel|Schlitzauge|Japse|Kümmeltürke|Christenschwein|Muslimschwein|Systemhure|Opferkind|Dreckskind',
  3, 'mask', 'Vorschlag zur Zensur schwerer Beschimpfungen.', 'needsReview');
add('Jap|Behindert|Behinderter|Transe|Trans|Zwitter|Lesbe|Lesbisch|Schwul|Pedo|Pädo|Kampflesbe|Neger|Zigeuner|Kameltreiber|Bimbo',
  2, 'review', 'Mehrdeutige Verwendung; neutrale Erwähnung oder gezielter Angriff unterscheiden.', 'needsReview', 'Neutrale Identitätsbezeichnungen nicht pauschal verzögern; genaue Trigger noch abstimmen.');
add('Arschloch|Vollidiot|Drecksschwein|Köter|Ratte|Abschaum|Bastard|Krebs|Aids|Autist|Türke|Ausländer',
  2, 'review', 'Kontextkandidat aus Sammlung; möglicherweise vollständig freigeben.', 'needsReview', 'Keine aktive Regel; Spielbezüge und neutrale Beschreibungen müssen durchgehen.');
add('Fick deine Mutter|Fick deine Familie', 3, 'review', 'Schwere persönliche Schimpfphrase möglich.', 'needsReview', 'Direkte Zensur gegenüber Kontextprüfung noch entscheiden.');
add('Nazi|Neonazi|Faschist|Rechtsextremist|Linksextremist|Terrorist|Islamist|Stalinist|Ökofaschist|Sozialschmarotzer|Volksverräter|Vaterlandsverräter|Zecke|Linke Zecke|Vergewaltiger|Kinderschänder|Psychopath|Geisteskranker|Dschihadist|Salafist|Sektenmitglied|Religionsfanatiker|Christenhasser|Muslimhasser|Judenhasser|Antisemit|Islamophob',
  2, 'review', 'Sachliche Erwähnung gegenüber gezielter schwerer Anschuldigung unterscheiden.', 'needsReview', 'Liste vor Aktivierung weiter reduzieren.');
add('Heil dem deutschen Reich|Auschwitz zurückbringen|ZOG', 2, 'review', 'Extremistischer Kontext möglich.', 'needsReview');
add('Parasiten|Schädlinge', 2, 'review', 'Reale Menschengruppen gegenüber Spielgegnern unterscheiden.', 'needsReview');
add('Ich bring dich um|Ich weiß, wo du wohnst', 4, 'review', 'Mögliche reale persönliche Bedrohung.', 'agreed', 'Vor Zustellung Kontext prüfen und sofort einen Moderationsfall anlegen.');
add('Radikaler|Fundamentalist|Reichsbürger|Querdenker|Schwurbler|Schlafschaf|Aluhutträger|Gutmensch|Linksgrünversifft|Klimakleber|Systemling|Rote Socke|Kommunist|Anarchist|Bolschewist|Antifa|Grüner|Grüner Spinner|Taliban|Fanatiker|Gotteskrieger|Ungläubiger|Ketzer|Kreuzzügler|Mörder|Führer|18|88|1488|14/88|HH|HS',
  1, 'allow', 'Freigabe vorgeschlagen; kein alleiniger Trigger.', 'needsReview', 'Problematische zusammengesetzte Aussagen separat behandeln.');
for (const rule of rules) {
  if (['Hitler', 'Jude', 'Juden'].includes(rule.term)) rule.reason = 'Bewusst strenge Hausregel; neutrale Verwendung wird ebenfalls blockiert.';
  if (rule.term === 'Drecksjude') rule.variants = ['Drecks Jude', 'Drecksjuden', 'Drecks Juden'];
  if (rule.term === 'Drecksausländer') rule.variants = ['Drecks Ausländer'];
  if (rule.term === 'Fotze') rule.variants = ['F0tz3'];
  if (rule.term === 'Schlampe') rule.variants = ['SchIampe'];
  if (rule.action === 'review' && rule.level === 4) rule.reportAutomatically = true;
  if (rule.term === 'Bastard') {
    rule.level = 3; rule.action = 'mask'; rule.contextRequired = false;
    rule.status = 'agreed'; rule.reason = 'Vom Nutzer ausdrücklich zur Zensur festgelegt.';
    rule.notes = 'Gilt ebenso für die englische Schreibweise.';
  }
}
export const moderationRules = rules;

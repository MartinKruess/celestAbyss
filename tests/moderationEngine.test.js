import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluate, localContext } from '../moderation/engine.js';
import { moderationRules } from '../scripts/moderationData.js';

const rules = moderationRules.filter(rule => rule.status === 'agreed').map(rule => ({ ...rule, active: true, scope: 'global' }));
rules.push(...[
  ['cunt', 3, 'mask'], ['bitch', 2, 'review'], ['Jap', 2, 'review'],
].map(([term, level, action]) => ({ key: `fixture_${term}`, version: 1, term, level, action,
  contextRequired: action === 'review', active: true, status: 'agreed', scope: 'global', reason: 'Test rule' })));
const cases = [];
const variants = term => [term, term.toUpperCase(), term.toLowerCase(),
  term.replace(/s/gi, '$').replace(/o/gi, '0').replace(/e/gi, '3'),
  term.replace(/ /g, '_'), term.replace(/ /g, '-'),
  [...term.replace(/ /g, '')].join('.'),
  [...term].map(char => /[!-~]/.test(char) ? String.fromCharCode(char.charCodeAt(0) + 0xfee0) : char).join('')];
for (const [term, action] of [['Sieg Heil', 'block'], ['Heil Hitler', 'block'], ['Heil dem Führer', 'block'],
  ['Hitler', 'block'], ['Jude', 'block'], ['Juden', 'block'], ['Drecksjude', 'block'],
  ['Juden vergasen', 'block'], ['Juden ins Gas', 'block'], ['Bastard', 'mask'], ['Cunt', 'mask']]) {
  for (const variant of variants(term)) cases.push({ text: `Hey, ${variant}!`, action });
}
for (const text of [
  'Wir brauchen einen Heiler', 'Heilige Kristalle fehlen', 'Die Heilung war super', 'Heiliger Boss!',
  'Sieger heilig ist kein sinnvoller Satz', 'Jup, lass uns losgehen', 'Jep, hab das Schwert',
  'Jo, alles gut', 'Jap, hab mich auch geärgert', 'Diese Quest ist behindert',
  'Das Crafting-System ist behindert', 'Bin beim Affenboss', 'Du Arsch', 'Scheiße, schon wieder tot',
  'Kacke, kein Loot', 'Du Noob', 'Kack-Noob', 'Was für ein Lauch', 'Clown', 'Spasti-Boss',
  'Mongo heißt unser Boss', 'Spast', 'Müll-Item', '18 Schaden', 'Level 88', '1488 Gold',
  'Ich spiele einen Ketzer', 'Gotteskrieger ist meine Klasse', 'Wir töten alle Goblins',
  'Life is a bitch', 'Fuck you', 'Fuck off', 'Touch grass', 'NPC steht am Tor',
  'Bastardisierung ist ein anderes Wort', 'Ich bin jüdisch', 'Lesbisch', 'Trans',
  'Schwul', 'Autist', 'Türke', 'Ausländer', 'Die Rattenquest ist fertig', 'Unser Server läuft',
]) cases.push({ text, action: 'allow' });
cases.push({ text: 'you bitch', action: 'mask' }, { text: 'bitch', action: 'hold' },
  { text: 'Jap', action: 'hold' }, { text: 'Ich bring dich um', action: 'hold' },
  { text: 'Ich bring dich um in der Arena beim PvP', action: 'allow' },
  { text: 'Ich weiß, wo du wohnst, deine Adresse kenne ich', action: 'block' });

assert.ok(cases.length >= 100);
assert.ok(new Set(cases.map(entry => entry.text)).size >= 100);
for (const [index, entry] of cases.entries()) test(`Moderation sentence ${index + 1}: ${JSON.stringify(entry.text)}`, async () => {
  const result = await evaluate(entry.text, rules);
  assert.equal(result.action, entry.action);
  if (entry.action === 'mask') assert.ok(result.text.includes('***'));
  if (entry.action === 'allow') assert.equal(result.text, entry.text);
  if (['hold', 'block'].includes(entry.action)) assert.equal(result.text, null);
});
test('pending drafts do not become active by accident', async () => {
  assert.equal((await evaluate('Fotze', moderationRules)).action, 'allow');
});
test('variant masking preserves original offsets and does not leak original text', async () => {
  const fixture = ['Fotze', 'Schlampe'].map(term => ({ term, key: term, version: 1, level: 3, action: 'mask', active: true, status: 'agreed',
    variants: term === 'Schlampe' ? ['SchIampe'] : [], reason: 'Normalization fixture' }));
  assert.equal((await evaluate('🙂 F0TZ3 und $chIampe!', fixture)).text, '🙂 *** und ***!');
});
test('context analyzer failures and timeout hold rather than release', async () => {
  assert.equal((await evaluate('bitch', rules, { analyze: async () => { throw new Error('offline'); } })).action, 'hold');
  assert.equal((await evaluate('bitch', rules, { analyze: () => new Promise(() => {}), timeoutMs: 5 })).action, 'hold');
});
test('language scoped rules do not silently apply to other languages', async () => {
  const languageRule = [{ term: 'testword', key: 'x', active: true, status: 'agreed', scope: 'language', language: 'de', level: 3, action: 'mask' }];
  assert.equal((await evaluate('testword', languageRule, { language: 'en' })).action, 'allow');
  assert.equal((await evaluate('testword', languageRule, { language: 'de' })).action, 'mask');
});
test('moderator release does not undo an independent mandatory mask', async () => {
  const result = await evaluate('Bastard bitch', rules, { analyze: async () => 'hold' });
  assert.equal(result.action, 'hold'); assert.equal(result.text, null);
  assert.equal(result.releaseText, '*** bitch');
});
test('a game reference cannot excuse an otherwise unknown real threat', async () => {
  assert.equal((await evaluate('Ich weiß, wo du wohnst beim Boss', rules)).action, 'hold');
});

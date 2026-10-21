const replacements = { '0': 'o', '1': 'i', '3': 'e', '4': 'a', '5': 's', '7': 't', '$': 's', '@': 'a' };
const escape = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function normalized(text) {
  let value = '', offset = 0;
  const positions = [];
  for (const character of text) {
    const end = offset + character.length;
    for (const char of character.normalize('NFKC').toLowerCase()) {
      if (/[\u200b-\u200d\ufeff]/u.test(char)) continue;
      const mapped = replacements[char] || (char === 'ß' ? 'ss' : char);
      value += mapped;
      // RegExp offsets use UTF-16 code units, including both halves of emoji.
      for (let index = 0; index < mapped.length; index++) positions.push({ start: offset, end });
    }
    offset = end;
  }
  return { value, positions };
}

export function compileRules(rules) {
  return rules.filter(rule => rule.active && rule.status === 'agreed' && rule.action !== 'allow').map(rule => ({
    ...rule, patterns: [rule.term, ...(rule.variants || [])].map(term => {
      const chars = [...normalized(term).value].filter(char => /[\p{L}\p{N}]/u.test(char));
      // Delimiters inside a known term are allowed; adjacent real words are not.
      return new RegExp(`(?<![\\p{L}\\p{N}])${chars.map(escape).join('[\\s,._*\\-]*')}(?![\\p{L}\\p{N}])`, 'gu');
    }),
  }));
}

export function findMatches(text, compiled, language = 'de') {
  const normalizedText = normalized(text), hits = [];
  for (const rule of compiled) {
    if (rule.scope === 'language' && rule.language !== language) continue;
    for (const pattern of rule.patterns) {
      pattern.lastIndex = 0;
      for (const match of normalizedText.value.matchAll(pattern)) {
        const first = normalizedText.positions[match.index], last = normalizedText.positions[match.index + match[0].length - 1];
        if (first && last) hits.push({ rule, start: first.start, end: last.end });
      }
    }
  }
  return hits;
}

function mask(text, matches) {
  const spans = matches.map(({ start, end }) => ({ start, end })).sort((a, b) => a.start - b.start);
  const merged = [];
  for (const span of spans) {
    const last = merged.at(-1);
    if (last && span.start <= last.end) last.end = Math.max(last.end, span.end);
    else merged.push({ ...span });
  }
  let result = '', offset = 0;
  for (const span of merged) { result += text.slice(offset, span.start) + '***'; offset = span.end; }
  return result + text.slice(offset);
}

// Deliberately narrow local heuristics, not an AI classifier. Unknown stays held.
export async function localContext({ text, matches }) {
  const lower = text.toLowerCase();
  if (matches.some(hit => hit.rule.level === 4)) {
    if (/\b(wohnung|adresse|haustür|familie|real|irl)\b/u.test(lower)) return 'block';
    if (matches.every(hit => hit.rule.term.toLowerCase() === 'ich bring dich um')
      && /\b(?:im|beim|in der)\s+(?:pvp|arena|dungeon)\b/u.test(lower)) return 'allow';
    return 'hold';
  }
  if (/\b(du|dich|you|your)\b/u.test(lower)) return 'mask';
  if (/\b(quest|crafting|boss|system)\b/u.test(lower) || /life(?:'s| is) a bitch/u.test(lower)
    || /^jap[,! ]/u.test(lower) && /\b(hab|habe|ich|auch|ja)\b/u.test(lower)) return 'allow';
  return 'hold';
}

export async function evaluate(text, rules, { language = 'de', context = [], analyze = localContext, timeoutMs = 2000 } = {}) {
  const matches = findMatches(text, compileRules(rules), language);
  const directBlock = matches.filter(hit => hit.rule.action === 'block' && !hit.rule.contextRequired);
  const contextHits = matches.filter(hit => hit.rule.contextRequired);
  const masks = matches.filter(hit => hit.rule.action === 'mask' && !hit.rule.contextRequired);
  let action = directBlock.length ? 'block' : masks.length ? 'mask' : 'allow';
  if (!directBlock.length && contextHits.length) {
    let timer;
    try {
      const decision = await Promise.race([
        Promise.resolve().then(async () => analyze({ text, language,
          context: typeof context === 'function' ? await context() : context, matches: contextHits })),
        new Promise(resolve => { timer = setTimeout(() => resolve('hold'), timeoutMs); }),
      ]);
      if (decision === 'block' || decision === 'hold') action = decision;
      else if (decision === 'mask') { masks.push(...contextHits); action = 'mask'; }
      else if (decision !== 'allow') action = 'hold';
    } catch { action = 'hold'; }
    finally { clearTimeout(timer); }
  }
  const matchedRules = [...new Map(matches.map(hit => [hit.rule.key, {
    key: hit.rule.key, version: hit.rule.version, level: hit.rule.level, reason: hit.rule.reason,
  }])).values()];
  const releaseText = masks.length ? mask(text, masks) : text;
  return { action, releaseText, text: action === 'block' || action === 'hold' ? null : releaseText,
    matchedRules, automaticReport: action === 'block' || action === 'hold' || matches.some(hit => hit.rule.reportAutomatically) };
}

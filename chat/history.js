// Cursor parameters can narrow the latest-50 window, never move it backwards.
export function visibleHistory(latest, { before, after, through, limit = 50 } = {}, currentHighWater = 0) {
  const window = latest.slice(-50);
  const oldestAvailableSequence = window[0]?.sequence ?? null;
  const highWater = Math.min(through ?? currentHighWater, currentHighWater);
  let rows = window.filter(message => message.sequence <= highWater
    && (before === undefined || message.sequence < before)
    && (after === undefined || message.sequence > after));
  if (after === undefined) rows.reverse();
  const hasMore = rows.length > limit;
  rows = rows.slice(0, limit);
  if (after === undefined) rows.reverse();
  return { channel: 'global', messages: rows, highWater, oldestAvailableSequence,
    historyTruncated: oldestAvailableSequence !== null &&
      ((after !== undefined && after < oldestAvailableSequence - 1) || highWater < oldestAvailableSequence),
    hasMore, ...(hasMore && rows.length ? after !== undefined
      ? { nextAfter: rows.at(-1).sequence } : { nextBefore: rows[0].sequence } : {}) };
}

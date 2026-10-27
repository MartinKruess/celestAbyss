// Only the public reason is sent to players; never send moderator notes.
export const publicBanReason = account => String(account?.banReason || 'Keine weitere Begründung hinterlegt.')
  .replace(/[\x00-\x1f\x7f]/g, ' ').slice(0, 500);
export const banResponse = account => ({ error: 'ACCOUNT_BANNED', reason: publicBanReason(account) });

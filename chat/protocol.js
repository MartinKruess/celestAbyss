export const chatError = code => Object.assign(new Error(code), { publicCode: code });
const identifier = value => typeof value === 'string' && /^[a-zA-Z0-9_-]{1,64}$/.test(value);

export function parseCommand(data, binary = false) {
  if (binary) throw chatError('TEXT_MESSAGES_ONLY');
  let command;
  try { command = JSON.parse(data.toString()); } catch { throw chatError('INVALID_JSON'); }
  if (!command || typeof command !== 'object' || Array.isArray(command) || !identifier(command.requestID)) throw chatError('INVALID_REQUEST');
  if (command.version !== undefined && command.version !== 1) throw chatError('UNSUPPORTED_VERSION');
  if (!['auth', 'subscribe', 'unsubscribe', 'send', 'history', 'report'].includes(command.type)) throw chatError('UNKNOWN_COMMAND');
  if (command.type === 'auth') {
    if (typeof command.token !== 'string' || command.token.length > 2048) throw chatError('INVALID_TOKEN');
  } else {
    if (command.channel !== 'global') throw chatError('UNKNOWN_CHANNEL');
    if (command.type === 'report' && (typeof command.messageID !== 'string' || !/^[a-f0-9]{24}$/i.test(command.messageID)
      || typeof command.reason !== 'string' || !command.reason.trim() || command.reason.length > 500)) throw chatError('INVALID_REPORT');
    if (command.type === 'send') {
      if (!identifier(command.clientMessageID) || typeof command.text !== 'string') throw chatError('INVALID_MESSAGE');
      command.text = command.text.trim();
      if (!command.text || [...command.text].length > 500 || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(command.text)) throw chatError('INVALID_MESSAGE');
    }
    if (command.type === 'history') {
      for (const key of ['before', 'after', 'through']) if (command[key] !== undefined && (!Number.isSafeInteger(command[key]) || command[key] < 0)) throw chatError('INVALID_CURSOR');
      if (command.before !== undefined && command.after !== undefined) throw chatError('INVALID_CURSOR');
      if (command.limit !== undefined && (!Number.isInteger(command.limit) || command.limit < 1 || command.limit > 50)) throw chatError('INVALID_LIMIT');
    }
  }
  return command;
}

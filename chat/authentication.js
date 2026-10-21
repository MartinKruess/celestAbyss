import { createTokenService } from '../security/tokens.js';
import { UserDataModel } from '../models/userSchema.js';
import { sessionService } from '../security/sessions.js';
import { envConfig } from '../scripts/config.js';

export function createChatAuthentication({ users, sessions, tokens }) {
  return async token => {
    const claims = tokens().verify(token);
    if (![claims.sub, claims.sid].every(value => typeof value === 'string' && /^[a-f0-9]{24}$/i.test(value))) throw new Error('INVALID_TOKEN');
    const user = await users.findById(claims.sub).select('_id username language isBanned');
    if (!user || user.isBanned || !await sessions.active(claims.sid, claims.sub)) throw new Error('INVALID_SESSION');
    return { accountID: String(user._id), sessionID: claims.sid, username: user.username, language: user.language || 'de', expiresAt: claims.exp * 1000 };
  };
}
export const authenticateChat = createChatAuthentication({ users: UserDataModel, sessions: sessionService,
  tokens: () => createTokenService(envConfig.ACCESS_TOKEN_SECRET) });

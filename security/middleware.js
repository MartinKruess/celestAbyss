import { UserDataModel } from '../models/userSchema.js';
import { CharDataModel } from '../models/characterSchema.js';
import { envConfig } from '../scripts/config.js';
import { createTokenService } from './tokens.js';
import { createAccess } from './access.js';
import { sessionService } from './sessions.js';
export const { authenticate, ownCharacter } = createAccess({
  users: UserDataModel, characters: CharDataModel,
  sessions: sessionService,
  tokens: () => createTokenService(envConfig.ACCESS_TOKEN_SECRET),
});

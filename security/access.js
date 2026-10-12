const isID = value => typeof value === 'string' && /^[a-fA-F0-9]{24}$/.test(value);

export function createAccess({ tokens, users, characters, sessions }) {
  return {
    authenticate: async (req, res, next) => {
      const match = /^Bearer ([^\s]+)$/i.exec(req.get('authorization') || '');
      if (!match) return res.status(401).json({ error: 'AUTH_REQUIRED' });
      let claims;
      try { claims = tokens().verify(match[1]); }
      catch { return res.status(401).json({ error: 'INVALID_TOKEN' }); }
      if (!isID(claims.sub) || !isID(claims.sid)) return res.status(401).json({ error: 'INVALID_TOKEN' });
      try {
        const account = await users.findById(claims.sub).select('_id isBanned');
        if (!account) return res.status(401).json({ error: 'INVALID_TOKEN' });
        if (account.isBanned) return res.status(403).json({ error: 'ACCOUNT_BANNED' });
        if (!await sessions.active(claims.sid, claims.sub)) return res.status(401).json({ error: 'INVALID_SESSION' });
        req.auth = { accountID: String(account._id), sessionID: claims.sid };
        next();
      } catch (error) { next(error); }
    },
    ownCharacter: getID => async (req, res, next) => {
      const id = getID(req);
      if (!isID(id)) return res.status(400).json({ error: 'INVALID_CHARACTER_ID' });
      try {
        const character = await characters.findOne({ _id: id, accountID: req.auth.accountID });
        // Same response for missing and foreign characters.
        if (!character) return res.status(404).json({ error: 'CHARACTER_NOT_FOUND' });
        req.character = character;
        next();
      } catch (error) { next(error); }
    },
  };
}

export function characterInput(req, res, next) {
  const { charName, class: charClass } = req.body || {};
  if (typeof charName !== 'string' || !/^[\p{L}\p{N}_-]{3,32}$/u.test(charName)
    || typeof charClass !== 'string') return res.status(400).json({ error: 'INVALID_CHARACTER_INPUT' });
  // Account and progression fields can never be supplied by the client.
  req.body = { charName, class: charClass, accountID: req.auth.accountID };
  next();
}

export const unavailable = (req, res) => res.status(503).json({ error: 'FEATURE_NOT_READY' });

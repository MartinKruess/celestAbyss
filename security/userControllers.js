import { banResponse } from './accountBan.js';
import { trackService } from '../services/pendingWork.js';
export function createUserControllers({ users, hash, verify, sessions }) {
  return trackService({
    register: async (req, res) => {
      try {
        const password = await hash(req.body.password);
        await users.create({ username: req.body.username, email: req.body.email, password });
        return res.status(201).json({ msg: 'Account created.' });
      } catch (error) {
        return res.status(error.code === 11000 ? 409 : 500).json({ error: error.code === 11000 ? 'ACCOUNT_EXISTS' : 'REGISTRATION_FAILED' });
      }
    },
    login: async (req, res) => {
      try {
        const user = await users.findOne({ username: req.body.username });
        if (!user || !await verify(user.password, req.body.password)) return res.status(401).json({ error: 'INVALID_CREDENTIALS' });
        if (user.isBanned) return res.status(403).json(banResponse(user));
        return res.json({ ...await sessions.start(user._id),
          userData: { _id: String(user._id), username: user.username, language: user.language, maxChars: user.maxChars } });
      } catch {
        return res.status(500).json({ error: 'LOGIN_FAILED' });
      }
    },
    refresh: async (req, res) => {
      try { return res.json(await sessions.refresh(req.body.refreshToken)); }
      catch (error) {
        if (error.message === 'ACCOUNT_BANNED') return res.status(403).json({ error: 'ACCOUNT_BANNED', reason: error.reason });
        return res.status(error.status === 401 ? 401 : 500).json({ error: error.status === 401 ? 'INVALID_SESSION' : 'SESSION_OPERATION_FAILED' });
      }
    },
    logout: async (req, res) => {
      try { await sessions.logout(req.auth.sessionID, req.auth.accountID); return res.status(204).end(); }
      catch { return res.status(500).json({ error: 'SESSION_OPERATION_FAILED' }); }
    },
    logoutAll: async (req, res) => {
      try { await sessions.logoutAll(req.auth.accountID); return res.status(204).end(); }
      catch { return res.status(500).json({ error: 'SESSION_OPERATION_FAILED' }); }
    },
  });
}

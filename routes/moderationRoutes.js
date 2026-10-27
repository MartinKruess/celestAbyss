import express from 'express';
import { authenticate } from '../security/middleware.js';
import { UserDataModel } from '../models/userSchema.js';
import { ModerationCaseModel } from '../models/moderationCaseSchema.js';
import { moderationService } from '../moderation/service.js';
import { trackAsync } from '../services/pendingWork.js';
import { banAccount } from '../security/bans.js';
export const moderationRouter = express.Router();
moderationRouter.use(authenticate, trackAsync(async (req, res, next) => {
  try {
    const account = await UserDataModel.findById(req.auth.accountID).select('role');
    if (!['admin', 'moderator'].includes(account?.role)) return res.status(403).json({ error: 'MODERATOR_REQUIRED' });
    req.moderatorRole = account.role; res.set('Cache-Control', 'no-store'); next();
  } catch (error) { next(error); }
}));
moderationRouter.post('/accounts/:id/ban', trackAsync(async (req, res, next) => {
  if (req.moderatorRole !== 'admin') return res.status(403).json({ error: 'ADMIN_REQUIRED' });
  const reason = req.body?.reason;
  if (!/^[a-f\d]{24}$/i.test(req.params.id) || typeof reason !== 'string' || !reason.trim() || reason.length > 500
    || /[\x00-\x1f\x7f]/.test(reason) || Object.keys(req.body).join(',') !== 'reason')
    return res.status(400).json({ error: 'INVALID_BAN' });
  try { await banAccount(req.params.id, reason.trim()); res.json({ banned: true }); }
  catch (error) { if (error.status === 404) res.status(404).json({ error: 'ACCOUNT_NOT_FOUND' }); else next(error); }
}));
moderationRouter.get('/cases', async (req, res, next) => {
  try {
    if (req.query.before && !/^[a-f0-9]{24}$/i.test(req.query.before)) return res.status(400).json({ error: 'INVALID_CURSOR' });
    const cases = await ModerationCaseModel.find(req.query.before ? { _id: { $lt: req.query.before } } : {}).sort({ _id: -1 }).limit(50).lean();
    res.json({ cases, nextBefore: cases.length === 50 ? String(cases.at(-1)._id) : null });
  } catch (error) { next(error); }
});
moderationRouter.post('/cases/:id/resolve', trackAsync(async (req, res, next) => {
  if (!/^[a-f0-9]{24}$/i.test(req.params.id) || !['release', 'block', 'dismiss', 'confirm'].includes(req.body?.decision)
    || typeof req.body?.note !== 'string' || !req.body.note.trim() || req.body.note.length > 1000) return res.status(400).json({ error: 'INVALID_DECISION' });
  try {
    res.json(await moderationService.resolve({ caseID: req.params.id, actorID: req.auth.accountID, decision: req.body.decision, note: req.body.note.trim() }));
  } catch (error) {
    if (error.publicCode) return res.status(error.publicCode === 'CASE_NOT_FOUND' ? 404 : 409).json({ error: error.publicCode });
    next(error);
  }
}));
moderationRouter.post('/cases/:id/legal-hold', trackAsync(async (req, res, next) => {
  if (req.moderatorRole !== 'admin') return res.status(403).json({ error: 'ADMIN_REQUIRED' });
  if (!/^[a-f0-9]{24}$/i.test(req.params.id) || typeof req.body?.enabled !== 'boolean'
    || typeof req.body?.note !== 'string' || !req.body.note.trim() || req.body.note.length > 1000) return res.status(400).json({ error: 'INVALID_INPUT' });
  try {
    const updated = await ModerationCaseModel.findByIdAndUpdate(req.params.id, { $set: {
      legalHold: req.body.enabled, legalHoldBy: req.auth.accountID, legalHoldAt: new Date(), legalHoldReason: req.body.note.trim(),
    }, $push: { audit: { actorID: req.auth.accountID, action: req.body.enabled ? 'legal-hold' : 'release-hold', note: req.body.note.trim(), at: new Date() } } }, { new: true });
    if (!updated) return res.status(404).json({ error: 'CASE_NOT_FOUND' });
    res.json({ caseID: req.params.id, legalHold: updated.legalHold });
  } catch (error) { next(error); }
}));

import express from 'express';
import { playService } from '../services/play.js';
import { authenticate } from '../security/middleware.js';
import { dedicatedAuthentication } from '../security/dedicated.js';
import { playControl } from '../services/playControl.js';
import { dedicatedRuntime } from '../services/dedicatedRuntime.js';
import { trackAsync } from '../services/pendingWork.js';

export function createPlayRouters({ service = playService, control = playControl, runtime = dedicatedRuntime, playerAuth = authenticate, serverAuth = dedicatedAuthentication() } = {}) {
  const player = express.Router(), dedicated = express.Router();
  const route = handler => async (req, res) => {
    try { res.json(await handler(req)); }
    catch (error) { res.status(error.status || 500).json({ error: error.status ? error.message : 'PLAY_OPERATION_FAILED',
      ...(error.message === 'ACCOUNT_BANNED' ? { reason: error.reason } : {}) }); }
  };
  player.post('/:id/play', playerAuth, route(req => service.issue({ ...req.auth, characterID: req.params.id })));
  dedicated.use(serverAuth);
  const identity = req => ({ serverID: req.dedicated.serverID, instanceID: req.get('x-celest-instance') });
  dedicated.get('/runtime', route(req => runtime.status(req.dedicated.serverID)));
  dedicated.post('/runtime/start', route(req => runtime.start({ ...identity(req), expectedInstanceID: req.body?.expectedInstanceID })));
  dedicated.post('/runtime/probe', route(req => runtime.probe(identity(req))));
  dedicated.post('/runtime/maintenance', route(req => runtime.maintenance(identity(req))));
  dedicated.use(trackAsync(async (req,res,next) => {
    try { await runtime.assertCurrent(identity(req)); next(); }
    catch (error) { res.status(error.status || 503).json({ error: error.status ? error.message : 'SERVER_NOT_READY' }); }
  }));
  dedicated.post('/admit', route(req => service.admit({ ...identity(req), ticket: req.body?.ticket })));
  dedicated.post('/sessions/check', route(req => control.check({ serverID: req.dedicated.serverID, leases: req.body?.leases })));
  dedicated.post('/characters/:id/leave', route(req => control.leave({ serverID: req.dedicated.serverID, characterID: req.params.id, body: req.body })));
  dedicated.patch('/characters/:id/state', route(req => service.save({ serverID: req.dedicated.serverID, characterID: req.params.id, body: req.body })));
  return { player, dedicated };
}

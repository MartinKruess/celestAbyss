import express from 'express';
import cors from 'cors';
import { corsOptions, httpErrorHandler } from './security/http.js';
import { authenticate, ownCharacter } from './security/middleware.js';
import { unavailable } from './security/access.js';
import { userRouter } from './routes/userRoutes.js';
import { itemRouter } from './routes/itemRoutes.js';
import { characterRouter } from './routes/characterRoutes.js';
import { moderationRouter } from './routes/moderationRoutes.js';
import { classRouter } from './routes/classRoutes.js';
import { createPlayRouters } from './routes/playRoutes.js';

export function createApp({ isReady = () => false, corsConfig = corsOptions() } = {}) {
  const app = express();

  app.disable('x-powered-by');
  app.get('/health/live', (req, res) => res.json({ status: 'alive' }));
  app.get('/health/ready', (req, res) => res.status(isReady() ? 200 : 503).json({ status: isReady() ? 'ready' : 'unavailable' }));
  app.use((req, res, next) => isReady() ? next() : res.status(503).json({ error: 'SERVICE_UNAVAILABLE' }));
  app.use(cors(corsConfig));
  // Authentication requests never need world-save sized payloads.
  app.use('/user', express.json({ limit: '16kb' }));
  app.use('/moderation', express.json({ limit: '16kb' }));
  app.use('/dedicated', express.json({ limit: '16kb' }));
  app.use(express.json({ limit: '50mb' }));


  app.get('/', (req, res) => {
    res.send('<h1>This is the Celest Abyss Backend!</h1>');
  });

  // Account and Character Routes
  app.use('/user', userRouter);
  const play = createPlayRouters();
  app.use('/characters', play.player);
  app.use('/dedicated', play.dedicated);
  app.use('/characters', authenticate, characterRouter);
  app.use('/classes', authenticate, classRouter);
  app.use('/moderation', moderationRouter);

  // Data Routes
  // Legacy seed and reward endpoints must not accept ordinary player tokens.
  app.use('/skills', authenticate, unavailable);
  app.use('/inventory', authenticate, ownCharacter(req => req.body?.characterID), unavailable);
  app.use('/items', authenticate, (req, res, next) => {
    if (req.method === 'GET' && req.path === '/') return next();
    return unavailable(req, res);
  }, itemRouter);
  app.use('/upgrade', authenticate, ownCharacter(req => req.body?.charID), unavailable);
  app.use('/trader', authenticate, ownCharacter(req => req.body?.characterID), unavailable);
  app.use('/creatures', authenticate, unavailable);
  app.use(httpErrorHandler);


  return app;
}

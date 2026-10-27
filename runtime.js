import mongoose from 'mongoose';
import { createServer } from 'node:http';
import { attachChat } from './chat/server.js';
import { initializeChatStore } from './chat/store.js';
import { createApp } from './app.js';
import { SessionModel } from './models/sessionSchema.js';
import { PlayTicketModel } from './models/playTicketSchema.js';
import { initializeModeration, moderationService } from './moderation/service.js';
import { pendingWork } from './services/pendingWork.js';
import { PlaySaveReceiptModel } from './models/playSaveReceiptSchema.js';
import { DedicatedRuntimeModel } from './models/dedicatedRuntimeSchema.js';
import { ensureIdentityIndexes } from './services/identityIndexes.js';

const listen = (server, port, host) => new Promise((resolve, reject) => {
  const failed = error => { server.off('listening', ready); reject(error); };
  const ready = () => { server.off('error', failed); resolve(); };
  server.once('error', failed);
  server.once('listening', ready);
  server.listen(port, host);
});
const close = server => new Promise(resolve => {
  if (!server?.listening) return resolve();
  server.close(resolve);
  server.closeIdleConnections?.();
});

export async function startBackend(config, { database = mongoose, logger = console, chatOptions = {}, work = pendingWork } = {}) {
  let stopping = false, stopPromise;
  let http, wsHttp, wss, chat, cleanup, cleanupTask;
  const isReady = () => !stopping && database.connection.readyState === 1;
  const stop = () => {
    if (stopPromise) return stopPromise;
    stopping = true;
    clearInterval(cleanup);
    stopPromise = (async () => {
      logger.log('Shutdown: draining accepted HTTP, chat and database work.');
      await Promise.all([close(http), close(wsHttp), chat?.stop(), cleanupTask?.catch(() => {})]);
      await work.drain();
      if (wss) {
        const wsClosed = new Promise(resolve => wss.close(resolve));
        // All accepted commands have completed; transport cleanup cannot lose writes now.
        wss.clients.forEach(client => client.terminate());
        await wsClosed;
      }
      await database.disconnect();
    })();
    return stopPromise;
  };
  try {
    await database.connect(config.uri, { dbName: config.dbName, serverSelectionTimeoutMS: 10000, autoIndex: false });
    if (database === mongoose) await ensureIdentityIndexes();
    if (database === mongoose) await SessionModel.createIndexes();
    if (database === mongoose) await PlayTicketModel.createIndexes();
    if (database === mongoose) await PlaySaveReceiptModel.createIndexes();
    if (database === mongoose) await DedicatedRuntimeModel.createCollection();
    if (database === mongoose) await initializeChatStore();
    if (database === mongoose) {
      await initializeModeration();
      let sweeping = false;
      cleanup = setInterval(async () => {
        if (sweeping || stopping) return;
        sweeping = true;
        try { cleanupTask = moderationService.sweep(); await cleanupTask; } catch { logger.error('Moderation cleanup failed.'); }
        finally { sweeping = false; }
      }, 60000);
      cleanup.unref();
    }
    http = createServer(createApp({ isReady, corsConfig: config.cors }));
    wsHttp = createServer((req, res) => { res.writeHead(404); res.end(); });
    chat = attachChat(wsHttp, { ...chatOptions, isReady: () => database.connection.readyState === 1, origins: config.cors.origin });
    wss = chat.wss;
    await listen(http, config.port, config.host);
    await listen(wsHttp, config.wsPort, config.host);
    const failed = () => { logger.error('Listener error; stopping backend.'); stop().catch(() => logger.error('Shutdown failed.')); };
    http.on('error', failed); wsHttp.on('error', failed); wss.on('error', failed);
    logger.log(`Backend ready: HTTP ${http.address().port}, WebSocket ${wsHttp.address().port}`);
    return { http, wsHttp, stop, isReady };
  } catch (error) { await stop(); throw error; }
}

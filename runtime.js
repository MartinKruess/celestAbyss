import mongoose from 'mongoose';
import { createServer } from 'node:http';
import { attachChat } from './chat/server.js';
import { initializeChatStore } from './chat/store.js';
import { createApp } from './app.js';
import { SessionModel } from './models/sessionSchema.js';

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

export async function startBackend(config, { database = mongoose, logger = console, chatOptions = {} } = {}) {
  let stopping = false, stopPromise;
  let http, wsHttp, wss, chat;
  const isReady = () => !stopping && database.connection.readyState === 1;
  const stop = () => {
    if (stopPromise) return stopPromise;
    stopping = true;
    stopPromise = (async () => {
      const deadline = setTimeout(() => {
        http?.closeAllConnections(); wsHttp?.closeAllConnections();
        wss?.clients.forEach(client => client.terminate());
      }, 5000);
      try {
        const wsClosed = wss ? new Promise(resolve => wss.close(resolve)) : Promise.resolve();
        wss?.clients.forEach(client => client.close(1001, 'Server shutting down'));
        await Promise.all([close(http), close(wsHttp), wsClosed, chat?.stop()]);
        await database.disconnect();
      } finally { clearTimeout(deadline); }
    })();
    return stopPromise;
  };
  try {
    await database.connect(config.uri, { dbName: config.dbName, serverSelectionTimeoutMS: 10000, autoIndex: false });
    if (database === mongoose) await SessionModel.createIndexes();
    if (database === mongoose) await initializeChatStore();
    http = createServer(createApp({ isReady, corsConfig: config.cors }));
    wsHttp = createServer((req, res) => { res.writeHead(404); res.end(); });
    chat = attachChat(wsHttp, { ...chatOptions, isReady, origins: config.cors.origin });
    wss = chat.wss;
    await listen(http, config.port, config.host);
    await listen(wsHttp, config.wsPort, config.host);
    const failed = () => { logger.error('Listener error; stopping backend.'); stop().catch(() => logger.error('Shutdown failed.')); };
    http.on('error', failed); wsHttp.on('error', failed); wss.on('error', failed);
    logger.log(`Backend ready: HTTP ${http.address().port}, WebSocket ${wsHttp.address().port}`);
    return { http, wsHttp, stop, isReady };
  } catch (error) { await stop(); throw error; }
}

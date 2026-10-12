import mongoose from 'mongoose';
import { createServer } from 'node:http';
import { WebSocketServer } from 'ws';
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

export async function startBackend(config, { database = mongoose, logger = console } = {}) {
  let stopping = false, stopPromise;
  let http, wsHttp, wss;
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
        await Promise.all([close(http), close(wsHttp), wsClosed]);
        await database.disconnect();
      } finally { clearTimeout(deadline); }
    })();
    return stopPromise;
  };
  try {
    await database.connect(config.uri, { dbName: config.dbName, serverSelectionTimeoutMS: 10000, autoIndex: false });
    if (database === mongoose) await SessionModel.createIndexes();
    http = createServer(createApp({ isReady, corsConfig: config.cors }));
    wsHttp = createServer((req, res) => { res.writeHead(404); res.end(); });
    wss = new WebSocketServer({ server: wsHttp, maxPayload: 16384 });
    // ws forwards HTTP listener errors before startup has completed.
    wss.on('error', () => {});
    // Legacy unauthenticated player-state broadcasts are disabled until chat authentication exists.
    wss.on('connection', client => {
      client.on('error', () => {});
      client.close(1008, 'WebSocket authentication not implemented');
    });
    await listen(http, config.port, config.host);
    await listen(wsHttp, config.wsPort, config.host);
    const failed = () => { logger.error('Listener error; stopping backend.'); stop().catch(() => logger.error('Shutdown failed.')); };
    http.on('error', failed); wsHttp.on('error', failed); wss.on('error', failed);
    logger.log(`Backend ready: HTTP ${http.address().port}, WebSocket ${wsHttp.address().port}`);
    return { http, wsHttp, stop, isReady };
  } catch (error) { await stop(); throw error; }
}

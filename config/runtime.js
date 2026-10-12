import { corsOptions } from '../security/http.js';
import { createTokenService } from '../security/tokens.js';

export function readRuntimeConfig(env = process.env) {
  const port = (name, fallback) => {
    const value = env[name] ?? String(fallback);
    if (!/^\d+$/.test(value) || Number(value) > 65535) throw new Error(`Invalid ${name}`);
    return Number(value);
  };
  const uri = env.DB_MONGO_URL || env.MONGODB_URI;
  if (!uri || !/^mongodb(\+srv)?:\/\//.test(uri)) throw new Error('Missing or invalid MongoDB URI');
  createTokenService(env.ACCESS_TOKEN_SECRET);
  const dbName = env.MONGODB_DB_NAME || 'celestabyss_dev';
  if (!/^[a-zA-Z0-9_-]+$/.test(dbName)) throw new Error('Invalid MONGODB_DB_NAME');
  const config = { uri, dbName, port: port('PORT', 5600), wsPort: port('WS_PORT', 8080), host: env.HOST || '127.0.0.1', cors: corsOptions(env) };
  if (config.port !== 0 && config.port === config.wsPort) throw new Error('HTTP and WebSocket ports must differ');
  return config;
}

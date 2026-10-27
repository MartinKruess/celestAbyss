import { timingSafeEqual } from 'node:crypto';

export function dedicatedConfiguration(env = process.env) {
  const key = env.CELEST_DEDICATED_API_KEY;
  const serverID = env.CELEST_DEDICATED_ID || 'local';
  const address = env.CELEST_DEDICATED_ADDRESS || '127.0.0.1:7777';
  if (!key || !/^[A-Za-z0-9_-]{32,256}$/.test(key) || !/^[A-Za-z0-9_-]{1,64}$/.test(serverID)
    || !/^[A-Za-z0-9.-]+:[0-9]{1,5}$/.test(address)
    || Number(address.split(':')[1]) < 1 || Number(address.split(':')[1]) > 65535) return null;
  return { key, serverID, address };
}

export function dedicatedAuthentication(configuration = () => dedicatedConfiguration()) {
  return (req, res, next) => {
    const config = configuration();
    if (!config) return res.status(503).json({ error: 'DEDICATED_NOT_CONFIGURED' });
    const match = /^Bearer ([^\s]+)$/.exec(req.get('authorization') || '');
    const actual = Buffer.from(match?.[1] || '');
    const expected = Buffer.from(config.key);
    if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return res.status(401).json({ error: 'DEDICATED_AUTH_REQUIRED' });
    req.dedicated = { serverID: config.serverID };
    next();
  };
}

// Single-instance development limiter. Proxy headers are deliberately ignored.
// Replace with a shared store before running multiple backend instances.
export function createRateLimit({ limit = 10, windowMs = 60000, maxKeys = 10000, now = Date.now } = {}) {
  const buckets = new Map();
  return (req, res, next) => {
    const time = now();
    for (const [key, bucket] of buckets) if (bucket.reset <= time) buckets.delete(key);
    const key = req.ip || req.socket?.remoteAddress || 'unknown';
    let bucket = buckets.get(key);
    if (!bucket) {
      if (buckets.size >= maxKeys) {
        res.set('Retry-After', String(Math.ceil(windowMs / 1000)));
        return res.status(429).json({ error: 'RATE_LIMITED' });
      }
      bucket = { count: 0, reset: time + windowMs };
      buckets.set(key, bucket);
    }
    if (++bucket.count > limit) {
      res.set('Retry-After', String(Math.max(1, Math.ceil((bucket.reset - time) / 1000))));
      return res.status(429).json({ error: 'RATE_LIMITED' });
    }
    next();
  };
}

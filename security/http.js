export function corsOptions(environment = process.env) {
  if (environment.NODE_ENV !== 'production') return { origin: '*' };
  const origins = (environment.CORS_ORIGINS || '').split(',').map(value => value.trim()).filter(Boolean);
  if (!origins.length || origins.includes('*')) throw new Error('Production requires explicit CORS_ORIGINS.');
  return { origin: origins };
}

export function httpErrorHandler(error, req, res, next) {
  if (res.headersSent) return next(error);
  const status = error.type === 'entity.too.large' ? 413
    : error.type === 'entity.parse.failed' ? 400 : 500;
  return res.status(status).json({ error: status === 413 ? 'PAYLOAD_TOO_LARGE'
    : status === 400 ? 'INVALID_JSON' : 'INTERNAL_ERROR' });
}

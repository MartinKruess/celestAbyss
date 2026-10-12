import jwt from 'jsonwebtoken';
import { randomUUID } from 'node:crypto';
export function createTokenService(secret) {
  if (typeof secret !== 'string' || Buffer.byteLength(secret) < 32) throw new Error('ACCESS_TOKEN_SECRET requires at least 32 bytes of random secret material.');
  const issuer = 'celestabyss', audience = 'celestabyss-client';
  return {
    issue: (id, sessionID) => jwt.sign({ ...(sessionID ? { sid: String(sessionID) } : {}) }, secret, { subject: String(id), jwtid: randomUUID(), algorithm: 'HS256', issuer, audience, expiresIn: '15m' }),
    verify: token => jwt.verify(token, secret, { algorithms: ['HS256'], issuer, audience }),
    issueRefresh: (id, sessionID, expiresAt) => jwt.sign({ sid: String(sessionID), exp: Math.floor(expiresAt.getTime() / 1000) }, secret, {
      subject: String(id), jwtid: randomUUID(), algorithm: 'HS256', issuer, audience: 'celestabyss-refresh',
    }),
    verifyRefresh: token => jwt.verify(token, secret, { algorithms: ['HS256'], issuer, audience: 'celestabyss-refresh' }),
  };
}

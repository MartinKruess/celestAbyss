import argon2 from 'argon2';
export const hashPassword = password => argon2.hash(password, {
  type: argon2.argon2id, memoryCost: 19456, timeCost: 2, parallelism: 1,
});
export const verifyPassword = async (hash, password) => {
  if (typeof hash !== 'string' || !hash.startsWith('$argon2id$')) return false;
  return argon2.verify(hash, password);
};

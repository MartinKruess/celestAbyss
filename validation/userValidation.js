import { body, validationResult } from 'express-validator';
const username = () => body('username').isString().bail().trim().isLength({ min: 3, max: 32 }).matches(/^[a-zA-Z0-9_-]+$/);
export const userValidationOptions = [username(),
  body('email').isString().bail().trim().isLength({ max: 254 }).isEmail(),
  body('password').isString().bail().isLength({ min: 12, max: 128 })];
export const loginValidation = [username(), body('password').isString().bail().isLength({ min: 1, max: 128 })];
export function userValidation(req, res, next) {
  if (!validationResult(req).isEmpty()) return res.status(400).json({ error: 'INVALID_INPUT' });
  next();
}

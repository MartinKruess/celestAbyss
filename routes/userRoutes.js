import express from 'express';
import { createRateLimit } from '../security/rateLimit.js';
import { registerController, signinController, refreshController, logoutController, logoutAllController } from '../controllers/userController.js';
import { authenticate } from '../security/middleware.js';
import { body } from 'express-validator';
import { userValidationOptions, loginValidation, userValidation } from '../validation/userValidation.js';
export const userRouter = express.Router();
userRouter.use((req, res, next) => { res.set('Cache-Control', 'no-store'); next(); });
userRouter.post('/login', createRateLimit(), loginValidation, userValidation, signinController)
  .post('/register', createRateLimit({ limit: 5, windowMs: 3600000 }), userValidationOptions, userValidation, registerController)
  .post('/refresh', createRateLimit({ limit: 30 }), body('refreshToken').isString().bail().isLength({ min: 1, max: 2048 }), userValidation, refreshController)
  .post('/logout', authenticate, logoutController)
  .post('/logout-all', authenticate, logoutAllController);

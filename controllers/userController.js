import { UserDataModel } from '../models/userSchema.js';
import { hashPassword, verifyPassword } from '../security/passwords.js';
import { sessionService } from '../security/sessions.js';
import { createUserControllers } from '../security/userControllers.js';
const controllers = createUserControllers({ users: UserDataModel, hash: hashPassword,
  verify: verifyPassword, sessions: sessionService });
export const registerController = controllers.register;
export const signinController = controllers.login;
export const refreshController = controllers.refresh;
export const logoutController = controllers.logout;
export const logoutAllController = controllers.logoutAll;

'use strict';

import express from "express";
import passportConfig from "../config/passport.config.js";
import { authController } from "../controllers/auth.controller.js";

export const authRouter = express.Router();

authRouter.get(
  '/',
  passportConfig.authenticate(
    'github', 
    { scope: [ 'user:email', 'repo' ] }
  ),
);

authRouter.get(
  '/callback',
  passportConfig.authenticate(
    'github',
    { failureRedirect: '/auth/github/error' }
  ),
  authController.authCallback,
);

authRouter.get('/error', authController.authError);
authRouter.get('/signout', authController.authSignout);

'use strict';

import express from "express";
import passport from 'passport';
import session from 'express-session';
import crypto from 'crypto';
import { initDB } from './utils/initDB.js';
import { profileRouter } from "./routes/profile.router.js";
import { authRouter } from "./routes/auth.router.js";

export const createServer = () => {
  const app = express();
  const secretKey = crypto.randomBytes(64).toString('hex');

  initDB();

  app.use(express.static('public'));
  app.set('view engine', 'ejs');

  app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/', (req, res) => res.render('auth'));

  app.use('/profile', profileRouter);

  app.use('/auth/github', authRouter);

  return app;
};

'use strict';

import passport from "passport";
import { Strategy as GitHubStrategy } from 'passport-github2';
import { User } from "../models/User.model.js";
import dotenv from 'dotenv';

dotenv.config();

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID!,
  clientSecret: process.env.GITHUB_SECRET_KEY!,
  callbackURL: process.env.GITHUB_CALLBACK_URL!,
},
async (accessToken, refreshToken, profile, done) => {
  profile.accessToken = accessToken;

  const user = await User.findOne({
    where: { githubId: profile.id, },
  });

  if (!user) {
    console.log('Adding new user to DB..');

    await User.create({
      githubId: profile.id,
      userName: profile.username,
    })

    return done(null, profile);
  }

  console.log('Github user already exist in DB..');

  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  return done(null, user);
});

passport.deserializeUser((user, done) => {
  User.findByPk(user.id)
    .then((user) => {
      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    })
    .catch((err) => {
      return done(err, false);
    });
});

export default passport;

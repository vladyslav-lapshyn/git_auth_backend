// 'use strict';
// import passport from "passport";
// import { Strategy as GitHubStrategy } from 'passport-github2';
// import { User } from "../models/User.model.js";
// import dotenv from 'dotenv';
// import express from "express";
// dotenv.config();
// export const gitRouter = express.Router();
// passport.use(new GitHubStrategy({
//   clientID: process.env.GITHUB_CLIENT_ID!,
//   clientSecret: process.env.GITHUB_SECRET_KEY!,
//   callbackURL: process.env.GITHUB_CALLBACK_URL!,
// },
// async (accessToken, refreshToken, profile, cb) => {
//   const user = await User.findOrCreate({
//     where: { githubId: profile.id, },
//     defaults: { userName: profile.username },
//   });
//   if (!user) {
//     console.log('Adding new github user to DB');
//     const user = new User({
//       githubId: profile.id,
//       userName: profile.username,
//     });
//     await user.save();
//     return cb(null, profile);
//   } else {
//     console.log('Github use already exist in DB');
//     return cb(null, profile);
//   }
// }));

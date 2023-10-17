import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { User } from "../models/User.model.js";
import dotenv from "dotenv";
import express from "express";
// const GitHubStrategy = require('passport-github2').Strategy;
dotenv.config();
export const gitRouter = express.Router();
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_SECRET_KEY,
    callbackURL: process.env.GITHUB_CALLBACK_URL
}, async (accessToken, refreshToken, profile, cb)=>{
    const user = await User.findOne({
        where: {
            githubId: profile.id
        }
    });
    if (!user) {
        console.log("Adding new github user to DB");
        const newUser = new User({
            githubId: profile.id,
            userName: profile.username
        });
        await newUser.save();
        return cb(null, profile);
    } else {
        console.log("Github use already exist in DB");
        return cb(null, profile);
    }
}));
gitRouter.get("/", passport.authenticate("github", {
    scope: [
        "user:email"
    ]
}));
gitRouter.get("/callback", passport.authenticate("github", {
    failureRedirect: "/auth/github/error"
}), function(req, res) {
    res.redirect("https://git-auth-frontend.vercel.app/workspace");
});
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findByPk(id).then((user)=>{
        if (!user) {
            done(null, false);
        } else {
            done(null, user);
        }
    }).catch((err)=>{
        done(err, false);
    });
});

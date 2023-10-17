"use strict";
import passport from "passport";
import GitHubStrategy from "passport-github";
passport.use(new GitHubStrategy({
    clientID: "52296e42814d8e73a074",
    clientSecret: "14a27b5f24c17d20062d74a58adea00516bb3be5",
    callbackURL: "http://localhost:5555/auth/github/callback"
}, function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));

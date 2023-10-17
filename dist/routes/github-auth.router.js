import express from "express";
import passport from "passport";
export const gitAuthRouter = express.Router();
gitAuthRouter.get("/", passport.authenticate("github", {
    scope: [
        "user:email"
    ]
}));
gitAuthRouter.get("/callback", passport.authenticate("github", {
    failureRedirect: "/auth/github/error"
}), function(req, res) {
    res.redirect("/auth/github/success");
}); // gitAuthRouter.get('/success', async (req, res) => {
 //   const userInfo = {
 //     id: req.user.id,
 //     displayName: req.user.username,
 //     provider: req.user.provider,
 //   };
 //   res.render('fb-github-success', { user: userInfo });
 // });
 // gitAuthRouter.get('/error', (req, res) => res.send('Error logging in via GitHub'));

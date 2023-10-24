"use strict";
class AuthController {
    authCallback = async (req, res)=>{
        const { user } = req;
        req.session.user = user;
        res.redirect("/profile");
    };
    authError = async (req, res)=>{
        res.send("Error logging GitHub");
    };
    authSignout = async (req, res)=>{
        try {
            req.session.destroy(()=>{
                console.log("session was destroyed");
            });
            res.clearCookie("connect.sid");
            res.redirect("/");
        } catch (error) {
            res.status(400).send({
                message: "Failed signout"
            });
        }
    };
}
export const authController = new AuthController();

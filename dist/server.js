"use strict";
import cors from "cors";
import express from "express";
import passport from "passport";
import session from "express-session";
import crypto from "crypto";
import { initDB } from "./utils/initDB.js";
import { gitRouter } from "./controllers/passport.js";
// import { gitAuthRouter } from './routes/gitAuth.router.js';
const corsOrigins = {
    origin: "*"
};
export const createServer = ()=>{
    const app = express();
    const secretKey = crypto.randomBytes(64).toString("hex");
    initDB();
    app.use(cors(corsOrigins));
    app.use(session({
        secret: secretKey,
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use("/auth/github", gitRouter);
    app.use("/", (_, res)=>{
        res.send("git auth");
    });
    return app;
};

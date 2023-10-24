'use strict';

import express from "express";
import { profileController } from "../controllers/profile.controller.js";

export const profileRouter = express.Router();

profileRouter.get('/', profileController.renderUserProfile);
profileRouter.get('/branches', profileController.renderUserBranches);
profileRouter.get('/commits', profileController.renderUserCommits);

'use strict';

import { Controller } from "../types/types";

class AuthController {
  authCallback: Controller = async (req, res) => {
    const { user } = req;

    req.session.user = user;

    res.redirect('/profile');
  }

  authError: Controller = async (req, res) => {
    res.send('Error logging GitHub')
  }

  authSignout: Controller = async (req, res) => {
    try {
      req.session.destroy(() => {
        console.log('session was destroyed');
      });

      res.clearCookie('connect.sid');

      res.redirect('/');
    } catch (error) {
      res.status(400).send({ message: 'Failed signout' })
    }
  }
}

export const authController = new AuthController();

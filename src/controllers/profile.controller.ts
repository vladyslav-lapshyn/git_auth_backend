'use strict';

import axios from "axios";
import { Controller } from "../types/types";

class ProfileController {
  renderUserProfile: Controller = async (req, res) => {
    const { user } = req.session;

    try {
      const response = await axios.get('https://api.github.com/user/repos', {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        }
      });

      const repositories = response.data;

      const userInfo = {
        id: user.id,
        displayName: user.displayName,
        repositories,
      }

      res.render('profile', { user: userInfo });
    } catch (error) {
      console.log(error);
    }
  }

  renderUserBranches: Controller = async (req, res) => {
    const { user } = req.session;
    const { repo } = req.query;

    try {
      const response = await axios.get(
        `https://api.github.com/repos/${repo}/branches`, 
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          }
        }
      );

      const branches = response.data;

      res.render('branches', { branches, repo });
    } catch (error) {
      console.log(error);
    }
  }

  renderUserCommits: Controller = async (req, res) => {
    const { user } = req.session;
    const { repo, branch } = req.query;

    try {
      const response = await axios.get(
        `https://api.github.com/repos/${repo}/commits?sha=${branch}`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        },
      );

      const commits = response.data;

      const eventsResponse = await axios.get(
        `https://api.github.com/repos/${repo}/events`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        },
      );

      const pushEvents = eventsResponse.data.filter(event => (
        event.type === 'PushEvent' && event.payload.ref === `refs/heads/${branch}`
      ));

      res.render('commits', { commits, repo, branch, pushes: pushEvents });
    } catch (error) {
      console.error('errоr GitHub API:', error);
      res.send('Error GitHub API');
    }
  }
}

export const profileController = new ProfileController();

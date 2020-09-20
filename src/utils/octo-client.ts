import { Octokit } from '@octokit/rest';

export const restWithAuth = new Octokit({
  auth: `token ${process.env.REACT_APP_PERSONAL_TOKEN}`,
});

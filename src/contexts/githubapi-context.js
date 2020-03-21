import React, { createContext, useContext } from 'react';
import { GithubApi } from '../GitHubApi';

const GithubApiContext = createContext();

function GithubApiProvider(props) {
  const githubApi = new GithubApi();

  return <GithubApiContext.Provider value={githubApi} {...props} />
}

function useGithubApi() {
  const context = useContext(GithubApiContext);
  if (context === undefined) {
    throw new Error(`useGithubApi must be used within a GithubApiProvider`);
  }

  return context;
}

export { GithubApiProvider, useGithubApi }
// @flow

import React, { useState } from "react";

import HomeScreen from "./screens/home";
import SearchScreen from "./screens/search";
import { GithubApiProvider } from "./api/contexts/githubapi-context";

import "./App.css";

const getScreen = props => ({
  home: <HomeScreen {...props} />,
  search: <SearchScreen {...props} />
});

function App(props) {
  const [currentScreen, setScreenState] = useState("home");

  const changeScreen = (screen) => () => {
    setScreenState(screen);
  }

  return (
    <div className="app">
      <header className="app-header">
        <button type="button" onClick={changeScreen("home")}>
          Home
        </button>
        <button type="button" onClick={changeScreen("search")}>
          Search
        </button>
      </header>
      <GithubApiProvider>
        <div className="app-body">{getScreen(props)[currentScreen]}</div>
      </GithubApiProvider>
    </div>
  );
}

export default App;

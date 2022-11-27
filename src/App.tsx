import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HomePage } from "./pages/home/home";

import "./App.css";
import { GamePage } from "./pages/game/game";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/game" exact={true}>
            <GamePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

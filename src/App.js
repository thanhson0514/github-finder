import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import GithubState from "./components/context/github/GithubState";
import AlertState from "./components/context/alert/AlertState";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <NavBar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} axact />
              <Route path="/user/:login" component={User} axact />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./util/ErrorBoundary";
import Admin, { PrivateRoute } from "./admin/Admin";
import Login from "./admin/Login";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

// TODO: Set up SSR rendering of routes

const Lukeworks = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Portfolio />
          </Route>
        </Switch>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Lukeworks;

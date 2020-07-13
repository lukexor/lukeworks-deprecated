import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Admin, { PrivateRoute } from "./admin/Admin";
import Login from "./admin/Login";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

interface IAdminContext {
  loggedInUser?: string;
}

const AdminContext = React.createContext({});

// TODO: Set up SSR rendering of routes

const Lukeworks = () => {
  return (
    <BrowserRouter>
      <AdminContext.Provider value={{}}>
        <HelmetProvider>
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
        </HelmetProvider>
      </AdminContext.Provider>
    </BrowserRouter>
  );
};

export default Lukeworks;
export { AdminContext };
export type { IAdminContext };

import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const loggedInUser = null;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};

// TODO: Admin components: Login, Post, User, Account, Category, Tag, Comment

const Admin = () => {
  return <h1>Admin</h1>;
};

export default Admin;
export { PrivateRoute };

import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AdminContext, IAdminContext } from "../Lukeworks";

const isAuthenticated = (context: IAdminContext) => {
  return context.loggedInUser;
};

interface RouteProps {
  children?: JSX.Element | JSX.Element[];
  [propName: string]: any;
}

const PrivateRoute = ({ children, ...rest }: RouteProps) => {
  const context = useContext(AdminContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated(context) ? (
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

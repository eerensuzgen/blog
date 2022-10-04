import { Route, Redirect } from "react-router-dom";
import React from "react";
import { loginKey, loginValue } from "./auth";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (sessionStorage.getItem(loginKey) == loginValue) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/admin",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

import React from "react";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line arrow-body-style, react/function-component-definition
const ProtectedRouteElement = ({ elemnt: Component, ...props }) => {
  return props.loggedIn ? <Component {...props} /> : <Navigate to="/signin" replace />;
};

export default ProtectedRouteElement;

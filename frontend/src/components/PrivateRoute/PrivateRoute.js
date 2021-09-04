import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { PUBLIC } from "../../constants/routes";

import AuthContext from "../../context/auth-context";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route {...rest}>
      {isAuthenticated ? children : <Redirect to={PUBLIC.SIGNIN} />}
    </Route>
  );
};

export default PrivateRoute;

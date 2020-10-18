import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { validateUserAction } from "../../redux/actions/authAction";

const Rutas = ({component:Component, ...props }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const loading = useSelector((state) => state.auth.loading);
  useEffect(() => {
    dispatch(validateUserAction());
    // eslint-disable-next-line
  }, []);

  return (
    <Route
      {...props}
      render={(props) =>
        !authenticated && !loading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default Rutas;

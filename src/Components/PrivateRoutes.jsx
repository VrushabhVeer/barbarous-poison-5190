import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import React from "react";
import Home from "../PeopleOne/Home";

function PrivateRoutes() {
  const { state } = useContext(AppContext);
  if (!state.isAuth) {
    return <Navigate to="/register" />;
  } else {
    return <Home />;
  }
}

export default PrivateRoutes;

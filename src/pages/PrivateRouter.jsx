import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const userAuth = true;

  return <div>{userAuth ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default PrivateRouter;

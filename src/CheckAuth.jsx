import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ user, children }) => {
  const location = useLocation();
  console.log("PATH", location.pathname);
  console.log("role", user);

  // user Router Handle

  if (user === "user" && location.pathname.startsWith("/admin")) {
    return <Navigate to="/user/deskboard" replace />;
  }

  // Admin router handle

  if (user !== "admin" && location.pathname.startsWith("/admin")) {
    return <Navigate to="/UnAuth-page" replace />;
  }
  if (user === "admin" && location.pathname.startsWith("/user")) {
    return <Navigate to="/admin/deskboard" replace />;
  }

  return children;
};

export default CheckAuth;

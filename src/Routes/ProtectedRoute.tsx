import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props: any) => {
  const token = localStorage.getItem("token");
  console.log("protected routes", token);

  if (token === undefined || token == null) {
    return <Navigate to="/login"></Navigate>;
  }

  return props?.children;
};

export default ProtectedRoute;

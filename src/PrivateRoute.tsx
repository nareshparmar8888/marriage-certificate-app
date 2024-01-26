import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const authCredential = sessionStorage.getItem("token");
  const [validToken, setValidToken] = useState(true);

  useEffect(() => {
    if (!authCredential) {
      setValidToken(false);
    }
  }, []);

  return <>{!validToken ? <Navigate to={"/login"} /> : children}</>;
};

export default PrivateRoute;

import token from "@/libs/token";
import ProtectedRoutes from "./ProtectedRoutes";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RouterComponent = () => {
  const { pathname } = useLocation();
  const [tokenState, setTokenState] = useState(() => token.getToken("token"));

  useEffect(() => {
    setTokenState(token.getToken("token"));
  }, [pathname]);

  return <>{tokenState ? <ProtectedRoutes /> : <UnauthenticatedRoute />}</>;
};

export default RouterComponent;

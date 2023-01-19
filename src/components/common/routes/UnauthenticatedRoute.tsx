import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "../../../pages/Auth";

const UnauthenticatedRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Navigate replace to="/login" />}></Route>
    </Routes>
  );
};

export default UnauthenticatedRoute;

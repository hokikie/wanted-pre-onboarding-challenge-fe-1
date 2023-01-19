import TodoDetail from "@/components/todo/TodoDetail";
import Home from "@/pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="todos/:id" element={<TodoDetail />} />
      <Route path="*" element={<Navigate replace to="/" />}></Route>
    </Routes>
  );
};

export default ProtectedRoutes;

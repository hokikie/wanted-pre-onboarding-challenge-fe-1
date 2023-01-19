import { Link, Outlet } from "react-router-dom";
const Auth = () => {
  return (
    <>
      <Link to="login">
        <p className="h-screen flex justify-center items-center text-4xl text-slate-800 hover:text-indigo-500 hover:underline decoration-wavy	">
          눌러서 시작하기
        </p>
      </Link>
      <Outlet />
    </>
  );
};

export default Auth;

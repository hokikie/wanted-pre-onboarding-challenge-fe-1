import token from "@/libs/token";
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const navigator = useNavigate();
  const onSignout = () => {
    navigator(0);
    token.removeToken("token");
  };
  return (
    <button
      className="flex justify-end ml-auto text-xs text-indigo-500"
      onClick={onSignout}
    >
      로그아웃
    </button>
  );
};

export default Signout;

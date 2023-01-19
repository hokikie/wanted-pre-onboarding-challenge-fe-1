import LoignForm from "./LoginForm";
import useLoginMutation from "@/hooks/mutation/auth/useLoginMutation";
import { LoginRequest } from "@/types/user/authDTO";

const Login = () => {
  const { mutate: login } = useLoginMutation();
  const handleLoginSubmit = (loginData: LoginRequest) => {
    login(loginData);
  };
  return (
    <div>
      <LoignForm onSubmit={handleLoginSubmit} buttonName="로그인" />
    </div>
  );
};

export default Login;

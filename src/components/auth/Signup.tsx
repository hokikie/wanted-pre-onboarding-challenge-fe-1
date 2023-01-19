import useSignupMutation from "@/hooks/mutation/auth/useSignupMutation";
import { AuthRequest } from "@/types/user/authDTO";
import SignupForm from "./SignupForm";

const Signup = () => {
  const { mutate: signup } = useSignupMutation();
  const handleSignupSubmit = (signupData: AuthRequest) => {
    signup(signupData);
  };
  return (
    <div className="">
      <SignupForm
        onSubmit={handleSignupSubmit}
        buttonName="가입하기"
      ></SignupForm>
    </div>
  );
};

export default Signup;

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginRequest } from "@/types/user/authDTO";
import { loginScheme } from "@/utils/yup/yup";
import { Link } from "react-router-dom";
import Input, { SubmitForm } from "../common/input/index";
import MainButton from "../common/button";
import Label from "../common/Label";
import { ErrorFeedback } from "../common/error";

interface LoginFormProps {
  onSubmit: (data: LoginRequest) => void;
  buttonName: string;
}
const LoignForm = ({ onSubmit, buttonName }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    mode: "onBlur",
    resolver: yupResolver(loginScheme),
  });
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <form
        className="flex flex-col gap-2 bg-white shadow-md border rounded-lg px-8 py-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label htmlFor="email">Email</Label>
        <Input placeholder="your email" type="text" {...register("email")} />
        {errors?.email && (
          <ErrorFeedback>{errors?.email.message}</ErrorFeedback>
        )}
        <Label htmlFor="password">Password</Label>
        <Input type="password" {...register("password")} />
        {errors?.password && (
          <ErrorFeedback>{errors?.password.message}</ErrorFeedback>
        )}

        <div className="flex items-center justify-between py-2">
          <SubmitForm type="submit" value={buttonName} />
          <Link
            to="/signup"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoignForm;

import { AuthRequest } from "@/types/user/authDTO";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupScheme } from "@/utils/yup/yup";
import Label from "../common/Label/index";
import { Input, SubmitForm } from "../common/input/index";
import { ErrorFeedback } from "../common/error/index";
interface SignupProps {
  onSubmit: (data: AuthRequest) => void;
  buttonName: string;
}
const SignupForm = ({ onSubmit, buttonName }: SignupProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AuthRequest>({
    mode: "onBlur",
    resolver: yupResolver(signupScheme),
  });

  return (
    <div className="h-[100vh] flex justify-center items-center ">
      <form
        className="flex flex-col gap-2 bg-white shadow-md border rounded-lg px-8 py-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Label htmlFor="email">Email</Label>
        <Input type="email" {...register("email")} />
        {errors?.email && (
          <ErrorFeedback>{errors?.email.message}</ErrorFeedback>
        )}
        <Label htmlFor="password">Password</Label>
        <Input type="password" {...register("password")} />
        {errors?.email && (
          <ErrorFeedback>{errors?.password?.message}</ErrorFeedback>
        )}
        <Label htmlFor="password">Password Check</Label>
        <Input type="password" {...register("passwordConfirm")} />
        {errors?.email && (
          <ErrorFeedback>{errors?.passwordConfirm?.message}</ErrorFeedback>
        )}
        <SubmitForm className="" type="submit" value={buttonName} />
      </form>
    </div>
  );
};

export default SignupForm;

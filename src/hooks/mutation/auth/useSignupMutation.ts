import api from "@/libs/axios/api";
import token from "@/libs/token";
import { AuthRequest, AuthResponse } from "@/types/user/authDTO";
import { useMutation } from "@tanstack/react-query";

const fetcher = (signupReq: AuthRequest) =>
  api
    .post<AuthResponse>("/users/create", signupReq)
    .then(({ data }) => {
      token.setToken("token", data.token);
      window.location.replace("/");
    })
    .catch(console.error);

const useSignupMutation = () => {
  return useMutation(fetcher);
};

export default useSignupMutation;

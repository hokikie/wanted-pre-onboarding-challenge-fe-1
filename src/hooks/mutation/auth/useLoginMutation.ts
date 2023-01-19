import api from "@/libs/axios/api";
import token from "@/libs/token";
import { AuthResponse, LoginRequest } from "@/types/user/authDTO";
import { useMutation } from "@tanstack/react-query";

const fetcher = (loginReq: LoginRequest) =>
  api
    .post<AuthResponse>("/users/login", loginReq)
    .then(({ data }) => {
      token.setToken("token", data.token);
      window.location.replace("/");
    })
    .catch(console.error);

const useLoginMutation = () => {
  return useMutation(fetcher);
};

export default useLoginMutation;

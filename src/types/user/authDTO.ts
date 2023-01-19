export interface AuthRequest {
  email: string;
  password: string;
  passwordConfirm: string;
}
export interface AuthResponse {
  messege: string;
  token: string;
}

export type LoginRequest = Pick<AuthRequest, "email" | "password">;

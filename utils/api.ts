import axiosClient from "./axiosClient";

interface RegisterRequestModel {
  username: string;
  email: string;
  password: string;
}

interface LoginRequestModel {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const registerUser = async (data: RegisterRequestModel) => {
  const response = await axiosClient.post("/api/auth/register", data);
  return response.data;
};

export const loginUser = async (
  data: LoginRequestModel
): Promise<LoginResponse> => {
  const response = await axiosClient.post("/api/auth/login", data);
  return response.data;
};

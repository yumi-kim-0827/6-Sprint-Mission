import { AxiosError } from "axios";
import { instance } from "./Axios";

type LoginData = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

export const LoginUser = async (
  data: LoginData
): Promise<LoginResponse | undefined> => {
  try {
    const response = await instance.post<LoginResponse>(
      "/auth/signIn",
      JSON.stringify(data)
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("로그인 실패 (Axios error):", error.message);
    } else {
      console.error("로그인 실패 (Unknown error):", error);
    }
    return undefined;
  }
};

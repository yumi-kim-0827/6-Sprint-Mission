import { AxiosError } from "axios";
import { instance } from "./Axios";

interface SignUpData {
  email: string;
  password: string;
  passwordConfirmation: string;
  nickname: string;
}

interface SignUpResponse {
  token: string;
}

export const SignUpUser = async (
  data: SignUpData
): Promise<SignUpResponse | undefined> => {
  try {
    const { email, password, passwordConfirmation, nickname } = data;
    const response = await instance.post<SignUpResponse>(
      "/auth/signup",
      JSON.stringify({ email, password, passwordConfirmation, nickname })
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("회원가입 실패 (Axios error):", error.message);
    } else {
      console.error("회원가입 실패 (Unknown error):", error);
    }
    return undefined;
  }
};

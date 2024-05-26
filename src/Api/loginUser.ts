import { AxiosError } from "axios";
import { instance } from "./Axios";

type LoginData = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

async function fetchData<T>(
  url: string,
  data?: unknown
): Promise<T | undefined> {
  try {
    const response = await instance.post<T>(url, data && JSON.stringify(data));
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("요청 실패 (Axios error):", error.message);
    } else {
      console.error("요청 실패 (Unknown error):", error);
    }
    return undefined;
  }
}

export const loginUser = (
  data: LoginData
): Promise<LoginResponse | undefined> => {
  return fetchData<LoginResponse>("/auth/signIn", data);
};

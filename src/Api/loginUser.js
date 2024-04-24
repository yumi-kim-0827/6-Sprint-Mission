import { instance } from "./Axios";

export const LoginUser = async (data) => {
  try {
    const response = await instance.post(
      "/auth/signIn",
      JSON.stringify(data),
      {}
    );
    const { accessToken } = response.data;
    localStorage.setItem("accessToken", accessToken);
    window.location.href = "/items";
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};

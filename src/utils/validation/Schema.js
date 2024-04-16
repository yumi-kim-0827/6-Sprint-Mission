import * as yup from "yup";
import Messages from "./Message";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required(Messages.EMAIL_REQUIRED)
    .matches(/^\w+@\w+\.com$/, Messages.INVALID_EMAIL),
  password: yup
    .string()
    .required(Messages.PASSWORD_REQUIRED)
    .min(8, Messages.INVALID_PASSWORD), // 최소 8자리 이상 API 테스트용이라 8자리로만 해놓음
});

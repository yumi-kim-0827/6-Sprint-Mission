export function noneEmailCheck(value) {
  return value.length >= 1;
}

export function failEmailCheck(value) {
  return /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/.test(value);
}

export function nonePasswordCheck(value) {
  return value.length >= 1;
}

export function failPasswordCheck(value) {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    value
  );
}

export function noneNameCheck(value) {
  return value.length >= 1;
}

export function samePasswordCheck(password1, password2) {
  if (password1 === password2) {
    return true;
  }
  return false;
}

export const errorMessage = {
  none_email: "이메일을 입력해주세요.",
  fail_email: "잘못된 이메일 형식입니다.",
  none_name: "닉네임을 입력해주세요.",
  none_password: "비밀번호를 입력해주세요.",
  fail_password:
    "비밀번호는 8자 이상이어야 하며, 숫자/대문자/소문자/특수문자를 모두 포함해야 합니다.",
  same_password: "비밀번호가 일치하지 않습니다.",
};

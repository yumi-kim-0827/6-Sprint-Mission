import React from "react";
import logo from "../assets/logo.svg";
import logo_words from "../assets/logo_words.svg";

export function Logo() {
  return <img src={logo} className="logo" alt="판다마켓 로고" />;
}
export function LogoWords() {
  return <img src={logo_words} className="logo_words" alt="판다마켓 로고" />;
}

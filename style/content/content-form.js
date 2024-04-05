import { createDescriptionContent } from "../common/common.js";

/**
 * description을 가진 invalid처리된 p태그 생성
 * @param {string} description
 * @returns {Object} Node
 */
const createInvalidDescriptionContent = (description) => {
  const newContent = createDescriptionContent("p", description);
  newContent.classList.add("description-invalid");
  return newContent;
};

/**
 * 해당 node에 criteria에 맞춘 Event를 달아준다.
 * @param {Object} node
 * @param {string} description
 * @param {function} criteria
 */
const invalidInputEventHandler = (node, description, criteria = () => true) => {
  const newContent = createInvalidDescriptionContent(description);
  node.addEventListener("focusin", (event) => {
    newContent.remove();
  });
  node.addEventListener("focusout", (event) => {
    console.log("hi");
    criteria(event.target)&&!node.checkValidity() ? node.after(newContent) : newContent.remove();
  });
};

export const invalidEmailHandler = () => {
  const emailNode = document.querySelector(".content-form__input--email");
  invalidInputEventHandler(emailNode, "잘못된 이메일입니다");
};

export const invalidPasswordHandler = () =>{
  const passwordNode = document.querySelector(".content-form__input--password");
  invalidInputEventHandler(passwordNode,"비밀번호를 8자 이상 입력해주세요")
}
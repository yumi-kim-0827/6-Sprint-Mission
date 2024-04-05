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
 * description이 없을 경우 조건에 맞는 input 색깔만 바뀜
 * criteria가 없을 경우 html 기본 조건에만 맞춤
 * @param {Object} node
 * @param {string} description
 * @param {function} criteria
 */
const invalidInputEventHandler = (
  node,
  description = "",
  criteria = () => true
) => {
  let newContent;
  description &&
    (() => (newContent = createInvalidDescriptionContent(description)))();
  node.addEventListener("focusin", (event) => {
    (() => {
      description && newContent.remove();
      node.classList.remove("content-form__input--invalid");
      node.classList.remove("content-form__input--valid");
    })();
  });
  node.addEventListener("focusout", (event) => {
    (criteria() && node.checkValidity()) || node.value === ""
      ? (() => {
          description && newContent.remove();
          node.classList.remove("content-form__input--invalid");
          node.classList.add("content-form__input--valid");
        })()
      : (() => {
          description && node.after(newContent);
          node.classList.remove("content-form__input--valid");
          node.classList.add("content-form__input--invalid");
        })();
  });
};

export const invalidEmailHandler = () => {
  const emailNode = document.querySelector(".content-form__input--email");
  invalidInputEventHandler(emailNode, "잘못된 이메일입니다");
};

export const invalidPasswordHandler = () => {
  const passwordNode = document.querySelector(".content-form__input--password");
  invalidInputEventHandler(passwordNode, "비밀번호를 8자 이상 입력해주세요");
};

export const invalidPasswordAgainHandler = () => {
  const passwordAgainNode = document.querySelector(
    ".content-form__input--password-again"
  );

  const customValidityTest = () => {
    const passwordNode = document.querySelector(
      ".content-form__input--password"
    );
    return passwordNode.value === passwordAgainNode.value;
  };
  invalidInputEventHandler(
    passwordAgainNode,
    "비밀번호가 일치하지 않습니다.",
    customValidityTest
  );
};

export const invalidNickNameHandler = () => {
  const nickNameNode = document.querySelector(".content-form__input--nickname");
  invalidInputEventHandler(nickNameNode);
};
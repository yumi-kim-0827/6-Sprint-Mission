// input안에 있는거 버튼 이미지 path 바꾸는 eventHandler
export function togglePasswordVision() {
  const visionButton = document.querySelectorAll(".content-form__icon");
  visionButton.forEach((v) => {
    v.addEventListener("click", (event) => {
      v.getAttribute("src") === "image/signin-page/btn_visibility_on_24px.png"
        ? (() => {
            event.target.setAttribute(
              "src",
              "image/signin-page/btn_visibility_off_24px.png"
            );

            event.target.parentElement.firstElementChild.setAttribute(
              "type",
              "text"
            );
          })()
        : (() => {
            event.target.setAttribute(
              "src",
              "image/signin-page/btn_visibility_on_24px.png"
            );

            event.target.parentElement.firstElementChild.setAttribute(
              "type",
              "password"
            );
          })();
    });
  });
}

function toggleVisible(e) {
  const element = e.target;
  element.classList.toggle("show");

  const input = element.parentElement.querySelector("input");
  if (input.type === "password") input.type = "text";
  else input.type = "password";
}

const visibleButtons = document.querySelectorAll(".form-input-icon");

for (const visibleButton of visibleButtons) {
  visibleButton.addEventListener("click", toggleVisible);
}

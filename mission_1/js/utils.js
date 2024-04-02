export const showError = ($msgElement, $targetInput, message) => {
  $msgElement.textContent = message;
  $msgElement.classList.add("show");
  $targetInput.classList.add("error");
  return false;
};

export const hideError = ($msgElement, $targetInput) => {
  $msgElement.classList.remove("show");
  $targetInput.classList.remove("error");
  return true;
};

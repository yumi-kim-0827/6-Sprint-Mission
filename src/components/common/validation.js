export function registerValidation({ productName, productIntro, productPrice, productTag }) {
  if (productName !== "" && productIntro !== "" && productPrice !== "" && productTag.length !== 0) {
    return false;
  } else {
    return true;
  }
}

export function commentValidation(comment) {
  if (comment !== "") {
    return false;
  } else {
    return true;
  }
}

interface registerValidationValues {
  productName: string;
  productIntro: string;
  productPrice: string;
  productTag: string[];
}

export function registerValidation({ productName, productIntro, productPrice, productTag }: registerValidationValues) {
  if (productName !== "" && productIntro !== "" && productPrice !== "" && productTag.length !== 0) {
    return false;
  } else {
    return true;
  }
}

export function commentValidation(comment: string) {
  if (comment !== "") {
    return false;
  } else {
    return true;
  }
}

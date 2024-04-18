const isEmpty = value => value.trim() === "";

export const allValid = ({
  setIsButtonEnabled,
  productName,
  productDescription,
  price,
  tags,
}) => {
  const allFieldsFilled =
    !isEmpty(productName) &&
    !isEmpty(productDescription) &&
    !isEmpty(price) &&
    tags.length > 0;

  setIsButtonEnabled(!allFieldsFilled);
};

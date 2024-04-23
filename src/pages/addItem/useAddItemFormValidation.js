import { useEffect, useState } from "react";

export const useAddItemFormValidation = ({
  productName,
  productDescription,
  price,
  tags,
}) => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const isEmpty = value => value.trim() === "";
    const isAllValid =
      !isEmpty(productName) &&
      !isEmpty(productDescription) &&
      !isEmpty(price) &&
      tags.length > 0;

    setIsButtonEnabled(isAllValid);
  }, [productName, productDescription, price, tags]);

  return isButtonEnabled;
};

import { useCallback, useEffect, useState } from "react";

export const useValidation = ({
  productName,
  productDescription,
  price,
  tags,
}) => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const isAllValid = useCallback(() => {
    const isEmpty = value => value.trim() === "";
    return (
      !isEmpty(productName) &&
      !isEmpty(productDescription) &&
      !isEmpty(price) &&
      tags.length > 0
    );
  }, [productName, productDescription, price, tags]);

  useEffect(() => {
    setIsButtonEnabled(isAllValid());
  }, [isAllValid]);

  return isButtonEnabled;
};

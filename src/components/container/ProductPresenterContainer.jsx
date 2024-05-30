import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProduct } from "../../api/api";
import ProductPresenter from "../ui/ProductPresenter";

function ProductPresenterContainer() {
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [product, setProduct] = useState();

  const loadProduct = async () => {
    try {
      const response = await getProduct(id);
      setProduct(response);
    } catch (error) {
      if (error.name === "TypeError") {
        setErrorMessage("네트워크를 확인하세요");
      } else if (error.name === "HttpError") {
        setErrorMessage(error.status);
      }
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return !errorMessage && <ProductPresenter product={product} />;
}

export default ProductPresenterContainer;

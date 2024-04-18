export const createFormData = ({
  productName,
  productDescription,
  price,
  tags,
  file,
}) => {
  const formData = new FormData();
  formData.append("productName", productName);
  formData.append("productDescription", productDescription);
  formData.append("price", price);
  formData.append("tags", tags?.join(",") || "");
  if (file) {
    formData.append("productImage", file);
  }
};

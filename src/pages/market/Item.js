import { useParams } from "react-router-dom";

export default function ItemPage() {
  const params = useParams();
  console.log(params.productId);

  return <></>;
}

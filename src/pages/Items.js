import { useQuery } from "react-query";
import axios from "axios";
import RankedItems from "../components/RankedItems";
import AllItemsList from "../components/AllItemsList";

const fetchProducts = async () => {
  const response = await axios.get(
    "https://panda-market-api.vercel.app/products"
  );

  return response.data;
};

export default function Items() {
  const { data, isLoading, isError, error } = useQuery("posts", fetchProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error : {error.message}</div>;
  }

  return (
    <div className="container mx-auto my-6">
      <RankedItems data={data} />
      <AllItemsList data={data} />
    </div>
  );
}

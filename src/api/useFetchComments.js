import axios from "axios";
import { useQuery } from "react-query";

// axios와 useQuery를 사용하여 fetch하였습니다.
export default function useFetchItems(paramsOptions) {
  const { productId, limit } = paramsOptions;

  const fetchItems = async () => {
    const response = await axios.get(
      `https://panda-market-api.vercel.app/products/${productId}/comments`,
      {
        params: {
          limit,
        },
      },
    );

    return response.data;
  };

  return useQuery(["products", limit], fetchItems);
}

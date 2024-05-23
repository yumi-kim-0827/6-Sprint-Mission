import axios from "axios";
import { useQuery } from "react-query";

// axios와 useQuery를 사용하여 fetch하였습니다.
export default function useFetchItems(paramsOptions: {page: number, pageSize:number, orderBy: string}) {
  const { page, pageSize, orderBy } = paramsOptions;

  const fetchItems = async () => {
    const response = await axios.get(
      "https://panda-market-api.vercel.app/products",
      {
        params: {
          page,
          pageSize,
          orderBy,
        },
      },
    );

    return response.data;
  };

  return useQuery(["products", page, pageSize, orderBy], fetchItems);
}

import { useQuery } from "react-query";
import axios from "axios";

import RankedItems from "../components/RankedItems";
import AllItemsList from "../components/AllItemsList";
import Navbar from "../components/Navbar";
import useDeviceSize from "../utils/useDeviceSize";

const fetchProducts = async () => {
  const response = await axios.get(
    "https://panda-market-api.vercel.app/products",
  );

  return response.data;
};

export default function Items() {
  const deviceSize = useDeviceSize();
  const { data, isLoading, isError, error } = useQuery("posts", fetchProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error : {error.message}</div>;
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="mx-4 my-6 flex flex-col items-center">
          <RankedItems data={data} deviceSize={deviceSize} />
          <AllItemsList data={data} deviceSize={deviceSize} />
        </div>
      </main>
    </>
  );
}

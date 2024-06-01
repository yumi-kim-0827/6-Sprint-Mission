import { useState, useEffect } from "react";

type GetAPIFunction<T> = () => Promise<T>;

const useFetch = <T>(getAPI: GetAPIFunction<T>, initialValue: T) => {
  // getAPI : getAPI 함수, initialValue : response JSON 데이터 기본값
  const [data, setData] = useState<T>(initialValue);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAPI();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // eslint-disable-next-line
  }, []);

  return data; // data : response JSON
};

export default useFetch;

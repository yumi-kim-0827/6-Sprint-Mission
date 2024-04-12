import { useEffect, useState } from "react";

export default function useDataFetching(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.list);
    };

    fetchData();
  }, [url]);

  return [data, setData];
}

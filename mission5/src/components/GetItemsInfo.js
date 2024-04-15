// function GetItemsInfo() {
//   fetch("https://panda-market-api.vercel.app/products")
//     .then((res) => res.text())
//     .then((result) => {
//       const data = JSON.parse(result);
//       console.log(data.length);
//       data.forEach((info) => {
//         console.log(info.name)
//       });
//     });
// }

import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchData;

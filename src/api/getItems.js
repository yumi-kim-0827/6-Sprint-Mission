import axiosInstance from "./axios";

const getItems = async (url) => {
  try {
    const res = await axiosInstance.get(url, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export default getItems;

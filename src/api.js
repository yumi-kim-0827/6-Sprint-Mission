const BASE_URL = "https://panda-market-api.vercel.app";

function fetcher(order, page, pageSize) {
  let url = BASE_URL + "/products";
  if ((order, page, pageSize !== "")) {
    url += "?";

    if (order !== "") url += `orderBy=${order}`;
    if (url[-1] !== "?") url += "&";
    if (page !== "") url += `page=${page}`;
    if (url[-1] !== "?") url += "&";
    if (pageSize !== "") url += `pageSize=${pageSize}`;
  }
  return url;
}

export async function getItems({ order, page = "1", pageSize = "10" }) {
  try {
    const url = fetcher(order, page, pageSize);
    const response = await fetch(url);
    if (response.ok) {
      const body = await response.json();
      return body;
    } else {
      console.log("Promise resolved but HTTP status failed");
    }
  } catch {
    console.log("Promise rejected");
  }
}

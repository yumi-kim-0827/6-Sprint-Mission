import { BreakPoint, OrderBy } from "../../types/articleTypes";

const BASEURL = "https://panda-market-api.vercel.app";

export async function getArticle(orderBy: OrderBy, breakPoint: BreakPoint) {
  let pageSize = 0;
  if (breakPoint.isDesktop) pageSize = 3;
  if (breakPoint.isTablet) pageSize = 2;
  if (breakPoint.isMobile) pageSize = 1;
  try {
    const response = await fetch(
      `${BASEURL}/articles?pageSize=${pageSize}&orderBy=${orderBy}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    throw error;
  }
}

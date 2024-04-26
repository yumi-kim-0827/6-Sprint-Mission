export async function getComments(productId) {
  try {
    const response = await fetch(`https://panda-market-api.vercel.app/products/${productId}/comments?limit=10`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const comments = await response.json();
    return Array.isArray(comments) ? comments : [];
    //return comments;
  } catch (error) {
    console.error("Failed to fetch comments:", error);
    throw error;
  }
}
interface Entity {
  id: string;
  name: string;
}

interface Product extends Entity {
  price: number;
}

interface ProductDetail extends Entity {
  description: string;
}

interface Comment extends Entity {
  productId: string;
  content: string;
}

interface ProductResponse {
  list: Product[];
  totalCount: number;
}

export async function getProducts(params: {
  orderBy: string;
  page: number;
  pageSize: number;
}): Promise<ProductResponse> {
  const query = new URLSearchParams({
    orderBy: params.orderBy,
    page: params.page.toString(),
    pageSize: params.pageSize.toString(),
  }).toString();

  try {
    const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
}

export async function getProductDetail(productId: string): Promise<ProductDetail> {
  if (!productId) {
    throw new Error('Invalid product ID');
  }

  try {
    const response = await fetch(`https://panda-market-api.vercel.app/products/${productId}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error('Failed to fetch product detail:', error);
    throw error;
  }
}

export async function getProductComments(params: {
  productId: string;
  params?: Record<string, any>;
}): Promise<Comment[]> {
  const { productId, params: queryParams } = params;

  if (!productId) {
    throw new Error('Invalid product ID');
  }

  try {
    const query = new URLSearchParams(queryParams).toString();
    const response = await fetch(`https://panda-market-api.vercel.app/products/${productId}/comments?${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error('Failed to fetch product comments:', error);
    throw error;
  }
}

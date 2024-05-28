import instance from './Axios';

interface Product {
	id: string;
	images: string;
	name: string;
	price: number;
	favoriteCount: number;
}

interface GetProductsParams {
	orderBy?: string;
	page?: number;
	pageSize?: number;
}

interface GetProductsResponse {
	list: Product[];
}

interface GetCommentResponse {
	comments: Comment[];
}

export async function getProducts({
	orderBy = 'recent',
	page = 1,
	pageSize = 10,
}: GetProductsParams): Promise<GetProductsResponse> {
	const query = `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;
	try {
		const response = await instance.get(`/products?${query}`);
		return response.data;
	} catch (error) {
		console.error('API 오류 \n', error);
		return { list: [] }; // 오류 발생 시 기본 값 반환
	}
}

export async function getProductId(productId: string): Promise<Product | null> {
	try {
		const response = await instance.get(`/products/${productId}`);
		return response.data;
	} catch (error) {
		console.error('API 오류 \n', error);
		return null; // 오류 발생 시 기본 값 반환
	}
}

export async function getComment(productId: string, limit = 3): Promise<GetCommentResponse> {
	try {
		const response = await instance.get(`/products/${productId}/comments?limit=${limit}`);
		return response.data;
	} catch (error) {
		console.error('API 오류 \n', error);
		return { comments: [] }; // 오류 발생 시 기본 값 반환
	}
}

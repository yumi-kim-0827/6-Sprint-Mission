import instance from './Axios';

export async function getProducts({ orderBy = 'recent', page = 1, pageSize = 10 }) {
	const query = `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;
	try {
		const response = await instance.get(`/products?${query}`);
		const body = response.data;
		return body;
	} catch (error) {
		console.error('API 오류 \n', error);
		return { list: [] }; // 오류 발생 시 기본 값 반환
	}
}

export async function getProductId(productId: string | undefined) {
	try {
		const response = await instance.get(`/products/${productId}`);
		return response.data;
	} catch (error) {
		console.error('API 오류 \n', error);
		return null; // 오류 발생 시 기본 값 반환
	}
}

export async function getComment(productId: string | undefined, limit = 3) {
	try {
		const response = await instance.get(`/products/${productId}/comments?limit=${limit}`);
		return response.data;
	} catch (error) {
		console.error('API 오류 \n', error);
		return { comments: [] }; // 오류 발생 시 기본 값 반환
	}
}

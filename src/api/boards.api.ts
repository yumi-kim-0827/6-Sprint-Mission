import instance from './Axios';

export async function getBoards({ orderBy = 'recent', page = 1, pageSize = 10 }) {
	const query = `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;
	try {
		const response = await instance.get(`/articles?${query}`);

		const body = response.data;

		return body;
	} catch (error) {
		console.error('API 오류 \n', error);
	}
}

export async function getBoardId(boardId: string | string[]) {
	const response = await instance.get(`/articles/${boardId}`);
	const body = response.data;

	return body;
}

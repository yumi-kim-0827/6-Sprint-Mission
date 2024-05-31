import instance from '@/api/Axios';

interface GetBoardsQuery {
	orderBy?: string;
	page?: number;
	pageSize?: number;
	search?: string;
}

interface WriterType {
	id: number;
	nickname: string;
}

interface BoardType {
	id: number;
	content: string;
	image: string;
	likeCount: number;
	createdAt: string;
	updatedAt: string;
	writer: WriterType;
}

interface GetBoardsResponse {
	list: BoardType[];
}

export async function getBoards({
	orderBy = 'recent',
	page = 1,
	pageSize = 10,
	search = '',
}: GetBoardsQuery): Promise<GetBoardsResponse> {
	const query = search
		? `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}&keyword=${search}`
		: `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;

	try {
		const response = await instance.get(`/articles?${query}`);
		return response.data as GetBoardsResponse;
	} catch (error) {
		console.error('API 오류 \n', error);
		return { list: [] };
	}
}

export async function getBoardId(boardId: string | string[]): Promise<BoardType | null> {
	try {
		const response = await instance.get(`/articles/${boardId}`);
		return response.data as BoardType;
	} catch (error) {
		console.error('API 오류 \n', error);
		return null;
	}
}

// @see https://panda-market-api.vercel.app/docs/#/
export default class API
{
	static async get_products({ page = 1, page_size = 10, order_by = "recent" })
	{
		try
		{
			const response = await fetch(`https://panda-market-api.vercel.app/products?${new URLSearchParams({ page: page, pageSize: page_size, orderBy: order_by }).toString()}`);
			
			return await response.json();
		}
		catch (error)
		{
			console.log(error);
		}
	}
}

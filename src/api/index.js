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

	static get ["products/{productId}"]()
	{
		return class
		{
			static async GET({ productId = 1 })
			{
				return await (await fetch(`https://panda-market-api.vercel.app/products/${productId}`)).json();
			}
		}
	}

	static get ["products/{productId}/comments"]()
	{
		return class
		{
			static async GET({ productId = 1, limit = 10 })
			{
				return await (await fetch(`https://panda-market-api.vercel.app/products/${productId}/comments?${new URLSearchParams({ limit: limit }).toString()}`)).json();
			}
		}
	}
}

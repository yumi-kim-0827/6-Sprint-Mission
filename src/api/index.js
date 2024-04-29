// @see https://panda-market-api.vercel.app/docs/#/
export default class API
{
	static get ["products?"]()
	{
		return class
		{
			static async GET(parms = {}, query = { page: 1, pageSize: 10, orderBy: "recent" })
			{
				return await (await fetch(`https://panda-market-api.vercel.app/products?${new URLSearchParams(query).toString()}`)).json();
			}
		}
	}

	static get ["products/{productId}"]()
	{
		return class
		{
			static async GET(parms = { productId: 1 }, query = {})
			{
				return await (await fetch(`https://panda-market-api.vercel.app/products/${parms.productId}`)).json();
			}
		}
	}

	static get ["products/{productId}/comments?"]()
	{
		return class
		{
			static async GET(parms = { productId: 1 }, query = { limit: 10 })
			{
				return await (await fetch(`https://panda-market-api.vercel.app/products/${parms.productId}/comments?${new URLSearchParams(query).toString()}`)).json();
			}
		}
	}
}

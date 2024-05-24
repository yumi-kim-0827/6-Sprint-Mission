abstract class Request
{
	protected async _GET(url: string)
	{
		return await (await fetch(url, { method: "GET" })).json();
	}

	protected async _PUT(url: string, body: object)
	{
		return await (await fetch(url, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })).json();
	}

	protected async _POST(url: string, body: object)
	{
		return await (await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })).json();
	}

	protected async _DELETE(url: string)
	{
		return await (await fetch(url, { method: "DELETE" })).json();
	}
}

/** @see https://panda-market-api.vercel.app/docs/#/ */
export default class API
{
	private static query(object: Record<string, unknown>)
	{
		const params = new URLSearchParams();

		for (const [key, value] of Object.entries(object))
		{
			switch (value)
			{
				case null: case undefined:
				{
					// or continue
					break;
				}
				default:
				{
					params.set(key.toCamelCase(), value as string);
					break;
				}
			}
		}
		return params.toString();
	}

	public static ["products"] = new class extends Request
	{
		public GET({ ...query }: { page: number; page_size: number; order_by: string; keyword?: string; })
		{
			return super._GET(`https://panda-market-api.vercel.app/products?${API.query(query)}`);
		}
	};

	public static ["products/{product_id}"] = new class extends Request
	{
		public GET({ product_id, ...query }: { product_id: number; })
		{
			return super._GET(`https://panda-market-api.vercel.app/products/${product_id}`);
		}
	};

	public static ["products/{product_id}/comments"] = new class extends Request
	{
		public GET({ product_id, ...query }: { product_id: number; limit: number; })
		{
			return super._GET(`https://panda-market-api.vercel.app/products/${product_id}/comments?${API.query(query)}`);
		}
	};
}

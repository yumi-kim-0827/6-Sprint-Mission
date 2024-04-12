export const getItems = async () => {
	const response = await fetch('https://panda-market-api.vercel.app/products');
	const result = await response.json();
	return result;
}
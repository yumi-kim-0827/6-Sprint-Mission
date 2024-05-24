const __proto__ = Map.prototype;

declare global
{
	interface Map<K, V>
	{
		readonly isEmpty: ReturnType<typeof isEmpty>;
		readonly isNotEmpty: ReturnType<typeof isNotEmpty>;
	}
}

function isEmpty<K, V>(this: Map<K, V>, /* args */)
{
	return this.size === 0;
}
Object.defineProperty(__proto__, isEmpty.name, { get: isEmpty });
//
//
//
function isNotEmpty<K, V>(this: Map<K, V>, /* args */)
{
	return this.size !== 0;
}
Object.defineProperty(__proto__, isNotEmpty.name, { get: isNotEmpty });

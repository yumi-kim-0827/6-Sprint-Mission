const __proto__ = Set.prototype;

declare global
{
	interface Set<T>
	{
		readonly isEmpty: ReturnType<typeof isEmpty>;
		readonly isNotEmpty: ReturnType<typeof isNotEmpty>;
	}
}

function isEmpty<T>(this: Set<T>, /* args */)
{
	return this.size === 0;
}
Object.defineProperty(__proto__, isEmpty.name, { get: isEmpty });
//
//
//
function isNotEmpty<T>(this: Set<T>, /* args */)
{
	return this.size !== 0;
}
Object.defineProperty(__proto__, isNotEmpty.name, { get: isNotEmpty });

const __proto__ = Array.prototype;

declare global
{
	interface Array<T>
	{
		skip: typeof skip;
		take: typeof take;

		readonly isEmpty: ReturnType<typeof isEmpty>;
		readonly isNotEmpty: ReturnType<typeof isNotEmpty>;
	}
}

function skip<T>(this: Array<T>, /* args */ count: number)
{
	if (count <= 0)
	{
		return this;
	}
	else
	{
		return this.slice(count);
	}
}
Object.defineProperty(__proto__, skip.name, { value: skip });
//
//
//
function take<T>(this: Array<T>, /* args */ count: number)
{
	if (count <= 0)
	{
		return [];
	}
	else
	{
		return this.slice(0, count);
	}
}
Object.defineProperty(__proto__, take.name, { value: take });
//
//
//
function isEmpty<T>(this: Array<T>, /* args */)
{
	return this.length === 0;
}
Object.defineProperty(__proto__, isEmpty.name, { get: isEmpty });
//
//
//
function isNotEmpty<T>(this: Array<T>, /* args */)
{
	return this.length !== 0;
}
Object.defineProperty(__proto__, isNotEmpty.name, { get: isNotEmpty });

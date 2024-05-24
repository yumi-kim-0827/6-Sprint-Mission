const __proto__ = String.prototype;

declare global
{
	interface String
	{
		toSnakeCase: typeof toSnakeCase;
		toCamelCase: typeof toCamelCase;
	
		readonly isEmpty: ReturnType<typeof isEmpty>;
		readonly isNotEmpty: ReturnType<typeof isNotEmpty>;
	}
}

function toSnakeCase(this: String, /* args */)
{
	const buffer = [];

	for (const char of this)
	{
		// ew, camel case!
		if (0 < buffer.length && "A".charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= "Z".charCodeAt(0))
		{
			buffer.push("_");
		}
		buffer.push(char.toLowerCase());
	}
	return buffer.join("");
}
Object.defineProperty(__proto__, toSnakeCase.name, { value: toSnakeCase });
//
//
//
function toCamelCase(this: String, /* args */)
{
	const buffer = []; let snake_case = false;

	for (const char of this)
	{
		switch (char)
		{
			case "_":
			{
				snake_case = true;
				break;
			}
			default:
			{
				buffer.push(snake_case ? char.toUpperCase() : char.toLowerCase()); snake_case = false;
				break;
			}
		}
	}
	return buffer.join("");
}
Object.defineProperty(__proto__, toCamelCase.name, { value: toCamelCase });
//
//
//
function isEmpty(this: String, /* args */)
{
	return this.length === 0;
}
Object.defineProperty(__proto__, isEmpty.name, { get: isEmpty });
//
//
//
function isNotEmpty(this: String, /* args */)
{
	return this.length !== 0;
}
Object.defineProperty(__proto__, isNotEmpty.name, { get: isNotEmpty });

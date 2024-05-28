const __proto__ = Number.prototype;

declare global
{
	interface Number
	{
		clamp: typeof clamp;
		format: typeof format;
	}
}
//
//
//
function clamp(this: Number, /* args */ min: number, max: number)
{
	const value = this.valueOf();

	return value < min ? min : max < value ? max : value;
}
Object.defineProperty(__proto__, clamp.name, { value: clamp });
//
//
//
function format(this: Number, /* args */ seperator = ","): string
{
	return this.toString().split("").map((digit, index, array) => 0 < index && (array.length - index) % 3 === 0 ? seperator + digit : digit).join("");
}
Object.defineProperty(__proto__, format.name, { value: format });

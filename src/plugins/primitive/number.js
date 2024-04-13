const SCOPE = Number.prototype;

function clamp(min, max)
{
	return this.valueOf() < min ? min : max < this.valueOf() ? max : this.valueOf();
}
/* method */
Object.defineProperty(SCOPE, clamp.name, { value: clamp });

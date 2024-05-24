export default class Capsule<T>
{
	constructor(private readonly getter: () => T, private readonly setter: (value: T) => void)
	{
		// TODO: none
	}

	get(): T
	{
		return this.getter();
	}

	set(value: T)
	{
		this.setter(value instanceof Function ? value?.(this.getter()) : value);
	}
}

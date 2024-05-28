import { useRef } from "react";

interface Props
{
	id?: string;
	class?: string | Parameters<typeof decorate>;
	style?: React.CSSProperties;
}

interface Controller
{
	class?: Props["class"];
	style?: Props["style"];
	master?: Object;
}

const registry = new Set<string>();

if (import.meta.hot)
{
	import.meta.hot.on("vite:beforeUpdate", () => registry.clear());
}

export default function JSX<T>(name: string, callback: (props: T, self: React.RefObject<HTMLElement>, modify: Controller) => React.ReactNode): React.FC<Props & T>
{
	if (registry.has(name))
	{
		throw new Error(`Component name '${name}' is already taken`);
	}
	// register
	registry.add(name);

	return function (props: Props & T)
	{
		const modify: Controller = {}; const self = useRef<HTMLElement>(null); const element = callback(props, self, modify);

		return (
			<section ref={self} id={props.id} data-widget={name} { ...modify.master }
				//
				// merge style
				//
				style={(() =>
				{
					const buffer = {};
					
					if (props.style)
					{
						Object.assign(buffer, props.style);
					}
					if (modify.style)
					{
						Object.assign(buffer, modify.style);
					}
					return Object.keys(buffer).isNotEmpty ? buffer : undefined;
				})()}
				//
				// merge class
				//
				class={(() =>
				{
					const buffer = [];
					
					for (const swift of [props.class, modify.class])
					{
						if (swift instanceof Array)
						{
							buffer.push(...swift);
						}
						else if (swift !== undefined)
						{
							buffer.push(swift);
						}
					}
					return buffer.isNotEmpty ? decorate(...buffer) : undefined;
				})()}
			>
			{
				element
			}
			</section>
		);
	};
}

function decorate(...classes: (string|Set<string>|Map<string, boolean>|Record<string, boolean>)[])
{
	const buffer = new Set<string>();

	for (const swift of classes)
	{
		if (typeof swift === "string")
		{
			buffer.add(swift);
		}
		else if (swift instanceof Set)
		{
			for (const value of swift.values())
			{
				buffer.add(value);
			}
		}
		else if (swift instanceof Map)
		{
			for (const [key, value] of swift.entries())
			{
				if (value) buffer.add(key);
			}
		}
		else
		{
			for (const [key, value] of Object.entries(swift))
			{
				if (value) buffer.add(key);
			}
		}
	}
	return buffer.isNotEmpty ? [...buffer.values()].join("\u0020") : undefined;
}

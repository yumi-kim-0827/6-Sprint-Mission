export interface Props extends React.DOMAttributes<HTMLElement>
{
	id?: string; ref?: React.RefObject<HTMLElement>; class?: Parameters<typeof talyor> | Parameters<typeof talyor>[0]; style?: React.CSSProperties;
}

export default function widget(name: string, props: Props, merge: Omit<Props, "id"> = {})
{
	const jsx: Record<string, unknown> = { ["data-widget"]: name, ["id"]: props.id, ["ref"]: props.ref };

	for (const [key, value] of Object.entries(props))
	{
		if (/^on/.test(key)) jsx[key] = value; else if (/^data-/.test(key)) jsx[key] = value;
	}

	jsx["class"] = (() =>
	{
		const buffer = [];
	
		for (const swift of [props.class, merge.class])
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
		return 0 < buffer.length ? talyor(...buffer) : null;
	})();

	jsx["style"] = (() =>
	{
		const buffer = {};
		
		if (props.style)
		{
			Object.assign(buffer, props.style);
		}
		if (merge.style)
		{
			Object.assign(buffer, merge.style);
		}
		return 0 < Object.keys(buffer).length ? buffer : null;
	})();

	return jsx;
}

function talyor(...classes: (string|Record<string, boolean>)[])
{
	const buffer = [];

	for (const swift of classes)
	{
		switch (typeof swift)
		{
			case "string":
			{
				buffer.push(swift);
				break;
			}
			case "object":
			{
				for (const [key, value] of Object.entries(swift))
				{
					if (value) buffer.push(key);
				}
				break;
			}
		}
	}
	return buffer.length === 0 ? null : buffer.join("\u0020");
}

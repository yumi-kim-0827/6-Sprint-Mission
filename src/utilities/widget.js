export default function widget(name, { id = null, style = {}, classes = [] } = { id: null, style: {}, classes: [] }, { $style = {}, $classes = [] } = { $style: {}, $classes: [] })
{
	if (!name) throw new Error();

	return { "data-widget": name, "id": id, "style": { ...style, ...$style }, "class": typeof classes === "string" ? taylor(classes, ...$classes) : taylor(...classes, ...$classes) };
}

function taylor(...classes) // not swift!
{
	const buffer = [];

	for (const style of classes)
	{
		switch (typeof style)
		{
			case "string":
			{
				buffer.push(style);
				break;
			}
			case "object":
			{
				if (style === null) // JS bug that has been aged like a milk, yikes!
				{
					continue;
				}
				else if (style instanceof Array) // or Array.isArray
				{
					buffer.push(...style);
				}
				else if (style instanceof Object) // or simply use 'else'
				{
					for (const [key, value] of Object.entries(style))
					{
						if (value) buffer.push(key);
					}
				}
				break;
			}
		}
	}
	return buffer.isEmpty ? null : buffer.join("\u0020");
}

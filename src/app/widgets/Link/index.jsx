import React from "react";

import "./index.scss";

export default function Link({ classes = [], href, disabled, children, onClick })
{
	const hooks = new Map(Object.entries(
	{
		"navigate": require("react-router-dom").useNavigate(),
	}));
	
	class $
	{
		//
		// events
		//
		static onClick(event)
		{
			if (!disabled)
			{
				onClick?.(event);

				if (href)
				{
					hooks.get("navigate")(href);
				}
			}
		}
	}

	return (
		<a data-widget={Link.name} class={[...classes, disabled && "disabled"].join("\u0020")} onClick={$.onClick}>
			{children}
		</a>
	);
}

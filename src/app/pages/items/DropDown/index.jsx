import React from "react";

import "./index.scss";

export default function DropDown({ index, items })
{
	const [active, set_active] = React.useState(false);
	const [indexing, set_indexing] = React.useState(index);

	React.useEffect(() =>
	{
		set_active((active) => false);
	},
	[indexing]);

	class $
	{
		static timeout;
		//
		// events
		//
		static onMouseEnter(event)
		{
			set_active((active) => true);
			
			$.timeout = clearTimeout($.timeout);
		}
		static onMouseLeave(event)
		{
			$.timeout = setTimeout(() => set_active((active) => false), 150);
		}
	}

	return (
		<section data-widget={DropDown.name} onMouseEnter={$.onMouseEnter} onMouseLeave={$.onMouseLeave}>
			<div class="text">
				{items[indexing].name}
			</div>
			<div class="icon"></div>
			<div class="items" style={{ display: active ? "block" : "none" }} onMouseEnter={$.onMouseEnter} onMouseLeave={$.onMouseLeave}>
				{items.map((item, index, array) =>
				{
					return (
						<React.Fragment key={index}>
							<div key={index} class="item" onClick={(event) => { set_indexing((indexing) => index); item.onClick?.(); }}>
								{item.name}
							</div>
							{index < array.length - 1 && <hr class="seperator"/>}
						</React.Fragment>
					);
				})}
			</div>
		</section>
	);
}

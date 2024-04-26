import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";

export default function DropDown({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ index, items })
{
	const [active, setActive] = React.useState(false);
	const [indexing, setIndexing] = React.useState(index);

	React.useEffect(() =>
	{
		setActive((active) => false);
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
			setActive((active) => true);
			
			$.timeout = clearTimeout($.timeout);
		}
		static onMouseLeave(event)
		{
			$.timeout = setTimeout(() => setActive((active) => false), 150);
		}
	}

	return (
		<section {...widget(DropDown.name, { id, style, classes })} onMouseEnter={$.onMouseEnter} onMouseLeave={$.onMouseLeave}>
			<div class="text">
				{items[indexing].name}
			</div>
			<div class="icon"></div>
			<div class="items" style={{ display: active ? "block" : "none" }} onMouseEnter={$.onMouseEnter} onMouseLeave={$.onMouseLeave}>
				{items.map((item, index, array) =>
				{
					return (
						<React.Fragment key={index}>
							<div key={index} class="item" onClick={(event) => { setIndexing((indexing) => index); item.onClick?.(); }}>
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

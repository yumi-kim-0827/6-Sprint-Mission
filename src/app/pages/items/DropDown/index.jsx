import "./index.scss";

import { useEffect, useState } from "react";

export default function DropDown({ index, items })
{
	let timer;

	const [active, set_active] = useState(false);
	const [selected, set_selected] = useState(index);

	function onMouseEnter(event)
	{
		timer = clearTimeout(timer);
			
		set_active(true);
	}

	useEffect(() =>
	{
		set_active(false);
	},
	[selected]);

	function onMouseLeave(event)
	{
		timer = setTimeout(() => set_active(false), 150);
	}

	return (
		<section data-widget={DropDown.name} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<div class="text">
				{items[selected].name}
			</div>
			<div class="icon"></div>
			<div class="items" style={{ display: active ? "block" : "none" }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				{items.map((item, index, array) =>
				{
					return (
						<>
							<div key={index} class="item" onClick={(event) => { set_selected(index); item?.onClick(event); }}>
								{item.name}
							</div>
							{index < array.length - 1 && <hr class="seperator"/>}
						</>
					);
				})}
			</div>
		</section>
	);
}

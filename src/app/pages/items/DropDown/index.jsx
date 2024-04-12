import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function DropDown({ index, items })
{
	let timer;

	const [selected, set_selected] = useState(index);
	const [active, set_active] = useState(false);

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
		timer = setTimeout(() => set_active(false), 250);
	}

	return (
		<section class={styles.widget} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<span class="text">
				{items[selected].name}
			</span>
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

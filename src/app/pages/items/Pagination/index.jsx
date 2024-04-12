import styles from "./index.module.css";

import { useEffect, useState } from "react";

export default function Pagination({ index, length, onPaging })
{
	const [selected, set_selected] = useState(index);

	function onKeyDown(event)
	{
		switch (event.key)
		{
			case "ArrowLeft":
			{
				prev();
				break;
			}
			case "ArrowRight":
			{
				next();
				break;
			}
		}
	}

	function prev()
	{
		set_selected(Math.max(1, selected - 1));
	}

	function next()
	{
		set_selected(Math.min(selected + 1, length));
	}

	useEffect(() =>
	{
		onPaging?.(selected);
	},
	[selected]);

	useEffect(() =>
	{
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	},
	[]);

	return (
		<section class={styles.widget}>
			<div class="page" onClick={prev}>
				<img src={require("assets/icons/arrow_left.svg").default}/>
			</div>
			{length && new Array(length).fill(null).map((_, index, array) =>
			{
				return (
					<div key={index} class={["page", selected === index + 1 ? "highlight" : null].join("\u0020")} onClick={(event) => set_selected(index + 1)}>
						{index + 1}
					</div>	
				);
			})}
			<div class="page" onClick={next}>
				<img src={require("assets/icons/arrow_right.svg").default}/>
			</div>
		</section>
	);
}

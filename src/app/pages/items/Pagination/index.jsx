import "./index.scss";

import { useEffect, useState } from "react";

export default function Pagination({ index, length, onPaging })
{
	const [page, set_page] = useState(index);

	function onKeyDown(event)
	{
		switch (event.key)
		{
			case "ArrowLeft":
			{
				on_prev();
				break;
			}
			case "ArrowRight":
			{
				on_next();
				break;
			}
		}
	}

	function on_prev()
	{
		set_page(Math.max(page - 1, 1));
	}

	function on_next()
	{
		set_page(Math.min(page + 1, length + 1));
	}

	useEffect(() =>
	{
		onPaging?.(page);
	},
	[page]);

	useEffect(() =>
	{
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	},
	[]);

	return (
		<section data-widget={Pagination.name}>
			<div class="page" onClick={on_prev}>
				<img src={require("assets/icons/arrow_left.svg").default}/>
			</div>
			{length && new Array(length).fill(null).map((_, index, array) =>
			{
				return (
					<div key={index} class={["page", page === index + 1 ? "indexing" : null].join("\u0020")} onClick={(event) => set_page(index + 1)}>
						{index + 1}
					</div>	
				);
			})}
			<div class="page" onClick={on_next}>
				<img src={require("assets/icons/arrow_right.svg").default}/>
			</div>
		</section>
	);
}

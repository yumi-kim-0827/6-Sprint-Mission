import React from "react";

import "./index.scss";

export default function Pagination({ index, length, onPaging })
{
	const [page, set_page] = React.useState(index);

	React.useEffect(() =>
	{
		window.addEventListener("keydown", $.onKeyDown);
		return () => window.removeEventListener("keydown", $.onKeyDown);
	},
	[]);

	React.useEffect(() =>
	{
		onPaging?.(page);
	},
	[page]);

	React.useEffect(() =>
	{
		set_page((page) => page.clamp(1, length));
	},
	[length]);

	class $
	{
		//
		// methods
		//
		static first()
		{
			set_page((page) => 1);
		}
		static prev()
		{
			set_page((page) => (page - 1).clamp(1, length));
		}
		static next()
		{
			set_page((page) => (page + 1).clamp(1, length));
		}
		static last()
		{
			set_page((length) => 1);
		}
		//
		// events
		//
		static onKeyDown(event)
		{
			switch (event.key)
			{
				case "ArrowLeft":
				{
					$.prev();
					break;
				}
				case "ArrowRight":
				{
					$.next();
					break;
				}
			}
		}
	}

	return (
		<section data-widget={Pagination.name}>
			<div class="page" onClick={(event) => $.prev()}>
				<img src={require("assets/icons/arrow_left.svg").default}/>
			</div>
			{length && new Array(length).fill(null).map((_, index, array) =>
			{
				return (
					<div key={index} class={["page", page === index + 1 ? "indexing" : null].join("\u0020")} onClick={(event) => set_page((page) => index + 1)}>
						{index + 1}
					</div>	
				);
			})}
			<div class="page" onClick={(event) => $.next()}>
				<img src={require("assets/icons/arrow_right.svg").default}/>
			</div>
		</section>
	);
}

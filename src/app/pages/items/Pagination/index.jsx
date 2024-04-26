import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";

export default function Pagination({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ index, length, onPaging })
{
	const [page, setPage] = React.useState(index);

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
		setPage((page) => page.clamp(1, length));
	},
	[length]);

	class $
	{
		//
		// methods
		//
		static first()
		{
			setPage((page) => 1);
		}
		static prev()
		{
			setPage((page) => (page - 1).clamp(1, length));
		}
		static next()
		{
			setPage((page) => (page + 1).clamp(1, length));
		}
		static last()
		{
			setPage((length) => 1);
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
		<section {...widget(Pagination.name, { id, style, classes })}>
			<div class="page" onClick={(event) => $.prev()}>
				<img src={require("@/assets/icons/arrow_left.svg").default}/>
			</div>
			{length && new Array(length).fill(null).map((_, index, array) =>
			{
				return (
					<div key={index} class={["page", page === index + 1 ? "indexing" : null].join("\u0020")} onClick={(event) => setPage((page) => index + 1)}>
						{index + 1}
					</div>	
				);
			})}
			<div class="page" onClick={(event) => $.next()}>
				<img src={require("@/assets/icons/arrow_right.svg").default}/>
			</div>
		</section>
	);
}

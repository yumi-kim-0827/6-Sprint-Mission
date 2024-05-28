import "./index.scss"; import JSX from "@/common/utilities/jsx";

import { useEffect, useState, useRef } from "react";

import Center from "../Center";
import Column from "../Column";

import useViewport from "@/app/hooks/useViewport";

import sort_svg from "@/common/assets/icons/sort.svg";
import arrow_down_svg from "@/common/assets/icons/arrow_down.svg";

const DropDown = JSX<{ children: string[]; onSelect?: (item: string) => void; }>("DropDown", (props, self, modify) =>
{
	const { is_mobile, is_tablet, is_desktop } = useViewport();

	const [active, set_active] = useState(false);
	const [select, set_select] = useState(0);

	const timeout = useRef<NodeJS.Timeout>();

	useEffect(() =>
	{
		props.onSelect?.(props.children[select]);
	},
	[select]);

	// apply events
	modify.master = {
		onMouseEnter: function ()
		{
			set_active(true); timeout.current = clearTimeout(timeout.current)!!;
		},
		onMouseLeave: function ()
		{
			timeout.current ??= setTimeout(() => set_active(false), 150);
		},
	};

	return (
		<>
			{!is_mobile && props.children[select]}
			<img src={is_mobile ? sort_svg : arrow_down_svg}/>
			<Column class="hamburger" style={{ display: active ? undefined : "none" }}>
				{props.children.map((option, index) =>
				(
					<Center key={option} class="ingredient" onClick={() => { set_select(index); set_active(false); }}>
					{
						option
					}
					</Center>
				))}
			</Column>
		</>
	)
});

export default DropDown;

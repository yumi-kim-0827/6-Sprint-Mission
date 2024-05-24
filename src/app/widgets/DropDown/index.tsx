import { useEffect, useRef, useState } from "react"; import "./index.scss"; import widget from "@/common/utilities/widget.js"; import type { Props } from "@/common/utilities/widget.js";

import Center from "../Center";
import Column from "../Column";

import useViewport from "@/app/hooks/useViewport";

import sort_svg from "@/common/assets/icons/sort.svg";
import arrow_down_svg from "@/common/assets/icons/arrow_down.svg";

export default function DropDown(props: Props & { children: string[]; onSelect?: (item: string) => void; })
{
	const { is_mobile, is_tablet, is_desktop } = useViewport();

	const [active, set_active] = useState(false);
	const [select, set_select] = useState(0);

	useEffect(() =>
	{
		props.onSelect?.(props.children[select]);
	},
	[select]);

	const timeout = useRef<NodeJS.Timeout>();

	function onMouseEnter()
	{
		set_active(true);
		
		timeout.current = clearTimeout(timeout.current) as undefined;
	}

	function onMouseLeave()
	{
		timeout.current ??= setTimeout(() => set_active(false), 150);
	}

	return (
		<section { ...widget("DropDown", props) } onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{!is_mobile && props.children[select]}
			<img src={is_mobile ? sort_svg : arrow_down_svg}/>
			<Column class="hamburger" style={{ display: active ? undefined : "none" }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
				{props.children.map((option, index) =>
				{
					return (
						<Center key={option} class="ingredient" onClick={() => { set_select(index); set_active(false); }}>
						{
							option
						}
						</Center>
					);
				})}
			</Column>
		</section>
	);
}

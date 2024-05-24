import { } from "react"; import "./index.scss"; import widget from "@/common/utilities/widget.js"; import type { Props } from "@/common/utilities/widget.js";

export default function Row(props: Props & { gap?: React.CSSProperties["gap"]; justify?: React.CSSProperties["justifyContent"]; align?: React.CSSProperties["alignItems"]; direction?: "left-to-right" | "right-to-left"; })
{
	return (
		<section { ...widget("Row", props, { class: props.direction ?? "left-to-right", style: { "gap": props.gap, "justifyContent": props.justify, "alignItems": props.align }}) }>
		{
			props.children
		}
		</section>
	);
}

import { } from "react"; import "./index.scss"; import widget from "@/common/utilities/widget.js"; import type { Props } from "@/common/utilities/widget.js";

export default function Column(props: Props & { gap?: React.CSSProperties["gap"]; justify?: React.CSSProperties["justifyContent"]; align?: React.CSSProperties["alignItems"]; direction?: "top-to-bottom" | "bottom-to-top"; })
{
	return (
		<section { ...widget("Column", props, { class: props.direction ?? "top-to-bottom", style: { "gap": props.gap, "justifyContent": props.justify, "alignItems": props.align } }) }>
		{
			props.children
		}
		</section>
	);
}

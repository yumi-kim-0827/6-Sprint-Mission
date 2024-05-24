import {} from "react"; import "./index.scss"; import widget from "@/common/utilities/widget.js"; import type { Props } from "@/common/utilities/widget.js";

export default function Spacer(props: Props & { ratio?: number })
{
	return (
		<section { ...widget("Spacer", props, { style: { "flexGrow": props.ratio ?? 1.0 } }) }>
		{
			props.children
		}
		</section>
	);
}

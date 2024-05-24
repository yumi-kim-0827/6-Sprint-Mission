import { } from "react"; import "./index.scss"; import widget from "@/common/utilities/widget.js"; import type { Props } from "@/common/utilities/widget.js";

export default function Box(props: Props)
{
	return (
		<section { ...widget("Box", props) }>
		{
			props.children
		}
		</section>
	);
}
 
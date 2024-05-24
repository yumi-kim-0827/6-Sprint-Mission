import { } from "react"; import "./index.scss"; import widget from "@/common/utilities/widget.js"; import type { Props } from "@/common/utilities/widget.js";

export default function Center(props: Props)
{
	return (
		<section { ...widget("Center", props) }>
		{
			props.children
		}
		</section>
	);
}
 
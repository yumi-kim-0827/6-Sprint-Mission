import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";

export default function Row({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ axis = "left-to-right", gap = null, align = "center", arrange = "center" })
{
	return (
		<section {...widget(Row.name, { id, style, classes }, { $style: { "gap": gap, "alignItems": align, "justifyContent": arrange }, $classes: [axis] })}>
			{children}
		</section>
	)
}

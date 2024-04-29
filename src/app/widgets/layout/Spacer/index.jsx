import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";

export default function Spacer({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ ratio = 1.0 })
{
	return (
		<section {...widget(Spacer.name, { id, style, classes }, { $style: { "flexGrow": ratio } })}>
			{children}
		</section>
	)
}

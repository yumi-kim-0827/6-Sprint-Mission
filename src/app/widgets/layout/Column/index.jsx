import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";

/**
  * @param {object} props
  * 
  * @param {"top-to-bottom"|"bottom-to-top"} props.axis
  **/
export default function Column({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ axis = "top-to-bottom", gap = null, align = "center", arrange = "center" })
{
	return (
		<section {...widget(Column.name, { id, style, classes }, { $style: { "gap": gap, "alignItems": align, "justifyContent": arrange }, $classes: [axis] })}>
			{children}
		</section>
	)
}

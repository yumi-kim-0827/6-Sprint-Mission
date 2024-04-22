import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";

import { useNavigate } from "react-router-dom";
/**
  * @param {object} props
  **/
export default function Button({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ href = null, disabled = false, onClick = null })
{
	const navigate = useNavigate();

	return (
		<a {...widget(Button.name, { id, style, classes }, { $classes: [{ "disabled": disabled }] })} onClick={(event) => { if (!disabled) { onClick?.(event); if (href) { navigate(href); } } }}>
			{children}
		</a>
	);
}

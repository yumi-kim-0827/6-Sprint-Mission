import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";

import { useNavigate } from "react-router-dom";
/**
  * @param {object} props
  **/
export default function Link({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ href = null, disabled = false, onClick = null })
{
	const navigate = useNavigate();

	return (
		<a {...widget(Link.name, { id, style, classes })} onClick={(event) => { if (!disabled) { onClick?.(event); if (href) { navigate(href); } } }}>
			{children}
		</a>
	);
}

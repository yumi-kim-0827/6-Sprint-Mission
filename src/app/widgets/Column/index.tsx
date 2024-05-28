import "./index.scss"; import JSX from "@/common/utilities/jsx";

const enum Direction
{
	TOP_TO_BOTTOM = "top-to-bottom",
	BOTTOM_TO_TOP = "bottom-to-top",
}

const Column = JSX<React.DOMAttributes<HTMLElement> & { gap?: React.CSSProperties["gap"]; align?: React.CSSProperties["alignItems"]; justify?: React.CSSProperties["justifyContent"]; direction?: Direction; }>("Column", (props, self, modify) =>
{
	// merge class
	modify.class = props.direction ?? Direction.TOP_TO_BOTTOM;
	// merge style
	modify.style = {
		gap: props.gap,
		alignItems: props.align,
		justifyContent: props.justify
	};
	// apply events
	modify.master = Object.entries(props).reduce((sigma, [key, value]) =>
	{
		return /^on/.test(key) ? { ...sigma, [key]: value } : sigma;
	},
	{});
	return props.children;
});

export default Column;

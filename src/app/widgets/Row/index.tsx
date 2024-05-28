import "./index.scss"; import JSX from "@/common/utilities/jsx";

const enum Direction
{
	LEFT_TO_RIGHT = "left-to-right",
	RIGHT_TO_LEFT = "right-to-left",
}

const Row = JSX<React.DOMAttributes<HTMLElement> & { gap?: React.CSSProperties["gap"]; align?: React.CSSProperties["alignItems"]; justify?: React.CSSProperties["justifyContent"]; direction?: Direction; }>("Row", (props, self, modify) =>
{
	// merge class
	modify.class = props.direction ?? Direction.LEFT_TO_RIGHT;
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

export default Row;

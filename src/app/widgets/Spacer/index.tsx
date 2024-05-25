import "./index.scss"; import JSX from "@/common/utilities/jsx";

const Spacer = JSX<React.DOMAttributes<HTMLElement> & { ratio?: number }>("Spacer", (props, self, modify) =>
{
	modify.style = { flexGrow: props.ratio ?? 1.0 };
	// apply events
	modify.master = Object.entries(props).reduce((sigma, [key, value]) =>
	{
		return /^on/.test(key) ? { ...sigma, [key]: value } : sigma;
	},
	{});
	return props.children;
});

export default Spacer;

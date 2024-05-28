import "./index.scss"; import JSX from "@/common/utilities/jsx";

const Center = JSX<React.DOMAttributes<HTMLElement>>("Center", (props, self, modify) =>
{
	// apply events
	modify.master = Object.entries(props).reduce((sigma, [key, value]) =>
	{
		return /^on/.test(key) ? { ...sigma, [key]: value } : sigma;
	},
	{});
	return props.children;
});

export default Center;

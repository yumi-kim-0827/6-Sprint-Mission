import "./index.scss"; import JSX from "@/common/utilities/jsx";

const Page = JSX<{ path: string; children?: React.ReactNode; }>("Page", (props, self, modify) =>
{
	modify.master = { "data-page": props.path };

	return props.children;
});

export default Page;

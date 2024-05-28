import "./index.scss"; import JSX from "@/common/utilities/jsx";

const Layout = JSX<{ children?: React.ReactNode; }>("Layout", (props) =>
{
	return props.children;
});

export default Layout;

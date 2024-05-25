import "./index.scss"; import JSX from "@/common/utilities/jsx";

import Row from "../Row";
import Center from "../Center";
import Spacer from "../Spacer";

import { Link, useLocation } from "react-router-dom";

import logo_face_svg from "@/common/assets/icons/logo_face.svg";
import logo_text_svg from "@/common/assets/icons/logo_text.svg";

const Header = JSX<{ children?: { name: string; href: string; }[]; }>("Header", (props) =>
{
	const location = useLocation();
	
	return (
		<Row class="container" align="center">
			<Link to="/">
				<Row gap={10} align="center">
					<img src={logo_face_svg} class="hide-on-mobile"/>
					<img src={logo_text_svg}/>
				</Row>
			</Link>
			<Spacer>
				<Row class="navigate">
				{props.children?.map((args, index) =>
				(
					<Link key={index} to={args.href}>
						{/* HIGHLIGHT */}
						<Center style={{ color: location.pathname.startsWith(args.href) ? "#3692FF" : undefined }}>
						{
							args.name
						}
						</Center>
					</Link>
				))}
				</Row>
			</Spacer>
			<Link to="/signin">
				<Center class="button">
					로그인
				</Center>
			</Link>
		</Row>
	);
});

export default Header;

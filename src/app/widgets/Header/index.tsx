import { } from "react"; import "./index.scss"; import widget from "@/common/utilities/widget.js"; import type { Props } from "@/common/utilities/widget.js";

import Row from "../Row";
import Image from "../Image";
import Center from "../Center";
import Spacer from "../Spacer";

import { Link } from "react-router-dom";

import logo_face_svg from "@/common/assets/icons/logo_face.svg";
import logo_text_svg from "@/common/assets/icons/logo_text.svg";

export default function Header(props: Omit<Props, "id">)
{
	return (
		<Center id="header" { ...props }>
			<Row class="content" align="center">
				<Link to="/">
					<Row gap={10} align="center">
						<Image src={logo_face_svg} class="hide-on-mobile"></Image>
						<Image src={logo_text_svg}></Image>
					</Row>
				</Link>
				<Spacer>
				{
					props.children
				}
				</Spacer>
				<Link to="/signin">
					<Center class="button">
						로그인
					</Center>
				</Link>
			</Row>
		</Center>
	);
}
 
import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";
// assets/icons
import logo_face_svg from "@/assets/icons/logo_face.svg";
import logo_text_svg from "@/assets/icons/logo_text.svg";
import avatar_svg from "@/assets/icons/avatar.svg";
// widgets/design
import Link from "@/app/widgets/design/Link";
import Button from "@/app/widgets/design/Button";
// widgets/layout
import Row from "@/app/widgets/layout/Row";
import Spacer from "@/app/widgets/layout/Spacer";

export default function Header({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ avatar = false })
{
	return (
		<header {...widget(Header.name, { id, style, classes })}>
			<Row>
				<Link href="/">
					<Row gap={10}>
						<img src={logo_face_svg} alt="판다마켓 로고" class="hide-on-mobile"/>
						<img src={logo_text_svg} alt="판다마켓 글자"/>
					</Row>
				</Link>
				<Spacer id="navigation">
					<Row arrange="flex-start">
						{children}
					</Row>
				</Spacer>
				{(() => {
					if (avatar)
					{
						return (
							<Link href="/profile" id="avatar" style={{ backgroundImage: `url("${avatar_svg}")` }}></Link>
						);
					}
					else
					{
						return (
							<Button href="/signin">
								로그인
							</Button>
						);
					}
				})()}
			</Row>
		</header>
	);
}

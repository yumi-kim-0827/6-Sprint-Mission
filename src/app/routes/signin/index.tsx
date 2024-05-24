import "./index.scss";

import Box from "@/app/widgets/Box";
import Image from "@/app/widgets/Image";
import Header from "@/app/widgets/Header";
import Column from "@/app/widgets/Column";
import Spacer from "@/app/widgets/Spacer";
import Center from "@/app/widgets/Center";
import Footer from "@/app/widgets/Footer";

import { Link } from "react-router-dom";

import logo_full_svg from "@/common/assets/icons/logo_full.svg";

export default function Page()
{
	return (
		<Column data-page="signin" align="center">
			<Link to="/">
				<Image id="company" src={logo_full_svg}></Image>
			</Link>
			<Column id="content">
				
			</Column>
		</Column>
	);
}

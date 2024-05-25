import "./index.scss"; import JSX from "@/common/utilities/jsx";

import Row from "../Row";

import { Link } from "react-router-dom";

import youtube_svg from "@/common/assets/icons/youtube.svg";
import twitter_svg from "@/common/assets/icons/twitter.svg";
import facebook_svg from "@/common/assets/icons/facebook.svg";
import instagram_svg from "@/common/assets/icons/instagram.svg";

const Footer = JSX<{ children?: { name: string; href: string; }[]; }>("Footer", (props) =>
{
	return (
		<Row class="container" justify="space-between" align="flex-start">
			<Row class="copyright">
				@codeit - 2024
			</Row>
			<Row class="navigate" gap={30}>
			{props.children?.map((args, index) =>
			(
				<Link key={index} to={args.href}>
				{
					args.name
				}
				</Link>
			))}
			</Row>
			<Row class="socials" gap={12}>
			{[
				{
					src: facebook_svg,
					href: "https://www.facebook.com",
				},
				{
					src: twitter_svg,
					href: "https://www.twitter.com",
				},
				{
					src: youtube_svg,
					href: "https://www.youtube.com",
				},
				{
					src: instagram_svg,
					href: "https://www.instagram.com",
				},
			]
			.map((args, index) =>
			(
				<a key={index} href={args.href} target="_blank">
					<img src={args.src}/>
				</a>
			))}
		</Row>
	</Row>
	);
});

export default Footer;

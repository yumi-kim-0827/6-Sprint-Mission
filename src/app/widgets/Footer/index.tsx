import { } from "react"; import "./index.scss"; import widget from "@/common/utilities/widget.js"; import type { Props } from "@/common/utilities/widget.js";

import Row from "../Row";
import Center from "../Center";

import { Link } from "react-router-dom";

import youtube_svg from "@/common/assets/icons/youtube.svg";
import twitter_svg from "@/common/assets/icons/twitter.svg";
import facebook_svg from "@/common/assets/icons/facebook.svg";
import instagram_svg from "@/common/assets/icons/instagram.svg";

export default function Footer(props: Omit<Props, "id">)
{
	return (
		<Center id="footer" { ...props }>
			<Row class="content" justify="space-between" align="flex-start">
				<Row class="copyright">
					@codeit - 2024
				</Row>
				<Row class="articles" gap={30}>
				{[
					{
						name: "Privacy Policy",
						href: "/privacy",
					},
					{
						name: "FAQ",
						href: "/faq",
					},
				]
				.map((args, index) =>
				{
					return (
						<Link key={index} to={args.href}>
						{
							args.name
						}
						</Link>
					);
				})}
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
				{
					return (
						<a key={index} href={args.href} target="_blank">
							<img src={args.src}/>
						</a>
					);
				})}
				</Row>
			</Row>
		</Center>
	);
}

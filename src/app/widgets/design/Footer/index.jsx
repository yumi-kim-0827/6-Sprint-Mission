import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";
// assets/icons
import youtube_svg from "@/assets/icons/youtube.svg";
import twitter_svg from "@/assets/icons/twitter.svg";
import facebook_svg from "@/assets/icons/facebook.svg";
import instagram_svg from "@/assets/icons/instagram.svg";
// widgets/design
import Link from "@/app/widgets/design/Link";
// widgets/layout
import Row from "@/app/widgets/layout/Row";

const navi = [
	{
		name: "Privacy Policy",
		href: "/privacy",
	},
	{
		name: "FAQ",
		href: "/faq",
	},
];
const socials = [
	{
		src: facebook_svg,
		alt: "facebook",
		href: "https://www.facebook.com",
	},
	{
		src: twitter_svg,
		alt: "twitter",
		href: "https://www.twitter.com",
	},
	{
		src: youtube_svg,
		alt: "youtube",
		href: "https://www.youtube.com",
	},
	{
		src: instagram_svg,
		alt: "instagram",
		href: "https://www.instagram.com",
	},
];

export default function Footer({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ })
{
	return (
		<footer {...widget(Footer.name, { id, style, classes })}>
			<Row align="flex-start" arrange="space-between">
				<Row classes="copyright">
					@codeit - 2024
				</Row>
				<Row classes="navigation" gap={30}>
					{navi.map((args, index, array) =>
					{
						return (
							<Link key={index} href={args.href}>{args.name}</Link>
						);
					})}
				</Row>
				<Row classes="social-media" gap={12}>
					{socials.map((args, index, array) => {
						return (
							<a key={index} href={args.href} target="_blank">
								<img src={args.src} alt={args.alt} />
							</a>
						);
					})}
				</Row>
			</Row>
		</footer>
	)
}

import { Link } from "react-router-dom";

import youtube_svg from "@/common/assets/icons/youtube.svg";
import twitter_svg from "@/common/assets/icons/twitter.svg";
import facebook_svg from "@/common/assets/icons/facebook.svg";
import instagram_svg from "@/common/assets/icons/instagram.svg";

export default function Footer({ children }: { children: { name: string; href: string; }[] })
{
	return (
		<footer class="flex relative bg-[#111827]">
			<div class="flex justify-between w-full h-[160px] pt-[32px] pb-[64px] mobile:mx-[16px] tablet:mx-[24px] desktop:mx-[200px]">
				<div class="font-[400] text-[#72787F] text-[16px] mobile:absolute mobile:bottom-[32px]">
					@codeit - 2024
				</div>
				<div class="flex gap-[30px]">
				{children?.map((args, index) =>
				(
					<Link key={index} to={args.href}>
						<div class="font-[400] text-[#E5E7EB] text-[16px]">
						{
							args.name
						}
						</div>
					</Link>
				))}
				</div>
				<div class="flex gap-[12px]">
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
				</div>
			</div>
		</footer>
	);
}

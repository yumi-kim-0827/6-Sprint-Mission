import React from "react";

import "./index.scss";

import Banner from "./widgets/Banner";
import Showcase from "./widgets/Showcase";

import Link from "app/widgets/Link";
import Button from "app/widgets/Button";

export default function HomePage({ })
{
	return (
		<section data-widget={HomePage.name}>
			<header>
				<div class="container">
					<Link href="/">
						<img src={require("assets/icons/logo_face.svg").default} alt="판다마켓 로고" class="hide-on-mobile"/>
						<img src={require("assets/icons/logo_text.svg").default} alt="판다마켓 글자"/>
					</Link>
					<Button href="/signin">
						로그인
					</Button>
				</div>
			</header>

			<Banner src={require("assets/images/banner_top.png")} title={["일상의 모든 물건을", "거래해 보세요"]} button={true}/>
			
			<main>
				{[
					{ name: "Hot Item", image: require("assets/images/home_01.png"), heading: ["인기 상품을", "확인해 보세요"], subheading: ["가장 HOT한 중고거래 물품을", "판다마켓에서 확인해 보세요"] },
					{ name: "Search", image: require("assets/images/home_02.png"), heading: ["구매를 원하는", "상품을 검색하세요"], subheading: ["구매하고 싶은 물품은 검색해서", "쉽게 찾아보세요"] },
					{ name: "Register", image: require("assets/images/home_03.png"), heading: ["판매를 원하는", "상품을 등록하세요"], subheading: ["어떤 물건이든 판매하고 싶은 상품을", "쉽게 등록하세요"],
				}].map((args, index, array) =>
				{
					return (
						<Showcase key={args.name} {...args} align={index % 2 === 1 ? "left" : "right"}></Showcase>
					);
				})}
			</main>

			<Banner src={require("assets/images/banner_bottom.png")} title={["믿을 수 있는", "판다마켓 중고 거래"]} button={false}/>

			<footer>
				<div class="container">
					<span class="left">
						@codeit - 2024
					</span>
					<span class="center">
						<Link href="/privacy">
							Privacy Policy
						</Link>
						<Link href="/faq">
							FAQ
						</Link>
					</span>
					<span class="right">
						<a href="https://www.facebook.com" target="_blank">
							<img src={require("assets/icons/facebook.svg").default} alt="페이스북"/>
						</a>
						<a href="https://www.twitter.com" target="_blank">
							<img src={require("assets/icons/twitter.svg").default} alt="트위터"/>
						</a>
						<a href="https://www.youtube.com" target="_blank">
							<img src={require("assets/icons/youtube.svg").default} alt="유튜브"/>
						</a>
						<a href="https://www.instagram.com" target="_blank">
							<img src={require("assets/icons/instagram.svg").default} alt="인스타그램"/>
						</a>
					</span>
				</div>
			</footer>
		</section>
	);
}

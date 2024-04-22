import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";
// assets/images
import home_01_png from "@/assets/images/home_01.png";
import home_02_png from "@/assets/images/home_02.png";
import home_03_png from "@/assets/images/home_03.png";
import banner_top_png from "@/assets/images/banner_top.png";
import banner_bottom_png from "@/assets/images/banner_bottom.png";
// widgets/
import Banner from "./widgets/Banner";
import Showcase from "./widgets/Showcase";
// widgets/design
import Header from "@/app/widgets/design/Header";
import Footer from "@/app/widgets/design/Footer";
// widgets/layout
import Column from "@/app/widgets/layout/Column";

export default function HomePage({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ })
{
	return (
		<section {...widget(HomePage.name, { id, style, classes })}>
			<Header></Header>

			<Banner src={banner_top_png} title={["일상의 모든 물건을", "거래해 보세요"]} button={true}></Banner>

			<Column>
				{[
					{ src: home_01_png, heading: ["인기 상품을", "확인해 보세요"], subheading: ["가장 HOT한 중고거래 물품을", "판다마켓에서 확인해 보세요"], name: "Hot Item" },
					{ src: home_02_png, heading: ["구매를 원하는", "상품을 검색하세요"], subheading: ["구매하고 싶은 물품은 검색해서", "쉽게 찾아보세요"], name: "Search" },
					{ src: home_03_png, heading: ["판매를 원하는", "상품을 등록하세요"], subheading: ["어떤 물건이든 판매하고 싶은 상품을", "쉽게 등록하세요"], name: "Register" },
				].map((args, index, array) =>
				{
					return (
						<Showcase key={index} {...args} align={index % 2 === 1 ? "left" : "right"}></Showcase>
					);
				})}
			</Column>

			<Banner src={banner_bottom_png} title={["믿을 수 있는", "판다마켓 중고 거래"]} button={false}></Banner>

			<Footer></Footer>
		</section>
	);
}

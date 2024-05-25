import "./index.scss"; import { } from "react";

import Page from "@/app/widgets/Page";
import Header from "@/app/widgets/Header";
import Layout from "@/app/widgets/Layout";
import Footer from "@/app/widgets/Footer";
import Column from "@/app/widgets/Column";
import Spacer from "@/app/widgets/Spacer";
import Center from "@/app/widgets/Center";

import { Link } from "react-router-dom";

import useViewport from "@/app/hooks/useViewport";

import home_01_png from "@/common/assets/images/home_01.png";
import home_02_png from "@/common/assets/images/home_02.png";
import home_03_png from "@/common/assets/images/home_03.png";
import banner_top_png from "@/common/assets/images/banner_top.png";
import banner_bottom_png from "@/common/assets/images/banner_bottom.png";

export default function JSX()
{
	const { is_mobile, is_tablet, is_desktop } = useViewport();

	return (
		<Page path="index">
			<Header>
			{[
				// TODO: none
			]}
			</Header>
			<Spacer>
				<Column>
					<Center class="banner">
						<div class="wrapper">
							<Column class="heading" gap={24}>
								일상의 모든 물건을
								{is_tablet ? "\u0020" : <br/>}
								거래해 보세요
								<Link to="/items">
									<Center class="button">
										구경하러 가기
									</Center>
								</Link>
							</Column>
							<img class="background" src={banner_top_png}/>
						</div>
					</Center>
					<Layout>
						<div class="segment left">
							<img class="image" src={home_01_png}/>
							<Column class="content" justify="center">
								<div>
									Hot Item
								</div>
								<div>
									인기 상품을
									{is_desktop ? <br/> : "\u0020"}
									확인해 보세요
								</div>
								<div>
									가장 HOT한 중고거래 물품을
									<br/>
									판다 마켓에서 확인해 보세요
								</div>
							</Column>
						</div>
						<div class="segment right">
							<img class="image" src={home_02_png}/>
							<Column class="content" justify="center">
								<div>
									Search
								</div>
								<div>
									구매를 원하는
									{is_desktop ? <br/> : "\u0020"}
									상품을 검색하세요
								</div>
								<div>
									구매하고 싶은 물품은 검색해서
									<br/>
									쉽게 찾아보세요
								</div>
							</Column>
						</div>
						<div class="segment left">
							<img class="image" src={home_03_png}/>
							<Column class="content" justify="center">
								<div>
									Register
								</div>
								<div>
									판매를 원하는
									{is_desktop ? <br/> : "\u0020"}
									상품을 등록하세요
								</div>
								<div>
									어떤 물건이든 판매하고 싶은 상품을
									<br/>
									쉽게 등록하세요
								</div>
							</Column>
						</div>		
					</Layout>
					<Center class="banner">
						<div class="wrapper">
							<Column class="heading" gap={24}>
								믿을 수 있는
								<br/>
								판다마켓 중고 거래
							</Column>
							<img class="background" src={banner_bottom_png}/>
						</div>
					</Center>
					<Footer>
					{[
						{
							name: "Privacy Policy",
							href: "/privacy",
						},
						{
							name: "FAQ",
							href: "/faq",
						},
					]}
					</Footer>
				</Column>
			</Spacer>
		</Page>
	);
}

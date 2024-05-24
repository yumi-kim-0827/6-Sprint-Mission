import "./index.scss";

import Box from "@/app/widgets/Box";
import Image from "@/app/widgets/Image";
import Header from "@/app/widgets/Header";
import Column from "@/app/widgets/Column";
import Spacer from "@/app/widgets/Spacer";
import Center from "@/app/widgets/Center";
import Footer from "@/app/widgets/Footer";

import { Link } from "react-router-dom";

import useViewport from "@/app/hooks/useViewport";

import home_01_png from "@/common/assets/images/home_01.png";
import home_02_png from "@/common/assets/images/home_02.png";
import home_03_png from "@/common/assets/images/home_03.png";
import banner_top_png from "@/common/assets/images/banner_top.png";
import banner_bottom_png from "@/common/assets/images/banner_bottom.png";

export default function Page()
{
	const { isMobile, isTablet, isDesktop } = useViewport();

	return (
		<Column data-page="index">
			<Header></Header>
			<Spacer>
				<Column id="content">
					<Center class="banner">
						<Box class="wrapper">
							<Column class="heading" gap={24}>
								일상의 모든 물건을
								{isTablet ? "\u0020" : <br></br>}
								거래해 보세요
								<Link to="/items">
									<Center class="button">
										구경하러 가기
									</Center>
								</Link>
							</Column>
							<Image class="background" src={banner_top_png}></Image>
						</Box>
					</Center>
					<Column class="container" align="center">
						<Box class={["segment", "left"]}>
							<Image class="image" src={home_01_png}></Image>
							<Column class="content" justify="center">
								<div>
									Hot Item
								</div>
								<div>
									인기 상품을
									{isDesktop ? <br></br> : "\u0020"}
									확인해 보세요
								</div>
								<div>
									가장 HOT한 중고거래 물품을
									<br></br>
									판다 마켓에서 확인해 보세요
								</div>
							</Column>
						</Box>
						<Box class={["segment", "right"]}>
							<Image class="image" src={home_02_png}></Image>
							<Column class="content" justify="center">
								<div>
									Search
								</div>
								<div>
									구매를 원하는
									{isDesktop ? <br></br> : "\u0020"}
									상품을 검색하세요
								</div>
								<div>
									구매하고 싶은 물품은 검색해서
									<br></br>
									쉽게 찾아보세요
								</div>
							</Column>
						</Box>
						<Box class={["segment", "left"]}>
							<Image class="image" src={home_03_png}></Image>
							<Column class="content" justify="center">
								<div>
									Register
								</div>
								<div>
									판매를 원하는
									{isDesktop ? <br></br> : "\u0020"}
									상품을 등록하세요
								</div>
								<div>
									어떤 물건이든 판매하고 싶은 상품을
									<br></br>
									쉽게 등록하세요
								</div>
							</Column>
						</Box>
					</Column>
					<Center class="banner">
						<Box class="wrapper">
							<Column class="heading" gap={24}>
								믿을 수 있는
								<br></br>
								판다마켓 중고 거래
							</Column>
							<Image class="background" src={banner_bottom_png}></Image>
						</Box>
					</Center>
					<Footer></Footer>
				</Column>
			</Spacer>
		</Column>
	);
}

import React from "react";

import "./index.scss";

import API from "api";

import Product from "./Product";
import DropDown from "./DropDown";
import Pagination from "./Pagination";

import Link from "app/widgets/Link";
import Button from "app/widgets/Button";

const limit = {
	all:
	{
		pc: 10, tablet: 6, mobile: 4,
	},
	best:
	{
		pc: 4, tablet: 2, mobile: 1,
	},
};

export default function ItemsPage({ })
{
	const [query, set_query] = React.useState({});
	const [filter, set_filter] = React.useState("");
	const [viewport, set_viewport] = React.useState(null);
	const [products_all, set_products_all] = React.useState(null);
	const [products_best, set_products_best] = React.useState(null);

	React.useEffect(() =>
	{
		
		set_viewport($.viewport);
		window.addEventListener("resize", $.onResize);
		return () => window.removeEventListener("resize", $.onResize);
	},
	[]);

	React.useEffect(() =>
	{
		API.get_products(query).then((products) => set_products_all((products_all) => products));
	},
	[query]);

	React.useEffect(() =>
	{
		if (viewport)
		{
			if (!products_all || products_all["list"].length < limit.all[viewport])
			{
				set_query((query) => ({ ...query, page_size: limit.all[viewport] })); // API.get_products(query).then(set_products_all);
			}
			if (!products_best || products_best["list"].length < limit.best[viewport])
			{
				API.get_products({ page_size: limit.best[viewport], order_by: "favorite" }).then((products) => set_products_best((products_best) => products));
			}
		}
	},
	[viewport])

	class $
	{
		//
		// getters
		//
		static get viewport()
		{
			if (1200 <= window.innerWidth)
			{
				return "pc";
			}
			if (768 <= window.innerWidth)
			{
				return "tablet";
			}
			if (375 <= window.innerWidth)
			{
				return "mobile";
			}
		}
		//
		// events
		//
		static onResize(event)
		{
			set_viewport((viewport) => $.viewport);
		}
	}

	return (
		<section data-widget={ItemsPage.name}>
			<header>
				<div class="container">
					<Link href="/">
						<img src={require("assets/icons/logo_face.svg").default} alt="판다마켓 로고" class="hide-on-mobile"/>
						<img src={require("assets/icons/logo_text.svg").default} alt="판다마켓 글자"/>
					</Link>
					<div class="links">
						<Link href="/posts">
							자유게시판
						</Link>
						<Link href="/items" style={{ color: "var(--blue)"}}>
							중고마켓
						</Link>
					</div>
					<Button href="/signin">
						로그인
					</Button>
				</div>
			</header>
			<main>
				<div class="container">
					<div class="divison">
						<h1 class="title">
							베스트 상품
						</h1>
					</div>
					<div class="products" style={{ gridTemplateColumns: `repeat(${Math.ceil(limit.best[viewport])}, 1fr)` }}>
						{products_best?.["list"]?.map((item, index, array) =>
						{
							return (
								<Product key={item.id} data={item}/>
							);
						})}
					</div>
				</div>
				<div class="container">
					<div class="division">
						<h1 class="title">
							{viewport === "pc" ? "전체 상품" : "판매 중인 상품"}
						</h1>
						<div class="query">
							<img src={require("assets/icons/search.svg").default}/>
							<input placeholder="검색할 상품을 입력해주세요" onChange={(event) => set_filter((filter) => event.target.value)}/>
						</div>
						<Button>
							상품 등록하기
						</Button>
						<DropDown class="dropdown" index={0} items={
						[
							{ name: "최신순", onClick: (event) => set_query((query) => ({ ...query, order_by: "recent" })) },
							{ name: "좋아요순", onClick: (event) =>  set_query((query) => ({ ...query, order_by: "favorite" })) },
						]}/>
					</div>
					<div class="products" style={{ gridTemplateColumns: `repeat(${Math.ceil(limit.all[viewport] / 2)}, 1fr)` }}>
						{products_all?.["list"]?.filter((item) => item.name.includes(filter)).map((item, index, array) =>
						{
							// TODO: filter by occurrence
							return (
								<Product key={item.id} data={item}/>
							);
						})}
					</div>
				</div>
			</main>
			<Pagination index={1} length={products_all ? Math.ceil(products_all["totalCount"] / limit.all[viewport]) : 0} onPaging={(index) => set_query((query) => ({...query, page: index }))}/>
		</section>
	);
}

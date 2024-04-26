import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";

import API from "@/api";

import Product from "./Product";
import DropDown from "./DropDown";
import Pagination from "./Pagination";

import Link from "@/app/widgets/design/Link";
import Button from "@/app/widgets/design/Button";
import Header from "@/app/widgets/design/Header";

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

export default function ItemsPage({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ })
{
	const [query, setQuery] = React.useState({});
	const [filter, setFilter] = React.useState("");
	const [viewport, setViewport] = React.useState(null);
	const [allProducts, setAllProducts] = React.useState(null);
	const [bestProducts, setBestProducts] = React.useState(null);

	React.useEffect(() =>
	{
		
		setViewport($.viewport);
		window.addEventListener("resize", $.onResize);
		return () => window.removeEventListener("resize", $.onResize);
	},
	[]);

	React.useEffect(() =>
	{
		API["products?"].GET({}, query).then((products) => setAllProducts((products_all) => products));
	},
	[query]);

	React.useEffect(() =>
	{
		if (viewport)
		{
			if (!allProducts || allProducts["list"].length < limit.all[viewport])
			{
				setQuery((query) => ({ ...query, pageSize: limit.all[viewport] }));
			}
			if (!bestProducts || bestProducts["list"].length < limit.best[viewport])
			{
				API["products?"].GET({}, { pageSize: limit.best[viewport], orderBy: "favorite" }).then((products) => setBestProducts((products_best) => products));
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
			setViewport((viewport) => $.viewport);
		}
	}

	return (
		<section {...widget(ItemsPage.name, { id, style, classes })}>
			<Header>
				<Link href="/posts">
					자유게시판
				</Link>
				<Link href="/items" style={{ "color": "var(--blue)" }}>
					중고마켓
				</Link>
			</Header>
			<main>
				<div class="container">
					<div class="divison">
						<h1 class="title">
							베스트 상품
						</h1>
					</div>
					<div class="products" style={{ gridTemplateColumns: `repeat(${Math.ceil(limit.best[viewport])}, 1fr)` }}>
						{bestProducts?.["list"]?.map((item, index, array) =>
						{
							return (
								<Link key={item.id} href={`/items/${item.id}`}>
									<Product data={item}/>
								</Link>
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
							<img src={require("@/assets/icons/search.svg").default}/>
							<input placeholder="검색할 상품을 입력해주세요" onChange={(event) => setFilter((filter) => event.target.value)}/>
						</div>
						<Button href="/additem">
							상품 등록하기
						</Button>
						<DropDown class="dropdown" index={0} items={
						[
							{ name: "최신순", onClick: (event) => setQuery((query) => ({ ...query, orderBy: "recent" })) },
							{ name: "좋아요순", onClick: (event) =>  setQuery((query) => ({ ...query, orderBy: "favorite" })) },
						]}/>
					</div>
					<div class="products" style={{ gridTemplateColumns: `repeat(${Math.ceil(limit.all[viewport] / 2)}, 1fr)` }}>
						{allProducts?.["list"]?.filter((item) => item.name.includes(filter)).map((item, index, array) =>
						{
							// TODO: filter by occurrence
							return (
								<Link key={item.id} href={`/items/${item.id}`}>
									<Product data={item}/>
								</Link>
							);
						})}
					</div>
				</div>
			</main>
			<Pagination index={1} length={allProducts ? Math.ceil(allProducts["totalCount"] / limit.all[viewport]) : 0} onPaging={(index) => setQuery((query) => ({...query, page: index }))}/>
		</section>
	);
}

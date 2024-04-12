import "./index.scss";

import API from "api";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from "app/widgets/Button";

import Product from "./Product";
import DropDown from "./DropDown";
import Pagination from "./Pagination";

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

function get_viewport()
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

export default function ItemsPage({ })
{
	const [query, set_query] = useState({});
	const [filter, set_filter] = useState("");
	const [viewport, set_viewport] = useState(null);
	const [products_all, set_products_all] = useState(null);
	const [products_best, set_products_best] = useState(null);

	function on_resize(event)
	{
		set_viewport(get_viewport());
	}

	function order_by(order)
	{
		set_query({ ...query, order_by: order });
	}

	useEffect(() =>
	{
		if (viewport)
		{
			if (!products_all || products_all["list"].length < limit.all[viewport])
			{
				set_query({ ...query, page_size: limit.all[viewport] }); // API.get_products(query).then(set_products_all);
			}
			if (!products_best || products_best["list"].length < limit.best[viewport])
			{
				API.get_products({ page_size: limit.best[viewport], order_by: "favorite" }).then(set_products_best);
			}
		}
	},
	[viewport])

	useEffect(() =>
	{
		API.get_products(query).then(set_products_all);
	},
	[query]);

	useEffect(() =>
	{
		set_viewport(get_viewport());
		window.addEventListener("resize", on_resize);
		return () => window.removeEventListener("resize", on_resize);
	},
	[]);

	return (
		<section data-widget={ItemsPage.name}>
			<header>
				<div className="container">
					<Link className="logo" to="/">
						<img src={require("assets/icons/logo_face.svg").default} alt="판다마켓 로고" className="hide-on-mobile"/>
						<img src={require("assets/icons/logo_text.svg").default} alt="판다마켓 글자"/>
					</Link>
					<div className="links">
						<Link to="/posts">
							자유게시판
						</Link>
						<Link to="/items" style={{ color: "var(--blue)"}}>
							중고마켓
						</Link>
					</div>
					<Button href="/signin">
						로그인
					</Button>
				</div>
			</header>
			<main>
				<div className="container">
					<div className="divison">
						<h1 className="title">
							베스트 상품
						</h1>
					</div>
					<div className="products" style={{ gridTemplateColumns: `repeat(${Math.ceil(limit.best[viewport])}, 1fr)` }}>
						{products_best?.["list"].slice(0, limit.best[viewport]).map((item, index, array) =>
						{
							return (
								<Product key={item.id} data={item}/>
							);
						})}
					</div>
				</div>
				<div className="container">
					<div className="division">
						<h1 className="title">
							{viewport === "pc" ? "전체 상품" : "판매 중인 상품"}
						</h1>
						<div className="query">
							<img src={require("assets/icons/search.svg").default}/>
							<input placeholder="검색할 상품을 입력해주세요" onChange={(event) => set_filter(event.target.value)}/>
						</div>
						<Button>
							상품 등록하기
						</Button>
						<DropDown className="dropdown" index={0} items={[{ name: "최신순", onClick: (event) => order_by("recent") }, { name: "좋아요순", onClick: (event) => order_by("favorite") }]}/>
					</div>
					<div className="products" style={{ gridTemplateColumns: `repeat(${Math.ceil(limit.all[viewport] / 2)}, 1fr)` }}>
						{products_all?.["list"].slice(0, limit.all[viewport]).filter((item) => item.name.includes(filter)).map((item, index, array) =>
						{
							// TODO: filter by occurrence
							return (
								<Product key={item.id} data={item}/>
							);
						})}
					</div>
				</div>
			</main>
			<Pagination index={1} length={products_all ? Math.ceil(products_all["totalCount"] / limit.all[viewport]) : 0} onPaging={(index) => set_query({...query, page: index })}/>
		</section>
	);
}

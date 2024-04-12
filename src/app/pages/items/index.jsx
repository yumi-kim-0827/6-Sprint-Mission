import styles from "./index.module.css";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Product from "./Product";
import DropDown from "./DropDown";
import Pagination from "./Pagination";

const best_items = { "pc": 3, "tablet": 2, "mobile": 1, };
const total_items = { "pc": 10, "tablet": 6, "mobile": 4, };

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
	return "unsupported";
}

export default function ItemsPage({ })
{
	let timer;

	const [keyword, set_keyword] = useState("");
	const [viewport, set_viewport] = useState(get_viewport());
	const [items, set_items] = useState({});
	const [query, set_query] = useState({ page: 1, pageSize: total_items[viewport], orderBy: "recent" });

	const on_resize = (event) =>
	{
		set_viewport(get_viewport());
	}

	useEffect(() =>
	{
		if (!items.list) return
		
		if (items.list.length < total_items[viewport])
		{
			set_query({ ...query, pageSize: total_items[viewport] });
		}
	},
	[viewport])

	useEffect(() =>
	{
		(async () => {
			const json = await (await fetch(`https://panda-market-api.vercel.app/products?${new URLSearchParams(query).toString()}`)).json();

			set_items(json);
		})();
	},
	[query]);

	useEffect(() =>
	{
		window.addEventListener("resize", on_resize);
		return () => window.removeEventListener("resize", on_resize);
	},
	[]);

	return (
		<>
			<header class={styles.header}>
				<div class="container">
					<Link class="logo" to="/">
						<img src={require("assets/icons/logo_face.svg").default} alt="판다마켓 로고" class="hide-on-mobile"/>
						<img src={require("assets/icons/logo_text.svg").default} alt="판다마켓 글자"/>
					</Link>
					<div class="links">
						<Link to="/posts">
							자유게시판
						</Link>
						<Link to="/items" style={{ color: "var(--blue)"}}>
							중고마켓
						</Link>
					</div>
					<Link class="button" to="/signin">
						로그인
					</Link>
				</div>
			</header>
			<main class={styles.main}>
				<div class="container">
					<div class="query">
						<h1 class="heading">
							베스트 상품
						</h1>
					</div>
					<div class="products" style={{ gridTemplateColumns: `repeat(${Math.ceil(best_items[viewport])}, 1fr)` }}>
						{items.list?.slice(0, best_items[viewport]).map((item, index, array) =>
						{
							return (
								<Product key={item.id} data={item}/>
							);
						})}
					</div>
				</div>
				<div class="container special">
					<div class="query">
						<h1 class="heading">
							{viewport === "pc" ? "전체 상품" : "판매 중인 상품"}
						</h1>
						<div class="wrapper">
							<img src={require("assets/icons/search.svg").default}/>
							<input placeholder="검색할 상품을 입력해주세요" onChange={(event) => set_keyword(event.target.value)}/>
						</div>
						<Link class="button">
							상품 등록하기
						</Link>
						<DropDown class="dropdown" index={0} items={[{ name: "최신순", onClick: (event) => set_query({...query, orderBy: "recent" }) }, { name: "좋아요순", onClick: (event) => set_query({...query, orderBy: "favorite" }) }]}/>
					</div>
					<div class="products" style={{ gridTemplateColumns: `repeat(${Math.ceil(total_items[viewport] / 2)}, 1fr)` }}>
						{items.list?.slice(0, total_items[viewport]).filter((item) => item.name.includes(keyword)).map((item, index, array) =>
						{
							return (
								<Product key={item.id} data={item}/>
							);
						})}
					</div>
				</div>
			</main>
			<Pagination index={query.page} length={Math.ceil(items.totalCount / total_items[viewport])} onPaging={(index) => set_query({...query, page: index })}/>
		</>
	);
}

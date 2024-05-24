import { useEffect, useState } from "react"; import "./index.scss";

import API from "@/app/api";

import Item from "./widgets/Item";

import Row from "@/app/widgets/Row";
import Header from "@/app/widgets/Header";
import Column from "@/app/widgets/Column";
import Spacer from "@/app/widgets/Spacer";
import Center from "@/app/widgets/Center";
import DropDown from "@/app/widgets/DropDown";
import Pagination from "@/app/widgets/Pagination";

import { Link } from "react-router-dom";

import useViewport from "@/app/hooks/useViewport";

import search_svg from "@/common/assets/icons/search.svg";
import arrow_left_svg from "@/common/assets/icons/arrow_left.svg";
import arrow_right_svg from "@/common/assets/icons/arrow_right.svg";

export default function Page()
{
	const { is_mobile, is_tablet, is_desktop } = useViewport();

	const [best, set_best] = useState([]); const [best_columns, set_best_columns] = useState(0);
	const [sale, set_sale] = useState([]); const [sale_columns, set_sale_columns] = useState(0);
	const [page, set_page] = useState(1);
	const [size, set_size] = useState(0);

	useEffect(() =>
	{
		API["products"].GET({ page: page, page_size: 4, order_by: "favorite" }).then((response) =>
		{
			set_best(response.list);
		});
	},
	[]);

	useEffect(() =>
	{
		API["products"].GET({ page: page, page_size: 10, order_by: "recent" }).then((response) =>
		{
			set_sale(response.list); set_size(response.totalCount);
		});
	},
	[page]);

	useEffect(() =>
	{
		if (is_mobile)
		{
			set_best_columns(1);
			set_sale_columns(2);
		}
	},
	[is_mobile]);

	useEffect(() =>
	{
		if (is_tablet)
		{
			set_best_columns(2);
			set_sale_columns(3);
		}
	},
	[is_tablet]);

	useEffect(() =>
	{
		if (is_desktop)
		{
			set_best_columns(4);
			set_sale_columns(5);
		}
	},
	[is_desktop]);

	return (
		<Column data-page="items">
			<Header>
				<Row id="navigation">
					<Link to="/posts">
						<Center>
							자유게시판
						</Center>
					</Link>
					<Link to="/items">
						<Center class="indexing">
							중고마켓
						</Center>
					</Link>
				</Row>
			</Header>
			<Spacer id="content">
				<Column gap={36} align="center">
					<Column class={["segment", "best"]}>
						<Row class="heading" gap={12} align="center">
							베스트 상품
						</Row>
						<div class="products" style={{ gridTemplateColumns: `repeat(${best_columns}, 1fr)` }}>
						{best.take(best_columns).map((data, index) =>
						{
							return (
								<Link key={index} to={`items/${data.id}`}>
									<Item data={data}></Item>
								</Link>
							);
						})}
						</div>
					</Column>
					<Column class={["segment", "sale"]}>
						<Row class="heading" gap={12} align="center">
							전체 상품
							<Spacer></Spacer>
							<Row class="search" align="center">
								<img src={search_svg}/>
								<Spacer>
									<input placeholder="검색할 상품을 입력해주세요"/>
								</Spacer>
							</Row>
							<Link to="/additem">
								<Center class="button">
									상품 등록하기
								</Center>
							</Link>
							<DropDown onSelect={(item) => console.log(item)}>
							{
								["최신순", "좋아요순"]
							}
							</DropDown>
						</Row>
						<div class="products" style={{ gridTemplateColumns: `repeat(${sale_columns}, 1fr)` }}>
						{sale.map((data, index) =>
						{
							return (
								<Link key={index} to={`items/${data.id}`}>
									<Item data={data}></Item>
								</Link>
							);
						})}
						</div>
					</Column>
				</Column>
			</Spacer>
			{0 < size && <Row id="pagination" gap={4} justify="center">
				<Center class="button" onClick={() => set_page((page - 1).clamp(1, Math.ceil(size / (sale_columns * 2))))}>
					<img src={arrow_left_svg}/>
				</Center>
				{new Array(Math.ceil(size / (sale_columns * 2))).fill(null).map((_, index) =>
				{
					return (
						<Center class={["button", { "indexing": index + 1 === page }]} key={index} onClick={() => set_page(index + 1)}>
						{
							index + 1
						}
						</Center>
					);
				})}
				<Center class={"button"} onClick={() => set_page((page + 1).clamp(1, Math.ceil(size / (sale_columns * 2))))}>
					<img src={arrow_right_svg}/>
				</Center>
			</Row>}
		</Column>
	);
}

import "./index.scss"; import { useEffect } from "react";

import API from "@/app/api";

import Row from "@/app/widgets/Row";
import Page from "@/app/widgets/Page";
import Header from "@/app/widgets/Header";
import Column from "@/app/widgets/Column";
import Spacer from "@/app/widgets/Spacer";
import Center from "@/app/widgets/Center";

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

export default function JSX()
{
	const params = useParams();

	useEffect(() =>
	{
		const product_id = Number(params.product_id);

		API["products/{product_id}"].GET({ product_id }).then((response) =>
		{
			console.log(response);
		});
		API["products/{product_id}/comments"].GET({ product_id, limit: 10 }).then((response) =>
		{
			console.log(response);
		});
	},
	[params]);

	return (
		<Page path="items/{product_id}">
			<Header>
			{[
				{
					name: "자유게시판", href: "/posts",
				},
				{
					name: "중고마켓", href: "/items",
				},
			]}
			</Header>
			<Spacer>
				<Column id="content" align="center">
					<div class="product">
						<div class="image"></div>
						<Column class="about">
							<div>
								아이패드 미니 팔아요
							</div>
							<div>
								500000원
							</div>
							<div>
								상품 소개
							</div>
						</Column>
					</div>
				</Column>
			</Spacer>
		</Page>
	);
}

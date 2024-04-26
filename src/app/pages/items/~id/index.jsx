import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";

import API from "@/api";

import Link from "@/app/widgets/design/Link";
import Button from "@/app/widgets/design/Button";
import Header from "@/app/widgets/design/Header";
import { useParams } from "react-router-dom";
import Column from "@/app/widgets/layout/Column";
import Spacer from "@/app/widgets/layout/Spacer";
import Row from "@/app/widgets/layout/Row";

export default function ItemsPage$ID({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ })
{
	const parms = useParams();
	const [product, setProduct] = React.useState(null);
	const [comments, setComments] = React.useState(null);

	React.useEffect(() =>
	{
		API["products/{productId}"].GET(parms).then((response) => setProduct((product) => response));
		API["products/{productId}/comments?"].GET(parms).then((response) => setComments((comments) => response));
	},
	[parms]);

	React.useEffect(() =>
	{
		console.log(product);
	},
	[product]);

	React.useEffect(() =>
	{
		console.log(comments);
	},
	[comments]);

	return (
		<section {...widget(ItemsPage$ID.name, { id, style, classes })}>
			<Header>
				<Link href="/posts">
					자유게시판
				</Link>
				<Link href="/items" style={{ "color": "var(--blue)" }}>
					중고마켓
				</Link>
			</Header>
			<main>
				<Column classes="container">
					{(() =>
					{
						if (product)
						{
							return (
								<div class="product">
									<div class="portrait" style={{ backgroundImage: `url("${product.images[0]}")` }}></div>
									<Column classes="details" align="flex-start" arrange="flex-start">
										<Row classes="name" arrange="space-between">
											{product.name}
											<img src={require("@/assets/icons/kebab.svg").default} alt="likes"/>
										</Row>
										<div class="price">
											{product.price.toString().split("").map((digit, index, array) => 0 < index && (array.length - index) % 3 === 0 ? "," + digit : digit).join("")}원
										</div>
										<hr style={{ marginTop: 12, marginBottom: 12 }}/>
										<Column classes="description" align="flex-start" arrange="flex-start" gap={8}>
											<div class="heading">
												상품 소개
											</div>
											<div class="content">
												{product.description}
											</div>
										</Column>
										<Column classes="tags" align="flex-start" arrange="flex-start" gap={8}>
											<div class="heading">
												상품 태그
											</div>
											<div class="content">
												{product.tags.map((tag, index, array) =>
												{
													return (
														<div key={index} class="chip">
															#{tag}
														</div>
													);
												})}
											</div>
										</Column>
										<Spacer classes={["hide-on-mobile"]}></Spacer>
										<Row classes="favoriteCount" gap={4}>
											<img src={require("@/assets/icons/favorite.svg").default} alt="likes"/>
											{product.favoriteCount}
										</Row>
									</Column>
								</div>
							);
						}
					})()}
					<hr style={{ marginTop: 24, marginBottom: 24 }}/>
					{(() =>
					{
						if (comments)
						{
							return (
								<Column classes="comments" align="stretch">
									<Column classes="mycomment" align="stretch" gap={16}>
										<Row classes="heading" arrange="flex-start">
											문의하기
										</Row>
										<textarea placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."/>
										<Row arrange="flex-end">
											<Button disabled={true}>
												등록
											</Button>
										</Row>
									</Column>
									{comments.list.map((comment, index, array) =>
									{
										const timestamp = (() =>
										{
											const [now, created] = [new Date(), new Date(Date.parse(comment.createdAt))];
											const [years, months, days, hours, minutes, seconds] = [now.getFullYear() - created.getFullYear(), now.getMonth() - created.getMonth(), now.getDate() - created.getDate(), now.getHours() - created.getHours(), now.getMinutes() - created.getMinutes()];
											const diff = [];

											if (0 < years)
											{
												diff.push(years + "년");
											}
											if (0 < months)
											{
												diff.push(months + "달");
											}
											if (0 < days)
											{
												diff.push(days + "일");
											}
											if (0 < hours)
											{
												diff.push(hours + "시간");
											}
											if (0 < minutes)
											{
												diff.push(minutes + "분");
											}
											if (0 < seconds && diff.isEmpty)
											{
												diff.push(seconds + "초");
											}
											return diff.concat("전").join("\u0020");
										})();


										return (
											<Column key={comment.id} classes="comment" align="flex-start" gap={24}>
												{comment.content}
												<Row gap={8}>
													<img class="avatar" src={comment.writer.image}/>
													<Column align="flex-start" gap={4}>
														<div class="nickname">
															{comment.writer.nickname}
														</div>
														<div class="timestamp">
															{timestamp}
														</div>
													</Column>
												</Row>
											</Column>
										);
									})}
								</Column>
							);
						}
					})()}
					<Button classes="rewind" href="/items">
						<Row gap={10}>
							목록으로 돌아가기
							<img src={require("@/assets/icons/return.svg").default} alt="return"/>
						</Row>
					</Button>
				</Column>
			</main>
		</section>
	);
}

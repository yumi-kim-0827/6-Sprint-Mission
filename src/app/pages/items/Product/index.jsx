import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";

export default function Product({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ data })
{
	return (
		<section {...widget(Product.name, { id, style, classes })}>
			<div class="portrait" style={{ backgroundImage: `url("${data.images[0]}")` }}></div>
			<div class="wrapper">
				<h1 class="title">
					{data.name}
				</h1>
				<span class="price">
					{data.price.toString().split("").map((digit, index, array) => 0 < index && (array.length - index) % 3 === 0 ? "," + digit : digit).join("")}
				</span>
				<span class="favorite">
					<img src={require("@/assets/icons/favorite.svg").default} alt="likes"/>
					{data.favoriteCount}
				</span>
			</div>
		</section>
	);
}

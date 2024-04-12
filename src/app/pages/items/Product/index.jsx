import "./index.scss";

export default function Product({ data })
{
	return (
		<section data-widget={Product.name}>
			<div className="portrait" style={{ backgroundImage: `url("${data.images[0]}")` }}></div>
			<div className="wrapper">
				<h1 className="title">
					{data.name}
				</h1>
				<span className="price">
					{data.price.toString().split("").map((digit, index, array) => 0 < index && (array.length - index) % 3 === 0 ? "," + digit : digit).join("")}
				</span>
				<span className="favorite">
					<img src={require("assets/icons/favorite.svg").default} alt="likes"/>
					{data.favoriteCount}
				</span>
			</div>
		</section>
	);
}

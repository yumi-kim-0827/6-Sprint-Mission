import styles from "./index.module.css";

export default function Product({ data })
{
	return (
		<section class={styles.widget}>
			<div class="portrait" style={{ backgroundImage: `url("${data.images[0]}")` }}></div>
			<div class="wrapper">
				<h1 class="heading">
					{data.name}
				</h1>
				<span class="price">
					{data.price.toString().split("").map((digit, index, array) => 0 < index && (array.length - index) % 3 === 0 ? "," + digit : digit).join("")}
				</span>
				<span class="favorite">
					<img src={require("assets/icons/favorite.svg").default}/>
					{data.favoriteCount}
				</span>
			</div>
		</section>
	);
}

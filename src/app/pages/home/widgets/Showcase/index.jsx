import styles from "./index.module.css";

export default function Showcase({ name, align, image, heading, subheading })
{
	return (
		<section class={[styles.widget, align].join("\u0020")}>
			<img src={image} alt={name}/>
			<div class="wrapper">
				<p class="name">
					{name}
				</p>
				<h1 class="heading">
					{heading.reduce((stash, current) => [...stash, <br key={current} class={["hide-on-tablet", "hide-on-mobile"].join("\u0020")}/>, current])}
				</h1>
				<h2 class="subheading">
					{subheading.reduce((stash, current) => [...stash, <br key={current}/>, current])}
				</h2>
			</div>
		</section>
	);
}

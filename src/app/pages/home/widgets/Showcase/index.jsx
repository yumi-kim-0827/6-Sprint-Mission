import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";

export default function Showcase({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ name, src, align, heading, subheading })
{
	return (
		<section {...widget(Showcase.name, { id, style, classes }, { $classes: [align] })}>
			<img src={src} alt={name}/>
			<div class="wrapper">
				<p class="name">
					{name}
				</p>
				<h1 class="heading">
					{heading.reduce((stash, current) => [...stash, <br key={current} class="hide-on-tablet hide-on-mobile"/>, current])}
				</h1>
				<h2 class="subheading">
					{subheading.reduce((stash, current) => [...stash, <br key={current}/>, current])}
				</h2>
			</div>
		</section>
	);
}

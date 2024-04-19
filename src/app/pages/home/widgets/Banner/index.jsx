import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";
// widgets/design
import Button from "@/app/widgets/design/Button";

export default function Banner({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ src, title, button })
{
	return (
		<section {...widget(Banner.name, { id, style, classes })}>
			<div class="container">
				<div class="wrapper">
					<div class="title">
						{title.reduce((stash, current) => [...stash, <br key={current} class="hide-on-tablet"/>, current])}
					</div>
					{(() =>
					{
						if (button)
						{
							return (
								<Button href="/items">구경하러 가기</Button>
							);
						}
					})()}
				</div>
				<img src={src} alt="광고"/>
			</div>
		</section>
	)	
}

import React from "react";

import "./index.scss";

import Button from "app/widgets/Button";

export default function Banner({ src, title, button })
{
	return (
		<section data-widget={Banner.name}>
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

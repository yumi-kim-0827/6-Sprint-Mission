import "./index.scss";

import Button from "app/widgets/Button";

export default function Banner({ src, title, button })
{
	return (
		<section data-widget={Banner.name}>
			<div className="container">
				<div className="wrapper">
					<div className="title">
						{title.reduce((stash, current) => [...stash, <br key={current} className="hide-on-tablet"/>, current])}
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

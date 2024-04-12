import "./index.scss";

export default function Showcase({ name, align, image, heading, subheading })
{
	return (
		<section data-widget={Showcase.name} className={align}>
			<img src={image} alt={name}/>
			<div className="wrapper">
				<p className="name">
					{name}
				</p>
				<h1 className="heading">
					{heading.reduce((stash, current) => [...stash, <br key={current} className="hide-on-tablet hide-on-mobile"/>, current])}
				</h1>
				<h2 className="subheading">
					{subheading.reduce((stash, current) => [...stash, <br key={current}/>, current])}
				</h2>
			</div>
		</section>
	);
}

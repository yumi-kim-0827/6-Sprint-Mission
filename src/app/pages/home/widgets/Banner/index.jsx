import styles from "./index.module.css";

import { Link } from "react-router-dom";


export default function Banner({ src, title, button })
{
	return (
		<section class={styles.widget}>
			<div class="container">
				<div class="wrapper">
					<h1 class="title">
						{title.reduce((stash, current) => [...stash, <br key={current} class="hide-on-tablet"/>, current])}
					</h1>
					{button && <Link class="button" to="/items">구경하러 가기</Link>}
				</div>
				<img src={src} alt="광고"/>
			</div>
		</section>
	)	
}

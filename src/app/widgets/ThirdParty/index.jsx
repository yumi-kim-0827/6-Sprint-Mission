import "./index.scss";

import { Link } from "react-router-dom";

export default function ThirdParty({ })
{
	return (
		<section data-widget={ThirdParty.name}>
			간편 로그인 하기
			<div class="wrapper">
				<Link class="service" to="https://www.google.com" target="_blank">
					<img src={require("assets/icons/google.svg").default} alt="구글 계정으로 로그인"/>
				</Link>
				<Link class="service" to="https://www.kakaocorp.com/service/KakaoTalk" target="_blank">
					<img src={require("assets/icons/kakaotalk.svg").default} alt="카카오톡 계정으로 로그인"/>
				</Link>
			</div>
		</section>
	);
}

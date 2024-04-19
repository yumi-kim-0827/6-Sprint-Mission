import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";
// assets
import google_svg from "@/assets/icons/google.svg";
import kakaotalk_svg from "@/assets/icons/kakaotalk.svg";

/**
  * @param {object} props
  **/
export default function ThirdParty({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ })
{
	return (
		<section {...widget(ThirdParty.name, { id, style, classes })}>
			간편 로그인 하기
			<div class="wrapper">
				<a class="service" href="https://www.google.com" target="_blank">
					<img src={google_svg} alt="구글 계정으로 로그인"/>
				</a>
				<a class="service" href="https://www.kakaocorp.com/service/KakaoTalk" target="_blank">
					<img src={kakaotalk_svg} alt="카카오톡 계정으로 로그인"/>
				</a>
			</div>
		</section>
	);
}

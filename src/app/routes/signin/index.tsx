import "./index.scss";

import Box from "@/app/widgets/Box";
import Row from "@/app/widgets/Row";
import Image from "@/app/widgets/Image";
import Header from "@/app/widgets/Header";
import Column from "@/app/widgets/Column";
import Spacer from "@/app/widgets/Spacer";
import Center from "@/app/widgets/Center";
import Footer from "@/app/widgets/Footer";

import { Link } from "react-router-dom";

import google_svg from "@/common/assets/icons/google.svg";
import kakaotalk_svg from "@/common/assets/icons/kakaotalk.svg";
import visible_svg from "@/common/assets/icons/visible.svg";
import invisible_svg from "@/common/assets/icons/invisible.svg";
import logo_full_svg from "@/common/assets/icons/logo_full.svg";

export default function Page()
{
	return (
		<Column data-page="signin" align="center">
			<Link to="/">
				<Image id="company" src={logo_full_svg}></Image>
			</Link>
			<Column id="content" gap={24}>
				<form>
					<Column class="auth" gap={24}>
						{[
							{
								id: "이메일", type: "email", pattern: /[^@\s]+@[^@\s]+\.[^@\s]+/, placeholder: "이메일을 입력해주세요", autocomplete: "email",
							},
							{
								id: "비밀번호", type: "password", minlength: 8, maxlength: 16, placeholder: "비밀번호를 입력해주세요", autocomplete: "password",
							},
						]
						.map((args, index) =>
						{
							return (
								<Column class="field" key={index}>
									<label htmlFor={args.id}>
									{
										args.id
									}
									</label>
									<Row class="input" align="center">
										<Spacer>
											<input id={args.id} type={args.type} pattern={args.pattern?.toString()} minLength={args.minlength} maxLength={args.maxlength} placeholder={args.placeholder} autoComplete={args.autocomplete}></input>
										</Spacer>
										{
											args.type === "password" && <Image class="visibility" src={visible_svg}></Image>
										}
									</Row>
								</Column>
							);
						})}
						<Center class="button">
							로그인
						</Center>
					</Column>
				</form>
				<Row class="3rd-party" gap={16} align="center">
					간편 로그인 하기
					<Spacer></Spacer>
					<Image src={google_svg}></Image>
					<Image src={kakaotalk_svg}></Image>
				</Row>
				<Box class="assistance">
					판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
				</Box>
			</Column>
		</Column>
	);
}

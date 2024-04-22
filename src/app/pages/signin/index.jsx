import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";

import 한글 from "@/utilities/한글";

import Link from "@/app/widgets/design/Link";
import AuthForm from "@/app/widgets/design/AuthForm";
import ThirdParty from "@/app/widgets/design/ThirdParty";

const fields = {
	"email": { type: "email", alt: "이메일", pattern: "[^@\\s]+@[^@\\s]+\\.[^@\\s]+", autocomeplete: "email", placeholder: "이메일을 입력해주세요" },
	"password": { type: "password", alt: "비밀번호", minlength: 8, maxlength: 16, autocomeplete: "password", placeholder: "비밀번호를 입력해주세요" },
};

for (const [key, value] of Object.entries(fields))
{
	const validators = [
		(key, refs, msgs) =>
		{
			if (refs[key].value.isEmpty)
			{
				return refs[key].placeholder;
			}
		}
	];

	if (value.pattern)
	{
		validators.push(
			(key, refs, msgs) =>
			{
				if (!new RegExp(refs[key].pattern).test(refs[key].value))
				{
					return `잘못된 ${refs[key].alt} 형식입니다.`;
				}
			}
		);
	}
	if (value.minlength)
	{
		validators.push(
			(key, refs, msgs) =>
			{
				if (refs[key].value.length < refs[key].minLength)
				{
					return `${한글["을/를"](refs[key].alt)} ${refs[key].minLength}자 이상 입력해주세요.`;
				}
			}
		);
	}
	if (value.maxlength)
	{
		validators.push(
			(key, refs, msgs) =>
			{
				if (refs[key].maxLength < refs[key].value.length)
				{
					return `${한글["을/를"](refs[key].alt)} ${refs[key].minLength}자 이하 입력해주세요.`;
				}
			}
		);
	}
	fields[key].validators = validators;
}

export default function SignInPage({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ })
{
	const hooks = new Map(Object.entries(
	{
		"navigate": require("react-router-dom").useNavigate(),
	}));

	return (
		<section {...widget(SignInPage.name, { id, style, classes })}>
			<header>
				<Link href="/">
					<img src={require("@/assets/icons/logo_full.svg").default} alt="판다마켓"/>
				</Link>
			</header>
			<main>
				<div class="container">
					<AuthForm fields={fields} onSubmit={() => hooks.get("navigate")("/items")}>
						로그인
					</AuthForm>
					<ThirdParty/>
					<p class="assistance">
						판다마켓이 처음이신가요? <Link href="/signup">회원가입</Link>
					</p>
				</div>
			</main>
		</section>
	);
}

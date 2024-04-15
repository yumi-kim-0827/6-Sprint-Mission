import "./index.scss";

import 한글 from "utilities/한글";

import Link from "app/widgets/Link";
import AuthForm from "app/widgets/AuthForm";
import ThirdParty from "app/widgets/ThirdParty";

const fields = {
	"email": { type: "email", alt: "이메일", pattern: "[^@\\s]+@[^@\\s]+\\.[^@\\s]+", autocomeplete: "email", placeholder: "이메일을 입력해주세요" },
	"username": { type: "text", alt: "닉네임", pattern: "^[a-zA-Z][a-zA-Z0-9_]*$", minlength: 2, maxlength: 8, placeholder: "닉네임을 입력해주세요" },
	"new-password": { type: "password", alt: "비밀번호", minlength: 8, maxlength: 16, autocomeplete: "new-password", placeholder: "비밀번호를 입력해주세요" },
	"confirm-password": { type: "password", alt: "비밀번호 확인", minlength: 8, maxlength: 16, autocomeplete: "new-password", placeholder: "비밀번호를 다시 한번 입력해주세요" },
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


fields["confirm-password"].validators = [
	(key, refs, msgs) =>
	{
		if (refs[key].value.isEmpty)
		{
			return refs[key].placeholder;
		}
	},
	(key, refs, msgs) =>
	{
		if (msgs["new-password"] !== "null")
		{
			return "비밀번호를 확인해 주세요.";
		}
	},
	(key, refs, msgs) =>
	{
		if (refs["new-password"].value !== refs["confirm-password"].value)
		{
			return "비밀번호가 일치하지 않습니다.";
		}
	}
];

export default function SignUpPage({ })
{
	const hooks = new Map(Object.entries(
	{
		"navigate": require("react-router-dom").useNavigate(),
	}));

	return (
		<section data-widget={SignUpPage.name}>
			<header>
				<Link href="/">
					<img src={require("assets/icons/logo_full.svg").default} alt="판다마켓"/>
				</Link>
			</header>
			<main>
				<div class="container">
					<AuthForm fields={fields} onSubmit={() => hooks.get("navigate")("/")}>
						회원가입
					</AuthForm>
					<ThirdParty/>
					<p class="assistance">
						이미 회원이신가요? <Link href="/signin">로그인</Link>
					</p>
				</div>
			</main>
		</section>
	);
}

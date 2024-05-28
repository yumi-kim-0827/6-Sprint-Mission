import { Link, useLocation } from "react-router-dom";

import logo_face_svg from "@/common/assets/icons/logo_face.svg";
import logo_text_svg from "@/common/assets/icons/logo_text.svg";

export default function Header({ children }: { children: { name: string; href: string; }[] })
{
	const location = useLocation();

	return (
		<header class="flex sticky top-0 z-10 bg-[#FFFFFF]">
			<div class="flex justify-between w-full h-[70px] py-[10px] mobile:mx-[16px] tablet:mx-[24px] desktop:mx-[200px]">
				<Link to="/">
					<div class="flex items-center h-full gap-[10px]">
						<img src={logo_face_svg} class="mobile:hidden"/>
						<img src={logo_text_svg}/>
					</div>
				</Link>
				<div class="flex grow gap-[8px] mobile:px-[16px] tablet:px-[20px] desktop:px-[32px]">
				{children.map((args, index) =>
				(
					<Link key={index} to={args.href}>
						<div class="flex items-center justify-center font-[700] h-full mobile:text-[16px] tablet:text-[18px] desktop:text-[18px] tablet:px-[16px] desktop:px-[16px] tablet:min-w-[109px] desktop:min-w-[109px]" style={{ color: new RegExp("^" + args.href).test(location.pathname) ? "#3692FF" : "#4B5563" }}>
						{
							args.name
						}
						</div>
					</Link>
				))}
				</div>
				<Link to="/signin">
					<div class="button font-[500] rounded-[8px]">
						로그인
					</div>
				</Link>
			</div>
		</header>
	);
}

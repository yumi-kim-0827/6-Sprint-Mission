import { StrictMode } from "react"; import { BrowserRouter, Routes, Route } from "react-router-dom"; import { createRoot } from "react-dom/client";

import "@/common/plugins/index.js";

import App from "@/app";

import $index from "@/app/routes/!";
import $signin from "@/app/routes/signin";
import $signup from "@/app/routes/signup";
import $items from "@/app/routes/items"; import $items$product_id from "@/app/routes/items/[[product_id]]";
import $additem from "@/app/routes/additem";

createRoot(document.getElementById("core")!!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App></App>}>
					{/* HOME */}
					<Route index element={<$index></$index>}></Route>
					{/* PAGES */}
					<Route path="signin">
						<Route index element={<$signin></$signin>}></Route>
					</Route>
					<Route path="signup">
						<Route index element={<$signup></$signup>}></Route>
					</Route>
					<Route path="items">
						<Route index element={<$items></$items>}></Route>
						<Route path=":product_id" element={<$items$product_id></$items$product_id>}></Route>
					</Route>
					<Route path="additem">
						<Route index element={<$additem></$additem>}></Route>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);

enum Screen
{
	MOBILE_MIN = 375, MOBILE_MAX = 768 - 1, TABLET_MIN = 768, TABLET_MAX = 1200 - 1, PC_MIN = 1200, PC_FHD = 1920,
}

if (false && /localhost/.test(window.location.toString()))
{
	switch (window.opener)
	{
		case null:
		{
			window.open(window.location.toString(), "simulation", ["popup", `width=${Screen.PC_FHD}`].join(","));
			break;
		}
		default:
		{
			const values = Object.values(Screen).skip(Object.values(Screen).length / 2) as Screen[]; let index = 0;

			function simulate(index: number)
			{
				window.resizeTo(values[index] + (window.outerWidth - window.innerWidth), window.outerHeight);
			}

			window.addEventListener("keydown", (event) =>
			{
				switch (event.key)
				{
					case "ArrowLeft":
					{
						simulate(index = (index - 1).clamp(0, values.length - 1));
						break;
					}
					case "ArrowRight":
					{
						simulate(index = (index + 1).clamp(0, values.length - 1));
						break;
					}
				}
			});
			break;
		}
	}
}

import "./index.css";

import { StrictMode } from "react";

import HomePage from "app/pages/home";
import ItemsPage from "app/pages/items";
import SignInPage from "app/pages/signin";
import SignUpPage from "app/pages/signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";

require("react-dom/client").createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/items" element={<ItemsPage/>}/>
				<Route path="/signin" element={<SignInPage/>}/>
				<Route path="/signup" element={<SignUpPage/>}/>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);

if (/localhost/.test(window.location))
{
	const viewport = {
		["Mobile@Min"]: 375, ["Mobile@Max"]: 768 - 1, ["Tablet@Min"]: 768, ["Tablet@Max"]: 1200 - 1, ["PC@Min"]: 1200, ["PC@FHD"]: 1920,
	};

	let index = Object.keys(viewport).length - 1;

	switch (window.opener)
	{
		case null:
		{
			window.open(window.location, "simulation", ["popup", `width=${viewport[Object.keys(viewport)[index]]}`].join(","));
			break;
		}
		default:
		{
			function clamp(value, min, max)
			{
				return value < min ? min : max < value ? max : value;
			}

			function simulate()
			{
				window.resizeTo(viewport[Object.keys(viewport)[index]] + (window.outerWidth - window.innerWidth), window.outerHeight);
			}

			window.addEventListener("keydown", (event) =>
			{
				switch (event.key)
				{
					case "ArrowLeft":
					{
						index = clamp(index - 1, 0, Object.keys(viewport).length - 1);
						simulate();
						break;
					}
					case "ArrowRight":
					{
						index = clamp(index + 1, 0, Object.keys(viewport).length - 1);
						simulate();
						break;
					}
				}
			});
			break;
		}
	}
}

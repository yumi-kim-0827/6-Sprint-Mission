import "./primitive/number.js";
import "./primitive/string.js";

import "./reference/array.js";
import "./reference/map.js";
import "./reference/set.js";

const viewport = new Map(Object.entries({
	["Mobile@Min"]: 375, ["Mobile@Max"]: 768 - 1, ["Tablet@Min"]: 768, ["Tablet@Max"]: 1200 - 1, ["PC@Min"]: 1200, ["PC@FHD"]: 1920,
}));

if (/localhost/.test(window.location) && true)
{
	let index = viewport.size - 1;

	switch (window.opener)
	{
		case null:
		{
			window.open(window.location, "simulation", ["popup", `width=${viewport.get([...viewport.keys()][index])}`].join(","));
			break;
		}
		default:
		{
			function simulate()
			{
				window.resizeTo(viewport.get([...viewport.keys()][index]) + (window.outerWidth - window.innerWidth), window.outerHeight);
			}

			window.addEventListener("keydown", (event) =>
			{
				switch (event.key)
				{
					case "ArrowLeft":
					{
						index = (index - 1).clamp(0, viewport.size - 1);
						simulate();
						break;
					}
					case "ArrowRight":
					{
						index = (index + 1).clamp(0, viewport.size - 1);
						simulate();
						break;
					}
				}
			});
			break;
		}
	}
}

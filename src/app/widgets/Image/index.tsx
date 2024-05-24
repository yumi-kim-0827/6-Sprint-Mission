import { useState, useRef } from "react"; import "./index.scss"; import widget from "@/common/utilities/widget.js"; import type { Props } from "@/common/utilities/widget.js";

import useObserver from "@/app/hooks/useObserver";

/**
  * The smallest valid transparent GIF
  * @see https://stackoverflow.com/a/15960901
  **/
const base64 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAIBAAA=";

export default function Image(props: Props & { src: string; } )
{
	const [src, set_src] = useState(base64); const self = useRef(null);

	useObserver(self, 0.1, () =>
	{
		const img = document.createElement("img");

		img.addEventListener("load", (event) =>
		{
			// after image is fully loaded
			set_src(props.src);
		});
		// apply
		img.src = props.src;
	},
	[]);

	return (
		<img { ...widget("Image", props) } ref={self} src={src} alt="image" loading="lazy" onError={() => set_src(base64)}></img>
	);
}

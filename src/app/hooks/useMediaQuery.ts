import { useEffect, useState } from "react";

/** @see https://usehooks-ts.com/react-hook/use-media-query */
export default function useMediaQuery(query: string)
{
	const [matches, set_matches] = useState(satisfy(query));

	useEffect(() =>
	{
		const media = window.matchMedia(query);

		set_matches(media.matches);

		function onChange()
		{
			set_matches(media.matches);
		}
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	},
	[query]);

	return matches;
}

function satisfy(query: string)
{
	return typeof window === "undefined" ? false : window.matchMedia(query).matches;
}

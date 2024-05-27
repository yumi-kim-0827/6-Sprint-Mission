const [$mobile, $tablet, $desktop] = [375, 768, 1200];

/** @type {import("tailwindcss").Config} */
export default
{
	theme:
	{
		screens:
		{
			"mobile":
			{
				min: $mobile + "px", max: ($tablet - 1) + "px"
			},
			"tablet":
			{
				min: $tablet + "px", max: ($desktop - 1) + "px"
			},
			"desktop":
			{
				min: $desktop + "px"
			},
		},
	},
	content:
	[
		"./index.html",
		"./src/**/*.js",
		"./src/**/*.jsx",
		"./src/**/*.ts",
		"./src/**/*.tsx",
	],
	plugins:
	[

	],
}

import React from "react"; import "./index.scss"; import widget from "@/utilities/widget";

import Button from "@/app/widgets/design/Button";

/**
  * @param {object} props
  **/
export default function AuthForm({ /* html */ id = null, style = {}, classes = [], children = [], /* props */ fields = [], onSubmit = null })
{
	const [refs, setRefs] = React.useState(() =>
	{
		const state = {};

		for (const [key, value] of Object.entries(fields))
		{
			state[key] = null;
		}
		return state;
	});
	const [msgs, setMsgs] = React.useState(() =>
	{
		const state = {};

		for (const [key, value] of Object.entries(fields))
		{
			state[key] = null;
		}
		return state;
	});

	class Widget
	{
		static validate()
		{
			for (const [key, value] of Object.entries(fields))
			{
				if (refs[key])
				{
					let response;
	
					for (const validator of value.validators)
					{
						if (response = validator(key, refs, msgs))
						{
							break;
						}
					}
					msgs[key] = response ?? "null";	
				}
			}
			setMsgs((msgs) => ({ ...msgs }));
		}
	}

	return (
		<form {...widget(AuthForm.name, { id, style, classes })}>
			<div class="fields">
				{Object.keys(fields).map((key, index, array) =>
				{
					return (
						<div key={key} class="data">
							<label for={fields[key].id}>{fields[key].alt}</label>
							<div class="wrapper" data-msg={msgs[key]}>
								<input {...fields[key]} id={key} required={true} validators={null} onBlur={(event) => Widget.validate()} onFocus={(event) => refs[key] = event.target} onChange={(event) => Widget.validate()}/>
							</div>
						</div>
					);
				})}
			</div>
			<Button disabled={!Object.values(msgs).every((msg, index, array) => msg === "null")} onClick={onSubmit}>
				{children}
			</Button>
		</form>
	);
}

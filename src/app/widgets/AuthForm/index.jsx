import React from "react";

import "./index.scss";

import Button from "app/widgets/Button";

export default function AuthForm({ fields, children, onSubmit })
{
	const [refs, set_refs] = React.useState(() =>
	{
		const state = {};

		for (const [key, value] of Object.entries(fields))
		{
			state[key] = null;
		}
		return state;
	});
	const [msgs, set_msgs] = React.useState(() =>
	{
		const state = {};

		for (const [key, value] of Object.entries(fields))
		{
			state[key] = null;
		}
		return state;
	});

	class $
	{
		//
		// getters
		//
		static get is_invalid()
		{
			return !Object.values(msgs).every((msg, index, array) => msg === "null");
		}
		//
		// methods
		//
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
			set_msgs({ ...msgs });
		}
	}

	return (
		<form data-widget={AuthForm.name}>
			<div class="fields">
				{Object.keys(fields).map((key, index, array) =>
				{
					return (
						<div key={key} class="data">
							<label for={fields[key].id}>{fields[key].alt}</label>
							<div class="wrapper" data-msg={msgs[key]}>
								<input {...fields[key]} id={key} required={true} validators={null} onBlur={(event) => $.validate()} onFocus={(event) => refs[key] = event.target} onChange={(event) => $.validate()}/>
							</div>
						</div>
					);
				})}
			</div>
			<Button disabled={$.is_invalid} onClick={onSubmit}>
				{children}
			</Button>
		</form>
	);
}

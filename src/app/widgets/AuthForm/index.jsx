import "./index.scss";

import { useState } from "react";

import Button from "app/widgets/Button";

export default function AuthForm({ fields, children, onClick })
{
	const refs = {};
	
	const [msgs, set_msgs] = useState(() =>
	{
		const state = {};

		for (const [key, value] of Object.entries(fields))
		{
			state[key] = null;
		}
		return state;
	});

	function validate()
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

	return (
		<form data-widget={AuthForm.name}>
			<div class="fields">
				{Object.keys(fields).map((key, index, array) =>
				{
					return (
						<div key={key} class="data">
							<label for={fields[key].id}>{fields[key].alt}</label>
							<div class="wrapper" data-error={msgs[key]}>
								<input {...fields[key]} id={key} required={true} validators={null} onFocus={(event) => refs[key] = event.target} onBlur={validate} onChange={validate}/>
							</div>
						</div>
					);
				})}
			</div>
			<Button disabled={!Object.values(msgs).every((msg, index, array) => msg === "null")} onClick={onClick}>
				{children}
			</Button>
		</form>
	);
}

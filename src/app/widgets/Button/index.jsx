import "./index.scss";

import { useNavigate } from "react-router-dom";

export default function Button({ href, disabled, children, onClick })
{
	const navigate = useNavigate();

	function on_click(event)
	{
		if (!disabled)
		{
			if (href)
			{
				return navigate(href); // im pretty sure i should not allow both href and click handler working together
			}
			else
			{
				return onClick?.(event);
			}
		}
	}

	return (
		<section data-widget={Button.name} class={disabled && "disabled"} onClick={on_click}>
			{children}
		</section>
	);
}

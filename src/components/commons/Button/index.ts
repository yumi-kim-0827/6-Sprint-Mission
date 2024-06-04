import DefaultButton from "./DefaultButon";
import LinkButton from "./LinkButton";

const Button = Object.assign(DefaultButton, {
  Link: LinkButton,
});

export default Button;

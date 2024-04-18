import LinkButton from "./LinkButton";
import ButtonMain from "./Button";
import SubmitButton from "./SubmitButton";

export const Button = Object.assign(ButtonMain, {
  Link: LinkButton,
  Submit: SubmitButton,
});

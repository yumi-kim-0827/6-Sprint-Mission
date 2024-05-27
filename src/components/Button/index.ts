import LinkButton from "./LinkButton";
import ButtonMain from "./Button";
import SubmitButton from "./SubmitButton";
import LikeButton from "./LikeButton";

const Button = Object.assign(ButtonMain, {
  Link: LinkButton,
  Submit: SubmitButton,
  Like: LikeButton,
});

export default Button;

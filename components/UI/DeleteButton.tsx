import { ReactComponent as CloseIcon } from "@/src/assets/images/icons/ic_x.svg";
import style from "./DeleteButton.module.scss";

interface DeleteButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick, label }) => {
  return (
    <button
      className={style.button}
      aria-label={`${label} 삭제`}
      onClick={onClick}
    >
      <CloseIcon />
    </button>
  );
};

export default DeleteButton;

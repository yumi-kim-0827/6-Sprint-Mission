interface BaseButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onSubmit?: () => void;
  disabled?: boolean;
  size?: "small" | "large";
  type?: "button" | "submit";
}

function BaseButton({
  children,
  className,
  onClick,
  onSubmit,
  disabled,
  type = "button",
}: BaseButtonProps) {
  return (
    <button
      type={type}
      className={`flexcenter "w-32 h-12 text-base font-semibold text-white border-none rounded-[8px] focus:outline-none bg-blue hover:bg-[#1967d6] active:bg-[#1251aa] disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}>
      {children}
    </button>
  );
}

export default BaseButton;

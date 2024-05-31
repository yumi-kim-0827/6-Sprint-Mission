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
      className={`flexcenter w-128 rounded-8 text-16 h-48 border-none bg-blue font-semibold text-white hover:bg-[#1967d6] focus:outline-none active:bg-[#1251aa] disabled:cursor-not-allowed disabled:bg-gray-400 ${className}`}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default BaseButton;

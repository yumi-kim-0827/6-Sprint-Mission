import { useEffect, useRef, useState } from "react";

interface BaseDropdownProps {
  className?: string;
  buttonContent: React.ReactNode;
  children: React.ReactNode;
}

const BaseDropdown = ({
  className,
  buttonContent,
  children,
}: BaseDropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative [&_button:hover]:bg-[#00000005] focus:outline-none ${className}`}
      ref={dropdownRef}>
      <div
        className="flexcenter h-[42px] px-[12px] border border-gray-200 rounded-[12px] bg-white text-[16px] "
        onClick={toggleDropdown}>
        {buttonContent}
      </div>
      {isVisible && (
        <div className="absolute top-full right-0 z-[2] mt-1 border border-gray-200 rounded-[12px] bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default BaseDropdown;

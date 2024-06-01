import {
  SORT_OBJECT,
  SORT_OBJECT_KEY_TYPE,
} from "@/shared/constants/constants";
import { useScreenDetector } from "@/shared/lib/hooks";
import Image from "next/image";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  value: SORT_OBJECT_KEY_TYPE;
  setValue: Dispatch<SetStateAction<SORT_OBJECT_KEY_TYPE>>;
}

// value, setValue, items를 받아서 value를 바꾸는 로직
export const Dropdown = ({ ...props }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { value, setValue } = props;
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { isMobile } = useScreenDetector();

  const handleClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const element = buttonRef.current;
    if (!element) return;
    const handleClick = (e: MouseEvent) => {
      if (element !== e.target) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="flex items-center border-[#e5e7eb] border rounded-xl p-[9px] md:px-5 md:py-3 text-base h-[42px] relative"
    >
      {isMobile && (
        <Image
          className="md:hidden"
          src="/icons/arrowDownM.png"
          width={24}
          height={24}
          alt="sort button"
        />
      )}
      {!isMobile && (
        <>
          {SORT_OBJECT[value]}
          <Image
            className="hidden md:inline"
            width={24}
            height={24}
            src="/icons/arrowDown.png"
            alt="sort button"
          />
        </>
      )}
      {isOpen && (
        <ul className="absolute top-10 right-0 w-[125px] md:w-full bg-white border border-[#e5e7eb] rounded-xl">
          {Object.keys(SORT_OBJECT).map((item, index) => (
            <li
              key={index}
              onClick={() => setValue(() => item as SORT_OBJECT_KEY_TYPE)}
              className="h-[42px] flex justify-center items-center border-[#e5e7eb] border hover:bg-[#9CA3AF]"
            >
              {SORT_OBJECT[item as SORT_OBJECT_KEY_TYPE]}
            </li>
          ))}
        </ul>
      )}
    </button>
  );
};

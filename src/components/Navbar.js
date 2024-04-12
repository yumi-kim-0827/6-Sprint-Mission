import { Link } from "react-router-dom";

import pandalogo from "../images/panda_logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="flex justify-between px-4 sm:px-8 lg:px-48 py-2.5">
        <ul className="flex items-center">
          <li>
            <Link to="/" className="flex items-center">
              <img
                src={pandalogo}
                alt="pandalogo"
                className="hidden sm:block"
              />
              <span className="font-bold text-[color:var(--btn-blue1)] text-2xl sm:ml-1">
                판다마켓
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="font-bold text-[#4B5563] text-lg sm:text-base ml-4 sm:ml-9 lg:ml-12">
                자유게시판
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="font-bold text-[color:var(--btn-blue1)] text-lg sm:text-base ml-2 sm:ml-10 lg:ml-10">
                중고마켓
              </span>
            </Link>
          </li>
        </ul>
        <button className="px-6 py-3 bg-[var(--btn-blue1)] rounded-lg text-white">
          로그인
        </button>
      </div>
    </nav>
  );
}

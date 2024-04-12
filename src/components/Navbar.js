import { NavLink } from "react-router-dom";

import pandalogo from "../images/panda_logo.png";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="flex justify-between px-4 py-2.5 sm:px-8 lg:px-48">
        <ul className="flex items-center">
          <li>
            <NavLink to="/" className="flex items-center">
              <img
                src={pandalogo}
                alt="pandalogo"
                className="hidden sm:block"
              />
              <span className="text-2xl font-bold text-[color:var(--btn-blue1)] sm:ml-1">
                판다마켓
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <span className="ml-4 text-lg font-bold text-[#4B5563] sm:ml-9 sm:text-base lg:ml-12">
                자유게시판
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/items"
              className={({ isActive }) =>
                isActive ? "text-[color:var(--btn-blue1)]" : "text-[#4B5563]"
              }
            >
              <span className="ml-2 text-lg font-bold  sm:ml-10 sm:text-base lg:ml-10">
                중고마켓
              </span>
            </NavLink>
          </li>
        </ul>
        <button className="rounded-lg bg-[var(--btn-blue1)] px-6 py-3 text-white">
          로그인
        </button>
      </div>
    </nav>
  );
}

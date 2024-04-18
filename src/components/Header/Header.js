import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import "../../index.css";

function Header() {
    // 현재 경로 check!
    const location = useLocation();
    const navigate = useNavigate();

    // 현재 페이지가 자유게시판인지 중고마켓인지를 확인!
    const isCommunityPage = location.pathname === "/community";
    const isMarketPage = location.pathname === "/items";

    // 버튼 클릭 시 로그인 페이지로 이동하는 함수
    const handleLoginButtonClick = () => {
        navigate("/signin");
    };

    return (
        <div className="header">
            <div className="header-container">
                <a href="/" className="logo">
                    <img src="assets/logo.svg" alt="Logo" className="logo" />
                </a>
                <nav className="header-nav">
                    <ul className="nav-container">
                        <li>
                            <a href="/community" className={`nav-link ${isCommunityPage ? "active" : ""}`}>
                                자유게시판
                            </a>
                        </li>
                        <li>
                            <a href="/items" className={`nav-link ${isMarketPage ? "active" : ""}`}>
                                중고마켓
                            </a>
                        </li>
                    </ul>
                </nav>
                <button className="login-btn" onClick={handleLoginButtonClick}>
                    로그인
                </button>
            </div>
        </div>
    );
}

export default Header;

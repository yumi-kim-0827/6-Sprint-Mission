import './header.css';
import './nav.css';
import logo from '../images/logo.svg';
import Button from './button';

export default function Header() {
    return (
        <header>
            <nav>
                <div id="nav-left">
                    <img src={logo} alt="brandlogo"/>
                    <a href="/board">자유 게시판</a>
                    <a href="/items">중고마켓</a>
                </div>
                <div id="nav-right">
                    <Button link="/login" desc="link to login page">
                        로그인
                    </Button>
                </div>
            </nav>
        </header>
    );
}
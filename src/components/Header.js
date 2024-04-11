/* eslint-disable */
import logo from '../assets/logo.svg';
import './Header.css';

function Header() {
	return (
		<div className="header">
			<div className="nav">
				<img src={logo} alt="logo" />
				<a>자유게시판</a>
				<a>중고마켓</a>
			</div>
			<div>
				<a className="login">로그인</a>
			</div>

		</div>

	);
}

export default Header;
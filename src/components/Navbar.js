import '../styles/Navbar.css';
import pandaLogoImg from '../assets/panda-logo.svg';
import pandaTextLogoImg from '../assets/panda-text-logo.svg';

function Navbar() {
  return (
    <nav>
      <a href="/" className="logo-container">
        <img className="logo" src={pandaLogoImg} alt="판다마켓 로고" />
        <img
          className="text-logo"
          src={pandaTextLogoImg}
          alt="판다마켓 텍스트 로고"
        />
      </a>
      <div className="login-btn-container">
        <a href="/" className="login-btn">
          로그인
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
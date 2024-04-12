import "./index.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contents">
        <div className="footer-copyright">©codeit - 2024</div>
        <div className="footer-links">
          <a className="footer-link" href="/privacy.html">
            Privacy Policy
          </a>
          <a className="footer-link" href="/faq.html">
            FAQ
          </a>
        </div>
        <div className="footer-socials">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              className="footer-social-icon"
              src="images/ic_facebook.svg"
              alt="페이스북 아이콘"
            />
          </a>
          <a href="https://twitter.com/?lang=ko" target="_blank">
            <img
              className="footer-social-icon"
              src="images/ic_twitter.svg"
              alt="트위터 아이콘"
            />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img
              className="footer-social-icon"
              src="images/ic_youtube.svg"
              alt="유튜브 아이콘"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img
              className="footer-social-icon"
              src="images/ic_instagram.svg"
              alt="인스타그램 아이콘"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

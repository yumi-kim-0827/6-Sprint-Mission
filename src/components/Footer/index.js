import "./index.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-contents">
        <div class="footer-copyright">©codeit - 2024</div>
        <div class="footer-links">
          <a class="footer-link" href="/privacy.html">
            Privacy Policy
          </a>
          <a class="footer-link" href="/faq.html">
            FAQ
          </a>
        </div>
        <div class="footer-socials">
          <a href="https://www.facebook.com/" target="_blank">
            <img
              class="footer-social-icon"
              src="images/ic_facebook.svg"
              alt="페이스북 아이콘"
            />
          </a>
          <a href="https://twitter.com/?lang=ko" target="_blank">
            <img
              class="footer-social-icon"
              src="images/ic_twitter.svg"
              alt="트위터 아이콘"
            />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img
              class="footer-social-icon"
              src="images/ic_youtube.svg"
              alt="유튜브 아이콘"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img
              class="footer-social-icon"
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

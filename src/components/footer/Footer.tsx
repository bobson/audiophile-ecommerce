import "./footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="wrapper app-footer-wrapper">
        <div className="line"></div>
        <div className="footer-header">
          <img src="assets/shared/desktop/logo.svg" alt="audiophile logo" />
          <nav className="footer-navigation">
            <ul className="nav-list" role="list">
              <li>
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Headphones
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Speakers
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Earphones
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="light-text description">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="light-text copyright">
          {" "}
          Copyright 2021. All Rights Reserved
        </p>
        <div className="social-links">
          <a href="#" className="social-link" aria-label="facebook link">
            <img src="assets/shared/desktop/icon-facebook.svg" alt="" />
          </a>
          <a href="#" className="social-link" aria-label="twitter link">
            <img src="assets/shared/desktop/icon-twitter.svg" alt="" />
          </a>
          <a href="#" className="social-link" aria-label="instagram link">
            <img src="assets/shared/desktop/icon-instagram.svg" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import "./navbar.css";

const NavBar = () => {
  return (
    <header>
      <div className="wrapper header-wrapper">
        <button className="hamburger" aria-label="Open menu">
          <img src="assets/shared/tablet/icon-hamburger.svg" alt="" />
        </button>
        <div className="logo" aria-label="audiophile logo home link">
          <a href="#">
            <img src="assets/shared/desktop/logo.svg" alt="audiophile logo" />
          </a>
        </div>
        <nav className="main-navigation">
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
        <button className="cart-icon" aria-label="Open cart">
          <img src="assets/shared/desktop/icon-cart.svg" alt="" />
        </button>
      </div>
    </header>
  );
};

export default NavBar;

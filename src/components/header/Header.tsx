import Navigation from "../navigation/navigation";
import "./header.css";

const Header = () => {
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
        <Navigation className="main-navigation" />
        <button className="cart-icon" aria-label="Open cart">
          <img src="assets/shared/desktop/icon-cart.svg" alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;

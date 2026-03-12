import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

import "./header.css";
import CategoriesLinks from "../categories-links/CategoriesLinks";
import Cart from "../cart/Cart";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import Navigation from "../navigation/Navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleCart() {
    setIsCartOpen((prev) => !prev);
  }

  function closeCart() {
    setIsCartOpen(false);
  }

  useFocusTrap(isMenuOpen, menuRef);
  useFocusTrap(isCartOpen, cartRef);

  return (
    <header>
      <div className="wrapper header-wrapper">
        <button
          className="hamburger"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <img src="/assets/shared/tablet/icon-hamburger.svg" alt="" />
        </button>

        <Link to="/" aria-label="Audiophile homepage">
          <img src="/assets/shared/desktop/logo.svg" alt="" />
        </Link>

        <Navigation className="main-navigation" />

        <button
          onClick={toggleCart}
          className="cart-icon"
          aria-label="Open cart"
        >
          <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
        </button>
      </div>

      <div
        className={`overlay ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      >
        <div
          ref={menuRef}
          className={`mobile-nav wrapper ${isMenuOpen ? "open" : ""}`}
        >
          <CategoriesLinks />
        </div>
      </div>

      <div
        className={`overlay ${isCartOpen ? "open" : ""}`}
        onClick={closeCart}
        ref={cartRef}
      >
        <div className={`cart-wrapper  ${isCartOpen ? "open" : ""}`}>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;

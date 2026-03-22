import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import "./header.css";
import CategoriesLinks from "../categories-links/CategoriesLinks";
import Cart from "./cart/Cart";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import Navigation from "../navigation/Navigation";
import { useCart } from "../../hooks/useCart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalQuantity } = useCart();

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

  // Close only when clicking the backdrop, not the panel itself
  function handleMenuOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) closeMenu();
  }

  function handleCartOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) closeCart();
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
          {totalQuantity > 0 && (
            <span className="cart-quntity">{totalQuantity}</span>
          )}
          <img src="/assets/shared/desktop/icon-cart.svg" alt="" />
        </button>
      </div>

      {/* ── Mobile menu overlay ── */}
      <div
        className={`overlay ${isMenuOpen ? "open" : ""}`}
        onClick={handleMenuOverlayClick}
      >
        <div
          ref={menuRef}
          className={`mobile-nav wrapper ${isMenuOpen ? "open" : ""}`}
        >
          {/* onLinkClick closes menu when a category link is clicked */}
          <CategoriesLinks onLinkClick={closeMenu} />
        </div>
      </div>

      {/* ── Cart overlay ── */}
      <div
        className={`overlay ${isCartOpen ? "open" : ""}`}
        onClick={handleCartOverlayClick}
      >
        <div
          ref={cartRef}
          className={`cart-wrapper ${isCartOpen ? "open" : ""}`}
        >
          {/* onCheckout closes cart when checkout button is clicked */}
          <Cart onCheckout={closeCart} />
        </div>
      </div>
    </header>
  );
};

export default Header;

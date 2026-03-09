import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import Navigation from "../navigation/navigation";

import "./header.css";
import CategoriesLinks from "../categories-links/CategoriesLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen || !headerRef.current) return;

    const focusableSelectors =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = Array.from(
      headerRef.current.querySelectorAll<HTMLElement>(focusableSelectors),
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Focus first element when menu opens
    firstElement.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header ref={headerRef}>
      <div className="wrapper header-wrapper">
        <button
          className="hamburger"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <img src="assets/shared/tablet/icon-hamburger.svg" alt="" />
        </button>

        <Link to="/" aria-label="Audiophile homepage">
          <img src="/assets/shared/desktop/logo.svg" alt="" />
        </Link>

        <Navigation className="main-navigation" />

        <button className="cart-icon" aria-label="Open cart">
          <img src="assets/shared/desktop/icon-cart.svg" alt="" />
        </button>
      </div>

      <div className={`overlay ${isOpen ? "open" : ""}`} onClick={closeMenu}>
        <div className={`mobile-nav wrapper ${isOpen ? "open" : ""}`}>
          <CategoriesLinks />
        </div>
      </div>
    </header>
  );
};

export default Header;

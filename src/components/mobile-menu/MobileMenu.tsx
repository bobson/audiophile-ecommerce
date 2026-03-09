import { useEffect, useRef } from "react";
import CategoriesLinks from "../categories-links/CategoriesLinks";

type MobileMenuProps = {
  isOpen: boolean;
  closeMenu: () => void;
};

export default function MobileMenu({ isOpen, closeMenu }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <div className="overlay" onClick={closeMenu}>
      <div className="mobile-nav">
        <CategoriesLinks />
      </div>
    </div>
  );
}

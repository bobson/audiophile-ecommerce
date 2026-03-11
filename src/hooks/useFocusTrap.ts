import { useEffect } from "react";

export const useFocusTrap = (
  isOpen: boolean,
  containerRef: React.RefObject<HTMLDivElement | null>,
) => {
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    const focusableSelectors =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(focusableSelectors),
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
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, containerRef]);
};

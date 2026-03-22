import { Link } from "@tanstack/react-router";
import type { CartItem } from "../../types";

interface OrderSuccessProps {
  cart: CartItem[];
  grand: number;
  onBack: () => void;
}

const fmt = (n: number): string =>
  `$ ${n.toLocaleString("en-US", { minimumFractionDigits: 0 })}`;

export function OrderSuccess({ cart, grand, onBack }: OrderSuccessProps) {
  const firstItem = cart[0] ?? null;

  return (
    <div className="page">
      <div className="success-overlay">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2>
            THANK YOU
            <br />
            FOR YOUR ORDER
          </h2>
          <p>You will receive an email confirmation shortly.</p>

          {firstItem && (
            <div className="success-item">
              {firstItem.product.image?.mobile ? (
                <img
                  src={firstItem.product.image.mobile}
                  alt={firstItem.product.name}
                  className="item-thumb"
                />
              ) : (
                <div className="item-thumb">🎧</div>
              )}
              <div>
                <strong>{firstItem.product.name}</strong>
                <span className="si-price">{fmt(firstItem.product.price)}</span>
              </div>
              <span className="si-qty">x{firstItem.quantity}</span>
            </div>
          )}

          {cart.length > 1 && (
            <p className="success-more">and {cart.length - 1} other item(s)</p>
          )}

          <div className="success-total">
            <span>GRAND TOTAL</span>
            <strong>{fmt(grand)}</strong>
          </div>

          <Link to="/" className="btn btn-primary" onClick={onBack}>
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}

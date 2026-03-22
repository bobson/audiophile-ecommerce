import type { CartItem } from "../../types";

interface OrderSummaryProps {
  cart: CartItem[];
  totalPrice: number;
  shipping: number;
}

const fmt = (n: number): string =>
  `$ ${n.toLocaleString("en-US", { minimumFractionDigits: 0 })}`;

export function OrderSummary({ cart, totalPrice, shipping }: OrderSummaryProps) {
  const vat = Math.round(totalPrice * 0.2);
  const grand = totalPrice + shipping;

  return (
    <aside className="summary-panel">
      <h2 className="summary-title">SUMMARY</h2>

      <div className="item-list">
        {cart.map((item) => (
          <div className="cart-item" key={item.product.slug}>
            {item.product.image?.mobile ? (
              <img
                src={item.product.image.mobile}
                alt={item.product.name}
                className="item-thumb"
              />
            ) : (
              <div className="item-thumb">🎧</div>
            )}
            <div className="item-info">
              <span className="item-name">{item.product.name}</span>
              <span className="item-price">{fmt(item.product.price)}</span>
            </div>
            <span className="item-qty">x{item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="totals">
        <div className="total-row">
          <span>TOTAL</span>
          <strong>{fmt(totalPrice)}</strong>
        </div>
        <div className="total-row">
          <span>SHIPPING</span>
          <strong>{fmt(shipping)}</strong>
        </div>
        <div className="total-row">
          <span>VAT (INCLUDED)</span>
          <strong>{fmt(vat)}</strong>
        </div>
        <div className="total-row grand">
          <span>GRAND TOTAL</span>
          <strong className="grand-val">{fmt(grand)}</strong>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        CONTINUE &amp; PAY
      </button>
    </aside>
  );
}

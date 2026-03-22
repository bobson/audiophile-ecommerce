import { Link } from "@tanstack/react-router";
import { useCart } from "../../../hooks/useCart";
import "./cart.css";

interface CartProps {
  onCheckout?: () => void;
}

const Cart = ({ onCheckout }: CartProps) => {
  const {
    cart,
    decreaseQuantity,
    increaseQuantity,
    totalQuantity,
    totalPrice,
    clearCart,
  } = useCart();

  function cleanProductName(name: string) {
    return name.replace(/\s?(Headphones|Speakers|Earphones)/i, "");
  }
  return (
    <div className="cart">
      <div className="cart-row">
        <h2 className="cart-title">
          Cart <span className="cart-count">({totalQuantity})</span>
        </h2>
        <button onClick={clearCart} className="btn-pure">
          Remove all
        </button>
      </div>
      <div className="cart-row">
        {cart.map((item) => (
          <div className="cart-item" key={item.product.slug}>
            <img
              className="cart-image"
              src={`/${item.product.image.mobile}`}
              alt={item.product.name}
            />
            <div className="cart-item-details">
              <h3>{cleanProductName(item.product.name)}</h3>
              <p className="cart-item-price">$ {item.product.price}</p>
            </div>
            <div className="cart-item-quantity">
              <button
                onClick={() => {
                  decreaseQuantity(item);
                }}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => {
                  increaseQuantity(item);
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-row">
        <p className="cart-total">Total</p>
        <p className="cart-price dark-text">$ {totalPrice}</p>
      </div>
      <Link
        to="/checkout"
        disabled={totalQuantity === 0}
        className="btn btn-primary"
        onClick={onCheckout}
      >
        Checkout
      </Link>
    </div>
  );
};

export default Cart;

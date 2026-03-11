import { useCart } from "../../hooks/useCart";
import "./cart.css";

const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useCart();

  function cleanProductName(name: string) {
    return name.replace(/\s?(Headphones|Speakers|Earphones)/i, "");
  }
  return (
    <div className="cart">
      <div className="cart-row">
        <h2 className="cart-title">
          Cart <span className="cart-count">{totalQuantity}</span>
        </h2>
        <button className="btn-pure">Remove all</button>
      </div>

      {cart.map((item) => (
        <div className="cart-row" key={item.product.slug}>
          <img
            className="cart-image"
            src={`/${item.product.image.mobile}`}
            alt={item.product.name}
          />

          <div className="cart-item-details">
            <h3>{cleanProductName(item.product.name)}</h3>
            <p className="cart-item-price">$ {item.product.price}</p>
          </div>
          <div className="product-add-to-cart_quantity">
            <button onClick={() => {}}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => {}}>+</button>
          </div>
        </div>
      ))}

      <div className="cart-row">
        <p className="cart-total">Total</p>
        <p className="dark-text">$ {totalPrice}</p>
      </div>
      <button className="btn btn-primary">Checkout</button>
    </div>
  );
};

export default Cart;

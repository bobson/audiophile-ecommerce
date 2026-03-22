import { useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useCart } from "../../hooks/useCart";

import "./checkout.css";
import { OrderSuccess } from "./OrderSuccess";
import { CheckoutForm } from "./CheckoutForm";
import { OrderSummary } from "./OrderSummary";

export const Route = createLazyFileRoute("/checkout/")({
  component: RouteComponent,
});

const SHIPPING = 50;

function RouteComponent() {
  const { cart, totalPrice } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const grand = totalPrice + SHIPPING;

  if (submitted) {
    return (
      <OrderSuccess
        cart={cart}
        grand={grand}
        onBack={() => setSubmitted(false)}
      />
    );
  }

  return (
    <div className="checkout-wrapper">
      <div className="wrapper checkout">
        <CheckoutForm onSuccess={() => setSubmitted(true)}>
          <OrderSummary
            cart={cart}
            totalPrice={totalPrice}
            shipping={SHIPPING}
          />
        </CheckoutForm>
      </div>
    </div>
  );
}

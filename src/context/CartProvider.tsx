import { useState } from "react";
import type { CartItem } from "../types";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  function addToCart(product: CartItem["product"], quantity = 1) {
    setCart((prev) => {
      const existingItem = prev.find(
        (item) => item.product.slug === product.slug,
      );

      if (existingItem) {
        return prev.map((item) => {
          if (item.product.slug === product.slug) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }
          return item;
        });
      }

      return [...prev, { product, quantity }];
    });
    // console.log(cart);
  }

  function removeFromCart(productSlug: string) {
    setCart((prev) => prev.filter((item) => item.product.slug !== productSlug));
  }

  function increaseQuantity(productSlug: string, quantity: number) {
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.slug === productSlug) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      }),
    );
  }

  function decreaseQuantity(productSlug: string, quantity: number) {
    if (quantity === 1) removeFromCart(productSlug);
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.slug === productSlug) {
          return {
            ...item,
            quantity: item.quantity - quantity,
          };
        }
        return item;
      }),
    );
  }

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

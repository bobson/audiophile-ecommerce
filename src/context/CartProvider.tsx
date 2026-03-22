import { useState, useEffect } from "react";
import type { CartItem } from "../types";
import { CartContext } from "./CartContext";

const CART_KEY = "audiophile-cart";

function getInitialCart(): CartItem[] {
  try {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? (JSON.parse(stored) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(getInitialCart);

  // Sync to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

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

  function increaseQuantity(cartItem: CartItem) {
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.slug === cartItem.product.slug) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      }),
    );
  }

  function decreaseQuantity(cartItem: CartItem) {
    if (cartItem.quantity < 1) return;
    if (cartItem.quantity === 1) removeFromCart(cartItem.product.slug);
    setCart((prev) =>
      prev.map((item) => {
        if (item.product.slug === cartItem.product.slug) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      }),
    );
  }

  function clearCart() {
    setCart([]);
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
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

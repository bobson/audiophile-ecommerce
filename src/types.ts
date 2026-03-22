import type { ChangeEvent } from "react";

// Type for related products shown in "others" array
export type RelatedProduct = {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

// Type for gallery images of a product
export type ProductGallery = {
  first: { mobile: string; tablet: string; desktop: string };
  second: { mobile: string; tablet: string; desktop: string };
  third: { mobile: string; tablet: string; desktop: string };
};

// Full Product type for product detail pages
export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  gallery: ProductGallery;
  others: RelatedProduct[];
};

// Minimal type for category page display
export type CategoryProduct = {
  slug: string;
  name: string;
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  description: string;
};

export type CartProduct = Pick<
  Product,
  "id" | "slug" | "name" | "price" | "image"
>;

export type CartItem = {
  product: Product;
  quantity: number;
};

export type Cart = {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productSlug: string) => void;
  increaseQuantity: (cartItem: CartItem) => void;
  decreaseQuantity: (cartItem: CartItem) => void;
  clearCart: () => void;
  totalQuantity: number;
  totalPrice: number;
};

export type PaymentMethod = "emoney" | "cod";
export type FieldErrors = Record<string, string>;

export interface FieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  title?: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  error: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

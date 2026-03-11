import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import { routeTree } from "./routeTree.gen";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { CartProvider } from "./context/CartProvider";
const router = createRouter({ routeTree });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
);

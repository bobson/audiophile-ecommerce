import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../components/header/Header";
import BestAudio from "../components/best-audio/BestAudio";
import Footer from "../components/footer/Footer";

function RootComponent() {
  const { pathname } = useLocation();
  const isCheckout = pathname === "/checkout";

  return (
    <>
      <Header />
      <main className="layout">
        <Outlet />
        {!isCheckout && <BestAudio />}
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return <p>Not found!</p>;
  },
});

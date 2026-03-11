import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../components/header/Header";
import BestAudio from "../components/best-audio/BestAudio";
import Footer from "../components/footer/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main className="layout">
        <Outlet />
        <BestAudio />
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: () => {
    return <p>Not found!</p>;
  },
});

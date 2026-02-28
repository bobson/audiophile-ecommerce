import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/product/$productSlug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { productSlug } = Route.useParams();
  console.log(productSlug);
  return <div>Hello "/product/@product"!</div>;
}

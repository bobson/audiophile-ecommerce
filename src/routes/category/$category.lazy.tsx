import { createLazyFileRoute, Link } from "@tanstack/react-router";
import data from "../../../data.json";

export const Route = createLazyFileRoute("/category/$category")({
  component: RouteComponent,
});

function RouteComponent() {
  const { category } = Route.useParams();
  const products = data.filter((product) => product.category === category);

  if (!products || products.length === 0) {
    return <div>Loading or No Products Found...</div>;
  }

  return (
    <>
      <div className="category-hero">
        <h1>{category}</h1>
      </div>

      <section className="category-products">
        {products.map((product) => (
          <article className="category-article" key={product.slug}>
            <picture className="category-img">
              <source
                media="(min-width: 800px)"
                srcSet={product.categoryImage.desktop}
              />
              <source
                media="(min-width: 500px)"
                srcSet={product.categoryImage.tablet}
              />
              <img src={product.categoryImage.mobile} alt={product.name} />
            </picture>

            <div className="category-content flow">
              <h2 className="large-heading dark-text">{product.name}</h2>
              <p className="dark-text">{product.description}</p>
              <Link
                to="/product/$productId"
                params={{
                  productSlug: product.slug,
                }}
              >
                <button className="btn btn-secondary">See product</button>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

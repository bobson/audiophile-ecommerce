import { createLazyFileRoute, Link } from "@tanstack/react-router";
import data from "../../../data.json";
import CategoriesLinks from "../../components/categories-links/CategoriesLinks";
import "./category.css";
import type { CategoryProduct } from "../../types";

export const Route = createLazyFileRoute("/$category/")({
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useParams();

  const products: CategoryProduct[] = data.filter(
    (product) => product.category === category,
  );

  return (
    <>
      <div className="category-hero">
        <h1 className="category-hero__title">{category}</h1>
      </div>
      <div className="wrapper">
        {products
          .slice()
          .reverse()
          .map((product) => (
            <section className="product-card" key={product.slug}>
              <picture className="product-card__img">
                <source
                  media="(min-width: 800px)"
                  srcSet={`/${product.categoryImage.desktop}`}
                />
                <source
                  media="(min-width: 500px)"
                  srcSet={`/${product.categoryImage.tablet}`}
                />
                <img
                  src={`/${product.categoryImage.mobile}`}
                  alt={product.name}
                />
              </picture>

              <div className="product-card__content flow">
                <h2>
                  {product.new && (
                    <>
                      <span className="new-badge">New Product </span>
                      <br />
                    </>
                  )}
                  {product.name}
                </h2>
                <p className="dark-text">{product.description}</p>
                <Link
                  className="btn btn-primary"
                  to="/$category/$product"
                  params={{
                    category: category,
                    product: product.slug,
                  }}
                >
                  See product
                </Link>
              </div>
            </section>
          ))}
        <CategoriesLinks />
      </div>
    </>
  );
}

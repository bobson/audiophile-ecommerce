import { createLazyFileRoute, Link } from "@tanstack/react-router";
import data from "../../../data.json";
import "./product.css";
import type { Product } from "../../types";
import CategoriesLinks from "../../components/categories-links/CategoriesLinks";
import { useState } from "react";

export const Route = createLazyFileRoute("/product/$product")({
  component: RouteComponent,
});

function RouteComponent() {
  const productSlug = Route.useParams().product;
  const product: Product | undefined = data?.find(
    (p) => p.slug === productSlug,
  );

  const [quantity, setQuantity] = useState(1);

  function handleDecrement() {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  }

  function handleIncrement() {
    if (quantity >= 10) return;
    setQuantity((prev) => prev + 1);
  }
  if (!product) {
    return <div>Loading or No Products Found...</div>;
  }
  console.log(productSlug);
  return (
    <div className="wrapper">
      <Link to="/">go back</Link>
      <section className="product">
        <div className="product-top">
          <picture className="product-img">
            <source
              media="(width > 800px)"
              srcSet={`/${product.image.desktop}`}
            />
            <source
              media="(width > 500px)"
              srcSet={`/${product.image.tablet}`}
            />
            <img src={`/${product.image.mobile}`} alt={product.name} />
          </picture>
          <div className="product-content">
            <div className="flow">
              <h2>
                {product.new && <span className="new-badge">New Product </span>}
                <br />
                {product.name}
              </h2>
              <p className="dark-text">{product.description}</p>
              <p className="product-price">$ {product.price}</p>
            </div>
            <div className="product-add-to-cart">
              <div className="product-add-to-cart_quantity">
                <button onClick={handleDecrement}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrement}>+</button>
              </div>
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>

        <div className="product-features flow flow-gap">
          <h3>Features</h3>

          <p className="dark-text">{product.features}</p>
        </div>
        <div className="product-includes">
          <h3>In the box</h3>
          <div className="product-includes-items">
            {product.includes.map(({ quantity, item }) => (
              <div className="product-includes-item" key={item}>
                <p className="product-includes-item__quantity">{quantity}x</p>
                <p className="dark-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <section className="product-galey">
          <picture className="product-galey__img">
            <source
              media="(width > 800px)"
              srcSet={`/${product.gallery.first.desktop}`}
            />
            <source
              media="(width > 500px)"
              srcSet={`/${product.gallery.first.tablet}`}
            />
            <img src={`/${product.gallery.first.mobile}`} alt={product.name} />
          </picture>

          <picture className="product-galey__img">
            <source
              media="(width > 800px)"
              srcSet={`/${product.gallery.second.desktop}`}
            />
            <source
              media="(width > 500px)"
              srcSet={`/${product.gallery.second.tablet}`}
            />
            <img src={`/${product.gallery.second.mobile}`} alt={product.name} />
          </picture>

          <picture className="product-galey__img">
            <source
              media="(width > 800px)"
              srcSet={`/${product.gallery.third.desktop}`}
            />
            <source
              media="(width > 500px)"
              srcSet={`/${product.gallery.third.tablet}`}
            />
            <img src={`/${product.gallery.third.mobile}`} alt={product.name} />
          </picture>
        </section>
      </section>

      <section className="product-others">
        <h3>Yuo may also like</h3>
        <div className="product-others-container">
          {product.others.map((relatedProduct) => (
            <div className="product-others-item" key={relatedProduct.slug}>
              <picture>
                <source
                  media="(width > 500px)"
                  srcSet={`/${relatedProduct.image.desktop}`}
                />
                <img
                  src={`/${relatedProduct.image.mobile}`}
                  alt={relatedProduct.name}
                />
              </picture>
              <h4>{relatedProduct.name}</h4>
              <a
                className="btn btn-primary"
                href={`/product/${relatedProduct.slug}`}
              >
                See product
              </a>
            </div>
          ))}
        </div>
      </section>
      <CategoriesLinks />
    </div>
  );
}

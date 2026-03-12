import { createLazyFileRoute, Link } from "@tanstack/react-router";
import data from "../../../data.json";
import "./product.css";
import type { Product } from "../../types";
import CategoriesLinks from "../../components/categories-links/CategoriesLinks";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/useCart";

export const Route = createLazyFileRoute("/$category/$product")({
  component: ProductPage,
});

function ProductPage() {
  const productSlug = Route.useParams().product;
  const product: Product | undefined = data?.find(
    (p) => p.slug === productSlug,
  );

  const [quantity, setQuantity] = useState(1);
  const { cart, addToCart } = useCart();

  useEffect(() => {
    console.log(cart, "----", quantity);
  }, [quantity, cart]);

  async function handleDecrement() {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  }

  async function handleIncrement() {
    if (quantity >= 10) return;
    setQuantity((prev) => prev + 1);
  }

  function GoBackLink() {
    const handleBack = () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "/";
      }
    };
    return (
      <a
        className="dark-text back-link"
        onClick={(e) => {
          e.preventDefault();
          handleBack();
        }}
      >
        Go Back
      </a>
    );
  }
  if (!product) {
    return <div>Loading or No Products Found...</div>;
  }

  return (
    <div className="wrapper">
      {GoBackLink()}
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
              <button
                onClick={() => addToCart(product, quantity)}
                className="btn btn-primary"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="product-features flow">
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
        <h2>You may also like</h2>
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
              <h3>{relatedProduct.name}</h3>
              <Link
                to={`/${relatedProduct.slug.split("-").pop()}/${relatedProduct.slug}`}
                className="btn btn-primary"
              >
                See product
              </Link>
            </div>
          ))}
        </div>
      </section>
      <CategoriesLinks />
    </div>
  );
}

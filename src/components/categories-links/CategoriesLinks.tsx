import { Link } from "@tanstack/react-router";
import "./categories-links.css";

const CategoriesLinks = () => {
  const categories = ["headphones", "speakers", "earphones"];
  return (
    <section className="categorie-links">
      <h2 className="sr-only">Product categoryes</h2>
      {categories.map((category) => (
        <Link
          to="/category/$category"
          params={{ category }}
          key={category}
          className="category-link"
        >
          <img
            className="category-link__img"
            src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
            alt={category}
          />
          <div className="category-link__context">
            <h3 className="category-link__header">{category}</h3>
            <span className="btn btn-transparent">
              Shop <span className="sr-only">{category}</span>
              <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default CategoriesLinks;

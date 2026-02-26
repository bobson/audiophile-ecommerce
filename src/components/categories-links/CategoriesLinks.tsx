import "./categories-links.css";

const CategoriesLinks = () => {
  const categories = ["headphones", "speakers", "earphones"];
  return (
    <section className="categories">
      <h2 className="sr-only">Product categoryes</h2>
      {categories.map((category) => (
        <article key={category} className="category-article">
          <img
            className="category-img"
            src={`assets/shared/desktop/image-category-thumbnail-${category}.png`}
            alt={category}
          />
          <div className="category-context">
            <h3 className="category-header">{category}</h3>
            <button className="btn btn-transparent">
              Shop <span className="sr-only">{category}</span>
              <img src="assets/shared/desktop/icon-arrow-right.svg" alt="" />
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default CategoriesLinks;

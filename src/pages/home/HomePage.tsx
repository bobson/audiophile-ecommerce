import "./home-page.css";

import CategoriesLinks from "../../components/categories-links/CategoriesLinks";

const HomePage = () => {
  return (
    <>
      <div className="hero-section">
        <div className="wrapper hero-wrapper">
          <div className="flow">
            <h1 className="hero-title">
              <span>New product </span>
              XX99 Mark II Headphones
            </h1>
            <p className="light-text">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="btn btn-primary">See product</button>
          </div>
        </div>
      </div>
      <main className="wrapper">
        <CategoriesLinks />
        <section className="products">
          <article className="product-article premium-article">
            <img
              className="circles"
              src="assets/home/desktop/pattern-circles.svg"
              alt=""
            />
            <picture className="product-img">
              <source
                media="(width > 1200px)"
                srcSet="assets/home/desktop/image-speaker-zx9.png"
              />
              <source
                media="(width > 768px)"
                srcSet="assets/home/tablet/image-speaker-zx9.png"
              />
              <img
                src="assets/home/mobile/image-speaker-zx9.png"
                alt="ZX9 speaker"
              />
            </picture>
            <div className="product-content flow">
              <h2 className="large-heading">
                ZX9 <br /> speaker
              </h2>
              <p className="light-text">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className="btn btn-secondary">See product</button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default HomePage;

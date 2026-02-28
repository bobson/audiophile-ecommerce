import { createLazyFileRoute } from "@tanstack/react-router";

import "./index.css";

export const Route = createLazyFileRoute("/")({
  component: HomePage,
});

import CategoriesLinks from "../components/categories-links/CategoriesLinks";

export default function HomePage() {
  return (
    <>
      <div className="hero-section">
        <picture className="hero-img">
          <source
            media="(width>1062px)"
            srcSet="assets/home/desktop/image-hero.jpg"
          />
          <source
            media="(width>768px)"
            srcSet="assets/home/tablet/image-header.jpg"
          />
          <img src="assets/home/mobile/image-header.jpg" alt="headphones" />
          <div className="wrapper content-wrapper">
            <div className="hero-content flow">
              <h1 className="hero-title">
                <span>New product </span>
                <br />
                XX99 Mark II Headphones
              </h1>
              <p className="light-text">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <button className="btn btn-primary">See product</button>
            </div>
          </div>
        </picture>
      </div>
      <main className="wrapper home-main">
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
                media="(width > 800px)"
                srcSet="assets/home/desktop/image-speaker-zx9.png"
              />
              <source
                media="(width > 500px)"
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

          <article className="product-article speaker-article">
            <picture className="speaker-img">
              <div className="speaker-contenxt flow">
                <h2>ZX7 speaker</h2>
                <button className="btn btn-border">See product</button>
              </div>
              <source
                media="(width > 800px)"
                srcSet="assets/home/desktop/image-speaker-zx7.jpg"
              />
              <source
                media="(width > 500px)"
                srcSet="assets/home/tablet/image-speaker-zx7.jpg"
              />
              <img
                src="assets/home/mobile/image-speaker-zx7.jpg"
                alt="ZX7 speaker"
              />
            </picture>
          </article>

          <article className="product-article earphones-article">
            <picture className="earphones-img">
              <source
                media="(width > 800px)"
                srcSet="assets/home/desktop/image-earphones-yx1.jpg"
              />
              <source
                media="(width > 500px)"
                srcSet="assets/home/tablet/image-earphones-yx1.jpg"
              />
              <img
                src="assets/home/mobile/image-earphones-yx1.jpg"
                alt="YX1 earphones"
              />
            </picture>
            <div className="earphones-content flow">
              <h2>YX1 earphones</h2>
              <button className="btn btn-border">See product</button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

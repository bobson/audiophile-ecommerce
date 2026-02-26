import "./best-audio.css";

const BestAudio = () => {
  return (
    <section className="best-audio wrapper">
      <picture className="best-audio-img">
        <source
          media="(width > 800px)"
          srcSet="assets/shared/desktop/image-best-gear.jpg"
        />
        <source
          media="(width > 500px)"
          srcSet="assets/shared/tablet/image-best-gear.jpg"
        />
        <img
          src="assets/shared/mobile/image-best-gear.jpg"
          alt="Men whering earphones"
        />
      </picture>
      <div className="best-audio-content flow">
        <h2>
          Bringing you the<span className="diferent"> best </span>audio gear
        </h2>
        <p className="dark-text">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default BestAudio;

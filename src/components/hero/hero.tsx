import "./hero.scss";
import heroImg from "../../assets/hero.png";
export function Hero() {
  return (
    <section className="hero-container">
      <img className="hero-img" src={heroImg} />
      <div className="hero-overlay"></div>
      <div className="container hero-content-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-title">
              Venha conhecer nossas <br />
              promoções
            </p>
            <p className="hero-desc">
              <span>50% Off</span> nos produtos
            </p>
          </div>
          <button className="btn-secondary">Ver produto</button>
        </div>
      </div>
    </section>
  );
}

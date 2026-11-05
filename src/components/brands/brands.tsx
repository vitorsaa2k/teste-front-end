import headerLogo from "../../assets/header-logo.svg";
import "./brands.scss";

const BRAND_ITEMS = ["brand-1", "brand-2", "brand-3", "brand-4", "brand-5"];

export function Brands() {
  return (
    <section id="section-brands">
      <div className="container">
        <h2 className="section-title">Navegue por marcas</h2>
        <div className="brands-grid">
          {BRAND_ITEMS.map((brand) => (
            <div className="brand-item" key={brand}>
              <div className="brand-logo-container">
                <img src={headerLogo} alt="Brand Logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

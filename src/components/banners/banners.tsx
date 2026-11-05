import bannersImg from "../../assets/banners-img.png";
import { BannerCard } from "./banner-card";
import "./banners.scss";

const BANNERS = [
  {
    id: "partners-1",
    title: "Parceiros",
    text: "Lorem ipsum dolor sit amet, consectetur",
    buttonLabel: "Confira",
  },
  {
    id: "partners-2",
    title: "Parceiros",
    text: "Lorem ipsum dolor sit amet, consectetur",
    buttonLabel: "Confira",
  },
];

export function Banners() {
  return (
    <section id="section-banners-1" className="banners-section">
      <div className="container">
        <div className="banners-grid">
          {BANNERS.map((banner) => (
            <BannerCard
              key={banner.id}
              title={banner.title}
              text={banner.text}
              buttonLabel={banner.buttonLabel}
              image={bannersImg}
              imageAlt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import "./banner-card.scss";

type BannerCardProps = {
  title: string;
  text: string;
  buttonLabel: string;
  image: string;
  imageAlt: string;
};

export function BannerCard({
  title,
  text,
  buttonLabel,
  image,
  imageAlt,
}: BannerCardProps) {
  return (
    <article className="banner-card">
      <img className="banner-card-bg" src={image} alt={imageAlt} />
      <div className="banner-card-overlay" aria-hidden="true" />
      <div className="banner-card-content">
        <h3 className="banner-card-title">{title}</h3>
        <p className="banner-card-text">{text}</p>
        <button type="button" className="btn-secondary">
          {buttonLabel}
        </button>
      </div>
    </article>
  );
}

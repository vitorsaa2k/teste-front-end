import type { Product } from "../../services/products";
import "./product-card.scss";

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

type ProductCardProps = {
  product: Product;
  onSelect?: (product: Product) => void;
};

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <article className="product-card">
      <button
        type="button"
        className="product-card-open"
        onClick={() => onSelect?.(product)}
        aria-label={`Ver ${product.productName || product.descriptionShort}`}
      >
        <span className="product-card-img-wrapper">
          <img src={product.photo} alt={product.productName} />
        </span>
        <span className="product-card-desc">
          {product.productName || product.descriptionShort}
        </span>
      </button>
      <div className="price-container">
        <p className="product-card-old-price">R$ 30,90</p>
        <p className="product-card-price">
          {priceFormatter.format(product.price)}
        </p>
        <p className="product-card-installments">ou 2x de R$ 49,95 sem juros</p>
      </div>
      <p className="product-card-shipping">Frete grátis</p>
      <button type="button" className="btn-primary">
        Comprar
      </button>
    </article>
  );
}

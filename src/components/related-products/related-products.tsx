import { useEffect, useRef, useState } from "react";
import { LeftArrowIcon } from "../icons/left-arrow";
import { RightArrowIcon } from "../icons/right-arrow";
import { ProductCard } from "../product-card/product-card";
import { fetchProducts } from "../../services/products";
import type { Product } from "../../services/products";
import "./related-products.scss";

const TABS = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVs",
  "VER TODOS",
] as const;

export function RelatedProducts({
  shouldShowNav,
  onProductSelect,
}: {
  shouldShowNav?: boolean;
  onProductSelect?: (product: Product) => void;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts(controller.signal)
      .then((data) => {
        if (controller.signal.aborted) return;
        setProducts(data);
      })
      .catch((fetchError: unknown) => {
        if (controller.signal.aborted) return;
        setError(
          fetchError instanceof Error
            ? fetchError.message
            : "Não foi possível carregar os produtos.",
        );
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  function scrollCarousel(direction: "prev" | "next") {
    const grid = gridRef.current;
    if (!grid) return;

    const card = grid.querySelector<HTMLElement>(".product-card");
    const gap = Number.parseFloat(getComputedStyle(grid).gap) || 20;
    const scrollAmount = card
      ? card.getBoundingClientRect().width + gap
      : grid.clientWidth;

    grid.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }

  const hasProducts = !loading && !error && products.length > 0;

  return (
    <section
      id="section-related-products-1"
      className="related-products-section"
      aria-labelledby="related-products-title-1"
    >
      <div className="container">
        <div className="section-title-wrapper">
          <h2 id="related-products-title-1" className="section-title">
            Produtos relacionados
          </h2>
        </div>
        {shouldShowNav ? (
          <ul className="product-tabs">
            {TABS.map((tab, index) => (
              <li key={tab} className={index === 0 ? "active" : undefined}>
                {tab}
              </li>
            ))}
          </ul>
        ) : (
          <div className="see-all-button-container">
            <button className="see-all-button">Ver tudo</button>
          </div>
        )}

        <div className="carousel-container">
          {hasProducts && (
            <button
              type="button"
              className="carousel-nav prev"
              aria-label="Ver produtos anteriores"
              onClick={() => scrollCarousel("prev")}
            >
              <LeftArrowIcon />
            </button>
          )}

          {loading && (
            <p className="related-products-status" role="status">
              Carregando produtos...
            </p>
          )}

          {error && (
            <p className="related-products-status" role="alert">
              {error}
            </p>
          )}

          {!loading && !error && products.length === 0 && (
            <p className="related-products-status" role="status">
              Nenhum produto encontrado.
            </p>
          )}

          {hasProducts && (
            <div className="product-grid" ref={gridRef}>
              {products.map((product, index) => (
                <ProductCard
                  key={`${product.productName}-${index}`}
                  product={product}
                  onSelect={onProductSelect}
                />
              ))}
            </div>
          )}

          {hasProducts && (
            <button
              type="button"
              className="carousel-nav next"
              aria-label="Ver próximos produtos"
              onClick={() => scrollCarousel("next")}
            >
              <RightArrowIcon />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

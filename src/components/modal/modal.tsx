import { useEffect, useState } from "react";
import { MinusIcon } from "../icons/minus";
import { PlusIcon } from "../icons/plus";
import { XIcon } from "../icons/x";
import "./modal.scss";

interface ProductModalProps {
  image: string;
  title?: string;
  price?: number;
  description?: string;
  onClose?: () => void;
  onBuy?: (quantity: number) => void;
  onDetails?: () => void;
}

export function ProductModal({
  image,
  title = "LOREM IPSUM DOLOR SIT AMET",
  price = 1499.9,
  description = "Many desktop publishing packages and web page editors now many desktop publishing",
  onClose,
  onBuy,
  onDetails,
}: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
      <button
        type="button"
        className="modal-close"
        onClick={onClose}
        aria-label="Fechar"
      >
        <XIcon />
      </button>

      <div className="modal-image">
        <img src={image} alt={title} />
      </div>

      <div className="modal-content">
        <h2 className="modal-title">{title}</h2>

        <span className="modal-price">{formattedPrice}</span>

        <div className="modal-description">
          <p>{description}</p>

          <button type="button" className="modal-details" onClick={onDetails}>
            Veja mais detalhes do produto &gt;
          </button>
        </div>

        <div className="modal-actions">
          <div className="modal-quantity">
            <button
              type="button"
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
              aria-label="Diminuir quantidade"
            >
              <MinusIcon />
            </button>

            <span>{String(quantity).padStart(2, "0")}</span>

            <button
              type="button"
              onClick={increaseQuantity}
              aria-label="Aumentar quantidade"
            >
              <PlusIcon />
            </button>
          </div>

          <button
            type="button"
            className="modal-buy"
            onClick={() => onBuy?.(quantity)}
          >
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
}

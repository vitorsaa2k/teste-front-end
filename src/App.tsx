import { useState } from "react";
import "./App.scss";
import { Banners } from "./components/banners/banners";
import { Brands } from "./components/brands/brands";
import { Categories } from "./components/categories/categories";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { ProductModal } from "./components/modal/modal";
import { Newsletter } from "./components/newsletter/newsletter";
import { RelatedProducts } from "./components/related-products/related-products";
import type { Product } from "./services/products";

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <main>
        <Header />
        <Hero />
        <Categories />
        <RelatedProducts shouldShowNav onProductSelect={setSelectedProduct} />
        <Banners />
        <RelatedProducts onProductSelect={setSelectedProduct} />
        <Banners />
        <Brands />
        <RelatedProducts onProductSelect={setSelectedProduct} />
        <Newsletter />
        <Footer />
      </main>

      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProduct(null);
            }
          }}
        >
          <ProductModal
            image={selectedProduct.photo}
            title={selectedProduct.productName}
            price={selectedProduct.price}
            description={
              "Many desktop publishing packages and web page editors now many desktop publishing"
            }
            onClose={() => setSelectedProduct(null)}
          />
        </div>
      )}
    </>
  );
}

export default App;

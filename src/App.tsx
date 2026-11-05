import "./App.scss";
import { Banners } from "./components/banners/banners";
import { Brands } from "./components/brands/brands";
import { Categories } from "./components/categories/categories";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Newsletter } from "./components/newsletter/newsletter";
import { RelatedProducts } from "./components/related-products/related-products";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <RelatedProducts shouldShowNav />
      <Banners />
      <RelatedProducts />
      <Banners />
      <Brands />
      <RelatedProducts />
      <Newsletter />
    </main>
  );
}

export default App;

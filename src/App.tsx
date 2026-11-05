import "./App.scss";
import { Banners } from "./components/banners/banners";
import { Categories } from "./components/categories/categories";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { RelatedProducts } from "./components/related-products/related-products";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <RelatedProducts />
      <Banners />
    </main>
  );
}

export default App;

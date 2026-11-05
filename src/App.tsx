import "./App.scss";
import { Categories } from "./components/categories/categories";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
    </main>
  );
}

export default App;

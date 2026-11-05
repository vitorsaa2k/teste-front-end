import { CrownIcon } from "../icons/crown";
import "./nav.scss";

const categories = [
  "Todas Categorias",
  "Supermercado",
  "Livros",
  "Moda",
  "Lançamentos",
];

export function HeaderNav() {
  return (
    <nav className="header-nav" aria-label="Categorias">
      <div className="container">
        <ul className="nav-list">
          {categories.map((category) => (
            <li key={category}>
              <a href="#">{category.toUpperCase()}</a>
            </li>
          ))}
          <li>
            <a href="#" className="highlight">
              OFERTAS DO DIA
            </a>
          </li>
          <li className="nav-item-icon">
            <CrownIcon />
            <a href="#">ASSINATURA</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

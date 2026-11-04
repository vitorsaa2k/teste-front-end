import headerLogo from "../../assets/header-logo.svg";
import { BoxArrowIcon } from "../icons/box-arrow";
import { HeartIcon } from "../icons/heart";
import { MagnifyingGlassIcon } from "../icons/magnifying-glass";
import { ShoppingCartIcon } from "../icons/shopping-cart";
import { UserCircleFunction } from "../icons/user-circle";
import "./main-header.scss";

export function MainHeader() {
  return (
    <div className="header-main">
      <div className="container header-main-inner">
        <a href="/" className="logo" aria-label="Econverse">
          <img src={headerLogo} alt="Econverse" />
        </a>

        <form
          className="search-bar"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="text"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />
          <button type="submit" aria-label="Buscar">
            <MagnifyingGlassIcon />
          </button>
        </form>

        <div className="header-icons">
          <a href="#" aria-label="Meus pedidos">
            <BoxArrowIcon />
          </a>
          <a href="#" aria-label="Favoritos">
            <HeartIcon />
          </a>
          <a href="#" aria-label="Minha conta">
            <UserCircleFunction />
          </a>
          <a href="#" aria-label="Carrinho">
            <ShoppingCartIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

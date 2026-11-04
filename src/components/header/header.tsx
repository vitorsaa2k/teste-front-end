import "./header.scss";
import { MainHeader } from "./main-header";
import { HeaderNav } from "./nav";
import { TopHeader } from "./top";

export function Header() {
  return (
    <header className="site-header">
      <TopHeader />
      <MainHeader />
      <HeaderNav />
    </header>
  );
}

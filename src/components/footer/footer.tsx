import headerLogo from "../../assets/header-logo.svg";
import { FacebookIcon } from "../icons/facebook";
import { InstagramIcon } from "../icons/instagram";
import { LinkedinIcon } from "../icons/linkedin";
import "./footer.scss";

const FOOTER_COLUMNS = [
  {
    title: "Institucional",
    links: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
  },
  {
    title: "Ajuda",
    links: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
  },
  {
    title: "Termos",
    links: [
      "Termos e Condições",
      "Política de Privacidade",
      "Troca e Devolução",
    ],
  },
];

export function Footer() {
  return (
    <section id="section-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo-container">
            <img src={headerLogo} alt="Logo" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div className="footer-links-wrapper">
          {FOOTER_COLUMNS.map((column) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
}

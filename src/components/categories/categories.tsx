import "./categories.scss";
import devicesImg from "../../assets/devices.png";
import supermarketImg from "../../assets/supermarket.png";
import whiskeyImg from "../../assets/whiskey.png";
import toolsImg from "../../assets/tools.png";
import heartHandImg from "../../assets/heart-hand.png";
import runningImg from "../../assets/running.png";
import fashionImg from "../../assets/fashion.png";

export function Categories() {
  return (
    <section className="category-section">
      <div className="category-item selected">
        <img src={devicesImg} />
        <p>Tecnologia</p>
      </div>
      <div className="category-item">
        <img src={supermarketImg} />
        <p>Supermercado</p>
      </div>
      <div className="category-item">
        <img src={whiskeyImg} />
        <p>Bebidas</p>
      </div>
      <div className="category-item">
        <img src={toolsImg} />
        <p>Ferramentas</p>
      </div>
      <div className="category-item">
        <img src={heartHandImg} />
        <p>Saúde</p>
      </div>
      <div className="category-item">
        <img src={runningImg} />
        <p>Esporte e Fitness</p>
      </div>
      <div className="category-item">
        <img src={fashionImg} />
        <p>Moda</p>
      </div>
    </section>
  );
}

import { CcardIcon } from "../icons/ccard";
import { ShieldIcon } from "../icons/shield";
import { TruckIcon } from "../icons/truck";
import "./top.scss";

export function TopHeader() {
  return (
    <div className="header-top-bar">
      <div className="container header-top-inner">
        <div className="top-bar-item">
          <ShieldIcon />
          <p>
            Compra <span>100% segura</span>
          </p>
        </div>
        <div className="top-bar-item">
          <TruckIcon />
          <p>
            <span>Frete grátis</span> acima de R$ 200
          </p>
        </div>
        <div className="top-bar-item">
          <CcardIcon />
          <p>
            <span>Parcele</span> suas compras
          </p>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
//---------------------------------------------------------------------------
import "./style.scss";

interface Props {
  activeMenu: boolean;
  setActiveMenu: (activeMenu: boolean) => void
}

export const HeaderMenu = ({ activeMenu, setActiveMenu }: Props) => {
  return (
    <nav className={`${activeMenu ? "header-menu active" : "header-menu"}`}>
      <ul className="__list">
        <li className="__item" onClick={() => setActiveMenu(false)}>
          <Link to="/puertas">Puertas</Link>
        </li>
        <li className="__item" onClick={() => setActiveMenu(false)}>
          <Link to="/zaguanes">Zaguanes</Link>
        </li>
        <li className="__item" onClick={() => setActiveMenu(false)}>
          <Link to="/barandales">Barandales</Link>
        </li>
        <li className="__item" onClick={() => setActiveMenu(false)}>
          <Link to="/ventanas">Ventanas</Link>
        </li>
      </ul>
    </nav>
  );
};

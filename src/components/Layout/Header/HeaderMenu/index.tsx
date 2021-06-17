import { Link } from "react-router-dom";
//---------------------------------------------------------------------------
import "./style.scss";

interface Props {
  activeMenu: boolean;
}

export const HeaderMenu = ({ activeMenu }: Props) => {
  return (
    <nav className={`${activeMenu ? "header-menu active" : "header-menu"}`}>
      <ul className="__list">
        <li className="__item">
          <Link to="/puertas">Puertas</Link>
        </li>
        <li className="__item">
          <Link to="/zaguanes">Zaguanes</Link>
        </li>
        <li className="__item">
          <Link to="/barandales">Barandales</Link>
        </li>
        <li className="__item">
          <Link to="/ventanas">Ventanas</Link>
        </li>
      </ul>
    </nav>
  );
};

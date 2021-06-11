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
          <Link to="/aqui">Puertas</Link>
        </li>
        <li className="__item">
          <Link to="/aqui">Zaguanes</Link>
        </li>
        <li className="__item">
          <Link to="/aqui">Barandales</Link>
        </li>
        <li className="__item">
          <Link to="/aqui">Ventanas</Link>
        </li>
      </ul>
    </nav>
  );
};

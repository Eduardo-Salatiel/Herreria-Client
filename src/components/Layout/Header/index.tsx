import { useState } from "react";
import { useStickyHeader } from "../../../hooks/useStickyHeader";
import logoSrc from "./../../../assets/img/logos/logo-blanco.png";
//-------------------------------------------------------------------------
import HeaderBanner from "./HeaderBanner";
import { HeaderMenu } from "./HeaderMenu";
import "./style.scss";

interface Props {
  stickyHeader?: boolean;
}

const Header = ({ stickyHeader = true }: Props) => {
  const { headerRef } = useStickyHeader(stickyHeader);
  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenuClick = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <header
      className={`${!stickyHeader ? "header-not sticky" : "header"}`}
      ref={headerRef}
    >
      <HeaderBanner />
      <div className="logo">
        <img className="logo-image" src={logoSrc} alt="logo-herreria-SMC" />
      </div>
      {/* --- toggle es para el menu en mobile */}
      <div
        className={`${activeMenu ? "toggle active" : "toggle"}`}
        onClick={handleMenuClick}
      />
      <HeaderMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
    </header>
  );
};

export default Header;

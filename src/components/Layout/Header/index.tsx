import { useState } from "react";
import { useStickyHeader } from "../../../hooks/useStickyHeader";
//-------------------------------------------------------------------------
import HeaderBanner from "./HeaderBanner";
import { HeaderMenu } from "./HeaderMenu";
import "./style.scss";

const Header = () => {
  const { headerRef } = useStickyHeader();
  const [activeMenu, setActiveMenu] = useState(false);

  const handleMenuClick = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <header className="header" ref={headerRef}>
      <HeaderBanner />
      <h1 className="logo">BRAND.</h1>
      {/* --- toggle es para el menu en mobile */}
      <div
        className={`${activeMenu ? "toggle active" : "toggle"}`}
        onClick={handleMenuClick}
      />
      <HeaderMenu activeMenu={activeMenu}/>
    </header>
  );
};

export default Header;

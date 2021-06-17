import { useState } from "react";
import { useStickyHeader } from "../../../hooks/useStickyHeader";
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
      <h1 className="logo">BRAND.</h1>
      {/* --- toggle es para el menu en mobile */}
      <div
        className={`${activeMenu ? "toggle active" : "toggle"}`}
        onClick={handleMenuClick}
      />
      <HeaderMenu activeMenu={activeMenu} />
    </header>
  );
};

export default Header;

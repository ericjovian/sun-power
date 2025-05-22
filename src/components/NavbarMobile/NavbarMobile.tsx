import * as React from "react";
import { useState } from "react";
import "./NavbarMobile.sass";
import { Link, Outlet } from "react-router-dom";
import SunPowerLogo from "../../assets/sunpowernobg.png";

const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="navbar-mobile">
        <div className="navbar-mobile__logo">
          <Link to="/">
            <img
              src={SunPowerLogo}
              alt="Sun Power Logo"
              className="navbar-mobile__logo-image"
            />
          </Link>
        </div>
        <div className="navbar-mobile__menu-icon" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>
        {isOpen && (
          <ul className="navbar-mobile__links">
            <li onClick={closeMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/services">Services</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/about">About Us</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        )}
        <Outlet />
      </div>
    </>
  );
};

export default NavbarMobile;

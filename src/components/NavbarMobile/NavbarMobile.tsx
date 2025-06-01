import * as React from "react";
import { useState } from "react";
import "./NavbarMobile.sass";
import { Link, NavLink } from "react-router-dom";
import SunPowerLogo from "../../assets/logos/sunpowernobg.png";
const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="navbar-mobile">
        <div className="navbar-mobile__logo">
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={SunPowerLogo}
              alt="Sun Power Logo"
              className="navbar-mobile__logo-image"
            />
          </Link>
        </div>
        <button className="navbar-mobile__menu-icon" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div
        className={`navbar-mobile__overlay${isOpen ? " open" : ""}`}
        onClick={closeMenu}
      />
      <nav className={`navbar-mobile__menu${isOpen ? " open" : ""}`}>
        <button className="navbar-mobile__menu-icon__open" onClick={toggleMenu}>
          ✖
        </button>
        <ul className="navbar-mobile__links">
          <li onClick={closeMenu}>
            <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "navbar-mobile__link navbar-mobile__link--active"
                  : "navbar-mobile__link"
              }
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink
              to="/about"
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "navbar-mobile__link navbar-mobile__link--active"
                  : "navbar-mobile__link"
              }
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              About Us
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink
              to="/products"
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "navbar-mobile__link navbar-mobile__link--active"
                  : "navbar-mobile__link"
              }
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Products
            </NavLink>
          </li>

          <li onClick={closeMenu}>
            <NavLink
              to="/contacts"
              className={({ isActive }: { isActive: boolean }) =>
                isActive
                  ? "navbar-mobile__link navbar-mobile__link--active"
                  : "navbar-mobile__link"
              }
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarMobile;

// style for the mobile navbar
// src/components/NavbarMobile/NavbarMobile.sass

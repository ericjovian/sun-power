import * as React from "react";
import "./Navbar.sass";
import { NavLink, Link, Outlet } from "react-router-dom";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import SunPowerLogo from "../../assets/logos/sunpowernobg.png";
import Footer from "../Footer/Footer";

const Navbar: React.FC = () => {
  return (
    <>
      <NavbarMobile />
      <nav className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <img
              src={SunPowerLogo}
              alt="Sun Power Logo"
              className="navbar__logo-image"
            />
          </Link>
        </div>
        <ul className="navbar__links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <div className="outlet-container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Navbar;

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
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
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
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
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
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
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
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
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
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
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

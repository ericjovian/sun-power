import * as React from "react";
import "./Navbar.sass";
import { Link, Outlet } from "react-router-dom";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import SunPowerLogo from "../../assets/sunpowernobg.png";
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Navbar;

import * as React from "react";
import "./Footer.sass";
import { NavLink } from "react-router-dom";
import SunPowerLogo from "../../assets/logos/sunpower.png";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__logo">
          <img
            src={SunPowerLogo}
            alt="Sun Power Logo"
            className="footer__logo-image"
          />
        </div>
        <div className="footer__content">
          <div className="footer__content__company">
            <h1>Company</h1>
            <ul className="footer__links">
              <li>
                <NavLink to="/products" className="footer__link">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="footer__link">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className="footer__link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__content__products">
            <h1>Products</h1>
            <ul className="footer__links">
              <li>
                <NavLink to="/products/containerized" className="footer__link">
                  Genset Containerized
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/open" className="footer__link">
                  Genset Open
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/silent" className="footer__link">
                  Genset Silent
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__content__cs">
            <h1>Customer Service</h1>
            <ul className="footer__links">
              <li>Email:</li>
              <li>
                <a
                  href="mailto:sunpowerindonesia98@gmail.com"
                  className="footer__link"
                >
                  <p>sunpowerindonesia98@gmail.com</p>
                </a>
              </li>
              <li>Phone:</li>
              <li>
                <a href="tel:+6282165446491" className="footer__link">
                  <p>+62-821-6544-6491</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__socials">
          <h1>Follow Us!</h1>
          <ul className="footer__socials__links">
            <li>
              <a
                href="https://www.facebook.com/sunpowerindonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sunpowerindonesia/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/sunpowerindonesia/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__copyright">
          <p>&copy; 2023 Sun Power. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

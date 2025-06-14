import * as React from "react";
import "./Footer.sass";
import { NavLink } from "react-router-dom";
import SunPowerLogo from "../../assets/logos/sunpower.png";
import Instagram from "../../assets/logos/instagram.svg";
import Whatsapp from "../../assets/logos/whatsapp.svg";

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
                <NavLink
                  to="/about"
                  className="footer__link"
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
                  className="footer__link"
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
                  className="footer__link"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__content__products">
            <h1>Products</h1>
            <ul className="footer__links">
              <li>
                <NavLink
                  to="/products/containerized"
                  className="footer__link"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Genset Containerized
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products/open"
                  className="footer__link"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Genset Open
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products/silent"
                  className="footer__link"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
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
          <h1>Let's Connect !</h1>
          <ul className="footer__socials__links">
            <li>
              <a
                href="https://wa.me/+6285319988181?text=Hi%20SunPower%2C%20saya%20mau%20tanya%20tentang%20..."
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <img src={Whatsapp} alt="WhatsApp" />
              </a>
            </li>
            <li>
              <a
                // href="https://mp.weixin.qq.com/s/ABC123XYZ456"
                href="https://wa.me/+62811613177?text=Hi%20SunPower%2C%20saya%20mau%20tanya%20tentang%20..."
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <img src={Whatsapp} alt="WhatsApp" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/sunpower_genset"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <img src={Instagram} alt="Instagram" />
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

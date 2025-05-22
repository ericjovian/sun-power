import * as React from "react";
import "./Footer.sass";
import { Link } from "react-router-dom";
import SunPowerLogo from "../../assets/sunpower.png";

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
        <div className="footer__links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer__social-media">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/sunpower_genset/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="footer__contact">
          <p>
            Contact Us:
            <br />
            Email :{" "}
            <a href="mailto:sunpowerindonesia98@gmail.com">
              sunpowerindonesia98@gmail.com
            </a>
            <br />
            Phone :{" "}
            <a
              href="https://wa.me/+6282165446491"
              target="_blank"
              rel="noopener noreferrer"
            >
              +62 821-6544-6491
            </a>
          </p>
        </div>
        <div className="footer__address">
          <p>Address: Jl. Raya Cibaduyut No. 123, Bandung, Indonesia</p>
        </div>
        <div className="footer__copyright">
          <p>&copy; 2023 Sun Power. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

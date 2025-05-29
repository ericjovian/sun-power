import React from "react";
import "./Notfound.sass";
import SunPowerLogo from "../../assets/logos/sunpower.png";
import BackButton from "../../components/BackButton/BackButton";

const NotFound: React.FC = () => {
  return (
    <>
      <BackButton className="not-found__back-button" />
      <div className="not-found">
        <img
          src={SunPowerLogo}
          alt="Sun Power Logo"
          className="not-found__logo"
        />
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </>
  );
};
export default NotFound;

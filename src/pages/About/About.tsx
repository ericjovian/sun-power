import React, { useEffect } from "react";
import "./About.sass";
import SunPower from "../../assets/logos/sunpower.png";
import Gudang from "../../assets/gudang.jpg";
import Open from "../../assets/open.jpg";
import Containerize from "../../assets/containerize.jpg";
import Locations from "../../components/Locations/Locations";

const About: React.FC = () => {
  useEffect(() => {
    document.title = "About Us | Sun Power";
  }, []);

  return (
    <div className="about">
      <div className="about__header">
        <div className="about__headline">
          <img
            src={SunPower}
            alt="Sun Power Logo"
            className="about__headline__logo"
          />
          <p className="about__headline__description">
            <span className="about__headline__description__big">Sun Power</span>{" "}
            is a trusted provider of reliable and innovative power solutions,
            specializing in the supply, installation, and maintenance of
            high-quality generator sets powered by diesel, gas, and hybrid
            systems. With a strong global presence and operations in over 120
            countries, we support a wide range of sectors including
            construction, telecommunications, healthcare, mining, and more. Our
            products feature{" "}
            <span className="about__headline__description__big">
              world-class engine brands and alternators
            </span>
            , and are backed by certified quality standards and 24/7 technical
            support. We are committed to helping our clients maintain
            uninterrupted operations with top-tier products at competitive
            prices.
          </p>
          <br />
          <p className="about__headline__description">
            As the sole agent and trademark holder of the{" "}
            <span className="about__headline__description__big">Sun Power</span>{" "}
            brand in Indonesia, we play a leading role in distributing advanced
            power solutions and spare parts across the nation. With showroom
            warehouses in Medan and Jakarta, we serve both private and
            government sectors across Java, Sumatra, Kalimantan, and Eastern
            Indonesia. Our mission is centered on{" "}
            <span className="about__headline__description__big">
              {" "}
              delivering customer satisfaction through excellent service,
              dependable products, and a continuous improvement mindset
            </span>
            . By combining expert knowledge, sustainable practices, and a strong
            quality policy, Sun Power empowers industries and communities with
            dependable energy solutions.
          </p>
        </div>
        <div className="about__mansory">
          <img
            src={Gudang}
            alt="CEO of Sun Power"
            className="about__mansory__leftimg"
          />
          <div className="about__mansory__rightimgs">
            <img src={Containerize} alt="CEO of Sun Power" />
            <img src={Open} alt="CEO of Sun Power" />
          </div>
        </div>
      </div>
      <div className="about__visionmission">
        <div className="about__visionmission__vision">
          <h2 className="about__visionmission__title">Vision</h2>
          <p className="about__visionmission__description">
            To be the leading provider of reliable and innovative power
            solutions in Indonesia, recognized for our commitment to quality,
            customer satisfaction, and sustainable practices.
          </p>
        </div>
        <div className="about__visionmission__mission">
          <h2 className="about__visionmission__title">Mission</h2>
          <p className="about__visionmission__description">
            To deliver high-quality generator sets and power solutions that meet
            the diverse needs of our clients, while ensuring exceptional
            service, continuous improvement, and a focus on sustainability.
          </p>
        </div>
      </div>
      <div className="about__locations">
        <h2 className="about__locations__title">Our Locations</h2>
        <Locations />
      </div>
    </div>
  );
};
export default About;

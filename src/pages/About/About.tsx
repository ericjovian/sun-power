import React from "react";
import "./About.sass";

const About: React.FC = () => {
  return (
    <div className="about">
      <h1 className="about__title">About Us</h1>
      <p className="about__description">
        We are a leading provider of innovative power solutions, dedicated to
        delivering high-quality products and exceptional customer service. Our
        mission is to empower businesses and individuals with reliable energy
        solutions that meet their unique needs.
      </p>
      <p className="about__description">
        With years of experience in the industry, we pride ourselves on our
        expertise and commitment to excellence. Our team of professionals is
        passionate about helping our customers find the right products and
        services to achieve their goals.
      </p>
    </div>
  );
};
export default About;

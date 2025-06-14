import React, { useEffect } from "react";
import "./Contacts.sass";
import Card from "../../components/Card/Card";
import LocationPin from "../../assets/logos/location_pin.webp";
import ArrowRight from "../../assets/logos/arrow-right.svg";
import Mail from "../../assets/logos/mail.svg";
import Phone from "../../assets/logos/phone.svg";
import Whatsapp from "../../assets/logos/whatsapp.svg";
import Instagram from "../../assets/logos/instagram.svg";
import Locations from "../../components/Locations/Locations";

const Contacts: React.FC = () => {
  useEffect(() => {
    document.title = "Contacts | Sun Power";
  }, []);
  return (
    <>
      <div className="contacts">
        <h2 className="about__locations__title">Our Contacts</h2>

        <div className="contacts__cards">
          <Card className="contacts__cards__card">
            <img src={Whatsapp} alt="whatsapp" />
            <div className="contacts__cards__card__links">
              <p>+62-811-613-177</p>
              <p>+62-853-1998-8181</p>
            </div>
          </Card>
          <Card className="contacts__cards__card">
            <img src={Phone} alt="phone" />
            <div className="contacts__cards__card__links">
              <p>(021) 29017235</p>
              <p>(061) 6854888</p>
            </div>
          </Card>
          <Card className="contacts__cards__card">
            <img src={Mail} alt="mail" />
            <div className="contacts__cards__card__links">
              <p>sunpowerindonesia98@gmail.com</p>
            </div>
          </Card>
          <Card className="contacts__cards__card contacts__cards__card__instagram">
            <img src={Instagram} alt="instagram" />
            <div className="contacts__cards__card__links">
              <p>sunpower_genset</p>
            </div>
          </Card>
        </div>
        <h2 className="about__locations__title">Our Locations</h2>
        <Locations />
      </div>
    </>
  );
};
export default Contacts;

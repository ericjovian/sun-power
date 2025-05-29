import React from "react";
import "./Contacts.sass";
import Card from "../../components/Card/Card";
import LocationPin from "../../assets/logos/location_pin.webp";
import ArrowRight from "../../assets/logos/arrow-right.svg";

const Contacts: React.FC = () => {
  return (
    <>
      <div className="contacts">
        <Card className="contacts__card">
          <img
            src={LocationPin}
            alt="Location Pin"
            className="contacts__icon"
          />
          Jl. Bhumimas 5 No. 7, Kawasan Cikupa Mas 2 <br />
          Kec Cikupa, Kab Tangerang Banten
          <br />
          <span className="contacts__link">
            <a
              href="https://goo.gl/maps/1Z5b7c4z8kF2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
              <img
                src={ArrowRight}
                alt="Arrow Right"
                className="contacts__arrow"
              />
            </a>
          </span>
        </Card>
        <Card className="contacts__card">
          <img
            src={LocationPin}
            alt="Location Pin"
            className="contacts__icon"
          />
          Jl. Pemda Raya Tigaraksa, Ciapus No. 88 <br /> Kec Cikupa, Kab
          Tangerang Banten <br />
          <br />
          T: 021-29017235
          <span className="contacts__link">
            <a
              href="https://www.google.com/maps/dir//Jl.+Pemda+Tigaraksa+No.88,+Sukamulya,+Kec.+Cikupa,+Kabupaten+Tangerang,+Banten+15710/@-6.2301364,106.5032496,21z/data=!4m9!4m8!1m0!1m5!1m1!1s0x2e4207330826fa59:0xfac3de6109433b26!2m2!1d106.5033794!2d-6.230123!3e0?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
              <img
                src={ArrowRight}
                alt="Arrow Right"
                className="contacts__arrow"
              />
            </a>
          </span>
        </Card>
        <Card className="contacts__card">
          <img
            src={LocationPin}
            alt="Location Pin"
            className="contacts__icon"
          />
          Jl. Pulau Bali No. 1, Kawasan Industri Medan Tahap II <br />
          Desa Saentis, Kab Deli Serdang 20242 <br />
          <br />
          T: 061-6854888, 061-6854268, 061-6854258
          <span className="contacts__link">
            <a
              href="https://goo.gl/maps/1Z5b7c4z8kF2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions
              <img
                src={ArrowRight}
                alt="Arrow Right"
                className="contacts__arrow"
              />
            </a>
          </span>
        </Card>
      </div>
    </>
  );
};
export default Contacts;

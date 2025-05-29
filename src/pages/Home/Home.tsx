import React from "react";
import "./Home.sass";
import Genset1 from "../../assets/gensets/sp.png";
import Genset2 from "../../assets/gensets/sp2.png";
import Genset3 from "../../assets/gensets/sp3.png";
import Genset4 from "../../assets/gensets/sp4.png";

import Logo from "../../assets/logos/sunpowernobg.png";

import Reassurance from "../../assets/logos/reassurance.svg";
import Warranty from "../../assets/logos/warranty.svg";
import Parts from "../../assets/logos/parts.svg";
import Service from "../../assets/logos/service.svg";

import MusimMas from "../../assets/customers/musimmas.png";
import SunPlaza from "../../assets/customers/sunplaza.png";
import TransMart from "../../assets/customers/transmart.png";
import JWMarriot from "../../assets/customers/jwmarriot.png";
import Kraton from "../../assets/customers/kraton.png";
import Volkopi from "../../assets/customers/volkopi.png";

import MusimMasGenset from "../../assets/gensets/musimmasg.png";
import SunPlazaGenset from "../../assets/gensets/sunplazag.png";
import TransMartGenset from "../../assets/gensets/transmartg.png";
import JWMarriotGenset from "../../assets/gensets/jwg.png";
import KratonGenset from "../../assets/gensets/kratong.png";
import VolkopiGenset from "../../assets/gensets/volkopig.png";

import CEO from "../../assets/CEO.jpg";

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <div className="home__gensets">
          <div className="home__gensets__image genset-1">
            <img src={Genset1} alt="Genset" />
          </div>
          <div className="home__gensets__image genset-2">
            <img src={Genset2} alt="Genset" />
          </div>
          <div className="home__gensets__image genset-3">
            <img src={Genset3} alt="Genset" />
          </div>
          <div className="home__gensets__image genset-4">
            <img src={Genset4} alt="Genset" />
          </div>
        </div>
        <div className="home__headline">
          <h1>Empowering Your World with Reliable Solutions</h1>
        </div>
        <div className="home__content">
          <div className="home__content__title">
            <h1>Why</h1>
            <img
              src={Logo}
              alt="Sun Power Logo"
              className="home__content__title__logo"
            />
            <p>?</p>
          </div>
          <div className="home__content__points">
            <ul>
              <li>
                <img src={Reassurance} alt="Reassurance" />
                <h2>Total Reassurance</h2>
                <p>
                  We are dedicated to ensuring your satisfaction with all our
                  generator products, offering reliable after-sales support.
                </p>
              </li>
              <li>
                <img src={Warranty} alt="Warranty" />
                <h2>Warranty</h2>
                <p>
                  We stand behind the quality of its generator products with a
                  one-year limited warranty (or 2000 hours, whichever comes
                  first), subject to terms and conditions.
                </p>
              </li>
              <li>
                <img src={Parts} alt="Parts" />
                <h2>Spare Parts</h2>
                <p>
                  We offer a comprehensive selection of genuine spare parts for
                  your generator.
                </p>
              </li>
              <li>
                <img src={Service} alt="Service" />
                <h2>Service, Maintenance and Testing</h2>
                <p>
                  We offer regular service and maintenance contracts for both
                  new and existing diesel generators
                </p>
              </li>
            </ul>
          </div>
          <div className="home__content__portfolio">
            <h1>Our Portfolio</h1>
            <p>
              We have been trusted to provide reliable power solutions for
              hundreds of well-known customers.
            </p>
            <div className="home__content__portfolio__images">
              <ul>
                <li className="home__card">
                  <img src={MusimMas} alt="Musim Mas" />
                  <img
                    src={MusimMasGenset}
                    alt="CEO"
                    className="home__card__ceo"
                  />
                  <p className="home__card__ceo__text">
                    8 Units of 2000 kva Open Type MTU
                  </p>
                </li>
                <li className="home__card">
                  <img src={SunPlaza} alt="Sun Plaza" />
                  <img
                    src={SunPlazaGenset}
                    alt="CEO"
                    className="home__card__ceo"
                  />
                  <p className="home__card__ceo__text">
                    1 Unit of 2000 kva and 1250 kva Open Type Mitsubishi genset
                  </p>
                </li>
                <li className="home__card">
                  <img src={TransMart} alt="TransMart" />
                  <img
                    src={TransMartGenset}
                    alt="CEO"
                    className="home__card__ceo"
                  />
                  <p className="home__card__ceo__text">
                    5 Unit of 1500 kva Open Type MTU genset
                  </p>
                </li>
                <li className="home__card">
                  <img src={JWMarriot} alt="JW Marriot" />
                  <img
                    src={JWMarriotGenset}
                    alt="CEO"
                    className="home__card__ceo"
                  />
                  <p className="home__card__ceo__text">
                    2 Unit of 1250 kva Open Type Perkins genset
                  </p>
                </li>
                <li className="home__card">
                  <img src={Kraton} alt="Kraton" />
                  <img
                    src={KratonGenset}
                    alt="CEO"
                    className="home__card__ceo"
                  />
                  <p className="home__card__ceo__text">
                    3 Unit of 500 kva Cummins genset
                  </p>
                </li>
                <li className="home__card">
                  <img src={Volkopi} alt="Volkopi" />
                  <img
                    src={VolkopiGenset}
                    alt="CEO"
                    className="home__card__ceo"
                  />
                  <p className="home__card__ceo__text">
                    2 Unit of 250 kva Silent Type Cummins genset
                  </p>
                </li>
              </ul>
              <p>And many more...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

import React from "react";
import "./Slider.sass";
import Cummins from "../../assets/brands/cummins.png";
import Perkins from "../../assets/brands/perkins.png";
import Yanmar from "../../assets/brands/yanmar.png";
import Deutz from "../../assets/brands/deutz.png";
import Isuzu from "../../assets/brands/isuzu.png";
import Faw from "../../assets/brands/faw.png";
import Doosan from "../../assets/brands/doosan.png";
import Lovol from "../../assets/brands/lovol.png";

const Slider: React.FC = () => {
  return (
    <div className="slider">
      <section className="slider__section">
        <article className="slider__article">
          <div className="slider__track">
            <ul className="slider__list">
              <li className="slider__item">
                <img className="slider__img" src={Cummins} />
              </li>
              <li className="slider__item">
                <img className="slider__img" src={Perkins} />
              </li>
              <li className="slider__item">
                <img className="slider__img" src={Yanmar} />
              </li>
              <li className="slider__item">
                <img className="slider__img" src={Deutz} />
              </li>
              <li className="slider__item">
                <img className="slider__img" src={Isuzu} />
              </li>
              <li className="slider__item">
                <img className="slider__img" src={Faw} />
              </li>
              <li className="slider__item">
                <img className="slider__img" src={Doosan} />
              </li>
              <li className="slider__item">
                <img className="slider__img" src={Lovol} />
              </li>
            </ul>
          </div>
          <div className="slider__track">
            <ul className="slider__list">
              <li className="slider__item">
                <img className="slider__img" src={Cummins} />
              </li>
              <li className="slider__item">
                <img className="slider__img" src={Perkins} />
              </li>
              <li className="slider__item">
                <img className="slider__img" src={Yanmar} />
              </li>
              <li className="slider__item">
                <img className="slider__img" src={Deutz} />
              </li>
              <li className="slider__item">
                <img className="slider__img" src={Isuzu} />
              </li>
              <li className="slider__item">
                <img className="slider__img" src={Faw} />
              </li>
              <li className="slider__item">
                <img className="slider__img" src={Doosan} />
              </li>
              <li className="slider__item">
                <img className="slider__img" src={Lovol} />
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Slider;

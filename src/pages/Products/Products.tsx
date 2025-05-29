import React from "react";
import "./Products.sass";
import Carousel from "../../components/Carousel/Carousel";

// Group imports together
import SP25I from "../../assets/gensets/sp25i.jpg";
import SP425y from "../../assets/gensets/sp42,5y.jpg";
import SP100c from "../../assets/gensets/sp100c.jpg";
import SP400c from "../../assets/gensets/sp400c.jpg";
import SP180p from "../../assets/gensets/sp180p.jpg";
import SP250c from "../../assets/gensets/sp250c.jpg";
import SP60p from "../../assets/gensets/sp60p.jpg";
import SP180k from "../../assets/gensets/sp180k.jpg";
import SP650c from "../../assets/gensets/sp650c.jpg";
import SP120k from "../../assets/gensets/sp120k.jpg";
import SP325c from "../../assets/gensets/sp325c.jpg";
import SP50c from "../../assets/gensets/sp50c.jpg";
import SP313c from "../../assets/gensets/sp313c.jpg";
import SP350c from "../../assets/gensets/sp350c.jpg";

import Perkins from "../../assets/brands/perkins.png";
import Yanmar from "../../assets/brands/yanmar.png";
import Doosan from "../../assets/brands/doosan.png";
import Lovol from "../../assets/brands/lovol.png";
import Cummins from "../../assets/brands/cummins.png";
import Isuzu from "../../assets/brands/isuzu.png";
import Fawde from "../../assets/brands/fawde.png";
import Deutz from "../../assets/brands/deutz.png";

// Create an array of images
const slides = [
  SP25I,
  SP425y,
  SP100c,
  SP400c,
  SP180p,
  SP250c,
  SP60p,
  SP180k,
  SP650c,
  SP120k,
  SP325c,
  SP50c,
  SP313c,
  SP350c,
];

const Products: React.FC = () => {
  return (
    <div className="products">
      <div className="products__carousel">
        <Carousel slides={slides} />
      </div>
      <div className="products__partners">
        <h1>Our Partners</h1>
        <div className="products__partners-logos">
          <img src={Perkins} alt="Perkins" />
          <img src={Yanmar} alt="Yanmar" />
          <img src={Doosan} alt="Doosan" />
          <img src={Lovol} alt="Lovol" />
          <img src={Cummins} alt="Cummins" />
          <img src={Isuzu} alt="Isuzu" />
          <img src={Fawde} alt="Fawde" />
          <img src={Deutz} alt="Deutz" />
          {/* <img src={Faw} alt="Faw" /> */}
        </div>
      </div>
    </div>
  );
};
export default Products;

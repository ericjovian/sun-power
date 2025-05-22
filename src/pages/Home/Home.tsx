import React, { useEffect, useState } from "react";
import "./Home.sass";
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

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home__carousel">
        <Carousel slides={slides} />
      </div>
      <h1>Welcome to Sun Power</h1>
      <p>
        Di <span className="home__brand">Sun Power</span>, kami menjual berbagai
        variasi merk generator dengan kualitas dan harga optimum yang dapat
        memenuhi kebutuhan anda.
      </p>
    </div>
  );
};
export default Home;

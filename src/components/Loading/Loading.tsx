import React from "react";
import "./Loading.sass";
import { useAppSelector } from "../../redux/hooks";
import GensetIcon from "../../assets/logos/genset.webp";
import SmokeIcon from "../../assets/logos/smoke.png";

const Loading: React.FC = () => {
  const { isLoading } = useAppSelector((state) => state.common);
  if (!isLoading) return null;
  return (
    <div className="loading">
      <div className="loading__container">
        <img src={GensetIcon} alt="Genset Icon" className="loading__genset" />
        <img src={SmokeIcon} alt="Smoke Icon" className="loading__smoke" />
      </div>
    </div>
  );
};

export default Loading;

import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return <div className={`card ${className ? className : ""}`}>{children}</div>;
};
export default Card;

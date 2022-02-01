import React from "react";
import punk from "../assets/punks/2.jpg";
import weth from "../assets/assets/weth.png";
import "./CollectionCard.css";

export const CollectionCard = ({ name, traits, image, id }) => {
  return (
    <div className="collectionCard">
      <img src={punk} alt="" />
      <div className="details">
        <div className="name">
          {name}
          <div className="id">{id}</div>
        </div>

        <div className="priceContainer">
          <img src={weth} className="wethImage" alt="" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

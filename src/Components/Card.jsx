import React from "react";
import "./styles.css"
import  {NavLink}  from "react-router-dom";
const ImageCard = ({ imageSrc, title, brand, description, price,id,}) => {
  return (
    <div className="card-container">
        <NavLink to={`/about/${id}`}>
        <div className="card-container-sub">
          <img
            src={imageSrc}
            alt=""
            />
          <div className="details-container">
            <ul className="card-title-header">
              <li className="card-title">{title}</li>
              <li className="card-price">${price}</li>
            </ul>
            <li className="card-brand">{brand}</li>
            <li className="card-description">{description}</li>
          </div>
        </div>
    </NavLink>
    </div>
  );
};

export default ImageCard;

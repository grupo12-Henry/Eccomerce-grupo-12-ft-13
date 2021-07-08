import React from "react";
import { Link } from "react-router-dom";

export default function HomeProductsCards({ name, price, image, id }) {
  return (
    <div className="cardContainer">
      <div className="" key={id}>
        <h2 className="">{name}</h2>
        <p className="">{price}</p>
        <Link to={`/detail/${id}`}>
          <img
            src={image}
            width="100px"
            className=""
            alt="No cargo, al horno papurri"
          />
        </Link>
        <Link to={`/detail/${id}`}>
          <p className="">Learn more...</p>
        </Link>
      </div>
    </div>
  );
}

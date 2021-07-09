import React from "react";
import { Link } from "react-router-dom";

export default function HomeCards({ name, price, image, id }) {
  return (
    <div className="cardContainer">
      <div className="" key={id}>
        <h4 className="">{name}</h4>
        <p className="">${price}</p>
        <Link to={`/detail/${id}`}>
          <img
            src={image}
            width="100px"
            className=""
            alt="image product"
          />
        </Link><br></br>
        <button type="button" class="btn btn-dark">Agregar</button>
      </div>
    </div>
  );
}
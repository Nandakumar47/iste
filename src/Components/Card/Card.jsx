import React from "react";
import "./Card.css";

function Card({name}) {
  return (
    <div className="card__div">
      <div className="card__div_text">
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default Card;

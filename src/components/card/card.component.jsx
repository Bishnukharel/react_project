import React from "react";
import "./card.styles.css";

// this is the content of the card
function Card(props) {
  return (
    <div className="card-container">
      <img
        alt="monsterman"
        src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
      />
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
}
export default Card;

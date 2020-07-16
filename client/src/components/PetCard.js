import React from "react";

function PetCard(props) {
  console.log(props);
  return (
    <div className="row" id="petcard">
      <div className="col-md-4">
        <div>
          <img src={props.image}></img>
          <p>
            Hi! I'm {props.name} and I'm a {props.species}. Specifically a{" "}
            {props.breeds}. I'm currently up for adoption! Will you bring me
            home?
          </p>
        </div>
      </div>
    </div>
  );
}

export default PetCard;

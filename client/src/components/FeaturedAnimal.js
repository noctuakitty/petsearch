import React from "react";

function FeaturedAnimal(props) {
  return (
    <div>
      <img src={props.photo} alt={props.name}></img>
      <p>
        Hi my name is {props.name}! I am a {props.species}, specifically a{" "}
        {props.gender} {props.breed}. I am currently {props.status}
      </p>
    </div>
  );
}

export default FeaturedAnimal;

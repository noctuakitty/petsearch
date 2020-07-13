import React from "react";

function FeaturedAnimal(props) {
  return (
    <div>
      <h1>Featured Pet</h1>
      <img src={props.photo} alt={props.name}></img>
      <p>
        Hi my name is {props.name}! I am a {props.species}, specifically a{" "}
        {props.gender} {props.breed}. And I am currently {props.status}
      </p>
    </div>
  );
}

export default FeaturedAnimal;

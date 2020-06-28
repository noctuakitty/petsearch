import React from "react";

function FeaturedAnimal(props) {
  return (
    <div>
      <img src={props.photo}></img>
      <p>
        Hi my name is {props.name}, I am a{props.species}, specifically a{" "}
        {props.gender}
        {props.breed}. I am currently {props.status}
      </p>
    </div>
  );
}

export default FeaturedAnimal;

// REACT_APP_API_KEY = N8GeiieoVoNpVxmvozyKUYUvCajYJSrXMVMO5zAaWESD7jb6GD

// REACT_APP_API_SECRET = FsKYSlDwvn98riFhjnH2OYzWh6qr9G3BY7QFcETE

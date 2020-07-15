import React, { Component } from "react";
import API from "../../utils/api";
import PetCard from "../PetCard";

class Search extends Component {
  state = {
    image: "",
    type: "",
    location: "",
    breeds: "",
    pets: []
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.type, this.state.location, this.state.breeds);
    if (this.state.type && this.state.location && this.state.breeds) {
      API.getPetFinder({
        type: this.state.type,
        location: this.state.location,
        breeds: this.state.breeds
      }).then((res) => {
        console.log(res.data.animals);
        let array = [];
        for (let i = 0; i < res.data.animals.length; i++) {
          array.push(res.data.animals[i]);
        }
        console.log(array);
        this.setState({ pets: array });
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div class="input-group mb-3">
            type:
            <div>
              <input
                type="text"
                class="form-control"
                placeholder="Ex: Dog "
                aria-label="type"
                aria-describedby="button-addon2"
                onChange={this.handleInputChange}
                value={this.state.type}
                name="type"
              ></input>
            </div>
            location:
            <input
              type="text"
              class="form-control"
              placeholder="Zip Code"
              aria-label="location"
              aria-describedby="button-addon2"
              onChange={this.handleInputChange}
              value={this.state.location}
              name="location"
            ></input>
            breeds:
            <input
              type="text"
              class="form-control"
              placeholder="Ex: Yorkie"
              aria-label="breeds"
              aria-describedby="button-addon2"
              onChange={this.handleInputChange}
              value={this.state.breeds}
              name="breeds"
            ></input>
            <div class="input-group-append">
              <button
                onClick={this.handleFormSubmit}
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          {this.state.pets.map((pet) => (
            <PetCard
              name={pet.name}
              species={pet.species}
              breeds={pet.breeds.primary}
              // image={
              //   pet.animals[0].primary_photo_cropped
              //     ? pet.data.animals[0].primary_photo_cropped.small
              //     : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483296.jpg"
              // }
            />
            // <PetCard name={pet.name} image={pet.primary_photo_cropped} species={pet.type} breeds={pet.breeds} />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;

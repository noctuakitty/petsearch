import React, { Component } from "react";
import API from "../../utils/api";
import PetCard from "../PetCard";

class Search extends Component {
  state = {
    // image: "",
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
        <div className="jumbotron">
          <h1>Find for Fluffy here!</h1>
        </div>
        <div className="row">
          <div class="input-group mb-3">
            type:
            <div className="p-2 m-2 pet-search">
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
            <div className="p-2 m-2 pet-location">
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
            </div>
            breeds:
            <div className="p-2 m-2 pet-breed">
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
            </div>
            <div class="input-group-append">
              <div className="search-button">
                <button
                  onClick={this.handleFormSubmit}
                  class="btn btn-dark my-2 my-sm-0 m-2"
                  type="button"
                  id="button-addon2"
                >
                  Search for pets
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {this.state.pets.map((pet) => (
            <PetCard
              name={pet.name}
              species={pet.species}
              breeds={pet.breeds.primary}
              image= {"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48503602/1/?bust=1594862715&width=300"}
            />
            // <PetCard name={pet.name} image={pet.primary_photo_cropped} species={pet.type} breeds={pet.breeds} />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;

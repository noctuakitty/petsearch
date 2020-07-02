import React, { Component } from "react";
import FeaturedAnimal from "../components/FeaturedAnimal";

var petfinder = require("@petfinder/petfinder-js");
var client = new petfinder.Client({
  apiKey: process.env.REACT_APP_API_KEY,
  secret: process.env.REACT_APP_API_SECRET
});

class Home extends Component {
  state = {
    // results: [],
    featuredPhoto: "",
    featuredName: "",
    featuredSpecies: "",
    featuredBreed: "",
    featuredGender: "",
    featuedStatus: ""
  };

  searchAnimals = () => {
    client.animal
      .search({
        type: "rabbit",
        location: "80221"
      })
      .then((response) => {
        let featuredAnimal = response.data.animals[0];
        let featuredImage = "";

        const animalsWithImages = response.data.animals.filter(
          (animal) =>
            animal.primary_photo_cropped && animal.primary_photo_cropped.medium
        );

        if (animalsWithImages.length > 0) {
          featuredAnimal = animalsWithImages[0];
          featuredImage = featuredAnimal.primary_photo_cropped.medium;
        }

        console.log(response.data.animals[0]);
        this.setState({
          //   results: response.data.animals,
          featuredPhoto: featuredImage,
          featuredName: featuredAnimal.name,
          featuredSpecies: featuredAnimal.species,
          featuredBreed: featuredAnimal.breeds.primary,
          featuredGender: featuredAnimal.gender,
          featuredStatus: featuredAnimal.status
        });
        console.log(this.state.results);
        // Do something with `response.data.animals`
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidMount() {
    this.searchAnimals();
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Welcome to fluffy</h1>
        {/* {this.state.results.map((res) => (
          <FeaturedAnimal
            name={res.featuredName}
            species={res.featuredSpecies}
            gender={res.featuredGender}
            breed={res.featuredBreed}
            status={res.featuredStatus}
          />
        ))} */}
        <FeaturedAnimal
          photo={this.state.featuredPhoto}
          name={this.state.featuredName}
          species={this.state.featuredSpecies}
          gender={this.state.featuredGender}
          breed={this.state.featuredBreed}
          status={this.state.featuredStatus}
        />
      </div>
    );
  }
}
export default Home;

// curl -d "grant_type=client_credentials&client_id=N8GeiieoVoNpVxmvozyKUYUvCajYJSrXMVMO5zAaWESD7jb6GD&client_secret=FsKYSlDwvn98riFhjnH2OYzWh6qr9G3BY7QFcETE" https://api.petfinder.com/v2/oauth2/token

// "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJOOEdlaWllb1ZvTnBWeG12b3p5S1VZVXZDYWpZSlNyWE1WTU81ekFhV0VTRDdqYjZHRCIsImp0aSI6IjE1ZGNjYjIzNTUwMWI4YmVmNmQxMjljNjJhMTI2MjdkNWE0YWZjZTJlZWZhZDg3YzU0ZmI1ZTJlN2M5NWVjYmQ5ZDZmZTQ1MjlmYmMwZjU2IiwiaWF0IjoxNTkzMjE5MDYyLCJuYmYiOjE1OTMyMTkwNjIsImV4cCI6MTU5MzIyMjY2Miwic3ViIjoiIiwic2NvcGVzIjpbXX0.N7HuaamhxLJGC5En8oKJPucgWX_ucqpzIvInmsYFeSbAAEvi1rCDOZT0Xg5cjdXOKg7AT9DByh2ekaK0NPCJdL0_8xaIBO8B7ypD-6mOhnVk83uGTrFYwUHclKD2qabdE3aMPFhjaqYKTD4OOSFuo2JSzTiVlSrcyUpxj__XSo18WF3cmlOFlBR2DYny0SLfTTEwUksfeogScoSe3w2twz_-nZyTkmCjNTmWGa3RP7okYdvTRaazKAtGRKWOabSkdw7bEWe5DobzMNKe5rOQOavRTw_Je1-KKV38k5SgWyxJ469fXlVr0VyjXwxCFvXWIgndYrXkFNlRvCHzgrceZg"

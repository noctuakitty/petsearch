import React, { Component } from "react";
import FeaturedAnimal from "./../FeaturedAnimal";
import api from "../../utils/api";

class Home extends Component {
  state = {
    // results: [],
    featuredPhoto: "",
    featuredName: "",
    featuredSpecies: "",
    featuredBreed: "",
    featuredGender: "",
    featuredStatus: ""
  };

  componentDidMount() {
    var list = [
      {
        type: "dog",
        breed: "labrador"
      },
      {
        type: "dog",
        breed: "terrier"
      },
      {
        type: "dog",
        breed: "golden doodle"
      },
      {
        type: "dog",
        breed: "poodle"
      },
      {
        type: "dog",
        breed: "pug"
      },
      {
        type: "dog",
        breed: "boxer"
      },
      {
        type: "dog",
        breed: "chow chow"
      },
      {
        type: "cat",
        breed: "maine coon"
      },
      {
        type: "cat",
        breed: "rag doll"
      },
      {
        type: "cat",
        breed: "tabby"
      },
      {
        type: "cat",
        breed: "calico"
      },
      {
        type: "cat",
        breed: "persian"
      },
      {
        type: "cat",
        breed: "mixed breed"
      },
      {
        type: "cat",
        breed: "siamese"
      }
    ];
    var index = Math.floor(Math.random() * list.length);
    console.log(index);
    api
      .getPetFinder({
        type: list[index].type,
        breed: list[index].breed
      })
      .then((pet) => {
        console.log(pet);
        this.setState({
          featuredPhoto: pet.data.animals[0].primary_photo_cropped
            ? pet.data.animals[0].primary_photo_cropped.small
            : "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483296.jpg",
          featuredName: pet.data.animals[0].name,
          featuredSpecies: pet.data.animals[0].species,
          featuredBreed: pet.data.animals[0].breed,
          featuredGender: pet.data.animals[0].gender,
          featuredStatus: pet.data.animals[0].status
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Welcome to Fluffy</h1>
          <p>
            With Fluffy you can find your new best friend without having to
            visit the website of every shelter in your area. Signup and find
            your Fluffy
          </p>
        </div>
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

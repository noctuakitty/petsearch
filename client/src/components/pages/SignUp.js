import React, { Component } from "react";
import api from "../../utils/api";

class SignUp extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault()
      console.log("Name: " + event.target.elements.name.value)
      console.log("Username: " + event.target.elements.username.value)
      console.log("Email: " + event.target.elements.email.value)
      console.log("Password: " + event.target.elements.password.value)
      
      const userData = {
        name: event.target.elements.name.value,
        username: event.target.elements.username.value,
        email: event.target.elements.email.value,
        password: event.target.elements.password.value
      }
      api.signUp(userData).then(res => {
        window.location.href = "/login"
      })
      
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <label>
            Name:
            <input
              type="text"
              name="name"
              ref={node => (this.inputNode = node)}
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              ref={node => (this.inputNode = node)}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              ref={node => (this.inputNode = node)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              ref={node => (this.inputNode = node)}
            />
          </label>
          <button type="submit">Submit</button>
          <a href="/login">Already have an account login in here!</a>
        </form>
      )
    }
  }

export default SignUp;

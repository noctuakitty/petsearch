import React, { Component } from "react";

class SignUp extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault()
      console.log("Name: " + event.target.elements.name.value)
      console.log("Email: " + event.target.elements.email.value)
      console.log("Password: " + event.target.elements.password.value)
      
      
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
        </form>
      )
    }
  }

export default SignUp;
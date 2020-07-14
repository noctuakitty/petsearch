import React, { Component } from "react";
import api from "../../utils/api";

class Login extends React.Component {

    handleSubmit = (event) => {
      event.preventDefault()
      console.log("Username: " + event.target.elements.username.value)
      console.log("Password: " + event.target.elements.password.value)

      const userData = {
        username: event.target.elements.username.value,
        password: event.target.elements.password.value
      }
      api.getLogin(userData).then(res => {
        window.location.href = "/"
      })
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
          <label>
            Username:
            <input
              type="text"
              name="username"
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
          <a href="/signup">Don't have an account? Signup here!</a>
        </form>
      )
    }
  }

export default Login;

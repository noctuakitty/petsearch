import React, { Component } from "react";
import api from "../../utils/api";
class Login extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault()
      console.log("Email: " + event.target.elements.email.value)
      console.log("Password: " + event.target.elements.password.value)

      const userData = {
        username: event.target.elements.email.value,
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

export default Login;

import React, { Component } from 'react';
import firebase from 'firebase';
import './../Register.css'

class Register extends Component {
  render() {
    return (
      <div>
      <p>Don't have an account? Register</p>
      <input value="e-mail" type="text" placeholder="E-mail"/>
      <input value="password" type="password" placeholder="Password"/>
      <button>Sign Up</button>
      </div>
    )
  }
}

export default Register

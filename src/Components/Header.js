import React, { Component } from 'react';
//import logo from './img/logo-blanco.png'

class Header extends Component {
  render() {
    return (
      <div className = "Header">
        <form>
        <input type="text" name="e-mail" placeholder="E-mail"/>
        <input type="password" name="password" placeholder="Password"/>
        <button>Login</button>
        </form>
      </div>
    )
  }
}

export default Header
import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './../logo-blanco.png'
import App from './../App'
import './../Header.css'

class Header extends Component {
  constructor() {
    super();//Estamos heredando de otra clase para que llame al contro
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount() { //Se dispara una vez se renderiza
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user }); //podria ser user:user pero se resume 
    }) //devuelve un objeto usuario
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    // proveedor de google

    //aca va lo que muestra el usurio 
    firebase.auth().signInWithPopup(provider)
      // este sgning devuelve una promesa
      .then(result => console.log(`${result.user.email} ha iniciado sesión `))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha salido`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  renderLoginButton() {
    if (this.state.user) {
      return (
        <button onClick={this.handleLogout} className="Logout-btn">Log-out</button>
      );
    } else {
      return (
        // si no esta logueado se renderisa el boton y toda la pa ta
        <button className="Login-btn" onClick={this.handleAuth}> Log In with Google </button>
      )

    }
  }

  render() {
    return (
      <div className = "Header">
      <img src = {logo} alt = "logo" className = "Logo-img" />
        <p className="App-intro">
          {this.renderLoginButton()}
        </p>
        {this.state.user && (
          <div>
            <div className="User">
              <img width="50" src={this.state.user.photoURL} alt={this.state.displayName} className='UserImg' />
              Welcome, {this.state.user.displayName}
            </div>
            <div>
              <h2>Registra</h2>
            </div>
          </div>
        )}
      </div>
    )
  }
}


export default Header
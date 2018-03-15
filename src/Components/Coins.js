import React, { Component } from 'react';
import firebase from 'firebase';
import Input from './Input';
import CoinsAPI from './CoinsAPI';

class Coins extends Component {
  constructor() {
    super();
    this.state = {
      coinsbit: 10
    };
    this.setCoins = this.setCoins.bind(this);
  
  }

  setCoins(coins) {
    this.setState({
      coinsbit: coins
    })
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const coinsbitRef = rootRef.child('coinsbit');
    coinsbitRef.on('value', snap => {

    })
  }
  render() {
    return (
      <div>
        <div className='coins'>
          <h1> {this.state.coinsbit}</h1>
        </div>
        <div>
          <h2>Ingresa tus bit coins</h2>
          <Input setCoins= {this.setCoins} />
        </div>
        <div>
          <h2>El precio del Bitcon is </h2>
          <CoinsAPI/>
        </div>
      </div>
    );
  }
}

export default Coins;
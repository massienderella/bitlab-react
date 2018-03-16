import React, { Component } from 'react';
import firebase from 'firebase';
import Input from './Input';
import CoinsAPI from './CoinsAPI';
import './../Coins.css'

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
      <div className="BTCContainer">
        <div className='coins'>
          <h1> You have registered {this.state.coinsbit} BitCoins</h1>
        </div>
        <div className="Select">
          <h4>Register your BitCoins</h4>
          <Input setCoins= {this.setCoins} />
        </div>
        <div className="BTCPrices">
          <h4 className="BTCTitle">BTC Prices </h4>
          <CoinsAPI/>
        </div>
      </div>
    );
  }
}

export default Coins;
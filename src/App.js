import React, { Component } from 'react';
import Titles from './Components/Titles'
import Header from './Components/Header'

const url = "https://api.coindesk.com/v1/bpi/currentprice/CLP.json"

class App extends Component {
  bitcoinPrice = async (e) => {
  e.preventDefault();
    const apiCall = await fetch(`${url}`);
    const data = await apiCall.json();
    console.log(data)
  }
}
  render() {
    return (
      <div>
        <Header />
        <Titles />
      </div>
    )
  }
}

export default App
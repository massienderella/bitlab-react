import React, { Component } from 'react';
import Coins from './../Components/Coins';
import './../BTCprices.css'

class BTCprices extends Component {
  render() {
    return (
      <div className="Prices">
        <Coins />
      </div>
    )
  }
}

export default BTCprices
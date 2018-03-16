import React, { Component } from 'react';
import './../Titles.css'

class Titles extends Component {
  render() {
    return (
      <div className="Titles">
        <h1>Welcome to BitLab</h1>
        <div className="Row">
          <div className="Col-s8">
            <p>BitLab offers complete cryptocurrency management, with easy to use tools to keep track of all your cryptocurrency investments. Get detailed price and market information for individual currencies and your entire portfolio all in one place</p>
          </div>
        </div>  
      </div>
    )
  }
}

export default Titles
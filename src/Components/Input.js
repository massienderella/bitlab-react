import React, { Component } from 'react';
import './../Input.css'


class Input extends Component { 
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.setCoins(this.state.value);  
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <label>
          BitCoin amount:
          <input type="number" value={this.state.value} onChange={this.handleChange} className="BTCInput" />
        </label>
        <button className="btnCoins" onClick={this.handleSubmit}>Coins </button>
      </div>
    );
  }
}

export default Input; 
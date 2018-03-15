import React, { Component } from 'react';



class Input extends React.Component {
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
          Cantidad de BitConis:
          <input type="number" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button className="btnCoins" onClick={this.handleSubmit}>Coins </button>
          </div>
    );
  }
}



export default Input; 
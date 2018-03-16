import React, {Component} from 'react';
import DisplayInfo from './DisplayInfo';

class CoinsAPI extends Component {
  constructor(){
    super();
    this.state = {
      data: null,
    };
  }
 
  componentDidMount(){
    this.fetchData();
  }
  
  fetchData(){ // Smart component: interactua con el mundo exterior
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/CLP.json`)
    .then(response => response.json())
    .then(parsedJSON => this.setState({data: parsedJSON.bpi}))
    .catch(error => console.log('Error',error))
  }

  render (){
    if (this.state.data) {
      return (
      <div> 
        <DisplayInfo
          rate = { this.state.data.CLP.rate }
          description = { this.state.data.CLP.description }
          code = { this.state.data.CLP.code }
        />
        <DisplayInfo
          rate = { this.state.data.USD.rate }
          description = { this.state.data.USD.description }
          code = { this.state.data.USD.code }
        />
      </div>
    );
    } else {
      return <div>Cargando, espere por favor...</div>
    }
  }
}

export default CoinsAPI;

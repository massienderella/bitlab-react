import React, {Component} from 'react';

class DisplayInfo extends Component {

  // deberia validar props con propTypes
 
  render (){ // dummy component: solo renderiza cosas en el DOM basado en props
    return (
      <div>
        Precio para {this.props.description} al instante es: 
        { this.props.rate } {this.props.code}
      </div>
    );
  }
}

export default DisplayInfo;

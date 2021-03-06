import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DisplayInfo extends Component {

  // deberia validar props con propTypes
   render (){ // dummy component: solo renderiza cosas en el DOM basado en props
    return (
      <div>
        The price of BTC in {this.props.description} right now is: { this.props.rate } {this.props.code}
      </div>
    );
  }
}

DisplayInfo.propTypes = {
  rate : PropTypes.string.isRequired,
}

export default DisplayInfo;

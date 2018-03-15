import React, { Component } from 'react';

class Bitlab extends Component {
  //API COINDESK + OBTENEMOS LA DATA
$(document).ready(() => {
  $.ajax({
    url: 'https://api.coindesk.com/v1/bpi/currentprice/CLP.json',
    type: 'GET',
    datatype: 'json'
  })
    .done(function (response) {
      // getCurrencyRate(response);
      console.log(response)
      const data = JSON.parse(response)
      console.log(data)
      getCurrencyRate(data)
    })
    .fail(function () {
      console.log('error en conexión a API');
    });
});
}

export default Bitlab
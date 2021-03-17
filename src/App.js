
import React, { Component } from 'react';
import "./App.css";
import Product from './Product.js';
import Payment from './Payment.js';
import Title from './Title.js';


class App extends Component {
  render() {
    return (  
      <div>
      <Title/>
      <Product />
      <Payment/>
      </div>
    );
  }
}


export default App;


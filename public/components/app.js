/*=========================================
Renders Root component on the DOM.
Root Component (App): Handles render of
SquareForm and SVG. Holds state for
width, height, and color (since Redux is not
implemented) used by Square component passed
through _renderSquare function called in
SquareInput form.
=========================================*/

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SquareForm from './squareInputForm';
import SVG from './svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareWidth: '',
      squareHeight: '',
      squareColor: ''
    };
  }

  _renderSquare(width, height, color) {
    console.log(width, height, color);
    this.setState({squareWidth: width});
    this.setState({squareHeight: height});
    this.setState({squareColor: color});
    console.log(this.state.squareColor, this.state.squareHeight, this.state.squareWidth);
  }

  render() {
    return (
        <div>
          <h1>SquareIt</h1>
          <SquareForm
            _renderSquare={this._renderSquare.bind(this)}
          />
          <SVG
            squareWidth={this.state.squareWidth}
            squareHeight={this.state.squareHeight}
            squareColor={this.state.squareColor}/>
        </div>
      );
  }
};

export default App;

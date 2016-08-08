import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SquareForm from './components/squareInputForm';
import SVG from './components/svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareWidth: '',
      squareHeight: '',
      squareColor: ''
    };
  }

  // handleWidthChange(squareWidth) {
  //   console.log(this);
  //   this.setState({ squareWidth });
  //   console.log(this.state.squareWidth);
  // }

  // handleHeightChange(squareHeight) {
  //   this.setState({ squareHeight });
  // }

  // handleColorChange(squareColor) {
  //   this.setState({ squareColor });
  // }
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

ReactDom.render(<App/>, document.querySelector('.container'));

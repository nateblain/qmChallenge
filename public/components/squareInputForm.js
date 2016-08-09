/*=========================================
SquareForm Component: handles square input
data for width, height, and color and
submitting to trigger square render on SVG
=========================================*/


import React, { Component } from 'react';

class SquareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squareWidth: '',
      squareHeight: '',
      squareColor: ''
    }
  }

  handleSubmit(event) {
    console.log(this);
    event.preventDefault();
    // this is where field checks should happen
    this.props._renderSquare(this.state.squareWidth, this.state.squareHeight, this.state.squareColor);
    this.setState({squareWidth: ''});
    this.setState({squareHeight: ''});
    this.setState({squareColor: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h2>Input height, width, and color to render a square</h2>
        <label>Square Width:</label>
        <input
          className="squareWidth"
          value={this.state.squareWidth}
          onChange={event => this.setState({squareWidth: event.target.value})}
          type='number'
          required
        />
        <label>Square Height:</label>
        <input
          className="squareHeight"
          value={this.state.squareHeight}
          onChange={event => this.setState({squareHeight: event.target.value})}
          type='number'
          required
        />
        <label>Square Color (Please include the pound sign '#' for rendering hex colors):</label>
        <input
          className="squareColor"
          value={this.state.squareColor}
          onChange={event => this.setState({squareColor: event.target.value})}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }
};

export default SquareForm;

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
        <label>Square Width</label>
        <input
          value={this.state.squareWidth}
          onChange={event => this.setState({squareWidth: event.target.value})}
          type='number'
          required
        />
        <label>Square Height</label>
        <input
          value={this.state.squareHeight}
          onChange={event => this.setState({squareHeight: event.target.value})}
          type='number'
          required
        />
        <label>Square Color</label>
        <input
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

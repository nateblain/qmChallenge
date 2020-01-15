/*=========================================
RectangleForm Component: handles rectangle input
data for width, height, and color and
submitting to trigger rectangle render on SVG
=========================================*/


import React, { Component } from 'react';

interface Props {
  _renderRectangle: (arg0: string, arg1: string, arg2: string) => undefined;
}

interface State {
  rectangleWidth: string;
  rectangleHeight: string;
  rectangleColor: string;
}

class RectangleForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      rectangleWidth: '',
      rectangleHeight: '',
      rectangleColor: ''
    };
  }

  _handleSubmit(event: MouseEvent) {
    event.preventDefault();
    this.props._renderRectangle(this.state.rectangleWidth, this.state.rectangleHeight, this.state.rectangleColor);
    this.setState({rectangleWidth: ''});
    this.setState({rectangleHeight: ''});
    this.setState({rectangleColor: ''});
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>

        <header className="header">
          <h2>Input height, width, and color to render a rectangle*</h2>
        </header>

        <section className="form-field">
          <label>Rectangle Width: </label>
          <input
            className="input-field rectangleWidth"
            value={this.state.rectangleWidth}
            onChange={event => this.setState({rectangleWidth: event.target.value})}
            type='number'
            required
          />
        </section>

        <section className="form-field">
          <label>Rectangle Height: </label>
          <input
            className="input-field rectangleHeight"
            value={this.state.rectangleHeight}
            onChange={event => this.setState({rectangleHeight: event.target.value})}
            type='number'
            required
          />
        </section>

        <section className="form-field">
          <label>Rectangle Color: </label>
          <input
            className="input-field rectangleColor"
            value={this.state.rectangleColor}
            onChange={event => this.setState({rectangleColor: event.target.value})}
            required
          />
        </section>
        <button className="submit" type='submit'>Submit</button>
      </form>
    );
  }
};

export default RectangleForm;

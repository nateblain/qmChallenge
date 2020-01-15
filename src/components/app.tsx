/*=========================================
Renders Root component on the DOM.
Root Component (App): Handles render of
RectangleForm and SVG. Holds state for
width, height, and color (since Redux is not
implemented) used by Rectangle component passed
through _renderRectangle function called in
RectangleInput form.
=========================================*/

import React, { Component } from 'react'
import RectangleForm from './rectangleInputForm.tsx';
import SVG from './svg.tsx';
import '../styles/main.css';

interface State {
  rectangleWidth: string;
  rectangleHeight: string;
  rectangleColor: string;
}

export interface Props {}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      rectangleWidth: '',
      rectangleHeight: '',
      rectangleColor: ''
    };
  }

  _renderRectangle(width: string, height: string, color: string) {
    this.setState({rectangleWidth: width});
    this.setState({rectangleHeight: height});
    this.setState({rectangleColor: color});
  }

  render() {
    return (
        <section>
          <header className='header'>
            <h1 id="title" className='title'>SquareIt</h1>
          </header>
          <section id="main" className='main'>
            <RectangleForm
              _renderRectangle={this._renderRectangle.bind(this)}
            />
            <SVG
              rectangleWidth={this.state.rectangleWidth}
              rectangleHeight={this.state.rectangleHeight}
              rectangleColor={this.state.rectangleColor}/>
          </section>
          <footer>
            <p className="note">
              *Note: The rectangle will render at random places on the svg canvas.
              The entire rectangle may not always show
              (width and height are in pixels).
              Please use the pound sign (#) for rendering hex colors.
            </p>
            <p className="author">Built by Nate Blain</p>
          </footer>
        </section>
      );
  }
};

export default App;

import React, { Component } from 'react';
import Square from './square';

class SVG extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // checkWidthHeight() {
  //   console.log(this.props.squareWidth, this.props.squareHeight, this.props.squareColor);
  //   if (this.props.squareWidth >= 10 && this.props.squareWidth <= 590 && this.props.squareHeight >= 10 && this.props.squareHeight <= 390) {
  //     return true;
  //   } else {
  //     console.log('hit');
  //     return false;
  //   }
  // }

  render() {
    if (!this.props.squareWidth || !this.props.squareHeight || !this.props.squareColor) {
      return (
        <svg className='svg' width="600" height="400">
        </svg>
      );
    }

    return (
      <svg className='svg' width="600" height="400">
        <Square
          squareWidth={this.props.squareWidth}
          squareHeight={this.props.squareHeight}
          squareColor={this.props.squareColor}
        />
      </svg>
    );
  }
};

export default SVG;



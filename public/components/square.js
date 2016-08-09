/*=========================================
Square Function-based Component: handles
square rendered in the SVG component if
width, height, and color props exist
=========================================*/

import React, { Component } from 'react';

const Square = (props) => {
  console.log(props);
  const xPos = Math.round((Math.random()*(590 - props.squareWidth)) + (props.squareWidth + 10));
  const yPos = Math.round((Math.random()*(390 - props.squareHeight)) + (props.squareHeight + 10));

  return (
    <rect x={xPos} y={yPos} width={props.squareWidth} height={props.squareHeight} fill={props.squareColor}></rect>
  );
}

export default Square;

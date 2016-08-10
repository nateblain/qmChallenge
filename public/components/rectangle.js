/*=========================================
Rectangle Function-based Component: handles
rectangle rendered in the SVG component if
width, height, and color props exist
=========================================*/

import React, { Component } from 'react';

const Rectangle = (props) => {
  const xPos = Math.random()*(780) + 20;
  const yPos = Math.random()*(580) + 20;

  return (
    <rect x={xPos} y={yPos} width={props.rectangleWidth} height={props.rectangleHeight} fill={props.rectangleColor}></rect>
  );
}

export default Rectangle;

/*=========================================
Rectangle Function-based Component: handles
rectangle rendered in the SVG component if
width, height, and color props exist.
=========================================*/

import React from 'react';

interface Props {
  rectangleWidth: string;
  rectangleHeight: string;
  rectangleColor: string;
}

const Rectangle = (props: Props) => {
  const xPos = Math.random()*(780) + 20;
  const yPos = Math.random()*(580) + 20;

  return ( // typescript gotcha! must have parentheses
    <rect x={xPos} y={yPos} width={props.rectangleWidth} height={props.rectangleHeight} fill={props.rectangleColor} />
  );
}

export default Rectangle;

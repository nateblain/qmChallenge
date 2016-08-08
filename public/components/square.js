import React, { Component } from 'react';

const Square = (props) => {
  let xPos = Math.round((Math.random()*(590 - props.squareWidth)) + (props.squareWidth + 10));
  let yPos = Math.round((Math.random()*(390 - props.squareHeight)) + (props.squareHeight + 10));
  if (!props.squareWidth) {
    return <square></square>;
  }
  return (
    <rect x={xPos} y={yPos} width={props.squareWidth} height={props.squareHeight} fill={props.squareColor}></rect>
  );
}

export default Square;

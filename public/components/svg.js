/*=========================================
SVG Component: handles SVG render and
passing props down from root component to
Rectangle component if the props exist.
=========================================*/


import React, { Component } from 'react';
import Rectangle from './rectangle';

const SVG = (props) => {

    if (!props.rectangleWidth || !props.rectangleHeight || !props.rectangleColor) {
      return (
        <svg className='svg'></svg>
      );
    }

    return (
      <section className="canvas">
        <svg className="svg">
          <Rectangle
            rectangleWidth={props.rectangleWidth}
            rectangleHeight={props.rectangleHeight}
            rectangleColor={props.rectangleColor}
          />
        </svg>
      </section>
    );
};

export default SVG;



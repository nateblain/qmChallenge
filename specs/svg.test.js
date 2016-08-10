/*=========================================
SVG Component Tests
=========================================*/

import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import SVG from '../public/components/svg'
import Rectangle from '../public/components/rectangle';

describe('<SVG />', () => {

  it('checks that testing is working for SVG component', () => {
    expect(true).toEqual(true);
  });

  it('renders properly when width, height, and color props are falsy', () => {
    const props = {
      rectangleWidth: '',
      rectangleHeight: '',
      rectangleColor: ''
    }
    const wrapper = shallow( <SVG {...props}/> );
    expect(wrapper.find(Rectangle).length).toEqual(0);
  });

  it('renders a Rectangle component when width, height, and color props are provided', () => {
    const props = {
      rectangleWidth: 50,
      rectangleHeight: 50,
      rectangleColor: '#fff'
    }
    const wrapper = shallow( <SVG {...props}/> );
    expect(wrapper.find(Rectangle).length).toEqual(1);
  });

});

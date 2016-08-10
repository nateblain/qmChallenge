/*=========================================
Root Component Tests
=========================================*/

import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import App from '../public/components/app.js';
import RectangleForm from '../public/components/rectangleInputForm';
import SVG from '../public/components/svg';

describe('<App />', () => {

  it('checks that testing is working for root component', () => {
    expect(true).toEqual(true);
  });

  it('renders a <RectangleForm /> component', () => {
    const wrapper = shallow( <App /> );
    expect(wrapper.find(RectangleForm).length).toEqual(1);
  });

  it('renders a <SVG /> component', () => {
    const wrapper = shallow( <App /> );
    expect(wrapper.find(SVG).length).toEqual(1);
  });

});

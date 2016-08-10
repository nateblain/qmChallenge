/*=========================================
RectangleForm Component Tests
=========================================*/

import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import RectangleForm from '../public/components/rectangleInputForm';

describe('<RectangleForm />', () => {

  it('checks that testing is working for RectangleForm component', () => {
    expect(true).toEqual(true);
  });

  it('renders properly', () => {
     const wrapper = shallow(
        <RectangleForm _renderRectangle={() => {}}/>
      )
    expect(
      wrapper.length
    ).toEqual(1);
  });

  it('checks that the rectangleWidth state has been updated on input change', () => {
    const handleChange = sinon.spy();
    const wrapper = shallow(
      <RectangleForm _renderRectangle={handleChange}/>
    );
    wrapper.find('input[className="input-field rectangleWidth"]').simulate('change', {target: {value: 50}});
    expect(wrapper.state().rectangleWidth).toEqual(50);
  });

  it('checks that the rectangleHeight state has been updated on input change', () => {
    const handleChange = sinon.spy();
    const wrapper = shallow(
      <RectangleForm _renderRectangle={handleChange}/>
    );
    wrapper.find('input[className="input-field rectangleHeight"]').simulate('change', {target: {value: 50}});
    expect(wrapper.state().rectangleHeight).toEqual(50);
  });

  it('checks that the rectangleColor state has been updated on input change', () => {
    const handleChange = sinon.spy();
    const wrapper = shallow(
      <RectangleForm _renderRectangle={handleChange}/>
    );
    wrapper.find('input[className="input-field rectangleColor"]').simulate('change', {target: {value: '#fff'}});
    expect(wrapper.state().rectangleColor).toEqual('#fff');
  });

});

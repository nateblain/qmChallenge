/*=========================================
SquareForm Component Tests
=========================================*/

import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SquareForm from '../public/components/squareInputForm';

describe('<squareInputForm />', () => {

  it('checks that testing is working for SquareForm component', () => {
    expect(true).toEqual(true);
  });

  it('renders properly', () => {
     const wrapper = shallow(
        <SquareForm _renderSquare={() => {}}/>
      )
    expect(
      wrapper.length
    ).toEqual(1);
  });

  it('checks that the squareWidth state has been updated on input change', () => {
    const handleChange = sinon.spy();
    const wrapper = shallow(
      <SquareForm _renderSquare={handleChange}/>
    );
    wrapper.find('input[className="squareWidth"]').simulate('change', {target: {value: 50}});
    expect(wrapper.state().squareWidth).toEqual(50);
  });

  it('checks that the squareHeight state has been updated on input change', () => {
    const handleChange = sinon.spy();
    const wrapper = shallow(
      <SquareForm _renderSquare={handleChange}/>
    );
    wrapper.find('input[className="squareHeight"]').simulate('change', {target: {value: 50}});
    expect(wrapper.state().squareHeight).toEqual(50);
  });

  it('checks that the squareColor state has been updated on input change', () => {
    const handleChange = sinon.spy();
    const wrapper = shallow(
      <SquareForm _renderSquare={handleChange}/>
    );
    wrapper.find('input[className="squareColor"]').simulate('change', {target: {value: '#fff'}});
    expect(wrapper.state().squareColor).toEqual('#fff');
  });

});

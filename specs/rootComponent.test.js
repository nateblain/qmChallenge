/*=========================================
Root Component Tests
// =========================================*/

import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import App from '../public/components/app.js';
import SquareForm from '../public/components/squareInputForm';
import SVG from '../public/components/svg';

describe('<App />', () => {

  it('checks that testing is working for root component', () => {
    expect(true).toEqual(true);
  });

  it('renders an <SquareForm /> component', () => {
    const wrapper = shallow( <App /> );
    expect(wrapper.find(SquareForm).length).toEqual(1);
  });

  it('renders an <SVG /> component', () => {
    const wrapper = shallow( <App /> );
    expect(wrapper.find(SVG).length).toEqual(1);
  });

  // it('checks that the squareWidth state has been updated on input change in SquareForm', () => {
  //   const handleChange = sinon.spy();
  //   const SquareFormWrapper = shallow(
  //     <SquareForm _renderSquare={handleChange}/>
  //   );
  //   const AppWrapper = shallow(
  //     <App />
  //   );

  //   SquareFormWrapper.find('input[className="squareWidth"]').simulate('change', {target: {value: 50}});
  //   expect(AppWrapper.state().squareWidth).toEqual(50);
  // });

  // it('checks that the squareHeight state has been updated on input change in SquareForm', () => {
  //   const handleChange = sinon.spy();
  //   const SquareFormWrapper = shallow(
  //     <SquareForm _renderSquare={handleChange}/>
  //   );
  //   const AppWrapper = shallow(
  //     <App />
  //   );

  //   SquareFormWrapper.find('input[className="squareHeight"]').simulate('change', {target: {value: 50}});
  //   expect(AppWrapper.state().squareHeight).toEqual(50);
  // });

  // it('checks that the squareColor state has been updated on input change in SquareForm', () => {
  //   const handleChange = sinon.spy();
  //   const SquareFormWrapper = shallow(
  //     <SquareForm _renderSquare={handleChange}/>
  //   );
  //   const AppWrapper = shallow(
  //     <App />
  //   );

  //   SquareFormWrapper.find('input[className="squareColor"]').simulate('change', {target: {value: '#fff'}});
  //   expect(AppWrapper.state().squareColor).toEqual('#fff');
  // });

});

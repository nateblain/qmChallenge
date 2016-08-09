/*=========================================
Square Component Tests
=========================================*/

import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Square from '../public/components/square';

describe('<square />', () => {

  it('checks that testing is working for Square component', () => {
    expect(true).toEqual(true);
  });

  it('renders properly', () => {
    const props = {
      squareWidth: 50,
      squareHeight: 50,
      squareColor: '#fff'
    }
    expect(
      shallow(
        <Square {...props} />
      ).length
    ).toEqual(1);
  });

});

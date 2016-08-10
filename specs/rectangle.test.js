/*=========================================
Rectangle Component Tests
=========================================*/

import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Rectangle from '../public/components/rectangle';

describe('<rectangle />', () => {

  it('checks that testing is working for Rectangle component', () => {
    expect(true).toEqual(true);
  });

  it('renders properly when props are past to it', () => {
    const props = {
      rectangleWidth: 50,
      rectangleHeight: 50,
      rectangleColor: '#fff'
    }
    expect(
      shallow(
        <Rectangle {...props} />
      ).length
    ).toEqual(1);
  });

});

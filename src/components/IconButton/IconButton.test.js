import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import IconButton from './IconButton';

const wrapper = shallow(<IconButton />);

describe('(Component) IconButton', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });
});

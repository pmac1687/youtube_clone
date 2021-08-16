import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe('Footer', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Footer />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});

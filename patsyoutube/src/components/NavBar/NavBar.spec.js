import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './index';

describe('NavBar', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<NavBar />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});

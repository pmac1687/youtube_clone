import React from 'react';
import { shallow } from 'enzyme';
import SideBar from './index';

describe('SideBar', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<SideBar />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
